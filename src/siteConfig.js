export const SITE_URL = 'https://analystnitinjain.com'

/** Absolute URL for a path on analystnitinjain.com */
export function siteUrl(path = '/') {
  if (!path || path === '/') return SITE_URL
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}
