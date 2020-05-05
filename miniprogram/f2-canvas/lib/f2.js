! function(t, e) {
  "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.F2 = e() : t.F2 = e()
}(this, function() {
  return function(t) {
    function e(r) {
      if (n[r]) return n[r].exports;
      var i = n[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports
    }
    var n = {};
    return e.m = t, e.c = n, e.d = function(t, n, r) {
      e.o(t, n) || Object.defineProperty(t, n, {
        configurable: !1,
        enumerable: !0,
        get: r
      })
    }, e.n = function(t) {
      var n = t && t.__esModule ? function() {
        return t.default
      } : function() {
        return t
      };
      return e.d(n, "a", n), n
    }, e.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "", e(e.s = 126)
  }([function(t, e, n) {
    var r = n(44),
      i = {
        upperFirst: n(45),
        lowerFirst: n(46),
        isString: n(14),
        isNumber: n(17),
        isBoolean: n(47),
        isFunction: n(48),
        isDate: n(33),
        isArray: n(11),
        isNil: n(5),
        isObject: n(18),
        isPlainObject: n(28),
        deepMix: n(50),
        mix: n(15),
        each: n(3),
        wrapBehavior: function(t, e) {
          if (t["_wrap_" + e]) return t["_wrap_" + e];
          var n = function(n) {
            t[e](n)
          };
          return t["_wrap_" + e] = n, n
        },
        getWrapBehavior: function(t, e) {
          return t["_wrap_" + e]
        },
        parsePadding: function(t) {
          var e = void 0,
            n = void 0,
            r = void 0,
            o = void 0;
          return i.isNumber(t) || i.isString(t) ? e = r = o = n = t : i.isArray(t) && (e = t[0], n = i.isNil(t[1]) ? t[0] : t[1], r = i.isNil(t[2]) ? t[0] : t[2], o = i.isNil(t[3]) ? n : t[3]), [e, n, r, o]
        }
      };
    i.Array = {
      merge: function(t) {
        for (var e = [], n = 0, r = t.length; n < r; n++) e = e.concat(t[n]);
        return e
      },
      values: function(t, e) {
        for (var n = [], r = {}, o = 0, a = t.length; o < a; o++) {
          var s = t[o][e];
          i.isNil(s) || (i.isArray(s) ? i.each(s, function(t) {
            r[t] || (n.push(t), r[t] = !0)
          }) : r[s] || (n.push(s), r[s] = !0))
        }
        return n
      },
      firstValue: function(t, e) {
        for (var n = null, r = 0, o = t.length; r < o; r++) {
          var a = t[r][e];
          if (!i.isNil(a)) {
            n = i.isArray(a) ? a[0] : a;
            break
          }
        }
        return n
      },
      group: function(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (!e) return [t];
        var r = i.Array.groupToMap(t, e),
          o = [];
        if (1 === e.length && n[e[0]]) {
          var a = n[e[0]];
          i.each(a, function(t) {
            t = "_" + t, o.push(r[t])
          })
        } else
          for (var s in r) o.push(r[s]);
        return o
      },
      groupToMap: function(t, e) {
        if (!e) return {
          0: t
        };
        for (var n = {}, r = 0, i = t.length; r < i; r++) {
          var o = t[r],
            a = function(t) {
              for (var n = "_", r = 0, i = e.length; r < i; r++) n += t[e[r]] && t[e[r]].toString();
              return n
            }(o);
          n[a] ? n[a].push(o) : n[a] = [o]
        }
        return n
      },
      remove: function(t, e) {
        if (t) {
          var n = t.indexOf(e); - 1 !== n && t.splice(n, 1)
        }
      }
    }, i.mix(i, r), t.exports = i
  }, function(t, e, n) {
    var r = n(43),
      i = n(0),
      o = {
        version: "3.2.0-beta.11",
        trackable: !0,
        scales: {},
        widthRatio: {
          column: .5,
          rose: .999999,
          multiplePie: .75
        },
        lineDash: [4, 4]
      };
    o.setTheme = function(t) {
      i.mix(this, t)
    }, o.setTheme(r), t.exports = o
  }, function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var a = n(0),
      s = function(t) {
        function e() {
          return r(this, e), i(this, t.apply(this, arguments))
        }
        return o(e, t), e.prototype._initProperties = function() {
          this._attrs = {
            zIndex: 0,
            visible: !0,
            destroyed: !1,
            isShape: !0,
            attrs: {}
          }
        }, e.prototype.drawInner = function(t) {
          var e = this,
            n = e.get("attrs");
          e.createPath(t);
          var r = t.globalAlpha;
          if (e.hasFill()) {
            var i = n.fillOpacity;
            a.isNil(i) || 1 === i ? t.fill() : (t.globalAlpha = i, t.fill(), t.globalAlpha = r)
          }
          if (e.hasStroke() && n.lineWidth > 0) {
            var o = n.strokeOpacity;
            a.isNil(o) || 1 === o || (t.globalAlpha = o), t.stroke()
          }
        }, e.prototype.getBBox = function() {
          var t = this._attrs.bbox;
          return t || ((t = this.calculateBox()) && (t.x = t.minX, t.y = t.minY, t.width = t.maxX - t.minX, t.height = t.maxY - t.minY), this._attrs.bbox = t), t
        }, e.prototype.calculateBox = function() {
          return null
        }, e.prototype.createPath = function() {}, e
      }(n(25));
    t.exports = s
  }, function(t, e, n) {
    var r = n(18),
      i = n(11);
    t.exports = function(t, e) {
      if (t)
        if (i(t))
          for (var n = 0, o = t.length; n < o && !1 !== e(t[n], n); n++);
        else if (r(t))
        for (var a in t)
          if (t.hasOwnProperty(a) && !1 === e(t[a], a)) break
    }
  }, function(t, e) {
    t.exports = {
      create: function() {
        return [0, 0]
      },
      length: function(t) {
        var e = t[0],
          n = t[1];
        return Math.sqrt(e * e + n * n)
      },
      normalize: function(t, e) {
        var n = this.length(e);
        return 0 === n ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / n, t[1] = e[1] / n), t
      },
      add: function(t, e, n) {
        return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t
      },
      sub: function(t, e, n) {
        return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t
      },
      scale: function(t, e, n) {
        return t[0] = e[0] * n, t[1] = e[1] * n, t
      },
      dot: function(t, e) {
        return t[0] * e[0] + t[1] * e[1]
      },
      direction: function(t, e) {
        return t[0] * e[1] - e[0] * t[1]
      },
      angle: function(t, e) {
        var n = this.dot(t, e) / (this.length(t) * this.length(e));
        return Math.acos(n)
      },
      angleTo: function(t, e, n) {
        var r = this.angle(t, e),
          i = this.direction(t, e) >= 0;
        return n ? i ? 2 * Math.PI - r : r : i ? r : 2 * Math.PI - r
      },
      zero: function(t) {
        return 0 === t[0] && 0 === t[1]
      },
      distance: function(t, e) {
        var n = e[0] - t[0],
          r = e[1] - t[1];
        return Math.sqrt(n * n + r * r)
      },
      clone: function(t) {
        return [t[0], t[1]]
      },
      min: function(t, e, n) {
        return t[0] = Math.min(e[0], n[0]), t[1] = Math.min(e[1], n[1]), t
      },
      max: function(t, e, n) {
        return t[0] = Math.max(e[0], n[0]), t[1] = Math.max(e[1], n[1]), t
      },
      transformMat2d: function(t, e, n) {
        var r = e[0],
          i = e[1];
        return t[0] = n[0] * r + n[2] * i + n[4], t[1] = n[1] * r + n[3] * i + n[5], t
      }
    }
  }, function(t, e) {
    t.exports = function(t) {
      return null === t || void 0 === t
    }
  }, function(t, e) {
    var n = {}.toString;
    t.exports = function(t, e) {
      return n.call(t) === "[object " + e + "]"
    }
  }, function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function a(t) {
      return s.isArray(t) ? t : s.isString(t) ? t.split("*") : [t]
    }
    var s = n(0),
      c = n(29),
      u = ["color", "size", "shape"],
      l = n(1),
      f = n(54),
      p = n(8),
      h = n(21),
      y = function(t) {
        function e() {
          return r(this, e), i(this, t.apply(this, arguments))
        }
        return o(e, t), e.prototype.getDefaultCfg = function() {
          return {
            type: null,
            data: null,
            attrs: {},
            scales: {},
            container: null,
            styleOptions: null,
            chart: null,
            shapeType: "",
            generatePoints: !1,
            attrOptions: {},
            sortable: !1,
            startOnZero: !0,
            visible: !0,
            connectNulls: !1
          }
        }, e.prototype.init = function() {
          var t = this;
          t._initAttrs();
          var e = t._processData();
          t.get("adjust") && t._adjustData(e), t.set("dataArray", e)
        }, e.prototype._getGroupScales = function() {
          var t = this,
            e = [];
          return s.each(u, function(n) {
            var r = t.getAttr(n);
            if (r) {
              var i = r.scales;
              s.each(i, function(t) {
                t && t.isCategory && -1 === e.indexOf(t) && e.push(t)
              })
            }
          }), e
        }, e.prototype._groupData = function(t) {
          var e = this,
            n = e.get("colDefs"),
            r = e._getGroupScales();
          if (r.length) {
            var i = {},
              o = [];
            return s.each(r, function(t) {
              var e = t.field;
              o.push(e), n && n[e] && n[e].values && (i[t.field] = n[e].values)
            }), s.Array.group(t, o, i)
          }
          return [t]
        }, e.prototype._setAttrOptions = function(t, e) {
          this.get("attrOptions")[t] = e
        }, e.prototype._createAttrOption = function(t, e, n, r) {
          var i = {};
          i.field = e, n ? s.isFunction(n) ? i.callback = n : i.values = n : i.values = r, this._setAttrOptions(t, i)
        }, e.prototype._initAttrs = function() {
          var t = this,
            e = t.get("attrs"),
            n = t.get("attrOptions"),
            r = t.get("coord");
          for (var i in n)
            if (n.hasOwnProperty(i)) {
              var o = n[i],
                c = s.upperFirst(i),
                u = a(o.field);
              "position" === i && (o.coord = r);
              for (var l = [], p = 0, h = u.length; p < h; p++) {
                var y = u[p],
                  d = t._createScale(y);
                l.push(d)
              }
              if ("position" === i) {
                var g = l[1];
                "polar" === r.type && r.transposed && t.hasAdjust("stack") && g.values.length && g.change({
                  nice: !1,
                  min: 0,
                  max: Math.max.apply(null, g.values)
                })
              }
              o.scales = l;
              var v = new f[c](o);
              e[i] = v
            }
        }, e.prototype._createScale = function(t) {
          var e = this.get("scales"),
            n = e[t];
          return n || (n = this.get("chart").createScale(t), e[t] = n), n
        }, e.prototype._processData = function() {
          for (var t = this, e = this.get("data"), n = [], r = this._groupData(e), i = 0, o = r.length; i < o; i++) {
            var a = r[i],
              s = t._saveOrigin(a);
            this.hasAdjust("dodge") && t._numberic(s), n.push(s)
          }
          return n
        }, e.prototype._saveOrigin = function(t) {
          for (var e = [], n = 0, r = t.length; n < r; n++) {
            var i = t[n],
              o = {};
            for (var a in i) o[a] = i[a];
            o._origin = i, e.push(o)
          }
          return e
        }, e.prototype._numberic = function(t) {
          for (var e = this.getAttr("position").scales, n = 0, r = t.length; n < r; n++)
            for (var i = t[n], o = Math.min(2, e.length), a = 0; a < o; a++) {
              var s = e[a];
              if (s.isCategory) {
                var c = s.field;
                i[c] = s.translate(i[c])
              }
            }
        }, e.prototype._adjustData = function(t) {
          var e = this,
            n = e.get("adjust");
          if (n) {
            var r = s.upperFirst(n.type);
            if (!h[r]) throw new Error("not support such adjust : " + n);
            var i = e.getXScale(),
              o = e.getYScale(),
              a = s.mix({
                xField: i.field,
                yField: o.field
              }, n);
            new h[r](a).processAdjust(t), "Stack" === r && e._updateStackRange(o.field, o, t)
          }
        }, e.prototype._updateStackRange = function(t, e, n) {
          for (var r = s.Array.merge(n), i = e.min, o = e.max, a = 0, c = r.length; a < c; a++) {
            var u = r[a],
              l = Math.min.apply(null, u[t]),
              f = Math.max.apply(null, u[t]);
            l < i && (i = l), f > o && (o = f)
          }(i < e.min || o > e.max) && e.change({
            min: i,
            max: o
          })
        }, e.prototype._sort = function(t) {
          var e = this,
            n = e.getXScale(),
            r = n.field,
            i = n.type;
          (n.isLinear || "timeCat" === i) && n.values.length > 1 && s.each(t, function(t) {
            t.sort(function(t, e) {
              return "timeCat" === i ? n._toTimeStamp(t._origin[r]) - n._toTimeStamp(e._origin[r]) : n.translate(t._origin[r]) - n.translate(e._origin[r])
            })
          }), e.set("hasSorted", !0), e.set("dataArray", t)
        }, e.prototype.paint = function() {
          var t = this,
            e = t.get("dataArray"),
            n = [],
            r = t.getShapeFactory();
          r.setCoord(t.get("coord")), t._beforeMapping(e);
          for (var i = 0, o = e.length; i < o; i++) {
            var a = e[i];
            a = t._mapping(a), n.push(a), t.draw(a, r)
          }
          t.set("dataArray", n)
        }, e.prototype.getShapeFactory = function() {
          var t = this.get("shapeFactory");
          if (!t) {
            var e = this.get("shapeType");
            t = p.getShapeFactory(e), this.set("shapeFactory", t)
          }
          return t
        }, e.prototype._mapping = function(t) {
          for (var e = this, n = e.get("attrs"), r = e.getYScale().field, i = [], o = 0, a = t.length; o < a; o++) {
            var c = t[o],
              u = {};
            u._origin = c._origin, u.points = c.points, u._originY = c[r];
            for (var l in n)
              if (n.hasOwnProperty(l)) {
                var f = n[l],
                  p = f.names,
                  h = e._getAttrValues(f, c);
                if (p.length > 1)
                  for (var y = 0, d = h.length; y < d; y++) {
                    var g = h[y];
                    u[p[y]] = s.isArray(g) && 1 === g.length ? g[0] : g
                  } else u[p[0]] = 1 === h.length ? h[0] : h
              }
            i.push(u)
          }
          return i
        }, e.prototype._getAttrValues = function(t, e) {
          for (var n = t.scales, r = [], i = 0, o = n.length; i < o; i++) {
            var a = n[i],
              s = a.field;
            "identity" === a.type ? r.push(a.value) : r.push(e[s])
          }
          return t.mapping.apply(t, r)
        }, e.prototype.getAttrValue = function(t, e) {
          var n = this.getAttr(t),
            r = null;
          return n && (r = this._getAttrValues(n, e)[0]), r
        }, e.prototype._beforeMapping = function(t) {
          var e = this;
          e.get("sortable") && e._sort(t), e.get("generatePoints") && s.each(t, function(t) {
            e._generatePoints(t)
          })
        }, e.prototype.isInCircle = function() {
          var t = this.get("coord");
          return t && t.isPolar
        }, e.prototype.getCallbackCfg = function(t, e, n) {
          if (!t) return e;
          var r = {},
            i = t.map(function(t) {
              return n[t]
            });
          return s.each(e, function(t, e) {
            s.isFunction(t) ? r[e] = t.apply(null, i) : r[e] = t
          }), r
        }, e.prototype.getDrawCfg = function(t) {
          var e = this,
            n = e.isInCircle(),
            r = {
              origin: t,
              x: t.x,
              y: t.y,
              color: t.color,
              size: t.size,
              shape: t.shape,
              isInCircle: n,
              opacity: t.opacity
            },
            i = e.get("styleOptions");
          return i && i.style && (r.style = e.getCallbackCfg(i.fields, i.style, t._origin)), e.get("generatePoints") && (r.points = t.points), n && (r.center = e.get("coord").center), r
        }, e.prototype.draw = function(t, e) {
          var n = this,
            r = n.get("container"),
            i = n.getYScale();
          s.each(t, function(t, o) {
            if (!i || !s.isNil(t._origin[i.field])) {
              t.index = o;
              var a = n.getDrawCfg(t),
                c = t.shape;
              n.drawShape(c, t, a, r, e)
            }
          })
        }, e.prototype.drawShape = function(t, e, n, r, i) {
          var o = i.drawShape(t, n, r);
          o && s.each([].concat(o), function(t) {
            t.set("origin", e)
          })
        }, e.prototype._generatePoints = function(t) {
          for (var e = this, n = e.getShapeFactory(), r = e.getAttr("shape"), i = 0, o = t.length; i < o; i++) {
            var a = t[i],
              s = e.createShapePointsCfg(a),
              c = r ? e._getAttrValues(r, a) : null,
              u = n.getShapePoints(c, s);
            a.points = u
          }
        }, e.prototype.createShapePointsCfg = function(t) {
          var e = this.getXScale(),
            n = this.getYScale(),
            r = this._normalizeValues(t[e.field], e),
            i = void 0;
          return i = n ? this._normalizeValues(t[n.field], n) : t.y ? t.y : .1, {
            x: r,
            y: i,
            y0: n ? n.scale(this.getYMinValue()) : void 0
          }
        }, e.prototype.getYMinValue = function() {
          var t = this.getYScale(),
            e = t.min,
            n = t.max;
          return this.get("startOnZero") ? n <= 0 && e <= 0 ? n : e >= 0 ? e : 0 : e
        }, e.prototype._normalizeValues = function(t, e) {
          var n = [];
          if (s.isArray(t))
            for (var r = 0, i = t.length; r < i; r++) {
              var o = t[r];
              n.push(e.scale(o))
            } else n = e.scale(t);
          return n
        }, e.prototype.getAttr = function(t) {
          return this.get("attrs")[t]
        }, e.prototype.getXScale = function() {
          return this.getAttr("position").scales[0]
        }, e.prototype.getYScale = function() {
          return this.getAttr("position").scales[1]
        }, e.prototype.hasAdjust = function(t) {
          return this.get("adjust") && this.get("adjust").type === t
        }, e.prototype._getSnap = function(t, e, n) {
          var r = 0,
            i = void 0,
            o = this.getYScale().field;
          if (this.hasAdjust("stack") && t.field === o) {
            i = [], n.forEach(function(t) {
              i.push(t._originY)
            });
            for (var a = i.length; r < a && !(i[0][0] > e); r++) {
              if (i[i.length - 1][1] <= e) {
                r = i.length - 1;
                break
              }
              if (i[r][0] <= e && i[r][1] > e) break
            }
          } else {
            (i = t.values).sort(function(t, e) {
              return t - e
            });
            for (var s = i.length; r < s && !((i[0] + i[1]) / 2 > e) && !((i[r - 1] + i[r]) / 2 <= e && (i[r + 1] + i[r]) / 2 > e); r++)
              if ((i[i.length - 2] + i[i.length - 1]) / 2 <= e) {
                r = i.length - 1;
                break
              }
          }
          return i[r]
        }, e.prototype.getSnapRecords = function(t) {
          var e = this,
            n = e.get("coord"),
            r = e.getXScale(),
            i = e.getYScale(),
            o = r.field,
            a = e.get("dataArray");
          this.get("hasSorted") || this._sort(a);
          var c = [],
            u = n.invertPoint(t),
            l = u.x;
          e.isInCircle() && !n.transposed && l > (1 + r.rangeMax()) / 2 && (l = r.rangeMin());
          var f = r.invert(l);
          r.isCategory || (f = e._getSnap(r, f));
          var p = [];
          if (a.forEach(function(t) {
              t.forEach(function(t) {
                var n = s.isNil(t._origin) ? t[o] : t._origin[o];
                e._isEqual(n, f, r) && p.push(t)
              })
            }), this.hasAdjust("stack") && n.isPolar && n.transposed && 1 === r.values.length) {
            if (l >= 0 && l <= 1) {
              var h = i.invert(u.y);
              h = e._getSnap(i, h, p), p.forEach(function(t) {
                (s.isArray(h) ? t._originY.toString() === h.toString() : t._originY === h) && c.push(t)
              })
            }
          } else c = p;
          return c
        }, e.prototype._isEqual = function(t, e, n) {
          return "timeCat" === n.type ? n._toTimeStamp(t) === e : e === t
        }, e.prototype.position = function(t) {
          return this._setAttrOptions("position", {
            field: t
          }), this
        }, e.prototype.color = function(t, e) {
          return this._createAttrOption("color", t, e, l.colors), this
        }, e.prototype.size = function(t, e) {
          return this._createAttrOption("size", t, e, l.sizes), this
        }, e.prototype.shape = function(t, e) {
          var n = this.get("type"),
            r = l.shapes[n] || [];
          return this._createAttrOption("shape", t, e, r), this
        }, e.prototype.style = function(t, e) {
          var n = this.get("styleOptions");
          n || (n = {}, this.set("styleOptions", n)), s.isObject(t) && (e = t, t = null);
          var r = void 0;
          return t && (r = a(t)), n.fields = r, n.style = e, this
        }, e.prototype.adjust = function(t) {
          return s.isString(t) && (t = {
            type: t
          }), this.set("adjust", t), this
        }, e.prototype.animate = function(t) {
          return this.set("animateCfg", t), this
        }, e.prototype.reset = function() {
          this.set("attrOptions", {}), this.set("adjust", null), this.clearInner()
        }, e.prototype.clearInner = function() {
          var t = this.get("container");
          t && (t.clear(), t.setMatrix([1, 0, 0, 1, 0, 0])), t && t.clear(), this.set("attrs", {}), this.set("groupScales", null), this.set("xDistance", null)
        }, e.prototype.clear = function() {
          this.clearInner(), this.set("scales", {})
        }, e.prototype.destroy = function() {
          this.clear(), t.prototype.destroy.call(this)
        }, e.prototype._display = function(t) {
          this.set("visible", t);
          var e = this.get("container"),
            n = e.get("canvas");
          e.set("visible", t), n.draw()
        }, e.prototype.show = function() {
          this._display(!0)
        }, e.prototype.hide = function() {
          this._display(!1)
        }, e
      }(c);
    t.exports = y
  }, function(t, e, n) {
    var r = n(0),
      i = n(1),
      o = {},
      a = {
        _coord: null,
        draw: function(t, e) {
          this.drawShape && this.drawShape(t, e)
        },
        setCoord: function(t) {
          this._coord = t
        },
        parsePoint: function(t) {
          var e = this._coord;
          return e.isPolar && (1 === t.x && (t.x = .9999999), 1 === t.y && (t.y = .9999999)), e.convertPoint(t)
        },
        parsePoints: function(t) {
          if (!t) return !1;
          var e = this,
            n = [];
          return t.forEach(function(t) {
            n.push(e.parsePoint(t))
          }), n
        }
      },
      s = {
        defaultShapeType: null,
        setCoord: function(t) {
          this._coord = t
        },
        getShape: function(t) {
          var e = this;
          r.isArray(t) && (t = t[0]);
          var n = e[t] || e[e.defaultShapeType];
          return n._coord = e._coord, n
        },
        getShapePoints: function(t, e) {
          var n = this.getShape(t);
          return (n.getPoints || n.getShapePoints || this.getDefaultPoints)(e)
        },
        getDefaultPoints: function() {
          return []
        },
        drawShape: function(t, e, n) {
          var r = this.getShape(t);
          return e.color || (e.color = i.colors[0]), r.draw(e, n)
        }
      };
    o.registerFactory = function(t, e) {
      var n = r.upperFirst(t),
        i = r.mix({}, s, e);
      return o[n] = i, i.name = t, i
    }, o.registerShape = function(t, e, n) {
      var i = r.upperFirst(t),
        s = o[i],
        c = r.mix({}, a, n);
      return s[e] = c, c
    }, o.registShape = o.registerShape, o.getShapeFactory = function(t) {
      var e = this;
      return t = t || "point", e[r.upperFirst(t)]
    }, t.exports = o
  }, function(t, e, n) {
    var r = {
      Canvas: n(69),
      Group: n(31),
      Shape: n(2),
      Matrix: n(22),
      Vector2: n(4)
    };
    n(70), n(71), n(72), n(73), n(74), n(75), n(76), n(77), n(78), t.exports = r
  }, function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    var i = n(0),
      o = {
        min: 0,
        median: .5,
        max: 1
      },
      a = function() {
        function t(e) {
          r(this, t), this._initDefaultCfg(), i.deepMix(this, e)
        }
        return t.prototype._initDefaultCfg = function() {}, t.prototype._getNormalizedValue = function(t, e) {
          return i.isNil(o[t]) ? e.scale(t) : o[t]
        }, t.prototype.parsePercentPoint = function(t, e) {
          var n = parseFloat(e[0]) / 100,
            r = parseFloat(e[1]) / 100,
            i = t.start,
            o = t.end,
            a = Math.abs(i.x - o.x),
            s = Math.abs(i.y - o.y);
          return {
            x: a * n + Math.min(i.x, o.x),
            y: s * r + Math.min(i.y, o.y)
          }
        }, t.prototype.parsePoint = function(t, e) {
          var n = this,
            r = n.xScale,
            o = n.yScales;
          if (i.isFunction(e) && (e = e(r, o)), i.isString(e[0]) && -1 !== e[0].indexOf("%")) return this.parsePercentPoint(t, e);
          var a = n._getNormalizedValue(e[0], r),
            s = n._getNormalizedValue(e[1], o[0]),
            c = t.convertPoint({
              x: a,
              y: s
            });
          return n.limitInPlot ? a >= 0 && a <= 1 && s >= 0 && s <= 1 ? c : null : c
        }, t.prototype.render = function() {}, t.prototype.remove = function() {
          var t = this.element;
          t && t.remove(!0)
        }, t
      }();
    t.exports = a
  }, function(t, e, n) {
    var r = n(6),
      i = Array.isArray ? Array.isArray : function(t) {
        return r(t, "Array")
      };
    t.exports = i
  }, function(t, e, n) {
    function r(t, e, n, r, o) {
      return {
        x: i(o, t.x, e.x, n.x, r.x),
        y: i(o, t.y, e.y, n.y, r.y)
      }
    }

    function i(t, e, n, r, i) {
      var o = t * t;
      return e + (3 * -e + t * (3 * e - e * t)) * t + (3 * n + t * (-6 * n + 3 * n * t)) * t + (3 * r - 3 * r * t) * o + i * (o * t)
    }

    function o(t) {
      for (var e = 1 / 0, n = -1 / 0, i = 1 / 0, o = -1 / 0, a = {
          x: t[0],
          y: t[1]
        }, s = {
          x: t[2],
          y: t[3]
        }, c = {
          x: t[4],
          y: t[5]
        }, u = {
          x: t[6],
          y: t[7]
        }, l = 0; l < 100; l++) {
        var f = r(a, s, c, u, l / 100);
        f.x < e && (e = f.x), f.x > n && (n = f.x), f.y < i && (i = f.y), f.y > o && (o = f.y)
      }
      return {
        minX: e,
        minY: i,
        maxX: n,
        maxY: o
      }
    }
    var a = n(4),
      s = a.create(),
      c = a.create(),
      u = a.create();
    t.exports = {
      getBBoxFromPoints: function(t) {
        if (0 !== t.length) {
          for (var e = t[0], n = e.x, r = e.x, i = e.y, o = e.y, a = t.length, s = 1; s < a; s++) e = t[s], n = Math.min(n, e.x), r = Math.max(r, e.x), i = Math.min(i, e.y), o = Math.max(o, e.y);
          return {
            minX: n,
            minY: i,
            maxX: r,
            maxY: o
          }
        }
      },
      getBBoxFromLine: function(t, e, n, r) {
        return {
          minX: Math.min(t, n),
          minY: Math.min(e, r),
          maxX: Math.max(t, n),
          maxY: Math.max(e, r)
        }
      },
      getBBoxFromArc: function(t, e, n, r, i, o) {
        var l = Math.abs(r - i);
        if (l % Math.PI * 2 < 1e-4 && l > 1e-4) return {
          minX: t - n,
          minY: e - n,
          maxX: t + n,
          maxY: e + n
        };
        s[0] = Math.cos(r) * n + t, s[1] = Math.sin(r) * n + e, c[0] = Math.cos(i) * n + t, c[1] = Math.sin(i) * n + e;
        var f = [0, 0],
          p = [0, 0];
        if (a.min(f, s, c), a.max(p, s, c), (r %= 2 * Math.PI) < 0 && (r += 2 * Math.PI), (i %= 2 * Math.PI) < 0 && (i += 2 * Math.PI), r > i && !o ? i += 2 * Math.PI : r < i && o && (r += 2 * Math.PI), o) {
          var h = i;
          i = r, r = h
        }
        for (var y = 0; y < i; y += Math.PI / 2) y > r && (u[0] = Math.cos(y) * n + t, u[1] = Math.sin(y) * n + e, a.min(f, u, f), a.max(p, u, p));
        return {
          minX: f[0],
          minY: f[1],
          maxX: p[0],
          maxY: p[1]
        }
      },
      getBBoxFromBezierGroup: function(t) {
        for (var e = 1 / 0, n = -1 / 0, r = 1 / 0, i = -1 / 0, a = 0, s = t.length; a < s; a++) {
          var c = o(t[a]);
          c.minX < e && (e = c.minX), c.maxX > n && (n = c.maxX), c.minY < r && (r = c.minY), c.maxY > i && (i = c.maxY)
        }
        return {
          minX: e,
          minY: r,
          maxX: n,
          maxY: i
        }
      }
    }
  }, function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    var i = n(15),
      o = n(3),
      a = n(18),
      s = n(5),
      c = function() {
        function t(e) {
          r(this, t), this._initDefaultCfg(), i(this, e), this.init()
        }
        return t.prototype._initDefaultCfg = function() {
          this.type = "base", this.formatter = null, this.range = [0, 1], this.ticks = null, this.values = []
        }, t.prototype.init = function() {}, t.prototype.getTicks = function() {
          var t = this,
            e = t.ticks,
            n = [];
          return o(e, function(e) {
            var r = void 0;
            r = a(e) ? e : {
              text: t.getText(e),
              tickValue: e,
              value: t.scale(e)
            }, n.push(r)
          }), n
        }, t.prototype.getText = function(t, e) {
          var n = this.formatter;
          return t = n ? n(t, e) : t, !s(t) && t.toString || (t = ""), t.toString()
        }, t.prototype.rangeMin = function() {
          return this.range[0]
        }, t.prototype.rangeMax = function() {
          var t = this.range;
          return t[t.length - 1]
        }, t.prototype.invert = function(t) {
          return t
        }, t.prototype.translate = function(t) {
          return t
        }, t.prototype.scale = function(t) {
          return t
        }, t.prototype.clone = function() {
          var t = this,
            e = t.constructor,
            n = {};
          return o(t, function(e, r) {
            n[r] = t[r]
          }), new e(n)
        }, t.prototype.change = function(t) {
          return this.ticks = null, i(this, t), this.init(), this
        }, t
      }();
    t.exports = c
  }, function(t, e, n) {
    var r = n(6);
    t.exports = function(t) {
      return r(t, "String")
    }
  }, function(t, e) {
    function n(t, e) {
      for (var n in e) e.hasOwnProperty(n) && "constructor" !== n && void 0 !== e[n] && (t[n] = e[n])
    }
    t.exports = function(t, e, r, i) {
      return e && n(t, e), r && n(t, r), i && n(t, i), t
    }
  }, function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
      return o(e) ? e : t.invert(t.scale(e))
    }
    var o = n(14),
      a = n(11),
      s = n(15),
      c = n(3),
      u = function() {
        function t(e) {
          r(this, t), this.type = "base", this.name = null, this.method = null, this.values = [], this.scales = [], this.linear = null, s(this, e)
        }
        return t.prototype._getAttrValue = function(t, e) {
          var n = this.values;
          if (t.isCategory && !this.linear) return n[t.translate(e) % n.length];
          var r = t.scale(e);
          return this.getLinearValue(r)
        }, t.prototype.getLinearValue = function(t) {
          var e = this.values,
            n = e.length - 1,
            r = Math.floor(n * t),
            i = n * t - r,
            o = e[r];
          return o + ((r === n ? o : e[r + 1]) - o) * i
        }, t.prototype.callback = function(t) {
          var e = this,
            n = e.scales[0];
          return "identity" === n.type ? n.value : e._getAttrValue(n, t)
        }, t.prototype.getNames = function() {
          for (var t = this.scales, e = this.names, n = Math.min(t.length, e.length), r = [], i = 0; i < n; i++) r.push(e[i]);
          return r
        }, t.prototype.getFields = function() {
          var t = this.scales,
            e = [];
          return c(t, function(t) {
            e.push(t.field)
          }), e
        }, t.prototype.getScale = function(t) {
          return this.scales[this.names.indexOf(t)]
        }, t.prototype.mapping = function() {
          for (var t = this.scales, e = this.callback, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
          var o = r;
          if (e) {
            for (var a = 0, s = r.length; a < s; a++) r[a] = this._toOriginParam(r[a], t[a]);
            o = e.apply(this, r)
          }
          return o = [].concat(o)
        }, t.prototype._toOriginParam = function(t, e) {
          var n = t;
          if (!e.isLinear)
            if (a(t)) {
              n = [];
              for (var r = 0, o = t.length; r < o; r++) n.push(i(e, t[r]))
            } else n = i(e, t);
          return n
        }, t
      }();
    t.exports = u
  }, function(t, e, n) {
    var r = n(6);
    t.exports = function(t) {
      return r(t, "Number")
    }
  }, function(t, e) {
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      },
      r = "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? function(t) {
        return void 0 === t ? "undefined" : n(t)
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : n(t)
      };
    t.exports = function(t) {
      var e = void 0 === t ? "undefined" : r(t);
      return null !== t && "object" === e || "function" === e
    }
  }, function(t, e, n) {
    var r = n(0),
      i = {
        splitPoints: function(t) {
          var e = [],
            n = t.x,
            i = t.y;
          return (i = r.isArray(i) ? i : [i]).forEach(function(t, i) {
            var o = {
              x: r.isArray(n) ? n[i] : n,
              y: t
            };
            e.push(o)
          }), e
        },
        splitArray: function(t, e, n) {
          if (!t.length) return [];
          var i = [],
            o = [],
            a = void 0;
          return r.each(t, function(t) {
            a = t._origin ? t._origin[e] : t[e], n ? r.isNil(a) || o.push(t) : r.isArray(a) && r.isNil(a[0]) || r.isNil(a) ? o.length && (i.push(o), o = []) : o.push(t)
          }), o.length && i.push(o), i
        }
      };
    t.exports = i
  }, function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    var i = n(0),
      o = function() {
        function t(e) {
          r(this, t), this._initDefaultCfg(), i.mix(this, e);
          var n = void 0,
            o = void 0;
          this.plot ? (n = this.plot.bl, o = this.plot.tr, this.start = n, this.end = o) : (n = this.start, o = this.end), this.init(n, o)
        }
        return t.prototype._initDefaultCfg = function() {}, t.prototype.init = function() {}, t.prototype.convertPoint = function(t) {
          return t
        }, t.prototype.invertPoint = function(t) {
          return t
        }, t.prototype.reset = function(t) {
          this.plot = t;
          var e = t.bl,
            n = t.tr;
          this.start = e, this.end = n, this.init(e, n)
        }, t
      }();
    t.exports = o
  }, function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    var i = n(15),
      o = function() {
        function t(e) {
          r(this, t), this._initDefaultCfg(), i(this, e)
        }
        return t.prototype._initDefaultCfg = function() {
          this.adjustNames = ["x", "y"]
        }, t.prototype.processAdjust = function() {}, t
      }();
    t.exports = o
  }, function(t, e) {
    var n = {
      multiply: function(t, e) {
        return [t[0] * e[0] + t[2] * e[1], t[1] * e[0] + t[3] * e[1], t[0] * e[2] + t[2] * e[3], t[1] * e[2] + t[3] * e[3], t[0] * e[4] + t[2] * e[5] + t[4], t[1] * e[4] + t[3] * e[5] + t[5]]
      },
      scale: function(t, e, n) {
        return t[0] = e[0] * n[0], t[1] = e[1] * n[0], t[2] = e[2] * n[1], t[3] = e[3] * n[1], t[4] = e[4], t[5] = e[5], t
      },
      rotate: function(t, e, n) {
        var r = Math.cos(n),
          i = Math.sin(n),
          o = e[0] * r + e[2] * i,
          a = e[1] * r + e[3] * i,
          s = e[0] * -i + e[2] * r,
          c = e[1] * -i + e[3] * r;
        return t[0] = o, t[1] = a, t[2] = s, t[3] = c, t[4] = e[4], t[5] = e[5], t
      },
      translate: function(t, e, n) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + e[0] * n[0] + e[2] * n[1], t[5] = e[5] + e[1] * n[0] + e[3] * n[1], t
      },
      transform: function(t, e) {
        for (var r = [].concat(t), i = 0, o = e.length; i < o; i++) {
          var a = e[i];
          switch (a[0]) {
            case "t":
              n.translate(r, r, [a[1], a[2]]);
              break;
            case "s":
              n.scale(r, r, [a[1], a[2]]);
              break;
            case "r":
              n.rotate(r, r, a[1])
          }
        }
        return r
      }
    };
    t.exports = n
  }, function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function a(t) {
      var e = t.startAngle,
        n = t.endAngle;
      return !(!f.isNil(e) && !f.isNil(n) && n - e < 2 * Math.PI)
    }

    function s(t, e) {
      return t - e
    }

    function c(t, e) {
      var n = !1;
      return f.each(t, function(t) {
        var r = [].concat(t.values),
          i = [].concat(e.values);
        t.type !== e.type || t.field !== e.field || r.sort(s).toString() !== i.sort(s).toString() || (n = !0)
      }), n
    }
    var u = n(29),
      l = n(51),
      f = n(0),
      p = n(52),
      h = n(7),
      y = n(60),
      d = n(66),
      g = n(1),
      v = n(9).Canvas,
      m = n(26),
      x = function(t) {
        function e(n) {
          r(this, e);
          var o = i(this, t.call(this, n)),
            a = o;
          return f.each(h, function(t, e) {
            var n = f.lowerFirst(e);
            a[n] = function(e) {
              var n = new t(e);
              return a.addGeom(n), n
            }
          }), a._init(), o
        }
        return o(e, t), e.initPlugins = function() {
          return {
            _plugins: [],
            _cacheId: 0,
            register: function(t) {
              var e = this._plugins;
              [].concat(t).forEach(function(t) {
                -1 === e.indexOf(t) && e.push(t)
              }), this._cacheId++
            },
            unregister: function(t) {
              var e = this._plugins;
              [].concat(t).forEach(function(t) {
                var n = e.indexOf(t); - 1 !== n && e.splice(n, 1)
              }), this._cacheId++
            },
            clear: function() {
              this._plugins = [], this._cacheId++
            },
            count: function() {
              return this._plugins.length
            },
            getAll: function() {
              return this._plugins
            },
            notify: function(t, e, n) {
              var r = this.descriptors(t),
                i = r.length,
                o = void 0,
                a = void 0,
                s = void 0,
                c = void 0,
                u = void 0;
              for (o = 0; o < i; ++o)
                if (a = r[o], s = a.plugin, "function" == typeof(u = s[e]) && (c = [t].concat(n || []), !1 === u.apply(s, c))) return !1;
              return !0
            },
            descriptors: function(t) {
              var e = t._plugins || (t._plugins = {});
              if (e.id === this._cacheId) return e.descriptors;
              var n = [],
                r = [];
              return this._plugins.concat(t && t.get("plugins") || []).forEach(function(t) {
                -1 === n.indexOf(t) && (n.push(t), r.push({
                  plugin: t
                }))
              }), e.descriptors = r, e.id = this._cacheId, r
            }
          }
        }, e.prototype.getDefaultCfg = function() {
          return {
            id: null,
            padding: g.padding,
            data: null,
            scales: {},
            geoms: null,
            colDefs: null,
            pixelRatio: g.pixelRatio,
            filters: null,
            appendPadding: g.appendPadding
          }
        }, e.prototype._getFieldsForLegend = function() {
          var t = [],
            e = this.get("geoms");
          return f.each(e, function(e) {
            var n = e.get("attrOptions").color;
            if (n && n.field && f.isString(n.field)) {
              var r = n.field.split("*");
              f.each(r, function(e) {
                -1 === t.indexOf(e) && t.push(e)
              })
            }
          }), t
        }, e.prototype._createScale = function(t, e) {
          return this.get("scaleController").createScale(t, e)
        }, e.prototype._adjustScale = function() {
          var t = this,
            e = t.get("coord"),
            n = t.getXScale(),
            r = t.getYScales(),
            i = [];
          n && i.push(n), i = i.concat(r);
          var o = e.isPolar && a(e),
            s = t.get("scaleController").defs;
          f.each(i, function(t) {
            if ((t.isCategory || t.isIdentity) && t.values && (!s[t.field] || !s[t.field].range)) {
              var n = t.values.length,
                r = void 0;
              if (1 === n) r = [.5, 1];
              else {
                var i = 0;
                r = o ? e.transposed ? [(i = 1 / n * g.widthRatio.multiplePie) / 2, 1 - i / 2] : [0, 1 - 1 / n] : [i = 1 / n * 1 / 2, 1 - i]
              }
              t.range = r
            }
          });
          for (var c = this.get("geoms"), u = 0; u < c.length; u++) {
            var l = c[u];
            if ("interval" === l.get("type")) {
              var p = l.getYScale(),
                h = p.field,
                y = p.min,
                d = p.max,
                v = p.type;
              s[h] && s[h].min || "time" === v || (y > 0 ? p.change({
                min: 0
              }) : d <= 0 && p.change({
                max: 0
              }))
            }
          }
        }, e.prototype._removeGeoms = function() {
          for (var t = this.get("geoms"); t.length > 0;) t.shift().destroy()
        }, e.prototype._clearGeoms = function() {
          for (var t = this.get("geoms"), e = 0, n = t.length; e < n; e++) t[e].clear()
        }, e.prototype._clearInner = function() {
          this.set("scales", {}), this.set("legendItems", null), this._clearGeoms(), e.plugins.notify(this, "clearInner"), this.get("axisController") && this.get("axisController").clear()
        }, e.prototype._execFilter = function(t) {
          var e = this.get("filters");
          return e && (t = t.filter(function(t) {
            var n = !0;
            return f.each(e, function(e, r) {
              if (e && !(n = e(t[r], t))) return !1
            }), n
          })), t
        }, e.prototype._initGeoms = function(t) {
          for (var e = this.get("coord"), n = this.get("filteredData"), r = this.get("colDefs"), i = 0, o = t.length; i < o; i++) {
            var a = t[i];
            a.set("data", n), a.set("coord", e), a.set("colDefs", r), a.init()
          }
        }, e.prototype._initCoord = function() {
          var t = this.get("plotRange"),
            e = f.mix({
              type: "cartesian"
            }, this.get("coordCfg"), {
              plot: t
            }),
            n = e.type,
            r = new(0, p[f.upperFirst(n)])(e);
          this.set("coord", r)
        }, e.prototype._initLayout = function() {
          var t = this.get("_padding");
          t || (t = this.get("margin") || this.get("padding"), t = f.parsePadding(t));
          var e = "auto" === t[0] ? 0 : t[0],
            n = "auto" === t[1] ? 0 : t[1],
            r = "auto" === t[2] ? 0 : t[2],
            i = "auto" === t[3] ? 0 : t[3],
            o = this.get("width"),
            a = this.get("height"),
            s = new l({
              start: {
                x: i,
                y: e
              },
              end: {
                x: o - n,
                y: a - r
              }
            });
          this.set("plotRange", s), this.set("plot", s)
        }, e.prototype._initCanvas = function() {
          var t = this;
          try {
            var n = new v({
              el: t.get("el") || t.get("id"),
              context: t.get("context"),
              pixelRatio: t.get("pixelRatio"),
              width: t.get("width"),
              height: t.get("height"),
              fontFamily: g.fontFamily
            });
            t.set("canvas", n), t.set("width", n.get("width")), t.set("height", n.get("height"))
          } catch (t) {
            throw t
          }
          e.plugins.notify(t, "afterCanvasInit"), t._initLayout()
        }, e.prototype._initLayers = function() {
          var t = this.get("canvas");
          this.set("backPlot", t.addGroup()), this.set("middlePlot", t.addGroup({
            zIndex: 10
          })), this.set("frontPlot", t.addGroup({
            zIndex: 20
          }))
        }, e.prototype._init = function() {
          var t = this;
          t._initCanvas(), t._initLayers(), t.set("geoms", []), t.set("scaleController", new y), t.set("axisController", new d({
            frontPlot: t.get("frontPlot").addGroup({
              className: "axisContainer"
            }),
            backPlot: t.get("backPlot").addGroup({
              className: "axisContainer"
            }),
            chart: t
          })), e.plugins.notify(t, "init")
        }, e.prototype.source = function(t, e) {
          return this.set("data", t), e && this.scale(e), this
        }, e.prototype.scale = function(t, e) {
          var n = this.get("colDefs") || {};
          return f.isObject(t) ? f.mix(n, t) : n[t] = e, this.set("colDefs", n), this.get("scaleController").defs = n, this
        }, e.prototype.axis = function(t, e) {
          var n = this.get("axisController");
          return t ? (n.axisCfg = n.axisCfg || {}, n.axisCfg[t] = e) : n.axisCfg = null, this
        }, e.prototype.coord = function(t, e) {
          var n = void 0;
          return f.isObject(t) ? n = t : (n = e || {}).type = t || "cartesian", this.set("coordCfg", n), this
        }, e.prototype.filter = function(t, e) {
          var n = this.get("filters") || {};
          n[t] = e, this.set("filters", n)
        }, e.prototype.render = function() {
          var t = this,
            n = t.get("canvas"),
            r = t.get("geoms"),
            i = this.get("data") || [],
            o = this._execFilter(i);
          if (this.set("filteredData", o), t._initCoord(), t._initGeoms(r), t._adjustScale(), e.plugins.notify(t, "beforeGeomDraw"), t._renderAxis(), t.get("limitInPlot")) {
            var a = t.get("middlePlot"),
              s = t.get("coord"),
              c = m.getClip(s);
            c.set("canvas", a.get("canvas")), a.attr("clip", c)
          }
          for (var u = 0, l = r.length; u < l; u++) r[u].paint();
          return e.plugins.notify(t, "afterGeomDraw"), n.sort(), this.get("frontPlot").sort(), e.plugins.notify(t, "beforeCanvasDraw"), n.draw(), t
        }, e.prototype.clear = function() {
          return e.plugins.notify(this, "clear"), this._removeGeoms(), this._clearInner(), this.set("filters", null), this.set("isUpdate", !1), this.get("canvas").draw(), this
        }, e.prototype.repaint = function(t) {
          this.set("rePadding", t), this.set("isUpdate", !0), e.plugins.notify(this, "repaint"), this._clearInner(), this.render()
        }, e.prototype.changeData = function(t) {
          this.set("data", t), this.repaint(!0)
        }, e.prototype.changeSize = function(t, e) {
          return t ? this.set("width", t) : t = this.get("width"), e ? this.set("height", e) : e = this.get("height"), this.get("canvas").changeSize(t, e), this._initLayout(), this.repaint(), this
        }, e.prototype.destroy = function() {
          this.clear(), this.get("canvas").destroy(), e.plugins.notify(this, "afterCanvasDestroyed"), this._interactions && f.each(this._interactions, function(t) {
            t.destroy()
          }), t.prototype.destroy.call(this)
        }, e.prototype.getPosition = function(t) {
          var e = this,
            n = e.get("coord"),
            r = e.getXScale(),
            i = e.getYScales()[0],
            o = r.field,
            a = r.scale(t[o]),
            s = i.field,
            c = i.scale(t[s]);
          return n.convertPoint({
            x: a,
            y: c
          })
        }, e.prototype.getRecord = function(t) {
          var e = this,
            n = e.get("coord"),
            r = e.getXScale(),
            i = e.getYScales()[0],
            o = n.invertPoint(t),
            a = {};
          return a[r.field] = r.invert(o.x), a[i.field] = i.invert(o.y), a
        }, e.prototype.getSnapRecords = function(t) {
          var e = this.get("geoms")[0],
            n = [];
          return e && (n = e.getSnapRecords(t)), n
        }, e.prototype.createScale = function(t) {
          var e = this.get("data"),
            n = this.get("filteredData");
          n.length && -1 === this._getFieldsForLegend().indexOf(t) && (e = n);
          var r = this.get("scales");
          return r[t] || (r[t] = this._createScale(t, e)), r[t]
        }, e.prototype.addGeom = function(t) {
          var e = this.get("geoms"),
            n = this.get("middlePlot");
          e.push(t), t.set("chart", this), t.set("container", n.addGroup())
        }, e.prototype.getXScale = function() {
          return this.get("geoms")[0].getXScale()
        }, e.prototype.getYScales = function() {
          var t = this.get("geoms"),
            e = [];
          return f.each(t, function(t) {
            var n = t.getYScale(); - 1 === e.indexOf(n) && e.push(n)
          }), e
        }, e.prototype.getLegendItems = function() {
          if (this.get("legendItems")) return this.get("legendItems");
          var t = {},
            e = [],
            n = this.get("geoms");
          return f.each(n, function(n) {
            var r = n.getAttr("color");
            if (r) {
              var i = r.getScale("color");
              if ("identity" !== i.type && !c(e, i)) {
                e.push(i);
                var o = i.field,
                  a = i.getTicks(),
                  s = [];
                f.each(a, function(t) {
                  var e = t.text,
                    n = t.value,
                    o = i.invert(n),
                    a = {
                      fill: r.mapping(o).join("") || g.defaultColor,
                      radius: 3,
                      symbol: "circle",
                      stroke: "#fff"
                    };
                  s.push({
                    name: e,
                    dataValue: o,
                    checked: !0,
                    marker: a
                  })
                }), t[o] = s
              }
            }
          }), this.set("legendItems", t), t
        }, e.prototype.registerPlugins = function(t) {
          var n = this,
            r = n.get("plugins") || [];
          f.isArray(r) || (r = [r]), [].concat(t).forEach(function(t) {
            -1 === r.indexOf(t) && (t.init && t.init(n), r.push(t))
          }), e.plugins._cacheId++, n.set("plugins", r)
        }, e.prototype._renderAxis = function() {
          var t = this.get("axisController"),
            n = this.getXScale(),
            r = this.getYScales(),
            i = this.get("coord");
          e.plugins.notify(this, "beforeRenderAxis"), t.createAxis(i, n, r)
        }, e.prototype._isAutoPadding = function() {
          if (this.get("_padding")) return !1;
          var t = this.get("padding");
          return f.isArray(t) ? -1 !== t.indexOf("auto") : "auto" === t
        }, e.prototype._updateLayout = function(t) {
          var e = this.get("width"),
            n = this.get("height"),
            r = {
              x: t[3],
              y: t[0]
            },
            i = {
              x: e - t[1],
              y: n - t[2]
            },
            o = this.get("plot"),
            a = this.get("coord");
          o.reset(r, i), a.reset(o)
        }, e
      }(u);
    x.plugins = x.initPlugins(), t.exports = x
  }, function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    var i = n(0),
      o = n(1),
      a = n(4),
      s = function() {
        function t(e) {
          r(this, t), this._initDefaultCfg(), i.mix(this, e), this.draw()
        }
        return t.prototype._initDefaultCfg = function() {
          this.ticks = [], this.tickLine = {}, this.offsetFactor = 1, this.frontContainer = null, this.backContainer = null, this.gridPoints = []
        }, t.prototype.draw = function() {
          var t = this.line,
            e = this.tickLine,
            n = this.label,
            r = this.grid;
          r && this.drawGrid(r), e && this.drawTicks(e), t && this.drawLine(t), n && this.drawLabels()
        }, t.prototype.drawTicks = function(t) {
          var e = this,
            n = e.ticks,
            r = t.length,
            o = e.getContainer(t.top);
          i.each(n, function(n) {
            var a = e.getOffsetPoint(n.value),
              s = e.getSidePoint(a, r);
            o.addShape("line", {
              className: "axis-tick",
              attrs: i.mix({
                x1: a.x,
                y1: a.y,
                x2: s.x,
                y2: s.y
              }, t)
            })._id = e._id + "-ticks"
          })
        }, t.prototype.drawLabels = function() {
          var t = this,
            e = t.labelOffset,
            n = t.labels;
          i.each(n, function(n) {
            var r = t.getContainer(n.get("top")),
              o = t.getOffsetPoint(n.get("value")),
              a = t.getSidePoint(o, e),
              s = a.x,
              c = a.y;
            n.attr(i.mix({
              x: s,
              y: c
            }, t.getTextAlignInfo(o, e), n.get("textStyle"))), n._id = t._id + "-" + n.attr("text"), r.add(n)
          })
        }, t.prototype.drawLine = function() {}, t.prototype.drawGrid = function(t) {
          var e = this,
            n = e.gridPoints,
            r = e.ticks,
            s = t,
            c = n.length;
          i.each(n, function(n, u) {
            if (i.isFunction(t)) {
              var l = r[u] || {};
              s = i.mix({}, o._defaultAxis.grid, t(l.text, u, c))
            }
            if (s) {
              var f = s.type,
                p = n.points,
                h = e.getContainer(s.top),
                y = void 0;
              if ("arc" === f) {
                var d = e.center,
                  g = e.startAngle,
                  v = e.endAngle,
                  m = a.length([p[0].x - d.x, p[0].y - d.y]);
                y = h.addShape("Arc", {
                  className: "axis-grid",
                  attrs: i.mix({
                    x: d.x,
                    y: d.y,
                    startAngle: g,
                    endAngle: v,
                    r: m
                  }, s)
                })
              } else y = h.addShape("Polyline", {
                className: "axis-grid",
                attrs: i.mix({
                  points: p
                }, s)
              });
              y._id = n._id
            }
          })
        }, t.prototype.getOffsetPoint = function() {}, t.prototype.getAxisVector = function() {}, t.prototype.getOffsetVector = function(t, e) {
          var n = this,
            r = n.getAxisVector(t),
            i = a.normalize([], r),
            o = n.offsetFactor,
            s = [-1 * i[1] * o, i[0] * o];
          return a.scale([], s, e)
        }, t.prototype.getSidePoint = function(t, e) {
          var n = this.getOffsetVector(t, e);
          return {
            x: t.x + n[0],
            y: t.y + n[1]
          }
        }, t.prototype.getTextAlignInfo = function(t, e) {
          var n = this.getOffsetVector(t, e),
            r = void 0,
            i = void 0;
          return r = n[0] > 0 ? "left" : n[0] < 0 ? "right" : "center", i = n[1] > 0 ? "top" : n[1] < 0 ? "bottom" : "middle", {
            textAlign: r,
            textBaseline: i
          }
        }, t.prototype.getContainer = function(t) {
          var e = this.frontContainer,
            n = this.backContainer;
          return t ? e : n
        }, t
      }();
    t.exports = s
  }, function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t) {
      return 1 === t[0] && 0 === t[1] && 0 === t[2] && 1 === t[3] && 0 === t[4] && 0 === t[5]
    }
    var o = n(0),
      a = n(22),
      s = n(4),
      c = {
        stroke: "strokeStyle",
        fill: "fillStyle",
        opacity: "globalAlpha"
      },
      u = ["fillStyle", "font", "globalAlpha", "lineCap", "lineWidth", "lineJoin", "miterLimit", "shadowBlur", "shadowColor", "shadowOffsetX", "shadowOffsetY", "strokeStyle", "textAlign", "textBaseline", "lineDash"],
      l = ["circle", "sector", "polygon", "rect", "polyline"],
      f = function() {
        function t(e) {
          r(this, t), this._initProperties(), o.mix(this._attrs, e);
          var n = this._attrs.attrs;
          n && this.initAttrs(n), this.initTransform()
        }
        return t.prototype._initProperties = function() {
          this._attrs = {
            zIndex: 0,
            visible: !0,
            destroyed: !1
          }
        }, t.prototype.get = function(t) {
          return this._attrs[t]
        }, t.prototype.set = function(t, e) {
          this._attrs[t] = e
        }, t.prototype.initAttrs = function(t) {
          this.attr(o.mix(this.getDefaultAttrs(), t))
        }, t.prototype.getDefaultAttrs = function() {
          return {}
        }, t.prototype._setAttr = function(t, e) {
          var n = this._attrs.attrs;
          if ("clip" === t) e = this._setAttrClip(e);
          else {
            var r = c[t];
            r && (n[r] = e)
          }
          n[t] = e
        }, t.prototype._getAttr = function(t) {
          return this._attrs.attrs[t]
        }, t.prototype._setAttrClip = function(t) {
          return t && l.indexOf(t._attrs.type) > -1 ? (null === t.get("canvas") && (t = Object.assign({}, t)), t.set("parent", this.get("parent")), t.set("context", this.get("context")), t) : null
        }, t.prototype.attr = function(t, e) {
          var n = this;
          if (n.get("destroyed")) return null;
          var r = arguments.length;
          if (0 === r) return n._attrs.attrs;
          if (o.isObject(t)) {
            this._attrs.bbox = null;
            for (var i in t) n._setAttr(i, t[i]);
            return n._afterAttrsSet && n._afterAttrsSet(), n
          }
          return 2 === r ? (this._attrs.bbox = null, n._setAttr(t, e), n._afterAttrsSet && n._afterAttrsSet(), n) : n._getAttr(t)
        }, t.prototype.getParent = function() {
          return this.get("parent")
        }, t.prototype.draw = function(t) {
          this.get("destroyed") || this.get("visible") && (this.setContext(t), this.drawInner(t), this.restoreContext(t))
        }, t.prototype.setContext = function(t) {
          var e = this._attrs.attrs.clip;
          t.save(), e && (e.resetTransform(t), e.createPath(t), t.clip()), this.resetContext(t), this.resetTransform(t)
        }, t.prototype.restoreContext = function(t) {
          t.restore()
        }, t.prototype.resetContext = function(t) {
          var e = this._attrs.attrs;
          if (!this.get("isGroup"))
            for (var n in e)
              if (u.indexOf(n) > -1) {
                var r = e[n];
                "lineDash" === n && t.setLineDash && r ? t.setLineDash(r) : t[n] = r
              }
        }, t.prototype.hasFill = function() {
          return this.get("canFill") && this._attrs.attrs.fillStyle
        }, t.prototype.hasStroke = function() {
          return this.get("canStroke") && this._attrs.attrs.strokeStyle
        }, t.prototype.drawInner = function() {}, t.prototype.show = function() {
          return this.set("visible", !0), this
        }, t.prototype.hide = function() {
          return this.set("visible", !1), this
        }, t.prototype._removeFromParent = function() {
          var t = this.get("parent");
          if (t) {
            var e = t.get("children");
            o.Array.remove(e, this)
          }
          return this
        }, t.prototype.remove = function(t) {
          t ? this.destroy() : this._removeFromParent()
        }, t.prototype.destroy = function() {
          if (this.get("destroyed")) return null;
          this._removeFromParent(), this._attrs = {}, this.set("destroyed", !0)
        }, t.prototype.getBBox = function() {
          return {
            minX: 0,
            maxX: 0,
            minY: 0,
            maxY: 0
          }
        }, t.prototype.initTransform = function() {
          var t = this._attrs.attrs || {};
          t.matrix || (t.matrix = [1, 0, 0, 1, 0, 0]), this._attrs.attrs = t
        }, t.prototype.getMatrix = function() {
          return this._attrs.attrs.matrix
        }, t.prototype.setMatrix = function(t) {
          this._attrs.attrs.matrix = [t[0], t[1], t[2], t[3], t[4], t[5]]
        }, t.prototype.transform = function(t) {
          var e = this._attrs.attrs.matrix;
          return this._attrs.attrs.matrix = a.transform(e, t), this
        }, t.prototype.setTransform = function(t) {
          return this._attrs.attrs.matrix = [1, 0, 0, 1, 0, 0], this.transform(t)
        }, t.prototype.translate = function(t, e) {
          var n = this._attrs.attrs.matrix;
          a.translate(n, n, [t, e])
        }, t.prototype.rotate = function(t) {
          var e = this._attrs.attrs.matrix;
          a.rotate(e, e, t)
        }, t.prototype.scale = function(t, e) {
          var n = this._attrs.attrs.matrix;
          a.scale(n, n, [t, e])
        }, t.prototype.moveTo = function(t, e) {
          var n = this._attrs.x || 0,
            r = this._attrs.y || 0;
          this.translate(t - n, e - r), this.set("x", t), this.set("y", e)
        }, t.prototype.apply = function(t) {
          var e = this._attrs.attrs.matrix;
          return s.transformMat2d(t, t, e), this
        }, t.prototype.resetTransform = function(t) {
          var e = this._attrs.attrs.matrix;
          i(e) || t.transform(e[0], e[1], e[2], e[3], e[4], e[5])
        }, t
      }();
    t.exports = f
  }, function(t, e, n) {
    var r = n(9).Shape;
    t.exports = {
      getClip: function(t) {
        var e = t.start,
          n = t.end,
          i = n.x - e.x,
          o = Math.abs(n.y - e.y),
          a = void 0;
        if (t.isPolar) {
          var s = t.circleRadius,
            c = t.center,
            u = t.startAngle,
            l = t.endAngle;
          a = new r.Sector({
            attrs: {
              x: c.x,
              y: c.y,
              r: s,
              r0: 0,
              startAngle: u,
              endAngle: l
            }
          })
        } else a = new r.Rect({
          attrs: {
            x: e.x,
            y: n.y,
            width: i,
            height: o
          }
        });
        return a.isClip = !0, a
      },
      isPointInPlot: function(t, e) {
        var n = t.x,
          r = t.y,
          i = e.tl,
          o = e.tr,
          a = e.br;
        return n >= i.x && n <= o.x && r >= i.y && r <= a.y
      }
    }
  }, function(t, e, n) {
    var r = n(5);
    t.exports = function(t) {
      return r(t) ? "" : t.toString()
    }
  }, function(t, e, n) {
    var r = n(49),
      i = n(6);
    t.exports = function(t) {
      if (!r(t) || !i(t, "Object")) return !1;
      if (null === Object.getPrototypeOf(t)) return !0;
      for (var e = t; null !== Object.getPrototypeOf(e);) e = Object.getPrototypeOf(e);
      return Object.getPrototypeOf(t) === e
    }
  }, function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    var i = n(0),
      o = function() {
        function t(e) {
          r(this, t);
          var n = {},
            o = this.getDefaultCfg();
          this._attrs = n, i.mix(n, o, e)
        }
        return t.prototype.getDefaultCfg = function() {
          return {}
        }, t.prototype.get = function(t) {
          return this._attrs[t]
        }, t.prototype.set = function(t, e) {
          this._attrs[t] = e
        }, t.prototype.destroy = function() {
          this._attrs = {}, this.destroyed = !0
        }, t
      }();
    t.exports = o
  }, function(t, e, n) {
    function r(t) {
      return function(e, n) {
        var r = t(e, n);
        return 0 === r ? e[s] - n[s] : r
      }
    }
    var i = n(0),
      o = n(2),
      a = {},
      s = "_INDEX";
    t.exports = {
      getGroupClass: function() {},
      addShape: function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = this.get("canvas"),
          r = a[t];
        r || (r = i.upperFirst(t), a[t] = r), e.canvas = n, "Text" === r && n && n.get("fontFamily") && (e.attrs.fontFamily = e.attrs.fontFamily || n.get("fontFamily"));
        var s = new o[r](e);
        return this.add(s), s
      },
      addGroup: function(t) {
        var e = this.get("canvas"),
          n = this.getGroupClass();
        (t = i.mix({}, t)).canvas = e, t.parent = this;
        var r = new n(t);
        return this.add(r), r
      },
      contain: function(t) {
        return this.get("children").indexOf(t) > -1
      },
      sort: function() {
        for (var t = this.get("children"), e = 0, n = t.length; e < n; e++) t[e][s] = e;
        return t.sort(r(function(t, e) {
          return t.get("zIndex") - e.get("zIndex")
        })), this
      },
      clear: function() {
        for (var t = this.get("children"); 0 !== t.length;) t[t.length - 1].remove(!0);
        return this
      },
      add: function(t) {
        var e = this,
          n = e.get("children");
        i.isArray(t) || (t = [t]);
        for (var r = 0, o = t.length; r < o; r++) {
          var a = t[r],
            s = a.get("parent");
          if (s) {
            var c = s.get("children");
            i.Array.remove(c, a)
          }
          e._setEvn(a), n.push(a)
        }
        return e
      },
      _setEvn: function(t) {
        var e = this;
        t._attrs.parent = e, t._attrs.context = e._attrs.context, t._attrs.canvas = e._attrs.canvas;
        var n = t._attrs.attrs.clip;
        if (n && (n.set("parent", e), n.set("context", e.get("context"))), t._attrs.isGroup)
          for (var r = t._attrs.children, i = 0, o = r.length; i < o; i++) t._setEvn(r[i])
      }
    }
  }, function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var a = n(0),
      s = n(25),
      c = n(30),
      u = n(4),
      l = function(t) {
        function e() {
          return r(this, e), i(this, t.apply(this, arguments))
        }
        return o(e, t), e.prototype._initProperties = function() {
          this._attrs = {
            zIndex: 0,
            visible: !0,
            destroyed: !1,
            isGroup: !0,
            children: []
          }
        }, e.prototype.drawInner = function(t) {
          for (var e = this.get("children"), n = 0, r = e.length; n < r; n++) e[n].draw(t);
          return this
        }, e.prototype.getBBox = function() {
          for (var t = 1 / 0, e = -1 / 0, n = 1 / 0, r = -1 / 0, i = this.get("children"), o = 0, a = i.length; o < a; o++) {
            var s = i[o];
            if (s.get("visible")) {
              var c = s.getBBox();
              if (!c) continue;
              var l = [c.minX, c.minY],
                f = [c.minX, c.maxY],
                p = [c.maxX, c.minY],
                h = [c.maxX, c.maxY],
                y = s.attr("matrix");
              u.transformMat2d(l, l, y), u.transformMat2d(f, f, y), u.transformMat2d(p, p, y), u.transformMat2d(h, h, y), t = Math.min(l[0], f[0], p[0], h[0], t), e = Math.max(l[0], f[0], p[0], h[0], e), n = Math.min(l[1], f[1], p[1], h[1], n), r = Math.max(l[1], f[1], p[1], h[1], r)
            }
          }
          return {
            minX: t,
            minY: n,
            maxX: e,
            maxY: r,
            x: t,
            y: n,
            width: e - t,
            height: r - n
          }
        }, e.prototype.destroy = function() {
          this.get("destroyed") || (this.clear(), t.prototype.destroy.call(this))
        }, e
      }(s);
    a.mix(l.prototype, c, {
      getGroupClass: function() {
        return l
      }
    }), t.exports = l
  }, function(t, e, n) {
    function r(t) {
      var e = {
        strokeStyle: t.color
      };
      return t.size >= 0 && (e.lineWidth = t.size), o.mix(e, t.style), o.mix({}, c.shape.line, e)
    }

    function i(t, e, n, r) {
      var i = t.points;
      if (i.length && o.isArray(i[0].y)) {
        for (var a = [], c = [], u = 0, l = i.length; u < l; u++) {
          var f = i[u],
            p = s.splitPoints(f);
          c.push(p[0]), a.push(p[1])
        }
        return t.isInCircle && (a.push(a[0]), c.push(c[0])), t.isStack ? e.addShape("Polyline", {
          className: "line",
          attrs: o.mix({
            points: a,
            smooth: r
          }, n)
        }) : [e.addShape("Polyline", {
          className: "line",
          attrs: o.mix({
            points: a,
            smooth: r
          }, n)
        }), e.addShape("Polyline", {
          className: "line",
          attrs: o.mix({
            points: c,
            smooth: r
          }, n)
        })]
      }
      return t.isInCircle && i.push(i[0]), e.addShape("Polyline", {
        className: "line",
        attrs: o.mix({
          points: i,
          smooth: r
        }, n)
      })
    }
    var o = n(0),
      a = n(8),
      s = n(19),
      c = n(1),
      u = a.registerFactory("line", {
        defaultShapeType: "line"
      }),
      l = ["line", "smooth", "dash"];
    o.each(l, function(t) {
      a.registerShape("line", t, {
        draw: function(e, n) {
          var o = "smooth" === t,
            a = r(e);
          return "dash" === t && (a.lineDash = c.lineDash), i(e, n, a, o)
        }
      })
    }), t.exports = u
  }, function(t, e, n) {
    var r = n(6);
    t.exports = function(t) {
      return r(t, "Date")
    }
  }, function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" !== (void 0 === e ? "undefined" : a(e)) && "function" != typeof e ? t : e
    }

    function o(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : a(e)));
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      },
      s = n(13),
      c = n(35),
      u = n(3),
      l = n(17),
      f = n(14),
      p = function(t) {
        function e() {
          return r(this, e), i(this, t.apply(this, arguments))
        }
        return o(e, t), e.prototype._initDefaultCfg = function() {
          t.prototype._initDefaultCfg.call(this), this.type = "cat", this.isCategory = !0
        }, e.prototype.init = function() {
          var t = this,
            e = t.values,
            n = t.tickCount;
          if (u(e, function(t, n) {
              e[n] = t.toString()
            }), !t.ticks) {
            var r = e;
            n && (r = c({
              maxCount: n,
              data: e
            }).ticks), this.ticks = r
          }
        }, e.prototype.getText = function(e) {
          return -1 === this.values.indexOf(e) && l(e) && (e = this.values[Math.round(e)]), t.prototype.getText.call(this, e)
        }, e.prototype.translate = function(t) {
          var e = this.values.indexOf(t);
          return -1 === e && l(t) ? e = t : -1 === e && (e = NaN), e
        }, e.prototype.scale = function(t) {
          var e = this.rangeMin(),
            n = this.rangeMax(),
            r = void 0;
          return (f(t) || -1 !== this.values.indexOf(t)) && (t = this.translate(t)), r = this.values.length > 1 ? t / (this.values.length - 1) : t, e + r * (n - e)
        }, e.prototype.invert = function(t) {
          if (f(t)) return t;
          var e = this.rangeMin(),
            n = this.rangeMax();
          t < e && (t = e), t > n && (t = n);
          var r = (t - e) / (n - e),
            i = Math.round(r * (this.values.length - 1)) % this.values.length;
          return i = i || 0, this.values[i]
        }, e
      }(s);
    s.Cat = p, t.exports = p
  }, function(t, e, n) {
    function r(t) {
      var e = [];
      return o(t, function(t) {
        e = e.concat(t)
      }), e
    }

    function i(t, e) {
      var n = void 0;
      for (n = e; n > 0 && t % n != 0; n--);
      if (1 === n)
        for (n = e; n > 0 && (t - 1) % n != 0; n--);
      return n
    }
    var o = n(3);
    t.exports = function(t) {
      var e = {},
        n = [],
        o = t.maxCount || 8,
        a = r(t.data),
        s = a.length,
        c = i(s - 1, o - 1) + 1;
      2 === c ? c = o : c < o - 4 && (c = o - 4);
      var u = parseInt(s / (c - 1), 10),
        l = a.map(function(t, e) {
          return e % u == 0 ? a.slice(e, e + u) : null
        }).filter(function(t) {
          return t
        });
      a.length && n.push(a[0]);
      for (var f = 1, p = l.length; f < p && f * u < s - u; f++) n.push(l[f][0]);
      if (a.length) {
        var h = a[s - 1]; - 1 === n.indexOf(h) && n.push(h)
      }
      return e.categories = a, e.ticks = n, e
    }
  }, function(t, e, n) {
    function r(t) {
      return [t.x, t.y]
    }

    function i(t, e, n, i) {
      var a = [],
        s = void 0,
        c = void 0,
        u = !!i,
        l = void 0,
        f = void 0,
        p = void 0,
        h = void 0,
        y = void 0,
        d = void 0;
      if (u) {
        for (l = [1 / 0, 1 / 0], f = [-1 / 0, -1 / 0], d = 0, y = t.length; d < y; d++) p = r(t[d]), o.min(l, l, p), o.max(f, f, p);
        o.min(l, l, i[0]), o.max(f, f, i[1])
      }
      for (d = 0, h = t.length; d < h; d++) {
        if (p = r(t[d]), n) s = r(t[d ? d - 1 : h - 1]), c = r(t[(d + 1) % h]);
        else {
          if (0 === d || d === h - 1) {
            a.push([p[0], p[1]]);
            continue
          }
          s = r(t[d - 1]), c = r(t[d + 1])
        }
        var g = o.sub([], c, s);
        o.scale(g, g, e);
        var v = o.distance(p, s),
          m = o.distance(p, c),
          x = v + m;
        0 !== x && (v /= x, m /= x);
        var b = o.scale([], g, -v),
          w = o.scale([], g, m),
          _ = o.add([], p, b),
          S = o.add([], p, w);
        u && (o.max(_, _, l), o.min(_, _, f), o.max(S, S, l), o.min(S, S, f)), a.push([_[0], _[1]]), a.push([S[0], S[1]])
      }
      return n && a.push(a.shift()), a
    }
    var o = n(4);
    t.exports = {
      smooth: function(t, e, n) {
        for (var r = !!e, o = i(t, .4, r, n), a = t.length, s = [], c = void 0, u = void 0, l = void 0, f = 0; f < a - 1; f++) c = o[2 * f], u = o[2 * f + 1], l = t[f + 1], s.push(["C", c[0], c[1], u[0], u[1], l.x, l.y]);
        return r && (c = o[a], u = o[a + 1], l = t[0], s.push(["C", c[0], c[1], u[0], u[1], l.x, l.y])), s
      }
    }
  }, function(t, e) {
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    t.exports = {
      requestAnimationFrame: "object" === ("undefined" == typeof window ? "undefined" : n(window)) && window.requestAnimationFrame ? window.requestAnimationFrame : function(t) {
        return setTimeout(t, 16)
      }
    }
  }, function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var a = n(7),
      s = n(19),
      c = n(0);
    n(32);
    var u = function(t) {
      function e() {
        return r(this, e), i(this, t.apply(this, arguments))
      }
      return o(e, t), e.prototype.getDefaultCfg = function() {
        var e = t.prototype.getDefaultCfg.call(this);
        return e.type = "path", e.shapeType = "line", e
      }, e.prototype.getDrawCfg = function(e) {
        var n = t.prototype.getDrawCfg.call(this, e);
        return n.isStack = this.hasAdjust("stack"), n
      }, e.prototype.draw = function(t, e) {
        var n = this,
          r = n.get("container"),
          i = n.getYScale(),
          o = n.get("connectNulls"),
          a = s.splitArray(t, i.field, o),
          u = this.getDrawCfg(t[0]);
        u.origin = t, c.each(a, function(i, o) {
          u.splitedIndex = o, u.points = i, n.drawShape(u.shape, t[0], u, r, e)
        })
      }, e
    }(a);
    a.Path = u, t.exports = u
  }, function(t, e, n) {
    var r = n(1),
      i = n(0),
      o = {
        getDefalutSize: function() {
          var t = this.get("defaultSize");
          if (!t) {
            var e = this.get("coord"),
              n = this.getXScale(),
              i = this.get("dataArray"),
              o = n.values.length,
              a = n.range,
              s = 1 / o,
              c = 1;
            e && e.isPolar ? c = e.transposed && o > 1 ? r.widthRatio.multiplePie : r.widthRatio.rose : (n.isLinear && (s *= a[1] - a[0]), c = r.widthRatio.column), s *= c, this.hasAdjust("dodge") && (s /= i.length), t = s, this.set("defaultSize", t)
          }
          return t
        },
        getDimWidth: function(t) {
          var e = this.get("coord"),
            n = e.convertPoint({
              x: 0,
              y: 0
            }),
            r = e.convertPoint({
              x: "x" === t ? 1 : 0,
              y: "x" === t ? 0 : 1
            }),
            i = 0;
          return n && r && (i = Math.sqrt(Math.pow(r.x - n.x, 2) + Math.pow(r.y - n.y, 2))), i
        },
        _getWidth: function() {
          var t = this.get("_width");
          if (!t) {
            var e = this.get("coord");
            t = e && e.isPolar && !e.transposed ? (e.endAngle - e.startAngle) * e.circleRadius : this.getDimWidth("x"), this.set("_width", t)
          }
          return t
        },
        _toNormalizedSize: function(t) {
          return t / this._getWidth()
        },
        _toCoordSize: function(t) {
          return this._getWidth() * t
        },
        getNormalizedSize: function(t) {
          var e = this.getAttrValue("size", t);
          return e = i.isNil(e) ? this.getDefalutSize() : this._toNormalizedSize(e)
        },
        getSize: function(t) {
          var e = this.getAttrValue("size", t);
          if (i.isNil(e)) {
            var n = this.getDefalutSize();
            e = this._toCoordSize(n)
          }
          return e
        }
      };
    t.exports = o
  }, function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var a = n(0),
      s = {
        circle: function(t, e, n, r) {
          r.arc(t, e, n, 0, 2 * Math.PI, !1)
        },
        square: function(t, e, n, r) {
          r.moveTo(t - n, e - n), r.lineTo(t + n, e - n), r.lineTo(t + n, e + n), r.lineTo(t - n, e + n), r.closePath()
        }
      },
      c = function(t) {
        function e() {
          return r(this, e), i(this, t.apply(this, arguments))
        }
        return o(e, t), e.prototype._initProperties = function() {
          t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, this._attrs.type = "marker"
        }, e.prototype.getDefaultAttrs = function() {
          return {
            x: 0,
            y: 0,
            lineWidth: 0
          }
        }, e.prototype.createPath = function(t) {
          var e = this.get("attrs"),
            n = e.x,
            r = e.y,
            i = e.radius,
            o = e.symbol || "circle",
            c = void 0;
          c = a.isFunction(o) ? o : s[o], t.beginPath(), c(n, r, i, t, this)
        }, e.prototype.calculateBox = function() {
          var t = this.get("attrs"),
            e = t.x,
            n = t.y,
            r = t.radius;
          return {
            minX: e - r,
            minY: n - r,
            maxX: e + r,
            maxY: n + r
          }
        }, e
      }(n(9).Shape);
    t.exports = c
  }, function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    var i = n(0),
      o = n(9).Group,
      a = n(40),
      s = function() {
        function t(e) {
          r(this, t), i.deepMix(this, this.getDefaultCfg(), e), this._init(), this._renderTitle(), this._renderItems()
        }
        return t.prototype.getDefaultCfg = function() {
          return {
            showTitle: !1,
            title: null,
            items: null,
            titleGap: 12,
            itemGap: 10,
            itemMarginBottom: 12,
            itemFormatter: null,
            itemWidth: null,
            wordSpace: 6,
            x: 0,
            y: 0,
            layout: "horizontal",
            joinString: ": "
          }
        }, t.prototype._init = function() {
          var t = new o;
          this.container = t;
          var e = t.addGroup();
          this.wrapper = e;
          var n = e.addGroup({
            className: "itemsGroup"
          });
          this.itemsGroup = n, this.parent && this.parent.add(t)
        }, t.prototype._renderTitle = function(t) {
          t = t || this.title;
          var e = 0;
          if (this.showTitle && t) {
            var n = this.wrapper,
              r = this.titleStyle,
              o = n.addShape("text", {
                className: "title",
                attrs: i.mix({
                  x: 0,
                  y: 0,
                  text: t
                }, r)
              });
            e = o.getBBox().height + this.titleGap, this.titleShape = o
          }
          this._titleHeight = e
        }, t.prototype._renderItems = function(t) {
          var e = this;
          (t = t || e.items) && (e.reversed && t.reverse(), i.each(t, function(t, n) {
            e._addItem(t, n)
          }), t.length > 1 && this._adjustItems(), this._renderBackground())
        }, t.prototype._renderBackground = function() {
          var t = this.background;
          if (t) {
            var e = this.container,
              n = this.wrapper.getBBox(),
              r = n.minX,
              o = n.minY,
              a = n.width,
              s = n.height,
              c = t.padding || [0, 0, 0, 0];
            c = i.parsePadding(c);
            var u = i.mix({
                x: r - c[3],
                y: o - c[0],
                width: a + c[1] + c[3],
                height: s + c[0] + c[2]
              }, t),
              l = this.backShape;
            l ? l.attr(u) : l = e.addShape("Rect", {
              zIndex: -1,
              attrs: u
            }), this.backShape = l, e.sort()
          }
        }, t.prototype._addItem = function(t) {
          var e = this.itemsGroup.addGroup({
              name: t.name,
              value: t.value,
              dataValue: t.dataValue,
              checked: t.checked
            }),
            n = this.unCheckStyle,
            r = this.unCheckColor,
            o = this.nameStyle,
            s = this.valueStyle,
            c = this.wordSpace,
            u = t.marker,
            l = t.value,
            f = 0;
          if (r && (n.fill = r), u) {
            var p = u.radius || 3,
              h = i.mix({
                x: p,
                y: this._titleHeight
              }, u);
            !1 === t.checked && i.mix(h, n);
            var y = new a({
              className: "item-marker",
              attrs: h
            });
            e.add(y), f += y.getBBox().width + c
          }
          var d = void 0,
            g = t.name;
          if (g) {
            var v = this.joinString || "";
            g = l ? g + v : g, d = e.addShape("text", {
              className: "name",
              attrs: i.mix({
                x: f,
                y: this._titleHeight,
                text: this._formatItemValue(g)
              }, o, !1 === t.checked ? n : null)
            })
          }
          if (l) {
            var m = f;
            d && (m += d.getBBox().width), e.addShape("text", {
              className: "value",
              attrs: i.mix({
                x: m,
                y: this._titleHeight,
                text: l
              }, s, !1 === t.checked ? n : null)
            })
          }
          return e
        }, t.prototype._formatItemValue = function(t) {
          var e = this.itemFormatter;
          return e && (t = e.call(this, t)), t
        }, t.prototype._getMaxItemWidth = function() {
          var t = this.itemWidth;
          if (i.isNumber(t) || i.isNil(t)) return t;
          if ("auto" === t) {
            for (var e = this.itemsGroup.get("children"), n = e.length, r = 0, o = 0; o < n; o++) {
              var a = e[o].getBBox().width;
              r = Math.max(r, a)
            }
            var s = this.maxLength,
              c = this.itemGap,
              u = (s - c) / 2,
              l = (s - 2 * c) / 3;
            return 2 === n ? Math.max(r, u) : r <= l ? l : r <= u ? u : r
          }
        }, t.prototype._adjustHorizontal = function() {
          for (var t = this.maxLength, e = this.itemsGroup.get("children"), n = this.itemGap, r = this.itemMarginBottom, i = this._titleHeight, o = 0, a = 0, s = void 0, c = void 0, u = this._getMaxItemWidth(), l = [], f = 0, p = e.length; f < p; f++) {
            var h = e[f],
              y = h.getBBox(),
              d = y.height,
              g = y.width;
            c = d + r, (s = u || g) - (t - a) > 1e-4 && (o++, a = 0), h.moveTo(a, o * c), l.push({
              x: a,
              y: o * c + i - d / 2,
              width: 1.375 * g,
              height: 1.375 * d
            }), a += s + n
          }
          this.legendHitBoxes = l
        }, t.prototype._adjustVertical = function() {
          for (var t = this.maxLength, e = this.itemsGroup, n = this.itemGap, r = this.itemMarginBottom, o = this.itemWidth, a = this._titleHeight, s = e.get("children"), c = 0, u = void 0, l = void 0, f = 0, p = 0, h = [], y = 0, d = s.length; y < d; y++) {
            var g = s[y],
              v = g.getBBox();
            u = v.width, l = v.height, i.isNumber(o) ? f = o + n : u > f && (f = u + n), t - c < l ? (c = 0, p += f, g.moveTo(p, 0), h.push({
              x: p,
              y: a - l / 2,
              width: 1.375 * u,
              height: 1.375 * l
            })) : (g.moveTo(p, c), h.push({
              x: p,
              y: c - l / 2 + a,
              width: 1.375 * u,
              height: 1.375 * l
            })), c += l + r
          }
          this.legendHitBoxes = h
        }, t.prototype._adjustItems = function() {
          "horizontal" === this.layout ? this._adjustHorizontal() : this._adjustVertical()
        }, t.prototype.moveTo = function(t, e) {
          this.x = t, this.y = e;
          var n = this.container;
          return n && n.moveTo(t, e), this
        }, t.prototype.setItems = function(t) {
          this.clearItems(), this._renderItems(t)
        }, t.prototype.setTitle = function(t) {
          var e = this.titleShape;
          e ? e.attr("text", t) : this._renderTitle(t)
        }, t.prototype.clearItems = function() {
          this.itemsGroup.clear()
        }, t.prototype.getWidth = function() {
          return this.container.getBBox().width
        }, t.prototype.getHeight = function() {
          return this.container.getBBox().height
        }, t.prototype.show = function() {
          this.container.show()
        }, t.prototype.hide = function() {
          this.container.hide()
        }, t.prototype.clear = function() {
          var t = this.container;
          t.clear(), t.remove(!0)
        }, t
      }();
    t.exports = s
  }, function(t, e, n) {
    var r = {},
      i = n(1);
    r.Global = i, r.version = i.version, r.Chart = n(23), r.Shape = n(8), r.G = n(9), r.Util = n(0), r.track = function(t) {
      i.trackable = t
    }, n(79), t.exports = r
  }, function(t, e, n) {
    var r = n(0),
      i = {
        label: {
          fill: "#808080",
          fontSize: 10
        },
        line: {
          stroke: "#E8E8E8",
          lineWidth: 1
        },
        grid: {
          type: "line",
          stroke: "#E8E8E8",
          lineWidth: 1,
          lineDash: [2]
        },
        tickLine: null,
        labelOffset: 7.5
      },
      o = {
        fontFamily: '"Helvetica Neue", "San Francisco", Helvetica, Tahoma, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", sans-serif',
        defaultColor: "#1890FF",
        pixelRatio: 1,
        padding: "auto",
        appendPadding: 15,
        colors: ["#1890FF", "#2FC25B", "#FACC14", "#223273", "#8543E0", "#13C2C2", "#3436C7", "#F04864"],
        shapes: {
          line: ["line", "dash"],
          point: ["circle", "hollowCircle"]
        },
        sizes: [4, 10],
        axis: {
          bottom: r.mix({}, i, {
            grid: null
          }),
          left: r.mix({}, i, {
            line: null
          }),
          right: r.mix({}, i, {
            line: null
          }),
          circle: r.mix({}, i, {
            line: null
          }),
          radius: r.mix({}, i, {
            labelOffset: 4
          })
        },
        shape: {
          line: {
            lineWidth: 2,
            lineJoin: "round",
            lineCap: "round"
          },
          point: {
            lineWidth: 0,
            size: 3
          },
          area: {
            fillOpacity: .1
          }
        },
        _defaultAxis: i
      };
    t.exports = o
  }, function(t, e) {
    function n(t, e, n, r, i) {
      return {
        type: t,
        chart: e,
        native: i || null,
        x: void 0 !== n ? n : null,
        y: void 0 !== r ? r : null
      }
    }

    function r(t, e) {
      var r = t.type,
        i = {},
        a = t.targetTouches;
      a && a.length > 0 ? (i.x = a[0].clientX, i.y = a[0].clientY) : (i.x = t.clientX, i.y = t.clientY);
      var s = e.get("canvas"),
        c = o.getRelativePosition(i, s);
      return n(r, e, c.x, c.y, t)
    }
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      },
      o = void 0,
      a = !! function() {
        var t = !1;
        try {
          var e = Object.defineProperty({}, "passive", {
            get: function() {
              t = !0
            }
          });
          window.addEventListener("e", null, e)
        } catch (t) {}
        return t
      }() && {
        passive: !0
      };
    o = {
      isWx: "object" === ("undefined" == typeof wx ? "undefined" : i(wx)) && "function" == typeof wx.getSystemInfoSync,
      isMy: "object" === ("undefined" == typeof my ? "undefined" : i(my)) && "function" == typeof my.getSystemInfoSync,
      isNode: void 0 !== t && void 0 !== t.exports,
      isBrowser: "undefined" != typeof window && void 0 !== window.document,
      getPixelRatio: function() {
        return window && window.devicePixelRatio || 1
      },
      getStyle: function(t, e) {
        return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e)
      },
      getWidth: function(t) {
        var e = this.getStyle(t, "width");
        return "auto" === e && (e = t.offsetWidth), parseFloat(e)
      },
      getHeight: function(t) {
        var e = this.getStyle(t, "height");
        return "auto" === e && (e = t.offsetHeight), parseFloat(e)
      },
      getDomById: function(t) {
        return t ? document.getElementById(t) : null
      },
      getRelativePosition: function(t, e) {
        var n = e.get("el"),
          r = n.getBoundingClientRect(),
          i = r.top,
          o = r.right,
          a = r.bottom,
          s = r.left,
          c = parseFloat(this.getStyle(n, "padding-left")),
          u = parseFloat(this.getStyle(n, "padding-top")),
          l = o - s - c - parseFloat(this.getStyle(n, "padding-right")),
          f = a - i - u - parseFloat(this.getStyle(n, "padding-bottom")),
          p = e.get("pixelRatio");
        return {
          x: Math.round((t.x - s - c) / l * n.width / p),
          y: Math.round((t.y - i - u) / f * n.height / p)
        }
      },
      addEventListener: function(t, e, n) {
        o.isBrowser && t.addEventListener(e, n, a)
      },
      removeEventListener: function(t, e, n) {
        o.isBrowser && t.removeEventListener(e, n, a)
      },
      createEvent: function(t, e) {
        return r(t, e)
      },
      measureText: function(t, e, n) {
        return n || (n = document.createElement("canvas").getContext("2d")), n.font = e || "12px sans-serif", n.measureText(t)
      }
    }, t.exports = o
  }, function(t, e, n) {
    var r = n(27);
    t.exports = function(t) {
      var e = r(t);
      return e.charAt(0).toUpperCase() + e.substring(1)
    }
  }, function(t, e, n) {
    var r = n(27);
    t.exports = function(t) {
      var e = r(t);
      return e.charAt(0).toLowerCase() + e.substring(1)
    }
  }, function(t, e, n) {
    var r = n(6);
    t.exports = function(t) {
      return r(t, "Boolean")
    }
  }, function(t, e, n) {
    var r = n(6);
    t.exports = function(t) {
      return r(t, "Function")
    }
  }, function(t, e) {
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      },
      r = "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? function(t) {
        return void 0 === t ? "undefined" : n(t)
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : n(t)
      };
    t.exports = function(t) {
      return "object" === (void 0 === t ? "undefined" : r(t)) && null !== t
    }
  }, function(t, e, n) {
    function r(t, e, n, s) {
      n = n || 0, s = s || a;
      for (var c in e)
        if (e.hasOwnProperty(c)) {
          var u = e[c];
          null !== u && i(u) ? (i(t[c]) || (t[c] = {}), n < s ? r(t[c], u, n + 1, s) : t[c] = e[c]) : o(u) ? (t[c] = [], t[c] = t[c].concat(u)) : void 0 !== u && (t[c] = u)
        }
    }
    var i = n(28),
      o = n(11),
      a = 5;
    t.exports = function() {
      for (var t = new Array(arguments.length), e = t.length, n = 0; n < e; n++) t[n] = arguments[n];
      for (var i = t[0], o = 1; o < e; o++) r(i, t[o]);
      return i
    }
  }, function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    var i = n(0),
      o = function() {
        function t(e) {
          r(this, t), i.mix(this, e), this._init()
        }
        return t.prototype._init = function() {
          var t = this,
            e = t.start,
            n = t.end,
            r = Math.min(e.x, n.x),
            i = Math.max(e.x, n.x),
            o = Math.min(e.y, n.y),
            a = Math.max(e.y, n.y);
          this.tl = {
            x: r,
            y: o
          }, this.tr = {
            x: i,
            y: o
          }, this.bl = {
            x: r,
            y: a
          }, this.br = {
            x: i,
            y: a
          }, this.width = i - r, this.height = a - o
        }, t.prototype.reset = function(t, e) {
          this.start = t, this.end = e, this._init()
        }, t.prototype.isInRange = function(t, e) {
          i.isObject(t) && (e = t.y, t = t.x);
          var n = this.tl,
            r = this.br;
          return n.x <= t && t <= r.x && n.y <= e && e <= r.y
        }, t
      }();
    t.exports = o
  }, function(t, e, n) {
    var r = n(20);
    n(53), t.exports = r
  }, function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var a = n(20),
      s = function(t) {
        function e() {
          return r(this, e), i(this, t.apply(this, arguments))
        }
        return o(e, t), e.prototype._initDefaultCfg = function() {
          this.type = "cartesian", this.transposed = !1, this.isRect = !0
        }, e.prototype.init = function(t, e) {
          this.x = {
            start: t.x,
            end: e.x
          }, this.y = {
            start: t.y,
            end: e.y
          }
        }, e.prototype.convertPoint = function(t) {
          var e = this,
            n = e.transposed,
            r = n ? "y" : "x",
            i = n ? "x" : "y",
            o = e.x,
            a = e.y;
          return {
            x: o.start + (o.end - o.start) * t[r],
            y: a.start + (a.end - a.start) * t[i]
          }
        }, e.prototype.invertPoint = function(t) {
          var e = this,
            n = e.transposed,
            r = n ? "y" : "x",
            i = n ? "x" : "y",
            o = e.x,
            a = e.y,
            s = {};
          return s[r] = (t.x - o.start) / (o.end - o.start), s[i] = (t.y - a.start) / (a.end - a.start), s
        }, e
      }(a);
    a.Cartesian = s, a.Rect = s, t.exports = s
  }, function(t, e, n) {
    t.exports = {
      Position: n(55),
      Shape: n(56),
      Size: n(57),
      Color: n(58)
    }
  }, function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" !== (void 0 === e ? "undefined" : a(e)) && "function" != typeof e ? t : e
    }

    function o(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : a(e)));
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      },
      s = n(5),
      c = n(11),
      u = n(3),
      l = function(t) {
        function e(n) {
          r(this, e);
          var o = i(this, t.call(this, n));
          return o.names = ["x", "y"], o.type = "position", o
        }
        return o(e, t), e.prototype.mapping = function(t, e) {
          var n = this.scales,
            r = this.coord,
            i = n[0],
            o = n[1],
            a = void 0,
            l = void 0,
            f = void 0;
          if (s(t) || s(e)) return [];
          if (c(e) && c(t)) {
            a = [], l = [];
            for (var p = 0, h = 0, y = t.length, d = e.length; p < y && h < d; p++, h++) f = r.convertPoint({
              x: i.scale(t[p]),
              y: o.scale(e[h])
            }), a.push(f.x), l.push(f.y)
          } else if (c(e)) t = i.scale(t), l = [], u(e, function(e) {
            e = o.scale(e), f = r.convertPoint({
              x: t,
              y: e
            }), a && a !== f.x ? (c(a) || (a = [a]), a.push(f.x)) : a = f.x, l.push(f.y)
          });
          else if (c(t)) e = o.scale(e), a = [], u(t, function(t) {
            t = i.scale(t), f = r.convertPoint({
              x: t,
              y: e
            }), l && l !== f.y ? (c(l) || (l = [l]), l.push(f.y)) : l = f.y, a.push(f.x)
          });
          else {
            t = i.scale(t), e = o.scale(e);
            var g = r.convertPoint({
              x: t,
              y: e
            });
            a = g.x, l = g.y
          }
          return [a, l]
        }, e
      }(n(16));
    t.exports = l
  }, function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" !== (void 0 === e ? "undefined" : a(e)) && "function" != typeof e ? t : e
    }

    function o(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : a(e)));
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      },
      s = function(t) {
        function e(n) {
          r(this, e);
          var o = i(this, t.call(this, n));
          return o.names = ["shape"], o.type = "shape", o.gradient = null, o
        }
        return o(e, t), e.prototype.getLinearValue = function(t) {
          var e = this.values;
          return e[Math.round((e.length - 1) * t)]
        }, e
      }(n(16));
    t.exports = s
  }, function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" !== (void 0 === e ? "undefined" : a(e)) && "function" != typeof e ? t : e
    }

    function o(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : a(e)));
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      },
      s = function(t) {
        function e(n) {
          r(this, e);
          var o = i(this, t.call(this, n));
          return o.names = ["size"], o.type = "size", o.gradient = null, o
        }
        return o(e, t), e
      }(n(16));
    t.exports = s
  }, function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var a = n(0),
      s = n(59),
      c = function(t) {
        function e(n) {
          r(this, e);
          var o = i(this, t.call(this, n));
          return o.names = ["color"], o.type = "color", o.gradient = null, a.isString(o.values) && (o.linear = !0), o
        }
        return o(e, t), e.prototype.getLinearValue = function(t) {
          var e = this.gradient;
          if (!e) {
            var n = this.values;
            e = s.gradient(n), this.gradient = e
          }
          return e(t)
        }, e
      }(n(16));
    t.exports = c
  }, function(t, e, n) {
    function r(t, e, n, r) {
      return t[r] + (e[r] - t[r]) * n
    }

    function i(t) {
      return "#" + o(t[0]) + o(t[1]) + o(t[2])
    }

    function o(t) {
      return t = Math.round(t), 1 === (t = t.toString(16)).length && (t = "0" + t), t
    }

    function a(t, e) {
      var n = t.length - 1,
        o = Math.floor(n * e),
        a = n * e - o,
        s = t[o],
        c = o === n ? s : t[o + 1];
      return i([r(s, c, a, 0), r(s, c, a, 1), r(s, c, a, 2)])
    }

    function s(t) {
      var e = [];
      return e.push(parseInt(t.substr(1, 2), 16)), e.push(parseInt(t.substr(3, 2), 16)), e.push(parseInt(t.substr(5, 2), 16)), e
    }
    var c = n(0),
      u = {
        black: "#000000",
        blue: "#0000ff",
        grey: "#808080",
        green: "#008000",
        orange: "#ffa500",
        pink: "#ffc0cb",
        purple: "#800080",
        red: "#ff0000",
        white: "#ffffff",
        yellow: "#ffff00"
      },
      l = {
        toHex: function(t) {
          if (u[t]) return u[t];
          if ("#" === t[0]) {
            if (7 === t.length) return t;
            var e = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(t, e, n, r) {
              return "#" + e + e + n + n + r + r
            });
            return u[t] = e, e
          }
          var n = t.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
          return n.shift(), n = i(n), u[t] = n, n
        },
        hex2arr: s,
        gradient: function(t) {
          var e = [];
          return c.isString(t) && (t = t.split("-")), c.each(t, function(t) {
              -1 === t.indexOf("#") && (t = l.toHex(t)), e.push(s(t))
            }),
            function(t) {
              return a(e, t)
            }
        }
      };
    t.exports = l
  }, function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t) {
      if (!t.length) return {
        min: 0,
        max: 0
      };
      var e = Math.max.apply(null, t);
      return {
        min: Math.min.apply(null, t),
        max: e
      }
    }
    var o = n(0),
      a = n(1),
      s = n(61),
      c = {
        linear: "Linear",
        cat: "Cat",
        timeCat: "TimeCat",
        identity: "Identity"
      },
      u = function() {
        function t(e) {
          r(this, t), this.defs = {}, o.mix(this, e)
        }
        return t.prototype._getDef = function(t) {
          var e = this.defs,
            n = null;
          return (a.scales[t] || e[t]) && (n = o.mix({}, a.scales[t]), o.each(e[t], function(t, e) {
            o.isNil(t) ? delete n[e] : n[e] = t
          })), n
        }, t.prototype._getDefaultType = function(t, e) {
          var n = "linear",
            r = o.Array.firstValue(e, t);
          return o.isArray(r) && (r = r[0]), o.isString(r) && (n = "cat"), n
        }, t.prototype._getScaleCfg = function(t, e, n) {
          var r = {
              field: e
            },
            a = o.Array.values(n, e);
          if (r.values = a, "cat" !== t && "timeCat" !== t) {
            var s = i(a),
              c = s.min,
              u = s.max;
            r.min = c, r.max = u, r.nice = !0
          }
          return r
        }, t.prototype.createScale = function(t, e) {
          var n = this,
            r = n._getDef(t),
            i = void 0;
          if (!e || !e.length) return i = r && r.type ? new s[c[r.type]](r) : new s.Identity({
            value: t,
            field: t.toString(),
            values: [t]
          });
          var a = e[0][t];
          if (null === a && (a = o.Array.firstValue(e, t)), o.isNumber(t) || o.isNil(a) && !r) i = new s.Identity({
            value: t,
            field: t.toString(),
            values: [t]
          });
          else {
            var u = void 0;
            r && (u = r.type), u = u || n._getDefaultType(t, e);
            var l = n._getScaleCfg(u, t, e);
            r && o.mix(l, r), i = new s[c[u]](l)
          }
          return i
        }, t
      }();
    t.exports = u
  }, function(t, e, n) {
    var r = n(13);
    n(62), n(65), n(34), t.exports = r
  }, function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" !== (void 0 === e ? "undefined" : a(e)) && "function" != typeof e ? t : e
    }

    function o(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : a(e)));
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      },
      s = n(5),
      c = n(3),
      u = n(13),
      l = n(63),
      f = function(t) {
        function e() {
          return r(this, e), i(this, t.apply(this, arguments))
        }
        return o(e, t), e.prototype._initDefaultCfg = function() {
          t.prototype._initDefaultCfg.call(this), this.type = "linear", this.isLinear = !0, this.nice = !1, this.min = null, this.minLimit = null, this.max = null, this.maxLimit = null, this.tickCount = null, this.tickInterval = null, this.snapArray = null
        }, e.prototype.init = function() {
          var t = this;
          if (t.ticks) {
            var e = t.ticks,
              n = t.translate(e[0]),
              r = t.translate(e[e.length - 1]);
            (s(t.min) || t.min > n) && (t.min = n), (s(t.max) || t.max < r) && (t.max = r)
          } else t.min = t.translate(t.min), t.max = t.translate(t.max), t.initTicks()
        }, e.prototype.calculateTicks = function() {
          var t = this.min,
            e = this.max,
            n = this.minLimit,
            r = this.maxLimit,
            i = this.tickCount,
            o = this.tickInterval,
            a = this.snapArray;
          if (1 === i) throw new Error("linear scale'tickCount should not be 1");
          if (e < t) throw new Error("max: " + e + " should not be less than min: " + t);
          return l({
            min: t,
            max: e,
            minLimit: n,
            maxLimit: r,
            minCount: i,
            maxCount: i,
            interval: o,
            snapArray: a
          }).ticks
        }, e.prototype.initTicks = function() {
          var t = this,
            e = t.calculateTicks();
          if (t.nice) t.ticks = e, t.min = e[0], t.max = e[e.length - 1];
          else {
            var n = [];
            c(e, function(e) {
              e >= t.min && e <= t.max && n.push(e)
            }), n.length || (n.push(t.min), n.push(t.max)), t.ticks = n
          }
        }, e.prototype.scale = function(t) {
          if (s(t)) return NaN;
          var e = this.max,
            n = this.min;
          if (e === n) return 0;
          var r = (t - n) / (e - n),
            i = this.rangeMin();
          return i + r * (this.rangeMax() - i)
        }, e.prototype.invert = function(t) {
          var e = (t - this.rangeMin()) / (this.rangeMax() - this.rangeMin());
          return this.min + e * (this.max - this.min)
        }, e
      }(u);
    u.Linear = f, t.exports = f
  }, function(t, e, n) {
    var r = n(5),
      i = n(64),
      o = [0, 1, 1.2, 1.5, 1.6, 2, 2.2, 2.4, 2.5, 3, 4, 5, 6, 7.5, 8, 10],
      a = [0, 1, 2, 4, 5, 10];
    t.exports = function(t) {
      var e = t.min,
        n = t.max,
        s = t.interval,
        c = [],
        u = t.minCount || 5,
        l = t.maxCount || 7,
        f = u === l,
        p = r(t.minLimit) ? -1 / 0 : t.minLimit,
        h = r(t.maxLimit) ? 1 / 0 : t.maxLimit,
        y = (u + l) / 2,
        d = y,
        g = t.snapArray ? t.snapArray : f ? o : a;
      if (e === p && n === h && f && (s = (n - e) / (d - 1)), r(e) && (e = 0), r(n) && (n = 0), n === e && (0 === e ? n = 1 : e > 0 ? e = 0 : n = 0, n - e < 5 && !s && n - e >= 1 && (s = 1)), r(s)) {
        var v = (n - e) / (y - 1);
        s = i.snapFactorTo(v, g, "ceil"), l !== u && ((d = parseInt((n - e) / s, 10)) > l && (d = l), d < u && (d = u), s = i.snapFactorTo((n - e) / (d - 1), g, "floor"))
      }
      if (t.interval || l !== u) n = Math.min(i.snapMultiple(n, s, "ceil"), h), e = Math.max(i.snapMultiple(e, s, "floor"), p), d = Math.round((n - e) / s), e = i.fixedBase(e, s), n = i.fixedBase(n, s);
      else {
        y = parseInt(y, 10);
        var m = (n + e) / 2,
          x = i.snapMultiple(m, s, "ceil"),
          b = Math.floor((y - 2) / 2),
          w = x + b * s,
          _ = void 0;
        _ = y % 2 == 0 ? x - b * s : x - (b + 1) * s, w < n && (w += s), _ > e && (_ -= s), n = i.fixedBase(w, s), e = i.fixedBase(_, s)
      }
      n = Math.min(n, h), e = Math.max(e, p), c.push(e);
      for (var S = 1; S < d; S++) {
        var P = i.fixedBase(s * S + e, s);
        P < n && c.push(P)
      }
      return c[c.length - 1] < n && c.push(n), {
        min: e,
        max: n,
        interval: s,
        count: d,
        ticks: c
      }
    }
  }, function(t, e) {
    function n(t) {
      var e = 1;
      if (t === 1 / 0 || t === -1 / 0) throw new Error("Not support Infinity!");
      if (t < 1) {
        for (var n = 0; t < 1;) e /= 10, t *= 10, n++;
        e.toString().length > o && (e = parseFloat(e.toFixed(n)))
      } else
        for (; t > 10;) e *= 10, t /= 10;
      return e
    }

    function r(t, e) {
      var n = t.length;
      if (0 === n) return NaN;
      var r = t[0];
      if (e < t[0]) return NaN;
      if (e >= t[n - 1]) return t[n - 1];
      for (var i = 1; i < t.length && !(e < t[i]); i++) r = t[i];
      return r
    }

    function i(t, e) {
      var n = t.length;
      if (0 === n) return NaN;
      var r = void 0;
      if (e > t[n - 1]) return NaN;
      if (e < t[0]) return t[0];
      for (var i = 1; i < t.length; i++)
        if (e <= t[i]) {
          r = t[i];
          break
        }
      return r
    }
    var o = 12,
      a = {
        snapFactorTo: function(t, e, r) {
          if (isNaN(t)) return NaN;
          var i = 1;
          if (0 !== t) {
            t < 0 && (i = -1);
            var s = n(t *= i);
            i *= s, t /= s
          }
          var c = (t = "floor" === r ? a.snapFloor(e, t) : "ceil" === r ? a.snapCeiling(e, t) : a.snapTo(e, t)) * i;
          return Math.abs(i) < 1 && c.toString().length > o && (c = t / parseInt(1 / i) * (i > 0 ? 1 : -1)), c
        },
        snapMultiple: function(t, e, n) {
          return ("ceil" === n ? Math.ceil(t / e) : "floor" === n ? Math.floor(t / e) : Math.round(t / e)) * e
        },
        snapTo: function(t, e) {
          var n = r(t, e),
            o = i(t, e);
          if (isNaN(n) || isNaN(o)) {
            if (t[0] >= e) return t[0];
            var a = t[t.length - 1];
            if (a <= e) return a
          }
          return Math.abs(e - n) < Math.abs(o - e) ? n : o
        },
        snapFloor: function(t, e) {
          return r(t, e)
        },
        snapCeiling: function(t, e) {
          return i(t, e)
        },
        fixedBase: function(t, e) {
          var n = e.toString(),
            r = n.indexOf(".");
          if (-1 === r) return Math.round(t);
          var i = n.substr(r + 1).length;
          return i > 20 && (i = 20), parseFloat(t.toFixed(i))
        }
      };
    t.exports = a
  }, function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" !== (void 0 === e ? "undefined" : a(e)) && "function" != typeof e ? t : e
    }

    function o(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : a(e)));
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      },
      s = n(13),
      c = n(17),
      u = function(t) {
        function e() {
          return r(this, e), i(this, t.apply(this, arguments))
        }
        return o(e, t), e.prototype._initDefaultCfg = function() {
          t.prototype._initDefaultCfg.call(this), this.isIdentity = !0, this.type = "identity", this.value = null
        }, e.prototype.getText = function() {
          return this.value.toString()
        }, e.prototype.scale = function(t) {
          return this.value !== t && c(t) ? t : this.range[0]
        }, e.prototype.invert = function() {
          return this.value
        }, e
      }(s);
    s.Identity = u, t.exports = u
  }, function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t) {
      var e = t.slice(0);
      if (e.length > 0) {
        var n = e[0],
          r = e[e.length - 1];
        0 !== n.value && e.unshift({
          value: 0
        }), 1 !== r.value && e.push({
          value: 1
        })
      }
      return e
    }
    var o = n(0),
      a = n(67),
      s = n(1),
      c = n(9).Shape,
      u = function() {
        function t(e) {
          r(this, t), this.axisCfg = {}, this.frontPlot = null, this.backPlot = null, this.axes = {}, o.mix(this, e)
        }
        return t.prototype._isHide = function(t) {
          var e = this.axisCfg;
          return !e || !1 === e[t]
        }, t.prototype._getLinePosition = function(t, e, n, r) {
          var i = "",
            o = t.field,
            a = this.axisCfg;
          return a[o] && a[o].position ? i = a[o].position : "x" === e ? i = r ? "left" : "bottom" : "y" === e && (i = n ? "right" : "left", r && (i = "bottom")), i
        }, t.prototype._getLineCfg = function(t, e, n) {
          var r = void 0,
            i = void 0,
            o = 1;
          return "x" === e ? (r = {
            x: 0,
            y: 0
          }, i = {
            x: 1,
            y: 0
          }) : "right" === n ? (r = {
            x: 1,
            y: 0
          }, i = {
            x: 1,
            y: 1
          }) : (r = {
            x: 0,
            y: 0
          }, i = {
            x: 0,
            y: 1
          }, o = -1), t.transposed && (o *= -1), {
            offsetFactor: o,
            start: t.convertPoint(r),
            end: t.convertPoint(i)
          }
        }, t.prototype._getCircleCfg = function(t) {
          return {
            startAngle: t.startAngle,
            endAngle: t.endAngle,
            center: t.center,
            radius: t.circleRadius
          }
        }, t.prototype._getRadiusCfg = function(t) {
          var e = void 0,
            n = void 0;
          return t.transposed ? (e = {
            x: 0,
            y: 0
          }, n = {
            x: 1,
            y: 0
          }) : (e = {
            x: 0,
            y: 0
          }, n = {
            x: 0,
            y: 1
          }), {
            offsetFactor: -1,
            start: t.convertPoint(e),
            end: t.convertPoint(n)
          }
        }, t.prototype._getAxisCfg = function(t, e, n, r, i) {
          var a = this,
            u = this.axisCfg,
            l = e.getTicks(),
            f = o.deepMix({
              ticks: l,
              frontContainer: this.frontPlot,
              backContainer: this.backPlot
            }, i, u[e.field]),
            p = [],
            h = f.label,
            y = l.length,
            d = 0,
            g = 0,
            v = h;
          return o.each(l, function(t, e) {
            if (o.isFunction(h)) {
              var n = h(t.text, e, y);
              v = n ? o.mix({}, s._defaultAxis.label, n) : null
            }
            if (v) {
              var r = {};
              v.textAlign && (r.textAlign = v.textAlign), v.textBaseline && (r.textBaseline = v.textBaseline);
              var i = new c.Text({
                className: "axis-label",
                attrs: o.mix({
                  x: 0,
                  y: 0,
                  text: t.text,
                  fontFamily: a.chart.get("canvas").get("fontFamily")
                }, v),
                value: t.value,
                textStyle: r,
                top: v.top,
                context: a.chart.get("canvas").get("context")
              });
              p.push(i);
              var u = i.getBBox(),
                l = u.width,
                f = u.height;
              d = Math.max(d, l), g = Math.max(g, f)
            }
          }), f.labels = p, f.maxWidth = d, f.maxHeight = g, f
        }, t.prototype._createAxis = function(t, e, n, r) {
          var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
            o = this,
            a = t.type,
            c = t.transposed,
            u = void 0,
            l = void 0,
            f = void 0;
          if ("cartesian" === a || "rect" === a) {
            var p = o._getLinePosition(e, r, i, c);
            (f = s.axis[p]).position = p, u = "Line", l = p
          } else "x" === r && !c || "y" === r && c ? (f = s.axis.circle, u = "Circle", l = "circle") : (f = s.axis.radius, u = "Line", l = "radius");
          var h = o._getAxisCfg(t, e, n, r, f);
          h.type = u, h.dimType = r, h.verticalScale = n, h.index = i, this.axes[l] = h
        }, t.prototype.createAxis = function(t, e, n) {
          var r = this;
          e && !r._isHide(e.field) && r._createAxis(t, e, n[0], "x"), o.each(n, function(n, i) {
            r._isHide(n.field) || r._createAxis(t, n, e, "y", i)
          });
          var s = this.axes,
            c = r.chart;
          if (c._isAutoPadding() || c.get("rePadding")) {
            var u = o.parsePadding(c.get("padding")),
              l = c.get("appendPadding"),
              f = c.get("legendRange") || {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
              },
              p = ["auto" === u[0] ? f.top + 2 * l : u[0], "auto" === u[1] ? f.right + l : u[1], "auto" === u[2] ? f.bottom + l : u[2], "auto" === u[3] ? f.left + l : u[3]];
            if (t.isPolar) {
              var h = s.circle;
              if (h) {
                var y = h.maxHeight,
                  d = h.maxWidth,
                  g = h.labelOffset;
                p[0] += y + g, p[1] += d + g, p[2] += y + g, p[3] += d + g
              }
            } else {
              if (s.right && "auto" === u[1]) {
                var v = s.right,
                  m = v.maxWidth,
                  x = v.labelOffset;
                p[1] += m + x
              }
              if (s.left && "auto" === u[3]) {
                var b = s.left,
                  w = b.maxWidth,
                  _ = b.labelOffset;
                p[3] += w + _
              }
              if (s.bottom && "auto" === u[2]) {
                var S = s.bottom,
                  P = S.maxHeight,
                  C = S.labelOffset;
                p[2] += P + C
              }
            }
            c.set("_padding", p), c._updateLayout(p)
          }
          o.each(s, function(e) {
            var n = e.type,
              s = e.grid,
              c = e.verticalScale,
              u = e.ticks,
              l = e.dimType,
              f = e.position,
              p = e.index,
              h = void 0;
            if (t.isPolar ? "Line" === n ? h = r._getRadiusCfg(t) : "Circle" === n && (h = r._getCircleCfg(t)) : h = r._getLineCfg(t, l, f), s && c) {
              var y = [],
                d = i(c.getTicks());
              o.each(u, function(e) {
                var n = [];
                o.each(d, function(r) {
                  var i = "x" === l ? e.value : r.value,
                    o = "x" === l ? r.value : e.value,
                    a = t.convertPoint({
                      x: i,
                      y: o
                    });
                  n.push(a)
                }), y.push({
                  points: n,
                  _id: "axis-" + l + p + "-grid-" + e.tickValue
                })
              }), e.gridPoints = y, t.isPolar && "arc" === s.type && (e.center = t.center, e.startAngle = t.startAngle, e.endAngle = t.endAngle)
            }
            h._id = "axis-" + l, o.isNil(p) || (h._id = "axis-" + l + p), new a[n](o.mix(e, h))
          })
        }, t.prototype.clear = function() {
          this.axes = {}, this.frontPlot.clear(), this.backPlot.clear()
        }, t
      }();
    t.exports = u
  }, function(t, e, n) {
    var r = n(24);
    n(68), t.exports = r
  }, function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var a = n(0),
      s = n(24),
      c = function(t) {
        function e() {
          return r(this, e), i(this, t.apply(this, arguments))
        }
        return o(e, t), e.prototype._initDefaultCfg = function() {
          t.prototype._initDefaultCfg.call(this), this.start = null, this.end = null
        }, e.prototype.getOffsetPoint = function(t) {
          var e = this.start,
            n = this.end;
          return {
            x: e.x + (n.x - e.x) * t,
            y: e.y + (n.y - e.y) * t
          }
        }, e.prototype.getAxisVector = function() {
          var t = this.start,
            e = this.end;
          return [e.x - t.x, e.y - t.y]
        }, e.prototype.drawLine = function(t) {
          var e = this.getContainer(t.top),
            n = this.start,
            r = this.end;
          e.addShape("line", {
            className: "axis-line",
            attrs: a.mix({
              x1: n.x,
              y1: n.y,
              x2: r.x,
              y2: r.y
            }, t)
          })
        }, e
      }(s);
    s.Line = c, t.exports = c
  }, function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    var i = n(0),
      o = n(30),
      a = n(31),
      s = n(37).requestAnimationFrame,
      c = function() {
        function t(e) {
          r(this, t), this._attrs = i.mix({
            type: "canvas",
            children: []
          }, e), this._initPixelRatio(), this._initCanvas()
        }
        return t.prototype.get = function(t) {
          return this._attrs[t]
        }, t.prototype.set = function(t, e) {
          this._attrs[t] = e
        }, t.prototype._initPixelRatio = function() {
          this.get("pixelRatio") || this.set("pixelRatio", i.getPixelRatio())
        }, t.prototype.beforeDraw = function() {
          var t = this._attrs.context,
            e = this._attrs.el;
          !i.isWx && !i.isMy && t && t.clearRect(0, 0, e.width, e.height)
        }, t.prototype._initCanvas = function() {
          var t = this,
            e = t.get("el"),
            n = t.get("context"),
            r = void 0;
          if (!(r = n ? n.canvas : i.isString(e) ? i.getDomById(e) : e)) throw new Error("Please specify the id or el of the chart!");
          n && r && !r.getContext && (r.getContext = function() {
            return n
          });
          var o = t.get("width");
          o || (o = i.getWidth(r));
          var a = t.get("height");
          a || (a = i.getHeight(r)), t.set("canvas", this), t.set("el", r), t.set("context", n || r.getContext("2d")), t.changeSize(o, a)
        }, t.prototype.changeSize = function(t, e) {
          var n = this.get("pixelRatio"),
            r = this.get("el");
          i.isBrowser && (r.style.width = t + "px", r.style.height = e + "px"), i.isWx || i.isMy || (r.width = t * n, r.height = e * n, 1 !== n && this.get("context").scale(n, n)), this.set("width", t), this.set("height", e)
        }, t.prototype.getWidth = function() {
          var t = this.get("pixelRatio");
          return this.get("width") * t
        }, t.prototype.getHeight = function() {
          var t = this.get("pixelRatio");
          return this.get("height") * t
        }, t.prototype.getPointByClient = function(t, e) {
          var n = this.get("el"),
            r = n.getBoundingClientRect(),
            i = r.right - r.left,
            o = r.bottom - r.top;
          return {
            x: (t - r.left) * (n.width / i),
            y: (e - r.top) * (n.height / o)
          }
        }, t.prototype._beginDraw = function() {
          this._attrs.toDraw = !0
        }, t.prototype._endDraw = function() {
          this._attrs.toDraw = !1
        }, t.prototype.draw = function() {
          function t() {
            e.set("animateHandler", s(function() {
              e.set("animateHandler", void 0), e.get("toDraw") && t()
            })), e.beforeDraw();
            try {
              for (var n = e._attrs.context, r = e._attrs.children, o = 0, a = r.length; o < a; o++) r[o].draw(n);
              (i.isWx || i.isMy) && n.draw()
            } catch (t) {
              console.warn("error in draw canvas, detail as:"), console.warn(t), e._endDraw()
            }
            e._endDraw()
          }
          var e = this;
          e.get("destroyed") || (e.get("animateHandler") ? this._beginDraw() : t())
        }, t.prototype.destroy = function() {
          this.get("destroyed") || (this.clear(), this._attrs = {}, this.set("destroyed", !0))
        }, t
      }();
    i.mix(c.prototype, o, {
      getGroupClass: function() {
        return a
      }
    }), t.exports = c
  }, function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var a = n(0),
      s = n(2),
      c = function(t) {
        function e() {
          return r(this, e), i(this, t.apply(this, arguments))
        }
        return o(e, t), e.prototype._initProperties = function() {
          t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, this._attrs.type = "rect"
        }, e.prototype.getDefaultAttrs = function() {
          return {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            radius: 0,
            lineWidth: 0
          }
        }, e.prototype.createPath = function(t) {
          var e = this.get("attrs"),
            n = e.x,
            r = e.y,
            i = e.width,
            o = e.height;
          t.beginPath();
          var s = e.radius;
          s && i * o ? (s = a.parsePadding(s), t.moveTo(n + s[0], r), t.lineTo(n + i - s[1], r), t.arc(n + i - s[1], r + s[1], s[1], -Math.PI / 2, 0, !1), t.lineTo(n + i, r + o - s[2]), t.arc(n + i - s[2], r + o - s[2], s[2], 0, Math.PI / 2, !1), t.lineTo(n + s[3], r + o), t.arc(n + s[3], r + o - s[3], s[3], Math.PI / 2, Math.PI, !1), t.lineTo(n, r + s[0]), t.arc(n + s[0], r + s[0], s[0], Math.PI, 3 * Math.PI / 2, !1), t.closePath()) : t.rect(n, r, i, o)
        }, e.prototype.calculateBox = function() {
          var t = this.get("attrs"),
            e = t.x,
            n = t.y;
          return {
            minX: e,
            minY: n,
            maxX: e + t.width,
            maxY: n + t.height
          }
        }, e
      }(s);
    s.Rect = c, t.exports = c
  }, function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var a = n(2),
      s = function(t) {
        function e() {
          return r(this, e), i(this, t.apply(this, arguments))
        }
        return o(e, t), e.prototype._initProperties = function() {
          t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, this._attrs.type = "circle"
        }, e.prototype.getDefaultAttrs = function() {
          return {
            x: 0,
            y: 0,
            r: 0,
            lineWidth: 0
          }
        }, e.prototype.createPath = function(t) {
          var e = this.get("attrs"),
            n = e.x,
            r = e.y,
            i = e.r;
          t.beginPath(), t.arc(n, r, i, 0, 2 * Math.PI, !1), t.closePath()
        }, e.prototype.calculateBox = function() {
          var t = this.get("attrs"),
            e = t.x,
            n = t.y,
            r = t.r;
          return {
            minX: e - r,
            maxX: e + r,
            minY: n - r,
            maxY: n + r
          }
        }, e
      }(a);
    a.Circle = s, t.exports = s
  }, function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var a = n(2),
      s = n(12),
      c = function(t) {
        function e() {
          return r(this, e), i(this, t.apply(this, arguments))
        }
        return o(e, t), e.prototype._initProperties = function() {
          t.prototype._initProperties.call(this), this._attrs.canStroke = !0, this._attrs.type = "line"
        }, e.prototype.getDefaultAttrs = function() {
          return {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            lineWidth: 1
          }
        }, e.prototype.createPath = function(t) {
          var e = this.get("attrs"),
            n = e.x1,
            r = e.y1,
            i = e.x2,
            o = e.y2;
          t.beginPath(), t.moveTo(n, r), t.lineTo(i, o)
        }, e.prototype.calculateBox = function() {
          var t = this.get("attrs"),
            e = t.x1,
            n = t.y1,
            r = t.x2,
            i = t.y2;
          return s.getBBoxFromLine(e, n, r, i)
        }, e
      }(a);
    a.Line = c, t.exports = c
  }, function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var a = n(2),
      s = n(12),
      c = function(t) {
        function e() {
          return r(this, e), i(this, t.apply(this, arguments))
        }
        return o(e, t), e.prototype._initProperties = function() {
          t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, this._attrs.type = "polygon"
        }, e.prototype.getDefaultAttrs = function() {
          return {
            points: null,
            lineWidth: 0
          }
        }, e.prototype.createPath = function(t) {
          var e = this.get("attrs").points;
          t.beginPath();
          for (var n = 0, r = e.length; n < r; n++) {
            var i = e[n];
            0 === n ? t.moveTo(i.x, i.y) : t.lineTo(i.x, i.y)
          }
          t.closePath()
        }, e.prototype.calculateBox = function() {
          var t = this.get("attrs").points;
          return s.getBBoxFromPoints(t)
        }, e
      }(a);
    a.Polygon = c, t.exports = c
  }, function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var a = n(2),
      s = n(36),
      c = n(12),
      u = function(t) {
        function e() {
          return r(this, e), i(this, t.apply(this, arguments))
        }
        return o(e, t), e.prototype._initProperties = function() {
          t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, this._attrs.type = "polyline"
        }, e.prototype.getDefaultAttrs = function() {
          return {
            points: null,
            lineWidth: 1,
            smooth: !1
          }
        }, e.prototype.createPath = function(t) {
          var e = this.get("attrs"),
            n = e.points,
            r = e.smooth;
          if (t.beginPath(), t.moveTo(n[0].x, n[0].y), r)
            for (var i = [
                [0, 0],
                [1, 1]
              ], o = s.smooth(n, !1, i), a = 0, c = o.length; a < c; a++) {
              var u = o[a];
              t.bezierCurveTo(u[1], u[2], u[3], u[4], u[5], u[6])
            } else {
              var l = void 0,
                f = void 0;
              for (l = 1, f = n.length - 1; l < f; l++) t.lineTo(n[l].x, n[l].y);
              t.lineTo(n[f].x, n[f].y)
            }
        }, e.prototype.calculateBox = function() {
          var t = this.get("attrs"),
            e = t.points;
          if (t.smooth) {
            for (var n = [], r = [
                [0, 0],
                [1, 1]
              ], i = s.smooth(e, !1, r), o = 0, a = i.length; o < a; o++) {
              var u = i[o];
              if (0 === o) n.push([e[0].x, e[0].y, u[1], u[2], u[3], u[4], u[5], u[6]]);
              else {
                var l = i[o - 1];
                n.push([l[5], l[6], u[1], u[2], u[3], u[4], u[5], u[6]])
              }
            }
            return c.getBBoxFromBezierGroup(n)
          }
          return c.getBBoxFromPoints(e)
        }, e
      }(a);
    a.Polyline = u, t.exports = u
  }, function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var a = n(2),
      s = n(12),
      c = function(t) {
        function e() {
          return r(this, e), i(this, t.apply(this, arguments))
        }
        return o(e, t), e.prototype._initProperties = function() {
          t.prototype._initProperties.call(this), this._attrs.canStroke = !0, this._attrs.type = "arc"
        }, e.prototype.getDefaultAttrs = function() {
          return {
            x: 0,
            y: 0,
            r: 0,
            startAngle: 0,
            endAngle: 2 * Math.PI,
            clockwise: !1,
            lineWidth: 1
          }
        }, e.prototype.createPath = function(t) {
          var e = this.get("attrs"),
            n = e.x,
            r = e.y,
            i = e.r,
            o = e.startAngle,
            a = e.endAngle,
            s = e.clockwise;
          t.beginPath(), t.arc(n, r, i, o, a, s)
        }, e.prototype.calculateBox = function() {
          var t = this.get("attrs"),
            e = t.x,
            n = t.y,
            r = t.r,
            i = t.startAngle,
            o = t.endAngle,
            a = t.clockwise;
          return s.getBBoxFromArc(e, n, r, i, o, a)
        }, e
      }(a);
    a.Arc = c, t.exports = c
  }, function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var a = n(2),
      s = n(12),
      c = function(t) {
        function e() {
          return r(this, e), i(this, t.apply(this, arguments))
        }
        return o(e, t), e.prototype._initProperties = function() {
          t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, this._attrs.type = "sector"
        }, e.prototype.getDefaultAttrs = function() {
          return {
            x: 0,
            y: 0,
            lineWidth: 0,
            r: 0,
            r0: 0,
            startAngle: 0,
            endAngle: 2 * Math.PI,
            clockwise: !1
          }
        }, e.prototype.createPath = function(t) {
          var e = this.get("attrs"),
            n = e.x,
            r = e.y,
            i = e.startAngle,
            o = e.endAngle,
            a = e.r,
            s = e.r0,
            c = e.clockwise;
          t.beginPath();
          var u = Math.cos(i),
            l = Math.sin(i);
          t.moveTo(u * s + n, l * s + r), t.lineTo(u * a + n, l * a + r), t.arc(n, r, a, i, o, c), t.lineTo(Math.cos(o) * s + n, Math.sin(o) * s + r), 0 !== s && t.arc(n, r, s, o, i, !c), t.closePath()
        }, e.prototype.calculateBox = function() {
          var t = this.get("attrs"),
            e = t.x,
            n = t.y,
            r = t.r,
            i = t.r0,
            o = t.startAngle,
            a = t.endAngle,
            c = t.clockwise,
            u = s.getBBoxFromArc(e, n, r, o, a, c),
            l = s.getBBoxFromArc(e, n, i, o, a, c);
          return {
            minX: Math.min(u.minX, l.minX),
            minY: Math.min(u.minY, l.minY),
            maxX: Math.max(u.maxX, l.maxX),
            maxY: Math.max(u.maxY, l.maxY)
          }
        }, e
      }(a);
    a.Sector = c, t.exports = c
  }, function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var a = n(0),
      s = n(2),
      c = 0,
      u = {},
      l = function(t) {
        function e() {
          return r(this, e), i(this, t.apply(this, arguments))
        }
        return o(e, t), e.prototype._initProperties = function() {
          t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, this._attrs.type = "text"
        }, e.prototype.getDefaultAttrs = function() {
          return {
            lineWidth: 0,
            lineCount: 1,
            fontSize: 12,
            fontFamily: "sans-serif",
            fontStyle: "normal",
            fontWeight: "normal",
            fontVariant: "normal",
            textAlign: "start",
            textBaseline: "bottom",
            lineHeight: null,
            textArr: null
          }
        }, e.prototype._getFontStyle = function() {
          var t = this._attrs.attrs,
            e = t.fontSize,
            n = t.fontFamily,
            r = t.fontWeight;
          return t.fontStyle + " " + t.fontVariant + " " + r + " " + e + "px " + n
        }, e.prototype._afterAttrsSet = function() {
          var t = this._attrs.attrs;
          if (t.font = this._getFontStyle(), t.text) {
            var e = t.text,
              n = void 0;
            if (a.isString(e) && -1 !== e.indexOf("\n")) {
              var r = (n = e.split("\n")).length;
              t.lineCount = r, t.textArr = n
            }
          }
          this.set("attrs", t)
        }, e.prototype._getTextHeight = function() {
          var t = this._attrs.attrs;
          if (t.height) return t.height;
          var e = t.lineCount,
            n = 1 * t.fontSize;
          return e > 1 ? n * e + this._getSpaceingY() * (e - 1) : n
        }, e.prototype._getSpaceingY = function() {
          var t = this._attrs.attrs,
            e = t.lineHeight,
            n = 1 * t.fontSize;
          return e ? e - n : .14 * n
        }, e.prototype.drawInner = function(t) {
          var e = this,
            n = e._attrs.attrs,
            r = n.text;
          if (r) {
            var i = n.textArr,
              o = 1 * n.fontSize,
              s = e._getSpaceingY(),
              c = n.x,
              u = n.y;
            n.rotate && (t.translate(c, u), t.rotate(n.rotate), c = 0, u = 0);
            var l = n.textBaseline,
              f = void 0;
            i && (f = e._getTextHeight());
            var p = void 0;
            if (e.hasFill()) {
              var h = n.fillOpacity;
              if (a.isNil(h) || 1 === h || (t.globalAlpha = h), i)
                for (var y = 0, d = i.length; y < d; y++) {
                  var g = i[y];
                  p = u + y * (s + o) - f + o, "middle" === l && (p += f - o - (f - o) / 2), "top" === l && (p += f - o), t.fillText(g, c, p)
                } else t.fillText(r, c, u)
            }
            if (e.hasStroke())
              if (i)
                for (var v = 0, m = i.length; v < m; v++) {
                  var x = i[v];
                  p = u + v * (s + o) - f + o, "middle" === l && (p += f - o - (f - o) / 2), "top" === l && (p += f - o), t.strokeText(x, c, p)
                } else t.strokeText(r, c, u)
          }
        }, e.prototype.calculateBox = function() {
          var t = this,
            e = t._attrs.attrs,
            n = e.x,
            r = e.y,
            i = e.textAlign,
            o = e.textBaseline,
            a = t._getTextWidth();
          if (!a) return {
            minX: n,
            minY: r,
            maxX: n,
            maxY: r
          };
          var s = t._getTextHeight(),
            c = {
              x: n,
              y: r - s
            };
          return i && ("end" === i || "right" === i ? c.x -= a : "center" === i && (c.x -= a / 2)), o && ("top" === o ? c.y += s : "middle" === o && (c.y += s / 2)), {
            minX: c.x,
            minY: c.y,
            maxX: c.x + a,
            maxY: c.y + s
          }
        }, e.prototype._getTextWidth = function() {
          var t = this._attrs.attrs;
          if (t.width) return t.width;
          var e = t.text,
            n = this.get("context");
          if (!a.isNil(e)) {
            var r = t.font,
              i = t.textArr,
              o = e + "" + r;
            if (u[o]) return u[o];
            var s = 0;
            if (i)
              for (var l = 0, f = i.length; l < f; l++) {
                var p = i[l];
                s = Math.max(s, a.measureText(p, r, n).width)
              } else s = a.measureText(e, r, n).width;
            return c > 5e3 && (c = 0, u = {}), c++, u[o] = s, s
          }
        }, e
      }(s);
    s.Text = l, t.exports = l
  }, function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var a = n(2),
      s = function(t) {
        function e() {
          return r(this, e), i(this, t.apply(this, arguments))
        }
        return o(e, t), e.prototype._initProperties = function() {
          t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, this._attrs.createPath = null, this._attrs.type = "custom"
        }, e.prototype.createPath = function(t) {
          var e = this.get("createPath");
          e && e.call(this, t)
        }, e.prototype.calculateBox = function() {
          var t = this.get("calculateBox");
          return t && t.call(this)
        }, e
      }(a);
    a.Custom = s, t.exports = s
  }, function(t, e, n) {
    var r = n(1),
      i = n(0);
    setTimeout(function() {
      if (r.trackable && i.isBrowser) {
        var t = new Image,
          e = {
            pg: document.URL,
            r: (new Date).getTime(),
            f2: !0,
            version: r.version,
            page_type: "syslog"
          },
          n = encodeURIComponent(JSON.stringify([e]));
        t.src = "https://kcart.alipay.com/web/bi.do?BIProfile=merge&d=" + n
      }
    }, 3e3)
  }, function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var a = n(38),
      s = n(7);
    n(32);
    var c = function(t) {
      function e() {
        return r(this, e), i(this, t.apply(this, arguments))
      }
      return o(e, t), e.prototype.getDefaultCfg = function() {
        var e = t.prototype.getDefaultCfg.call(this);
        return e.type = "line", e.sortable = !0, e
      }, e
    }(a);
    s.Line = c, t.exports = c
  }, function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var a = n(7),
      s = n(0),
      c = n(39);
    n(82);
    var u = function(t) {
      function e(n) {
        r(this, e);
        var o = i(this, t.call(this, n));
        return s.mix(o, c), o
      }
      return o(e, t), e.prototype.getDefaultCfg = function() {
        var e = t.prototype.getDefaultCfg.call(this);
        return e.type = "interval", e.shapeType = "interval", e.generatePoints = !0, e
      }, e.prototype.createShapePointsCfg = function(e) {
        var n = t.prototype.createShapePointsCfg.call(this, e);
        return n.size = this.getNormalizedSize(e), n
      }, e.prototype.clearInner = function() {
        t.prototype.clearInner.call(this), this.set("defaultSize", null)
      }, e
    }(a);
    a.Interval = u, t.exports = u
  }, function(t, e, n) {
    function r(t) {
      var e = t.x,
        n = t.y,
        r = t.y0,
        i = t.size,
        a = r,
        s = n;
      o.isArray(n) && (s = n[1], a = n[0]);
      var c = void 0,
        u = void 0;
      return o.isArray(e) ? (c = e[0], u = e[1]) : (c = e - i / 2, u = e + i / 2), [{
        x: c,
        y: a
      }, {
        x: c,
        y: s
      }, {
        x: u,
        y: s
      }, {
        x: u,
        y: a
      }]
    }

    function i(t) {
      for (var e = [], n = [], r = 0, i = t.length; r < i; r++) {
        var o = t[r];
        e.push(o.x), n.push(o.y)
      }
      var a = Math.min.apply(null, e),
        s = Math.min.apply(null, n);
      return {
        x: a,
        y: s,
        width: Math.max.apply(null, e) - a,
        height: Math.max.apply(null, n) - s
      }
    }
    var o = n(0),
      a = n(8),
      s = n(4),
      c = n(1),
      u = a.registerFactory("interval", {
        defaultShapeType: "rect",
        getDefaultPoints: function(t) {
          return r(t)
        }
      });
    a.registerShape("interval", "rect", {
      draw: function(t, e) {
        var n = this.parsePoints(t.points),
          r = o.mix({
            fill: t.color
          }, c.shape.interval, t.style);
        if (t.isInCircle) {
          var a = n.slice(0);
          this._coord.transposed && (a = [n[0], n[3], n[2], n[1]]);
          var u = t.center,
            l = u.x,
            f = u.y,
            p = [1, 0],
            h = [a[0].x - l, a[0].y - f],
            y = [a[1].x - l, a[1].y - f],
            d = [a[2].x - l, a[2].y - f],
            g = s.angleTo(p, y),
            v = s.angleTo(p, d),
            m = s.length(h),
            x = s.length(y);
          return g >= 1.5 * Math.PI && (g -= 2 * Math.PI), v >= 1.5 * Math.PI && (v -= 2 * Math.PI), e.addShape("Sector", {
            className: "interval",
            attrs: o.mix({
              x: l,
              y: f,
              r: x,
              r0: m,
              startAngle: g,
              endAngle: v
            }, r)
          })
        }
        var b = i(n);
        return e.addShape("rect", {
          className: "interval",
          attrs: o.mix(b, r)
        })
      }
    }), t.exports = u
  }, function(t, e, n) {
    t.exports = {
      Stack: n(84),
      Dodge: n(86)
    }
  }, function(t, e, n) {
    var r = n(85);
    t.exports = r
  }, function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" !== (void 0 === e ? "undefined" : a(e)) && "function" != typeof e ? t : e
    }

    function o(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : a(e)));
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      },
      s = n(11),
      c = n(5),
      u = n(21),
      l = function(t) {
        function e() {
          return r(this, e), i(this, t.apply(this, arguments))
        }
        return o(e, t), e.prototype._initDefaultCfg = function() {
          this.xField = null, this.yField = null
        }, e.prototype.processAdjust = function(t) {
          this.processStack(t)
        }, e.prototype.processStack = function(t) {
          var e = this,
            n = e.xField,
            r = e.yField,
            i = t.length,
            o = {
              positive: {},
              negative: {}
            };
          e.reverseOrder && (t = t.slice(0).reverse());
          for (var a = 0; a < i; a++)
            for (var u = t[a], l = 0, f = u.length; l < f; l++) {
              var p = u[l],
                h = p[n] || 0,
                y = p[r],
                d = h.toString();
              if (y = s(y) ? y[1] : y, !c(y)) {
                var g = y >= 0 ? "positive" : "negative";
                o[g][d] || (o[g][d] = 0), p[r] = [o[g][d], y + o[g][d]], o[g][d] += y
              }
            }
        }, e
      }(u);
    u.Stack = l, t.exports = l
  }, function(t, e, n) {
    var r = n(87);
    t.exports = r
  }, function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" !== (void 0 === e ? "undefined" : a(e)) && "function" != typeof e ? t : e
    }

    function o(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : a(e)));
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      },
      s = n(21),
      c = n(3),
      u = function(t) {
        function e() {
          return r(this, e), i(this, t.apply(this, arguments))
        }
        return o(e, t), e.prototype._initDefaultCfg = function() {
          this.marginRatio = .5, this.dodgeRatio = .5, this.adjustNames = ["x", "y"]
        }, e.prototype.getDodgeOffset = function(t, e, n) {
          var r = this,
            i = t.pre,
            o = t.next,
            a = o - i,
            s = a * r.dodgeRatio / n,
            c = r.marginRatio * s;
          return (i + o) / 2 + (.5 * (a - n * s - (n - 1) * c) + ((e + 1) * s + e * c) - .5 * s - .5 * a)
        }, e.prototype.processAdjust = function(t) {
          var e = this,
            n = t.length,
            r = e.xField;
          c(t, function(t, i) {
            for (var o = 0, a = t.length; o < a; o++) {
              var s = t[o],
                c = s[r],
                u = {
                  pre: c - .5,
                  next: c + .5
                },
                l = e.getDodgeOffset(u, i, n);
              s[r] = l
            }
          })
        }, e
      }(s);
    s.Dodge = u, t.exports = u
  }, function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var a = n(20),
      s = n(4),
      c = n(22),
      u = function(t) {
        function e() {
          return r(this, e), i(this, t.apply(this, arguments))
        }
        return o(e, t), e.prototype._initDefaultCfg = function() {
          this.type = "polar", this.startAngle = -Math.PI / 2, this.endAngle = 3 * Math.PI / 2, this.inner = 0, this.innerRadius = 0, this.isPolar = !0, this.transposed = !1, this.center = null, this.radius = null
        }, e.prototype.init = function(t, e) {
          var n = this,
            r = n.inner || n.innerRadius,
            i = Math.abs(e.x - t.x),
            o = Math.abs(e.y - t.y),
            a = void 0,
            s = void 0;
          n.startAngle === -Math.PI && 0 === n.endAngle ? (a = Math.min(i / 2, o), s = {
            x: (t.x + e.x) / 2,
            y: t.y
          }) : (a = Math.min(i, o) / 2, s = {
            x: (t.x + e.x) / 2,
            y: (t.y + e.y) / 2
          });
          var c = n.radius;
          c > 0 && c <= 1 && (a *= c), this.x = {
            start: n.startAngle,
            end: n.endAngle
          }, this.y = {
            start: a * r,
            end: a
          }, this.center = s, this.circleRadius = a
        }, e.prototype.convertPoint = function(t) {
          var e = this,
            n = e.center,
            r = e.transposed,
            i = r ? "y" : "x",
            o = r ? "x" : "y",
            a = e.x,
            s = e.y,
            c = a.start + (a.end - a.start) * t[i],
            u = s.start + (s.end - s.start) * t[o];
          return {
            x: n.x + Math.cos(c) * u,
            y: n.y + Math.sin(c) * u
          }
        }, e.prototype.invertPoint = function(t) {
          var e = this,
            n = e.center,
            r = e.transposed,
            i = e.x,
            o = e.y,
            a = r ? "y" : "x",
            u = r ? "x" : "y",
            l = [1, 0, 0, 1, 0, 0];
          c.rotate(l, l, i.start);
          var f = [1, 0];
          s.transformMat2d(f, f, l), f = [f[0], f[1]];
          var p = [t.x - n.x, t.y - n.y];
          if (s.zero(p)) return {
            x: 0,
            y: 0
          };
          var h = s.angleTo(f, p, i.end < i.start);
          Math.abs(h - 2 * Math.PI) < .001 && (h = 0);
          var y = s.length(p),
            d = h / (i.end - i.start);
          d = i.end - i.start > 0 ? d : -d;
          var g = (y - o.start) / (o.end - o.start),
            v = {};
          return v[a] = d, v[u] = g, v
        }, e
      }(a);
    a.Polar = u, t.exports = u
  }, , function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var a = n(0),
      s = n(7);
    n(91);
    var c = function(t) {
      function e() {
        return r(this, e), i(this, t.apply(this, arguments))
      }
      return o(e, t), e.prototype.getDefaultCfg = function() {
        var e = t.prototype.getDefaultCfg.call(this);
        return e.type = "point", e.shapeType = "point", e.generatePoints = !0, e
      }, e.prototype.draw = function(t, e) {
        var n = this,
          r = n.get("container");
        a.each(t, function(t) {
          var i = t.shape,
            o = n.getDrawCfg(t);
          if (a.isArray(t.y)) {
            var s = n.hasAdjust("stack");
            a.each(t.y, function(a, c) {
              o.y = a, s && 0 === c || n.drawShape(i, t, o, r, e)
            })
          } else a.isNil(t.y) || n.drawShape(i, t, o, r, e)
        })
      }, e
    }(s);
    s.Point = c, t.exports = c
  }, function(t, e, n) {
    function r(t) {
      var e = {
        lineWidth: 0,
        stroke: t.color,
        fill: t.color
      };
      return t.size && (e.size = t.size), o.mix(e, t.style), o.mix({}, a.shape.point, e)
    }

    function i(t, e, n) {
      if (0 !== t.size) {
        var i = r(t),
          a = i.r || i.size,
          s = t.x,
          c = o.isArray(t.y) ? t.y : [t.y];
        "hollowCircle" === n && (i.lineWidth = 1, i.fill = null);
        for (var u = 0, l = c.length; u < l; u++) return "rect" === n ? e.addShape("Rect", {
          className: "point",
          attrs: o.mix({
            x: s - a,
            y: c[u] - a,
            width: 2 * a,
            height: 2 * a
          }, i)
        }) : e.addShape("Circle", {
          className: "point",
          attrs: o.mix({
            x: s,
            y: c[u],
            r: a
          }, i)
        })
      }
    }
    var o = n(0),
      a = n(1),
      s = n(19),
      c = n(8),
      u = ["circle", "hollowCircle", "rect"],
      l = c.registerFactory("point", {
        defaultShapeType: "circle",
        getDefaultPoints: function(t) {
          return s.splitPoints(t)
        }
      });
    o.each(u, function(t) {
      c.registerShape("point", t, {
        draw: function(e, n) {
          return i(e, n, t)
        }
      })
    }), t.exports = l
  }, function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var a = n(7),
      s = n(19),
      c = n(0);
    n(93);
    var u = function(t) {
      function e() {
        return r(this, e), i(this, t.apply(this, arguments))
      }
      return o(e, t), e.prototype.getDefaultCfg = function() {
        var e = t.prototype.getDefaultCfg.call(this);
        return e.type = "area", e.shapeType = "area", e.generatePoints = !0, e.sortable = !0, e
      }, e.prototype.draw = function(t, e) {
        var n = this,
          r = n.get("container"),
          i = this.getDrawCfg(t[0]),
          o = n.getYScale(),
          a = n.get("connectNulls"),
          u = s.splitArray(t, o.field, a);
        i.origin = t, c.each(u, function(o, a) {
          i.splitedIndex = a;
          var s = o.map(function(t) {
            return t.points
          });
          i.points = s, n.drawShape(i.shape, t[0], i, r, e)
        })
      }, e
    }(a);
    a.Area = u, t.exports = u
  }, function(t, e, n) {
    function r(t, e) {
      return Math.abs(t - e) < 1e-5
    }

    function i(t, e) {
      var n = !0;
      return s.each(t, function(t) {
        if (!r(t.x, e.x) || !r(t.y, e.y)) return n = !1, !1
      }), n
    }

    function o(t, e, n, r, i) {
      var o = t.concat(e);
      return i ? n.addShape("Custom", {
        className: "area",
        attrs: r,
        createPath: function(n) {
          var r = [
              [0, 0],
              [1, 1]
            ],
            i = u.smooth(t, !1, r);
          n.beginPath(), n.moveTo(t[0].x, t[0].y);
          for (var o = 0, a = i.length; o < a; o++) {
            var s = i[o];
            n.bezierCurveTo(s[1], s[2], s[3], s[4], s[5], s[6])
          }
          if (e.length) {
            var c = u.smooth(e, !1, r);
            n.lineTo(e[0].x, e[0].y);
            for (var l = 0, f = c.length; l < f; l++) {
              var p = c[l];
              n.bezierCurveTo(p[1], p[2], p[3], p[4], p[5], p[6])
            }
          }
          n.closePath()
        }
      }) : n.addShape("Polyline", {
        className: "area",
        attrs: s.mix({
          points: o
        }, r)
      })
    }

    function a(t, e, n) {
      var r = this,
        a = t.points,
        c = [],
        u = [];
      s.each(a, function(t) {
        u.push(t[0]), c.push(t[1])
      });
      var f = s.mix({
        fillStyle: t.color
      }, l.shape.area, t.style);
      return u.reverse(), c = r.parsePoints(c), u = r.parsePoints(u), t.isInCircle && (c.push(c[0]), u.unshift(u[u.length - 1]), i(u, t.center) && (u = [])), o(c, u, e, f, n)
    }
    var s = n(0),
      c = n(8),
      u = n(36),
      l = n(1),
      f = c.registerFactory("area", {
        defaultShapeType: "area",
        getDefaultPoints: function(t) {
          var e = t.x,
            n = t.y,
            r = t.y0;
          n = s.isArray(n) ? n : [r, n];
          var i = [];
          return i.push({
            x: e,
            y: n[0]
          }, {
            x: e,
            y: n[1]
          }), i
        }
      }),
      p = ["area", "smooth"];
    s.each(p, function(t) {
      c.registerShape("area", t, {
        draw: function(e, n) {
          var r = "smooth" === t;
          return a.call(this, e, n, r)
        }
      })
    }), t.exports = f
  }, function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var a = n(0),
      s = n(24),
      c = function(t) {
        function e() {
          return r(this, e), i(this, t.apply(this, arguments))
        }
        return o(e, t), e.prototype._initDefaultCfg = function() {
          t.prototype._initDefaultCfg.call(this), this.startAngle = -Math.PI / 2, this.endAngle = 3 * Math.PI / 2, this.radius = null, this.center = null
        }, e.prototype.getOffsetPoint = function(t) {
          var e = this.startAngle,
            n = e + (this.endAngle - e) * t;
          return this._getCirclePoint(n)
        }, e.prototype._getCirclePoint = function(t, e) {
          var n = this,
            r = n.center;
          return e = e || n.radius, {
            x: r.x + Math.cos(t) * e,
            y: r.y + Math.sin(t) * e
          }
        }, e.prototype.getTextAlignInfo = function(t, e) {
          var n = this.getOffsetVector(t, e),
            r = void 0,
            i = "middle";
          return n[0] > 0 ? r = "left" : n[0] < 0 ? r = "right" : (r = "center", n[1] > 0 ? i = "top" : n[1] < 0 && (i = "bottom")), {
            textAlign: r,
            textBaseline: i
          }
        }, e.prototype.getAxisVector = function(t) {
          var e = this.center,
            n = this.offsetFactor;
          return [(t.y - e.y) * n, -1 * (t.x - e.x) * n]
        }, e.prototype.drawLine = function(t) {
          var e = this.center,
            n = this.radius,
            r = this.startAngle,
            i = this.endAngle;
          this.getContainer(t.top).addShape("arc", {
            className: "axis-line",
            attrs: a.mix({
              x: e.x,
              y: e.y,
              r: n,
              startAngle: r,
              endAngle: i
            }, t)
          })
        }, e
      }(s);
    s.Circle = c, t.exports = c
  }, function(t, e, n) {
    var r = n(96);
    t.exports = r
  }, function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" !== (void 0 === e ? "undefined" : a(e)) && "function" != typeof e ? t : e
    }

    function o(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : a(e)));
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      },
      s = n(13),
      c = n(34),
      u = n(97),
      l = n(35),
      f = n(98),
      p = n(3),
      h = n(17),
      y = n(18),
      d = n(14),
      g = function(t) {
        function e() {
          return r(this, e), i(this, t.apply(this, arguments))
        }
        return o(e, t), e.prototype._initDefaultCfg = function() {
          t.prototype._initDefaultCfg.call(this), this.type = "timeCat", this.sortable = !0, this.tickCount = 5, this.mask = "YYYY-MM-DD"
        }, e.prototype.init = function() {
          var t = this,
            e = this.values;
          p(e, function(n, r) {
            e[r] = t._toTimeStamp(n)
          }), this.sortable && e.sort(function(t, e) {
            return t - e
          }), t.ticks || (t.ticks = this.calculateTicks())
        }, e.prototype.calculateTicks = function() {
          var t = this,
            e = t.tickCount;
          return e ? l({
            maxCount: e,
            data: t.values
          }).ticks : t.values
        }, e.prototype.translate = function(t) {
          t = this._toTimeStamp(t);
          var e = this.values.indexOf(t);
          return -1 === e && (e = h(t) && t < this.values.length ? t : NaN), e
        }, e.prototype.scale = function(t) {
          var e = this.rangeMin(),
            n = this.rangeMax(),
            r = this.translate(t),
            i = void 0;
          return i = 1 === this.values.length || isNaN(r) ? r : r > -1 ? r / (this.values.length - 1) : 0, e + i * (n - e)
        }, e.prototype.getText = function(t) {
          var e = "",
            n = this.translate(t);
          e = n > -1 ? this.values[n] : t;
          var r = this.formatter;
          return e = parseInt(e, 10), e = r ? r(e) : u.format(e, this.mask)
        }, e.prototype.getTicks = function() {
          var t = this,
            e = this.ticks,
            n = [];
          return p(e, function(e) {
            var r = void 0;
            r = y(e) ? e : {
              text: d(e) ? e : t.getText(e),
              value: t.scale(e),
              tickValue: e
            }, n.push(r)
          }), n
        }, e.prototype._toTimeStamp = function(t) {
          return f.toTimeStamp(t)
        }, e
      }(c);
    s.TimeCat = g, t.exports = g
  }, function(t, e, n) {
    var r;
    ! function(i) {
      "use strict";

      function o(t, e) {
        for (var n = [], r = 0, i = t.length; r < i; r++) n.push(t[r].substr(0, e));
        return n
      }

      function a(t) {
        return function(e, n, r) {
          var i = r[t].indexOf(n.charAt(0).toUpperCase() + n.substr(1).toLowerCase());
          ~i && (e.month = i)
        }
      }

      function s(t, e) {
        for (t = String(t), e = e || 2; t.length < e;) t = "0" + t;
        return t
      }
      var c = {},
        u = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,
        l = /\d\d?/,
        f = /\d{3}/,
        p = /\d{4}/,
        h = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
        y = /\[([^]*?)\]/gm,
        d = function() {},
        g = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        v = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        m = o(v, 3),
        x = o(g, 3);
      c.i18n = {
        dayNamesShort: x,
        dayNames: g,
        monthNamesShort: m,
        monthNames: v,
        amPm: ["am", "pm"],
        DoFn: function(t) {
          return t + ["th", "st", "nd", "rd"][t % 10 > 3 ? 0 : (t - t % 10 != 10) * t % 10]
        }
      };
      var b = {
          D: function(t) {
            return t.getDate()
          },
          DD: function(t) {
            return s(t.getDate())
          },
          Do: function(t, e) {
            return e.DoFn(t.getDate())
          },
          d: function(t) {
            return t.getDay()
          },
          dd: function(t) {
            return s(t.getDay())
          },
          ddd: function(t, e) {
            return e.dayNamesShort[t.getDay()]
          },
          dddd: function(t, e) {
            return e.dayNames[t.getDay()]
          },
          M: function(t) {
            return t.getMonth() + 1
          },
          MM: function(t) {
            return s(t.getMonth() + 1)
          },
          MMM: function(t, e) {
            return e.monthNamesShort[t.getMonth()]
          },
          MMMM: function(t, e) {
            return e.monthNames[t.getMonth()]
          },
          YY: function(t) {
            return String(t.getFullYear()).substr(2)
          },
          YYYY: function(t) {
            return s(t.getFullYear(), 4)
          },
          h: function(t) {
            return t.getHours() % 12 || 12
          },
          hh: function(t) {
            return s(t.getHours() % 12 || 12)
          },
          H: function(t) {
            return t.getHours()
          },
          HH: function(t) {
            return s(t.getHours())
          },
          m: function(t) {
            return t.getMinutes()
          },
          mm: function(t) {
            return s(t.getMinutes())
          },
          s: function(t) {
            return t.getSeconds()
          },
          ss: function(t) {
            return s(t.getSeconds())
          },
          S: function(t) {
            return Math.round(t.getMilliseconds() / 100)
          },
          SS: function(t) {
            return s(Math.round(t.getMilliseconds() / 10), 2)
          },
          SSS: function(t) {
            return s(t.getMilliseconds(), 3)
          },
          a: function(t, e) {
            return t.getHours() < 12 ? e.amPm[0] : e.amPm[1]
          },
          A: function(t, e) {
            return t.getHours() < 12 ? e.amPm[0].toUpperCase() : e.amPm[1].toUpperCase()
          },
          ZZ: function(t) {
            var e = t.getTimezoneOffset();
            return (e > 0 ? "-" : "+") + s(100 * Math.floor(Math.abs(e) / 60) + Math.abs(e) % 60, 4)
          }
        },
        w = {
          D: [l, function(t, e) {
            t.day = e
          }],
          Do: [new RegExp(l.source + h.source), function(t, e) {
            t.day = parseInt(e, 10)
          }],
          M: [l, function(t, e) {
            t.month = e - 1
          }],
          YY: [l, function(t, e) {
            var n = +("" + (new Date).getFullYear()).substr(0, 2);
            t.year = "" + (e > 68 ? n - 1 : n) + e
          }],
          h: [l, function(t, e) {
            t.hour = e
          }],
          m: [l, function(t, e) {
            t.minute = e
          }],
          s: [l, function(t, e) {
            t.second = e
          }],
          YYYY: [p, function(t, e) {
            t.year = e
          }],
          S: [/\d/, function(t, e) {
            t.millisecond = 100 * e
          }],
          SS: [/\d{2}/, function(t, e) {
            t.millisecond = 10 * e
          }],
          SSS: [f, function(t, e) {
            t.millisecond = e
          }],
          d: [l, d],
          ddd: [h, d],
          MMM: [h, a("monthNamesShort")],
          MMMM: [h, a("monthNames")],
          a: [h, function(t, e, n) {
            var r = e.toLowerCase();
            r === n.amPm[0] ? t.isPm = !1 : r === n.amPm[1] && (t.isPm = !0)
          }],
          ZZ: [/([\+\-]\d\d:?\d\d|Z)/, function(t, e) {
            "Z" === e && (e = "+00:00");
            var n, r = (e + "").match(/([\+\-]|\d\d)/gi);
            r && (n = 60 * r[1] + parseInt(r[2], 10), t.timezoneOffset = "+" === r[0] ? n : -n)
          }]
        };
      w.dd = w.d, w.dddd = w.ddd, w.DD = w.D, w.mm = w.m, w.hh = w.H = w.HH = w.h, w.MM = w.M, w.ss = w.s, w.A = w.a, c.masks = {
        default: "ddd MMM DD YYYY HH:mm:ss",
        shortDate: "M/D/YY",
        mediumDate: "MMM D, YYYY",
        longDate: "MMMM D, YYYY",
        fullDate: "dddd, MMMM D, YYYY",
        shortTime: "HH:mm",
        mediumTime: "HH:mm:ss",
        longTime: "HH:mm:ss.SSS"
      }, c.format = function(t, e, n) {
        var r = n || c.i18n;
        if ("number" == typeof t && (t = new Date(t)), "[object Date]" !== Object.prototype.toString.call(t) || isNaN(t.getTime())) throw new Error("Invalid Date in fecha.format");
        var i = [];
        return e = (e = c.masks[e] || e || c.masks.default).replace(y, function(t, e) {
          return i.push(e), "??"
        }), (e = e.replace(u, function(e) {
          return e in b ? b[e](t, r) : e.slice(1, e.length - 1)
        })).replace(/\?\?/g, function() {
          return i.shift()
        })
      }, c.parse = function(t, e, n) {
        var r = n || c.i18n;
        if ("string" != typeof e) throw new Error("Invalid format in fecha.parse");
        if (e = c.masks[e] || e, t.length > 1e3) return !1;
        var i = !0,
          o = {};
        if (e.replace(u, function(e) {
            if (w[e]) {
              var n = w[e],
                a = t.search(n[0]);
              ~a ? t.replace(n[0], function(e) {
                return n[1](o, e, r), t = t.substr(a + e.length), e
              }) : i = !1
            }
            return w[e] ? "" : e.slice(1, e.length - 1)
          }), !i) return !1;
        var a = new Date;
        !0 === o.isPm && null != o.hour && 12 != +o.hour ? o.hour = +o.hour + 12 : !1 === o.isPm && 12 == +o.hour && (o.hour = 0);
        var s;
        return null != o.timezoneOffset ? (o.minute = +(o.minute || 0) - +o.timezoneOffset, s = new Date(Date.UTC(o.year || a.getFullYear(), o.month || 0, o.day || 1, o.hour || 0, o.minute || 0, o.second || 0, o.millisecond || 0))) : s = new Date(o.year || a.getFullYear(), o.month || 0, o.day || 1, o.hour || 0, o.minute || 0, o.second || 0, o.millisecond || 0), s
      }, void 0 !== t && t.exports ? t.exports = c : void 0 !== (r = function() {
        return c
      }.call(e, n, e, t)) && (t.exports = r)
    }()
  }, function(t, e, n) {
    var r = n(14),
      i = n(33);
    t.exports = {
      toTimeStamp: function(t) {
        return r(t) && (t = t.indexOf("T") > 0 ? new Date(t).getTime() : new Date(t.replace(/-/gi, "/")).getTime()), i(t) && (t = t.getTime()), t
      }
    }
  }, function(t, e, n) {
    t.exports = {
      Text: n(100),
      Line: n(101),
      Arc: n(102),
      Rect: n(103),
      Html: n(104),
      Tag: n(105),
      Point: n(106),
      RegionFilter: n(107)
    }
  }, function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var a = n(0),
      s = n(10),
      c = function(t) {
        function e() {
          return r(this, e), i(this, t.apply(this, arguments))
        }
        return o(e, t), e.prototype._initDefaultCfg = function() {
          this.type = "text", this.position = null, this.content = null, this.style = {
            fill: "#000"
          }, this.offsetX = 0, this.offsetY = 0
        }, e.prototype.render = function(t, e) {
          var n = this.position,
            r = this.parsePoint(t, n);
          if (r) {
            var i = this.content,
              o = this.style,
              s = this.offsetX,
              c = this.offsetY;
            s && (r.x += s), c && (r.y += c);
            var u = e.addShape("text", {
              className: "guide-text",
              attrs: a.mix({
                x: r.x,
                y: r.y,
                text: i
              }, o)
            });
            this.element = u
          }
        }, e
      }(s);
    s.Text = c, t.exports = c
  }, function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var a = n(0),
      s = n(10),
      c = function(t) {
        function e() {
          return r(this, e), i(this, t.apply(this, arguments))
        }
        return o(e, t), e.prototype._initDefaultCfg = function() {
          this.type = "line", this.start = [], this.end = [], this.style = {
            stroke: "#000",
            lineWidth: 1
          }
        }, e.prototype.render = function(t, e) {
          var n = [];
          if (n[0] = this.parsePoint(t, this.start), n[1] = this.parsePoint(t, this.end), n[0] && n[1]) {
            var r = e.addShape("Line", {
              className: "guide-line",
              attrs: a.mix({
                x1: n[0].x,
                y1: n[0].y,
                x2: n[1].x,
                y2: n[1].y
              }, this.style)
            });
            this.element = r
          }
        }, e
      }(s);
    s.Line = c, t.exports = c
  }, function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var a = n(0),
      s = n(10),
      c = function(t) {
        function e() {
          return r(this, e), i(this, t.apply(this, arguments))
        }
        return o(e, t), e.prototype._initDefaultCfg = function() {
          this.type = "arc", this.start = [], this.end = [], this.style = {
            stroke: "#999",
            lineWidth: 1
          }
        }, e.prototype.render = function(t, e) {
          var n = this,
            r = n.parsePoint(t, n.start),
            i = n.parsePoint(t, n.end);
          if (r && i) {
            var o = t.center,
              s = Math.sqrt((r.x - o.x) * (r.x - o.x) + (r.y - o.y) * (r.y - o.y)),
              c = Math.atan2(r.y - o.y, r.x - o.x),
              u = Math.atan2(i.y - o.y, i.x - o.x),
              l = e.addShape("arc", {
                className: "guide-arc",
                attrs: a.mix({
                  x: o.x,
                  y: o.y,
                  r: s,
                  startAngle: c,
                  endAngle: u
                }, n.style)
              });
            n.element = l
          }
        }, e
      }(s);
    s.Arc = c, t.exports = c
  }, function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var a = n(0),
      s = n(10),
      c = function(t) {
        function e() {
          return r(this, e), i(this, t.apply(this, arguments))
        }
        return o(e, t), e.prototype._initDefaultCfg = function() {
          this.type = "rect", this.start = [], this.end = [], this.style = {
            fill: "#CCD7EB",
            opacity: .4
          }
        }, e.prototype.render = function(t, e) {
          var n = this.parsePoint(t, this.start),
            r = this.parsePoint(t, this.end);
          if (n && r) {
            var i = e.addShape("rect", {
              className: "guide-rect",
              attrs: a.mix({
                x: Math.min(n.x, r.x),
                y: Math.min(n.y, r.y),
                width: Math.abs(r.x - n.x),
                height: Math.abs(n.y - r.y)
              }, this.style)
            });
            this.element = i
          }
        }, e
      }(s);
    s.Rect = c, t.exports = c
  }, function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function a(t, e, n, r) {
      var i = [];
      return "left" === t && "top" === e ? (i[0] = 0, i[1] = 0) : "right" === t && "top" === e ? (i[0] = -n, i[1] = 0) : "left" === t && "bottom" === e ? (i[0] = 0, i[1] = Math.floor(-r)) : "right" === t && "bottom" === e ? (i[0] = Math.floor(-n), i[1] = Math.floor(-r)) : "right" === t && "middle" === e ? (i[0] = Math.floor(-n), i[1] = Math.floor(-r / 2)) : "left" === t && "middle" === e ? (i[0] = 0, i[1] = Math.floor(-r / 2)) : "center" === t && "bottom" === e ? (i[0] = Math.floor(-n / 2), i[1] = Math.floor(-r)) : "center" === t && "top" === e ? (i[0] = Math.floor(-n / 2), i[1] = 0) : (i[0] = Math.floor(-n / 2), i[1] = Math.floor(-r / 2)), i
    }

    function s(t, e) {
      for (var n in e) e.hasOwnProperty(n) && (t.style[n] = e[n]);
      return t
    }

    function c(t) {
      var e = document.createElement("div");
      return t = t.replace(/(^\s*)|(\s*$)/g, ""), e.innerHTML = "" + t, e.childNodes[0]
    }
    var u = n(0),
      l = n(10),
      f = function(t) {
        function e() {
          return r(this, e), i(this, t.apply(this, arguments))
        }
        return o(e, t), e.prototype._initDefaultCfg = function() {
          this.type = "html", this.position = null, this.alignX = "center", this.alignY = "middle", this.offsetX = null, this.offsetY = null, this.html = null
        }, e.prototype.render = function(t, e) {
          var n = this,
            r = n.parsePoint(t, n.position);
          if (r) {
            var i = c(n.html);
            i = s(i, {
              position: "absolute",
              top: Math.floor(r.y) + "px",
              left: Math.floor(r.x) + "px",
              visibility: "hidden"
            });
            var o = e.get("canvas").get("el"),
              l = o.parentNode,
              f = void 0;
            (l = s(l, {
              position: "relative"
            })).getElementsByClassName("guideWapper").length > 0 ? f = l.getElementsByClassName("guideWapper")[0] : (f = s(f = c('<div class="guideWapper"></div>'), {
              position: "absolute",
              top: 0,
              left: 0
            }), l.appendChild(f)), f.appendChild(i);
            var p = o.offsetTop,
              h = o.offsetLeft,
              y = n.alignX,
              d = n.alignY,
              g = n.offsetX,
              v = n.offsetY,
              m = a(y, d, u.getWidth(i), u.getHeight(i));
            r.x = r.x + m[0] + h, r.y = r.y + m[1] + p, g && (r.x += g), v && (r.y += v), s(i, {
              top: Math.floor(r.y) + "px",
              left: Math.floor(r.x) + "px",
              visibility: "visible"
            }), n.element = f
          }
        }, e.prototype.remove = function() {
          var t = this.element;
          t && t.remove()
        }, e
      }(l);
    l.Html = f, t.exports = f
  }, function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var a = n(0),
      s = n(10),
      c = function(t) {
        function e() {
          return r(this, e), i(this, t.apply(this, arguments))
        }
        return o(e, t), e.prototype._initDefaultCfg = function() {
          this.type = "tag", this.position = null, this.content = null, this.direct = "auto", this.offsetX = 0, this.offsetY = 0, this.side = 4, this.background = {
            padding: 5,
            radius: 2,
            fill: "#1890FF"
          }, this.textStyle = {
            fontSize: 12,
            fill: "#fff",
            textAlign: "center",
            textBaseline: "middle"
          }, this.withPoint = !0, this.pointStyle = {
            fill: "#1890FF",
            r: 3,
            lineWidth: 1,
            stroke: "#fff"
          }
        }, e.prototype._getDirect = function(t, e, n, r) {
          var i = this.direct;
          if ("auto" === i) {
            var o = this.side,
              a = t.get("canvas"),
              s = a.getWidth(),
              c = a.getHeight(),
              u = e.x,
              l = e.y,
              f = "t",
              p = "l";
            l - o - r < 0 && (f = "b"), "b" === f && l + o + r > c && (f = "t"), u - ("c" === f ? o : 0) - n < 0 && (p = "r"), "r" === p && u + ("c" === f ? o : 0) + n > s && (p = "l"), i = f + p, this.direct = i
          }
          return i
        }, e.prototype.render = function(t, e) {
          var n = this.parsePoint(t, this.position);
          if (n) {
            var r = this.content,
              i = this.background,
              o = this.textStyle,
              s = e.addGroup({
                className: "guide-tag"
              });
            this.withPoint && s.addShape("Circle", {
              className: "guide-tag-point",
              attrs: a.mix({
                x: n.x,
                y: n.y
              }, this.pointStyle)
            });
            var c = s.addGroup(),
              u = c.addShape("text", {
                className: "guide-tag-text",
                zIndex: 1,
                attrs: a.mix({
                  x: 0,
                  y: 0,
                  text: r
                }, o)
              }).getBBox(),
              l = a.parsePadding(i.padding),
              f = u.width + l[1] + l[3],
              p = u.height + l[0] + l[2],
              h = u.minY - l[0],
              y = u.minX - l[3],
              d = c.addShape("rect", {
                className: "guide-tag-bg",
                zIndex: -1,
                attrs: a.mix({
                  x: y,
                  y: h,
                  width: f,
                  height: p
                }, i)
              }),
              g = this._getDirect(e, n, f, p),
              v = this.side,
              m = n.x + this.offsetX,
              x = n.y + this.offsetY,
              b = void 0,
              w = a.parsePadding(i.radius);
            "tl" === g ? (b = [{
              x: f - v + y,
              y: p + h - 1
            }, {
              x: f + y,
              y: p + h - 1
            }, {
              x: f + y,
              y: p + v + h
            }], w[2] = 0, m -= f, x = x - v - p) : "cl" === g ? (b = [{
              x: f + y - 1,
              y: (p - v) / 2 + h
            }, {
              x: f + y - 1,
              y: (p + v) / 2 + h
            }, {
              x: f + v + y,
              y: p / 2 + h
            }], m = m - f - v, x -= p / 2) : "bl" === g ? (b = [{
              x: f + y,
              y: -v + h
            }, {
              x: f - v + y,
              y: h + 1
            }, {
              x: f + y,
              y: h + 1
            }], w[1] = 0, m -= f, x += v) : "bc" === g ? (b = [{
              x: f / 2 + y,
              y: -v + h
            }, {
              x: (f - v) / 2 + y,
              y: h + 1
            }, {
              x: (f + v) / 2 + y,
              y: h + 1
            }], m -= f / 2, x += v) : "br" === g ? (b = [{
              x: y,
              y: -v + h
            }, {
              x: y,
              y: h + 1
            }, {
              x: v + y,
              y: h + 1
            }], w[0] = 0, x += v) : "cr" === g ? (b = [{
              x: -v + y,
              y: p / 2 + h
            }, {
              x: y + 1,
              y: (p - v) / 2 + h
            }, {
              x: y + 1,
              y: (p + v) / 2 + h
            }], m += v, x -= p / 2) : "tr" === g ? (b = [{
              x: 0 + y,
              y: p + v + h
            }, {
              x: 0 + y,
              y: p + h - 1
            }, {
              x: v + y,
              y: p + h - 1
            }], w[3] = 0, x = x - p - v) : "tc" === g && (b = [{
              x: (f - v) / 2 + y,
              y: p + h - 1
            }, {
              x: (f + v) / 2 + y,
              y: p + h - 1
            }, {
              x: f / 2 + y,
              y: p + v + h
            }], m -= f / 2, x = x - p - v), c.addShape("Polygon", {
              zIndex: 0,
              attrs: {
                points: b,
                fill: i.fill
              }
            }), d.attr("radius", w), c.moveTo(m - y, x - h), c.sort(), this.element = s
          }
        }, e
      }(s);
    s.Tag = c, t.exports = c
  }, function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var a = n(0),
      s = n(10),
      c = function(t) {
        function e() {
          return r(this, e), i(this, t.apply(this, arguments))
        }
        return o(e, t), e.prototype._initDefaultCfg = function() {
          this.type = "point", this.position = null, this.offsetX = 0, this.offsetY = 0, this.style = {
            fill: "#1890FF",
            r: 3,
            lineWidth: 1,
            stroke: "#fff"
          }
        }, e.prototype.render = function(t, e) {
          var n = this.parsePoint(t, this.position),
            r = e.addShape("Circle", {
              className: "guide-point",
              attrs: a.mix({
                x: n.x + this.offsetX,
                y: n.y + this.offsetY
              }, this.style)
            });
          this.element = r
        }, e
      }(s);
    s.Point = c, t.exports = c
  }, function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var a = n(0),
      s = n(10),
      c = n(2).Rect,
      u = function(t) {
        function e() {
          return r(this, e), i(this, t.apply(this, arguments))
        }
        return o(e, t), e.prototype._initDefaultCfg = function() {
          this.type = "regionFilter", this.start = [], this.end = [], this.color = null, this.style = null
        }, e.prototype.render = function(t) {
          var e = this.parsePoint(t, this.start),
            n = this.parsePoint(t, this.end);
          if (e && n) {
            var r = new c({
              attrs: {
                x: Math.min(e.x, n.x),
                y: Math.min(e.y, n.y),
                width: Math.abs(n.x - e.x),
                height: Math.abs(n.y - e.y)
              }
            });
            this.clip = r;
            var i = this.chart,
              o = this.color,
              s = this.style || {},
              u = [];
            i.get("geoms").map(function(t) {
              var e = t.get("container"),
                n = e.get("children"),
                i = e.addGroup({
                  zIndex: 10,
                  className: "guide-region-filter"
                });
              return n.map(function(t) {
                if (t.get("isShape")) {
                  var e = t.get("type"),
                    n = a.mix({}, t.get("attrs"), s);
                  o && (n.fill || n.fillStyle) && (n.fill = n.fillStyle = o), o && (n.stroke || n.strokeStyle) && (n.stroke = n.strokeStyle = o), i.addShape(e, {
                    attrs: n
                  })
                }
                return t
              }), i.attr("clip", r), e.sort(), u.push(i), t
            }), this.element = u
          }
        }, e.prototype.remove = function() {
          var t = this.element;
          a.each(t, function(t) {
            t && t.remove(!0)
          }), this.clip && this.clip.remove(!0)
        }, e
      }(s);
    s.RegionFilter = u, t.exports = u
  }, function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t) {
      var e = t.getAttr("color");
      if (e) {
        var n = e.getScale(e.type);
        if (n.isLinear) return n
      }
      var r = t.getXScale(),
        i = t.getYScale();
      return i || r
    }

    function o(t, e) {
      var n = void 0,
        r = void 0,
        o = t._getGroupScales();
      if (o.length && f.each(o, function(t) {
          return r = t, !1
        }), r) {
        var a = r.field;
        n = r.getText(e[a])
      } else {
        var s = i(t);
        n = s.alias || s.field
      }
      return n
    }

    function a(t, e) {
      var n = i(t);
      return n.getText(e[n.field])
    }

    function s(t, e) {
      var n = t.getAttr("position").getFields()[0],
        r = t.get("scales")[n];
      return r.getText(e[r.field])
    }

    function c(t, e) {
      var n = -1;
      return f.each(t, function(t, r) {
        if (t.title === e.title && t.name === e.name && t.value === e.value && t.color === e.color) return n = r, !1
      }), n
    }

    function u(t) {
      var e = [];
      return f.each(t, function(t) {
        var n = c(e, t); - 1 === n ? e.push(t) : e[n] = t
      }), e
    }

    function l(t, e) {
      return JSON.stringify(t) === JSON.stringify(e)
    }
    var f = n(0),
      p = n(1),
      h = n(109),
      y = n(26);
    p.tooltip = f.deepMix({
      triggerOn: ["touchstart", "touchmove"],
      alwaysShow: !1,
      showTitle: !1,
      showCrosshairs: !1,
      crosshairsStyle: {
        stroke: "rgba(0, 0, 0, 0.25)",
        lineWidth: 1
      },
      showTooltipMarker: !0,
      background: {
        radius: 1,
        fill: "rgba(0, 0, 0, 0.65)",
        padding: [3, 5]
      },
      titleStyle: {
        fontSize: 12,
        fill: "#fff",
        textAlign: "start",
        textBaseline: "top"
      },
      nameStyle: {
        fontSize: 12,
        fill: "rgba(255, 255, 255, 0.65)",
        textAlign: "start",
        textBaseline: "middle"
      },
      valueStyle: {
        fontSize: 12,
        fill: "#fff",
        textAlign: "start",
        textBaseline: "middle"
      },
      showItemMarker: !0,
      itemMarkerStyle: {
        radius: 3,
        symbol: "circle",
        lineWidth: 1,
        stroke: "#fff"
      },
      layout: "horizontal"
    }, p.tooltip || {});
    var d = function() {
      function t(e) {
        r(this, t), this.enable = !0, this.cfg = {}, this.tooltip = null, this.chart = null, this.timeStamp = 0, f.mix(this, e);
        var n = this.chart;
        this.canvasDom = n.get("canvas").get("el")
      }
      return t.prototype._setCrosshairsCfg = function() {
        var t = this.chart,
          e = f.mix({}, p.tooltip),
          n = t.get("geoms"),
          r = [];
        return f.each(n, function(t) {
          var e = t.get("type"); - 1 === r.indexOf(e) && r.push(e)
        }), n.length && "cartesian" === t.get("coord").type && 1 === r.length && -1 !== ["line", "area", "path", "point"].indexOf(r[0]) && f.mix(e, {
          showCrosshairs: !0
        }), e
      }, t.prototype._getMaxLength = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = t.layout,
          n = t.plotRange;
        return "horizontal" === e ? n.br.x - n.bl.x : n.bl.y - n.tr.y
      }, t.prototype.render = function() {
        var t = this;
        if (!t.tooltip) {
          var e = t.chart,
            n = e.get("canvas"),
            r = e.get("frontPlot").addGroup({
              className: "tooltipContainer",
              zIndex: 10
            }),
            i = e.get("backPlot").addGroup({
              className: "tooltipContainer"
            }),
            o = e.get("plotRange"),
            a = e.get("coord"),
            s = t._setCrosshairsCfg(),
            c = t.cfg;
          (c = f.deepMix({
            plotRange: o,
            frontPlot: r,
            backPlot: i,
            canvas: n,
            fixed: a.transposed || a.isPolar
          }, s, c)).maxLength = t._getMaxLength(c), this.cfg = c;
          var u = new h(c);
          t.tooltip = u, t.bindEvents()
        }
      }, t.prototype.clear = function() {
        var t = this.tooltip;
        t && t.destroy(), this.tooltip = null, this.prePoint = null, this.unBindEvents()
      }, t.prototype._getTooltipMarkerStyle = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = t.type,
          n = t.items,
          r = this.cfg;
        if ("rect" === e) {
          var i = void 0,
            o = void 0,
            a = void 0,
            s = void 0,
            c = this.chart,
            u = c.get("plotRange"),
            l = u.tl,
            p = u.br,
            h = c.get("coord"),
            y = n[0],
            d = n[n.length - 1],
            g = y.width;
          h.transposed ? (i = l.x, o = d.y - .75 * g, a = p.x - l.x, s = y.y - d.y + 1.5 * g) : (i = y.x - .75 * g, o = l.y, a = d.x - y.x + 1.5 * g, s = p.y - l.y), t.style = f.mix({
            x: i,
            y: o,
            width: a,
            height: s,
            fill: "#CCD6EC",
            opacity: .3
          }, r.tooltipMarkerStyle)
        } else t.style = f.mix({
          radius: 4,
          fill: "#fff",
          lineWidth: 2
        }, r.tooltipMarkerStyle);
        return t
      }, t.prototype._setTooltip = function(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = this._lastActive,
          i = this.tooltip,
          o = this.cfg;
        if (e = u(e), o.onShow && o.onShow({
            x: t.x,
            y: t.y,
            tooltip: i,
            items: e,
            tooltipMarkerCfg: n
          }), !l(r, e)) {
          if (this._lastActive = e, (o.onChange || f.isFunction(o.custom)) && (o.onChange || o.custom)({
              x: t.x,
              y: t.y,
              tooltip: i,
              items: e,
              tooltipMarkerCfg: n
            }), !o.custom) {
            var a = e[0],
              s = a.title || a.name;
            i.setContent(s, e)
          }
          i.setPosition(e);
          var c = n.items;
          o.showTooltipMarker && c.length ? (n = this._getTooltipMarkerStyle(n), i.setMarkers(n)) : i.clearMarkers(), i.show()
        }
      }, t.prototype.showTooltip = function(t) {
        var e = this,
          n = e.chart,
          r = void 0,
          i = [],
          c = [],
          u = e.cfg,
          l = void 0;
        u.showItemMarker && (l = u.itemMarkerStyle);
        var h = n.get("geoms"),
          y = n.get("coord");
        if (f.each(h, function(e) {
            if (e.get("visible")) {
              var n = e.get("type"),
                u = e.getSnapRecords(t);
              f.each(u, function(t) {
                if (t.x && t.y) {
                  var u = t.x,
                    h = t.y,
                    d = t._origin,
                    g = t.color,
                    v = {
                      x: u,
                      y: f.isArray(h) ? h[1] : h,
                      color: g || p.defaultColor,
                      origin: d,
                      name: o(e, d),
                      value: a(e, d),
                      title: s(e, d)
                    };
                  l && (v.marker = f.mix({
                    fill: g || p.defaultColor
                  }, l)), c.push(v), -1 !== ["line", "area", "path"].indexOf(n) ? (r = "circle", i.push(v)) : "interval" === n && "cartesian" === y.type && (r = "rect", v.width = e.getSize(t._origin), i.push(v))
                }
              })
            }
          }), c.length) {
          var d = {
            items: i,
            type: r
          };
          e._setTooltip(t, c, d)
        } else e.hideTooltip()
      }, t.prototype.hideTooltip = function() {
        var t = this.cfg;
        this._lastActive = [];
        var e = this.tooltip;
        e && (e.hide(), t.onHide && t.onHide({
          tooltip: e
        }), this.chart.get("canvas").draw())
      }, t.prototype.handleShowEvent = function(t) {
        if (this.enable) {
          var e = this.chart,
            n = e.get("plotRange"),
            r = f.createEvent(t, e);
          if (y.isPointInPlot(r, n) || this.cfg.alwaysShow) {
            var i = this.timeStamp,
              o = +new Date;
            o - i > 16 && (this.showTooltip(r), this.timeStamp = o)
          } else this.hideTooltip()
        }
      }, t.prototype.handleHideEvent = function() {
        this.enable && this.hideTooltip()
      }, t.prototype.handleDocEvent = function(t) {
        if (this.enable) {
          var e = this.canvasDom;
          t.target !== e && this.hideTooltip()
        }
      }, t.prototype._handleEvent = function(t, e, n) {
        var r = this.canvasDom;
        f.each([].concat(t), function(t) {
          "bind" === n ? f.addEventListener(r, t, e) : f.removeEventListener(r, t, e)
        })
      }, t.prototype.bindEvents = function() {
        var t = this.cfg,
          e = t.triggerOn,
          n = t.triggerOff,
          r = t.alwaysShow,
          i = f.wrapBehavior(this, "handleShowEvent"),
          o = f.wrapBehavior(this, "handleHideEvent");
        if (e && this._handleEvent(e, i, "bind"), n && this._handleEvent(n, o, "bind"), !r) {
          var a = f.wrapBehavior(this, "handleDocEvent");
          f.isBrowser && f.addEventListener(document, "touchstart", a)
        }
      }, t.prototype.unBindEvents = function() {
        var t = this.cfg,
          e = t.triggerOn,
          n = t.triggerOff,
          r = t.alwaysShow,
          i = f.getWrapBehavior(this, "handleShowEvent"),
          o = f.getWrapBehavior(this, "handleHideEvent");
        if (e && this._handleEvent(e, i, "unBind"), n && this._handleEvent(n, o, "unBind"), !r) {
          var a = f.getWrapBehavior(this, "handleDocEvent");
          f.isBrowser && f.removeEventListener(document, "touchstart", a)
        }
      }, t
    }();
    t.exports = {
      init: function(t) {
        var e = new d({
          chart: t
        });
        t.set("tooltipController", e), t.tooltip = function(t, n) {
          return f.isObject(t) && (n = t, t = !0), e.enable = t, n && (e.cfg = n), this
        }
      },
      afterGeomDraw: function(t) {
        var e = t.get("tooltipController");
        e.render(), t.showTooltip = function(t) {
          return e.showTooltip(t), this
        }, t.hideTooltip = function() {
          return e.hideTooltip(), this
        }
      },
      clearInner: function(t) {
        t.get("tooltipController").clear()
      }
    }
  }, function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    var i = n(0),
      o = n(40),
      a = n(41),
      s = function() {
        function t(e) {
          r(this, t), i.deepMix(this, this.getDefaultCfg(), e);
          var n = this.frontPlot,
            o = this.plotRange;
          if (!this.custom) {
            var s = new a(i.mix({
              parent: n
            }, e));
            this.container = s, this.fixed || (this.tooltipArrow = n.addShape("Polygon", {
              className: "tooltip-arrow",
              visible: !1,
              zIndex: -1,
              attrs: {
                points: [],
                fill: this.background.fill
              }
            }))
          }
          if (this.showCrosshairs) {
            var c = this.crosshairsStyle,
              u = n.addShape("Line", {
                className: "tooltip-crosshairs",
                zIndex: 0,
                visible: !1,
                attrs: i.mix({
                  x1: 0,
                  y1: o.bl.y,
                  x2: 0,
                  y2: o.tl.y
                }, c)
              });
            this.crosshairsShape = u
          }
          n.sort()
        }
        return t.prototype.getDefaultCfg = function() {
          return {
            showCrosshairs: !1,
            crosshairsStyle: {
              stroke: "rgba(0, 0, 0, 0.25)",
              lineWidth: 1
            },
            background: null,
            layout: "horizontal",
            offsetX: 0,
            offsetY: 0
          }
        }, t.prototype.setContent = function(t, e) {
          this.title = t, this.items = e;
          var n = this.container;
          n.setTitle(t), n.setItems(e)
        }, t.prototype.setPosition = function(t) {
          var e = this.container,
            n = this.plotRange,
            r = this.offsetX,
            o = this.offsetY,
            a = this.crosshairsShape,
            s = this.fixed,
            c = this.tooltipArrow;
          if (a && a.moveTo(t[0].x, 0), e) {
            var u = e.container.getBBox(),
              l = u.minX,
              f = u.minY,
              p = u.width,
              h = u.height,
              y = n.tl,
              d = n.tr,
              g = 0,
              v = y.y - h - 4 + o;
            if (s) g = (y.x + d.x) / 2 - p / 2 + r;
            else {
              var m = void 0;
              if (m = t.length > 1 ? (t[0].x + t[t.length - 1].x) / 2 : t[0].x, (g = m - p / 2 + r) < y.x && (g = y.x), g + p > d.x && (g = d.x - p), c) {
                c.attr("points", [{
                  x: m - 3,
                  y: y.y - 4 + o
                }, {
                  x: m + 3,
                  y: y.y - 4 + o
                }, {
                  x: m,
                  y: y.y + o
                }]);
                var x = e.backShape,
                  b = i.parsePadding(x.attr("radius"));
                m === y.x ? (b[3] = 0, c.attr("points", [{
                  x: y.x,
                  y: y.y + o
                }, {
                  x: y.x,
                  y: y.y - 4 + o
                }, {
                  x: y.x + 4,
                  y: y.y - 4 + o
                }])) : m === d.x && (b[2] = 0, c.attr("points", [{
                  x: d.x,
                  y: y.y + o
                }, {
                  x: d.x - 4,
                  y: y.y - 4 + o
                }, {
                  x: d.x,
                  y: y.y - 4 + o
                }])), x.attr("radius", b)
              }
            }
            e.moveTo(g - l, v - f)
          }
        }, t.prototype.setMarkers = function() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = this,
            n = t.items,
            r = t.style,
            a = t.type,
            s = e._getMarkerGroup(a);
          if ("circle" === a)
            for (var c = 0, u = n.length; c < u; c++) {
              var l = n[c],
                f = new o({
                  className: "tooltip-circle-marker",
                  attrs: i.mix({
                    x: l.x,
                    y: l.y,
                    stroke: l.color
                  }, r)
                });
              s.add(f)
            } else s.addShape("rect", {
              className: "tooltip-rect-marker",
              attrs: r
            })
        }, t.prototype.clearMarkers = function() {
          var t = this.markerGroup;
          t && t.clear()
        }, t.prototype.show = function() {
          var t = this.crosshairsShape,
            e = this.markerGroup,
            n = this.container,
            r = this.tooltipArrow,
            i = this.canvas;
          t && t.show(), e && e.show(), n && n.show(), r && r.show(), i.draw()
        }, t.prototype.hide = function() {
          var t = this.crosshairsShape,
            e = this.markerGroup,
            n = this.container,
            r = this.tooltipArrow;
          t && t.hide(), e && e.hide(), n && n.hide(), r && r.hide()
        }, t.prototype.destroy = function() {
          var t = this.crosshairsShape,
            e = this.markerGroup,
            n = this.container,
            r = this.tooltipArrow;
          t && t.remove(!0), e && e.remove(!0), n && n.clear(), r && r.remove(!0), this.destroyed = !0
        }, t.prototype._getMarkerGroup = function(t) {
          var e = this.markerGroup;
          return e ? e.clear() : (e = "circle" === t ? this.frontPlot.addGroup({
            zIndex: 1
          }) : this.backPlot.addGroup(), this.markerGroup = e), e
        }, t
      }();
    t.exports = s
  }, function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    var i = n(0),
      o = n(10),
      a = n(1);
    a.guide = i.deepMix({
      line: {
        style: {
          stroke: "#a3a3a3",
          lineWidth: 1
        },
        top: !0
      },
      text: {
        style: {
          fill: "#787878",
          textAlign: "center",
          textBaseline: "middle"
        },
        offsetX: 0,
        offsetY: 0,
        top: !0
      },
      rect: {
        style: {
          fill: "#fafafa"
        },
        top: !1
      },
      arc: {
        style: {
          stroke: "#a3a3a3"
        },
        top: !0
      },
      html: {
        offsetX: 0,
        offsetY: 0,
        alignX: "middle",
        alignY: "middle"
      },
      tag: {
        top: !0,
        offsetX: 0,
        offsetY: 0,
        side: 4,
        background: {
          padding: 5,
          radius: 2,
          fill: "#1890FF"
        },
        textStyle: {
          fontSize: 12,
          fill: "#fff",
          textAlign: "center",
          textBaseline: "middle"
        }
      },
      point: {
        top: !0,
        offsetX: 0,
        offsetY: 0,
        style: {
          fill: "#1890FF",
          r: 3,
          lineWidth: 1,
          stroke: "#fff"
        }
      }
    }, a.guide || {});
    var s = function() {
      function t(e) {
        r(this, t), this.guides = [], this.xScale = null, this.yScales = null, i.mix(this, e)
      }
      return t.prototype.paint = function(t) {
        var e = this,
          n = e.chart,
          r = e.guides,
          o = e.xScale,
          a = e.yScales;
        i.each(r, function(r) {
          r.xScale = o, r.yScales = a;
          var i = void 0;
          "regionFilter" === r.type ? r.chart = n : i = r.top ? e.frontPlot : e.backPlot, r.render(t, i)
        })
      }, t.prototype.clear = function() {
        return this.reset(), this.guides = [], this
      }, t.prototype.reset = function() {
        var t = this.guides;
        i.each(t, function(t) {
          t.remove()
        })
      }, t.prototype._createGuide = function(t, e) {
        var n = i.upperFirst(t),
          r = new o[n](i.deepMix({}, a.guide[t], e));
        return this.guides.push(r), this
      }, t.prototype.line = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this._createGuide("line", t)
      }, t.prototype.text = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this._createGuide("text", t)
      }, t.prototype.arc = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this._createGuide("arc", t)
      }, t.prototype.html = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this._createGuide("html", t)
      }, t.prototype.rect = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this._createGuide("rect", t)
      }, t.prototype.tag = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this._createGuide("tag", t)
      }, t.prototype.point = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this._createGuide("point", t)
      }, t.prototype.regionFilter = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this._createGuide("regionFilter", t)
      }, t
    }();
    t.exports = {
      init: function(t) {
        var e = new s({
          frontPlot: t.get("frontPlot").addGroup({
            zIndex: 20,
            className: "guideContainer"
          }),
          backPlot: t.get("backPlot").addGroup({
            className: "guideContainer"
          })
        });
        t.set("guideController", e), t.guide = function() {
          return e
        }
      },
      afterGeomDraw: function(t) {
        var e = t.get("guideController");
        if (e.guides.length) {
          var n = t.getXScale(),
            r = t.getYScales(),
            i = t.get("coord");
          e.xScale = n, e.yScales = r, e.chart = t, e.paint(i)
        }
      },
      clear: function(t) {
        t.get("guideController").clear()
      },
      repaint: function(t) {
        t.get("guideController").reset()
      }
    }
  }, function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    var i = n(0),
      o = n(41),
      a = n(1),
      s = {
        itemMarginBottom: 12,
        itemGap: 10,
        showTitle: !1,
        titleStyle: {
          fontSize: 12,
          fill: "#808080",
          textAlign: "start",
          textBaseline: "top"
        },
        nameStyle: {
          fill: "#808080",
          fontSize: 12,
          textAlign: "start",
          textBaseline: "middle"
        },
        valueStyle: {
          fill: "#000000",
          fontSize: 12,
          textAlign: "start",
          textBaseline: "middle"
        },
        unCheckStyle: {
          fill: "#bfbfbf"
        },
        itemWidth: "auto",
        wordSpace: 6,
        selectedMode: "multiple"
      };
    a.legend = i.deepMix({
      right: i.mix({
        position: "right",
        layout: "vertical"
      }, s),
      left: i.mix({
        position: "left",
        layout: "vertical"
      }, s),
      top: i.mix({
        position: "top",
        layout: "horizontal"
      }, s),
      bottom: i.mix({
        position: "bottom",
        layout: "horizontal"
      }, s)
    }, a.legend || {});
    var c = function() {
      function t(e) {
        r(this, t), this.legendCfg = {}, this.enable = !0, this.position = "top", i.mix(this, e);
        var n = this.chart;
        this.canvasDom = n.get("canvas").get("el"), this.clear()
      }
      return t.prototype.addLegend = function(t, e, n) {
        var r = this,
          i = r.legendCfg,
          o = t.field,
          a = i[o];
        if (!1 === a) return null;
        if (a && a.custom) r.addCustomLegend(o);
        else {
          var s = i.position || r.position;
          a && a.position && (s = a.position), t.isCategory && r._addCategoryLegend(t, e, s, n)
        }
      }, t.prototype.addCustomLegend = function(t) {
        var e = this,
          n = e.legendCfg;
        t && n[t] && (n = n[t]);
        var r = n.position || e.position,
          s = e.legends;
        s[r] = s[r] || [];
        var c = n.items;
        if (!c) return null;
        var u = e.container;
        i.each(c, function(t) {
          i.isObject(t.marker) ? t.marker.radius = t.marker.radius || 3 : t.marker = {
            symbol: t.marker || "circle",
            fill: t.fill,
            radius: 3
          }, t.checked = !!i.isNil(t.checked) || t.checked, t.name = t.name || t.value
        });
        var l = new o(i.deepMix({}, a.legend[r], n, {
          maxLength: e._getMaxLength(r),
          items: c,
          parent: u
        }));
        s[r].push(l)
      }, t.prototype.clear = function() {
        var t = this.legends;
        i.each(t, function(t) {
          i.each(t, function(t) {
            t.clear()
          })
        }), this.legends = {}, this.unBindEvents()
      }, t.prototype._isFiltered = function(t, e, n) {
        var r = !1;
        return i.each(e, function(e) {
          if (r = r || t.getText(e) === t.getText(n)) return !1
        }), r
      }, t.prototype._getMaxLength = function(t) {
        var e = this.chart,
          n = 2 * e.get("appendPadding");
        return "right" === t || "left" === t ? e.get("height") - n : e.get("width") - n
      }, t.prototype._addCategoryLegend = function(t, e, n, r) {
        var s = this,
          c = s.legendCfg,
          u = s.legends,
          l = s.container,
          f = s.chart,
          p = t.field;
        u[n] = u[n] || [];
        var h = "circle";
        c[p] && c[p].marker ? h = c[p].marker : c.marker && (h = c.marker), i.each(e, function(e) {
          i.isPlainObject(h) ? i.mix(e.marker, h) : e.marker.symbol = h, r && (e.checked = s._isFiltered(t, r, e.dataValue))
        }), f.get("legendItems")[p] = e;
        var y = i.deepMix({}, a.legend[n], c[p] || c, {
          maxLength: s._getMaxLength(n),
          items: e,
          field: p,
          filterVals: r,
          parent: l
        });
        y.showTitle && i.deepMix(y, {
          title: t.alias || t.field
        });
        var d = new o(y);
        return u[n].push(d), d
      }, t.prototype._alignLegend = function(t, e, n) {
        var r = this,
          i = r.plotRange,
          o = i.tl,
          a = i.bl,
          s = r.chart,
          c = t.offsetX || 0,
          u = t.offsetY || 0,
          l = s.get("width"),
          f = s.get("height"),
          p = s.get("appendPadding"),
          h = t.getHeight(),
          y = t.getWidth(),
          d = 0,
          g = 0;
        if ("left" === n || "right" === n) {
          var v = t.verticalAlign || "middle",
            m = Math.abs(o.y - a.y);
          d = "left" === n ? p : l - y - p, g = (m - h) / 2 + o.y, "top" === v ? g = o.y : "bottom" === v && (g = a.y - h), e && (g = e.get("y") - h - 12)
        } else {
          var x = t.align || "left";
          if (d = p, "center" === x ? d = l / 2 - y / 2 : "right" === x && (d = l - (y + p)), g = "top" === n ? p + Math.abs(t.container.getBBox().minY) : f - h, e) {
            var b = e.getWidth();
            d = e.x + b + 12
          }
        }
        "bottom" === n && u > 0 && (u = 0), "right" === n && c > 0 && (c = 0), t.moveTo(d + c, g + u)
      }, t.prototype.alignLegends = function() {
        var t = this,
          e = t.legends;
        return i.each(e, function(e, n) {
          i.each(e, function(r, i) {
            var o = e[i - 1];
            t._alignLegend(r, o, n)
          })
        }), t
      }, t.prototype.handleEvent = function(t) {
        var e = this,
          n = e.chart,
          r = i.createEvent(t, n),
          o = function(t, n) {
            var r = null,
              o = e.legends;
            return i.each(o, function(e) {
              i.each(e, function(e) {
                var o = e.itemsGroup,
                  a = e.legendHitBoxes,
                  s = o.get("children");
                if (s.length) {
                  var c = e.x,
                    u = e.y;
                  i.each(a, function(i, o) {
                    if (t >= i.x + c && t <= i.x + i.width + c && n >= i.y + u && n <= i.height + i.y + u) return r = {
                      clickedItem: s[o],
                      clickedLegend: e
                    }, !1
                  })
                }
              })
            }), r
          }(r.x, r.y);
        if (o && !1 !== o.clickedLegend.clickable) {
          var a = o.clickedItem,
            s = o.clickedLegend;
          if (s.onClick) t.clickedItem = a, s.onClick(t);
          else if (!s.custom) {
            var c = a.get("checked"),
              u = a.get("dataValue"),
              l = s.filterVals,
              f = s.field;
            "single" === s.selectedMode ? n.filter(f, function(t) {
              return t === u
            }) : (c ? i.Array.remove(l, u) : l.push(u), n.filter(f, function(t) {
              return -1 !== l.indexOf(t)
            })), n.repaint()
          }
        }
      }, t.prototype.bindEvents = function() {
        var t = this.legendCfg.triggerOn || "touchstart",
          e = i.wrapBehavior(this, "handleEvent");
        i.addEventListener(this.canvasDom, t, e)
      }, t.prototype.unBindEvents = function() {
        var t = this.legendCfg.triggerOn || "touchstart",
          e = i.getWrapBehavior(this, "handleEvent");
        i.removeEventListener(this.canvasDom, t, e)
      }, t
    }();
    t.exports = {
      init: function(t) {
        var e = new c({
          container: t.get("backPlot"),
          plotRange: t.get("plotRange"),
          chart: t
        });
        t.set("legendController", e), t.legend = function(t, n) {
          var r = e.legendCfg;
          return e.enable = !0, i.isBoolean(t) ? (e.enable = t, r = n || {}) : i.isObject(t) ? r = t : r[t] = n, e.legendCfg = r, this
        }
      },
      beforeGeomDraw: function(t) {
        var e = t.get("legendController");
        if (!e.enable) return null;
        var n = e.legendCfg;
        if (n && n.custom) e.addCustomLegend();
        else {
          var r = t.getLegendItems(),
            o = t.get("scales"),
            a = t.get("filters");
          i.each(r, function(t, n) {
            var r = o[n],
              i = r.values,
              s = void 0;
            s = a && a[n] ? i.filter(a[n]) : i.slice(0), e.addLegend(r, t, s)
          })
        }
        n && !1 !== n.clickable && e.bindEvents();
        var s = e.legends,
          c = {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          },
          u = t.get("appendPadding");
        i.each(s, function(t, e) {
          var n = 0;
          i.each(t, function(t) {
            var r = t.getWidth(),
              i = t.getHeight();
            "top" === e || "bottom" === e ? (n = Math.max(n, i), t.offsetY > 0 && (n += t.offsetY)) : (n = Math.max(n, r), t.offsetX > 0 && (n += t.offsetX))
          }), c[e] = n + u
        }), t.set("legendRange", c)
      },
      afterGeomDraw: function(t) {
        t.get("legendController").alignLegends()
      },
      clearInner: function(t) {
        t.get("legendController").clear(), t.set("legendRange", null)
      }
    }
  }, function(t, e, n) {
    var r = n(0),
      i = {
        appear: {
          duration: 450,
          easing: "quadraticOut"
        },
        update: {
          duration: 300,
          easing: "quadraticOut"
        },
        enter: {
          duration: 300,
          easing: "quadraticOut"
        },
        leave: {
          duration: 350,
          easing: "quadraticIn"
        }
      },
      o = {
        defaultCfg: {},
        Action: {},
        getAnimation: function(t, e, n) {
          var i = this.defaultCfg[t];
          if (i) {
            var o = i[n];
            if (r.isFunction(o)) return o(e)
          }
          return !1
        },
        getAnimateCfg: function(t, e) {
          var n = i[e],
            o = this.defaultCfg[t];
          return o && o.cfg && o.cfg[e] ? r.deepMix({}, n, o.cfg[e]) : n
        },
        registerAnimation: function(t, e) {
          this.Action || (this.Action = {}), this.Action[t] = e
        }
      };
    t.exports = o
  }, function(t, e, n) {
    var r = n(9).Matrix,
      i = n(0),
      o = {
        getCoordInfo: function(t) {
          var e = t.start,
            n = t.end;
          return {
            start: e,
            end: n,
            width: n.x - e.x,
            height: Math.abs(n.y - e.y)
          }
        },
        getScaledMatrix: function(t, e, n) {
          var i = void 0;
          t.apply(e);
          var o = e[0],
            a = e[1];
          if ("x" === n) {
            t.transform([
              ["t", o, a],
              ["s", .01, 1],
              ["t", -o, -a]
            ]);
            var s = t.getMatrix();
            i = r.transform(s, [
              ["t", o, a],
              ["s", 100, 1],
              ["t", -o, -a]
            ])
          } else if ("y" === n) {
            t.transform([
              ["t", o, a],
              ["s", 1, .01],
              ["t", -o, -a]
            ]);
            var c = t.getMatrix();
            i = r.transform(c, [
              ["t", o, a],
              ["s", 1, 100],
              ["t", -o, -a]
            ])
          } else if ("xy" === n) {
            t.transform([
              ["t", o, a],
              ["s", .01, .01],
              ["t", -o, -a]
            ]);
            var u = t.getMatrix();
            i = r.transform(u, [
              ["t", o, a],
              ["s", 100, 100],
              ["t", -o, -a]
            ])
          }
          return i
        },
        getAnimateParam: function(t, e, n) {
          var r = {};
          return t.delay && (r.delay = i.isFunction(t.delay) ? t.delay(e, n) : t.delay), r.easing = t.easing, r.duration = t.duration, r.delay = t.delay, r
        },
        doAnimation: function(t, e, n, r) {
          var i = t._id,
            a = t.get("index"),
            s = o.getAnimateParam(n, a, i),
            c = s.easing,
            u = s.delay,
            l = s.duration,
            f = t.animate().to({
              attrs: e,
              duration: l,
              delay: u,
              easing: c
            });
          r && f.onEnd(function() {
            r()
          })
        }
      };
    t.exports = o
  }, function(t, e, n) {
    var r = n(7);
    n(90), n(38), n(80), n(92), n(81), n(115), n(117), t.exports = r
  }, function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var a = n(7),
      s = n(0);
    n(116);
    var c = function(t) {
      function e() {
        return r(this, e), i(this, t.apply(this, arguments))
      }
      return o(e, t), e.prototype.getDefaultCfg = function() {
        var e = t.prototype.getDefaultCfg.call(this);
        return e.type = "polygon", e.shapeType = "polygon", e.generatePoints = !0, e
      }, e.prototype.createShapePointsCfg = function(e) {
        var n = t.prototype.createShapePointsCfg.call(this, e),
          r = this,
          i = n.x,
          o = n.y,
          a = void 0;
        if (!s.isArray(i) || !s.isArray(o)) {
          var c = r.getXScale(),
            u = r.getYScale(),
            l = .5 / (c.values ? c.values.length : c.ticks.length),
            f = .5 / (u.values ? u.values.length : u.ticks.length);
          c.isCategory && u.isCategory ? (i = [i - l, i - l, i + l, i + l], o = [o - f, o + f, o + f, o - f]) : s.isArray(i) ? (i = [(a = i)[0], a[0], a[1], a[1]], o = [o - f / 2, o + f / 2, o + f / 2, o - f / 2]) : s.isArray(o) && (o = [(a = o)[0], a[1], a[1], a[0]], i = [i - l / 2, i - l / 2, i + l / 2, i + l / 2]), n.x = i, n.y = o
        }
        return n
      }, e
    }(a);
    a.Polygon = c, t.exports = c
  }, function(t, e, n) {
    var r = n(8),
      i = n(0),
      o = r.registerFactory("polygon", {
        defaultShapeType: "polygon",
        getDefaultPoints: function(t) {
          for (var e = [], n = t.x, r = t.y, i = 0, o = n.length; i < o; i++) e.push({
            x: n[i],
            y: r[i]
          });
          return e
        }
      });
    r.registerShape("polygon", "polygon", {
      draw: function(t, e) {
        var n = this.parsePoints(t.points),
          r = i.mix({
            fill: t.color,
            points: n
          }, t.style);
        return e.addShape("Polygon", {
          className: "polygon",
          attrs: r
        })
      }
    }), t.exports = o
  }, function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var a = n(7),
      s = n(0),
      c = n(39);
    n(118);
    var u = function(t) {
      function e(n) {
        r(this, e);
        var o = i(this, t.call(this, n));
        return s.mix(o, c), o
      }
      return o(e, t), e.prototype.getDefaultCfg = function() {
        var e = t.prototype.getDefaultCfg.call(this);
        return e.type = "schema", e.shapeType = "schema", e.generatePoints = !0, e
      }, e.prototype.createShapePointsCfg = function(e) {
        var n = t.prototype.createShapePointsCfg.call(this, e);
        return n.size = this.getNormalizedSize(e), n
      }, e.prototype.clearInner = function() {
        t.prototype.clearInner.call(this), this.set("defaultSize", null)
      }, e
    }(a);
    a.Schema = u, t.exports = u
  }, function(t, e, n) {
    function r(t) {
      var e = t.sort(function(t, e) {
          return t < e ? 1 : -1
        }),
        n = e.length;
      if (n < 4)
        for (var r = e[n - 1], i = 0; i < 4 - n; i++) e.push(r);
      return e
    }

    function i(t, e, n) {
      var i = r(e);
      return [{
        x: t,
        y: i[0]
      }, {
        x: t,
        y: i[1]
      }, {
        x: t - n / 2,
        y: i[2]
      }, {
        x: t - n / 2,
        y: i[1]
      }, {
        x: t + n / 2,
        y: i[1]
      }, {
        x: t + n / 2,
        y: i[2]
      }, {
        x: t,
        y: i[2]
      }, {
        x: t,
        y: i[3]
      }]
    }
    var o = n(8),
      a = n(0),
      s = o.registerFactory("schema", {});
    o.registerShape("schema", "candle", {
      getPoints: function(t) {
        return i(t.x, t.y, t.size)
      },
      draw: function(t, e) {
        var n = this.parsePoints(t.points),
          r = a.mix({
            stroke: t.color,
            fill: t.color,
            lineWidth: 1
          }, t.style);
        return e.addShape("Custom", {
          className: "schema",
          attrs: r,
          createPath: function(t) {
            t.beginPath(), t.moveTo(n[0].x, n[0].y), t.lineTo(n[1].x, n[1].y), t.moveTo(n[2].x, n[2].y);
            for (var e = 3; e < 6; e++) t.lineTo(n[e].x, n[e].y);
            t.closePath(), t.moveTo(n[6].x, n[6].y), t.lineTo(n[7].x, n[7].y)
          }
        })
      }
    }), t.exports = s
  }, function(t, e, n) {
    function r(t, e) {
      var n = {};
      for (var r in e) f.isNumber(t[r]) && t[r] !== e[r] ? n[r] = e[r] : f.isArray(t[r]) && JSON.stringify(t[r]) !== JSON.stringify(e[r]) && (n[r] = e[r]);
      return n
    }

    function i(t, e) {
      var n = t.get("type"),
        r = "geom-" + n,
        i = t.getXScale(),
        o = t.getYScale(),
        a = i.field || "x",
        s = o.field || "y",
        c = e[s],
        u = void 0;
      u = i.isIdentity ? i.value : e[a], r += "interval" === n || "schema" === n ? "-" + u : "line" === n || "area" === n || "path" === n ? "-" + n : i.isCategory ? "-" + u : "-" + u + "-" + c;
      var l = t._getGroupScales();
      return f.each(l, function(t) {
        var n = t.field;
        "identity" !== t.type && (r += "-" + e[n])
      }), r
    }

    function o(t, e, n) {
      var r = [];
      return f.each(t, function(t) {
        var o = t.get("container").get("children"),
          a = t.get("type"),
          s = f.isNil(t.get("animateCfg")) ? l(a, e) : t.get("animateCfg");
        !1 !== s && f.each(o, function(e, o) {
          e.get("className") === a && (e._id = i(t, e.get("origin")._origin), e.set("coord", n), e.set("animateCfg", s), e.set("index", o), r.push(e))
        }), t.set("shapes", o)
      }), r
    }

    function a(t) {
      for (var e = {}, n = 0, r = t.length; n < r; n++) {
        var i = t[n];
        if (i._id && !i.isClip) {
          var o = i._id;
          e[o] = {
            _id: o,
            type: i.get("type"),
            attrs: f.mix({}, i._attrs.attrs),
            className: i.get("className"),
            geomType: i.get("className"),
            index: i.get("index"),
            coord: i.get("coord"),
            animateCfg: i.get("animateCfg")
          }
        }
      }
      return e
    }

    function s(t, e, n, r) {
      return f.isFunction(r) ? r : f.isString(r) ? d.Action[r] : d.getAnimation(t, e, n)
    }

    function c(t, e, n) {
      if (!1 === n || f.isObject(n) && !1 === n[e]) return !1;
      var r = d.getAnimateCfg(t, e);
      return n && n[e] ? f.deepMix({}, r, n[e]) : r
    }

    function u(t, e, n) {
      var i = void 0,
        o = void 0,
        a = [],
        u = [];
      f.each(e, function(e) {
        var n = t[e._id];
        n ? (e.set("cacheShape", n), a.push(e), delete t[e._id]) : u.push(e)
      }), f.each(t, function(t) {
        var e = t.className,
          r = t.coord,
          a = t._id,
          u = t.attrs,
          l = t.index,
          p = t.type;
        if (!1 === (o = c(e, "leave", t.animateCfg))) return !0;
        if (i = s(e, r, "leave", o.animation), f.isFunction(i)) {
          var h = n.addShape(p, {
            attrs: u,
            index: l,
            canvas: n,
            className: e
          });
          h._id = a, i(h, o, r)
        }
      }), f.each(a, function(t) {
        var e = t.get("className");
        if (!1 === (o = c(e, "update", t.get("animateCfg")))) return !0;
        var n = t.get("coord"),
          a = t.get("cacheShape").attrs,
          u = r(a, t._attrs.attrs);
        Object.keys(u).length && (i = s(e, n, "update", o.animation), f.isFunction(i) ? i(t, o, n) : (t.attr(a), t.animate().to({
          attrs: u,
          duration: o.duration,
          easing: o.easing,
          delay: o.delay
        }).onEnd(function() {
          t.set("cacheShape", null)
        })))
      }), f.each(u, function(t) {
        var e = t.get("className"),
          n = t.get("coord");
        if (!1 === (o = c(e, "enter", t.get("animateCfg")))) return !0;
        if (i = s(e, n, "enter", o.animation), f.isFunction(i))
          if ("interval" === e && n.isPolar && n.transposed) {
            var r = t.get("index"),
              u = a[r - 1];
            i(t, o, u)
          } else i(t, o, n)
      })
    }

    function l(t, e) {
      var n = e.get("animate");
      return f.isObject(n) ? n[t] : !1 !== n && null
    }
    var f = n(0),
      p = n(25),
      h = n(120),
      y = n(121),
      d = n(112),
      g = n(123),
      v = n(124),
      m = n(23),
      x = void 0;
    p.prototype.animate = function() {
      var t = this.get("attrs");
      return new y(this, t, x)
    }, m.prototype.animate = function(t) {
      return this.set("animate", t), this
    }, d.Action = g, d.defaultCfg = {
      interval: {
        enter: function(t) {
          return t.isPolar && t.transposed ? function(t) {
            t.set("zIndex", -1), t.get("parent").sort()
          } : g.fadeIn
        }
      },
      area: {
        enter: function(t) {
          return t.isPolar ? null : g.fadeIn
        }
      },
      line: {
        enter: function(t) {
          return t.isPolar ? null : g.fadeIn
        }
      },
      path: {
        enter: function(t) {
          return t.isPolar ? null : g.fadeIn
        }
      }
    };
    var b = {
      line: function(t) {
        return t.isPolar ? v.groupScaleInXY : v.groupWaveIn
      },
      area: function(t) {
        return t.isPolar ? v.groupScaleInXY : v.groupWaveIn
      },
      path: function(t) {
        return t.isPolar ? v.groupScaleInXY : v.groupWaveIn
      },
      point: function() {
        return v.shapesScaleInXY
      },
      interval: function(t) {
        var e = void 0;
        return t.isPolar ? (e = v.groupScaleInXY, t.transposed && (e = v.groupWaveIn)) : e = t.transposed ? v.groupScaleInX : v.groupScaleInY, e
      },
      schema: function() {
        return v.groupWaveIn
      }
    };
    t.exports = {
      afterCanvasInit: function() {
        (x = new h).play()
      },
      beforeCanvasDraw: function(t) {
        if (!1 !== t.get("animate")) {
          var e = t.get("isUpdate"),
            n = t.get("canvas"),
            r = t.get("coord"),
            i = t.get("geoms"),
            p = n.get("caches") || [];
          0 === p.length && (e = !1);
          var h = o(i, t, r),
            y = t.get("axisController"),
            d = y.frontPlot,
            g = y.backPlot,
            m = [];
          d.get("children").concat(g.get("children")).forEach(function(e) {
            var n = e.get("className");
            e.set("coord", r), e.set("animateCfg", l(n, t)), m.push(e)
          });
          var x = h.concat(m);
          if (n.set("caches", a(x)), e) u(p, x, n);
          else {
            var w = void 0,
              _ = void 0;
            f.each(i, function(e) {
              var n = e.get("type"),
                i = f.isNil(e.get("animateCfg")) ? l(n, t) : e.get("animateCfg");
              if (!1 !== i)
                if (w = c(n, "appear", i), _ = s(n, r, "appear", w.animation), f.isFunction(_)) {
                  var o = e.get("shapes");
                  f.each(o, function(t) {
                    _(t, w, r)
                  })
                } else if (b[n]) {
                _ = v[w.animation] || b[n](r);
                var a = e.getYScale(),
                  u = r.convertPoint({
                    x: 0,
                    y: a.scale(e.getYMinValue())
                  }),
                  p = e.get("container");
                _ && _(p, w, r, u)
              }
            })
          }
        }
      },
      afterCanvasDestroyed: function() {
        x.stop()
      }
    }
  }, function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      },
      o = n(37).requestAnimationFrame,
      a = "object" === ("undefined" == typeof performance ? "undefined" : i(performance)) && performance.now ? performance : Date,
      s = function() {
        function t() {
          r(this, t), this.anims = [], this.time = null, this.playing = !1, this.canvas = []
        }
        return t.prototype.play = function() {
          function t() {
            e.playing && (o(t), e.update())
          }
          var e = this;
          e.time = a.now(), e.playing = !0, o(t)
        }, t.prototype.stop = function() {
          this.playing = !1, this.time = null, this.canvas = []
        }, t.prototype.update = function() {
          var t = a.now();
          this.canvas = [];
          for (var e = 0; e < this.anims.length; e++) {
            var n = this.anims[e];
            if (!(t < n.startTime || n.hasEnded)) {
              var r = n.shape;
              if (r.get("destroyed")) this.anims.splice(e, 1), e--;
              else {
                var i = n.startState,
                  o = n.endState,
                  s = n.interpolate,
                  c = n.duration;
                t >= n.startTime && !n.hasStarted && (n.hasStarted = !0, n.onStart && n.onStart());
                var u = (t - n.startTime) / c;
                if (u = Math.max(0, Math.min(u, 1)), u = n.easing(u), n.onFrame) n.onFrame(u);
                else
                  for (var l in s) {
                    var f = (0, s[l])(u),
                      p = void 0;
                    if ("points" === l) {
                      p = [];
                      for (var h = Math.max(i.points.length, o.points.length), y = 0; y < h; y += 2) p.push({
                        x: f[y],
                        y: f[y + 1]
                      })
                    } else p = f;
                    r._attrs.attrs[l] = p
                  }
                var d = r.get("canvas"); - 1 === this.canvas.indexOf(d) && this.canvas.push(d), n.onUpdate && n.onUpdate(u), t >= n.endTime && !n.hasEnded && (n.hasEnded = !0, n.onEnd && n.onEnd()), 1 === u && (this.anims.splice(e, 1), e--)
              }
            }
          }
          this.canvas.map(function(t) {
            return t.draw(), t
          }), this.time = a.now()
        }, t
      }();
    t.exports = s
  }, function(t, e, n) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t) {
      for (var e = [], n = 0, r = t.length; n < r; n++) t[n] && (e.push(t[n].x), e.push(t[n].y));
      return e
    }

    function o(t, e) {
      return t = +t, e -= t,
        function(n) {
          return t + e * n
        }
    }

    function a(t, e) {
      var n = e ? e.length : 0,
        r = t ? Math.min(n, t.length) : 0,
        i = new Array(r),
        a = new Array(n),
        s = void 0;
      for (s = 0; s < r; ++s) i[s] = o(t[s], e[s]);
      for (; s < n; ++s) a[s] = e[s];
      return function(t) {
        for (s = 0; s < r; ++s) a[s] = i[s](t);
        return a
      }
    }
    var s = n(122),
      c = function() {
        function t(e, n, i) {
          r(this, t), this.hasStarted = !1, this.hasEnded = !1, this.shape = e, this.source = n, this.timeline = i, this.animate = null
        }
        return t.prototype.to = function() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = t.delay || 0,
            n = t.attrs || {},
            r = t.duration || 1e3,
            c = void 0;
          c = "function" == typeof t.easing ? t.easing : s[t.easing] || s.linear;
          var u = {
              shape: this.shape,
              startTime: this.timeline.time + e,
              duration: r,
              easing: c
            },
            l = {};
          for (var f in n) {
            var p = this.source[f],
              h = n[f];
            "points" === f ? (p = i(p), h = i(h), l.points = a(p, h), this.source.points = p, n.points = h) : "matrix" === f ? l.matrix = a(p, h) : l[f] = o(p, h)
          }
          return u.interpolate = l, u.startState = this.source, u.endState = n, u.endTime = u.startTime + r, this.timeline.anims.push(u), this.animate = u, this
        }, t.prototype.onFrame = function(t) {
          return this.animate && (this.animate.onFrame = function(e) {
            t(e)
          }), this
        }, t.prototype.onStart = function(t) {
          return this.animate && (this.animate.onStart = function() {
            t()
          }), this
        }, t.prototype.onUpdate = function(t) {
          return this.animate && (this.animate.onUpdate = function(e) {
            t(e)
          }), this
        }, t.prototype.onEnd = function(t) {
          return this.animate && (this.animate.onEnd = function() {
            t()
          }), this
        }, t
      }();
    t.exports = c
  }, function(t, e) {
    var n = {
      linear: function(t) {
        return t
      },
      quadraticIn: function(t) {
        return t * t
      },
      quadraticOut: function(t) {
        return t * (2 - t)
      },
      quadraticInOut: function(t) {
        return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
      },
      cubicIn: function(t) {
        return t * t * t
      },
      cubicOut: function(t) {
        return --t * t * t + 1
      },
      cubicInOut: function(t) {
        return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
      },
      elasticIn: function(t) {
        var e = void 0,
          n = .1,
          r = .4;
        return 0 === t ? 0 : 1 === t ? 1 : (r || (r = .3), !n || n < 1 ? (n = 1, e = r / 4) : e = r / (2 * Math.PI) * Math.asin(1 / n), -n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / r))
      },
      elasticOut: function(t) {
        var e = void 0,
          n = .1,
          r = .4;
        return 0 === t ? 0 : 1 === t ? 1 : (r || (r = .3), !n || n < 1 ? (n = 1, e = r / 4) : e = r / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / r) + 1)
      },
      elasticInOut: function(t) {
        var e = void 0,
          n = .1,
          r = .4;
        return 0 === t ? 0 : 1 === t ? 1 : (r || (r = .3), !n || n < 1 ? (n = 1, e = r / 4) : e = r / (2 * Math.PI) * Math.asin(1 / n), (t *= 2) < 1 ? n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / r) * -.5 : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / r) * .5 + 1)
      },
      backIn: function(t) {
        var e = 1.70158;
        return t * t * ((e + 1) * t - e)
      },
      backOut: function(t) {
        var e = 1.70158;
        return (t -= 1) * t * ((e + 1) * t + e) + 1
      },
      backInOut: function(t) {
        var e = 2.5949095;
        return (t *= 2) < 1 ? t * t * ((e + 1) * t - e) * .5 : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
      },
      bounceIn: function(t) {
        return 1 - n.bounceOut(1 - t)
      },
      bounceOut: function(t) {
        return (t /= 1) < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
      },
      bounceInOut: function(t) {
        return t < .5 ? .5 * n.bounceIn(2 * t) : .5 * n.bounceOut(2 * t - 1) + .5
      }
    };
    t.exports = n
  }, function(t, e, n) {
    var r = n(0),
      i = n(113);
    t.exports = {
      fadeIn: function(t, e) {
        var n = r.isNil(t.attr("fillOpacity")) ? 1 : t.attr("fillOpacity"),
          o = r.isNil(t.attr("strokeOpacity")) ? 1 : t.attr("strokeOpacity");
        t.attr("fillOpacity", 0), t.attr("strokeOpacity", 0);
        var a = {
          fillOpacity: n,
          strokeOpacity: o
        };
        i.doAnimation(t, a, e)
      }
    }
  }, function(t, e, n) {
    function r(t, e, n, r, i) {
      var a = o.getCoordInfo(n),
        c = a.start,
        u = a.end,
        l = a.width,
        f = a.height,
        p = void 0,
        h = void 0,
        y = new s.Rect({
          attrs: {
            x: c.x,
            y: u.y,
            width: l,
            height: f
          }
        });
      "y" === i ? (p = c.x + l / 2, h = r.y < c.y ? r.y : c.y) : "x" === i ? (p = r.x > c.x ? r.x : c.x, h = c.y + f / 2) : "xy" === i && (n.isPolar ? (p = n.center.x, h = n.center.y) : (p = (c.x + u.x) / 2, h = (c.y + u.y) / 2));
      var d = o.getScaledMatrix(y, [p, h], i);
      y.isClip = !0, y.endState = {
        matrix: d
      }, y.set("canvas", t.get("canvas")), t.attr("clip", y);
      o.doAnimation(y, y.endState, e, function() {
        t.attr("clip", null), y.remove(!0)
      })
    }

    function i(t, e, n) {
      for (var r = t.get("children"), i = void 0, a = void 0, s = void 0, c = 0, u = r.length; c < u; c++) {
        var l = r[c],
          f = l.getBBox();
        i = (f.minX + f.maxX) / 2, a = (f.minY + f.maxY) / 2, s = o.getScaledMatrix(l, [i, a], n), o.doAnimation(l, {
          matrix: s
        }, e)
      }
    }
    var o = n(113),
      a = n(26),
      s = n(9).Shape;
    t.exports = {
      groupWaveIn: function(t, e, n) {
        var r = a.getClip(n);
        r.set("canvas", t.get("canvas")), t.attr("clip", r);
        var i = {};
        if (n.isPolar) {
          var s = n.startAngle,
            c = n.endAngle;
          i.endAngle = c, r.attr("endAngle", s)
        } else {
          var u = n.start,
            l = n.end,
            f = Math.abs(u.x - l.x),
            p = Math.abs(u.y - l.y);
          n.isTransposed ? (r.attr("height", 0), i.height = p) : (r.attr("width", 0), i.width = f)
        }
        o.doAnimation(r, i, e, function() {
          t.attr("clip", null), r.remove(!0)
        })
      },
      groupScaleInX: function(t, e, n, i) {
        r(t, e, n, i, "x")
      },
      groupScaleInY: function(t, e, n, i) {
        r(t, e, n, i, "y")
      },
      groupScaleInXY: function(t, e, n, i) {
        r(t, e, n, i, "xy")
      },
      shapesScaleInX: function(t, e) {
        i(t, e, "x")
      },
      shapesScaleInY: function(t, e) {
        i(t, e, "y")
      },
      shapesScaleInXY: function(t, e) {
        i(t, e, "xy")
      }
    }
  }, , function(t, e, n) {
    var r = n(42);
    n(114), n(83), n(88), n(94), n(95), n(99);
    var i = n(108),
      o = n(110),
      a = n(111),
      s = n(119);
    r.Animate = n(112), r.Chart.plugins.register([i, a, o, s]), t.exports = r
  }])
});