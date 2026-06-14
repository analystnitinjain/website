(function () {
  const D = document.createElement("link").relList;
  if (D && D.supports && D.supports("modulepreload")) return;
  for (const B of document.querySelectorAll('link[rel="modulepreload"]')) y(B);
  new MutationObserver((B) => {
    for (const z of B)
      if (z.type === "childList")
        for (const te of z.addedNodes)
          te.tagName === "LINK" && te.rel === "modulepreload" && y(te);
  }).observe(document, { childList: !0, subtree: !0 });
  function j(B) {
    const z = {};
    return (
      B.integrity && (z.integrity = B.integrity),
      B.referrerPolicy && (z.referrerPolicy = B.referrerPolicy),
      B.crossOrigin === "use-credentials"
        ? (z.credentials = "include")
        : B.crossOrigin === "anonymous"
          ? (z.credentials = "omit")
          : (z.credentials = "same-origin"),
      z
    );
  }
  function y(B) {
    if (B.ep) return;
    B.ep = !0;
    const z = j(B);
    fetch(B.href, z);
  }
})();
var Fr = { exports: {} },
  pi = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ff;
function Em() {
  if (Ff) return pi;
  Ff = 1;
  var x = Symbol.for("react.transitional.element"),
    D = Symbol.for("react.fragment");
  function j(y, B, z) {
    var te = null;
    if (
      (z !== void 0 && (te = "" + z),
      B.key !== void 0 && (te = "" + B.key),
      "key" in B)
    ) {
      z = {};
      for (var Q in B) Q !== "key" && (z[Q] = B[Q]);
    } else z = B;
    return (
      (B = z.ref),
      { $$typeof: x, type: y, key: te, ref: B !== void 0 ? B : null, props: z }
    );
  }
  return ((pi.Fragment = D), (pi.jsx = j), (pi.jsxs = j), pi);
}
var $f;
function Rm() {
  return ($f || (($f = 1), (Fr.exports = Em())), Fr.exports);
}
var o = Rm(),
  $r = { exports: {} },
  L = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var If;
function Mm() {
  if (If) return L;
  If = 1;
  var x = Symbol.for("react.transitional.element"),
    D = Symbol.for("react.portal"),
    j = Symbol.for("react.fragment"),
    y = Symbol.for("react.strict_mode"),
    B = Symbol.for("react.profiler"),
    z = Symbol.for("react.consumer"),
    te = Symbol.for("react.context"),
    Q = Symbol.for("react.forward_ref"),
    H = Symbol.for("react.suspense"),
    T = Symbol.for("react.memo"),
    U = Symbol.for("react.lazy"),
    P = Symbol.iterator;
  function J(u) {
    return u === null || typeof u != "object"
      ? null
      : ((u = (P && u[P]) || u["@@iterator"]),
        typeof u == "function" ? u : null);
  }
  var Se = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    we = Object.assign,
    dt = {};
  function qe(u, A, M) {
    ((this.props = u),
      (this.context = A),
      (this.refs = dt),
      (this.updater = M || Se));
  }
  ((qe.prototype.isReactComponent = {}),
    (qe.prototype.setState = function (u, A) {
      if (typeof u != "object" && typeof u != "function" && u != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, u, A, "setState");
    }),
    (qe.prototype.forceUpdate = function (u) {
      this.updater.enqueueForceUpdate(this, u, "forceUpdate");
    }));
  function hn() {}
  hn.prototype = qe.prototype;
  function Tt(u, A, M) {
    ((this.props = u),
      (this.context = A),
      (this.refs = dt),
      (this.updater = M || Se));
  }
  var Me = (Tt.prototype = new hn());
  ((Me.constructor = Tt), we(Me, qe.prototype), (Me.isPureReactComponent = !0));
  var ht = Array.isArray,
    F = { H: null, A: null, T: null, S: null, V: null },
    Ze = Object.prototype.hasOwnProperty;
  function Ve(u, A, M, E, C, $) {
    return (
      (M = $.ref),
      { $$typeof: x, type: u, key: A, ref: M !== void 0 ? M : null, props: $ }
    );
  }
  function We(u, A) {
    return Ve(u.type, A, void 0, void 0, void 0, u.props);
  }
  function pt(u) {
    return typeof u == "object" && u !== null && u.$$typeof === x;
  }
  function _n(u) {
    var A = { "=": "=0", ":": "=2" };
    return (
      "$" +
      u.replace(/[=:]/g, function (M) {
        return A[M];
      })
    );
  }
  var zt = /\/+/g;
  function He(u, A) {
    return typeof u == "object" && u !== null && u.key != null
      ? _n("" + u.key)
      : A.toString(36);
  }
  function mn() {}
  function yn(u) {
    switch (u.status) {
      case "fulfilled":
        return u.value;
      case "rejected":
        throw u.reason;
      default:
        switch (
          (typeof u.status == "string"
            ? u.then(mn, mn)
            : ((u.status = "pending"),
              u.then(
                function (A) {
                  u.status === "pending" &&
                    ((u.status = "fulfilled"), (u.value = A));
                },
                function (A) {
                  u.status === "pending" &&
                    ((u.status = "rejected"), (u.reason = A));
                },
              )),
          u.status)
        ) {
          case "fulfilled":
            return u.value;
          case "rejected":
            throw u.reason;
        }
    }
    throw u;
  }
  function Oe(u, A, M, E, C) {
    var $ = typeof u;
    ($ === "undefined" || $ === "boolean") && (u = null);
    var X = !1;
    if (u === null) X = !0;
    else
      switch ($) {
        case "bigint":
        case "string":
        case "number":
          X = !0;
          break;
        case "object":
          switch (u.$$typeof) {
            case x:
            case D:
              X = !0;
              break;
            case U:
              return ((X = u._init), Oe(X(u._payload), A, M, E, C));
          }
      }
    if (X)
      return (
        (C = C(u)),
        (X = E === "" ? "." + He(u, 0) : E),
        ht(C)
          ? ((M = ""),
            X != null && (M = X.replace(zt, "$&/") + "/"),
            Oe(C, A, M, "", function (Xt) {
              return Xt;
            }))
          : C != null &&
            (pt(C) &&
              (C = We(
                C,
                M +
                  (C.key == null || (u && u.key === C.key)
                    ? ""
                    : ("" + C.key).replace(zt, "$&/") + "/") +
                  X,
              )),
            A.push(C)),
        1
      );
    X = 0;
    var Ke = E === "" ? "." : E + ":";
    if (ht(u))
      for (var ue = 0; ue < u.length; ue++)
        ((E = u[ue]), ($ = Ke + He(E, ue)), (X += Oe(E, A, M, $, C)));
    else if (((ue = J(u)), typeof ue == "function"))
      for (u = ue.call(u), ue = 0; !(E = u.next()).done; )
        ((E = E.value), ($ = Ke + He(E, ue++)), (X += Oe(E, A, M, $, C)));
    else if ($ === "object") {
      if (typeof u.then == "function") return Oe(yn(u), A, M, E, C);
      throw (
        (A = String(u)),
        Error(
          "Objects are not valid as a React child (found: " +
            (A === "[object Object]"
              ? "object with keys {" + Object.keys(u).join(", ") + "}"
              : A) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return X;
  }
  function b(u, A, M) {
    if (u == null) return u;
    var E = [],
      C = 0;
    return (
      Oe(u, E, "", "", function ($) {
        return A.call(M, $, C++);
      }),
      E
    );
  }
  function R(u) {
    if (u._status === -1) {
      var A = u._result;
      ((A = A()),
        A.then(
          function (M) {
            (u._status === 0 || u._status === -1) &&
              ((u._status = 1), (u._result = M));
          },
          function (M) {
            (u._status === 0 || u._status === -1) &&
              ((u._status = 2), (u._result = M));
          },
        ),
        u._status === -1 && ((u._status = 0), (u._result = A)));
    }
    if (u._status === 1) return u._result.default;
    throw u._result;
  }
  var Y =
    typeof reportError == "function"
      ? reportError
      : function (u) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var A = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof u == "object" &&
                u !== null &&
                typeof u.message == "string"
                  ? String(u.message)
                  : String(u),
              error: u,
            });
            if (!window.dispatchEvent(A)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", u);
            return;
          }
          console.error(u);
        };
  function re() {}
  return (
    (L.Children = {
      map: b,
      forEach: function (u, A, M) {
        b(
          u,
          function () {
            A.apply(this, arguments);
          },
          M,
        );
      },
      count: function (u) {
        var A = 0;
        return (
          b(u, function () {
            A++;
          }),
          A
        );
      },
      toArray: function (u) {
        return (
          b(u, function (A) {
            return A;
          }) || []
        );
      },
      only: function (u) {
        if (!pt(u))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return u;
      },
    }),
    (L.Component = qe),
    (L.Fragment = j),
    (L.Profiler = B),
    (L.PureComponent = Tt),
    (L.StrictMode = y),
    (L.Suspense = H),
    (L.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = F),
    (L.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (u) {
        return F.H.useMemoCache(u);
      },
    }),
    (L.cache = function (u) {
      return function () {
        return u.apply(null, arguments);
      };
    }),
    (L.cloneElement = function (u, A, M) {
      if (u == null)
        throw Error(
          "The argument must be a React element, but you passed " + u + ".",
        );
      var E = we({}, u.props),
        C = u.key,
        $ = void 0;
      if (A != null)
        for (X in (A.ref !== void 0 && ($ = void 0),
        A.key !== void 0 && (C = "" + A.key),
        A))
          !Ze.call(A, X) ||
            X === "key" ||
            X === "__self" ||
            X === "__source" ||
            (X === "ref" && A.ref === void 0) ||
            (E[X] = A[X]);
      var X = arguments.length - 2;
      if (X === 1) E.children = M;
      else if (1 < X) {
        for (var Ke = Array(X), ue = 0; ue < X; ue++)
          Ke[ue] = arguments[ue + 2];
        E.children = Ke;
      }
      return Ve(u.type, C, void 0, void 0, $, E);
    }),
    (L.createContext = function (u) {
      return (
        (u = {
          $$typeof: te,
          _currentValue: u,
          _currentValue2: u,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (u.Provider = u),
        (u.Consumer = { $$typeof: z, _context: u }),
        u
      );
    }),
    (L.createElement = function (u, A, M) {
      var E,
        C = {},
        $ = null;
      if (A != null)
        for (E in (A.key !== void 0 && ($ = "" + A.key), A))
          Ze.call(A, E) &&
            E !== "key" &&
            E !== "__self" &&
            E !== "__source" &&
            (C[E] = A[E]);
      var X = arguments.length - 2;
      if (X === 1) C.children = M;
      else if (1 < X) {
        for (var Ke = Array(X), ue = 0; ue < X; ue++)
          Ke[ue] = arguments[ue + 2];
        C.children = Ke;
      }
      if (u && u.defaultProps)
        for (E in ((X = u.defaultProps), X)) C[E] === void 0 && (C[E] = X[E]);
      return Ve(u, $, void 0, void 0, null, C);
    }),
    (L.createRef = function () {
      return { current: null };
    }),
    (L.forwardRef = function (u) {
      return { $$typeof: Q, render: u };
    }),
    (L.isValidElement = pt),
    (L.lazy = function (u) {
      return { $$typeof: U, _payload: { _status: -1, _result: u }, _init: R };
    }),
    (L.memo = function (u, A) {
      return { $$typeof: T, type: u, compare: A === void 0 ? null : A };
    }),
    (L.startTransition = function (u) {
      var A = F.T,
        M = {};
      F.T = M;
      try {
        var E = u(),
          C = F.S;
        (C !== null && C(M, E),
          typeof E == "object" &&
            E !== null &&
            typeof E.then == "function" &&
            E.then(re, Y));
      } catch ($) {
        Y($);
      } finally {
        F.T = A;
      }
    }),
    (L.unstable_useCacheRefresh = function () {
      return F.H.useCacheRefresh();
    }),
    (L.use = function (u) {
      return F.H.use(u);
    }),
    (L.useActionState = function (u, A, M) {
      return F.H.useActionState(u, A, M);
    }),
    (L.useCallback = function (u, A) {
      return F.H.useCallback(u, A);
    }),
    (L.useContext = function (u) {
      return F.H.useContext(u);
    }),
    (L.useDebugValue = function () {}),
    (L.useDeferredValue = function (u, A) {
      return F.H.useDeferredValue(u, A);
    }),
    (L.useEffect = function (u, A, M) {
      var E = F.H;
      if (typeof M == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React.",
        );
      return E.useEffect(u, A);
    }),
    (L.useId = function () {
      return F.H.useId();
    }),
    (L.useImperativeHandle = function (u, A, M) {
      return F.H.useImperativeHandle(u, A, M);
    }),
    (L.useInsertionEffect = function (u, A) {
      return F.H.useInsertionEffect(u, A);
    }),
    (L.useLayoutEffect = function (u, A) {
      return F.H.useLayoutEffect(u, A);
    }),
    (L.useMemo = function (u, A) {
      return F.H.useMemo(u, A);
    }),
    (L.useOptimistic = function (u, A) {
      return F.H.useOptimistic(u, A);
    }),
    (L.useReducer = function (u, A, M) {
      return F.H.useReducer(u, A, M);
    }),
    (L.useRef = function (u) {
      return F.H.useRef(u);
    }),
    (L.useState = function (u) {
      return F.H.useState(u);
    }),
    (L.useSyncExternalStore = function (u, A, M) {
      return F.H.useSyncExternalStore(u, A, M);
    }),
    (L.useTransition = function () {
      return F.H.useTransition();
    }),
    (L.version = "19.1.0"),
    L
  );
}
var Pf;
function ns() {
  return (Pf || ((Pf = 1), ($r.exports = Mm())), $r.exports);
}
var he = ns(),
  Ir = { exports: {} },
  xi = {},
  Pr = { exports: {} },
  es = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ed;
function Hm() {
  return (
    ed ||
      ((ed = 1),
      (function (x) {
        function D(b, R) {
          var Y = b.length;
          b.push(R);
          e: for (; 0 < Y; ) {
            var re = (Y - 1) >>> 1,
              u = b[re];
            if (0 < B(u, R)) ((b[re] = R), (b[Y] = u), (Y = re));
            else break e;
          }
        }
        function j(b) {
          return b.length === 0 ? null : b[0];
        }
        function y(b) {
          if (b.length === 0) return null;
          var R = b[0],
            Y = b.pop();
          if (Y !== R) {
            b[0] = Y;
            e: for (var re = 0, u = b.length, A = u >>> 1; re < A; ) {
              var M = 2 * (re + 1) - 1,
                E = b[M],
                C = M + 1,
                $ = b[C];
              if (0 > B(E, Y))
                C < u && 0 > B($, E)
                  ? ((b[re] = $), (b[C] = Y), (re = C))
                  : ((b[re] = E), (b[M] = Y), (re = M));
              else if (C < u && 0 > B($, Y))
                ((b[re] = $), (b[C] = Y), (re = C));
              else break e;
            }
          }
          return R;
        }
        function B(b, R) {
          var Y = b.sortIndex - R.sortIndex;
          return Y !== 0 ? Y : b.id - R.id;
        }
        if (
          ((x.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var z = performance;
          x.unstable_now = function () {
            return z.now();
          };
        } else {
          var te = Date,
            Q = te.now();
          x.unstable_now = function () {
            return te.now() - Q;
          };
        }
        var H = [],
          T = [],
          U = 1,
          P = null,
          J = 3,
          Se = !1,
          we = !1,
          dt = !1,
          qe = !1,
          hn = typeof setTimeout == "function" ? setTimeout : null,
          Tt = typeof clearTimeout == "function" ? clearTimeout : null,
          Me = typeof setImmediate < "u" ? setImmediate : null;
        function ht(b) {
          for (var R = j(T); R !== null; ) {
            if (R.callback === null) y(T);
            else if (R.startTime <= b)
              (y(T), (R.sortIndex = R.expirationTime), D(H, R));
            else break;
            R = j(T);
          }
        }
        function F(b) {
          if (((dt = !1), ht(b), !we))
            if (j(H) !== null) ((we = !0), Ze || ((Ze = !0), He()));
            else {
              var R = j(T);
              R !== null && Oe(F, R.startTime - b);
            }
        }
        var Ze = !1,
          Ve = -1,
          We = 5,
          pt = -1;
        function _n() {
          return qe ? !0 : !(x.unstable_now() - pt < We);
        }
        function zt() {
          if (((qe = !1), Ze)) {
            var b = x.unstable_now();
            pt = b;
            var R = !0;
            try {
              e: {
                ((we = !1), dt && ((dt = !1), Tt(Ve), (Ve = -1)), (Se = !0));
                var Y = J;
                try {
                  t: {
                    for (
                      ht(b), P = j(H);
                      P !== null && !(P.expirationTime > b && _n());
                    ) {
                      var re = P.callback;
                      if (typeof re == "function") {
                        ((P.callback = null), (J = P.priorityLevel));
                        var u = re(P.expirationTime <= b);
                        if (((b = x.unstable_now()), typeof u == "function")) {
                          ((P.callback = u), ht(b), (R = !0));
                          break t;
                        }
                        (P === j(H) && y(H), ht(b));
                      } else y(H);
                      P = j(H);
                    }
                    if (P !== null) R = !0;
                    else {
                      var A = j(T);
                      (A !== null && Oe(F, A.startTime - b), (R = !1));
                    }
                  }
                  break e;
                } finally {
                  ((P = null), (J = Y), (Se = !1));
                }
                R = void 0;
              }
            } finally {
              R ? He() : (Ze = !1);
            }
          }
        }
        var He;
        if (typeof Me == "function")
          He = function () {
            Me(zt);
          };
        else if (typeof MessageChannel < "u") {
          var mn = new MessageChannel(),
            yn = mn.port2;
          ((mn.port1.onmessage = zt),
            (He = function () {
              yn.postMessage(null);
            }));
        } else
          He = function () {
            hn(zt, 0);
          };
        function Oe(b, R) {
          Ve = hn(function () {
            b(x.unstable_now());
          }, R);
        }
        ((x.unstable_IdlePriority = 5),
          (x.unstable_ImmediatePriority = 1),
          (x.unstable_LowPriority = 4),
          (x.unstable_NormalPriority = 3),
          (x.unstable_Profiling = null),
          (x.unstable_UserBlockingPriority = 2),
          (x.unstable_cancelCallback = function (b) {
            b.callback = null;
          }),
          (x.unstable_forceFrameRate = function (b) {
            0 > b || 125 < b
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (We = 0 < b ? Math.floor(1e3 / b) : 5);
          }),
          (x.unstable_getCurrentPriorityLevel = function () {
            return J;
          }),
          (x.unstable_next = function (b) {
            switch (J) {
              case 1:
              case 2:
              case 3:
                var R = 3;
                break;
              default:
                R = J;
            }
            var Y = J;
            J = R;
            try {
              return b();
            } finally {
              J = Y;
            }
          }),
          (x.unstable_requestPaint = function () {
            qe = !0;
          }),
          (x.unstable_runWithPriority = function (b, R) {
            switch (b) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                b = 3;
            }
            var Y = J;
            J = b;
            try {
              return R();
            } finally {
              J = Y;
            }
          }),
          (x.unstable_scheduleCallback = function (b, R, Y) {
            var re = x.unstable_now();
            switch (
              (typeof Y == "object" && Y !== null
                ? ((Y = Y.delay),
                  (Y = typeof Y == "number" && 0 < Y ? re + Y : re))
                : (Y = re),
              b)
            ) {
              case 1:
                var u = -1;
                break;
              case 2:
                u = 250;
                break;
              case 5:
                u = 1073741823;
                break;
              case 4:
                u = 1e4;
                break;
              default:
                u = 5e3;
            }
            return (
              (u = Y + u),
              (b = {
                id: U++,
                callback: R,
                priorityLevel: b,
                startTime: Y,
                expirationTime: u,
                sortIndex: -1,
              }),
              Y > re
                ? ((b.sortIndex = Y),
                  D(T, b),
                  j(H) === null &&
                    b === j(T) &&
                    (dt ? (Tt(Ve), (Ve = -1)) : (dt = !0), Oe(F, Y - re)))
                : ((b.sortIndex = u),
                  D(H, b),
                  we || Se || ((we = !0), Ze || ((Ze = !0), He()))),
              b
            );
          }),
          (x.unstable_shouldYield = _n),
          (x.unstable_wrapCallback = function (b) {
            var R = J;
            return function () {
              var Y = J;
              J = R;
              try {
                return b.apply(this, arguments);
              } finally {
                J = Y;
              }
            };
          }));
      })(es)),
    es
  );
}
var td;
function Om() {
  return (td || ((td = 1), (Pr.exports = Hm())), Pr.exports);
}
var ts = { exports: {} },
  Ce = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nd;
function _m() {
  if (nd) return Ce;
  nd = 1;
  var x = ns();
  function D(H) {
    var T = "https://react.dev/errors/" + H;
    if (1 < arguments.length) {
      T += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var U = 2; U < arguments.length; U++)
        T += "&args[]=" + encodeURIComponent(arguments[U]);
    }
    return (
      "Minified React error #" +
      H +
      "; visit " +
      T +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function j() {}
  var y = {
      d: {
        f: j,
        r: function () {
          throw Error(D(522));
        },
        D: j,
        C: j,
        L: j,
        m: j,
        X: j,
        S: j,
        M: j,
      },
      p: 0,
      findDOMNode: null,
    },
    B = Symbol.for("react.portal");
  function z(H, T, U) {
    var P =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: B,
      key: P == null ? null : "" + P,
      children: H,
      containerInfo: T,
      implementation: U,
    };
  }
  var te = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function Q(H, T) {
    if (H === "font") return "";
    if (typeof T == "string") return T === "use-credentials" ? T : "";
  }
  return (
    (Ce.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = y),
    (Ce.createPortal = function (H, T) {
      var U =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!T || (T.nodeType !== 1 && T.nodeType !== 9 && T.nodeType !== 11))
        throw Error(D(299));
      return z(H, T, null, U);
    }),
    (Ce.flushSync = function (H) {
      var T = te.T,
        U = y.p;
      try {
        if (((te.T = null), (y.p = 2), H)) return H();
      } finally {
        ((te.T = T), (y.p = U), y.d.f());
      }
    }),
    (Ce.preconnect = function (H, T) {
      typeof H == "string" &&
        (T
          ? ((T = T.crossOrigin),
            (T =
              typeof T == "string"
                ? T === "use-credentials"
                  ? T
                  : ""
                : void 0))
          : (T = null),
        y.d.C(H, T));
    }),
    (Ce.prefetchDNS = function (H) {
      typeof H == "string" && y.d.D(H);
    }),
    (Ce.preinit = function (H, T) {
      if (typeof H == "string" && T && typeof T.as == "string") {
        var U = T.as,
          P = Q(U, T.crossOrigin),
          J = typeof T.integrity == "string" ? T.integrity : void 0,
          Se = typeof T.fetchPriority == "string" ? T.fetchPriority : void 0;
        U === "style"
          ? y.d.S(H, typeof T.precedence == "string" ? T.precedence : void 0, {
              crossOrigin: P,
              integrity: J,
              fetchPriority: Se,
            })
          : U === "script" &&
            y.d.X(H, {
              crossOrigin: P,
              integrity: J,
              fetchPriority: Se,
              nonce: typeof T.nonce == "string" ? T.nonce : void 0,
            });
      }
    }),
    (Ce.preinitModule = function (H, T) {
      if (typeof H == "string")
        if (typeof T == "object" && T !== null) {
          if (T.as == null || T.as === "script") {
            var U = Q(T.as, T.crossOrigin);
            y.d.M(H, {
              crossOrigin: U,
              integrity: typeof T.integrity == "string" ? T.integrity : void 0,
              nonce: typeof T.nonce == "string" ? T.nonce : void 0,
            });
          }
        } else T == null && y.d.M(H);
    }),
    (Ce.preload = function (H, T) {
      if (
        typeof H == "string" &&
        typeof T == "object" &&
        T !== null &&
        typeof T.as == "string"
      ) {
        var U = T.as,
          P = Q(U, T.crossOrigin);
        y.d.L(H, U, {
          crossOrigin: P,
          integrity: typeof T.integrity == "string" ? T.integrity : void 0,
          nonce: typeof T.nonce == "string" ? T.nonce : void 0,
          type: typeof T.type == "string" ? T.type : void 0,
          fetchPriority:
            typeof T.fetchPriority == "string" ? T.fetchPriority : void 0,
          referrerPolicy:
            typeof T.referrerPolicy == "string" ? T.referrerPolicy : void 0,
          imageSrcSet:
            typeof T.imageSrcSet == "string" ? T.imageSrcSet : void 0,
          imageSizes: typeof T.imageSizes == "string" ? T.imageSizes : void 0,
          media: typeof T.media == "string" ? T.media : void 0,
        });
      }
    }),
    (Ce.preloadModule = function (H, T) {
      if (typeof H == "string")
        if (T) {
          var U = Q(T.as, T.crossOrigin);
          y.d.m(H, {
            as: typeof T.as == "string" && T.as !== "script" ? T.as : void 0,
            crossOrigin: U,
            integrity: typeof T.integrity == "string" ? T.integrity : void 0,
          });
        } else y.d.m(H);
    }),
    (Ce.requestFormReset = function (H) {
      y.d.r(H);
    }),
    (Ce.unstable_batchedUpdates = function (H, T) {
      return H(T);
    }),
    (Ce.useFormState = function (H, T, U) {
      return te.H.useFormState(H, T, U);
    }),
    (Ce.useFormStatus = function () {
      return te.H.useHostTransitionStatus();
    }),
    (Ce.version = "19.1.0"),
    Ce
  );
}
var ld;
function Um() {
  if (ld) return ts.exports;
  ld = 1;
  function x() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x);
      } catch (D) {
        console.error(D);
      }
  }
  return (x(), (ts.exports = _m()), ts.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var id;
function Cm() {
  if (id) return xi;
  id = 1;
  var x = Om(),
    D = ns(),
    j = Um();
  function y(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function B(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function z(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function te(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Q(e) {
    if (z(e) !== e) throw Error(y(188));
  }
  function H(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = z(e)), t === null)) throw Error(y(188));
      return t !== e ? null : e;
    }
    for (var n = e, l = t; ; ) {
      var i = n.return;
      if (i === null) break;
      var a = i.alternate;
      if (a === null) {
        if (((l = i.return), l !== null)) {
          n = l;
          continue;
        }
        break;
      }
      if (i.child === a.child) {
        for (a = i.child; a; ) {
          if (a === n) return (Q(i), e);
          if (a === l) return (Q(i), t);
          a = a.sibling;
        }
        throw Error(y(188));
      }
      if (n.return !== l.return) ((n = i), (l = a));
      else {
        for (var r = !1, s = i.child; s; ) {
          if (s === n) {
            ((r = !0), (n = i), (l = a));
            break;
          }
          if (s === l) {
            ((r = !0), (l = i), (n = a));
            break;
          }
          s = s.sibling;
        }
        if (!r) {
          for (s = a.child; s; ) {
            if (s === n) {
              ((r = !0), (n = a), (l = i));
              break;
            }
            if (s === l) {
              ((r = !0), (l = a), (n = i));
              break;
            }
            s = s.sibling;
          }
          if (!r) throw Error(y(189));
        }
      }
      if (n.alternate !== l) throw Error(y(190));
    }
    if (n.tag !== 3) throw Error(y(188));
    return n.stateNode.current === n ? e : t;
  }
  function T(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = T(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var U = Object.assign,
    P = Symbol.for("react.element"),
    J = Symbol.for("react.transitional.element"),
    Se = Symbol.for("react.portal"),
    we = Symbol.for("react.fragment"),
    dt = Symbol.for("react.strict_mode"),
    qe = Symbol.for("react.profiler"),
    hn = Symbol.for("react.provider"),
    Tt = Symbol.for("react.consumer"),
    Me = Symbol.for("react.context"),
    ht = Symbol.for("react.forward_ref"),
    F = Symbol.for("react.suspense"),
    Ze = Symbol.for("react.suspense_list"),
    Ve = Symbol.for("react.memo"),
    We = Symbol.for("react.lazy"),
    pt = Symbol.for("react.activity"),
    _n = Symbol.for("react.memo_cache_sentinel"),
    zt = Symbol.iterator;
  function He(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (zt && e[zt]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var mn = Symbol.for("react.client.reference");
  function yn(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === mn ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case we:
        return "Fragment";
      case qe:
        return "Profiler";
      case dt:
        return "StrictMode";
      case F:
        return "Suspense";
      case Ze:
        return "SuspenseList";
      case pt:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Se:
          return "Portal";
        case Me:
          return (e.displayName || "Context") + ".Provider";
        case Tt:
          return (e._context.displayName || "Context") + ".Consumer";
        case ht:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case Ve:
          return (
            (t = e.displayName || null),
            t !== null ? t : yn(e.type) || "Memo"
          );
        case We:
          ((t = e._payload), (e = e._init));
          try {
            return yn(e(t));
          } catch {}
      }
    return null;
  }
  var Oe = Array.isArray,
    b = D.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    R = j.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Y = { pending: !1, data: null, method: null, action: null },
    re = [],
    u = -1;
  function A(e) {
    return { current: e };
  }
  function M(e) {
    0 > u || ((e.current = re[u]), (re[u] = null), u--);
  }
  function E(e, t) {
    (u++, (re[u] = e.current), (e.current = t));
  }
  var C = A(null),
    $ = A(null),
    X = A(null),
    Ke = A(null);
  function ue(e, t) {
    switch ((E(X, t), E($, e), E(C, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Tf(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          ((t = Tf(t)), (e = zf(t, e)));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    (M(C), E(C, e));
  }
  function Xt() {
    (M(C), M($), M(X));
  }
  function _a(e) {
    e.memoizedState !== null && E(Ke, e);
    var t = C.current,
      n = zf(t, e.type);
    t !== n && (E($, e), E(C, n));
  }
  function vi(e) {
    ($.current === e && (M(C), M($)),
      Ke.current === e && (M(Ke), (di._currentValue = Y)));
  }
  var Ua = Object.prototype.hasOwnProperty,
    Ca = x.unstable_scheduleCallback,
    Na = x.unstable_cancelCallback,
    rd = x.unstable_shouldYield,
    sd = x.unstable_requestPaint,
    xt = x.unstable_now,
    cd = x.unstable_getCurrentPriorityLevel,
    ls = x.unstable_ImmediatePriority,
    is = x.unstable_UserBlockingPriority,
    bi = x.unstable_NormalPriority,
    ud = x.unstable_LowPriority,
    as = x.unstable_IdlePriority,
    fd = x.log,
    dd = x.unstable_setDisableYieldValue,
    bl = null,
    ke = null;
  function Qt(e) {
    if (
      (typeof fd == "function" && dd(e),
      ke && typeof ke.setStrictMode == "function")
    )
      try {
        ke.setStrictMode(bl, e);
      } catch {}
  }
  var Je = Math.clz32 ? Math.clz32 : yd,
    hd = Math.log,
    md = Math.LN2;
  function yd(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((hd(e) / md) | 0)) | 0);
  }
  var ji = 256,
    Si = 4194304;
  function gn(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function wi(e, t, n) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var i = 0,
      a = e.suspendedLanes,
      r = e.pingedLanes;
    e = e.warmLanes;
    var s = l & 134217727;
    return (
      s !== 0
        ? ((l = s & ~a),
          l !== 0
            ? (i = gn(l))
            : ((r &= s),
              r !== 0
                ? (i = gn(r))
                : n || ((n = s & ~e), n !== 0 && (i = gn(n)))))
        : ((s = l & ~a),
          s !== 0
            ? (i = gn(s))
            : r !== 0
              ? (i = gn(r))
              : n || ((n = l & ~e), n !== 0 && (i = gn(n)))),
      i === 0
        ? 0
        : t !== 0 &&
            t !== i &&
            (t & a) === 0 &&
            ((a = i & -i),
            (n = t & -t),
            a >= n || (a === 32 && (n & 4194048) !== 0))
          ? t
          : i
    );
  }
  function jl(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function gd(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function os() {
    var e = ji;
    return ((ji <<= 1), (ji & 4194048) === 0 && (ji = 256), e);
  }
  function rs() {
    var e = Si;
    return ((Si <<= 1), (Si & 62914560) === 0 && (Si = 4194304), e);
  }
  function qa(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Sl(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function pd(e, t, n, l, i, a) {
    var r = e.pendingLanes;
    ((e.pendingLanes = n),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= n),
      (e.entangledLanes &= n),
      (e.errorRecoveryDisabledLanes &= n),
      (e.shellSuspendCounter = 0));
    var s = e.entanglements,
      c = e.expirationTimes,
      m = e.hiddenUpdates;
    for (n = r & ~n; 0 < n; ) {
      var v = 31 - Je(n),
        w = 1 << v;
      ((s[v] = 0), (c[v] = -1));
      var g = m[v];
      if (g !== null)
        for (m[v] = null, v = 0; v < g.length; v++) {
          var p = g[v];
          p !== null && (p.lane &= -536870913);
        }
      n &= ~w;
    }
    (l !== 0 && ss(e, l, 0),
      a !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= a & ~(r & ~t)));
  }
  function ss(e, t, n) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var l = 31 - Je(t);
    ((e.entangledLanes |= t),
      (e.entanglements[l] = e.entanglements[l] | 1073741824 | (n & 4194090)));
  }
  function cs(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var l = 31 - Je(n),
        i = 1 << l;
      ((i & t) | (e[l] & t) && (e[l] |= t), (n &= ~i));
    }
  }
  function Ya(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Ga(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function us() {
    var e = R.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Zf(e.type));
  }
  function xd(e, t) {
    var n = R.p;
    try {
      return ((R.p = e), t());
    } finally {
      R.p = n;
    }
  }
  var Lt = Math.random().toString(36).slice(2),
    _e = "__reactFiber$" + Lt,
    Ye = "__reactProps$" + Lt,
    Un = "__reactContainer$" + Lt,
    Xa = "__reactEvents$" + Lt,
    vd = "__reactListeners$" + Lt,
    bd = "__reactHandles$" + Lt,
    fs = "__reactResources$" + Lt,
    wl = "__reactMarker$" + Lt;
  function Qa(e) {
    (delete e[_e], delete e[Ye], delete e[Xa], delete e[vd], delete e[bd]);
  }
  function Cn(e) {
    var t = e[_e];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Un] || n[_e])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Ef(e); e !== null; ) {
            if ((n = e[_e])) return n;
            e = Ef(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function Nn(e) {
    if ((e = e[_e] || e[Un])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Tl(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(y(33));
  }
  function qn(e) {
    var t = e[fs];
    return (
      t ||
        (t = e[fs] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Te(e) {
    e[wl] = !0;
  }
  var ds = new Set(),
    hs = {};
  function pn(e, t) {
    (Yn(e, t), Yn(e + "Capture", t));
  }
  function Yn(e, t) {
    for (hs[e] = t, e = 0; e < t.length; e++) ds.add(t[e]);
  }
  var jd = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    ms = {},
    ys = {};
  function Sd(e) {
    return Ua.call(ys, e)
      ? !0
      : Ua.call(ms, e)
        ? !1
        : jd.test(e)
          ? (ys[e] = !0)
          : ((ms[e] = !0), !1);
  }
  function Ti(e, t, n) {
    if (Sd(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var l = t.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + n);
      }
  }
  function zi(e, t, n) {
    if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + n);
    }
  }
  function At(e, t, n, l) {
    if (l === null) e.removeAttribute(n);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, "" + l);
    }
  }
  var La, gs;
  function Gn(e) {
    if (La === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        ((La = (t && t[1]) || ""),
          (gs =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      La +
      e +
      gs
    );
  }
  var Za = !1;
  function Va(e, t) {
    if (!e || Za) return "";
    Za = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var w = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(w.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(w, []);
                } catch (p) {
                  var g = p;
                }
                Reflect.construct(e, [], w);
              } else {
                try {
                  w.call();
                } catch (p) {
                  g = p;
                }
                e.call(w.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (p) {
                g = p;
              }
              (w = e()) &&
                typeof w.catch == "function" &&
                w.catch(function () {});
            }
          } catch (p) {
            if (p && g && typeof p.stack == "string") return [p.stack, g.stack];
          }
          return [null, null];
        },
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var i = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name",
      );
      i &&
        i.configurable &&
        Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var a = l.DetermineComponentFrameRoot(),
        r = a[0],
        s = a[1];
      if (r && s) {
        var c = r.split(`
`),
          m = s.split(`
`);
        for (
          i = l = 0;
          l < c.length && !c[l].includes("DetermineComponentFrameRoot");
        )
          l++;
        for (; i < m.length && !m[i].includes("DetermineComponentFrameRoot"); )
          i++;
        if (l === c.length || i === m.length)
          for (
            l = c.length - 1, i = m.length - 1;
            1 <= l && 0 <= i && c[l] !== m[i];
          )
            i--;
        for (; 1 <= l && 0 <= i; l--, i--)
          if (c[l] !== m[i]) {
            if (l !== 1 || i !== 1)
              do
                if ((l--, i--, 0 > i || c[l] !== m[i])) {
                  var v =
                    `
` + c[l].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      v.includes("<anonymous>") &&
                      (v = v.replace("<anonymous>", e.displayName)),
                    v
                  );
                }
              while (1 <= l && 0 <= i);
            break;
          }
      }
    } finally {
      ((Za = !1), (Error.prepareStackTrace = n));
    }
    return (n = e ? e.displayName || e.name : "") ? Gn(n) : "";
  }
  function wd(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Gn(e.type);
      case 16:
        return Gn("Lazy");
      case 13:
        return Gn("Suspense");
      case 19:
        return Gn("SuspenseList");
      case 0:
      case 15:
        return Va(e.type, !1);
      case 11:
        return Va(e.type.render, !1);
      case 1:
        return Va(e.type, !0);
      case 31:
        return Gn("Activity");
      default:
        return "";
    }
  }
  function ps(e) {
    try {
      var t = "";
      do ((t += wd(e)), (e = e.return));
      while (e);
      return t;
    } catch (n) {
      return (
        `
Error generating stack: ` +
        n.message +
        `
` +
        n.stack
      );
    }
  }
  function lt(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function xs(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Td(e) {
    var t = xs(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      l = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var i = n.get,
        a = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return i.call(this);
          },
          set: function (r) {
            ((l = "" + r), a.call(this, r));
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (r) {
            l = "" + r;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function Ai(e) {
    e._valueTracker || (e._valueTracker = Td(e));
  }
  function vs(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      l = "";
    return (
      e && (l = xs(e) ? (e.checked ? "true" : "false") : e.value),
      (e = l),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Bi(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var zd = /[\n"\\]/g;
  function it(e) {
    return e.replace(zd, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function Wa(e, t, n, l, i, a, r, s) {
    ((e.name = ""),
      r != null &&
      typeof r != "function" &&
      typeof r != "symbol" &&
      typeof r != "boolean"
        ? (e.type = r)
        : e.removeAttribute("type"),
      t != null
        ? r === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + lt(t))
          : e.value !== "" + lt(t) && (e.value = "" + lt(t))
        : (r !== "submit" && r !== "reset") || e.removeAttribute("value"),
      t != null
        ? Ka(e, r, lt(t))
        : n != null
          ? Ka(e, r, lt(n))
          : l != null && e.removeAttribute("value"),
      i == null && a != null && (e.defaultChecked = !!a),
      i != null &&
        (e.checked = i && typeof i != "function" && typeof i != "symbol"),
      s != null &&
      typeof s != "function" &&
      typeof s != "symbol" &&
      typeof s != "boolean"
        ? (e.name = "" + lt(s))
        : e.removeAttribute("name"));
  }
  function bs(e, t, n, l, i, a, r, s) {
    if (
      (a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        typeof a != "boolean" &&
        (e.type = a),
      t != null || n != null)
    ) {
      if (!((a !== "submit" && a !== "reset") || t != null)) return;
      ((n = n != null ? "" + lt(n) : ""),
        (t = t != null ? "" + lt(t) : n),
        s || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((l = l ?? i),
      (l = typeof l != "function" && typeof l != "symbol" && !!l),
      (e.checked = s ? e.checked : !!l),
      (e.defaultChecked = !!l),
      r != null &&
        typeof r != "function" &&
        typeof r != "symbol" &&
        typeof r != "boolean" &&
        (e.name = r));
  }
  function Ka(e, t, n) {
    (t === "number" && Bi(e.ownerDocument) === e) ||
      e.defaultValue === "" + n ||
      (e.defaultValue = "" + n);
  }
  function Xn(e, t, n, l) {
    if (((e = e.options), t)) {
      t = {};
      for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
      for (n = 0; n < e.length; n++)
        ((i = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== i && (e[n].selected = i),
          i && l && (e[n].defaultSelected = !0));
    } else {
      for (n = "" + lt(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          ((e[i].selected = !0), l && (e[i].defaultSelected = !0));
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function js(e, t, n) {
    if (
      t != null &&
      ((t = "" + lt(t)), t !== e.value && (e.value = t), n == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + lt(n) : "";
  }
  function Ss(e, t, n, l) {
    if (t == null) {
      if (l != null) {
        if (n != null) throw Error(y(92));
        if (Oe(l)) {
          if (1 < l.length) throw Error(y(93));
          l = l[0];
        }
        n = l;
      }
      (n == null && (n = ""), (t = n));
    }
    ((n = lt(t)),
      (e.defaultValue = n),
      (l = e.textContent),
      l === n && l !== "" && l !== null && (e.value = l));
  }
  function Qn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Ad = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function ws(e, t, n) {
    var l = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? l
        ? e.setProperty(t, "")
        : t === "float"
          ? (e.cssFloat = "")
          : (e[t] = "")
      : l
        ? e.setProperty(t, n)
        : typeof n != "number" || n === 0 || Ad.has(t)
          ? t === "float"
            ? (e.cssFloat = n)
            : (e[t] = ("" + n).trim())
          : (e[t] = n + "px");
  }
  function Ts(e, t, n) {
    if (t != null && typeof t != "object") throw Error(y(62));
    if (((e = e.style), n != null)) {
      for (var l in n)
        !n.hasOwnProperty(l) ||
          (t != null && t.hasOwnProperty(l)) ||
          (l.indexOf("--") === 0
            ? e.setProperty(l, "")
            : l === "float"
              ? (e.cssFloat = "")
              : (e[l] = ""));
      for (var i in t)
        ((l = t[i]), t.hasOwnProperty(i) && n[i] !== l && ws(e, i, l));
    } else for (var a in t) t.hasOwnProperty(a) && ws(e, a, t[a]);
  }
  function ka(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Bd = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Dd =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Di(e) {
    return Dd.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var Ja = null;
  function Fa(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Ln = null,
    Zn = null;
  function zs(e) {
    var t = Nn(e);
    if (t && (e = t.stateNode)) {
      var n = e[Ye] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (Wa(
              e,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name,
            ),
            (t = n.name),
            n.type === "radio" && t != null)
          ) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + it("" + t) + '"][type="radio"]',
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var l = n[t];
              if (l !== e && l.form === e.form) {
                var i = l[Ye] || null;
                if (!i) throw Error(y(90));
                Wa(
                  l,
                  i.value,
                  i.defaultValue,
                  i.defaultValue,
                  i.checked,
                  i.defaultChecked,
                  i.type,
                  i.name,
                );
              }
            }
            for (t = 0; t < n.length; t++)
              ((l = n[t]), l.form === e.form && vs(l));
          }
          break e;
        case "textarea":
          js(e, n.value, n.defaultValue);
          break e;
        case "select":
          ((t = n.value), t != null && Xn(e, !!n.multiple, t, !1));
      }
    }
  }
  var $a = !1;
  function As(e, t, n) {
    if ($a) return e(t, n);
    $a = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (
        (($a = !1),
        (Ln !== null || Zn !== null) &&
          (ha(), Ln && ((t = Ln), (e = Zn), (Zn = Ln = null), zs(t), e)))
      )
        for (t = 0; t < e.length; t++) zs(e[t]);
    }
  }
  function zl(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var l = n[Ye] || null;
    if (l === null) return null;
    n = l[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((l = !l.disabled) ||
          ((e = e.type),
          (l = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !l));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(y(231, t, typeof n));
    return n;
  }
  var Bt = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Ia = !1;
  if (Bt)
    try {
      var Al = {};
      (Object.defineProperty(Al, "passive", {
        get: function () {
          Ia = !0;
        },
      }),
        window.addEventListener("test", Al, Al),
        window.removeEventListener("test", Al, Al));
    } catch {
      Ia = !1;
    }
  var Zt = null,
    Pa = null,
    Ei = null;
  function Bs() {
    if (Ei) return Ei;
    var e,
      t = Pa,
      n = t.length,
      l,
      i = "value" in Zt ? Zt.value : Zt.textContent,
      a = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var r = n - e;
    for (l = 1; l <= r && t[n - l] === i[a - l]; l++);
    return (Ei = i.slice(e, 1 < l ? 1 - l : void 0));
  }
  function Ri(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Mi() {
    return !0;
  }
  function Ds() {
    return !1;
  }
  function Ge(e) {
    function t(n, l, i, a, r) {
      ((this._reactName = n),
        (this._targetInst = i),
        (this.type = l),
        (this.nativeEvent = a),
        (this.target = r),
        (this.currentTarget = null));
      for (var s in e)
        e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(a) : a[s]));
      return (
        (this.isDefaultPrevented = (
          a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1
        )
          ? Mi
          : Ds),
        (this.isPropagationStopped = Ds),
        this
      );
    }
    return (
      U(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Mi));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Mi));
        },
        persist: function () {},
        isPersistent: Mi,
      }),
      t
    );
  }
  var xn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Hi = Ge(xn),
    Bl = U({}, xn, { view: 0, detail: 0 }),
    Ed = Ge(Bl),
    eo,
    to,
    Dl,
    Oi = U({}, Bl, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: lo,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Dl &&
              (Dl && e.type === "mousemove"
                ? ((eo = e.screenX - Dl.screenX), (to = e.screenY - Dl.screenY))
                : (to = eo = 0),
              (Dl = e)),
            eo);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : to;
      },
    }),
    Es = Ge(Oi),
    Rd = U({}, Oi, { dataTransfer: 0 }),
    Md = Ge(Rd),
    Hd = U({}, Bl, { relatedTarget: 0 }),
    no = Ge(Hd),
    Od = U({}, xn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    _d = Ge(Od),
    Ud = U({}, xn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Cd = Ge(Ud),
    Nd = U({}, xn, { data: 0 }),
    Rs = Ge(Nd),
    qd = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Yd = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Gd = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Xd(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Gd[e])
        ? !!t[e]
        : !1;
  }
  function lo() {
    return Xd;
  }
  var Qd = U({}, Bl, {
      key: function (e) {
        if (e.key) {
          var t = qd[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Ri(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? Yd[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: lo,
      charCode: function (e) {
        return e.type === "keypress" ? Ri(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Ri(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    Ld = Ge(Qd),
    Zd = U({}, Oi, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Ms = Ge(Zd),
    Vd = U({}, Bl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: lo,
    }),
    Wd = Ge(Vd),
    Kd = U({}, xn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    kd = Ge(Kd),
    Jd = U({}, Oi, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Fd = Ge(Jd),
    $d = U({}, xn, { newState: 0, oldState: 0 }),
    Id = Ge($d),
    Pd = [9, 13, 27, 32],
    io = Bt && "CompositionEvent" in window,
    El = null;
  Bt && "documentMode" in document && (El = document.documentMode);
  var eh = Bt && "TextEvent" in window && !El,
    Hs = Bt && (!io || (El && 8 < El && 11 >= El)),
    Os = " ",
    _s = !1;
  function Us(e, t) {
    switch (e) {
      case "keyup":
        return Pd.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Cs(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var Vn = !1;
  function th(e, t) {
    switch (e) {
      case "compositionend":
        return Cs(t);
      case "keypress":
        return t.which !== 32 ? null : ((_s = !0), Os);
      case "textInput":
        return ((e = t.data), e === Os && _s ? null : e);
      default:
        return null;
    }
  }
  function nh(e, t) {
    if (Vn)
      return e === "compositionend" || (!io && Us(e, t))
        ? ((e = Bs()), (Ei = Pa = Zt = null), (Vn = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Hs && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var lh = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Ns(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!lh[e.type] : t === "textarea";
  }
  function qs(e, t, n, l) {
    (Ln ? (Zn ? Zn.push(l) : (Zn = [l])) : (Ln = l),
      (t = va(t, "onChange")),
      0 < t.length &&
        ((n = new Hi("onChange", "change", null, n, l)),
        e.push({ event: n, listeners: t })));
  }
  var Rl = null,
    Ml = null;
  function ih(e) {
    vf(e, 0);
  }
  function _i(e) {
    var t = Tl(e);
    if (vs(t)) return e;
  }
  function Ys(e, t) {
    if (e === "change") return t;
  }
  var Gs = !1;
  if (Bt) {
    var ao;
    if (Bt) {
      var oo = "oninput" in document;
      if (!oo) {
        var Xs = document.createElement("div");
        (Xs.setAttribute("oninput", "return;"),
          (oo = typeof Xs.oninput == "function"));
      }
      ao = oo;
    } else ao = !1;
    Gs = ao && (!document.documentMode || 9 < document.documentMode);
  }
  function Qs() {
    Rl && (Rl.detachEvent("onpropertychange", Ls), (Ml = Rl = null));
  }
  function Ls(e) {
    if (e.propertyName === "value" && _i(Ml)) {
      var t = [];
      (qs(t, Ml, e, Fa(e)), As(ih, t));
    }
  }
  function ah(e, t, n) {
    e === "focusin"
      ? (Qs(), (Rl = t), (Ml = n), Rl.attachEvent("onpropertychange", Ls))
      : e === "focusout" && Qs();
  }
  function oh(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return _i(Ml);
  }
  function rh(e, t) {
    if (e === "click") return _i(t);
  }
  function sh(e, t) {
    if (e === "input" || e === "change") return _i(t);
  }
  function ch(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Fe = typeof Object.is == "function" ? Object.is : ch;
  function Hl(e, t) {
    if (Fe(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      l = Object.keys(t);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var i = n[l];
      if (!Ua.call(t, i) || !Fe(e[i], t[i])) return !1;
    }
    return !0;
  }
  function Zs(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Vs(e, t) {
    var n = Zs(e);
    e = 0;
    for (var l; n; ) {
      if (n.nodeType === 3) {
        if (((l = e + n.textContent.length), e <= t && l >= t))
          return { node: n, offset: t - e };
        e = l;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Zs(n);
    }
  }
  function Ws(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Ws(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Ks(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = Bi(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Bi(e.document);
    }
    return t;
  }
  function ro(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  var uh = Bt && "documentMode" in document && 11 >= document.documentMode,
    Wn = null,
    so = null,
    Ol = null,
    co = !1;
  function ks(e, t, n) {
    var l =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    co ||
      Wn == null ||
      Wn !== Bi(l) ||
      ((l = Wn),
      "selectionStart" in l && ro(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (Ol && Hl(Ol, l)) ||
        ((Ol = l),
        (l = va(so, "onSelect")),
        0 < l.length &&
          ((t = new Hi("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: l }),
          (t.target = Wn))));
  }
  function vn(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var Kn = {
      animationend: vn("Animation", "AnimationEnd"),
      animationiteration: vn("Animation", "AnimationIteration"),
      animationstart: vn("Animation", "AnimationStart"),
      transitionrun: vn("Transition", "TransitionRun"),
      transitionstart: vn("Transition", "TransitionStart"),
      transitioncancel: vn("Transition", "TransitionCancel"),
      transitionend: vn("Transition", "TransitionEnd"),
    },
    uo = {},
    Js = {};
  Bt &&
    ((Js = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Kn.animationend.animation,
      delete Kn.animationiteration.animation,
      delete Kn.animationstart.animation),
    "TransitionEvent" in window || delete Kn.transitionend.transition);
  function bn(e) {
    if (uo[e]) return uo[e];
    if (!Kn[e]) return e;
    var t = Kn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Js) return (uo[e] = t[n]);
    return e;
  }
  var Fs = bn("animationend"),
    $s = bn("animationiteration"),
    Is = bn("animationstart"),
    fh = bn("transitionrun"),
    dh = bn("transitionstart"),
    hh = bn("transitioncancel"),
    Ps = bn("transitionend"),
    ec = new Map(),
    fo =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  fo.push("scrollEnd");
  function mt(e, t) {
    (ec.set(e, t), pn(t, [e]));
  }
  var tc = new WeakMap();
  function at(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = tc.get(e);
      return n !== void 0
        ? n
        : ((t = { value: e, source: t, stack: ps(t) }), tc.set(e, t), t);
    }
    return { value: e, source: t, stack: ps(t) };
  }
  var ot = [],
    kn = 0,
    ho = 0;
  function Ui() {
    for (var e = kn, t = (ho = kn = 0); t < e; ) {
      var n = ot[t];
      ot[t++] = null;
      var l = ot[t];
      ot[t++] = null;
      var i = ot[t];
      ot[t++] = null;
      var a = ot[t];
      if (((ot[t++] = null), l !== null && i !== null)) {
        var r = l.pending;
        (r === null ? (i.next = i) : ((i.next = r.next), (r.next = i)),
          (l.pending = i));
      }
      a !== 0 && nc(n, i, a);
    }
  }
  function Ci(e, t, n, l) {
    ((ot[kn++] = e),
      (ot[kn++] = t),
      (ot[kn++] = n),
      (ot[kn++] = l),
      (ho |= l),
      (e.lanes |= l),
      (e = e.alternate),
      e !== null && (e.lanes |= l));
  }
  function mo(e, t, n, l) {
    return (Ci(e, t, n, l), Ni(e));
  }
  function Jn(e, t) {
    return (Ci(e, null, null, t), Ni(e));
  }
  function nc(e, t, n) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n);
    for (var i = !1, a = e.return; a !== null; )
      ((a.childLanes |= n),
        (l = a.alternate),
        l !== null && (l.childLanes |= n),
        a.tag === 22 &&
          ((e = a.stateNode), e === null || e._visibility & 1 || (i = !0)),
        (e = a),
        (a = a.return));
    return e.tag === 3
      ? ((a = e.stateNode),
        i &&
          t !== null &&
          ((i = 31 - Je(n)),
          (e = a.hiddenUpdates),
          (l = e[i]),
          l === null ? (e[i] = [t]) : l.push(t),
          (t.lane = n | 536870912)),
        a)
      : null;
  }
  function Ni(e) {
    if (50 < ii) throw ((ii = 0), (br = null), Error(y(185)));
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var Fn = {};
  function mh(e, t, n, l) {
    ((this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function $e(e, t, n, l) {
    return new mh(e, t, n, l);
  }
  function yo(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Dt(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = $e(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 65011712),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      (n.refCleanup = e.refCleanup),
      n
    );
  }
  function lc(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return (
      n === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = n.childLanes),
          (e.lanes = n.lanes),
          (e.child = n.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = n.memoizedProps),
          (e.memoizedState = n.memoizedState),
          (e.updateQueue = n.updateQueue),
          (e.type = n.type),
          (t = n.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function qi(e, t, n, l, i, a) {
    var r = 0;
    if (((l = e), typeof e == "function")) yo(e) && (r = 1);
    else if (typeof e == "string")
      r = gm(e, n, C.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
          ? 27
          : 5;
    else
      e: switch (e) {
        case pt:
          return (
            (e = $e(31, n, t, i)),
            (e.elementType = pt),
            (e.lanes = a),
            e
          );
        case we:
          return jn(n.children, i, a, t);
        case dt:
          ((r = 8), (i |= 24));
          break;
        case qe:
          return (
            (e = $e(12, n, t, i | 2)),
            (e.elementType = qe),
            (e.lanes = a),
            e
          );
        case F:
          return ((e = $e(13, n, t, i)), (e.elementType = F), (e.lanes = a), e);
        case Ze:
          return (
            (e = $e(19, n, t, i)),
            (e.elementType = Ze),
            (e.lanes = a),
            e
          );
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case hn:
              case Me:
                r = 10;
                break e;
              case Tt:
                r = 9;
                break e;
              case ht:
                r = 11;
                break e;
              case Ve:
                r = 14;
                break e;
              case We:
                ((r = 16), (l = null));
                break e;
            }
          ((r = 29),
            (n = Error(y(130, e === null ? "null" : typeof e, ""))),
            (l = null));
      }
    return (
      (t = $e(r, n, t, i)),
      (t.elementType = e),
      (t.type = l),
      (t.lanes = a),
      t
    );
  }
  function jn(e, t, n, l) {
    return ((e = $e(7, e, l, t)), (e.lanes = n), e);
  }
  function go(e, t, n) {
    return ((e = $e(6, e, null, t)), (e.lanes = n), e);
  }
  function po(e, t, n) {
    return (
      (t = $e(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var $n = [],
    In = 0,
    Yi = null,
    Gi = 0,
    rt = [],
    st = 0,
    Sn = null,
    Et = 1,
    Rt = "";
  function wn(e, t) {
    (($n[In++] = Gi), ($n[In++] = Yi), (Yi = e), (Gi = t));
  }
  function ic(e, t, n) {
    ((rt[st++] = Et), (rt[st++] = Rt), (rt[st++] = Sn), (Sn = e));
    var l = Et;
    e = Rt;
    var i = 32 - Je(l) - 1;
    ((l &= ~(1 << i)), (n += 1));
    var a = 32 - Je(t) + i;
    if (30 < a) {
      var r = i - (i % 5);
      ((a = (l & ((1 << r) - 1)).toString(32)),
        (l >>= r),
        (i -= r),
        (Et = (1 << (32 - Je(t) + i)) | (n << i) | l),
        (Rt = a + e));
    } else ((Et = (1 << a) | (n << i) | l), (Rt = e));
  }
  function xo(e) {
    e.return !== null && (wn(e, 1), ic(e, 1, 0));
  }
  function vo(e) {
    for (; e === Yi; )
      ((Yi = $n[--In]), ($n[In] = null), (Gi = $n[--In]), ($n[In] = null));
    for (; e === Sn; )
      ((Sn = rt[--st]),
        (rt[st] = null),
        (Rt = rt[--st]),
        (rt[st] = null),
        (Et = rt[--st]),
        (rt[st] = null));
  }
  var Ne = null,
    me = null,
    ee = !1,
    Tn = null,
    vt = !1,
    bo = Error(y(519));
  function zn(e) {
    var t = Error(y(418, ""));
    throw (Cl(at(t, e)), bo);
  }
  function ac(e) {
    var t = e.stateNode,
      n = e.type,
      l = e.memoizedProps;
    switch (((t[_e] = e), (t[Ye] = l), n)) {
      case "dialog":
        (K("cancel", t), K("close", t));
        break;
      case "iframe":
      case "object":
      case "embed":
        K("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < oi.length; n++) K(oi[n], t);
        break;
      case "source":
        K("error", t);
        break;
      case "img":
      case "image":
      case "link":
        (K("error", t), K("load", t));
        break;
      case "details":
        K("toggle", t);
        break;
      case "input":
        (K("invalid", t),
          bs(
            t,
            l.value,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name,
            !0,
          ),
          Ai(t));
        break;
      case "select":
        K("invalid", t);
        break;
      case "textarea":
        (K("invalid", t), Ss(t, l.value, l.defaultValue, l.children), Ai(t));
    }
    ((n = l.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      t.textContent === "" + n ||
      l.suppressHydrationWarning === !0 ||
      wf(t.textContent, n)
        ? (l.popover != null && (K("beforetoggle", t), K("toggle", t)),
          l.onScroll != null && K("scroll", t),
          l.onScrollEnd != null && K("scrollend", t),
          l.onClick != null && (t.onclick = ba),
          (t = !0))
        : (t = !1),
      t || zn(e));
  }
  function oc(e) {
    for (Ne = e.return; Ne; )
      switch (Ne.tag) {
        case 5:
        case 13:
          vt = !1;
          return;
        case 27:
        case 3:
          vt = !0;
          return;
        default:
          Ne = Ne.return;
      }
  }
  function _l(e) {
    if (e !== Ne) return !1;
    if (!ee) return (oc(e), (ee = !0), !1);
    var t = e.tag,
      n;
    if (
      ((n = t !== 3 && t !== 27) &&
        ((n = t === 5) &&
          ((n = e.type),
          (n =
            !(n !== "form" && n !== "button") || Cr(e.type, e.memoizedProps))),
        (n = !n)),
      n && me && zn(e),
      oc(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(y(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (((n = e.data), n === "/$")) {
              if (t === 0) {
                me = gt(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          e = e.nextSibling;
        }
        me = null;
      }
    } else
      t === 27
        ? ((t = me), rn(e.type) ? ((e = Gr), (Gr = null), (me = e)) : (me = t))
        : (me = Ne ? gt(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Ul() {
    ((me = Ne = null), (ee = !1));
  }
  function rc() {
    var e = Tn;
    return (
      e !== null &&
        (Le === null ? (Le = e) : Le.push.apply(Le, e), (Tn = null)),
      e
    );
  }
  function Cl(e) {
    Tn === null ? (Tn = [e]) : Tn.push(e);
  }
  var jo = A(null),
    An = null,
    Mt = null;
  function Vt(e, t, n) {
    (E(jo, t._currentValue), (t._currentValue = n));
  }
  function Ht(e) {
    ((e._currentValue = jo.current), M(jo));
  }
  function So(e, t, n) {
    for (; e !== null; ) {
      var l = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), l !== null && (l.childLanes |= t))
          : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function wo(e, t, n, l) {
    var i = e.child;
    for (i !== null && (i.return = e); i !== null; ) {
      var a = i.dependencies;
      if (a !== null) {
        var r = i.child;
        a = a.firstContext;
        e: for (; a !== null; ) {
          var s = a;
          a = i;
          for (var c = 0; c < t.length; c++)
            if (s.context === t[c]) {
              ((a.lanes |= n),
                (s = a.alternate),
                s !== null && (s.lanes |= n),
                So(a.return, n, e),
                l || (r = null));
              break e;
            }
          a = s.next;
        }
      } else if (i.tag === 18) {
        if (((r = i.return), r === null)) throw Error(y(341));
        ((r.lanes |= n),
          (a = r.alternate),
          a !== null && (a.lanes |= n),
          So(r, n, e),
          (r = null));
      } else r = i.child;
      if (r !== null) r.return = i;
      else
        for (r = i; r !== null; ) {
          if (r === e) {
            r = null;
            break;
          }
          if (((i = r.sibling), i !== null)) {
            ((i.return = r.return), (r = i));
            break;
          }
          r = r.return;
        }
      i = r;
    }
  }
  function Nl(e, t, n, l) {
    e = null;
    for (var i = t, a = !1; i !== null; ) {
      if (!a) {
        if ((i.flags & 524288) !== 0) a = !0;
        else if ((i.flags & 262144) !== 0) break;
      }
      if (i.tag === 10) {
        var r = i.alternate;
        if (r === null) throw Error(y(387));
        if (((r = r.memoizedProps), r !== null)) {
          var s = i.type;
          Fe(i.pendingProps.value, r.value) ||
            (e !== null ? e.push(s) : (e = [s]));
        }
      } else if (i === Ke.current) {
        if (((r = i.alternate), r === null)) throw Error(y(387));
        r.memoizedState.memoizedState !== i.memoizedState.memoizedState &&
          (e !== null ? e.push(di) : (e = [di]));
      }
      i = i.return;
    }
    (e !== null && wo(t, e, n, l), (t.flags |= 262144));
  }
  function Xi(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Fe(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Bn(e) {
    ((An = e),
      (Mt = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null));
  }
  function Ue(e) {
    return sc(An, e);
  }
  function Qi(e, t) {
    return (An === null && Bn(e), sc(e, t));
  }
  function sc(e, t) {
    var n = t._currentValue;
    if (((t = { context: t, memoizedValue: n, next: null }), Mt === null)) {
      if (e === null) throw Error(y(308));
      ((Mt = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288));
    } else Mt = Mt.next = t;
    return n;
  }
  var yh =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (n, l) {
                  e.push(l);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                e.forEach(function (n) {
                  return n();
                }));
            };
          },
    gh = x.unstable_scheduleCallback,
    ph = x.unstable_NormalPriority,
    be = {
      $$typeof: Me,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function To() {
    return { controller: new yh(), data: new Map(), refCount: 0 };
  }
  function ql(e) {
    (e.refCount--,
      e.refCount === 0 &&
        gh(ph, function () {
          e.controller.abort();
        }));
  }
  var Yl = null,
    zo = 0,
    Pn = 0,
    el = null;
  function xh(e, t) {
    if (Yl === null) {
      var n = (Yl = []);
      ((zo = 0),
        (Pn = Br()),
        (el = {
          status: "pending",
          value: void 0,
          then: function (l) {
            n.push(l);
          },
        }));
    }
    return (zo++, t.then(cc, cc), t);
  }
  function cc() {
    if (--zo === 0 && Yl !== null) {
      el !== null && (el.status = "fulfilled");
      var e = Yl;
      ((Yl = null), (Pn = 0), (el = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function vh(e, t) {
    var n = [],
      l = {
        status: "pending",
        value: null,
        reason: null,
        then: function (i) {
          n.push(i);
        },
      };
    return (
      e.then(
        function () {
          ((l.status = "fulfilled"), (l.value = t));
          for (var i = 0; i < n.length; i++) (0, n[i])(t);
        },
        function (i) {
          for (l.status = "rejected", l.reason = i, i = 0; i < n.length; i++)
            (0, n[i])(void 0);
        },
      ),
      l
    );
  }
  var uc = b.S;
  b.S = function (e, t) {
    (typeof t == "object" &&
      t !== null &&
      typeof t.then == "function" &&
      xh(e, t),
      uc !== null && uc(e, t));
  };
  var Dn = A(null);
  function Ao() {
    var e = Dn.current;
    return e !== null ? e : ce.pooledCache;
  }
  function Li(e, t) {
    t === null ? E(Dn, Dn.current) : E(Dn, t.pool);
  }
  function fc() {
    var e = Ao();
    return e === null ? null : { parent: be._currentValue, pool: e };
  }
  var Gl = Error(y(460)),
    dc = Error(y(474)),
    Zi = Error(y(542)),
    Bo = { then: function () {} };
  function hc(e) {
    return ((e = e.status), e === "fulfilled" || e === "rejected");
  }
  function Vi() {}
  function mc(e, t, n) {
    switch (
      ((n = e[n]),
      n === void 0 ? e.push(t) : n !== t && (t.then(Vi, Vi), (t = n)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), gc(e), e);
      default:
        if (typeof t.status == "string") t.then(Vi, Vi);
        else {
          if (((e = ce), e !== null && 100 < e.shellSuspendCounter))
            throw Error(y(482));
          ((e = t),
            (e.status = "pending"),
            e.then(
              function (l) {
                if (t.status === "pending") {
                  var i = t;
                  ((i.status = "fulfilled"), (i.value = l));
                }
              },
              function (l) {
                if (t.status === "pending") {
                  var i = t;
                  ((i.status = "rejected"), (i.reason = l));
                }
              },
            ));
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), gc(e), e);
        }
        throw ((Xl = t), Gl);
    }
  }
  var Xl = null;
  function yc() {
    if (Xl === null) throw Error(y(459));
    var e = Xl;
    return ((Xl = null), e);
  }
  function gc(e) {
    if (e === Gl || e === Zi) throw Error(y(483));
  }
  var Wt = !1;
  function Do(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Eo(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        }));
  }
  function Kt(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function kt(e, t, n) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (ne & 2) !== 0)) {
      var i = l.pending;
      return (
        i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
        (l.pending = t),
        (t = Ni(e)),
        nc(e, null, n),
        t
      );
    }
    return (Ci(e, l, t, n), Ni(e));
  }
  function Ql(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194048) !== 0))
    ) {
      var l = t.lanes;
      ((l &= e.pendingLanes), (n |= l), (t.lanes = n), cs(e, n));
    }
  }
  function Ro(e, t) {
    var n = e.updateQueue,
      l = e.alternate;
    if (l !== null && ((l = l.updateQueue), n === l)) {
      var i = null,
        a = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var r = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          (a === null ? (i = a = r) : (a = a.next = r), (n = n.next));
        } while (n !== null);
        a === null ? (i = a = t) : (a = a.next = t);
      } else i = a = t;
      ((n = {
        baseState: l.baseState,
        firstBaseUpdate: i,
        lastBaseUpdate: a,
        shared: l.shared,
        callbacks: l.callbacks,
      }),
        (e.updateQueue = n));
      return;
    }
    ((e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t));
  }
  var Mo = !1;
  function Ll() {
    if (Mo) {
      var e = el;
      if (e !== null) throw e;
    }
  }
  function Zl(e, t, n, l) {
    Mo = !1;
    var i = e.updateQueue;
    Wt = !1;
    var a = i.firstBaseUpdate,
      r = i.lastBaseUpdate,
      s = i.shared.pending;
    if (s !== null) {
      i.shared.pending = null;
      var c = s,
        m = c.next;
      ((c.next = null), r === null ? (a = m) : (r.next = m), (r = c));
      var v = e.alternate;
      v !== null &&
        ((v = v.updateQueue),
        (s = v.lastBaseUpdate),
        s !== r &&
          (s === null ? (v.firstBaseUpdate = m) : (s.next = m),
          (v.lastBaseUpdate = c)));
    }
    if (a !== null) {
      var w = i.baseState;
      ((r = 0), (v = m = c = null), (s = a));
      do {
        var g = s.lane & -536870913,
          p = g !== s.lane;
        if (p ? (k & g) === g : (l & g) === g) {
          (g !== 0 && g === Pn && (Mo = !0),
            v !== null &&
              (v = v.next =
                {
                  lane: 0,
                  tag: s.tag,
                  payload: s.payload,
                  callback: null,
                  next: null,
                }));
          e: {
            var G = e,
              N = s;
            g = t;
            var oe = n;
            switch (N.tag) {
              case 1:
                if (((G = N.payload), typeof G == "function")) {
                  w = G.call(oe, w, g);
                  break e;
                }
                w = G;
                break e;
              case 3:
                G.flags = (G.flags & -65537) | 128;
              case 0:
                if (
                  ((G = N.payload),
                  (g = typeof G == "function" ? G.call(oe, w, g) : G),
                  g == null)
                )
                  break e;
                w = U({}, w, g);
                break e;
              case 2:
                Wt = !0;
            }
          }
          ((g = s.callback),
            g !== null &&
              ((e.flags |= 64),
              p && (e.flags |= 8192),
              (p = i.callbacks),
              p === null ? (i.callbacks = [g]) : p.push(g)));
        } else
          ((p = {
            lane: g,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null,
          }),
            v === null ? ((m = v = p), (c = w)) : (v = v.next = p),
            (r |= g));
        if (((s = s.next), s === null)) {
          if (((s = i.shared.pending), s === null)) break;
          ((p = s),
            (s = p.next),
            (p.next = null),
            (i.lastBaseUpdate = p),
            (i.shared.pending = null));
        }
      } while (!0);
      (v === null && (c = w),
        (i.baseState = c),
        (i.firstBaseUpdate = m),
        (i.lastBaseUpdate = v),
        a === null && (i.shared.lanes = 0),
        (nn |= r),
        (e.lanes = r),
        (e.memoizedState = w));
    }
  }
  function pc(e, t) {
    if (typeof e != "function") throw Error(y(191, e));
    e.call(t);
  }
  function xc(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++) pc(n[e], t);
  }
  var tl = A(null),
    Wi = A(0);
  function vc(e, t) {
    ((e = Yt), E(Wi, e), E(tl, t), (Yt = e | t.baseLanes));
  }
  function Ho() {
    (E(Wi, Yt), E(tl, tl.current));
  }
  function Oo() {
    ((Yt = Wi.current), M(tl), M(Wi));
  }
  var Jt = 0,
    Z = null,
    ie = null,
    xe = null,
    Ki = !1,
    nl = !1,
    En = !1,
    ki = 0,
    Vl = 0,
    ll = null,
    bh = 0;
  function ge() {
    throw Error(y(321));
  }
  function _o(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Fe(e[n], t[n])) return !1;
    return !0;
  }
  function Uo(e, t, n, l, i, a) {
    return (
      (Jt = a),
      (Z = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (b.H = e === null || e.memoizedState === null ? nu : lu),
      (En = !1),
      (a = n(l, i)),
      (En = !1),
      nl && (a = jc(t, n, l, i)),
      bc(e),
      a
    );
  }
  function bc(e) {
    b.H = ea;
    var t = ie !== null && ie.next !== null;
    if (((Jt = 0), (xe = ie = Z = null), (Ki = !1), (Vl = 0), (ll = null), t))
      throw Error(y(300));
    e === null ||
      ze ||
      ((e = e.dependencies), e !== null && Xi(e) && (ze = !0));
  }
  function jc(e, t, n, l) {
    Z = e;
    var i = 0;
    do {
      if ((nl && (ll = null), (Vl = 0), (nl = !1), 25 <= i))
        throw Error(y(301));
      if (((i += 1), (xe = ie = null), e.updateQueue != null)) {
        var a = e.updateQueue;
        ((a.lastEffect = null),
          (a.events = null),
          (a.stores = null),
          a.memoCache != null && (a.memoCache.index = 0));
      }
      ((b.H = Bh), (a = t(n, l)));
    } while (nl);
    return a;
  }
  function jh() {
    var e = b.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? Wl(t) : t),
      (e = e.useState()[0]),
      (ie !== null ? ie.memoizedState : null) !== e && (Z.flags |= 1024),
      t
    );
  }
  function Co() {
    var e = ki !== 0;
    return ((ki = 0), e);
  }
  function No(e, t, n) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
  }
  function qo(e) {
    if (Ki) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      Ki = !1;
    }
    ((Jt = 0), (xe = ie = Z = null), (nl = !1), (Vl = ki = 0), (ll = null));
  }
  function Xe() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (xe === null ? (Z.memoizedState = xe = e) : (xe = xe.next = e), xe);
  }
  function ve() {
    if (ie === null) {
      var e = Z.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ie.next;
    var t = xe === null ? Z.memoizedState : xe.next;
    if (t !== null) ((xe = t), (ie = e));
    else {
      if (e === null)
        throw Z.alternate === null ? Error(y(467)) : Error(y(310));
      ((ie = e),
        (e = {
          memoizedState: ie.memoizedState,
          baseState: ie.baseState,
          baseQueue: ie.baseQueue,
          queue: ie.queue,
          next: null,
        }),
        xe === null ? (Z.memoizedState = xe = e) : (xe = xe.next = e));
    }
    return xe;
  }
  function Yo() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Wl(e) {
    var t = Vl;
    return (
      (Vl += 1),
      ll === null && (ll = []),
      (e = mc(ll, e, t)),
      (t = Z),
      (xe === null ? t.memoizedState : xe.next) === null &&
        ((t = t.alternate),
        (b.H = t === null || t.memoizedState === null ? nu : lu)),
      e
    );
  }
  function Ji(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Wl(e);
      if (e.$$typeof === Me) return Ue(e);
    }
    throw Error(y(438, String(e)));
  }
  function Go(e) {
    var t = null,
      n = Z.updateQueue;
    if ((n !== null && (t = n.memoCache), t == null)) {
      var l = Z.alternate;
      l !== null &&
        ((l = l.updateQueue),
        l !== null &&
          ((l = l.memoCache),
          l != null &&
            (t = {
              data: l.data.map(function (i) {
                return i.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      n === null && ((n = Yo()), (Z.updateQueue = n)),
      (n.memoCache = t),
      (n = t.data[t.index]),
      n === void 0)
    )
      for (n = t.data[t.index] = Array(e), l = 0; l < e; l++) n[l] = _n;
    return (t.index++, n);
  }
  function Ot(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Fi(e) {
    var t = ve();
    return Xo(t, ie, e);
  }
  function Xo(e, t, n) {
    var l = e.queue;
    if (l === null) throw Error(y(311));
    l.lastRenderedReducer = n;
    var i = e.baseQueue,
      a = l.pending;
    if (a !== null) {
      if (i !== null) {
        var r = i.next;
        ((i.next = a.next), (a.next = r));
      }
      ((t.baseQueue = i = a), (l.pending = null));
    }
    if (((a = e.baseState), i === null)) e.memoizedState = a;
    else {
      t = i.next;
      var s = (r = null),
        c = null,
        m = t,
        v = !1;
      do {
        var w = m.lane & -536870913;
        if (w !== m.lane ? (k & w) === w : (Jt & w) === w) {
          var g = m.revertLane;
          if (g === 0)
            (c !== null &&
              (c = c.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: m.action,
                  hasEagerState: m.hasEagerState,
                  eagerState: m.eagerState,
                  next: null,
                }),
              w === Pn && (v = !0));
          else if ((Jt & g) === g) {
            ((m = m.next), g === Pn && (v = !0));
            continue;
          } else
            ((w = {
              lane: 0,
              revertLane: m.revertLane,
              action: m.action,
              hasEagerState: m.hasEagerState,
              eagerState: m.eagerState,
              next: null,
            }),
              c === null ? ((s = c = w), (r = a)) : (c = c.next = w),
              (Z.lanes |= g),
              (nn |= g));
          ((w = m.action),
            En && n(a, w),
            (a = m.hasEagerState ? m.eagerState : n(a, w)));
        } else
          ((g = {
            lane: w,
            revertLane: m.revertLane,
            action: m.action,
            hasEagerState: m.hasEagerState,
            eagerState: m.eagerState,
            next: null,
          }),
            c === null ? ((s = c = g), (r = a)) : (c = c.next = g),
            (Z.lanes |= w),
            (nn |= w));
        m = m.next;
      } while (m !== null && m !== t);
      if (
        (c === null ? (r = a) : (c.next = s),
        !Fe(a, e.memoizedState) && ((ze = !0), v && ((n = el), n !== null)))
      )
        throw n;
      ((e.memoizedState = a),
        (e.baseState = r),
        (e.baseQueue = c),
        (l.lastRenderedState = a));
    }
    return (i === null && (l.lanes = 0), [e.memoizedState, l.dispatch]);
  }
  function Qo(e) {
    var t = ve(),
      n = t.queue;
    if (n === null) throw Error(y(311));
    n.lastRenderedReducer = e;
    var l = n.dispatch,
      i = n.pending,
      a = t.memoizedState;
    if (i !== null) {
      n.pending = null;
      var r = (i = i.next);
      do ((a = e(a, r.action)), (r = r.next));
      while (r !== i);
      (Fe(a, t.memoizedState) || (ze = !0),
        (t.memoizedState = a),
        t.baseQueue === null && (t.baseState = a),
        (n.lastRenderedState = a));
    }
    return [a, l];
  }
  function Sc(e, t, n) {
    var l = Z,
      i = ve(),
      a = ee;
    if (a) {
      if (n === void 0) throw Error(y(407));
      n = n();
    } else n = t();
    var r = !Fe((ie || i).memoizedState, n);
    (r && ((i.memoizedState = n), (ze = !0)), (i = i.queue));
    var s = zc.bind(null, l, i, e);
    if (
      (Kl(2048, 8, s, [e]),
      i.getSnapshot !== t || r || (xe !== null && xe.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        il(9, $i(), Tc.bind(null, l, i, n, t), null),
        ce === null)
      )
        throw Error(y(349));
      a || (Jt & 124) !== 0 || wc(l, t, n);
    }
    return n;
  }
  function wc(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = Z.updateQueue),
      t === null
        ? ((t = Yo()), (Z.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function Tc(e, t, n, l) {
    ((t.value = n), (t.getSnapshot = l), Ac(t) && Bc(e));
  }
  function zc(e, t, n) {
    return n(function () {
      Ac(t) && Bc(e);
    });
  }
  function Ac(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Fe(e, n);
    } catch {
      return !0;
    }
  }
  function Bc(e) {
    var t = Jn(e, 2);
    t !== null && nt(t, e, 2);
  }
  function Lo(e) {
    var t = Xe();
    if (typeof e == "function") {
      var n = e;
      if (((e = n()), En)) {
        Qt(!0);
        try {
          n();
        } finally {
          Qt(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ot,
        lastRenderedState: e,
      }),
      t
    );
  }
  function Dc(e, t, n, l) {
    return ((e.baseState = n), Xo(e, ie, typeof l == "function" ? l : Ot));
  }
  function Sh(e, t, n, l, i) {
    if (Pi(e)) throw Error(y(485));
    if (((e = t.action), e !== null)) {
      var a = {
        payload: i,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (r) {
          a.listeners.push(r);
        },
      };
      (b.T !== null ? n(!0) : (a.isTransition = !1),
        l(a),
        (n = t.pending),
        n === null
          ? ((a.next = t.pending = a), Ec(t, a))
          : ((a.next = n.next), (t.pending = n.next = a)));
    }
  }
  function Ec(e, t) {
    var n = t.action,
      l = t.payload,
      i = e.state;
    if (t.isTransition) {
      var a = b.T,
        r = {};
      b.T = r;
      try {
        var s = n(i, l),
          c = b.S;
        (c !== null && c(r, s), Rc(e, t, s));
      } catch (m) {
        Zo(e, t, m);
      } finally {
        b.T = a;
      }
    } else
      try {
        ((a = n(i, l)), Rc(e, t, a));
      } catch (m) {
        Zo(e, t, m);
      }
  }
  function Rc(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (l) {
            Mc(e, t, l);
          },
          function (l) {
            return Zo(e, t, l);
          },
        )
      : Mc(e, t, n);
  }
  function Mc(e, t, n) {
    ((t.status = "fulfilled"),
      (t.value = n),
      Hc(t),
      (e.state = n),
      (t = e.pending),
      t !== null &&
        ((n = t.next),
        n === t ? (e.pending = null) : ((n = n.next), (t.next = n), Ec(e, n))));
  }
  function Zo(e, t, n) {
    var l = e.pending;
    if (((e.pending = null), l !== null)) {
      l = l.next;
      do ((t.status = "rejected"), (t.reason = n), Hc(t), (t = t.next));
      while (t !== l);
    }
    e.action = null;
  }
  function Hc(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Oc(e, t) {
    return t;
  }
  function _c(e, t) {
    if (ee) {
      var n = ce.formState;
      if (n !== null) {
        e: {
          var l = Z;
          if (ee) {
            if (me) {
              t: {
                for (var i = me, a = vt; i.nodeType !== 8; ) {
                  if (!a) {
                    i = null;
                    break t;
                  }
                  if (((i = gt(i.nextSibling)), i === null)) {
                    i = null;
                    break t;
                  }
                }
                ((a = i.data), (i = a === "F!" || a === "F" ? i : null));
              }
              if (i) {
                ((me = gt(i.nextSibling)), (l = i.data === "F!"));
                break e;
              }
            }
            zn(l);
          }
          l = !1;
        }
        l && (t = n[0]);
      }
    }
    return (
      (n = Xe()),
      (n.memoizedState = n.baseState = t),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Oc,
        lastRenderedState: t,
      }),
      (n.queue = l),
      (n = Pc.bind(null, Z, l)),
      (l.dispatch = n),
      (l = Lo(!1)),
      (a = Jo.bind(null, Z, !1, l.queue)),
      (l = Xe()),
      (i = { state: t, dispatch: null, action: e, pending: null }),
      (l.queue = i),
      (n = Sh.bind(null, Z, i, a, n)),
      (i.dispatch = n),
      (l.memoizedState = e),
      [t, n, !1]
    );
  }
  function Uc(e) {
    var t = ve();
    return Cc(t, ie, e);
  }
  function Cc(e, t, n) {
    if (
      ((t = Xo(e, t, Oc)[0]),
      (e = Fi(Ot)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var l = Wl(t);
      } catch (r) {
        throw r === Gl ? Zi : r;
      }
    else l = t;
    t = ve();
    var i = t.queue,
      a = i.dispatch;
    return (
      n !== t.memoizedState &&
        ((Z.flags |= 2048), il(9, $i(), wh.bind(null, i, n), null)),
      [l, a, e]
    );
  }
  function wh(e, t) {
    e.action = t;
  }
  function Nc(e) {
    var t = ve(),
      n = ie;
    if (n !== null) return Cc(t, n, e);
    (ve(), (t = t.memoizedState), (n = ve()));
    var l = n.queue.dispatch;
    return ((n.memoizedState = e), [t, l, !1]);
  }
  function il(e, t, n, l) {
    return (
      (e = { tag: e, create: n, deps: l, inst: t, next: null }),
      (t = Z.updateQueue),
      t === null && ((t = Yo()), (Z.updateQueue = t)),
      (n = t.lastEffect),
      n === null
        ? (t.lastEffect = e.next = e)
        : ((l = n.next), (n.next = e), (e.next = l), (t.lastEffect = e)),
      e
    );
  }
  function $i() {
    return { destroy: void 0, resource: void 0 };
  }
  function qc() {
    return ve().memoizedState;
  }
  function Ii(e, t, n, l) {
    var i = Xe();
    ((l = l === void 0 ? null : l),
      (Z.flags |= e),
      (i.memoizedState = il(1 | t, $i(), n, l)));
  }
  function Kl(e, t, n, l) {
    var i = ve();
    l = l === void 0 ? null : l;
    var a = i.memoizedState.inst;
    ie !== null && l !== null && _o(l, ie.memoizedState.deps)
      ? (i.memoizedState = il(t, a, n, l))
      : ((Z.flags |= e), (i.memoizedState = il(1 | t, a, n, l)));
  }
  function Yc(e, t) {
    Ii(8390656, 8, e, t);
  }
  function Gc(e, t) {
    Kl(2048, 8, e, t);
  }
  function Xc(e, t) {
    return Kl(4, 2, e, t);
  }
  function Qc(e, t) {
    return Kl(4, 4, e, t);
  }
  function Lc(e, t) {
    if (typeof t == "function") {
      e = e();
      var n = t(e);
      return function () {
        typeof n == "function" ? n() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Zc(e, t, n) {
    ((n = n != null ? n.concat([e]) : null), Kl(4, 4, Lc.bind(null, t, e), n));
  }
  function Vo() {}
  function Vc(e, t) {
    var n = ve();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    return t !== null && _o(t, l[1]) ? l[0] : ((n.memoizedState = [e, t]), e);
  }
  function Wc(e, t) {
    var n = ve();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    if (t !== null && _o(t, l[1])) return l[0];
    if (((l = e()), En)) {
      Qt(!0);
      try {
        e();
      } finally {
        Qt(!1);
      }
    }
    return ((n.memoizedState = [l, t]), l);
  }
  function Wo(e, t, n) {
    return n === void 0 || (Jt & 1073741824) !== 0
      ? (e.memoizedState = t)
      : ((e.memoizedState = n), (e = Ju()), (Z.lanes |= e), (nn |= e), n);
  }
  function Kc(e, t, n, l) {
    return Fe(n, t)
      ? n
      : tl.current !== null
        ? ((e = Wo(e, n, l)), Fe(e, t) || (ze = !0), e)
        : (Jt & 42) === 0
          ? ((ze = !0), (e.memoizedState = n))
          : ((e = Ju()), (Z.lanes |= e), (nn |= e), t);
  }
  function kc(e, t, n, l, i) {
    var a = R.p;
    R.p = a !== 0 && 8 > a ? a : 8;
    var r = b.T,
      s = {};
    ((b.T = s), Jo(e, !1, t, n));
    try {
      var c = i(),
        m = b.S;
      if (
        (m !== null && m(s, c),
        c !== null && typeof c == "object" && typeof c.then == "function")
      ) {
        var v = vh(c, l);
        kl(e, t, v, tt(e));
      } else kl(e, t, l, tt(e));
    } catch (w) {
      kl(e, t, { then: function () {}, status: "rejected", reason: w }, tt());
    } finally {
      ((R.p = a), (b.T = r));
    }
  }
  function Th() {}
  function Ko(e, t, n, l) {
    if (e.tag !== 5) throw Error(y(476));
    var i = Jc(e).queue;
    kc(
      e,
      i,
      t,
      Y,
      n === null
        ? Th
        : function () {
            return (Fc(e), n(l));
          },
    );
  }
  function Jc(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: Y,
      baseState: Y,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ot,
        lastRenderedState: Y,
      },
      next: null,
    };
    var n = {};
    return (
      (t.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ot,
          lastRenderedState: n,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function Fc(e) {
    var t = Jc(e).next.queue;
    kl(e, t, {}, tt());
  }
  function ko() {
    return Ue(di);
  }
  function $c() {
    return ve().memoizedState;
  }
  function Ic() {
    return ve().memoizedState;
  }
  function zh(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = tt();
          e = Kt(n);
          var l = kt(t, e, n);
          (l !== null && (nt(l, t, n), Ql(l, t, n)),
            (t = { cache: To() }),
            (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function Ah(e, t, n) {
    var l = tt();
    ((n = {
      lane: l,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Pi(e)
        ? eu(t, n)
        : ((n = mo(e, t, n, l)), n !== null && (nt(n, e, l), tu(n, t, l))));
  }
  function Pc(e, t, n) {
    var l = tt();
    kl(e, t, n, l);
  }
  function kl(e, t, n, l) {
    var i = {
      lane: l,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Pi(e)) eu(t, i);
    else {
      var a = e.alternate;
      if (
        e.lanes === 0 &&
        (a === null || a.lanes === 0) &&
        ((a = t.lastRenderedReducer), a !== null)
      )
        try {
          var r = t.lastRenderedState,
            s = a(r, n);
          if (((i.hasEagerState = !0), (i.eagerState = s), Fe(s, r)))
            return (Ci(e, t, i, 0), ce === null && Ui(), !1);
        } catch {
        } finally {
        }
      if (((n = mo(e, t, i, l)), n !== null))
        return (nt(n, e, l), tu(n, t, l), !0);
    }
    return !1;
  }
  function Jo(e, t, n, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: Br(),
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Pi(e))
    ) {
      if (t) throw Error(y(479));
    } else ((t = mo(e, n, l, 2)), t !== null && nt(t, e, 2));
  }
  function Pi(e) {
    var t = e.alternate;
    return e === Z || (t !== null && t === Z);
  }
  function eu(e, t) {
    nl = Ki = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t));
  }
  function tu(e, t, n) {
    if ((n & 4194048) !== 0) {
      var l = t.lanes;
      ((l &= e.pendingLanes), (n |= l), (t.lanes = n), cs(e, n));
    }
  }
  var ea = {
      readContext: Ue,
      use: Ji,
      useCallback: ge,
      useContext: ge,
      useEffect: ge,
      useImperativeHandle: ge,
      useLayoutEffect: ge,
      useInsertionEffect: ge,
      useMemo: ge,
      useReducer: ge,
      useRef: ge,
      useState: ge,
      useDebugValue: ge,
      useDeferredValue: ge,
      useTransition: ge,
      useSyncExternalStore: ge,
      useId: ge,
      useHostTransitionStatus: ge,
      useFormState: ge,
      useActionState: ge,
      useOptimistic: ge,
      useMemoCache: ge,
      useCacheRefresh: ge,
    },
    nu = {
      readContext: Ue,
      use: Ji,
      useCallback: function (e, t) {
        return ((Xe().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: Ue,
      useEffect: Yc,
      useImperativeHandle: function (e, t, n) {
        ((n = n != null ? n.concat([e]) : null),
          Ii(4194308, 4, Lc.bind(null, t, e), n));
      },
      useLayoutEffect: function (e, t) {
        return Ii(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        Ii(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Xe();
        t = t === void 0 ? null : t;
        var l = e();
        if (En) {
          Qt(!0);
          try {
            e();
          } finally {
            Qt(!1);
          }
        }
        return ((n.memoizedState = [l, t]), l);
      },
      useReducer: function (e, t, n) {
        var l = Xe();
        if (n !== void 0) {
          var i = n(t);
          if (En) {
            Qt(!0);
            try {
              n(t);
            } finally {
              Qt(!1);
            }
          }
        } else i = t;
        return (
          (l.memoizedState = l.baseState = i),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: i,
          }),
          (l.queue = e),
          (e = e.dispatch = Ah.bind(null, Z, e)),
          [l.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Xe();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = Lo(e);
        var t = e.queue,
          n = Pc.bind(null, Z, t);
        return ((t.dispatch = n), [e.memoizedState, n]);
      },
      useDebugValue: Vo,
      useDeferredValue: function (e, t) {
        var n = Xe();
        return Wo(n, e, t);
      },
      useTransition: function () {
        var e = Lo(!1);
        return (
          (e = kc.bind(null, Z, e.queue, !0, !1)),
          (Xe().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, n) {
        var l = Z,
          i = Xe();
        if (ee) {
          if (n === void 0) throw Error(y(407));
          n = n();
        } else {
          if (((n = t()), ce === null)) throw Error(y(349));
          (k & 124) !== 0 || wc(l, t, n);
        }
        i.memoizedState = n;
        var a = { value: n, getSnapshot: t };
        return (
          (i.queue = a),
          Yc(zc.bind(null, l, a, e), [e]),
          (l.flags |= 2048),
          il(9, $i(), Tc.bind(null, l, a, n, t), null),
          n
        );
      },
      useId: function () {
        var e = Xe(),
          t = ce.identifierPrefix;
        if (ee) {
          var n = Rt,
            l = Et;
          ((n = (l & ~(1 << (32 - Je(l) - 1))).toString(32) + n),
            (t = "«" + t + "R" + n),
            (n = ki++),
            0 < n && (t += "H" + n.toString(32)),
            (t += "»"));
        } else ((n = bh++), (t = "«" + t + "r" + n.toString(32) + "»"));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: ko,
      useFormState: _c,
      useActionState: _c,
      useOptimistic: function (e) {
        var t = Xe();
        t.memoizedState = t.baseState = e;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = n),
          (t = Jo.bind(null, Z, !0, n)),
          (n.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: Go,
      useCacheRefresh: function () {
        return (Xe().memoizedState = zh.bind(null, Z));
      },
    },
    lu = {
      readContext: Ue,
      use: Ji,
      useCallback: Vc,
      useContext: Ue,
      useEffect: Gc,
      useImperativeHandle: Zc,
      useInsertionEffect: Xc,
      useLayoutEffect: Qc,
      useMemo: Wc,
      useReducer: Fi,
      useRef: qc,
      useState: function () {
        return Fi(Ot);
      },
      useDebugValue: Vo,
      useDeferredValue: function (e, t) {
        var n = ve();
        return Kc(n, ie.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Fi(Ot)[0],
          t = ve().memoizedState;
        return [typeof e == "boolean" ? e : Wl(e), t];
      },
      useSyncExternalStore: Sc,
      useId: $c,
      useHostTransitionStatus: ko,
      useFormState: Uc,
      useActionState: Uc,
      useOptimistic: function (e, t) {
        var n = ve();
        return Dc(n, ie, e, t);
      },
      useMemoCache: Go,
      useCacheRefresh: Ic,
    },
    Bh = {
      readContext: Ue,
      use: Ji,
      useCallback: Vc,
      useContext: Ue,
      useEffect: Gc,
      useImperativeHandle: Zc,
      useInsertionEffect: Xc,
      useLayoutEffect: Qc,
      useMemo: Wc,
      useReducer: Qo,
      useRef: qc,
      useState: function () {
        return Qo(Ot);
      },
      useDebugValue: Vo,
      useDeferredValue: function (e, t) {
        var n = ve();
        return ie === null ? Wo(n, e, t) : Kc(n, ie.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Qo(Ot)[0],
          t = ve().memoizedState;
        return [typeof e == "boolean" ? e : Wl(e), t];
      },
      useSyncExternalStore: Sc,
      useId: $c,
      useHostTransitionStatus: ko,
      useFormState: Nc,
      useActionState: Nc,
      useOptimistic: function (e, t) {
        var n = ve();
        return ie !== null
          ? Dc(n, ie, e, t)
          : ((n.baseState = e), [e, n.queue.dispatch]);
      },
      useMemoCache: Go,
      useCacheRefresh: Ic,
    },
    al = null,
    Jl = 0;
  function ta(e) {
    var t = Jl;
    return ((Jl += 1), al === null && (al = []), mc(al, e, t));
  }
  function Fl(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function na(e, t) {
    throw t.$$typeof === P
      ? Error(y(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          y(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e,
          ),
        ));
  }
  function iu(e) {
    var t = e._init;
    return t(e._payload);
  }
  function au(e) {
    function t(d, f) {
      if (e) {
        var h = d.deletions;
        h === null ? ((d.deletions = [f]), (d.flags |= 16)) : h.push(f);
      }
    }
    function n(d, f) {
      if (!e) return null;
      for (; f !== null; ) (t(d, f), (f = f.sibling));
      return null;
    }
    function l(d) {
      for (var f = new Map(); d !== null; )
        (d.key !== null ? f.set(d.key, d) : f.set(d.index, d), (d = d.sibling));
      return f;
    }
    function i(d, f) {
      return ((d = Dt(d, f)), (d.index = 0), (d.sibling = null), d);
    }
    function a(d, f, h) {
      return (
        (d.index = h),
        e
          ? ((h = d.alternate),
            h !== null
              ? ((h = h.index), h < f ? ((d.flags |= 67108866), f) : h)
              : ((d.flags |= 67108866), f))
          : ((d.flags |= 1048576), f)
      );
    }
    function r(d) {
      return (e && d.alternate === null && (d.flags |= 67108866), d);
    }
    function s(d, f, h, S) {
      return f === null || f.tag !== 6
        ? ((f = go(h, d.mode, S)), (f.return = d), f)
        : ((f = i(f, h)), (f.return = d), f);
    }
    function c(d, f, h, S) {
      var O = h.type;
      return O === we
        ? v(d, f, h.props.children, S, h.key)
        : f !== null &&
            (f.elementType === O ||
              (typeof O == "object" &&
                O !== null &&
                O.$$typeof === We &&
                iu(O) === f.type))
          ? ((f = i(f, h.props)), Fl(f, h), (f.return = d), f)
          : ((f = qi(h.type, h.key, h.props, null, d.mode, S)),
            Fl(f, h),
            (f.return = d),
            f);
    }
    function m(d, f, h, S) {
      return f === null ||
        f.tag !== 4 ||
        f.stateNode.containerInfo !== h.containerInfo ||
        f.stateNode.implementation !== h.implementation
        ? ((f = po(h, d.mode, S)), (f.return = d), f)
        : ((f = i(f, h.children || [])), (f.return = d), f);
    }
    function v(d, f, h, S, O) {
      return f === null || f.tag !== 7
        ? ((f = jn(h, d.mode, S, O)), (f.return = d), f)
        : ((f = i(f, h)), (f.return = d), f);
    }
    function w(d, f, h) {
      if (
        (typeof f == "string" && f !== "") ||
        typeof f == "number" ||
        typeof f == "bigint"
      )
        return ((f = go("" + f, d.mode, h)), (f.return = d), f);
      if (typeof f == "object" && f !== null) {
        switch (f.$$typeof) {
          case J:
            return (
              (h = qi(f.type, f.key, f.props, null, d.mode, h)),
              Fl(h, f),
              (h.return = d),
              h
            );
          case Se:
            return ((f = po(f, d.mode, h)), (f.return = d), f);
          case We:
            var S = f._init;
            return ((f = S(f._payload)), w(d, f, h));
        }
        if (Oe(f) || He(f))
          return ((f = jn(f, d.mode, h, null)), (f.return = d), f);
        if (typeof f.then == "function") return w(d, ta(f), h);
        if (f.$$typeof === Me) return w(d, Qi(d, f), h);
        na(d, f);
      }
      return null;
    }
    function g(d, f, h, S) {
      var O = f !== null ? f.key : null;
      if (
        (typeof h == "string" && h !== "") ||
        typeof h == "number" ||
        typeof h == "bigint"
      )
        return O !== null ? null : s(d, f, "" + h, S);
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case J:
            return h.key === O ? c(d, f, h, S) : null;
          case Se:
            return h.key === O ? m(d, f, h, S) : null;
          case We:
            return ((O = h._init), (h = O(h._payload)), g(d, f, h, S));
        }
        if (Oe(h) || He(h)) return O !== null ? null : v(d, f, h, S, null);
        if (typeof h.then == "function") return g(d, f, ta(h), S);
        if (h.$$typeof === Me) return g(d, f, Qi(d, h), S);
        na(d, h);
      }
      return null;
    }
    function p(d, f, h, S, O) {
      if (
        (typeof S == "string" && S !== "") ||
        typeof S == "number" ||
        typeof S == "bigint"
      )
        return ((d = d.get(h) || null), s(f, d, "" + S, O));
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case J:
            return (
              (d = d.get(S.key === null ? h : S.key) || null),
              c(f, d, S, O)
            );
          case Se:
            return (
              (d = d.get(S.key === null ? h : S.key) || null),
              m(f, d, S, O)
            );
          case We:
            var V = S._init;
            return ((S = V(S._payload)), p(d, f, h, S, O));
        }
        if (Oe(S) || He(S))
          return ((d = d.get(h) || null), v(f, d, S, O, null));
        if (typeof S.then == "function") return p(d, f, h, ta(S), O);
        if (S.$$typeof === Me) return p(d, f, h, Qi(f, S), O);
        na(f, S);
      }
      return null;
    }
    function G(d, f, h, S) {
      for (
        var O = null, V = null, _ = f, q = (f = 0), Be = null;
        _ !== null && q < h.length;
        q++
      ) {
        _.index > q ? ((Be = _), (_ = null)) : (Be = _.sibling);
        var I = g(d, _, h[q], S);
        if (I === null) {
          _ === null && (_ = Be);
          break;
        }
        (e && _ && I.alternate === null && t(d, _),
          (f = a(I, f, q)),
          V === null ? (O = I) : (V.sibling = I),
          (V = I),
          (_ = Be));
      }
      if (q === h.length) return (n(d, _), ee && wn(d, q), O);
      if (_ === null) {
        for (; q < h.length; q++)
          ((_ = w(d, h[q], S)),
            _ !== null &&
              ((f = a(_, f, q)),
              V === null ? (O = _) : (V.sibling = _),
              (V = _)));
        return (ee && wn(d, q), O);
      }
      for (_ = l(_); q < h.length; q++)
        ((Be = p(_, d, q, h[q], S)),
          Be !== null &&
            (e &&
              Be.alternate !== null &&
              _.delete(Be.key === null ? q : Be.key),
            (f = a(Be, f, q)),
            V === null ? (O = Be) : (V.sibling = Be),
            (V = Be)));
      return (
        e &&
          _.forEach(function (dn) {
            return t(d, dn);
          }),
        ee && wn(d, q),
        O
      );
    }
    function N(d, f, h, S) {
      if (h == null) throw Error(y(151));
      for (
        var O = null, V = null, _ = f, q = (f = 0), Be = null, I = h.next();
        _ !== null && !I.done;
        q++, I = h.next()
      ) {
        _.index > q ? ((Be = _), (_ = null)) : (Be = _.sibling);
        var dn = g(d, _, I.value, S);
        if (dn === null) {
          _ === null && (_ = Be);
          break;
        }
        (e && _ && dn.alternate === null && t(d, _),
          (f = a(dn, f, q)),
          V === null ? (O = dn) : (V.sibling = dn),
          (V = dn),
          (_ = Be));
      }
      if (I.done) return (n(d, _), ee && wn(d, q), O);
      if (_ === null) {
        for (; !I.done; q++, I = h.next())
          ((I = w(d, I.value, S)),
            I !== null &&
              ((f = a(I, f, q)),
              V === null ? (O = I) : (V.sibling = I),
              (V = I)));
        return (ee && wn(d, q), O);
      }
      for (_ = l(_); !I.done; q++, I = h.next())
        ((I = p(_, d, q, I.value, S)),
          I !== null &&
            (e && I.alternate !== null && _.delete(I.key === null ? q : I.key),
            (f = a(I, f, q)),
            V === null ? (O = I) : (V.sibling = I),
            (V = I)));
      return (
        e &&
          _.forEach(function (Dm) {
            return t(d, Dm);
          }),
        ee && wn(d, q),
        O
      );
    }
    function oe(d, f, h, S) {
      if (
        (typeof h == "object" &&
          h !== null &&
          h.type === we &&
          h.key === null &&
          (h = h.props.children),
        typeof h == "object" && h !== null)
      ) {
        switch (h.$$typeof) {
          case J:
            e: {
              for (var O = h.key; f !== null; ) {
                if (f.key === O) {
                  if (((O = h.type), O === we)) {
                    if (f.tag === 7) {
                      (n(d, f.sibling),
                        (S = i(f, h.props.children)),
                        (S.return = d),
                        (d = S));
                      break e;
                    }
                  } else if (
                    f.elementType === O ||
                    (typeof O == "object" &&
                      O !== null &&
                      O.$$typeof === We &&
                      iu(O) === f.type)
                  ) {
                    (n(d, f.sibling),
                      (S = i(f, h.props)),
                      Fl(S, h),
                      (S.return = d),
                      (d = S));
                    break e;
                  }
                  n(d, f);
                  break;
                } else t(d, f);
                f = f.sibling;
              }
              h.type === we
                ? ((S = jn(h.props.children, d.mode, S, h.key)),
                  (S.return = d),
                  (d = S))
                : ((S = qi(h.type, h.key, h.props, null, d.mode, S)),
                  Fl(S, h),
                  (S.return = d),
                  (d = S));
            }
            return r(d);
          case Se:
            e: {
              for (O = h.key; f !== null; ) {
                if (f.key === O)
                  if (
                    f.tag === 4 &&
                    f.stateNode.containerInfo === h.containerInfo &&
                    f.stateNode.implementation === h.implementation
                  ) {
                    (n(d, f.sibling),
                      (S = i(f, h.children || [])),
                      (S.return = d),
                      (d = S));
                    break e;
                  } else {
                    n(d, f);
                    break;
                  }
                else t(d, f);
                f = f.sibling;
              }
              ((S = po(h, d.mode, S)), (S.return = d), (d = S));
            }
            return r(d);
          case We:
            return ((O = h._init), (h = O(h._payload)), oe(d, f, h, S));
        }
        if (Oe(h)) return G(d, f, h, S);
        if (He(h)) {
          if (((O = He(h)), typeof O != "function")) throw Error(y(150));
          return ((h = O.call(h)), N(d, f, h, S));
        }
        if (typeof h.then == "function") return oe(d, f, ta(h), S);
        if (h.$$typeof === Me) return oe(d, f, Qi(d, h), S);
        na(d, h);
      }
      return (typeof h == "string" && h !== "") ||
        typeof h == "number" ||
        typeof h == "bigint"
        ? ((h = "" + h),
          f !== null && f.tag === 6
            ? (n(d, f.sibling), (S = i(f, h)), (S.return = d), (d = S))
            : (n(d, f), (S = go(h, d.mode, S)), (S.return = d), (d = S)),
          r(d))
        : n(d, f);
    }
    return function (d, f, h, S) {
      try {
        Jl = 0;
        var O = oe(d, f, h, S);
        return ((al = null), O);
      } catch (_) {
        if (_ === Gl || _ === Zi) throw _;
        var V = $e(29, _, null, d.mode);
        return ((V.lanes = S), (V.return = d), V);
      } finally {
      }
    };
  }
  var ol = au(!0),
    ou = au(!1),
    ct = A(null),
    bt = null;
  function Ft(e) {
    var t = e.alternate;
    (E(je, je.current & 1),
      E(ct, e),
      bt === null &&
        (t === null || tl.current !== null || t.memoizedState !== null) &&
        (bt = e));
  }
  function ru(e) {
    if (e.tag === 22) {
      if ((E(je, je.current), E(ct, e), bt === null)) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (bt = e);
      }
    } else $t();
  }
  function $t() {
    (E(je, je.current), E(ct, ct.current));
  }
  function _t(e) {
    (M(ct), bt === e && (bt = null), M(je));
  }
  var je = A(0);
  function la(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || Yr(n))
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  function Fo(e, t, n, l) {
    ((t = e.memoizedState),
      (n = n(l, t)),
      (n = n == null ? t : U({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var $o = {
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var l = tt(),
        i = Kt(l);
      ((i.payload = t),
        n != null && (i.callback = n),
        (t = kt(e, i, l)),
        t !== null && (nt(t, e, l), Ql(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var l = tt(),
        i = Kt(l);
      ((i.tag = 1),
        (i.payload = t),
        n != null && (i.callback = n),
        (t = kt(e, i, l)),
        t !== null && (nt(t, e, l), Ql(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = tt(),
        l = Kt(n);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = kt(e, l, n)),
        t !== null && (nt(t, e, n), Ql(t, e, n)));
    },
  };
  function su(e, t, n, l, i, a, r) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(l, a, r)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Hl(n, l) || !Hl(i, a)
          : !0
    );
  }
  function cu(e, t, n, l) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, l),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, l),
      t.state !== e && $o.enqueueReplaceState(t, t.state, null));
  }
  function Rn(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var l in t) l !== "ref" && (n[l] = t[l]);
    }
    if ((e = e.defaultProps)) {
      n === t && (n = U({}, n));
      for (var i in e) n[i] === void 0 && (n[i] = e[i]);
    }
    return n;
  }
  var ia =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var t = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof e == "object" &&
                e !== null &&
                typeof e.message == "string"
                  ? String(e.message)
                  : String(e),
              error: e,
            });
            if (!window.dispatchEvent(t)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", e);
            return;
          }
          console.error(e);
        };
  function uu(e) {
    ia(e);
  }
  function fu(e) {
    console.error(e);
  }
  function du(e) {
    ia(e);
  }
  function aa(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function hu(e, t, n) {
    try {
      var l = e.onCaughtError;
      l(n.value, {
        componentStack: n.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  function Io(e, t, n) {
    return (
      (n = Kt(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        aa(e, t);
      }),
      n
    );
  }
  function mu(e) {
    return ((e = Kt(e)), (e.tag = 3), e);
  }
  function yu(e, t, n, l) {
    var i = n.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var a = l.value;
      ((e.payload = function () {
        return i(a);
      }),
        (e.callback = function () {
          hu(t, n, l);
        }));
    }
    var r = n.stateNode;
    r !== null &&
      typeof r.componentDidCatch == "function" &&
      (e.callback = function () {
        (hu(t, n, l),
          typeof i != "function" &&
            (ln === null ? (ln = new Set([this])) : ln.add(this)));
        var s = l.stack;
        this.componentDidCatch(l.value, {
          componentStack: s !== null ? s : "",
        });
      });
  }
  function Dh(e, t, n, l, i) {
    if (
      ((n.flags |= 32768),
      l !== null && typeof l == "object" && typeof l.then == "function")
    ) {
      if (
        ((t = n.alternate),
        t !== null && Nl(t, n, i, !0),
        (n = ct.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 13:
            return (
              bt === null ? Sr() : n.alternate === null && ye === 0 && (ye = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = i),
              l === Bo
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null ? (n.updateQueue = new Set([l])) : t.add(l),
                  Tr(e, l, i)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              l === Bo
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([l]),
                      }),
                      (n.updateQueue = t))
                    : ((n = t.retryQueue),
                      n === null ? (t.retryQueue = new Set([l])) : n.add(l)),
                  Tr(e, l, i)),
              !1
            );
        }
        throw Error(y(435, n.tag));
      }
      return (Tr(e, l, i), Sr(), !1);
    }
    if (ee)
      return (
        (t = ct.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = i),
            l !== bo && ((e = Error(y(422), { cause: l })), Cl(at(e, n))))
          : (l !== bo && ((t = Error(y(423), { cause: l })), Cl(at(t, n))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (i &= -i),
            (e.lanes |= i),
            (l = at(l, n)),
            (i = Io(e.stateNode, l, i)),
            Ro(e, i),
            ye !== 4 && (ye = 2)),
        !1
      );
    var a = Error(y(520), { cause: l });
    if (
      ((a = at(a, n)),
      li === null ? (li = [a]) : li.push(a),
      ye !== 4 && (ye = 2),
      t === null)
    )
      return !0;
    ((l = at(l, n)), (n = t));
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (e = i & -i),
            (n.lanes |= e),
            (e = Io(n.stateNode, l, e)),
            Ro(n, e),
            !1
          );
        case 1:
          if (
            ((t = n.type),
            (a = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (a !== null &&
                  typeof a.componentDidCatch == "function" &&
                  (ln === null || !ln.has(a)))))
          )
            return (
              (n.flags |= 65536),
              (i &= -i),
              (n.lanes |= i),
              (i = mu(i)),
              yu(i, e, n, l),
              Ro(n, i),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var gu = Error(y(461)),
    ze = !1;
  function De(e, t, n, l) {
    t.child = e === null ? ou(t, null, n, l) : ol(t, e.child, n, l);
  }
  function pu(e, t, n, l, i) {
    n = n.render;
    var a = t.ref;
    if ("ref" in l) {
      var r = {};
      for (var s in l) s !== "ref" && (r[s] = l[s]);
    } else r = l;
    return (
      Bn(t),
      (l = Uo(e, t, n, r, a, i)),
      (s = Co()),
      e !== null && !ze
        ? (No(e, t, i), Ut(e, t, i))
        : (ee && s && xo(t), (t.flags |= 1), De(e, t, l, i), t.child)
    );
  }
  function xu(e, t, n, l, i) {
    if (e === null) {
      var a = n.type;
      return typeof a == "function" &&
        !yo(a) &&
        a.defaultProps === void 0 &&
        n.compare === null
        ? ((t.tag = 15), (t.type = a), vu(e, t, a, l, i))
        : ((e = qi(n.type, null, l, t, t.mode, i)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((a = e.child), !or(e, i))) {
      var r = a.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Hl), n(r, l) && e.ref === t.ref)
      )
        return Ut(e, t, i);
    }
    return (
      (t.flags |= 1),
      (e = Dt(a, l)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function vu(e, t, n, l, i) {
    if (e !== null) {
      var a = e.memoizedProps;
      if (Hl(a, l) && e.ref === t.ref)
        if (((ze = !1), (t.pendingProps = l = a), or(e, i)))
          (e.flags & 131072) !== 0 && (ze = !0);
        else return ((t.lanes = e.lanes), Ut(e, t, i));
    }
    return Po(e, t, n, l, i);
  }
  function bu(e, t, n) {
    var l = t.pendingProps,
      i = l.children,
      a = e !== null ? e.memoizedState : null;
    if (l.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (((l = a !== null ? a.baseLanes | n : n), e !== null)) {
          for (i = t.child = e.child, a = 0; i !== null; )
            ((a = a | i.lanes | i.childLanes), (i = i.sibling));
          t.childLanes = a & ~l;
        } else ((t.childLanes = 0), (t.child = null));
        return ju(e, t, l, n);
      }
      if ((n & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Li(t, a !== null ? a.cachePool : null),
          a !== null ? vc(t, a) : Ho(),
          ru(t));
      else
        return (
          (t.lanes = t.childLanes = 536870912),
          ju(e, t, a !== null ? a.baseLanes | n : n, n)
        );
    } else
      a !== null
        ? (Li(t, a.cachePool), vc(t, a), $t(), (t.memoizedState = null))
        : (e !== null && Li(t, null), Ho(), $t());
    return (De(e, t, i, n), t.child);
  }
  function ju(e, t, n, l) {
    var i = Ao();
    return (
      (i = i === null ? null : { parent: be._currentValue, pool: i }),
      (t.memoizedState = { baseLanes: n, cachePool: i }),
      e !== null && Li(t, null),
      Ho(),
      ru(t),
      e !== null && Nl(e, t, l, !0),
      null
    );
  }
  function oa(e, t) {
    var n = t.ref;
    if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(y(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function Po(e, t, n, l, i) {
    return (
      Bn(t),
      (n = Uo(e, t, n, l, void 0, i)),
      (l = Co()),
      e !== null && !ze
        ? (No(e, t, i), Ut(e, t, i))
        : (ee && l && xo(t), (t.flags |= 1), De(e, t, n, i), t.child)
    );
  }
  function Su(e, t, n, l, i, a) {
    return (
      Bn(t),
      (t.updateQueue = null),
      (n = jc(t, l, n, i)),
      bc(e),
      (l = Co()),
      e !== null && !ze
        ? (No(e, t, a), Ut(e, t, a))
        : (ee && l && xo(t), (t.flags |= 1), De(e, t, n, a), t.child)
    );
  }
  function wu(e, t, n, l, i) {
    if ((Bn(t), t.stateNode === null)) {
      var a = Fn,
        r = n.contextType;
      (typeof r == "object" && r !== null && (a = Ue(r)),
        (a = new n(l, a)),
        (t.memoizedState =
          a.state !== null && a.state !== void 0 ? a.state : null),
        (a.updater = $o),
        (t.stateNode = a),
        (a._reactInternals = t),
        (a = t.stateNode),
        (a.props = l),
        (a.state = t.memoizedState),
        (a.refs = {}),
        Do(t),
        (r = n.contextType),
        (a.context = typeof r == "object" && r !== null ? Ue(r) : Fn),
        (a.state = t.memoizedState),
        (r = n.getDerivedStateFromProps),
        typeof r == "function" && (Fo(t, n, r, l), (a.state = t.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof a.getSnapshotBeforeUpdate == "function" ||
          (typeof a.UNSAFE_componentWillMount != "function" &&
            typeof a.componentWillMount != "function") ||
          ((r = a.state),
          typeof a.componentWillMount == "function" && a.componentWillMount(),
          typeof a.UNSAFE_componentWillMount == "function" &&
            a.UNSAFE_componentWillMount(),
          r !== a.state && $o.enqueueReplaceState(a, a.state, null),
          Zl(t, l, a, i),
          Ll(),
          (a.state = t.memoizedState)),
        typeof a.componentDidMount == "function" && (t.flags |= 4194308),
        (l = !0));
    } else if (e === null) {
      a = t.stateNode;
      var s = t.memoizedProps,
        c = Rn(n, s);
      a.props = c;
      var m = a.context,
        v = n.contextType;
      ((r = Fn), typeof v == "object" && v !== null && (r = Ue(v)));
      var w = n.getDerivedStateFromProps;
      ((v =
        typeof w == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function"),
        (s = t.pendingProps !== s),
        v ||
          (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
            typeof a.componentWillReceiveProps != "function") ||
          ((s || m !== r) && cu(t, a, l, r)),
        (Wt = !1));
      var g = t.memoizedState;
      ((a.state = g),
        Zl(t, l, a, i),
        Ll(),
        (m = t.memoizedState),
        s || g !== m || Wt
          ? (typeof w == "function" && (Fo(t, n, w, l), (m = t.memoizedState)),
            (c = Wt || su(t, n, c, l, g, m, r))
              ? (v ||
                  (typeof a.UNSAFE_componentWillMount != "function" &&
                    typeof a.componentWillMount != "function") ||
                  (typeof a.componentWillMount == "function" &&
                    a.componentWillMount(),
                  typeof a.UNSAFE_componentWillMount == "function" &&
                    a.UNSAFE_componentWillMount()),
                typeof a.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof a.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = l),
                (t.memoizedState = m)),
            (a.props = l),
            (a.state = m),
            (a.context = r),
            (l = c))
          : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
            (l = !1)));
    } else {
      ((a = t.stateNode),
        Eo(e, t),
        (r = t.memoizedProps),
        (v = Rn(n, r)),
        (a.props = v),
        (w = t.pendingProps),
        (g = a.context),
        (m = n.contextType),
        (c = Fn),
        typeof m == "object" && m !== null && (c = Ue(m)),
        (s = n.getDerivedStateFromProps),
        (m =
          typeof s == "function" ||
          typeof a.getSnapshotBeforeUpdate == "function") ||
          (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
            typeof a.componentWillReceiveProps != "function") ||
          ((r !== w || g !== c) && cu(t, a, l, c)),
        (Wt = !1),
        (g = t.memoizedState),
        (a.state = g),
        Zl(t, l, a, i),
        Ll());
      var p = t.memoizedState;
      r !== w ||
      g !== p ||
      Wt ||
      (e !== null && e.dependencies !== null && Xi(e.dependencies))
        ? (typeof s == "function" && (Fo(t, n, s, l), (p = t.memoizedState)),
          (v =
            Wt ||
            su(t, n, v, l, g, p, c) ||
            (e !== null && e.dependencies !== null && Xi(e.dependencies)))
            ? (m ||
                (typeof a.UNSAFE_componentWillUpdate != "function" &&
                  typeof a.componentWillUpdate != "function") ||
                (typeof a.componentWillUpdate == "function" &&
                  a.componentWillUpdate(l, p, c),
                typeof a.UNSAFE_componentWillUpdate == "function" &&
                  a.UNSAFE_componentWillUpdate(l, p, c)),
              typeof a.componentDidUpdate == "function" && (t.flags |= 4),
              typeof a.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof a.componentDidUpdate != "function" ||
                (r === e.memoizedProps && g === e.memoizedState) ||
                (t.flags |= 4),
              typeof a.getSnapshotBeforeUpdate != "function" ||
                (r === e.memoizedProps && g === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = l),
              (t.memoizedState = p)),
          (a.props = l),
          (a.state = p),
          (a.context = c),
          (l = v))
        : (typeof a.componentDidUpdate != "function" ||
            (r === e.memoizedProps && g === e.memoizedState) ||
            (t.flags |= 4),
          typeof a.getSnapshotBeforeUpdate != "function" ||
            (r === e.memoizedProps && g === e.memoizedState) ||
            (t.flags |= 1024),
          (l = !1));
    }
    return (
      (a = l),
      oa(e, t),
      (l = (t.flags & 128) !== 0),
      a || l
        ? ((a = t.stateNode),
          (n =
            l && typeof n.getDerivedStateFromError != "function"
              ? null
              : a.render()),
          (t.flags |= 1),
          e !== null && l
            ? ((t.child = ol(t, e.child, null, i)),
              (t.child = ol(t, null, n, i)))
            : De(e, t, n, i),
          (t.memoizedState = a.state),
          (e = t.child))
        : (e = Ut(e, t, i)),
      e
    );
  }
  function Tu(e, t, n, l) {
    return (Ul(), (t.flags |= 256), De(e, t, n, l), t.child);
  }
  var er = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function tr(e) {
    return { baseLanes: e, cachePool: fc() };
  }
  function nr(e, t, n) {
    return ((e = e !== null ? e.childLanes & ~n : 0), t && (e |= ut), e);
  }
  function zu(e, t, n) {
    var l = t.pendingProps,
      i = !1,
      a = (t.flags & 128) !== 0,
      r;
    if (
      ((r = a) ||
        (r =
          e !== null && e.memoizedState === null ? !1 : (je.current & 2) !== 0),
      r && ((i = !0), (t.flags &= -129)),
      (r = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (ee) {
        if ((i ? Ft(t) : $t(), ee)) {
          var s = me,
            c;
          if ((c = s)) {
            e: {
              for (c = s, s = vt; c.nodeType !== 8; ) {
                if (!s) {
                  s = null;
                  break e;
                }
                if (((c = gt(c.nextSibling)), c === null)) {
                  s = null;
                  break e;
                }
              }
              s = c;
            }
            s !== null
              ? ((t.memoizedState = {
                  dehydrated: s,
                  treeContext: Sn !== null ? { id: Et, overflow: Rt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (c = $e(18, null, null, 0)),
                (c.stateNode = s),
                (c.return = t),
                (t.child = c),
                (Ne = t),
                (me = null),
                (c = !0))
              : (c = !1);
          }
          c || zn(t);
        }
        if (
          ((s = t.memoizedState),
          s !== null && ((s = s.dehydrated), s !== null))
        )
          return (Yr(s) ? (t.lanes = 32) : (t.lanes = 536870912), null);
        _t(t);
      }
      return (
        (s = l.children),
        (l = l.fallback),
        i
          ? ($t(),
            (i = t.mode),
            (s = ra({ mode: "hidden", children: s }, i)),
            (l = jn(l, i, n, null)),
            (s.return = t),
            (l.return = t),
            (s.sibling = l),
            (t.child = s),
            (i = t.child),
            (i.memoizedState = tr(n)),
            (i.childLanes = nr(e, r, n)),
            (t.memoizedState = er),
            l)
          : (Ft(t), lr(t, s))
      );
    }
    if (
      ((c = e.memoizedState), c !== null && ((s = c.dehydrated), s !== null))
    ) {
      if (a)
        t.flags & 256
          ? (Ft(t), (t.flags &= -257), (t = ir(e, t, n)))
          : t.memoizedState !== null
            ? ($t(), (t.child = e.child), (t.flags |= 128), (t = null))
            : ($t(),
              (i = l.fallback),
              (s = t.mode),
              (l = ra({ mode: "visible", children: l.children }, s)),
              (i = jn(i, s, n, null)),
              (i.flags |= 2),
              (l.return = t),
              (i.return = t),
              (l.sibling = i),
              (t.child = l),
              ol(t, e.child, null, n),
              (l = t.child),
              (l.memoizedState = tr(n)),
              (l.childLanes = nr(e, r, n)),
              (t.memoizedState = er),
              (t = i));
      else if ((Ft(t), Yr(s))) {
        if (((r = s.nextSibling && s.nextSibling.dataset), r)) var m = r.dgst;
        ((r = m),
          (l = Error(y(419))),
          (l.stack = ""),
          (l.digest = r),
          Cl({ value: l, source: null, stack: null }),
          (t = ir(e, t, n)));
      } else if (
        (ze || Nl(e, t, n, !1), (r = (n & e.childLanes) !== 0), ze || r)
      ) {
        if (
          ((r = ce),
          r !== null &&
            ((l = n & -n),
            (l = (l & 42) !== 0 ? 1 : Ya(l)),
            (l = (l & (r.suspendedLanes | n)) !== 0 ? 0 : l),
            l !== 0 && l !== c.retryLane))
        )
          throw ((c.retryLane = l), Jn(e, l), nt(r, e, l), gu);
        (s.data === "$?" || Sr(), (t = ir(e, t, n)));
      } else
        s.data === "$?"
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = c.treeContext),
            (me = gt(s.nextSibling)),
            (Ne = t),
            (ee = !0),
            (Tn = null),
            (vt = !1),
            e !== null &&
              ((rt[st++] = Et),
              (rt[st++] = Rt),
              (rt[st++] = Sn),
              (Et = e.id),
              (Rt = e.overflow),
              (Sn = t)),
            (t = lr(t, l.children)),
            (t.flags |= 4096));
      return t;
    }
    return i
      ? ($t(),
        (i = l.fallback),
        (s = t.mode),
        (c = e.child),
        (m = c.sibling),
        (l = Dt(c, { mode: "hidden", children: l.children })),
        (l.subtreeFlags = c.subtreeFlags & 65011712),
        m !== null ? (i = Dt(m, i)) : ((i = jn(i, s, n, null)), (i.flags |= 2)),
        (i.return = t),
        (l.return = t),
        (l.sibling = i),
        (t.child = l),
        (l = i),
        (i = t.child),
        (s = e.child.memoizedState),
        s === null
          ? (s = tr(n))
          : ((c = s.cachePool),
            c !== null
              ? ((m = be._currentValue),
                (c = c.parent !== m ? { parent: m, pool: m } : c))
              : (c = fc()),
            (s = { baseLanes: s.baseLanes | n, cachePool: c })),
        (i.memoizedState = s),
        (i.childLanes = nr(e, r, n)),
        (t.memoizedState = er),
        l)
      : (Ft(t),
        (n = e.child),
        (e = n.sibling),
        (n = Dt(n, { mode: "visible", children: l.children })),
        (n.return = t),
        (n.sibling = null),
        e !== null &&
          ((r = t.deletions),
          r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
        (t.child = n),
        (t.memoizedState = null),
        n);
  }
  function lr(e, t) {
    return (
      (t = ra({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function ra(e, t) {
    return (
      (e = $e(22, e, null, t)),
      (e.lanes = 0),
      (e.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      e
    );
  }
  function ir(e, t, n) {
    return (
      ol(t, e.child, null, n),
      (e = lr(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Au(e, t, n) {
    e.lanes |= t;
    var l = e.alternate;
    (l !== null && (l.lanes |= t), So(e.return, t, n));
  }
  function ar(e, t, n, l, i) {
    var a = e.memoizedState;
    a === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: n,
          tailMode: i,
        })
      : ((a.isBackwards = t),
        (a.rendering = null),
        (a.renderingStartTime = 0),
        (a.last = l),
        (a.tail = n),
        (a.tailMode = i));
  }
  function Bu(e, t, n) {
    var l = t.pendingProps,
      i = l.revealOrder,
      a = l.tail;
    if ((De(e, t, l.children, n), (l = je.current), (l & 2) !== 0))
      ((l = (l & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Au(e, n, t);
          else if (e.tag === 19) Au(e, n, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      l &= 1;
    }
    switch ((E(je, l), i)) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          ((e = n.alternate),
            e !== null && la(e) === null && (i = n),
            (n = n.sibling));
        ((n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          ar(t, !1, i, n, a));
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && la(e) === null)) {
            t.child = i;
            break;
          }
          ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
        }
        ar(t, !0, n, null, a);
        break;
      case "together":
        ar(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Ut(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (nn |= t.lanes),
      (n & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((Nl(e, t, n, !1), (n & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(y(153));
    if (t.child !== null) {
      for (
        e = t.child, n = Dt(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (n = n.sibling = Dt(e, e.pendingProps)),
          (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function or(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && Xi(e)));
  }
  function Eh(e, t, n) {
    switch (t.tag) {
      case 3:
        (ue(t, t.stateNode.containerInfo),
          Vt(t, be, e.memoizedState.cache),
          Ul());
        break;
      case 27:
      case 5:
        _a(t);
        break;
      case 4:
        ue(t, t.stateNode.containerInfo);
        break;
      case 10:
        Vt(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (Ft(t), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? zu(e, t, n)
              : (Ft(t), (e = Ut(e, t, n)), e !== null ? e.sibling : null);
        Ft(t);
        break;
      case 19:
        var i = (e.flags & 128) !== 0;
        if (
          ((l = (n & t.childLanes) !== 0),
          l || (Nl(e, t, n, !1), (l = (n & t.childLanes) !== 0)),
          i)
        ) {
          if (l) return Bu(e, t, n);
          t.flags |= 128;
        }
        if (
          ((i = t.memoizedState),
          i !== null &&
            ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
          E(je, je.current),
          l)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), bu(e, t, n));
      case 24:
        Vt(t, be, e.memoizedState.cache);
    }
    return Ut(e, t, n);
  }
  function Du(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) ze = !0;
      else {
        if (!or(e, n) && (t.flags & 128) === 0) return ((ze = !1), Eh(e, t, n));
        ze = (e.flags & 131072) !== 0;
      }
    else ((ze = !1), ee && (t.flags & 1048576) !== 0 && ic(t, Gi, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          e = t.pendingProps;
          var l = t.elementType,
            i = l._init;
          if (((l = i(l._payload)), (t.type = l), typeof l == "function"))
            yo(l)
              ? ((e = Rn(l, e)), (t.tag = 1), (t = wu(null, t, l, e, n)))
              : ((t.tag = 0), (t = Po(null, t, l, e, n)));
          else {
            if (l != null) {
              if (((i = l.$$typeof), i === ht)) {
                ((t.tag = 11), (t = pu(null, t, l, e, n)));
                break e;
              } else if (i === Ve) {
                ((t.tag = 14), (t = xu(null, t, l, e, n)));
                break e;
              }
            }
            throw ((t = yn(l) || l), Error(y(306, t, "")));
          }
        }
        return t;
      case 0:
        return Po(e, t, t.type, t.pendingProps, n);
      case 1:
        return ((l = t.type), (i = Rn(l, t.pendingProps)), wu(e, t, l, i, n));
      case 3:
        e: {
          if ((ue(t, t.stateNode.containerInfo), e === null))
            throw Error(y(387));
          l = t.pendingProps;
          var a = t.memoizedState;
          ((i = a.element), Eo(e, t), Zl(t, l, null, n));
          var r = t.memoizedState;
          if (
            ((l = r.cache),
            Vt(t, be, l),
            l !== a.cache && wo(t, [be], n, !0),
            Ll(),
            (l = r.element),
            a.isDehydrated)
          )
            if (
              ((a = { element: l, isDehydrated: !1, cache: r.cache }),
              (t.updateQueue.baseState = a),
              (t.memoizedState = a),
              t.flags & 256)
            ) {
              t = Tu(e, t, l, n);
              break e;
            } else if (l !== i) {
              ((i = at(Error(y(424)), t)), Cl(i), (t = Tu(e, t, l, n)));
              break e;
            } else {
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (
                me = gt(e.firstChild),
                  Ne = t,
                  ee = !0,
                  Tn = null,
                  vt = !0,
                  n = ou(t, null, l, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
            }
          else {
            if ((Ul(), l === i)) {
              t = Ut(e, t, n);
              break e;
            }
            De(e, t, l, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          oa(e, t),
          e === null
            ? (n = Of(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = n)
              : ee ||
                ((n = t.type),
                (e = t.pendingProps),
                (l = ja(X.current).createElement(n)),
                (l[_e] = t),
                (l[Ye] = e),
                Re(l, n, e),
                Te(l),
                (t.stateNode = l))
            : (t.memoizedState = Of(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState,
              )),
          null
        );
      case 27:
        return (
          _a(t),
          e === null &&
            ee &&
            ((l = t.stateNode = Rf(t.type, t.pendingProps, X.current)),
            (Ne = t),
            (vt = !0),
            (i = me),
            rn(t.type) ? ((Gr = i), (me = gt(l.firstChild))) : (me = i)),
          De(e, t, t.pendingProps.children, n),
          oa(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            ee &&
            ((i = l = me) &&
              ((l = lm(l, t.type, t.pendingProps, vt)),
              l !== null
                ? ((t.stateNode = l),
                  (Ne = t),
                  (me = gt(l.firstChild)),
                  (vt = !1),
                  (i = !0))
                : (i = !1)),
            i || zn(t)),
          _a(t),
          (i = t.type),
          (a = t.pendingProps),
          (r = e !== null ? e.memoizedProps : null),
          (l = a.children),
          Cr(i, a) ? (l = null) : r !== null && Cr(i, r) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((i = Uo(e, t, jh, null, null, n)), (di._currentValue = i)),
          oa(e, t),
          De(e, t, l, n),
          t.child
        );
      case 6:
        return (
          e === null &&
            ee &&
            ((e = n = me) &&
              ((n = im(n, t.pendingProps, vt)),
              n !== null
                ? ((t.stateNode = n), (Ne = t), (me = null), (e = !0))
                : (e = !1)),
            e || zn(t)),
          null
        );
      case 13:
        return zu(e, t, n);
      case 4:
        return (
          ue(t, t.stateNode.containerInfo),
          (l = t.pendingProps),
          e === null ? (t.child = ol(t, null, l, n)) : De(e, t, l, n),
          t.child
        );
      case 11:
        return pu(e, t, t.type, t.pendingProps, n);
      case 7:
        return (De(e, t, t.pendingProps, n), t.child);
      case 8:
        return (De(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (De(e, t, t.pendingProps.children, n), t.child);
      case 10:
        return (
          (l = t.pendingProps),
          Vt(t, t.type, l.value),
          De(e, t, l.children, n),
          t.child
        );
      case 9:
        return (
          (i = t.type._context),
          (l = t.pendingProps.children),
          Bn(t),
          (i = Ue(i)),
          (l = l(i)),
          (t.flags |= 1),
          De(e, t, l, n),
          t.child
        );
      case 14:
        return xu(e, t, t.type, t.pendingProps, n);
      case 15:
        return vu(e, t, t.type, t.pendingProps, n);
      case 19:
        return Bu(e, t, n);
      case 31:
        return (
          (l = t.pendingProps),
          (n = t.mode),
          (l = { mode: l.mode, children: l.children }),
          e === null
            ? ((n = ra(l, n)),
              (n.ref = t.ref),
              (t.child = n),
              (n.return = t),
              (t = n))
            : ((n = Dt(e.child, l)),
              (n.ref = t.ref),
              (t.child = n),
              (n.return = t),
              (t = n)),
          t
        );
      case 22:
        return bu(e, t, n);
      case 24:
        return (
          Bn(t),
          (l = Ue(be)),
          e === null
            ? ((i = Ao()),
              i === null &&
                ((i = ce),
                (a = To()),
                (i.pooledCache = a),
                a.refCount++,
                a !== null && (i.pooledCacheLanes |= n),
                (i = a)),
              (t.memoizedState = { parent: l, cache: i }),
              Do(t),
              Vt(t, be, i))
            : ((e.lanes & n) !== 0 && (Eo(e, t), Zl(t, null, null, n), Ll()),
              (i = e.memoizedState),
              (a = t.memoizedState),
              i.parent !== l
                ? ((i = { parent: l, cache: l }),
                  (t.memoizedState = i),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = i),
                  Vt(t, be, l))
                : ((l = a.cache),
                  Vt(t, be, l),
                  l !== i.cache && wo(t, [be], n, !0))),
          De(e, t, t.pendingProps.children, n),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(y(156, t.tag));
  }
  function Ct(e) {
    e.flags |= 4;
  }
  function Eu(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !qf(t))) {
      if (
        ((t = ct.current),
        t !== null &&
          ((k & 4194048) === k
            ? bt !== null
            : ((k & 62914560) !== k && (k & 536870912) === 0) || t !== bt))
      )
        throw ((Xl = Bo), dc);
      e.flags |= 8192;
    }
  }
  function sa(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? rs() : 536870912), (e.lanes |= t), (ul |= t)));
  }
  function $l(e, t) {
    if (!ee)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            (t.alternate !== null && (n = t), (t = t.sibling));
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var l = null; n !== null; )
            (n.alternate !== null && (l = n), (n = n.sibling));
          l === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function de(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      l = 0;
    if (t)
      for (var i = e.child; i !== null; )
        ((n |= i.lanes | i.childLanes),
          (l |= i.subtreeFlags & 65011712),
          (l |= i.flags & 65011712),
          (i.return = e),
          (i = i.sibling));
    else
      for (i = e.child; i !== null; )
        ((n |= i.lanes | i.childLanes),
          (l |= i.subtreeFlags),
          (l |= i.flags),
          (i.return = e),
          (i = i.sibling));
    return ((e.subtreeFlags |= l), (e.childLanes = n), t);
  }
  function Rh(e, t, n) {
    var l = t.pendingProps;
    switch ((vo(t), t.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (de(t), null);
      case 1:
        return (de(t), null);
      case 3:
        return (
          (n = t.stateNode),
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          Ht(be),
          Xt(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (e === null || e.child === null) &&
            (_l(t)
              ? Ct(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), rc())),
          de(t),
          null
        );
      case 26:
        return (
          (n = t.memoizedState),
          e === null
            ? (Ct(t),
              n !== null ? (de(t), Eu(t, n)) : (de(t), (t.flags &= -16777217)))
            : n
              ? n !== e.memoizedState
                ? (Ct(t), de(t), Eu(t, n))
                : (de(t), (t.flags &= -16777217))
              : (e.memoizedProps !== l && Ct(t), de(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        (vi(t), (n = X.current));
        var i = t.type;
        if (e !== null && t.stateNode != null) e.memoizedProps !== l && Ct(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(y(166));
            return (de(t), null);
          }
          ((e = C.current),
            _l(t) ? ac(t) : ((e = Rf(i, l, n)), (t.stateNode = e), Ct(t)));
        }
        return (de(t), null);
      case 5:
        if ((vi(t), (n = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== l && Ct(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(y(166));
            return (de(t), null);
          }
          if (((e = C.current), _l(t))) ac(t);
          else {
            switch (((i = ja(X.current)), e)) {
              case 1:
                e = i.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                e = i.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    e = i.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    e = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n,
                    );
                    break;
                  case "script":
                    ((e = i.createElement("div")),
                      (e.innerHTML = "<script><\/script>"),
                      (e = e.removeChild(e.firstChild)));
                    break;
                  case "select":
                    ((e =
                      typeof l.is == "string"
                        ? i.createElement("select", { is: l.is })
                        : i.createElement("select")),
                      l.multiple
                        ? (e.multiple = !0)
                        : l.size && (e.size = l.size));
                    break;
                  default:
                    e =
                      typeof l.is == "string"
                        ? i.createElement(n, { is: l.is })
                        : i.createElement(n);
                }
            }
            ((e[_e] = t), (e[Ye] = l));
            e: for (i = t.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6) e.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                ((i.child.return = i), (i = i.child));
                continue;
              }
              if (i === t) break e;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === t) break e;
                i = i.return;
              }
              ((i.sibling.return = i.return), (i = i.sibling));
            }
            t.stateNode = e;
            e: switch ((Re(e, n, l), n)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!l.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && Ct(t);
          }
        }
        return (de(t), (t.flags &= -16777217), null);
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== l && Ct(t);
        else {
          if (typeof l != "string" && t.stateNode === null) throw Error(y(166));
          if (((e = X.current), _l(t))) {
            if (
              ((e = t.stateNode),
              (n = t.memoizedProps),
              (l = null),
              (i = Ne),
              i !== null)
            )
              switch (i.tag) {
                case 27:
                case 5:
                  l = i.memoizedProps;
              }
            ((e[_e] = t),
              (e = !!(
                e.nodeValue === n ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                wf(e.nodeValue, n)
              )),
              e || zn(t));
          } else
            ((e = ja(e).createTextNode(l)), (e[_e] = t), (t.stateNode = e));
        }
        return (de(t), null);
      case 13:
        if (
          ((l = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((i = _l(t)), l !== null && l.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(y(318));
              if (
                ((i = t.memoizedState),
                (i = i !== null ? i.dehydrated : null),
                !i)
              )
                throw Error(y(317));
              i[_e] = t;
            } else
              (Ul(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (de(t), (i = !1));
          } else
            ((i = rc()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = i),
              (i = !0));
          if (!i) return t.flags & 256 ? (_t(t), t) : (_t(t), null);
        }
        if ((_t(t), (t.flags & 128) !== 0)) return ((t.lanes = n), t);
        if (
          ((n = l !== null), (e = e !== null && e.memoizedState !== null), n)
        ) {
          ((l = t.child),
            (i = null),
            l.alternate !== null &&
              l.alternate.memoizedState !== null &&
              l.alternate.memoizedState.cachePool !== null &&
              (i = l.alternate.memoizedState.cachePool.pool));
          var a = null;
          (l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (a = l.memoizedState.cachePool.pool),
            a !== i && (l.flags |= 2048));
        }
        return (
          n !== e && n && (t.child.flags |= 8192),
          sa(t, t.updateQueue),
          de(t),
          null
        );
      case 4:
        return (Xt(), e === null && Mr(t.stateNode.containerInfo), de(t), null);
      case 10:
        return (Ht(t.type), de(t), null);
      case 19:
        if ((M(je), (i = t.memoizedState), i === null)) return (de(t), null);
        if (((l = (t.flags & 128) !== 0), (a = i.rendering), a === null))
          if (l) $l(i, !1);
          else {
            if (ye !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((a = la(e)), a !== null)) {
                  for (
                    t.flags |= 128,
                      $l(i, !1),
                      e = a.updateQueue,
                      t.updateQueue = e,
                      sa(t, e),
                      t.subtreeFlags = 0,
                      e = n,
                      n = t.child;
                    n !== null;
                  )
                    (lc(n, e), (n = n.sibling));
                  return (E(je, (je.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            i.tail !== null &&
              xt() > fa &&
              ((t.flags |= 128), (l = !0), $l(i, !1), (t.lanes = 4194304));
          }
        else {
          if (!l)
            if (((e = la(a)), e !== null)) {
              if (
                ((t.flags |= 128),
                (l = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                sa(t, e),
                $l(i, !0),
                i.tail === null &&
                  i.tailMode === "hidden" &&
                  !a.alternate &&
                  !ee)
              )
                return (de(t), null);
            } else
              2 * xt() - i.renderingStartTime > fa &&
                n !== 536870912 &&
                ((t.flags |= 128), (l = !0), $l(i, !1), (t.lanes = 4194304));
          i.isBackwards
            ? ((a.sibling = t.child), (t.child = a))
            : ((e = i.last),
              e !== null ? (e.sibling = a) : (t.child = a),
              (i.last = a));
        }
        return i.tail !== null
          ? ((t = i.tail),
            (i.rendering = t),
            (i.tail = t.sibling),
            (i.renderingStartTime = xt()),
            (t.sibling = null),
            (e = je.current),
            E(je, l ? (e & 1) | 2 : e & 1),
            t)
          : (de(t), null);
      case 22:
      case 23:
        return (
          _t(t),
          Oo(),
          (l = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== l && (t.flags |= 8192)
            : l && (t.flags |= 8192),
          l
            ? (n & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (de(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : de(t),
          (n = t.updateQueue),
          n !== null && sa(t, n.retryQueue),
          (n = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (n = e.memoizedState.cachePool.pool),
          (l = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
          l !== n && (t.flags |= 2048),
          e !== null && M(Dn),
          null
        );
      case 24:
        return (
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          Ht(be),
          de(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(y(156, t.tag));
  }
  function Mh(e, t) {
    switch ((vo(t), t.tag)) {
      case 1:
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Ht(be),
          Xt(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (vi(t), null);
      case 13:
        if (
          (_t(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(y(340));
          Ul();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (M(je), null);
      case 4:
        return (Xt(), null);
      case 10:
        return (Ht(t.type), null);
      case 22:
      case 23:
        return (
          _t(t),
          Oo(),
          e !== null && M(Dn),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (Ht(be), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Ru(e, t) {
    switch ((vo(t), t.tag)) {
      case 3:
        (Ht(be), Xt());
        break;
      case 26:
      case 27:
      case 5:
        vi(t);
        break;
      case 4:
        Xt();
        break;
      case 13:
        _t(t);
        break;
      case 19:
        M(je);
        break;
      case 10:
        Ht(t.type);
        break;
      case 22:
      case 23:
        (_t(t), Oo(), e !== null && M(Dn));
        break;
      case 24:
        Ht(be);
    }
  }
  function Il(e, t) {
    try {
      var n = t.updateQueue,
        l = n !== null ? n.lastEffect : null;
      if (l !== null) {
        var i = l.next;
        n = i;
        do {
          if ((n.tag & e) === e) {
            l = void 0;
            var a = n.create,
              r = n.inst;
            ((l = a()), (r.destroy = l));
          }
          n = n.next;
        } while (n !== i);
      }
    } catch (s) {
      se(t, t.return, s);
    }
  }
  function It(e, t, n) {
    try {
      var l = t.updateQueue,
        i = l !== null ? l.lastEffect : null;
      if (i !== null) {
        var a = i.next;
        l = a;
        do {
          if ((l.tag & e) === e) {
            var r = l.inst,
              s = r.destroy;
            if (s !== void 0) {
              ((r.destroy = void 0), (i = t));
              var c = n,
                m = s;
              try {
                m();
              } catch (v) {
                se(i, c, v);
              }
            }
          }
          l = l.next;
        } while (l !== a);
      }
    } catch (v) {
      se(t, t.return, v);
    }
  }
  function Mu(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        xc(t, n);
      } catch (l) {
        se(e, e.return, l);
      }
    }
  }
  function Hu(e, t, n) {
    ((n.props = Rn(e.type, e.memoizedProps)), (n.state = e.memoizedState));
    try {
      n.componentWillUnmount();
    } catch (l) {
      se(e, t, l);
    }
  }
  function Pl(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof n == "function" ? (e.refCleanup = n(l)) : (n.current = l);
      }
    } catch (i) {
      se(e, t, i);
    }
  }
  function jt(e, t) {
    var n = e.ref,
      l = e.refCleanup;
    if (n !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (i) {
          se(e, t, i);
        } finally {
          ((e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null));
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (i) {
          se(e, t, i);
        }
      else n.current = null;
  }
  function Ou(e) {
    var t = e.type,
      n = e.memoizedProps,
      l = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && l.focus();
          break e;
        case "img":
          n.src ? (l.src = n.src) : n.srcSet && (l.srcset = n.srcSet);
      }
    } catch (i) {
      se(e, e.return, i);
    }
  }
  function rr(e, t, n) {
    try {
      var l = e.stateNode;
      (Ih(l, e.type, n, t), (l[Ye] = t));
    } catch (i) {
      se(e, e.return, i);
    }
  }
  function _u(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && rn(e.type)) ||
      e.tag === 4
    );
  }
  function sr(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || _u(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (
          (e.tag === 27 && rn(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function cr(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      ((e = e.stateNode),
        t
          ? (n.nodeType === 9
              ? n.body
              : n.nodeName === "HTML"
                ? n.ownerDocument.body
                : n
            ).insertBefore(e, t)
          : ((t =
              n.nodeType === 9
                ? n.body
                : n.nodeName === "HTML"
                  ? n.ownerDocument.body
                  : n),
            t.appendChild(e),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = ba)));
    else if (
      l !== 4 &&
      (l === 27 && rn(e.type) && ((n = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (cr(e, t, n), e = e.sibling; e !== null; )
        (cr(e, t, n), (e = e.sibling));
  }
  function ca(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (
      l !== 4 &&
      (l === 27 && rn(e.type) && (n = e.stateNode), (e = e.child), e !== null)
    )
      for (ca(e, t, n), e = e.sibling; e !== null; )
        (ca(e, t, n), (e = e.sibling));
  }
  function Uu(e) {
    var t = e.stateNode,
      n = e.memoizedProps;
    try {
      for (var l = e.type, i = t.attributes; i.length; )
        t.removeAttributeNode(i[0]);
      (Re(t, l, n), (t[_e] = e), (t[Ye] = n));
    } catch (a) {
      se(e, e.return, a);
    }
  }
  var Nt = !1,
    pe = !1,
    ur = !1,
    Cu = typeof WeakSet == "function" ? WeakSet : Set,
    Ae = null;
  function Hh(e, t) {
    if (((e = e.containerInfo), (_r = Ba), (e = Ks(e)), ro(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var l = n.getSelection && n.getSelection();
          if (l && l.rangeCount !== 0) {
            n = l.anchorNode;
            var i = l.anchorOffset,
              a = l.focusNode;
            l = l.focusOffset;
            try {
              (n.nodeType, a.nodeType);
            } catch {
              n = null;
              break e;
            }
            var r = 0,
              s = -1,
              c = -1,
              m = 0,
              v = 0,
              w = e,
              g = null;
            t: for (;;) {
              for (
                var p;
                w !== n || (i !== 0 && w.nodeType !== 3) || (s = r + i),
                  w !== a || (l !== 0 && w.nodeType !== 3) || (c = r + l),
                  w.nodeType === 3 && (r += w.nodeValue.length),
                  (p = w.firstChild) !== null;
              )
                ((g = w), (w = p));
              for (;;) {
                if (w === e) break t;
                if (
                  (g === n && ++m === i && (s = r),
                  g === a && ++v === l && (c = r),
                  (p = w.nextSibling) !== null)
                )
                  break;
                ((w = g), (g = w.parentNode));
              }
              w = p;
            }
            n = s === -1 || c === -1 ? null : { start: s, end: c };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Ur = { focusedElem: e, selectionRange: n }, Ba = !1, Ae = t;
      Ae !== null;
    )
      if (
        ((t = Ae), (e = t.child), (t.subtreeFlags & 1024) !== 0 && e !== null)
      )
        ((e.return = t), (Ae = e));
      else
        for (; Ae !== null; ) {
          switch (((t = Ae), (a = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && a !== null) {
                ((e = void 0),
                  (n = t),
                  (i = a.memoizedProps),
                  (a = a.memoizedState),
                  (l = n.stateNode));
                try {
                  var G = Rn(n.type, i, n.elementType === n.type);
                  ((e = l.getSnapshotBeforeUpdate(G, a)),
                    (l.__reactInternalSnapshotBeforeUpdate = e));
                } catch (N) {
                  se(n, n.return, N);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)
                )
                  qr(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      qr(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(y(163));
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (Ae = e));
            break;
          }
          Ae = t.return;
        }
  }
  function Nu(e, t, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (Pt(e, n), l & 4 && Il(5, n));
        break;
      case 1:
        if ((Pt(e, n), l & 4))
          if (((e = n.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (r) {
              se(n, n.return, r);
            }
          else {
            var i = Rn(n.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (r) {
              se(n, n.return, r);
            }
          }
        (l & 64 && Mu(n), l & 512 && Pl(n, n.return));
        break;
      case 3:
        if ((Pt(e, n), l & 64 && ((e = n.updateQueue), e !== null))) {
          if (((t = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                t = n.child.stateNode;
                break;
              case 1:
                t = n.child.stateNode;
            }
          try {
            xc(e, t);
          } catch (r) {
            se(n, n.return, r);
          }
        }
        break;
      case 27:
        t === null && l & 4 && Uu(n);
      case 26:
      case 5:
        (Pt(e, n), t === null && l & 4 && Ou(n), l & 512 && Pl(n, n.return));
        break;
      case 12:
        Pt(e, n);
        break;
      case 13:
        (Pt(e, n),
          l & 4 && Gu(e, n),
          l & 64 &&
            ((e = n.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((n = Xh.bind(null, n)), am(e, n)))));
        break;
      case 22:
        if (((l = n.memoizedState !== null || Nt), !l)) {
          ((t = (t !== null && t.memoizedState !== null) || pe), (i = Nt));
          var a = pe;
          ((Nt = l),
            (pe = t) && !a ? en(e, n, (n.subtreeFlags & 8772) !== 0) : Pt(e, n),
            (Nt = i),
            (pe = a));
        }
        break;
      case 30:
        break;
      default:
        Pt(e, n);
    }
  }
  function qu(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), qu(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && Qa(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var fe = null,
    Qe = !1;
  function qt(e, t, n) {
    for (n = n.child; n !== null; ) (Yu(e, t, n), (n = n.sibling));
  }
  function Yu(e, t, n) {
    if (ke && typeof ke.onCommitFiberUnmount == "function")
      try {
        ke.onCommitFiberUnmount(bl, n);
      } catch {}
    switch (n.tag) {
      case 26:
        (pe || jt(n, t),
          qt(e, t, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
        break;
      case 27:
        pe || jt(n, t);
        var l = fe,
          i = Qe;
        (rn(n.type) && ((fe = n.stateNode), (Qe = !1)),
          qt(e, t, n),
          si(n.stateNode),
          (fe = l),
          (Qe = i));
        break;
      case 5:
        pe || jt(n, t);
      case 6:
        if (
          ((l = fe),
          (i = Qe),
          (fe = null),
          qt(e, t, n),
          (fe = l),
          (Qe = i),
          fe !== null)
        )
          if (Qe)
            try {
              (fe.nodeType === 9
                ? fe.body
                : fe.nodeName === "HTML"
                  ? fe.ownerDocument.body
                  : fe
              ).removeChild(n.stateNode);
            } catch (a) {
              se(n, t, a);
            }
          else
            try {
              fe.removeChild(n.stateNode);
            } catch (a) {
              se(n, t, a);
            }
        break;
      case 18:
        fe !== null &&
          (Qe
            ? ((e = fe),
              Df(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                    ? e.ownerDocument.body
                    : e,
                n.stateNode,
              ),
              gi(e))
            : Df(fe, n.stateNode));
        break;
      case 4:
        ((l = fe),
          (i = Qe),
          (fe = n.stateNode.containerInfo),
          (Qe = !0),
          qt(e, t, n),
          (fe = l),
          (Qe = i));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (pe || It(2, n, t), pe || It(4, n, t), qt(e, t, n));
        break;
      case 1:
        (pe ||
          (jt(n, t),
          (l = n.stateNode),
          typeof l.componentWillUnmount == "function" && Hu(n, t, l)),
          qt(e, t, n));
        break;
      case 21:
        qt(e, t, n);
        break;
      case 22:
        ((pe = (l = pe) || n.memoizedState !== null), qt(e, t, n), (pe = l));
        break;
      default:
        qt(e, t, n);
    }
  }
  function Gu(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        gi(e);
      } catch (n) {
        se(t, t.return, n);
      }
  }
  function Oh(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new Cu()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new Cu()),
          t
        );
      default:
        throw Error(y(435, e.tag));
    }
  }
  function fr(e, t) {
    var n = Oh(e);
    t.forEach(function (l) {
      var i = Qh.bind(null, e, l);
      n.has(l) || (n.add(l), l.then(i, i));
    });
  }
  function Ie(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var i = n[l],
          a = e,
          r = t,
          s = r;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 27:
              if (rn(s.type)) {
                ((fe = s.stateNode), (Qe = !1));
                break e;
              }
              break;
            case 5:
              ((fe = s.stateNode), (Qe = !1));
              break e;
            case 3:
            case 4:
              ((fe = s.stateNode.containerInfo), (Qe = !0));
              break e;
          }
          s = s.return;
        }
        if (fe === null) throw Error(y(160));
        (Yu(a, r, i),
          (fe = null),
          (Qe = !1),
          (a = i.alternate),
          a !== null && (a.return = null),
          (i.return = null));
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; ) (Xu(t, e), (t = t.sibling));
  }
  var yt = null;
  function Xu(e, t) {
    var n = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Ie(t, e),
          Pe(e),
          l & 4 && (It(3, e, e.return), Il(3, e), It(5, e, e.return)));
        break;
      case 1:
        (Ie(t, e),
          Pe(e),
          l & 512 && (pe || n === null || jt(n, n.return)),
          l & 64 &&
            Nt &&
            ((e = e.updateQueue),
            e !== null &&
              ((l = e.callbacks),
              l !== null &&
                ((n = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = n === null ? l : n.concat(l))))));
        break;
      case 26:
        var i = yt;
        if (
          (Ie(t, e),
          Pe(e),
          l & 512 && (pe || n === null || jt(n, n.return)),
          l & 4)
        ) {
          var a = n !== null ? n.memoizedState : null;
          if (((l = e.memoizedState), n === null))
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  ((l = e.type),
                    (n = e.memoizedProps),
                    (i = i.ownerDocument || i));
                  t: switch (l) {
                    case "title":
                      ((a = i.getElementsByTagName("title")[0]),
                        (!a ||
                          a[wl] ||
                          a[_e] ||
                          a.namespaceURI === "http://www.w3.org/2000/svg" ||
                          a.hasAttribute("itemprop")) &&
                          ((a = i.createElement(l)),
                          i.head.insertBefore(
                            a,
                            i.querySelector("head > title"),
                          )),
                        Re(a, l, n),
                        (a[_e] = e),
                        Te(a),
                        (l = a));
                      break e;
                    case "link":
                      var r = Cf("link", "href", i).get(l + (n.href || ""));
                      if (r) {
                        for (var s = 0; s < r.length; s++)
                          if (
                            ((a = r[s]),
                            a.getAttribute("href") ===
                              (n.href == null || n.href === ""
                                ? null
                                : n.href) &&
                              a.getAttribute("rel") ===
                                (n.rel == null ? null : n.rel) &&
                              a.getAttribute("title") ===
                                (n.title == null ? null : n.title) &&
                              a.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            r.splice(s, 1);
                            break t;
                          }
                      }
                      ((a = i.createElement(l)),
                        Re(a, l, n),
                        i.head.appendChild(a));
                      break;
                    case "meta":
                      if (
                        (r = Cf("meta", "content", i).get(
                          l + (n.content || ""),
                        ))
                      ) {
                        for (s = 0; s < r.length; s++)
                          if (
                            ((a = r[s]),
                            a.getAttribute("content") ===
                              (n.content == null ? null : "" + n.content) &&
                              a.getAttribute("name") ===
                                (n.name == null ? null : n.name) &&
                              a.getAttribute("property") ===
                                (n.property == null ? null : n.property) &&
                              a.getAttribute("http-equiv") ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              a.getAttribute("charset") ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            r.splice(s, 1);
                            break t;
                          }
                      }
                      ((a = i.createElement(l)),
                        Re(a, l, n),
                        i.head.appendChild(a));
                      break;
                    default:
                      throw Error(y(468, l));
                  }
                  ((a[_e] = e), Te(a), (l = a));
                }
                e.stateNode = l;
              } else Nf(i, e.type, e.stateNode);
            else e.stateNode = Uf(i, l, e.memoizedProps);
          else
            a !== l
              ? (a === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : a.count--,
                l === null
                  ? Nf(i, e.type, e.stateNode)
                  : Uf(i, l, e.memoizedProps))
              : l === null &&
                e.stateNode !== null &&
                rr(e, e.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        (Ie(t, e),
          Pe(e),
          l & 512 && (pe || n === null || jt(n, n.return)),
          n !== null && l & 4 && rr(e, e.memoizedProps, n.memoizedProps));
        break;
      case 5:
        if (
          (Ie(t, e),
          Pe(e),
          l & 512 && (pe || n === null || jt(n, n.return)),
          e.flags & 32)
        ) {
          i = e.stateNode;
          try {
            Qn(i, "");
          } catch (p) {
            se(e, e.return, p);
          }
        }
        (l & 4 &&
          e.stateNode != null &&
          ((i = e.memoizedProps), rr(e, i, n !== null ? n.memoizedProps : i)),
          l & 1024 && (ur = !0));
        break;
      case 6:
        if ((Ie(t, e), Pe(e), l & 4)) {
          if (e.stateNode === null) throw Error(y(162));
          ((l = e.memoizedProps), (n = e.stateNode));
          try {
            n.nodeValue = l;
          } catch (p) {
            se(e, e.return, p);
          }
        }
        break;
      case 3:
        if (
          ((Ta = null),
          (i = yt),
          (yt = Sa(t.containerInfo)),
          Ie(t, e),
          (yt = i),
          Pe(e),
          l & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            gi(t.containerInfo);
          } catch (p) {
            se(e, e.return, p);
          }
        ur && ((ur = !1), Qu(e));
        break;
      case 4:
        ((l = yt),
          (yt = Sa(e.stateNode.containerInfo)),
          Ie(t, e),
          Pe(e),
          (yt = l));
        break;
      case 12:
        (Ie(t, e), Pe(e));
        break;
      case 13:
        (Ie(t, e),
          Pe(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (pr = xt()),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), fr(e, l))));
        break;
      case 22:
        i = e.memoizedState !== null;
        var c = n !== null && n.memoizedState !== null,
          m = Nt,
          v = pe;
        if (
          ((Nt = m || i),
          (pe = v || c),
          Ie(t, e),
          (pe = v),
          (Nt = m),
          Pe(e),
          l & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = i ? t._visibility & -2 : t._visibility | 1,
              i && (n === null || c || Nt || pe || Mn(e)),
              n = null,
              t = e;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                c = n = t;
                try {
                  if (((a = c.stateNode), i))
                    ((r = a.style),
                      typeof r.setProperty == "function"
                        ? r.setProperty("display", "none", "important")
                        : (r.display = "none"));
                  else {
                    s = c.stateNode;
                    var w = c.memoizedProps.style,
                      g =
                        w != null && w.hasOwnProperty("display")
                          ? w.display
                          : null;
                    s.style.display =
                      g == null || typeof g == "boolean" ? "" : ("" + g).trim();
                  }
                } catch (p) {
                  se(c, c.return, p);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                c = t;
                try {
                  c.stateNode.nodeValue = i ? "" : c.memoizedProps;
                } catch (p) {
                  se(c, c.return, p);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              (n === t && (n = null), (t = t.return));
            }
            (n === t && (n = null),
              (t.sibling.return = t.return),
              (t = t.sibling));
          }
        l & 4 &&
          ((l = e.updateQueue),
          l !== null &&
            ((n = l.retryQueue),
            n !== null && ((l.retryQueue = null), fr(e, n))));
        break;
      case 19:
        (Ie(t, e),
          Pe(e),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), fr(e, l))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Ie(t, e), Pe(e));
    }
  }
  function Pe(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, l = e.return; l !== null; ) {
          if (_u(l)) {
            n = l;
            break;
          }
          l = l.return;
        }
        if (n == null) throw Error(y(160));
        switch (n.tag) {
          case 27:
            var i = n.stateNode,
              a = sr(e);
            ca(e, a, i);
            break;
          case 5:
            var r = n.stateNode;
            n.flags & 32 && (Qn(r, ""), (n.flags &= -33));
            var s = sr(e);
            ca(e, s, r);
            break;
          case 3:
          case 4:
            var c = n.stateNode.containerInfo,
              m = sr(e);
            cr(e, m, c);
            break;
          default:
            throw Error(y(161));
        }
      } catch (v) {
        se(e, e.return, v);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Qu(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        (Qu(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling));
      }
  }
  function Pt(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (Nu(e, t.alternate, t), (t = t.sibling));
  }
  function Mn(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (It(4, t, t.return), Mn(t));
          break;
        case 1:
          jt(t, t.return);
          var n = t.stateNode;
          (typeof n.componentWillUnmount == "function" && Hu(t, t.return, n),
            Mn(t));
          break;
        case 27:
          si(t.stateNode);
        case 26:
        case 5:
          (jt(t, t.return), Mn(t));
          break;
        case 22:
          t.memoizedState === null && Mn(t);
          break;
        case 30:
          Mn(t);
          break;
        default:
          Mn(t);
      }
      e = e.sibling;
    }
  }
  function en(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate,
        i = e,
        a = t,
        r = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          (en(i, a, n), Il(4, a));
          break;
        case 1:
          if (
            (en(i, a, n),
            (l = a),
            (i = l.stateNode),
            typeof i.componentDidMount == "function")
          )
            try {
              i.componentDidMount();
            } catch (m) {
              se(l, l.return, m);
            }
          if (((l = a), (i = l.updateQueue), i !== null)) {
            var s = l.stateNode;
            try {
              var c = i.shared.hiddenCallbacks;
              if (c !== null)
                for (i.shared.hiddenCallbacks = null, i = 0; i < c.length; i++)
                  pc(c[i], s);
            } catch (m) {
              se(l, l.return, m);
            }
          }
          (n && r & 64 && Mu(a), Pl(a, a.return));
          break;
        case 27:
          Uu(a);
        case 26:
        case 5:
          (en(i, a, n), n && l === null && r & 4 && Ou(a), Pl(a, a.return));
          break;
        case 12:
          en(i, a, n);
          break;
        case 13:
          (en(i, a, n), n && r & 4 && Gu(i, a));
          break;
        case 22:
          (a.memoizedState === null && en(i, a, n), Pl(a, a.return));
          break;
        case 30:
          break;
        default:
          en(i, a, n);
      }
      t = t.sibling;
    }
  }
  function dr(e, t) {
    var n = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (n = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== n && (e != null && e.refCount++, n != null && ql(n)));
  }
  function hr(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && ql(e)));
  }
  function St(e, t, n, l) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (Lu(e, t, n, l), (t = t.sibling));
  }
  function Lu(e, t, n, l) {
    var i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (St(e, t, n, l), i & 2048 && Il(9, t));
        break;
      case 1:
        St(e, t, n, l);
        break;
      case 3:
        (St(e, t, n, l),
          i & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && ql(e))));
        break;
      case 12:
        if (i & 2048) {
          (St(e, t, n, l), (e = t.stateNode));
          try {
            var a = t.memoizedProps,
              r = a.id,
              s = a.onPostCommit;
            typeof s == "function" &&
              s(
                r,
                t.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0,
              );
          } catch (c) {
            se(t, t.return, c);
          }
        } else St(e, t, n, l);
        break;
      case 13:
        St(e, t, n, l);
        break;
      case 23:
        break;
      case 22:
        ((a = t.stateNode),
          (r = t.alternate),
          t.memoizedState !== null
            ? a._visibility & 2
              ? St(e, t, n, l)
              : ei(e, t)
            : a._visibility & 2
              ? St(e, t, n, l)
              : ((a._visibility |= 2),
                rl(e, t, n, l, (t.subtreeFlags & 10256) !== 0)),
          i & 2048 && dr(r, t));
        break;
      case 24:
        (St(e, t, n, l), i & 2048 && hr(t.alternate, t));
        break;
      default:
        St(e, t, n, l);
    }
  }
  function rl(e, t, n, l, i) {
    for (i = i && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var a = e,
        r = t,
        s = n,
        c = l,
        m = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          (rl(a, r, s, c, i), Il(8, r));
          break;
        case 23:
          break;
        case 22:
          var v = r.stateNode;
          (r.memoizedState !== null
            ? v._visibility & 2
              ? rl(a, r, s, c, i)
              : ei(a, r)
            : ((v._visibility |= 2), rl(a, r, s, c, i)),
            i && m & 2048 && dr(r.alternate, r));
          break;
        case 24:
          (rl(a, r, s, c, i), i && m & 2048 && hr(r.alternate, r));
          break;
        default:
          rl(a, r, s, c, i);
      }
      t = t.sibling;
    }
  }
  function ei(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e,
          l = t,
          i = l.flags;
        switch (l.tag) {
          case 22:
            (ei(n, l), i & 2048 && dr(l.alternate, l));
            break;
          case 24:
            (ei(n, l), i & 2048 && hr(l.alternate, l));
            break;
          default:
            ei(n, l);
        }
        t = t.sibling;
      }
  }
  var ti = 8192;
  function sl(e) {
    if (e.subtreeFlags & ti)
      for (e = e.child; e !== null; ) (Zu(e), (e = e.sibling));
  }
  function Zu(e) {
    switch (e.tag) {
      case 26:
        (sl(e),
          e.flags & ti &&
            e.memoizedState !== null &&
            xm(yt, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        sl(e);
        break;
      case 3:
      case 4:
        var t = yt;
        ((yt = Sa(e.stateNode.containerInfo)), sl(e), (yt = t));
        break;
      case 22:
        e.memoizedState === null &&
          ((t = e.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = ti), (ti = 16777216), sl(e), (ti = t))
            : sl(e));
        break;
      default:
        sl(e);
    }
  }
  function Vu(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }
  function ni(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          ((Ae = l), Ku(l, e));
        }
      Vu(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (Wu(e), (e = e.sibling));
  }
  function Wu(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (ni(e), e.flags & 2048 && It(9, e, e.return));
        break;
      case 3:
        ni(e);
        break;
      case 12:
        ni(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), ua(e))
          : ni(e);
        break;
      default:
        ni(e);
    }
  }
  function ua(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          ((Ae = l), Ku(l, e));
        }
      Vu(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (It(8, t, t.return), ua(t));
          break;
        case 22:
          ((n = t.stateNode),
            n._visibility & 2 && ((n._visibility &= -3), ua(t)));
          break;
        default:
          ua(t);
      }
      e = e.sibling;
    }
  }
  function Ku(e, t) {
    for (; Ae !== null; ) {
      var n = Ae;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          It(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          ql(n.memoizedState.cache);
      }
      if (((l = n.child), l !== null)) ((l.return = n), (Ae = l));
      else
        e: for (n = e; Ae !== null; ) {
          l = Ae;
          var i = l.sibling,
            a = l.return;
          if ((qu(l), l === n)) {
            Ae = null;
            break e;
          }
          if (i !== null) {
            ((i.return = a), (Ae = i));
            break e;
          }
          Ae = a;
        }
    }
  }
  var _h = {
      getCacheForType: function (e) {
        var t = Ue(be),
          n = t.data.get(e);
        return (n === void 0 && ((n = e()), t.data.set(e, n)), n);
      },
    },
    Uh = typeof WeakMap == "function" ? WeakMap : Map,
    ne = 0,
    ce = null,
    W = null,
    k = 0,
    le = 0,
    et = null,
    tn = !1,
    cl = !1,
    mr = !1,
    Yt = 0,
    ye = 0,
    nn = 0,
    Hn = 0,
    yr = 0,
    ut = 0,
    ul = 0,
    li = null,
    Le = null,
    gr = !1,
    pr = 0,
    fa = 1 / 0,
    da = null,
    ln = null,
    Ee = 0,
    an = null,
    fl = null,
    dl = 0,
    xr = 0,
    vr = null,
    ku = null,
    ii = 0,
    br = null;
  function tt() {
    if ((ne & 2) !== 0 && k !== 0) return k & -k;
    if (b.T !== null) {
      var e = Pn;
      return e !== 0 ? e : Br();
    }
    return us();
  }
  function Ju() {
    ut === 0 && (ut = (k & 536870912) === 0 || ee ? os() : 536870912);
    var e = ct.current;
    return (e !== null && (e.flags |= 32), ut);
  }
  function nt(e, t, n) {
    (((e === ce && (le === 2 || le === 9)) || e.cancelPendingCommit !== null) &&
      (hl(e, 0), on(e, k, ut, !1)),
      Sl(e, n),
      ((ne & 2) === 0 || e !== ce) &&
        (e === ce &&
          ((ne & 2) === 0 && (Hn |= n), ye === 4 && on(e, k, ut, !1)),
        wt(e)));
  }
  function Fu(e, t, n) {
    if ((ne & 6) !== 0) throw Error(y(327));
    var l = (!n && (t & 124) === 0 && (t & e.expiredLanes) === 0) || jl(e, t),
      i = l ? qh(e, t) : wr(e, t, !0),
      a = l;
    do {
      if (i === 0) {
        cl && !l && on(e, t, 0, !1);
        break;
      } else {
        if (((n = e.current.alternate), a && !Ch(n))) {
          ((i = wr(e, t, !1)), (a = !1));
          continue;
        }
        if (i === 2) {
          if (((a = t), e.errorRecoveryDisabledLanes & a)) var r = 0;
          else
            ((r = e.pendingLanes & -536870913),
              (r = r !== 0 ? r : r & 536870912 ? 536870912 : 0));
          if (r !== 0) {
            t = r;
            e: {
              var s = e;
              i = li;
              var c = s.current.memoizedState.isDehydrated;
              if ((c && (hl(s, r).flags |= 256), (r = wr(s, r, !1)), r !== 2)) {
                if (mr && !c) {
                  ((s.errorRecoveryDisabledLanes |= a), (Hn |= a), (i = 4));
                  break e;
                }
                ((a = Le),
                  (Le = i),
                  a !== null &&
                    (Le === null ? (Le = a) : Le.push.apply(Le, a)));
              }
              i = r;
            }
            if (((a = !1), i !== 2)) continue;
          }
        }
        if (i === 1) {
          (hl(e, 0), on(e, t, 0, !0));
          break;
        }
        e: {
          switch (((l = e), (a = i), a)) {
            case 0:
            case 1:
              throw Error(y(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              on(l, t, ut, !tn);
              break e;
            case 2:
              Le = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(y(329));
          }
          if ((t & 62914560) === t && ((i = pr + 300 - xt()), 10 < i)) {
            if ((on(l, t, ut, !tn), wi(l, 0, !0) !== 0)) break e;
            l.timeoutHandle = Af(
              $u.bind(null, l, n, Le, da, gr, t, ut, Hn, ul, tn, a, 2, -0, 0),
              i,
            );
            break e;
          }
          $u(l, n, Le, da, gr, t, ut, Hn, ul, tn, a, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    wt(e);
  }
  function $u(e, t, n, l, i, a, r, s, c, m, v, w, g, p) {
    if (
      ((e.timeoutHandle = -1),
      (w = t.subtreeFlags),
      (w & 8192 || (w & 16785408) === 16785408) &&
        ((fi = { stylesheets: null, count: 0, unsuspend: pm }),
        Zu(t),
        (w = vm()),
        w !== null))
    ) {
      ((e.cancelPendingCommit = w(
        af.bind(null, e, t, a, n, l, i, r, s, c, v, 1, g, p),
      )),
        on(e, a, r, !m));
      return;
    }
    af(e, t, a, n, l, i, r, s, c);
  }
  function Ch(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        t.flags & 16384 &&
        ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var l = 0; l < n.length; l++) {
          var i = n[l],
            a = i.getSnapshot;
          i = i.value;
          try {
            if (!Fe(a(), i)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        ((n.return = t), (t = n));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function on(e, t, n, l) {
    ((t &= ~yr),
      (t &= ~Hn),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      l && (e.warmLanes |= t),
      (l = e.expirationTimes));
    for (var i = t; 0 < i; ) {
      var a = 31 - Je(i),
        r = 1 << a;
      ((l[a] = -1), (i &= ~r));
    }
    n !== 0 && ss(e, n, t);
  }
  function ha() {
    return (ne & 6) === 0 ? (ai(0), !1) : !0;
  }
  function jr() {
    if (W !== null) {
      if (le === 0) var e = W.return;
      else ((e = W), (Mt = An = null), qo(e), (al = null), (Jl = 0), (e = W));
      for (; e !== null; ) (Ru(e.alternate, e), (e = e.return));
      W = null;
    }
  }
  function hl(e, t) {
    var n = e.timeoutHandle;
    (n !== -1 && ((e.timeoutHandle = -1), em(n)),
      (n = e.cancelPendingCommit),
      n !== null && ((e.cancelPendingCommit = null), n()),
      jr(),
      (ce = e),
      (W = n = Dt(e.current, null)),
      (k = t),
      (le = 0),
      (et = null),
      (tn = !1),
      (cl = jl(e, t)),
      (mr = !1),
      (ul = ut = yr = Hn = nn = ye = 0),
      (Le = li = null),
      (gr = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var i = 31 - Je(l),
          a = 1 << i;
        ((t |= e[i]), (l &= ~a));
      }
    return ((Yt = t), Ui(), n);
  }
  function Iu(e, t) {
    ((Z = null),
      (b.H = ea),
      t === Gl || t === Zi
        ? ((t = yc()), (le = 3))
        : t === dc
          ? ((t = yc()), (le = 4))
          : (le =
              t === gu
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (et = t),
      W === null && ((ye = 1), aa(e, at(t, e.current))));
  }
  function Pu() {
    var e = b.H;
    return ((b.H = ea), e === null ? ea : e);
  }
  function ef() {
    var e = b.A;
    return ((b.A = _h), e);
  }
  function Sr() {
    ((ye = 4),
      tn || ((k & 4194048) !== k && ct.current !== null) || (cl = !0),
      ((nn & 134217727) === 0 && (Hn & 134217727) === 0) ||
        ce === null ||
        on(ce, k, ut, !1));
  }
  function wr(e, t, n) {
    var l = ne;
    ne |= 2;
    var i = Pu(),
      a = ef();
    ((ce !== e || k !== t) && ((da = null), hl(e, t)), (t = !1));
    var r = ye;
    e: do
      try {
        if (le !== 0 && W !== null) {
          var s = W,
            c = et;
          switch (le) {
            case 8:
              (jr(), (r = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              ct.current === null && (t = !0);
              var m = le;
              if (((le = 0), (et = null), ml(e, s, c, m), n && cl)) {
                r = 0;
                break e;
              }
              break;
            default:
              ((m = le), (le = 0), (et = null), ml(e, s, c, m));
          }
        }
        (Nh(), (r = ye));
        break;
      } catch (v) {
        Iu(e, v);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (Mt = An = null),
      (ne = l),
      (b.H = i),
      (b.A = a),
      W === null && ((ce = null), (k = 0), Ui()),
      r
    );
  }
  function Nh() {
    for (; W !== null; ) tf(W);
  }
  function qh(e, t) {
    var n = ne;
    ne |= 2;
    var l = Pu(),
      i = ef();
    ce !== e || k !== t
      ? ((da = null), (fa = xt() + 500), hl(e, t))
      : (cl = jl(e, t));
    e: do
      try {
        if (le !== 0 && W !== null) {
          t = W;
          var a = et;
          t: switch (le) {
            case 1:
              ((le = 0), (et = null), ml(e, t, a, 1));
              break;
            case 2:
            case 9:
              if (hc(a)) {
                ((le = 0), (et = null), nf(t));
                break;
              }
              ((t = function () {
                ((le !== 2 && le !== 9) || ce !== e || (le = 7), wt(e));
              }),
                a.then(t, t));
              break e;
            case 3:
              le = 7;
              break e;
            case 4:
              le = 5;
              break e;
            case 7:
              hc(a)
                ? ((le = 0), (et = null), nf(t))
                : ((le = 0), (et = null), ml(e, t, a, 7));
              break;
            case 5:
              var r = null;
              switch (W.tag) {
                case 26:
                  r = W.memoizedState;
                case 5:
                case 27:
                  var s = W;
                  if (!r || qf(r)) {
                    ((le = 0), (et = null));
                    var c = s.sibling;
                    if (c !== null) W = c;
                    else {
                      var m = s.return;
                      m !== null ? ((W = m), ma(m)) : (W = null);
                    }
                    break t;
                  }
              }
              ((le = 0), (et = null), ml(e, t, a, 5));
              break;
            case 6:
              ((le = 0), (et = null), ml(e, t, a, 6));
              break;
            case 8:
              (jr(), (ye = 6));
              break e;
            default:
              throw Error(y(462));
          }
        }
        Yh();
        break;
      } catch (v) {
        Iu(e, v);
      }
    while (!0);
    return (
      (Mt = An = null),
      (b.H = l),
      (b.A = i),
      (ne = n),
      W !== null ? 0 : ((ce = null), (k = 0), Ui(), ye)
    );
  }
  function Yh() {
    for (; W !== null && !rd(); ) tf(W);
  }
  function tf(e) {
    var t = Du(e.alternate, e, Yt);
    ((e.memoizedProps = e.pendingProps), t === null ? ma(e) : (W = t));
  }
  function nf(e) {
    var t = e,
      n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Su(n, t, t.pendingProps, t.type, void 0, k);
        break;
      case 11:
        t = Su(n, t, t.pendingProps, t.type.render, t.ref, k);
        break;
      case 5:
        qo(t);
      default:
        (Ru(n, t), (t = W = lc(t, Yt)), (t = Du(n, t, Yt)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? ma(e) : (W = t));
  }
  function ml(e, t, n, l) {
    ((Mt = An = null), qo(t), (al = null), (Jl = 0));
    var i = t.return;
    try {
      if (Dh(e, i, t, n, k)) {
        ((ye = 1), aa(e, at(n, e.current)), (W = null));
        return;
      }
    } catch (a) {
      if (i !== null) throw ((W = i), a);
      ((ye = 1), aa(e, at(n, e.current)), (W = null));
      return;
    }
    t.flags & 32768
      ? (ee || l === 1
          ? (e = !0)
          : cl || (k & 536870912) !== 0
            ? (e = !1)
            : ((tn = e = !0),
              (l === 2 || l === 9 || l === 3 || l === 6) &&
                ((l = ct.current),
                l !== null && l.tag === 13 && (l.flags |= 16384))),
        lf(t, e))
      : ma(t);
  }
  function ma(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        lf(t, tn);
        return;
      }
      e = t.return;
      var n = Rh(t.alternate, t, Yt);
      if (n !== null) {
        W = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        W = t;
        return;
      }
      W = t = e;
    } while (t !== null);
    ye === 0 && (ye = 5);
  }
  function lf(e, t) {
    do {
      var n = Mh(e.alternate, e);
      if (n !== null) {
        ((n.flags &= 32767), (W = n));
        return;
      }
      if (
        ((n = e.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        W = e;
        return;
      }
      W = e = n;
    } while (e !== null);
    ((ye = 6), (W = null));
  }
  function af(e, t, n, l, i, a, r, s, c) {
    e.cancelPendingCommit = null;
    do ya();
    while (Ee !== 0);
    if ((ne & 6) !== 0) throw Error(y(327));
    if (t !== null) {
      if (t === e.current) throw Error(y(177));
      if (
        ((a = t.lanes | t.childLanes),
        (a |= ho),
        pd(e, n, a, r, s, c),
        e === ce && ((W = ce = null), (k = 0)),
        (fl = t),
        (an = e),
        (dl = n),
        (xr = a),
        (vr = i),
        (ku = l),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            Lh(bi, function () {
              return (uf(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (l = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || l)
      ) {
        ((l = b.T), (b.T = null), (i = R.p), (R.p = 2), (r = ne), (ne |= 4));
        try {
          Hh(e, t, n);
        } finally {
          ((ne = r), (R.p = i), (b.T = l));
        }
      }
      ((Ee = 1), of(), rf(), sf());
    }
  }
  function of() {
    if (Ee === 1) {
      Ee = 0;
      var e = an,
        t = fl,
        n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        ((n = b.T), (b.T = null));
        var l = R.p;
        R.p = 2;
        var i = ne;
        ne |= 4;
        try {
          Xu(t, e);
          var a = Ur,
            r = Ks(e.containerInfo),
            s = a.focusedElem,
            c = a.selectionRange;
          if (
            r !== s &&
            s &&
            s.ownerDocument &&
            Ws(s.ownerDocument.documentElement, s)
          ) {
            if (c !== null && ro(s)) {
              var m = c.start,
                v = c.end;
              if ((v === void 0 && (v = m), "selectionStart" in s))
                ((s.selectionStart = m),
                  (s.selectionEnd = Math.min(v, s.value.length)));
              else {
                var w = s.ownerDocument || document,
                  g = (w && w.defaultView) || window;
                if (g.getSelection) {
                  var p = g.getSelection(),
                    G = s.textContent.length,
                    N = Math.min(c.start, G),
                    oe = c.end === void 0 ? N : Math.min(c.end, G);
                  !p.extend && N > oe && ((r = oe), (oe = N), (N = r));
                  var d = Vs(s, N),
                    f = Vs(s, oe);
                  if (
                    d &&
                    f &&
                    (p.rangeCount !== 1 ||
                      p.anchorNode !== d.node ||
                      p.anchorOffset !== d.offset ||
                      p.focusNode !== f.node ||
                      p.focusOffset !== f.offset)
                  ) {
                    var h = w.createRange();
                    (h.setStart(d.node, d.offset),
                      p.removeAllRanges(),
                      N > oe
                        ? (p.addRange(h), p.extend(f.node, f.offset))
                        : (h.setEnd(f.node, f.offset), p.addRange(h)));
                  }
                }
              }
            }
            for (w = [], p = s; (p = p.parentNode); )
              p.nodeType === 1 &&
                w.push({ element: p, left: p.scrollLeft, top: p.scrollTop });
            for (
              typeof s.focus == "function" && s.focus(), s = 0;
              s < w.length;
              s++
            ) {
              var S = w[s];
              ((S.element.scrollLeft = S.left), (S.element.scrollTop = S.top));
            }
          }
          ((Ba = !!_r), (Ur = _r = null));
        } finally {
          ((ne = i), (R.p = l), (b.T = n));
        }
      }
      ((e.current = t), (Ee = 2));
    }
  }
  function rf() {
    if (Ee === 2) {
      Ee = 0;
      var e = an,
        t = fl,
        n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        ((n = b.T), (b.T = null));
        var l = R.p;
        R.p = 2;
        var i = ne;
        ne |= 4;
        try {
          Nu(e, t.alternate, t);
        } finally {
          ((ne = i), (R.p = l), (b.T = n));
        }
      }
      Ee = 3;
    }
  }
  function sf() {
    if (Ee === 4 || Ee === 3) {
      ((Ee = 0), sd());
      var e = an,
        t = fl,
        n = dl,
        l = ku;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Ee = 5)
        : ((Ee = 0), (fl = an = null), cf(e, e.pendingLanes));
      var i = e.pendingLanes;
      if (
        (i === 0 && (ln = null),
        Ga(n),
        (t = t.stateNode),
        ke && typeof ke.onCommitFiberRoot == "function")
      )
        try {
          ke.onCommitFiberRoot(bl, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (l !== null) {
        ((t = b.T), (i = R.p), (R.p = 2), (b.T = null));
        try {
          for (var a = e.onRecoverableError, r = 0; r < l.length; r++) {
            var s = l[r];
            a(s.value, { componentStack: s.stack });
          }
        } finally {
          ((b.T = t), (R.p = i));
        }
      }
      ((dl & 3) !== 0 && ya(),
        wt(e),
        (i = e.pendingLanes),
        (n & 4194090) !== 0 && (i & 42) !== 0
          ? e === br
            ? ii++
            : ((ii = 0), (br = e))
          : (ii = 0),
        ai(0));
    }
  }
  function cf(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), ql(t)));
  }
  function ya(e) {
    return (of(), rf(), sf(), uf());
  }
  function uf() {
    if (Ee !== 5) return !1;
    var e = an,
      t = xr;
    xr = 0;
    var n = Ga(dl),
      l = b.T,
      i = R.p;
    try {
      ((R.p = 32 > n ? 32 : n), (b.T = null), (n = vr), (vr = null));
      var a = an,
        r = dl;
      if (((Ee = 0), (fl = an = null), (dl = 0), (ne & 6) !== 0))
        throw Error(y(331));
      var s = ne;
      if (
        ((ne |= 4),
        Wu(a.current),
        Lu(a, a.current, r, n),
        (ne = s),
        ai(0, !1),
        ke && typeof ke.onPostCommitFiberRoot == "function")
      )
        try {
          ke.onPostCommitFiberRoot(bl, a);
        } catch {}
      return !0;
    } finally {
      ((R.p = i), (b.T = l), cf(e, t));
    }
  }
  function ff(e, t, n) {
    ((t = at(n, t)),
      (t = Io(e.stateNode, t, 2)),
      (e = kt(e, t, 2)),
      e !== null && (Sl(e, 2), wt(e)));
  }
  function se(e, t, n) {
    if (e.tag === 3) ff(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          ff(t, e, n);
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" &&
              (ln === null || !ln.has(l)))
          ) {
            ((e = at(n, e)),
              (n = mu(2)),
              (l = kt(t, n, 2)),
              l !== null && (yu(n, l, t, e), Sl(l, 2), wt(l)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Tr(e, t, n) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new Uh();
      var i = new Set();
      l.set(t, i);
    } else ((i = l.get(t)), i === void 0 && ((i = new Set()), l.set(t, i)));
    i.has(n) ||
      ((mr = !0), i.add(n), (e = Gh.bind(null, e, t, n)), t.then(e, e));
  }
  function Gh(e, t, n) {
    var l = e.pingCache;
    (l !== null && l.delete(t),
      (e.pingedLanes |= e.suspendedLanes & n),
      (e.warmLanes &= ~n),
      ce === e &&
        (k & n) === n &&
        (ye === 4 || (ye === 3 && (k & 62914560) === k && 300 > xt() - pr)
          ? (ne & 2) === 0 && hl(e, 0)
          : (yr |= n),
        ul === k && (ul = 0)),
      wt(e));
  }
  function df(e, t) {
    (t === 0 && (t = rs()), (e = Jn(e, t)), e !== null && (Sl(e, t), wt(e)));
  }
  function Xh(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), df(e, n));
  }
  function Qh(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var l = e.stateNode,
          i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(y(314));
    }
    (l !== null && l.delete(t), df(e, n));
  }
  function Lh(e, t) {
    return Ca(e, t);
  }
  var ga = null,
    yl = null,
    zr = !1,
    pa = !1,
    Ar = !1,
    On = 0;
  function wt(e) {
    (e !== yl &&
      e.next === null &&
      (yl === null ? (ga = yl = e) : (yl = yl.next = e)),
      (pa = !0),
      zr || ((zr = !0), Vh()));
  }
  function ai(e, t) {
    if (!Ar && pa) {
      Ar = !0;
      do
        for (var n = !1, l = ga; l !== null; ) {
          if (e !== 0) {
            var i = l.pendingLanes;
            if (i === 0) var a = 0;
            else {
              var r = l.suspendedLanes,
                s = l.pingedLanes;
              ((a = (1 << (31 - Je(42 | e) + 1)) - 1),
                (a &= i & ~(r & ~s)),
                (a = a & 201326741 ? (a & 201326741) | 1 : a ? a | 2 : 0));
            }
            a !== 0 && ((n = !0), gf(l, a));
          } else
            ((a = k),
              (a = wi(
                l,
                l === ce ? a : 0,
                l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
              )),
              (a & 3) === 0 || jl(l, a) || ((n = !0), gf(l, a)));
          l = l.next;
        }
      while (n);
      Ar = !1;
    }
  }
  function Zh() {
    hf();
  }
  function hf() {
    pa = zr = !1;
    var e = 0;
    On !== 0 && (Ph() && (e = On), (On = 0));
    for (var t = xt(), n = null, l = ga; l !== null; ) {
      var i = l.next,
        a = mf(l, t);
      (a === 0
        ? ((l.next = null),
          n === null ? (ga = i) : (n.next = i),
          i === null && (yl = n))
        : ((n = l), (e !== 0 || (a & 3) !== 0) && (pa = !0)),
        (l = i));
    }
    ai(e);
  }
  function mf(e, t) {
    for (
      var n = e.suspendedLanes,
        l = e.pingedLanes,
        i = e.expirationTimes,
        a = e.pendingLanes & -62914561;
      0 < a;
    ) {
      var r = 31 - Je(a),
        s = 1 << r,
        c = i[r];
      (c === -1
        ? ((s & n) === 0 || (s & l) !== 0) && (i[r] = gd(s, t))
        : c <= t && (e.expiredLanes |= s),
        (a &= ~s));
    }
    if (
      ((t = ce),
      (n = k),
      (n = wi(
        e,
        e === t ? n : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      (l = e.callbackNode),
      n === 0 ||
        (e === t && (le === 2 || le === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        l !== null && l !== null && Na(l),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((n & 3) === 0 || jl(e, n)) {
      if (((t = n & -n), t === e.callbackPriority)) return t;
      switch ((l !== null && Na(l), Ga(n))) {
        case 2:
        case 8:
          n = is;
          break;
        case 32:
          n = bi;
          break;
        case 268435456:
          n = as;
          break;
        default:
          n = bi;
      }
      return (
        (l = yf.bind(null, e)),
        (n = Ca(n, l)),
        (e.callbackPriority = t),
        (e.callbackNode = n),
        t
      );
    }
    return (
      l !== null && l !== null && Na(l),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function yf(e, t) {
    if (Ee !== 0 && Ee !== 5)
      return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var n = e.callbackNode;
    if (ya() && e.callbackNode !== n) return null;
    var l = k;
    return (
      (l = wi(
        e,
        e === ce ? l : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      l === 0
        ? null
        : (Fu(e, l, t),
          mf(e, xt()),
          e.callbackNode != null && e.callbackNode === n
            ? yf.bind(null, e)
            : null)
    );
  }
  function gf(e, t) {
    if (ya()) return null;
    Fu(e, t, !0);
  }
  function Vh() {
    tm(function () {
      (ne & 6) !== 0 ? Ca(ls, Zh) : hf();
    });
  }
  function Br() {
    return (On === 0 && (On = os()), On);
  }
  function pf(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
        ? e
        : Di("" + e);
  }
  function xf(e, t) {
    var n = t.ownerDocument.createElement("input");
    return (
      (n.name = t.name),
      (n.value = t.value),
      e.id && n.setAttribute("form", e.id),
      t.parentNode.insertBefore(n, t),
      (e = new FormData(e)),
      n.parentNode.removeChild(n),
      e
    );
  }
  function Wh(e, t, n, l, i) {
    if (t === "submit" && n && n.stateNode === i) {
      var a = pf((i[Ye] || null).action),
        r = l.submitter;
      r &&
        ((t = (t = r[Ye] || null)
          ? pf(t.formAction)
          : r.getAttribute("formAction")),
        t !== null && ((a = t), (r = null)));
      var s = new Hi("action", "action", null, l, i);
      e.push({
        event: s,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (On !== 0) {
                  var c = r ? xf(i, r) : new FormData(i);
                  Ko(
                    n,
                    { pending: !0, data: c, method: i.method, action: a },
                    null,
                    c,
                  );
                }
              } else
                typeof a == "function" &&
                  (s.preventDefault(),
                  (c = r ? xf(i, r) : new FormData(i)),
                  Ko(
                    n,
                    { pending: !0, data: c, method: i.method, action: a },
                    a,
                    c,
                  ));
            },
            currentTarget: i,
          },
        ],
      });
    }
  }
  for (var Dr = 0; Dr < fo.length; Dr++) {
    var Er = fo[Dr],
      Kh = Er.toLowerCase(),
      kh = Er[0].toUpperCase() + Er.slice(1);
    mt(Kh, "on" + kh);
  }
  (mt(Fs, "onAnimationEnd"),
    mt($s, "onAnimationIteration"),
    mt(Is, "onAnimationStart"),
    mt("dblclick", "onDoubleClick"),
    mt("focusin", "onFocus"),
    mt("focusout", "onBlur"),
    mt(fh, "onTransitionRun"),
    mt(dh, "onTransitionStart"),
    mt(hh, "onTransitionCancel"),
    mt(Ps, "onTransitionEnd"),
    Yn("onMouseEnter", ["mouseout", "mouseover"]),
    Yn("onMouseLeave", ["mouseout", "mouseover"]),
    Yn("onPointerEnter", ["pointerout", "pointerover"]),
    Yn("onPointerLeave", ["pointerout", "pointerover"]),
    pn(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    pn(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    pn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    pn(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    pn(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    pn(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var oi =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Jh = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(oi),
    );
  function vf(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var l = e[n],
        i = l.event;
      l = l.listeners;
      e: {
        var a = void 0;
        if (t)
          for (var r = l.length - 1; 0 <= r; r--) {
            var s = l[r],
              c = s.instance,
              m = s.currentTarget;
            if (((s = s.listener), c !== a && i.isPropagationStopped()))
              break e;
            ((a = s), (i.currentTarget = m));
            try {
              a(i);
            } catch (v) {
              ia(v);
            }
            ((i.currentTarget = null), (a = c));
          }
        else
          for (r = 0; r < l.length; r++) {
            if (
              ((s = l[r]),
              (c = s.instance),
              (m = s.currentTarget),
              (s = s.listener),
              c !== a && i.isPropagationStopped())
            )
              break e;
            ((a = s), (i.currentTarget = m));
            try {
              a(i);
            } catch (v) {
              ia(v);
            }
            ((i.currentTarget = null), (a = c));
          }
      }
    }
  }
  function K(e, t) {
    var n = t[Xa];
    n === void 0 && (n = t[Xa] = new Set());
    var l = e + "__bubble";
    n.has(l) || (bf(t, e, 2, !1), n.add(l));
  }
  function Rr(e, t, n) {
    var l = 0;
    (t && (l |= 4), bf(n, e, l, t));
  }
  var xa = "_reactListening" + Math.random().toString(36).slice(2);
  function Mr(e) {
    if (!e[xa]) {
      ((e[xa] = !0),
        ds.forEach(function (n) {
          n !== "selectionchange" && (Jh.has(n) || Rr(n, !1, e), Rr(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[xa] || ((t[xa] = !0), Rr("selectionchange", !1, t));
    }
  }
  function bf(e, t, n, l) {
    switch (Zf(t)) {
      case 2:
        var i = Sm;
        break;
      case 8:
        i = wm;
        break;
      default:
        i = Vr;
    }
    ((n = i.bind(null, t, n, e)),
      (i = void 0),
      !Ia ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (i = !0),
      l
        ? i !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: i })
          : e.addEventListener(t, n, !0)
        : i !== void 0
          ? e.addEventListener(t, n, { passive: i })
          : e.addEventListener(t, n, !1));
  }
  function Hr(e, t, n, l, i) {
    var a = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (;;) {
        if (l === null) return;
        var r = l.tag;
        if (r === 3 || r === 4) {
          var s = l.stateNode.containerInfo;
          if (s === i) break;
          if (r === 4)
            for (r = l.return; r !== null; ) {
              var c = r.tag;
              if ((c === 3 || c === 4) && r.stateNode.containerInfo === i)
                return;
              r = r.return;
            }
          for (; s !== null; ) {
            if (((r = Cn(s)), r === null)) return;
            if (((c = r.tag), c === 5 || c === 6 || c === 26 || c === 27)) {
              l = a = r;
              continue e;
            }
            s = s.parentNode;
          }
        }
        l = l.return;
      }
    As(function () {
      var m = a,
        v = Fa(n),
        w = [];
      e: {
        var g = ec.get(e);
        if (g !== void 0) {
          var p = Hi,
            G = e;
          switch (e) {
            case "keypress":
              if (Ri(n) === 0) break e;
            case "keydown":
            case "keyup":
              p = Ld;
              break;
            case "focusin":
              ((G = "focus"), (p = no));
              break;
            case "focusout":
              ((G = "blur"), (p = no));
              break;
            case "beforeblur":
            case "afterblur":
              p = no;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              p = Es;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              p = Md;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              p = Wd;
              break;
            case Fs:
            case $s:
            case Is:
              p = _d;
              break;
            case Ps:
              p = kd;
              break;
            case "scroll":
            case "scrollend":
              p = Ed;
              break;
            case "wheel":
              p = Fd;
              break;
            case "copy":
            case "cut":
            case "paste":
              p = Cd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              p = Ms;
              break;
            case "toggle":
            case "beforetoggle":
              p = Id;
          }
          var N = (t & 4) !== 0,
            oe = !N && (e === "scroll" || e === "scrollend"),
            d = N ? (g !== null ? g + "Capture" : null) : g;
          N = [];
          for (var f = m, h; f !== null; ) {
            var S = f;
            if (
              ((h = S.stateNode),
              (S = S.tag),
              (S !== 5 && S !== 26 && S !== 27) ||
                h === null ||
                d === null ||
                ((S = zl(f, d)), S != null && N.push(ri(f, S, h))),
              oe)
            )
              break;
            f = f.return;
          }
          0 < N.length &&
            ((g = new p(g, G, null, n, v)), w.push({ event: g, listeners: N }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((g = e === "mouseover" || e === "pointerover"),
            (p = e === "mouseout" || e === "pointerout"),
            g &&
              n !== Ja &&
              (G = n.relatedTarget || n.fromElement) &&
              (Cn(G) || G[Un]))
          )
            break e;
          if (
            (p || g) &&
            ((g =
              v.window === v
                ? v
                : (g = v.ownerDocument)
                  ? g.defaultView || g.parentWindow
                  : window),
            p
              ? ((G = n.relatedTarget || n.toElement),
                (p = m),
                (G = G ? Cn(G) : null),
                G !== null &&
                  ((oe = z(G)),
                  (N = G.tag),
                  G !== oe || (N !== 5 && N !== 27 && N !== 6)) &&
                  (G = null))
              : ((p = null), (G = m)),
            p !== G)
          ) {
            if (
              ((N = Es),
              (S = "onMouseLeave"),
              (d = "onMouseEnter"),
              (f = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((N = Ms),
                (S = "onPointerLeave"),
                (d = "onPointerEnter"),
                (f = "pointer")),
              (oe = p == null ? g : Tl(p)),
              (h = G == null ? g : Tl(G)),
              (g = new N(S, f + "leave", p, n, v)),
              (g.target = oe),
              (g.relatedTarget = h),
              (S = null),
              Cn(v) === m &&
                ((N = new N(d, f + "enter", G, n, v)),
                (N.target = h),
                (N.relatedTarget = oe),
                (S = N)),
              (oe = S),
              p && G)
            )
              t: {
                for (N = p, d = G, f = 0, h = N; h; h = gl(h)) f++;
                for (h = 0, S = d; S; S = gl(S)) h++;
                for (; 0 < f - h; ) ((N = gl(N)), f--);
                for (; 0 < h - f; ) ((d = gl(d)), h--);
                for (; f--; ) {
                  if (N === d || (d !== null && N === d.alternate)) break t;
                  ((N = gl(N)), (d = gl(d)));
                }
                N = null;
              }
            else N = null;
            (p !== null && jf(w, g, p, N, !1),
              G !== null && oe !== null && jf(w, oe, G, N, !0));
          }
        }
        e: {
          if (
            ((g = m ? Tl(m) : window),
            (p = g.nodeName && g.nodeName.toLowerCase()),
            p === "select" || (p === "input" && g.type === "file"))
          )
            var O = Ys;
          else if (Ns(g))
            if (Gs) O = sh;
            else {
              O = oh;
              var V = ah;
            }
          else
            ((p = g.nodeName),
              !p ||
              p.toLowerCase() !== "input" ||
              (g.type !== "checkbox" && g.type !== "radio")
                ? m && ka(m.elementType) && (O = Ys)
                : (O = rh));
          if (O && (O = O(e, m))) {
            qs(w, O, n, v);
            break e;
          }
          (V && V(e, g, m),
            e === "focusout" &&
              m &&
              g.type === "number" &&
              m.memoizedProps.value != null &&
              Ka(g, "number", g.value));
        }
        switch (((V = m ? Tl(m) : window), e)) {
          case "focusin":
            (Ns(V) || V.contentEditable === "true") &&
              ((Wn = V), (so = m), (Ol = null));
            break;
          case "focusout":
            Ol = so = Wn = null;
            break;
          case "mousedown":
            co = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((co = !1), ks(w, n, v));
            break;
          case "selectionchange":
            if (uh) break;
          case "keydown":
          case "keyup":
            ks(w, n, v);
        }
        var _;
        if (io)
          e: {
            switch (e) {
              case "compositionstart":
                var q = "onCompositionStart";
                break e;
              case "compositionend":
                q = "onCompositionEnd";
                break e;
              case "compositionupdate":
                q = "onCompositionUpdate";
                break e;
            }
            q = void 0;
          }
        else
          Vn
            ? Us(e, n) && (q = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (q = "onCompositionStart");
        (q &&
          (Hs &&
            n.locale !== "ko" &&
            (Vn || q !== "onCompositionStart"
              ? q === "onCompositionEnd" && Vn && (_ = Bs())
              : ((Zt = v),
                (Pa = "value" in Zt ? Zt.value : Zt.textContent),
                (Vn = !0))),
          (V = va(m, q)),
          0 < V.length &&
            ((q = new Rs(q, e, null, n, v)),
            w.push({ event: q, listeners: V }),
            _ ? (q.data = _) : ((_ = Cs(n)), _ !== null && (q.data = _)))),
          (_ = eh ? th(e, n) : nh(e, n)) &&
            ((q = va(m, "onBeforeInput")),
            0 < q.length &&
              ((V = new Rs("onBeforeInput", "beforeinput", null, n, v)),
              w.push({ event: V, listeners: q }),
              (V.data = _))),
          Wh(w, e, m, n, v));
      }
      vf(w, t);
    });
  }
  function ri(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function va(e, t) {
    for (var n = t + "Capture", l = []; e !== null; ) {
      var i = e,
        a = i.stateNode;
      if (
        ((i = i.tag),
        (i !== 5 && i !== 26 && i !== 27) ||
          a === null ||
          ((i = zl(e, n)),
          i != null && l.unshift(ri(e, i, a)),
          (i = zl(e, t)),
          i != null && l.push(ri(e, i, a))),
        e.tag === 3)
      )
        return l;
      e = e.return;
    }
    return [];
  }
  function gl(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function jf(e, t, n, l, i) {
    for (var a = t._reactName, r = []; n !== null && n !== l; ) {
      var s = n,
        c = s.alternate,
        m = s.stateNode;
      if (((s = s.tag), c !== null && c === l)) break;
      ((s !== 5 && s !== 26 && s !== 27) ||
        m === null ||
        ((c = m),
        i
          ? ((m = zl(n, a)), m != null && r.unshift(ri(n, m, c)))
          : i || ((m = zl(n, a)), m != null && r.push(ri(n, m, c)))),
        (n = n.return));
    }
    r.length !== 0 && e.push({ event: t, listeners: r });
  }
  var Fh = /\r\n?/g,
    $h = /\u0000|\uFFFD/g;
  function Sf(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Fh,
        `
`,
      )
      .replace($h, "");
  }
  function wf(e, t) {
    return ((t = Sf(t)), Sf(e) === t);
  }
  function ba() {}
  function ae(e, t, n, l, i, a) {
    switch (n) {
      case "children":
        typeof l == "string"
          ? t === "body" || (t === "textarea" && l === "") || Qn(e, l)
          : (typeof l == "number" || typeof l == "bigint") &&
            t !== "body" &&
            Qn(e, "" + l);
        break;
      case "className":
        zi(e, "class", l);
        break;
      case "tabIndex":
        zi(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        zi(e, n, l);
        break;
      case "style":
        Ts(e, l, a);
        break;
      case "data":
        if (t !== "object") {
          zi(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (t !== "a" || n !== "href")) {
          e.removeAttribute(n);
          break;
        }
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "symbol" ||
          typeof l == "boolean"
        ) {
          e.removeAttribute(n);
          break;
        }
        ((l = Di("" + l)), e.setAttribute(n, l));
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof a == "function" &&
            (n === "formAction"
              ? (t !== "input" && ae(e, t, "name", i.name, i, null),
                ae(e, t, "formEncType", i.formEncType, i, null),
                ae(e, t, "formMethod", i.formMethod, i, null),
                ae(e, t, "formTarget", i.formTarget, i, null))
              : (ae(e, t, "encType", i.encType, i, null),
                ae(e, t, "method", i.method, i, null),
                ae(e, t, "target", i.target, i, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(n);
          break;
        }
        ((l = Di("" + l)), e.setAttribute(n, l));
        break;
      case "onClick":
        l != null && (e.onclick = ba);
        break;
      case "onScroll":
        l != null && K("scroll", e);
        break;
      case "onScrollEnd":
        l != null && K("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(y(61));
          if (((n = l.__html), n != null)) {
            if (i.children != null) throw Error(y(60));
            e.innerHTML = n;
          }
        }
        break;
      case "multiple":
        e.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        e.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "boolean" ||
          typeof l == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        ((n = Di("" + l)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol"
          ? e.setAttribute(n, "" + l)
          : e.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol"
          ? e.setAttribute(n, "")
          : e.removeAttribute(n);
        break;
      case "capture":
      case "download":
        l === !0
          ? e.setAttribute(n, "")
          : l !== !1 &&
              l != null &&
              typeof l != "function" &&
              typeof l != "symbol"
            ? e.setAttribute(n, l)
            : e.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null &&
        typeof l != "function" &&
        typeof l != "symbol" &&
        !isNaN(l) &&
        1 <= l
          ? e.setAttribute(n, l)
          : e.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l)
          ? e.removeAttribute(n)
          : e.setAttribute(n, l);
        break;
      case "popover":
        (K("beforetoggle", e), K("toggle", e), Ti(e, "popover", l));
        break;
      case "xlinkActuate":
        At(e, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
        break;
      case "xlinkArcrole":
        At(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
        break;
      case "xlinkRole":
        At(e, "http://www.w3.org/1999/xlink", "xlink:role", l);
        break;
      case "xlinkShow":
        At(e, "http://www.w3.org/1999/xlink", "xlink:show", l);
        break;
      case "xlinkTitle":
        At(e, "http://www.w3.org/1999/xlink", "xlink:title", l);
        break;
      case "xlinkType":
        At(e, "http://www.w3.org/1999/xlink", "xlink:type", l);
        break;
      case "xmlBase":
        At(e, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
        break;
      case "xmlLang":
        At(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
        break;
      case "xmlSpace":
        At(e, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
        break;
      case "is":
        Ti(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
          ((n = Bd.get(n) || n), Ti(e, n, l));
    }
  }
  function Or(e, t, n, l, i, a) {
    switch (n) {
      case "style":
        Ts(e, l, a);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(y(61));
          if (((n = l.__html), n != null)) {
            if (i.children != null) throw Error(y(60));
            e.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof l == "string"
          ? Qn(e, l)
          : (typeof l == "number" || typeof l == "bigint") && Qn(e, "" + l);
        break;
      case "onScroll":
        l != null && K("scroll", e);
        break;
      case "onScrollEnd":
        l != null && K("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = ba);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!hs.hasOwnProperty(n))
          e: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((i = n.endsWith("Capture")),
              (t = n.slice(2, i ? n.length - 7 : void 0)),
              (a = e[Ye] || null),
              (a = a != null ? a[n] : null),
              typeof a == "function" && e.removeEventListener(t, a, i),
              typeof l == "function")
            ) {
              (typeof a != "function" &&
                a !== null &&
                (n in e
                  ? (e[n] = null)
                  : e.hasAttribute(n) && e.removeAttribute(n)),
                e.addEventListener(t, l, i));
              break e;
            }
            n in e
              ? (e[n] = l)
              : l === !0
                ? e.setAttribute(n, "")
                : Ti(e, n, l);
          }
    }
  }
  function Re(e, t, n) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (K("error", e), K("load", e));
        var l = !1,
          i = !1,
          a;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var r = n[a];
            if (r != null)
              switch (a) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  i = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(y(137, t));
                default:
                  ae(e, t, a, r, n, null);
              }
          }
        (i && ae(e, t, "srcSet", n.srcSet, n, null),
          l && ae(e, t, "src", n.src, n, null));
        return;
      case "input":
        K("invalid", e);
        var s = (a = r = i = null),
          c = null,
          m = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var v = n[l];
            if (v != null)
              switch (l) {
                case "name":
                  i = v;
                  break;
                case "type":
                  r = v;
                  break;
                case "checked":
                  c = v;
                  break;
                case "defaultChecked":
                  m = v;
                  break;
                case "value":
                  a = v;
                  break;
                case "defaultValue":
                  s = v;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (v != null) throw Error(y(137, t));
                  break;
                default:
                  ae(e, t, l, v, n, null);
              }
          }
        (bs(e, a, s, c, m, r, i, !1), Ai(e));
        return;
      case "select":
        (K("invalid", e), (l = r = a = null));
        for (i in n)
          if (n.hasOwnProperty(i) && ((s = n[i]), s != null))
            switch (i) {
              case "value":
                a = s;
                break;
              case "defaultValue":
                r = s;
                break;
              case "multiple":
                l = s;
              default:
                ae(e, t, i, s, n, null);
            }
        ((t = a),
          (n = r),
          (e.multiple = !!l),
          t != null ? Xn(e, !!l, t, !1) : n != null && Xn(e, !!l, n, !0));
        return;
      case "textarea":
        (K("invalid", e), (a = i = l = null));
        for (r in n)
          if (n.hasOwnProperty(r) && ((s = n[r]), s != null))
            switch (r) {
              case "value":
                l = s;
                break;
              case "defaultValue":
                i = s;
                break;
              case "children":
                a = s;
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(y(91));
                break;
              default:
                ae(e, t, r, s, n, null);
            }
        (Ss(e, l, i, a), Ai(e));
        return;
      case "option":
        for (c in n)
          if (n.hasOwnProperty(c) && ((l = n[c]), l != null))
            switch (c) {
              case "selected":
                e.selected =
                  l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                ae(e, t, c, l, n, null);
            }
        return;
      case "dialog":
        (K("beforetoggle", e), K("toggle", e), K("cancel", e), K("close", e));
        break;
      case "iframe":
      case "object":
        K("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < oi.length; l++) K(oi[l], e);
        break;
      case "image":
        (K("error", e), K("load", e));
        break;
      case "details":
        K("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        (K("error", e), K("load", e));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (m in n)
          if (n.hasOwnProperty(m) && ((l = n[m]), l != null))
            switch (m) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(y(137, t));
              default:
                ae(e, t, m, l, n, null);
            }
        return;
      default:
        if (ka(t)) {
          for (v in n)
            n.hasOwnProperty(v) &&
              ((l = n[v]), l !== void 0 && Or(e, t, v, l, n, void 0));
          return;
        }
    }
    for (s in n)
      n.hasOwnProperty(s) && ((l = n[s]), l != null && ae(e, t, s, l, n, null));
  }
  function Ih(e, t, n, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var i = null,
          a = null,
          r = null,
          s = null,
          c = null,
          m = null,
          v = null;
        for (p in n) {
          var w = n[p];
          if (n.hasOwnProperty(p) && w != null)
            switch (p) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                c = w;
              default:
                l.hasOwnProperty(p) || ae(e, t, p, null, l, w);
            }
        }
        for (var g in l) {
          var p = l[g];
          if (((w = n[g]), l.hasOwnProperty(g) && (p != null || w != null)))
            switch (g) {
              case "type":
                a = p;
                break;
              case "name":
                i = p;
                break;
              case "checked":
                m = p;
                break;
              case "defaultChecked":
                v = p;
                break;
              case "value":
                r = p;
                break;
              case "defaultValue":
                s = p;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (p != null) throw Error(y(137, t));
                break;
              default:
                p !== w && ae(e, t, g, p, l, w);
            }
        }
        Wa(e, r, s, c, m, v, a, i);
        return;
      case "select":
        p = r = s = g = null;
        for (a in n)
          if (((c = n[a]), n.hasOwnProperty(a) && c != null))
            switch (a) {
              case "value":
                break;
              case "multiple":
                p = c;
              default:
                l.hasOwnProperty(a) || ae(e, t, a, null, l, c);
            }
        for (i in l)
          if (
            ((a = l[i]),
            (c = n[i]),
            l.hasOwnProperty(i) && (a != null || c != null))
          )
            switch (i) {
              case "value":
                g = a;
                break;
              case "defaultValue":
                s = a;
                break;
              case "multiple":
                r = a;
              default:
                a !== c && ae(e, t, i, a, l, c);
            }
        ((t = s),
          (n = r),
          (l = p),
          g != null
            ? Xn(e, !!n, g, !1)
            : !!l != !!n &&
              (t != null ? Xn(e, !!n, t, !0) : Xn(e, !!n, n ? [] : "", !1)));
        return;
      case "textarea":
        p = g = null;
        for (s in n)
          if (
            ((i = n[s]),
            n.hasOwnProperty(s) && i != null && !l.hasOwnProperty(s))
          )
            switch (s) {
              case "value":
                break;
              case "children":
                break;
              default:
                ae(e, t, s, null, l, i);
            }
        for (r in l)
          if (
            ((i = l[r]),
            (a = n[r]),
            l.hasOwnProperty(r) && (i != null || a != null))
          )
            switch (r) {
              case "value":
                g = i;
                break;
              case "defaultValue":
                p = i;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (i != null) throw Error(y(91));
                break;
              default:
                i !== a && ae(e, t, r, i, l, a);
            }
        js(e, g, p);
        return;
      case "option":
        for (var G in n)
          if (
            ((g = n[G]),
            n.hasOwnProperty(G) && g != null && !l.hasOwnProperty(G))
          )
            switch (G) {
              case "selected":
                e.selected = !1;
                break;
              default:
                ae(e, t, G, null, l, g);
            }
        for (c in l)
          if (
            ((g = l[c]),
            (p = n[c]),
            l.hasOwnProperty(c) && g !== p && (g != null || p != null))
          )
            switch (c) {
              case "selected":
                e.selected =
                  g && typeof g != "function" && typeof g != "symbol";
                break;
              default:
                ae(e, t, c, g, l, p);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var N in n)
          ((g = n[N]),
            n.hasOwnProperty(N) &&
              g != null &&
              !l.hasOwnProperty(N) &&
              ae(e, t, N, null, l, g));
        for (m in l)
          if (
            ((g = l[m]),
            (p = n[m]),
            l.hasOwnProperty(m) && g !== p && (g != null || p != null))
          )
            switch (m) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(y(137, t));
                break;
              default:
                ae(e, t, m, g, l, p);
            }
        return;
      default:
        if (ka(t)) {
          for (var oe in n)
            ((g = n[oe]),
              n.hasOwnProperty(oe) &&
                g !== void 0 &&
                !l.hasOwnProperty(oe) &&
                Or(e, t, oe, void 0, l, g));
          for (v in l)
            ((g = l[v]),
              (p = n[v]),
              !l.hasOwnProperty(v) ||
                g === p ||
                (g === void 0 && p === void 0) ||
                Or(e, t, v, g, l, p));
          return;
        }
    }
    for (var d in n)
      ((g = n[d]),
        n.hasOwnProperty(d) &&
          g != null &&
          !l.hasOwnProperty(d) &&
          ae(e, t, d, null, l, g));
    for (w in l)
      ((g = l[w]),
        (p = n[w]),
        !l.hasOwnProperty(w) ||
          g === p ||
          (g == null && p == null) ||
          ae(e, t, w, g, l, p));
  }
  var _r = null,
    Ur = null;
  function ja(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Tf(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function zf(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function Cr(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Nr = null;
  function Ph() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === Nr
        ? !1
        : ((Nr = e), !0)
      : ((Nr = null), !1);
  }
  var Af = typeof setTimeout == "function" ? setTimeout : void 0,
    em = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Bf = typeof Promise == "function" ? Promise : void 0,
    tm =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Bf < "u"
          ? function (e) {
              return Bf.resolve(null).then(e).catch(nm);
            }
          : Af;
  function nm(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function rn(e) {
    return e === "head";
  }
  function Df(e, t) {
    var n = t,
      l = 0,
      i = 0;
    do {
      var a = n.nextSibling;
      if ((e.removeChild(n), a && a.nodeType === 8))
        if (((n = a.data), n === "/$")) {
          if (0 < l && 8 > l) {
            n = l;
            var r = e.ownerDocument;
            if ((n & 1 && si(r.documentElement), n & 2 && si(r.body), n & 4))
              for (n = r.head, si(n), r = n.firstChild; r; ) {
                var s = r.nextSibling,
                  c = r.nodeName;
                (r[wl] ||
                  c === "SCRIPT" ||
                  c === "STYLE" ||
                  (c === "LINK" && r.rel.toLowerCase() === "stylesheet") ||
                  n.removeChild(r),
                  (r = s));
              }
          }
          if (i === 0) {
            (e.removeChild(a), gi(t));
            return;
          }
          i--;
        } else
          n === "$" || n === "$?" || n === "$!"
            ? i++
            : (l = n.charCodeAt(0) - 48);
      else l = 0;
      n = a;
    } while (n);
    gi(t);
  }
  function qr(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (((t = t.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (qr(n), Qa(n));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(n);
    }
  }
  function lm(e, t, n, l) {
    for (; e.nodeType === 1; ) {
      var i = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (l) {
        if (!e[wl])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((a = e.getAttribute("rel")),
                a === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                a !== i.rel ||
                e.getAttribute("href") !==
                  (i.href == null || i.href === "" ? null : i.href) ||
                e.getAttribute("crossorigin") !==
                  (i.crossOrigin == null ? null : i.crossOrigin) ||
                e.getAttribute("title") !== (i.title == null ? null : i.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((a = e.getAttribute("src")),
                (a !== (i.src == null ? null : i.src) ||
                  e.getAttribute("type") !== (i.type == null ? null : i.type) ||
                  e.getAttribute("crossorigin") !==
                    (i.crossOrigin == null ? null : i.crossOrigin)) &&
                  a &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var a = i.name == null ? null : "" + i.name;
        if (i.type === "hidden" && e.getAttribute("name") === a) return e;
      } else return e;
      if (((e = gt(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function im(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !n) ||
        ((e = gt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Yr(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState === "complete")
    );
  }
  function am(e, t) {
    var n = e.ownerDocument;
    if (e.data !== "$?" || n.readyState === "complete") t();
    else {
      var l = function () {
        (t(), n.removeEventListener("DOMContentLoaded", l));
      };
      (n.addEventListener("DOMContentLoaded", l), (e._reactRetry = l));
    }
  }
  function gt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
        )
          break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  var Gr = null;
  function Ef(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Rf(e, t, n) {
    switch (((t = ja(n)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(y(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(y(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(y(454));
        return e;
      default:
        throw Error(y(451));
    }
  }
  function si(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    Qa(e);
  }
  var ft = new Map(),
    Mf = new Set();
  function Sa(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var Gt = R.d;
  R.d = { f: om, r: rm, D: sm, C: cm, L: um, m: fm, X: hm, S: dm, M: mm };
  function om() {
    var e = Gt.f(),
      t = ha();
    return e || t;
  }
  function rm(e) {
    var t = Nn(e);
    t !== null && t.tag === 5 && t.type === "form" ? Fc(t) : Gt.r(e);
  }
  var pl = typeof document > "u" ? null : document;
  function Hf(e, t, n) {
    var l = pl;
    if (l && typeof t == "string" && t) {
      var i = it(t);
      ((i = 'link[rel="' + e + '"][href="' + i + '"]'),
        typeof n == "string" && (i += '[crossorigin="' + n + '"]'),
        Mf.has(i) ||
          (Mf.add(i),
          (e = { rel: e, crossOrigin: n, href: t }),
          l.querySelector(i) === null &&
            ((t = l.createElement("link")),
            Re(t, "link", e),
            Te(t),
            l.head.appendChild(t))));
    }
  }
  function sm(e) {
    (Gt.D(e), Hf("dns-prefetch", e, null));
  }
  function cm(e, t) {
    (Gt.C(e, t), Hf("preconnect", e, t));
  }
  function um(e, t, n) {
    Gt.L(e, t, n);
    var l = pl;
    if (l && e && t) {
      var i = 'link[rel="preload"][as="' + it(t) + '"]';
      t === "image" && n && n.imageSrcSet
        ? ((i += '[imagesrcset="' + it(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (i += '[imagesizes="' + it(n.imageSizes) + '"]'))
        : (i += '[href="' + it(e) + '"]');
      var a = i;
      switch (t) {
        case "style":
          a = xl(e);
          break;
        case "script":
          a = vl(e);
      }
      ft.has(a) ||
        ((e = U(
          {
            rel: "preload",
            href: t === "image" && n && n.imageSrcSet ? void 0 : e,
            as: t,
          },
          n,
        )),
        ft.set(a, e),
        l.querySelector(i) !== null ||
          (t === "style" && l.querySelector(ci(a))) ||
          (t === "script" && l.querySelector(ui(a))) ||
          ((t = l.createElement("link")),
          Re(t, "link", e),
          Te(t),
          l.head.appendChild(t)));
    }
  }
  function fm(e, t) {
    Gt.m(e, t);
    var n = pl;
    if (n && e) {
      var l = t && typeof t.as == "string" ? t.as : "script",
        i =
          'link[rel="modulepreload"][as="' + it(l) + '"][href="' + it(e) + '"]',
        a = i;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          a = vl(e);
      }
      if (
        !ft.has(a) &&
        ((e = U({ rel: "modulepreload", href: e }, t)),
        ft.set(a, e),
        n.querySelector(i) === null)
      ) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(ui(a))) return;
        }
        ((l = n.createElement("link")),
          Re(l, "link", e),
          Te(l),
          n.head.appendChild(l));
      }
    }
  }
  function dm(e, t, n) {
    Gt.S(e, t, n);
    var l = pl;
    if (l && e) {
      var i = qn(l).hoistableStyles,
        a = xl(e);
      t = t || "default";
      var r = i.get(a);
      if (!r) {
        var s = { loading: 0, preload: null };
        if ((r = l.querySelector(ci(a)))) s.loading = 5;
        else {
          ((e = U({ rel: "stylesheet", href: e, "data-precedence": t }, n)),
            (n = ft.get(a)) && Xr(e, n));
          var c = (r = l.createElement("link"));
          (Te(c),
            Re(c, "link", e),
            (c._p = new Promise(function (m, v) {
              ((c.onload = m), (c.onerror = v));
            })),
            c.addEventListener("load", function () {
              s.loading |= 1;
            }),
            c.addEventListener("error", function () {
              s.loading |= 2;
            }),
            (s.loading |= 4),
            wa(r, t, l));
        }
        ((r = { type: "stylesheet", instance: r, count: 1, state: s }),
          i.set(a, r));
      }
    }
  }
  function hm(e, t) {
    Gt.X(e, t);
    var n = pl;
    if (n && e) {
      var l = qn(n).hoistableScripts,
        i = vl(e),
        a = l.get(i);
      a ||
        ((a = n.querySelector(ui(i))),
        a ||
          ((e = U({ src: e, async: !0 }, t)),
          (t = ft.get(i)) && Qr(e, t),
          (a = n.createElement("script")),
          Te(a),
          Re(a, "link", e),
          n.head.appendChild(a)),
        (a = { type: "script", instance: a, count: 1, state: null }),
        l.set(i, a));
    }
  }
  function mm(e, t) {
    Gt.M(e, t);
    var n = pl;
    if (n && e) {
      var l = qn(n).hoistableScripts,
        i = vl(e),
        a = l.get(i);
      a ||
        ((a = n.querySelector(ui(i))),
        a ||
          ((e = U({ src: e, async: !0, type: "module" }, t)),
          (t = ft.get(i)) && Qr(e, t),
          (a = n.createElement("script")),
          Te(a),
          Re(a, "link", e),
          n.head.appendChild(a)),
        (a = { type: "script", instance: a, count: 1, state: null }),
        l.set(i, a));
    }
  }
  function Of(e, t, n, l) {
    var i = (i = X.current) ? Sa(i) : null;
    if (!i) throw Error(y(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((t = xl(n.href)),
            (n = qn(i).hoistableStyles),
            (l = n.get(t)),
            l ||
              ((l = { type: "style", instance: null, count: 0, state: null }),
              n.set(t, l)),
            l)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          e = xl(n.href);
          var a = qn(i).hoistableStyles,
            r = a.get(e);
          if (
            (r ||
              ((i = i.ownerDocument || i),
              (r = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              a.set(e, r),
              (a = i.querySelector(ci(e))) &&
                !a._p &&
                ((r.instance = a), (r.state.loading = 5)),
              ft.has(e) ||
                ((n = {
                  rel: "preload",
                  as: "style",
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                ft.set(e, n),
                a || ym(i, e, n, r.state))),
            t && l === null)
          )
            throw Error(y(528, ""));
          return r;
        }
        if (t && l !== null) throw Error(y(529, ""));
        return null;
      case "script":
        return (
          (t = n.async),
          (n = n.src),
          typeof n == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = vl(n)),
              (n = qn(i).hoistableScripts),
              (l = n.get(t)),
              l ||
                ((l = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(t, l)),
              l)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(y(444, e));
    }
  }
  function xl(e) {
    return 'href="' + it(e) + '"';
  }
  function ci(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function _f(e) {
    return U({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function ym(e, t, n, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (l.loading = 1)
      : ((t = e.createElement("link")),
        (l.preload = t),
        t.addEventListener("load", function () {
          return (l.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (l.loading |= 2);
        }),
        Re(t, "link", n),
        Te(t),
        e.head.appendChild(t));
  }
  function vl(e) {
    return '[src="' + it(e) + '"]';
  }
  function ui(e) {
    return "script[async]" + e;
  }
  function Uf(e, t, n) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var l = e.querySelector('style[data-href~="' + it(n.href) + '"]');
          if (l) return ((t.instance = l), Te(l), l);
          var i = U({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (e.ownerDocument || e).createElement("style")),
            Te(l),
            Re(l, "style", i),
            wa(l, n.precedence, e),
            (t.instance = l)
          );
        case "stylesheet":
          i = xl(n.href);
          var a = e.querySelector(ci(i));
          if (a) return ((t.state.loading |= 4), (t.instance = a), Te(a), a);
          ((l = _f(n)),
            (i = ft.get(i)) && Xr(l, i),
            (a = (e.ownerDocument || e).createElement("link")),
            Te(a));
          var r = a;
          return (
            (r._p = new Promise(function (s, c) {
              ((r.onload = s), (r.onerror = c));
            })),
            Re(a, "link", l),
            (t.state.loading |= 4),
            wa(a, n.precedence, e),
            (t.instance = a)
          );
        case "script":
          return (
            (a = vl(n.src)),
            (i = e.querySelector(ui(a)))
              ? ((t.instance = i), Te(i), i)
              : ((l = n),
                (i = ft.get(a)) && ((l = U({}, n)), Qr(l, i)),
                (e = e.ownerDocument || e),
                (i = e.createElement("script")),
                Te(i),
                Re(i, "link", l),
                e.head.appendChild(i),
                (t.instance = i))
          );
        case "void":
          return null;
        default:
          throw Error(y(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((l = t.instance), (t.state.loading |= 4), wa(l, n.precedence, e));
    return t.instance;
  }
  function wa(e, t, n) {
    for (
      var l = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        i = l.length ? l[l.length - 1] : null,
        a = i,
        r = 0;
      r < l.length;
      r++
    ) {
      var s = l[r];
      if (s.dataset.precedence === t) a = s;
      else if (a !== i) break;
    }
    a
      ? a.parentNode.insertBefore(e, a.nextSibling)
      : ((t = n.nodeType === 9 ? n.head : n), t.insertBefore(e, t.firstChild));
  }
  function Xr(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function Qr(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var Ta = null;
  function Cf(e, t, n) {
    if (Ta === null) {
      var l = new Map(),
        i = (Ta = new Map());
      i.set(n, l);
    } else ((i = Ta), (l = i.get(n)), l || ((l = new Map()), i.set(n, l)));
    if (l.has(e)) return l;
    for (
      l.set(e, null), n = n.getElementsByTagName(e), i = 0;
      i < n.length;
      i++
    ) {
      var a = n[i];
      if (
        !(
          a[wl] ||
          a[_e] ||
          (e === "link" && a.getAttribute("rel") === "stylesheet")
        ) &&
        a.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var r = a.getAttribute(t) || "";
        r = e + r;
        var s = l.get(r);
        s ? s.push(a) : l.set(r, [a]);
      }
    }
    return l;
  }
  function Nf(e, t, n) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(
        n,
        t === "title" ? e.querySelector("head > title") : null,
      ));
  }
  function gm(e, t, n) {
    if (n === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (e = t.disabled),
              typeof t.precedence == "string" && e == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function qf(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var fi = null;
  function pm() {}
  function xm(e, t, n) {
    if (fi === null) throw Error(y(475));
    var l = fi;
    if (
      t.type === "stylesheet" &&
      (typeof n.media != "string" || matchMedia(n.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var i = xl(n.href),
          a = e.querySelector(ci(i));
        if (a) {
          ((e = a._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (l.count++, (l = za.bind(l)), e.then(l, l)),
            (t.state.loading |= 4),
            (t.instance = a),
            Te(a));
          return;
        }
        ((a = e.ownerDocument || e),
          (n = _f(n)),
          (i = ft.get(i)) && Xr(n, i),
          (a = a.createElement("link")),
          Te(a));
        var r = a;
        ((r._p = new Promise(function (s, c) {
          ((r.onload = s), (r.onerror = c));
        })),
          Re(a, "link", n),
          (t.instance = a));
      }
      (l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(t, e),
        (e = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (l.count++,
          (t = za.bind(l)),
          e.addEventListener("load", t),
          e.addEventListener("error", t)));
    }
  }
  function vm() {
    if (fi === null) throw Error(y(475));
    var e = fi;
    return (
      e.stylesheets && e.count === 0 && Lr(e, e.stylesheets),
      0 < e.count
        ? function (t) {
            var n = setTimeout(function () {
              if ((e.stylesheets && Lr(e, e.stylesheets), e.unsuspend)) {
                var l = e.unsuspend;
                ((e.unsuspend = null), l());
              }
            }, 6e4);
            return (
              (e.unsuspend = t),
              function () {
                ((e.unsuspend = null), clearTimeout(n));
              }
            );
          }
        : null
    );
  }
  function za() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Lr(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var Aa = null;
  function Lr(e, t) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (Aa = new Map()),
        t.forEach(bm, e),
        (Aa = null),
        za.call(e)));
  }
  function bm(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Aa.get(e);
      if (n) var l = n.get(null);
      else {
        ((n = new Map()), Aa.set(e, n));
        for (
          var i = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            a = 0;
          a < i.length;
          a++
        ) {
          var r = i[a];
          (r.nodeName === "LINK" || r.getAttribute("media") !== "not all") &&
            (n.set(r.dataset.precedence, r), (l = r));
        }
        l && n.set(null, l);
      }
      ((i = t.instance),
        (r = i.getAttribute("data-precedence")),
        (a = n.get(r) || l),
        a === l && n.set(null, i),
        n.set(r, i),
        this.count++,
        (l = za.bind(this)),
        i.addEventListener("load", l),
        i.addEventListener("error", l),
        a
          ? a.parentNode.insertBefore(i, a.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(i, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var di = {
    $$typeof: Me,
    Provider: null,
    Consumer: null,
    _currentValue: Y,
    _currentValue2: Y,
    _threadCount: 0,
  };
  function jm(e, t, n, l, i, a, r, s) {
    ((this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = qa(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = qa(0)),
      (this.hiddenUpdates = qa(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = i),
      (this.onCaughtError = a),
      (this.onRecoverableError = r),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = s),
      (this.incompleteTransitions = new Map()));
  }
  function Yf(e, t, n, l, i, a, r, s, c, m, v, w) {
    return (
      (e = new jm(e, t, n, r, s, c, m, w)),
      (t = 1),
      a === !0 && (t |= 24),
      (a = $e(3, null, null, t)),
      (e.current = a),
      (a.stateNode = e),
      (t = To()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (a.memoizedState = { element: l, isDehydrated: n, cache: t }),
      Do(a),
      e
    );
  }
  function Gf(e) {
    return e ? ((e = Fn), e) : Fn;
  }
  function Xf(e, t, n, l, i, a) {
    ((i = Gf(i)),
      l.context === null ? (l.context = i) : (l.pendingContext = i),
      (l = Kt(t)),
      (l.payload = { element: n }),
      (a = a === void 0 ? null : a),
      a !== null && (l.callback = a),
      (n = kt(e, l, t)),
      n !== null && (nt(n, e, t), Ql(n, e, t)));
  }
  function Qf(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Zr(e, t) {
    (Qf(e, t), (e = e.alternate) && Qf(e, t));
  }
  function Lf(e) {
    if (e.tag === 13) {
      var t = Jn(e, 67108864);
      (t !== null && nt(t, e, 67108864), Zr(e, 67108864));
    }
  }
  var Ba = !0;
  function Sm(e, t, n, l) {
    var i = b.T;
    b.T = null;
    var a = R.p;
    try {
      ((R.p = 2), Vr(e, t, n, l));
    } finally {
      ((R.p = a), (b.T = i));
    }
  }
  function wm(e, t, n, l) {
    var i = b.T;
    b.T = null;
    var a = R.p;
    try {
      ((R.p = 8), Vr(e, t, n, l));
    } finally {
      ((R.p = a), (b.T = i));
    }
  }
  function Vr(e, t, n, l) {
    if (Ba) {
      var i = Wr(l);
      if (i === null) (Hr(e, t, l, Da, n), Vf(e, l));
      else if (zm(i, e, t, n, l)) l.stopPropagation();
      else if ((Vf(e, l), t & 4 && -1 < Tm.indexOf(e))) {
        for (; i !== null; ) {
          var a = Nn(i);
          if (a !== null)
            switch (a.tag) {
              case 3:
                if (((a = a.stateNode), a.current.memoizedState.isDehydrated)) {
                  var r = gn(a.pendingLanes);
                  if (r !== 0) {
                    var s = a;
                    for (s.pendingLanes |= 2, s.entangledLanes |= 2; r; ) {
                      var c = 1 << (31 - Je(r));
                      ((s.entanglements[1] |= c), (r &= ~c));
                    }
                    (wt(a), (ne & 6) === 0 && ((fa = xt() + 500), ai(0)));
                  }
                }
                break;
              case 13:
                ((s = Jn(a, 2)), s !== null && nt(s, a, 2), ha(), Zr(a, 2));
            }
          if (((a = Wr(l)), a === null && Hr(e, t, l, Da, n), a === i)) break;
          i = a;
        }
        i !== null && l.stopPropagation();
      } else Hr(e, t, l, null, n);
    }
  }
  function Wr(e) {
    return ((e = Fa(e)), Kr(e));
  }
  var Da = null;
  function Kr(e) {
    if (((Da = null), (e = Cn(e)), e !== null)) {
      var t = z(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (((e = te(t)), e !== null)) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return ((Da = e), null);
  }
  function Zf(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (cd()) {
          case ls:
            return 2;
          case is:
            return 8;
          case bi:
          case ud:
            return 32;
          case as:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var kr = !1,
    sn = null,
    cn = null,
    un = null,
    hi = new Map(),
    mi = new Map(),
    fn = [],
    Tm =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function Vf(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        sn = null;
        break;
      case "dragenter":
      case "dragleave":
        cn = null;
        break;
      case "mouseover":
      case "mouseout":
        un = null;
        break;
      case "pointerover":
      case "pointerout":
        hi.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        mi.delete(t.pointerId);
    }
  }
  function yi(e, t, n, l, i, a) {
    return e === null || e.nativeEvent !== a
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: l,
          nativeEvent: a,
          targetContainers: [i],
        }),
        t !== null && ((t = Nn(t)), t !== null && Lf(t)),
        e)
      : ((e.eventSystemFlags |= l),
        (t = e.targetContainers),
        i !== null && t.indexOf(i) === -1 && t.push(i),
        e);
  }
  function zm(e, t, n, l, i) {
    switch (t) {
      case "focusin":
        return ((sn = yi(sn, e, t, n, l, i)), !0);
      case "dragenter":
        return ((cn = yi(cn, e, t, n, l, i)), !0);
      case "mouseover":
        return ((un = yi(un, e, t, n, l, i)), !0);
      case "pointerover":
        var a = i.pointerId;
        return (hi.set(a, yi(hi.get(a) || null, e, t, n, l, i)), !0);
      case "gotpointercapture":
        return (
          (a = i.pointerId),
          mi.set(a, yi(mi.get(a) || null, e, t, n, l, i)),
          !0
        );
    }
    return !1;
  }
  function Wf(e) {
    var t = Cn(e.target);
    if (t !== null) {
      var n = z(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = te(n)), t !== null)) {
            ((e.blockedOn = t),
              xd(e.priority, function () {
                if (n.tag === 13) {
                  var l = tt();
                  l = Ya(l);
                  var i = Jn(n, l);
                  (i !== null && nt(i, n, l), Zr(n, l));
                }
              }));
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Ea(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Wr(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var l = new n.constructor(n.type, n);
        ((Ja = l), n.target.dispatchEvent(l), (Ja = null));
      } else return ((t = Nn(n)), t !== null && Lf(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function Kf(e, t, n) {
    Ea(e) && n.delete(t);
  }
  function Am() {
    ((kr = !1),
      sn !== null && Ea(sn) && (sn = null),
      cn !== null && Ea(cn) && (cn = null),
      un !== null && Ea(un) && (un = null),
      hi.forEach(Kf),
      mi.forEach(Kf));
  }
  function Ra(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      kr ||
        ((kr = !0),
        x.unstable_scheduleCallback(x.unstable_NormalPriority, Am)));
  }
  var Ma = null;
  function kf(e) {
    Ma !== e &&
      ((Ma = e),
      x.unstable_scheduleCallback(x.unstable_NormalPriority, function () {
        Ma === e && (Ma = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t],
            l = e[t + 1],
            i = e[t + 2];
          if (typeof l != "function") {
            if (Kr(l || n) === null) continue;
            break;
          }
          var a = Nn(n);
          a !== null &&
            (e.splice(t, 3),
            (t -= 3),
            Ko(a, { pending: !0, data: i, method: n.method, action: l }, l, i));
        }
      }));
  }
  function gi(e) {
    function t(c) {
      return Ra(c, e);
    }
    (sn !== null && Ra(sn, e),
      cn !== null && Ra(cn, e),
      un !== null && Ra(un, e),
      hi.forEach(t),
      mi.forEach(t));
    for (var n = 0; n < fn.length; n++) {
      var l = fn[n];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < fn.length && ((n = fn[0]), n.blockedOn === null); )
      (Wf(n), n.blockedOn === null && fn.shift());
    if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
      for (l = 0; l < n.length; l += 3) {
        var i = n[l],
          a = n[l + 1],
          r = i[Ye] || null;
        if (typeof a == "function") r || kf(n);
        else if (r) {
          var s = null;
          if (a && a.hasAttribute("formAction")) {
            if (((i = a), (r = a[Ye] || null))) s = r.formAction;
            else if (Kr(i) !== null) continue;
          } else s = r.action;
          (typeof s == "function" ? (n[l + 1] = s) : (n.splice(l, 3), (l -= 3)),
            kf(n));
        }
      }
  }
  function Jr(e) {
    this._internalRoot = e;
  }
  ((Ha.prototype.render = Jr.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(y(409));
      var n = t.current,
        l = tt();
      Xf(n, l, e, t, null, null);
    }),
    (Ha.prototype.unmount = Jr.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (Xf(e.current, 2, null, e, null, null), ha(), (t[Un] = null));
        }
      }));
  function Ha(e) {
    this._internalRoot = e;
  }
  Ha.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = us();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < fn.length && t !== 0 && t < fn[n].priority; n++);
      (fn.splice(n, 0, e), n === 0 && Wf(e));
    }
  };
  var Jf = D.version;
  if (Jf !== "19.1.0") throw Error(y(527, Jf, "19.1.0"));
  R.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(y(188))
        : ((e = Object.keys(e).join(",")), Error(y(268, e)));
    return (
      (e = H(t)),
      (e = e !== null ? T(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var Bm = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: b,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Oa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Oa.isDisabled && Oa.supportsFiber)
      try {
        ((bl = Oa.inject(Bm)), (ke = Oa));
      } catch {}
  }
  return (
    (xi.createRoot = function (e, t) {
      if (!B(e)) throw Error(y(299));
      var n = !1,
        l = "",
        i = uu,
        a = fu,
        r = du,
        s = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (i = t.onUncaughtError),
          t.onCaughtError !== void 0 && (a = t.onCaughtError),
          t.onRecoverableError !== void 0 && (r = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 &&
            (s = t.unstable_transitionCallbacks)),
        (t = Yf(e, 1, !1, null, null, n, l, i, a, r, s, null)),
        (e[Un] = t.current),
        Mr(e),
        new Jr(t)
      );
    }),
    (xi.hydrateRoot = function (e, t, n) {
      if (!B(e)) throw Error(y(299));
      var l = !1,
        i = "",
        a = uu,
        r = fu,
        s = du,
        c = null,
        m = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (a = n.onUncaughtError),
          n.onCaughtError !== void 0 && (r = n.onCaughtError),
          n.onRecoverableError !== void 0 && (s = n.onRecoverableError),
          n.unstable_transitionCallbacks !== void 0 &&
            (c = n.unstable_transitionCallbacks),
          n.formState !== void 0 && (m = n.formState)),
        (t = Yf(e, 1, !0, t, n ?? null, l, i, a, r, s, c, m)),
        (t.context = Gf(null)),
        (n = t.current),
        (l = tt()),
        (l = Ya(l)),
        (i = Kt(l)),
        (i.callback = null),
        kt(n, i, l),
        (n = l),
        (t.current.lanes = n),
        Sl(t, n),
        wt(t),
        (e[Un] = t.current),
        Mr(e),
        new Ha(t)
      );
    }),
    (xi.version = "19.1.0"),
    xi
  );
}
var ad;
function Nm() {
  if (ad) return Ir.exports;
  ad = 1;
  function x() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x);
      } catch (D) {
        console.error(D);
      }
  }
  return (x(), (Ir.exports = Cm()), Ir.exports);
}
var qm = Nm();
const Ym = () => {
    const [x, D] = he.useState(!1),
      [j, y] = he.useState(!1);
    return (
      he.useEffect(() => {
        const B = () => {
          y(window.innerWidth < 992);
        };
        return (
          B(),
          window.addEventListener("resize", B),
          () => {
            window.removeEventListener("resize", B);
          }
        );
      }, []),
      o.jsxs("header", {
        style: {
          background: "white",
          color: "#333",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
        },
        children: [
          o.jsxs("div", {
            style: {
              maxWidth: "1200px",
              margin: "0 auto",
              padding: j ? "12px 16px" : "16px 24px",
              display: "flex",
              justifyContent: j ? "flex-end" : "center",
              alignItems: "center",
            },
            children: [
              !j &&
                o.jsxs("nav", {
                  style: {
                    display: "flex",
                    gap: "36px",
                    justifyContent: "center",
                  },
                  children: [
                    o.jsx("a", {
                      href: "/",
                      style: {
                        textTransform: "uppercase",
                        fontWeight: "700",
                        color: "#333",
                        textDecoration: "none",
                        padding: "6px 0",
                        position: "relative",
                        fontFamily: "serif",
                        letterSpacing: "0.5px",
                        fontSize: "17px",
                        transition: "color 0.3s ease",
                      },
                      onMouseOver: (B) => {
                        B.currentTarget.style.color = "#2563eb";
                        const z = document.createElement("div");
                        ((z.style.position = "absolute"),
                          (z.style.bottom = "0"),
                          (z.style.left = "0"),
                          (z.style.width = "100%"),
                          (z.style.height = "2px"),
                          (z.style.backgroundColor = "#2563eb"),
                          (z.style.transform = "scaleX(1)"),
                          (z.style.transition = "transform 0.3s ease"),
                          B.currentTarget.appendChild(z));
                      },
                      onMouseOut: (B) => {
                        B.currentTarget.style.color = "#333";
                        const z = B.currentTarget.querySelector("div");
                        z && B.currentTarget.removeChild(z);
                      },
                      children: "Home",
                    }),
                    o.jsx("a", {
                      href: "/about",
                      style: {
                        textTransform: "uppercase",
                        fontWeight: "700",
                        color: "#333",
                        textDecoration: "none",
                        padding: "6px 0",
                        position: "relative",
                        fontFamily: "serif",
                        letterSpacing: "0.5px",
                        fontSize: "17px",
                        transition: "color 0.3s ease",
                      },
                      onMouseOver: (B) => {
                        B.currentTarget.style.color = "#2563eb";
                        const z = document.createElement("div");
                        ((z.style.position = "absolute"),
                          (z.style.bottom = "0"),
                          (z.style.left = "0"),
                          (z.style.width = "100%"),
                          (z.style.height = "2px"),
                          (z.style.backgroundColor = "#2563eb"),
                          (z.style.transform = "scaleX(1)"),
                          (z.style.transition = "transform 0.3s ease"),
                          B.currentTarget.appendChild(z));
                      },
                      onMouseOut: (B) => {
                        B.currentTarget.style.color = "#333";
                        const z = B.currentTarget.querySelector("div");
                        z && B.currentTarget.removeChild(z);
                      },
                      children: "About Us",
                    }),
                    o.jsx("a", {
                      href: "/free-content",
                      style: {
                        textTransform: "uppercase",
                        fontWeight: "700",
                        color: "#333",
                        textDecoration: "none",
                        padding: "6px 0",
                        position: "relative",
                        fontFamily: "serif",
                        letterSpacing: "0.5px",
                        fontSize: "17px",
                        transition: "color 0.3s ease",
                      },
                      onMouseOver: (B) => {
                        B.currentTarget.style.color = "#2563eb";
                        const z = document.createElement("div");
                        ((z.style.position = "absolute"),
                          (z.style.bottom = "0"),
                          (z.style.left = "0"),
                          (z.style.width = "100%"),
                          (z.style.height = "2px"),
                          (z.style.backgroundColor = "#2563eb"),
                          (z.style.transform = "scaleX(1)"),
                          (z.style.transition = "transform 0.3s ease"),
                          B.currentTarget.appendChild(z));
                      },
                      onMouseOut: (B) => {
                        B.currentTarget.style.color = "#333";
                        const z = B.currentTarget.querySelector("div");
                        z && B.currentTarget.removeChild(z);
                      },
                      children: "Free Content",
                    }),
                    o.jsx("a", {
                      href: "/subscribe",
                      style: {
                        textTransform: "uppercase",
                        fontWeight: "700",
                        color: "#333",
                        textDecoration: "none",
                        padding: "6px 0",
                        position: "relative",
                        fontFamily: "serif",
                        letterSpacing: "0.5px",
                        fontSize: "17px",
                        transition: "color 0.3s ease",
                      },
                      onMouseOver: (B) => {
                        B.currentTarget.style.color = "#2563eb";
                        const z = document.createElement("div");
                        ((z.style.position = "absolute"),
                          (z.style.bottom = "0"),
                          (z.style.left = "0"),
                          (z.style.width = "100%"),
                          (z.style.height = "2px"),
                          (z.style.backgroundColor = "#2563eb"),
                          (z.style.transform = "scaleX(1)"),
                          (z.style.transition = "transform 0.3s ease"),
                          B.currentTarget.appendChild(z));
                      },
                      onMouseOut: (B) => {
                        B.currentTarget.style.color = "#333";
                        const z = B.currentTarget.querySelector("div");
                        z && B.currentTarget.removeChild(z);
                      },
                      children: "Subscribe",
                    }),
                    o.jsx("a", {
                      href: "/contact",
                      style: {
                        textTransform: "uppercase",
                        fontWeight: "700",
                        color: "#333",
                        textDecoration: "none",
                        padding: "6px 0",
                        position: "relative",
                        fontFamily: "serif",
                        letterSpacing: "0.5px",
                        fontSize: "17px",
                        transition: "color 0.3s ease",
                      },
                      onMouseOver: (B) => {
                        B.currentTarget.style.color = "#2563eb";
                        const z = document.createElement("div");
                        ((z.style.position = "absolute"),
                          (z.style.bottom = "0"),
                          (z.style.left = "0"),
                          (z.style.width = "100%"),
                          (z.style.height = "2px"),
                          (z.style.backgroundColor = "#2563eb"),
                          (z.style.transform = "scaleX(1)"),
                          (z.style.transition = "transform 0.3s ease"),
                          B.currentTarget.appendChild(z));
                      },
                      onMouseOut: (B) => {
                        B.currentTarget.style.color = "#333";
                        const z = B.currentTarget.querySelector("div");
                        z && B.currentTarget.removeChild(z);
                      },
                      children: "Contact Us",
                    }),
                  ],
                }),
              j &&
                o.jsx("div", {
                  children: o.jsx("button", {
                    onClick: () => D(!x),
                    style: {
                      color: x ? "white" : "#333",
                      background: x ? "#2563eb" : "#f3f4f6",
                      border: "none",
                      cursor: "pointer",
                      padding: "10px",
                      borderRadius: "4px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                      transition: "all 0.2s ease",
                    },
                    children: o.jsx("svg", {
                      width: "24",
                      height: "24",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      children: x
                        ? o.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M6 18L18 6M6 6l12 12",
                          })
                        : o.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M4 6h16M4 12h16M4 18h16",
                          }),
                    }),
                  }),
                }),
            ],
          }),
          j &&
            x &&
            o.jsx("nav", {
              style: {
                background: "rgba(255, 255, 255, 0.98)",
                padding: "16px 24px",
                borderTop: "1px solid #eee",
                maxHeight: "85vh",
                overflowY: "auto",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              },
              children: o.jsxs("div", {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  paddingBottom: "12px",
                  alignItems: "center",
                  textAlign: "center",
                },
                children: [
                  o.jsx("a", {
                    href: "/",
                    style: {
                      textTransform: "uppercase",
                      fontWeight: "700",
                      color: "#333",
                      textDecoration: "none",
                      fontFamily: "serif",
                      letterSpacing: "0.5px",
                      fontSize: "18px",
                      padding: "12px 0",
                      borderBottom: "1px solid #f3f4f6",
                      width: "100%",
                      textAlign: "center",
                    },
                    onClick: () => D(!1),
                    children: "Home",
                  }),
                  o.jsx("a", {
                    href: "/about",
                    style: {
                      textTransform: "uppercase",
                      fontWeight: "700",
                      color: "#333",
                      textDecoration: "none",
                      fontFamily: "serif",
                      letterSpacing: "0.5px",
                      fontSize: "18px",
                      padding: "12px 0",
                      borderBottom: "1px solid #f3f4f6",
                      width: "100%",
                      textAlign: "center",
                    },
                    onClick: () => D(!1),
                    children: "About Us",
                  }),
                  o.jsx("a", {
                    href: "/free-content",
                    style: {
                      textTransform: "uppercase",
                      fontWeight: "700",
                      color: "#333",
                      textDecoration: "none",
                      fontFamily: "serif",
                      letterSpacing: "0.5px",
                      fontSize: "18px",
                      padding: "12px 0",
                      borderBottom: "1px solid #f3f4f6",
                      width: "100%",
                      textAlign: "center",
                    },
                    onClick: () => D(!1),
                    children: "Free Content",
                  }),
                  o.jsx("a", {
                    href: "/subscribe",
                    style: {
                      textTransform: "uppercase",
                      fontWeight: "700",
                      color: "#333",
                      textDecoration: "none",
                      fontFamily: "serif",
                      letterSpacing: "0.5px",
                      fontSize: "18px",
                      padding: "12px 0",
                      borderBottom: "1px solid #f3f4f6",
                      width: "100%",
                      textAlign: "center",
                    },
                    onClick: () => D(!1),
                    children: "Subscribe",
                  }),
                  o.jsx("a", {
                    href: "/contact",
                    style: {
                      textTransform: "uppercase",
                      fontWeight: "700",
                      color: "#333",
                      textDecoration: "none",
                      fontFamily: "serif",
                      letterSpacing: "0.5px",
                      fontSize: "18px",
                      padding: "12px 0",
                      width: "100%",
                      textAlign: "center",
                    },
                    onClick: () => D(!1),
                    children: "Contact Us",
                  }),
                ],
              }),
            }),
        ],
      })
    );
  },
  Gm = () => {
    const x = new Date().getFullYear(),
      [D, j] = he.useState(!1);
    he.useEffect(() => {
      const Q = () => {
        j(window.innerWidth < 992);
      };
      return (
        Q(),
        window.addEventListener("resize", Q),
        () => {
          window.removeEventListener("resize", Q);
        }
      );
    }, []);
    const y = (Q, H) => {
        (Q.preventDefault(),
          console.log("Footer navigation to:", H),
          window.history.pushState({}, "", H),
          (window.location.href = H));
      },
      B = [
        { text: "PRIVACY POLICY", href: "/privacy-policy" },
        { text: "DISCLAIMERS", href: "/disclaimers" },
        { text: "TERMS & CONDITIONS", href: "/terms-conditions" },
        { text: "COMPLAINTS DATA", href: "/complaints-data" },
        {
          text: "CANCELLATION & REFUNDS",
          href: "/cancellation-refund",
          noWrap: !0,
        },
      ],
      z = [
        { text: "GRIEVANCE REDRESSAL", href: "/grievance-redressal" },
        { text: "CODE OF CONDUCT", href: "/code-of-conduct" },
        { text: "INVESTOR CHARTER", href: "/investor-charter" },
        { text: "FAQS", href: "/faq" },
        { text: "CONTACT US", href: "/contact" },
      ],
      te = [...B, ...z];
    return o.jsx("footer", {
      style: {
        background: "black",
        color: "white",
        minHeight: D ? "400px" : "500px",
        marginTop: "0",
        paddingBottom: D ? "40px" : "80px",
      },
      children: o.jsx("div", {
        style: { paddingTop: "0", paddingBottom: D ? "30px" : "80px" },
        children: o.jsxs("div", {
          style: { maxWidth: "1200px", margin: "0 auto", padding: "0 16px" },
          children: [
            o.jsx("div", {
              style: { textAlign: "center", marginBottom: D ? "30px" : "80px" },
              children: o.jsxs("p", {
                style: {
                  fontFamily: "serif",
                  fontSize: D ? "1.2rem" : "1.5rem",
                  fontWeight: 400,
                  marginTop: "40px",
                  color: "#9ca3af",
                },
                children: [
                  "Copyright © ",
                  x,
                  " Nitin Jain - All Rights Reserved",
                ],
              }),
            }),
            o.jsxs("div", {
              style: { textAlign: "center", marginBottom: D ? "30px" : "80px" },
              children: [
                o.jsxs("p", {
                  style: {
                    fontFamily: "serif",
                    fontSize: D ? "0.9rem" : "1.1rem",
                    marginBottom: "20px",
                    color: "#9ca3af",
                  },
                  children: [
                    "SEBI Research Analyst No.: ",
                    o.jsx("a", {
                      href: "#",
                      style: {
                        color: "#9ca3af",
                        textDecoration: "none",
                        borderBottom: "1px dotted #9ca3af",
                      },
                      children: "INH000010399",
                    }),
                  ],
                }),
                o.jsxs("p", {
                  style: {
                    fontFamily: "serif",
                    fontSize: D ? "0.9rem" : "1.1rem",
                    color: "#9ca3af",
                  },
                  children: [
                    "BSE Enlistment No.: ",
                    o.jsx("a", {
                      href: "#",
                      style: {
                        color: "#9ca3af",
                        textDecoration: "none",
                        borderBottom: "1px dotted #9ca3af",
                      },
                      children: "5637",
                    }),
                  ],
                }),
              ],
            }),
            o.jsx("div", {
              style: {
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              },
              children: o.jsx("div", {
                style: {
                  width: "100%",
                  maxWidth: "1400px",
                  marginBottom: D ? "20px" : "40px",
                  padding: D ? "20px 0" : "24px 0",
                },
                children: D
                  ? o.jsx("div", {
                      style: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "20px",
                        width: "100%",
                      },
                      children: te.map((Q, H) =>
                        o.jsx(
                          "a",
                          {
                            href: Q.href,
                            onClick: (T) =>
                              Q.href.startsWith("/") ? y(T, Q.href) : null,
                            style: {
                              color: "white",
                              textTransform: "uppercase",
                              fontSize: "1rem",
                              letterSpacing: "0.1em",
                              textAlign: "center",
                              fontWeight: "bold",
                              fontFamily: "serif",
                              padding: "8px 0",
                              borderBottom:
                                H < te.length - 1
                                  ? "1px solid rgba(255,255,255,0.1)"
                                  : "none",
                              width: "100%",
                              maxWidth: "300px",
                              textDecoration: "none",
                              cursor: "pointer",
                            },
                            children: Q.text,
                          },
                          H,
                        ),
                      ),
                    })
                  : o.jsxs("div", {
                      style: {
                        width: "100%",
                        maxWidth: "1200px",
                        margin: "0 auto",
                      },
                      children: [
                        o.jsx("div", {
                          style: {
                            display: "flex",
                            justifyContent: "center",
                            gap: "20px",
                            width: "100%",
                            textAlign: "center",
                            marginBottom: "24px",
                            flexWrap: "wrap",
                          },
                          children: B.map((Q, H) =>
                            o.jsx(
                              "a",
                              {
                                href: Q.href,
                                onClick: (T) =>
                                  Q.href.startsWith("/") ? y(T, Q.href) : null,
                                style: {
                                  color: "white",
                                  textTransform: "uppercase",
                                  fontSize: "1.1rem",
                                  letterSpacing: "0.1em",
                                  textAlign: "center",
                                  fontWeight: "bold",
                                  fontFamily: "serif",
                                  padding: "0 10px",
                                  textDecoration: "none",
                                  display: "inline-block",
                                  margin: "5px 10px",
                                  whiteSpace: Q.noWrap ? "nowrap" : "normal",
                                  cursor: "pointer",
                                },
                                children: Q.text,
                              },
                              H,
                            ),
                          ),
                        }),
                        o.jsx("div", {
                          style: {
                            display: "flex",
                            justifyContent: "center",
                            gap: "20px",
                            width: "100%",
                            textAlign: "center",
                            flexWrap: "wrap",
                          },
                          children: z.map((Q, H) =>
                            o.jsx(
                              "a",
                              {
                                href: Q.href,
                                onClick: (T) =>
                                  Q.href.startsWith("/") ? y(T, Q.href) : null,
                                style: {
                                  color: "white",
                                  textTransform: "uppercase",
                                  fontSize: "1.1rem",
                                  letterSpacing: "0.1em",
                                  textAlign: "center",
                                  fontWeight: "bold",
                                  fontFamily: "serif",
                                  padding: "0 10px",
                                  textDecoration: "none",
                                  display: "inline-block",
                                  margin: "5px 10px",
                                  whiteSpace: Q.noWrap ? "nowrap" : "normal",
                                  cursor: "pointer",
                                },
                                children: Q.text,
                              },
                              H,
                            ),
                          ),
                        }),
                      ],
                    }),
              }),
            }),
          ],
        }),
      }),
    });
  },
  Xm = ({ isOpen: x, onClose: D }) => {
    if (!x) return null;
    he.useEffect(
      () => (
        x
          ? (document.body.style.overflow = "hidden")
          : (document.body.style.overflow = "unset"),
        () => {
          document.body.style.overflow = "unset";
        }
      ),
      [x],
    );
    const j = (B) => {
        B.target === B.currentTarget && D();
      },
      y = (B) => {
        var te;
        const z = B.target;
        z.tagName === "A" &&
          (te = z.getAttribute("href")) != null &&
          te.startsWith("http");
      };
    return o.jsx("div", {
      style: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        padding: "1rem",
      },
      onClick: j,
      children: o.jsxs("div", {
        style: {
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow:
            "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          maxWidth: "700px",
          width: "100%",
          maxHeight: "90vh",
          overflowY: "auto",
          position: "relative",
        },
        children: [
          o.jsx("div", {
            style: {
              background: "linear-gradient(to right, #f97316, #ef4444)",
              color: "white",
              padding: "1.5rem",
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
            },
            children: o.jsxs("div", {
              style: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              },
              children: [
                o.jsx("h2", {
                  style: { fontSize: "1.5rem", fontWeight: "bold", margin: 0 },
                  children: "Vigilance Awareness Week 2025",
                }),
                o.jsx("button", {
                  onClick: D,
                  style: {
                    color: "white",
                    fontSize: "2rem",
                    lineHeight: 1,
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "0 0.5rem",
                  },
                  "aria-label": "Close popup",
                  children: "×",
                }),
              ],
            }),
          }),
          o.jsxs("div", {
            style: { padding: "2rem", textAlign: "center" },
            children: [
              o.jsxs("div", {
                style: { marginBottom: "2rem" },
                children: [
                  o.jsx("p", {
                    style: {
                      fontSize: "1.125rem",
                      color: "#374151",
                      marginBottom: "1rem",
                    },
                    children:
                      "Vigilance Awareness Week 2025 is being observed from",
                  }),
                  o.jsx("p", {
                    style: {
                      fontSize: "1.25rem",
                      fontWeight: "600",
                      color: "#2563eb",
                      marginBottom: "0.5rem",
                    },
                    children: "October 27th to November 2nd, 2025",
                  }),
                  o.jsx("p", {
                    style: {
                      fontSize: "1.125rem",
                      color: "#374151",
                      marginBottom: "1rem",
                    },
                    children: "with the theme:",
                  }),
                ],
              }),
              o.jsxs("div", {
                style: {
                  backgroundColor: "#f9fafb",
                  padding: "1.5rem",
                  borderRadius: "8px",
                  marginBottom: "2rem",
                  borderRight: "4px solid #f97316",
                },
                children: [
                  o.jsx("p", {
                    style: {
                      fontSize: "1.875rem",
                      fontWeight: "bold",
                      color: "#1f2937",
                      marginBottom: "0.5rem",
                      fontFamily: "serif",
                    },
                    children: "सतर्कता: हमारी साझा जिम्मेदारी",
                  }),
                  o.jsx("p", {
                    style: { fontSize: "1.125rem", color: "#4b5563" },
                    children: '("Vigilance: Our Shared Responsibility")',
                  }),
                ],
              }),
              o.jsxs("div", {
                style: { marginBottom: "2rem" },
                children: [
                  o.jsx("p", {
                    style: {
                      fontSize: "1.125rem",
                      color: "#374151",
                      marginBottom: "1.5rem",
                    },
                    children:
                      "All stakeholders are encouraged to participate in the e-pledge initiative by visiting the CVC portal:",
                  }),
                  o.jsx("a", {
                    href: "https://pledge.cvc.nic.in/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    style: {
                      display: "inline-block",
                      backgroundColor: "#2563eb",
                      color: "white",
                      fontWeight: "600",
                      padding: "0.75rem 1.5rem",
                      borderRadius: "8px",
                      textDecoration: "none",
                      transition: "background-color 0.2s",
                    },
                    onMouseOver: (B) =>
                      (B.currentTarget.style.backgroundColor = "#1d4ed8"),
                    onMouseOut: (B) =>
                      (B.currentTarget.style.backgroundColor = "#2563eb"),
                    onClick: y,
                    children: "Visit CVC Portal",
                  }),
                ],
              }),
              o.jsx("div", {
                style: { paddingTop: "1.5rem", borderTop: "1px solid #e5e7eb" },
                children: o.jsx("button", {
                  onClick: D,
                  style: {
                    backgroundColor: "#6b7280",
                    color: "white",
                    fontWeight: "600",
                    padding: "0.5rem 1.5rem",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer",
                    transition: "background-color 0.2s",
                  },
                  onMouseOver: (B) =>
                    (B.currentTarget.style.backgroundColor = "#4b5563"),
                  onMouseOut: (B) =>
                    (B.currentTarget.style.backgroundColor = "#6b7280"),
                  children: "Close",
                }),
              }),
            ],
          }),
        ],
      }),
    });
  },
  Qm = () => {
    const [x, D] = he.useState(!1);
    return (
      he.useEffect(() => {
        const j = () => {
          D(window.innerWidth < 992);
        };
        return (
          j(),
          window.addEventListener("resize", j),
          () => {
            window.removeEventListener("resize", j);
          }
        );
      }, []),
      o.jsxs("section", {
        style: {
          background:
            'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          position: "relative",
          marginTop: "80px",
          overflow: "hidden",
        },
        children: [
          !x &&
            o.jsxs(o.Fragment, {
              children: [
                o.jsx("div", {
                  style: {
                    position: "absolute",
                    bottom: "-5%",
                    left: "-10%",
                    width: "40%",
                    height: "300px",
                    background:
                      "radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, rgba(37, 99, 235, 0) 70%)",
                    borderRadius: "50%",
                    zIndex: 1,
                  },
                }),
                o.jsx("div", {
                  style: {
                    position: "absolute",
                    top: "-10%",
                    right: "-5%",
                    width: "30%",
                    height: "300px",
                    background:
                      "radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, rgba(37, 99, 235, 0) 70%)",
                    borderRadius: "50%",
                    zIndex: 1,
                  },
                }),
              ],
            }),
          o.jsx("div", {
            style: {
              maxWidth: "1200px",
              margin: "0 auto",
              padding: x ? "80px 20px" : "120px 24px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              position: "relative",
              zIndex: 2,
            },
            children: o.jsxs("div", {
              style: {
                marginTop: x ? "40px" : "60px",
                padding: x ? "25px 20px" : "30px 40px",
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                borderRadius: "12px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "15px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                maxWidth: x ? "90%" : "600px",
                width: "100%",
              },
              children: [
                o.jsx("h2", {
                  style: {
                    fontSize: x ? "1.8rem" : "2.2rem",
                    fontWeight: "bold",
                    color: "white",
                    margin: 0,
                    fontFamily: "serif",
                  },
                  children: "Stay Tuned!",
                }),
                o.jsx("div", {
                  style: {
                    width: "60px",
                    height: "2px",
                    background: "#2563eb",
                    margin: "5px 0",
                  },
                }),
                o.jsx("p", {
                  style: {
                    fontSize: x ? "1.1rem" : "1.3rem",
                    color: "rgba(255, 255, 255, 0.9)",
                    margin: 0,
                    textAlign: "center",
                    fontFamily: "serif",
                    fontStyle: "italic",
                  },
                  children: "We are yet to start. Thank you for your patience.",
                }),
              ],
            }),
          }),
        ],
      })
    );
  },
  Lm = () =>
    o.jsxs("section", {
      style: {
        padding: "100px 0",
        background: "linear-gradient(to right, #f8f9fa 0%, #e9ecef 100%)",
        position: "relative",
        overflow: "hidden",
      },
      children: [
        o.jsx("div", {
          style: {
            position: "absolute",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, rgba(59, 130, 246, 0) 70%)",
            top: "-250px",
            right: "-100px",
            zIndex: 0,
          },
        }),
        o.jsx("div", {
          style: {
            position: "absolute",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, rgba(59, 130, 246, 0) 70%)",
            bottom: "-150px",
            left: "-50px",
            zIndex: 0,
          },
        }),
        o.jsxs("div", {
          style: {
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
            position: "relative",
            zIndex: 1,
          },
          children: [
            o.jsxs("h2", {
              style: {
                fontSize: "38px",
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: "50px",
                position: "relative",
                display: "inline-block",
                left: "50%",
                transform: "translateX(-50%)",
                fontFamily: "serif",
              },
              children: [
                "About Us",
                o.jsx("span", {
                  style: {
                    display: "block",
                    width: "80px",
                    height: "4px",
                    background: "linear-gradient(to right, #3b82f6, #1e40af)",
                    marginTop: "15px",
                    borderRadius: "2px",
                    marginLeft: "auto",
                    marginRight: "auto",
                  },
                }),
              ],
            }),
            o.jsxs("div", {
              style: {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "60px",
                flexWrap: "wrap",
              },
              children: [
                o.jsxs("div", {
                  style: {
                    flex: "1 1 450px",
                    minWidth: "300px",
                    position: "relative",
                  },
                  children: [
                    o.jsx("div", {
                      style: {
                        position: "absolute",
                        top: "20px",
                        left: "20px",
                        right: "-20px",
                        bottom: "-20px",
                        border: "2px solid #3b82f6",
                        borderRadius: "8px",
                        zIndex: 1,
                      },
                    }),
                    o.jsx("img", {
                      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                      alt: "Business analytics",
                      style: {
                        width: "100%",
                        height: "auto",
                        borderRadius: "8px",
                        boxShadow:
                          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                        position: "relative",
                        zIndex: 2,
                        transition: "transform 0.3s ease",
                        transform: "translateY(0)",
                      },
                      onMouseOver: (x) => {
                        x.currentTarget.style.transform = "translateY(-10px)";
                      },
                      onMouseOut: (x) => {
                        x.currentTarget.style.transform = "translateY(0)";
                      },
                    }),
                  ],
                }),
                o.jsxs("div", {
                  style: {
                    flex: "1 1 450px",
                    minWidth: "300px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  },
                  children: [
                    o.jsxs("h3", {
                      style: {
                        fontSize: "28px",
                        fontWeight: "600",
                        marginBottom: "24px",
                        fontFamily: "serif",
                        color: "#1e3a8a",
                        position: "relative",
                        paddingBottom: "15px",
                      },
                      children: [
                        "What we stand for",
                        o.jsx("span", {
                          style: {
                            display: "block",
                            width: "50px",
                            height: "3px",
                            background: "#3b82f6",
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            borderRadius: "2px",
                          },
                        }),
                      ],
                    }),
                    o.jsxs("p", {
                      style: {
                        color: "#4b5563",
                        marginBottom: "20px",
                        fontSize: "17px",
                        lineHeight: "1.7",
                        fontFamily: "serif",
                      },
                      children: [
                        "Nitin Jain is a SEBI registered research analyst entity (",
                        o.jsx("span", {
                          style: { color: "#2563eb", fontWeight: "600" },
                          children: "INH000010399",
                        }),
                        ").",
                      ],
                    }),
                    o.jsx("p", {
                      style: {
                        color: "#4b5563",
                        marginBottom: "30px",
                        fontSize: "17px",
                        lineHeight: "1.7",
                        fontFamily: "serif",
                        fontStyle: "italic",
                      },
                      children: "More information coming soon.",
                    }),
                    o.jsx("a", {
                      href: "javascript:void(0)",
                      onClick: (x) => x.preventDefault(),
                      style: {
                        display: "inline-block",
                        backgroundColor: "#1e40af",
                        color: "white",
                        padding: "12px 28px",
                        borderRadius: "30px",
                        fontWeight: "500",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        transition: "all 0.3s ease",
                        textDecoration: "none",
                        fontSize: "16px",
                        fontFamily: "serif",
                        letterSpacing: "1px",
                      },
                      onMouseOver: (x) => {
                        ((x.currentTarget.style.backgroundColor = "#1e3a8a"),
                          (x.currentTarget.style.transform =
                            "translateY(-2px)"),
                          (x.currentTarget.style.boxShadow =
                            "0 6px 10px rgba(0, 0, 0, 0.15)"));
                      },
                      onMouseOut: (x) => {
                        ((x.currentTarget.style.backgroundColor = "#1e40af"),
                          (x.currentTarget.style.transform = "translateY(0)"),
                          (x.currentTarget.style.boxShadow =
                            "0 4px 6px rgba(0, 0, 0, 0.1)"));
                      },
                      children: "FIND OUT MORE",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  Zm = () => {
    const [x, D] = he.useState(!1);
    return (
      he.useEffect(() => {
        const j = () => {
          D(window.innerWidth < 992);
        };
        return (
          j(),
          window.addEventListener("resize", j),
          () => {
            window.removeEventListener("resize", j);
          }
        );
      }, []),
      o.jsx("section", {
        style: { backgroundColor: "white", padding: x ? "40px 0" : "80px 0" },
        children: o.jsxs("div", {
          style: { maxWidth: "1400px", margin: "0 auto", padding: "0 24px" },
          children: [
            o.jsx("h2", {
              style: {
                fontSize: x ? "2rem" : "2.5rem",
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: x ? "30px" : "50px",
                fontFamily: "serif",
                color: "#121212",
              },
              children: "Our Services",
            }),
            o.jsxs("div", {
              style: {
                display: "grid",
                gridTemplateColumns: x ? "1fr" : "repeat(3, 1fr)",
                gap: x ? "24px" : "32px",
              },
              children: [
                o.jsx("div", {
                  style: {
                    height: x ? "350px" : "420px",
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow:
                      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                    position: "relative",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    cursor: "pointer",
                  },
                  className: "service-card",
                  children: o.jsxs("div", {
                    style: {
                      position: "relative",
                      width: "100%",
                      height: "100%",
                    },
                    children: [
                      o.jsx("img", {
                        src: "https://images.unsplash.com/photo-1574607383476-f517f260d30b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
                        alt: "New Products",
                        style: {
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          minHeight: x ? "350px" : "420px",
                        },
                      }),
                      o.jsx("div", {
                        style: {
                          position: "absolute",
                          inset: 0,
                          backgroundColor: "rgba(0, 0, 0, 0.2)",
                        },
                      }),
                      o.jsx("div", {
                        style: {
                          position: "absolute",
                          inset: 0,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        },
                        children: o.jsx("h3", {
                          style: {
                            color: "white",
                            fontSize: x ? "26px" : "30px",
                            fontWeight: "bold",
                            fontFamily: "serif",
                          },
                          children: "New Products",
                        }),
                      }),
                      o.jsx("a", {
                        href: "javascript:void(0)",
                        onClick: (j) => j.preventDefault(),
                        style: { position: "absolute", inset: 0 },
                        "aria-label": "View New Products",
                      }),
                    ],
                  }),
                }),
                o.jsx("div", {
                  style: {
                    height: x ? "350px" : "420px",
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow:
                      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                    position: "relative",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    cursor: "pointer",
                  },
                  className: "service-card",
                  children: o.jsxs("div", {
                    style: {
                      position: "relative",
                      width: "100%",
                      height: "100%",
                    },
                    children: [
                      o.jsx("img", {
                        src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
                        alt: "Most Popular",
                        style: {
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          minHeight: x ? "350px" : "420px",
                        },
                      }),
                      o.jsx("div", {
                        style: {
                          position: "absolute",
                          inset: 0,
                          backgroundColor: "rgba(0, 0, 0, 0.2)",
                        },
                      }),
                      o.jsx("div", {
                        style: {
                          position: "absolute",
                          inset: 0,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        },
                        children: o.jsx("h3", {
                          style: {
                            color: "white",
                            fontSize: x ? "26px" : "30px",
                            fontWeight: "bold",
                            fontFamily: "serif",
                          },
                          children: "Most Popular",
                        }),
                      }),
                      o.jsx("a", {
                        href: "javascript:void(0)",
                        onClick: (j) => j.preventDefault(),
                        style: { position: "absolute", inset: 0 },
                        "aria-label": "View Most Popular",
                      }),
                    ],
                  }),
                }),
                o.jsx("div", {
                  style: {
                    height: x ? "350px" : "420px",
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow:
                      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                    position: "relative",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    cursor: "pointer",
                  },
                  className: "service-card",
                  children: o.jsxs("div", {
                    style: {
                      position: "relative",
                      width: "100%",
                      height: "100%",
                    },
                    children: [
                      o.jsx("img", {
                        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
                        alt: "Best Value",
                        style: {
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          minHeight: x ? "350px" : "420px",
                        },
                      }),
                      o.jsx("div", {
                        style: {
                          position: "absolute",
                          inset: 0,
                          backgroundColor: "rgba(0, 0, 0, 0.2)",
                        },
                      }),
                      o.jsx("div", {
                        style: {
                          position: "absolute",
                          inset: 0,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        },
                        children: o.jsx("h3", {
                          style: {
                            color: "white",
                            fontSize: x ? "26px" : "30px",
                            fontWeight: "bold",
                            fontFamily: "serif",
                          },
                          children: "Best Value",
                        }),
                      }),
                      o.jsx("a", {
                        href: "javascript:void(0)",
                        onClick: (j) => j.preventDefault(),
                        style: { position: "absolute", inset: 0 },
                        "aria-label": "View Best Value",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      })
    );
  },
  Vm = () =>
    o.jsx("div", {
      style: { padding: "64px 0", backgroundColor: "#f9fafb" },
      children: o.jsx("div", {
        style: {
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
        },
        children: o.jsxs("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          },
          children: [
            o.jsx("h2", {
              style: {
                fontSize: "30px",
                fontWeight: "bold",
                marginBottom: "40px",
                textAlign: "center",
                fontFamily: "serif",
              },
              children: "Connect With Us",
            }),
            o.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "96px",
              },
              children: [
                o.jsx("a", {
                  href: "https://instagram.com",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  style: {
                    transform: "scale(1)",
                    transition: "transform 0.3s ease",
                  },
                  onMouseOver: (x) =>
                    (x.currentTarget.style.transform = "scale(1.1)"),
                  onMouseOut: (x) =>
                    (x.currentTarget.style.transform = "scale(1)"),
                  children: o.jsx("div", {
                    style: {
                      width: "64px",
                      height: "64px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "white",
                      borderRadius: "50%",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    },
                    children: o.jsx("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24",
                      width: "32",
                      height: "32",
                      children: o.jsx("path", {
                        fill: "#E4405F",
                        d: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z",
                      }),
                    }),
                  }),
                }),
                o.jsx("a", {
                  href: "https://x.com",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  style: {
                    transform: "scale(1)",
                    transition: "transform 0.3s ease",
                  },
                  onMouseOver: (x) =>
                    (x.currentTarget.style.transform = "scale(1.1)"),
                  onMouseOut: (x) =>
                    (x.currentTarget.style.transform = "scale(1)"),
                  children: o.jsx("div", {
                    style: {
                      width: "64px",
                      height: "64px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "white",
                      borderRadius: "50%",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    },
                    children: o.jsx("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24",
                      width: "32",
                      height: "32",
                      children: o.jsx("path", {
                        fill: "#000000",
                        d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
                      }),
                    }),
                  }),
                }),
                o.jsx("a", {
                  href: "https://youtube.com",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  style: {
                    transform: "scale(1)",
                    transition: "transform 0.3s ease",
                  },
                  onMouseOver: (x) =>
                    (x.currentTarget.style.transform = "scale(1.1)"),
                  onMouseOut: (x) =>
                    (x.currentTarget.style.transform = "scale(1)"),
                  children: o.jsx("div", {
                    style: {
                      width: "64px",
                      height: "64px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "white",
                      borderRadius: "50%",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    },
                    children: o.jsx("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24",
                      width: "32",
                      height: "32",
                      children: o.jsx("path", {
                        fill: "#FF0000",
                        d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
                      }),
                    }),
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  Wm = () =>
    o.jsxs("div", {
      style: {
        position: "relative",
        height: "200px",
        width: "100%",
        marginTop: "20px",
        marginBottom: "0",
      },
      children: [
        o.jsxs("div", {
          style: {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: "hidden",
          },
          children: [
            o.jsx("img", {
              src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
              alt: "Modern glass building skyline",
              style: {
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              },
            }),
            o.jsx("div", {
              style: {
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.4)",
              },
            }),
          ],
        }),
        o.jsxs("div", {
          style: {
            position: "relative",
            zIndex: 10,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 24px",
          },
          children: [
            o.jsx("h2", {
              style: {
                color: "white",
                fontSize: "36px",
                fontWeight: "bold",
                marginBottom: "15px",
                fontFamily: "serif",
              },
              children: "Newsletter",
            }),
            o.jsx("div", {
              style: {
                width: "60px",
                height: "3px",
                background: "white",
                marginBottom: "20px",
              },
            }),
            o.jsx("p", {
              style: {
                color: "white",
                fontSize: "18px",
                maxWidth: "600px",
                textAlign: "center",
                fontFamily: "serif",
                fontStyle: "italic",
              },
              children: "Coming Soon",
            }),
          ],
        }),
      ],
    }),
  od = () =>
    o.jsxs("main", {
      children: [
        o.jsx(Qm, {}),
        o.jsx(Lm, {}),
        o.jsx(Zm, {}),
        o.jsx(Vm, {}),
        o.jsx(Wm, {}),
      ],
    }),
  Km = () =>
    o.jsxs("div", {
      style: {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        marginTop: "80px",
        textAlign: "center",
      },
      children: [
        o.jsx("h1", {
          style: {
            fontSize: "3rem",
            marginBottom: "1.5rem",
            fontFamily: "serif",
            fontWeight: "bold",
            color: "#121212",
          },
          children: "About Us",
        }),
        o.jsx("div", {
          style: {
            width: "100px",
            height: "3px",
            background: "#2563eb",
            marginBottom: "2rem",
          },
        }),
        o.jsxs("p", {
          style: {
            fontSize: "1.5rem",
            maxWidth: "800px",
            color: "#333",
            fontFamily: "serif",
            marginBottom: "1.5rem",
          },
          children: [
            "Nitin Jain is a SEBI registered research analyst entity (",
            o.jsx("span", {
              style: { color: "#2563eb", fontWeight: "600" },
              children: "INH000010399",
            }),
            ").",
          ],
        }),
        o.jsx("p", {
          style: {
            fontSize: "1.2rem",
            maxWidth: "800px",
            color: "#666",
            fontFamily: "serif",
            fontStyle: "italic",
          },
          children: "More information coming soon.",
        }),
      ],
    }),
  km = () =>
    o.jsxs("div", {
      style: {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        marginTop: "80px",
        textAlign: "center",
      },
      children: [
        o.jsx("h1", {
          style: {
            fontSize: "3rem",
            marginBottom: "1.5rem",
            fontFamily: "serif",
            fontWeight: "bold",
            color: "#121212",
          },
          children: "Free Content",
        }),
        o.jsx("div", {
          style: {
            width: "100px",
            height: "3px",
            background: "#2563eb",
            marginBottom: "2rem",
          },
        }),
        o.jsx("p", {
          style: {
            fontSize: "1.5rem",
            maxWidth: "600px",
            color: "#333",
            fontFamily: "serif",
          },
          children: "Coming Soon",
        }),
        o.jsx("p", {
          style: {
            fontSize: "1.2rem",
            maxWidth: "800px",
            marginTop: "2rem",
            color: "#666",
            fontFamily: "serif",
          },
          children:
            "We're preparing valuable free resources for you. Stay tuned for expert financial insights, tutorials, and educational content.",
        }),
      ],
    }),
  Jm = () =>
    o.jsx("div", {
      style: {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        marginTop: "80px",
        textAlign: "center",
      },
      children: o.jsxs("div", {
        style: {
          background: "rgba(37, 99, 235, 0.05)",
          padding: "3rem",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
          maxWidth: "600px",
          width: "100%",
        },
        children: [
          o.jsx("h1", {
            style: {
              fontSize: "2.5rem",
              marginBottom: "1.5rem",
              fontFamily: "serif",
              fontWeight: "bold",
              color: "#121212",
            },
            children: "Coming Soon",
          }),
          o.jsx("div", {
            style: {
              width: "80px",
              height: "3px",
              background: "#2563eb",
              margin: "0 auto 2rem",
            },
          }),
          o.jsx("p", {
            style: { fontSize: "1.2rem", color: "#666", fontFamily: "serif" },
            children: "Thank you for your interest. We are yet to start.",
          }),
        ],
      }),
    }),
  Fm = () => {
    const [x, D] = he.useState(!1);
    return (
      he.useEffect(() => {
        const j = () => {
          D(window.innerWidth < 768);
        };
        return (
          j(),
          window.addEventListener("resize", j),
          () => {
            window.removeEventListener("resize", j);
          }
        );
      }, []),
      o.jsxs("div", {
        style: {
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: x ? "1rem" : "2rem",
          marginTop: "80px",
        },
        children: [
          o.jsx("h1", {
            style: {
              fontSize: x ? "2.2rem" : "3rem",
              marginBottom: "1.5rem",
              fontFamily: "serif",
              fontWeight: "bold",
              color: "#121212",
              textAlign: "center",
            },
            children: "Contact Us",
          }),
          o.jsx("div", {
            style: {
              width: "100px",
              height: "3px",
              background: "#2563eb",
              marginBottom: "2rem",
            },
          }),
          o.jsx("div", {
            style: {
              width: "100%",
              maxWidth: "800px",
              margin: "0 auto",
              padding: x ? "1rem" : "2rem",
            },
            children: o.jsxs("div", {
              style: {
                width: "100%",
                padding: x ? "1.5rem" : "2.5rem",
                backgroundColor: "#f8f9fa",
                borderRadius: "8px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
              },
              children: [
                o.jsx("h2", {
                  style: {
                    fontSize: x ? "1.8rem" : "2.2rem",
                    marginBottom: "1.5rem",
                    fontFamily: "serif",
                    fontWeight: "bold",
                    color: "#121212",
                    borderBottom: "2px solid #2563eb",
                    paddingBottom: "0.5rem",
                    textAlign: "center",
                  },
                  children: "We are right here:",
                }),
                o.jsxs("div", {
                  style: { marginBottom: "1.5rem", textAlign: "center" },
                  children: [
                    o.jsx("h3", {
                      style: {
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        color: "#333",
                        marginBottom: "0.5rem",
                      },
                      children: "Primary Contact/Grievances/Principal Officer:",
                    }),
                    o.jsx("p", {
                      style: {
                        fontSize: "1.3rem",
                        color: "#2563eb",
                        fontWeight: "bold",
                        fontFamily: "serif",
                      },
                      children: "Nitin Jain",
                    }),
                  ],
                }),
                o.jsxs("div", {
                  style: {
                    marginBottom: "1.5rem",
                    display: "flex",
                    flexDirection: x ? "column" : "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                    gap: "1rem",
                  },
                  children: [
                    o.jsxs("div", {
                      children: [
                        o.jsx("h3", {
                          style: {
                            fontSize: "1.2rem",
                            fontWeight: "bold",
                            color: "#333",
                            marginBottom: "0.5rem",
                            textAlign: "center",
                          },
                          children: "SEBI Registration",
                        }),
                        o.jsx("p", {
                          style: {
                            fontSize: "1.1rem",
                            color: "#333",
                            textAlign: "center",
                            fontWeight: "bold",
                          },
                          children: "INH000010399",
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      children: [
                        o.jsx("h3", {
                          style: {
                            fontSize: "1.2rem",
                            fontWeight: "bold",
                            color: "#333",
                            marginBottom: "0.5rem",
                            textAlign: "center",
                          },
                          children: "BSE Enlistment",
                        }),
                        o.jsx("p", {
                          style: {
                            fontSize: "1.1rem",
                            color: "#333",
                            textAlign: "center",
                            fontWeight: "bold",
                          },
                          children: "5637",
                        }),
                      ],
                    }),
                  ],
                }),
                o.jsxs("div", {
                  style: { marginTop: "2rem", marginBottom: "1.5rem" },
                  children: [
                    o.jsx("p", {
                      style: {
                        fontSize: "1.1rem",
                        color: "#555",
                        fontStyle: "italic",
                        marginBottom: "1.5rem",
                        textAlign: "center",
                      },
                      children:
                        "Reach out at below details with any queries about the services, feedback or any complaints.",
                    }),
                    o.jsxs("div", {
                      style: {
                        display: "flex",
                        alignItems: "flex-start",
                        marginBottom: "1.2rem",
                        justifyContent: "center",
                      },
                      children: [
                        o.jsx("div", {
                          style: { marginRight: "10px", color: "#2563eb" },
                          children: o.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "20",
                            height: "20",
                            fill: "currentColor",
                            viewBox: "0 0 16 16",
                            children: o.jsx("path", {
                              d: "M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z",
                            }),
                          }),
                        }),
                        o.jsx("p", {
                          style: { fontSize: "1.1rem", color: "#333" },
                          children: "433, sector 5, Gurgaon, Haryana, 122017",
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "1.2rem",
                        justifyContent: "center",
                      },
                      children: [
                        o.jsx("div", {
                          style: { marginRight: "10px", color: "#2563eb" },
                          children: o.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "20",
                            height: "20",
                            fill: "currentColor",
                            viewBox: "0 0 16 16",
                            children: o.jsx("path", {
                              d: "M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z",
                            }),
                          }),
                        }),
                        o.jsx("p", {
                          style: { fontSize: "1.1rem", color: "#333" },
                          children: "+91 98105 43689",
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "1.2rem",
                        justifyContent: "center",
                      },
                      children: [
                        o.jsx("div", {
                          style: { marginRight: "10px", color: "#2563eb" },
                          children: o.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "20",
                            height: "20",
                            fill: "currentColor",
                            viewBox: "0 0 16 16",
                            children: o.jsx("path", {
                              d: "M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z",
                            }),
                          }),
                        }),
                        o.jsx("a", {
                          href: "mailto:analystnitinjain@gmail.com",
                          style: {
                            fontSize: "1.1rem",
                            color: "#2563eb",
                            textDecoration: "none",
                          },
                          children: "analystnitinjain@gmail.com",
                        }),
                      ],
                    }),
                  ],
                }),
                o.jsxs("div", {
                  style: {
                    marginTop: "2rem",
                    borderTop: "1px solid #ddd",
                    paddingTop: "1.5rem",
                  },
                  children: [
                    o.jsx("h3", {
                      style: {
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        color: "#333",
                        marginBottom: "1rem",
                        textAlign: "center",
                      },
                      children: "Office Timings:",
                    }),
                    o.jsxs("div", {
                      style: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "0.5rem",
                      },
                      children: [
                        o.jsxs("p", {
                          style: {
                            fontSize: "1.1rem",
                            color: "#333",
                            textAlign: "center",
                          },
                          children: [
                            "Monday to Friday: ",
                            o.jsx("span", {
                              style: { fontWeight: "bold" },
                              children: "9:30 AM to 4:00 PM",
                            }),
                          ],
                        }),
                        o.jsxs("p", {
                          style: {
                            fontSize: "1.1rem",
                            color: "#333",
                            textAlign: "center",
                          },
                          children: [
                            "Saturday & Sunday: ",
                            o.jsx("span", {
                              style: { color: "#e53e3e", fontWeight: "bold" },
                              children: "Closed",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      })
    );
  },
  $m = () =>
    o.jsxs("div", {
      style: {
        minHeight: "100vh",
        padding: "2rem",
        marginTop: "80px",
        maxWidth: "1200px",
        margin: "80px auto 0",
        fontFamily: "serif",
        color: "#333",
      },
      children: [
        o.jsx("h1", {
          style: {
            fontSize: "2.5rem",
            marginBottom: "1.5rem",
            fontWeight: "bold",
            fontFamily: "serif",
            color: "#121212",
            textAlign: "center",
          },
          children: "Investor Charter",
        }),
        o.jsx("div", {
          style: {
            width: "100px",
            height: "3px",
            background: "#2563eb",
            margin: "0 auto 2rem",
          },
        }),
        o.jsxs("section", {
          style: { marginBottom: "3rem" },
          children: [
            o.jsx("h2", {
              style: {
                fontSize: "1.8rem",
                marginBottom: "1.5rem",
                color: "#1e40af",
                fontWeight: "bold",
              },
              children: "A. Vision and Mission Statements for investors",
            }),
            o.jsxs("p", {
              style: {
                marginBottom: "1rem",
                fontSize: "1.1rem",
                lineHeight: 1.6,
              },
              children: [
                o.jsx("strong", { children: "Vision:" }),
                " Invest with knowledge & safety.",
              ],
            }),
            o.jsxs("p", {
              style: {
                marginBottom: "2rem",
                fontSize: "1.1rem",
                lineHeight: 1.6,
              },
              children: [
                o.jsx("strong", { children: "Mission:" }),
                " Every investor should be able to invest in right investment products based on their needs, manage and monitor them to meet their goals, access reports and enjoy financial wellness.",
              ],
            }),
          ],
        }),
        o.jsxs("section", {
          style: { marginBottom: "3rem" },
          children: [
            o.jsx("h2", {
              style: {
                fontSize: "1.8rem",
                marginBottom: "1.5rem",
                color: "#1e40af",
                fontWeight: "bold",
              },
              children:
                "B. Details of business transacted by the Research Analyst with respect to the investors",
            }),
            o.jsxs("ul", {
              style: {
                listStyle: "disc",
                paddingLeft: "2rem",
                marginBottom: "1.5rem",
              },
              children: [
                o.jsx("li", {
                  style: {
                    marginBottom: "0.75rem",
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                  },
                  children:
                    "To publish research report based on the research activities of the RA",
                }),
                o.jsx("li", {
                  style: {
                    marginBottom: "0.75rem",
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                  },
                  children:
                    "To provide an independent unbiased view on securities.",
                }),
                o.jsx("li", {
                  style: {
                    marginBottom: "0.75rem",
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                  },
                  children:
                    "To offer unbiased recommendation, disclosing the financial interests in recommended securities.",
                }),
                o.jsx("li", {
                  style: {
                    marginBottom: "0.75rem",
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                  },
                  children:
                    "To provide research recommendation, based on analysis of publicly available information and known observations.",
                }),
                o.jsx("li", {
                  style: {
                    marginBottom: "0.75rem",
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                  },
                  children: "To conduct audit annually",
                }),
                o.jsx("li", {
                  style: {
                    marginBottom: "0.75rem",
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                  },
                  children:
                    "To ensure that all advertisements/ marketing/ promotional material are in adherence to the provisions of the Advertisement Code for Research Analysts.",
                }),
                o.jsx("li", {
                  style: {
                    marginBottom: "0.75rem",
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                  },
                  children:
                    "To maintain records of interactions, with all clients including prospective clients (prior to onboarding), where any conversation related to the research services has taken place.",
                }),
              ],
            }),
          ],
        }),
        o.jsxs("section", {
          style: { marginBottom: "3rem" },
          children: [
            o.jsx("h2", {
              style: {
                fontSize: "1.8rem",
                marginBottom: "1.5rem",
                color: "#1e40af",
                fontWeight: "bold",
              },
              children:
                "C. Details of services provided to investors (No Indicative Timelines)",
            }),
            o.jsxs("ul", {
              style: {
                listStyle: "disc",
                paddingLeft: "2rem",
                marginBottom: "1.5rem",
              },
              children: [
                o.jsx("li", {
                  style: {
                    marginBottom: "0.75rem",
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                  },
                  children: "Onboarding of Clients",
                }),
                o.jsx("li", {
                  style: {
                    marginBottom: "0.75rem",
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                  },
                  children:
                    "Sharing of terms and conditions of research services",
                }),
                o.jsx("li", {
                  style: {
                    marginBottom: "0.75rem",
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                  },
                  children: "Completing KYC of clients",
                }),
                o.jsxs("li", {
                  style: {
                    marginBottom: "0.75rem",
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                  },
                  children: [
                    "Disclosure to Clients:",
                    o.jsxs("ul", {
                      style: {
                        listStyle: "circle",
                        paddingLeft: "2rem",
                        marginTop: "0.5rem",
                      },
                      children: [
                        o.jsx("li", {
                          style: {
                            marginBottom: "0.5rem",
                            fontSize: "1.1rem",
                            lineHeight: 1.6,
                          },
                          children:
                            "To disclose, information that is material for the client to make an informed decision, including details of its business activity, disciplinary history, the terms and conditions of research services, details of associates, risks and conflicts of interest, if any",
                        }),
                        o.jsx("li", {
                          style: {
                            marginBottom: "0.5rem",
                            fontSize: "1.1rem",
                            lineHeight: 1.6,
                          },
                          children:
                            "To disclose the extent of use of Artificial Intelligence tools in providing research services",
                        }),
                        o.jsx("li", {
                          style: {
                            marginBottom: "0.5rem",
                            fontSize: "1.1rem",
                            lineHeight: 1.6,
                          },
                          children:
                            "To disclose, while distributing a third party research report, any material conflict of interest of such third party research provider or provide web address that directs a recipient to the relevant disclosures",
                        }),
                        o.jsx("li", {
                          style: {
                            marginBottom: "0.5rem",
                            fontSize: "1.1rem",
                            lineHeight: 1.6,
                          },
                          children:
                            "To disclose any conflict of interest of the activities of providing research services with other activities of the research analyst.",
                        }),
                      ],
                    }),
                  ],
                }),
                o.jsx("li", {
                  style: {
                    marginBottom: "0.75rem",
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                  },
                  children:
                    "To distribute research reports and recommendations to the clients without discrimination.",
                }),
                o.jsx("li", {
                  style: {
                    marginBottom: "0.75rem",
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                  },
                  children:
                    "To maintain confidentiality w.r.t publication of the research report until made available in the public domain.",
                }),
                o.jsx("li", {
                  style: {
                    marginBottom: "0.75rem",
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                  },
                  children:
                    "To respect data privacy rights of clients and take measures to protect unauthorized use of their confidential information",
                }),
                o.jsx("li", {
                  style: {
                    marginBottom: "0.75rem",
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                  },
                  children:
                    "To disclose the timelines for the services provided by the research analyst to clients and ensure adherence to the said timelines",
                }),
                o.jsx("li", {
                  style: {
                    marginBottom: "0.75rem",
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                  },
                  children:
                    "To provide clear guidance and adequate caution notice to clients when providing recommendations for dealing in complex and high-risk financial products/services",
                }),
                o.jsx("li", {
                  style: {
                    marginBottom: "0.75rem",
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                  },
                  children: "To treat all clients with honesty and integrity",
                }),
                o.jsx("li", {
                  style: {
                    marginBottom: "0.75rem",
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                  },
                  children:
                    "To ensure confidentiality of information shared by investors unless such information is required to be provided in furtherance of discharging legal obligations or investors have provided specific consent to share such information.",
                }),
              ],
            }),
          ],
        }),
        o.jsxs("section", {
          style: { marginBottom: "3rem" },
          children: [
            o.jsx("h2", {
              style: {
                fontSize: "1.8rem",
                marginBottom: "1.5rem",
                color: "#1e40af",
                fontWeight: "bold",
              },
              children:
                "D. Details of grievance redressal mechanism and how to access it",
            }),
            o.jsxs("ol", {
              style: {
                listStyle: "decimal",
                paddingLeft: "2rem",
                marginBottom: "1.5rem",
              },
              children: [
                o.jsxs("li", {
                  style: {
                    marginBottom: "1.5rem",
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                  },
                  children: [
                    "Investor can lodge complaint/grievance against Research Analyst in the following ways:",
                    o.jsxs("p", {
                      style: { marginTop: "0.75rem", marginBottom: "0.75rem" },
                      children: [
                        o.jsx("strong", {
                          children:
                            "Mode of filing the complaint with research analyst:",
                        }),
                        " In case of any grievance/complaint, an investor should approach the concerned research analyst who shall strive to redress the grievance immediately, but not later than 21 days of the receipt of the grievance.",
                      ],
                    }),
                    o.jsx("p", {
                      style: { marginTop: "0.75rem", marginBottom: "0.75rem" },
                      children: o.jsx("strong", {
                        children:
                          "Mode of filing the complaint on SCORES or with Research Analyst Administration and Supervisory Body (RAASB):",
                      }),
                    }),
                    o.jsx("ol", {
                      style: { listStyle: "lower-roman", paddingLeft: "2rem" },
                      children: o.jsxs("li", {
                        style: { marginBottom: "0.5rem" },
                        children: [
                          "SCORES 2.0 (a web based centralized grievance redressal system of SEBI for facilitating effective grievance redressal in time-bound manner) (",
                          o.jsx("a", {
                            href: "https://scores.sebi.gov.in",
                            style: {
                              color: "#2563eb",
                              textDecoration: "underline",
                            },
                            children: "https://scores.sebi.gov.in",
                          }),
                          ")",
                        ],
                      }),
                    }),
                    o.jsx("p", {
                      style: { marginTop: "0.75rem", marginBottom: "0.75rem" },
                      children: o.jsx("strong", {
                        children:
                          "Two level review for complaint/ grievance against Research Analyst:",
                      }),
                    }),
                    o.jsxs("ul", {
                      style: { listStyle: "disc", paddingLeft: "2rem" },
                      children: [
                        o.jsx("li", {
                          style: { marginBottom: "0.5rem" },
                          children:
                            "First review done by designated body (RAASB)",
                        }),
                        o.jsx("li", {
                          style: { marginBottom: "0.5rem" },
                          children: "Second review done by SEBI",
                        }),
                      ],
                    }),
                    o.jsx("p", {
                      style: { marginTop: "0.75rem", marginBottom: "0.75rem" },
                      children: o.jsx("strong", {
                        children: "ii. Email to designated email ID of RAASB",
                      }),
                    }),
                  ],
                }),
                o.jsxs("li", {
                  style: {
                    marginBottom: "1.5rem",
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                  },
                  children: [
                    "If the Investor is not satisfied with the resolution provided by the Market Participants, then the investor has the option to file the complaint/ grievance on SMART ODR platform for its resolution through online conciliation or arbitration.",
                    o.jsx("p", {
                      style: { marginTop: "1rem" },
                      children:
                        "With regard to physical complaints, investors may send their complaints to:",
                    }),
                    o.jsxs("p", {
                      style: { marginTop: "1rem", paddingLeft: "2rem" },
                      children: [
                        "Office of Investor Assistance and Education,",
                        o.jsx("br", {}),
                        "Securities and Exchange Board of India,",
                        o.jsx("br", {}),
                        "SEBI Bhavan. Plot No. C4-A, 'G' Block,",
                        o.jsx("br", {}),
                        "Bandra-Kurla Complex, Bandra (E),",
                        o.jsx("br", {}),
                        "Mumbai – 400 051.",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        o.jsxs("section", {
          style: { marginBottom: "3rem" },
          children: [
            o.jsx("h2", {
              style: {
                fontSize: "1.8rem",
                marginBottom: "1.5rem",
                color: "#1e40af",
                fontWeight: "bold",
              },
              children: "E. Rights of Investors",
            }),
            o.jsxs("ul", {
              style: {
                listStyle: "disc",
                paddingLeft: "2rem",
                marginBottom: "1.5rem",
              },
              children: [
                o.jsx("li", {
                  style: {
                    marginBottom: "0.75rem",
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                  },
                  children: "Right to Privacy and Confidentiality",
                }),
                o.jsx("li", {
                  style: {
                    marginBottom: "0.75rem",
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                  },
                  children: "Right to Transparent Practices",
                }),
                o.jsx("li", {
                  style: {
                    marginBottom: "0.75rem",
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                  },
                  children: "Right to fair and Equitable Treatment",
                }),
                o.jsx("li", {
                  style: {
                    marginBottom: "0.75rem",
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                  },
                  children: "Right to Adequate Information",
                }),
                o.jsxs("li", {
                  style: {
                    marginBottom: "0.75rem",
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                  },
                  children: [
                    "Right to Initial and Continuing Disclosure",
                    o.jsx("ul", {
                      style: {
                        listStyle: "none",
                        paddingLeft: "2rem",
                        marginTop: "0.5rem",
                      },
                      children: o.jsx("li", {
                        style: {
                          marginBottom: "0.5rem",
                          fontSize: "1.1rem",
                          lineHeight: 1.6,
                        },
                        children:
                          "- Right to receive information about all the statutory and regulatory disclosures",
                      }),
                    }),
                  ],
                }),
                o.jsx("li", {
                  style: {
                    marginBottom: "0.75rem",
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                  },
                  children: "Right to Fair & True Advertisement",
                }),
                o.jsx("li", {
                  style: {
                    marginBottom: "0.75rem",
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                  },
                  children:
                    "Right to Awareness about Service Parameters and Turnaround Times",
                }),
                o.jsx("li", {
                  style: {
                    marginBottom: "0.75rem",
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                  },
                  children:
                    "Right to be informed of the timelines for each service",
                }),
                o.jsx("li", {
                  style: {
                    marginBottom: "0.75rem",
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                  },
                  children:
                    "Right to be Heard and Satisfactory Grievance Redressal",
                }),
                o.jsx("li", {
                  style: {
                    marginBottom: "0.75rem",
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                  },
                  children: "Right to have timely redressal",
                }),
                o.jsx("li", {
                  style: {
                    marginBottom: "0.75rem",
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                  },
                  children: "Right to Exit from Financial product or service",
                }),
                o.jsx("li", {
                  style: {
                    marginBottom: "0.75rem",
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                  },
                  children:
                    "Right to receive clear guidance and caution notice when dealing in Complex and High-Risk Financial Products and Services",
                }),
                o.jsxs("li", {
                  style: {
                    marginBottom: "0.75rem",
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                  },
                  children: [
                    "Additional Rights to vulnerable consumers",
                    o.jsx("ul", {
                      style: {
                        listStyle: "none",
                        paddingLeft: "2rem",
                        marginTop: "0.5rem",
                      },
                      children: o.jsx("li", {
                        style: {
                          marginBottom: "0.5rem",
                          fontSize: "1.1rem",
                          lineHeight: 1.6,
                        },
                        children:
                          "- Right to get access to services in a suitable manner even if differently abled",
                      }),
                    }),
                  ],
                }),
                o.jsx("li", {
                  style: {
                    marginBottom: "0.75rem",
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                  },
                  children:
                    "Right to provide feedback on the financial products and services used",
                }),
                o.jsx("li", {
                  style: {
                    marginBottom: "0.75rem",
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                  },
                  children:
                    "Right against coercive, unfair, and one-sided clauses in financial agreements",
                }),
                o.jsx("li", {
                  style: {
                    marginBottom: "0.75rem",
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                  },
                  children:
                    "Right to enforceability and holding the Research Analyst responsible for monitoring, enforcing investor rights.",
                }),
              ],
            }),
          ],
        }),
        o.jsxs("section", {
          style: { marginBottom: "3rem" },
          children: [
            o.jsx("h2", {
              style: {
                fontSize: "1.8rem",
                marginBottom: "1.5rem",
                color: "#1e40af",
                fontWeight: "bold",
              },
              children:
                "F. Expectations from the investors (Responsibilities of investors)",
            }),
            o.jsxs("div", {
              style: { marginBottom: "1.5rem" },
              children: [
                o.jsx("h3", {
                  style: {
                    fontSize: "1.4rem",
                    marginBottom: "1rem",
                    color: "#333",
                  },
                  children: "Do's",
                }),
                o.jsxs("ul", {
                  style: {
                    listStyle: "disc",
                    paddingLeft: "2rem",
                    marginBottom: "1.5rem",
                  },
                  children: [
                    o.jsx("li", {
                      style: {
                        marginBottom: "0.75rem",
                        fontSize: "1.1rem",
                        lineHeight: 1.6,
                      },
                      children:
                        "Always deal with SEBI registered Research Analyst.",
                    }),
                    o.jsx("li", {
                      style: {
                        marginBottom: "0.75rem",
                        fontSize: "1.1rem",
                        lineHeight: 1.6,
                      },
                      children:
                        "Ensure that the Research Analyst has a valid registration certificate.",
                    }),
                    o.jsxs("li", {
                      style: {
                        marginBottom: "0.75rem",
                        fontSize: "1.1rem",
                        lineHeight: 1.6,
                      },
                      children: [
                        "Check for SEBI registration number. Please refer to the list of all SEBI registered Research Analysts, which is available on SEBI website at the following link: ",
                        o.jsx("a", {
                          href: "https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=14",
                          style: {
                            color: "#2563eb",
                            textDecoration: "underline",
                            wordBreak: "break-all",
                          },
                          children:
                            "https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=14",
                        }),
                      ],
                    }),
                    o.jsx("li", {
                      style: {
                        marginBottom: "0.75rem",
                        fontSize: "1.1rem",
                        lineHeight: 1.6,
                      },
                      children:
                        "Always pay attention towards disclosures made in the research reports before investing.",
                    }),
                    o.jsx("li", {
                      style: {
                        marginBottom: "0.75rem",
                        fontSize: "1.1rem",
                        lineHeight: 1.6,
                      },
                      children:
                        "Pay your Research Analyst through banking channels only and maintain duly signed receipts mentioning the details of your payments. You may make payment of fees through Centralized Fee Collection Mechanism (CeFCoM) of RAASB if research analyst has opted for the mechanism.",
                    }),
                    o.jsx("li", {
                      style: {
                        marginBottom: "0.75rem",
                        fontSize: "1.1rem",
                        lineHeight: 1.6,
                      },
                      children:
                        "Before buying securities or applying for public offers, check for the research recommendation provided by your Research Analyst.",
                    }),
                    o.jsx("li", {
                      style: {
                        marginBottom: "0.75rem",
                        fontSize: "1.1rem",
                        lineHeight: 1.6,
                      },
                      children:
                        "Ask all relevant questions and clear your doubts with your Research Analyst before acting on the recommendation.",
                    }),
                    o.jsx("li", {
                      style: {
                        marginBottom: "0.75rem",
                        fontSize: "1.1rem",
                        lineHeight: 1.6,
                      },
                      children:
                        "Seek clarifications and guidance on research recommendations from your Research Analyst, especially if it involves complex and high risk financial products and services.",
                    }),
                    o.jsx("li", {
                      style: {
                        marginBottom: "0.75rem",
                        fontSize: "1.1rem",
                        lineHeight: 1.6,
                      },
                      children:
                        "Always be aware that you have the right to stop availing the service of a Research Analyst as per the terms of service agreed between you and your Research Analyst.",
                    }),
                    o.jsx("li", {
                      style: {
                        marginBottom: "0.75rem",
                        fontSize: "1.1rem",
                        lineHeight: 1.6,
                      },
                      children:
                        "Always be aware that you have the right to provide feedback to your Research Analyst in respect of the services received.",
                    }),
                    o.jsx("li", {
                      style: {
                        marginBottom: "0.75rem",
                        fontSize: "1.1rem",
                        lineHeight: 1.6,
                      },
                      children:
                        "Always be aware that you will not be bound by any clause, prescribed by the Research Analyst, which is contravening any regulatory provisions.",
                    }),
                    o.jsx("li", {
                      style: {
                        marginBottom: "0.75rem",
                        fontSize: "1.1rem",
                        lineHeight: 1.6,
                      },
                      children:
                        "Inform SEBI about Research Analysts offering assured or guaranteed returns.",
                    }),
                    o.jsx("li", {
                      style: {
                        marginBottom: "0.75rem",
                        fontSize: "1.1rem",
                        lineHeight: 1.6,
                      },
                      children:
                        "Report any fraudulent persons or social media handles.",
                    }),
                  ],
                }),
              ],
            }),
            o.jsxs("div", {
              style: { marginBottom: "1.5rem" },
              children: [
                o.jsx("h3", {
                  style: {
                    fontSize: "1.4rem",
                    marginBottom: "1rem",
                    color: "#333",
                  },
                  children: "Don'ts",
                }),
                o.jsxs("ul", {
                  style: {
                    listStyle: "disc",
                    paddingLeft: "2rem",
                    marginBottom: "1.5rem",
                  },
                  children: [
                    o.jsx("li", {
                      style: {
                        marginBottom: "0.75rem",
                        fontSize: "1.1rem",
                        lineHeight: 1.6,
                      },
                      children:
                        "Do not provide funds for investment to the Research Analyst",
                    }),
                    o.jsx("li", {
                      style: {
                        marginBottom: "0.75rem",
                        fontSize: "1.1rem",
                        lineHeight: 1.6,
                      },
                      children:
                        "Don't fall prey to luring advertisements or market rumors.",
                    }),
                    o.jsx("li", {
                      style: {
                        marginBottom: "0.75rem",
                        fontSize: "1.1rem",
                        lineHeight: 1.6,
                      },
                      children:
                        "Do not get attracted to limited-period discounts or other incentives, gifts, etc., offered by the Research Analyst.",
                    }),
                    o.jsx("li", {
                      style: {
                        marginBottom: "0.75rem",
                        fontSize: "1.1rem",
                        lineHeight: 1.6,
                      },
                      children:
                        "Do not share login credentials and passwords of your trading and demat accounts with the Research Analyst.",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        o.jsxs("section", {
          style: {
            marginBottom: "3rem",
            backgroundColor: "#f8fafc",
            padding: "2rem",
            borderRadius: "8px",
            border: "1px solid #e2e8f0",
          },
          children: [
            o.jsx("h2", {
              style: {
                fontSize: "1.8rem",
                marginBottom: "1.5rem",
                color: "#dc2626",
                fontWeight: "bold",
                textAlign: "center",
              },
              children: "Beware of Frauds",
            }),
            o.jsx("h3", {
              style: {
                fontSize: "1.4rem",
                marginBottom: "1rem",
                textAlign: "center",
                color: "#333",
              },
              children: "Important Notice Regarding Fraudulent Activities",
            }),
            o.jsx("p", {
              style: {
                marginBottom: "1rem",
                fontSize: "1.1rem",
                lineHeight: 1.6,
              },
              children: "Dear Investor,",
            }),
            o.jsx("p", {
              style: {
                marginBottom: "1rem",
                fontSize: "1.1rem",
                lineHeight: 1.6,
              },
              children:
                "I am writing to inform you of a serious issue regarding several fraudulent individuals misusing my SEBI registration number, Aadhar card, PAN card to carry out illegal activities, including defrauding unsuspecting individuals. These fraudsters are use my details to create false associations and make unauthorized transactions in my name. Please be assured that these actions are not connected to me in any way, and I do not authorize anyone to act on my behalf.",
            }),
            o.jsx("p", {
              style: {
                marginBottom: "1rem",
                fontSize: "1.1rem",
                lineHeight: 1.6,
              },
              children:
                "Please note, I am not responsible for any such fraudulent activities. These actions are being carried out without my knowledge or authorization. I do not authorize anyone to use my personal or professional details in any manner.",
            }),
            o.jsx("p", {
              style: {
                marginBottom: "1rem",
                fontSize: "1.1rem",
                lineHeight: 1.6,
              },
              children:
                "To protect yourself and others from such fraud, I urge you to:",
            }),
            o.jsxs("ul", {
              style: {
                listStyle: "disc",
                paddingLeft: "2rem",
                marginBottom: "1.5rem",
              },
              children: [
                o.jsxs("li", {
                  style: {
                    marginBottom: "0.75rem",
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                  },
                  children: [
                    o.jsx("strong", { children: "Verify credentials:" }),
                    " Always ensure that you are interacting with me through my official communication channels. Be cautious of unsolicited calls, messages, or emails claiming to represent me.",
                  ],
                }),
                o.jsxs("li", {
                  style: {
                    marginBottom: "0.75rem",
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                  },
                  children: [
                    o.jsx("strong", {
                      children: "Report suspicious activities:",
                    }),
                    " If you come across any suspicious activity or communications using my SEBI number or personal details, please do not hesitate to report them immediately.",
                  ],
                }),
                o.jsxs("li", {
                  style: {
                    marginBottom: "0.75rem",
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                  },
                  children: [
                    o.jsx("strong", {
                      children: "Check SEBI's official records:",
                    }),
                    " You can verify my SEBI registration and other official details through the SEBI website or by contacting SEBI directly.",
                  ],
                }),
              ],
            }),
            o.jsxs("p", {
              style: {
                marginBottom: "1rem",
                fontSize: "1.1rem",
                lineHeight: 1.6,
              },
              children: [
                "If you have encountered any fraudulent activities or if you believe these scammers have targeted you, first, you can make Admin of this website aware by reaching on email on ",
                o.jsx("a", {
                  href: "mailto:analystnitinjain@gmail.com",
                  style: { color: "#2563eb", textDecoration: "underline" },
                  children: "analystnitinjain@gmail.com",
                }),
                " or whatsapp or direct call on ",
                o.jsx("a", {
                  href: "tel:+919810500000",
                  style: { color: "#2563eb", textDecoration: "underline" },
                  children: "+919810543689",
                }),
                ".",
              ],
            }),
            o.jsx("p", {
              style: {
                marginBottom: "1rem",
                fontSize: "1.1rem",
                lineHeight: 1.6,
              },
              children:
                "Further, I strongly encourage you to file a complaint with SEBI and cybercell or any such authorities to take appropriate action against the fraudster. Below are the steps to complain with SEBI:",
            }),
            o.jsxs("div", {
              style: { marginBottom: "1.5rem" },
              children: [
                o.jsx("h4", {
                  style: {
                    fontSize: "1.2rem",
                    marginBottom: "1rem",
                    color: "#333",
                  },
                  children: "How to File a Complaint with SEBI:",
                }),
                o.jsxs("ol", {
                  style: { listStyle: "decimal", paddingLeft: "2rem" },
                  children: [
                    o.jsxs("li", {
                      style: {
                        marginBottom: "0.5rem",
                        fontSize: "1.1rem",
                        lineHeight: 1.6,
                      },
                      children: [
                        o.jsx("strong", {
                          children:
                            "Visit the SEBI Complaint Redress System (SCORES):",
                        }),
                        " Go to the official SEBI website ",
                        o.jsx("a", {
                          href: "https://scores.gov.in",
                          style: {
                            color: "#2563eb",
                            textDecoration: "underline",
                          },
                          children: "https://scores.gov.in",
                        }),
                        ".",
                      ],
                    }),
                    o.jsxs("li", {
                      style: {
                        marginBottom: "0.5rem",
                        fontSize: "1.1rem",
                        lineHeight: 1.6,
                      },
                      children: [
                        o.jsx("strong", { children: "Register or log in:" }),
                        " Create an account or log in if you already have one.",
                      ],
                    }),
                    o.jsxs("li", {
                      style: {
                        marginBottom: "0.5rem",
                        fontSize: "1.1rem",
                        lineHeight: 1.6,
                      },
                      children: [
                        o.jsx("strong", { children: "File the Complaint:" }),
                        " Enter all necessary details about the fraudulent activity.",
                      ],
                    }),
                    o.jsxs("li", {
                      style: {
                        marginBottom: "0.5rem",
                        fontSize: "1.1rem",
                        lineHeight: 1.6,
                      },
                      children: [
                        o.jsx("strong", { children: "Reference Documents:" }),
                        " Attach any supporting documents that could help authorities to investigate the matter.",
                      ],
                    }),
                  ],
                }),
              ],
            }),
            o.jsxs("p", {
              style: {
                marginBottom: "1rem",
                fontSize: "1.1rem",
                lineHeight: 1.6,
              },
              children: [
                "You can also directly contact SEBI at their official helpline number: ",
                o.jsx("a", {
                  href: "tel:02226449000",
                  style: { color: "#2563eb", textDecoration: "underline" },
                  children: "022-26449000",
                }),
                " or via email at ",
                o.jsx("a", {
                  href: "mailto:sebi@sebi.gov.in",
                  style: { color: "#2563eb", textDecoration: "underline" },
                  children: "sebi@sebi.gov.in",
                }),
                ".",
              ],
            }),
            o.jsx("p", {
              style: {
                marginBottom: "1rem",
                fontSize: "1.1rem",
                lineHeight: 1.6,
              },
              children:
                "Please remain vigilant and report any such fraudulent activities to help us protect others from these scams. Thank you for your attention and cooperation.",
            }),
            o.jsxs("p", {
              style: { fontSize: "1.1rem", lineHeight: 1.6, marginTop: "2rem" },
              children: [
                "Sincerely,",
                o.jsx("br", {}),
                o.jsx("strong", { children: "Nitin Jain" }),
              ],
            }),
          ],
        }),
      ],
    }),
  Im = () =>
    o.jsxs("div", {
      style: {
        minHeight: "100vh",
        padding: "2rem",
        marginTop: "80px",
        maxWidth: "1200px",
        margin: "80px auto 0",
        fontFamily: "serif",
        color: "#333",
      },
      children: [
        o.jsx("h1", {
          style: {
            fontSize: "3rem",
            marginBottom: "1.5rem",
            fontWeight: "bold",
            fontFamily: "serif",
            color: "#121212",
            textAlign: "center",
          },
          children: "Code of Conduct",
        }),
        o.jsx("div", {
          style: {
            width: "100px",
            height: "3px",
            background: "#2563eb",
            margin: "0 auto 2rem",
          },
        }),
        o.jsxs("section", {
          style: { marginBottom: "2rem" },
          children: [
            o.jsx("p", {
              style: {
                fontSize: "1.4rem",
                lineHeight: 1.6,
                marginBottom: "2rem",
                textAlign: "center",
              },
              children:
                "Nitin Jain is a SEBI Registered Research Analyst vide Registration Number INH000010399 dated on October 27, 2022",
            }),
            o.jsx("p", {
              style: {
                fontSize: "1.3rem",
                lineHeight: 1.6,
                marginBottom: "2rem",
                textAlign: "center",
              },
              children:
                "In accordance to Regulation 24 (2) of the SEBI (Research Analyst) Regulations, 2014, I shall maintain the following the Code of Conduct:",
            }),
          ],
        }),
        o.jsx("section", {
          style: { marginBottom: "3rem", maxWidth: "900px", margin: "0 auto" },
          children: o.jsxs("ol", {
            style: {
              listStyleType: "decimal",
              paddingLeft: "1.5rem",
              fontSize: "1.25rem",
              lineHeight: 1.8,
            },
            children: [
              o.jsxs("li", {
                style: {
                  marginBottom: "1.5rem",
                  padding: "1.25rem",
                  backgroundColor: "#f8fafc",
                  borderRadius: "8px",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                },
                children: [
                  o.jsx("strong", {
                    style: { color: "#1e40af", fontSize: "1.3rem" },
                    children: "Honesty and Good Faith:",
                  }),
                  " I shall act honestly and in good faith.",
                ],
              }),
              o.jsxs("li", {
                style: {
                  marginBottom: "1.5rem",
                  padding: "1.25rem",
                  backgroundColor: "#f8fafc",
                  borderRadius: "8px",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                },
                children: [
                  o.jsx("strong", {
                    style: { color: "#1e40af", fontSize: "1.3rem" },
                    children: "Diligence:",
                  }),
                  " I shall act with due skill, care and diligence and shall ensure that the research report is prepared after thorough analysis.",
                ],
              }),
              o.jsxs("li", {
                style: {
                  marginBottom: "1.5rem",
                  padding: "1.25rem",
                  backgroundColor: "#f8fafc",
                  borderRadius: "8px",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                },
                children: [
                  o.jsx("strong", {
                    style: { color: "#1e40af", fontSize: "1.3rem" },
                    children: "Conflict of Interest:",
                  }),
                  " I shall effectively address conflict of interest which may affect the impartiality of research analysis and research report and shall make appropriate disclosures to address the same.",
                ],
              }),
              o.jsxs("li", {
                style: {
                  marginBottom: "1.5rem",
                  padding: "1.25rem",
                  backgroundColor: "#f8fafc",
                  borderRadius: "8px",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                },
                children: [
                  o.jsx("strong", {
                    style: { color: "#1e40af", fontSize: "1.3rem" },
                    children: "Insider Trading or front running:",
                  }),
                  " I shall not engage in insider trading or front running of my own research report.",
                ],
              }),
              o.jsxs("li", {
                style: {
                  marginBottom: "1.5rem",
                  padding: "1.25rem",
                  backgroundColor: "#f8fafc",
                  borderRadius: "8px",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                },
                children: [
                  o.jsx("strong", {
                    style: { color: "#1e40af", fontSize: "1.3rem" },
                    children: "Confidentiality:",
                  }),
                  " I shall maintain confidentiality of report till the report is made public.",
                ],
              }),
              o.jsxs("li", {
                style: {
                  marginBottom: "1.5rem",
                  padding: "1.25rem",
                  backgroundColor: "#f8fafc",
                  borderRadius: "8px",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                },
                children: [
                  o.jsx("strong", {
                    style: { color: "#1e40af", fontSize: "1.3rem" },
                    children: "Professional Standard:",
                  }),
                  " I am engaged in research analysis and shall observe high professional standard while preparing research report.",
                ],
              }),
              o.jsxs("li", {
                style: {
                  marginBottom: "1.5rem",
                  padding: "1.25rem",
                  backgroundColor: "#f8fafc",
                  borderRadius: "8px",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                },
                children: [
                  o.jsx("strong", {
                    style: { color: "#1e40af", fontSize: "1.3rem" },
                    children: "Compliance:",
                  }),
                  " I shall comply with all regulatory requirements applicable to the conduct of its business activities.",
                ],
              }),
              o.jsxs("li", {
                style: {
                  marginBottom: "1.5rem",
                  padding: "1.25rem",
                  backgroundColor: "#f8fafc",
                  borderRadius: "8px",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                },
                children: [
                  o.jsx("strong", {
                    style: { color: "#1e40af", fontSize: "1.3rem" },
                    children: "Responsibility of senior management:",
                  }),
                  " I shall bear primary responsibility of senior management for ensuring the maintenance of appropriate standards of conduct and adherence to proper procedures.",
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  Pm = () => {
    const [x, D] = he.useState(!1),
      j = () => {
        D(!x);
      };
    return o.jsxs("div", {
      style: {
        minHeight: "100vh",
        padding: "2rem",
        marginTop: "80px",
        maxWidth: "1000px",
        margin: "80px auto 0",
        fontFamily: "serif",
        color: "#333",
      },
      children: [
        o.jsx("h1", {
          style: {
            fontSize: "3rem",
            marginBottom: "1.5rem",
            fontWeight: "bold",
            fontFamily: "serif",
            color: "#121212",
            textAlign: "center",
          },
          children: "Frequently Asked Questions",
        }),
        o.jsx("div", {
          style: {
            width: "100px",
            height: "3px",
            background: "#2563eb",
            margin: "0 auto 2rem",
          },
        }),
        o.jsx("div", {
          style: {
            textAlign: "center",
            marginBottom: "3rem",
            fontSize: "1.3rem",
            lineHeight: "1.6",
          },
          children: o.jsxs("p", {
            children: [
              "Please reach us at ",
              o.jsx("a", {
                href: "mailto:analystnitinjain@gmail.com",
                style: { color: "#2563eb", fontWeight: "bold" },
                children: "analystnitinjain@gmail.com",
              }),
              " if you cannot find an answer to your question. We will get back within 24 hours.",
            ],
          }),
        }),
        o.jsxs("div", {
          style: {
            marginBottom: "2rem",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            overflow: "hidden",
          },
          children: [
            o.jsxs("div", {
              onClick: j,
              style: {
                padding: "1.5rem",
                backgroundColor: "#f8fafc",
                borderBottom: x ? "1px solid #e2e8f0" : "none",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
              },
              children: [
                o.jsx("h3", {
                  style: {
                    fontSize: "1.3rem",
                    fontWeight: "bold",
                    color: "#333",
                    margin: 0,
                  },
                  children:
                    "How do I verify genuine Research Analyst so as to not fall prey to impersonation fraud?",
                }),
                o.jsx("span", {
                  style: {
                    fontSize: "1.5rem",
                    transition: "transform 0.3s ease",
                    transform: x ? "rotate(180deg)" : "rotate(0deg)",
                  },
                  children: "▼",
                }),
              ],
            }),
            x &&
              o.jsx("div", {
                style: {
                  padding: "1.5rem",
                  fontSize: "1.2rem",
                  lineHeight: "1.6",
                  backgroundColor: "white",
                },
                children: o.jsxs("p", {
                  children: [
                    "Please click ",
                    o.jsx("a", {
                      href: "/investor-charter",
                      style: { color: "#2563eb", textDecoration: "underline" },
                      children: "here",
                    }),
                    ' and refer to "Important Notice Regarding Fraudulent Activities". Ensure the correct registered RA details including contact number on SEBI ',
                    o.jsx("a", {
                      href: "https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=14",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      style: { color: "#2563eb", textDecoration: "underline" },
                      children: "website",
                    }),
                    ".",
                  ],
                }),
              }),
          ],
        }),
      ],
    });
  },
  e0 = () => (
    he.useEffect(() => {
      window.scrollTo(0, 0);
    }, []),
    o.jsxs("div", {
      style: {
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "120px 24px 64px",
        minHeight: "calc(100vh - 300px)",
      },
      children: [
        o.jsx("h1", {
          style: {
            fontSize: "36px",
            fontWeight: "700",
            marginBottom: "32px",
            textAlign: "center",
            fontFamily: "serif",
            color: "#121212",
          },
          children: "Grievance Redressal",
        }),
        o.jsxs("div", {
          style: {
            maxWidth: "800px",
            margin: "0 auto",
            fontSize: "18px",
            lineHeight: "1.6",
            color: "#333",
          },
          children: [
            o.jsx("p", {
              style: {
                marginBottom: "24px",
                fontSize: "20px",
                fontWeight: "500",
              },
              children:
                "Here are the steps a client can follow in case of grievance or feedback:",
            }),
            o.jsx("div", {
              style: {
                padding: "24px",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                background: "#fff",
                marginBottom: "32px",
              },
              children: o.jsxs("p", {
                style: {
                  marginBottom: "16px",
                  fontSize: "18px",
                  lineHeight: "1.7",
                },
                children: [
                  o.jsx("strong", { children: "1." }),
                  " If you are not satisfied with my services or would like a discussion on the matter or pass on a feedback, please reach out on the details mentioned in ",
                  o.jsx("a", {
                    href: "/contact",
                    style: {
                      color: "#2563eb",
                      textDecoration: "none",
                      fontWeight: "500",
                    },
                    children: "contact us",
                  }),
                  " section through either email or phone or whatsapp. You will receive first response within 24 hours seeking further details if any. Rest assured that your complaint will be tried for best possible resolution or atleast any update within 7 working days after thoroughly revisiting all aspects of your submission.",
                ],
              }),
            }),
            o.jsxs("div", {
              style: {
                padding: "24px",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                background: "#fff",
                marginBottom: "32px",
              },
              children: [
                o.jsxs("p", {
                  style: {
                    marginBottom: "16px",
                    fontSize: "18px",
                    lineHeight: "1.7",
                  },
                  children: [
                    o.jsx("strong", { children: "2." }),
                    " Under the unfortunate circumstances wherein if you do not hear back as per above timelines or your complaint is not resolved to satisfaction, you may refer your complaint to the regulator through below mechanisms established by The Securities and Exchange Board of India (SEBI).",
                  ],
                }),
                o.jsxs("ul", {
                  style: {
                    paddingLeft: "24px",
                    fontSize: "18px",
                    lineHeight: "1.7",
                  },
                  children: [
                    o.jsxs("li", {
                      style: { marginBottom: "12px" },
                      children: [
                        o.jsx("strong", { children: "SCORES" }),
                        " - ",
                        o.jsx("a", {
                          href: "https://www.scores.sebi.gov.in",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          style: {
                            color: "#2563eb",
                            textDecoration: "none",
                            fontWeight: "500",
                          },
                          children: "www.scores.sebi.gov.in",
                        }),
                      ],
                    }),
                    o.jsxs("li", {
                      children: [
                        o.jsx("strong", { children: "ODR Portal" }),
                        " - ",
                        o.jsx("a", {
                          href: "https://www.smartodr.in",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          style: {
                            color: "#2563eb",
                            textDecoration: "none",
                            fontWeight: "500",
                          },
                          children: "www.smartodr.in",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    })
  ),
  t0 = () => (
    he.useEffect(() => {
      window.scrollTo(0, 0);
    }, []),
    o.jsxs("div", {
      style: {
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "120px 24px 64px",
        minHeight: "calc(100vh - 300px)",
      },
      children: [
        o.jsx("h1", {
          style: {
            fontSize: "36px",
            fontWeight: "700",
            marginBottom: "32px",
            textAlign: "center",
            fontFamily: "serif",
            color: "#121212",
          },
          children: "Disclosures & Privacy Policy",
        }),
        o.jsxs("div", {
          style: {
            maxWidth: "800px",
            margin: "0 auto",
            fontSize: "18px",
            lineHeight: "1.6",
            color: "#333",
          },
          children: [
            o.jsx("p", {
              style: { marginBottom: "24px" },
              children:
                "Nitin Jain offers independent equity research services to retail clients as well as corporate clients on subscription basis.",
            }),
            o.jsx("div", {
              style: {
                padding: "24px",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                background: "#fff",
                marginBottom: "32px",
              },
              children: o.jsxs("p", {
                style: {
                  marginBottom: "16px",
                  fontSize: "17px",
                  lineHeight: "1.7",
                },
                children: [
                  "Use of the information herein is at one's own risk. This is not an offer to sell or solicitation to buy any securities and Nitin Jain (owner of website, analystnitinjain.com and email: ",
                  o.jsx("a", {
                    href: "mailto:analystnitinjain@gmail.com",
                    style: {
                      color: "#2563eb",
                      textDecoration: "none",
                      fontWeight: "500",
                    },
                    children: "analystnitinjain@gmail.com",
                  }),
                  ') will not be liable for any losses incurred or investment(s) made or decisions taken/or not taken based on the information provided herein. Information contained herein does not constitute a personal recommendation or take into account the particular investment objectives, financial situations, or needs of individual investors. Before acting on any recommendation, investors should consider whether it is suitable for their particular circumstances and, if necessary, seek an independent professional advice. All content and information is provided on an "As is" basis by analystnitinjain.com. Information herein is believed to be reliable but analystnitinjain.com does not warrant its completeness or accuracy and expressly disclaims all warranties and conditions of any kind, whether express or implied. analystnitinjain.com, its proprietor may hold shares in the company/ies discussed herein.',
                ],
              }),
            }),
            o.jsx("h2", {
              style: {
                fontSize: "24px",
                fontWeight: "600",
                marginBottom: "24px",
                fontFamily: "serif",
                color: "#121212",
              },
              children: "Privacy Policy",
            }),
            o.jsx("div", {
              style: {
                padding: "24px",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                background: "#fff",
                marginBottom: "32px",
              },
              children: o.jsxs("ul", {
                style: {
                  paddingLeft: "20px",
                  fontSize: "17px",
                  lineHeight: "1.7",
                },
                children: [
                  o.jsx("li", {
                    style: { marginBottom: "16px" },
                    children:
                      "We take KYC documents from our clients, i.e. name, email, phone number, PAN Card, State before they sign up for our services. This is taken through a third party partner.",
                  }),
                  o.jsx("li", {
                    style: { marginBottom: "16px" },
                    children:
                      "We retain records relating to the services that we provide so that we are better able to assist our clients with their needs and to comply with professional guidelines or requirements of law.",
                  }),
                  o.jsx("li", {
                    style: { marginBottom: "16px" },
                    children:
                      "We maintain physical, electronic, and procedural safeguards that comply with federal and state regulation/ act to guard our clients' non-public personal information.",
                  }),
                  o.jsx("li", {
                    style: { marginBottom: "16px" },
                    children:
                      "We protect the confidentiality of clients' Mobile Number, Name, and Address & Email Id to prohibit unlawful disclosure of our data, and limit access to our clients' data in the same manner as we do all other non-public personal information.",
                  }),
                  o.jsx("li", {
                    style: { marginBottom: "16px" },
                    children:
                      "Documents and information containing any non public personal information are safeguarded and not disclosed to anyone, unless authorized by the client or required by law.",
                  }),
                  o.jsx("li", {
                    style: { marginBottom: "16px" },
                    children:
                      "We restrict access of client data only to those employees and partners who are involved in offering and administering the products and services we offer.",
                  }),
                  o.jsx("li", {
                    style: { marginBottom: "16px" },
                    children:
                      "We train our employees in the importance of maintaining confidentiality and customer privacy.",
                  }),
                  o.jsx("li", {
                    style: { marginBottom: "16px" },
                    children:
                      "We have agreements with our partners which to safeguard client confidentiality and customer privacy.",
                  }),
                  o.jsx("li", {
                    style: { marginBottom: "16px" },
                    children:
                      "We destroy, erase or make unreadable documentation containing Clients data and/or other non-public personal information prior to its disposal.",
                  }),
                  o.jsx("li", {
                    style: { marginBottom: "16px" },
                    children:
                      "We continuously monitor and make adjustments to this Client Personal Information Protection Policy as necessary.",
                  }),
                  o.jsx("li", {
                    style: { marginBottom: "0" },
                    children:
                      "Nitin Jain has a contractual arrangement with vendors whereby the vendors provide technology solutions and related back-end infrastructure along with support for back-office related operations & processes. The vendors do not provide any investment advice or recommendation nor does it make any claim of returns or performance with respect to any advice or recommendation.",
                  }),
                ],
              }),
            }),
            o.jsx("div", {
              style: { textAlign: "center", marginTop: "32px" },
              children: o.jsxs("p", {
                style: { fontSize: "17px" },
                children: [
                  "For any questions regarding this privacy policy, please contact: ",
                  o.jsx("a", {
                    href: "mailto:analystnitinjain@gmail.com",
                    style: {
                      color: "#2563eb",
                      textDecoration: "none",
                      fontWeight: "500",
                    },
                    children: "analystnitinjain@gmail.com",
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    })
  ),
  n0 = () => {
    he.useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    const x = {
        width: "100%",
        borderCollapse: "collapse",
        marginBottom: "40px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: "4px",
        overflow: "hidden",
      },
      D = {
        backgroundColor: "#0a1172",
        color: "white",
        padding: "12px 16px",
        textAlign: "center",
        fontWeight: "bold",
        border: "1px solid #e5e7eb",
      },
      j = {
        padding: "12px 16px",
        textAlign: "center",
        border: "1px solid #e5e7eb",
      },
      y = {
        fontSize: "24px",
        fontWeight: "700",
        marginBottom: "24px",
        textAlign: "center",
        fontFamily: "serif",
        color: "#121212",
      };
    return o.jsxs("div", {
      style: {
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "120px 24px 64px",
        minHeight: "calc(100vh - 300px)",
      },
      children: [
        o.jsx("h1", {
          style: {
            fontSize: "36px",
            fontWeight: "700",
            marginBottom: "32px",
            textAlign: "center",
            fontFamily: "serif",
            color: "#121212",
          },
          children: "Complaints Data",
        }),
        o.jsxs("div", {
          style: {
            maxWidth: "1000px",
            margin: "0 auto",
            fontSize: "16px",
            lineHeight: "1.6",
            color: "#333",
            overflowX: "auto",
          },
          children: [
            o.jsx("h2", {
              style: y,
              children: "Data for the Month Ending September 2025",
            }),
            o.jsxs("table", {
              style: x,
              children: [
                o.jsx("thead", {
                  children: o.jsxs("tr", {
                    children: [
                      o.jsx("th", { style: D, children: "Sr. No." }),
                      o.jsx("th", { style: D, children: "Received from" }),
                      o.jsx("th", {
                        style: D,
                        children: "Pending at the end of last month",
                      }),
                      o.jsx("th", { style: D, children: "Received" }),
                      o.jsx("th", { style: D, children: "Resolved" }),
                      o.jsx("th", { style: D, children: "Total Pending" }),
                      o.jsx("th", {
                        style: D,
                        children: "Pending complaints > 3 months",
                      }),
                      o.jsx("th", {
                        style: D,
                        children: "Average Resolution time (in days)",
                      }),
                    ],
                  }),
                }),
                o.jsxs("tbody", {
                  children: [
                    o.jsxs("tr", {
                      children: [
                        o.jsx("td", { style: j, children: "1" }),
                        o.jsx("td", {
                          style: j,
                          children: "Directly from Investors",
                        }),
                        o.jsx("td", { style: j, children: "0" }),
                        o.jsx("td", { style: j, children: "0" }),
                        o.jsx("td", { style: j, children: "0" }),
                        o.jsx("td", { style: j, children: "0" }),
                        o.jsx("td", { style: j, children: "0" }),
                        o.jsx("td", { style: j, children: "-" }),
                      ],
                    }),
                    o.jsxs("tr", {
                      children: [
                        o.jsx("td", { style: j, children: "2" }),
                        o.jsx("td", { style: j, children: "SEBI (SCORES)" }),
                        o.jsx("td", { style: j, children: "0" }),
                        o.jsx("td", { style: j, children: "0" }),
                        o.jsx("td", { style: j, children: "0" }),
                        o.jsx("td", { style: j, children: "0" }),
                        o.jsx("td", { style: j, children: "0" }),
                        o.jsx("td", { style: j, children: "-" }),
                      ],
                    }),
                    o.jsxs("tr", {
                      children: [
                        o.jsx("td", { style: j, children: "3" }),
                        o.jsx("td", { style: j, children: "Other Sources" }),
                        o.jsx("td", { style: j, children: "0" }),
                        o.jsx("td", { style: j, children: "0" }),
                        o.jsx("td", { style: j, children: "0" }),
                        o.jsx("td", { style: j, children: "0" }),
                        o.jsx("td", { style: j, children: "0" }),
                        o.jsx("td", { style: j, children: "-" }),
                      ],
                    }),
                    o.jsxs("tr", {
                      children: [
                        o.jsx("td", {
                          style: { ...j, fontWeight: "bold" },
                          children: "Grand Total",
                        }),
                        o.jsx("td", { style: j }),
                        o.jsx("td", { style: j, children: "0" }),
                        o.jsx("td", { style: j, children: "0" }),
                        o.jsx("td", { style: j, children: "0" }),
                        o.jsx("td", { style: j, children: "0" }),
                        o.jsx("td", { style: j, children: "0" }),
                        o.jsx("td", { style: j, children: "-" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            o.jsx("h2", {
              style: y,
              children: "Trend of Monthly Disposal of Complaints",
            }),
            o.jsxs("table", {
              style: x,
              children: [
                o.jsx("thead", {
                  children: o.jsxs("tr", {
                    children: [
                      o.jsx("th", { style: D, children: "Sr. No." }),
                      o.jsx("th", { style: D, children: "Month" }),
                      o.jsx("th", {
                        style: D,
                        children: "Carried forward from previous month",
                      }),
                      o.jsx("th", { style: D, children: "Received" }),
                      o.jsx("th", { style: D, children: "Resolved" }),
                      o.jsx("th", { style: D, children: "Pending" }),
                    ],
                  }),
                }),
                o.jsxs("tbody", {
                  children: [
                    o.jsxs("tr", {
                      children: [
                        o.jsx("td", { style: j, children: "1" }),
                        o.jsx("td", { style: j, children: "March 2025" }),
                        o.jsx("td", { style: j, children: "0" }),
                        o.jsx("td", { style: j, children: "0" }),
                        o.jsx("td", { style: j, children: "0" }),
                        o.jsx("td", { style: j, children: "0" }),
                      ],
                    }),
                    o.jsxs("tr", {
                      children: [
                        o.jsx("td", { style: j, children: "2" }),
                        o.jsx("td", { style: j, children: "Apirl 2025" }),
                        o.jsx("td", { style: j, children: "0" }),
                        o.jsx("td", { style: j, children: "0" }),
                        o.jsx("td", { style: j, children: "0" }),
                        o.jsx("td", { style: j, children: "0" }),
                      ],
                    }),
                    o.jsxs("tr", {
                      children: [
                        o.jsx("td", { style: j, children: "3" }),
                        o.jsx("td", { style: j, children: "May 2025" }),
                        o.jsx("td", { style: j, children: "0" }),
                        o.jsx("td", { style: j, children: "0" }),
                        o.jsx("td", { style: j, children: "0" }),
                        o.jsx("td", { style: j, children: "0" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            o.jsx("h2", {
              style: y,
              children: "Trend of Annual Disposal of Complaints",
            }),
            o.jsxs("table", {
              style: x,
              children: [
                o.jsx("thead", {
                  children: o.jsxs("tr", {
                    children: [
                      o.jsx("th", { style: D, children: "Sr. No." }),
                      o.jsx("th", { style: D, children: "Year" }),
                      o.jsx("th", {
                        style: D,
                        children: "Carried forward from previous year",
                      }),
                      o.jsx("th", { style: D, children: "Received" }),
                      o.jsx("th", { style: D, children: "Resolved" }),
                      o.jsx("th", { style: D, children: "Pending" }),
                    ],
                  }),
                }),
                o.jsx("tbody", {
                  children: o.jsxs("tr", {
                    children: [
                      o.jsx("td", { style: j, children: "1" }),
                      o.jsx("td", { style: j, children: "2024-25" }),
                      o.jsx("td", { style: j, children: "0" }),
                      o.jsx("td", { style: j, children: "2" }),
                      o.jsx("td", { style: j, children: "2" }),
                      o.jsx("td", { style: j, children: "0" }),
                    ],
                  }),
                }),
              ],
            }),
            o.jsx("div", {
              style: {
                marginTop: "40px",
                fontSize: "14px",
                color: "#666",
                textAlign: "center",
              },
              children: o.jsx("p", { children: "Last Updated: 30th Sep 2025" }),
            }),
          ],
        }),
      ],
    });
  },
  l0 = () => (
    he.useEffect(() => {
      window.scrollTo(0, 0);
    }, []),
    o.jsxs("div", {
      style: {
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "120px 24px 64px",
        minHeight: "calc(100vh - 300px)",
      },
      children: [
        o.jsx("h1", {
          style: {
            fontSize: "36px",
            fontWeight: "700",
            marginBottom: "32px",
            textAlign: "center",
            fontFamily: "serif",
            color: "#121212",
          },
          children: "Cancellation & Refunds Policy",
        }),
        o.jsxs("div", {
          style: {
            maxWidth: "800px",
            margin: "0 auto",
            fontSize: "18px",
            lineHeight: "1.6",
            color: "#333",
          },
          children: [
            o.jsxs("div", {
              style: {
                padding: "24px",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                background: "#fff",
                marginBottom: "32px",
              },
              children: [
                o.jsxs("p", {
                  style: {
                    marginBottom: "24px",
                    fontSize: "17px",
                    lineHeight: "1.7",
                  },
                  children: [
                    "There is no provision for any refund or cancellations for the services offered by investkaps through its website ",
                    o.jsx("a", {
                      href: "https://www.analystnitinjain.com",
                      style: {
                        color: "#2563eb",
                        textDecoration: "none",
                        fontWeight: "500",
                      },
                      children: "www.analystnitinjain.com",
                    }),
                    ", its subdomains or its associate or affiliate channels.",
                  ],
                }),
                o.jsxs("p", {
                  style: {
                    marginBottom: "24px",
                    fontSize: "17px",
                    lineHeight: "1.7",
                  },
                  children: [
                    "Therefore, I request you to read through all the information including frequently asked questions (FAQs) about the scope of the service before subscribing. Thereafter, if you have any queries, then please feel free to write to me at ",
                    o.jsx("a", {
                      href: "mailto:analystnitinjain@gmail.com",
                      style: {
                        color: "#2563eb",
                        textDecoration: "none",
                        fontWeight: "500",
                      },
                      children: "analystnitinjain@gmail.com",
                    }),
                    " before you make any purchase.",
                  ],
                }),
                o.jsx("p", {
                  style: {
                    fontSize: "17px",
                    lineHeight: "1.7",
                    fontWeight: "500",
                  },
                  children:
                    "By availing of services, you agree to the condition of no cancellations or refunds.",
                }),
              ],
            }),
            o.jsxs("div", {
              style: {
                padding: "24px",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                background: "#fff",
                marginBottom: "32px",
              },
              children: [
                o.jsx("h2", {
                  style: {
                    fontSize: "22px",
                    fontWeight: "600",
                    marginBottom: "20px",
                    fontFamily: "serif",
                    color: "#121212",
                  },
                  children: "Why We Have This Policy",
                }),
                o.jsxs("ul", {
                  style: {
                    paddingLeft: "20px",
                    fontSize: "17px",
                    lineHeight: "1.7",
                  },
                  children: [
                    o.jsx("li", {
                      style: { marginBottom: "16px" },
                      children:
                        "Our services provide access to proprietary investment research and analysis that represents intellectual property.",
                    }),
                    o.jsx("li", {
                      style: { marginBottom: "16px" },
                      children:
                        'Once our research and analysis have been delivered, the information cannot be "returned" as it has already been accessed.',
                    }),
                    o.jsx("li", {
                      style: { marginBottom: "16px" },
                      children:
                        "We dedicate significant resources to create high-quality, detailed analysis tailored to our subscribers' needs.",
                    }),
                    o.jsx("li", {
                      style: { marginBottom: "0" },
                      children:
                        "The value of our subscription is in the expertise, insights, and ongoing support provided throughout the subscription period.",
                    }),
                  ],
                }),
              ],
            }),
            o.jsxs("div", {
              style: {
                padding: "24px",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                background: "#fff",
                marginBottom: "32px",
              },
              children: [
                o.jsx("h2", {
                  style: {
                    fontSize: "22px",
                    fontWeight: "600",
                    marginBottom: "20px",
                    fontFamily: "serif",
                    color: "#121212",
                  },
                  children: "Before You Subscribe",
                }),
                o.jsx("p", {
                  style: {
                    marginBottom: "16px",
                    fontSize: "17px",
                    lineHeight: "1.7",
                  },
                  children:
                    "We recommend the following steps before making a purchase:",
                }),
                o.jsxs("ul", {
                  style: {
                    paddingLeft: "20px",
                    fontSize: "17px",
                    lineHeight: "1.7",
                  },
                  children: [
                    o.jsxs("li", {
                      style: { marginBottom: "16px" },
                      children: [
                        "Review our ",
                        o.jsx("a", {
                          href: "/free-content",
                          style: {
                            color: "#2563eb",
                            textDecoration: "none",
                            fontWeight: "500",
                          },
                          children: "free content",
                        }),
                        " to better understand our analysis style and approach",
                      ],
                    }),
                    o.jsxs("li", {
                      style: { marginBottom: "16px" },
                      children: [
                        "Read through our comprehensive ",
                        o.jsx("a", {
                          href: "/faq",
                          style: {
                            color: "#2563eb",
                            textDecoration: "none",
                            fontWeight: "500",
                          },
                          children: "FAQ section",
                        }),
                      ],
                    }),
                    o.jsx("li", {
                      style: { marginBottom: "16px" },
                      children:
                        "Understand the specific benefits and limitations of the subscription package you are interested in",
                    }),
                    o.jsxs("li", {
                      style: { marginBottom: "0" },
                      children: [
                        "Contact us at ",
                        o.jsx("a", {
                          href: "mailto:analystnitinjain@gmail.com",
                          style: {
                            color: "#2563eb",
                            textDecoration: "none",
                            fontWeight: "500",
                          },
                          children: "analystnitinjain@gmail.com",
                        }),
                        " with any questions prior to subscription",
                      ],
                    }),
                  ],
                }),
              ],
            }),
            o.jsx("div", {
              style: { textAlign: "center", marginTop: "32px" },
              children: o.jsxs("p", {
                style: { fontSize: "17px" },
                children: [
                  "For any questions regarding this policy, please contact: ",
                  o.jsx("a", {
                    href: "mailto:analystnitinjain@gmail.com",
                    style: {
                      color: "#2563eb",
                      textDecoration: "none",
                      fontWeight: "500",
                    },
                    children: "analystnitinjain@gmail.com",
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    })
  ),
  i0 = () => (
    he.useEffect(() => {
      window.scrollTo(0, 0);
    }, []),
    o.jsxs("div", {
      style: {
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "120px 24px 64px",
        minHeight: "calc(100vh - 300px)",
      },
      children: [
        o.jsx("h1", {
          style: {
            fontSize: "36px",
            fontWeight: "700",
            marginBottom: "32px",
            textAlign: "center",
            fontFamily: "serif",
            color: "#121212",
          },
          children: "Terms & Conditions",
        }),
        o.jsxs("div", {
          style: {
            maxWidth: "800px",
            margin: "0 auto",
            fontSize: "18px",
            lineHeight: "1.6",
            color: "#333",
          },
          children: [
            o.jsxs("section", {
              style: { marginBottom: "32px" },
              children: [
                o.jsx("h2", {
                  style: {
                    fontSize: "24px",
                    fontWeight: "600",
                    marginBottom: "24px",
                    fontFamily: "serif",
                    color: "#121212",
                  },
                  children: "Social Media Disclaimer",
                }),
                o.jsxs("div", {
                  style: {
                    padding: "24px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                    background: "#fff",
                    marginBottom: "32px",
                    fontSize: "17px",
                    lineHeight: "1.7",
                  },
                  children: [
                    o.jsx("p", {
                      style: { marginBottom: "16px" },
                      children:
                        "I, Nitin Jain, am registered with SEBI as an Individual Research Analyst under the registration number INH000010399, effective from Oct 27, 2022.",
                    }),
                    o.jsx("p", {
                      style: { marginBottom: "16px" },
                      children:
                        "I offer paid research services to my clients based on this certification. Opinions expressed otherwise regarding specific securities are not investment advice and shall not be treated as recommendations. Neither I nor my associates/ employees shall be liable for any losses incurred based on such opinions.",
                    }),
                    o.jsx("p", {
                      style: { marginBottom: "16px" },
                      children:
                        "Any matter displayed outside a research report is purely for Illustrative, Knowledge and Informational purposes and shall not be treated as advice or opinion of any kind. The content presented should not be construed as investment advice unless explicitly stated in a client-specific research report. I or my employees/associates shall not be held liable/responsible in any manner whatsoever for any losses the readers may incur due to acting upon this content.",
                    }),
                    o.jsx("p", {
                      style: { marginBottom: "16px" },
                      children:
                        "I make no warranties or guarantees regarding the accuracy, completeness, or timeliness of the information such information, including data such as news, prices, and analysis. In no event, shall I be liable to any person for any decision made or action taken in reliance upon the information provided by me.",
                    }),
                    o.jsxs("p", {
                      style: { marginBottom: "16px" },
                      children: [
                        "Paid clients receive detailed research reports and detailed analysis of all my research. For stock/company-specific investment recommendations, please refer Services Page or email me at ",
                        o.jsx("a", {
                          href: "mailto:analystnitinjain@gmail.com",
                          style: {
                            color: "#2563eb",
                            textDecoration: "underline",
                            fontWeight: "500",
                          },
                          children: "analystnitinjain@gmail.com",
                        }),
                        ". Any opinion expressed outside a research report by me otherwise does not constitute a recommendation to buy/ sell and is for illustrative and for general informational purposes.",
                      ],
                    }),
                    o.jsx("p", {
                      style: { marginBottom: "16px" },
                      children:
                        "Investment in the securities market is subject to market risks. Read all the related documents carefully before investing.",
                    }),
                    o.jsx("p", {
                      style: { marginBottom: "16px" },
                      children:
                        "Registration granted by SEBI and certification from NISM in no way guarantee the performance of the intermediary or provide any assurance of returns to investors.",
                    }),
                    o.jsx("p", {
                      style: { marginBottom: "16px" },
                      children:
                        "The securities quoted outside a research report are for illustration only and are not recommendatory.",
                    }),
                    o.jsxs("p", {
                      style: { marginBottom: "0" },
                      children: [
                        "By visiting our site you are agreeing to be bound by the following terms and conditions. We may change these terms and conditions at any time. Your continued use of ",
                        o.jsx("a", {
                          href: "https://www.analystnitinjain.com",
                          style: {
                            color: "#2563eb",
                            textDecoration: "underline",
                            fontWeight: "500",
                          },
                          children: "www.analystnitinjain.com",
                        }),
                        " means that you accept any new or modified terms and conditions that we come up with. The term ",
                        o.jsx("a", {
                          href: "https://www.analystnitinjain.com",
                          style: {
                            color: "#2563eb",
                            textDecoration: "underline",
                            fontWeight: "500",
                          },
                          children: "www.analystnitinjain.com",
                        }),
                        " is used through this entire Terms of Use document to refer to the website, its owners and the employees and associates of the owner.",
                      ],
                    }),
                  ],
                }),
              ],
            }),
            o.jsxs("section", {
              style: { marginBottom: "32px" },
              children: [
                o.jsx("h2", {
                  style: {
                    fontSize: "24px",
                    fontWeight: "600",
                    marginBottom: "24px",
                    fontFamily: "serif",
                    color: "#121212",
                  },
                  children: "Registration",
                }),
                o.jsx("div", {
                  style: {
                    padding: "24px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                    background: "#fff",
                    marginBottom: "32px",
                    fontSize: "17px",
                    lineHeight: "1.7",
                  },
                  children: o.jsxs("p", {
                    style: { marginBottom: "0" },
                    children: [
                      "By registering, you certify that all information you provide, now or in the future, is accurate and complete. ",
                      o.jsx("a", {
                        href: "https://www.analystnitinjain.com",
                        style: {
                          color: "#2563eb",
                          textDecoration: "underline",
                          fontWeight: "500",
                        },
                        children: "www.analystnitinjain.com",
                      }),
                      " reserves the right, in its sole discretion, to deny you access to this website or any portion thereof without notice for the following reasons: (a) Immediately by ",
                      o.jsx("a", {
                        href: "https://www.analystnitinjain.com",
                        style: {
                          color: "#2563eb",
                          textDecoration: "underline",
                          fontWeight: "500",
                        },
                        children: "www.analystnitinjain.com",
                      }),
                      " for any unauthorized access or use by you; (b) Immediately by ",
                      o.jsx("a", {
                        href: "https://www.analystnitinjain.com",
                        style: {
                          color: "#2563eb",
                          textDecoration: "underline",
                          fontWeight: "500",
                        },
                        children: "www.analystnitinjain.com",
                      }),
                      " if you assign or transfer (or attempt the same) any rights granted to you under this Agreement; (c) Immediately, if you violate any of the other terms and conditions of this User Agreement. I agree to receive periodic research reports and to be added to the Telegram channel/s for updates and further communications.",
                    ],
                  }),
                }),
              ],
            }),
            o.jsxs("section", {
              style: { marginBottom: "32px" },
              children: [
                o.jsx("h2", {
                  style: {
                    fontSize: "24px",
                    fontWeight: "600",
                    marginBottom: "24px",
                    fontFamily: "serif",
                    color: "#121212",
                  },
                  children: "License",
                }),
                o.jsx("div", {
                  style: {
                    padding: "24px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                    background: "#fff",
                    marginBottom: "32px",
                    fontSize: "17px",
                    lineHeight: "1.7",
                  },
                  children: o.jsxs("p", {
                    style: { marginBottom: "0" },
                    children: [
                      o.jsx("a", {
                        href: "https://www.analystnitinjain.com",
                        style: {
                          color: "#2563eb",
                          textDecoration: "underline",
                          fontWeight: "500",
                        },
                        children: "www.analystnitinjain.com",
                      }),
                      ", hereby grants you a limited, non-exclusive, non-assignable and non-transferable license to access ",
                      o.jsx("a", {
                        href: "https://www.analystnitinjain.com",
                        style: {
                          color: "#2563eb",
                          textDecoration: "underline",
                          fontWeight: "500",
                        },
                        children: "www.analystnitinjain.com",
                      }),
                      " and to join the Telegram channel/s, provided and expressly conditioned upon your agreement that all such access and use shall be governed by all of the terms and conditions set forth in this User Agreement.",
                    ],
                  }),
                }),
              ],
            }),
            o.jsxs("section", {
              style: { marginBottom: "32px" },
              children: [
                o.jsx("h2", {
                  style: {
                    fontSize: "24px",
                    fontWeight: "600",
                    marginBottom: "24px",
                    fontFamily: "serif",
                    color: "#121212",
                  },
                  children: "Copyright & No Retransmission of Information",
                }),
                o.jsxs("div", {
                  style: {
                    padding: "24px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                    background: "#fff",
                    marginBottom: "32px",
                    fontSize: "17px",
                    lineHeight: "1.7",
                  },
                  children: [
                    o.jsxs("p", {
                      style: { marginBottom: "16px" },
                      children: [
                        o.jsx("a", {
                          href: "https://www.analystnitinjain.com",
                          style: {
                            color: "#2563eb",
                            textDecoration: "underline",
                            fontWeight: "500",
                          },
                          children: "www.analystnitinjain.com",
                        }),
                        ", along with the Telegram channel/s, as well as the design and information contained in this site and channel, are the valuable and exclusive properties of ",
                        o.jsx("a", {
                          href: "https://www.analystnitinjain.com",
                          style: {
                            color: "#2563eb",
                            textDecoration: "underline",
                            fontWeight: "500",
                          },
                          children: "www.analystnitinjain.com",
                        }),
                        ", and nothing in this Agreement shall be construed as transferring or assigning any such ownership rights to you or any other person or entity. All information on ",
                        o.jsx("a", {
                          href: "https://www.analystnitinjain.com",
                          style: {
                            color: "#2563eb",
                            textDecoration: "underline",
                            fontWeight: "500",
                          },
                          children: "www.analystnitinjain.com",
                        }),
                        " and the Telegram channel/s is the proprietary and confidential property of ",
                        o.jsx("a", {
                          href: "https://www.analystnitinjain.com",
                          style: {
                            color: "#2563eb",
                            textDecoration: "underline",
                            fontWeight: "500",
                          },
                          children: "www.analystnitinjain.com",
                        }),
                        " and cannot be repeated for any reason outside ",
                        o.jsx("a", {
                          href: "https://www.analystnitinjain.com",
                          style: {
                            color: "#2563eb",
                            textDecoration: "underline",
                            fontWeight: "500",
                          },
                          children: "www.analystnitinjain.com",
                        }),
                        " and the Telegram channel/s.",
                      ],
                    }),
                    o.jsxs("p", {
                      style: { marginBottom: "16px" },
                      children: [
                        "You agree not to repeat or rebroadcast in any way any of the recommendations made on ",
                        o.jsx("a", {
                          href: "https://www.analystnitinjain.com",
                          style: {
                            color: "#2563eb",
                            textDecoration: "underline",
                            fontWeight: "500",
                          },
                          children: "www.analystnitinjain.com",
                        }),
                        " or on the Telegram channel/s for any reason whatsoever. You agree that if you do repeat or re-post any of ",
                        o.jsx("a", {
                          href: "https://www.analystnitinjain.com",
                          style: {
                            color: "#2563eb",
                            textDecoration: "underline",
                            fontWeight: "500",
                          },
                          children: "www.analystnitinjain.com",
                        }),
                        "'s or the Telegram channel/s recommendations by any means, you will be liable for actual and punitive damages as determined by ",
                        o.jsx("a", {
                          href: "https://www.analystnitinjain.com",
                          style: {
                            color: "#2563eb",
                            textDecoration: "underline",
                            fontWeight: "500",
                          },
                          children: "www.analystnitinjain.com",
                        }),
                        " and additional damages to be determined by an Indian court of Law.",
                      ],
                    }),
                    o.jsxs("p", {
                      style: { marginBottom: "0" },
                      children: [
                        "You may not resell, redistribute, broadcast or transfer the information or use the information in a searchable, machine-readable database unless separately and specifically authorized in writing by ",
                        o.jsx("a", {
                          href: "https://www.analystnitinjain.com",
                          style: {
                            color: "#2563eb",
                            textDecoration: "underline",
                            fontWeight: "500",
                          },
                          children: "www.analystnitinjain.com",
                        }),
                        " prior to such use. You may not rent, lease, sublicense, distribute, transfer, copy, reproduce, publicly display, publish, adapt, store or time-share ",
                        o.jsx("a", {
                          href: "https://www.analystnitinjain.com",
                          style: {
                            color: "#2563eb",
                            textDecoration: "underline",
                            fontWeight: "500",
                          },
                          children: "www.analystnitinjain.com",
                        }),
                        ", the Telegram channel/s, any part thereof, or any of the information received or accessed therefrom to or through any other person or entity unless separately and specifically authorized in writing by ",
                        o.jsx("a", {
                          href: "https://www.analystnitinjain.com",
                          style: {
                            color: "#2563eb",
                            textDecoration: "underline",
                            fontWeight: "500",
                          },
                          children: "www.analystnitinjain.com",
                        }),
                        " prior to such use. In addition, you may not remove, alter or obscure any copyright, legal or proprietary notices in or on any portions of ",
                        o.jsx("a", {
                          href: "https://www.analystnitinjain.com",
                          style: {
                            color: "#2563eb",
                            textDecoration: "underline",
                            fontWeight: "500",
                          },
                          children: "www.analystnitinjain.com",
                        }),
                        " or the Telegram channel Telegram channel/s without prior written authorization except as set forth herein, any other use of the information contained in this site or channel requires the prior written consent of ",
                        o.jsx("a", {
                          href: "https://www.analystnitinjain.com",
                          style: {
                            color: "#2563eb",
                            textDecoration: "underline",
                            fontWeight: "500",
                          },
                          children: "www.analystnitinjain.com",
                        }),
                        " and may require a separate fee.",
                      ],
                    }),
                  ],
                }),
              ],
            }),
            o.jsxs("section", {
              style: { marginBottom: "32px" },
              children: [
                o.jsx("h2", {
                  style: {
                    fontSize: "24px",
                    fontWeight: "600",
                    marginBottom: "24px",
                    fontFamily: "serif",
                    color: "#121212",
                  },
                  children: "Liability Disclaimer",
                }),
                o.jsxs("div", {
                  style: {
                    padding: "24px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                    background: "#fff",
                    marginBottom: "32px",
                    fontSize: "17px",
                    lineHeight: "1.7",
                  },
                  children: [
                    o.jsxs("p", {
                      style: { marginBottom: "16px" },
                      children: [
                        "You expressly agree that use of the website and the Telegram channel/s is at your sole risk. The contents, information, software, products, features, and services published on this website and the Telegram channel may include inaccuracies or typographical errors. Changes are periodically added to the contents herein. ",
                        o.jsx("a", {
                          href: "https://www.analystnitinjain.com",
                          style: {
                            color: "#2563eb",
                            textDecoration: "underline",
                            fontWeight: "500",
                          },
                          children: "www.analystnitinjain.com",
                        }),
                        " and/or its respective suppliers may make improvements and/or changes in this website and the Telegram channel at any time.",
                      ],
                    }),
                    o.jsxs("p", {
                      style: { marginBottom: "16px" },
                      children: [
                        "This website and the Telegram channel may be temporarily unavailable from time to time due to required maintenance, telecommunications interruptions, or other disruptions. ",
                        o.jsx("a", {
                          href: "https://www.analystnitinjain.com",
                          style: {
                            color: "#2563eb",
                            textDecoration: "underline",
                            fontWeight: "500",
                          },
                          children: "www.analystnitinjain.com",
                        }),
                        " (and its owners, suppliers, consultants, advertisers, affiliates, partners, employees or any other associated entities, all collectively referred to as associated entities hereafter) shall not be liable to user or member or any third party should ",
                        o.jsx("a", {
                          href: "https://www.analystnitinjain.com",
                          style: {
                            color: "#2563eb",
                            textDecoration: "underline",
                            fontWeight: "500",
                          },
                          children: "www.analystnitinjain.com",
                        }),
                        " exercise its right to modify or discontinue any or all of the contents, information, software, products, features and services published on this website and the Telegram channel.",
                      ],
                    }),
                    o.jsxs("p", {
                      style: { marginBottom: "16px" },
                      children: [
                        o.jsx("a", {
                          href: "https://www.analystnitinjain.com",
                          style: {
                            color: "#2563eb",
                            textDecoration: "underline",
                            fontWeight: "500",
                          },
                          children: "www.analystnitinjain.com",
                        }),
                        '/or its respective associated entities make no representations about the suitability of the contents, information, software, products, features and services contained on this website and the Telegram channel for any purpose. All such contents, information, software, products, features and services are provided "as is" without warranty of any kind. ',
                        o.jsx("a", {
                          href: "https://www.analystnitinjain.com",
                          style: {
                            color: "#2563eb",
                            textDecoration: "underline",
                            fontWeight: "500",
                          },
                          children: "www.analystnitinjain.com",
                        }),
                        " and/or its associated entities hereby disclaim all warranties and conditions with regard to these contents, information, software, products, features and services, including all implied warranties and conditions of merchantability, fitness for a particular purpose, title, non-infringement, and availability.",
                      ],
                    }),
                    o.jsxs("p", {
                      style: { marginBottom: "0" },
                      children: [
                        "In no event shall ",
                        o.jsx("a", {
                          href: "https://www.analystnitinjain.com",
                          style: {
                            color: "#2563eb",
                            textDecoration: "underline",
                            fontWeight: "500",
                          },
                          children: "www.analystnitinjain.com",
                        }),
                        " and/or its associated entities be liable for any direct, indirect, punitive, incidental, special or consequential damages arising out of or in any way connected with the use of this website or the Telegram channel, or with the delay or inability to use this website or the Telegram channel, or for any contents, information, software, products, features and services obtained through this website or the Telegram channel, or otherwise arising out of the use of this website or the Telegram channel, whether based on contract, tort, strict liability or otherwise, even if ",
                        o.jsx("a", {
                          href: "https://www.analystnitinjain.com",
                          style: {
                            color: "#2563eb",
                            textDecoration: "underline",
                            fontWeight: "500",
                          },
                          children: "www.analystnitinjain.com",
                        }),
                        " or any of its associated entities has been advised of the possibility of damages.",
                      ],
                    }),
                  ],
                }),
              ],
            }),
            o.jsxs("section", {
              style: { marginBottom: "32px" },
              children: [
                o.jsx("h2", {
                  style: {
                    fontSize: "24px",
                    fontWeight: "600",
                    marginBottom: "24px",
                    fontFamily: "serif",
                    color: "#121212",
                  },
                  children: "Delay in Services",
                }),
                o.jsx("div", {
                  style: {
                    padding: "24px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                    background: "#fff",
                    marginBottom: "32px",
                    fontSize: "17px",
                    lineHeight: "1.7",
                  },
                  children: o.jsxs("p", {
                    style: { marginBottom: "0" },
                    children: [
                      "Neither ",
                      o.jsx("a", {
                        href: "https://www.analystnitinjain.com",
                        style: {
                          color: "#2563eb",
                          textDecoration: "underline",
                          fontWeight: "500",
                        },
                        children: "www.analystnitinjain.com",
                      }),
                      " (including its proprietor and/or its employees, affiliates, agents, representatives or subcontractors) nor the Telegram channel/s shall be liable for any loss or liability resulting, directly or indirectly, from delays or interruptions due to electronic or mechanical equipment failures, telephone interconnect problems, defects, weather, strikes, walkouts, fire, acts of God, riots, armed conflicts, acts of war, or other like causes. ",
                      o.jsx("a", {
                        href: "https://www.analystnitinjain.com",
                        style: {
                          color: "#2563eb",
                          textDecoration: "underline",
                          fontWeight: "500",
                        },
                        children: "www.analystnitinjain.com",
                      }),
                      " shall have no responsibility to provide you access to ",
                      o.jsx("a", {
                        href: "https://www.analystnitinjain.com",
                        style: {
                          color: "#2563eb",
                          textDecoration: "underline",
                          fontWeight: "500",
                        },
                        children: "www.analystnitinjain.com",
                      }),
                      " or the Telegram channel Telegram channel/s while interruption of ",
                      o.jsx("a", {
                        href: "https://www.analystnitinjain.com",
                        style: {
                          color: "#2563eb",
                          textDecoration: "underline",
                          fontWeight: "500",
                        },
                        children: "www.analystnitinjain.com",
                      }),
                      " or the Telegram channel is due to any such cause shall continue.",
                    ],
                  }),
                }),
              ],
            }),
            o.jsxs("section", {
              style: { marginBottom: "32px" },
              children: [
                o.jsx("h2", {
                  style: {
                    fontSize: "24px",
                    fontWeight: "600",
                    marginBottom: "24px",
                    fontFamily: "serif",
                    color: "#121212",
                  },
                  children: "Information Disclaimer",
                }),
                o.jsxs("div", {
                  style: {
                    padding: "24px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                    background: "#fff",
                    marginBottom: "32px",
                    fontSize: "17px",
                    lineHeight: "1.7",
                  },
                  children: [
                    o.jsxs("p", {
                      style: { marginBottom: "16px" },
                      children: [
                        "You acknowledge that the information provided through ",
                        o.jsx("a", {
                          href: "https://www.analystnitinjain.com",
                          style: {
                            color: "#2563eb",
                            textDecoration: "underline",
                            fontWeight: "500",
                          },
                          children: "www.analystnitinjain.com",
                        }),
                        " and the Telegram channel/s is compiled from sources, which are beyond the control of ",
                        o.jsx("a", {
                          href: "https://www.analystnitinjain.com",
                          style: {
                            color: "#2563eb",
                            textDecoration: "underline",
                            fontWeight: "500",
                          },
                          children: "www.analystnitinjain.com",
                        }),
                        " and the Telegram channel/s. Though such information is recognized by the parties to be generally reliable, the parties acknowledge that inaccuracies may occur and ",
                        o.jsx("a", {
                          href: "https://www.analystnitinjain.com",
                          style: {
                            color: "#2563eb",
                            textDecoration: "underline",
                            fontWeight: "500",
                          },
                          children: "www.analystnitinjain.com",
                        }),
                        " and the Telegram channel/s do not warrant the consistency or suitability of the information.",
                      ],
                    }),
                    o.jsxs("p", {
                      style: { marginBottom: "16px" },
                      children: [
                        "For this reason, as well as the possibility of human and mechanical errors and other factors, you acknowledge that ",
                        o.jsx("a", {
                          href: "https://www.analystnitinjain.com",
                          style: {
                            color: "#2563eb",
                            textDecoration: "underline",
                            fontWeight: "500",
                          },
                          children: "www.analystnitinjain.com",
                        }),
                        ' and the Telegram channel/s are provided to you on an "as is, with all faults" basis. ',
                        o.jsx("a", {
                          href: "https://www.analystnitinjain.com",
                          style: {
                            color: "#2563eb",
                            textDecoration: "underline",
                            fontWeight: "500",
                          },
                          children: "www.analystnitinjain.com",
                        }),
                        " expressly disclaims any and all warranties, whether express, oral, implied, statutory or otherwise, of any kind to the users and/or any third party, including any implied warranties of consistency, timeliness, completeness, merchantability and fitness for a particular purpose, as well as any warranties arising by virtue of custom of trade or course of dealing and any implied warranties of title or non-infringement.",
                      ],
                    }),
                    o.jsxs("p", {
                      style: { marginBottom: "16px" },
                      children: [
                        "In addition, ",
                        o.jsx("a", {
                          href: "https://www.analystnitinjain.com",
                          style: {
                            color: "#2563eb",
                            textDecoration: "underline",
                            fontWeight: "500",
                          },
                          children: "www.analystnitinjain.com",
                        }),
                        ", in providing the information, makes no endorsement of any particular security, market participant, or brokerage through both the website and the Telegram channel. Further, ",
                        o.jsx("a", {
                          href: "https://www.analystnitinjain.com",
                          style: {
                            color: "#2563eb",
                            textDecoration: "underline",
                            fontWeight: "500",
                          },
                          children: "www.analystnitinjain.com",
                        }),
                        " does not represent or warrant that it or the Telegram channel/s will meet your requirements or is suitable for your needs.",
                      ],
                    }),
                    o.jsxs("p", {
                      style: { marginBottom: "16px" },
                      children: [
                        "Under this User Agreement, you assume all risk of errors and/or omissions in ",
                        o.jsx("a", {
                          href: "https://www.analystnitinjain.com",
                          style: {
                            color: "#2563eb",
                            textDecoration: "underline",
                            fontWeight: "500",
                          },
                          children: "www.analystnitinjain.com",
                        }),
                        " and the Telegram channel/s, including the transmission or translation of information. You assume full responsibility for implementing sufficient procedures and checks to satisfy your requirements for the consistency and suitability of ",
                        o.jsx("a", {
                          href: "https://www.analystnitinjain.com",
                          style: {
                            color: "#2563eb",
                            textDecoration: "underline",
                            fontWeight: "500",
                          },
                          children: "www.analystnitinjain.com",
                        }),
                        " and the Telegram channel/s, including the information, and for maintaining any means, which you may require for the reconstruction of lost data or subsequent manipulations or analyses of the information under the User Agreement.",
                      ],
                    }),
                    o.jsxs("p", {
                      style: { marginBottom: "16px" },
                      children: [
                        "You agree that ",
                        o.jsx("a", {
                          href: "https://www.analystnitinjain.com",
                          style: {
                            color: "#2563eb",
                            textDecoration: "underline",
                            fontWeight: "500",
                          },
                          children: "www.analystnitinjain.com",
                        }),
                        " (including its and their proprietor, employees, affiliates, group companies agents, representatives or subcontractors) and the Telegram channel/s shall not in any event be liable for any special, incidental or consequential damages arising out of the use or inability to use ",
                        o.jsx("a", {
                          href: "https://www.analystnitinjain.com",
                          style: {
                            color: "#2563eb",
                            textDecoration: "underline",
                            fontWeight: "500",
                          },
                          children: "www.analystnitinjain.com",
                        }),
                        " and the Telegram channel/s for any purpose whatsoever.",
                      ],
                    }),
                    o.jsxs("p", {
                      style: { marginBottom: "0" },
                      children: [
                        o.jsx("a", {
                          href: "https://www.analystnitinjain.com",
                          style: {
                            color: "#2563eb",
                            textDecoration: "underline",
                            fontWeight: "500",
                          },
                          children: "www.analystnitinjain.com",
                        }),
                        ", the Telegram channel/s and its affiliates, associates, officers, proprietor, employees and agents shall have no liability in tort, contract, or otherwise to user and/or any third party.",
                      ],
                    }),
                  ],
                }),
              ],
            }),
            o.jsxs("section", {
              style: { marginBottom: "32px" },
              children: [
                o.jsx("h2", {
                  style: {
                    fontSize: "24px",
                    fontWeight: "600",
                    marginBottom: "24px",
                    fontFamily: "serif",
                    color: "#121212",
                  },
                  children: "Links to Third Party Sites",
                }),
                o.jsx("div", {
                  style: {
                    padding: "24px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                    background: "#fff",
                    marginBottom: "32px",
                    fontSize: "17px",
                    lineHeight: "1.7",
                  },
                  children: o.jsxs("p", {
                    style: { marginBottom: "0" },
                    children: [
                      "The links in this site and the Telegram channel/s will allow you to leave ",
                      o.jsx("a", {
                        href: "https://www.analystnitinjain.com",
                        style: {
                          color: "#2563eb",
                          textDecoration: "underline",
                          fontWeight: "500",
                        },
                        children: "www.analystnitinjain.com",
                      }),
                      " and the Telegram channel/s respectively. The linked sites are not under the control of ",
                      o.jsx("a", {
                        href: "https://www.analystnitinjain.com",
                        style: {
                          color: "#2563eb",
                          textDecoration: "underline",
                          fontWeight: "500",
                        },
                        children: "www.analystnitinjain.com",
                      }),
                      " or the Telegram channel/s. ",
                      o.jsx("a", {
                        href: "https://www.analystnitinjain.com",
                        style: {
                          color: "#2563eb",
                          textDecoration: "underline",
                          fontWeight: "500",
                        },
                        children: "www.analystnitinjain.com",
                      }),
                      " has not reviewed, nor approved these sites and is not responsible for the contents or omissions of any linked site or any links contained in a linked site, whether accessed via the website or the Telegram channel. The inclusion of any linked site does not imply endorsement by ",
                      o.jsx("a", {
                        href: "https://www.analystnitinjain.com",
                        style: {
                          color: "#2563eb",
                          textDecoration: "underline",
                          fontWeight: "500",
                        },
                        children: "www.analystnitinjain.com",
                      }),
                      " or the Telegram channel/s of the site. Third party links to ",
                      o.jsx("a", {
                        href: "https://www.analystnitinjain.com",
                        style: {
                          color: "#2563eb",
                          textDecoration: "underline",
                          fontWeight: "500",
                        },
                        children: "www.analystnitinjain.com",
                      }),
                      " or the Telegram channel/s shall be governed by a separate agreement.",
                    ],
                  }),
                }),
              ],
            }),
            o.jsxs("section", {
              style: { marginBottom: "32px" },
              children: [
                o.jsx("h2", {
                  style: {
                    fontSize: "24px",
                    fontWeight: "600",
                    marginBottom: "24px",
                    fontFamily: "serif",
                    color: "#121212",
                  },
                  children: "Indemnification",
                }),
                o.jsx("div", {
                  style: {
                    padding: "24px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                    background: "#fff",
                    marginBottom: "32px",
                    fontSize: "17px",
                    lineHeight: "1.7",
                  },
                  children: o.jsxs("p", {
                    style: { marginBottom: "0" },
                    children: [
                      "You shall indemnify, defend and hold harmless ",
                      o.jsx("a", {
                        href: "https://www.analystnitinjain.com",
                        style: {
                          color: "#2563eb",
                          textDecoration: "underline",
                          fontWeight: "500",
                        },
                        children: "www.analystnitinjain.com",
                      }),
                      " and the Telegram channel/s (including its and their officers, proprietor, employees, affiliates, group companies, agents, representatives or subcontractors) from any and all claims and losses imposed on, incurred by or asserted as a result of or related to: (a) your access and use of ",
                      o.jsx("a", {
                        href: "https://www.analystnitinjain.com",
                        style: {
                          color: "#2563eb",
                          textDecoration: "underline",
                          fontWeight: "500",
                        },
                        children: "www.analystnitinjain.com",
                      }),
                      " and the Telegram channel/s; (b) any non-compliance by user with the terms and conditions hereof; or (c) any third party actions related to users receipt and use of the information, whether authorized or unauthorized, through ",
                      o.jsx("a", {
                        href: "https://www.analystnitinjain.com",
                        style: {
                          color: "#2563eb",
                          textDecoration: "underline",
                          fontWeight: "500",
                        },
                        children: "www.analystnitinjain.com",
                      }),
                      " or the Telegram channel/s. Any clause declared invalid shall be deemed severable and not affect the validity or enforceability of the remainder. These terms may only be amended in a writing signed by ",
                      o.jsx("a", {
                        href: "https://www.analystnitinjain.com",
                        style: {
                          color: "#2563eb",
                          textDecoration: "underline",
                          fontWeight: "500",
                        },
                        children: "www.analystnitinjain.com",
                      }),
                      ".",
                    ],
                  }),
                }),
              ],
            }),
            o.jsxs("section", {
              style: { marginBottom: "32px" },
              children: [
                o.jsx("h2", {
                  style: {
                    fontSize: "24px",
                    fontWeight: "600",
                    marginBottom: "24px",
                    fontFamily: "serif",
                    color: "#121212",
                  },
                  children: "Conflicting Terms",
                }),
                o.jsx("div", {
                  style: {
                    padding: "24px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                    background: "#fff",
                    marginBottom: "32px",
                    fontSize: "17px",
                    lineHeight: "1.7",
                  },
                  children: o.jsxs("p", {
                    style: { marginBottom: "0" },
                    children: [
                      "If there is any conflict between this User Agreement and other documents, this User Agreement shall govern, whether such order or other documents is prior to or subsequent to this User Agreement, or is signed or acknowledged by any director, officer, employee, representative or agent of ",
                      o.jsx("a", {
                        href: "https://www.analystnitinjain.com",
                        style: {
                          color: "#2563eb",
                          textDecoration: "underline",
                          fontWeight: "500",
                        },
                        children: "www.analystnitinjain.com",
                      }),
                      ".",
                    ],
                  }),
                }),
              ],
            }),
            o.jsxs("section", {
              style: { marginBottom: "32px" },
              children: [
                o.jsx("h2", {
                  style: {
                    fontSize: "24px",
                    fontWeight: "600",
                    marginBottom: "24px",
                    fontFamily: "serif",
                    color: "#121212",
                  },
                  children: "Attorney's Fees",
                }),
                o.jsx("div", {
                  style: {
                    padding: "24px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                    background: "#fff",
                    marginBottom: "32px",
                    fontSize: "17px",
                    lineHeight: "1.7",
                  },
                  children: o.jsxs("p", {
                    style: { marginBottom: "0" },
                    children: [
                      "If ",
                      o.jsx("a", {
                        href: "https://www.analystnitinjain.com",
                        style: {
                          color: "#2563eb",
                          textDecoration: "underline",
                          fontWeight: "500",
                        },
                        children: "www.analystnitinjain.com",
                      }),
                      " takes action (by itself or through its associate companies) to enforce any of the provisions of this User Agreement, including collection of any amounts due hereunder, ",
                      o.jsx("a", {
                        href: "https://www.analystnitinjain.com",
                        style: {
                          color: "#2563eb",
                          textDecoration: "underline",
                          fontWeight: "500",
                        },
                        children: "www.analystnitinjain.com",
                      }),
                      " shall be entitled to recover from you (and you agree to pay), in addition to all sums to which it is entitled or any other relief, at law or in equity, reasonable and necessary attorney's fees and any costs of any litigation.",
                    ],
                  }),
                }),
              ],
            }),
            o.jsxs("section", {
              style: { marginBottom: "32px" },
              children: [
                o.jsx("h2", {
                  style: {
                    fontSize: "24px",
                    fontWeight: "600",
                    marginBottom: "24px",
                    fontFamily: "serif",
                    color: "#121212",
                  },
                  children: "Vendor Contracts",
                }),
                o.jsx("div", {
                  style: {
                    padding: "24px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                    background: "#fff",
                    marginBottom: "32px",
                    fontSize: "17px",
                    lineHeight: "1.7",
                  },
                  children: o.jsx("p", {
                    style: { marginBottom: "0" },
                    children:
                      "Analyst Nitin Jain has a contractual arrangement with vendors whereby the vendors provides technology solutions and related back-end infrastructure along with support for back-office related operations & processes. The vendors do not provide any investment advice or recommendation nor does it make any claim of returns or performance with respect to any advice or recommendation. More details in detailed disclosure at end.",
                  }),
                }),
              ],
            }),
            o.jsxs("section", {
              style: { marginBottom: "32px" },
              children: [
                o.jsx("h2", {
                  style: {
                    fontSize: "24px",
                    fontWeight: "600",
                    marginBottom: "24px",
                    fontFamily: "serif",
                    color: "#121212",
                  },
                  children: "Entire Agreement",
                }),
                o.jsx("div", {
                  style: {
                    padding: "24px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                    background: "#fff",
                    marginBottom: "32px",
                    fontSize: "17px",
                    lineHeight: "1.7",
                  },
                  children: o.jsxs("p", {
                    style: { marginBottom: "0" },
                    children: [
                      "This User Agreement constitutes the entire agreement between the parties, and no other agreement, written or oral, exists between you and ",
                      o.jsx("a", {
                        href: "https://www.analystnitinjain.com",
                        style: {
                          color: "#2563eb",
                          textDecoration: "underline",
                          fontWeight: "500",
                        },
                        children: "www.analystnitinjain.com",
                      }),
                      " and the Telegram channel/s. By using the Information on ",
                      o.jsx("a", {
                        href: "https://www.analystnitinjain.com",
                        style: {
                          color: "#2563eb",
                          textDecoration: "underline",
                          fontWeight: "500",
                        },
                        children: "www.analystnitinjain.com",
                      }),
                      " and the Telegram channel/s, you assume full responsibility for any and all gains and losses, financial, emotional or otherwise, experienced, suffered or incurred by you. ",
                      o.jsx("a", {
                        href: "https://www.analystnitinjain.com",
                        style: {
                          color: "#2563eb",
                          textDecoration: "underline",
                          fontWeight: "500",
                        },
                        children: "www.analystnitinjain.com",
                      }),
                      " and the Telegram channel/s do not guarantee the consistency, completeness or timeliness of, or otherwise endorse in any way, the views, opinions or recommendations expressed in the Information, do not give investment advice, and do not advocate the purchase or sale of any security or investment by you or any other individual. The Information is not intended to provide tax, legal or investment advice, which you should obtain from your professional advisor prior to making any investment of the type discussed in the Information. The Information does not constitute a solicitation by the information providers, ",
                      o.jsx("a", {
                        href: "https://www.analystnitinjain.com",
                        style: {
                          color: "#2563eb",
                          textDecoration: "underline",
                          fontWeight: "500",
                        },
                        children: "www.analystnitinjain.com",
                      }),
                      ', the Telegram channel/s or other of the purchase or sale of securities. The service is provided "as is," without warranty of any kind, either express or implied, including without limitation, any warranty for information, data, services, uninterrupted access, or products provided through or in connection with the service. Specifically, ',
                      o.jsx("a", {
                        href: "https://www.analystnitinjain.com",
                        style: {
                          color: "#2563eb",
                          textDecoration: "underline",
                          fontWeight: "500",
                        },
                        children: "www.analystnitinjain.com",
                      }),
                      " and the Telegram channel/s disclaim any and all warranties, including, but not limited to: (i) Any warranties concerning the availability, consistency, usefulness, or content of information, products or services; and (ii) Any warranties of title, warranty of non-infringement and warranties of merchantability or fitness for a particular purpose. This disclaimer of liability applies to any damages or injury caused by any failure of performance, error, omission, interruption, deletion, defect, delay in operation or transmission, computer virus, communication line failure, theft or destruction or unauthorized access to, alteration of, or use of record, whether for breach of contract, tort, negligence, or under any other cause of action. Neither ",
                      o.jsx("a", {
                        href: "https://www.analystnitinjain.com",
                        style: {
                          color: "#2563eb",
                          textDecoration: "underline",
                          fontWeight: "500",
                        },
                        children: "www.analystnitinjain.com",
                      }),
                      ", the Telegram channel/s nor any of its employees, agents, successors, assignees, affiliates, group companies or content or service providers shall be liable to you or other third party for any direct, indirect, incidental, special or consequential damages arising out of use of service or inability to gain access to or use the service or out of any breach of any warranty. Because some countries do not allow the exclusion or limitation of liability for consequential or incidental damages, the above limitation may not apply to you. In such countries, the respective liability of ",
                      o.jsx("a", {
                        href: "https://www.analystnitinjain.com",
                        style: {
                          color: "#2563eb",
                          textDecoration: "underline",
                          fontWeight: "500",
                        },
                        children: "www.analystnitinjain.com",
                      }),
                      ", the Telegram channel/s, its employees, agents, successors, assignees, affiliates, group companies and content or service providers respective liability is limited to the amount provided under said law. Further, you agree and understand that all services provided are non-refundable and that you should carefully consider whether our services are able to meet your needs.",
                    ],
                  }),
                }),
              ],
            }),
            o.jsxs("section", {
              style: { marginBottom: "32px" },
              children: [
                o.jsx("h2", {
                  style: {
                    fontSize: "24px",
                    fontWeight: "600",
                    marginBottom: "24px",
                    fontFamily: "serif",
                    color: "#121212",
                  },
                  children: "Termination",
                }),
                o.jsx("div", {
                  style: {
                    padding: "24px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                    background: "#fff",
                    marginBottom: "32px",
                    fontSize: "17px",
                    lineHeight: "1.7",
                  },
                  children: o.jsxs("p", {
                    style: { marginBottom: "0" },
                    children: [
                      "This User Agreement and the license rights granted hereunder shall remain in full force and effect unless terminated or cancelled for any of the following reasons: (a) immediately by ",
                      o.jsx("a", {
                        href: "https://www.analystnitinjain.com",
                        style: {
                          color: "#2563eb",
                          textDecoration: "underline",
                          fontWeight: "500",
                        },
                        children: "www.analystnitinjain.com",
                      }),
                      " or the Telegram channel/s for any unauthorized access or use by you (b) immediately by ",
                      o.jsx("a", {
                        href: "https://www.analystnitinjain.com",
                        style: {
                          color: "#2563eb",
                          textDecoration: "underline",
                          fontWeight: "500",
                        },
                        children: "www.analystnitinjain.com",
                      }),
                      " or the Telegram channel/s if you assign or transfer (or attempt the same) any rights granted to you under this Agreement; (c) immediately, if you violate any of the other terms and conditions of this User Agreement. Termination or cancellation of this Agreement shall not affect any right or relief to which ",
                      o.jsx("a", {
                        href: "https://www.analystnitinjain.com",
                        style: {
                          color: "#2563eb",
                          textDecoration: "underline",
                          fontWeight: "500",
                        },
                        children: "www.analystnitinjain.com",
                      }),
                      " or the Telegram channel/s may be entitled, at law or in equity. Upon termination of this User Agreement, all rights granted to you will terminate and revert to ",
                      o.jsx("a", {
                        href: "https://www.analystnitinjain.com",
                        style: {
                          color: "#2563eb",
                          textDecoration: "underline",
                          fontWeight: "500",
                        },
                        children: "www.analystnitinjain.com",
                      }),
                      " and the Telegram channel/s. Except as set forth herein, regardless of the reason for cancellation or termination of this User Agreement, the fee charged if any for access to ",
                      o.jsx("a", {
                        href: "https://www.analystnitinjain.com",
                        style: {
                          color: "#2563eb",
                          textDecoration: "underline",
                          fontWeight: "500",
                        },
                        children: "www.analystnitinjain.com",
                      }),
                      " and the Telegram channel/s is non-refundable for any reason.",
                    ],
                  }),
                }),
              ],
            }),
            o.jsxs("section", {
              style: { marginBottom: "32px" },
              children: [
                o.jsx("h2", {
                  style: {
                    fontSize: "24px",
                    fontWeight: "600",
                    marginBottom: "24px",
                    fontFamily: "serif",
                    color: "#121212",
                  },
                  children: "Dispute Settlement",
                }),
                o.jsx("div", {
                  style: {
                    padding: "24px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                    background: "#fff",
                    marginBottom: "32px",
                    fontSize: "17px",
                    lineHeight: "1.7",
                  },
                  children: o.jsxs("p", {
                    style: { marginBottom: "0" },
                    children: [
                      "All disputes, differences and questions of any nature which at any time arise between the parties to this agreement out of the construction of or concerning anything contained in or arising out of this agreement or as to the rights, duties or liabilities of the parties thereto and including any question of whether such dealings, transactions MOA, or contracts have been entered into or not, shall be referred to the sole Arbitrator under the Arbitration and conciliation Act, 1996. The sole Arbitrator shall be appointed by the proprietor of ",
                      o.jsx("a", {
                        href: "https://www.analystnitinjain.com",
                        style: {
                          color: "#2563eb",
                          textDecoration: "underline",
                          fontWeight: "500",
                        },
                        children: "www.analystnitinjain.com",
                      }),
                      ". The Arbitration Proceedings shall be held at Delhi, India. The Place of Arbitration will be at Delhi, India. The laws prevailing in India shall alone apply to the Arbitration Proceedings between the parties.",
                    ],
                  }),
                }),
              ],
            }),
            o.jsxs("section", {
              style: { marginBottom: "32px" },
              children: [
                o.jsx("h2", {
                  style: {
                    fontSize: "24px",
                    fontWeight: "600",
                    marginBottom: "24px",
                    fontFamily: "serif",
                    color: "#121212",
                  },
                  children: "Jurisdiction",
                }),
                o.jsx("div", {
                  style: {
                    padding: "24px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                    background: "#fff",
                    marginBottom: "32px",
                    fontSize: "17px",
                    lineHeight: "1.7",
                  },
                  children: o.jsx("p", {
                    style: { marginBottom: "0" },
                    children:
                      "Both the Parties agree that all claims, differences and disputes, including any agreements, contracts and transactions made with reference to anything incidental thereto or in pursuance thereof or relating to their validity, construction, interpretation, fulfilment or the rights, obligations and liabilities of the parties thereto and including any question of whether such dealings, transactions MOA, or contracts have been entered into or not, shall be subject to the exclusive jurisdiction of the Courts of Delhi only.",
                  }),
                }),
              ],
            }),
            o.jsxs("section", {
              style: { marginBottom: "32px" },
              children: [
                o.jsx("h2", {
                  style: {
                    fontSize: "24px",
                    fontWeight: "600",
                    marginBottom: "24px",
                    fontFamily: "serif",
                    color: "#121212",
                  },
                  children: "No Refund Policy",
                }),
                o.jsx("div", {
                  style: {
                    padding: "24px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                    background: "#fff",
                    marginBottom: "32px",
                    fontSize: "17px",
                    lineHeight: "1.7",
                  },
                  children: o.jsxs("p", {
                    style: { marginBottom: "0" },
                    children: [
                      o.jsx("a", {
                        href: "https://www.analystnitinjain.com",
                        style: {
                          color: "#2563eb",
                          textDecoration: "underline",
                          fontWeight: "500",
                        },
                        children: "www.analystnitinjain.com",
                      }),
                      " follows a strict no refund policy, and in no case any refunds will be made, nor can the subscription be transferred to any other party.",
                    ],
                  }),
                }),
              ],
            }),
            o.jsxs("section", {
              style: { marginBottom: "32px" },
              children: [
                o.jsx("h2", {
                  style: {
                    fontSize: "24px",
                    fontWeight: "600",
                    marginBottom: "24px",
                    fontFamily: "serif",
                    color: "#121212",
                  },
                  children: "Standard Disclaimer",
                }),
                o.jsx("div", {
                  style: {
                    padding: "24px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                    background: "#fff",
                    marginBottom: "32px",
                    fontSize: "17px",
                    lineHeight: "1.7",
                  },
                  children: o.jsxs("ul", {
                    style: { paddingLeft: "20px" },
                    children: [
                      o.jsx("li", {
                        style: { marginBottom: "16px" },
                        children:
                          "I, Nitin Jain (proprietor of analystnitinjain), am registered with SEBI as Individual Research Analyst, in accordance of which I provide Research Analyst services to my clients.",
                      }),
                      o.jsx("li", {
                        style: { marginBottom: "16px" },
                        children:
                          "I am not affiliated with any other intermediaries or receive any brokerage or commission from any third party.",
                      }),
                      o.jsx("li", {
                        style: { marginBottom: "16px" },
                        children:
                          "The SEBI has issued no penalties/directions under the SEBI Act or any other regulatory body.",
                      }),
                      o.jsx("li", {
                        style: { marginBottom: "16px" },
                        children:
                          "I do not recommend any stock broker or other intermediary to a client, nor do I receive any consideration by way of remuneration or compensation or in any other form whatsoever from the stock broker or another intermediary.",
                      }),
                      o.jsx("li", {
                        style: { marginBottom: "16px" },
                        children:
                          "Investment in equity shares has its own risks. Sincere efforts have been made to present the right investment perspective. The information contained herein is based on analysis and on sources that I consider reliable. I, however, do not vouch for the consistency or the completeness thereof. This material is for personal information and I am not responsible for any loss incurred due to it & take no responsibility whatsoever for any financial profits or loss which may arise from the recommendations above.",
                      }),
                      o.jsx("li", {
                        style: { marginBottom: "16px" },
                        children:
                          "I do not provide any promise or assurance of favourable view for a particular industry or sector or business group in any manner. The investor is requested to take into consideration all the risk factors.",
                      }),
                      o.jsx("li", {
                        style: { marginBottom: "16px" },
                        children:
                          "The information and views in this website & all the services I provide are believed to be reliable, but I do not accept any responsibility (or liability) for errors of fact or opinion. Users have the right to choose the product/s that suits them the most.",
                      }),
                      o.jsx("li", {
                        style: { marginBottom: "16px" },
                        children:
                          "I or any person related might be holding positions in the stocks recommended.",
                      }),
                      o.jsxs("li", {
                        style: { marginBottom: "16px" },
                        children: [
                          "The research recommendations are provided to all my clients who are entitled to receive the research reports. Any Client (Paid or Unpaid), Any third party or anyone else have no rights to forward or share my calls or SMS or Reports or Any Information Provided by me to/with anyone (through any medium) which is received directly or indirectly by them. If found so, then serious legal actions can be taken. For questions, contact me at ",
                          o.jsx("a", {
                            href: "mailto:analystnitinjain@gmail.com",
                            style: {
                              color: "#2563eb",
                              textDecoration: "underline",
                              fontWeight: "500",
                            },
                            children: "analystnitinjain@gmail.com",
                          }),
                          ".",
                        ],
                      }),
                      o.jsx("li", {
                        style: { marginBottom: "16px" },
                        children:
                          "I ensure that the individuals employed as research analyst are separate from other employees who are performing sales trading, dealing, corporate finance advisory or any other activity that may affect the independence of my research report/recommendations. However, these individuals may receive a feedback from sales or trading personnel of brokerage division to ascertain the impact of research report/recommendations.",
                      }),
                      o.jsx("li", {
                        style: { marginBottom: "16px" },
                        children:
                          "I ensure that if a client wants an opinion on a specific position, such suggestion/view under any circumstances shall be considered as an opinion (not advice). I am not liable for any losses whatsoever the client may incur in accepting this opinion.",
                      }),
                      o.jsxs("li", {
                        style: { marginBottom: "16px" },
                        children: [
                          "I do not have any association in any manner with any issuer of products/securities on either ",
                          o.jsx("a", {
                            href: "https://www.analystnitinjain.com",
                            style: {
                              color: "#2563eb",
                              textDecoration: "underline",
                              fontWeight: "500",
                            },
                            children: "www.analystnitinjain.com",
                          }),
                          " or the Telegram channel/s; this ensures that there are no actual or potential conflicts of interest. This also ensures that objectivity or independence in the carrying on research services is not compromised.",
                        ],
                      }),
                      o.jsx("li", {
                        style: { marginBottom: "16px" },
                        children:
                          "Investment in securities market are subject to market risks. Read all the related documents carefully before investing.",
                      }),
                      o.jsx("li", {
                        style: { marginBottom: "16px" },
                        children:
                          "Registration granted by SEBI and certification from NISM is no way guarantee performance of the intermediary or provide any assurance of returns to investors.",
                      }),
                      o.jsxs("li", {
                        style: { marginBottom: "16px" },
                        children: [
                          "By accessing ",
                          o.jsx("a", {
                            href: "https://www.analystnitinjain.com",
                            style: {
                              color: "#2563eb",
                              textDecoration: "underline",
                              fontWeight: "500",
                            },
                            children: "www.analystnitinjain.com",
                          }),
                          ", joining the Telegram channel/s, or any of its associate/group sites, you have read, understood, and agree to be legally bound by the terms of the disclaimer and user agreement.",
                        ],
                      }),
                      o.jsxs("li", {
                        style: { marginBottom: "0" },
                        children: [
                          "I have taken due care and caution in the compilation of data for the website (",
                          o.jsx("a", {
                            href: "https://www.analystnitinjain.com",
                            style: {
                              color: "#2563eb",
                              textDecoration: "underline",
                              fontWeight: "500",
                            },
                            children: "www.analystnitinjain.com",
                          }),
                          ") and the Telegram channel/s. Users are advised to check with other certified experts before taking any investment decision. However, I do not guarantee the consistency, adequacy or completeness of any information and am not responsible for any errors or omissions or for the results obtained from the use of such information. I especially states that I have no financial liability whatsoever to any user on account of the use of information provided on my website.",
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            o.jsxs("div", {
              style: { textAlign: "center", marginTop: "32px" },
              children: [
                o.jsxs("p", {
                  style: { fontSize: "17px" },
                  children: [
                    "For any questions regarding these terms, please contact: ",
                    o.jsx("a", {
                      href: "mailto:analystnitinjain@gmail.com",
                      style: {
                        color: "#2563eb",
                        textDecoration: "underline",
                        fontWeight: "500",
                      },
                      children: "analystnitinjain@gmail.com",
                    }),
                  ],
                }),
                o.jsxs("p", {
                  style: { fontSize: "17px", marginTop: "16px" },
                  children: [
                    "Detailed Disclosures Available ",
                    o.jsx("a", {
                      href: "https://docs.google.com/document/d/1akl8osgM00YncnYbWGfHV0oVEhSFJ2b-sUFSq5KOi04/edit?usp=sharing",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      style: {
                        color: "#2563eb",
                        textDecoration: "underline",
                        fontWeight: "500",
                      },
                      children: "Here",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    })
  ),
  a0 = () => (
    he.useEffect(() => {
      (window.scrollTo(0, 0),
        window.open(
          "https://docs.google.com/document/d/1b3ox0fGR4L9l8uClB07HAyGf2m8wNMsDhp-9-GOs13o/edit?usp=sharing",
          "_blank",
          "noopener,noreferrer",
        ));
    }, []),
    o.jsxs("div", {
      style: {
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "120px 24px 64px",
        minHeight: "calc(100vh - 300px)",
      },
      children: [
        o.jsx("h1", {
          style: {
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "32px",
            textAlign: "center",
            fontFamily: "serif",
          },
          children: "Disclaimers",
        }),
        o.jsxs("div", {
          style: { textAlign: "center", padding: "40px 0" },
          children: [
            o.jsx("p", {
              style: { fontSize: "1.2rem", marginBottom: "30px" },
              children:
                "The disclaimers document has been opened in a new tab.",
            }),
            o.jsxs("p", {
              style: { fontSize: "1rem", color: "#666" },
              children: [
                "If the document didn't open automatically, please",
                o.jsx("a", {
                  href: "https://docs.google.com/document/d/1b3ox0fGR4L9l8uClB07HAyGf2m8wNMsDhp-9-GOs13o/edit?usp=sharing",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  style: {
                    color: "#2563eb",
                    textDecoration: "underline",
                    fontWeight: "500",
                    marginLeft: "5px",
                  },
                  children: "click here",
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
function o0() {
  const [x, D] = he.useState(window.location.pathname),
    [j, y] = he.useState(!1),
    B = (Q) => {
      (window.history.pushState({}, "", Q), D(Q), window.scrollTo(0, 0));
    };
  he.useEffect(() => {
    const Q = setTimeout(() => {
        x === "/" && y(!0);
      }, 1e3),
      H = () => {
        D(window.location.pathname);
      };
    window.addEventListener("popstate", H);
    const T = (U) => {
      var Se;
      let P = U.target,
        J = null;
      for (; P && !J; ) P.tagName === "A" ? (J = P) : (P = P.parentElement);
      if (J && (Se = J.getAttribute("href")) != null && Se.startsWith("/")) {
        U.preventDefault();
        const we = J.getAttribute("href") || "/";
        (console.log("Link clicked:", we), B(we));
      }
    };
    return (
      document.addEventListener("click", T),
      () => {
        (window.removeEventListener("popstate", H),
          document.removeEventListener("click", T),
          clearTimeout(Q));
      }
    );
  }, []);
  const z = () => {
      y(!1);
    },
    te = () => {
      switch ((console.log("Current path:", x), x)) {
        case "/":
          return o.jsx(od, {});
        case "/about":
          return o.jsx(Km, {});
        case "/free-content":
          return o.jsx(km, {});
        case "/subscribe":
          return o.jsx(Jm, {});
        case "/contact":
          return o.jsx(Fm, {});
        case "/investor-charter":
          return o.jsx($m, {});
        case "/code-of-conduct":
          return o.jsx(Im, {});
        case "/faq":
          return o.jsx(Pm, {});
        case "/grievance-redressal":
          return o.jsx(e0, {});
        case "/privacy-policy":
          return o.jsx(t0, {});
        case "/complaints-data":
          return o.jsx(n0, {});
        case "/cancellation-refund":
          return o.jsx(l0, {});
        case "/terms-conditions":
          return o.jsx(i0, {});
        case "/disclaimers":
          return o.jsx(a0, {});
        default:
          return o.jsx(od, {});
      }
    };
  return o.jsxs(o.Fragment, {
    children: [
      o.jsxs("div", {
        className: "flex flex-col min-h-screen",
        children: [o.jsx(Ym, {}), te(), o.jsx(Gm, {})],
      }),
      o.jsx(Xm, { isOpen: j, onClose: z }),
    ],
  });
}
qm.createRoot(document.getElementById("root")).render(
  o.jsx(he.StrictMode, { children: o.jsx(o0, {}) }),
);
