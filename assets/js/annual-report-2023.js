function toggleStickyTitle() {
    document.querySelectorAll(".gl-section-title").forEach(e=>{
        var t = e.parentElement
          , n = e.classList.contains("fixed-title");
        gsap.to(e, {
            scrollTrigger: {
                trigger: t,
                start: "top top",
                end: "bottom center",
                pin: n,
                pinSpacing: !1,
                toggleClass: "fixed-title"
            }
        })
    }
    )
}
!function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.AOS = t() : e.AOS = t()
}(this, function() {
    return r = [function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function i() {
            h = (0,
            f.default)(),
            y()
        }
        var a = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n, r = arguments[t];
                for (n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        }
          , s = (r(n(1)),
        n(6))
          , o = r(s)
          , l = r(n(7))
          , c = r(n(8))
          , u = r(n(9))
          , d = r(n(10))
          , p = r(n(11))
          , f = r(n(14))
          , h = []
          , m = !1
          , g = document.all && !window.atob
          , v = {
            offset: 120,
            delay: 0,
            easing: "ease",
            duration: 400,
            disable: !1,
            once: !1,
            startEvent: "DOMContentLoaded",
            throttleDelay: 99,
            debounceDelay: 50,
            disableMutationObserver: !1
        }
          , y = function() {
            if (m = 0 < arguments.length && void 0 !== arguments[0] && arguments[0] ? !0 : m)
                return h = (0,
                p.default)(h, v),
                (0,
                d.default)(h, v.once),
                h
        };
        e.exports = {
            init: function(e) {
                return v = a(v, e),
                h = (0,
                f.default)(),
                !0 === (e = v.disable) || "mobile" === e && u.default.mobile() || "phone" === e && u.default.phone() || "tablet" === e && u.default.tablet() || "function" == typeof e && !0 === e() || g ? void h.forEach(function(e, t) {
                    e.node.removeAttribute("data-aos"),
                    e.node.removeAttribute("data-aos-easing"),
                    e.node.removeAttribute("data-aos-duration"),
                    e.node.removeAttribute("data-aos-delay")
                }) : (document.querySelector("body").setAttribute("data-aos-easing", v.easing),
                document.querySelector("body").setAttribute("data-aos-duration", v.duration),
                document.querySelector("body").setAttribute("data-aos-delay", v.delay),
                "DOMContentLoaded" === v.startEvent && -1 < ["complete", "interactive"].indexOf(document.readyState) ? y(!0) : ("load" === v.startEvent ? window : document).addEventListener(v.startEvent, function() {
                    y(!0)
                }),
                window.addEventListener("resize", (0,
                l.default)(y, v.debounceDelay, !0)),
                window.addEventListener("orientationchange", (0,
                l.default)(y, v.debounceDelay, !0)),
                window.addEventListener("scroll", (0,
                o.default)(function() {
                    (0,
                    d.default)(h, v.once)
                }, v.throttleDelay)),
                v.disableMutationObserver || (0,
                c.default)("[data-aos]", i),
                h)
            },
            refresh: y,
            refreshHard: i
        }
    }
    , function(e, t) {}
    , , , , , function(f, e) {
        !function(e) {
            "use strict";
            function a(r, n, e) {
                function i(e) {
                    var t = l
                      , n = c;
                    return l = c = void 0,
                    h = e,
                    d = r.apply(n, t)
                }
                function a(e) {
                    var t = e - f;
                    return void 0 === f || n <= t || t < 0 || g && u <= e - h
                }
                function s() {
                    var e, t = _();
                    return a(t) ? o(t) : void (p = setTimeout(s, (e = n - ((t = t) - f),
                    g ? T(e, u - (t - h)) : e)))
                }
                function o(e) {
                    return p = void 0,
                    v && l ? i(e) : (l = c = void 0,
                    d)
                }
                function t() {
                    var e = _()
                      , t = a(e);
                    if (l = arguments,
                    c = this,
                    f = e,
                    t) {
                        if (void 0 === p)
                            return h = e = f,
                            p = setTimeout(s, n),
                            m ? i(e) : d;
                        if (g)
                            return p = setTimeout(s, n),
                            i(f)
                    }
                    return void 0 === p && (p = setTimeout(s, n)),
                    d
                }
                var l, c, u, d, p, f, h = 0, m = !1, g = !1, v = !0;
                if ("function" != typeof r)
                    throw new TypeError(w);
                return n = b(n) || 0,
                y(e) && (m = !!e.leading,
                g = "maxWait"in e,
                u = g ? x(b(e.maxWait) || 0, n) : u,
                v = "trailing"in e ? !!e.trailing : v),
                t.cancel = function() {
                    void 0 !== p && clearTimeout(p),
                    l = f = c = p = void (h = 0)
                }
                ,
                t.flush = function() {
                    return void 0 === p ? d : o(_())
                }
                ,
                t
            }
            function y(e) {
                var t = void 0 === e ? "undefined" : r(e);
                return e && ("object" == t || "function" == t)
            }
            function n(e) {
                return "symbol" == (void 0 === e ? "undefined" : r(e)) || !!(t = e) && "object" == (void 0 === t ? "undefined" : r(t)) && "[object Symbol]" == p.call(e);
                var t
            }
            function b(e) {
                if ("number" == typeof e)
                    return e;
                if (n(e))
                    return i;
                if ("string" != typeof (e = y(e) ? y(t = "function" == typeof e.valueOf ? e.valueOf() : e) ? t + "" : t : e))
                    return 0 === e ? e : +e;
                e = e.replace(s, "");
                var t = l.test(e);
                return t || c.test(e) ? u(e.slice(2), t ? 2 : 8) : o.test(e) ? i : +e
            }
            var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
              , w = "Expected a function"
              , i = NaN
              , s = /^\s+|\s+$/g
              , o = /^[-+]0x[0-9a-f]+$/i
              , l = /^0b[01]+$/i
              , c = /^0o[0-7]+$/i
              , u = parseInt
              , e = "object" == (void 0 === e ? "undefined" : r(e)) && e && e.Object === Object && e
              , t = "object" == ("undefined" == typeof self ? "undefined" : r(self)) && self && self.Object === Object && self
              , d = e || t || Function("return this")()
              , p = Object.prototype.toString
              , x = Math.max
              , T = Math.min
              , _ = function() {
                return d.Date.now()
            };
            f.exports = function(e, t, n) {
                var r = !0
                  , i = !0;
                if ("function" != typeof e)
                    throw new TypeError(w);
                return y(n) && (r = "leading"in n ? !!n.leading : r,
                i = "trailing"in n ? !!n.trailing : i),
                a(e, t, {
                    leading: r,
                    maxWait: t,
                    trailing: i
                })
            }
        }
        .call(e, function() {
            return this
        }())
    }
    , function(f, e) {
        !function(e) {
            "use strict";
            function y(e) {
                var t = void 0 === e ? "undefined" : r(e);
                return e && ("object" == t || "function" == t)
            }
            function n(e) {
                return "symbol" == (void 0 === e ? "undefined" : r(e)) || !!(t = e) && "object" == (void 0 === t ? "undefined" : r(t)) && p.call(e) == a;
                var t
            }
            function b(e) {
                if ("number" == typeof e)
                    return e;
                if (n(e))
                    return i;
                if ("string" != typeof (e = y(e) ? y(t = "function" == typeof e.valueOf ? e.valueOf() : e) ? t + "" : t : e))
                    return 0 === e ? e : +e;
                e = e.replace(s, "");
                var t = l.test(e);
                return t || c.test(e) ? u(e.slice(2), t ? 2 : 8) : o.test(e) ? i : +e
            }
            function w() {
                return d.Date.now()
            }
            var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
              , i = NaN
              , a = "[object Symbol]"
              , s = /^\s+|\s+$/g
              , o = /^[-+]0x[0-9a-f]+$/i
              , l = /^0b[01]+$/i
              , c = /^0o[0-7]+$/i
              , u = parseInt
              , e = "object" == (void 0 === e ? "undefined" : r(e)) && e && e.Object === Object && e
              , t = "object" == ("undefined" == typeof self ? "undefined" : r(self)) && self && self.Object === Object && self
              , d = e || t || Function("return this")()
              , p = Object.prototype.toString
              , x = Math.max
              , T = Math.min;
            f.exports = function(r, n, e) {
                function i(e) {
                    var t = l
                      , n = c;
                    return l = c = void 0,
                    h = e,
                    d = r.apply(n, t)
                }
                function a(e) {
                    var t = e - f;
                    return void 0 === f || n <= t || t < 0 || g && u <= e - h
                }
                function s() {
                    var e, t = w();
                    return a(t) ? o(t) : void (p = setTimeout(s, (e = n - ((t = t) - f),
                    g ? T(e, u - (t - h)) : e)))
                }
                function o(e) {
                    return p = void 0,
                    v && l ? i(e) : (l = c = void 0,
                    d)
                }
                function t() {
                    var e = w()
                      , t = a(e);
                    if (l = arguments,
                    c = this,
                    f = e,
                    t) {
                        if (void 0 === p)
                            return h = e = f,
                            p = setTimeout(s, n),
                            m ? i(e) : d;
                        if (g)
                            return p = setTimeout(s, n),
                            i(f)
                    }
                    return void 0 === p && (p = setTimeout(s, n)),
                    d
                }
                var l, c, u, d, p, f, h = 0, m = !1, g = !1, v = !0;
                if ("function" != typeof r)
                    throw new TypeError("Expected a function");
                return n = b(n) || 0,
                y(e) && (m = !!e.leading,
                g = "maxWait"in e,
                u = g ? x(b(e.maxWait) || 0, n) : u,
                v = "trailing"in e ? !!e.trailing : v),
                t.cancel = function() {
                    void 0 !== p && clearTimeout(p),
                    l = f = c = p = void (h = 0)
                }
                ,
                t.flush = function() {
                    return void 0 === p ? d : o(w())
                }
                ,
                t
            }
        }
        .call(e, function() {
            return this
        }())
    }
    , function(e, t) {
        "use strict";
        function r(e) {
            e && e.forEach(function(e) {
                var t = Array.prototype.slice.call(e.addedNodes)
                  , e = Array.prototype.slice.call(e.removedNodes);
                t.concat(e).filter(function(e) {
                    return e.hasAttribute && e.hasAttribute("data-aos")
                }).length && s()
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = window.document
          , a = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
          , s = function() {};
        t.default = function(e, t) {
            var n = new a(r);
            s = t,
            n.observe(i.documentElement, {
                childList: !0,
                subtree: !0,
                removedNodes: !0
            })
        }
    }
    , function(e, t) {
        "use strict";
        function n() {
            return navigator.userAgent || navigator.vendor || window.opera || ""
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i
          , i = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
          , a = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i
          , s = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
          , o = (function(e, t, n) {
            return t && c(e.prototype, t),
            n && c(e, n),
            e
        }(l, [{
            key: "phone",
            value: function() {
                var e = n();
                return !(!r.test(e) && !i.test(e.substr(0, 4)))
            }
        }, {
            key: "mobile",
            value: function() {
                var e = n();
                return !(!a.test(e) && !s.test(e.substr(0, 4)))
            }
        }, {
            key: "tablet",
            value: function() {
                return this.mobile() && !this.phone()
            }
        }]),
        l);
        function l() {
            if (!(this instanceof l))
                throw new TypeError("Cannot call a class as a function")
        }
        function c(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        t.default = new o
    }
    , function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = function(e, a) {
            var s = window.pageYOffset
              , o = window.innerHeight;
            e.forEach(function(e, t) {
                var n, r, i;
                n = o + s,
                r = a,
                i = (e = e).node.getAttribute("data-aos-once"),
                n > e.position ? e.node.classList.add("aos-animate") : void 0 === i || "false" !== i && (r || "true" === i) || e.node.classList.remove("aos-animate")
            })
        }
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = n(12)
          , r = (n = n) && n.__esModule ? n : {
            default: n
        };
        t.default = function(e, n) {
            return e.forEach(function(e, t) {
                e.node.classList.add("aos-init"),
                e.position = (0,
                r.default)(e.node, n.offset)
            }),
            e
        }
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = n(13)
          , s = (n = n) && n.__esModule ? n : {
            default: n
        };
        t.default = function(e, t) {
            var n = 0
              , r = 0
              , i = window.innerHeight
              , a = {
                offset: e.getAttribute("data-aos-offset"),
                anchor: e.getAttribute("data-aos-anchor"),
                anchorPlacement: e.getAttribute("data-aos-anchor-placement")
            };
            switch (a.offset && !isNaN(a.offset) && (r = parseInt(a.offset)),
            a.anchor && document.querySelectorAll(a.anchor) && (e = document.querySelectorAll(a.anchor)[0]),
            n = (0,
            s.default)(e).top,
            a.anchorPlacement) {
            case "top-bottom":
                break;
            case "center-bottom":
                n += e.offsetHeight / 2;
                break;
            case "bottom-bottom":
                n += e.offsetHeight;
                break;
            case "top-center":
                n += i / 2;
                break;
            case "bottom-center":
                n += i / 2 + e.offsetHeight;
                break;
            case "center-center":
                n += i / 2 + e.offsetHeight / 2;
                break;
            case "top-top":
                n += i;
                break;
            case "bottom-top":
                n += e.offsetHeight + i;
                break;
            case "center-top":
                n += e.offsetHeight / 2 + i
            }
            return n + (r = a.anchorPlacement || a.offset || isNaN(t) ? r : t)
        }
    }
    , function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = function(e) {
            for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop); )
                t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0),
                n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0),
                e = e.offsetParent;
            return {
                top: n,
                left: t
            }
        }
    }
    , function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = function(e) {
            return e = e || document.querySelectorAll("[data-aos]"),
            Array.prototype.map.call(e, function(e) {
                return {
                    node: e
                }
            })
        }
    }
    ],
    i = {},
    n.m = r,
    n.c = i,
    n.p = "dist/",
    n(0);
    function n(e) {
        var t;
        return (i[e] || (t = i[e] = {
            exports: {},
            id: e,
            loaded: !1
        },
        r[e].call(t.exports, t, t.exports, n),
        t.loaded = !0,
        t)).exports
    }
    var r, i
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, function(e) {
    "use strict";
    function n(e, t) {
        e.prototype = Object.create(t.prototype),
        (e.prototype.constructor = e).__proto__ = t
    }
    function L(e) {
        if (void 0 === e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    function q(e) {
        return "string" == typeof e
    }
    function d(e) {
        return "function" == typeof e
    }
    function K(e) {
        return "number" == typeof e
    }
    function a(e) {
        return void 0 === e
    }
    function M(e) {
        return "object" == typeof e
    }
    function z(e) {
        return !1 !== e
    }
    function r() {
        return "undefined" != typeof window
    }
    function Z(e) {
        return d(e) || q(e)
    }
    function m(e) {
        return (Ue = Be(e, s)) && u
    }
    function J(e, t) {
        return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()")
    }
    function ee(e, t) {
        return !t && console.warn(e)
    }
    function g(e, t) {
        return e && (s[e] = t) && Ue && (Ue[e] = t) || s
    }
    function v() {
        return 0
    }
    function te(e) {
        var t, n, r = e[0];
        if (M(r) || d(r) || (e = [e]),
        !(t = (r._gsap || {}).harness)) {
            for (n = It.length; n-- && !It[n].targetTest(r); )
                ;
            t = It[n]
        }
        for (n = e.length; n--; )
            e[n] && (e[n]._gsap || (e[n]._gsap = new Kt(e[n],t))) || e.splice(n, 1);
        return e
    }
    function ne(e) {
        return e._gsap || te(A(e))[0]._gsap
    }
    function y(e, t, n) {
        return (n = e[t]) && d(n) ? e[t]() : a(n) && e.getAttribute && e.getAttribute(t) || n
    }
    function f(e, t) {
        return (e = e.split(",")).forEach(t) || e
    }
    function N(e) {
        return Math.round(1e5 * e) / 1e5 || 0
    }
    function k(e) {
        return Math.round(1e7 * e) / 1e7 || 0
    }
    function re(e, t) {
        var n = t.charAt(0)
          , t = parseFloat(t.substr(2));
        return e = parseFloat(e),
        "+" === n ? e + t : "-" === n ? e - t : "*" === n ? e * t : e / t
    }
    function ie() {
        var e, t, n = Dt.length, r = Dt.slice(0);
        for (Lt = {},
        e = Dt.length = 0; e < n; e++)
            (t = r[e]) && t._lazy && (t.render(t._lazy[0], t._lazy[1], !0)._lazy = 0)
    }
    function b(e, t, n, r) {
        Dt.length && ie(),
        e.render(t, n, r || j && t < 0 && (e._initted || e._startAt)),
        Dt.length && ie()
    }
    function w(e) {
        var t = parseFloat(e);
        return (t || 0 === t) && (e + "").match(Mt).length < 2 ? t : q(e) ? e.trim() : e
    }
    function T(e) {
        return e
    }
    function I(e, t) {
        for (var n in t)
            n in e || (e[n] = t[n]);
        return e
    }
    function _(e, t) {
        for (var n in t)
            "__proto__" !== n && "constructor" !== n && "prototype" !== n && (e[n] = M(t[n]) ? _(e[n] || (e[n] = {}), t[n]) : t[n]);
        return e
    }
    function ae(e, t) {
        var n, r = {};
        for (n in e)
            n in t || (r[n] = e[n]);
        return r
    }
    function se(e) {
        var r, t = e.parent || R, n = e.keyframes ? (r = O(e.keyframes),
        function(e, t) {
            for (var n in t)
                n in e || "duration" === n && r || "ease" === n || (e[n] = t[n])
        }
        ) : I;
        if (z(e.inherit))
            for (; t; )
                n(e, t.vars.defaults),
                t = t.parent || t._dp;
        return e
    }
    function E(e, t, n, r, i) {
        void 0 === n && (n = "_first");
        var a, s = e[r = void 0 === r ? "_last" : r];
        if (i)
            for (a = t[i]; s && s[i] > a; )
                s = s._prev;
        s ? (t._next = s._next,
        s._next = t) : (t._next = e[n],
        e[n] = t),
        t._next ? t._next._prev = t : e[r] = t,
        t._prev = s,
        t.parent = t._dp = e
    }
    function C(e, t, n, r) {
        void 0 === n && (n = "_first"),
        void 0 === r && (r = "_last");
        var i = t._prev
          , a = t._next;
        i ? i._next = a : e[n] === t && (e[n] = a),
        a ? a._prev = i : e[r] === t && (e[r] = i),
        t._next = t._prev = t.parent = null
    }
    function oe(e, t) {
        !e.parent || t && !e.parent.autoRemoveChildren || e.parent.remove(e),
        e._act = 0
    }
    function S(e, t) {
        if (e && (!t || t._end > e._dur || t._start < 0))
            for (var n = e; n; )
                n._dirty = 1,
                n = n.parent;
        return e
    }
    function le(e, t, n, r) {
        e._startAt && (j ? e._startAt.revert(Ot) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, r))
    }
    function ce(e) {
        return e._repeat ? He(e._tTime, e = e.duration() + e._rDelay) * e : 0
    }
    function ue(e, t) {
        return (e - t._start) * t._ts + (0 <= t._ts ? 0 : t._dirty ? t.totalDuration() : t._tDur)
    }
    function de(e) {
        e._end = k(e._start + (e._tDur / Math.abs(e._ts || e._rts || X) || 0))
    }
    function pe(e, t) {
        var n = e._dp;
        n && n.smoothChildTiming && e._ts && (e._start = k(n._time - (0 < e._ts ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)),
        de(e),
        n._dirty || S(n, e))
    }
    function fe(e, t) {
        var n;
        if ((t._time || t._initted && !t._dur) && (n = ue(e.rawTime(), t),
        !t._dur || Xe(0, t.totalDuration(), n) - t._tTime > X) && t.render(n, !0),
        S(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
            if (e._dur < e.duration())
                for (n = e; n._dp; )
                    0 <= n.rawTime() && n.totalTime(n._tTime),
                    n = n._dp;
            e._zTime = -X
        }
    }
    function P(e, t, n, r) {
        return t.parent && oe(t),
        t._start = k((K(n) ? n : n || e !== R ? c(e, n, t) : e._time) + t._delay),
        t._end = k(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)),
        E(e, t, "_first", "_last", e._sort ? "_start" : 0),
        Fe(t) || (e._recent = t),
        r || fe(e, t),
        e._ts < 0 && pe(e, e._tTime),
        e
    }
    function he(e, t) {
        (s.ScrollTrigger || J("scrollTrigger", t)) && s.ScrollTrigger.create(t, e)
    }
    function me(e, t, n, r, i) {
        return rn(e, t, i),
        !e._initted || !n && e._pt && !j && (e._dur && !1 !== e.vars.lazy || !e._dur && e.vars.lazy) && Ke !== h.frame && (Dt.push(e),
        e._lazy = [i, r])
    }
    function ge(e, t, n, r) {
        var i = e._repeat
          , t = k(t) || 0
          , a = e._tTime / e._tDur;
        return a && !r && (e._time *= t / e._dur),
        e._dur = t,
        e._tDur = i ? i < 0 ? 1e10 : k(t * (i + 1) + e._rDelay * i) : t,
        0 < a && !r && pe(e, e._tTime = e._tDur * a),
        e.parent && de(e),
        n || S(e.parent, e),
        e
    }
    function ve(e) {
        return e instanceof D ? S(e) : ge(e, e._dur)
    }
    function ye(e, t, n) {
        var r, i, a = K(t[1]), s = (a ? 2 : 1) + (e < 2 ? 0 : 1), o = t[s];
        if (a && (o.duration = t[1]),
        o.parent = n,
        e) {
            for (r = o,
            i = n; i && !("immediateRender"in r); )
                r = i.vars.defaults || {},
                i = z(i.vars.inherit) && i.parent;
            o.immediateRender = z(r.immediateRender),
            e < 2 ? o.runBackwards = 1 : o.startAt = t[s - 1]
        }
        return new Y(t[0],o,t[1 + s])
    }
    function be(e, t) {
        return e || 0 === e ? t(e) : t
    }
    function B(e, t) {
        return q(e) && (t = kt.exec(e)) ? t[1] : ""
    }
    function we(e, t) {
        return e && M(e) && "length"in e && (!t && !e.length || e.length - 1 in e && M(e[0])) && !e.nodeType && e !== l
    }
    function xe(n) {
        return n = A(n)[0] || ee("Invalid scope") || {},
        function(e) {
            var t = n.current || n.nativeElement || n;
            return A(e, t.querySelectorAll ? t : t === n ? ee("Invalid scope") || Ve.createElement("div") : n)
        }
    }
    function Te(e) {
        return e.sort(function() {
            return .5 - Math.random()
        })
    }
    function _e(e) {
        var f, h, m, g, v, y, b, w, x;
        return d(e) ? e : (f = M(e) ? e : {
            each: e
        },
        h = Vt(f.ease),
        m = f.from || 0,
        g = parseFloat(f.base) || 0,
        v = {},
        e = 0 < m && m < 1,
        y = isNaN(m) || e,
        b = f.axis,
        q(x = w = m) ? w = x = {
            center: .5,
            edges: .5,
            end: 1
        }[m] || 0 : !e && y && (w = m[0],
        x = m[1]),
        function(e, t, n) {
            var r, i, a, s, o, l, c, u, d = (n || f).length, p = v[d];
            if (!p) {
                if (!(u = "auto" === f.grid ? 0 : (f.grid || [1, F])[1])) {
                    for (l = -F; l < (l = n[u++].getBoundingClientRect().left) && u < d; )
                        ;
                    u--
                }
                for (p = v[d] = [],
                r = y ? Math.min(u, d) * w - .5 : m % u,
                i = u === F ? 0 : y ? d * x / u - .5 : m / u | 0,
                c = F,
                o = l = 0; o < d; o++)
                    s = o % u - r,
                    a = i - (o / u | 0),
                    p[o] = s = b ? Math.abs("y" === b ? a : s) : yt(s * s + a * a),
                    l < s && (l = s),
                    s < c && (c = s);
                "random" === m && Te(p),
                p.max = l - c,
                p.min = c,
                p.v = d = (parseFloat(f.amount) || parseFloat(f.each) * (d < u ? d - 1 : b ? "y" === b ? d / u : u : Math.max(u, d / u)) || 0) * ("edges" === m ? -1 : 1),
                p.b = d < 0 ? g - d : g,
                p.u = B(f.amount || f.each) || 0,
                h = h && d < 0 ? Gt(h) : h
            }
            return d = (p[e] - p.min) / p.max || 0,
            k(p.b + (h ? h(d) : d) * p.v) + p.u
        }
        )
    }
    function Ee(n) {
        var r = Math.pow(10, ((n + "").split(".")[1] || "").length);
        return function(e) {
            var t = k(Math.round(parseFloat(e) / n) * n * r);
            return (t - t % 1) / r + (K(e) ? 0 : B(e))
        }
    }
    function Ce(l, e) {
        var c, u, t = O(l);
        return !t && M(l) && (c = t = l.radius || F,
        l.values ? (l = A(l.values),
        (u = !K(l[0])) && (c *= c)) : l = Ee(l.increment)),
        be(e, t ? d(l) ? function(e) {
            return u = l(e),
            Math.abs(u - e) <= c ? u : e
        }
        : function(e) {
            for (var t, n, r = parseFloat(u ? e.x : e), i = parseFloat(u ? e.y : 0), a = F, s = 0, o = l.length; o--; )
                (t = u ? (t = l[o].x - r) * t + (n = l[o].y - i) * n : Math.abs(l[o] - r)) < a && (a = t,
                s = o);
            return s = !c || a <= c ? l[s] : e,
            u || s === e || K(e) ? s : s + B(e)
        }
        : Ee(l))
    }
    function Se(e, t, n, r) {
        return be(O(e) ? !t : !0 === n ? !!(n = 0) : !r, function() {
            return O(e) ? e[~~(Math.random() * e.length)] : (n = n || 1e-5) && (r = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((e - n / 2 + Math.random() * (t - e + .99 * n)) / n) * n * r) / r
        })
    }
    function Me(t, n, e) {
        return be(e, function(e) {
            return t[~~n(e)]
        })
    }
    function ke(e) {
        for (var t, n, r, i, a = 0, s = ""; ~(t = e.indexOf("random(", a)); )
            r = e.indexOf(")", t),
            i = "[" === e.charAt(t + 7),
            n = e.substr(t + 7, r - t - 7).match(i ? Mt : Tt),
            s += e.substr(a, t - a) + Se(i ? n : +n[0], i ? 0 : +n[1], +n[2] || 1e-5),
            a = r + 1;
        return s + e.substr(a, e.length - a)
    }
    function Pe(e, t, n) {
        var r, i, a, s = e.labels, o = F;
        for (r in s)
            (i = s[r] - t) < 0 == !!n && i && o > (i = Math.abs(i)) && (a = r,
            o = i);
        return a
    }
    function Oe(e) {
        return oe(e),
        e.scrollTrigger && e.scrollTrigger.kill(!!j),
        e.progress() < 1 && x(e, "onInterrupt"),
        e
    }
    function Ae(e, t, n) {
        return (6 * (e += e < 0 ? 1 : 1 < e ? -1 : 0) < 1 ? t + (n - t) * e * 6 : e < .5 ? n : 3 * e < 2 ? t + (n - t) * (2 / 3 - e) * 6 : t) * p + .5 | 0
    }
    function $e(e, t, n) {
        var r, i, a, s, o, l, c, u = e ? K(e) ? [e >> 16, e >> 8 & p, e & p] : 0 : Bt.black;
        if (!u) {
            if ("," === e.substr(-1) && (e = e.substr(0, e.length - 1)),
            Bt[e])
                u = Bt[e];
            else if ("#" === e.charAt(0)) {
                if (9 === (e = e.length < 6 ? "#" + (r = e.charAt(1)) + r + (i = e.charAt(2)) + i + (a = e.charAt(3)) + a + (5 === e.length ? e.charAt(4) + e.charAt(4) : "") : e).length)
                    return [(u = parseInt(e.substr(1, 6), 16)) >> 16, u >> 8 & p, u & p, parseInt(e.substr(7), 16) / 255];
                u = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & p, e & p]
            } else if ("hsl" === e.substr(0, 3))
                if (u = c = e.match(Tt),
                t) {
                    if (~e.indexOf("="))
                        return u = e.match(_t),
                        n && u.length < 4 && (u[3] = 1),
                        u
                } else
                    s = +u[0] % 360 / 360,
                    o = u[1] / 100,
                    r = 2 * (l = u[2] / 100) - (i = l <= .5 ? l * (o + 1) : l + o - l * o),
                    3 < u.length && (u[3] *= 1),
                    u[0] = Ae(s + 1 / 3, r, i),
                    u[1] = Ae(s, r, i),
                    u[2] = Ae(s - 1 / 3, r, i);
            else
                u = e.match(Tt) || Bt.transparent;
            u = u.map(Number)
        }
        return t && !c && (r = u[0] / p,
        i = u[1] / p,
        a = u[2] / p,
        l = ((e = Math.max(r, i, a)) + (t = Math.min(r, i, a))) / 2,
        e === t ? s = o = 0 : (c = e - t,
        o = .5 < l ? c / (2 - e - t) : c / (e + t),
        s = e === r ? (i - a) / c + (i < a ? 6 : 0) : e === i ? (a - r) / c + 2 : (r - i) / c + 4,
        s *= 60),
        u[0] = ~~(s + .5),
        u[1] = ~~(100 * o + .5),
        u[2] = ~~(100 * l + .5)),
        n && u.length < 4 && (u[3] = 1),
        u
    }
    function De(e) {
        var t = []
          , n = []
          , r = -1;
        return e.split(Ht).forEach(function(e) {
            e = e.match(Et) || [];
            t.push.apply(t, e),
            n.push(r += e.length + 1)
        }),
        t.c = n,
        t
    }
    function Le(e, t, n) {
        var r, i, a, s, o = "", l = (e + o).match(Ht), c = t ? "hsla(" : "rgba(", u = 0;
        if (!l)
            return e;
        if (l = l.map(function(e) {
            return (e = $e(e, t, 1)) && c + (t ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3] : e.join(",")) + ")"
        }),
        n && (a = De(e),
        (r = n.c).join(o) !== a.c.join(o)))
            for (s = (i = e.replace(Ht, "1").split(Et)).length - 1; u < s; u++)
                o += i[u] + (~r.indexOf(u) ? l.shift() || c + "0,0,0,0)" : (a.length ? a : l.length ? l : n).shift());
        if (!i)
            for (s = (i = e.split(Ht)).length - 1; u < s; u++)
                o += i[u] + l[u];
        return o + i[s]
    }
    function ze(e) {
        var t = e.join(" ");
        if (Ht.lastIndex = 0,
        Ht.test(t))
            return t = Ft.test(t),
            e[1] = Le(e[1], t),
            e[0] = Le(e[0], t, De(e[1])),
            !0
    }
    function Ne(e, t) {
        for (var n, r = e._first; r; )
            r instanceof D ? Ne(r, t) : !r.vars.yoyoEase || r._yoyo && r._repeat || r._yoyo === t || (r.timeline ? Ne(r.timeline, t) : (n = r._ease,
            r._ease = r._yEase,
            r._yEase = n,
            r._yoyo = t)),
            r = r._next
    }
    function Ie(e, t, n, r) {
        var i, a = {
            easeIn: t,
            easeOut: n = void 0 === n ? function(e) {
                return 1 - t(1 - e)
            }
            : n,
            easeInOut: r = void 0 === r ? function(e) {
                return e < .5 ? t(2 * e) / 2 : 1 - t(2 * (1 - e)) / 2
            }
            : r
        };
        f(e, function(e) {
            for (var t in $[e] = s[e] = a,
            $[i = e.toLowerCase()] = n,
            a)
                $[i + ("easeIn" === t ? ".in" : "easeOut" === t ? ".out" : ".inOut")] = $[e + "." + t] = a[t]
        })
    }
    function je(t) {
        return function(e) {
            return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
        }
    }
    function Re(n, e, t) {
        function r(e) {
            return 1 === e ? 1 : i * Math.pow(2, -10 * e) * wt((e - a) * s) + 1
        }
        var i = 1 <= e ? e : 1
          , a = (s = (t || (n ? .3 : .45)) / (e < 1 ? e : 1)) / mt * (Math.asin(1 / i) || 0)
          , t = "out" === n ? r : "in" === n ? function(e) {
            return 1 - r(1 - e)
        }
        : je(r)
          , s = mt / s;
        return t.config = function(e, t) {
            return Re(n, e, t)
        }
        ,
        t
    }
    function qe(t, n) {
        function r(e) {
            return e ? --e * e * ((n + 1) * e + n) + 1 : 0
        }
        void 0 === n && (n = 1.70158);
        var e = "out" === t ? r : "in" === t ? function(e) {
            return 1 - r(1 - e)
        }
        : je(r);
        return e.config = function(e) {
            return qe(t, e)
        }
        ,
        e
    }
    function Be(e, t) {
        for (var n in t)
            e[n] = t[n];
        return e
    }
    function He(e, t) {
        return t = Math.floor(e /= t),
        e && t === e ? t - 1 : t
    }
    function Fe(e) {
        return "isFromStart" === (e = e.data) || "isStart" === e
    }
    function c(e, t, n) {
        var r, i, a, s = e.labels, o = e._recent || Rt, l = e.duration() >= F ? o.endTime(!1) : e._dur;
        return q(t) && (isNaN(t) || t in s) ? (i = t.charAt(0),
        a = "%" === t.substr(-1),
        r = t.indexOf("="),
        "<" === i || ">" === i ? (0 <= r && (t = t.replace(/=/, "")),
        ("<" === i ? o._start : o.endTime(0 <= o._repeat)) + (parseFloat(t.substr(1)) || 0) * (a ? (r < 0 ? o : n).totalDuration() / 100 : 1)) : r < 0 ? (t in s || (s[t] = l),
        s[t]) : (i = parseFloat(t.charAt(r - 1) + t.substr(r + 1)),
        a && n && (i = i / 100 * (O(n) ? n[0] : n).totalDuration()),
        1 < r ? c(e, t.substr(0, r - 1), n) + i : l + i)) : null == t ? l : +t
    }
    function Xe(e, t, n) {
        return n < e ? e : t < n ? t : n
    }
    function We(t, e, n, r, i) {
        var a = e - t
          , s = r - n;
        return be(i, function(e) {
            return n + ((e - t) / a * s || 0)
        })
    }
    function x(e, t, n) {
        var r = e.vars
          , i = r[t]
          , a = o
          , s = e._ctx;
        if (i)
            t = r[t + "Params"],
            r = r.callbackScope || e,
            n && Dt.length && ie(),
            s && (o = s),
            e = t ? i.apply(r, t) : i.call(r),
            o = a
    }
    var Ye, j, o, R, l, Ge, Ve, Ue, Qe, Ke, Ze, Je, et, tt, nt, rt, it, at, st, ot, lt, ct, ut, dt, pt, ft, H = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
            lineHeight: ""
        }
    }, ht = {
        duration: .5,
        overwrite: !1,
        delay: 0
    }, F = 1e8, X = 1 / F, mt = 2 * Math.PI, gt = mt / 4, vt = 0, yt = Math.sqrt, bt = Math.cos, wt = Math.sin, xt = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {}
    , O = Array.isArray, Tt = /(?:-?\.?\d|\.)+/gi, _t = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, Et = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Ct = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, St = /[+-]=-?[.\d]+/, Mt = /[^,'"\[\]\s]+/gi, kt = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, s = {}, Pt = {
        suppressEvents: !0,
        isStart: !0,
        kill: !1
    }, Ot = {
        suppressEvents: !0,
        kill: !1
    }, At = {
        suppressEvents: !0
    }, $t = {}, Dt = [], Lt = {}, W = {}, zt = {}, Nt = 30, It = [], jt = "", Rt = {
        _start: 0,
        endTime: v,
        totalDuration: v
    }, qt = [].slice, A = function(e, t, n) {
        return o && !t && o.selector ? o.selector(e) : !q(e) || n || !Ge && Xt() ? O(e) ? (r = n,
        void 0 === i && (i = []),
        e.forEach(function(e) {
            return q(e) && !r || we(e, 1) ? i.push.apply(i, A(e)) : i.push(e)
        }) || i) : we(e) ? qt.call(e, 0) : e ? [e] : [] : qt.call((t || Ve).querySelectorAll(e), 0);
        var r, i
    }, p = 255, Bt = {
        aqua: [0, p, p],
        lime: [0, p, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, p],
        navy: [0, 0, 128],
        white: [p, p, p],
        olive: [128, 128, 0],
        yellow: [p, p, 0],
        orange: [p, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [p, 0, 0],
        pink: [p, 192, 203],
        cyan: [0, p, p],
        transparent: [p, p, p, 0]
    }, Ht = function() {
        var e, t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
        for (e in Bt)
            t += "|" + e + "\\b";
        return new RegExp(t + ")","gi")
    }(), Ft = /hsl[a]?\(/, h = (at = Date.now,
    st = 500,
    ot = 33,
    lt = at(),
    ct = lt,
    dt = ut = 1e3 / 240,
    nt = {
        time: 0,
        frame: 0,
        tick: function() {
            Ut(!0)
        },
        deltaRatio: function(e) {
            return rt / (1e3 / (e || 60))
        },
        wake: function() {
            Qe && (!Ge && r() && (l = Ge = window,
            Ve = l.document || {},
            s.gsap = u,
            (l.gsapVersions || (l.gsapVersions = [])).push(u.version),
            m(Ue || l.GreenSockGlobals || !l.gsap && l || {}),
            tt = l.requestAnimationFrame),
            Je && nt.sleep(),
            et = tt || function(e) {
                return setTimeout(e, dt - 1e3 * nt.time + 1 | 0)
            }
            ,
            Ze = 1,
            Ut(2))
        },
        sleep: function() {
            (tt ? l.cancelAnimationFrame : clearTimeout)(Je),
            Ze = 0,
            et = v
        },
        lagSmoothing: function(e, t) {
            st = e || 1e8,
            ot = Math.min(t, st, 0)
        },
        fps: function(e) {
            ut = 1e3 / (e || 240),
            dt = 1e3 * nt.time + ut
        },
        add: function(i, e, t) {
            var a = e ? function(e, t, n, r) {
                i(e, t, n, r),
                nt.remove(a)
            }
            : i;
            return nt.remove(i),
            pt[t ? "unshift" : "push"](a),
            Xt(),
            a
        },
        remove: function(e, t) {
            ~(t = pt.indexOf(e)) && pt.splice(t, 1) && t <= it && it--
        },
        _listeners: pt = []
    }), Xt = function() {
        return !Ze && h.wake()
    }, $ = {}, Wt = /^[\d.\-M][\d.\-,\s]/, Yt = /["']/g, Gt = function(t) {
        return function(e) {
            return 1 - t(1 - e)
        }
    }, Vt = function(e, t) {
        return e && (d(e) ? e : $[e] || (a = ((e = e) + "").split("("),
        (s = $[a[0]]) && 1 < a.length && s.config ? s.config.apply(null, ~e.indexOf("{") ? [function(e) {
            for (var t, n, r, i = {}, a = e.substr(1, e.length - 3).split(":"), s = a[0], o = 1, l = a.length; o < l; o++)
                n = a[o],
                t = o !== l - 1 ? n.lastIndexOf(",") : n.length,
                r = n.substr(0, t),
                i[s] = isNaN(r) ? r.replace(Yt, "").trim() : +r,
                s = n.substr(t + 1).trim();
            return i
        }(a[1])] : (n = (a = e).indexOf("(") + 1,
        r = a.indexOf(")"),
        i = a.indexOf("(", n),
        a.substring(n, ~i && i < r ? a.indexOf(")", r + 1) : r).split(",").map(w))) : $._CE && Wt.test(e) ? $._CE("", e) : s)) || t;
        var n, r, i, a, s
    };
    function Ut(e) {
        var t, n, r, i = at() - ct, a = !0 === e;
        if (st < i && (lt += i - ot),
        (0 < (i = (n = (ct += i) - lt) - dt) || a) && (r = ++nt.frame,
        rt = n - 1e3 * nt.time,
        nt.time = n /= 1e3,
        dt += i + (ut <= i ? 4 : ut - i),
        t = 1),
        a || (Je = et(Ut)),
        t)
            for (it = 0; it < pt.length; it++)
                pt[it](n, rt, r, e)
    }
    function Qt(e) {
        return e < 1 / 2.75 ? ft * e * e : e < .7272727272727273 ? ft * Math.pow(e - 1.5 / 2.75, 2) + .75 : e < .9090909090909092 ? ft * (e -= 2.25 / 2.75) * e + .9375 : ft * Math.pow(e - 2.625 / 2.75, 2) + .984375
    }
    f("Linear,Quad,Cubic,Quart,Quint,Strong", function(e, t) {
        var n = t < 5 ? t + 1 : t;
        Ie(e + ",Power" + (n - 1), t ? function(e) {
            return Math.pow(e, n)
        }
        : function(e) {
            return e
        }
        , function(e) {
            return 1 - Math.pow(1 - e, n)
        }, function(e) {
            return e < .5 ? Math.pow(2 * e, n) / 2 : 1 - Math.pow(2 * (1 - e), n) / 2
        })
    }),
    $.Linear.easeNone = $.none = $.Linear.easeIn,
    Ie("Elastic", Re("in"), Re("out"), Re()),
    ft = 7.5625,
    Ie("Bounce", function(e) {
        return 1 - Qt(1 - e)
    }, Qt),
    Ie("Expo", function(e) {
        return e ? Math.pow(2, 10 * (e - 1)) : 0
    }),
    Ie("Circ", function(e) {
        return -(yt(1 - e * e) - 1)
    }),
    Ie("Sine", function(e) {
        return 1 === e ? 1 : 1 - bt(e * gt)
    }),
    Ie("Back", qe("in"), qe("out"), qe()),
    $.SteppedEase = $.steps = s.SteppedEase = {
        config: function(e, t) {
            var n = 1 / (e = void 0 === e ? 1 : e)
              , r = e + (t ? 0 : 1)
              , i = t ? 1 : 0;
            return function(e) {
                return ((r * Xe(0, .99999999, e) | 0) + i) * n
            }
        }
    },
    ht.ease = $["quad.out"],
    f("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(e) {
        return jt += e + "," + e + "Params,"
    });
    var Kt = function(e, t) {
        this.id = vt++,
        (e._gsap = this).target = e,
        this.harness = t,
        this.get = t ? t.get : y,
        this.set = t ? t.getSetter : _n
    }
      , Zt = ((t = Jt.prototype).delay = function(e) {
        return e || 0 === e ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + e - this._delay),
        this._delay = e,
        this) : this._delay
    }
    ,
    t.duration = function(e) {
        return arguments.length ? this.totalDuration(0 < this._repeat ? e + (e + this._rDelay) * this._repeat : e) : this.totalDuration() && this._dur
    }
    ,
    t.totalDuration = function(e) {
        return arguments.length ? (this._dirty = 0,
        ge(this, this._repeat < 0 ? e : (e - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
    }
    ,
    t.totalTime = function(e, t) {
        if (Xt(),
        !arguments.length)
            return this._tTime;
        var n = this._dp;
        if (n && n.smoothChildTiming && this._ts) {
            for (pe(this, e),
            n._dp && !n.parent && fe(n, this); n && n.parent; )
                n.parent._time !== n._start + (0 <= n._ts ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0),
                n = n.parent;
            !this.parent && this._dp.autoRemoveChildren && (0 < this._ts && e < this._tDur || this._ts < 0 && 0 < e || !this._tDur && !e) && P(this._dp, this, this._start - this._delay)
        }
        return (this._tTime !== e || !this._dur && !t || this._initted && Math.abs(this._zTime) === X || !e && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = e),
        b(this, e, t)),
        this
    }
    ,
    t.time = function(e, t) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), e + ce(this)) % (this._dur + this._rDelay) || (e ? this._dur : 0), t) : this._time
    }
    ,
    t.totalProgress = function(e, t) {
        return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
    }
    ,
    t.progress = function(e, t) {
        return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? e : 1 - e) + ce(this), t) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
    }
    ,
    t.iteration = function(e, t) {
        var n = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (e - 1) * n, t) : this._repeat ? He(this._tTime, n) + 1 : 1
    }
    ,
    t.timeScale = function(e) {
        if (!arguments.length)
            return this._rts === -X ? 0 : this._rts;
        if (this._rts === e)
            return this;
        for (var t = this.parent && this._ts ? ue(this.parent._time, this) : this._tTime, e = (this._rts = +e || 0,
        this._ts = this._ps || e === -X ? 0 : this._rts,
        this.totalTime(Xe(-this._delay, this._tDur, t), !0),
        de(this),
        this), n = e.parent; n && n.parent; )
            n._dirty = 1,
            n.totalDuration(),
            n = n.parent;
        return e
    }
    ,
    t.paused = function(e) {
        return arguments.length ? (this._ps !== e && ((this._ps = e) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
        this._ts = this._act = 0) : (Xt(),
        this._ts = this._rts,
        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== X && (this._tTime -= X)))),
        this) : this._ps
    }
    ,
    t.startTime = function(e) {
        var t;
        return arguments.length ? (this._start = e,
        !(t = this.parent || this._dp) || !t._sort && this.parent || P(t, this, e - this._delay),
        this) : this._start
    }
    ,
    t.endTime = function(e) {
        return this._start + (z(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
    }
    ,
    t.rawTime = function(e) {
        var t = this.parent || this._dp;
        return t ? e && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? ue(t.rawTime(e), this) : this._tTime : this._tTime
    }
    ,
    t.revert = function(e) {
        var t = j;
        return j = e = void 0 === e ? At : e,
        (this._initted || this._startAt) && (this.timeline && this.timeline.revert(e),
        this.totalTime(-.01, e.suppressEvents)),
        "nested" !== this.data && !1 !== e.kill && this.kill(),
        j = t,
        this
    }
    ,
    t.globalTime = function(e) {
        for (var t = this, n = arguments.length ? e : t.rawTime(); t; )
            n = t._start + n / (t._ts || 1),
            t = t._dp;
        return !this.parent && this.vars.immediateRender ? -1 : n
    }
    ,
    t.repeat = function(e) {
        return arguments.length ? (this._repeat = e === 1 / 0 ? -2 : e,
        ve(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
    }
    ,
    t.repeatDelay = function(e) {
        var t;
        return arguments.length ? (t = this._time,
        this._rDelay = e,
        ve(this),
        t ? this.time(t) : this) : this._rDelay
    }
    ,
    t.yoyo = function(e) {
        return arguments.length ? (this._yoyo = e,
        this) : this._yoyo
    }
    ,
    t.seek = function(e, t) {
        return this.totalTime(c(this, e), z(t))
    }
    ,
    t.restart = function(e, t) {
        return this.play().totalTime(e ? -this._delay : 0, z(t))
    }
    ,
    t.play = function(e, t) {
        return null != e && this.seek(e, t),
        this.reversed(!1).paused(!1)
    }
    ,
    t.reverse = function(e, t) {
        return null != e && this.seek(e || this.totalDuration(), t),
        this.reversed(!0).paused(!1)
    }
    ,
    t.pause = function(e, t) {
        return null != e && this.seek(e, t),
        this.paused(!0)
    }
    ,
    t.resume = function() {
        return this.paused(!1)
    }
    ,
    t.reversed = function(e) {
        return arguments.length ? (!!e !== this.reversed() && this.timeScale(-this._rts || (e ? -X : 0)),
        this) : this._rts < 0
    }
    ,
    t.invalidate = function() {
        return this._initted = this._act = 0,
        this._zTime = -X,
        this
    }
    ,
    t.isActive = function() {
        var e = this.parent || this._dp
          , t = this._start;
        return !(e && !(this._ts && this._initted && e.isActive() && (e = e.rawTime(!0)) >= t && e < this.endTime(!0) - X))
    }
    ,
    t.eventCallback = function(e, t, n) {
        var r = this.vars;
        return 1 < arguments.length ? (t ? (r[e] = t,
        n && (r[e + "Params"] = n),
        "onUpdate" === e && (this._onUpdate = t)) : delete r[e],
        this) : r[e]
    }
    ,
    t.then = function(r) {
        var i = this;
        return new Promise(function(t) {
            function e() {
                var e = i.then;
                i.then = null,
                d(n) && (n = n(i)) && (n.then || n === i) && (i.then = e),
                t(n),
                i.then = e
            }
            var n = d(r) ? r : T;
            i._initted && 1 === i.totalProgress() && 0 <= i._ts || !i._tTime && i._ts < 0 ? e() : i._prom = e
        }
        )
    }
    ,
    t.kill = function() {
        Oe(this)
    }
    ,
    Jt);
    function Jt(e) {
        this.vars = e,
        this._delay = +e.delay || 0,
        (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0,
        this._yoyo = !!e.yoyo || !!e.yoyoEase),
        this._ts = 1,
        ge(this, +e.duration, 1, 1),
        this.data = e.data,
        o && (this._ctx = o).data.push(this),
        Ze || h.wake()
    }
    I(Zt.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -X,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    n(tn, en = Zt),
    (t = tn.prototype).to = function(e, t, n) {
        return ye(0, arguments, this),
        this
    }
    ,
    t.from = function(e, t, n) {
        return ye(1, arguments, this),
        this
    }
    ,
    t.fromTo = function(e, t, n, r) {
        return ye(2, arguments, this),
        this
    }
    ,
    t.set = function(e, t, n) {
        return t.duration = 0,
        t.parent = this,
        se(t).repeatDelay || (t.repeat = 0),
        t.immediateRender = !!t.immediateRender,
        new Y(e,t,c(this, n),1),
        this
    }
    ,
    t.call = function(e, t, n) {
        return P(this, Y.delayedCall(0, e, t), n)
    }
    ,
    t.staggerTo = function(e, t, n, r, i, a, s) {
        return n.duration = t,
        n.stagger = n.stagger || r,
        n.onComplete = a,
        n.onCompleteParams = s,
        n.parent = this,
        new Y(e,n,c(this, i)),
        this
    }
    ,
    t.staggerFrom = function(e, t, n, r, i, a, s) {
        return n.runBackwards = 1,
        se(n).immediateRender = z(n.immediateRender),
        this.staggerTo(e, t, n, r, i, a, s)
    }
    ,
    t.staggerFromTo = function(e, t, n, r, i, a, s, o) {
        return r.startAt = n,
        se(r).immediateRender = z(r.immediateRender),
        this.staggerTo(e, t, r, i, a, s, o)
    }
    ,
    t.render = function(e, t, n) {
        var r, i, a, s, o, l, c, u, d, p, f = this._time, h = this._dirty ? this.totalDuration() : this._tDur, m = this._dur, g = e <= 0 ? 0 : k(e), v = this._zTime < 0 != e < 0 && (this._initted || !m);
        if ((g = this !== R && h < g && 0 <= e ? h : g) !== this._tTime || n || v) {
            if (f !== this._time && m && (g += this._time - f,
            e += this._time - f),
            r = g,
            u = this._start,
            o = !(c = this._ts),
            v && (m || (f = this._zTime),
            !e && t || (this._zTime = e)),
            this._repeat) {
                if (v = this._yoyo,
                s = m + this._rDelay,
                this._repeat < -1 && e < 0)
                    return this.totalTime(100 * s + e, t, n);
                if (r = k(g % s),
                g === h ? (a = this._repeat,
                r = m) : ((a = ~~(g / s)) && a === g / s && (r = m,
                a--),
                m < r && (r = m)),
                d = He(this._tTime, s),
                v && 1 & a && (r = m - r,
                p = 1),
                a !== (d = !f && this._tTime && d !== a ? a : d) && !this._lock) {
                    var y = v && 1 & d
                      , v = y === (v && 1 & a)
                      , f = (y = a < d ? !y : y) ? 0 : m;
                    if (this._lock = 1,
                    this.render(f || (p ? 0 : k(a * s)), t, !m)._lock = 0,
                    this._tTime = g,
                    !t && this.parent && x(this, "onRepeat"),
                    this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1),
                    f && f !== this._time || o != !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                        return this;
                    if (m = this._dur,
                    h = this._tDur,
                    v && (this._lock = 2,
                    this.render(f = y ? m : -1e-4, !0),
                    this.vars.repeatRefresh) && !p && this.invalidate(),
                    this._lock = 0,
                    !this._ts && !o)
                        return this;
                    Ne(this, p)
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (l = function(e, t, n) {
                var r;
                if (t < n)
                    for (r = e._first; r && r._start <= n; ) {
                        if ("isPause" === r.data && r._start > t)
                            return r;
                        r = r._next
                    }
                else
                    for (r = e._last; r && r._start >= n; ) {
                        if ("isPause" === r.data && r._start < t)
                            return r;
                        r = r._prev
                    }
            }(this, k(f), k(r))) && (g -= r - (r = l._start)),
            this._tTime = g,
            this._time = r,
            this._act = !c,
            this._initted || (this._onUpdate = this.vars.onUpdate,
            this._initted = 1,
            this._zTime = e,
            f = 0),
            !f && r && !t && (x(this, "onStart"),
            this._tTime !== g))
                return this;
            if (f <= r && 0 <= e)
                for (b = this._first; b; ) {
                    if (i = b._next,
                    (b._act || r >= b._start) && b._ts && l !== b) {
                        if (b.parent !== this)
                            return this.render(e, t, n);
                        if (b.render(0 < b._ts ? (r - b._start) * b._ts : (b._dirty ? b.totalDuration() : b._tDur) + (r - b._start) * b._ts, t, n),
                        r !== this._time || !this._ts && !o) {
                            l = 0,
                            i && (g += this._zTime = -X);
                            break
                        }
                    }
                    b = i
                }
            else
                for (var b = this._last, w = e < 0 ? e : r; b; ) {
                    if (i = b._prev,
                    (b._act || w <= b._end) && b._ts && l !== b) {
                        if (b.parent !== this)
                            return this.render(e, t, n);
                        if (b.render(0 < b._ts ? (w - b._start) * b._ts : (b._dirty ? b.totalDuration() : b._tDur) + (w - b._start) * b._ts, t, n || j && (b._initted || b._startAt)),
                        r !== this._time || !this._ts && !o) {
                            l = 0,
                            i && (g += this._zTime = w ? -X : X);
                            break
                        }
                    }
                    b = i
                }
            if (l && !t && (this.pause(),
            l.render(f <= r ? 0 : -X)._zTime = f <= r ? 1 : -1,
            this._ts))
                return this._start = u,
                de(this),
                this.render(e, t, n);
            this._onUpdate && !t && x(this, "onUpdate", !0),
            !(g === h && this._tTime >= this.totalDuration() || !g && f) || u !== this._start && Math.abs(c) === Math.abs(this._ts) || this._lock || (!e && m || !(g === h && 0 < this._ts || !g && this._ts < 0) || oe(this, 1),
            t) || e < 0 && !f || !g && !f && h || (x(this, g === h && 0 <= e ? "onComplete" : "onReverseComplete", !0),
            !this._prom) || g < h && 0 < this.timeScale() || this._prom()
        }
        return this
    }
    ,
    t.add = function(e, t) {
        var n = this;
        if (K(t) || (t = c(this, t, e)),
        !(e instanceof Zt)) {
            if (O(e))
                return e.forEach(function(e) {
                    return n.add(e, t)
                }),
                this;
            if (q(e))
                return this.addLabel(e, t);
            if (!d(e))
                return this;
            e = Y.delayedCall(0, e)
        }
        return this !== e ? P(this, e, t) : this
    }
    ,
    t.getChildren = function(e, t, n, r) {
        void 0 === e && (e = !0),
        void 0 === t && (t = !0),
        void 0 === n && (n = !0),
        void 0 === r && (r = -F);
        for (var i = [], a = this._first; a; )
            a._start >= r && (a instanceof Y ? t && i.push(a) : (n && i.push(a),
            e && i.push.apply(i, a.getChildren(!0, t, n)))),
            a = a._next;
        return i
    }
    ,
    t.getById = function(e) {
        for (var t = this.getChildren(1, 1, 1), n = t.length; n--; )
            if (t[n].vars.id === e)
                return t[n]
    }
    ,
    t.remove = function(e) {
        return q(e) ? this.removeLabel(e) : d(e) ? this.killTweensOf(e) : (C(this, e),
        e === this._recent && (this._recent = this._last),
        S(this))
    }
    ,
    t.totalTime = function(e, t) {
        return arguments.length ? (this._forcing = 1,
        !this._dp && this._ts && (this._start = k(h.time - (0 < this._ts ? e / this._ts : (this.totalDuration() - e) / -this._ts))),
        en.prototype.totalTime.call(this, e, t),
        this._forcing = 0,
        this) : this._tTime
    }
    ,
    t.addLabel = function(e, t) {
        return this.labels[e] = c(this, t),
        this
    }
    ,
    t.removeLabel = function(e) {
        return delete this.labels[e],
        this
    }
    ,
    t.addPause = function(e, t, n) {
        t = Y.delayedCall(0, t || v, n);
        return t.data = "isPause",
        this._hasPause = 1,
        P(this, t, c(this, e))
    }
    ,
    t.removePause = function(e) {
        var t = this._first;
        for (e = c(this, e); t; )
            t._start === e && "isPause" === t.data && oe(t),
            t = t._next
    }
    ,
    t.killTweensOf = function(e, t, n) {
        for (var r = this.getTweensOf(e, n), i = r.length; i--; )
            sn !== r[i] && r[i].kill(e, t);
        return this
    }
    ,
    t.getTweensOf = function(e, t) {
        for (var n, r = [], i = A(e), a = this._first, s = K(t); a; )
            a instanceof Y ? function(e, t) {
                for (var n = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < n; )
                    ;
                return r < n
            }(a._targets, i) && (s ? (!sn || a._initted && a._ts) && a.globalTime(0) <= t && a.globalTime(a.totalDuration()) > t : !t || a.isActive()) && r.push(a) : (n = a.getTweensOf(i, t)).length && r.push.apply(r, n),
            a = a._next;
        return r
    }
    ,
    t.tweenTo = function(e, t) {
        t = t || {};
        var n, r = this, i = c(r, e), a = t.startAt, s = t.onStart, o = t.onStartParams, e = t.immediateRender, l = Y.to(r, I({
            ease: t.ease || "none",
            lazy: !1,
            immediateRender: !1,
            time: i,
            overwrite: "auto",
            duration: t.duration || Math.abs((i - (a && "time"in a ? a.time : r._time)) / r.timeScale()) || X,
            onStart: function() {
                var e;
                r.pause(),
                n || (e = t.duration || Math.abs((i - (a && "time"in a ? a.time : r._time)) / r.timeScale()),
                l._dur !== e && ge(l, e, 0, 1).render(l._time, !0, !0),
                n = 1),
                s && s.apply(l, o || [])
            }
        }, t));
        return e ? l.render(0) : l
    }
    ,
    t.tweenFromTo = function(e, t, n) {
        return this.tweenTo(t, I({
            startAt: {
                time: c(this, e)
            }
        }, n))
    }
    ,
    t.recent = function() {
        return this._recent
    }
    ,
    t.nextLabel = function(e) {
        return void 0 === e && (e = this._time),
        Pe(this, c(this, e))
    }
    ,
    t.previousLabel = function(e) {
        return void 0 === e && (e = this._time),
        Pe(this, c(this, e), 1)
    }
    ,
    t.currentLabel = function(e) {
        return arguments.length ? this.seek(e, !0) : this.previousLabel(this._time + X)
    }
    ,
    t.shiftChildren = function(e, t, n) {
        void 0 === n && (n = 0);
        for (var r, i = this._first, a = this.labels; i; )
            i._start >= n && (i._start += e,
            i._end += e),
            i = i._next;
        if (t)
            for (r in a)
                a[r] >= n && (a[r] += e);
        return S(this)
    }
    ,
    t.invalidate = function(e) {
        var t = this._first;
        for (this._lock = 0; t; )
            t.invalidate(e),
            t = t._next;
        return en.prototype.invalidate.call(this, e)
    }
    ,
    t.clear = function(e) {
        void 0 === e && (e = !0);
        for (var t, n = this._first; n; )
            t = n._next,
            this.remove(n),
            n = t;
        return this._dp && (this._time = this._tTime = this._pTime = 0),
        e && (this.labels = {}),
        S(this)
    }
    ,
    t.totalDuration = function(e) {
        var t, n, r, i = 0, a = this, s = a._last, o = F;
        if (arguments.length)
            return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -e : e));
        if (a._dirty) {
            for (r = a.parent; s; )
                t = s._prev,
                s._dirty && s.totalDuration(),
                o < (n = s._start) && a._sort && s._ts && !a._lock ? (a._lock = 1,
                P(a, s, n - s._delay, 1)._lock = 0) : o = n,
                n < 0 && s._ts && (i -= n,
                (!r && !a._dp || r && r.smoothChildTiming) && (a._start += n / a._ts,
                a._time -= n,
                a._tTime -= n),
                a.shiftChildren(-n, !1, -1 / 0),
                o = 0),
                s._end > i && s._ts && (i = s._end),
                s = t;
            ge(a, a === R && a._time > i ? a._time : i, 1, 1),
            a._dirty = 0
        }
        return a._tDur
    }
    ,
    tn.updateRoot = function(e) {
        if (R._ts && (b(R, ue(e, R)),
        Ke = h.frame),
        h.frame >= Nt) {
            Nt += H.autoSleep || 120;
            var t = R._first;
            if ((!t || !t._ts) && H.autoSleep && h._listeners.length < 2) {
                for (; t && !t._ts; )
                    t = t._next;
                t || h.sleep()
            }
        }
    }
    ;
    var en, D = tn;
    function tn(e, t) {
        var n;
        return (n = en.call(this, e = void 0 === e ? {} : e) || this).labels = {},
        n.smoothChildTiming = !!e.smoothChildTiming,
        n.autoRemoveChildren = !!e.autoRemoveChildren,
        n._sort = z(e.sortChildren),
        R && P(e.parent || R, L(n), t),
        e.reversed && n.reverse(),
        e.paused && n.paused(!0),
        e.scrollTrigger && he(L(n), e.scrollTrigger),
        n
    }
    function nn(e, t, n, r, i, a) {
        var s, o, l, c;
        if (W[e] && !1 !== (s = new W[e]).init(i, s.rawVars ? t[e] : function(e, t, n, r, i) {
            if (!M(e = d(e) ? an(e, i, t, n, r) : e) || e.style && e.nodeType || O(e) || xt(e))
                return q(e) ? an(e, i, t, n, r) : e;
            var a, s = {};
            for (a in e)
                s[a] = an(e[a], i, t, n, r);
            return s
        }(t[e], r, i, a, n), n, r, a) && (n._pt = o = new G(n._pt,i,e,0,1,s.render,s,0,s.priority),
        n !== jn))
            for (l = n._ptLookup[n._targets.indexOf(i)],
            c = s._props.length; c--; )
                l[s._props[c]] = o;
        return s
    }
    I(D.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    function rn(e, t, n) {
        var r, i, a, s, o, l, c, u, d, p, f, h, m, g = e.vars, v = g.ease, y = g.startAt, b = g.immediateRender, w = g.lazy, x = g.onUpdate, T = g.onUpdateParams, _ = g.callbackScope, E = g.runBackwards, C = g.yoyoEase, S = g.keyframes, M = g.autoRevert, k = e._dur, P = e._startAt, O = e._targets, A = e.parent, $ = A && "nested" === A.data ? A.vars.targets : O, D = "auto" === e._overwrite && !Ye, L = e.timeline;
        if (e._ease = Vt(v = !L || S && v ? v : "none", ht.ease),
        e._yEase = C ? Gt(Vt(!0 === C ? v : C, ht.ease)) : 0,
        C && e._yoyo && !e._repeat && (C = e._yEase,
        e._yEase = e._ease,
        e._ease = C),
        e._from = !L && !!g.runBackwards,
        !L || S && !g.stagger) {
            if (h = (u = O[0] ? ne(O[0]).harness : 0) && g[u.prop],
            r = ae(g, $t),
            P && (P._zTime < 0 && P.progress(1),
            t < 0 && E && b && !M ? P.render(-1, !0) : P.revert(E && k ? Ot : Pt),
            P._lazy = 0),
            y) {
                if (oe(e._startAt = Y.set(O, I({
                    data: "isStart",
                    overwrite: !1,
                    parent: A,
                    immediateRender: !0,
                    lazy: z(w),
                    startAt: null,
                    delay: 0,
                    onUpdate: x,
                    onUpdateParams: T,
                    callbackScope: _,
                    stagger: 0
                }, y))),
                t < (e._startAt._dp = 0) && (j || !b && !M) && e._startAt.revert(Ot),
                b && k && t <= 0 && n <= 0)
                    return void (t && (e._zTime = t))
            } else if (E && k && !P)
                if (a = I({
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: (b = t ? !1 : b) && z(w),
                    immediateRender: b,
                    stagger: 0,
                    parent: A
                }, r),
                h && (a[u.prop] = h),
                oe(e._startAt = Y.set(O, a)),
                t < (e._startAt._dp = 0) && (j ? e._startAt.revert(Ot) : e._startAt.render(-1, !0)),
                e._zTime = t,
                b) {
                    if (!t)
                        return
                } else
                    rn(e._startAt, X, X);
            for (e._pt = e._ptCache = 0,
            w = k && z(w) || w && !k,
            i = 0; i < O.length; i++) {
                if (c = (o = O[i])._gsap || te(O)[i]._gsap,
                e._ptLookup[i] = p = {},
                Lt[c.id] && Dt.length && ie(),
                f = $ === O ? i : $.indexOf(o),
                u && !1 !== (d = new u).init(o, h || r, e, f, $) && (e._pt = s = new G(e._pt,o,d.name,0,1,d.render,d,0,d.priority),
                d._props.forEach(function(e) {
                    p[e] = s
                }),
                d.priority) && (l = 1),
                !u || h)
                    for (a in r)
                        W[a] && (d = nn(a, r, e, f, o, $)) ? d.priority && (l = 1) : p[a] = s = cn.call(e, o, a, "get", r[a], f, $, 0, g.stringFilter);
                e._op && e._op[i] && e.kill(o, e._op[i]),
                D && e._pt && (sn = e,
                R.killTweensOf(o, p, e.globalTime(t)),
                m = !e.parent,
                sn = 0),
                e._pt && w && (Lt[c.id] = 1)
            }
            l && En(e),
            e._onInit && e._onInit(e)
        }
        e._onUpdate = x,
        e._initted = (!e._op || e._pt) && !m,
        S && t <= 0 && L.render(F, !0, !0)
    }
    function an(e, t, n, r, i) {
        return d(e) ? e.call(t, n, r, i) : q(e) && ~e.indexOf("random(") ? ke(e) : e
    }
    var sn, on, ln, cn = function(e, t, n, r, i, a, s, o, l, c) {
        d(r) && (r = r(i || 0, e, a));
        var u, i = e[t], a = "get" !== n ? n : d(i) ? l ? e[t.indexOf("set") || !d(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](l) : e[t]() : i, n = d(i) ? l ? gn : mn : hn;
        if (!q(r) || "=" !== (r = ~r.indexOf("random(") ? ke(r) : r).charAt(1) || !(u = re(a, r) + (B(a) || 0)) && 0 !== u || (r = u),
        !c || a !== r || on)
            return isNaN(a * r) || "" === r ? (i || t in e || J(t, r),
            function(e, t, n, r, i, a, s) {
                var o, l, c, u, d, p = new G(this._pt,e,t,0,1,bn,null,i), f = 0, h = 0;
                for (p.b = n,
                p.e = r,
                n += "",
                (i = ~(r += "").indexOf("random(")) && (r = ke(r)),
                a && (a(a = [n, r], e, t),
                n = a[0],
                r = a[1]),
                o = n.match(Ct) || []; u = Ct.exec(r); )
                    c = u[0],
                    u = r.substring(f, u.index),
                    l ? l = (l + 1) % 5 : "rgba(" === u.substr(-5) && (l = 1),
                    c !== o[h++] && (d = parseFloat(o[h - 1]) || 0,
                    p._pt = {
                        _next: p._pt,
                        p: u || 1 === h ? u : ",",
                        s: d,
                        c: "=" === c.charAt(1) ? re(d, c) - d : parseFloat(c) - d,
                        m: l && l < 4 ? Math.round : 0
                    },
                    f = Ct.lastIndex);
                return p.c = f < r.length ? r.substring(f, r.length) : "",
                p.fp = s,
                (St.test(r) || i) && (p.e = 0),
                this._pt = p
            }
            .call(this, e, t, a, r, n, o || H.stringFilter, l)) : (u = new G(this._pt,e,t,+a || 0,r - (a || 0),"boolean" == typeof i ? yn : vn,0,n),
            l && (u.fp = l),
            s && u.modifier(s, this, e),
            this._pt = u)
    }, un = jt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", dn = {}, Y = (f(un + ",id,stagger,delay,duration,paused,scrollTrigger", function(e) {
        return dn[e] = 1
    }),
    n(i, ln = Zt),
    (t = i.prototype).render = function(e, t, n) {
        var r, i, a, s = this._time, o = this._tDur, l = this._dur, c = e < 0, u = o - X < e && !c ? o : e < X ? 0 : e;
        if (l) {
            if (u !== this._tTime || !e || n || !this._initted && this._tTime || this._startAt && this._zTime < 0 != c) {
                if (h = u,
                f = this.timeline,
                this._repeat) {
                    if (d = l + this._rDelay,
                    this._repeat < -1 && c)
                        return this.totalTime(100 * d + e, t, n);
                    if (h = k(u % d),
                    u === o ? (v = this._repeat,
                    h = l) : ((v = ~~(u / d)) && v === u / d && (h = l,
                    v--),
                    l < h && (h = l)),
                    (i = this._yoyo && 1 & v) && (p = this._yEase,
                    h = l - h),
                    b = He(this._tTime, d),
                    h === s && !n && this._initted)
                        return this._tTime = u,
                        this;
                    v !== b && (f && this._yEase && Ne(f, i),
                    !this.vars.repeatRefresh || i || this._lock || (this._lock = n = 1,
                    this.render(k(d * v), !0).invalidate()._lock = 0))
                }
                if (!this._initted) {
                    if (me(this, c ? e : h, n, t, u))
                        return this._tTime = 0,
                        this;
                    if (s !== this._time)
                        return this;
                    if (l !== this._dur)
                        return this.render(e, t, n)
                }
                if (this._tTime = u,
                this._time = h,
                !this._act && this._ts && (this._act = 1,
                this._lazy = 0),
                this.ratio = a = (p || this._ease)(h / l),
                this._from && (this.ratio = a = 1 - a),
                h && !s && !t && (x(this, "onStart"),
                this._tTime !== u))
                    return this;
                for (r = this._pt; r; )
                    r.r(a, r.d),
                    r = r._next;
                f && f.render(e < 0 ? e : !h && i ? -X : f._dur * f._ease(h / this._dur), t, n) || this._startAt && (this._zTime = e),
                this._onUpdate && !t && (c && le(this, e, 0, n),
                x(this, "onUpdate")),
                this._repeat && v !== b && this.vars.onRepeat && !t && this.parent && x(this, "onRepeat"),
                u !== this._tDur && u || this._tTime !== u || (c && !this._onUpdate && le(this, e, 0, !0),
                !e && l || !(u === this._tDur && 0 < this._ts || !u && this._ts < 0) || oe(this, 1),
                t) || c && !s || !(u || s || i) || (x(this, u === o ? "onComplete" : "onReverseComplete", !0),
                !this._prom) || u < o && 0 < this.timeScale() || this._prom()
            }
        } else {
            var d = this;
            var p = e;
            var f = t;
            var h = n;
            var m, g, v = d.ratio, y = p < 0 || !p && (!d._start && function e(t) {
                t = t.parent;
                return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || e(t))
            }(d) && (d._initted || !Fe(d)) || (d._ts < 0 || d._dp._ts < 0) && !Fe(d)) ? 0 : 1, b = d._rDelay, l = 0;
            if (b && d._repeat && (l = Xe(0, d._tDur, p),
            g = He(l, b),
            d._yoyo && 1 & g && (y = 1 - y),
            g !== He(d._tTime, b)) && (v = 1 - y,
            d.vars.repeatRefresh) && d._initted && d.invalidate(),
            y !== v || j || h || d._zTime === X || !p && d._zTime) {
                if (d._initted || !me(d, p, h, f, l)) {
                    for (g = d._zTime,
                    d._zTime = p || (f ? X : 0),
                    f = f || p && !g,
                    d.ratio = y,
                    d._from && (y = 1 - y),
                    d._time = 0,
                    d._tTime = l,
                    m = d._pt; m; )
                        m.r(y, m.d),
                        m = m._next;
                    p < 0 && le(d, p, 0, !0),
                    d._onUpdate && !f && x(d, "onUpdate"),
                    l && d._repeat && !f && d.parent && x(d, "onRepeat"),
                    (p >= d._tDur || p < 0) && d.ratio === y && (y && oe(d, 1),
                    f || j || (x(d, y ? "onComplete" : "onReverseComplete", !0),
                    d._prom && d._prom()))
                }
            } else
                d._zTime || (d._zTime = p)
        }
        return this
    }
    ,
    t.targets = function() {
        return this._targets
    }
    ,
    t.invalidate = function(e) {
        return e && this.vars.runBackwards || (this._startAt = 0),
        this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0,
        this._ptLookup = [],
        this.timeline && this.timeline.invalidate(e),
        ln.prototype.invalidate.call(this, e)
    }
    ,
    t.resetTo = function(e, t, n, r) {
        Ze || h.wake(),
        this._ts || this.play();
        var i, a = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
        return this._initted || rn(this, a),
        i = this._ease(a / this._dur),
        function(e, t, n, r, i, a, s) {
            var o, l, c, u, d = (e._pt && e._ptCache || (e._ptCache = {}))[t];
            if (!d)
                for (d = e._ptCache[t] = [],
                c = e._ptLookup,
                u = e._targets.length; u--; ) {
                    if ((o = c[u][t]) && o.d && o.d._pt)
                        for (o = o.d._pt; o && o.p !== t && o.fp !== t; )
                            o = o._next;
                    if (!o)
                        return on = 1,
                        e.vars[t] = "+=0",
                        rn(e, s),
                        on = 0,
                        1;
                    d.push(o)
                }
            for (u = d.length; u--; )
                (o = (l = d[u])._pt || l).s = !r && 0 !== r || i ? o.s + (r || 0) + a * o.c : r,
                o.c = n - o.s,
                l.e && (l.e = N(n) + B(l.e)),
                l.b && (l.b = o.s + B(l.b))
        }(this, e, t, n, r, i, a) ? this.resetTo(e, t, n, r) : (pe(this, 0),
        this.parent || E(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
        this.render(0))
    }
    ,
    t.kill = function(e, t) {
        if (void 0 === t && (t = "all"),
        !(e || t && "all" !== t))
            return this._lazy = this._pt = 0,
            this.parent ? Oe(this) : this;
        if (this.timeline)
            p = this.timeline.totalDuration(),
            this.timeline.killTweensOf(e, t, sn && !0 !== sn.vars.overwrite)._first || Oe(this),
            this.parent && p !== this.timeline.totalDuration() && ge(this, this._dur * this.timeline._tDur / p, 0, 1);
        else {
            var n, r, i, a, s, o, l, c = this._targets, u = e ? A(e) : c, d = this._ptLookup, p = this._pt;
            if ((!t || "all" === t) && function(e, t) {
                for (var n = e.length, r = n === t.length; r && n-- && e[n] === t[n]; )
                    ;
                return n < 0
            }(c, u))
                return "all" === t && (this._pt = 0),
                Oe(this);
            for (n = this._op = this._op || [],
            "all" !== t && (q(t) && (s = {},
            f(t, function(e) {
                return s[e] = 1
            }),
            t = s),
            t = function(e, t) {
                var n, r, i, a, e = e[0] ? ne(e[0]).harness : 0, s = e && e.aliases;
                if (!s)
                    return t;
                for (r in n = Be({}, t),
                s)
                    if (r in n)
                        for (i = (a = s[r].split(",")).length; i--; )
                            n[a[i]] = n[r];
                return n
            }(c, t)),
            l = c.length; l--; )
                if (~u.indexOf(c[l]))
                    for (s in r = d[l],
                    "all" === t ? (n[l] = t,
                    a = r,
                    i = {}) : (i = n[l] = n[l] || {},
                    a = t),
                    a)
                        (o = r && r[s]) && ("kill"in o.d && !0 !== o.d.kill(s) || C(this, o, "_pt"),
                        delete r[s]),
                        "all" !== i && (i[s] = 1);
            this._initted && !this._pt && p && Oe(this)
        }
        return this
    }
    ,
    i.to = function(e, t, n) {
        return new i(e,t,n)
    }
    ,
    i.from = function(e, t) {
        return ye(1, arguments)
    }
    ,
    i.delayedCall = function(e, t, n, r) {
        return new i(t,0,{
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: e,
            onComplete: t,
            onReverseComplete: t,
            onCompleteParams: n,
            onReverseCompleteParams: n,
            callbackScope: r
        })
    }
    ,
    i.fromTo = function(e, t, n) {
        return ye(2, arguments)
    }
    ,
    i.set = function(e, t) {
        return t.duration = 0,
        t.repeatDelay || (t.repeat = 0),
        new i(e,t)
    }
    ,
    i.killTweensOf = function(e, t, n) {
        return R.killTweensOf(e, t, n)
    }
    ,
    i);
    function i(e, t, n, r) {
        var i;
        "number" == typeof t && (n.duration = t,
        t = n,
        n = null);
        var a, s, o, l, c, u, d, p, r = (i = ln.call(this, r ? t : se(t)) || this).vars, f = r.duration, h = r.delay, m = r.immediateRender, g = r.stagger, v = r.overwrite, y = r.keyframes, b = r.defaults, w = r.scrollTrigger, x = r.yoyoEase, r = t.parent || R, T = (O(e) || xt(e) ? K(e[0]) : "length"in t) ? [e] : A(e);
        if (i._targets = T.length ? te(T) : ee("GSAP target " + e + " not found. https://greensock.com", !H.nullTargetWarn) || [],
        i._ptLookup = [],
        i._overwrite = v,
        y || g || Z(f) || Z(h)) {
            if (t = i.vars,
            (a = i.timeline = new D({
                data: "nested",
                defaults: b || {},
                targets: r && "nested" === r.data ? r.vars.targets : T
            })).kill(),
            a.parent = a._dp = L(i),
            a._start = 0,
            g || Z(f) || Z(h)) {
                if (l = T.length,
                d = g && _e(g),
                M(g))
                    for (c in g)
                        ~un.indexOf(c) && ((p = p || {})[c] = g[c]);
                for (s = 0; s < l; s++)
                    (o = ae(t, dn)).stagger = 0,
                    x && (o.yoyoEase = x),
                    p && Be(o, p),
                    u = T[s],
                    o.duration = +an(f, L(i), s, u, T),
                    o.delay = (+an(h, L(i), s, u, T) || 0) - i._delay,
                    !g && 1 === l && o.delay && (i._delay = h = o.delay,
                    i._start += h,
                    o.delay = 0),
                    a.to(u, o, d ? d(s, u, T) : 0),
                    a._ease = $.none;
                a.duration() ? f = h = 0 : i.timeline = 0
            } else if (y) {
                se(I(a.vars.defaults, {
                    ease: "none"
                })),
                a._ease = Vt(y.ease || t.ease || "none");
                var _, E, C, S = 0;
                if (O(y))
                    y.forEach(function(e) {
                        return a.to(T, e, ">")
                    }),
                    a.duration();
                else {
                    for (c in o = {},
                    y)
                        "ease" !== c && "easeEach" !== c && function(e, n, t, r) {
                            var i, a, s = n.ease || r || "power1.inOut";
                            if (O(n))
                                a = t[e] || (t[e] = []),
                                n.forEach(function(e, t) {
                                    return a.push({
                                        t: t / (n.length - 1) * 100,
                                        v: e,
                                        e: s
                                    })
                                });
                            else
                                for (i in n)
                                    a = t[i] || (t[i] = []),
                                    "ease" !== i && a.push({
                                        t: parseFloat(e),
                                        v: n[i],
                                        e: s
                                    })
                        }(c, y[c], o, y.easeEach);
                    for (c in o)
                        for (_ = o[c].sort(function(e, t) {
                            return e.t - t.t
                        }),
                        s = S = 0; s < _.length; s++)
                            (C = {
                                ease: (E = _[s]).e,
                                duration: (E.t - (s ? _[s - 1].t : 0)) / 100 * f
                            })[c] = E.v,
                            a.to(T, C, S),
                            S += C.duration;
                    a.duration() < f && a.to({}, {
                        duration: f - a.duration()
                    })
                }
            }
            f || i.duration(f = a.duration())
        } else
            i.timeline = 0;
        return !0 !== v || Ye || (sn = L(i),
        R.killTweensOf(T),
        sn = 0),
        P(r, L(i), n),
        t.reversed && i.reverse(),
        t.paused && i.paused(!0),
        (m || !f && !y && i._start === k(r._time) && z(m) && function e(t) {
            return !t || t._ts && e(t.parent)
        }(L(i)) && "nested" !== r.data) && (i._tTime = -X,
        i.render(Math.max(0, -h) || 0)),
        w && he(L(i), w),
        i
    }
    function pn(e, t, n) {
        return e.setAttribute(t, n)
    }
    function fn(e, t, n, r) {
        r.mSet(e, t, r.m.call(r.tween, n, r.mt), r)
    }
    I(Y.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }),
    f("staggerTo,staggerFrom,staggerFromTo", function(n) {
        Y[n] = function() {
            var e = new D
              , t = qt.call(arguments, 0);
            return t.splice("staggerFromTo" === n ? 5 : 4, 0, 0),
            e[n].apply(e, t)
        }
    });
    function hn(e, t, n) {
        return e[t] = n
    }
    function mn(e, t, n) {
        return e[t](n)
    }
    function gn(e, t, n, r) {
        return e[t](r.fp, n)
    }
    function vn(e, t) {
        return t.set(t.t, t.p, Math.round(1e6 * (t.s + t.c * e)) / 1e6, t)
    }
    function yn(e, t) {
        return t.set(t.t, t.p, !!(t.s + t.c * e), t)
    }
    function bn(e, t) {
        var n = t._pt
          , r = "";
        if (!e && t.b)
            r = t.b;
        else if (1 === e && t.e)
            r = t.e;
        else {
            for (; n; )
                r = n.p + (n.m ? n.m(n.s + n.c * e) : Math.round(1e4 * (n.s + n.c * e)) / 1e4) + r,
                n = n._next;
            r += t.c
        }
        t.set(t.t, t.p, r, t)
    }
    function wn(e, t) {
        for (var n = t._pt; n; )
            n.r(e, n.d),
            n = n._next
    }
    function xn(e, t, n, r) {
        for (var i, a = this._pt; a; )
            i = a._next,
            a.p === r && a.modifier(e, t, n),
            a = i
    }
    function Tn(e) {
        for (var t, n, r = this._pt; r; )
            n = r._next,
            r.p === e && !r.op || r.op === e ? C(this, r, "_pt") : r.dep || (t = 1),
            r = n;
        return !t
    }
    var _n = function(e, t) {
        return d(e[t]) ? mn : a(e[t]) && e.setAttribute ? pn : hn
    }
      , En = function(e) {
        for (var t, n, r, i, a = e._pt; a; ) {
            for (t = a._next,
            n = r; n && n.pr > a.pr; )
                n = n._next;
            (a._prev = n ? n._prev : i) ? a._prev._next = a : r = a,
            (a._next = n) ? n._prev = a : i = a,
            a = t
        }
        e._pt = r
    }
      , G = (Cn.prototype.modifier = function(e, t, n) {
        this.mSet = this.mSet || this.set,
        this.set = fn,
        this.m = e,
        this.mt = n,
        this.tween = t
    }
    ,
    Cn);
    function Cn(e, t, n, r, i, a, s, o, l) {
        this.t = t,
        this.s = r,
        this.c = i,
        this.p = n,
        this.r = a || vn,
        this.d = s || this,
        this.set = o || hn,
        this.pr = l || 0,
        (this._next = e) && (e._prev = this)
    }
    function Sn(e) {
        (Pn[e] || On).map(function(e) {
            return e()
        })
    }
    function Mn() {
        var e = Date.now()
          , o = [];
        2 < e - An && (Sn("matchMediaInit"),
        kn.forEach(function(e) {
            var t, n, r, i, a = e.queries, s = e.conditions;
            for (n in a)
                (t = l.matchMedia(a[n]).matches) && (r = 1),
                t !== s[n] && (s[n] = t,
                i = 1);
            i && (e.revert(),
            r) && o.push(e)
        }),
        Sn("matchMediaRevert"),
        o.forEach(function(e) {
            return e.onMatch(e)
        }),
        An = e,
        Sn("matchMedia"))
    }
    f(jt + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(e) {
        return $t[e] = 1
    }),
    s.TweenMax = s.TweenLite = Y,
    s.TimelineLite = s.TimelineMax = D,
    R = new D({
        sortChildren: !1,
        defaults: ht,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }),
    H.stringFilter = ze;
    var kn = []
      , Pn = {}
      , On = []
      , An = 0
      , $n = ((t = Dn.prototype).add = function(e, r, i) {
        function t() {
            var e, t = o, n = a.selector;
            return t && t !== a && t.data.push(a),
            i && (a.selector = xe(i)),
            o = a,
            d(e = r.apply(a, arguments)) && a._r.push(e),
            o = t,
            a.selector = n,
            a.isReverted = !1,
            e
        }
        d(e) && (i = r,
        r = e,
        e = d);
        var a = this;
        return a.last = t,
        e === d ? t(a) : e ? a[e] = t : t
    }
    ,
    t.ignore = function(e) {
        var t = o;
        o = null,
        e(this),
        o = t
    }
    ,
    t.getTweens = function() {
        var t = [];
        return this.data.forEach(function(e) {
            return e instanceof Dn ? t.push.apply(t, e.getTweens()) : e instanceof Y && !(e.parent && "nested" === e.parent.data) && t.push(e)
        }),
        t
    }
    ,
    t.clear = function() {
        this._r.length = this.data.length = 0
    }
    ,
    t.kill = function(t, e) {
        var n, r = this;
        t ? (n = this.getTweens(),
        this.data.forEach(function(e) {
            "isFlip" === e.data && (e.revert(),
            e.getChildren(!0, !0, !1).forEach(function(e) {
                return n.splice(n.indexOf(e), 1)
            }))
        }),
        n.map(function(e) {
            return {
                g: e.globalTime(0),
                t: e
            }
        }).sort(function(e, t) {
            return t.g - e.g || -1
        }).forEach(function(e) {
            return e.t.revert(t)
        }),
        this.data.forEach(function(e) {
            return !(e instanceof Zt) && e.revert && e.revert(t)
        }),
        this._r.forEach(function(e) {
            return e(t, r)
        }),
        this.isReverted = !0) : this.data.forEach(function(e) {
            return e.kill && e.kill()
        }),
        this.clear(),
        e && ~(e = kn.indexOf(this)) && kn.splice(e, 1)
    }
    ,
    t.revert = function(e) {
        this.kill(e || {})
    }
    ,
    Dn);
    function Dn(e, t) {
        this.selector = t && xe(t),
        this.data = [],
        this._r = [],
        this.isReverted = !1,
        e && this.add(e)
    }
    (t = zn.prototype).add = function(e, t, n) {
        M(e) || (e = {
            matches: e
        });
        var r, i, a, s = new $n(0,n || this.scope), o = s.conditions = {};
        for (i in this.contexts.push(s),
        t = s.add("onMatch", t),
        s.queries = e)
            "all" === i ? a = 1 : (r = l.matchMedia(e[i])) && (kn.indexOf(s) < 0 && kn.push(s),
            (o[i] = r.matches) && (a = 1),
            r.addListener ? r.addListener(Mn) : r.addEventListener("change", Mn));
        return a && t(s),
        this
    }
    ,
    t.revert = function(e) {
        this.kill(e || {})
    }
    ,
    t.kill = function(t) {
        this.contexts.forEach(function(e) {
            return e.kill(t, !0)
        })
    }
    ;
    var Ln = zn;
    function zn(e) {
        this.contexts = [],
        this.scope = e
    }
    var Nn = {
        registerPlugin: function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            t.forEach(function(e) {
                var t = (e = !e.name && e.default || e).name
                  , n = d(e)
                  , n = t && !n && e.init ? function() {
                    this._props = []
                }
                : e
                  , r = {
                    init: v,
                    render: wn,
                    add: cn,
                    kill: Tn,
                    modifier: xn,
                    rawVars: 0
                }
                  , i = {
                    targetTest: 0,
                    get: 0,
                    getSetter: _n,
                    aliases: {},
                    register: 0
                };
                if (Xt(),
                e !== n) {
                    if (W[t])
                        return;
                    I(n, I(ae(e, r), i)),
                    Be(n.prototype, Be(r, ae(e, i))),
                    W[n.prop = t] = n,
                    e.targetTest && (It.push(n),
                    $t[t] = 1),
                    t = ("css" === t ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin"
                }
                g(t, n),
                e.register && e.register(u, n, G)
            })
        },
        timeline: function(e) {
            return new D(e)
        },
        getTweensOf: function(e, t) {
            return R.getTweensOf(e, t)
        },
        getProperty: function(r, e, t, n) {
            var i = ne((r = q(r) ? A(r)[0] : r) || {}).get
              , a = t ? T : w;
            return "native" === t && (t = ""),
            r && (e ? a((W[e] && W[e].get || i)(r, e, t, n)) : function(e, t, n) {
                return a((W[e] && W[e].get || i)(r, e, t, n))
            }
            )
        },
        quickSetter: function(n, t, r) {
            var i, a;
            if (1 < (n = A(n)).length)
                return i = n.map(function(e) {
                    return u.quickSetter(e, t, r)
                }),
                a = i.length,
                function(e) {
                    for (var t = a; t--; )
                        i[t](e)
                }
                ;
            n = n[0] || {};
            var s = W[t]
              , o = ne(n)
              , l = o.harness && (o.harness.aliases || {})[t] || t
              , c = s ? function(e) {
                var t = new s;
                jn._pt = 0,
                t.init(n, r ? e + r : e, jn, 0, [n]),
                t.render(1, t),
                jn._pt && wn(1, jn)
            }
            : o.set(n, l);
            return s ? c : function(e) {
                return c(n, l, r ? e + r : e, o, 1)
            }
        },
        quickTo: function(e, r, t) {
            function n(e, t, n) {
                return i.resetTo(r, e, t, n)
            }
            var i = u.to(e, Be(((e = {})[r] = "+=0.1",
            e.paused = !0,
            e), t || {}));
            return n.tween = i,
            n
        },
        isTweening: function(e) {
            return 0 < R.getTweensOf(e, !0).length
        },
        defaults: function(e) {
            return e && e.ease && (e.ease = Vt(e.ease, ht.ease)),
            _(ht, e || {})
        },
        config: function(e) {
            return _(H, e || {})
        },
        registerEffect: function(e) {
            var r = e.name
              , i = e.effect
              , t = e.plugins
              , a = e.defaults
              , e = e.extendTimeline;
            (t || "").split(",").forEach(function(e) {
                return e && !W[e] && !s[e] && ee(r + " effect requires " + e + " plugin.")
            }),
            zt[r] = function(e, t, n) {
                return i(A(e), I(t || {}, a), n)
            }
            ,
            e && (D.prototype[r] = function(e, t, n) {
                return this.add(zt[r](e, M(t) ? t : (n = t) && {}, this), n)
            }
            )
        },
        registerEase: function(e, t) {
            $[e] = Vt(t)
        },
        parseEase: function(e, t) {
            return arguments.length ? Vt(e, t) : $
        },
        getById: function(e) {
            return R.getById(e)
        },
        exportRoot: function(e, t) {
            var n, r, i = new D(e = void 0 === e ? {} : e);
            for (i.smoothChildTiming = z(e.smoothChildTiming),
            R.remove(i),
            i._dp = 0,
            i._time = i._tTime = R._time,
            n = R._first; n; )
                r = n._next,
                !t && !n._dur && n instanceof Y && n.vars.onComplete === n._targets[0] || P(i, n, n._start - n._delay),
                n = r;
            return P(R, i, 0),
            i
        },
        context: function(e, t) {
            return e ? new $n(e,t) : o
        },
        matchMedia: function(e) {
            return new Ln(e)
        },
        matchMediaRefresh: function() {
            return kn.forEach(function(e) {
                var t, n, r = e.conditions;
                for (n in r)
                    r[n] && (r[n] = !1,
                    t = 1);
                t && e.revert()
            }) || Mn()
        },
        addEventListener: function(e, t) {
            e = Pn[e] || (Pn[e] = []);
            ~e.indexOf(t) || e.push(t)
        },
        removeEventListener: function(e, t) {
            e = Pn[e],
            t = e && e.indexOf(t);
            0 <= t && e.splice(t, 1)
        },
        utils: {
            wrap: function e(t, n, r) {
                var i = n - t;
                return O(t) ? Me(t, e(0, t.length), n) : be(r, function(e) {
                    return (i + (e - t) % i) % i + t
                })
            },
            wrapYoyo: function e(t, n, r) {
                var i = n - t
                  , a = 2 * i;
                return O(t) ? Me(t, e(0, t.length - 1), n) : be(r, function(e) {
                    return t + (i < (e = (a + (e - t) % a) % a || 0) ? a - e : e)
                })
            },
            distribute: _e,
            random: Se,
            snap: Ce,
            normalize: function(e, t, n) {
                return We(e, t, 0, 1, n)
            },
            getUnit: B,
            clamp: function(t, n, e) {
                return be(e, function(e) {
                    return Xe(t, n, e)
                })
            },
            splitColor: $e,
            toArray: A,
            selector: xe,
            mapRange: We,
            pipe: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                return function(e) {
                    return t.reduce(function(e, t) {
                        return t(e)
                    }, e)
                }
            },
            unitize: function(t, n) {
                return function(e) {
                    return t(parseFloat(e)) + (n || B(e))
                }
            },
            interpolate: function e(t, n, r, i) {
                var a = isNaN(t + n) ? 0 : function(e) {
                    return (1 - e) * t + e * n
                }
                ;
                if (!a) {
                    var s, o, l, c, u, d = q(t), p = {};
                    if (!0 === r && (i = 1,
                    r = null),
                    d)
                        t = {
                            p: t
                        },
                        n = {
                            p: n
                        };
                    else if (O(t) && !O(n)) {
                        for (l = [],
                        c = t.length,
                        u = c - 2,
                        o = 1; o < c; o++)
                            l.push(e(t[o - 1], t[o]));
                        c--,
                        a = function(e) {
                            e *= c;
                            var t = Math.min(u, ~~e);
                            return l[t](e - t)
                        }
                        ,
                        r = n
                    } else
                        i || (t = Be(O(t) ? [] : {}, t));
                    if (!l) {
                        for (s in n)
                            cn.call(p, t, s, "get", n[s]);
                        a = function(e) {
                            return wn(e, p),
                            d ? t.p : t
                        }
                    }
                }
                return be(r, a)
            },
            shuffle: Te
        },
        install: m,
        effects: zt,
        ticker: h,
        updateRoot: D.updateRoot,
        plugins: W,
        globalTimeline: R,
        core: {
            PropTween: G,
            globals: g,
            Tween: Y,
            Timeline: D,
            Animation: Zt,
            getCache: ne,
            _removeLinkedListItem: C,
            reverting: function() {
                return j
            },
            context: function(e) {
                return e && o && (o.data.push(e),
                e._ctx = o),
                o
            },
            suppressOverwrites: function(e) {
                return Ye = e
            }
        }
    };
    function In(e, u) {
        return {
            name: e,
            rawVars: 1,
            init: function(e, c, t) {
                t._onInit = function(e) {
                    var t, n;
                    if (q(c) && (t = {},
                    f(c, function(e) {
                        return t[e] = 1
                    }),
                    c = t),
                    u) {
                        for (n in t = {},
                        c)
                            t[n] = u(c[n]);
                        c = t
                    }
                    var r, i, a, s = e, o = c, l = s._targets;
                    for (r in o)
                        for (i = l.length; i--; )
                            (a = (a = s._ptLookup[i][r]) && a.d) && (a._pt && (a = function(e, t) {
                                for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t; )
                                    n = n._next;
                                return n
                            }(a, r)),
                            a) && a.modifier && a.modifier(o[r], s, l[i], r)
                }
            }
        }
    }
    f("to,from,fromTo,delayedCall,set,killTweensOf", function(e) {
        return Nn[e] = Y[e]
    }),
    h.add(D.updateRoot);
    var jn = Nn.to({}, {
        duration: 0
    })
      , u = Nn.registerPlugin({
        name: "attr",
        init: function(e, t, n, r, i) {
            var a, s, o;
            for (a in this.tween = n,
            t)
                o = e.getAttribute(a) || "",
                (s = this.add(e, "setAttribute", (o || 0) + "", t[a], r, i, 0, 0, a)).op = a,
                s.b = o,
                this._props.push(a)
        },
        render: function(e, t) {
            for (var n = t._pt; n; )
                j ? n.set(n.t, n.p, n.b, n) : n.r(e, n.d),
                n = n._next
        }
    }, {
        name: "endArray",
        init: function(e, t) {
            for (var n = t.length; n--; )
                this.add(e, n, e[n] || 0, t[n], 0, 0, 0, 0, 0, 1)
        }
    }, In("roundProps", Ee), In("modifiers"), In("snap", Ce)) || Nn;
    function Rn(e, t) {
        return t.set(t.t, t.p, Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t)
    }
    function qn(e, t) {
        return t.set(t.t, t.p, 1 === e ? t.e : Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t)
    }
    function Bn(e, t) {
        return t.set(t.t, t.p, e ? Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u : t.b, t)
    }
    function Hn(e, t) {
        e = t.s + t.c * e;
        t.set(t.t, t.p, ~~(e + (e < 0 ? -.5 : .5)) + t.u, t)
    }
    function Fn(e, t) {
        return t.set(t.t, t.p, e ? t.e : t.b, t)
    }
    function Xn(e, t) {
        return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t)
    }
    function Wn(e, t, n) {
        return e.style[t] = n
    }
    function Yn(e, t, n) {
        return e.style.setProperty(t, n)
    }
    function Gn(e, t, n) {
        return e._gsap[t] = n
    }
    function Vn(e, t, n) {
        return e._gsap.scaleX = e._gsap.scaleY = n
    }
    function Un(e, t, n, r, i) {
        e = e._gsap;
        e.scaleX = e.scaleY = n,
        e.renderTransform(i, e)
    }
    function Qn(e, t, n, r, i) {
        e = e._gsap;
        e[t] = n,
        e.renderTransform(i, e)
    }
    function Kn(e, t) {
        var n = this
          , r = this.target
          , i = r.style;
        if (e in Hr) {
            if (this.tfm = this.tfm || {},
            "transform" !== e && (~(e = Ur[e] || e).indexOf(",") ? e.split(",").forEach(function(e) {
                return n.tfm[e] = ei(r, e)
            }) : this.tfm[e] = r._gsap.x ? r._gsap[e] : ei(r, e)),
            0 <= this.props.indexOf(U))
                return;
            r._gsap.svg && (this.svgo = r.getAttribute("data-svg-origin"),
            this.props.push(Q, t, "")),
            e = U
        }
        (i || t) && this.props.push(e, t, i[e])
    }
    function Zn(e) {
        e.translate && (e.removeProperty("translate"),
        e.removeProperty("scale"),
        e.removeProperty("rotate"))
    }
    function Jn() {
        for (var e, t = this.props, n = this.target, r = n.style, i = n._gsap, a = 0; a < t.length; a += 3)
            t[a + 1] ? n[t[a]] = t[a + 2] : t[a + 2] ? r[t[a]] = t[a + 2] : r.removeProperty(t[a].replace(Yr, "-$1").toLowerCase());
        if (this.tfm) {
            for (e in this.tfm)
                i[e] = this.tfm[e];
            i.svg && (i.renderTransform(),
            n.setAttribute("data-svg-origin", this.svgo || "")),
            !(a = _r()) || a.isStart || r[U] || (Zn(r),
            i.uncache = 1)
        }
    }
    function er(e, t) {
        var n = {
            target: e,
            props: [],
            revert: Jn,
            save: Kn
        };
        return t && t.split(",").forEach(function(e) {
            return n.save(e)
        }),
        n
    }
    function tr(e, t) {
        t = yr.createElementNS ? yr.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : yr.createElement(e);
        return t.style ? t : yr.createElement(e)
    }
    function V(e, t, n) {
        var r = getComputedStyle(e);
        return r[t] || r.getPropertyValue(t.replace(Yr, "-$1").toLowerCase()) || r.getPropertyValue(t) || !n && V(e, Kr(t) || t, 1) || ""
    }
    function nr() {
        "undefined" != typeof window && window.document && (br = (yr = window.document).documentElement,
        xr = tr("div") || {
            style: {}
        },
        tr("div"),
        U = Kr(U),
        Q = U + "Origin",
        xr.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
        Er = !!Kr("perspective"),
        _r = u.core.reverting,
        wr = 1)
    }
    function rr(e) {
        var t, n = tr("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = this.parentNode, i = this.nextSibling, a = this.style.cssText;
        if (br.appendChild(n),
        n.appendChild(this),
        this.style.display = "block",
        e)
            try {
                t = this.getBBox(),
                this._gsapBBox = this.getBBox,
                this.getBBox = rr
            } catch (e) {}
        else
            this._gsapBBox && (t = this._gsapBBox());
        return r && (i ? r.insertBefore(this, i) : r.appendChild(this)),
        br.removeChild(n),
        this.style.cssText = a,
        t
    }
    function ir(e, t) {
        for (var n = t.length; n--; )
            if (e.hasAttribute(t[n]))
                return e.getAttribute(t[n])
    }
    function ar(t) {
        var n;
        try {
            n = t.getBBox()
        } catch (e) {
            n = rr.call(t, !0)
        }
        return !(n = n && (n.width || n.height) || t.getBBox === rr ? n : rr.call(t, !0)) || n.width || n.x || n.y ? n : {
            x: +ir(t, ["x", "cx", "x1"]) || 0,
            y: +ir(t, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        }
    }
    function sr(e) {
        return !(!e.getCTM || e.parentNode && !e.ownerSVGElement || !ar(e))
    }
    function or(e, t) {
        t && (e = e.style,
        t in Hr && t !== Q && (t = U),
        e.removeProperty ? ("ms" !== t.substr(0, 2) && "webkit" !== t.substr(0, 6) || (t = "-" + t),
        e.removeProperty(t.replace(Yr, "-$1").toLowerCase())) : e.removeAttribute(t))
    }
    function lr(e, t, n, r, i, a) {
        t = new G(e._pt,t,n,0,1,a ? Xn : Fn);
        (e._pt = t).b = r,
        t.e = i,
        e._props.push(n)
    }
    function cr(e, t, n, r) {
        var i, a = parseFloat(n) || 0, s = (n + "").trim().substr((a + "").length) || "px", o = xr.style, l = Gr.test(t), c = "svg" === e.tagName.toLowerCase(), u = (c ? "client" : "offset") + (l ? "Width" : "Height"), d = "px" === r, p = "%" === r;
        return r === s || !a || Zr[r] || Zr[s] ? a : ("px" === s || d || (a = cr(e, t, n, "px")),
        n = e.getCTM && sr(e),
        !p && "%" !== s || !Hr[t] && !~t.indexOf("adius") ? (o[l ? "width" : "height"] = 100 + (d ? s : r),
        t = ~t.indexOf("adius") || "em" === r && e.appendChild && !c ? e : e.parentNode,
        (r = (t = (t = n ? (e.ownerSVGElement || {}).parentNode : t) && t !== yr && t.appendChild ? t : yr.body)._gsap) && p && r.width && l && r.time === h.time && !r.uncache ? N(a / r.width * 100) : (!p && "%" !== s || Jr[V(t, "display")] || (o.position = V(e, "position")),
        t === e && (o.position = "static"),
        t.appendChild(xr),
        i = xr[u],
        t.removeChild(xr),
        o.position = "absolute",
        l && p && ((r = ne(t)).time = h.time,
        r.width = t[u]),
        N(d ? i * a / 100 : i && a ? 100 / i * a : 0))) : (i = n ? e.getBBox()[l ? "width" : "height"] : e[u],
        N(p ? a / i * 100 : a / 100 * i)))
    }
    function ur(e, t, n, r) {
        var i;
        n && "none" !== n || ((i = (a = Kr(t, e, 1)) && V(e, a, 1)) && i !== n ? (t = a,
        n = i) : "borderColor" === t && (n = V(e, "borderTopColor")));
        var a, s, o, l, c, u, d, p, f, h = new G(this._pt,e.style,t,0,1,bn), m = 0, g = 0;
        if (h.b = n,
        h.e = r,
        n += "",
        "auto" == (r += "") && (e.style[t] = r,
        r = V(e, t) || r,
        e.style[t] = n),
        ze(a = [n, r]),
        r = a[1],
        s = (n = a[0]).match(Et) || [],
        (r.match(Et) || []).length) {
            for (; d = Et.exec(r); )
                p = d[0],
                d = r.substring(m, d.index),
                l ? l = (l + 1) % 5 : "rgba(" !== d.substr(-5) && "hsla(" !== d.substr(-5) || (l = 1),
                p !== (c = s[g++] || "") && (o = parseFloat(c) || 0,
                f = c.substr((o + "").length),
                "=" === p.charAt(1) && (p = re(o, p) + f),
                u = parseFloat(p),
                p = p.substr((u + "").length),
                m = Et.lastIndex - p.length,
                p || (p = p || H.units[t] || f,
                m === r.length && (r += p,
                h.e += p)),
                f !== p && (o = cr(e, t, c, p) || 0),
                h._pt = {
                    _next: h._pt,
                    p: d || 1 === g ? d : ",",
                    s: o,
                    c: u - o,
                    m: l && l < 4 || "zIndex" === t ? Math.round : 0
                });
            h.c = m < r.length ? r.substring(m, r.length) : ""
        } else
            h.r = "display" === t && "none" === r ? Xn : Fn;
        return St.test(r) && (h.e = 0),
        this._pt = h
    }
    function dr(e, t) {
        if (t.tween && t.tween._time === t.tween._dur) {
            var n, r, i, a = t.t, s = a.style, o = t.u, t = a._gsap;
            if ("all" === o || !0 === o)
                s.cssText = "",
                r = 1;
            else
                for (i = (o = o.split(",")).length; -1 < --i; )
                    n = o[i],
                    Hr[n] && (r = 1,
                    n = "transformOrigin" === n ? Q : U),
                    or(a, n);
            r && (or(a, U),
            t) && (t.svg && a.removeAttribute("transform"),
            ai(a, 1),
            t.uncache = 1,
            Zn(s))
        }
    }
    function pr(e) {
        return "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e
    }
    function fr(e) {
        e = V(e, U);
        return pr(e) ? ri : e.substr(7).match(_t).map(N)
    }
    function hr(e, t) {
        var n, r, i, a = e._gsap || ne(e), s = e.style, o = fr(e);
        return a.svg && e.getAttribute("transform") ? "1,0,0,1,0,0" === (o = [(r = e.transform.baseVal.consolidate().matrix).a, r.b, r.c, r.d, r.e, r.f]).join(",") ? ri : o : (o !== ri || e.offsetParent || e === br || a.svg || (r = s.display,
        s.display = "block",
        (a = e.parentNode) && e.offsetParent || (i = 1,
        n = e.nextElementSibling,
        br.appendChild(e)),
        o = fr(e),
        r ? s.display = r : or(e, "display"),
        i && (n ? a.insertBefore(e, n) : a ? a.appendChild(e) : br.removeChild(e))),
        t && 6 < o.length ? [o[0], o[1], o[4], o[5], o[12], o[13]] : o)
    }
    function mr(e, t, n, r, i, a) {
        var s, o = e._gsap, i = i || hr(e, !0), l = o.xOrigin || 0, c = o.yOrigin || 0, u = o.xOffset || 0, d = o.yOffset || 0, p = i[0], f = i[1], h = i[2], m = i[3], g = i[4], v = i[5], y = t.split(" "), b = parseFloat(y[0]) || 0, w = parseFloat(y[1]) || 0;
        n ? i !== ri && (i = p * m - f * h) && (s = b * (-f / i) + w * (p / i) - (p * v - f * g) / i,
        b = b * (m / i) + w * (-h / i) + (h * v - m * g) / i,
        w = s) : (b = (i = ar(e)).x + (~y[0].indexOf("%") ? b / 100 * i.width : b),
        w = i.y + (~(y[1] || y[0]).indexOf("%") ? w / 100 * i.height : w)),
        r || !1 !== r && o.smooth ? (o.xOffset = u + ((g = b - l) * p + (v = w - c) * h) - g,
        o.yOffset = d + (g * f + v * m) - v) : o.xOffset = o.yOffset = 0,
        o.xOrigin = b,
        o.yOrigin = w,
        o.smooth = !!r,
        o.origin = t,
        o.originIsAbsolute = !!n,
        e.style[Q] = "0px 0px",
        a && (lr(a, o, "xOrigin", l, b),
        lr(a, o, "yOrigin", c, w),
        lr(a, o, "xOffset", u, o.xOffset),
        lr(a, o, "yOffset", d, o.yOffset)),
        e.setAttribute("data-svg-origin", b + " " + w)
    }
    function gr(e, t, n) {
        var r = B(t);
        return N(parseFloat(t) + parseFloat(cr(e, "x", n + "px", r))) + r
    }
    function vr(e, t) {
        for (var n in t)
            e[n] = t[n];
        return e
    }
    Y.version = D.version = u.version = "3.11.3",
    Qe = 1,
    r() && Xt();
    var yr, br, wr, xr, Tr, _r, Er, t = $.Power0, Cr = $.Power1, Sr = $.Power2, Mr = $.Power3, kr = $.Power4, Pr = $.Linear, Or = $.Quad, Ar = $.Cubic, $r = $.Quart, Dr = $.Quint, Lr = $.Strong, zr = $.Elastic, Nr = $.Back, Ir = $.SteppedEase, jr = $.Bounce, Rr = $.Sine, qr = $.Expo, Br = $.Circ, Hr = {}, Fr = 180 / Math.PI, Xr = Math.PI / 180, Wr = Math.atan2, Yr = /([A-Z])/g, Gr = /(left|right|width|margin|padding|x)/i, Vr = /[\s,\(]\S/, Ur = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
    }, U = "transform", Q = U + "Origin", Qr = "O,Moz,ms,Ms,Webkit".split(","), Kr = function(e, t, n) {
        var r = (t || xr).style
          , i = 5;
        if (e in r && !n)
            return e;
        for (e = e.charAt(0).toUpperCase() + e.substr(1); i-- && !(Qr[i] + e in r); )
            ;
        return i < 0 ? null : (3 === i ? "ms" : 0 <= i ? Qr[i] : "") + e
    }, Zr = {
        deg: 1,
        rad: 1,
        turn: 1
    }, Jr = {
        grid: 1,
        flex: 1
    }, ei = function(e, t, n, r) {
        var i;
        return wr || nr(),
        t in Ur && "transform" !== t && ~(t = Ur[t]).indexOf(",") && (t = t.split(",")[0]),
        Hr[t] && "transform" !== t ? (i = ai(e, r),
        i = "transformOrigin" !== t ? i[t] : i.svg ? i.origin : si(V(e, Q)) + " " + i.zOrigin + "px") : (i = e.style[t]) && "auto" !== i && !r && !~(i + "").indexOf("calc(") || (i = ni[t] && ni[t](e, t, n) || V(e, t) || y(e, t) || ("opacity" === t ? 1 : 0)),
        n && !~(i + "").trim().indexOf(" ") ? cr(e, t, i, n) + n : i
    }, ti = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
    }, ni = {
        clearProps: function(e, t, n, r, i) {
            if ("isFromStart" !== i.data)
                return (t = e._pt = new G(e._pt,t,n,0,0,dr)).u = r,
                t.pr = -10,
                t.tween = i,
                e._props.push(n),
                1
        }
    }, ri = [1, 0, 0, 1, 0, 0], ii = {}, ai = function(e, t) {
        var n, r, i, a, s, o, l, c, u, d, p, f, h, m, g, v, y, b, w, x, T, _, E, C, S, M, k, P, O, A, $, D, L = e._gsap || new Kt(e);
        return "x"in L && !t && !L.uncache || (M = e.style,
        k = L.scaleX < 0,
        P = "deg",
        O = getComputedStyle(e),
        A = V(e, Q) || "0",
        $ = n = r = a = s = o = l = c = 0,
        D = i = 1,
        L.svg = !(!e.getCTM || !sr(e)),
        O.translate && ("none" === O.translate && "none" === O.scale && "none" === O.rotate || (M[U] = ("none" !== O.translate ? "translate3d(" + (O.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== O.rotate ? "rotate(" + O.rotate + ") " : "") + ("none" !== O.scale ? "scale(" + O.scale.split(" ").join(",") + ") " : "") + ("none" !== O[U] ? O[U] : "")),
        M.scale = M.rotate = M.translate = "none"),
        O = hr(e, L.svg),
        L.svg && (y = L.uncache ? (b = e.getBBox(),
        A = L.xOrigin - b.x + "px " + (L.yOrigin - b.y) + "px",
        "") : !t && e.getAttribute("data-svg-origin"),
        mr(e, y || A, !!y || L.originIsAbsolute, !1 !== L.smooth, O)),
        S = L.xOrigin || 0,
        E = L.yOrigin || 0,
        O !== ri && (p = O[0],
        f = O[1],
        h = O[2],
        m = O[3],
        $ = g = O[4],
        n = v = O[5],
        6 === O.length ? (D = Math.sqrt(p * p + f * f),
        i = Math.sqrt(m * m + h * h),
        a = p || f ? Wr(f, p) * Fr : 0,
        (l = h || m ? Wr(h, m) * Fr + a : 0) && (i *= Math.abs(Math.cos(l * Xr))),
        L.svg && ($ -= S - (S * p + E * h),
        n -= E - (S * f + E * m))) : (S = O[6],
        E = O[7],
        x = O[8],
        T = O[9],
        _ = O[10],
        C = O[11],
        $ = O[12],
        n = O[13],
        r = O[14],
        s = (O = Wr(S, _)) * Fr,
        O && (y = g * (u = Math.cos(-O)) + x * (d = Math.sin(-O)),
        b = v * u + T * d,
        w = S * u + _ * d,
        x = g * -d + x * u,
        T = v * -d + T * u,
        _ = S * -d + _ * u,
        C = E * -d + C * u,
        g = y,
        v = b,
        S = w),
        o = (O = Wr(-h, _)) * Fr,
        O && (u = Math.cos(-O),
        C = m * (d = Math.sin(-O)) + C * u,
        p = y = p * u - x * d,
        f = b = f * u - T * d,
        h = w = h * u - _ * d),
        a = (O = Wr(f, p)) * Fr,
        O && (y = p * (u = Math.cos(O)) + f * (d = Math.sin(O)),
        b = g * u + v * d,
        f = f * u - p * d,
        v = v * u - g * d,
        p = y,
        g = b),
        s && 359.9 < Math.abs(s) + Math.abs(a) && (s = a = 0,
        o = 180 - o),
        D = N(Math.sqrt(p * p + f * f + h * h)),
        i = N(Math.sqrt(v * v + S * S)),
        O = Wr(g, v),
        l = 2e-4 < Math.abs(O) ? O * Fr : 0,
        c = C ? 1 / (C < 0 ? -C : C) : 0),
        L.svg) && (y = e.getAttribute("transform"),
        L.forceCSS = e.setAttribute("transform", "") || !pr(V(e, U)),
        y) && e.setAttribute("transform", y),
        90 < Math.abs(l) && Math.abs(l) < 270 && (k ? (D *= -1,
        l += a <= 0 ? 180 : -180,
        a += a <= 0 ? 180 : -180) : (i *= -1,
        l += l <= 0 ? 180 : -180)),
        t = t || L.uncache,
        L.x = $ - ((L.xPercent = $ && (!t && L.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-$) ? -50 : 0))) ? e.offsetWidth * L.xPercent / 100 : 0) + "px",
        L.y = n - ((L.yPercent = n && (!t && L.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-n) ? -50 : 0))) ? e.offsetHeight * L.yPercent / 100 : 0) + "px",
        L.z = r + "px",
        L.scaleX = N(D),
        L.scaleY = N(i),
        L.rotation = N(a) + P,
        L.rotationX = N(s) + P,
        L.rotationY = N(o) + P,
        L.skewX = l + P,
        L.skewY = 0 + P,
        L.transformPerspective = c + "px",
        (L.zOrigin = parseFloat(A.split(" ")[2]) || 0) && (M[Q] = si(A)),
        L.xOffset = L.yOffset = 0,
        L.force3D = H.force3D,
        L.renderTransform = L.svg ? pi : Er ? di : oi,
        L.uncache = 0),
        L
    }, si = function(e) {
        return (e = e.split(" "))[0] + " " + e[1]
    }, oi = function(e, t) {
        t.z = "0px",
        t.rotationY = t.rotationX = "0deg",
        t.force3D = 0,
        di(e, t)
    }, li = "0deg", ci = "0px", ui = ") ", di = function(e, t) {
        var n, r, t = t || this, i = t.xPercent, a = t.yPercent, s = t.x, o = t.y, l = t.z, c = t.rotation, u = t.rotationY, d = t.rotationX, p = t.skewX, f = t.skewY, h = t.scaleX, m = t.scaleY, g = t.transformPerspective, v = t.force3D, y = t.target, t = t.zOrigin, b = "", e = "auto" === v && e && 1 !== e || !0 === v;
        !t || d === li && u === li || (v = parseFloat(u) * Xr,
        r = Math.sin(v),
        n = Math.cos(v),
        v = parseFloat(d) * Xr,
        s = gr(y, s, r * (r = Math.cos(v)) * -t),
        o = gr(y, o, -Math.sin(v) * -t),
        l = gr(y, l, n * r * -t + t)),
        g !== ci && (b += "perspective(" + g + ui),
        (i || a) && (b += "translate(" + i + "%, " + a + "%) "),
        !e && s === ci && o === ci && l === ci || (b += l !== ci || e ? "translate3d(" + s + ", " + o + ", " + l + ") " : "translate(" + s + ", " + o + ui),
        c !== li && (b += "rotate(" + c + ui),
        u !== li && (b += "rotateY(" + u + ui),
        d !== li && (b += "rotateX(" + d + ui),
        p === li && f === li || (b += "skew(" + p + ", " + f + ui),
        1 === h && 1 === m || (b += "scale(" + h + ", " + m + ui),
        y.style[U] = b || "translate(0, 0)"
    }, pi = function(e, t) {
        var n, r, i, a, s, t = t || this, o = t.xPercent, l = t.yPercent, c = t.x, u = t.y, d = t.rotation, p = t.skewX, f = t.skewY, h = t.scaleX, m = t.scaleY, g = t.target, v = t.xOrigin, y = t.yOrigin, b = t.xOffset, w = t.yOffset, t = t.forceCSS, x = parseFloat(c), T = parseFloat(u), d = parseFloat(d), p = parseFloat(p);
        (f = parseFloat(f)) && (p += f = parseFloat(f),
        d += f),
        d || p ? (d *= Xr,
        p *= Xr,
        n = Math.cos(d) * h,
        r = Math.sin(d) * h,
        i = Math.sin(d - p) * -m,
        a = Math.cos(d - p) * m,
        p && (f *= Xr,
        s = Math.tan(p - f),
        i *= s = Math.sqrt(1 + s * s),
        a *= s,
        f) && (s = Math.tan(f),
        n *= s = Math.sqrt(1 + s * s),
        r *= s),
        n = N(n),
        r = N(r),
        i = N(i),
        a = N(a)) : (n = h,
        a = m,
        r = i = 0),
        (x && !~(c + "").indexOf("px") || T && !~(u + "").indexOf("px")) && (x = cr(g, "x", c, "px"),
        T = cr(g, "y", u, "px")),
        (v || y || b || w) && (x = N(x + v - (v * n + y * i) + b),
        T = N(T + y - (v * r + y * a) + w)),
        (o || l) && (x = N(x + o / 100 * (s = g.getBBox()).width),
        T = N(T + l / 100 * s.height)),
        g.setAttribute("transform", s = "matrix(" + n + "," + r + "," + i + "," + a + "," + x + "," + T + ")"),
        t && (g.style[U] = s)
    };
    f("padding,margin,Width,Radius", function(t, n) {
        var e = "Right"
          , r = "Bottom"
          , i = "Left"
          , o = (n < 3 ? ["Top", e, r, i] : ["Top" + i, "Top" + e, r + e, r + i]).map(function(e) {
            return n < 2 ? t + e : "border" + e + t
        });
        ni[1 < n ? "border" + t : t] = function(t, e, n, r, i) {
            var a, s;
            if (arguments.length < 4)
                return a = o.map(function(e) {
                    return ei(t, e, n)
                }),
                5 === (s = a.join(" ")).split(a[0]).length ? a[0] : s;
            a = (r + "").split(" "),
            s = {},
            o.forEach(function(e, t) {
                return s[e] = a[t] = a[t] || a[(t - 1) / 2 | 0]
            }),
            t.init(e, s, i)
        }
    });
    var fi, hi = {
        name: "css",
        register: nr,
        targetTest: function(e) {
            return e.style && e.nodeType
        },
        init: function(e, t, n, r, i) {
            var a, s, o, l, c, u, d, p, f, N, h, m, I, g, v, y, j, b, w, x, T, R = this._props, _ = e.style, E = n.vars.startAt;
            for (c in wr || nr(),
            this.styles = this.styles || er(e),
            g = this.styles.props,
            this.tween = n,
            t)
                if ("autoRound" !== c && (s = t[c],
                !W[c] || !nn(c, t, n, r, e, i)))
                    if (p = typeof s,
                    l = ni[c],
                    "function" === p && (p = typeof (s = s.call(n, r, e, i))),
                    "string" === p && ~s.indexOf("random(") && (s = ke(s)),
                    l)
                        l(this, e, c, s, n) && (I = 1);
                    else if ("--" === c.substr(0, 2))
                        a = (getComputedStyle(e).getPropertyValue(c) + "").trim(),
                        s += "",
                        Ht.lastIndex = 0,
                        Ht.test(a) || (u = B(a),
                        d = B(s)),
                        d ? u !== d && (a = cr(e, c, a, d) + d) : u && (s += u),
                        this.add(_, "setProperty", a, s, r, i, 0, 0, c),
                        R.push(c),
                        g.push(c, 0, _[c]);
                    else if ("undefined" !== p) {
                        if (E && c in E && (B((a = q(a = "function" == typeof E[c] ? E[c].call(n, r, e, i) : E[c]) && ~a.indexOf("random(") ? ke(a) : a) + "") || (a += H.units[c] || B(ei(e, c)) || ""),
                        "=" !== (a + "").charAt(1)) || (a = ei(e, c)),
                        l = parseFloat(a),
                        (p = "string" === p && "=" === s.charAt(1) && s.substr(0, 2)) && (s = s.substr(2)),
                        o = parseFloat(s),
                        f = (c = c in Ur && ("autoAlpha" === c && (1 === l && "hidden" === ei(e, "visibility") && o && (l = 0),
                        g.push("visibility", 0, _.visibility),
                        lr(this, _, "visibility", l ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)),
                        "scale" !== c) && "transform" !== c && ~(c = Ur[c]).indexOf(",") ? c.split(",")[0] : c)in Hr)
                            if (this.styles.save(c),
                            N || ((h = e._gsap).renderTransform && !t.parseTransform || ai(e, t.parseTransform),
                            m = !1 !== t.smoothOrigin && h.smooth,
                            (N = this._pt = new G(this._pt,_,U,0,1,h.renderTransform,h,0,-1)).dep = 1),
                            "scale" === c)
                                this._pt = new G(this._pt,h,"scaleY",l,(p ? re(l, p + o) : o) - l || 0,Rn),
                                this._pt.u = 0,
                                R.push("scaleY", c),
                                c += "X";
                            else {
                                if ("transformOrigin" === c) {
                                    g.push(Q, 0, _[Q]),
                                    T = x = w = void 0,
                                    w = (b = s).split(" "),
                                    x = w[0],
                                    T = w[1] || "50%",
                                    "top" !== x && "bottom" !== x && "left" !== T && "right" !== T || (b = x,
                                    x = T,
                                    T = b),
                                    w[0] = ti[x] || x,
                                    w[1] = ti[T] || T,
                                    s = w.join(" "),
                                    h.svg ? mr(e, s, 0, m, 0, this) : ((d = parseFloat(s.split(" ")[2]) || 0) !== h.zOrigin && lr(this, h, "zOrigin", h.zOrigin, d),
                                    lr(this, _, c, si(a), si(s)));
                                    continue
                                }
                                if ("svgOrigin" === c) {
                                    mr(e, s, 1, m, 0, this);
                                    continue
                                }
                                if (c in ii) {
                                    b = this,
                                    x = h,
                                    T = c,
                                    w = l,
                                    v = p ? re(l, p + s) : s,
                                    j = y = $ = z = void 0,
                                    z = 360,
                                    $ = q(v),
                                    y = parseFloat(v) * ($ && ~v.indexOf("rad") ? Fr : 1) - w,
                                    j = w + y + "deg",
                                    $ && ("short" === ($ = v.split("_")[1]) && (y %= z) != y % 180 && (y += y < 0 ? z : -z),
                                    "cw" === $ && y < 0 ? y = (y + 36e9) % z - ~~(y / z) * z : "ccw" === $ && 0 < y && (y = (y - 36e9) % z - ~~(y / z) * z)),
                                    b._pt = v = new G(b._pt,x,T,w,y,qn),
                                    v.e = j,
                                    v.u = "deg",
                                    b._props.push(T);
                                    continue
                                }
                                if ("smoothOrigin" === c) {
                                    lr(this, h, "smooth", h.smooth, s);
                                    continue
                                }
                                if ("force3D" === c) {
                                    h[c] = s;
                                    continue
                                }
                                if ("transform" === c) {
                                    z = L = O = k = P = M = S = C = D = $ = A = void 0;
                                    var C, S, M, k, P, O, A = this, $ = s, D = e, L = vr({}, D._gsap), z = D.style;
                                    for (S in L.svg ? (M = D.getAttribute("transform"),
                                    D.setAttribute("transform", ""),
                                    z[U] = $,
                                    C = ai(D, 1),
                                    or(D, U),
                                    D.setAttribute("transform", M)) : (M = getComputedStyle(D)[U],
                                    z[U] = $,
                                    C = ai(D, 1),
                                    z[U] = M),
                                    Hr)
                                        (M = L[S]) !== (P = C[S]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(S) < 0 && (k = B(M) !== (O = B(P)) ? cr(D, S, M, O) : parseFloat(M),
                                        P = parseFloat(P),
                                        A._pt = new G(A._pt,C,S,k,P - k,Rn),
                                        A._pt.u = O || 0,
                                        A._props.push(S));
                                    vr(C, L);
                                    continue
                                }
                            }
                        else
                            c in _ || (c = Kr(c) || c);
                        if (f || (o || 0 === o) && (l || 0 === l) && !Vr.test(s) && c in _)
                            o = o || 0,
                            (u = (a + "").substr((l + "").length)) !== (d = B(s) || (c in H.units ? H.units[c] : u)) && (l = cr(e, c, a, d)),
                            this._pt = new G(this._pt,f ? h : _,c,l,(p ? re(l, p + o) : o) - l,f || "px" !== d && "zIndex" !== c || !1 === t.autoRound ? Rn : Hn),
                            this._pt.u = d || 0,
                            u !== d && "%" !== d && (this._pt.b = a,
                            this._pt.r = Bn);
                        else if (c in _)
                            ur.call(this, e, c, a, p ? p + s : s);
                        else {
                            if (!(c in e)) {
                                J(c, s);
                                continue
                            }
                            this.add(e, c, a || e[c], p ? p + s : s, r, i)
                        }
                        f || (c in _ ? g.push(c, 0, _[c]) : g.push(c, 1, a || e[c])),
                        R.push(c)
                    }
            I && En(this)
        },
        render: function(e, t) {
            if (t.tween._time || !_r())
                for (var n = t._pt; n; )
                    n.r(e, n.d),
                    n = n._next;
            else
                t.styles.revert()
        },
        get: ei,
        aliases: Ur,
        getSetter: function(e, t, n) {
            var r = Ur[t];
            return (t = r && r.indexOf(",") < 0 ? r : t)in Hr && t !== Q && (e._gsap.x || ei(e, "x")) ? n && Tr === n ? "scale" === t ? Vn : Gn : (Tr = n || {}) && ("scale" === t ? Un : Qn) : e.style && !a(e.style[t]) ? Wn : ~t.indexOf("-") ? Yn : _n(e, t)
        },
        core: {
            _removeProperty: or,
            _getMatrix: hr
        }
    }, mi = (u.utils.checkPrefix = Kr,
    u.core.getStyleSaver = er,
    fi = f("x,y,z,scale,scaleX,scaleY,xPercent,yPercent" + "," + (mi = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(e) {
        Hr[e] = 1
    }),
    f(mi, function(e) {
        H.units[e] = "deg",
        ii[e] = 1
    }),
    Ur[fi[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + mi,
    f("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(e) {
        e = e.split(":");
        Ur[e[1]] = fi[e[0]]
    }),
    f("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(e) {
        H.units[e] = "px"
    }),
    u.registerPlugin(hi),
    u.registerPlugin(hi) || u), gi = mi.core.Tween;
    e.Back = Nr,
    e.Bounce = jr,
    e.CSSPlugin = hi,
    e.Circ = Br,
    e.Cubic = Ar,
    e.Elastic = zr,
    e.Expo = qr,
    e.Linear = Pr,
    e.Power0 = t,
    e.Power1 = Cr,
    e.Power2 = Sr,
    e.Power3 = Mr,
    e.Power4 = kr,
    e.Quad = Or,
    e.Quart = $r,
    e.Quint = Dr,
    e.Sine = Rr,
    e.SteppedEase = Ir,
    e.Strong = Lr,
    e.TimelineLite = D,
    e.TimelineMax = D,
    e.TweenLite = Y,
    e.TweenMax = gi,
    e.default = mi,
    e.gsap = mi,
    "undefined" == typeof window || window !== e ? Object.defineProperty(e, "__esModule", {
        value: !0
    }) : delete e.default
}),
function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (e.document)
            return t(e);
        throw new Error("jQuery requires a window with a document")
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(x, N) {
    "use strict";
    function y(e) {
        return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
    }
    function m(e) {
        return null != e && e === e.window
    }
    var t = []
      , I = Object.getPrototypeOf
      , o = t.slice
      , j = t.flat ? function(e) {
        return t.flat.call(e)
    }
    : function(e) {
        return t.concat.apply([], e)
    }
      , R = t.push
      , q = t.indexOf
      , B = {}
      , H = B.toString
      , F = B.hasOwnProperty
      , X = F.toString
      , W = X.call(Object)
      , g = {}
      , T = x.document
      , Y = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function G(e, t, n) {
        var r, i, a = (n = n || T).createElement("script");
        if (a.text = e,
        t)
            for (r in Y)
                (i = t[r] || t.getAttribute && t.getAttribute(r)) && a.setAttribute(r, i);
        n.head.appendChild(a).parentNode.removeChild(a)
    }
    function h(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? B[H.call(e)] || "object" : typeof e
    }
    var _ = function(e, t) {
        return new _.fn.init(e,t)
    };
    function V(e) {
        var t = !!e && "length"in e && e.length
          , n = h(e);
        return !y(e) && !m(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    _.fn = _.prototype = {
        jquery: "3.6.0",
        constructor: _,
        length: 0,
        toArray: function() {
            return o.call(this)
        },
        get: function(e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            e = _.merge(this.constructor(), e);
            return e.prevObject = this,
            e
        },
        each: function(e) {
            return _.each(this, e)
        },
        map: function(n) {
            return this.pushStack(_.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(_.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(_.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length
              , e = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= e && e < t ? [this[e]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: R,
        sort: t.sort,
        splice: t.splice
    },
    _.extend = _.fn.extend = function() {
        var e, t, n, r, i, a = arguments[0] || {}, s = 1, o = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a,
        a = arguments[s] || {},
        s++),
        "object" == typeof a || y(a) || (a = {}),
        s === o && (a = this,
        s--); s < o; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    n = e[t],
                    "__proto__" !== t && a !== n && (l && n && (_.isPlainObject(n) || (r = Array.isArray(n))) ? (i = a[t],
                    i = r && !Array.isArray(i) ? [] : r || _.isPlainObject(i) ? i : {},
                    r = !1,
                    a[t] = _.extend(l, i, n)) : void 0 !== n && (a[t] = n));
        return a
    }
    ,
    _.extend({
        expando: "jQuery" + ("3.6.0" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            return !(!e || "[object Object]" !== H.call(e) || (e = I(e)) && ("function" != typeof (e = F.call(e, "constructor") && e.constructor) || X.call(e) !== W))
        },
        isEmptyObject: function(e) {
            for (var t in e)
                return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            G(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, r = 0;
            if (V(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++)
                    ;
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r]))
                        break;
            return e
        },
        makeArray: function(e, t) {
            t = t || [];
            return null != e && (V(Object(e)) ? _.merge(t, "string" == typeof e ? [e] : e) : R.call(t, e)),
            t
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : q.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                e[i++] = t[r];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, a = e.length, s = !n; i < a; i++)
                !t(e[i], i) != s && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, a = 0, s = [];
            if (V(e))
                for (r = e.length; a < r; a++)
                    null != (i = t(e[a], a, n)) && s.push(i);
            else
                for (a in e)
                    null != (i = t(e[a], a, n)) && s.push(i);
            return j(s)
        },
        guid: 1,
        support: g
    }),
    "function" == typeof Symbol && (_.fn[Symbol.iterator] = t[Symbol.iterator]),
    _.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        B["[object " + t + "]"] = t.toLowerCase()
    });
    function r(e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (i && _(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
    function U(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
    var e = function(N) {
        function d(e, t) {
            return e = "0x" + e.slice(1) - 65536,
            t || (e < 0 ? String.fromCharCode(65536 + e) : String.fromCharCode(e >> 10 | 55296, 1023 & e | 56320))
        }
        function I(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }
        function j() {
            T()
        }
        var e, p, w, a, R, f, q, B, x, l, c, T, _, n, E, h, r, i, m, C = "sizzle" + +new Date, u = N.document, S = 0, H = 0, F = A(), X = A(), W = A(), g = A(), Y = function(e, t) {
            return e === t && (c = !0),
            0
        }, G = {}.hasOwnProperty, t = [], V = t.pop, U = t.push, M = t.push, Q = t.slice, y = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", s = "[\\x20\\t\\r\\n\\f]", o = "(?:\\\\[\\da-fA-F]{1,6}" + s + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", Z = "\\[" + s + "*(" + o + ")(?:" + s + "*([*^$|!~]?=)" + s + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + o + "))|)" + s + "*\\]", J = ":(" + o + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + Z + ")*)|.*)\\)|)", ee = new RegExp(s + "+","g"), v = new RegExp("^" + s + "+|((?:^|[^\\\\])(?:\\\\.)*)" + s + "+$","g"), te = new RegExp("^" + s + "*," + s + "*"), ne = new RegExp("^" + s + "*([>+~]|" + s + ")" + s + "*"), re = new RegExp(s + "|>"), ie = new RegExp(J), ae = new RegExp("^" + o + "$"), b = {
            ID: new RegExp("^#(" + o + ")"),
            CLASS: new RegExp("^\\.(" + o + ")"),
            TAG: new RegExp("^(" + o + "|[*])"),
            ATTR: new RegExp("^" + Z),
            PSEUDO: new RegExp("^" + J),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + s + "*(even|odd|(([+-]|)(\\d*)n|)" + s + "*(?:([+-]|)" + s + "*(\\d+)|))" + s + "*\\)|)","i"),
            bool: new RegExp("^(?:" + K + ")$","i"),
            needsContext: new RegExp("^" + s + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + s + "*((?:-\\d)?\\d*)" + s + "*\\)|)(?=[^-]|$)","i")
        }, se = /HTML$/i, oe = /^(?:input|select|textarea|button)$/i, le = /^h\d$/i, k = /^[^{]+\{\s*\[native \w/, ce = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ue = /[+~]/, P = new RegExp("\\\\[\\da-fA-F]{1,6}" + s + "?|\\\\([^\\r\\n\\f])","g"), de = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, pe = ye(function(e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            M.apply(t = Q.call(u.childNodes), u.childNodes),
            t[u.childNodes.length].nodeType
        } catch (e) {
            M = {
                apply: t.length ? function(e, t) {
                    U.apply(e, Q.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        function O(t, e, n, r) {
            var i, a, s, o, l, c, u = e && e.ownerDocument, d = e ? e.nodeType : 9;
            if (n = n || [],
            "string" != typeof t || !t || 1 !== d && 9 !== d && 11 !== d)
                return n;
            if (!r && (T(e),
            e = e || _,
            E)) {
                if (11 !== d && (o = ce.exec(t)))
                    if (i = o[1]) {
                        if (9 === d) {
                            if (!(c = e.getElementById(i)))
                                return n;
                            if (c.id === i)
                                return n.push(c),
                                n
                        } else if (u && (c = u.getElementById(i)) && m(e, c) && c.id === i)
                            return n.push(c),
                            n
                    } else {
                        if (o[2])
                            return M.apply(n, e.getElementsByTagName(t)),
                            n;
                        if ((i = o[3]) && p.getElementsByClassName && e.getElementsByClassName)
                            return M.apply(n, e.getElementsByClassName(i)),
                            n
                    }
                if (p.qsa && !g[t + " "] && (!h || !h.test(t)) && (1 !== d || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t,
                    u = e,
                    1 === d && (re.test(t) || ne.test(t))) {
                        for ((u = ue.test(t) && ge(e.parentNode) || e) === e && p.scope || ((s = e.getAttribute("id")) ? s = s.replace(de, I) : e.setAttribute("id", s = C)),
                        a = (l = f(t)).length; a--; )
                            l[a] = (s ? "#" + s : ":scope") + " " + z(l[a]);
                        c = l.join(",")
                    }
                    try {
                        return M.apply(n, u.querySelectorAll(c)),
                        n
                    } catch (e) {
                        g(t, !0)
                    } finally {
                        s === C && e.removeAttribute("id")
                    }
                }
            }
            return B(t.replace(v, "$1"), e, n, r)
        }
        function A() {
            var n = [];
            function r(e, t) {
                return n.push(e + " ") > w.cacheLength && delete r[n.shift()],
                r[e + " "] = t
            }
            return r
        }
        function $(e) {
            return e[C] = !0,
            e
        }
        function D(e) {
            var t = _.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t)
            }
        }
        function fe(e, t) {
            for (var n = e.split("|"), r = n.length; r--; )
                w.attrHandle[n[r]] = t
        }
        function he(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r)
                return r;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function me(t) {
            return function(e) {
                return "form"in e ? e.parentNode && !1 === e.disabled ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && pe(e) === t : e.disabled === t : "label"in e && e.disabled === t
            }
        }
        function L(s) {
            return $(function(a) {
                return a = +a,
                $(function(e, t) {
                    for (var n, r = s([], e.length, a), i = r.length; i--; )
                        e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }
        function ge(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (e in p = O.support = {},
        R = O.isXML = function(e) {
            var t = e && e.namespaceURI
              , e = e && (e.ownerDocument || e).documentElement;
            return !se.test(t || e && e.nodeName || "HTML")
        }
        ,
        T = O.setDocument = function(e) {
            var e = e ? e.ownerDocument || e : u;
            return e != _ && 9 === e.nodeType && e.documentElement && (n = (_ = e).documentElement,
            E = !R(_),
            u != _ && (e = _.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", j, !1) : e.attachEvent && e.attachEvent("onunload", j)),
            p.scope = D(function(e) {
                return n.appendChild(e).appendChild(_.createElement("div")),
                void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
            }),
            p.attributes = D(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            p.getElementsByTagName = D(function(e) {
                return e.appendChild(_.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            p.getElementsByClassName = k.test(_.getElementsByClassName),
            p.getById = D(function(e) {
                return n.appendChild(e).id = C,
                !_.getElementsByName || !_.getElementsByName(C).length
            }),
            p.getById ? (w.filter.ID = function(e) {
                var t = e.replace(P, d);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            w.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && E)
                    return (t = t.getElementById(e)) ? [t] : []
            }
            ) : (w.filter.ID = function(e) {
                var t = e.replace(P, d);
                return function(e) {
                    e = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return e && e.value === t
                }
            }
            ,
            w.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && E) {
                    var n, r, i, a = t.getElementById(e);
                    if (a) {
                        if ((n = a.getAttributeNode("id")) && n.value === e)
                            return [a];
                        for (i = t.getElementsByName(e),
                        r = 0; a = i[r++]; )
                            if ((n = a.getAttributeNode("id")) && n.value === e)
                                return [a]
                    }
                    return []
                }
            }
            ),
            w.find.TAG = p.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : p.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, r = [], i = 0, a = t.getElementsByTagName(e);
                if ("*" !== e)
                    return a;
                for (; n = a[i++]; )
                    1 === n.nodeType && r.push(n);
                return r
            }
            ,
            w.find.CLASS = p.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && E)
                    return t.getElementsByClassName(e)
            }
            ,
            r = [],
            h = [],
            (p.qsa = k.test(_.querySelectorAll)) && (D(function(e) {
                var t;
                n.appendChild(e).innerHTML = "<a id='" + C + "'></a><select id='" + C + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && h.push("[*^$]=" + s + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || h.push("\\[" + s + "*(?:value|" + K + ")"),
                e.querySelectorAll("[id~=" + C + "-]").length || h.push("~="),
                (t = _.createElement("input")).setAttribute("name", ""),
                e.appendChild(t),
                e.querySelectorAll("[name='']").length || h.push("\\[" + s + "*name" + s + "*=" + s + "*(?:''|\"\")"),
                e.querySelectorAll(":checked").length || h.push(":checked"),
                e.querySelectorAll("a#" + C + "+*").length || h.push(".#.+[+~]"),
                e.querySelectorAll("\\\f"),
                h.push("[\\r\\n\\f]")
            }),
            D(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = _.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && h.push("name" + s + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && h.push(":enabled", ":disabled"),
                n.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && h.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                h.push(",.*:")
            })),
            (p.matchesSelector = k.test(i = n.matches || n.webkitMatchesSelector || n.mozMatchesSelector || n.oMatchesSelector || n.msMatchesSelector)) && D(function(e) {
                p.disconnectedMatch = i.call(e, "*"),
                i.call(e, "[s!='']:x"),
                r.push("!=", J)
            }),
            h = h.length && new RegExp(h.join("|")),
            r = r.length && new RegExp(r.join("|")),
            e = k.test(n.compareDocumentPosition),
            m = e || k.test(n.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , t = t && t.parentNode;
                return e === t || !(!t || 1 !== t.nodeType || !(n.contains ? n.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            Y = e ? function(e, t) {
                var n;
                return e === t ? (c = !0,
                0) : (n = !e.compareDocumentPosition - !t.compareDocumentPosition) || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !p.sortDetached && t.compareDocumentPosition(e) === n ? e == _ || e.ownerDocument == u && m(u, e) ? -1 : t == _ || t.ownerDocument == u && m(u, t) ? 1 : l ? y(l, e) - y(l, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return c = !0,
                    0;
                var n, r = 0, i = e.parentNode, a = t.parentNode, s = [e], o = [t];
                if (!i || !a)
                    return e == _ ? -1 : t == _ ? 1 : i ? -1 : a ? 1 : l ? y(l, e) - y(l, t) : 0;
                if (i === a)
                    return he(e, t);
                for (n = e; n = n.parentNode; )
                    s.unshift(n);
                for (n = t; n = n.parentNode; )
                    o.unshift(n);
                for (; s[r] === o[r]; )
                    r++;
                return r ? he(s[r], o[r]) : s[r] == u ? -1 : o[r] == u ? 1 : 0
            }
            ),
            _
        }
        ,
        O.matches = function(e, t) {
            return O(e, null, null, t)
        }
        ,
        O.matchesSelector = function(e, t) {
            if (T(e),
            p.matchesSelector && E && !g[t + " "] && (!r || !r.test(t)) && (!h || !h.test(t)))
                try {
                    var n = i.call(e, t);
                    if (n || p.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return n
                } catch (e) {
                    g(t, !0)
                }
            return 0 < O(t, _, null, [e]).length
        }
        ,
        O.contains = function(e, t) {
            return (e.ownerDocument || e) != _ && T(e),
            m(e, t)
        }
        ,
        O.attr = function(e, t) {
            (e.ownerDocument || e) != _ && T(e);
            var n = w.attrHandle[t.toLowerCase()]
              , n = n && G.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
            return void 0 !== n ? n : p.attributes || !E ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }
        ,
        O.escape = function(e) {
            return (e + "").replace(de, I)
        }
        ,
        O.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        O.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (c = !p.detectDuplicates,
            l = !p.sortStable && e.slice(0),
            e.sort(Y),
            c) {
                for (; t = e[i++]; )
                    t === e[i] && (r = n.push(i));
                for (; r--; )
                    e.splice(n[r], 1)
            }
            return l = null,
            e
        }
        ,
        a = O.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += a(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                for (; t = e[r++]; )
                    n += a(t);
            return n
        }
        ,
        (w = O.selectors = {
            cacheLength: 50,
            createPseudo: $,
            match: b,
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
                ATTR: function(e) {
                    return e[1] = e[1].replace(P, d),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(P, d),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || O.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && O.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return b.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ie.test(n) && (t = (t = f(n, !0)) && n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(P, d).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = F[e + " "];
                    return t || (t = new RegExp("(^|" + s + ")" + e + "(" + s + "|$)")) && F(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, n, r) {
                    return function(e) {
                        e = O.attr(e, t);
                        return null == e ? "!=" === n : !n || (e += "",
                        "=" === n ? e === r : "!=" === n ? e !== r : "^=" === n ? r && 0 === e.indexOf(r) : "*=" === n ? r && -1 < e.indexOf(r) : "$=" === n ? r && e.slice(-r.length) === r : "~=" === n ? -1 < (" " + e.replace(ee, " ") + " ").indexOf(r) : "|=" === n && (e === r || e.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function(h, e, t, m, g) {
                    var v = "nth" !== h.slice(0, 3)
                      , y = "last" !== h.slice(-4)
                      , b = "of-type" === e;
                    return 1 === m && 0 === g ? function(e) {
                        return !!e.parentNode
                    }
                    : function(e, t, n) {
                        var r, i, a, s, o, l, c = v != y ? "nextSibling" : "previousSibling", u = e.parentNode, d = b && e.nodeName.toLowerCase(), p = !n && !b, f = !1;
                        if (u) {
                            if (v) {
                                for (; c; ) {
                                    for (s = e; s = s[c]; )
                                        if (b ? s.nodeName.toLowerCase() === d : 1 === s.nodeType)
                                            return !1;
                                    l = c = "only" === h && !l && "nextSibling"
                                }
                                return !0
                            }
                            if (l = [y ? u.firstChild : u.lastChild],
                            y && p) {
                                for (f = (o = (r = (i = (a = (s = u)[C] || (s[C] = {}))[s.uniqueID] || (a[s.uniqueID] = {}))[h] || [])[0] === S && r[1]) && r[2],
                                s = o && u.childNodes[o]; s = ++o && s && s[c] || (f = o = 0,
                                l.pop()); )
                                    if (1 === s.nodeType && ++f && s === e) {
                                        i[h] = [S, o, f];
                                        break
                                    }
                            } else if (!1 === (f = p ? o = (r = (i = (a = (s = e)[C] || (s[C] = {}))[s.uniqueID] || (a[s.uniqueID] = {}))[h] || [])[0] === S && r[1] : f))
                                for (; (s = ++o && s && s[c] || (f = o = 0,
                                l.pop())) && ((b ? s.nodeName.toLowerCase() !== d : 1 !== s.nodeType) || !++f || (p && ((i = (a = s[C] || (s[C] = {}))[s.uniqueID] || (a[s.uniqueID] = {}))[h] = [S, f]),
                                s !== e)); )
                                    ;
                            return (f -= g) === m || f % m == 0 && 0 <= f / m
                        }
                    }
                },
                PSEUDO: function(e, a) {
                    var t, s = w.pseudos[e] || w.setFilters[e.toLowerCase()] || O.error("unsupported pseudo: " + e);
                    return s[C] ? s(a) : 1 < s.length ? (t = [e, e, "", a],
                    w.setFilters.hasOwnProperty(e.toLowerCase()) ? $(function(e, t) {
                        for (var n, r = s(e, a), i = r.length; i--; )
                            e[n = y(e, r[i])] = !(t[n] = r[i])
                    }) : function(e) {
                        return s(e, 0, t)
                    }
                    ) : s
                }
            },
            pseudos: {
                not: $(function(e) {
                    var r = []
                      , i = []
                      , o = q(e.replace(v, "$1"));
                    return o[C] ? $(function(e, t, n, r) {
                        for (var i, a = o(e, null, r, []), s = e.length; s--; )
                            (i = a[s]) && (e[s] = !(t[s] = i))
                    }) : function(e, t, n) {
                        return r[0] = e,
                        o(r, null, n, i),
                        r[0] = null,
                        !i.pop()
                    }
                }),
                has: $(function(t) {
                    return function(e) {
                        return 0 < O(t, e).length
                    }
                }),
                contains: $(function(t) {
                    return t = t.replace(P, d),
                    function(e) {
                        return -1 < (e.textContent || a(e)).indexOf(t)
                    }
                }),
                lang: $(function(n) {
                    return ae.test(n || "") || O.error("unsupported lang: " + n),
                    n = n.replace(P, d).toLowerCase(),
                    function(e) {
                        var t;
                        do {
                            if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }),
                target: function(e) {
                    var t = N.location && N.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(e) {
                    return e === n
                },
                focus: function(e) {
                    return e === _.activeElement && (!_.hasFocus || _.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: me(!1),
                disabled: me(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !w.pseudos.empty(e)
                },
                header: function(e) {
                    return le.test(e.nodeName)
                },
                input: function(e) {
                    return oe.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: L(function() {
                    return [0]
                }),
                last: L(function(e, t) {
                    return [t - 1]
                }),
                eq: L(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: L(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: L(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: L(function(e, t, n) {
                    for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; )
                        e.push(r);
                    return e
                }),
                gt: L(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        }).pseudos.nth = w.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            w.pseudos[e] = function(t) {
                return function(e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }(e);
        for (e in {
            submit: !0,
            reset: !0
        })
            w.pseudos[e] = function(n) {
                return function(e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t || "button" === t) && e.type === n
                }
            }(e);
        function ve() {}
        function z(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function ye(s, e, t) {
            var o = e.dir
              , l = e.next
              , c = l || o
              , u = t && "parentNode" === c
              , d = H++;
            return e.first ? function(e, t, n) {
                for (; e = e[o]; )
                    if (1 === e.nodeType || u)
                        return s(e, t, n);
                return !1
            }
            : function(e, t, n) {
                var r, i, a = [S, d];
                if (n) {
                    for (; e = e[o]; )
                        if ((1 === e.nodeType || u) && s(e, t, n))
                            return !0
                } else
                    for (; e = e[o]; )
                        if (1 === e.nodeType || u)
                            if (i = (i = e[C] || (e[C] = {}))[e.uniqueID] || (i[e.uniqueID] = {}),
                            l && l === e.nodeName.toLowerCase())
                                e = e[o] || e;
                            else {
                                if ((r = i[c]) && r[0] === S && r[1] === d)
                                    return a[2] = r[2];
                                if ((i[c] = a)[2] = s(e, t, n))
                                    return !0
                            }
                return !1
            }
        }
        function be(i) {
            return 1 < i.length ? function(e, t, n) {
                for (var r = i.length; r--; )
                    if (!i[r](e, t, n))
                        return !1;
                return !0
            }
            : i[0]
        }
        function we(e, t, n, r, i) {
            for (var a, s = [], o = 0, l = e.length, c = null != t; o < l; o++)
                !(a = e[o]) || n && !n(a, r, i) || (s.push(a),
                c && t.push(o));
            return s
        }
        function xe(f, h, m, g, v, e) {
            return g && !g[C] && (g = xe(g)),
            v && !v[C] && (v = xe(v, e)),
            $(function(e, t, n, r) {
                var i, a, s, o = [], l = [], c = t.length, u = e || function(e, t, n) {
                    for (var r = 0, i = t.length; r < i; r++)
                        O(e, t[r], n);
                    return n
                }(h || "*", n.nodeType ? [n] : n, []), d = !f || !e && h ? u : we(u, o, f, n, r), p = m ? v || (e ? f : c || g) ? [] : t : d;
                if (m && m(d, p, n, r),
                g)
                    for (i = we(p, l),
                    g(i, [], n, r),
                    a = i.length; a--; )
                        (s = i[a]) && (p[l[a]] = !(d[l[a]] = s));
                if (e) {
                    if (v || f) {
                        if (v) {
                            for (i = [],
                            a = p.length; a--; )
                                (s = p[a]) && i.push(d[a] = s);
                            v(null, p = [], i, r)
                        }
                        for (a = p.length; a--; )
                            (s = p[a]) && -1 < (i = v ? y(e, s) : o[a]) && (e[i] = !(t[i] = s))
                    }
                } else
                    p = we(p === t ? p.splice(c, p.length) : p),
                    v ? v(null, t, p, r) : M.apply(t, p)
            })
        }
        function Te(g, v) {
            function e(e, t, n, r, i) {
                var a, s, o, l = 0, c = "0", u = e && [], d = [], p = x, f = e || b && w.find.TAG("*", i), h = S += null == p ? 1 : Math.random() || .1, m = f.length;
                for (i && (x = t == _ || t || i); c !== m && null != (a = f[c]); c++) {
                    if (b && a) {
                        for (s = 0,
                        t || a.ownerDocument == _ || (T(a),
                        n = !E); o = g[s++]; )
                            if (o(a, t || _, n)) {
                                r.push(a);
                                break
                            }
                        i && (S = h)
                    }
                    y && ((a = !o && a) && l--,
                    e) && u.push(a)
                }
                if (l += c,
                y && c !== l) {
                    for (s = 0; o = v[s++]; )
                        o(u, d, t, n);
                    if (e) {
                        if (0 < l)
                            for (; c--; )
                                u[c] || d[c] || (d[c] = V.call(r));
                        d = we(d)
                    }
                    M.apply(r, d),
                    i && !e && 0 < d.length && 1 < l + v.length && O.uniqueSort(r)
                }
                return i && (S = h,
                x = p),
                u
            }
            var y = 0 < v.length
              , b = 0 < g.length;
            return y ? $(e) : e
        }
        return ve.prototype = w.filters = w.pseudos,
        w.setFilters = new ve,
        f = O.tokenize = function(e, t) {
            var n, r, i, a, s, o, l, c = X[e + " "];
            if (c)
                return t ? 0 : c.slice(0);
            for (s = e,
            o = [],
            l = w.preFilter; s; ) {
                for (a in n && !(r = te.exec(s)) || (r && (s = s.slice(r[0].length) || s),
                o.push(i = [])),
                n = !1,
                (r = ne.exec(s)) && (n = r.shift(),
                i.push({
                    value: n,
                    type: r[0].replace(v, " ")
                }),
                s = s.slice(n.length)),
                w.filter)
                    !(r = b[a].exec(s)) || l[a] && !(r = l[a](r)) || (n = r.shift(),
                    i.push({
                        value: n,
                        type: a,
                        matches: r
                    }),
                    s = s.slice(n.length));
                if (!n)
                    break
            }
            return t ? s.length : s ? O.error(e) : X(e, o).slice(0)
        }
        ,
        q = O.compile = function(e, t) {
            var n, r = [], i = [], a = W[e + " "];
            if (!a) {
                for (n = (t = t || f(e)).length; n--; )
                    ((a = function e(t) {
                        for (var r, n, i, a = t.length, s = w.relative[t[0].type], o = s || w.relative[" "], l = s ? 1 : 0, c = ye(function(e) {
                            return e === r
                        }, o, !0), u = ye(function(e) {
                            return -1 < y(r, e)
                        }, o, !0), d = [function(e, t, n) {
                            return e = !s && (n || t !== x) || ((r = t).nodeType ? c : u)(e, t, n),
                            r = null,
                            e
                        }
                        ]; l < a; l++)
                            if (n = w.relative[t[l].type])
                                d = [ye(be(d), n)];
                            else {
                                if ((n = w.filter[t[l].type].apply(null, t[l].matches))[C]) {
                                    for (i = ++l; i < a && !w.relative[t[i].type]; i++)
                                        ;
                                    return xe(1 < l && be(d), 1 < l && z(t.slice(0, l - 1).concat({
                                        value: " " === t[l - 2].type ? "*" : ""
                                    })).replace(v, "$1"), n, l < i && e(t.slice(l, i)), i < a && e(t = t.slice(i)), i < a && z(t))
                                }
                                d.push(n)
                            }
                        return be(d)
                    }(t[n]))[C] ? r : i).push(a);
                (a = W(e, Te(i, r))).selector = e
            }
            return a
        }
        ,
        B = O.select = function(e, t, n, r) {
            var i, a, s, o, l, c = "function" == typeof e && e, u = !r && f(e = c.selector || e);
            if (n = n || [],
            1 === u.length) {
                if (2 < (a = u[0] = u[0].slice(0)).length && "ID" === (s = a[0]).type && 9 === t.nodeType && E && w.relative[a[1].type]) {
                    if (!(t = (w.find.ID(s.matches[0].replace(P, d), t) || [])[0]))
                        return n;
                    c && (t = t.parentNode),
                    e = e.slice(a.shift().value.length)
                }
                for (i = b.needsContext.test(e) ? 0 : a.length; i-- && (s = a[i],
                !w.relative[o = s.type]); )
                    if ((l = w.find[o]) && (r = l(s.matches[0].replace(P, d), ue.test(a[0].type) && ge(t.parentNode) || t))) {
                        if (a.splice(i, 1),
                        e = r.length && z(a))
                            break;
                        return M.apply(n, r),
                        n
                    }
            }
            return (c || q(e, u))(r, t, !E, n, !t || ue.test(e) && ge(t.parentNode) || t),
            n
        }
        ,
        p.sortStable = C.split("").sort(Y).join("") === C,
        p.detectDuplicates = !!c,
        T(),
        p.sortDetached = D(function(e) {
            return 1 & e.compareDocumentPosition(_.createElement("fieldset"))
        }),
        D(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        p.attributes && D(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        D(function(e) {
            return null == e.getAttribute("disabled")
        }) || fe(K, function(e, t, n) {
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }),
        O
    }(x)
      , Q = (_.find = e,
    _.expr = e.selectors,
    _.expr[":"] = _.expr.pseudos,
    _.uniqueSort = _.unique = e.uniqueSort,
    _.text = e.getText,
    _.isXMLDoc = e.isXML,
    _.contains = e.contains,
    _.escapeSelector = e.escape,
    _.expr.match.needsContext);
    function l(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var K = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function Z(e, n, r) {
        return y(n) ? _.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? _.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? _.grep(e, function(e) {
            return -1 < q.call(n, e) !== r
        }) : _.filter(n, e, r)
    }
    _.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? _.find.matchesSelector(r, e) ? [r] : [] : _.find.matches(e, _.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    _.fn.extend({
        find: function(e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e)
                return this.pushStack(_(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (_.contains(i[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < r; t++)
                _.find(e, i[t], n);
            return 1 < r ? _.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(Z(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(Z(this, e || [], !0))
        },
        is: function(e) {
            return !!Z(this, "string" == typeof e && Q.test(e) ? _(e) : e || [], !1).length
        }
    });
    var J, ee = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, te = ((_.fn.init = function(e, t, n) {
        if (e) {
            if (n = n || J,
            "string" != typeof e)
                return e.nodeType ? (this[0] = e,
                this.length = 1,
                this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(_) : _.makeArray(e, this);
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : ee.exec(e)) || !r[1] && t)
                return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
            if (r[1]) {
                if (t = t instanceof _ ? t[0] : t,
                _.merge(this, _.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : T, !0)),
                K.test(r[1]) && _.isPlainObject(t))
                    for (var r in t)
                        y(this[r]) ? this[r](t[r]) : this.attr(r, t[r])
            } else
                (n = T.getElementById(r[2])) && (this[0] = n,
                this.length = 1)
        }
        return this
    }
    ).prototype = _.fn,
    J = _(T),
    /^(?:parents|prev(?:Until|All))/), ne = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function re(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    _.fn.extend({
        has: function(e) {
            var t = _(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (_.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, a = [], s = "string" != typeof e && _(e);
            if (!Q.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && _.find.matchesSelector(n, e))) {
                            a.push(n);
                            break
                        }
            return this.pushStack(1 < a.length ? _.uniqueSort(a) : a)
        },
        index: function(e) {
            return e ? "string" == typeof e ? q.call(_(e), this[0]) : q.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(_.uniqueSort(_.merge(this.get(), _(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    _.each({
        parent: function(e) {
            e = e.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(e) {
            return r(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return r(e, "parentNode", n)
        },
        next: function(e) {
            return re(e, "nextSibling")
        },
        prev: function(e) {
            return re(e, "previousSibling")
        },
        nextAll: function(e) {
            return r(e, "nextSibling")
        },
        prevAll: function(e) {
            return r(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return r(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return r(e, "previousSibling", n)
        },
        siblings: function(e) {
            return U((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return U(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && I(e.contentDocument) ? e.contentDocument : (l(e, "template") && (e = e.content || e),
            _.merge([], e.childNodes))
        }
    }, function(r, i) {
        _.fn[r] = function(e, t) {
            var n = _.map(this, i, e);
            return (t = "Until" !== r.slice(-5) ? e : t) && "string" == typeof t && (n = _.filter(t, n)),
            1 < this.length && (ne[r] || _.uniqueSort(n),
            te.test(r)) && n.reverse(),
            this.pushStack(n)
        }
    });
    var E = /[^\x20\t\r\n\f]+/g;
    function u(e) {
        return e
    }
    function ie(e) {
        throw e
    }
    function ae(e, t, n, r) {
        var i;
        try {
            e && y(i = e.promise) ? i.call(e).done(t).fail(n) : e && y(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    _.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r,
        n = {},
        _.each(e.match(E) || [], function(e, t) {
            n[t] = !0
        }),
        n) : _.extend({}, r);
        function i() {
            for (o = o || r.once,
            s = a = !0; c.length; u = -1)
                for (t = c.shift(); ++u < l.length; )
                    !1 === l[u].apply(t[0], t[1]) && r.stopOnFalse && (u = l.length,
                    t = !1);
            r.memory || (t = !1),
            a = !1,
            o && (l = t ? [] : "")
        }
        var a, t, s, o, l = [], c = [], u = -1, d = {
            add: function() {
                return l && (t && !a && (u = l.length - 1,
                c.push(t)),
                function n(e) {
                    _.each(e, function(e, t) {
                        y(t) ? r.unique && d.has(t) || l.push(t) : t && t.length && "string" !== h(t) && n(t)
                    })
                }(arguments),
                t) && !a && i(),
                this
            },
            remove: function() {
                return _.each(arguments, function(e, t) {
                    for (var n; -1 < (n = _.inArray(t, l, n)); )
                        l.splice(n, 1),
                        n <= u && u--
                }),
                this
            },
            has: function(e) {
                return e ? -1 < _.inArray(e, l) : 0 < l.length
            },
            empty: function() {
                return l = l && [],
                this
            },
            disable: function() {
                return o = c = [],
                l = t = "",
                this
            },
            disabled: function() {
                return !l
            },
            lock: function() {
                return o = c = [],
                t || a || (l = t = ""),
                this
            },
            locked: function() {
                return !!o
            },
            fireWith: function(e, t) {
                return o || (t = [e, (t = t || []).slice ? t.slice() : t],
                c.push(t),
                a) || i(),
                this
            },
            fire: function() {
                return d.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!s
            }
        };
        return d
    }
    ,
    _.extend({
        Deferred: function(e) {
            var a = [["notify", "progress", _.Callbacks("memory"), _.Callbacks("memory"), 2], ["resolve", "done", _.Callbacks("once memory"), _.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", _.Callbacks("once memory"), _.Callbacks("once memory"), 1, "rejected"]]
              , i = "pending"
              , s = {
                state: function() {
                    return i
                },
                always: function() {
                    return o.done(arguments).fail(arguments),
                    this
                },
                catch: function(e) {
                    return s.then(null, e)
                },
                pipe: function() {
                    var i = arguments;
                    return _.Deferred(function(r) {
                        _.each(a, function(e, t) {
                            var n = y(i[t[4]]) && i[t[4]];
                            o[t[1]](function() {
                                var e = n && n.apply(this, arguments);
                                e && y(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                            })
                        }),
                        i = null
                    }).promise()
                },
                then: function(t, n, r) {
                    var l = 0;
                    function c(i, a, s, o) {
                        return function() {
                            function e() {
                                var e, t;
                                if (!(i < l)) {
                                    if ((e = s.apply(n, r)) === a.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    t = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    y(t) ? o ? t.call(e, c(l, a, u, o), c(l, a, ie, o)) : (l++,
                                    t.call(e, c(l, a, u, o), c(l, a, ie, o), c(l, a, u, a.notifyWith))) : (s !== u && (n = void 0,
                                    r = [e]),
                                    (o || a.resolveWith)(n, r))
                                }
                            }
                            var n = this
                              , r = arguments
                              , t = o ? e : function() {
                                try {
                                    e()
                                } catch (e) {
                                    _.Deferred.exceptionHook && _.Deferred.exceptionHook(e, t.stackTrace),
                                    l <= i + 1 && (s !== ie && (n = void 0,
                                    r = [e]),
                                    a.rejectWith(n, r))
                                }
                            }
                            ;
                            i ? t() : (_.Deferred.getStackHook && (t.stackTrace = _.Deferred.getStackHook()),
                            x.setTimeout(t))
                        }
                    }
                    return _.Deferred(function(e) {
                        a[0][3].add(c(0, e, y(r) ? r : u, e.notifyWith)),
                        a[1][3].add(c(0, e, y(t) ? t : u)),
                        a[2][3].add(c(0, e, y(n) ? n : ie))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? _.extend(e, s) : s
                }
            }
              , o = {};
            return _.each(a, function(e, t) {
                var n = t[2]
                  , r = t[5];
                s[t[1]] = n.add,
                r && n.add(function() {
                    i = r
                }, a[3 - e][2].disable, a[3 - e][3].disable, a[0][2].lock, a[0][3].lock),
                n.add(t[3].fire),
                o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments),
                    this
                }
                ,
                o[t[0] + "With"] = n.fireWith
            }),
            s.promise(o),
            e && e.call(o, o),
            o
        },
        when: function(e) {
            function t(t) {
                return function(e) {
                    i[t] = this,
                    a[t] = 1 < arguments.length ? o.call(arguments) : e,
                    --n || s.resolveWith(i, a)
                }
            }
            var n = arguments.length
              , r = n
              , i = Array(r)
              , a = o.call(arguments)
              , s = _.Deferred();
            if (n <= 1 && (ae(e, s.done(t(r)).resolve, s.reject, !n),
            "pending" === s.state() || y(a[r] && a[r].then)))
                return s.then();
            for (; r--; )
                ae(a[r], t(r), s.reject);
            return s.promise()
        }
    });
    var se = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/
      , oe = (_.Deferred.exceptionHook = function(e, t) {
        x.console && x.console.warn && e && se.test(e.name) && x.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }
    ,
    _.readyException = function(e) {
        x.setTimeout(function() {
            throw e
        })
    }
    ,
    _.Deferred());
    function le() {
        T.removeEventListener("DOMContentLoaded", le),
        x.removeEventListener("load", le),
        _.ready()
    }
    _.fn.ready = function(e) {
        return oe.then(e).catch(function(e) {
            _.readyException(e)
        }),
        this
    }
    ,
    _.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --_.readyWait : _.isReady) || (_.isReady = !0) !== e && 0 < --_.readyWait || oe.resolveWith(T, [_])
        }
    }),
    _.ready.then = oe.then,
    "complete" === T.readyState || "loading" !== T.readyState && !T.documentElement.doScroll ? x.setTimeout(_.ready) : (T.addEventListener("DOMContentLoaded", le),
    x.addEventListener("load", le));
    function d(e, t, n, r, i, a, s) {
        var o = 0
          , l = e.length
          , c = null == n;
        if ("object" === h(n))
            for (o in i = !0,
            n)
                d(e, t, o, n[o], !0, a, s);
        else if (void 0 !== r && (i = !0,
        y(r) || (s = !0),
        t = c ? s ? (t.call(e, r),
        null) : (c = t,
        function(e, t, n) {
            return c.call(_(e), n)
        }
        ) : t))
            for (; o < l; o++)
                t(e[o], n, s ? r : r.call(e[o], o, t(e[o], n)));
        return i ? e : c ? t.call(e) : l ? t(e[0], n) : a
    }
    var ce = /^-ms-/
      , ue = /-([a-z])/g;
    function de(e, t) {
        return t.toUpperCase()
    }
    function b(e) {
        return e.replace(ce, "ms-").replace(ue, de)
    }
    function v(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }
    function pe() {
        this.expando = _.expando + pe.uid++
    }
    pe.uid = 1,
    pe.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            v(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t)
                i[b(t)] = n;
            else
                for (r in t)
                    i[b(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][b(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(b) : (t = b(t))in r ? [t] : t.match(E) || []).length;
                    for (; n--; )
                        delete r[t[n]]
                }
                void 0 !== t && !_.isEmptyObject(r) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            e = e[this.expando];
            return void 0 !== e && !_.isEmptyObject(e)
        }
    };
    var w = new pe
      , c = new pe
      , fe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , he = /[A-Z]/g;
    function me(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(he, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : fe.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                c.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    _.extend({
        hasData: function(e) {
            return c.hasData(e) || w.hasData(e)
        },
        data: function(e, t, n) {
            return c.access(e, t, n)
        },
        removeData: function(e, t) {
            c.remove(e, t)
        },
        _data: function(e, t, n) {
            return w.access(e, t, n)
        },
        _removeData: function(e, t) {
            w.remove(e, t)
        }
    }),
    _.fn.extend({
        data: function(n, e) {
            var t, r, i, a = this[0], s = a && a.attributes;
            if (void 0 !== n)
                return "object" == typeof n ? this.each(function() {
                    c.set(this, n)
                }) : d(this, function(e) {
                    var t;
                    if (a && void 0 === e)
                        return void 0 !== (t = c.get(a, n)) || void 0 !== (t = me(a, n)) ? t : void 0;
                    this.each(function() {
                        c.set(this, n, e)
                    })
                }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (i = c.get(a),
            1 === a.nodeType) && !w.get(a, "hasDataAttrs")) {
                for (t = s.length; t--; )
                    s[t] && 0 === (r = s[t].name).indexOf("data-") && (r = b(r.slice(5)),
                    me(a, r, i[r]));
                w.set(a, "hasDataAttrs", !0)
            }
            return i
        },
        removeData: function(e) {
            return this.each(function() {
                c.remove(this, e)
            })
        }
    }),
    _.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return r = w.get(e, t = (t || "fx") + "queue"),
                n && (!r || Array.isArray(n) ? r = w.access(e, t, _.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = _.queue(e, t)
              , r = n.length
              , i = n.shift()
              , a = _._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete a.stop,
            i.call(e, function() {
                _.dequeue(e, t)
            }, a)),
            !r && a && a.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return w.get(e, n) || w.access(e, n, {
                empty: _.Callbacks("once memory").add(function() {
                    w.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    _.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t,
            t = "fx",
            e--),
            arguments.length < e ? _.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = _.queue(this, t, n);
                _._queueHooks(this, t),
                "fx" === t && "inprogress" !== e[0] && _.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                _.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            function n() {
                --i || a.resolveWith(s, [s])
            }
            var r, i = 1, a = _.Deferred(), s = this, o = this.length;
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; o--; )
                (r = w.get(s[o], e + "queueHooks")) && r.empty && (i++,
                r.empty.add(n));
            return n(),
            a.promise(t)
        }
    });
    function ge(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && S(e) && "none" === _.css(e, "display")
    }
    var e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , ve = new RegExp("^(?:([+-])=|)(" + e + ")([a-z%]*)$","i")
      , p = ["Top", "Right", "Bottom", "Left"]
      , C = T.documentElement
      , S = function(e) {
        return _.contains(e.ownerDocument, e)
    }
      , ye = {
        composed: !0
    };
    C.getRootNode && (S = function(e) {
        return _.contains(e.ownerDocument, e) || e.getRootNode(ye) === e.ownerDocument
    }
    );
    function be(e, t, n, r) {
        var i, a, s = 20, o = r ? function() {
            return r.cur()
        }
        : function() {
            return _.css(e, t, "")
        }
        , l = o(), c = n && n[3] || (_.cssNumber[t] ? "" : "px"), u = e.nodeType && (_.cssNumber[t] || "px" !== c && +l) && ve.exec(_.css(e, t));
        if (u && u[3] !== c) {
            for (c = c || u[3],
            u = +(l /= 2) || 1; s--; )
                _.style(e, t, u + c),
                (1 - a) * (1 - (a = o() / l || .5)) <= 0 && (s = 0),
                u /= a;
            _.style(e, t, (u *= 2) + c),
            n = n || []
        }
        return n && (u = +u || +l || 0,
        i = n[1] ? u + (n[1] + 1) * n[2] : +n[2],
        r) && (r.unit = c,
        r.start = u,
        r.end = i),
        i
    }
    var we = {};
    function M(e, t) {
        for (var n, r, i, a, s, o = [], l = 0, c = e.length; l < c; l++)
            (r = e[l]).style && (n = r.style.display,
            t ? ("none" === n && (o[l] = w.get(r, "display") || null,
            o[l] || (r.style.display = "")),
            "" === r.style.display && ge(r) && (o[l] = (s = a = void 0,
            a = (i = r).ownerDocument,
            i = i.nodeName,
            (s = we[i]) || (a = a.body.appendChild(a.createElement(i)),
            s = _.css(a, "display"),
            a.parentNode.removeChild(a),
            we[i] = s = "none" === s ? "block" : s),
            s))) : "none" !== n && (o[l] = "none",
            w.set(r, "display", n)));
        for (l = 0; l < c; l++)
            null != o[l] && (e[l].style.display = o[l]);
        return e
    }
    _.fn.extend({
        show: function() {
            return M(this, !0)
        },
        hide: function() {
            return M(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ge(this) ? _(this).show() : _(this).hide()
            })
        }
    });
    var xe = /^(?:checkbox|radio)$/i
      , Te = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i
      , _e = /^$|^module$|\/(?:java|ecma)script/i
      , k = ($ = T.createDocumentFragment().appendChild(T.createElement("div")),
    (s = T.createElement("input")).setAttribute("type", "radio"),
    s.setAttribute("checked", "checked"),
    s.setAttribute("name", "t"),
    $.appendChild(s),
    g.checkClone = $.cloneNode(!0).cloneNode(!0).lastChild.checked,
    $.innerHTML = "<textarea>x</textarea>",
    g.noCloneChecked = !!$.cloneNode(!0).lastChild.defaultValue,
    $.innerHTML = "<option></option>",
    g.option = !!$.lastChild,
    {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    });
    function P(e, t) {
        var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && l(e, t) ? _.merge([e], n) : n
    }
    function Ee(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            w.set(e[n], "globalEval", !t || w.get(t[n], "globalEval"))
    }
    k.tbody = k.tfoot = k.colgroup = k.caption = k.thead,
    k.th = k.td,
    g.option || (k.optgroup = k.option = [1, "<select multiple='multiple'>", "</select>"]);
    var Ce = /<|&#?\w+;/;
    function Se(e, t, n, r, i) {
        for (var a, s, o, l, c, u = t.createDocumentFragment(), d = [], p = 0, f = e.length; p < f; p++)
            if ((a = e[p]) || 0 === a)
                if ("object" === h(a))
                    _.merge(d, a.nodeType ? [a] : a);
                else if (Ce.test(a)) {
                    for (s = s || u.appendChild(t.createElement("div")),
                    o = (Te.exec(a) || ["", ""])[1].toLowerCase(),
                    o = k[o] || k._default,
                    s.innerHTML = o[1] + _.htmlPrefilter(a) + o[2],
                    c = o[0]; c--; )
                        s = s.lastChild;
                    _.merge(d, s.childNodes),
                    (s = u.firstChild).textContent = ""
                } else
                    d.push(t.createTextNode(a));
        for (u.textContent = "",
        p = 0; a = d[p++]; )
            if (r && -1 < _.inArray(a, r))
                i && i.push(a);
            else if (l = S(a),
            s = P(u.appendChild(a), "script"),
            l && Ee(s),
            n)
                for (c = 0; a = s[c++]; )
                    _e.test(a.type || "") && n.push(a);
        return u
    }
    var Me = /^([^.]*)(?:\.(.+)|)/;
    function n() {
        return !0
    }
    function f() {
        return !1
    }
    function ke(e, t) {
        return e === function() {
            try {
                return T.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }
    function Pe(e, t, n, r, i, a) {
        var s, o;
        if ("object" == typeof t) {
            for (o in "string" != typeof n && (r = r || n,
            n = void 0),
            t)
                Pe(e, o, n, r, t[o], a);
            return e
        }
        if (null == r && null == i ? (i = n,
        r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
        r = void 0) : (i = r,
        r = n,
        n = void 0)),
        !1 === i)
            i = f;
        else if (!i)
            return e;
        return 1 === a && (s = i,
        (i = function(e) {
            return _().off(e),
            s.apply(this, arguments)
        }
        ).guid = s.guid || (s.guid = _.guid++)),
        e.each(function() {
            _.event.add(this, t, i, r, n)
        })
    }
    function Oe(e, i, a) {
        a ? (w.set(e, i, !1),
        _.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = w.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)
                        (_.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = o.call(arguments),
                    w.set(this, i, r),
                    t = a(this, i),
                    this[i](),
                    r !== (n = w.get(this, i)) || t ? w.set(this, i, !1) : n = {},
                    r !== n)
                        return e.stopImmediatePropagation(),
                        e.preventDefault(),
                        n && n.value
                } else
                    r.length && (w.set(this, i, {
                        value: _.event.trigger(_.extend(r[0], _.Event.prototype), r.slice(1), this)
                    }),
                    e.stopImmediatePropagation())
            }
        })) : void 0 === w.get(e, i) && _.event.add(e, i, n)
    }
    _.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var a, s, o, l, c, u, d, p, f, h = w.get(t);
            if (v(t))
                for (n.handler && (n = (a = n).handler,
                i = a.selector),
                i && _.find.matchesSelector(C, i),
                n.guid || (n.guid = _.guid++),
                o = (o = h.events) || (h.events = Object.create(null)),
                s = (s = h.handle) || (h.handle = function(e) {
                    return void 0 !== _ && _.event.triggered !== e.type ? _.event.dispatch.apply(t, arguments) : void 0
                }
                ),
                l = (e = (e || "").match(E) || [""]).length; l--; )
                    d = f = (p = Me.exec(e[l]) || [])[1],
                    p = (p[2] || "").split(".").sort(),
                    d && (c = _.event.special[d] || {},
                    d = (i ? c.delegateType : c.bindType) || d,
                    c = _.event.special[d] || {},
                    f = _.extend({
                        type: d,
                        origType: f,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && _.expr.match.needsContext.test(i),
                        namespace: p.join(".")
                    }, a),
                    (u = o[d]) || ((u = o[d] = []).delegateCount = 0,
                    c.setup && !1 !== c.setup.call(t, r, p, s)) || t.addEventListener && t.addEventListener(d, s),
                    c.add && (c.add.call(t, f),
                    f.handler.guid || (f.handler.guid = n.guid)),
                    i ? u.splice(u.delegateCount++, 0, f) : u.push(f),
                    _.event.global[d] = !0)
        },
        remove: function(e, t, n, r, i) {
            var a, s, o, l, c, u, d, p, f, h, m, g = w.hasData(e) && w.get(e);
            if (g && (l = g.events)) {
                for (c = (t = (t || "").match(E) || [""]).length; c--; )
                    if (f = m = (o = Me.exec(t[c]) || [])[1],
                    h = (o[2] || "").split(".").sort(),
                    f) {
                        for (d = _.event.special[f] || {},
                        p = l[f = (r ? d.delegateType : d.bindType) || f] || [],
                        o = o[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        s = a = p.length; a--; )
                            u = p[a],
                            !i && m !== u.origType || n && n.guid !== u.guid || o && !o.test(u.namespace) || r && r !== u.selector && ("**" !== r || !u.selector) || (p.splice(a, 1),
                            u.selector && p.delegateCount--,
                            d.remove && d.remove.call(e, u));
                        s && !p.length && (d.teardown && !1 !== d.teardown.call(e, h, g.handle) || _.removeEvent(e, f, g.handle),
                        delete l[f])
                    } else
                        for (f in l)
                            _.event.remove(e, f + t[c], n, r, !0);
                _.isEmptyObject(l) && w.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, a, s = new Array(arguments.length), o = _.event.fix(e), e = (w.get(this, "events") || Object.create(null))[o.type] || [], l = _.event.special[o.type] || {};
            for (s[0] = o,
            t = 1; t < arguments.length; t++)
                s[t] = arguments[t];
            if (o.delegateTarget = this,
            !l.preDispatch || !1 !== l.preDispatch.call(this, o)) {
                for (a = _.event.handlers.call(this, o, e),
                t = 0; (r = a[t++]) && !o.isPropagationStopped(); )
                    for (o.currentTarget = r.elem,
                    n = 0; (i = r.handlers[n++]) && !o.isImmediatePropagationStopped(); )
                        o.rnamespace && !1 !== i.namespace && !o.rnamespace.test(i.namespace) || (o.handleObj = i,
                        o.data = i.data,
                        void 0 !== (i = ((_.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, s)) && !1 === (o.result = i) && (o.preventDefault(),
                        o.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, o),
                o.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, a, s, o = [], l = t.delegateCount, c = e.target;
            if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (a = [],
                        s = {},
                        n = 0; n < l; n++)
                            void 0 === s[i = (r = t[n]).selector + " "] && (s[i] = r.needsContext ? -1 < _(i, this).index(c) : _.find(i, this, null, [c]).length),
                            s[i] && a.push(r);
                        a.length && o.push({
                            elem: c,
                            handlers: a
                        })
                    }
            return c = this,
            l < t.length && o.push({
                elem: c,
                handlers: t.slice(l)
            }),
            o
        },
        addProp: function(t, e) {
            Object.defineProperty(_.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: y(e) ? function() {
                    if (this.originalEvent)
                        return e(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[t]
                }
                ,
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[_.expando] ? e : new _.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    e = this || e;
                    return xe.test(e.type) && e.click && l(e, "input") && Oe(e, "click", n),
                    !1
                },
                trigger: function(e) {
                    e = this || e;
                    return xe.test(e.type) && e.click && l(e, "input") && Oe(e, "click"),
                    !0
                },
                _default: function(e) {
                    e = e.target;
                    return xe.test(e.type) && e.click && l(e, "input") && w.get(e, "click") || l(e, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    _.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    _.Event = function(e, t) {
        if (!(this instanceof _.Event))
            return new _.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? n : f,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && _.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[_.expando] = !0
    }
    ,
    _.Event.prototype = {
        constructor: _.Event,
        isDefaultPrevented: f,
        isPropagationStopped: f,
        isImmediatePropagationStopped: f,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = n,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = n,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = n,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    _.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, _.event.addProp),
    _.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        _.event.special[e] = {
            setup: function() {
                return Oe(this, e, ke),
                !1
            },
            trigger: function() {
                return Oe(this, e),
                !0
            },
            _default: function() {
                return !0
            },
            delegateType: t
        }
    }),
    _.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        _.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget, r = e.handleObj;
                return n && (n === this || _.contains(this, n)) || (e.type = r.origType,
                t = r.handler.apply(this, arguments),
                e.type = i),
                t
            }
        }
    }),
    _.fn.extend({
        on: function(e, t, n, r) {
            return Pe(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return Pe(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                r = e.handleObj,
                _(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler);
            else {
                if ("object" != typeof e)
                    return !1 !== t && "function" != typeof t || (n = t,
                    t = void 0),
                    !1 === n && (n = f),
                    this.each(function() {
                        _.event.remove(this, e, n, t)
                    });
                for (i in e)
                    this.off(i, t, e[i])
            }
            return this
        }
    });
    var Ae = /<script|<style|<link/i
      , $e = /checked\s*(?:[^=]|=\s*.checked.)/i
      , De = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Le(e, t) {
        return l(e, "table") && l(11 !== t.nodeType ? t : t.firstChild, "tr") && _(e).children("tbody")[0] || e
    }
    function ze(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function Ne(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function Ie(e, t) {
        var n, r, i, a;
        if (1 === t.nodeType) {
            if (w.hasData(e) && (a = w.get(e).events))
                for (i in w.remove(t, "handle events"),
                a)
                    for (n = 0,
                    r = a[i].length; n < r; n++)
                        _.event.add(t, i, a[i][n]);
            c.hasData(e) && (e = c.access(e),
            e = _.extend({}, e),
            c.set(t, e))
        }
    }
    function O(n, r, i, a) {
        r = j(r);
        var e, t, s, o, l, c, u = 0, d = n.length, p = d - 1, f = r[0], h = y(f);
        if (h || 1 < d && "string" == typeof f && !g.checkClone && $e.test(f))
            return n.each(function(e) {
                var t = n.eq(e);
                h && (r[0] = f.call(this, e, t.html())),
                O(t, r, i, a)
            });
        if (d && (t = (e = Se(r, n[0].ownerDocument, !1, n, a)).firstChild,
        1 === e.childNodes.length && (e = t),
        t || a)) {
            for (o = (s = _.map(P(e, "script"), ze)).length; u < d; u++)
                l = e,
                u !== p && (l = _.clone(l, !0, !0),
                o) && _.merge(s, P(l, "script")),
                i.call(n[u], l, u);
            if (o)
                for (c = s[s.length - 1].ownerDocument,
                _.map(s, Ne),
                u = 0; u < o; u++)
                    l = s[u],
                    _e.test(l.type || "") && !w.access(l, "globalEval") && _.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? _._evalUrl && !l.noModule && _._evalUrl(l.src, {
                        nonce: l.nonce || l.getAttribute("nonce")
                    }, c) : G(l.textContent.replace(De, ""), l, c))
        }
        return n
    }
    function je(e, t, n) {
        for (var r, i = t ? _.filter(t, e) : e, a = 0; null != (r = i[a]); a++)
            n || 1 !== r.nodeType || _.cleanData(P(r)),
            r.parentNode && (n && S(r) && Ee(P(r, "script")),
            r.parentNode.removeChild(r));
        return e
    }
    _.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, i, a, s, o, l, c, u = e.cloneNode(!0), d = S(e);
            if (!(g.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || _.isXMLDoc(e)))
                for (s = P(u),
                r = 0,
                i = (a = P(e)).length; r < i; r++)
                    o = a[r],
                    l = s[r],
                    c = void 0,
                    "input" === (c = l.nodeName.toLowerCase()) && xe.test(o.type) ? l.checked = o.checked : "input" !== c && "textarea" !== c || (l.defaultValue = o.defaultValue);
            if (t)
                if (n)
                    for (a = a || P(e),
                    s = s || P(u),
                    r = 0,
                    i = a.length; r < i; r++)
                        Ie(a[r], s[r]);
                else
                    Ie(e, u);
            return 0 < (s = P(u, "script")).length && Ee(s, !d && P(e, "script")),
            u
        },
        cleanData: function(e) {
            for (var t, n, r, i = _.event.special, a = 0; void 0 !== (n = e[a]); a++)
                if (v(n)) {
                    if (t = n[w.expando]) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? _.event.remove(n, r) : _.removeEvent(n, r, t.handle);
                        n[w.expando] = void 0
                    }
                    n[c.expando] && (n[c.expando] = void 0)
                }
        }
    }),
    _.fn.extend({
        detach: function(e) {
            return je(this, e, !0)
        },
        remove: function(e) {
            return je(this, e)
        },
        text: function(e) {
            return d(this, function(e) {
                return void 0 === e ? _.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return O(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return O(this, arguments, function(e) {
                var t;
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = Le(this, e)).insertBefore(e, t.firstChild)
            })
        },
        before: function() {
            return O(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return O(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (_.cleanData(P(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return _.clone(this, e, t)
            })
        },
        html: function(e) {
            return d(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Ae.test(e) && !k[(Te.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = _.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType && (_.cleanData(P(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return O(this, arguments, function(e) {
                var t = this.parentNode;
                _.inArray(this, n) < 0 && (_.cleanData(P(this)),
                t) && t.replaceChild(e, this)
            }, n)
        }
    }),
    _.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, s) {
        _.fn[e] = function(e) {
            for (var t, n = [], r = _(e), i = r.length - 1, a = 0; a <= i; a++)
                t = a === i ? this : this.clone(!0),
                _(r[a])[s](t),
                R.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    function Re(e) {
        var t = e.ownerDocument.defaultView;
        return (t = t && t.opener ? t : x).getComputedStyle(e)
    }
    function qe(e, t, n) {
        var r, i = {};
        for (r in t)
            i[r] = e.style[r],
            e.style[r] = t[r];
        for (r in n = n.call(e),
        t)
            e.style[r] = i[r];
        return n
    }
    var Be, He, Fe, Xe, We, Ye, Ge, i, Ve = new RegExp("^(" + e + ")(?!px)[a-z%]+$","i"), Ue = new RegExp(p.join("|"),"i");
    function Qe() {
        var e;
        i && (Ge.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
        i.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
        C.appendChild(Ge).appendChild(i),
        e = x.getComputedStyle(i),
        Be = "1%" !== e.top,
        Ye = 12 === Ke(e.marginLeft),
        i.style.right = "60%",
        Xe = 36 === Ke(e.right),
        He = 36 === Ke(e.width),
        i.style.position = "absolute",
        Fe = 12 === Ke(i.offsetWidth / 3),
        C.removeChild(Ge),
        i = null)
    }
    function Ke(e) {
        return Math.round(parseFloat(e))
    }
    function Ze(e, t, n) {
        var r, i, a = e.style;
        return (n = n || Re(e)) && ("" !== (i = n.getPropertyValue(t) || n[t]) || S(e) || (i = _.style(e, t)),
        !g.pixelBoxStyles()) && Ve.test(i) && Ue.test(t) && (e = a.width,
        t = a.minWidth,
        r = a.maxWidth,
        a.minWidth = a.maxWidth = a.width = i,
        i = n.width,
        a.width = e,
        a.minWidth = t,
        a.maxWidth = r),
        void 0 !== i ? i + "" : i
    }
    function Je(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    Ge = T.createElement("div"),
    (i = T.createElement("div")).style && (i.style.backgroundClip = "content-box",
    i.cloneNode(!0).style.backgroundClip = "",
    g.clearCloneStyle = "content-box" === i.style.backgroundClip,
    _.extend(g, {
        boxSizingReliable: function() {
            return Qe(),
            He
        },
        pixelBoxStyles: function() {
            return Qe(),
            Xe
        },
        pixelPosition: function() {
            return Qe(),
            Be
        },
        reliableMarginLeft: function() {
            return Qe(),
            Ye
        },
        scrollboxSize: function() {
            return Qe(),
            Fe
        },
        reliableTrDimensions: function() {
            var e, t, n;
            return null == We && (e = T.createElement("table"),
            t = T.createElement("tr"),
            n = T.createElement("div"),
            e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate",
            t.style.cssText = "border:1px solid",
            t.style.height = "1px",
            n.style.height = "9px",
            n.style.display = "block",
            C.appendChild(e).appendChild(t).appendChild(n),
            n = x.getComputedStyle(t),
            We = parseInt(n.height, 10) + parseInt(n.borderTopWidth, 10) + parseInt(n.borderBottomWidth, 10) === t.offsetHeight,
            C.removeChild(e)),
            We
        }
    }));
    var et = ["Webkit", "Moz", "ms"]
      , tt = T.createElement("div").style
      , nt = {};
    function rt(e) {
        var t = _.cssProps[e] || nt[e];
        return t || (e in tt ? e : nt[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = et.length; n--; )
                if ((e = et[n] + t)in tt)
                    return e
        }(e) || e)
    }
    var it = /^(none|table(?!-c[ea]).+)/
      , at = /^--/
      , st = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , ot = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function lt(e, t, n) {
        var r = ve.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function ct(e, t, n, r, i, a) {
        var s = "width" === t ? 1 : 0
          , o = 0
          , l = 0;
        if (n === (r ? "border" : "content"))
            return 0;
        for (; s < 4; s += 2)
            "margin" === n && (l += _.css(e, n + p[s], !0, i)),
            r ? ("content" === n && (l -= _.css(e, "padding" + p[s], !0, i)),
            "margin" !== n && (l -= _.css(e, "border" + p[s] + "Width", !0, i))) : (l += _.css(e, "padding" + p[s], !0, i),
            "padding" !== n ? l += _.css(e, "border" + p[s] + "Width", !0, i) : o += _.css(e, "border" + p[s] + "Width", !0, i));
        return !r && 0 <= a && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - a - l - o - .5)) || 0),
        l
    }
    function ut(e, t, n) {
        var r = Re(e)
          , i = (!g.boxSizingReliable() || n) && "border-box" === _.css(e, "boxSizing", !1, r)
          , a = i
          , s = Ze(e, t, r)
          , o = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Ve.test(s)) {
            if (!n)
                return s;
            s = "auto"
        }
        return (!g.boxSizingReliable() && i || !g.reliableTrDimensions() && l(e, "tr") || "auto" === s || !parseFloat(s) && "inline" === _.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === _.css(e, "boxSizing", !1, r),
        a = o in e) && (s = e[o]),
        (s = parseFloat(s) || 0) + ct(e, t, n || (i ? "border" : "content"), a, r, s) + "px"
    }
    function a(e, t, n, r, i) {
        return new a.prototype.init(e,t,n,r,i)
    }
    _.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t)
                        return "" === (t = Ze(e, "opacity")) ? "1" : t
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, a, s, o = b(t), l = at.test(t), c = e.style;
                if (l || (t = rt(o)),
                s = _.cssHooks[t] || _.cssHooks[o],
                void 0 === n)
                    return s && "get"in s && void 0 !== (i = s.get(e, !1, r)) ? i : c[t];
                "string" === (a = typeof n) && (i = ve.exec(n)) && i[1] && (n = be(e, t, i),
                a = "number"),
                null == n || n != n || ("number" !== a || l || (n += i && i[3] || (_.cssNumber[o] ? "" : "px")),
                g.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                s && "set"in s && void 0 === (n = s.set(e, n, r))) || (l ? c.setProperty(t, n) : c[t] = n)
            }
        },
        css: function(e, t, n, r) {
            var i, a = b(t);
            return at.test(t) || (t = rt(a)),
            "normal" === (i = void 0 === (i = (a = _.cssHooks[t] || _.cssHooks[a]) && "get"in a ? a.get(e, !0, n) : i) ? Ze(e, t, r) : i) && t in ot && (i = ot[t]),
            ("" === n || n) && (a = parseFloat(i),
            !0 === n || isFinite(a)) ? a || 0 : i
        }
    }),
    _.each(["height", "width"], function(e, s) {
        _.cssHooks[s] = {
            get: function(e, t, n) {
                if (t)
                    return !it.test(_.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ut(e, s, n) : qe(e, st, function() {
                        return ut(e, s, n)
                    })
            },
            set: function(e, t, n) {
                var r = Re(e)
                  , i = !g.scrollboxSize() && "absolute" === r.position
                  , a = (i || n) && "border-box" === _.css(e, "boxSizing", !1, r)
                  , n = n ? ct(e, s, n, a, r) : 0;
                return a && i && (n -= Math.ceil(e["offset" + s[0].toUpperCase() + s.slice(1)] - parseFloat(r[s]) - ct(e, s, "border", !1, r) - .5)),
                n && (a = ve.exec(t)) && "px" !== (a[3] || "px") && (e.style[s] = t,
                t = _.css(e, s)),
                lt(0, t, n)
            }
        }
    }),
    _.cssHooks.marginLeft = Je(g.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(Ze(e, "marginLeft")) || e.getBoundingClientRect().left - qe(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    _.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, a) {
        _.cssHooks[i + a] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                    n[i + p[t] + a] = r[t] || r[t - 2] || r[0];
                return n
            }
        },
        "margin" !== i && (_.cssHooks[i + a].set = lt)
    }),
    _.fn.extend({
        css: function(e, t) {
            return d(this, function(e, t, n) {
                var r, i, a = {}, s = 0;
                if (Array.isArray(t)) {
                    for (r = Re(e),
                    i = t.length; s < i; s++)
                        a[t[s]] = _.css(e, t[s], !1, r);
                    return a
                }
                return void 0 !== n ? _.style(e, t, n) : _.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }),
    ((_.Tween = a).prototype = {
        constructor: a,
        init: function(e, t, n, r, i, a) {
            this.elem = e,
            this.prop = n,
            this.easing = i || _.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = a || (_.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = a.propHooks[this.prop];
            return (e && e.get ? e : a.propHooks._default).get(this)
        },
        run: function(e) {
            var t, n = a.propHooks[this.prop];
            return this.options.duration ? this.pos = t = _.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            (n && n.set ? n : a.propHooks._default).set(this),
            this
        }
    }).init.prototype = a.prototype,
    (a.propHooks = {
        _default: {
            get: function(e) {
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (e = _.css(e.elem, e.prop, "")) && "auto" !== e ? e : 0
            },
            set: function(e) {
                _.fx.step[e.prop] ? _.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !_.cssHooks[e.prop] && null == e.elem.style[rt(e.prop)] ? e.elem[e.prop] = e.now : _.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = a.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    _.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    _.fx = a.prototype.init,
    _.fx.step = {};
    var A, dt, s, $, pt = /^(?:toggle|show|hide)$/, ft = /queueHooks$/;
    function ht() {
        dt && (!1 === T.hidden && x.requestAnimationFrame ? x.requestAnimationFrame(ht) : x.setTimeout(ht, _.fx.interval),
        _.fx.tick())
    }
    function mt() {
        return x.setTimeout(function() {
            A = void 0
        }),
        A = Date.now()
    }
    function gt(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (n = p[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function vt(e, t, n) {
        for (var r, i = (D.tweeners[t] || []).concat(D.tweeners["*"]), a = 0, s = i.length; a < s; a++)
            if (r = i[a].call(n, t, e))
                return r
    }
    function D(i, e, t) {
        var n, a, r, s, o, l, c, u = 0, d = D.prefilters.length, p = _.Deferred().always(function() {
            delete f.elem
        }), f = function() {
            if (!a) {
                for (var e = A || mt(), e = Math.max(0, h.startTime + h.duration - e), t = 1 - (e / h.duration || 0), n = 0, r = h.tweens.length; n < r; n++)
                    h.tweens[n].run(t);
                if (p.notifyWith(i, [h, t, e]),
                t < 1 && r)
                    return e;
                r || p.notifyWith(i, [h, 1, 0]),
                p.resolveWith(i, [h])
            }
            return !1
        }, h = p.promise({
            elem: i,
            props: _.extend({}, e),
            opts: _.extend(!0, {
                specialEasing: {},
                easing: _.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: A || mt(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                t = _.Tween(i, h.opts, e, t, h.opts.specialEasing[e] || h.opts.easing);
                return h.tweens.push(t),
                t
            },
            stop: function(e) {
                var t = 0
                  , n = e ? h.tweens.length : 0;
                if (!a) {
                    for (a = !0; t < n; t++)
                        h.tweens[t].run(1);
                    e ? (p.notifyWith(i, [h, 1, 0]),
                    p.resolveWith(i, [h, e])) : p.rejectWith(i, [h, e])
                }
                return this
            }
        }), m = h.props, g = m, v = h.opts.specialEasing;
        for (r in g)
            if (o = v[s = b(r)],
            l = g[r],
            Array.isArray(l) && (o = l[1],
            l = g[r] = l[0]),
            r !== s && (g[s] = l,
            delete g[r]),
            (c = _.cssHooks[s]) && "expand"in c)
                for (r in l = c.expand(l),
                delete g[s],
                l)
                    r in g || (g[r] = l[r],
                    v[r] = o);
            else
                v[s] = o;
        for (; u < d; u++)
            if (n = D.prefilters[u].call(h, i, m, h.opts))
                return y(n.stop) && (_._queueHooks(h.elem, h.opts.queue).stop = n.stop.bind(n)),
                n;
        return _.map(m, vt, h),
        y(h.opts.start) && h.opts.start.call(i, h),
        h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always),
        _.fx.timer(_.extend(f, {
            elem: i,
            anim: h,
            queue: h.opts.queue
        })),
        h
    }
    _.Animation = _.extend(D, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return be(n.elem, e, ve.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            for (var n, r = 0, i = (e = y(e) ? (t = e,
            ["*"]) : e.match(E)).length; r < i; r++)
                n = e[r],
                D.tweeners[n] = D.tweeners[n] || [],
                D.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, a, s, o, l, c, u = "width"in t || "height"in t, d = this, p = {}, f = e.style, h = e.nodeType && ge(e), m = w.get(e, "fxshow");
            for (r in n.queue || (null == (s = _._queueHooks(e, "fx")).unqueued && (s.unqueued = 0,
            o = s.empty.fire,
            s.empty.fire = function() {
                s.unqueued || o()
            }
            ),
            s.unqueued++,
            d.always(function() {
                d.always(function() {
                    s.unqueued--,
                    _.queue(e, "fx").length || s.empty.fire()
                })
            })),
            t)
                if (i = t[r],
                pt.test(i)) {
                    if (delete t[r],
                    a = a || "toggle" === i,
                    i === (h ? "hide" : "show")) {
                        if ("show" !== i || !m || void 0 === m[r])
                            continue;
                        h = !0
                    }
                    p[r] = m && m[r] || _.style(e, r)
                }
            if ((l = !_.isEmptyObject(t)) || !_.isEmptyObject(p))
                for (r in u && 1 === e.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY],
                null == (c = m && m.display) && (c = w.get(e, "display")),
                "none" === (u = _.css(e, "display")) && (c ? u = c : (M([e], !0),
                c = e.style.display || c,
                u = _.css(e, "display"),
                M([e]))),
                "inline" === u || "inline-block" === u && null != c) && "none" === _.css(e, "float") && (l || (d.done(function() {
                    f.display = c
                }),
                null == c && (u = f.display,
                c = "none" === u ? "" : u)),
                f.display = "inline-block"),
                n.overflow && (f.overflow = "hidden",
                d.always(function() {
                    f.overflow = n.overflow[0],
                    f.overflowX = n.overflow[1],
                    f.overflowY = n.overflow[2]
                })),
                l = !1,
                p)
                    l || (m ? "hidden"in m && (h = m.hidden) : m = w.access(e, "fxshow", {
                        display: c
                    }),
                    a && (m.hidden = !h),
                    h && M([e], !0),
                    d.done(function() {
                        for (r in h || M([e]),
                        w.remove(e, "fxshow"),
                        p)
                            _.style(e, r, p[r])
                    })),
                    l = vt(h ? m[r] : 0, r, d),
                    r in m || (m[r] = l.start,
                    h && (l.end = l.start,
                    l.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? D.prefilters.unshift(e) : D.prefilters.push(e)
        }
    }),
    _.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? _.extend({}, e) : {
            complete: n || !n && t || y(e) && e,
            duration: e,
            easing: n && t || t && !y(t) && t
        };
        return _.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in _.fx.speeds ? r.duration = _.fx.speeds[r.duration] : r.duration = _.fx.speeds._default),
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            y(r.old) && r.old.call(this),
            r.queue && _.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    _.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ge).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            function i() {
                var e = D(this, _.extend({}, t), s);
                (a || w.get(this, "finish")) && e.stop(!0)
            }
            var a = _.isEmptyObject(t)
              , s = _.speed(e, n, r);
            return i.finish = i,
            a || !1 === s.queue ? this.each(i) : this.queue(s.queue, i)
        },
        stop: function(i, e, a) {
            function s(e) {
                var t = e.stop;
                delete e.stop,
                t(a)
            }
            return "string" != typeof i && (a = e,
            e = i,
            i = void 0),
            e && this.queue(i || "fx", []),
            this.each(function() {
                var e = !0
                  , t = null != i && i + "queueHooks"
                  , n = _.timers
                  , r = w.get(this);
                if (t)
                    r[t] && r[t].stop && s(r[t]);
                else
                    for (t in r)
                        r[t] && r[t].stop && ft.test(t) && s(r[t]);
                for (t = n.length; t--; )
                    n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(a),
                    e = !1,
                    n.splice(t, 1));
                !e && a || _.dequeue(this, i)
            })
        },
        finish: function(s) {
            return !1 !== s && (s = s || "fx"),
            this.each(function() {
                var e, t = w.get(this), n = t[s + "queue"], r = t[s + "queueHooks"], i = _.timers, a = n ? n.length : 0;
                for (t.finish = !0,
                _.queue(this, s, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length; e--; )
                    i[e].elem === this && i[e].queue === s && (i[e].anim.stop(!0),
                    i.splice(e, 1));
                for (e = 0; e < a; e++)
                    n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }),
    _.each(["toggle", "show", "hide"], function(e, r) {
        var i = _.fn[r];
        _.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(gt(r, !0), e, t, n)
        }
    }),
    _.each({
        slideDown: gt("show"),
        slideUp: gt("hide"),
        slideToggle: gt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        _.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }),
    _.timers = [],
    _.fx.tick = function() {
        var e, t = 0, n = _.timers;
        for (A = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || _.fx.stop(),
        A = void 0
    }
    ,
    _.fx.timer = function(e) {
        _.timers.push(e),
        _.fx.start()
    }
    ,
    _.fx.interval = 13,
    _.fx.start = function() {
        dt || (dt = !0,
        ht())
    }
    ,
    _.fx.stop = function() {
        dt = null
    }
    ,
    _.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    _.fn.delay = function(r, e) {
        return r = _.fx && _.fx.speeds[r] || r,
        this.queue(e = e || "fx", function(e, t) {
            var n = x.setTimeout(e, r);
            t.stop = function() {
                x.clearTimeout(n)
            }
        })
    }
    ,
    s = T.createElement("input"),
    $ = T.createElement("select").appendChild(T.createElement("option")),
    s.type = "checkbox",
    g.checkOn = "" !== s.value,
    g.optSelected = $.selected,
    (s = T.createElement("input")).value = "t",
    s.type = "radio",
    g.radioValue = "t" === s.value;
    var yt, bt = _.expr.attrHandle, wt = (_.fn.extend({
        attr: function(e, t) {
            return d(this, _.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                _.removeAttr(this, e)
            })
        }
    }),
    _.extend({
        attr: function(e, t, n) {
            var r, i, a = e.nodeType;
            if (3 !== a && 8 !== a && 2 !== a)
                return void 0 === e.getAttribute ? _.prop(e, t, n) : (1 === a && _.isXMLDoc(e) || (i = _.attrHooks[t.toLowerCase()] || (_.expr.match.bool.test(t) ? yt : void 0)),
                void 0 !== n ? null === n ? void _.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                n) : !(i && "get"in i && null !== (r = i.get(e, t))) && null == (r = _.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    var n;
                    if (!g.radioValue && "radio" === t && l(e, "input"))
                        return n = e.value,
                        e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, i = t && t.match(E);
            if (i && 1 === e.nodeType)
                for (; n = i[r++]; )
                    e.removeAttribute(n)
        }
    }),
    yt = {
        set: function(e, t, n) {
            return !1 === t ? _.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    _.each(_.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var s = bt[t] || _.find.attr;
        bt[t] = function(e, t, n) {
            var r, i, a = t.toLowerCase();
            return n || (i = bt[a],
            bt[a] = r,
            r = null != s(e, t, n) ? a : null,
            bt[a] = i),
            r
        }
    }),
    /^(?:input|select|textarea|button)$/i), xt = /^(?:a|area)$/i;
    function L(e) {
        return (e.match(E) || []).join(" ")
    }
    function z(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function Tt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(E) || []
    }
    _.fn.extend({
        prop: function(e, t) {
            return d(this, _.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[_.propFix[e] || e]
            })
        }
    }),
    _.extend({
        prop: function(e, t, n) {
            var r, i, a = e.nodeType;
            if (3 !== a && 8 !== a && 2 !== a)
                return 1 === a && _.isXMLDoc(e) || (t = _.propFix[t] || t,
                i = _.propHooks[t]),
                void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = _.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : wt.test(e.nodeName) || xt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    g.optSelected || (_.propHooks.selected = {
        get: function(e) {
            e = e.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            e = e.parentNode;
            e && (e.selectedIndex,
            e.parentNode) && e.parentNode.selectedIndex
        }
    }),
    _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        _.propFix[this.toLowerCase()] = this
    }),
    _.fn.extend({
        addClass: function(t) {
            var e, n, r, i, a, s, o = 0;
            if (y(t))
                return this.each(function(e) {
                    _(this).addClass(t.call(this, e, z(this)))
                });
            if ((e = Tt(t)).length)
                for (; n = this[o++]; )
                    if (s = z(n),
                    r = 1 === n.nodeType && " " + L(s) + " ") {
                        for (a = 0; i = e[a++]; )
                            r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        s !== (s = L(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, a, s, o = 0;
            if (y(t))
                return this.each(function(e) {
                    _(this).removeClass(t.call(this, e, z(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((e = Tt(t)).length)
                for (; n = this[o++]; )
                    if (s = z(n),
                    r = 1 === n.nodeType && " " + L(s) + " ") {
                        for (a = 0; i = e[a++]; )
                            for (; -1 < r.indexOf(" " + i + " "); )
                                r = r.replace(" " + i + " ", " ");
                        s !== (s = L(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(i, t) {
            var a = typeof i
              , s = "string" == a || Array.isArray(i);
            return "boolean" == typeof t && s ? t ? this.addClass(i) : this.removeClass(i) : y(i) ? this.each(function(e) {
                _(this).toggleClass(i.call(this, e, z(this), t), t)
            }) : this.each(function() {
                var e, t, n, r;
                if (s)
                    for (t = 0,
                    n = _(this),
                    r = Tt(i); e = r[t++]; )
                        n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else
                    void 0 !== i && "boolean" != a || ((e = z(this)) && w.set(this, "__className__", e),
                    this.setAttribute && this.setAttribute("class", !e && !1 !== i && w.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            for (var t, n = 0, r = " " + e + " "; t = this[n++]; )
                if (1 === t.nodeType && -1 < (" " + L(z(t)) + " ").indexOf(r))
                    return !0;
            return !1
        }
    });
    function _t(e) {
        e.stopPropagation()
    }
    var Et = /\r/g
      , Ct = (_.fn.extend({
        val: function(t) {
            var n, e, r, i = this[0];
            return arguments.length ? (r = y(t),
            this.each(function(e) {
                1 !== this.nodeType || (null == (e = r ? t.call(this, e, _(this).val()) : t) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = _.map(e, function(e) {
                    return null == e ? "" : e + ""
                })),
                (n = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()]) && "set"in n && void 0 !== n.set(this, e, "value")) || (this.value = e)
            })) : i ? (n = _.valHooks[i.type] || _.valHooks[i.nodeName.toLowerCase()]) && "get"in n && void 0 !== (e = n.get(i, "value")) ? e : "string" == typeof (e = i.value) ? e.replace(Et, "") : null == e ? "" : e : void 0
        }
    }),
    _.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = _.find.attr(e, "value");
                    return null != t ? t : L(_.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n = e.options, r = e.selectedIndex, i = "select-one" === e.type, a = i ? null : [], s = i ? r + 1 : n.length, o = r < 0 ? s : i ? r : 0; o < s; o++)
                        if (((t = n[o]).selected || o === r) && !t.disabled && (!t.parentNode.disabled || !l(t.parentNode, "optgroup"))) {
                            if (t = _(t).val(),
                            i)
                                return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, a = _.makeArray(t), s = i.length; s--; )
                        ((r = i[s]).selected = -1 < _.inArray(_.valHooks.option.get(r), a)) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    a
                }
            }
        }
    }),
    _.each(["radio", "checkbox"], function() {
        _.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = -1 < _.inArray(_(e).val(), t)
            }
        },
        g.checkOn || (_.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    g.focusin = "onfocusin"in x,
    /^(?:focusinfocus|focusoutblur)$/)
      , St = (_.extend(_.event, {
        trigger: function(e, t, n, r) {
            var i, a, s, o, l, c, u, d = [n || T], p = F.call(e, "type") ? e.type : e, f = F.call(e, "namespace") ? e.namespace.split(".") : [], h = u = a = n = n || T;
            if (3 !== n.nodeType && 8 !== n.nodeType && !Ct.test(p + _.event.triggered) && (-1 < p.indexOf(".") && (p = (f = p.split(".")).shift(),
            f.sort()),
            o = p.indexOf(":") < 0 && "on" + p,
            (e = e[_.expando] ? e : new _.Event(p,"object" == typeof e && e)).isTrigger = r ? 2 : 3,
            e.namespace = f.join("."),
            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = void 0,
            e.target || (e.target = n),
            t = null == t ? [e] : _.makeArray(t, [e]),
            c = _.event.special[p] || {},
            r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !m(n)) {
                    for (s = c.delegateType || p,
                    Ct.test(s + p) || (h = h.parentNode); h; h = h.parentNode)
                        d.push(h),
                        a = h;
                    a === (n.ownerDocument || T) && d.push(a.defaultView || a.parentWindow || x)
                }
                for (i = 0; (h = d[i++]) && !e.isPropagationStopped(); )
                    u = h,
                    e.type = 1 < i ? s : c.bindType || p,
                    (l = (w.get(h, "events") || Object.create(null))[e.type] && w.get(h, "handle")) && l.apply(h, t),
                    (l = o && h[o]) && l.apply && v(h) && (e.result = l.apply(h, t),
                    !1 === e.result) && e.preventDefault();
                return e.type = p,
                r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(d.pop(), t) || !v(n) || o && y(n[p]) && !m(n) && ((a = n[o]) && (n[o] = null),
                _.event.triggered = p,
                e.isPropagationStopped() && u.addEventListener(p, _t),
                n[p](),
                e.isPropagationStopped() && u.removeEventListener(p, _t),
                _.event.triggered = void 0,
                a) && (n[o] = a),
                e.result
            }
        },
        simulate: function(e, t, n) {
            n = _.extend(new _.Event, n, {
                type: e,
                isSimulated: !0
            });
            _.event.trigger(n, null, t)
        }
    }),
    _.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                _.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return _.event.trigger(e, t, n, !0)
        }
    }),
    g.focusin || _.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        function i(e) {
            _.event.simulate(r, e.target, _.event.fix(e))
        }
        _.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this.document || this
                  , t = w.access(e, r);
                t || e.addEventListener(n, i, !0),
                w.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this
                  , t = w.access(e, r) - 1;
                t ? w.access(e, r, t) : (e.removeEventListener(n, i, !0),
                w.remove(e, r))
            }
        }
    }),
    x.location)
      , Mt = {
        guid: Date.now()
    }
      , kt = /\?/
      , Pt = (_.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e)
            return null;
        try {
            t = (new x.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {}
        return n = t && t.getElementsByTagName("parsererror")[0],
        t && !n || _.error("Invalid XML: " + (n ? _.map(n.childNodes, function(e) {
            return e.textContent
        }).join("\n") : e)),
        t
    }
    ,
    /\[\]$/)
      , Ot = /\r?\n/g
      , At = /^(?:submit|button|image|reset|file)$/i
      , $t = /^(?:input|select|textarea|keygen)/i;
    _.param = function(e, t) {
        function n(e, t) {
            t = y(t) ? t() : t,
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == t ? "" : t)
        }
        var r, i = [];
        if (null == e)
            return "";
        if (Array.isArray(e) || e.jquery && !_.isPlainObject(e))
            _.each(e, function() {
                n(this.name, this.value)
            });
        else
            for (r in e)
                !function n(r, e, i, a) {
                    if (Array.isArray(e))
                        _.each(e, function(e, t) {
                            i || Pt.test(r) ? a(r, t) : n(r + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, i, a)
                        });
                    else if (i || "object" !== h(e))
                        a(r, e);
                    else
                        for (var t in e)
                            n(r + "[" + t + "]", e[t], i, a)
                }(r, e[r], t, n);
        return i.join("&")
    }
    ,
    _.fn.extend({
        serialize: function() {
            return _.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = _.prop(this, "elements");
                return e ? _.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !_(this).is(":disabled") && $t.test(this.nodeName) && !At.test(e) && (this.checked || !xe.test(e))
            }).map(function(e, t) {
                var n = _(this).val();
                return null == n ? null : Array.isArray(n) ? _.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Ot, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Ot, "\r\n")
                }
            }).get()
        }
    });
    var Dt = /%20/g
      , Lt = /#.*$/
      , zt = /([?&])_=[^&]*/
      , Nt = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , It = /^(?:GET|HEAD)$/
      , jt = /^\/\//
      , Rt = {}
      , qt = {}
      , Bt = "*/".concat("*")
      , Ht = T.createElement("a");
    function Ft(a) {
        return function(e, t) {
            "string" != typeof e && (t = e,
            e = "*");
            var n, r = 0, i = e.toLowerCase().match(E) || [];
            if (y(t))
                for (; n = i[r++]; )
                    "+" === n[0] ? (n = n.slice(1) || "*",
                    (a[n] = a[n] || []).unshift(t)) : (a[n] = a[n] || []).push(t)
        }
    }
    function Xt(t, r, i, a) {
        var s = {}
          , o = t === qt;
        function l(e) {
            var n;
            return s[e] = !0,
            _.each(t[e] || [], function(e, t) {
                t = t(r, i, a);
                return "string" != typeof t || o || s[t] ? o ? !(n = t) : void 0 : (r.dataTypes.unshift(t),
                l(t),
                !1)
            }),
            n
        }
        return l(r.dataTypes[0]) || !s["*"] && l("*")
    }
    function Wt(e, t) {
        var n, r, i = _.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r = r || {})[n] = t[n]);
        return r && _.extend(!0, e, r),
        e
    }
    Ht.href = St.href,
    _.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: St.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(St.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Bt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": _.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Wt(Wt(e, _.ajaxSettings), t) : Wt(_.ajaxSettings, e)
        },
        ajaxPrefilter: Ft(Rt),
        ajaxTransport: Ft(qt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e,
            e = void 0);
            var l, c, u, n, d, p, f, r, h = _.ajaxSetup({}, t = t || {}), m = h.context || h, g = h.context && (m.nodeType || m.jquery) ? _(m) : _.event, v = _.Deferred(), y = _.Callbacks("once memory"), b = h.statusCode || {}, i = {}, a = {}, s = "canceled", w = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (p) {
                        if (!n)
                            for (n = {}; t = Nt.exec(u); )
                                n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                        t = n[e.toLowerCase() + " "]
                    }
                    return null == t ? null : t.join(", ")
                },
                getAllResponseHeaders: function() {
                    return p ? u : null
                },
                setRequestHeader: function(e, t) {
                    return null == p && (e = a[e.toLowerCase()] = a[e.toLowerCase()] || e,
                    i[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == p && (h.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    if (e)
                        if (p)
                            w.always(e[w.status]);
                        else
                            for (var t in e)
                                b[t] = [b[t], e[t]];
                    return this
                },
                abort: function(e) {
                    e = e || s;
                    return l && l.abort(e),
                    o(0, e),
                    this
                }
            };
            if (v.promise(w),
            h.url = ((e || h.url || St.href) + "").replace(jt, St.protocol + "//"),
            h.type = t.method || t.type || h.method || h.type,
            h.dataTypes = (h.dataType || "*").toLowerCase().match(E) || [""],
            null == h.crossDomain) {
                e = T.createElement("a");
                try {
                    e.href = h.url,
                    e.href = e.href,
                    h.crossDomain = Ht.protocol + "//" + Ht.host != e.protocol + "//" + e.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = _.param(h.data, h.traditional)),
            Xt(Rt, h, t, w),
            !p) {
                for (r in (f = _.event && h.global) && 0 == _.active++ && _.event.trigger("ajaxStart"),
                h.type = h.type.toUpperCase(),
                h.hasContent = !It.test(h.type),
                c = h.url.replace(Lt, ""),
                h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Dt, "+")) : (e = h.url.slice(c.length),
                h.data && (h.processData || "string" == typeof h.data) && (c += (kt.test(c) ? "&" : "?") + h.data,
                delete h.data),
                !1 === h.cache && (c = c.replace(zt, "$1"),
                e = (kt.test(c) ? "&" : "?") + "_=" + Mt.guid++ + e),
                h.url = c + e),
                h.ifModified && (_.lastModified[c] && w.setRequestHeader("If-Modified-Since", _.lastModified[c]),
                _.etag[c]) && w.setRequestHeader("If-None-Match", _.etag[c]),
                (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && w.setRequestHeader("Content-Type", h.contentType),
                w.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Bt + "; q=0.01" : "") : h.accepts["*"]),
                h.headers)
                    w.setRequestHeader(r, h.headers[r]);
                if (h.beforeSend && (!1 === h.beforeSend.call(m, w, h) || p))
                    return w.abort();
                if (s = "abort",
                y.add(h.complete),
                w.done(h.success),
                w.fail(h.error),
                l = Xt(qt, h, t, w)) {
                    if (w.readyState = 1,
                    f && g.trigger("ajaxSend", [w, h]),
                    p)
                        return w;
                    h.async && 0 < h.timeout && (d = x.setTimeout(function() {
                        w.abort("timeout")
                    }, h.timeout));
                    try {
                        p = !1,
                        l.send(i, o)
                    } catch (e) {
                        if (p)
                            throw e;
                        o(-1, e)
                    }
                } else
                    o(-1, "No Transport")
            }
            return w;
            function o(e, t, n, r) {
                var i, a, s, o = t;
                p || (p = !0,
                d && x.clearTimeout(d),
                l = void 0,
                u = r || "",
                w.readyState = 0 < e ? 4 : 0,
                r = 200 <= e && e < 300 || 304 === e,
                n && (s = function(e, t, n) {
                    for (var r, i, a, s, o = e.contents, l = e.dataTypes; "*" === l[0]; )
                        l.shift(),
                        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in o)
                            if (o[i] && o[i].test(r)) {
                                l.unshift(i);
                                break
                            }
                    if (l[0]in n)
                        a = l[0];
                    else {
                        for (i in n) {
                            if (!l[0] || e.converters[i + " " + l[0]]) {
                                a = i;
                                break
                            }
                            s = s || i
                        }
                        a = a || s
                    }
                    if (a)
                        return a !== l[0] && l.unshift(a),
                        n[a]
                }(h, w, n)),
                !r && -1 < _.inArray("script", h.dataTypes) && _.inArray("json", h.dataTypes) < 0 && (h.converters["text script"] = function() {}
                ),
                s = function(e, t, n, r) {
                    var i, a, s, o, l, c = {}, u = e.dataTypes.slice();
                    if (u[1])
                        for (s in e.converters)
                            c[s.toLowerCase()] = e.converters[s];
                    for (a = u.shift(); a; )
                        if (e.responseFields[a] && (n[e.responseFields[a]] = t),
                        !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        l = a,
                        a = u.shift())
                            if ("*" === a)
                                a = l;
                            else if ("*" !== l && l !== a) {
                                if (!(s = c[l + " " + a] || c["* " + a]))
                                    for (i in c)
                                        if ((o = i.split(" "))[1] === a && (s = c[l + " " + o[0]] || c["* " + o[0]])) {
                                            !0 === s ? s = c[i] : !0 !== c[i] && (a = o[0],
                                            u.unshift(o[1]));
                                            break
                                        }
                                if (!0 !== s)
                                    if (s && e.throws)
                                        t = s(t);
                                    else
                                        try {
                                            t = s(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: s ? e : "No conversion from " + l + " to " + a
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(h, s, w, r),
                r ? (h.ifModified && ((n = w.getResponseHeader("Last-Modified")) && (_.lastModified[c] = n),
                n = w.getResponseHeader("etag")) && (_.etag[c] = n),
                204 === e || "HEAD" === h.type ? o = "nocontent" : 304 === e ? o = "notmodified" : (o = s.state,
                i = s.data,
                r = !(a = s.error))) : (a = o,
                !e && o || (o = "error",
                e < 0 && (e = 0))),
                w.status = e,
                w.statusText = (t || o) + "",
                r ? v.resolveWith(m, [i, o, w]) : v.rejectWith(m, [w, o, a]),
                w.statusCode(b),
                b = void 0,
                f && g.trigger(r ? "ajaxSuccess" : "ajaxError", [w, h, r ? i : a]),
                y.fireWith(m, [w, o]),
                f && (g.trigger("ajaxComplete", [w, h]),
                --_.active || _.event.trigger("ajaxStop")))
            }
        },
        getJSON: function(e, t, n) {
            return _.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return _.get(e, void 0, t, "script")
        }
    }),
    _.each(["get", "post"], function(e, i) {
        _[i] = function(e, t, n, r) {
            return y(t) && (r = r || n,
            n = t,
            t = void 0),
            _.ajax(_.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, _.isPlainObject(e) && e))
        }
    }),
    _.ajaxPrefilter(function(e) {
        for (var t in e.headers)
            "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }),
    _._evalUrl = function(e, t, n) {
        return _.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                _.globalEval(e, t, n)
            }
        })
    }
    ,
    _.fn.extend({
        wrapAll: function(e) {
            return this[0] && (y(e) && (e = e.call(this[0])),
            e = _(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && e.insertBefore(this[0]),
            e.map(function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(n) {
            return y(n) ? this.each(function(e) {
                _(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = _(this)
                  , t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = y(t);
            return this.each(function(e) {
                _(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                _(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    _.expr.pseudos.hidden = function(e) {
        return !_.expr.pseudos.visible(e)
    }
    ,
    _.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    _.ajaxSettings.xhr = function() {
        try {
            return new x.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var Yt = {
        0: 200,
        1223: 204
    }
      , Gt = _.ajaxSettings.xhr()
      , Vt = (g.cors = !!Gt && "withCredentials"in Gt,
    g.ajax = Gt = !!Gt,
    _.ajaxTransport(function(i) {
        var a, s;
        if (g.cors || Gt && !i.crossDomain)
            return {
                send: function(e, t) {
                    var n, r = i.xhr();
                    if (r.open(i.type, i.url, i.async, i.username, i.password),
                    i.xhrFields)
                        for (n in i.xhrFields)
                            r[n] = i.xhrFields[n];
                    for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType),
                    i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
                    e)
                        r.setRequestHeader(n, e[n]);
                    a = function(e) {
                        return function() {
                            a && (a = s = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null,
                            "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Yt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                binary: r.response
                            } : {
                                text: r.responseText
                            }, r.getAllResponseHeaders()))
                        }
                    }
                    ,
                    r.onload = a(),
                    s = r.onerror = r.ontimeout = a("error"),
                    void 0 !== r.onabort ? r.onabort = s : r.onreadystatechange = function() {
                        4 === r.readyState && x.setTimeout(function() {
                            a && s()
                        })
                    }
                    ,
                    a = a("abort");
                    try {
                        r.send(i.hasContent && i.data || null)
                    } catch (e) {
                        if (a)
                            throw e
                    }
                },
                abort: function() {
                    a && a()
                }
            }
    }),
    _.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    _.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return _.globalEval(e),
                e
            }
        }
    }),
    _.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    _.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs)
            return {
                send: function(e, t) {
                    r = _("<script>").attr(n.scriptAttrs || {}).prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", i = function(e) {
                        r.remove(),
                        i = null,
                        e && t("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    T.head.appendChild(r[0])
                },
                abort: function() {
                    i && i()
                }
            }
    }),
    [])
      , Ut = /(=)\?(?=&|$)|\?\?/
      , Qt = (_.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Vt.pop() || _.expando + "_" + Mt.guid++;
            return this[e] = !0,
            e
        }
    }),
    _.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, a, s = !1 !== e.jsonp && (Ut.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(e.data) && "data");
        if (s || "jsonp" === e.dataTypes[0])
            return r = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
            s ? e[s] = e[s].replace(Ut, "$1" + r) : !1 !== e.jsonp && (e.url += (kt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
            e.converters["script json"] = function() {
                return a || _.error(r + " was not called"),
                a[0]
            }
            ,
            e.dataTypes[0] = "json",
            i = x[r],
            x[r] = function() {
                a = arguments
            }
            ,
            n.always(function() {
                void 0 === i ? _(x).removeProp(r) : x[r] = i,
                e[r] && (e.jsonpCallback = t.jsonpCallback,
                Vt.push(r)),
                a && y(i) && i(a[0]),
                a = i = void 0
            }),
            "script"
    }),
    g.createHTMLDocument = ((e = T.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === e.childNodes.length),
    _.parseHTML = function(e, t, n) {
        var r;
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (g.createHTMLDocument ? ((r = (t = T.implementation.createHTMLDocument("")).createElement("base")).href = T.location.href,
        t.head.appendChild(r)) : t = T),
        r = !n && [],
        (n = K.exec(e)) ? [t.createElement(n[1])] : (n = Se([e], t, r),
        r && r.length && _(r).remove(),
        _.merge([], n.childNodes)))
    }
    ,
    _.fn.load = function(e, t, n) {
        var r, i, a, s = this, o = e.indexOf(" ");
        return -1 < o && (r = L(e.slice(o)),
        e = e.slice(0, o)),
        y(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (i = "POST"),
        0 < s.length && _.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            a = arguments,
            s.html(r ? _("<div>").append(_.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, a || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    _.expr.pseudos.animated = function(t) {
        return _.grep(_.timers, function(e) {
            return t === e.elem
        }).length
    }
    ,
    _.offset = {
        setOffset: function(e, t, n) {
            var r, i, a, s, o = _.css(e, "position"), l = _(e), c = {};
            "static" === o && (e.style.position = "relative"),
            a = l.offset(),
            r = _.css(e, "top"),
            s = _.css(e, "left"),
            o = ("absolute" === o || "fixed" === o) && -1 < (r + s).indexOf("auto") ? (i = (o = l.position()).top,
            o.left) : (i = parseFloat(r) || 0,
            parseFloat(s) || 0),
            null != (t = y(t) ? t.call(e, n, _.extend({}, a)) : t).top && (c.top = t.top - a.top + i),
            null != t.left && (c.left = t.left - a.left + o),
            "using"in t ? t.using.call(e, c) : l.css(c)
        }
    },
    _.fn.extend({
        offset: function(t) {
            var e, n;
            return arguments.length ? void 0 === t ? this : this.each(function(e) {
                _.offset.setOffset(this, t, e)
            }) : (n = this[0]) ? n.getClientRects().length ? (e = n.getBoundingClientRect(),
            n = n.ownerDocument.defaultView,
            {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0], i = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === _.css(r, "position"))
                    t = r.getBoundingClientRect();
                else {
                    for (t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === _.css(e, "position"); )
                        e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = _(e).offset()).top += _.css(e, "borderTopWidth", !0),
                    i.left += _.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - _.css(r, "marginTop", !0),
                    left: t.left - i.left - _.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === _.css(e, "position"); )
                    e = e.offsetParent;
                return e || C
            })
        }
    }),
    _.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var a = "pageYOffset" === i;
        _.fn[t] = function(e) {
            return d(this, function(e, t, n) {
                var r;
                if (m(e) ? r = e : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
                    return r ? r[i] : e[t];
                r ? r.scrollTo(a ? r.pageXOffset : n, a ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }),
    _.each(["top", "left"], function(e, n) {
        _.cssHooks[n] = Je(g.pixelPosition, function(e, t) {
            if (t)
                return t = Ze(e, n),
                Ve.test(t) ? _(e).position()[n] + "px" : t
        })
    }),
    _.each({
        Height: "height",
        Width: "width"
    }, function(s, o) {
        _.each({
            padding: "inner" + s,
            content: o,
            "": "outer" + s
        }, function(r, a) {
            _.fn[a] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e)
                  , i = r || (!0 === e || !0 === t ? "margin" : "border");
                return d(this, function(e, t, n) {
                    var r;
                    return m(e) ? 0 === a.indexOf("outer") ? e["inner" + s] : e.document.documentElement["client" + s] : 9 === e.nodeType ? (r = e.documentElement,
                    Math.max(e.body["scroll" + s], r["scroll" + s], e.body["offset" + s], r["offset" + s], r["client" + s])) : void 0 === n ? _.css(e, t, i) : _.style(e, t, n, i)
                }, o, n ? e : void 0, n)
            }
        })
    }),
    _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        _.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    _.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    _.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        _.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }),
    /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g)
      , Kt = (_.proxy = function(e, t) {
        var n, r;
        if ("string" == typeof t && (r = e[t],
        t = e,
        e = r),
        y(e))
            return n = o.call(arguments, 2),
            (r = function() {
                return e.apply(t || this, n.concat(o.call(arguments)))
            }
            ).guid = e.guid = e.guid || _.guid++,
            r
    }
    ,
    _.holdReady = function(e) {
        e ? _.readyWait++ : _.ready(!0)
    }
    ,
    _.isArray = Array.isArray,
    _.parseJSON = JSON.parse,
    _.nodeName = l,
    _.isFunction = y,
    _.isWindow = m,
    _.camelCase = b,
    _.type = h,
    _.now = Date.now,
    _.isNumeric = function(e) {
        var t = _.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    _.trim = function(e) {
        return null == e ? "" : (e + "").replace(Qt, "")
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return _
    }),
    x.jQuery)
      , Zt = x.$;
    return _.noConflict = function(e) {
        return x.$ === _ && (x.$ = Zt),
        e && x.jQuery === _ && (x.jQuery = Kt),
        _
    }
    ,
    void 0 === N && (x.jQuery = x.$ = _),
    _
}),
function(u) {
    u.fn.sectionsnap = function(e) {
        var t, a = u.extend({
            delay: 100,
            selector: ".section",
            reference: .9,
            animationTime: 400,
            offsetTop: 0,
            offsetBottom: 0
        }, e), s = this, o = "down", n = u(window).scrollTop(), r = !1, i = function() {
            o = u(window).scrollTop() >= n ? "down" : "up",
            n = u(window).scrollTop()
        }, l = function() {
            var t, e = s.find(a.selector), n = u(window).scrollTop(), r = u(window).height() * a.reference, i = n + r - 1;
            return "down" == o ? e.each(function() {
                var e = u(this).position().top;
                if (n < e && e <= i)
                    return t = u(this),
                    !1
            }) : (i = n - r + 1,
            e.each(function() {
                var e = u(this).position().top;
                if (e < n && i <= e)
                    return t = u(this),
                    !1
            })),
            t
        }, c = function() {
            var e = l();
            e && (r = !0,
            u("html, body").animate({
                scrollTop: e.offset().top
            }, a.animationTime, function() {
                window.clearTimeout(t),
                r = !1
            }))
        };
        return u(window).scroll(function() {
            var e;
            r || (e = u(window).scrollTop()) < a.offsetTop || e > u("html").height() - u(window).height() - a.offsetBottom || (i(),
            window.clearTimeout(t),
            t = window.setTimeout(c, a.delay))
        }),
        this
    }
}(jQuery),
window.addEventListener("load", toggleStickyTitle),
window.addEventListener("resize", toggleStickyTitle),
function(i) {
    i(document).ready(function() {
        function n(e) {
            var t = i(window).scrollTop() + i(window).height();
            return i(e).offset().top + i(e).height() <= t
        }
        function e() {
            i(".gl-stats-counter").each(function() {
                var e = i(this)
                  , t = e.attr("data-count");
                "true" != (ended = e.attr("ended")) && n(e) && (i({
                    countNum: e.text()
                }).animate({
                    countNum: t
                }, {
                    duration: 2500,
                    easing: "swing",
                    step: function() {
                        e.text(Math.floor(this.countNum))
                    },
                    complete: function() {
                        e.text(this.countNum.toLocaleString("en-US"))
                    }
                }),
                e.attr("ended", "true"))
            })
        }
        0 < i(".gl-stats-counter").length && (n(".gl-stats-counter") && e(),
        i(document).scroll(function() {
            n(".gl-stats-counter") && e()
        })),
        i(".gl-two-content .arrow-btn").click(function() {
            i(this).toggleClass("active"),
            i(this).parents(".content-row").toggleClass("activeBack")
        }),
        i(".nav-toggle-btn").click(function() {
            i("nav.main-navigation").addClass("navigation-active"),
            i(".site-header").addClass("navActive"),
            i("html").addClass("scrollLock")
        }),
        i(".main-navigation .menu-close-btn, nav.main-navigation a").click(function() {
            i("nav.main-navigation").removeClass("navigation-active"),
            i(".site-header").removeClass("navActive"),
            i("html").removeClass("scrollLock")
        }),
        i(".asc-splash-bg-sec .service-links").on("mouseenter", function() {
            var e = i(this).attr("id");
            i(".asc-splash-bg-sec .splashTextGroup text").css("opacity", "0"),
            i(`.asc-splash-bg-sec .splashTextGroup text[data-text=${e}]`).css("opacity", "1"),
            i(".asc-splash-bg-sec .site-logo-box").css("opacity", "0.35")
        }),
        i(".asc-splash-bg-sec .service-links").on("mouseleave", function() {
            i(".asc-splash-bg-sec .site-logo-box").css("opacity", "1")
        });
        // new Swiper(".hero-slider-box.swiper",{
        //     slidesPerView: 1,
        //     spaceBetween: 20,
        //     speed: 1e3,
        //     parallax: !0,
        //     autoplay: {
        //         delay: 5e3
        //     },
        //     pagination: {
        //         el: ".asc-hero-sec .dots-pagination",
        //         clickable: !0
        //     }
        // });
        document.querySelectorAll(".impact-show .impact-show-right img").forEach(e=>{
            gsap.timeline({
                defaults: {
                    duration: 1
                },
                scrollTrigger: {
                    trigger: e,
                    scrub: !0,
                    start: "center 100%",
                    end: "center 40%"
                }
            }).to(e, {
                x: "20%",
                clipPath: "polygon(0% 0,100% 0,100% 100%,0 100%)",
                opacity: "1",
                filter: "grayscale(0)",
                duration: 1.5
            }, 0)
        }
        ),
        gsap.timeline({
            scrollTrigger: {
                trigger: ".impact-show-left",
                pin: !0,
                pinSpacing: !1,
                start: "center center",
                end: "+=500px",
                scrub: .5
            }
        }).addLabel("start").from(".impact-show-left", {
            translateX: 300
        })
    }),
    i(window).bind("load", function() {
        setTimeout(function() {
            AOS.init({
                duration: 1e3,
                offset: 100,
                once: !1,
                easing: "ease-out"
            })
        }, 300)
    }),
    i(window).on("load scroll", function() {
        var e = i(window)
          , t = i("body")
          , n = i("section.gl-sec-selector")
          , r = e.scrollTop() + e.height() / 3;
        n.each(function() {
            var e = i(this);
            e.position().top <= r && e.position().top + e.height() > r && (t.removeClass(function(e, t) {
                return (t.match(/(^|\s)color-\S+/g) || []).join(" ")
            }),
            i(this).find(".gl-sec-bg-gradient").css("opacity", "1"),
            e = i(this).data("color"),
            t.css("background", e))
        })
    }).scroll()
}(jQuery),
function() {
    const t = document.getElementById("site-navigation");
    if (t) {
        const i = t.getElementsByTagName("button")[0];
        if (void 0 !== i) {
            var e = t.getElementsByTagName("ul")[0];
            if (void 0 === e)
                i.style.display = "none";
            else {
                e.classList.contains("nav-menu") || e.classList.add("nav-menu"),
                i.addEventListener("click", function() {
                    t.classList.toggle("toggled"),
                    "true" === i.getAttribute("aria-expanded") ? i.setAttribute("aria-expanded", "false") : i.setAttribute("aria-expanded", "true")
                }),
                document.addEventListener("click", function(e) {
                    t.contains(e.target) || (t.classList.remove("toggled"),
                    i.setAttribute("aria-expanded", "false"))
                });
                var n = e.getElementsByTagName("a")
                  , e = e.querySelectorAll(".menu-item-has-children > a, .page_item_has_children > a");
                for (const a of n)
                    a.addEventListener("focus", r, !0),
                    a.addEventListener("blur", r, !0);
                for (const s of e)
                    s.addEventListener("touchstart", r, !1)
            }
        }
        function r() {
            if ("focus" === event.type || "blur" === event.type) {
                let e = this;
                for (; !e.classList.contains("nav-menu"); )
                    "li" === e.tagName.toLowerCase() && e.classList.toggle("focus"),
                    e = e.parentNode
            }
            if ("touchstart" === event.type) {
                var e = this.parentNode;
                event.preventDefault();
                for (const t of e.parentNode.children)
                    e !== t && t.classList.remove("focus");
                e.classList.toggle("focus")
            }
        }
    }
}(),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, function(e) {
    "use strict";
    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    function i() {
        return Me || "undefined" != typeof window && (Me = window.gsap) && Me.registerPlugin && Me
    }
    function rt(e, t) {
        return ~De.indexOf(e) && De[De.indexOf(e) + 1][t]
    }
    function it(e) {
        return !!~a.indexOf(e)
    }
    function Ce(e, t, n, r, i) {
        e.addEventListener(t, n, {
            passive: !r,
            capture: !!i
        })
    }
    function Se(e, t, n, r) {
        e.removeEventListener(t, n, !!r)
    }
    function at() {
        return Pe && Pe.isPressed || $e.cache++
    }
    function s(n, r) {
        function i(e) {
            var t;
            return e || 0 === e ? (u && (ke.history.scrollRestoration = "manual"),
            t = Pe && Pe.isPressed,
            e = i.v = Math.round(e) || (Pe && Pe.iOS ? 1 : 0),
            n(e),
            i.cacheID = $e.cache,
            t && d("ss", e)) : (r || $e.cache !== i.cacheID || d("ref")) && (i.cacheID = $e.cache,
            i.v = n()),
            i.v + i.offset
        }
        return i.offset = 0,
        n && i
    }
    function Oe(e) {
        return Me.utils.toArray(e)[0] || ("string" == typeof e && !1 !== Me.config().nullTargetWarn ? console.warn("Element not found:", e) : null)
    }
    function st(t, e) {
        var n = e.s
          , e = e.sc
          , r = (it(t) && (t = ft.scrollingElement || ht),
        $e.indexOf(t))
          , i = e === ze.sc ? 1 : 2
          , a = (~r || (r = $e.push(t) - 1),
        $e[r + i] || t.addEventListener("scroll", at),
        $e[r + i])
          , r = a || ($e[r + i] = s(rt(t, n), !0) || (it(t) ? e : s(function(e) {
            return arguments.length ? t[n] = e : t[n]
        })));
        return r.target = t,
        a || (r.smooth = "smooth" === Me.getProperty(t, "scrollBehavior")),
        r
    }
    function ot(e, t, i) {
        function a(e, t) {
            var n = wt();
            t || r < n - l ? (o = s,
            s = e,
            c = l,
            l = n) : i ? s += e : s = o + (e - o) / (n - c) * (l - c)
        }
        var s = e
          , o = e
          , l = wt()
          , c = l
          , r = t || 50
          , u = Math.max(500, 3 * r);
        return {
            update: a,
            reset: function() {
                o = s = i ? 0 : s,
                c = l = 0
            },
            getVelocity: function(e) {
                var t = c
                  , n = o
                  , r = wt();
                return !e && 0 !== e || e === s || a(e),
                l === c || u < r - c ? 0 : (s + (i ? n : -n)) / ((i ? r : l) - t) * 1e3
            }
        }
    }
    function lt(e, t) {
        return t && !e._gsapAllow && e.preventDefault(),
        e.changedTouches ? e.changedTouches[0] : e
    }
    function ct(e) {
        var t = Math.max.apply(Math, e)
          , e = Math.min.apply(Math, e);
        return Math.abs(t) >= Math.abs(e) ? t : e
    }
    function ut() {
        var e, n, t;
        (yt = Me.core.globals().ScrollTrigger) && yt.core && (e = yt.core,
        n = e.bridge || {},
        t = e._scrollers,
        e = e._proxies,
        t.push.apply(t, $e),
        e.push.apply(e, De),
        $e = t,
        De = e,
        d = function(e, t) {
            return n[e](t)
        }
        )
    }
    function dt(e) {
        return (Me = e || i()) && "undefined" != typeof document && document.body && (ke = window,
        ht = (ft = document).documentElement,
        mt = ft.body,
        a = [ke, ft, ht, mt],
        Me.utils.clamp,
        vt = "onpointerenter"in mt ? "pointer" : "mouse",
        gt = k.isTouch = ke.matchMedia && ke.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart"in ke || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints ? 2 : 0,
        Ae = k.eventTypes = ("ontouchstart"in ht ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown"in ht ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","),
        setTimeout(function() {
            return u = 0
        }, 500),
        ut(),
        pt = 1),
        pt
    }
    var Me, pt, ke, ft, ht, mt, gt, vt, yt, a, Pe, Ae, o, l, c, u = 1, bt = [], $e = [], De = [], wt = Date.now, d = function(e, t) {
        return t
    }, p = "scrollLeft", f = "scrollTop", Le = {
        s: p,
        p: "left",
        p2: "Left",
        os: "right",
        os2: "Right",
        d: "width",
        d2: "Width",
        a: "x",
        sc: s(function(e) {
            return arguments.length ? ke.scrollTo(e, ze.sc()) : ke.pageXOffset || ft[p] || ht[p] || mt[p] || 0
        })
    }, ze = {
        s: f,
        p: "top",
        p2: "Top",
        os: "bottom",
        os2: "Bottom",
        d: "height",
        d2: "Height",
        a: "y",
        op: Le,
        sc: s(function(e) {
            return arguments.length ? ke.scrollTo(Le.sc(), e) : ke.pageYOffset || ft[f] || ht[f] || mt[f] || 0
        })
    }, k = (Le.op = ze,
    $e.cache = 0,
    h.prototype.init = function(e) {
        pt || dt(Me) || console.warn("Please gsap.registerPlugin(Observer)"),
        yt || ut();
        var i = e.tolerance
          , a = e.dragMinimum
          , t = e.type
          , s = e.target
          , n = e.lineHeight
          , r = e.debounce
          , o = e.preventDefault
          , l = e.onStop
          , N = e.onStopDelay
          , c = e.ignore
          , u = e.wheelSpeed
          , I = e.event
          , j = e.onDragStart
          , R = e.onDragEnd
          , q = e.onDrag
          , B = e.onPress
          , H = e.onRelease
          , F = e.onRight
          , X = e.onLeft
          , W = e.onUp
          , Y = e.onDown
          , G = e.onChangeX
          , V = e.onChangeY
          , U = e.onChange
          , Q = e.onToggleX
          , K = e.onToggleY
          , Z = e.onHover
          , J = e.onHoverEnd
          , d = e.onMove
          , ee = e.ignoreCheck
          , p = e.isNormalizer
          , te = e.onGestureStart
          , ne = e.onGestureEnd
          , re = e.onWheel
          , ie = e.onEnable
          , ae = e.onDisable
          , se = e.onClick
          , f = e.scrollSpeed
          , h = e.capture
          , oe = e.allowClicks
          , le = e.lockAxis
          , ce = e.onLockAxis;
        function ue() {
            return Ee = wt()
        }
        function m(e, t) {
            return (C.event = e) && c && ~c.indexOf(e.target) || t && _e && "touch" !== e.pointerType || ee && ee(e, t)
        }
        function g() {
            var e = C.deltaX = ct($)
              , t = C.deltaY = ct(D)
              , n = Math.abs(e) >= i
              , r = Math.abs(t) >= i;
            U && (n || r) && U(C, e, t, $, D),
            n && (F && 0 < C.deltaX && F(C),
            X && C.deltaX < 0 && X(C),
            G && G(C),
            Q && C.deltaX < 0 != S < 0 && Q(C),
            S = C.deltaX,
            $[0] = $[1] = $[2] = 0),
            r && (Y && 0 < C.deltaY && Y(C),
            W && C.deltaY < 0 && W(C),
            V && V(C),
            K && C.deltaY < 0 != M < 0 && K(C),
            M = C.deltaY,
            D[0] = D[1] = D[2] = 0),
            (x || w) && (d && d(C),
            w && (q(C),
            w = !1),
            x = !1),
            _ && (_ = !1,
            ce) && ce(C),
            T && (re(C),
            T = !1),
            b = 0
        }
        function de(e, t, n) {
            $[n] += e,
            D[n] += t,
            C._vx.update(e),
            C._vy.update(t),
            r ? b = b || requestAnimationFrame(g) : g()
        }
        function pe(e, t) {
            le && !E && (C.axis = E = Math.abs(e) > Math.abs(t) ? "x" : "y",
            _ = !0),
            "y" !== E && ($[2] += e,
            C._vx.update(e, !0)),
            "x" !== E && (D[2] += t,
            C._vy.update(t, !0)),
            r ? b = b || requestAnimationFrame(g) : g()
        }
        function v(e) {
            var t, n, r, i;
            !m(e, 1) && (t = (e = lt(e, o)).clientX,
            e = e.clientY,
            n = t - C.x,
            r = e - C.y,
            i = C.isDragging,
            C.x = t,
            C.y = e,
            i || Math.abs(C.startX - t) >= a || Math.abs(C.startY - e) >= a) && (q && (w = !0),
            i || (C.isDragging = !0),
            pe(n, r),
            i || j && j(C))
        }
        function y(t) {
            var e, n, r;
            m(t, 1) || (Se(p ? s : A, Ae[1], v, !0),
            e = !isNaN(C.y - C.startY),
            n = C.isDragging && (3 < Math.abs(C.x - C.startX) || 3 < Math.abs(C.y - C.startY)),
            r = lt(t),
            !n && e && (C._vx.reset(),
            C._vy.reset(),
            o) && oe && Me.delayedCall(.08, function() {
                var e;
                300 < wt() - Ee && !t.defaultPrevented && (t.target.click ? t.target.click() : A.createEvent && ((e = A.createEvent("MouseEvents")).initMouseEvent("click", !0, !0, ke, 1, r.screenX, r.screenY, r.clientX, r.clientY, !1, !1, !1, !1, 0, null),
                t.target.dispatchEvent(e)))
            }),
            C.isDragging = C.isGesturing = C.isPressed = !1,
            l && !p && z.restart(!0),
            R && n && R(C),
            H && H(C, n))
        }
        function fe(e) {
            return e.touches && 1 < e.touches.length && (C.isGesturing = !0,
            te(e, C.isDragging))
        }
        function he() {
            return C.isGesturing = !1,
            ne(C)
        }
        function me(e) {
            var t;
            m(e) || (e = k(),
            t = P(),
            de((e - xe) * f, (t - Te) * f, 1),
            xe = e,
            Te = t,
            l && z.restart(!0))
        }
        function ge(e) {
            var t;
            m(e) || (e = lt(e, o),
            re && (T = !0),
            t = (1 === e.deltaMode ? n : 2 === e.deltaMode ? ke.innerHeight : 1) * u,
            de(e.deltaX * t, e.deltaY * t, 0),
            l && !p && z.restart(!0))
        }
        function ve(e) {
            var t, n, r;
            !m(e) && (t = e.clientX,
            e = e.clientY,
            n = t - C.x,
            r = e - C.y,
            C.x = t,
            C.y = e,
            x = !0,
            n || r) && pe(n, r)
        }
        function ye(e) {
            C.event = e,
            Z(C)
        }
        function be(e) {
            C.event = e,
            J(C)
        }
        function we(e) {
            return m(e) || lt(e, o) && se(C)
        }
        this.target = s = Oe(s) || ht,
        this.vars = e;
        var b, w, x, T, _, E, c = c && Me.utils.toArray(c), i = i || 1e-9, a = a || 0, u = u || 1, f = f || 1, t = t || "wheel,touch,pointer", r = !1 !== r, n = n || parseFloat(ke.getComputedStyle(mt).lineHeight) || 22, C = this, S = 0, M = 0, k = st(s, Le), P = st(s, ze), xe = k(), Te = P(), _e = ~t.indexOf("touch") && !~t.indexOf("pointer") && "pointerdown" === Ae[0], O = it(s), A = s.ownerDocument || ft, $ = [0, 0, 0], D = [0, 0, 0], Ee = 0, L = C.onPress = function(e) {
            m(e, 1) || (C.axis = E = null,
            z.pause(),
            C.isPressed = !0,
            e = lt(e),
            S = M = 0,
            C.startX = C.x = e.clientX,
            C.startY = C.y = e.clientY,
            C._vx.reset(),
            C._vy.reset(),
            Ce(p ? s : A, Ae[1], v, o, !0),
            C.deltaX = C.deltaY = 0,
            B && B(C))
        }
        , z = C._dc = Me.delayedCall(N || .25, function() {
            C._vx.reset(),
            C._vy.reset(),
            z.pause(),
            l && l(C)
        }).pause();
        C.deltaX = C.deltaY = 0,
        C._vx = ot(0, 50, !0),
        C._vy = ot(0, 50, !0),
        C.scrollX = k,
        C.scrollY = P,
        C.isDragging = C.isGesturing = C.isPressed = !1,
        C.enable = function(e) {
            return C.isEnabled || (Ce(O ? A : s, "scroll", at),
            0 <= t.indexOf("scroll") && Ce(O ? A : s, "scroll", me, o, h),
            0 <= t.indexOf("wheel") && Ce(s, "wheel", ge, o, h),
            (0 <= t.indexOf("touch") && gt || 0 <= t.indexOf("pointer")) && (Ce(s, Ae[0], L, o, h),
            Ce(A, Ae[2], y),
            Ce(A, Ae[3], y),
            oe && Ce(s, "click", ue, !1, !0),
            se && Ce(s, "click", we),
            te && Ce(A, "gesturestart", fe),
            ne && Ce(A, "gestureend", he),
            Z && Ce(s, vt + "enter", ye),
            J && Ce(s, vt + "leave", be),
            d) && Ce(s, vt + "move", ve),
            C.isEnabled = !0,
            e && e.type && L(e),
            ie && ie(C)),
            C
        }
        ,
        C.disable = function() {
            C.isEnabled && (bt.filter(function(e) {
                return e !== C && it(e.target)
            }).length || Se(O ? A : s, "scroll", at),
            C.isPressed && (C._vx.reset(),
            C._vy.reset(),
            Se(p ? s : A, Ae[1], v, !0)),
            Se(O ? A : s, "scroll", me, h),
            Se(s, "wheel", ge, h),
            Se(s, Ae[0], L, h),
            Se(A, Ae[2], y),
            Se(A, Ae[3], y),
            Se(s, "click", ue, !0),
            Se(s, "click", we),
            Se(A, "gesturestart", fe),
            Se(A, "gestureend", he),
            Se(s, vt + "enter", ye),
            Se(s, vt + "leave", be),
            Se(s, vt + "move", ve),
            C.isEnabled = C.isPressed = C.isDragging = !1,
            ae) && ae(C)
        }
        ,
        C.kill = function() {
            C.disable();
            var e = bt.indexOf(C);
            0 <= e && bt.splice(e, 1),
            Pe === C && (Pe = 0)
        }
        ,
        bt.push(C),
        p && it(s) && (Pe = C),
        C.enable(I)
    }
    ,
    o = h,
    (l = [{
        key: "velocityX",
        get: function() {
            return this._vx.getVelocity()
        }
    }, {
        key: "velocityY",
        get: function() {
            return this._vy.getVelocity()
        }
    }]) && r(o.prototype, l),
    c && r(o, c),
    h);
    function h(e) {
        this.init(e)
    }
    function m() {
        return Ut = 1
    }
    function g() {
        return Ut = 0
    }
    function Ne(e) {
        return e
    }
    function xt(e) {
        return Math.round(1e5 * e) / 1e5 || 0
    }
    function v() {
        return "undefined" != typeof window
    }
    function y() {
        return He || v() && (He = window.gsap) && He.registerPlugin && He
    }
    function Tt(e) {
        return !!~A.indexOf(e)
    }
    function _t(e) {
        return rt(e, "getBoundingClientRect") || (Tt(e) ? function() {
            return vn.width = Fe.innerWidth,
            vn.height = Fe.innerHeight,
            vn
        }
        : function() {
            return Ft(e)
        }
        )
    }
    function Et(e, t) {
        t.s;
        var n, r = t.d2, i = t.d, t = t.a;
        return (n = "scroll" + r) && (t = rt(e, n)) ? t() - _t(e)()[i] : Tt(e) ? (We[n] || Ye[n]) - (Fe["inner" + r] || We["client" + r] || Ye["client" + r]) : e[n] - e["offset" + r]
    }
    function b(e, t) {
        for (var n = 0; n < I.length; n += 3)
            t && !~t.indexOf(I[n + 1]) || e(I[n], I[n + 1], I[n + 2])
    }
    function Ie(e) {
        return "string" == typeof e
    }
    function je(e) {
        return "function" == typeof e
    }
    function Ct(e) {
        return "number" == typeof e
    }
    function St(e) {
        return "object" == typeof e
    }
    function Mt(e, t, n) {
        e && e.progress(t ? 0 : 1) && n && e.pause()
    }
    function kt(e, t) {
        e.enabled && (t = t(e)) && t.totalTime && (e.callbackAnimation = t)
    }
    function Re(e) {
        return Fe.getComputedStyle(e)
    }
    function Pt(e, t) {
        for (var n in t)
            n in e || (e[n] = t[n]);
        return e
    }
    function Ot(e, t) {
        t = t.d2;
        return e["offset" + t] || e["client" + t] || 0
    }
    function At(e) {
        var t, n = [], r = e.labels, i = e.duration();
        for (t in r)
            n.push(r[t] / i);
        return n
    }
    function $t(i) {
        var a = He.utils.snap(i)
          , s = Array.isArray(i) && i.slice(0).sort(function(e, t) {
            return e - t
        });
        return s ? function(e, t, n) {
            var r;
            if (void 0 === n && (n = .001),
            !t)
                return a(e);
            if (0 < t) {
                for (e -= n,
                r = 0; r < s.length; r++)
                    if (s[r] >= e)
                        return s[r];
                return s[r - 1]
            }
            for (r = s.length,
            e += n; r--; )
                if (s[r] <= e)
                    return s[r];
            return s[0]
        }
        : function(e, t, n) {
            void 0 === n && (n = .001);
            var r = a(e);
            return !t || Math.abs(r - e) < n || r - e < 0 == t < 0 ? r : a(t < 0 ? e - i : e + i)
        }
    }
    function w(t, n, e, r) {
        e.split(",").forEach(function(e) {
            return t(n, e, r)
        })
    }
    function qe(e, t, n, r, i) {
        return e.addEventListener(t, n, {
            passive: !r,
            capture: !!i
        })
    }
    function Be(e, t, n, r) {
        return e.removeEventListener(t, n, !!r)
    }
    function x(e, t, n) {
        n && n.wheelHandler && e(t, "wheel", n)
    }
    function Dt(e, t) {
        var n, r;
        return Ie(e) && (r = ~(n = e.indexOf("=")) ? (e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1)) : 0,
        ~n && (e.indexOf("%") > n && (r *= t / 100),
        e = e.substr(0, n - 1)),
        e = r + (e in G ? G[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)),
        e
    }
    function Lt(e, t, n, r, i, a, s, o) {
        var l = i.startColor
          , c = i.endColor
          , u = i.fontSize
          , d = i.indent
          , i = i.fontWeight
          , p = Xe.createElement("div")
          , f = Tt(n) || "fixed" === rt(n, "pinType")
          , h = -1 !== e.indexOf("scroller")
          , n = f ? Ye : n
          , m = -1 !== e.indexOf("start")
          , l = m ? l : c
          , c = "border-color:" + l + ";font-size:" + u + ";color:" + l + ";font-weight:" + i + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return c += "position:" + ((h || o) && f ? "fixed;" : "absolute;"),
        !h && !o && f || (c += (r === ze ? "right" : Y) + ":" + (a + parseFloat(d)) + "px;"),
        s && (c += "box-sizing:border-box;text-align:left;width:" + s.offsetWidth + "px;"),
        p._isStart = m,
        p.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
        p.style.cssText = c,
        p.innerText = t || 0 === t ? e + "-" + t : e,
        n.children[0] ? n.insertBefore(p, n.children[0]) : n.appendChild(p),
        p._offset = p["offset" + r.op.d2],
        M(p, 0, r, m),
        p
    }
    function T() {
        return 34 < Qe() - Ke && (X = X || requestAnimationFrame(Z))
    }
    function zt() {
        t && t.isPressed && !(t.startX > Ye.clientWidth) || ($e.cache++,
        t ? X = X || requestAnimationFrame(Z) : Z(),
        Ke || Q("scrollStart"),
        Ke = Qe())
    }
    function _() {
        B = Fe.innerWidth,
        q = Fe.innerHeight
    }
    function Nt() {
        $e.cache++,
        Ge || j || Xe.fullscreenElement || Xe.webkitFullscreenElement || R && B === Fe.innerWidth && !(Math.abs(Fe.innerHeight - q) > .25 * Fe.innerHeight) || $.restart(!0)
    }
    function It() {
        return Be(P, "scrollEnd", It) || Xt(!0)
    }
    function E(e) {
        for (var t = 0; t < n.length; t += 5)
            (!e || n[t + 4] && n[t + 4].query === e) && (n[t].style.cssText = n[t + 1],
            n[t].getBBox && n[t].setAttribute("transform", n[t + 2] || ""),
            n[t + 3].uncache = 1)
    }
    function C(e, t) {
        var n;
        for (Ve = 0; Ve < tt.length; Ve++)
            !(n = tt[Ve]) || t && n._ctx !== t || (e ? n.kill(1) : n.revert(!0, !0));
        t && E(t),
        t || Q("revert")
    }
    function S(e, t) {
        $e.cache++,
        !t && Ue || $e.forEach(function(e) {
            return je(e) && e.cacheID++ && (e.rec = 0)
        }),
        Ie(e) && (Fe.history.scrollRestoration = F = e)
    }
    function jt(e, t, n, r) {
        if (!e._gsap.swappedIn) {
            for (var i, a = J.length, s = t.style, o = e.style; a--; )
                s[i = J[a]] = n[i];
            s.position = "absolute" === n.position ? "absolute" : "relative",
            "inline" === n.display && (s.display = "inline-block"),
            o[Y] = o.right = "auto",
            s.flexBasis = n.flexBasis || "auto",
            s.overflow = "visible",
            s.boxSizing = "border-box",
            s[sn] = Ot(e, Le) + et,
            s[on] = Ot(e, ze) + et,
            s[Ze] = o[Je] = o.top = o.left = "0",
            Wt(r),
            o[sn] = o.maxWidth = n[sn],
            o[on] = o.maxHeight = n[on],
            o[Ze] = n[Ze],
            e.parentNode !== t && (e.parentNode.insertBefore(t, e),
            t.appendChild(e)),
            e._gsap.swappedIn = !0
        }
    }
    function Rt(e) {
        for (var t = ee.length, n = e.style, r = [], i = 0; i < t; i++)
            r.push(ee[i], n[ee[i]]);
        return r.t = e,
        r
    }
    function qt(e, t, n, r, i, a, s, o, l, c, u, d, p) {
        Ie(e = je(e) ? e(o) : e) && "max" === e.substr(0, 3) && (e = d + ("=" === e.charAt(4) ? Dt("0" + e.substr(3), n) : 0));
        var f, h, m, g = p ? p.time() : 0;
        return p && p.seek(0),
        Ct(e) ? s && M(s, n, r, !0) : (je(t) && (t = t(o)),
        o = (e || "0").split(" "),
        h = Oe(t) || Ye,
        (t = Ft(h) || {}) && (t.left || t.top) || "none" !== Re(h).display || (f = h.style.display,
        h.style.display = "block",
        t = Ft(h),
        f ? h.style.display = f : h.style.removeProperty("display")),
        f = Dt(o[0], t[r.d]),
        o = Dt(o[1] || "0", n),
        e = t[r.p] - l[r.p] - c + f + i - o,
        s && M(s, o, r, n - o < 20 || s._isStart && 20 < o),
        n -= n - o),
        a && (t = a._isStart,
        m = "scroll" + r.d2,
        M(a, c = e + n, r, t && 20 < c || !t && (u ? Math.max(Ye[m], We[m]) : a.parentNode[m]) <= c + 1),
        u) && (l = Ft(s),
        u) && (a.style[r.op.p] = l[r.op.p] - r.op.m - a._offset + et),
        p && h && (m = Ft(h),
        p.seek(d),
        f = Ft(h),
        p._caScrollDist = m[r.p] - f[r.p],
        e = e / p._caScrollDist * d),
        p && p.seek(g),
        p ? e : Math.round(e)
    }
    function Bt(e, t, n, r) {
        if (e.parentNode !== t) {
            var i, a, s = e.style;
            if (t === Ye) {
                for (i in e._stOrig = s.cssText,
                a = Re(e))
                    +i || ne.test(i) || !a[i] || "string" != typeof s[i] || "0" === i || (s[i] = a[i]);
                s.top = n,
                s.left = r
            } else
                s.cssText = e._stOrig;
            He.core.getCache(e).uncache = 1,
            t.appendChild(e)
        }
    }
    function Ht(o, e) {
        function l(e, t, n, r, i) {
            var a = l.tween
              , s = t.onComplete;
            return n = n || d(),
            i = r && i || 0,
            r = r || e - n,
            a && a.kill(),
            c = Math.round(n),
            t[p] = e,
            (t.modifiers = {})[p] = function(e) {
                return (e = Math.round(d())) !== c && e !== u && 3 < Math.abs(e - c) && 3 < Math.abs(e - u) ? (a.kill(),
                l.tween = 0) : e = n + r * a.ratio + i * a.ratio * a.ratio,
                u = c,
                c = Math.round(e)
            }
            ,
            t.onComplete = function() {
                l.tween = 0,
                s && s.call(a)
            }
            ,
            a = l.tween = He.to(o, t)
        }
        var c, u, d = st(o, e), p = "_scroll" + e.p2;
        return (o[p] = d).wheelHandler = function() {
            return l.tween && l.tween.kill() && (l.tween = 0)
        }
        ,
        qe(o, "wheel", d.wheelHandler),
        l
    }
    k.version = "3.11.4",
    k.create = function(e) {
        return new k(e)
    }
    ,
    k.register = dt,
    k.getAll = function() {
        return bt.slice()
    }
    ,
    k.getById = function(t) {
        return bt.filter(function(e) {
            return e.vars.id === t
        })[0]
    }
    ,
    i() && Me.registerPlugin(k);
    function Ft(e, t) {
        return t = t && "matrix(1, 0, 0, 1, 0, 0)" !== Re(e)[L] && He.to(e, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0
        }).progress(1),
        e = e.getBoundingClientRect(),
        t && t.progress(0).kill(),
        e
    }
    function M(e, t, n, r) {
        var i = {
            display: "block"
        }
          , a = n[r ? "os2" : "p2"]
          , s = n[r ? "p2" : "os2"];
        e._isFlipped = r,
        i[n.a + "Percent"] = r ? -100 : 0,
        i[n.a] = r ? "1px" : 0,
        i["border" + a + dn] = 1,
        i["border" + s + dn] = 0,
        i[n.p] = t + "px",
        He.set(e, i)
    }
    function Xt(e, t) {
        !Ke || e ? (Ue = P.isRefreshing = !0,
        $e.forEach(function(e) {
            return je(e) && e.cacheID++ && (e.rec = e())
        }),
        e = Q("refreshInit"),
        Qt && P.sort(),
        t || C(),
        $e.forEach(function(e) {
            je(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"),
            e(0))
        }),
        tt.slice(0).forEach(function(e) {
            return e.refresh()
        }),
        tt.forEach(function(e, t) {
            var n, r;
            e._subPinOffset && e.pin && (n = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
            r = e.pin[n],
            e.revert(!0, 1),
            e.adjustPinSpacing(e.pin[n] - r),
            e.revert(!1, 1))
        }),
        tt.forEach(function(e) {
            return "max" === e.vars.end && e.setPositions(e.start, Math.max(e.start + 1, Et(e.scroller, e._dir)))
        }),
        e.forEach(function(e) {
            return e && e.render && e.render(-1)
        }),
        $e.forEach(function(e) {
            je(e) && (e.smooth && requestAnimationFrame(function() {
                return e.target.style.scrollBehavior = "smooth"
            }),
            e.rec) && e(e.rec)
        }),
        S(F, 1),
        $.pause(),
        mn++,
        Z(2),
        tt.forEach(function(e) {
            return je(e.vars.onRefresh) && e.vars.onRefresh(e)
        }),
        Ue = P.isRefreshing = !1,
        Q("refresh")) : qe(P, "scrollEnd", It)
    }
    function Wt(e) {
        if (e) {
            var t, n, r = e.t.style, i = e.length, a = 0;
            for ((e.t._gsap || He.core.getCache(e.t)).uncache = 1; a < i; a += 2)
                n = e[a + 1],
                t = e[a],
                n ? r[t] = n : r[t] && r.removeProperty(t.replace(te, "-$1").toLowerCase())
        }
    }
    var He, O, Fe, Xe, We, Ye, A, $, Yt, Gt, Vt, D, Ge, Ut, L, Ve, z, N, I, Qt, Kt, j, t, R, q, B, H, Zt, F, Jt, X, Ue, en, tn, nn = 1, Qe = Date.now, W = Qe(), Ke = 0, rn = 0, an = Math.abs, Y = "bottom", sn = "width", on = "height", ln = "Right", cn = "Left", un = "Bottom", Ze = "padding", Je = "margin", dn = "Width", et = "px", pn = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal"
    }, fn = {
        toggleActions: "play",
        anticipatePin: 0
    }, G = {
        top: 0,
        left: 0,
        center: .5,
        bottom: 1,
        right: 1
    }, tt = [], hn = {}, V = {}, U = [], Q = function(e) {
        return V[e] && V[e].map(function(e) {
            return e()
        }) || U
    }, n = [], mn = 0, K = 0, gn = 1, Z = function(e) {
        if (!Ue || 2 === e) {
            P.isUpdating = !0,
            tn && tn.update(0);
            var t = tt.length
              , e = Qe()
              , n = 50 <= e - W
              , r = t && tt[0].scroll();
            if (gn = r < K ? -1 : 1,
            K = r,
            n && (Ke && !Ut && 200 < e - Ke && (Ke = 0,
            Q("scrollEnd")),
            Vt = W,
            W = e),
            gn < 0) {
                for (Ve = t; 0 < Ve--; )
                    tt[Ve] && tt[Ve].update(0, n);
                gn = 1
            } else
                for (Ve = 0; Ve < t; Ve++)
                    tt[Ve] && tt[Ve].update(0, n);
            P.isUpdating = !1
        }
        X = 0
    }, J = ["left", "top", Y, "right", Je + un, Je + ln, Je + "Top", Je + cn, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], ee = J.concat([sn, on, "boxSizing", "max" + dn, "maxHeight", "position", Je, Ze, Ze + "Top", Ze + ln, Ze + un, Ze + cn]), te = /([A-Z])/g, vn = {
        left: 0,
        top: 0
    }, ne = /(webkit|moz|length|cssText|inset)/i, P = (nt.prototype.init = function(g, v) {
        var y, r, m, b, F, w, x, T, X, W, Y, _, G, V, U, E, Q, C, K, Z, J, ee, S, s, p, M, k, P, te, ne, f, re, i, ie, ae, se, O, A, $, oe, le, o, ce, ue, h, de, D, pe, fe, L, z, N, I, j, he, me, ge, R, ve, ye, be, we, xe, q, B, Te, e, H, _e, l, c, u, t, n, d, Ee, a, Ce, Se, Me, ke, Pe;
        this.progress = this.start = 0,
        this.vars && this.kill(!0, !0),
        rn ? (f = (g = Pt(Ie(g) || Ct(g) || g.nodeType ? {
            trigger: g
        } : g, fn)).onUpdate,
        re = g.toggleClass,
        i = g.id,
        ie = g.onToggle,
        ae = g.onRefresh,
        se = g.scrub,
        O = g.trigger,
        A = g.pin,
        $ = g.pinSpacing,
        oe = g.invalidateOnRefresh,
        le = g.anticipatePin,
        o = g.onScrubComplete,
        ce = g.onSnapComplete,
        ue = g.once,
        h = g.snap,
        de = g.pinReparent,
        n = g.pinSpacer,
        D = g.containerAnimation,
        pe = g.fastScrollEnd,
        fe = g.preventOverlaps,
        L = g.horizontal || g.containerAnimation && !1 !== g.horizontal ? Le : ze,
        z = !se && 0 !== se,
        N = Oe(g.scroller || Fe),
        e = He.core.getCache(N),
        I = Tt(N),
        j = "fixed" === ("pinType"in g ? g.pinType : rt(N, "pinType") || I && "fixed"),
        he = [g.onEnter, g.onLeave, g.onEnterBack, g.onLeaveBack],
        me = z && g.toggleActions.split(" "),
        t = ("markers"in g ? g : fn).markers,
        ge = !I && parseFloat(Re(N)["border" + L.p2 + dn]) || 0,
        R = this,
        ve = g.onRefreshInit && function() {
            return g.onRefreshInit(R)
        }
        ,
        Ce = N,
        Se = I,
        Me = L.d,
        ke = L.d2,
        Pe = L.a,
        ye = (Pe = rt(Ce, "getBoundingClientRect")) ? function() {
            return Pe()[Me]
        }
        : function() {
            return (Se ? Fe["inner" + ke] : Ce["client" + ke]) || 0
        }
        ,
        a = N,
        be = !I || ~De.indexOf(a) ? _t(a) : function() {
            return vn
        }
        ,
        xe = we = 0,
        q = st(N, L),
        Zt(R),
        R._dir = L,
        le *= 45,
        R.scroller = N,
        R.scroll = D ? D.time.bind(D) : q,
        b = q(),
        R.vars = g,
        v = v || g.animation,
        "refreshPriority"in g && (Qt = 1,
        -9999 === g.refreshPriority) && (tn = R),
        e.tweenScroll = e.tweenScroll || {
            top: Ht(N, ze),
            left: Ht(N, Le)
        },
        R.tweenTo = y = e.tweenScroll[L.p],
        R.scrubDuration = function(e) {
            (s = Ct(e) && e) ? S ? S.duration(e) : S = He.to(v, {
                ease: "expo",
                totalProgress: "+=0.001",
                duration: s,
                paused: !0,
                onComplete: function() {
                    return o && o(R)
                }
            }) : (S && S.progress(1).kill(),
            S = 0)
        }
        ,
        v && (v.vars.lazy = !1,
        v._initted || !1 !== v.vars.immediateRender && !1 !== g.immediateRender && v.duration() && v.render(0, !0, !0),
        R.animation = v.pause(),
        (v.scrollTrigger = R).scrubDuration(se),
        J = 0,
        i = i || v.vars.id),
        tt.push(R),
        h && (St(h) && !h.push || (h = {
            snapTo: h
        }),
        "scrollBehavior"in Ye.style && He.set(I ? [Ye, We] : N, {
            scrollBehavior: "auto"
        }),
        $e.forEach(function(e) {
            return je(e) && e.target === (I ? Xe.scrollingElement || We : N) && (e.smooth = !1)
        }),
        m = je(h.snapTo) ? h.snapTo : "labels" === h.snapTo ? (Ee = v,
        function(e) {
            return He.utils.snap(At(Ee), e)
        }
        ) : "labelsDirectional" === h.snapTo ? (d = v,
        function(e, t) {
            return $t(At(d))(e, t.direction)
        }
        ) : !1 !== h.directional ? function(e, t) {
            return $t(h.snapTo)(e, Qe() - xe < 500 ? 0 : t.direction)
        }
        : He.utils.snap(h.snapTo),
        p = St(p = h.duration || {
            min: .1,
            max: 2
        }) ? Gt(p.min, p.max) : Gt(p, p),
        M = He.delayedCall(h.delay || s / 2 || .1, function() {
            var e, t, n, r, i, a, s, o, l, c = q(), u = Qe() - xe < 500, d = y.tween;
            !(u || Math.abs(R.getVelocity()) < 10) || d || Ut || we === c ? R.isActive && we !== c && M.restart(!0) : (e = (c - w) / T,
            t = v && !z ? v.totalProgress() : e,
            u = !u && (t - ee) / (Qe() - Vt) * 1e3 || 0,
            n = He.utils.clamp(-e, 1 - e, an(u / 2) * u / .185),
            r = e + (!1 === h.inertia ? 0 : n),
            i = Gt(0, 1, m(r, R)),
            a = Math.round(w + i * T),
            s = h.onStart,
            o = h.onInterrupt,
            l = h.onComplete,
            c <= x && w <= c && a !== c && (d && !d._initted && d.data <= an(a - c) || (!1 === h.inertia && (n = i - e),
            y(a, {
                duration: p(an(.185 * Math.max(an(r - t), an(i - t)) / u / .05 || 0)),
                ease: h.ease || "power3",
                data: an(a - c),
                onInterrupt: function() {
                    return M.restart(!0) && o && o(R)
                },
                onComplete: function() {
                    R.update(),
                    we = q(),
                    J = ee = v && !z ? v.totalProgress() : R.progress,
                    ce && ce(R),
                    l && l(R)
                }
            }, c, n * T, a - c - n * T),
            s && s(R, y.tween))))
        }).pause()),
        i && (hn[i] = R),
        a = (a = (O = R.trigger = Oe(O || A)) && O._gsap && O._gsap.stRevert) && a(R),
        A = !0 === A ? O : Oe(A),
        Ie(re) && (re = {
            targets: O,
            className: re
        }),
        A && (!1 !== $ && $ !== Je && ($ = !(!$ && A.parentNode && A.parentNode.style && "flex" === Re(A.parentNode).display) && Ze),
        R.pin = A,
        (r = He.core.getCache(A)).spacer ? X = r.pinState : (n && ((n = Oe(n)) && !n.nodeType && (n = n.current || n.nativeElement),
        r.spacerIsNative = !!n,
        n) && (r.spacerState = Rt(n)),
        r.spacer = _ = n || Xe.createElement("div"),
        _.classList.add("pin-spacer"),
        i && _.classList.add("pin-spacer-" + i),
        r.pinState = X = Rt(A)),
        !1 !== g.force3D && He.set(A, {
            force3D: !0
        }),
        R.spacer = _ = r.spacer,
        e = Re(A),
        Q = e[$ + L.os2],
        G = He.getProperty(A),
        V = He.quickSetter(A, L.a, et),
        jt(A, _, e),
        Y = Rt(A)),
        t && (n = St(t) ? Pt(t, pn) : pn,
        B = Lt("scroller-start", i, N, L, n, 0),
        Te = Lt("scroller-end", i, N, L, n, 0, B),
        e = B["offset" + L.op.d2],
        t = Oe(rt(N, "content") || N),
        H = this.markerStart = Lt("start", i, t, L, n, e, 0, D),
        _e = this.markerEnd = Lt("end", i, t, L, n, e, 0, D),
        D && (ne = He.quickSetter([H, _e], L.a, et)),
        j || De.length && !0 === rt(N, "fixedMarkers") || (n = Re(t = I ? Ye : N).position,
        t.style.position = "absolute" === n || "fixed" === n ? n : "relative",
        He.set([B, Te], {
            force3D: !0
        }),
        K = He.quickSetter(B, L.a, et),
        Z = He.quickSetter(Te, L.a, et))),
        D && (l = D.vars.onUpdate,
        c = D.vars.onUpdateParams,
        D.eventCallback("onUpdate", function() {
            R.update(0, 0, 1),
            l && l.apply(c || [])
        })),
        R.previous = function() {
            return tt[tt.indexOf(R) - 1]
        }
        ,
        R.next = function() {
            return tt[tt.indexOf(R) + 1]
        }
        ,
        R.revert = function(e, t) {
            if (!t)
                return R.kill(!0);
            var n, r, i = !1 !== e || !R.enabled, t = Ge;
            i !== R.isReverted && (i && (P = Math.max(q(), R.scroll.rec || 0),
            k = R.progress,
            te = v && v.progress()),
            H && [H, _e, B, Te].forEach(function(e) {
                return e.style.display = i ? "none" : "block"
            }),
            i && (Ge = 1,
            R.update(i)),
            A && (i ? (e = A,
            n = _,
            Wt(r = X),
            (r = e._gsap).spacerIsNative ? Wt(r.spacerState) : e._gsap.swappedIn && (r = n.parentNode) && (r.insertBefore(e, n),
            r.removeChild(n)),
            e._gsap.swappedIn = !1) : de && R.isActive || jt(A, _, Re(A), C)),
            i || R.update(i),
            Ge = t,
            R.isReverted = i)
        }
        ,
        R.refresh = function(e, t) {
            if (!Ge && R.enabled || t)
                if (A && e && Ke)
                    qe(nt, "scrollEnd", It);
                else {
                    !Ue && ve && ve(R),
                    Ge = 1,
                    xe = Qe(),
                    y.tween && (y.tween.kill(),
                    y.tween = 0),
                    S && S.pause(),
                    oe && v && v.revert({
                        kill: !1
                    }).invalidate(),
                    R.isReverted || R.revert(!0, !0),
                    R._subPinOffset = !1;
                    for (var n, r, i, a, s, t = ye(), e = be(), o = D ? D.duration() : Et(N, L), l = 0, c = 0, u = g.end, d = g.endTrigger || O, p = g.start || (0 !== g.start && O ? A ? "0 0" : "0 100%" : 0), f = R.pinnedContainer = g.pinnedContainer && Oe(g.pinnedContainer), h = O && Math.max(0, tt.indexOf(R)) || 0, m = h; m--; )
                        (i = tt[m]).end || i.refresh(0, 1) || (Ge = 1),
                        !(a = i.pin) || a !== O && a !== A || i.isReverted || ((s = s || []).unshift(i),
                        i.revert(!0, !0)),
                        i !== tt[m] && (h--,
                        m--);
                    for (je(p) && (p = p(R)),
                    w = qt(p, O, t, L, q(), H, B, R, e, ge, j, o, D) || (A ? -.001 : 0),
                    Ie(u = je(u) ? u(R) : u) && !u.indexOf("+=") && (~u.indexOf(" ") ? u = (Ie(p) ? p.split(" ")[0] : "") + u : (l = Dt(u.substr(2), t),
                    u = Ie(p) ? p : w + l,
                    d = O)),
                    x = Math.max(w, qt(u || (d ? "100% 0" : o), d, t, L, q() + l, _e, Te, R, e, ge, j, o, D)) || -.001,
                    T = x - w || (w -= .01) && .001,
                    l = 0,
                    m = h; m--; )
                        (a = (i = tt[m]).pin) && i.start - i._pinPush <= w && !D && 0 < i.end && (n = i.end - i.start,
                        (a === O && i.start - i._pinPush < w || a === f) && !Ct(p) && (l += n * (1 - i.progress)),
                        a === A) && (c += n);
                    if (w += l,
                    x += l,
                    R._pinPush = c,
                    H && l && ((n = {})[L.a] = "+=" + l,
                    f && (n[L.p] = "-=" + q()),
                    He.set([H, _e], n)),
                    A)
                        n = Re(A),
                        u = L === ze,
                        d = q(),
                        U = parseFloat(G(L.a)) + c,
                        !o && 1 < x && ((I ? Ye : N).style["overflow-" + L.a] = "scroll"),
                        jt(A, _, n),
                        Y = Rt(A),
                        r = Ft(A, !0),
                        t = j && st(N, u ? Le : ze)(),
                        $ && ((C = [$ + L.os2, T + c + et]).t = _,
                        (m = $ === Ze ? Ot(A, L) + T + c : 0) && C.push(L.d, m + et),
                        Wt(C),
                        f && tt.forEach(function(e) {
                            e.pin === f && !1 !== e.vars.pinSpacing && (e._subPinOffset = !0)
                        }),
                        j) && q(P),
                        j && ((e = {
                            top: r.top + (u ? d - w : t) + et,
                            left: r.left + (u ? t : d - w) + et,
                            boxSizing: "border-box",
                            position: "fixed"
                        })[sn] = e.maxWidth = Math.ceil(r.width) + et,
                        e[on] = e.maxHeight = Math.ceil(r.height) + et,
                        e[Je] = e.marginTop = e[Je + ln] = e[Je + un] = e[Je + cn] = "0",
                        e[Ze] = n[Ze],
                        e.paddingTop = n.paddingTop,
                        e[Ze + ln] = n[Ze + ln],
                        e[Ze + un] = n[Ze + un],
                        e[Ze + cn] = n[Ze + cn],
                        W = function(e, t, n) {
                            for (var r, i = [], a = e.length, s = n ? 8 : 0; s < a; s += 2)
                                r = e[s],
                                i.push(r, r in t ? t[r] : e[s + 1]);
                            return i.t = e.t,
                            i
                        }(X, e, de),
                        Ue) && q(0),
                        v ? (o = v._initted,
                        Kt(1),
                        v.render(v.duration(), !0, !0),
                        E = G(L.a) - U + T + c,
                        T !== E && j && W.splice(W.length - 2, 2),
                        v.render(0, !0, !0),
                        o || v.invalidate(!0),
                        v.parent || v.totalTime(v.totalTime()),
                        Kt(0)) : E = T;
                    else if (O && q() && !D)
                        for (r = O.parentNode; r && r !== Ye; )
                            r._pinOffset && (w -= r._pinOffset,
                            x -= r._pinOffset),
                            r = r.parentNode;
                    s && s.forEach(function(e) {
                        return e.revert(!1, !0)
                    }),
                    R.start = w,
                    R.end = x,
                    b = F = Ue ? P : q(),
                    D || Ue || (b < P && q(P),
                    R.scroll.rec = 0),
                    R.revert(!1, !0),
                    M && (we = -1,
                    R.isActive && q(w + T * k),
                    M.restart(!0)),
                    Ge = 0,
                    v && z && (v._initted || te) && v.progress() !== te && v.progress(te, !0).render(v.time(), !0, !0),
                    k === R.progress && !D || (v && !z && v.totalProgress(k, !0),
                    R.progress = (b - w) / T === k ? 0 : k),
                    A && $ && (_._pinOffset = Math.round(R.progress * E)),
                    ae && !Ue && ae(R)
                }
        }
        ,
        R.getVelocity = function() {
            return (q() - F) / (Qe() - Vt) * 1e3 || 0
        }
        ,
        R.endAnimation = function() {
            Mt(R.callbackAnimation),
            v && (S ? S.progress(1) : v.paused() ? z || Mt(v, R.direction < 0, 1) : Mt(v, v.reversed()))
        }
        ,
        R.labelToScroll = function(e) {
            return v && v.labels && (w || R.refresh() || w) + v.labels[e] / v.duration() * T || 0
        }
        ,
        R.getTrailing = function(t) {
            var e = tt.indexOf(R)
              , e = 0 < R.direction ? tt.slice(0, e).reverse() : tt.slice(e + 1);
            return (Ie(t) ? e.filter(function(e) {
                return e.vars.preventOverlaps === t
            }) : e).filter(function(e) {
                return 0 < R.direction ? e.end <= w : e.start >= x
            })
        }
        ,
        R.update = function(e, t, n) {
            var r, i, a, s, o, l, c, u, d;
            (!D || n || e) && (n = Ue ? P : R.scroll(),
            o = (o = e ? 0 : (n - w) / T) < 0 ? 0 : 1 < o ? 1 : o || 0,
            c = R.progress,
            t && (F = b,
            b = D ? q() : n,
            h) && (ee = J,
            J = v && !z ? v.totalProgress() : o),
            (o = le && !o && A && !Ge && !nn && Ke && w < n + (n - F) / (Qe() - Vt) * le ? 1e-4 : o) !== c && R.enabled && (u = (t = (r = R.isActive = !!o && o < 1) != (!!c && c < 1)) || !!o != !!c,
            R.direction = c < o ? 1 : -1,
            R.progress = o,
            u && !Ge && (i = o && !c ? 0 : 1 === o ? 1 : 1 === c ? 2 : 3,
            z) && (a = !t && "none" !== me[i + 1] && me[i + 1] || me[i],
            s = v && ("complete" === a || "reset" === a || a in v)),
            fe && (t || s) && (s || se || !v) && (je(fe) ? fe(R) : R.getTrailing(fe).forEach(function(e) {
                return e.endAnimation()
            })),
            z || (!S || Ge || nn ? v && v.totalProgress(o, !!Ge) : ((D || tn && tn !== R) && S.render(S._dp._time - S._start),
            S.resetTo ? S.resetTo("totalProgress", o, v._tTime / v._tDur) : (S.vars.totalProgress = o,
            S.invalidate().restart()))),
            A && (e && $ && (_.style[$ + L.os2] = Q),
            j ? u && (c = !e && c < o && n < x + 1 && n + 1 >= Et(N, L),
            de && (e || !r && !c ? Bt(A, _) : (d = Ft(A, !0),
            l = n - w,
            Bt(A, Ye, d.top + (L === ze ? l : 0) + et, d.left + (L === ze ? 0 : l) + et))),
            Wt(r || c ? W : Y),
            E !== T && o < 1 && r || V(U + (1 !== o || c ? 0 : E))) : V(xt(U + E * o))),
            !h || y.tween || Ge || nn || M.restart(!0),
            re && (t || ue && o && (o < 1 || !Jt)) && Yt(re.targets).forEach(function(e) {
                return e.classList[r || ue ? "add" : "remove"](re.className)
            }),
            !f || z || e || f(R),
            u && !Ge ? (z && (s && ("complete" === a ? v.pause().totalProgress(1) : "reset" === a ? v.restart(!0).pause() : "restart" === a ? v.restart(!0) : v[a]()),
            f) && f(R),
            !t && Jt || (ie && t && kt(R, ie),
            he[i] && kt(R, he[i]),
            ue && (1 === o ? R.kill(!1, 1) : he[i] = 0),
            t) || he[i = 1 === o ? 1 : 3] && kt(R, he[i]),
            pe && !r && Math.abs(R.getVelocity()) > (Ct(pe) ? pe : 2500) && (Mt(R.callbackAnimation),
            S ? S.progress(1) : Mt(v, "reverse" === a ? 1 : !o, 1))) : z && f && !Ge && f(R)),
            Z && (d = D ? n / D.duration() * (D._caScrollDist || 0) : n,
            K(d + (B._isFlipped ? 1 : 0)),
            Z(d)),
            ne) && ne(-n / D.duration() * (D._caScrollDist || 0))
        }
        ,
        R.enable = function(e, t) {
            R.enabled || (R.enabled = !0,
            qe(N, "resize", Nt),
            qe(I ? Xe : N, "scroll", zt),
            ve && qe(nt, "refreshInit", ve),
            !1 !== e && (R.progress = k = 0,
            b = F = we = q()),
            !1 !== t && R.refresh())
        }
        ,
        R.getTween = function(e) {
            return e && y ? y.tween : S
        }
        ,
        R.setPositions = function(e, t) {
            A && (U += e - w,
            E += t - e - T,
            $ === Ze) && R.adjustPinSpacing(t - e - T),
            R.start = w = e,
            R.end = x = t,
            T = t - e,
            R.update()
        }
        ,
        R.adjustPinSpacing = function(e) {
            var t;
            C && (t = C.indexOf(L.d) + 1,
            C[t] = parseFloat(C[t]) + e + et,
            C[1] = parseFloat(C[1]) + e + et,
            Wt(C))
        }
        ,
        R.disable = function(e, t) {
            if (R.enabled && (!1 !== e && R.revert(!0, !0),
            R.enabled = R.isActive = !1,
            t || S && S.pause(),
            P = 0,
            r && (r.uncache = 1),
            ve && Be(nt, "refreshInit", ve),
            M && (M.pause(),
            y.tween) && y.tween.kill() && (y.tween = 0),
            !I)) {
                for (var n = tt.length; n--; )
                    if (tt[n].scroller === N && tt[n] !== R)
                        return;
                Be(N, "resize", Nt),
                Be(N, "scroll", zt)
            }
        }
        ,
        R.kill = function(e, t) {
            R.disable(e, t),
            S && !t && S.kill(),
            i && delete hn[i];
            var n = tt.indexOf(R);
            0 <= n && tt.splice(n, 1),
            n === Ve && 0 < gn && Ve--,
            n = 0,
            tt.forEach(function(e) {
                return e.scroller === R.scroller && (n = 1)
            }),
            n || Ue || (R.scroll.rec = 0),
            v && (v.scrollTrigger = null,
            e && v.revert({
                kill: !1
            }),
            t || v.kill()),
            H && [H, _e, B, Te].forEach(function(e) {
                return e.parentNode && e.parentNode.removeChild(e)
            }),
            tn === R && (tn = 0),
            A && (r && (r.uncache = 1),
            n = 0,
            tt.forEach(function(e) {
                return e.pin === A && n++
            }),
            n || (r.spacer = 0)),
            g.onKill && g.onKill(R)
        }
        ,
        R.enable(!1, !1),
        a && a(R),
        v && v.add && !T ? He.delayedCall(.01, function() {
            return w || x || R.refresh()
        }) && (T = .01,
        w = x = 0) : R.refresh(),
        A && en !== mn && (u = en = mn,
        requestAnimationFrame(function() {
            return u === mn && Xt(!0)
        }))) : this.update = this.refresh = this.kill = Ne
    }
    ,
    nt.register = function(e) {
        return O || (He = e || y(),
        v() && window.document && nt.enable(),
        O = rn),
        O
    }
    ,
    nt.defaults = function(e) {
        if (e)
            for (var t in e)
                fn[t] = e[t];
        return fn
    }
    ,
    nt.disable = function(t, n) {
        rn = 0,
        tt.forEach(function(e) {
            return e[n ? "kill" : "disable"](t)
        }),
        Be(Fe, "wheel", zt),
        Be(Xe, "scroll", zt),
        clearInterval(D),
        Be(Xe, "touchcancel", Ne),
        Be(Ye, "touchstart", Ne),
        w(Be, Xe, "pointerdown,touchstart,mousedown", m),
        w(Be, Xe, "pointerup,touchend,mouseup", g),
        $.kill(),
        b(Be);
        for (var e = 0; e < $e.length; e += 3)
            x(Be, $e[e], $e[e + 1]),
            x(Be, $e[e], $e[e + 2])
    }
    ,
    nt.enable = function() {
        if (Fe = window,
        Xe = document,
        We = Xe.documentElement,
        Ye = Xe.body,
        He && (Yt = He.utils.toArray,
        Gt = He.utils.clamp,
        Zt = He.core.context || Ne,
        Kt = He.core.suppressOverwrites || Ne,
        F = Fe.history.scrollRestoration || "auto",
        He.core.globals("ScrollTrigger", nt),
        Ye)) {
            rn = 1,
            k.register(He),
            nt.isTouch = k.isTouch,
            H = k.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),
            qe(Fe, "wheel", zt),
            A = [Fe, Xe, We, Ye],
            He.matchMedia ? (nt.matchMedia = function(e) {
                var t, n = He.matchMedia();
                for (t in e)
                    n.add(t, e[t]);
                return n
            }
            ,
            He.addEventListener("matchMediaInit", function() {
                return C()
            }),
            He.addEventListener("matchMediaRevert", function() {
                return E()
            }),
            He.addEventListener("matchMedia", function() {
                Xt(0, 1),
                Q("matchMedia")
            }),
            He.matchMedia("(orientation: portrait)", function() {
                return _(),
                _
            })) : console.warn("Requires GSAP 3.11.0 or later"),
            _(),
            qe(Xe, "scroll", zt);
            var e, t = Ye.style, n = t.borderTopStyle, r = He.core.Animation.prototype;
            for (r.revert || Object.defineProperty(r, "revert", {
                value: function() {
                    return this.time(-.01, !0)
                }
            }),
            t.borderTopStyle = "solid",
            r = Ft(Ye),
            ze.m = Math.round(r.top + ze.sc()) || 0,
            Le.m = Math.round(r.left + Le.sc()) || 0,
            n ? t.borderTopStyle = n : t.removeProperty("border-top-style"),
            D = setInterval(T, 250),
            He.delayedCall(.5, function() {
                return nn = 0
            }),
            qe(Xe, "touchcancel", Ne),
            qe(Ye, "touchstart", Ne),
            w(qe, Xe, "pointerdown,touchstart,mousedown", m),
            w(qe, Xe, "pointerup,touchend,mouseup", g),
            L = He.utils.checkPrefix("transform"),
            ee.push(L),
            O = Qe(),
            $ = He.delayedCall(.2, Xt).pause(),
            I = [Xe, "visibilitychange", function() {
                var e = Fe.innerWidth
                  , t = Fe.innerHeight;
                Xe.hidden ? (z = e,
                N = t) : z === e && N === t || Nt()
            }
            , Xe, "DOMContentLoaded", Xt, Fe, "load", Xt, Fe, "resize", Nt],
            b(qe),
            tt.forEach(function(e) {
                return e.enable(0, 1)
            }),
            e = 0; e < $e.length; e += 3)
                x(Be, $e[e], $e[e + 1]),
                x(Be, $e[e], $e[e + 2])
        }
    }
    ,
    nt.config = function(e) {
        "limitCallbacks"in e && (Jt = !!e.limitCallbacks);
        var t = e.syncInterval;
        t && clearInterval(D) || (D = t) && setInterval(T, t),
        "ignoreMobileResize"in e && (R = 1 === nt.isTouch && e.ignoreMobileResize),
        "autoRefreshEvents"in e && (b(Be),
        b(qe, e.autoRefreshEvents || "none"),
        j = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
    }
    ,
    nt.scrollerProxy = function(e, t) {
        var e = Oe(e)
          , n = $e.indexOf(e)
          , r = Tt(e);
        ~n && $e.splice(n, r ? 6 : 2),
        t && (r ? De.unshift(Fe, t, Ye, t, We, t) : De.unshift(e, t))
    }
    ,
    nt.clearMatchMedia = function(t) {
        tt.forEach(function(e) {
            return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0)
        })
    }
    ,
    nt.isInViewport = function(e, t, n) {
        e = (Ie(e) ? Oe(e) : e).getBoundingClientRect(),
        t = e[n ? sn : on] * t || 0;
        return n ? 0 < e.right - t && e.left + t < Fe.innerWidth : 0 < e.bottom - t && e.top + t < Fe.innerHeight
    }
    ,
    nt.positionInViewport = function(e, t, n) {
        var e = (e = Ie(e) ? Oe(e) : e).getBoundingClientRect()
          , r = e[n ? sn : on]
          , r = null == t ? r / 2 : t in G ? G[t] * r : ~t.indexOf("%") ? parseFloat(t) * r / 100 : parseFloat(t) || 0;
        return n ? (e.left + r) / Fe.innerWidth : (e.top + r) / Fe.innerHeight
    }
    ,
    nt.killAll = function(e) {
        tt.forEach(function(e) {
            return "ScrollSmoother" !== e.vars.id && e.kill()
        }),
        !0 !== e && (e = V.killAll || [],
        V = {},
        e.forEach(function(e) {
            return e()
        }))
    }
    ,
    nt);
    function nt(e, t) {
        O || nt.register(He) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        this.init(e, t)
    }
    function re(e, t, n, r) {
        return r < t ? e(r) : t < 0 && e(0),
        r < n ? (r - t) / (n - t) : n < 0 ? t / (t - n) : 1
    }
    function ie(e, t) {
        !0 === t ? e.style.removeProperty("touch-action") : e.style.touchAction = !0 === t ? "auto" : t ? "pan-" + t + (k.isTouch ? " pinch-zoom" : "") : "none",
        e === We && ie(Ye, t)
    }
    function ae(e) {
        var t = e.event
          , n = e.target
          , e = e.axis
          , r = (t.changedTouches ? t.changedTouches[0] : t).target
          , i = r._gsap || He.core.getCache(r)
          , a = Qe();
        if (!i._isScrollT || 2e3 < a - i._isScrollT) {
            for (; r && r.scrollHeight <= r.clientHeight; )
                r = r.parentNode;
            i._isScroll = r && !Tt(r) && r !== n && (ce[(n = Re(r)).overflowY] || ce[n.overflowX]),
            i._isScrollT = a
        }
        !i._isScroll && "x" !== e || (t.stopPropagation(),
        t._gsapAllow = !0)
    }
    function se(e, t, n, r) {
        return k.create({
            target: e,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: t,
            onWheel: r = r && ae,
            onPress: r,
            onDrag: r,
            onScroll: r,
            onEnable: function() {
                return n && qe(Xe, k.eventTypes[0], de, !1, !0)
            },
            onDisable: function() {
                return Be(Xe, k.eventTypes[0], de, !0)
            }
        })
    }
    function oe(e) {
        function n() {
            return c = !1
        }
        function a() {
            o = Et(g, ze),
            M = Gt(H ? 1 : 0, o),
            h && (S = Gt(0, Et(g, Le))),
            l = mn
        }
        function s() {
            y._gsap.y = xt(parseFloat(y._gsap.y) + b.offset) + "px",
            y.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(y._gsap.y) + ", 0, 1)",
            b.offset = b.cacheID = 0
        }
        function i() {
            a(),
            u.isActive() && u.vars.scrollY > o && (b() > o ? u.progress(1) && b(o) : u.resetTo("scrollY", o))
        }
        (e = St(e) ? e : {}).preventDefault = e.isNormalizer = e.allowClicks = !0,
        e.type || (e.type = "wheel,touch"),
        e.debounce = !!e.debounce,
        e.id = e.id || "normalizer";
        var r, o, l, c, u, d, p, f, h = e.normalizeScrollX, t = e.momentum, m = e.allowNestedScroll, g = Oe(e.target) || We, v = He.core.globals().ScrollSmoother, v = v && v.get(), y = H && (e.content && Oe(e.content) || v && !1 !== e.content && !v.smooth() && v.content()), b = st(g, ze), w = st(g, Le), x = 1, T = (k.isTouch && Fe.visualViewport ? Fe.visualViewport.scale * Fe.visualViewport.width : Fe.outerWidth) / Fe.innerWidth, _ = 0, E = je(t) ? function() {
            return t(r)
        }
        : function() {
            return t || 2.8
        }
        , C = se(g, e.type, !0, m), S = Ne, M = Ne;
        return y && He.set(y, {
            y: "+=0"
        }),
        e.ignoreCheck = function(e) {
            return H && "touchmove" === e.type && (c ? (requestAnimationFrame(n),
            t = xt(r.deltaY / 2),
            t = M(b.v - t),
            y && t !== b.v + b.offset && (b.offset = t - b.v,
            t = xt((parseFloat(y && y._gsap.y) || 0) - b.offset),
            y.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + t + ", 0, 1)",
            y._gsap.y = t + "px",
            b.cacheID = $e.cache,
            Z()),
            !0) : (b.offset && s(),
            void (c = !0))) || 1.05 < x && "touchstart" !== e.type || r.isGesturing || e.touches && 1 < e.touches.length;
            var t
        }
        ,
        e.onPress = function() {
            var e = x;
            x = xt((Fe.visualViewport && Fe.visualViewport.scale || 1) / T),
            u.pause(),
            e !== x && ie(g, 1.01 < x || !h && "x"),
            d = w(),
            p = b(),
            a(),
            l = mn
        }
        ,
        e.onRelease = e.onGestureStart = function(e, t) {
            var n, r;
            b.offset && s(),
            t ? ($e.cache++,
            t = E(),
            h && (r = (n = w()) + .05 * t * -e.velocityX / .227,
            t *= re(w, n, r, Et(g, Le)),
            u.vars.scrollX = S(r)),
            r = (n = b()) + .05 * t * -e.velocityY / .227,
            t *= re(b, n, r, Et(g, ze)),
            u.vars.scrollY = M(r),
            u.invalidate().duration(t).play(.01),
            (H && u.vars.scrollY >= o || o - 1 <= n) && He.to({}, {
                onUpdate: i,
                duration: t
            })) : f.restart(!0)
        }
        ,
        e.onWheel = function() {
            u._ts && u.pause(),
            1e3 < Qe() - _ && (l = 0,
            _ = Qe())
        }
        ,
        e.onChange = function(e, t, n, r, i) {
            mn !== l && a(),
            t && h && w(S(r[2] === t ? d + (e.startX - e.x) : w() + t - r[1])),
            n && (b.offset && s(),
            e = (r = i[2] === n) ? p + e.startY - e.y : b() + n - i[1],
            i = M(e),
            r && e !== i && (p += i - e),
            b(i)),
            (n || t) && Z()
        }
        ,
        e.onEnable = function() {
            ie(g, !h && "x"),
            P.addEventListener("refresh", i),
            qe(Fe, "resize", i),
            b.smooth && (b.target.style.scrollBehavior = "auto",
            b.smooth = w.smooth = !1),
            C.enable()
        }
        ,
        e.onDisable = function() {
            ie(g, !0),
            Be(Fe, "resize", i),
            P.removeEventListener("refresh", i),
            C.kill()
        }
        ,
        e.lockAxis = !1 !== e.lockAxis,
        ((r = new k(e)).iOS = H) && !b() && b(1),
        H && He.ticker.add(Ne),
        f = r._dc,
        u = He.to(r, {
            ease: "power4",
            paused: !0,
            scrollX: h ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            onComplete: f.vars.onComplete
        }),
        r
    }
    P.version = "3.11.4",
    P.saveStyles = function(e) {
        return e ? Yt(e).forEach(function(e) {
            var t;
            e && e.style && (0 <= (t = n.indexOf(e)) && n.splice(t, 5),
            n.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), He.core.getCache(e), Zt()))
        }) : n
    }
    ,
    P.revert = function(e, t) {
        return C(!e, t)
    }
    ,
    P.create = function(e, t) {
        return new P(e,t)
    }
    ,
    P.refresh = function(e) {
        return e ? Nt() : (O || P.register()) && Xt(!0)
    }
    ,
    P.update = Z,
    P.clearScrollMemory = S,
    P.maxScroll = function(e, t) {
        return Et(e, t ? Le : ze)
    }
    ,
    P.getScrollFunc = function(e, t) {
        return st(Oe(e), t ? Le : ze)
    }
    ,
    P.getById = function(e) {
        return hn[e]
    }
    ,
    P.getAll = function() {
        return tt.filter(function(e) {
            return "ScrollSmoother" !== e.vars.id
        })
    }
    ,
    P.isScrolling = function() {
        return !!Ke
    }
    ,
    P.snapDirectional = $t,
    P.addEventListener = function(e, t) {
        e = V[e] || (V[e] = []);
        ~e.indexOf(t) || e.push(t)
    }
    ,
    P.removeEventListener = function(e, t) {
        e = V[e],
        t = e && e.indexOf(t);
        0 <= t && e.splice(t, 1)
    }
    ,
    P.batch = function(e, t) {
        var n, r = [], i = {}, a = t.interval || .016, s = t.batchMax || 1e9;
        for (n in t)
            i[n] = "on" === n.substr(0, 2) && je(t[n]) && "onRefreshInit" !== n ? function(e) {
                var t = []
                  , n = []
                  , r = He.delayedCall(a, function() {
                    e(t, n),
                    t = [],
                    n = []
                }).pause();
                return function(e) {
                    t.length || r.restart(!0),
                    t.push(e.trigger),
                    n.push(e),
                    s <= t.length && r.progress(1)
                }
            }(t[n]) : t[n];
        return je(s) && (s = s(),
        qe(P, "refresh", function() {
            return s = t.batchMax()
        })),
        Yt(e).forEach(function(e) {
            var t = {};
            for (n in i)
                t[n] = i[n];
            t.trigger = e,
            r.push(P.create(t))
        }),
        r
    }
    ;
    var le, ce = {
        auto: 1,
        scroll: 1
    }, ue = /(input|label|select|textarea)/i, de = function(e) {
        var t = ue.test(e.target.tagName);
        (t || le) && (e._gsapAllow = !0,
        le = t)
    };
    P.sort = function(e) {
        return tt.sort(e || function(e, t) {
            return -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0))
        }
        )
    }
    ,
    P.observe = function(e) {
        return new k(e)
    }
    ,
    P.normalizeScroll = function(e) {
        return void 0 === e ? t : !0 === e && t ? t.enable() : !1 === e ? t && t.kill() : (e = e instanceof k ? e : oe(e),
        t && t.target === e.target && t.kill(),
        Tt(e.target) && (t = e),
        e)
    }
    ,
    P.core = {
        _getVelocityProp: ot,
        _inputObserver: se,
        _scrollers: $e,
        _proxies: De,
        bridge: {
            ss: function() {
                Ke || Q("scrollStart"),
                Ke = Qe()
            },
            ref: function() {
                return Ge
            }
        }
    },
    y() && He.registerPlugin(P),
    e.ScrollTrigger = P,
    e.default = P,
    "undefined" == typeof window || window !== e ? Object.defineProperty(e, "__esModule", {
        value: !0
    }) : delete e.default
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t()
}(this, function() {
    "use strict";
    function r(e) {
        return null !== e && "object" == typeof e && "constructor"in e && e.constructor === Object
    }
    function i(t={}, n={}) {
        Object.keys(n).forEach(e=>{
            void 0 === t[e] ? t[e] = n[e] : r(n[e]) && r(t[e]) && 0 < Object.keys(n[e]).length && i(t[e], n[e])
        }
        )
    }
    const t = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: {
            blur() {},
            nodeName: ""
        },
        querySelector: ()=>null,
        querySelectorAll: ()=>[],
        getElementById: ()=>null,
        createEvent: ()=>({
            initEvent() {}
        }),
        createElement: ()=>({
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName: ()=>[]
        }),
        createElementNS: ()=>({}),
        importNode: ()=>null,
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        }
    };
    function T() {
        var e = "undefined" != typeof document ? document : {};
        return i(e, t),
        e
    }
    const N = {
        document: t,
        navigator: {
            userAgent: ""
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        },
        history: {
            replaceState() {},
            pushState() {},
            go() {},
            back() {}
        },
        CustomEvent: function() {
            return this
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: ()=>({
            getPropertyValue: ()=>""
        }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: ()=>({}),
        requestAnimationFrame: e=>"undefined" == typeof setTimeout ? (e(),
        null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
            "undefined" != typeof setTimeout && clearTimeout(e)
        }
    };
    function O() {
        var e = "undefined" != typeof window ? window : {};
        return i(e, N),
        e
    }
    class s extends Array {
        constructor(e) {
            super(...e || []);
            {
                const t = (e = this).__proto__;
                Object.defineProperty(e, "__proto__", {
                    get: ()=>t,
                    set(e) {
                        t.__proto__ = e
                    }
                })
            }
        }
    }
    function a(e=[]) {
        const t = [];
        return e.forEach(e=>{
            Array.isArray(e) ? t.push(...a(e)) : t.push(e)
        }
        ),
        t
    }
    function o(e, t) {
        return Array.prototype.filter.call(e, t)
    }
    function A(e, r) {
        const t = O()
          , i = T();
        let n = [];
        if (!r && e instanceof s)
            return e;
        if (!e)
            return new s(n);
        if ("string" == typeof e) {
            const t = e.trim();
            if (0 <= t.indexOf("<") && 0 <= t.indexOf(">")) {
                let e = "div";
                0 === t.indexOf("<li") && (e = "ul"),
                0 === t.indexOf("<tr") && (e = "tbody"),
                0 !== t.indexOf("<td") && 0 !== t.indexOf("<th") || (e = "tr"),
                0 === t.indexOf("<tbody") && (e = "table"),
                0 === t.indexOf("<option") && (e = "select");
                const r = i.createElement(e);
                r.innerHTML = t;
                for (let e = 0; e < r.childNodes.length; e += 1)
                    n.push(r.childNodes[e])
            } else
                n = function(e) {
                    if ("string" != typeof e)
                        return [e];
                    var t = []
                      , n = (r || i).querySelectorAll(e);
                    for (let e = 0; e < n.length; e += 1)
                        t.push(n[e]);
                    return t
                }(e.trim())
        } else if (e.nodeType || e === t || e === i)
            n.push(e);
        else if (Array.isArray(e)) {
            if (e instanceof s)
                return e;
            n = e
        }
        return new s(function(t) {
            var n = [];
            for (let e = 0; e < t.length; e += 1)
                -1 === n.indexOf(t[e]) && n.push(t[e]);
            return n
        }(n))
    }
    A.fn = s.prototype;
    const n = {
        addClass: function(...e) {
            const t = a(e.map(e=>e.split(" ")));
            return this.forEach(e=>{
                e.classList.add(...t)
            }
            ),
            this
        },
        removeClass: function(...e) {
            const t = a(e.map(e=>e.split(" ")));
            return this.forEach(e=>{
                e.classList.remove(...t)
            }
            ),
            this
        },
        hasClass: function(...e) {
            const n = a(e.map(e=>e.split(" ")));
            return 0 < o(this, t=>0 < n.filter(e=>t.classList.contains(e)).length).length
        },
        toggleClass: function(...e) {
            const n = a(e.map(e=>e.split(" ")));
            this.forEach(t=>{
                n.forEach(e=>{
                    t.classList.toggle(e)
                }
                )
            }
            )
        },
        attr: function(t, n) {
            if (1 === arguments.length && "string" == typeof t)
                return this[0] ? this[0].getAttribute(t) : void 0;
            for (let e = 0; e < this.length; e += 1)
                if (2 === arguments.length)
                    this[e].setAttribute(t, n);
                else
                    for (const n in t)
                        this[e][n] = t[n],
                        this[e].setAttribute(n, t[n]);
            return this
        },
        removeAttr: function(t) {
            for (let e = 0; e < this.length; e += 1)
                this[e].removeAttribute(t);
            return this
        },
        transform: function(t) {
            for (let e = 0; e < this.length; e += 1)
                this[e].style.transform = t;
            return this
        },
        transition: function(t) {
            for (let e = 0; e < this.length; e += 1)
                this[e].style.transitionDuration = "string" != typeof t ? t + "ms" : t;
            return this
        },
        on: function(...t) {
            let[n,r,i,a] = t;
            function s(t) {
                var e = t.target;
                if (e) {
                    var n = t.target.dom7EventData || [];
                    if (n.indexOf(t) < 0 && n.unshift(t),
                    A(e).is(r))
                        i.apply(e, n);
                    else {
                        const t = A(e).parents();
                        for (let e = 0; e < t.length; e += 1)
                            A(t[e]).is(r) && i.apply(t[e], n)
                    }
                }
            }
            function o(e) {
                var t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e),
                i.apply(this, t)
            }
            "function" == typeof t[1] && ([n,i,a] = t,
            r = void 0),
            a = a || !1;
            var l = n.split(" ");
            let c;
            for (let e = 0; e < this.length; e += 1) {
                const n = this[e];
                if (r)
                    for (c = 0; c < l.length; c += 1) {
                        const t = l[c];
                        n.dom7LiveListeners || (n.dom7LiveListeners = {}),
                        n.dom7LiveListeners[t] || (n.dom7LiveListeners[t] = []),
                        n.dom7LiveListeners[t].push({
                            listener: i,
                            proxyListener: s
                        }),
                        n.addEventListener(t, s, a)
                    }
                else
                    for (c = 0; c < l.length; c += 1) {
                        const t = l[c];
                        n.dom7Listeners || (n.dom7Listeners = {}),
                        n.dom7Listeners[t] || (n.dom7Listeners[t] = []),
                        n.dom7Listeners[t].push({
                            listener: i,
                            proxyListener: o
                        }),
                        n.addEventListener(t, o, a)
                    }
            }
            return this
        },
        off: function(...e) {
            let[n,r,i,a] = e;
            "function" == typeof e[1] && ([n,i,a] = e,
            r = void 0),
            a = a || !1;
            const s = n.split(" ");
            for (let e = 0; e < s.length; e += 1) {
                const n = s[e];
                for (let e = 0; e < this.length; e += 1) {
                    const s = this[e];
                    let t;
                    if (!r && s.dom7Listeners ? t = s.dom7Listeners[n] : r && s.dom7LiveListeners && (t = s.dom7LiveListeners[n]),
                    t && t.length)
                        for (let e = t.length - 1; 0 <= e; --e) {
                            const r = t[e];
                            (i && r.listener === i || i && r.listener && r.listener.dom7proxy && r.listener.dom7proxy === i || !i) && (s.removeEventListener(n, r.proxyListener, a),
                            t.splice(e, 1))
                        }
                }
            }
            return this
        },
        trigger: function(...t) {
            const n = O()
              , r = t[0].split(" ")
              , i = t[1];
            for (let e = 0; e < r.length; e += 1) {
                const O = r[e];
                for (let e = 0; e < this.length; e += 1) {
                    var a = this[e];
                    if (n.CustomEvent) {
                        const r = new n.CustomEvent(O,{
                            detail: i,
                            bubbles: !0,
                            cancelable: !0
                        });
                        a.dom7EventData = t.filter((e,t)=>0 < t),
                        a.dispatchEvent(r),
                        a.dom7EventData = [],
                        delete a.dom7EventData
                    }
                }
            }
            return this
        },
        transitionEnd: function(n) {
            const r = this;
            return n && r.on("transitionend", function e(t) {
                t.target === this && (n.call(this, t),
                r.off("transitionend", e))
            }),
            this
        },
        outerWidth: function(e) {
            if (0 < this.length) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function(e) {
            if (0 < this.length) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        styles: function() {
            var e = O();
            return this[0] ? e.getComputedStyle(this[0], null) : {}
        },
        offset: function() {
            var e, t, n, r, i, a;
            return 0 < this.length ? (a = O(),
            r = T(),
            t = (e = this[0]).getBoundingClientRect(),
            r = r.body,
            n = e.clientTop || r.clientTop || 0,
            r = e.clientLeft || r.clientLeft || 0,
            i = e === a ? a.scrollY : e.scrollTop,
            a = e === a ? a.scrollX : e.scrollLeft,
            {
                top: t.top + i - n,
                left: t.left + a - r
            }) : null
        },
        css: function(e, t) {
            var n = O();
            let r;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (r = 0; r < this.length; r += 1)
                        for (const t in e)
                            this[r].style[t] = e[t];
                    return this
                }
                if (this[0])
                    return n.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e)
                for (r = 0; r < this.length; r += 1)
                    this[r].style[e] = t;
            return this
        },
        each: function(n) {
            return n && this.forEach((e,t)=>{
                n.apply(e, [e, t])
            }
            ),
            this
        },
        html: function(t) {
            if (void 0 === t)
                return this[0] ? this[0].innerHTML : null;
            for (let e = 0; e < this.length; e += 1)
                this[e].innerHTML = t;
            return this
        },
        text: function(t) {
            if (void 0 === t)
                return this[0] ? this[0].textContent.trim() : null;
            for (let e = 0; e < this.length; e += 1)
                this[e].textContent = t;
            return this
        },
        is: function(e) {
            var t = O()
              , n = T()
              , r = this[0];
            let i, a;
            if (r && void 0 !== e)
                if ("string" == typeof e) {
                    if (r.matches)
                        return r.matches(e);
                    if (r.webkitMatchesSelector)
                        return r.webkitMatchesSelector(e);
                    if (r.msMatchesSelector)
                        return r.msMatchesSelector(e);
                    for (i = A(e),
                    a = 0; a < i.length; a += 1)
                        if (i[a] === r)
                            return !0
                } else {
                    if (e === n)
                        return r === n;
                    if (e === t)
                        return r === t;
                    if (e.nodeType || e instanceof s)
                        for (i = e.nodeType ? [e] : e,
                        a = 0; a < i.length; a += 1)
                            if (i[a] === r)
                                return !0
                }
            return !1
        },
        index: function() {
            let e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling); )
                    1 === t.nodeType && (e += 1);
                return e
            }
        },
        eq: function(e) {
            var t;
            return void 0 === e ? this : A((t = this.length) - 1 < e ? [] : e < 0 ? (t = t + e) < 0 ? [] : [this[t]] : [this[e]])
        },
        append: function(...t) {
            var n, r = T();
            for (let e = 0; e < t.length; e += 1) {
                n = t[e];
                for (let t = 0; t < this.length; t += 1)
                    if ("string" == typeof n) {
                        const T = r.createElement("div");
                        for (T.innerHTML = n; T.firstChild; )
                            this[t].appendChild(T.firstChild)
                    } else if (n instanceof s)
                        for (let e = 0; e < n.length; e += 1)
                            this[t].appendChild(n[e]);
                    else
                        this[t].appendChild(n)
            }
            return this
        },
        prepend: function(e) {
            var t = T();
            let n, r;
            for (n = 0; n < this.length; n += 1)
                if ("string" == typeof e) {
                    const T = t.createElement("div");
                    for (T.innerHTML = e,
                    r = T.childNodes.length - 1; 0 <= r; --r)
                        this[n].insertBefore(T.childNodes[r], this[n].childNodes[0])
                } else if (e instanceof s)
                    for (r = 0; r < e.length; r += 1)
                        this[n].insertBefore(e[r], this[n].childNodes[0]);
                else
                    this[n].insertBefore(e, this[n].childNodes[0]);
            return this
        },
        next: function(e) {
            return 0 < this.length ? e ? this[0].nextElementSibling && A(this[0].nextElementSibling).is(e) ? A([this[0].nextElementSibling]) : A([]) : this[0].nextElementSibling ? A([this[0].nextElementSibling]) : A([]) : A([])
        },
        nextAll: function(e) {
            var t = [];
            let n = this[0];
            if (!n)
                return A([]);
            for (; n.nextElementSibling; ) {
                var r = n.nextElementSibling;
                e && !A(r).is(e) || t.push(r),
                n = r
            }
            return A(t)
        },
        prev: function(e) {
            var t;
            return 0 < this.length ? (t = this[0],
            e ? t.previousElementSibling && A(t.previousElementSibling).is(e) ? A([t.previousElementSibling]) : A([]) : t.previousElementSibling ? A([t.previousElementSibling]) : A([])) : A([])
        },
        prevAll: function(e) {
            var t = [];
            let n = this[0];
            if (!n)
                return A([]);
            for (; n.previousElementSibling; ) {
                var r = n.previousElementSibling;
                e && !A(r).is(e) || t.push(r),
                n = r
            }
            return A(t)
        },
        parent: function(t) {
            var n = [];
            for (let e = 0; e < this.length; e += 1)
                null === this[e].parentNode || t && !A(this[e].parentNode).is(t) || n.push(this[e].parentNode);
            return A(n)
        },
        parents: function(n) {
            var r = [];
            for (let t = 0; t < this.length; t += 1) {
                let e = this[t].parentNode;
                for (; e; )
                    n && !A(e).is(n) || r.push(e),
                    e = e.parentNode
            }
            return A(r)
        },
        closest: function(e) {
            let t = this;
            return void 0 === e ? A([]) : t = t.is(e) ? t : t.parents(e).eq(0)
        },
        find: function(t) {
            var n = [];
            for (let e = 0; e < this.length; e += 1) {
                var r = this[e].querySelectorAll(t);
                for (let e = 0; e < r.length; e += 1)
                    n.push(r[e])
            }
            return A(n)
        },
        children: function(t) {
            var n = [];
            for (let e = 0; e < this.length; e += 1) {
                var r = this[e].children;
                for (let e = 0; e < r.length; e += 1)
                    t && !A(r[e]).is(t) || n.push(r[e])
            }
            return A(n)
        },
        filter: function(e) {
            return A(o(this, e))
        },
        remove: function() {
            for (let e = 0; e < this.length; e += 1)
                this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        }
    };
    function _(e, t=0) {
        return setTimeout(e, t)
    }
    function g() {
        return Date.now()
    }
    function $(e, t="x") {
        var n = O();
        let r, i, a;
        e = function(e) {
            var t = O();
            let n;
            return n = (n = !(n = t.getComputedStyle ? t.getComputedStyle(e, null) : n) && e.currentStyle ? e.currentStyle : n) || e.style
        }(e);
        return n.WebKitCSSMatrix ? (6 < (i = e.transform || e.webkitTransform).split(",").length && (i = i.split(", ").map(e=>e.replace(",", ".")).join(", ")),
        a = new n.WebKitCSSMatrix("none" === i ? "" : i)) : (a = e.MozTransform || e.OTransform || e.MsTransform || e.msTransform || e.transform || e.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
        r = a.toString().split(",")),
        "x" === t && (i = n.WebKitCSSMatrix ? a.m41 : 16 === r.length ? parseFloat(r[12]) : parseFloat(r[4])),
        (i = "y" === t ? n.WebKitCSSMatrix ? a.m42 : 16 === r.length ? parseFloat(r[13]) : parseFloat(r[5]) : i) || 0
    }
    function c(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
    }
    function d(...n) {
        const r = Object(n[0])
          , t = ["__proto__", "constructor", "prototype"];
        for (let e = 1; e < n.length; e += 1) {
            var i = n[e];
            if (null != i && (a = i,
            !("undefined" != typeof window && void 0 !== window.HTMLElement ? a instanceof HTMLElement : a && (1 === a.nodeType || 11 === a.nodeType)))) {
                const n = Object.keys(Object(i)).filter(e=>t.indexOf(e) < 0);
                for (let e = 0, t = n.length; e < t; e += 1) {
                    const a = n[e]
                      , s = Object.getOwnPropertyDescriptor(i, a);
                    void 0 !== s && s.enumerable && (c(r[a]) && c(i[a]) ? i[a].__swiper__ ? r[a] = i[a] : d(r[a], i[a]) : c(r[a]) || !c(i[a]) || (r[a] = {},
                    i[a].__swiper__) ? r[a] = i[a] : d(r[a], i[a]))
                }
            }
        }
        var a;
        return r
    }
    function S(e, t, n) {
        e.style.setProperty(t, n)
    }
    function v({swiper: n, targetPosition: r, side: i}) {
        const a = O()
          , s = -n.translate;
        let o, l = null;
        const c = n.params.speed
          , u = (n.wrapperEl.style.scrollSnapType = "none",
        a.cancelAnimationFrame(n.cssModeFrameID),
        r > s ? "next" : "prev")
          , d = (e,t)=>"next" === u && t <= e || "prev" === u && e <= t
          , p = ()=>{
            o = (new Date).getTime(),
            null === l && (l = o);
            var e = Math.max(Math.min((o - l) / c, 1), 0)
              , e = .5 - Math.cos(e * Math.PI) / 2;
            let t = s + e * (r - s);
            d(t, r) && (t = r),
            n.wrapperEl.scrollTo({
                [i]: t
            }),
            d(t, r) ? (n.wrapperEl.style.overflow = "hidden",
            n.wrapperEl.style.scrollSnapType = "",
            setTimeout(()=>{
                n.wrapperEl.style.overflow = "",
                n.wrapperEl.scrollTo({
                    [i]: t
                })
            }
            ),
            a.cancelAnimationFrame(n.cssModeFrameID)) : n.cssModeFrameID = a.requestAnimationFrame(p)
        }
        ;
        p()
    }
    let e, l, u;
    function p() {
        return e = e || function() {
            const n = O()
              , e = T();
            return {
                smoothScroll: e.documentElement && "scrollBehavior"in e.documentElement.style,
                touch: !!("ontouchstart"in n || n.DocumentTouch && e instanceof n.DocumentTouch),
                passiveListener: function() {
                    let e = !1;
                    try {
                        var t = Object.defineProperty({}, "passive", {
                            get() {
                                e = !0
                            }
                        });
                        n.addEventListener("testPassiveListener", null, t)
                    } catch (e) {}
                    return e
                }(),
                gestures: "ongesturestart"in n
            }
        }()
    }
    function I() {
        return u = u || function() {
            const e = O();
            return {
                isSafari: 0 <= (t = e.navigator.userAgent.toLowerCase()).indexOf("safari") && t.indexOf("chrome") < 0 && t.indexOf("android") < 0,
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
            };
            var t
        }()
    }
    function f({swiper: e, runCallbacks: t, direction: n, step: r}) {
        var {activeIndex: i, previousIndex: a} = e;
        let s = n;
        if (s = s || (a < i ? "next" : i < a ? "prev" : "reset"),
        e.emit("transition" + r),
        t && i !== a) {
            if ("reset" === s)
                return e.emit("slideResetTransition" + r);
            e.emit("slideChangeTransition" + r),
            "next" === s ? e.emit("slideNextTransition" + r) : e.emit("slidePrevTransition" + r)
        }
    }
    function h() {
        var e, t, n = this, {params: r, el: i} = n;
        i && 0 === i.offsetWidth || (r.breakpoints && n.setBreakpoint(),
        {allowSlideNext: i, allowSlidePrev: e, snapGrid: t} = n,
        n.allowSlideNext = !0,
        n.allowSlidePrev = !0,
        n.updateSize(),
        n.updateSlides(),
        n.updateSlidesClasses(),
        ("auto" === r.slidesPerView || 1 < r.slidesPerView) && n.isEnd && !n.isBeginning && !n.params.centeredSlides ? n.slideTo(n.slides.length - 1, 0, !1, !0) : n.slideTo(n.activeIndex, 0, !1, !0),
        n.autoplay && n.autoplay.running && n.autoplay.paused && n.autoplay.run(),
        n.allowSlidePrev = e,
        n.allowSlideNext = i,
        n.params.watchOverflow && t !== n.snapGrid && n.checkOverflow())
    }
    Object.keys(n).forEach(e=>{
        Object.defineProperty(A.fn, e, {
            value: n[e],
            writable: !0
        })
    }
    );
    let m = !1;
    function j() {}
    const y = (e,t)=>{
        var n = T()
          , {params: r, touchEvents: i, el: a, wrapperEl: s, device: o, support: l} = e
          , c = !!r.nested
          , u = "on" === t ? "addEventListener" : "removeEventListener";
        if (l.touch) {
            const t = !("touchstart" !== i.start || !l.passiveListener || !r.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            a[u](i.start, e.onTouchStart, t),
            a[u](i.move, e.onTouchMove, l.passiveListener ? {
                passive: !1,
                capture: c
            } : c),
            a[u](i.end, e.onTouchEnd, t),
            i.cancel && a[u](i.cancel, e.onTouchEnd, t)
        } else
            a[u](i.start, e.onTouchStart, !1),
            n[u](i.move, e.onTouchMove, c),
            n[u](i.end, e.onTouchEnd, !1);
        (r.preventClicks || r.preventClicksPropagation) && a[u]("click", e.onClick, !0),
        r.cssMode && s[u]("scroll", e.onScroll),
        r.updateOnWindowResize ? e[t](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", h, !0) : e[t]("observerUpdate", h, !0)
    }
      , b = (e,t)=>e.grid && t.grid && 1 < t.grid.rows;
    var w = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
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
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
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
        loopPreventsSlide: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-",
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
        runCallbacksOnInit: !0,
        _emitClasses: !1
    };
    const x = {
        eventsEmitter: {
            on(e, t, n) {
                const r = this;
                if ("function" == typeof t) {
                    const i = n ? "unshift" : "push";
                    e.split(" ").forEach(e=>{
                        r.eventsListeners[e] || (r.eventsListeners[e] = []),
                        r.eventsListeners[e][i](t)
                    }
                    )
                }
                return r
            },
            once(t, n, e) {
                const r = this;
                return "function" != typeof n ? r : (i.__emitterProxy = n,
                r.on(t, i, e));
                function i(...e) {
                    r.off(t, i),
                    i.__emitterProxy && delete i.__emitterProxy,
                    n.apply(r, e)
                }
            },
            onAny(e, t) {
                return "function" == typeof e && (t = t ? "unshift" : "push",
                this.eventsAnyListeners.indexOf(e) < 0) && this.eventsAnyListeners[t](e),
                this
            },
            offAny(e) {
                return this.eventsAnyListeners && 0 <= (e = this.eventsAnyListeners.indexOf(e)) && this.eventsAnyListeners.splice(e, 1),
                this
            },
            off(e, r) {
                const i = this;
                return i.eventsListeners && e.split(" ").forEach(n=>{
                    void 0 === r ? i.eventsListeners[n] = [] : i.eventsListeners[n] && i.eventsListeners[n].forEach((e,t)=>{
                        (e === r || e.__emitterProxy && e.__emitterProxy === r) && i.eventsListeners[n].splice(t, 1)
                    }
                    )
                }
                ),
                i
            },
            emit(...t) {
                const i = this;
                if (i.eventsListeners) {
                    let e, n, r;
                    r = "string" == typeof t[0] || Array.isArray(t[0]) ? (e = t[0],
                    n = t.slice(1, t.length),
                    i) : (e = t[0].events,
                    n = t[0].data,
                    t[0].context || i),
                    n.unshift(r),
                    (Array.isArray(e) ? e : e.split(" ")).forEach(t=>{
                        i.eventsAnyListeners && i.eventsAnyListeners.length && i.eventsAnyListeners.forEach(e=>{
                            e.apply(r, [t, ...n])
                        }
                        ),
                        i.eventsListeners && i.eventsListeners[t] && i.eventsListeners[t].forEach(e=>{
                            e.apply(r, n)
                        }
                        )
                    }
                    )
                }
                return i
            }
        },
        update: {
            updateSize: function() {
                var e = this;
                let t, n;
                var r = e.$el;
                t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : r[0].clientWidth,
                n = void 0 !== e.params.height && null !== e.params.height ? e.params.height : r[0].clientHeight,
                0 === t && e.isHorizontal() || 0 === n && e.isVertical() || (t = t - parseInt(r.css("padding-left") || 0, 10) - parseInt(r.css("padding-right") || 0, 10),
                n = n - parseInt(r.css("padding-top") || 0, 10) - parseInt(r.css("padding-bottom") || 0, 10),
                Number.isNaN(t) && (t = 0),
                Number.isNaN(n) && (n = 0),
                Object.assign(e, {
                    width: t,
                    height: n,
                    size: e.isHorizontal() ? t : n
                }))
            },
            updateSlides: function() {
                const n = this;
                function r(e) {
                    return n.isHorizontal() ? e : {
                        width: "height",
                        "margin-top": "margin-left",
                        "margin-bottom ": "margin-right",
                        "margin-left": "margin-top",
                        "margin-right": "margin-bottom",
                        "padding-left": "padding-top",
                        "padding-right": "padding-bottom",
                        marginRight: "marginBottom"
                    }[e]
                }
                function i(e, t) {
                    return parseFloat(e.getPropertyValue(r(t)) || 0)
                }
                const a = n.params
                  , {$wrapperEl: s, size: o, rtlTranslate: l, wrongRTL: c} = n
                  , u = n.virtual && a.virtual.enabled
                  , e = (u ? n.virtual : n).slides.length
                  , d = s.children("." + n.params.slideClass)
                  , p = (u ? n.virtual.slides : d).length;
                let f = [];
                const h = []
                  , m = [];
                let g = a.slidesOffsetBefore
                  , v = ("function" == typeof g && (g = a.slidesOffsetBefore.call(n)),
                a.slidesOffsetAfter);
                "function" == typeof v && (v = a.slidesOffsetAfter.call(n));
                var y = n.snapGrid.length
                  , b = n.slidesGrid.length;
                let w = a.spaceBetween
                  , x = -g
                  , T = 0
                  , _ = 0;
                if (void 0 !== o) {
                    "string" == typeof w && 0 <= w.indexOf("%") && (w = parseFloat(w.replace("%", "")) / 100 * o),
                    n.virtualSize = -w,
                    l ? d.css({
                        marginLeft: "",
                        marginBottom: "",
                        marginTop: ""
                    }) : d.css({
                        marginRight: "",
                        marginBottom: "",
                        marginTop: ""
                    }),
                    a.centeredSlides && a.cssMode && (S(n.wrapperEl, "--swiper-centered-offset-before", ""),
                    S(n.wrapperEl, "--swiper-centered-offset-after", ""));
                    var E = a.grid && 1 < a.grid.rows && n.grid;
                    let t;
                    E && n.grid.initSlides(p);
                    var C = "auto" === a.slidesPerView && a.breakpoints && 0 < Object.keys(a.breakpoints).filter(e=>void 0 !== a.breakpoints[e].slidesPerView).length;
                    for (let e = 0; e < p; e += 1) {
                        t = 0;
                        const l = d.eq(e);
                        if (E && n.grid.updateSlide(e, l, p, r),
                        "none" !== l.css("display")) {
                            if ("auto" === a.slidesPerView) {
                                C && (d[e].style[r("width")] = "");
                                const o = getComputedStyle(l[0])
                                  , c = l[0].style.transform
                                  , u = l[0].style.webkitTransform;
                                if (c && (l[0].style.transform = "none"),
                                u && (l[0].style.webkitTransform = "none"),
                                a.roundLengths)
                                    t = n.isHorizontal() ? l.outerWidth(!0) : l.outerHeight(!0);
                                else {
                                    const n = i(o, "width")
                                      , r = i(o, "padding-left")
                                      , a = i(o, "padding-right")
                                      , s = i(o, "margin-left")
                                      , c = i(o, "margin-right")
                                      , u = o.getPropertyValue("box-sizing");
                                    if (u && "border-box" === u)
                                        t = n + s + c;
                                    else {
                                        const {clientWidth: i, offsetWidth: o} = l[0];
                                        t = n + r + a + s + c + (o - i)
                                    }
                                }
                                c && (l[0].style.transform = c),
                                u && (l[0].style.webkitTransform = u),
                                a.roundLengths && (t = Math.floor(t))
                            } else
                                t = (o - (a.slidesPerView - 1) * w) / a.slidesPerView,
                                a.roundLengths && (t = Math.floor(t)),
                                d[e] && (d[e].style[r("width")] = t + "px");
                            d[e] && (d[e].swiperSlideSize = t),
                            m.push(t),
                            a.centeredSlides ? (x = x + t / 2 + T / 2 + w,
                            0 === T && 0 !== e && (x = x - o / 2 - w),
                            0 === e && (x = x - o / 2 - w),
                            Math.abs(x) < .001 && (x = 0),
                            a.roundLengths && (x = Math.floor(x)),
                            _ % a.slidesPerGroup == 0 && f.push(x),
                            h.push(x)) : (a.roundLengths && (x = Math.floor(x)),
                            (_ - Math.min(n.params.slidesPerGroupSkip, _)) % n.params.slidesPerGroup == 0 && f.push(x),
                            h.push(x),
                            x = x + t + w),
                            n.virtualSize += t + w,
                            T = t,
                            _ += 1
                        }
                    }
                    if (n.virtualSize = Math.max(n.virtualSize, o) + v,
                    l && c && ("slide" === a.effect || "coverflow" === a.effect) && s.css({
                        width: n.virtualSize + a.spaceBetween + "px"
                    }),
                    a.setWrapperSize && s.css({
                        [r("width")]: n.virtualSize + a.spaceBetween + "px"
                    }),
                    E && n.grid.updateWrapperSize(t, f, r),
                    !a.centeredSlides) {
                        const r = [];
                        for (let t = 0; t < f.length; t += 1) {
                            let e = f[t];
                            a.roundLengths && (e = Math.floor(e)),
                            f[t] <= n.virtualSize - o && r.push(e)
                        }
                        f = r,
                        1 < Math.floor(n.virtualSize - o) - Math.floor(f[f.length - 1]) && f.push(n.virtualSize - o)
                    }
                    if (0 === f.length && (f = [0]),
                    0 !== a.spaceBetween) {
                        const i = n.isHorizontal() && l ? "marginLeft" : r("marginRight");
                        d.filter((e,t)=>!a.cssMode || t !== d.length - 1).css({
                            [i]: w + "px"
                        })
                    }
                    if (a.centeredSlides && a.centeredSlidesBounds) {
                        let t = 0;
                        m.forEach(e=>{
                            t += e + (a.spaceBetween || 0)
                        }
                        );
                        const r = (t -= a.spaceBetween) - o;
                        f = f.map(e=>e < 0 ? -g : e > r ? r + v : e)
                    }
                    if (a.centerInsufficientSlides) {
                        let t = 0;
                        if (m.forEach(e=>{
                            t += e + (a.spaceBetween || 0)
                        }
                        ),
                        (t -= a.spaceBetween) < o) {
                            const r = (o - t) / 2;
                            f.forEach((e,t)=>{
                                f[t] = e - r
                            }
                            ),
                            h.forEach((e,t)=>{
                                h[t] = e + r
                            }
                            )
                        }
                    }
                    if (Object.assign(n, {
                        slides: d,
                        snapGrid: f,
                        slidesGrid: h,
                        slidesSizesGrid: m
                    }),
                    a.centeredSlides && a.cssMode && !a.centeredSlidesBounds) {
                        S(n.wrapperEl, "--swiper-centered-offset-before", -f[0] + "px"),
                        S(n.wrapperEl, "--swiper-centered-offset-after", n.size / 2 - m[m.length - 1] / 2 + "px");
                        const r = -n.snapGrid[0]
                          , i = -n.slidesGrid[0];
                        n.snapGrid = n.snapGrid.map(e=>e + r),
                        n.slidesGrid = n.slidesGrid.map(e=>e + i)
                    }
                    p !== e && n.emit("slidesLengthChange"),
                    f.length !== y && (n.params.watchOverflow && n.checkOverflow(),
                    n.emit("snapGridLengthChange")),
                    h.length !== b && n.emit("slidesGridLengthChange"),
                    a.watchSlidesProgress && n.updateSlidesOffset()
                }
            },
            updateAutoHeight: function(e) {
                const n = this
                  , t = []
                  , r = n.virtual && n.params.virtual.enabled;
                let i, a = 0;
                "number" == typeof e ? n.setTransition(e) : !0 === e && n.setTransition(n.params.speed);
                var s = t=>(r ? n.slides.filter(e=>parseInt(e.getAttribute("data-swiper-slide-index"), 10) === t) : n.slides.eq(t))[0];
                if ("auto" !== n.params.slidesPerView && 1 < n.params.slidesPerView)
                    if (n.params.centeredSlides)
                        n.visibleSlides.each(e=>{
                            t.push(e)
                        }
                        );
                    else
                        for (i = 0; i < Math.ceil(n.params.slidesPerView); i += 1) {
                            const e = n.activeIndex + i;
                            if (e > n.slides.length && !r)
                                break;
                            t.push(s(e))
                        }
                else
                    t.push(s(n.activeIndex));
                for (i = 0; i < t.length; i += 1)
                    if (void 0 !== t[i]) {
                        const e = t[i].offsetHeight;
                        a = e > a ? e : a
                    }
                !a && 0 !== a || n.$wrapperEl.css("height", a + "px")
            },
            updateSlidesOffset: function() {
                var t = this.slides;
                for (let e = 0; e < t.length; e += 1)
                    t[e].swiperSlideOffset = this.isHorizontal() ? t[e].offsetLeft : t[e].offsetTop
            },
            updateSlidesProgress: function(e=this && this.translate || 0) {
                var r = this
                  , i = r.params
                  , {slides: a, rtlTranslate: s, snapGrid: o} = r;
                if (0 !== a.length) {
                    void 0 === a[0].swiperSlideOffset && r.updateSlidesOffset();
                    let n = s ? e : -e;
                    a.removeClass(i.slideVisibleClass),
                    r.visibleSlidesIndexes = [],
                    r.visibleSlides = [];
                    for (let t = 0; t < a.length; t += 1) {
                        var l = a[t];
                        let e = l.swiperSlideOffset;
                        i.cssMode && i.centeredSlides && (e -= a[0].swiperSlideOffset);
                        const A = (n + (i.centeredSlides ? r.minTranslate() : 0) - e) / (l.swiperSlideSize + i.spaceBetween)
                          , c = (n - o[0] + (i.centeredSlides ? r.minTranslate() : 0) - e) / (l.swiperSlideSize + i.spaceBetween)
                          , u = -(n - e)
                          , d = u + r.slidesSizesGrid[t];
                        (0 <= u && u < r.size - 1 || 1 < d && d <= r.size || u <= 0 && d >= r.size) && (r.visibleSlides.push(l),
                        r.visibleSlidesIndexes.push(t),
                        a.eq(t).addClass(i.slideVisibleClass)),
                        l.progress = s ? -A : A,
                        l.originalProgress = s ? -c : c
                    }
                    r.visibleSlides = A(r.visibleSlides)
                }
            },
            updateProgress: function(e) {
                var t = this;
                if (void 0 === e) {
                    const n = t.rtlTranslate ? -1 : 1;
                    e = t && t.translate && t.translate * n || 0
                }
                const n = t.params
                  , r = t.maxTranslate() - t.minTranslate();
                let {progress: i, isBeginning: a, isEnd: s} = t;
                var o = a
                  , l = s;
                s = 0 == r ? (i = 0,
                a = !0) : (i = (e - t.minTranslate()) / r,
                a = i <= 0,
                1 <= i),
                Object.assign(t, {
                    progress: i,
                    isBeginning: a,
                    isEnd: s
                }),
                (n.watchSlidesProgress || n.centeredSlides && n.autoHeight) && t.updateSlidesProgress(e),
                a && !o && t.emit("reachBeginning toEdge"),
                s && !l && t.emit("reachEnd toEdge"),
                (o && !a || l && !s) && t.emit("fromEdge"),
                t.emit("progress", i)
            },
            updateSlidesClasses: function() {
                var {slides: e, params: t, $wrapperEl: n, activeIndex: r, realIndex: i} = this
                  , a = this.virtual && t.virtual.enabled;
                e.removeClass(`${t.slideActiveClass} ${t.slideNextClass} ${t.slidePrevClass} ${t.slideDuplicateActiveClass} ${t.slideDuplicateNextClass} ` + t.slideDuplicatePrevClass),
                (a = a ? this.$wrapperEl.find(`.${t.slideClass}[data-swiper-slide-index="${r}"]`) : e.eq(r)).addClass(t.slideActiveClass),
                t.loop && (a.hasClass(t.slideDuplicateClass) ? n.children(`.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${i}"]`) : n.children(`.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${i}"]`)).addClass(t.slideDuplicateActiveClass);
                let s = a.nextAll("." + t.slideClass).eq(0).addClass(t.slideNextClass)
                  , o = (t.loop && 0 === s.length && (s = e.eq(0)).addClass(t.slideNextClass),
                a.prevAll("." + t.slideClass).eq(0).addClass(t.slidePrevClass));
                t.loop && 0 === o.length && (o = e.eq(-1)).addClass(t.slidePrevClass),
                t.loop && ((s.hasClass(t.slideDuplicateClass) ? n.children(`.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${s.attr("data-swiper-slide-index")}"]`) : n.children(`.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${s.attr("data-swiper-slide-index")}"]`)).addClass(t.slideDuplicateNextClass),
                (o.hasClass(t.slideDuplicateClass) ? n.children(`.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`) : n.children(`.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`)).addClass(t.slideDuplicatePrevClass)),
                this.emitSlidesClasses()
            },
            updateActiveIndex: function(e) {
                var t = this
                  , n = t.rtlTranslate ? t.translate : -t.translate
                  , {slidesGrid: r, snapGrid: i, params: a, activeIndex: s, realIndex: o, snapIndex: l} = t;
                let c, u = e;
                if (void 0 === u) {
                    for (let e = 0; e < r.length; e += 1)
                        void 0 !== r[e + 1] ? n >= r[e] && n < r[e + 1] - (r[e + 1] - r[e]) / 2 ? u = e : n >= r[e] && n < r[e + 1] && (u = e + 1) : n >= r[e] && (u = e);
                    a.normalizeSlideIndex && (u < 0 || void 0 === u) && (u = 0)
                }
                if (0 <= i.indexOf(n))
                    c = i.indexOf(n);
                else {
                    const e = Math.min(a.slidesPerGroupSkip, u);
                    c = e + Math.floor((u - e) / a.slidesPerGroup)
                }
                c >= i.length && (c = i.length - 1),
                u === s ? c !== l && (t.snapIndex = c,
                t.emit("snapIndexChange")) : (e = parseInt(t.slides.eq(u).attr("data-swiper-slide-index") || u, 10),
                Object.assign(t, {
                    snapIndex: c,
                    realIndex: e,
                    previousIndex: s,
                    activeIndex: u
                }),
                t.emit("activeIndexChange"),
                t.emit("snapIndexChange"),
                o !== e && t.emit("realIndexChange"),
                (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange"))
            },
            updateClickedSlide: function(e) {
                var t = this
                  , n = t.params
                  , r = A(e).closest("." + n.slideClass)[0];
                let i, a = !1;
                if (r)
                    for (let e = 0; e < t.slides.length; e += 1)
                        if (t.slides[e] === r) {
                            a = !0,
                            i = e;
                            break
                        }
                r && a ? (t.clickedSlide = r,
                t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(A(r).attr("data-swiper-slide-index"), 10) : t.clickedIndex = i,
                n.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()) : (t.clickedSlide = void 0,
                t.clickedIndex = void 0)
            }
        },
        translate: {
            getTranslate: function(e=this.isHorizontal() ? "x" : "y") {
                var {params: t, rtlTranslate: n, translate: r, $wrapperEl: i} = this;
                if (t.virtualTranslate)
                    return n ? -r : r;
                if (t.cssMode)
                    return r;
                let a = $(i[0], e);
                return (a = n ? -a : a) || 0
            },
            setTranslate: function(e, t) {
                var n = this
                  , {rtlTranslate: r, params: i, $wrapperEl: a, wrapperEl: s, progress: o} = n;
                let l = 0
                  , c = 0;
                n.isHorizontal() ? l = r ? -e : e : c = e,
                i.roundLengths && (l = Math.floor(l),
                c = Math.floor(c)),
                i.cssMode ? s[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal() ? -l : -c : i.virtualTranslate || a.transform(`translate3d(${l}px, ${c}px, 0px)`),
                n.previousTranslate = n.translate,
                n.translate = n.isHorizontal() ? l : c;
                r = n.maxTranslate() - n.minTranslate();
                (0 == r ? 0 : (e - n.minTranslate()) / r) !== o && n.updateProgress(e),
                n.emit("setTranslate", n.translate, t)
            },
            minTranslate: function() {
                return -this.snapGrid[0]
            },
            maxTranslate: function() {
                return -this.snapGrid[this.snapGrid.length - 1]
            },
            translateTo: function(e=0, t=this.params.speed, n=!0, r=!0, i) {
                const a = this
                  , {params: s, wrapperEl: o} = a;
                if (a.animating && s.preventInteractionOnTransition)
                    return !1;
                var l = a.minTranslate()
                  , c = a.maxTranslate()
                  , l = r && l < e ? l : r && e < c ? c : e;
                if (a.updateProgress(l),
                s.cssMode) {
                    const e = a.isHorizontal();
                    if (0 === t)
                        o[e ? "scrollLeft" : "scrollTop"] = -l;
                    else {
                        if (!a.support.smoothScroll)
                            return v({
                                swiper: a,
                                targetPosition: -l,
                                side: e ? "left" : "top"
                            }),
                            !0;
                        o.scrollTo({
                            [e ? "left" : "top"]: -l,
                            behavior: "smooth"
                        })
                    }
                } else
                    0 === t ? (a.setTransition(0),
                    a.setTranslate(l),
                    n && (a.emit("beforeTransitionStart", t, i),
                    a.emit("transitionEnd"))) : (a.setTransition(t),
                    a.setTranslate(l),
                    n && (a.emit("beforeTransitionStart", t, i),
                    a.emit("transitionStart")),
                    a.animating || (a.animating = !0,
                    a.onTranslateToWrapperTransitionEnd || (a.onTranslateToWrapperTransitionEnd = function(e) {
                        a && !a.destroyed && e.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onTranslateToWrapperTransitionEnd),
                        a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onTranslateToWrapperTransitionEnd),
                        a.onTranslateToWrapperTransitionEnd = null,
                        delete a.onTranslateToWrapperTransitionEnd,
                        n) && a.emit("transitionEnd")
                    }
                    ),
                    a.$wrapperEl[0].addEventListener("transitionend", a.onTranslateToWrapperTransitionEnd),
                    a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onTranslateToWrapperTransitionEnd)));
                return !0
            }
        },
        transition: {
            setTransition: function(e, t) {
                this.params.cssMode || this.$wrapperEl.transition(e),
                this.emit("setTransition", e, t)
            },
            transitionStart: function(e=!0, t) {
                var n = this["params"];
                n.cssMode || (n.autoHeight && this.updateAutoHeight(),
                f({
                    swiper: this,
                    runCallbacks: e,
                    direction: t,
                    step: "Start"
                }))
            },
            transitionEnd: function(e=!0, t) {
                var n = this["params"];
                this.animating = !1,
                n.cssMode || (this.setTransition(0),
                f({
                    swiper: this,
                    runCallbacks: e,
                    direction: t,
                    step: "End"
                }))
            }
        },
        slide: {
            slideTo: function(e=0, t=this.params.speed, n=!0, r, i) {
                if ("number" != typeof e && "string" != typeof e)
                    throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
                if ("string" == typeof e) {
                    const t = parseInt(e, 10);
                    if (!isFinite(t))
                        throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                    e = t
                }
                const a = this;
                let s = e;
                s < 0 && (s = 0);
                var {params: e, snapGrid: o, slidesGrid: l, previousIndex: c, activeIndex: u, rtlTranslate: d, wrapperEl: p, enabled: f} = a;
                if (a.animating && e.preventInteractionOnTransition || !f && !r && !i)
                    return !1;
                f = Math.min(a.params.slidesPerGroupSkip, s);
                let h = f + Math.floor((s - f) / a.params.slidesPerGroup);
                h >= o.length && (h = o.length - 1),
                (u || e.initialSlide || 0) === (c || 0) && n && a.emit("beforeSlideChangeStart");
                var m = -o[h];
                if (a.updateProgress(m),
                e.normalizeSlideIndex)
                    for (let e = 0; e < l.length; e += 1) {
                        const t = -Math.floor(100 * m)
                          , n = Math.floor(100 * l[e])
                          , r = Math.floor(100 * l[e + 1]);
                        void 0 !== l[e + 1] ? t >= n && t < r - (r - n) / 2 ? s = e : t >= n && t < r && (s = e + 1) : t >= n && (s = e)
                    }
                if (a.initialized && s !== u) {
                    if (!a.allowSlideNext && m < a.translate && m < a.minTranslate())
                        return !1;
                    if (!a.allowSlidePrev && m > a.translate && m > a.maxTranslate() && (u || 0) !== s)
                        return !1
                }
                let g;
                if (g = s > u ? "next" : s < u ? "prev" : "reset",
                d && -m === a.translate || !d && m === a.translate)
                    return a.updateActiveIndex(s),
                    e.autoHeight && a.updateAutoHeight(),
                    a.updateSlidesClasses(),
                    "slide" !== e.effect && a.setTranslate(m),
                    "reset" != g && (a.transitionStart(n, g),
                    a.transitionEnd(n, g)),
                    !1;
                if (e.cssMode) {
                    const e = a.isHorizontal()
                      , n = d ? m : -m;
                    if (0 === t) {
                        const t = a.virtual && a.params.virtual.enabled;
                        t && (a.wrapperEl.style.scrollSnapType = "none",
                        a._immediateVirtual = !0),
                        p[e ? "scrollLeft" : "scrollTop"] = n,
                        t && requestAnimationFrame(()=>{
                            a.wrapperEl.style.scrollSnapType = "",
                            a._swiperImmediateVirtual = !1
                        }
                        )
                    } else {
                        if (!a.support.smoothScroll)
                            return v({
                                swiper: a,
                                targetPosition: n,
                                side: e ? "left" : "top"
                            }),
                            !0;
                        p.scrollTo({
                            [e ? "left" : "top"]: n,
                            behavior: "smooth"
                        })
                    }
                } else
                    a.setTransition(t),
                    a.setTranslate(m),
                    a.updateActiveIndex(s),
                    a.updateSlidesClasses(),
                    a.emit("beforeTransitionStart", t, r),
                    a.transitionStart(n, g),
                    0 === t ? a.transitionEnd(n, g) : a.animating || (a.animating = !0,
                    a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function(e) {
                        a && !a.destroyed && e.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd),
                        a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd),
                        a.onSlideToWrapperTransitionEnd = null,
                        delete a.onSlideToWrapperTransitionEnd,
                        a.transitionEnd(n, g))
                    }
                    ),
                    a.$wrapperEl[0].addEventListener("transitionend", a.onSlideToWrapperTransitionEnd),
                    a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd));
                return !0
            },
            slideToLoop: function(e=0, t=this.params.speed, n=!0, r) {
                let i = e;
                return this.params.loop && (i += this.loopedSlides),
                this.slideTo(i, t, n, r)
            },
            slideNext: function(e=this.params.speed, t=!0, n) {
                var r = this
                  , {animating: i, enabled: a, params: s} = r;
                if (!a)
                    return r;
                let o = s.slidesPerGroup;
                "auto" === s.slidesPerView && 1 === s.slidesPerGroup && s.slidesPerGroupAuto && (o = Math.max(r.slidesPerViewDynamic("current", !0), 1));
                a = r.activeIndex < s.slidesPerGroupSkip ? 1 : o;
                if (s.loop) {
                    if (i && s.loopPreventsSlide)
                        return !1;
                    r.loopFix(),
                    r._clientLeft = r.$wrapperEl[0].clientLeft
                }
                return s.rewind && r.isEnd ? r.slideTo(0, e, t, n) : r.slideTo(r.activeIndex + a, e, t, n)
            },
            slidePrev: function(e=this.params.speed, t=!0, n) {
                var r = this
                  , {params: i, animating: a, snapGrid: s, slidesGrid: o, rtlTranslate: l, enabled: c} = r;
                if (!c)
                    return r;
                if (i.loop) {
                    if (a && i.loopPreventsSlide)
                        return !1;
                    r.loopFix(),
                    r._clientLeft = r.$wrapperEl[0].clientLeft
                }
                function u(e) {
                    return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                }
                const d = u(l ? r.translate : -r.translate)
                  , p = s.map(e=>u(e));
                let f = s[p.indexOf(d) - 1];
                if (void 0 === f && i.cssMode) {
                    let n;
                    s.forEach((e,t)=>{
                        d >= e && (n = t)
                    }
                    ),
                    void 0 !== n && (f = s[0 < n ? n - 1 : n])
                }
                let h = 0;
                return void 0 !== f && ((h = o.indexOf(f)) < 0 && (h = r.activeIndex - 1),
                "auto" === i.slidesPerView) && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (h = h - r.slidesPerViewDynamic("previous", !0) + 1,
                h = Math.max(h, 0)),
                i.rewind && r.isBeginning ? r.slideTo(r.slides.length - 1, e, t, n) : r.slideTo(h, e, t, n)
            },
            slideReset: function(e=this.params.speed, t=!0, n) {
                return this.slideTo(this.activeIndex, e, t, n)
            },
            slideToClosest: function(e=this.params.speed, t=!0, n, r=.5) {
                var i = this;
                let a = i.activeIndex;
                var s = Math.min(i.params.slidesPerGroupSkip, a)
                  , s = s + Math.floor((a - s) / i.params.slidesPerGroup)
                  , o = i.rtlTranslate ? i.translate : -i.translate;
                if (o >= i.snapGrid[s]) {
                    const e = i.snapGrid[s];
                    o - e > (i.snapGrid[s + 1] - e) * r && (a += i.params.slidesPerGroup)
                } else {
                    const e = i.snapGrid[s - 1];
                    o - e <= (i.snapGrid[s] - e) * r && (a -= i.params.slidesPerGroup)
                }
                return a = Math.max(a, 0),
                a = Math.min(a, i.slidesGrid.length - 1),
                i.slideTo(a, e, t, n)
            },
            slideToClickedSlide: function() {
                const e = this
                  , {params: t, $wrapperEl: n} = e
                  , r = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                let i, a = e.clickedIndex;
                t.loop ? e.animating || (i = parseInt(A(e.clickedSlide).attr("data-swiper-slide-index"), 10),
                t.centeredSlides ? a < e.loopedSlides - r / 2 || a > e.slides.length - e.loopedSlides + r / 2 ? (e.loopFix(),
                a = n.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),
                _(()=>{
                    e.slideTo(a)
                }
                )) : e.slideTo(a) : a > e.slides.length - r ? (e.loopFix(),
                a = n.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),
                _(()=>{
                    e.slideTo(a)
                }
                )) : e.slideTo(a)) : e.slideTo(a)
            }
        },
        loop: {
            loopCreate: function() {
                const r = this
                  , t = T()
                  , {params: n, $wrapperEl: e} = r
                  , i = 0 < e.children().length ? A(e.children()[0].parentNode) : e;
                i.children(`.${n.slideClass}.` + n.slideDuplicateClass).remove();
                let a = i.children("." + n.slideClass);
                if (n.loopFillGroupWithBlank) {
                    const r = n.slidesPerGroup - a.length % n.slidesPerGroup;
                    if (r !== n.slidesPerGroup) {
                        for (let e = 0; e < r; e += 1) {
                            const r = A(t.createElement("div")).addClass(n.slideClass + " " + n.slideBlankClass);
                            i.append(r)
                        }
                        a = i.children("." + n.slideClass)
                    }
                }
                "auto" !== n.slidesPerView || n.loopedSlides || (n.loopedSlides = a.length),
                r.loopedSlides = Math.ceil(parseFloat(n.loopedSlides || n.slidesPerView, 10)),
                r.loopedSlides += n.loopAdditionalSlides,
                r.loopedSlides > a.length && (r.loopedSlides = a.length);
                const s = []
                  , o = [];
                a.each((e,t)=>{
                    var n = A(e);
                    t < r.loopedSlides && o.push(e),
                    t < a.length && t >= a.length - r.loopedSlides && s.push(e),
                    n.attr("data-swiper-slide-index", t)
                }
                );
                for (let e = 0; e < o.length; e += 1)
                    i.append(A(o[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
                for (let e = s.length - 1; 0 <= e; --e)
                    i.prepend(A(s[e].cloneNode(!0)).addClass(n.slideDuplicateClass))
            },
            loopFix: function() {
                var e = this
                  , {activeIndex: t, slides: n, loopedSlides: r, allowSlidePrev: i, allowSlideNext: a, snapGrid: s, rtlTranslate: o} = (e.emit("beforeLoopFix"),
                e);
                let l;
                e.allowSlidePrev = !0,
                e.allowSlideNext = !0;
                s = -s[t] - e.getTranslate();
                t < r ? (l = n.length - 3 * r + t,
                l += r,
                e.slideTo(l, 0, !1, !0) && 0 != s && e.setTranslate((o ? -e.translate : e.translate) - s)) : t >= n.length - r && (l = -n.length + t + r,
                l += r,
                e.slideTo(l, 0, !1, !0)) && 0 != s && e.setTranslate((o ? -e.translate : e.translate) - s),
                e.allowSlidePrev = i,
                e.allowSlideNext = a,
                e.emit("loopFix")
            },
            loopDestroy: function() {
                var {$wrapperEl: e, params: t, slides: n} = this;
                e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.` + t.slideBlankClass).remove(),
                n.removeAttr("data-swiper-slide-index")
            }
        },
        grabCursor: {
            setGrabCursor: function(e) {
                var t;
                this.support.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode || ((t = "container" === this.params.touchEventsTarget ? this.el : this.wrapperEl).style.cursor = "move",
                t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab",
                t.style.cursor = e ? "-moz-grabbin" : "-moz-grab",
                t.style.cursor = e ? "grabbing" : "grab")
            },
            unsetGrabCursor: function() {
                this.support.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this["container" === this.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
            }
        },
        events: {
            attachEvents: function() {
                var e = this
                  , t = T()
                  , {params: n, support: r} = e;
                e.onTouchStart = function(e) {
                    var r = this
                      , i = T()
                      , a = O()
                      , s = r.touchEventsData
                      , {params: o, touches: l, enabled: c} = r;
                    if (c && (!r.animating || !o.preventInteractionOnTransition)) {
                        !r.animating && o.cssMode && o.loop && r.loopFix();
                        let t = e
                          , n = A((t = t.originalEvent ? t.originalEvent : t).target);
                        if (("wrapper" !== o.touchEventsTarget || n.closest(r.wrapperEl).length) && (s.isTouchEvent = "touchstart" === t.type,
                        s.isTouchEvent || !("which"in t) || 3 !== t.which) && !(!s.isTouchEvent && "button"in t && 0 < t.button || s.isTouched && s.isMoved)) {
                            o.noSwipingClass && "" !== o.noSwipingClass && t.target && t.target.shadowRoot && e.path && e.path[0] && (n = A(e.path[0]));
                            var c = o.noSwipingSelector || "." + o.noSwipingClass
                              , u = !(!t.target || !t.target.shadowRoot);
                            if (o.noSwiping && (u ? function(n, e=this) {
                                return function e(t) {
                                    return t && t !== T() && t !== O() ? (t = t.assignedSlot ? t.assignedSlot : t).closest(n) || e(t.getRootNode().host) : null
                                }(e)
                            }(c, t.target) : n.closest(c)[0]))
                                r.allowClick = !0;
                            else if (!o.swipeHandler || n.closest(o.swipeHandler)[0]) {
                                l.currentX = ("touchstart" === t.type ? t.targetTouches[0] : t).pageX,
                                l.currentY = ("touchstart" === t.type ? t.targetTouches[0] : t).pageY;
                                var u = l.currentX
                                  , c = l.currentY
                                  , d = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection
                                  , p = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold;
                                if (d && (u <= p || u >= a.innerWidth - p)) {
                                    if ("prevent" !== d)
                                        return;
                                    e.preventDefault()
                                }
                                if (Object.assign(s, {
                                    isTouched: !0,
                                    isMoved: !1,
                                    allowTouchCallbacks: !0,
                                    isScrolling: void 0,
                                    startMoving: void 0
                                }),
                                l.startX = u,
                                l.startY = c,
                                s.touchStartTime = g(),
                                r.allowClick = !0,
                                r.updateSize(),
                                r.swipeDirection = void 0,
                                0 < o.threshold && (s.allowThresholdMove = !1),
                                "touchstart" !== t.type) {
                                    let e = !0;
                                    n.is(s.focusableElements) && (e = !1),
                                    i.activeElement && A(i.activeElement).is(s.focusableElements) && i.activeElement !== n[0] && i.activeElement.blur();
                                    const T = e && r.allowTouchMove && o.touchStartPreventDefault;
                                    !o.touchStartForcePreventDefault && !T || n[0].isContentEditable || t.preventDefault()
                                }
                                r.emit("touchStart", t)
                            }
                        }
                    }
                }
                .bind(e),
                e.onTouchMove = function(e) {
                    var i = T()
                      , a = this
                      , s = a.touchEventsData
                      , {params: o, touches: l, rtlTranslate: c, enabled: t} = a;
                    if (t) {
                        let r = e;
                        if (r.originalEvent && (r = r.originalEvent),
                        s.isTouched) {
                            if (!s.isTouchEvent || "touchmove" === r.type) {
                                t = "touchmove" === r.type && r.targetTouches && (r.targetTouches[0] || r.changedTouches[0]),
                                e = ("touchmove" === r.type ? t : r).pageX,
                                t = ("touchmove" === r.type ? t : r).pageY;
                                if (r.preventedByNestedSwiper)
                                    l.startX = e,
                                    l.startY = t;
                                else if (a.allowTouchMove) {
                                    if (s.isTouchEvent && o.touchReleaseOnEdges && !o.loop)
                                        if (a.isVertical()) {
                                            if (t < l.startY && a.translate <= a.maxTranslate() || t > l.startY && a.translate >= a.minTranslate())
                                                return s.isTouched = !1,
                                                void (s.isMoved = !1)
                                        } else if (e < l.startX && a.translate <= a.maxTranslate() || e > l.startX && a.translate >= a.minTranslate())
                                            return;
                                    if (s.isTouchEvent && i.activeElement && r.target === i.activeElement && A(r.target).is(s.focusableElements))
                                        s.isMoved = !0,
                                        a.allowClick = !1;
                                    else if (s.allowTouchCallbacks && a.emit("touchMove", r),
                                    !(r.targetTouches && 1 < r.targetTouches.length)) {
                                        l.currentX = e,
                                        l.currentY = t;
                                        var n, i = l.currentX - l.startX, u = l.currentY - l.startY;
                                        if (!(a.params.threshold && Math.sqrt(i ** 2 + u ** 2) < a.params.threshold))
                                            if (void 0 === s.isScrolling && (a.isHorizontal() && l.currentY === l.startY || a.isVertical() && l.currentX === l.startX ? s.isScrolling = !1 : 25 <= i * i + u * u && (n = 180 * Math.atan2(Math.abs(u), Math.abs(i)) / Math.PI,
                                            s.isScrolling = a.isHorizontal() ? n > o.touchAngle : 90 - n > o.touchAngle)),
                                            s.isScrolling && a.emit("touchMoveOpposite", r),
                                            void 0 !== s.startMoving || l.currentX === l.startX && l.currentY === l.startY || (s.startMoving = !0),
                                            s.isScrolling)
                                                s.isTouched = !1;
                                            else if (s.startMoving) {
                                                a.allowClick = !1,
                                                !o.cssMode && r.cancelable && r.preventDefault(),
                                                o.touchMoveStopPropagation && !o.nested && r.stopPropagation(),
                                                s.isMoved || (o.loop && !o.cssMode && a.loopFix(),
                                                s.startTranslate = a.getTranslate(),
                                                a.setTransition(0),
                                                a.animating && a.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                                                s.allowMomentumBounce = !1,
                                                !o.grabCursor || !0 !== a.allowSlideNext && !0 !== a.allowSlidePrev || a.setGrabCursor(!0),
                                                a.emit("sliderFirstMove", r)),
                                                a.emit("sliderMove", r),
                                                s.isMoved = !0;
                                                let e = a.isHorizontal() ? i : u
                                                  , t = (l.diff = e,
                                                e *= o.touchRatio,
                                                c && (e = -e),
                                                a.swipeDirection = 0 < e ? "prev" : "next",
                                                s.currentTranslate = e + s.startTranslate,
                                                !0)
                                                  , n = o.resistanceRatio;
                                                if (o.touchReleaseOnEdges && (n = 0),
                                                0 < e && s.currentTranslate > a.minTranslate() ? (t = !1,
                                                o.resistance && (s.currentTranslate = a.minTranslate() - 1 + (-a.minTranslate() + s.startTranslate + e) ** n)) : e < 0 && s.currentTranslate < a.maxTranslate() && (t = !1,
                                                o.resistance) && (s.currentTranslate = a.maxTranslate() + 1 - (a.maxTranslate() - s.startTranslate - e) ** n),
                                                t && (r.preventedByNestedSwiper = !0),
                                                !a.allowSlideNext && "next" === a.swipeDirection && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate),
                                                !a.allowSlidePrev && "prev" === a.swipeDirection && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate),
                                                a.allowSlidePrev || a.allowSlideNext || (s.currentTranslate = s.startTranslate),
                                                0 < o.threshold) {
                                                    if (!(Math.abs(e) > o.threshold || s.allowThresholdMove))
                                                        return void (s.currentTranslate = s.startTranslate);
                                                    if (!s.allowThresholdMove)
                                                        return s.allowThresholdMove = !0,
                                                        l.startX = l.currentX,
                                                        l.startY = l.currentY,
                                                        s.currentTranslate = s.startTranslate,
                                                        void (l.diff = a.isHorizontal() ? l.currentX - l.startX : l.currentY - l.startY)
                                                }
                                                o.followFinger && !o.cssMode && ((o.freeMode && o.freeMode.enabled && a.freeMode || o.watchSlidesProgress) && (a.updateActiveIndex(),
                                                a.updateSlidesClasses()),
                                                a.params.freeMode && o.freeMode.enabled && a.freeMode && a.freeMode.onTouchMove(),
                                                a.updateProgress(s.currentTranslate),
                                                a.setTranslate(s.currentTranslate))
                                            }
                                    }
                                } else
                                    a.allowClick = !1,
                                    s.isTouched && (Object.assign(l, {
                                        startX: e,
                                        startY: t,
                                        currentX: e,
                                        currentY: t
                                    }),
                                    s.touchStartTime = g())
                            }
                        } else
                            s.startMoving && s.isScrolling && a.emit("touchMoveOpposite", r)
                    }
                }
                .bind(e),
                e.onTouchEnd = function(r) {
                    const i = this
                      , t = i.touchEventsData
                      , {params: a, touches: n, rtlTranslate: s, slidesGrid: o, enabled: e} = i;
                    if (e) {
                        let e = r;
                        if (e.originalEvent && (e = e.originalEvent),
                        t.allowTouchCallbacks && i.emit("touchEnd", e),
                        t.allowTouchCallbacks = !1,
                        t.isTouched) {
                            a.grabCursor && t.isMoved && t.isTouched && (!0 === i.allowSlideNext || !0 === i.allowSlidePrev) && i.setGrabCursor(!1);
                            var l, c = g(), u = c - t.touchStartTime;
                            if (i.allowClick) {
                                const r = e.path || e.composedPath && e.composedPath();
                                i.updateClickedSlide(r && r[0] || e.target),
                                i.emit("tap click", e),
                                u < 300 && c - t.lastClickTime < 300 && i.emit("doubleTap doubleClick", e)
                            }
                            if (t.lastClickTime = g(),
                            _(()=>{
                                i.destroyed || (i.allowClick = !0)
                            }
                            ),
                            t.isTouched && t.isMoved && i.swipeDirection && 0 !== n.diff && t.currentTranslate !== t.startTranslate) {
                                if (t.isTouched = !1,
                                t.isMoved = !1,
                                t.startMoving = !1,
                                l = a.followFinger ? s ? i.translate : -i.translate : -t.currentTranslate,
                                !a.cssMode)
                                    if (i.params.freeMode && a.freeMode.enabled)
                                        i.freeMode.onTouchEnd({
                                            currentPos: l
                                        });
                                    else {
                                        let t = 0
                                          , n = i.slidesSizesGrid[0];
                                        for (let e = 0; e < o.length; e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
                                            const i = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
                                            void 0 !== o[e + i] ? l >= o[e] && l < o[e + i] && (t = e,
                                            n = o[e + i] - o[e]) : l >= o[e] && (t = e,
                                            n = o[o.length - 1] - o[o.length - 2])
                                        }
                                        r = (l - o[t]) / n,
                                        c = t < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
                                        u > a.longSwipesMs ? a.longSwipes ? ("next" === i.swipeDirection && (r >= a.longSwipesRatio ? i.slideTo(t + c) : i.slideTo(t)),
                                        "prev" === i.swipeDirection && (r > 1 - a.longSwipesRatio ? i.slideTo(t + c) : i.slideTo(t))) : i.slideTo(i.activeIndex) : a.shortSwipes ? !i.navigation || e.target !== i.navigation.nextEl && e.target !== i.navigation.prevEl ? ("next" === i.swipeDirection && i.slideTo(t + c),
                                        "prev" === i.swipeDirection && i.slideTo(t)) : e.target === i.navigation.nextEl ? i.slideTo(t + c) : i.slideTo(t) : i.slideTo(i.activeIndex)
                                    }
                            } else
                                t.isTouched = !1,
                                t.isMoved = !1,
                                t.startMoving = !1
                        } else
                            t.isMoved && a.grabCursor && i.setGrabCursor(!1),
                            t.isMoved = !1,
                            t.startMoving = !1
                    }
                }
                .bind(e),
                n.cssMode && (e.onScroll = function() {
                    var e = this
                      , {wrapperEl: t, rtlTranslate: n, enabled: r} = e;
                    r && (e.previousTranslate = e.translate,
                    e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop,
                    -0 === e.translate && (e.translate = 0),
                    e.updateActiveIndex(),
                    e.updateSlidesClasses(),
                    (0 == (r = e.maxTranslate() - e.minTranslate()) ? 0 : (e.translate - e.minTranslate()) / r) !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
                    e.emit("setTranslate", e.translate, !1))
                }
                .bind(e)),
                e.onClick = function(e) {
                    this.enabled && !this.allowClick && (this.params.preventClicks && e.preventDefault(),
                    this.params.preventClicksPropagation) && this.animating && (e.stopPropagation(),
                    e.stopImmediatePropagation())
                }
                .bind(e),
                r.touch && !m && (t.addEventListener("touchstart", j),
                m = !0),
                y(e, "on")
            },
            detachEvents: function() {
                y(this, "off")
            }
        },
        breakpoints: {
            setBreakpoint: function() {
                var e, t, n, r, i = this, {activeIndex: a, initialized: s, loopedSlides: o=0, params: l, $el: c} = i, u = l.breakpoints;
                u && 0 !== Object.keys(u).length && (e = i.getBreakpoint(u, i.params.breakpointsBase, i.el)) && i.currentBreakpoint !== e && (u = (e in u ? u[e] : void 0) || i.originalParams,
                n = b(i, l),
                r = b(i, u),
                t = l.enabled,
                n && !r ? (c.removeClass(`${l.containerModifierClass}grid ${l.containerModifierClass}grid-column`),
                i.emitContainerClasses()) : !n && r && (c.addClass(l.containerModifierClass + "grid"),
                (u.grid.fill && "column" === u.grid.fill || !u.grid.fill && "column" === l.grid.fill) && c.addClass(l.containerModifierClass + "grid-column"),
                i.emitContainerClasses()),
                n = u.direction && u.direction !== l.direction,
                r = l.loop && (u.slidesPerView !== l.slidesPerView || n),
                n && s && i.changeDirection(),
                d(i.params, u),
                c = i.params.enabled,
                Object.assign(i, {
                    allowTouchMove: i.params.allowTouchMove,
                    allowSlideNext: i.params.allowSlideNext,
                    allowSlidePrev: i.params.allowSlidePrev
                }),
                t && !c ? i.disable() : !t && c && i.enable(),
                i.currentBreakpoint = e,
                i.emit("_beforeBreakpoint", u),
                r && s && (i.loopDestroy(),
                i.loopCreate(),
                i.updateSlides(),
                i.slideTo(a - o + i.loopedSlides, 0, !1)),
                i.emit("breakpoint", u))
            },
            getBreakpoint: function(e, n="window", r) {
                if (e && ("container" !== n || r)) {
                    let t = !1;
                    const i = O()
                      , a = "window" === n ? i.innerHeight : r.clientHeight
                      , s = Object.keys(e).map(e=>{
                        var t;
                        return "string" == typeof e && 0 === e.indexOf("@") ? (t = parseFloat(e.substr(1)),
                        {
                            value: a * t,
                            point: e
                        }) : {
                            value: e,
                            point: e
                        }
                    }
                    );
                    s.sort((e,t)=>parseInt(e.value, 10) - parseInt(t.value, 10));
                    for (let e = 0; e < s.length; e += 1) {
                        const {point: O, value: a} = s[e];
                        "window" === n ? i.matchMedia(`(min-width: ${a}px)`).matches && (t = O) : a <= r.clientWidth && (t = O)
                    }
                    return t || "max"
                }
            }
        },
        checkOverflow: {
            checkOverflow: function() {
                const e = this
                  , {isLocked: t, params: n} = e
                  , r = n["slidesOffsetBefore"];
                if (r) {
                    const t = e.slides.length - 1
                      , n = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * r;
                    e.isLocked = e.size > n
                } else
                    e.isLocked = 1 === e.snapGrid.length;
                !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                t && t !== e.isLocked && (e.isEnd = !1),
                t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
            }
        },
        classes: {
            addClasses: function() {
                var {classNames: e, params: t, rtl: n, $el: r, device: i, support: a} = this
                  , a = function(e, n) {
                    const r = [];
                    return e.forEach(t=>{
                        "object" == typeof t ? Object.keys(t).forEach(e=>{
                            t[e] && r.push(n + e)
                        }
                        ) : "string" == typeof t && r.push(n + t)
                    }
                    ),
                    r
                }(["initialized", t.direction, {
                    "pointer-events": !a.touch
                }, {
                    "free-mode": this.params.freeMode && t.freeMode.enabled
                }, {
                    autoheight: t.autoHeight
                }, {
                    rtl: n
                }, {
                    grid: t.grid && 1 < t.grid.rows
                }, {
                    "grid-column": t.grid && 1 < t.grid.rows && "column" === t.grid.fill
                }, {
                    android: i.android
                }, {
                    ios: i.ios
                }, {
                    "css-mode": t.cssMode
                }, {
                    centered: t.cssMode && t.centeredSlides
                }], t.containerModifierClass);
                e.push(...a),
                r.addClass([...e].join(" ")),
                this.emitContainerClasses()
            },
            removeClasses: function() {
                var {$el: e, classNames: t} = this;
                e.removeClass(t.join(" ")),
                this.emitContainerClasses()
            }
        },
        images: {
            loadImage: function(e, t, n, r, i, a) {
                var s = O();
                function o() {
                    a && a()
                }
                !(A(e).parent("picture")[0] || e.complete && i) && t ? ((e = new s.Image).onload = o,
                e.onerror = o,
                r && (e.sizes = r),
                n && (e.srcset = n),
                t && (e.src = t)) : o()
            },
            preloadImages: function() {
                const t = this;
                function n() {
                    null != t && t && !t.destroyed && (void 0 !== t.imagesLoaded && (t.imagesLoaded += 1),
                    t.imagesLoaded === t.imagesToLoad.length) && (t.params.updateOnImagesReady && t.update(),
                    t.emit("imagesReady"))
                }
                t.imagesToLoad = t.$el.find("img");
                for (let e = 0; e < t.imagesToLoad.length; e += 1) {
                    var r = t.imagesToLoad[e];
                    t.loadImage(r, r.currentSrc || r.getAttribute("src"), r.srcset || r.getAttribute("srcset"), r.sizes || r.getAttribute("sizes"), !0, n)
                }
            }
        }
    }
      , E = {};
    class C {
        constructor(...t) {
            let e, n;
            if (1 === t.length && t[0].constructor && "Object" === Object.prototype.toString.call(t[0]).slice(8, -1) ? n = t[0] : [e,n] = t,
            n = d({}, n = n || {}),
            e && !n.el && (n.el = e),
            n.el && 1 < A(n.el).length) {
                const t = [];
                return A(n.el).each(e=>{
                    e = d({}, n, {
                        el: e
                    });
                    t.push(new C(e))
                }
                ),
                t
            }
            const a = this;
            a.__swiper__ = !0,
            a.support = p(),
            a.device = (t = {
                userAgent: n.userAgent
            },
            l = l || function({userAgent: e}={}) {
                var t = p()
                  , n = O()
                  , r = n.navigator.platform
                  , e = e || n.navigator.userAgent
                  , i = {
                    ios: !1,
                    android: !1
                }
                  , a = n.screen.width
                  , n = n.screen.height
                  , s = e.match(/(Android);?[\s\/]+([\d.]+)?/);
                let o = e.match(/(iPad).*OS\s([\d_]+)/);
                var l = e.match(/(iPod)(.*OS\s([\d_]+))?/)
                  , c = !o && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
                  , u = "Win32" === r
                  , r = "MacIntel" === r;
                return !o && r && t.touch && 0 <= ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(a + "x" + n) && (o = (o = e.match(/(Version)\/([\d.]+)/)) || [0, 1, "13_0_0"]),
                s && !u && (i.os = "android",
                i.android = !0),
                (o || c || l) && (i.os = "ios",
                i.ios = !0),
                i
            }(t)),
            a.browser = I(),
            a.eventsListeners = {},
            a.eventsAnyListeners = [],
            a.modules = [...a.__modules__],
            n.modules && Array.isArray(n.modules) && a.modules.push(...n.modules);
            const s = {};
            a.modules.forEach(e=>{
                var r, i;
                e({
                    swiper: a,
                    extendParams: (r = n,
                    i = s,
                    function(e={}) {
                        var t = Object.keys(e)[0]
                          , n = e[t];
                        "object" == typeof n && null !== n && (0 <= ["navigation", "pagination", "scrollbar"].indexOf(t) && !0 === r[t] && (r[t] = {
                            auto: !0
                        }),
                        t in r) && "enabled"in n && (!0 === r[t] && (r[t] = {
                            enabled: !0
                        }),
                        "object" != typeof r[t] || "enabled"in r[t] || (r[t].enabled = !0),
                        r[t] || (r[t] = {
                            enabled: !1
                        })),
                        d(i, e)
                    }
                    ),
                    on: a.on.bind(a),
                    once: a.once.bind(a),
                    off: a.off.bind(a),
                    emit: a.emit.bind(a)
                })
            }
            );
            var r, t = d({}, w, s);
            return a.params = d({}, t, E, n),
            a.originalParams = d({}, a.params),
            a.passedParams = d({}, n),
            a.params && a.params.on && Object.keys(a.params.on).forEach(e=>{
                a.on(e, a.params.on[e])
            }
            ),
            a.params && a.params.onAny && a.onAny(a.params.onAny),
            a.$ = A,
            Object.assign(a, {
                enabled: a.params.enabled,
                el: e,
                classNames: [],
                slides: A(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: ()=>"horizontal" === a.params.direction,
                isVertical: ()=>"vertical" === a.params.direction,
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: a.params.allowSlideNext,
                allowSlidePrev: a.params.allowSlidePrev,
                touchEvents: (t = ["touchstart", "touchmove", "touchend", "touchcancel"],
                r = ["pointerdown", "pointermove", "pointerup"],
                a.touchEventsTouch = {
                    start: t[0],
                    move: t[1],
                    end: t[2],
                    cancel: t[3]
                },
                a.touchEventsDesktop = {
                    start: r[0],
                    move: r[1],
                    end: r[2]
                },
                a.support.touch || !a.params.simulateTouch ? a.touchEventsTouch : a.touchEventsDesktop),
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    focusableElements: a.params.focusableElements,
                    lastClickTime: g(),
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    isTouchEvent: void 0,
                    startMoving: void 0
                },
                allowClick: !0,
                allowTouchMove: a.params.allowTouchMove,
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
            a.emit("_swiper"),
            a.params.init && a.init(),
            a
        }
        enable() {
            this.enabled || (this.enabled = !0,
            this.params.grabCursor && this.setGrabCursor(),
            this.emit("enable"))
        }
        disable() {
            this.enabled && (this.enabled = !1,
            this.params.grabCursor && this.unsetGrabCursor(),
            this.emit("disable"))
        }
        setProgress(e, t) {
            e = Math.min(Math.max(e, 0), 1);
            var n = this.minTranslate()
              , e = (this.maxTranslate() - n) * e + n;
            this.translateTo(e, void 0 === t ? 0 : t),
            this.updateActiveIndex(),
            this.updateSlidesClasses()
        }
        emitContainerClasses() {
            const t = this;
            var e;
            t.params._emitClasses && t.el && (e = t.el.className.split(" ").filter(e=>0 === e.indexOf("swiper") || 0 === e.indexOf(t.params.containerModifierClass)),
            t.emit("_containerClasses", e.join(" ")))
        }
        getSlideClasses(e) {
            const t = this;
            return e.className.split(" ").filter(e=>0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)).join(" ")
        }
        emitSlidesClasses() {
            const n = this;
            if (n.params._emitClasses && n.el) {
                const r = [];
                n.slides.each(e=>{
                    var t = n.getSlideClasses(e);
                    r.push({
                        slideEl: e,
                        classNames: t
                    }),
                    n.emit("_slideClass", e, t)
                }
                ),
                n.emit("_slideClasses", r)
            }
        }
        slidesPerViewDynamic(e="current", t=!1) {
            var {params: n, slides: r, slidesGrid: i, slidesSizesGrid: a, size: s, activeIndex: o} = this;
            let l = 1;
            if (n.centeredSlides) {
                let t, n = r[o].swiperSlideSize;
                for (let e = o + 1; e < r.length; e += 1)
                    r[e] && !t && (n += r[e].swiperSlideSize,
                    l += 1,
                    n > s) && (t = !0);
                for (let e = o - 1; 0 <= e; --e)
                    r[e] && !t && (n += r[e].swiperSlideSize,
                    l += 1,
                    n > s) && (t = !0)
            } else if ("current" === e)
                for (let e = o + 1; e < r.length; e += 1)
                    (t ? i[e] + a[e] - i[o] < s : i[e] - i[o] < s) && (l += 1);
            else
                for (let e = o - 1; 0 <= e; --e)
                    i[o] - i[e] < s && (l += 1);
            return l
        }
        update() {
            const t = this;
            var e, n;
            function r() {
                var e = t.rtlTranslate ? -1 * t.translate : t.translate
                  , e = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
                t.setTranslate(e),
                t.updateActiveIndex(),
                t.updateSlidesClasses()
            }
            t && !t.destroyed && ({snapGrid: e, params: n} = t,
            n.breakpoints && t.setBreakpoint(),
            t.updateSize(),
            t.updateSlides(),
            t.updateProgress(),
            t.updateSlidesClasses(),
            t.params.freeMode && t.params.freeMode.enabled ? (r(),
            t.params.autoHeight && t.updateAutoHeight()) : (("auto" === t.params.slidesPerView || 1 < t.params.slidesPerView) && t.isEnd && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0)) || r(),
            n.watchOverflow && e !== t.snapGrid && t.checkOverflow(),
            t.emit("update"))
        }
        changeDirection(t, e=!0) {
            var n = this
              , r = n.params.direction;
            return (t = t || ("horizontal" === r ? "vertical" : "horizontal")) === r || "horizontal" !== t && "vertical" !== t || (n.$el.removeClass("" + n.params.containerModifierClass + r).addClass("" + n.params.containerModifierClass + t),
            n.emitContainerClasses(),
            n.params.direction = t,
            n.slides.each(e=>{
                "vertical" === t ? e.style.width = "" : e.style.height = ""
            }
            ),
            n.emit("changeDirection"),
            e && n.update()),
            n
        }
        mount(e) {
            const n = this;
            if (!n.mounted) {
                const i = A(e || n.params.el);
                if (!(e = i[0]))
                    return !1;
                e.swiper = n;
                const a = ()=>"." + (n.params.wrapperClass || "").trim().split(" ").join(".");
                let t = e && e.shadowRoot && e.shadowRoot.querySelector ? ((r = A(e.shadowRoot.querySelector(a()))).children = e=>i.children(e),
                r) : i.children(a());
                var r;
                if (0 === t.length && n.params.createElements) {
                    const e = T().createElement("div");
                    t = A(e),
                    e.className = n.params.wrapperClass,
                    i.append(e),
                    i.children("." + n.params.slideClass).each(e=>{
                        t.append(e)
                    }
                    )
                }
                Object.assign(n, {
                    $el: i,
                    el: e,
                    $wrapperEl: t,
                    wrapperEl: t[0],
                    mounted: !0,
                    rtl: "rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction"),
                    rtlTranslate: "horizontal" === n.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction")),
                    wrongRTL: "-webkit-box" === t.css("display")
                })
            }
            return !0
        }
        init(e) {
            var t = this;
            return t.initialized || !1 !== t.mount(e) && (t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.params.loop && t.loopCreate(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.preloadImages && t.preloadImages(),
            t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
            t.attachEvents(),
            t.initialized = !0,
            t.emit("init"),
            t.emit("afterInit")),
            t
        }
        destroy(e=!0, t=!0) {
            const n = this
              , {params: r, $el: i, $wrapperEl: a, slides: s} = n;
            if (void 0 !== n.params && !n.destroyed) {
                if (n.emit("beforeDestroy"),
                n.initialized = !1,
                n.detachEvents(),
                r.loop && n.loopDestroy(),
                t && (n.removeClasses(),
                i.removeAttr("style"),
                a.removeAttr("style"),
                s) && s.length && s.removeClass([r.slideVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index"),
                n.emit("destroy"),
                Object.keys(n.eventsListeners).forEach(e=>{
                    n.off(e)
                }
                ),
                !1 !== e) {
                    n.$el[0].swiper = null;
                    {
                        const o = n;
                        Object.keys(o).forEach(e=>{
                            try {
                                o[e] = null
                            } catch (e) {}
                            try {
                                delete o[e]
                            } catch (e) {}
                        }
                        )
                    }
                }
                n.destroyed = !0
            }
            return null
        }
        static extendDefaults(e) {
            d(E, e)
        }
        static get extendedDefaults() {
            return E
        }
        static get defaults() {
            return w
        }
        static installModule(e) {
            C.prototype.__modules__ || (C.prototype.__modules__ = []);
            var t = C.prototype.__modules__;
            "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
        }
        static use(e) {
            return Array.isArray(e) ? e.forEach(e=>C.installModule(e)) : C.installModule(e),
            C
        }
    }
    function M(n, r, i, a) {
        const s = T();
        return n.params.createElements && Object.keys(a).forEach(t=>{
            if (!i[t] && !0 === i.auto) {
                let e = n.$el.children("." + a[t])[0];
                e || ((e = s.createElement("div")).className = a[t],
                n.$el.append(e)),
                i[t] = e,
                r[t] = e
            }
        }
        ),
        i
    }
    function k(e="") {
        return "." + e.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")
    }
    function P(e) {
        const {effect: n, swiper: r, on: t, setTranslate: i, setTransition: a, overwriteParams: s, perspective: o} = e;
        t("beforeInit", ()=>{
            var e;
            r.params.effect === n && (r.classNames.push("" + r.params.containerModifierClass + n),
            o && o() && r.classNames.push(r.params.containerModifierClass + "3d"),
            e = s ? s() : {},
            Object.assign(r.params, e),
            Object.assign(r.originalParams, e))
        }
        ),
        t("setTranslate", ()=>{
            r.params.effect === n && i()
        }
        ),
        t("setTransition", (e,t)=>{
            r.params.effect === n && a(t)
        }
        )
    }
    function D(e, t) {
        return e.transformEl ? t.find(e.transformEl).css({
            "backface-visibility": "hidden",
            "-webkit-backface-visibility": "hidden"
        }) : t
    }
    function L({swiper: n, duration: e, transformEl: t, allSlides: r}) {
        const {slides: i, activeIndex: a, $wrapperEl: s} = n;
        if (n.params.virtualTranslate && 0 !== e) {
            let e = !1;
            (r ? t ? i.find(t) : i : t ? i.eq(a).find(t) : i.eq(a)).transitionEnd(()=>{
                if (!e && n && !n.destroyed) {
                    e = !0,
                    n.animating = !1;
                    var t = ["webkitTransitionEnd", "transitionend"];
                    for (let e = 0; e < t.length; e += 1)
                        s.trigger(t[e])
                }
            }
            )
        }
    }
    function z(e, t, n) {
        var r = "swiper-slide-shadow" + (n ? "-" + n : "")
          , e = e.transformEl ? t.find(e.transformEl) : t;
        let i = e.children("." + r);
        return i.length || (i = A(`<div class="swiper-slide-shadow ${n ? "-" + n : ""}"></div>`),
        e.append(i)),
        i
    }
    return Object.keys(x).forEach(t=>{
        Object.keys(x[t]).forEach(e=>{
            C.prototype[e] = x[t][e]
        }
        )
    }
    ),
    C.use([function({swiper: a, on: e, emit: t}) {
        const n = O();
        let r = null;
        const s = ()=>{
            a && !a.destroyed && a.initialized && (t("beforeResize"),
            t("resize"))
        }
          , i = ()=>{
            a && !a.destroyed && a.initialized && t("orientationchange")
        }
        ;
        e("init", ()=>{
            a.params.resizeObserver && void 0 !== n.ResizeObserver ? a && !a.destroyed && a.initialized && (r = new ResizeObserver(e=>{
                var {width: t, height: n} = a;
                let r = t
                  , i = n;
                e.forEach(({contentBoxSize: e, contentRect: t, target: n})=>{
                    n && n !== a.el || (r = t ? t.width : (e[0] || e).inlineSize,
                    i = t ? t.height : (e[0] || e).blockSize)
                }
                ),
                r === t && i === n || s()
            }
            )).observe(a.el) : (n.addEventListener("resize", s),
            n.addEventListener("orientationchange", i))
        }
        ),
        e("destroy", ()=>{
            r && r.unobserve && a.el && (r.unobserve(a.el),
            r = null),
            n.removeEventListener("resize", s),
            n.removeEventListener("orientationchange", i)
        }
        )
    }
    , function({swiper: e, extendParams: t, on: n, emit: r}) {
        const i = []
          , a = O()
          , s = (e,t={})=>{
            var n = new (a.MutationObserver || a.WebkitMutationObserver)(e=>{
                var t;
                1 === e.length ? r("observerUpdate", e[0]) : (t = function() {
                    r("observerUpdate", e[0])
                }
                ,
                a.requestAnimationFrame ? a.requestAnimationFrame(t) : a.setTimeout(t, 0))
            }
            );
            n.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData
            }),
            i.push(n)
        }
        ;
        t({
            observer: !1,
            observeParents: !1,
            observeSlideChildren: !1
        }),
        n("init", ()=>{
            if (e.params.observer) {
                if (e.params.observeParents) {
                    var t = e.$el.parents();
                    for (let e = 0; e < t.length; e += 1)
                        s(t[e])
                }
                s(e.$el[0], {
                    childList: e.params.observeSlideChildren
                }),
                s(e.$wrapperEl[0], {
                    attributes: !1
                })
            }
        }
        ),
        n("destroy", ()=>{
            i.forEach(e=>{
                e.disconnect()
            }
            ),
            i.splice(0, i.length)
        }
        )
    }
    ]),
    C.use([function({swiper: x, extendParams: e, on: t}) {
        let n;
        function T(e, t) {
            var n = x.params.virtual;
            return n.cache && x.virtual.cache[t] ? x.virtual.cache[t] : ((e = n.renderSlide ? A(n.renderSlide.call(x, e, t)) : A(`<div class="${x.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`)).attr("data-swiper-slide-index") || e.attr("data-swiper-slide-index", t),
            n.cache && (x.virtual.cache[t] = e),
            e)
        }
        function s(t) {
            const {slidesPerView: e, slidesPerGroup: n, centeredSlides: r} = x.params
              , {addSlidesBefore: i, addSlidesAfter: a} = x.params.virtual
              , {from: s, to: o, slides: l, slidesGrid: c, offset: u} = x.virtual;
            x.params.cssMode || x.updateActiveIndex();
            var d = x.activeIndex || 0;
            let p, f, h;
            p = x.rtlTranslate ? "right" : x.isHorizontal() ? "left" : "top",
            h = r ? (f = Math.floor(e / 2) + n + a,
            Math.floor(e / 2) + n + i) : (f = e + (n - 1) + a,
            n + i);
            const m = Math.max((d || 0) - h, 0)
              , g = Math.min((d || 0) + f, l.length - 1)
              , v = (x.slidesGrid[m] || 0) - (x.slidesGrid[0] || 0);
            function y() {
                x.updateSlides(),
                x.updateProgress(),
                x.updateSlidesClasses(),
                x.lazy && x.params.lazy.enabled && x.lazy.load()
            }
            if (Object.assign(x.virtual, {
                from: m,
                to: g,
                offset: v,
                slidesGrid: x.slidesGrid
            }),
            s !== m || o !== g || t)
                if (x.params.virtual.renderExternal)
                    x.params.virtual.renderExternal.call(x, {
                        offset: v,
                        from: m,
                        to: g,
                        slides: function() {
                            var t = [];
                            for (let e = m; e <= g; e += 1)
                                t.push(l[e]);
                            return t
                        }()
                    }),
                    x.params.virtual.renderExternalUpdate && y();
                else {
                    var b = []
                      , w = [];
                    if (t)
                        x.$wrapperEl.find("." + x.params.slideClass).remove();
                    else
                        for (let e = s; e <= o; e += 1)
                            (e < m || e > g) && x.$wrapperEl.find(`.${x.params.slideClass}[data-swiper-slide-index="${e}"]`).remove();
                    for (let e = 0; e < l.length; e += 1)
                        e >= m && e <= g && (void 0 === o || t ? w.push(e) : (e > o && w.push(e),
                        e < s && b.push(e)));
                    w.forEach(e=>{
                        x.$wrapperEl.append(T(l[e], e))
                    }
                    ),
                    b.sort((e,t)=>t - e).forEach(e=>{
                        x.$wrapperEl.prepend(T(l[e], e))
                    }
                    ),
                    x.$wrapperEl.children(".swiper-slide").css(p, v + "px"),
                    y()
                }
            else
                x.slidesGrid !== c && v !== u && x.slides.css(p, v + "px"),
                x.updateProgress()
        }
        e({
            virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null,
                renderExternalUpdate: !0,
                addSlidesBefore: 0,
                addSlidesAfter: 0
            }
        }),
        x.virtual = {
            cache: {},
            from: void 0,
            to: void 0,
            slides: [],
            offset: 0,
            slidesGrid: []
        },
        t("beforeInit", ()=>{
            x.params.virtual.enabled && (x.virtual.slides = x.params.virtual.slides,
            x.classNames.push(x.params.containerModifierClass + "virtual"),
            x.params.watchSlidesProgress = !0,
            x.originalParams.watchSlidesProgress = !0,
            x.params.initialSlide || s())
        }
        ),
        t("setTranslate", ()=>{
            x.params.virtual.enabled && (x.params.cssMode && !x._immediateVirtual ? (clearTimeout(n),
            n = setTimeout(()=>{
                s()
            }
            , 100)) : s())
        }
        ),
        t("init update resize", ()=>{
            x.params.virtual.enabled && x.params.cssMode && S(x.wrapperEl, "--swiper-virtual-size", x.virtualSize + "px")
        }
        ),
        Object.assign(x.virtual, {
            appendSlide: function(t) {
                if ("object" == typeof t && "length"in t)
                    for (let e = 0; e < t.length; e += 1)
                        t[e] && x.virtual.slides.push(t[e]);
                else
                    x.virtual.slides.push(t);
                s(!0)
            },
            prependSlide: function(r) {
                const i = x.activeIndex;
                let e = i + 1
                  , a = 1;
                if (Array.isArray(r)) {
                    for (let e = 0; e < r.length; e += 1)
                        r[e] && x.virtual.slides.unshift(r[e]);
                    e = i + r.length,
                    a = r.length
                } else
                    x.virtual.slides.unshift(r);
                if (x.params.virtual.cache) {
                    const r = x.virtual.cache
                      , i = {};
                    Object.keys(r).forEach(e=>{
                        var t = r[e]
                          , n = t.attr("data-swiper-slide-index");
                        n && t.attr("data-swiper-slide-index", parseInt(n, 10) + a),
                        i[parseInt(e, 10) + a] = t
                    }
                    ),
                    x.virtual.cache = i
                }
                s(!0),
                x.slideTo(e, 0)
            },
            removeSlide: function(n) {
                if (null != n) {
                    let t = x.activeIndex;
                    if (Array.isArray(n))
                        for (let e = n.length - 1; 0 <= e; --e)
                            x.virtual.slides.splice(n[e], 1),
                            x.params.virtual.cache && delete x.virtual.cache[n[e]],
                            n[e] < t && --t,
                            t = Math.max(t, 0);
                    else
                        x.virtual.slides.splice(n, 1),
                        x.params.virtual.cache && delete x.virtual.cache[n],
                        n < t && --t,
                        t = Math.max(t, 0);
                    s(!0),
                    x.slideTo(t, 0)
                }
            },
            removeAllSlides: function() {
                x.virtual.slides = [],
                x.params.virtual.cache && (x.virtual.cache = {}),
                s(!0),
                x.slideTo(0, 0)
            },
            update: s
        })
    }
    , function({swiper: d, extendParams: e, on: t, emit: p}) {
        const f = T()
          , h = O();
        function n(t) {
            if (d.enabled) {
                const n = d["rtlTranslate"];
                let e = t;
                const r = (e = e.originalEvent ? e.originalEvent : e).keyCode || e.charCode
                  , i = d.params.keyboard.pageUpDown
                  , a = i && 33 === r
                  , s = i && 34 === r
                  , o = 37 === r
                  , l = 39 === r
                  , c = 38 === r
                  , u = 40 === r;
                if (!d.allowSlideNext && (d.isHorizontal() && l || d.isVertical() && u || s))
                    return !1;
                if (!d.allowSlidePrev && (d.isHorizontal() && o || d.isVertical() && c || a))
                    return !1;
                if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || f.activeElement && f.activeElement.nodeName && ("input" === f.activeElement.nodeName.toLowerCase() || "textarea" === f.activeElement.nodeName.toLowerCase()))) {
                    if (d.params.keyboard.onlyInViewport && (a || s || o || l || c || u)) {
                        let t = !1;
                        if (0 < d.$el.parents("." + d.params.slideClass).length && 0 === d.$el.parents("." + d.params.slideActiveClass).length)
                            return;
                        const e = d.$el
                          , p = e[0].clientWidth
                          , r = e[0].clientHeight
                          , f = h.innerWidth
                          , i = h.innerHeight
                          , a = d.$el.offset()
                          , s = (n && (a.left -= d.$el[0].scrollLeft),
                        [[a.left, a.top], [a.left + p, a.top], [a.left, a.top + r], [a.left + p, a.top + r]]);
                        for (let e = 0; e < s.length; e += 1) {
                            const n = s[e];
                            0 <= n[0] && n[0] <= f && 0 <= n[1] && n[1] <= i && (0 === n[0] && 0 === n[1] || (t = !0))
                        }
                        if (!t)
                            return
                    }
                    d.isHorizontal() ? ((a || s || o || l) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1),
                    ((s || l) && !n || (a || o) && n) && d.slideNext(),
                    ((a || o) && !n || (s || l) && n) && d.slidePrev()) : ((a || s || c || u) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1),
                    (s || u) && d.slideNext(),
                    (a || c) && d.slidePrev()),
                    p("keyPress", r)
                }
            }
        }
        function r() {
            d.keyboard.enabled || (A(f).on("keydown", n),
            d.keyboard.enabled = !0)
        }
        function i() {
            d.keyboard.enabled && (A(f).off("keydown", n),
            d.keyboard.enabled = !1)
        }
        e({
            keyboard: {
                enabled: !(d.keyboard = {
                    enabled: !1
                }),
                onlyInViewport: !0,
                pageUpDown: !0
            }
        }),
        t("init", ()=>{
            d.params.keyboard.enabled && r()
        }
        ),
        t("destroy", ()=>{
            d.keyboard.enabled && i()
        }
        ),
        Object.assign(d.keyboard, {
            enable: r,
            disable: i
        })
    }
    , function({swiper: c, extendParams: e, on: t, emit: u}) {
        const n = O();
        let d;
        e({
            mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarget: "container",
                thresholdDelta: null,
                thresholdTime: null
            }
        }),
        c.mousewheel = {
            enabled: !1
        };
        let p, r = g();
        const f = [];
        function i() {
            c.enabled && (c.mouseEntered = !0)
        }
        function a() {
            c.enabled && (c.mouseEntered = !1)
        }
        function h(e) {
            c.params.mousewheel.thresholdDelta && e.delta < c.params.mousewheel.thresholdDelta || c.params.mousewheel.thresholdTime && g() - r < c.params.mousewheel.thresholdTime || 6 <= e.delta && g() - r < 60 || (e.direction < 0 ? c.isEnd && !c.params.loop || c.animating || (c.slideNext(),
            u("scroll", e.raw)) : c.isBeginning && !c.params.loop || c.animating || (c.slidePrev(),
            u("scroll", e.raw)),
            r = (new n.Date).getTime())
        }
        function s(r) {
            let i = r
              , a = !0;
            if (c.enabled) {
                var s = c.params.mousewheel;
                c.params.cssMode && i.preventDefault();
                let e = c.$el;
                if ("container" !== c.params.mousewheel.eventsTarget && (e = A(c.params.mousewheel.eventsTarget)),
                !c.mouseEntered && !e[0].contains(i.target) && !s.releaseOnEdges)
                    return !0;
                i.originalEvent && (i = i.originalEvent);
                let t = 0;
                var o = c.rtlTranslate ? -1 : 1
                  , l = function(e) {
                    let t = 0
                      , n = 0
                      , r = 0
                      , i = 0;
                    return "detail"in e && (n = e.detail),
                    "wheelDelta"in e && (n = -e.wheelDelta / 120),
                    "wheelDeltaY"in e && (n = -e.wheelDeltaY / 120),
                    "wheelDeltaX"in e && (t = -e.wheelDeltaX / 120),
                    "axis"in e && e.axis === e.HORIZONTAL_AXIS && (t = n,
                    n = 0),
                    r = 10 * t,
                    i = 10 * n,
                    "deltaY"in e && (i = e.deltaY),
                    "deltaX"in e && (r = e.deltaX),
                    e.shiftKey && !r && (r = i,
                    i = 0),
                    (r || i) && e.deltaMode && (1 === e.deltaMode ? (r *= 40,
                    i *= 40) : (r *= 800,
                    i *= 800)),
                    r && !t && (t = r < 1 ? -1 : 1),
                    i && !n && (n = i < 1 ? -1 : 1),
                    {
                        spinX: t,
                        spinY: n,
                        pixelX: r,
                        pixelY: i
                    }
                }(i);
                if (s.forceToAxis)
                    if (c.isHorizontal()) {
                        if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY)))
                            return !0;
                        t = -l.pixelX * o
                    } else {
                        if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX)))
                            return !0;
                        t = -l.pixelY
                    }
                else
                    t = Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * o : -l.pixelY;
                if (0 === t)
                    return !0;
                s.invert && (t = -t);
                let n = c.getTranslate() + t * s.sensitivity;
                if ((n = n >= c.minTranslate() ? c.minTranslate() : n) <= c.maxTranslate() && (n = c.maxTranslate()),
                (a = !!c.params.loop || !(n === c.minTranslate() || n === c.maxTranslate())) && c.params.nested && i.stopPropagation(),
                c.params.freeMode && c.params.freeMode.enabled) {
                    const r = {
                        time: g(),
                        delta: Math.abs(t),
                        direction: Math.sign(t)
                    }
                      , a = p && r.time < p.time + 500 && r.delta <= p.delta && r.direction === p.direction;
                    if (!a) {
                        p = void 0,
                        c.params.loop && c.loopFix();
                        let e = c.getTranslate() + t * s.sensitivity;
                        const A = c.isBeginning
                          , g = c.isEnd;
                        if ((e = e >= c.minTranslate() ? c.minTranslate() : e) <= c.maxTranslate() && (e = c.maxTranslate()),
                        c.setTransition(0),
                        c.setTranslate(e),
                        c.updateProgress(),
                        c.updateActiveIndex(),
                        c.updateSlidesClasses(),
                        (!A && c.isBeginning || !g && c.isEnd) && c.updateSlidesClasses(),
                        c.params.freeMode.sticky) {
                            clearTimeout(d),
                            d = void 0,
                            15 <= f.length && f.shift();
                            const i = f.length ? f[f.length - 1] : void 0
                              , u = f[0];
                            if (f.push(r),
                            i && (r.delta > i.delta || r.direction !== i.direction))
                                f.splice(0);
                            else if (15 <= f.length && r.time - u.time < 500 && 1 <= u.delta - r.delta && r.delta <= 6) {
                                const i = 0 < t ? .8 : .2;
                                p = r,
                                f.splice(0),
                                d = _(()=>{
                                    c.slideToClosest(c.params.speed, !0, void 0, i)
                                }
                                , 0)
                            }
                            d = d || _(()=>{
                                p = r,
                                f.splice(0),
                                c.slideToClosest(c.params.speed, !0, void 0, .5)
                            }
                            , 500)
                        }
                        if (a || u("scroll", i),
                        c.params.autoplay && c.params.autoplayDisableOnInteraction && c.autoplay.stop(),
                        e === c.minTranslate() || e === c.maxTranslate())
                            return !0
                    }
                } else {
                    const i = {
                        time: g(),
                        delta: Math.abs(t),
                        direction: Math.sign(t),
                        raw: r
                    }
                      , u = (2 <= f.length && f.shift(),
                    f.length ? f[f.length - 1] : void 0);
                    if (f.push(i),
                    (!u || i.direction !== u.direction || i.delta > u.delta || i.time > u.time + 150) && h(i),
                    function(e) {
                        var t = c.params.mousewheel;
                        if (e.direction < 0) {
                            if (c.isEnd && !c.params.loop && t.releaseOnEdges)
                                return 1
                        } else if (c.isBeginning && !c.params.loop && t.releaseOnEdges)
                            return 1
                    }(i))
                        return !0
                }
                return i.preventDefault ? i.preventDefault() : i.returnValue = !1,
                !1
            }
        }
        function o(e) {
            let t = c.$el;
            (t = "container" !== c.params.mousewheel.eventsTarget ? A(c.params.mousewheel.eventsTarget) : t)[e]("mouseenter", i),
            t[e]("mouseleave", a),
            t[e]("wheel", s)
        }
        function l() {
            return c.params.cssMode ? (c.wrapperEl.removeEventListener("wheel", s),
            !0) : !c.mousewheel.enabled && (o("on"),
            c.mousewheel.enabled = !0)
        }
        function m() {
            return c.params.cssMode ? (c.wrapperEl.addEventListener(event, s),
            !0) : !!c.mousewheel.enabled && (o("off"),
            !(c.mousewheel.enabled = !1))
        }
        t("init", ()=>{
            !c.params.mousewheel.enabled && c.params.cssMode && m(),
            c.params.mousewheel.enabled && l()
        }
        ),
        t("destroy", ()=>{
            c.params.cssMode && l(),
            c.mousewheel.enabled && m()
        }
        ),
        Object.assign(c.mousewheel, {
            enable: l,
            disable: m
        })
    }
    , function({swiper: i, extendParams: e, on: t, emit: a}) {
        function r(e) {
            let t;
            return t = e && (t = A(e),
            i.params.uniqueNavElements) && "string" == typeof e && 1 < t.length && 1 === i.$el.find(e).length ? i.$el.find(e) : t
        }
        function n(e, t) {
            var n = i.params.navigation;
            e && 0 < e.length && (e[t ? "addClass" : "removeClass"](n.disabledClass),
            e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = t),
            i.params.watchOverflow) && i.enabled && e[i.isLocked ? "addClass" : "removeClass"](n.lockClass)
        }
        function s() {
            var e, t;
            i.params.loop || ({$nextEl: e, $prevEl: t} = i.navigation,
            n(t, i.isBeginning && !i.params.rewind),
            n(e, i.isEnd && !i.params.rewind))
        }
        function o(e) {
            e.preventDefault(),
            i.isBeginning && !i.params.loop && !i.params.rewind || i.slidePrev()
        }
        function l(e) {
            e.preventDefault(),
            i.isEnd && !i.params.loop && !i.params.rewind || i.slideNext()
        }
        function c() {
            var e, t, n = i.params.navigation;
            i.params.navigation = M(i, i.originalParams.navigation, i.params.navigation, {
                nextEl: "swiper-button-next",
                prevEl: "swiper-button-prev"
            }),
            (n.nextEl || n.prevEl) && (e = r(n.nextEl),
            t = r(n.prevEl),
            e && 0 < e.length && e.on("click", l),
            t && 0 < t.length && t.on("click", o),
            Object.assign(i.navigation, {
                $nextEl: e,
                nextEl: e && e[0],
                $prevEl: t,
                prevEl: t && t[0]
            }),
            i.enabled || (e && e.addClass(n.lockClass),
            t && t.addClass(n.lockClass)))
        }
        function u() {
            var {$nextEl: e, $prevEl: t} = i.navigation;
            e && e.length && (e.off("click", l),
            e.removeClass(i.params.navigation.disabledClass)),
            t && t.length && (t.off("click", o),
            t.removeClass(i.params.navigation.disabledClass))
        }
        e({
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock"
            }
        }),
        i.navigation = {
            nextEl: null,
            $nextEl: null,
            prevEl: null,
            $prevEl: null
        },
        t("init", ()=>{
            c(),
            s()
        }
        ),
        t("toEdge fromEdge lock unlock", ()=>{
            s()
        }
        ),
        t("destroy", ()=>{
            u()
        }
        ),
        t("enable disable", ()=>{
            var {$nextEl: e, $prevEl: t} = i.navigation;
            e && e[i.enabled ? "removeClass" : "addClass"](i.params.navigation.lockClass),
            t && t[i.enabled ? "removeClass" : "addClass"](i.params.navigation.lockClass)
        }
        ),
        t("click", (e,t)=>{
            var {$nextEl: n, $prevEl: r} = i.navigation
              , t = t.target;
            if (i.params.navigation.hideOnClick && !A(t).is(r) && !A(t).is(n) && (!(i.pagination && i.params.pagination && i.params.pagination.clickable) || i.pagination.el !== t && !i.pagination.el.contains(t))) {
                let e;
                n ? e = n.hasClass(i.params.navigation.hiddenClass) : r && (e = r.hasClass(i.params.navigation.hiddenClass)),
                a(!0 === e ? "navigationShow" : "navigationHide"),
                n && n.toggleClass(i.params.navigation.hiddenClass),
                r && r.toggleClass(i.params.navigation.hiddenClass)
            }
        }
        ),
        Object.assign(i.navigation, {
            update: s,
            init: c,
            destroy: u
        })
    }
    , function({swiper: l, extendParams: e, on: t, emit: c}) {
        var n = "swiper-pagination";
        let u, d = (e({
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
                formatFractionCurrent: e=>e,
                formatFractionTotal: e=>e,
                bulletClass: n + "-bullet",
                bulletActiveClass: n + "-bullet-active",
                modifierClass: n + "-",
                currentClass: n + "-current",
                totalClass: n + "-total",
                hiddenClass: n + "-hidden",
                progressbarFillClass: n + "-progressbar-fill",
                progressbarOppositeClass: n + "-progressbar-opposite",
                clickableClass: n + "-clickable",
                lockClass: n + "-lock",
                horizontalClass: n + "-horizontal",
                verticalClass: n + "-vertical"
            }
        }),
        l.pagination = {
            el: null,
            $el: null,
            bullets: []
        },
        0);
        function p() {
            return !l.params.pagination.el || !l.pagination.el || !l.pagination.$el || 0 === l.pagination.$el.length
        }
        function f(e, t) {
            var n = l.params.pagination["bulletActiveClass"];
            e[t]().addClass(n + "-" + t)[t]().addClass(n + `-${t}-` + t)
        }
        function r() {
            const t = l.rtl
              , a = l.params.pagination;
            if (!p()) {
                const s = (l.virtual && l.params.virtual.enabled ? l.virtual : l).slides.length
                  , o = l.pagination.$el;
                let i;
                var n = l.params.loop ? Math.ceil((s - 2 * l.loopedSlides) / l.params.slidesPerGroup) : l.snapGrid.length;
                if (l.params.loop ? ((i = Math.ceil((l.activeIndex - l.loopedSlides) / l.params.slidesPerGroup)) > s - 1 - 2 * l.loopedSlides && (i -= s - 2 * l.loopedSlides),
                i > n - 1 && (i -= n),
                i < 0 && "bullets" !== l.params.paginationType && (i = n + i)) : i = void 0 !== l.snapIndex ? l.snapIndex : l.activeIndex || 0,
                "bullets" === a.type && l.pagination.bullets && 0 < l.pagination.bullets.length) {
                    const c = l.pagination.bullets;
                    let n, r, e;
                    if (a.dynamicBullets && (u = c.eq(0)[l.isHorizontal() ? "outerWidth" : "outerHeight"](!0),
                    o.css(l.isHorizontal() ? "width" : "height", u * (a.dynamicMainBullets + 4) + "px"),
                    1 < a.dynamicMainBullets && void 0 !== l.previousIndex && ((d += i - (l.previousIndex - l.loopedSlides || 0)) > a.dynamicMainBullets - 1 ? d = a.dynamicMainBullets - 1 : d < 0 && (d = 0)),
                    n = Math.max(i - d, 0),
                    r = n + (Math.min(c.length, a.dynamicMainBullets) - 1),
                    e = (r + n) / 2),
                    c.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(e=>"" + a.bulletActiveClass + e).join(" ")),
                    1 < o.length)
                        c.each(e=>{
                            var e = A(e)
                              , t = e.index();
                            t === i && e.addClass(a.bulletActiveClass),
                            a.dynamicBullets && (t >= n && t <= r && e.addClass(a.bulletActiveClass + "-main"),
                            t === n && f(e, "prev"),
                            t === r) && f(e, "next")
                        }
                        );
                    else {
                        const t = c.eq(i)
                          , u = t.index();
                        if (t.addClass(a.bulletActiveClass),
                        a.dynamicBullets) {
                            const t = c.eq(n)
                              , d = c.eq(r);
                            for (let e = n; e <= r; e += 1)
                                c.eq(e).addClass(a.bulletActiveClass + "-main");
                            if (l.params.loop)
                                if (u >= c.length) {
                                    for (let e = a.dynamicMainBullets; 0 <= e; --e)
                                        c.eq(c.length - e).addClass(a.bulletActiveClass + "-main");
                                    c.eq(c.length - a.dynamicMainBullets - 1).addClass(a.bulletActiveClass + "-prev")
                                } else
                                    f(t, "prev"),
                                    f(d, "next");
                            else
                                f(t, "prev"),
                                f(d, "next")
                        }
                    }
                    if (a.dynamicBullets) {
                        const s = Math.min(c.length, a.dynamicMainBullets + 4)
                          , d = (u * s - u) / 2 - e * u
                          , p = t ? "right" : "left";
                        c.css(l.isHorizontal() ? p : "top", d + "px")
                    }
                }
                if ("fraction" === a.type && (o.find(k(a.currentClass)).text(a.formatFractionCurrent(i + 1)),
                o.find(k(a.totalClass)).text(a.formatFractionTotal(n))),
                "progressbar" === a.type) {
                    var r = a.progressbarOpposite ? l.isHorizontal() ? "vertical" : "horizontal" : l.isHorizontal() ? "horizontal" : "vertical";
                    const c = (i + 1) / n;
                    let e = 1
                      , t = 1;
                    "horizontal" == r ? e = c : t = c,
                    o.find(k(a.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${e}) scaleY(${t})`).transition(l.params.speed)
                }
                "custom" === a.type && a.renderCustom ? (o.html(a.renderCustom(l, i + 1, n)),
                c("paginationRender", o[0])) : c("paginationUpdate", o[0]),
                l.params.watchOverflow && l.enabled && o[l.isLocked ? "addClass" : "removeClass"](a.lockClass)
            }
        }
        function i() {
            var r = l.params.pagination;
            if (!p()) {
                var e = (l.virtual && l.params.virtual.enabled ? l.virtual : l).slides.length
                  , i = l.pagination.$el;
                let n = "";
                if ("bullets" === r.type) {
                    let t = l.params.loop ? Math.ceil((e - 2 * l.loopedSlides) / l.params.slidesPerGroup) : l.snapGrid.length;
                    l.params.freeMode && l.params.freeMode.enabled && !l.params.loop && t > e && (t = e);
                    for (let e = 0; e < t; e += 1)
                        r.renderBullet ? n += r.renderBullet.call(l, e, r.bulletClass) : n += `<${r.bulletElement} class="${r.bulletClass}"></${r.bulletElement}>`;
                    i.html(n),
                    l.pagination.bullets = i.find(k(r.bulletClass))
                }
                "fraction" === r.type && (n = r.renderFraction ? r.renderFraction.call(l, r.currentClass, r.totalClass) : `<span class="${r.currentClass}"></span> / <span class="${r.totalClass}"></span>`,
                i.html(n)),
                "progressbar" === r.type && (n = r.renderProgressbar ? r.renderProgressbar.call(l, r.progressbarFillClass) : `<span class="${r.progressbarFillClass}"></span>`,
                i.html(n)),
                "custom" !== r.type && c("paginationRender", l.pagination.$el[0])
            }
        }
        function a() {
            l.params.pagination = M(l, l.originalParams.pagination, l.params.pagination, {
                el: "swiper-pagination"
            });
            var t = l.params.pagination;
            if (t.el) {
                let e = A(t.el);
                0 !== e.length && (l.params.uniqueNavElements && "string" == typeof t.el && 1 < e.length && 1 < (e = l.$el.find(t.el)).length && (e = e.filter(e=>A(e).parents(".swiper")[0] === l.el)),
                "bullets" === t.type && t.clickable && e.addClass(t.clickableClass),
                e.addClass(t.modifierClass + t.type),
                e.addClass(t.modifierClass + l.params.direction),
                "bullets" === t.type && t.dynamicBullets && (e.addClass("" + t.modifierClass + t.type + "-dynamic"),
                d = 0,
                t.dynamicMainBullets < 1) && (t.dynamicMainBullets = 1),
                "progressbar" === t.type && t.progressbarOpposite && e.addClass(t.progressbarOppositeClass),
                t.clickable && e.on("click", k(t.bulletClass), function(e) {
                    e.preventDefault();
                    let t = A(this).index() * l.params.slidesPerGroup;
                    l.params.loop && (t += l.loopedSlides),
                    l.slideTo(t)
                }),
                Object.assign(l.pagination, {
                    $el: e,
                    el: e[0]
                }),
                l.enabled || e.addClass(t.lockClass))
            }
        }
        function s() {
            var e, t = l.params.pagination;
            p() || ((e = l.pagination.$el).removeClass(t.hiddenClass),
            e.removeClass(t.modifierClass + t.type),
            e.removeClass(t.modifierClass + l.params.direction),
            l.pagination.bullets && l.pagination.bullets.removeClass && l.pagination.bullets.removeClass(t.bulletActiveClass),
            t.clickable && e.off("click", k(t.bulletClass)))
        }
        t("init", ()=>{
            a(),
            i(),
            r()
        }
        ),
        t("activeIndexChange", ()=>{
            !l.params.loop && void 0 !== l.snapIndex || r()
        }
        ),
        t("snapIndexChange", ()=>{
            l.params.loop || r()
        }
        ),
        t("slidesLengthChange", ()=>{
            l.params.loop && (i(),
            r())
        }
        ),
        t("snapGridLengthChange", ()=>{
            l.params.loop || (i(),
            r())
        }
        ),
        t("destroy", ()=>{
            s()
        }
        ),
        t("enable disable", ()=>{
            var e = l.pagination["$el"];
            e && e[l.enabled ? "removeClass" : "addClass"](l.params.pagination.lockClass)
        }
        ),
        t("lock unlock", ()=>{
            r()
        }
        ),
        t("click", (e,t)=>{
            var t = t.target
              , n = l.pagination["$el"];
            if (l.params.pagination.el && l.params.pagination.hideOnClick && 0 < n.length && !A(t).hasClass(l.params.pagination.bulletClass) && (!l.navigation || !(l.navigation.nextEl && t === l.navigation.nextEl || l.navigation.prevEl && t === l.navigation.prevEl))) {
                const e = n.hasClass(l.params.pagination.hiddenClass);
                c(!0 === e ? "paginationShow" : "paginationHide"),
                n.toggleClass(l.params.pagination.hiddenClass)
            }
        }
        ),
        Object.assign(l.pagination, {
            render: i,
            update: r,
            init: a,
            destroy: s
        })
    }
    , function({swiper: l, extendParams: e, on: t, emit: a}) {
        const o = T();
        let s, c, u, r, d = !1, p = null, f = null;
        function n() {
            if (l.params.scrollbar.el && l.scrollbar.el) {
                const {scrollbar: n, rtlTranslate: r, progress: i} = l
                  , {$dragEl: a, $el: s} = n
                  , o = l.params.scrollbar;
                let e = c
                  , t = (u - c) * i;
                r ? 0 < (t = -t) ? (e = c - t,
                t = 0) : -t + c > u && (e = u + t) : t < 0 ? (e = c + t,
                t = 0) : t + c > u && (e = u - t),
                l.isHorizontal() ? (a.transform(`translate3d(${t}px, 0, 0)`),
                a[0].style.width = e + "px") : (a.transform(`translate3d(0px, ${t}px, 0)`),
                a[0].style.height = e + "px"),
                o.hide && (clearTimeout(p),
                s[0].style.opacity = 1,
                p = setTimeout(()=>{
                    s[0].style.opacity = 0,
                    s.transition(400)
                }
                , 1e3))
            }
        }
        function i() {
            var e, t, n;
            l.params.scrollbar.el && l.scrollbar.el && (e = l["scrollbar"],
            {$dragEl: t, $el: n} = e,
            t[0].style.width = "",
            t[0].style.height = "",
            u = l.isHorizontal() ? n[0].offsetWidth : n[0].offsetHeight,
            r = l.size / (l.virtualSize + l.params.slidesOffsetBefore - (l.params.centeredSlides ? l.snapGrid[0] : 0)),
            c = "auto" === l.params.scrollbar.dragSize ? u * r : parseInt(l.params.scrollbar.dragSize, 10),
            l.isHorizontal() ? t[0].style.width = c + "px" : t[0].style.height = c + "px",
            n[0].style.display = 1 <= r ? "none" : "",
            l.params.scrollbar.hide && (n[0].style.opacity = 0),
            l.params.watchOverflow) && l.enabled && e.$el[l.isLocked ? "addClass" : "removeClass"](l.params.scrollbar.lockClass)
        }
        function h(e) {
            return l.isHorizontal() ? ("touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0] : e).clientX : ("touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0] : e).clientY
        }
        function m(e) {
            var {scrollbar: t, rtlTranslate: n} = l
              , t = t["$el"];
            let r;
            r = (h(e) - t.offset()[l.isHorizontal() ? "left" : "top"] - (null !== s ? s : c / 2)) / (u - c),
            r = Math.max(Math.min(r, 1), 0),
            n && (r = 1 - r);
            e = l.minTranslate() + (l.maxTranslate() - l.minTranslate()) * r;
            l.updateProgress(e),
            l.setTranslate(e),
            l.updateActiveIndex(),
            l.updateSlidesClasses()
        }
        function g(e) {
            var t = l.params.scrollbar
              , {scrollbar: n, $wrapperEl: r} = l
              , {$el: n, $dragEl: i} = n;
            d = !0,
            s = e.target === i[0] || e.target === i ? h(e) - e.target.getBoundingClientRect()[l.isHorizontal() ? "left" : "top"] : null,
            e.preventDefault(),
            e.stopPropagation(),
            r.transition(100),
            i.transition(100),
            m(e),
            clearTimeout(f),
            n.transition(0),
            t.hide && n.css("opacity", 1),
            l.params.cssMode && l.$wrapperEl.css("scroll-snap-type", "none"),
            a("scrollbarDragStart", e)
        }
        function v(e) {
            var {scrollbar: t, $wrapperEl: n} = l
              , {$el: t, $dragEl: r} = t;
            d && (e.preventDefault ? e.preventDefault() : e.returnValue = !1,
            m(e),
            n.transition(0),
            t.transition(0),
            r.transition(0),
            a("scrollbarDragMove", e))
        }
        function y(e) {
            const t = l.params.scrollbar
              , {scrollbar: n, $wrapperEl: r} = l
              , i = n["$el"];
            d && (d = !1,
            l.params.cssMode && (l.$wrapperEl.css("scroll-snap-type", ""),
            r.transition("")),
            t.hide && (clearTimeout(f),
            f = _(()=>{
                i.css("opacity", 0),
                i.transition(400)
            }
            , 1e3)),
            a("scrollbarDragEnd", e),
            t.snapOnRelease) && l.slideToClosest()
        }
        function b(e) {
            var {scrollbar: t, touchEventsTouch: n, touchEventsDesktop: r, params: i, support: a} = l
              , t = t.$el[0]
              , s = !(!a.passiveListener || !i.passiveListeners) && {
                passive: !1,
                capture: !1
            }
              , i = !(!a.passiveListener || !i.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            t && (e = "on" === e ? "addEventListener" : "removeEventListener",
            a.touch ? (t[e](n.start, g, s),
            t[e](n.move, v, s),
            t[e](n.end, y, i)) : (t[e](r.start, g, s),
            o[e](r.move, v, s),
            o[e](r.end, y, i)))
        }
        function w() {
            var {scrollbar: n, $el: r} = l
              , i = (l.params.scrollbar = M(l, l.originalParams.scrollbar, l.params.scrollbar, {
                el: "swiper-scrollbar"
            }),
            l.params.scrollbar);
            if (i.el) {
                let e = A(i.el)
                  , t = (e = l.params.uniqueNavElements && "string" == typeof i.el && 1 < e.length && 1 === r.find(i.el).length ? r.find(i.el) : e).find("." + l.params.scrollbar.dragClass);
                0 === t.length && (t = A(`<div class="${l.params.scrollbar.dragClass}"></div>`),
                e.append(t)),
                Object.assign(n, {
                    $el: e,
                    el: e[0],
                    $dragEl: t,
                    dragEl: t[0]
                }),
                i.draggable && l.params.scrollbar.el && b("on"),
                e && e[l.enabled ? "removeClass" : "addClass"](l.params.scrollbar.lockClass)
            }
        }
        function x() {
            l.params.scrollbar.el && b("off")
        }
        e({
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag"
            }
        }),
        l.scrollbar = {
            el: null,
            dragEl: null,
            $el: null,
            $dragEl: null
        },
        t("init", ()=>{
            w(),
            i(),
            n()
        }
        ),
        t("update resize observerUpdate lock unlock", ()=>{
            i()
        }
        ),
        t("setTranslate", ()=>{
            n()
        }
        ),
        t("setTransition", (e,t)=>{
            l.params.scrollbar.el && l.scrollbar.el && l.scrollbar.$dragEl.transition(t)
        }
        ),
        t("enable disable", ()=>{
            var e = l.scrollbar["$el"];
            e && e[l.enabled ? "removeClass" : "addClass"](l.params.scrollbar.lockClass)
        }
        ),
        t("destroy", ()=>{
            x()
        }
        ),
        Object.assign(l.scrollbar, {
            updateSize: i,
            setTranslate: n,
            init: w,
            destroy: x
        })
    }
    , function({swiper: l, extendParams: e, on: t}) {
        e({
            parallax: {
                enabled: !1
            }
        });
        const a = (e,t)=>{
            var n = l["rtl"]
              , e = A(e)
              , n = n ? -1 : 1
              , r = e.attr("data-swiper-parallax") || "0";
            let i = e.attr("data-swiper-parallax-x")
              , a = e.attr("data-swiper-parallax-y");
            var s = e.attr("data-swiper-parallax-scale")
              , o = e.attr("data-swiper-parallax-opacity");
            if (i || a ? (i = i || "0",
            a = a || "0") : l.isHorizontal() ? (i = r,
            a = "0") : (a = r,
            i = "0"),
            i = 0 <= i.indexOf("%") ? parseInt(i, 10) * t * n + "%" : i * t * n + "px",
            a = 0 <= a.indexOf("%") ? parseInt(a, 10) * t + "%" : a * t + "px",
            null != o) {
                const l = o - (o - 1) * (1 - Math.abs(t));
                e[0].style.opacity = l
            }
            if (null == s)
                e.transform(`translate3d(${i}, ${a}, 0px)`);
            else {
                const l = s - (s - 1) * (1 - Math.abs(t));
                e.transform(`translate3d(${i}, ${a}, 0px) scale(${l})`)
            }
        }
          , n = ()=>{
            const {$el: e, slides: t, progress: r, snapGrid: i} = l;
            e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(e=>{
                a(e, r)
            }
            ),
            t.each((e,t)=>{
                let n = e.progress;
                1 < l.params.slidesPerGroup && "auto" !== l.params.slidesPerView && (n += Math.ceil(t / 2) - r * (i.length - 1)),
                n = Math.min(Math.max(n, -1), 1),
                A(e).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(e=>{
                    a(e, n)
                }
                )
            }
            )
        }
        ;
        t("beforeInit", ()=>{
            l.params.parallax.enabled && (l.params.watchSlidesProgress = !0,
            l.originalParams.watchSlidesProgress = !0)
        }
        ),
        t("init", ()=>{
            l.params.parallax.enabled && n()
        }
        ),
        t("setTranslate", ()=>{
            l.params.parallax.enabled && n()
        }
        ),
        t("setTransition", (e,t)=>{
            var n;
            l.params.parallax.enabled && ([n=l.params.speed] = [t],
            l.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(e=>{
                e = A(e);
                let t = parseInt(e.attr("data-swiper-parallax-duration"), 10) || n;
                0 === n && (t = 0),
                e.transition(t)
            }
            ))
        }
        )
    }
    , function({swiper: x, extendParams: e, on: t, emit: r}) {
        const T = O();
        e({
            zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        }),
        x.zoom = {
            enabled: !1
        };
        let n, a, s, _ = 1, o = !1;
        const E = {
            $slideEl: void 0,
            slideWidth: void 0,
            slideHeight: void 0,
            $imageEl: void 0,
            $imageWrapEl: void 0,
            maxRatio: 3
        }
          , C = {
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
        }
          , l = {
            x: void 0,
            y: void 0,
            prevPositionX: void 0,
            prevPositionY: void 0,
            prevTime: void 0
        };
        let i = 1;
        function c(e) {
            var t, n, r;
            return e.targetTouches.length < 2 ? 1 : (t = e.targetTouches[0].pageX,
            n = e.targetTouches[0].pageY,
            r = e.targetTouches[1].pageX,
            e = e.targetTouches[1].pageY,
            Math.sqrt((r - t) ** 2 + (e - n) ** 2))
        }
        function u(e) {
            var t = x.support
              , n = x.params.zoom;
            if (a = !1,
            s = !1,
            !t.gestures) {
                if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2)
                    return;
                a = !0,
                E.scaleStart = c(e)
            }
            E.$slideEl && E.$slideEl.length || (E.$slideEl = A(e.target).closest("." + x.params.slideClass),
            0 === E.$slideEl.length && (E.$slideEl = x.slides.eq(x.activeIndex)),
            E.$imageEl = E.$slideEl.find("." + n.containerClass).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),
            E.$imageWrapEl = E.$imageEl.parent("." + n.containerClass),
            E.maxRatio = E.$imageWrapEl.attr("data-swiper-zoom") || n.maxRatio,
            0 !== E.$imageWrapEl.length) ? (E.$imageEl && E.$imageEl.transition(0),
            o = !0) : E.$imageEl = void 0
        }
        function d(e) {
            var t = x.support
              , n = x.params.zoom
              , r = x.zoom;
            if (!t.gestures) {
                if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2)
                    return;
                s = !0,
                E.scaleMove = c(e)
            }
            E.$imageEl && 0 !== E.$imageEl.length ? (t.gestures ? r.scale = e.scale * _ : r.scale = E.scaleMove / E.scaleStart * _,
            r.scale > E.maxRatio && (r.scale = E.maxRatio - 1 + (r.scale - E.maxRatio + 1) ** .5),
            r.scale < n.minRatio && (r.scale = n.minRatio + 1 - (n.minRatio - r.scale + 1) ** .5),
            E.$imageEl.transform(`translate3d(0,0,0) scale(${r.scale})`)) : "gesturechange" === e.type && u(e)
        }
        function p(e) {
            var t = x.device
              , n = x.support
              , r = x.params.zoom
              , i = x.zoom;
            if (!n.gestures) {
                if (!a || !s)
                    return;
                if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !t.android)
                    return;
                a = !1,
                s = !1
            }
            E.$imageEl && 0 !== E.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, E.maxRatio), r.minRatio),
            E.$imageEl.transition(x.params.speed).transform(`translate3d(0,0,0) scale(${i.scale})`),
            _ = i.scale,
            o = !1,
            1 === i.scale) && (E.$slideEl = void 0)
        }
        function f(e) {
            var t = x.zoom;
            if (E.$imageEl && 0 !== E.$imageEl.length && (x.allowClick = !1,
            C.isTouched) && E.$slideEl) {
                C.isMoved || (C.width = E.$imageEl[0].offsetWidth,
                C.height = E.$imageEl[0].offsetHeight,
                C.startX = $(E.$imageWrapEl[0], "x") || 0,
                C.startY = $(E.$imageWrapEl[0], "y") || 0,
                E.slideWidth = E.$slideEl[0].offsetWidth,
                E.slideHeight = E.$slideEl[0].offsetHeight,
                E.$imageWrapEl.transition(0));
                var n = C.width * t.scale
                  , t = C.height * t.scale;
                if (!(n < E.slideWidth && t < E.slideHeight)) {
                    if (C.minX = Math.min(E.slideWidth / 2 - n / 2, 0),
                    C.maxX = -C.minX,
                    C.minY = Math.min(E.slideHeight / 2 - t / 2, 0),
                    C.maxY = -C.minY,
                    C.touchesCurrent.x = ("touchmove" === e.type ? e.targetTouches[0] : e).pageX,
                    C.touchesCurrent.y = ("touchmove" === e.type ? e.targetTouches[0] : e).pageY,
                    !C.isMoved && !o) {
                        if (x.isHorizontal() && (Math.floor(C.minX) === Math.floor(C.startX) && C.touchesCurrent.x < C.touchesStart.x || Math.floor(C.maxX) === Math.floor(C.startX) && C.touchesCurrent.x > C.touchesStart.x))
                            return void (C.isTouched = !1);
                        if (!x.isHorizontal() && (Math.floor(C.minY) === Math.floor(C.startY) && C.touchesCurrent.y < C.touchesStart.y || Math.floor(C.maxY) === Math.floor(C.startY) && C.touchesCurrent.y > C.touchesStart.y))
                            return void (C.isTouched = !1)
                    }
                    e.cancelable && e.preventDefault(),
                    e.stopPropagation(),
                    C.isMoved = !0,
                    C.currentX = C.touchesCurrent.x - C.touchesStart.x + C.startX,
                    C.currentY = C.touchesCurrent.y - C.touchesStart.y + C.startY,
                    C.currentX < C.minX && (C.currentX = C.minX + 1 - (C.minX - C.currentX + 1) ** .8),
                    C.currentX > C.maxX && (C.currentX = C.maxX - 1 + (C.currentX - C.maxX + 1) ** .8),
                    C.currentY < C.minY && (C.currentY = C.minY + 1 - (C.minY - C.currentY + 1) ** .8),
                    C.currentY > C.maxY && (C.currentY = C.maxY - 1 + (C.currentY - C.maxY + 1) ** .8),
                    l.prevPositionX || (l.prevPositionX = C.touchesCurrent.x),
                    l.prevPositionY || (l.prevPositionY = C.touchesCurrent.y),
                    l.prevTime || (l.prevTime = Date.now()),
                    l.x = (C.touchesCurrent.x - l.prevPositionX) / (Date.now() - l.prevTime) / 2,
                    l.y = (C.touchesCurrent.y - l.prevPositionY) / (Date.now() - l.prevTime) / 2,
                    Math.abs(C.touchesCurrent.x - l.prevPositionX) < 2 && (l.x = 0),
                    Math.abs(C.touchesCurrent.y - l.prevPositionY) < 2 && (l.y = 0),
                    l.prevPositionX = C.touchesCurrent.x,
                    l.prevPositionY = C.touchesCurrent.y,
                    l.prevTime = Date.now(),
                    E.$imageWrapEl.transform(`translate3d(${C.currentX}px, ${C.currentY}px,0)`)
                }
            }
        }
        function h() {
            var e = x.zoom;
            E.$slideEl && x.previousIndex !== x.activeIndex && (E.$imageEl && E.$imageEl.transform("translate3d(0,0,0) scale(1)"),
            E.$imageWrapEl && E.$imageWrapEl.transform("translate3d(0,0,0)"),
            e.scale = 1,
            _ = 1,
            E.$slideEl = void 0,
            E.$imageEl = void 0,
            E.$imageWrapEl = void 0)
        }
        function m(y) {
            var b = x.zoom
              , w = x.params.zoom;
            if (E.$slideEl || (y && y.target && (E.$slideEl = A(y.target).closest("." + x.params.slideClass)),
            E.$slideEl || (x.params.virtual && x.params.virtual.enabled && x.virtual ? E.$slideEl = x.$wrapperEl.children("." + x.params.slideActiveClass) : E.$slideEl = x.slides.eq(x.activeIndex)),
            E.$imageEl = E.$slideEl.find("." + w.containerClass).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),
            E.$imageWrapEl = E.$imageEl.parent("." + w.containerClass)),
            E.$imageEl && 0 !== E.$imageEl.length && E.$imageWrapEl && 0 !== E.$imageWrapEl.length) {
                let e, t, n, r, i, a, s, o, l, c, u, d, p, f, h, m, g, v;
                x.params.cssMode && (x.wrapperEl.style.overflow = "hidden",
                x.wrapperEl.style.touchAction = "none"),
                E.$slideEl.addClass("" + w.zoomedSlideClass),
                t = void 0 === C.touchesStart.x && y ? (e = ("touchend" === y.type ? y.changedTouches[0] : y).pageX,
                ("touchend" === y.type ? y.changedTouches[0] : y).pageY) : (e = C.touchesStart.x,
                C.touchesStart.y),
                b.scale = E.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio,
                _ = E.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio,
                y ? (g = E.$slideEl[0].offsetWidth,
                v = E.$slideEl[0].offsetHeight,
                n = E.$slideEl.offset().left + T.scrollX,
                r = E.$slideEl.offset().top + T.scrollY,
                i = n + g / 2 - e,
                a = r + v / 2 - t,
                l = E.$imageEl[0].offsetWidth,
                c = E.$imageEl[0].offsetHeight,
                u = l * b.scale,
                d = c * b.scale,
                h = -(p = Math.min(g / 2 - u / 2, 0)),
                m = -(f = Math.min(v / 2 - d / 2, 0)),
                s = i * b.scale,
                o = a * b.scale,
                (s = s < p ? p : s) > h && (s = h),
                (o = o < f ? f : o) > m && (o = m)) : (s = 0,
                o = 0),
                E.$imageWrapEl.transition(300).transform(`translate3d(${s}px, ${o}px,0)`),
                E.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${b.scale})`)
            }
        }
        function g() {
            var e = x.zoom
              , t = x.params.zoom;
            E.$slideEl || (x.params.virtual && x.params.virtual.enabled && x.virtual ? E.$slideEl = x.$wrapperEl.children("." + x.params.slideActiveClass) : E.$slideEl = x.slides.eq(x.activeIndex),
            E.$imageEl = E.$slideEl.find("." + t.containerClass).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),
            E.$imageWrapEl = E.$imageEl.parent("." + t.containerClass)),
            E.$imageEl && 0 !== E.$imageEl.length && E.$imageWrapEl && 0 !== E.$imageWrapEl.length && (x.params.cssMode && (x.wrapperEl.style.overflow = "",
            x.wrapperEl.style.touchAction = ""),
            e.scale = 1,
            _ = 1,
            E.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
            E.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
            E.$slideEl.removeClass("" + t.zoomedSlideClass),
            E.$slideEl = void 0)
        }
        function v(e) {
            var t = x.zoom;
            t.scale && 1 !== t.scale ? g() : m(e)
        }
        function y() {
            var e = x.support;
            return {
                passiveListener: !("touchstart" !== x.touchEvents.start || !e.passiveListener || !x.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                },
                activeListenerWithCapture: !e.passiveListener || {
                    passive: !1,
                    capture: !0
                }
            }
        }
        function b() {
            return "." + x.params.slideClass
        }
        function w(e) {
            var t = y()["passiveListener"]
              , n = b();
            x.$wrapperEl[e]("gesturestart", n, u, t),
            x.$wrapperEl[e]("gesturechange", n, d, t),
            x.$wrapperEl[e]("gestureend", n, p, t)
        }
        function S() {
            n || (n = !0,
            w("on"))
        }
        function M() {
            n && (n = !1,
            w("off"))
        }
        function k() {
            var e, t, n, r = x.zoom;
            r.enabled || (r.enabled = !0,
            r = x.support,
            {passiveListener: e, activeListenerWithCapture: t} = y(),
            n = b(),
            r.gestures ? (x.$wrapperEl.on(x.touchEvents.start, S, e),
            x.$wrapperEl.on(x.touchEvents.end, M, e)) : "touchstart" === x.touchEvents.start && (x.$wrapperEl.on(x.touchEvents.start, n, u, e),
            x.$wrapperEl.on(x.touchEvents.move, n, d, t),
            x.$wrapperEl.on(x.touchEvents.end, n, p, e),
            x.touchEvents.cancel) && x.$wrapperEl.on(x.touchEvents.cancel, n, p, e),
            x.$wrapperEl.on(x.touchEvents.move, "." + x.params.zoom.containerClass, f, t))
        }
        function P() {
            var e, t, n, r = x.zoom;
            r.enabled && (e = x.support,
            {passiveListener: r, activeListenerWithCapture: t} = (r.enabled = !1,
            y()),
            n = b(),
            e.gestures ? (x.$wrapperEl.off(x.touchEvents.start, S, r),
            x.$wrapperEl.off(x.touchEvents.end, M, r)) : "touchstart" === x.touchEvents.start && (x.$wrapperEl.off(x.touchEvents.start, n, u, r),
            x.$wrapperEl.off(x.touchEvents.move, n, d, t),
            x.$wrapperEl.off(x.touchEvents.end, n, p, r),
            x.touchEvents.cancel) && x.$wrapperEl.off(x.touchEvents.cancel, n, p, r),
            x.$wrapperEl.off(x.touchEvents.move, "." + x.params.zoom.containerClass, f, t))
        }
        Object.defineProperty(x.zoom, "scale", {
            get: ()=>i,
            set(e) {
                var t, n;
                i !== e && (t = E.$imageEl ? E.$imageEl[0] : void 0,
                n = E.$slideEl ? E.$slideEl[0] : void 0,
                r("zoomChange", e, t, n)),
                i = e
            }
        }),
        t("init", ()=>{
            x.params.zoom.enabled && k()
        }
        ),
        t("destroy", ()=>{
            P()
        }
        ),
        t("touchStart", (e,t)=>{
            var n;
            x.zoom.enabled && (t = t,
            n = x.device,
            E.$imageEl) && 0 !== E.$imageEl.length && !C.isTouched && (n.android && t.cancelable && t.preventDefault(),
            C.isTouched = !0,
            C.touchesStart.x = ("touchstart" === t.type ? t.targetTouches[0] : t).pageX,
            C.touchesStart.y = ("touchstart" === t.type ? t.targetTouches[0] : t).pageY)
        }
        ),
        t("touchEnd", (e,t)=>{
            if (x.zoom.enabled) {
                var n = x.zoom;
                if (E.$imageEl && 0 !== E.$imageEl.length) {
                    if (!C.isTouched || !C.isMoved)
                        return void (C.isTouched = !1,
                        C.isMoved = !1);
                    C.isTouched = !1,
                    C.isMoved = !1;
                    let e = 300
                      , t = 300;
                    var r = l.x * e
                      , r = C.currentX + r
                      , i = l.y * t
                      , i = C.currentY + i
                      , a = (0 !== l.x && (e = Math.abs((r - C.currentX) / l.x)),
                    0 !== l.y && (t = Math.abs((i - C.currentY) / l.y)),
                    Math.max(e, t))
                      , r = (C.currentX = r,
                    C.currentY = i,
                    C.width * n.scale)
                      , i = C.height * n.scale;
                    C.minX = Math.min(E.slideWidth / 2 - r / 2, 0),
                    C.maxX = -C.minX,
                    C.minY = Math.min(E.slideHeight / 2 - i / 2, 0),
                    C.maxY = -C.minY,
                    C.currentX = Math.max(Math.min(C.currentX, C.maxX), C.minX),
                    C.currentY = Math.max(Math.min(C.currentY, C.maxY), C.minY),
                    E.$imageWrapEl.transition(a).transform(`translate3d(${C.currentX}px, ${C.currentY}px,0)`)
                }
            }
        }
        ),
        t("doubleTap", (e,t)=>{
            !x.animating && x.params.zoom.enabled && x.zoom.enabled && x.params.zoom.toggle && v(t)
        }
        ),
        t("transitionEnd", ()=>{
            x.zoom.enabled && x.params.zoom.enabled && h()
        }
        ),
        t("slideChange", ()=>{
            x.zoom.enabled && x.params.zoom.enabled && x.params.cssMode && h()
        }
        ),
        Object.assign(x.zoom, {
            enable: k,
            disable: P,
            in: m,
            out: g,
            toggle: v
        })
    }
    , function({swiper: u, extendParams: e, on: t, emit: d}) {
        e({
            lazy: {
                checkInView: !1,
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                scrollingElement: "",
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader"
            }
        });
        let l = !(u.lazy = {})
          , c = !1;
        function p(e, o=!0) {
            const l = u.params.lazy;
            if (void 0 !== e && 0 !== u.slides.length) {
                const c = u.virtual && u.params.virtual.enabled ? u.$wrapperEl.children(`.${u.params.slideClass}[data-swiper-slide-index="${e}"]`) : u.slides.eq(e)
                  , t = c.find(`.${l.elementClass}:not(.${l.loadedClass}):not(.${l.loadingClass})`);
                !c.hasClass(l.elementClass) || c.hasClass(l.loadedClass) || c.hasClass(l.loadingClass) || t.push(c[0]),
                0 !== t.length && t.each(e=>{
                    const t = A(e)
                      , n = (t.addClass(l.loadingClass),
                    t.attr("data-background"))
                      , r = t.attr("data-src")
                      , i = t.attr("data-srcset")
                      , a = t.attr("data-sizes")
                      , s = t.parent("picture");
                    u.loadImage(t[0], r || n, i, a, !1, ()=>{
                        var e;
                        null == u || !u || u && !u.params || u.destroyed || (n ? (t.css("background-image", `url("${n}")`),
                        t.removeAttr("data-background")) : (i && (t.attr("srcset", i),
                        t.removeAttr("data-srcset")),
                        a && (t.attr("sizes", a),
                        t.removeAttr("data-sizes")),
                        s.length && s.children("source").each(e=>{
                            e = A(e);
                            e.attr("data-srcset") && (e.attr("srcset", e.attr("data-srcset")),
                            e.removeAttr("data-srcset"))
                        }
                        ),
                        r && (t.attr("src", r),
                        t.removeAttr("data-src"))),
                        t.addClass(l.loadedClass).removeClass(l.loadingClass),
                        c.find("." + l.preloaderClass).remove(),
                        u.params.loop && o && (e = c.attr("data-swiper-slide-index"),
                        c.hasClass(u.params.slideDuplicateClass) ? p(u.$wrapperEl.children(`[data-swiper-slide-index="${e}"]:not(.${u.params.slideDuplicateClass})`).index(), !1) : p(u.$wrapperEl.children(`.${u.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`).index(), !1)),
                        d("lazyImageReady", c[0], t[0]),
                        u.params.autoHeight && u.updateAutoHeight())
                    }
                    ),
                    d("lazyImageLoad", c[0], t[0])
                }
                )
            }
        }
        function f() {
            const {$wrapperEl: t, params: n, slides: r, activeIndex: i} = u
              , a = u.virtual && n.virtual.enabled
              , e = n.lazy;
            let s = n.slidesPerView;
            function o(e) {
                if (a) {
                    if (t.children(`.${n.slideClass}[data-swiper-slide-index="${e}"]`).length)
                        return 1
                } else if (r[e])
                    return 1
            }
            function l(e) {
                return a ? A(e).attr("data-swiper-slide-index") : A(e).index()
            }
            if ("auto" === s && (s = 0),
            c = c || !0,
            u.params.watchSlidesProgress)
                t.children("." + n.slideVisibleClass).each(e=>{
                    p(a ? A(e).attr("data-swiper-slide-index") : A(e).index())
                }
                );
            else if (1 < s)
                for (let e = i; e < i + s; e += 1)
                    o(e) && p(e);
            else
                p(i);
            if (e.loadPrevNext)
                if (1 < s || e.loadPrevNextAmount && 1 < e.loadPrevNextAmount) {
                    const u = e.loadPrevNextAmount
                      , t = s
                      , n = Math.min(i + t + Math.max(u, t), r.length)
                      , a = Math.max(i - Math.max(t, u), 0);
                    for (let e = i + s; e < n; e += 1)
                        o(e) && p(e);
                    for (let e = a; e < i; e += 1)
                        o(e) && p(e)
                } else {
                    const u = t.children("." + n.slideNextClass)
                      , r = (0 < u.length && p(l(u)),
                    t.children("." + n.slidePrevClass));
                    0 < r.length && p(l(r))
                }
        }
        function h() {
            const n = O();
            if (u && !u.destroyed) {
                var e = u.params.lazy.scrollingElement ? A(u.params.lazy.scrollingElement) : A(n)
                  , r = e[0] === n
                  , i = r ? n.innerWidth : e[0].offsetWidth
                  , a = r ? n.innerHeight : e[0].offsetHeight
                  , r = u.$el.offset()
                  , s = u["rtlTranslate"];
                let t = !1;
                s && (r.left -= u.$el[0].scrollLeft);
                var o = [[r.left, r.top], [r.left + u.width, r.top], [r.left, r.top + u.height], [r.left + u.width, r.top + u.height]];
                for (let e = 0; e < o.length; e += 1) {
                    const n = o[e];
                    0 <= n[0] && n[0] <= i && 0 <= n[1] && n[1] <= a && (0 === n[0] && 0 === n[1] || (t = !0))
                }
                s = !("touchstart" !== u.touchEvents.start || !u.support.passiveListener || !u.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                t ? (f(),
                e.off("scroll", h, s)) : l || (l = !0,
                e.on("scroll", h, s))
            }
        }
        t("beforeInit", ()=>{
            u.params.lazy.enabled && u.params.preloadImages && (u.params.preloadImages = !1)
        }
        ),
        t("init", ()=>{
            u.params.lazy.enabled && (u.params.lazy.checkInView ? h : f)()
        }
        ),
        t("scroll", ()=>{
            u.params.freeMode && u.params.freeMode.enabled && !u.params.freeMode.sticky && f()
        }
        ),
        t("scrollbarDragMove resize _freeModeNoMomentumRelease", ()=>{
            u.params.lazy.enabled && (u.params.lazy.checkInView ? h : f)()
        }
        ),
        t("transitionStart", ()=>{
            u.params.lazy.enabled && (u.params.lazy.loadOnTransitionStart || !u.params.lazy.loadOnTransitionStart && !c) && (u.params.lazy.checkInView ? h : f)()
        }
        ),
        t("transitionEnd", ()=>{
            u.params.lazy.enabled && !u.params.lazy.loadOnTransitionStart && (u.params.lazy.checkInView ? h : f)()
        }
        ),
        t("slideChange", ()=>{
            var {lazy: e, cssMode: t, watchSlidesProgress: n, touchReleaseOnEdges: r, resistanceRatio: i} = u.params;
            e.enabled && (t || n && (r || 0 === i)) && f()
        }
        ),
        Object.assign(u.lazy, {
            load: f,
            loadInSlide: p
        })
    }
    , function({swiper: o, extendParams: e, on: t}) {
        function l(e, t) {
            const n = function() {
                let n, r, i;
                return (e,t)=>{
                    for (r = -1,
                    n = e.length; 1 < n - r; )
                        e[i = n + r >> 1] <= t ? r = i : n = i;
                    return n
                }
            }();
            let r, i;
            return this.x = e,
            this.y = t,
            this.lastIndex = e.length - 1,
            this.interpolate = function(e) {
                return e ? (i = n(this.x, e),
                r = i - 1,
                (e - this.x[r]) * (this.y[i] - this.y[r]) / (this.x[i] - this.x[r]) + this.y[r]) : 0
            }
            ,
            this
        }
        function n() {
            o.controller.control && o.controller.spline && (o.controller.spline = void 0,
            delete o.controller.spline)
        }
        e({
            controller: {
                control: void 0,
                inverse: !1,
                by: "slide"
            }
        }),
        o.controller = {
            control: void 0
        },
        t("beforeInit", ()=>{
            o.controller.control = o.params.controller.control
        }
        ),
        t("update", ()=>{
            n()
        }
        ),
        t("resize", ()=>{
            n()
        }
        ),
        t("observerUpdate", ()=>{
            n()
        }
        ),
        t("setTranslate", (e,t,n)=>{
            o.controller.control && o.controller.setTranslate(t, n)
        }
        ),
        t("setTransition", (e,t,n)=>{
            o.controller.control && o.controller.setTransition(t, n)
        }
        ),
        Object.assign(o.controller, {
            setTranslate: function(e, t) {
                var n = o.controller.control;
                let r, i;
                var a = o.constructor;
                function s(e) {
                    var t, n = o.rtlTranslate ? -o.translate : o.translate;
                    "slide" === o.params.controller.by && (t = e,
                    o.controller.spline || (o.controller.spline = o.params.loop ? new l(o.slidesGrid,t.slidesGrid) : new l(o.snapGrid,t.snapGrid)),
                    i = -o.controller.spline.interpolate(-n)),
                    i && "container" !== o.params.controller.by || (r = (e.maxTranslate() - e.minTranslate()) / (o.maxTranslate() - o.minTranslate()),
                    i = (n - o.minTranslate()) * r + e.minTranslate()),
                    o.params.controller.inverse && (i = e.maxTranslate() - i),
                    e.updateProgress(i),
                    e.setTranslate(i, o),
                    e.updateActiveIndex(),
                    e.updateSlidesClasses()
                }
                if (Array.isArray(n))
                    for (let e = 0; e < n.length; e += 1)
                        n[e] !== t && n[e]instanceof a && s(n[e]);
                else
                    n instanceof a && t !== n && s(n)
            },
            setTransition: function(t, e) {
                const n = o.constructor
                  , r = o.controller.control;
                let i;
                function a(e) {
                    e.setTransition(t, o),
                    0 !== t && (e.transitionStart(),
                    e.params.autoHeight && _(()=>{
                        e.updateAutoHeight()
                    }
                    ),
                    e.$wrapperEl.transitionEnd(()=>{
                        r && (e.params.loop && "slide" === o.params.controller.by && e.loopFix(),
                        e.transitionEnd())
                    }
                    ))
                }
                if (Array.isArray(r))
                    for (i = 0; i < r.length; i += 1)
                        r[i] !== e && r[i]instanceof n && a(r[i]);
                else
                    r instanceof n && e !== r && a(r)
            }
        })
    }
    , function({swiper: o, extendParams: e, on: t}) {
        e({
            a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}",
                slideLabelMessage: "{{index}} / {{slidesLength}}",
                containerMessage: null,
                containerRoleDescriptionMessage: null,
                itemRoleDescriptionMessage: null,
                slideRole: "group"
            }
        });
        let l = null;
        function n(e) {
            var t = l;
            0 !== t.length && (t.html(""),
            t.html(e))
        }
        function r(e) {
            e.attr("tabIndex", "0")
        }
        function i(e) {
            e.attr("tabIndex", "-1")
        }
        function c(e, t) {
            e.attr("role", t)
        }
        function u(e, t) {
            e.attr("aria-roledescription", t)
        }
        function d(e, t) {
            e.attr("aria-label", t)
        }
        function a(e) {
            e.attr("aria-disabled", !0)
        }
        function s(e) {
            e.attr("aria-disabled", !1)
        }
        function p(e) {
            var t;
            13 !== e.keyCode && 32 !== e.keyCode || (t = o.params.a11y,
            e = A(e.target),
            o.navigation && o.navigation.$nextEl && e.is(o.navigation.$nextEl) && (o.isEnd && !o.params.loop || o.slideNext(),
            o.isEnd ? n(t.lastSlideMessage) : n(t.nextSlideMessage)),
            o.navigation && o.navigation.$prevEl && e.is(o.navigation.$prevEl) && (o.isBeginning && !o.params.loop || o.slidePrev(),
            o.isBeginning ? n(t.firstSlideMessage) : n(t.prevSlideMessage)),
            o.pagination && e.is(k(o.params.pagination.bulletClass)) && e[0].click())
        }
        function f() {
            var e, t;
            o.params.loop || o.params.rewind || !o.navigation || ({$nextEl: e, $prevEl: t} = o.navigation,
            t && 0 < t.length && (o.isBeginning ? (a(t),
            i) : (s(t),
            r))(t),
            e && 0 < e.length && (o.isEnd ? (a(e),
            i) : (s(e),
            r))(e))
        }
        function h() {
            return o.pagination && o.pagination.bullets && o.pagination.bullets.length
        }
        function m() {
            return h() && o.params.pagination.clickable
        }
        const g = (e,t,n)=>{
            r(e),
            "BUTTON" !== e[0].tagName && (c(e, "button"),
            e.on("keydown", p)),
            d(e, n),
            e.attr("aria-controls", t)
        }
        ;
        t("beforeInit", ()=>{
            l = A(`<span class="${o.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)
        }
        ),
        t("afterInit", ()=>{
            if (o.params.a11y.enabled) {
                {
                    const a = o.params.a11y;
                    o.$el.append(l);
                    var n = o.$el
                      , r = (a.containerRoleDescriptionMessage && u(n, a.containerRoleDescriptionMessage),
                    a.containerMessage && d(n, a.containerMessage),
                    (n = o.$wrapperEl).attr("id") || "swiper-wrapper-" + "x".repeat(16).replace(/x/g, ()=>Math.round(16 * Math.random()).toString(16)))
                      , i = o.params.autoplay && o.params.autoplay.enabled ? "off" : "polite";
                    n.attr("id", r),
                    n.attr("aria-live", i),
                    a.itemRoleDescriptionMessage && u(A(o.slides), a.itemRoleDescriptionMessage),
                    c(A(o.slides), a.slideRole);
                    const s = (o.params.loop ? o.slides.filter(e=>!e.classList.contains(o.params.slideDuplicateClass)) : o.slides).length;
                    let e, t;
                    o.slides.each((e,t)=>{
                        e = A(e),
                        t = o.params.loop ? parseInt(e.attr("data-swiper-slide-index"), 10) : t;
                        d(e, a.slideLabelMessage.replace(/\{\{index\}\}/, t + 1).replace(/\{\{slidesLength\}\}/, s))
                    }
                    ),
                    o.navigation && o.navigation.$nextEl && (e = o.navigation.$nextEl),
                    o.navigation && o.navigation.$prevEl && (t = o.navigation.$prevEl),
                    e && e.length && g(e, r, a.nextSlideMessage),
                    t && t.length && g(t, r, a.prevSlideMessage),
                    m() && o.pagination.$el.on("keydown", k(o.params.pagination.bulletClass), p)
                }
                f()
            }
        }
        ),
        t("toEdge", ()=>{
            o.params.a11y.enabled && f()
        }
        ),
        t("fromEdge", ()=>{
            o.params.a11y.enabled && f()
        }
        ),
        t("paginationUpdate", ()=>{
            if (o.params.a11y.enabled) {
                const t = o.params.a11y;
                h() && o.pagination.bullets.each(e=>{
                    e = A(e);
                    o.params.pagination.clickable && (r(e),
                    o.params.pagination.renderBullet || (c(e, "button"),
                    d(e, t.paginationBulletMessage.replace(/\{\{index\}\}/, e.index() + 1)))),
                    e.is("." + o.params.pagination.bulletActiveClass) ? e.attr("aria-current", "true") : e.removeAttr("aria-current")
                }
                )
            }
        }
        ),
        t("destroy", ()=>{
            if (o.params.a11y.enabled) {
                let e, t;
                l && 0 < l.length && l.remove(),
                o.navigation && o.navigation.$nextEl && (e = o.navigation.$nextEl),
                o.navigation && o.navigation.$prevEl && (t = o.navigation.$prevEl),
                e && e.off("keydown", p),
                t && t.off("keydown", p),
                m() && o.pagination.$el.off("keydown", k(o.params.pagination.bulletClass), p)
            }
        }
        )
    }
    , function({swiper: s, extendParams: e, on: t}) {
        e({
            history: {
                enabled: !1,
                root: "",
                replaceState: !1,
                key: "slides"
            }
        });
        let a = !1
          , n = {};
        const o = e=>e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
          , r = e=>{
            var t = O()
              , e = (e ? new URL(e) : t.location).pathname.slice(1).split("/").filter(e=>"" !== e)
              , t = e.length;
            return {
                key: e[t - 2],
                value: e[t - 1]
            }
        }
          , i = (n,e)=>{
            var r = O();
            if (a && s.params.history.enabled) {
                var i = s.params.url ? new URL(s.params.url) : r.location
                  , e = s.slides.eq(e);
                let t = o(e.attr("data-history"));
                if (0 < s.params.history.root.length) {
                    let e = s.params.history.root;
                    "/" === e[e.length - 1] && (e = e.slice(0, e.length - 1)),
                    t = e + `/${n}/` + t
                } else
                    i.pathname.includes(n) || (t = n + "/" + t);
                e = r.history.state;
                e && e.value === t || (s.params.history.replaceState ? r.history.replaceState({
                    value: t
                }, null, t) : r.history.pushState({
                    value: t
                }, null, t))
            }
        }
          , l = (n,r,i)=>{
            if (r)
                for (let e = 0, t = s.slides.length; e < t; e += 1) {
                    var a = s.slides.eq(e);
                    if (o(a.attr("data-history")) === r && !a.hasClass(s.params.slideDuplicateClass)) {
                        const r = a.index();
                        s.slideTo(r, n, i)
                    }
                }
            else
                s.slideTo(0, n, i)
        }
          , c = ()=>{
            n = r(s.params.url),
            l(s.params.speed, s.paths.value, !1)
        }
        ;
        t("init", ()=>{
            var e;
            s.params.history.enabled && (e = O(),
            s.params.history) && (e.history && e.history.pushState ? (a = !0,
            ((n = r(s.params.url)).key || n.value) && (l(0, n.value, s.params.runCallbacksOnInit),
            s.params.history.replaceState || e.addEventListener("popstate", c))) : (s.params.history.enabled = !1,
            s.params.hashNavigation.enabled = !0))
        }
        ),
        t("destroy", ()=>{
            var e;
            s.params.history.enabled && (e = O(),
            s.params.history.replaceState || e.removeEventListener("popstate", c))
        }
        ),
        t("transitionEnd _freeModeNoMomentumRelease", ()=>{
            a && i(s.params.history.key, s.activeIndex)
        }
        ),
        t("slideChange", ()=>{
            a && s.params.cssMode && i(s.params.history.key, s.activeIndex)
        }
        )
    }
    , function({swiper: i, extendParams: e, emit: t, on: n}) {
        let a = !1;
        const s = T()
          , o = O()
          , l = (e({
            hashNavigation: {
                enabled: !1,
                replaceState: !1,
                watchState: !1
            }
        }),
        ()=>{
            t("hashChange");
            var e = s.location.hash.replace("#", "");
            if (e !== i.slides.eq(i.activeIndex).attr("data-hash")) {
                const t = i.$wrapperEl.children(`.${i.params.slideClass}[data-hash="${e}"]`).index();
                void 0 !== t && i.slideTo(t)
            }
        }
        )
          , r = ()=>{
            var e;
            a && i.params.hashNavigation.enabled && (i.params.hashNavigation.replaceState && o.history && o.history.replaceState ? o.history.replaceState(null, null, "#" + i.slides.eq(i.activeIndex).attr("data-hash") || "") : (e = (e = i.slides.eq(i.activeIndex)).attr("data-hash") || e.attr("data-history"),
            s.location.hash = e || ""),
            t("hashSet"))
        }
        ;
        n("init", ()=>{
            if (i.params.hashNavigation.enabled && !(!i.params.hashNavigation.enabled || i.params.history && i.params.history.enabled)) {
                a = !0;
                const r = s.location.hash.replace("#", "");
                if (r)
                    for (let e = 0, t = i.slides.length; e < t; e += 1) {
                        var n = i.slides.eq(e);
                        if ((n.attr("data-hash") || n.attr("data-history")) === r && !n.hasClass(i.params.slideDuplicateClass)) {
                            const r = n.index();
                            i.slideTo(r, 0, i.params.runCallbacksOnInit, !0)
                        }
                    }
                i.params.hashNavigation.watchState && A(o).on("hashchange", l)
            }
        }
        ),
        n("destroy", ()=>{
            i.params.hashNavigation.enabled && i.params.hashNavigation.watchState && A(o).off("hashchange", l)
        }
        ),
        n("transitionEnd _freeModeNoMomentumRelease", ()=>{
            a && r()
        }
        ),
        n("slideChange", ()=>{
            a && i.params.cssMode && r()
        }
        )
    }
    , function({swiper: r, extendParams: e, on: t, emit: n}) {
        let i;
        function a() {
            var e = r.slides.eq(r.activeIndex);
            let t = r.params.autoplay.delay;
            e.attr("data-swiper-autoplay") && (t = e.attr("data-swiper-autoplay") || r.params.autoplay.delay),
            clearTimeout(i),
            i = _(()=>{
                let e;
                r.params.autoplay.reverseDirection ? r.params.loop ? (r.loopFix(),
                e = r.slidePrev(r.params.speed, !0, !0),
                n("autoplay")) : r.isBeginning ? r.params.autoplay.stopOnLastSlide ? o() : (e = r.slideTo(r.slides.length - 1, r.params.speed, !0, !0),
                n("autoplay")) : (e = r.slidePrev(r.params.speed, !0, !0),
                n("autoplay")) : r.params.loop ? (r.loopFix(),
                e = r.slideNext(r.params.speed, !0, !0),
                n("autoplay")) : r.isEnd ? r.params.autoplay.stopOnLastSlide ? o() : (e = r.slideTo(0, r.params.speed, !0, !0),
                n("autoplay")) : (e = r.slideNext(r.params.speed, !0, !0),
                n("autoplay")),
                (r.params.cssMode && r.autoplay.running || !1 === e) && a()
            }
            , t)
        }
        function s() {
            return void 0 === i && !r.autoplay.running && (r.autoplay.running = !0,
            n("autoplayStart"),
            a(),
            !0)
        }
        function o() {
            return !!r.autoplay.running && void 0 !== i && (i && (clearTimeout(i),
            i = void 0),
            r.autoplay.running = !1,
            n("autoplayStop"),
            !0)
        }
        function l(e) {
            !r.autoplay.running || r.autoplay.paused || (i && clearTimeout(i),
            r.autoplay.paused = !0,
            0 !== e && r.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach(e=>{
                r.$wrapperEl[0].addEventListener(e, u)
            }
            ) : (r.autoplay.paused = !1,
            a()))
        }
        function c() {
            var e = T();
            "hidden" === e.visibilityState && r.autoplay.running && l(),
            "visible" === e.visibilityState && r.autoplay.paused && (a(),
            r.autoplay.paused = !1)
        }
        function u(e) {
            r && !r.destroyed && r.$wrapperEl && e.target === r.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach(e=>{
                r.$wrapperEl[0].removeEventListener(e, u)
            }
            ),
            r.autoplay.paused = !1,
            (r.autoplay.running ? a : o)())
        }
        function d() {
            (r.params.autoplay.disableOnInteraction ? o : l)(),
            ["transitionend", "webkitTransitionEnd"].forEach(e=>{
                r.$wrapperEl[0].removeEventListener(e, u)
            }
            )
        }
        function p() {
            r.params.autoplay.disableOnInteraction || (r.autoplay.paused = !1,
            a())
        }
        e({
            autoplay: {
                enabled: !(r.autoplay = {
                    running: !1,
                    paused: !1
                }),
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1,
                pauseOnMouseEnter: !1
            }
        }),
        t("init", ()=>{
            r.params.autoplay.enabled && (s(),
            T().addEventListener("visibilitychange", c),
            r.params.autoplay.pauseOnMouseEnter) && (r.$el.on("mouseenter", d),
            r.$el.on("mouseleave", p))
        }
        ),
        t("beforeTransitionStart", (e,t,n)=>{
            r.autoplay.running && (n || !r.params.autoplay.disableOnInteraction ? r.autoplay.pause(t) : o())
        }
        ),
        t("sliderFirstMove", ()=>{
            r.autoplay.running && (r.params.autoplay.disableOnInteraction ? o : l)()
        }
        ),
        t("touchEnd", ()=>{
            r.params.cssMode && r.autoplay.paused && !r.params.autoplay.disableOnInteraction && a()
        }
        ),
        t("destroy", ()=>{
            r.$el.off("mouseenter", d),
            r.$el.off("mouseleave", p),
            r.autoplay.running && o(),
            T().removeEventListener("visibilitychange", c)
        }
        ),
        Object.assign(r.autoplay, {
            pause: l,
            run: a,
            start: s,
            stop: o
        })
    }
    , function({swiper: l, extendParams: e, on: t}) {
        e({
            thumbs: {
                swiper: null,
                multipleActiveThumbs: !0,
                autoScrollOffset: 0,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-thumbs"
            }
        });
        let n = !1
          , r = !1;
        function i() {
            var e = l.thumbs.swiper;
            if (e) {
                const n = e.clickedIndex
                  , r = e.clickedSlide;
                if (!(r && A(r).hasClass(l.params.thumbs.slideThumbActiveClass) || null == n)) {
                    let t;
                    if (t = e.params.loop ? parseInt(A(e.clickedSlide).attr("data-swiper-slide-index"), 10) : n,
                    l.params.loop) {
                        let e = l.activeIndex;
                        l.slides.eq(e).hasClass(l.params.slideDuplicateClass) && (l.loopFix(),
                        l._clientLeft = l.$wrapperEl[0].clientLeft,
                        e = l.activeIndex);
                        const n = l.slides.eq(e).prevAll(`[data-swiper-slide-index="${t}"]`).eq(0).index()
                          , r = l.slides.eq(e).nextAll(`[data-swiper-slide-index="${t}"]`).eq(0).index();
                        t = void 0 === n || void 0 !== r && r - e < e - n ? r : n
                    }
                    l.slideTo(t)
                }
            }
        }
        function a() {
            var e = l.params["thumbs"];
            if (n)
                return !1;
            n = !0;
            var t = l.constructor;
            if (e.swiper instanceof t)
                l.thumbs.swiper = e.swiper,
                Object.assign(l.thumbs.swiper.originalParams, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }),
                Object.assign(l.thumbs.swiper.params, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                });
            else if (c(e.swiper)) {
                const n = Object.assign({}, e.swiper);
                Object.assign(n, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }),
                l.thumbs.swiper = new t(n),
                r = !0
            }
            return l.thumbs.swiper.$el.addClass(l.params.thumbs.thumbsContainerClass),
            l.thumbs.swiper.on("tap", i),
            !0
        }
        function s(r) {
            var i = l.thumbs.swiper;
            if (i) {
                const a = "auto" === i.params.slidesPerView ? i.slidesPerViewDynamic() : i.params.slidesPerView
                  , s = l.params.thumbs.autoScrollOffset
                  , o = s && !i.params.loop;
                if (l.realIndex !== i.realIndex || o) {
                    let e, t, n = i.activeIndex;
                    if (i.params.loop) {
                        i.slides.eq(n).hasClass(i.params.slideDuplicateClass) && (i.loopFix(),
                        i._clientLeft = i.$wrapperEl[0].clientLeft,
                        n = i.activeIndex);
                        const r = i.slides.eq(n).prevAll(`[data-swiper-slide-index="${l.realIndex}"]`).eq(0).index()
                          , a = i.slides.eq(n).nextAll(`[data-swiper-slide-index="${l.realIndex}"]`).eq(0).index();
                        e = void 0 === r ? a : void 0 === a ? r : a - n == n - r ? 1 < i.params.slidesPerGroup ? a : n : a - n < n - r ? a : r,
                        t = l.activeIndex > l.previousIndex ? "next" : "prev"
                    } else
                        e = l.realIndex,
                        t = e > l.previousIndex ? "next" : "prev";
                    o && (e += "next" === t ? s : -1 * s),
                    i.visibleSlidesIndexes && i.visibleSlidesIndexes.indexOf(e) < 0 && (i.params.centeredSlides ? e = e > n ? e - Math.floor(a / 2) + 1 : e + Math.floor(a / 2) - 1 : e > n && i.params.slidesPerGroup,
                    i.slideTo(e, r ? 0 : void 0))
                }
                let t = 1;
                var n = l.params.thumbs.slideThumbActiveClass;
                if (1 < l.params.slidesPerView && !l.params.centeredSlides && (t = l.params.slidesPerView),
                l.params.thumbs.multipleActiveThumbs || (t = 1),
                t = Math.floor(t),
                i.slides.removeClass(n),
                i.params.loop || i.params.virtual && i.params.virtual.enabled)
                    for (let e = 0; e < t; e += 1)
                        i.$wrapperEl.children(`[data-swiper-slide-index="${l.realIndex + e}"]`).addClass(n);
                else
                    for (let e = 0; e < t; e += 1)
                        i.slides.eq(l.realIndex + e).addClass(n)
            }
        }
        l.thumbs = {
            swiper: null
        },
        t("beforeInit", ()=>{
            var e = l.params["thumbs"];
            e && e.swiper && (a(),
            s(!0))
        }
        ),
        t("slideChange update resize observerUpdate", ()=>{
            l.thumbs.swiper && s()
        }
        ),
        t("setTransition", (e,t)=>{
            var n = l.thumbs.swiper;
            n && n.setTransition(t)
        }
        ),
        t("beforeDestroy", ()=>{
            var e = l.thumbs.swiper;
            e && r && e && e.destroy()
        }
        ),
        Object.assign(l.thumbs, {
            init: a,
            update: s
        })
    }
    , function({swiper: p, extendParams: e, emit: f, once: h}) {
        e({
            freeMode: {
                enabled: !1,
                momentum: !0,
                momentumRatio: 1,
                momentumBounce: !0,
                momentumBounceRatio: 1,
                momentumVelocityRatio: 1,
                sticky: !1,
                minimumVelocity: .02
            }
        }),
        Object.assign(p, {
            freeMode: {
                onTouchMove: function() {
                    var {touchEventsData: e, touches: t} = p;
                    0 === e.velocities.length && e.velocities.push({
                        position: t[p.isHorizontal() ? "startX" : "startY"],
                        time: e.touchStartTime
                    }),
                    e.velocities.push({
                        position: t[p.isHorizontal() ? "currentX" : "currentY"],
                        time: g()
                    })
                },
                onTouchEnd: function({currentPos: a}) {
                    const {params: s, $wrapperEl: o, rtlTranslate: l, snapGrid: c, touchEventsData: u} = p
                      , d = g() - u.touchStartTime;
                    if (a < -p.minTranslate())
                        p.slideTo(p.activeIndex);
                    else if (a > -p.maxTranslate())
                        p.slides.length < c.length ? p.slideTo(c.length - 1) : p.slideTo(p.slides.length - 1);
                    else {
                        if (s.freeMode.momentum) {
                            if (1 < u.velocities.length) {
                                const a = u.velocities.pop()
                                  , f = u.velocities.pop()
                                  , h = a.position - f.position
                                  , o = a.time - f.time;
                                p.velocity = h / o,
                                p.velocity /= 2,
                                Math.abs(p.velocity) < s.freeMode.minimumVelocity && (p.velocity = 0),
                                (150 < o || 300 < g() - a.time) && (p.velocity = 0)
                            } else
                                p.velocity = 0;
                            p.velocity *= s.freeMode.momentumVelocityRatio,
                            u.velocities.length = 0;
                            let e = 1e3 * s.freeMode.momentumRatio;
                            const d = p.velocity * e;
                            let n = p.translate + d;
                            l && (n = -n);
                            let t, r = !1;
                            a = 20 * Math.abs(p.velocity) * s.freeMode.momentumBounceRatio;
                            let i;
                            if (n < p.maxTranslate())
                                s.freeMode.momentumBounce ? (n + p.maxTranslate() < -a && (n = p.maxTranslate() - a),
                                t = p.maxTranslate(),
                                r = !0,
                                u.allowMomentumBounce = !0) : n = p.maxTranslate(),
                                s.loop && s.centeredSlides && (i = !0);
                            else if (n > p.minTranslate())
                                s.freeMode.momentumBounce ? (n - p.minTranslate() > a && (n = p.minTranslate() + a),
                                t = p.minTranslate(),
                                r = !0,
                                u.allowMomentumBounce = !0) : n = p.minTranslate(),
                                s.loop && s.centeredSlides && (i = !0);
                            else if (s.freeMode.sticky) {
                                let t;
                                for (let e = 0; e < c.length; e += 1)
                                    if (c[e] > -n) {
                                        t = e;
                                        break
                                    }
                                n = -(n = Math.abs(c[t] - n) < Math.abs(c[t - 1] - n) || "next" === p.swipeDirection ? c[t] : c[t - 1])
                            }
                            if (i && h("transitionEnd", ()=>{
                                p.loopFix()
                            }
                            ),
                            0 !== p.velocity) {
                                if (e = l ? Math.abs((-n - p.translate) / p.velocity) : Math.abs((n - p.translate) / p.velocity),
                                s.freeMode.sticky) {
                                    const f = Math.abs((l ? -n : n) - p.translate)
                                      , h = p.slidesSizesGrid[p.activeIndex];
                                    e = f < h ? s.speed : f < 2 * h ? 1.5 * s.speed : 2.5 * s.speed
                                }
                            } else if (s.freeMode.sticky)
                                return void p.slideToClosest();
                            s.freeMode.momentumBounce && r ? (p.updateProgress(t),
                            p.setTransition(e),
                            p.setTranslate(n),
                            p.transitionStart(!0, p.swipeDirection),
                            p.animating = !0,
                            o.transitionEnd(()=>{
                                p && !p.destroyed && u.allowMomentumBounce && (f("momentumBounce"),
                                p.setTransition(s.speed),
                                setTimeout(()=>{
                                    p.setTranslate(t),
                                    o.transitionEnd(()=>{
                                        p && !p.destroyed && p.transitionEnd()
                                    }
                                    )
                                }
                                , 0))
                            }
                            )) : p.velocity ? (f("_freeModeNoMomentumRelease"),
                            p.updateProgress(n),
                            p.setTransition(e),
                            p.setTranslate(n),
                            p.transitionStart(!0, p.swipeDirection),
                            p.animating || (p.animating = !0,
                            o.transitionEnd(()=>{
                                p && !p.destroyed && p.transitionEnd()
                            }
                            ))) : p.updateProgress(n),
                            p.updateActiveIndex(),
                            p.updateSlidesClasses()
                        } else {
                            if (s.freeMode.sticky)
                                return void p.slideToClosest();
                            s.freeMode && f("_freeModeNoMomentumRelease")
                        }
                        (!s.freeMode.momentum || d >= s.longSwipesMs) && (p.updateProgress(),
                        p.updateActiveIndex(),
                        p.updateSlidesClasses())
                    }
                }
            }
        })
    }
    , function({swiper: d, extendParams: e}) {
        let p, f, h;
        e({
            grid: {
                rows: 1,
                fill: "column"
            }
        }),
        d.grid = {
            initSlides: e=>{
                var t = d.params["slidesPerView"]
                  , {rows: n, fill: r} = d.params.grid;
                f = p / n,
                h = Math.floor(e / n),
                p = Math.floor(e / n) === e / n ? e : Math.ceil(e / n) * n,
                "auto" !== t && "row" === r && (p = Math.max(p, t * n))
            }
            ,
            updateSlide: (e,t,n,r)=>{
                var {slidesPerGroup: i, spaceBetween: a} = d.params
                  , {rows: s, fill: o} = d.params.grid;
                let l, c, u;
                if ("row" === o && 1 < i) {
                    const d = Math.floor(e / (i * s))
                      , f = e - s * i * d
                      , h = 0 === d ? i : Math.min(Math.ceil((n - d * s * i) / s), i);
                    u = Math.floor(f / h),
                    l = (c = f - u * h + d * i) + u * p / s,
                    t.css({
                        "-webkit-order": l,
                        order: l
                    })
                } else
                    "column" === o ? (c = Math.floor(e / s),
                    u = e - c * s,
                    (c > h || c === h && u === s - 1) && (u += 1) >= s && (u = 0,
                    c += 1)) : (u = Math.floor(e / f),
                    c = e - u * f);
                t.css(r("margin-top"), 0 !== u ? a && a + "px" : "")
            }
            ,
            updateWrapperSize: (n,r,e)=>{
                var {spaceBetween: t, centeredSlides: i, roundLengths: a} = d.params
                  , s = d.params.grid["rows"];
                if (d.virtualSize = (n + t) * p,
                d.virtualSize = Math.ceil(d.virtualSize / s) - t,
                d.$wrapperEl.css({
                    [e("width")]: d.virtualSize + t + "px"
                }),
                i) {
                    r.splice(0, r.length);
                    const n = [];
                    for (let t = 0; t < r.length; t += 1) {
                        let e = r[t];
                        a && (e = Math.floor(e)),
                        r[t] < d.virtualSize + r[0] && n.push(e)
                    }
                    r.push(...n)
                }
            }
        }
    }
    , function({swiper: e}) {
        Object.assign(e, {
            appendSlide: function(t) {
                var {$wrapperEl: n, params: e} = this;
                if (e.loop && this.loopDestroy(),
                "object" == typeof t && "length"in t)
                    for (let e = 0; e < t.length; e += 1)
                        t[e] && n.append(t[e]);
                else
                    n.append(t);
                e.loop && this.loopCreate(),
                e.observer || this.update()
            }
            .bind(e),
            prependSlide: function(t) {
                var {params: e, $wrapperEl: n, activeIndex: r} = this;
                e.loop && this.loopDestroy();
                let i = r + 1;
                if ("object" == typeof t && "length"in t) {
                    for (let e = 0; e < t.length; e += 1)
                        t[e] && n.prepend(t[e]);
                    i = r + t.length
                } else
                    n.prepend(t);
                e.loop && this.loopCreate(),
                e.observer || this.update(),
                this.slideTo(i, 0, !1)
            }
            .bind(e),
            addSlide: function(t, n) {
                var r = this
                  , {$wrapperEl: i, params: a, activeIndex: s} = r;
                let o = s;
                if (a.loop && (o -= r.loopedSlides,
                r.loopDestroy(),
                r.slides = i.children("." + a.slideClass)),
                s = r.slides.length,
                t <= 0)
                    r.prependSlide(n);
                else if (s <= t)
                    r.appendSlide(n);
                else {
                    let e = o > t ? o + 1 : o;
                    var l = [];
                    for (let e = s - 1; e >= t; --e) {
                        const t = r.slides.eq(e);
                        t.remove(),
                        l.unshift(t)
                    }
                    if ("object" == typeof n && "length"in n) {
                        for (let e = 0; e < n.length; e += 1)
                            n[e] && i.append(n[e]);
                        e = o > t ? o + n.length : o
                    } else
                        i.append(n);
                    for (let e = 0; e < l.length; e += 1)
                        i.append(l[e]);
                    a.loop && r.loopCreate(),
                    a.observer || r.update(),
                    a.loop ? r.slideTo(e + r.loopedSlides, 0, !1) : r.slideTo(e, 0, !1)
                }
            }
            .bind(e),
            removeSlide: function(t) {
                var n = this
                  , {params: e, $wrapperEl: r, activeIndex: i} = n;
                let a = i;
                e.loop && (a -= n.loopedSlides,
                n.loopDestroy(),
                n.slides = r.children("." + e.slideClass));
                let s, o = a;
                if ("object" == typeof t && "length"in t)
                    for (let e = 0; e < t.length; e += 1)
                        s = t[e],
                        n.slides[s] && n.slides.eq(s).remove(),
                        s < o && --o;
                else
                    s = t,
                    n.slides[s] && n.slides.eq(s).remove(),
                    s < o && --o;
                o = Math.max(o, 0),
                e.loop && n.loopCreate(),
                e.observer || n.update(),
                e.loop ? n.slideTo(o + n.loopedSlides, 0, !1) : n.slideTo(o, 0, !1)
            }
            .bind(e),
            removeAllSlides: function() {
                var t = [];
                for (let e = 0; e < this.slides.length; e += 1)
                    t.push(e);
                this.removeSlide(t)
            }
            .bind(e)
        })
    }
    , function({swiper: s, extendParams: e, on: t}) {
        e({
            fadeEffect: {
                crossFade: !1,
                transformEl: null
            }
        }),
        P({
            effect: "fade",
            swiper: s,
            on: t,
            setTranslate: ()=>{
                const r = s["slides"]
                  , i = s.params.fadeEffect;
                for (let n = 0; n < r.length; n += 1) {
                    const r = s.slides.eq(n);
                    let e = -r[0].swiperSlideOffset
                      , t = (s.params.virtualTranslate || (e -= s.translate),
                    0);
                    s.isHorizontal() || (t = e,
                    e = 0);
                    var a = s.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(r[0].progress), 0) : 1 + Math.min(Math.max(r[0].progress, -1), 0);
                    D(i, r).css({
                        opacity: a
                    }).transform(`translate3d(${e}px, ${t}px, 0px)`)
                }
            }
            ,
            setTransition: e=>{
                var t = s.params.fadeEffect["transformEl"];
                (t ? s.slides.find(t) : s.slides).transition(e),
                L({
                    swiper: s,
                    duration: e,
                    transformEl: t,
                    allSlides: !0
                })
            }
            ,
            overwriteParams: ()=>({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !s.params.cssMode
            })
        })
    }
    , function({swiper: a, extendParams: e, on: t}) {
        e({
            cubeEffect: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            }
        }),
        P({
            effect: "cube",
            swiper: a,
            on: t,
            setTranslate: ()=>{
                const {$el: o, $wrapperEl: e, slides: l, width: t, height: n, rtlTranslate: c, size: u, browser: d} = a
                  , p = a.params.cubeEffect
                  , f = a.isHorizontal()
                  , h = a.virtual && a.params.virtual.enabled;
                let r, m = 0;
                p.shadow && (f ? (0 === (r = e.find(".swiper-cube-shadow")).length && (r = A('<div class="swiper-cube-shadow"></div>'),
                e.append(r)),
                r.css({
                    height: t + "px"
                })) : 0 === (r = o.find(".swiper-cube-shadow")).length && (r = A('<div class="swiper-cube-shadow"></div>'),
                o.append(r)));
                for (let s = 0; s < l.length; s += 1) {
                    const o = l.eq(s);
                    let e = s
                      , t = 90 * (e = h ? parseInt(o.attr("data-swiper-slide-index"), 10) : e)
                      , n = Math.floor(t / 360);
                    c && (t = -t,
                    n = Math.floor(-t / 360));
                    const d = Math.max(Math.min(o[0].progress, 1), -1);
                    let r = 0
                      , i = 0
                      , a = 0;
                    e % 4 == 0 ? (r = 4 * -n * u,
                    a = 0) : (e - 1) % 4 == 0 ? (r = 0,
                    a = 4 * -n * u) : (e - 2) % 4 == 0 ? (r = u + 4 * n * u,
                    a = u) : (e - 3) % 4 == 0 && (r = -u,
                    a = 3 * u + 4 * u * n),
                    c && (r = -r),
                    f || (i = r,
                    r = 0);
                    var g = `rotateX(${f ? 0 : -t}deg) rotateY(${f ? t : 0}deg) translate3d(${r}px, ${i}px, ${a}px)`;
                    if (d <= 1 && -1 < d && (m = 90 * e + 90 * d,
                    c) && (m = 90 * -e - 90 * d),
                    o.transform(g),
                    p.slideShadows) {
                        let e = f ? o.find(".swiper-slide-shadow-left") : o.find(".swiper-slide-shadow-top")
                          , t = f ? o.find(".swiper-slide-shadow-right") : o.find(".swiper-slide-shadow-bottom");
                        0 === e.length && (e = A(`<div class="swiper-slide-shadow-${f ? "left" : "top"}"></div>`),
                        o.append(e)),
                        0 === t.length && (t = A(`<div class="swiper-slide-shadow-${f ? "right" : "bottom"}"></div>`),
                        o.append(t)),
                        e.length && (e[0].style.opacity = Math.max(-d, 0)),
                        t.length && (t[0].style.opacity = Math.max(d, 0))
                    }
                }
                if (e.css({
                    "-webkit-transform-origin": `50% 50% -${u / 2}px`,
                    "transform-origin": `50% 50% -${u / 2}px`
                }),
                p.shadow)
                    if (f)
                        r.transform(`translate3d(0px, ${t / 2 + p.shadowOffset}px, ${-t / 2}px) rotateX(90deg) rotateZ(0deg) scale(${p.shadowScale})`);
                    else {
                        const a = Math.abs(m) - 90 * Math.floor(Math.abs(m) / 90)
                          , o = 1.5 - (Math.sin(2 * a * Math.PI / 360) / 2 + Math.cos(2 * a * Math.PI / 360) / 2)
                          , e = p.shadowScale
                          , l = p.shadowScale / o
                          , t = p.shadowOffset;
                        r.transform(`scale3d(${e}, 1, ${l}) translate3d(0px, ${n / 2 + t}px, ${-n / 2 / l}px) rotateX(-90deg)`)
                    }
                var i = d.isSafari || d.isWebView ? -u / 2 : 0;
                e.transform(`translate3d(0px,0,${i}px) rotateX(${a.isHorizontal() ? 0 : m}deg) rotateY(${a.isHorizontal() ? -m : 0}deg)`)
            }
            ,
            setTransition: e=>{
                var {$el: t, slides: n} = a;
                n.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                a.params.cubeEffect.shadow && !a.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
            }
            ,
            perspective: ()=>!0,
            overwriteParams: ()=>({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: !1,
                virtualTranslate: !0
            })
        })
    }
    , function({swiper: d, extendParams: e, on: t}) {
        e({
            flipEffect: {
                slideShadows: !0,
                limitRotation: !0,
                transformEl: null
            }
        }),
        P({
            effect: "flip",
            swiper: d,
            on: t,
            setTranslate: ()=>{
                var {slides: s, rtlTranslate: o} = d
                  , l = d.params.flipEffect;
                for (let a = 0; a < s.length; a += 1) {
                    var c = s.eq(a);
                    let n = c[0].progress;
                    d.params.flipEffect.limitRotation && (n = Math.max(Math.min(c[0].progress, 1), -1));
                    var u = c[0].swiperSlideOffset;
                    let e = -180 * n
                      , t = 0
                      , r = d.params.cssMode ? -u - d.translate : -u
                      , i = 0;
                    if (d.isHorizontal() ? o && (e = -e) : (i = r,
                    r = 0,
                    t = -e,
                    e = 0),
                    c[0].style.zIndex = -Math.abs(Math.round(n)) + s.length,
                    l.slideShadows) {
                        let e = d.isHorizontal() ? c.find(".swiper-slide-shadow-left") : c.find(".swiper-slide-shadow-top")
                          , t = d.isHorizontal() ? c.find(".swiper-slide-shadow-right") : c.find(".swiper-slide-shadow-bottom");
                        0 === e.length && (e = z(l, c, d.isHorizontal() ? "left" : "top")),
                        0 === t.length && (t = z(l, c, d.isHorizontal() ? "right" : "bottom")),
                        e.length && (e[0].style.opacity = Math.max(-n, 0)),
                        t.length && (t[0].style.opacity = Math.max(n, 0))
                    }
                    u = `translate3d(${r}px, ${i}px, 0px) rotateX(${t}deg) rotateY(${e}deg)`;
                    D(l, c).transform(u)
                }
            }
            ,
            setTransition: e=>{
                var t = d.params.flipEffect["transformEl"];
                (t ? d.slides.find(t) : d.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                L({
                    swiper: d,
                    duration: e,
                    transformEl: t
                })
            }
            ,
            perspective: ()=>!0,
            overwriteParams: ()=>({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !d.params.cssMode
            })
        })
    }
    , function({swiper: n, extendParams: e, on: t}) {
        e({
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                scale: 1,
                modifier: 1,
                slideShadows: !0,
                transformEl: null
            }
        }),
        P({
            effect: "coverflow",
            swiper: n,
            on: t,
            setTranslate: ()=>{
                const {width: l, height: c, slides: u, slidesSizesGrid: d} = n
                  , p = n.params.coverflowEffect
                  , f = n.isHorizontal()
                  , h = n.translate
                  , m = f ? l / 2 - h : c / 2 - h
                  , g = f ? p.rotate : -p.rotate
                  , v = p.depth;
                for (let o = 0, e = u.length; o < e; o += 1) {
                    const l = u.eq(o)
                      , c = d[o]
                      , h = (m - l[0].swiperSlideOffset - c / 2) / c * p.modifier;
                    let e = f ? g * h : 0
                      , t = f ? 0 : g * h
                      , n = -v * Math.abs(h)
                      , r = p.stretch
                      , i = ("string" == typeof r && -1 !== r.indexOf("%") && (r = parseFloat(p.stretch) / 100 * c),
                    f ? 0 : r * h)
                      , a = f ? r * h : 0
                      , s = 1 - (1 - p.scale) * Math.abs(h);
                    Math.abs(a) < .001 && (a = 0),
                    Math.abs(i) < .001 && (i = 0),
                    Math.abs(n) < .001 && (n = 0),
                    Math.abs(e) < .001 && (e = 0),
                    Math.abs(t) < .001 && (t = 0),
                    Math.abs(s) < .001 && (s = 0);
                    var y = `translate3d(${a}px,${i}px,${n}px)  rotateX(${t}deg) rotateY(${e}deg) scale(${s})`;
                    if (D(p, l).transform(y),
                    l[0].style.zIndex = 1 - Math.abs(Math.round(h)),
                    p.slideShadows) {
                        let e = f ? l.find(".swiper-slide-shadow-left") : l.find(".swiper-slide-shadow-top")
                          , t = f ? l.find(".swiper-slide-shadow-right") : l.find(".swiper-slide-shadow-bottom");
                        0 === e.length && (e = z(p, l, f ? "left" : "top")),
                        0 === t.length && (t = z(p, l, f ? "right" : "bottom")),
                        e.length && (e[0].style.opacity = 0 < h ? h : 0),
                        t.length && (t[0].style.opacity = 0 < -h ? -h : 0)
                    }
                }
            }
            ,
            setTransition: e=>{
                var t = n.params.coverflowEffect["transformEl"];
                (t ? n.slides.find(t) : n.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
            }
            ,
            perspective: ()=>!0,
            overwriteParams: ()=>({
                watchSlidesProgress: !0
            })
        })
    }
    , function({swiper: y, extendParams: e, on: t}) {
        e({
            creativeEffect: {
                transformEl: null,
                limitProgress: 1,
                shadowPerProgress: !1,
                progressMultiplier: 1,
                perspective: !0,
                prev: {
                    translate: [0, 0, 0],
                    rotate: [0, 0, 0],
                    opacity: 1,
                    scale: 1
                },
                next: {
                    translate: [0, 0, 0],
                    rotate: [0, 0, 0],
                    opacity: 1,
                    scale: 1
                }
            }
        });
        P({
            effect: "creative",
            swiper: y,
            on: t,
            setTranslate: ()=>{
                const {slides: i, $wrapperEl: e, slidesSizesGrid: a} = y
                  , s = y.params.creativeEffect
                  , o = s["progressMultiplier"]
                  , l = y.params.centeredSlides;
                if (l) {
                    const i = a[0] / 2 - y.params.slidesOffsetBefore || 0;
                    e.transform(`translateX(calc(50% - ${i}px))`)
                }
                for (let r = 0; r < i.length; r += 1) {
                    const a = i.eq(r)
                      , f = a[0].progress
                      , h = Math.min(Math.max(a[0].progress, -s.limitProgress), s.limitProgress);
                    let e = h;
                    l || (e = Math.min(Math.max(a[0].originalProgress, -s.limitProgress), s.limitProgress));
                    const m = a[0].swiperSlideOffset
                      , g = [y.params.cssMode ? -m - y.translate : -m, 0, 0]
                      , v = [0, 0, 0];
                    let t = !1
                      , n = (y.isHorizontal() || (g[1] = g[0],
                    g[0] = 0),
                    {
                        translate: [0, 0, 0],
                        rotate: [0, 0, 0],
                        scale: 1,
                        opacity: 1
                    });
                    h < 0 ? (n = s.next,
                    t = !0) : 0 < h && (n = s.prev,
                    t = !0),
                    g.forEach((e,t)=>{
                        g[t] = `calc(${e}px + (${e = n.translate[t],
                        "string" == typeof e ? e : e + "px"} * ${Math.abs(h * o)}))`
                    }
                    ),
                    v.forEach((e,t)=>{
                        v[t] = n.rotate[t] * Math.abs(h * o)
                    }
                    ),
                    a[0].style.zIndex = -Math.abs(Math.round(f)) + i.length;
                    var c = g.join(", ")
                      , u = `rotateX(${v[0]}deg) rotateY(${v[1]}deg) rotateZ(${v[2]}deg)`
                      , d = e < 0 ? `scale(${1 + (1 - n.scale) * e * o})` : `scale(${1 - (1 - n.scale) * e * o})`
                      , p = e < 0 ? 1 + (1 - n.opacity) * e * o : 1 - (1 - n.opacity) * e * o
                      , c = `translate3d(${c}) ${u} ` + d;
                    if (t && n.shadow || !t) {
                        let e = a.children(".swiper-slide-shadow");
                        if ((e = 0 === e.length && n.shadow ? z(s, a) : e).length) {
                            const i = s.shadowPerProgress ? h * (1 / s.limitProgress) : h;
                            e[0].style.opacity = Math.min(Math.max(Math.abs(i), 0), 1)
                        }
                    }
                    u = D(s, a);
                    u.transform(c).css({
                        opacity: p
                    }),
                    n.origin && u.css("transform-origin", n.origin)
                }
            }
            ,
            setTransition: e=>{
                var t = y.params.creativeEffect["transformEl"];
                (t ? y.slides.find(t) : y.slides).transition(e).find(".swiper-slide-shadow").transition(e),
                L({
                    swiper: y,
                    duration: e,
                    transformEl: t,
                    allSlides: !0
                })
            }
            ,
            perspective: ()=>y.params.creativeEffect.perspective,
            overwriteParams: ()=>({
                watchSlidesProgress: !0,
                virtualTranslate: !y.params.cssMode
            })
        })
    }
    , function({swiper: b, extendParams: e, on: t}) {
        e({
            cardsEffect: {
                slideShadows: !0,
                transformEl: null
            }
        }),
        P({
            effect: "cards",
            swiper: b,
            on: t,
            setTranslate: ()=>{
                var {slides: o, activeIndex: l} = b
                  , c = b.params.cardsEffect
                  , {startTranslate: u, isTouched: d} = b.touchEventsData
                  , p = b.translate;
                for (let s = 0; s < o.length; s += 1) {
                    var f = o.eq(s)
                      , h = f[0].progress
                      , m = Math.min(Math.max(h, -4), 4);
                    let e = f[0].swiperSlideOffset
                      , t = (b.params.centeredSlides && !b.params.cssMode && b.$wrapperEl.transform(`translateX(${b.minTranslate()}px)`),
                    b.params.centeredSlides && b.params.cssMode && (e -= o[0].swiperSlideOffset),
                    b.params.cssMode ? -e - b.translate : -e)
                      , n = 0;
                    var g = -100 * Math.abs(m);
                    let r = 1
                      , i = -2 * m
                      , a = 8 - .75 * Math.abs(m);
                    var v = (s === l || s === l - 1) && 0 < m && m < 1 && (d || b.params.cssMode) && p < u
                      , y = (s === l || s === l + 1) && m < 0 && -1 < m && (d || b.params.cssMode) && u < p;
                    if (v || y) {
                        const b = (1 - Math.abs((Math.abs(m) - .5) / .5)) ** .5;
                        i += -28 * m * b,
                        r += -.5 * b,
                        a += 96 * b,
                        n = -25 * b * Math.abs(m) + "%"
                    }
                    if (t = m < 0 ? `calc(${t}px + (${a * Math.abs(m)}%))` : 0 < m ? `calc(${t}px + (-${a * Math.abs(m)}%))` : t + "px",
                    !b.isHorizontal()) {
                        const b = n;
                        n = t,
                        t = b
                    }
                    v = `
        translate3d(${t}, ${n}, ${g}px)
        rotateZ(${i}deg)
        scale(${m < 0 ? "" + (1 + (1 - r) * m) : "" + (1 - (1 - r) * m)})
      `;
                    if (c.slideShadows) {
                        let e = f.find(".swiper-slide-shadow");
                        (e = 0 === e.length ? z(c, f) : e).length && (e[0].style.opacity = Math.min(Math.max((Math.abs(m) - .5) / .5, 0), 1))
                    }
                    f[0].style.zIndex = -Math.abs(Math.round(h)) + o.length,
                    D(c, f).transform(v)
                }
            }
            ,
            setTransition: e=>{
                var t = b.params.cardsEffect["transformEl"];
                (t ? b.slides.find(t) : b.slides).transition(e).find(".swiper-slide-shadow").transition(e),
                L({
                    swiper: b,
                    duration: e,
                    transformEl: t
                })
            }
            ,
            perspective: ()=>!0,
            overwriteParams: ()=>({
                watchSlidesProgress: !0,
                virtualTranslate: !b.params.cssMode
            })
        })
    }
    ]),
    C
});
