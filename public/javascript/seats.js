/*
 jQuery JavaScript Library v2.1.4
 http://jquery.com/

 Includes Sizzle.js
 http://sizzlejs.com/

 Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 Released under the MIT license
 http://jquery.org/license

 Date: 2015-04-28T16:01Z
 Sizzle CSS Selector Engine v2.2.0-pre
 http://sizzlejs.com/

 Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
 Released under the MIT license
 http://jquery.org/license

 Date: 2014-12-16
*/
(function(d, k) {
    "object" === typeof module && "object" === typeof module.exports ? module.exports = d.document ? k(d, !0) : function(E) {
        if (!E.document)
            throw Error("jQuery requires a window with a document");
        return k(E)
    }
    : k(d)
}
)("undefined" !== typeof window ? window : this, function(d, k) {
    function E(c) {
        var f = "length"in c && c.length
          , m = n.type(c);
        return "function" === m || n.isWindow(c) ? !1 : 1 === c.nodeType && f ? !0 : "array" === m || 0 === f || "number" === typeof f && 0 < f && f - 1 in c
    }
    function R(c, f, m) {
        if (n.isFunction(f))
            return n.grep(c, function(r, w) {
                return !!f.call(r, w, r) !== m
            });
        if (f.nodeType)
            return n.grep(c, function(r) {
                return r === f !== m
            });
        if ("string" === typeof f) {
            if (Za.test(f))
                return n.filter(f, c, m);
            f = n.filter(f, c)
        }
        return n.grep(c, function(r) {
            return 0 <= fb.call(f, r) !== m
        })
    }
    function H(c, f) {
        for (; (c = c[f]) && 1 !== c.nodeType; )
            ;
        return c
    }
    function M(c) {
        var f = v[c] = {};
        n.each(c.match(q) || [], function(m, r) {
            f[r] = !0
        });
        return f
    }
    function ja() {
        Ga.removeEventListener("DOMContentLoaded", ja, !1);
        d.removeEventListener("load", ja, !1);
        n.ready()
    }
    function Ea() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        });
        this.expando = n.expando + Ea.uid++
    }
    function Fa(c, f, m) {
        if (void 0 === m && 1 === c.nodeType)
            if (m = "data-" + f.replace(Ab, "-$1").toLowerCase(),
            m = c.getAttribute(m),
            "string" === typeof m) {
                try {
                    m = "true" === m ? !0 : "false" === m ? !1 : "null" === m ? null : +m + "" === m ? +m : Gb.test(m) ? n.parseJSON(m) : m
                } catch (r) {}
                va.set(c, f, m)
            } else
                m = void 0;
        return m
    }
    function oa() {
        return !0
    }
    function b() {
        return !1
    }
    function g() {
        try {
            return Ga.activeElement
        } catch (c) {}
    }
    function u(c, f) {
        return n.nodeName(c, "table") && n.nodeName(11 !== f.nodeType ? f : f.firstChild, "tr") ? c.getElementsByTagName("tbody")[0] || c.appendChild(c.ownerDocument.createElement("tbody")) : c
    }
    function y(c) {
        c.type = (null !== c.getAttribute("type")) + "/" + c.type;
        return c
    }
    function I(c) {
        var f = Y.exec(c.type);
        f ? c.type = f[1] : c.removeAttribute("type");
        return c
    }
    function T(c, f) {
        for (var m = 0, r = c.length; m < r; m++)
            ca.set(c[m], "globalEval", !f || ca.get(f[m], "globalEval"))
    }
    function P(c, f) {
        var m, r;
        if (1 === f.nodeType) {
            if (ca.hasData(c)) {
                var w = ca.access(c);
                var B = ca.set(f, w);
                if (w = w.events)
                    for (r in delete B.handle,
                    B.events = {},
                    w)
                        for (B = 0,
                        m = w[r].length; B < m; B++)
                            n.event.add(f, r, w[r][B])
            }
            va.hasData(c) && (c = va.access(c),
            c = n.extend({}, c),
            va.set(f, c))
        }
    }
    function ia(c, f) {
        var m = c.getElementsByTagName ? c.getElementsByTagName(f || "*") : c.querySelectorAll ? c.querySelectorAll(f || "*") : [];
        return void 0 === f || f && n.nodeName(c, f) ? n.merge([c], m) : m
    }
    function pa(c, f) {
        var m;
        c = n(f.createElement(c)).appendTo(f.body);
        f = d.getDefaultComputedStyle && (m = d.getDefaultComputedStyle(c[0])) ? m.display : n.css(c[0], "display");
        c.detach();
        return f
    }
    function qa(c) {
        var f = Ga
          , m = ya[c];
        m || (m = pa(c, f),
        "none" !== m && m || (ea = (ea || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(f.documentElement),
        f = ea[0].contentDocument,
        f.write(),
        f.close(),
        m = pa(c, f),
        ea.detach()),
        ya[c] = m);
        return m
    }
    function ha(c, f, m) {
        var r, w = c.style;
        (m = m || La(c)) && (r = m.getPropertyValue(f) || m[f]);
        if (m && ("" !== r || n.contains(c.ownerDocument, c) || (r = n.style(c, f)),
        Da.test(r) && Ma.test(f))) {
            c = w.width;
            f = w.minWidth;
            var B = w.maxWidth;
            w.minWidth = w.maxWidth = w.width = r;
            r = m.width;
            w.width = c;
            w.minWidth = f;
            w.maxWidth = B
        }
        return void 0 !== r ? r + "" : r
    }
    function V(c, f) {
        return {
            get: function() {
                if (c())
                    delete this.get;
                else
                    return (this.get = f).apply(this, arguments)
            }
        }
    }
    function aa(c, f) {
        if (f in c)
            return f;
        for (var m = f[0].toUpperCase() + f.slice(1), r = f, w = Qb.length; w--; )
            if (f = Qb[w] + m,
            f in c)
                return f;
        return r
    }
    function ma(c, f, m) {
        return (c = Ra.exec(f)) ? Math.max(0, c[1] - (m || 0)) + (c[2] || "px") : f
    }
    function Ja(c, f, m, r, w) {
        f = m === (r ? "border" : "content") ? 4 : "width" === f ? 1 : 0;
        for (var B = 0; 4 > f; f += 2)
            "margin" === m && (B += n.css(c, m + $b[f], !0, w)),
            r ? ("content" === m && (B -= n.css(c, "padding" + $b[f], !0, w)),
            "margin" !== m && (B -= n.css(c, "border" + $b[f] + "Width", !0, w))) : (B += n.css(c, "padding" + $b[f], !0, w),
            "padding" !== m && (B += n.css(c, "border" + $b[f] + "Width", !0, w)));
        return B
    }
    function Ka(c, f, m) {
        var r = !0
          , w = "width" === f ? c.offsetWidth : c.offsetHeight
          , B = La(c)
          , K = "border-box" === n.css(c, "boxSizing", !1, B);
        if (0 >= w || null == w) {
            w = ha(c, f, B);
            if (0 > w || null == w)
                w = c.style[f];
            if (Da.test(w))
                return w;
            r = K && (Sa.boxSizingReliable() || w === c.style[f]);
            w = parseFloat(w) || 0
        }
        return w + Ja(c, f, m || (K ? "border" : "content"), r, B) + "px"
    }
    function Na(c, f) {
        for (var m, r, w, B = [], K = 0, O = c.length; K < O; K++)
            r = c[K],
            r.style && (B[K] = ca.get(r, "olddisplay"),
            m = r.style.display,
            f ? (B[K] || "none" !== m || (r.style.display = ""),
            "" === r.style.display && Gc(r) && (B[K] = ca.access(r, "olddisplay", qa(r.nodeName)))) : (w = Gc(r),
            "none" === m && w || ca.set(r, "olddisplay", w ? m : n.css(r, "display"))));
        for (K = 0; K < O; K++)
            r = c[K],
            !r.style || f && "none" !== r.style.display && "" !== r.style.display || (r.style.display = f ? B[K] || "" : "none");
        return c
    }
    function na(c, f, m, r, w) {
        return new na.prototype.init(c,f,m,r,w)
    }
    function Ha() {
        setTimeout(function() {
            pb = void 0
        });
        return pb = n.now()
    }
    function xa(c, f) {
        var m = 0
          , r = {
            height: c
        };
        for (f = f ? 1 : 0; 4 > m; m += 2 - f) {
            var w = $b[m];
            r["margin" + w] = r["padding" + w] = c
        }
        f && (r.opacity = r.width = c);
        return r
    }
    function Oa(c, f, m) {
        for (var r, w = (Vb[f] || []).concat(Vb["*"]), B = 0, K = w.length; B < K; B++)
            if (r = w[B].call(m, f, c))
                return r
    }
    function jb(c, f) {
        var m, r;
        for (m in c) {
            var w = n.camelCase(m);
            var B = f[w];
            var K = c[m];
            n.isArray(K) && (B = K[1],
            K = c[m] = K[0]);
            m !== w && (c[w] = K,
            delete c[m]);
            if ((r = n.cssHooks[w]) && "expand"in r)
                for (m in K = r.expand(K),
                delete c[w],
                K)
                    m in c || (c[m] = K[m],
                    f[m] = B);
            else
                f[w] = B
        }
    }
    function lb(c, f, m) {
        var r, w = 0, B = vc.length, K = n.Deferred().always(function() {
            delete O.elem
        }), O = function() {
            if (r)
                return !1;
            var U = pb || Ha();
            U = Math.max(0, W.startTime + W.duration - U);
            for (var ta = 1 - (U / W.duration || 0), wa = 0, Ba = W.tweens.length; wa < Ba; wa++)
                W.tweens[wa].run(ta);
            K.notifyWith(c, [W, ta, U]);
            if (1 > ta && Ba)
                return U;
            K.resolveWith(c, [W]);
            return !1
        }, W = K.promise({
            elem: c,
            props: n.extend({}, f),
            opts: n.extend(!0, {
                specialEasing: {}
            }, m),
            originalProperties: f,
            originalOptions: m,
            startTime: pb || Ha(),
            duration: m.duration,
            tweens: [],
            createTween: function(U, ta) {
                U = n.Tween(c, W.opts, U, ta, W.opts.specialEasing[U] || W.opts.easing);
                W.tweens.push(U);
                return U
            },
            stop: function(U) {
                var ta = 0
                  , wa = U ? W.tweens.length : 0;
                if (r)
                    return this;
                for (r = !0; ta < wa; ta++)
                    W.tweens[ta].run(1);
                U ? K.resolveWith(c, [W, U]) : K.rejectWith(c, [W, U]);
                return this
            }
        });
        m = W.props;
        for (jb(m, W.opts.specialEasing); w < B; w++)
            if (f = vc[w].call(W, c, m, W.opts))
                return f;
        n.map(m, Oa, W);
        n.isFunction(W.opts.start) && W.opts.start.call(c, W);
        n.fx.timer(n.extend(O, {
            elem: c,
            anim: W,
            queue: W.opts.queue
        }));
        return W.progress(W.opts.progress).done(W.opts.done, W.opts.complete).fail(W.opts.fail).always(W.opts.always)
    }
    function Ua(c) {
        return function(f, m) {
            "string" !== typeof f && (m = f,
            f = "*");
            var r = 0
              , w = f.toLowerCase().match(q) || [];
            if (n.isFunction(m))
                for (; f = w[r++]; )
                    "+" === f[0] ? (f = f.slice(1) || "*",
                    (c[f] = c[f] || []).unshift(m)) : (c[f] = c[f] || []).push(m)
        }
    }
    function gb(c, f, m, r) {
        function w(O) {
            var W;
            B[O] = !0;
            n.each(c[O] || [], function(U, ta) {
                U = ta(f, m, r);
                if ("string" === typeof U && !K && !B[U])
                    return f.dataTypes.unshift(U),
                    w(U),
                    !1;
                if (K)
                    return !(W = U)
            });
            return W
        }
        var B = {}
          , K = c === wc;
        return w(f.dataTypes[0]) || !B["*"] && w("*")
    }
    function vb(c, f) {
        var m, r, w = n.ajaxSettings.flatOptions || {};
        for (m in f)
            void 0 !== f[m] && ((w[m] ? c : r ||= {})[m] = f[m]);
        r && n.extend(!0, c, r);
        return c
    }
    function Fb(c, f, m, r) {
        var w;
        if (n.isArray(f))
            n.each(f, function(B, K) {
                m || hd.test(c) ? r(c, K) : Fb(c + "[" + ("object" === typeof K ? B : "") + "]", K, m, r)
            });
        else if (m || "object" !== n.type(f))
            r(c, f);
        else
            for (w in f)
                Fb(c + "[" + w + "]", f[w], m, r)
    }
    function Hb(c) {
        return n.isWindow(c) ? c : 9 === c.nodeType && c.defaultView
    }
    var Cb = []
      , Ib = Cb.slice
      , eb = Cb.concat
      , Va = Cb.push
      , fb = Cb.indexOf
      , fa = {}
      , ua = fa.toString
      , Wa = fa.hasOwnProperty
      , Sa = {}
      , Ga = d.document
      , n = function(c, f) {
        return new n.fn.init(c,f)
    }
      , Rb = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , ac = /^-ms-/
      , pc = /-([\da-z])/gi
      , Wb = function(c, f) {
        return f.toUpperCase()
    };
    n.fn = n.prototype = {
        jquery: "2.1.4",
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return Ib.call(this)
        },
        get: function(c) {
            return null != c ? 0 > c ? this[c + this.length] : this[c] : Ib.call(this)
        },
        pushStack: function(c) {
            c = n.merge(this.constructor(), c);
            c.prevObject = this;
            c.context = this.context;
            return c
        },
        each: function(c, f) {
            return n.each(this, c, f)
        },
        map: function(c) {
            return this.pushStack(n.map(this, function(f, m) {
                return c.call(f, m, f)
            }))
        },
        slice: function() {
            return this.pushStack(Ib.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(c) {
            var f = this.length;
            c = +c + (0 > c ? f : 0);
            return this.pushStack(0 <= c && c < f ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: Va,
        sort: Cb.sort,
        splice: Cb.splice
    };
    n.extend = n.fn.extend = function() {
        var c, f, m, r = arguments[0] || {}, w = 1, B = arguments.length, K = !1;
        "boolean" === typeof r && (K = r,
        r = arguments[w] || {},
        w++);
        "object" === typeof r || n.isFunction(r) || (r = {});
        w === B && (r = this,
        w--);
        for (; w < B; w++)
            if (null != (c = arguments[w]))
                for (f in c) {
                    var O = r[f];
                    var W = c[f];
                    r !== W && (K && W && (n.isPlainObject(W) || (m = n.isArray(W))) ? (m ? (m = !1,
                    O = O && n.isArray(O) ? O : []) : O = O && n.isPlainObject(O) ? O : {},
                    r[f] = n.extend(K, O, W)) : void 0 !== W && (r[f] = W))
                }
        return r
    }
    ;
    n.extend({
        expando: "jQuery" + ("2.1.4" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(c) {
            throw Error(c);
        },
        noop: function() {},
        isFunction: function(c) {
            return "function" === n.type(c)
        },
        isArray: Array.isArray,
        isWindow: function(c) {
            return null != c && c === c.window
        },
        isNumeric: function(c) {
            return !n.isArray(c) && 0 <= c - parseFloat(c) + 1
        },
        isPlainObject: function(c) {
            return "object" !== n.type(c) || c.nodeType || n.isWindow(c) || c.constructor && !Wa.call(c.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(c) {
            for (var f in c)
                return !1;
            return !0
        },
        type: function(c) {
            return null == c ? c + "" : "object" === typeof c || "function" === typeof c ? fa[ua.call(c)] || "object" : typeof c
        },
        globalEval: function(c) {
            var f = eval;
            if (c = n.trim(c))
                1 === c.indexOf("use strict") ? (f = Ga.createElement("script"),
                f.text = c,
                Ga.head.appendChild(f).parentNode.removeChild(f)) : f(c)
        },
        camelCase: function(c) {
            return c.replace(ac, "ms-").replace(pc, Wb)
        },
        nodeName: function(c, f) {
            return c.nodeName && c.nodeName.toLowerCase() === f.toLowerCase()
        },
        each: function(c, f, m) {
            var r = 0
              , w = c.length;
            var B = E(c);
            if (m)
                if (B)
                    for (; r < w && (B = f.apply(c[r], m),
                    !1 !== B); r++)
                        ;
                else
                    for (r in c) {
                        if (B = f.apply(c[r], m),
                        !1 === B)
                            break
                    }
            else if (B)
                for (; r < w && (B = f.call(c[r], r, c[r]),
                !1 !== B); r++)
                    ;
            else
                for (r in c)
                    if (B = f.call(c[r], r, c[r]),
                    !1 === B)
                        break;
            return c
        },
        trim: function(c) {
            return null == c ? "" : (c + "").replace(Rb, "")
        },
        makeArray: function(c, f) {
            f = f || [];
            null != c && (E(Object(c)) ? n.merge(f, "string" === typeof c ? [c] : c) : Va.call(f, c));
            return f
        },
        inArray: function(c, f, m) {
            return null == f ? -1 : fb.call(f, c, m)
        },
        merge: function(c, f) {
            for (var m = +f.length, r = 0, w = c.length; r < m; r++)
                c[w++] = f[r];
            c.length = w;
            return c
        },
        grep: function(c, f, m) {
            for (var r = [], w = 0, B = c.length, K = !m; w < B; w++)
                m = !f(c[w], w),
                m !== K && r.push(c[w]);
            return r
        },
        map: function(c, f, m) {
            var r = 0
              , w = c.length
              , B = [];
            if (E(c))
                for (; r < w; r++) {
                    var K = f(c[r], r, m);
                    null != K && B.push(K)
                }
            else
                for (r in c)
                    K = f(c[r], r, m),
                    null != K && B.push(K);
            return eb.apply([], B)
        },
        guid: 1,
        proxy: function(c, f) {
            if ("string" === typeof f) {
                var m = c[f];
                f = c;
                c = m
            }
            if (n.isFunction(c)) {
                var r = Ib.call(arguments, 2);
                m = function() {
                    return c.apply(f || this, r.concat(Ib.call(arguments)))
                }
                ;
                m.guid = c.guid = c.guid || n.guid++;
                return m
            }
        },
        now: Date.now,
        support: Sa
    });
    n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(c, f) {
        fa["[object " + f + "]"] = f.toLowerCase()
    });
    var ic = function(c) {
        function f(C, N, J, Z) {
            var la, ra, sa;
            (N ? N.ownerDocument || N : qb) !== ab && Yc(N);
            N = N || ab;
            J = J || [];
            var Ia = N.nodeType;
            if ("string" !== typeof C || !C || 1 !== Ia && 9 !== Ia && 11 !== Ia)
                return J;
            if (!Z && kb) {
                if (11 !== Ia && (la = Lc.exec(C)))
                    if (sa = la[1])
                        if (9 === Ia)
                            if ((ra = N.getElementById(sa)) && ra.parentNode) {
                                if (ra.id === sa)
                                    return J.push(ra),
                                    J
                            } else
                                return J;
                        else {
                            if (N.ownerDocument && (ra = N.ownerDocument.getElementById(sa)) && bc(N, ra) && ra.id === sa)
                                return J.push(ra),
                                J
                        }
                    else {
                        if (la[2])
                            return zc.apply(J, N.getElementsByTagName(C)),
                            J;
                        if ((sa = la[3]) && Jb.getElementsByClassName)
                            return zc.apply(J, N.getElementsByClassName(sa)),
                            J
                    }
                if (Jb.qsa && (!cb || !cb.test(C))) {
                    ra = la = bb;
                    sa = N;
                    var za = 1 !== Ia && C;
                    if (1 === Ia && "object" !== N.nodeName.toLowerCase()) {
                        Ia = id(C);
                        (la = N.getAttribute("id")) ? ra = la.replace(jd, "\\$&") : N.setAttribute("id", ra);
                        ra = "[id='" + ra + "'] ";
                        for (sa = Ia.length; sa--; )
                            Ia[sa] = ra + Ba(Ia[sa]);
                        sa = Mc.test(C) && ta(N.parentNode) || N;
                        za = Ia.join(",")
                    }
                    if (za)
                        try {
                            return zc.apply(J, sa.querySelectorAll(za)),
                            J
                        } catch ($a) {} finally {
                            la || N.removeAttribute("id")
                        }
                }
            }
            return td(C.replace(G, "$1"), N, J, Z)
        }
        function m() {
            function C(J, Z) {
                N.push(J + " ") > mb.cacheLength && delete C[N.shift()];
                return C[J + " "] = Z
            }
            var N = [];
            return C
        }
        function r(C) {
            C[bb] = !0;
            return C
        }
        function w(C) {
            var N = ab.createElement("div");
            try {
                return !!C(N)
            } catch (J) {
                return !1
            } finally {
                N.parentNode && N.parentNode.removeChild(N)
            }
        }
        function B(C, N) {
            var J = C.split("|");
            for (C = C.length; C--; )
                mb.attrHandle[J[C]] = N
        }
        function K(C, N) {
            var J = N && C
              , Z = J && 1 === C.nodeType && 1 === N.nodeType && (~N.sourceIndex || -2147483648) - (~C.sourceIndex || -2147483648);
            if (Z)
                return Z;
            if (J)
                for (; J = J.nextSibling; )
                    if (J === N)
                        return -1;
            return C ? 1 : -1
        }
        function O(C) {
            return function(N) {
                return "input" === N.nodeName.toLowerCase() && N.type === C
            }
        }
        function W(C) {
            return function(N) {
                var J = N.nodeName.toLowerCase();
                return ("input" === J || "button" === J) && N.type === C
            }
        }
        function U(C) {
            return r(function(N) {
                N = +N;
                return r(function(J, Z) {
                    for (var la, ra = C([], J.length, N), sa = ra.length; sa--; )
                        J[la = ra[sa]] && (J[la] = !(Z[la] = J[la]))
                })
            })
        }
        function ta(C) {
            return C && "undefined" !== typeof C.getElementsByTagName && C
        }
        function wa() {}
        function Ba(C) {
            for (var N = 0, J = C.length, Z = ""; N < J; N++)
                Z += C[N].value;
            return Z
        }
        function nb(C, N, J) {
            var Z = N.dir
              , la = J && "parentNode" === Z
              , ra = gc++;
            return N.first ? function(sa, Ia, za) {
                for (; sa = sa[Z]; )
                    if (1 === sa.nodeType || la)
                        return C(sa, Ia, za)
            }
            : function(sa, Ia, za) {
                var $a, hb = [Bb, ra];
                if (za)
                    for (; sa = sa[Z]; ) {
                        if ((1 === sa.nodeType || la) && C(sa, Ia, za))
                            return !0
                    }
                else
                    for (; sa = sa[Z]; )
                        if (1 === sa.nodeType || la) {
                            var ib = sa[bb] || (sa[bb] = {});
                            if (($a = ib[Z]) && $a[0] === Bb && $a[1] === ra)
                                return hb[2] = $a[2];
                            ib[Z] = hb;
                            if (hb[2] = C(sa, Ia, za))
                                return !0
                        }
            }
        }
        function tb(C) {
            return 1 < C.length ? function(N, J, Z) {
                for (var la = C.length; la--; )
                    if (!C[la](N, J, Z))
                        return !1;
                return !0
            }
            : C[0]
        }
        function Xb(C, N, J, Z, la) {
            for (var ra, sa = [], Ia = 0, za = C.length, $a = null != N; Ia < za; Ia++)
                if (ra = C[Ia])
                    if (!J || J(ra, Z, la))
                        sa.push(ra),
                        $a && N.push(Ia);
            return sa
        }
        function ub(C, N, J, Z, la, ra) {
            Z && !Z[bb] && (Z = ub(Z));
            la && !la[bb] && (la = ub(la, ra));
            return r(function(sa, Ia, za, $a) {
                var hb, ib = [], Tb = [], Ac = Ia.length, Db;
                if (!(Db = sa)) {
                    Db = N || "*";
                    for (var rb = za.nodeType ? [za] : za, cc = [], dc = 0, kd = rb.length; dc < kd; dc++)
                        f(Db, rb[dc], cc);
                    Db = cc
                }
                Db = !C || !sa && N ? Db : Xb(Db, ib, C, za, $a);
                rb = J ? la || (sa ? C : Ac || Z) ? [] : Ia : Db;
                J && J(Db, rb, za, $a);
                if (Z) {
                    var xc = Xb(rb, Tb);
                    Z(xc, [], za, $a);
                    for (za = xc.length; za--; )
                        if (hb = xc[za])
                            rb[Tb[za]] = !(Db[Tb[za]] = hb)
                }
                if (sa) {
                    if (la || C) {
                        if (la) {
                            xc = [];
                            for (za = rb.length; za--; )
                                (hb = rb[za]) && xc.push(Db[za] = hb);
                            la(null, rb = [], xc, $a)
                        }
                        for (za = rb.length; za--; )
                            (hb = rb[za]) && -1 < (xc = la ? p(sa, hb) : ib[za]) && (sa[xc] = !(Ia[xc] = hb))
                    }
                } else
                    rb = Xb(rb === Ia ? rb.splice(Ac, rb.length) : rb),
                    la ? la(null, Ia, rb, $a) : zc.apply(Ia, rb)
            })
        }
        function wb(C) {
            var N, J, Z = C.length, la = mb.relative[C[0].type];
            var ra = la || mb.relative[" "];
            for (var sa = la ? 1 : 0, Ia = nb(function(hb) {
                return hb === N
            }, ra, !0), za = nb(function(hb) {
                return -1 < p(N, hb)
            }, ra, !0), $a = [function(hb, ib, Tb) {
                hb = !la && (Tb || ib !== Ob) || ((N = ib).nodeType ? Ia(hb, ib, Tb) : za(hb, ib, Tb));
                N = null;
                return hb
            }
            ]; sa < Z; sa++)
                if (ra = mb.relative[C[sa].type])
                    $a = [nb(tb($a), ra)];
                else {
                    ra = mb.filter[C[sa].type].apply(null, C[sa].matches);
                    if (ra[bb]) {
                        for (J = ++sa; J < Z && !mb.relative[C[J].type]; J++)
                            ;
                        return ub(1 < sa && tb($a), 1 < sa && Ba(C.slice(0, sa - 1).concat({
                            value: " " === C[sa - 2].type ? "*" : ""
                        })).replace(G, "$1"), ra, sa < J && wb(C.slice(sa, J)), J < Z && wb(C = C.slice(J)), J < Z && Ba(C))
                    }
                    $a.push(ra)
                }
            return tb($a)
        }
        function Uc(C, N) {
            var J = 0 < N.length
              , Z = 0 < C.length
              , la = function(ra, sa, Ia, za, $a) {
                var hb, ib, Tb, Ac = 0, Db = "0", rb = ra && [], cc = [], dc = Ob, kd = ra || Z && mb.find.TAG("*", $a), xc = Bb += null == dc ? 1 : Math.random() || .1, ud = kd.length;
                for ($a && (Ob = sa !== ab && sa); Db !== ud && null != (hb = kd[Db]); Db++) {
                    if (Z && hb) {
                        for (ib = 0; Tb = C[ib++]; )
                            if (Tb(hb, sa, Ia)) {
                                za.push(hb);
                                break
                            }
                        $a && (Bb = xc)
                    }
                    J && ((hb = !Tb && hb) && Ac--,
                    ra && rb.push(hb))
                }
                Ac += Db;
                if (J && Db !== Ac) {
                    for (ib = 0; Tb = N[ib++]; )
                        Tb(rb, cc, sa, Ia);
                    if (ra) {
                        if (0 < Ac)
                            for (; Db--; )
                                rb[Db] || cc[Db] || (cc[Db] = oc.call(za));
                        cc = Xb(cc)
                    }
                    zc.apply(za, cc);
                    $a && !ra && 0 < cc.length && 1 < Ac + N.length && f.uniqueSort(za)
                }
                $a && (Bb = xc,
                Ob = dc);
                return rb
            };
            return J ? r(la) : la
        }
        var Ta, Ob, Xa, Eb, ab, Nb, kb, cb, Pb, sb, bc, bb = "sizzle" + 1 * new Date, qb = c.document, Bb = 0, gc = 0, Bc = m(), qc = m(), ob = m(), rc = function(C, N) {
            C === N && (Eb = !0);
            return 0
        }, Hc = {}.hasOwnProperty, sc = [], oc = sc.pop, cd = sc.push, zc = sc.push, Zc = sc.slice, p = function(C, N) {
            for (var J = 0, Z = C.length; J < Z; J++)
                if (C[J] === N)
                    return J;
            return -1
        }, A = RegExp("[\\x20\\t\\r\\n\\f]+", "g"), G = RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"), X = RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"), Ca = RegExp("^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"), Aa = RegExp("=[\\x20\\t\\r\\n\\f]*([^\\]'\"]*?)[\\x20\\t\\r\\n\\f]*\\]", "g"), Ya = RegExp(":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w#-]|[^\\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)"), Kb = RegExp("^(?:\\\\.|[\\w#-]|[^\\x00-\\xa0])+$"), xb = {
            ID: RegExp("^#((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)"),
            CLASS: RegExp("^\\.((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)"),
            TAG: RegExp("^((?:\\\\.|[\\w*-]|[^\\x00-\\xa0])+)"),
            ATTR: RegExp("^\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w#-]|[^\\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\]"),
            PSEUDO: RegExp("^:((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w#-]|[^\\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)"),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
            bool: RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$", "i"),
            needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")
        }, Sb = /^(?:input|select|textarea|button)$/i, Nc = /^h\d$/i, yc = /^[^{]+\{\s*\[native \w/, Lc = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Mc = /[+~]/, jd = /'|\\/g, hc = RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)", "ig"), Jc = function(C, N, J) {
            C = "0x" + N - 65536;
            return C !== C || J ? N : 0 > C ? String.fromCharCode(C + 65536) : String.fromCharCode(C >> 10 | 55296, C & 1023 | 56320)
        }, rd = function() {
            Yc()
        };
        try {
            zc.apply(sc = Zc.call(qb.childNodes), qb.childNodes),
            sc[qb.childNodes.length].nodeType
        } catch (C) {
            zc = {
                apply: sc.length ? function(N, J) {
                    cd.apply(N, Zc.call(J))
                }
                : function(N, J) {
                    for (var Z = N.length, la = 0; N[Z++] = J[la++]; )
                        ;
                    N.length = Z - 1
                }
            }
        }
        var Jb = f.support = {};
        var vd = f.isXML = function(C) {
            return (C = C && (C.ownerDocument || C).documentElement) ? "HTML" !== C.nodeName : !1
        }
        ;
        var Yc = f.setDocument = function(C) {
            var N = C ? C.ownerDocument || C : qb;
            if (N === ab || 9 !== N.nodeType || !N.documentElement)
                return ab;
            ab = N;
            Nb = N.documentElement;
            (C = N.defaultView) && C !== C.top && (C.addEventListener ? C.addEventListener("unload", rd, !1) : C.attachEvent && C.attachEvent("onunload", rd));
            kb = !vd(N);
            Jb.attributes = w(function(J) {
                J.className = "i";
                return !J.getAttribute("className")
            });
            Jb.getElementsByTagName = w(function(J) {
                J.appendChild(N.createComment(""));
                return !J.getElementsByTagName("*").length
            });
            Jb.getElementsByClassName = yc.test(N.getElementsByClassName);
            Jb.getById = w(function(J) {
                Nb.appendChild(J).id = bb;
                return !N.getElementsByName || !N.getElementsByName(bb).length
            });
            Jb.getById ? (mb.find.ID = function(J, Z) {
                if ("undefined" !== typeof Z.getElementById && kb)
                    return (J = Z.getElementById(J)) && J.parentNode ? [J] : []
            }
            ,
            mb.filter.ID = function(J) {
                var Z = J.replace(hc, Jc);
                return function(la) {
                    return la.getAttribute("id") === Z
                }
            }
            ) : (delete mb.find.ID,
            mb.filter.ID = function(J) {
                var Z = J.replace(hc, Jc);
                return function(la) {
                    return (la = "undefined" !== typeof la.getAttributeNode && la.getAttributeNode("id")) && la.value === Z
                }
            }
            );
            mb.find.TAG = Jb.getElementsByTagName ? function(J, Z) {
                if ("undefined" !== typeof Z.getElementsByTagName)
                    return Z.getElementsByTagName(J);
                if (Jb.qsa)
                    return Z.querySelectorAll(J)
            }
            : function(J, Z) {
                var la = []
                  , ra = 0;
                Z = Z.getElementsByTagName(J);
                if ("*" === J) {
                    for (; J = Z[ra++]; )
                        1 === J.nodeType && la.push(J);
                    return la
                }
                return Z
            }
            ;
            mb.find.CLASS = Jb.getElementsByClassName && function(J, Z) {
                if (kb)
                    return Z.getElementsByClassName(J)
            }
            ;
            Pb = [];
            cb = [];
            if (Jb.qsa = yc.test(N.querySelectorAll))
                w(function(J) {
                    Nb.appendChild(J).innerHTML = "<a id='" + bb + "'></a><select id='" + bb + "-\f]' msallowcapture=''><option selected=''></option></select>";
                    J.querySelectorAll("[msallowcapture^='']").length && cb.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                    J.querySelectorAll("[selected]").length || cb.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
                    J.querySelectorAll("[id~=" + bb + "-]").length || cb.push("~=");
                    J.querySelectorAll(":checked").length || cb.push(":checked");
                    J.querySelectorAll("a#" + bb + "+*").length || cb.push(".#.+[+~]")
                }),
                w(function(J) {
                    var Z = N.createElement("input");
                    Z.setAttribute("type", "hidden");
                    J.appendChild(Z).setAttribute("name", "D");
                    J.querySelectorAll("[name=d]").length && cb.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
                    J.querySelectorAll(":enabled").length || cb.push(":enabled", ":disabled");
                    J.querySelectorAll("*,:x");
                    cb.push(",.*:")
                });
            (Jb.matchesSelector = yc.test(sb = Nb.matches || Nb.webkitMatchesSelector || Nb.mozMatchesSelector || Nb.oMatchesSelector || Nb.msMatchesSelector)) && w(function(J) {
                Jb.disconnectedMatch = sb.call(J, "div");
                sb.call(J, "[s!='']:x");
                Pb.push("!=", ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w#-]|[^\\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)")
            });
            cb = cb.length && new RegExp(cb.join("|"));
            Pb = Pb.length && new RegExp(Pb.join("|"));
            bc = (C = yc.test(Nb.compareDocumentPosition)) || yc.test(Nb.contains) ? function(J, Z) {
                var la = 9 === J.nodeType ? J.documentElement : J;
                Z = Z && Z.parentNode;
                return J === Z || !!(Z && 1 === Z.nodeType && (la.contains ? la.contains(Z) : J.compareDocumentPosition && J.compareDocumentPosition(Z) & 16))
            }
            : function(J, Z) {
                if (Z)
                    for (; Z = Z.parentNode; )
                        if (Z === J)
                            return !0;
                return !1
            }
            ;
            rc = C ? function(J, Z) {
                if (J === Z)
                    return Eb = !0,
                    0;
                var la = !J.compareDocumentPosition - !Z.compareDocumentPosition;
                if (la)
                    return la;
                la = (J.ownerDocument || J) === (Z.ownerDocument || Z) ? J.compareDocumentPosition(Z) : 1;
                return la & 1 || !Jb.sortDetached && Z.compareDocumentPosition(J) === la ? J === N || J.ownerDocument === qb && bc(qb, J) ? -1 : Z === N || Z.ownerDocument === qb && bc(qb, Z) ? 1 : Xa ? p(Xa, J) - p(Xa, Z) : 0 : la & 4 ? -1 : 1
            }
            : function(J, Z) {
                if (J === Z)
                    return Eb = !0,
                    0;
                var la = 0
                  , ra = J.parentNode
                  , sa = Z.parentNode
                  , Ia = [J]
                  , za = [Z];
                if (!ra || !sa)
                    return J === N ? -1 : Z === N ? 1 : ra ? -1 : sa ? 1 : Xa ? p(Xa, J) - p(Xa, Z) : 0;
                if (ra === sa)
                    return K(J, Z);
                for (; J = J.parentNode; )
                    Ia.unshift(J);
                for (J = Z; J = J.parentNode; )
                    za.unshift(J);
                for (; Ia[la] === za[la]; )
                    la++;
                return la ? K(Ia[la], za[la]) : Ia[la] === qb ? -1 : za[la] === qb ? 1 : 0
            }
            ;
            return N
        }
        ;
        f.matches = function(C, N) {
            return f(C, null, null, N)
        }
        ;
        f.matchesSelector = function(C, N) {
            (C.ownerDocument || C) !== ab && Yc(C);
            N = N.replace(Aa, "='$1']");
            if (!(!Jb.matchesSelector || !kb || Pb && Pb.test(N) || cb && cb.test(N)))
                try {
                    var J = sb.call(C, N);
                    if (J || Jb.disconnectedMatch || C.document && 11 !== C.document.nodeType)
                        return J
                } catch (Z) {}
            return 0 < f(N, ab, null, [C]).length
        }
        ;
        f.contains = function(C, N) {
            (C.ownerDocument || C) !== ab && Yc(C);
            return bc(C, N)
        }
        ;
        f.attr = function(C, N) {
            (C.ownerDocument || C) !== ab && Yc(C);
            var J = mb.attrHandle[N.toLowerCase()];
            J = J && Hc.call(mb.attrHandle, N.toLowerCase()) ? J(C, N, !kb) : void 0;
            return void 0 !== J ? J : Jb.attributes || !kb ? C.getAttribute(N) : (J = C.getAttributeNode(N)) && J.specified ? J.value : null
        }
        ;
        f.error = function(C) {
            throw Error("Syntax error, unrecognized expression: " + C);
        }
        ;
        f.uniqueSort = function(C) {
            var N, J = [], Z = 0, la = 0;
            Eb = !Jb.detectDuplicates;
            Xa = !Jb.sortStable && C.slice(0);
            C.sort(rc);
            if (Eb) {
                for (; N = C[la++]; )
                    N === C[la] && (Z = J.push(la));
                for (; Z--; )
                    C.splice(J[Z], 1)
            }
            Xa = null;
            return C
        }
        ;
        var qd = f.getText = function(C) {
            var N = ""
              , J = 0;
            var Z = C.nodeType;
            if (!Z)
                for (; Z = C[J++]; )
                    N += qd(Z);
            else if (1 === Z || 9 === Z || 11 === Z) {
                if ("string" === typeof C.textContent)
                    return C.textContent;
                for (C = C.firstChild; C; C = C.nextSibling)
                    N += qd(C)
            } else if (3 === Z || 4 === Z)
                return C.nodeValue;
            return N
        }
        ;
        var mb = f.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: xb,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(C) {
                    C[1] = C[1].replace(hc, Jc);
                    C[3] = (C[3] || C[4] || C[5] || "").replace(hc, Jc);
                    "~=" === C[2] && (C[3] = " " + C[3] + " ");
                    return C.slice(0, 4)
                },
                CHILD: function(C) {
                    C[1] = C[1].toLowerCase();
                    "nth" === C[1].slice(0, 3) ? (C[3] || f.error(C[0]),
                    C[4] = +(C[4] ? C[5] + (C[6] || 1) : 2 * ("even" === C[3] || "odd" === C[3])),
                    C[5] = +(C[7] + C[8] || "odd" === C[3])) : C[3] && f.error(C[0]);
                    return C
                },
                PSEUDO: function(C) {
                    var N, J = !C[6] && C[2];
                    if (xb.CHILD.test(C[0]))
                        return null;
                    C[3] ? C[2] = C[4] || C[5] || "" : J && Ya.test(J) && (N = id(J, !0)) && (N = J.indexOf(")", J.length - N) - J.length) && (C[0] = C[0].slice(0, N),
                    C[2] = J.slice(0, N));
                    return C.slice(0, 3)
                }
            },
            filter: {
                TAG: function(C) {
                    var N = C.replace(hc, Jc).toLowerCase();
                    return "*" === C ? function() {
                        return !0
                    }
                    : function(J) {
                        return J.nodeName && J.nodeName.toLowerCase() === N
                    }
                },
                CLASS: function(C) {
                    var N = Bc[C + " "];
                    return N || (N = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + C + "([\\x20\\t\\r\\n\\f]|$)"),
                    Bc(C, function(J) {
                        return N.test("string" === typeof J.className && J.className || "undefined" !== typeof J.getAttribute && J.getAttribute("class") || "")
                    }))
                },
                ATTR: function(C, N, J) {
                    return function(Z) {
                        Z = f.attr(Z, C);
                        if (null == Z)
                            return "!=" === N;
                        if (!N)
                            return !0;
                        Z += "";
                        return "=" === N ? Z === J : "!=" === N ? Z !== J : "^=" === N ? J && 0 === Z.indexOf(J) : "*=" === N ? J && -1 < Z.indexOf(J) : "$=" === N ? J && Z.slice(-J.length) === J : "~=" === N ? -1 < (" " + Z.replace(A, " ") + " ").indexOf(J) : "|=" === N ? Z === J || Z.slice(0, J.length + 1) === J + "-" : !1
                    }
                },
                CHILD: function(C, N, J, Z, la) {
                    var ra = "nth" !== C.slice(0, 3)
                      , sa = "last" !== C.slice(-4)
                      , Ia = "of-type" === N;
                    return 1 === Z && 0 === la ? function(za) {
                        return !!za.parentNode
                    }
                    : function(za, $a, hb) {
                        var ib;
                        $a = ra !== sa ? "nextSibling" : "previousSibling";
                        var Tb = za.parentNode
                          , Ac = Ia && za.nodeName.toLowerCase();
                        hb = !hb && !Ia;
                        if (Tb) {
                            if (ra) {
                                for (; $a; ) {
                                    for (ib = za; ib = ib[$a]; )
                                        if (Ia ? ib.nodeName.toLowerCase() === Ac : 1 === ib.nodeType)
                                            return !1;
                                    var Db = $a = "only" === C && !Db && "nextSibling"
                                }
                                return !0
                            }
                            Db = [sa ? Tb.firstChild : Tb.lastChild];
                            if (sa && hb) {
                                hb = Tb[bb] || (Tb[bb] = {});
                                var rb = hb[C] || [];
                                var cc = rb[0] === Bb && rb[1];
                                var dc = rb[0] === Bb && rb[2];
                                for (ib = cc && Tb.childNodes[cc]; ib = ++cc && ib && ib[$a] || (dc = cc = 0) || Db.pop(); )
                                    if (1 === ib.nodeType && ++dc && ib === za) {
                                        hb[C] = [Bb, cc, dc];
                                        break
                                    }
                            } else if (hb && (rb = (za[bb] || (za[bb] = {}))[C]) && rb[0] === Bb)
                                dc = rb[1];
                            else
                                for (; (ib = ++cc && ib && ib[$a] || (dc = cc = 0) || Db.pop()) && ((Ia ? ib.nodeName.toLowerCase() !== Ac : 1 !== ib.nodeType) || !++dc || (hb && ((ib[bb] || (ib[bb] = {}))[C] = [Bb, dc]),
                                ib !== za)); )
                                    ;
                            dc -= la;
                            return dc === Z || 0 === dc % Z && 0 <= dc / Z
                        }
                    }
                },
                PSEUDO: function(C, N) {
                    var J = mb.pseudos[C] || mb.setFilters[C.toLowerCase()] || f.error("unsupported pseudo: " + C);
                    if (J[bb])
                        return J(N);
                    if (1 < J.length) {
                        var Z = [C, C, "", N];
                        return mb.setFilters.hasOwnProperty(C.toLowerCase()) ? r(function(la, ra) {
                            for (var sa, Ia = J(la, N), za = Ia.length; za--; )
                                sa = p(la, Ia[za]),
                                la[sa] = !(ra[sa] = Ia[za])
                        }) : function(la) {
                            return J(la, 0, Z)
                        }
                    }
                    return J
                }
            },
            pseudos: {
                not: r(function(C) {
                    var N = []
                      , J = []
                      , Z = sd(C.replace(G, "$1"));
                    return Z[bb] ? r(function(la, ra, sa, Ia) {
                        Ia = Z(la, null, Ia, []);
                        for (var za = la.length; za--; )
                            if (sa = Ia[za])
                                la[za] = !(ra[za] = sa)
                    }) : function(la, ra, sa) {
                        N[0] = la;
                        Z(N, null, sa, J);
                        N[0] = null;
                        return !J.pop()
                    }
                }),
                has: r(function(C) {
                    return function(N) {
                        return 0 < f(C, N).length
                    }
                }),
                contains: r(function(C) {
                    C = C.replace(hc, Jc);
                    return function(N) {
                        return -1 < (N.textContent || N.innerText || qd(N)).indexOf(C)
                    }
                }),
                lang: r(function(C) {
                    Kb.test(C || "") || f.error("unsupported lang: " + C);
                    C = C.replace(hc, Jc).toLowerCase();
                    return function(N) {
                        var J;
                        do
                            if (J = kb ? N.lang : N.getAttribute("xml:lang") || N.getAttribute("lang"))
                                return J = J.toLowerCase(),
                                J === C || 0 === J.indexOf(C + "-");
                        while ((N = N.parentNode) && 1 === N.nodeType);
                        return !1
                    }
                }),
                target: function(C) {
                    var N = c.location && c.location.hash;
                    return N && N.slice(1) === C.id
                },
                root: function(C) {
                    return C === Nb
                },
                focus: function(C) {
                    return C === ab.activeElement && (!ab.hasFocus || ab.hasFocus()) && !!(C.type || C.href || ~C.tabIndex)
                },
                enabled: function(C) {
                    return !1 === C.disabled
                },
                disabled: function(C) {
                    return !0 === C.disabled
                },
                checked: function(C) {
                    var N = C.nodeName.toLowerCase();
                    return "input" === N && !!C.checked || "option" === N && !!C.selected
                },
                selected: function(C) {
                    C.parentNode && C.parentNode.selectedIndex;
                    return !0 === C.selected
                },
                empty: function(C) {
                    for (C = C.firstChild; C; C = C.nextSibling)
                        if (6 > C.nodeType)
                            return !1;
                    return !0
                },
                parent: function(C) {
                    return !mb.pseudos.empty(C)
                },
                header: function(C) {
                    return Nc.test(C.nodeName)
                },
                input: function(C) {
                    return Sb.test(C.nodeName)
                },
                button: function(C) {
                    var N = C.nodeName.toLowerCase();
                    return "input" === N && "button" === C.type || "button" === N
                },
                text: function(C) {
                    var N;
                    return "input" === C.nodeName.toLowerCase() && "text" === C.type && (null == (N = C.getAttribute("type")) || "text" === N.toLowerCase())
                },
                first: U(function() {
                    return [0]
                }),
                last: U(function(C, N) {
                    return [N - 1]
                }),
                eq: U(function(C, N, J) {
                    return [0 > J ? J + N : J]
                }),
                even: U(function(C, N) {
                    for (var J = 0; J < N; J += 2)
                        C.push(J);
                    return C
                }),
                odd: U(function(C, N) {
                    for (var J = 1; J < N; J += 2)
                        C.push(J);
                    return C
                }),
                lt: U(function(C, N, J) {
                    for (N = 0 > J ? J + N : J; 0 <= --N; )
                        C.push(N);
                    return C
                }),
                gt: U(function(C, N, J) {
                    for (J = 0 > J ? J + N : J; ++J < N; )
                        C.push(J);
                    return C
                })
            }
        };
        mb.pseudos.nth = mb.pseudos.eq;
        for (Ta in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            mb.pseudos[Ta] = O(Ta);
        for (Ta in {
            submit: !0,
            reset: !0
        })
            mb.pseudos[Ta] = W(Ta);
        wa.prototype = mb.filters = mb.pseudos;
        mb.setFilters = new wa;
        var id = f.tokenize = function(C, N) {
            var J, Z, la, ra, sa;
            if (ra = qc[C + " "])
                return N ? 0 : ra.slice(0);
            ra = C;
            var Ia = [];
            for (sa = mb.preFilter; ra; ) {
                if (!za || (J = X.exec(ra)))
                    J && (ra = ra.slice(J[0].length) || ra),
                    Ia.push(Z = []);
                var za = !1;
                if (J = Ca.exec(ra))
                    za = J.shift(),
                    Z.push({
                        value: za,
                        type: J[0].replace(G, " ")
                    }),
                    ra = ra.slice(za.length);
                for (la in mb.filter)
                    !(J = xb[la].exec(ra)) || sa[la] && !(J = sa[la](J)) || (za = J.shift(),
                    Z.push({
                        value: za,
                        type: la,
                        matches: J
                    }),
                    ra = ra.slice(za.length));
                if (!za)
                    break
            }
            return N ? ra.length : ra ? f.error(C) : qc(C, Ia).slice(0)
        }
        ;
        var sd = f.compile = function(C, N) {
            var J, Z = [], la = [], ra = ob[C + " "];
            if (!ra) {
                N ||= id(C);
                for (J = N.length; J--; )
                    ra = wb(N[J]),
                    ra[bb] ? Z.push(ra) : la.push(ra);
                ra = ob(C, Uc(la, Z));
                ra.selector = C
            }
            return ra
        }
        ;
        var td = f.select = function(C, N, J, Z) {
            var la, ra, sa, Ia = "function" === typeof C && C, za = !Z && id(C = Ia.selector || C);
            J = J || [];
            if (1 === za.length) {
                var $a = za[0] = za[0].slice(0);
                if (2 < $a.length && "ID" === (ra = $a[0]).type && Jb.getById && 9 === N.nodeType && kb && mb.relative[$a[1].type]) {
                    N = (mb.find.ID(ra.matches[0].replace(hc, Jc), N) || [])[0];
                    if (!N)
                        return J;
                    Ia && (N = N.parentNode);
                    C = C.slice($a.shift().value.length)
                }
                for (la = xb.needsContext.test(C) ? 0 : $a.length; la--; ) {
                    ra = $a[la];
                    if (mb.relative[sa = ra.type])
                        break;
                    if (sa = mb.find[sa])
                        if (Z = sa(ra.matches[0].replace(hc, Jc), Mc.test($a[0].type) && ta(N.parentNode) || N)) {
                            $a.splice(la, 1);
                            C = Z.length && Ba($a);
                            if (!C)
                                return zc.apply(J, Z),
                                J;
                            break
                        }
                }
            }
            (Ia || sd(C, za))(Z, N, !kb, J, Mc.test(C) && ta(N.parentNode) || N);
            return J
        }
        ;
        Jb.sortStable = bb.split("").sort(rc).join("") === bb;
        Jb.detectDuplicates = !!Eb;
        Yc();
        Jb.sortDetached = w(function(C) {
            return C.compareDocumentPosition(ab.createElement("div")) & 1
        });
        w(function(C) {
            C.innerHTML = "<a href='#'></a>";
            return "#" === C.firstChild.getAttribute("href")
        }) || B("type|href|height|width", function(C, N, J) {
            if (!J)
                return C.getAttribute(N, "type" === N.toLowerCase() ? 1 : 2)
        });
        Jb.attributes && w(function(C) {
            C.innerHTML = "<input/>";
            C.firstChild.setAttribute("value", "");
            return "" === C.firstChild.getAttribute("value")
        }) || B("value", function(C, N, J) {
            if (!J && "input" === C.nodeName.toLowerCase())
                return C.defaultValue
        });
        w(function(C) {
            return null == C.getAttribute("disabled")
        }) || B("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function(C, N, J) {
            var Z;
            if (!J)
                return !0 === C[N] ? N.toLowerCase() : (Z = C.getAttributeNode(N)) && Z.specified ? Z.value : null
        });
        return f
    }(d);
    n.find = ic;
    n.expr = ic.selectors;
    n.expr[":"] = n.expr.pseudos;
    n.unique = ic.uniqueSort;
    n.text = ic.getText;
    n.isXMLDoc = ic.isXML;
    n.contains = ic.contains;
    var Lb = n.expr.match.needsContext
      , yb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
      , Za = /^.[^:#\[\.,]*$/;
    n.filter = function(c, f, m) {
        var r = f[0];
        m && (c = ":not(" + c + ")");
        return 1 === f.length && 1 === r.nodeType ? n.find.matchesSelector(r, c) ? [r] : [] : n.find.matches(c, n.grep(f, function(w) {
            return 1 === w.nodeType
        }))
    }
    ;
    n.fn.extend({
        find: function(c) {
            var f, m = this.length, r = [], w = this;
            if ("string" !== typeof c)
                return this.pushStack(n(c).filter(function() {
                    for (f = 0; f < m; f++)
                        if (n.contains(w[f], this))
                            return !0
                }));
            for (f = 0; f < m; f++)
                n.find(c, w[f], r);
            r = this.pushStack(1 < m ? n.unique(r) : r);
            r.selector = this.selector ? this.selector + " " + c : c;
            return r
        },
        filter: function(c) {
            return this.pushStack(R(this, c || [], !1))
        },
        not: function(c) {
            return this.pushStack(R(this, c || [], !0))
        },
        is: function(c) {
            return !!R(this, "string" === typeof c && Lb.test(c) ? n(c) : c || [], !1).length
        }
    });
    var fc = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (n.fn.init = function(c, f) {
        if (!c)
            return this;
        if ("string" === typeof c) {
            var m = "<" === c[0] && ">" === c[c.length - 1] && 3 <= c.length ? [null, c, null] : fc.exec(c);
            if (!m || !m[1] && f)
                return !f || f.jquery ? (f || Ub).find(c) : this.constructor(f).find(c);
            if (m[1]) {
                if (f = f instanceof n ? f[0] : f,
                n.merge(this, n.parseHTML(m[1], f && f.nodeType ? f.ownerDocument || f : Ga, !0)),
                yb.test(m[1]) && n.isPlainObject(f))
                    for (m in f)
                        if (n.isFunction(this[m]))
                            this[m](f[m]);
                        else
                            this.attr(m, f[m])
            } else
                (f = Ga.getElementById(m[2])) && f.parentNode && (this.length = 1,
                this[0] = f),
                this.context = Ga,
                this.selector = c;
            return this
        }
        if (c.nodeType)
            return this.context = this[0] = c,
            this.length = 1,
            this;
        if (n.isFunction(c))
            return "undefined" !== typeof Ub.ready ? Ub.ready(c) : c(n);
        void 0 !== c.selector && (this.selector = c.selector,
        this.context = c.context);
        return n.makeArray(c, this)
    }
    ).prototype = n.fn;
    var Ub = n(Ga);
    var S = /^(?:parents|prev(?:Until|All))/
      , Q = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    n.extend({
        dir: function(c, f, m) {
            for (var r = [], w = void 0 !== m; (c = c[f]) && 9 !== c.nodeType; )
                if (1 === c.nodeType) {
                    if (w && n(c).is(m))
                        break;
                    r.push(c)
                }
            return r
        },
        sibling: function(c, f) {
            for (var m = []; c; c = c.nextSibling)
                1 === c.nodeType && c !== f && m.push(c);
            return m
        }
    });
    n.fn.extend({
        has: function(c) {
            var f = n(c, this)
              , m = f.length;
            return this.filter(function() {
                for (var r = 0; r < m; r++)
                    if (n.contains(this, f[r]))
                        return !0
            })
        },
        closest: function(c, f) {
            for (var m, r = 0, w = this.length, B = [], K = Lb.test(c) || "string" !== typeof c ? n(c, f || this.context) : 0; r < w; r++)
                for (m = this[r]; m && m !== f; m = m.parentNode)
                    if (11 > m.nodeType && (K ? -1 < K.index(m) : 1 === m.nodeType && n.find.matchesSelector(m, c))) {
                        B.push(m);
                        break
                    }
            return this.pushStack(1 < B.length ? n.unique(B) : B)
        },
        index: function(c) {
            return c ? "string" === typeof c ? fb.call(n(c), this[0]) : fb.call(this, c.jquery ? c[0] : c) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(c, f) {
            return this.pushStack(n.unique(n.merge(this.get(), n(c, f))))
        },
        addBack: function(c) {
            return this.add(null == c ? this.prevObject : this.prevObject.filter(c))
        }
    });
    n.each({
        parent: function(c) {
            return (c = c.parentNode) && 11 !== c.nodeType ? c : null
        },
        parents: function(c) {
            return n.dir(c, "parentNode")
        },
        parentsUntil: function(c, f, m) {
            return n.dir(c, "parentNode", m)
        },
        next: function(c) {
            return H(c, "nextSibling")
        },
        prev: function(c) {
            return H(c, "previousSibling")
        },
        nextAll: function(c) {
            return n.dir(c, "nextSibling")
        },
        prevAll: function(c) {
            return n.dir(c, "previousSibling")
        },
        nextUntil: function(c, f, m) {
            return n.dir(c, "nextSibling", m)
        },
        prevUntil: function(c, f, m) {
            return n.dir(c, "previousSibling", m)
        },
        siblings: function(c) {
            return n.sibling((c.parentNode || {}).firstChild, c)
        },
        children: function(c) {
            return n.sibling(c.firstChild)
        },
        contents: function(c) {
            return c.contentDocument || n.merge([], c.childNodes)
        }
    }, function(c, f) {
        n.fn[c] = function(m, r) {
            var w = n.map(this, f, m);
            "Until" !== c.slice(-5) && (r = m);
            r && "string" === typeof r && (w = n.filter(r, w));
            1 < this.length && (Q[c] || n.unique(w),
            S.test(c) && w.reverse());
            return this.pushStack(w)
        }
    });
    var q = /\S+/g
      , v = {};
    n.Callbacks = function(c) {
        c = "string" === typeof c ? v[c] || M(c) : n.extend({}, c);
        var f, m, r, w, B, K, O = [], W = !c.once && [], U = function(wa) {
            f = c.memory && wa;
            m = !0;
            K = w || 0;
            w = 0;
            B = O.length;
            for (r = !0; O && K < B; K++)
                if (!1 === O[K].apply(wa[0], wa[1]) && c.stopOnFalse) {
                    f = !1;
                    break
                }
            r = !1;
            O && (W ? W.length && U(W.shift()) : f ? O = [] : ta.disable())
        }, ta = {
            add: function() {
                if (O) {
                    var wa = O.length;
                    (function tb(nb) {
                        n.each(nb, function(Xb, ub) {
                            Xb = n.type(ub);
                            "function" === Xb ? c.unique && ta.has(ub) || O.push(ub) : ub && ub.length && "string" !== Xb && tb(ub)
                        })
                    }
                    )(arguments);
                    r ? B = O.length : f && (w = wa,
                    U(f))
                }
                return this
            },
            remove: function() {
                O && n.each(arguments, function(wa, Ba) {
                    for (var nb; -1 < (nb = n.inArray(Ba, O, nb)); )
                        O.splice(nb, 1),
                        r && (nb <= B && B--,
                        nb <= K && K--)
                });
                return this
            },
            has: function(wa) {
                return wa ? -1 < n.inArray(wa, O) : !(!O || !O.length)
            },
            empty: function() {
                O = [];
                B = 0;
                return this
            },
            disable: function() {
                O = W = f = void 0;
                return this
            },
            disabled: function() {
                return !O
            },
            lock: function() {
                W = void 0;
                f || ta.disable();
                return this
            },
            locked: function() {
                return !W
            },
            fireWith: function(wa, Ba) {
                !O || m && !W || (Ba = Ba || [],
                Ba = [wa, Ba.slice ? Ba.slice() : Ba],
                r ? W.push(Ba) : U(Ba));
                return this
            },
            fire: function() {
                ta.fireWith(this, arguments);
                return this
            },
            fired: function() {
                return !!m
            }
        };
        return ta
    }
    ;
    n.extend({
        Deferred: function(c) {
            var f = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]]
              , m = "pending"
              , r = {
                state: function() {
                    return m
                },
                always: function() {
                    w.done(arguments).fail(arguments);
                    return this
                },
                then: function() {
                    var B = arguments;
                    return n.Deferred(function(K) {
                        n.each(f, function(O, W) {
                            var U = n.isFunction(B[O]) && B[O];
                            w[W[1]](function() {
                                var ta = U && U.apply(this, arguments);
                                if (ta && n.isFunction(ta.promise))
                                    ta.promise().done(K.resolve).fail(K.reject).progress(K.notify);
                                else
                                    K[W[0] + "With"](this === r ? K.promise() : this, U ? [ta] : arguments)
                            })
                        });
                        B = null
                    }).promise()
                },
                promise: function(B) {
                    return null != B ? n.extend(B, r) : r
                }
            }
              , w = {};
            r.pipe = r.then;
            n.each(f, function(B, K) {
                var O = K[2]
                  , W = K[3];
                r[K[1]] = O.add;
                W && O.add(function() {
                    m = W
                }, f[B ^ 1][2].disable, f[2][2].lock);
                w[K[0]] = function() {
                    w[K[0] + "With"](this === w ? r : this, arguments);
                    return this
                }
                ;
                w[K[0] + "With"] = O.fireWith
            });
            r.promise(w);
            c && c.call(w, w);
            return w
        },
        when: function(c) {
            var f = 0, m = Ib.call(arguments), r = m.length, w = 1 !== r || c && n.isFunction(c.promise) ? r : 0, B = 1 === w ? c : n.Deferred(), K = function(ta, wa, Ba) {
                return function(nb) {
                    wa[ta] = this;
                    Ba[ta] = 1 < arguments.length ? Ib.call(arguments) : nb;
                    Ba === W ? B.notifyWith(wa, Ba) : --w || B.resolveWith(wa, Ba)
                }
            }, O;
            if (1 < r) {
                var W = Array(r);
                var U = Array(r);
                for (O = Array(r); f < r; f++)
                    m[f] && n.isFunction(m[f].promise) ? m[f].promise().done(K(f, O, m)).fail(B.reject).progress(K(f, U, W)) : --w
            }
            w || B.resolveWith(O, m);
            return B.promise()
        }
    });
    var F;
    n.fn.ready = function(c) {
        n.ready.promise().done(c);
        return this
    }
    ;
    n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(c) {
            c ? n.readyWait++ : n.ready(!0)
        },
        ready: function(c) {
            (!0 === c ? --n.readyWait : n.isReady) || (n.isReady = !0,
            !0 !== c && 0 < --n.readyWait || (F.resolveWith(Ga, [n]),
            n.fn.triggerHandler && (n(Ga).triggerHandler("ready"),
            n(Ga).off("ready"))))
        }
    });
    n.ready.promise = function(c) {
        F || (F = n.Deferred(),
        "complete" === Ga.readyState ? setTimeout(n.ready) : (Ga.addEventListener("DOMContentLoaded", ja, !1),
        d.addEventListener("load", ja, !1)));
        return F.promise(c)
    }
    ;
    n.ready.promise();
    var ba = n.access = function(c, f, m, r, w, B, K) {
        var O = 0
          , W = c.length
          , U = null == m;
        if ("object" === n.type(m))
            for (O in w = !0,
            m)
                n.access(c, f, O, m[O], !0, B, K);
        else if (void 0 !== r && (w = !0,
        n.isFunction(r) || (K = !0),
        U && (K ? (f.call(c, r),
        f = null) : (U = f,
        f = function(ta, wa, Ba) {
            return U.call(n(ta), Ba)
        }
        )),
        f))
            for (; O < W; O++)
                f(c[O], m, K ? r : r.call(c[O], O, f(c[O], m)));
        return w ? c : U ? f.call(c) : W ? f(c[0], m) : B
    }
    ;
    n.acceptData = function(c) {
        return 1 === c.nodeType || 9 === c.nodeType || !+c.nodeType
    }
    ;
    Ea.uid = 1;
    Ea.accepts = n.acceptData;
    Ea.prototype = {
        key: function(c) {
            if (!Ea.accepts(c))
                return 0;
            var f = {}
              , m = c[this.expando];
            if (!m) {
                m = Ea.uid++;
                try {
                    f[this.expando] = {
                        value: m
                    },
                    Object.defineProperties(c, f)
                } catch (r) {
                    f[this.expando] = m,
                    n.extend(c, f)
                }
            }
            this.cache[m] || (this.cache[m] = {});
            return m
        },
        set: function(c, f, m) {
            var r;
            c = this.key(c);
            var w = this.cache[c];
            if ("string" === typeof f)
                w[f] = m;
            else if (n.isEmptyObject(w))
                n.extend(this.cache[c], f);
            else
                for (r in f)
                    w[r] = f[r];
            return w
        },
        get: function(c, f) {
            c = this.cache[this.key(c)];
            return void 0 === f ? c : c[f]
        },
        access: function(c, f, m) {
            if (void 0 === f || f && "string" === typeof f && void 0 === m)
                return m = this.get(c, f),
                void 0 !== m ? m : this.get(c, n.camelCase(f));
            this.set(c, f, m);
            return void 0 !== m ? m : f
        },
        remove: function(c, f) {
            var m = this.key(c);
            c = this.cache[m];
            if (void 0 === f)
                this.cache[m] = {};
            else
                for (n.isArray(f) ? m = f.concat(f.map(n.camelCase)) : (m = n.camelCase(f),
                m = f in c ? [f, m] : m in c ? [m] : m.match(q) || []),
                f = m.length; f--; )
                    delete c[m[f]]
        },
        hasData: function(c) {
            return !n.isEmptyObject(this.cache[c[this.expando]] || {})
        },
        discard: function(c) {
            c[this.expando] && delete this.cache[c[this.expando]]
        }
    };
    var ca = new Ea
      , va = new Ea
      , Gb = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , Ab = /([A-Z])/g;
    n.extend({
        hasData: function(c) {
            return va.hasData(c) || ca.hasData(c)
        },
        data: function(c, f, m) {
            return va.access(c, f, m)
        },
        removeData: function(c, f) {
            va.remove(c, f)
        },
        _data: function(c, f, m) {
            return ca.access(c, f, m)
        },
        _removeData: function(c, f) {
            ca.remove(c, f)
        }
    });
    n.fn.extend({
        data: function(c, f) {
            var m, r = this[0], w = r && r.attributes;
            if (void 0 === c) {
                if (this.length) {
                    var B = va.get(r);
                    if (1 === r.nodeType && !ca.get(r, "hasDataAttrs")) {
                        for (m = w.length; m--; )
                            if (w[m]) {
                                var K = w[m].name;
                                0 === K.indexOf("data-") && (K = n.camelCase(K.slice(5)),
                                Fa(r, K, B[K]))
                            }
                        ca.set(r, "hasDataAttrs", !0)
                    }
                }
                return B
            }
            return "object" === typeof c ? this.each(function() {
                va.set(this, c)
            }) : ba(this, function(O) {
                var W = n.camelCase(c);
                if (r && void 0 === O) {
                    var U = va.get(r, c);
                    if (void 0 !== U)
                        return U;
                    U = va.get(r, W);
                    if (void 0 !== U)
                        return U;
                    U = Fa(r, W, void 0);
                    if (void 0 !== U)
                        return U
                } else
                    this.each(function() {
                        var ta = va.get(this, W);
                        va.set(this, W, O);
                        -1 !== c.indexOf("-") && void 0 !== ta && va.set(this, c, O)
                    })
            }, null, f, 1 < arguments.length, null, !0)
        },
        removeData: function(c) {
            return this.each(function() {
                va.remove(this, c)
            })
        }
    });
    n.extend({
        queue: function(c, f, m) {
            if (c) {
                f = (f || "fx") + "queue";
                var r = ca.get(c, f);
                m && (!r || n.isArray(m) ? r = ca.access(c, f, n.makeArray(m)) : r.push(m));
                return r || []
            }
        },
        dequeue: function(c, f) {
            f = f || "fx";
            var m = n.queue(c, f)
              , r = m.length
              , w = m.shift()
              , B = n._queueHooks(c, f)
              , K = function() {
                n.dequeue(c, f)
            };
            "inprogress" === w && (w = m.shift(),
            r--);
            w && ("fx" === f && m.unshift("inprogress"),
            delete B.stop,
            w.call(c, K, B));
            !r && B && B.empty.fire()
        },
        _queueHooks: function(c, f) {
            var m = f + "queueHooks";
            return ca.get(c, m) || ca.access(c, m, {
                empty: n.Callbacks("once memory").add(function() {
                    ca.remove(c, [f + "queue", m])
                })
            })
        }
    });
    n.fn.extend({
        queue: function(c, f) {
            var m = 2;
            "string" !== typeof c && (f = c,
            c = "fx",
            m--);
            return arguments.length < m ? n.queue(this[0], c) : void 0 === f ? this : this.each(function() {
                var r = n.queue(this, c, f);
                n._queueHooks(this, c);
                "fx" === c && "inprogress" !== r[0] && n.dequeue(this, c)
            })
        },
        dequeue: function(c) {
            return this.each(function() {
                n.dequeue(this, c)
            })
        },
        clearQueue: function(c) {
            return this.queue(c || "fx", [])
        },
        promise: function(c, f) {
            var m, r = 1, w = n.Deferred(), B = this, K = this.length, O = function() {
                --r || w.resolveWith(B, [B])
            };
            "string" !== typeof c && (f = c,
            c = void 0);
            for (c = c || "fx"; K--; )
                (m = ca.get(B[K], c + "queueHooks")) && m.empty && (r++,
                m.empty.add(O));
            O();
            return w.promise(f)
        }
    });
    var Yb = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , $b = ["Top", "Right", "Bottom", "Left"]
      , Gc = function(c, f) {
        c = f || c;
        return "none" === n.css(c, "display") || !n.contains(c.ownerDocument, c)
    }
      , Vc = /^(?:checkbox|radio)$/i;
    (function() {
        var c = Ga.createDocumentFragment().appendChild(Ga.createElement("div"))
          , f = Ga.createElement("input");
        f.setAttribute("type", "radio");
        f.setAttribute("checked", "checked");
        f.setAttribute("name", "t");
        c.appendChild(f);
        Sa.checkClone = c.cloneNode(!0).cloneNode(!0).lastChild.checked;
        c.innerHTML = "<textarea>x</textarea>";
        Sa.noCloneChecked = !!c.cloneNode(!0).lastChild.defaultValue
    }
    )();
    Sa.focusinBubbles = "onfocusin"in d;
    var dd = /^key/
      , a = /^(?:mouse|pointer|contextmenu)|click/
      , e = /^(?:focusinfocus|focusoutblur)$/
      , h = /^([^.]*)(?:\.(.+)|)$/;
    n.event = {
        global: {},
        add: function(c, f, m, r, w) {
            var B, K, O, W, U;
            if (O = ca.get(c)) {
                if (m.handler) {
                    var ta = m;
                    m = ta.handler;
                    w = ta.selector
                }
                m.guid || (m.guid = n.guid++);
                (K = O.events) || (K = O.events = {});
                (B = O.handle) || (B = O.handle = function(tb) {
                    return "undefined" !== typeof n && n.event.triggered !== tb.type ? n.event.dispatch.apply(c, arguments) : void 0
                }
                );
                f = (f || "").match(q) || [""];
                for (O = f.length; O--; ) {
                    var wa = h.exec(f[O]) || [];
                    var Ba = W = wa[1];
                    var nb = (wa[2] || "").split(".").sort();
                    Ba && (wa = n.event.special[Ba] || {},
                    Ba = (w ? wa.delegateType : wa.bindType) || Ba,
                    wa = n.event.special[Ba] || {},
                    W = n.extend({
                        type: Ba,
                        origType: W,
                        data: r,
                        handler: m,
                        guid: m.guid,
                        selector: w,
                        needsContext: w && n.expr.match.needsContext.test(w),
                        namespace: nb.join(".")
                    }, ta),
                    (U = K[Ba]) || (U = K[Ba] = [],
                    U.delegateCount = 0,
                    wa.setup && !1 !== wa.setup.call(c, r, nb, B) || c.addEventListener && c.addEventListener(Ba, B, !1)),
                    wa.add && (wa.add.call(c, W),
                    W.handler.guid || (W.handler.guid = m.guid)),
                    w ? U.splice(U.delegateCount++, 0, W) : U.push(W),
                    n.event.global[Ba] = !0)
                }
            }
        },
        remove: function(c, f, m, r, w) {
            var B, K, O, W, U, ta = ca.hasData(c) && ca.get(c);
            if (ta && (O = ta.events)) {
                f = (f || "").match(q) || [""];
                for (W = f.length; W--; ) {
                    var wa = h.exec(f[W]) || [];
                    var Ba = U = wa[1];
                    var nb = (wa[2] || "").split(".").sort();
                    if (Ba) {
                        var tb = n.event.special[Ba] || {};
                        Ba = (r ? tb.delegateType : tb.bindType) || Ba;
                        var Xb = O[Ba] || [];
                        wa = wa[2] && new RegExp("(^|\\.)" + nb.join("\\.(?:.*\\.|)") + "(\\.|$)");
                        for (K = B = Xb.length; B--; ) {
                            var ub = Xb[B];
                            !w && U !== ub.origType || m && m.guid !== ub.guid || wa && !wa.test(ub.namespace) || r && r !== ub.selector && ("**" !== r || !ub.selector) || (Xb.splice(B, 1),
                            ub.selector && Xb.delegateCount--,
                            tb.remove && tb.remove.call(c, ub))
                        }
                        K && !Xb.length && (tb.teardown && !1 !== tb.teardown.call(c, nb, ta.handle) || n.removeEvent(c, Ba, ta.handle),
                        delete O[Ba])
                    } else
                        for (Ba in O)
                            n.event.remove(c, Ba + f[W], m, r, !0)
                }
                n.isEmptyObject(O) && (delete ta.handle,
                ca.remove(c, "events"))
            }
        },
        trigger: function(c, f, m, r) {
            var w, B, K = [m || Ga], O = Wa.call(c, "type") ? c.type : c;
            var W = Wa.call(c, "namespace") ? c.namespace.split(".") : [];
            var U = w = m = m || Ga;
            if (3 !== m.nodeType && 8 !== m.nodeType && !e.test(O + n.event.triggered)) {
                0 <= O.indexOf(".") && (W = O.split("."),
                O = W.shift(),
                W.sort());
                var ta = 0 > O.indexOf(":") && "on" + O;
                c = c[n.expando] ? c : new n.Event(O,"object" === typeof c && c);
                c.isTrigger = r ? 2 : 3;
                c.namespace = W.join(".");
                c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + W.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                c.result = void 0;
                c.target || (c.target = m);
                f = null == f ? [c] : n.makeArray(f, [c]);
                W = n.event.special[O] || {};
                if (r || !W.trigger || !1 !== W.trigger.apply(m, f)) {
                    if (!r && !W.noBubble && !n.isWindow(m)) {
                        var wa = W.delegateType || O;
                        e.test(wa + O) || (U = U.parentNode);
                        for (; U; U = U.parentNode)
                            K.push(U),
                            w = U;
                        w === (m.ownerDocument || Ga) && K.push(w.defaultView || w.parentWindow || d)
                    }
                    for (w = 0; (U = K[w++]) && !c.isPropagationStopped(); )
                        c.type = 1 < w ? wa : W.bindType || O,
                        (B = (ca.get(U, "events") || {})[c.type] && ca.get(U, "handle")) && B.apply(U, f),
                        (B = ta && U[ta]) && B.apply && n.acceptData(U) && (c.result = B.apply(U, f),
                        !1 === c.result && c.preventDefault());
                    c.type = O;
                    r || c.isDefaultPrevented() || W._default && !1 !== W._default.apply(K.pop(), f) || !n.acceptData(m) || !ta || !n.isFunction(m[O]) || n.isWindow(m) || ((w = m[ta]) && (m[ta] = null),
                    n.event.triggered = O,
                    m[O](),
                    n.event.triggered = void 0,
                    w && (m[ta] = w));
                    return c.result
                }
            }
        },
        dispatch: function(c) {
            c = n.event.fix(c);
            var f, m, r, w = Ib.call(arguments);
            var B = (ca.get(this, "events") || {})[c.type] || [];
            var K = n.event.special[c.type] || {};
            w[0] = c;
            c.delegateTarget = this;
            if (!K.preDispatch || !1 !== K.preDispatch.call(this, c)) {
                var O = n.event.handlers.call(this, c, B);
                for (B = 0; (r = O[B++]) && !c.isPropagationStopped(); )
                    for (c.currentTarget = r.elem,
                    f = 0; (m = r.handlers[f++]) && !c.isImmediatePropagationStopped(); )
                        if (!c.namespace_re || c.namespace_re.test(m.namespace))
                            c.handleObj = m,
                            c.data = m.data,
                            m = ((n.event.special[m.origType] || {}).handle || m.handler).apply(r.elem, w),
                            void 0 !== m && !1 === (c.result = m) && (c.preventDefault(),
                            c.stopPropagation());
                K.postDispatch && K.postDispatch.call(this, c);
                return c.result
            }
        },
        handlers: function(c, f) {
            var m, r = [], w = f.delegateCount, B = c.target;
            if (w && B.nodeType && (!c.button || "click" !== c.type))
                for (; B !== this; B = B.parentNode || this)
                    if (!0 !== B.disabled || "click" !== c.type) {
                        var K = [];
                        for (m = 0; m < w; m++) {
                            var O = f[m];
                            var W = O.selector + " ";
                            void 0 === K[W] && (K[W] = O.needsContext ? 0 <= n(W, this).index(B) : n.find(W, this, null, [B]).length);
                            K[W] && K.push(O)
                        }
                        K.length && r.push({
                            elem: B,
                            handlers: K
                        })
                    }
            w < f.length && r.push({
                elem: this,
                handlers: f.slice(w)
            });
            return r
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"],
            filter: function(c, f) {
                null == c.which && (c.which = null != f.charCode ? f.charCode : f.keyCode);
                return c
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(c, f) {
                var m = f.button;
                if (null == c.pageX && null != f.clientX) {
                    var r = c.target.ownerDocument || Ga;
                    var w = r.documentElement;
                    r = r.body;
                    c.pageX = f.clientX + (w && w.scrollLeft || r && r.scrollLeft || 0) - (w && w.clientLeft || r && r.clientLeft || 0);
                    c.pageY = f.clientY + (w && w.scrollTop || r && r.scrollTop || 0) - (w && w.clientTop || r && r.clientTop || 0)
                }
                c.which || void 0 === m || (c.which = m & 1 ? 1 : m & 2 ? 3 : m & 4 ? 2 : 0);
                return c
            }
        },
        fix: function(c) {
            if (c[n.expando])
                return c;
            var f = c.type;
            var m = c
              , r = this.fixHooks[f];
            r || (this.fixHooks[f] = r = a.test(f) ? this.mouseHooks : dd.test(f) ? this.keyHooks : {});
            var w = r.props ? this.props.concat(r.props) : this.props;
            c = new n.Event(m);
            for (f = w.length; f--; ) {
                var B = w[f];
                c[B] = m[B]
            }
            c.target || (c.target = Ga);
            3 === c.target.nodeType && (c.target = c.target.parentNode);
            return r.filter ? r.filter(c, m) : c
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== g() && this.focus)
                        return this.focus(),
                        !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === g() && this.blur)
                        return this.blur(),
                        !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && n.nodeName(this, "input"))
                        return this.click(),
                        !1
                },
                _default: function(c) {
                    return n.nodeName(c.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(c) {
                    void 0 !== c.result && c.originalEvent && (c.originalEvent.returnValue = c.result)
                }
            }
        },
        simulate: function(c, f, m, r) {
            c = n.extend(new n.Event, m, {
                type: c,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? n.event.trigger(c, null, f) : n.event.dispatch.call(f, c);
            c.isDefaultPrevented() && m.preventDefault()
        }
    };
    n.removeEvent = function(c, f, m) {
        c.removeEventListener && c.removeEventListener(f, m, !1)
    }
    ;
    n.Event = function(c, f) {
        if (!(this instanceof n.Event))
            return new n.Event(c,f);
        c && c.type ? (this.originalEvent = c,
        this.type = c.type,
        this.isDefaultPrevented = c.defaultPrevented || void 0 === c.defaultPrevented && !1 === c.returnValue ? oa : b) : this.type = c;
        f && n.extend(this, f);
        this.timeStamp = c && c.timeStamp || n.now();
        this[n.expando] = !0
    }
    ;
    n.Event.prototype = {
        isDefaultPrevented: b,
        isPropagationStopped: b,
        isImmediatePropagationStopped: b,
        preventDefault: function() {
            var c = this.originalEvent;
            this.isDefaultPrevented = oa;
            c && c.preventDefault && c.preventDefault()
        },
        stopPropagation: function() {
            var c = this.originalEvent;
            this.isPropagationStopped = oa;
            c && c.stopPropagation && c.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var c = this.originalEvent;
            this.isImmediatePropagationStopped = oa;
            c && c.stopImmediatePropagation && c.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(c, f) {
        n.event.special[c] = {
            delegateType: f,
            bindType: f,
            handle: function(m) {
                var r = m.relatedTarget
                  , w = m.handleObj;
                if (!r || r !== this && !n.contains(this, r)) {
                    m.type = w.origType;
                    var B = w.handler.apply(this, arguments);
                    m.type = f
                }
                return B
            }
        }
    });
    Sa.focusinBubbles || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(c, f) {
        var m = function(r) {
            n.event.simulate(f, r.target, n.event.fix(r), !0)
        };
        n.event.special[f] = {
            setup: function() {
                var r = this.ownerDocument || this
                  , w = ca.access(r, f);
                w || r.addEventListener(c, m, !0);
                ca.access(r, f, (w || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this
                  , w = ca.access(r, f) - 1;
                w ? ca.access(r, f, w) : (r.removeEventListener(c, m, !0),
                ca.remove(r, f))
            }
        }
    });
    n.fn.extend({
        on: function(c, f, m, r, w) {
            var B;
            if ("object" === typeof c) {
                "string" !== typeof f && (m = m || f,
                f = void 0);
                for (B in c)
                    this.on(B, f, m, c[B], w);
                return this
            }
            null == m && null == r ? (r = f,
            m = f = void 0) : null == r && ("string" === typeof f ? (r = m,
            m = void 0) : (r = m,
            m = f,
            f = void 0));
            if (!1 === r)
                r = b;
            else if (!r)
                return this;
            if (1 === w) {
                var K = r;
                r = function(O) {
                    n().off(O);
                    return K.apply(this, arguments)
                }
                ;
                r.guid = K.guid || (K.guid = n.guid++)
            }
            return this.each(function() {
                n.event.add(this, c, r, m, f)
            })
        },
        one: function(c, f, m, r) {
            return this.on(c, f, m, r, 1)
        },
        off: function(c, f, m) {
            if (c && c.preventDefault && c.handleObj) {
                var r = c.handleObj;
                n(c.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler);
                return this
            }
            if ("object" === typeof c) {
                for (r in c)
                    this.off(r, f, c[r]);
                return this
            }
            if (!1 === f || "function" === typeof f)
                m = f,
                f = void 0;
            !1 === m && (m = b);
            return this.each(function() {
                n.event.remove(this, c, m, f)
            })
        },
        trigger: function(c, f) {
            return this.each(function() {
                n.event.trigger(c, f, this)
            })
        },
        triggerHandler: function(c, f) {
            var m = this[0];
            if (m)
                return n.event.trigger(c, f, m, !0)
        }
    });
    var l = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , t = /<([\w:]+)/
      , z = /<|&#?\w+;/
      , x = /<(?:script|style|link)/i
      , D = /checked\s*(?:[^=]|=\s*.checked.)/i
      , L = /^$|\/(?:java|ecma)script/i
      , Y = /^true\/(.*)/
      , ka = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , da = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    da.optgroup = da.option;
    da.tbody = da.tfoot = da.colgroup = da.caption = da.thead;
    da.th = da.td;
    n.extend({
        clone: function(c, f, m) {
            var r, w = c.cloneNode(!0), B = n.contains(c.ownerDocument, c);
            if (!(Sa.noCloneChecked || 1 !== c.nodeType && 11 !== c.nodeType || n.isXMLDoc(c))) {
                var K = ia(w);
                var O = ia(c);
                var W = 0;
                for (r = O.length; W < r; W++) {
                    var U = O[W]
                      , ta = K[W]
                      , wa = ta.nodeName.toLowerCase();
                    if ("input" === wa && Vc.test(U.type))
                        ta.checked = U.checked;
                    else if ("input" === wa || "textarea" === wa)
                        ta.defaultValue = U.defaultValue
                }
            }
            if (f)
                if (m)
                    for (O = O || ia(c),
                    K = K || ia(w),
                    W = 0,
                    r = O.length; W < r; W++)
                        P(O[W], K[W]);
                else
                    P(c, w);
            K = ia(w, "script");
            0 < K.length && T(K, !B && ia(c, "script"));
            return w
        },
        buildFragment: function(c, f, m, r) {
            for (var w, B, K, O = f.createDocumentFragment(), W = [], U = 0, ta = c.length; U < ta; U++)
                if ((w = c[U]) || 0 === w)
                    if ("object" === n.type(w))
                        n.merge(W, w.nodeType ? [w] : w);
                    else if (z.test(w)) {
                        B = B || O.appendChild(f.createElement("div"));
                        K = (t.exec(w) || ["", ""])[1].toLowerCase();
                        K = da[K] || da._default;
                        B.innerHTML = K[1] + w.replace(l, "<$1></$2>") + K[2];
                        for (K = K[0]; K--; )
                            B = B.lastChild;
                        n.merge(W, B.childNodes);
                        B = O.firstChild;
                        B.textContent = ""
                    } else
                        W.push(f.createTextNode(w));
            O.textContent = "";
            for (U = 0; w = W[U++]; )
                if (!r || -1 === n.inArray(w, r))
                    if (c = n.contains(w.ownerDocument, w),
                    B = ia(O.appendChild(w), "script"),
                    c && T(B),
                    m)
                        for (K = 0; w = B[K++]; )
                            L.test(w.type || "") && m.push(w);
            return O
        },
        cleanData: function(c) {
            for (var f, m, r, w, B = n.event.special, K = 0; void 0 !== (m = c[K]); K++) {
                if (n.acceptData(m) && (w = m[ca.expando]) && (f = ca.cache[w])) {
                    if (f.events)
                        for (r in f.events)
                            B[r] ? n.event.remove(m, r) : n.removeEvent(m, r, f.handle);
                    ca.cache[w] && delete ca.cache[w]
                }
                delete va.cache[m[va.expando]]
            }
        }
    });
    n.fn.extend({
        text: function(c) {
            return ba(this, function(f) {
                return void 0 === f ? n.text(this) : this.empty().each(function() {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType)
                        this.textContent = f
                })
            }, null, c, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(c) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || u(this, c).appendChild(c)
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(c) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var f = u(this, c);
                    f.insertBefore(c, f.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(c) {
                this.parentNode && this.parentNode.insertBefore(c, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(c) {
                this.parentNode && this.parentNode.insertBefore(c, this.nextSibling)
            })
        },
        remove: function(c, f) {
            for (var m = c ? n.filter(c, this) : this, r = 0; null != (c = m[r]); r++)
                f || 1 !== c.nodeType || n.cleanData(ia(c)),
                c.parentNode && (f && n.contains(c.ownerDocument, c) && T(ia(c, "script")),
                c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var c, f = 0; null != (c = this[f]); f++)
                1 === c.nodeType && (n.cleanData(ia(c, !1)),
                c.textContent = "");
            return this
        },
        clone: function(c, f) {
            c = null == c ? !1 : c;
            f = null == f ? c : f;
            return this.map(function() {
                return n.clone(this, c, f)
            })
        },
        html: function(c) {
            return ba(this, function(f) {
                var m = this[0] || {}
                  , r = 0
                  , w = this.length;
                if (void 0 === f && 1 === m.nodeType)
                    return m.innerHTML;
                if ("string" === typeof f && !x.test(f) && !da[(t.exec(f) || ["", ""])[1].toLowerCase()]) {
                    f = f.replace(l, "<$1></$2>");
                    try {
                        for (; r < w; r++)
                            m = this[r] || {},
                            1 === m.nodeType && (n.cleanData(ia(m, !1)),
                            m.innerHTML = f);
                        m = 0
                    } catch (B) {}
                }
                m && this.empty().append(f)
            }, null, c, arguments.length)
        },
        replaceWith: function() {
            var c = arguments[0];
            this.domManip(arguments, function(f) {
                c = this.parentNode;
                n.cleanData(ia(this));
                c && c.replaceChild(f, this)
            });
            return c && (c.length || c.nodeType) ? this : this.remove()
        },
        detach: function(c) {
            return this.remove(c, !0)
        },
        domManip: function(c, f) {
            c = eb.apply([], c);
            var m, r = 0, w = this.length, B = this, K = w - 1, O = c[0], W = n.isFunction(O);
            if (W || 1 < w && "string" === typeof O && !Sa.checkClone && D.test(O))
                return this.each(function(Ba) {
                    var nb = B.eq(Ba);
                    W && (c[0] = O.call(this, Ba, nb.html()));
                    nb.domManip(c, f)
                });
            if (w) {
                var U = n.buildFragment(c, this[0].ownerDocument, !1, this);
                var ta = U.firstChild;
                1 === U.childNodes.length && (U = ta);
                if (ta) {
                    ta = n.map(ia(U, "script"), y);
                    for (m = ta.length; r < w; r++) {
                        var wa = U;
                        r !== K && (wa = n.clone(wa, !0, !0),
                        m && n.merge(ta, ia(wa, "script")));
                        f.call(this[r], wa, r)
                    }
                    if (m)
                        for (U = ta[ta.length - 1].ownerDocument,
                        n.map(ta, I),
                        r = 0; r < m; r++)
                            wa = ta[r],
                            L.test(wa.type || "") && !ca.access(wa, "globalEval") && n.contains(U, wa) && (wa.src ? n._evalUrl && n._evalUrl(wa.src) : n.globalEval(wa.textContent.replace(ka, "")))
                }
            }
            return this
        }
    });
    n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(c, f) {
        n.fn[c] = function(m) {
            for (var r = [], w = n(m), B = w.length - 1, K = 0; K <= B; K++)
                m = K === B ? this : this.clone(!0),
                n(w[K])[f](m),
                Va.apply(r, m.get());
            return this.pushStack(r)
        }
    });
    var ea, ya = {}, Ma = /^margin/, Da = new RegExp("^(" + Yb + ")(?!px)[a-z%]+$","i"), La = function(c) {
        return c.ownerDocument.defaultView.opener ? c.ownerDocument.defaultView.getComputedStyle(c, null) : d.getComputedStyle(c, null)
    };
    (function() {
        function c() {
            B.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute";
            B.innerHTML = "";
            r.appendChild(w);
            var K = d.getComputedStyle(B, null);
            f = "1%" !== K.top;
            m = "4px" === K.width;
            r.removeChild(w)
        }
        var f, m, r = Ga.documentElement, w = Ga.createElement("div"), B = Ga.createElement("div");
        B.style && (B.style.backgroundClip = "content-box",
        B.cloneNode(!0).style.backgroundClip = "",
        Sa.clearCloneStyle = "content-box" === B.style.backgroundClip,
        w.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",
        w.appendChild(B),
        d.getComputedStyle && n.extend(Sa, {
            pixelPosition: function() {
                c();
                return f
            },
            boxSizingReliable: function() {
                null == m && c();
                return m
            },
            reliableMarginRight: function() {
                var K = B.appendChild(Ga.createElement("div"));
                K.style.cssText = B.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0";
                K.style.marginRight = K.style.width = "0";
                B.style.width = "1px";
                r.appendChild(w);
                var O = !parseFloat(d.getComputedStyle(K, null).marginRight);
                r.removeChild(w);
                B.removeChild(K);
                return O
            }
        }))
    }
    )();
    n.swap = function(c, f, m, r) {
        var w, B = {};
        for (w in f)
            B[w] = c.style[w],
            c.style[w] = f[w];
        m = m.apply(c, r || []);
        for (w in f)
            c.style[w] = B[w];
        return m
    }
    ;
    var Pa = /^(none|table(?!-c[ea]).+)/
      , Ra = new RegExp("^(" + Yb + ")(.*)$","i")
      , Qa = new RegExp("^([+-])=(" + Yb + ")","i")
      , zb = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , mc = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , Qb = ["Webkit", "O", "Moz", "ms"];
    n.extend({
        cssHooks: {
            opacity: {
                get: function(c, f) {
                    if (f)
                        return c = ha(c, "opacity"),
                        "" === c ? "1" : c
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(c, f, m, r) {
            if (c && 3 !== c.nodeType && 8 !== c.nodeType && c.style) {
                var w, B = n.camelCase(f), K = c.style;
                f = n.cssProps[B] || (n.cssProps[B] = aa(K, B));
                var O = n.cssHooks[f] || n.cssHooks[B];
                if (void 0 !== m) {
                    var W = typeof m;
                    "string" === W && (w = Qa.exec(m)) && (m = (w[1] + 1) * w[2] + parseFloat(n.css(c, f)),
                    W = "number");
                    null != m && m === m && ("number" !== W || n.cssNumber[B] || (m += "px"),
                    Sa.clearCloneStyle || "" !== m || 0 !== f.indexOf("background") || (K[f] = "inherit"),
                    O && "set"in O && void 0 === (m = O.set(c, m, r)) || (K[f] = m))
                } else
                    return O && "get"in O && void 0 !== (w = O.get(c, !1, r)) ? w : K[f]
            }
        },
        css: function(c, f, m, r) {
            var w;
            var B = n.camelCase(f);
            f = n.cssProps[B] || (n.cssProps[B] = aa(c.style, B));
            (B = n.cssHooks[f] || n.cssHooks[B]) && "get"in B && (w = B.get(c, !0, m));
            void 0 === w && (w = ha(c, f, r));
            "normal" === w && f in mc && (w = mc[f]);
            return "" === m || m ? (c = parseFloat(w),
            !0 === m || n.isNumeric(c) ? c || 0 : w) : w
        }
    });
    n.each(["height", "width"], function(c, f) {
        n.cssHooks[f] = {
            get: function(m, r, w) {
                if (r)
                    return Pa.test(n.css(m, "display")) && 0 === m.offsetWidth ? n.swap(m, zb, function() {
                        return Ka(m, f, w)
                    }) : Ka(m, f, w)
            },
            set: function(m, r, w) {
                var B = w && La(m);
                return ma(m, r, w ? Ja(m, f, w, "border-box" === n.css(m, "boxSizing", !1, B), B) : 0)
            }
        }
    });
    n.cssHooks.marginRight = V(Sa.reliableMarginRight, function(c, f) {
        if (f)
            return n.swap(c, {
                display: "inline-block"
            }, ha, [c, "marginRight"])
    });
    n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(c, f) {
        n.cssHooks[c + f] = {
            expand: function(m) {
                var r = 0
                  , w = {};
                for (m = "string" === typeof m ? m.split(" ") : [m]; 4 > r; r++)
                    w[c + $b[r] + f] = m[r] || m[r - 2] || m[0];
                return w
            }
        };
        Ma.test(c) || (n.cssHooks[c + f].set = ma)
    });
    n.fn.extend({
        css: function(c, f) {
            return ba(this, function(m, r, w) {
                var B, K = {}, O = 0;
                if (n.isArray(r)) {
                    w = La(m);
                    for (B = r.length; O < B; O++)
                        K[r[O]] = n.css(m, r[O], !1, w);
                    return K
                }
                return void 0 !== w ? n.style(m, r, w) : n.css(m, r)
            }, c, f, 1 < arguments.length)
        },
        show: function() {
            return Na(this, !0)
        },
        hide: function() {
            return Na(this)
        },
        toggle: function(c) {
            return "boolean" === typeof c ? c ? this.show() : this.hide() : this.each(function() {
                Gc(this) ? n(this).show() : n(this).hide()
            })
        }
    });
    n.Tween = na;
    na.prototype = {
        constructor: na,
        init: function(c, f, m, r, w, B) {
            this.elem = c;
            this.prop = m;
            this.easing = w || "swing";
            this.options = f;
            this.start = this.now = this.cur();
            this.end = r;
            this.unit = B || (n.cssNumber[m] ? "" : "px")
        },
        cur: function() {
            var c = na.propHooks[this.prop];
            return c && c.get ? c.get(this) : na.propHooks._default.get(this)
        },
        run: function(c) {
            var f, m = na.propHooks[this.prop];
            this.pos = this.options.duration ? f = n.easing[this.easing](c, this.options.duration * c, 0, 1, this.options.duration) : f = c;
            this.now = (this.end - this.start) * f + this.start;
            this.options.step && this.options.step.call(this.elem, this.now, this);
            m && m.set ? m.set(this) : na.propHooks._default.set(this);
            return this
        }
    };
    na.prototype.init.prototype = na.prototype;
    na.propHooks = {
        _default: {
            get: function(c) {
                return null == c.elem[c.prop] || c.elem.style && null != c.elem.style[c.prop] ? (c = n.css(c.elem, c.prop, "")) && "auto" !== c ? c : 0 : c.elem[c.prop]
            },
            set: function(c) {
                if (n.fx.step[c.prop])
                    n.fx.step[c.prop](c);
                else
                    c.elem.style && (null != c.elem.style[n.cssProps[c.prop]] || n.cssHooks[c.prop]) ? n.style(c.elem, c.prop, c.now + c.unit) : c.elem[c.prop] = c.now
            }
        }
    };
    na.propHooks.scrollTop = na.propHooks.scrollLeft = {
        set: function(c) {
            c.elem.nodeType && c.elem.parentNode && (c.elem[c.prop] = c.now)
        }
    };
    n.easing = {
        linear: function(c) {
            return c
        },
        swing: function(c) {
            return .5 - Math.cos(c * Math.PI) / 2
        }
    };
    n.fx = na.prototype.init;
    n.fx.step = {};
    var pb, Mb, ec = /^(?:toggle|show|hide)$/, Zb = new RegExp("^(?:([+-])=|)(" + Yb + ")([a-z%]*)$","i"), jc = /queueHooks$/, vc = [function(c, f, m) {
        var r, w = this, B = {}, K = c.style, O = c.nodeType && Gc(c), W = ca.get(c, "fxshow");
        if (!m.queue) {
            var U = n._queueHooks(c, "fx");
            if (null == U.unqueued) {
                U.unqueued = 0;
                var ta = U.empty.fire;
                U.empty.fire = function() {
                    U.unqueued || ta()
                }
            }
            U.unqueued++;
            w.always(function() {
                w.always(function() {
                    U.unqueued--;
                    n.queue(c, "fx").length || U.empty.fire()
                })
            })
        }
        if (1 === c.nodeType && ("height"in f || "width"in f)) {
            m.overflow = [K.overflow, K.overflowX, K.overflowY];
            var wa = n.css(c, "display");
            var Ba = "none" === wa ? ca.get(c, "olddisplay") || qa(c.nodeName) : wa;
            "inline" === Ba && "none" === n.css(c, "float") && (K.display = "inline-block")
        }
        m.overflow && (K.overflow = "hidden",
        w.always(function() {
            K.overflow = m.overflow[0];
            K.overflowX = m.overflow[1];
            K.overflowY = m.overflow[2]
        }));
        for (r in f)
            if (Ba = f[r],
            ec.exec(Ba)) {
                delete f[r];
                var nb = nb || "toggle" === Ba;
                if (Ba === (O ? "hide" : "show"))
                    if ("show" === Ba && W && void 0 !== W[r])
                        O = !0;
                    else
                        continue;
                B[r] = W && W[r] || n.style(c, r)
            } else
                wa = void 0;
        if (n.isEmptyObject(B))
            "inline" === ("none" === wa ? qa(c.nodeName) : wa) && (K.display = wa);
        else
            for (r in W ? "hidden"in W && (O = W.hidden) : W = ca.access(c, "fxshow", {}),
            nb && (W.hidden = !O),
            O ? n(c).show() : w.done(function() {
                n(c).hide()
            }),
            w.done(function() {
                var tb;
                ca.remove(c, "fxshow");
                for (tb in B)
                    n.style(c, tb, B[tb])
            }),
            B)
                f = Oa(O ? W[r] : 0, r, w),
                r in W || (W[r] = f.start,
                O && (f.end = f.start,
                f.start = "width" === r || "height" === r ? 1 : 0))
    }
    ], Vb = {
        "*": [function(c, f) {
            var m = this.createTween(c, f)
              , r = m.cur()
              , w = (f = Zb.exec(f)) && f[3] || (n.cssNumber[c] ? "" : "px")
              , B = (n.cssNumber[c] || "px" !== w && +r) && Zb.exec(n.css(m.elem, c))
              , K = 1
              , O = 20;
            if (B && B[3] !== w) {
                w = w || B[3];
                f = f || [];
                B = +r || 1;
                do
                    K = K || ".5",
                    B /= K,
                    n.style(m.elem, c, B + w);
                while (K !== (K = m.cur() / r) && 1 !== K && --O)
            }
            f && (B = m.start = +B || +r || 0,
            m.unit = w,
            m.end = f[1] ? B + (f[1] + 1) * f[2] : +f[2]);
            return m
        }
        ]
    };
    n.Animation = n.extend(lb, {
        tweener: function(c, f) {
            n.isFunction(c) ? (f = c,
            c = ["*"]) : c = c.split(" ");
            for (var m, r = 0, w = c.length; r < w; r++)
                m = c[r],
                Vb[m] = Vb[m] || [],
                Vb[m].unshift(f)
        },
        prefilter: function(c, f) {
            f ? vc.unshift(c) : vc.push(c)
        }
    });
    n.speed = function(c, f, m) {
        var r = c && "object" === typeof c ? n.extend({}, c) : {
            complete: m || !m && f || n.isFunction(c) && c,
            duration: c,
            easing: m && f || f && !n.isFunction(f) && f
        };
        r.duration = n.fx.off ? 0 : "number" === typeof r.duration ? r.duration : r.duration in n.fx.speeds ? n.fx.speeds[r.duration] : n.fx.speeds._default;
        if (null == r.queue || !0 === r.queue)
            r.queue = "fx";
        r.old = r.complete;
        r.complete = function() {
            n.isFunction(r.old) && r.old.call(this);
            r.queue && n.dequeue(this, r.queue)
        }
        ;
        return r
    }
    ;
    n.fn.extend({
        fadeTo: function(c, f, m, r) {
            return this.filter(Gc).css("opacity", 0).show().end().animate({
                opacity: f
            }, c, m, r)
        },
        animate: function(c, f, m, r) {
            var w = n.isEmptyObject(c)
              , B = n.speed(f, m, r);
            f = function() {
                var K = lb(this, n.extend({}, c), B);
                (w || ca.get(this, "finish")) && K.stop(!0)
            }
            ;
            f.finish = f;
            return w || !1 === B.queue ? this.each(f) : this.queue(B.queue, f)
        },
        stop: function(c, f, m) {
            var r = function(w) {
                var B = w.stop;
                delete w.stop;
                B(m)
            };
            "string" !== typeof c && (m = f,
            f = c,
            c = void 0);
            f && !1 !== c && this.queue(c || "fx", []);
            return this.each(function() {
                var w = !0
                  , B = null != c && c + "queueHooks"
                  , K = n.timers
                  , O = ca.get(this);
                if (B)
                    O[B] && O[B].stop && r(O[B]);
                else
                    for (B in O)
                        O[B] && O[B].stop && jc.test(B) && r(O[B]);
                for (B = K.length; B--; )
                    K[B].elem !== this || null != c && K[B].queue !== c || (K[B].anim.stop(m),
                    w = !1,
                    K.splice(B, 1));
                !w && m || n.dequeue(this, c)
            })
        },
        finish: function(c) {
            !1 !== c && (c = c || "fx");
            return this.each(function() {
                var f = ca.get(this)
                  , m = f[c + "queue"];
                var r = f[c + "queueHooks"];
                var w = n.timers
                  , B = m ? m.length : 0;
                f.finish = !0;
                n.queue(this, c, []);
                r && r.stop && r.stop.call(this, !0);
                for (r = w.length; r--; )
                    w[r].elem === this && w[r].queue === c && (w[r].anim.stop(!0),
                    w.splice(r, 1));
                for (r = 0; r < B; r++)
                    m[r] && m[r].finish && m[r].finish.call(this);
                delete f.finish
            })
        }
    });
    n.each(["toggle", "show", "hide"], function(c, f) {
        var m = n.fn[f];
        n.fn[f] = function(r, w, B) {
            return null == r || "boolean" === typeof r ? m.apply(this, arguments) : this.animate(xa(f, !0), r, w, B)
        }
    });
    n.each({
        slideDown: xa("show"),
        slideUp: xa("hide"),
        slideToggle: xa("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(c, f) {
        n.fn[c] = function(m, r, w) {
            return this.animate(f, m, r, w)
        }
    });
    n.timers = [];
    n.fx.tick = function() {
        var c = 0
          , f = n.timers;
        for (pb = n.now(); c < f.length; c++) {
            var m = f[c];
            m() || f[c] !== m || f.splice(c--, 1)
        }
        f.length || n.fx.stop();
        pb = void 0
    }
    ;
    n.fx.timer = function(c) {
        n.timers.push(c);
        c() ? n.fx.start() : n.timers.pop()
    }
    ;
    n.fx.interval = 13;
    n.fx.start = function() {
        Mb ||= setInterval(n.fx.tick, n.fx.interval)
    }
    ;
    n.fx.stop = function() {
        clearInterval(Mb);
        Mb = null
    }
    ;
    n.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    n.fn.delay = function(c, f) {
        c = n.fx ? n.fx.speeds[c] || c : c;
        return this.queue(f || "fx", function(m, r) {
            var w = setTimeout(m, c);
            r.stop = function() {
                clearTimeout(w)
            }
        })
    }
    ;
    (function() {
        var c = Ga.createElement("input")
          , f = Ga.createElement("select")
          , m = f.appendChild(Ga.createElement("option"));
        c.type = "checkbox";
        Sa.checkOn = "" !== c.value;
        Sa.optSelected = m.selected;
        f.disabled = !0;
        Sa.optDisabled = !m.disabled;
        c = Ga.createElement("input");
        c.value = "t";
        c.type = "radio";
        Sa.radioValue = "t" === c.value
    }
    )();
    var nc = n.expr.attrHandle;
    n.fn.extend({
        attr: function(c, f) {
            return ba(this, n.attr, c, f, 1 < arguments.length)
        },
        removeAttr: function(c) {
            return this.each(function() {
                n.removeAttr(this, c)
            })
        }
    });
    n.extend({
        attr: function(c, f, m) {
            var r, w = c.nodeType;
            if (c && 3 !== w && 8 !== w && 2 !== w) {
                if ("undefined" === typeof c.getAttribute)
                    return n.prop(c, f, m);
                if (1 !== w || !n.isXMLDoc(c)) {
                    f = f.toLowerCase();
                    var B = n.attrHooks[f] || (n.expr.match.bool.test(f) ? tc : void 0)
                }
                if (void 0 !== m)
                    if (null === m)
                        n.removeAttr(c, f);
                    else {
                        if (B && "set"in B && void 0 !== (r = B.set(c, m, f)))
                            return r;
                        c.setAttribute(f, m + "");
                        return m
                    }
                else {
                    if (B && "get"in B && null !== (r = B.get(c, f)))
                        return r;
                    r = n.find.attr(c, f);
                    return null == r ? void 0 : r
                }
            }
        },
        removeAttr: function(c, f) {
            var m = 0
              , r = f && f.match(q);
            if (r && 1 === c.nodeType)
                for (; f = r[m++]; ) {
                    var w = n.propFix[f] || f;
                    n.expr.match.bool.test(f) && (c[w] = !1);
                    c.removeAttribute(f)
                }
        },
        attrHooks: {
            type: {
                set: function(c, f) {
                    if (!Sa.radioValue && "radio" === f && n.nodeName(c, "input")) {
                        var m = c.value;
                        c.setAttribute("type", f);
                        m && (c.value = m);
                        return f
                    }
                }
            }
        }
    });
    var tc = {
        set: function(c, f, m) {
            !1 === f ? n.removeAttr(c, m) : c.setAttribute(m, m);
            return m
        }
    };
    n.each(n.expr.match.bool.source.match(/\w+/g), function(c, f) {
        var m = nc[f] || n.find.attr;
        nc[f] = function(r, w, B) {
            if (!B) {
                var K = nc[w];
                nc[w] = O;
                var O = null != m(r, w, B) ? w.toLowerCase() : null;
                nc[w] = K
            }
            return O
        }
    });
    var Oc = /^(?:input|select|textarea|button)$/i;
    n.fn.extend({
        prop: function(c, f) {
            return ba(this, n.prop, c, f, 1 < arguments.length)
        },
        removeProp: function(c) {
            return this.each(function() {
                delete this[n.propFix[c] || c]
            })
        }
    });
    n.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(c, f, m) {
            var r, w = c.nodeType;
            if (c && 3 !== w && 8 !== w && 2 !== w) {
                if (1 !== w || !n.isXMLDoc(c)) {
                    f = n.propFix[f] || f;
                    var B = n.propHooks[f]
                }
                return void 0 !== m ? B && "set"in B && void 0 !== (r = B.set(c, m, f)) ? r : c[f] = m : B && "get"in B && null !== (r = B.get(c, f)) ? r : c[f]
            }
        },
        propHooks: {
            tabIndex: {
                get: function(c) {
                    return c.hasAttribute("tabindex") || Oc.test(c.nodeName) || c.href ? c.tabIndex : -1
                }
            }
        }
    });
    Sa.optSelected || (n.propHooks.selected = {
        get: function(c) {
            (c = c.parentNode) && c.parentNode && c.parentNode.selectedIndex;
            return null
        }
    });
    n.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function() {
        n.propFix[this.toLowerCase()] = this
    });
    var Pc = /[\t\r\n\f]/g;
    n.fn.extend({
        addClass: function(c) {
            var f, m, r;
            var w = "string" === typeof c && c;
            var B = 0
              , K = this.length;
            if (n.isFunction(c))
                return this.each(function(W) {
                    n(this).addClass(c.call(this, W, this.className))
                });
            if (w)
                for (w = (c || "").match(q) || []; B < K; B++) {
                    var O = this[B];
                    if (f = 1 === O.nodeType && (O.className ? (" " + O.className + " ").replace(Pc, " ") : " ")) {
                        for (r = 0; m = w[r++]; )
                            0 > f.indexOf(" " + m + " ") && (f += m + " ");
                        f = n.trim(f);
                        O.className !== f && (O.className = f)
                    }
                }
            return this
        },
        removeClass: function(c) {
            var f, m, r;
            var w = 0 === arguments.length || "string" === typeof c && c;
            var B = 0
              , K = this.length;
            if (n.isFunction(c))
                return this.each(function(W) {
                    n(this).removeClass(c.call(this, W, this.className))
                });
            if (w)
                for (w = (c || "").match(q) || []; B < K; B++) {
                    var O = this[B];
                    if (f = 1 === O.nodeType && (O.className ? (" " + O.className + " ").replace(Pc, " ") : "")) {
                        for (r = 0; m = w[r++]; )
                            for (; 0 <= f.indexOf(" " + m + " "); )
                                f = f.replace(" " + m + " ", " ");
                        f = c ? n.trim(f) : "";
                        O.className !== f && (O.className = f)
                    }
                }
            return this
        },
        toggleClass: function(c, f) {
            var m = typeof c;
            return "boolean" === typeof f && "string" === m ? f ? this.addClass(c) : this.removeClass(c) : n.isFunction(c) ? this.each(function(r) {
                n(this).toggleClass(c.call(this, r, this.className, f), f)
            }) : this.each(function() {
                if ("string" === m)
                    for (var r, w = 0, B = n(this), K = c.match(q) || []; r = K[w++]; )
                        B.hasClass(r) ? B.removeClass(r) : B.addClass(r);
                else if ("undefined" === m || "boolean" === m)
                    this.className && ca.set(this, "__className__", this.className),
                    this.className = this.className || !1 === c ? "" : ca.get(this, "__className__") || ""
            })
        },
        hasClass: function(c) {
            c = " " + c + " ";
            for (var f = 0, m = this.length; f < m; f++)
                if (1 === this[f].nodeType && 0 <= (" " + this[f].className + " ").replace(Pc, " ").indexOf(c))
                    return !0;
            return !1
        }
    });
    var Kc = /\r/g;
    n.fn.extend({
        val: function(c) {
            var f, m, r = this[0];
            if (arguments.length) {
                var w = n.isFunction(c);
                return this.each(function(B) {
                    1 === this.nodeType && (B = w ? c.call(this, B, n(this).val()) : c,
                    null == B ? B = "" : "number" === typeof B ? B += "" : n.isArray(B) && (B = n.map(B, function(K) {
                        return null == K ? "" : K + ""
                    })),
                    f = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()],
                    f && "set"in f && void 0 !== f.set(this, B, "value") || (this.value = B))
                })
            }
            if (r) {
                if ((f = n.valHooks[r.type] || n.valHooks[r.nodeName.toLowerCase()]) && "get"in f && void 0 !== (m = f.get(r, "value")))
                    return m;
                m = r.value;
                return "string" === typeof m ? m.replace(Kc, "") : null == m ? "" : m
            }
        }
    });
    n.extend({
        valHooks: {
            option: {
                get: function(c) {
                    var f = n.find.attr(c, "value");
                    return null != f ? f : n.trim(n.text(c))
                }
            },
            select: {
                get: function(c) {
                    for (var f, m = c.options, r = c.selectedIndex, w = (c = "select-one" === c.type || 0 > r) ? null : [], B = c ? r + 1 : m.length, K = 0 > r ? B : c ? r : 0; K < B; K++)
                        if (f = m[K],
                        !(!f.selected && K !== r || (Sa.optDisabled ? f.disabled : null !== f.getAttribute("disabled")) || f.parentNode.disabled && n.nodeName(f.parentNode, "optgroup"))) {
                            f = n(f).val();
                            if (c)
                                return f;
                            w.push(f)
                        }
                    return w
                },
                set: function(c, f) {
                    for (var m, r = c.options, w = n.makeArray(f), B = r.length; B--; )
                        if (f = r[B],
                        f.selected = 0 <= n.inArray(f.value, w))
                            m = !0;
                    m || (c.selectedIndex = -1);
                    return w
                }
            }
        }
    });
    n.each(["radio", "checkbox"], function() {
        n.valHooks[this] = {
            set: function(c, f) {
                if (n.isArray(f))
                    return c.checked = 0 <= n.inArray(n(c).val(), f)
            }
        };
        Sa.checkOn || (n.valHooks[this].get = function(c) {
            return null === c.getAttribute("value") ? "on" : c.value
        }
        )
    });
    n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(c, f) {
        n.fn[f] = function(m, r) {
            return 0 < arguments.length ? this.on(f, null, m, r) : this.trigger(f)
        }
    });
    n.fn.extend({
        hover: function(c, f) {
            return this.mouseenter(c).mouseleave(f || c)
        },
        bind: function(c, f, m) {
            return this.on(c, null, f, m)
        },
        unbind: function(c, f) {
            return this.off(c, null, f)
        },
        delegate: function(c, f, m, r) {
            return this.on(f, c, m, r)
        },
        undelegate: function(c, f, m) {
            return 1 === arguments.length ? this.off(c, "**") : this.off(f, c || "**", m)
        }
    });
    var kc = n.now()
      , uc = /\?/;
    n.parseJSON = function(c) {
        return JSON.parse(c + "")
    }
    ;
    n.parseXML = function(c) {
        if (!c || "string" !== typeof c)
            return null;
        try {
            var f = new DOMParser;
            var m = f.parseFromString(c, "text/xml")
        } catch (r) {
            m = void 0
        }
        m && !m.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + c);
        return m
    }
    ;
    var ld = /#.*$/
      , db = /([?&])_=[^&]*/
      , Cc = /^(.*?):[ \t]*([^\r\n]*)$/mg
      , Dc = /^(?:GET|HEAD)$/
      , lc = /^\/\//
      , Qc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/
      , Ic = {}
      , wc = {}
      , $c = "*/".concat("*")
      , Rc = d.location.href
      , Ec = Qc.exec(Rc.toLowerCase()) || [];
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Rc,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ec[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $c,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(c, f) {
            return f ? vb(vb(c, n.ajaxSettings), f) : vb(n.ajaxSettings, c)
        },
        ajaxPrefilter: Ua(Ic),
        ajaxTransport: Ua(wc),
        ajax: function(c, f) {
            function m(Xa, Eb, ab, Nb) {
                var kb = Eb;
                if (2 !== wb) {
                    wb = 2;
                    K && clearTimeout(K);
                    r = void 0;
                    w = Nb || "";
                    Ta.readyState = 0 < Xa ? 4 : 0;
                    Nb = 200 <= Xa && 300 > Xa || 304 === Xa;
                    if (ab) {
                        var cb = U;
                        for (var Pb = Ta, sb, bc, bb, qb, Bb = cb.contents, gc = cb.dataTypes; "*" === gc[0]; )
                            gc.shift(),
                            void 0 === sb && (sb = cb.mimeType || Pb.getResponseHeader("Content-Type"));
                        if (sb)
                            for (bc in Bb)
                                if (Bb[bc] && Bb[bc].test(sb)) {
                                    gc.unshift(bc);
                                    break
                                }
                        if (gc[0]in ab)
                            bb = gc[0];
                        else {
                            for (bc in ab) {
                                if (!gc[0] || cb.converters[bc + " " + gc[0]]) {
                                    bb = bc;
                                    break
                                }
                                qb ||= bc
                            }
                            bb = bb || qb
                        }
                        bb ? (bb !== gc[0] && gc.unshift(bb),
                        cb = ab[bb]) : cb = void 0
                    }
                    a: {
                        ab = U;
                        sb = cb;
                        bc = Ta;
                        bb = Nb;
                        var Bc;
                        Pb = {};
                        Bb = ab.dataTypes.slice();
                        if (Bb[1])
                            for (ob in ab.converters)
                                Pb[ob.toLowerCase()] = ab.converters[ob];
                        for (qb = Bb.shift(); qb; ) {
                            ab.responseFields[qb] && (bc[ab.responseFields[qb]] = sb);
                            !qc && bb && ab.dataFilter && (sb = ab.dataFilter(sb, ab.dataType));
                            var qc = qb;
                            if (qb = Bb.shift())
                                if ("*" === qb)
                                    qb = qc;
                                else if ("*" !== qc && qc !== qb) {
                                    var ob = Pb[qc + " " + qb] || Pb["* " + qb];
                                    if (!ob)
                                        for (Bc in Pb)
                                            if (cb = Bc.split(" "),
                                            cb[1] === qb && (ob = Pb[qc + " " + cb[0]] || Pb["* " + cb[0]])) {
                                                !0 === ob ? ob = Pb[Bc] : !0 !== Pb[Bc] && (qb = cb[0],
                                                Bb.unshift(cb[1]));
                                                break
                                            }
                                    if (!0 !== ob)
                                        if (ob && ab["throws"])
                                            sb = ob(sb);
                                        else
                                            try {
                                                sb = ob(sb)
                                            } catch (sc) {
                                                cb = {
                                                    state: "parsererror",
                                                    error: ob ? sc : "No conversion from " + qc + " to " + qb
                                                };
                                                break a
                                            }
                                }
                        }
                        cb = {
                            state: "success",
                            data: sb
                        }
                    }
                    if (Nb)
                        if (U.ifModified && ((kb = Ta.getResponseHeader("Last-Modified")) && (n.lastModified[Ob] = kb),
                        (kb = Ta.getResponseHeader("etag")) && (n.etag[Ob] = kb)),
                        204 === Xa || "HEAD" === U.type)
                            kb = "nocontent";
                        else if (304 === Xa)
                            kb = "notmodified";
                        else {
                            kb = cb.state;
                            var rc = cb.data;
                            var Hc = cb.error;
                            Nb = !Hc
                        }
                    else if (Hc = kb,
                    Xa || !kb)
                        kb = "error",
                        0 > Xa && (Xa = 0);
                    Ta.status = Xa;
                    Ta.statusText = (Eb || kb) + "";
                    Nb ? Ba.resolveWith(ta, [rc, kb, Ta]) : Ba.rejectWith(ta, [Ta, kb, Hc]);
                    Ta.statusCode(tb);
                    tb = void 0;
                    O && wa.trigger(Nb ? "ajaxSuccess" : "ajaxError", [Ta, U, Nb ? rc : Hc]);
                    nb.fireWith(ta, [Ta, kb]);
                    O && (wa.trigger("ajaxComplete", [Ta, U]),
                    --n.active || n.event.trigger("ajaxStop"))
                }
            }
            "object" === typeof c && (f = c,
            c = void 0);
            f = f || {};
            var r, w, B, K, O, W, U = n.ajaxSetup({}, f), ta = U.context || U, wa = U.context && (ta.nodeType || ta.jquery) ? n(ta) : n.event, Ba = n.Deferred(), nb = n.Callbacks("once memory"), tb = U.statusCode || {}, Xb = {}, ub = {}, wb = 0, Uc = "canceled", Ta = {
                readyState: 0,
                getResponseHeader: function(Xa) {
                    var Eb;
                    if (2 === wb) {
                        if (!B)
                            for (B = {}; Eb = Cc.exec(w); )
                                B[Eb[1].toLowerCase()] = Eb[2];
                        Eb = B[Xa.toLowerCase()]
                    }
                    return null == Eb ? null : Eb
                },
                getAllResponseHeaders: function() {
                    return 2 === wb ? w : null
                },
                setRequestHeader: function(Xa, Eb) {
                    var ab = Xa.toLowerCase();
                    wb || (Xa = ub[ab] = ub[ab] || Xa,
                    Xb[Xa] = Eb);
                    return this
                },
                overrideMimeType: function(Xa) {
                    wb || (U.mimeType = Xa);
                    return this
                },
                statusCode: function(Xa) {
                    var Eb;
                    if (Xa)
                        if (2 > wb)
                            for (Eb in Xa)
                                tb[Eb] = [tb[Eb], Xa[Eb]];
                        else
                            Ta.always(Xa[Ta.status]);
                    return this
                },
                abort: function(Xa) {
                    Xa = Xa || Uc;
                    r && r.abort(Xa);
                    m(0, Xa);
                    return this
                }
            };
            Ba.promise(Ta).complete = nb.add;
            Ta.success = Ta.done;
            Ta.error = Ta.fail;
            U.url = ((c || U.url || Rc) + "").replace(ld, "").replace(lc, Ec[1] + "//");
            U.type = f.method || f.type || U.method || U.type;
            U.dataTypes = n.trim(U.dataType || "*").toLowerCase().match(q) || [""];
            null == U.crossDomain && (c = Qc.exec(U.url.toLowerCase()),
            U.crossDomain = !(!c || c[1] === Ec[1] && c[2] === Ec[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (Ec[3] || ("http:" === Ec[1] ? "80" : "443"))));
            U.data && U.processData && "string" !== typeof U.data && (U.data = n.param(U.data, U.traditional));
            gb(Ic, U, f, Ta);
            if (2 === wb)
                return Ta;
            (O = n.event && U.global) && 0 === n.active++ && n.event.trigger("ajaxStart");
            U.type = U.type.toUpperCase();
            U.hasContent = !Dc.test(U.type);
            var Ob = U.url;
            U.hasContent || (U.data && (Ob = U.url += (uc.test(Ob) ? "&" : "?") + U.data,
            delete U.data),
            !1 === U.cache && (U.url = db.test(Ob) ? Ob.replace(db, "$1_=" + kc++) : Ob + (uc.test(Ob) ? "&" : "?") + "_=" + kc++));
            U.ifModified && (n.lastModified[Ob] && Ta.setRequestHeader("If-Modified-Since", n.lastModified[Ob]),
            n.etag[Ob] && Ta.setRequestHeader("If-None-Match", n.etag[Ob]));
            (U.data && U.hasContent && !1 !== U.contentType || f.contentType) && Ta.setRequestHeader("Content-Type", U.contentType);
            Ta.setRequestHeader("Accept", U.dataTypes[0] && U.accepts[U.dataTypes[0]] ? U.accepts[U.dataTypes[0]] + ("*" !== U.dataTypes[0] ? ", " + $c + "; q=0.01" : "") : U.accepts["*"]);
            for (W in U.headers)
                Ta.setRequestHeader(W, U.headers[W]);
            if (U.beforeSend && (!1 === U.beforeSend.call(ta, Ta, U) || 2 === wb))
                return Ta.abort();
            Uc = "abort";
            for (W in {
                success: 1,
                error: 1,
                complete: 1
            })
                Ta[W](U[W]);
            if (r = gb(wc, U, f, Ta)) {
                Ta.readyState = 1;
                O && wa.trigger("ajaxSend", [Ta, U]);
                U.async && 0 < U.timeout && (K = setTimeout(function() {
                    Ta.abort("timeout")
                }, U.timeout));
                try {
                    wb = 1,
                    r.send(Xb, m)
                } catch (Xa) {
                    if (2 > wb)
                        m(-1, Xa);
                    else
                        throw Xa;
                }
            } else
                m(-1, "No Transport");
            return Ta
        },
        getJSON: function(c, f, m) {
            return n.get(c, f, m, "json")
        },
        getScript: function(c, f) {
            return n.get(c, void 0, f, "script")
        }
    });
    n.each(["get", "post"], function(c, f) {
        n[f] = function(m, r, w, B) {
            n.isFunction(r) && (B = B || w,
            w = r,
            r = void 0);
            return n.ajax({
                url: m,
                type: f,
                dataType: B,
                data: r,
                success: w
            })
        }
    });
    n._evalUrl = function(c) {
        return n.ajax({
            url: c,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }
    ;
    n.fn.extend({
        wrapAll: function(c) {
            if (n.isFunction(c))
                return this.each(function(m) {
                    n(this).wrapAll(c.call(this, m))
                });
            if (this[0]) {
                var f = n(c, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && f.insertBefore(this[0]);
                f.map(function() {
                    for (var m = this; m.firstElementChild; )
                        m = m.firstElementChild;
                    return m
                }).append(this)
            }
            return this
        },
        wrapInner: function(c) {
            return n.isFunction(c) ? this.each(function(f) {
                n(this).wrapInner(c.call(this, f))
            }) : this.each(function() {
                var f = n(this)
                  , m = f.contents();
                m.length ? m.wrapAll(c) : f.append(c)
            })
        },
        wrap: function(c) {
            var f = n.isFunction(c);
            return this.each(function(m) {
                n(this).wrapAll(f ? c.call(this, m) : c)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    n.expr.filters.hidden = function(c) {
        return 0 >= c.offsetWidth && 0 >= c.offsetHeight
    }
    ;
    n.expr.filters.visible = function(c) {
        return !n.expr.filters.hidden(c)
    }
    ;
    var ad = /%20/g
      , hd = /\[\]$/
      , bd = /\r?\n/g
      , md = /^(?:submit|button|image|reset|file)$/i
      , nd = /^(?:input|select|textarea|keygen)/i;
    n.param = function(c, f) {
        var m, r = [], w = function(B, K) {
            K = n.isFunction(K) ? K() : null == K ? "" : K;
            r[r.length] = encodeURIComponent(B) + "=" + encodeURIComponent(K)
        };
        void 0 === f && (f = n.ajaxSettings && n.ajaxSettings.traditional);
        if (n.isArray(c) || c.jquery && !n.isPlainObject(c))
            n.each(c, function() {
                w(this.name, this.value)
            });
        else
            for (m in c)
                Fb(m, c[m], f, w);
        return r.join("&").replace(ad, "+")
    }
    ;
    n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var c = n.prop(this, "elements");
                return c ? n.makeArray(c) : this
            }).filter(function() {
                var c = this.type;
                return this.name && !n(this).is(":disabled") && nd.test(this.nodeName) && !md.test(c) && (this.checked || !Vc.test(c))
            }).map(function(c, f) {
                c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(m) {
                    return {
                        name: f.name,
                        value: m.replace(bd, "\r\n")
                    }
                }) : {
                    name: f.name,
                    value: c.replace(bd, "\r\n")
                }
            }).get()
        }
    });
    n.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (c) {}
    }
    ;
    var ed = 0
      , Wc = {}
      , od = {
        0: 200,
        1223: 204
    }
      , Sc = n.ajaxSettings.xhr();
    d.attachEvent && d.attachEvent("onunload", function() {
        for (var c in Wc)
            Wc[c]()
    });
    Sa.cors = !!Sc && "withCredentials"in Sc;
    Sa.ajax = Sc = !!Sc;
    n.ajaxTransport(function(c) {
        var f;
        if (Sa.cors || Sc && !c.crossDomain)
            return {
                send: function(m, r) {
                    var w, B = c.xhr(), K = ++ed;
                    B.open(c.type, c.url, c.async, c.username, c.password);
                    if (c.xhrFields)
                        for (w in c.xhrFields)
                            B[w] = c.xhrFields[w];
                    c.mimeType && B.overrideMimeType && B.overrideMimeType(c.mimeType);
                    c.crossDomain || m["X-Requested-With"] || (m["X-Requested-With"] = "XMLHttpRequest");
                    for (w in m)
                        B.setRequestHeader(w, m[w]);
                    f = function(O) {
                        return function() {
                            f && (delete Wc[K],
                            f = B.onload = B.onerror = null,
                            "abort" === O ? B.abort() : "error" === O ? r(B.status, B.statusText) : r(od[B.status] || B.status, B.statusText, "string" === typeof B.responseText ? {
                                text: B.responseText
                            } : void 0, B.getAllResponseHeaders()))
                        }
                    }
                    ;
                    B.onload = f();
                    B.onerror = f("error");
                    f = Wc[K] = f("abort");
                    try {
                        B.send(c.hasContent && c.data || null)
                    } catch (O) {
                        if (f)
                            throw O;
                    }
                },
                abort: function() {
                    f && f()
                }
            }
    });
    n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(c) {
                n.globalEval(c);
                return c
            }
        }
    });
    n.ajaxPrefilter("script", function(c) {
        void 0 === c.cache && (c.cache = !1);
        c.crossDomain && (c.type = "GET")
    });
    n.ajaxTransport("script", function(c) {
        if (c.crossDomain) {
            var f, m;
            return {
                send: function(r, w) {
                    f = n("<script>").prop({
                        async: !0,
                        charset: c.scriptCharset,
                        src: c.url
                    }).on("load error", m = function(B) {
                        f.remove();
                        m = null;
                        B && w("error" === B.type ? 404 : 200, B.type)
                    }
                    );
                    Ga.head.appendChild(f[0])
                },
                abort: function() {
                    m && m()
                }
            }
        }
    });
    var Tc = []
      , fd = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var c = Tc.pop() || n.expando + "_" + kc++;
            this[c] = !0;
            return c
        }
    });
    n.ajaxPrefilter("json jsonp", function(c, f, m) {
        var r, w = !1 !== c.jsonp && (fd.test(c.url) ? "url" : "string" === typeof c.data && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && fd.test(c.data) && "data");
        if (w || "jsonp" === c.dataTypes[0]) {
            var B = c.jsonpCallback = n.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback;
            w ? c[w] = c[w].replace(fd, "$1" + B) : !1 !== c.jsonp && (c.url += (uc.test(c.url) ? "&" : "?") + c.jsonp + "=" + B);
            c.converters["script json"] = function() {
                r || n.error(B + " was not called");
                return r[0]
            }
            ;
            c.dataTypes[0] = "json";
            var K = d[B];
            d[B] = function() {
                r = arguments
            }
            ;
            m.always(function() {
                d[B] = K;
                c[B] && (c.jsonpCallback = f.jsonpCallback,
                Tc.push(B));
                r && n.isFunction(K) && K(r[0]);
                r = K = void 0
            });
            return "script"
        }
    });
    n.parseHTML = function(c, f, m) {
        if (!c || "string" !== typeof c)
            return null;
        "boolean" === typeof f && (m = f,
        f = !1);
        f = f || Ga;
        var r = yb.exec(c);
        m = !m && [];
        if (r)
            return [f.createElement(r[1])];
        r = n.buildFragment([c], f, m);
        m && m.length && n(m).remove();
        return n.merge([], r.childNodes)
    }
    ;
    var Fc = n.fn.load;
    n.fn.load = function(c, f, m) {
        if ("string" !== typeof c && Fc)
            return Fc.apply(this, arguments);
        var r, w, B = this, K = c.indexOf(" ");
        if (0 <= K) {
            var O = n.trim(c.slice(K));
            c = c.slice(0, K)
        }
        n.isFunction(f) ? (m = f,
        f = void 0) : f && "object" === typeof f && (r = "POST");
        0 < B.length && n.ajax({
            url: c,
            type: r,
            dataType: "html",
            data: f
        }).done(function(W) {
            w = arguments;
            B.html(O ? n("<div>").append(n.parseHTML(W)).find(O) : W)
        }).complete(m && function(W, U) {
            B.each(m, w || [W.responseText, U, W])
        }
        );
        return this
    }
    ;
    n.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(c, f) {
        n.fn[f] = function(m) {
            return this.on(f, m)
        }
    });
    n.expr.filters.animated = function(c) {
        return n.grep(n.timers, function(f) {
            return c === f.elem
        }).length
    }
    ;
    var Xc = d.document.documentElement;
    n.offset = {
        setOffset: function(c, f, m) {
            var r = n.css(c, "position")
              , w = n(c)
              , B = {};
            "static" === r && (c.style.position = "relative");
            var K = w.offset();
            var O = n.css(c, "top");
            var W = n.css(c, "left");
            ("absolute" === r || "fixed" === r) && -1 < (O + W).indexOf("auto") ? (W = w.position(),
            O = W.top,
            W = W.left) : (O = parseFloat(O) || 0,
            W = parseFloat(W) || 0);
            n.isFunction(f) && (f = f.call(c, m, K));
            null != f.top && (B.top = f.top - K.top + O);
            null != f.left && (B.left = f.left - K.left + W);
            "using"in f ? f.using.call(c, B) : w.css(B)
        }
    };
    n.fn.extend({
        offset: function(c) {
            if (arguments.length)
                return void 0 === c ? this : this.each(function(B) {
                    n.offset.setOffset(this, c, B)
                });
            var f = this[0];
            var m = {
                top: 0,
                left: 0
            }
              , r = f && f.ownerDocument;
            if (r) {
                var w = r.documentElement;
                if (!n.contains(w, f))
                    return m;
                "undefined" !== typeof f.getBoundingClientRect && (m = f.getBoundingClientRect());
                f = Hb(r);
                return {
                    top: m.top + f.pageYOffset - w.clientTop,
                    left: m.left + f.pageXOffset - w.clientLeft
                }
            }
        },
        position: function() {
            if (this[0]) {
                var c = this[0]
                  , f = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === n.css(c, "position"))
                    var m = c.getBoundingClientRect();
                else {
                    var r = this.offsetParent();
                    m = this.offset();
                    n.nodeName(r[0], "html") || (f = r.offset());
                    f.top += n.css(r[0], "borderTopWidth", !0);
                    f.left += n.css(r[0], "borderLeftWidth", !0)
                }
                return {
                    top: m.top - f.top - n.css(c, "marginTop", !0),
                    left: m.left - f.left - n.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var c = this.offsetParent || Xc; c && !n.nodeName(c, "html") && "static" === n.css(c, "position"); )
                    c = c.offsetParent;
                return c || Xc
            })
        }
    });
    n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(c, f) {
        var m = "pageYOffset" === f;
        n.fn[c] = function(r) {
            return ba(this, function(w, B, K) {
                var O = Hb(w);
                if (void 0 === K)
                    return O ? O[f] : w[B];
                O ? O.scrollTo(m ? d.pageXOffset : K, m ? K : d.pageYOffset) : w[B] = K
            }, c, r, arguments.length, null)
        }
    });
    n.each(["top", "left"], function(c, f) {
        n.cssHooks[f] = V(Sa.pixelPosition, function(m, r) {
            if (r)
                return r = ha(m, f),
                Da.test(r) ? n(m).position()[f] + "px" : r
        })
    });
    n.each({
        Height: "height",
        Width: "width"
    }, function(c, f) {
        n.each({
            padding: "inner" + c,
            content: f,
            "": "outer" + c
        }, function(m, r) {
            n.fn[r] = function(w, B) {
                var K = arguments.length && (m || "boolean" !== typeof w)
                  , O = m || (!0 === w || !0 === B ? "margin" : "border");
                return ba(this, function(W, U, ta) {
                    return n.isWindow(W) ? W.document.documentElement["client" + c] : 9 === W.nodeType ? (U = W.documentElement,
                    Math.max(W.body["scroll" + c], U["scroll" + c], W.body["offset" + c], U["offset" + c], U["client" + c])) : void 0 === ta ? n.css(W, U, O) : n.style(W, U, ta, O)
                }, f, K ? w : void 0, K, null)
            }
        })
    });
    n.fn.size = function() {
        return this.length
    }
    ;
    n.fn.andSelf = n.fn.addBack;
    "function" === typeof define && define.amd && define("jquery", [], function() {
        return n
    });
    var gd = d.jQuery
      , pd = d.$;
    n.noConflict = function(c) {
        d.$ === n && (d.$ = pd);
        c && d.jQuery === n && (d.jQuery = gd);
        return n
    }
    ;
    "undefined" === typeof k && (d.jQuery = d.$ = n);
    return n
});
/*
 Bootstrap v4.3.1 (https://getbootstrap.com/)
 Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
*/
(function(d, k) {
    "object" === typeof exports && "undefined" !== typeof module ? k(exports, require("jquery"), require("popper.js")) : "function" === typeof define && define.amd ? define(["exports", "jquery", "popper.js"], k) : (d = d || self,
    k(d.bootstrap = {}, d.jQuery, d.Popper))
}
)(this, function(d, k, E) {
    function R(S, Q) {
        for (var q = 0; q < Q.length; q++) {
            var v = Q[q];
            v.enumerable = v.enumerable || !1;
            v.configurable = !0;
            "value"in v && (v.writable = !0);
            Object.defineProperty(S, v.key, v)
        }
    }
    function H(S, Q, q) {
        Q && R(S.prototype, Q);
        q && R(S, q);
        return S
    }
    function M(S) {
        for (var Q = 1; Q < arguments.length; Q++) {
            var q = null != arguments[Q] ? arguments[Q] : {}
              , v = Object.keys(q);
            "function" === typeof Object.getOwnPropertySymbols && (v = v.concat(Object.getOwnPropertySymbols(q).filter(function(F) {
                return Object.getOwnPropertyDescriptor(q, F).enumerable
            })));
            v.forEach(function(F) {
                var ba = q[F];
                F in S ? Object.defineProperty(S, F, {
                    value: ba,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : S[F] = ba
            })
        }
        return S
    }
    function ja(S, Q) {
        S.prototype = Object.create(Q.prototype);
        S.prototype.constructor = S;
        S.__proto__ = Q
    }
    function Ea(S, Q) {
        var q = S.nodeName.toLowerCase();
        if (-1 !== Q.indexOf(q))
            return -1 !== lb.indexOf(q) ? !(!S.nodeValue.match(Ua) && !S.nodeValue.match(gb)) : !0;
        S = Q.filter(function(F) {
            return F instanceof RegExp
        });
        Q = 0;
        for (var v = S.length; Q < v; Q++)
            if (q.match(S[Q]))
                return !0;
        return !1
    }
    function Fa(S, Q, q) {
        if (0 === S.length)
            return S;
        if (q && "function" === typeof q)
            return q(S);
        S = (new window.DOMParser).parseFromString(S, "text/html");
        var v = Object.keys(Q)
          , F = [].slice.call(S.body.querySelectorAll("*"));
        q = function(va, Gb) {
            var Ab = F[va];
            va = Ab.nodeName.toLowerCase();
            if (-1 === v.indexOf(Ab.nodeName.toLowerCase()))
                return Ab.parentNode.removeChild(Ab),
                "continue";
            Gb = [].slice.call(Ab.attributes);
            var Yb = [].concat(Q["*"] || [], Q[va] || []);
            Gb.forEach(function($b) {
                Ea($b, Yb) || Ab.removeAttribute($b.nodeName)
            })
        }
        ;
        for (var ba = 0, ca = F.length; ba < ca; ba++)
            q(ba, ca);
        return S.body.innerHTML
    }
    k = k && k.hasOwnProperty("default") ? k["default"] : k;
    E = E && E.hasOwnProperty("default") ? E["default"] : E;
    var oa = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(S) {
            do
                S += ~~(1E6 * Math.random());
            while (document.getElementById(S));
            return S
        },
        getSelectorFromElement: function(S) {
            var Q = S.getAttribute("data-target");
            Q && "#" !== Q || (Q = (S = S.getAttribute("href")) && "#" !== S ? S.trim() : "");
            try {
                return document.querySelector(Q) ? Q : null
            } catch (q) {
                return null
            }
        },
        getTransitionDurationFromElement: function(S) {
            if (!S)
                return 0;
            var Q = k(S).css("transition-duration");
            S = k(S).css("transition-delay");
            var q = parseFloat(Q)
              , v = parseFloat(S);
            if (!q && !v)
                return 0;
            Q = Q.split(",")[0];
            S = S.split(",")[0];
            return 1E3 * (parseFloat(Q) + parseFloat(S))
        },
        reflow: function(S) {
            return S.offsetHeight
        },
        triggerTransitionEnd: function(S) {
            k(S).trigger("transitionend")
        },
        supportsTransitionEnd: function() {
            return !0
        },
        isElement: function(S) {
            return (S[0] || S).nodeType
        },
        typeCheckConfig: function(S, Q, q) {
            for (var v in q)
                if (Object.prototype.hasOwnProperty.call(q, v)) {
                    var F = q[v]
                      , ba = Q[v];
                    ba = ba && oa.isElement(ba) ? "element" : {}.toString.call(ba).match(/\s([a-z]+)/i)[1].toLowerCase();
                    if (!(new RegExp(F)).test(ba))
                        throw Error(S.toUpperCase() + ': Option "' + (v + '" provided type "' + ba + '" but expected type "') + (F + '".'));
                }
        },
        findShadowRoot: function(S) {
            return document.documentElement.attachShadow ? "function" === typeof S.getRootNode ? (S = S.getRootNode(),
            S instanceof ShadowRoot ? S : null) : S instanceof ShadowRoot ? S : S.parentNode ? oa.findShadowRoot(S.parentNode) : null : null
        }
    };
    k.fn.emulateTransitionEnd = function(S) {
        var Q = this
          , q = !1;
        k(this).one(oa.TRANSITION_END, function() {
            q = !0
        });
        setTimeout(function() {
            q || oa.triggerTransitionEnd(Q)
        }, S);
        return this
    }
    ;
    k.event.special[oa.TRANSITION_END] = function() {
        return {
            bindType: "transitionend",
            delegateType: "transitionend",
            handle: function(S) {
                if (k(S.target).is(this))
                    return S.handleObj.handler.apply(this, arguments)
            }
        }
    }();
    var b = k.fn.alert
      , g = function() {
        function S(q) {
            this._element = q
        }
        var Q = S.prototype;
        Q.close = function(q) {
            var v = this._element;
            q && (v = this._getRootElement(q));
            this._triggerCloseEvent(v).isDefaultPrevented() || this._removeElement(v)
        }
        ;
        Q.dispose = function() {
            k.removeData(this._element, "bs.alert");
            this._element = null
        }
        ;
        Q._getRootElement = function(q) {
            var v = oa.getSelectorFromElement(q)
              , F = !1;
            v && (F = document.querySelector(v));
            F ||= k(q).closest(".alert")[0];
            return F
        }
        ;
        Q._triggerCloseEvent = function(q) {
            var v = k.Event("close.bs.alert");
            k(q).trigger(v);
            return v
        }
        ;
        Q._removeElement = function(q) {
            var v = this;
            k(q).removeClass("show");
            if (k(q).hasClass("fade")) {
                var F = oa.getTransitionDurationFromElement(q);
                k(q).one(oa.TRANSITION_END, function(ba) {
                    return v._destroyElement(q, ba)
                }).emulateTransitionEnd(F)
            } else
                this._destroyElement(q)
        }
        ;
        Q._destroyElement = function(q) {
            k(q).detach().trigger("closed.bs.alert").remove()
        }
        ;
        S._jQueryInterface = function(q) {
            return this.each(function() {
                var v = k(this)
                  , F = v.data("bs.alert");
                F || (F = new S(this),
                v.data("bs.alert", F));
                if ("close" === q)
                    F[q](this)
            })
        }
        ;
        S._handleDismiss = function(q) {
            return function(v) {
                v && v.preventDefault();
                q.close(this)
            }
        }
        ;
        H(S, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }]);
        return S
    }();
    k(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', g._handleDismiss(new g));
    k.fn.alert = g._jQueryInterface;
    k.fn.alert.Constructor = g;
    k.fn.alert.noConflict = function() {
        k.fn.alert = b;
        return g._jQueryInterface
    }
    ;
    var u = k.fn.button
      , y = function() {
        function S(q) {
            this._element = q
        }
        var Q = S.prototype;
        Q.toggle = function() {
            var q = !0
              , v = !0
              , F = k(this._element).closest('[data-toggle="buttons"]')[0];
            if (F) {
                var ba = this._element.querySelector('input:not([type="hidden"])');
                if (ba) {
                    "radio" === ba.type && (ba.checked && this._element.classList.contains("active") ? q = !1 : (v = F.querySelector(".active")) && k(v).removeClass("active"));
                    if (q) {
                        if (ba.hasAttribute("disabled") || F.hasAttribute("disabled") || ba.classList.contains("disabled") || F.classList.contains("disabled"))
                            return;
                        ba.checked = !this._element.classList.contains("active");
                        k(ba).trigger("change")
                    }
                    ba.focus();
                    v = !1
                }
            }
            v && this._element.setAttribute("aria-pressed", !this._element.classList.contains("active"));
            q && k(this._element).toggleClass("active")
        }
        ;
        Q.dispose = function() {
            k.removeData(this._element, "bs.button");
            this._element = null
        }
        ;
        S._jQueryInterface = function(q) {
            return this.each(function() {
                var v = k(this).data("bs.button");
                v || (v = new S(this),
                k(this).data("bs.button", v));
                if ("toggle" === q)
                    v[q]()
            })
        }
        ;
        H(S, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }]);
        return S
    }();
    k(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(S) {
        S.preventDefault();
        S = S.target;
        k(S).hasClass("btn") || (S = k(S).closest(".btn"));
        y._jQueryInterface.call(k(S), "toggle")
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(S) {
        var Q = k(S.target).closest(".btn")[0];
        k(Q).toggleClass("focus", /^focus(in)?$/.test(S.type))
    });
    k.fn.button = y._jQueryInterface;
    k.fn.button.Constructor = y;
    k.fn.button.noConflict = function() {
        k.fn.button = u;
        return y._jQueryInterface
    }
    ;
    var I = k.fn.carousel
      , T = {
        interval: 5E3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0
    }
      , P = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
    }
      , ia = {
        TOUCH: "touch",
        PEN: "pen"
    }
      , pa = function() {
        function S(q, v) {
            this._activeElement = this._interval = this._items = null;
            this._isSliding = this._isPaused = !1;
            this.touchTimeout = null;
            this.touchDeltaX = this.touchStartX = 0;
            this._config = this._getConfig(v);
            this._element = q;
            this._indicatorsElement = this._element.querySelector(".carousel-indicators");
            this._touchSupported = "ontouchstart"in document.documentElement || 0 < navigator.maxTouchPoints;
            this._pointerEvent = !(!window.PointerEvent && !window.MSPointerEvent);
            this._addEventListeners()
        }
        var Q = S.prototype;
        Q.next = function() {
            this._isSliding || this._slide("next")
        }
        ;
        Q.nextWhenVisible = function() {
            !document.hidden && k(this._element).is(":visible") && "hidden" !== k(this._element).css("visibility") && this.next()
        }
        ;
        Q.prev = function() {
            this._isSliding || this._slide("prev")
        }
        ;
        Q.pause = function(q) {
            q || (this._isPaused = !0);
            this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (oa.triggerTransitionEnd(this._element),
            this.cycle(!0));
            clearInterval(this._interval);
            this._interval = null
        }
        ;
        Q.cycle = function(q) {
            q || (this._isPaused = !1);
            this._interval && (clearInterval(this._interval),
            this._interval = null);
            this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }
        ;
        Q.to = function(q) {
            var v = this;
            this._activeElement = this._element.querySelector(".active.carousel-item");
            var F = this._getItemIndex(this._activeElement);
            if (!(q > this._items.length - 1 || 0 > q))
                if (this._isSliding)
                    k(this._element).one("slid.bs.carousel", function() {
                        return v.to(q)
                    });
                else
                    F === q ? (this.pause(),
                    this.cycle()) : this._slide(q > F ? "next" : "prev", this._items[q])
        }
        ;
        Q.dispose = function() {
            k(this._element).off(".bs.carousel");
            k.removeData(this._element, "bs.carousel");
            this._indicatorsElement = this._activeElement = this._isSliding = this._isPaused = this._interval = this._element = this._config = this._items = null
        }
        ;
        Q._getConfig = function(q) {
            q = M({}, T, q);
            oa.typeCheckConfig("carousel", q, P);
            return q
        }
        ;
        Q._handleSwipe = function() {
            var q = Math.abs(this.touchDeltaX);
            40 >= q || (q /= this.touchDeltaX,
            0 < q && this.prev(),
            0 > q && this.next())
        }
        ;
        Q._addEventListeners = function() {
            var q = this;
            if (this._config.keyboard)
                k(this._element).on("keydown.bs.carousel", function(v) {
                    return q._keydown(v)
                });
            if ("hover" === this._config.pause)
                k(this._element).on("mouseenter.bs.carousel", function(v) {
                    return q.pause(v)
                }).on("mouseleave.bs.carousel", function(v) {
                    return q.cycle(v)
                });
            this._config.touch && this._addTouchEventListeners()
        }
        ;
        Q._addTouchEventListeners = function() {
            var q = this;
            if (this._touchSupported) {
                var v = function(ba) {
                    q._pointerEvent && ia[ba.originalEvent.pointerType.toUpperCase()] ? q.touchStartX = ba.originalEvent.clientX : q._pointerEvent || (q.touchStartX = ba.originalEvent.touches[0].clientX)
                }
                  , F = function(ba) {
                    q._pointerEvent && ia[ba.originalEvent.pointerType.toUpperCase()] && (q.touchDeltaX = ba.originalEvent.clientX - q.touchStartX);
                    q._handleSwipe();
                    "hover" === q._config.pause && (q.pause(),
                    q.touchTimeout && clearTimeout(q.touchTimeout),
                    q.touchTimeout = setTimeout(function(ca) {
                        return q.cycle(ca)
                    }, 500 + q._config.interval))
                };
                k(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", function(ba) {
                    return ba.preventDefault()
                });
                this._pointerEvent ? (k(this._element).on("pointerdown.bs.carousel", function(ba) {
                    return v(ba)
                }),
                k(this._element).on("pointerup.bs.carousel", function(ba) {
                    return F(ba)
                }),
                this._element.classList.add("pointer-event")) : (k(this._element).on("touchstart.bs.carousel", function(ba) {
                    return v(ba)
                }),
                k(this._element).on("touchmove.bs.carousel", function(ba) {
                    q.touchDeltaX = ba.originalEvent.touches && 1 < ba.originalEvent.touches.length ? 0 : ba.originalEvent.touches[0].clientX - q.touchStartX
                }),
                k(this._element).on("touchend.bs.carousel", function(ba) {
                    return F(ba)
                }))
            }
        }
        ;
        Q._keydown = function(q) {
            if (!/input|textarea/i.test(q.target.tagName))
                switch (q.which) {
                case 37:
                    q.preventDefault();
                    this.prev();
                    break;
                case 39:
                    q.preventDefault(),
                    this.next()
                }
        }
        ;
        Q._getItemIndex = function(q) {
            this._items = q && q.parentNode ? [].slice.call(q.parentNode.querySelectorAll(".carousel-item")) : [];
            return this._items.indexOf(q)
        }
        ;
        Q._getItemByDirection = function(q, v) {
            var F = "next" === q
              , ba = "prev" === q
              , ca = this._getItemIndex(v)
              , va = this._items.length - 1;
            if ((ba && 0 === ca || F && ca === va) && !this._config.wrap)
                return v;
            q = (ca + ("prev" === q ? -1 : 1)) % this._items.length;
            return -1 === q ? this._items[this._items.length - 1] : this._items[q]
        }
        ;
        Q._triggerSlideEvent = function(q, v) {
            var F = this._getItemIndex(q)
              , ba = this._getItemIndex(this._element.querySelector(".active.carousel-item"));
            q = k.Event("slide.bs.carousel", {
                relatedTarget: q,
                direction: v,
                from: ba,
                to: F
            });
            k(this._element).trigger(q);
            return q
        }
        ;
        Q._setActiveIndicatorElement = function(q) {
            if (this._indicatorsElement) {
                var v = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                k(v).removeClass("active");
                (q = this._indicatorsElement.children[this._getItemIndex(q)]) && k(q).addClass("active")
            }
        }
        ;
        Q._slide = function(q, v) {
            var F = this
              , ba = this._element.querySelector(".active.carousel-item")
              , ca = this._getItemIndex(ba)
              , va = v || ba && this._getItemByDirection(q, ba)
              , Gb = this._getItemIndex(va);
            v = !!this._interval;
            if ("next" === q) {
                var Ab = "carousel-item-left";
                var Yb = "carousel-item-next";
                q = "left"
            } else
                Ab = "carousel-item-right",
                Yb = "carousel-item-prev",
                q = "right";
            if (va && k(va).hasClass("active"))
                this._isSliding = !1;
            else if (!this._triggerSlideEvent(va, q).isDefaultPrevented() && ba && va) {
                this._isSliding = !0;
                v && this.pause();
                this._setActiveIndicatorElement(va);
                var $b = k.Event("slid.bs.carousel", {
                    relatedTarget: va,
                    direction: q,
                    from: ca,
                    to: Gb
                });
                k(this._element).hasClass("slide") ? (k(va).addClass(Yb),
                oa.reflow(va),
                k(ba).addClass(Ab),
                k(va).addClass(Ab),
                (ca = parseInt(va.getAttribute("data-interval"), 10)) ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval,
                this._config.interval = ca) : this._config.interval = this._config.defaultInterval || this._config.interval,
                ca = oa.getTransitionDurationFromElement(ba),
                k(ba).one(oa.TRANSITION_END, function() {
                    k(va).removeClass(Ab + " " + Yb).addClass("active");
                    k(ba).removeClass("active " + Yb + " " + Ab);
                    F._isSliding = !1;
                    setTimeout(function() {
                        return k(F._element).trigger($b)
                    }, 0)
                }).emulateTransitionEnd(ca)) : (k(ba).removeClass("active"),
                k(va).addClass("active"),
                this._isSliding = !1,
                k(this._element).trigger($b));
                v && this.cycle()
            }
        }
        ;
        S._jQueryInterface = function(q) {
            return this.each(function() {
                var v = k(this).data("bs.carousel")
                  , F = M({}, T, k(this).data());
                "object" === typeof q && (F = M({}, F, q));
                var ba = "string" === typeof q ? q : F.slide;
                v || (v = new S(this,F),
                k(this).data("bs.carousel", v));
                if ("number" === typeof q)
                    v.to(q);
                else if ("string" === typeof ba) {
                    if ("undefined" === typeof v[ba])
                        throw new TypeError('No method named "' + ba + '"');
                    v[ba]()
                } else
                    F.interval && F.ride && (v.pause(),
                    v.cycle())
            })
        }
        ;
        S._dataApiClickHandler = function(q) {
            var v = oa.getSelectorFromElement(this);
            if (v && (v = k(v)[0]) && k(v).hasClass("carousel")) {
                var F = M({}, k(v).data(), k(this).data())
                  , ba = this.getAttribute("data-slide-to");
                ba && (F.interval = !1);
                S._jQueryInterface.call(k(v), F);
                ba && k(v).data("bs.carousel").to(ba);
                q.preventDefault()
            }
        }
        ;
        H(S, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return T
            }
        }]);
        return S
    }();
    k(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", pa._dataApiClickHandler);
    k(window).on("load.bs.carousel.data-api", function() {
        for (var S = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), Q = 0, q = S.length; Q < q; Q++) {
            var v = k(S[Q]);
            pa._jQueryInterface.call(v, v.data())
        }
    });
    k.fn.carousel = pa._jQueryInterface;
    k.fn.carousel.Constructor = pa;
    k.fn.carousel.noConflict = function() {
        k.fn.carousel = I;
        return pa._jQueryInterface
    }
    ;
    var qa = k.fn.collapse
      , ha = {
        toggle: !0,
        parent: ""
    }
      , V = {
        toggle: "boolean",
        parent: "(string|element)"
    }
      , aa = function() {
        function S(q, v) {
            this._isTransitioning = !1;
            this._element = q;
            this._config = this._getConfig(v);
            this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + q.id + '"],[data-toggle="collapse"][data-target="#' + (q.id + '"]')));
            v = [].slice.call(document.querySelectorAll('[data-toggle="collapse"]'));
            for (var F = 0, ba = v.length; F < ba; F++) {
                var ca = v[F]
                  , va = oa.getSelectorFromElement(ca)
                  , Gb = [].slice.call(document.querySelectorAll(va)).filter(function(Ab) {
                    return Ab === q
                });
                null !== va && 0 < Gb.length && (this._selector = va,
                this._triggerArray.push(ca))
            }
            this._parent = this._config.parent ? this._getParent() : null;
            this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray);
            this._config.toggle && this.toggle()
        }
        var Q = S.prototype;
        Q.toggle = function() {
            k(this._element).hasClass("show") ? this.hide() : this.show()
        }
        ;
        Q.show = function() {
            var q = this;
            if (!this._isTransitioning && !k(this._element).hasClass("show")) {
                var v;
                if (this._parent) {
                    var F = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function(va) {
                        return "string" === typeof q._config.parent ? va.getAttribute("data-parent") === q._config.parent : va.classList.contains("collapse")
                    });
                    0 === F.length && (F = null)
                }
                if (F && (v = k(F).not(this._selector).data("bs.collapse")) && v._isTransitioning)
                    return;
                var ba = k.Event("show.bs.collapse");
                k(this._element).trigger(ba);
                if (!ba.isDefaultPrevented()) {
                    F && (S._jQueryInterface.call(k(F).not(this._selector), "hide"),
                    v || k(F).data("bs.collapse", null));
                    var ca = this._getDimension();
                    k(this._element).removeClass("collapse").addClass("collapsing");
                    this._element.style[ca] = 0;
                    this._triggerArray.length && k(this._triggerArray).removeClass("collapsed").attr("aria-expanded", !0);
                    this.setTransitioning(!0);
                    F = "scroll" + (ca[0].toUpperCase() + ca.slice(1));
                    v = oa.getTransitionDurationFromElement(this._element);
                    k(this._element).one(oa.TRANSITION_END, function() {
                        k(q._element).removeClass("collapsing").addClass("collapse").addClass("show");
                        q._element.style[ca] = "";
                        q.setTransitioning(!1);
                        k(q._element).trigger("shown.bs.collapse")
                    }).emulateTransitionEnd(v);
                    this._element.style[ca] = this._element[F] + "px"
                }
            }
        }
        ;
        Q.hide = function() {
            var q = this;
            if (!this._isTransitioning && k(this._element).hasClass("show")) {
                var v = k.Event("hide.bs.collapse");
                k(this._element).trigger(v);
                if (!v.isDefaultPrevented()) {
                    v = this._getDimension();
                    this._element.style[v] = this._element.getBoundingClientRect()[v] + "px";
                    oa.reflow(this._element);
                    k(this._element).addClass("collapsing").removeClass("collapse").removeClass("show");
                    var F = this._triggerArray.length;
                    if (0 < F)
                        for (var ba = 0; ba < F; ba++) {
                            var ca = this._triggerArray[ba]
                              , va = oa.getSelectorFromElement(ca);
                            null !== va && (k([].slice.call(document.querySelectorAll(va))).hasClass("show") || k(ca).addClass("collapsed").attr("aria-expanded", !1))
                        }
                    this.setTransitioning(!0);
                    this._element.style[v] = "";
                    v = oa.getTransitionDurationFromElement(this._element);
                    k(this._element).one(oa.TRANSITION_END, function() {
                        q.setTransitioning(!1);
                        k(q._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                    }).emulateTransitionEnd(v)
                }
            }
        }
        ;
        Q.setTransitioning = function(q) {
            this._isTransitioning = q
        }
        ;
        Q.dispose = function() {
            k.removeData(this._element, "bs.collapse");
            this._isTransitioning = this._triggerArray = this._element = this._parent = this._config = null
        }
        ;
        Q._getConfig = function(q) {
            q = M({}, ha, q);
            q.toggle = !!q.toggle;
            oa.typeCheckConfig("collapse", q, V);
            return q
        }
        ;
        Q._getDimension = function() {
            return k(this._element).hasClass("width") ? "width" : "height"
        }
        ;
        Q._getParent = function() {
            var q = this;
            if (oa.isElement(this._config.parent)) {
                var v = this._config.parent;
                "undefined" !== typeof this._config.parent.jquery && (v = this._config.parent[0])
            } else
                v = document.querySelector(this._config.parent);
            var F = [].slice.call(v.querySelectorAll('[data-toggle="collapse"][data-parent="' + this._config.parent + '"]'));
            k(F).each(function(ba, ca) {
                q._addAriaAndCollapsedClass(S._getTargetFromElement(ca), [ca])
            });
            return v
        }
        ;
        Q._addAriaAndCollapsedClass = function(q, v) {
            q = k(q).hasClass("show");
            v.length && k(v).toggleClass("collapsed", !q).attr("aria-expanded", q)
        }
        ;
        S._getTargetFromElement = function(q) {
            return (q = oa.getSelectorFromElement(q)) ? document.querySelector(q) : null
        }
        ;
        S._jQueryInterface = function(q) {
            return this.each(function() {
                var v = k(this)
                  , F = v.data("bs.collapse")
                  , ba = M({}, ha, v.data(), "object" === typeof q && q ? q : {});
                !F && ba.toggle && /show|hide/.test(q) && (ba.toggle = !1);
                F || (F = new S(this,ba),
                v.data("bs.collapse", F));
                if ("string" === typeof q) {
                    if ("undefined" === typeof F[q])
                        throw new TypeError('No method named "' + q + '"');
                    F[q]()
                }
            })
        }
        ;
        H(S, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return ha
            }
        }]);
        return S
    }();
    k(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(S) {
        "A" === S.currentTarget.tagName && S.preventDefault();
        var Q = k(this);
        S = oa.getSelectorFromElement(this);
        S = [].slice.call(document.querySelectorAll(S));
        k(S).each(function() {
            var q = k(this)
              , v = q.data("bs.collapse") ? "toggle" : Q.data();
            aa._jQueryInterface.call(q, v)
        })
    });
    k.fn.collapse = aa._jQueryInterface;
    k.fn.collapse.Constructor = aa;
    k.fn.collapse.noConflict = function() {
        k.fn.collapse = qa;
        return aa._jQueryInterface
    }
    ;
    var ma = k.fn.dropdown
      , Ja = RegExp("38|40|27")
      , Ka = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic"
    }
      , Na = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string"
    }
      , na = function() {
        function S(q, v) {
            this._element = q;
            this._popper = null;
            this._config = this._getConfig(v);
            this._menu = this._getMenuElement();
            this._inNavbar = this._detectNavbar();
            this._addEventListeners()
        }
        var Q = S.prototype;
        Q.toggle = function() {
            if (!this._element.disabled && !k(this._element).hasClass("disabled")) {
                var q = S._getParentFromElement(this._element)
                  , v = k(this._menu).hasClass("show");
                S._clearMenus();
                if (!v) {
                    v = {
                        relatedTarget: this._element
                    };
                    var F = k.Event("show.bs.dropdown", v);
                    k(q).trigger(F);
                    if (!F.isDefaultPrevented()) {
                        if (!this._inNavbar) {
                            if ("undefined" === typeof E)
                                throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                            F = this._element;
                            "parent" === this._config.reference ? F = q : oa.isElement(this._config.reference) && (F = this._config.reference,
                            "undefined" !== typeof this._config.reference.jquery && (F = this._config.reference[0]));
                            "scrollParent" !== this._config.boundary && k(q).addClass("position-static");
                            this._popper = new E(F,this._menu,this._getPopperConfig())
                        }
                        if ("ontouchstart"in document.documentElement && 0 === k(q).closest(".navbar-nav").length)
                            k(document.body).children().on("mouseover", null, k.noop);
                        this._element.focus();
                        this._element.setAttribute("aria-expanded", !0);
                        k(this._menu).toggleClass("show");
                        k(q).toggleClass("show").trigger(k.Event("shown.bs.dropdown", v))
                    }
                }
            }
        }
        ;
        Q.show = function() {
            if (!(this._element.disabled || k(this._element).hasClass("disabled") || k(this._menu).hasClass("show"))) {
                var q = {
                    relatedTarget: this._element
                }
                  , v = k.Event("show.bs.dropdown", q)
                  , F = S._getParentFromElement(this._element);
                k(F).trigger(v);
                v.isDefaultPrevented() || (k(this._menu).toggleClass("show"),
                k(F).toggleClass("show").trigger(k.Event("shown.bs.dropdown", q)))
            }
        }
        ;
        Q.hide = function() {
            if (!this._element.disabled && !k(this._element).hasClass("disabled") && k(this._menu).hasClass("show")) {
                var q = {
                    relatedTarget: this._element
                }
                  , v = k.Event("hide.bs.dropdown", q)
                  , F = S._getParentFromElement(this._element);
                k(F).trigger(v);
                v.isDefaultPrevented() || (k(this._menu).toggleClass("show"),
                k(F).toggleClass("show").trigger(k.Event("hidden.bs.dropdown", q)))
            }
        }
        ;
        Q.dispose = function() {
            k.removeData(this._element, "bs.dropdown");
            k(this._element).off(".bs.dropdown");
            this._menu = this._element = null;
            null !== this._popper && (this._popper.destroy(),
            this._popper = null)
        }
        ;
        Q.update = function() {
            this._inNavbar = this._detectNavbar();
            null !== this._popper && this._popper.scheduleUpdate()
        }
        ;
        Q._addEventListeners = function() {
            var q = this;
            k(this._element).on("click.bs.dropdown", function(v) {
                v.preventDefault();
                v.stopPropagation();
                q.toggle()
            })
        }
        ;
        Q._getConfig = function(q) {
            q = M({}, this.constructor.Default, k(this._element).data(), q);
            oa.typeCheckConfig("dropdown", q, this.constructor.DefaultType);
            return q
        }
        ;
        Q._getMenuElement = function() {
            if (!this._menu) {
                var q = S._getParentFromElement(this._element);
                q && (this._menu = q.querySelector(".dropdown-menu"))
            }
            return this._menu
        }
        ;
        Q._getPlacement = function() {
            var q = k(this._element.parentNode)
              , v = "bottom-start";
            q.hasClass("dropup") ? (v = "top-start",
            k(this._menu).hasClass("dropdown-menu-right") && (v = "top-end")) : q.hasClass("dropright") ? v = "right-start" : q.hasClass("dropleft") ? v = "left-start" : k(this._menu).hasClass("dropdown-menu-right") && (v = "bottom-end");
            return v
        }
        ;
        Q._detectNavbar = function() {
            return 0 < k(this._element).closest(".navbar").length
        }
        ;
        Q._getOffset = function() {
            var q = this
              , v = {};
            "function" === typeof this._config.offset ? v.fn = function(F) {
                F.offsets = M({}, F.offsets, q._config.offset(F.offsets, q._element) || {});
                return F
            }
            : v.offset = this._config.offset;
            return v
        }
        ;
        Q._getPopperConfig = function() {
            var q = {
                placement: this._getPlacement(),
                modifiers: {
                    offset: this._getOffset(),
                    flip: {
                        enabled: this._config.flip
                    },
                    preventOverflow: {
                        boundariesElement: this._config.boundary
                    }
                }
            };
            "static" === this._config.display && (q.modifiers.applyStyle = {
                enabled: !1
            });
            return q
        }
        ;
        S._jQueryInterface = function(q) {
            return this.each(function() {
                var v = k(this).data("bs.dropdown")
                  , F = "object" === typeof q ? q : null;
                v || (v = new S(this,F),
                k(this).data("bs.dropdown", v));
                if ("string" === typeof q) {
                    if ("undefined" === typeof v[q])
                        throw new TypeError('No method named "' + q + '"');
                    v[q]()
                }
            })
        }
        ;
        S._clearMenus = function(q) {
            if (!q || 3 !== q.which && ("keyup" !== q.type || 9 === q.which))
                for (var v = [].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')), F = 0, ba = v.length; F < ba; F++) {
                    var ca = S._getParentFromElement(v[F])
                      , va = k(v[F]).data("bs.dropdown")
                      , Gb = {
                        relatedTarget: v[F]
                    };
                    q && "click" === q.type && (Gb.clickEvent = q);
                    if (va && (va = va._menu,
                    k(ca).hasClass("show") && !(q && ("click" === q.type && /input|textarea/i.test(q.target.tagName) || "keyup" === q.type && 9 === q.which) && k.contains(ca, q.target)))) {
                        var Ab = k.Event("hide.bs.dropdown", Gb);
                        k(ca).trigger(Ab);
                        Ab.isDefaultPrevented() || ("ontouchstart"in document.documentElement && k(document.body).children().off("mouseover", null, k.noop),
                        v[F].setAttribute("aria-expanded", "false"),
                        k(va).removeClass("show"),
                        k(ca).removeClass("show").trigger(k.Event("hidden.bs.dropdown", Gb)))
                    }
                }
        }
        ;
        S._getParentFromElement = function(q) {
            var v, F = oa.getSelectorFromElement(q);
            F && (v = document.querySelector(F));
            return v || q.parentNode
        }
        ;
        S._dataApiKeydownHandler = function(q) {
            if (/input|textarea/i.test(q.target.tagName) ? !(32 === q.which || 27 !== q.which && (40 !== q.which && 38 !== q.which || k(q.target).closest(".dropdown-menu").length)) : Ja.test(q.which))
                if (q.preventDefault(),
                q.stopPropagation(),
                !this.disabled && !k(this).hasClass("disabled")) {
                    var v = S._getParentFromElement(this)
                      , F = k(v).hasClass("show");
                    !F || F && (27 === q.which || 32 === q.which) ? (27 === q.which && (q = v.querySelector('[data-toggle="dropdown"]'),
                    k(q).trigger("focus")),
                    k(this).trigger("click")) : (v = [].slice.call(v.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")),
                    0 !== v.length && (F = v.indexOf(q.target),
                    38 === q.which && 0 < F && F--,
                    40 === q.which && F < v.length - 1 && F++,
                    0 > F && (F = 0),
                    v[F].focus()))
                }
        }
        ;
        H(S, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return Ka
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Na
            }
        }]);
        return S
    }();
    k(document).on("keydown.bs.dropdown.data-api", '[data-toggle="dropdown"]', na._dataApiKeydownHandler).on("keydown.bs.dropdown.data-api", ".dropdown-menu", na._dataApiKeydownHandler).on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", na._clearMenus).on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', function(S) {
        S.preventDefault();
        S.stopPropagation();
        na._jQueryInterface.call(k(this), "toggle")
    }).on("click.bs.dropdown.data-api", ".dropdown form", function(S) {
        S.stopPropagation()
    });
    k.fn.dropdown = na._jQueryInterface;
    k.fn.dropdown.Constructor = na;
    k.fn.dropdown.noConflict = function() {
        k.fn.dropdown = ma;
        return na._jQueryInterface
    }
    ;
    var Ha = k.fn.modal
      , xa = {
        backdrop: !0,
        keyboard: !0,
        focus: !0,
        show: !0
    }
      , Oa = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean"
    }
      , jb = function() {
        function S(q, v) {
            this._config = this._getConfig(v);
            this._element = q;
            this._dialog = q.querySelector(".modal-dialog");
            this._backdrop = null;
            this._isTransitioning = this._ignoreBackdropClick = this._isBodyOverflowing = this._isShown = !1;
            this._scrollbarWidth = 0
        }
        var Q = S.prototype;
        Q.toggle = function(q) {
            return this._isShown ? this.hide() : this.show(q)
        }
        ;
        Q.show = function(q) {
            var v = this;
            if (!this._isShown && !this._isTransitioning) {
                k(this._element).hasClass("fade") && (this._isTransitioning = !0);
                var F = k.Event("show.bs.modal", {
                    relatedTarget: q
                });
                k(this._element).trigger(F);
                this._isShown || F.isDefaultPrevented() || (this._isShown = !0,
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                k(this._element).on("click.dismiss.bs.modal", '[data-dismiss="modal"]', function(ba) {
                    return v.hide(ba)
                }),
                k(this._dialog).on("mousedown.dismiss.bs.modal", function() {
                    k(v._element).one("mouseup.dismiss.bs.modal", function(ba) {
                        k(ba.target).is(v._element) && (v._ignoreBackdropClick = !0)
                    })
                }),
                this._showBackdrop(function() {
                    return v._showElement(q)
                }))
            }
        }
        ;
        Q.hide = function(q) {
            var v = this;
            q && q.preventDefault();
            if (this._isShown && !this._isTransitioning && (q = k.Event("hide.bs.modal"),
            k(this._element).trigger(q),
            this._isShown && !q.isDefaultPrevented())) {
                this._isShown = !1;
                if (q = k(this._element).hasClass("fade"))
                    this._isTransitioning = !0;
                this._setEscapeEvent();
                this._setResizeEvent();
                k(document).off("focusin.bs.modal");
                k(this._element).removeClass("show");
                k(this._element).off("click.dismiss.bs.modal");
                k(this._dialog).off("mousedown.dismiss.bs.modal");
                q ? (q = oa.getTransitionDurationFromElement(this._element),
                k(this._element).one(oa.TRANSITION_END, function(F) {
                    return v._hideModal(F)
                }).emulateTransitionEnd(q)) : this._hideModal()
            }
        }
        ;
        Q.dispose = function() {
            [window, this._element, this._dialog].forEach(function(q) {
                return k(q).off(".bs.modal")
            });
            k(document).off("focusin.bs.modal");
            k.removeData(this._element, "bs.modal");
            this._scrollbarWidth = this._isTransitioning = this._ignoreBackdropClick = this._isBodyOverflowing = this._isShown = this._backdrop = this._dialog = this._element = this._config = null
        }
        ;
        Q.handleUpdate = function() {
            this._adjustDialog()
        }
        ;
        Q._getConfig = function(q) {
            q = M({}, xa, q);
            oa.typeCheckConfig("modal", q, Oa);
            return q
        }
        ;
        Q._showElement = function(q) {
            var v = this
              , F = k(this._element).hasClass("fade");
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element);
            this._element.style.display = "block";
            this._element.removeAttribute("aria-hidden");
            this._element.setAttribute("aria-modal", !0);
            k(this._dialog).hasClass("modal-dialog-scrollable") ? this._dialog.querySelector(".modal-body").scrollTop = 0 : this._element.scrollTop = 0;
            F && oa.reflow(this._element);
            k(this._element).addClass("show");
            this._config.focus && this._enforceFocus();
            var ba = k.Event("shown.bs.modal", {
                relatedTarget: q
            });
            q = function() {
                v._config.focus && v._element.focus();
                v._isTransitioning = !1;
                k(v._element).trigger(ba)
            }
            ;
            F ? (F = oa.getTransitionDurationFromElement(this._dialog),
            k(this._dialog).one(oa.TRANSITION_END, q).emulateTransitionEnd(F)) : q()
        }
        ;
        Q._enforceFocus = function() {
            var q = this;
            k(document).off("focusin.bs.modal").on("focusin.bs.modal", function(v) {
                document !== v.target && q._element !== v.target && 0 === k(q._element).has(v.target).length && q._element.focus()
            })
        }
        ;
        Q._setEscapeEvent = function() {
            var q = this;
            if (this._isShown && this._config.keyboard)
                k(this._element).on("keydown.dismiss.bs.modal", function(v) {
                    27 === v.which && (v.preventDefault(),
                    q.hide())
                });
            else
                this._isShown || k(this._element).off("keydown.dismiss.bs.modal")
        }
        ;
        Q._setResizeEvent = function() {
            var q = this;
            if (this._isShown)
                k(window).on("resize.bs.modal", function(v) {
                    return q.handleUpdate(v)
                });
            else
                k(window).off("resize.bs.modal")
        }
        ;
        Q._hideModal = function() {
            var q = this;
            this._element.style.display = "none";
            this._element.setAttribute("aria-hidden", !0);
            this._element.removeAttribute("aria-modal");
            this._isTransitioning = !1;
            this._showBackdrop(function() {
                k(document.body).removeClass("modal-open");
                q._resetAdjustments();
                q._resetScrollbar();
                k(q._element).trigger("hidden.bs.modal")
            })
        }
        ;
        Q._removeBackdrop = function() {
            this._backdrop && (k(this._backdrop).remove(),
            this._backdrop = null)
        }
        ;
        Q._showBackdrop = function(q) {
            var v = this
              , F = k(this._element).hasClass("fade") ? "fade" : "";
            if (this._isShown && this._config.backdrop)
                this._backdrop = document.createElement("div"),
                this._backdrop.className = "modal-backdrop",
                F && this._backdrop.classList.add(F),
                k(this._backdrop).appendTo(document.body),
                k(this._element).on("click.dismiss.bs.modal", function(ca) {
                    v._ignoreBackdropClick ? v._ignoreBackdropClick = !1 : ca.target === ca.currentTarget && ("static" === v._config.backdrop ? v._element.focus() : v.hide())
                }),
                F && oa.reflow(this._backdrop),
                k(this._backdrop).addClass("show"),
                q && (F ? (F = oa.getTransitionDurationFromElement(this._backdrop),
                k(this._backdrop).one(oa.TRANSITION_END, q).emulateTransitionEnd(F)) : q());
            else if (!this._isShown && this._backdrop)
                if (k(this._backdrop).removeClass("show"),
                F = function() {
                    v._removeBackdrop();
                    q && q()
                }
                ,
                k(this._element).hasClass("fade")) {
                    var ba = oa.getTransitionDurationFromElement(this._backdrop);
                    k(this._backdrop).one(oa.TRANSITION_END, F).emulateTransitionEnd(ba)
                } else
                    F();
            else
                q && q()
        }
        ;
        Q._adjustDialog = function() {
            var q = this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing && q && (this._element.style.paddingLeft = this._scrollbarWidth + "px");
            this._isBodyOverflowing && !q && (this._element.style.paddingRight = this._scrollbarWidth + "px")
        }
        ;
        Q._resetAdjustments = function() {
            this._element.style.paddingLeft = "";
            this._element.style.paddingRight = ""
        }
        ;
        Q._checkScrollbar = function() {
            var q = document.body.getBoundingClientRect();
            this._isBodyOverflowing = q.left + q.right < window.innerWidth;
            this._scrollbarWidth = this._getScrollbarWidth()
        }
        ;
        Q._setScrollbar = function() {
            var q = this;
            if (this._isBodyOverflowing) {
                var v = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"))
                  , F = [].slice.call(document.querySelectorAll(".sticky-top"));
                k(v).each(function(ba, ca) {
                    ba = ca.style.paddingRight;
                    var va = k(ca).css("padding-right");
                    k(ca).data("padding-right", ba).css("padding-right", parseFloat(va) + q._scrollbarWidth + "px")
                });
                k(F).each(function(ba, ca) {
                    ba = ca.style.marginRight;
                    var va = k(ca).css("margin-right");
                    k(ca).data("margin-right", ba).css("margin-right", parseFloat(va) - q._scrollbarWidth + "px")
                });
                v = document.body.style.paddingRight;
                F = k(document.body).css("padding-right");
                k(document.body).data("padding-right", v).css("padding-right", parseFloat(F) + this._scrollbarWidth + "px")
            }
            k(document.body).addClass("modal-open")
        }
        ;
        Q._resetScrollbar = function() {
            var q = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));
            k(q).each(function(v, F) {
                v = k(F).data("padding-right");
                k(F).removeData("padding-right");
                F.style.paddingRight = v ? v : ""
            });
            q = [].slice.call(document.querySelectorAll(".sticky-top"));
            k(q).each(function(v, F) {
                v = k(F).data("margin-right");
                "undefined" !== typeof v && k(F).css("margin-right", v).removeData("margin-right")
            });
            q = k(document.body).data("padding-right");
            k(document.body).removeData("padding-right");
            document.body.style.paddingRight = q ? q : ""
        }
        ;
        Q._getScrollbarWidth = function() {
            var q = document.createElement("div");
            q.className = "modal-scrollbar-measure";
            document.body.appendChild(q);
            var v = q.getBoundingClientRect().width - q.clientWidth;
            document.body.removeChild(q);
            return v
        }
        ;
        S._jQueryInterface = function(q, v) {
            return this.each(function() {
                var F = k(this).data("bs.modal")
                  , ba = M({}, xa, k(this).data(), "object" === typeof q && q ? q : {});
                F || (F = new S(this,ba),
                k(this).data("bs.modal", F));
                if ("string" === typeof q) {
                    if ("undefined" === typeof F[q])
                        throw new TypeError('No method named "' + q + '"');
                    F[q](v)
                } else
                    ba.show && F.show(v)
            })
        }
        ;
        H(S, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return xa
            }
        }]);
        return S
    }();
    k(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(S) {
        var Q = this, q, v = oa.getSelectorFromElement(this);
        v && (q = document.querySelector(v));
        v = k(q).data("bs.modal") ? "toggle" : M({}, k(q).data(), k(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || S.preventDefault();
        var F = k(q).one("show.bs.modal", function(ba) {
            if (!ba.isDefaultPrevented())
                F.one("hidden.bs.modal", function() {
                    k(Q).is(":visible") && Q.focus()
                })
        });
        jb._jQueryInterface.call(k(q), v, this)
    });
    k.fn.modal = jb._jQueryInterface;
    k.fn.modal.Constructor = jb;
    k.fn.modal.noConflict = function() {
        k.fn.modal = Ha;
        return jb._jQueryInterface
    }
    ;
    var lb = "background cite href itemtype longdesc poster src xlink:href".split(" ")
      , Ua = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi
      , gb = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i
      , vb = k.fn.tooltip
      , Fb = RegExp("(^|\\s)bs-tooltip\\S+", "g")
      , Hb = ["sanitize", "whiteList", "sanitizeFn"]
      , Cb = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(number|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacement: "(string|array)",
        boundary: "(string|element)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        whiteList: "object"
    }
      , Ib = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: "right",
        BOTTOM: "bottom",
        LEFT: "left"
    }
      , eb = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent",
        sanitize: !0,
        sanitizeFn: null,
        whiteList: {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        }
    }
      , Va = {
        HIDE: "hide.bs.tooltip",
        HIDDEN: "hidden.bs.tooltip",
        SHOW: "show.bs.tooltip",
        SHOWN: "shown.bs.tooltip",
        INSERTED: "inserted.bs.tooltip",
        CLICK: "click.bs.tooltip",
        FOCUSIN: "focusin.bs.tooltip",
        FOCUSOUT: "focusout.bs.tooltip",
        MOUSEENTER: "mouseenter.bs.tooltip",
        MOUSELEAVE: "mouseleave.bs.tooltip"
    }
      , fb = function() {
        function S(q, v) {
            if ("undefined" === typeof E)
                throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
            this._isEnabled = !0;
            this._timeout = 0;
            this._hoverState = "";
            this._activeTrigger = {};
            this._popper = null;
            this.element = q;
            this.config = this._getConfig(v);
            this.tip = null;
            this._setListeners()
        }
        var Q = S.prototype;
        Q.enable = function() {
            this._isEnabled = !0
        }
        ;
        Q.disable = function() {
            this._isEnabled = !1
        }
        ;
        Q.toggleEnabled = function() {
            this._isEnabled = !this._isEnabled
        }
        ;
        Q.toggle = function(q) {
            if (this._isEnabled)
                if (q) {
                    var v = this.constructor.DATA_KEY
                      , F = k(q.currentTarget).data(v);
                    F || (F = new this.constructor(q.currentTarget,this._getDelegateConfig()),
                    k(q.currentTarget).data(v, F));
                    F._activeTrigger.click = !F._activeTrigger.click;
                    F._isWithActiveTrigger() ? F._enter(null, F) : F._leave(null, F)
                } else
                    k(this.getTipElement()).hasClass("show") ? this._leave(null, this) : this._enter(null, this)
        }
        ;
        Q.dispose = function() {
            clearTimeout(this._timeout);
            k.removeData(this.element, this.constructor.DATA_KEY);
            k(this.element).off(this.constructor.EVENT_KEY);
            k(this.element).closest(".modal").off("hide.bs.modal");
            this.tip && k(this.tip).remove();
            this._activeTrigger = this._hoverState = this._timeout = this._isEnabled = null;
            null !== this._popper && this._popper.destroy();
            this.tip = this.config = this.element = this._popper = null
        }
        ;
        Q.show = function() {
            var q = this;
            if ("none" === k(this.element).css("display"))
                throw Error("Please use show on visible elements");
            var v = k.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
                k(this.element).trigger(v);
                var F = oa.findShadowRoot(this.element);
                F = k.contains(null !== F ? F : this.element.ownerDocument.documentElement, this.element);
                if (!v.isDefaultPrevented() && F) {
                    v = this.getTipElement();
                    F = oa.getUID(this.constructor.NAME);
                    v.setAttribute("id", F);
                    this.element.setAttribute("aria-describedby", F);
                    this.setContent();
                    this.config.animation && k(v).addClass("fade");
                    F = "function" === typeof this.config.placement ? this.config.placement.call(this, v, this.element) : this.config.placement;
                    F = this._getAttachment(F);
                    this.addAttachmentClass(F);
                    var ba = this._getContainer();
                    k(v).data(this.constructor.DATA_KEY, this);
                    k.contains(this.element.ownerDocument.documentElement, this.tip) || k(v).appendTo(ba);
                    k(this.element).trigger(this.constructor.Event.INSERTED);
                    this._popper = new E(this.element,v,{
                        placement: F,
                        modifiers: {
                            offset: this._getOffset(),
                            flip: {
                                behavior: this.config.fallbackPlacement
                            },
                            arrow: {
                                element: ".arrow"
                            },
                            preventOverflow: {
                                boundariesElement: this.config.boundary
                            }
                        },
                        onCreate: function(ca) {
                            ca.originalPlacement !== ca.placement && q._handlePopperPlacementChange(ca)
                        },
                        onUpdate: function(ca) {
                            return q._handlePopperPlacementChange(ca)
                        }
                    });
                    k(v).addClass("show");
                    if ("ontouchstart"in document.documentElement)
                        k(document.body).children().on("mouseover", null, k.noop);
                    v = function() {
                        q.config.animation && q._fixTransition();
                        var ca = q._hoverState;
                        q._hoverState = null;
                        k(q.element).trigger(q.constructor.Event.SHOWN);
                        "out" === ca && q._leave(null, q)
                    }
                    ;
                    k(this.tip).hasClass("fade") ? (F = oa.getTransitionDurationFromElement(this.tip),
                    k(this.tip).one(oa.TRANSITION_END, v).emulateTransitionEnd(F)) : v()
                }
            }
        }
        ;
        Q.hide = function(q) {
            var v = this
              , F = this.getTipElement()
              , ba = k.Event(this.constructor.Event.HIDE)
              , ca = function() {
                "show" !== v._hoverState && F.parentNode && F.parentNode.removeChild(F);
                v._cleanTipClass();
                v.element.removeAttribute("aria-describedby");
                k(v.element).trigger(v.constructor.Event.HIDDEN);
                null !== v._popper && v._popper.destroy();
                q && q()
            };
            k(this.element).trigger(ba);
            ba.isDefaultPrevented() || (k(F).removeClass("show"),
            "ontouchstart"in document.documentElement && k(document.body).children().off("mouseover", null, k.noop),
            this._activeTrigger.click = !1,
            this._activeTrigger.focus = !1,
            this._activeTrigger.hover = !1,
            k(this.tip).hasClass("fade") ? (ba = oa.getTransitionDurationFromElement(F),
            k(F).one(oa.TRANSITION_END, ca).emulateTransitionEnd(ba)) : ca(),
            this._hoverState = "")
        }
        ;
        Q.update = function() {
            null !== this._popper && this._popper.scheduleUpdate()
        }
        ;
        Q.isWithContent = function() {
            return !!this.getTitle()
        }
        ;
        Q.addAttachmentClass = function(q) {
            k(this.getTipElement()).addClass("bs-tooltip-" + q)
        }
        ;
        Q.getTipElement = function() {
            return this.tip = this.tip || k(this.config.template)[0]
        }
        ;
        Q.setContent = function() {
            var q = this.getTipElement();
            this.setElementContent(k(q.querySelectorAll(".tooltip-inner")), this.getTitle());
            k(q).removeClass("fade show")
        }
        ;
        Q.setElementContent = function(q, v) {
            "object" === typeof v && (v.nodeType || v.jquery) ? this.config.html ? k(v).parent().is(q) || q.empty().append(v) : q.text(k(v).text()) : this.config.html ? (this.config.sanitize && (v = Fa(v, this.config.whiteList, this.config.sanitizeFn)),
            q.html(v)) : q.text(v)
        }
        ;
        Q.getTitle = function() {
            var q = this.element.getAttribute("data-original-title");
            q ||= "function" === typeof this.config.title ? this.config.title.call(this.element) : this.config.title;
            return q
        }
        ;
        Q._getOffset = function() {
            var q = this
              , v = {};
            "function" === typeof this.config.offset ? v.fn = function(F) {
                F.offsets = M({}, F.offsets, q.config.offset(F.offsets, q.element) || {});
                return F
            }
            : v.offset = this.config.offset;
            return v
        }
        ;
        Q._getContainer = function() {
            return !1 === this.config.container ? document.body : oa.isElement(this.config.container) ? k(this.config.container) : k(document).find(this.config.container)
        }
        ;
        Q._getAttachment = function(q) {
            return Ib[q.toUpperCase()]
        }
        ;
        Q._setListeners = function() {
            var q = this;
            this.config.trigger.split(" ").forEach(function(v) {
                if ("click" === v)
                    k(q.element).on(q.constructor.Event.CLICK, q.config.selector, function(ba) {
                        return q.toggle(ba)
                    });
                else if ("manual" !== v) {
                    var F = "hover" === v ? q.constructor.Event.MOUSEENTER : q.constructor.Event.FOCUSIN;
                    v = "hover" === v ? q.constructor.Event.MOUSELEAVE : q.constructor.Event.FOCUSOUT;
                    k(q.element).on(F, q.config.selector, function(ba) {
                        return q._enter(ba)
                    }).on(v, q.config.selector, function(ba) {
                        return q._leave(ba)
                    })
                }
            });
            k(this.element).closest(".modal").on("hide.bs.modal", function() {
                q.element && q.hide()
            });
            this.config.selector ? this.config = M({}, this.config, {
                trigger: "manual",
                selector: ""
            }) : this._fixTitle()
        }
        ;
        Q._fixTitle = function() {
            var q = typeof this.element.getAttribute("data-original-title");
            if (this.element.getAttribute("title") || "string" !== q)
                this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
                this.element.setAttribute("title", "")
        }
        ;
        Q._enter = function(q, v) {
            var F = this.constructor.DATA_KEY;
            v = v || k(q.currentTarget).data(F);
            v || (v = new this.constructor(q.currentTarget,this._getDelegateConfig()),
            k(q.currentTarget).data(F, v));
            q && (v._activeTrigger["focusin" === q.type ? "focus" : "hover"] = !0);
            k(v.getTipElement()).hasClass("show") || "show" === v._hoverState ? v._hoverState = "show" : (clearTimeout(v._timeout),
            v._hoverState = "show",
            v.config.delay && v.config.delay.show ? v._timeout = setTimeout(function() {
                "show" === v._hoverState && v.show()
            }, v.config.delay.show) : v.show())
        }
        ;
        Q._leave = function(q, v) {
            var F = this.constructor.DATA_KEY;
            v = v || k(q.currentTarget).data(F);
            v || (v = new this.constructor(q.currentTarget,this._getDelegateConfig()),
            k(q.currentTarget).data(F, v));
            q && (v._activeTrigger["focusout" === q.type ? "focus" : "hover"] = !1);
            v._isWithActiveTrigger() || (clearTimeout(v._timeout),
            v._hoverState = "out",
            v.config.delay && v.config.delay.hide ? v._timeout = setTimeout(function() {
                "out" === v._hoverState && v.hide()
            }, v.config.delay.hide) : v.hide())
        }
        ;
        Q._isWithActiveTrigger = function() {
            for (var q in this._activeTrigger)
                if (this._activeTrigger[q])
                    return !0;
            return !1
        }
        ;
        Q._getConfig = function(q) {
            var v = k(this.element).data();
            Object.keys(v).forEach(function(F) {
                -1 !== Hb.indexOf(F) && delete v[F]
            });
            q = M({}, this.constructor.Default, v, "object" === typeof q && q ? q : {});
            "number" === typeof q.delay && (q.delay = {
                show: q.delay,
                hide: q.delay
            });
            "number" === typeof q.title && (q.title = q.title.toString());
            "number" === typeof q.content && (q.content = q.content.toString());
            oa.typeCheckConfig("tooltip", q, this.constructor.DefaultType);
            q.sanitize && (q.template = Fa(q.template, q.whiteList, q.sanitizeFn));
            return q
        }
        ;
        Q._getDelegateConfig = function() {
            var q = {};
            if (this.config)
                for (var v in this.config)
                    this.constructor.Default[v] !== this.config[v] && (q[v] = this.config[v]);
            return q
        }
        ;
        Q._cleanTipClass = function() {
            var q = k(this.getTipElement())
              , v = q.attr("class").match(Fb);
            null !== v && v.length && q.removeClass(v.join(""))
        }
        ;
        Q._handlePopperPlacementChange = function(q) {
            this.tip = q.instance.popper;
            this._cleanTipClass();
            this.addAttachmentClass(this._getAttachment(q.placement))
        }
        ;
        Q._fixTransition = function() {
            var q = this.getTipElement()
              , v = this.config.animation;
            null === q.getAttribute("x-placement") && (k(q).removeClass("fade"),
            this.config.animation = !1,
            this.hide(),
            this.show(),
            this.config.animation = v)
        }
        ;
        S._jQueryInterface = function(q) {
            return this.each(function() {
                var v = k(this).data("bs.tooltip")
                  , F = "object" === typeof q && q;
                if (v || !/dispose|hide/.test(q))
                    if (v || (v = new S(this,F),
                    k(this).data("bs.tooltip", v)),
                    "string" === typeof q) {
                        if ("undefined" === typeof v[q])
                            throw new TypeError('No method named "' + q + '"');
                        v[q]()
                    }
            })
        }
        ;
        H(S, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return eb
            }
        }, {
            key: "NAME",
            get: function() {
                return "tooltip"
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return "bs.tooltip"
            }
        }, {
            key: "Event",
            get: function() {
                return Va
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return ".bs.tooltip"
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Cb
            }
        }]);
        return S
    }();
    k.fn.tooltip = fb._jQueryInterface;
    k.fn.tooltip.Constructor = fb;
    k.fn.tooltip.noConflict = function() {
        k.fn.tooltip = vb;
        return fb._jQueryInterface
    }
    ;
    var fa = k.fn.popover
      , ua = RegExp("(^|\\s)bs-popover\\S+", "g")
      , Wa = M({}, fb.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    })
      , Sa = M({}, fb.DefaultType, {
        content: "(string|element|function)"
    })
      , Ga = {
        HIDE: "hide.bs.popover",
        HIDDEN: "hidden.bs.popover",
        SHOW: "show.bs.popover",
        SHOWN: "shown.bs.popover",
        INSERTED: "inserted.bs.popover",
        CLICK: "click.bs.popover",
        FOCUSIN: "focusin.bs.popover",
        FOCUSOUT: "focusout.bs.popover",
        MOUSEENTER: "mouseenter.bs.popover",
        MOUSELEAVE: "mouseleave.bs.popover"
    }
      , n = function(S) {
        function Q() {
            return S.apply(this, arguments) || this
        }
        ja(Q, S);
        var q = Q.prototype;
        q.isWithContent = function() {
            return this.getTitle() || this._getContent()
        }
        ;
        q.addAttachmentClass = function(v) {
            k(this.getTipElement()).addClass("bs-popover-" + v)
        }
        ;
        q.getTipElement = function() {
            return this.tip = this.tip || k(this.config.template)[0]
        }
        ;
        q.setContent = function() {
            var v = k(this.getTipElement());
            this.setElementContent(v.find(".popover-header"), this.getTitle());
            var F = this._getContent();
            "function" === typeof F && (F = F.call(this.element));
            this.setElementContent(v.find(".popover-body"), F);
            v.removeClass("fade show")
        }
        ;
        q._getContent = function() {
            return this.element.getAttribute("data-content") || this.config.content
        }
        ;
        q._cleanTipClass = function() {
            var v = k(this.getTipElement())
              , F = v.attr("class").match(ua);
            null !== F && 0 < F.length && v.removeClass(F.join(""))
        }
        ;
        Q._jQueryInterface = function(v) {
            return this.each(function() {
                var F = k(this).data("bs.popover")
                  , ba = "object" === typeof v ? v : null;
                if (F || !/dispose|hide/.test(v))
                    if (F || (F = new Q(this,ba),
                    k(this).data("bs.popover", F)),
                    "string" === typeof v) {
                        if ("undefined" === typeof F[v])
                            throw new TypeError('No method named "' + v + '"');
                        F[v]()
                    }
            })
        }
        ;
        H(Q, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return Wa
            }
        }, {
            key: "NAME",
            get: function() {
                return "popover"
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return "bs.popover"
            }
        }, {
            key: "Event",
            get: function() {
                return Ga
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return ".bs.popover"
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Sa
            }
        }]);
        return Q
    }(fb);
    k.fn.popover = n._jQueryInterface;
    k.fn.popover.Constructor = n;
    k.fn.popover.noConflict = function() {
        k.fn.popover = fa;
        return n._jQueryInterface
    }
    ;
    var Rb = k.fn.scrollspy
      , ac = {
        offset: 10,
        method: "auto",
        target: ""
    }
      , pc = {
        offset: "number",
        method: "string",
        target: "(string|element)"
    }
      , Wb = function() {
        function S(q, v) {
            var F = this;
            this._element = q;
            this._scrollElement = "BODY" === q.tagName ? window : q;
            this._config = this._getConfig(v);
            this._selector = this._config.target + " .nav-link," + (this._config.target + " .list-group-item,") + (this._config.target + " .dropdown-item");
            this._offsets = [];
            this._targets = [];
            this._activeTarget = null;
            this._scrollHeight = 0;
            k(this._scrollElement).on("scroll.bs.scrollspy", function(ba) {
                return F._process(ba)
            });
            this.refresh();
            this._process()
        }
        var Q = S.prototype;
        Q.refresh = function() {
            var q = this
              , v = this._scrollElement === this._scrollElement.window ? "offset" : "position"
              , F = "auto" === this._config.method ? v : this._config.method
              , ba = "position" === F ? this._getScrollTop() : 0;
            this._offsets = [];
            this._targets = [];
            this._scrollHeight = this._getScrollHeight();
            [].slice.call(document.querySelectorAll(this._selector)).map(function(ca) {
                var va;
                (ca = oa.getSelectorFromElement(ca)) && (va = document.querySelector(ca));
                if (va) {
                    var Gb = va.getBoundingClientRect();
                    if (Gb.width || Gb.height)
                        return [k(va)[F]().top + ba, ca]
                }
                return null
            }).filter(function(ca) {
                return ca
            }).sort(function(ca, va) {
                return ca[0] - va[0]
            }).forEach(function(ca) {
                q._offsets.push(ca[0]);
                q._targets.push(ca[1])
            })
        }
        ;
        Q.dispose = function() {
            k.removeData(this._element, "bs.scrollspy");
            k(this._scrollElement).off(".bs.scrollspy");
            this._scrollHeight = this._activeTarget = this._targets = this._offsets = this._selector = this._config = this._scrollElement = this._element = null
        }
        ;
        Q._getConfig = function(q) {
            q = M({}, ac, "object" === typeof q && q ? q : {});
            if ("string" !== typeof q.target) {
                var v = k(q.target).attr("id");
                v || (v = oa.getUID("scrollspy"),
                k(q.target).attr("id", v));
                q.target = "#" + v
            }
            oa.typeCheckConfig("scrollspy", q, pc);
            return q
        }
        ;
        Q._getScrollTop = function() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }
        ;
        Q._getScrollHeight = function() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }
        ;
        Q._getOffsetHeight = function() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }
        ;
        Q._process = function() {
            var q = this._getScrollTop() + this._config.offset
              , v = this._getScrollHeight()
              , F = this._config.offset + v - this._getOffsetHeight();
            this._scrollHeight !== v && this.refresh();
            if (q >= F)
                q = this._targets[this._targets.length - 1],
                this._activeTarget !== q && this._activate(q);
            else if (this._activeTarget && q < this._offsets[0] && 0 < this._offsets[0])
                this._activeTarget = null,
                this._clear();
            else
                for (v = this._offsets.length; v--; )
                    this._activeTarget !== this._targets[v] && q >= this._offsets[v] && ("undefined" === typeof this._offsets[v + 1] || q < this._offsets[v + 1]) && this._activate(this._targets[v])
        }
        ;
        Q._activate = function(q) {
            this._activeTarget = q;
            this._clear();
            var v = this._selector.split(",").map(function(F) {
                return F + '[data-target="' + q + '"],' + F + '[href="' + q + '"]'
            });
            v = k([].slice.call(document.querySelectorAll(v.join(","))));
            v.hasClass("dropdown-item") ? (v.closest(".dropdown").find(".dropdown-toggle").addClass("active"),
            v.addClass("active")) : (v.addClass("active"),
            v.parents(".nav, .list-group").prev(".nav-link, .list-group-item").addClass("active"),
            v.parents(".nav, .list-group").prev(".nav-item").children(".nav-link").addClass("active"));
            k(this._scrollElement).trigger("activate.bs.scrollspy", {
                relatedTarget: q
            })
        }
        ;
        Q._clear = function() {
            [].slice.call(document.querySelectorAll(this._selector)).filter(function(q) {
                return q.classList.contains("active")
            }).forEach(function(q) {
                return q.classList.remove("active")
            })
        }
        ;
        S._jQueryInterface = function(q) {
            return this.each(function() {
                var v = k(this).data("bs.scrollspy")
                  , F = "object" === typeof q && q;
                v || (v = new S(this,F),
                k(this).data("bs.scrollspy", v));
                if ("string" === typeof q) {
                    if ("undefined" === typeof v[q])
                        throw new TypeError('No method named "' + q + '"');
                    v[q]()
                }
            })
        }
        ;
        H(S, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return ac
            }
        }]);
        return S
    }();
    k(window).on("load.bs.scrollspy.data-api", function() {
        for (var S = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), Q = S.length; Q--; ) {
            var q = k(S[Q]);
            Wb._jQueryInterface.call(q, q.data())
        }
    });
    k.fn.scrollspy = Wb._jQueryInterface;
    k.fn.scrollspy.Constructor = Wb;
    k.fn.scrollspy.noConflict = function() {
        k.fn.scrollspy = Rb;
        return Wb._jQueryInterface
    }
    ;
    var ic = k.fn.tab
      , Lb = function() {
        function S(q) {
            this._element = q
        }
        var Q = S.prototype;
        Q.show = function() {
            var q = this;
            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && k(this._element).hasClass("active") || k(this._element).hasClass("disabled"))) {
                var v, F = k(this._element).closest(".nav, .list-group")[0], ba = oa.getSelectorFromElement(this._element);
                if (F) {
                    var ca = "UL" === F.nodeName || "OL" === F.nodeName ? "> li > .active" : ".active";
                    var va = k.makeArray(k(F).find(ca));
                    va = va[va.length - 1]
                }
                ca = k.Event("hide.bs.tab", {
                    relatedTarget: this._element
                });
                var Gb = k.Event("show.bs.tab", {
                    relatedTarget: va
                });
                va && k(va).trigger(ca);
                k(this._element).trigger(Gb);
                Gb.isDefaultPrevented() || ca.isDefaultPrevented() || (ba && (v = document.querySelector(ba)),
                this._activate(this._element, F),
                F = function() {
                    var Ab = k.Event("hidden.bs.tab", {
                        relatedTarget: q._element
                    })
                      , Yb = k.Event("shown.bs.tab", {
                        relatedTarget: va
                    });
                    k(va).trigger(Ab);
                    k(q._element).trigger(Yb)
                }
                ,
                v ? this._activate(v, v.parentNode, F) : F())
            }
        }
        ;
        Q.dispose = function() {
            k.removeData(this._element, "bs.tab");
            this._element = null
        }
        ;
        Q._activate = function(q, v, F) {
            var ba = this
              , ca = (!v || "UL" !== v.nodeName && "OL" !== v.nodeName ? k(v).children(".active") : k(v).find("> li > .active"))[0]
              , va = F && ca && k(ca).hasClass("fade");
            v = function() {
                return ba._transitionComplete(q, ca, F)
            }
            ;
            ca && va ? (va = oa.getTransitionDurationFromElement(ca),
            k(ca).removeClass("show").one(oa.TRANSITION_END, v).emulateTransitionEnd(va)) : v()
        }
        ;
        Q._transitionComplete = function(q, v, F) {
            if (v) {
                k(v).removeClass("active");
                var ba = k(v.parentNode).find("> .dropdown-menu .active")[0];
                ba && k(ba).removeClass("active");
                "tab" === v.getAttribute("role") && v.setAttribute("aria-selected", !1)
            }
            k(q).addClass("active");
            "tab" === q.getAttribute("role") && q.setAttribute("aria-selected", !0);
            oa.reflow(q);
            q.classList.contains("fade") && q.classList.add("show");
            if (q.parentNode && k(q.parentNode).hasClass("dropdown-menu")) {
                if (v = k(q).closest(".dropdown")[0])
                    v = [].slice.call(v.querySelectorAll(".dropdown-toggle")),
                    k(v).addClass("active");
                q.setAttribute("aria-expanded", !0)
            }
            F && F()
        }
        ;
        S._jQueryInterface = function(q) {
            return this.each(function() {
                var v = k(this)
                  , F = v.data("bs.tab");
                F || (F = new S(this),
                v.data("bs.tab", F));
                if ("string" === typeof q) {
                    if ("undefined" === typeof F[q])
                        throw new TypeError('No method named "' + q + '"');
                    F[q]()
                }
            })
        }
        ;
        H(S, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }]);
        return S
    }();
    k(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function(S) {
        S.preventDefault();
        Lb._jQueryInterface.call(k(this), "show")
    });
    k.fn.tab = Lb._jQueryInterface;
    k.fn.tab.Constructor = Lb;
    k.fn.tab.noConflict = function() {
        k.fn.tab = ic;
        return Lb._jQueryInterface
    }
    ;
    var yb = k.fn.toast
      , Za = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }
      , fc = {
        animation: !0,
        autohide: !0,
        delay: 500
    }
      , Ub = function() {
        function S(q, v) {
            this._element = q;
            this._config = this._getConfig(v);
            this._timeout = null;
            this._setListeners()
        }
        var Q = S.prototype;
        Q.show = function() {
            var q = this;
            k(this._element).trigger("show.bs.toast");
            this._config.animation && this._element.classList.add("fade");
            var v = function() {
                q._element.classList.remove("showing");
                q._element.classList.add("show");
                k(q._element).trigger("shown.bs.toast");
                q._config.autohide && q.hide()
            };
            this._element.classList.remove("hide");
            this._element.classList.add("showing");
            if (this._config.animation) {
                var F = oa.getTransitionDurationFromElement(this._element);
                k(this._element).one(oa.TRANSITION_END, v).emulateTransitionEnd(F)
            } else
                v()
        }
        ;
        Q.hide = function(q) {
            var v = this;
            this._element.classList.contains("show") && (k(this._element).trigger("hide.bs.toast"),
            q ? this._close() : this._timeout = setTimeout(function() {
                v._close()
            }, this._config.delay))
        }
        ;
        Q.dispose = function() {
            clearTimeout(this._timeout);
            this._timeout = null;
            this._element.classList.contains("show") && this._element.classList.remove("show");
            k(this._element).off("click.dismiss.bs.toast");
            k.removeData(this._element, "bs.toast");
            this._config = this._element = null
        }
        ;
        Q._getConfig = function(q) {
            q = M({}, fc, k(this._element).data(), "object" === typeof q && q ? q : {});
            oa.typeCheckConfig("toast", q, this.constructor.DefaultType);
            return q
        }
        ;
        Q._setListeners = function() {
            var q = this;
            k(this._element).on("click.dismiss.bs.toast", '[data-dismiss="toast"]', function() {
                return q.hide(!0)
            })
        }
        ;
        Q._close = function() {
            var q = this
              , v = function() {
                q._element.classList.add("hide");
                k(q._element).trigger("hidden.bs.toast")
            };
            this._element.classList.remove("show");
            if (this._config.animation) {
                var F = oa.getTransitionDurationFromElement(this._element);
                k(this._element).one(oa.TRANSITION_END, v).emulateTransitionEnd(F)
            } else
                v()
        }
        ;
        S._jQueryInterface = function(q) {
            return this.each(function() {
                var v = k(this)
                  , F = v.data("bs.toast")
                  , ba = "object" === typeof q && q;
                F || (F = new S(this,ba),
                v.data("bs.toast", F));
                if ("string" === typeof q) {
                    if ("undefined" === typeof F[q])
                        throw new TypeError('No method named "' + q + '"');
                    F[q](this)
                }
            })
        }
        ;
        H(S, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Za
            }
        }, {
            key: "Default",
            get: function() {
                return fc
            }
        }]);
        return S
    }();
    k.fn.toast = Ub._jQueryInterface;
    k.fn.toast.Constructor = Ub;
    k.fn.toast.noConflict = function() {
        k.fn.toast = yb;
        return Ub._jQueryInterface
    }
    ;
    (function() {
        if ("undefined" === typeof k)
            throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var S = k.fn.jquery.split(" ")[0].split(".");
        if (2 > S[0] && 9 > S[1] || 1 === S[0] && 9 === S[1] && 1 > S[2] || 4 <= S[0])
            throw Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
    }
    )();
    d.Util = oa;
    d.Alert = g;
    d.Button = y;
    d.Carousel = pa;
    d.Collapse = aa;
    d.Dropdown = na;
    d.Modal = jb;
    d.Popover = n;
    d.Scrollspy = Wb;
    d.Tab = Lb;
    d.Toast = Ub;
    d.Tooltip = fb;
    Object.defineProperty(d, "__esModule", {
        value: !0
    })
});
/*
 jQuery UI - v1.12.1 - 2019-11-27
 http://jqueryui.com
 Includes: widget.js, position.js, keycode.js, unique-id.js, widgets/autocomplete.js, widgets/datepicker.js, widgets/menu.js, widgets/mouse.js, widgets/slider.js, widgets/tooltip.js
 Copyright jQuery Foundation and other contributors; Licensed MIT  jQuery UI Widget 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Position 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license

 http://api.jqueryui.com/position/
 jQuery UI Keycode 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Unique ID 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Menu 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Autocomplete 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Datepicker 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Mouse 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Slider 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Tooltip 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
(function(d) {
    "function" === typeof define && define.amd ? define(["jquery"], d) : d(jQuery)
}
)(function(d) {
    function k(b) {
        for (var g; b.length && b[0] !== document; ) {
            g = b.css("position");
            if ("absolute" === g || "relative" === g || "fixed" === g)
                if (g = parseInt(b.css("zIndex"), 10),
                !isNaN(g) && 0 !== g)
                    return g;
            b = b.parent()
        }
        return 0
    }
    function E() {
        this._curInst = null;
        this._keyEvent = !1;
        this._disabledInputs = [];
        this._inDialog = this._datepickerShowing = !1;
        this._mainDivId = "ui-datepicker-div";
        this._inlineClass = "ui-datepicker-inline";
        this._appendClass = "ui-datepicker-append";
        this._triggerClass = "ui-datepicker-trigger";
        this._dialogClass = "ui-datepicker-dialog";
        this._disableClass = "ui-datepicker-disabled";
        this._unselectableClass = "ui-datepicker-unselectable";
        this._currentClass = "ui-datepicker-current-day";
        this._dayOverClass = "ui-datepicker-days-cell-over";
        this.regional = [];
        this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: "January February March April May June July August September October November December".split(" "),
            monthNamesShort: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
            dayNames: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
            dayNamesShort: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
            dayNamesMin: "Su Mo Tu We Th Fr Sa".split(" "),
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        };
        this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        };
        d.extend(this._defaults, this.regional[""]);
        this.regional.en = d.extend(!0, {}, this.regional[""]);
        this.regional["en-US"] = d.extend(!0, {}, this.regional.en);
        this.dpDiv = R(d("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }
    function R(b) {
        return b.on("mouseout", "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a", function() {
            d(this).removeClass("ui-state-hover");
            -1 !== this.className.indexOf("ui-datepicker-prev") && d(this).removeClass("ui-datepicker-prev-hover");
            -1 !== this.className.indexOf("ui-datepicker-next") && d(this).removeClass("ui-datepicker-next-hover")
        }).on("mouseover", "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a", H)
    }
    function H() {
        d.datepicker._isDisabledDatepicker(Fa.inline ? Fa.dpDiv.parent()[0] : Fa.input[0]) || (d(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),
        d(this).addClass("ui-state-hover"),
        -1 !== this.className.indexOf("ui-datepicker-prev") && d(this).addClass("ui-datepicker-prev-hover"),
        -1 !== this.className.indexOf("ui-datepicker-next") && d(this).addClass("ui-datepicker-next-hover"))
    }
    function M(b, g) {
        d.extend(b, g);
        for (var u in g)
            null == g[u] && (b[u] = g[u]);
        return b
    }
    d.ui = d.ui || {};
    d.ui.version = "1.12.1";
    var ja = 0
      , Ea = Array.prototype.slice;
    d.cleanData = function(b) {
        return function(g) {
            var u, y, I;
            for (I = 0; null != (y = g[I]); I++)
                try {
                    (u = d._data(y, "events")) && u.remove && d(y).triggerHandler("remove")
                } catch (T) {}
            b(g)
        }
    }(d.cleanData);
    d.widget = function(b, g, u) {
        var y = {}
          , I = b.split(".")[0];
        b = b.split(".")[1];
        var T = I + "-" + b;
        u || (u = g,
        g = d.Widget);
        d.isArray(u) && (u = d.extend.apply(null, [{}].concat(u)));
        d.expr[":"][T.toLowerCase()] = function(qa) {
            return !!d.data(qa, T)
        }
        ;
        d[I] = d[I] || {};
        var P = d[I][b];
        var ia = d[I][b] = function(qa, ha) {
            if (!this._createWidget)
                return new ia(qa,ha);
            arguments.length && this._createWidget(qa, ha)
        }
        ;
        d.extend(ia, P, {
            version: u.version,
            _proto: d.extend({}, u),
            _childConstructors: []
        });
        var pa = new g;
        pa.options = d.widget.extend({}, pa.options);
        d.each(u, function(qa, ha) {
            d.isFunction(ha) ? y[qa] = function() {
                function V() {
                    return g.prototype[qa].apply(this, arguments)
                }
                function aa(ma) {
                    return g.prototype[qa].apply(this, ma)
                }
                return function() {
                    var ma = this._super
                      , Ja = this._superApply;
                    this._super = V;
                    this._superApply = aa;
                    var Ka = ha.apply(this, arguments);
                    this._super = ma;
                    this._superApply = Ja;
                    return Ka
                }
            }() : y[qa] = ha
        });
        ia.prototype = d.widget.extend(pa, {
            widgetEventPrefix: P ? pa.widgetEventPrefix || b : b
        }, y, {
            constructor: ia,
            namespace: I,
            widgetName: b,
            widgetFullName: T
        });
        P ? (d.each(P._childConstructors, function(qa, ha) {
            qa = ha.prototype;
            d.widget(qa.namespace + "." + qa.widgetName, ia, ha._proto)
        }),
        delete P._childConstructors) : g._childConstructors.push(ia);
        d.widget.bridge(b, ia);
        return ia
    }
    ;
    d.widget.extend = function(b) {
        for (var g = Ea.call(arguments, 1), u = 0, y = g.length, I, T; u < y; u++)
            for (I in g[u])
                T = g[u][I],
                g[u].hasOwnProperty(I) && void 0 !== T && (d.isPlainObject(T) ? b[I] = d.isPlainObject(b[I]) ? d.widget.extend({}, b[I], T) : d.widget.extend({}, T) : b[I] = T);
        return b
    }
    ;
    d.widget.bridge = function(b, g) {
        var u = g.prototype.widgetFullName || b;
        d.fn[b] = function(y) {
            var I = "string" === typeof y
              , T = Ea.call(arguments, 1)
              , P = this;
            I ? this.length || "instance" !== y ? this.each(function() {
                var ia = d.data(this, u);
                if ("instance" === y)
                    return P = ia,
                    !1;
                if (!ia)
                    return d.error("cannot call methods on " + b + " prior to initialization; attempted to call method '" + y + "'");
                if (!d.isFunction(ia[y]) || "_" === y.charAt(0))
                    return d.error("no such method '" + y + "' for " + b + " widget instance");
                var pa = ia[y].apply(ia, T);
                if (pa !== ia && void 0 !== pa)
                    return P = pa && pa.jquery ? P.pushStack(pa.get()) : pa,
                    !1
            }) : P = void 0 : (T.length && (y = d.widget.extend.apply(null, [y].concat(T))),
            this.each(function() {
                var ia = d.data(this, u);
                ia ? (ia.option(y || {}),
                ia._init && ia._init()) : d.data(this, u, new g(y,this))
            }));
            return P
        }
    }
    ;
    d.Widget = function() {}
    ;
    d.Widget._childConstructors = [];
    d.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            classes: {},
            disabled: !1,
            create: null
        },
        _createWidget: function(b, g) {
            g = d(g || this.defaultElement || this)[0];
            this.element = d(g);
            this.uuid = ja++;
            this.eventNamespace = "." + this.widgetName + this.uuid;
            this.bindings = d();
            this.hoverable = d();
            this.focusable = d();
            this.classesElementLookup = {};
            g !== this && (d.data(g, this.widgetFullName, this),
            this._on(!0, this.element, {
                remove: function(u) {
                    u.target === g && this.destroy()
                }
            }),
            this.document = d(g.style ? g.ownerDocument : g.document || g),
            this.window = d(this.document[0].defaultView || this.document[0].parentWindow));
            this.options = d.widget.extend({}, this.options, this._getCreateOptions(), b);
            this._create();
            this.options.disabled && this._setOptionDisabled(this.options.disabled);
            this._trigger("create", null, this._getCreateEventData());
            this._init()
        },
        _getCreateOptions: function() {
            return {}
        },
        _getCreateEventData: d.noop,
        _create: d.noop,
        _init: d.noop,
        destroy: function() {
            var b = this;
            this._destroy();
            d.each(this.classesElementLookup, function(g, u) {
                b._removeClass(u, g)
            });
            this.element.off(this.eventNamespace).removeData(this.widgetFullName);
            this.widget().off(this.eventNamespace).removeAttr("aria-disabled");
            this.bindings.off(this.eventNamespace)
        },
        _destroy: d.noop,
        widget: function() {
            return this.element
        },
        option: function(b, g) {
            var u = b, y;
            if (0 === arguments.length)
                return d.widget.extend({}, this.options);
            if ("string" === typeof b) {
                u = {};
                var I = b.split(".");
                b = I.shift();
                if (I.length) {
                    var T = u[b] = d.widget.extend({}, this.options[b]);
                    for (y = 0; y < I.length - 1; y++)
                        T[I[y]] = T[I[y]] || {},
                        T = T[I[y]];
                    b = I.pop();
                    if (1 === arguments.length)
                        return void 0 === T[b] ? null : T[b];
                    T[b] = g
                } else {
                    if (1 === arguments.length)
                        return void 0 === this.options[b] ? null : this.options[b];
                    u[b] = g
                }
            }
            this._setOptions(u);
            return this
        },
        _setOptions: function(b) {
            for (var g in b)
                this._setOption(g, b[g]);
            return this
        },
        _setOption: function(b, g) {
            "classes" === b && this._setOptionClasses(g);
            this.options[b] = g;
            "disabled" === b && this._setOptionDisabled(g);
            return this
        },
        _setOptionClasses: function(b) {
            var g;
            for (g in b) {
                var u = this.classesElementLookup[g];
                if (b[g] !== this.options.classes[g] && u && u.length) {
                    var y = d(u.get());
                    this._removeClass(u, g);
                    y.addClass(this._classes({
                        element: y,
                        keys: g,
                        classes: b,
                        add: !0
                    }))
                }
            }
        },
        _setOptionDisabled: function(b) {
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!b);
            b && (this._removeClass(this.hoverable, null, "ui-state-hover"),
            this._removeClass(this.focusable, null, "ui-state-focus"))
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _classes: function(b) {
            function g(I, T) {
                var P;
                for (P = 0; P < I.length; P++) {
                    var ia = y.classesElementLookup[I[P]] || d();
                    ia = b.add ? d(d.unique(ia.get().concat(b.element.get()))) : d(ia.not(b.element).get());
                    y.classesElementLookup[I[P]] = ia;
                    u.push(I[P]);
                    T && b.classes[I[P]] && u.push(b.classes[I[P]])
                }
            }
            var u = []
              , y = this;
            b = d.extend({
                element: this.element,
                classes: this.options.classes || {}
            }, b);
            this._on(b.element, {
                remove: "_untrackClassesElement"
            });
            b.keys && g(b.keys.match(/\S+/g) || [], !0);
            b.extra && g(b.extra.match(/\S+/g) || []);
            return u.join(" ")
        },
        _untrackClassesElement: function(b) {
            var g = this;
            d.each(g.classesElementLookup, function(u, y) {
                -1 !== d.inArray(b.target, y) && (g.classesElementLookup[u] = d(y.not(b.target).get()))
            })
        },
        _removeClass: function(b, g, u) {
            return this._toggleClass(b, g, u, !1)
        },
        _addClass: function(b, g, u) {
            return this._toggleClass(b, g, u, !0)
        },
        _toggleClass: function(b, g, u, y) {
            y = "boolean" === typeof y ? y : u;
            var I = "string" === typeof b || null === b;
            b = {
                extra: I ? g : u,
                keys: I ? b : g,
                element: I ? this.element : b,
                add: y
            };
            b.element.toggleClass(this._classes(b), y);
            return this
        },
        _on: function(b, g, u) {
            var y, I = this;
            "boolean" !== typeof b && (u = g,
            g = b,
            b = !1);
            u ? (g = y = d(g),
            this.bindings = this.bindings.add(g)) : (u = g,
            g = this.element,
            y = this.widget());
            d.each(u, function(T, P) {
                function ia() {
                    if (b || !0 !== I.options.disabled && !d(this).hasClass("ui-state-disabled"))
                        return ("string" === typeof P ? I[P] : P).apply(I, arguments)
                }
                "string" !== typeof P && (ia.guid = P.guid = P.guid || ia.guid || d.guid++);
                var pa = T.match(/^([\w:-]*)\s*(.*)$/);
                T = pa[1] + I.eventNamespace;
                if (pa = pa[2])
                    y.on(T, pa, ia);
                else
                    g.on(T, ia)
            })
        },
        _off: function(b, g) {
            g = (g || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
            b.off(g).off(g);
            this.bindings = d(this.bindings.not(b).get());
            this.focusable = d(this.focusable.not(b).get());
            this.hoverable = d(this.hoverable.not(b).get())
        },
        _delay: function(b, g) {
            var u = this;
            return setTimeout(function() {
                return ("string" === typeof b ? u[b] : b).apply(u, arguments)
            }, g || 0)
        },
        _hoverable: function(b) {
            this.hoverable = this.hoverable.add(b);
            this._on(b, {
                mouseenter: function(g) {
                    this._addClass(d(g.currentTarget), null, "ui-state-hover")
                },
                mouseleave: function(g) {
                    this._removeClass(d(g.currentTarget), null, "ui-state-hover")
                }
            })
        },
        _focusable: function(b) {
            this.focusable = this.focusable.add(b);
            this._on(b, {
                focusin: function(g) {
                    this._addClass(d(g.currentTarget), null, "ui-state-focus")
                },
                focusout: function(g) {
                    this._removeClass(d(g.currentTarget), null, "ui-state-focus")
                }
            })
        },
        _trigger: function(b, g, u) {
            var y, I = this.options[b];
            u = u || {};
            g = d.Event(g);
            g.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase();
            g.target = this.element[0];
            if (b = g.originalEvent)
                for (y in b)
                    y in g || (g[y] = b[y]);
            this.element.trigger(g, u);
            return !(d.isFunction(I) && !1 === I.apply(this.element[0], [g].concat(u)) || g.isDefaultPrevented())
        }
    };
    d.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(b, g) {
        d.Widget.prototype["_" + b] = function(u, y, I) {
            "string" === typeof y && (y = {
                effect: y
            });
            var T = y ? !0 === y || "number" === typeof y ? g : y.effect || g : b;
            y = y || {};
            "number" === typeof y && (y = {
                duration: y
            });
            var P = !d.isEmptyObject(y);
            y.complete = I;
            y.delay && u.delay(y.delay);
            if (P && d.effects && d.effects.effect[T])
                u[b](y);
            else if (T !== b && u[T])
                u[T](y.duration, y.easing, I);
            else
                u.queue(function(ia) {
                    d(this)[b]();
                    I && I.call(u[0]);
                    ia()
                })
        }
    });
    (function() {
        function b(V, aa, ma) {
            return [parseFloat(V[0]) * (qa.test(V[0]) ? aa / 100 : 1), parseFloat(V[1]) * (qa.test(V[1]) ? ma / 100 : 1)]
        }
        function g(V) {
            var aa = V[0];
            return 9 === aa.nodeType ? {
                width: V.width(),
                height: V.height(),
                offset: {
                    top: 0,
                    left: 0
                }
            } : d.isWindow(aa) ? {
                width: V.width(),
                height: V.height(),
                offset: {
                    top: V.scrollTop(),
                    left: V.scrollLeft()
                }
            } : aa.preventDefault ? {
                width: 0,
                height: 0,
                offset: {
                    top: aa.pageY,
                    left: aa.pageX
                }
            } : {
                width: V.outerWidth(),
                height: V.outerHeight(),
                offset: V.offset()
            }
        }
        var u, y = Math.max, I = Math.abs, T = /left|center|right/, P = /top|center|bottom/, ia = /[\+\-]\d+(\.[\d]+)?%?/, pa = /^\w+/, qa = /%$/, ha = d.fn.position;
        d.position = {
            scrollbarWidth: function() {
                if (void 0 !== u)
                    return u;
                var V = d("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>");
                var aa = V.children()[0];
                d("body").append(V);
                var ma = aa.offsetWidth;
                V.css("overflow", "scroll");
                aa = aa.offsetWidth;
                ma === aa && (aa = V[0].clientWidth);
                V.remove();
                return u = ma - aa
            },
            getScrollInfo: function(V) {
                var aa = V.isWindow || V.isDocument ? "" : V.element.css("overflow-x")
                  , ma = V.isWindow || V.isDocument ? "" : V.element.css("overflow-y");
                aa = "scroll" === aa || "auto" === aa && V.width < V.element[0].scrollWidth;
                return {
                    width: "scroll" === ma || "auto" === ma && V.height < V.element[0].scrollHeight ? d.position.scrollbarWidth() : 0,
                    height: aa ? d.position.scrollbarWidth() : 0
                }
            },
            getWithinInfo: function(V) {
                var aa = d(V || window)
                  , ma = d.isWindow(aa[0])
                  , Ja = !!aa[0] && 9 === aa[0].nodeType;
                return {
                    element: aa,
                    isWindow: ma,
                    isDocument: Ja,
                    offset: ma || Ja ? {
                        left: 0,
                        top: 0
                    } : d(V).offset(),
                    scrollLeft: aa.scrollLeft(),
                    scrollTop: aa.scrollTop(),
                    width: aa.outerWidth(),
                    height: aa.outerHeight()
                }
            }
        };
        d.fn.position = function(V) {
            if (!V || !V.of)
                return ha.apply(this, arguments);
            V = d.extend({}, V);
            var aa = d(V.of)
              , ma = d.position.getWithinInfo(V.within)
              , Ja = d.position.getScrollInfo(ma)
              , Ka = (V.collision || "flip").split(" ")
              , Na = {};
            var na = g(aa);
            aa[0].preventDefault && (V.at = "left top");
            var Ha = na.width;
            var xa = na.height;
            var Oa = na.offset;
            var jb = d.extend({}, Oa);
            d.each(["my", "at"], function() {
                var Ua = (V[this] || "").split(" ");
                1 === Ua.length && (Ua = T.test(Ua[0]) ? Ua.concat(["center"]) : P.test(Ua[0]) ? ["center"].concat(Ua) : ["center", "center"]);
                Ua[0] = T.test(Ua[0]) ? Ua[0] : "center";
                Ua[1] = P.test(Ua[1]) ? Ua[1] : "center";
                var gb = ia.exec(Ua[0]);
                var vb = ia.exec(Ua[1]);
                Na[this] = [gb ? gb[0] : 0, vb ? vb[0] : 0];
                V[this] = [pa.exec(Ua[0])[0], pa.exec(Ua[1])[0]]
            });
            1 === Ka.length && (Ka[1] = Ka[0]);
            "right" === V.at[0] ? jb.left += Ha : "center" === V.at[0] && (jb.left += Ha / 2);
            "bottom" === V.at[1] ? jb.top += xa : "center" === V.at[1] && (jb.top += xa / 2);
            var lb = b(Na.at, Ha, xa);
            jb.left += lb[0];
            jb.top += lb[1];
            return this.each(function() {
                var Ua, gb = d(this), vb = gb.outerWidth(), Fb = gb.outerHeight(), Hb = parseInt(d.css(this, "marginLeft"), 10) || 0, Cb = parseInt(d.css(this, "marginTop"), 10) || 0, Ib = vb + Hb + (parseInt(d.css(this, "marginRight"), 10) || 0) + Ja.width, eb = Fb + Cb + (parseInt(d.css(this, "marginBottom"), 10) || 0) + Ja.height, Va = d.extend({}, jb), fb = b(Na.my, gb.outerWidth(), gb.outerHeight());
                "right" === V.my[0] ? Va.left -= vb : "center" === V.my[0] && (Va.left -= vb / 2);
                "bottom" === V.my[1] ? Va.top -= Fb : "center" === V.my[1] && (Va.top -= Fb / 2);
                Va.left += fb[0];
                Va.top += fb[1];
                var fa = {
                    marginLeft: Hb,
                    marginTop: Cb
                };
                d.each(["left", "top"], function(ua, Wa) {
                    if (d.ui.position[Ka[ua]])
                        d.ui.position[Ka[ua]][Wa](Va, {
                            targetWidth: Ha,
                            targetHeight: xa,
                            elemWidth: vb,
                            elemHeight: Fb,
                            collisionPosition: fa,
                            collisionWidth: Ib,
                            collisionHeight: eb,
                            offset: [lb[0] + fb[0], lb[1] + fb[1]],
                            my: V.my,
                            at: V.at,
                            within: ma,
                            elem: gb
                        })
                });
                V.using && (Ua = function(ua) {
                    var Wa = Oa.left - Va.left
                      , Sa = Wa + Ha - vb
                      , Ga = Oa.top - Va.top
                      , n = Ga + xa - Fb
                      , Rb = {
                        target: {
                            element: aa,
                            left: Oa.left,
                            top: Oa.top,
                            width: Ha,
                            height: xa
                        },
                        element: {
                            element: gb,
                            left: Va.left,
                            top: Va.top,
                            width: vb,
                            height: Fb
                        },
                        horizontal: 0 > Sa ? "left" : 0 < Wa ? "right" : "center",
                        vertical: 0 > n ? "top" : 0 < Ga ? "bottom" : "middle"
                    };
                    Ha < vb && I(Wa + Sa) < Ha && (Rb.horizontal = "center");
                    xa < Fb && I(Ga + n) < xa && (Rb.vertical = "middle");
                    y(I(Wa), I(Sa)) > y(I(Ga), I(n)) ? Rb.important = "horizontal" : Rb.important = "vertical";
                    V.using.call(this, ua, Rb)
                }
                );
                gb.offset(d.extend(Va, {
                    using: Ua
                }))
            })
        }
        ;
        d.ui.position = {
            fit: {
                left: function(V, aa) {
                    var ma = aa.within
                      , Ja = ma.isWindow ? ma.scrollLeft : ma.offset.left
                      , Ka = ma.width
                      , Na = V.left - aa.collisionPosition.marginLeft;
                    ma = Ja - Na;
                    var na = Na + aa.collisionWidth - Ka - Ja;
                    aa.collisionWidth > Ka ? 0 < ma && 0 >= na ? (aa = V.left + ma + aa.collisionWidth - Ka - Ja,
                    V.left += ma - aa) : V.left = 0 < na && 0 >= ma ? Ja : ma > na ? Ja + Ka - aa.collisionWidth : Ja : V.left = 0 < ma ? V.left + ma : 0 < na ? V.left - na : y(V.left - Na, V.left)
                },
                top: function(V, aa) {
                    var ma = aa.within
                      , Ja = ma.isWindow ? ma.scrollTop : ma.offset.top
                      , Ka = aa.within.height
                      , Na = V.top - aa.collisionPosition.marginTop;
                    ma = Ja - Na;
                    var na = Na + aa.collisionHeight - Ka - Ja;
                    aa.collisionHeight > Ka ? 0 < ma && 0 >= na ? (aa = V.top + ma + aa.collisionHeight - Ka - Ja,
                    V.top += ma - aa) : V.top = 0 < na && 0 >= ma ? Ja : ma > na ? Ja + Ka - aa.collisionHeight : Ja : V.top = 0 < ma ? V.top + ma : 0 < na ? V.top - na : y(V.top - Na, V.top)
                }
            },
            flip: {
                left: function(V, aa) {
                    var ma = aa.within
                      , Ja = ma.offset.left + ma.scrollLeft
                      , Ka = ma.width
                      , Na = ma.isWindow ? ma.scrollLeft : ma.offset.left
                      , na = V.left - aa.collisionPosition.marginLeft;
                    ma = na - Na;
                    var Ha = na + aa.collisionWidth - Ka - Na;
                    na = "left" === aa.my[0] ? -aa.elemWidth : "right" === aa.my[0] ? aa.elemWidth : 0;
                    var xa = "left" === aa.at[0] ? aa.targetWidth : "right" === aa.at[0] ? -aa.targetWidth : 0
                      , Oa = -2 * aa.offset[0];
                    if (0 > ma) {
                        if (aa = V.left + na + xa + Oa + aa.collisionWidth - Ka - Ja,
                        0 > aa || aa < I(ma))
                            V.left += na + xa + Oa
                    } else
                        0 < Ha && (aa = V.left - aa.collisionPosition.marginLeft + na + xa + Oa - Na,
                        0 < aa || I(aa) < Ha) && (V.left += na + xa + Oa)
                },
                top: function(V, aa) {
                    var ma = aa.within
                      , Ja = ma.offset.top + ma.scrollTop
                      , Ka = ma.height
                      , Na = ma.isWindow ? ma.scrollTop : ma.offset.top
                      , na = V.top - aa.collisionPosition.marginTop;
                    ma = na - Na;
                    var Ha = na + aa.collisionHeight - Ka - Na;
                    na = "top" === aa.my[1] ? -aa.elemHeight : "bottom" === aa.my[1] ? aa.elemHeight : 0;
                    var xa = "top" === aa.at[1] ? aa.targetHeight : "bottom" === aa.at[1] ? -aa.targetHeight : 0
                      , Oa = -2 * aa.offset[1];
                    if (0 > ma) {
                        if (aa = V.top + na + xa + Oa + aa.collisionHeight - Ka - Ja,
                        0 > aa || aa < I(ma))
                            V.top += na + xa + Oa
                    } else
                        0 < Ha && (aa = V.top - aa.collisionPosition.marginTop + na + xa + Oa - Na,
                        0 < aa || I(aa) < Ha) && (V.top += na + xa + Oa)
                }
            },
            flipfit: {
                left: function() {
                    d.ui.position.flip.left.apply(this, arguments);
                    d.ui.position.fit.left.apply(this, arguments)
                },
                top: function() {
                    d.ui.position.flip.top.apply(this, arguments);
                    d.ui.position.fit.top.apply(this, arguments)
                }
            }
        }
    }
    )();
    d.ui.keyCode = {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
    };
    d.fn.extend({
        uniqueId: function() {
            var b = 0;
            return function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++b)
                })
            }
        }(),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && d(this).removeAttr("id")
            })
        }
    });
    d.ui.safeActiveElement = function(b) {
        try {
            var g = b.activeElement
        } catch (u) {
            g = b.body
        }
        g || (g = b.body);
        g.nodeName || (g = b.body);
        return g
    }
    ;
    d.widget("ui.menu", {
        version: "1.12.1",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-caret-1-e"
            },
            items: "> *",
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element;
            this.mouseHandled = !1;
            this.element.uniqueId().attr({
                role: this.options.role,
                tabIndex: 0
            });
            this._addClass("ui-menu", "ui-widget ui-widget-content");
            this._on({
                "mousedown .ui-menu-item": function(b) {
                    b.preventDefault()
                },
                "click .ui-menu-item": function(b) {
                    var g = d(b.target)
                      , u = d(d.ui.safeActiveElement(this.document[0]));
                    !this.mouseHandled && g.not(".ui-state-disabled").length && (this.select(b),
                    b.isPropagationStopped() || (this.mouseHandled = !0),
                    g.has(".ui-menu").length ? this.expand(b) : !this.element.is(":focus") && u.closest(".ui-menu").length && (this.element.trigger("focus", [!0]),
                    this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                },
                "mouseenter .ui-menu-item": function(b) {
                    if (!this.previousFilter) {
                        var g = d(b.target).closest(".ui-menu-item")
                          , u = d(b.currentTarget);
                        g[0] === u[0] && (this._removeClass(u.siblings().children(".ui-state-active"), null, "ui-state-active"),
                        this.focus(b, u))
                    }
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(b, g) {
                    var u = this.active || this.element.find(this.options.items).eq(0);
                    g || this.focus(b, u)
                },
                blur: function(b) {
                    this._delay(function() {
                        d.contains(this.element[0], d.ui.safeActiveElement(this.document[0])) || this.collapseAll(b)
                    })
                },
                keydown: "_keydown"
            });
            this.refresh();
            this._on(this.document, {
                click: function(b) {
                    this._closeOnDocumentClick(b) && this.collapseAll(b);
                    this.mouseHandled = !1
                }
            })
        },
        _destroy: function() {
            var b = this.element.find(".ui-menu-item").removeAttr("role aria-disabled").children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show();
            b.children().each(function() {
                var g = d(this);
                g.data("ui-menu-submenu-caret") && g.remove()
            })
        },
        _keydown: function(b) {
            var g = !0;
            switch (b.keyCode) {
            case d.ui.keyCode.PAGE_UP:
                this.previousPage(b);
                break;
            case d.ui.keyCode.PAGE_DOWN:
                this.nextPage(b);
                break;
            case d.ui.keyCode.HOME:
                this._move("first", "first", b);
                break;
            case d.ui.keyCode.END:
                this._move("last", "last", b);
                break;
            case d.ui.keyCode.UP:
                this.previous(b);
                break;
            case d.ui.keyCode.DOWN:
                this.next(b);
                break;
            case d.ui.keyCode.LEFT:
                this.collapse(b);
                break;
            case d.ui.keyCode.RIGHT:
                this.active && !this.active.is(".ui-state-disabled") && this.expand(b);
                break;
            case d.ui.keyCode.ENTER:
            case d.ui.keyCode.SPACE:
                this._activate(b);
                break;
            case d.ui.keyCode.ESCAPE:
                this.collapse(b);
                break;
            default:
                g = !1;
                var u = this.previousFilter || "";
                var y = !1;
                var I = 96 <= b.keyCode && 105 >= b.keyCode ? (b.keyCode - 96).toString() : String.fromCharCode(b.keyCode);
                clearTimeout(this.filterTimer);
                I === u ? y = !0 : I = u + I;
                u = this._filterMenuItems(I);
                u = y && -1 !== u.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : u;
                u.length || (I = String.fromCharCode(b.keyCode),
                u = this._filterMenuItems(I));
                u.length ? (this.focus(b, u),
                this.previousFilter = I,
                this.filterTimer = this._delay(function() {
                    delete this.previousFilter
                }, 1E3)) : delete this.previousFilter
            }
            g && b.preventDefault()
        },
        _activate: function(b) {
            this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(b) : this.select(b))
        },
        refresh: function() {
            var b = this
              , g = this.options.icons.submenu;
            var u = this.element.find(this.options.menus);
            this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length);
            var y = u.filter(":not(.ui-menu)").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var T = d(this)
                  , P = T.prev()
                  , ia = d("<span>").data("ui-menu-submenu-caret", !0);
                b._addClass(ia, "ui-menu-icon", "ui-icon " + g);
                P.attr("aria-haspopup", "true").prepend(ia);
                T.attr("aria-labelledby", P.attr("id"))
            });
            this._addClass(y, "ui-menu", "ui-widget ui-widget-content ui-front");
            y = u.add(this.element).find(this.options.items);
            y.not(".ui-menu-item").each(function() {
                var T = d(this);
                b._isDivider(T) && b._addClass(T, "ui-menu-divider", "ui-widget-content")
            });
            u = y.not(".ui-menu-item, .ui-menu-divider");
            var I = u.children().not(".ui-menu").uniqueId().attr({
                tabIndex: -1,
                role: this._itemRole()
            });
            this._addClass(u, "ui-menu-item")._addClass(I, "ui-menu-item-wrapper");
            y.filter(".ui-state-disabled").attr("aria-disabled", "true");
            this.active && !d.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role]
        },
        _setOption: function(b, g) {
            if ("icons" === b) {
                var u = this.element.find(".ui-menu-icon");
                this._removeClass(u, null, this.options.icons.submenu)._addClass(u, null, g.submenu)
            }
            this._super(b, g)
        },
        _setOptionDisabled: function(b) {
            this._super(b);
            this.element.attr("aria-disabled", String(b));
            this._toggleClass(null, "ui-state-disabled", !!b)
        },
        focus: function(b, g) {
            this.blur(b, b && "focus" === b.type);
            this._scrollIntoView(g);
            this.active = g.first();
            var u = this.active.children(".ui-menu-item-wrapper");
            this._addClass(u, null, "ui-state-active");
            this.options.role && this.element.attr("aria-activedescendant", u.attr("id"));
            u = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper");
            this._addClass(u, null, "ui-state-active");
            b && "keydown" === b.type ? this._close() : this.timer = this._delay(function() {
                this._close()
            }, this.delay);
            u = g.children(".ui-menu");
            u.length && b && /^mouse/.test(b.type) && this._startOpening(u);
            this.activeMenu = g.parent();
            this._trigger("focus", b, {
                item: g
            })
        },
        _scrollIntoView: function(b) {
            if (this._hasScroll()) {
                var g = parseFloat(d.css(this.activeMenu[0], "borderTopWidth")) || 0;
                var u = parseFloat(d.css(this.activeMenu[0], "paddingTop")) || 0;
                g = b.offset().top - this.activeMenu.offset().top - g - u;
                u = this.activeMenu.scrollTop();
                var y = this.activeMenu.height();
                b = b.outerHeight();
                0 > g ? this.activeMenu.scrollTop(u + g) : g + b > y && this.activeMenu.scrollTop(u + g - y + b)
            }
        },
        blur: function(b, g) {
            g || clearTimeout(this.timer);
            this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"),
            this._trigger("blur", b, {
                item: this.active
            }),
            this.active = null)
        },
        _startOpening: function(b) {
            clearTimeout(this.timer);
            "true" === b.attr("aria-hidden") && (this.timer = this._delay(function() {
                this._close();
                this._open(b)
            }, this.delay))
        },
        _open: function(b) {
            var g = d.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer);
            this.element.find(".ui-menu").not(b.parents(".ui-menu")).hide().attr("aria-hidden", "true");
            b.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(g)
        },
        collapseAll: function(b, g) {
            clearTimeout(this.timer);
            this.timer = this._delay(function() {
                var u = g ? this.element : d(b && b.target).closest(this.element.find(".ui-menu"));
                u.length || (u = this.element);
                this._close(u);
                this.blur(b);
                this._removeClass(u.find(".ui-state-active"), null, "ui-state-active");
                this.activeMenu = u
            }, this.delay)
        },
        _close: function(b) {
            b ||= this.active ? this.active.parent() : this.element;
            b.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false")
        },
        _closeOnDocumentClick: function(b) {
            return !d(b.target).closest(".ui-menu").length
        },
        _isDivider: function(b) {
            return !/[^\-\u2014\u2013\s]/.test(b.text())
        },
        collapse: function(b) {
            var g = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            g && g.length && (this._close(),
            this.focus(b, g))
        },
        expand: function(b) {
            var g = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
            g && g.length && (this._open(g.parent()),
            this._delay(function() {
                this.focus(b, g)
            }))
        },
        next: function(b) {
            this._move("next", "first", b)
        },
        previous: function(b) {
            this._move("prev", "last", b)
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function(b, g, u) {
            var y;
            this.active && (y = "first" === b || "last" === b ? this.active["first" === b ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[b + "All"](".ui-menu-item").eq(0));
            y && y.length && this.active || (y = this.activeMenu.find(this.options.items)[g]());
            this.focus(u, y)
        },
        nextPage: function(b) {
            var g;
            if (!this.active)
                this.next(b);
            else if (!this.isLastItem())
                if (this._hasScroll()) {
                    var u = this.active.offset().top;
                    var y = this.element.height();
                    this.active.nextAll(".ui-menu-item").each(function() {
                        g = d(this);
                        return 0 > g.offset().top - u - y
                    });
                    this.focus(b, g)
                } else
                    this.focus(b, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())
        },
        previousPage: function(b) {
            var g;
            if (!this.active)
                this.next(b);
            else if (!this.isFirstItem())
                if (this._hasScroll()) {
                    var u = this.active.offset().top;
                    var y = this.element.height();
                    this.active.prevAll(".ui-menu-item").each(function() {
                        g = d(this);
                        return 0 < g.offset().top - u + y
                    });
                    this.focus(b, g)
                } else
                    this.focus(b, this.activeMenu.find(this.options.items).first())
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function(b) {
            this.active = this.active || d(b.target).closest(".ui-menu-item");
            var g = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(b, !0);
            this._trigger("select", b, g)
        },
        _filterMenuItems: function(b) {
            b = b.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
            var g = new RegExp("^" + b,"i");
            return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                return g.test(d.trim(d(this).children(".ui-menu-item-wrapper").text()))
            })
        }
    });
    d.widget("ui.autocomplete", {
        version: "1.12.1",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function() {
            var b, g, u, y = this.element[0].nodeName.toLowerCase(), I = "textarea" === y;
            y = "input" === y;
            this.isMultiLine = I || !y && this._isContentEditable(this.element);
            this.valueMethod = this.element[I || y ? "val" : "text"];
            this.isNewMenu = !0;
            this._addClass("ui-autocomplete-input");
            this.element.attr("autocomplete", "off");
            this._on(this.element, {
                keydown: function(T) {
                    if (this.element.prop("readOnly"))
                        g = u = b = !0;
                    else {
                        g = u = b = !1;
                        var P = d.ui.keyCode;
                        switch (T.keyCode) {
                        case P.PAGE_UP:
                            b = !0;
                            this._move("previousPage", T);
                            break;
                        case P.PAGE_DOWN:
                            b = !0;
                            this._move("nextPage", T);
                            break;
                        case P.UP:
                            b = !0;
                            this._keyEvent("previous", T);
                            break;
                        case P.DOWN:
                            b = !0;
                            this._keyEvent("next", T);
                            break;
                        case P.ENTER:
                            this.menu.active && (b = !0,
                            T.preventDefault(),
                            this.menu.select(T));
                            break;
                        case P.TAB:
                            this.menu.active && this.menu.select(T);
                            break;
                        case P.ESCAPE:
                            this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term),
                            this.close(T),
                            T.preventDefault());
                            break;
                        default:
                            g = !0,
                            this._searchTimeout(T)
                        }
                    }
                },
                keypress: function(T) {
                    if (b)
                        b = !1,
                        this.isMultiLine && !this.menu.element.is(":visible") || T.preventDefault();
                    else if (!g) {
                        var P = d.ui.keyCode;
                        switch (T.keyCode) {
                        case P.PAGE_UP:
                            this._move("previousPage", T);
                            break;
                        case P.PAGE_DOWN:
                            this._move("nextPage", T);
                            break;
                        case P.UP:
                            this._keyEvent("previous", T);
                            break;
                        case P.DOWN:
                            this._keyEvent("next", T)
                        }
                    }
                },
                input: function(T) {
                    u ? (u = !1,
                    T.preventDefault()) : this._searchTimeout(T)
                },
                focus: function() {
                    this.selectedItem = null;
                    this.previous = this._value()
                },
                blur: function(T) {
                    this.cancelBlur ? delete this.cancelBlur : (clearTimeout(this.searching),
                    this.close(T),
                    this._change(T))
                }
            });
            this._initSource();
            this.menu = d("<ul>").appendTo(this._appendTo()).menu({
                role: null
            }).hide().menu("instance");
            this._addClass(this.menu.element, "ui-autocomplete", "ui-front");
            this._on(this.menu.element, {
                mousedown: function(T) {
                    T.preventDefault();
                    this.cancelBlur = !0;
                    this._delay(function() {
                        delete this.cancelBlur;
                        this.element[0] !== d.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus")
                    })
                },
                menufocus: function(T, P) {
                    if (this.isNewMenu && (this.isNewMenu = !1,
                    T.originalEvent && /^mouse/.test(T.originalEvent.type))) {
                        this.menu.blur();
                        this.document.one("mousemove", function() {
                            d(T.target).trigger(T.originalEvent)
                        });
                        return
                    }
                    var ia = P.item.data("ui-autocomplete-item");
                    !1 !== this._trigger("focus", T, {
                        item: ia
                    }) && T.originalEvent && /^key/.test(T.originalEvent.type) && this._value(ia.value);
                    (P = P.item.attr("aria-label") || ia.value) && d.trim(P).length && (this.liveRegion.children().hide(),
                    d("<div>").text(P).appendTo(this.liveRegion))
                },
                menuselect: function(T, P) {
                    var ia = P.item.data("ui-autocomplete-item")
                      , pa = this.previous;
                    this.element[0] !== d.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"),
                    this.previous = pa,
                    this._delay(function() {
                        this.previous = pa;
                        this.selectedItem = ia
                    }));
                    !1 !== this._trigger("select", T, {
                        item: ia
                    }) && this._value(ia.value);
                    this.term = this._value();
                    this.close(T);
                    this.selectedItem = ia
                }
            });
            this.liveRegion = d("<div>", {
                role: "status",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).appendTo(this.document[0].body);
            this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible");
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function() {
            clearTimeout(this.searching);
            this.element.removeAttr("autocomplete");
            this.menu.element.remove();
            this.liveRegion.remove()
        },
        _setOption: function(b, g) {
            this._super(b, g);
            "source" === b && this._initSource();
            "appendTo" === b && this.menu.element.appendTo(this._appendTo());
            "disabled" === b && g && this.xhr && this.xhr.abort()
        },
        _isEventTargetInWidget: function(b) {
            var g = this.menu.element[0];
            return b.target === this.element[0] || b.target === g || d.contains(g, b.target)
        },
        _closeOnClickOutside: function(b) {
            this._isEventTargetInWidget(b) || this.close()
        },
        _appendTo: function() {
            var b = this.options.appendTo;
            b &&= b.jquery || b.nodeType ? d(b) : this.document.find(b).eq(0);
            b && b[0] || (b = this.element.closest(".ui-front, dialog"));
            b.length || (b = this.document[0].body);
            return b
        },
        _initSource: function() {
            var b = this;
            if (d.isArray(this.options.source)) {
                var g = this.options.source;
                this.source = function(y, I) {
                    I(d.ui.autocomplete.filter(g, y.term))
                }
            } else if ("string" === typeof this.options.source) {
                var u = this.options.source;
                this.source = function(y, I) {
                    b.xhr && b.xhr.abort();
                    b.xhr = d.ajax({
                        url: u,
                        data: y,
                        dataType: "json",
                        success: function(T) {
                            I(T)
                        },
                        error: function() {
                            I([])
                        }
                    })
                }
            } else
                this.source = this.options.source
        },
        _searchTimeout: function(b) {
            clearTimeout(this.searching);
            this.searching = this._delay(function() {
                var g = this.term === this._value()
                  , u = this.menu.element.is(":visible")
                  , y = b.altKey || b.ctrlKey || b.metaKey || b.shiftKey;
                if (!g || g && !u && !y)
                    this.selectedItem = null,
                    this.search(null, b)
            }, this.options.delay)
        },
        search: function(b, g) {
            b = null != b ? b : this._value();
            this.term = this._value();
            if (b.length < this.options.minLength)
                return this.close(g);
            if (!1 !== this._trigger("search", g))
                return this._search(b)
        },
        _search: function(b) {
            this.pending++;
            this._addClass("ui-autocomplete-loading");
            this.cancelSearch = !1;
            this.source({
                term: b
            }, this._response())
        },
        _response: function() {
            var b = ++this.requestIndex;
            return d.proxy(function(g) {
                b === this.requestIndex && this.__response(g);
                this.pending--;
                this.pending || this._removeClass("ui-autocomplete-loading")
            }, this)
        },
        __response: function(b) {
            b &&= this._normalize(b);
            this._trigger("response", null, {
                content: b
            });
            !this.options.disabled && b && b.length && !this.cancelSearch ? (this._suggest(b),
            this._trigger("open")) : this._close()
        },
        close: function(b) {
            this.cancelSearch = !0;
            this._close(b)
        },
        _close: function(b) {
            this._off(this.document, "mousedown");
            this.menu.element.is(":visible") && (this.menu.element.hide(),
            this.menu.blur(),
            this.isNewMenu = !0,
            this._trigger("close", b))
        },
        _change: function(b) {
            this.previous !== this._value() && this._trigger("change", b, {
                item: this.selectedItem
            })
        },
        _normalize: function(b) {
            return b.length && b[0].label && b[0].value ? b : d.map(b, function(g) {
                return "string" === typeof g ? {
                    label: g,
                    value: g
                } : d.extend({}, g, {
                    label: g.label || g.value,
                    value: g.value || g.label
                })
            })
        },
        _suggest: function(b) {
            var g = this.menu.element.empty();
            this._renderMenu(g, b);
            this.isNewMenu = !0;
            this.menu.refresh();
            g.show();
            this._resizeMenu();
            g.position(d.extend({
                of: this.element
            }, this.options.position));
            this.options.autoFocus && this.menu.next();
            this._on(this.document, {
                mousedown: "_closeOnClickOutside"
            })
        },
        _resizeMenu: function() {
            var b = this.menu.element;
            b.outerWidth(Math.max(b.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(b, g) {
            var u = this;
            d.each(g, function(y, I) {
                u._renderItemData(b, I)
            })
        },
        _renderItemData: function(b, g) {
            return this._renderItem(b, g).data("ui-autocomplete-item", g)
        },
        _renderItem: function(b, g) {
            return d("<li>").append(d("<div>").text(g.label)).appendTo(b)
        },
        _move: function(b, g) {
            if (this.menu.element.is(":visible"))
                if (this.menu.isFirstItem() && /^previous/.test(b) || this.menu.isLastItem() && /^next/.test(b))
                    this.isMultiLine || this._value(this.term),
                    this.menu.blur();
                else
                    this.menu[b](g);
            else
                this.search(null, g)
        },
        widget: function() {
            return this.menu.element
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function(b, g) {
            if (!this.isMultiLine || this.menu.element.is(":visible"))
                this._move(b, g),
                g.preventDefault()
        },
        _isContentEditable: function(b) {
            if (!b.length)
                return !1;
            var g = b.prop("contentEditable");
            return "inherit" === g ? this._isContentEditable(b.parent()) : "true" === g
        }
    });
    d.extend(d.ui.autocomplete, {
        escapeRegex: function(b) {
            return b.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function(b, g) {
            var u = new RegExp(d.ui.autocomplete.escapeRegex(g),"i");
            return d.grep(b, function(y) {
                return u.test(y.label || y.value || y)
            })
        }
    });
    d.widget("ui.autocomplete", d.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(b) {
                    return b + (1 < b ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function(b) {
            this._superApply(arguments);
            if (!this.options.disabled && !this.cancelSearch) {
                var g = b && b.length ? this.options.messages.results(b.length) : this.options.messages.noResults;
                this.liveRegion.children().hide();
                d("<div>").text(g).appendTo(this.liveRegion)
            }
        }
    });
    d.extend(d.ui, {
        datepicker: {
            version: "1.12.1"
        }
    });
    var Fa;
    d.extend(E.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(b) {
            M(this._defaults, b || {});
            return this
        },
        _attachDatepicker: function(b, g) {
            var u = b.nodeName.toLowerCase();
            var y = "div" === u || "span" === u;
            b.id || (this.uuid += 1,
            b.id = "dp" + this.uuid);
            var I = this._newInst(d(b), y);
            I.settings = d.extend({}, g || {});
            "input" === u ? this._connectDatepicker(b, I) : y && this._inlineDatepicker(b, I)
        },
        _newInst: function(b, g) {
            return {
                id: b[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
                input: b,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: g,
                dpDiv: g ? R(d("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function(b, g) {
            var u = d(b);
            g.append = d([]);
            g.trigger = d([]);
            u.hasClass(this.markerClassName) || (this._attachments(u, g),
            u.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp),
            this._autoSize(g),
            d.data(b, "datepicker", g),
            g.settings.disabled && this._disableDatepicker(b))
        },
        _attachments: function(b, g) {
            var u = this._get(g, "appendText");
            var y = this._get(g, "isRTL");
            g.append && g.append.remove();
            u && (g.append = d("<span class='" + this._appendClass + "'>" + u + "</span>"),
            b[y ? "before" : "after"](g.append));
            b.off("focus", this._showDatepicker);
            g.trigger && g.trigger.remove();
            u = this._get(g, "showOn");
            if ("focus" === u || "both" === u)
                b.on("focus", this._showDatepicker);
            if ("button" === u || "both" === u) {
                u = this._get(g, "buttonText");
                var I = this._get(g, "buttonImage");
                g.trigger = d(this._get(g, "buttonImageOnly") ? d("<img/>").addClass(this._triggerClass).attr({
                    src: I,
                    alt: u,
                    title: u
                }) : d("<button type='button'></button>").addClass(this._triggerClass).html(I ? d("<img/>").attr({
                    src: I,
                    alt: u,
                    title: u
                }) : u));
                b[y ? "before" : "after"](g.trigger);
                g.trigger.on("click", function() {
                    d.datepicker._datepickerShowing && d.datepicker._lastInput === b[0] ? d.datepicker._hideDatepicker() : (d.datepicker._datepickerShowing && d.datepicker._lastInput !== b[0] && d.datepicker._hideDatepicker(),
                    d.datepicker._showDatepicker(b[0]));
                    return !1
                })
            }
        },
        _autoSize: function(b) {
            if (this._get(b, "autoSize") && !b.inline) {
                var g, u, y, I = new Date(2009,11,20), T = this._get(b, "dateFormat");
                if (T.match(/[DM]/)) {
                    var P = function(ia) {
                        for (y = u = g = 0; y < ia.length; y++)
                            ia[y].length > g && (g = ia[y].length,
                            u = y);
                        return u
                    };
                    I.setMonth(P(this._get(b, T.match(/MM/) ? "monthNames" : "monthNamesShort")));
                    I.setDate(P(this._get(b, T.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - I.getDay())
                }
                b.input.attr("size", this._formatDate(b, I).length)
            }
        },
        _inlineDatepicker: function(b, g) {
            var u = d(b);
            u.hasClass(this.markerClassName) || (u.addClass(this.markerClassName).append(g.dpDiv),
            d.data(b, "datepicker", g),
            this._setDate(g, this._getDefaultDate(g), !0),
            this._updateDatepicker(g),
            this._updateAlternate(g),
            g.settings.disabled && this._disableDatepicker(b),
            g.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function(b, g, u, y, I) {
            b = this._dialogInst;
            b || (this.uuid += 1,
            b = "dp" + this.uuid,
            this._dialogInput = d("<input type='text' id='" + b + "' style='position: absolute; top: -100px; width: 0px;'/>"),
            this._dialogInput.on("keydown", this._doKeyDown),
            d("body").append(this._dialogInput),
            b = this._dialogInst = this._newInst(this._dialogInput, !1),
            b.settings = {},
            d.data(this._dialogInput[0], "datepicker", b));
            M(b.settings, y || {});
            g = g && g.constructor === Date ? this._formatDate(b, g) : g;
            this._dialogInput.val(g);
            this._pos = I ? I.length ? I : [I.pageX, I.pageY] : null;
            if (!this._pos) {
                g = document.documentElement.clientWidth;
                y = document.documentElement.clientHeight;
                I = document.documentElement.scrollLeft || document.body.scrollLeft;
                var T = document.documentElement.scrollTop || document.body.scrollTop;
                this._pos = [g / 2 - 100 + I, y / 2 - 150 + T]
            }
            this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px");
            b.settings.onSelect = u;
            this._inDialog = !0;
            this.dpDiv.addClass(this._dialogClass);
            this._showDatepicker(this._dialogInput[0]);
            d.blockUI && d.blockUI(this.dpDiv);
            d.data(this._dialogInput[0], "datepicker", b);
            return this
        },
        _destroyDatepicker: function(b) {
            var g = d(b)
              , u = d.data(b, "datepicker");
            if (g.hasClass(this.markerClassName)) {
                var y = b.nodeName.toLowerCase();
                d.removeData(b, "datepicker");
                "input" === y ? (u.append.remove(),
                u.trigger.remove(),
                g.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : "div" !== y && "span" !== y || g.removeClass(this.markerClassName).empty();
                Fa === u && (Fa = null)
            }
        },
        _enableDatepicker: function(b) {
            var g = d(b)
              , u = d.data(b, "datepicker");
            if (g.hasClass(this.markerClassName)) {
                var y = b.nodeName.toLowerCase();
                if ("input" === y)
                    b.disabled = !1,
                    u.trigger.filter("button").each(function() {
                        this.disabled = !1
                    }).end().filter("img").css({
                        opacity: "1.0",
                        cursor: ""
                    });
                else if ("div" === y || "span" === y)
                    y = g.children("." + this._inlineClass),
                    y.children().removeClass("ui-state-disabled"),
                    y.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1);
                this._disabledInputs = d.map(this._disabledInputs, function(I) {
                    return I === b ? null : I
                })
            }
        },
        _disableDatepicker: function(b) {
            var g = d(b)
              , u = d.data(b, "datepicker");
            if (g.hasClass(this.markerClassName)) {
                var y = b.nodeName.toLowerCase();
                if ("input" === y)
                    b.disabled = !0,
                    u.trigger.filter("button").each(function() {
                        this.disabled = !0
                    }).end().filter("img").css({
                        opacity: "0.5",
                        cursor: "default"
                    });
                else if ("div" === y || "span" === y)
                    y = g.children("." + this._inlineClass),
                    y.children().addClass("ui-state-disabled"),
                    y.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0);
                this._disabledInputs = d.map(this._disabledInputs, function(I) {
                    return I === b ? null : I
                });
                this._disabledInputs[this._disabledInputs.length] = b
            }
        },
        _isDisabledDatepicker: function(b) {
            if (!b)
                return !1;
            for (var g = 0; g < this._disabledInputs.length; g++)
                if (this._disabledInputs[g] === b)
                    return !0;
            return !1
        },
        _getInst: function(b) {
            try {
                return d.data(b, "datepicker")
            } catch (g) {
                throw "Missing instance data for this datepicker";
            }
        },
        _optionDatepicker: function(b, g, u) {
            var y = this._getInst(b);
            if (2 === arguments.length && "string" === typeof g)
                return "defaults" === g ? d.extend({}, d.datepicker._defaults) : y ? "all" === g ? d.extend({}, y.settings) : this._get(y, g) : null;
            var I = g || {};
            "string" === typeof g && (I = {},
            I[g] = u);
            if (y) {
                this._curInst === y && this._hideDatepicker();
                var T = this._getDateDatepicker(b, !0);
                var P = this._getMinMaxDate(y, "min");
                var ia = this._getMinMaxDate(y, "max");
                M(y.settings, I);
                null !== P && void 0 !== I.dateFormat && void 0 === I.minDate && (y.settings.minDate = this._formatDate(y, P));
                null !== ia && void 0 !== I.dateFormat && void 0 === I.maxDate && (y.settings.maxDate = this._formatDate(y, ia));
                "disabled"in I && (I.disabled ? this._disableDatepicker(b) : this._enableDatepicker(b));
                this._attachments(d(b), y);
                this._autoSize(y);
                this._setDate(y, T);
                this._updateAlternate(y);
                this._updateDatepicker(y)
            }
        },
        _changeDatepicker: function(b, g, u) {
            this._optionDatepicker(b, g, u)
        },
        _refreshDatepicker: function(b) {
            (b = this._getInst(b)) && this._updateDatepicker(b)
        },
        _setDateDatepicker: function(b, g) {
            if (b = this._getInst(b))
                this._setDate(b, g),
                this._updateDatepicker(b),
                this._updateAlternate(b)
        },
        _getDateDatepicker: function(b, g) {
            (b = this._getInst(b)) && !b.inline && this._setDateFromField(b, g);
            return b ? this._getDate(b) : null
        },
        _doKeyDown: function(b) {
            var g = d.datepicker._getInst(b.target);
            var u = !0;
            var y = g.dpDiv.is(".ui-datepicker-rtl");
            g._keyEvent = !0;
            if (d.datepicker._datepickerShowing)
                switch (b.keyCode) {
                case 9:
                    d.datepicker._hideDatepicker();
                    u = !1;
                    break;
                case 13:
                    return u = d("td." + d.datepicker._dayOverClass + ":not(." + d.datepicker._currentClass + ")", g.dpDiv),
                    u[0] && d.datepicker._selectDay(b.target, g.selectedMonth, g.selectedYear, u[0]),
                    (b = d.datepicker._get(g, "onSelect")) ? (u = d.datepicker._formatDate(g),
                    b.apply(g.input ? g.input[0] : null, [u, g])) : d.datepicker._hideDatepicker(),
                    !1;
                case 27:
                    d.datepicker._hideDatepicker();
                    break;
                case 33:
                    d.datepicker._adjustDate(b.target, b.ctrlKey ? -d.datepicker._get(g, "stepBigMonths") : -d.datepicker._get(g, "stepMonths"), "M");
                    break;
                case 34:
                    d.datepicker._adjustDate(b.target, b.ctrlKey ? +d.datepicker._get(g, "stepBigMonths") : +d.datepicker._get(g, "stepMonths"), "M");
                    break;
                case 35:
                    (b.ctrlKey || b.metaKey) && d.datepicker._clearDate(b.target);
                    u = b.ctrlKey || b.metaKey;
                    break;
                case 36:
                    (b.ctrlKey || b.metaKey) && d.datepicker._gotoToday(b.target);
                    u = b.ctrlKey || b.metaKey;
                    break;
                case 37:
                    (b.ctrlKey || b.metaKey) && d.datepicker._adjustDate(b.target, y ? 1 : -1, "D");
                    u = b.ctrlKey || b.metaKey;
                    b.originalEvent.altKey && d.datepicker._adjustDate(b.target, b.ctrlKey ? -d.datepicker._get(g, "stepBigMonths") : -d.datepicker._get(g, "stepMonths"), "M");
                    break;
                case 38:
                    (b.ctrlKey || b.metaKey) && d.datepicker._adjustDate(b.target, -7, "D");
                    u = b.ctrlKey || b.metaKey;
                    break;
                case 39:
                    (b.ctrlKey || b.metaKey) && d.datepicker._adjustDate(b.target, y ? -1 : 1, "D");
                    u = b.ctrlKey || b.metaKey;
                    b.originalEvent.altKey && d.datepicker._adjustDate(b.target, b.ctrlKey ? +d.datepicker._get(g, "stepBigMonths") : +d.datepicker._get(g, "stepMonths"), "M");
                    break;
                case 40:
                    (b.ctrlKey || b.metaKey) && d.datepicker._adjustDate(b.target, 7, "D");
                    u = b.ctrlKey || b.metaKey;
                    break;
                default:
                    u = !1
                }
            else
                36 === b.keyCode && b.ctrlKey ? d.datepicker._showDatepicker(this) : u = !1;
            u && (b.preventDefault(),
            b.stopPropagation())
        },
        _doKeyPress: function(b) {
            var g = d.datepicker._getInst(b.target);
            if (d.datepicker._get(g, "constrainInput")) {
                g = d.datepicker._possibleChars(d.datepicker._get(g, "dateFormat"));
                var u = String.fromCharCode(null == b.charCode ? b.keyCode : b.charCode);
                return b.ctrlKey || b.metaKey || " " > u || !g || -1 < g.indexOf(u)
            }
        },
        _doKeyUp: function(b) {
            var g;
            b = d.datepicker._getInst(b.target);
            if (b.input.val() !== b.lastVal)
                try {
                    if (g = d.datepicker.parseDate(d.datepicker._get(b, "dateFormat"), b.input ? b.input.val() : null, d.datepicker._getFormatConfig(b)))
                        d.datepicker._setDateFromField(b),
                        d.datepicker._updateAlternate(b),
                        d.datepicker._updateDatepicker(b)
                } catch (u) {}
            return !0
        },
        _showDatepicker: function(b) {
            b = b.target || b;
            "input" !== b.nodeName.toLowerCase() && (b = d("input", b.parentNode)[0]);
            if (!d.datepicker._isDisabledDatepicker(b) && d.datepicker._lastInput !== b) {
                var g = d.datepicker._getInst(b);
                d.datepicker._curInst && d.datepicker._curInst !== g && (d.datepicker._curInst.dpDiv.stop(!0, !0),
                g && d.datepicker._datepickerShowing && d.datepicker._hideDatepicker(d.datepicker._curInst.input[0]));
                var u = (u = d.datepicker._get(g, "beforeShow")) ? u.apply(b, [b, g]) : {};
                if (!1 !== u) {
                    M(g.settings, u);
                    g.lastVal = null;
                    d.datepicker._lastInput = b;
                    d.datepicker._setDateFromField(g);
                    d.datepicker._inDialog && (b.value = "");
                    d.datepicker._pos || (d.datepicker._pos = d.datepicker._findPos(b),
                    d.datepicker._pos[1] += b.offsetHeight);
                    var y = !1;
                    d(b).parents().each(function() {
                        y |= "fixed" === d(this).css("position");
                        return !y
                    });
                    u = {
                        left: d.datepicker._pos[0],
                        top: d.datepicker._pos[1]
                    };
                    d.datepicker._pos = null;
                    g.dpDiv.empty();
                    g.dpDiv.css({
                        position: "absolute",
                        display: "block",
                        top: "-1000px"
                    });
                    d.datepicker._updateDatepicker(g);
                    u = d.datepicker._checkOffset(g, u, y);
                    g.dpDiv.css({
                        position: d.datepicker._inDialog && d.blockUI ? "static" : y ? "fixed" : "absolute",
                        display: "none",
                        left: u.left + "px",
                        top: u.top + "px"
                    });
                    if (!g.inline) {
                        u = d.datepicker._get(g, "showAnim");
                        var I = d.datepicker._get(g, "duration");
                        g.dpDiv.css("z-index", k(d(b)) + 1);
                        d.datepicker._datepickerShowing = !0;
                        if (d.effects && d.effects.effect[u])
                            g.dpDiv.show(u, d.datepicker._get(g, "showOptions"), I);
                        else
                            g.dpDiv[u || "show"](u ? I : null);
                        d.datepicker._shouldFocusInput(g) && g.input.trigger("focus");
                        d.datepicker._curInst = g
                    }
                }
            }
        },
        _updateDatepicker: function(b) {
            this.maxRows = 4;
            Fa = b;
            b.dpDiv.empty().append(this._generateHTML(b));
            this._attachHandlers(b);
            var g = this._getNumberOfMonths(b)
              , u = g[1]
              , y = b.dpDiv.find("." + this._dayOverClass + " a");
            0 < y.length && H.apply(y.get(0));
            b.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
            1 < u && b.dpDiv.addClass("ui-datepicker-multi-" + u).css("width", 17 * u + "em");
            b.dpDiv[(1 !== g[0] || 1 !== g[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi");
            b.dpDiv[(this._get(b, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl");
            b === d.datepicker._curInst && d.datepicker._datepickerShowing && d.datepicker._shouldFocusInput(b) && b.input.trigger("focus");
            if (b.yearshtml) {
                var I = b.yearshtml;
                setTimeout(function() {
                    I === b.yearshtml && b.yearshtml && b.dpDiv.find("select.ui-datepicker-year:first").replaceWith(b.yearshtml);
                    I = b.yearshtml = null
                }, 0)
            }
        },
        _shouldFocusInput: function(b) {
            return b.input && b.input.is(":visible") && !b.input.is(":disabled") && !b.input.is(":focus")
        },
        _checkOffset: function(b, g, u) {
            var y = b.dpDiv.outerWidth()
              , I = b.dpDiv.outerHeight()
              , T = b.input ? b.input.outerWidth() : 0
              , P = b.input ? b.input.outerHeight() : 0
              , ia = document.documentElement.clientWidth + (u ? 0 : d(document).scrollLeft())
              , pa = document.documentElement.clientHeight + (u ? 0 : d(document).scrollTop());
            g.left -= this._get(b, "isRTL") ? y - T : 0;
            g.left -= u && g.left === b.input.offset().left ? d(document).scrollLeft() : 0;
            g.top -= u && g.top === b.input.offset().top + P ? d(document).scrollTop() : 0;
            g.left -= Math.min(g.left, g.left + y > ia && ia > y ? Math.abs(g.left + y - ia) : 0);
            g.top -= Math.min(g.top, g.top + I > pa && pa > I ? Math.abs(I + P) : 0);
            return g
        },
        _findPos: function(b) {
            var g = this._getInst(b);
            for (g = this._get(g, "isRTL"); b && ("hidden" === b.type || 1 !== b.nodeType || d.expr.filters.hidden(b)); )
                b = b[g ? "previousSibling" : "nextSibling"];
            b = d(b).offset();
            return [b.left, b.top]
        },
        _hideDatepicker: function(b) {
            var g = this._curInst;
            if (g && (!b || g === d.data(b, "datepicker")) && this._datepickerShowing) {
                b = this._get(g, "showAnim");
                var u = this._get(g, "duration");
                var y = function() {
                    d.datepicker._tidyDialog(g)
                };
                if (d.effects && (d.effects.effect[b] || d.effects[b]))
                    g.dpDiv.hide(b, d.datepicker._get(g, "showOptions"), u, y);
                else
                    g.dpDiv["slideDown" === b ? "slideUp" : "fadeIn" === b ? "fadeOut" : "hide"](b ? u : null, y);
                b || y();
                this._datepickerShowing = !1;
                (b = this._get(g, "onClose")) && b.apply(g.input ? g.input[0] : null, [g.input ? g.input.val() : "", g]);
                this._lastInput = null;
                this._inDialog && (this._dialogInput.css({
                    position: "absolute",
                    left: "0",
                    top: "-100px"
                }),
                d.blockUI && (d.unblockUI(),
                d("body").append(this.dpDiv)));
                this._inDialog = !1
            }
        },
        _tidyDialog: function(b) {
            b.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(b) {
            if (d.datepicker._curInst) {
                b = d(b.target);
                var g = d.datepicker._getInst(b[0]);
                (!(b[0].id === d.datepicker._mainDivId || 0 !== b.parents("#" + d.datepicker._mainDivId).length || b.hasClass(d.datepicker.markerClassName) || b.closest("." + d.datepicker._triggerClass).length || !d.datepicker._datepickerShowing || d.datepicker._inDialog && d.blockUI) || b.hasClass(d.datepicker.markerClassName) && d.datepicker._curInst !== g) && d.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(b, g, u) {
            b = d(b);
            var y = this._getInst(b[0]);
            this._isDisabledDatepicker(b[0]) || (this._adjustInstDate(y, g + ("M" === u ? this._get(y, "showCurrentAtPos") : 0), u),
            this._updateDatepicker(y))
        },
        _gotoToday: function(b) {
            var g = d(b)
              , u = this._getInst(g[0]);
            this._get(u, "gotoCurrent") && u.currentDay ? (u.selectedDay = u.currentDay,
            u.drawMonth = u.selectedMonth = u.currentMonth,
            u.drawYear = u.selectedYear = u.currentYear) : (b = new Date,
            u.selectedDay = b.getDate(),
            u.drawMonth = u.selectedMonth = b.getMonth(),
            u.drawYear = u.selectedYear = b.getFullYear());
            this._notifyChange(u);
            this._adjustDate(g)
        },
        _selectMonthYear: function(b, g, u) {
            b = d(b);
            var y = this._getInst(b[0]);
            y["selected" + ("M" === u ? "Month" : "Year")] = y["draw" + ("M" === u ? "Month" : "Year")] = parseInt(g.options[g.selectedIndex].value, 10);
            this._notifyChange(y);
            this._adjustDate(b)
        },
        _selectDay: function(b, g, u, y) {
            var I = d(b);
            d(y).hasClass(this._unselectableClass) || this._isDisabledDatepicker(I[0]) || (I = this._getInst(I[0]),
            I.selectedDay = I.currentDay = d("a", y).html(),
            I.selectedMonth = I.currentMonth = g,
            I.selectedYear = I.currentYear = u,
            this._selectDate(b, this._formatDate(I, I.currentDay, I.currentMonth, I.currentYear)))
        },
        _clearDate: function(b) {
            b = d(b);
            this._selectDate(b, "")
        },
        _selectDate: function(b, g) {
            b = d(b);
            var u = this._getInst(b[0]);
            g = null != g ? g : this._formatDate(u);
            u.input && u.input.val(g);
            this._updateAlternate(u);
            (b = this._get(u, "onSelect")) ? b.apply(u.input ? u.input[0] : null, [g, u]) : u.input && u.input.trigger("change");
            u.inline ? this._updateDatepicker(u) : (this._hideDatepicker(),
            this._lastInput = u.input[0],
            "object" !== typeof u.input[0] && u.input.trigger("focus"),
            this._lastInput = null)
        },
        _updateAlternate: function(b) {
            var g = this._get(b, "altField");
            if (g) {
                var u = this._get(b, "altFormat") || this._get(b, "dateFormat");
                var y = this._getDate(b);
                b = this.formatDate(u, y, this._getFormatConfig(b));
                d(g).val(b)
            }
        },
        noWeekends: function(b) {
            b = b.getDay();
            return [0 < b && 6 > b, ""]
        },
        iso8601Week: function(b) {
            var g = new Date(b.getTime());
            g.setDate(g.getDate() + 4 - (g.getDay() || 7));
            b = g.getTime();
            g.setMonth(0);
            g.setDate(1);
            return Math.floor(Math.round((b - g) / 864E5) / 7) + 1
        },
        parseDate: function(b, g, u) {
            if (null == b || null == g)
                throw "Invalid arguments";
            g = "object" === typeof g ? g.toString() : g + "";
            if ("" === g)
                return null;
            var y, I = 0;
            var T = (u ? u.shortYearCutoff : null) || this._defaults.shortYearCutoff;
            T = "string" !== typeof T ? T : (new Date).getFullYear() % 100 + parseInt(T, 10);
            var P = (u ? u.dayNamesShort : null) || this._defaults.dayNamesShort;
            var ia = (u ? u.dayNames : null) || this._defaults.dayNames
              , pa = (u ? u.monthNamesShort : null) || this._defaults.monthNamesShort
              , qa = (u ? u.monthNames : null) || this._defaults.monthNames
              , ha = u = -1
              , V = -1
              , aa = -1
              , ma = !1
              , Ja = function(xa) {
                (xa = y + 1 < b.length && b.charAt(y + 1) === xa) && y++;
                return xa
            }
              , Ka = function(xa) {
                var Oa = Ja(xa);
                Oa = "@" === xa ? 14 : "!" === xa ? 20 : "y" === xa && Oa ? 4 : "o" === xa ? 3 : 2;
                xa = new RegExp("^\\d{" + ("y" === xa ? Oa : 1) + "," + Oa + "}");
                xa = g.substring(I).match(xa);
                if (!xa)
                    throw "Missing number at position " + I;
                I += xa[0].length;
                return parseInt(xa[0], 10)
            }
              , Na = function(xa, Oa, jb) {
                var lb = -1;
                xa = d.map(Ja(xa) ? jb : Oa, function(Ua, gb) {
                    return [[gb, Ua]]
                }).sort(function(Ua, gb) {
                    return -(Ua[1].length - gb[1].length)
                });
                d.each(xa, function(Ua, gb) {
                    Ua = gb[1];
                    if (g.substr(I, Ua.length).toLowerCase() === Ua.toLowerCase())
                        return lb = gb[0],
                        I += Ua.length,
                        !1
                });
                if (-1 !== lb)
                    return lb + 1;
                throw "Unknown name at position " + I;
            }
              , na = function() {
                if (g.charAt(I) !== b.charAt(y))
                    throw "Unexpected literal at position " + I;
                I++
            };
            for (y = 0; y < b.length; y++)
                if (ma)
                    "'" !== b.charAt(y) || Ja("'") ? na() : ma = !1;
                else
                    switch (b.charAt(y)) {
                    case "d":
                        V = Ka("d");
                        break;
                    case "D":
                        Na("D", P, ia);
                        break;
                    case "o":
                        aa = Ka("o");
                        break;
                    case "m":
                        ha = Ka("m");
                        break;
                    case "M":
                        ha = Na("M", pa, qa);
                        break;
                    case "y":
                        u = Ka("y");
                        break;
                    case "@":
                        var Ha = new Date(Ka("@"));
                        u = Ha.getFullYear();
                        ha = Ha.getMonth() + 1;
                        V = Ha.getDate();
                        break;
                    case "!":
                        Ha = new Date((Ka("!") - this._ticksTo1970) / 1E4);
                        u = Ha.getFullYear();
                        ha = Ha.getMonth() + 1;
                        V = Ha.getDate();
                        break;
                    case "'":
                        Ja("'") ? na() : ma = !0;
                        break;
                    default:
                        na()
                    }
            if (I < g.length && (P = g.substr(I),
            !/^\s+/.test(P)))
                throw "Extra/unparsed characters found in date: " + P;
            -1 === u ? u = (new Date).getFullYear() : 100 > u && (u += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (u <= T ? 0 : -100));
            if (-1 < aa) {
                ha = 1;
                V = aa;
                do {
                    T = this._getDaysInMonth(u, ha - 1);
                    if (V <= T)
                        break;
                    ha++;
                    V -= T
                } while (1)
            }
            Ha = this._daylightSavingAdjust(new Date(u,ha - 1,V));
            if (Ha.getFullYear() !== u || Ha.getMonth() + 1 !== ha || Ha.getDate() !== V)
                throw "Invalid date";
            return Ha
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 62135596800 * 1E7,
        formatDate: function(b, g, u) {
            if (!g)
                return "";
            var y, I = (u ? u.dayNamesShort : null) || this._defaults.dayNamesShort, T = (u ? u.dayNames : null) || this._defaults.dayNames, P = (u ? u.monthNamesShort : null) || this._defaults.monthNamesShort;
            u = (u ? u.monthNames : null) || this._defaults.monthNames;
            var ia = function(aa) {
                (aa = y + 1 < b.length && b.charAt(y + 1) === aa) && y++;
                return aa
            }
              , pa = function(aa, ma, Ja) {
                ma = "" + ma;
                if (ia(aa))
                    for (; ma.length < Ja; )
                        ma = "0" + ma;
                return ma
            }
              , qa = function(aa, ma, Ja, Ka) {
                return ia(aa) ? Ka[ma] : Ja[ma]
            }
              , ha = ""
              , V = !1;
            if (g)
                for (y = 0; y < b.length; y++)
                    if (V)
                        "'" !== b.charAt(y) || ia("'") ? ha += b.charAt(y) : V = !1;
                    else
                        switch (b.charAt(y)) {
                        case "d":
                            ha += pa("d", g.getDate(), 2);
                            break;
                        case "D":
                            ha += qa("D", g.getDay(), I, T);
                            break;
                        case "o":
                            ha += pa("o", Math.round(((new Date(g.getFullYear(),g.getMonth(),g.getDate())).getTime() - (new Date(g.getFullYear(),0,0)).getTime()) / 864E5), 3);
                            break;
                        case "m":
                            ha += pa("m", g.getMonth() + 1, 2);
                            break;
                        case "M":
                            ha += qa("M", g.getMonth(), P, u);
                            break;
                        case "y":
                            ha += ia("y") ? g.getFullYear() : (10 > g.getFullYear() % 100 ? "0" : "") + g.getFullYear() % 100;
                            break;
                        case "@":
                            ha += g.getTime();
                            break;
                        case "!":
                            ha += 1E4 * g.getTime() + this._ticksTo1970;
                            break;
                        case "'":
                            ia("'") ? ha += "'" : V = !0;
                            break;
                        default:
                            ha += b.charAt(y)
                        }
            return ha
        },
        _possibleChars: function(b) {
            var g, u = "", y = !1, I = function(T) {
                (T = g + 1 < b.length && b.charAt(g + 1) === T) && g++;
                return T
            };
            for (g = 0; g < b.length; g++)
                if (y)
                    "'" !== b.charAt(g) || I("'") ? u += b.charAt(g) : y = !1;
                else
                    switch (b.charAt(g)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        u += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        I("'") ? u += "'" : y = !0;
                        break;
                    default:
                        u += b.charAt(g)
                    }
            return u
        },
        _get: function(b, g) {
            return void 0 !== b.settings[g] ? b.settings[g] : this._defaults[g]
        },
        _setDateFromField: function(b, g) {
            if (b.input.val() !== b.lastVal) {
                var u = this._get(b, "dateFormat")
                  , y = b.lastVal = b.input ? b.input.val() : null
                  , I = this._getDefaultDate(b)
                  , T = I
                  , P = this._getFormatConfig(b);
                try {
                    T = this.parseDate(u, y, P) || I
                } catch (ia) {
                    y = g ? "" : y
                }
                b.selectedDay = T.getDate();
                b.drawMonth = b.selectedMonth = T.getMonth();
                b.drawYear = b.selectedYear = T.getFullYear();
                b.currentDay = y ? T.getDate() : 0;
                b.currentMonth = y ? T.getMonth() : 0;
                b.currentYear = y ? T.getFullYear() : 0;
                this._adjustInstDate(b)
            }
        },
        _getDefaultDate: function(b) {
            return this._restrictMinMax(b, this._determineDate(b, this._get(b, "defaultDate"), new Date))
        },
        _determineDate: function(b, g, u) {
            var y = function(T) {
                var P = new Date;
                P.setDate(P.getDate() + T);
                return P
            }
              , I = function(T) {
                try {
                    return d.datepicker.parseDate(d.datepicker._get(b, "dateFormat"), T, d.datepicker._getFormatConfig(b))
                } catch (V) {}
                var P = (T.toLowerCase().match(/^c/) ? d.datepicker._getDate(b) : null) || new Date
                  , ia = P.getFullYear()
                  , pa = P.getMonth();
                P = P.getDate();
                for (var qa = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, ha = qa.exec(T); ha; ) {
                    switch (ha[2] || "d") {
                    case "d":
                    case "D":
                        P += parseInt(ha[1], 10);
                        break;
                    case "w":
                    case "W":
                        P += 7 * parseInt(ha[1], 10);
                        break;
                    case "m":
                    case "M":
                        pa += parseInt(ha[1], 10);
                        P = Math.min(P, d.datepicker._getDaysInMonth(ia, pa));
                        break;
                    case "y":
                    case "Y":
                        ia += parseInt(ha[1], 10),
                        P = Math.min(P, d.datepicker._getDaysInMonth(ia, pa))
                    }
                    ha = qa.exec(T)
                }
                return new Date(ia,pa,P)
            };
            if (g = (g = null == g || "" === g ? u : "string" === typeof g ? I(g) : "number" === typeof g ? isNaN(g) ? u : y(g) : new Date(g.getTime())) && "Invalid Date" === g.toString() ? u : g)
                g.setHours(0),
                g.setMinutes(0),
                g.setSeconds(0),
                g.setMilliseconds(0);
            return this._daylightSavingAdjust(g)
        },
        _daylightSavingAdjust: function(b) {
            if (!b)
                return null;
            b.setHours(12 < b.getHours() ? b.getHours() + 2 : 0);
            return b
        },
        _setDate: function(b, g, u) {
            var y = !g
              , I = b.selectedMonth
              , T = b.selectedYear;
            g = this._restrictMinMax(b, this._determineDate(b, g, new Date));
            b.selectedDay = b.currentDay = g.getDate();
            b.drawMonth = b.selectedMonth = b.currentMonth = g.getMonth();
            b.drawYear = b.selectedYear = b.currentYear = g.getFullYear();
            I === b.selectedMonth && T === b.selectedYear || u || this._notifyChange(b);
            this._adjustInstDate(b);
            b.input && b.input.val(y ? "" : this._formatDate(b))
        },
        _getDate: function(b) {
            return !b.currentYear || b.input && "" === b.input.val() ? null : this._daylightSavingAdjust(new Date(b.currentYear,b.currentMonth,b.currentDay))
        },
        _attachHandlers: function(b) {
            var g = this._get(b, "stepMonths")
              , u = "#" + b.id.replace(/\\\\/g, "\\");
            b.dpDiv.find("[data-handler]").map(function() {
                d(this).on(this.getAttribute("data-event"), {
                    prev: function() {
                        d.datepicker._adjustDate(u, -g, "M")
                    },
                    next: function() {
                        d.datepicker._adjustDate(u, +g, "M")
                    },
                    hide: function() {
                        d.datepicker._hideDatepicker()
                    },
                    today: function() {
                        d.datepicker._gotoToday(u)
                    },
                    selectDay: function() {
                        d.datepicker._selectDay(u, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this);
                        return !1
                    },
                    selectMonth: function() {
                        d.datepicker._selectMonthYear(u, this, "M");
                        return !1
                    },
                    selectYear: function() {
                        d.datepicker._selectMonthYear(u, this, "Y");
                        return !1
                    }
                }[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(b) {
            var g, u, y, I, T = new Date;
            T = this._daylightSavingAdjust(new Date(T.getFullYear(),T.getMonth(),T.getDate()));
            var P = this._get(b, "isRTL");
            var ia = this._get(b, "showButtonPanel");
            var pa = this._get(b, "hideIfNoPrevNext");
            var qa = this._get(b, "navigationAsDateFormat");
            var ha = this._getNumberOfMonths(b)
              , V = this._get(b, "showCurrentAtPos");
            var aa = this._get(b, "stepMonths");
            var ma = 1 !== ha[0] || 1 !== ha[1]
              , Ja = this._daylightSavingAdjust(b.currentDay ? new Date(b.currentYear,b.currentMonth,b.currentDay) : new Date(9999,9,9))
              , Ka = this._getMinMaxDate(b, "min")
              , Na = this._getMinMaxDate(b, "max");
            V = b.drawMonth - V;
            var na = b.drawYear;
            0 > V && (V += 12,
            na--);
            if (Na) {
                var Ha = this._daylightSavingAdjust(new Date(Na.getFullYear(),Na.getMonth() - ha[0] * ha[1] + 1,Na.getDate()));
                for (Ha = Ka && Ha < Ka ? Ka : Ha; this._daylightSavingAdjust(new Date(na,V,1)) > Ha; )
                    V--,
                    0 > V && (V = 11,
                    na--)
            }
            b.drawMonth = V;
            b.drawYear = na;
            Ha = this._get(b, "prevText");
            Ha = qa ? this.formatDate(Ha, this._daylightSavingAdjust(new Date(na,V - aa,1)), this._getFormatConfig(b)) : Ha;
            Ha = this._canAdjustMonth(b, -1, na, V) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + Ha + "'><span class='ui-icon ui-icon-circle-triangle-" + (P ? "e" : "w") + "'>" + Ha + "</span></a>" : pa ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + Ha + "'><span class='ui-icon ui-icon-circle-triangle-" + (P ? "e" : "w") + "'>" + Ha + "</span></a>";
            var xa = this._get(b, "nextText");
            xa = qa ? this.formatDate(xa, this._daylightSavingAdjust(new Date(na,V + aa,1)), this._getFormatConfig(b)) : xa;
            pa = this._canAdjustMonth(b, 1, na, V) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + xa + "'><span class='ui-icon ui-icon-circle-triangle-" + (P ? "w" : "e") + "'>" + xa + "</span></a>" : pa ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + xa + "'><span class='ui-icon ui-icon-circle-triangle-" + (P ? "w" : "e") + "'>" + xa + "</span></a>";
            aa = this._get(b, "currentText");
            xa = this._get(b, "gotoCurrent") && b.currentDay ? Ja : T;
            aa = qa ? this.formatDate(aa, xa, this._getFormatConfig(b)) : aa;
            qa = b.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(b, "closeText") + "</button>";
            ia = ia ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (P ? qa : "") + (this._isInRange(b, xa) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + aa + "</button>" : "") + (P ? "" : qa) + "</div>" : "";
            qa = parseInt(this._get(b, "firstDay"), 10);
            qa = isNaN(qa) ? 0 : qa;
            aa = this._get(b, "showWeek");
            xa = this._get(b, "dayNames");
            var Oa = this._get(b, "dayNamesMin");
            var jb = this._get(b, "monthNames");
            var lb = this._get(b, "monthNamesShort");
            var Ua = this._get(b, "beforeShowDay");
            var gb = this._get(b, "showOtherMonths");
            var vb = this._get(b, "selectOtherMonths");
            var Fb = this._getDefaultDate(b);
            var Hb = "";
            for (g = 0; g < ha[0]; g++) {
                var Cb = "";
                this.maxRows = 4;
                for (u = 0; u < ha[1]; u++) {
                    var Ib = this._daylightSavingAdjust(new Date(na,V,b.selectedDay));
                    var eb = " ui-corner-all";
                    var Va = "";
                    if (ma) {
                        Va += "<div class='ui-datepicker-group";
                        if (1 < ha[1])
                            switch (u) {
                            case 0:
                                Va += " ui-datepicker-group-first";
                                eb = " ui-corner-" + (P ? "right" : "left");
                                break;
                            case ha[1] - 1:
                                Va += " ui-datepicker-group-last";
                                eb = " ui-corner-" + (P ? "left" : "right");
                                break;
                            default:
                                Va += " ui-datepicker-group-middle",
                                eb = ""
                            }
                        Va += "'>"
                    }
                    Va += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + eb + "'>" + (/all|left/.test(eb) && 0 === g ? P ? pa : Ha : "") + (/all|right/.test(eb) && 0 === g ? P ? Ha : pa : "") + this._generateMonthYearHeader(b, V, na, Ka, Na, 0 < g || 0 < u, jb, lb) + "</div><table class='ui-datepicker-calendar'><thead><tr>";
                    var fb = aa ? "<th class='ui-datepicker-week-col'>" + this._get(b, "weekHeader") + "</th>" : "";
                    for (eb = 0; 7 > eb; eb++) {
                        var fa = (eb + qa) % 7;
                        fb += "<th scope='col'" + (5 <= (eb + qa + 6) % 7 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + xa[fa] + "'>" + Oa[fa] + "</span></th>"
                    }
                    Va += fb + "</tr></thead><tbody>";
                    fb = this._getDaysInMonth(na, V);
                    na === b.selectedYear && V === b.selectedMonth && (b.selectedDay = Math.min(b.selectedDay, fb));
                    eb = (this._getFirstDayOfMonth(na, V) - qa + 7) % 7;
                    fb = Math.ceil((eb + fb) / 7);
                    this.maxRows = fb = ma ? this.maxRows > fb ? this.maxRows : fb : fb;
                    fa = this._daylightSavingAdjust(new Date(na,V,1 - eb));
                    for (y = 0; y < fb; y++) {
                        Va += "<tr>";
                        var ua = aa ? "<td class='ui-datepicker-week-col'>" + this._get(b, "calculateWeek")(fa) + "</td>" : "";
                        for (eb = 0; 7 > eb; eb++) {
                            var Wa = Ua ? Ua.apply(b.input ? b.input[0] : null, [fa]) : [!0, ""];
                            var Sa = (I = fa.getMonth() !== V) && !vb || !Wa[0] || Ka && fa < Ka || Na && fa > Na;
                            ua += "<td class='" + (5 <= (eb + qa + 6) % 7 ? " ui-datepicker-week-end" : "") + (I ? " ui-datepicker-other-month" : "") + (fa.getTime() === Ib.getTime() && V === b.selectedMonth && b._keyEvent || Fb.getTime() === fa.getTime() && Fb.getTime() === Ib.getTime() ? " " + this._dayOverClass : "") + (Sa ? " " + this._unselectableClass + " ui-state-disabled" : "") + (I && !gb ? "" : " " + Wa[1] + (fa.getTime() === Ja.getTime() ? " " + this._currentClass : "") + (fa.getTime() === T.getTime() ? " ui-datepicker-today" : "")) + "'" + (I && !gb || !Wa[2] ? "" : " title='" + Wa[2].replace(/'/g, "&#39;") + "'") + (Sa ? "" : " data-handler='selectDay' data-event='click' data-month='" + fa.getMonth() + "' data-year='" + fa.getFullYear() + "'") + ">" + (I && !gb ? "&#xa0;" : Sa ? "<span class='ui-state-default'>" + fa.getDate() + "</span>" : "<a class='ui-state-default" + (fa.getTime() === T.getTime() ? " ui-state-highlight" : "") + (fa.getTime() === Ja.getTime() ? " ui-state-active" : "") + (I ? " ui-priority-secondary" : "") + "' href='#'>" + fa.getDate() + "</a>") + "</td>";
                            fa.setDate(fa.getDate() + 1);
                            fa = this._daylightSavingAdjust(fa)
                        }
                        Va += ua + "</tr>"
                    }
                    V++;
                    11 < V && (V = 0,
                    na++);
                    Va += "</tbody></table>" + (ma ? "</div>" + (0 < ha[0] && u === ha[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : "");
                    Cb += Va
                }
                Hb += Cb
            }
            b._keyEvent = !1;
            return Hb + ia
        },
        _generateMonthYearHeader: function(b, g, u, y, I, T, P, ia) {
            var pa, qa = this._get(b, "changeMonth"), ha = this._get(b, "changeYear"), V = this._get(b, "showMonthAfterYear"), aa = "<div class='ui-datepicker-title'>", ma = "";
            if (T || !qa)
                ma += "<span class='ui-datepicker-month'>" + P[g] + "</span>";
            else {
                P = y && y.getFullYear() === u;
                var Ja = I && I.getFullYear() === u;
                ma += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";
                for (pa = 0; 12 > pa; pa++)
                    (!P || pa >= y.getMonth()) && (!Ja || pa <= I.getMonth()) && (ma += "<option value='" + pa + "'" + (pa === g ? " selected='selected'" : "") + ">" + ia[pa] + "</option>");
                ma += "</select>"
            }
            V || (aa += ma + (!T && qa && ha ? "" : "&#xa0;"));
            if (!b.yearshtml)
                if (b.yearshtml = "",
                T || !ha)
                    aa += "<span class='ui-datepicker-year'>" + u + "</span>";
                else {
                    ia = this._get(b, "yearRange").split(":");
                    var Ka = (new Date).getFullYear();
                    P = function(Na) {
                        Na = Na.match(/c[+\-].*/) ? u + parseInt(Na.substring(1), 10) : Na.match(/[+\-].*/) ? Ka + parseInt(Na, 10) : parseInt(Na, 10);
                        return isNaN(Na) ? Ka : Na
                    }
                    ;
                    g = P(ia[0]);
                    ia = Math.max(g, P(ia[1] || ""));
                    g = y ? Math.max(g, y.getFullYear()) : g;
                    ia = I ? Math.min(ia, I.getFullYear()) : ia;
                    for (b.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; g <= ia; g++)
                        b.yearshtml += "<option value='" + g + "'" + (g === u ? " selected='selected'" : "") + ">" + g + "</option>";
                    b.yearshtml += "</select>";
                    aa += b.yearshtml;
                    b.yearshtml = null
                }
            aa += this._get(b, "yearSuffix");
            V && (aa += (!T && qa && ha ? "" : "&#xa0;") + ma);
            return aa + "</div>"
        },
        _adjustInstDate: function(b, g, u) {
            var y = b.selectedYear + ("Y" === u ? g : 0)
              , I = b.selectedMonth + ("M" === u ? g : 0);
            g = Math.min(b.selectedDay, this._getDaysInMonth(y, I)) + ("D" === u ? g : 0);
            y = this._restrictMinMax(b, this._daylightSavingAdjust(new Date(y,I,g)));
            b.selectedDay = y.getDate();
            b.drawMonth = b.selectedMonth = y.getMonth();
            b.drawYear = b.selectedYear = y.getFullYear();
            "M" !== u && "Y" !== u || this._notifyChange(b)
        },
        _restrictMinMax: function(b, g) {
            var u = this._getMinMaxDate(b, "min");
            b = this._getMinMaxDate(b, "max");
            g = u && g < u ? u : g;
            return b && g > b ? b : g
        },
        _notifyChange: function(b) {
            var g = this._get(b, "onChangeMonthYear");
            g && g.apply(b.input ? b.input[0] : null, [b.selectedYear, b.selectedMonth + 1, b])
        },
        _getNumberOfMonths: function(b) {
            b = this._get(b, "numberOfMonths");
            return null == b ? [1, 1] : "number" === typeof b ? [1, b] : b
        },
        _getMinMaxDate: function(b, g) {
            return this._determineDate(b, this._get(b, g + "Date"), null)
        },
        _getDaysInMonth: function(b, g) {
            return 32 - this._daylightSavingAdjust(new Date(b,g,32)).getDate()
        },
        _getFirstDayOfMonth: function(b, g) {
            return (new Date(b,g,1)).getDay()
        },
        _canAdjustMonth: function(b, g, u, y) {
            var I = this._getNumberOfMonths(b);
            u = this._daylightSavingAdjust(new Date(u,y + (0 > g ? g : I[0] * I[1]),1));
            0 > g && u.setDate(this._getDaysInMonth(u.getFullYear(), u.getMonth()));
            return this._isInRange(b, u)
        },
        _isInRange: function(b, g) {
            var u = this._getMinMaxDate(b, "min")
              , y = this._getMinMaxDate(b, "max")
              , I = null
              , T = null;
            if (b = this._get(b, "yearRange")) {
                b = b.split(":");
                var P = (new Date).getFullYear();
                I = parseInt(b[0], 10);
                T = parseInt(b[1], 10);
                b[0].match(/[+\-].*/) && (I += P);
                b[1].match(/[+\-].*/) && (T += P)
            }
            return (!u || g.getTime() >= u.getTime()) && (!y || g.getTime() <= y.getTime()) && (!I || g.getFullYear() >= I) && (!T || g.getFullYear() <= T)
        },
        _getFormatConfig: function(b) {
            var g = this._get(b, "shortYearCutoff");
            g = "string" !== typeof g ? g : (new Date).getFullYear() % 100 + parseInt(g, 10);
            return {
                shortYearCutoff: g,
                dayNamesShort: this._get(b, "dayNamesShort"),
                dayNames: this._get(b, "dayNames"),
                monthNamesShort: this._get(b, "monthNamesShort"),
                monthNames: this._get(b, "monthNames")
            }
        },
        _formatDate: function(b, g, u, y) {
            g || (b.currentDay = b.selectedDay,
            b.currentMonth = b.selectedMonth,
            b.currentYear = b.selectedYear);
            g = g ? "object" === typeof g ? g : this._daylightSavingAdjust(new Date(y,u,g)) : this._daylightSavingAdjust(new Date(b.currentYear,b.currentMonth,b.currentDay));
            return this.formatDate(this._get(b, "dateFormat"), g, this._getFormatConfig(b))
        }
    });
    d.fn.datepicker = function(b) {
        if (!this.length)
            return this;
        d.datepicker.initialized || (d(document).on("mousedown", d.datepicker._checkExternalClick),
        d.datepicker.initialized = !0);
        0 === d("#" + d.datepicker._mainDivId).length && d("body").append(d.datepicker.dpDiv);
        var g = Array.prototype.slice.call(arguments, 1);
        return "string" === typeof b && ("isDisabled" === b || "getDate" === b || "widget" === b) || "option" === b && 2 === arguments.length && "string" === typeof arguments[1] ? d.datepicker["_" + b + "Datepicker"].apply(d.datepicker, [this[0]].concat(g)) : this.each(function() {
            "string" === typeof b ? d.datepicker["_" + b + "Datepicker"].apply(d.datepicker, [this].concat(g)) : d.datepicker._attachDatepicker(this, b)
        })
    }
    ;
    d.datepicker = new E;
    d.datepicker.initialized = !1;
    d.datepicker.uuid = (new Date).getTime();
    d.datepicker.version = "1.12.1";
    d.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    var oa = !1;
    d(document).on("mouseup", function() {
        oa = !1
    });
    d.widget("ui.mouse", {
        version: "1.12.1",
        options: {
            cancel: "input, textarea, button, select, option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var b = this;
            this.element.on("mousedown." + this.widgetName, function(g) {
                return b._mouseDown(g)
            }).on("click." + this.widgetName, function(g) {
                if (!0 === d.data(g.target, b.widgetName + ".preventClickEvent"))
                    return d.removeData(g.target, b.widgetName + ".preventClickEvent"),
                    g.stopImmediatePropagation(),
                    !1
            });
            this.started = !1
        },
        _mouseDestroy: function() {
            this.element.off("." + this.widgetName);
            this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(b) {
            if (!oa) {
                this._mouseMoved = !1;
                this._mouseStarted && this._mouseUp(b);
                this._mouseDownEvent = b;
                var g = this
                  , u = 1 === b.which
                  , y = "string" === typeof this.options.cancel && b.target.nodeName ? d(b.target).closest(this.options.cancel).length : !1;
                if (!u || y || !this._mouseCapture(b))
                    return !0;
                this.mouseDelayMet = !this.options.delay;
                this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    g.mouseDelayMet = !0
                }, this.options.delay));
                if (this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = !1 !== this._mouseStart(b),
                !this._mouseStarted))
                    return b.preventDefault(),
                    !0;
                !0 === d.data(b.target, this.widgetName + ".preventClickEvent") && d.removeData(b.target, this.widgetName + ".preventClickEvent");
                this._mouseMoveDelegate = function(I) {
                    return g._mouseMove(I)
                }
                ;
                this._mouseUpDelegate = function(I) {
                    return g._mouseUp(I)
                }
                ;
                this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate);
                b.preventDefault();
                return oa = !0
            }
        },
        _mouseMove: function(b) {
            if (this._mouseMoved) {
                if (d.ui.ie && (!document.documentMode || 9 > document.documentMode) && !b.button)
                    return this._mouseUp(b);
                if (!b.which)
                    if (b.originalEvent.altKey || b.originalEvent.ctrlKey || b.originalEvent.metaKey || b.originalEvent.shiftKey)
                        this.ignoreMissingWhich = !0;
                    else if (!this.ignoreMissingWhich)
                        return this._mouseUp(b)
            }
            if (b.which || b.button)
                this._mouseMoved = !0;
            if (this._mouseStarted)
                return this._mouseDrag(b),
                b.preventDefault();
            this._mouseDistanceMet(b) && this._mouseDelayMet(b) && ((this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, b)) ? this._mouseDrag(b) : this._mouseUp(b));
            return !this._mouseStarted
        },
        _mouseUp: function(b) {
            this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate);
            this._mouseStarted && (this._mouseStarted = !1,
            b.target === this._mouseDownEvent.target && d.data(b.target, this.widgetName + ".preventClickEvent", !0),
            this._mouseStop(b));
            this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer),
            delete this._mouseDelayTimer);
            oa = this.ignoreMissingWhich = !1;
            b.preventDefault()
        },
        _mouseDistanceMet: function(b) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - b.pageX), Math.abs(this._mouseDownEvent.pageY - b.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    });
    d.widget("ui.slider", d.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            classes: {
                "ui-slider": "ui-corner-all",
                "ui-slider-handle": "ui-corner-all",
                "ui-slider-range": "ui-corner-all ui-widget-header"
            },
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        numPages: 5,
        _create: function() {
            this._mouseSliding = this._keySliding = !1;
            this._animateOff = !0;
            this._handleIndex = null;
            this._detectOrientation();
            this._mouseInit();
            this._calculateNewMax();
            this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content");
            this._refresh();
            this._animateOff = !1
        },
        _refresh: function() {
            this._createRange();
            this._createHandles();
            this._setupEvents();
            this._refreshValue()
        },
        _createHandles: function() {
            var b = this.options;
            var g = this.element.find(".ui-slider-handle")
              , u = [];
            var y = b.values && b.values.length || 1;
            g.length > y && (g.slice(y).remove(),
            g = g.slice(0, y));
            for (b = g.length; b < y; b++)
                u.push("<span tabindex='0'></span>");
            this.handles = g.add(d(u.join("")).appendTo(this.element));
            this._addClass(this.handles, "ui-slider-handle", "ui-state-default");
            this.handle = this.handles.eq(0);
            this.handles.each(function(I) {
                d(this).data("ui-slider-handle-index", I).attr("tabIndex", 0)
            })
        },
        _createRange: function() {
            var b = this.options;
            b.range ? (!0 === b.range && (b.values ? b.values.length && 2 !== b.values.length ? b.values = [b.values[0], b.values[0]] : d.isArray(b.values) && (b.values = b.values.slice(0)) : b.values = [this._valueMin(), this._valueMin()]),
            this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"),
            this.range.css({
                left: "",
                bottom: ""
            })) : (this.range = d("<div>").appendTo(this.element),
            this._addClass(this.range, "ui-slider-range")),
            "min" !== b.range && "max" !== b.range || this._addClass(this.range, "ui-slider-range-" + b.range)) : (this.range && this.range.remove(),
            this.range = null)
        },
        _setupEvents: function() {
            this._off(this.handles);
            this._on(this.handles, this._handleEvents);
            this._hoverable(this.handles);
            this._focusable(this.handles)
        },
        _destroy: function() {
            this.handles.remove();
            this.range && this.range.remove();
            this._mouseDestroy()
        },
        _mouseCapture: function(b) {
            var g, u, y = this, I = this.options;
            if (I.disabled)
                return !1;
            this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            };
            this.elementOffset = this.element.offset();
            var T = this._normValueFromMouse({
                x: b.pageX,
                y: b.pageY
            });
            var P = this._valueMax() - this._valueMin() + 1;
            this.handles.each(function(pa) {
                var qa = Math.abs(T - y.values(pa));
                if (P > qa || P === qa && (pa === y._lastChangedValue || y.values(pa) === I.min))
                    P = qa,
                    g = d(this),
                    u = pa
            });
            if (!1 === this._start(b, u))
                return !1;
            this._mouseSliding = !0;
            this._handleIndex = u;
            this._addClass(g, null, "ui-state-active");
            g.trigger("focus");
            var ia = g.offset();
            this._clickOffset = d(b.target).parents().addBack().is(".ui-slider-handle") ? {
                left: b.pageX - ia.left - g.width() / 2,
                top: b.pageY - ia.top - g.height() / 2 - (parseInt(g.css("borderTopWidth"), 10) || 0) - (parseInt(g.css("borderBottomWidth"), 10) || 0) + (parseInt(g.css("marginTop"), 10) || 0)
            } : {
                left: 0,
                top: 0
            };
            this.handles.hasClass("ui-state-hover") || this._slide(b, u, T);
            return this._animateOff = !0
        },
        _mouseStart: function() {
            return !0
        },
        _mouseDrag: function(b) {
            var g = this._normValueFromMouse({
                x: b.pageX,
                y: b.pageY
            });
            this._slide(b, this._handleIndex, g);
            return !1
        },
        _mouseStop: function(b) {
            this._removeClass(this.handles, null, "ui-state-active");
            this._mouseSliding = !1;
            this._stop(b, this._handleIndex);
            this._change(b, this._handleIndex);
            this._clickOffset = this._handleIndex = null;
            return this._animateOff = !1
        },
        _detectOrientation: function() {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function(b) {
            if ("horizontal" === this.orientation) {
                var g = this.elementSize.width;
                b = b.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)
            } else
                g = this.elementSize.height,
                b = b.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0);
            g = b / g;
            1 < g && (g = 1);
            0 > g && (g = 0);
            "vertical" === this.orientation && (g = 1 - g);
            b = this._valueMax() - this._valueMin();
            g = this._valueMin() + g * b;
            return this._trimAlignValue(g)
        },
        _uiHash: function(b, g, u) {
            var y = {
                handle: this.handles[b],
                handleIndex: b,
                value: void 0 !== g ? g : this.value()
            };
            this._hasMultipleValues() && (y.value = void 0 !== g ? g : this.values(b),
            y.values = u || this.values());
            return y
        },
        _hasMultipleValues: function() {
            return this.options.values && this.options.values.length
        },
        _start: function(b, g) {
            return this._trigger("start", b, this._uiHash(g))
        },
        _slide: function(b, g, u) {
            var y = this.value()
              , I = this.values();
            if (this._hasMultipleValues()) {
                var T = this.values(g ? 0 : 1);
                y = this.values(g);
                2 === this.options.values.length && !0 === this.options.range && (u = 0 === g ? Math.min(T, u) : Math.max(T, u));
                I[g] = u
            }
            u !== y && !1 !== this._trigger("slide", b, this._uiHash(g, u, I)) && (this._hasMultipleValues() ? this.values(g, u) : this.value(u))
        },
        _stop: function(b, g) {
            this._trigger("stop", b, this._uiHash(g))
        },
        _change: function(b, g) {
            this._keySliding || this._mouseSliding || (this._lastChangedValue = g,
            this._trigger("change", b, this._uiHash(g)))
        },
        value: function(b) {
            if (arguments.length)
                this.options.value = this._trimAlignValue(b),
                this._refreshValue(),
                this._change(null, 0);
            else
                return this._value()
        },
        values: function(b, g) {
            var u;
            if (1 < arguments.length)
                this.options.values[b] = this._trimAlignValue(g),
                this._refreshValue(),
                this._change(null, b);
            else if (arguments.length)
                if (d.isArray(arguments[0])) {
                    var y = this.options.values;
                    var I = arguments[0];
                    for (u = 0; u < y.length; u += 1)
                        y[u] = this._trimAlignValue(I[u]),
                        this._change(null, u);
                    this._refreshValue()
                } else
                    return this._hasMultipleValues() ? this._values(b) : this.value();
            else
                return this._values()
        },
        _setOption: function(b, g) {
            var u = 0;
            "range" === b && !0 === this.options.range && ("min" === g ? (this.options.value = this._values(0),
            this.options.values = null) : "max" === g && (this.options.value = this._values(this.options.values.length - 1),
            this.options.values = null));
            d.isArray(this.options.values) && (u = this.options.values.length);
            this._super(b, g);
            switch (b) {
            case "orientation":
                this._detectOrientation();
                this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation);
                this._refreshValue();
                this.options.range && this._refreshRange(g);
                this.handles.css("horizontal" === g ? "bottom" : "left", "");
                break;
            case "value":
                this._animateOff = !0;
                this._refreshValue();
                this._change(null, 0);
                this._animateOff = !1;
                break;
            case "values":
                this._animateOff = !0;
                this._refreshValue();
                for (b = u - 1; 0 <= b; b--)
                    this._change(null, b);
                this._animateOff = !1;
                break;
            case "step":
            case "min":
            case "max":
                this._animateOff = !0;
                this._calculateNewMax();
                this._refreshValue();
                this._animateOff = !1;
                break;
            case "range":
                this._animateOff = !0,
                this._refresh(),
                this._animateOff = !1
            }
        },
        _setOptionDisabled: function(b) {
            this._super(b);
            this._toggleClass(null, "ui-state-disabled", !!b)
        },
        _value: function() {
            var b = this.options.value;
            return b = this._trimAlignValue(b)
        },
        _values: function(b) {
            var g;
            if (arguments.length) {
                var u = this.options.values[b];
                return u = this._trimAlignValue(u)
            }
            if (this._hasMultipleValues()) {
                u = this.options.values.slice();
                for (g = 0; g < u.length; g += 1)
                    u[g] = this._trimAlignValue(u[g]);
                return u
            }
            return []
        },
        _trimAlignValue: function(b) {
            if (b <= this._valueMin())
                return this._valueMin();
            if (b >= this._valueMax())
                return this._valueMax();
            var g = 0 < this.options.step ? this.options.step : 1
              , u = (b - this._valueMin()) % g;
            b -= u;
            2 * Math.abs(u) >= g && (b += 0 < u ? g : -g);
            return parseFloat(b.toFixed(5))
        },
        _calculateNewMax: function() {
            var b = this.options.max
              , g = this._valueMin()
              , u = this.options.step;
            b = Math.round((b - g) / u) * u + g;
            b > this.options.max && (b -= u);
            this.max = parseFloat(b.toFixed(this._precision()))
        },
        _precision: function() {
            var b = this._precisionOf(this.options.step);
            null !== this.options.min && (b = Math.max(b, this._precisionOf(this.options.min)));
            return b
        },
        _precisionOf: function(b) {
            b = b.toString();
            var g = b.indexOf(".");
            return -1 === g ? 0 : b.length - g - 1
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.max
        },
        _refreshRange: function(b) {
            "vertical" === b && this.range.css({
                width: "",
                left: ""
            });
            "horizontal" === b && this.range.css({
                height: "",
                bottom: ""
            })
        },
        _refreshValue: function() {
            var b, g = this.options.range, u = this.options, y = this, I = this._animateOff ? !1 : u.animate, T = {};
            if (this._hasMultipleValues())
                this.handles.each(function(ha) {
                    qa = (y.values(ha) - y._valueMin()) / (y._valueMax() - y._valueMin()) * 100;
                    T["horizontal" === y.orientation ? "left" : "bottom"] = qa + "%";
                    d(this).stop(1, 1)[I ? "animate" : "css"](T, u.animate);
                    if (!0 === y.options.range)
                        if ("horizontal" === y.orientation) {
                            if (0 === ha)
                                y.range.stop(1, 1)[I ? "animate" : "css"]({
                                    left: qa + "%"
                                }, u.animate);
                            if (1 === ha)
                                y.range[I ? "animate" : "css"]({
                                    width: qa - b + "%"
                                }, {
                                    queue: !1,
                                    duration: u.animate
                                })
                        } else {
                            if (0 === ha)
                                y.range.stop(1, 1)[I ? "animate" : "css"]({
                                    bottom: qa + "%"
                                }, u.animate);
                            if (1 === ha)
                                y.range[I ? "animate" : "css"]({
                                    height: qa - b + "%"
                                }, {
                                    queue: !1,
                                    duration: u.animate
                                })
                        }
                    b = qa
                });
            else {
                var P = this.value();
                var ia = this._valueMin();
                var pa = this._valueMax();
                var qa = pa !== ia ? (P - ia) / (pa - ia) * 100 : 0;
                T["horizontal" === this.orientation ? "left" : "bottom"] = qa + "%";
                this.handle.stop(1, 1)[I ? "animate" : "css"](T, u.animate);
                if ("min" === g && "horizontal" === this.orientation)
                    this.range.stop(1, 1)[I ? "animate" : "css"]({
                        width: qa + "%"
                    }, u.animate);
                if ("max" === g && "horizontal" === this.orientation)
                    this.range.stop(1, 1)[I ? "animate" : "css"]({
                        width: 100 - qa + "%"
                    }, u.animate);
                if ("min" === g && "vertical" === this.orientation)
                    this.range.stop(1, 1)[I ? "animate" : "css"]({
                        height: qa + "%"
                    }, u.animate);
                if ("max" === g && "vertical" === this.orientation)
                    this.range.stop(1, 1)[I ? "animate" : "css"]({
                        height: 100 - qa + "%"
                    }, u.animate)
            }
        },
        _handleEvents: {
            keydown: function(b) {
                var g, u = d(b.target).data("ui-slider-handle-index");
                switch (b.keyCode) {
                case d.ui.keyCode.HOME:
                case d.ui.keyCode.END:
                case d.ui.keyCode.PAGE_UP:
                case d.ui.keyCode.PAGE_DOWN:
                case d.ui.keyCode.UP:
                case d.ui.keyCode.RIGHT:
                case d.ui.keyCode.DOWN:
                case d.ui.keyCode.LEFT:
                    if (b.preventDefault(),
                    !this._keySliding) {
                        this._keySliding = !0;
                        this._addClass(d(b.target), null, "ui-state-active");
                        var y = this._start(b, u);
                        if (!1 === y)
                            return
                    }
                }
                var I = this.options.step;
                y = this._hasMultipleValues() ? g = this.values(u) : g = this.value();
                switch (b.keyCode) {
                case d.ui.keyCode.HOME:
                    g = this._valueMin();
                    break;
                case d.ui.keyCode.END:
                    g = this._valueMax();
                    break;
                case d.ui.keyCode.PAGE_UP:
                    g = this._trimAlignValue(y + (this._valueMax() - this._valueMin()) / this.numPages);
                    break;
                case d.ui.keyCode.PAGE_DOWN:
                    g = this._trimAlignValue(y - (this._valueMax() - this._valueMin()) / this.numPages);
                    break;
                case d.ui.keyCode.UP:
                case d.ui.keyCode.RIGHT:
                    if (y === this._valueMax())
                        return;
                    g = this._trimAlignValue(y + I);
                    break;
                case d.ui.keyCode.DOWN:
                case d.ui.keyCode.LEFT:
                    if (y === this._valueMin())
                        return;
                    g = this._trimAlignValue(y - I)
                }
                this._slide(b, u, g)
            },
            keyup: function(b) {
                var g = d(b.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1,
                this._stop(b, g),
                this._change(b, g),
                this._removeClass(d(b.target), null, "ui-state-active"))
            }
        }
    });
    d.widget("ui.tooltip", {
        version: "1.12.1",
        options: {
            classes: {
                "ui-tooltip": "ui-corner-all ui-widget-shadow"
            },
            content: function() {
                var b = d(this).attr("title") || "";
                return d("<a>").text(b).html()
            },
            hide: !0,
            items: "[title]:not([disabled])",
            position: {
                my: "left top+15",
                at: "left bottom",
                collision: "flipfit flip"
            },
            show: !0,
            track: !1,
            close: null,
            open: null
        },
        _addDescribedBy: function(b, g) {
            var u = (b.attr("aria-describedby") || "").split(/\s+/);
            u.push(g);
            b.data("ui-tooltip-id", g).attr("aria-describedby", d.trim(u.join(" ")))
        },
        _removeDescribedBy: function(b) {
            var g = b.data("ui-tooltip-id")
              , u = (b.attr("aria-describedby") || "").split(/\s+/);
            g = d.inArray(g, u);
            -1 !== g && u.splice(g, 1);
            b.removeData("ui-tooltip-id");
            (u = d.trim(u.join(" "))) ? b.attr("aria-describedby", u) : b.removeAttr("aria-describedby")
        },
        _create: function() {
            this._on({
                mouseover: "open",
                focusin: "open"
            });
            this.tooltips = {};
            this.parents = {};
            this.liveRegion = d("<div>").attr({
                role: "log",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).appendTo(this.document[0].body);
            this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible");
            this.disabledTitles = d([])
        },
        _setOption: function(b, g) {
            var u = this;
            this._super(b, g);
            "content" === b && d.each(this.tooltips, function(y, I) {
                u._updateContent(I.element)
            })
        },
        _setOptionDisabled: function(b) {
            this[b ? "_disable" : "_enable"]()
        },
        _disable: function() {
            var b = this;
            d.each(this.tooltips, function(g, u) {
                g = d.Event("blur");
                g.target = g.currentTarget = u.element[0];
                b.close(g, !0)
            });
            this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function() {
                var g = d(this);
                if (g.is("[title]"))
                    return g.data("ui-tooltip-title", g.attr("title")).removeAttr("title")
            }))
        },
        _enable: function() {
            this.disabledTitles.each(function() {
                var b = d(this);
                b.data("ui-tooltip-title") && b.attr("title", b.data("ui-tooltip-title"))
            });
            this.disabledTitles = d([])
        },
        open: function(b) {
            var g = this
              , u = d(b ? b.target : this.element).closest(this.options.items);
            u.length && !u.data("ui-tooltip-id") && (u.attr("title") && u.data("ui-tooltip-title", u.attr("title")),
            u.data("ui-tooltip-open", !0),
            b && "mouseover" === b.type && u.parents().each(function() {
                var y = d(this);
                if (y.data("ui-tooltip-open")) {
                    var I = d.Event("blur");
                    I.target = I.currentTarget = this;
                    g.close(I, !0)
                }
                y.attr("title") && (y.uniqueId(),
                g.parents[this.id] = {
                    element: this,
                    title: y.attr("title")
                },
                y.attr("title", ""))
            }),
            this._registerCloseHandlers(b, u),
            this._updateContent(u, b))
        },
        _updateContent: function(b, g) {
            var u = this.options.content;
            var y = this
              , I = g ? g.type : null;
            if ("string" === typeof u || u.nodeType || u.jquery)
                return this._open(g, b, u);
            (u = u.call(b[0], function(T) {
                y._delay(function() {
                    b.data("ui-tooltip-open") && (g && (g.type = I),
                    this._open(g, b, T))
                })
            })) && this._open(g, b, u)
        },
        _open: function(b, g, u) {
            function y(pa) {
                T.of = pa;
                P.is(":hidden") || P.position(T)
            }
            var I, T = d.extend({}, this.options.position);
            if (u)
                if (I = this._find(g))
                    I.tooltip.find(".ui-tooltip-content").html(u);
                else {
                    g.is("[title]") && (b && "mouseover" === b.type ? g.attr("title", "") : g.removeAttr("title"));
                    I = this._tooltip(g);
                    var P = I.tooltip;
                    this._addDescribedBy(g, P.attr("id"));
                    P.find(".ui-tooltip-content").html(u);
                    this.liveRegion.children().hide();
                    u = d("<div>").html(P.find(".ui-tooltip-content").html());
                    u.removeAttr("name").find("[name]").removeAttr("name");
                    u.removeAttr("id").find("[id]").removeAttr("id");
                    u.appendTo(this.liveRegion);
                    this.options.track && b && /^mouse/.test(b.type) ? (this._on(this.document, {
                        mousemove: y
                    }),
                    y(b)) : P.position(d.extend({
                        of: g
                    }, this.options.position));
                    P.hide();
                    this._show(P, this.options.show);
                    if (this.options.track && this.options.show && this.options.show.delay)
                        var ia = this.delayedShow = setInterval(function() {
                            P.is(":visible") && (y(T.of),
                            clearInterval(ia))
                        }, d.fx.interval);
                    this._trigger("open", b, {
                        tooltip: P
                    })
                }
        },
        _registerCloseHandlers: function(b, g) {
            var u = {
                keyup: function(y) {
                    y.keyCode === d.ui.keyCode.ESCAPE && (y = d.Event(y),
                    y.currentTarget = g[0],
                    this.close(y, !0))
                }
            };
            g[0] !== this.element[0] && (u.remove = function() {
                this._removeTooltip(this._find(g).tooltip)
            }
            );
            b && "mouseover" !== b.type || (u.mouseleave = "close");
            b && "focusin" !== b.type || (u.focusout = "close");
            this._on(!0, g, u)
        },
        close: function(b) {
            var g = this
              , u = d(b ? b.currentTarget : this.element)
              , y = this._find(u);
            if (y) {
                var I = y.tooltip;
                y.closing || (clearInterval(this.delayedShow),
                u.data("ui-tooltip-title") && !u.attr("title") && u.attr("title", u.data("ui-tooltip-title")),
                this._removeDescribedBy(u),
                y.hiding = !0,
                I.stop(!0),
                this._hide(I, this.options.hide, function() {
                    g._removeTooltip(d(this))
                }),
                u.removeData("ui-tooltip-open"),
                this._off(u, "mouseleave focusout keyup"),
                u[0] !== this.element[0] && this._off(u, "remove"),
                this._off(this.document, "mousemove"),
                b && "mouseleave" === b.type && d.each(this.parents, function(T, P) {
                    d(P.element).attr("title", P.title);
                    delete g.parents[T]
                }),
                y.closing = !0,
                this._trigger("close", b, {
                    tooltip: I
                }),
                y.hiding || (y.closing = !1))
            } else
                u.removeData("ui-tooltip-open")
        },
        _tooltip: function(b) {
            var g = d("<div>").attr("role", "tooltip")
              , u = d("<div>").appendTo(g)
              , y = g.uniqueId().attr("id");
            this._addClass(u, "ui-tooltip-content");
            this._addClass(g, "ui-tooltip", "ui-widget ui-widget-content");
            g.appendTo(this._appendTo(b));
            return this.tooltips[y] = {
                element: b,
                tooltip: g
            }
        },
        _find: function(b) {
            return (b = b.data("ui-tooltip-id")) ? this.tooltips[b] : null
        },
        _removeTooltip: function(b) {
            b.remove();
            delete this.tooltips[b.attr("id")]
        },
        _appendTo: function(b) {
            b = b.closest(".ui-front, dialog");
            b.length || (b = this.document[0].body);
            return b
        },
        _destroy: function() {
            var b = this;
            d.each(this.tooltips, function(g, u) {
                var y = d.Event("blur");
                u = u.element;
                y.target = y.currentTarget = u[0];
                b.close(y, !0);
                d("#" + g).remove();
                u.data("ui-tooltip-title") && (u.attr("title") || u.attr("title", u.data("ui-tooltip-title")),
                u.removeData("ui-tooltip-title"))
            });
            this.liveRegion.remove()
        }
    });
    !1 !== d.uiBackCompat && d.widget("ui.tooltip", d.ui.tooltip, {
        options: {
            tooltipClass: null
        },
        _tooltip: function() {
            var b = this._superApply(arguments);
            this.options.tooltipClass && b.tooltip.addClass(this.options.tooltipClass);
            return b
        }
    })
});
(function(d) {
    "function" === typeof define && define.amd ? define(["../widgets/datepicker"], d) : d(jQuery.datepicker)
}
)(function(d) {
    d.regional.lt = {
        closeText: "U\u017edaryti",
        prevText: "&#x3C;Atgal",
        nextText: "Pirmyn&#x3E;",
        currentText: "\u0160iandien",
        monthNames: "Sausis Vasaris Kovas Balandis Gegu\u017e\u0117 Bir\u017eelis Liepa Rugpj\u016btis Rugs\u0117jis Spalis Lapkritis Gruodis".split(" "),
        monthNamesShort: "Sau Vas Kov Bal Geg Bir Lie Rugp Rugs Spa Lap Gru".split(" "),
        dayNames: "sekmadienis pirmadienis antradienis tre\u010diadienis ketvirtadienis penktadienis \u0161e\u0161tadienis".split(" "),
        dayNamesShort: "sek pir ant tre ket pen \u0161e\u0161".split(" "),
        dayNamesMin: "Se Pr An Tr Ke Pe \u0160e".split(" "),
        weekHeader: "SAV",
        dateFormat: "yy-mm-dd",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !0,
        yearSuffix: ""
    };
    d.setDefaults(d.regional.lt);
    return d.regional.lt
});
/*
 jQuery UI Touch Punch 0.2.3

 Copyright 2011?2014, Dave Furfero
 Dual licensed under the MIT or GPL Version 2 licenses.

 Depends:
  jquery.ui.widget.js
  jquery.ui.mouse.js
*/
(function(d) {
    function k(ja, Ea) {
        if (!(1 < ja.originalEvent.touches.length)) {
            ja.preventDefault();
            var Fa = ja.originalEvent.changedTouches[0]
              , oa = document.createEvent("MouseEvents");
            oa.initMouseEvent(Ea, !0, !0, window, 1, Fa.screenX, Fa.screenY, Fa.clientX, Fa.clientY, !1, !1, !1, !1, 0, null);
            ja.target.dispatchEvent(oa)
        }
    }
    d.support.touch = "ontouchend"in document;
    if (d.support.touch) {
        var E = d.ui.mouse.prototype, R = E._mouseInit, H = E._mouseDestroy, M;
        E._touchStart = function(ja) {
            !M && this._mouseCapture(ja.originalEvent.changedTouches[0]) && (M = !0,
            this._touchMoved = !1,
            k(ja, "mouseover"),
            k(ja, "mousemove"),
            k(ja, "mousedown"))
        }
        ;
        E._touchMove = function(ja) {
            M && (this._touchMoved = !0,
            k(ja, "mousemove"))
        }
        ;
        E._touchEnd = function(ja) {
            M && (k(ja, "mouseup"),
            k(ja, "mouseout"),
            this._touchMoved || k(ja, "click"),
            M = !1)
        }
        ;
        E._mouseInit = function() {
            this.element.bind({
                touchstart: d.proxy(this, "_touchStart"),
                touchmove: d.proxy(this, "_touchMove"),
                touchend: d.proxy(this, "_touchEnd")
            });
            R.call(this)
        }
        ;
        E._mouseDestroy = function() {
            this.element.unbind({
                touchstart: d.proxy(this, "_touchStart"),
                touchmove: d.proxy(this, "_touchMove"),
                touchend: d.proxy(this, "_touchEnd")
            });
            H.call(this)
        }
    }
}
)(jQuery);
/*
 PhotoSwipe - v4.1.3 - 2019-01-08
 http://photoswipe.com
 Copyright (c) 2019 Dmitry Semenov; */
(function(d, k) {
    "function" === typeof define && define.amd ? define(k) : "object" === typeof exports ? module.exports = k() : d.PhotoSwipe = k()
}
)(this, function() {
    return function(d, k, E, R) {
        var H = {
            features: null,
            bind: function(p, A, G, X) {
                X = (X ? "remove" : "add") + "EventListener";
                A = A.split(" ");
                for (var Ca = 0; Ca < A.length; Ca++)
                    if (A[Ca])
                        p[X](A[Ca], G, !1)
            },
            isArray: function(p) {
                return p instanceof Array
            },
            createEl: function(p, A) {
                A = document.createElement(A || "div");
                p && (A.className = p);
                return A
            },
            getScrollY: function() {
                var p = window.pageYOffset;
                return void 0 !== p ? p : document.documentElement.scrollTop
            },
            unbind: function(p, A, G) {
                H.bind(p, A, G, !0)
            },
            removeClass: function(p, A) {
                p.className = p.className.replace(new RegExp("(\\s|^)" + A + "(\\s|$)"), " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
            },
            addClass: function(p, A) {
                H.hasClass(p, A) || (p.className += (p.className ? " " : "") + A)
            },
            hasClass: function(p, A) {
                return p.className && (new RegExp("(^|\\s)" + A + "(\\s|$)")).test(p.className)
            },
            getChildByClass: function(p, A) {
                for (p = p.firstChild; p; ) {
                    if (H.hasClass(p, A))
                        return p;
                    p = p.nextSibling
                }
            },
            arraySearch: function(p, A, G) {
                for (var X = p.length; X--; )
                    if (p[X][G] === A)
                        return X;
                return -1
            },
            extend: function(p, A, G) {
                for (var X in A)
                    !A.hasOwnProperty(X) || G && p.hasOwnProperty(X) || (p[X] = A[X])
            },
            easing: {
                sine: {
                    out: function(p) {
                        return Math.sin(Math.PI / 2 * p)
                    },
                    inOut: function(p) {
                        return -(Math.cos(Math.PI * p) - 1) / 2
                    }
                },
                cubic: {
                    out: function(p) {
                        return --p * p * p + 1
                    }
                }
            },
            detectFeatures: function() {
                if (H.features)
                    return H.features;
                var p = H.createEl().style
                  , A = ""
                  , G = {};
                G.oldIE = document.all && !document.addEventListener;
                G.touch = "ontouchstart"in window;
                window.requestAnimationFrame && (G.raf = window.requestAnimationFrame,
                G.caf = window.cancelAnimationFrame);
                G.pointerEvent = !!window.PointerEvent || navigator.msPointerEnabled;
                if (!G.pointerEvent) {
                    A = navigator.userAgent;
                    if (/iP(hone|od)/.test(navigator.platform)) {
                        var X = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                        X && 0 < X.length && (X = parseInt(X[1], 10),
                        1 <= X && 8 > X && (G.isOldIOSPhone = !0))
                    }
                    X = (X = A.match(/Android\s([0-9\.]*)/)) ? X[1] : 0;
                    X = parseFloat(X);
                    1 <= X && (4.4 > X && (G.isOldAndroid = !0),
                    G.androidVersion = X);
                    G.isMobileOpera = /opera mini|opera mobi/i.test(A)
                }
                X = ["transform", "perspective", "animationName"];
                for (var Ca = ["", "webkit", "Moz", "ms", "O"], Aa, Ya, Kb = 0; 4 > Kb; Kb++) {
                    A = Ca[Kb];
                    for (var xb = 0; 3 > xb; xb++)
                        Aa = X[xb],
                        Ya = A + (A ? Aa.charAt(0).toUpperCase() + Aa.slice(1) : Aa),
                        !G[Aa] && Ya in p && (G[Aa] = Ya);
                    A && !G.raf && (A = A.toLowerCase(),
                    G.raf = window[A + "RequestAnimationFrame"],
                    G.raf && (G.caf = window[A + "CancelAnimationFrame"] || window[A + "CancelRequestAnimationFrame"]))
                }
                if (!G.raf) {
                    var Sb = 0;
                    G.raf = function(Nc) {
                        var yc = (new Date).getTime()
                          , Lc = Math.max(0, 16 - (yc - Sb))
                          , Mc = window.setTimeout(function() {
                            Nc(yc + Lc)
                        }, Lc);
                        Sb = yc + Lc;
                        return Mc
                    }
                    ;
                    G.caf = function(Nc) {
                        clearTimeout(Nc)
                    }
                }
                G.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect;
                return H.features = G
            }
        };
        H.detectFeatures();
        H.features.oldIE && (H.bind = function(p, A, G, X) {
            A = A.split(" ");
            for (var Ca = (X ? "detach" : "attach") + "Event", Aa, Ya = function() {
                G.handleEvent.call(G)
            }, Kb = 0; Kb < A.length; Kb++)
                if (Aa = A[Kb])
                    if ("object" === typeof G && G.handleEvent) {
                        if (!X)
                            G["oldIE" + Aa] = Ya;
                        else if (!G["oldIE" + Aa])
                            return !1;
                        p[Ca]("on" + Aa, G["oldIE" + Aa])
                    } else
                        p[Ca]("on" + Aa, G)
        }
        );
        var M = this
          , ja = {
            allowPanToNext: !0,
            spacing: .12,
            bgOpacity: 1,
            mouseUsed: !1,
            loop: !0,
            pinchToClose: !0,
            closeOnScroll: !0,
            closeOnVerticalDrag: !0,
            verticalDragRange: .75,
            hideAnimationDuration: 333,
            showAnimationDuration: 333,
            showHideOpacity: !1,
            focus: !0,
            escKey: !0,
            arrowKeys: !0,
            mainScrollEndFriction: .35,
            panEndFriction: .35,
            isClickableElement: function(p) {
                return "A" === p.tagName
            },
            getDoubleTapZoom: function(p, A) {
                return p ? 1 : .7 > A.initialZoomLevel ? 1 : 1.33
            },
            maxSpreadZoom: 1.33,
            modal: !0,
            scaleMode: "fit"
        };
        H.extend(ja, R);
        var Ea = function() {
            return {
                x: 0,
                y: 0
            }
        }, Fa, oa, b, g, u, y, I = Ea(), T = Ea(), P = Ea(), ia, pa, qa, ha = {}, V, aa, ma, Ja, Ka, Na, na = 0, Ha = {}, xa = Ea(), Oa, jb, lb = 0, Ua, gb, vb, Fb, Hb, Cb, Ib = !0, eb, Va = [], fb, fa, ua, Wa, Sa, Ga, n, Rb = {}, ac = !1, pc, Wb = function(p, A) {
            H.extend(M, A.publicMethods);
            Va.push(p)
        }, ic = function(p) {
            var A = wb();
            return p > A - 1 ? p - A : 0 > p ? A + p : p
        }, Lb = {}, yb = function(p, A) {
            Lb[p] || (Lb[p] = []);
            return Lb[p].push(A)
        }, Za = function(p) {
            var A = Lb[p];
            if (A) {
                var G = Array.prototype.slice.call(arguments);
                G.shift();
                for (var X = 0; X < A.length; X++)
                    A[X].apply(M, G)
            }
        }, fc = function() {
            return (new Date).getTime()
        }, Ub = function(p) {
            Ec = p;
            M.bg.style.opacity = p * ja.bgOpacity
        }, S = function(p, A, G, X, Ca) {
            if (!ac || Ca && Ca !== M.currItem)
                X /= Ca ? Ca.fitRatio : M.currItem.fitRatio;
            p[Hb] = ma + A + "px, " + G + "px" + Ja + " scale(" + X + ")"
        }, Q = function(p) {
            Dc && (p && (V > M.currItem.fitRatio ? ac || (ab(M.currItem, !1, !0),
            ac = !0) : ac && (ab(M.currItem),
            ac = !1)),
            S(Dc, P.x, P.y, V))
        }, q = function(p) {
            p.container && S(p.container.style, p.initialPosition.x, p.initialPosition.y, p.initialZoomLevel, p)
        }, v = function(p, A) {
            A[Hb] = ma + p + "px, 0px" + Ja
        }, F = function(p, A) {
            if (!ja.loop && A) {
                A = g + (xa.x * na - p) / xa.x;
                var G = Math.round(p - Cc.x);
                if (0 > A && 0 < G || A >= wb() - 1 && 0 > G)
                    p = Cc.x + G * ja.mainScrollEndFriction
            }
            Cc.x = p;
            v(p, u)
        }, ba = function(p, A) {
            var G = Qc[p] - Ha[p];
            return T[p] + I[p] + G - A / aa * G
        }, ca = function(p, A) {
            p.x = A.x;
            p.y = A.y;
            A.id && (p.id = A.id)
        }, va = function(p) {
            p.x = Math.round(p.x);
            p.y = Math.round(p.y)
        }, Gb = null, Ab = function() {
            Gb && (H.unbind(document, "mousemove", Ab),
            H.addClass(d, "pswp--has_mouse"),
            ja.mouseUsed = !0,
            Za("mouseUsed"));
            Gb = setTimeout(function() {
                Gb = null
            }, 100)
        }, Yb = function(p, A) {
            p = Ta(M.currItem, ha, p);
            A && (db = p);
            return p
        }, $b = function(p) {
            p || (p = M.currItem);
            return p.initialZoomLevel
        }, Gc = function(p) {
            p || (p = M.currItem);
            return 0 < p.w ? ja.maxSpreadZoom : 1
        }, Vc = function(p, A, G, X) {
            if (X === M.currItem.initialZoomLevel)
                return G[p] = M.currItem.initialPosition[p],
                !0;
            G[p] = ba(p, X);
            return G[p] > A.min[p] ? (G[p] = A.min[p],
            !0) : G[p] < A.max[p] ? (G[p] = A.max[p],
            !0) : !1
        }, dd = function() {
            Hb ? (ma = "translate" + (n.perspective && !eb ? "3d(" : "("),
            Ja = n.perspective ? ", 0px)" : ")") : (Hb = "left",
            H.addClass(d, "pswp--ie"),
            v = function(p, A) {
                A.left = p + "px"
            }
            ,
            q = function(p) {
                var A = 1 < p.fitRatio ? 1 : p.fitRatio
                  , G = p.container.style
                  , X = A * p.h;
                G.width = A * p.w + "px";
                G.height = X + "px";
                G.left = p.initialPosition.x + "px";
                G.top = p.initialPosition.y + "px"
            }
            ,
            Q = function() {
                if (Dc) {
                    var p = Dc
                      , A = M.currItem
                      , G = 1 < A.fitRatio ? 1 : A.fitRatio
                      , X = G * A.h;
                    p.width = G * A.w + "px";
                    p.height = X + "px";
                    p.left = P.x + "px";
                    p.top = P.y + "px"
                }
            }
            )
        }, a = function(p) {
            var A = "";
            ja.escKey && 27 === p.keyCode ? A = "close" : ja.arrowKeys && (37 === p.keyCode ? A = "prev" : 39 === p.keyCode && (A = "next"));
            !A || p.ctrlKey || p.altKey || p.shiftKey || p.metaKey || (p.preventDefault ? p.preventDefault() : p.returnValue = !1,
            M[A]())
        }, e = function(p) {
            p && (Oc || tc || lc || Mb) && (p.preventDefault(),
            p.stopPropagation())
        }, h = function() {
            M.setScrollOffset(0, H.getScrollY())
        }, l = {}, t = 0, z = function(p) {
            l[p] && (l[p].raf && fa(l[p].raf),
            t--,
            delete l[p])
        }, x = function(p) {
            l[p] && z(p);
            l[p] || (t++,
            l[p] = {})
        }, D = function() {
            for (var p in l)
                l.hasOwnProperty(p) && z(p)
        }, L = function(p, A, G, X, Ca, Aa, Ya) {
            var Kb = fc(), xb;
            x(p);
            var Sb = function() {
                l[p] && (xb = fc() - Kb,
                xb >= X ? (z(p),
                Aa(G),
                Ya && Ya()) : (Aa((G - A) * Ca(xb / X) + A),
                l[p].raf = fb(Sb)))
            };
            Sb()
        }, Y = {
            shout: Za,
            listen: yb,
            viewportSize: ha,
            options: ja,
            isMainScrollAnimating: function() {
                return lc
            },
            getZoomLevel: function() {
                return V
            },
            getCurrentIndex: function() {
                return g
            },
            isDragging: function() {
                return Vb
            },
            isZooming: function() {
                return uc
            },
            setScrollOffset: function(p, A) {
                Ha.x = p;
                Ga = Ha.y = A;
                Za("updateScrollOffset", Ha)
            },
            applyZoomPan: function(p, A, G, X) {
                P.x = A;
                P.y = G;
                V = p;
                Q(X)
            },
            init: function() {
                if (!Fa && !oa) {
                    M.framework = H;
                    M.template = d;
                    M.bg = H.getChildByClass(d, "pswp__bg");
                    ua = d.className;
                    Fa = !0;
                    n = H.detectFeatures();
                    fb = n.raf;
                    fa = n.caf;
                    Hb = n.transform;
                    Sa = n.oldIE;
                    M.scrollWrap = H.getChildByClass(d, "pswp__scroll-wrap");
                    M.container = H.getChildByClass(M.scrollWrap, "pswp__container");
                    u = M.container.style;
                    M.itemHolders = Oa = [{
                        el: M.container.children[0],
                        wrap: 0,
                        index: -1
                    }, {
                        el: M.container.children[1],
                        wrap: 0,
                        index: -1
                    }, {
                        el: M.container.children[2],
                        wrap: 0,
                        index: -1
                    }];
                    Oa[0].el.style.display = Oa[2].el.style.display = "none";
                    dd();
                    qa = {
                        resize: M.updateSize,
                        orientationchange: function() {
                            clearTimeout(pc);
                            pc = setTimeout(function() {
                                ha.x !== M.scrollWrap.clientWidth && M.updateSize()
                            }, 500)
                        },
                        scroll: h,
                        keydown: a,
                        click: e
                    };
                    var p = n.isOldIOSPhone || n.isOldAndroid || n.isMobileOpera;
                    n.animationName && n.transform && !p || (ja.showAnimationDuration = ja.hideAnimationDuration = 0);
                    for (p = 0; p < Va.length; p++)
                        M["init" + Va[p]]();
                    k && (M.ui = new k(M,H)).init();
                    Za("firstUpdate");
                    g = g || ja.index || 0;
                    if (isNaN(g) || 0 > g || g >= wb())
                        g = 0;
                    M.currItem = ub(g);
                    if (n.isOldIOSPhone || n.isOldAndroid)
                        Ib = !1;
                    d.setAttribute("aria-hidden", "false");
                    ja.modal && (Ib ? d.style.position = "fixed" : (d.style.position = "absolute",
                    d.style.top = H.getScrollY() + "px"));
                    void 0 === Ga && (Za("initialLayout"),
                    Ga = Wa = H.getScrollY());
                    p = "pswp--open ";
                    ja.mainClass && (p += ja.mainClass + " ");
                    ja.showHideOpacity && (p += "pswp--animate_opacity ");
                    p += eb ? "pswp--touch" : "pswp--notouch";
                    p += n.animationName ? " pswp--css_animation" : "";
                    p += n.svg ? " pswp--svg" : "";
                    H.addClass(d, p);
                    M.updateSize();
                    y = -1;
                    lb = null;
                    for (p = 0; 3 > p; p++)
                        v((p + y) * xa.x, Oa[p].el.style);
                    Sa || H.bind(M.scrollWrap, pa, M);
                    yb("initialZoomInEnd", function() {
                        M.setContent(Oa[0], g - 1);
                        M.setContent(Oa[2], g + 1);
                        Oa[0].el.style.display = Oa[2].el.style.display = "block";
                        ja.focus && d.focus();
                        H.bind(document, "keydown", M);
                        n.transform && H.bind(M.scrollWrap, "click", M);
                        ja.mouseUsed || H.bind(document, "mousemove", Ab);
                        H.bind(window, "resize scroll orientationchange", M);
                        Za("bindEvents")
                    });
                    M.setContent(Oa[1], g);
                    M.updateCurrItem();
                    Za("afterInit");
                    Ib || (Ka = setInterval(function() {
                        t || Vb || uc || V !== M.currItem.initialZoomLevel || M.updateSize()
                    }, 1E3));
                    H.addClass(d, "pswp--visible")
                }
            },
            close: function() {
                Fa && (Fa = !1,
                oa = !0,
                Za("close"),
                H.unbind(window, "resize scroll orientationchange", M),
                H.unbind(window, "scroll", qa.scroll),
                H.unbind(document, "keydown", M),
                H.unbind(document, "mousemove", Ab),
                n.transform && H.unbind(M.scrollWrap, "click", M),
                Vb && H.unbind(window, ia, M),
                clearTimeout(pc),
                Za("unbindEvents"),
                W(M.currItem, null, !0, M.destroy))
            },
            destroy: function() {
                Za("destroy");
                O && clearTimeout(O);
                d.setAttribute("aria-hidden", "true");
                d.className = ua;
                Ka && clearInterval(Ka);
                H.unbind(M.scrollWrap, pa, M);
                H.unbind(window, "scroll", M);
                bd();
                D();
                Lb = null
            },
            panTo: function(p, A, G) {
                G || (p > db.min.x ? p = db.min.x : p < db.max.x && (p = db.max.x),
                A > db.min.y ? A = db.min.y : A < db.max.y && (A = db.max.y));
                P.x = p;
                P.y = A;
                Q()
            },
            handleEvent: function(p) {
                p = p || window.event;
                if (qa[p.type])
                    qa[p.type](p)
            },
            goTo: function(p) {
                p = ic(p);
                var A = p - g;
                lb = A;
                g = p;
                M.currItem = ub(g);
                na -= A;
                F(xa.x * na);
                D();
                lc = !1;
                M.updateCurrItem()
            },
            next: function() {
                M.goTo(g + 1)
            },
            prev: function() {
                M.goTo(g - 1)
            },
            updateCurrZoomItem: function(p) {
                p && Za("beforeChange", 0);
                if (Oa[1].el.children.length) {
                    var A = Oa[1].el.children[0];
                    Dc = H.hasClass(A, "pswp__zoom-wrap") ? A.style : null
                } else
                    Dc = null;
                db = M.currItem.bounds;
                aa = V = M.currItem.initialZoomLevel;
                P.x = db.center.x;
                P.y = db.center.y;
                p && Za("afterChange")
            },
            invalidateCurrItems: function() {
                Na = !0;
                for (var p = 0; 3 > p; p++)
                    Oa[p].item && (Oa[p].item.needsUpdate = !0)
            },
            updateCurrItem: function(p) {
                if (0 !== lb) {
                    var A = Math.abs(lb);
                    if (!(p && 2 > A)) {
                        M.currItem = ub(g);
                        ac = !1;
                        Za("beforeChange", lb);
                        3 <= A && (y += lb + (0 < lb ? -3 : 3),
                        A = 3);
                        for (var G = 0; G < A; G++)
                            0 < lb ? (p = Oa.shift(),
                            Oa[2] = p,
                            y++,
                            v((y + 2) * xa.x, p.el.style),
                            M.setContent(p, g - A + G + 1 + 1)) : (p = Oa.pop(),
                            Oa.unshift(p),
                            y--,
                            v(y * xa.x, p.el.style),
                            M.setContent(p, g + A - G - 1 - 1));
                        Dc && 1 === Math.abs(lb) && (A = ub(jb),
                        A.initialZoomLevel !== V && (Ta(A, ha),
                        ab(A),
                        q(A)));
                        lb = 0;
                        M.updateCurrZoomItem();
                        jb = g;
                        Za("afterChange")
                    }
                }
            },
            updateSize: function(p) {
                if (!Ib && ja.modal) {
                    var A = H.getScrollY();
                    Ga !== A && (d.style.top = A + "px",
                    Ga = A);
                    if (!p && Rb.x === window.innerWidth && Rb.y === window.innerHeight)
                        return;
                    Rb.x = window.innerWidth;
                    Rb.y = window.innerHeight;
                    d.style.height = Rb.y + "px"
                }
                ha.x = M.scrollWrap.clientWidth;
                ha.y = M.scrollWrap.clientHeight;
                h();
                xa.x = ha.x + Math.round(ha.x * ja.spacing);
                xa.y = ha.y;
                F(xa.x * na);
                Za("beforeResize");
                if (void 0 !== y) {
                    for (var G, X = 0; 3 > X; X++)
                        p = Oa[X],
                        v((X + y) * xa.x, p.el.style),
                        G = g + X - 1,
                        ja.loop && 2 < wb() && (G = ic(G)),
                        (A = ub(G)) && (Na || A.needsUpdate || !A.bounds) ? (M.cleanSlide(A),
                        M.setContent(p, G),
                        1 === X && (M.currItem = A,
                        M.updateCurrZoomItem(!0)),
                        A.needsUpdate = !1) : -1 === p.index && 0 <= G && M.setContent(p, G),
                        A && A.container && (Ta(A, ha),
                        ab(A),
                        q(A));
                    Na = !1
                }
                aa = V = M.currItem.initialZoomLevel;
                if (db = M.currItem.bounds)
                    P.x = db.center.x,
                    P.y = db.center.y,
                    Q(!0);
                Za("resize")
            },
            zoomTo: function(p, A, G, X, Ca) {
                A && (aa = V,
                Qc.x = Math.abs(A.x) - P.x,
                Qc.y = Math.abs(A.y) - P.y,
                ca(T, P));
                A = Yb(p, !1);
                var Aa = {};
                Vc("x", A, Aa, p);
                Vc("y", A, Aa, p);
                var Ya = V
                  , Kb = P.x
                  , xb = P.y;
                va(Aa);
                A = function(Sb) {
                    1 === Sb ? (V = p,
                    P.x = Aa.x,
                    P.y = Aa.y) : (V = (p - Ya) * Sb + Ya,
                    P.x = (Aa.x - Kb) * Sb + Kb,
                    P.y = (Aa.y - xb) * Sb + xb);
                    Ca && Ca(Sb);
                    Q(1 === Sb)
                }
                ;
                G ? L("customZoomTo", 0, 1, G, X || H.easing.sine.inOut, A) : A(1)
            }
        }, ka, da, ea = {}, ya = {}, Ma = {}, Da = {}, La = {}, Pa = [], Ra = {}, Qa, zb = [], mc, Qb, pb, Mb, ec, Zb = 0, jc = Ea(), vc = 0, Vb, nc, tc, Oc, Pc, Kc, kc, uc, ld, db, Cc = Ea(), Dc, lc, Qc = Ea(), Ic = Ea(), wc, $c, Rc, Ec, ad, hd = function(p, A) {
            mc = Math.abs(p.x - A.x);
            Qb = Math.abs(p.y - A.y);
            return Math.sqrt(mc * mc + Qb * Qb)
        }, bd = function() {
            Pc && (fa(Pc),
            Pc = null)
        }, md = function() {
            if (Vb && (Pc = fb(md),
            kc)) {
                var p = kc.length;
                if (0 !== p)
                    if (ca(ea, kc[0]),
                    Ma.x = ea.x - Da.x,
                    Ma.y = ea.y - Da.y,
                    uc && 1 < p) {
                        Da.x = ea.x;
                        Da.y = ea.y;
                        if (p = !Ma.x && !Ma.y)
                            p = kc[1],
                            p = p.x === ya.x && p.y === ya.y;
                        if (!p) {
                            ca(ya, kc[1]);
                            tc || (tc = !0,
                            Za("zoomGestureStarted"));
                            p = hd(ea, ya);
                            p = 1 / ld * p * aa;
                            p > M.currItem.initialZoomLevel + M.currItem.initialZoomLevel / 15 && (ad = !0);
                            var A = $b()
                              , G = Gc();
                            p < A ? ja.pinchToClose && !ad && aa <= M.currItem.initialZoomLevel ? (A = 1 - (A - p) / (A / 1.2),
                            Ub(A),
                            Za("onPinchClose", A),
                            Rc = !0) : (p = (A - p) / A,
                            1 < p && (p = 1),
                            p = A - A / 3 * p) : p > G && (p = (p - G) / (6 * A),
                            1 < p && (p = 1),
                            p = G + p * A);
                            jc.x = .5 * (ea.x + ya.x);
                            jc.y = .5 * (ea.y + ya.y);
                            I.x += jc.x - Ic.x;
                            I.y += jc.y - Ic.y;
                            ca(Ic, jc);
                            P.x = ba("x", p);
                            P.y = ba("y", p);
                            pb = p > V;
                            V = p;
                            Q()
                        }
                    } else if (wc && ($c && ($c = !1,
                    10 <= Math.abs(Ma.x) && (Ma.x -= kc[0].x - La.x),
                    10 <= Math.abs(Ma.y) && (Ma.y -= kc[0].y - La.y)),
                    Da.x = ea.x,
                    Da.y = ea.y,
                    0 !== Ma.x || 0 !== Ma.y))
                        if ("v" === wc && ja.closeOnVerticalDrag && "fit" === ja.scaleMode && V === M.currItem.initialZoomLevel)
                            I.y += Ma.y,
                            P.y += Ma.y,
                            p = Sc(),
                            Mb = !0,
                            Za("onVerticalDrag", p),
                            Ub(p),
                            Q();
                        else {
                            p = fc();
                            A = ea.x;
                            G = ea.y;
                            if (50 < p - da) {
                                var X = 2 < zb.length ? zb.shift() : {};
                                X.x = A;
                                X.y = G;
                                zb.push(X);
                                da = p
                            }
                            Oc = !0;
                            db = M.currItem.bounds;
                            pd("x", Ma) || (pd("y", Ma),
                            va(P),
                            Q())
                        }
            }
        }, nd = function(p, A) {
            return !p || p === document || p.getAttribute("class") && -1 < p.getAttribute("class").indexOf("pswp__scroll-wrap") ? !1 : A(p) ? p : nd(p.parentNode, A)
        }, ed = {}, Wc = function(p, A) {
            ed.prevent = !nd(p.target, ja.isClickableElement);
            Za("preventDragEvent", p, A, ed);
            return ed.prevent
        }, od = function(p, A) {
            A.x = p.pageX;
            A.y = p.pageY;
            A.id = p.identifier;
            return A
        }, Sc = function() {
            return 1 - Math.abs((P.y - M.currItem.initialPosition.y) / (ha.y / 2))
        }, Tc = {}, fd = {}, Fc = [], Xc, gd = function(p) {
            for (; 0 < Fc.length; )
                Fc.pop();
            Cb ? (Xc = 0,
            Pa.forEach(function(A) {
                0 === Xc ? Fc[0] = A : 1 === Xc && (Fc[1] = A);
                Xc++
            })) : -1 < p.type.indexOf("touch") ? p.touches && 0 < p.touches.length && (Fc[0] = od(p.touches[0], Tc),
            1 < p.touches.length && (Fc[1] = od(p.touches[1], fd))) : (Tc.x = p.pageX,
            Tc.y = p.pageY,
            Tc.id = "",
            Fc[0] = Tc);
            return Fc
        }, pd = function(p, A) {
            var G = P[p] + A[p], X = 0 < A[p], Ca = Cc.x + A.x, Aa = Cc.x - Ra.x, Ya;
            var Kb = G > db.min[p] || G < db.max[p] ? ja.panEndFriction : 1;
            G = P[p] + A[p] * Kb;
            if (ja.allowPanToNext || V === M.currItem.initialZoomLevel) {
                if (!Dc)
                    var xb = Ca;
                else if ("h" === wc && "x" === p && !tc)
                    if (X) {
                        if (G > db.min[p]) {
                            Kb = ja.panEndFriction;
                            var Sb = db.min[p] - T[p]
                        }
                        (0 >= Sb || 0 > Aa) && 1 < wb() ? (xb = Ca,
                        0 > Aa && Ca > Ra.x && (xb = Ra.x)) : db.min.x !== db.max.x && (Ya = G)
                    } else
                        G < db.max[p] && (Kb = ja.panEndFriction,
                        Sb = T[p] - db.max[p]),
                        (0 >= Sb || 0 < Aa) && 1 < wb() ? (xb = Ca,
                        0 < Aa && Ca < Ra.x && (xb = Ra.x)) : db.min.x !== db.max.x && (Ya = G);
                if ("x" === p)
                    return void 0 !== xb && (F(xb, !0),
                    Kc = xb === Ra.x ? !1 : !0),
                    db.min.x !== db.max.x && (void 0 !== Ya ? P.x = Ya : Kc || (P.x += A.x * Kb)),
                    void 0 !== xb
            }
            lc || Kc || V > M.currItem.fitRatio && (P[p] += A[p] * Kb)
        }, c = function(p) {
            if (!("mousedown" === p.type && 0 < p.button))
                if (tb)
                    p.preventDefault();
                else if (!ec || "mousedown" !== p.type) {
                    Wc(p, !0) && p.preventDefault();
                    Za("pointerDown");
                    if (Cb) {
                        var A = H.arraySearch(Pa, p.pointerId, "id");
                        0 > A && (A = Pa.length);
                        Pa[A] = {
                            x: p.pageX,
                            y: p.pageY,
                            id: p.pointerId
                        }
                    }
                    p = gd(p);
                    A = p.length;
                    kc = null;
                    D();
                    Vb && 1 !== A || (Vb = $c = !0,
                    H.bind(window, ia, M),
                    pb = ad = Rc = Mb = Kc = Oc = nc = tc = !1,
                    wc = null,
                    Za("firstTouchStart", p),
                    ca(T, P),
                    I.x = I.y = 0,
                    ca(Da, p[0]),
                    ca(La, Da),
                    Ra.x = xa.x * na,
                    zb = [{
                        x: Da.x,
                        y: Da.y
                    }],
                    da = ka = fc(),
                    Yb(V, !0),
                    bd(),
                    md());
                    !uc && 1 < A && !lc && !Kc && (aa = V,
                    tc = !1,
                    uc = nc = !0,
                    I.y = I.x = 0,
                    ca(T, P),
                    ca(ea, p[0]),
                    ca(ya, p[1]),
                    Ic.x = .5 * (ea.x + ya.x),
                    Ic.y = .5 * (ea.y + ya.y),
                    Qc.x = Math.abs(Ic.x) - P.x,
                    Qc.y = Math.abs(Ic.y) - P.y,
                    ld = hd(ea, ya))
                }
        }, f = function(p) {
            p.preventDefault();
            if (Cb) {
                var A = H.arraySearch(Pa, p.pointerId, "id");
                -1 < A && (A = Pa[A],
                A.x = p.pageX,
                A.y = p.pageY)
            }
            Vb && (p = gd(p),
            wc || Oc || uc ? kc = p : Cc.x !== xa.x * na ? wc = "h" : (A = Math.abs(p[0].x - Da.x) - Math.abs(p[0].y - Da.y),
            10 <= Math.abs(A) && (wc = 0 < A ? "h" : "v",
            kc = p)))
        }, m = function(p) {
            if (n.isOldAndroid) {
                if (ec && "mouseup" === p.type)
                    return;
                -1 < p.type.indexOf("touch") && (clearTimeout(ec),
                ec = setTimeout(function() {
                    ec = 0
                }, 600))
            }
            Za("pointerUp");
            Wc(p, !1) && p.preventDefault();
            if (Cb) {
                var A = H.arraySearch(Pa, p.pointerId, "id");
                if (-1 < A) {
                    var G = Pa.splice(A, 1)[0];
                    navigator.msPointerEnabled ? (G.type = {
                        4: "mouse",
                        2: "touch",
                        3: "pen"
                    }[p.pointerType],
                    G.type || (G.type = p.pointerType || "mouse")) : G.type = p.pointerType || "mouse"
                }
            }
            var X = gd(p);
            A = X.length;
            "mouseup" === p.type && (A = 0);
            if (2 === A)
                return kc = null,
                !0;
            1 === A && ca(La, X[0]);
            0 !== A || wc || lc || (G || ("mouseup" === p.type ? G = {
                x: p.pageX,
                y: p.pageY,
                type: "mouse"
            } : p.changedTouches && p.changedTouches[0] && (G = {
                x: p.changedTouches[0].pageX,
                y: p.changedTouches[0].pageY,
                type: "touch"
            })),
            Za("touchRelease", p, G));
            p = -1;
            0 === A && (Vb = !1,
            H.unbind(window, ia, M),
            bd(),
            uc ? p = 0 : -1 !== vc && (p = fc() - vc));
            vc = 1 === A ? fc() : -1;
            p = -1 !== p && 150 > p ? "zoom" : "swipe";
            uc && 2 > A && (uc = !1,
            1 === A && (p = "zoomPointerUp"),
            Za("zoomGestureEnded"));
            kc = null;
            if (Oc || tc || lc || Mb)
                if (D(),
                Qa ||= r(),
                Qa.calculateSwipeSpeed("x"),
                Mb)
                    if (Sc() < ja.verticalDragRange)
                        M.close();
                    else {
                        var Ca = P.y
                          , Aa = Ec;
                        L("verticalDrag", 0, 1, 300, H.easing.cubic.out, function(Ya) {
                            P.y = (M.currItem.initialPosition.y - Ca) * Ya + Ca;
                            Ub((1 - Aa) * Ya + Aa);
                            Q()
                        });
                        Za("onVerticalDrag", 1)
                    }
                else {
                    if ((Kc || lc) && 0 === A) {
                        if (B(p, Qa))
                            return;
                        p = "zoomPointerUp"
                    }
                    lc || ("swipe" !== p ? K() : !Kc && V > M.currItem.fitRatio && w(Qa))
                }
        }, r = function() {
            var p, A, G = {
                lastFlickOffset: {},
                lastFlickDist: {},
                lastFlickSpeed: {},
                slowDownRatio: {},
                slowDownRatioReverse: {},
                speedDecelerationRatio: {},
                speedDecelerationRatioAbs: {},
                distanceOffset: {},
                backAnimDestination: {},
                backAnimStarted: {},
                calculateSwipeSpeed: function(X) {
                    1 < zb.length ? (p = fc() - da + 50,
                    A = zb[zb.length - 2][X]) : (p = fc() - ka,
                    A = La[X]);
                    G.lastFlickOffset[X] = Da[X] - A;
                    G.lastFlickDist[X] = Math.abs(G.lastFlickOffset[X]);
                    G.lastFlickSpeed[X] = 20 < G.lastFlickDist[X] ? G.lastFlickOffset[X] / p : 0;
                    .1 > Math.abs(G.lastFlickSpeed[X]) && (G.lastFlickSpeed[X] = 0);
                    G.slowDownRatio[X] = .95;
                    G.slowDownRatioReverse[X] = 1 - G.slowDownRatio[X];
                    G.speedDecelerationRatio[X] = 1
                },
                calculateOverBoundsAnimOffset: function(X, Ca) {
                    G.backAnimStarted[X] || (P[X] > db.min[X] ? G.backAnimDestination[X] = db.min[X] : P[X] < db.max[X] && (G.backAnimDestination[X] = db.max[X]),
                    void 0 !== G.backAnimDestination[X] && (G.slowDownRatio[X] = .7,
                    G.slowDownRatioReverse[X] = 1 - G.slowDownRatio[X],
                    .05 > G.speedDecelerationRatioAbs[X] && (G.lastFlickSpeed[X] = 0,
                    G.backAnimStarted[X] = !0,
                    L("bounceZoomPan" + X, P[X], G.backAnimDestination[X], Ca || 300, H.easing.sine.out, function(Aa) {
                        P[X] = Aa;
                        Q()
                    }))))
                },
                calculateAnimOffset: function(X) {
                    G.backAnimStarted[X] || (G.speedDecelerationRatio[X] *= G.slowDownRatio[X] + G.slowDownRatioReverse[X] - G.slowDownRatioReverse[X] * G.timeDiff / 10,
                    G.speedDecelerationRatioAbs[X] = Math.abs(G.lastFlickSpeed[X] * G.speedDecelerationRatio[X]),
                    G.distanceOffset[X] = G.lastFlickSpeed[X] * G.speedDecelerationRatio[X] * G.timeDiff,
                    P[X] += G.distanceOffset[X])
                },
                panAnimLoop: function() {
                    l.zoomPan && (l.zoomPan.raf = fb(G.panAnimLoop),
                    G.now = fc(),
                    G.timeDiff = G.now - G.lastNow,
                    G.lastNow = G.now,
                    G.calculateAnimOffset("x"),
                    G.calculateAnimOffset("y"),
                    Q(),
                    G.calculateOverBoundsAnimOffset("x"),
                    G.calculateOverBoundsAnimOffset("y"),
                    .05 > G.speedDecelerationRatioAbs.x && .05 > G.speedDecelerationRatioAbs.y && (P.x = Math.round(P.x),
                    P.y = Math.round(P.y),
                    Q(),
                    z("zoomPan")))
                }
            };
            return G
        }, w = function(p) {
            p.calculateSwipeSpeed("y");
            db = M.currItem.bounds;
            p.backAnimDestination = {};
            p.backAnimStarted = {};
            if (.05 >= Math.abs(p.lastFlickSpeed.x) && .05 >= Math.abs(p.lastFlickSpeed.y))
                return p.speedDecelerationRatioAbs.x = p.speedDecelerationRatioAbs.y = 0,
                p.calculateOverBoundsAnimOffset("x"),
                p.calculateOverBoundsAnimOffset("y"),
                !0;
            x("zoomPan");
            p.lastNow = fc();
            p.panAnimLoop()
        }, B = function(p, A) {
            lc || (Zb = g);
            var G;
            if ("swipe" === p) {
                p = Da.x - La.x;
                var X = 10 > A.lastFlickDist.x;
                30 < p && (X || 20 < A.lastFlickOffset.x) ? G = -1 : -30 > p && (X || -20 > A.lastFlickOffset.x) && (G = 1)
            }
            if (G) {
                g += G;
                if (0 > g) {
                    g = ja.loop ? wb() - 1 : 0;
                    var Ca = !0
                } else
                    g >= wb() && (g = ja.loop ? 0 : wb() - 1,
                    Ca = !0);
                if (!Ca || ja.loop) {
                    lb += G;
                    na -= G;
                    var Aa = !0
                }
            }
            G = xa.x * na;
            Ca = Math.abs(G - Cc.x);
            Aa || G > Cc.x === 0 < A.lastFlickSpeed.x ? (A = 0 < Math.abs(A.lastFlickSpeed.x) ? Ca / Math.abs(A.lastFlickSpeed.x) : 333,
            A = Math.min(A, 400),
            A = Math.max(A, 250)) : A = 333;
            Zb === g && (Aa = !1);
            lc = !0;
            Za("mainScrollAnimStart");
            L("mainScroll", Cc.x, G, A, H.easing.cubic.out, F, function() {
                D();
                lc = !1;
                Zb = -1;
                (Aa || Zb !== g) && M.updateCurrItem();
                Za("mainScrollAnimComplete")
            });
            Aa && M.updateCurrItem(!0);
            return Aa
        }, K = function() {
            var p = V
              , A = $b()
              , G = Gc();
            V < A ? p = A : V > G && (p = G);
            var X, Ca = Ec;
            if (Rc && !pb && !ad && V < A)
                return M.close(),
                !0;
            Rc && (X = function(Aa) {
                Ub((1 - Ca) * Aa + Ca)
            }
            );
            M.zoomTo(p, 0, 200, H.easing.cubic.out, X);
            return !0
        };
        Wb("Gestures", {
            publicMethods: {
                initGestures: function() {
                    var p = function(A, G, X, Ca, Aa) {
                        Ua = A + G;
                        gb = A + X;
                        vb = A + Ca;
                        Fb = Aa ? A + Aa : ""
                    };
                    (Cb = n.pointerEvent) && n.touch && (n.touch = !1);
                    Cb ? navigator.msPointerEnabled ? p("MSPointer", "Down", "Move", "Up", "Cancel") : p("pointer", "down", "move", "up", "cancel") : n.touch ? (p("touch", "start", "move", "end", "cancel"),
                    eb = !0) : p("mouse", "down", "move", "up");
                    ia = gb + " " + vb + " " + Fb;
                    pa = Ua;
                    Cb && !eb && (eb = 1 < navigator.maxTouchPoints || 1 < navigator.msMaxTouchPoints);
                    M.likelyTouchDevice = eb;
                    qa[Ua] = c;
                    qa[gb] = f;
                    qa[vb] = m;
                    Fb && (qa[Fb] = qa[vb]);
                    n.touch && (pa += " mousedown",
                    ia += " mousemove mouseup",
                    qa.mousedown = qa[Ua],
                    qa.mousemove = qa[gb],
                    qa.mouseup = qa[vb]);
                    eb || (ja.allowPanToNext = !1)
                }
            }
        });
        var O, W = function(p, A, G, X) {
            O && clearTimeout(O);
            nb = tb = !0;
            if (p.initialLayout) {
                var Ca = p.initialLayout;
                p.initialLayout = null
            } else
                Ca = ja.getThumbBoundsFn && ja.getThumbBoundsFn(g);
            var Aa = G ? ja.hideAnimationDuration : ja.showAnimationDuration
              , Ya = function() {
                z("initialZoom");
                G ? (M.template.removeAttribute("style"),
                M.bg.removeAttribute("style")) : (Ub(1),
                A && (A.style.display = "block"),
                H.addClass(d, "pswp--animated-in"),
                Za("initialZoom" + (G ? "OutEnd" : "InEnd")));
                X && X();
                tb = !1
            };
            Aa && Ca && void 0 !== Ca.x ? function() {
                var Kb = b
                  , xb = !M.currItem.src || M.currItem.loadError || ja.showHideOpacity;
                p.miniImg && (p.miniImg.style.webkitBackfaceVisibility = "hidden");
                G || (V = Ca.w / p.w,
                P.x = Ca.x,
                P.y = Ca.y - Wa,
                M[xb ? "template" : "bg"].style.opacity = .001,
                Q());
                x("initialZoom");
                G && !Kb && H.removeClass(d, "pswp--animated-in");
                if (xb)
                    if (G)
                        H[(Kb ? "remove" : "add") + "Class"](d, "pswp--animate_opacity");
                    else
                        setTimeout(function() {
                            H.addClass(d, "pswp--animate_opacity")
                        }, 30);
                O = setTimeout(function() {
                    Za("initialZoom" + (G ? "Out" : "In"));
                    if (G) {
                        var Sb = Ca.w / p.w
                          , Nc = P.x
                          , yc = P.y
                          , Lc = V
                          , Mc = Ec
                          , jd = function(hc) {
                            1 === hc ? (V = Sb,
                            P.x = Ca.x,
                            P.y = Ca.y - Ga) : (V = (Sb - Lc) * hc + Lc,
                            P.x = (Ca.x - Nc) * hc + Nc,
                            P.y = (Ca.y - Ga - yc) * hc + yc);
                            Q();
                            xb ? d.style.opacity = 1 - hc : Ub(Mc - hc * Mc)
                        };
                        Kb ? L("initialZoom", 0, 1, Aa, H.easing.cubic.out, jd, Ya) : (jd(1),
                        O = setTimeout(Ya, Aa + 20))
                    } else
                        V = p.initialZoomLevel,
                        ca(P, p.initialPosition),
                        Q(),
                        Ub(1),
                        xb ? d.style.opacity = 1 : Ub(1),
                        O = setTimeout(Ya, Aa + 20)
                }, G ? 25 : 90)
            }() : (Za("initialZoom" + (G ? "Out" : "In")),
            V = p.initialZoomLevel,
            ca(P, p.initialPosition),
            Q(),
            d.style.opacity = G ? 0 : 1,
            Ub(1),
            Aa ? setTimeout(function() {
                Ya()
            }, Aa) : Ya())
        }, U, ta, wa, Ba = [], nb, tb, Xb = {
            index: 0,
            errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
            forceProgressiveLoading: !1,
            preload: [1, 1],
            getNumItemsFn: function() {
                return U.length
            }
        }, ub, wb, Uc = function() {
            return {
                center: {
                    x: 0,
                    y: 0
                },
                max: {
                    x: 0,
                    y: 0
                },
                min: {
                    x: 0,
                    y: 0
                }
            }
        }, Ta = function(p, A, G) {
            if (p.src && !p.loadError) {
                var X = !G;
                X && (p.vGap || (p.vGap = {
                    top: 0,
                    bottom: 0
                }),
                Za("parseVerticalMargin", p));
                ta = A.x;
                wa = A.y - p.vGap.top - p.vGap.bottom;
                if (X) {
                    A = ta / p.w;
                    var Ca = wa / p.h;
                    p.fitRatio = A < Ca ? A : Ca;
                    A = ja.scaleMode;
                    "orig" === A ? G = 1 : "fit" === A && (G = p.fitRatio);
                    1 < G && (G = 1);
                    p.initialZoomLevel = G;
                    p.bounds || (p.bounds = Uc())
                }
                if (!G)
                    return;
                A = p.w * G;
                Ca = p.h * G;
                var Aa = p.bounds;
                Aa.center.x = Math.round((ta - A) / 2);
                Aa.center.y = Math.round((wa - Ca) / 2) + p.vGap.top;
                Aa.max.x = A > ta ? Math.round(ta - A) : Aa.center.x;
                Aa.max.y = Ca > wa ? Math.round(wa - Ca) + p.vGap.top : Aa.center.y;
                Aa.min.x = A > ta ? 0 : Aa.center.x;
                Aa.min.y = Ca > wa ? p.vGap.top : Aa.center.y;
                X && G === p.initialZoomLevel && (p.initialPosition = p.bounds.center)
            } else
                p.w = p.h = 0,
                p.initialZoomLevel = p.fitRatio = 1,
                p.bounds = Uc(),
                p.initialPosition = p.bounds.center;
            return p.bounds
        }, Ob = function(p, A, G, X, Ca, Aa) {
            !A.loadError && X && (A.imageAppended = !0,
            ab(A, X, A === M.currItem && ac),
            G.appendChild(X),
            Aa && setTimeout(function() {
                A && A.loaded && A.placeholder && (A.placeholder.style.display = "none",
                A.placeholder = null)
            }, 500))
        }, Xa = function(p) {
            p.loading = !0;
            p.loaded = !1;
            var A = p.img = H.createEl("pswp__img", "img")
              , G = function() {
                p.loading = !1;
                p.loaded = !0;
                p.loadComplete ? p.loadComplete(p) : p.img = null;
                A = A.onload = A.onerror = null
            };
            A.onload = G;
            A.onerror = function() {
                p.loadError = !0;
                G()
            }
            ;
            A.src = p.src;
            return A
        }, Eb = function(p, A) {
            if (p.src && p.loadError && p.container)
                return A && (p.container.innerHTML = ""),
                p.container.innerHTML = ja.errorMsg.replace("%url%", p.src),
                !0
        }, ab = function(p, A, G) {
            if (p.src) {
                A || (A = p.container.lastChild);
                var X = G ? p.w : Math.round(p.w * p.fitRatio);
                G = G ? p.h : Math.round(p.h * p.fitRatio);
                p.placeholder && !p.loaded && (p.placeholder.style.width = X + "px",
                p.placeholder.style.height = G + "px");
                A.style.width = X + "px";
                A.style.height = G + "px"
            }
        }, Nb = function() {
            if (Ba.length) {
                for (var p, A = 0; A < Ba.length; A++)
                    p = Ba[A],
                    p.holder.index === p.index && Ob(p.index, p.item, p.baseDiv, p.img, !1, p.clearPlaceholder);
                Ba = []
            }
        };
        Wb("Controller", {
            publicMethods: {
                lazyLoadItem: function(p) {
                    p = ic(p);
                    var A = ub(p);
                    A && (!A.loaded && !A.loading || Na) && (Za("gettingData", p, A),
                    A.src && Xa(A))
                },
                initController: function() {
                    H.extend(ja, Xb, !0);
                    M.items = U = E;
                    ub = M.getItemAt;
                    wb = ja.getNumItemsFn;
                    3 > wb() && (ja.loop = !1);
                    yb("beforeChange", function(p) {
                        var A = ja.preload;
                        p = null === p ? !0 : 0 <= p;
                        var G = Math.min(A[0], wb());
                        A = Math.min(A[1], wb());
                        var X;
                        for (X = 1; X <= (p ? A : G); X++)
                            M.lazyLoadItem(g + X);
                        for (X = 1; X <= (p ? G : A); X++)
                            M.lazyLoadItem(g - X)
                    });
                    yb("initialLayout", function() {
                        M.currItem.initialLayout = ja.getThumbBoundsFn && ja.getThumbBoundsFn(g)
                    });
                    yb("mainScrollAnimComplete", Nb);
                    yb("initialZoomInEnd", Nb);
                    yb("destroy", function() {
                        for (var p, A = 0; A < U.length; A++)
                            p = U[A],
                            p.container && (p.container = null),
                            p.placeholder && (p.placeholder = null),
                            p.img && (p.img = null),
                            p.preloader && (p.preloader = null),
                            p.loadError && (p.loaded = p.loadError = !1);
                        Ba = null
                    })
                },
                getItemAt: function(p) {
                    return 0 <= p ? void 0 !== U[p] ? U[p] : !1 : !1
                },
                allowProgressiveImg: function() {
                    return ja.forceProgressiveLoading || !eb || ja.mouseUsed || 1200 < screen.width
                },
                setContent: function(p, A) {
                    ja.loop && (A = ic(A));
                    var G = M.getItemAt(p.index);
                    G && (G.container = null);
                    G = M.getItemAt(A);
                    if (G) {
                        Za("gettingData", A, G);
                        p.index = A;
                        p.item = G;
                        var X = G.container = H.createEl("pswp__zoom-wrap");
                        !G.src && G.html && (G.html.tagName ? X.appendChild(G.html) : X.innerHTML = G.html);
                        Eb(G);
                        Ta(G, ha);
                        if (G.src && !G.loadError && !G.loaded) {
                            G.loadComplete = function(Ya) {
                                if (Fa) {
                                    if (p && p.index === A) {
                                        if (Eb(Ya, !0)) {
                                            Ya.loadComplete = Ya.img = null;
                                            Ta(Ya, ha);
                                            q(Ya);
                                            p.index === g && M.updateCurrZoomItem();
                                            return
                                        }
                                        Ya.imageAppended ? !tb && Ya.placeholder && (Ya.placeholder.style.display = "none",
                                        Ya.placeholder = null) : n.transform && (lc || tb) ? Ba.push({
                                            item: Ya,
                                            baseDiv: X,
                                            img: Ya.img,
                                            index: A,
                                            holder: p,
                                            clearPlaceholder: !0
                                        }) : Ob(A, Ya, X, Ya.img, lc || tb, !0)
                                    }
                                    Ya.loadComplete = null;
                                    Ya.img = null;
                                    Za("imageLoadComplete", A, Ya)
                                }
                            }
                            ;
                            if (H.features.transform) {
                                var Ca = H.createEl("pswp__img pswp__img--placeholder" + (G.msrc ? "" : " pswp__img--placeholder--blank"), G.msrc ? "img" : "");
                                G.msrc && (Ca.src = G.msrc);
                                ab(G, Ca);
                                X.appendChild(Ca);
                                G.placeholder = Ca
                            }
                            G.loading || Xa(G);
                            M.allowProgressiveImg() && (!nb && n.transform ? Ba.push({
                                item: G,
                                baseDiv: X,
                                img: G.img,
                                index: A,
                                holder: p
                            }) : Ob(A, G, X, G.img, !0, !0))
                        } else if (G.src && !G.loadError) {
                            var Aa = H.createEl("pswp__img", "img");
                            Aa.style.opacity = 1;
                            Aa.src = G.src;
                            ab(G, Aa);
                            Ob(A, G, X, Aa, !0)
                        }
                        nb || A !== g ? q(G) : (Dc = X.style,
                        W(G, Aa || G.img));
                        p.el.innerHTML = "";
                        p.el.appendChild(X)
                    } else
                        p.el.innerHTML = ""
                },
                cleanSlide: function(p) {
                    p.img && (p.img.onload = p.img.onerror = null);
                    p.loaded = p.loading = p.img = p.imageAppended = !1
                }
            }
        });
        var kb, cb = {}, Pb = function(p, A, G) {
            var X = document.createEvent("CustomEvent");
            X.initCustomEvent("pswpTap", !0, !0, {
                origEvent: p,
                target: p.target,
                releasePoint: A,
                pointerType: G || "touch"
            });
            p.target.dispatchEvent(X)
        };
        Wb("Tap", {
            publicMethods: {
                initTap: function() {
                    yb("firstTouchStart", M.onTapStart);
                    yb("touchRelease", M.onTapRelease);
                    yb("destroy", function() {
                        cb = {};
                        kb = null
                    })
                },
                onTapStart: function(p) {
                    1 < p.length && (clearTimeout(kb),
                    kb = null)
                },
                onTapRelease: function(p, A) {
                    if (A && !Oc && !nc && !t) {
                        if (kb && (clearTimeout(kb),
                        kb = null,
                        25 > Math.abs(A.x - cb.x) && 25 > Math.abs(A.y - cb.y))) {
                            Za("doubleTap", A);
                            return
                        }
                        "mouse" === A.type ? Pb(p, A, "mouse") : "BUTTON" === p.target.tagName.toUpperCase() || H.hasClass(p.target, "pswp__single-tap") ? Pb(p, A) : (ca(cb, A),
                        kb = setTimeout(function() {
                            Pb(p, A);
                            kb = null
                        }, 300))
                    }
                }
            }
        });
        var sb;
        Wb("DesktopZoom", {
            publicMethods: {
                initDesktopZoom: function() {
                    Sa || (eb ? yb("mouseUsed", function() {
                        M.setupDesktopZoom()
                    }) : M.setupDesktopZoom(!0))
                },
                setupDesktopZoom: function(p) {
                    sb = {};
                    yb("bindEvents", function() {
                        H.bind(d, "wheel mousewheel DOMMouseScroll", M.handleMouseWheel)
                    });
                    yb("unbindEvents", function() {
                        sb && H.unbind(d, "wheel mousewheel DOMMouseScroll", M.handleMouseWheel)
                    });
                    M.mouseZoomedIn = !1;
                    var A, G = function() {
                        M.mouseZoomedIn && (H.removeClass(d, "pswp--zoomed-in"),
                        M.mouseZoomedIn = !1);
                        1 > V ? H.addClass(d, "pswp--zoom-allowed") : H.removeClass(d, "pswp--zoom-allowed");
                        X()
                    }, X = function() {
                        A && (H.removeClass(d, "pswp--dragging"),
                        A = !1)
                    };
                    yb("resize", G);
                    yb("afterChange", G);
                    yb("pointerDown", function() {
                        M.mouseZoomedIn && (A = !0,
                        H.addClass(d, "pswp--dragging"))
                    });
                    yb("pointerUp", X);
                    p || G()
                },
                handleMouseWheel: function(p) {
                    if (V <= M.currItem.fitRatio)
                        return ja.modal && (!ja.closeOnScroll || t || Vb ? p.preventDefault() : Hb && 2 < Math.abs(p.deltaY) && (b = !0,
                        M.close())),
                        !0;
                    p.stopPropagation();
                    sb.x = 0;
                    if ("deltaX"in p)
                        1 === p.deltaMode ? (sb.x = 18 * p.deltaX,
                        sb.y = 18 * p.deltaY) : (sb.x = p.deltaX,
                        sb.y = p.deltaY);
                    else if ("wheelDelta"in p)
                        p.wheelDeltaX && (sb.x = -.16 * p.wheelDeltaX),
                        sb.y = p.wheelDeltaY ? -.16 * p.wheelDeltaY : -.16 * p.wheelDelta;
                    else if ("detail"in p)
                        sb.y = p.detail;
                    else
                        return;
                    Yb(V, !0);
                    var A = P.x - sb.x
                      , G = P.y - sb.y;
                    (ja.modal || A <= db.min.x && A >= db.max.x && G <= db.min.y && G >= db.max.y) && p.preventDefault();
                    M.panTo(A, G)
                },
                toggleDesktopZoom: function(p) {
                    p = p || {
                        x: ha.x / 2 + Ha.x,
                        y: ha.y / 2 + Ha.y
                    };
                    var A = ja.getDoubleTapZoom(!0, M.currItem)
                      , G = V === A;
                    M.mouseZoomedIn = !G;
                    M.zoomTo(G ? M.currItem.initialZoomLevel : A, p, 333);
                    H[(G ? "remove" : "add") + "Class"](d, "pswp--zoomed-in")
                }
            }
        });
        var bc = {
            history: !0,
            galleryUID: 1
        }, bb, qb, Bb, gc, Bc, qc, ob, rc, Hc, sc, oc, cd, zc = function() {
            var p = oc.hash.substring(1)
              , A = {};
            if (5 > p.length)
                return A;
            var G = p.split("&");
            for (p = 0; p < G.length; p++)
                if (G[p]) {
                    var X = G[p].split("=");
                    2 > X.length || (A[X[0]] = X[1])
                }
            if (ja.galleryPIDs)
                for (G = A.pid,
                p = A.pid = 0; p < U.length; p++) {
                    if (U[p].pid === G) {
                        A.pid = p;
                        break
                    }
                }
            else
                A.pid = parseInt(A.pid, 10) - 1;
            0 > A.pid && (A.pid = 0);
            return A
        }, Zc = function() {
            Bb && clearTimeout(Bb);
            if (t || Vb)
                Bb = setTimeout(Zc, 500);
            else {
                gc ? clearTimeout(qb) : gc = !0;
                var p = g + 1
                  , A = ub(g);
                A.hasOwnProperty("pid") && (p = A.pid);
                p = ob + "&gid=" + ja.galleryUID + "&pid=" + p;
                rc || -1 === oc.hash.indexOf(p) && (sc = !0);
                A = oc.href.split("#")[0] + "#" + p;
                if (cd) {
                    if ("#" + p !== window.location.hash)
                        history[rc ? "replaceState" : "pushState"]("", document.title, A)
                } else
                    rc ? oc.replace(A) : oc.hash = p;
                rc = !0;
                qb = setTimeout(function() {
                    gc = !1
                }, 60)
            }
        };
        Wb("History", {
            publicMethods: {
                initHistory: function() {
                    H.extend(ja, bc, !0);
                    if (ja.history) {
                        oc = window.location;
                        rc = Hc = sc = !1;
                        ob = oc.hash.substring(1);
                        cd = "pushState"in history;
                        -1 < ob.indexOf("gid=") && (ob = ob.split("&gid=")[0],
                        ob = ob.split("?gid=")[0]);
                        yb("afterChange", M.updateURL);
                        yb("unbindEvents", function() {
                            H.unbind(window, "hashchange", M.onHashChange)
                        });
                        var p = function() {
                            qc = !0;
                            Hc || (sc ? history.back() : ob ? oc.hash = ob : cd ? history.pushState("", document.title, oc.pathname + oc.search) : oc.hash = "");
                            bb && clearTimeout(bb);
                            Bb && clearTimeout(Bb)
                        };
                        yb("unbindEvents", function() {
                            b && p()
                        });
                        yb("destroy", function() {
                            qc || p()
                        });
                        yb("firstUpdate", function() {
                            g = zc().pid
                        });
                        var A = ob.indexOf("pid=");
                        -1 < A && (ob = ob.substring(0, A),
                        "&" === ob.slice(-1) && (ob = ob.slice(0, -1)));
                        setTimeout(function() {
                            Fa && H.bind(window, "hashchange", M.onHashChange)
                        }, 40)
                    }
                },
                onHashChange: function() {
                    oc.hash.substring(1) === ob ? (Hc = !0,
                    M.close()) : gc || (Bc = !0,
                    M.goTo(zc().pid),
                    Bc = !1)
                },
                updateURL: function() {
                    bb && clearTimeout(bb);
                    Bb && clearTimeout(Bb);
                    Bc || (rc ? bb = setTimeout(Zc, 800) : Zc())
                }
            }
        });
        H.extend(M, Y)
    }
});
/*
 PhotoSwipe Default UI - 4.1.3 - 2019-01-08
 http://photoswipe.com
 Copyright (c) 2019 Dmitry Semenov; */
(function(d, k) {
    "function" === typeof define && define.amd ? define(k) : "object" === typeof exports ? module.exports = k() : d.PhotoSwipeUI_Default = k()
}
)(this, function() {
    return function(d, k) {
        var E = this, R = !1, H = !0, M, ja, Ea, Fa, oa, b, g, u = !0, y, I, T, P, ia, pa, qa, ha, V = {
            barsSize: {
                top: 44,
                bottom: "auto"
            },
            closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
            timeToIdle: 4E3,
            timeToIdleOutside: 1E3,
            loadingIndicatorDelay: 1E3,
            addCaptionHTMLFn: function(fa, ua) {
                if (!fa.title)
                    return ua.children[0].innerHTML = "",
                    !1;
                ua.children[0].innerHTML = fa.title;
                return !0
            },
            closeEl: !0,
            captionEl: !0,
            fullscreenEl: !0,
            zoomEl: !0,
            shareEl: !0,
            counterEl: !0,
            arrowEl: !0,
            preloaderEl: !0,
            tapToClose: !1,
            tapToToggleControls: !0,
            clickToCloseNonZoomable: !0,
            shareButtons: [{
                id: "facebook",
                label: "Share on Facebook",
                url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
            }, {
                id: "twitter",
                label: "Tweet",
                url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
            }, {
                id: "pinterest",
                label: "Pin it",
                url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
            }, {
                id: "download",
                label: "Download image",
                url: "{{raw_image_url}}",
                download: !0
            }],
            getImageURLForShare: function() {
                return d.currItem.src || ""
            },
            getPageURLForShare: function() {
                return window.location.href
            },
            getTextForShare: function() {
                return d.currItem.title || ""
            },
            indexIndicatorSep: " / ",
            fitControlsWidth: 1200
        }, aa, ma = function(fa) {
            if (aa)
                return !0;
            fa = fa || window.event;
            ha.timeToIdle && ha.mouseUsed && !I && gb();
            for (var ua, Wa = (fa.target || fa.srcElement).getAttribute("class") || "", Sa, Ga = 0; Ga < Va.length; Ga++)
                ua = Va[Ga],
                ua.onTap && -1 < Wa.indexOf("pswp__" + ua.name) && (ua.onTap(),
                Sa = !0);
            Sa && (fa.stopPropagation && fa.stopPropagation(),
            aa = !0,
            setTimeout(function() {
                aa = !1
            }, k.features.isOldAndroid ? 600 : 30))
        }, Ja = function(fa, ua, Wa) {
            k[(Wa ? "add" : "remove") + "Class"](fa, "pswp__" + ua)
        }, Ka = function() {
            var fa = 1 === ha.getNumItemsFn();
            fa !== qa && (Ja(ja, "ui--one-slide", fa),
            qa = fa)
        }, Na = function() {
            Ja(g, "share-modal--hidden", u)
        }, na = function() {
            (u = !u) ? (k.removeClass(g, "pswp__share-modal--fade-in"),
            setTimeout(function() {
                u && Na()
            }, 300)) : (Na(),
            setTimeout(function() {
                u || k.addClass(g, "pswp__share-modal--fade-in")
            }, 30));
            u || xa();
            return !1
        }, Ha = function(fa) {
            fa = fa || window.event;
            var ua = fa.target || fa.srcElement;
            d.shout("shareLinkClick", fa, ua);
            if (!ua.href)
                return !1;
            if (ua.hasAttribute("download"))
                return !0;
            window.open(ua.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100));
            u || na();
            return !1
        }, xa = function() {
            for (var fa = "", ua, Wa, Sa, Ga, n = 0; n < ha.shareButtons.length; n++)
                ua = ha.shareButtons[n],
                Wa = ha.getImageURLForShare(ua),
                Sa = ha.getPageURLForShare(ua),
                Ga = ha.getTextForShare(ua),
                Wa = ua.url.replace("{{url}}", encodeURIComponent(Sa)).replace("{{image_url}}", encodeURIComponent(Wa)).replace("{{raw_image_url}}", Wa).replace("{{text}}", encodeURIComponent(Ga)),
                fa += '<a href="' + Wa + '" target="_blank" class="pswp__share--' + ua.id + '"' + (ua.download ? "download" : "") + ">" + ua.label + "</a>",
                ha.parseShareButtonOut && (fa = ha.parseShareButtonOut(ua, fa));
            g.children[0].innerHTML = fa;
            g.children[0].onclick = Ha
        }, Oa = function(fa) {
            for (var ua = 0; ua < ha.closeElClasses.length; ua++)
                if (k.hasClass(fa, "pswp__" + ha.closeElClasses[ua]))
                    return !0
        }, jb, lb, Ua = 0, gb = function() {
            clearTimeout(lb);
            Ua = 0;
            I && E.setIdle(!1)
        }, vb = function(fa) {
            fa = fa ? fa : window.event;
            fa = fa.relatedTarget || fa.toElement;
            fa && "HTML" !== fa.nodeName || (clearTimeout(lb),
            lb = setTimeout(function() {
                E.setIdle(!0)
            }, ha.timeToIdleOutside))
        }, Fb = function() {
            ha.preloaderEl && (Hb(!0),
            T("beforeChange", function() {
                clearTimeout(pa);
                pa = setTimeout(function() {
                    d.currItem && d.currItem.loading ? (!d.allowProgressiveImg() || d.currItem.img && !d.currItem.img.naturalWidth) && Hb(!1) : Hb(!0)
                }, ha.loadingIndicatorDelay)
            }),
            T("imageLoadComplete", function(fa, ua) {
                d.currItem === ua && Hb(!0)
            }))
        }, Hb = function(fa) {
            ia !== fa && (Ja(P, "preloader--active", !fa),
            ia = fa)
        }, Cb = function(fa) {
            var ua = fa.vGap;
            if (!d.likelyTouchDevice || ha.mouseUsed || screen.width > ha.fitControlsWidth) {
                var Wa = ha.barsSize;
                ha.captionEl && "auto" === Wa.bottom ? (Fa || (Fa = k.createEl("pswp__caption pswp__caption--fake"),
                Fa.appendChild(k.createEl("pswp__caption__center")),
                ja.insertBefore(Fa, Ea),
                k.addClass(ja, "pswp__ui--fit")),
                ha.addCaptionHTMLFn(fa, Fa, !0) ? ua.bottom = parseInt(Fa.clientHeight, 10) || 44 : ua.bottom = Wa.top) : ua.bottom = "auto" === Wa.bottom ? 0 : Wa.bottom;
                ua.top = Wa.top
            } else
                ua.top = ua.bottom = 0
        }, Ib = function() {
            ha.timeToIdle && T("mouseUsed", function() {
                k.bind(document, "mousemove", gb);
                k.bind(document, "mouseout", vb);
                jb = setInterval(function() {
                    Ua++;
                    2 === Ua && E.setIdle(!0)
                }, ha.timeToIdle / 2)
            })
        }, eb = function() {
            T("onVerticalDrag", function(ua) {
                H && .95 > ua ? E.hideControls() : !H && .95 <= ua && E.showControls()
            });
            var fa;
            T("onPinchClose", function(ua) {
                H && .9 > ua ? (E.hideControls(),
                fa = !0) : fa && !H && .9 < ua && E.showControls()
            });
            T("zoomGestureEnded", function() {
                fa = !1
            })
        }, Va = [{
            name: "caption",
            option: "captionEl",
            onInit: function(fa) {
                Ea = fa
            }
        }, {
            name: "share-modal",
            option: "shareEl",
            onInit: function(fa) {
                g = fa
            },
            onTap: function() {
                na()
            }
        }, {
            name: "button--share",
            option: "shareEl",
            onInit: function(fa) {
                b = fa
            },
            onTap: function() {
                na()
            }
        }, {
            name: "button--zoom",
            option: "zoomEl",
            onTap: d.toggleDesktopZoom
        }, {
            name: "counter",
            option: "counterEl",
            onInit: function(fa) {
                oa = fa
            }
        }, {
            name: "button--close",
            option: "closeEl",
            onTap: d.close
        }, {
            name: "button--arrow--left",
            option: "arrowEl",
            onTap: d.prev
        }, {
            name: "button--arrow--right",
            option: "arrowEl",
            onTap: d.next
        }, {
            name: "button--fs",
            option: "fullscreenEl",
            onTap: function() {
                M.isFullscreen() ? M.exit() : M.enter()
            }
        }, {
            name: "preloader",
            option: "preloaderEl",
            onInit: function(fa) {
                P = fa
            }
        }], fb = function() {
            var fa, ua, Wa, Sa = function(n) {
                if (n)
                    for (var Rb = n.length, ac = 0; ac < Rb; ac++) {
                        fa = n[ac];
                        ua = fa.className;
                        for (var pc = 0; pc < Va.length; pc++)
                            if (Wa = Va[pc],
                            -1 < ua.indexOf("pswp__" + Wa.name))
                                if (ha[Wa.option]) {
                                    if (k.removeClass(fa, "pswp__element--disabled"),
                                    Wa.onInit)
                                        Wa.onInit(fa)
                                } else
                                    k.addClass(fa, "pswp__element--disabled")
                    }
            };
            Sa(ja.children);
            var Ga = k.getChildByClass(ja, "pswp__top-bar");
            Ga && Sa(Ga.children)
        };
        E.init = function() {
            k.extend(d.options, V, !0);
            ha = d.options;
            ja = k.getChildByClass(d.scrollWrap, "pswp__ui");
            T = d.listen;
            eb();
            T("beforeChange", E.update);
            T("doubleTap", function(fa) {
                var ua = d.currItem.initialZoomLevel;
                d.getZoomLevel() !== ua ? d.zoomTo(ua, fa, 333) : d.zoomTo(ha.getDoubleTapZoom(!1, d.currItem), fa, 333)
            });
            T("preventDragEvent", function(fa, ua, Wa) {
                (ua = fa.target || fa.srcElement) && ua.getAttribute("class") && -1 < fa.type.indexOf("mouse") && (0 < ua.getAttribute("class").indexOf("__caption") || /(SMALL|STRONG|EM)/i.test(ua.tagName)) && (Wa.prevent = !1)
            });
            T("bindEvents", function() {
                k.bind(ja, "pswpTap click", ma);
                k.bind(d.scrollWrap, "pswpTap", E.onGlobalTap);
                d.likelyTouchDevice || k.bind(d.scrollWrap, "mouseover", E.onMouseOver)
            });
            T("unbindEvents", function() {
                u || na();
                jb && clearInterval(jb);
                k.unbind(document, "mouseout", vb);
                k.unbind(document, "mousemove", gb);
                k.unbind(ja, "pswpTap click", ma);
                k.unbind(d.scrollWrap, "pswpTap", E.onGlobalTap);
                k.unbind(d.scrollWrap, "mouseover", E.onMouseOver);
                M && (k.unbind(document, M.eventK, E.updateFullscreen),
                M.isFullscreen() && (ha.hideAnimationDuration = 0,
                M.exit()),
                M = null)
            });
            T("destroy", function() {
                ha.captionEl && (Fa && ja.removeChild(Fa),
                k.removeClass(Ea, "pswp__caption--empty"));
                g && (g.children[0].onclick = null);
                k.removeClass(ja, "pswp__ui--over-close");
                k.addClass(ja, "pswp__ui--hidden");
                E.setIdle(!1)
            });
            ha.showAnimationDuration || k.removeClass(ja, "pswp__ui--hidden");
            T("initialZoomIn", function() {
                ha.showAnimationDuration && k.removeClass(ja, "pswp__ui--hidden")
            });
            T("initialZoomOut", function() {
                k.addClass(ja, "pswp__ui--hidden")
            });
            T("parseVerticalMargin", Cb);
            fb();
            ha.shareEl && b && g && (u = !0);
            Ka();
            Ib();
            ha.fullscreenEl && !k.features.isOldAndroid && (M ||= E.getFullscreenAPI(),
            M ? (k.bind(document, M.eventK, E.updateFullscreen),
            E.updateFullscreen(),
            k.addClass(d.template, "pswp--supports-fs")) : k.removeClass(d.template, "pswp--supports-fs"));
            Fb()
        }
        ;
        E.setIdle = function(fa) {
            I = fa;
            Ja(ja, "ui--idle", fa)
        }
        ;
        E.update = function() {
            H && d.currItem ? (E.updateIndexIndicator(),
            ha.captionEl && (ha.addCaptionHTMLFn(d.currItem, Ea),
            Ja(Ea, "caption--empty", !d.currItem.title)),
            R = !0) : R = !1;
            u || na();
            Ka()
        }
        ;
        E.updateFullscreen = function(fa) {
            fa && setTimeout(function() {
                d.setScrollOffset(0, k.getScrollY())
            }, 50);
            k[(M.isFullscreen() ? "add" : "remove") + "Class"](d.template, "pswp--fs")
        }
        ;
        E.updateIndexIndicator = function() {
            ha.counterEl && (oa.innerHTML = d.getCurrentIndex() + 1 + ha.indexIndicatorSep + ha.getNumItemsFn())
        }
        ;
        E.onGlobalTap = function(fa) {
            fa = fa || window.event;
            var ua = fa.target || fa.srcElement;
            aa || (fa.detail && "mouse" === fa.detail.pointerType ? Oa(ua) ? d.close() : k.hasClass(ua, "pswp__img") && (1 === d.getZoomLevel() && d.getZoomLevel() <= d.currItem.fitRatio ? ha.clickToCloseNonZoomable && d.close() : d.toggleDesktopZoom(fa.detail.releasePoint)) : (ha.tapToToggleControls && (H ? E.hideControls() : E.showControls()),
            ha.tapToClose && (k.hasClass(ua, "pswp__img") || Oa(ua)) && d.close()))
        }
        ;
        E.onMouseOver = function(fa) {
            fa = fa || window.event;
            Ja(ja, "ui--over-close", Oa(fa.target || fa.srcElement))
        }
        ;
        E.hideControls = function() {
            k.addClass(ja, "pswp__ui--hidden");
            H = !1
        }
        ;
        E.showControls = function() {
            H = !0;
            R || E.update();
            k.removeClass(ja, "pswp__ui--hidden")
        }
        ;
        E.supportsFullscreen = function() {
            var fa = document;
            return !!(fa.exitFullscreen || fa.mozCancelFullScreen || fa.webkitExitFullscreen || fa.msExitFullscreen)
        }
        ;
        E.getFullscreenAPI = function() {
            var fa = document.documentElement, ua;
            fa.requestFullscreen ? ua = {
                enterK: "requestFullscreen",
                exitK: "exitFullscreen",
                elementK: "fullscreenElement",
                eventK: "fullscreenchange"
            } : fa.mozRequestFullScreen ? ua = {
                enterK: "mozRequestFullScreen",
                exitK: "mozCancelFullScreen",
                elementK: "mozFullScreenElement",
                eventK: "mozfullscreenchange"
            } : fa.webkitRequestFullscreen ? ua = {
                enterK: "webkitRequestFullscreen",
                exitK: "webkitExitFullscreen",
                elementK: "webkitFullscreenElement",
                eventK: "webkitfullscreenchange"
            } : fa.msRequestFullscreen && (ua = {
                enterK: "msRequestFullscreen",
                exitK: "msExitFullscreen",
                elementK: "msFullscreenElement",
                eventK: "MSFullscreenChange"
            });
            ua && (ua.enter = function() {
                y = ha.closeOnScroll;
                ha.closeOnScroll = !1;
                if ("webkitRequestFullscreen" === this.enterK)
                    d.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT);
                else
                    return d.template[this.enterK]()
            }
            ,
            ua.exit = function() {
                ha.closeOnScroll = y;
                return document[this.exitK]()
            }
            ,
            ua.isFullscreen = function() {
                return document[this.elementK]
            }
            );
            return ua
        }
    }
});
!function(d, k) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = k() : "function" == typeof define && define.amd ? define(k) : d.Swiper = k()
}(this, function() {
    function d(a, e) {
        var h = [];
        if (a && !e && a instanceof M)
            return a;
        if (a)
            if ("string" == typeof a) {
                var l = a.trim();
                if (0 <= l.indexOf("<") && 0 <= l.indexOf(">"))
                    for (a = "div",
                    0 === l.indexOf("<li") && (a = "ul"),
                    0 === l.indexOf("<tr") && (a = "tbody"),
                    0 !== l.indexOf("<td") && 0 !== l.indexOf("<th") || (a = "tr"),
                    0 === l.indexOf("<tbody") && (a = "table"),
                    0 === l.indexOf("<option") && (a = "select"),
                    (a = R.createElement(a)).innerHTML = l,
                    l = 0; l < a.childNodes.length; l += 1)
                        h.push(a.childNodes[l]);
                else
                    for (a = e || "#" !== a[0] || a.match(/[ .<>:~]/) ? (e || R).querySelectorAll(a.trim()) : [R.getElementById(a.trim().split("#")[1])],
                    l = 0; l < a.length; l += 1)
                        a[l] && h.push(a[l])
            } else if (a.nodeType || a === H || a === R)
                h.push(a);
            else if (0 < a.length && a[0].nodeType)
                for (l = 0; l < a.length; l += 1)
                    h.push(a[l]);
        return new M(h)
    }
    function k(a) {
        for (var e = [], h = 0; h < a.length; h += 1)
            -1 === e.indexOf(a[h]) && e.push(a[h]);
        return e
    }
    function E() {
        var a = this.params
          , e = this.el;
        if (!e || 0 !== e.offsetWidth) {
            a.breakpoints && this.setBreakpoint();
            e = this.allowSlideNext;
            var h = this.allowSlidePrev
              , l = this.snapGrid;
            if (this.allowSlideNext = !0,
            this.allowSlidePrev = !0,
            this.updateSize(),
            this.updateSlides(),
            a.freeMode) {
                var t = Math.min(Math.max(this.translate, this.maxTranslate()), this.minTranslate());
                this.setTranslate(t);
                this.updateActiveIndex();
                this.updateSlidesClasses();
                a.autoHeight && this.updateAutoHeight()
            } else
                this.updateSlidesClasses(),
                ("auto" === a.slidesPerView || 1 < a.slidesPerView) && this.isEnd && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0);
            this.allowSlidePrev = h;
            this.allowSlideNext = e;
            this.params.watchOverflow && l !== this.snapGrid && this.checkOverflow()
        }
    }
    var R = "undefined" == typeof document ? {
        body: {},
        addEventListener: function() {},
        removeEventListener: function() {},
        activeElement: {
            blur: function() {},
            nodeName: ""
        },
        querySelector: function() {
            return null
        },
        querySelectorAll: function() {
            return []
        },
        getElementById: function() {
            return null
        },
        createEvent: function() {
            return {
                initEvent: function() {}
            }
        },
        createElement: function() {
            return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute: function() {},
                getElementsByTagName: function() {
                    return []
                }
            }
        },
        location: {
            hash: ""
        }
    } : document
      , H = "undefined" == typeof window ? {
        document: R,
        navigator: {
            userAgent: ""
        },
        location: {},
        history: {},
        CustomEvent: function() {
            return this
        },
        addEventListener: function() {},
        removeEventListener: function() {},
        getComputedStyle: function() {
            return {
                getPropertyValue: function() {
                    return ""
                }
            }
        },
        Image: function() {},
        Date: function() {},
        screen: {},
        setTimeout: function() {},
        clearTimeout: function() {}
    } : window
      , M = function(a) {
        for (var e = 0; e < a.length; e += 1)
            this[e] = a[e];
        return this.length = a.length,
        this
    };
    d.fn = M.prototype;
    d.Class = M;
    d.Dom7 = M;
    var ja = {
        addClass: function(a) {
            if (void 0 === a)
                return this;
            a = a.split(" ");
            for (var e = 0; e < a.length; e += 1)
                for (var h = 0; h < this.length; h += 1)
                    void 0 !== this[h] && void 0 !== this[h].classList && this[h].classList.add(a[e]);
            return this
        },
        removeClass: function(a) {
            a = a.split(" ");
            for (var e = 0; e < a.length; e += 1)
                for (var h = 0; h < this.length; h += 1)
                    void 0 !== this[h] && void 0 !== this[h].classList && this[h].classList.remove(a[e]);
            return this
        },
        hasClass: function(a) {
            return !!this[0] && this[0].classList.contains(a)
        },
        toggleClass: function(a) {
            a = a.split(" ");
            for (var e = 0; e < a.length; e += 1)
                for (var h = 0; h < this.length; h += 1)
                    void 0 !== this[h] && void 0 !== this[h].classList && this[h].classList.toggle(a[e]);
            return this
        },
        attr: function(a, e) {
            var h = arguments;
            if (1 === arguments.length && "string" == typeof a)
                return this[0] ? this[0].getAttribute(a) : void 0;
            for (var l = 0; l < this.length; l += 1)
                if (2 === h.length)
                    this[l].setAttribute(a, e);
                else
                    for (var t in a)
                        this[l][t] = a[t],
                        this[l].setAttribute(t, a[t]);
            return this
        },
        removeAttr: function(a) {
            for (var e = 0; e < this.length; e += 1)
                this[e].removeAttribute(a);
            return this
        },
        data: function(a, e) {
            var h;
            if (void 0 !== e) {
                for (var l = 0; l < this.length; l += 1)
                    (h = this[l]).dom7ElementDataStorage || (h.dom7ElementDataStorage = {}),
                    h.dom7ElementDataStorage[a] = e;
                return this
            }
            if (h = this[0])
                return h.dom7ElementDataStorage && a in h.dom7ElementDataStorage ? h.dom7ElementDataStorage[a] : h.getAttribute("data-" + a) || void 0
        },
        transform: function(a) {
            for (var e = 0; e < this.length; e += 1) {
                var h = this[e].style;
                h.webkitTransform = a;
                h.transform = a
            }
            return this
        },
        transition: function(a) {
            "string" != typeof a && (a += "ms");
            for (var e = 0; e < this.length; e += 1) {
                var h = this[e].style;
                h.webkitTransitionDuration = a;
                h.transitionDuration = a
            }
            return this
        },
        on: function() {
            function a(ka) {
                var da = ka.target;
                if (da) {
                    var ea = ka.target.dom7EventData || [];
                    if (0 > ea.indexOf(ka) && ea.unshift(ka),
                    d(da).is(z))
                        x.apply(da, ea);
                    else
                        for (ka = d(da).parents(),
                        da = 0; da < ka.length; da += 1)
                            d(ka[da]).is(z) && x.apply(ka[da], ea)
                }
            }
            function e(ka) {
                var da = ka && ka.target && ka.target.dom7EventData || [];
                0 > da.indexOf(ka) && da.unshift(ka);
                x.apply(this, da)
            }
            for (var h = [], l = arguments.length; l--; )
                h[l] = arguments[l];
            var t = h[0]
              , z = h[1]
              , x = h[2];
            l = h[3];
            "function" == typeof h[1] && (t = h[0],
            x = h[1],
            l = h[2],
            z = void 0);
            l ||= !1;
            t = t.split(" ");
            for (var D = 0; D < this.length; D += 1) {
                var L = this[D];
                if (z)
                    for (h = 0; h < t.length; h += 1) {
                        var Y = t[h];
                        L.dom7LiveListeners || (L.dom7LiveListeners = {});
                        L.dom7LiveListeners[Y] || (L.dom7LiveListeners[Y] = []);
                        L.dom7LiveListeners[Y].push({
                            listener: x,
                            proxyListener: a
                        });
                        L.addEventListener(Y, a, l)
                    }
                else
                    for (h = 0; h < t.length; h += 1)
                        Y = t[h],
                        L.dom7Listeners || (L.dom7Listeners = {}),
                        L.dom7Listeners[Y] || (L.dom7Listeners[Y] = []),
                        L.dom7Listeners[Y].push({
                            listener: x,
                            proxyListener: e
                        }),
                        L.addEventListener(Y, e, l)
            }
            return this
        },
        off: function() {
            for (var a = [], e = arguments.length; e--; )
                a[e] = arguments[e];
            var h = a[0];
            e = a[1];
            var l = a[2]
              , t = a[3];
            "function" == typeof a[1] && (h = a[0],
            l = a[1],
            t = a[2],
            e = void 0);
            t ||= !1;
            a = h.split(" ");
            for (h = 0; h < a.length; h += 1)
                for (var z = a[h], x = 0; x < this.length; x += 1) {
                    var D = this[x]
                      , L = void 0;
                    if (!e && D.dom7Listeners ? L = D.dom7Listeners[z] : e && D.dom7LiveListeners && (L = D.dom7LiveListeners[z]),
                    L && L.length)
                        for (var Y = L.length - 1; 0 <= Y; --Y) {
                            var ka = L[Y];
                            l && ka.listener === l ? (D.removeEventListener(z, ka.proxyListener, t),
                            L.splice(Y, 1)) : l || (D.removeEventListener(z, ka.proxyListener, t),
                            L.splice(Y, 1))
                        }
                }
            return this
        },
        trigger: function() {
            for (var a = [], e = arguments.length; e--; )
                a[e] = arguments[e];
            e = a[0].split(" ");
            for (var h = a[1], l = 0; l < e.length; l += 1)
                for (var t = e[l], z = 0; z < this.length; z += 1) {
                    var x = this[z]
                      , D = void 0;
                    try {
                        D = new H.CustomEvent(t,{
                            detail: h,
                            bubbles: !0,
                            cancelable: !0
                        })
                    } catch (L) {
                        (D = R.createEvent("Event")).initEvent(t, !0, !0),
                        D.detail = h
                    }
                    x.dom7EventData = a.filter(function(L, Y) {
                        return 0 < Y
                    });
                    x.dispatchEvent(D);
                    x.dom7EventData = [];
                    delete x.dom7EventData
                }
            return this
        },
        transitionEnd: function(a) {
            function e(z) {
                if (z.target === this)
                    for (a.call(this, z),
                    h = 0; h < l.length; h += 1)
                        t.off(l[h], e)
            }
            var h, l = ["webkitTransitionEnd", "transitionend"], t = this;
            if (a)
                for (h = 0; h < l.length; h += 1)
                    t.on(l[h], e);
            return this
        },
        outerWidth: function(a) {
            return 0 < this.length ? a ? (a = this.styles(),
            this[0].offsetWidth + parseFloat(a.getPropertyValue("margin-right")) + parseFloat(a.getPropertyValue("margin-left"))) : this[0].offsetWidth : null
        },
        outerHeight: function(a) {
            return 0 < this.length ? a ? (a = this.styles(),
            this[0].offsetHeight + parseFloat(a.getPropertyValue("margin-top")) + parseFloat(a.getPropertyValue("margin-bottom"))) : this[0].offsetHeight : null
        },
        offset: function() {
            if (0 < this.length) {
                var a = this[0]
                  , e = a.getBoundingClientRect()
                  , h = R.body;
                return {
                    top: e.top + (a === H ? H.scrollY : a.scrollTop) - (a.clientTop || h.clientTop || 0),
                    left: e.left + (a === H ? H.scrollX : a.scrollLeft) - (a.clientLeft || h.clientLeft || 0)
                }
            }
            return null
        },
        css: function(a, e) {
            var h;
            if (1 === arguments.length) {
                if ("string" != typeof a) {
                    for (h = 0; h < this.length; h += 1)
                        for (var l in a)
                            this[h].style[l] = a[l];
                    return this
                }
                if (this[0])
                    return H.getComputedStyle(this[0], null).getPropertyValue(a)
            }
            if (2 === arguments.length && "string" == typeof a)
                for (h = 0; h < this.length; h += 1)
                    this[h].style[a] = e;
            return this
        },
        each: function(a) {
            if (!a)
                return this;
            for (var e = 0; e < this.length && !1 !== a.call(this[e], e, this[e]); e += 1)
                ;
            return this
        },
        html: function(a) {
            if (void 0 === a)
                return this[0] ? this[0].innerHTML : void 0;
            for (var e = 0; e < this.length; e += 1)
                this[e].innerHTML = a;
            return this
        },
        text: function(a) {
            if (void 0 === a)
                return this[0] ? this[0].textContent.trim() : null;
            for (var e = 0; e < this.length; e += 1)
                this[e].textContent = a;
            return this
        },
        is: function(a) {
            var e, h = this[0];
            if (!h || void 0 === a)
                return !1;
            if ("string" == typeof a) {
                if (h.matches)
                    return h.matches(a);
                if (h.webkitMatchesSelector)
                    return h.webkitMatchesSelector(a);
                if (h.msMatchesSelector)
                    return h.msMatchesSelector(a);
                a = d(a);
                for (e = 0; e < a.length; e += 1)
                    if (a[e] === h)
                        return !0;
                return !1
            }
            if (a === R)
                return h === R;
            if (a === H)
                return h === H;
            if (a.nodeType || a instanceof M)
                for (a = a.nodeType ? [a] : a,
                e = 0; e < a.length; e += 1)
                    if (a[e] === h)
                        return !0;
            return !1
        },
        index: function() {
            var a, e = this[0];
            if (e) {
                for (a = 0; null !== (e = e.previousSibling); )
                    1 === e.nodeType && (a += 1);
                return a
            }
        },
        eq: function(a) {
            if (void 0 === a)
                return this;
            var e, h = this.length;
            return new M(h - 1 < a ? [] : 0 > a ? 0 > (e = h + a) ? [] : [this[e]] : [this[a]])
        },
        append: function() {
            var a, e = [];
            for (a = arguments.length; a--; )
                e[a] = arguments[a];
            for (var h = 0; h < e.length; h += 1) {
                a = e[h];
                for (var l = 0; l < this.length; l += 1)
                    if ("string" == typeof a) {
                        var t = R.createElement("div");
                        for (t.innerHTML = a; t.firstChild; )
                            this[l].appendChild(t.firstChild)
                    } else if (a instanceof M)
                        for (t = 0; t < a.length; t += 1)
                            this[l].appendChild(a[t]);
                    else
                        this[l].appendChild(a)
            }
            return this
        },
        prepend: function(a) {
            var e, h;
            for (e = 0; e < this.length; e += 1)
                if ("string" == typeof a) {
                    var l = R.createElement("div");
                    l.innerHTML = a;
                    for (h = l.childNodes.length - 1; 0 <= h; --h)
                        this[e].insertBefore(l.childNodes[h], this[e].childNodes[0])
                } else if (a instanceof M)
                    for (h = 0; h < a.length; h += 1)
                        this[e].insertBefore(a[h], this[e].childNodes[0]);
                else
                    this[e].insertBefore(a, this[e].childNodes[0]);
            return this
        },
        next: function(a) {
            return 0 < this.length ? a ? this[0].nextElementSibling && d(this[0].nextElementSibling).is(a) ? new M([this[0].nextElementSibling]) : new M([]) : this[0].nextElementSibling ? new M([this[0].nextElementSibling]) : new M([]) : new M([])
        },
        nextAll: function(a) {
            var e = []
              , h = this[0];
            if (!h)
                return new M([]);
            for (; h.nextElementSibling; )
                h = h.nextElementSibling,
                a ? d(h).is(a) && e.push(h) : e.push(h);
            return new M(e)
        },
        prev: function(a) {
            if (0 < this.length) {
                var e = this[0];
                return a ? e.previousElementSibling && d(e.previousElementSibling).is(a) ? new M([e.previousElementSibling]) : new M([]) : e.previousElementSibling ? new M([e.previousElementSibling]) : new M([])
            }
            return new M([])
        },
        prevAll: function(a) {
            var e = []
              , h = this[0];
            if (!h)
                return new M([]);
            for (; h.previousElementSibling; )
                h = h.previousElementSibling,
                a ? d(h).is(a) && e.push(h) : e.push(h);
            return new M(e)
        },
        parent: function(a) {
            for (var e = [], h = 0; h < this.length; h += 1)
                null !== this[h].parentNode && (a ? d(this[h].parentNode).is(a) && e.push(this[h].parentNode) : e.push(this[h].parentNode));
            return d(k(e))
        },
        parents: function(a) {
            for (var e = [], h = 0; h < this.length; h += 1)
                for (var l = this[h].parentNode; l; )
                    a ? d(l).is(a) && e.push(l) : e.push(l),
                    l = l.parentNode;
            return d(k(e))
        },
        closest: function(a) {
            var e = this;
            return void 0 === a ? new M([]) : (e.is(a) || (e = e.parents(a).eq(0)),
            e)
        },
        find: function(a) {
            for (var e = [], h = 0; h < this.length; h += 1)
                for (var l = this[h].querySelectorAll(a), t = 0; t < l.length; t += 1)
                    e.push(l[t]);
            return new M(e)
        },
        children: function(a) {
            for (var e = [], h = 0; h < this.length; h += 1)
                for (var l = this[h].childNodes, t = 0; t < l.length; t += 1)
                    a ? 1 === l[t].nodeType && d(l[t]).is(a) && e.push(l[t]) : 1 === l[t].nodeType && e.push(l[t]);
            return new M(k(e))
        },
        remove: function() {
            for (var a = 0; a < this.length; a += 1)
                this[a].parentNode && this[a].parentNode.removeChild(this[a]);
            return this
        },
        add: function() {
            for (var a = [], e = arguments.length; e--; )
                a[e] = arguments[e];
            var h;
            for (e = 0; e < a.length; e += 1) {
                var l = d(a[e]);
                for (h = 0; h < l.length; h += 1)
                    this[this.length] = l[h],
                    this.length += 1
            }
            return this
        },
        styles: function() {
            return this[0] ? H.getComputedStyle(this[0], null) : {}
        }
    };
    Object.keys(ja).forEach(function(a) {
        d.fn[a] = ja[a]
    });
    var Ea, Fa, oa, b = {
        deleteProps: function(a) {
            Object.keys(a).forEach(function(e) {
                try {
                    a[e] = null
                } catch (h) {}
                try {
                    delete a[e]
                } catch (h) {}
            })
        },
        nextTick: function(a, e) {
            return void 0 === e && (e = 0),
            setTimeout(a, e)
        },
        now: function() {
            return Date.now()
        },
        getTranslate: function(a, e) {
            var h, l, t;
            void 0 === e && (e = "x");
            a = H.getComputedStyle(a, null);
            return H.WebKitCSSMatrix ? (6 < (l = a.transform || a.webkitTransform).split(",").length && (l = l.split(", ").map(function(z) {
                return z.replace(",", ".")
            }).join(", ")),
            t = new H.WebKitCSSMatrix("none" === l ? "" : l)) : h = (t = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","),
            "x" === e && (l = H.WebKitCSSMatrix ? t.m41 : 16 === h.length ? parseFloat(h[12]) : parseFloat(h[4])),
            "y" === e && (l = H.WebKitCSSMatrix ? t.m42 : 16 === h.length ? parseFloat(h[13]) : parseFloat(h[5])),
            l || 0
        },
        parseUrlQuery: function(a) {
            var e = {};
            var h = a || H.location.href;
            if ("string" == typeof h && h.length) {
                var l = (a = (h = -1 < h.indexOf("?") ? h.replace(/\S*\?/, "") : "").split("&").filter(function(z) {
                    return "" !== z
                })).length;
                for (h = 0; h < l; h += 1) {
                    var t = a[h].replace(/#\S+/g, "").split("=");
                    e[decodeURIComponent(t[0])] = void 0 === t[1] ? void 0 : decodeURIComponent(t[1]) || ""
                }
            }
            return e
        },
        isObject: function(a) {
            return "object" == typeof a && null !== a && a.constructor && a.constructor === Object
        },
        extend: function() {
            for (var a = [], e = arguments.length; e--; )
                a[e] = arguments[e];
            e = Object(a[0]);
            for (var h = 1; h < a.length; h += 1) {
                var l = a[h];
                if (null != l)
                    for (var t = Object.keys(Object(l)), z = 0, x = t.length; z < x; z += 1) {
                        var D = t[z]
                          , L = Object.getOwnPropertyDescriptor(l, D);
                        void 0 !== L && L.enumerable && (b.isObject(e[D]) && b.isObject(l[D]) ? b.extend(e[D], l[D]) : !b.isObject(e[D]) && b.isObject(l[D]) ? (e[D] = {},
                        b.extend(e[D], l[D])) : e[D] = l[D])
                    }
            }
            return e
        }
    }, g = (oa = R.createElement("div"),
    {
        touch: H.Modernizr && !0 === H.Modernizr.touch || !!("ontouchstart"in H || H.DocumentTouch && R instanceof H.DocumentTouch),
        pointerEvents: !(!H.navigator.pointerEnabled && !H.PointerEvent),
        prefixedPointerEvents: !!H.navigator.msPointerEnabled,
        transition: (Fa = oa.style,
        "transition"in Fa || "webkitTransition"in Fa || "MozTransition"in Fa),
        transforms3d: H.Modernizr && !0 === H.Modernizr.csstransforms3d || (Ea = oa.style,
        "webkitPerspective"in Ea || "MozPerspective"in Ea || "OPerspective"in Ea || "MsPerspective"in Ea || "perspective"in Ea),
        flexbox: function() {
            for (var a = oa.style, e = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), h = 0; h < e.length; h += 1)
                if (e[h]in a)
                    return !0;
            return !1
        }(),
        observer: "MutationObserver"in H || "WebkitMutationObserver"in H,
        passiveListener: function() {
            var a = !1;
            try {
                var e = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                H.addEventListener("testPassiveListener", null, e)
            } catch (h) {}
            return a
        }(),
        gestures: "ongesturestart"in H
    });
    Ea = function(a) {
        void 0 === a && (a = {});
        var e = this;
        e.params = a;
        e.eventsListeners = {};
        e.params && e.params.on && Object.keys(e.params.on).forEach(function(h) {
            e.on(h, e.params.on[h])
        })
    }
    ;
    Fa = {
        components: {
            configurable: !0
        }
    };
    Ea.prototype.on = function(a, e, h) {
        var l = this;
        if ("function" != typeof e)
            return l;
        var t = h ? "unshift" : "push";
        return a.split(" ").forEach(function(z) {
            l.eventsListeners[z] || (l.eventsListeners[z] = []);
            l.eventsListeners[z][t](e)
        }),
        l
    }
    ;
    Ea.prototype.once = function(a, e, h) {
        var l = this;
        return "function" != typeof e ? l : l.on(a, function z() {
            for (var x = [], D = arguments.length; D--; )
                x[D] = arguments[D];
            e.apply(l, x);
            l.off(a, z)
        }, h)
    }
    ;
    Ea.prototype.off = function(a, e) {
        var h = this;
        return h.eventsListeners && a.split(" ").forEach(function(l) {
            void 0 === e ? h.eventsListeners[l] = [] : h.eventsListeners[l] && h.eventsListeners[l].length && h.eventsListeners[l].forEach(function(t, z) {
                t === e && h.eventsListeners[l].splice(z, 1)
            })
        }),
        h
    }
    ;
    Ea.prototype.emit = function() {
        for (var a = [], e = arguments.length; e--; )
            a[e] = arguments[e];
        var h, l, t, z = this;
        return z.eventsListeners && ("string" == typeof a[0] || Array.isArray(a[0]) ? (h = a[0],
        l = a.slice(1, a.length),
        t = z) : (h = a[0].events,
        l = a[0].data,
        t = a[0].context || z),
        (Array.isArray(h) ? h : h.split(" ")).forEach(function(x) {
            if (z.eventsListeners && z.eventsListeners[x]) {
                var D = [];
                z.eventsListeners[x].forEach(function(L) {
                    D.push(L)
                });
                D.forEach(function(L) {
                    L.apply(t, l)
                })
            }
        })),
        z
    }
    ;
    Ea.prototype.useModulesParams = function(a) {
        var e = this;
        e.modules && Object.keys(e.modules).forEach(function(h) {
            h = e.modules[h];
            h.params && b.extend(a, h.params)
        })
    }
    ;
    Ea.prototype.useModules = function(a) {
        void 0 === a && (a = {});
        var e = this;
        e.modules && Object.keys(e.modules).forEach(function(h) {
            var l = e.modules[h];
            h = a[h] || {};
            l.instance && Object.keys(l.instance).forEach(function(t) {
                var z = l.instance[t];
                e[t] = "function" == typeof z ? z.bind(e) : z
            });
            l.on && e.on && Object.keys(l.on).forEach(function(t) {
                e.on(t, l.on[t])
            });
            l.create && l.create.bind(e)(h)
        })
    }
    ;
    Fa.components.set = function(a) {
        this.use && this.use(a)
    }
    ;
    Ea.installModule = function(a) {
        for (var e = [], h = arguments.length - 1; 0 < h--; )
            e[h] = arguments[h + 1];
        var l = this;
        l.prototype.modules || (l.prototype.modules = {});
        h = a.name || Object.keys(l.prototype.modules).length + "_" + b.now();
        return (l.prototype.modules[h] = a).proto && Object.keys(a.proto).forEach(function(t) {
            l.prototype[t] = a.proto[t]
        }),
        a.static && Object.keys(a.static).forEach(function(t) {
            l[t] = a.static[t]
        }),
        a.install && a.install.apply(l, e),
        l
    }
    ;
    Ea.use = function(a) {
        for (var e = [], h = arguments.length - 1; 0 < h--; )
            e[h] = arguments[h + 1];
        var l = this;
        return Array.isArray(a) ? (a.forEach(function(t) {
            return l.installModule(t)
        }),
        l) : l.installModule.apply(l, [a].concat(e))
    }
    ;
    Object.defineProperties(Ea, Fa);
    var u = function() {
        var a = H.navigator.userAgent
          , e = {
            ios: !1,
            android: !1,
            androidChrome: !1,
            desktop: !1,
            windows: !1,
            iphone: !1,
            ipod: !1,
            ipad: !1,
            cordova: H.cordova || H.phonegap,
            phonegap: H.cordova || H.phonegap
        }
          , h = a.match(/(Windows Phone);?[\s\/]+([\d.]+)?/)
          , l = a.match(/(Android);?[\s\/]+([\d.]+)?/)
          , t = a.match(/(iPad).*OS\s([\d_]+)/)
          , z = a.match(/(iPod)(.*OS\s([\d_]+))?/)
          , x = !t && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
        if (h && (e.os = "windows",
        e.osVersion = h[2],
        e.windows = !0),
        l && !h && (e.os = "android",
        e.osVersion = l[2],
        e.android = !0,
        e.androidChrome = 0 <= a.toLowerCase().indexOf("chrome")),
        (t || x || z) && (e.os = "ios",
        e.ios = !0),
        x && !z && (e.osVersion = x[2].replace(/_/g, "."),
        e.iphone = !0),
        t && (e.osVersion = t[2].replace(/_/g, "."),
        e.ipad = !0),
        z && (e.osVersion = z[3] ? z[3].replace(/_/g, ".") : null,
        e.iphone = !0),
        e.ios && e.osVersion && 0 <= a.indexOf("Version/") && "10" === e.osVersion.split(".")[0] && (e.osVersion = a.toLowerCase().split("version/")[1].split(" ")[0]),
        e.desktop = !(e.os || e.android || e.webView),
        e.webView = (x || t || z) && a.match(/.*AppleWebKit(?!.*Safari)/i),
        e.os && "ios" === e.os)
            a = e.osVersion.split("."),
            h = R.querySelector('meta[name="viewport"]'),
            e.minimalUi = !e.webView && (z || x) && (7 == 1 * a[0] ? 1 <= 1 * a[1] : 7 < 1 * a[0]) && h && 0 <= h.getAttribute("content").indexOf("minimal-ui");
        return e.pixelRatio = H.devicePixelRatio || 1,
        e
    }(), y, I = {
        isIE: !!H.navigator.userAgent.match(/Trident/g) || !!H.navigator.userAgent.match(/MSIE/g),
        isEdge: !!H.navigator.userAgent.match(/Edge/g),
        isSafari: (y = H.navigator.userAgent.toLowerCase(),
        0 <= y.indexOf("safari") && 0 > y.indexOf("chrome") && 0 > y.indexOf("android")),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(H.navigator.userAgent)
    }, T = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "container",
        initialSlide: 0,
        speed: 300,
        preventInteractionOnTransition: !1,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: .02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsInverse: !1,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        slidesPerGroup: 1,
        centeredSlides: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !1,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !0,
        touchStartPreventDefault: !0,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-container-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0
    }, P = {
        update: {
            updateSize: function() {
                var a = this.$el;
                var e = void 0 !== this.params.width ? this.params.width : a[0].clientWidth;
                var h = void 0 !== this.params.height ? this.params.height : a[0].clientHeight;
                0 === e && this.isHorizontal() || 0 === h && this.isVertical() || (e = e - parseInt(a.css("padding-left"), 10) - parseInt(a.css("padding-right"), 10),
                h = h - parseInt(a.css("padding-top"), 10) - parseInt(a.css("padding-bottom"), 10),
                b.extend(this, {
                    width: e,
                    height: h,
                    size: this.isHorizontal() ? e : h
                }))
            },
            updateSlides: function() {
                var a = this.params
                  , e = this.$wrapperEl
                  , h = this.size
                  , l = this.rtlTranslate
                  , t = this.wrongRTL
                  , z = this.virtual && a.virtual.enabled
                  , x = z ? this.virtual.slides.length : this.slides.length
                  , D = e.children("." + this.params.slideClass);
                z = z ? this.virtual.slides.length : D.length;
                var L = []
                  , Y = []
                  , ka = []
                  , da = a.slidesOffsetBefore;
                "function" == typeof da && (da = a.slidesOffsetBefore.call(this));
                var ea = a.slidesOffsetAfter;
                "function" == typeof ea && (ea = a.slidesOffsetAfter.call(this));
                var ya = this.snapGrid.length
                  , Ma = this.snapGrid.length
                  , Da = a.spaceBetween;
                da = -da;
                var La = 0
                  , Pa = 0;
                if (void 0 !== h) {
                    var Ra;
                    "string" == typeof Da && 0 <= Da.indexOf("%") && (Da = parseFloat(Da.replace("%", "")) / 100 * h);
                    this.virtualSize = -Da;
                    l ? D.css({
                        marginLeft: "",
                        marginTop: ""
                    }) : D.css({
                        marginRight: "",
                        marginBottom: ""
                    });
                    1 < a.slidesPerColumn && (Ra = Math.floor(z / a.slidesPerColumn) === z / this.params.slidesPerColumn ? z : Math.ceil(z / a.slidesPerColumn) * a.slidesPerColumn,
                    "auto" !== a.slidesPerView && "row" === a.slidesPerColumnFill && (Ra = Math.max(Ra, a.slidesPerView * a.slidesPerColumn)));
                    for (var Qa = a.slidesPerColumn, zb = Ra / Qa, mc = zb - (a.slidesPerColumn * zb - z), Qb = 0; Qb < z; Qb += 1) {
                        var pb = 0;
                        var Mb = D.eq(Qb);
                        if (1 < a.slidesPerColumn) {
                            var ec = void 0
                              , Zb = void 0
                              , jc = void 0;
                            "column" === a.slidesPerColumnFill ? (jc = Qb - (Zb = Math.floor(Qb / Qa)) * Qa,
                            (mc < Zb || Zb === mc && jc === Qa - 1) && Qa <= (jc += 1) && (jc = 0,
                            Zb += 1),
                            ec = Zb + jc * Ra / Qa,
                            Mb.css({
                                "-webkit-box-ordinal-group": ec,
                                "-moz-box-ordinal-group": ec,
                                "-ms-flex-order": ec,
                                "-webkit-order": ec,
                                order: ec
                            })) : Zb = Qb - (jc = Math.floor(Qb / zb)) * zb;
                            Mb.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== jc && a.spaceBetween && a.spaceBetween + "px").attr("data-swiper-column", Zb).attr("data-swiper-row", jc)
                        }
                        "none" !== Mb.css("display") && ("auto" === a.slidesPerView ? (pb = H.getComputedStyle(Mb[0], null),
                        ec = Mb[0].style.transform,
                        Zb = Mb[0].style.webkitTransform,
                        ec && (Mb[0].style.transform = "none"),
                        Zb && (Mb[0].style.webkitTransform = "none"),
                        pb = a.roundLengths ? this.isHorizontal() ? Mb.outerWidth(!0) : Mb.outerHeight(!0) : this.isHorizontal() ? Mb[0].getBoundingClientRect().width + parseFloat(pb.getPropertyValue("margin-left")) + parseFloat(pb.getPropertyValue("margin-right")) : Mb[0].getBoundingClientRect().height + parseFloat(pb.getPropertyValue("margin-top")) + parseFloat(pb.getPropertyValue("margin-bottom")),
                        ec && (Mb[0].style.transform = ec),
                        Zb && (Mb[0].style.webkitTransform = Zb),
                        a.roundLengths && (pb = Math.floor(pb))) : (pb = (h - (a.slidesPerView - 1) * Da) / a.slidesPerView,
                        a.roundLengths && (pb = Math.floor(pb)),
                        D[Qb] && (this.isHorizontal() ? D[Qb].style.width = pb + "px" : D[Qb].style.height = pb + "px")),
                        D[Qb] && (D[Qb].swiperSlideSize = pb),
                        ka.push(pb),
                        a.centeredSlides ? (da = da + pb / 2 + La / 2 + Da,
                        0 === La && 0 !== Qb && (da = da - h / 2 - Da),
                        0 === Qb && (da = da - h / 2 - Da),
                        .001 > Math.abs(da) && (da = 0),
                        a.roundLengths && (da = Math.floor(da)),
                        0 == Pa % a.slidesPerGroup && L.push(da),
                        Y.push(da)) : (a.roundLengths && (da = Math.floor(da)),
                        0 == Pa % a.slidesPerGroup && L.push(da),
                        Y.push(da),
                        da = da + pb + Da),
                        this.virtualSize += pb + Da,
                        La = pb,
                        Pa += 1)
                    }
                    if (this.virtualSize = Math.max(this.virtualSize, h) + ea,
                    l && t && ("slide" === a.effect || "coverflow" === a.effect) && e.css({
                        width: this.virtualSize + a.spaceBetween + "px"
                    }),
                    g.flexbox && !a.setWrapperSize || (this.isHorizontal() ? e.css({
                        width: this.virtualSize + a.spaceBetween + "px"
                    }) : e.css({
                        height: this.virtualSize + a.spaceBetween + "px"
                    })),
                    1 < a.slidesPerColumn && (this.virtualSize = (pb + a.spaceBetween) * Ra,
                    this.virtualSize = Math.ceil(this.virtualSize / a.slidesPerColumn) - a.spaceBetween,
                    this.isHorizontal() ? e.css({
                        width: this.virtualSize + a.spaceBetween + "px"
                    }) : e.css({
                        height: this.virtualSize + a.spaceBetween + "px"
                    }),
                    a.centeredSlides)) {
                        e = [];
                        for (t = 0; t < L.length; t += 1)
                            Ra = L[t],
                            a.roundLengths && (Ra = Math.floor(Ra)),
                            L[t] < this.virtualSize + L[0] && e.push(Ra);
                        L = e
                    }
                    if (!a.centeredSlides) {
                        e = [];
                        for (t = 0; t < L.length; t += 1)
                            Ra = L[t],
                            a.roundLengths && (Ra = Math.floor(Ra)),
                            L[t] <= this.virtualSize - h && e.push(Ra);
                        L = e;
                        1 < Math.floor(this.virtualSize - h) - Math.floor(L[L.length - 1]) && L.push(this.virtualSize - h)
                    }
                    if (0 === L.length && (L = [0]),
                    0 !== a.spaceBetween && (this.isHorizontal() ? l ? D.css({
                        marginLeft: Da + "px"
                    }) : D.css({
                        marginRight: Da + "px"
                    }) : D.css({
                        marginBottom: Da + "px"
                    })),
                    a.centerInsufficientSlides) {
                        var vc = 0;
                        if (ka.forEach(function(nc) {
                            vc += nc + (a.spaceBetween ? a.spaceBetween : 0)
                        }),
                        (vc -= a.spaceBetween) < h) {
                            var Vb = (h - vc) / 2;
                            L.forEach(function(nc, tc) {
                                L[tc] = nc - Vb
                            });
                            Y.forEach(function(nc, tc) {
                                Y[tc] = nc + Vb
                            })
                        }
                    }
                    b.extend(this, {
                        slides: D,
                        snapGrid: L,
                        slidesGrid: Y,
                        slidesSizesGrid: ka
                    });
                    z !== x && this.emit("slidesLengthChange");
                    L.length !== ya && (this.params.watchOverflow && this.checkOverflow(),
                    this.emit("snapGridLengthChange"));
                    Y.length !== Ma && this.emit("slidesGridLengthChange");
                    (a.watchSlidesProgress || a.watchSlidesVisibility) && this.updateSlidesOffset()
                }
            },
            updateAutoHeight: function(a) {
                var e = []
                  , h = 0;
                if ("number" == typeof a ? this.setTransition(a) : !0 === a && this.setTransition(this.params.speed),
                "auto" !== this.params.slidesPerView && 1 < this.params.slidesPerView)
                    for (a = 0; a < Math.ceil(this.params.slidesPerView); a += 1) {
                        var l = this.activeIndex + a;
                        if (l > this.slides.length)
                            break;
                        e.push(this.slides.eq(l)[0])
                    }
                else
                    e.push(this.slides.eq(this.activeIndex)[0]);
                for (a = 0; a < e.length; a += 1)
                    void 0 !== e[a] && (l = e[a].offsetHeight,
                    h = h < l ? l : h);
                h && this.$wrapperEl.css("height", h + "px")
            },
            updateSlidesOffset: function() {
                for (var a = this.slides, e = 0; e < a.length; e += 1)
                    a[e].swiperSlideOffset = this.isHorizontal() ? a[e].offsetLeft : a[e].offsetTop
            },
            updateSlidesProgress: function(a) {
                void 0 === a && (a = this && this.translate || 0);
                var e = this.params
                  , h = this.slides
                  , l = this.rtlTranslate;
                if (0 !== h.length) {
                    void 0 === h[0].swiperSlideOffset && this.updateSlidesOffset();
                    var t = -a;
                    l && (t = a);
                    h.removeClass(e.slideVisibleClass);
                    this.visibleSlidesIndexes = [];
                    this.visibleSlides = [];
                    for (a = 0; a < h.length; a += 1) {
                        var z = h[a]
                          , x = (t + (e.centeredSlides ? this.minTranslate() : 0) - z.swiperSlideOffset) / (z.swiperSlideSize + e.spaceBetween);
                        if (e.watchSlidesVisibility) {
                            var D = -(t - z.swiperSlideOffset)
                              , L = D + this.slidesSizesGrid[a];
                            (0 <= D && D < this.size || 0 < L && L <= this.size || 0 >= D && L >= this.size) && (this.visibleSlides.push(z),
                            this.visibleSlidesIndexes.push(a),
                            h.eq(a).addClass(e.slideVisibleClass))
                        }
                        z.progress = l ? -x : x
                    }
                    this.visibleSlides = d(this.visibleSlides)
                }
            },
            updateProgress: function(a) {
                void 0 === a && (a = this && this.translate || 0);
                var e = this.params
                  , h = this.maxTranslate() - this.minTranslate()
                  , l = this.progress
                  , t = this.isBeginning
                  , z = this.isEnd
                  , x = t
                  , D = z;
                0 === h ? z = t = !(l = 0) : (t = 0 >= (l = (a - this.minTranslate()) / h),
                z = 1 <= l);
                b.extend(this, {
                    progress: l,
                    isBeginning: t,
                    isEnd: z
                });
                (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesProgress(a);
                t && !x && this.emit("reachBeginning toEdge");
                z && !D && this.emit("reachEnd toEdge");
                (x && !t || D && !z) && this.emit("fromEdge");
                this.emit("progress", l)
            },
            updateSlidesClasses: function() {
                var a = this.slides
                  , e = this.params
                  , h = this.$wrapperEl;
                var l = this.activeIndex;
                var t = this.realIndex
                  , z = this.virtual && e.virtual.enabled;
                a.removeClass(e.slideActiveClass + " " + e.slideNextClass + " " + e.slidePrevClass + " " + e.slideDuplicateActiveClass + " " + e.slideDuplicateNextClass + " " + e.slideDuplicatePrevClass);
                (l = z ? this.$wrapperEl.find("." + e.slideClass + '[data-swiper-slide-index="' + l + '"]') : a.eq(l)).addClass(e.slideActiveClass);
                e.loop && (l.hasClass(e.slideDuplicateClass) ? h.children("." + e.slideClass + ":not(." + e.slideDuplicateClass + ')[data-swiper-slide-index="' + t + '"]').addClass(e.slideDuplicateActiveClass) : h.children("." + e.slideClass + "." + e.slideDuplicateClass + '[data-swiper-slide-index="' + t + '"]').addClass(e.slideDuplicateActiveClass));
                t = l.nextAll("." + e.slideClass).eq(0).addClass(e.slideNextClass);
                e.loop && 0 === t.length && (t = a.eq(0)).addClass(e.slideNextClass);
                l = l.prevAll("." + e.slideClass).eq(0).addClass(e.slidePrevClass);
                e.loop && 0 === l.length && (l = a.eq(-1)).addClass(e.slidePrevClass);
                e.loop && (t.hasClass(e.slideDuplicateClass) ? h.children("." + e.slideClass + ":not(." + e.slideDuplicateClass + ')[data-swiper-slide-index="' + t.attr("data-swiper-slide-index") + '"]').addClass(e.slideDuplicateNextClass) : h.children("." + e.slideClass + "." + e.slideDuplicateClass + '[data-swiper-slide-index="' + t.attr("data-swiper-slide-index") + '"]').addClass(e.slideDuplicateNextClass),
                l.hasClass(e.slideDuplicateClass) ? h.children("." + e.slideClass + ":not(." + e.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(e.slideDuplicatePrevClass) : h.children("." + e.slideClass + "." + e.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(e.slideDuplicatePrevClass))
            },
            updateActiveIndex: function(a) {
                var e = this.rtlTranslate ? this.translate : -this.translate;
                var h = this.slidesGrid
                  , l = this.snapGrid
                  , t = this.params
                  , z = this.activeIndex
                  , x = this.realIndex
                  , D = this.snapIndex;
                if (void 0 === a) {
                    for (var L = 0; L < h.length; L += 1)
                        void 0 !== h[L + 1] ? e >= h[L] && e < h[L + 1] - (h[L + 1] - h[L]) / 2 ? a = L : e >= h[L] && e < h[L + 1] && (a = L + 1) : e >= h[L] && (a = L);
                    t.normalizeSlideIndex && (0 > a || void 0 === a) && (a = 0)
                }
                ((e = 0 <= l.indexOf(e) ? l.indexOf(e) : Math.floor(a / t.slidesPerGroup)) >= l.length && (e = l.length - 1),
                a !== z) ? (l = parseInt(this.slides.eq(a).attr("data-swiper-slide-index") || a, 10),
                b.extend(this, {
                    snapIndex: e,
                    realIndex: l,
                    previousIndex: z,
                    activeIndex: a
                }),
                this.emit("activeIndexChange"),
                this.emit("snapIndexChange"),
                x !== l && this.emit("realIndexChange"),
                this.emit("slideChange")) : e !== D && (this.snapIndex = e,
                this.emit("snapIndexChange"))
            },
            updateClickedSlide: function(a) {
                var e = this.params;
                a = d(a.target).closest("." + e.slideClass)[0];
                var h = !1;
                if (a)
                    for (var l = 0; l < this.slides.length; l += 1)
                        this.slides[l] === a && (h = !0);
                if (!a || !h)
                    return this.clickedSlide = void 0,
                    void (this.clickedIndex = void 0);
                this.clickedSlide = a;
                this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(d(a).attr("data-swiper-slide-index"), 10) : this.clickedIndex = d(a).index();
                e.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
            }
        },
        translate: {
            getTranslate: function(a) {
                void 0 === a && (a = this.isHorizontal() ? "x" : "y");
                var e = this.rtlTranslate
                  , h = this.translate;
                if (this.params.virtualTranslate)
                    return e ? -h : h;
                a = b.getTranslate(this.$wrapperEl[0], a);
                return e && (a = -a),
                a || 0
            },
            setTranslate: function(a, e) {
                var h = this.rtlTranslate
                  , l = this.params
                  , t = this.$wrapperEl
                  , z = this.progress
                  , x = 0
                  , D = 0;
                this.isHorizontal() ? x = h ? -a : a : D = a;
                l.roundLengths && (x = Math.floor(x),
                D = Math.floor(D));
                l.virtualTranslate || (g.transforms3d ? t.transform("translate3d(" + x + "px, " + D + "px, 0px)") : t.transform("translate(" + x + "px, " + D + "px)"));
                this.previousTranslate = this.translate;
                this.translate = this.isHorizontal() ? x : D;
                h = this.maxTranslate() - this.minTranslate();
                (0 === h ? 0 : (a - this.minTranslate()) / h) !== z && this.updateProgress(a);
                this.emit("setTranslate", this.translate, e)
            },
            minTranslate: function() {
                return -this.snapGrid[0]
            },
            maxTranslate: function() {
                return -this.snapGrid[this.snapGrid.length - 1]
            }
        },
        transition: {
            setTransition: function(a, e) {
                this.$wrapperEl.transition(a);
                this.emit("setTransition", a, e)
            },
            transitionStart: function(a, e) {
                void 0 === a && (a = !0);
                var h = this.activeIndex
                  , l = this.previousIndex;
                this.params.autoHeight && this.updateAutoHeight();
                if (e ||= l < h ? "next" : h < l ? "prev" : "reset",
                this.emit("transitionStart"),
                a && h !== l) {
                    if ("reset" === e)
                        return void this.emit("slideResetTransitionStart");
                    this.emit("slideChangeTransitionStart");
                    "next" === e ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart")
                }
            },
            transitionEnd: function(a, e) {
                void 0 === a && (a = !0);
                var h = this.activeIndex
                  , l = this.previousIndex;
                this.animating = !1;
                this.setTransition(0);
                if (e ||= l < h ? "next" : h < l ? "prev" : "reset",
                this.emit("transitionEnd"),
                a && h !== l) {
                    if ("reset" === e)
                        return void this.emit("slideResetTransitionEnd");
                    this.emit("slideChangeTransitionEnd");
                    "next" === e ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd")
                }
            }
        },
        slide: {
            slideTo: function(a, e, h, l) {
                void 0 === a && (a = 0);
                void 0 === e && (e = this.params.speed);
                void 0 === h && (h = !0);
                var t = this;
                0 > a && (a = 0);
                var z = t.params
                  , x = t.snapGrid
                  , D = t.slidesGrid
                  , L = t.previousIndex
                  , Y = t.activeIndex
                  , ka = t.rtlTranslate;
                if (t.animating && z.preventInteractionOnTransition)
                    return !1;
                var da = Math.floor(a / z.slidesPerGroup);
                da >= x.length && (da = x.length - 1);
                (Y || z.initialSlide || 0) === (L || 0) && h && t.emit("beforeSlideChangeStart");
                var ea;
                x = -x[da];
                if (t.updateProgress(x),
                z.normalizeSlideIndex)
                    for (L = 0; L < D.length; L += 1)
                        -Math.floor(100 * x) >= Math.floor(100 * D[L]) && (a = L);
                return t.initialized && a !== Y && (!t.allowSlideNext && x < t.translate && x < t.minTranslate() || !t.allowSlidePrev && x > t.translate && x > t.maxTranslate() && (Y || 0) !== a) ? !1 : (ea = Y < a ? "next" : a < Y ? "prev" : "reset",
                ka && -x === t.translate || !ka && x === t.translate ? (t.updateActiveIndex(a),
                z.autoHeight && t.updateAutoHeight(),
                t.updateSlidesClasses(),
                "slide" !== z.effect && t.setTranslate(x),
                "reset" !== ea && (t.transitionStart(h, ea),
                t.transitionEnd(h, ea)),
                !1) : (0 !== e && g.transition ? (t.setTransition(e),
                t.setTranslate(x),
                t.updateActiveIndex(a),
                t.updateSlidesClasses(),
                t.emit("beforeTransitionStart", e, l),
                t.transitionStart(h, ea),
                t.animating || (t.animating = !0,
                t.onSlideToWrapperTransitionEnd || (t.onSlideToWrapperTransitionEnd = function(ya) {
                    t && !t.destroyed && ya.target === this && (t.$wrapperEl[0].removeEventListener("transitionend", t.onSlideToWrapperTransitionEnd),
                    t.$wrapperEl[0].removeEventListener("webkitTransitionEnd", t.onSlideToWrapperTransitionEnd),
                    t.onSlideToWrapperTransitionEnd = null,
                    delete t.onSlideToWrapperTransitionEnd,
                    t.transitionEnd(h, ea))
                }
                ),
                t.$wrapperEl[0].addEventListener("transitionend", t.onSlideToWrapperTransitionEnd),
                t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.onSlideToWrapperTransitionEnd))) : (t.setTransition(0),
                t.setTranslate(x),
                t.updateActiveIndex(a),
                t.updateSlidesClasses(),
                t.emit("beforeTransitionStart", e, l),
                t.transitionStart(h, ea),
                t.transitionEnd(h, ea)),
                !0))
            },
            slideToLoop: function(a, e, h, l) {
                void 0 === a && (a = 0);
                void 0 === e && (e = this.params.speed);
                void 0 === h && (h = !0);
                return this.params.loop && (a += this.loopedSlides),
                this.slideTo(a, e, h, l)
            },
            slideNext: function(a, e, h) {
                void 0 === a && (a = this.params.speed);
                void 0 === e && (e = !0);
                var l = this.params
                  , t = this.animating;
                return l.loop ? !t && (this.loopFix(),
                this._clientLeft = this.$wrapperEl[0].clientLeft,
                this.slideTo(this.activeIndex + l.slidesPerGroup, a, e, h)) : this.slideTo(this.activeIndex + l.slidesPerGroup, a, e, h)
            },
            slidePrev: function(a, e, h) {
                function l(Y) {
                    return 0 > Y ? -Math.floor(Math.abs(Y)) : Math.floor(Y)
                }
                void 0 === a && (a = this.params.speed);
                void 0 === e && (e = !0);
                var t = this.animating
                  , z = this.snapGrid
                  , x = this.slidesGrid
                  , D = this.rtlTranslate;
                if (this.params.loop) {
                    if (t)
                        return !1;
                    this.loopFix();
                    this._clientLeft = this.$wrapperEl[0].clientLeft
                }
                var L;
                t = l(D ? this.translate : -this.translate);
                D = z.map(function(Y) {
                    return l(Y)
                });
                z = (x.map(function(Y) {
                    return l(Y)
                }),
                z[D.indexOf(t)],
                z[D.indexOf(t) - 1]);
                return void 0 !== z && 0 > (L = x.indexOf(z)) && (L = this.activeIndex - 1),
                this.slideTo(L, a, e, h)
            },
            slideReset: function(a, e, h) {
                return void 0 === a && (a = this.params.speed),
                void 0 === e && (e = !0),
                this.slideTo(this.activeIndex, a, e, h)
            },
            slideToClosest: function(a, e, h) {
                void 0 === a && (a = this.params.speed);
                void 0 === e && (e = !0);
                var l = this.activeIndex
                  , t = Math.floor(l / this.params.slidesPerGroup);
                if (t < this.snapGrid.length - 1) {
                    var z = this.snapGrid[t];
                    (this.snapGrid[t + 1] - z) / 2 < (this.rtlTranslate ? this.translate : -this.translate) - z && (l = this.params.slidesPerGroup)
                }
                return this.slideTo(l, a, e, h)
            },
            slideToClickedSlide: function() {
                var a = this
                  , e = a.params
                  , h = a.$wrapperEl
                  , l = "auto" === e.slidesPerView ? a.slidesPerViewDynamic() : e.slidesPerView
                  , t = a.clickedIndex;
                if (e.loop) {
                    if (!a.animating) {
                        var z = parseInt(d(a.clickedSlide).attr("data-swiper-slide-index"), 10);
                        e.centeredSlides ? t < a.loopedSlides - l / 2 || t > a.slides.length - a.loopedSlides + l / 2 ? (a.loopFix(),
                        t = h.children("." + e.slideClass + '[data-swiper-slide-index="' + z + '"]:not(.' + e.slideDuplicateClass + ")").eq(0).index(),
                        b.nextTick(function() {
                            a.slideTo(t)
                        })) : a.slideTo(t) : t > a.slides.length - l ? (a.loopFix(),
                        t = h.children("." + e.slideClass + '[data-swiper-slide-index="' + z + '"]:not(.' + e.slideDuplicateClass + ")").eq(0).index(),
                        b.nextTick(function() {
                            a.slideTo(t)
                        })) : a.slideTo(t)
                    }
                } else
                    a.slideTo(t)
            }
        },
        loop: {
            loopCreate: function() {
                var a = this
                  , e = a.params
                  , h = a.$wrapperEl;
                h.children("." + e.slideClass + "." + e.slideDuplicateClass).remove();
                var l = h.children("." + e.slideClass);
                if (e.loopFillGroupWithBlank) {
                    var t = e.slidesPerGroup - l.length % e.slidesPerGroup;
                    if (t !== e.slidesPerGroup) {
                        for (var z = 0; z < t; z += 1) {
                            var x = d(R.createElement("div")).addClass(e.slideClass + " " + e.slideBlankClass);
                            h.append(x)
                        }
                        l = h.children("." + e.slideClass)
                    }
                }
                "auto" !== e.slidesPerView || e.loopedSlides || (e.loopedSlides = l.length);
                a.loopedSlides = parseInt(e.loopedSlides || e.slidesPerView, 10);
                a.loopedSlides += e.loopAdditionalSlides;
                a.loopedSlides > l.length && (a.loopedSlides = l.length);
                var D = []
                  , L = [];
                l.each(function(Y, ka) {
                    var da = d(ka);
                    Y < a.loopedSlides && L.push(ka);
                    Y < l.length && Y >= l.length - a.loopedSlides && D.push(ka);
                    da.attr("data-swiper-slide-index", Y)
                });
                for (t = 0; t < L.length; t += 1)
                    h.append(d(L[t].cloneNode(!0)).addClass(e.slideDuplicateClass));
                for (t = D.length - 1; 0 <= t; --t)
                    h.prepend(d(D[t].cloneNode(!0)).addClass(e.slideDuplicateClass))
            },
            loopFix: function() {
                var a, e = this.params, h = this.activeIndex, l = this.slides, t = this.loopedSlides, z = this.allowSlidePrev, x = this.allowSlideNext, D = this.snapGrid, L = this.rtlTranslate;
                this.allowSlideNext = this.allowSlidePrev = !0;
                D = -D[h] - this.getTranslate();
                h < t ? (a = l.length - 3 * t + h,
                a += t,
                this.slideTo(a, 0, !1, !0) && 0 !== D && this.setTranslate((L ? -this.translate : this.translate) - D)) : ("auto" === e.slidesPerView && 2 * t <= h || h >= l.length - t) && (a = -l.length + h + t,
                a += t,
                this.slideTo(a, 0, !1, !0) && 0 !== D && this.setTranslate((L ? -this.translate : this.translate) - D));
                this.allowSlidePrev = z;
                this.allowSlideNext = x
            },
            loopDestroy: function() {
                var a = this.params
                  , e = this.slides;
                this.$wrapperEl.children("." + a.slideClass + "." + a.slideDuplicateClass).remove();
                e.removeAttr("data-swiper-slide-index")
            }
        },
        grabCursor: {
            setGrabCursor: function(a) {
                if (!(g.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked)) {
                    var e = this.el;
                    e.style.cursor = "move";
                    e.style.cursor = a ? "-webkit-grabbing" : "-webkit-grab";
                    e.style.cursor = a ? "-moz-grabbin" : "-moz-grab";
                    e.style.cursor = a ? "grabbing" : "grab"
                }
            },
            unsetGrabCursor: function() {
                g.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "")
            }
        },
        manipulation: {
            appendSlide: function(a) {
                var e = this.$wrapperEl
                  , h = this.params;
                if (h.loop && this.loopDestroy(),
                "object" == typeof a && "length"in a)
                    for (var l = 0; l < a.length; l += 1)
                        a[l] && e.append(a[l]);
                else
                    e.append(a);
                h.loop && this.loopCreate();
                h.observer && g.observer || this.update()
            },
            prependSlide: function(a) {
                var e = this.params
                  , h = this.$wrapperEl
                  , l = this.activeIndex;
                e.loop && this.loopDestroy();
                var t = l + 1;
                if ("object" == typeof a && "length"in a) {
                    for (t = 0; t < a.length; t += 1)
                        a[t] && h.prepend(a[t]);
                    t = l + a.length
                } else
                    h.prepend(a);
                e.loop && this.loopCreate();
                e.observer && g.observer || this.update();
                this.slideTo(t, 0, !1)
            },
            addSlide: function(a, e) {
                var h = this.$wrapperEl
                  , l = this.params
                  , t = this.activeIndex;
                l.loop && (t -= this.loopedSlides,
                this.loopDestroy(),
                this.slides = h.children("." + l.slideClass));
                var z = this.slides.length;
                if (0 >= a)
                    this.prependSlide(e);
                else if (z <= a)
                    this.appendSlide(e);
                else {
                    var x = a < t ? t + 1 : t
                      , D = [];
                    for (--z; a <= z; --z) {
                        var L = this.slides.eq(z);
                        L.remove();
                        D.unshift(L)
                    }
                    if ("object" == typeof e && "length"in e) {
                        for (x = 0; x < e.length; x += 1)
                            e[x] && h.append(e[x]);
                        x = a < t ? t + e.length : t
                    } else
                        h.append(e);
                    for (a = 0; a < D.length; a += 1)
                        h.append(D[a]);
                    l.loop && this.loopCreate();
                    l.observer && g.observer || this.update();
                    l.loop ? this.slideTo(x + this.loopedSlides, 0, !1) : this.slideTo(x, 0, !1)
                }
            },
            removeSlide: function(a) {
                var e = this.params
                  , h = this.$wrapperEl
                  , l = this.activeIndex;
                e.loop && (l -= this.loopedSlides,
                this.loopDestroy(),
                this.slides = h.children("." + e.slideClass));
                if ("object" == typeof a && "length"in a)
                    for (var t = 0; t < a.length; t += 1)
                        h = a[t],
                        this.slides[h] && this.slides.eq(h).remove(),
                        h < l && --l;
                else
                    h = a,
                    this.slides[h] && this.slides.eq(h).remove(),
                    h < l && --l;
                l = Math.max(l, 0);
                e.loop && this.loopCreate();
                e.observer && g.observer || this.update();
                e.loop ? this.slideTo(l + this.loopedSlides, 0, !1) : this.slideTo(l, 0, !1)
            },
            removeAllSlides: function() {
                for (var a = [], e = 0; e < this.slides.length; e += 1)
                    a.push(e);
                this.removeSlide(a)
            }
        },
        events: {
            attachEvents: function() {
                var a = this.params
                  , e = this.touchEvents
                  , h = this.el
                  , l = this.wrapperEl;
                this.onTouchStart = function(z) {
                    var x = this.touchEventsData
                      , D = this.params
                      , L = this.touches;
                    if (!this.animating || !D.preventInteractionOnTransition)
                        if (z.originalEvent && (z = z.originalEvent),
                        x.isTouchEvent = "touchstart" === z.type,
                        !(!x.isTouchEvent && "which"in z && 3 === z.which || !x.isTouchEvent && "button"in z && 0 < z.button || x.isTouched && x.isMoved))
                            if (D.noSwiping && d(z.target).closest(D.noSwipingSelector ? D.noSwipingSelector : "." + D.noSwipingClass)[0])
                                this.allowClick = !0;
                            else if (!D.swipeHandler || d(z).closest(D.swipeHandler)[0]) {
                                L.currentX = "touchstart" === z.type ? z.targetTouches[0].pageX : z.pageX;
                                L.currentY = "touchstart" === z.type ? z.targetTouches[0].pageY : z.pageY;
                                var Y = L.currentX
                                  , ka = L.currentY
                                  , da = D.edgeSwipeThreshold || D.iOSEdgeSwipeThreshold;
                                if (!D.edgeSwipeDetection && !D.iOSEdgeSwipeDetection || !(Y <= da || Y >= H.screen.width - da)) {
                                    if (b.extend(x, {
                                        isTouched: !0,
                                        isMoved: !1,
                                        allowTouchCallbacks: !0,
                                        isScrolling: void 0,
                                        startMoving: void 0
                                    }),
                                    L.startX = Y,
                                    L.startY = ka,
                                    x.touchStartTime = b.now(),
                                    this.allowClick = !0,
                                    this.updateSize(),
                                    this.swipeDirection = void 0,
                                    0 < D.threshold && (x.allowThresholdMove = !1),
                                    "touchstart" !== z.type)
                                        L = !0,
                                        d(z.target).is(x.formElements) && (L = !1),
                                        R.activeElement && d(R.activeElement).is(x.formElements) && R.activeElement !== z.target && R.activeElement.blur(),
                                        L && this.allowTouchMove && D.touchStartPreventDefault && z.preventDefault();
                                    this.emit("touchStart", z)
                                }
                            }
                }
                .bind(this);
                this.onTouchMove = function(z) {
                    var x = this.touchEventsData
                      , D = this.params
                      , L = this.touches
                      , Y = this.rtlTranslate;
                    if (z.originalEvent && (z = z.originalEvent),
                    x.isTouched) {
                        if (!x.isTouchEvent || "mousemove" !== z.type) {
                            var ka = "touchmove" === z.type ? z.targetTouches[0].pageX : z.pageX
                              , da = "touchmove" === z.type ? z.targetTouches[0].pageY : z.pageY;
                            if (z.preventedByNestedSwiper)
                                return L.startX = ka,
                                void (L.startY = da);
                            if (!this.allowTouchMove)
                                return this.allowClick = !1,
                                void (x.isTouched && (b.extend(L, {
                                    startX: ka,
                                    startY: da,
                                    currentX: ka,
                                    currentY: da
                                }),
                                x.touchStartTime = b.now()));
                            if (x.isTouchEvent && D.touchReleaseOnEdges && !D.loop)
                                if (this.isVertical()) {
                                    if (da < L.startY && this.translate <= this.maxTranslate() || da > L.startY && this.translate >= this.minTranslate())
                                        return x.isTouched = !1,
                                        void (x.isMoved = !1)
                                } else if (ka < L.startX && this.translate <= this.maxTranslate() || ka > L.startX && this.translate >= this.minTranslate())
                                    return;
                            if (x.isTouchEvent && R.activeElement && z.target === R.activeElement && d(z.target).is(x.formElements))
                                return x.isMoved = !0,
                                void (this.allowClick = !1);
                            if (x.allowTouchCallbacks && this.emit("touchMove", z),
                            !(z.targetTouches && 1 < z.targetTouches.length)) {
                                L.currentX = ka;
                                L.currentY = da;
                                var ea;
                                ka = L.currentX - L.startX;
                                da = L.currentY - L.startY;
                                if (!(this.params.threshold && Math.sqrt(Math.pow(ka, 2) + Math.pow(da, 2)) < this.params.threshold))
                                    if (void 0 === x.isScrolling && (this.isHorizontal() && L.currentY === L.startY || this.isVertical() && L.currentX === L.startX ? x.isScrolling = !1 : 25 <= ka * ka + da * da && (ea = 180 * Math.atan2(Math.abs(da), Math.abs(ka)) / Math.PI,
                                    x.isScrolling = this.isHorizontal() ? ea > D.touchAngle : 90 - ea > D.touchAngle)),
                                    x.isScrolling && this.emit("touchMoveOpposite", z),
                                    void 0 === x.startMoving && (L.currentX === L.startX && L.currentY === L.startY || (x.startMoving = !0)),
                                    x.isScrolling)
                                        x.isTouched = !1;
                                    else if (x.startMoving) {
                                        this.allowClick = !1;
                                        z.preventDefault();
                                        D.touchMoveStopPropagation && !D.nested && z.stopPropagation();
                                        x.isMoved || (D.loop && this.loopFix(),
                                        x.startTranslate = this.getTranslate(),
                                        this.setTransition(0),
                                        this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                                        x.allowMomentumBounce = !1,
                                        !D.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0),
                                        this.emit("sliderFirstMove", z));
                                        this.emit("sliderMove", z);
                                        x.isMoved = !0;
                                        ea = this.isHorizontal() ? ka : da;
                                        L.diff = ea;
                                        ea *= D.touchRatio;
                                        Y && (ea = -ea);
                                        this.swipeDirection = 0 < ea ? "prev" : "next";
                                        x.currentTranslate = ea + x.startTranslate;
                                        Y = !0;
                                        ka = D.resistanceRatio;
                                        if (D.touchReleaseOnEdges && (ka = 0),
                                        0 < ea && x.currentTranslate > this.minTranslate() ? (Y = !1,
                                        D.resistance && (x.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + x.startTranslate + ea, ka))) : 0 > ea && x.currentTranslate < this.maxTranslate() && (Y = !1,
                                        D.resistance && (x.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - x.startTranslate - ea, ka))),
                                        Y && (z.preventedByNestedSwiper = !0),
                                        !this.allowSlideNext && "next" === this.swipeDirection && x.currentTranslate < x.startTranslate && (x.currentTranslate = x.startTranslate),
                                        !this.allowSlidePrev && "prev" === this.swipeDirection && x.currentTranslate > x.startTranslate && (x.currentTranslate = x.startTranslate),
                                        0 < D.threshold) {
                                            if (!(Math.abs(ea) > D.threshold || x.allowThresholdMove))
                                                return void (x.currentTranslate = x.startTranslate);
                                            if (!x.allowThresholdMove)
                                                return x.allowThresholdMove = !0,
                                                L.startX = L.currentX,
                                                L.startY = L.currentY,
                                                x.currentTranslate = x.startTranslate,
                                                void (L.diff = this.isHorizontal() ? L.currentX - L.startX : L.currentY - L.startY)
                                        }
                                        D.followFinger && ((D.freeMode || D.watchSlidesProgress || D.watchSlidesVisibility) && (this.updateActiveIndex(),
                                        this.updateSlidesClasses()),
                                        D.freeMode && (0 === x.velocities.length && x.velocities.push({
                                            position: L[this.isHorizontal() ? "startX" : "startY"],
                                            time: x.touchStartTime
                                        }),
                                        x.velocities.push({
                                            position: L[this.isHorizontal() ? "currentX" : "currentY"],
                                            time: b.now()
                                        })),
                                        this.updateProgress(x.currentTranslate),
                                        this.setTranslate(x.currentTranslate))
                                    }
                            }
                        }
                    } else
                        x.startMoving && x.isScrolling && this.emit("touchMoveOpposite", z)
                }
                .bind(this);
                this.onTouchEnd = function(z) {
                    var x = this
                      , D = x.touchEventsData
                      , L = x.params
                      , Y = x.touches
                      , ka = x.rtlTranslate
                      , da = x.$wrapperEl
                      , ea = x.slidesGrid
                      , ya = x.snapGrid
                      , Ma = z;
                    if (Ma.originalEvent && (Ma = Ma.originalEvent),
                    D.allowTouchCallbacks && x.emit("touchEnd", Ma),
                    D.allowTouchCallbacks = !1,
                    !D.isTouched)
                        return D.isMoved && L.grabCursor && x.setGrabCursor(!1),
                        D.isMoved = !1,
                        void (D.startMoving = !1);
                    L.grabCursor && D.isMoved && D.isTouched && (!0 === x.allowSlideNext || !0 === x.allowSlidePrev) && x.setGrabCursor(!1);
                    var Da = b.now();
                    z = Da - D.touchStartTime;
                    if (x.allowClick && (x.updateClickedSlide(Ma),
                    x.emit("tap", Ma),
                    300 > z && 300 < Da - D.lastClickTime && (D.clickTimeout && clearTimeout(D.clickTimeout),
                    D.clickTimeout = b.nextTick(function() {
                        x && !x.destroyed && x.emit("click", Ma)
                    }, 300)),
                    300 > z && 300 > Da - D.lastClickTime && (D.clickTimeout && clearTimeout(D.clickTimeout),
                    x.emit("doubleTap", Ma))),
                    D.lastClickTime = b.now(),
                    b.nextTick(function() {
                        x.destroyed || (x.allowClick = !0)
                    }),
                    !D.isTouched || !D.isMoved || !x.swipeDirection || 0 === Y.diff || D.currentTranslate === D.startTranslate)
                        return D.isTouched = !1,
                        D.isMoved = !1,
                        void (D.startMoving = !1);
                    if (D.isTouched = !1,
                    D.isMoved = !1,
                    D.startMoving = !1,
                    Y = L.followFinger ? ka ? x.translate : -x.translate : -D.currentTranslate,
                    L.freeMode) {
                        if (Y < -x.minTranslate())
                            return void x.slideTo(x.activeIndex);
                        if (Y > -x.maxTranslate())
                            return void (x.slides.length < ya.length ? x.slideTo(ya.length - 1) : x.slideTo(x.slides.length - 1));
                        if (L.freeModeMomentum) {
                            1 < D.velocities.length ? (ea = D.velocities.pop(),
                            Y = D.velocities.pop(),
                            Da = ea.time - Y.time,
                            x.velocity = (ea.position - Y.position) / Da,
                            x.velocity /= 2,
                            Math.abs(x.velocity) < L.freeModeMinimumVelocity && (x.velocity = 0),
                            (150 < Da || 300 < b.now() - ea.time) && (x.velocity = 0)) : x.velocity = 0;
                            x.velocity *= L.freeModeMomentumVelocityRatio;
                            D.velocities.length = 0;
                            ea = 1E3 * L.freeModeMomentumRatio;
                            Y = x.translate + x.velocity * ea;
                            ka && (Y = -Y);
                            var La, Pa;
                            Da = !1;
                            var Ra = 20 * Math.abs(x.velocity) * L.freeModeMomentumBounceRatio;
                            if (Y < x.maxTranslate())
                                L.freeModeMomentumBounce ? (Y + x.maxTranslate() < -Ra && (Y = x.maxTranslate() - Ra),
                                La = x.maxTranslate(),
                                Da = !0,
                                D.allowMomentumBounce = !0) : Y = x.maxTranslate(),
                                L.loop && L.centeredSlides && (Pa = !0);
                            else if (Y > x.minTranslate())
                                L.freeModeMomentumBounce ? (Y - x.minTranslate() > Ra && (Y = x.minTranslate() + Ra),
                                La = x.minTranslate(),
                                Da = !0,
                                D.allowMomentumBounce = !0) : Y = x.minTranslate(),
                                L.loop && L.centeredSlides && (Pa = !0);
                            else if (L.freeModeSticky) {
                                for (Ra = 0; Ra < ya.length; Ra += 1)
                                    if (ya[Ra] > -Y) {
                                        var Qa = Ra;
                                        break
                                    }
                                Y = -(Y = Math.abs(ya[Qa] - Y) < Math.abs(ya[Qa - 1] - Y) || "next" === x.swipeDirection ? ya[Qa] : ya[Qa - 1])
                            }
                            if (Pa && x.once("transitionEnd", function() {
                                x.loopFix()
                            }),
                            0 !== x.velocity)
                                ea = ka ? Math.abs((-Y - x.translate) / x.velocity) : Math.abs((Y - x.translate) / x.velocity);
                            else if (L.freeModeSticky)
                                return void x.slideToClosest();
                            L.freeModeMomentumBounce && Da ? (x.updateProgress(La),
                            x.setTransition(ea),
                            x.setTranslate(Y),
                            x.transitionStart(!0, x.swipeDirection),
                            x.animating = !0,
                            da.transitionEnd(function() {
                                x && !x.destroyed && D.allowMomentumBounce && (x.emit("momentumBounce"),
                                x.setTransition(L.speed),
                                x.setTranslate(La),
                                da.transitionEnd(function() {
                                    x && !x.destroyed && x.transitionEnd()
                                }))
                            })) : x.velocity ? (x.updateProgress(Y),
                            x.setTransition(ea),
                            x.setTranslate(Y),
                            x.transitionStart(!0, x.swipeDirection),
                            x.animating || (x.animating = !0,
                            da.transitionEnd(function() {
                                x && !x.destroyed && x.transitionEnd()
                            }))) : x.updateProgress(Y);
                            x.updateActiveIndex();
                            x.updateSlidesClasses()
                        } else if (L.freeModeSticky)
                            return void x.slideToClosest();
                        (!L.freeModeMomentum || z >= L.longSwipesMs) && (x.updateProgress(),
                        x.updateActiveIndex(),
                        x.updateSlidesClasses())
                    } else {
                        ka = 0;
                        ya = x.slidesSizesGrid[0];
                        for (Pa = 0; Pa < ea.length; Pa += L.slidesPerGroup)
                            void 0 !== ea[Pa + L.slidesPerGroup] ? Y >= ea[Pa] && Y < ea[Pa + L.slidesPerGroup] && (ya = ea[(ka = Pa) + L.slidesPerGroup] - ea[Pa]) : Y >= ea[Pa] && (ka = Pa,
                            ya = ea[ea.length - 1] - ea[ea.length - 2]);
                        ya = (Y - ea[ka]) / ya;
                        if (z > L.longSwipesMs) {
                            if (!L.longSwipes)
                                return void x.slideTo(x.activeIndex);
                            "next" === x.swipeDirection && (ya >= L.longSwipesRatio ? x.slideTo(ka + L.slidesPerGroup) : x.slideTo(ka));
                            "prev" === x.swipeDirection && (ya > 1 - L.longSwipesRatio ? x.slideTo(ka + L.slidesPerGroup) : x.slideTo(ka))
                        } else {
                            if (!L.shortSwipes)
                                return void x.slideTo(x.activeIndex);
                            "next" === x.swipeDirection && x.slideTo(ka + L.slidesPerGroup);
                            "prev" === x.swipeDirection && x.slideTo(ka)
                        }
                    }
                }
                .bind(this);
                this.onClick = function(z) {
                    this.allowClick || (this.params.preventClicks && z.preventDefault(),
                    this.params.preventClicksPropagation && this.animating && (z.stopPropagation(),
                    z.stopImmediatePropagation()))
                }
                .bind(this);
                h = "container" === a.touchEventsTarget ? h : l;
                l = !!a.nested;
                if (g.touch || !g.pointerEvents && !g.prefixedPointerEvents) {
                    if (g.touch) {
                        var t = !("touchstart" !== e.start || !g.passiveListener || !a.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        h.addEventListener(e.start, this.onTouchStart, t);
                        h.addEventListener(e.move, this.onTouchMove, g.passiveListener ? {
                            passive: !1,
                            capture: l
                        } : l);
                        h.addEventListener(e.end, this.onTouchEnd, t)
                    }
                    (a.simulateTouch && !u.ios && !u.android || a.simulateTouch && !g.touch && u.ios) && (h.addEventListener("mousedown", this.onTouchStart, !1),
                    R.addEventListener("mousemove", this.onTouchMove, l),
                    R.addEventListener("mouseup", this.onTouchEnd, !1))
                } else
                    h.addEventListener(e.start, this.onTouchStart, !1),
                    R.addEventListener(e.move, this.onTouchMove, l),
                    R.addEventListener(e.end, this.onTouchEnd, !1);
                (a.preventClicks || a.preventClicksPropagation) && h.addEventListener("click", this.onClick, !0);
                this.on(u.ios || u.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", E, !0)
            },
            detachEvents: function() {
                var a = this.params
                  , e = this.touchEvents
                  , h = this.el
                  , l = this.wrapperEl;
                h = "container" === a.touchEventsTarget ? h : l;
                l = !!a.nested;
                if (g.touch || !g.pointerEvents && !g.prefixedPointerEvents) {
                    if (g.touch) {
                        var t = !("onTouchStart" !== e.start || !g.passiveListener || !a.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        h.removeEventListener(e.start, this.onTouchStart, t);
                        h.removeEventListener(e.move, this.onTouchMove, l);
                        h.removeEventListener(e.end, this.onTouchEnd, t)
                    }
                    (a.simulateTouch && !u.ios && !u.android || a.simulateTouch && !g.touch && u.ios) && (h.removeEventListener("mousedown", this.onTouchStart, !1),
                    R.removeEventListener("mousemove", this.onTouchMove, l),
                    R.removeEventListener("mouseup", this.onTouchEnd, !1))
                } else
                    h.removeEventListener(e.start, this.onTouchStart, !1),
                    R.removeEventListener(e.move, this.onTouchMove, l),
                    R.removeEventListener(e.end, this.onTouchEnd, !1);
                (a.preventClicks || a.preventClicksPropagation) && h.removeEventListener("click", this.onClick, !0);
                this.off(u.ios || u.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", E)
            }
        },
        breakpoints: {
            setBreakpoint: function() {
                var a = this.activeIndex
                  , e = this.initialized
                  , h = this.loopedSlides;
                void 0 === h && (h = 0);
                var l = this.params
                  , t = l.breakpoints;
                if (t && (!t || 0 !== Object.keys(t).length)) {
                    var z = this.getBreakpoint(t);
                    z && this.currentBreakpoint !== z && (t = z in t ? t[z] : this.originalParams,
                    l = l.loop && t.slidesPerView !== l.slidesPerView,
                    b.extend(this.params, t),
                    b.extend(this, {
                        allowTouchMove: this.params.allowTouchMove,
                        allowSlideNext: this.params.allowSlideNext,
                        allowSlidePrev: this.params.allowSlidePrev
                    }),
                    this.currentBreakpoint = z,
                    l && e && (this.loopDestroy(),
                    this.loopCreate(),
                    this.updateSlides(),
                    this.slideTo(a - h + this.loopedSlides, 0, !1)),
                    this.emit("breakpoint", t))
                }
            },
            getBreakpoint: function(a) {
                if (a) {
                    var e = !1
                      , h = [];
                    Object.keys(a).forEach(function(t) {
                        h.push(t)
                    });
                    h.sort(function(t, z) {
                        return parseInt(t, 10) - parseInt(z, 10)
                    });
                    for (a = 0; a < h.length; a += 1) {
                        var l = h[a];
                        this.params.breakpointsInverse ? l <= H.innerWidth && (e = l) : l >= H.innerWidth && !e && (e = l)
                    }
                    return e || "max"
                }
            }
        },
        checkOverflow: {
            checkOverflow: function() {
                var a = this.isLocked;
                this.isLocked = 1 === this.snapGrid.length;
                this.allowSlideNext = !this.isLocked;
                this.allowSlidePrev = !this.isLocked;
                a !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock");
                a && a !== this.isLocked && (this.isEnd = !1,
                this.navigation.update())
            }
        },
        classes: {
            addClasses: function() {
                var a = this.classNames
                  , e = this.params
                  , h = this.rtl
                  , l = this.$el
                  , t = [];
                t.push(e.direction);
                e.freeMode && t.push("free-mode");
                g.flexbox || t.push("no-flexbox");
                e.autoHeight && t.push("autoheight");
                h && t.push("rtl");
                1 < e.slidesPerColumn && t.push("multirow");
                u.android && t.push("android");
                u.ios && t.push("ios");
                (I.isIE || I.isEdge) && (g.pointerEvents || g.prefixedPointerEvents) && t.push("wp8-" + e.direction);
                t.forEach(function(z) {
                    a.push(e.containerModifierClass + z)
                });
                l.addClass(a.join(" "))
            },
            removeClasses: function() {
                this.$el.removeClass(this.classNames.join(" "))
            }
        },
        images: {
            loadImage: function(a, e, h, l, t, z) {
                function x() {
                    z && z()
                }
                var D;
                a.complete && t ? x() : e ? ((D = new H.Image).onload = x,
                D.onerror = x,
                l && (D.sizes = l),
                h && (D.srcset = h),
                e && (D.src = e)) : x()
            },
            preloadImages: function() {
                function a() {
                    null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                    e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(),
                    e.emit("imagesReady")))
                }
                var e = this;
                e.imagesToLoad = e.$el.find("img");
                for (var h = 0; h < e.imagesToLoad.length; h += 1) {
                    var l = e.imagesToLoad[h];
                    e.loadImage(l, l.currentSrc || l.getAttribute("src"), l.srcset || l.getAttribute("srcset"), l.sizes || l.getAttribute("sizes"), !0, a)
                }
            }
        }
    }, ia = {}, pa = function(a) {
        function e() {
            for (var l, t, z = [], x = arguments.length; x--; )
                z[x] = arguments[x];
            1 === z.length && z[0].constructor && z[0].constructor === Object ? t = z[0] : (l = z[0],
            t = z[1]);
            t ||= {};
            t = b.extend({}, t);
            l && !t.el && (t.el = l);
            a.call(this, t);
            Object.keys(P).forEach(function(da) {
                Object.keys(P[da]).forEach(function(ea) {
                    e.prototype[ea] || (e.prototype[ea] = P[da][ea])
                })
            });
            var D = this;
            void 0 === D.modules && (D.modules = {});
            Object.keys(D.modules).forEach(function(da) {
                var ea = D.modules[da];
                ea.params && (da = Object.keys(ea.params)[0],
                ea = ea.params[da],
                "object" == typeof ea && null !== ea && da in t && "enabled"in ea && (!0 === t[da] && (t[da] = {
                    enabled: !0
                }),
                "object" != typeof t[da] || "enabled"in t[da] || (t[da].enabled = !0),
                t[da] || (t[da] = {
                    enabled: !1
                })))
            });
            l = b.extend({}, T);
            D.useModulesParams(l);
            D.params = b.extend({}, l, ia, t);
            D.originalParams = b.extend({}, D.params);
            D.passedParams = b.extend({}, t);
            z = (D.$ = d)(D.params.el);
            if (l = z[0]) {
                if (1 < z.length) {
                    var L = [];
                    return z.each(function(da, ea) {
                        da = b.extend({}, t, {
                            el: ea
                        });
                        L.push(new e(da))
                    }),
                    L
                }
                l.swiper = D;
                z.data("swiper", D);
                var Y, ka;
                x = z.children("." + D.params.wrapperClass);
                return b.extend(D, {
                    $el: z,
                    el: l,
                    $wrapperEl: x,
                    wrapperEl: x[0],
                    classNames: [],
                    slides: d(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal: function() {
                        return "horizontal" === D.params.direction
                    },
                    isVertical: function() {
                        return "vertical" === D.params.direction
                    },
                    rtl: "rtl" === l.dir.toLowerCase() || "rtl" === z.css("direction"),
                    rtlTranslate: "horizontal" === D.params.direction && ("rtl" === l.dir.toLowerCase() || "rtl" === z.css("direction")),
                    wrongRTL: "-webkit-box" === x.css("display"),
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: !0,
                    isEnd: !1,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: !1,
                    allowSlideNext: D.params.allowSlideNext,
                    allowSlidePrev: D.params.allowSlidePrev,
                    touchEvents: (Y = ["touchstart", "touchmove", "touchend"],
                    ka = ["mousedown", "mousemove", "mouseup"],
                    g.pointerEvents ? ka = ["pointerdown", "pointermove", "pointerup"] : g.prefixedPointerEvents && (ka = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]),
                    D.touchEventsTouch = {
                        start: Y[0],
                        move: Y[1],
                        end: Y[2]
                    },
                    D.touchEventsDesktop = {
                        start: ka[0],
                        move: ka[1],
                        end: ka[2]
                    },
                    g.touch || !D.params.simulateTouch ? D.touchEventsTouch : D.touchEventsDesktop),
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        formElements: "input, select, option, textarea, button, video",
                        lastClickTime: b.now(),
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        isTouchEvent: void 0,
                        startMoving: void 0
                    },
                    allowClick: !0,
                    allowTouchMove: D.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                }),
                D.useModules(),
                D.params.init && D.init(),
                D
            }
        }
        a && (e.__proto__ = a);
        var h = {
            extendedDefaults: {
                configurable: !0
            },
            defaults: {
                configurable: !0
            },
            Class: {
                configurable: !0
            },
            $: {
                configurable: !0
            }
        };
        return ((e.prototype = Object.create(a && a.prototype)).constructor = e).prototype.slidesPerViewDynamic = function() {
            var l = this.slides
              , t = this.slidesGrid
              , z = this.size
              , x = this.activeIndex
              , D = 1;
            if (this.params.centeredSlides) {
                var L;
                t = l[x].swiperSlideSize;
                for (var Y = x + 1; Y < l.length; Y += 1)
                    l[Y] && !L && (D += 1,
                    z < (t += l[Y].swiperSlideSize) && (L = !0));
                for (--x; 0 <= x; --x)
                    l[x] && !L && (D += 1,
                    z < (t += l[x].swiperSlideSize) && (L = !0))
            } else
                for (L = x + 1; L < l.length; L += 1)
                    t[L] - t[x] < z && (D += 1);
            return D
        }
        ,
        e.prototype.update = function() {
            function l() {
                var D = Math.min(Math.max(t.rtlTranslate ? -1 * t.translate : t.translate, t.maxTranslate()), t.minTranslate());
                t.setTranslate(D);
                t.updateActiveIndex();
                t.updateSlidesClasses()
            }
            var t = this;
            if (t && !t.destroyed) {
                var z = t.snapGrid
                  , x = t.params;
                x.breakpoints && t.setBreakpoint();
                t.updateSize();
                t.updateSlides();
                t.updateProgress();
                t.updateSlidesClasses();
                t.params.freeMode ? (l(),
                t.params.autoHeight && t.updateAutoHeight()) : (("auto" === t.params.slidesPerView || 1 < t.params.slidesPerView) && t.isEnd && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0)) || l();
                x.watchOverflow && z !== t.snapGrid && t.checkOverflow();
                t.emit("update")
            }
        }
        ,
        e.prototype.init = function() {
            this.initialized || (this.emit("beforeInit"),
            this.params.breakpoints && this.setBreakpoint(),
            this.addClasses(),
            this.params.loop && this.loopCreate(),
            this.updateSize(),
            this.updateSlides(),
            this.params.watchOverflow && this.checkOverflow(),
            this.params.grabCursor && this.setGrabCursor(),
            this.params.preloadImages && this.preloadImages(),
            this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit),
            this.attachEvents(),
            this.initialized = !0,
            this.emit("init"))
        }
        ,
        e.prototype.destroy = function(l, t) {
            void 0 === l && (l = !0);
            void 0 === t && (t = !0);
            var z = this
              , x = z.params
              , D = z.$el
              , L = z.$wrapperEl
              , Y = z.slides;
            return void 0 === z.params || z.destroyed || (z.emit("beforeDestroy"),
            z.initialized = !1,
            z.detachEvents(),
            x.loop && z.loopDestroy(),
            t && (z.removeClasses(),
            D.removeAttr("style"),
            L.removeAttr("style"),
            Y && Y.length && Y.removeClass([x.slideVisibleClass, x.slideActiveClass, x.slideNextClass, x.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")),
            z.emit("destroy"),
            Object.keys(z.eventsListeners).forEach(function(ka) {
                z.off(ka)
            }),
            !1 !== l && (z.$el[0].swiper = null,
            z.$el.data("swiper", null),
            b.deleteProps(z)),
            z.destroyed = !0),
            null
        }
        ,
        e.extendDefaults = function(l) {
            b.extend(ia, l)
        }
        ,
        h.extendedDefaults.get = function() {
            return ia
        }
        ,
        h.defaults.get = function() {
            return T
        }
        ,
        h.Class.get = function() {
            return a
        }
        ,
        h.$.get = function() {
            return d
        }
        ,
        Object.defineProperties(e, h),
        e
    }(Ea);
    y = {
        name: "device",
        proto: {
            device: u
        },
        static: {
            device: u
        }
    };
    Ea = {
        name: "support",
        proto: {
            support: g
        },
        static: {
            support: g
        }
    };
    Fa = {
        name: "browser",
        proto: {
            browser: I
        },
        static: {
            browser: I
        }
    };
    var qa = {
        func: H.MutationObserver || H.WebkitMutationObserver,
        attach: function(a, e) {
            void 0 === e && (e = {});
            var h = this
              , l = new qa.func(function(t) {
                if (1 !== t.length) {
                    var z = function() {
                        h.emit("observerUpdate", t[0])
                    };
                    H.requestAnimationFrame ? H.requestAnimationFrame(z) : H.setTimeout(z, 0)
                } else
                    h.emit("observerUpdate", t[0])
            }
            );
            l.observe(a, {
                attributes: void 0 === e.attributes || e.attributes,
                childList: void 0 === e.childList || e.childList,
                characterData: void 0 === e.characterData || e.characterData
            });
            h.observer.observers.push(l)
        },
        init: function() {
            if (g.observer && this.params.observer) {
                if (this.params.observeParents)
                    for (var a = this.$el.parents(), e = 0; e < a.length; e += 1)
                        this.observer.attach(a[e]);
                this.observer.attach(this.$el[0], {
                    childList: !1
                });
                this.observer.attach(this.$wrapperEl[0], {
                    attributes: !1
                })
            }
        },
        destroy: function() {
            this.observer.observers.forEach(function(a) {
                a.disconnect()
            });
            this.observer.observers = []
        }
    }
      , ha = function(a) {
        function e() {
            h.updateSlides();
            h.updateProgress();
            h.updateSlidesClasses();
            h.lazy && h.params.lazy.enabled && h.lazy.load()
        }
        var h = this
          , l = h.params
          , t = l.slidesPerView
          , z = l.slidesPerGroup
          , x = l.centeredSlides;
        l = h.params.virtual;
        var D = l.addSlidesBefore
          , L = l.addSlidesAfter
          , Y = h.virtual;
        l = Y.from;
        var ka = Y.to
          , da = Y.slides
          , ea = Y.slidesGrid
          , ya = Y.renderSlide
          , Ma = Y.offset;
        h.updateActiveIndex();
        var Da, La, Pa = h.activeIndex || 0;
        Y = h.rtlTranslate ? "right" : h.isHorizontal() ? "left" : "top";
        x ? (Da = Math.floor(t / 2) + z + D,
        La = Math.floor(t / 2) + z + L) : (Da = t + (z - 1) + D,
        La = z + L);
        var Ra = Math.max((Pa || 0) - La, 0)
          , Qa = Math.min((Pa || 0) + Da, da.length - 1);
        t = (h.slidesGrid[Ra] || 0) - (h.slidesGrid[0] || 0);
        if (b.extend(h.virtual, {
            from: Ra,
            to: Qa,
            offset: t,
            slidesGrid: h.slidesGrid
        }),
        l === Ra && ka === Qa && !a)
            return h.slidesGrid !== ea && t !== Ma && h.slides.css(Y, t + "px"),
            void h.updateProgress();
        if (h.params.virtual.renderExternal)
            return h.params.virtual.renderExternal.call(h, {
                offset: t,
                from: Ra,
                to: Qa,
                slides: function() {
                    for (var zb = [], mc = Ra; mc <= Qa; mc += 1)
                        zb.push(da[mc]);
                    return zb
                }()
            }),
            void e();
        z = [];
        Da = [];
        if (a)
            h.$wrapperEl.find("." + h.params.slideClass).remove();
        else
            for (La = l; La <= ka; La += 1)
                (La < Ra || Qa < La) && h.$wrapperEl.find("." + h.params.slideClass + '[data-swiper-slide-index="' + La + '"]').remove();
        for (La = 0; La < da.length; La += 1)
            Ra <= La && La <= Qa && (void 0 === ka || a ? Da.push(La) : (ka < La && Da.push(La),
            La < l && z.push(La)));
        Da.forEach(function(zb) {
            h.$wrapperEl.append(ya(da[zb], zb))
        });
        z.sort(function(zb, mc) {
            return zb < mc
        }).forEach(function(zb) {
            h.$wrapperEl.prepend(ya(da[zb], zb))
        });
        h.$wrapperEl.children(".swiper-slide").css(Y, t + "px");
        e()
    }
      , V = function(a, e) {
        var h = this.params.virtual;
        if (h.cache && this.virtual.cache[e])
            return this.virtual.cache[e];
        a = h.renderSlide ? d(h.renderSlide.call(this, a, e)) : d('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + e + '">' + a + "</div>");
        return a.attr("data-swiper-slide-index") || a.attr("data-swiper-slide-index", e),
        h.cache && (this.virtual.cache[e] = a),
        a
    }
      , aa = function(a) {
        this.virtual.slides.push(a);
        this.virtual.update(!0)
    }
      , ma = function(a) {
        if (this.virtual.slides.unshift(a),
        this.params.virtual.cache) {
            var e = this.virtual.cache
              , h = {};
            Object.keys(e).forEach(function(l) {
                h[l + 1] = e[l]
            });
            this.virtual.cache = h
        }
        this.virtual.update(!0);
        this.slideNext(0)
    }
      , Ja = function(a) {
        var e = this.rtlTranslate;
        a.originalEvent && (a = a.originalEvent);
        var h = a.keyCode || a.charCode;
        if (!this.allowSlideNext && (this.isHorizontal() && 39 === h || this.isVertical() && 40 === h) || !this.allowSlidePrev && (this.isHorizontal() && 37 === h || this.isVertical() && 38 === h))
            return !1;
        if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || R.activeElement && R.activeElement.nodeName && ("input" === R.activeElement.nodeName.toLowerCase() || "textarea" === R.activeElement.nodeName.toLowerCase()))) {
            if (this.params.keyboard.onlyInViewport && (37 === h || 39 === h || 38 === h || 40 === h)) {
                var l = !1;
                if (0 < this.$el.parents("." + this.params.slideClass).length && 0 === this.$el.parents("." + this.params.slideActiveClass).length)
                    return;
                var t = H.innerWidth
                  , z = H.innerHeight
                  , x = this.$el.offset();
                e && (x.left -= this.$el[0].scrollLeft);
                x = [[x.left, x.top], [x.left + this.width, x.top], [x.left, x.top + this.height], [x.left + this.width, x.top + this.height]];
                for (var D = 0; D < x.length; D += 1) {
                    var L = x[D];
                    0 <= L[0] && L[0] <= t && 0 <= L[1] && L[1] <= z && (l = !0)
                }
                if (!l)
                    return
            }
            this.isHorizontal() ? (37 !== h && 39 !== h || (a.preventDefault ? a.preventDefault() : a.returnValue = !1),
            (39 === h && !e || 37 === h && e) && this.slideNext(),
            (37 === h && !e || 39 === h && e) && this.slidePrev()) : (38 !== h && 40 !== h || (a.preventDefault ? a.preventDefault() : a.returnValue = !1),
            40 === h && this.slideNext(),
            38 === h && this.slidePrev());
            this.emit("keyPress", h)
        }
    }
      , Ka = function() {
        this.keyboard.enabled || (d(R).on("keydown", this.keyboard.handle),
        this.keyboard.enabled = !0)
    }
      , Na = function() {
        this.keyboard.enabled && (d(R).off("keydown", this.keyboard.handle),
        this.keyboard.enabled = !1)
    }
      , na = {
        lastScrollTime: b.now(),
        event: -1 < H.navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : function() {
            var a = "onwheel"in R;
            a || (a = R.createElement("div"),
            a.setAttribute("onwheel", "return;"),
            a = "function" == typeof a.onwheel);
            return !a && R.implementation && R.implementation.hasFeature && !0 !== R.implementation.hasFeature("", "") && (a = R.implementation.hasFeature("Events.wheel", "3.0")),
            a
        }() ? "wheel" : "mousewheel",
        normalize: function(a) {
            var e = 0
              , h = 0
              , l = 0
              , t = 0;
            return "detail"in a && (h = a.detail),
            "wheelDelta"in a && (h = -a.wheelDelta / 120),
            "wheelDeltaY"in a && (h = -a.wheelDeltaY / 120),
            "wheelDeltaX"in a && (e = -a.wheelDeltaX / 120),
            "axis"in a && a.axis === a.HORIZONTAL_AXIS && (e = h,
            h = 0),
            l = 10 * e,
            t = 10 * h,
            "deltaY"in a && (t = a.deltaY),
            "deltaX"in a && (l = a.deltaX),
            (l || t) && a.deltaMode && (1 === a.deltaMode ? (l *= 40,
            t *= 40) : (l *= 800,
            t *= 800)),
            l && !e && (e = 1 > l ? -1 : 1),
            t && !h && (h = 1 > t ? -1 : 1),
            {
                spinX: e,
                spinY: h,
                pixelX: l,
                pixelY: t
            }
        },
        handleMouseEnter: function() {
            this.mouseEntered = !0
        },
        handleMouseLeave: function() {
            this.mouseEntered = !1
        },
        handle: function(a) {
            var e = this
              , h = e.params.mousewheel;
            if (!e.mouseEntered && !h.releaseOnEdges)
                return !0;
            a.originalEvent && (a = a.originalEvent);
            var l = 0;
            l = e.rtlTranslate ? -1 : 1;
            var t = na.normalize(a);
            if (h.forceToAxis)
                if (e.isHorizontal()) {
                    if (!(Math.abs(t.pixelX) > Math.abs(t.pixelY)))
                        return !0;
                    l *= t.pixelX
                } else {
                    if (!(Math.abs(t.pixelY) > Math.abs(t.pixelX)))
                        return !0;
                    l = t.pixelY
                }
            else
                l = Math.abs(t.pixelX) > Math.abs(t.pixelY) ? -t.pixelX * l : -t.pixelY;
            if (0 === l)
                return !0;
            if (h.invert && (l = -l),
            e.params.freeMode) {
                if (e.params.loop && e.loopFix(),
                h = e.getTranslate() + l * h.sensitivity,
                l = e.isBeginning,
                t = e.isEnd,
                h >= e.minTranslate() && (h = e.minTranslate()),
                h <= e.maxTranslate() && (h = e.maxTranslate()),
                e.setTransition(0),
                e.setTranslate(h),
                e.updateProgress(),
                e.updateActiveIndex(),
                e.updateSlidesClasses(),
                (!l && e.isBeginning || !t && e.isEnd) && e.updateSlidesClasses(),
                e.params.freeModeSticky && (clearTimeout(e.mousewheel.timeout),
                e.mousewheel.timeout = b.nextTick(function() {
                    e.slideToClosest()
                }, 300)),
                e.emit("scroll", a),
                e.params.autoplay && e.params.autoplayDisableOnInteraction && e.autoplay.stop(),
                h === e.minTranslate() || h === e.maxTranslate())
                    return !0
            } else {
                if (60 < b.now() - e.mousewheel.lastScrollTime)
                    if (0 > l)
                        if (e.isEnd && !e.params.loop || e.animating) {
                            if (h.releaseOnEdges)
                                return !0
                        } else
                            e.slideNext(),
                            e.emit("scroll", a);
                    else if (e.isBeginning && !e.params.loop || e.animating) {
                        if (h.releaseOnEdges)
                            return !0
                    } else
                        e.slidePrev(),
                        e.emit("scroll", a);
                e.mousewheel.lastScrollTime = (new H.Date).getTime()
            }
            return a.preventDefault ? a.preventDefault() : a.returnValue = !1,
            !1
        },
        enable: function() {
            if (!na.event || this.mousewheel.enabled)
                return !1;
            var a = this.$el;
            return "container" !== this.params.mousewheel.eventsTarged && (a = d(this.params.mousewheel.eventsTarged)),
            a.on("mouseenter", this.mousewheel.handleMouseEnter),
            a.on("mouseleave", this.mousewheel.handleMouseLeave),
            a.on(na.event, this.mousewheel.handle),
            this.mousewheel.enabled = !0
        },
        disable: function() {
            if (!na.event || !this.mousewheel.enabled)
                return !1;
            var a = this.$el;
            return "container" !== this.params.mousewheel.eventsTarged && (a = d(this.params.mousewheel.eventsTarged)),
            a.off(na.event, this.mousewheel.handle),
            !(this.mousewheel.enabled = !1)
        }
    }
      , Ha = function() {
        var a = this.params.navigation;
        if (!this.params.loop) {
            var e = this.navigation
              , h = e.$nextEl;
            (e = e.$prevEl) && 0 < e.length && (this.isBeginning ? e.addClass(a.disabledClass) : e.removeClass(a.disabledClass),
            e[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](a.lockClass));
            h && 0 < h.length && (this.isEnd ? h.addClass(a.disabledClass) : h.removeClass(a.disabledClass),
            h[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](a.lockClass))
        }
    }
      , xa = function() {
        var a, e, h = this, l = h.params.navigation;
        (l.nextEl || l.prevEl) && (l.nextEl && (a = d(l.nextEl),
        h.params.uniqueNavElements && "string" == typeof l.nextEl && 1 < a.length && 1 === h.$el.find(l.nextEl).length && (a = h.$el.find(l.nextEl))),
        l.prevEl && (e = d(l.prevEl),
        h.params.uniqueNavElements && "string" == typeof l.prevEl && 1 < e.length && 1 === h.$el.find(l.prevEl).length && (e = h.$el.find(l.prevEl))),
        a && 0 < a.length && a.on("click", function(t) {
            t.preventDefault();
            h.isEnd && !h.params.loop || h.slideNext()
        }),
        e && 0 < e.length && e.on("click", function(t) {
            t.preventDefault();
            h.isBeginning && !h.params.loop || h.slidePrev()
        }),
        b.extend(h.navigation, {
            $nextEl: a,
            nextEl: a && a[0],
            $prevEl: e,
            prevEl: e && e[0]
        }))
    }
      , Oa = function() {
        var a = this.navigation
          , e = a.$nextEl;
        a = a.$prevEl;
        e && e.length && (e.off("click"),
        e.removeClass(this.params.navigation.disabledClass));
        a && a.length && (a.off("click"),
        a.removeClass(this.params.navigation.disabledClass))
    }
      , jb = function() {
        var a = this.rtl
          , e = this.params.pagination;
        if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
            var h, l = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length, t = this.pagination.$el, z = this.params.loop ? Math.ceil((l - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
            if (this.params.loop ? ((h = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > l - 1 - 2 * this.loopedSlides && (h -= l - 2 * this.loopedSlides),
            z - 1 < h && (h -= z),
            0 > h && "bullets" !== this.params.paginationType && (h = z + h)) : h = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0,
            "bullets" === e.type && this.pagination.bullets && 0 < this.pagination.bullets.length) {
                var x, D, L;
                l = this.pagination.bullets;
                if (e.dynamicBullets && (this.pagination.bulletSize = l.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0),
                t.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (e.dynamicMainBullets + 4) + "px"),
                1 < e.dynamicMainBullets && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += h - this.previousIndex,
                this.pagination.dynamicBulletIndex > e.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = e.dynamicMainBullets - 1 : 0 > this.pagination.dynamicBulletIndex && (this.pagination.dynamicBulletIndex = 0)),
                x = h - this.pagination.dynamicBulletIndex,
                L = ((D = x + (Math.min(l.length, e.dynamicMainBullets) - 1)) + x) / 2),
                l.removeClass(e.bulletActiveClass + " " + e.bulletActiveClass + "-next " + e.bulletActiveClass + "-next-next " + e.bulletActiveClass + "-prev " + e.bulletActiveClass + "-prev-prev " + e.bulletActiveClass + "-main"),
                1 < t.length)
                    l.each(function(ea, ya) {
                        ea = d(ya);
                        ya = ea.index();
                        ya === h && ea.addClass(e.bulletActiveClass);
                        e.dynamicBullets && (x <= ya && ya <= D && ea.addClass(e.bulletActiveClass + "-main"),
                        ya === x && ea.prev().addClass(e.bulletActiveClass + "-prev").prev().addClass(e.bulletActiveClass + "-prev-prev"),
                        ya === D && ea.next().addClass(e.bulletActiveClass + "-next").next().addClass(e.bulletActiveClass + "-next-next"))
                    });
                else if (l.eq(h).addClass(e.bulletActiveClass),
                e.dynamicBullets) {
                    for (var Y = l.eq(x), ka = l.eq(D), da = x; da <= D; da += 1)
                        l.eq(da).addClass(e.bulletActiveClass + "-main");
                    Y.prev().addClass(e.bulletActiveClass + "-prev").prev().addClass(e.bulletActiveClass + "-prev-prev");
                    ka.next().addClass(e.bulletActiveClass + "-next").next().addClass(e.bulletActiveClass + "-next-next")
                }
                e.dynamicBullets && (L = (this.pagination.bulletSize * Math.min(l.length, e.dynamicMainBullets + 4) - this.pagination.bulletSize) / 2 - L * this.pagination.bulletSize,
                a = a ? "right" : "left",
                l.css(this.isHorizontal() ? a : "top", L + "px"))
            }
            if ("fraction" === e.type && (t.find("." + e.currentClass).text(e.formatFractionCurrent(h + 1)),
            t.find("." + e.totalClass).text(e.formatFractionTotal(z))),
            "progressbar" === e.type)
                a = e.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical",
                l = (h + 1) / z,
                Y = L = 1,
                "horizontal" === a ? L = l : Y = l,
                t.find("." + e.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + L + ") scaleY(" + Y + ")").transition(this.params.speed);
            "custom" === e.type && e.renderCustom ? (t.html(e.renderCustom(this, h + 1, z)),
            this.emit("paginationRender", this, t[0])) : this.emit("paginationUpdate", this, t[0]);
            t[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)
        }
    }
      , lb = function() {
        var a = this.params.pagination;
        if (a.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
            var e = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length
              , h = this.pagination.$el
              , l = "";
            if ("bullets" === a.type) {
                e = this.params.loop ? Math.ceil((e - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
                for (var t = 0; t < e; t += 1)
                    a.renderBullet ? l += a.renderBullet.call(this, t, a.bulletClass) : l += "<" + a.bulletElement + ' class="' + a.bulletClass + '"></' + a.bulletElement + ">";
                h.html(l);
                this.pagination.bullets = h.find("." + a.bulletClass)
            }
            "fraction" === a.type && (l = a.renderFraction ? a.renderFraction.call(this, a.currentClass, a.totalClass) : '<span class="' + a.currentClass + '"></span> / <span class="' + a.totalClass + '"></span>',
            h.html(l));
            "progressbar" === a.type && (l = a.renderProgressbar ? a.renderProgressbar.call(this, a.progressbarFillClass) : '<span class="' + a.progressbarFillClass + '"></span>',
            h.html(l));
            "custom" !== a.type && this.emit("paginationRender", this.pagination.$el[0])
        }
    }
      , Ua = function() {
        var a = this
          , e = a.params.pagination;
        if (e.el) {
            var h = d(e.el);
            0 !== h.length && (a.params.uniqueNavElements && "string" == typeof e.el && 1 < h.length && 1 === a.$el.find(e.el).length && (h = a.$el.find(e.el)),
            "bullets" === e.type && e.clickable && h.addClass(e.clickableClass),
            h.addClass(e.modifierClass + e.type),
            "bullets" === e.type && e.dynamicBullets && (h.addClass("" + e.modifierClass + e.type + "-dynamic"),
            a.pagination.dynamicBulletIndex = 0,
            1 > e.dynamicMainBullets && (e.dynamicMainBullets = 1)),
            "progressbar" === e.type && e.progressbarOpposite && h.addClass(e.progressbarOppositeClass),
            e.clickable && h.on("click", "." + e.bulletClass, function(l) {
                l.preventDefault();
                l = d(this).index() * a.params.slidesPerGroup;
                a.params.loop && (l += a.loopedSlides);
                a.slideTo(l)
            }),
            b.extend(a.pagination, {
                $el: h,
                el: h[0]
            }))
        }
    }
      , gb = function() {
        var a = this.params.pagination;
        if (a.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
            var e = this.pagination.$el;
            e.removeClass(a.hiddenClass);
            e.removeClass(a.modifierClass + a.type);
            this.pagination.bullets && this.pagination.bullets.removeClass(a.bulletActiveClass);
            a.clickable && e.off("click", "." + a.bulletClass)
        }
    }
      , vb = function() {
        if (this.params.scrollbar.el && this.scrollbar.el) {
            var a = this.scrollbar
              , e = a.dragSize
              , h = a.trackSize
              , l = a.$dragEl
              , t = a.$el;
            a = this.params.scrollbar;
            var z = e
              , x = (h - e) * this.progress;
            this.rtlTranslate ? 0 < (x = -x) ? (z = e - x,
            x = 0) : h < -x + e && (z = h + x) : 0 > x ? (z = e + x,
            x = 0) : h < x + e && (z = h - x);
            this.isHorizontal() ? (g.transforms3d ? l.transform("translate3d(" + x + "px, 0, 0)") : l.transform("translateX(" + x + "px)"),
            l[0].style.width = z + "px") : (g.transforms3d ? l.transform("translate3d(0px, " + x + "px, 0)") : l.transform("translateY(" + x + "px)"),
            l[0].style.height = z + "px");
            a.hide && (clearTimeout(this.scrollbar.timeout),
            t[0].style.opacity = 1,
            this.scrollbar.timeout = setTimeout(function() {
                t[0].style.opacity = 0;
                t.transition(400)
            }, 1E3))
        }
    }
      , Fb = function(a) {
        this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(a)
    }
      , Hb = function() {
        if (this.params.scrollbar.el && this.scrollbar.el) {
            var a = this.scrollbar
              , e = a.$dragEl
              , h = a.$el;
            e[0].style.width = "";
            e[0].style.height = "";
            var l = this.isHorizontal() ? h[0].offsetWidth : h[0].offsetHeight
              , t = this.size / this.virtualSize
              , z = l / this.size * t;
            var x = "auto" === this.params.scrollbar.dragSize ? l * t : parseInt(this.params.scrollbar.dragSize, 10);
            this.isHorizontal() ? e[0].style.width = x + "px" : e[0].style.height = x + "px";
            h[0].style.display = 1 <= t ? "none" : "";
            this.params.scrollbarHide && (h[0].style.opacity = 0);
            b.extend(a, {
                trackSize: l,
                divider: t,
                moveDivider: z,
                dragSize: x
            });
            a.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass)
        }
    }
      , Cb = function(a) {
        var e = this.scrollbar
          , h = this.rtlTranslate
          , l = e.$el
          , t = e.dragSize;
        e = e.trackSize;
        a = ((this.isHorizontal() ? "touchstart" === a.type || "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX || a.clientX : "touchstart" === a.type || "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY || a.clientY) - l.offset()[this.isHorizontal() ? "left" : "top"] - t / 2) / (e - t);
        a = Math.max(Math.min(a, 1), 0);
        h && (a = 1 - a);
        h = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * a;
        this.updateProgress(h);
        this.setTranslate(h);
        this.updateActiveIndex();
        this.updateSlidesClasses()
    }
      , Ib = function(a) {
        var e = this.params.scrollbar
          , h = this.scrollbar
          , l = this.$wrapperEl
          , t = h.$el
          , z = h.$dragEl;
        this.scrollbar.isTouched = !0;
        a.preventDefault();
        a.stopPropagation();
        l.transition(100);
        z.transition(100);
        h.setDragPosition(a);
        clearTimeout(this.scrollbar.dragTimeout);
        t.transition(0);
        e.hide && t.css("opacity", 1);
        this.emit("scrollbarDragStart", a)
    }
      , eb = function(a) {
        var e = this.scrollbar
          , h = this.$wrapperEl
          , l = e.$el
          , t = e.$dragEl;
        this.scrollbar.isTouched && (a.preventDefault ? a.preventDefault() : a.returnValue = !1,
        e.setDragPosition(a),
        h.transition(0),
        l.transition(0),
        t.transition(0),
        this.emit("scrollbarDragMove", a))
    }
      , Va = function(a) {
        var e = this.params.scrollbar
          , h = this.scrollbar.$el;
        this.scrollbar.isTouched && (this.scrollbar.isTouched = !1,
        e.hide && (clearTimeout(this.scrollbar.dragTimeout),
        this.scrollbar.dragTimeout = b.nextTick(function() {
            h.css("opacity", 0);
            h.transition(400)
        }, 1E3)),
        this.emit("scrollbarDragEnd", a),
        e.snapOnRelease && this.slideToClosest())
    }
      , fb = function() {
        if (this.params.scrollbar.el) {
            var a = this.touchEvents
              , e = this.touchEventsDesktop
              , h = this.params
              , l = this.scrollbar.$el[0]
              , t = !(!g.passiveListener || !h.passiveListeners) && {
                passive: !1,
                capture: !1
            }
              , z = !(!g.passiveListener || !h.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            g.touch || !g.pointerEvents && !g.prefixedPointerEvents ? (g.touch && (l.addEventListener(a.start, this.scrollbar.onDragStart, t),
            l.addEventListener(a.move, this.scrollbar.onDragMove, t),
            l.addEventListener(a.end, this.scrollbar.onDragEnd, z)),
            (h.simulateTouch && !u.ios && !u.android || h.simulateTouch && !g.touch && u.ios) && (l.addEventListener("mousedown", this.scrollbar.onDragStart, t),
            R.addEventListener("mousemove", this.scrollbar.onDragMove, t),
            R.addEventListener("mouseup", this.scrollbar.onDragEnd, z))) : (l.addEventListener(e.start, this.scrollbar.onDragStart, t),
            R.addEventListener(e.move, this.scrollbar.onDragMove, t),
            R.addEventListener(e.end, this.scrollbar.onDragEnd, z))
        }
    }
      , fa = function() {
        if (this.params.scrollbar.el) {
            var a = this.touchEvents
              , e = this.touchEventsDesktop
              , h = this.params
              , l = this.scrollbar.$el[0]
              , t = !(!g.passiveListener || !h.passiveListeners) && {
                passive: !1,
                capture: !1
            }
              , z = !(!g.passiveListener || !h.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            g.touch || !g.pointerEvents && !g.prefixedPointerEvents ? (g.touch && (l.removeEventListener(a.start, this.scrollbar.onDragStart, t),
            l.removeEventListener(a.move, this.scrollbar.onDragMove, t),
            l.removeEventListener(a.end, this.scrollbar.onDragEnd, z)),
            (h.simulateTouch && !u.ios && !u.android || h.simulateTouch && !g.touch && u.ios) && (l.removeEventListener("mousedown", this.scrollbar.onDragStart, t),
            R.removeEventListener("mousemove", this.scrollbar.onDragMove, t),
            R.removeEventListener("mouseup", this.scrollbar.onDragEnd, z))) : (l.removeEventListener(e.start, this.scrollbar.onDragStart, t),
            R.removeEventListener(e.move, this.scrollbar.onDragMove, t),
            R.removeEventListener(e.end, this.scrollbar.onDragEnd, z))
        }
    }
      , ua = function() {
        if (this.params.scrollbar.el) {
            var a = this.scrollbar
              , e = this.$el
              , h = this.params.scrollbar
              , l = d(h.el);
            this.params.uniqueNavElements && "string" == typeof h.el && 1 < l.length && 1 === e.find(h.el).length && (l = e.find(h.el));
            e = l.find("." + this.params.scrollbar.dragClass);
            0 === e.length && (e = d('<div class="' + this.params.scrollbar.dragClass + '"></div>'),
            l.append(e));
            b.extend(a, {
                $el: l,
                el: l[0],
                $dragEl: e,
                dragEl: e[0]
            });
            h.draggable && a.enableDraggable()
        }
    }
      , Wa = function() {
        this.scrollbar.disableDraggable()
    }
      , Sa = function(a, e) {
        var h = this.rtl;
        a = d(a);
        h = h ? -1 : 1;
        var l = a.attr("data-swiper-parallax") || "0"
          , t = a.attr("data-swiper-parallax-x")
          , z = a.attr("data-swiper-parallax-y")
          , x = a.attr("data-swiper-parallax-scale")
          , D = a.attr("data-swiper-parallax-opacity");
        if (t || z ? (t = t || "0",
        z = z || "0") : this.isHorizontal() ? (t = l,
        z = "0") : (z = l,
        t = "0"),
        t = 0 <= t.indexOf("%") ? parseInt(t, 10) * e * h + "%" : t * e * h + "px",
        z = 0 <= z.indexOf("%") ? parseInt(z, 10) * e + "%" : z * e + "px",
        null != D)
            a[0].style.opacity = D - (D - 1) * (1 - Math.abs(e));
        null == x ? a.transform("translate3d(" + t + ", " + z + ", 0px)") : a.transform("translate3d(" + t + ", " + z + ", 0px) scale(" + (x - (x - 1) * (1 - Math.abs(e))) + ")")
    }
      , Ga = function() {
        var a = this
          , e = a.slides
          , h = a.progress
          , l = a.snapGrid;
        a.$el.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(t, z) {
            a.parallax.setTransform(z, h)
        });
        e.each(function(t, z) {
            var x = z.progress;
            1 < a.params.slidesPerGroup && "auto" !== a.params.slidesPerView && (x += Math.ceil(t / 2) - h * (l.length - 1));
            x = Math.min(Math.max(x, -1), 1);
            d(z).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(D, L) {
                a.parallax.setTransform(L, x)
            })
        })
    }
      , n = function(a) {
        void 0 === a && (a = this.params.speed);
        this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, h) {
            e = d(h);
            h = parseInt(e.attr("data-swiper-parallax-duration"), 10) || a;
            0 === a && (h = 0);
            e.transition(h)
        })
    }
      , Rb = {
        getDistanceBetweenTouches: function(a) {
            return 2 > a.targetTouches.length ? 1 : Math.sqrt(Math.pow(a.targetTouches[1].pageX - a.targetTouches[0].pageX, 2) + Math.pow(a.targetTouches[1].pageY - a.targetTouches[0].pageY, 2))
        },
        onGestureStart: function(a) {
            var e = this.params.zoom
              , h = this.zoom
              , l = h.gesture;
            if (h.fakeGestureTouched = !1,
            h.fakeGestureMoved = !1,
            !g.gestures) {
                if ("touchstart" !== a.type || "touchstart" === a.type && 2 > a.targetTouches.length)
                    return;
                h.fakeGestureTouched = !0;
                l.scaleStart = Rb.getDistanceBetweenTouches(a)
            }
            l.$slideEl && l.$slideEl.length || (l.$slideEl = d(a.target).closest(".swiper-slide"),
            0 === l.$slideEl.length && (l.$slideEl = this.slides.eq(this.activeIndex)),
            l.$imageEl = l.$slideEl.find("img, svg, canvas"),
            l.$imageWrapEl = l.$imageEl.parent("." + e.containerClass),
            l.maxRatio = l.$imageWrapEl.attr("data-swiper-zoom") || e.maxRatio,
            0 !== l.$imageWrapEl.length) ? (l.$imageEl.transition(0),
            this.zoom.isScaling = !0) : l.$imageEl = void 0
        },
        onGestureChange: function(a) {
            var e = this.params.zoom
              , h = this.zoom
              , l = h.gesture;
            if (!g.gestures) {
                if ("touchmove" !== a.type || "touchmove" === a.type && 2 > a.targetTouches.length)
                    return;
                h.fakeGestureMoved = !0;
                l.scaleMove = Rb.getDistanceBetweenTouches(a)
            }
            l.$imageEl && 0 !== l.$imageEl.length && (g.gestures ? this.zoom.scale = a.scale * h.currentScale : h.scale = l.scaleMove / l.scaleStart * h.currentScale,
            h.scale > l.maxRatio && (h.scale = l.maxRatio - 1 + Math.pow(h.scale - l.maxRatio + 1, .5)),
            h.scale < e.minRatio && (h.scale = e.minRatio + 1 - Math.pow(e.minRatio - h.scale + 1, .5)),
            l.$imageEl.transform("translate3d(0,0,0) scale(" + h.scale + ")"))
        },
        onGestureEnd: function(a) {
            var e = this.params.zoom
              , h = this.zoom
              , l = h.gesture;
            if (!g.gestures) {
                if (!h.fakeGestureTouched || !h.fakeGestureMoved || "touchend" !== a.type || "touchend" === a.type && 2 > a.changedTouches.length && !u.android)
                    return;
                h.fakeGestureTouched = !1;
                h.fakeGestureMoved = !1
            }
            l.$imageEl && 0 !== l.$imageEl.length && (h.scale = Math.max(Math.min(h.scale, l.maxRatio), e.minRatio),
            l.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + h.scale + ")"),
            h.currentScale = h.scale,
            h.isScaling = !1,
            1 === h.scale && (l.$slideEl = void 0))
        },
        onTouchStart: function(a) {
            var e = this.zoom
              , h = e.gesture;
            e = e.image;
            h.$imageEl && 0 !== h.$imageEl.length && (e.isTouched || (u.android && a.preventDefault(),
            e.isTouched = !0,
            e.touchesStart.x = "touchstart" === a.type ? a.targetTouches[0].pageX : a.pageX,
            e.touchesStart.y = "touchstart" === a.type ? a.targetTouches[0].pageY : a.pageY))
        },
        onTouchMove: function(a) {
            var e = this.zoom
              , h = e.gesture
              , l = e.image
              , t = e.velocity;
            if (h.$imageEl && 0 !== h.$imageEl.length && (this.allowClick = !1,
            l.isTouched && h.$slideEl)) {
                l.isMoved || (l.width = h.$imageEl[0].offsetWidth,
                l.height = h.$imageEl[0].offsetHeight,
                l.startX = b.getTranslate(h.$imageWrapEl[0], "x") || 0,
                l.startY = b.getTranslate(h.$imageWrapEl[0], "y") || 0,
                h.slideWidth = h.$slideEl[0].offsetWidth,
                h.slideHeight = h.$slideEl[0].offsetHeight,
                h.$imageWrapEl.transition(0),
                this.rtl && (l.startX = -l.startX,
                l.startY = -l.startY));
                var z = l.width * e.scale
                  , x = l.height * e.scale;
                if (!(z < h.slideWidth && x < h.slideHeight)) {
                    if (l.minX = Math.min(h.slideWidth / 2 - z / 2, 0),
                    l.maxX = -l.minX,
                    l.minY = Math.min(h.slideHeight / 2 - x / 2, 0),
                    l.maxY = -l.minY,
                    l.touchesCurrent.x = "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX,
                    l.touchesCurrent.y = "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY,
                    !l.isMoved && !e.isScaling)
                        if (this.isHorizontal() && (Math.floor(l.minX) === Math.floor(l.startX) && l.touchesCurrent.x < l.touchesStart.x || Math.floor(l.maxX) === Math.floor(l.startX) && l.touchesCurrent.x > l.touchesStart.x) || !this.isHorizontal() && (Math.floor(l.minY) === Math.floor(l.startY) && l.touchesCurrent.y < l.touchesStart.y || Math.floor(l.maxY) === Math.floor(l.startY) && l.touchesCurrent.y > l.touchesStart.y))
                            return void (l.isTouched = !1);
                    a.preventDefault();
                    a.stopPropagation();
                    l.isMoved = !0;
                    l.currentX = l.touchesCurrent.x - l.touchesStart.x + l.startX;
                    l.currentY = l.touchesCurrent.y - l.touchesStart.y + l.startY;
                    l.currentX < l.minX && (l.currentX = l.minX + 1 - Math.pow(l.minX - l.currentX + 1, .8));
                    l.currentX > l.maxX && (l.currentX = l.maxX - 1 + Math.pow(l.currentX - l.maxX + 1, .8));
                    l.currentY < l.minY && (l.currentY = l.minY + 1 - Math.pow(l.minY - l.currentY + 1, .8));
                    l.currentY > l.maxY && (l.currentY = l.maxY - 1 + Math.pow(l.currentY - l.maxY + 1, .8));
                    t.prevPositionX || (t.prevPositionX = l.touchesCurrent.x);
                    t.prevPositionY || (t.prevPositionY = l.touchesCurrent.y);
                    t.prevTime || (t.prevTime = Date.now());
                    t.x = (l.touchesCurrent.x - t.prevPositionX) / (Date.now() - t.prevTime) / 2;
                    t.y = (l.touchesCurrent.y - t.prevPositionY) / (Date.now() - t.prevTime) / 2;
                    2 > Math.abs(l.touchesCurrent.x - t.prevPositionX) && (t.x = 0);
                    2 > Math.abs(l.touchesCurrent.y - t.prevPositionY) && (t.y = 0);
                    t.prevPositionX = l.touchesCurrent.x;
                    t.prevPositionY = l.touchesCurrent.y;
                    t.prevTime = Date.now();
                    h.$imageWrapEl.transform("translate3d(" + l.currentX + "px, " + l.currentY + "px,0)")
                }
            }
        },
        onTouchEnd: function() {
            var a = this.zoom
              , e = a.gesture
              , h = a.image
              , l = a.velocity;
            if (e.$imageEl && 0 !== e.$imageEl.length) {
                if (!h.isTouched || !h.isMoved)
                    return h.isTouched = !1,
                    void (h.isMoved = !1);
                h.isTouched = !1;
                h.isMoved = !1;
                var t = 300
                  , z = 300
                  , x = h.currentX + l.x * t
                  , D = h.currentY + l.y * z;
                0 !== l.x && (t = Math.abs((x - h.currentX) / l.x));
                0 !== l.y && (z = Math.abs((D - h.currentY) / l.y));
                l = Math.max(t, z);
                h.currentX = x;
                h.currentY = D;
                x = h.height * a.scale;
                h.minX = Math.min(e.slideWidth / 2 - h.width * a.scale / 2, 0);
                h.maxX = -h.minX;
                h.minY = Math.min(e.slideHeight / 2 - x / 2, 0);
                h.maxY = -h.minY;
                h.currentX = Math.max(Math.min(h.currentX, h.maxX), h.minX);
                h.currentY = Math.max(Math.min(h.currentY, h.maxY), h.minY);
                e.$imageWrapEl.transition(l).transform("translate3d(" + h.currentX + "px, " + h.currentY + "px,0)")
            }
        },
        onTransitionEnd: function() {
            var a = this.zoom
              , e = a.gesture;
            e.$slideEl && this.previousIndex !== this.activeIndex && (e.$imageEl.transform("translate3d(0,0,0) scale(1)"),
            e.$imageWrapEl.transform("translate3d(0,0,0)"),
            e.$slideEl = void 0,
            e.$imageEl = void 0,
            e.$imageWrapEl = void 0,
            a.scale = 1,
            a.currentScale = 1)
        },
        toggle: function(a) {
            var e = this.zoom;
            e.scale && 1 !== e.scale ? e.out() : e.in(a)
        },
        in: function(a) {
            var e, h, l, t, z, x, D, L, Y, ka, da, ea, ya, Ma, Da, La, Pa = this.zoom, Ra = this.params.zoom, Qa = Pa.gesture, zb = Pa.image;
            (Qa.$slideEl || (Qa.$slideEl = this.clickedSlide ? d(this.clickedSlide) : this.slides.eq(this.activeIndex),
            Qa.$imageEl = Qa.$slideEl.find("img, svg, canvas"),
            Qa.$imageWrapEl = Qa.$imageEl.parent("." + Ra.containerClass)),
            Qa.$imageEl && 0 !== Qa.$imageEl.length) && (Qa.$slideEl.addClass("" + Ra.zoomedSlideClass),
            void 0 === zb.touchesStart.x && a ? (e = "touchend" === a.type ? a.changedTouches[0].pageX : a.pageX,
            h = "touchend" === a.type ? a.changedTouches[0].pageY : a.pageY) : (e = zb.touchesStart.x,
            h = zb.touchesStart.y),
            Pa.scale = Qa.$imageWrapEl.attr("data-swiper-zoom") || Ra.maxRatio,
            Pa.currentScale = Qa.$imageWrapEl.attr("data-swiper-zoom") || Ra.maxRatio,
            a ? (Da = Qa.$slideEl[0].offsetWidth,
            La = Qa.$slideEl[0].offsetHeight,
            l = Qa.$slideEl.offset().left + Da / 2 - e,
            t = Qa.$slideEl.offset().top + La / 2 - h,
            D = Qa.$imageEl[0].offsetWidth,
            L = Qa.$imageEl[0].offsetHeight,
            Y = D * Pa.scale,
            ka = L * Pa.scale,
            ya = -(da = Math.min(Da / 2 - Y / 2, 0)),
            Ma = -(ea = Math.min(La / 2 - ka / 2, 0)),
            (z = l * Pa.scale) < da && (z = da),
            ya < z && (z = ya),
            (x = t * Pa.scale) < ea && (x = ea),
            Ma < x && (x = Ma)) : x = z = 0,
            Qa.$imageWrapEl.transition(300).transform("translate3d(" + z + "px, " + x + "px,0)"),
            Qa.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + Pa.scale + ")"))
        },
        out: function() {
            var a = this.zoom
              , e = this.params.zoom
              , h = a.gesture;
            h.$slideEl || (h.$slideEl = this.clickedSlide ? d(this.clickedSlide) : this.slides.eq(this.activeIndex),
            h.$imageEl = h.$slideEl.find("img, svg, canvas"),
            h.$imageWrapEl = h.$imageEl.parent("." + e.containerClass));
            h.$imageEl && 0 !== h.$imageEl.length && (a.scale = 1,
            a.currentScale = 1,
            h.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
            h.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
            h.$slideEl.removeClass("" + e.zoomedSlideClass),
            h.$slideEl = void 0)
        },
        enable: function() {
            var a = this.zoom;
            if (!a.enabled) {
                a.enabled = !0;
                var e = !("touchstart" !== this.touchEvents.start || !g.passiveListener || !this.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                g.gestures ? (this.$wrapperEl.on("gesturestart", ".swiper-slide", a.onGestureStart, e),
                this.$wrapperEl.on("gesturechange", ".swiper-slide", a.onGestureChange, e),
                this.$wrapperEl.on("gestureend", ".swiper-slide", a.onGestureEnd, e)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, ".swiper-slide", a.onGestureStart, e),
                this.$wrapperEl.on(this.touchEvents.move, ".swiper-slide", a.onGestureChange, e),
                this.$wrapperEl.on(this.touchEvents.end, ".swiper-slide", a.onGestureEnd, e));
                this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, a.onTouchMove)
            }
        },
        disable: function() {
            var a = this.zoom;
            if (a.enabled) {
                this.zoom.enabled = !1;
                var e = !("touchstart" !== this.touchEvents.start || !g.passiveListener || !this.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                g.gestures ? (this.$wrapperEl.off("gesturestart", ".swiper-slide", a.onGestureStart, e),
                this.$wrapperEl.off("gesturechange", ".swiper-slide", a.onGestureChange, e),
                this.$wrapperEl.off("gestureend", ".swiper-slide", a.onGestureEnd, e)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, ".swiper-slide", a.onGestureStart, e),
                this.$wrapperEl.off(this.touchEvents.move, ".swiper-slide", a.onGestureChange, e),
                this.$wrapperEl.off(this.touchEvents.end, ".swiper-slide", a.onGestureEnd, e));
                this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, a.onTouchMove)
            }
        }
    }
      , ac = function(a, e) {
        void 0 === e && (e = !0);
        var h = this
          , l = h.params.lazy;
        if (void 0 !== a && 0 !== h.slides.length) {
            var t = h.virtual && h.params.virtual.enabled ? h.$wrapperEl.children("." + h.params.slideClass + '[data-swiper-slide-index="' + a + '"]') : h.slides.eq(a);
            a = t.find("." + l.elementClass + ":not(." + l.loadedClass + "):not(." + l.loadingClass + ")");
            !t.hasClass(l.elementClass) || t.hasClass(l.loadedClass) || t.hasClass(l.loadingClass) || (a = a.add(t[0]));
            0 !== a.length && a.each(function(z, x) {
                var D = d(x);
                D.addClass(l.loadingClass);
                var L = D.attr("data-background")
                  , Y = D.attr("data-src")
                  , ka = D.attr("data-srcset")
                  , da = D.attr("data-sizes");
                h.loadImage(D[0], Y || L, ka, da, !1, function() {
                    if (null != h && h && (!h || h.params) && !h.destroyed) {
                        if (L ? (D.css("background-image", 'url("' + L + '")'),
                        D.removeAttr("data-background")) : (ka && (D.attr("srcset", ka),
                        D.removeAttr("data-srcset")),
                        da && (D.attr("sizes", da),
                        D.removeAttr("data-sizes")),
                        Y && (D.attr("src", Y),
                        D.removeAttr("data-src"))),
                        D.addClass(l.loadedClass).removeClass(l.loadingClass),
                        t.find("." + l.preloaderClass).remove(),
                        h.params.loop && e) {
                            var ea = t.attr("data-swiper-slide-index");
                            t.hasClass(h.params.slideDuplicateClass) ? (ea = h.$wrapperEl.children('[data-swiper-slide-index="' + ea + '"]:not(.' + h.params.slideDuplicateClass + ")"),
                            h.lazy.loadInSlide(ea.index(), !1)) : (ea = h.$wrapperEl.children("." + h.params.slideDuplicateClass + '[data-swiper-slide-index="' + ea + '"]'),
                            h.lazy.loadInSlide(ea.index(), !1))
                        }
                        h.emit("lazyImageReady", t[0], D[0])
                    }
                });
                h.emit("lazyImageLoad", t[0], D[0])
            })
        }
    }
      , pc = function() {
        function a(ea) {
            if (D) {
                if (l.children("." + t.slideClass + '[data-swiper-slide-index="' + ea + '"]').length)
                    return !0
            } else if (z[ea])
                return !0;
            return !1
        }
        function e(ea) {
            return D ? d(ea).attr("data-swiper-slide-index") : d(ea).index()
        }
        var h = this
          , l = h.$wrapperEl
          , t = h.params
          , z = h.slides
          , x = h.activeIndex
          , D = h.virtual && t.virtual.enabled
          , L = t.lazy
          , Y = t.slidesPerView;
        if ("auto" === Y && (Y = 0),
        h.lazy.initialImageLoaded || (h.lazy.initialImageLoaded = !0),
        h.params.watchSlidesVisibility)
            l.children("." + t.slideVisibleClass).each(function(ea, ya) {
                ea = D ? d(ya).attr("data-swiper-slide-index") : d(ya).index();
                h.lazy.loadInSlide(ea)
            });
        else if (1 < Y)
            for (var ka = x; ka < x + Y; ka += 1)
                a(ka) && h.lazy.loadInSlide(ka);
        else
            h.lazy.loadInSlide(x);
        if (L.loadPrevNext)
            if (1 < Y || L.loadPrevNextAmount && 1 < L.loadPrevNextAmount) {
                ka = L.loadPrevNextAmount;
                var da = Y;
                L = Math.min(x + da + Math.max(ka, da), z.length);
                ka = Math.max(x - Math.max(da, ka), 0);
                for (Y = x + Y; Y < L; Y += 1)
                    a(Y) && h.lazy.loadInSlide(Y);
                for (Y = ka; Y < x; Y += 1)
                    a(Y) && h.lazy.loadInSlide(Y)
            } else
                x = l.children("." + t.slideNextClass),
                0 < x.length && h.lazy.loadInSlide(e(x)),
                x = l.children("." + t.slidePrevClass),
                0 < x.length && h.lazy.loadInSlide(e(x))
    }
      , Wb = {
        LinearSpline: function(a, e) {
            var h, l, t, z, x;
            return this.x = a,
            this.y = e,
            this.lastIndex = a.length - 1,
            this.interpolate = function(D) {
                if (D) {
                    var L = this.x;
                    l = -1;
                    for (h = L.length; 1 < h - l; )
                        L[t = h + l >> 1] <= D ? l = t : h = t;
                    D = (x = h,
                    z = x - 1,
                    (D - this.x[z]) * (this.y[x] - this.y[z]) / (this.x[x] - this.x[z]) + this.y[z])
                } else
                    D = 0;
                return D
            }
            ,
            this
        },
        getInterpolateFunction: function(a) {
            this.controller.spline || (this.controller.spline = this.params.loop ? new Wb.LinearSpline(this.slidesGrid,a.slidesGrid) : new Wb.LinearSpline(this.snapGrid,a.snapGrid))
        },
        setTranslate: function(a, e) {
            function h(D) {
                var L = z.rtlTranslate ? -z.translate : z.translate;
                "slide" === z.params.controller.by && (z.controller.getInterpolateFunction(D),
                t = -z.controller.spline.interpolate(-L));
                t && "container" !== z.params.controller.by || (l = (D.maxTranslate() - D.minTranslate()) / (z.maxTranslate() - z.minTranslate()),
                t = (L - z.minTranslate()) * l + D.minTranslate());
                z.params.controller.inverse && (t = D.maxTranslate() - t);
                D.updateProgress(t);
                D.setTranslate(t, z);
                D.updateActiveIndex();
                D.updateSlidesClasses()
            }
            var l, t, z = this;
            a = z.controller.control;
            if (Array.isArray(a))
                for (var x = 0; x < a.length; x += 1)
                    a[x] !== e && a[x]instanceof pa && h(a[x]);
            else
                a instanceof pa && e !== a && h(a)
        },
        setTransition: function(a, e) {
            function h(x) {
                x.setTransition(a, t);
                0 !== a && (x.transitionStart(),
                x.params.autoHeight && b.nextTick(function() {
                    x.updateAutoHeight()
                }),
                x.$wrapperEl.transitionEnd(function() {
                    z && (x.params.loop && "slide" === t.params.controller.by && x.loopFix(),
                    x.transitionEnd())
                }))
            }
            var l, t = this, z = t.controller.control;
            if (Array.isArray(z))
                for (l = 0; l < z.length; l += 1)
                    z[l] !== e && z[l]instanceof pa && h(z[l]);
            else
                z instanceof pa && e !== z && h(z)
        }
    }
      , ic = {
        makeElFocusable: function(a) {
            return a.attr("tabIndex", "0"),
            a
        },
        addElRole: function(a, e) {
            return a.attr("role", e),
            a
        },
        addElLabel: function(a, e) {
            return a.attr("aria-label", e),
            a
        },
        disableEl: function(a) {
            return a.attr("aria-disabled", !0),
            a
        },
        enableEl: function(a) {
            return a.attr("aria-disabled", !1),
            a
        },
        onEnterKey: function(a) {
            var e = this.params.a11y;
            13 === a.keyCode && (a = d(a.target),
            this.navigation && this.navigation.$nextEl && a.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(),
            this.isEnd ? this.a11y.notify(e.lastSlideMessage) : this.a11y.notify(e.nextSlideMessage)),
            this.navigation && this.navigation.$prevEl && a.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(),
            this.isBeginning ? this.a11y.notify(e.firstSlideMessage) : this.a11y.notify(e.prevSlideMessage)),
            this.pagination && a.is("." + this.params.pagination.bulletClass) && a[0].click())
        },
        notify: function(a) {
            var e = this.a11y.liveRegion;
            0 !== e.length && (e.html(""),
            e.html(a))
        },
        updateNavigation: function() {
            if (!this.params.loop) {
                var a = this.navigation
                  , e = a.$nextEl;
                (a = a.$prevEl) && 0 < a.length && (this.isBeginning ? this.a11y.disableEl(a) : this.a11y.enableEl(a));
                e && 0 < e.length && (this.isEnd ? this.a11y.disableEl(e) : this.a11y.enableEl(e))
            }
        },
        updatePagination: function() {
            var a = this
              , e = a.params.a11y;
            a.pagination && a.params.pagination.clickable && a.pagination.bullets && a.pagination.bullets.length && a.pagination.bullets.each(function(h, l) {
                h = d(l);
                a.a11y.makeElFocusable(h);
                a.a11y.addElRole(h, "button");
                a.a11y.addElLabel(h, e.paginationBulletMessage.replace(/{{index}}/, h.index() + 1))
            })
        },
        init: function() {
            this.$el.append(this.a11y.liveRegion);
            var a, e, h = this.params.a11y;
            this.navigation && this.navigation.$nextEl && (a = this.navigation.$nextEl);
            this.navigation && this.navigation.$prevEl && (e = this.navigation.$prevEl);
            a && (this.a11y.makeElFocusable(a),
            this.a11y.addElRole(a, "button"),
            this.a11y.addElLabel(a, h.nextSlideMessage),
            a.on("keydown", this.a11y.onEnterKey));
            e && (this.a11y.makeElFocusable(e),
            this.a11y.addElRole(e, "button"),
            this.a11y.addElLabel(e, h.prevSlideMessage),
            e.on("keydown", this.a11y.onEnterKey));
            this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
        },
        destroy: function() {
            var a, e;
            this.a11y.liveRegion && 0 < this.a11y.liveRegion.length && this.a11y.liveRegion.remove();
            this.navigation && this.navigation.$nextEl && (a = this.navigation.$nextEl);
            this.navigation && this.navigation.$prevEl && (e = this.navigation.$prevEl);
            a && a.off("keydown", this.a11y.onEnterKey);
            e && e.off("keydown", this.a11y.onEnterKey);
            this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
        }
    }
      , Lb = {
        init: function() {
            if (this.params.history) {
                if (!H.history || !H.history.pushState)
                    return this.params.history.enabled = !1,
                    void (this.params.hashNavigation.enabled = !0);
                var a = this.history;
                a.initialized = !0;
                a.paths = Lb.getPathValues();
                (a.paths.key || a.paths.value) && (a.scrollToSlide(0, a.paths.value, this.params.runCallbacksOnInit),
                this.params.history.replaceState || H.addEventListener("popstate", this.history.setHistoryPopState))
            }
        },
        destroy: function() {
            this.params.history.replaceState || H.removeEventListener("popstate", this.history.setHistoryPopState)
        },
        setHistoryPopState: function() {
            this.history.paths = Lb.getPathValues();
            this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
        },
        getPathValues: function() {
            var a = H.location.pathname.slice(1).split("/").filter(function(h) {
                return "" !== h
            })
              , e = a.length;
            return {
                key: a[e - 2],
                value: a[e - 1]
            }
        },
        setHistory: function(a, e) {
            this.history.initialized && this.params.history.enabled && (e = this.slides.eq(e),
            e = Lb.slugify(e.attr("data-history")),
            H.location.pathname.includes(a) || (e = a + "/" + e),
            (a = H.history.state) && a.value === e || (this.params.history.replaceState ? H.history.replaceState({
                value: e
            }, null, e) : H.history.pushState({
                value: e
            }, null, e)))
        },
        slugify: function(a) {
            return a.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
        },
        scrollToSlide: function(a, e, h) {
            if (e)
                for (var l = 0, t = this.slides.length; l < t; l += 1) {
                    var z = this.slides.eq(l);
                    Lb.slugify(z.attr("data-history")) !== e || z.hasClass(this.params.slideDuplicateClass) || (z = z.index(),
                    this.slideTo(z, a, h))
                }
            else
                this.slideTo(0, a, h)
        }
    }
      , yb = function() {
        var a = R.location.hash.replace("#", "");
        a !== this.slides.eq(this.activeIndex).attr("data-hash") && (a = this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + a + '"]').index(),
        void 0 !== a && this.slideTo(a))
    }
      , Za = function() {
        if (this.hashNavigation.initialized && this.params.hashNavigation.enabled)
            if (this.params.hashNavigation.replaceState && H.history && H.history.replaceState)
                H.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || "");
            else {
                var a = this.slides.eq(this.activeIndex);
                a = a.attr("data-hash") || a.attr("data-history");
                R.location.hash = a || ""
            }
    }
      , fc = function() {
        if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
            this.hashNavigation.initialized = !0;
            var a = R.location.hash.replace("#", "");
            if (a)
                for (var e = 0, h = this.slides.length; e < h; e += 1) {
                    var l = this.slides.eq(e);
                    (l.attr("data-hash") || l.attr("data-history")) !== a || l.hasClass(this.params.slideDuplicateClass) || (l = l.index(),
                    this.slideTo(l, 0, this.params.runCallbacksOnInit, !0))
                }
            this.params.hashNavigation.watchState && d(H).on("hashchange", this.hashNavigation.onHashCange)
        }
    }
      , Ub = function() {
        this.params.hashNavigation.watchState && d(H).off("hashchange", this.hashNavigation.onHashCange)
    }
      , S = function() {
        var a = this
          , e = a.slides.eq(a.activeIndex)
          , h = a.params.autoplay.delay;
        e.attr("data-swiper-autoplay") && (h = e.attr("data-swiper-autoplay") || a.params.autoplay.delay);
        a.autoplay.timeout = b.nextTick(function() {
            a.params.autoplay.reverseDirection ? a.params.loop ? (a.loopFix(),
            a.slidePrev(a.params.speed, !0, !0),
            a.emit("autoplay")) : a.isBeginning ? a.params.autoplay.stopOnLastSlide ? a.autoplay.stop() : (a.slideTo(a.slides.length - 1, a.params.speed, !0, !0),
            a.emit("autoplay")) : (a.slidePrev(a.params.speed, !0, !0),
            a.emit("autoplay")) : a.params.loop ? (a.loopFix(),
            a.slideNext(a.params.speed, !0, !0),
            a.emit("autoplay")) : a.isEnd ? a.params.autoplay.stopOnLastSlide ? a.autoplay.stop() : (a.slideTo(0, a.params.speed, !0, !0),
            a.emit("autoplay")) : (a.slideNext(a.params.speed, !0, !0),
            a.emit("autoplay"))
        }, h)
    }
      , Q = function() {
        return void 0 === this.autoplay.timeout && !this.autoplay.running && (this.autoplay.running = !0,
        this.emit("autoplayStart"),
        this.autoplay.run(),
        !0)
    }
      , q = function() {
        return !!this.autoplay.running && void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout),
        this.autoplay.timeout = void 0),
        this.autoplay.running = !1,
        this.emit("autoplayStop"),
        !0)
    }
      , v = function(a) {
        this.autoplay.running && (this.autoplay.paused || (this.autoplay.timeout && clearTimeout(this.autoplay.timeout),
        this.autoplay.paused = !0,
        0 !== a && this.params.autoplay.waitForTransition ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd),
        this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd)) : (this.autoplay.paused = !1,
        this.autoplay.run())))
    }
      , F = function() {
        for (var a = this.slides, e = 0; e < a.length; e += 1) {
            var h = this.slides.eq(e)
              , l = -h[0].swiperSlideOffset;
            this.params.virtualTranslate || (l -= this.translate);
            var t = 0;
            this.isHorizontal() || (t = l,
            l = 0);
            h.css({
                opacity: this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(h[0].progress), 0) : 1 + Math.min(Math.max(h[0].progress, -1), 0)
            }).transform("translate3d(" + l + "px, " + t + "px, 0px)")
        }
    }
      , ba = function(a) {
        var e = this
          , h = e.slides
          , l = e.$wrapperEl;
        if (h.transition(a),
        e.params.virtualTranslate && 0 !== a) {
            var t = !1;
            h.transitionEnd(function() {
                if (!t && e && !e.destroyed) {
                    t = !0;
                    e.animating = !1;
                    for (var z = ["webkitTransitionEnd", "transitionend"], x = 0; x < z.length; x += 1)
                        l.trigger(z[x])
                }
            })
        }
    }
      , ca = function() {
        var a, e = this.$el, h = this.$wrapperEl, l = this.slides, t = this.width, z = this.height, x = this.rtlTranslate, D = this.size, L = this.params.cubeEffect, Y = this.isHorizontal(), ka = this.virtual && this.params.virtual.enabled, da = 0;
        L.shadow && (Y ? (0 === (a = h.find(".swiper-cube-shadow")).length && (a = d('<div class="swiper-cube-shadow"></div>'),
        h.append(a)),
        a.css({
            height: t + "px"
        })) : 0 === (a = e.find(".swiper-cube-shadow")).length && (a = d('<div class="swiper-cube-shadow"></div>'),
        e.append(a)));
        for (e = 0; e < l.length; e += 1) {
            var ea = l.eq(e)
              , ya = e;
            ka && (ya = parseInt(ea.attr("data-swiper-slide-index"), 10));
            var Ma = 90 * ya
              , Da = Math.floor(Ma / 360);
            x && (Ma = -Ma,
            Da = Math.floor(-Ma / 360));
            var La = Math.max(Math.min(ea[0].progress, 1), -1)
              , Pa = 0
              , Ra = 0
              , Qa = 0;
            0 == ya % 4 ? (Pa = 4 * -Da * D,
            Qa = 0) : 0 == (ya - 1) % 4 ? (Pa = 0,
            Qa = 4 * -Da * D) : 0 == (ya - 2) % 4 ? (Pa = D + 4 * Da * D,
            Qa = D) : 0 == (ya - 3) % 4 && (Pa = -D,
            Qa = 3 * D + 4 * D * Da);
            x && (Pa = -Pa);
            Y || (Ra = Pa,
            Pa = 0);
            Ma = "rotateX(" + (Y ? 0 : -Ma) + "deg) rotateY(" + (Y ? Ma : 0) + "deg) translate3d(" + Pa + "px, " + Ra + "px, " + Qa + "px)";
            if (1 >= La && -1 < La && (da = 90 * ya + 90 * La,
            x && (da = 90 * -ya - 90 * La)),
            ea.transform(Ma),
            L.slideShadows)
                ya = Y ? ea.find(".swiper-slide-shadow-left") : ea.find(".swiper-slide-shadow-top"),
                Ma = Y ? ea.find(".swiper-slide-shadow-right") : ea.find(".swiper-slide-shadow-bottom"),
                0 === ya.length && (ya = d('<div class="swiper-slide-shadow-' + (Y ? "left" : "top") + '"></div>'),
                ea.append(ya)),
                0 === Ma.length && (Ma = d('<div class="swiper-slide-shadow-' + (Y ? "right" : "bottom") + '"></div>'),
                ea.append(Ma)),
                ya.length && (ya[0].style.opacity = Math.max(-La, 0)),
                Ma.length && (Ma[0].style.opacity = Math.max(La, 0))
        }
        if (h.css({
            "-webkit-transform-origin": "50% 50% -" + D / 2 + "px",
            "-moz-transform-origin": "50% 50% -" + D / 2 + "px",
            "-ms-transform-origin": "50% 50% -" + D / 2 + "px",
            "transform-origin": "50% 50% -" + D / 2 + "px"
        }),
        L.shadow)
            Y ? a.transform("translate3d(0px, " + (t / 2 + L.shadowOffset) + "px, " + -t / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + L.shadowScale + ")") : (l = Math.abs(da) - 90 * Math.floor(Math.abs(da) / 90),
            l = L.shadowScale / (1.5 - (Math.sin(2 * l * Math.PI / 360) / 2 + Math.cos(2 * l * Math.PI / 360) / 2)),
            a.transform("scale3d(" + L.shadowScale + ", 1, " + l + ") translate3d(0px, " + (z / 2 + L.shadowOffset) + "px, " + -z / 2 / l + "px) rotateX(-90deg)"));
        h.transform("translate3d(0px,0," + (I.isSafari || I.isUiWebView ? -D / 2 : 0) + "px) rotateX(" + (this.isHorizontal() ? 0 : da) + "deg) rotateY(" + (this.isHorizontal() ? -da : 0) + "deg)")
    }
      , va = function(a) {
        var e = this.$el;
        this.slides.transition(a).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(a);
        this.params.cubeEffect.shadow && !this.isHorizontal() && e.find(".swiper-cube-shadow").transition(a)
    }
      , Gb = function() {
        for (var a = this.slides, e = this.rtlTranslate, h = 0; h < a.length; h += 1) {
            var l = a.eq(h)
              , t = l[0].progress;
            this.params.flipEffect.limitRotation && (t = Math.max(Math.min(l[0].progress, 1), -1));
            var z = -180 * t
              , x = 0
              , D = -l[0].swiperSlideOffset
              , L = 0;
            if (this.isHorizontal() ? e && (z = -z) : (L = D,
            x = -z,
            z = D = 0),
            l[0].style.zIndex = -Math.abs(Math.round(t)) + a.length,
            this.params.flipEffect.slideShadows) {
                var Y = this.isHorizontal() ? l.find(".swiper-slide-shadow-left") : l.find(".swiper-slide-shadow-top")
                  , ka = this.isHorizontal() ? l.find(".swiper-slide-shadow-right") : l.find(".swiper-slide-shadow-bottom");
                0 === Y.length && (Y = d('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'),
                l.append(Y));
                0 === ka.length && (ka = d('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'),
                l.append(ka));
                Y.length && (Y[0].style.opacity = Math.max(-t, 0));
                ka.length && (ka[0].style.opacity = Math.max(t, 0))
            }
            l.transform("translate3d(" + D + "px, " + L + "px, 0px) rotateX(" + x + "deg) rotateY(" + z + "deg)")
        }
    }
      , Ab = function(a) {
        var e = this
          , h = e.slides
          , l = e.activeIndex
          , t = e.$wrapperEl;
        if (h.transition(a).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(a),
        e.params.virtualTranslate && 0 !== a) {
            var z = !1;
            h.eq(l).transitionEnd(function() {
                if (!z && e && !e.destroyed) {
                    z = !0;
                    e.animating = !1;
                    for (var x = ["webkitTransitionEnd", "transitionend"], D = 0; D < x.length; D += 1)
                        t.trigger(x[D])
                }
            })
        }
    }
      , Yb = function() {
        var a = this.width
          , e = this.height
          , h = this.slides
          , l = this.$wrapperEl
          , t = this.slidesSizesGrid
          , z = this.params.coverflowEffect
          , x = this.isHorizontal()
          , D = this.translate;
        a = x ? a / 2 - D : e / 2 - D;
        e = x ? z.rotate : -z.rotate;
        D = z.depth;
        for (var L = 0, Y = h.length; L < Y; L += 1) {
            var ka = h.eq(L)
              , da = t[L];
            da = (a - ka[0].swiperSlideOffset - da / 2) / da * z.modifier;
            var ea = x ? e * da : 0
              , ya = x ? 0 : e * da
              , Ma = -D * Math.abs(da)
              , Da = x ? 0 : z.stretch * da
              , La = x ? z.stretch * da : 0;
            .001 > Math.abs(La) && (La = 0);
            .001 > Math.abs(Da) && (Da = 0);
            .001 > Math.abs(Ma) && (Ma = 0);
            .001 > Math.abs(ea) && (ea = 0);
            .001 > Math.abs(ya) && (ya = 0);
            if (ka.transform("translate3d(" + La + "px," + Da + "px," + Ma + "px)  rotateX(" + ya + "deg) rotateY(" + ea + "deg)"),
            ka[0].style.zIndex = 1 - Math.abs(Math.round(da)),
            z.slideShadows)
                ea = x ? ka.find(".swiper-slide-shadow-left") : ka.find(".swiper-slide-shadow-top"),
                ya = x ? ka.find(".swiper-slide-shadow-right") : ka.find(".swiper-slide-shadow-bottom"),
                0 === ea.length && (ea = d('<div class="swiper-slide-shadow-' + (x ? "left" : "top") + '"></div>'),
                ka.append(ea)),
                0 === ya.length && (ya = d('<div class="swiper-slide-shadow-' + (x ? "right" : "bottom") + '"></div>'),
                ka.append(ya)),
                ea.length && (ea[0].style.opacity = 0 < da ? da : 0),
                ya.length && (ya[0].style.opacity = 0 < -da ? -da : 0)
        }
        (g.pointerEvents || g.prefixedPointerEvents) && (l[0].style.perspectiveOrigin = a + "px 50%")
    }
      , $b = function(a) {
        this.slides.transition(a).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(a)
    }
      , Gc = function() {
        var a = this.params.thumbs
          , e = this.constructor;
        a.swiper instanceof e ? (this.thumbs.swiper = a.swiper,
        b.extend(this.thumbs.swiper.originalParams, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1
        }),
        b.extend(this.thumbs.swiper.params, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1
        })) : b.isObject(a.swiper) && (this.thumbs.swiper = new e(b.extend({}, a.swiper, {
            watchSlidesVisibility: !0,
            watchSlidesProgress: !0,
            slideToClickedSlide: !1
        })),
        this.thumbs.swiperCreated = !0);
        this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass);
        this.thumbs.swiper.on("tap", this.thumbs.onThumbClick)
    }
      , Vc = function() {
        var a = this.thumbs.swiper;
        if (a) {
            var e = a.clickedIndex;
            if (null != e) {
                var h;
                if (h = a.params.loop ? parseInt(d(a.clickedSlide).attr("data-swiper-slide-index"), 10) : e,
                this.params.loop)
                    a = this.activeIndex,
                    this.slides.eq(a).hasClass(this.params.slideDuplicateClass) && (this.loopFix(),
                    this._clientLeft = this.$wrapperEl[0].clientLeft,
                    a = this.activeIndex),
                    e = this.slides.eq(a).prevAll('[data-swiper-slide-index="' + h + '"]').eq(0).index(),
                    h = this.slides.eq(a).nextAll('[data-swiper-slide-index="' + h + '"]').eq(0).index(),
                    h = void 0 === e ? h : void 0 === h ? e : h - a < a - e ? h : e;
                this.slideTo(h)
            }
        }
    }
      , dd = function(a) {
        var e = this.thumbs.swiper;
        if (e) {
            var h = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : e.params.slidesPerView;
            if (this.realIndex !== e.realIndex) {
                var l = e.activeIndex;
                if (e.params.loop) {
                    e.slides.eq(l).hasClass(e.params.slideDuplicateClass) && (e.loopFix(),
                    e._clientLeft = e.$wrapperEl[0].clientLeft,
                    l = e.activeIndex);
                    var t = e.slides.eq(l).prevAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index();
                    var z = e.slides.eq(l).nextAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index();
                    t = void 0 === t ? z : void 0 === z ? t : z - l < l - t ? z : t
                } else
                    t = this.realIndex;
                0 > e.visibleSlidesIndexes.indexOf(t) && (e.params.centeredSlides ? t = l < t ? t - Math.floor(h / 2) + 1 : t + Math.floor(h / 2) - 1 : l < t && (t = t - h + 1),
                e.slideTo(t, a ? 0 : void 0))
            }
            a = 1;
            h = this.params.thumbs.slideThumbActiveClass;
            if (1 < this.params.slidesPerView && !this.params.centeredSlides && (a = this.params.slidesPerView),
            e.slides.removeClass(h),
            e.params.loop)
                for (l = 0; l < a; l += 1)
                    e.$wrapperEl.children('[data-swiper-slide-index="' + (this.realIndex + l) + '"]').addClass(h);
            else
                for (l = 0; l < a; l += 1)
                    e.slides.eq(this.realIndex + l).addClass(h)
        }
    };
    y = [y, Ea, Fa, {
        name: "resize",
        create: function() {
            var a = this;
            b.extend(a, {
                resize: {
                    resizeHandler: function() {
                        a && !a.destroyed && a.initialized && (a.emit("beforeResize"),
                        a.emit("resize"))
                    },
                    orientationChangeHandler: function() {
                        a && !a.destroyed && a.initialized && a.emit("orientationchange")
                    }
                }
            })
        },
        on: {
            init: function() {
                H.addEventListener("resize", this.resize.resizeHandler);
                H.addEventListener("orientationchange", this.resize.orientationChangeHandler)
            },
            destroy: function() {
                H.removeEventListener("resize", this.resize.resizeHandler);
                H.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
            }
        }
    }, {
        name: "observer",
        params: {
            observer: !1,
            observeParents: !1
        },
        create: function() {
            b.extend(this, {
                observer: {
                    init: qa.init.bind(this),
                    attach: qa.attach.bind(this),
                    destroy: qa.destroy.bind(this),
                    observers: []
                }
            })
        },
        on: {
            init: function() {
                this.observer.init()
            },
            destroy: function() {
                this.observer.destroy()
            }
        }
    }, {
        name: "virtual",
        params: {
            virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null,
                addSlidesBefore: 0,
                addSlidesAfter: 0
            }
        },
        create: function() {
            b.extend(this, {
                virtual: {
                    update: ha.bind(this),
                    appendSlide: aa.bind(this),
                    prependSlide: ma.bind(this),
                    renderSlide: V.bind(this),
                    slides: this.params.virtual.slides,
                    cache: {}
                }
            })
        },
        on: {
            beforeInit: function() {
                if (this.params.virtual.enabled) {
                    this.classNames.push(this.params.containerModifierClass + "virtual");
                    var a = {
                        watchSlidesProgress: !0
                    };
                    b.extend(this.params, a);
                    b.extend(this.originalParams, a);
                    this.virtual.update()
                }
            },
            setTranslate: function() {
                this.params.virtual.enabled && this.virtual.update()
            }
        }
    }, {
        name: "keyboard",
        params: {
            keyboard: {
                enabled: !1,
                onlyInViewport: !0
            }
        },
        create: function() {
            b.extend(this, {
                keyboard: {
                    enabled: !1,
                    enable: Ka.bind(this),
                    disable: Na.bind(this),
                    handle: Ja.bind(this)
                }
            })
        },
        on: {
            init: function() {
                this.params.keyboard.enabled && this.keyboard.enable()
            },
            destroy: function() {
                this.keyboard.enabled && this.keyboard.disable()
            }
        }
    }, {
        name: "mousewheel",
        params: {
            mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarged: "container"
            }
        },
        create: function() {
            b.extend(this, {
                mousewheel: {
                    enabled: !1,
                    enable: na.enable.bind(this),
                    disable: na.disable.bind(this),
                    handle: na.handle.bind(this),
                    handleMouseEnter: na.handleMouseEnter.bind(this),
                    handleMouseLeave: na.handleMouseLeave.bind(this),
                    lastScrollTime: b.now()
                }
            })
        },
        on: {
            init: function() {
                this.params.mousewheel.enabled && this.mousewheel.enable()
            },
            destroy: function() {
                this.mousewheel.enabled && this.mousewheel.disable()
            }
        }
    }, {
        name: "navigation",
        params: {
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock"
            }
        },
        create: function() {
            b.extend(this, {
                navigation: {
                    init: xa.bind(this),
                    update: Ha.bind(this),
                    destroy: Oa.bind(this)
                }
            })
        },
        on: {
            init: function() {
                this.navigation.init();
                this.navigation.update()
            },
            toEdge: function() {
                this.navigation.update()
            },
            fromEdge: function() {
                this.navigation.update()
            },
            destroy: function() {
                this.navigation.destroy()
            },
            click: function(a) {
                var e = this.navigation
                  , h = e.$nextEl;
                e = e.$prevEl;
                !this.params.navigation.hideOnClick || d(a.target).is(e) || d(a.target).is(h) || (h && h.toggleClass(this.params.navigation.hiddenClass),
                e && e.toggleClass(this.params.navigation.hiddenClass))
            }
        }
    }, {
        name: "pagination",
        params: {
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: function(a) {
                    return a
                },
                formatFractionTotal: function(a) {
                    return a
                },
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                modifierClass: "swiper-pagination-",
                currentClass: "swiper-pagination-current",
                totalClass: "swiper-pagination-total",
                hiddenClass: "swiper-pagination-hidden",
                progressbarFillClass: "swiper-pagination-progressbar-fill",
                progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                clickableClass: "swiper-pagination-clickable",
                lockClass: "swiper-pagination-lock"
            }
        },
        create: function() {
            b.extend(this, {
                pagination: {
                    init: Ua.bind(this),
                    render: lb.bind(this),
                    update: jb.bind(this),
                    destroy: gb.bind(this),
                    dynamicBulletIndex: 0
                }
            })
        },
        on: {
            init: function() {
                this.pagination.init();
                this.pagination.render();
                this.pagination.update()
            },
            activeIndexChange: function() {
                this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update()
            },
            snapIndexChange: function() {
                this.params.loop || this.pagination.update()
            },
            slidesLengthChange: function() {
                this.params.loop && (this.pagination.render(),
                this.pagination.update())
            },
            snapGridLengthChange: function() {
                this.params.loop || (this.pagination.render(),
                this.pagination.update())
            },
            destroy: function() {
                this.pagination.destroy()
            },
            click: function(a) {
                this.params.pagination.el && this.params.pagination.hideOnClick && 0 < this.pagination.$el.length && !d(a.target).hasClass(this.params.pagination.bulletClass) && this.pagination.$el.toggleClass(this.params.pagination.hiddenClass)
            }
        }
    }, {
        name: "scrollbar",
        params: {
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag"
            }
        },
        create: function() {
            b.extend(this, {
                scrollbar: {
                    init: ua.bind(this),
                    destroy: Wa.bind(this),
                    updateSize: Hb.bind(this),
                    setTranslate: vb.bind(this),
                    setTransition: Fb.bind(this),
                    enableDraggable: fb.bind(this),
                    disableDraggable: fa.bind(this),
                    setDragPosition: Cb.bind(this),
                    onDragStart: Ib.bind(this),
                    onDragMove: eb.bind(this),
                    onDragEnd: Va.bind(this),
                    isTouched: !1,
                    timeout: null,
                    dragTimeout: null
                }
            })
        },
        on: {
            init: function() {
                this.scrollbar.init();
                this.scrollbar.updateSize();
                this.scrollbar.setTranslate()
            },
            update: function() {
                this.scrollbar.updateSize()
            },
            resize: function() {
                this.scrollbar.updateSize()
            },
            observerUpdate: function() {
                this.scrollbar.updateSize()
            },
            setTranslate: function() {
                this.scrollbar.setTranslate()
            },
            setTransition: function(a) {
                this.scrollbar.setTransition(a)
            },
            destroy: function() {
                this.scrollbar.destroy()
            }
        }
    }, {
        name: "parallax",
        params: {
            parallax: {
                enabled: !1
            }
        },
        create: function() {
            b.extend(this, {
                parallax: {
                    setTransform: Sa.bind(this),
                    setTranslate: Ga.bind(this),
                    setTransition: n.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                this.params.parallax.enabled && (this.params.watchSlidesProgress = !0,
                this.originalParams.watchSlidesProgress = !0)
            },
            init: function() {
                this.params.parallax && this.parallax.setTranslate()
            },
            setTranslate: function() {
                this.params.parallax && this.parallax.setTranslate()
            },
            setTransition: function(a) {
                this.params.parallax && this.parallax.setTransition(a)
            }
        }
    }, {
        name: "zoom",
        params: {
            zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        },
        create: function() {
            var a = this
              , e = {
                enabled: !1,
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                    $slideEl: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    $imageEl: void 0,
                    $imageWrapEl: void 0,
                    maxRatio: 3
                },
                image: {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {}
                },
                velocity: {
                    x: void 0,
                    y: void 0,
                    prevPositionX: void 0,
                    prevPositionY: void 0,
                    prevTime: void 0
                }
            };
            "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(h) {
                e[h] = Rb[h].bind(a)
            });
            b.extend(a, {
                zoom: e
            })
        },
        on: {
            init: function() {
                this.params.zoom.enabled && this.zoom.enable()
            },
            destroy: function() {
                this.zoom.disable()
            },
            touchStart: function(a) {
                this.zoom.enabled && this.zoom.onTouchStart(a)
            },
            touchEnd: function(a) {
                this.zoom.enabled && this.zoom.onTouchEnd(a)
            },
            doubleTap: function(a) {
                this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(a)
            },
            transitionEnd: function() {
                this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
            }
        }
    }, {
        name: "lazy",
        params: {
            lazy: {
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader"
            }
        },
        create: function() {
            b.extend(this, {
                lazy: {
                    initialImageLoaded: !1,
                    load: pc.bind(this),
                    loadInSlide: ac.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
            },
            init: function() {
                this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
            },
            scroll: function() {
                this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
            },
            resize: function() {
                this.params.lazy.enabled && this.lazy.load()
            },
            scrollbarDragMove: function() {
                this.params.lazy.enabled && this.lazy.load()
            },
            transitionStart: function() {
                this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load()
            },
            transitionEnd: function() {
                this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
            }
        }
    }, {
        name: "controller",
        params: {
            controller: {
                control: void 0,
                inverse: !1,
                by: "slide"
            }
        },
        create: function() {
            b.extend(this, {
                controller: {
                    control: this.params.controller.control,
                    getInterpolateFunction: Wb.getInterpolateFunction.bind(this),
                    setTranslate: Wb.setTranslate.bind(this),
                    setTransition: Wb.setTransition.bind(this)
                }
            })
        },
        on: {
            update: function() {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0,
                delete this.controller.spline)
            },
            resize: function() {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0,
                delete this.controller.spline)
            },
            observerUpdate: function() {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0,
                delete this.controller.spline)
            },
            setTranslate: function(a, e) {
                this.controller.control && this.controller.setTranslate(a, e)
            },
            setTransition: function(a, e) {
                this.controller.control && this.controller.setTransition(a, e)
            }
        }
    }, {
        name: "a11y",
        params: {
            a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}"
            }
        },
        create: function() {
            var a = this;
            b.extend(a, {
                a11y: {
                    liveRegion: d('<span class="' + a.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                }
            });
            Object.keys(ic).forEach(function(e) {
                a.a11y[e] = ic[e].bind(a)
            })
        },
        on: {
            init: function() {
                this.params.a11y.enabled && (this.a11y.init(),
                this.a11y.updateNavigation())
            },
            toEdge: function() {
                this.params.a11y.enabled && this.a11y.updateNavigation()
            },
            fromEdge: function() {
                this.params.a11y.enabled && this.a11y.updateNavigation()
            },
            paginationUpdate: function() {
                this.params.a11y.enabled && this.a11y.updatePagination()
            },
            destroy: function() {
                this.params.a11y.enabled && this.a11y.destroy()
            }
        }
    }, {
        name: "history",
        params: {
            history: {
                enabled: !1,
                replaceState: !1,
                key: "slides"
            }
        },
        create: function() {
            b.extend(this, {
                history: {
                    init: Lb.init.bind(this),
                    setHistory: Lb.setHistory.bind(this),
                    setHistoryPopState: Lb.setHistoryPopState.bind(this),
                    scrollToSlide: Lb.scrollToSlide.bind(this),
                    destroy: Lb.destroy.bind(this)
                }
            })
        },
        on: {
            init: function() {
                this.params.history.enabled && this.history.init()
            },
            destroy: function() {
                this.params.history.enabled && this.history.destroy()
            },
            transitionEnd: function() {
                this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
            }
        }
    }, {
        name: "hash-navigation",
        params: {
            hashNavigation: {
                enabled: !1,
                replaceState: !1,
                watchState: !1
            }
        },
        create: function() {
            b.extend(this, {
                hashNavigation: {
                    initialized: !1,
                    init: fc.bind(this),
                    destroy: Ub.bind(this),
                    setHash: Za.bind(this),
                    onHashCange: yb.bind(this)
                }
            })
        },
        on: {
            init: function() {
                this.params.hashNavigation.enabled && this.hashNavigation.init()
            },
            destroy: function() {
                this.params.hashNavigation.enabled && this.hashNavigation.destroy()
            },
            transitionEnd: function() {
                this.hashNavigation.initialized && this.hashNavigation.setHash()
            }
        }
    }, {
        name: "autoplay",
        params: {
            autoplay: {
                enabled: !1,
                delay: 3E3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1
            }
        },
        create: function() {
            var a = this;
            b.extend(a, {
                autoplay: {
                    running: !1,
                    paused: !1,
                    run: S.bind(a),
                    start: Q.bind(a),
                    stop: q.bind(a),
                    pause: v.bind(a),
                    onTransitionEnd: function(e) {
                        a && !a.destroyed && a.$wrapperEl && e.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.autoplay.onTransitionEnd),
                        a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.autoplay.onTransitionEnd),
                        a.autoplay.paused = !1,
                        a.autoplay.running ? a.autoplay.run() : a.autoplay.stop())
                    }
                }
            })
        },
        on: {
            init: function() {
                this.params.autoplay.enabled && this.autoplay.start()
            },
            beforeTransitionStart: function(a, e) {
                this.autoplay.running && (e || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(a) : this.autoplay.stop())
            },
            sliderFirstMove: function() {
                this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
            },
            destroy: function() {
                this.autoplay.running && this.autoplay.stop()
            }
        }
    }, {
        name: "effect-fade",
        params: {
            fadeEffect: {
                crossFade: !1
            }
        },
        create: function() {
            b.extend(this, {
                fadeEffect: {
                    setTranslate: F.bind(this),
                    setTransition: ba.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                if ("fade" === this.params.effect) {
                    this.classNames.push(this.params.containerModifierClass + "fade");
                    var a = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    };
                    b.extend(this.params, a);
                    b.extend(this.originalParams, a)
                }
            },
            setTranslate: function() {
                "fade" === this.params.effect && this.fadeEffect.setTranslate()
            },
            setTransition: function(a) {
                "fade" === this.params.effect && this.fadeEffect.setTransition(a)
            }
        }
    }, {
        name: "effect-cube",
        params: {
            cubeEffect: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            }
        },
        create: function() {
            b.extend(this, {
                cubeEffect: {
                    setTranslate: ca.bind(this),
                    setTransition: va.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                if ("cube" === this.params.effect) {
                    this.classNames.push(this.params.containerModifierClass + "cube");
                    this.classNames.push(this.params.containerModifierClass + "3d");
                    var a = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        resistanceRatio: 0,
                        spaceBetween: 0,
                        centeredSlides: !1,
                        virtualTranslate: !0
                    };
                    b.extend(this.params, a);
                    b.extend(this.originalParams, a)
                }
            },
            setTranslate: function() {
                "cube" === this.params.effect && this.cubeEffect.setTranslate()
            },
            setTransition: function(a) {
                "cube" === this.params.effect && this.cubeEffect.setTransition(a)
            }
        }
    }, {
        name: "effect-flip",
        params: {
            flipEffect: {
                slideShadows: !0,
                limitRotation: !0
            }
        },
        create: function() {
            b.extend(this, {
                flipEffect: {
                    setTranslate: Gb.bind(this),
                    setTransition: Ab.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                if ("flip" === this.params.effect) {
                    this.classNames.push(this.params.containerModifierClass + "flip");
                    this.classNames.push(this.params.containerModifierClass + "3d");
                    var a = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    };
                    b.extend(this.params, a);
                    b.extend(this.originalParams, a)
                }
            },
            setTranslate: function() {
                "flip" === this.params.effect && this.flipEffect.setTranslate()
            },
            setTransition: function(a) {
                "flip" === this.params.effect && this.flipEffect.setTransition(a)
            }
        }
    }, {
        name: "effect-coverflow",
        params: {
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: !0
            }
        },
        create: function() {
            b.extend(this, {
                coverflowEffect: {
                    setTranslate: Yb.bind(this),
                    setTransition: $b.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                "coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"),
                this.classNames.push(this.params.containerModifierClass + "3d"),
                this.params.watchSlidesProgress = !0,
                this.originalParams.watchSlidesProgress = !0)
            },
            setTranslate: function() {
                "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
            },
            setTransition: function(a) {
                "coverflow" === this.params.effect && this.coverflowEffect.setTransition(a)
            }
        }
    }, {
        name: "thumbs",
        params: {
            thumbs: {
                swiper: null,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-container-thumbs"
            }
        },
        create: function() {
            b.extend(this, {
                thumbs: {
                    swiper: null,
                    init: Gc.bind(this),
                    update: dd.bind(this),
                    onThumbClick: Vc.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                var a = this.params.thumbs;
                a && a.swiper && (this.thumbs.init(),
                this.thumbs.update(!0))
            },
            slideChange: function() {
                this.thumbs.swiper && this.thumbs.update()
            },
            update: function() {
                this.thumbs.swiper && this.thumbs.update()
            },
            resize: function() {
                this.thumbs.swiper && this.thumbs.update()
            },
            observerUpdate: function() {
                this.thumbs.swiper && this.thumbs.update()
            },
            setTransition: function(a) {
                var e = this.thumbs.swiper;
                e && e.setTransition(a)
            },
            beforeDestroy: function() {
                var a = this.thumbs.swiper;
                a && this.thumbs.swiperCreated && a && a.destroy()
            }
        }
    }];
    return void 0 === pa.use && (pa.use = pa.Class.use,
    pa.installModule = pa.Class.installModule),
    pa.use(y),
    pa
});
/*
 JavaScript Cookie v2.1.3
 https://github.com/js-cookie/js-cookie

 Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 Released under the MIT license
*/
(function(d) {
    var k = !1;
    "function" === typeof define && define.amd && (define(d),
    k = !0);
    "object" === typeof exports && (module.exports = d(),
    k = !0);
    if (!k) {
        var E = window.Cookies
          , R = window.Cookies = d();
        R.noConflict = function() {
            window.Cookies = E;
            return R
        }
    }
}
)(function() {
    function d() {
        for (var E = 0, R = {}; E < arguments.length; E++) {
            var H = arguments[E], M;
            for (M in H)
                R[M] = H[M]
        }
        return R
    }
    function k(E) {
        function R(H, M, ja) {
            if ("undefined" !== typeof document) {
                if (1 < arguments.length) {
                    ja = d({
                        path: "/"
                    }, R.defaults, ja);
                    if ("number" === typeof ja.expires) {
                        var Ea = new Date;
                        Ea.setMilliseconds(Ea.getMilliseconds() + 864E5 * ja.expires);
                        ja.expires = Ea
                    }
                    ja.expires = ja.expires ? ja.expires.toUTCString() : "";
                    try {
                        var Fa = JSON.stringify(M);
                        /^[\{\[]/.test(Fa) && (M = Fa)
                    } catch (I) {}
                    M = E.write ? E.write(M, H) : encodeURIComponent(String(M)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
                    H = encodeURIComponent(String(H));
                    H = H.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
                    H = H.replace(/[\(\)]/g, escape);
                    Fa = "";
                    for (var oa in ja)
                        ja[oa] && (Fa += "; " + oa,
                        !0 !== ja[oa] && (Fa += "=" + ja[oa]));
                    return document.cookie = H + "=" + M + Fa
                }
                H || (Fa = {});
                oa = document.cookie ? document.cookie.split("; ") : [];
                for (var b = /(%[0-9A-Z]{2})+/g, g = 0; g < oa.length; g++) {
                    var u = oa[g].split("=")
                      , y = u.slice(1).join("=");
                    '"' === y.charAt(0) && (y = y.slice(1, -1));
                    try {
                        Ea = u[0].replace(b, decodeURIComponent);
                        y = E.read ? E.read(y, Ea) : E(y, Ea) || y.replace(b, decodeURIComponent);
                        if (this.json)
                            try {
                                y = JSON.parse(y)
                            } catch (I) {}
                        if (H === Ea) {
                            Fa = y;
                            break
                        }
                        H || (Fa[Ea] = y)
                    } catch (I) {}
                }
                return Fa
            }
        }
        R.set = R;
        R.get = function(H) {
            return R.call(R, H)
        }
        ;
        R.getJSON = function() {
            return R.apply({
                json: !0
            }, [].slice.call(arguments))
        }
        ;
        R.defaults = {};
        R.remove = function(H, M) {
            R(H, "", d(M, {
                expires: -1
            }))
        }
        ;
        R.withConverter = k;
        return R
    }
    return k(function() {})
});
function addMessage(d, k, E) {
    $(d).append('<div class="alert alert-' + k + ' alert-dismissible"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + E + "</div>")
}
function addMessages(d, k) {
    for (var E in k)
        addMessage(d, k[E].type, k[E].text)
}
function searchAutocomplete(d, k, E, R, H, M, ja) {
    void 0 === ja && (ja = {});
    R && $(R).click(function(Ea) {
        $(k).val("");
        E && $(E).val("");
        M && M(Ea)
    });
    $(k).focusin(function() {}).focusout(function() {
        $(this).val() || ($(this).val(""),
        E && $(E).val(""))
    }).on("input", function() {
        E && $(E).val("")
    }).autocomplete({
        source: function(Ea, Fa) {
            ja.term = Ea.term;
            $.post(d, ja, null, "json").done(function(oa) {
                Fa(oa)
            })
        },
        select: function(Ea, Fa) {
            Fa && (E && $(E).val(Fa.item.id),
            H && H(Ea, Fa))
        },
        minLength: 3
    })
}
;function updateDatePackagePrice(d) {
    $.post("/update_date_package_price", {
        date_package_id: d
    }, null, "json").done(function(k) {
        $(".date-package-" + d + "-price-old").html(k.data.price_old);
        $(".date-package-" + d + "-price").html(k.data.price)
    }).fail(function() {}).always(function() {})
}
$(function() {
    $("a.all-dates-show").click(function(d) {
        d.preventDefault();
        d = $(this).parent();
        var k = d.parent();
        k.children(".first-dates").hide();
        k.children(".all-dates").show();
        d.find(".all-dates-show").hide();
        d.children(".all-dates-hide").show()
    });
    $("a.all-dates-hide").click(function(d) {
        d.preventDefault();
        d = $(this).parent();
        var k = d.parent();
        k.children(".all-dates").hide();
        k.children(".first-dates").show();
        d.children(".all-dates-hide").hide();
        d.children(".all-dates-show").show()
    })
});
function addBookingMessage(d, k, E) {
    void 0 === E && (E = "#messages");
    $(E).append('<div class="alert alert-' + d + '">' + k + '<span class="close"></span></div>')
}
function addBookingMessages(d, k) {
    if (d)
        for (i = 0; i < d.length; i++)
            addBookingMessage(d[i].type, d[i].text, k)
}
function clearBookingMessages(d) {
    void 0 === d && (d = "#messages");
    $(d).empty()
}
function bookingLoadDateTravellersSelect() {
    var d = $("#travel_package_select option:selected").val()
      , k = $("#travel_date_select option:selected").val()
      , E = $("#date_package_select option:selected").val()
      , R = $("#travellers_count_select option:selected").val();
    bookingTotalPriceLoadingStart();
    bookingDisableSubmitButton();
    $.post("/book/change-travellers-count", {
        session_key: $("#session_key").val(),
        travel_package_id: d,
        date_id: k,
        date_package_id: E,
        travellers_count: R
    }, null, "json").done(function(H) {
        addBookingMessages(H.messages);
        bookingUpdateTotalPrice(H.meta.total_price_text);
        H.meta.success ? ($("#travellers_count").html(H.content),
        bookingEnableSubmitButton(),
        $("#travellers_count_block").show()) : ($("#travellers_count").html(""),
        $("#travellers_count_block").hide(),
        bookingDisableSubmitButton())
    }).fail(function() {
        $("#travellers_count").html("");
        addBookingMessage("error", "Serverio klaida.");
        bookingDisableSubmitButton();
        $("#travellers_count_block").hide()
    }).always(function() {
        bookingTotalPriceLoadingEnd()
    })
}
function bookingRoomsRequest(d, k) {
    bookingTotalPriceLoadingStart();
    bookingDisableSubmitButton();
    $.post(d, k, null, "json").done(function(E) {
        addBookingMessages(E.messages);
        $("#rooms").html(E.content);
        bookingUpdateTotalPrice(E.meta.total_price_text);
        E.meta.success && bookingEnableSubmitButton()
    }).fail(function() {
        $("#rooms").html("");
        addBookingMessage("error", "Serverio klaida.")
    }).always(function() {
        bookingTotalPriceLoadingEnd()
    })
}
function bookingLoadHotelRooms() {
    var d = $("#travel_date_select option:selected").val()
      , k = $("#travel_hotel_select option:selected").val();
    bookingRoomsRequest("/book/rooms", {
        session_key: $("#session_key").val(),
        date_id: d,
        hotel_id: k
    })
}
function bookingAddHotelRoom(d, k) {
    bookingRoomsRequest("/book/add-room", {
        session_key: $("#session_key").val(),
        room_id: d,
        room_type_id: k
    })
}
function bookingChangeRoomAge(d, k) {
    bookingRoomsRequest("/book/change-room-bed-age", {
        session_key: $("#session_key").val(),
        room_num: d,
        bed_num: k,
        age: $("#room-" + d + "-bed-" + k + "-age").val()
    })
}
function bookingChangeRoomSubtype(d) {
    bookingRoomsRequest("/book/change-room-subtype", {
        session_key: $("#session_key").val(),
        room_num: d,
        subtype_id: $("#room-" + d + "-subtype").val()
    })
}
function bookingRemoveRoom(d) {
    bookingRoomsRequest("/book/remove-room", {
        session_key: $("#session_key").val(),
        room_num: d
    })
}
function bookingTotalPriceLoadingStart() {
    $("#booking_total_price_loading").show();
    $("#booking_total_price").hide();
    $("#booking_summary_total_price_loading").show();
    $("#booking_summary_total_price").hide()
}
function bookingTotalPriceLoadingEnd() {
    $("#booking_total_price_loading").hide();
    $("#booking_total_price").show();
    $("#booking_summary_total_price_loading").hide();
    $("#booking_summary_total_price").show()
}
function bookingUpdateTotalPrice(d) {
    $("#booking_total_price").text(d);
    $("#booking_summary_total_price").text(d)
}
function bookingDisableSubmitButton() {
    $("#go_next_button").prop("disabled", !0)
}
function bookingEnableSubmitButton() {
    $("#go_next_button").prop("disabled", !1)
}
function bookingFlightSummaryLoadingStart() {
    $("#flight_info_loading").show();
    $("#flight_info_details").hide()
}
function bookingFlightSummaryLoadingEnd() {
    $("#flight_info_loading").hide();
    $("#flight_info_details").show()
}
// function booking_go_back() {
//     $("#go_back_button").prop("disabled", !0);
//     $("#go_next_button").prop("disabled", !0);
//     $("#booking_form").append('<input type="hidden" name="go_back" value="1" />').submit()
// }
// function booking_go_next() {
//     $("#go_back_button").prop("disabled", !0);
//     $("#go_next_button").prop("disabled", !0);
//     $("#booking_form").append('<input type="hidden" name="go_next" value="1" />').submit()
// }
function booking_show_customer_form() {
    $.post("/book/customer-form", {
        session_key: $("#session_key").val()
    }, null, "json").done(function(d) {
        addBookingMessages(d.messages);
        $("#booking_customer_form").html(d.content).show();
        $("#first-traveller-email-asterisk").remove();
        $("#first-traveller-city-asterisk").remove()
    }).fail(function() {
        addBookingMessage("error", "Serverio klaida.")
    }).always(function() {});
    $("#booking_customer_form_show_button").fadeOut(300)
}
function editBooking() {}
function checkCoupon() {
    var d = $("#coupon_code").val();
    bookingTotalPriceLoadingStart();
    bookingDisableSubmitButton();
    $.post("/book/check-coupon", {
        session_key: $("#session_key").val(),
        coupon_code: d
    }, null, "json").done(function(k) {
        clearBookingMessages("#coupon-messages");
        addBookingMessages(k.messages, "#coupon-messages");
        bookingUpdateTotalPrice(k.data.total_price_text);
        "success" == k.status ? bookingEnableSubmitButton() : bookingDisableSubmitButton()
    }).fail(function() {
        clearBookingMessages("#coupon-messages");
        addBookingMessage("error", "Serverio klaida.", "#coupon-messages");
        bookingDisableSubmitButton()
    }).always(function() {
        bookingTotalPriceLoadingEnd()
    })
}
;var seat_back_y_position = 27
  , bus_plan_events = new function() {
    var d = {};
    this.on = function(k, E, R, H) {
        d[k] || (d[k] = []);
        d[k].push({
            callback: E,
            box_id: R,
            bus_plan_id: H
        })
    }
    ;
    this.triggerHandler = function(k, E, R, H, M) {
        if (d[k])
            for (i in d[k])
                void 0 === d[k][i].box_id && void 0 === d[k][i].bus_plan_id ? d[k][i].callback(E, R, H, M) : d[k][i].box_id === E && void 0 === d[k][i].bus_plan_id ? d[k][i].callback(E, R, H, M) : d[k][i].box_id === E && d[k][i].bus_plan_id === R && d[k][i].callback(E, R, H, M)
    }
    ;
    this.remove = function(k, E, R) {
        if (d[k])
            for (i in d[k])
                d[k][i].box_id === E && d[k][i].bus_plan_id === R && d[k].splice(i, 1)
    }
}
;
function bus_plan_onmousedown(d, k, E) {
    bus_plan_events.triggerHandler("onmousedown", d, k, E)
}
function bus_plan_onmouseup(d, k, E) {
    bus_plan_events.triggerHandler("onmouseup", d, k, E)
}
function bus_plan_onmouseover(d, k, E) {
    bus_plan_events.triggerHandler("onmouseover", d, k, E)
}
function bus_plan_onmouseout(d, k, E) {
    bus_plan_events.triggerHandler("onmouseout", d, k, E)
}
function bus_plan_get_seat_node(d, k, E) {
    return document.getElementById("box-" + d + "-busplan-" + k + "-seat-" + E)
}
function bus_plan_get_seat_back_node(d, k, E) {
    return document.getElementById("box-" + d + "-busplan-" + k + "-seat-" + E + "-back")
}
function bus_plan_get_svg_node(d, k) {
    return document.getElementById("box-" + d + "-busplan-" + k + "-svg")
}
function bus_plan_get_contour_path_node(d, k, E) {
    return void 0 === E ? document.getElementById("box-" + d + "-busplan-" + k + "-contour-path") : document.getElementById("box-" + d + "-busplan-" + k + "-deck-" + E + "-contour-path")
}
function bus_plan_get_loading_svg_node(d, k) {
    return document.getElementById("box-" + d + "-busplan-" + k + "-loading-svg")
}
function bus_plan_get_seat(d, k, E) {
    return document.getElementById("box-" + d + "-busplan-" + k + "-seat-" + E + "-seat")
}
function bus_plan_get_seat_text_node(d, k, E) {
    return document.getElementById("box-" + d + "-busplan-" + k + "-seat-" + E + "-text")
}
function bus_plan_get_row_text_node(d, k, E) {
    return document.getElementById("box-" + d + "-busplan-" + k + "-row-" + E + "-text")
}
function bus_plan_get_seat_status(d, k, E) {
    if (d = bus_plan_get_seat_node(d, k, E))
        return d.getAttribute("data_status")
}
function bus_plan_set_seat_status(d, k, E, R) {
    if (d = bus_plan_get_seat_node(d, k, E)) {
        if ((R ^ 0) === R)
            if (1 === R)
                R = "available";
            else if (2 === R)
                R = "used";
            else if (3 === R)
                R = "temporary-used";
            else if (4 === R || 5 === R)
                R = "reserved";
        d.setAttribute("data_status", R);
        R = "seat-button " + R;
        1 == d.getAttribute("data_active") && (R += " active");
        d.setAttribute("class", R)
    }
}
function bus_plan_seat_balloon_text(d, k, E, R) {
    $("#box-" + d + "-busplan-" + k + "-seat-" + E + "-balloon").html(R)
}
function bus_plan_is_seat_table(d, k, E) {
    if (d = bus_plan_get_seat_node(d, k, E))
        return 1 == d.getAttribute("data_is_table") ? !0 : !1
}
function bus_plan_set_seat_disabled(d, k, E) {
    bus_plan_set_seat_status(d, k, E, "disabled")
}
function bus_plan_hide_seat(d, k, E) {
    bus_plan_set_seat_status(d, k, E, "hidden")
}
function bus_plan_unhide_seat(d, k, E, R) {
    R ? bus_plan_set_seat_status(d, k, E, R) : bus_plan_set_seat_disabled(d, k, E)
}
function bus_plan_set_seat_available(d, k, E) {
    bus_plan_set_seat_status(d, k, E, "available")
}
function bus_plan_set_seat_selected(d, k, E) {
    bus_plan_set_seat_status(d, k, E, "selected")
}
function bus_plan_set_seat_used(d, k, E) {
    bus_plan_set_seat_status(d, k, E, "used")
}
function bus_plan_set_seat_temporary_used(d, k, E) {
    bus_plan_set_seat_status(d, k, E, "temporary-used")
}
function bus_plan_set_seat_reserved(d, k, E) {
    bus_plan_set_seat_status(d, k, E, "reserved")
}
function bus_plan_acivate_seat(d, k, E) {
    if (d = bus_plan_get_seat_node(d, k, E))
        d.setAttribute("data_active", 1),
        1 == d.getAttribute("data_is_table") ? d.setAttribute("class", "seat-table visible active") : d.setAttribute("class", "seat-button " + d.getAttribute("data_status") + " active")
}
function bus_plan_deacivate_seat(d, k, E) {
    if (d = bus_plan_get_seat_node(d, k, E))
        d.setAttribute("data_active", 0),
        1 == d.getAttribute("data_is_table") ? d.setAttribute("class", 1 == d.getAttribute("data_is_visible") ? "seat-table visible" : "seat-table") : d.setAttribute("class", "seat-button " + d.getAttribute("data_status"))
}
function bus_plan_flip_seat(d, k, E) {
    (d = bus_plan_get_seat_back_node(d, k, E)) && (0 == d.getAttribute("y") ? d.setAttribute("y", seat_back_y_position) : d.setAttribute("y", 0))
}
function bus_plan_show_table(d, k, E) {
    if (d = bus_plan_get_seat_node(d, k, E))
        d.setAttribute("class", "seat-table visible"),
        d.setAttribute("data_is_visible", 1)
}
function bus_plan_hide_table(d, k, E) {
    if (d = bus_plan_get_seat_node(d, k, E))
        d.setAttribute("class", "seat-table"),
        d.setAttribute("data_is_visible", 0)
}
function bus_plan_remove_seat(d, k, E) {
    var R = bus_plan_get_svg_node(d, k);
    d = bus_plan_get_seat_node(d, k, E);
    R && d && R.removeChild(d)
}
function bus_plan_remove_row_text(d, k, E) {
    var R = bus_plan_get_svg_node(d, k);
    d = bus_plan_get_row_text_node(d, k, E);
    R && d && R.removeChild(d)
}
function bus_plan_get_bus_num(d, k) {
    return $("#box-" + d + "-busplan-" + k + "-svg").attr("data_bus_num")
}
function bus_plan_set_seat_text(d, k, E, R) {
    if (d = bus_plan_get_seat_text_node(d, k, E))
        d.textContent = R
}
function bus_plan_update_height(d, k, E) {
    var R = bus_plan_get_svg_node(d, k);
    if (R && 17 > E) {
        for (var H = E + 1; 17 >= H; H++) {
            var M = bus_plan_get_row_text_node(d, k, H);
            M && R.removeChild(M)
        }
        (M = bus_plan_get_contour_path_node(d, k)) ? (H = 35 + 41 * E,
        M.setAttribute("d", "M 32 35 v " + H + " h 186 v -" + H + " c 0 -30, -186 -30, -186 0 Z")) : (H = 41 * E,
        (M = bus_plan_get_contour_path_node(d, k, 1)) && M.setAttribute("d", "M 32 70 v " + H + " h 186 v -" + H + " c 0 -30, -186 -30, -186 0 Z"),
        (d = bus_plan_get_contour_path_node(d, k, 2)) && d.setAttribute("d", "M 278 70 v " + H + " h 186 v -" + H + " c 0 -30, -186 -30, -186 0 Z"));
        R.setAttribute("height", 41 * E + 90)
    }
}
function bus_plan_show(d, k) {
    (d = bus_plan_get_svg_node(d, k)) && d.setAttribute("style", "display: block;")
}
;function initPhotoswipeGalleryById(d) {
    $(".gallery-" + d + "-image-thumb").click(function(k) {
        k.preventDefault();
        openPhotoSwipeGallery($(this).data("gallery-id"), $(this).data("image-num"))
    })
}
region_block = document.getElementById("region-block");
city_block = document.getElementById("city-block");
city_object_block = document.getElementById("city-object-block");
transport_block = document.getElementById("transport-block");
activeTransport = activeRestaurant = activeLandmark = activeEntertainment = activeHotel = activeCity = activeRegion = null;
calendar_date_selection = document.getElementById("calendar-date-selection");
number_of_days_selection = document.getElementById("number-of-days-selection");
input_date_from = document.getElementById("input-date-from");
input_date_to = document.getElementById("input-date-to");
input_number_of_days = document.getElementById("input-number-of-days");
$("#input-date-from").datepicker({
    onSelect: function() {
        if (!calendar_date_selection.classList.contains("collapsed")) {
            showLoadingScreen(!0);
            var d = $(this).val()
              , k = $("#input-date-to").val();
            Date.parse(d) && Date.parse(k) ? (post_data = {
                date_from: d,
                date_to: k
            },
            $.post(get_url("susidek-kelione/basket-select-date"), post_data, function(E) {
                $("#basket-date").html("<small>nuo</small> " + E.data.datefrom + " <small>iki</small> " + E.data.dateto);
                toggle("basket-date-block", !0);
                toggle("basket-number-of-days-block", !1);
                clearValues("input-number-of-days");
                showLoadingScreen(!1);
                $("#basket-total-price").html(E.data.totalprice + " \u20ac")
            }, "json")) : showLoadingScreen(!1)
        }
    }
});
$("#input-date-to").datepicker({
    onSelect: function() {
        if (!calendar_date_selection.classList.contains("collapsed")) {
            showLoadingScreen(!0);
            var d = $("#input-date-from").val()
              , k = $(this).val();
            Date.parse(d) && Date.parse(k) ? (post_data = {
                date_from: d,
                date_to: k
            },
            $.post(get_url("susidek-kelione/basket-select-date"), post_data, function(E) {
                $("#basket-date").html("<small>nuo</small> " + E.data.datefrom + " <small>iki</small> " + E.data.dateto);
                toggle("basket-date-block", !0);
                toggle("basket-number-of-days-block", !1);
                clearValues("input-number-of-days");
                showLoadingScreen(!1);
                $("#basket-total-price").html(E.data.totalprice + " \u20ac")
            }, "json")) : showLoadingScreen(!1)
        }
    }
});
$("#input-number-of-days").on("change", function() {
    if (!number_of_days_selection.classList.contains("collapsed")) {
        showLoadingScreen(!0);
        var d = $(this).val();
        isNumeric(d) ? (post_data = {
            number_of_days: d
        },
        $.post(get_url("susidek-kelione/basket-select-date"), post_data, function(k) {
            $("#basket-number-of-days").html(k.data.numberofdays);
            toggle("basket-number-of-days-block", !0);
            toggle("basket-date-block", !1);
            clearValues("input-date-from");
            clearValues("input-date-to");
            showLoadingScreen(!1);
            $("#basket-total-price").html(k.data.totalprice + " \u20ac")
        }, "json")) : showLoadingScreen(!1)
    }
});
$(".traveller-field").on("input", function() {
    travellerFieldEvent()
});
$(".traveller-field").on("select", function() {
    travellerFieldEvent()
});
$("#child-ages").on("input", "select", function() {
    travellerFieldEvent()
});
function travellerFieldEvent() {
    showLoadingScreen(!0);
    var d = $("#adult-number").val();
    isNumeric(d) || (d = 0);
    var k = $("#child-number").val();
    isNumeric(k) || (k = 0);
    var E = []
      , R = !1;
    for (let H = 0; H < k; H++)
        isNumeric($("#child" + H).val()) ? E.push($("#child" + H).val()) : R = !0;
    R ? showLoadingScreen(!1) : (post_data = {
        number_of_adults: d,
        number_of_children: k,
        children: E
    },
    $.post(get_url("susidek-kelione/basket-select-travellers"), post_data, function(H) {
        0 < H.data.numberofadults ? ($("#basket-adult-number").html(H.data.numberofadults),
        toggle("basket-adult-number-block", !0)) : ($("#basket-adult-number").html(H.data.numberofadults),
        toggle("basket-adult-number-block", !1));
        0 < H.data.numberofchildren ? ($("#basket-child-number").html(H.data.numberofchildren),
        loadChildrenToBasket(H.data.children),
        toggle("basket-child-number-block", !0)) : ($("#basket-child-number").html(H.data.numberofchildren),
        toggle("basket-child-number-block", !1));
        $("#basket-total-price").html(H.data.totalprice + " \u20ac");
        showLoadingScreen(!1)
    }, "json"))
}
function loadChildrenToBasket(d=[]) {
    var k = "";
    for (let E = 0; E < d.length; E++)
        k = 0 == E ? d[E] : k + ", " + d[E];
    $("#basket-children").html(k)
}
function createChild(d, k=null) {
    let E = document.createElement("div");
    E.classList.add("col-3");
    E.classList.add("form-group");
    E.classList.add("mb-4");
    let R = document.createElement("select");
    R.setAttribute("id", "child" + d);
    R.classList.add("form-control");
    R.classList.add("traveller-field");
    R.classList.add("text-center");
    for (d = 0; 18 > d; d++) {
        var H = document.createElement("option");
        H.value = d;
        H.text = d;
        R.appendChild(H)
    }
    if (k)
        for (d = 0; d < R.length; d++)
            H = R.options[d],
            H.value == k && H.setAttribute("selected", !0);
    else
        H = document.createElement("option"),
        H.value = "\u012evest",
        H.text = "\u012eveskite am\u017ei\u0173",
        H.setAttribute("disabled", !0),
        H.setAttribute("selected", !0),
        R.insertBefore(H, R.firstChild);
    E.appendChild(R);
    return E
}
$("#child-number").on("input", function() {
    numberOfChildren = $("#child-ages .form-control").length;
    if ($(this).val() > numberOfChildren && 50 >= $(this).val()) {
        child_ages = document.getElementById("child-ages");
        child_block = document.getElementById("children-block");
        for (var d = numberOfChildren; d < $(this).val(); d++)
            child_ages.appendChild(createChild(d))
    } else if ($(this).val() < numberOfChildren && 0 <= $(this).val())
        for (d = $(this).val(); d < numberOfChildren; d++)
            child_ages.removeChild(child_ages.lastChild);
    child_block.classList.contains("hidden") && 0 < $(this).val() && child_block.classList.remove("hidden");
    0 != $(this).val() || child_block.classList.contains("hidden") || child_block.classList.add("hidden")
});
function toggleRegion(d) {
    post_data = {
        region_id: d
    };
    $("#region-block-inner").load(get_url("susidek-kelione/load-region"), post_data);
    region_block.classList.contains("hidden") ? toggle("region-block", !0, "region-block") : activeRegion == d ? (toggle("region-block", !1, "region-select-block"),
    activeHotel = activeCity = activeRegion = null) : scrollToElement("region-block");
    city_block.classList.contains("hidden") || toggle("city-block", !1);
    city_object_block.classList.contains("hidden") || toggle("city-object-block", !1);
    activeRegion = d
}
function toggleCity(d) {
    post_data = {
        city_id: d
    };
    $("#city-block-inner").load(get_url("susidek-kelione/load-city"), post_data);
    city_block.classList.contains("hidden") ? (toggle("city-block", !0, "city-block"),
    activeCity = d) : activeCity == d ? (toggle("city-block", !1, "region-block"),
    activeCity = null) : scrollToElement("city-block");
    city_object_block.classList.contains("hidden") || toggle("city-object-block", !1)
}
function toggleHotel(d) {
    post_data = {
        hotel_id: d
    };
    city_object_block.classList.contains("hidden") ? ($("#city-object-block-inner").load(get_url("susidek-kelione/load-hotel"), post_data),
    toggle("city-object-block", !0, "city-object-block"),
    activeHotel = d,
    activesRestaurant = activeLandmark = activeEntertainment = null) : activeHotel == d ? (toggle("city-object-block", !1, "city-block"),
    activeHotel = null) : ($("#city-object-block-inner").load(get_url("susidek-kelione/load-hotel"), post_data),
    scrollToElement("city-object-block"))
}
function toggleLandmark(d) {
    post_data = {
        landmark_id: d
    };
    city_object_block.classList.contains("hidden") ? ($("#city-object-block-inner").load(get_url("susidek-kelione/load-landmark"), post_data),
    toggle("city-object-block", !0, "city-object-block"),
    activeEntertainment = activeHotel = null,
    activeLandmark = d,
    activesRestaurant = null) : activeLandmark == d ? (toggle("city-object-block", !1, "city-block"),
    activeLandmark = null) : ($("#city-object-block-inner").load(get_url("susidek-kelione/load-landmark"), post_data),
    scrollToElement("city-object-block"))
}
function toggleRestaurant(d) {
    post_data = {
        restaurant_id: d
    };
    city_object_block.classList.contains("hidden") ? ($("#city-object-block-inner").load(get_url("susidek-kelione/load-restaurant"), post_data),
    toggle("city-object-block", !0, "city-object-block"),
    activeLandmark = activeEntertainment = activeHotel = null,
    activeRestaurant = d) : activeRestaurant == d ? (toggle("city-object-block", !1, "city-block"),
    activeRestaurant = null) : ($("#city-object-block-inner").load(get_url("susidek-kelione/load-restaurant"), post_data),
    scrollToElement("city-object-block"))
}
function toggleEntertainment(d) {
    post_data = {
        entertainment_id: d
    };
    city_object_block.classList.contains("hidden") ? ($("#city-object-block-inner").load(get_url("susidek-kelione/load-entertainment"), post_data),
    toggle("city-object-block", !0, "city-object-block"),
    activeHotel = null,
    activeEntertainment = d,
    activeRestaurant = activeLandmark = null) : activeEntertainment == d ? (toggle("city-object-block", !1, "city-block"),
    activeEntertainment = null) : ($("#city-object-block-inner").load(get_url("susidek-kelione/load-entertainment"), post_data),
    scrollToElement("city-object-block"))
}
function toggleTransport(d) {
    post_data = {
        transport_id: d
    };
    transport_block.classList.contains("hidden") ? ($("#transport-block-inner").load(get_url("susidek-kelione/load-transport"), post_data),
    toggle("transport-block", !0, "transport-block"),
    activeTransport = d) : activeTransport == d ? (toggle("transport-block", !1, "transport-select-block"),
    activeTransport = null) : ($("#transport-block-inner").load(get_url("susidek-kelione/load-transport"), post_data),
    scrollToElement("transport-block"))
}
function clearValues(d) {
    document.getElementById(d).value = document.getElementById(d).placeholder
}
function isNumeric(d) {
    return "string" != typeof d ? !1 : !isNaN(d) && !isNaN(parseFloat(d))
}
function toggle(d, k, E) {
    k ? document.getElementById(d).classList.remove("hidden") : document.getElementById(d).classList.add("hidden");
    E && scrollToElement(E)
}
function scrollToElement(d) {
    document.getElementById(d).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
    })
}
function showLoadingScreen(d) {
    d ? document.getElementById("loading-screen").classList.remove("hidden") : document.getElementById("loading-screen").classList.add("hidden")
}
function toggleChildren(d, k) {
    switch (d) {
    case "region":
        toggle("city-block", k);
        toggle("city-object-block", k);
        break;
    case "city":
        toggle("city-object-block", k)
    }
}
function addHotelToBuilderBasket(d, k, E=!1) {
    showLoadingScreen(!0);
    post_data = {
        hotel_id: d,
        amount: k
    };
    basket_add_buttons = document.getElementsByClassName("basket-add-button");
    $.post(get_url("susidek-kelione/basket-add-item"), post_data, function(R) {
        document.getElementById("hotel-" + d) && removeElement("hotel-" + d);
        $("#basket-item-block").prepend(R.content);
        $("#basket-total-price").html(R.data.totalprice + " \u20ac");
        E || toggle("city-object-block", !1, "city-block");
        showLoadingScreen(!1);
        R.messages && createMessages(R.messages)
    }, "json")
}
function addLandmarkToBuilderBasket(d, k, E=!1) {
    showLoadingScreen(!0);
    basket_add_buttons = document.getElementsByClassName("basket-add-button");
    post_data = {
        landmark_id: d,
        amount: k
    };
    $.post(get_url("susidek-kelione/basket-add-item"), post_data, function(R) {
        document.getElementById("landmark-" + d) && removeElement("landmark-" + d);
        $("#basket-item-block").prepend(R.content);
        $("#basket-total-price").html(R.data.totalprice + " \u20ac");
        E || toggle("city-object-block", !1, "city-block");
        showLoadingScreen(!1);
        R.messages && createMessages(R.messages)
    }, "json")
}
function addEntertainmentToBuilderBasket(d, k, E=!1) {
    showLoadingScreen(!0);
    basket_add_buttons = document.getElementsByClassName("basket-add-button");
    post_data = {
        entertainment_id: d,
        amount: k
    };
    $.post(get_url("susidek-kelione/basket-add-item"), post_data, function(R) {
        document.getElementById("entertainment-" + d) && removeElement("entertainment-" + d);
        $("#basket-item-block").prepend(R.content);
        $("#basket-total-price").html(R.data.totalprice + " \u20ac");
        E || toggle("city-object-block", !1, "city-block");
        showLoadingScreen(!1);
        R.messages && createMessages(R.messages)
    }, "json")
}
function addRestaurantToBuilderBasket(d, k, E=!1) {
    showLoadingScreen(!0);
    basket_add_buttons = document.getElementsByClassName("basket-add-button");
    post_data = {
        restaurant_id: d,
        amount: k
    };
    $.post(get_url("susidek-kelione/basket-add-item"), post_data, function(R) {
        document.getElementById("restaurant-" + d) && removeElement("restaurant-" + d);
        $("#basket-item-block").prepend(R.content);
        $("#basket-total-price").html(R.data.totalprice + " \u20ac");
        E || toggle("city-object-block", !1, "city-block");
        showLoadingScreen(!1);
        R.messages && createMessages(R.messages)
    }, "json")
}
function addTransportToBuilderBasket(d, k) {
    showLoadingScreen(!0);
    basket_add_buttons = document.getElementsByClassName("basket-add-button");
    post_data = {
        transport_id: d,
        amount: k
    };
    $.post(get_url("susidek-kelione/basket-add-item"), post_data, function(E) {
        document.getElementById("transport-" + d) && removeElement("transport-" + d);
        $("#basket-item-block").prepend(E.content);
        $("#basket-total-price").html(E.data.totalprice + " \u20ac");
        showLoadingScreen(!1);
        E.messages && createMessages(E.messages)
    }, "json")
}
function removeItemFromBuilderBasket(d) {
    showLoadingScreen(!0);
    post_data = {
        id: d
    };
    $.post(get_url("susidek-kelione/basket-remove-item"), post_data, function(k) {
        disableBasketItem(d);
        $("#basket-total-price").html(k.data.totalprice + " \u20ac");
        showLoadingScreen(!1);
        k.messages && createMessages(k.messages)
    }, "json")
}
function removeElement(d) {
    d = document.getElementById(d);
    d.parentNode.removeChild(d)
}
function disableBasketItem(d) {
    var k = document.getElementById(d);
    k.firstElementChild.classList.add("background-yellow");
    var E = k.getElementsByClassName("btn-remove-from-basket")[0];
    E.classList.add("green");
    E.getElementsByTagName("i")[0].classList.replace("fa-trash-alt", "fa-plus-circle");
    var R = k.getElementsByClassName("hotel-amount")[0].innerHTML;
    R = R.replace("x", "");
    var H = d.split("-");
    switch (H[0]) {
    case "hotel":
        E.onclick = function() {
            addHotelToBuilderBasket(H[1], R, !0)
        }
        ;
        break;
    case "landmark":
        E.onclick = function() {
            addLandmarkToBuilderBasket(H[1], R, !0)
        }
        ;
        break;
    case "entertainment":
        E.onclick = function() {
            addEntertainmentToBuilderBasket(H[1], R, !0)
        }
        ;
        break;
    case "restaurant":
        E.onclick = function() {
            addRestaurantToBuilderBasket(H[1], R, !0)
        }
        ;
        break;
    case "transport":
        E.onclick = function() {
            addTransportToBuilderBasket(H[1], R, !0)
        }
    }
}
function createMessages(d) {
    for (let k = 0; k < d.length; k++)
        createMessage(d[k])
}
function createMessage(d) {
    let k = document.createElement("div");
    k.classList.add("alert");
    switch (d.type) {
    case "success":
        k.classList.add("alert-success");
        break;
    case "warning":
        k.classList.add("alert-warning");
        break;
    case "error":
        k.classList.add("alert-error");
        break;
    default:
        k.classList.add("alert-warning")
    }
    k.classList.add("alert-dismissible");
    k.innerHTML = d.text;
    d = document.createElement("button");
    d.classList.add("close");
    d.setAttribute("type", "button");
    d.setAttribute("aria-label", "Close");
    d.addEventListener("click", function() {
        k.classList.add("hidden")
    });
    let E = document.createElement("span");
    E.setAttribute("aria-hidden", "true");
    E.innerHTML = "x";
    d.appendChild(E);
    k.appendChild(d);
    el = document.getElementById("message-area");
    el.appendChild(k);
    setTimeout(function() {
        fadeOut(k, 2E3);
        setTimeout(function() {
            el.removeChild(k)
        }, 2E3)
    }, 1E4)
}
function fadeOut(d, k) {
    if (d)
        if (k)
            var E = 1
              , R = setInterval(function() {
                E -= 50 / k;
                0 >= E && (clearInterval(R),
                E = 0,
                d.style.display = "none",
                d.style.visibility = "hidden");
                d.style.opacity = E;
                d.style.filter = "alpha(opacity=" + 100 * E + ")"
            }, 50);
        else
            d.style.opacity = 0,
            d.style.filter = "alpha(opacity=0)",
            d.style.display = "none",
            d.style.visibility = "hidden"
}
function loadSession() {
    $.post(get_url("susidek-kelione/load-session"), null, function(d) {
        $("#basket-item-block").prepend(d.content);
        null != d.data.totalprice ? $("#basket-total-price").html(d.data.totalprice + " \u20ac") : $("#basket-total-price").html("0 \u20ac");
        null != d.data.date ? (document.getElementById("collapse-11").classList.add("show"),
        document.getElementById("input-date-from").value = d.data.date.datefrom,
        document.getElementById("input-date-to").value = d.data.date.dateto,
        $("#basket-date").html("<small>nuo</small> " + d.data.date.datefrom + " <small>iki</small> " + d.data.date.dateto),
        toggle("basket-date-block", !0)) : document.getElementById("calendar-date-selection").classList.add("collapsed");
        null != d.data.numberofdays ? (document.getElementById("collapse-12").classList.add("show"),
        document.getElementById("input-number-of-days").value = d.data.numberofdays,
        $("#basket-number-of-days").html(d.data.numberofdays),
        toggle("basket-number-of-days-block", !0)) : document.getElementById("number-of-days-selection").classList.add("collapsed");
        d.data.numberofadults && (document.getElementById("adult-number").value = d.data.numberofadults,
        $("#basket-adult-number").html(d.data.numberofadults),
        toggle("basket-adult-number-block", !0));
        if (d.data.children) {
            document.getElementById("child-number").value = d.data.numberofchildren;
            child_ages = document.getElementById("child-ages");
            child_block = document.getElementById("children-block");
            for (let k = 0; k < d.data.children.length; k++)
                child_ages.appendChild(createChild(k, d.data.children[k]));
            child_block.classList.remove("hidden");
            loadChildrenToBasket(d.data.children);
            $("#basket-child-number").html(d.data.numberofchildren);
            toggle("basket-child-number-block", !0)
        }
        showLoadingScreen(!1)
    }, "json")
}
$("#builder-booking-form").submit(function(d) {
    d.preventDefault();
    showLoadingScreen(!0);
    d = d.target;
    $.post($(d).attr("action"), {
        form: $(d).serialize()
    }, null, "json").done(function(k) {
        k.messages && createMessages(k.messages)
    }).fail(function() {}).always(function() {
        showLoadingScreen(!1)
    })
});
function get_url(d) {
    return base_url + "/" + d
}
function init_google_map() {
    "undefined" != typeof init_contacts_map && init_contacts_map()
}
function initRequestForm() {
    $(".request-form").submit(function(d) {
        d.preventDefault();
        var k = d.target;
        $(k).find(".request-form-loading").show();
        $(k).find(".request-form-send").prop("disabled", !0);
        $(k).find(".request-form-messages").empty().show();
        $.post($(k).attr("action"), {
            form: $(k).serialize()
        }, null, "json").done(function(E) {
            "success" != E.status && $(k).find(".request-form-send").prop("disabled", !1);
            addMessage($(k).find(".request-form-messages"), E.status, E.message)
        }).fail(function() {
            addMessage($(k).find(".request-form-messages"), "danger", "Nepavyko i\u0161si\u0173sti. Bandykite dar kart\u0105.");
            $(k).find(".request-form-send").prop("disabled", !1)
        }).always(function() {
            $(k).find(".request-form-loading").hide()
        })
    })
}
function addWatchedTravelCookie(d, k) {
    var E = Cookies.getJSON("watched_travels");
    void 0 === E && (E = []);
    for (var R = 0; R < E.length; R++)
        d && E[R].travel_id == d && E.splice(R, 1);
    E.unshift({
        travel_id: d,
        travel_date_id: k,
        watched: (new Date).toLocaleString()
    });
    E.length > watched_travels_max + 1 && E.pop();
    Cookies.set("watched_travels", E, {
        expires: 7,
        path: "/"
    })
}
var galleries = [];
function openPhotoSwipeGallery(d, k) {
    d && 0 <= k && galleries && void 0 !== galleries[d] && (new PhotoSwipe(document.querySelectorAll(".pswp")[0],PhotoSwipeUI_Default,galleries[d],{
        history: !1,
        index: k
    })).init()
}
function initPhotoswipeGallery() {
    $(".image-thumb").click(function(d) {
        d.preventDefault();
        openPhotoSwipeGallery($(this).data("gallery-id"), $(this).data("image-num"))
    })
}
function initMobileMenu() {
    $(".mobile-menu-button").click(function(d) {
        d = $(this).attr("data-target") || $(this).attr("href");
        $(this).hasClass("opened") ? ($(this).removeClass("opened"),
        $("body").css("overflow", "auto"),
        $(d).hide()) : ($(".mobile-menu-block").hide(),
        $(".mobile-menu-button").removeClass("opened"),
        $("body").css("overflow", "hidden"),
        $(this).addClass("opened"),
        $(d).show());
        return !1
    });
    $(".mobile-menu ul.menu li.menu-item-has-children a").click(function(d) {
        $(this).hasClass("collapsed") ? $(this).parent().addClass("open") : $(this).parent().removeClass("open")
    })
}
function initSearchForm() {
    $("#main-menu-search-button").click(function(d) {
        d = $(this).attr("data-target") || $(this).attr("href");
        $(this).hasClass("opened") ? ($(this).removeClass("opened"),
        $(d).slideUp()) : ($(this).addClass("opened"),
        $(d).slideDown());
        return !1
    });
    searchAutocomplete("/search_autocomplete", ".search-term", ".search-id", null, function(d, k) {
        k && k.item.url && ($(".search-submit-button").prop("disabled", !0),
        location.href = k.item.url)
    });
    $(".search-date-from").datepicker({
        dateFormat: "yy-mm-dd",
        changeMonth: !1,
        numberOfMonths: 1,
        changeYear: !1,
        minDate: 0,
        onClose: function(d) {
            $(".search-date-to").datepicker("option", "minDate", d)
        }
    });
    $(".search-date-to").datepicker({
        dateFormat: "yy-mm-dd",
        changeMonth: !1,
        numberOfMonths: 1,
        changeYear: !1,
        minDate: 0
    });
    $(".search-price-slider").each(function() {
        var d = this;
        $(d).find(".slider-range").slider({
            range: !0,
            min: $(d).data("min"),
            max: $(d).data("max"),
            step: $(d).data("step"),
            values: [$(d).find(".search-price-min").val(), $(d).find(".search-price-max").val()],
            slide: function(k, E) {
                $(d).find(".min-value").text(E.values[0] + " \u20ac");
                $(d).find(".max-value").text(E.values[1] + " \u20ac")
            },
            stop: function(k, E) {
                $(d).find(".search-price-min").val(E.values[0]);
                $(d).find(".search-price-max").val(E.values[1])
            }
        });
        $(d).find(".min-value").appendTo($(d).find(".ui-slider-handle").first());
        $(d).find(".max-value").appendTo($(d).find(".ui-slider-handle").last())
    });
    $(".search-form").submit(function() {
        var d = $(this).find(".travel-group-input")
          , k = d.length
          , E = "";
        for (i = 0; i < k; i++)
            d[i].checked && (E = E ? E + ("-" + d[i].value) : E + d[i].value);
        E && $(this).append('<input type="hidden" name="tg" value="' + E + '"/>');
        return !0
    })
}
function initFilterForm() {
    $("#filter-form input.filter-country-checkbox").change(function() {
        $("#filter-form").submit()
    });
    $("#filter-country-select").change(function() {
        "" == $(this).val() && $(this).remove();
        $("#filter-form").submit()
    });
    $("#filter-date-from").datepicker({
        dateFormat: "yy-mm-dd",
        changeMonth: !1,
        numberOfMonths: 1,
        changeYear: !1,
        minDate: 0,
        onClose: function(k) {
            $("#filter-form").submit()
        }
    });
    $("#filter-date-to").datepicker({
        dateFormat: "yy-mm-dd",
        changeMonth: !1,
        numberOfMonths: 1,
        changeYear: !1,
        minDate: $("#filter-date-from").val(),
        onClose: function(k) {
            $("#filter-form").submit()
        }
    });
    var d = $("#filter-price-slider");
    $(d).find(".slider-range").slider({
        range: !0,
        min: $(d).data("min"),
        max: $(d).data("max"),
        step: $(d).data("step"),
        values: [$(d).find("#filter-price-min").val(), $(d).find("#filter-price-max").val()],
        slide: function(k, E) {
            $(d).find(".min-value").text(E.values[0] + " \u20ac");
            $(d).find(".max-value").text(E.values[1] + " \u20ac")
        },
        stop: function(k, E) {
            $(d).find("#filter-price-min").val(E.values[0]);
            $(d).find("#filter-price-max").val(E.values[1]);
            $("#filter-form").submit()
        }
    });
    $(d).find(".min-value").appendTo($(d).find(".ui-slider-handle").first()).show();
    $(d).find(".max-value").appendTo($(d).find(".ui-slider-handle").last()).show();
    $("#filter-form").submit(function() {
        var k = $("#filter-form input.filter-country-checkbox:checked").serializeArray();
        if (0 < k.length) {
            for (var E = [], R = 0; R < k.length; R++)
                E[R] = k[R].value;
            $('#filter-form input[name="ctmp"]').remove();
            $('#filter-form input[name="c"]').val(E.join("-"))
        } else
            $('#filter-form input[name="ctmp"]').remove(),
            $('#filter-form input[name="c"]').remove();
        "" == $("#filter-date-from").val() && $("#filter-date-from").remove();
        "" == $("#filter-date-to").val() && $("#filter-date-to").remove();
        k = parseInt($("#filter-price-min").val());
        E = parseInt($("#filter-price-max").val());
        R = parseInt($(d).data("max"));
        0 == k && $("#filter-price-min").remove();
        0 != E && E != R || $("#filter-price-max").remove();
        sessionStorage.setItem("keep_scroll_position", window.scrollY);
        return !0
    })
}
function initSelectOnlyOneCheckboxButton() {
    $('input[type="checkbox"].select-only-one').change(function() {
        $(this).is(":checked") && ($("input[name='" + $(this).attr("name") + "']").prop("checked", !1),
        $(this).prop("checked", !0))
    })
}
function initStickyHeader() {
    var d = $(".navbar-sticky");
    $(window).scroll(function() {
        992 <= $(document).width() && (400 < $(document).scrollTop() ? d.hasClass("navbar-sticky-on") || ($(".sticky-space").css({
            height: d.height() + "px"
        }).show(),
        d.addClass("navbar-sticky-on")) : d.hasClass("navbar-sticky-on") && ($(".sticky-space").hide(),
        d.removeClass("navbar-sticky-on")))
    })
}
function initTravelsSlider() {
    new Swiper(".travels-slider",{
        slidesPerView: 3,
        loop: !0,
        roundLengths: !0,
        breakpoints: {
            1200: {
                slidesPerView: 3
            },
            991: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 1
            }
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: !0,
            dynamicBullets: !0
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    })
}
function initCountriesSlider() {
    new Swiper(".countries-slider",{
        slidesPerView: 4,
        loop: !0,
        roundLengths: !0,
        breakpoints: {
            1200: {
                slidesPerView: 4
            },
            991: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 2
            },
            576: {
                slidesPerView: 1
            }
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: !0,
            dynamicBullets: !0
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    })
}
function show_travel_tab(d) {
    $('#travel-main-tabs a[href="' + d + '"]').tab("show")
}
function load_more_reviews(d) {
    $("#more-reviews-button").prop("disabled", !0);
    $("#more-reviews-button-icon").removeClass("fa-chevron-down").addClass("fa-refresh fa-spin");
    $.post("/more-reviews?travel_id=" + d + "&offset=" + total_reviews_loaded, null, null, "json").done(function(k) {
        total_reviews_loaded += k.data.reviews_count;
        k.data.is_more && $("#more-reviews-button").prop("disabled", !1);
        $("#reviews-list").append(k.content)
    }).fail(function() {
        $("#more-reviews-button").prop("disabled", !1)
    }).always(function() {
        $("#more-reviews-button-icon").removeClass("fa-refresh fa-spin").addClass("fa-chevron-down")
    })
}
function initReviewWriteForm() {
    $(".rating-button").on("click", function(d) {
        d = $(this).data("criterion-id");
        var k = $("#criterion-" + d + "-rating-input").val()
          , E = $(this).data("stars");
        $("#criterion-" + d + "-rating-input").val(E);
        $("#criterion-" + d + "-rating").html(E);
        for (i = 1; i <= E; ++i)
            $("#criterion-" + d + "-star-" + i).toggleClass("active");
        for (ix = 1; ix <= k; ++ix)
            $("#criterion-" + d + "-star-" + ix).toggleClass("active")
    });
    $("#review-form").submit(function(d) {
        d.preventDefault();
        $("#review-save-button").prop("disabled", !0);
        $("#review-messages").empty();
        d = {};
        d.form = $("#review-form").serialize();
        $("#review-form-loading").show();
        $.post("/save-review", d, null, "json").done(function(k) {
            $("#review-form-loading").hide();
            "error" == k.status && $("#review-save-button").prop("disabled", !1);
            addMessages("#review-messages", k.messages)
        }).fail(function() {
            addMessage("#review-messages", "danger", "Nepavyko i\u0161si\u0173sti J\u016bs\u0173 atsiliepimo. Bandykite dar kart\u0105.");
            $("#review-save-button").prop("disabled", !1)
        }).always(function() {
            $("#review-form-loading").hide()
        })
    })
}
function keepScrollPosition() {
    var d = sessionStorage.getItem("keep_scroll_position");
    d && (sessionStorage.removeItem("keep_scroll_position"),
    window.scrollTo(0, d))
}
function createChild(d, k=null) {
    let E = document.createElement("div");
    E.classList.add("col-4");
    E.classList.add("mb-3");
    let R = document.createElement("div");
    R.classList.add("form-group");
    R.classList.add("position-relative");
    let H = document.createElement("select");
    H.setAttribute("id", "child" + d);
    H.setAttribute("name", "child[" + d + "]");
    H.classList.add("form-control");
    for (d = 0; 18 > d; d++) {
        var M = document.createElement("option");
        M.value = d;
        M.text = d;
        H.appendChild(M)
    }
    if (k)
        for (d = 0; d < H.length; d++)
            M = H.options[d],
            M.value == k && M.setAttribute("selected", !0);
    else
        M = document.createElement("option"),
        M.value = "?",
        M.text = "?",
        M.setAttribute("disabled", !0),
        M.setAttribute("selected", !0),
        H.insertBefore(M, H.firstChild);
    R.appendChild(H);
    E.appendChild(R);
    return E
}
$(function() {
    console.log("%cKELIONI\u0172 LAIKAS %cKELIONI\u0172 ORGANIZATORIUS", "color: #08622b; font-family: sans-serif; font-size: 4em; font-weight: bold; font-style: italic;", "color: #08622b; font-family: sans-serif; font-size: 1.5em; font-weight: bold;");
    keepScrollPosition();
    initMobileMenu();
    initSearchForm();
    initFilterForm();
    initSelectOnlyOneCheckboxButton();
    initStickyHeader();
    initPhotoswipeGallery();
    initTravelsSlider();
    initCountriesSlider();
    initRequestForm()
});
