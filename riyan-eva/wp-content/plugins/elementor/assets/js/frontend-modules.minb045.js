/*! elementor - v3.4.8 - 16-11-2021 */
(self.webpackChunkelementor = self.webpackChunkelementor || []).push([
  [354],
  {
    7914: (e) => {
      (e.exports = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    8135: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
      class _default extends elementorModules.ViewModule {
        getDefaultSettings() {
          return { selectors: { elements: ".elementor-element", nestedDocumentElements: ".elementor .elementor-element" }, classes: { editMode: "elementor-edit-mode" } };
        }
        getDefaultElements() {
          const e = this.getSettings("selectors");
          return { $elements: this.$element.find(e.elements).not(this.$element.find(e.nestedDocumentElements)) };
        }
        getDocumentSettings(e) {
          let t;
          if (this.isEdit) {
            t = {};
            const e = elementor.settings.page.model;
            jQuery.each(e.getActiveControls(), (n) => {
              t[n] = e.attributes[n];
            });
          } else t = this.$element.data("elementor-settings") || {};
          return this.getItems(t, e);
        }
        runElementsHandlers() {
          this.elements.$elements.each((e, t) => elementorFrontend.elementsHandler.runReadyTrigger(t));
        }
        onInit() {
          (this.$element = this.getSettings("$element")),
            super.onInit(),
            (this.isEdit = this.$element.hasClass(this.getSettings("classes.editMode"))),
            this.isEdit
              ? elementor.on("document:loaded", () => {
                  elementor.settings.page.model.on("change", this.onSettingsChange.bind(this));
                })
              : this.runElementsHandlers();
        }
        onSettingsChange() {}
      }
      t.default = _default;
    },
    2821: (e, t, n) => {
      "use strict";
      var s = n(7914);
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
      var i = s(n(3090));
      class SwiperHandlerBase extends i.default {
        getInitialSlide() {
          const e = this.getEditSettings();
          return e.activeItemIndex ? e.activeItemIndex - 1 : 0;
        }
        getSlidesCount() {
          return this.elements.$slides.length;
        }
        togglePauseOnHover(e) {
          e
            ? this.elements.$swiperContainer.on({
                mouseenter: () => {
                  this.swiper.autoplay.stop();
                },
                mouseleave: () => {
                  this.swiper.autoplay.start();
                },
              })
            : this.elements.$swiperContainer.off("mouseenter mouseleave");
        }
        handleKenBurns() {
          const e = this.getSettings();
          this.$activeImageBg && this.$activeImageBg.removeClass(e.classes.kenBurnsActive),
            (this.activeItemIndex = this.swiper ? this.swiper.activeIndex : this.getInitialSlide()),
            this.swiper
              ? (this.$activeImageBg = jQuery(this.swiper.slides[this.activeItemIndex]).children("." + e.classes.slideBackground))
              : (this.$activeImageBg = jQuery(this.elements.$slides[0]).children("." + e.classes.slideBackground)),
            this.$activeImageBg.addClass(e.classes.kenBurnsActive);
        }
      }
      t.default = SwiperHandlerBase;
    },
    3090: (e) => {
      "use strict";
      e.exports = elementorModules.ViewModule.extend({
        $element: null,
        editorListeners: null,
        onElementChange: null,
        onEditSettingsChange: null,
        onPageSettingsChange: null,
        isEdit: null,
        __construct: function (e) {
          this.isActive(e) && ((this.$element = e.$element), (this.isEdit = this.$element.hasClass("elementor-element-edit-mode")), this.isEdit && this.addEditorListeners());
        },
        isActive: function () {
          return !0;
        },
        findElement: function (e) {
          var t = this.$element;
          return t.find(e).filter(function () {
            return jQuery(this).closest(".elementor-element").is(t);
          });
        },
        getUniqueHandlerID: function (e, t) {
          return e || (e = this.getModelCID()), t || (t = this.$element), e + t.attr("data-element_type") + this.getConstructorID();
        },
        initEditorListeners: function () {
          var e = this;
          if (
            ((e.editorListeners = [
              {
                event: "element:destroy",
                to: elementor.channels.data,
                callback: function (t) {
                  t.cid === e.getModelCID() && e.onDestroy();
                },
              },
            ]),
            e.onElementChange)
          ) {
            const t = e.getWidgetType() || e.getElementType();
            let n = "change";
            "global" !== t && (n += ":" + t),
              e.editorListeners.push({
                event: n,
                to: elementor.channels.editor,
                callback: function (t, n) {
                  e.getUniqueHandlerID(n.model.cid, n.$el) === e.getUniqueHandlerID() && e.onElementChange(t.model.get("name"), t, n);
                },
              });
          }
          e.onEditSettingsChange &&
            e.editorListeners.push({
              event: "change:editSettings",
              to: elementor.channels.editor,
              callback: function (t, n) {
                n.model.cid === e.getModelCID() && e.onEditSettingsChange(Object.keys(t.changed)[0]);
              },
            }),
            ["page"].forEach(function (t) {
              var n = "on" + t[0].toUpperCase() + t.slice(1) + "SettingsChange";
              e[n] &&
                e.editorListeners.push({
                  event: "change",
                  to: elementor.settings[t].model,
                  callback: function (t) {
                    e[n](t.changed);
                  },
                });
            });
        },
        getEditorListeners: function () {
          return this.editorListeners || this.initEditorListeners(), this.editorListeners;
        },
        addEditorListeners: function () {
          var e = this.getUniqueHandlerID();
          this.getEditorListeners().forEach(function (t) {
            elementorFrontend.addListenerOnce(e, t.event, t.callback, t.to);
          });
        },
        removeEditorListeners: function () {
          var e = this.getUniqueHandlerID();
          this.getEditorListeners().forEach(function (t) {
            elementorFrontend.removeListeners(e, t.event, null, t.to);
          });
        },
        getElementType: function () {
          return this.$element.data("element_type");
        },
        getWidgetType: function () {
          const e = this.$element.data("widget_type");
          if (e) return e.split(".")[0];
        },
        getID: function () {
          return this.$element.data("id");
        },
        getModelCID: function () {
          return this.$element.data("model-cid");
        },
        getElementSettings: function (e) {
          let t = {};
          const n = this.getModelCID();
          if (this.isEdit && n) {
            const e = elementorFrontend.config.elements.data[n],
              s = e.attributes;
            let i = s.widgetType || s.elType;
            s.isInner && (i = "inner-" + i);
            let r = elementorFrontend.config.elements.keys[i];
            r ||
              ((r = elementorFrontend.config.elements.keys[i] = []),
              jQuery.each(e.controls, (e, t) => {
                t.frontend_available && r.push(e);
              })),
              jQuery.each(e.getActiveControls(), function (e) {
                if (-1 !== r.indexOf(e)) {
                  let n = s[e];
                  n.toJSON && (n = n.toJSON()), (t[e] = n);
                }
              });
          } else t = this.$element.data("settings") || {};
          return this.getItems(t, e);
        },
        getEditSettings: function (e) {
          var t = {};
          return this.isEdit && (t = elementorFrontend.config.elements.editSettings[this.getModelCID()].attributes), this.getItems(t, e);
        },
        getCurrentDeviceSetting: function (e) {
          return elementorFrontend.getCurrentDeviceSetting(this.getElementSettings(), e);
        },
        onInit: function () {
          this.isActive(this.getSettings()) && elementorModules.ViewModule.prototype.onInit.apply(this, arguments);
        },
        onDestroy: function () {
          this.isEdit && this.removeEditorListeners(), this.unbindEvents && this.unbindEvents();
        },
      });
    },
    6412: (e, t, n) => {
      "use strict";
      var s = n(7914),
        i = s(n(5955)),
        r = s(n(8135)),
        o = s(n(5658)),
        l = s(n(3090)),
        c = s(n(2821));
      i.default.frontend = { Document: r.default, tools: { StretchElement: o.default }, handlers: { Base: l.default, SwiperBase: c.default } };
    },
    5658: (e) => {
      "use strict";
      e.exports = elementorModules.ViewModule.extend({
        getDefaultSettings: function () {
          return { element: null, direction: elementorFrontend.config.is_rtl ? "right" : "left", selectors: { container: window } };
        },
        getDefaultElements: function () {
          return { $element: jQuery(this.getSettings("element")) };
        },
        stretch: function () {
          var e,
            t = this.getSettings("selectors.container");
          try {
            e = jQuery(t);
          } catch (e) {}
          (e && e.length) || (e = jQuery(this.getDefaultSettings().selectors.container)), this.reset();
          var n = this.elements.$element,
            s = e.innerWidth(),
            i = n.offset().left,
            r = "fixed" === n.css("position"),
            o = r ? 0 : i;
          if (window !== e[0]) {
            var l = e.offset().left;
            r && (o = l), i > l && (o = i - l);
          }
          r || (elementorFrontend.config.is_rtl && (o = s - (n.outerWidth() + o)), (o = -o));
          var c = {};
          (c.width = s + "px"), (c[this.getSettings("direction")] = o + "px"), n.css(c);
        },
        reset: function () {
          var e = { width: "" };
          (e[this.getSettings("direction")] = ""), this.elements.$element.css(e);
        },
      });
    },
    2618: (e, t, n) => {
      "use strict";
      var s = n(7914);
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
      var i = s(n(7597));
      class ArgsObject extends i.default {
        static getInstanceType() {
          return "ArgsObject";
        }
        constructor(e) {
          super(), (this.args = e);
        }
        requireArgument(e, t = this.args) {
          if (!t.hasOwnProperty(e)) throw Error(`${e} is required.`);
        }
        requireArgumentType(e, t, n = this.args) {
          if ((this.requireArgument(e, n), typeof n[e] !== t)) throw Error(`${e} invalid type: ${t}.`);
        }
        requireArgumentInstance(e, t, n = this.args) {
          if ((this.requireArgument(e, n), !(n[e] instanceof t))) throw Error(`${e} invalid instance.`);
        }
        requireArgumentConstructor(e, t, n = this.args) {
          if ((this.requireArgument(e, n), n[e].constructor !== t)) throw Error(`${e} invalid constructor type.`);
        }
      }
      t.default = ArgsObject;
    },
    869: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = t.ForceMethodImplementation = void 0);
      class ForceMethodImplementation extends Error {
        constructor(e = {}) {
          super(`${e.isStatic ? "static " : ""}${e.fullName}() should be implemented, please provide '${e.functionName || e.fullName}' functionality.`), Error.captureStackTrace(this, ForceMethodImplementation);
        }
      }
      t.ForceMethodImplementation = ForceMethodImplementation;
      t.default = () => {
        const e = Error().stack.split("\n")[2].trim(),
          t = e.startsWith("at new") ? "constructor" : e.split(" ")[1],
          n = {};
        if (((n.functionName = t), (n.fullName = t), n.functionName.includes("."))) {
          const e = n.functionName.split(".");
          (n.className = e[0]), (n.functionName = e[1]);
        } else n.isStatic = !0;
        throw new ForceMethodImplementation(n);
      };
    },
    7597: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
      class InstanceType {
        static [Symbol.hasInstance](e) {
          let t = super[Symbol.hasInstance](e);
          if (e && !e.constructor.getInstanceType) return t;
          if (e && (e.instanceTypes || (e.instanceTypes = []), t || (this.getInstanceType() === e.constructor.getInstanceType() && (t = !0)), t)) {
            const t = this.getInstanceType === InstanceType.getInstanceType ? "BaseInstanceType" : this.getInstanceType();
            -1 === e.instanceTypes.indexOf(t) && e.instanceTypes.push(t);
          }
          return !t && e && (t = e.instanceTypes && Array.isArray(e.instanceTypes) && -1 !== e.instanceTypes.indexOf(this.getInstanceType())), t;
        }
        constructor() {
          let e = new.target;
          const t = [];
          for (; e.__proto__ && e.__proto__.name; ) t.push(e.__proto__), (e = e.__proto__);
          t.reverse().forEach((e) => this instanceof e);
        }
        static getInstanceType() {
          elementorModules.ForceMethodImplementation();
        }
      }
      t.default = InstanceType;
    },
    1192: (e) => {
      "use strict";
      const Module = function () {
        const e = jQuery,
          t = arguments,
          n = this,
          s = {};
        let i;
        const ensureClosureMethods = function () {
            e.each(n, function (e) {
              const t = n[e];
              "function" == typeof t &&
                (n[e] = function () {
                  return t.apply(n, arguments);
                });
            });
          },
          initSettings = function () {
            i = n.getDefaultSettings();
            const s = t[0];
            s && e.extend(!0, i, s);
          },
          init = function () {
            n.__construct.apply(n, t), ensureClosureMethods(), initSettings(), n.trigger("init");
          };
        (this.getItems = function (e, t) {
          if (t) {
            const n = t.split("."),
              s = n.splice(0, 1);
            if (!n.length) return e[s];
            if (!e[s]) return;
            return this.getItems(e[s], n.join("."));
          }
          return e;
        }),
          (this.getSettings = function (e) {
            return this.getItems(i, e);
          }),
          (this.setSettings = function (t, s, r) {
            if ((r || (r = i), "object" == typeof t)) return e.extend(r, t), n;
            const o = t.split("."),
              l = o.splice(0, 1);
            return o.length ? (r[l] || (r[l] = {}), n.setSettings(o.join("."), s, r[l])) : ((r[l] = s), n);
          }),
          (this.getErrorMessage = function (e, t) {
            let n;
            switch (e) {
              case "forceMethodImplementation":
                n = `The method '${t}' must to be implemented in the inheritor child.`;
                break;
              default:
                n = "An error occurs";
            }
            return n;
          }),
          (this.forceMethodImplementation = function (e) {
            throw new Error(this.getErrorMessage("forceMethodImplementation", e));
          }),
          (this.on = function (t, i) {
            if ("object" == typeof t)
              return (
                e.each(t, function (e) {
                  n.on(e, this);
                }),
                n
              );
            return (
              t.split(" ").forEach(function (e) {
                s[e] || (s[e] = []), s[e].push(i);
              }),
              n
            );
          }),
          (this.off = function (e, t) {
            if (!s[e]) return n;
            if (!t) return delete s[e], n;
            const i = s[e].indexOf(t);
            return -1 !== i && (delete s[e][i], (s[e] = s[e].filter((e) => e))), n;
          }),
          (this.trigger = function (t) {
            const i = "on" + t[0].toUpperCase() + t.slice(1),
              r = Array.prototype.slice.call(arguments, 1);
            n[i] && n[i].apply(n, r);
            const o = s[t];
            return o
              ? (e.each(o, function (e, t) {
                  t.apply(n, r);
                }),
                n)
              : n;
          }),
          init();
      };
      (Module.prototype.__construct = function () {}),
        (Module.prototype.getDefaultSettings = function () {
          return {};
        }),
        (Module.prototype.getConstructorID = function () {
          return this.constructor.name;
        }),
        (Module.extend = function (e) {
          const t = jQuery,
            n = this,
            child = function () {
              return n.apply(this, arguments);
            };
          return t.extend(child, n), ((child.prototype = Object.create(t.extend({}, n.prototype, e))).constructor = child), (child.__super__ = n.prototype), child;
        }),
        (e.exports = Module);
    },
    6516: (e, t, n) => {
      "use strict";
      var s = n(7914)(n(2640));
      e.exports = s.default.extend({
        getDefaultSettings: function () {
          return { container: null, items: null, columnsCount: 3, verticalSpaceBetween: 30 };
        },
        getDefaultElements: function () {
          return { $container: jQuery(this.getSettings("container")), $items: jQuery(this.getSettings("items")) };
        },
        run: function () {
          var e = [],
            t = this.elements.$container.position().top,
            n = this.getSettings(),
            s = n.columnsCount;
          (t += parseInt(this.elements.$container.css("margin-top"), 10)),
            this.elements.$items.each(function (i) {
              var r = Math.floor(i / s),
                o = jQuery(this),
                l = o[0].getBoundingClientRect().height + n.verticalSpaceBetween;
              if (r) {
                var c = o.position(),
                  a = i % s,
                  u = c.top - t - e[a];
                (u -= parseInt(o.css("margin-top"), 10)), (u *= -1), o.css("margin-top", u + "px"), (e[a] += l);
              } else e.push(l);
            });
        },
      });
    },
    400: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
      t.default = class Scroll {
        static scrollObserver(e) {
          let t = 0;
          const n = {
            root: e.root || null,
            rootMargin: e.offset || "0px",
            threshold: ((e = 0) => {
              const t = [];
              if (e > 0 && e <= 100) {
                const n = 100 / e;
                for (let e = 0; e <= 100; e += n) t.push(e / 100);
              } else t.push(0);
              return t;
            })(e.sensitivity),
          };
          return new IntersectionObserver(function handleIntersect(n, s) {
            const i = n[0].boundingClientRect.y,
              r = n[0].isIntersecting,
              o = i < t ? "down" : "up",
              l = Math.abs(parseFloat((100 * n[0].intersectionRatio).toFixed(2)));
            e.callback({ sensitivity: e.sensitivity, isInViewport: r, scrollPercentage: l, intersectionScrollDirection: o }), (t = i);
          }, n);
        }
        static getElementViewportPercentage(e, t = {}) {
          const n = e[0].getBoundingClientRect(),
            s = t.start || 0,
            i = t.end || 0,
            r = (window.innerHeight * s) / 100,
            o = (window.innerHeight * i) / 100,
            l = n.top - window.innerHeight,
            c = 0 - l + r,
            a = n.top + r + e.height() - l + o,
            u = Math.max(0, Math.min(c / a, 1));
          return parseFloat((100 * u).toFixed(2));
        }
        static getPageScrollPercentage(e = {}, t) {
          const n = e.start || 0,
            s = e.end || 0,
            i = t || document.documentElement.scrollHeight - document.documentElement.clientHeight,
            r = (i * n) / 100,
            o = i + r + (i * s) / 100;
          return ((document.documentElement.scrollTop + document.body.scrollTop + r) / o) * 100;
        }
      };
    },
    2640: (e, t, n) => {
      "use strict";
      var s = n(7914)(n(1192));
      e.exports = s.default.extend({
        elements: null,
        getDefaultElements: function () {
          return {};
        },
        bindEvents: function () {},
        onInit: function () {
          this.initElements(), this.bindEvents();
        },
        initElements: function () {
          this.elements = this.getDefaultElements();
        },
      });
    },
    5955: (e, t, n) => {
      "use strict";
      var s = n(7914);
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
      var i = s(n(1192)),
        r = s(n(2640)),
        o = s(n(2618)),
        l = s(n(6516)),
        c = s(n(400)),
        a = s(n(869)),
        u = (window.elementorModules = { Module: i.default, ViewModule: r.default, ArgsObject: o.default, ForceMethodImplementation: a.default, utils: { Masonry: l.default, Scroll: c.default } });
      t.default = u;
    },
  },
  (e) => {
    "use strict";
    var t;
    (t = 6412), e((e.s = t));
  },
]);
