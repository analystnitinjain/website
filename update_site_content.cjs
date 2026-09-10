const fs = require('fs');
const path = require('path');

const contentPath = 'C:/Users/aiman/AppData/Roaming/Code/User/workspaceStorage/caf3fd4ac2368b8fb5224da4bb3b19c9/GitHub.copilot-chat/chat-session-resources/b74923c8-6826-4e4a-93c7-40f763585a55/call_8h6lVn0N2qqad19M1kW1qpzI__vscode-1776935342827/content.txt';
const rawContent = fs.readFileSync(contentPath, 'utf8');

let jsonData;
if (rawContent.startsWith('Result: ')) {
  jsonData = JSON.parse(rawContent.substring(8));
} else {
  const jsonMatch = rawContent.match(/^Result:\s*(.*)/s);
  if (jsonMatch) {
    jsonData = JSON.parse(jsonMatch[1]);
  } else {
    jsonData = JSON.parse(rawContent);
  }
}

const BOILERPLATE = [
  'PRIVACY POLICY', 'DISCLAIMERS', 'TERMS & CONDITIONS', 'COMPLAINTS DATA', 
  'CANCELLATION & REFUNDS', 'GRIEVANCE REDRESSAL', 'CODE OF CONDUCT', 
  'INVESTOR CHARTER', 'FAQS', 'CONTACT US', 
  'Copyright © 2026 Nitin Jain - All Rights Reserved', 
  'SEBI Research Analyst No.: INH000010399', 'BSE Enlistment No.: 5637'
].map(s => s.toLowerCase());

function cleanLines(lines) {
  let cleaned = [];
  for (let line of lines) {
    let trimmed = line.trim();
    if (!trimmed || trimmed === '▼' || trimmed === '▼ ') continue;
    if (BOILERPLATE.some(b => trimmed.toLowerCase().includes(b))) continue;
    
    if (cleaned.length > 0 && cleaned[cleaned.length - 1] === trimmed) continue;
    cleaned.push(trimmed);
  }
  return cleaned;
}

const pagesByPath = {};
let routesCount = 0;
let nonEmptyParagraphsCount = 0;

for (const [route, pageData] of Object.entries(jsonData)) {
  routesCount++;
  const bodyText = typeof pageData.bodyText === 'string' ? pageData.bodyText : '';
  const bodyLines = bodyText.split('\n').map(l => l.trim()).filter(l => l);
  const headings = Array.isArray(pageData.headings) ? pageData.headings : [];
  
  let title = '';
  if (bodyLines.length > 0) {
    title = bodyLines[0];
  } else if (headings.length > 0) {
    title = headings[0];
  } else {
    title = route;
  }

  let paragraphs = cleanLines(bodyLines.slice(1));
  
  if (paragraphs.length === 0 && Array.isArray(pageData.paragraphs)) {
    paragraphs = cleanLines(pageData.paragraphs);
  }

  if (paragraphs.length > 0) {
    nonEmptyParagraphsCount++;
  }

  pagesByPath[route] = {
    title: title,
    sections: [
      {
        heading: 'Overview',
        paragraphs: paragraphs
      }
    ]
  };
}

const outputPath = path.join(__dirname, 'src', 'content', 'siteContent.js');
const outputContent = `export const pagesByPath = ${JSON.stringify(pagesByPath, null, 2)};\n`;
fs.writeFileSync(outputPath, outputContent);

console.log(`Routes processed: ${routesCount}`);
console.log(`Routes with non-empty paragraphs: ${nonEmptyParagraphsCount}`);
