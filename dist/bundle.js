!(function(t, n) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = n())
    : 'function' == typeof define && define.amd
    ? define([], n)
    : 'object' == typeof exports
    ? (exports.GaugeChart = n())
    : (t.GaugeChart = n())
})(this, function() {
  return (function(t) {
    function n(r) {
      if (e[r]) return e[r].exports
      var i = (e[r] = { i: r, l: !1, exports: {} })
      return t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports
    }
    var e = {}
    return (
      (n.m = t),
      (n.c = e),
      (n.i = function(t) {
        return t
      }),
      (n.d = function(t, e, r) {
        n.o(t, e) ||
          Object.defineProperty(t, e, {
            configurable: !1,
            enumerable: !0,
            get: r,
          })
      }),
      (n.n = function(t) {
        var e =
          t && t.__esModule
            ? function() {
                return t.default
              }
            : function() {
                return t
              }
        return n.d(e, 'a', e), e
      }),
      (n.o = function(t, n) {
        return Object.prototype.hasOwnProperty.call(t, n)
      }),
      (n.p = ''),
      n((n.s = 24))
    )
  })([
    function(t, n, e) {
      'use strict'
      n.a = function(t) {
        for (var n = (t.length / 6) | 0, e = new Array(n), r = 0; r < n; )
          e[r] = '#' + t.slice(6 * r, 6 * ++r)
        return e
      }
    },
    function(t, n, e) {
      'use strict'
      var r = e(28)
      n.a = function(t) {
        return e.i(r.a)(t[t.length - 1])
      }
    },
    function(t, n, e) {
      'use strict'
      var r = e(6)
      e.d(n, 'f', function() {
        return r.h
      }),
        e.d(n, 'e', function() {
          return r.g
        }),
        e.d(n, 'd', function() {
          return r.f
        })
      var i = e(27)
      e.d(n, 'c', function() {
        return i.b
      }),
        e.d(n, 'b', function() {
          return i.a
        })
      var a = e(26)
      e.d(n, 'a', function() {
        return a.a
      })
    },
    function(t, n, e) {
      'use strict'
      function r(t, n) {
        return function(e) {
          return t + e * n
        }
      }
      function i(t, n, e) {
        return (
          (t = Math.pow(t, e)),
          (n = Math.pow(n, e) - t),
          (e = 1 / e),
          function(r) {
            return Math.pow(t + r * n, e)
          }
        )
      }
      function a(t, n) {
        var i = n - t
        return i
          ? r(t, i > 180 || i < -180 ? i - 360 * Math.round(i / 360) : i)
          : e.i(c.a)(isNaN(t) ? n : t)
      }
      function o(t) {
        return 1 == (t = +t)
          ? u
          : function(n, r) {
              return r - n ? i(n, r, t) : e.i(c.a)(isNaN(n) ? r : n)
            }
      }
      function u(t, n) {
        var i = n - t
        return i ? r(t, i) : e.i(c.a)(isNaN(t) ? n : t)
      }
      ;(n.b = a), (n.c = o), (n.a = u)
      var c = e(15)
    },
    function(t, n, e) {
      'use strict'
      n.a = function(t, n) {
        return (
          (t = +t),
          (n -= t),
          function(e) {
            return t + n * e
          }
        )
      }
    },
    function(t, n, e) {
      'use strict'
      function r(t, n) {
        if (t.length > n.length - 1)
          for (var e = t.length - n.length + 1, r = 0; r < e; r++)
            n.push(h.schemePaired[r % h.schemePaired.length])
        else t.length < n.length - 1 && (n = n.slice(0, t.length + 1))
        return n
      }
      function i(t) {
        return t < 0 ? 0 : t > 100 ? 100 : t
      }
      function a(t) {
        return (t / 100 - 0.5) * Math.PI
      }
      function o(t, n, e, r, i, o, u, c, f, s, h, d) {
        r.forEach(function(r, c) {
          var f = a(c ? o[c - 1] : 0),
            s = a(o[c] || 100),
            h = l
              .arc()
              .innerRadius(n)
              .outerRadius(i)
              .startAngle(f)
              .endAngle(s),
            d = t
              .append('path')
              .attr('d', h)
              .attr('fill', r)
              .attr(
                'transform',
                'translate(' + (n + 2 * e) + ', ' + (n + e) + ')'
              )
          if (u) {
            h = l
              .arc()
              .innerRadius(n)
              .outerRadius(n + 0.1 * n)
              .startAngle(f)
              .endAngle(s)
            var p = t
              .append('path')
              .attr('d', h)
              .attr('fill', 'transparent')
              .attr('opacity', '0.2')
              .attr(
                'transform',
                'translate(' + (n + 2 * e) + ', ' + (n + e) + ')'
              )
            d.on('mouseover', function() {
              d.style('opacity', 0.8),
                p
                  .transition()
                  .duration(50)
                  .ease(l.easeLinear)
                  .attr('fill', r)
            }).on('mouseout', function() {
              d.style('opacity', 1),
                p
                  .transition()
                  .duration(300)
                  .ease(l.easeLinear)
                  .attr('fill', 'transparent')
            })
          }
        }),
          r.forEach(function(r, i) {
            if (o[i]) {
              var u = a(o[i])
              if (c && f) {
                var l = n + 2 * e,
                  p = e - n * (1.1 - 1)
                t.append('rect')
                  .attr('x', 0)
                  .attr('y', 0)
                  .attr('fill', f)
                  .attr('width', c)
                  .attr('height', 1.1 * n)
                  .attr(
                    'transform',
                    'translate(' +
                      l +
                      ',' +
                      p +
                      ') rotate(' +
                      (180 * u) / Math.PI +
                      ', 0,' +
                      1.1 * n +
                      ')'
                  )
              }
              if (s[i]) {
                var v = n + 2 * e + Math.cos(u - Math.PI / 2) * (1.07 * n),
                  g = n + e + Math.sin(u - Math.PI / 2) * (1.07 * n)
                h = h || Math.round(0.09 * n)
                var b = document.createElement('canvas'),
                  y = b.getContext('2d')
                y.font = h + 'px'
                var _ = y.measureText(s[i]),
                  m = ((u - Math.PI / 2) / Math.PI) * (_.width + 4)
                t.append('text')
                  .attr('x', v + m)
                  .attr('y', g)
                  .text(s[i])
                  .attr('align', 'center')
                  .attr('font-size', h + 'px')
                  .attr('font-family', d)
              }
            }
          })
      }
      function u(t, n, e, r, i, o) {
        var u = i || o ? 0.5 * n : 0.1 * n,
          c = l
            .arc()
            .innerRadius(u)
            .outerRadius(0)
            .startAngle(a(0))
            .endAngle(a(200))
        t.append('path')
          .attr('d', c)
          .attr('fill', i || o ? 'transparent' : r)
          .attr('transform', 'translate(' + (n + 2 * e) + ', ' + (n + e) + ')')
          .attr('class', 'bar')
      }
      function c(t, n, e, r, i, a, o, u) {
        var c = u,
          f = new p.Needle(t, c, a, n, i, e, r, o)
        return f.setValue(c), f.getSelection(), f
      }
      function f(t, n, e, r, i, a, o, u, c) {
        var f = e - i
        u = u || Math.round(0.18 * e)
        var s = 0.6 * u,
          l = 1.5 * u,
          h = 0.56 * l,
          d = a[0] ? n / 2 - i - f / 2 - (s * a[0].length) / 2 : 0,
          p = a[1] ? n / 2 + i + f / 2 - (s * a[1].length) / 2 : 0,
          v = r + e + 2 * s,
          g = n / 2 - (h * o.length) / 2,
          b = r + e
        t
          .append('text')
          .attr('x', d)
          .attr('y', v)
          .text(a ? a[0] : '')
          .attr('font-size', u + 'px')
          .attr('font-family', c),
          t
            .append('text')
            .attr('x', p)
            .attr('y', v)
            .text(a ? a[1] : '')
            .attr('font-size', u + 'px')
            .attr('font-family', c),
          t
            .append('text')
            .attr('x', g)
            .attr('y', b)
            .text(o)
            .attr('font-size', l + 'px')
            .attr('font-family', c)
      }
      function s(t, n, e) {
        var i = {
            hasNeedle: !1,
            outerNeedle: !1,
            needleColor: 'gray',
            needleStartValue: 0,
            needleUpdateSpeed: 1e3,
            arcColors: [],
            arcDelimiters: [],
            arcOverEffect: !0,
            arcPadding: 0,
            arcPaddingColor: void 0,
            arcLabels: [],
            arcLabelFontSize: void 0,
            rangeLabel: [],
            centralLabel: '',
            rangeLabelFontSize: void 0,
            labelsFont: 'Roboto,Helvetica Neue,sans-serif',
          },
          a = Object.assign(i, e),
          s = a.hasNeedle,
          h = a.needleColor,
          p = a.needleUpdateSpeed,
          g = a.arcColors,
          b = a.arcDelimiters,
          y = a.arcOverEffect,
          _ = a.arcPadding,
          m = a.arcPaddingColor,
          x = a.arcLabels,
          w = a.arcLabelFontSize,
          M = a.rangeLabel,
          k = a.centralLabel,
          N = a.rangeLabelFontSize,
          S = a.labelsFont,
          A = a.outerNeedle,
          T = a.needleStartValue
        if (v.paramChecker(b, g, M)) {
          g = r(b, g)
          var E = 0.075 * n,
            C = 0.5 * n - 2 * E,
            P = n - 2 * E,
            R = 0.75 * C,
            z = l
              .select(t)
              .append('svg')
              .attr('width', P + 2 * E)
              .attr('height', C + 4 * E)
          o(z, C, E, g, R, b, y, _, m, x, w, S)
          var L = null
          return (
            s && ((L = c(z, C, E, h, R, k, A, T)), u(z, C, E, h, k, A)),
            f(z, n, C, E, R, M, k, N, S),
            new d.Gauge(z, p, L)
          )
        }
      }
      Object.defineProperty(n, '__esModule', { value: !0 })
      var l = e(10),
        h = e(25)
      e(74)
      var d = e(21),
        p = e(22),
        v = e(23)
      ;(n.arcColorsModifier = r),
        (n.needleValueModifier = i),
        (n.perc2RadWithShift = a),
        (n.arcOutline = o),
        (n.needleBaseOutline = u),
        (n.needleOutline = c),
        (n.labelOutline = f),
        (n.gaugeChart = s)
    },
    function(t, n, e) {
      'use strict'
      function r() {}
      function i(t) {
        var n
        return (
          (t = (t + '').trim().toLowerCase()),
          (n = x.exec(t))
            ? ((n = parseInt(n[1], 16)),
              new f(
                ((n >> 8) & 15) | ((n >> 4) & 240),
                ((n >> 4) & 15) | (240 & n),
                ((15 & n) << 4) | (15 & n),
                1
              ))
            : (n = w.exec(t))
            ? a(parseInt(n[1], 16))
            : (n = M.exec(t))
            ? new f(n[1], n[2], n[3], 1)
            : (n = k.exec(t))
            ? new f(
                (255 * n[1]) / 100,
                (255 * n[2]) / 100,
                (255 * n[3]) / 100,
                1
              )
            : (n = N.exec(t))
            ? o(n[1], n[2], n[3], n[4])
            : (n = S.exec(t))
            ? o(
                (255 * n[1]) / 100,
                (255 * n[2]) / 100,
                (255 * n[3]) / 100,
                n[4]
              )
            : (n = A.exec(t))
            ? s(n[1], n[2] / 100, n[3] / 100, 1)
            : (n = T.exec(t))
            ? s(n[1], n[2] / 100, n[3] / 100, n[4])
            : E.hasOwnProperty(t)
            ? a(E[t])
            : 'transparent' === t
            ? new f(NaN, NaN, NaN, 0)
            : null
        )
      }
      function a(t) {
        return new f((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1)
      }
      function o(t, n, e, r) {
        return r <= 0 && (t = n = e = NaN), new f(t, n, e, r)
      }
      function u(t) {
        return (
          t instanceof r || (t = i(t)),
          t ? ((t = t.rgb()), new f(t.r, t.g, t.b, t.opacity)) : new f()
        )
      }
      function c(t, n, e, r) {
        return 1 === arguments.length ? u(t) : new f(t, n, e, null == r ? 1 : r)
      }
      function f(t, n, e, r) {
        ;(this.r = +t), (this.g = +n), (this.b = +e), (this.opacity = +r)
      }
      function s(t, n, e, r) {
        return (
          r <= 0
            ? (t = n = e = NaN)
            : e <= 0 || e >= 1
            ? (t = n = NaN)
            : n <= 0 && (t = NaN),
          new d(t, n, e, r)
        )
      }
      function l(t) {
        if (t instanceof d) return new d(t.h, t.s, t.l, t.opacity)
        if ((t instanceof r || (t = i(t)), !t)) return new d()
        if (t instanceof d) return t
        t = t.rgb()
        var n = t.r / 255,
          e = t.g / 255,
          a = t.b / 255,
          o = Math.min(n, e, a),
          u = Math.max(n, e, a),
          c = NaN,
          f = u - o,
          s = (u + o) / 2
        return (
          f
            ? ((c =
                n === u
                  ? (e - a) / f + 6 * (e < a)
                  : e === u
                  ? (a - n) / f + 2
                  : (n - e) / f + 4),
              (f /= s < 0.5 ? u + o : 2 - u - o),
              (c *= 60))
            : (f = s > 0 && s < 1 ? 0 : c),
          new d(c, f, s, t.opacity)
        )
      }
      function h(t, n, e, r) {
        return 1 === arguments.length ? l(t) : new d(t, n, e, null == r ? 1 : r)
      }
      function d(t, n, e, r) {
        ;(this.h = +t), (this.s = +n), (this.l = +e), (this.opacity = +r)
      }
      function p(t, n, e) {
        return (
          255 *
          (t < 60
            ? n + ((e - n) * t) / 60
            : t < 180
            ? e
            : t < 240
            ? n + ((e - n) * (240 - t)) / 60
            : n)
        )
      }
      ;(n.c = r),
        e.d(n, 'e', function() {
          return g
        }),
        e.d(n, 'd', function() {
          return b
        }),
        (n.h = i),
        (n.b = u),
        (n.g = c),
        (n.a = f),
        (n.f = h)
      var v = e(7),
        g = 0.7,
        b = 1 / g,
        y = '\\s*([+-]?\\d+)\\s*',
        _ = '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*',
        m = '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
        x = /^#([0-9a-f]{3})$/,
        w = /^#([0-9a-f]{6})$/,
        M = new RegExp('^rgb\\(' + [y, y, y] + '\\)$'),
        k = new RegExp('^rgb\\(' + [m, m, m] + '\\)$'),
        N = new RegExp('^rgba\\(' + [y, y, y, _] + '\\)$'),
        S = new RegExp('^rgba\\(' + [m, m, m, _] + '\\)$'),
        A = new RegExp('^hsl\\(' + [_, m, m] + '\\)$'),
        T = new RegExp('^hsla\\(' + [_, m, m, _] + '\\)$'),
        E = {
          aliceblue: 15792383,
          antiquewhite: 16444375,
          aqua: 65535,
          aquamarine: 8388564,
          azure: 15794175,
          beige: 16119260,
          bisque: 16770244,
          black: 0,
          blanchedalmond: 16772045,
          blue: 255,
          blueviolet: 9055202,
          brown: 10824234,
          burlywood: 14596231,
          cadetblue: 6266528,
          chartreuse: 8388352,
          chocolate: 13789470,
          coral: 16744272,
          cornflowerblue: 6591981,
          cornsilk: 16775388,
          crimson: 14423100,
          cyan: 65535,
          darkblue: 139,
          darkcyan: 35723,
          darkgoldenrod: 12092939,
          darkgray: 11119017,
          darkgreen: 25600,
          darkgrey: 11119017,
          darkkhaki: 12433259,
          darkmagenta: 9109643,
          darkolivegreen: 5597999,
          darkorange: 16747520,
          darkorchid: 10040012,
          darkred: 9109504,
          darksalmon: 15308410,
          darkseagreen: 9419919,
          darkslateblue: 4734347,
          darkslategray: 3100495,
          darkslategrey: 3100495,
          darkturquoise: 52945,
          darkviolet: 9699539,
          deeppink: 16716947,
          deepskyblue: 49151,
          dimgray: 6908265,
          dimgrey: 6908265,
          dodgerblue: 2003199,
          firebrick: 11674146,
          floralwhite: 16775920,
          forestgreen: 2263842,
          fuchsia: 16711935,
          gainsboro: 14474460,
          ghostwhite: 16316671,
          gold: 16766720,
          goldenrod: 14329120,
          gray: 8421504,
          green: 32768,
          greenyellow: 11403055,
          grey: 8421504,
          honeydew: 15794160,
          hotpink: 16738740,
          indianred: 13458524,
          indigo: 4915330,
          ivory: 16777200,
          khaki: 15787660,
          lavender: 15132410,
          lavenderblush: 16773365,
          lawngreen: 8190976,
          lemonchiffon: 16775885,
          lightblue: 11393254,
          lightcoral: 15761536,
          lightcyan: 14745599,
          lightgoldenrodyellow: 16448210,
          lightgray: 13882323,
          lightgreen: 9498256,
          lightgrey: 13882323,
          lightpink: 16758465,
          lightsalmon: 16752762,
          lightseagreen: 2142890,
          lightskyblue: 8900346,
          lightslategray: 7833753,
          lightslategrey: 7833753,
          lightsteelblue: 11584734,
          lightyellow: 16777184,
          lime: 65280,
          limegreen: 3329330,
          linen: 16445670,
          magenta: 16711935,
          maroon: 8388608,
          mediumaquamarine: 6737322,
          mediumblue: 205,
          mediumorchid: 12211667,
          mediumpurple: 9662683,
          mediumseagreen: 3978097,
          mediumslateblue: 8087790,
          mediumspringgreen: 64154,
          mediumturquoise: 4772300,
          mediumvioletred: 13047173,
          midnightblue: 1644912,
          mintcream: 16121850,
          mistyrose: 16770273,
          moccasin: 16770229,
          navajowhite: 16768685,
          navy: 128,
          oldlace: 16643558,
          olive: 8421376,
          olivedrab: 7048739,
          orange: 16753920,
          orangered: 16729344,
          orchid: 14315734,
          palegoldenrod: 15657130,
          palegreen: 10025880,
          paleturquoise: 11529966,
          palevioletred: 14381203,
          papayawhip: 16773077,
          peachpuff: 16767673,
          peru: 13468991,
          pink: 16761035,
          plum: 14524637,
          powderblue: 11591910,
          purple: 8388736,
          rebeccapurple: 6697881,
          red: 16711680,
          rosybrown: 12357519,
          royalblue: 4286945,
          saddlebrown: 9127187,
          salmon: 16416882,
          sandybrown: 16032864,
          seagreen: 3050327,
          seashell: 16774638,
          sienna: 10506797,
          silver: 12632256,
          skyblue: 8900331,
          slateblue: 6970061,
          slategray: 7372944,
          slategrey: 7372944,
          snow: 16775930,
          springgreen: 65407,
          steelblue: 4620980,
          tan: 13808780,
          teal: 32896,
          thistle: 14204888,
          tomato: 16737095,
          turquoise: 4251856,
          violet: 15631086,
          wheat: 16113331,
          white: 16777215,
          whitesmoke: 16119285,
          yellow: 16776960,
          yellowgreen: 10145074,
        }
      e.i(v.a)(r, i, {
        displayable: function() {
          return this.rgb().displayable()
        },
        toString: function() {
          return this.rgb() + ''
        },
      }),
        e.i(v.a)(
          f,
          c,
          e.i(v.b)(r, {
            brighter: function(t) {
              return (
                (t = null == t ? b : Math.pow(b, t)),
                new f(this.r * t, this.g * t, this.b * t, this.opacity)
              )
            },
            darker: function(t) {
              return (
                (t = null == t ? g : Math.pow(g, t)),
                new f(this.r * t, this.g * t, this.b * t, this.opacity)
              )
            },
            rgb: function() {
              return this
            },
            displayable: function() {
              return (
                0 <= this.r &&
                this.r <= 255 &&
                0 <= this.g &&
                this.g <= 255 &&
                0 <= this.b &&
                this.b <= 255 &&
                0 <= this.opacity &&
                this.opacity <= 1
              )
            },
            toString: function() {
              var t = this.opacity
              return (
                (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))),
                (1 === t ? 'rgb(' : 'rgba(') +
                  Math.max(0, Math.min(255, Math.round(this.r) || 0)) +
                  ', ' +
                  Math.max(0, Math.min(255, Math.round(this.g) || 0)) +
                  ', ' +
                  Math.max(0, Math.min(255, Math.round(this.b) || 0)) +
                  (1 === t ? ')' : ', ' + t + ')')
              )
            },
          })
        ),
        e.i(v.a)(
          d,
          h,
          e.i(v.b)(r, {
            brighter: function(t) {
              return (
                (t = null == t ? b : Math.pow(b, t)),
                new d(this.h, this.s, this.l * t, this.opacity)
              )
            },
            darker: function(t) {
              return (
                (t = null == t ? g : Math.pow(g, t)),
                new d(this.h, this.s, this.l * t, this.opacity)
              )
            },
            rgb: function() {
              var t = (this.h % 360) + 360 * (this.h < 0),
                n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                e = this.l,
                r = e + (e < 0.5 ? e : 1 - e) * n,
                i = 2 * e - r
              return new f(
                p(t >= 240 ? t - 240 : t + 120, i, r),
                p(t, i, r),
                p(t < 120 ? t + 240 : t - 120, i, r),
                this.opacity
              )
            },
            displayable: function() {
              return (
                ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
                0 <= this.l &&
                this.l <= 1 &&
                0 <= this.opacity &&
                this.opacity <= 1
              )
            },
          })
        )
    },
    function(t, n, e) {
      'use strict'
      function r(t, n) {
        var e = Object.create(t.prototype)
        for (var r in n) e[r] = n[r]
        return e
      }
      ;(n.b = r),
        (n.a = function(t, n, e) {
          ;(t.prototype = n.prototype = e), (e.constructor = t)
        })
    },
    function(t, n, e) {
      'use strict'
      function r(t, n, e, r, i) {
        var a = t * t,
          o = a * t
        return (
          ((1 - 3 * t + 3 * a - o) * n +
            (4 - 6 * a + 3 * o) * e +
            (1 + 3 * t + 3 * a - 3 * o) * r +
            o * i) /
          6
        )
      }
      ;(n.b = r),
        (n.a = function(t) {
          var n = t.length - 1
          return function(e) {
            var i =
                e <= 0
                  ? (e = 0)
                  : e >= 1
                  ? ((e = 1), n - 1)
                  : Math.floor(e * n),
              a = t[i],
              o = t[i + 1],
              u = i > 0 ? t[i - 1] : 2 * a - o,
              c = i < n - 1 ? t[i + 2] : 2 * o - a
            return r((e - i / n) * n, u, a, o, c)
          }
        })
    },
    function(t, n, e) {
      'use strict'
      var r = e(2),
        i = e(18),
        a = e(13),
        o = e(16),
        u = e(4),
        c = e(17),
        f = e(19),
        s = e(15)
      n.a = function(t, n) {
        var l,
          h = typeof n
        return null == n || 'boolean' === h
          ? e.i(s.a)(n)
          : ('number' === h
              ? u.a
              : 'string' === h
              ? (l = e.i(r.f)(n))
                ? ((n = l), i.b)
                : f.a
              : n instanceof r.f
              ? i.b
              : n instanceof Date
              ? o.a
              : Array.isArray(n)
              ? a.a
              : ('function' != typeof n.valueOf &&
                  'function' != typeof n.toString) ||
                isNaN(n)
              ? c.a
              : u.a)(t, n)
      }
    },
    function(t, n, e) {
      !(function(t, e) {
        e(n)
      })(0, function(t) {
        'use strict'
        function n(t) {
          return function(n, e) {
            return Jf(t(n), e)
          }
        }
        function e(t, n) {
          return [t, n]
        }
        function r(t, n, e) {
          var r = (n - t) / Math.max(0, e),
            i = Math.floor(Math.log(r) / Math.LN10),
            a = r / Math.pow(10, i)
          return i >= 0
            ? (a >= gs ? 10 : a >= bs ? 5 : a >= ys ? 2 : 1) * Math.pow(10, i)
            : -Math.pow(10, -i) / (a >= gs ? 10 : a >= bs ? 5 : a >= ys ? 2 : 1)
        }
        function i(t, n, e) {
          var r = Math.abs(n - t) / Math.max(0, e),
            i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
            a = r / i
          return (
            a >= gs ? (i *= 10) : a >= bs ? (i *= 5) : a >= ys && (i *= 2),
            n < t ? -i : i
          )
        }
        function a(t) {
          return t.length
        }
        function o(t) {
          return 'translate(' + (t + 0.5) + ',0)'
        }
        function u(t) {
          return 'translate(0,' + (t + 0.5) + ')'
        }
        function c(t) {
          return function(n) {
            return +t(n)
          }
        }
        function f(t) {
          var n = Math.max(0, t.bandwidth() - 1) / 2
          return (
            t.round() && (n = Math.round(n)),
            function(e) {
              return +t(e) + n
            }
          )
        }
        function s() {
          return !this.__axis
        }
        function l(t, n) {
          function e(e) {
            var o =
                null == i ? (n.ticks ? n.ticks.apply(n, r) : n.domain()) : i,
              u =
                null == a ? (n.tickFormat ? n.tickFormat.apply(n, r) : Us) : a,
              b = Math.max(l, 0) + d,
              y = n.range(),
              _ = +y[0] + 0.5,
              m = +y[y.length - 1] + 0.5,
              x = (n.bandwidth ? f : c)(n.copy()),
              w = e.selection ? e.selection() : e,
              M = w.selectAll('.domain').data([null]),
              k = w
                .selectAll('.tick')
                .data(o, n)
                .order(),
              N = k.exit(),
              S = k
                .enter()
                .append('g')
                .attr('class', 'tick'),
              A = k.select('line'),
              T = k.select('text')
            ;(M = M.merge(
              M.enter()
                .insert('path', '.tick')
                .attr('class', 'domain')
                .attr('stroke', '#000')
            )),
              (k = k.merge(S)),
              (A = A.merge(
                S.append('line')
                  .attr('stroke', '#000')
                  .attr(v + '2', p * l)
              )),
              (T = T.merge(
                S.append('text')
                  .attr('fill', '#000')
                  .attr(v, p * b)
                  .attr('dy', t === Ds ? '0em' : t === Is ? '0.71em' : '0.32em')
              )),
              e !== w &&
                ((M = M.transition(e)),
                (k = k.transition(e)),
                (A = A.transition(e)),
                (T = T.transition(e)),
                (N = N.transition(e)
                  .attr('opacity', Bs)
                  .attr('transform', function(t) {
                    return isFinite((t = x(t)))
                      ? g(t)
                      : this.getAttribute('transform')
                  })),
                S.attr('opacity', Bs).attr('transform', function(t) {
                  var n = this.parentNode.__axis
                  return g(n && isFinite((n = n(t))) ? n : x(t))
                })),
              N.remove(),
              M.attr(
                'd',
                t === Fs || t == Ys
                  ? 'M' + p * h + ',' + _ + 'H0.5V' + m + 'H' + p * h
                  : 'M' + _ + ',' + p * h + 'V0.5H' + m + 'V' + p * h
              ),
              k.attr('opacity', 1).attr('transform', function(t) {
                return g(x(t))
              }),
              A.attr(v + '2', p * l),
              T.attr(v, p * b).text(u),
              w
                .filter(s)
                .attr('fill', 'none')
                .attr('font-size', 10)
                .attr('font-family', 'sans-serif')
                .attr(
                  'text-anchor',
                  t === Ys ? 'start' : t === Fs ? 'end' : 'middle'
                ),
              w.each(function() {
                this.__axis = x
              })
          }
          var r = [],
            i = null,
            a = null,
            l = 6,
            h = 6,
            d = 3,
            p = t === Ds || t === Fs ? -1 : 1,
            v = t === Fs || t === Ys ? 'x' : 'y',
            g = t === Ds || t === Is ? o : u
          return (
            (e.scale = function(t) {
              return arguments.length ? ((n = t), e) : n
            }),
            (e.ticks = function() {
              return (r = Os.call(arguments)), e
            }),
            (e.tickArguments = function(t) {
              return arguments.length
                ? ((r = null == t ? [] : Os.call(t)), e)
                : r.slice()
            }),
            (e.tickValues = function(t) {
              return arguments.length
                ? ((i = null == t ? null : Os.call(t)), e)
                : i && i.slice()
            }),
            (e.tickFormat = function(t) {
              return arguments.length ? ((a = t), e) : a
            }),
            (e.tickSize = function(t) {
              return arguments.length ? ((l = h = +t), e) : l
            }),
            (e.tickSizeInner = function(t) {
              return arguments.length ? ((l = +t), e) : l
            }),
            (e.tickSizeOuter = function(t) {
              return arguments.length ? ((h = +t), e) : h
            }),
            (e.tickPadding = function(t) {
              return arguments.length ? ((d = +t), e) : d
            }),
            e
          )
        }
        function h(t) {
          return l(Ds, t)
        }
        function d(t) {
          return l(Ys, t)
        }
        function p(t) {
          return l(Is, t)
        }
        function v(t) {
          return l(Fs, t)
        }
        function g() {
          for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
            if (!(t = arguments[n] + '') || t in r)
              throw new Error('illegal type: ' + t)
            r[t] = []
          }
          return new b(r)
        }
        function b(t) {
          this._ = t
        }
        function y(t, n) {
          return t
            .trim()
            .split(/^|\s+/)
            .map(function(t) {
              var e = '',
                r = t.indexOf('.')
              if (
                (r >= 0 && ((e = t.slice(r + 1)), (t = t.slice(0, r))),
                t && !n.hasOwnProperty(t))
              )
                throw new Error('unknown type: ' + t)
              return { type: t, name: e }
            })
        }
        function _(t, n) {
          for (var e, r = 0, i = t.length; r < i; ++r)
            if ((e = t[r]).name === n) return e.value
        }
        function m(t, n, e) {
          for (var r = 0, i = t.length; r < i; ++r)
            if (t[r].name === n) {
              ;(t[r] = js), (t = t.slice(0, r).concat(t.slice(r + 1)))
              break
            }
          return null != e && t.push({ name: n, value: e }), t
        }
        function x(t) {
          return function() {
            var n = this.ownerDocument,
              e = this.namespaceURI
            return e === Xs && n.documentElement.namespaceURI === Xs
              ? n.createElement(t)
              : n.createElementNS(e, t)
          }
        }
        function w(t) {
          return function() {
            return this.ownerDocument.createElementNS(t.space, t.local)
          }
        }
        function M() {
          return new k()
        }
        function k() {
          this._ = '@' + (++$s).toString(36)
        }
        function N(t, n, e) {
          return (
            (t = S(t, n, e)),
            function(n) {
              var e = n.relatedTarget
              ;(e && (e === this || 8 & e.compareDocumentPosition(this))) ||
                t.call(this, n)
            }
          )
        }
        function S(n, e, r) {
          return function(i) {
            var a = t.event
            t.event = i
            try {
              n.call(this, this.__data__, e, r)
            } finally {
              t.event = a
            }
          }
        }
        function A(t) {
          return t
            .trim()
            .split(/^|\s+/)
            .map(function(t) {
              var n = '',
                e = t.indexOf('.')
              return (
                e >= 0 && ((n = t.slice(e + 1)), (t = t.slice(0, e))),
                { type: t, name: n }
              )
            })
        }
        function T(t) {
          return function() {
            var n = this.__on
            if (n) {
              for (var e, r = 0, i = -1, a = n.length; r < a; ++r)
                (e = n[r]),
                  (t.type && e.type !== t.type) || e.name !== t.name
                    ? (n[++i] = e)
                    : this.removeEventListener(e.type, e.listener, e.capture)
              ++i ? (n.length = i) : delete this.__on
            }
          }
        }
        function E(t, n, e) {
          var r = Ks.hasOwnProperty(t.type) ? N : S
          return function(i, a, o) {
            var u,
              c = this.__on,
              f = r(n, a, o)
            if (c)
              for (var s = 0, l = c.length; s < l; ++s)
                if ((u = c[s]).type === t.type && u.name === t.name)
                  return (
                    this.removeEventListener(u.type, u.listener, u.capture),
                    this.addEventListener(
                      u.type,
                      (u.listener = f),
                      (u.capture = e)
                    ),
                    void (u.value = n)
                  )
            this.addEventListener(t.type, f, e),
              (u = {
                type: t.type,
                name: t.name,
                value: n,
                listener: f,
                capture: e,
              }),
              c ? c.push(u) : (this.__on = [u])
          }
        }
        function C(n, e, r, i) {
          var a = t.event
          ;(n.sourceEvent = t.event), (t.event = n)
          try {
            return e.apply(r, i)
          } finally {
            t.event = a
          }
        }
        function P() {}
        function R() {
          return []
        }
        function z(t, n) {
          ;(this.ownerDocument = t.ownerDocument),
            (this.namespaceURI = t.namespaceURI),
            (this._next = null),
            (this._parent = t),
            (this.__data__ = n)
        }
        function L(t, n, e, r, i, a) {
          for (var o, u = 0, c = n.length, f = a.length; u < f; ++u)
            (o = n[u])
              ? ((o.__data__ = a[u]), (r[u] = o))
              : (e[u] = new z(t, a[u]))
          for (; u < c; ++u) (o = n[u]) && (i[u] = o)
        }
        function q(t, n, e, r, i, a, o) {
          var u,
            c,
            f,
            s = {},
            l = n.length,
            h = a.length,
            d = new Array(l)
          for (u = 0; u < l; ++u)
            (c = n[u]) &&
              ((d[u] = f = hl + o.call(c, c.__data__, u, n)),
              f in s ? (i[u] = c) : (s[f] = c))
          for (u = 0; u < h; ++u)
            (f = hl + o.call(t, a[u], u, a)),
              (c = s[f])
                ? ((r[u] = c), (c.__data__ = a[u]), (s[f] = null))
                : (e[u] = new z(t, a[u]))
          for (u = 0; u < l; ++u) (c = n[u]) && s[d[u]] === c && (i[u] = c)
        }
        function O(t, n) {
          return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
        }
        function U(t) {
          return function() {
            this.removeAttribute(t)
          }
        }
        function D(t) {
          return function() {
            this.removeAttributeNS(t.space, t.local)
          }
        }
        function Y(t, n) {
          return function() {
            this.setAttribute(t, n)
          }
        }
        function I(t, n) {
          return function() {
            this.setAttributeNS(t.space, t.local, n)
          }
        }
        function F(t, n) {
          return function() {
            var e = n.apply(this, arguments)
            null == e ? this.removeAttribute(t) : this.setAttribute(t, e)
          }
        }
        function B(t, n) {
          return function() {
            var e = n.apply(this, arguments)
            null == e
              ? this.removeAttributeNS(t.space, t.local)
              : this.setAttributeNS(t.space, t.local, e)
          }
        }
        function j(t) {
          return function() {
            this.style.removeProperty(t)
          }
        }
        function X(t, n, e) {
          return function() {
            this.style.setProperty(t, n, e)
          }
        }
        function H(t, n, e) {
          return function() {
            var r = n.apply(this, arguments)
            null == r
              ? this.style.removeProperty(t)
              : this.style.setProperty(t, r, e)
          }
        }
        function G(t, n) {
          return (
            t.style.getPropertyValue(n) ||
            Nl(t)
              .getComputedStyle(t, null)
              .getPropertyValue(n)
          )
        }
        function V(t) {
          return function() {
            delete this[t]
          }
        }
        function $(t, n) {
          return function() {
            this[t] = n
          }
        }
        function W(t, n) {
          return function() {
            var e = n.apply(this, arguments)
            null == e ? delete this[t] : (this[t] = e)
          }
        }
        function Z(t) {
          return t.trim().split(/^|\s+/)
        }
        function Q(t) {
          return t.classList || new J(t)
        }
        function J(t) {
          ;(this._node = t), (this._names = Z(t.getAttribute('class') || ''))
        }
        function K(t, n) {
          for (var e = Q(t), r = -1, i = n.length; ++r < i; ) e.add(n[r])
        }
        function tt(t, n) {
          for (var e = Q(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r])
        }
        function nt(t) {
          return function() {
            K(this, t)
          }
        }
        function et(t) {
          return function() {
            tt(this, t)
          }
        }
        function rt(t, n) {
          return function() {
            ;(n.apply(this, arguments) ? K : tt)(this, t)
          }
        }
        function it() {
          this.textContent = ''
        }
        function at(t) {
          return function() {
            this.textContent = t
          }
        }
        function ot(t) {
          return function() {
            var n = t.apply(this, arguments)
            this.textContent = null == n ? '' : n
          }
        }
        function ut() {
          this.innerHTML = ''
        }
        function ct(t) {
          return function() {
            this.innerHTML = t
          }
        }
        function ft(t) {
          return function() {
            var n = t.apply(this, arguments)
            this.innerHTML = null == n ? '' : n
          }
        }
        function st() {
          this.nextSibling && this.parentNode.appendChild(this)
        }
        function lt() {
          this.previousSibling &&
            this.parentNode.insertBefore(this, this.parentNode.firstChild)
        }
        function ht() {
          return null
        }
        function dt() {
          var t = this.parentNode
          t && t.removeChild(this)
        }
        function pt(t, n, e) {
          var r = Nl(t),
            i = r.CustomEvent
          'function' == typeof i
            ? (i = new i(n, e))
            : ((i = r.document.createEvent('Event')),
              e
                ? (i.initEvent(n, e.bubbles, e.cancelable),
                  (i.detail = e.detail))
                : i.initEvent(n, !1, !1)),
            t.dispatchEvent(i)
        }
        function vt(t, n) {
          return function() {
            return pt(this, t, n)
          }
        }
        function gt(t, n) {
          return function() {
            return pt(this, t, n.apply(this, arguments))
          }
        }
        function bt(t, n) {
          ;(this._groups = t), (this._parents = n)
        }
        function yt() {
          return new bt([[document.documentElement]], Dl)
        }
        function _t() {
          t.event.stopImmediatePropagation()
        }
        function mt(t, n) {
          var e = t.document.documentElement,
            r = Yl(t).on('dragstart.drag', null)
          n &&
            (r.on('click.drag', jl, !0),
            setTimeout(function() {
              r.on('click.drag', null)
            }, 0)),
            'onselectstart' in e
              ? r.on('selectstart.drag', null)
              : ((e.style.MozUserSelect = e.__noselect), delete e.__noselect)
        }
        function xt(t, n, e, r, i, a, o, u, c, f) {
          ;(this.target = t),
            (this.type = n),
            (this.subject = e),
            (this.identifier = r),
            (this.active = i),
            (this.x = a),
            (this.y = o),
            (this.dx = u),
            (this.dy = c),
            (this._ = f)
        }
        function wt() {
          return !t.event.button
        }
        function Mt() {
          return this.parentNode
        }
        function kt(n) {
          return null == n ? { x: t.event.x, y: t.event.y } : n
        }
        function Nt() {
          return 'ontouchstart' in this
        }
        function St(t, n) {
          var e = Object.create(t.prototype)
          for (var r in n) e[r] = n[r]
          return e
        }
        function At() {}
        function Tt(t) {
          var n
          return (
            (t = (t + '').trim().toLowerCase()),
            (n = Ql.exec(t))
              ? ((n = parseInt(n[1], 16)),
                new zt(
                  ((n >> 8) & 15) | ((n >> 4) & 240),
                  ((n >> 4) & 15) | (240 & n),
                  ((15 & n) << 4) | (15 & n),
                  1
                ))
              : (n = Jl.exec(t))
              ? Et(parseInt(n[1], 16))
              : (n = Kl.exec(t))
              ? new zt(n[1], n[2], n[3], 1)
              : (n = th.exec(t))
              ? new zt(
                  (255 * n[1]) / 100,
                  (255 * n[2]) / 100,
                  (255 * n[3]) / 100,
                  1
                )
              : (n = nh.exec(t))
              ? Ct(n[1], n[2], n[3], n[4])
              : (n = eh.exec(t))
              ? Ct(
                  (255 * n[1]) / 100,
                  (255 * n[2]) / 100,
                  (255 * n[3]) / 100,
                  n[4]
                )
              : (n = rh.exec(t))
              ? Lt(n[1], n[2] / 100, n[3] / 100, 1)
              : (n = ih.exec(t))
              ? Lt(n[1], n[2] / 100, n[3] / 100, n[4])
              : ah.hasOwnProperty(t)
              ? Et(ah[t])
              : 'transparent' === t
              ? new zt(NaN, NaN, NaN, 0)
              : null
          )
        }
        function Et(t) {
          return new zt((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1)
        }
        function Ct(t, n, e, r) {
          return r <= 0 && (t = n = e = NaN), new zt(t, n, e, r)
        }
        function Pt(t) {
          return (
            t instanceof At || (t = Tt(t)),
            t ? ((t = t.rgb()), new zt(t.r, t.g, t.b, t.opacity)) : new zt()
          )
        }
        function Rt(t, n, e, r) {
          return 1 === arguments.length
            ? Pt(t)
            : new zt(t, n, e, null == r ? 1 : r)
        }
        function zt(t, n, e, r) {
          ;(this.r = +t), (this.g = +n), (this.b = +e), (this.opacity = +r)
        }
        function Lt(t, n, e, r) {
          return (
            r <= 0
              ? (t = n = e = NaN)
              : e <= 0 || e >= 1
              ? (t = n = NaN)
              : n <= 0 && (t = NaN),
            new Ut(t, n, e, r)
          )
        }
        function qt(t) {
          if (t instanceof Ut) return new Ut(t.h, t.s, t.l, t.opacity)
          if ((t instanceof At || (t = Tt(t)), !t)) return new Ut()
          if (t instanceof Ut) return t
          t = t.rgb()
          var n = t.r / 255,
            e = t.g / 255,
            r = t.b / 255,
            i = Math.min(n, e, r),
            a = Math.max(n, e, r),
            o = NaN,
            u = a - i,
            c = (a + i) / 2
          return (
            u
              ? ((o =
                  n === a
                    ? (e - r) / u + 6 * (e < r)
                    : e === a
                    ? (r - n) / u + 2
                    : (n - e) / u + 4),
                (u /= c < 0.5 ? a + i : 2 - a - i),
                (o *= 60))
              : (u = c > 0 && c < 1 ? 0 : o),
            new Ut(o, u, c, t.opacity)
          )
        }
        function Ot(t, n, e, r) {
          return 1 === arguments.length
            ? qt(t)
            : new Ut(t, n, e, null == r ? 1 : r)
        }
        function Ut(t, n, e, r) {
          ;(this.h = +t), (this.s = +n), (this.l = +e), (this.opacity = +r)
        }
        function Dt(t, n, e) {
          return (
            255 *
            (t < 60
              ? n + ((e - n) * t) / 60
              : t < 180
              ? e
              : t < 240
              ? n + ((e - n) * (240 - t)) / 60
              : n)
          )
        }
        function Yt(t) {
          if (t instanceof Ft) return new Ft(t.l, t.a, t.b, t.opacity)
          if (t instanceof $t) {
            var n = t.h * oh
            return new Ft(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity)
          }
          t instanceof zt || (t = Pt(t))
          var e = Ht(t.r),
            r = Ht(t.g),
            i = Ht(t.b),
            a = Bt((0.4124564 * e + 0.3575761 * r + 0.1804375 * i) / ch),
            o = Bt((0.2126729 * e + 0.7151522 * r + 0.072175 * i) / fh)
          return new Ft(
            116 * o - 16,
            500 * (a - o),
            200 * (o - Bt((0.0193339 * e + 0.119192 * r + 0.9503041 * i) / sh)),
            t.opacity
          )
        }
        function It(t, n, e, r) {
          return 1 === arguments.length
            ? Yt(t)
            : new Ft(t, n, e, null == r ? 1 : r)
        }
        function Ft(t, n, e, r) {
          ;(this.l = +t), (this.a = +n), (this.b = +e), (this.opacity = +r)
        }
        function Bt(t) {
          return t > ph ? Math.pow(t, 1 / 3) : t / dh + lh
        }
        function jt(t) {
          return t > hh ? t * t * t : dh * (t - lh)
        }
        function Xt(t) {
          return (
            255 *
            (t <= 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055)
          )
        }
        function Ht(t) {
          return (t /= 255) <= 0.04045
            ? t / 12.92
            : Math.pow((t + 0.055) / 1.055, 2.4)
        }
        function Gt(t) {
          if (t instanceof $t) return new $t(t.h, t.c, t.l, t.opacity)
          t instanceof Ft || (t = Yt(t))
          var n = Math.atan2(t.b, t.a) * uh
          return new $t(
            n < 0 ? n + 360 : n,
            Math.sqrt(t.a * t.a + t.b * t.b),
            t.l,
            t.opacity
          )
        }
        function Vt(t, n, e, r) {
          return 1 === arguments.length
            ? Gt(t)
            : new $t(t, n, e, null == r ? 1 : r)
        }
        function $t(t, n, e, r) {
          ;(this.h = +t), (this.c = +n), (this.l = +e), (this.opacity = +r)
        }
        function Wt(t) {
          if (t instanceof Qt) return new Qt(t.h, t.s, t.l, t.opacity)
          t instanceof zt || (t = Pt(t))
          var n = t.r / 255,
            e = t.g / 255,
            r = t.b / 255,
            i = (wh * r + mh * n - xh * e) / (wh + mh - xh),
            a = r - i,
            o = (_h * (e - i) - bh * a) / yh,
            u = Math.sqrt(o * o + a * a) / (_h * i * (1 - i)),
            c = u ? Math.atan2(o, a) * uh - 120 : NaN
          return new Qt(c < 0 ? c + 360 : c, u, i, t.opacity)
        }
        function Zt(t, n, e, r) {
          return 1 === arguments.length
            ? Wt(t)
            : new Qt(t, n, e, null == r ? 1 : r)
        }
        function Qt(t, n, e, r) {
          ;(this.h = +t), (this.s = +n), (this.l = +e), (this.opacity = +r)
        }
        function Jt(t, n, e, r, i) {
          var a = t * t,
            o = a * t
          return (
            ((1 - 3 * t + 3 * a - o) * n +
              (4 - 6 * a + 3 * o) * e +
              (1 + 3 * t + 3 * a - 3 * o) * r +
              o * i) /
            6
          )
        }
        function Kt(t, n) {
          return function(e) {
            return t + e * n
          }
        }
        function tn(t, n, e) {
          return (
            (t = Math.pow(t, e)),
            (n = Math.pow(n, e) - t),
            (e = 1 / e),
            function(r) {
              return Math.pow(t + r * n, e)
            }
          )
        }
        function nn(t, n) {
          var e = n - t
          return e
            ? Kt(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e)
            : Ph(isNaN(t) ? n : t)
        }
        function en(t) {
          return 1 == (t = +t)
            ? rn
            : function(n, e) {
                return e - n ? tn(n, e, t) : Ph(isNaN(n) ? e : n)
              }
        }
        function rn(t, n) {
          var e = n - t
          return e ? Kt(t, e) : Ph(isNaN(t) ? n : t)
        }
        function an(t) {
          return function(n) {
            var e,
              r,
              i = n.length,
              a = new Array(i),
              o = new Array(i),
              u = new Array(i)
            for (e = 0; e < i; ++e)
              (r = Rt(n[e])),
                (a[e] = r.r || 0),
                (o[e] = r.g || 0),
                (u[e] = r.b || 0)
            return (
              (a = t(a)),
              (o = t(o)),
              (u = t(u)),
              (r.opacity = 1),
              function(t) {
                return (r.r = a(t)), (r.g = o(t)), (r.b = u(t)), r + ''
              }
            )
          }
        }
        function on(t) {
          return function() {
            return t
          }
        }
        function un(t) {
          return function(n) {
            return t(n) + ''
          }
        }
        function cn(t) {
          return 'none' === t
            ? Hh
            : (Mh ||
                ((Mh = document.createElement('DIV')),
                (kh = document.documentElement),
                (Nh = document.defaultView)),
              (Mh.style.transform = t),
              (t = Nh.getComputedStyle(
                kh.appendChild(Mh),
                null
              ).getPropertyValue('transform')),
              kh.removeChild(Mh),
              (t = t.slice(7, -1).split(',')),
              Gh(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]))
        }
        function fn(t) {
          return null == t
            ? Hh
            : (Sh ||
                (Sh = document.createElementNS(
                  'http://www.w3.org/2000/svg',
                  'g'
                )),
              Sh.setAttribute('transform', t),
              (t = Sh.transform.baseVal.consolidate())
                ? ((t = t.matrix), Gh(t.a, t.b, t.c, t.d, t.e, t.f))
                : Hh)
        }
        function sn(t, n, e, r) {
          function i(t) {
            return t.length ? t.pop() + ' ' : ''
          }
          function a(t, r, i, a, o, u) {
            if (t !== i || r !== a) {
              var c = o.push('translate(', null, n, null, e)
              u.push({ i: c - 4, x: Uh(t, i) }, { i: c - 2, x: Uh(r, a) })
            } else (i || a) && o.push('translate(' + i + n + a + e)
          }
          function o(t, n, e, a) {
            t !== n
              ? (t - n > 180 ? (n += 360) : n - t > 180 && (t += 360),
                a.push({
                  i: e.push(i(e) + 'rotate(', null, r) - 2,
                  x: Uh(t, n),
                }))
              : n && e.push(i(e) + 'rotate(' + n + r)
          }
          function u(t, n, e, a) {
            t !== n
              ? a.push({ i: e.push(i(e) + 'skewX(', null, r) - 2, x: Uh(t, n) })
              : n && e.push(i(e) + 'skewX(' + n + r)
          }
          function c(t, n, e, r, a, o) {
            if (t !== e || n !== r) {
              var u = a.push(i(a) + 'scale(', null, ',', null, ')')
              o.push({ i: u - 4, x: Uh(t, e) }, { i: u - 2, x: Uh(n, r) })
            } else (1 === e && 1 === r) || a.push(i(a) + 'scale(' + e + ',' + r + ')')
          }
          return function(n, e) {
            var r = [],
              i = []
            return (
              (n = t(n)),
              (e = t(e)),
              a(n.translateX, n.translateY, e.translateX, e.translateY, r, i),
              o(n.rotate, e.rotate, r, i),
              u(n.skewX, e.skewX, r, i),
              c(n.scaleX, n.scaleY, e.scaleX, e.scaleY, r, i),
              (n = e = null),
              function(t) {
                for (var n, e = -1, a = i.length; ++e < a; )
                  r[(n = i[e]).i] = n.x(t)
                return r.join('')
              }
            )
          }
        }
        function ln(t) {
          return ((t = Math.exp(t)) + 1 / t) / 2
        }
        function hn(t) {
          return ((t = Math.exp(t)) - 1 / t) / 2
        }
        function dn(t) {
          return ((t = Math.exp(2 * t)) - 1) / (t + 1)
        }
        function pn(t) {
          return function(n, e) {
            var r = t((n = Ot(n)).h, (e = Ot(e)).h),
              i = rn(n.s, e.s),
              a = rn(n.l, e.l),
              o = rn(n.opacity, e.opacity)
            return function(t) {
              return (
                (n.h = r(t)),
                (n.s = i(t)),
                (n.l = a(t)),
                (n.opacity = o(t)),
                n + ''
              )
            }
          }
        }
        function vn(t, n) {
          var e = rn((t = It(t)).l, (n = It(n)).l),
            r = rn(t.a, n.a),
            i = rn(t.b, n.b),
            a = rn(t.opacity, n.opacity)
          return function(n) {
            return (
              (t.l = e(n)),
              (t.a = r(n)),
              (t.b = i(n)),
              (t.opacity = a(n)),
              t + ''
            )
          }
        }
        function gn(t) {
          return function(n, e) {
            var r = t((n = Vt(n)).h, (e = Vt(e)).h),
              i = rn(n.c, e.c),
              a = rn(n.l, e.l),
              o = rn(n.opacity, e.opacity)
            return function(t) {
              return (
                (n.h = r(t)),
                (n.c = i(t)),
                (n.l = a(t)),
                (n.opacity = o(t)),
                n + ''
              )
            }
          }
        }
        function bn(t) {
          return (function n(e) {
            function r(n, r) {
              var i = t((n = Zt(n)).h, (r = Zt(r)).h),
                a = rn(n.s, r.s),
                o = rn(n.l, r.l),
                u = rn(n.opacity, r.opacity)
              return function(t) {
                return (
                  (n.h = i(t)),
                  (n.s = a(t)),
                  (n.l = o(Math.pow(t, e))),
                  (n.opacity = u(t)),
                  n + ''
                )
              }
            }
            return (e = +e), (r.gamma = n), r
          })(1)
        }
        function yn() {
          return fd || (hd(_n), (fd = ld.now() + sd))
        }
        function _n() {
          fd = 0
        }
        function mn() {
          this._call = this._time = this._next = null
        }
        function xn(t, n, e) {
          var r = new mn()
          return r.restart(t, n, e), r
        }
        function wn() {
          yn(), ++id
          for (var t, n = Ah; n; )
            (t = fd - n._time) >= 0 && n._call.call(null, t), (n = n._next)
          --id
        }
        function Mn() {
          ;(fd = (cd = ld.now()) + sd), (id = ad = 0)
          try {
            wn()
          } finally {
            ;(id = 0), Nn(), (fd = 0)
          }
        }
        function kn() {
          var t = ld.now(),
            n = t - cd
          n > ud && ((sd -= n), (cd = t))
        }
        function Nn() {
          for (var t, n, e = Ah, r = 1 / 0; e; )
            e._call
              ? (r > e._time && (r = e._time), (t = e), (e = e._next))
              : ((n = e._next),
                (e._next = null),
                (e = t ? (t._next = n) : (Ah = n)))
          ;(Th = t), Sn(r)
        }
        function Sn(t) {
          if (!id) {
            ad && (ad = clearTimeout(ad))
            var n = t - fd
            n > 24
              ? (t < 1 / 0 && (ad = setTimeout(Mn, n)),
                od && (od = clearInterval(od)))
              : (od || ((cd = fd), (od = setInterval(kn, ud))),
                (id = 1),
                hd(Mn))
          }
        }
        function An(t, n) {
          var e = t.__transition
          if (!e || !(e = e[n]) || e.state > bd) throw new Error('too late')
          return e
        }
        function Tn(t, n) {
          var e = t.__transition
          if (!e || !(e = e[n]) || e.state > _d) throw new Error('too late')
          return e
        }
        function En(t, n) {
          var e = t.__transition
          if (!e || !(e = e[n])) throw new Error('too late')
          return e
        }
        function Cn(t, n, e) {
          function r(t) {
            ;(e.state = yd),
              e.timer.restart(i, e.delay, e.time),
              e.delay <= t && i(t - e.delay)
          }
          function i(r) {
            var f, s, l, h
            if (e.state !== yd) return o()
            for (f in c)
              if (((h = c[f]), h.name === e.name)) {
                if (h.state === md) return dd(i)
                h.state === xd
                  ? ((h.state = Md),
                    h.timer.stop(),
                    h.on.call('interrupt', t, t.__data__, h.index, h.group),
                    delete c[f])
                  : +f < n && ((h.state = Md), h.timer.stop(), delete c[f])
              }
            if (
              (dd(function() {
                e.state === md &&
                  ((e.state = xd), e.timer.restart(a, e.delay, e.time), a(r))
              }),
              (e.state = _d),
              e.on.call('start', t, t.__data__, e.index, e.group),
              e.state === _d)
            ) {
              for (
                e.state = md,
                  u = new Array((l = e.tween.length)),
                  f = 0,
                  s = -1;
                f < l;
                ++f
              )
                (h = e.tween[f].value.call(t, t.__data__, e.index, e.group)) &&
                  (u[++s] = h)
              u.length = s + 1
            }
          }
          function a(n) {
            for (
              var r =
                  n < e.duration
                    ? e.ease.call(null, n / e.duration)
                    : (e.timer.restart(o), (e.state = wd), 1),
                i = -1,
                a = u.length;
              ++i < a;

            )
              u[i].call(null, r)
            e.state === wd &&
              (e.on.call('end', t, t.__data__, e.index, e.group), o())
          }
          function o() {
            ;(e.state = Md), e.timer.stop(), delete c[n]
            for (var r in c) return
            delete t.__transition
          }
          var u,
            c = t.__transition
          ;(c[n] = e), (e.timer = xn(r, 0, e.time))
        }
        function Pn(t, n) {
          var e, r
          return function() {
            var i = Tn(this, t),
              a = i.tween
            if (a !== e) {
              r = e = a
              for (var o = 0, u = r.length; o < u; ++o)
                if (r[o].name === n) {
                  ;(r = r.slice()), r.splice(o, 1)
                  break
                }
            }
            i.tween = r
          }
        }
        function Rn(t, n, e) {
          var r, i
          if ('function' != typeof e) throw new Error()
          return function() {
            var a = Tn(this, t),
              o = a.tween
            if (o !== r) {
              i = (r = o).slice()
              for (
                var u = { name: n, value: e }, c = 0, f = i.length;
                c < f;
                ++c
              )
                if (i[c].name === n) {
                  i[c] = u
                  break
                }
              c === f && i.push(u)
            }
            a.tween = i
          }
        }
        function zn(t, n, e) {
          var r = t._id
          return (
            t.each(function() {
              var t = Tn(this, r)
              ;(t.value || (t.value = {}))[n] = e.apply(this, arguments)
            }),
            function(t) {
              return En(t, r).value[n]
            }
          )
        }
        function Ln(t) {
          return function() {
            this.removeAttribute(t)
          }
        }
        function qn(t) {
          return function() {
            this.removeAttributeNS(t.space, t.local)
          }
        }
        function On(t, n, e) {
          var r, i
          return function() {
            var a = this.getAttribute(t)
            return a === e ? null : a === r ? i : (i = n((r = a), e))
          }
        }
        function Un(t, n, e) {
          var r, i
          return function() {
            var a = this.getAttributeNS(t.space, t.local)
            return a === e ? null : a === r ? i : (i = n((r = a), e))
          }
        }
        function Dn(t, n, e) {
          var r, i, a
          return function() {
            var o,
              u = e(this)
            return null == u
              ? void this.removeAttribute(t)
              : ((o = this.getAttribute(t)),
                o === u
                  ? null
                  : o === r && u === i
                  ? a
                  : (a = n((r = o), (i = u))))
          }
        }
        function Yn(t, n, e) {
          var r, i, a
          return function() {
            var o,
              u = e(this)
            return null == u
              ? void this.removeAttributeNS(t.space, t.local)
              : ((o = this.getAttributeNS(t.space, t.local)),
                o === u
                  ? null
                  : o === r && u === i
                  ? a
                  : (a = n((r = o), (i = u))))
          }
        }
        function In(t, n) {
          function e() {
            var e = this,
              r = n.apply(e, arguments)
            return (
              r &&
              function(n) {
                e.setAttributeNS(t.space, t.local, r(n))
              }
            )
          }
          return (e._value = n), e
        }
        function Fn(t, n) {
          function e() {
            var e = this,
              r = n.apply(e, arguments)
            return (
              r &&
              function(n) {
                e.setAttribute(t, r(n))
              }
            )
          }
          return (e._value = n), e
        }
        function Bn(t, n) {
          return function() {
            An(this, t).delay = +n.apply(this, arguments)
          }
        }
        function jn(t, n) {
          return (
            (n = +n),
            function() {
              An(this, t).delay = n
            }
          )
        }
        function Xn(t, n) {
          return function() {
            Tn(this, t).duration = +n.apply(this, arguments)
          }
        }
        function Hn(t, n) {
          return (
            (n = +n),
            function() {
              Tn(this, t).duration = n
            }
          )
        }
        function Gn(t, n) {
          if ('function' != typeof n) throw new Error()
          return function() {
            Tn(this, t).ease = n
          }
        }
        function Vn(t) {
          return (t + '')
            .trim()
            .split(/^|\s+/)
            .every(function(t) {
              var n = t.indexOf('.')
              return n >= 0 && (t = t.slice(0, n)), !t || 'start' === t
            })
        }
        function $n(t, n, e) {
          var r,
            i,
            a = Vn(n) ? An : Tn
          return function() {
            var o = a(this, t),
              u = o.on
            u !== r && (i = (r = u).copy()).on(n, e), (o.on = i)
          }
        }
        function Wn(t) {
          return function() {
            var n = this.parentNode
            for (var e in this.__transition) if (+e !== t) return
            n && n.removeChild(this)
          }
        }
        function Zn(t, n) {
          var e, r, i
          return function() {
            var a = G(this, t),
              o = (this.style.removeProperty(t), G(this, t))
            return a === o
              ? null
              : a === e && o === r
              ? i
              : (i = n((e = a), (r = o)))
          }
        }
        function Qn(t) {
          return function() {
            this.style.removeProperty(t)
          }
        }
        function Jn(t, n, e) {
          var r, i
          return function() {
            var a = G(this, t)
            return a === e ? null : a === r ? i : (i = n((r = a), e))
          }
        }
        function Kn(t, n, e) {
          var r, i, a
          return function() {
            var o = G(this, t),
              u = e(this)
            return (
              null == u && (this.style.removeProperty(t), (u = G(this, t))),
              o === u
                ? null
                : o === r && u === i
                ? a
                : (a = n((r = o), (i = u)))
            )
          }
        }
        function te(t, n, e) {
          function r() {
            var r = this,
              i = n.apply(r, arguments)
            return (
              i &&
              function(n) {
                r.style.setProperty(t, i(n), e)
              }
            )
          }
          return (r._value = n), r
        }
        function ne(t) {
          return function() {
            this.textContent = t
          }
        }
        function ee(t) {
          return function() {
            var n = t(this)
            this.textContent = null == n ? '' : n
          }
        }
        function re(t, n, e, r) {
          ;(this._groups = t),
            (this._parents = n),
            (this._name = e),
            (this._id = r)
        }
        function ie(t) {
          return yt().transition(t)
        }
        function ae() {
          return ++Gd
        }
        function oe(t) {
          return +t
        }
        function ue(t) {
          return t * t
        }
        function ce(t) {
          return t * (2 - t)
        }
        function fe(t) {
          return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2
        }
        function se(t) {
          return t * t * t
        }
        function le(t) {
          return --t * t * t + 1
        }
        function he(t) {
          return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
        }
        function de(t) {
          return 1 - Math.cos(t * Jd)
        }
        function pe(t) {
          return Math.sin(t * Jd)
        }
        function ve(t) {
          return (1 - Math.cos(Qd * t)) / 2
        }
        function ge(t) {
          return Math.pow(2, 10 * t - 10)
        }
        function be(t) {
          return 1 - Math.pow(2, -10 * t)
        }
        function ye(t) {
          return (
            ((t *= 2) <= 1
              ? Math.pow(2, 10 * t - 10)
              : 2 - Math.pow(2, 10 - 10 * t)) / 2
          )
        }
        function _e(t) {
          return 1 - Math.sqrt(1 - t * t)
        }
        function me(t) {
          return Math.sqrt(1 - --t * t)
        }
        function xe(t) {
          return (
            ((t *= 2) <= 1
              ? 1 - Math.sqrt(1 - t * t)
              : Math.sqrt(1 - (t -= 2) * t) + 1) / 2
          )
        }
        function we(t) {
          return 1 - Me(1 - t)
        }
        function Me(t) {
          return (t = +t) < Kd
            ? cp * t * t
            : t < np
            ? cp * (t -= tp) * t + ep
            : t < ip
            ? cp * (t -= rp) * t + ap
            : cp * (t -= op) * t + up
        }
        function ke(t) {
          return ((t *= 2) <= 1 ? 1 - Me(1 - t) : Me(t - 1) + 1) / 2
        }
        function Ne(t, n) {
          for (var e; !(e = t.__transition) || !(e = e[n]); )
            if (!(t = t.parentNode)) return (gp.time = yn()), gp
          return e
        }
        function Se() {
          t.event.stopImmediatePropagation()
        }
        function Ae(t) {
          return { type: t }
        }
        function Te() {
          return !t.event.button
        }
        function Ee() {
          var t = this.ownerSVGElement || this
          return [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]]
        }
        function Ce(t) {
          for (; !t.__brush; ) if (!(t = t.parentNode)) return
          return t.__brush
        }
        function Pe(t) {
          return t[0][0] === t[1][0] || t[0][1] === t[1][1]
        }
        function Re(t) {
          var n = t.__brush
          return n ? n.dim.output(n.selection) : null
        }
        function ze() {
          return qe(Ap)
        }
        function Le() {
          return qe(Tp)
        }
        function qe(n) {
          function e(t) {
            var e = t
              .property('__brush', u)
              .selectAll('.overlay')
              .data([Ae('overlay')])
            e
              .enter()
              .append('rect')
              .attr('class', 'overlay')
              .attr('pointer-events', 'all')
              .attr('cursor', Cp.overlay)
              .merge(e)
              .each(function() {
                var t = Ce(this).extent
                Yl(this)
                  .attr('x', t[0][0])
                  .attr('y', t[0][1])
                  .attr('width', t[1][0] - t[0][0])
                  .attr('height', t[1][1] - t[0][1])
              }),
              t
                .selectAll('.selection')
                .data([Ae('selection')])
                .enter()
                .append('rect')
                .attr('class', 'selection')
                .attr('cursor', Cp.selection)
                .attr('fill', '#777')
                .attr('fill-opacity', 0.3)
                .attr('stroke', '#fff')
                .attr('shape-rendering', 'crispEdges')
            var i = t.selectAll('.handle').data(n.handles, function(t) {
              return t.type
            })
            i.exit().remove(),
              i
                .enter()
                .append('rect')
                .attr('class', function(t) {
                  return 'handle handle--' + t.type
                })
                .attr('cursor', function(t) {
                  return Cp[t.type]
                }),
              t
                .each(r)
                .attr('fill', 'none')
                .attr('pointer-events', 'all')
                .style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)')
                .on('mousedown.brush touchstart.brush', o)
          }
          function r() {
            var t = Yl(this),
              n = Ce(this).selection
            n
              ? (t
                  .selectAll('.selection')
                  .style('display', null)
                  .attr('x', n[0][0])
                  .attr('y', n[0][1])
                  .attr('width', n[1][0] - n[0][0])
                  .attr('height', n[1][1] - n[0][1]),
                t
                  .selectAll('.handle')
                  .style('display', null)
                  .attr('x', function(t) {
                    return 'e' === t.type[t.type.length - 1]
                      ? n[1][0] - h / 2
                      : n[0][0] - h / 2
                  })
                  .attr('y', function(t) {
                    return 's' === t.type[0] ? n[1][1] - h / 2 : n[0][1] - h / 2
                  })
                  .attr('width', function(t) {
                    return 'n' === t.type || 's' === t.type
                      ? n[1][0] - n[0][0] + h
                      : h
                  })
                  .attr('height', function(t) {
                    return 'e' === t.type || 'w' === t.type
                      ? n[1][1] - n[0][1] + h
                      : h
                  }))
              : t
                  .selectAll('.selection,.handle')
                  .style('display', 'none')
                  .attr('x', null)
                  .attr('y', null)
                  .attr('width', null)
                  .attr('height', null)
          }
          function i(t, n) {
            return t.__brush.emitter || new a(t, n)
          }
          function a(t, n) {
            ;(this.that = t),
              (this.args = n),
              (this.state = t.__brush),
              (this.active = 0)
          }
          function o() {
            function e() {
              var t = rl(k)
              !O ||
                w ||
                M ||
                (Math.abs(t[0] - D[0]) > Math.abs(t[1] - D[1])
                  ? (M = !0)
                  : (w = !0)),
                (D = t),
                (x = !0),
                wp(),
                a()
            }
            function a() {
              var t
              switch (((_ = D[0] - U[0]), (m = D[1] - U[1]), S)) {
                case kp:
                case Mp:
                  A &&
                    ((_ = Math.max(R - l, Math.min(L - v, _))),
                    (h = l + _),
                    (g = v + _)),
                    T &&
                      ((m = Math.max(z - d, Math.min(q - b, m))),
                      (p = d + m),
                      (y = b + m))
                  break
                case Np:
                  A < 0
                    ? ((_ = Math.max(R - l, Math.min(L - l, _))),
                      (h = l + _),
                      (g = v))
                    : A > 0 &&
                      ((_ = Math.max(R - v, Math.min(L - v, _))),
                      (h = l),
                      (g = v + _)),
                    T < 0
                      ? ((m = Math.max(z - d, Math.min(q - d, m))),
                        (p = d + m),
                        (y = b))
                      : T > 0 &&
                        ((m = Math.max(z - b, Math.min(q - b, m))),
                        (p = d),
                        (y = b + m))
                  break
                case Sp:
                  A &&
                    ((h = Math.max(R, Math.min(L, l - _ * A))),
                    (g = Math.max(R, Math.min(L, v + _ * A)))),
                    T &&
                      ((p = Math.max(z, Math.min(q, d - m * T))),
                      (y = Math.max(z, Math.min(q, b + m * T))))
              }
              g < h &&
                ((A *= -1),
                (t = l),
                (l = v),
                (v = t),
                (t = h),
                (h = g),
                (g = t),
                N in Pp && F.attr('cursor', Cp[(N = Pp[N])])),
                y < p &&
                  ((T *= -1),
                  (t = d),
                  (d = b),
                  (b = t),
                  (t = p),
                  (p = y),
                  (y = t),
                  N in Rp && F.attr('cursor', Cp[(N = Rp[N])])),
                E.selection && (P = E.selection),
                w && ((h = P[0][0]), (g = P[1][0])),
                M && ((p = P[0][1]), (y = P[1][1])),
                (P[0][0] === h &&
                  P[0][1] === p &&
                  P[1][0] === g &&
                  P[1][1] === y) ||
                  ((E.selection = [[h, p], [g, y]]), r.call(k), Y.brush())
            }
            function o() {
              if ((Se(), t.event.touches)) {
                if (t.event.touches.length) return
                c && clearTimeout(c),
                  (c = setTimeout(function() {
                    c = null
                  }, 500)),
                  I.on('touchmove.brush touchend.brush touchcancel.brush', null)
              } else mt(t.event.view, x), B.on('keydown.brush keyup.brush mousemove.brush mouseup.brush', null)
              I.attr('pointer-events', 'all'),
                F.attr('cursor', Cp.overlay),
                E.selection && (P = E.selection),
                Pe(P) && ((E.selection = null), r.call(k)),
                Y.end()
            }
            function u() {
              switch (t.event.keyCode) {
                case 16:
                  O = A && T
                  break
                case 18:
                  S === Np &&
                    (A && ((v = g - _ * A), (l = h + _ * A)),
                    T && ((b = y - m * T), (d = p + m * T)),
                    (S = Sp),
                    a())
                  break
                case 32:
                  ;(S !== Np && S !== Sp) ||
                    (A < 0 ? (v = g - _) : A > 0 && (l = h - _),
                    T < 0 ? (b = y - m) : T > 0 && (d = p - m),
                    (S = kp),
                    F.attr('cursor', Cp.selection),
                    a())
                  break
                default:
                  return
              }
              wp()
            }
            function f() {
              switch (t.event.keyCode) {
                case 16:
                  O && ((w = M = O = !1), a())
                  break
                case 18:
                  S === Sp &&
                    (A < 0 ? (v = g) : A > 0 && (l = h),
                    T < 0 ? (b = y) : T > 0 && (d = p),
                    (S = Np),
                    a())
                  break
                case 32:
                  S === kp &&
                    (t.event.altKey
                      ? (A && ((v = g - _ * A), (l = h + _ * A)),
                        T && ((b = y - m * T), (d = p + m * T)),
                        (S = Sp))
                      : (A < 0 ? (v = g) : A > 0 && (l = h),
                        T < 0 ? (b = y) : T > 0 && (d = p),
                        (S = Np)),
                    F.attr('cursor', Cp[N]),
                    a())
                  break
                default:
                  return
              }
              wp()
            }
            if (t.event.touches) {
              if (t.event.changedTouches.length < t.event.touches.length)
                return wp()
            } else if (c) return
            if (s.apply(this, arguments)) {
              var l,
                h,
                d,
                p,
                v,
                g,
                b,
                y,
                _,
                m,
                x,
                w,
                M,
                k = this,
                N = t.event.target.__data__.type,
                S =
                  'selection' === (t.event.metaKey ? (N = 'overlay') : N)
                    ? Mp
                    : t.event.altKey
                    ? Sp
                    : Np,
                A = n === Tp ? null : zp[N],
                T = n === Ap ? null : Lp[N],
                E = Ce(k),
                C = E.extent,
                P = E.selection,
                R = C[0][0],
                z = C[0][1],
                L = C[1][0],
                q = C[1][1],
                O = A && T && t.event.shiftKey,
                U = rl(k),
                D = U,
                Y = i(k, arguments).beforestart()
              'overlay' === N
                ? (E.selection = P = [
                    [(l = n === Tp ? R : U[0]), (d = n === Ap ? z : U[1])],
                    [(v = n === Tp ? L : l), (b = n === Ap ? q : d)],
                  ])
                : ((l = P[0][0]), (d = P[0][1]), (v = P[1][0]), (b = P[1][1])),
                (h = l),
                (p = d),
                (g = v),
                (y = b)
              var I = Yl(k).attr('pointer-events', 'none'),
                F = I.selectAll('.overlay').attr('cursor', Cp[N])
              if (t.event.touches)
                I.on('touchmove.brush', e, !0).on(
                  'touchend.brush touchcancel.brush',
                  o,
                  !0
                )
              else {
                var B = Yl(t.event.view)
                  .on('keydown.brush', u, !0)
                  .on('keyup.brush', f, !0)
                  .on('mousemove.brush', e, !0)
                  .on('mouseup.brush', o, !0)
                Xl(t.event.view)
              }
              Se(), Nd(k), r.call(k), Y.start()
            }
          }
          function u() {
            var t = this.__brush || { selection: null }
            return (t.extent = f.apply(this, arguments)), (t.dim = n), t
          }
          var c,
            f = Ee,
            s = Te,
            l = g(e, 'start', 'brush', 'end'),
            h = 6
          return (
            (e.move = function(t, e) {
              t.selection
                ? t
                    .on('start.brush', function() {
                      i(this, arguments)
                        .beforestart()
                        .start()
                    })
                    .on('interrupt.brush end.brush', function() {
                      i(this, arguments).end()
                    })
                    .tween('brush', function() {
                      function t(t) {
                        ;(o.selection = 1 === t && Pe(f) ? null : s(t)),
                          r.call(a),
                          u.brush()
                      }
                      var a = this,
                        o = a.__brush,
                        u = i(a, arguments),
                        c = o.selection,
                        f = n.input(
                          'function' == typeof e ? e.apply(this, arguments) : e,
                          o.extent
                        ),
                        s = Bh(c, f)
                      return c && f ? t : t(1)
                    })
                : t.each(function() {
                    var t = this,
                      a = arguments,
                      o = t.__brush,
                      u = n.input(
                        'function' == typeof e ? e.apply(t, a) : e,
                        o.extent
                      ),
                      c = i(t, a).beforestart()
                    Nd(t),
                      (o.selection = null == u || Pe(u) ? null : u),
                      r.call(t),
                      c
                        .start()
                        .brush()
                        .end()
                  })
            }),
            (a.prototype = {
              beforestart: function() {
                return (
                  1 == ++this.active &&
                    ((this.state.emitter = this), (this.starting = !0)),
                  this
                )
              },
              start: function() {
                return (
                  this.starting && ((this.starting = !1), this.emit('start')),
                  this
                )
              },
              brush: function() {
                return this.emit('brush'), this
              },
              end: function() {
                return (
                  0 == --this.active &&
                    (delete this.state.emitter, this.emit('end')),
                  this
                )
              },
              emit: function(t) {
                C(new xp(e, t, n.output(this.state.selection)), l.apply, l, [
                  t,
                  this.that,
                  this.args,
                ])
              },
            }),
            (e.extent = function(t) {
              return arguments.length
                ? ((f =
                    'function' == typeof t
                      ? t
                      : mp([[+t[0][0], +t[0][1]], [+t[1][0], +t[1][1]]])),
                  e)
                : f
            }),
            (e.filter = function(t) {
              return arguments.length
                ? ((s = 'function' == typeof t ? t : mp(!!t)), e)
                : s
            }),
            (e.handleSize = function(t) {
              return arguments.length ? ((h = +t), e) : h
            }),
            (e.on = function() {
              var t = l.on.apply(l, arguments)
              return t === l ? e : t
            }),
            e
          )
        }
        function Oe(t) {
          return function(n, e) {
            return t(
              n.source.value + n.target.value,
              e.source.value + e.target.value
            )
          }
        }
        function Ue() {
          ;(this._x0 = this._y0 = this._x1 = this._y1 = null), (this._ = '')
        }
        function De() {
          return new Ue()
        }
        function Ye(t) {
          return t.source
        }
        function Ie(t) {
          return t.target
        }
        function Fe(t) {
          return t.radius
        }
        function Be(t) {
          return t.startAngle
        }
        function je(t) {
          return t.endAngle
        }
        function Xe() {}
        function He(t, n) {
          var e = new Xe()
          if (t instanceof Xe)
            t.each(function(t, n) {
              e.set(n, t)
            })
          else if (Array.isArray(t)) {
            var r,
              i = -1,
              a = t.length
            if (null == n) for (; ++i < a; ) e.set(i, t[i])
            else for (; ++i < a; ) e.set(n((r = t[i]), i, t), r)
          } else if (t) for (var o in t) e.set(o, t[o])
          return e
        }
        function Ge() {
          return {}
        }
        function Ve(t, n, e) {
          t[n] = e
        }
        function $e() {
          return He()
        }
        function We(t, n, e) {
          t.set(n, e)
        }
        function Ze() {}
        function Qe(t, n) {
          var e = new Ze()
          if (t instanceof Ze)
            t.each(function(t) {
              e.add(t)
            })
          else if (t) {
            var r = -1,
              i = t.length
            if (null == n) for (; ++r < i; ) e.add(t[r])
            else for (; ++r < i; ) e.add(n(t[r], r, t))
          }
          return e
        }
        function Je(t) {
          return new Function(
            'd',
            'return {' +
              t
                .map(function(t, n) {
                  return JSON.stringify(t) + ': d[' + n + ']'
                })
                .join(',') +
              '}'
          )
        }
        function Ke(t, n) {
          var e = Je(t)
          return function(r, i) {
            return n(e(r), i, t)
          }
        }
        function tr(t) {
          var n = Object.create(null),
            e = []
          return (
            t.forEach(function(t) {
              for (var r in t) r in n || e.push((n[r] = r))
            }),
            e
          )
        }
        function nr(t, n, e, r) {
          if (isNaN(n) || isNaN(e)) return t
          var i,
            a,
            o,
            u,
            c,
            f,
            s,
            l,
            h,
            d = t._root,
            p = { data: r },
            v = t._x0,
            g = t._y0,
            b = t._x1,
            y = t._y1
          if (!d) return (t._root = p), t
          for (; d.length; )
            if (
              ((f = n >= (a = (v + b) / 2)) ? (v = a) : (b = a),
              (s = e >= (o = (g + y) / 2)) ? (g = o) : (y = o),
              (i = d),
              !(d = d[(l = (s << 1) | f)]))
            )
              return (i[l] = p), t
          if (
            ((u = +t._x.call(null, d.data)),
            (c = +t._y.call(null, d.data)),
            n === u && e === c)
          )
            return (p.next = d), i ? (i[l] = p) : (t._root = p), t
          do {
            ;(i = i ? (i[l] = new Array(4)) : (t._root = new Array(4))),
              (f = n >= (a = (v + b) / 2)) ? (v = a) : (b = a),
              (s = e >= (o = (g + y) / 2)) ? (g = o) : (y = o)
          } while ((l = (s << 1) | f) == (h = ((c >= o) << 1) | (u >= a)))
          return (i[h] = d), (i[l] = p), t
        }
        function er(t) {
          var n,
            e,
            r,
            i,
            a = t.length,
            o = new Array(a),
            u = new Array(a),
            c = 1 / 0,
            f = 1 / 0,
            s = -1 / 0,
            l = -1 / 0
          for (e = 0; e < a; ++e)
            isNaN((r = +this._x.call(null, (n = t[e])))) ||
              isNaN((i = +this._y.call(null, n))) ||
              ((o[e] = r),
              (u[e] = i),
              r < c && (c = r),
              r > s && (s = r),
              i < f && (f = i),
              i > l && (l = i))
          for (
            s < c && ((c = this._x0), (s = this._x1)),
              l < f && ((f = this._y0), (l = this._y1)),
              this.cover(c, f).cover(s, l),
              e = 0;
            e < a;
            ++e
          )
            nr(this, o[e], u[e], t[e])
          return this
        }
        function rr(t) {
          for (var n = 0, e = t.length; n < e; ++n) this.remove(t[n])
          return this
        }
        function ir(t) {
          return t[0]
        }
        function ar(t) {
          return t[1]
        }
        function or(t, n, e) {
          var r = new ur(
            null == n ? ir : n,
            null == e ? ar : e,
            NaN,
            NaN,
            NaN,
            NaN
          )
          return null == t ? r : r.addAll(t)
        }
        function ur(t, n, e, r, i, a) {
          ;(this._x = t),
            (this._y = n),
            (this._x0 = e),
            (this._y0 = r),
            (this._x1 = i),
            (this._y1 = a),
            (this._root = void 0)
        }
        function cr(t) {
          for (var n = { data: t.data }, e = n; (t = t.next); )
            e = e.next = { data: t.data }
          return n
        }
        function fr(t) {
          return t.x + t.vx
        }
        function sr(t) {
          return t.y + t.vy
        }
        function lr(t) {
          return t.index
        }
        function hr(t, n) {
          var e = t.get(n)
          if (!e) throw new Error('missing: ' + n)
          return e
        }
        function dr(t) {
          return t.x
        }
        function pr(t) {
          return t.y
        }
        function vr(t) {
          return new gr(t)
        }
        function gr(t) {
          if (!(n = Hv.exec(t))) throw new Error('invalid format: ' + t)
          var n,
            e = n[1] || ' ',
            r = n[2] || '>',
            i = n[3] || '-',
            a = n[4] || '',
            o = !!n[5],
            u = n[6] && +n[6],
            c = !!n[7],
            f = n[8] && +n[8].slice(1),
            s = n[9] || ''
          'n' === s ? ((c = !0), (s = 'g')) : Xv[s] || (s = ''),
            (o || ('0' === e && '=' === r)) && ((o = !0), (e = '0'), (r = '=')),
            (this.fill = e),
            (this.align = r),
            (this.sign = i),
            (this.symbol = a),
            (this.zero = o),
            (this.width = u),
            (this.comma = c),
            (this.precision = f),
            (this.type = s)
        }
        function br(n) {
          return (
            (Gv = Wv(n)),
            (t.format = Gv.format),
            (t.formatPrefix = Gv.formatPrefix),
            Gv
          )
        }
        function yr() {
          this.reset()
        }
        function _r(t, n, e) {
          var r = (t.s = n + e),
            i = r - n,
            a = r - i
          t.t = n - a + (e - i)
        }
        function mr(t) {
          return t > 1 ? 0 : t < -1 ? zg : Math.acos(t)
        }
        function xr(t) {
          return t > 1 ? Lg : t < -1 ? -Lg : Math.asin(t)
        }
        function wr(t) {
          return (t = Vg(t / 2)) * t
        }
        function Mr() {}
        function kr(t, n) {
          t && Jg.hasOwnProperty(t.type) && Jg[t.type](t, n)
        }
        function Nr(t, n, e) {
          var r,
            i = -1,
            a = t.length - e
          for (n.lineStart(); ++i < a; ) (r = t[i]), n.point(r[0], r[1], r[2])
          n.lineEnd()
        }
        function Sr(t, n) {
          var e = -1,
            r = t.length
          for (n.polygonStart(); ++e < r; ) Nr(t[e], n, 1)
          n.polygonEnd()
        }
        function Ar() {
          eb.point = Er
        }
        function Tr() {
          Cr(tg, ng)
        }
        function Er(t, n) {
          ;(eb.point = Cr),
            (tg = t),
            (ng = n),
            (t *= Dg),
            (n *= Dg),
            (eg = t),
            (rg = Bg((n = n / 2 + qg))),
            (ig = Vg(n))
        }
        function Cr(t, n) {
          ;(t *= Dg), (n *= Dg), (n = n / 2 + qg)
          var e = t - eg,
            r = e >= 0 ? 1 : -1,
            i = r * e,
            a = Bg(n),
            o = Vg(n),
            u = ig * o,
            c = rg * a + u * Bg(i),
            f = u * r * Vg(i)
          tb.add(Fg(f, c)), (eg = t), (rg = a), (ig = o)
        }
        function Pr(t) {
          return [Fg(t[1], t[0]), xr(t[2])]
        }
        function Rr(t) {
          var n = t[0],
            e = t[1],
            r = Bg(e)
          return [r * Bg(n), r * Vg(n), Vg(e)]
        }
        function zr(t, n) {
          return t[0] * n[0] + t[1] * n[1] + t[2] * n[2]
        }
        function Lr(t, n) {
          return [
            t[1] * n[2] - t[2] * n[1],
            t[2] * n[0] - t[0] * n[2],
            t[0] * n[1] - t[1] * n[0],
          ]
        }
        function qr(t, n) {
          ;(t[0] += n[0]), (t[1] += n[1]), (t[2] += n[2])
        }
        function Or(t, n) {
          return [t[0] * n, t[1] * n, t[2] * n]
        }
        function Ur(t) {
          var n = Wg(t[0] * t[0] + t[1] * t[1] + t[2] * t[2])
          ;(t[0] /= n), (t[1] /= n), (t[2] /= n)
        }
        function Dr(t, n) {
          dg.push((pg = [(ag = t), (ug = t)])),
            n < og && (og = n),
            n > cg && (cg = n)
        }
        function Yr(t, n) {
          var e = Rr([t * Dg, n * Dg])
          if (hg) {
            var r = Lr(hg, e),
              i = [r[1], -r[0], 0],
              a = Lr(i, r)
            Ur(a), (a = Pr(a))
            var o,
              u = t - fg,
              c = u > 0 ? 1 : -1,
              f = a[0] * Ug * c,
              s = Yg(u) > 180
            s ^ (c * fg < f && f < c * t)
              ? (o = a[1] * Ug) > cg && (cg = o)
              : ((f = ((f + 360) % 360) - 180),
                s ^ (c * fg < f && f < c * t)
                  ? (o = -a[1] * Ug) < og && (og = o)
                  : (n < og && (og = n), n > cg && (cg = n))),
              s
                ? t < fg
                  ? Hr(ag, t) > Hr(ag, ug) && (ug = t)
                  : Hr(t, ug) > Hr(ag, ug) && (ag = t)
                : ug >= ag
                ? (t < ag && (ag = t), t > ug && (ug = t))
                : t > fg
                ? Hr(ag, t) > Hr(ag, ug) && (ug = t)
                : Hr(t, ug) > Hr(ag, ug) && (ag = t)
          } else dg.push((pg = [(ag = t), (ug = t)]))
          n < og && (og = n), n > cg && (cg = n), (hg = e), (fg = t)
        }
        function Ir() {
          ab.point = Yr
        }
        function Fr() {
          ;(pg[0] = ag), (pg[1] = ug), (ab.point = Dr), (hg = null)
        }
        function Br(t, n) {
          if (hg) {
            var e = t - fg
            ib.add(Yg(e) > 180 ? e + (e > 0 ? 360 : -360) : e)
          } else (sg = t), (lg = n)
          eb.point(t, n), Yr(t, n)
        }
        function jr() {
          eb.lineStart()
        }
        function Xr() {
          Br(sg, lg),
            eb.lineEnd(),
            Yg(ib) > Rg && (ag = -(ug = 180)),
            (pg[0] = ag),
            (pg[1] = ug),
            (hg = null)
        }
        function Hr(t, n) {
          return (n -= t) < 0 ? n + 360 : n
        }
        function Gr(t, n) {
          return t[0] - n[0]
        }
        function Vr(t, n) {
          return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n
        }
        function $r(t, n) {
          ;(t *= Dg), (n *= Dg)
          var e = Bg(n)
          Wr(e * Bg(t), e * Vg(t), Vg(n))
        }
        function Wr(t, n, e) {
          ++vg,
            (bg += (t - bg) / vg),
            (yg += (n - yg) / vg),
            (_g += (e - _g) / vg)
        }
        function Zr() {
          ub.point = Qr
        }
        function Qr(t, n) {
          ;(t *= Dg), (n *= Dg)
          var e = Bg(n)
          ;(Tg = e * Bg(t)),
            (Eg = e * Vg(t)),
            (Cg = Vg(n)),
            (ub.point = Jr),
            Wr(Tg, Eg, Cg)
        }
        function Jr(t, n) {
          ;(t *= Dg), (n *= Dg)
          var e = Bg(n),
            r = e * Bg(t),
            i = e * Vg(t),
            a = Vg(n),
            o = Fg(
              Wg(
                (o = Eg * a - Cg * i) * o +
                  (o = Cg * r - Tg * a) * o +
                  (o = Tg * i - Eg * r) * o
              ),
              Tg * r + Eg * i + Cg * a
            )
          ;(gg += o),
            (mg += o * (Tg + (Tg = r))),
            (xg += o * (Eg + (Eg = i))),
            (wg += o * (Cg + (Cg = a))),
            Wr(Tg, Eg, Cg)
        }
        function Kr() {
          ub.point = $r
        }
        function ti() {
          ub.point = ei
        }
        function ni() {
          ri(Sg, Ag), (ub.point = $r)
        }
        function ei(t, n) {
          ;(Sg = t), (Ag = n), (t *= Dg), (n *= Dg), (ub.point = ri)
          var e = Bg(n)
          ;(Tg = e * Bg(t)), (Eg = e * Vg(t)), (Cg = Vg(n)), Wr(Tg, Eg, Cg)
        }
        function ri(t, n) {
          ;(t *= Dg), (n *= Dg)
          var e = Bg(n),
            r = e * Bg(t),
            i = e * Vg(t),
            a = Vg(n),
            o = Eg * a - Cg * i,
            u = Cg * r - Tg * a,
            c = Tg * i - Eg * r,
            f = Wg(o * o + u * u + c * c),
            s = xr(f),
            l = f && -s / f
          ;(Mg += l * o),
            (kg += l * u),
            (Ng += l * c),
            (gg += s),
            (mg += s * (Tg + (Tg = r))),
            (xg += s * (Eg + (Eg = i))),
            (wg += s * (Cg + (Cg = a))),
            Wr(Tg, Eg, Cg)
        }
        function ii(t, n) {
          return [t > zg ? t - Og : t < -zg ? t + Og : t, n]
        }
        function ai(t, n, e) {
          return (t %= Og)
            ? n || e
              ? sb(ui(t), ci(n, e))
              : ui(t)
            : n || e
            ? ci(n, e)
            : ii
        }
        function oi(t) {
          return function(n, e) {
            return (n += t), [n > zg ? n - Og : n < -zg ? n + Og : n, e]
          }
        }
        function ui(t) {
          var n = oi(t)
          return (n.invert = oi(-t)), n
        }
        function ci(t, n) {
          function e(t, n) {
            var e = Bg(n),
              u = Bg(t) * e,
              c = Vg(t) * e,
              f = Vg(n),
              s = f * r + u * i
            return [Fg(c * a - s * o, u * r - f * i), xr(s * a + c * o)]
          }
          var r = Bg(t),
            i = Vg(t),
            a = Bg(n),
            o = Vg(n)
          return (
            (e.invert = function(t, n) {
              var e = Bg(n),
                u = Bg(t) * e,
                c = Vg(t) * e,
                f = Vg(n),
                s = f * a - c * o
              return [Fg(c * a + f * o, u * r + s * i), xr(s * r - u * i)]
            }),
            e
          )
        }
        function fi(t, n, e, r, i, a) {
          if (e) {
            var o = Bg(n),
              u = Vg(n),
              c = r * e
            null == i
              ? ((i = n + r * Og), (a = n - c / 2))
              : ((i = si(o, i)),
                (a = si(o, a)),
                (r > 0 ? i < a : i > a) && (i += r * Og))
            for (var f, s = i; r > 0 ? s > a : s < a; s -= c)
              (f = Pr([o, -u * Bg(s), -u * Vg(s)])), t.point(f[0], f[1])
          }
        }
        function si(t, n) {
          ;(n = Rr(n)), (n[0] -= t), Ur(n)
          var e = mr(-n[1])
          return ((-n[2] < 0 ? -e : e) + Og - Rg) % Og
        }
        function li(t, n, e, r) {
          ;(this.x = t),
            (this.z = n),
            (this.o = e),
            (this.e = r),
            (this.v = !1),
            (this.n = this.p = null)
        }
        function hi(t) {
          if ((n = t.length)) {
            for (var n, e, r = 0, i = t[0]; ++r < n; )
              (i.n = e = t[r]), (e.p = i), (i = e)
            ;(i.n = e = t[0]), (e.p = i)
          }
        }
        function di(t, n, e, r) {
          function i(i, a) {
            return t <= i && i <= e && n <= a && a <= r
          }
          function a(i, a, u, f) {
            var s = 0,
              l = 0
            if (
              null == i ||
              (s = o(i, u)) !== (l = o(a, u)) ||
              (c(i, a) < 0) ^ (u > 0)
            )
              do {
                f.point(0 === s || 3 === s ? t : e, s > 1 ? r : n)
              } while ((s = (s + u + 4) % 4) !== l)
            else f.point(a[0], a[1])
          }
          function o(r, i) {
            return Yg(r[0] - t) < Rg
              ? i > 0
                ? 0
                : 3
              : Yg(r[0] - e) < Rg
              ? i > 0
                ? 2
                : 1
              : Yg(r[1] - n) < Rg
              ? i > 0
                ? 1
                : 0
              : i > 0
              ? 3
              : 2
          }
          function u(t, n) {
            return c(t.x, n.x)
          }
          function c(t, n) {
            var e = o(t, 1),
              r = o(n, 1)
            return e !== r
              ? e - r
              : 0 === e
              ? n[1] - t[1]
              : 1 === e
              ? t[0] - n[0]
              : 2 === e
              ? t[1] - n[1]
              : n[0] - t[0]
          }
          return function(o) {
            function c(t, n) {
              i(t, n) && S.point(t, n)
            }
            function f() {
              for (var n = 0, e = 0, i = g.length; e < i; ++e)
                for (
                  var a,
                    o,
                    u = g[e],
                    c = 1,
                    f = u.length,
                    s = u[0],
                    l = s[0],
                    h = s[1];
                  c < f;
                  ++c
                )
                  (a = l),
                    (o = h),
                    (s = u[c]),
                    (l = s[0]),
                    (h = s[1]),
                    o <= r
                      ? h > r && (l - a) * (r - o) > (h - o) * (t - a) && ++n
                      : h <= r && (l - a) * (r - o) < (h - o) * (t - a) && --n
              return n
            }
            function s() {
              ;(S = A), (v = []), (g = []), (N = !0)
            }
            function l() {
              var t = f(),
                n = N && t,
                e = (v = Ts(v)).length
              ;(n || e) &&
                (o.polygonStart(),
                n && (o.lineStart(), a(null, null, 1, o), o.lineEnd()),
                e && Ab(v, u, t, a, o),
                o.polygonEnd()),
                (S = o),
                (v = g = b = null)
            }
            function h() {
              ;(T.point = p),
                g && g.push((b = [])),
                (k = !0),
                (M = !1),
                (x = w = NaN)
            }
            function d() {
              v && (p(y, _), m && M && A.rejoin(), v.push(A.result())),
                (T.point = c),
                M && S.lineEnd()
            }
            function p(a, o) {
              var u = i(a, o)
              if ((g && b.push([a, o]), k))
                (y = a),
                  (_ = o),
                  (m = u),
                  (k = !1),
                  u && (S.lineStart(), S.point(a, o))
              else if (u && M) S.point(a, o)
              else {
                var c = [
                    (x = Math.max(Eb, Math.min(Tb, x))),
                    (w = Math.max(Eb, Math.min(Tb, w))),
                  ],
                  f = [
                    (a = Math.max(Eb, Math.min(Tb, a))),
                    (o = Math.max(Eb, Math.min(Tb, o))),
                  ]
                Nb(c, f, t, n, e, r)
                  ? (M || (S.lineStart(), S.point(c[0], c[1])),
                    S.point(f[0], f[1]),
                    u || S.lineEnd(),
                    (N = !1))
                  : u && (S.lineStart(), S.point(a, o), (N = !1))
              }
              ;(x = a), (w = o), (M = u)
            }
            var v,
              g,
              b,
              y,
              _,
              m,
              x,
              w,
              M,
              k,
              N,
              S = o,
              A = kb(),
              T = {
                point: c,
                lineStart: h,
                lineEnd: d,
                polygonStart: s,
                polygonEnd: l,
              }
            return T
          }
        }
        function pi() {
          ;(Lb.point = gi), (Lb.lineEnd = vi)
        }
        function vi() {
          Lb.point = Lb.lineEnd = Mr
        }
        function gi(t, n) {
          ;(t *= Dg),
            (n *= Dg),
            (lb = t),
            (hb = Vg(n)),
            (db = Bg(n)),
            (Lb.point = bi)
        }
        function bi(t, n) {
          ;(t *= Dg), (n *= Dg)
          var e = Vg(n),
            r = Bg(n),
            i = Yg(t - lb),
            a = Bg(i),
            o = Vg(i),
            u = r * o,
            c = db * e - hb * r * a,
            f = hb * e + db * r * a
          zb.add(Fg(Wg(u * u + c * c), f)), (lb = t), (hb = e), (db = r)
        }
        function yi(t, n) {
          return !(!t || !Ib.hasOwnProperty(t.type)) && Ib[t.type](t, n)
        }
        function _i(t, n) {
          return 0 === Db(t, n)
        }
        function mi(t, n) {
          var e = Db(t[0], t[1])
          return Db(t[0], n) + Db(n, t[1]) <= e + Rg
        }
        function xi(t, n) {
          return !!Rb(t.map(wi), Mi(n))
        }
        function wi(t) {
          return (t = t.map(Mi)), t.pop(), t
        }
        function Mi(t) {
          return [t[0] * Dg, t[1] * Dg]
        }
        function ki(t, n, e) {
          var r = vs(t, n - Rg, e).concat(n)
          return function(t) {
            return r.map(function(n) {
              return [t, n]
            })
          }
        }
        function Ni(t, n, e) {
          var r = vs(t, n - Rg, e).concat(n)
          return function(t) {
            return r.map(function(n) {
              return [n, t]
            })
          }
        }
        function Si() {
          function t() {
            return { type: 'MultiLineString', coordinates: n() }
          }
          function n() {
            return vs(jg(a / g) * g, i, g)
              .map(h)
              .concat(vs(jg(f / b) * b, c, b).map(d))
              .concat(
                vs(jg(r / p) * p, e, p)
                  .filter(function(t) {
                    return Yg(t % g) > Rg
                  })
                  .map(s)
              )
              .concat(
                vs(jg(u / v) * v, o, v)
                  .filter(function(t) {
                    return Yg(t % b) > Rg
                  })
                  .map(l)
              )
          }
          var e,
            r,
            i,
            a,
            o,
            u,
            c,
            f,
            s,
            l,
            h,
            d,
            p = 10,
            v = p,
            g = 90,
            b = 360,
            y = 2.5
          return (
            (t.lines = function() {
              return n().map(function(t) {
                return { type: 'LineString', coordinates: t }
              })
            }),
            (t.outline = function() {
              return {
                type: 'Polygon',
                coordinates: [
                  h(a).concat(
                    d(c).slice(1),
                    h(i)
                      .reverse()
                      .slice(1),
                    d(f)
                      .reverse()
                      .slice(1)
                  ),
                ],
              }
            }),
            (t.extent = function(n) {
              return arguments.length
                ? t.extentMajor(n).extentMinor(n)
                : t.extentMinor()
            }),
            (t.extentMajor = function(n) {
              return arguments.length
                ? ((a = +n[0][0]),
                  (i = +n[1][0]),
                  (f = +n[0][1]),
                  (c = +n[1][1]),
                  a > i && ((n = a), (a = i), (i = n)),
                  f > c && ((n = f), (f = c), (c = n)),
                  t.precision(y))
                : [[a, f], [i, c]]
            }),
            (t.extentMinor = function(n) {
              return arguments.length
                ? ((r = +n[0][0]),
                  (e = +n[1][0]),
                  (u = +n[0][1]),
                  (o = +n[1][1]),
                  r > e && ((n = r), (r = e), (e = n)),
                  u > o && ((n = u), (u = o), (o = n)),
                  t.precision(y))
                : [[r, u], [e, o]]
            }),
            (t.step = function(n) {
              return arguments.length
                ? t.stepMajor(n).stepMinor(n)
                : t.stepMinor()
            }),
            (t.stepMajor = function(n) {
              return arguments.length ? ((g = +n[0]), (b = +n[1]), t) : [g, b]
            }),
            (t.stepMinor = function(n) {
              return arguments.length ? ((p = +n[0]), (v = +n[1]), t) : [p, v]
            }),
            (t.precision = function(n) {
              return arguments.length
                ? ((y = +n),
                  (s = ki(u, o, 90)),
                  (l = Ni(r, e, y)),
                  (h = ki(f, c, 90)),
                  (d = Ni(a, i, y)),
                  t)
                : y
            }),
            t
              .extentMajor([[-180, -90 + Rg], [180, 90 - Rg]])
              .extentMinor([[-180, -80 - Rg], [180, 80 + Rg]])
          )
        }
        function Ai() {
          return Si()()
        }
        function Ti() {
          Gb.point = Ei
        }
        function Ei(t, n) {
          ;(Gb.point = Ci), (pb = gb = t), (vb = bb = n)
        }
        function Ci(t, n) {
          Hb.add(bb * t - gb * n), (gb = t), (bb = n)
        }
        function Pi() {
          Ci(pb, vb)
        }
        function Ri(t, n) {
          t < Vb && (Vb = t),
            t > Wb && (Wb = t),
            n < $b && ($b = n),
            n > Zb && (Zb = n)
        }
        function zi(t, n) {
          ;(Jb += t), (Kb += n), ++ty
        }
        function Li() {
          uy.point = qi
        }
        function qi(t, n) {
          ;(uy.point = Oi), zi((mb = t), (xb = n))
        }
        function Oi(t, n) {
          var e = t - mb,
            r = n - xb,
            i = Wg(e * e + r * r)
          ;(ny += (i * (mb + t)) / 2),
            (ey += (i * (xb + n)) / 2),
            (ry += i),
            zi((mb = t), (xb = n))
        }
        function Ui() {
          uy.point = zi
        }
        function Di() {
          uy.point = Ii
        }
        function Yi() {
          Fi(yb, _b)
        }
        function Ii(t, n) {
          ;(uy.point = Fi), zi((yb = mb = t), (_b = xb = n))
        }
        function Fi(t, n) {
          var e = t - mb,
            r = n - xb,
            i = Wg(e * e + r * r)
          ;(ny += (i * (mb + t)) / 2),
            (ey += (i * (xb + n)) / 2),
            (ry += i),
            (i = xb * t - mb * n),
            (iy += i * (mb + t)),
            (ay += i * (xb + n)),
            (oy += 3 * i),
            zi((mb = t), (xb = n))
        }
        function Bi(t) {
          this._context = t
        }
        function ji(t, n) {
          ;(py.point = Xi), (fy = ly = t), (sy = hy = n)
        }
        function Xi(t, n) {
          ;(ly -= t),
            (hy -= n),
            dy.add(Wg(ly * ly + hy * hy)),
            (ly = t),
            (hy = n)
        }
        function Hi() {
          this._string = []
        }
        function Gi(t) {
          return (
            'm0,' +
            t +
            'a' +
            t +
            ',' +
            t +
            ' 0 1,1 0,' +
            -2 * t +
            'a' +
            t +
            ',' +
            t +
            ' 0 1,1 0,' +
            2 * t +
            'z'
          )
        }
        function Vi(t) {
          return t.length > 1
        }
        function $i(t, n) {
          return (
            ((t = t.x)[0] < 0 ? t[1] - Lg - Rg : Lg - t[1]) -
            ((n = n.x)[0] < 0 ? n[1] - Lg - Rg : Lg - n[1])
          )
        }
        function Wi(t) {
          var n,
            e = NaN,
            r = NaN,
            i = NaN
          return {
            lineStart: function() {
              t.lineStart(), (n = 1)
            },
            point: function(a, o) {
              var u = a > 0 ? zg : -zg,
                c = Yg(a - e)
              Yg(c - zg) < Rg
                ? (t.point(e, (r = (r + o) / 2 > 0 ? Lg : -Lg)),
                  t.point(i, r),
                  t.lineEnd(),
                  t.lineStart(),
                  t.point(u, r),
                  t.point(a, r),
                  (n = 0))
                : i !== u &&
                  c >= zg &&
                  (Yg(e - i) < Rg && (e -= i * Rg),
                  Yg(a - u) < Rg && (a -= u * Rg),
                  (r = Zi(e, r, a, o)),
                  t.point(i, r),
                  t.lineEnd(),
                  t.lineStart(),
                  t.point(u, r),
                  (n = 0)),
                t.point((e = a), (r = o)),
                (i = u)
            },
            lineEnd: function() {
              t.lineEnd(), (e = r = NaN)
            },
            clean: function() {
              return 2 - n
            },
          }
        }
        function Zi(t, n, e, r) {
          var i,
            a,
            o = Vg(t - e)
          return Yg(o) > Rg
            ? Ig(
                (Vg(n) * (a = Bg(r)) * Vg(e) - Vg(r) * (i = Bg(n)) * Vg(t)) /
                  (i * a * o)
              )
            : (n + r) / 2
        }
        function Qi(t, n, e, r) {
          var i
          if (null == t)
            (i = e * Lg),
              r.point(-zg, i),
              r.point(0, i),
              r.point(zg, i),
              r.point(zg, 0),
              r.point(zg, -i),
              r.point(0, -i),
              r.point(-zg, -i),
              r.point(-zg, 0),
              r.point(-zg, i)
          else if (Yg(t[0] - n[0]) > Rg) {
            var a = t[0] < n[0] ? zg : -zg
            ;(i = (e * a) / 2), r.point(-a, i), r.point(0, i), r.point(a, i)
          } else r.point(n[0], n[1])
        }
        function Ji(t) {
          return function(n) {
            var e = new Ki()
            for (var r in t) e[r] = t[r]
            return (e.stream = n), e
          }
        }
        function Ki() {}
        function ta(t, n, e) {
          var r = n[1][0] - n[0][0],
            i = n[1][1] - n[0][1],
            a = t.clipExtent && t.clipExtent()
          t.scale(150).translate([0, 0]),
            null != a && t.clipExtent(null),
            Kg(e, t.stream(Qb))
          var o = Qb.result(),
            u = Math.min(r / (o[1][0] - o[0][0]), i / (o[1][1] - o[0][1])),
            c = +n[0][0] + (r - u * (o[1][0] + o[0][0])) / 2,
            f = +n[0][1] + (i - u * (o[1][1] + o[0][1])) / 2
          return (
            null != a && t.clipExtent(a), t.scale(150 * u).translate([c, f])
          )
        }
        function na(t, n, e) {
          return ta(t, [[0, 0], n], e)
        }
        function ea(t) {
          return Ji({
            point: function(n, e) {
              ;(n = t(n, e)), this.stream.point(n[0], n[1])
            },
          })
        }
        function ra(t, n) {
          function e(r, i, a, o, u, c, f, s, l, h, d, p, v, g) {
            var b = f - r,
              y = s - i,
              _ = b * b + y * y
            if (_ > 4 * n && v--) {
              var m = o + h,
                x = u + d,
                w = c + p,
                M = Wg(m * m + x * x + w * w),
                k = xr((w /= M)),
                N =
                  Yg(Yg(w) - 1) < Rg || Yg(a - l) < Rg ? (a + l) / 2 : Fg(x, m),
                S = t(N, k),
                A = S[0],
                T = S[1],
                E = A - r,
                C = T - i,
                P = y * E - b * C
              ;((P * P) / _ > n ||
                Yg((b * E + y * C) / _ - 0.5) > 0.3 ||
                o * h + u * d + c * p < xy) &&
                (e(r, i, a, o, u, c, A, T, N, (m /= M), (x /= M), w, v, g),
                g.point(A, T),
                e(A, T, N, m, x, w, f, s, l, h, d, p, v, g))
            }
          }
          return function(n) {
            function r(e, r) {
              ;(e = t(e, r)), n.point(e[0], e[1])
            }
            function i() {
              ;(b = NaN), (w.point = a), n.lineStart()
            }
            function a(r, i) {
              var a = Rr([r, i]),
                o = t(r, i)
              e(
                b,
                y,
                g,
                _,
                m,
                x,
                (b = o[0]),
                (y = o[1]),
                (g = r),
                (_ = a[0]),
                (m = a[1]),
                (x = a[2]),
                my,
                n
              ),
                n.point(b, y)
            }
            function o() {
              ;(w.point = r), n.lineEnd()
            }
            function u() {
              i(), (w.point = c), (w.lineEnd = f)
            }
            function c(t, n) {
              a((s = t), n),
                (l = b),
                (h = y),
                (d = _),
                (p = m),
                (v = x),
                (w.point = a)
            }
            function f() {
              e(b, y, g, _, m, x, l, h, s, d, p, v, my, n), (w.lineEnd = o), o()
            }
            var s,
              l,
              h,
              d,
              p,
              v,
              g,
              b,
              y,
              _,
              m,
              x,
              w = {
                point: r,
                lineStart: i,
                lineEnd: o,
                polygonStart: function() {
                  n.polygonStart(), (w.lineStart = u)
                },
                polygonEnd: function() {
                  n.polygonEnd(), (w.lineStart = i)
                },
              }
            return w
          }
        }
        function ia(t) {
          return aa(function() {
            return t
          })()
        }
        function aa(t) {
          function n(t) {
            return (t = s(t[0] * Dg, t[1] * Dg)), [t[0] * g + u, c - t[1] * g]
          }
          function e(t) {
            return (
              (t = s.invert((t[0] - u) / g, (c - t[1]) / g)) && [
                t[0] * Ug,
                t[1] * Ug,
              ]
            )
          }
          function r(t, n) {
            return (t = o(t, n)), [t[0] * g + u, c - t[1] * g]
          }
          function i() {
            s = sb((f = ai(x, w, M)), o)
            var t = o(_, m)
            return (u = b - t[0] * g), (c = y + t[1] * g), a()
          }
          function a() {
            return (p = v = null), n
          }
          var o,
            u,
            c,
            f,
            s,
            l,
            h,
            d,
            p,
            v,
            g = 150,
            b = 480,
            y = 250,
            _ = 0,
            m = 0,
            x = 0,
            w = 0,
            M = 0,
            k = null,
            N = by,
            S = null,
            A = jb,
            T = 0.5,
            E = wy(r, T)
          return (
            (n.stream = function(t) {
              return p && v === t ? p : (p = My(N(f, E(A((v = t))))))
            }),
            (n.clipAngle = function(t) {
              return arguments.length
                ? ((N = +t ? yy((k = t * Dg), 6 * Dg) : ((k = null), by)), a())
                : k * Ug
            }),
            (n.clipExtent = function(t) {
              return arguments.length
                ? ((A =
                    null == t
                      ? ((S = l = h = d = null), jb)
                      : di(
                          (S = +t[0][0]),
                          (l = +t[0][1]),
                          (h = +t[1][0]),
                          (d = +t[1][1])
                        )),
                  a())
                : null == S
                ? null
                : [[S, l], [h, d]]
            }),
            (n.scale = function(t) {
              return arguments.length ? ((g = +t), i()) : g
            }),
            (n.translate = function(t) {
              return arguments.length ? ((b = +t[0]), (y = +t[1]), i()) : [b, y]
            }),
            (n.center = function(t) {
              return arguments.length
                ? ((_ = (t[0] % 360) * Dg), (m = (t[1] % 360) * Dg), i())
                : [_ * Ug, m * Ug]
            }),
            (n.rotate = function(t) {
              return arguments.length
                ? ((x = (t[0] % 360) * Dg),
                  (w = (t[1] % 360) * Dg),
                  (M = t.length > 2 ? (t[2] % 360) * Dg : 0),
                  i())
                : [x * Ug, w * Ug, M * Ug]
            }),
            (n.precision = function(t) {
              return arguments.length ? ((E = wy(r, (T = t * t))), a()) : Wg(T)
            }),
            (n.fitExtent = function(t, e) {
              return ta(n, t, e)
            }),
            (n.fitSize = function(t, e) {
              return na(n, t, e)
            }),
            function() {
              return (
                (o = t.apply(this, arguments)), (n.invert = o.invert && e), i()
              )
            }
          )
        }
        function oa(t) {
          var n = 0,
            e = zg / 3,
            r = aa(t),
            i = r(n, e)
          return (
            (i.parallels = function(t) {
              return arguments.length
                ? r((n = t[0] * Dg), (e = t[1] * Dg))
                : [n * Ug, e * Ug]
            }),
            i
          )
        }
        function ua(t) {
          function n(t, n) {
            return [t * e, Vg(n) / e]
          }
          var e = Bg(t)
          return (
            (n.invert = function(t, n) {
              return [t / e, xr(n * e)]
            }),
            n
          )
        }
        function ca(t, n) {
          function e(t, n) {
            var e = Wg(a - 2 * i * Vg(n)) / i
            return [e * Vg((t *= i)), o - e * Bg(t)]
          }
          var r = Vg(t),
            i = (r + Vg(n)) / 2
          if (Yg(i) < Rg) return ua(t)
          var a = 1 + r * (2 * i - r),
            o = Wg(a) / i
          return (
            (e.invert = function(t, n) {
              var e = o - n
              return [
                (Fg(t, Yg(e)) / i) * $g(e),
                xr((a - (t * t + e * e) * i * i) / (2 * i)),
              ]
            }),
            e
          )
        }
        function fa(t) {
          var n = t.length
          return {
            point: function(e, r) {
              for (var i = -1; ++i < n; ) t[i].point(e, r)
            },
            sphere: function() {
              for (var e = -1; ++e < n; ) t[e].sphere()
            },
            lineStart: function() {
              for (var e = -1; ++e < n; ) t[e].lineStart()
            },
            lineEnd: function() {
              for (var e = -1; ++e < n; ) t[e].lineEnd()
            },
            polygonStart: function() {
              for (var e = -1; ++e < n; ) t[e].polygonStart()
            },
            polygonEnd: function() {
              for (var e = -1; ++e < n; ) t[e].polygonEnd()
            },
          }
        }
        function sa(t) {
          return function(n, e) {
            var r = Bg(n),
              i = Bg(e),
              a = t(r * i)
            return [a * i * Vg(n), a * Vg(e)]
          }
        }
        function la(t) {
          return function(n, e) {
            var r = Wg(n * n + e * e),
              i = t(r),
              a = Vg(i),
              o = Bg(i)
            return [Fg(n * a, r * o), xr(r && (e * a) / r)]
          }
        }
        function ha(t, n) {
          return [t, Hg(Zg((Lg + n) / 2))]
        }
        function da(t) {
          function n() {
            var n = zg * u(),
              o = a(wb(a.rotate()).invert([0, 0]))
            return f(
              null == s
                ? [[o[0] - n, o[1] - n], [o[0] + n, o[1] + n]]
                : t === ha
                ? [[Math.max(o[0] - n, s), e], [Math.min(o[0] + n, r), i]]
                : [[s, Math.max(o[1] - n, e)], [r, Math.min(o[1] + n, i)]]
            )
          }
          var e,
            r,
            i,
            a = ia(t),
            o = a.center,
            u = a.scale,
            c = a.translate,
            f = a.clipExtent,
            s = null
          return (
            (a.scale = function(t) {
              return arguments.length ? (u(t), n()) : u()
            }),
            (a.translate = function(t) {
              return arguments.length ? (c(t), n()) : c()
            }),
            (a.center = function(t) {
              return arguments.length ? (o(t), n()) : o()
            }),
            (a.clipExtent = function(t) {
              return arguments.length
                ? (null == t
                    ? (s = e = r = i = null)
                    : ((s = +t[0][0]),
                      (e = +t[0][1]),
                      (r = +t[1][0]),
                      (i = +t[1][1])),
                  n())
                : null == s
                ? null
                : [[s, e], [r, i]]
            }),
            n()
          )
        }
        function pa(t) {
          return Zg((Lg + t) / 2)
        }
        function va(t, n) {
          function e(t, n) {
            a > 0
              ? n < -Lg + Rg && (n = -Lg + Rg)
              : n > Lg - Rg && (n = Lg - Rg)
            var e = a / Gg(pa(n), i)
            return [e * Vg(i * t), a - e * Bg(i * t)]
          }
          var r = Bg(t),
            i = t === n ? Vg(t) : Hg(r / Bg(n)) / Hg(pa(n) / pa(t)),
            a = (r * Gg(pa(t), i)) / i
          return i
            ? ((e.invert = function(t, n) {
                var e = a - n,
                  r = $g(i) * Wg(t * t + e * e)
                return [
                  (Fg(t, Yg(e)) / i) * $g(e),
                  2 * Ig(Gg(a / r, 1 / i)) - Lg,
                ]
              }),
              e)
            : ha
        }
        function ga(t, n) {
          return [t, n]
        }
        function ba(t, n) {
          function e(t, n) {
            var e = a - n,
              r = i * t
            return [e * Vg(r), a - e * Bg(r)]
          }
          var r = Bg(t),
            i = t === n ? Vg(t) : (r - Bg(n)) / (n - t),
            a = r / i + t
          return Yg(i) < Rg
            ? ga
            : ((e.invert = function(t, n) {
                var e = a - n
                return [
                  (Fg(t, Yg(e)) / i) * $g(e),
                  a - $g(i) * Wg(t * t + e * e),
                ]
              }),
              e)
        }
        function ya(t, n) {
          var e = Bg(n),
            r = Bg(t) * e
          return [(e * Vg(t)) / r, Vg(n) / r]
        }
        function _a(t, n, e, r) {
          return 1 === t && 1 === n && 0 === e && 0 === r
            ? jb
            : Ji({
                point: function(i, a) {
                  this.stream.point(i * t + e, a * n + r)
                },
              })
        }
        function ma(t, n) {
          return [Bg(n) * Vg(t), Vg(n)]
        }
        function xa(t, n) {
          var e = Bg(n),
            r = 1 + Bg(t) * e
          return [(e * Vg(t)) / r, Vg(n) / r]
        }
        function wa(t, n) {
          return [Hg(Zg((Lg + n) / 2)), -t]
        }
        function Ma(t, n) {
          return t.parent === n.parent ? 1 : 2
        }
        function ka(t) {
          return t.reduce(Na, 0) / t.length
        }
        function Na(t, n) {
          return t + n.x
        }
        function Sa(t) {
          return 1 + t.reduce(Aa, 0)
        }
        function Aa(t, n) {
          return Math.max(t, n.y)
        }
        function Ta(t) {
          for (var n; (n = t.children); ) t = n[0]
          return t
        }
        function Ea(t) {
          for (var n; (n = t.children); ) t = n[n.length - 1]
          return t
        }
        function Ca(t) {
          var n = 0,
            e = t.children,
            r = e && e.length
          if (r) for (; --r >= 0; ) n += e[r].value
          else n = 1
          t.value = n
        }
        function Pa(t, n) {
          if (t === n) return t
          var e = t.ancestors(),
            r = n.ancestors(),
            i = null
          for (t = e.pop(), n = r.pop(); t === n; )
            (i = t), (t = e.pop()), (n = r.pop())
          return i
        }
        function Ra(t, n) {
          var e,
            r,
            i,
            a,
            o,
            u = new Ua(t),
            c = +t.value && (u.value = t.value),
            f = [u]
          for (null == n && (n = La); (e = f.pop()); )
            if (
              (c && (e.value = +e.data.value),
              (i = n(e.data)) && (o = i.length))
            )
              for (e.children = new Array(o), a = o - 1; a >= 0; --a)
                f.push((r = e.children[a] = new Ua(i[a]))),
                  (r.parent = e),
                  (r.depth = e.depth + 1)
          return u.eachBefore(Oa)
        }
        function za() {
          return Ra(this).eachBefore(qa)
        }
        function La(t) {
          return t.children
        }
        function qa(t) {
          t.data = t.data.data
        }
        function Oa(t) {
          var n = 0
          do {
            t.height = n
          } while ((t = t.parent) && t.height < ++n)
        }
        function Ua(t) {
          ;(this.data = t), (this.depth = this.height = 0), (this.parent = null)
        }
        function Da(t) {
          for (var n, e, r = t.length; r; )
            (e = (Math.random() * r--) | 0),
              (n = t[r]),
              (t[r] = t[e]),
              (t[e] = n)
          return t
        }
        function Ya(t, n) {
          var e, r
          if (Ba(n, t)) return [n]
          for (e = 0; e < t.length; ++e)
            if (Ia(n, t[e]) && Ba(Ha(t[e], n), t)) return [t[e], n]
          for (e = 0; e < t.length - 1; ++e)
            for (r = e + 1; r < t.length; ++r)
              if (
                Ia(Ha(t[e], t[r]), n) &&
                Ia(Ha(t[e], n), t[r]) &&
                Ia(Ha(t[r], n), t[e]) &&
                Ba(Ga(t[e], t[r], n), t)
              )
                return [t[e], t[r], n]
          throw new Error()
        }
        function Ia(t, n) {
          var e = t.r - n.r,
            r = n.x - t.x,
            i = n.y - t.y
          return e < 0 || e * e < r * r + i * i
        }
        function Fa(t, n) {
          var e = t.r - n.r + 1e-6,
            r = n.x - t.x,
            i = n.y - t.y
          return e > 0 && e * e > r * r + i * i
        }
        function Ba(t, n) {
          for (var e = 0; e < n.length; ++e) if (!Fa(t, n[e])) return !1
          return !0
        }
        function ja(t) {
          switch (t.length) {
            case 1:
              return Xa(t[0])
            case 2:
              return Ha(t[0], t[1])
            case 3:
              return Ga(t[0], t[1], t[2])
          }
        }
        function Xa(t) {
          return { x: t.x, y: t.y, r: t.r }
        }
        function Ha(t, n) {
          var e = t.x,
            r = t.y,
            i = t.r,
            a = n.x,
            o = n.y,
            u = n.r,
            c = a - e,
            f = o - r,
            s = u - i,
            l = Math.sqrt(c * c + f * f)
          return {
            x: (e + a + (c / l) * s) / 2,
            y: (r + o + (f / l) * s) / 2,
            r: (l + i + u) / 2,
          }
        }
        function Ga(t, n, e) {
          var r = t.x,
            i = t.y,
            a = t.r,
            o = n.x,
            u = n.y,
            c = n.r,
            f = e.x,
            s = e.y,
            l = e.r,
            h = r - o,
            d = r - f,
            p = i - u,
            v = i - s,
            g = c - a,
            b = l - a,
            y = r * r + i * i - a * a,
            _ = y - o * o - u * u + c * c,
            m = y - f * f - s * s + l * l,
            x = d * p - h * v,
            w = (p * m - v * _) / (2 * x) - r,
            M = (v * g - p * b) / x,
            k = (d * _ - h * m) / (2 * x) - i,
            N = (h * b - d * g) / x,
            S = M * M + N * N - 1,
            A = 2 * (a + w * M + k * N),
            T = w * w + k * k - a * a,
            E = -(S ? (A + Math.sqrt(A * A - 4 * S * T)) / (2 * S) : T / A)
          return { x: r + w + M * E, y: i + k + N * E, r: E }
        }
        function Va(t, n, e) {
          var r = t.x,
            i = t.y,
            a = n.r + e.r,
            o = t.r + e.r,
            u = n.x - r,
            c = n.y - i,
            f = u * u + c * c
          if (f) {
            var s = 0.5 + ((o *= o) - (a *= a)) / (2 * f),
              l =
                Math.sqrt(Math.max(0, 2 * a * (o + f) - (o -= f) * o - a * a)) /
                (2 * f)
            ;(e.x = r + s * u + l * c), (e.y = i + s * c - l * u)
          } else (e.x = r + o), (e.y = i)
        }
        function $a(t, n) {
          var e = n.x - t.x,
            r = n.y - t.y,
            i = t.r + n.r
          return i * i - 1e-6 > e * e + r * r
        }
        function Wa(t) {
          var n = t._,
            e = t.next._,
            r = n.r + e.r,
            i = (n.x * e.r + e.x * n.r) / r,
            a = (n.y * e.r + e.y * n.r) / r
          return i * i + a * a
        }
        function Za(t) {
          ;(this._ = t), (this.next = null), (this.previous = null)
        }
        function Qa(t) {
          if (!(i = t.length)) return 0
          var n, e, r, i, a, o, u, c, f, s, l
          if (((n = t[0]), (n.x = 0), (n.y = 0), !(i > 1))) return n.r
          if (((e = t[1]), (n.x = -e.r), (e.x = n.r), (e.y = 0), !(i > 2)))
            return n.r + e.r
          Va(e, n, (r = t[2])),
            (n = new Za(n)),
            (e = new Za(e)),
            (r = new Za(r)),
            (n.next = r.previous = e),
            (e.next = n.previous = r),
            (r.next = e.previous = n)
          t: for (u = 3; u < i; ++u) {
            Va(n._, e._, (r = t[u])),
              (r = new Za(r)),
              (c = e.next),
              (f = n.previous),
              (s = e._.r),
              (l = n._.r)
            do {
              if (s <= l) {
                if ($a(c._, r._)) {
                  ;(e = c), (n.next = e), (e.previous = n), --u
                  continue t
                }
                ;(s += c._.r), (c = c.next)
              } else {
                if ($a(f._, r._)) {
                  ;(n = f), (n.next = e), (e.previous = n), --u
                  continue t
                }
                ;(l += f._.r), (f = f.previous)
              }
            } while (c !== f.next)
            for (
              r.previous = n,
                r.next = e,
                n.next = e.previous = e = r,
                a = Wa(n);
              (r = r.next) !== e;

            )
              (o = Wa(r)) < a && ((n = r), (a = o))
            e = n.next
          }
          for (n = [e._], r = e; (r = r.next) !== e; ) n.push(r._)
          for (r = Ky(n), u = 0; u < i; ++u)
            (n = t[u]), (n.x -= r.x), (n.y -= r.y)
          return r.r
        }
        function Ja(t) {
          return null == t ? null : Ka(t)
        }
        function Ka(t) {
          if ('function' != typeof t) throw new Error()
          return t
        }
        function to() {
          return 0
        }
        function no(t) {
          return Math.sqrt(t.value)
        }
        function eo(t) {
          return function(n) {
            n.children || (n.r = Math.max(0, +t(n) || 0))
          }
        }
        function ro(t, n) {
          return function(e) {
            if ((r = e.children)) {
              var r,
                i,
                a,
                o = r.length,
                u = t(e) * n || 0
              if (u) for (i = 0; i < o; ++i) r[i].r += u
              if (((a = Qa(r)), u)) for (i = 0; i < o; ++i) r[i].r -= u
              e.r = a + u
            }
          }
        }
        function io(t) {
          return function(n) {
            var e = n.parent
            ;(n.r *= t), e && ((n.x = e.x + t * n.x), (n.y = e.y + t * n.y))
          }
        }
        function ao(t) {
          return t.id
        }
        function oo(t) {
          return t.parentId
        }
        function uo(t, n) {
          return t.parent === n.parent ? 1 : 2
        }
        function co(t) {
          var n = t.children
          return n ? n[0] : t.t
        }
        function fo(t) {
          var n = t.children
          return n ? n[n.length - 1] : t.t
        }
        function so(t, n, e) {
          var r = e / (n.i - t.i)
          ;(n.c -= r), (n.s += e), (t.c += r), (n.z += e), (n.m += e)
        }
        function lo(t) {
          for (var n, e = 0, r = 0, i = t.children, a = i.length; --a >= 0; )
            (n = i[a]), (n.z += e), (n.m += e), (e += n.s + (r += n.c))
        }
        function ho(t, n, e) {
          return t.a.parent === n.parent ? t.a : e
        }
        function po(t, n) {
          ;(this._ = t),
            (this.parent = null),
            (this.children = null),
            (this.A = null),
            (this.a = this),
            (this.z = 0),
            (this.m = 0),
            (this.c = 0),
            (this.s = 0),
            (this.t = null),
            (this.i = n)
        }
        function vo(t) {
          for (var n, e, r, i, a, o = new po(t, 0), u = [o]; (n = u.pop()); )
            if ((r = n._.children))
              for (
                n.children = new Array((a = r.length)), i = a - 1;
                i >= 0;
                --i
              )
                u.push((e = n.children[i] = new po(r[i], i))), (e.parent = n)
          return ((o.parent = new po(null, 0)).children = [o]), o
        }
        function go(t, n, e, r, i, a) {
          for (
            var o,
              u,
              c,
              f,
              s,
              l,
              h,
              d,
              p,
              v,
              g,
              b = [],
              y = n.children,
              _ = 0,
              m = 0,
              x = y.length,
              w = n.value;
            _ < x;

          ) {
            ;(c = i - e), (f = a - r)
            do {
              s = y[m++].value
            } while (!s && m < x)
            for (
              l = h = s,
                v = Math.max(f / c, c / f) / (w * t),
                g = s * s * v,
                p = Math.max(h / g, g / l);
              m < x;
              ++m
            ) {
              if (
                ((s += u = y[m].value),
                u < l && (l = u),
                u > h && (h = u),
                (g = s * s * v),
                (d = Math.max(h / g, g / l)) > p)
              ) {
                s -= u
                break
              }
              p = d
            }
            b.push((o = { value: s, dice: c < f, children: y.slice(_, m) })),
              o.dice
                ? i_(o, e, r, i, w ? (r += (f * s) / w) : a)
                : l_(o, e, r, w ? (e += (c * s) / w) : i, a),
              (w -= s),
              (_ = m)
          }
          return b
        }
        function bo(t, n) {
          return t[0] - n[0] || t[1] - n[1]
        }
        function yo(t) {
          for (var n = t.length, e = [0, 1], r = 2, i = 2; i < n; ++i) {
            for (; r > 1 && m_(t[e[r - 2]], t[e[r - 1]], t[i]) <= 0; ) --r
            e[r++] = i
          }
          return e.slice(0, r)
        }
        function _o(t) {
          ;(this._size = t),
            (this._call = this._error = null),
            (this._tasks = []),
            (this._data = []),
            (this._waiting = this._active = this._ended = this._start = 0)
        }
        function mo(t) {
          if (!t._start)
            try {
              xo(t)
            } catch (n) {
              if (t._tasks[t._ended + t._active - 1]) Mo(t, n)
              else if (!t._data) throw n
            }
        }
        function xo(t) {
          for (; (t._start = t._waiting && t._active < t._size); ) {
            var n = t._ended + t._active,
              e = t._tasks[n],
              r = e.length - 1,
              i = e[r]
            ;(e[r] = wo(t, n)),
              --t._waiting,
              ++t._active,
              (e = i.apply(null, e)),
              t._tasks[n] && (t._tasks[n] = e || N_)
          }
        }
        function wo(t, n) {
          return function(e, r) {
            t._tasks[n] &&
              (--t._active,
              ++t._ended,
              (t._tasks[n] = null),
              null == t._error &&
                (null != e
                  ? Mo(t, e)
                  : ((t._data[n] = r), t._waiting ? mo(t) : ko(t))))
          }
        }
        function Mo(t, n) {
          var e,
            r = t._tasks.length
          for (t._error = n, t._data = void 0, t._waiting = NaN; --r >= 0; )
            if ((e = t._tasks[r]) && ((t._tasks[r] = null), e.abort))
              try {
                e.abort()
              } catch (n) {}
          ;(t._active = NaN), ko(t)
        }
        function ko(t) {
          if (!t._active && t._call) {
            var n = t._data
            ;(t._data = void 0), t._call(t._error, n)
          }
        }
        function No(t) {
          if (null == t) t = 1 / 0
          else if (!((t = +t) >= 1)) throw new Error('invalid concurrency')
          return new _o(t)
        }
        function So(t) {
          return function(n, e) {
            t(null == n ? e : null)
          }
        }
        function Ao(t) {
          var n = t.responseType
          return n && 'text' !== n ? t.response : t.responseText
        }
        function To(t, n) {
          return function(e) {
            return t(e.responseText, n)
          }
        }
        function Eo(t) {
          function n(n) {
            var a = n + '',
              o = e.get(a)
            if (!o) {
              if (i !== H_) return i
              e.set(a, (o = r.push(n)))
            }
            return t[(o - 1) % t.length]
          }
          var e = He(),
            r = [],
            i = H_
          return (
            (t = null == t ? [] : X_.call(t)),
            (n.domain = function(t) {
              if (!arguments.length) return r.slice()
              ;(r = []), (e = He())
              for (var i, a, o = -1, u = t.length; ++o < u; )
                e.has((a = (i = t[o]) + '')) || e.set(a, r.push(i))
              return n
            }),
            (n.range = function(e) {
              return arguments.length ? ((t = X_.call(e)), n) : t.slice()
            }),
            (n.unknown = function(t) {
              return arguments.length ? ((i = t), n) : i
            }),
            (n.copy = function() {
              return Eo()
                .domain(r)
                .range(t)
                .unknown(i)
            }),
            n
          )
        }
        function Co() {
          function t() {
            var t = i().length,
              r = o[1] < o[0],
              l = o[r - 0],
              h = o[1 - r]
            ;(n = (h - l) / Math.max(1, t - c + 2 * f)),
              u && (n = Math.floor(n)),
              (l += (h - l - n * (t - c)) * s),
              (e = n * (1 - c)),
              u && ((l = Math.round(l)), (e = Math.round(e)))
            var d = vs(t).map(function(t) {
              return l + n * t
            })
            return a(r ? d.reverse() : d)
          }
          var n,
            e,
            r = Eo().unknown(void 0),
            i = r.domain,
            a = r.range,
            o = [0, 1],
            u = !1,
            c = 0,
            f = 0,
            s = 0.5
          return (
            delete r.unknown,
            (r.domain = function(n) {
              return arguments.length ? (i(n), t()) : i()
            }),
            (r.range = function(n) {
              return arguments.length ? ((o = [+n[0], +n[1]]), t()) : o.slice()
            }),
            (r.rangeRound = function(n) {
              return (o = [+n[0], +n[1]]), (u = !0), t()
            }),
            (r.bandwidth = function() {
              return e
            }),
            (r.step = function() {
              return n
            }),
            (r.round = function(n) {
              return arguments.length ? ((u = !!n), t()) : u
            }),
            (r.padding = function(n) {
              return arguments.length
                ? ((c = f = Math.max(0, Math.min(1, n))), t())
                : c
            }),
            (r.paddingInner = function(n) {
              return arguments.length
                ? ((c = Math.max(0, Math.min(1, n))), t())
                : c
            }),
            (r.paddingOuter = function(n) {
              return arguments.length
                ? ((f = Math.max(0, Math.min(1, n))), t())
                : f
            }),
            (r.align = function(n) {
              return arguments.length
                ? ((s = Math.max(0, Math.min(1, n))), t())
                : s
            }),
            (r.copy = function() {
              return Co()
                .domain(i())
                .range(o)
                .round(u)
                .paddingInner(c)
                .paddingOuter(f)
                .align(s)
            }),
            t()
          )
        }
        function Po(t) {
          var n = t.copy
          return (
            (t.padding = t.paddingOuter),
            delete t.paddingInner,
            delete t.paddingOuter,
            (t.copy = function() {
              return Po(n())
            }),
            t
          )
        }
        function Ro() {
          return Po(Co().paddingInner(1))
        }
        function zo(t, n) {
          return (n -= t = +t)
            ? function(e) {
                return (e - t) / n
              }
            : G_(n)
        }
        function Lo(t) {
          return function(n, e) {
            var r = t((n = +n), (e = +e))
            return function(t) {
              return t <= n ? 0 : t >= e ? 1 : r(t)
            }
          }
        }
        function qo(t) {
          return function(n, e) {
            var r = t((n = +n), (e = +e))
            return function(t) {
              return t <= 0 ? n : t >= 1 ? e : r(t)
            }
          }
        }
        function Oo(t, n, e, r) {
          var i = t[0],
            a = t[1],
            o = n[0],
            u = n[1]
          return (
            a < i
              ? ((i = e(a, i)), (o = r(u, o)))
              : ((i = e(i, a)), (o = r(o, u))),
            function(t) {
              return o(i(t))
            }
          )
        }
        function Uo(t, n, e, r) {
          var i = Math.min(t.length, n.length) - 1,
            a = new Array(i),
            o = new Array(i),
            u = -1
          for (
            t[i] < t[0] &&
            ((t = t.slice().reverse()), (n = n.slice().reverse()));
            ++u < i;

          )
            (a[u] = e(t[u], t[u + 1])), (o[u] = r(n[u], n[u + 1]))
          return function(n) {
            var e = ns(t, n, 1, i) - 1
            return o[e](a[e](n))
          }
        }
        function Do(t, n) {
          return n
            .domain(t.domain())
            .range(t.range())
            .interpolate(t.interpolate())
            .clamp(t.clamp())
        }
        function Yo(t, n) {
          function e() {
            return (
              (i = Math.min(u.length, c.length) > 2 ? Uo : Oo),
              (a = o = null),
              r
            )
          }
          function r(n) {
            return (a || (a = i(u, c, s ? Lo(t) : t, f)))(+n)
          }
          var i,
            a,
            o,
            u = $_,
            c = $_,
            f = Bh,
            s = !1
          return (
            (r.invert = function(t) {
              return (o || (o = i(c, u, zo, s ? qo(n) : n)))(+t)
            }),
            (r.domain = function(t) {
              return arguments.length ? ((u = j_.call(t, V_)), e()) : u.slice()
            }),
            (r.range = function(t) {
              return arguments.length ? ((c = X_.call(t)), e()) : c.slice()
            }),
            (r.rangeRound = function(t) {
              return (c = X_.call(t)), (f = jh), e()
            }),
            (r.clamp = function(t) {
              return arguments.length ? ((s = !!t), e()) : s
            }),
            (r.interpolate = function(t) {
              return arguments.length ? ((f = t), e()) : f
            }),
            e()
          )
        }
        function Io(t) {
          var n = t.domain
          return (
            (t.ticks = function(t) {
              var e = n()
              return _s(e[0], e[e.length - 1], null == t ? 10 : t)
            }),
            (t.tickFormat = function(t, e) {
              return W_(n(), t, e)
            }),
            (t.nice = function(e) {
              null == e && (e = 10)
              var i,
                a = n(),
                o = 0,
                u = a.length - 1,
                c = a[o],
                f = a[u]
              return (
                f < c && ((i = c), (c = f), (f = i), (i = o), (o = u), (u = i)),
                (i = r(c, f, e)),
                i > 0
                  ? ((c = Math.floor(c / i) * i),
                    (f = Math.ceil(f / i) * i),
                    (i = r(c, f, e)))
                  : i < 0 &&
                    ((c = Math.ceil(c * i) / i),
                    (f = Math.floor(f * i) / i),
                    (i = r(c, f, e))),
                i > 0
                  ? ((a[o] = Math.floor(c / i) * i),
                    (a[u] = Math.ceil(f / i) * i),
                    n(a))
                  : i < 0 &&
                    ((a[o] = Math.ceil(c * i) / i),
                    (a[u] = Math.floor(f * i) / i),
                    n(a)),
                t
              )
            }),
            t
          )
        }
        function Fo() {
          var t = Yo(zo, Uh)
          return (
            (t.copy = function() {
              return Do(t, Fo())
            }),
            Io(t)
          )
        }
        function Bo() {
          function t(t) {
            return +t
          }
          var n = [0, 1]
          return (
            (t.invert = t),
            (t.domain = t.range = function(e) {
              return arguments.length ? ((n = j_.call(e, V_)), t) : n.slice()
            }),
            (t.copy = function() {
              return Bo().domain(n)
            }),
            Io(t)
          )
        }
        function jo(t, n) {
          return (n = Math.log(n / t))
            ? function(e) {
                return Math.log(e / t) / n
              }
            : G_(n)
        }
        function Xo(t, n) {
          return t < 0
            ? function(e) {
                return -Math.pow(-n, e) * Math.pow(-t, 1 - e)
              }
            : function(e) {
                return Math.pow(n, e) * Math.pow(t, 1 - e)
              }
        }
        function Ho(t) {
          return isFinite(t) ? +('1e' + t) : t < 0 ? 0 : t
        }
        function Go(t) {
          return 10 === t
            ? Ho
            : t === Math.E
            ? Math.exp
            : function(n) {
                return Math.pow(t, n)
              }
        }
        function Vo(t) {
          return t === Math.E
            ? Math.log
            : (10 === t && Math.log10) ||
                (2 === t && Math.log2) ||
                ((t = Math.log(t)),
                function(n) {
                  return Math.log(n) / t
                })
        }
        function $o(t) {
          return function(n) {
            return -t(-n)
          }
        }
        function Wo() {
          function n() {
            return (
              (a = Vo(i)),
              (o = Go(i)),
              r()[0] < 0 && ((a = $o(a)), (o = $o(o))),
              e
            )
          }
          var e = Yo(jo, Xo).domain([1, 10]),
            r = e.domain,
            i = 10,
            a = Vo(10),
            o = Go(10)
          return (
            (e.base = function(t) {
              return arguments.length ? ((i = +t), n()) : i
            }),
            (e.domain = function(t) {
              return arguments.length ? (r(t), n()) : r()
            }),
            (e.ticks = function(t) {
              var n,
                e = r(),
                u = e[0],
                c = e[e.length - 1]
              ;(n = c < u) && ((h = u), (u = c), (c = h))
              var f,
                s,
                l,
                h = a(u),
                d = a(c),
                p = null == t ? 10 : +t,
                v = []
              if (!(i % 1) && d - h < p) {
                if (((h = Math.round(h) - 1), (d = Math.round(d) + 1), u > 0)) {
                  for (; h < d; ++h)
                    for (s = 1, f = o(h); s < i; ++s)
                      if (!((l = f * s) < u)) {
                        if (l > c) break
                        v.push(l)
                      }
                } else
                  for (; h < d; ++h)
                    for (s = i - 1, f = o(h); s >= 1; --s)
                      if (!((l = f * s) < u)) {
                        if (l > c) break
                        v.push(l)
                      }
              } else v = _s(h, d, Math.min(d - h, p)).map(o)
              return n ? v.reverse() : v
            }),
            (e.tickFormat = function(n, r) {
              if (
                (null == r && (r = 10 === i ? '.0e' : ','),
                'function' != typeof r && (r = t.format(r)),
                n === 1 / 0)
              )
                return r
              null == n && (n = 10)
              var u = Math.max(1, (i * n) / e.ticks().length)
              return function(t) {
                var n = t / o(Math.round(a(t)))
                return n * i < i - 0.5 && (n *= i), n <= u ? r(t) : ''
              }
            }),
            (e.nice = function() {
              return r(
                Z_(r(), {
                  floor: function(t) {
                    return o(Math.floor(a(t)))
                  },
                  ceil: function(t) {
                    return o(Math.ceil(a(t)))
                  },
                })
              )
            }),
            (e.copy = function() {
              return Do(e, Wo().base(i))
            }),
            e
          )
        }
        function Zo(t, n) {
          return t < 0 ? -Math.pow(-t, n) : Math.pow(t, n)
        }
        function Qo() {
          function t(t, n) {
            return (n = Zo(n, e) - (t = Zo(t, e)))
              ? function(r) {
                  return (Zo(r, e) - t) / n
                }
              : G_(n)
          }
          function n(t, n) {
            return (
              (n = Zo(n, e) - (t = Zo(t, e))),
              function(r) {
                return Zo(t + n * r, 1 / e)
              }
            )
          }
          var e = 1,
            r = Yo(t, n),
            i = r.domain
          return (
            (r.exponent = function(t) {
              return arguments.length ? ((e = +t), i(i())) : e
            }),
            (r.copy = function() {
              return Do(r, Qo().exponent(e))
            }),
            Io(r)
          )
        }
        function Jo() {
          return Qo().exponent(0.5)
        }
        function Ko() {
          function t() {
            var t = 0,
              a = Math.max(1, r.length)
            for (i = new Array(a - 1); ++t < a; ) i[t - 1] = ws(e, t / a)
            return n
          }
          function n(t) {
            if (!isNaN((t = +t))) return r[ns(i, t)]
          }
          var e = [],
            r = [],
            i = []
          return (
            (n.invertExtent = function(t) {
              var n = r.indexOf(t)
              return n < 0
                ? [NaN, NaN]
                : [
                    n > 0 ? i[n - 1] : e[0],
                    n < i.length ? i[n] : e[e.length - 1],
                  ]
            }),
            (n.domain = function(n) {
              if (!arguments.length) return e.slice()
              e = []
              for (var r, i = 0, a = n.length; i < a; ++i)
                null == (r = n[i]) || isNaN((r = +r)) || e.push(r)
              return e.sort(Jf), t()
            }),
            (n.range = function(n) {
              return arguments.length ? ((r = X_.call(n)), t()) : r.slice()
            }),
            (n.quantiles = function() {
              return i.slice()
            }),
            (n.copy = function() {
              return Ko()
                .domain(e)
                .range(r)
            }),
            n
          )
        }
        function tu() {
          function t(t) {
            if (t <= t) return o[ns(a, t, 0, i)]
          }
          function n() {
            var n = -1
            for (a = new Array(i); ++n < i; )
              a[n] = ((n + 1) * r - (n - i) * e) / (i + 1)
            return t
          }
          var e = 0,
            r = 1,
            i = 1,
            a = [0.5],
            o = [0, 1]
          return (
            (t.domain = function(t) {
              return arguments.length ? ((e = +t[0]), (r = +t[1]), n()) : [e, r]
            }),
            (t.range = function(t) {
              return arguments.length
                ? ((i = (o = X_.call(t)).length - 1), n())
                : o.slice()
            }),
            (t.invertExtent = function(t) {
              var n = o.indexOf(t)
              return n < 0
                ? [NaN, NaN]
                : n < 1
                ? [e, a[0]]
                : n >= i
                ? [a[i - 1], r]
                : [a[n - 1], a[n]]
            }),
            (t.copy = function() {
              return tu()
                .domain([e, r])
                .range(o)
            }),
            Io(t)
          )
        }
        function nu() {
          function t(t) {
            if (t <= t) return e[ns(n, t, 0, r)]
          }
          var n = [0.5],
            e = [0, 1],
            r = 1
          return (
            (t.domain = function(i) {
              return arguments.length
                ? ((n = X_.call(i)), (r = Math.min(n.length, e.length - 1)), t)
                : n.slice()
            }),
            (t.range = function(i) {
              return arguments.length
                ? ((e = X_.call(i)), (r = Math.min(n.length, e.length - 1)), t)
                : e.slice()
            }),
            (t.invertExtent = function(t) {
              var r = e.indexOf(t)
              return [n[r - 1], n[r]]
            }),
            (t.copy = function() {
              return nu()
                .domain(n)
                .range(e)
            }),
            t
          )
        }
        function eu(t, n, e, r) {
          function i(n) {
            return t((n = new Date(+n))), n
          }
          return (
            (i.floor = i),
            (i.ceil = function(e) {
              return t((e = new Date(e - 1))), n(e, 1), t(e), e
            }),
            (i.round = function(t) {
              var n = i(t),
                e = i.ceil(t)
              return t - n < e - t ? n : e
            }),
            (i.offset = function(t, e) {
              return n((t = new Date(+t)), null == e ? 1 : Math.floor(e)), t
            }),
            (i.range = function(e, r, a) {
              var o = []
              if (
                ((e = i.ceil(e)),
                (a = null == a ? 1 : Math.floor(a)),
                !(e < r && a > 0))
              )
                return o
              do {
                o.push(new Date(+e))
              } while ((n(e, a), t(e), e < r))
              return o
            }),
            (i.filter = function(e) {
              return eu(
                function(n) {
                  if (n >= n) for (; t(n), !e(n); ) n.setTime(n - 1)
                },
                function(t, r) {
                  if (t >= t)
                    if (r < 0) for (; ++r <= 0; ) for (; n(t, -1), !e(t); );
                    else for (; --r >= 0; ) for (; n(t, 1), !e(t); );
                }
              )
            }),
            e &&
              ((i.count = function(n, r) {
                return (
                  Q_.setTime(+n),
                  J_.setTime(+r),
                  t(Q_),
                  t(J_),
                  Math.floor(e(Q_, J_))
                )
              }),
              (i.every = function(t) {
                return (
                  (t = Math.floor(t)),
                  isFinite(t) && t > 0
                    ? t > 1
                      ? i.filter(
                          r
                            ? function(n) {
                                return r(n) % t == 0
                              }
                            : function(n) {
                                return i.count(0, n) % t == 0
                              }
                        )
                      : i
                    : null
                )
              })),
            i
          )
        }
        function ru(t) {
          return eu(
            function(n) {
              n.setDate(n.getDate() - ((n.getDay() + 7 - t) % 7)),
                n.setHours(0, 0, 0, 0)
            },
            function(t, n) {
              t.setDate(t.getDate() + 7 * n)
            },
            function(t, n) {
              return (
                (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * nm) /
                em
              )
            }
          )
        }
        function iu(t) {
          return eu(
            function(n) {
              n.setUTCDate(n.getUTCDate() - ((n.getUTCDay() + 7 - t) % 7)),
                n.setUTCHours(0, 0, 0, 0)
            },
            function(t, n) {
              t.setUTCDate(t.getUTCDate() + 7 * n)
            },
            function(t, n) {
              return (n - t) / em
            }
          )
        }
        function au(t) {
          if (0 <= t.y && t.y < 100) {
            var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L)
            return n.setFullYear(t.y), n
          }
          return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L)
        }
        function ou(t) {
          if (0 <= t.y && t.y < 100) {
            var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L))
            return n.setUTCFullYear(t.y), n
          }
          return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L))
        }
        function uu(t) {
          return { y: t, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0 }
        }
        function cu(t) {
          function n(t, n) {
            return function(e) {
              var r,
                i,
                a,
                o = [],
                u = -1,
                c = 0,
                f = t.length
              for (e instanceof Date || (e = new Date(+e)); ++u < f; )
                37 === t.charCodeAt(u) &&
                  (o.push(t.slice(c, u)),
                  null != (i = tx[(r = t.charAt(++u))])
                    ? (r = t.charAt(++u))
                    : (i = 'e' === r ? ' ' : '0'),
                  (a = n[r]) && (r = a(e, i)),
                  o.push(r),
                  (c = u + 1))
              return o.push(t.slice(c, u)), o.join('')
            }
          }
          function e(t, n) {
            return function(e) {
              var i = uu(1900)
              if (r(i, t, (e += ''), 0) != e.length) return null
              if (
                ('p' in i && (i.H = (i.H % 12) + 12 * i.p),
                'W' in i || 'U' in i)
              ) {
                'w' in i || (i.w = 'W' in i ? 1 : 0)
                var a = 'Z' in i ? ou(uu(i.y)).getUTCDay() : n(uu(i.y)).getDay()
                ;(i.m = 0),
                  (i.d =
                    'W' in i
                      ? ((i.w + 6) % 7) + 7 * i.W - ((a + 5) % 7)
                      : i.w + 7 * i.U - ((a + 6) % 7))
              }
              return 'Z' in i
                ? ((i.H += (i.Z / 100) | 0), (i.M += i.Z % 100), ou(i))
                : n(i)
            }
          }
          function r(t, n, e, r) {
            for (var i, a, o = 0, u = n.length, c = e.length; o < u; ) {
              if (r >= c) return -1
              if (37 === (i = n.charCodeAt(o++))) {
                if (
                  ((i = n.charAt(o++)),
                  !(a = B[i in tx ? n.charAt(o++) : i]) || (r = a(t, e, r)) < 0)
                )
                  return -1
              } else if (i != e.charCodeAt(r++)) return -1
            }
            return r
          }
          function i(t, n, e) {
            var r = C.exec(n.slice(e))
            return r ? ((t.p = P[r[0].toLowerCase()]), e + r[0].length) : -1
          }
          function a(t, n, e) {
            var r = L.exec(n.slice(e))
            return r ? ((t.w = q[r[0].toLowerCase()]), e + r[0].length) : -1
          }
          function o(t, n, e) {
            var r = R.exec(n.slice(e))
            return r ? ((t.w = z[r[0].toLowerCase()]), e + r[0].length) : -1
          }
          function u(t, n, e) {
            var r = D.exec(n.slice(e))
            return r ? ((t.m = Y[r[0].toLowerCase()]), e + r[0].length) : -1
          }
          function c(t, n, e) {
            var r = O.exec(n.slice(e))
            return r ? ((t.m = U[r[0].toLowerCase()]), e + r[0].length) : -1
          }
          function f(t, n, e) {
            return r(t, w, n, e)
          }
          function s(t, n, e) {
            return r(t, M, n, e)
          }
          function l(t, n, e) {
            return r(t, k, n, e)
          }
          function h(t) {
            return A[t.getDay()]
          }
          function d(t) {
            return S[t.getDay()]
          }
          function p(t) {
            return E[t.getMonth()]
          }
          function v(t) {
            return T[t.getMonth()]
          }
          function g(t) {
            return N[+(t.getHours() >= 12)]
          }
          function b(t) {
            return A[t.getUTCDay()]
          }
          function y(t) {
            return S[t.getUTCDay()]
          }
          function _(t) {
            return E[t.getUTCMonth()]
          }
          function m(t) {
            return T[t.getUTCMonth()]
          }
          function x(t) {
            return N[+(t.getUTCHours() >= 12)]
          }
          var w = t.dateTime,
            M = t.date,
            k = t.time,
            N = t.periods,
            S = t.days,
            A = t.shortDays,
            T = t.months,
            E = t.shortMonths,
            C = lu(N),
            P = hu(N),
            R = lu(S),
            z = hu(S),
            L = lu(A),
            q = hu(A),
            O = lu(T),
            U = hu(T),
            D = lu(E),
            Y = hu(E),
            I = {
              a: h,
              A: d,
              b: p,
              B: v,
              c: null,
              d: Au,
              e: Au,
              H: Tu,
              I: Eu,
              j: Cu,
              L: Pu,
              m: Ru,
              M: zu,
              p: g,
              S: Lu,
              U: qu,
              w: Ou,
              W: Uu,
              x: null,
              X: null,
              y: Du,
              Y: Yu,
              Z: Iu,
              '%': nc,
            },
            F = {
              a: b,
              A: y,
              b: _,
              B: m,
              c: null,
              d: Fu,
              e: Fu,
              H: Bu,
              I: ju,
              j: Xu,
              L: Hu,
              m: Gu,
              M: Vu,
              p: x,
              S: $u,
              U: Wu,
              w: Zu,
              W: Qu,
              x: null,
              X: null,
              y: Ju,
              Y: Ku,
              Z: tc,
              '%': nc,
            },
            B = {
              a: a,
              A: o,
              b: u,
              B: c,
              c: f,
              d: mu,
              e: mu,
              H: wu,
              I: wu,
              j: xu,
              L: Nu,
              m: _u,
              M: Mu,
              p: i,
              S: ku,
              U: pu,
              w: du,
              W: vu,
              x: s,
              X: l,
              y: bu,
              Y: gu,
              Z: yu,
              '%': Su,
            }
          return (
            (I.x = n(M, I)),
            (I.X = n(k, I)),
            (I.c = n(w, I)),
            (F.x = n(M, F)),
            (F.X = n(k, F)),
            (F.c = n(w, F)),
            {
              format: function(t) {
                var e = n((t += ''), I)
                return (
                  (e.toString = function() {
                    return t
                  }),
                  e
                )
              },
              parse: function(t) {
                var n = e((t += ''), au)
                return (
                  (n.toString = function() {
                    return t
                  }),
                  n
                )
              },
              utcFormat: function(t) {
                var e = n((t += ''), F)
                return (
                  (e.toString = function() {
                    return t
                  }),
                  e
                )
              },
              utcParse: function(t) {
                var n = e(t, ou)
                return (
                  (n.toString = function() {
                    return t
                  }),
                  n
                )
              },
            }
          )
        }
        function fu(t, n, e) {
          var r = t < 0 ? '-' : '',
            i = (r ? -t : t) + '',
            a = i.length
          return r + (a < e ? new Array(e - a + 1).join(n) + i : i)
        }
        function su(t) {
          return t.replace(rx, '\\$&')
        }
        function lu(t) {
          return new RegExp('^(?:' + t.map(su).join('|') + ')', 'i')
        }
        function hu(t) {
          for (var n = {}, e = -1, r = t.length; ++e < r; )
            n[t[e].toLowerCase()] = e
          return n
        }
        function du(t, n, e) {
          var r = nx.exec(n.slice(e, e + 1))
          return r ? ((t.w = +r[0]), e + r[0].length) : -1
        }
        function pu(t, n, e) {
          var r = nx.exec(n.slice(e))
          return r ? ((t.U = +r[0]), e + r[0].length) : -1
        }
        function vu(t, n, e) {
          var r = nx.exec(n.slice(e))
          return r ? ((t.W = +r[0]), e + r[0].length) : -1
        }
        function gu(t, n, e) {
          var r = nx.exec(n.slice(e, e + 4))
          return r ? ((t.y = +r[0]), e + r[0].length) : -1
        }
        function bu(t, n, e) {
          var r = nx.exec(n.slice(e, e + 2))
          return r
            ? ((t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3)), e + r[0].length)
            : -1
        }
        function yu(t, n, e) {
          var r = /^(Z)|([+-]\d\d)(?:\:?(\d\d))?/.exec(n.slice(e, e + 6))
          return r
            ? ((t.Z = r[1] ? 0 : -(r[2] + (r[3] || '00'))), e + r[0].length)
            : -1
        }
        function _u(t, n, e) {
          var r = nx.exec(n.slice(e, e + 2))
          return r ? ((t.m = r[0] - 1), e + r[0].length) : -1
        }
        function mu(t, n, e) {
          var r = nx.exec(n.slice(e, e + 2))
          return r ? ((t.d = +r[0]), e + r[0].length) : -1
        }
        function xu(t, n, e) {
          var r = nx.exec(n.slice(e, e + 3))
          return r ? ((t.m = 0), (t.d = +r[0]), e + r[0].length) : -1
        }
        function wu(t, n, e) {
          var r = nx.exec(n.slice(e, e + 2))
          return r ? ((t.H = +r[0]), e + r[0].length) : -1
        }
        function Mu(t, n, e) {
          var r = nx.exec(n.slice(e, e + 2))
          return r ? ((t.M = +r[0]), e + r[0].length) : -1
        }
        function ku(t, n, e) {
          var r = nx.exec(n.slice(e, e + 2))
          return r ? ((t.S = +r[0]), e + r[0].length) : -1
        }
        function Nu(t, n, e) {
          var r = nx.exec(n.slice(e, e + 3))
          return r ? ((t.L = +r[0]), e + r[0].length) : -1
        }
        function Su(t, n, e) {
          var r = ex.exec(n.slice(e, e + 1))
          return r ? e + r[0].length : -1
        }
        function Au(t, n) {
          return fu(t.getDate(), n, 2)
        }
        function Tu(t, n) {
          return fu(t.getHours(), n, 2)
        }
        function Eu(t, n) {
          return fu(t.getHours() % 12 || 12, n, 2)
        }
        function Cu(t, n) {
          return fu(1 + fm.count(Am(t), t), n, 3)
        }
        function Pu(t, n) {
          return fu(t.getMilliseconds(), n, 3)
        }
        function Ru(t, n) {
          return fu(t.getMonth() + 1, n, 2)
        }
        function zu(t, n) {
          return fu(t.getMinutes(), n, 2)
        }
        function Lu(t, n) {
          return fu(t.getSeconds(), n, 2)
        }
        function qu(t, n) {
          return fu(lm.count(Am(t), t), n, 2)
        }
        function Ou(t) {
          return t.getDay()
        }
        function Uu(t, n) {
          return fu(hm.count(Am(t), t), n, 2)
        }
        function Du(t, n) {
          return fu(t.getFullYear() % 100, n, 2)
        }
        function Yu(t, n) {
          return fu(t.getFullYear() % 1e4, n, 4)
        }
        function Iu(t) {
          var n = t.getTimezoneOffset()
          return (
            (n > 0 ? '-' : ((n *= -1), '+')) +
            fu((n / 60) | 0, '0', 2) +
            fu(n % 60, '0', 2)
          )
        }
        function Fu(t, n) {
          return fu(t.getUTCDate(), n, 2)
        }
        function Bu(t, n) {
          return fu(t.getUTCHours(), n, 2)
        }
        function ju(t, n) {
          return fu(t.getUTCHours() % 12 || 12, n, 2)
        }
        function Xu(t, n) {
          return fu(1 + zm.count(Qm(t), t), n, 3)
        }
        function Hu(t, n) {
          return fu(t.getUTCMilliseconds(), n, 3)
        }
        function Gu(t, n) {
          return fu(t.getUTCMonth() + 1, n, 2)
        }
        function Vu(t, n) {
          return fu(t.getUTCMinutes(), n, 2)
        }
        function $u(t, n) {
          return fu(t.getUTCSeconds(), n, 2)
        }
        function Wu(t, n) {
          return fu(qm.count(Qm(t), t), n, 2)
        }
        function Zu(t) {
          return t.getUTCDay()
        }
        function Qu(t, n) {
          return fu(Om.count(Qm(t), t), n, 2)
        }
        function Ju(t, n) {
          return fu(t.getUTCFullYear() % 100, n, 2)
        }
        function Ku(t, n) {
          return fu(t.getUTCFullYear() % 1e4, n, 4)
        }
        function tc() {
          return '+0000'
        }
        function nc() {
          return '%'
        }
        function ec(n) {
          return (
            (Jm = cu(n)),
            (t.timeFormat = Jm.format),
            (t.timeParse = Jm.parse),
            (t.utcFormat = Jm.utcFormat),
            (t.utcParse = Jm.utcParse),
            Jm
          )
        }
        function rc(t) {
          return t.toISOString()
        }
        function ic(t) {
          var n = new Date(t)
          return isNaN(n) ? null : n
        }
        function ac(t) {
          return new Date(t)
        }
        function oc(t) {
          return t instanceof Date ? +t : +new Date(+t)
        }
        function uc(t, n, e, r, a, o, u, c, f) {
          function s(i) {
            return (u(i) < i
              ? v
              : o(i) < i
              ? g
              : a(i) < i
              ? b
              : r(i) < i
              ? y
              : n(i) < i
              ? e(i) < i
                ? _
                : m
              : t(i) < i
              ? x
              : w)(i)
          }
          function l(n, e, r, a) {
            if ((null == n && (n = 10), 'number' == typeof n)) {
              var o = Math.abs(r - e) / n,
                u = Kf(function(t) {
                  return t[2]
                }).right(M, o)
              u === M.length
                ? ((a = i(e / hx, r / hx, n)), (n = t))
                : u
                ? ((u = M[o / M[u - 1][2] < M[u][2] / o ? u - 1 : u]),
                  (a = u[1]),
                  (n = u[0]))
                : ((a = i(e, r, n)), (n = c))
            }
            return null == a ? n : n.every(a)
          }
          var h = Yo(zo, Uh),
            d = h.invert,
            p = h.domain,
            v = f('.%L'),
            g = f(':%S'),
            b = f('%I:%M'),
            y = f('%I %p'),
            _ = f('%a %d'),
            m = f('%b %d'),
            x = f('%B'),
            w = f('%Y'),
            M = [
              [u, 1, ox],
              [u, 5, 5 * ox],
              [u, 15, 15 * ox],
              [u, 30, 30 * ox],
              [o, 1, ux],
              [o, 5, 5 * ux],
              [o, 15, 15 * ux],
              [o, 30, 30 * ux],
              [a, 1, cx],
              [a, 3, 3 * cx],
              [a, 6, 6 * cx],
              [a, 12, 12 * cx],
              [r, 1, fx],
              [r, 2, 2 * fx],
              [e, 1, sx],
              [n, 1, lx],
              [n, 3, 3 * lx],
              [t, 1, hx],
            ]
          return (
            (h.invert = function(t) {
              return new Date(d(t))
            }),
            (h.domain = function(t) {
              return arguments.length ? p(j_.call(t, oc)) : p().map(ac)
            }),
            (h.ticks = function(t, n) {
              var e,
                r = p(),
                i = r[0],
                a = r[r.length - 1],
                o = a < i
              return (
                o && ((e = i), (i = a), (a = e)),
                (e = l(t, i, a, n)),
                (e = e ? e.range(i, a + 1) : []),
                o ? e.reverse() : e
              )
            }),
            (h.tickFormat = function(t, n) {
              return null == n ? s : f(n)
            }),
            (h.nice = function(t, n) {
              var e = p()
              return (t = l(t, e[0], e[e.length - 1], n)) ? p(Z_(e, t)) : h
            }),
            (h.copy = function() {
              return Do(h, uc(t, n, e, r, a, o, u, c, f))
            }),
            h
          )
        }
        function cc(t) {
          var n = t.length
          return function(e) {
            return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))]
          }
        }
        function fc(t) {
          function n(n) {
            var a = (n - e) / (r - e)
            return t(i ? Math.max(0, Math.min(1, a)) : a)
          }
          var e = 0,
            r = 1,
            i = !1
          return (
            (n.domain = function(t) {
              return arguments.length ? ((e = +t[0]), (r = +t[1]), n) : [e, r]
            }),
            (n.clamp = function(t) {
              return arguments.length ? ((i = !!t), n) : i
            }),
            (n.interpolator = function(e) {
              return arguments.length ? ((t = e), n) : t
            }),
            (n.copy = function() {
              return fc(t)
                .domain([e, r])
                .clamp(i)
            }),
            Io(n)
          )
        }
        function sc(t) {
          return t > 1 ? 0 : t < -1 ? Dx : Math.acos(t)
        }
        function lc(t) {
          return t >= 1 ? Yx : t <= -1 ? -Yx : Math.asin(t)
        }
        function hc(t) {
          return t.innerRadius
        }
        function dc(t) {
          return t.outerRadius
        }
        function pc(t) {
          return t.startAngle
        }
        function vc(t) {
          return t.endAngle
        }
        function gc(t) {
          return t && t.padAngle
        }
        function bc(t, n, e, r, i, a, o, u) {
          var c = e - t,
            f = r - n,
            s = o - i,
            l = u - a,
            h = (s * (n - a) - l * (t - i)) / (l * c - s * f)
          return [t + h * c, n + h * f]
        }
        function yc(t, n, e, r, i, a, o) {
          var u = t - e,
            c = n - r,
            f = (o ? a : -a) / Ox(u * u + c * c),
            s = f * c,
            l = -f * u,
            h = t + s,
            d = n + l,
            p = e + s,
            v = r + l,
            g = (h + p) / 2,
            b = (d + v) / 2,
            y = p - h,
            _ = v - d,
            m = y * y + _ * _,
            x = i - a,
            w = h * v - p * d,
            M = (_ < 0 ? -1 : 1) * Ox(zx(0, x * x * m - w * w)),
            k = (w * _ - y * M) / m,
            N = (-w * y - _ * M) / m,
            S = (w * _ + y * M) / m,
            A = (-w * y + _ * M) / m,
            T = k - g,
            E = N - b,
            C = S - g,
            P = A - b
          return (
            T * T + E * E > C * C + P * P && ((k = S), (N = A)),
            {
              cx: k,
              cy: N,
              x01: -s,
              y01: -l,
              x11: k * (i / x - 1),
              y11: N * (i / x - 1),
            }
          )
        }
        function _c(t) {
          this._context = t
        }
        function mc(t) {
          return t[0]
        }
        function xc(t) {
          return t[1]
        }
        function wc(t) {
          this._curve = t
        }
        function Mc(t) {
          function n(n) {
            return new wc(t(n))
          }
          return (n._curve = t), n
        }
        function kc(t) {
          var n = t.curve
          return (
            (t.angle = t.x),
            delete t.x,
            (t.radius = t.y),
            delete t.y,
            (t.curve = function(t) {
              return arguments.length ? n(Mc(t)) : n()._curve
            }),
            t
          )
        }
        function Nc(t) {
          return t.source
        }
        function Sc(t) {
          return t.target
        }
        function Ac(t) {
          function n() {
            var n,
              u = Jx.call(arguments),
              c = e.apply(this, u),
              f = r.apply(this, u)
            if (
              (o || (o = n = De()),
              t(
                o,
                +i.apply(this, ((u[0] = c), u)),
                +a.apply(this, u),
                +i.apply(this, ((u[0] = f), u)),
                +a.apply(this, u)
              ),
              n)
            )
              return (o = null), n + '' || null
          }
          var e = Nc,
            r = Sc,
            i = mc,
            a = xc,
            o = null
          return (
            (n.source = function(t) {
              return arguments.length ? ((e = t), n) : e
            }),
            (n.target = function(t) {
              return arguments.length ? ((r = t), n) : r
            }),
            (n.x = function(t) {
              return arguments.length
                ? ((i = 'function' == typeof t ? t : Ex(+t)), n)
                : i
            }),
            (n.y = function(t) {
              return arguments.length
                ? ((a = 'function' == typeof t ? t : Ex(+t)), n)
                : a
            }),
            (n.context = function(t) {
              return arguments.length ? ((o = null == t ? null : t), n) : o
            }),
            n
          )
        }
        function Tc(t, n, e, r, i) {
          t.moveTo(n, e), t.bezierCurveTo((n = (n + r) / 2), e, n, i, r, i)
        }
        function Ec(t, n, e, r, i) {
          t.moveTo(n, e), t.bezierCurveTo(n, (e = (e + i) / 2), r, e, r, i)
        }
        function Cc(t, n, e, r, i) {
          var a = Qx(n, e),
            o = Qx(n, (e = (e + i) / 2)),
            u = Qx(r, e),
            c = Qx(r, i)
          t.moveTo(a[0], a[1]),
            t.bezierCurveTo(o[0], o[1], u[0], u[1], c[0], c[1])
        }
        function Pc() {
          return Ac(Tc)
        }
        function Rc() {
          return Ac(Ec)
        }
        function zc() {
          var t = Ac(Cc)
          return (t.angle = t.x), delete t.x, (t.radius = t.y), delete t.y, t
        }
        function Lc(t, n, e) {
          t._context.bezierCurveTo(
            (2 * t._x0 + t._x1) / 3,
            (2 * t._y0 + t._y1) / 3,
            (t._x0 + 2 * t._x1) / 3,
            (t._y0 + 2 * t._y1) / 3,
            (t._x0 + 4 * t._x1 + n) / 6,
            (t._y0 + 4 * t._y1 + e) / 6
          )
        }
        function qc(t) {
          this._context = t
        }
        function Oc(t) {
          this._context = t
        }
        function Uc(t) {
          this._context = t
        }
        function Dc(t, n) {
          ;(this._basis = new qc(t)), (this._beta = n)
        }
        function Yc(t, n, e) {
          t._context.bezierCurveTo(
            t._x1 + t._k * (t._x2 - t._x0),
            t._y1 + t._k * (t._y2 - t._y0),
            t._x2 + t._k * (t._x1 - n),
            t._y2 + t._k * (t._y1 - e),
            t._x2,
            t._y2
          )
        }
        function Ic(t, n) {
          ;(this._context = t), (this._k = (1 - n) / 6)
        }
        function Fc(t, n) {
          ;(this._context = t), (this._k = (1 - n) / 6)
        }
        function Bc(t, n) {
          ;(this._context = t), (this._k = (1 - n) / 6)
        }
        function jc(t, n, e) {
          var r = t._x1,
            i = t._y1,
            a = t._x2,
            o = t._y2
          if (t._l01_a > Ux) {
            var u = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
              c = 3 * t._l01_a * (t._l01_a + t._l12_a)
            ;(r = (r * u - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / c),
              (i = (i * u - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / c)
          }
          if (t._l23_a > Ux) {
            var f = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
              s = 3 * t._l23_a * (t._l23_a + t._l12_a)
            ;(a = (a * f + t._x1 * t._l23_2a - n * t._l12_2a) / s),
              (o = (o * f + t._y1 * t._l23_2a - e * t._l12_2a) / s)
          }
          t._context.bezierCurveTo(r, i, a, o, t._x2, t._y2)
        }
        function Xc(t, n) {
          ;(this._context = t), (this._alpha = n)
        }
        function Hc(t, n) {
          ;(this._context = t), (this._alpha = n)
        }
        function Gc(t, n) {
          ;(this._context = t), (this._alpha = n)
        }
        function Vc(t) {
          this._context = t
        }
        function $c(t) {
          return t < 0 ? -1 : 1
        }
        function Wc(t, n, e) {
          var r = t._x1 - t._x0,
            i = n - t._x1,
            a = (t._y1 - t._y0) / (r || (i < 0 && -0)),
            o = (e - t._y1) / (i || (r < 0 && -0)),
            u = (a * i + o * r) / (r + i)
          return (
            ($c(a) + $c(o)) *
              Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(u)) || 0
          )
        }
        function Zc(t, n) {
          var e = t._x1 - t._x0
          return e ? ((3 * (t._y1 - t._y0)) / e - n) / 2 : n
        }
        function Qc(t, n, e) {
          var r = t._x0,
            i = t._y0,
            a = t._x1,
            o = t._y1,
            u = (a - r) / 3
          t._context.bezierCurveTo(r + u, i + u * n, a - u, o - u * e, a, o)
        }
        function Jc(t) {
          this._context = t
        }
        function Kc(t) {
          this._context = new tf(t)
        }
        function tf(t) {
          this._context = t
        }
        function nf(t) {
          return new Jc(t)
        }
        function ef(t) {
          return new Kc(t)
        }
        function rf(t) {
          this._context = t
        }
        function af(t) {
          var n,
            e,
            r = t.length - 1,
            i = new Array(r),
            a = new Array(r),
            o = new Array(r)
          for (
            i[0] = 0, a[0] = 2, o[0] = t[0] + 2 * t[1], n = 1;
            n < r - 1;
            ++n
          )
            (i[n] = 1), (a[n] = 4), (o[n] = 4 * t[n] + 2 * t[n + 1])
          for (
            i[r - 1] = 2, a[r - 1] = 7, o[r - 1] = 8 * t[r - 1] + t[r], n = 1;
            n < r;
            ++n
          )
            (e = i[n] / a[n - 1]), (a[n] -= e), (o[n] -= e * o[n - 1])
          for (i[r - 1] = o[r - 1] / a[r - 1], n = r - 2; n >= 0; --n)
            i[n] = (o[n] - i[n + 1]) / a[n]
          for (a[r - 1] = (t[r] + i[r - 1]) / 2, n = 0; n < r - 1; ++n)
            a[n] = 2 * t[n + 1] - i[n + 1]
          return [i, a]
        }
        function of(t, n) {
          ;(this._context = t), (this._t = n)
        }
        function uf(t) {
          return new of(t, 0)
        }
        function cf(t) {
          return new of(t, 1)
        }
        function ff(t, n) {
          return t[n]
        }
        function sf(t) {
          for (var n, e = 0, r = -1, i = t.length; ++r < i; )
            (n = +t[r][1]) && (e += n)
          return e
        }
        function lf(t) {
          return t[0]
        }
        function hf(t) {
          return t[1]
        }
        function df() {
          this._ = null
        }
        function pf(t) {
          t.U = t.C = t.L = t.R = t.P = t.N = null
        }
        function vf(t, n) {
          var e = n,
            r = n.R,
            i = e.U
          i ? (i.L === e ? (i.L = r) : (i.R = r)) : (t._ = r),
            (r.U = i),
            (e.U = r),
            (e.R = r.L),
            e.R && (e.R.U = e),
            (r.L = e)
        }
        function gf(t, n) {
          var e = n,
            r = n.L,
            i = e.U
          i ? (i.L === e ? (i.L = r) : (i.R = r)) : (t._ = r),
            (r.U = i),
            (e.U = r),
            (e.L = r.R),
            e.L && (e.L.U = e),
            (r.R = e)
        }
        function bf(t) {
          for (; t.L; ) t = t.L
          return t
        }
        function yf(t, n, e, r) {
          var i = [null, null],
            a = $w.push(i) - 1
          return (
            (i.left = t),
            (i.right = n),
            e && mf(i, t, n, e),
            r && mf(i, n, t, r),
            Gw[t.index].halfedges.push(a),
            Gw[n.index].halfedges.push(a),
            i
          )
        }
        function _f(t, n, e) {
          var r = [n, e]
          return (r.left = t), r
        }
        function mf(t, n, e, r) {
          t[0] || t[1]
            ? t.left === e
              ? (t[1] = r)
              : (t[0] = r)
            : ((t[0] = r), (t.left = n), (t.right = e))
        }
        function xf(t, n, e, r, i) {
          var a,
            o = t[0],
            u = t[1],
            c = o[0],
            f = o[1],
            s = u[0],
            l = u[1],
            h = 0,
            d = 1,
            p = s - c,
            v = l - f
          if (((a = n - c), p || !(a > 0))) {
            if (((a /= p), p < 0)) {
              if (a < h) return
              a < d && (d = a)
            } else if (p > 0) {
              if (a > d) return
              a > h && (h = a)
            }
            if (((a = r - c), p || !(a < 0))) {
              if (((a /= p), p < 0)) {
                if (a > d) return
                a > h && (h = a)
              } else if (p > 0) {
                if (a < h) return
                a < d && (d = a)
              }
              if (((a = e - f), v || !(a > 0))) {
                if (((a /= v), v < 0)) {
                  if (a < h) return
                  a < d && (d = a)
                } else if (v > 0) {
                  if (a > d) return
                  a > h && (h = a)
                }
                if (((a = i - f), v || !(a < 0))) {
                  if (((a /= v), v < 0)) {
                    if (a > d) return
                    a > h && (h = a)
                  } else if (v > 0) {
                    if (a < h) return
                    a < d && (d = a)
                  }
                  return (
                    !(h > 0 || d < 1) ||
                    (h > 0 && (t[0] = [c + h * p, f + h * v]),
                    d < 1 && (t[1] = [c + d * p, f + d * v]),
                    !0)
                  )
                }
              }
            }
          }
        }
        function wf(t, n, e, r, i) {
          var a = t[1]
          if (a) return !0
          var o,
            u,
            c = t[0],
            f = t.left,
            s = t.right,
            l = f[0],
            h = f[1],
            d = s[0],
            p = s[1],
            v = (l + d) / 2,
            g = (h + p) / 2
          if (p === h) {
            if (v < n || v >= r) return
            if (l > d) {
              if (c) {
                if (c[1] >= i) return
              } else c = [v, e]
              a = [v, i]
            } else {
              if (c) {
                if (c[1] < e) return
              } else c = [v, i]
              a = [v, e]
            }
          } else if (
            ((o = (l - d) / (p - h)), (u = g - o * v), o < -1 || o > 1)
          )
            if (l > d) {
              if (c) {
                if (c[1] >= i) return
              } else c = [(e - u) / o, e]
              a = [(i - u) / o, i]
            } else {
              if (c) {
                if (c[1] < e) return
              } else c = [(i - u) / o, i]
              a = [(e - u) / o, e]
            }
          else if (h < p) {
            if (c) {
              if (c[0] >= r) return
            } else c = [n, o * n + u]
            a = [r, o * r + u]
          } else {
            if (c) {
              if (c[0] < n) return
            } else c = [r, o * r + u]
            a = [n, o * n + u]
          }
          return (t[0] = c), (t[1] = a), !0
        }
        function Mf(t, n, e, r) {
          for (var i, a = $w.length; a--; )
            (wf((i = $w[a]), t, n, e, r) &&
              xf(i, t, n, e, r) &&
              (Math.abs(i[0][0] - i[1][0]) > Qw ||
                Math.abs(i[0][1] - i[1][1]) > Qw)) ||
              delete $w[a]
        }
        function kf(t) {
          return (Gw[t.index] = { site: t, halfedges: [] })
        }
        function Nf(t, n) {
          var e = t.site,
            r = n.left,
            i = n.right
          return (
            e === i && ((i = r), (r = e)),
            i
              ? Math.atan2(i[1] - r[1], i[0] - r[0])
              : (e === r ? ((r = n[1]), (i = n[0])) : ((r = n[0]), (i = n[1])),
                Math.atan2(r[0] - i[0], i[1] - r[1]))
          )
        }
        function Sf(t, n) {
          return n[+(n.left !== t.site)]
        }
        function Af(t, n) {
          return n[+(n.left === t.site)]
        }
        function Tf() {
          for (var t, n, e, r, i = 0, a = Gw.length; i < a; ++i)
            if ((t = Gw[i]) && (r = (n = t.halfedges).length)) {
              var o = new Array(r),
                u = new Array(r)
              for (e = 0; e < r; ++e) (o[e] = e), (u[e] = Nf(t, $w[n[e]]))
              for (
                o.sort(function(t, n) {
                  return u[n] - u[t]
                }),
                  e = 0;
                e < r;
                ++e
              )
                u[e] = n[o[e]]
              for (e = 0; e < r; ++e) n[e] = u[e]
            }
        }
        function Ef(t, n, e, r) {
          var i,
            a,
            o,
            u,
            c,
            f,
            s,
            l,
            h,
            d,
            p,
            v,
            g = Gw.length,
            b = !0
          for (i = 0; i < g; ++i)
            if ((a = Gw[i])) {
              for (o = a.site, c = a.halfedges, u = c.length; u--; )
                $w[c[u]] || c.splice(u, 1)
              for (u = 0, f = c.length; u < f; )
                (d = Af(a, $w[c[u]])),
                  (p = d[0]),
                  (v = d[1]),
                  (s = Sf(a, $w[c[++u % f]])),
                  (l = s[0]),
                  (h = s[1]),
                  (Math.abs(p - l) > Qw || Math.abs(v - h) > Qw) &&
                    (c.splice(
                      u,
                      0,
                      $w.push(
                        _f(
                          o,
                          d,
                          Math.abs(p - t) < Qw && r - v > Qw
                            ? [t, Math.abs(l - t) < Qw ? h : r]
                            : Math.abs(v - r) < Qw && e - p > Qw
                            ? [Math.abs(h - r) < Qw ? l : e, r]
                            : Math.abs(p - e) < Qw && v - n > Qw
                            ? [e, Math.abs(l - e) < Qw ? h : n]
                            : Math.abs(v - n) < Qw && p - t > Qw
                            ? [Math.abs(h - n) < Qw ? l : t, n]
                            : null
                        )
                      ) - 1
                    ),
                    ++f)
              f && (b = !1)
            }
          if (b) {
            var y,
              _,
              m,
              x = 1 / 0
            for (i = 0, b = null; i < g; ++i)
              (a = Gw[i]) &&
                ((o = a.site),
                (y = o[0] - t),
                (_ = o[1] - n),
                (m = y * y + _ * _) < x && ((x = m), (b = a)))
            if (b) {
              var w = [t, n],
                M = [t, r],
                k = [e, r],
                N = [e, n]
              b.halfedges.push(
                $w.push(_f((o = b.site), w, M)) - 1,
                $w.push(_f(o, M, k)) - 1,
                $w.push(_f(o, k, N)) - 1,
                $w.push(_f(o, N, w)) - 1
              )
            }
          }
          for (i = 0; i < g; ++i)
            (a = Gw[i]) && (a.halfedges.length || delete Gw[i])
        }
        function Cf() {
          pf(this), (this.x = this.y = this.arc = this.site = this.cy = null)
        }
        function Pf(t) {
          var n = t.P,
            e = t.N
          if (n && e) {
            var r = n.site,
              i = t.site,
              a = e.site
            if (r !== a) {
              var o = i[0],
                u = i[1],
                c = r[0] - o,
                f = r[1] - u,
                s = a[0] - o,
                l = a[1] - u,
                h = 2 * (c * l - f * s)
              if (!(h >= -Jw)) {
                var d = c * c + f * f,
                  p = s * s + l * l,
                  v = (l * d - f * p) / h,
                  g = (c * p - s * d) / h,
                  b = Ww.pop() || new Cf()
                ;(b.arc = t),
                  (b.site = i),
                  (b.x = v + o),
                  (b.y = (b.cy = g + u) + Math.sqrt(v * v + g * g)),
                  (t.circle = b)
                for (var y = null, _ = Vw._; _; )
                  if (b.y < _.y || (b.y === _.y && b.x <= _.x)) {
                    if (!_.L) {
                      y = _.P
                      break
                    }
                    _ = _.L
                  } else {
                    if (!_.R) {
                      y = _
                      break
                    }
                    _ = _.R
                  }
                Vw.insert(y, b), y || (Xw = b)
              }
            }
          }
        }
        function Rf(t) {
          var n = t.circle
          n &&
            (n.P || (Xw = n.N),
            Vw.remove(n),
            Ww.push(n),
            pf(n),
            (t.circle = null))
        }
        function zf() {
          pf(this), (this.edge = this.site = this.circle = null)
        }
        function Lf(t) {
          var n = Zw.pop() || new zf()
          return (n.site = t), n
        }
        function qf(t) {
          Rf(t), Hw.remove(t), Zw.push(t), pf(t)
        }
        function Of(t) {
          var n = t.circle,
            e = n.x,
            r = n.cy,
            i = [e, r],
            a = t.P,
            o = t.N,
            u = [t]
          qf(t)
          for (
            var c = a;
            c.circle &&
            Math.abs(e - c.circle.x) < Qw &&
            Math.abs(r - c.circle.cy) < Qw;

          )
            (a = c.P), u.unshift(c), qf(c), (c = a)
          u.unshift(c), Rf(c)
          for (
            var f = o;
            f.circle &&
            Math.abs(e - f.circle.x) < Qw &&
            Math.abs(r - f.circle.cy) < Qw;

          )
            (o = f.N), u.push(f), qf(f), (f = o)
          u.push(f), Rf(f)
          var s,
            l = u.length
          for (s = 1; s < l; ++s)
            (f = u[s]), (c = u[s - 1]), mf(f.edge, c.site, f.site, i)
          ;(c = u[0]),
            (f = u[l - 1]),
            (f.edge = yf(c.site, f.site, null, i)),
            Pf(c),
            Pf(f)
        }
        function Uf(t) {
          for (var n, e, r, i, a = t[0], o = t[1], u = Hw._; u; )
            if ((r = Df(u, o) - a) > Qw) u = u.L
            else {
              if (!((i = a - Yf(u, o)) > Qw)) {
                r > -Qw
                  ? ((n = u.P), (e = u))
                  : i > -Qw
                  ? ((n = u), (e = u.N))
                  : (n = e = u)
                break
              }
              if (!u.R) {
                n = u
                break
              }
              u = u.R
            }
          kf(t)
          var c = Lf(t)
          if ((Hw.insert(n, c), n || e)) {
            if (n === e)
              return (
                Rf(n),
                (e = Lf(n.site)),
                Hw.insert(c, e),
                (c.edge = e.edge = yf(n.site, c.site)),
                Pf(n),
                void Pf(e)
              )
            if (!e) return void (c.edge = yf(n.site, c.site))
            Rf(n), Rf(e)
            var f = n.site,
              s = f[0],
              l = f[1],
              h = t[0] - s,
              d = t[1] - l,
              p = e.site,
              v = p[0] - s,
              g = p[1] - l,
              b = 2 * (h * g - d * v),
              y = h * h + d * d,
              _ = v * v + g * g,
              m = [(g * y - d * _) / b + s, (h * _ - v * y) / b + l]
            mf(e.edge, f, p, m),
              (c.edge = yf(f, t, null, m)),
              (e.edge = yf(t, p, null, m)),
              Pf(n),
              Pf(e)
          }
        }
        function Df(t, n) {
          var e = t.site,
            r = e[0],
            i = e[1],
            a = i - n
          if (!a) return r
          var o = t.P
          if (!o) return -1 / 0
          e = o.site
          var u = e[0],
            c = e[1],
            f = c - n
          if (!f) return u
          var s = u - r,
            l = 1 / a - 1 / f,
            h = s / f
          return l
            ? (-h +
                Math.sqrt(
                  h * h - 2 * l * ((s * s) / (-2 * f) - c + f / 2 + i - a / 2)
                )) /
                l +
                r
            : (r + u) / 2
        }
        function Yf(t, n) {
          var e = t.N
          if (e) return Df(e, n)
          var r = t.site
          return r[1] === n ? r[0] : 1 / 0
        }
        function If(t, n, e) {
          return (t[0] - e[0]) * (n[1] - t[1]) - (t[0] - n[0]) * (e[1] - t[1])
        }
        function Ff(t, n) {
          return n[1] - t[1] || n[0] - t[0]
        }
        function Bf(t, n) {
          var e,
            r,
            i,
            a = t.sort(Ff).pop()
          for (
            $w = [], Gw = new Array(t.length), Hw = new df(), Vw = new df();
            ;

          )
            if (
              ((i = Xw),
              a && (!i || a[1] < i.y || (a[1] === i.y && a[0] < i.x)))
            )
              (a[0] === e && a[1] === r) || (Uf(a), (e = a[0]), (r = a[1])),
                (a = t.pop())
            else {
              if (!i) break
              Of(i.arc)
            }
          if ((Tf(), n)) {
            var o = +n[0][0],
              u = +n[0][1],
              c = +n[1][0],
              f = +n[1][1]
            Mf(o, u, c, f), Ef(o, u, c, f)
          }
          ;(this.edges = $w), (this.cells = Gw), (Hw = Vw = $w = Gw = null)
        }
        function jf(t, n, e) {
          ;(this.target = t), (this.type = n), (this.transform = e)
        }
        function Xf(t, n, e) {
          ;(this.k = t), (this.x = n), (this.y = e)
        }
        function Hf(t) {
          return t.__zoom || nM
        }
        function Gf() {
          t.event.stopImmediatePropagation()
        }
        function Vf() {
          return !t.event.button
        }
        function $f() {
          var t,
            n,
            e = this
          return (
            e instanceof SVGElement
              ? ((e = e.ownerSVGElement || e),
                (t = e.width.baseVal.value),
                (n = e.height.baseVal.value))
              : ((t = e.clientWidth), (n = e.clientHeight)),
            [[0, 0], [t, n]]
          )
        }
        function Wf() {
          return this.__zoom || nM
        }
        function Zf() {
          return (-t.event.deltaY * (t.event.deltaMode ? 120 : 1)) / 500
        }
        function Qf() {
          return 'ontouchstart' in this
        }
        var Jf = function(t, n) {
            return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
          },
          Kf = function(t) {
            return (
              1 === t.length && (t = n(t)),
              {
                left: function(n, e, r, i) {
                  for (
                    null == r && (r = 0), null == i && (i = n.length);
                    r < i;

                  ) {
                    var a = (r + i) >>> 1
                    t(n[a], e) < 0 ? (r = a + 1) : (i = a)
                  }
                  return r
                },
                right: function(n, e, r, i) {
                  for (
                    null == r && (r = 0), null == i && (i = n.length);
                    r < i;

                  ) {
                    var a = (r + i) >>> 1
                    t(n[a], e) > 0 ? (i = a) : (r = a + 1)
                  }
                  return r
                },
              }
            )
          },
          ts = Kf(Jf),
          ns = ts.right,
          es = ts.left,
          rs = function(t, n) {
            null == n && (n = e)
            for (
              var r = 0,
                i = t.length - 1,
                a = t[0],
                o = new Array(i < 0 ? 0 : i);
              r < i;

            )
              o[r] = n(a, (a = t[++r]))
            return o
          },
          is = function(t, n, r) {
            var i,
              a,
              o,
              u,
              c = t.length,
              f = n.length,
              s = new Array(c * f)
            for (null == r && (r = e), i = o = 0; i < c; ++i)
              for (u = t[i], a = 0; a < f; ++a, ++o) s[o] = r(u, n[a])
            return s
          },
          as = function(t, n) {
            return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN
          },
          os = function(t) {
            return null === t ? NaN : +t
          },
          us = function(t, n) {
            var e,
              r,
              i = t.length,
              a = 0,
              o = -1,
              u = 0,
              c = 0
            if (null == n)
              for (; ++o < i; )
                isNaN((e = os(t[o]))) ||
                  ((r = e - u), (u += r / ++a), (c += r * (e - u)))
            else
              for (; ++o < i; )
                isNaN((e = os(n(t[o], o, t)))) ||
                  ((r = e - u), (u += r / ++a), (c += r * (e - u)))
            if (a > 1) return c / (a - 1)
          },
          cs = function(t, n) {
            var e = us(t, n)
            return e ? Math.sqrt(e) : e
          },
          fs = function(t, n) {
            var e,
              r,
              i,
              a = t.length,
              o = -1
            if (null == n) {
              for (; ++o < a; )
                if (null != (e = t[o]) && e >= e)
                  for (r = i = e; ++o < a; )
                    null != (e = t[o]) && (r > e && (r = e), i < e && (i = e))
            } else
              for (; ++o < a; )
                if (null != (e = n(t[o], o, t)) && e >= e)
                  for (r = i = e; ++o < a; )
                    null != (e = n(t[o], o, t)) &&
                      (r > e && (r = e), i < e && (i = e))
            return [r, i]
          },
          ss = Array.prototype,
          ls = ss.slice,
          hs = ss.map,
          ds = function(t) {
            return function() {
              return t
            }
          },
          ps = function(t) {
            return t
          },
          vs = function(t, n, e) {
            ;(t = +t),
              (n = +n),
              (e =
                (i = arguments.length) < 2
                  ? ((n = t), (t = 0), 1)
                  : i < 3
                  ? 1
                  : +e)
            for (
              var r = -1,
                i = 0 | Math.max(0, Math.ceil((n - t) / e)),
                a = new Array(i);
              ++r < i;

            )
              a[r] = t + r * e
            return a
          },
          gs = Math.sqrt(50),
          bs = Math.sqrt(10),
          ys = Math.sqrt(2),
          _s = function(t, n, e) {
            var i,
              a,
              o,
              u = n < t,
              c = -1
            if (
              (u && ((i = t), (t = n), (n = i)),
              0 === (o = r(t, n, e)) || !isFinite(o))
            )
              return []
            if (o > 0)
              for (
                t = Math.ceil(t / o),
                  n = Math.floor(n / o),
                  a = new Array((i = Math.ceil(n - t + 1)));
                ++c < i;

              )
                a[c] = (t + c) * o
            else
              for (
                t = Math.floor(t * o),
                  n = Math.ceil(n * o),
                  a = new Array((i = Math.ceil(t - n + 1)));
                ++c < i;

              )
                a[c] = (t - c) / o
            return u && a.reverse(), a
          },
          ms = function(t) {
            return Math.ceil(Math.log(t.length) / Math.LN2) + 1
          },
          xs = function() {
            function t(t) {
              var a,
                o,
                u = t.length,
                c = new Array(u)
              for (a = 0; a < u; ++a) c[a] = n(t[a], a, t)
              var f = e(c),
                s = f[0],
                l = f[1],
                h = r(c, s, l)
              Array.isArray(h) ||
                ((h = i(s, l, h)),
                (h = vs(Math.ceil(s / h) * h, Math.floor(l / h) * h, h)))
              for (var d = h.length; h[0] <= s; ) h.shift(), --d
              for (; h[d - 1] > l; ) h.pop(), --d
              var p,
                v = new Array(d + 1)
              for (a = 0; a <= d; ++a)
                (p = v[a] = []),
                  (p.x0 = a > 0 ? h[a - 1] : s),
                  (p.x1 = a < d ? h[a] : l)
              for (a = 0; a < u; ++a)
                (o = c[a]), s <= o && o <= l && v[ns(h, o, 0, d)].push(t[a])
              return v
            }
            var n = ps,
              e = fs,
              r = ms
            return (
              (t.value = function(e) {
                return arguments.length
                  ? ((n = 'function' == typeof e ? e : ds(e)), t)
                  : n
              }),
              (t.domain = function(n) {
                return arguments.length
                  ? ((e = 'function' == typeof n ? n : ds([n[0], n[1]])), t)
                  : e
              }),
              (t.thresholds = function(n) {
                return arguments.length
                  ? ((r =
                      'function' == typeof n
                        ? n
                        : ds(Array.isArray(n) ? ls.call(n) : n)),
                    t)
                  : r
              }),
              t
            )
          },
          ws = function(t, n, e) {
            if ((null == e && (e = os), (r = t.length))) {
              if ((n = +n) <= 0 || r < 2) return +e(t[0], 0, t)
              if (n >= 1) return +e(t[r - 1], r - 1, t)
              var r,
                i = (r - 1) * n,
                a = Math.floor(i),
                o = +e(t[a], a, t)
              return o + (+e(t[a + 1], a + 1, t) - o) * (i - a)
            }
          },
          Ms = function(t, n, e) {
            return (
              (t = hs.call(t, os).sort(Jf)),
              Math.ceil(
                (e - n) /
                  (2 * (ws(t, 0.75) - ws(t, 0.25)) * Math.pow(t.length, -1 / 3))
              )
            )
          },
          ks = function(t, n, e) {
            return Math.ceil(
              (e - n) / (3.5 * cs(t) * Math.pow(t.length, -1 / 3))
            )
          },
          Ns = function(t, n) {
            var e,
              r,
              i = t.length,
              a = -1
            if (null == n) {
              for (; ++a < i; )
                if (null != (e = t[a]) && e >= e)
                  for (r = e; ++a < i; ) null != (e = t[a]) && e > r && (r = e)
            } else
              for (; ++a < i; )
                if (null != (e = n(t[a], a, t)) && e >= e)
                  for (r = e; ++a < i; )
                    null != (e = n(t[a], a, t)) && e > r && (r = e)
            return r
          },
          Ss = function(t, n) {
            var e,
              r = t.length,
              i = r,
              a = -1,
              o = 0
            if (null == n)
              for (; ++a < r; ) isNaN((e = os(t[a]))) ? --i : (o += e)
            else
              for (; ++a < r; ) isNaN((e = os(n(t[a], a, t)))) ? --i : (o += e)
            if (i) return o / i
          },
          As = function(t, n) {
            var e,
              r = t.length,
              i = -1,
              a = []
            if (null == n) for (; ++i < r; ) isNaN((e = os(t[i]))) || a.push(e)
            else for (; ++i < r; ) isNaN((e = os(n(t[i], i, t)))) || a.push(e)
            return ws(a.sort(Jf), 0.5)
          },
          Ts = function(t) {
            for (var n, e, r, i = t.length, a = -1, o = 0; ++a < i; )
              o += t[a].length
            for (e = new Array(o); --i >= 0; )
              for (r = t[i], n = r.length; --n >= 0; ) e[--o] = r[n]
            return e
          },
          Es = function(t, n) {
            var e,
              r,
              i = t.length,
              a = -1
            if (null == n) {
              for (; ++a < i; )
                if (null != (e = t[a]) && e >= e)
                  for (r = e; ++a < i; ) null != (e = t[a]) && r > e && (r = e)
            } else
              for (; ++a < i; )
                if (null != (e = n(t[a], a, t)) && e >= e)
                  for (r = e; ++a < i; )
                    null != (e = n(t[a], a, t)) && r > e && (r = e)
            return r
          },
          Cs = function(t, n) {
            for (var e = n.length, r = new Array(e); e--; ) r[e] = t[n[e]]
            return r
          },
          Ps = function(t, n) {
            if ((e = t.length)) {
              var e,
                r,
                i = 0,
                a = 0,
                o = t[a]
              for (null == n && (n = Jf); ++i < e; )
                (n((r = t[i]), o) < 0 || 0 !== n(o, o)) && ((o = r), (a = i))
              return 0 === n(o, o) ? a : void 0
            }
          },
          Rs = function(t, n, e) {
            for (
              var r,
                i,
                a = (null == e ? t.length : e) - (n = null == n ? 0 : +n);
              a;

            )
              (i = (Math.random() * a--) | 0),
                (r = t[a + n]),
                (t[a + n] = t[i + n]),
                (t[i + n] = r)
            return t
          },
          zs = function(t, n) {
            var e,
              r = t.length,
              i = -1,
              a = 0
            if (null == n) for (; ++i < r; ) (e = +t[i]) && (a += e)
            else for (; ++i < r; ) (e = +n(t[i], i, t)) && (a += e)
            return a
          },
          Ls = function(t) {
            if (!(i = t.length)) return []
            for (var n = -1, e = Es(t, a), r = new Array(e); ++n < e; )
              for (var i, o = -1, u = (r[n] = new Array(i)); ++o < i; )
                u[o] = t[o][n]
            return r
          },
          qs = function() {
            return Ls(arguments)
          },
          Os = Array.prototype.slice,
          Us = function(t) {
            return t
          },
          Ds = 1,
          Ys = 2,
          Is = 3,
          Fs = 4,
          Bs = 1e-6,
          js = { value: function() {} }
        b.prototype = g.prototype = {
          constructor: b,
          on: function(t, n) {
            var e,
              r = this._,
              i = y(t + '', r),
              a = -1,
              o = i.length
            {
              if (!(arguments.length < 2)) {
                if (null != n && 'function' != typeof n)
                  throw new Error('invalid callback: ' + n)
                for (; ++a < o; )
                  if ((e = (t = i[a]).type)) r[e] = m(r[e], t.name, n)
                  else if (null == n) for (e in r) r[e] = m(r[e], t.name, null)
                return this
              }
              for (; ++a < o; )
                if ((e = (t = i[a]).type) && (e = _(r[e], t.name))) return e
            }
          },
          copy: function() {
            var t = {},
              n = this._
            for (var e in n) t[e] = n[e].slice()
            return new b(t)
          },
          call: function(t, n) {
            if ((e = arguments.length - 2) > 0)
              for (var e, r, i = new Array(e), a = 0; a < e; ++a)
                i[a] = arguments[a + 2]
            if (!this._.hasOwnProperty(t)) throw new Error('unknown type: ' + t)
            for (r = this._[t], a = 0, e = r.length; a < e; ++a)
              r[a].value.apply(n, i)
          },
          apply: function(t, n, e) {
            if (!this._.hasOwnProperty(t)) throw new Error('unknown type: ' + t)
            for (var r = this._[t], i = 0, a = r.length; i < a; ++i)
              r[i].value.apply(n, e)
          },
        }
        var Xs = 'http://www.w3.org/1999/xhtml',
          Hs = {
            svg: 'http://www.w3.org/2000/svg',
            xhtml: Xs,
            xlink: 'http://www.w3.org/1999/xlink',
            xml: 'http://www.w3.org/XML/1998/namespace',
            xmlns: 'http://www.w3.org/2000/xmlns/',
          },
          Gs = function(t) {
            var n = (t += ''),
              e = n.indexOf(':')
            return (
              e >= 0 && 'xmlns' !== (n = t.slice(0, e)) && (t = t.slice(e + 1)),
              Hs.hasOwnProperty(n) ? { space: Hs[n], local: t } : t
            )
          },
          Vs = function(t) {
            var n = Gs(t)
            return (n.local ? w : x)(n)
          },
          $s = 0
        k.prototype = M.prototype = {
          constructor: k,
          get: function(t) {
            for (var n = this._; !(n in t); ) if (!(t = t.parentNode)) return
            return t[n]
          },
          set: function(t, n) {
            return (t[this._] = n)
          },
          remove: function(t) {
            return this._ in t && delete t[this._]
          },
          toString: function() {
            return this._
          },
        }
        var Ws = function(t) {
          return function() {
            return this.matches(t)
          }
        }
        if ('undefined' != typeof document) {
          var Zs = document.documentElement
          if (!Zs.matches) {
            var Qs =
              Zs.webkitMatchesSelector ||
              Zs.msMatchesSelector ||
              Zs.mozMatchesSelector ||
              Zs.oMatchesSelector
            Ws = function(t) {
              return function() {
                return Qs.call(this, t)
              }
            }
          }
        }
        var Js = Ws,
          Ks = {}
        if (((t.event = null), 'undefined' != typeof document)) {
          'onmouseenter' in document.documentElement ||
            (Ks = { mouseenter: 'mouseover', mouseleave: 'mouseout' })
        }
        var tl = function(t, n, e) {
            var r,
              i,
              a = A(t + ''),
              o = a.length
            {
              if (!(arguments.length < 2)) {
                for (u = n ? E : T, null == e && (e = !1), r = 0; r < o; ++r)
                  this.each(u(a[r], n, e))
                return this
              }
              var u = this.node().__on
              if (u)
                for (var c, f = 0, s = u.length; f < s; ++f)
                  for (r = 0, c = u[f]; r < o; ++r)
                    if ((i = a[r]).type === c.type && i.name === c.name)
                      return c.value
            }
          },
          nl = function() {
            for (var n, e = t.event; (n = e.sourceEvent); ) e = n
            return e
          },
          el = function(t, n) {
            var e = t.ownerSVGElement || t
            if (e.createSVGPoint) {
              var r = e.createSVGPoint()
              return (
                (r.x = n.clientX),
                (r.y = n.clientY),
                (r = r.matrixTransform(t.getScreenCTM().inverse())),
                [r.x, r.y]
              )
            }
            var i = t.getBoundingClientRect()
            return [
              n.clientX - i.left - t.clientLeft,
              n.clientY - i.top - t.clientTop,
            ]
          },
          rl = function(t) {
            var n = nl()
            return n.changedTouches && (n = n.changedTouches[0]), el(t, n)
          },
          il = function(t) {
            return null == t
              ? P
              : function() {
                  return this.querySelector(t)
                }
          },
          al = function(t) {
            'function' != typeof t && (t = il(t))
            for (
              var n = this._groups, e = n.length, r = new Array(e), i = 0;
              i < e;
              ++i
            )
              for (
                var a,
                  o,
                  u = n[i],
                  c = u.length,
                  f = (r[i] = new Array(c)),
                  s = 0;
                s < c;
                ++s
              )
                (a = u[s]) &&
                  (o = t.call(a, a.__data__, s, u)) &&
                  ('__data__' in a && (o.__data__ = a.__data__), (f[s] = o))
            return new bt(r, this._parents)
          },
          ol = function(t) {
            return null == t
              ? R
              : function() {
                  return this.querySelectorAll(t)
                }
          },
          ul = function(t) {
            'function' != typeof t && (t = ol(t))
            for (
              var n = this._groups, e = n.length, r = [], i = [], a = 0;
              a < e;
              ++a
            )
              for (var o, u = n[a], c = u.length, f = 0; f < c; ++f)
                (o = u[f]) && (r.push(t.call(o, o.__data__, f, u)), i.push(o))
            return new bt(r, i)
          },
          cl = function(t) {
            'function' != typeof t && (t = Js(t))
            for (
              var n = this._groups, e = n.length, r = new Array(e), i = 0;
              i < e;
              ++i
            )
              for (
                var a, o = n[i], u = o.length, c = (r[i] = []), f = 0;
                f < u;
                ++f
              )
                (a = o[f]) && t.call(a, a.__data__, f, o) && c.push(a)
            return new bt(r, this._parents)
          },
          fl = function(t) {
            return new Array(t.length)
          },
          sl = function() {
            return new bt(this._enter || this._groups.map(fl), this._parents)
          }
        z.prototype = {
          constructor: z,
          appendChild: function(t) {
            return this._parent.insertBefore(t, this._next)
          },
          insertBefore: function(t, n) {
            return this._parent.insertBefore(t, n)
          },
          querySelector: function(t) {
            return this._parent.querySelector(t)
          },
          querySelectorAll: function(t) {
            return this._parent.querySelectorAll(t)
          },
        }
        var ll = function(t) {
            return function() {
              return t
            }
          },
          hl = '$',
          dl = function(t, n) {
            if (!t)
              return (
                (d = new Array(this.size())),
                (f = -1),
                this.each(function(t) {
                  d[++f] = t
                }),
                d
              )
            var e = n ? q : L,
              r = this._parents,
              i = this._groups
            'function' != typeof t && (t = ll(t))
            for (
              var a = i.length,
                o = new Array(a),
                u = new Array(a),
                c = new Array(a),
                f = 0;
              f < a;
              ++f
            ) {
              var s = r[f],
                l = i[f],
                h = l.length,
                d = t.call(s, s && s.__data__, f, r),
                p = d.length,
                v = (u[f] = new Array(p)),
                g = (o[f] = new Array(p))
              e(s, l, v, g, (c[f] = new Array(h)), d, n)
              for (var b, y, _ = 0, m = 0; _ < p; ++_)
                if ((b = v[_])) {
                  for (_ >= m && (m = _ + 1); !(y = g[m]) && ++m < p; );
                  b._next = y || null
                }
            }
            return (o = new bt(o, r)), (o._enter = u), (o._exit = c), o
          },
          pl = function() {
            return new bt(this._exit || this._groups.map(fl), this._parents)
          },
          vl = function(t) {
            for (
              var n = this._groups,
                e = t._groups,
                r = n.length,
                i = e.length,
                a = Math.min(r, i),
                o = new Array(r),
                u = 0;
              u < a;
              ++u
            )
              for (
                var c,
                  f = n[u],
                  s = e[u],
                  l = f.length,
                  h = (o[u] = new Array(l)),
                  d = 0;
                d < l;
                ++d
              )
                (c = f[d] || s[d]) && (h[d] = c)
            for (; u < r; ++u) o[u] = n[u]
            return new bt(o, this._parents)
          },
          gl = function() {
            for (var t = this._groups, n = -1, e = t.length; ++n < e; )
              for (var r, i = t[n], a = i.length - 1, o = i[a]; --a >= 0; )
                (r = i[a]) &&
                  (o && o !== r.nextSibling && o.parentNode.insertBefore(r, o),
                  (o = r))
            return this
          },
          bl = function(t) {
            function n(n, e) {
              return n && e ? t(n.__data__, e.__data__) : !n - !e
            }
            t || (t = O)
            for (
              var e = this._groups, r = e.length, i = new Array(r), a = 0;
              a < r;
              ++a
            ) {
              for (
                var o, u = e[a], c = u.length, f = (i[a] = new Array(c)), s = 0;
                s < c;
                ++s
              )
                (o = u[s]) && (f[s] = o)
              f.sort(n)
            }
            return new bt(i, this._parents).order()
          },
          yl = function() {
            var t = arguments[0]
            return (arguments[0] = this), t.apply(null, arguments), this
          },
          _l = function() {
            var t = new Array(this.size()),
              n = -1
            return (
              this.each(function() {
                t[++n] = this
              }),
              t
            )
          },
          ml = function() {
            for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
              for (var r = t[n], i = 0, a = r.length; i < a; ++i) {
                var o = r[i]
                if (o) return o
              }
            return null
          },
          xl = function() {
            var t = 0
            return (
              this.each(function() {
                ++t
              }),
              t
            )
          },
          wl = function() {
            return !this.node()
          },
          Ml = function(t) {
            for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
              for (var i, a = n[e], o = 0, u = a.length; o < u; ++o)
                (i = a[o]) && t.call(i, i.__data__, o, a)
            return this
          },
          kl = function(t, n) {
            var e = Gs(t)
            if (arguments.length < 2) {
              var r = this.node()
              return e.local
                ? r.getAttributeNS(e.space, e.local)
                : r.getAttribute(e)
            }
            return this.each(
              (null == n
                ? e.local
                  ? D
                  : U
                : 'function' == typeof n
                ? e.local
                  ? B
                  : F
                : e.local
                ? I
                : Y)(e, n)
            )
          },
          Nl = function(t) {
            return (
              (t.ownerDocument && t.ownerDocument.defaultView) ||
              (t.document && t) ||
              t.defaultView
            )
          },
          Sl = function(t, n, e) {
            return arguments.length > 1
              ? this.each(
                  (null == n ? j : 'function' == typeof n ? H : X)(
                    t,
                    n,
                    null == e ? '' : e
                  )
                )
              : G(this.node(), t)
          },
          Al = function(t, n) {
            return arguments.length > 1
              ? this.each(
                  (null == n ? V : 'function' == typeof n ? W : $)(t, n)
                )
              : this.node()[t]
          }
        J.prototype = {
          add: function(t) {
            this._names.indexOf(t) < 0 &&
              (this._names.push(t),
              this._node.setAttribute('class', this._names.join(' ')))
          },
          remove: function(t) {
            var n = this._names.indexOf(t)
            n >= 0 &&
              (this._names.splice(n, 1),
              this._node.setAttribute('class', this._names.join(' ')))
          },
          contains: function(t) {
            return this._names.indexOf(t) >= 0
          },
        }
        var Tl = function(t, n) {
            var e = Z(t + '')
            if (arguments.length < 2) {
              for (var r = Q(this.node()), i = -1, a = e.length; ++i < a; )
                if (!r.contains(e[i])) return !1
              return !0
            }
            return this.each(('function' == typeof n ? rt : n ? nt : et)(e, n))
          },
          El = function(t) {
            return arguments.length
              ? this.each(
                  null == t ? it : ('function' == typeof t ? ot : at)(t)
                )
              : this.node().textContent
          },
          Cl = function(t) {
            return arguments.length
              ? this.each(
                  null == t ? ut : ('function' == typeof t ? ft : ct)(t)
                )
              : this.node().innerHTML
          },
          Pl = function() {
            return this.each(st)
          },
          Rl = function() {
            return this.each(lt)
          },
          zl = function(t) {
            var n = 'function' == typeof t ? t : Vs(t)
            return this.select(function() {
              return this.appendChild(n.apply(this, arguments))
            })
          },
          Ll = function(t, n) {
            var e = 'function' == typeof t ? t : Vs(t),
              r = null == n ? ht : 'function' == typeof n ? n : il(n)
            return this.select(function() {
              return this.insertBefore(
                e.apply(this, arguments),
                r.apply(this, arguments) || null
              )
            })
          },
          ql = function() {
            return this.each(dt)
          },
          Ol = function(t) {
            return arguments.length
              ? this.property('__data__', t)
              : this.node().__data__
          },
          Ul = function(t, n) {
            return this.each(('function' == typeof n ? gt : vt)(t, n))
          },
          Dl = [null]
        bt.prototype = yt.prototype = {
          constructor: bt,
          select: al,
          selectAll: ul,
          filter: cl,
          data: dl,
          enter: sl,
          exit: pl,
          merge: vl,
          order: gl,
          sort: bl,
          call: yl,
          nodes: _l,
          node: ml,
          size: xl,
          empty: wl,
          each: Ml,
          attr: kl,
          style: Sl,
          property: Al,
          classed: Tl,
          text: El,
          html: Cl,
          raise: Pl,
          lower: Rl,
          append: zl,
          insert: Ll,
          remove: ql,
          datum: Ol,
          on: tl,
          dispatch: Ul,
        }
        var Yl = function(t) {
            return 'string' == typeof t
              ? new bt(
                  [[document.querySelector(t)]],
                  [document.documentElement]
                )
              : new bt([[t]], Dl)
          },
          Il = function(t) {
            return 'string' == typeof t
              ? new bt(
                  [document.querySelectorAll(t)],
                  [document.documentElement]
                )
              : new bt([null == t ? [] : t], Dl)
          },
          Fl = function(t, n, e) {
            arguments.length < 3 && ((e = n), (n = nl().changedTouches))
            for (var r, i = 0, a = n ? n.length : 0; i < a; ++i)
              if ((r = n[i]).identifier === e) return el(t, r)
            return null
          },
          Bl = function(t, n) {
            null == n && (n = nl().touches)
            for (var e = 0, r = n ? n.length : 0, i = new Array(r); e < r; ++e)
              i[e] = el(t, n[e])
            return i
          },
          jl = function() {
            t.event.preventDefault(), t.event.stopImmediatePropagation()
          },
          Xl = function(t) {
            var n = t.document.documentElement,
              e = Yl(t).on('dragstart.drag', jl, !0)
            'onselectstart' in n
              ? e.on('selectstart.drag', jl, !0)
              : ((n.__noselect = n.style.MozUserSelect),
                (n.style.MozUserSelect = 'none'))
          },
          Hl = function(t) {
            return function() {
              return t
            }
          }
        xt.prototype.on = function() {
          var t = this._.on.apply(this._, arguments)
          return t === this._ ? this : t
        }
        var Gl = function() {
            function n(t) {
              t.on('mousedown.drag', e)
                .filter(Nt)
                .on('touchstart.drag', a)
                .on('touchmove.drag', o)
                .on('touchend.drag touchcancel.drag', u)
                .style('touch-action', 'none')
                .style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)')
            }
            function e() {
              if (!h && d.apply(this, arguments)) {
                var n = c(
                  'mouse',
                  p.apply(this, arguments),
                  rl,
                  this,
                  arguments
                )
                n &&
                  (Yl(t.event.view)
                    .on('mousemove.drag', r, !0)
                    .on('mouseup.drag', i, !0),
                  Xl(t.event.view),
                  _t(),
                  (l = !1),
                  (f = t.event.clientX),
                  (s = t.event.clientY),
                  n('start'))
              }
            }
            function r() {
              if ((jl(), !l)) {
                var n = t.event.clientX - f,
                  e = t.event.clientY - s
                l = n * n + e * e > m
              }
              b.mouse('drag')
            }
            function i() {
              Yl(t.event.view).on('mousemove.drag mouseup.drag', null),
                mt(t.event.view, l),
                jl(),
                b.mouse('end')
            }
            function a() {
              if (d.apply(this, arguments)) {
                var n,
                  e,
                  r = t.event.changedTouches,
                  i = p.apply(this, arguments),
                  a = r.length
                for (n = 0; n < a; ++n)
                  (e = c(r[n].identifier, i, Fl, this, arguments)) &&
                    (_t(), e('start'))
              }
            }
            function o() {
              var n,
                e,
                r = t.event.changedTouches,
                i = r.length
              for (n = 0; n < i; ++n)
                (e = b[r[n].identifier]) && (jl(), e('drag'))
            }
            function u() {
              var n,
                e,
                r = t.event.changedTouches,
                i = r.length
              for (
                h && clearTimeout(h),
                  h = setTimeout(function() {
                    h = null
                  }, 500),
                  n = 0;
                n < i;
                ++n
              )
                (e = b[r[n].identifier]) && (_t(), e('end'))
            }
            function c(e, r, i, a, o) {
              var u,
                c,
                f,
                s = i(r, e),
                l = y.copy()
              if (
                C(
                  new xt(n, 'beforestart', u, e, _, s[0], s[1], 0, 0, l),
                  function() {
                    return (
                      null != (t.event.subject = u = v.apply(a, o)) &&
                      ((c = u.x - s[0] || 0), (f = u.y - s[1] || 0), !0)
                    )
                  }
                )
              )
                return function t(h) {
                  var d,
                    p = s
                  switch (h) {
                    case 'start':
                      ;(b[e] = t), (d = _++)
                      break
                    case 'end':
                      delete b[e], --_
                    case 'drag':
                      ;(s = i(r, e)), (d = _)
                  }
                  C(
                    new xt(
                      n,
                      h,
                      u,
                      e,
                      d,
                      s[0] + c,
                      s[1] + f,
                      s[0] - p[0],
                      s[1] - p[1],
                      l
                    ),
                    l.apply,
                    l,
                    [h, a, o]
                  )
                }
            }
            var f,
              s,
              l,
              h,
              d = wt,
              p = Mt,
              v = kt,
              b = {},
              y = g('start', 'drag', 'end'),
              _ = 0,
              m = 0
            return (
              (n.filter = function(t) {
                return arguments.length
                  ? ((d = 'function' == typeof t ? t : Hl(!!t)), n)
                  : d
              }),
              (n.container = function(t) {
                return arguments.length
                  ? ((p = 'function' == typeof t ? t : Hl(t)), n)
                  : p
              }),
              (n.subject = function(t) {
                return arguments.length
                  ? ((v = 'function' == typeof t ? t : Hl(t)), n)
                  : v
              }),
              (n.on = function() {
                var t = y.on.apply(y, arguments)
                return t === y ? n : t
              }),
              (n.clickDistance = function(t) {
                return arguments.length ? ((m = (t = +t) * t), n) : Math.sqrt(m)
              }),
              n
            )
          },
          Vl = function(t, n, e) {
            ;(t.prototype = n.prototype = e), (e.constructor = t)
          },
          $l = '\\s*([+-]?\\d+)\\s*',
          Wl = '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*',
          Zl = '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
          Ql = /^#([0-9a-f]{3})$/,
          Jl = /^#([0-9a-f]{6})$/,
          Kl = new RegExp('^rgb\\(' + [$l, $l, $l] + '\\)$'),
          th = new RegExp('^rgb\\(' + [Zl, Zl, Zl] + '\\)$'),
          nh = new RegExp('^rgba\\(' + [$l, $l, $l, Wl] + '\\)$'),
          eh = new RegExp('^rgba\\(' + [Zl, Zl, Zl, Wl] + '\\)$'),
          rh = new RegExp('^hsl\\(' + [Wl, Zl, Zl] + '\\)$'),
          ih = new RegExp('^hsla\\(' + [Wl, Zl, Zl, Wl] + '\\)$'),
          ah = {
            aliceblue: 15792383,
            antiquewhite: 16444375,
            aqua: 65535,
            aquamarine: 8388564,
            azure: 15794175,
            beige: 16119260,
            bisque: 16770244,
            black: 0,
            blanchedalmond: 16772045,
            blue: 255,
            blueviolet: 9055202,
            brown: 10824234,
            burlywood: 14596231,
            cadetblue: 6266528,
            chartreuse: 8388352,
            chocolate: 13789470,
            coral: 16744272,
            cornflowerblue: 6591981,
            cornsilk: 16775388,
            crimson: 14423100,
            cyan: 65535,
            darkblue: 139,
            darkcyan: 35723,
            darkgoldenrod: 12092939,
            darkgray: 11119017,
            darkgreen: 25600,
            darkgrey: 11119017,
            darkkhaki: 12433259,
            darkmagenta: 9109643,
            darkolivegreen: 5597999,
            darkorange: 16747520,
            darkorchid: 10040012,
            darkred: 9109504,
            darksalmon: 15308410,
            darkseagreen: 9419919,
            darkslateblue: 4734347,
            darkslategray: 3100495,
            darkslategrey: 3100495,
            darkturquoise: 52945,
            darkviolet: 9699539,
            deeppink: 16716947,
            deepskyblue: 49151,
            dimgray: 6908265,
            dimgrey: 6908265,
            dodgerblue: 2003199,
            firebrick: 11674146,
            floralwhite: 16775920,
            forestgreen: 2263842,
            fuchsia: 16711935,
            gainsboro: 14474460,
            ghostwhite: 16316671,
            gold: 16766720,
            goldenrod: 14329120,
            gray: 8421504,
            green: 32768,
            greenyellow: 11403055,
            grey: 8421504,
            honeydew: 15794160,
            hotpink: 16738740,
            indianred: 13458524,
            indigo: 4915330,
            ivory: 16777200,
            khaki: 15787660,
            lavender: 15132410,
            lavenderblush: 16773365,
            lawngreen: 8190976,
            lemonchiffon: 16775885,
            lightblue: 11393254,
            lightcoral: 15761536,
            lightcyan: 14745599,
            lightgoldenrodyellow: 16448210,
            lightgray: 13882323,
            lightgreen: 9498256,
            lightgrey: 13882323,
            lightpink: 16758465,
            lightsalmon: 16752762,
            lightseagreen: 2142890,
            lightskyblue: 8900346,
            lightslategray: 7833753,
            lightslategrey: 7833753,
            lightsteelblue: 11584734,
            lightyellow: 16777184,
            lime: 65280,
            limegreen: 3329330,
            linen: 16445670,
            magenta: 16711935,
            maroon: 8388608,
            mediumaquamarine: 6737322,
            mediumblue: 205,
            mediumorchid: 12211667,
            mediumpurple: 9662683,
            mediumseagreen: 3978097,
            mediumslateblue: 8087790,
            mediumspringgreen: 64154,
            mediumturquoise: 4772300,
            mediumvioletred: 13047173,
            midnightblue: 1644912,
            mintcream: 16121850,
            mistyrose: 16770273,
            moccasin: 16770229,
            navajowhite: 16768685,
            navy: 128,
            oldlace: 16643558,
            olive: 8421376,
            olivedrab: 7048739,
            orange: 16753920,
            orangered: 16729344,
            orchid: 14315734,
            palegoldenrod: 15657130,
            palegreen: 10025880,
            paleturquoise: 11529966,
            palevioletred: 14381203,
            papayawhip: 16773077,
            peachpuff: 16767673,
            peru: 13468991,
            pink: 16761035,
            plum: 14524637,
            powderblue: 11591910,
            purple: 8388736,
            rebeccapurple: 6697881,
            red: 16711680,
            rosybrown: 12357519,
            royalblue: 4286945,
            saddlebrown: 9127187,
            salmon: 16416882,
            sandybrown: 16032864,
            seagreen: 3050327,
            seashell: 16774638,
            sienna: 10506797,
            silver: 12632256,
            skyblue: 8900331,
            slateblue: 6970061,
            slategray: 7372944,
            slategrey: 7372944,
            snow: 16775930,
            springgreen: 65407,
            steelblue: 4620980,
            tan: 13808780,
            teal: 32896,
            thistle: 14204888,
            tomato: 16737095,
            turquoise: 4251856,
            violet: 15631086,
            wheat: 16113331,
            white: 16777215,
            whitesmoke: 16119285,
            yellow: 16776960,
            yellowgreen: 10145074,
          }
        Vl(At, Tt, {
          displayable: function() {
            return this.rgb().displayable()
          },
          toString: function() {
            return this.rgb() + ''
          },
        }),
          Vl(
            zt,
            Rt,
            St(At, {
              brighter: function(t) {
                return (
                  (t = null == t ? 1 / 0.7 : Math.pow(1 / 0.7, t)),
                  new zt(this.r * t, this.g * t, this.b * t, this.opacity)
                )
              },
              darker: function(t) {
                return (
                  (t = null == t ? 0.7 : Math.pow(0.7, t)),
                  new zt(this.r * t, this.g * t, this.b * t, this.opacity)
                )
              },
              rgb: function() {
                return this
              },
              displayable: function() {
                return (
                  0 <= this.r &&
                  this.r <= 255 &&
                  0 <= this.g &&
                  this.g <= 255 &&
                  0 <= this.b &&
                  this.b <= 255 &&
                  0 <= this.opacity &&
                  this.opacity <= 1
                )
              },
              toString: function() {
                var t = this.opacity
                return (
                  (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))),
                  (1 === t ? 'rgb(' : 'rgba(') +
                    Math.max(0, Math.min(255, Math.round(this.r) || 0)) +
                    ', ' +
                    Math.max(0, Math.min(255, Math.round(this.g) || 0)) +
                    ', ' +
                    Math.max(0, Math.min(255, Math.round(this.b) || 0)) +
                    (1 === t ? ')' : ', ' + t + ')')
                )
              },
            })
          ),
          Vl(
            Ut,
            Ot,
            St(At, {
              brighter: function(t) {
                return (
                  (t = null == t ? 1 / 0.7 : Math.pow(1 / 0.7, t)),
                  new Ut(this.h, this.s, this.l * t, this.opacity)
                )
              },
              darker: function(t) {
                return (
                  (t = null == t ? 0.7 : Math.pow(0.7, t)),
                  new Ut(this.h, this.s, this.l * t, this.opacity)
                )
              },
              rgb: function() {
                var t = (this.h % 360) + 360 * (this.h < 0),
                  n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                  e = this.l,
                  r = e + (e < 0.5 ? e : 1 - e) * n,
                  i = 2 * e - r
                return new zt(
                  Dt(t >= 240 ? t - 240 : t + 120, i, r),
                  Dt(t, i, r),
                  Dt(t < 120 ? t + 240 : t - 120, i, r),
                  this.opacity
                )
              },
              displayable: function() {
                return (
                  ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
                  0 <= this.l &&
                  this.l <= 1 &&
                  0 <= this.opacity &&
                  this.opacity <= 1
                )
              },
            })
          )
        var oh = Math.PI / 180,
          uh = 180 / Math.PI,
          ch = 0.95047,
          fh = 1,
          sh = 1.08883,
          lh = 4 / 29,
          hh = 6 / 29,
          dh = 3 * hh * hh,
          ph = hh * hh * hh
        Vl(
          Ft,
          It,
          St(At, {
            brighter: function(t) {
              return new Ft(
                this.l + 18 * (null == t ? 1 : t),
                this.a,
                this.b,
                this.opacity
              )
            },
            darker: function(t) {
              return new Ft(
                this.l - 18 * (null == t ? 1 : t),
                this.a,
                this.b,
                this.opacity
              )
            },
            rgb: function() {
              var t = (this.l + 16) / 116,
                n = isNaN(this.a) ? t : t + this.a / 500,
                e = isNaN(this.b) ? t : t - this.b / 200
              return (
                (t = fh * jt(t)),
                (n = ch * jt(n)),
                (e = sh * jt(e)),
                new zt(
                  Xt(3.2404542 * n - 1.5371385 * t - 0.4985314 * e),
                  Xt(-0.969266 * n + 1.8760108 * t + 0.041556 * e),
                  Xt(0.0556434 * n - 0.2040259 * t + 1.0572252 * e),
                  this.opacity
                )
              )
            },
          })
        ),
          Vl(
            $t,
            Vt,
            St(At, {
              brighter: function(t) {
                return new $t(
                  this.h,
                  this.c,
                  this.l + 18 * (null == t ? 1 : t),
                  this.opacity
                )
              },
              darker: function(t) {
                return new $t(
                  this.h,
                  this.c,
                  this.l - 18 * (null == t ? 1 : t),
                  this.opacity
                )
              },
              rgb: function() {
                return Yt(this).rgb()
              },
            })
          )
        var vh = -0.14861,
          gh = 1.78277,
          bh = -0.29227,
          yh = -0.90649,
          _h = 1.97294,
          mh = _h * yh,
          xh = _h * gh,
          wh = gh * bh - yh * vh
        Vl(
          Qt,
          Zt,
          St(At, {
            brighter: function(t) {
              return (
                (t = null == t ? 1 / 0.7 : Math.pow(1 / 0.7, t)),
                new Qt(this.h, this.s, this.l * t, this.opacity)
              )
            },
            darker: function(t) {
              return (
                (t = null == t ? 0.7 : Math.pow(0.7, t)),
                new Qt(this.h, this.s, this.l * t, this.opacity)
              )
            },
            rgb: function() {
              var t = isNaN(this.h) ? 0 : (this.h + 120) * oh,
                n = +this.l,
                e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
                r = Math.cos(t),
                i = Math.sin(t)
              return new zt(
                255 * (n + e * (vh * r + gh * i)),
                255 * (n + e * (bh * r + yh * i)),
                255 * (n + e * (_h * r)),
                this.opacity
              )
            },
          })
        )
        var Mh,
          kh,
          Nh,
          Sh,
          Ah,
          Th,
          Eh = function(t) {
            var n = t.length - 1
            return function(e) {
              var r =
                  e <= 0
                    ? (e = 0)
                    : e >= 1
                    ? ((e = 1), n - 1)
                    : Math.floor(e * n),
                i = t[r],
                a = t[r + 1],
                o = r > 0 ? t[r - 1] : 2 * i - a,
                u = r < n - 1 ? t[r + 2] : 2 * a - i
              return Jt((e - r / n) * n, o, i, a, u)
            }
          },
          Ch = function(t) {
            var n = t.length
            return function(e) {
              var r = Math.floor(((e %= 1) < 0 ? ++e : e) * n),
                i = t[(r + n - 1) % n],
                a = t[r % n],
                o = t[(r + 1) % n],
                u = t[(r + 2) % n]
              return Jt((e - r / n) * n, i, a, o, u)
            }
          },
          Ph = function(t) {
            return function() {
              return t
            }
          },
          Rh = (function t(n) {
            function e(t, n) {
              var e = r((t = Rt(t)).r, (n = Rt(n)).r),
                i = r(t.g, n.g),
                a = r(t.b, n.b),
                o = rn(t.opacity, n.opacity)
              return function(n) {
                return (
                  (t.r = e(n)),
                  (t.g = i(n)),
                  (t.b = a(n)),
                  (t.opacity = o(n)),
                  t + ''
                )
              }
            }
            var r = en(n)
            return (e.gamma = t), e
          })(1),
          zh = an(Eh),
          Lh = an(Ch),
          qh = function(t, n) {
            var e,
              r = n ? n.length : 0,
              i = t ? Math.min(r, t.length) : 0,
              a = new Array(r),
              o = new Array(r)
            for (e = 0; e < i; ++e) a[e] = Bh(t[e], n[e])
            for (; e < r; ++e) o[e] = n[e]
            return function(t) {
              for (e = 0; e < i; ++e) o[e] = a[e](t)
              return o
            }
          },
          Oh = function(t, n) {
            var e = new Date()
            return (
              (t = +t),
              (n -= t),
              function(r) {
                return e.setTime(t + n * r), e
              }
            )
          },
          Uh = function(t, n) {
            return (
              (t = +t),
              (n -= t),
              function(e) {
                return t + n * e
              }
            )
          },
          Dh = function(t, n) {
            var e,
              r = {},
              i = {}
            ;(null !== t && 'object' == typeof t) || (t = {}),
              (null !== n && 'object' == typeof n) || (n = {})
            for (e in n) e in t ? (r[e] = Bh(t[e], n[e])) : (i[e] = n[e])
            return function(t) {
              for (e in r) i[e] = r[e](t)
              return i
            }
          },
          Yh = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
          Ih = new RegExp(Yh.source, 'g'),
          Fh = function(t, n) {
            var e,
              r,
              i,
              a = (Yh.lastIndex = Ih.lastIndex = 0),
              o = -1,
              u = [],
              c = []
            for (t += '', n += ''; (e = Yh.exec(t)) && (r = Ih.exec(n)); )
              (i = r.index) > a &&
                ((i = n.slice(a, i)), u[o] ? (u[o] += i) : (u[++o] = i)),
                (e = e[0]) === (r = r[0])
                  ? u[o]
                    ? (u[o] += r)
                    : (u[++o] = r)
                  : ((u[++o] = null), c.push({ i: o, x: Uh(e, r) })),
                (a = Ih.lastIndex)
            return (
              a < n.length &&
                ((i = n.slice(a)), u[o] ? (u[o] += i) : (u[++o] = i)),
              u.length < 2
                ? c[0]
                  ? un(c[0].x)
                  : on(n)
                : ((n = c.length),
                  function(t) {
                    for (var e, r = 0; r < n; ++r) u[(e = c[r]).i] = e.x(t)
                    return u.join('')
                  })
            )
          },
          Bh = function(t, n) {
            var e,
              r = typeof n
            return null == n || 'boolean' === r
              ? Ph(n)
              : ('number' === r
                  ? Uh
                  : 'string' === r
                  ? (e = Tt(n))
                    ? ((n = e), Rh)
                    : Fh
                  : n instanceof Tt
                  ? Rh
                  : n instanceof Date
                  ? Oh
                  : Array.isArray(n)
                  ? qh
                  : ('function' != typeof n.valueOf &&
                      'function' != typeof n.toString) ||
                    isNaN(n)
                  ? Dh
                  : Uh)(t, n)
          },
          jh = function(t, n) {
            return (
              (t = +t),
              (n -= t),
              function(e) {
                return Math.round(t + n * e)
              }
            )
          },
          Xh = 180 / Math.PI,
          Hh = {
            translateX: 0,
            translateY: 0,
            rotate: 0,
            skewX: 0,
            scaleX: 1,
            scaleY: 1,
          },
          Gh = function(t, n, e, r, i, a) {
            var o, u, c
            return (
              (o = Math.sqrt(t * t + n * n)) && ((t /= o), (n /= o)),
              (c = t * e + n * r) && ((e -= t * c), (r -= n * c)),
              (u = Math.sqrt(e * e + r * r)) && ((e /= u), (r /= u), (c /= u)),
              t * r < n * e && ((t = -t), (n = -n), (c = -c), (o = -o)),
              {
                translateX: i,
                translateY: a,
                rotate: Math.atan2(n, t) * Xh,
                skewX: Math.atan(c) * Xh,
                scaleX: o,
                scaleY: u,
              }
            )
          },
          Vh = sn(cn, 'px, ', 'px)', 'deg)'),
          $h = sn(fn, ', ', ')', ')'),
          Wh = Math.SQRT2,
          Zh = function(t, n) {
            var e,
              r,
              i = t[0],
              a = t[1],
              o = t[2],
              u = n[0],
              c = n[1],
              f = n[2],
              s = u - i,
              l = c - a,
              h = s * s + l * l
            if (h < 1e-12)
              (r = Math.log(f / o) / Wh),
                (e = function(t) {
                  return [i + t * s, a + t * l, o * Math.exp(Wh * t * r)]
                })
            else {
              var d = Math.sqrt(h),
                p = (f * f - o * o + 4 * h) / (2 * o * 2 * d),
                v = (f * f - o * o - 4 * h) / (2 * f * 2 * d),
                g = Math.log(Math.sqrt(p * p + 1) - p),
                b = Math.log(Math.sqrt(v * v + 1) - v)
              ;(r = (b - g) / Wh),
                (e = function(t) {
                  var n = t * r,
                    e = ln(g),
                    u = (o / (2 * d)) * (e * dn(Wh * n + g) - hn(g))
                  return [i + u * s, a + u * l, (o * e) / ln(Wh * n + g)]
                })
            }
            return (e.duration = 1e3 * r), e
          },
          Qh = pn(nn),
          Jh = pn(rn),
          Kh = gn(nn),
          td = gn(rn),
          nd = bn(nn),
          ed = bn(rn),
          rd = function(t, n) {
            for (var e = new Array(n), r = 0; r < n; ++r) e[r] = t(r / (n - 1))
            return e
          },
          id = 0,
          ad = 0,
          od = 0,
          ud = 1e3,
          cd = 0,
          fd = 0,
          sd = 0,
          ld =
            'object' == typeof performance && performance.now
              ? performance
              : Date,
          hd =
            'object' == typeof window && window.requestAnimationFrame
              ? window.requestAnimationFrame.bind(window)
              : function(t) {
                  setTimeout(t, 17)
                }
        mn.prototype = xn.prototype = {
          constructor: mn,
          restart: function(t, n, e) {
            if ('function' != typeof t)
              throw new TypeError('callback is not a function')
            ;(e = (null == e ? yn() : +e) + (null == n ? 0 : +n)),
              this._next ||
                Th === this ||
                (Th ? (Th._next = this) : (Ah = this), (Th = this)),
              (this._call = t),
              (this._time = e),
              Sn()
          },
          stop: function() {
            this._call && ((this._call = null), (this._time = 1 / 0), Sn())
          },
        }
        var dd = function(t, n, e) {
            var r = new mn()
            return (
              (n = null == n ? 0 : +n),
              r.restart(
                function(e) {
                  r.stop(), t(e + n)
                },
                n,
                e
              ),
              r
            )
          },
          pd = function(t, n, e) {
            var r = new mn(),
              i = n
            return null == n
              ? (r.restart(t, n, e), r)
              : ((n = +n),
                (e = null == e ? yn() : +e),
                r.restart(
                  function a(o) {
                    ;(o += i), r.restart(a, (i += n), e), t(o)
                  },
                  n,
                  e
                ),
                r)
          },
          vd = g('start', 'end', 'interrupt'),
          gd = [],
          bd = 0,
          yd = 1,
          _d = 2,
          md = 3,
          xd = 4,
          wd = 5,
          Md = 6,
          kd = function(t, n, e, r, i, a) {
            var o = t.__transition
            if (o) {
              if (e in o) return
            } else t.__transition = {}
            Cn(t, e, {
              name: n,
              index: r,
              group: i,
              on: vd,
              tween: gd,
              time: a.time,
              delay: a.delay,
              duration: a.duration,
              ease: a.ease,
              timer: null,
              state: bd,
            })
          },
          Nd = function(t, n) {
            var e,
              r,
              i,
              a = t.__transition,
              o = !0
            if (a) {
              n = null == n ? null : n + ''
              for (i in a)
                (e = a[i]).name === n
                  ? ((r = e.state > _d && e.state < wd),
                    (e.state = Md),
                    e.timer.stop(),
                    r &&
                      e.on.call('interrupt', t, t.__data__, e.index, e.group),
                    delete a[i])
                  : (o = !1)
              o && delete t.__transition
            }
          },
          Sd = function(t) {
            return this.each(function() {
              Nd(this, t)
            })
          },
          Ad = function(t, n) {
            var e = this._id
            if (((t += ''), arguments.length < 2)) {
              for (
                var r, i = En(this.node(), e).tween, a = 0, o = i.length;
                a < o;
                ++a
              )
                if ((r = i[a]).name === t) return r.value
              return null
            }
            return this.each((null == n ? Pn : Rn)(e, t, n))
          },
          Td = function(t, n) {
            var e
            return ('number' == typeof n
              ? Uh
              : n instanceof Tt
              ? Rh
              : (e = Tt(n))
              ? ((n = e), Rh)
              : Fh)(t, n)
          },
          Ed = function(t, n) {
            var e = Gs(t),
              r = 'transform' === e ? $h : Td
            return this.attrTween(
              t,
              'function' == typeof n
                ? (e.local ? Yn : Dn)(e, r, zn(this, 'attr.' + t, n))
                : null == n
                ? (e.local ? qn : Ln)(e)
                : (e.local ? Un : On)(e, r, n + '')
            )
          },
          Cd = function(t, n) {
            var e = 'attr.' + t
            if (arguments.length < 2) return (e = this.tween(e)) && e._value
            if (null == n) return this.tween(e, null)
            if ('function' != typeof n) throw new Error()
            var r = Gs(t)
            return this.tween(e, (r.local ? In : Fn)(r, n))
          },
          Pd = function(t) {
            var n = this._id
            return arguments.length
              ? this.each(('function' == typeof t ? Bn : jn)(n, t))
              : En(this.node(), n).delay
          },
          Rd = function(t) {
            var n = this._id
            return arguments.length
              ? this.each(('function' == typeof t ? Xn : Hn)(n, t))
              : En(this.node(), n).duration
          },
          zd = function(t) {
            var n = this._id
            return arguments.length
              ? this.each(Gn(n, t))
              : En(this.node(), n).ease
          },
          Ld = function(t) {
            'function' != typeof t && (t = Js(t))
            for (
              var n = this._groups, e = n.length, r = new Array(e), i = 0;
              i < e;
              ++i
            )
              for (
                var a, o = n[i], u = o.length, c = (r[i] = []), f = 0;
                f < u;
                ++f
              )
                (a = o[f]) && t.call(a, a.__data__, f, o) && c.push(a)
            return new re(r, this._parents, this._name, this._id)
          },
          qd = function(t) {
            if (t._id !== this._id) throw new Error()
            for (
              var n = this._groups,
                e = t._groups,
                r = n.length,
                i = e.length,
                a = Math.min(r, i),
                o = new Array(r),
                u = 0;
              u < a;
              ++u
            )
              for (
                var c,
                  f = n[u],
                  s = e[u],
                  l = f.length,
                  h = (o[u] = new Array(l)),
                  d = 0;
                d < l;
                ++d
              )
                (c = f[d] || s[d]) && (h[d] = c)
            for (; u < r; ++u) o[u] = n[u]
            return new re(o, this._parents, this._name, this._id)
          },
          Od = function(t, n) {
            var e = this._id
            return arguments.length < 2
              ? En(this.node(), e).on.on(t)
              : this.each($n(e, t, n))
          },
          Ud = function() {
            return this.on('end.remove', Wn(this._id))
          },
          Dd = function(t) {
            var n = this._name,
              e = this._id
            'function' != typeof t && (t = il(t))
            for (
              var r = this._groups, i = r.length, a = new Array(i), o = 0;
              o < i;
              ++o
            )
              for (
                var u,
                  c,
                  f = r[o],
                  s = f.length,
                  l = (a[o] = new Array(s)),
                  h = 0;
                h < s;
                ++h
              )
                (u = f[h]) &&
                  (c = t.call(u, u.__data__, h, f)) &&
                  ('__data__' in u && (c.__data__ = u.__data__),
                  (l[h] = c),
                  kd(l[h], n, e, h, l, En(u, e)))
            return new re(a, this._parents, n, e)
          },
          Yd = function(t) {
            var n = this._name,
              e = this._id
            'function' != typeof t && (t = ol(t))
            for (
              var r = this._groups, i = r.length, a = [], o = [], u = 0;
              u < i;
              ++u
            )
              for (var c, f = r[u], s = f.length, l = 0; l < s; ++l)
                if ((c = f[l])) {
                  for (
                    var h,
                      d = t.call(c, c.__data__, l, f),
                      p = En(c, e),
                      v = 0,
                      g = d.length;
                    v < g;
                    ++v
                  )
                    (h = d[v]) && kd(h, n, e, v, d, p)
                  a.push(d), o.push(c)
                }
            return new re(a, o, n, e)
          },
          Id = yt.prototype.constructor,
          Fd = function() {
            return new Id(this._groups, this._parents)
          },
          Bd = function(t, n, e) {
            var r = 'transform' == (t += '') ? Vh : Td
            return null == n
              ? this.styleTween(t, Zn(t, r)).on('end.style.' + t, Qn(t))
              : this.styleTween(
                  t,
                  'function' == typeof n
                    ? Kn(t, r, zn(this, 'style.' + t, n))
                    : Jn(t, r, n + ''),
                  e
                )
          },
          jd = function(t, n, e) {
            var r = 'style.' + (t += '')
            if (arguments.length < 2) return (r = this.tween(r)) && r._value
            if (null == n) return this.tween(r, null)
            if ('function' != typeof n) throw new Error()
            return this.tween(r, te(t, n, null == e ? '' : e))
          },
          Xd = function(t) {
            return this.tween(
              'text',
              'function' == typeof t
                ? ee(zn(this, 'text', t))
                : ne(null == t ? '' : t + '')
            )
          },
          Hd = function() {
            for (
              var t = this._name,
                n = this._id,
                e = ae(),
                r = this._groups,
                i = r.length,
                a = 0;
              a < i;
              ++a
            )
              for (var o, u = r[a], c = u.length, f = 0; f < c; ++f)
                if ((o = u[f])) {
                  var s = En(o, n)
                  kd(o, t, e, f, u, {
                    time: s.time + s.delay + s.duration,
                    delay: 0,
                    duration: s.duration,
                    ease: s.ease,
                  })
                }
            return new re(r, this._parents, t, e)
          },
          Gd = 0,
          Vd = yt.prototype
        re.prototype = ie.prototype = {
          constructor: re,
          select: Dd,
          selectAll: Yd,
          filter: Ld,
          merge: qd,
          selection: Fd,
          transition: Hd,
          call: Vd.call,
          nodes: Vd.nodes,
          node: Vd.node,
          size: Vd.size,
          empty: Vd.empty,
          each: Vd.each,
          on: Od,
          attr: Ed,
          attrTween: Cd,
          style: Bd,
          styleTween: jd,
          text: Xd,
          remove: Ud,
          tween: Ad,
          delay: Pd,
          duration: Rd,
          ease: zd,
        }
        var $d = (function t(n) {
            function e(t) {
              return Math.pow(t, n)
            }
            return (n = +n), (e.exponent = t), e
          })(3),
          Wd = (function t(n) {
            function e(t) {
              return 1 - Math.pow(1 - t, n)
            }
            return (n = +n), (e.exponent = t), e
          })(3),
          Zd = (function t(n) {
            function e(t) {
              return (
                ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2
              )
            }
            return (n = +n), (e.exponent = t), e
          })(3),
          Qd = Math.PI,
          Jd = Qd / 2,
          Kd = 4 / 11,
          tp = 6 / 11,
          np = 8 / 11,
          ep = 0.75,
          rp = 9 / 11,
          ip = 10 / 11,
          ap = 0.9375,
          op = 21 / 22,
          up = 63 / 64,
          cp = 1 / Kd / Kd,
          fp = (function t(n) {
            function e(t) {
              return t * t * ((n + 1) * t - n)
            }
            return (n = +n), (e.overshoot = t), e
          })(1.70158),
          sp = (function t(n) {
            function e(t) {
              return --t * t * ((n + 1) * t + n) + 1
            }
            return (n = +n), (e.overshoot = t), e
          })(1.70158),
          lp = (function t(n) {
            function e(t) {
              return (
                ((t *= 2) < 1
                  ? t * t * ((n + 1) * t - n)
                  : (t -= 2) * t * ((n + 1) * t + n) + 2) / 2
              )
            }
            return (n = +n), (e.overshoot = t), e
          })(1.70158),
          hp = 2 * Math.PI,
          dp = (function t(n, e) {
            function r(t) {
              return n * Math.pow(2, 10 * --t) * Math.sin((i - t) / e)
            }
            var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= hp)
            return (
              (r.amplitude = function(n) {
                return t(n, e * hp)
              }),
              (r.period = function(e) {
                return t(n, e)
              }),
              r
            )
          })(1, 0.3),
          pp = (function t(n, e) {
            function r(t) {
              return 1 - n * Math.pow(2, -10 * (t = +t)) * Math.sin((t + i) / e)
            }
            var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= hp)
            return (
              (r.amplitude = function(n) {
                return t(n, e * hp)
              }),
              (r.period = function(e) {
                return t(n, e)
              }),
              r
            )
          })(1, 0.3),
          vp = (function t(n, e) {
            function r(t) {
              return (
                ((t = 2 * t - 1) < 0
                  ? n * Math.pow(2, 10 * t) * Math.sin((i - t) / e)
                  : 2 - n * Math.pow(2, -10 * t) * Math.sin((i + t) / e)) / 2
              )
            }
            var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= hp)
            return (
              (r.amplitude = function(n) {
                return t(n, e * hp)
              }),
              (r.period = function(e) {
                return t(n, e)
              }),
              r
            )
          })(1, 0.3),
          gp = { time: null, delay: 0, duration: 250, ease: he },
          bp = function(t) {
            var n, e
            t instanceof re
              ? ((n = t._id), (t = t._name))
              : ((n = ae()),
                ((e = gp).time = yn()),
                (t = null == t ? null : t + ''))
            for (var r = this._groups, i = r.length, a = 0; a < i; ++a)
              for (var o, u = r[a], c = u.length, f = 0; f < c; ++f)
                (o = u[f]) && kd(o, t, n, f, u, e || Ne(o, n))
            return new re(r, this._parents, t, n)
          }
        ;(yt.prototype.interrupt = Sd), (yt.prototype.transition = bp)
        var yp = [null],
          _p = function(t, n) {
            var e,
              r,
              i = t.__transition
            if (i) {
              n = null == n ? null : n + ''
              for (r in i)
                if ((e = i[r]).state > yd && e.name === n)
                  return new re([[t]], yp, n, +r)
            }
            return null
          },
          mp = function(t) {
            return function() {
              return t
            }
          },
          xp = function(t, n, e) {
            ;(this.target = t), (this.type = n), (this.selection = e)
          },
          wp = function() {
            t.event.preventDefault(), t.event.stopImmediatePropagation()
          },
          Mp = { name: 'drag' },
          kp = { name: 'space' },
          Np = { name: 'handle' },
          Sp = { name: 'center' },
          Ap = {
            name: 'x',
            handles: ['e', 'w'].map(Ae),
            input: function(t, n) {
              return t && [[t[0], n[0][1]], [t[1], n[1][1]]]
            },
            output: function(t) {
              return t && [t[0][0], t[1][0]]
            },
          },
          Tp = {
            name: 'y',
            handles: ['n', 's'].map(Ae),
            input: function(t, n) {
              return t && [[n[0][0], t[0]], [n[1][0], t[1]]]
            },
            output: function(t) {
              return t && [t[0][1], t[1][1]]
            },
          },
          Ep = {
            name: 'xy',
            handles: ['n', 'e', 's', 'w', 'nw', 'ne', 'se', 'sw'].map(Ae),
            input: function(t) {
              return t
            },
            output: function(t) {
              return t
            },
          },
          Cp = {
            overlay: 'crosshair',
            selection: 'move',
            n: 'ns-resize',
            e: 'ew-resize',
            s: 'ns-resize',
            w: 'ew-resize',
            nw: 'nwse-resize',
            ne: 'nesw-resize',
            se: 'nwse-resize',
            sw: 'nesw-resize',
          },
          Pp = { e: 'w', w: 'e', nw: 'ne', ne: 'nw', se: 'sw', sw: 'se' },
          Rp = { n: 's', s: 'n', nw: 'sw', ne: 'se', se: 'ne', sw: 'nw' },
          zp = {
            overlay: 1,
            selection: 1,
            n: null,
            e: 1,
            s: null,
            w: -1,
            nw: -1,
            ne: 1,
            se: 1,
            sw: -1,
          },
          Lp = {
            overlay: 1,
            selection: 1,
            n: -1,
            e: null,
            s: 1,
            w: null,
            nw: -1,
            ne: -1,
            se: 1,
            sw: 1,
          },
          qp = function() {
            return qe(Ep)
          },
          Op = Math.cos,
          Up = Math.sin,
          Dp = Math.PI,
          Yp = Dp / 2,
          Ip = 2 * Dp,
          Fp = Math.max,
          Bp = function() {
            function t(t) {
              var a,
                o,
                u,
                c,
                f,
                s,
                l = t.length,
                h = [],
                d = vs(l),
                p = [],
                v = [],
                g = (v.groups = new Array(l)),
                b = new Array(l * l)
              for (a = 0, f = -1; ++f < l; ) {
                for (o = 0, s = -1; ++s < l; ) o += t[f][s]
                h.push(o), p.push(vs(l)), (a += o)
              }
              for (
                e &&
                  d.sort(function(t, n) {
                    return e(h[t], h[n])
                  }),
                  r &&
                    p.forEach(function(n, e) {
                      n.sort(function(n, i) {
                        return r(t[e][n], t[e][i])
                      })
                    }),
                  a = Fp(0, Ip - n * l) / a,
                  c = a ? n : Ip / l,
                  o = 0,
                  f = -1;
                ++f < l;

              ) {
                for (u = o, s = -1; ++s < l; ) {
                  var y = d[f],
                    _ = p[y][s],
                    m = t[y][_],
                    x = o,
                    w = (o += m * a)
                  b[_ * l + y] = {
                    index: y,
                    subindex: _,
                    startAngle: x,
                    endAngle: w,
                    value: m,
                  }
                }
                ;(g[y] = { index: y, startAngle: u, endAngle: o, value: h[y] }),
                  (o += c)
              }
              for (f = -1; ++f < l; )
                for (s = f - 1; ++s < l; ) {
                  var M = b[s * l + f],
                    k = b[f * l + s]
                  ;(M.value || k.value) &&
                    v.push(
                      M.value < k.value
                        ? { source: k, target: M }
                        : { source: M, target: k }
                    )
                }
              return i ? v.sort(i) : v
            }
            var n = 0,
              e = null,
              r = null,
              i = null
            return (
              (t.padAngle = function(e) {
                return arguments.length ? ((n = Fp(0, e)), t) : n
              }),
              (t.sortGroups = function(n) {
                return arguments.length ? ((e = n), t) : e
              }),
              (t.sortSubgroups = function(n) {
                return arguments.length ? ((r = n), t) : r
              }),
              (t.sortChords = function(n) {
                return arguments.length
                  ? (null == n ? (i = null) : ((i = Oe(n))._ = n), t)
                  : i && i._
              }),
              t
            )
          },
          jp = Array.prototype.slice,
          Xp = function(t) {
            return function() {
              return t
            }
          },
          Hp = Math.PI,
          Gp = 2 * Hp,
          Vp = Gp - 1e-6
        Ue.prototype = De.prototype = {
          constructor: Ue,
          moveTo: function(t, n) {
            this._ +=
              'M' +
              (this._x0 = this._x1 = +t) +
              ',' +
              (this._y0 = this._y1 = +n)
          },
          closePath: function() {
            null !== this._x1 &&
              ((this._x1 = this._x0), (this._y1 = this._y0), (this._ += 'Z'))
          },
          lineTo: function(t, n) {
            this._ += 'L' + (this._x1 = +t) + ',' + (this._y1 = +n)
          },
          quadraticCurveTo: function(t, n, e, r) {
            this._ +=
              'Q' +
              +t +
              ',' +
              +n +
              ',' +
              (this._x1 = +e) +
              ',' +
              (this._y1 = +r)
          },
          bezierCurveTo: function(t, n, e, r, i, a) {
            this._ +=
              'C' +
              +t +
              ',' +
              +n +
              ',' +
              +e +
              ',' +
              +r +
              ',' +
              (this._x1 = +i) +
              ',' +
              (this._y1 = +a)
          },
          arcTo: function(t, n, e, r, i) {
            ;(t = +t), (n = +n), (e = +e), (r = +r), (i = +i)
            var a = this._x1,
              o = this._y1,
              u = e - t,
              c = r - n,
              f = a - t,
              s = o - n,
              l = f * f + s * s
            if (i < 0) throw new Error('negative radius: ' + i)
            if (null === this._x1)
              this._ += 'M' + (this._x1 = t) + ',' + (this._y1 = n)
            else if (l > 1e-6)
              if (Math.abs(s * u - c * f) > 1e-6 && i) {
                var h = e - a,
                  d = r - o,
                  p = u * u + c * c,
                  v = h * h + d * d,
                  g = Math.sqrt(p),
                  b = Math.sqrt(l),
                  y =
                    i *
                    Math.tan((Hp - Math.acos((p + l - v) / (2 * g * b))) / 2),
                  _ = y / b,
                  m = y / g
                Math.abs(_ - 1) > 1e-6 &&
                  (this._ += 'L' + (t + _ * f) + ',' + (n + _ * s)),
                  (this._ +=
                    'A' +
                    i +
                    ',' +
                    i +
                    ',0,0,' +
                    +(s * h > f * d) +
                    ',' +
                    (this._x1 = t + m * u) +
                    ',' +
                    (this._y1 = n + m * c))
              } else this._ += 'L' + (this._x1 = t) + ',' + (this._y1 = n)
            else;
          },
          arc: function(t, n, e, r, i, a) {
            ;(t = +t), (n = +n), (e = +e)
            var o = e * Math.cos(r),
              u = e * Math.sin(r),
              c = t + o,
              f = n + u,
              s = 1 ^ a,
              l = a ? r - i : i - r
            if (e < 0) throw new Error('negative radius: ' + e)
            null === this._x1
              ? (this._ += 'M' + c + ',' + f)
              : (Math.abs(this._x1 - c) > 1e-6 ||
                  Math.abs(this._y1 - f) > 1e-6) &&
                (this._ += 'L' + c + ',' + f),
              e &&
                (l < 0 && (l = (l % Gp) + Gp),
                l > Vp
                  ? (this._ +=
                      'A' +
                      e +
                      ',' +
                      e +
                      ',0,1,' +
                      s +
                      ',' +
                      (t - o) +
                      ',' +
                      (n - u) +
                      'A' +
                      e +
                      ',' +
                      e +
                      ',0,1,' +
                      s +
                      ',' +
                      (this._x1 = c) +
                      ',' +
                      (this._y1 = f))
                  : l > 1e-6 &&
                    (this._ +=
                      'A' +
                      e +
                      ',' +
                      e +
                      ',0,' +
                      +(l >= Hp) +
                      ',' +
                      s +
                      ',' +
                      (this._x1 = t + e * Math.cos(i)) +
                      ',' +
                      (this._y1 = n + e * Math.sin(i))))
          },
          rect: function(t, n, e, r) {
            this._ +=
              'M' +
              (this._x0 = this._x1 = +t) +
              ',' +
              (this._y0 = this._y1 = +n) +
              'h' +
              +e +
              'v' +
              +r +
              'h' +
              -e +
              'Z'
          },
          toString: function() {
            return this._
          },
        }
        var $p = function() {
          function t() {
            var t,
              u = jp.call(arguments),
              c = n.apply(this, u),
              f = e.apply(this, u),
              s = +r.apply(this, ((u[0] = c), u)),
              l = i.apply(this, u) - Yp,
              h = a.apply(this, u) - Yp,
              d = s * Op(l),
              p = s * Up(l),
              v = +r.apply(this, ((u[0] = f), u)),
              g = i.apply(this, u) - Yp,
              b = a.apply(this, u) - Yp
            if (
              (o || (o = t = De()),
              o.moveTo(d, p),
              o.arc(0, 0, s, l, h),
              (l === g && h === b) ||
                (o.quadraticCurveTo(0, 0, v * Op(g), v * Up(g)),
                o.arc(0, 0, v, g, b)),
              o.quadraticCurveTo(0, 0, d, p),
              o.closePath(),
              t)
            )
              return (o = null), t + '' || null
          }
          var n = Ye,
            e = Ie,
            r = Fe,
            i = Be,
            a = je,
            o = null
          return (
            (t.radius = function(n) {
              return arguments.length
                ? ((r = 'function' == typeof n ? n : Xp(+n)), t)
                : r
            }),
            (t.startAngle = function(n) {
              return arguments.length
                ? ((i = 'function' == typeof n ? n : Xp(+n)), t)
                : i
            }),
            (t.endAngle = function(n) {
              return arguments.length
                ? ((a = 'function' == typeof n ? n : Xp(+n)), t)
                : a
            }),
            (t.source = function(e) {
              return arguments.length ? ((n = e), t) : n
            }),
            (t.target = function(n) {
              return arguments.length ? ((e = n), t) : e
            }),
            (t.context = function(n) {
              return arguments.length ? ((o = null == n ? null : n), t) : o
            }),
            t
          )
        }
        Xe.prototype = He.prototype = {
          constructor: Xe,
          has: function(t) {
            return '$' + t in this
          },
          get: function(t) {
            return this['$' + t]
          },
          set: function(t, n) {
            return (this['$' + t] = n), this
          },
          remove: function(t) {
            var n = '$' + t
            return n in this && delete this[n]
          },
          clear: function() {
            for (var t in this) '$' === t[0] && delete this[t]
          },
          keys: function() {
            var t = []
            for (var n in this) '$' === n[0] && t.push(n.slice(1))
            return t
          },
          values: function() {
            var t = []
            for (var n in this) '$' === n[0] && t.push(this[n])
            return t
          },
          entries: function() {
            var t = []
            for (var n in this)
              '$' === n[0] && t.push({ key: n.slice(1), value: this[n] })
            return t
          },
          size: function() {
            var t = 0
            for (var n in this) '$' === n[0] && ++t
            return t
          },
          empty: function() {
            for (var t in this) if ('$' === t[0]) return !1
            return !0
          },
          each: function(t) {
            for (var n in this) '$' === n[0] && t(this[n], n.slice(1), this)
          },
        }
        var Wp = function() {
            function t(n, i, o, u) {
              if (i >= a.length)
                return null != e && n.sort(e), null != r ? r(n) : n
              for (
                var c,
                  f,
                  s,
                  l = -1,
                  h = n.length,
                  d = a[i++],
                  p = He(),
                  v = o();
                ++l < h;

              )
                (s = p.get((c = d((f = n[l])) + '')))
                  ? s.push(f)
                  : p.set(c, [f])
              return (
                p.each(function(n, e) {
                  u(v, e, t(n, i, o, u))
                }),
                v
              )
            }
            function n(t, e) {
              if (++e > a.length) return t
              var i,
                u = o[e - 1]
              return (
                null != r && e >= a.length
                  ? (i = t.entries())
                  : ((i = []),
                    t.each(function(t, r) {
                      i.push({ key: r, values: n(t, e) })
                    })),
                null != u
                  ? i.sort(function(t, n) {
                      return u(t.key, n.key)
                    })
                  : i
              )
            }
            var e,
              r,
              i,
              a = [],
              o = []
            return (i = {
              object: function(n) {
                return t(n, 0, Ge, Ve)
              },
              map: function(n) {
                return t(n, 0, $e, We)
              },
              entries: function(e) {
                return n(t(e, 0, $e, We), 0)
              },
              key: function(t) {
                return a.push(t), i
              },
              sortKeys: function(t) {
                return (o[a.length - 1] = t), i
              },
              sortValues: function(t) {
                return (e = t), i
              },
              rollup: function(t) {
                return (r = t), i
              },
            })
          },
          Zp = He.prototype
        Ze.prototype = Qe.prototype = {
          constructor: Ze,
          has: Zp.has,
          add: function(t) {
            return (t += ''), (this['$' + t] = t), this
          },
          remove: Zp.remove,
          clear: Zp.clear,
          values: Zp.keys,
          size: Zp.size,
          empty: Zp.empty,
          each: Zp.each,
        }
        var Qp = function(t) {
            var n = []
            for (var e in t) n.push(e)
            return n
          },
          Jp = function(t) {
            var n = []
            for (var e in t) n.push(t[e])
            return n
          },
          Kp = function(t) {
            var n = []
            for (var e in t) n.push({ key: e, value: t[e] })
            return n
          },
          tv = function(t) {
            function n(t, n) {
              var r,
                i,
                a = e(t, function(t, e) {
                  if (r) return r(t, e - 1)
                  ;(i = t), (r = n ? Ke(t, n) : Je(t))
                })
              return (a.columns = i), a
            }
            function e(t, n) {
              function e() {
                if (s >= f) return o
                if (i) return (i = !1), a
                var n,
                  e = s
                if (34 === t.charCodeAt(e)) {
                  for (var r = e; r++ < f; )
                    if (34 === t.charCodeAt(r)) {
                      if (34 !== t.charCodeAt(r + 1)) break
                      ++r
                    }
                  return (
                    (s = r + 2),
                    (n = t.charCodeAt(r + 1)),
                    13 === n
                      ? ((i = !0), 10 === t.charCodeAt(r + 2) && ++s)
                      : 10 === n && (i = !0),
                    t.slice(e + 1, r).replace(/""/g, '"')
                  )
                }
                for (; s < f; ) {
                  var u = 1
                  if (10 === (n = t.charCodeAt(s++))) i = !0
                  else if (13 === n)
                    (i = !0), 10 === t.charCodeAt(s) && (++s, ++u)
                  else if (n !== c) continue
                  return t.slice(e, s - u)
                }
                return t.slice(e)
              }
              for (
                var r, i, a = {}, o = {}, u = [], f = t.length, s = 0, l = 0;
                (r = e()) !== o;

              ) {
                for (var h = []; r !== a && r !== o; ) h.push(r), (r = e())
                ;(n && null == (h = n(h, l++))) || u.push(h)
              }
              return u
            }
            function r(n, e) {
              return (
                null == e && (e = tr(n)),
                [e.map(o).join(t)]
                  .concat(
                    n.map(function(n) {
                      return e
                        .map(function(t) {
                          return o(n[t])
                        })
                        .join(t)
                    })
                  )
                  .join('\n')
              )
            }
            function i(t) {
              return t.map(a).join('\n')
            }
            function a(n) {
              return n.map(o).join(t)
            }
            function o(t) {
              return null == t
                ? ''
                : u.test((t += ''))
                ? '"' + t.replace(/\"/g, '""') + '"'
                : t
            }
            var u = new RegExp('["' + t + '\n\r]'),
              c = t.charCodeAt(0)
            return { parse: n, parseRows: e, format: r, formatRows: i }
          },
          nv = tv(','),
          ev = nv.parse,
          rv = nv.parseRows,
          iv = nv.format,
          av = nv.formatRows,
          ov = tv('\t'),
          uv = ov.parse,
          cv = ov.parseRows,
          fv = ov.format,
          sv = ov.formatRows,
          lv = function(t, n) {
            function e() {
              var e,
                i,
                a = r.length,
                o = 0,
                u = 0
              for (e = 0; e < a; ++e) (i = r[e]), (o += i.x), (u += i.y)
              for (o = o / a - t, u = u / a - n, e = 0; e < a; ++e)
                (i = r[e]), (i.x -= o), (i.y -= u)
            }
            var r
            return (
              null == t && (t = 0),
              null == n && (n = 0),
              (e.initialize = function(t) {
                r = t
              }),
              (e.x = function(n) {
                return arguments.length ? ((t = +n), e) : t
              }),
              (e.y = function(t) {
                return arguments.length ? ((n = +t), e) : n
              }),
              e
            )
          },
          hv = function(t) {
            return function() {
              return t
            }
          },
          dv = function() {
            return 1e-6 * (Math.random() - 0.5)
          },
          pv = function(t) {
            var n = +this._x.call(null, t),
              e = +this._y.call(null, t)
            return nr(this.cover(n, e), n, e, t)
          },
          vv = function(t, n) {
            if (isNaN((t = +t)) || isNaN((n = +n))) return this
            var e = this._x0,
              r = this._y0,
              i = this._x1,
              a = this._y1
            if (isNaN(e))
              (i = (e = Math.floor(t)) + 1), (a = (r = Math.floor(n)) + 1)
            else {
              if (!(e > t || t > i || r > n || n > a)) return this
              var o,
                u,
                c = i - e,
                f = this._root
              switch ((u = ((n < (r + a) / 2) << 1) | (t < (e + i) / 2))) {
                case 0:
                  do {
                    ;(o = new Array(4)), (o[u] = f), (f = o)
                  } while (((c *= 2), (i = e + c), (a = r + c), t > i || n > a))
                  break
                case 1:
                  do {
                    ;(o = new Array(4)), (o[u] = f), (f = o)
                  } while (((c *= 2), (e = i - c), (a = r + c), e > t || n > a))
                  break
                case 2:
                  do {
                    ;(o = new Array(4)), (o[u] = f), (f = o)
                  } while (((c *= 2), (i = e + c), (r = a - c), t > i || r > n))
                  break
                case 3:
                  do {
                    ;(o = new Array(4)), (o[u] = f), (f = o)
                  } while (((c *= 2), (e = i - c), (r = a - c), e > t || r > n))
              }
              this._root && this._root.length && (this._root = f)
            }
            return (
              (this._x0 = e),
              (this._y0 = r),
              (this._x1 = i),
              (this._y1 = a),
              this
            )
          },
          gv = function() {
            var t = []
            return (
              this.visit(function(n) {
                if (!n.length)
                  do {
                    t.push(n.data)
                  } while ((n = n.next))
              }),
              t
            )
          },
          bv = function(t) {
            return arguments.length
              ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1])
              : isNaN(this._x0)
              ? void 0
              : [[this._x0, this._y0], [this._x1, this._y1]]
          },
          yv = function(t, n, e, r, i) {
            ;(this.node = t),
              (this.x0 = n),
              (this.y0 = e),
              (this.x1 = r),
              (this.y1 = i)
          },
          _v = function(t, n, e) {
            var r,
              i,
              a,
              o,
              u,
              c,
              f,
              s = this._x0,
              l = this._y0,
              h = this._x1,
              d = this._y1,
              p = [],
              v = this._root
            for (
              v && p.push(new yv(v, s, l, h, d)),
                null == e
                  ? (e = 1 / 0)
                  : ((s = t - e),
                    (l = n - e),
                    (h = t + e),
                    (d = n + e),
                    (e *= e));
              (c = p.pop());

            )
              if (
                !(
                  !(v = c.node) ||
                  (i = c.x0) > h ||
                  (a = c.y0) > d ||
                  (o = c.x1) < s ||
                  (u = c.y1) < l
                )
              )
                if (v.length) {
                  var g = (i + o) / 2,
                    b = (a + u) / 2
                  p.push(
                    new yv(v[3], g, b, o, u),
                    new yv(v[2], i, b, g, u),
                    new yv(v[1], g, a, o, b),
                    new yv(v[0], i, a, g, b)
                  ),
                    (f = ((n >= b) << 1) | (t >= g)) &&
                      ((c = p[p.length - 1]),
                      (p[p.length - 1] = p[p.length - 1 - f]),
                      (p[p.length - 1 - f] = c))
                } else {
                  var y = t - +this._x.call(null, v.data),
                    _ = n - +this._y.call(null, v.data),
                    m = y * y + _ * _
                  if (m < e) {
                    var x = Math.sqrt((e = m))
                    ;(s = t - x),
                      (l = n - x),
                      (h = t + x),
                      (d = n + x),
                      (r = v.data)
                  }
                }
            return r
          },
          mv = function(t) {
            if (
              isNaN((a = +this._x.call(null, t))) ||
              isNaN((o = +this._y.call(null, t)))
            )
              return this
            var n,
              e,
              r,
              i,
              a,
              o,
              u,
              c,
              f,
              s,
              l,
              h,
              d = this._root,
              p = this._x0,
              v = this._y0,
              g = this._x1,
              b = this._y1
            if (!d) return this
            if (d.length)
              for (;;) {
                if (
                  ((f = a >= (u = (p + g) / 2)) ? (p = u) : (g = u),
                  (s = o >= (c = (v + b) / 2)) ? (v = c) : (b = c),
                  (n = d),
                  !(d = d[(l = (s << 1) | f)]))
                )
                  return this
                if (!d.length) break
                ;(n[(l + 1) & 3] || n[(l + 2) & 3] || n[(l + 3) & 3]) &&
                  ((e = n), (h = l))
              }
            for (; d.data !== t; ) if (((r = d), !(d = d.next))) return this
            return (
              (i = d.next) && delete d.next,
              r
                ? (i ? (r.next = i) : delete r.next, this)
                : n
                ? (i ? (n[l] = i) : delete n[l],
                  (d = n[0] || n[1] || n[2] || n[3]) &&
                    d === (n[3] || n[2] || n[1] || n[0]) &&
                    !d.length &&
                    (e ? (e[h] = d) : (this._root = d)),
                  this)
                : ((this._root = i), this)
            )
          },
          xv = function() {
            return this._root
          },
          wv = function() {
            var t = 0
            return (
              this.visit(function(n) {
                if (!n.length)
                  do {
                    ++t
                  } while ((n = n.next))
              }),
              t
            )
          },
          Mv = function(t) {
            var n,
              e,
              r,
              i,
              a,
              o,
              u = [],
              c = this._root
            for (
              c && u.push(new yv(c, this._x0, this._y0, this._x1, this._y1));
              (n = u.pop());

            )
              if (
                !t(
                  (c = n.node),
                  (r = n.x0),
                  (i = n.y0),
                  (a = n.x1),
                  (o = n.y1)
                ) &&
                c.length
              ) {
                var f = (r + a) / 2,
                  s = (i + o) / 2
                ;(e = c[3]) && u.push(new yv(e, f, s, a, o)),
                  (e = c[2]) && u.push(new yv(e, r, s, f, o)),
                  (e = c[1]) && u.push(new yv(e, f, i, a, s)),
                  (e = c[0]) && u.push(new yv(e, r, i, f, s))
              }
            return this
          },
          kv = function(t) {
            var n,
              e = [],
              r = []
            for (
              this._root &&
              e.push(
                new yv(this._root, this._x0, this._y0, this._x1, this._y1)
              );
              (n = e.pop());

            ) {
              var i = n.node
              if (i.length) {
                var a,
                  o = n.x0,
                  u = n.y0,
                  c = n.x1,
                  f = n.y1,
                  s = (o + c) / 2,
                  l = (u + f) / 2
                ;(a = i[0]) && e.push(new yv(a, o, u, s, l)),
                  (a = i[1]) && e.push(new yv(a, s, u, c, l)),
                  (a = i[2]) && e.push(new yv(a, o, l, s, f)),
                  (a = i[3]) && e.push(new yv(a, s, l, c, f))
              }
              r.push(n)
            }
            for (; (n = r.pop()); ) t(n.node, n.x0, n.y0, n.x1, n.y1)
            return this
          },
          Nv = function(t) {
            return arguments.length ? ((this._x = t), this) : this._x
          },
          Sv = function(t) {
            return arguments.length ? ((this._y = t), this) : this._y
          },
          Av = (or.prototype = ur.prototype)
        ;(Av.copy = function() {
          var t,
            n,
            e = new ur(
              this._x,
              this._y,
              this._x0,
              this._y0,
              this._x1,
              this._y1
            ),
            r = this._root
          if (!r) return e
          if (!r.length) return (e._root = cr(r)), e
          for (
            t = [{ source: r, target: (e._root = new Array(4)) }];
            (r = t.pop());

          )
            for (var i = 0; i < 4; ++i)
              (n = r.source[i]) &&
                (n.length
                  ? t.push({ source: n, target: (r.target[i] = new Array(4)) })
                  : (r.target[i] = cr(n)))
          return e
        }),
          (Av.add = pv),
          (Av.addAll = er),
          (Av.cover = vv),
          (Av.data = gv),
          (Av.extent = bv),
          (Av.find = _v),
          (Av.remove = mv),
          (Av.removeAll = rr),
          (Av.root = xv),
          (Av.size = wv),
          (Av.visit = Mv),
          (Av.visitAfter = kv),
          (Av.x = Nv),
          (Av.y = Sv)
        var Tv,
          Ev = function(t) {
            function n() {
              function t(t, n, e, r, i) {
                var a = t.data,
                  u = t.r,
                  d = l + u
                {
                  if (!a)
                    return n > f + d || r < f - d || e > s + d || i < s - d
                  if (a.index > c.index) {
                    var p = f - a.x - a.vx,
                      v = s - a.y - a.vy,
                      g = p * p + v * v
                    g < d * d &&
                      (0 === p && ((p = dv()), (g += p * p)),
                      0 === v && ((v = dv()), (g += v * v)),
                      (g = ((d - (g = Math.sqrt(g))) / g) * o),
                      (c.vx += (p *= g) * (d = (u *= u) / (h + u))),
                      (c.vy += (v *= g) * d),
                      (a.vx -= p * (d = 1 - d)),
                      (a.vy -= v * d))
                  }
                }
              }
              for (var n, r, c, f, s, l, h, d = i.length, p = 0; p < u; ++p)
                for (r = or(i, fr, sr).visitAfter(e), n = 0; n < d; ++n)
                  (c = i[n]),
                    (l = a[c.index]),
                    (h = l * l),
                    (f = c.x + c.vx),
                    (s = c.y + c.vy),
                    r.visit(t)
            }
            function e(t) {
              if (t.data) return (t.r = a[t.data.index])
              for (var n = (t.r = 0); n < 4; ++n)
                t[n] && t[n].r > t.r && (t.r = t[n].r)
            }
            function r() {
              if (i) {
                var n,
                  e,
                  r = i.length
                for (a = new Array(r), n = 0; n < r; ++n)
                  (e = i[n]), (a[e.index] = +t(e, n, i))
              }
            }
            var i,
              a,
              o = 1,
              u = 1
            return (
              'function' != typeof t && (t = hv(null == t ? 1 : +t)),
              (n.initialize = function(t) {
                ;(i = t), r()
              }),
              (n.iterations = function(t) {
                return arguments.length ? ((u = +t), n) : u
              }),
              (n.strength = function(t) {
                return arguments.length ? ((o = +t), n) : o
              }),
              (n.radius = function(e) {
                return arguments.length
                  ? ((t = 'function' == typeof e ? e : hv(+e)), r(), n)
                  : t
              }),
              n
            )
          },
          Cv = function(t) {
            function n(t) {
              return 1 / Math.min(f[t.source.index], f[t.target.index])
            }
            function e(n) {
              for (var e = 0, r = t.length; e < p; ++e)
                for (var i, a, c, f, l, h, d, v = 0; v < r; ++v)
                  (i = t[v]),
                    (a = i.source),
                    (c = i.target),
                    (f = c.x + c.vx - a.x - a.vx || dv()),
                    (l = c.y + c.vy - a.y - a.vy || dv()),
                    (h = Math.sqrt(f * f + l * l)),
                    (h = ((h - u[v]) / h) * n * o[v]),
                    (f *= h),
                    (l *= h),
                    (c.vx -= f * (d = s[v])),
                    (c.vy -= l * d),
                    (a.vx += f * (d = 1 - d)),
                    (a.vy += l * d)
            }
            function r() {
              if (c) {
                var n,
                  e,
                  r = c.length,
                  h = t.length,
                  d = He(c, l)
                for (n = 0, f = new Array(r); n < h; ++n)
                  (e = t[n]),
                    (e.index = n),
                    'object' != typeof e.source && (e.source = hr(d, e.source)),
                    'object' != typeof e.target && (e.target = hr(d, e.target)),
                    (f[e.source.index] = (f[e.source.index] || 0) + 1),
                    (f[e.target.index] = (f[e.target.index] || 0) + 1)
                for (n = 0, s = new Array(h); n < h; ++n)
                  (e = t[n]),
                    (s[n] =
                      f[e.source.index] /
                      (f[e.source.index] + f[e.target.index]))
                ;(o = new Array(h)), i(), (u = new Array(h)), a()
              }
            }
            function i() {
              if (c)
                for (var n = 0, e = t.length; n < e; ++n) o[n] = +h(t[n], n, t)
            }
            function a() {
              if (c)
                for (var n = 0, e = t.length; n < e; ++n) u[n] = +d(t[n], n, t)
            }
            var o,
              u,
              c,
              f,
              s,
              l = lr,
              h = n,
              d = hv(30),
              p = 1
            return (
              null == t && (t = []),
              (e.initialize = function(t) {
                ;(c = t), r()
              }),
              (e.links = function(n) {
                return arguments.length ? ((t = n), r(), e) : t
              }),
              (e.id = function(t) {
                return arguments.length ? ((l = t), e) : l
              }),
              (e.iterations = function(t) {
                return arguments.length ? ((p = +t), e) : p
              }),
              (e.strength = function(t) {
                return arguments.length
                  ? ((h = 'function' == typeof t ? t : hv(+t)), i(), e)
                  : h
              }),
              (e.distance = function(t) {
                return arguments.length
                  ? ((d = 'function' == typeof t ? t : hv(+t)), a(), e)
                  : d
              }),
              e
            )
          },
          Pv = 10,
          Rv = Math.PI * (3 - Math.sqrt(5)),
          zv = function(t) {
            function n() {
              e(), d.call('tick', a), o < u && (h.stop(), d.call('end', a))
            }
            function e() {
              var n,
                e,
                r = t.length
              for (
                o += (f - o) * c,
                  l.each(function(t) {
                    t(o)
                  }),
                  n = 0;
                n < r;
                ++n
              )
                (e = t[n]),
                  null == e.fx
                    ? (e.x += e.vx *= s)
                    : ((e.x = e.fx), (e.vx = 0)),
                  null == e.fy ? (e.y += e.vy *= s) : ((e.y = e.fy), (e.vy = 0))
            }
            function r() {
              for (var n, e = 0, r = t.length; e < r; ++e) {
                if (((n = t[e]), (n.index = e), isNaN(n.x) || isNaN(n.y))) {
                  var i = Pv * Math.sqrt(e),
                    a = e * Rv
                  ;(n.x = i * Math.cos(a)), (n.y = i * Math.sin(a))
                }
                ;(isNaN(n.vx) || isNaN(n.vy)) && (n.vx = n.vy = 0)
              }
            }
            function i(n) {
              return n.initialize && n.initialize(t), n
            }
            var a,
              o = 1,
              u = 0.001,
              c = 1 - Math.pow(u, 1 / 300),
              f = 0,
              s = 0.6,
              l = He(),
              h = xn(n),
              d = g('tick', 'end')
            return (
              null == t && (t = []),
              r(),
              (a = {
                tick: e,
                restart: function() {
                  return h.restart(n), a
                },
                stop: function() {
                  return h.stop(), a
                },
                nodes: function(n) {
                  return arguments.length ? ((t = n), r(), l.each(i), a) : t
                },
                alpha: function(t) {
                  return arguments.length ? ((o = +t), a) : o
                },
                alphaMin: function(t) {
                  return arguments.length ? ((u = +t), a) : u
                },
                alphaDecay: function(t) {
                  return arguments.length ? ((c = +t), a) : +c
                },
                alphaTarget: function(t) {
                  return arguments.length ? ((f = +t), a) : f
                },
                velocityDecay: function(t) {
                  return arguments.length ? ((s = 1 - t), a) : 1 - s
                },
                force: function(t, n) {
                  return arguments.length > 1
                    ? (null == n ? l.remove(t) : l.set(t, i(n)), a)
                    : l.get(t)
                },
                find: function(n, e, r) {
                  var i,
                    a,
                    o,
                    u,
                    c,
                    f = 0,
                    s = t.length
                  for (null == r ? (r = 1 / 0) : (r *= r), f = 0; f < s; ++f)
                    (u = t[f]),
                      (i = n - u.x),
                      (a = e - u.y),
                      (o = i * i + a * a) < r && ((c = u), (r = o))
                  return c
                },
                on: function(t, n) {
                  return arguments.length > 1 ? (d.on(t, n), a) : d.on(t)
                },
              })
            )
          },
          Lv = function() {
            function t(t) {
              var n,
                u = i.length,
                c = or(i, dr, pr).visitAfter(e)
              for (o = t, n = 0; n < u; ++n) (a = i[n]), c.visit(r)
            }
            function n() {
              if (i) {
                var t,
                  n,
                  e = i.length
                for (u = new Array(e), t = 0; t < e; ++t)
                  (n = i[t]), (u[n.index] = +c(n, t, i))
              }
            }
            function e(t) {
              var n,
                e,
                r,
                i,
                a,
                o = 0
              if (t.length) {
                for (r = i = a = 0; a < 4; ++a)
                  (n = t[a]) &&
                    (e = n.value) &&
                    ((o += e), (r += e * n.x), (i += e * n.y))
                ;(t.x = r / o), (t.y = i / o)
              } else {
                ;(n = t), (n.x = n.data.x), (n.y = n.data.y)
                do {
                  o += u[n.data.index]
                } while ((n = n.next))
              }
              t.value = o
            }
            function r(t, n, e, r) {
              if (!t.value) return !0
              var i = t.x - a.x,
                c = t.y - a.y,
                h = r - n,
                d = i * i + c * c
              if ((h * h) / l < d)
                return (
                  d < s &&
                    (0 === i && ((i = dv()), (d += i * i)),
                    0 === c && ((c = dv()), (d += c * c)),
                    d < f && (d = Math.sqrt(f * d)),
                    (a.vx += (i * t.value * o) / d),
                    (a.vy += (c * t.value * o) / d)),
                  !0
                )
              if (!(t.length || d >= s)) {
                ;(t.data !== a || t.next) &&
                  (0 === i && ((i = dv()), (d += i * i)),
                  0 === c && ((c = dv()), (d += c * c)),
                  d < f && (d = Math.sqrt(f * d)))
                do {
                  t.data !== a &&
                    ((h = (u[t.data.index] * o) / d),
                    (a.vx += i * h),
                    (a.vy += c * h))
                } while ((t = t.next))
              }
            }
            var i,
              a,
              o,
              u,
              c = hv(-30),
              f = 1,
              s = 1 / 0,
              l = 0.81
            return (
              (t.initialize = function(t) {
                ;(i = t), n()
              }),
              (t.strength = function(e) {
                return arguments.length
                  ? ((c = 'function' == typeof e ? e : hv(+e)), n(), t)
                  : c
              }),
              (t.distanceMin = function(n) {
                return arguments.length ? ((f = n * n), t) : Math.sqrt(f)
              }),
              (t.distanceMax = function(n) {
                return arguments.length ? ((s = n * n), t) : Math.sqrt(s)
              }),
              (t.theta = function(n) {
                return arguments.length ? ((l = n * n), t) : Math.sqrt(l)
              }),
              t
            )
          },
          qv = function(t) {
            function n(t) {
              for (var n, e = 0, o = r.length; e < o; ++e)
                (n = r[e]), (n.vx += (a[e] - n.x) * i[e] * t)
            }
            function e() {
              if (r) {
                var n,
                  e = r.length
                for (i = new Array(e), a = new Array(e), n = 0; n < e; ++n)
                  i[n] = isNaN((a[n] = +t(r[n], n, r))) ? 0 : +o(r[n], n, r)
              }
            }
            var r,
              i,
              a,
              o = hv(0.1)
            return (
              'function' != typeof t && (t = hv(null == t ? 0 : +t)),
              (n.initialize = function(t) {
                ;(r = t), e()
              }),
              (n.strength = function(t) {
                return arguments.length
                  ? ((o = 'function' == typeof t ? t : hv(+t)), e(), n)
                  : o
              }),
              (n.x = function(r) {
                return arguments.length
                  ? ((t = 'function' == typeof r ? r : hv(+r)), e(), n)
                  : t
              }),
              n
            )
          },
          Ov = function(t) {
            function n(t) {
              for (var n, e = 0, o = r.length; e < o; ++e)
                (n = r[e]), (n.vy += (a[e] - n.y) * i[e] * t)
            }
            function e() {
              if (r) {
                var n,
                  e = r.length
                for (i = new Array(e), a = new Array(e), n = 0; n < e; ++n)
                  i[n] = isNaN((a[n] = +t(r[n], n, r))) ? 0 : +o(r[n], n, r)
              }
            }
            var r,
              i,
              a,
              o = hv(0.1)
            return (
              'function' != typeof t && (t = hv(null == t ? 0 : +t)),
              (n.initialize = function(t) {
                ;(r = t), e()
              }),
              (n.strength = function(t) {
                return arguments.length
                  ? ((o = 'function' == typeof t ? t : hv(+t)), e(), n)
                  : o
              }),
              (n.y = function(r) {
                return arguments.length
                  ? ((t = 'function' == typeof r ? r : hv(+r)), e(), n)
                  : t
              }),
              n
            )
          },
          Uv = function(t, n) {
            if (
              (e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf(
                'e'
              )) < 0
            )
              return null
            var e,
              r = t.slice(0, e)
            return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)]
          },
          Dv = function(t) {
            return (t = Uv(Math.abs(t))), t ? t[1] : NaN
          },
          Yv = function(t, n) {
            return function(e, r) {
              for (
                var i = e.length, a = [], o = 0, u = t[0], c = 0;
                i > 0 &&
                u > 0 &&
                (c + u + 1 > r && (u = Math.max(1, r - c)),
                a.push(e.substring((i -= u), i + u)),
                !((c += u + 1) > r));

              )
                u = t[(o = (o + 1) % t.length)]
              return a.reverse().join(n)
            }
          },
          Iv = function(t) {
            return function(n) {
              return n.replace(/[0-9]/g, function(n) {
                return t[+n]
              })
            }
          },
          Fv = function(t, n) {
            t = t.toPrecision(n)
            t: for (var e, r = t.length, i = 1, a = -1; i < r; ++i)
              switch (t[i]) {
                case '.':
                  a = e = i
                  break
                case '0':
                  0 === a && (a = i), (e = i)
                  break
                case 'e':
                  break t
                default:
                  a > 0 && (a = 0)
              }
            return a > 0 ? t.slice(0, a) + t.slice(e + 1) : t
          },
          Bv = function(t, n) {
            var e = Uv(t, n)
            if (!e) return t + ''
            var r = e[0],
              i = e[1],
              a =
                i - (Tv = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
              o = r.length
            return a === o
              ? r
              : a > o
              ? r + new Array(a - o + 1).join('0')
              : a > 0
              ? r.slice(0, a) + '.' + r.slice(a)
              : '0.' +
                new Array(1 - a).join('0') +
                Uv(t, Math.max(0, n + a - 1))[0]
          },
          jv = function(t, n) {
            var e = Uv(t, n)
            if (!e) return t + ''
            var r = e[0],
              i = e[1]
            return i < 0
              ? '0.' + new Array(-i).join('0') + r
              : r.length > i + 1
              ? r.slice(0, i + 1) + '.' + r.slice(i + 1)
              : r + new Array(i - r.length + 2).join('0')
          },
          Xv = {
            '': Fv,
            '%': function(t, n) {
              return (100 * t).toFixed(n)
            },
            b: function(t) {
              return Math.round(t).toString(2)
            },
            c: function(t) {
              return t + ''
            },
            d: function(t) {
              return Math.round(t).toString(10)
            },
            e: function(t, n) {
              return t.toExponential(n)
            },
            f: function(t, n) {
              return t.toFixed(n)
            },
            g: function(t, n) {
              return t.toPrecision(n)
            },
            o: function(t) {
              return Math.round(t).toString(8)
            },
            p: function(t, n) {
              return jv(100 * t, n)
            },
            r: jv,
            s: Bv,
            X: function(t) {
              return Math.round(t)
                .toString(16)
                .toUpperCase()
            },
            x: function(t) {
              return Math.round(t).toString(16)
            },
          },
          Hv = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i
        ;(vr.prototype = gr.prototype),
          (gr.prototype.toString = function() {
            return (
              this.fill +
              this.align +
              this.sign +
              this.symbol +
              (this.zero ? '0' : '') +
              (null == this.width ? '' : Math.max(1, 0 | this.width)) +
              (this.comma ? ',' : '') +
              (null == this.precision
                ? ''
                : '.' + Math.max(0, 0 | this.precision)) +
              this.type
            )
          })
        var Gv,
          Vv = function(t) {
            return t
          },
          $v = [
            'y',
            'z',
            'a',
            'f',
            'p',
            'n',
            'µ',
            'm',
            '',
            'k',
            'M',
            'G',
            'T',
            'P',
            'E',
            'Z',
            'Y',
          ],
          Wv = function(t) {
            function n(t) {
              function n(t) {
                var n,
                  i,
                  u,
                  s = g,
                  m = b
                if ('c' === v) (m = y(t) + m), (t = '')
                else {
                  t = +t
                  var x = t < 0
                  if (
                    ((t = y(Math.abs(t), p)),
                    x && 0 == +t && (x = !1),
                    (s =
                      (x
                        ? '(' === f
                          ? f
                          : '-'
                        : '-' === f || '(' === f
                        ? ''
                        : f) + s),
                    (m =
                      m +
                      ('s' === v ? $v[8 + Tv / 3] : '') +
                      (x && '(' === f ? ')' : '')),
                    _)
                  )
                    for (n = -1, i = t.length; ++n < i; )
                      if (48 > (u = t.charCodeAt(n)) || u > 57) {
                        ;(m = (46 === u ? a + t.slice(n + 1) : t.slice(n)) + m),
                          (t = t.slice(0, n))
                        break
                      }
                }
                d && !l && (t = r(t, 1 / 0))
                var w = s.length + t.length + m.length,
                  M = w < h ? new Array(h - w + 1).join(e) : ''
                switch (
                  (d &&
                    l &&
                    ((t = r(M + t, M.length ? h - m.length : 1 / 0)), (M = '')),
                  c)
                ) {
                  case '<':
                    t = s + t + m + M
                    break
                  case '=':
                    t = s + M + t + m
                    break
                  case '^':
                    t = M.slice(0, (w = M.length >> 1)) + s + t + m + M.slice(w)
                    break
                  default:
                    t = M + s + t + m
                }
                return o(t)
              }
              t = vr(t)
              var e = t.fill,
                c = t.align,
                f = t.sign,
                s = t.symbol,
                l = t.zero,
                h = t.width,
                d = t.comma,
                p = t.precision,
                v = t.type,
                g =
                  '$' === s
                    ? i[0]
                    : '#' === s && /[boxX]/.test(v)
                    ? '0' + v.toLowerCase()
                    : '',
                b = '$' === s ? i[1] : /[%p]/.test(v) ? u : '',
                y = Xv[v],
                _ = !v || /[defgprs%]/.test(v)
              return (
                (p =
                  null == p
                    ? v
                      ? 6
                      : 12
                    : /[gprs]/.test(v)
                    ? Math.max(1, Math.min(21, p))
                    : Math.max(0, Math.min(20, p))),
                (n.toString = function() {
                  return t + ''
                }),
                n
              )
            }
            function e(t, e) {
              var r = n(((t = vr(t)), (t.type = 'f'), t)),
                i = 3 * Math.max(-8, Math.min(8, Math.floor(Dv(e) / 3))),
                a = Math.pow(10, -i),
                o = $v[8 + i / 3]
              return function(t) {
                return r(a * t) + o
              }
            }
            var r =
                t.grouping && t.thousands ? Yv(t.grouping, t.thousands) : Vv,
              i = t.currency,
              a = t.decimal,
              o = t.numerals ? Iv(t.numerals) : Vv,
              u = t.percent || '%'
            return { format: n, formatPrefix: e }
          }
        br({ decimal: '.', thousands: ',', grouping: [3], currency: ['$', ''] })
        var Zv = function(t) {
            return Math.max(0, -Dv(Math.abs(t)))
          },
          Qv = function(t, n) {
            return Math.max(
              0,
              3 * Math.max(-8, Math.min(8, Math.floor(Dv(n) / 3))) -
                Dv(Math.abs(t))
            )
          },
          Jv = function(t, n) {
            return (
              (t = Math.abs(t)),
              (n = Math.abs(n) - t),
              Math.max(0, Dv(n) - Dv(t)) + 1
            )
          },
          Kv = function() {
            return new yr()
          }
        yr.prototype = {
          constructor: yr,
          reset: function() {
            this.s = this.t = 0
          },
          add: function(t) {
            _r(Pg, t, this.t),
              _r(this, Pg.s, this.s),
              this.s ? (this.t += Pg.t) : (this.s = Pg.t)
          },
          valueOf: function() {
            return this.s
          },
        }
        var tg,
          ng,
          eg,
          rg,
          ig,
          ag,
          og,
          ug,
          cg,
          fg,
          sg,
          lg,
          hg,
          dg,
          pg,
          vg,
          gg,
          bg,
          yg,
          _g,
          mg,
          xg,
          wg,
          Mg,
          kg,
          Ng,
          Sg,
          Ag,
          Tg,
          Eg,
          Cg,
          Pg = new yr(),
          Rg = 1e-6,
          zg = Math.PI,
          Lg = zg / 2,
          qg = zg / 4,
          Og = 2 * zg,
          Ug = 180 / zg,
          Dg = zg / 180,
          Yg = Math.abs,
          Ig = Math.atan,
          Fg = Math.atan2,
          Bg = Math.cos,
          jg = Math.ceil,
          Xg = Math.exp,
          Hg = Math.log,
          Gg = Math.pow,
          Vg = Math.sin,
          $g =
            Math.sign ||
            function(t) {
              return t > 0 ? 1 : t < 0 ? -1 : 0
            },
          Wg = Math.sqrt,
          Zg = Math.tan,
          Qg = {
            Feature: function(t, n) {
              kr(t.geometry, n)
            },
            FeatureCollection: function(t, n) {
              for (var e = t.features, r = -1, i = e.length; ++r < i; )
                kr(e[r].geometry, n)
            },
          },
          Jg = {
            Sphere: function(t, n) {
              n.sphere()
            },
            Point: function(t, n) {
              ;(t = t.coordinates), n.point(t[0], t[1], t[2])
            },
            MultiPoint: function(t, n) {
              for (var e = t.coordinates, r = -1, i = e.length; ++r < i; )
                (t = e[r]), n.point(t[0], t[1], t[2])
            },
            LineString: function(t, n) {
              Nr(t.coordinates, n, 0)
            },
            MultiLineString: function(t, n) {
              for (var e = t.coordinates, r = -1, i = e.length; ++r < i; )
                Nr(e[r], n, 0)
            },
            Polygon: function(t, n) {
              Sr(t.coordinates, n)
            },
            MultiPolygon: function(t, n) {
              for (var e = t.coordinates, r = -1, i = e.length; ++r < i; )
                Sr(e[r], n)
            },
            GeometryCollection: function(t, n) {
              for (var e = t.geometries, r = -1, i = e.length; ++r < i; )
                kr(e[r], n)
            },
          },
          Kg = function(t, n) {
            t && Qg.hasOwnProperty(t.type) ? Qg[t.type](t, n) : kr(t, n)
          },
          tb = Kv(),
          nb = Kv(),
          eb = {
            point: Mr,
            lineStart: Mr,
            lineEnd: Mr,
            polygonStart: function() {
              tb.reset(), (eb.lineStart = Ar), (eb.lineEnd = Tr)
            },
            polygonEnd: function() {
              var t = +tb
              nb.add(t < 0 ? Og + t : t),
                (this.lineStart = this.lineEnd = this.point = Mr)
            },
            sphere: function() {
              nb.add(Og)
            },
          },
          rb = function(t) {
            return nb.reset(), Kg(t, eb), 2 * nb
          },
          ib = Kv(),
          ab = {
            point: Dr,
            lineStart: Ir,
            lineEnd: Fr,
            polygonStart: function() {
              ;(ab.point = Br),
                (ab.lineStart = jr),
                (ab.lineEnd = Xr),
                ib.reset(),
                eb.polygonStart()
            },
            polygonEnd: function() {
              eb.polygonEnd(),
                (ab.point = Dr),
                (ab.lineStart = Ir),
                (ab.lineEnd = Fr),
                tb < 0
                  ? ((ag = -(ug = 180)), (og = -(cg = 90)))
                  : ib > Rg
                  ? (cg = 90)
                  : ib < -Rg && (og = -90),
                (pg[0] = ag),
                (pg[1] = ug)
            },
          },
          ob = function(t) {
            var n, e, r, i, a, o, u
            if (
              ((cg = ug = -(ag = og = 1 / 0)),
              (dg = []),
              Kg(t, ab),
              (e = dg.length))
            ) {
              for (dg.sort(Gr), n = 1, r = dg[0], a = [r]; n < e; ++n)
                (i = dg[n]),
                  Vr(r, i[0]) || Vr(r, i[1])
                    ? (Hr(r[0], i[1]) > Hr(r[0], r[1]) && (r[1] = i[1]),
                      Hr(i[0], r[1]) > Hr(r[0], r[1]) && (r[0] = i[0]))
                    : a.push((r = i))
              for (
                o = -1 / 0, e = a.length - 1, n = 0, r = a[e];
                n <= e;
                r = i, ++n
              )
                (i = a[n]),
                  (u = Hr(r[1], i[0])) > o &&
                    ((o = u), (ag = i[0]), (ug = r[1]))
            }
            return (
              (dg = pg = null),
              ag === 1 / 0 || og === 1 / 0
                ? [[NaN, NaN], [NaN, NaN]]
                : [[ag, og], [ug, cg]]
            )
          },
          ub = {
            sphere: Mr,
            point: $r,
            lineStart: Zr,
            lineEnd: Kr,
            polygonStart: function() {
              ;(ub.lineStart = ti), (ub.lineEnd = ni)
            },
            polygonEnd: function() {
              ;(ub.lineStart = Zr), (ub.lineEnd = Kr)
            },
          },
          cb = function(t) {
            ;(vg = gg = bg = yg = _g = mg = xg = wg = Mg = kg = Ng = 0),
              Kg(t, ub)
            var n = Mg,
              e = kg,
              r = Ng,
              i = n * n + e * e + r * r
            return i < 1e-12 &&
              ((n = mg),
              (e = xg),
              (r = wg),
              gg < Rg && ((n = bg), (e = yg), (r = _g)),
              (i = n * n + e * e + r * r) < 1e-12)
              ? [NaN, NaN]
              : [Fg(e, n) * Ug, xr(r / Wg(i)) * Ug]
          },
          fb = function(t) {
            return function() {
              return t
            }
          },
          sb = function(t, n) {
            function e(e, r) {
              return (e = t(e, r)), n(e[0], e[1])
            }
            return (
              t.invert &&
                n.invert &&
                (e.invert = function(e, r) {
                  return (e = n.invert(e, r)) && t.invert(e[0], e[1])
                }),
              e
            )
          }
        ii.invert = ii
        var lb,
          hb,
          db,
          pb,
          vb,
          gb,
          bb,
          yb,
          _b,
          mb,
          xb,
          wb = function(t) {
            function n(n) {
              return (
                (n = t(n[0] * Dg, n[1] * Dg)), (n[0] *= Ug), (n[1] *= Ug), n
              )
            }
            return (
              (t = ai(t[0] * Dg, t[1] * Dg, t.length > 2 ? t[2] * Dg : 0)),
              (n.invert = function(n) {
                return (
                  (n = t.invert(n[0] * Dg, n[1] * Dg)),
                  (n[0] *= Ug),
                  (n[1] *= Ug),
                  n
                )
              }),
              n
            )
          },
          Mb = function() {
            function t(t, n) {
              e.push((t = r(t, n))), (t[0] *= Ug), (t[1] *= Ug)
            }
            function n() {
              var t = i.apply(this, arguments),
                n = a.apply(this, arguments) * Dg,
                c = o.apply(this, arguments) * Dg
              return (
                (e = []),
                (r = ai(-t[0] * Dg, -t[1] * Dg, 0).invert),
                fi(u, n, c, 1),
                (t = { type: 'Polygon', coordinates: [e] }),
                (e = r = null),
                t
              )
            }
            var e,
              r,
              i = fb([0, 0]),
              a = fb(90),
              o = fb(6),
              u = { point: t }
            return (
              (n.center = function(t) {
                return arguments.length
                  ? ((i = 'function' == typeof t ? t : fb([+t[0], +t[1]])), n)
                  : i
              }),
              (n.radius = function(t) {
                return arguments.length
                  ? ((a = 'function' == typeof t ? t : fb(+t)), n)
                  : a
              }),
              (n.precision = function(t) {
                return arguments.length
                  ? ((o = 'function' == typeof t ? t : fb(+t)), n)
                  : o
              }),
              n
            )
          },
          kb = function() {
            var t,
              n = []
            return {
              point: function(n, e) {
                t.push([n, e])
              },
              lineStart: function() {
                n.push((t = []))
              },
              lineEnd: Mr,
              rejoin: function() {
                n.length > 1 && n.push(n.pop().concat(n.shift()))
              },
              result: function() {
                var e = n
                return (n = []), (t = null), e
              },
            }
          },
          Nb = function(t, n, e, r, i, a) {
            var o,
              u = t[0],
              c = t[1],
              f = n[0],
              s = n[1],
              l = 0,
              h = 1,
              d = f - u,
              p = s - c
            if (((o = e - u), d || !(o > 0))) {
              if (((o /= d), d < 0)) {
                if (o < l) return
                o < h && (h = o)
              } else if (d > 0) {
                if (o > h) return
                o > l && (l = o)
              }
              if (((o = i - u), d || !(o < 0))) {
                if (((o /= d), d < 0)) {
                  if (o > h) return
                  o > l && (l = o)
                } else if (d > 0) {
                  if (o < l) return
                  o < h && (h = o)
                }
                if (((o = r - c), p || !(o > 0))) {
                  if (((o /= p), p < 0)) {
                    if (o < l) return
                    o < h && (h = o)
                  } else if (p > 0) {
                    if (o > h) return
                    o > l && (l = o)
                  }
                  if (((o = a - c), p || !(o < 0))) {
                    if (((o /= p), p < 0)) {
                      if (o > h) return
                      o > l && (l = o)
                    } else if (p > 0) {
                      if (o < l) return
                      o < h && (h = o)
                    }
                    return (
                      l > 0 && ((t[0] = u + l * d), (t[1] = c + l * p)),
                      h < 1 && ((n[0] = u + h * d), (n[1] = c + h * p)),
                      !0
                    )
                  }
                }
              }
            }
          },
          Sb = function(t, n) {
            return Yg(t[0] - n[0]) < Rg && Yg(t[1] - n[1]) < Rg
          },
          Ab = function(t, n, e, r, i) {
            var a,
              o,
              u = [],
              c = []
            if (
              (t.forEach(function(t) {
                if (!((n = t.length - 1) <= 0)) {
                  var n,
                    e,
                    r = t[0],
                    o = t[n]
                  if (Sb(r, o)) {
                    for (i.lineStart(), a = 0; a < n; ++a)
                      i.point((r = t[a])[0], r[1])
                    return void i.lineEnd()
                  }
                  u.push((e = new li(r, t, null, !0))),
                    c.push((e.o = new li(r, null, e, !1))),
                    u.push((e = new li(o, t, null, !1))),
                    c.push((e.o = new li(o, null, e, !0)))
                }
              }),
              u.length)
            ) {
              for (c.sort(n), hi(u), hi(c), a = 0, o = c.length; a < o; ++a)
                c[a].e = e = !e
              for (var f, s, l = u[0]; ; ) {
                for (var h = l, d = !0; h.v; ) if ((h = h.n) === l) return
                ;(f = h.z), i.lineStart()
                do {
                  if (((h.v = h.o.v = !0), h.e)) {
                    if (d)
                      for (a = 0, o = f.length; a < o; ++a)
                        i.point((s = f[a])[0], s[1])
                    else r(h.x, h.n.x, 1, i)
                    h = h.n
                  } else {
                    if (d)
                      for (f = h.p.z, a = f.length - 1; a >= 0; --a)
                        i.point((s = f[a])[0], s[1])
                    else r(h.x, h.p.x, -1, i)
                    h = h.p
                  }
                  ;(h = h.o), (f = h.z), (d = !d)
                } while (!h.v)
                i.lineEnd()
              }
            }
          },
          Tb = 1e9,
          Eb = -Tb,
          Cb = function() {
            var t,
              n,
              e,
              r = 0,
              i = 0,
              a = 960,
              o = 500
            return (e = {
              stream: function(e) {
                return t && n === e ? t : (t = di(r, i, a, o)((n = e)))
              },
              extent: function(u) {
                return arguments.length
                  ? ((r = +u[0][0]),
                    (i = +u[0][1]),
                    (a = +u[1][0]),
                    (o = +u[1][1]),
                    (t = n = null),
                    e)
                  : [[r, i], [a, o]]
              },
            })
          },
          Pb = Kv(),
          Rb = function(t, n) {
            var e = n[0],
              r = n[1],
              i = [Vg(e), -Bg(e), 0],
              a = 0,
              o = 0
            Pb.reset()
            for (var u = 0, c = t.length; u < c; ++u)
              if ((s = (f = t[u]).length))
                for (
                  var f,
                    s,
                    l = f[s - 1],
                    h = l[0],
                    d = l[1] / 2 + qg,
                    p = Vg(d),
                    v = Bg(d),
                    g = 0;
                  g < s;
                  ++g, h = y, p = m, v = x, l = b
                ) {
                  var b = f[g],
                    y = b[0],
                    _ = b[1] / 2 + qg,
                    m = Vg(_),
                    x = Bg(_),
                    w = y - h,
                    M = w >= 0 ? 1 : -1,
                    k = M * w,
                    N = k > zg,
                    S = p * m
                  if (
                    (Pb.add(Fg(S * M * Vg(k), v * x + S * Bg(k))),
                    (a += N ? w + M * Og : w),
                    N ^ (h >= e) ^ (y >= e))
                  ) {
                    var A = Lr(Rr(l), Rr(b))
                    Ur(A)
                    var T = Lr(i, A)
                    Ur(T)
                    var E = (N ^ (w >= 0) ? -1 : 1) * xr(T[2])
                    ;(r > E || (r === E && (A[0] || A[1]))) &&
                      (o += N ^ (w >= 0) ? 1 : -1)
                  }
                }
            return (a < -Rg || (a < Rg && Pb < -Rg)) ^ (1 & o)
          },
          zb = Kv(),
          Lb = {
            sphere: Mr,
            point: Mr,
            lineStart: pi,
            lineEnd: Mr,
            polygonStart: Mr,
            polygonEnd: Mr,
          },
          qb = function(t) {
            return zb.reset(), Kg(t, Lb), +zb
          },
          Ob = [null, null],
          Ub = { type: 'LineString', coordinates: Ob },
          Db = function(t, n) {
            return (Ob[0] = t), (Ob[1] = n), qb(Ub)
          },
          Yb = {
            Feature: function(t, n) {
              return yi(t.geometry, n)
            },
            FeatureCollection: function(t, n) {
              for (var e = t.features, r = -1, i = e.length; ++r < i; )
                if (yi(e[r].geometry, n)) return !0
              return !1
            },
          },
          Ib = {
            Sphere: function() {
              return !0
            },
            Point: function(t, n) {
              return _i(t.coordinates, n)
            },
            MultiPoint: function(t, n) {
              for (var e = t.coordinates, r = -1, i = e.length; ++r < i; )
                if (_i(e[r], n)) return !0
              return !1
            },
            LineString: function(t, n) {
              return mi(t.coordinates, n)
            },
            MultiLineString: function(t, n) {
              for (var e = t.coordinates, r = -1, i = e.length; ++r < i; )
                if (mi(e[r], n)) return !0
              return !1
            },
            Polygon: function(t, n) {
              return xi(t.coordinates, n)
            },
            MultiPolygon: function(t, n) {
              for (var e = t.coordinates, r = -1, i = e.length; ++r < i; )
                if (xi(e[r], n)) return !0
              return !1
            },
            GeometryCollection: function(t, n) {
              for (var e = t.geometries, r = -1, i = e.length; ++r < i; )
                if (yi(e[r], n)) return !0
              return !1
            },
          },
          Fb = function(t, n) {
            return (t && Yb.hasOwnProperty(t.type) ? Yb[t.type] : yi)(t, n)
          },
          Bb = function(t, n) {
            var e = t[0] * Dg,
              r = t[1] * Dg,
              i = n[0] * Dg,
              a = n[1] * Dg,
              o = Bg(r),
              u = Vg(r),
              c = Bg(a),
              f = Vg(a),
              s = o * Bg(e),
              l = o * Vg(e),
              h = c * Bg(i),
              d = c * Vg(i),
              p = 2 * xr(Wg(wr(a - r) + o * c * wr(i - e))),
              v = Vg(p),
              g = p
                ? function(t) {
                    var n = Vg((t *= p)) / v,
                      e = Vg(p - t) / v,
                      r = e * s + n * h,
                      i = e * l + n * d,
                      a = e * u + n * f
                    return [Fg(i, r) * Ug, Fg(a, Wg(r * r + i * i)) * Ug]
                  }
                : function() {
                    return [e * Ug, r * Ug]
                  }
            return (g.distance = p), g
          },
          jb = function(t) {
            return t
          },
          Xb = Kv(),
          Hb = Kv(),
          Gb = {
            point: Mr,
            lineStart: Mr,
            lineEnd: Mr,
            polygonStart: function() {
              ;(Gb.lineStart = Ti), (Gb.lineEnd = Pi)
            },
            polygonEnd: function() {
              ;(Gb.lineStart = Gb.lineEnd = Gb.point = Mr),
                Xb.add(Yg(Hb)),
                Hb.reset()
            },
            result: function() {
              var t = Xb / 2
              return Xb.reset(), t
            },
          },
          Vb = 1 / 0,
          $b = Vb,
          Wb = -Vb,
          Zb = Wb,
          Qb = {
            point: Ri,
            lineStart: Mr,
            lineEnd: Mr,
            polygonStart: Mr,
            polygonEnd: Mr,
            result: function() {
              var t = [[Vb, $b], [Wb, Zb]]
              return (Wb = Zb = -($b = Vb = 1 / 0)), t
            },
          },
          Jb = 0,
          Kb = 0,
          ty = 0,
          ny = 0,
          ey = 0,
          ry = 0,
          iy = 0,
          ay = 0,
          oy = 0,
          uy = {
            point: zi,
            lineStart: Li,
            lineEnd: Ui,
            polygonStart: function() {
              ;(uy.lineStart = Di), (uy.lineEnd = Yi)
            },
            polygonEnd: function() {
              ;(uy.point = zi), (uy.lineStart = Li), (uy.lineEnd = Ui)
            },
            result: function() {
              var t = oy
                ? [iy / oy, ay / oy]
                : ry
                ? [ny / ry, ey / ry]
                : ty
                ? [Jb / ty, Kb / ty]
                : [NaN, NaN]
              return (Jb = Kb = ty = ny = ey = ry = iy = ay = oy = 0), t
            },
          }
        Bi.prototype = {
          _radius: 4.5,
          pointRadius: function(t) {
            return (this._radius = t), this
          },
          polygonStart: function() {
            this._line = 0
          },
          polygonEnd: function() {
            this._line = NaN
          },
          lineStart: function() {
            this._point = 0
          },
          lineEnd: function() {
            0 === this._line && this._context.closePath(), (this._point = NaN)
          },
          point: function(t, n) {
            switch (this._point) {
              case 0:
                this._context.moveTo(t, n), (this._point = 1)
                break
              case 1:
                this._context.lineTo(t, n)
                break
              default:
                this._context.moveTo(t + this._radius, n),
                  this._context.arc(t, n, this._radius, 0, Og)
            }
          },
          result: Mr,
        }
        var cy,
          fy,
          sy,
          ly,
          hy,
          dy = Kv(),
          py = {
            point: Mr,
            lineStart: function() {
              py.point = ji
            },
            lineEnd: function() {
              cy && Xi(fy, sy), (py.point = Mr)
            },
            polygonStart: function() {
              cy = !0
            },
            polygonEnd: function() {
              cy = null
            },
            result: function() {
              var t = +dy
              return dy.reset(), t
            },
          }
        Hi.prototype = {
          _radius: 4.5,
          _circle: Gi(4.5),
          pointRadius: function(t) {
            return (
              (t = +t) !== this._radius &&
                ((this._radius = t), (this._circle = null)),
              this
            )
          },
          polygonStart: function() {
            this._line = 0
          },
          polygonEnd: function() {
            this._line = NaN
          },
          lineStart: function() {
            this._point = 0
          },
          lineEnd: function() {
            0 === this._line && this._string.push('Z'), (this._point = NaN)
          },
          point: function(t, n) {
            switch (this._point) {
              case 0:
                this._string.push('M', t, ',', n), (this._point = 1)
                break
              case 1:
                this._string.push('L', t, ',', n)
                break
              default:
                null == this._circle && (this._circle = Gi(this._radius)),
                  this._string.push('M', t, ',', n, this._circle)
            }
          },
          result: function() {
            if (this._string.length) {
              var t = this._string.join('')
              return (this._string = []), t
            }
            return null
          },
        }
        var vy = function(t, n) {
            function e(t) {
              return (
                t &&
                  ('function' == typeof a &&
                    i.pointRadius(+a.apply(this, arguments)),
                  Kg(t, r(i))),
                i.result()
              )
            }
            var r,
              i,
              a = 4.5
            return (
              (e.area = function(t) {
                return Kg(t, r(Gb)), Gb.result()
              }),
              (e.measure = function(t) {
                return Kg(t, r(py)), py.result()
              }),
              (e.bounds = function(t) {
                return Kg(t, r(Qb)), Qb.result()
              }),
              (e.centroid = function(t) {
                return Kg(t, r(uy)), uy.result()
              }),
              (e.projection = function(n) {
                return arguments.length
                  ? ((r = null == n ? ((t = null), jb) : (t = n).stream), e)
                  : t
              }),
              (e.context = function(t) {
                return arguments.length
                  ? ((i = null == t ? ((n = null), new Hi()) : new Bi((n = t))),
                    'function' != typeof a && i.pointRadius(a),
                    e)
                  : n
              }),
              (e.pointRadius = function(t) {
                return arguments.length
                  ? ((a = 'function' == typeof t ? t : (i.pointRadius(+t), +t)),
                    e)
                  : a
              }),
              e.projection(t).context(n)
            )
          },
          gy = function(t, n, e, r) {
            return function(i, a) {
              function o(n, e) {
                var r = i(n, e)
                t((n = r[0]), (e = r[1])) && a.point(n, e)
              }
              function u(t, n) {
                var e = i(t, n)
                g.point(e[0], e[1])
              }
              function c() {
                ;(x.point = u), g.lineStart()
              }
              function f() {
                ;(x.point = o), g.lineEnd()
              }
              function s(t, n) {
                v.push([t, n])
                var e = i(t, n)
                _.point(e[0], e[1])
              }
              function l() {
                _.lineStart(), (v = [])
              }
              function h() {
                s(v[0][0], v[0][1]), _.lineEnd()
                var t,
                  n,
                  e,
                  r,
                  i = _.clean(),
                  o = y.result(),
                  u = o.length
                if ((v.pop(), d.push(v), (v = null), u))
                  if (1 & i) {
                    if (((e = o[0]), (n = e.length - 1) > 0)) {
                      for (
                        m || (a.polygonStart(), (m = !0)), a.lineStart(), t = 0;
                        t < n;
                        ++t
                      )
                        a.point((r = e[t])[0], r[1])
                      a.lineEnd()
                    }
                  } else
                    u > 1 && 2 & i && o.push(o.pop().concat(o.shift())),
                      p.push(o.filter(Vi))
              }
              var d,
                p,
                v,
                g = n(a),
                b = i.invert(r[0], r[1]),
                y = kb(),
                _ = n(y),
                m = !1,
                x = {
                  point: o,
                  lineStart: c,
                  lineEnd: f,
                  polygonStart: function() {
                    ;(x.point = s),
                      (x.lineStart = l),
                      (x.lineEnd = h),
                      (p = []),
                      (d = [])
                  },
                  polygonEnd: function() {
                    ;(x.point = o),
                      (x.lineStart = c),
                      (x.lineEnd = f),
                      (p = Ts(p))
                    var t = Rb(d, b)
                    p.length
                      ? (m || (a.polygonStart(), (m = !0)), Ab(p, $i, t, e, a))
                      : t &&
                        (m || (a.polygonStart(), (m = !0)),
                        a.lineStart(),
                        e(null, null, 1, a),
                        a.lineEnd()),
                      m && (a.polygonEnd(), (m = !1)),
                      (p = d = null)
                  },
                  sphere: function() {
                    a.polygonStart(),
                      a.lineStart(),
                      e(null, null, 1, a),
                      a.lineEnd(),
                      a.polygonEnd()
                  },
                }
              return x
            }
          },
          by = gy(
            function() {
              return !0
            },
            Wi,
            Qi,
            [-zg, -Lg]
          ),
          yy = function(t, n) {
            function e(e, r, i, a) {
              fi(a, t, n, i, e, r)
            }
            function r(t, n) {
              return Bg(t) * Bg(n) > u
            }
            function i(t) {
              var n, e, i, u, s
              return {
                lineStart: function() {
                  ;(u = i = !1), (s = 1)
                },
                point: function(l, h) {
                  var d,
                    p = [l, h],
                    v = r(l, h),
                    g = c
                      ? v
                        ? 0
                        : o(l, h)
                      : v
                      ? o(l + (l < 0 ? zg : -zg), h)
                      : 0
                  if (
                    (!n && (u = i = v) && t.lineStart(),
                    v !== i &&
                      (!(d = a(n, p)) || Sb(n, d) || Sb(p, d)) &&
                      ((p[0] += Rg), (p[1] += Rg), (v = r(p[0], p[1]))),
                    v !== i)
                  )
                    (s = 0),
                      v
                        ? (t.lineStart(), (d = a(p, n)), t.point(d[0], d[1]))
                        : ((d = a(n, p)), t.point(d[0], d[1]), t.lineEnd()),
                      (n = d)
                  else if (f && n && c ^ v) {
                    var b
                    g & e ||
                      !(b = a(p, n, !0)) ||
                      ((s = 0),
                      c
                        ? (t.lineStart(),
                          t.point(b[0][0], b[0][1]),
                          t.point(b[1][0], b[1][1]),
                          t.lineEnd())
                        : (t.point(b[1][0], b[1][1]),
                          t.lineEnd(),
                          t.lineStart(),
                          t.point(b[0][0], b[0][1])))
                  }
                  !v || (n && Sb(n, p)) || t.point(p[0], p[1]),
                    (n = p),
                    (i = v),
                    (e = g)
                },
                lineEnd: function() {
                  i && t.lineEnd(), (n = null)
                },
                clean: function() {
                  return s | ((u && i) << 1)
                },
              }
            }
            function a(t, n, e) {
              var r = Rr(t),
                i = Rr(n),
                a = [1, 0, 0],
                o = Lr(r, i),
                c = zr(o, o),
                f = o[0],
                s = c - f * f
              if (!s) return !e && t
              var l = (u * c) / s,
                h = (-u * f) / s,
                d = Lr(a, o),
                p = Or(a, l)
              qr(p, Or(o, h))
              var v = d,
                g = zr(p, v),
                b = zr(v, v),
                y = g * g - b * (zr(p, p) - 1)
              if (!(y < 0)) {
                var _ = Wg(y),
                  m = Or(v, (-g - _) / b)
                if ((qr(m, p), (m = Pr(m)), !e)) return m
                var x,
                  w = t[0],
                  M = n[0],
                  k = t[1],
                  N = n[1]
                M < w && ((x = w), (w = M), (M = x))
                var S = M - w,
                  A = Yg(S - zg) < Rg,
                  T = A || S < Rg
                if (
                  (!A && N < k && ((x = k), (k = N), (N = x)),
                  T
                    ? A
                      ? (k + N > 0) ^ (m[1] < (Yg(m[0] - w) < Rg ? k : N))
                      : k <= m[1] && m[1] <= N
                    : (S > zg) ^ (w <= m[0] && m[0] <= M))
                ) {
                  var E = Or(v, (-g + _) / b)
                  return qr(E, p), [m, Pr(E)]
                }
              }
            }
            function o(n, e) {
              var r = c ? t : zg - t,
                i = 0
              return (
                n < -r ? (i |= 1) : n > r && (i |= 2),
                e < -r ? (i |= 4) : e > r && (i |= 8),
                i
              )
            }
            var u = Bg(t),
              c = u > 0,
              f = Yg(u) > Rg
            return gy(r, i, e, c ? [0, -t] : [-zg, t - zg])
          },
          _y = function(t) {
            return { stream: Ji(t) }
          }
        Ki.prototype = {
          constructor: Ki,
          point: function(t, n) {
            this.stream.point(t, n)
          },
          sphere: function() {
            this.stream.sphere()
          },
          lineStart: function() {
            this.stream.lineStart()
          },
          lineEnd: function() {
            this.stream.lineEnd()
          },
          polygonStart: function() {
            this.stream.polygonStart()
          },
          polygonEnd: function() {
            this.stream.polygonEnd()
          },
        }
        var my = 16,
          xy = Bg(30 * Dg),
          wy = function(t, n) {
            return +n ? ra(t, n) : ea(t)
          },
          My = Ji({
            point: function(t, n) {
              this.stream.point(t * Dg, n * Dg)
            },
          }),
          ky = function() {
            return oa(ca)
              .scale(155.424)
              .center([0, 33.6442])
          },
          Ny = function() {
            return ky()
              .parallels([29.5, 45.5])
              .scale(1070)
              .translate([480, 250])
              .rotate([96, 0])
              .center([-0.6, 38.7])
          },
          Sy = function() {
            function t(t) {
              var n = t[0],
                e = t[1]
              return (
                (u = null),
                i.point(n, e),
                u || (a.point(n, e), u) || (o.point(n, e), u)
              )
            }
            function n() {
              return (e = r = null), t
            }
            var e,
              r,
              i,
              a,
              o,
              u,
              c = Ny(),
              f = ky()
                .rotate([154, 0])
                .center([-2, 58.5])
                .parallels([55, 65]),
              s = ky()
                .rotate([157, 0])
                .center([-3, 19.9])
                .parallels([8, 18]),
              l = {
                point: function(t, n) {
                  u = [t, n]
                },
              }
            return (
              (t.invert = function(t) {
                var n = c.scale(),
                  e = c.translate(),
                  r = (t[0] - e[0]) / n,
                  i = (t[1] - e[1]) / n
                return (i >= 0.12 && i < 0.234 && r >= -0.425 && r < -0.214
                  ? f
                  : i >= 0.166 && i < 0.234 && r >= -0.214 && r < -0.115
                  ? s
                  : c
                ).invert(t)
              }),
              (t.stream = function(t) {
                return e && r === t
                  ? e
                  : (e = fa([c.stream((r = t)), f.stream(t), s.stream(t)]))
              }),
              (t.precision = function(t) {
                return arguments.length
                  ? (c.precision(t), f.precision(t), s.precision(t), n())
                  : c.precision()
              }),
              (t.scale = function(n) {
                return arguments.length
                  ? (c.scale(n),
                    f.scale(0.35 * n),
                    s.scale(n),
                    t.translate(c.translate()))
                  : c.scale()
              }),
              (t.translate = function(t) {
                if (!arguments.length) return c.translate()
                var e = c.scale(),
                  r = +t[0],
                  u = +t[1]
                return (
                  (i = c
                    .translate(t)
                    .clipExtent([
                      [r - 0.455 * e, u - 0.238 * e],
                      [r + 0.455 * e, u + 0.238 * e],
                    ])
                    .stream(l)),
                  (a = f
                    .translate([r - 0.307 * e, u + 0.201 * e])
                    .clipExtent([
                      [r - 0.425 * e + Rg, u + 0.12 * e + Rg],
                      [r - 0.214 * e - Rg, u + 0.234 * e - Rg],
                    ])
                    .stream(l)),
                  (o = s
                    .translate([r - 0.205 * e, u + 0.212 * e])
                    .clipExtent([
                      [r - 0.214 * e + Rg, u + 0.166 * e + Rg],
                      [r - 0.115 * e - Rg, u + 0.234 * e - Rg],
                    ])
                    .stream(l)),
                  n()
                )
              }),
              (t.fitExtent = function(n, e) {
                return ta(t, n, e)
              }),
              (t.fitSize = function(n, e) {
                return na(t, n, e)
              }),
              t.scale(1070)
            )
          },
          Ay = sa(function(t) {
            return Wg(2 / (1 + t))
          })
        Ay.invert = la(function(t) {
          return 2 * xr(t / 2)
        })
        var Ty = function() {
            return ia(Ay)
              .scale(124.75)
              .clipAngle(179.999)
          },
          Ey = sa(function(t) {
            return (t = mr(t)) && t / Vg(t)
          })
        Ey.invert = la(function(t) {
          return t
        })
        var Cy = function() {
          return ia(Ey)
            .scale(79.4188)
            .clipAngle(179.999)
        }
        ha.invert = function(t, n) {
          return [t, 2 * Ig(Xg(n)) - Lg]
        }
        var Py = function() {
            return da(ha).scale(961 / Og)
          },
          Ry = function() {
            return oa(va)
              .scale(109.5)
              .parallels([30, 30])
          }
        ga.invert = ga
        var zy = function() {
            return ia(ga).scale(152.63)
          },
          Ly = function() {
            return oa(ba)
              .scale(131.154)
              .center([0, 13.9389])
          }
        ya.invert = la(Ig)
        var qy = function() {
            return ia(ya)
              .scale(144.049)
              .clipAngle(60)
          },
          Oy = function() {
            function t() {
              return (i = a = null), o
            }
            var n,
              e,
              r,
              i,
              a,
              o,
              u = 1,
              c = 0,
              f = 0,
              s = 1,
              l = 1,
              h = jb,
              d = null,
              p = jb
            return (o = {
              stream: function(t) {
                return i && a === t ? i : (i = h(p((a = t))))
              },
              clipExtent: function(i) {
                return arguments.length
                  ? ((p =
                      null == i
                        ? ((d = n = e = r = null), jb)
                        : di(
                            (d = +i[0][0]),
                            (n = +i[0][1]),
                            (e = +i[1][0]),
                            (r = +i[1][1])
                          )),
                    t())
                  : null == d
                  ? null
                  : [[d, n], [e, r]]
              },
              scale: function(n) {
                return arguments.length
                  ? ((h = _a((u = +n) * s, u * l, c, f)), t())
                  : u
              },
              translate: function(n) {
                return arguments.length
                  ? ((h = _a(u * s, u * l, (c = +n[0]), (f = +n[1]))), t())
                  : [c, f]
              },
              reflectX: function(n) {
                return arguments.length
                  ? ((h = _a(u * (s = n ? -1 : 1), u * l, c, f)), t())
                  : s < 0
              },
              reflectY: function(n) {
                return arguments.length
                  ? ((h = _a(u * s, u * (l = n ? -1 : 1), c, f)), t())
                  : l < 0
              },
              fitExtent: function(t, n) {
                return ta(o, t, n)
              },
              fitSize: function(t, n) {
                return na(o, t, n)
              },
            })
          }
        ma.invert = la(xr)
        var Uy = function() {
          return ia(ma)
            .scale(249.5)
            .clipAngle(90 + Rg)
        }
        xa.invert = la(function(t) {
          return 2 * Ig(t)
        })
        var Dy = function() {
          return ia(xa)
            .scale(250)
            .clipAngle(142)
        }
        wa.invert = function(t, n) {
          return [-n, 2 * Ig(Xg(t)) - Lg]
        }
        var Yy = function() {
            var t = da(wa),
              n = t.center,
              e = t.rotate
            return (
              (t.center = function(t) {
                return arguments.length
                  ? n([-t[1], t[0]])
                  : ((t = n()), [t[1], -t[0]])
              }),
              (t.rotate = function(t) {
                return arguments.length
                  ? e([t[0], t[1], t.length > 2 ? t[2] + 90 : 90])
                  : ((t = e()), [t[0], t[1], t[2] - 90])
              }),
              e([0, 0, 90]).scale(159.155)
            )
          },
          Iy = function() {
            function t(t) {
              var a,
                o = 0
              t.eachAfter(function(t) {
                var e = t.children
                e
                  ? ((t.x = ka(e)), (t.y = Sa(e)))
                  : ((t.x = a ? (o += n(t, a)) : 0), (t.y = 0), (a = t))
              })
              var u = Ta(t),
                c = Ea(t),
                f = u.x - n(u, c) / 2,
                s = c.x + n(c, u) / 2
              return t.eachAfter(
                i
                  ? function(n) {
                      ;(n.x = (n.x - t.x) * e), (n.y = (t.y - n.y) * r)
                    }
                  : function(n) {
                      ;(n.x = ((n.x - f) / (s - f)) * e),
                        (n.y = (1 - (t.y ? n.y / t.y : 1)) * r)
                    }
              )
            }
            var n = Ma,
              e = 1,
              r = 1,
              i = !1
            return (
              (t.separation = function(e) {
                return arguments.length ? ((n = e), t) : n
              }),
              (t.size = function(n) {
                return arguments.length
                  ? ((i = !1), (e = +n[0]), (r = +n[1]), t)
                  : i
                  ? null
                  : [e, r]
              }),
              (t.nodeSize = function(n) {
                return arguments.length
                  ? ((i = !0), (e = +n[0]), (r = +n[1]), t)
                  : i
                  ? [e, r]
                  : null
              }),
              t
            )
          },
          Fy = function() {
            return this.eachAfter(Ca)
          },
          By = function(t) {
            var n,
              e,
              r,
              i,
              a = this,
              o = [a]
            do {
              for (n = o.reverse(), o = []; (a = n.pop()); )
                if ((t(a), (e = a.children)))
                  for (r = 0, i = e.length; r < i; ++r) o.push(e[r])
            } while (o.length)
            return this
          },
          jy = function(t) {
            for (var n, e, r = this, i = [r]; (r = i.pop()); )
              if ((t(r), (n = r.children)))
                for (e = n.length - 1; e >= 0; --e) i.push(n[e])
            return this
          },
          Xy = function(t) {
            for (var n, e, r, i = this, a = [i], o = []; (i = a.pop()); )
              if ((o.push(i), (n = i.children)))
                for (e = 0, r = n.length; e < r; ++e) a.push(n[e])
            for (; (i = o.pop()); ) t(i)
            return this
          },
          Hy = function(t) {
            return this.eachAfter(function(n) {
              for (
                var e = +t(n.data) || 0, r = n.children, i = r && r.length;
                --i >= 0;

              )
                e += r[i].value
              n.value = e
            })
          },
          Gy = function(t) {
            return this.eachBefore(function(n) {
              n.children && n.children.sort(t)
            })
          },
          Vy = function(t) {
            for (var n = this, e = Pa(n, t), r = [n]; n !== e; )
              (n = n.parent), r.push(n)
            for (var i = r.length; t !== e; ) r.splice(i, 0, t), (t = t.parent)
            return r
          },
          $y = function() {
            for (var t = this, n = [t]; (t = t.parent); ) n.push(t)
            return n
          },
          Wy = function() {
            var t = []
            return (
              this.each(function(n) {
                t.push(n)
              }),
              t
            )
          },
          Zy = function() {
            var t = []
            return (
              this.eachBefore(function(n) {
                n.children || t.push(n)
              }),
              t
            )
          },
          Qy = function() {
            var t = this,
              n = []
            return (
              t.each(function(e) {
                e !== t && n.push({ source: e.parent, target: e })
              }),
              n
            )
          }
        Ua.prototype = Ra.prototype = {
          constructor: Ua,
          count: Fy,
          each: By,
          eachAfter: Xy,
          eachBefore: jy,
          sum: Hy,
          sort: Gy,
          path: Vy,
          ancestors: $y,
          descendants: Wy,
          leaves: Zy,
          links: Qy,
          copy: za,
        }
        var Jy = Array.prototype.slice,
          Ky = function(t) {
            for (
              var n, e, r = 0, i = (t = Da(Jy.call(t))).length, a = [];
              r < i;

            )
              (n = t[r]),
                e && Fa(e, n) ? ++r : ((e = ja((a = Ya(a, n)))), (r = 0))
            return e
          },
          t_ = function(t) {
            return Qa(t), t
          },
          n_ = function(t) {
            return function() {
              return t
            }
          },
          e_ = function() {
            function t(t) {
              return (
                (t.x = e / 2),
                (t.y = r / 2),
                n
                  ? t
                      .eachBefore(eo(n))
                      .eachAfter(ro(i, 0.5))
                      .eachBefore(io(1))
                  : t
                      .eachBefore(eo(no))
                      .eachAfter(ro(to, 1))
                      .eachAfter(ro(i, t.r / Math.min(e, r)))
                      .eachBefore(io(Math.min(e, r) / (2 * t.r))),
                t
              )
            }
            var n = null,
              e = 1,
              r = 1,
              i = to
            return (
              (t.radius = function(e) {
                return arguments.length ? ((n = Ja(e)), t) : n
              }),
              (t.size = function(n) {
                return arguments.length ? ((e = +n[0]), (r = +n[1]), t) : [e, r]
              }),
              (t.padding = function(n) {
                return arguments.length
                  ? ((i = 'function' == typeof n ? n : n_(+n)), t)
                  : i
              }),
              t
            )
          },
          r_ = function(t) {
            ;(t.x0 = Math.round(t.x0)),
              (t.y0 = Math.round(t.y0)),
              (t.x1 = Math.round(t.x1)),
              (t.y1 = Math.round(t.y1))
          },
          i_ = function(t, n, e, r, i) {
            for (
              var a,
                o = t.children,
                u = -1,
                c = o.length,
                f = t.value && (r - n) / t.value;
              ++u < c;

            )
              (a = o[u]),
                (a.y0 = e),
                (a.y1 = i),
                (a.x0 = n),
                (a.x1 = n += a.value * f)
          },
          a_ = function() {
            function t(t) {
              var o = t.height + 1
              return (
                (t.x0 = t.y0 = i),
                (t.x1 = e),
                (t.y1 = r / o),
                t.eachBefore(n(r, o)),
                a && t.eachBefore(r_),
                t
              )
            }
            function n(t, n) {
              return function(e) {
                e.children &&
                  i_(
                    e,
                    e.x0,
                    (t * (e.depth + 1)) / n,
                    e.x1,
                    (t * (e.depth + 2)) / n
                  )
                var r = e.x0,
                  a = e.y0,
                  o = e.x1 - i,
                  u = e.y1 - i
                o < r && (r = o = (r + o) / 2),
                  u < a && (a = u = (a + u) / 2),
                  (e.x0 = r),
                  (e.y0 = a),
                  (e.x1 = o),
                  (e.y1 = u)
              }
            }
            var e = 1,
              r = 1,
              i = 0,
              a = !1
            return (
              (t.round = function(n) {
                return arguments.length ? ((a = !!n), t) : a
              }),
              (t.size = function(n) {
                return arguments.length ? ((e = +n[0]), (r = +n[1]), t) : [e, r]
              }),
              (t.padding = function(n) {
                return arguments.length ? ((i = +n), t) : i
              }),
              t
            )
          },
          o_ = '$',
          u_ = { depth: -1 },
          c_ = {},
          f_ = function() {
            function t(t) {
              var r,
                i,
                a,
                o,
                u,
                c,
                f,
                s = t.length,
                l = new Array(s),
                h = {}
              for (i = 0; i < s; ++i)
                (r = t[i]),
                  (u = l[i] = new Ua(r)),
                  null != (c = n(r, i, t)) &&
                    (c += '') &&
                    ((f = o_ + (u.id = c)), (h[f] = f in h ? c_ : u))
              for (i = 0; i < s; ++i)
                if (((u = l[i]), null != (c = e(t[i], i, t)) && (c += ''))) {
                  if (!(o = h[o_ + c])) throw new Error('missing: ' + c)
                  if (o === c_) throw new Error('ambiguous: ' + c)
                  o.children ? o.children.push(u) : (o.children = [u]),
                    (u.parent = o)
                } else {
                  if (a) throw new Error('multiple roots')
                  a = u
                }
              if (!a) throw new Error('no root')
              if (
                ((a.parent = u_),
                a
                  .eachBefore(function(t) {
                    ;(t.depth = t.parent.depth + 1), --s
                  })
                  .eachBefore(Oa),
                (a.parent = null),
                s > 0)
              )
                throw new Error('cycle')
              return a
            }
            var n = ao,
              e = oo
            return (
              (t.id = function(e) {
                return arguments.length ? ((n = Ka(e)), t) : n
              }),
              (t.parentId = function(n) {
                return arguments.length ? ((e = Ka(n)), t) : e
              }),
              t
            )
          }
        po.prototype = Object.create(Ua.prototype)
        var s_ = function() {
            function t(t) {
              var r = vo(t)
              if ((r.eachAfter(n), (r.parent.m = -r.z), r.eachBefore(e), c))
                t.eachBefore(i)
              else {
                var f = t,
                  s = t,
                  l = t
                t.eachBefore(function(t) {
                  t.x < f.x && (f = t),
                    t.x > s.x && (s = t),
                    t.depth > l.depth && (l = t)
                })
                var h = f === s ? 1 : a(f, s) / 2,
                  d = h - f.x,
                  p = o / (s.x + h + d),
                  v = u / (l.depth || 1)
                t.eachBefore(function(t) {
                  ;(t.x = (t.x + d) * p), (t.y = t.depth * v)
                })
              }
              return t
            }
            function n(t) {
              var n = t.children,
                e = t.parent.children,
                i = t.i ? e[t.i - 1] : null
              if (n) {
                lo(t)
                var o = (n[0].z + n[n.length - 1].z) / 2
                i ? ((t.z = i.z + a(t._, i._)), (t.m = t.z - o)) : (t.z = o)
              } else i && (t.z = i.z + a(t._, i._))
              t.parent.A = r(t, i, t.parent.A || e[0])
            }
            function e(t) {
              ;(t._.x = t.z + t.parent.m), (t.m += t.parent.m)
            }
            function r(t, n, e) {
              if (n) {
                for (
                  var r,
                    i = t,
                    o = t,
                    u = n,
                    c = i.parent.children[0],
                    f = i.m,
                    s = o.m,
                    l = u.m,
                    h = c.m;
                  (u = fo(u)), (i = co(i)), u && i;

                )
                  (c = co(c)),
                    (o = fo(o)),
                    (o.a = t),
                    (r = u.z + l - i.z - f + a(u._, i._)),
                    r > 0 && (so(ho(u, t, e), t, r), (f += r), (s += r)),
                    (l += u.m),
                    (f += i.m),
                    (h += c.m),
                    (s += o.m)
                u && !fo(o) && ((o.t = u), (o.m += l - s)),
                  i && !co(c) && ((c.t = i), (c.m += f - h), (e = t))
              }
              return e
            }
            function i(t) {
              ;(t.x *= o), (t.y = t.depth * u)
            }
            var a = uo,
              o = 1,
              u = 1,
              c = null
            return (
              (t.separation = function(n) {
                return arguments.length ? ((a = n), t) : a
              }),
              (t.size = function(n) {
                return arguments.length
                  ? ((c = !1), (o = +n[0]), (u = +n[1]), t)
                  : c
                  ? null
                  : [o, u]
              }),
              (t.nodeSize = function(n) {
                return arguments.length
                  ? ((c = !0), (o = +n[0]), (u = +n[1]), t)
                  : c
                  ? [o, u]
                  : null
              }),
              t
            )
          },
          l_ = function(t, n, e, r, i) {
            for (
              var a,
                o = t.children,
                u = -1,
                c = o.length,
                f = t.value && (i - e) / t.value;
              ++u < c;

            )
              (a = o[u]),
                (a.x0 = n),
                (a.x1 = r),
                (a.y0 = e),
                (a.y1 = e += a.value * f)
          },
          h_ = (1 + Math.sqrt(5)) / 2,
          d_ = (function t(n) {
            function e(t, e, r, i, a) {
              go(n, t, e, r, i, a)
            }
            return (
              (e.ratio = function(n) {
                return t((n = +n) > 1 ? n : 1)
              }),
              e
            )
          })(h_),
          p_ = function() {
            function t(t) {
              return (
                (t.x0 = t.y0 = 0),
                (t.x1 = i),
                (t.y1 = a),
                t.eachBefore(n),
                (o = [0]),
                r && t.eachBefore(r_),
                t
              )
            }
            function n(t) {
              var n = o[t.depth],
                r = t.x0 + n,
                i = t.y0 + n,
                a = t.x1 - n,
                h = t.y1 - n
              a < r && (r = a = (r + a) / 2),
                h < i && (i = h = (i + h) / 2),
                (t.x0 = r),
                (t.y0 = i),
                (t.x1 = a),
                (t.y1 = h),
                t.children &&
                  ((n = o[t.depth + 1] = u(t) / 2),
                  (r += l(t) - n),
                  (i += c(t) - n),
                  (a -= f(t) - n),
                  (h -= s(t) - n),
                  a < r && (r = a = (r + a) / 2),
                  h < i && (i = h = (i + h) / 2),
                  e(t, r, i, a, h))
            }
            var e = d_,
              r = !1,
              i = 1,
              a = 1,
              o = [0],
              u = to,
              c = to,
              f = to,
              s = to,
              l = to
            return (
              (t.round = function(n) {
                return arguments.length ? ((r = !!n), t) : r
              }),
              (t.size = function(n) {
                return arguments.length ? ((i = +n[0]), (a = +n[1]), t) : [i, a]
              }),
              (t.tile = function(n) {
                return arguments.length ? ((e = Ka(n)), t) : e
              }),
              (t.padding = function(n) {
                return arguments.length
                  ? t.paddingInner(n).paddingOuter(n)
                  : t.paddingInner()
              }),
              (t.paddingInner = function(n) {
                return arguments.length
                  ? ((u = 'function' == typeof n ? n : n_(+n)), t)
                  : u
              }),
              (t.paddingOuter = function(n) {
                return arguments.length
                  ? t
                      .paddingTop(n)
                      .paddingRight(n)
                      .paddingBottom(n)
                      .paddingLeft(n)
                  : t.paddingTop()
              }),
              (t.paddingTop = function(n) {
                return arguments.length
                  ? ((c = 'function' == typeof n ? n : n_(+n)), t)
                  : c
              }),
              (t.paddingRight = function(n) {
                return arguments.length
                  ? ((f = 'function' == typeof n ? n : n_(+n)), t)
                  : f
              }),
              (t.paddingBottom = function(n) {
                return arguments.length
                  ? ((s = 'function' == typeof n ? n : n_(+n)), t)
                  : s
              }),
              (t.paddingLeft = function(n) {
                return arguments.length
                  ? ((l = 'function' == typeof n ? n : n_(+n)), t)
                  : l
              }),
              t
            )
          },
          v_ = function(t, n, e, r, i) {
            function a(t, n, e, r, i, o, u) {
              if (t >= n - 1) {
                var f = c[t]
                return (f.x0 = r), (f.y0 = i), (f.x1 = o), (f.y1 = u), void 0
              }
              for (var l = s[t], h = e / 2 + l, d = t + 1, p = n - 1; d < p; ) {
                var v = (d + p) >>> 1
                s[v] < h ? (d = v + 1) : (p = v)
              }
              h - s[d - 1] < s[d] - h && t + 1 < d && --d
              var g = s[d] - l,
                b = e - g
              if (o - r > u - i) {
                var y = (r * b + o * g) / e
                a(t, d, g, r, i, y, u), a(d, n, b, y, i, o, u)
              } else {
                var _ = (i * b + u * g) / e
                a(t, d, g, r, i, o, _), a(d, n, b, r, _, o, u)
              }
            }
            var o,
              u,
              c = t.children,
              f = c.length,
              s = new Array(f + 1)
            for (s[0] = u = o = 0; o < f; ++o) s[o + 1] = u += c[o].value
            a(0, f, t.value, n, e, r, i)
          },
          g_ = function(t, n, e, r, i) {
            ;(1 & t.depth ? l_ : i_)(t, n, e, r, i)
          },
          b_ = (function t(n) {
            function e(t, e, r, i, a) {
              if ((o = t._squarify) && o.ratio === n)
                for (
                  var o, u, c, f, s, l = -1, h = o.length, d = t.value;
                  ++l < h;

                ) {
                  for (
                    u = o[l], c = u.children, f = u.value = 0, s = c.length;
                    f < s;
                    ++f
                  )
                    u.value += c[f].value
                  u.dice
                    ? i_(u, e, r, i, (r += ((a - r) * u.value) / d))
                    : l_(u, e, r, (e += ((i - e) * u.value) / d), a),
                    (d -= u.value)
                }
              else (t._squarify = o = go(n, t, e, r, i, a)), (o.ratio = n)
            }
            return (
              (e.ratio = function(n) {
                return t((n = +n) > 1 ? n : 1)
              }),
              e
            )
          })(h_),
          y_ = function(t) {
            for (var n, e = -1, r = t.length, i = t[r - 1], a = 0; ++e < r; )
              (n = i), (i = t[e]), (a += n[1] * i[0] - n[0] * i[1])
            return a / 2
          },
          __ = function(t) {
            for (
              var n, e, r = -1, i = t.length, a = 0, o = 0, u = t[i - 1], c = 0;
              ++r < i;

            )
              (n = u),
                (u = t[r]),
                (c += e = n[0] * u[1] - u[0] * n[1]),
                (a += (n[0] + u[0]) * e),
                (o += (n[1] + u[1]) * e)
            return (c *= 3), [a / c, o / c]
          },
          m_ = function(t, n, e) {
            return (n[0] - t[0]) * (e[1] - t[1]) - (n[1] - t[1]) * (e[0] - t[0])
          },
          x_ = function(t) {
            if ((e = t.length) < 3) return null
            var n,
              e,
              r = new Array(e),
              i = new Array(e)
            for (n = 0; n < e; ++n) r[n] = [+t[n][0], +t[n][1], n]
            for (r.sort(bo), n = 0; n < e; ++n) i[n] = [r[n][0], -r[n][1]]
            var a = yo(r),
              o = yo(i),
              u = o[0] === a[0],
              c = o[o.length - 1] === a[a.length - 1],
              f = []
            for (n = a.length - 1; n >= 0; --n) f.push(t[r[a[n]][2]])
            for (n = +u; n < o.length - c; ++n) f.push(t[r[o[n]][2]])
            return f
          },
          w_ = function(t, n) {
            for (
              var e,
                r,
                i = t.length,
                a = t[i - 1],
                o = n[0],
                u = n[1],
                c = a[0],
                f = a[1],
                s = !1,
                l = 0;
              l < i;
              ++l
            )
              (a = t[l]),
                (e = a[0]),
                (r = a[1]),
                r > u != f > u &&
                  o < ((c - e) * (u - r)) / (f - r) + e &&
                  (s = !s),
                (c = e),
                (f = r)
            return s
          },
          M_ = function(t) {
            for (
              var n,
                e,
                r = -1,
                i = t.length,
                a = t[i - 1],
                o = a[0],
                u = a[1],
                c = 0;
              ++r < i;

            )
              (n = o),
                (e = u),
                (a = t[r]),
                (o = a[0]),
                (u = a[1]),
                (n -= o),
                (e -= u),
                (c += Math.sqrt(n * n + e * e))
            return c
          },
          k_ = [].slice,
          N_ = {}
        _o.prototype = No.prototype = {
          constructor: _o,
          defer: function(t) {
            if ('function' != typeof t) throw new Error('invalid callback')
            if (this._call) throw new Error('defer after await')
            if (null != this._error) return this
            var n = k_.call(arguments, 1)
            return (
              n.push(t), ++this._waiting, this._tasks.push(n), mo(this), this
            )
          },
          abort: function() {
            return null == this._error && Mo(this, new Error('abort')), this
          },
          await: function(t) {
            if ('function' != typeof t) throw new Error('invalid callback')
            if (this._call) throw new Error('multiple await')
            return (
              (this._call = function(n, e) {
                t.apply(null, [n].concat(e))
              }),
              ko(this),
              this
            )
          },
          awaitAll: function(t) {
            if ('function' != typeof t) throw new Error('invalid callback')
            if (this._call) throw new Error('multiple await')
            return (this._call = t), ko(this), this
          },
        }
        var S_ = function() {
            return Math.random()
          },
          A_ = (function t(n) {
            function e(t, e) {
              return (
                (t = null == t ? 0 : +t),
                (e = null == e ? 1 : +e),
                1 === arguments.length ? ((e = t), (t = 0)) : (e -= t),
                function() {
                  return n() * e + t
                }
              )
            }
            return (e.source = t), e
          })(S_),
          T_ = (function t(n) {
            function e(t, e) {
              var r, i
              return (
                (t = null == t ? 0 : +t),
                (e = null == e ? 1 : +e),
                function() {
                  var a
                  if (null != r) (a = r), (r = null)
                  else
                    do {
                      ;(r = 2 * n() - 1), (a = 2 * n() - 1), (i = r * r + a * a)
                    } while (!i || i > 1)
                  return t + e * a * Math.sqrt((-2 * Math.log(i)) / i)
                }
              )
            }
            return (e.source = t), e
          })(S_),
          E_ = (function t(n) {
            function e() {
              var t = T_.source(n).apply(this, arguments)
              return function() {
                return Math.exp(t())
              }
            }
            return (e.source = t), e
          })(S_),
          C_ = (function t(n) {
            function e(t) {
              return function() {
                for (var e = 0, r = 0; r < t; ++r) e += n()
                return e
              }
            }
            return (e.source = t), e
          })(S_),
          P_ = (function t(n) {
            function e(t) {
              var e = C_.source(n)(t)
              return function() {
                return e() / t
              }
            }
            return (e.source = t), e
          })(S_),
          R_ = (function t(n) {
            function e(t) {
              return function() {
                return -Math.log(1 - n()) / t
              }
            }
            return (e.source = t), e
          })(S_),
          z_ = function(t, n) {
            function e(t) {
              var n,
                e = f.status
              if ((!e && Ao(f)) || (e >= 200 && e < 300) || 304 === e) {
                if (a)
                  try {
                    n = a.call(r, f)
                  } catch (t) {
                    return void u.call('error', r, t)
                  }
                else n = f
                u.call('load', r, n)
              } else u.call('error', r, t)
            }
            var r,
              i,
              a,
              o,
              u = g('beforesend', 'progress', 'load', 'error'),
              c = He(),
              f = new XMLHttpRequest(),
              s = null,
              l = null,
              h = 0
            if (
              ('undefined' == typeof XDomainRequest ||
                'withCredentials' in f ||
                !/^(http(s)?:)?\/\//.test(t) ||
                (f = new XDomainRequest()),
              'onload' in f
                ? (f.onload = f.onerror = f.ontimeout = e)
                : (f.onreadystatechange = function(t) {
                    f.readyState > 3 && e(t)
                  }),
              (f.onprogress = function(t) {
                u.call('progress', r, t)
              }),
              (r = {
                header: function(t, n) {
                  return (
                    (t = (t + '').toLowerCase()),
                    arguments.length < 2
                      ? c.get(t)
                      : (null == n ? c.remove(t) : c.set(t, n + ''), r)
                  )
                },
                mimeType: function(t) {
                  return arguments.length
                    ? ((i = null == t ? null : t + ''), r)
                    : i
                },
                responseType: function(t) {
                  return arguments.length ? ((o = t), r) : o
                },
                timeout: function(t) {
                  return arguments.length ? ((h = +t), r) : h
                },
                user: function(t) {
                  return arguments.length < 1
                    ? s
                    : ((s = null == t ? null : t + ''), r)
                },
                password: function(t) {
                  return arguments.length < 1
                    ? l
                    : ((l = null == t ? null : t + ''), r)
                },
                response: function(t) {
                  return (a = t), r
                },
                get: function(t, n) {
                  return r.send('GET', t, n)
                },
                post: function(t, n) {
                  return r.send('POST', t, n)
                },
                send: function(n, e, a) {
                  return (
                    f.open(n, t, !0, s, l),
                    null == i || c.has('accept') || c.set('accept', i + ',*/*'),
                    f.setRequestHeader &&
                      c.each(function(t, n) {
                        f.setRequestHeader(n, t)
                      }),
                    null != i && f.overrideMimeType && f.overrideMimeType(i),
                    null != o && (f.responseType = o),
                    h > 0 && (f.timeout = h),
                    null == a &&
                      'function' == typeof e &&
                      ((a = e), (e = null)),
                    null != a && 1 === a.length && (a = So(a)),
                    null != a &&
                      r.on('error', a).on('load', function(t) {
                        a(null, t)
                      }),
                    u.call('beforesend', r, f),
                    f.send(null == e ? null : e),
                    r
                  )
                },
                abort: function() {
                  return f.abort(), r
                },
                on: function() {
                  var t = u.on.apply(u, arguments)
                  return t === u ? r : t
                },
              }),
              null != n)
            ) {
              if ('function' != typeof n)
                throw new Error('invalid callback: ' + n)
              return r.get(n)
            }
            return r
          },
          L_ = function(t, n) {
            return function(e, r) {
              var i = z_(e)
                .mimeType(t)
                .response(n)
              if (null != r) {
                if ('function' != typeof r)
                  throw new Error('invalid callback: ' + r)
                return i.get(r)
              }
              return i
            }
          },
          q_ = L_('text/html', function(t) {
            return document
              .createRange()
              .createContextualFragment(t.responseText)
          }),
          O_ = L_('application/json', function(t) {
            return JSON.parse(t.responseText)
          }),
          U_ = L_('text/plain', function(t) {
            return t.responseText
          }),
          D_ = L_('application/xml', function(t) {
            var n = t.responseXML
            if (!n) throw new Error('parse error')
            return n
          }),
          Y_ = function(t, n) {
            return function(e, r, i) {
              arguments.length < 3 && ((i = r), (r = null))
              var a = z_(e).mimeType(t)
              return (
                (a.row = function(t) {
                  return arguments.length ? a.response(To(n, (r = t))) : r
                }),
                a.row(r),
                i ? a.get(i) : a
              )
            }
          },
          I_ = Y_('text/csv', ev),
          F_ = Y_('text/tab-separated-values', uv),
          B_ = Array.prototype,
          j_ = B_.map,
          X_ = B_.slice,
          H_ = { name: 'implicit' },
          G_ = function(t) {
            return function() {
              return t
            }
          },
          V_ = function(t) {
            return +t
          },
          $_ = [0, 1],
          W_ = function(n, e, r) {
            var a,
              o = n[0],
              u = n[n.length - 1],
              c = i(o, u, null == e ? 10 : e)
            switch (((r = vr(null == r ? ',f' : r)), r.type)) {
              case 's':
                var f = Math.max(Math.abs(o), Math.abs(u))
                return (
                  null != r.precision ||
                    isNaN((a = Qv(c, f))) ||
                    (r.precision = a),
                  t.formatPrefix(r, f)
                )
              case '':
              case 'e':
              case 'g':
              case 'p':
              case 'r':
                null != r.precision ||
                  isNaN((a = Jv(c, Math.max(Math.abs(o), Math.abs(u))))) ||
                  (r.precision = a - ('e' === r.type))
                break
              case 'f':
              case '%':
                null != r.precision ||
                  isNaN((a = Zv(c))) ||
                  (r.precision = a - 2 * ('%' === r.type))
            }
            return t.format(r)
          },
          Z_ = function(t, n) {
            t = t.slice()
            var e,
              r = 0,
              i = t.length - 1,
              a = t[r],
              o = t[i]
            return (
              o < a && ((e = r), (r = i), (i = e), (e = a), (a = o), (o = e)),
              (t[r] = n.floor(a)),
              (t[i] = n.ceil(o)),
              t
            )
          },
          Q_ = new Date(),
          J_ = new Date(),
          K_ = eu(
            function() {},
            function(t, n) {
              t.setTime(+t + n)
            },
            function(t, n) {
              return n - t
            }
          )
        K_.every = function(t) {
          return (
            (t = Math.floor(t)),
            isFinite(t) && t > 0
              ? t > 1
                ? eu(
                    function(n) {
                      n.setTime(Math.floor(n / t) * t)
                    },
                    function(n, e) {
                      n.setTime(+n + e * t)
                    },
                    function(n, e) {
                      return (e - n) / t
                    }
                  )
                : K_
              : null
          )
        }
        var tm = K_.range,
          nm = 6e4,
          em = 6048e5,
          rm = eu(
            function(t) {
              t.setTime(1e3 * Math.floor(t / 1e3))
            },
            function(t, n) {
              t.setTime(+t + 1e3 * n)
            },
            function(t, n) {
              return (n - t) / 1e3
            },
            function(t) {
              return t.getUTCSeconds()
            }
          ),
          im = rm.range,
          am = eu(
            function(t) {
              t.setTime(Math.floor(t / nm) * nm)
            },
            function(t, n) {
              t.setTime(+t + n * nm)
            },
            function(t, n) {
              return (n - t) / nm
            },
            function(t) {
              return t.getMinutes()
            }
          ),
          om = am.range,
          um = eu(
            function(t) {
              var n = (t.getTimezoneOffset() * nm) % 36e5
              n < 0 && (n += 36e5),
                t.setTime(36e5 * Math.floor((+t - n) / 36e5) + n)
            },
            function(t, n) {
              t.setTime(+t + 36e5 * n)
            },
            function(t, n) {
              return (n - t) / 36e5
            },
            function(t) {
              return t.getHours()
            }
          ),
          cm = um.range,
          fm = eu(
            function(t) {
              t.setHours(0, 0, 0, 0)
            },
            function(t, n) {
              t.setDate(t.getDate() + n)
            },
            function(t, n) {
              return (
                (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * nm) /
                864e5
              )
            },
            function(t) {
              return t.getDate() - 1
            }
          ),
          sm = fm.range,
          lm = ru(0),
          hm = ru(1),
          dm = ru(2),
          pm = ru(3),
          vm = ru(4),
          gm = ru(5),
          bm = ru(6),
          ym = lm.range,
          _m = hm.range,
          mm = dm.range,
          xm = pm.range,
          wm = vm.range,
          Mm = gm.range,
          km = bm.range,
          Nm = eu(
            function(t) {
              t.setDate(1), t.setHours(0, 0, 0, 0)
            },
            function(t, n) {
              t.setMonth(t.getMonth() + n)
            },
            function(t, n) {
              return (
                n.getMonth() -
                t.getMonth() +
                12 * (n.getFullYear() - t.getFullYear())
              )
            },
            function(t) {
              return t.getMonth()
            }
          ),
          Sm = Nm.range,
          Am = eu(
            function(t) {
              t.setMonth(0, 1), t.setHours(0, 0, 0, 0)
            },
            function(t, n) {
              t.setFullYear(t.getFullYear() + n)
            },
            function(t, n) {
              return n.getFullYear() - t.getFullYear()
            },
            function(t) {
              return t.getFullYear()
            }
          )
        Am.every = function(t) {
          return isFinite((t = Math.floor(t))) && t > 0
            ? eu(
                function(n) {
                  n.setFullYear(Math.floor(n.getFullYear() / t) * t),
                    n.setMonth(0, 1),
                    n.setHours(0, 0, 0, 0)
                },
                function(n, e) {
                  n.setFullYear(n.getFullYear() + e * t)
                }
              )
            : null
        }
        var Tm = Am.range,
          Em = eu(
            function(t) {
              t.setUTCSeconds(0, 0)
            },
            function(t, n) {
              t.setTime(+t + n * nm)
            },
            function(t, n) {
              return (n - t) / nm
            },
            function(t) {
              return t.getUTCMinutes()
            }
          ),
          Cm = Em.range,
          Pm = eu(
            function(t) {
              t.setUTCMinutes(0, 0, 0)
            },
            function(t, n) {
              t.setTime(+t + 36e5 * n)
            },
            function(t, n) {
              return (n - t) / 36e5
            },
            function(t) {
              return t.getUTCHours()
            }
          ),
          Rm = Pm.range,
          zm = eu(
            function(t) {
              t.setUTCHours(0, 0, 0, 0)
            },
            function(t, n) {
              t.setUTCDate(t.getUTCDate() + n)
            },
            function(t, n) {
              return (n - t) / 864e5
            },
            function(t) {
              return t.getUTCDate() - 1
            }
          ),
          Lm = zm.range,
          qm = iu(0),
          Om = iu(1),
          Um = iu(2),
          Dm = iu(3),
          Ym = iu(4),
          Im = iu(5),
          Fm = iu(6),
          Bm = qm.range,
          jm = Om.range,
          Xm = Um.range,
          Hm = Dm.range,
          Gm = Ym.range,
          Vm = Im.range,
          $m = Fm.range,
          Wm = eu(
            function(t) {
              t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0)
            },
            function(t, n) {
              t.setUTCMonth(t.getUTCMonth() + n)
            },
            function(t, n) {
              return (
                n.getUTCMonth() -
                t.getUTCMonth() +
                12 * (n.getUTCFullYear() - t.getUTCFullYear())
              )
            },
            function(t) {
              return t.getUTCMonth()
            }
          ),
          Zm = Wm.range,
          Qm = eu(
            function(t) {
              t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0)
            },
            function(t, n) {
              t.setUTCFullYear(t.getUTCFullYear() + n)
            },
            function(t, n) {
              return n.getUTCFullYear() - t.getUTCFullYear()
            },
            function(t) {
              return t.getUTCFullYear()
            }
          )
        Qm.every = function(t) {
          return isFinite((t = Math.floor(t))) && t > 0
            ? eu(
                function(n) {
                  n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t),
                    n.setUTCMonth(0, 1),
                    n.setUTCHours(0, 0, 0, 0)
                },
                function(n, e) {
                  n.setUTCFullYear(n.getUTCFullYear() + e * t)
                }
              )
            : null
        }
        var Jm,
          Km = Qm.range,
          tx = { '-': '', _: ' ', 0: '0' },
          nx = /^\s*\d+/,
          ex = /^%/,
          rx = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g
        ec({
          dateTime: '%x, %X',
          date: '%-m/%-d/%Y',
          time: '%-I:%M:%S %p',
          periods: ['AM', 'PM'],
          days: [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
          ],
          shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          months: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ],
          shortMonths: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
          ],
        })
        var ix = Date.prototype.toISOString
            ? rc
            : t.utcFormat('%Y-%m-%dT%H:%M:%S.%LZ'),
          ax = +new Date('2000-01-01T00:00:00.000Z')
            ? ic
            : t.utcParse('%Y-%m-%dT%H:%M:%S.%LZ'),
          ox = 1e3,
          ux = 60 * ox,
          cx = 60 * ux,
          fx = 24 * cx,
          sx = 7 * fx,
          lx = 30 * fx,
          hx = 365 * fx,
          dx = function() {
            return uc(Am, Nm, lm, fm, um, am, rm, K_, t.timeFormat).domain([
              new Date(2e3, 0, 1),
              new Date(2e3, 0, 2),
            ])
          },
          px = function() {
            return uc(Qm, Wm, qm, zm, Pm, Em, rm, K_, t.utcFormat).domain([
              Date.UTC(2e3, 0, 1),
              Date.UTC(2e3, 0, 2),
            ])
          },
          vx = function(t) {
            return t.match(/.{6}/g).map(function(t) {
              return '#' + t
            })
          },
          gx = vx(
            '1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf'
          ),
          bx = vx(
            '393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6'
          ),
          yx = vx(
            '3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9'
          ),
          _x = vx(
            '1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5'
          ),
          mx = ed(Zt(300, 0.5, 0), Zt(-240, 0.5, 1)),
          xx = ed(Zt(-100, 0.75, 0.35), Zt(80, 1.5, 0.8)),
          wx = ed(Zt(260, 0.75, 0.35), Zt(80, 1.5, 0.8)),
          Mx = Zt(),
          kx = function(t) {
            ;(t < 0 || t > 1) && (t -= Math.floor(t))
            var n = Math.abs(t - 0.5)
            return (
              (Mx.h = 360 * t - 100),
              (Mx.s = 1.5 - 1.5 * n),
              (Mx.l = 0.8 - 0.9 * n),
              Mx + ''
            )
          },
          Nx = cc(
            vx(
              '44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725'
            )
          ),
          Sx = cc(
            vx(
              '00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf'
            )
          ),
          Ax = cc(
            vx(
              '00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4'
            )
          ),
          Tx = cc(
            vx(
              '0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921'
            )
          ),
          Ex = function(t) {
            return function() {
              return t
            }
          },
          Cx = Math.abs,
          Px = Math.atan2,
          Rx = Math.cos,
          zx = Math.max,
          Lx = Math.min,
          qx = Math.sin,
          Ox = Math.sqrt,
          Ux = 1e-12,
          Dx = Math.PI,
          Yx = Dx / 2,
          Ix = 2 * Dx,
          Fx = function() {
            function t() {
              var t,
                f,
                s = +n.apply(this, arguments),
                l = +e.apply(this, arguments),
                h = a.apply(this, arguments) - Yx,
                d = o.apply(this, arguments) - Yx,
                p = Cx(d - h),
                v = d > h
              if (
                (c || (c = t = De()),
                l < s && ((f = l), (l = s), (s = f)),
                l > Ux)
              )
                if (p > Ix - Ux)
                  c.moveTo(l * Rx(h), l * qx(h)),
                    c.arc(0, 0, l, h, d, !v),
                    s > Ux &&
                      (c.moveTo(s * Rx(d), s * qx(d)), c.arc(0, 0, s, d, h, v))
                else {
                  var g,
                    b,
                    y = h,
                    _ = d,
                    m = h,
                    x = d,
                    w = p,
                    M = p,
                    k = u.apply(this, arguments) / 2,
                    N =
                      k > Ux &&
                      (i ? +i.apply(this, arguments) : Ox(s * s + l * l)),
                    S = Lx(Cx(l - s) / 2, +r.apply(this, arguments)),
                    A = S,
                    T = S
                  if (N > Ux) {
                    var E = lc((N / s) * qx(k)),
                      C = lc((N / l) * qx(k))
                    ;(w -= 2 * E) > Ux
                      ? ((E *= v ? 1 : -1), (m += E), (x -= E))
                      : ((w = 0), (m = x = (h + d) / 2)),
                      (M -= 2 * C) > Ux
                        ? ((C *= v ? 1 : -1), (y += C), (_ -= C))
                        : ((M = 0), (y = _ = (h + d) / 2))
                  }
                  var P = l * Rx(y),
                    R = l * qx(y),
                    z = s * Rx(x),
                    L = s * qx(x)
                  if (S > Ux) {
                    var q = l * Rx(_),
                      O = l * qx(_),
                      U = s * Rx(m),
                      D = s * qx(m)
                    if (p < Dx) {
                      var Y = w > Ux ? bc(P, R, U, D, q, O, z, L) : [z, L],
                        I = P - Y[0],
                        F = R - Y[1],
                        B = q - Y[0],
                        j = O - Y[1],
                        X =
                          1 /
                          qx(
                            sc(
                              (I * B + F * j) /
                                (Ox(I * I + F * F) * Ox(B * B + j * j))
                            ) / 2
                          ),
                        H = Ox(Y[0] * Y[0] + Y[1] * Y[1])
                      ;(A = Lx(S, (s - H) / (X - 1))),
                        (T = Lx(S, (l - H) / (X + 1)))
                    }
                  }
                  M > Ux
                    ? T > Ux
                      ? ((g = yc(U, D, P, R, l, T, v)),
                        (b = yc(q, O, z, L, l, T, v)),
                        c.moveTo(g.cx + g.x01, g.cy + g.y01),
                        T < S
                          ? c.arc(
                              g.cx,
                              g.cy,
                              T,
                              Px(g.y01, g.x01),
                              Px(b.y01, b.x01),
                              !v
                            )
                          : (c.arc(
                              g.cx,
                              g.cy,
                              T,
                              Px(g.y01, g.x01),
                              Px(g.y11, g.x11),
                              !v
                            ),
                            c.arc(
                              0,
                              0,
                              l,
                              Px(g.cy + g.y11, g.cx + g.x11),
                              Px(b.cy + b.y11, b.cx + b.x11),
                              !v
                            ),
                            c.arc(
                              b.cx,
                              b.cy,
                              T,
                              Px(b.y11, b.x11),
                              Px(b.y01, b.x01),
                              !v
                            )))
                      : (c.moveTo(P, R), c.arc(0, 0, l, y, _, !v))
                    : c.moveTo(P, R),
                    s > Ux && w > Ux
                      ? A > Ux
                        ? ((g = yc(z, L, q, O, s, -A, v)),
                          (b = yc(P, R, U, D, s, -A, v)),
                          c.lineTo(g.cx + g.x01, g.cy + g.y01),
                          A < S
                            ? c.arc(
                                g.cx,
                                g.cy,
                                A,
                                Px(g.y01, g.x01),
                                Px(b.y01, b.x01),
                                !v
                              )
                            : (c.arc(
                                g.cx,
                                g.cy,
                                A,
                                Px(g.y01, g.x01),
                                Px(g.y11, g.x11),
                                !v
                              ),
                              c.arc(
                                0,
                                0,
                                s,
                                Px(g.cy + g.y11, g.cx + g.x11),
                                Px(b.cy + b.y11, b.cx + b.x11),
                                v
                              ),
                              c.arc(
                                b.cx,
                                b.cy,
                                A,
                                Px(b.y11, b.x11),
                                Px(b.y01, b.x01),
                                !v
                              )))
                        : c.arc(0, 0, s, x, m, v)
                      : c.lineTo(z, L)
                }
              else c.moveTo(0, 0)
              if ((c.closePath(), t)) return (c = null), t + '' || null
            }
            var n = hc,
              e = dc,
              r = Ex(0),
              i = null,
              a = pc,
              o = vc,
              u = gc,
              c = null
            return (
              (t.centroid = function() {
                var t =
                    (+n.apply(this, arguments) + +e.apply(this, arguments)) / 2,
                  r =
                    (+a.apply(this, arguments) + +o.apply(this, arguments)) /
                      2 -
                    Dx / 2
                return [Rx(r) * t, qx(r) * t]
              }),
              (t.innerRadius = function(e) {
                return arguments.length
                  ? ((n = 'function' == typeof e ? e : Ex(+e)), t)
                  : n
              }),
              (t.outerRadius = function(n) {
                return arguments.length
                  ? ((e = 'function' == typeof n ? n : Ex(+n)), t)
                  : e
              }),
              (t.cornerRadius = function(n) {
                return arguments.length
                  ? ((r = 'function' == typeof n ? n : Ex(+n)), t)
                  : r
              }),
              (t.padRadius = function(n) {
                return arguments.length
                  ? ((i =
                      null == n ? null : 'function' == typeof n ? n : Ex(+n)),
                    t)
                  : i
              }),
              (t.startAngle = function(n) {
                return arguments.length
                  ? ((a = 'function' == typeof n ? n : Ex(+n)), t)
                  : a
              }),
              (t.endAngle = function(n) {
                return arguments.length
                  ? ((o = 'function' == typeof n ? n : Ex(+n)), t)
                  : o
              }),
              (t.padAngle = function(n) {
                return arguments.length
                  ? ((u = 'function' == typeof n ? n : Ex(+n)), t)
                  : u
              }),
              (t.context = function(n) {
                return arguments.length ? ((c = null == n ? null : n), t) : c
              }),
              t
            )
          }
        _c.prototype = {
          areaStart: function() {
            this._line = 0
          },
          areaEnd: function() {
            this._line = NaN
          },
          lineStart: function() {
            this._point = 0
          },
          lineEnd: function() {
            ;(this._line || (0 !== this._line && 1 === this._point)) &&
              this._context.closePath(),
              (this._line = 1 - this._line)
          },
          point: function(t, n) {
            switch (((t = +t), (n = +n), this._point)) {
              case 0:
                ;(this._point = 1),
                  this._line
                    ? this._context.lineTo(t, n)
                    : this._context.moveTo(t, n)
                break
              case 1:
                this._point = 2
              default:
                this._context.lineTo(t, n)
            }
          },
        }
        var Bx = function(t) {
            return new _c(t)
          },
          jx = function() {
            function t(t) {
              var u,
                c,
                f,
                s = t.length,
                l = !1
              for (null == i && (o = a((f = De()))), u = 0; u <= s; ++u)
                !(u < s && r((c = t[u]), u, t)) === l &&
                  ((l = !l) ? o.lineStart() : o.lineEnd()),
                  l && o.point(+n(c, u, t), +e(c, u, t))
              if (f) return (o = null), f + '' || null
            }
            var n = mc,
              e = xc,
              r = Ex(!0),
              i = null,
              a = Bx,
              o = null
            return (
              (t.x = function(e) {
                return arguments.length
                  ? ((n = 'function' == typeof e ? e : Ex(+e)), t)
                  : n
              }),
              (t.y = function(n) {
                return arguments.length
                  ? ((e = 'function' == typeof n ? n : Ex(+n)), t)
                  : e
              }),
              (t.defined = function(n) {
                return arguments.length
                  ? ((r = 'function' == typeof n ? n : Ex(!!n)), t)
                  : r
              }),
              (t.curve = function(n) {
                return arguments.length
                  ? ((a = n), null != i && (o = a(i)), t)
                  : a
              }),
              (t.context = function(n) {
                return arguments.length
                  ? (null == n ? (i = o = null) : (o = a((i = n))), t)
                  : i
              }),
              t
            )
          },
          Xx = function() {
            function t(t) {
              var n,
                s,
                l,
                h,
                d,
                p = t.length,
                v = !1,
                g = new Array(p),
                b = new Array(p)
              for (null == u && (f = c((d = De()))), n = 0; n <= p; ++n) {
                if (!(n < p && o((h = t[n]), n, t)) === v)
                  if ((v = !v)) (s = n), f.areaStart(), f.lineStart()
                  else {
                    for (f.lineEnd(), f.lineStart(), l = n - 1; l >= s; --l)
                      f.point(g[l], b[l])
                    f.lineEnd(), f.areaEnd()
                  }
                v &&
                  ((g[n] = +e(h, n, t)),
                  (b[n] = +i(h, n, t)),
                  f.point(r ? +r(h, n, t) : g[n], a ? +a(h, n, t) : b[n]))
              }
              if (d) return (f = null), d + '' || null
            }
            function n() {
              return jx()
                .defined(o)
                .curve(c)
                .context(u)
            }
            var e = mc,
              r = null,
              i = Ex(0),
              a = xc,
              o = Ex(!0),
              u = null,
              c = Bx,
              f = null
            return (
              (t.x = function(n) {
                return arguments.length
                  ? ((e = 'function' == typeof n ? n : Ex(+n)), (r = null), t)
                  : e
              }),
              (t.x0 = function(n) {
                return arguments.length
                  ? ((e = 'function' == typeof n ? n : Ex(+n)), t)
                  : e
              }),
              (t.x1 = function(n) {
                return arguments.length
                  ? ((r =
                      null == n ? null : 'function' == typeof n ? n : Ex(+n)),
                    t)
                  : r
              }),
              (t.y = function(n) {
                return arguments.length
                  ? ((i = 'function' == typeof n ? n : Ex(+n)), (a = null), t)
                  : i
              }),
              (t.y0 = function(n) {
                return arguments.length
                  ? ((i = 'function' == typeof n ? n : Ex(+n)), t)
                  : i
              }),
              (t.y1 = function(n) {
                return arguments.length
                  ? ((a =
                      null == n ? null : 'function' == typeof n ? n : Ex(+n)),
                    t)
                  : a
              }),
              (t.lineX0 = t.lineY0 = function() {
                return n()
                  .x(e)
                  .y(i)
              }),
              (t.lineY1 = function() {
                return n()
                  .x(e)
                  .y(a)
              }),
              (t.lineX1 = function() {
                return n()
                  .x(r)
                  .y(i)
              }),
              (t.defined = function(n) {
                return arguments.length
                  ? ((o = 'function' == typeof n ? n : Ex(!!n)), t)
                  : o
              }),
              (t.curve = function(n) {
                return arguments.length
                  ? ((c = n), null != u && (f = c(u)), t)
                  : c
              }),
              (t.context = function(n) {
                return arguments.length
                  ? (null == n ? (u = f = null) : (f = c((u = n))), t)
                  : u
              }),
              t
            )
          },
          Hx = function(t, n) {
            return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN
          },
          Gx = function(t) {
            return t
          },
          Vx = function() {
            function t(t) {
              var u,
                c,
                f,
                s,
                l,
                h = t.length,
                d = 0,
                p = new Array(h),
                v = new Array(h),
                g = +i.apply(this, arguments),
                b = Math.min(Ix, Math.max(-Ix, a.apply(this, arguments) - g)),
                y = Math.min(Math.abs(b) / h, o.apply(this, arguments)),
                _ = y * (b < 0 ? -1 : 1)
              for (u = 0; u < h; ++u)
                (l = v[(p[u] = u)] = +n(t[u], u, t)) > 0 && (d += l)
              for (
                null != e
                  ? p.sort(function(t, n) {
                      return e(v[t], v[n])
                    })
                  : null != r &&
                    p.sort(function(n, e) {
                      return r(t[n], t[e])
                    }),
                  u = 0,
                  f = d ? (b - h * _) / d : 0;
                u < h;
                ++u, g = s
              )
                (c = p[u]),
                  (l = v[c]),
                  (s = g + (l > 0 ? l * f : 0) + _),
                  (v[c] = {
                    data: t[c],
                    index: u,
                    value: l,
                    startAngle: g,
                    endAngle: s,
                    padAngle: y,
                  })
              return v
            }
            var n = Gx,
              e = Hx,
              r = null,
              i = Ex(0),
              a = Ex(Ix),
              o = Ex(0)
            return (
              (t.value = function(e) {
                return arguments.length
                  ? ((n = 'function' == typeof e ? e : Ex(+e)), t)
                  : n
              }),
              (t.sortValues = function(n) {
                return arguments.length ? ((e = n), (r = null), t) : e
              }),
              (t.sort = function(n) {
                return arguments.length ? ((r = n), (e = null), t) : r
              }),
              (t.startAngle = function(n) {
                return arguments.length
                  ? ((i = 'function' == typeof n ? n : Ex(+n)), t)
                  : i
              }),
              (t.endAngle = function(n) {
                return arguments.length
                  ? ((a = 'function' == typeof n ? n : Ex(+n)), t)
                  : a
              }),
              (t.padAngle = function(n) {
                return arguments.length
                  ? ((o = 'function' == typeof n ? n : Ex(+n)), t)
                  : o
              }),
              t
            )
          },
          $x = Mc(Bx)
        wc.prototype = {
          areaStart: function() {
            this._curve.areaStart()
          },
          areaEnd: function() {
            this._curve.areaEnd()
          },
          lineStart: function() {
            this._curve.lineStart()
          },
          lineEnd: function() {
            this._curve.lineEnd()
          },
          point: function(t, n) {
            this._curve.point(n * Math.sin(t), n * -Math.cos(t))
          },
        }
        var Wx = function() {
            return kc(jx().curve($x))
          },
          Zx = function() {
            var t = Xx().curve($x),
              n = t.curve,
              e = t.lineX0,
              r = t.lineX1,
              i = t.lineY0,
              a = t.lineY1
            return (
              (t.angle = t.x),
              delete t.x,
              (t.startAngle = t.x0),
              delete t.x0,
              (t.endAngle = t.x1),
              delete t.x1,
              (t.radius = t.y),
              delete t.y,
              (t.innerRadius = t.y0),
              delete t.y0,
              (t.outerRadius = t.y1),
              delete t.y1,
              (t.lineStartAngle = function() {
                return kc(e())
              }),
              delete t.lineX0,
              (t.lineEndAngle = function() {
                return kc(r())
              }),
              delete t.lineX1,
              (t.lineInnerRadius = function() {
                return kc(i())
              }),
              delete t.lineY0,
              (t.lineOuterRadius = function() {
                return kc(a())
              }),
              delete t.lineY1,
              (t.curve = function(t) {
                return arguments.length ? n(Mc(t)) : n()._curve
              }),
              t
            )
          },
          Qx = function(t, n) {
            return [(n = +n) * Math.cos((t -= Math.PI / 2)), n * Math.sin(t)]
          },
          Jx = Array.prototype.slice,
          Kx = {
            draw: function(t, n) {
              var e = Math.sqrt(n / Dx)
              t.moveTo(e, 0), t.arc(0, 0, e, 0, Ix)
            },
          },
          tw = {
            draw: function(t, n) {
              var e = Math.sqrt(n / 5) / 2
              t.moveTo(-3 * e, -e),
                t.lineTo(-e, -e),
                t.lineTo(-e, -3 * e),
                t.lineTo(e, -3 * e),
                t.lineTo(e, -e),
                t.lineTo(3 * e, -e),
                t.lineTo(3 * e, e),
                t.lineTo(e, e),
                t.lineTo(e, 3 * e),
                t.lineTo(-e, 3 * e),
                t.lineTo(-e, e),
                t.lineTo(-3 * e, e),
                t.closePath()
            },
          },
          nw = Math.sqrt(1 / 3),
          ew = 2 * nw,
          rw = {
            draw: function(t, n) {
              var e = Math.sqrt(n / ew),
                r = e * nw
              t.moveTo(0, -e),
                t.lineTo(r, 0),
                t.lineTo(0, e),
                t.lineTo(-r, 0),
                t.closePath()
            },
          },
          iw = Math.sin(Dx / 10) / Math.sin((7 * Dx) / 10),
          aw = Math.sin(Ix / 10) * iw,
          ow = -Math.cos(Ix / 10) * iw,
          uw = {
            draw: function(t, n) {
              var e = Math.sqrt(0.8908130915292852 * n),
                r = aw * e,
                i = ow * e
              t.moveTo(0, -e), t.lineTo(r, i)
              for (var a = 1; a < 5; ++a) {
                var o = (Ix * a) / 5,
                  u = Math.cos(o),
                  c = Math.sin(o)
                t.lineTo(c * e, -u * e), t.lineTo(u * r - c * i, c * r + u * i)
              }
              t.closePath()
            },
          },
          cw = {
            draw: function(t, n) {
              var e = Math.sqrt(n),
                r = -e / 2
              t.rect(r, r, e, e)
            },
          },
          fw = Math.sqrt(3),
          sw = {
            draw: function(t, n) {
              var e = -Math.sqrt(n / (3 * fw))
              t.moveTo(0, 2 * e),
                t.lineTo(-fw * e, -e),
                t.lineTo(fw * e, -e),
                t.closePath()
            },
          },
          lw = -0.5,
          hw = Math.sqrt(3) / 2,
          dw = 1 / Math.sqrt(12),
          pw = 3 * (dw / 2 + 1),
          vw = {
            draw: function(t, n) {
              var e = Math.sqrt(n / pw),
                r = e / 2,
                i = e * dw,
                a = r,
                o = e * dw + e,
                u = -a,
                c = o
              t.moveTo(r, i),
                t.lineTo(a, o),
                t.lineTo(u, c),
                t.lineTo(lw * r - hw * i, hw * r + lw * i),
                t.lineTo(lw * a - hw * o, hw * a + lw * o),
                t.lineTo(lw * u - hw * c, hw * u + lw * c),
                t.lineTo(lw * r + hw * i, lw * i - hw * r),
                t.lineTo(lw * a + hw * o, lw * o - hw * a),
                t.lineTo(lw * u + hw * c, lw * c - hw * u),
                t.closePath()
            },
          },
          gw = [Kx, tw, rw, cw, uw, sw, vw],
          bw = function() {
            function t() {
              var t
              if (
                (r || (r = t = De()),
                n.apply(this, arguments).draw(r, +e.apply(this, arguments)),
                t)
              )
                return (r = null), t + '' || null
            }
            var n = Ex(Kx),
              e = Ex(64),
              r = null
            return (
              (t.type = function(e) {
                return arguments.length
                  ? ((n = 'function' == typeof e ? e : Ex(e)), t)
                  : n
              }),
              (t.size = function(n) {
                return arguments.length
                  ? ((e = 'function' == typeof n ? n : Ex(+n)), t)
                  : e
              }),
              (t.context = function(n) {
                return arguments.length ? ((r = null == n ? null : n), t) : r
              }),
              t
            )
          },
          yw = function() {}
        qc.prototype = {
          areaStart: function() {
            this._line = 0
          },
          areaEnd: function() {
            this._line = NaN
          },
          lineStart: function() {
            ;(this._x0 = this._x1 = this._y0 = this._y1 = NaN),
              (this._point = 0)
          },
          lineEnd: function() {
            switch (this._point) {
              case 3:
                Lc(this, this._x1, this._y1)
              case 2:
                this._context.lineTo(this._x1, this._y1)
            }
            ;(this._line || (0 !== this._line && 1 === this._point)) &&
              this._context.closePath(),
              (this._line = 1 - this._line)
          },
          point: function(t, n) {
            switch (((t = +t), (n = +n), this._point)) {
              case 0:
                ;(this._point = 1),
                  this._line
                    ? this._context.lineTo(t, n)
                    : this._context.moveTo(t, n)
                break
              case 1:
                this._point = 2
                break
              case 2:
                ;(this._point = 3),
                  this._context.lineTo(
                    (5 * this._x0 + this._x1) / 6,
                    (5 * this._y0 + this._y1) / 6
                  )
              default:
                Lc(this, t, n)
            }
            ;(this._x0 = this._x1),
              (this._x1 = t),
              (this._y0 = this._y1),
              (this._y1 = n)
          },
        }
        var _w = function(t) {
          return new qc(t)
        }
        Oc.prototype = {
          areaStart: yw,
          areaEnd: yw,
          lineStart: function() {
            ;(this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN),
              (this._point = 0)
          },
          lineEnd: function() {
            switch (this._point) {
              case 1:
                this._context.moveTo(this._x2, this._y2),
                  this._context.closePath()
                break
              case 2:
                this._context.moveTo(
                  (this._x2 + 2 * this._x3) / 3,
                  (this._y2 + 2 * this._y3) / 3
                ),
                  this._context.lineTo(
                    (this._x3 + 2 * this._x2) / 3,
                    (this._y3 + 2 * this._y2) / 3
                  ),
                  this._context.closePath()
                break
              case 3:
                this.point(this._x2, this._y2),
                  this.point(this._x3, this._y3),
                  this.point(this._x4, this._y4)
            }
          },
          point: function(t, n) {
            switch (((t = +t), (n = +n), this._point)) {
              case 0:
                ;(this._point = 1), (this._x2 = t), (this._y2 = n)
                break
              case 1:
                ;(this._point = 2), (this._x3 = t), (this._y3 = n)
                break
              case 2:
                ;(this._point = 3),
                  (this._x4 = t),
                  (this._y4 = n),
                  this._context.moveTo(
                    (this._x0 + 4 * this._x1 + t) / 6,
                    (this._y0 + 4 * this._y1 + n) / 6
                  )
                break
              default:
                Lc(this, t, n)
            }
            ;(this._x0 = this._x1),
              (this._x1 = t),
              (this._y0 = this._y1),
              (this._y1 = n)
          },
        }
        var mw = function(t) {
          return new Oc(t)
        }
        Uc.prototype = {
          areaStart: function() {
            this._line = 0
          },
          areaEnd: function() {
            this._line = NaN
          },
          lineStart: function() {
            ;(this._x0 = this._x1 = this._y0 = this._y1 = NaN),
              (this._point = 0)
          },
          lineEnd: function() {
            ;(this._line || (0 !== this._line && 3 === this._point)) &&
              this._context.closePath(),
              (this._line = 1 - this._line)
          },
          point: function(t, n) {
            switch (((t = +t), (n = +n), this._point)) {
              case 0:
                this._point = 1
                break
              case 1:
                this._point = 2
                break
              case 2:
                this._point = 3
                var e = (this._x0 + 4 * this._x1 + t) / 6,
                  r = (this._y0 + 4 * this._y1 + n) / 6
                this._line
                  ? this._context.lineTo(e, r)
                  : this._context.moveTo(e, r)
                break
              case 3:
                this._point = 4
              default:
                Lc(this, t, n)
            }
            ;(this._x0 = this._x1),
              (this._x1 = t),
              (this._y0 = this._y1),
              (this._y1 = n)
          },
        }
        var xw = function(t) {
          return new Uc(t)
        }
        Dc.prototype = {
          lineStart: function() {
            ;(this._x = []), (this._y = []), this._basis.lineStart()
          },
          lineEnd: function() {
            var t = this._x,
              n = this._y,
              e = t.length - 1
            if (e > 0)
              for (
                var r, i = t[0], a = n[0], o = t[e] - i, u = n[e] - a, c = -1;
                ++c <= e;

              )
                (r = c / e),
                  this._basis.point(
                    this._beta * t[c] + (1 - this._beta) * (i + r * o),
                    this._beta * n[c] + (1 - this._beta) * (a + r * u)
                  )
            ;(this._x = this._y = null), this._basis.lineEnd()
          },
          point: function(t, n) {
            this._x.push(+t), this._y.push(+n)
          },
        }
        var ww = (function t(n) {
          function e(t) {
            return 1 === n ? new qc(t) : new Dc(t, n)
          }
          return (
            (e.beta = function(n) {
              return t(+n)
            }),
            e
          )
        })(0.85)
        Ic.prototype = {
          areaStart: function() {
            this._line = 0
          },
          areaEnd: function() {
            this._line = NaN
          },
          lineStart: function() {
            ;(this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
              (this._point = 0)
          },
          lineEnd: function() {
            switch (this._point) {
              case 2:
                this._context.lineTo(this._x2, this._y2)
                break
              case 3:
                Yc(this, this._x1, this._y1)
            }
            ;(this._line || (0 !== this._line && 1 === this._point)) &&
              this._context.closePath(),
              (this._line = 1 - this._line)
          },
          point: function(t, n) {
            switch (((t = +t), (n = +n), this._point)) {
              case 0:
                ;(this._point = 1),
                  this._line
                    ? this._context.lineTo(t, n)
                    : this._context.moveTo(t, n)
                break
              case 1:
                ;(this._point = 2), (this._x1 = t), (this._y1 = n)
                break
              case 2:
                this._point = 3
              default:
                Yc(this, t, n)
            }
            ;(this._x0 = this._x1),
              (this._x1 = this._x2),
              (this._x2 = t),
              (this._y0 = this._y1),
              (this._y1 = this._y2),
              (this._y2 = n)
          },
        }
        var Mw = (function t(n) {
          function e(t) {
            return new Ic(t, n)
          }
          return (
            (e.tension = function(n) {
              return t(+n)
            }),
            e
          )
        })(0)
        Fc.prototype = {
          areaStart: yw,
          areaEnd: yw,
          lineStart: function() {
            ;(this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN),
              (this._point = 0)
          },
          lineEnd: function() {
            switch (this._point) {
              case 1:
                this._context.moveTo(this._x3, this._y3),
                  this._context.closePath()
                break
              case 2:
                this._context.lineTo(this._x3, this._y3),
                  this._context.closePath()
                break
              case 3:
                this.point(this._x3, this._y3),
                  this.point(this._x4, this._y4),
                  this.point(this._x5, this._y5)
            }
          },
          point: function(t, n) {
            switch (((t = +t), (n = +n), this._point)) {
              case 0:
                ;(this._point = 1), (this._x3 = t), (this._y3 = n)
                break
              case 1:
                ;(this._point = 2),
                  this._context.moveTo((this._x4 = t), (this._y4 = n))
                break
              case 2:
                ;(this._point = 3), (this._x5 = t), (this._y5 = n)
                break
              default:
                Yc(this, t, n)
            }
            ;(this._x0 = this._x1),
              (this._x1 = this._x2),
              (this._x2 = t),
              (this._y0 = this._y1),
              (this._y1 = this._y2),
              (this._y2 = n)
          },
        }
        var kw = (function t(n) {
          function e(t) {
            return new Fc(t, n)
          }
          return (
            (e.tension = function(n) {
              return t(+n)
            }),
            e
          )
        })(0)
        Bc.prototype = {
          areaStart: function() {
            this._line = 0
          },
          areaEnd: function() {
            this._line = NaN
          },
          lineStart: function() {
            ;(this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
              (this._point = 0)
          },
          lineEnd: function() {
            ;(this._line || (0 !== this._line && 3 === this._point)) &&
              this._context.closePath(),
              (this._line = 1 - this._line)
          },
          point: function(t, n) {
            switch (((t = +t), (n = +n), this._point)) {
              case 0:
                this._point = 1
                break
              case 1:
                this._point = 2
                break
              case 2:
                ;(this._point = 3),
                  this._line
                    ? this._context.lineTo(this._x2, this._y2)
                    : this._context.moveTo(this._x2, this._y2)
                break
              case 3:
                this._point = 4
              default:
                Yc(this, t, n)
            }
            ;(this._x0 = this._x1),
              (this._x1 = this._x2),
              (this._x2 = t),
              (this._y0 = this._y1),
              (this._y1 = this._y2),
              (this._y2 = n)
          },
        }
        var Nw = (function t(n) {
          function e(t) {
            return new Bc(t, n)
          }
          return (
            (e.tension = function(n) {
              return t(+n)
            }),
            e
          )
        })(0)
        Xc.prototype = {
          areaStart: function() {
            this._line = 0
          },
          areaEnd: function() {
            this._line = NaN
          },
          lineStart: function() {
            ;(this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
              (this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0)
          },
          lineEnd: function() {
            switch (this._point) {
              case 2:
                this._context.lineTo(this._x2, this._y2)
                break
              case 3:
                this.point(this._x2, this._y2)
            }
            ;(this._line || (0 !== this._line && 1 === this._point)) &&
              this._context.closePath(),
              (this._line = 1 - this._line)
          },
          point: function(t, n) {
            if (((t = +t), (n = +n), this._point)) {
              var e = this._x2 - t,
                r = this._y2 - n
              this._l23_a = Math.sqrt(
                (this._l23_2a = Math.pow(e * e + r * r, this._alpha))
              )
            }
            switch (this._point) {
              case 0:
                ;(this._point = 1),
                  this._line
                    ? this._context.lineTo(t, n)
                    : this._context.moveTo(t, n)
                break
              case 1:
                this._point = 2
                break
              case 2:
                this._point = 3
              default:
                jc(this, t, n)
            }
            ;(this._l01_a = this._l12_a),
              (this._l12_a = this._l23_a),
              (this._l01_2a = this._l12_2a),
              (this._l12_2a = this._l23_2a),
              (this._x0 = this._x1),
              (this._x1 = this._x2),
              (this._x2 = t),
              (this._y0 = this._y1),
              (this._y1 = this._y2),
              (this._y2 = n)
          },
        }
        var Sw = (function t(n) {
          function e(t) {
            return n ? new Xc(t, n) : new Ic(t, 0)
          }
          return (
            (e.alpha = function(n) {
              return t(+n)
            }),
            e
          )
        })(0.5)
        Hc.prototype = {
          areaStart: yw,
          areaEnd: yw,
          lineStart: function() {
            ;(this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN),
              (this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0)
          },
          lineEnd: function() {
            switch (this._point) {
              case 1:
                this._context.moveTo(this._x3, this._y3),
                  this._context.closePath()
                break
              case 2:
                this._context.lineTo(this._x3, this._y3),
                  this._context.closePath()
                break
              case 3:
                this.point(this._x3, this._y3),
                  this.point(this._x4, this._y4),
                  this.point(this._x5, this._y5)
            }
          },
          point: function(t, n) {
            if (((t = +t), (n = +n), this._point)) {
              var e = this._x2 - t,
                r = this._y2 - n
              this._l23_a = Math.sqrt(
                (this._l23_2a = Math.pow(e * e + r * r, this._alpha))
              )
            }
            switch (this._point) {
              case 0:
                ;(this._point = 1), (this._x3 = t), (this._y3 = n)
                break
              case 1:
                ;(this._point = 2),
                  this._context.moveTo((this._x4 = t), (this._y4 = n))
                break
              case 2:
                ;(this._point = 3), (this._x5 = t), (this._y5 = n)
                break
              default:
                jc(this, t, n)
            }
            ;(this._l01_a = this._l12_a),
              (this._l12_a = this._l23_a),
              (this._l01_2a = this._l12_2a),
              (this._l12_2a = this._l23_2a),
              (this._x0 = this._x1),
              (this._x1 = this._x2),
              (this._x2 = t),
              (this._y0 = this._y1),
              (this._y1 = this._y2),
              (this._y2 = n)
          },
        }
        var Aw = (function t(n) {
          function e(t) {
            return n ? new Hc(t, n) : new Fc(t, 0)
          }
          return (
            (e.alpha = function(n) {
              return t(+n)
            }),
            e
          )
        })(0.5)
        Gc.prototype = {
          areaStart: function() {
            this._line = 0
          },
          areaEnd: function() {
            this._line = NaN
          },
          lineStart: function() {
            ;(this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
              (this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0)
          },
          lineEnd: function() {
            ;(this._line || (0 !== this._line && 3 === this._point)) &&
              this._context.closePath(),
              (this._line = 1 - this._line)
          },
          point: function(t, n) {
            if (((t = +t), (n = +n), this._point)) {
              var e = this._x2 - t,
                r = this._y2 - n
              this._l23_a = Math.sqrt(
                (this._l23_2a = Math.pow(e * e + r * r, this._alpha))
              )
            }
            switch (this._point) {
              case 0:
                this._point = 1
                break
              case 1:
                this._point = 2
                break
              case 2:
                ;(this._point = 3),
                  this._line
                    ? this._context.lineTo(this._x2, this._y2)
                    : this._context.moveTo(this._x2, this._y2)
                break
              case 3:
                this._point = 4
              default:
                jc(this, t, n)
            }
            ;(this._l01_a = this._l12_a),
              (this._l12_a = this._l23_a),
              (this._l01_2a = this._l12_2a),
              (this._l12_2a = this._l23_2a),
              (this._x0 = this._x1),
              (this._x1 = this._x2),
              (this._x2 = t),
              (this._y0 = this._y1),
              (this._y1 = this._y2),
              (this._y2 = n)
          },
        }
        var Tw = (function t(n) {
          function e(t) {
            return n ? new Gc(t, n) : new Bc(t, 0)
          }
          return (
            (e.alpha = function(n) {
              return t(+n)
            }),
            e
          )
        })(0.5)
        Vc.prototype = {
          areaStart: yw,
          areaEnd: yw,
          lineStart: function() {
            this._point = 0
          },
          lineEnd: function() {
            this._point && this._context.closePath()
          },
          point: function(t, n) {
            ;(t = +t),
              (n = +n),
              this._point
                ? this._context.lineTo(t, n)
                : ((this._point = 1), this._context.moveTo(t, n))
          },
        }
        var Ew = function(t) {
          return new Vc(t)
        }
        ;(Jc.prototype = {
          areaStart: function() {
            this._line = 0
          },
          areaEnd: function() {
            this._line = NaN
          },
          lineStart: function() {
            ;(this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
              (this._point = 0)
          },
          lineEnd: function() {
            switch (this._point) {
              case 2:
                this._context.lineTo(this._x1, this._y1)
                break
              case 3:
                Qc(this, this._t0, Zc(this, this._t0))
            }
            ;(this._line || (0 !== this._line && 1 === this._point)) &&
              this._context.closePath(),
              (this._line = 1 - this._line)
          },
          point: function(t, n) {
            var e = NaN
            if (((t = +t), (n = +n), t !== this._x1 || n !== this._y1)) {
              switch (this._point) {
                case 0:
                  ;(this._point = 1),
                    this._line
                      ? this._context.lineTo(t, n)
                      : this._context.moveTo(t, n)
                  break
                case 1:
                  this._point = 2
                  break
                case 2:
                  ;(this._point = 3),
                    Qc(this, Zc(this, (e = Wc(this, t, n))), e)
                  break
                default:
                  Qc(this, this._t0, (e = Wc(this, t, n)))
              }
              ;(this._x0 = this._x1),
                (this._x1 = t),
                (this._y0 = this._y1),
                (this._y1 = n),
                (this._t0 = e)
            }
          },
        }),
          ((Kc.prototype = Object.create(Jc.prototype)).point = function(t, n) {
            Jc.prototype.point.call(this, n, t)
          }),
          (tf.prototype = {
            moveTo: function(t, n) {
              this._context.moveTo(n, t)
            },
            closePath: function() {
              this._context.closePath()
            },
            lineTo: function(t, n) {
              this._context.lineTo(n, t)
            },
            bezierCurveTo: function(t, n, e, r, i, a) {
              this._context.bezierCurveTo(n, t, r, e, a, i)
            },
          }),
          (rf.prototype = {
            areaStart: function() {
              this._line = 0
            },
            areaEnd: function() {
              this._line = NaN
            },
            lineStart: function() {
              ;(this._x = []), (this._y = [])
            },
            lineEnd: function() {
              var t = this._x,
                n = this._y,
                e = t.length
              if (e)
                if (
                  (this._line
                    ? this._context.lineTo(t[0], n[0])
                    : this._context.moveTo(t[0], n[0]),
                  2 === e)
                )
                  this._context.lineTo(t[1], n[1])
                else
                  for (var r = af(t), i = af(n), a = 0, o = 1; o < e; ++a, ++o)
                    this._context.bezierCurveTo(
                      r[0][a],
                      i[0][a],
                      r[1][a],
                      i[1][a],
                      t[o],
                      n[o]
                    )
              ;(this._line || (0 !== this._line && 1 === e)) &&
                this._context.closePath(),
                (this._line = 1 - this._line),
                (this._x = this._y = null)
            },
            point: function(t, n) {
              this._x.push(+t), this._y.push(+n)
            },
          })
        var Cw = function(t) {
          return new rf(t)
        }
        of.prototype = {
          areaStart: function() {
            this._line = 0
          },
          areaEnd: function() {
            this._line = NaN
          },
          lineStart: function() {
            ;(this._x = this._y = NaN), (this._point = 0)
          },
          lineEnd: function() {
            0 < this._t &&
              this._t < 1 &&
              2 === this._point &&
              this._context.lineTo(this._x, this._y),
              (this._line || (0 !== this._line && 1 === this._point)) &&
                this._context.closePath(),
              this._line >= 0 &&
                ((this._t = 1 - this._t), (this._line = 1 - this._line))
          },
          point: function(t, n) {
            switch (((t = +t), (n = +n), this._point)) {
              case 0:
                ;(this._point = 1),
                  this._line
                    ? this._context.lineTo(t, n)
                    : this._context.moveTo(t, n)
                break
              case 1:
                this._point = 2
              default:
                if (this._t <= 0)
                  this._context.lineTo(this._x, n), this._context.lineTo(t, n)
                else {
                  var e = this._x * (1 - this._t) + t * this._t
                  this._context.lineTo(e, this._y), this._context.lineTo(e, n)
                }
            }
            ;(this._x = t), (this._y = n)
          },
        }
        var Pw = function(t) {
            return new of(t, 0.5)
          },
          Rw = function(t, n) {
            if ((i = t.length) > 1)
              for (var e, r, i, a = 1, o = t[n[0]], u = o.length; a < i; ++a)
                for (r = o, o = t[n[a]], e = 0; e < u; ++e)
                  o[e][1] += o[e][0] = isNaN(r[e][1]) ? r[e][0] : r[e][1]
          },
          zw = function(t) {
            for (var n = t.length, e = new Array(n); --n >= 0; ) e[n] = n
            return e
          },
          Lw = function() {
            function t(t) {
              var a,
                o,
                u = n.apply(this, arguments),
                c = t.length,
                f = u.length,
                s = new Array(f)
              for (a = 0; a < f; ++a) {
                for (
                  var l, h = u[a], d = (s[a] = new Array(c)), p = 0;
                  p < c;
                  ++p
                )
                  (d[p] = l = [0, +i(t[p], h, p, t)]), (l.data = t[p])
                d.key = h
              }
              for (a = 0, o = e(s); a < f; ++a) s[o[a]].index = a
              return r(s, o), s
            }
            var n = Ex([]),
              e = zw,
              r = Rw,
              i = ff
            return (
              (t.keys = function(e) {
                return arguments.length
                  ? ((n = 'function' == typeof e ? e : Ex(Jx.call(e))), t)
                  : n
              }),
              (t.value = function(n) {
                return arguments.length
                  ? ((i = 'function' == typeof n ? n : Ex(+n)), t)
                  : i
              }),
              (t.order = function(n) {
                return arguments.length
                  ? ((e =
                      null == n
                        ? zw
                        : 'function' == typeof n
                        ? n
                        : Ex(Jx.call(n))),
                    t)
                  : e
              }),
              (t.offset = function(n) {
                return arguments.length ? ((r = null == n ? Rw : n), t) : r
              }),
              t
            )
          },
          qw = function(t, n) {
            if ((r = t.length) > 0) {
              for (var e, r, i, a = 0, o = t[0].length; a < o; ++a) {
                for (i = e = 0; e < r; ++e) i += t[e][a][1] || 0
                if (i) for (e = 0; e < r; ++e) t[e][a][1] /= i
              }
              Rw(t, n)
            }
          },
          Ow = function(t, n) {
            if ((u = t.length) > 1)
              for (var e, r, i, a, o, u, c = 0, f = t[n[0]].length; c < f; ++c)
                for (a = o = 0, e = 0; e < u; ++e)
                  (i = (r = t[n[e]][c])[1] - r[0]) >= 0
                    ? ((r[0] = a), (r[1] = a += i))
                    : i < 0
                    ? ((r[1] = o), (r[0] = o += i))
                    : (r[0] = a)
          },
          Uw = function(t, n) {
            if ((e = t.length) > 0) {
              for (var e, r = 0, i = t[n[0]], a = i.length; r < a; ++r) {
                for (var o = 0, u = 0; o < e; ++o) u += t[o][r][1] || 0
                i[r][1] += i[r][0] = -u / 2
              }
              Rw(t, n)
            }
          },
          Dw = function(t, n) {
            if ((i = t.length) > 0 && (r = (e = t[n[0]]).length) > 0) {
              for (var e, r, i, a = 0, o = 1; o < r; ++o) {
                for (var u = 0, c = 0, f = 0; u < i; ++u) {
                  for (
                    var s = t[n[u]],
                      l = s[o][1] || 0,
                      h = s[o - 1][1] || 0,
                      d = (l - h) / 2,
                      p = 0;
                    p < u;
                    ++p
                  ) {
                    var v = t[n[p]]
                    d += (v[o][1] || 0) - (v[o - 1][1] || 0)
                  }
                  ;(c += l), (f += d * l)
                }
                ;(e[o - 1][1] += e[o - 1][0] = a), c && (a -= f / c)
              }
              ;(e[o - 1][1] += e[o - 1][0] = a), Rw(t, n)
            }
          },
          Yw = function(t) {
            var n = t.map(sf)
            return zw(t).sort(function(t, e) {
              return n[t] - n[e]
            })
          },
          Iw = function(t) {
            return Yw(t).reverse()
          },
          Fw = function(t) {
            var n,
              e,
              r = t.length,
              i = t.map(sf),
              a = zw(t).sort(function(t, n) {
                return i[n] - i[t]
              }),
              o = 0,
              u = 0,
              c = [],
              f = []
            for (n = 0; n < r; ++n)
              (e = a[n]),
                o < u ? ((o += i[e]), c.push(e)) : ((u += i[e]), f.push(e))
            return f.reverse().concat(c)
          },
          Bw = function(t) {
            return zw(t).reverse()
          },
          jw = function(t) {
            return function() {
              return t
            }
          }
        df.prototype = {
          constructor: df,
          insert: function(t, n) {
            var e, r, i
            if (t) {
              if (
                ((n.P = t), (n.N = t.N), t.N && (t.N.P = n), (t.N = n), t.R)
              ) {
                for (t = t.R; t.L; ) t = t.L
                t.L = n
              } else t.R = n
              e = t
            } else
              this._
                ? ((t = bf(this._)),
                  (n.P = null),
                  (n.N = t),
                  (t.P = t.L = n),
                  (e = t))
                : ((n.P = n.N = null), (this._ = n), (e = null))
            for (n.L = n.R = null, n.U = e, n.C = !0, t = n; e && e.C; )
              (r = e.U),
                e === r.L
                  ? ((i = r.R),
                    i && i.C
                      ? ((e.C = i.C = !1), (r.C = !0), (t = r))
                      : (t === e.R && (vf(this, e), (t = e), (e = t.U)),
                        (e.C = !1),
                        (r.C = !0),
                        gf(this, r)))
                  : ((i = r.L),
                    i && i.C
                      ? ((e.C = i.C = !1), (r.C = !0), (t = r))
                      : (t === e.L && (gf(this, e), (t = e), (e = t.U)),
                        (e.C = !1),
                        (r.C = !0),
                        vf(this, r))),
                (e = t.U)
            this._.C = !1
          },
          remove: function(t) {
            t.N && (t.N.P = t.P), t.P && (t.P.N = t.N), (t.N = t.P = null)
            var n,
              e,
              r,
              i = t.U,
              a = t.L,
              o = t.R
            if (
              ((e = a ? (o ? bf(o) : a) : o),
              i ? (i.L === t ? (i.L = e) : (i.R = e)) : (this._ = e),
              a && o
                ? ((r = e.C),
                  (e.C = t.C),
                  (e.L = a),
                  (a.U = e),
                  e !== o
                    ? ((i = e.U),
                      (e.U = t.U),
                      (t = e.R),
                      (i.L = t),
                      (e.R = o),
                      (o.U = e))
                    : ((e.U = i), (i = e), (t = e.R)))
                : ((r = t.C), (t = e)),
              t && (t.U = i),
              !r)
            ) {
              if (t && t.C) return void (t.C = !1)
              do {
                if (t === this._) break
                if (t === i.L) {
                  if (
                    ((n = i.R),
                    n.C && ((n.C = !1), (i.C = !0), vf(this, i), (n = i.R)),
                    (n.L && n.L.C) || (n.R && n.R.C))
                  ) {
                    ;(n.R && n.R.C) ||
                      ((n.L.C = !1), (n.C = !0), gf(this, n), (n = i.R)),
                      (n.C = i.C),
                      (i.C = n.R.C = !1),
                      vf(this, i),
                      (t = this._)
                    break
                  }
                } else if (
                  ((n = i.L),
                  n.C && ((n.C = !1), (i.C = !0), gf(this, i), (n = i.L)),
                  (n.L && n.L.C) || (n.R && n.R.C))
                ) {
                  ;(n.L && n.L.C) ||
                    ((n.R.C = !1), (n.C = !0), vf(this, n), (n = i.L)),
                    (n.C = i.C),
                    (i.C = n.L.C = !1),
                    gf(this, i),
                    (t = this._)
                  break
                }
                ;(n.C = !0), (t = i), (i = i.U)
              } while (!t.C)
              t && (t.C = !1)
            }
          },
        }
        var Xw,
          Hw,
          Gw,
          Vw,
          $w,
          Ww = [],
          Zw = [],
          Qw = 1e-6,
          Jw = 1e-12
        Bf.prototype = {
          constructor: Bf,
          polygons: function() {
            var t = this.edges
            return this.cells.map(function(n) {
              var e = n.halfedges.map(function(e) {
                return Sf(n, t[e])
              })
              return (e.data = n.site.data), e
            })
          },
          triangles: function() {
            var t = [],
              n = this.edges
            return (
              this.cells.forEach(function(e, r) {
                if ((a = (i = e.halfedges).length))
                  for (
                    var i,
                      a,
                      o,
                      u = e.site,
                      c = -1,
                      f = n[i[a - 1]],
                      s = f.left === u ? f.right : f.left;
                    ++c < a;

                  )
                    (o = s),
                      (f = n[i[c]]),
                      (s = f.left === u ? f.right : f.left),
                      o &&
                        s &&
                        r < o.index &&
                        r < s.index &&
                        If(u, o, s) < 0 &&
                        t.push([u.data, o.data, s.data])
              }),
              t
            )
          },
          links: function() {
            return this.edges
              .filter(function(t) {
                return t.right
              })
              .map(function(t) {
                return { source: t.left.data, target: t.right.data }
              })
          },
          find: function(t, n, e) {
            for (
              var r, i, a = this, o = a._found || 0, u = a.cells.length;
              !(i = a.cells[o]);

            )
              if (++o >= u) return null
            var c = t - i.site[0],
              f = n - i.site[1],
              s = c * c + f * f
            do {
              ;(i = a.cells[(r = o)]),
                (o = null),
                i.halfedges.forEach(function(e) {
                  var r = a.edges[e],
                    u = r.left
                  if ((u !== i.site && u) || (u = r.right)) {
                    var c = t - u[0],
                      f = n - u[1],
                      l = c * c + f * f
                    l < s && ((s = l), (o = u.index))
                  }
                })
            } while (null !== o)
            return (a._found = r), null == e || s <= e * e ? i.site : null
          },
        }
        var Kw = function() {
            function t(t) {
              return new Bf(
                t.map(function(r, i) {
                  var a = [
                    Math.round(n(r, i, t) / Qw) * Qw,
                    Math.round(e(r, i, t) / Qw) * Qw,
                  ]
                  return (a.index = i), (a.data = r), a
                }),
                r
              )
            }
            var n = lf,
              e = hf,
              r = null
            return (
              (t.polygons = function(n) {
                return t(n).polygons()
              }),
              (t.links = function(n) {
                return t(n).links()
              }),
              (t.triangles = function(n) {
                return t(n).triangles()
              }),
              (t.x = function(e) {
                return arguments.length
                  ? ((n = 'function' == typeof e ? e : jw(+e)), t)
                  : n
              }),
              (t.y = function(n) {
                return arguments.length
                  ? ((e = 'function' == typeof n ? n : jw(+n)), t)
                  : e
              }),
              (t.extent = function(n) {
                return arguments.length
                  ? ((r =
                      null == n
                        ? null
                        : [[+n[0][0], +n[0][1]], [+n[1][0], +n[1][1]]]),
                    t)
                  : r && [[r[0][0], r[0][1]], [r[1][0], r[1][1]]]
              }),
              (t.size = function(n) {
                return arguments.length
                  ? ((r = null == n ? null : [[0, 0], [+n[0], +n[1]]]), t)
                  : r && [r[1][0] - r[0][0], r[1][1] - r[0][1]]
              }),
              t
            )
          },
          tM = function(t) {
            return function() {
              return t
            }
          }
        Xf.prototype = {
          constructor: Xf,
          scale: function(t) {
            return 1 === t ? this : new Xf(this.k * t, this.x, this.y)
          },
          translate: function(t, n) {
            return (0 === t) & (0 === n)
              ? this
              : new Xf(this.k, this.x + this.k * t, this.y + this.k * n)
          },
          apply: function(t) {
            return [t[0] * this.k + this.x, t[1] * this.k + this.y]
          },
          applyX: function(t) {
            return t * this.k + this.x
          },
          applyY: function(t) {
            return t * this.k + this.y
          },
          invert: function(t) {
            return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k]
          },
          invertX: function(t) {
            return (t - this.x) / this.k
          },
          invertY: function(t) {
            return (t - this.y) / this.k
          },
          rescaleX: function(t) {
            return t.copy().domain(
              t
                .range()
                .map(this.invertX, this)
                .map(t.invert, t)
            )
          },
          rescaleY: function(t) {
            return t.copy().domain(
              t
                .range()
                .map(this.invertY, this)
                .map(t.invert, t)
            )
          },
          toString: function() {
            return (
              'translate(' + this.x + ',' + this.y + ') scale(' + this.k + ')'
            )
          },
        }
        var nM = new Xf(1, 0, 0)
        Hf.prototype = Xf.prototype
        var eM = function() {
            t.event.preventDefault(), t.event.stopImmediatePropagation()
          },
          rM = function() {
            function n(t) {
              t.property('__zoom', Wf)
                .on('wheel.zoom', f)
                .on('mousedown.zoom', s)
                .on('dblclick.zoom', l)
                .filter(Qf)
                .on('touchstart.zoom', h)
                .on('touchmove.zoom', d)
                .on('touchend.zoom touchcancel.zoom', p)
                .style('touch-action', 'none')
                .style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)')
            }
            function e(t, n) {
              return (
                (n = Math.max(x, Math.min(w, n))),
                n === t.k ? t : new Xf(n, t.x, t.y)
              )
            }
            function r(t, n, e) {
              var r = n[0] - e[0] * t.k,
                i = n[1] - e[1] * t.k
              return r === t.x && i === t.y ? t : new Xf(t.k, r, i)
            }
            function i(t, n) {
              var e = t.invertX(n[0][0]) - M,
                r = t.invertX(n[1][0]) - k,
                i = t.invertY(n[0][1]) - N,
                a = t.invertY(n[1][1]) - S
              return t.translate(
                r > e ? (e + r) / 2 : Math.min(0, e) || Math.max(0, r),
                a > i ? (i + a) / 2 : Math.min(0, i) || Math.max(0, a)
              )
            }
            function a(t) {
              return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2]
            }
            function o(t, n, e) {
              t.on('start.zoom', function() {
                u(this, arguments).start()
              })
                .on('interrupt.zoom end.zoom', function() {
                  u(this, arguments).end()
                })
                .tween('zoom', function() {
                  var t = this,
                    r = arguments,
                    i = u(t, r),
                    o = _.apply(t, r),
                    c = e || a(o),
                    f = Math.max(o[1][0] - o[0][0], o[1][1] - o[0][1]),
                    s = t.__zoom,
                    l = 'function' == typeof n ? n.apply(t, r) : n,
                    h = T(
                      s.invert(c).concat(f / s.k),
                      l.invert(c).concat(f / l.k)
                    )
                  return function(t) {
                    if (1 === t) t = l
                    else {
                      var n = h(t),
                        e = f / n[2]
                      t = new Xf(e, c[0] - n[0] * e, c[1] - n[1] * e)
                    }
                    i.zoom(null, t)
                  }
                })
            }
            function u(t, n) {
              for (var e, r = 0, i = E.length; r < i; ++r)
                if ((e = E[r]).that === t) return e
              return new c(t, n)
            }
            function c(t, n) {
              ;(this.that = t),
                (this.args = n),
                (this.index = -1),
                (this.active = 0),
                (this.extent = _.apply(t, n))
            }
            function f() {
              function t() {
                ;(n.wheel = null), n.end()
              }
              if (y.apply(this, arguments)) {
                var n = u(this, arguments),
                  a = this.__zoom,
                  o = Math.max(
                    x,
                    Math.min(w, a.k * Math.pow(2, m.apply(this, arguments)))
                  ),
                  c = rl(this)
                if (n.wheel)
                  (n.mouse[0][0] === c[0] && n.mouse[0][1] === c[1]) ||
                    (n.mouse[1] = a.invert((n.mouse[0] = c))),
                    clearTimeout(n.wheel)
                else {
                  if (a.k === o) return
                  ;(n.mouse = [c, a.invert(c)]), Nd(this), n.start()
                }
                eM(),
                  (n.wheel = setTimeout(t, z)),
                  n.zoom(
                    'mouse',
                    i(r(e(a, o), n.mouse[0], n.mouse[1]), n.extent)
                  )
              }
            }
            function s() {
              function n() {
                if ((eM(), !a.moved)) {
                  var n = t.event.clientX - f,
                    e = t.event.clientY - s
                  a.moved = n * n + e * e > L
                }
                a.zoom(
                  'mouse',
                  i(
                    r(a.that.__zoom, (a.mouse[0] = rl(a.that)), a.mouse[1]),
                    a.extent
                  )
                )
              }
              function e() {
                o.on('mousemove.zoom mouseup.zoom', null),
                  mt(t.event.view, a.moved),
                  eM(),
                  a.end()
              }
              if (!b && y.apply(this, arguments)) {
                var a = u(this, arguments),
                  o = Yl(t.event.view)
                    .on('mousemove.zoom', n, !0)
                    .on('mouseup.zoom', e, !0),
                  c = rl(this),
                  f = t.event.clientX,
                  s = t.event.clientY
                Xl(t.event.view),
                  Gf(),
                  (a.mouse = [c, this.__zoom.invert(c)]),
                  Nd(this),
                  a.start()
              }
            }
            function l() {
              if (y.apply(this, arguments)) {
                var a = this.__zoom,
                  u = rl(this),
                  c = a.invert(u),
                  f = a.k * (t.event.shiftKey ? 0.5 : 2),
                  s = i(r(e(a, f), u, c), _.apply(this, arguments))
                eM(),
                  A > 0
                    ? Yl(this)
                        .transition()
                        .duration(A)
                        .call(o, s, u)
                    : Yl(this).call(n.transform, s)
              }
            }
            function h() {
              if (y.apply(this, arguments)) {
                var n,
                  e,
                  r,
                  i,
                  a = u(this, arguments),
                  o = t.event.changedTouches,
                  c = o.length
                for (Gf(), e = 0; e < c; ++e)
                  (r = o[e]),
                    (i = Fl(this, o, r.identifier)),
                    (i = [i, this.__zoom.invert(i), r.identifier]),
                    a.touch0
                      ? a.touch1 || (a.touch1 = i)
                      : ((a.touch0 = i), (n = !0))
                if (v && ((v = clearTimeout(v)), !a.touch1))
                  return (
                    a.end(),
                    void (
                      (i = Yl(this).on('dblclick.zoom')) &&
                      i.apply(this, arguments)
                    )
                  )
                n &&
                  ((v = setTimeout(function() {
                    v = null
                  }, R)),
                  Nd(this),
                  a.start())
              }
            }
            function d() {
              var n,
                a,
                o,
                c,
                f = u(this, arguments),
                s = t.event.changedTouches,
                l = s.length
              for (eM(), v && (v = clearTimeout(v)), n = 0; n < l; ++n)
                (a = s[n]),
                  (o = Fl(this, s, a.identifier)),
                  f.touch0 && f.touch0[2] === a.identifier
                    ? (f.touch0[0] = o)
                    : f.touch1 &&
                      f.touch1[2] === a.identifier &&
                      (f.touch1[0] = o)
              if (((a = f.that.__zoom), f.touch1)) {
                var h = f.touch0[0],
                  d = f.touch0[1],
                  p = f.touch1[0],
                  g = f.touch1[1],
                  b = (b = p[0] - h[0]) * b + (b = p[1] - h[1]) * b,
                  y = (y = g[0] - d[0]) * y + (y = g[1] - d[1]) * y
                ;(a = e(a, Math.sqrt(b / y))),
                  (o = [(h[0] + p[0]) / 2, (h[1] + p[1]) / 2]),
                  (c = [(d[0] + g[0]) / 2, (d[1] + g[1]) / 2])
              } else {
                if (!f.touch0) return
                ;(o = f.touch0[0]), (c = f.touch0[1])
              }
              f.zoom('touch', i(r(a, o, c), f.extent))
            }
            function p() {
              var n,
                e,
                r = u(this, arguments),
                i = t.event.changedTouches,
                a = i.length
              for (
                Gf(),
                  b && clearTimeout(b),
                  b = setTimeout(function() {
                    b = null
                  }, R),
                  n = 0;
                n < a;
                ++n
              )
                (e = i[n]),
                  r.touch0 && r.touch0[2] === e.identifier
                    ? delete r.touch0
                    : r.touch1 &&
                      r.touch1[2] === e.identifier &&
                      delete r.touch1
              r.touch1 && !r.touch0 && ((r.touch0 = r.touch1), delete r.touch1),
                r.touch0
                  ? (r.touch0[1] = this.__zoom.invert(r.touch0[0]))
                  : r.end()
            }
            var v,
              b,
              y = Vf,
              _ = $f,
              m = Zf,
              x = 0,
              w = 1 / 0,
              M = -w,
              k = w,
              N = M,
              S = k,
              A = 250,
              T = Zh,
              E = [],
              P = g('start', 'zoom', 'end'),
              R = 500,
              z = 150,
              L = 0
            return (
              (n.transform = function(t, n) {
                var e = t.selection ? t.selection() : t
                e.property('__zoom', Wf),
                  t !== e
                    ? o(t, n)
                    : e.interrupt().each(function() {
                        u(this, arguments)
                          .start()
                          .zoom(
                            null,
                            'function' == typeof n
                              ? n.apply(this, arguments)
                              : n
                          )
                          .end()
                      })
              }),
              (n.scaleBy = function(t, e) {
                n.scaleTo(t, function() {
                  return (
                    this.__zoom.k *
                    ('function' == typeof e ? e.apply(this, arguments) : e)
                  )
                })
              }),
              (n.scaleTo = function(t, o) {
                n.transform(t, function() {
                  var t = _.apply(this, arguments),
                    n = this.__zoom,
                    u = a(t),
                    c = n.invert(u)
                  return i(
                    r(
                      e(
                        n,
                        'function' == typeof o ? o.apply(this, arguments) : o
                      ),
                      u,
                      c
                    ),
                    t
                  )
                })
              }),
              (n.translateBy = function(t, e, r) {
                n.transform(t, function() {
                  return i(
                    this.__zoom.translate(
                      'function' == typeof e ? e.apply(this, arguments) : e,
                      'function' == typeof r ? r.apply(this, arguments) : r
                    ),
                    _.apply(this, arguments)
                  )
                })
              }),
              (n.translateTo = function(t, e, r) {
                n.transform(t, function() {
                  var t = _.apply(this, arguments),
                    n = this.__zoom,
                    o = a(t)
                  return i(
                    nM
                      .translate(o[0], o[1])
                      .scale(n.k)
                      .translate(
                        'function' == typeof e ? -e.apply(this, arguments) : -e,
                        'function' == typeof r ? -r.apply(this, arguments) : -r
                      ),
                    t
                  )
                })
              }),
              (c.prototype = {
                start: function() {
                  return (
                    1 == ++this.active &&
                      ((this.index = E.push(this) - 1), this.emit('start')),
                    this
                  )
                },
                zoom: function(t, n) {
                  return (
                    this.mouse &&
                      'mouse' !== t &&
                      (this.mouse[1] = n.invert(this.mouse[0])),
                    this.touch0 &&
                      'touch' !== t &&
                      (this.touch0[1] = n.invert(this.touch0[0])),
                    this.touch1 &&
                      'touch' !== t &&
                      (this.touch1[1] = n.invert(this.touch1[0])),
                    (this.that.__zoom = n),
                    this.emit('zoom'),
                    this
                  )
                },
                end: function() {
                  return (
                    0 == --this.active &&
                      (E.splice(this.index, 1),
                      (this.index = -1),
                      this.emit('end')),
                    this
                  )
                },
                emit: function(t) {
                  C(new jf(n, t, this.that.__zoom), P.apply, P, [
                    t,
                    this.that,
                    this.args,
                  ])
                },
              }),
              (n.wheelDelta = function(t) {
                return arguments.length
                  ? ((m = 'function' == typeof t ? t : tM(+t)), n)
                  : m
              }),
              (n.filter = function(t) {
                return arguments.length
                  ? ((y = 'function' == typeof t ? t : tM(!!t)), n)
                  : y
              }),
              (n.extent = function(t) {
                return arguments.length
                  ? ((_ =
                      'function' == typeof t
                        ? t
                        : tM([[+t[0][0], +t[0][1]], [+t[1][0], +t[1][1]]])),
                    n)
                  : _
              }),
              (n.scaleExtent = function(t) {
                return arguments.length ? ((x = +t[0]), (w = +t[1]), n) : [x, w]
              }),
              (n.translateExtent = function(t) {
                return arguments.length
                  ? ((M = +t[0][0]),
                    (k = +t[1][0]),
                    (N = +t[0][1]),
                    (S = +t[1][1]),
                    n)
                  : [[M, N], [k, S]]
              }),
              (n.duration = function(t) {
                return arguments.length ? ((A = +t), n) : A
              }),
              (n.interpolate = function(t) {
                return arguments.length ? ((T = t), n) : T
              }),
              (n.on = function() {
                var t = P.on.apply(P, arguments)
                return t === P ? n : t
              }),
              (n.clickDistance = function(t) {
                return arguments.length ? ((L = (t = +t) * t), n) : Math.sqrt(L)
              }),
              n
            )
          }
        ;(t.version = '4.10.0'),
          (t.bisect = ns),
          (t.bisectRight = ns),
          (t.bisectLeft = es),
          (t.ascending = Jf),
          (t.bisector = Kf),
          (t.cross = is),
          (t.descending = as),
          (t.deviation = cs),
          (t.extent = fs),
          (t.histogram = xs),
          (t.thresholdFreedmanDiaconis = Ms),
          (t.thresholdScott = ks),
          (t.thresholdSturges = ms),
          (t.max = Ns),
          (t.mean = Ss),
          (t.median = As),
          (t.merge = Ts),
          (t.min = Es),
          (t.pairs = rs),
          (t.permute = Cs),
          (t.quantile = ws),
          (t.range = vs),
          (t.scan = Ps),
          (t.shuffle = Rs),
          (t.sum = zs),
          (t.ticks = _s),
          (t.tickIncrement = r),
          (t.tickStep = i),
          (t.transpose = Ls),
          (t.variance = us),
          (t.zip = qs),
          (t.axisTop = h),
          (t.axisRight = d),
          (t.axisBottom = p),
          (t.axisLeft = v),
          (t.brush = qp),
          (t.brushX = ze),
          (t.brushY = Le),
          (t.brushSelection = Re),
          (t.chord = Bp),
          (t.ribbon = $p),
          (t.nest = Wp),
          (t.set = Qe),
          (t.map = He),
          (t.keys = Qp),
          (t.values = Jp),
          (t.entries = Kp),
          (t.color = Tt),
          (t.rgb = Rt),
          (t.hsl = Ot),
          (t.lab = It),
          (t.hcl = Vt),
          (t.cubehelix = Zt),
          (t.dispatch = g),
          (t.drag = Gl),
          (t.dragDisable = Xl),
          (t.dragEnable = mt),
          (t.dsvFormat = tv),
          (t.csvParse = ev),
          (t.csvParseRows = rv),
          (t.csvFormat = iv),
          (t.csvFormatRows = av),
          (t.tsvParse = uv),
          (t.tsvParseRows = cv),
          (t.tsvFormat = fv),
          (t.tsvFormatRows = sv),
          (t.easeLinear = oe),
          (t.easeQuad = fe),
          (t.easeQuadIn = ue),
          (t.easeQuadOut = ce),
          (t.easeQuadInOut = fe),
          (t.easeCubic = he),
          (t.easeCubicIn = se),
          (t.easeCubicOut = le),
          (t.easeCubicInOut = he),
          (t.easePoly = Zd),
          (t.easePolyIn = $d),
          (t.easePolyOut = Wd),
          (t.easePolyInOut = Zd),
          (t.easeSin = ve),
          (t.easeSinIn = de),
          (t.easeSinOut = pe),
          (t.easeSinInOut = ve),
          (t.easeExp = ye),
          (t.easeExpIn = ge),
          (t.easeExpOut = be),
          (t.easeExpInOut = ye),
          (t.easeCircle = xe),
          (t.easeCircleIn = _e),
          (t.easeCircleOut = me),
          (t.easeCircleInOut = xe),
          (t.easeBounce = Me),
          (t.easeBounceIn = we),
          (t.easeBounceOut = Me),
          (t.easeBounceInOut = ke),
          (t.easeBack = lp),
          (t.easeBackIn = fp),
          (t.easeBackOut = sp),
          (t.easeBackInOut = lp),
          (t.easeElastic = pp),
          (t.easeElasticIn = dp),
          (t.easeElasticOut = pp),
          (t.easeElasticInOut = vp),
          (t.forceCenter = lv),
          (t.forceCollide = Ev),
          (t.forceLink = Cv),
          (t.forceManyBody = Lv),
          (t.forceSimulation = zv),
          (t.forceX = qv),
          (t.forceY = Ov),
          (t.formatDefaultLocale = br),
          (t.formatLocale = Wv),
          (t.formatSpecifier = vr),
          (t.precisionFixed = Zv),
          (t.precisionPrefix = Qv),
          (t.precisionRound = Jv),
          (t.geoArea = rb),
          (t.geoBounds = ob),
          (t.geoCentroid = cb),
          (t.geoCircle = Mb),
          (t.geoClipExtent = Cb),
          (t.geoContains = Fb),
          (t.geoDistance = Db),
          (t.geoGraticule = Si),
          (t.geoGraticule10 = Ai),
          (t.geoInterpolate = Bb),
          (t.geoLength = qb),
          (t.geoPath = vy),
          (t.geoAlbers = Ny),
          (t.geoAlbersUsa = Sy),
          (t.geoAzimuthalEqualArea = Ty),
          (t.geoAzimuthalEqualAreaRaw = Ay),
          (t.geoAzimuthalEquidistant = Cy),
          (t.geoAzimuthalEquidistantRaw = Ey),
          (t.geoConicConformal = Ry),
          (t.geoConicConformalRaw = va),
          (t.geoConicEqualArea = ky),
          (t.geoConicEqualAreaRaw = ca),
          (t.geoConicEquidistant = Ly),
          (t.geoConicEquidistantRaw = ba),
          (t.geoEquirectangular = zy),
          (t.geoEquirectangularRaw = ga),
          (t.geoGnomonic = qy),
          (t.geoGnomonicRaw = ya),
          (t.geoIdentity = Oy),
          (t.geoProjection = ia),
          (t.geoProjectionMutator = aa),
          (t.geoMercator = Py),
          (t.geoMercatorRaw = ha),
          (t.geoOrthographic = Uy),
          (t.geoOrthographicRaw = ma),
          (t.geoStereographic = Dy),
          (t.geoStereographicRaw = xa),
          (t.geoTransverseMercator = Yy),
          (t.geoTransverseMercatorRaw = wa),
          (t.geoRotation = wb),
          (t.geoStream = Kg),
          (t.geoTransform = _y),
          (t.cluster = Iy),
          (t.hierarchy = Ra),
          (t.pack = e_),
          (t.packSiblings = t_),
          (t.packEnclose = Ky),
          (t.partition = a_),
          (t.stratify = f_),
          (t.tree = s_),
          (t.treemap = p_),
          (t.treemapBinary = v_),
          (t.treemapDice = i_),
          (t.treemapSlice = l_),
          (t.treemapSliceDice = g_),
          (t.treemapSquarify = d_),
          (t.treemapResquarify = b_),
          (t.interpolate = Bh),
          (t.interpolateArray = qh),
          (t.interpolateBasis = Eh),
          (t.interpolateBasisClosed = Ch),
          (t.interpolateDate = Oh),
          (t.interpolateNumber = Uh),
          (t.interpolateObject = Dh),
          (t.interpolateRound = jh),
          (t.interpolateString = Fh),
          (t.interpolateTransformCss = Vh),
          (t.interpolateTransformSvg = $h),
          (t.interpolateZoom = Zh),
          (t.interpolateRgb = Rh),
          (t.interpolateRgbBasis = zh),
          (t.interpolateRgbBasisClosed = Lh),
          (t.interpolateHsl = Qh),
          (t.interpolateHslLong = Jh),
          (t.interpolateLab = vn),
          (t.interpolateHcl = Kh),
          (t.interpolateHclLong = td),
          (t.interpolateCubehelix = nd),
          (t.interpolateCubehelixLong = ed),
          (t.quantize = rd),
          (t.path = De),
          (t.polygonArea = y_),
          (t.polygonCentroid = __)
        ;(t.polygonHull = x_),
          (t.polygonContains = w_),
          (t.polygonLength = M_),
          (t.quadtree = or),
          (t.queue = No),
          (t.randomUniform = A_),
          (t.randomNormal = T_),
          (t.randomLogNormal = E_),
          (t.randomBates = P_),
          (t.randomIrwinHall = C_),
          (t.randomExponential = R_),
          (t.request = z_),
          (t.html = q_),
          (t.json = O_),
          (t.text = U_),
          (t.xml = D_),
          (t.csv = I_),
          (t.tsv = F_),
          (t.scaleBand = Co),
          (t.scalePoint = Ro),
          (t.scaleIdentity = Bo),
          (t.scaleLinear = Fo),
          (t.scaleLog = Wo),
          (t.scaleOrdinal = Eo),
          (t.scaleImplicit = H_),
          (t.scalePow = Qo),
          (t.scaleSqrt = Jo),
          (t.scaleQuantile = Ko),
          (t.scaleQuantize = tu),
          (t.scaleThreshold = nu),
          (t.scaleTime = dx),
          (t.scaleUtc = px),
          (t.schemeCategory10 = gx),
          (t.schemeCategory20b = bx),
          (t.schemeCategory20c = yx),
          (t.schemeCategory20 = _x),
          (t.interpolateCubehelixDefault = mx),
          (t.interpolateRainbow = kx),
          (t.interpolateWarm = xx),
          (t.interpolateCool = wx),
          (t.interpolateViridis = Nx),
          (t.interpolateMagma = Sx),
          (t.interpolateInferno = Ax),
          (t.interpolatePlasma = Tx),
          (t.scaleSequential = fc),
          (t.creator = Vs),
          (t.local = M),
          (t.matcher = Js),
          (t.mouse = rl),
          (t.namespace = Gs),
          (t.namespaces = Hs),
          (t.select = Yl),
          (t.selectAll = Il),
          (t.selection = yt),
          (t.selector = il),
          (t.selectorAll = ol),
          (t.style = G),
          (t.touch = Fl),
          (t.touches = Bl),
          (t.window = Nl),
          (t.customEvent = C),
          (t.arc = Fx),
          (t.area = Xx),
          (t.line = jx),
          (t.pie = Vx),
          (t.areaRadial = Zx),
          (t.radialArea = Zx),
          (t.lineRadial = Wx),
          (t.radialLine = Wx),
          (t.pointRadial = Qx),
          (t.linkHorizontal = Pc),
          (t.linkVertical = Rc),
          (t.linkRadial = zc),
          (t.symbol = bw),
          (t.symbols = gw),
          (t.symbolCircle = Kx),
          (t.symbolCross = tw),
          (t.symbolDiamond = rw),
          (t.symbolSquare = cw),
          (t.symbolStar = uw),
          (t.symbolTriangle = sw),
          (t.symbolWye = vw),
          (t.curveBasisClosed = mw),
          (t.curveBasisOpen = xw),
          (t.curveBasis = _w),
          (t.curveBundle = ww),
          (t.curveCardinalClosed = kw),
          (t.curveCardinalOpen = Nw),
          (t.curveCardinal = Mw),
          (t.curveCatmullRomClosed = Aw),
          (t.curveCatmullRomOpen = Tw),
          (t.curveCatmullRom = Sw),
          (t.curveLinearClosed = Ew),
          (t.curveLinear = Bx),
          (t.curveMonotoneX = nf),
          (t.curveMonotoneY = ef),
          (t.curveNatural = Cw),
          (t.curveStep = Pw),
          (t.curveStepAfter = cf),
          (t.curveStepBefore = uf),
          (t.stack = Lw),
          (t.stackOffsetExpand = qw),
          (t.stackOffsetDiverging = Ow),
          (t.stackOffsetNone = Rw),
          (t.stackOffsetSilhouette = Uw),
          (t.stackOffsetWiggle = Dw),
          (t.stackOrderAscending = Yw),
          (t.stackOrderDescending = Iw),
          (t.stackOrderInsideOut = Fw),
          (t.stackOrderNone = zw),
          (t.stackOrderReverse = Bw),
          (t.timeInterval = eu),
          (t.timeMillisecond = K_),
          (t.timeMilliseconds = tm),
          (t.utcMillisecond = K_),
          (t.utcMilliseconds = tm),
          (t.timeSecond = rm),
          (t.timeSeconds = im),
          (t.utcSecond = rm),
          (t.utcSeconds = im),
          (t.timeMinute = am),
          (t.timeMinutes = om),
          (t.timeHour = um),
          (t.timeHours = cm),
          (t.timeDay = fm),
          (t.timeDays = sm),
          (t.timeWeek = lm),
          (t.timeWeeks = ym),
          (t.timeSunday = lm),
          (t.timeSundays = ym),
          (t.timeMonday = hm),
          (t.timeMondays = _m),
          (t.timeTuesday = dm),
          (t.timeTuesdays = mm),
          (t.timeWednesday = pm),
          (t.timeWednesdays = xm),
          (t.timeThursday = vm),
          (t.timeThursdays = wm),
          (t.timeFriday = gm),
          (t.timeFridays = Mm),
          (t.timeSaturday = bm),
          (t.timeSaturdays = km),
          (t.timeMonth = Nm),
          (t.timeMonths = Sm),
          (t.timeYear = Am),
          (t.timeYears = Tm),
          (t.utcMinute = Em),
          (t.utcMinutes = Cm),
          (t.utcHour = Pm),
          (t.utcHours = Rm),
          (t.utcDay = zm),
          (t.utcDays = Lm),
          (t.utcWeek = qm),
          (t.utcWeeks = Bm),
          (t.utcSunday = qm),
          (t.utcSundays = Bm),
          (t.utcMonday = Om),
          (t.utcMondays = jm),
          (t.utcTuesday = Um),
          (t.utcTuesdays = Xm),
          (t.utcWednesday = Dm),
          (t.utcWednesdays = Hm),
          (t.utcThursday = Ym),
          (t.utcThursdays = Gm),
          (t.utcFriday = Im),
          (t.utcFridays = Vm),
          (t.utcSaturday = Fm),
          (t.utcSaturdays = $m),
          (t.utcMonth = Wm),
          (t.utcMonths = Zm),
          (t.utcYear = Qm),
          (t.utcYears = Km),
          (t.timeFormatDefaultLocale = ec),
          (t.timeFormatLocale = cu),
          (t.isoFormat = ix),
          (t.isoParse = ax),
          (t.now = yn),
          (t.timer = xn),
          (t.timerFlush = wn),
          (t.timeout = dd),
          (t.interval = pd),
          (t.transition = ie),
          (t.active = _p),
          (t.interrupt = Nd),
          (t.voronoi = Kw),
          (t.zoom = rM),
          (t.zoomTransform = Hf),
          (t.zoomIdentity = nM),
          Object.defineProperty(t, '__esModule', { value: !0 })
      })
    },
    function(t, n, e) {
      'use strict'
      function r() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n]
        console.error.apply(console, arguments)
      }
      function i() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n]
      }
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.error = r),
        (n.warn = i)
    },
    function(t, n, e) {
      'use strict'
      e.d(n, 'b', function() {
        return r
      }),
        e.d(n, 'a', function() {
          return i
        })
      var r = Math.PI / 180,
        i = 180 / Math.PI
    },
    function(t, n, e) {
      'use strict'
      var r = e(9)
      n.a = function(t, n) {
        var i,
          a = n ? n.length : 0,
          o = t ? Math.min(a, t.length) : 0,
          u = new Array(a),
          c = new Array(a)
        for (i = 0; i < o; ++i) u[i] = e.i(r.a)(t[i], n[i])
        for (; i < a; ++i) c[i] = n[i]
        return function(t) {
          for (i = 0; i < o; ++i) c[i] = u[i](t)
          return c
        }
      }
    },
    function(t, n, e) {
      'use strict'
      var r = e(8)
      n.a = function(t) {
        var n = t.length
        return function(i) {
          var a = Math.floor(((i %= 1) < 0 ? ++i : i) * n),
            o = t[(a + n - 1) % n],
            u = t[a % n],
            c = t[(a + 1) % n],
            f = t[(a + 2) % n]
          return e.i(r.b)((i - a / n) * n, o, u, c, f)
        }
      }
    },
    function(t, n, e) {
      'use strict'
      n.a = function(t) {
        return function() {
          return t
        }
      }
    },
    function(t, n, e) {
      'use strict'
      n.a = function(t, n) {
        var e = new Date()
        return (
          (t = +t),
          (n -= t),
          function(r) {
            return e.setTime(t + n * r), e
          }
        )
      }
    },
    function(t, n, e) {
      'use strict'
      var r = e(9)
      n.a = function(t, n) {
        var i,
          a = {},
          o = {}
        ;(null !== t && 'object' == typeof t) || (t = {}),
          (null !== n && 'object' == typeof n) || (n = {})
        for (i in n) i in t ? (a[i] = e.i(r.a)(t[i], n[i])) : (o[i] = n[i])
        return function(t) {
          for (i in a) o[i] = a[i](t)
          return o
        }
      }
    },
    function(t, n, e) {
      'use strict'
      function r(t) {
        return function(n) {
          var r,
            a,
            o = n.length,
            u = new Array(o),
            c = new Array(o),
            f = new Array(o)
          for (r = 0; r < o; ++r)
            (a = e.i(i.e)(n[r])),
              (u[r] = a.r || 0),
              (c[r] = a.g || 0),
              (f[r] = a.b || 0)
          return (
            (u = t(u)),
            (c = t(c)),
            (f = t(f)),
            (a.opacity = 1),
            function(t) {
              return (a.r = u(t)), (a.g = c(t)), (a.b = f(t)), a + ''
            }
          )
        }
      }
      e.d(n, 'a', function() {
        return c
      })
      var i = e(2),
        a = e(8),
        o = e(14),
        u = e(3)
      n.b = (function t(n) {
        function r(t, n) {
          var r = a((t = e.i(i.e)(t)).r, (n = e.i(i.e)(n)).r),
            o = a(t.g, n.g),
            c = a(t.b, n.b),
            f = e.i(u.a)(t.opacity, n.opacity)
          return function(n) {
            return (
              (t.r = r(n)),
              (t.g = o(n)),
              (t.b = c(n)),
              (t.opacity = f(n)),
              t + ''
            )
          }
        }
        var a = e.i(u.c)(n)
        return (r.gamma = t), r
      })(1)
      var c = r(a.a)
      r(o.a)
    },
    function(t, n, e) {
      'use strict'
      function r(t) {
        return function() {
          return t
        }
      }
      function i(t) {
        return function(n) {
          return t(n) + ''
        }
      }
      var a = e(4),
        o = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        u = new RegExp(o.source, 'g')
      n.a = function(t, n) {
        var c,
          f,
          s,
          l = (o.lastIndex = u.lastIndex = 0),
          h = -1,
          d = [],
          p = []
        for (t += '', n += ''; (c = o.exec(t)) && (f = u.exec(n)); )
          (s = f.index) > l &&
            ((s = n.slice(l, s)), d[h] ? (d[h] += s) : (d[++h] = s)),
            (c = c[0]) === (f = f[0])
              ? d[h]
                ? (d[h] += f)
                : (d[++h] = f)
              : ((d[++h] = null), p.push({ i: h, x: e.i(a.a)(c, f) })),
            (l = u.lastIndex)
        return (
          l < n.length && ((s = n.slice(l)), d[h] ? (d[h] += s) : (d[++h] = s)),
          d.length < 2
            ? p[0]
              ? i(p[0].x)
              : r(n)
            : ((n = p.length),
              function(t) {
                for (var e, r = 0; r < n; ++r) d[(e = p[r]).i] = e.x(t)
                return d.join('')
              })
        )
      }
    },
    function(t, n, e) {
      'use strict'
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (function(t) {
          for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e])
        })(e(5))
    },
    function(t, n, e) {
      'use strict'
      Object.defineProperty(n, '__esModule', { value: !0 })
      var r = e(10),
        i = e(5),
        a = e(11),
        o = (function() {
          function t(t, n, e) {
            void 0 === e && (e = null),
              (this.svg = t),
              (this.needleUpdateSpeed = n),
              (this.needle = e)
          }
          return (
            (t.prototype.updateNeedle = function(t) {
              var n = this
              if (!this.needle)
                return void a.warn('Gauge-chart Warning: no needle to update')
              ;(t = i.needleValueModifier(t)),
                this.needle
                  .getSelection()
                  .transition()
                  .duration(this.needleUpdateSpeed)
                  .ease(r.easeCubic)
                  .tween('needle animation', function() {
                    var e = n.needle.getValue(),
                      i = r.interpolateNumber(e, t)
                    return function(t) {
                      return n.needle.setValue(i(t))
                    }
                  })
            }),
            (t.prototype.removeGauge = function() {
              this.svg.remove()
            }),
            t
          )
        })()
      n.Gauge = o
    },
    function(t, n, e) {
      'use strict'
      Object.defineProperty(n, '__esModule', { value: !0 })
      var r = e(10),
        i = e(5),
        a = (function() {
          function t(t, n, e, i, a, o, u, c) {
            ;(this.needleValue = n),
              (this.centralLabel = e),
              (this.chartHeight = i),
              (this.outerRadius = a),
              (this.offset = o),
              (this.needleColor = u),
              (this.outerNeedle = c),
              (this.lineFunction = r
                .line()
                .x(function(t) {
                  return t.x
                })
                .y(function(t) {
                  return t.y
                })
                .curve(r.curveLinear)),
              (this.needleSvg = t
                .append('path')
                .attr('d', this.getLine())
                .attr('stroke', this.needleColor)
                .attr('stroke-width', 2)
                .attr('fill', this.needleColor)
                .attr(
                  'transform',
                  'translate(' +
                    (this.chartHeight + 2 * this.offset) +
                    ', ' +
                    (this.chartHeight + this.offset) +
                    ')'
                ))
          }
          return (
            (t.prototype.setValue = function(t) {
              ;(this.needleValue = t), this.needleSvg.attr('d', this.getLine())
            }),
            (t.prototype.getValue = function() {
              return this.needleValue
            }),
            (t.prototype.calcCoordinates = function() {
              var t = this.centralLabel
                ? 0.7 * this.chartHeight
                : 0.1 * this.chartHeight
              t = this.outerNeedle ? 0.25 * this.chartHeight : t
              var n = this.outerNeedle
                  ? 1.4 * this.outerRadius
                  : 0.97 * this.outerRadius,
                e = 0.5 * t,
                r = 0.5 * t,
                a = i.perc2RadWithShift(this.needleValue)
              return this.outerNeedle
                ? [
                    { x: n * Math.sin(a), y: -n * Math.cos(a) },
                    {
                      x: (n + e) * Math.sin(a) + r * Math.cos(a),
                      y: -(n + e) * Math.cos(a) + r * Math.sin(a),
                    },
                    {
                      x: (n + e) * Math.sin(a) - r * Math.cos(a),
                      y: -(n + e) * Math.cos(a) - r * Math.sin(a),
                    },
                    { x: n * Math.sin(a), y: -n * Math.cos(a) },
                  ]
                : this.centralLabel
                ? [
                    { x: n * Math.sin(a), y: -n * Math.cos(a) },
                    {
                      x: 1.5 * r * Math.sin(a) - (r / 3) * Math.cos(a),
                      y: -1.5 * r * Math.cos(a) - (r / 3) * Math.sin(a),
                    },
                    {
                      x: 1.5 * r * Math.sin(a) + (r / 3) * Math.cos(a),
                      y: -1.5 * r * Math.cos(a) + (r / 3) * Math.sin(a),
                    },
                    { x: n * Math.sin(a), y: -n * Math.cos(a) },
                  ]
                : [
                    { x: n * Math.sin(a), y: -n * Math.cos(a) },
                    { x: -r * Math.cos(a), y: -r * Math.sin(a) },
                    { x: -e * Math.sin(a), y: e * Math.cos(a) },
                    { x: r * Math.cos(a), y: r * Math.sin(a) },
                    { x: n * Math.sin(a), y: -n * Math.cos(a) },
                  ]
            }),
            (t.prototype.getSelection = function() {
              return this.needleSvg
            }),
            (t.prototype.getLine = function() {
              return this.lineFunction(this.calcCoordinates())
            }),
            t
          )
        })()
      n.Needle = a
    },
    function(t, n, e) {
      'use strict'
      function r(t) {
        return (
          !t ||
          !(t.slice(-1)[0] >= 100 || t[0] <= 0) ||
          (h.error(
            'Gauge-chart Error: gauge delimiters have to be LARGER than 0 and LESS than 100'
          ),
          !1)
        )
      }
      function i(t) {
        var n = !0
        return (
          t &&
            t.forEach(function(e, r) {
              r &&
                e < t[r - 1] &&
                (h.error('Gauge-chart Error: gauge delimiters are not sorted'),
                (n = !1))
            }),
          n
        )
      }
      function a(t, n) {
        t &&
          n &&
          t.length > n.length - 1 &&
          h.warn(
            'Gauge-chart Warning: list of colors is not complete, standard colors added to the chart'
          )
      }
      function o(t, n) {
        t &&
          n &&
          t.length < n.length - 1 &&
          h.warn(
            'Gauge-chart Warning: list of colors exceeds number of slices, therefore it was shortened'
          )
      }
      function u(t) {
        ;(t < 0 || t > 100) &&
          h.warn(
            'Gauge-chart Warning: value of needdle is less that 0 or larger than 100'
          )
      }
      function c(t) {
        t.length > 2 &&
          h.warn(
            'Gauge-chart Warning: number of range label parameters is bigger than 2'
          )
      }
      function f(t, n, e) {
        a(t, n), o(t, n), c(e)
      }
      function s(t) {
        return r(t) && i(t)
      }
      function l(t, n, e) {
        return f(t, n, e), s(t)
      }
      Object.defineProperty(n, '__esModule', { value: !0 })
      var h = e(11)
      ;(n.delimiterRangeErrorChecker = r),
        (n.delimiterSortErrorChecker = i),
        (n.colorsLackWarnChecker = a),
        (n.colorsExcessWarnChecker = o),
        (n.needleValueWarnChecker = u),
        (n.rangeLabelNumberWarnChecker = c),
        (n.warnChecker = f),
        (n.errorChecker = s),
        (n.paramChecker = l)
    },
    function(t, n, e) {
      'use strict'
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (function(t) {
          for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e])
        })(e(20))
    },
    function(t, n, e) {
      'use strict'
      Object.defineProperty(n, '__esModule', { value: !0 })
      var r = e(39)
      e.d(n, 'schemeAccent', function() {
        return r.a
      })
      var i = e(40)
      e.d(n, 'schemeDark2', function() {
        return i.a
      })
      var a = e(41)
      e.d(n, 'schemePaired', function() {
        return a.a
      })
      var o = e(42)
      e.d(n, 'schemePastel1', function() {
        return o.a
      })
      var u = e(43)
      e.d(n, 'schemePastel2', function() {
        return u.a
      })
      var c = e(44)
      e.d(n, 'schemeSet1', function() {
        return c.a
      })
      var f = e(45)
      e.d(n, 'schemeSet2', function() {
        return f.a
      })
      var s = e(46)
      e.d(n, 'schemeSet3', function() {
        return s.a
      })
      var l = e(47)
      e.d(n, 'interpolateBrBG', function() {
        return l.a
      }),
        e.d(n, 'schemeBrBG', function() {
          return l.b
        })
      var h = e(48)
      e.d(n, 'interpolatePRGn', function() {
        return h.a
      }),
        e.d(n, 'schemePRGn', function() {
          return h.b
        })
      var d = e(49)
      e.d(n, 'interpolatePiYG', function() {
        return d.a
      }),
        e.d(n, 'schemePiYG', function() {
          return d.b
        })
      var p = e(50)
      e.d(n, 'interpolatePuOr', function() {
        return p.a
      }),
        e.d(n, 'schemePuOr', function() {
          return p.b
        })
      var v = e(51)
      e.d(n, 'interpolateRdBu', function() {
        return v.a
      }),
        e.d(n, 'schemeRdBu', function() {
          return v.b
        })
      var g = e(52)
      e.d(n, 'interpolateRdGy', function() {
        return g.a
      }),
        e.d(n, 'schemeRdGy', function() {
          return g.b
        })
      var b = e(53)
      e.d(n, 'interpolateRdYlBu', function() {
        return b.a
      }),
        e.d(n, 'schemeRdYlBu', function() {
          return b.b
        })
      var y = e(54)
      e.d(n, 'interpolateRdYlGn', function() {
        return y.a
      }),
        e.d(n, 'schemeRdYlGn', function() {
          return y.b
        })
      var _ = e(55)
      e.d(n, 'interpolateSpectral', function() {
        return _.a
      }),
        e.d(n, 'schemeSpectral', function() {
          return _.b
        })
      var m = e(56)
      e.d(n, 'interpolateBuGn', function() {
        return m.a
      }),
        e.d(n, 'schemeBuGn', function() {
          return m.b
        })
      var x = e(57)
      e.d(n, 'interpolateBuPu', function() {
        return x.a
      }),
        e.d(n, 'schemeBuPu', function() {
          return x.b
        })
      var w = e(58)
      e.d(n, 'interpolateGnBu', function() {
        return w.a
      }),
        e.d(n, 'schemeGnBu', function() {
          return w.b
        })
      var M = e(59)
      e.d(n, 'interpolateOrRd', function() {
        return M.a
      }),
        e.d(n, 'schemeOrRd', function() {
          return M.b
        })
      var k = e(61)
      e.d(n, 'interpolatePuBuGn', function() {
        return k.a
      }),
        e.d(n, 'schemePuBuGn', function() {
          return k.b
        })
      var N = e(60)
      e.d(n, 'interpolatePuBu', function() {
        return N.a
      }),
        e.d(n, 'schemePuBu', function() {
          return N.b
        })
      var S = e(62)
      e.d(n, 'interpolatePuRd', function() {
        return S.a
      }),
        e.d(n, 'schemePuRd', function() {
          return S.b
        })
      var A = e(63)
      e.d(n, 'interpolateRdPu', function() {
        return A.a
      }),
        e.d(n, 'schemeRdPu', function() {
          return A.b
        })
      var T = e(65)
      e.d(n, 'interpolateYlGnBu', function() {
        return T.a
      }),
        e.d(n, 'schemeYlGnBu', function() {
          return T.b
        })
      var E = e(64)
      e.d(n, 'interpolateYlGn', function() {
        return E.a
      }),
        e.d(n, 'schemeYlGn', function() {
          return E.b
        })
      var C = e(66)
      e.d(n, 'interpolateYlOrBr', function() {
        return C.a
      }),
        e.d(n, 'schemeYlOrBr', function() {
          return C.b
        })
      var P = e(67)
      e.d(n, 'interpolateYlOrRd', function() {
        return P.a
      }),
        e.d(n, 'schemeYlOrRd', function() {
          return P.b
        })
      var R = e(68)
      e.d(n, 'interpolateBlues', function() {
        return R.a
      }),
        e.d(n, 'schemeBlues', function() {
          return R.b
        })
      var z = e(69)
      e.d(n, 'interpolateGreens', function() {
        return z.a
      }),
        e.d(n, 'schemeGreens', function() {
          return z.b
        })
      var L = e(70)
      e.d(n, 'interpolateGreys', function() {
        return L.a
      }),
        e.d(n, 'schemeGreys', function() {
          return L.b
        })
      var q = e(72)
      e.d(n, 'interpolatePurples', function() {
        return q.a
      }),
        e.d(n, 'schemePurples', function() {
          return q.b
        })
      var O = e(73)
      e.d(n, 'interpolateReds', function() {
        return O.a
      }),
        e.d(n, 'schemeReds', function() {
          return O.b
        })
      var U = e(71)
      e.d(n, 'interpolateOranges', function() {
        return U.a
      }),
        e.d(n, 'schemeOranges', function() {
          return U.b
        })
    },
    function(t, n, e) {
      'use strict'
      function r(t) {
        if (t instanceof a) return new a(t.h, t.s, t.l, t.opacity)
        t instanceof u.a || (t = e.i(u.b)(t))
        var n = t.r / 255,
          r = t.g / 255,
          i = t.b / 255,
          o = (g * i + p * n - v * r) / (g + p - v),
          f = i - o,
          s = (d * (r - o) - l * f) / h,
          b = Math.sqrt(s * s + f * f) / (d * o * (1 - o)),
          y = b ? Math.atan2(s, f) * c.a - 120 : NaN
        return new a(y < 0 ? y + 360 : y, b, o, t.opacity)
      }
      function i(t, n, e, i) {
        return 1 === arguments.length ? r(t) : new a(t, n, e, null == i ? 1 : i)
      }
      function a(t, n, e, r) {
        ;(this.h = +t), (this.s = +n), (this.l = +e), (this.opacity = +r)
      }
      n.a = i
      var o = e(7),
        u = e(6),
        c = e(12),
        f = -0.14861,
        s = 1.78277,
        l = -0.29227,
        h = -0.90649,
        d = 1.97294,
        p = d * h,
        v = d * s,
        g = s * l - h * f
      e.i(o.a)(
        a,
        i,
        e.i(o.b)(u.c, {
          brighter: function(t) {
            return (
              (t = null == t ? u.d : Math.pow(u.d, t)),
              new a(this.h, this.s, this.l * t, this.opacity)
            )
          },
          darker: function(t) {
            return (
              (t = null == t ? u.e : Math.pow(u.e, t)),
              new a(this.h, this.s, this.l * t, this.opacity)
            )
          },
          rgb: function() {
            var t = isNaN(this.h) ? 0 : (this.h + 120) * c.b,
              n = +this.l,
              e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
              r = Math.cos(t),
              i = Math.sin(t)
            return new u.a(
              255 * (n + e * (f * r + s * i)),
              255 * (n + e * (l * r + h * i)),
              255 * (n + e * (d * r)),
              this.opacity
            )
          },
        })
      )
    },
    function(t, n, e) {
      'use strict'
      function r(t) {
        if (t instanceof a) return new a(t.l, t.a, t.b, t.opacity)
        if (t instanceof h) {
          var n = t.h * v.b
          return new a(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity)
        }
        t instanceof p.a || (t = e.i(p.b)(t))
        var r = f(t.r),
          i = f(t.g),
          u = f(t.b),
          c = o((0.4124564 * r + 0.3575761 * i + 0.1804375 * u) / g),
          s = o((0.2126729 * r + 0.7151522 * i + 0.072175 * u) / b)
        return new a(
          116 * s - 16,
          500 * (c - s),
          200 * (s - o((0.0193339 * r + 0.119192 * i + 0.9503041 * u) / y)),
          t.opacity
        )
      }
      function i(t, n, e, i) {
        return 1 === arguments.length ? r(t) : new a(t, n, e, null == i ? 1 : i)
      }
      function a(t, n, e, r) {
        ;(this.l = +t), (this.a = +n), (this.b = +e), (this.opacity = +r)
      }
      function o(t) {
        return t > w ? Math.pow(t, 1 / 3) : t / x + _
      }
      function u(t) {
        return t > m ? t * t * t : x * (t - _)
      }
      function c(t) {
        return (
          255 *
          (t <= 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055)
        )
      }
      function f(t) {
        return (t /= 255) <= 0.04045
          ? t / 12.92
          : Math.pow((t + 0.055) / 1.055, 2.4)
      }
      function s(t) {
        if (t instanceof h) return new h(t.h, t.c, t.l, t.opacity)
        t instanceof a || (t = r(t))
        var n = Math.atan2(t.b, t.a) * v.a
        return new h(
          n < 0 ? n + 360 : n,
          Math.sqrt(t.a * t.a + t.b * t.b),
          t.l,
          t.opacity
        )
      }
      function l(t, n, e, r) {
        return 1 === arguments.length ? s(t) : new h(t, n, e, null == r ? 1 : r)
      }
      function h(t, n, e, r) {
        ;(this.h = +t), (this.c = +n), (this.l = +e), (this.opacity = +r)
      }
      ;(n.b = i), (n.a = l)
      var d = e(7),
        p = e(6),
        v = e(12),
        g = 0.95047,
        b = 1,
        y = 1.08883,
        _ = 4 / 29,
        m = 6 / 29,
        x = 3 * m * m,
        w = m * m * m
      e.i(d.a)(
        a,
        i,
        e.i(d.b)(p.c, {
          brighter: function(t) {
            return new a(
              this.l + 18 * (null == t ? 1 : t),
              this.a,
              this.b,
              this.opacity
            )
          },
          darker: function(t) {
            return new a(
              this.l - 18 * (null == t ? 1 : t),
              this.a,
              this.b,
              this.opacity
            )
          },
          rgb: function() {
            var t = (this.l + 16) / 116,
              n = isNaN(this.a) ? t : t + this.a / 500,
              e = isNaN(this.b) ? t : t - this.b / 200
            return (
              (t = b * u(t)),
              (n = g * u(n)),
              (e = y * u(e)),
              new p.a(
                c(3.2404542 * n - 1.5371385 * t - 0.4985314 * e),
                c(-0.969266 * n + 1.8760108 * t + 0.041556 * e),
                c(0.0556434 * n - 0.2040259 * t + 1.0572252 * e),
                this.opacity
              )
            )
          },
        })
      ),
        e.i(d.a)(
          h,
          l,
          e.i(d.b)(p.c, {
            brighter: function(t) {
              return new h(
                this.h,
                this.c,
                this.l + 18 * (null == t ? 1 : t),
                this.opacity
              )
            },
            darker: function(t) {
              return new h(
                this.h,
                this.c,
                this.l - 18 * (null == t ? 1 : t),
                this.opacity
              )
            },
            rgb: function() {
              return r(this).rgb()
            },
          })
        )
    },
    function(t, n, e) {
      'use strict'
      var r =
        (e(9),
        e(13),
        e(8),
        e(14),
        e(16),
        e(4),
        e(17),
        e(34),
        e(19),
        e(36),
        e(38),
        e(18))
      e.d(n, 'a', function() {
        return r.a
      })
      e(31), e(32), e(30), e(29), e(33)
    },
    function(t, n, e) {
      'use strict'
      function r(t) {
        return (function n(r) {
          function o(n, o) {
            var u = t((n = e.i(i.a)(n)).h, (o = e.i(i.a)(o)).h),
              c = e.i(a.a)(n.s, o.s),
              f = e.i(a.a)(n.l, o.l),
              s = e.i(a.a)(n.opacity, o.opacity)
            return function(t) {
              return (
                (n.h = u(t)),
                (n.s = c(t)),
                (n.l = f(Math.pow(t, r))),
                (n.opacity = s(t)),
                n + ''
              )
            }
          }
          return (r = +r), (o.gamma = n), o
        })(1)
      }
      var i = e(2),
        a = e(3)
      r(a.b), r(a.a)
    },
    function(t, n, e) {
      'use strict'
      function r(t) {
        return function(n, r) {
          var o = t((n = e.i(i.b)(n)).h, (r = e.i(i.b)(r)).h),
            u = e.i(a.a)(n.c, r.c),
            c = e.i(a.a)(n.l, r.l),
            f = e.i(a.a)(n.opacity, r.opacity)
          return function(t) {
            return (
              (n.h = o(t)),
              (n.c = u(t)),
              (n.l = c(t)),
              (n.opacity = f(t)),
              n + ''
            )
          }
        }
      }
      var i = e(2),
        a = e(3)
      r(a.b), r(a.a)
    },
    function(t, n, e) {
      'use strict'
      function r(t) {
        return function(n, r) {
          var o = t((n = e.i(i.d)(n)).h, (r = e.i(i.d)(r)).h),
            u = e.i(a.a)(n.s, r.s),
            c = e.i(a.a)(n.l, r.l),
            f = e.i(a.a)(n.opacity, r.opacity)
          return function(t) {
            return (
              (n.h = o(t)),
              (n.s = u(t)),
              (n.l = c(t)),
              (n.opacity = f(t)),
              n + ''
            )
          }
        }
      }
      var i = e(2),
        a = e(3)
      r(a.b), r(a.a)
    },
    function(t, n, e) {
      'use strict'
      e(2), e(3)
    },
    function(t, n, e) {
      'use strict'
    },
    function(t, n, e) {
      'use strict'
    },
    function(t, n, e) {
      'use strict'
      e.d(n, 'a', function() {
        return i
      })
      var r = 180 / Math.PI,
        i = {
          translateX: 0,
          translateY: 0,
          rotate: 0,
          skewX: 0,
          scaleX: 1,
          scaleY: 1,
        }
      n.b = function(t, n, e, i, a, o) {
        var u, c, f
        return (
          (u = Math.sqrt(t * t + n * n)) && ((t /= u), (n /= u)),
          (f = t * e + n * i) && ((e -= t * f), (i -= n * f)),
          (c = Math.sqrt(e * e + i * i)) && ((e /= c), (i /= c), (f /= c)),
          t * i < n * e && ((t = -t), (n = -n), (f = -f), (u = -u)),
          {
            translateX: a,
            translateY: o,
            rotate: Math.atan2(n, t) * r,
            skewX: Math.atan(f) * r,
            scaleX: u,
            scaleY: c,
          }
        )
      }
    },
    function(t, n, e) {
      'use strict'
      function r(t, n, r, a) {
        function o(t) {
          return t.length ? t.pop() + ' ' : ''
        }
        function u(t, a, o, u, c, f) {
          if (t !== o || a !== u) {
            var s = c.push('translate(', null, n, null, r)
            f.push(
              { i: s - 4, x: e.i(i.a)(t, o) },
              { i: s - 2, x: e.i(i.a)(a, u) }
            )
          } else (o || u) && c.push('translate(' + o + n + u + r)
        }
        function c(t, n, r, u) {
          t !== n
            ? (t - n > 180 ? (n += 360) : n - t > 180 && (t += 360),
              u.push({
                i: r.push(o(r) + 'rotate(', null, a) - 2,
                x: e.i(i.a)(t, n),
              }))
            : n && r.push(o(r) + 'rotate(' + n + a)
        }
        function f(t, n, r, u) {
          t !== n
            ? u.push({
                i: r.push(o(r) + 'skewX(', null, a) - 2,
                x: e.i(i.a)(t, n),
              })
            : n && r.push(o(r) + 'skewX(' + n + a)
        }
        function s(t, n, r, a, u, c) {
          if (t !== r || n !== a) {
            var f = u.push(o(u) + 'scale(', null, ',', null, ')')
            c.push(
              { i: f - 4, x: e.i(i.a)(t, r) },
              { i: f - 2, x: e.i(i.a)(n, a) }
            )
          } else
            (1 === r && 1 === a) || u.push(o(u) + 'scale(' + r + ',' + a + ')')
        }
        return function(n, e) {
          var r = [],
            i = []
          return (
            (n = t(n)),
            (e = t(e)),
            u(n.translateX, n.translateY, e.translateX, e.translateY, r, i),
            c(n.rotate, e.rotate, r, i),
            f(n.skewX, e.skewX, r, i),
            s(n.scaleX, n.scaleY, e.scaleX, e.scaleY, r, i),
            (n = e = null),
            function(t) {
              for (var n, e = -1, a = i.length; ++e < a; )
                r[(n = i[e]).i] = n.x(t)
              return r.join('')
            }
          )
        }
      }
      var i = e(4),
        a = e(37)
      r(a.a, 'px, ', 'px)', 'deg)'), r(a.b, ', ', ')', ')')
    },
    function(t, n, e) {
      'use strict'
      function r(t) {
        return 'none' === t
          ? f.a
          : (a ||
              ((a = document.createElement('DIV')),
              (o = document.documentElement),
              (u = document.defaultView)),
            (a.style.transform = t),
            (t = u
              .getComputedStyle(o.appendChild(a), null)
              .getPropertyValue('transform')),
            o.removeChild(a),
            (t = t.slice(7, -1).split(',')),
            e.i(f.b)(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]))
      }
      function i(t) {
        return null == t
          ? f.a
          : (c ||
              (c = document.createElementNS('http://www.w3.org/2000/svg', 'g')),
            c.setAttribute('transform', t),
            (t = c.transform.baseVal.consolidate())
              ? ((t = t.matrix), e.i(f.b)(t.a, t.b, t.c, t.d, t.e, t.f))
              : f.a)
      }
      ;(n.a = r), (n.b = i)
      var a,
        o,
        u,
        c,
        f = e(35)
    },
    function(t, n, e) {
      'use strict'
      Math.SQRT2
    },
    function(t, n, e) {
      'use strict'
      var r = e(0)
      n.a = e.i(r.a)('7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666')
    },
    function(t, n, e) {
      'use strict'
      var r = e(0)
      n.a = e.i(r.a)('1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666')
    },
    function(t, n, e) {
      'use strict'
      var r = e(0)
      n.a = e.i(r.a)(
        'a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928'
      )
    },
    function(t, n, e) {
      'use strict'
      var r = e(0)
      n.a = e.i(r.a)('fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2')
    },
    function(t, n, e) {
      'use strict'
      var r = e(0)
      n.a = e.i(r.a)('b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc')
    },
    function(t, n, e) {
      'use strict'
      var r = e(0)
      n.a = e.i(r.a)('e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999')
    },
    function(t, n, e) {
      'use strict'
      var r = e(0)
      n.a = e.i(r.a)('66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3')
    },
    function(t, n, e) {
      'use strict'
      var r = e(0)
      n.a = e.i(r.a)(
        '8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f'
      )
    },
    function(t, n, e) {
      'use strict'
      e.d(n, 'b', function() {
        return a
      })
      var r = e(0),
        i = e(1),
        a = new Array(3)
          .concat(
            'd8b365f5f5f55ab4ac',
            'a6611adfc27d80cdc1018571',
            'a6611adfc27df5f5f580cdc1018571',
            '8c510ad8b365f6e8c3c7eae55ab4ac01665e',
            '8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e',
            '8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e',
            '8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e',
            '5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30',
            '5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30'
          )
          .map(r.a)
      n.a = e.i(i.a)(a)
    },
    function(t, n, e) {
      'use strict'
      e.d(n, 'b', function() {
        return a
      })
      var r = e(0),
        i = e(1),
        a = new Array(3)
          .concat(
            'af8dc3f7f7f77fbf7b',
            '7b3294c2a5cfa6dba0008837',
            '7b3294c2a5cff7f7f7a6dba0008837',
            '762a83af8dc3e7d4e8d9f0d37fbf7b1b7837',
            '762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837',
            '762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837',
            '762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837',
            '40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b',
            '40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b'
          )
          .map(r.a)
      n.a = e.i(i.a)(a)
    },
    function(t, n, e) {
      'use strict'
      e.d(n, 'b', function() {
        return a
      })
      var r = e(0),
        i = e(1),
        a = new Array(3)
          .concat(
            'e9a3c9f7f7f7a1d76a',
            'd01c8bf1b6dab8e1864dac26',
            'd01c8bf1b6daf7f7f7b8e1864dac26',
            'c51b7de9a3c9fde0efe6f5d0a1d76a4d9221',
            'c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221',
            'c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221',
            'c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221',
            '8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419',
            '8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419'
          )
          .map(r.a)
      n.a = e.i(i.a)(a)
    },
    function(t, n, e) {
      'use strict'
      e.d(n, 'b', function() {
        return a
      })
      var r = e(0),
        i = e(1),
        a = new Array(3)
          .concat(
            '998ec3f7f7f7f1a340',
            '5e3c99b2abd2fdb863e66101',
            '5e3c99b2abd2f7f7f7fdb863e66101',
            '542788998ec3d8daebfee0b6f1a340b35806',
            '542788998ec3d8daebf7f7f7fee0b6f1a340b35806',
            '5427888073acb2abd2d8daebfee0b6fdb863e08214b35806',
            '5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806',
            '2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08',
            '2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08'
          )
          .map(r.a)
      n.a = e.i(i.a)(a)
    },
    function(t, n, e) {
      'use strict'
      e.d(n, 'b', function() {
        return a
      })
      var r = e(0),
        i = e(1),
        a = new Array(3)
          .concat(
            'ef8a62f7f7f767a9cf',
            'ca0020f4a58292c5de0571b0',
            'ca0020f4a582f7f7f792c5de0571b0',
            'b2182bef8a62fddbc7d1e5f067a9cf2166ac',
            'b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac',
            'b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac',
            'b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac',
            '67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061',
            '67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061'
          )
          .map(r.a)
      n.a = e.i(i.a)(a)
    },
    function(t, n, e) {
      'use strict'
      e.d(n, 'b', function() {
        return a
      })
      var r = e(0),
        i = e(1),
        a = new Array(3)
          .concat(
            'ef8a62ffffff999999',
            'ca0020f4a582bababa404040',
            'ca0020f4a582ffffffbababa404040',
            'b2182bef8a62fddbc7e0e0e09999994d4d4d',
            'b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d',
            'b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d',
            'b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d',
            '67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a',
            '67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a'
          )
          .map(r.a)
      n.a = e.i(i.a)(a)
    },
    function(t, n, e) {
      'use strict'
      e.d(n, 'b', function() {
        return a
      })
      var r = e(0),
        i = e(1),
        a = new Array(3)
          .concat(
            'fc8d59ffffbf91bfdb',
            'd7191cfdae61abd9e92c7bb6',
            'd7191cfdae61ffffbfabd9e92c7bb6',
            'd73027fc8d59fee090e0f3f891bfdb4575b4',
            'd73027fc8d59fee090ffffbfe0f3f891bfdb4575b4',
            'd73027f46d43fdae61fee090e0f3f8abd9e974add14575b4',
            'd73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4',
            'a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695',
            'a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695'
          )
          .map(r.a)
      n.a = e.i(i.a)(a)
    },
    function(t, n, e) {
      'use strict'
      e.d(n, 'b', function() {
        return a
      })
      var r = e(0),
        i = e(1),
        a = new Array(3)
          .concat(
            'fc8d59ffffbf91cf60',
            'd7191cfdae61a6d96a1a9641',
            'd7191cfdae61ffffbfa6d96a1a9641',
            'd73027fc8d59fee08bd9ef8b91cf601a9850',
            'd73027fc8d59fee08bffffbfd9ef8b91cf601a9850',
            'd73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850',
            'd73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850',
            'a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837',
            'a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837'
          )
          .map(r.a)
      n.a = e.i(i.a)(a)
    },
    function(t, n, e) {
      'use strict'
      e.d(n, 'b', function() {
        return a
      })
      var r = e(0),
        i = e(1),
        a = new Array(3)
          .concat(
            'fc8d59ffffbf99d594',
            'd7191cfdae61abdda42b83ba',
            'd7191cfdae61ffffbfabdda42b83ba',
            'd53e4ffc8d59fee08be6f59899d5943288bd',
            'd53e4ffc8d59fee08bffffbfe6f59899d5943288bd',
            'd53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd',
            'd53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd',
            '9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2',
            '9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2'
          )
          .map(r.a)
      n.a = e.i(i.a)(a)
    },
    function(t, n, e) {
      'use strict'
      e.d(n, 'b', function() {
        return a
      })
      var r = e(0),
        i = e(1),
        a = new Array(3)
          .concat(
            'e5f5f999d8c92ca25f',
            'edf8fbb2e2e266c2a4238b45',
            'edf8fbb2e2e266c2a42ca25f006d2c',
            'edf8fbccece699d8c966c2a42ca25f006d2c',
            'edf8fbccece699d8c966c2a441ae76238b45005824',
            'f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824',
            'f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b'
          )
          .map(r.a)
      n.a = e.i(i.a)(a)
    },
    function(t, n, e) {
      'use strict'
      e.d(n, 'b', function() {
        return a
      })
      var r = e(0),
        i = e(1),
        a = new Array(3)
          .concat(
            'e0ecf49ebcda8856a7',
            'edf8fbb3cde38c96c688419d',
            'edf8fbb3cde38c96c68856a7810f7c',
            'edf8fbbfd3e69ebcda8c96c68856a7810f7c',
            'edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b',
            'f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b',
            'f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b'
          )
          .map(r.a)
      n.a = e.i(i.a)(a)
    },
    function(t, n, e) {
      'use strict'
      e.d(n, 'b', function() {
        return a
      })
      var r = e(0),
        i = e(1),
        a = new Array(3)
          .concat(
            'e0f3dba8ddb543a2ca',
            'f0f9e8bae4bc7bccc42b8cbe',
            'f0f9e8bae4bc7bccc443a2ca0868ac',
            'f0f9e8ccebc5a8ddb57bccc443a2ca0868ac',
            'f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e',
            'f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e',
            'f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081'
          )
          .map(r.a)
      n.a = e.i(i.a)(a)
    },
    function(t, n, e) {
      'use strict'
      e.d(n, 'b', function() {
        return a
      })
      var r = e(0),
        i = e(1),
        a = new Array(3)
          .concat(
            'fee8c8fdbb84e34a33',
            'fef0d9fdcc8afc8d59d7301f',
            'fef0d9fdcc8afc8d59e34a33b30000',
            'fef0d9fdd49efdbb84fc8d59e34a33b30000',
            'fef0d9fdd49efdbb84fc8d59ef6548d7301f990000',
            'fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000',
            'fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000'
          )
          .map(r.a)
      n.a = e.i(i.a)(a)
    },
    function(t, n, e) {
      'use strict'
      e.d(n, 'b', function() {
        return a
      })
      var r = e(0),
        i = e(1),
        a = new Array(3)
          .concat(
            'ece7f2a6bddb2b8cbe',
            'f1eef6bdc9e174a9cf0570b0',
            'f1eef6bdc9e174a9cf2b8cbe045a8d',
            'f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d',
            'f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b',
            'fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b',
            'fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858'
          )
          .map(r.a)
      n.a = e.i(i.a)(a)
    },
    function(t, n, e) {
      'use strict'
      e.d(n, 'b', function() {
        return a
      })
      var r = e(0),
        i = e(1),
        a = new Array(3)
          .concat(
            'ece2f0a6bddb1c9099',
            'f6eff7bdc9e167a9cf02818a',
            'f6eff7bdc9e167a9cf1c9099016c59',
            'f6eff7d0d1e6a6bddb67a9cf1c9099016c59',
            'f6eff7d0d1e6a6bddb67a9cf3690c002818a016450',
            'fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450',
            'fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636'
          )
          .map(r.a)
      n.a = e.i(i.a)(a)
    },
    function(t, n, e) {
      'use strict'
      e.d(n, 'b', function() {
        return a
      })
      var r = e(0),
        i = e(1),
        a = new Array(3)
          .concat(
            'e7e1efc994c7dd1c77',
            'f1eef6d7b5d8df65b0ce1256',
            'f1eef6d7b5d8df65b0dd1c77980043',
            'f1eef6d4b9dac994c7df65b0dd1c77980043',
            'f1eef6d4b9dac994c7df65b0e7298ace125691003f',
            'f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f',
            'f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f'
          )
          .map(r.a)
      n.a = e.i(i.a)(a)
    },
    function(t, n, e) {
      'use strict'
      e.d(n, 'b', function() {
        return a
      })
      var r = e(0),
        i = e(1),
        a = new Array(3)
          .concat(
            'fde0ddfa9fb5c51b8a',
            'feebe2fbb4b9f768a1ae017e',
            'feebe2fbb4b9f768a1c51b8a7a0177',
            'feebe2fcc5c0fa9fb5f768a1c51b8a7a0177',
            'feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177',
            'fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177',
            'fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a'
          )
          .map(r.a)
      n.a = e.i(i.a)(a)
    },
    function(t, n, e) {
      'use strict'
      e.d(n, 'b', function() {
        return a
      })
      var r = e(0),
        i = e(1),
        a = new Array(3)
          .concat(
            'f7fcb9addd8e31a354',
            'ffffccc2e69978c679238443',
            'ffffccc2e69978c67931a354006837',
            'ffffccd9f0a3addd8e78c67931a354006837',
            'ffffccd9f0a3addd8e78c67941ab5d238443005a32',
            'ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32',
            'ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529'
          )
          .map(r.a)
      n.a = e.i(i.a)(a)
    },
    function(t, n, e) {
      'use strict'
      e.d(n, 'b', function() {
        return a
      })
      var r = e(0),
        i = e(1),
        a = new Array(3)
          .concat(
            'edf8b17fcdbb2c7fb8',
            'ffffcca1dab441b6c4225ea8',
            'ffffcca1dab441b6c42c7fb8253494',
            'ffffccc7e9b47fcdbb41b6c42c7fb8253494',
            'ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84',
            'ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84',
            'ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58'
          )
          .map(r.a)
      n.a = e.i(i.a)(a)
    },
    function(t, n, e) {
      'use strict'
      e.d(n, 'b', function() {
        return a
      })
      var r = e(0),
        i = e(1),
        a = new Array(3)
          .concat(
            'fff7bcfec44fd95f0e',
            'ffffd4fed98efe9929cc4c02',
            'ffffd4fed98efe9929d95f0e993404',
            'ffffd4fee391fec44ffe9929d95f0e993404',
            'ffffd4fee391fec44ffe9929ec7014cc4c028c2d04',
            'ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04',
            'ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506'
          )
          .map(r.a)
      n.a = e.i(i.a)(a)
    },
    function(t, n, e) {
      'use strict'
      e.d(n, 'b', function() {
        return a
      })
      var r = e(0),
        i = e(1),
        a = new Array(3)
          .concat(
            'ffeda0feb24cf03b20',
            'ffffb2fecc5cfd8d3ce31a1c',
            'ffffb2fecc5cfd8d3cf03b20bd0026',
            'ffffb2fed976feb24cfd8d3cf03b20bd0026',
            'ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026',
            'ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026',
            'ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026'
          )
          .map(r.a)
      n.a = e.i(i.a)(a)
    },
    function(t, n, e) {
      'use strict'
      e.d(n, 'b', function() {
        return a
      })
      var r = e(0),
        i = e(1),
        a = new Array(3)
          .concat(
            'deebf79ecae13182bd',
            'eff3ffbdd7e76baed62171b5',
            'eff3ffbdd7e76baed63182bd08519c',
            'eff3ffc6dbef9ecae16baed63182bd08519c',
            'eff3ffc6dbef9ecae16baed64292c62171b5084594',
            'f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594',
            'f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b'
          )
          .map(r.a)
      n.a = e.i(i.a)(a)
    },
    function(t, n, e) {
      'use strict'
      e.d(n, 'b', function() {
        return a
      })
      var r = e(0),
        i = e(1),
        a = new Array(3)
          .concat(
            'e5f5e0a1d99b31a354',
            'edf8e9bae4b374c476238b45',
            'edf8e9bae4b374c47631a354006d2c',
            'edf8e9c7e9c0a1d99b74c47631a354006d2c',
            'edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32',
            'f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32',
            'f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b'
          )
          .map(r.a)
      n.a = e.i(i.a)(a)
    },
    function(t, n, e) {
      'use strict'
      e.d(n, 'b', function() {
        return a
      })
      var r = e(0),
        i = e(1),
        a = new Array(3)
          .concat(
            'f0f0f0bdbdbd636363',
            'f7f7f7cccccc969696525252',
            'f7f7f7cccccc969696636363252525',
            'f7f7f7d9d9d9bdbdbd969696636363252525',
            'f7f7f7d9d9d9bdbdbd969696737373525252252525',
            'fffffff0f0f0d9d9d9bdbdbd969696737373525252252525',
            'fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000'
          )
          .map(r.a)
      n.a = e.i(i.a)(a)
    },
    function(t, n, e) {
      'use strict'
      e.d(n, 'b', function() {
        return a
      })
      var r = e(0),
        i = e(1),
        a = new Array(3)
          .concat(
            'fee6cefdae6be6550d',
            'feeddefdbe85fd8d3cd94701',
            'feeddefdbe85fd8d3ce6550da63603',
            'feeddefdd0a2fdae6bfd8d3ce6550da63603',
            'feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04',
            'fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04',
            'fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704'
          )
          .map(r.a)
      n.a = e.i(i.a)(a)
    },
    function(t, n, e) {
      'use strict'
      e.d(n, 'b', function() {
        return a
      })
      var r = e(0),
        i = e(1),
        a = new Array(3)
          .concat(
            'efedf5bcbddc756bb1',
            'f2f0f7cbc9e29e9ac86a51a3',
            'f2f0f7cbc9e29e9ac8756bb154278f',
            'f2f0f7dadaebbcbddc9e9ac8756bb154278f',
            'f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486',
            'fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486',
            'fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d'
          )
          .map(r.a)
      n.a = e.i(i.a)(a)
    },
    function(t, n, e) {
      'use strict'
      e.d(n, 'b', function() {
        return a
      })
      var r = e(0),
        i = e(1),
        a = new Array(3)
          .concat(
            'fee0d2fc9272de2d26',
            'fee5d9fcae91fb6a4acb181d',
            'fee5d9fcae91fb6a4ade2d26a50f15',
            'fee5d9fcbba1fc9272fb6a4ade2d26a50f15',
            'fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d',
            'fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d',
            'fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d'
          )
          .map(r.a)
      n.a = e.i(i.a)(a)
    },
    function(t, n) {},
  ])
})
