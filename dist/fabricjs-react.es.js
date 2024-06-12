import De, { useState as K, useEffect as Ie, useMemo as yr, useRef as Pe } from "react";
import { fabric as N } from "fabric";
const V = "#000000", ae = "rgba(255, 255, 255, 0.0)", mr = {
  radius: 20,
  left: 100,
  top: 100,
  fill: ae,
  stroke: V
}, Rr = {
  left: 100,
  top: 100,
  fill: ae,
  stroke: V,
  width: 40,
  height: 40,
  angle: 0
}, xe = {
  points: [50, 100, 200, 200],
  options: {
    left: 170,
    top: 150,
    stroke: V
  }
}, ne = {
  type: "text",
  left: 100,
  top: 100,
  fontSize: 16,
  fontFamily: "Arial",
  fill: V
}, _r = (i, h, y, m, p, T) => ({
  canvas: i,
  addCircle: () => {
    const a = new N.Circle({
      ...mr,
      fill: h,
      stroke: y
    });
    i.add(a);
  },
  addRectangle: () => {
    const a = new N.Rect({
      ...Rr,
      fill: h,
      stroke: y
    });
    i.add(a);
  },
  addLine: () => {
    const a = new N.Line(xe.points, {
      ...xe.options,
      stroke: y
    });
    i.add(a);
  },
  addText: (a) => {
    const c = new N.Textbox(a, {
      ...ne,
      fill: y
    });
    c.set({
      text: a
    }), i.add(c);
  },
  updateText: (a) => {
    const c = i.getActiveObjects();
    c.length && c[0].type === ne.type && (c[0].set({
      text: a
    }), i.renderAll());
  },
  deleteAll: () => {
    i.getObjects().forEach((a) => i.remove(a)), i.discardActiveObject(), i.renderAll();
  },
  deleteSelected: () => {
    i.getActiveObjects().forEach((a) => i.remove(a)), i.discardActiveObject(), i.renderAll();
  },
  fillColor: h,
  strokeColor: y,
  setFillColor: (a) => {
    m(a), i.getActiveObjects().forEach((c) => c.set({
      fill: a
    })), i.renderAll();
  },
  setStrokeColor: (a) => {
    p(a), i.getActiveObjects().forEach((c) => {
      if (c.type === ne.type) {
        c.set({
          fill: a
        });
        return;
      }
      c.set({
        stroke: a
      });
    }), i.renderAll();
  },
  zoomIn: () => {
    const a = i.getZoom();
    i.setZoom(a / T);
  },
  zoomOut: () => {
    const a = i.getZoom();
    i.setZoom(a * T);
  }
}), wr = (i = {}) => {
  const h = i.scaleStep || 0.5, {
    defaultFillColor: y,
    defaultStrokeColor: m
  } = i, [p, T] = K(null), [a, c] = K(y || ae), [f, w] = K(m || V), [g, _] = K([]);
  Ie(() => {
    p && ((k) => {
      k.on("selection:cleared", () => {
        _([]);
      }), k.on("selection:created", (I) => {
        _(I.selected);
      }), k.on("selection:updated", (I) => {
        _(I.selected);
      });
    })(p);
  }, [p]);
  const C = yr(() => p ? _r(p, a, f, c, w, h) : void 0, [p]);
  return {
    selectedObjects: g,
    onReady: (j) => {
      console.log("Fabric canvas ready"), T(j);
    },
    editor: C
  };
};
var Le = { exports: {} }, Y = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ke;
function Tr() {
  if (ke)
    return Y;
  ke = 1;
  var i = De, h = Symbol.for("react.element"), y = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, p = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, T = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(c, f, w) {
    var g, _ = {}, C = null, j = null;
    w !== void 0 && (C = "" + w), f.key !== void 0 && (C = "" + f.key), f.ref !== void 0 && (j = f.ref);
    for (g in f)
      m.call(f, g) && !T.hasOwnProperty(g) && (_[g] = f[g]);
    if (c && c.defaultProps)
      for (g in f = c.defaultProps, f)
        _[g] === void 0 && (_[g] = f[g]);
    return { $$typeof: h, type: c, key: C, ref: j, props: _, _owner: p.current };
  }
  return Y.Fragment = y, Y.jsx = a, Y.jsxs = a, Y;
}
var M = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ae;
function Or() {
  return Ae || (Ae = 1, process.env.NODE_ENV !== "production" && function() {
    var i = De, h = Symbol.for("react.element"), y = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), c = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), k = Symbol.iterator, I = "@@iterator";
    function We(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = k && e[k] || e[I];
      return typeof r == "function" ? r : null;
    }
    var A = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        $e("error", e, t);
      }
    }
    function $e(e, r, t) {
      {
        var n = A.ReactDebugCurrentFrame, u = n.getStackAddendum();
        u !== "" && (r += "%s", t = t.concat([u]));
        var l = t.map(function(s) {
          return String(s);
        });
        l.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, l);
      }
    }
    var Ye = !1, Me = !1, Ne = !1, Ve = !1, Ue = !1, oe;
    oe = Symbol.for("react.module.reference");
    function ze(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === m || e === T || Ue || e === p || e === w || e === g || Ve || e === j || Ye || Me || Ne || typeof e == "object" && e !== null && (e.$$typeof === C || e.$$typeof === _ || e.$$typeof === a || e.$$typeof === c || e.$$typeof === f || e.$$typeof === oe || e.getModuleId !== void 0));
    }
    function Je(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var u = r.displayName || r.name || "";
      return u !== "" ? t + "(" + u + ")" : t;
    }
    function ie(e) {
      return e.displayName || "Context";
    }
    function S(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case m:
          return "Fragment";
        case y:
          return "Portal";
        case T:
          return "Profiler";
        case p:
          return "StrictMode";
        case w:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            var r = e;
            return ie(r) + ".Consumer";
          case a:
            var t = e;
            return ie(t._context) + ".Provider";
          case f:
            return Je(e, e.render, "ForwardRef");
          case _:
            var n = e.displayName || null;
            return n !== null ? n : S(e.type) || "Memo";
          case C: {
            var u = e, l = u._payload, s = u._init;
            try {
              return S(s(l));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, L = 0, se, ue, le, ce, fe, de, ve;
    function pe() {
    }
    pe.__reactDisabledLog = !0;
    function Be() {
      {
        if (L === 0) {
          se = console.log, ue = console.info, le = console.warn, ce = console.error, fe = console.group, de = console.groupCollapsed, ve = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: pe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        L++;
      }
    }
    function Ke() {
      {
        if (L--, L === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, e, {
              value: se
            }),
            info: P({}, e, {
              value: ue
            }),
            warn: P({}, e, {
              value: le
            }),
            error: P({}, e, {
              value: ce
            }),
            group: P({}, e, {
              value: fe
            }),
            groupCollapsed: P({}, e, {
              value: de
            }),
            groupEnd: P({}, e, {
              value: ve
            })
          });
        }
        L < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = A.ReactCurrentDispatcher, G;
    function U(e, r, t) {
      {
        if (G === void 0)
          try {
            throw Error();
          } catch (u) {
            var n = u.stack.trim().match(/\n( *(at )?)/);
            G = n && n[1] || "";
          }
        return `
` + G + e;
      }
    }
    var X = !1, z;
    {
      var qe = typeof WeakMap == "function" ? WeakMap : Map;
      z = new qe();
    }
    function be(e, r) {
      if (!e || X)
        return "";
      {
        var t = z.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      X = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var l;
      l = q.current, q.current = null, Be();
      try {
        if (r) {
          var s = function() {
            throw Error();
          };
          if (Object.defineProperty(s.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(s, []);
            } catch (R) {
              n = R;
            }
            Reflect.construct(e, [], s);
          } else {
            try {
              s.call();
            } catch (R) {
              n = R;
            }
            e.call(s.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (R) {
            n = R;
          }
          e();
        }
      } catch (R) {
        if (R && n && typeof R.stack == "string") {
          for (var o = R.stack.split(`
`), E = n.stack.split(`
`), d = o.length - 1, v = E.length - 1; d >= 1 && v >= 0 && o[d] !== E[v]; )
            v--;
          for (; d >= 1 && v >= 0; d--, v--)
            if (o[d] !== E[v]) {
              if (d !== 1 || v !== 1)
                do
                  if (d--, v--, v < 0 || o[d] !== E[v]) {
                    var O = `
` + o[d].replace(" at new ", " at ");
                    return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), typeof e == "function" && z.set(e, O), O;
                  }
                while (d >= 1 && v >= 0);
              break;
            }
        }
      } finally {
        X = !1, q.current = l, Ke(), Error.prepareStackTrace = u;
      }
      var D = e ? e.displayName || e.name : "", x = D ? U(D) : "";
      return typeof e == "function" && z.set(e, x), x;
    }
    function Ge(e, r, t) {
      return be(e, !1);
    }
    function Xe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function J(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return be(e, Xe(e));
      if (typeof e == "string")
        return U(e);
      switch (e) {
        case w:
          return U("Suspense");
        case g:
          return U("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return Ge(e.render);
          case _:
            return J(e.type, r, t);
          case C: {
            var n = e, u = n._payload, l = n._init;
            try {
              return J(l(u), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var W = Object.prototype.hasOwnProperty, ge = {}, Ee = A.ReactDebugCurrentFrame;
    function B(e) {
      if (e) {
        var r = e._owner, t = J(e.type, e._source, r ? r.type : null);
        Ee.setExtraStackFrame(t);
      } else
        Ee.setExtraStackFrame(null);
    }
    function He(e, r, t, n, u) {
      {
        var l = Function.call.bind(W);
        for (var s in e)
          if (l(e, s)) {
            var o = void 0;
            try {
              if (typeof e[s] != "function") {
                var E = Error((n || "React class") + ": " + t + " type `" + s + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[s] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw E.name = "Invariant Violation", E;
              }
              o = e[s](r, s, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (d) {
              o = d;
            }
            o && !(o instanceof Error) && (B(u), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, s, typeof o), B(null)), o instanceof Error && !(o.message in ge) && (ge[o.message] = !0, B(u), b("Failed %s type: %s", t, o.message), B(null));
          }
      }
    }
    var Ze = Array.isArray;
    function H(e) {
      return Ze(e);
    }
    function Qe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function er(e) {
      try {
        return he(e), !1;
      } catch {
        return !0;
      }
    }
    function he(e) {
      return "" + e;
    }
    function ye(e) {
      if (er(e))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qe(e)), he(e);
    }
    var $ = A.ReactCurrentOwner, rr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, me, Re, Z;
    Z = {};
    function tr(e) {
      if (W.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function nr(e) {
      if (W.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ar(e, r) {
      if (typeof e.ref == "string" && $.current && r && $.current.stateNode !== r) {
        var t = S($.current.type);
        Z[t] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', S($.current.type), e.ref), Z[t] = !0);
      }
    }
    function or(e, r) {
      {
        var t = function() {
          me || (me = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function ir(e, r) {
      {
        var t = function() {
          Re || (Re = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var sr = function(e, r, t, n, u, l, s) {
      var o = {
        $$typeof: h,
        type: e,
        key: r,
        ref: t,
        props: s,
        _owner: l
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function ur(e, r, t, n, u) {
      {
        var l, s = {}, o = null, E = null;
        t !== void 0 && (ye(t), o = "" + t), nr(r) && (ye(r.key), o = "" + r.key), tr(r) && (E = r.ref, ar(r, u));
        for (l in r)
          W.call(r, l) && !rr.hasOwnProperty(l) && (s[l] = r[l]);
        if (e && e.defaultProps) {
          var d = e.defaultProps;
          for (l in d)
            s[l] === void 0 && (s[l] = d[l]);
        }
        if (o || E) {
          var v = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && or(s, v), E && ir(s, v);
        }
        return sr(e, o, E, u, n, $.current, s);
      }
    }
    var Q = A.ReactCurrentOwner, _e = A.ReactDebugCurrentFrame;
    function F(e) {
      if (e) {
        var r = e._owner, t = J(e.type, e._source, r ? r.type : null);
        _e.setExtraStackFrame(t);
      } else
        _e.setExtraStackFrame(null);
    }
    var ee;
    ee = !1;
    function re(e) {
      return typeof e == "object" && e !== null && e.$$typeof === h;
    }
    function Te() {
      {
        if (Q.current) {
          var e = S(Q.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function lr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Oe = {};
    function cr(e) {
      {
        var r = Te();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Se(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = cr(r);
        if (Oe[t])
          return;
        Oe[t] = !0;
        var n = "";
        e && e._owner && e._owner !== Q.current && (n = " It was passed a child from " + S(e._owner.type) + "."), F(e), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), F(null);
      }
    }
    function Ce(e, r) {
      {
        if (typeof e != "object")
          return;
        if (H(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            re(n) && Se(n, r);
          }
        else if (re(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var u = We(e);
          if (typeof u == "function" && u !== e.entries)
            for (var l = u.call(e), s; !(s = l.next()).done; )
              re(s.value) && Se(s.value, r);
        }
      }
    }
    function fr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === f || r.$$typeof === _))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = S(r);
          He(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !ee) {
          ee = !0;
          var u = S(r);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function dr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            F(e), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), F(null);
            break;
          }
        }
        e.ref !== null && (F(e), b("Invalid attribute `ref` supplied to `React.Fragment`."), F(null));
      }
    }
    var we = {};
    function je(e, r, t, n, u, l) {
      {
        var s = ze(e);
        if (!s) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var E = lr(u);
          E ? o += E : o += Te();
          var d;
          e === null ? d = "null" : H(e) ? d = "array" : e !== void 0 && e.$$typeof === h ? (d = "<" + (S(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : d = typeof e, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", d, o);
        }
        var v = ur(e, r, t, u, l);
        if (v == null)
          return v;
        if (s) {
          var O = r.children;
          if (O !== void 0)
            if (n)
              if (H(O)) {
                for (var D = 0; D < O.length; D++)
                  Ce(O[D], e);
                Object.freeze && Object.freeze(O);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ce(O, e);
        }
        if (W.call(r, "key")) {
          var x = S(e), R = Object.keys(r).filter(function(hr) {
            return hr !== "key";
          }), te = R.length > 0 ? "{key: someKey, " + R.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!we[x + te]) {
            var Er = R.length > 0 ? "{" + R.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, te, x, Er, x), we[x + te] = !0;
          }
        }
        return e === m ? dr(v) : fr(v), v;
      }
    }
    function vr(e, r, t) {
      return je(e, r, t, !0);
    }
    function pr(e, r, t) {
      return je(e, r, t, !1);
    }
    var br = pr, gr = vr;
    M.Fragment = m, M.jsx = br, M.jsxs = gr;
  }()), M;
}
(function(i) {
  process.env.NODE_ENV === "production" ? i.exports = Tr() : i.exports = Or();
})(Le);
const Fe = Le.exports.jsx, jr = ({
  className: i,
  onReady: h
}) => {
  const y = Pe(null), m = Pe(null);
  return Ie(() => {
    const p = new N.Canvas(y.current), T = () => {
      var c, f;
      p.setHeight(((c = m.current) == null ? void 0 : c.clientHeight) || 0), p.setWidth(((f = m.current) == null ? void 0 : f.clientWidth) || 0), p.renderAll();
    }, a = () => {
      T();
    };
    return T(), window.addEventListener("resize", a, !1), h && h(p), () => {
      p.dispose(), window.removeEventListener("resize", a);
    };
  }, []), /* @__PURE__ */ Fe("div", {
    ref: m,
    className: i,
    children: /* @__PURE__ */ Fe("canvas", {
      ref: y
    })
  });
};
export {
  jr as FabricJSCanvas,
  wr as useFabricJSEditor
};
