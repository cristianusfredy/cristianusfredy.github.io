function _classCallCheck(t, e) {
  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
jQuery(document).ready(function (i) {
  i(".pafe-advanced-nav-menu-styling-image").each(function () {
    var t = i(this).data("pafe-advanced-nav-menu-styling-image-toggle"),
      e = i(this).data("pafe-advanced-nav-menu-styling-image-close");
    i(this)
      .find(".elementor-menu-toggle")
      .append('<img class="pafe-advanced-nav-menu-styling-image-toggle" src="' + t + '"><img class="pafe-advanced-nav-menu-styling-image-close" src="' + e + '">');
  });
}),
  jQuery(document).ready(function (o) {
    o("[data-pafe-ajax-live-search]").each(function () {
      var t = o(this).find(".elementor-search-form"),
        e = o(this).data("pafe-ajax-live-search");
      t.append('<div class="pafe-ajax-live-search-results" data-pafe-ajax-live-search-results></div><input type="hidden" name="post_type" value="' + e + '">'), t.find(".elementor-search-form__input").attr("autocomplete", "off");
    });
    var a = null;
    o("[data-pafe-ajax-live-search] .elementor-search-form__input").keyup(function () {
      var t = o(this).closest("[data-pafe-ajax-live-search]"),
        e = t.find(".elementor-search-form__input"),
        i = t.find("[data-pafe-ajax-live-search-results]"),
        s = t.data("pafe-ajax-live-search");
      clearTimeout(a),
        (a = setTimeout(function () {
          var t = { action: "pafe_ajax_live_search", search: e.val(), post_type: s };
          o.post(o("[data-pafe-ajax-url]").data("pafe-ajax-url"), t, function (t) {
            "" != t.trim() ? (i.addClass("active"), i.html(t)) : i.removeClass("active");
          });
        }, 300));
    }),
      o(document).on("click", "[data-pafe-ajax-live-search-href]", function () {
        window.location.href = o(this).data("pafe-ajax-live-search-href");
      }),
      o(document).on("click mousedown touchstart", function (t) {
        o("[data-pafe-ajax-live-search] .elementor-search-form__input").is(t.target) ||
          o("[data-pafe-ajax-live-search] *").is(t.target) ||
          o("[data-pafe-ajax-live-search]").find("[data-pafe-ajax-live-search-results]").removeClass("active");
      });
  }),
  jQuery(document).ready(function ($) {
    function pafeCalculatedFieldsForm() {
      $(document)
        .find("[data-pafe-calculated-fields-form]")
        .each(function () {
          var $form = $(this),
            calculations = $form.data("pafe-calculated-fields-form");
          $form.find('[name^="form_fields"]').each(function () {
            if (null != $(this).attr("id")) {
              var t,
                e = $(this).attr("name").replace("form_fields[", "").replace("]", ""),
                i = $form.find('[name="form_fields[' + e + ']"]'),
                s = $form.find('[name="form_fields[' + e + ']"]').attr("type");
              if (
                (0 < i.length && (null == (t = "radio" == s || "checkbox" == s ? $form.find('[name="form_fields[' + e + ']"]:checked').val() : i.val().trim()) ? (t = 0) : ((t = parseInt(t)), isNaN(t) && (t = 0)), (window[e] = parseInt(t))),
                -1 !== e.indexOf("[]"))
              ) {
                e = e.replace("[]", "");
                i = $form.find('[name="form_fields[' + e + '][]"]');
                if (0 < i.length) {
                  fieldTypeMultiple = $form.find('[name="form_fields[' + e + '][]"]').attr("type");
                  var o = i.val(),
                    o = [];
                  "checkbox" == fieldTypeMultiple
                    ? $form.find('[name="form_fields[' + e + '][]"]:checked').each(function (t, e) {
                        o.push($(this).val());
                      })
                    : null == (o = i.val()) && (o = []);
                  for (var a = (fieldValueMultipleTotal = 0); a < o.length; a++) (t = parseInt(o[a])), isNaN(t) && (t = 0), (fieldValueMultipleTotal += t);
                  window[e] = fieldValueMultipleTotal;
                }
              }
            }
          });
          for (var i = 0; i < calculations.length; i++) {
            var $totalField = $form.find('[name="form_fields[' + calculations[i].pafe_calculated_fields_form_id + ']"]'),
              $totalFieldContent,
              totalFieldContent;
            0 < $totalField.length &&
              (($totalFieldContent = $totalField.closest(".elementor-field-group").find(".pafe-calculated-fields-form")),
              0 == $totalFieldContent.length && $totalField.after('<div class="pafe-calculated-fields-form" style="width: 100%"></div>'),
              (totalFieldContent = calculations[i].pafe_calculated_fields_form_before + eval(calculations[i].pafe_calculated_fields_form_calculation) + calculations[i].pafe_calculated_fields_form_after),
              $totalField.hide(),
              $totalField.closest(".elementor-field-group").find(".pafe-calculated-fields-form").html(totalFieldContent),
              $totalField.val(totalFieldContent));
          }
        });
    }
    pafeCalculatedFieldsForm(),
      $(document).on("keyup change", '[data-pafe-calculated-fields-form] [name^="form_fields"]', function () {
        pafeCalculatedFieldsForm();
      });
  }),
  jQuery(document).ready(function (t) {
    t(window).on("load", function () {
      t("[data-pafe-close-first-accordion]").each(function () {
        t(this).find(".elementor-tab-title").removeClass("elementor-active"), t(this).find(".elementor-tab-content").css("display", "none");
      });
    });
  }),
  jQuery(document).ready(function (b) {
    function t() {
      b(document)
        .find("[data-pafe-conditional-logic-form]")
        .each(function () {
          var u = b(this),
            m = b(this).closest(".elementor-location-popup").length,
            _ = u.data("pafe-conditional-logic-form-speed"),
            g = u.data("pafe-conditional-logic-form-easing"),
            v = u.data("pafe-conditional-logic-form");
          u.find('[name^="form_fields"]').each(function () {
            if (null != b(this).attr("id")) {
              for (var t = b(this).closest(".elementor-field-group"), e = b(this).attr("name").replace("[]", "").replace("form_fields[", "").replace("]", ""), i = 0, s = 0, o = "", a = 0; a < v.length; a++) {
                var n = v[a].pafe_conditional_logic_form_show,
                  r = v[a].pafe_conditional_logic_form_if.trim(),
                  l = v[a].pafe_conditional_logic_form_comparison_operators,
                  h = v[a].pafe_conditional_logic_form_value,
                  c = v[a].pafe_conditional_logic_form_type;
                if (("number" == c && (h = parseInt(h)), e == n && (s++, (o = v[a].pafe_conditional_logic_form_and_or_operators), "" != r))) {
                  var d = u.find('[name="form_fields[' + r + ']"]'),
                    n = u.find('[name="form_fields[' + r + ']"]').attr("type");
                  0 < d.length &&
                    (null != (n = "radio" == n || "checkbox" == n ? u.find('[name="form_fields[' + r + ']"]:checked').val() : d.val().trim()) && -1 !== n.indexOf(";") && (n = (n = n.split(";"))[0]),
                    "number" == c && (null == n ? (n = 0) : ((n = parseInt(n)), isNaN(n) && (n = 0))),
                    "not-empty" == l && (("" != n && 0 != n) || (i += 1)),
                    "empty" == l && (("" == n && 0 == n) || (i += 1)),
                    "=" == l && n != h && (i += 1),
                    "!=" == l && n == h && (i += 1),
                    ">" == l && n <= h && (i += 1),
                    ">=" == l && n < h && (i += 1),
                    "<" == l && h <= n && (i += 1),
                    "<=" == l && h < n && (i += 1),
                    "checked" == l && (d.prop("checked") || (i += 1)),
                    "unchecked" == l && d.prop("checked") && (i += 1));
                  d = u.find('[name="form_fields[' + r + '][]"]');
                  if (0 < d.length) {
                    fieldIfTypeMultiple = u.find('[name="form_fields[' + r + '][]"]').attr("type");
                    var p = d.val(),
                      p = [];
                    if (
                      ("checkbox" == fieldIfTypeMultiple
                        ? u.find('[name="form_fields[' + r + '][]"]:checked').each(function () {
                            p[a++] = b(this).val();
                          })
                        : null == (p = d.val()) && (p = []),
                      "not-empty" == l && 0 == p.length && (i += 1),
                      "empty" == l && 0 < p.length && (i += 1),
                      ("=" != l && "!=" != l && ">" != l && ">=" != l && "<" != l && "<=" != l) || (0 == p.length && (i += 1)),
                      "=" == l)
                    )
                      for (var f = 0; f < p.length; f++) p[f] != h && (i += 1);
                    if ("!=" == l) for (f = 0; f < p.length; f++) p[f] == h && (i += 1);
                    if (">" == l) for (f = 0; f < p.length; f++) p[f] <= h && (i += 1);
                    if (">=" == l) for (f = 0; f < p.length; f++) p[f] < h && (i += 1);
                    if ("<" == l) for (f = 0; f < p.length; f++) p[f] >= h && (i += 1);
                    if ("<=" == l) for (f = 0; f < p.length; f++) p[f] > h && (i += 1);
                  }
                }
              }
              "or" == o && (i < s ? (0 < m ? t.show() : t.slideDown(_, g)) : 0 < m ? t.hide() : t.slideUp(_, g)), "and" == o && (0 == i ? (0 < m ? t.show() : t.slideDown(_, g)) : 0 < m ? t.hide() : t.slideUp(_, g));
            }
          });
          for (var t = u.find(".elementor-field-type-submit"), e = 0, i = 0, s = "", o = 0; o < v.length; o++) {
            var a = v[o].pafe_conditional_logic_form_show,
              n = v[o].pafe_conditional_logic_form_if.trim(),
              r = v[o].pafe_conditional_logic_form_comparison_operators,
              l = v[o].pafe_conditional_logic_form_value,
              h = v[o].pafe_conditional_logic_form_type;
            if (("number" == h && (l = parseInt(l)), "submit" == a && (i++, (s = v[o].pafe_conditional_logic_form_and_or_operators), "" != n))) {
              var c = u.find('[name="form_fields[' + n + ']"]'),
                a = u.find('[name="form_fields[' + n + ']"]').attr("type");
              0 < c.length &&
                (null != (a = "radio" == a ? u.find('[name="form_fields[' + n + ']"]:checked').val() : c.val().trim()) && -1 !== a.indexOf(";") && (a = (a = a.split(";"))[0]),
                "number" == h && (null == a ? (a = 0) : ((a = parseInt(a)), isNaN(a) && (a = 0))),
                "not-empty" == r && (("" != a && 0 != a) || (e += 1)),
                "empty" == r && (("" == a && 0 == a) || (e += 1)),
                "=" == r && a != l && (e += 1),
                "!=" == r && a == l && (e += 1),
                ">" == r && a <= l && (e += 1),
                ">=" == r && a < l && (e += 1),
                "<" == r && l <= a && (e += 1),
                "<=" == r && l < a && (e += 1),
                "checked" == r && (c.prop("checked") || (e += 1)),
                "unchecked" == r && c.prop("checked") && (e += 1));
              c = u.find('[name="form_fields[' + n + '][]"]');
              if (0 < c.length) {
                fieldIfTypeMultiple = u.find('[name="form_fields[' + n + '][]"]').attr("type");
                var d = c.val(),
                  d = [];
                if (
                  ("checkbox" == fieldIfTypeMultiple
                    ? u.find('[name="form_fields[' + n + '][]"]:checked').each(function () {
                        d[o++] = b(this).val();
                      })
                    : null == (d = c.val()) && (d = []),
                  "not-empty" == r && 0 == d.length && (e += 1),
                  "empty" == r && 0 < d.length && (e += 1),
                  ("=" != r && "!=" != r && ">" != r && ">=" != r && "<" != r && "<=" != r) || (0 == d.length && (e += 1)),
                  "=" == r)
                )
                  for (var p = 0; p < d.length; p++) d[p] != l && (e += 1);
                if ("!=" == r) for (p = 0; p < d.length; p++) d[p] == l && (e += 1);
                if (">" == r) for (p = 0; p < d.length; p++) d[p] <= l && (e += 1);
                if (">=" == r) for (p = 0; p < d.length; p++) d[p] < l && (e += 1);
                if ("<" == r) for (p = 0; p < d.length; p++) d[p] >= l && (e += 1);
                if ("<=" == r) for (p = 0; p < d.length; p++) d[p] > l && (e += 1);
              }
            }
          }
          "or" == s && (e < i ? t.slideDown(_, g) : t.slideUp(_, g)), "and" == s && (0 == error ? t.slideDown(_, g) : t.slideUp(_, g));
        });
    }
    t(),
      b(document).on("keyup change", '[data-pafe-conditional-logic-form] [name^="form_fields"]', function () {
        t();
      });
  }),
  jQuery(document).ready(function (a) {
    function n(t, e) {
      var i = t.find(".pafe-crossfade-multiple-background-images__item.active"),
        s = 0 < i.next().length ? i.next() : t.find(".pafe-crossfade-multiple-background-images__item:first");
      s.css("z-index", "2"),
        i.fadeOut(e, function () {
          i.css("z-index", "1").show().removeClass("active"), s.css("z-index", "3").addClass("active");
        });
    }
    a("[data-pafe-crossfade-multiple-background-images]").each(function () {
      for (
        var t = a(this).data("pafe-crossfade-multiple-background-images").split(","), e = a(this).data("pafe-crossfade-multiple-background-images-speed"), i = a(this).data("pafe-crossfade-multiple-background-images-speed-fadeout"), s = 0;
        s < t.length;
        s++
      ) {
        var o = 0 == s ? " active" : "";
        a(this).append('<div class="pafe-crossfade-multiple-background-images__item' + o + '" style="background-image:url(' + t[s] + ');"></div>');
      }
      1 < t.length && setInterval(n, e, a(this), i);
    });
  }),
  jQuery(document).ready(function (e) {
    e("[data-pafe-custom-media-query-breakpoints]").each(function () {
      var t = e(this).data("pafe-custom-media-query-breakpoints");
      e(this).append("<style>" + t + "</style>");
    }),
      e(".elementor-column[data-pafe-custom-media-query-breakpoints]").closest(".elementor-row").css({ "flex-wrap": "wrap" });
  }),
  jQuery(document).ready(function (s) {
    s(window).on("load resize", function () {
      var t, e, i;
      (t = s("[data-pafe-break-point-md]").data("pafe-break-point-md")),
        (e = s("[data-pafe-break-point-lg]").data("pafe-break-point-lg")),
        (i = window.innerWidth),
        s("[data-pafe-equal-height-for-cta] .elementor-cta__title").height("auto"),
        s("[data-pafe-equal-height-for-cta] .elementor-cta__description").height("auto"),
        e <= i &&
          s(".pafe-equal-height-for-cta-desktop").each(function () {
            var t = s('[data-pafe-equal-height-for-cta="' + s(this).data("pafe-equal-height-for-cta") + '"] .elementor-cta__title'),
              e = Math.max.apply(
                null,
                t
                  .map(function () {
                    return s(this).height();
                  })
                  .get()
              );
            t.height(e + "px");
            (t = s('[data-pafe-equal-height-for-cta="' + s(this).data("pafe-equal-height-for-cta") + '"] .elementor-cta__description')),
              (e = Math.max.apply(
                null,
                t
                  .map(function () {
                    return s(this).height();
                  })
                  .get()
              ));
            t.height(e + "px");
          }),
        t <= i &&
          i < e &&
          s(".pafe-equal-height-for-cta-tablet").each(function () {
            var t = s('[data-pafe-equal-height-for-cta="' + s(this).data("pafe-equal-height-for-cta") + '"] .elementor-cta__title'),
              e = Math.max.apply(
                null,
                t
                  .map(function () {
                    return s(this).height();
                  })
                  .get()
              );
            t.height(e + "px");
            (t = s('[data-pafe-equal-height-for-cta="' + s(this).data("pafe-equal-height-for-cta") + '"] .elementor-cta__description')),
              (e = Math.max.apply(
                null,
                t
                  .map(function () {
                    return s(this).height();
                  })
                  .get()
              ));
            t.height(e + "px");
          }),
        i < t &&
          s(".pafe-equal-height-for-cta-mobile").each(function () {
            var t = s('[data-pafe-equal-height-for-cta="' + s(this).data("pafe-equal-height-for-cta") + '"] .elementor-cta__title'),
              e = Math.max.apply(
                null,
                t
                  .map(function () {
                    return s(this).height();
                  })
                  .get()
              );
            t.height(e + "px");
            (t = s('[data-pafe-equal-height-for-cta="' + s(this).data("pafe-equal-height-for-cta") + '"] .elementor-cta__description')),
              (e = Math.max.apply(
                null,
                t
                  .map(function () {
                    return s(this).height();
                  })
                  .get()
              ));
            t.height(e + "px");
          });
    });
  }),
  jQuery(document).ready(function (c) {
    function t() {
      c("[data-pafe-equal-height-for-woocommerce-products]").each(function () {
        var t = c(this).find("ul.products"),
          e = t.find(".product"),
          i = (t.css("grid-template-columns").match(/px/g) || []).length;
        if ((e.find(".woocommerce-loop-product__title").height("auto"), 0 < e.length && 0 < i))
          for (var s = Math.ceil(e.length / i), o = 0; o < s; o++) {
            for (var a = [], n = [], r = o * i; r < (o + 1) * i; r++) a.push(e.eq(r).find(".woocommerce-loop-product__title").height()), n.push(e.eq(r).find(".attachment-woocommerce_thumbnail").height());
            for (var l = Math.max.apply(Math, a), h = Math.max.apply(Math, n), r = o * i; r < (o + 1) * i; r++)
              e
                .eq(r)
                .find(".woocommerce-loop-product__title")
                .height(l + "px"),
                e
                  .eq(r)
                  .find(".attachment-woocommerce_thumbnail")
                  .height(h + "px");
          }
      });
    }
    t(),
      c(window).on("resize", function () {
        t();
      });
  }),
  jQuery(document).ready(function (s) {
    s(window).on("load resize", function () {
      var t, e, i;
      (t = s("[data-pafe-break-point-md]").data("pafe-break-point-md")),
        (e = s("[data-pafe-break-point-lg]").data("pafe-break-point-lg")),
        (i = window.innerWidth),
        s("[data-pafe-equal-height]").height("auto"),
        e <= i &&
          s(".pafe-equal-height-desktop").each(function () {
            var t = s('[data-pafe-equal-height="' + s(this).data("pafe-equal-height") + '"]'),
              e = Math.max.apply(
                null,
                t
                  .map(function () {
                    return s(this).height();
                  })
                  .get()
              );
            t.height(e + "px"), "yes" == s(this).data("pafe-equal-height-widget-container") && t.find(".elementor-widget-container").outerHeight(e + "px");
          }),
        t <= i &&
          i < e &&
          s(".pafe-equal-height-tablet").each(function () {
            var t = s('[data-pafe-equal-height="' + s(this).data("pafe-equal-height") + '"]'),
              e = Math.max.apply(
                null,
                t
                  .map(function () {
                    return s(this).height();
                  })
                  .get()
              );
            t.height(e + "px"), "yes" == s(this).data("pafe-equal-height-widget-container") && t.find(".elementor-widget-container").outerHeight(e + "px");
          }),
        i < t &&
          s(".pafe-equal-height-mobile").each(function () {
            var t = s('[data-pafe-equal-height="' + s(this).data("pafe-equal-height") + '"]'),
              e = Math.max.apply(
                null,
                t
                  .map(function () {
                    return s(this).height();
                  })
                  .get()
              );
            t.height(e + "px"), "yes" == s(this).data("pafe-equal-height-widget-container") && t.find(".elementor-widget-container").outerHeight(e + "px");
          });
    });
  }),
  jQuery(document).ready(function (e) {
    e("[data-pafe-font-awesome-5]").each(function () {
      var t = e(this).data("pafe-font-awesome-5");
      e(this).find(".elementor-icon i").attr("class", t), e(this).addClass("active");
    });
  }),
  jQuery(document).ready(function (n) {
    function r() {
      (this.length = 8), (this.timestamp = +new Date());
      this.generate = function () {
        for (var t, e, i = this.timestamp.toString().split("").reverse(), s = "", o = 0; o < this.length; ++o) s += i[((t = 0), (e = i.length - 1), Math.floor(Math.random() * (e - t + 1)) + t)];
        return s;
      };
    }
    n(document).on("keyup change", '[data-pafe-form-abandonment].elementor-widget-form [name^="form_fields"]', function () {
      var t,
        e = n(this).closest(".elementor-form"),
        i = e.attr("name"),
        s = n(this).val(),
        o = n(this).attr("name").replace("form_fields[", "").replace("]", "").replace("[]", ""),
        a = "pafe-form-abandonment-" + i;
      "checkbox" == n(this).attr("type") &&
        (n(this).attr("name").includes("[]")
          ? ((s = []),
            e.find('[name="form_fields[' + o + '][]"]').each(function () {
              n(this).is(":checked") && s.push(n(this).val());
            }))
          : n(this).is(":checked") || (s = "")),
        localStorage[a] ? ((t = JSON.parse(localStorage.getItem(a)))[o] = s) : ((t = { userId: new r().generate(), form_id: i })[o] = s),
        localStorage.setItem(a, JSON.stringify(t));
    }),
      n(document).on("keyup change", "[data-pafe-form-builder-form-id]", function () {
        var t,
          e,
          i,
          s,
          o = n(this).attr("data-pafe-form-builder-form-id");
        0 < n('[data-pafe-form-abandonment] [data-pafe-form-builder-submit-form-id="' + o + '"]').length &&
          ((i = n(this).val()),
          (t = n(this).attr("name").replace("form_fields[", "").replace("]", "").replace("[]", "")),
          (e = "pafe-form-abandonment-" + o),
          "checkbox" == n(this).attr("type") &&
            (n(this).attr("name").includes("[]")
              ? ((i = []),
                n(this)
                  .closest("form")
                  .find('[name="form_fields[' + t + '][]"]')
                  .each(function () {
                    n(this).is(":checked") && i.push(n(this).val());
                  }))
              : n(this).is(":checked") || (i = "")),
          localStorage[e] ? ((s = JSON.parse(localStorage.getItem(e)))[t] = i) : ((s = { userId: new r().generate(), form_id: o })[t] = i),
          localStorage.setItem(e, JSON.stringify(s)));
      }),
      n("[data-pafe-form-abandonment].elementor-widget-form .elementor-form").each(function () {
        var i,
          t = "pafe-form-abandonment-" + n(this).attr("name"),
          e = n(this).find('[name^="form_fields"]');
        localStorage[t] &&
          ((i = JSON.parse(localStorage.getItem(t))),
          e.each(function () {
            var t = n(this).attr("type"),
              e = n(this).attr("name").replace("form_fields[", "").replace("]", "").replace("[]", "");
            "radio" == t
              ? void 0 !== i[e] && n(this).attr("value") == i[e] && n(this).prop("checked", !0)
              : "checkbox" == t
              ? void 0 !== i[e] && (n(this).attr("name").includes("[]") ? i[e].includes(n(this).attr("value")) && n(this).prop("checked", !0) : n(this).attr("value") == i[e] && n(this).prop("checked", !0))
              : void 0 !== i[e] && n(this).val(i[e]);
          }));
      }),
      n("[data-pafe-form-abandonment] [data-pafe-form-builder-submit-form-id]").each(function () {
        var i,
          t = "pafe-form-abandonment-" + n(this).attr("data-pafe-form-builder-submit-form-id"),
          e = n('[data-pafe-form-builder-form-id][name^="form_fields"]');
        localStorage[t] &&
          ((i = JSON.parse(localStorage.getItem(t))),
          e.each(function () {
            var t = n(this).attr("type"),
              e = n(this).attr("name").replace("form_fields[", "").replace("]", "").replace("[]", "");
            "radio" == t
              ? void 0 !== i[e] && n(this).attr("value") == i[e] && n(this).prop("checked", !0)
              : "checkbox" == t
              ? void 0 !== i[e] && (n(this).attr("name").includes("[]") ? i[e].includes(n(this).attr("value")) && n(this).prop("checked", !0) : n(this).attr("value") == i[e] && n(this).prop("checked", !0))
              : void 0 !== i[e] && n(this).val(i[e]);
          }));
      }),
      n(document).on("submit_success", function (t, e) {
        var i,
          s = "pafe-form-abandonment-" + t.target.name;
        localStorage[s] &&
          ((i = JSON.parse(localStorage.getItem(s))),
          (t = new FormData()).append("action", "pafe_form_abandonment"),
          t.append("fields", JSON.stringify(i)),
          t.append("form_type", "Elementor Form"),
          t.append("function", "success"),
          navigator.sendBeacon(n("[data-pafe-ajax-url]").data("pafe-ajax-url"), t),
          localStorage.removeItem(s));
      }),
      n(document).on("click", "[data-pafe-form-builder-trigger-success]", function () {
        var t,
          e,
          i = "pafe-form-abandonment-" + n(this).attr("data-pafe-form-builder-trigger-success");
        localStorage[i] &&
          ((t = JSON.parse(localStorage.getItem(i))),
          (e = new FormData()).append("action", "pafe_form_abandonment"),
          e.append("fields", JSON.stringify(t)),
          e.append("form_type", "PAFE Form"),
          e.append("function", "success"),
          navigator.sendBeacon(n("[data-pafe-ajax-url]").data("pafe-ajax-url"), e),
          localStorage.removeItem(i));
      }),
      n(window).on("blur beforeunload", function () {
        n("[data-pafe-form-abandonment].elementor-widget-form .elementor-form").each(function () {
          var t,
            e = "pafe-form-abandonment-" + n(this).attr("name");
          localStorage[e] &&
            ((t = JSON.parse(localStorage.getItem(e))),
            (e = new FormData()).append("action", "pafe_form_abandonment"),
            e.append("fields", JSON.stringify(t)),
            e.append("form_type", "Elementor Form"),
            e.append("function", "abandonment"),
            navigator.sendBeacon(n("[data-pafe-ajax-url]").data("pafe-ajax-url"), e));
        }),
          n("[data-pafe-form-abandonment] [data-pafe-form-builder-submit-form-id]").each(function () {
            var t,
              e = "pafe-form-abandonment-" + n(this).attr("data-pafe-form-builder-submit-form-id");
            localStorage[e] &&
              ((t = JSON.parse(localStorage.getItem(e))),
              (e = new FormData()).append("action", "pafe_form_abandonment"),
              e.append("fields", JSON.stringify(t)),
              e.append("form_type", "PAFE Form"),
              e.append("function", "abandonment"),
              navigator.sendBeacon(n("[data-pafe-ajax-url]").data("pafe-ajax-url"), e));
          });
      });
  }),
  jQuery(document).ready(function (_) {
    function g(t) {
      var e = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
        i = t.slice(0, 1).toUpperCase(),
        t = t.slice(1, 2).toUpperCase();
      return "" == t ? e.indexOf(i) : 26 * (e.indexOf(i) + 1) + e.indexOf(t);
    }
    _(document).on("submit", "[data-pafe-form-google-sheets-connector] form", function () {
      var t = _(this).closest("[data-pafe-form-google-sheets-connector]"),
        a = [];
      _(this)
        .find('[name^="form_fields"]')
        .each(function () {
          var t,
            e = _(this).attr("type"),
            i = _(this).attr("name");
          if (-1 !== i.indexOf("[]")) {
            var s = [];
            "checkbox" == e
              ? _(document)
                  .find('[name="' + i + '"]:checked')
                  .each(function () {
                    s.push(_(this).val());
                  })
              : null == (s = _(this).val()) && (s = []),
              (t = "");
            for (var o = 0; o < s.length; o++) (t += s[o]), o != s.length - 1 && (t += ",");
          } else
            t =
              "radio" == e || "checkbox" == e
                ? _(document)
                    .find('[name="' + i + '"]:checked')
                    .val()
                : _(this).val().trim();
          null != t && (((e = {}).name = i.replace("[]", "").replace("form_fields[", "").replace("]", "")), (e.value = t), a.push(e));
        });
      for (var e = "", i = t.data("pafe-form-google-sheets-connector-field-list"), s = [], o = 0; o < i.length; o++) s.push(g(i[o].pafe_form_google_sheets_connector_field_column));
      for (var n = 0; n < Math.max.apply(null, s) + 1; n++) {
        for (var r = "", o = 0; o < i.length; o++) {
          var l = i[o].pafe_form_google_sheets_connector_field_id;
          if (n == g(i[o].pafe_form_google_sheets_connector_field_column)) for (var h = 0; h < a.length; ++h) a[h].name == l && (r = a[h].value);
        }
        e += '"' + r + '",';
      }
      e = e.slice(0, -1);
      var c = t.data("pafe-form-google-sheets-connector"),
        d = t.data("pafe-form-google-sheets-connector-clid"),
        p = t.data("pafe-form-google-sheets-connector-clis"),
        t = t.data("pafe-form-google-sheets-connector-rtok"),
        f =
          "https://sheets.googleapis.com/v4/spreadsheets/" +
          c +
          "/values/A1:append?includeValuesInResponse=false&insertDataOption=INSERT_ROWS&responseDateTimeRenderOption=SERIAL_NUMBER&responseValueRenderOption=FORMATTED_VALUE&valueInputOption=USER_ENTERED",
        u = '{"majorDimension":"ROWS", "values":[[' + e + "]]}",
        m = new XMLHttpRequest();
      m.open("POST.html", "https://www.googleapis.com/oauth2/v4/token?client_id=" + d + "&client_secret=" + p + "&refresh_token=" + t + "&grant_type=refresh_token"),
        m.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
        (m.onload = function () {
          var t,
            e = JSON.parse(m.responseText).access_token;
          e && ((t = new XMLHttpRequest()).open("POST.html", f), t.setRequestHeader("Content-length", u.length), t.setRequestHeader("Content-type", "application/json"), t.setRequestHeader("Authorization", "OAuth " + e), t.send(u));
        }),
        m.send();
    });
  });
var _createClass = (function () {
  function s(t, e) {
    for (var i = 0; i < e.length; i++) {
      var s = e[i];
      (s.enumerable = s.enumerable || !1), (s.configurable = !0), "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s);
    }
  }
  return function (t, e, i) {
    return e && s(t.prototype, e), i && s(t, i), t;
  };
})();
(function () {
  var i,
    p,
    a,
    s,
    n = [].indexOf;
  function o(t, e) {
    var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
    _classCallCheck(this, o), (this.clicked = this.clicked.bind(this)), (this.picker = e), (this.opts = i), (this.option = jQuery(t)), this.create_node();
  }
  function r(t) {
    var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
    _classCallCheck(this, r),
      (this.sync_picker_with_select = this.sync_picker_with_select.bind(this)),
      (this.opts = e),
      (this.select = jQuery(t)),
      (this.multiple = "multiple" === this.select.attr("multiple")),
      null != this.select.data("limit") && (this.opts.limit = parseInt(this.select.data("limit"))),
      this.build_and_append_picker();
  }
  jQuery.fn.extend({
    imagepicker: function () {
      var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
      return this.each(function () {
        var t;
        if (((t = jQuery(this)).data("picker") && t.data("picker").destroy(), t.data("picker", new i(this, s(e))), null != e.initialized)) return e.initialized.call(t.data("picker"));
      });
    },
  }),
    (s = function (t) {
      var e = { hide_select: !0, show_label: !1, initialized: void 0, changed: void 0, clicked: void 0, selected: void 0, limit: void 0, limit_reached: void 0, font_awesome: !1 };
      return jQuery.extend(e, t);
    }),
    (a = function (t, e) {
      var i, s, o, a;
      if (!t || !e || t.length !== e.length) return !1;
      for (t = t.slice(0), e = e.slice(0), t.sort(), e.sort(), i = s = 0, o = t.length; s < o; i = ++s) if (((a = t[i]), e[i] !== a)) return !1;
      return !0;
    }),
    _createClass(r, [
      {
        key: "destroy",
        value: function () {
          for (var t, e = 0, i = (t = this.picker_options).length; e < i; e++) t[e].destroy();
          return this.picker.remove(), this.select.off("change", this.sync_picker_with_select), this.select.removeData("picker"), this.select.show();
        },
      },
      {
        key: "build_and_append_picker",
        value: function () {
          return (
            this.opts.hide_select && this.select.hide(),
            this.select.on("change", this.sync_picker_with_select),
            null != this.picker && this.picker.remove(),
            this.create_picker(),
            this.select.after(this.picker),
            this.sync_picker_with_select()
          );
        },
      },
      {
        key: "sync_picker_with_select",
        value: function () {
          for (var t, e, i = [], s = 0, o = (e = this.picker_options).length; s < o; s++) (t = e[s]).is_selected() ? i.push(t.mark_as_selected()) : i.push(t.unmark_as_selected());
          return i;
        },
      },
      {
        key: "create_picker",
        value: function () {
          return (this.picker = jQuery("<ul class='thumbnails image_picker_selector'></ul>")), (this.picker_options = []), this.recursively_parse_option_groups(this.select, this.picker), this.picker;
        },
      },
      {
        key: "recursively_parse_option_groups",
        value: function (o, t) {
          for (var e, i, s, a, n, r, l, h, c = 0, d = (r = o.children("optgroup")).length; c < d; c++)
            (n = r[c]), (n = jQuery(n)), (e = jQuery("<ul></ul>")).append(jQuery("<li class='group_title'>" + n.attr("label") + "</li>")), t.append(jQuery("<li class='group'>").append(e)), this.recursively_parse_option_groups(n, e);
          for (
            h = [],
              i = 0,
              s = (l = function () {
                for (var t, e = [], i = 0, s = (t = o.children("option")).length; i < s; i++) (a = t[i]), e.push(new p(a, this, this.opts));
                return e;
              }.call(this)).length;
            i < s;
            i++
          )
            (a = l[i]), this.picker_options.push(a), a.has_image() && h.push(t.append(a.node));
          return h;
        },
      },
      {
        key: "has_implicit_blanks",
        value: function () {
          var o;
          return (
            0 <
            function () {
              for (var t, e = [], i = 0, s = (t = this.picker_options).length; i < s; i++) (o = t[i]).is_blank() && !o.has_image() && e.push(o);
              return e;
            }.call(this).length
          );
        },
      },
      {
        key: "selected_values",
        value: function () {
          return this.multiple ? this.select.val() || [] : [this.select.val()];
        },
      },
      {
        key: "toggle",
        value: function (t, e) {
          var i,
            s = this.selected_values(),
            o = t.value().toString();
          if (
            (this.multiple
              ? 0 <= n.call(this.selected_values(), o)
                ? ((i = this.selected_values()).splice(jQuery.inArray(o, s), 1), this.select.val([]), this.select.val(i))
                : null != this.opts.limit && this.selected_values().length >= this.opts.limit
                ? null != this.opts.limit_reached && this.opts.limit_reached.call(this.select)
                : this.select.val(this.selected_values().concat(o))
              : this.has_implicit_blanks() && t.is_selected()
              ? this.select.val("")
              : this.select.val(o),
            !a(s, this.selected_values()) && (this.select.change(), null != this.opts.changed))
          )
            return this.opts.changed.call(this.select, s, this.selected_values(), e);
        },
      },
    ]),
    (i = r),
    _createClass(o, [
      {
        key: "destroy",
        value: function () {
          return this.node.find(".thumbnail").off("click", this.clicked);
        },
      },
      {
        key: "has_image",
        value: function () {
          return null != this.option.data("img-src");
        },
      },
      {
        key: "is_blank",
        value: function () {
          return !(null != this.value() && "" !== this.value());
        },
      },
      {
        key: "is_selected",
        value: function () {
          var t = this.picker.select.val();
          return this.picker.multiple ? 0 <= jQuery.inArray(this.value(), t) : this.value() === t;
        },
      },
      {
        key: "mark_as_selected",
        value: function () {
          return this.node.find(".thumbnail").addClass("selected");
        },
      },
      {
        key: "unmark_as_selected",
        value: function () {
          return this.node.find(".thumbnail").removeClass("selected");
        },
      },
      {
        key: "value",
        value: function () {
          return this.option.val();
        },
      },
      {
        key: "label",
        value: function () {
          return this.option.data("img-label") ? this.option.data("img-label") : this.option.text();
        },
      },
      {
        key: "clicked",
        value: function (t) {
          if ((this.picker.toggle(this, t), null != this.opts.clicked && this.opts.clicked.call(this.picker.select, this, t), null != this.opts.selected && this.is_selected())) return this.opts.selected.call(this.picker.select, this, t);
        },
      },
      {
        key: "create_node",
        value: function () {
          var t, e, i;
          return (
            (this.node = jQuery("<li/>")),
            this.option.data("font_awesome") ? (t = jQuery("<i>")).attr("class", "fa-fw " + this.option.data("img-src")) : (t = jQuery("<img class='image_picker_image'/>")).attr("src", this.option.data("img-src")),
            (i = jQuery("<div class='thumbnail'>")),
            (e = this.option.data("img-class")) && (this.node.addClass(e), t.addClass(e), i.addClass(e)),
            (e = this.option.data("img-alt")) && t.attr("alt", e),
            i.on("click", this.clicked),
            i.append(t),
            this.opts.show_label && i.append(jQuery("<p/>").html(this.label())),
            this.node.append(i),
            this.node
          );
        },
      },
    ]),
    (p = o);
}).call(void 0),
  jQuery(document).ready(function (n) {
    n("[data-pafe-image-select-field]").each(function () {
      if ("popup" != n(this).closest("[data-elementor-type]").attr("data-elementor-type"))
        for (var t = n(this), e = t.data("pafe-image-select-field"), i = 0; i < e.length; i++) {
          var s,
            o = e[i].pafe_image_select_field_id,
            a = t.find('[name="form_fields[' + o + ']"]');
          0 == a.length && (a = t.find('[name="form_fields[' + o + '][]"]')),
            0 < a.length &&
              ((s = e[i].pafe_image_select_field_gallery),
              (o = a.find("option")),
              a.closest(".elementor-field").addClass("pafe-image-select-field"),
              o.each(function (t, e) {
                (t = s[t].url), n(this).html();
                n(this).attr("data-img-src", t), a.imagepicker({ show_label: !0 });
              }));
        }
    }),
      jQuery(document).on("elementor/popup/show", function () {
        jQuery("[data-pafe-image-select-field]").each(function () {
          if ("popup" == n(this).closest("[data-elementor-type]").attr("data-elementor-type"))
            for (var t = jQuery(this), e = t.data("pafe-image-select-field"), i = 0; i < e.length; i++) {
              var s,
                o = e[i].pafe_image_select_field_id,
                a = t.find('[name="form_fields[' + o + ']"]');
              0 == a.length && (a = t.find('[name="form_fields[' + o + '][]"]')),
                0 < a.length &&
                  ((s = e[i].pafe_image_select_field_gallery),
                  (o = a.find("option")),
                  a.closest(".elementor-field").addClass("pafe-image-select-field"),
                  o.each(function (t, e) {
                    (t = s[t].url), jQuery(this).html();
                    jQuery(this).attr("data-img-src", t), a.imagepicker({ show_label: !0 });
                  }));
            }
        });
      });
  }),
  jQuery(document).ready(function (s) {
    s("[data-pafe-navigation-arrows-icon]").each(function () {
      var t = s(this).data("pafe-navigation-arrows-icon-previous"),
        e = s(this).data("pafe-navigation-arrows-icon-next"),
        i = s(this).find(".elementor-slick-slider");
      0 == i.length && (i = s(this).find(".elementor-main-swiper")),
        0 == i.length && (i = s(this).find(".elementor-image-carousel-wrapper")),
        i.append('<div class="pafe-navigation-arrows-icon-arrows pafe-navigation-arrows-icon-arrows--previous"><i class="' + t + '"></div>'),
        i.append('<div class="pafe-navigation-arrows-icon-arrows pafe-navigation-arrows-icon-arrows--next"><i class="' + e + '"></div>');
    }),
      s("[data-pafe-navigation-arrows-icon-image]").each(function () {
        var t = s(this).data("pafe-navigation-arrows-icon-previous"),
          e = s(this).data("pafe-navigation-arrows-icon-next"),
          i = s(this).find(".elementor-slick-slider");
        0 == i.length && (i = s(this).find(".elementor-main-swiper")),
          0 == i.length && (i = s(this).find(".elementor-image-carousel-wrapper")),
          i.append('<div class="pafe-navigation-arrows-icon-arrows pafe-navigation-arrows-icon-arrows--previous"><img src="' + t + '"></div>'),
          i.append('<div class="pafe-navigation-arrows-icon-arrows pafe-navigation-arrows-icon-arrows--next"><img src="' + e + '"></div>');
      }),
      s(document).on("click", ".pafe-navigation-arrows-icon-arrows--previous", function () {
        null != s(this).closest(".swiper-container")[0] ? s(this).closest(".swiper-container")[0].swiper.slidePrev() : s(this).parent().find(".slick-slider").slick("slickPrev");
      }),
      s(document).on("click", ".pafe-navigation-arrows-icon-arrows--next", function () {
        null != s(this).closest(".swiper-container")[0] ? s(this).closest(".swiper-container")[0].swiper.slideNext() : s(this).parent().find(".slick-slider").slick("slickNext");
      });
  }),
  (function (a) {
    a.fn.parallaxie = function (o) {
      o = a.extend({ speed: 0.2, repeat: "no-repeat", size: "cover", pos_x: "center", offset: 0 }, o);
      return (
        this.each(function () {
          var e = a(this),
            i = e.data("parallaxie");
          "object" != typeof i && (i = {}), (i = a.extend({}, o, i));
          var t,
            s = e.data("image");
          void 0 === s &&
            (s = e.css("background-image")) &&
            ((t = i.offset + (e.offset().top - a(window).scrollTop()) * (1 - i.speed)),
            e.css({ "background-image": s, "background-size": i.size, "background-repeat": i.repeat, "background-attachment": "fixed", "background-position": i.pos_x + " " + t + "px" }),
            a(window).scroll(function () {
              var t = i.offset + (e.offset().top - a(window).scrollTop()) * (1 - i.speed);
              e.data("pos_y", t), e.css("background-position", i.pos_x + " " + t + "px");
            }));
        }),
        this
      );
    };
  })(jQuery),
  (function (o, a, n, s) {
    function r(t, e) {
      var i = this;
      "object" == typeof e && (delete e.refresh, delete e.render, o.extend(this, e)), (this.$element = o(t)), !this.imageSrc && this.$element.is("img") && (this.imageSrc = this.$element.attr("src"));
      e = (this.position + "").toLowerCase().match(/\S+/g) || [];
      if (
        (e.length < 1 && e.push("center"),
        1 == e.length && e.push(e[0]),
        ("top" != e[0] && "bottom" != e[0] && "left" != e[1] && "right" != e[1]) || (e = [e[1], e[0]]),
        this.positionX != s && (e[0] = this.positionX.toLowerCase()),
        this.positionY != s && (e[1] = this.positionY.toLowerCase()),
        (i.positionX = e[0]),
        (i.positionY = e[1]),
        "left" != this.positionX && "right" != this.positionX && (this.positionX = isNaN(parseInt(this.positionX)) ? "center" : parseInt(this.positionX)),
        "top" != this.positionY && "bottom" != this.positionY && (this.positionY = isNaN(parseInt(this.positionY)) ? "center" : parseInt(this.positionY)),
        (this.position = this.positionX + (isNaN(this.positionX) ? "" : "px") + " " + this.positionY + (isNaN(this.positionY) ? "" : "px")),
        navigator.userAgent.match(/(iPod|iPhone|iPad)/))
      )
        return this.imageSrc && this.iosFix && !this.$element.is("img") && this.$element.css({ backgroundImage: "url(" + this.imageSrc + ")", backgroundSize: "cover", backgroundPosition: this.position }), this;
      if (navigator.userAgent.match(/(Android)/))
        return this.imageSrc && this.androidFix && !this.$element.is("img") && this.$element.css({ backgroundImage: "url(" + this.imageSrc + ")", backgroundSize: "cover", backgroundPosition: this.position }), this;
      this.$mirror = o("<div />").prependTo("body");
      (t = this.$element.find(">.pafeParallax-slider")), (e = !1);
      0 == t.length ? (this.$slider = o("<img />").prependTo(this.$mirror)) : ((this.$slider = t.prependTo(this.$mirror)), (e = !0)),
        this.$mirror.addClass("parallax-mirror").css({ visibility: "hidden", zIndex: this.zIndex, position: "fixed", top: 0, left: 0, overflow: "hidden" }),
        this.$slider.addClass("parallax-slider").one("load", function () {
          (i.naturalHeight && i.naturalWidth) || ((i.naturalHeight = this.naturalHeight || this.height || 1), (i.naturalWidth = this.naturalWidth || this.width || 1)),
            (i.aspectRatio = i.naturalWidth / i.naturalHeight),
            r.isSetup || r.setup(),
            r.sliders.push(i),
            (r.isFresh = !1),
            r.requestRender();
        }),
        e || (this.$slider[0].src = this.imageSrc),
        ((this.naturalHeight && this.naturalWidth) || this.$slider[0].complete || 0 < t.length) && this.$slider.trigger("load");
    }
    !(function () {
      for (var o = 0, t = ["ms", "moz", "webkit", "o"], e = 0; e < t.length && !a.requestAnimationFrame; ++e)
        (a.requestAnimationFrame = a[t[e] + "RequestAnimationFrame"]), (a.cancelAnimationFrame = a[t[e] + "CancelAnimationFrame"] || a[t[e] + "CancelRequestAnimationFrame"]);
      a.requestAnimationFrame ||
        (a.requestAnimationFrame = function (t) {
          var e = new Date().getTime(),
            i = Math.max(0, 16 - (e - o)),
            s = a.setTimeout(function () {
              t(e + i);
            }, i);
          return (o = e + i), s;
        }),
        a.cancelAnimationFrame ||
          (a.cancelAnimationFrame = function (t) {
            clearTimeout(t);
          });
    })(),
      o.extend(r.prototype, {
        speed: 0.2,
        bleed: 0,
        zIndex: -100,
        iosFix: !0,
        androidFix: !0,
        position: "center",
        overScrollFix: !1,
        refresh: function () {
          (this.boxWidth = this.$element.outerWidth()),
            (this.boxHeight = this.$element.outerHeight() + 2 * this.bleed),
            (this.boxOffsetTop = this.$element.offset().top - this.bleed),
            (this.boxOffsetLeft = this.$element.offset().left),
            (this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight);
          var t,
            e = r.winHeight,
            i = r.docHeight,
            i = Math.min(this.boxOffsetTop, i - e),
            e = Math.max(this.boxOffsetTop + this.boxHeight - e, 0),
            e = (this.boxHeight + (i - e) * (1 - this.speed)) | 0,
            i = ((this.boxOffsetTop - i) * (1 - this.speed)) | 0;
          e * this.aspectRatio >= this.boxWidth
            ? ((this.imageWidth = (e * this.aspectRatio) | 0),
              (this.imageHeight = e),
              (this.offsetBaseTop = i),
              (t = this.imageWidth - this.boxWidth),
              (this.offsetLeft = "left" == this.positionX ? 0 : "right" == this.positionX ? -t : isNaN(this.positionX) ? (-t / 2) | 0 : Math.max(this.positionX, -t)))
            : ((this.imageWidth = this.boxWidth),
              (this.imageHeight = (this.boxWidth / this.aspectRatio) | 0),
              (this.offsetLeft = 0),
              (t = this.imageHeight - e),
              (this.offsetBaseTop = "top" == this.positionY ? i : "bottom" == this.positionY ? i - t : isNaN(this.positionY) ? (i - t / 2) | 0 : i + Math.max(this.positionY, -t)));
        },
        render: function () {
          var t = r.scrollTop,
            e = r.scrollLeft,
            i = this.overScrollFix ? r.overScroll : 0,
            s = t + r.winHeight;
          this.boxOffsetBottom > t && this.boxOffsetTop <= s
            ? ((this.visibility = "visible"), (this.mirrorTop = this.boxOffsetTop - t), (this.mirrorLeft = this.boxOffsetLeft - e), (this.offsetTop = this.offsetBaseTop - this.mirrorTop * (1 - this.speed)))
            : (this.visibility = "hidden"),
            this.$mirror.css({ transform: "translate3d(0px, 0px, 0px)", visibility: this.visibility, top: this.mirrorTop - i, left: this.mirrorLeft, height: this.boxHeight, width: this.boxWidth }),
            this.$slider.css({ transform: "translate3d(0px, 0px, 0px)", position: "absolute", top: this.offsetTop, left: this.offsetLeft, height: this.imageHeight, width: this.imageWidth, maxWidth: "none" });
        },
      }),
      o.extend(r, {
        scrollTop: 0,
        scrollLeft: 0,
        winHeight: 0,
        winWidth: 0,
        docHeight: 1 << 30,
        docWidth: 1 << 30,
        sliders: [],
        isReady: !1,
        isFresh: !1,
        isBusy: !1,
        setup: function () {
          var t, s, e, i;
          this.isReady ||
            ((t = o(n)),
            (s = o(a)),
            (e = function () {
              (r.winHeight = s.height()), (r.winWidth = s.width()), (r.docHeight = t.height()), (r.docWidth = t.width());
            }),
            (i = function () {
              var t = s.scrollTop(),
                e = r.docHeight - r.winHeight,
                i = r.docWidth - r.winWidth;
              (r.scrollTop = Math.max(0, Math.min(e, t))), (r.scrollLeft = Math.max(0, Math.min(i, s.scrollLeft()))), (r.overScroll = Math.max(t - e, Math.min(t, 0)));
            }),
            s
              .on("resize.px.pafeParallax load.px.pafeParallax", function () {
                e(), (r.isFresh = !1), r.requestRender();
              })
              .on("scroll.px.pafeParallax load.px.pafeParallax", function () {
                i(), r.requestRender();
              }),
            e(),
            i(),
            (this.isReady = !0));
        },
        configure: function (t) {
          "object" == typeof t && (delete t.refresh, delete t.render, o.extend(this.prototype, t));
        },
        refresh: function () {
          o.each(this.sliders, function () {
            this.refresh();
          }),
            (this.isFresh = !0);
        },
        render: function () {
          this.isFresh || this.refresh(),
            o.each(this.sliders, function () {
              this.render();
            });
        },
        requestRender: function () {
          var t = this;
          this.isBusy ||
            ((this.isBusy = !0),
            a.requestAnimationFrame(function () {
              t.render(), (t.isBusy = !1);
            }));
        },
        destroy: function (t) {
          var e,
            i = o(t).data("px.pafeParallax");
          for (i.$mirror.remove(), e = 0; e < this.sliders.length; e += 1) this.sliders[e] == i && this.sliders.splice(e, 1);
          o(t).data("px.pafeParallax", !1), 0 === this.sliders.length && (o(a).off("scroll.px.pafeParallax resize.px.pafeParallax load.px.pafeParallax"), (this.isReady = !1), (r.isSetup = !1));
        },
      });
    var t = o.fn.pafeParallax;
    (o.fn.pafeParallax = function (i) {
      return this.each(function () {
        var t = o(this),
          e = "object" == typeof i && i;
        this == a || this == n || t.is("body") ? r.configure(e) : t.data("px.pafeParallax") ? "object" == typeof i && o.extend(t.data("px.pafeParallax"), e) : ((e = o.extend({}, t.data(), e)), t.data("px.pafeParallax", new r(this, e))),
          "string" == typeof i && ("destroy" == i ? r.destroy(this) : r[i]());
      });
    }),
      (o.fn.pafeParallax.Constructor = r),
      (o.fn.pafeParallax.noConflict = function () {
        return (o.fn.pafeParallax = t), this;
      }),
      o(n).on("ready.px.pafeParallax.data-api", function () {
        o('[data-parallax="scroll"]').pafeParallax();
      });
  })(jQuery, window, document),
  jQuery(document).ready(function (t) {
    function e(t, e) {
      var i = parseFloat(e.data("pafe-parallax-speed")),
        s = parseFloat(e.data("pafe-parallax-bleed")),
        e = t.css("background-size");
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream && (e = "cover"), t.parallaxie({ speed: i, offset: s, size: e });
    }
    function i(t, e) {
      var i = t.css("background-image").replace("url(", "").replace(")", "").replace(/\"/gi, ""),
        s = parseFloat(e.data("pafe-parallax-speed")),
        e = parseFloat(e.data("pafe-parallax-bleed"));
      t.css({ "background-image": "none" }), t.attr("data-pafe-background-image", i), t.pafeParallax({ imageSrc: i, speed: s, bleed: e, zIndex: 1 });
    }
    0 < t(".pafe-parallax-widget").length &&
      (t(".pafe-parallax-widget:not([data-pafe-parallax-new-version='']) .elementor-widget-container").each(function () {
        i(t(this), t(this).closest(".pafe-parallax-widget"));
      }),
      t(".pafe-parallax-widget[data-pafe-parallax-new-version=''] .elementor-widget-container").each(function () {
        e(t(this), t(this).closest(".pafe-parallax-widget"));
      })),
      0 < t(".pafe-parallax-column").length &&
        (t(".pafe-parallax-column:not([data-pafe-parallax-new-version='']) .elementor-column-wrap").each(function () {
          i(t(this), t(this).closest(".pafe-parallax-column"));
        }),
        t(".pafe-parallax-column[data-pafe-parallax-new-version=''] .elementor-column-wrap").each(function () {
          e(t(this), t(this).closest(".pafe-parallax-column"));
        })),
      0 < t(".pafe-parallax-section").length &&
        (t(".pafe-parallax-section:not([data-pafe-parallax-new-version=''])").each(function () {
          i(t(this), t(this));
        }),
        t(".pafe-parallax-section[data-pafe-parallax-new-version='']").each(function () {
          e(t(this), t(this));
        }));
  }),
  (function (e) {
    !jQuery && "function" == typeof define && define.amd
      ? define(["jquery"], function (t) {
          return e(t, document, window, navigator);
        })
      : jQuery || "object" != typeof exports
      ? e(jQuery, document, window, navigator)
      : e(require("jquery"), document, window, navigator);
  })(function (n, r, l, t, h) {
    "use strict";
    var e,
      i = 0,
      s = ((e = /msie\s\d+/i), 0 < (t = t.userAgent).search(e) && e.exec(t).toString().split(" ")[1] < 9 && (n("html").addClass("lt-ie9"), !0));
    Function.prototype.bind ||
      (Function.prototype.bind = function (i) {
        var s = this,
          o = [].slice;
        if ("function" != typeof s) throw new TypeError();
        var a = o.call(arguments, 1),
          n = function () {
            if (this instanceof n) {
              var t = function () {};
              t.prototype = s.prototype;
              var e = new t(),
                t = s.apply(e, a.concat(o.call(arguments)));
              return Object(t) === t ? t : e;
            }
            return s.apply(i, a.concat(o.call(arguments)));
          };
        return n;
      }),
      Array.prototype.indexOf ||
        (Array.prototype.indexOf = function (t, e) {
          var i;
          if (null == this) throw new TypeError('"this" is null or not defined');
          var s = Object(this),
            o = s.length >>> 0;
          if (0 == o) return -1;
          e = +e || 0;
          if ((Math.abs(e) === 1 / 0 && (e = 0), o <= e)) return -1;
          for (i = Math.max(0 <= e ? e : o - Math.abs(e), 0); i < o; ) {
            if (i in s && s[i] === t) return i;
            i++;
          }
          return -1;
        });
    function o(t, e, i) {
      (this.VERSION = "2.3.0"),
        (this.input = t),
        (this.plugin_count = i),
        (this.current_plugin = 0),
        (this.calc_count = 0),
        (this.update_tm = 0),
        (this.old_from = 0),
        (this.old_to = 0),
        (this.old_min_interval = null),
        (this.raf_id = null),
        (this.dragging = !1),
        (this.force_redraw = !1),
        (this.no_diapason = !1),
        (this.has_tab_index = !0),
        (this.is_key = !1),
        (this.is_update = !1),
        (this.is_start = !0),
        (this.is_finish = !1),
        (this.is_active = !1),
        (this.is_resize = !1),
        (this.is_click = !1),
        (e = e || {}),
        (this.$cache = {
          win: n(l),
          body: n(r.body),
          input: n(t),
          cont: null,
          rs: null,
          min: null,
          max: null,
          from: null,
          to: null,
          single: null,
          bar: null,
          line: null,
          s_single: null,
          s_from: null,
          s_to: null,
          shad_single: null,
          shad_from: null,
          shad_to: null,
          edge: null,
          grid: null,
          grid_labels: [],
        }),
        (this.coords = {
          x_gap: 0,
          x_pointer: 0,
          w_rs: 0,
          w_rs_old: 0,
          w_handle: 0,
          p_gap: 0,
          p_gap_left: 0,
          p_gap_right: 0,
          p_step: 0,
          p_pointer: 0,
          p_handle: 0,
          p_single_fake: 0,
          p_single_real: 0,
          p_from_fake: 0,
          p_from_real: 0,
          p_to_fake: 0,
          p_to_real: 0,
          p_bar_x: 0,
          p_bar_w: 0,
          grid_gap: 0,
          big_num: 0,
          big: [],
          big_w: [],
          big_p: [],
          big_x: [],
        }),
        (this.labels = { w_min: 0, w_max: 0, w_from: 0, w_to: 0, w_single: 0, p_min: 0, p_max: 0, p_from_fake: 0, p_from_left: 0, p_to_fake: 0, p_to_left: 0, p_single_fake: 0, p_single_left: 0 });
      var s,
        o,
        a = this.$cache.input,
        i = a.prop("value"),
        t = {
          skin: "flat",
          type: "single",
          min: 10,
          max: 100,
          from: null,
          to: null,
          step: 1,
          min_interval: 0,
          max_interval: 0,
          drag_interval: !1,
          values: [],
          p_values: [],
          from_fixed: !1,
          from_min: null,
          from_max: null,
          from_shadow: !1,
          to_fixed: !1,
          to_min: null,
          to_max: null,
          to_shadow: !1,
          prettify_enabled: !0,
          prettify_separator: " ",
          prettify: null,
          force_edges: !1,
          keyboard: !0,
          grid: !1,
          grid_margin: !0,
          grid_num: 4,
          grid_snap: !1,
          hide_min_max: !1,
          hide_from_to: !1,
          prefix: "",
          postfix: "",
          max_postfix: "",
          decorate_both: !0,
          values_separator: " — ",
          input_values_separator: ";",
          disable: !1,
          block: !1,
          extra_classes: "",
          scope: null,
          onStart: null,
          onChange: null,
          onFinish: null,
          onUpdate: null,
        };
      for (o in ("INPUT" !== a[0].nodeName && console && console.warn && console.warn("Base element should be <input>!", a[0]),
      ((s = {
        skin: a.data("skin"),
        type: a.data("type"),
        min: a.data("min"),
        max: a.data("max"),
        from: a.data("from"),
        to: a.data("to"),
        step: a.data("step"),
        min_interval: a.data("minInterval"),
        max_interval: a.data("maxInterval"),
        drag_interval: a.data("dragInterval"),
        values: a.data("values"),
        from_fixed: a.data("fromFixed"),
        from_min: a.data("fromMin"),
        from_max: a.data("fromMax"),
        from_shadow: a.data("fromShadow"),
        to_fixed: a.data("toFixed"),
        to_min: a.data("toMin"),
        to_max: a.data("toMax"),
        to_shadow: a.data("toShadow"),
        prettify_enabled: a.data("prettifyEnabled"),
        prettify_separator: a.data("prettifySeparator"),
        force_edges: a.data("forceEdges"),
        keyboard: a.data("keyboard"),
        grid: a.data("grid"),
        grid_margin: a.data("gridMargin"),
        grid_num: a.data("gridNum"),
        grid_snap: a.data("gridSnap"),
        hide_min_max: a.data("hideMinMax"),
        hide_from_to: a.data("hideFromTo"),
        prefix: a.data("prefix"),
        postfix: a.data("postfix"),
        max_postfix: a.data("maxPostfix"),
        decorate_both: a.data("decorateBoth"),
        values_separator: a.data("valuesSeparator"),
        input_values_separator: a.data("inputValuesSeparator"),
        disable: a.data("disable"),
        block: a.data("block"),
        extra_classes: a.data("extraClasses"),
      }).values = s.values && s.values.split(",")),
      s))
        s.hasOwnProperty(o) && ((s[o] !== h && "" !== s[o]) || delete s[o]);
      i !== h &&
        "" !== i &&
        ((i = i.split(s.input_values_separator || e.input_values_separator || ";"))[0] && i[0] == +i[0] && (i[0] = +i[0]),
        i[1] && i[1] == +i[1] && (i[1] = +i[1]),
        e && e.values && e.values.length ? ((t.from = i[0] && e.values.indexOf(i[0])), (t.to = i[1] && e.values.indexOf(i[1]))) : ((t.from = i[0] && +i[0]), (t.to = i[1] && +i[1]))),
        n.extend(t, e),
        n.extend(t, s),
        (this.options = t),
        (this.update_check = {}),
        this.validate(),
        (this.result = { input: this.$cache.input, slider: null, min: this.options.min, max: this.options.max, from: this.options.from, from_percent: 0, from_value: null, to: this.options.to, to_percent: 0, to_value: null }),
        this.init();
    }
    (o.prototype = {
      init: function (t) {
        (this.no_diapason = !1),
          (this.coords.p_step = this.convertToPercent(this.options.step, !0)),
          (this.target = "base"),
          this.toggleInput(),
          this.append(),
          this.setMinMax(),
          t ? ((this.force_redraw = !0), this.calc(!0), this.callOnUpdate()) : ((this.force_redraw = !0), this.calc(!0), this.callOnStart()),
          this.updateScene();
      },
      append: function () {
        var t = '<span class="irs irs--' + this.options.skin + " js-irs-" + this.plugin_count + " " + this.options.extra_classes + '"></span>';
        this.$cache.input.before(t),
          this.$cache.input.prop("readonly", !0),
          (this.$cache.cont = this.$cache.input.prev()),
          (this.result.slider = this.$cache.cont),
          this.$cache.cont.html(
            '<span class="irs"><span class="irs-line" tabindex="0"></span><span class="irs-min">0</span><span class="irs-max">1</span><span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span></span><span class="irs-grid"></span>'
          ),
          (this.$cache.rs = this.$cache.cont.find(".irs")),
          (this.$cache.min = this.$cache.cont.find(".irs-min")),
          (this.$cache.max = this.$cache.cont.find(".irs-max")),
          (this.$cache.from = this.$cache.cont.find(".irs-from")),
          (this.$cache.to = this.$cache.cont.find(".irs-to")),
          (this.$cache.single = this.$cache.cont.find(".irs-single")),
          (this.$cache.line = this.$cache.cont.find(".irs-line")),
          (this.$cache.grid = this.$cache.cont.find(".irs-grid")),
          "single" === this.options.type
            ? (this.$cache.cont.append('<span class="irs-bar irs-bar--single"></span><span class="irs-shadow shadow-single"></span><span class="irs-handle single"><i></i><i></i><i></i></span>'),
              (this.$cache.bar = this.$cache.cont.find(".irs-bar")),
              (this.$cache.edge = this.$cache.cont.find(".irs-bar-edge")),
              (this.$cache.s_single = this.$cache.cont.find(".single")),
              (this.$cache.from[0].style.visibility = "hidden"),
              (this.$cache.to[0].style.visibility = "hidden"),
              (this.$cache.shad_single = this.$cache.cont.find(".shadow-single")))
            : (this.$cache.cont.append(
                '<span class="irs-bar"></span><span class="irs-shadow shadow-from"></span><span class="irs-shadow shadow-to"></span><span class="irs-handle from"><i></i><i></i><i></i></span><span class="irs-handle to"><i></i><i></i><i></i></span>'
              ),
              (this.$cache.bar = this.$cache.cont.find(".irs-bar")),
              (this.$cache.s_from = this.$cache.cont.find(".from")),
              (this.$cache.s_to = this.$cache.cont.find(".to")),
              (this.$cache.shad_from = this.$cache.cont.find(".shadow-from")),
              (this.$cache.shad_to = this.$cache.cont.find(".shadow-to")),
              this.setTopHandler()),
          this.options.hide_from_to && ((this.$cache.from[0].style.display = "none"), (this.$cache.to[0].style.display = "none"), (this.$cache.single[0].style.display = "none")),
          this.appendGrid(),
          this.options.disable ? (this.appendDisableMask(), (this.$cache.input[0].disabled = !0)) : ((this.$cache.input[0].disabled = !1), this.removeDisableMask(), this.bindEvents()),
          this.options.disable || (this.options.block ? this.appendDisableMask() : this.removeDisableMask()),
          this.options.drag_interval && (this.$cache.bar[0].style.cursor = "ew-resize");
      },
      setTopHandler: function () {
        var t = this.options.min,
          e = this.options.max,
          i = this.options.from,
          s = this.options.to;
        t < i && s === e ? this.$cache.s_from.addClass("type_last") : s < e && this.$cache.s_to.addClass("type_last");
      },
      changeLevel: function (t) {
        switch (t) {
          case "single":
            (this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_single_fake)), this.$cache.s_single.addClass("state_hover");
            break;
          case "from":
            (this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake)), this.$cache.s_from.addClass("state_hover"), this.$cache.s_from.addClass("type_last"), this.$cache.s_to.removeClass("type_last");
            break;
          case "to":
            (this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_to_fake)), this.$cache.s_to.addClass("state_hover"), this.$cache.s_to.addClass("type_last"), this.$cache.s_from.removeClass("type_last");
            break;
          case "both":
            (this.coords.p_gap_left = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake)),
              (this.coords.p_gap_right = this.toFixed(this.coords.p_to_fake - this.coords.p_pointer)),
              this.$cache.s_to.removeClass("type_last"),
              this.$cache.s_from.removeClass("type_last");
        }
      },
      appendDisableMask: function () {
        this.$cache.cont.append('<span class="irs-disable-mask"></span>'), this.$cache.cont.addClass("irs-disabled");
      },
      removeDisableMask: function () {
        this.$cache.cont.remove(".irs-disable-mask"), this.$cache.cont.removeClass("irs-disabled");
      },
      remove: function () {
        this.$cache.cont.remove(),
          (this.$cache.cont = null),
          this.$cache.line.off("keydown.irs_" + this.plugin_count),
          this.$cache.body.off("touchmove.irs_" + this.plugin_count),
          this.$cache.body.off("mousemove.irs_" + this.plugin_count),
          this.$cache.win.off("touchend.irs_" + this.plugin_count),
          this.$cache.win.off("mouseup.irs_" + this.plugin_count),
          s && (this.$cache.body.off("mouseup.irs_" + this.plugin_count), this.$cache.body.off("mouseleave.irs_" + this.plugin_count)),
          (this.$cache.grid_labels = []),
          (this.coords.big = []),
          (this.coords.big_w = []),
          (this.coords.big_p = []),
          (this.coords.big_x = []),
          cancelAnimationFrame(this.raf_id);
      },
      bindEvents: function () {
        this.no_diapason ||
          (this.$cache.body.on("touchmove.irs_" + this.plugin_count, this.pointerMove.bind(this)),
          this.$cache.body.on("mousemove.irs_" + this.plugin_count, this.pointerMove.bind(this)),
          this.$cache.win.on("touchend.irs_" + this.plugin_count, this.pointerUp.bind(this)),
          this.$cache.win.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)),
          this.$cache.line.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")),
          this.$cache.line.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")),
          this.$cache.line.on("focus.irs_" + this.plugin_count, this.pointerFocus.bind(this)),
          this.options.drag_interval && "double" === this.options.type
            ? (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "both")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "both")))
            : (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))),
          "single" === this.options.type
            ? (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")),
              this.$cache.s_single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")),
              this.$cache.shad_single.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")),
              this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")),
              this.$cache.s_single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")),
              this.$cache.edge.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")),
              this.$cache.shad_single.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")))
            : (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, null)),
              this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, null)),
              this.$cache.from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")),
              this.$cache.s_from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")),
              this.$cache.to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")),
              this.$cache.s_to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")),
              this.$cache.shad_from.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")),
              this.$cache.shad_to.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")),
              this.$cache.from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")),
              this.$cache.s_from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")),
              this.$cache.to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")),
              this.$cache.s_to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")),
              this.$cache.shad_from.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")),
              this.$cache.shad_to.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))),
          this.options.keyboard && this.$cache.line.on("keydown.irs_" + this.plugin_count, this.key.bind(this, "keyboard")),
          s && (this.$cache.body.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.body.on("mouseleave.irs_" + this.plugin_count, this.pointerUp.bind(this))));
      },
      pointerFocus: function (t) {
        var e, i;
        this.target || ((e = (i = "single" === this.options.type ? this.$cache.single : this.$cache.from).offset().left), (e += i.width() / 2 - 1), this.pointerClick("single", { preventDefault: function () {}, pageX: e }));
      },
      pointerMove: function (t) {
        this.dragging && ((t = t.pageX || (t.originalEvent.touches && t.originalEvent.touches[0].pageX)), (this.coords.x_pointer = t - this.coords.x_gap), this.calc());
      },
      pointerUp: function (t) {
        this.current_plugin === this.plugin_count &&
          this.is_active &&
          ((this.is_active = !1),
          this.$cache.cont.find(".state_hover").removeClass("state_hover"),
          (this.force_redraw = !0),
          s && n("*").prop("unselectable", !1),
          this.updateScene(),
          this.restoreOriginalMinInterval(),
          (n.contains(this.$cache.cont[0], t.target) || this.dragging) && this.callOnFinish(),
          (this.dragging = !1));
      },
      pointerDown: function (t, e) {
        e.preventDefault();
        var i = e.pageX || (e.originalEvent.touches && e.originalEvent.touches[0].pageX);
        2 !== e.button &&
          ("both" === t && this.setTempMinInterval(),
          (t = t || this.target || "from"),
          (this.current_plugin = this.plugin_count),
          (this.target = t),
          (this.is_active = !0),
          (this.dragging = !0),
          (this.coords.x_gap = this.$cache.rs.offset().left),
          (this.coords.x_pointer = i - this.coords.x_gap),
          this.calcPointerPercent(),
          this.changeLevel(t),
          s && n("*").prop("unselectable", !0),
          this.$cache.line.trigger("focus"),
          this.updateScene());
      },
      pointerClick: function (t, e) {
        e.preventDefault();
        var i = e.pageX || (e.originalEvent.touches && e.originalEvent.touches[0].pageX);
        2 !== e.button &&
          ((this.current_plugin = this.plugin_count),
          (this.target = t),
          (this.is_click = !0),
          (this.coords.x_gap = this.$cache.rs.offset().left),
          (this.coords.x_pointer = +(i - this.coords.x_gap).toFixed()),
          (this.force_redraw = !0),
          this.calc(),
          this.$cache.line.trigger("focus"));
      },
      key: function (t, e) {
        if (!(this.current_plugin !== this.plugin_count || e.altKey || e.ctrlKey || e.shiftKey || e.metaKey)) {
          switch (e.which) {
            case 83:
            case 65:
            case 40:
            case 37:
              e.preventDefault(), this.moveByKey(!1);
              break;
            case 87:
            case 68:
            case 38:
            case 39:
              e.preventDefault(), this.moveByKey(!0);
          }
          return !0;
        }
      },
      moveByKey: function (t) {
        var e = this.coords.p_pointer,
          i = (this.options.max - this.options.min) / 100,
          i = this.options.step / i;
        t ? (e += i) : (e -= i), (this.coords.x_pointer = this.toFixed((this.coords.w_rs / 100) * e)), (this.is_key = !0), this.calc();
      },
      setMinMax: function () {
        if (this.options) {
          if (this.options.hide_min_max) return (this.$cache.min[0].style.display = "none"), void (this.$cache.max[0].style.display = "none");
          var t, e;
          this.options.values.length
            ? (this.$cache.min.html(this.decorate(this.options.p_values[this.options.min])), this.$cache.max.html(this.decorate(this.options.p_values[this.options.max])))
            : ((t = this._prettify(this.options.min)),
              (e = this._prettify(this.options.max)),
              (this.result.min_pretty = t),
              (this.result.max_pretty = e),
              this.$cache.min.html(this.decorate(t, this.options.min)),
              this.$cache.max.html(this.decorate(e, this.options.max))),
            (this.labels.w_min = this.$cache.min.outerWidth(!1)),
            (this.labels.w_max = this.$cache.max.outerWidth(!1));
        }
      },
      setTempMinInterval: function () {
        var t = this.result.to - this.result.from;
        null === this.old_min_interval && (this.old_min_interval = this.options.min_interval), (this.options.min_interval = t);
      },
      restoreOriginalMinInterval: function () {
        null !== this.old_min_interval && ((this.options.min_interval = this.old_min_interval), (this.old_min_interval = null));
      },
      calc: function (t) {
        if (this.options && (this.calc_count++, (10 !== this.calc_count && !t) || ((this.calc_count = 0), (this.coords.w_rs = this.$cache.rs.outerWidth(!1)), this.calcHandlePercent()), this.coords.w_rs)) {
          this.calcPointerPercent();
          var e = this.getHandleX();
          switch (
            ("both" === this.target && ((this.coords.p_gap = 0), (e = this.getHandleX())),
            "click" === this.target && ((this.coords.p_gap = this.coords.p_handle / 2), (e = this.getHandleX()), this.options.drag_interval ? (this.target = "both_one") : (this.target = this.chooseHandle(e))),
            this.target)
          ) {
            case "base":
              var i = (this.options.max - this.options.min) / 100,
                s = (this.result.from - this.options.min) / i,
                o = (this.result.to - this.options.min) / i;
              (this.coords.p_single_real = this.toFixed(s)),
                (this.coords.p_from_real = this.toFixed(s)),
                (this.coords.p_to_real = this.toFixed(o)),
                (this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max)),
                (this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max)),
                (this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max)),
                (this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real)),
                (this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real)),
                (this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real)),
                (this.target = null);
              break;
            case "single":
              if (this.options.from_fixed) break;
              (this.coords.p_single_real = this.convertToRealPercent(e)),
                (this.coords.p_single_real = this.calcWithStep(this.coords.p_single_real)),
                (this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max)),
                (this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real));
              break;
            case "from":
              if (this.options.from_fixed) break;
              (this.coords.p_from_real = this.convertToRealPercent(e)),
                (this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real)),
                this.coords.p_from_real > this.coords.p_to_real && (this.coords.p_from_real = this.coords.p_to_real),
                (this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max)),
                (this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from")),
                (this.coords.p_from_real = this.checkMaxInterval(this.coords.p_from_real, this.coords.p_to_real, "from")),
                (this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real));
              break;
            case "to":
              if (this.options.to_fixed) break;
              (this.coords.p_to_real = this.convertToRealPercent(e)),
                (this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real)),
                this.coords.p_to_real < this.coords.p_from_real && (this.coords.p_to_real = this.coords.p_from_real),
                (this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max)),
                (this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to")),
                (this.coords.p_to_real = this.checkMaxInterval(this.coords.p_to_real, this.coords.p_from_real, "to")),
                (this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real));
              break;
            case "both":
              if (this.options.from_fixed || this.options.to_fixed) break;
              (e = this.toFixed(e + 0.001 * this.coords.p_handle)),
                (this.coords.p_from_real = this.convertToRealPercent(e) - this.coords.p_gap_left),
                (this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real)),
                (this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max)),
                (this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from")),
                (this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real)),
                (this.coords.p_to_real = this.convertToRealPercent(e) + this.coords.p_gap_right),
                (this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real)),
                (this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max)),
                (this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to")),
                (this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real));
              break;
            case "both_one":
              if (this.options.from_fixed || this.options.to_fixed) break;
              var a = this.convertToRealPercent(e),
                i = this.result.from_percent,
                s = this.result.to_percent - i,
                o = s / 2,
                i = a - o,
                o = a + o;
              i < 0 && (o = (i = 0) + s),
                100 < o && (i = (o = 100) - s),
                (this.coords.p_from_real = this.calcWithStep(i)),
                (this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max)),
                (this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real)),
                (this.coords.p_to_real = this.calcWithStep(o)),
                (this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max)),
                (this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real));
          }
          "single" === this.options.type
            ? ((this.coords.p_bar_x = this.coords.p_handle / 2),
              (this.coords.p_bar_w = this.coords.p_single_fake),
              (this.result.from_percent = this.coords.p_single_real),
              (this.result.from = this.convertToValue(this.coords.p_single_real)),
              (this.result.from_pretty = this._prettify(this.result.from)),
              this.options.values.length && (this.result.from_value = this.options.values[this.result.from]))
            : ((this.coords.p_bar_x = this.toFixed(this.coords.p_from_fake + this.coords.p_handle / 2)),
              (this.coords.p_bar_w = this.toFixed(this.coords.p_to_fake - this.coords.p_from_fake)),
              (this.result.from_percent = this.coords.p_from_real),
              (this.result.from = this.convertToValue(this.coords.p_from_real)),
              (this.result.from_pretty = this._prettify(this.result.from)),
              (this.result.to_percent = this.coords.p_to_real),
              (this.result.to = this.convertToValue(this.coords.p_to_real)),
              (this.result.to_pretty = this._prettify(this.result.to)),
              this.options.values.length && ((this.result.from_value = this.options.values[this.result.from]), (this.result.to_value = this.options.values[this.result.to]))),
            this.calcMinMax(),
            this.calcLabels();
        }
      },
      calcPointerPercent: function () {
        this.coords.w_rs
          ? (this.coords.x_pointer < 0 || isNaN(this.coords.x_pointer) ? (this.coords.x_pointer = 0) : this.coords.x_pointer > this.coords.w_rs && (this.coords.x_pointer = this.coords.w_rs),
            (this.coords.p_pointer = this.toFixed((this.coords.x_pointer / this.coords.w_rs) * 100)))
          : (this.coords.p_pointer = 0);
      },
      convertToRealPercent: function (t) {
        return (t / (100 - this.coords.p_handle)) * 100;
      },
      convertToFakePercent: function (t) {
        return (t / 100) * (100 - this.coords.p_handle);
      },
      getHandleX: function () {
        var t = 100 - this.coords.p_handle,
          e = this.toFixed(this.coords.p_pointer - this.coords.p_gap);
        return e < 0 ? (e = 0) : t < e && (e = t), e;
      },
      calcHandlePercent: function () {
        "single" === this.options.type ? (this.coords.w_handle = this.$cache.s_single.outerWidth(!1)) : (this.coords.w_handle = this.$cache.s_from.outerWidth(!1)),
          (this.coords.p_handle = this.toFixed((this.coords.w_handle / this.coords.w_rs) * 100));
      },
      chooseHandle: function (t) {
        return "single" === this.options.type ? "single" : this.coords.p_from_real + (this.coords.p_to_real - this.coords.p_from_real) / 2 <= t ? (this.options.to_fixed ? "from" : "to") : this.options.from_fixed ? "to" : "from";
      },
      calcMinMax: function () {
        this.coords.w_rs && ((this.labels.p_min = (this.labels.w_min / this.coords.w_rs) * 100), (this.labels.p_max = (this.labels.w_max / this.coords.w_rs) * 100));
      },
      calcLabels: function () {
        this.coords.w_rs &&
          !this.options.hide_from_to &&
          ("single" === this.options.type
            ? ((this.labels.w_single = this.$cache.single.outerWidth(!1)),
              (this.labels.p_single_fake = (this.labels.w_single / this.coords.w_rs) * 100),
              (this.labels.p_single_left = this.coords.p_single_fake + this.coords.p_handle / 2 - this.labels.p_single_fake / 2))
            : ((this.labels.w_from = this.$cache.from.outerWidth(!1)),
              (this.labels.p_from_fake = (this.labels.w_from / this.coords.w_rs) * 100),
              (this.labels.p_from_left = this.coords.p_from_fake + this.coords.p_handle / 2 - this.labels.p_from_fake / 2),
              (this.labels.p_from_left = this.toFixed(this.labels.p_from_left)),
              (this.labels.p_from_left = this.checkEdges(this.labels.p_from_left, this.labels.p_from_fake)),
              (this.labels.w_to = this.$cache.to.outerWidth(!1)),
              (this.labels.p_to_fake = (this.labels.w_to / this.coords.w_rs) * 100),
              (this.labels.p_to_left = this.coords.p_to_fake + this.coords.p_handle / 2 - this.labels.p_to_fake / 2),
              (this.labels.p_to_left = this.toFixed(this.labels.p_to_left)),
              (this.labels.p_to_left = this.checkEdges(this.labels.p_to_left, this.labels.p_to_fake)),
              (this.labels.w_single = this.$cache.single.outerWidth(!1)),
              (this.labels.p_single_fake = (this.labels.w_single / this.coords.w_rs) * 100),
              (this.labels.p_single_left = (this.labels.p_from_left + this.labels.p_to_left + this.labels.p_to_fake) / 2 - this.labels.p_single_fake / 2),
              (this.labels.p_single_left = this.toFixed(this.labels.p_single_left))),
          (this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single_fake)));
      },
      updateScene: function () {
        this.raf_id && (cancelAnimationFrame(this.raf_id), (this.raf_id = null)),
          clearTimeout(this.update_tm),
          (this.update_tm = null),
          this.options && (this.drawHandles(), this.is_active ? (this.raf_id = requestAnimationFrame(this.updateScene.bind(this))) : (this.update_tm = setTimeout(this.updateScene.bind(this), 300)));
      },
      drawHandles: function () {
        (this.coords.w_rs = this.$cache.rs.outerWidth(!1)),
          this.coords.w_rs &&
            (this.coords.w_rs !== this.coords.w_rs_old && ((this.target = "base"), (this.is_resize = !0)),
            (this.coords.w_rs === this.coords.w_rs_old && !this.force_redraw) ||
              (this.setMinMax(), this.calc(!0), this.drawLabels(), this.options.grid && (this.calcGridMargin(), this.calcGridLabels()), (this.force_redraw = !0), (this.coords.w_rs_old = this.coords.w_rs), this.drawShadow()),
            this.coords.w_rs &&
              (this.dragging || this.force_redraw || this.is_key) &&
              ((this.old_from !== this.result.from || this.old_to !== this.result.to || this.force_redraw || this.is_key) &&
                (this.drawLabels(),
                (this.$cache.bar[0].style.left = this.coords.p_bar_x + "%"),
                (this.$cache.bar[0].style.width = this.coords.p_bar_w + "%"),
                "single" === this.options.type
                  ? ((this.$cache.bar[0].style.left = 0), (this.$cache.bar[0].style.width = this.coords.p_bar_w + this.coords.p_bar_x + "%"), (this.$cache.s_single[0].style.left = this.coords.p_single_fake + "%"))
                  : ((this.$cache.s_from[0].style.left = this.coords.p_from_fake + "%"),
                    (this.$cache.s_to[0].style.left = this.coords.p_to_fake + "%"),
                    (this.old_from === this.result.from && !this.force_redraw) || (this.$cache.from[0].style.left = this.labels.p_from_left + "%"),
                    (this.old_to === this.result.to && !this.force_redraw) || (this.$cache.to[0].style.left = this.labels.p_to_left + "%")),
                (this.$cache.single[0].style.left = this.labels.p_single_left + "%"),
                this.writeToInput(),
                (this.old_from === this.result.from && this.old_to === this.result.to) || this.is_start || (this.$cache.input.trigger("change"), this.$cache.input.trigger("input")),
                (this.old_from = this.result.from),
                (this.old_to = this.result.to),
                this.is_resize || this.is_update || this.is_start || this.is_finish || this.callOnChange(),
                (this.is_key || this.is_click) && ((this.is_key = !1), (this.is_click = !1), this.callOnFinish()),
                (this.is_update = !1),
                (this.is_resize = !1),
                (this.is_finish = !1)),
              (this.is_start = !1),
              (this.is_key = !1),
              (this.is_click = !1),
              (this.force_redraw = !1)));
      },
      drawLabels: function () {
        var t, e, i, s, o, a;
        this.options &&
          ((t = this.options.values.length),
          (e = this.options.p_values),
          this.options.hide_from_to ||
            ("single" === this.options.type
              ? ((s = t ? this.decorate(e[this.result.from]) : ((a = this._prettify(this.result.from)), this.decorate(a, this.result.from))),
                this.$cache.single.html(s),
                this.calcLabels(),
                this.labels.p_single_left < this.labels.p_min + 1 ? (this.$cache.min[0].style.visibility = "hidden") : (this.$cache.min[0].style.visibility = "visible"),
                this.labels.p_single_left + this.labels.p_single_fake > 100 - this.labels.p_max - 1 ? (this.$cache.max[0].style.visibility = "hidden") : (this.$cache.max[0].style.visibility = "visible"))
              : ((a = t
                  ? (this.options.decorate_both
                      ? ((s = this.decorate(e[this.result.from])), (s += this.options.values_separator), (s += this.decorate(e[this.result.to])))
                      : (s = this.decorate(e[this.result.from] + this.options.values_separator + e[this.result.to])),
                    (o = this.decorate(e[this.result.from])),
                    this.decorate(e[this.result.to]))
                  : ((a = this._prettify(this.result.from)),
                    (i = this._prettify(this.result.to)),
                    this.options.decorate_both
                      ? ((s = this.decorate(a, this.result.from)), (s += this.options.values_separator), (s += this.decorate(i, this.result.to)))
                      : (s = this.decorate(a + this.options.values_separator + i, this.result.to)),
                    (o = this.decorate(a, this.result.from)),
                    this.decorate(i, this.result.to))),
                this.$cache.single.html(s),
                this.$cache.from.html(o),
                this.$cache.to.html(a),
                this.calcLabels(),
                (i = Math.min(this.labels.p_single_left, this.labels.p_from_left)),
                (s = this.labels.p_single_left + this.labels.p_single_fake),
                (o = this.labels.p_to_left + this.labels.p_to_fake),
                (a = Math.max(s, o)),
                this.labels.p_from_left + this.labels.p_from_fake >= this.labels.p_to_left
                  ? ((this.$cache.from[0].style.visibility = "hidden"),
                    (this.$cache.to[0].style.visibility = "hidden"),
                    (this.$cache.single[0].style.visibility = "visible"),
                    (a =
                      this.result.from === this.result.to
                        ? ("from" === this.target
                            ? (this.$cache.from[0].style.visibility = "visible")
                            : "to" === this.target
                            ? (this.$cache.to[0].style.visibility = "visible")
                            : this.target || (this.$cache.from[0].style.visibility = "visible"),
                          (this.$cache.single[0].style.visibility = "hidden"),
                          o)
                        : ((this.$cache.from[0].style.visibility = "hidden"), (this.$cache.to[0].style.visibility = "hidden"), (this.$cache.single[0].style.visibility = "visible"), Math.max(s, o))))
                  : ((this.$cache.from[0].style.visibility = "visible"), (this.$cache.to[0].style.visibility = "visible"), (this.$cache.single[0].style.visibility = "hidden")),
                i < this.labels.p_min + 1 ? (this.$cache.min[0].style.visibility = "hidden") : (this.$cache.min[0].style.visibility = "visible"),
                a > 100 - this.labels.p_max - 1 ? (this.$cache.max[0].style.visibility = "hidden") : (this.$cache.max[0].style.visibility = "visible"))));
      },
      drawShadow: function () {
        var t,
          e,
          i = this.options,
          s = this.$cache,
          o = "number" == typeof i.from_min && !isNaN(i.from_min),
          a = "number" == typeof i.from_max && !isNaN(i.from_max),
          n = "number" == typeof i.to_min && !isNaN(i.to_min),
          r = "number" == typeof i.to_max && !isNaN(i.to_max);
        "single" === i.type
          ? i.from_shadow && (o || a)
            ? ((t = this.convertToPercent(o ? i.from_min : i.min)),
              (e = this.convertToPercent(a ? i.from_max : i.max) - t),
              (t = this.toFixed(t - (this.coords.p_handle / 100) * t)),
              (e = this.toFixed(e - (this.coords.p_handle / 100) * e)),
              (t += this.coords.p_handle / 2),
              (s.shad_single[0].style.display = "block"),
              (s.shad_single[0].style.left = t + "%"),
              (s.shad_single[0].style.width = e + "%"))
            : (s.shad_single[0].style.display = "none")
          : (i.from_shadow && (o || a)
              ? ((t = this.convertToPercent(o ? i.from_min : i.min)),
                (e = this.convertToPercent(a ? i.from_max : i.max) - t),
                (t = this.toFixed(t - (this.coords.p_handle / 100) * t)),
                (e = this.toFixed(e - (this.coords.p_handle / 100) * e)),
                (t += this.coords.p_handle / 2),
                (s.shad_from[0].style.display = "block"),
                (s.shad_from[0].style.left = t + "%"),
                (s.shad_from[0].style.width = e + "%"))
              : (s.shad_from[0].style.display = "none"),
            i.to_shadow && (n || r)
              ? ((n = this.convertToPercent(n ? i.to_min : i.min)),
                (i = this.convertToPercent(r ? i.to_max : i.max) - n),
                (n = this.toFixed(n - (this.coords.p_handle / 100) * n)),
                (i = this.toFixed(i - (this.coords.p_handle / 100) * i)),
                (n += this.coords.p_handle / 2),
                (s.shad_to[0].style.display = "block"),
                (s.shad_to[0].style.left = n + "%"),
                (s.shad_to[0].style.width = i + "%"))
              : (s.shad_to[0].style.display = "none"));
      },
      writeToInput: function () {
        "single" === this.options.type
          ? (this.options.values.length ? this.$cache.input.prop("value", this.result.from_value) : this.$cache.input.prop("value", this.result.from), this.$cache.input.data("from", this.result.from))
          : (this.options.values.length
              ? this.$cache.input.prop("value", this.result.from_value + this.options.input_values_separator + this.result.to_value)
              : this.$cache.input.prop("value", this.result.from + this.options.input_values_separator + this.result.to),
            this.$cache.input.data("from", this.result.from),
            this.$cache.input.data("to", this.result.to));
      },
      callOnStart: function () {
        this.writeToInput(), this.options.onStart && "function" == typeof this.options.onStart && (this.options.scope ? this.options.onStart.call(this.options.scope, this.result) : this.options.onStart(this.result));
      },
      callOnChange: function () {
        this.writeToInput(), this.options.onChange && "function" == typeof this.options.onChange && (this.options.scope ? this.options.onChange.call(this.options.scope, this.result) : this.options.onChange(this.result));
      },
      callOnFinish: function () {
        this.writeToInput(), this.options.onFinish && "function" == typeof this.options.onFinish && (this.options.scope ? this.options.onFinish.call(this.options.scope, this.result) : this.options.onFinish(this.result));
      },
      callOnUpdate: function () {
        this.writeToInput(), this.options.onUpdate && "function" == typeof this.options.onUpdate && (this.options.scope ? this.options.onUpdate.call(this.options.scope, this.result) : this.options.onUpdate(this.result));
      },
      toggleInput: function () {
        this.$cache.input.toggleClass("irs-hidden-input"), this.has_tab_index ? this.$cache.input.prop("tabindex", -1) : this.$cache.input.removeProp("tabindex"), (this.has_tab_index = !this.has_tab_index);
      },
      convertToPercent: function (t, e) {
        var i = this.options.max - this.options.min,
          s = i / 100;
        return i ? ((s = (e ? t : t - this.options.min) / s), this.toFixed(s)) : ((this.no_diapason = !0), 0);
      },
      convertToValue: function (t) {
        var e,
          i,
          s = this.options.min,
          o = this.options.max,
          a = s.toString().split(".")[1],
          n = o.toString().split(".")[1],
          r = 0,
          l = 0;
        if (0 === t) return this.options.min;
        if (100 === t) return this.options.max;
        a && (r = e = a.length), n && (r = i = n.length), e && i && (r = i <= e ? e : i), s < 0 && ((s = +(s + (l = Math.abs(s))).toFixed(r)), (o = +(o + l).toFixed(r)));
        var t = ((o - s) / 100) * t + s,
          s = this.options.step.toString().split(".")[1],
          t = s ? +t.toFixed(s.length) : ((t /= this.options.step), +(t *= this.options.step).toFixed(0));
        return l && (t -= l), (t = s ? +t.toFixed(s.length) : this.toFixed(t)) < this.options.min ? (t = this.options.min) : t > this.options.max && (t = this.options.max), t;
      },
      calcWithStep: function (t) {
        var e = Math.round(t / this.coords.p_step) * this.coords.p_step;
        return 100 < e && (e = 100), 100 === t && (e = 100), this.toFixed(e);
      },
      checkMinInterval: function (t, e, i) {
        var s,
          o = this.options;
        return o.min_interval
          ? ((s = this.convertToValue(t)), (e = this.convertToValue(e)), "from" === i ? e - s < o.min_interval && (s = e - o.min_interval) : s - e < o.min_interval && (s = e + o.min_interval), this.convertToPercent(s))
          : t;
      },
      checkMaxInterval: function (t, e, i) {
        var s,
          o = this.options;
        return o.max_interval
          ? ((s = this.convertToValue(t)), (e = this.convertToValue(e)), "from" === i ? e - s > o.max_interval && (s = e - o.max_interval) : s - e > o.max_interval && (s = e + o.max_interval), this.convertToPercent(s))
          : t;
      },
      checkDiapason: function (t, e, i) {
        var s = this.convertToValue(t),
          t = this.options;
        return "number" != typeof e && (e = t.min), "number" != typeof i && (i = t.max), s < e && (s = e), i < s && (s = i), this.convertToPercent(s);
      },
      toFixed: function (t) {
        return +t.toFixed(20);
      },
      _prettify: function (t) {
        return this.options.prettify_enabled ? (this.options.prettify && "function" == typeof this.options.prettify ? this.options : this).prettify(t) : t;
      },
      prettify: function (t) {
        return t.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + this.options.prettify_separator);
      },
      checkEdges: function (t, e) {
        return this.options.force_edges && (t < 0 ? (t = 0) : 100 - e < t && (t = 100 - e)), this.toFixed(t);
      },
      validate: function () {
        var t,
          e,
          i = this.options,
          s = this.result,
          o = i.values,
          a = o.length;
        if (
          ("string" == typeof i.min && (i.min = +i.min),
          "string" == typeof i.max && (i.max = +i.max),
          "string" == typeof i.from && (i.from = +i.from),
          "string" == typeof i.to && (i.to = +i.to),
          "string" == typeof i.step && (i.step = +i.step),
          "string" == typeof i.from_min && (i.from_min = +i.from_min),
          "string" == typeof i.from_max && (i.from_max = +i.from_max),
          "string" == typeof i.to_min && (i.to_min = +i.to_min),
          "string" == typeof i.to_max && (i.to_max = +i.to_max),
          "string" == typeof i.grid_num && (i.grid_num = +i.grid_num),
          i.max < i.min && (i.max = i.min),
          a)
        )
          for (i.p_values = [], i.min = 0, i.max = a - 1, i.step = 1, i.grid_num = i.max, i.grid_snap = !0, e = 0; e < a; e++) (t = +o[e]), (t = isNaN(t) ? o[e] : ((o[e] = t), this._prettify(t))), i.p_values.push(t);
        ("number" == typeof i.from && !isNaN(i.from)) || (i.from = i.min),
          ("number" == typeof i.to && !isNaN(i.to)) || (i.to = i.max),
          "single" === i.type
            ? (i.from < i.min && (i.from = i.min), i.from > i.max && (i.from = i.max))
            : (i.from < i.min && (i.from = i.min),
              i.from > i.max && (i.from = i.max),
              i.to < i.min && (i.to = i.min),
              i.to > i.max && (i.to = i.max),
              this.update_check.from && (this.update_check.from !== i.from && i.from > i.to && (i.from = i.to), this.update_check.to !== i.to && i.to < i.from && (i.to = i.from)),
              i.from > i.to && (i.from = i.to),
              i.to < i.from && (i.to = i.from)),
          ("number" != typeof i.step || isNaN(i.step) || !i.step || i.step < 0) && (i.step = 1),
          "number" == typeof i.from_min && i.from < i.from_min && (i.from = i.from_min),
          "number" == typeof i.from_max && i.from > i.from_max && (i.from = i.from_max),
          "number" == typeof i.to_min && i.to < i.to_min && (i.to = i.to_min),
          "number" == typeof i.to_max && i.from > i.to_max && (i.to = i.to_max),
          s && (s.min !== i.min && (s.min = i.min), s.max !== i.max && (s.max = i.max), (s.from < s.min || s.from > s.max) && (s.from = i.from), (s.to < s.min || s.to > s.max) && (s.to = i.to)),
          ("number" != typeof i.min_interval || isNaN(i.min_interval) || !i.min_interval || i.min_interval < 0) && (i.min_interval = 0),
          ("number" != typeof i.max_interval || isNaN(i.max_interval) || !i.max_interval || i.max_interval < 0) && (i.max_interval = 0),
          i.min_interval && i.min_interval > i.max - i.min && (i.min_interval = i.max - i.min),
          i.max_interval && i.max_interval > i.max - i.min && (i.max_interval = i.max - i.min);
      },
      decorate: function (t, e) {
        var i = "",
          s = this.options;
        return s.prefix && (i += s.prefix), (i += t), s.max_postfix && ((s.values.length && t === s.p_values[s.max]) || e === s.max) && ((i += s.max_postfix), s.postfix && (i += " ")), s.postfix && (i += s.postfix), i;
      },
      updateFrom: function () {
        (this.result.from = this.options.from),
          (this.result.from_percent = this.convertToPercent(this.result.from)),
          (this.result.from_pretty = this._prettify(this.result.from)),
          this.options.values && (this.result.from_value = this.options.values[this.result.from]);
      },
      updateTo: function () {
        (this.result.to = this.options.to),
          (this.result.to_percent = this.convertToPercent(this.result.to)),
          (this.result.to_pretty = this._prettify(this.result.to)),
          this.options.values && (this.result.to_value = this.options.values[this.result.to]);
      },
      updateResult: function () {
        (this.result.min = this.options.min), (this.result.max = this.options.max), this.updateFrom(), this.updateTo();
      },
      appendGrid: function () {
        if (this.options.grid) {
          var t,
            e,
            i,
            s,
            o,
            a,
            n = this.options,
            r = n.max - n.min,
            l = n.grid_num,
            h = 0,
            c = 4,
            d = "";
          for (this.calcGridMargin(), n.grid_snap && (l = r / n.step), 50 < l && (l = 50), i = this.toFixed(100 / l), 4 < l && (c = 3), 7 < l && (c = 2), 14 < l && (c = 1), 28 < l && (c = 0), t = 0; t < l + 1; t++) {
            for (s = c, 100 < (h = this.toFixed(i * t)) && (h = 100), o = ((this.coords.big[t] = h) - i * (t - 1)) / (s + 1), e = 1; e <= s && 0 !== h; e++)
              d += '<span class="irs-grid-pol small" style="left: ' + this.toFixed(h - o * e) + '%"></span>';
            (d += '<span class="irs-grid-pol" style="left: ' + h + '%"></span>'),
              (a = this.convertToValue(h)),
              (d += '<span class="irs-grid-text js-grid-text-' + t + '" style="left: ' + h + '%">' + (a = n.values.length ? n.p_values[a] : this._prettify(a)) + "</span>");
          }
          (this.coords.big_num = Math.ceil(l + 1)), this.$cache.cont.addClass("irs-with-grid"), this.$cache.grid.html(d), this.cacheGridLabels();
        }
      },
      cacheGridLabels: function () {
        for (var t, e = this.coords.big_num, i = 0; i < e; i++) (t = this.$cache.grid.find(".js-grid-text-" + i)), this.$cache.grid_labels.push(t);
        this.calcGridLabels();
      },
      calcGridLabels: function () {
        for (var t, e = [], i = [], s = this.coords.big_num, o = 0; o < s; o++)
          (this.coords.big_w[o] = this.$cache.grid_labels[o].outerWidth(!1)),
            (this.coords.big_p[o] = this.toFixed((this.coords.big_w[o] / this.coords.w_rs) * 100)),
            (this.coords.big_x[o] = this.toFixed(this.coords.big_p[o] / 2)),
            (e[o] = this.toFixed(this.coords.big[o] - this.coords.big_x[o])),
            (i[o] = this.toFixed(e[o] + this.coords.big_p[o]));
        for (
          this.options.force_edges &&
            (e[0] < -this.coords.grid_gap && ((e[0] = -this.coords.grid_gap), (i[0] = this.toFixed(e[0] + this.coords.big_p[0])), (this.coords.big_x[0] = this.coords.grid_gap)),
            i[s - 1] > 100 + this.coords.grid_gap &&
              ((i[s - 1] = 100 + this.coords.grid_gap), (e[s - 1] = this.toFixed(i[s - 1] - this.coords.big_p[s - 1])), (this.coords.big_x[s - 1] = this.toFixed(this.coords.big_p[s - 1] - this.coords.grid_gap)))),
            this.calcGridCollision(2, e, i),
            this.calcGridCollision(4, e, i),
            o = 0;
          o < s;
          o++
        )
          (t = this.$cache.grid_labels[o][0]), this.coords.big_x[o] !== Number.POSITIVE_INFINITY && (t.style.marginLeft = -this.coords.big_x[o] + "%");
      },
      calcGridCollision: function (t, e, i) {
        for (var s, o, a = this.coords.big_num, n = 0; n < a && !(a <= (s = n + t / 2)); n += t) (o = this.$cache.grid_labels[s][0]), i[n] <= e[s] ? (o.style.visibility = "visible") : (o.style.visibility = "hidden");
      },
      calcGridMargin: function () {
        this.options.grid_margin &&
          ((this.coords.w_rs = this.$cache.rs.outerWidth(!1)),
          this.coords.w_rs &&
            ("single" === this.options.type ? (this.coords.w_handle = this.$cache.s_single.outerWidth(!1)) : (this.coords.w_handle = this.$cache.s_from.outerWidth(!1)),
            (this.coords.p_handle = this.toFixed((this.coords.w_handle / this.coords.w_rs) * 100)),
            (this.coords.grid_gap = this.toFixed(this.coords.p_handle / 2 - 0.1)),
            (this.$cache.grid[0].style.width = this.toFixed(100 - this.coords.p_handle) + "%"),
            (this.$cache.grid[0].style.left = this.coords.grid_gap + "%")));
      },
      update: function (t) {
        this.input &&
          ((this.is_update = !0),
          (this.options.from = this.result.from),
          (this.options.to = this.result.to),
          (this.update_check.from = this.result.from),
          (this.update_check.to = this.result.to),
          (this.options = n.extend(this.options, t)),
          this.validate(),
          this.updateResult(t),
          this.toggleInput(),
          this.remove(),
          this.init(!0));
      },
      reset: function () {
        this.input && (this.updateResult(), this.update());
      },
      destroy: function () {
        this.input && (this.toggleInput(), this.$cache.input.prop("readonly", !1), n.data(this.input, "ionRangeSlider", null), this.remove(), (this.input = null), (this.options = null));
      },
    }),
      (n.fn.ionRangeSlider = function (t) {
        return this.each(function () {
          n.data(this, "ionRangeSlider") || n.data(this, "ionRangeSlider", new o(this, t, i++));
        });
      }),
      (function () {
        for (var a = 0, t = ["ms", "moz", "webkit", "o"], e = 0; e < t.length && !l.requestAnimationFrame; ++e)
          (l.requestAnimationFrame = l[t[e] + "RequestAnimationFrame"]), (l.cancelAnimationFrame = l[t[e] + "CancelAnimationFrame"] || l[t[e] + "CancelRequestAnimationFrame"]);
        l.requestAnimationFrame ||
          (l.requestAnimationFrame = function (t, e) {
            var i = new Date().getTime(),
              s = Math.max(0, 16 - (i - a)),
              o = l.setTimeout(function () {
                t(i + s);
              }, s);
            return (a = i + s), o;
          }),
          l.cancelAnimationFrame ||
            (l.cancelAnimationFrame = function (t) {
              clearTimeout(t);
            });
      })();
  }),
  jQuery(document).ready(function (m) {
    function l() {
      m('[data-pafe-conditional-logic-form] [name^="form_fields"]').each(function () {
        if (null != m(this).attr("id")) {
          for (
            var t = m(this).closest(".elementor-field-group"),
              e = m(this).attr("name").replace("form_fields[", "").replace("]", ""),
              i = m(this).closest("[data-pafe-conditional-logic-form]"),
              s = i.data("pafe-conditional-logic-form-speed"),
              o = i.data("pafe-conditional-logic-form-easing"),
              a = i.data("pafe-conditional-logic-form"),
              n = 0,
              r = 0,
              l = "",
              h = 0;
            h < a.length;
            h++
          ) {
            var c = a[h].pafe_conditional_logic_form_show,
              d = a[h].pafe_conditional_logic_form_if.trim(),
              p = a[h].pafe_conditional_logic_form_comparison_operators,
              f = a[h].pafe_conditional_logic_form_value,
              u = a[h].pafe_conditional_logic_form_type;
            "number" == u && (f = parseInt(f)),
              e == c &&
                (r++,
                (l = a[h].pafe_conditional_logic_form_and_or_operators),
                "" == d ||
                  (0 < (c = m('[data-pafe-conditional-logic-form] [name="form_fields[' + d + ']"]')).length &&
                    (-1 !== (d = c.val().trim()).indexOf(";") && (d = (d = d.split(";"))[0]),
                    "number" == u && (d = parseInt(d)),
                    "not-empty" == p && "" == d && (n += 1),
                    "empty" == p && "" != d && (n += 1),
                    "=" == p && d != f && (n += 1),
                    "!=" == p && d == f && (n += 1),
                    ">" == p && d <= f && (n += 1),
                    ">=" == p && d < f && (n += 1),
                    "<" == p && f <= d && (n += 1),
                    "<=" == p && f < d && (n += 1),
                    "checked" == p && (c.prop("checked") || (n += 1)),
                    "unchecked" == p && c.prop("checked") && (n += 1))));
          }
          "or" == l && (n < r ? t.slideDown(s, o) : t.slideUp(s, o)), "and" == l && (0 == n ? t.slideDown(s, o) : t.slideUp(s, o));
        }
      });
    }
    m("[data-pafe-range-slider]").each(function () {
      if ("popup" != m(this).closest("[data-elementor-type]").attr("data-elementor-type"))
        for (var t = m(this).data("pafe-range-slider"), e = 0; e < t.length; e++) {
          for (var i = m(this).find('[name="form_fields[' + t[e].pafe_range_slider_field_custom_id + ']"]'), s = {}, o = t[e].pafe_range_slider_field_options.split(","), a = 0; a < o.length; a++) {
            var n,
              r = o[a].trim().split(":");
            null != r[0] && null != r[1] && ((n = r[1].trim().replace('"', "").replace('"', "")), (s[r[0]] = "false" == n || "true" == n ? "false" != n : n));
          }
          0 < i.length &&
            ((s.onStart = function (t) {
              l();
            }),
            i.ionRangeSlider(s));
        }
    }),
      jQuery(document).on("elementor/popup/show", function () {
        m("[data-pafe-range-slider]").each(function () {
          if ("popup" == m(this).closest("[data-elementor-type]").attr("data-elementor-type"))
            for (var t = m(this).data("pafe-range-slider"), e = 0; e < t.length; e++) {
              for (var i = m(this).find('[name="form_fields[' + t[e].pafe_range_slider_field_custom_id + ']"]'), s = {}, o = t[e].pafe_range_slider_field_options.split(","), a = 0; a < o.length; a++) {
                var n,
                  r = o[a].trim().split(":");
                null != r[0] && null != r[1] && ((n = r[1].trim().replace('"', "").replace('"', "")), (s[r[0]] = "false" == n || "true" == n ? "false" != n : n));
              }
              0 < i.length &&
                ((s.onStart = function (t) {
                  l();
                }),
                i.ionRangeSlider(s));
            }
        });
      });
  }),
  (function (t, e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(t.jQuery);
  })(this, function (g) {
    "use strict";
    function i(t) {
      return h.webkit && !t
        ? { height: 0, width: 0 }
        : (h.data.outer ||
            ((t = { border: "none", "box-sizing": "content-box", height: "200px", margin: "0", padding: "0", width: "200px" }),
            (h.data.inner = g("<div>").css(g.extend({}, t))),
            (h.data.outer = g("<div>")
              .css(g.extend({ left: "-1000px", overflow: "scroll", position: "absolute", top: "-1000px" }, t))
              .append(h.data.inner)
              .appendTo("body"))),
          h.data.outer.scrollLeft(1e3).scrollTop(1e3),
          { height: Math.ceil(h.data.outer.offset().top - h.data.inner.offset().top || 0), width: Math.ceil(h.data.outer.offset().left - h.data.inner.offset().left || 0) });
    }
    function v(t) {
      t = t.originalEvent;
      return (!t.axis || t.axis !== t.HORIZONTAL_AXIS) && !t.wheelDeltaX;
    }
    var h = {
      data: { index: 0, name: "scrollbar" },
      macosx: /mac/i.test(navigator.platform),
      mobile: /android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent),
      overlay: null,
      scroll: null,
      scrolls: [],
      webkit: /webkit/i.test(navigator.userAgent) && !/edge\/\d+/i.test(navigator.userAgent),
    };
    h.scrolls.add = function (t) {
      this.remove(t).push(t);
    };
    function t(t) {
      var e;
      h.scroll ||
        ((h.overlay = !((e = i(!0)).height || e.width)),
        (h.scroll = i()),
        c(),
        g(window).resize(function () {
          var t,
            e = !1;
          h.scroll && (h.scroll.height || h.scroll.width) && (((t = i()).height === h.scroll.height && t.width === h.scroll.width) || ((h.scroll = t), (e = !0))), c(e);
        })),
        (this.container = t),
        (this.namespace = ".scrollbar_" + h.data.index++),
        (this.options = g.extend({}, s, window.jQueryScrollbarOptions || {})),
        (this.scrollTo = null),
        (this.scrollx = {}),
        (this.scrolly = {}),
        t.data(h.data.name, this),
        h.scrolls.add(this);
    }
    var s = {
      autoScrollSize: !0,
      autoUpdate: !0,
      debug: !(h.scrolls.remove = function (t) {
        for (; 0 <= g.inArray(t, this); ) this.splice(g.inArray(t, this), 1);
        return this;
      }),
      disableBodyScroll: !1,
      duration: 200,
      ignoreMobile: !1,
      ignoreOverlay: !1,
      scrollStep: 30,
      showArrows: !1,
      stepScrolling: !0,
      scrollx: null,
      scrolly: null,
      onDestroy: null,
      onInit: null,
      onScroll: null,
      onUpdate: null,
    };
    t.prototype = {
      destroy: function () {
        var t, e;
        this.wrapper &&
          (this.container.removeData(h.data.name),
          h.scrolls.remove(this),
          (t = this.container.scrollLeft()),
          (e = this.container.scrollTop()),
          this.container.insertBefore(this.wrapper).css({ height: "", margin: "", "max-height": "" }).removeClass("scroll-content scroll-scrollx_visible scroll-scrolly_visible").off(this.namespace).scrollLeft(t).scrollTop(e),
          this.scrollx.scroll.removeClass("scroll-scrollx_visible").find("div").andSelf().off(this.namespace),
          this.scrolly.scroll.removeClass("scroll-scrolly_visible").find("div").andSelf().off(this.namespace),
          this.wrapper.remove(),
          g(document).add("body").off(this.namespace),
          g.isFunction(this.options.onDestroy) && this.options.onDestroy.apply(this, [this.container]));
      },
      init: function (t) {
        var p = this,
          f = this.container,
          s = this.containerWrapper || f,
          u = this.namespace,
          m = g.extend(this.options, t || {}),
          _ = { x: this.scrollx, y: this.scrolly },
          i = this.wrapper,
          e = { scrollLeft: f.scrollLeft(), scrollTop: f.scrollTop() };
        if ((h.mobile && m.ignoreMobile) || (h.overlay && m.ignoreOverlay) || (h.macosx && !h.webkit)) return !1;
        i
          ? s.css({ height: "auto", "margin-bottom": -1 * h.scroll.height + "px", "margin-right": -1 * h.scroll.width + "px", "max-height": "" })
          : ((this.wrapper = i =
              g("<div>")
                .addClass("scroll-wrapper scrollbar-outer")
                .addClass(f.attr("class"))
                .css("position", "absolute" == f.css("position") ? "absolute" : "relative")
                .insertBefore(f)
                .append(f)),
            f.is("textarea") && ((this.containerWrapper = s = g("<div>").insertBefore(f).append(f)), i.addClass("scroll-textarea")),
            s.addClass("scroll-content").css({ height: "auto", "margin-bottom": -1 * h.scroll.height + "px", "margin-right": -1 * h.scroll.width + "px", "max-height": "" }),
            f.on("scroll" + u, function (t) {
              g.isFunction(m.onScroll) &&
                m.onScroll.call(p, { maxScroll: _.y.maxScrollOffset, scroll: f.scrollTop(), size: _.y.size, visible: _.y.visible }, { maxScroll: _.x.maxScrollOffset, scroll: f.scrollLeft(), size: _.x.size, visible: _.x.visible }),
                _.x.isVisible && _.x.scroll.bar.css("left", f.scrollLeft() * _.x.kx + "px"),
                _.y.isVisible && _.y.scroll.bar.css("top", f.scrollTop() * _.y.kx + "px");
            }),
            i.on("scroll" + u, function () {
              i.scrollTop(0).scrollLeft(0);
            }),
            m.disableBodyScroll &&
              ((t = function (t) {
                v(t) ? _.y.isVisible && _.y.mousewheel(t) : _.x.isVisible && _.x.mousewheel(t);
              }),
              i.on("MozMousePixelScroll" + u, t),
              i.on("mousewheel" + u, t),
              h.mobile &&
                i.on("touchstart" + u, function (t) {
                  var t = (t.originalEvent.touches && t.originalEvent.touches[0]) || t,
                    i = t.pageX,
                    s = t.pageY,
                    o = f.scrollLeft(),
                    a = f.scrollTop();
                  g(document).on("touchmove" + u, function (t) {
                    var e = (t.originalEvent.targetTouches && t.originalEvent.targetTouches[0]) || t;
                    f.scrollLeft(o + i - e.pageX), f.scrollTop(a + s - e.pageY), t.preventDefault();
                  }),
                    g(document).on("touchend" + u, function () {
                      g(document).off(u);
                    });
                })),
            g.isFunction(m.onInit) && m.onInit.apply(this, [f])),
          g.each(_, function (o, a) {
            function n() {
              var t = f[h]();
              f[h](t + c), 1 == l && d <= t + c && (t = f[h]()), -1 == l && t + c <= d && (t = f[h]()), f[h]() == t && r && r();
            }
            var r = null,
              l = 1,
              h = "x" === o ? "scrollLeft" : "scrollTop",
              c = m.scrollStep,
              d = 0;
            a.scroll ||
              ((a.scroll = p._getScroll(m["scroll" + o]).addClass("scroll-" + o)),
              m.showArrows && a.scroll.addClass("scroll-element_arrows_visible"),
              (a.mousewheel = function (t) {
                if (!a.isVisible || ("x" === o && v(t))) return !0;
                if ("y" === o && !v(t)) return _.x.mousewheel(t), !0;
                var e = -1 * t.originalEvent.wheelDelta || t.originalEvent.detail,
                  i = a.size - a.visible - a.offset;
                return (
                  ((0 < e && d < i) || (e < 0 && 0 < d)) &&
                    ((d += e) < 0 && (d = 0),
                    i < d && (d = i),
                    (p.scrollTo = p.scrollTo || {}),
                    (p.scrollTo[h] = d),
                    setTimeout(function () {
                      p.scrollTo &&
                        (f.stop().animate(p.scrollTo, 240, "linear", function () {
                          d = f[h]();
                        }),
                        (p.scrollTo = null));
                    }, 1)),
                  t.preventDefault(),
                  !1
                );
              }),
              a.scroll
                .on("MozMousePixelScroll" + u, a.mousewheel)
                .on("mousewheel" + u, a.mousewheel)
                .on("mouseenter" + u, function () {
                  d = f[h]();
                }),
              a.scroll.find(".scroll-arrow, .scroll-element_track").on("mousedown" + u, function (t) {
                if (1 != t.which) return !0;
                l = 1;
                var e = {
                    eventOffset: t["x" === o ? "pageX" : "pageY"],
                    maxScrollValue: a.size - a.visible - a.offset,
                    scrollbarOffset: a.scroll.bar.offset()["x" === o ? "left" : "top"],
                    scrollbarSize: a.scroll.bar["x" === o ? "outerWidth" : "outerHeight"](),
                  },
                  i = 0,
                  s = 0;
                return (
                  (d = g(this).hasClass("scroll-arrow")
                    ? ((l = g(this).hasClass("scroll-arrow_more") ? 1 : -1), (c = m.scrollStep * l), 0 < l ? e.maxScrollValue : 0)
                    : ((l = e.scrollbarOffset + e.scrollbarSize < e.eventOffset ? 1 : e.eventOffset < e.scrollbarOffset ? -1 : 0),
                      (c = Math.round(0.75 * a.visible) * l),
                      (d = e.eventOffset - e.scrollbarOffset - (m.stepScrolling ? (1 == l ? e.scrollbarSize : 0) : Math.round(e.scrollbarSize / 2))),
                      f[h]() + d / a.kx)),
                  (p.scrollTo = p.scrollTo || {}),
                  (p.scrollTo[h] = m.stepScrolling ? f[h]() + c : d),
                  m.stepScrolling &&
                    ((r = function () {
                      (d = f[h]()), clearInterval(s), clearTimeout(i), (s = i = 0);
                    }),
                    (i = setTimeout(function () {
                      s = setInterval(n, 40);
                    }, m.duration + 100))),
                  setTimeout(function () {
                    p.scrollTo && (f.animate(p.scrollTo, m.duration), (p.scrollTo = null));
                  }, 1),
                  p._handleMouseDown(r, t)
                );
              }),
              a.scroll.bar.on("mousedown" + u, function (t) {
                if (1 != t.which) return !0;
                var e = t["x" === o ? "pageX" : "pageY"],
                  i = f[h]();
                return (
                  a.scroll.addClass("scroll-draggable"),
                  g(document).on("mousemove" + u, function (t) {
                    t = parseInt((t["x" === o ? "pageX" : "pageY"] - e) / a.kx, 10);
                    f[h](i + t);
                  }),
                  p._handleMouseDown(function () {
                    a.scroll.removeClass("scroll-draggable"), (d = f[h]());
                  }, t)
                );
              }));
          }),
          g.each(_, function (t, e) {
            var i = "scroll-scroll" + t + "_visible",
              t = "x" == t ? _.y : _.x;
            e.scroll.removeClass(i), t.scroll.removeClass(i), s.removeClass(i);
          }),
          g.each(_, function (t, e) {
            g.extend(e, "x" == t ? { offset: parseInt(f.css("left"), 10) || 0, size: f.prop("scrollWidth"), visible: i.width() } : { offset: parseInt(f.css("top"), 10) || 0, size: f.prop("scrollHeight"), visible: i.height() });
          }),
          this._updateScroll("x", this.scrollx),
          this._updateScroll("y", this.scrolly),
          g.isFunction(m.onUpdate) && m.onUpdate.apply(this, [f]),
          g.each(_, function (t, e) {
            var i = "x" === t ? "left" : "top",
              s = "x" === t ? "outerWidth" : "outerHeight",
              o = "x" === t ? "width" : "height",
              a = parseInt(f.css(i), 10) || 0,
              t = e.size,
              a = e.visible + a,
              i = e.scroll.size[s]() + (parseInt(e.scroll.size.css(i), 10) || 0);
            m.autoScrollSize && ((e.scrollbarSize = parseInt((i * a) / t, 10)), e.scroll.bar.css(o, e.scrollbarSize + "px")), (e.scrollbarSize = e.scroll.bar[s]()), (e.kx = (i - e.scrollbarSize) / (t - a) || 1), (e.maxScrollOffset = t - a);
          }),
          f.scrollLeft(e.scrollLeft).scrollTop(e.scrollTop).trigger("scroll");
      },
      _getScroll: function (t) {
        var e = {
          advanced: [
            '<div class="scroll-element">',
            '<div class="scroll-element_corner"></div>',
            '<div class="scroll-arrow scroll-arrow_less"></div>',
            '<div class="scroll-arrow scroll-arrow_more"></div>',
            '<div class="scroll-element_outer">',
            '<div class="scroll-element_size"></div>',
            '<div class="scroll-element_inner-wrapper">',
            '<div class="scroll-element_inner scroll-element_track">',
            '<div class="scroll-element_inner-bottom"></div>',
            "</div>",
            "</div>",
            '<div class="scroll-bar">',
            '<div class="scroll-bar_body">',
            '<div class="scroll-bar_body-inner"></div>',
            "</div>",
            '<div class="scroll-bar_bottom"></div>',
            '<div class="scroll-bar_center"></div>',
            "</div>",
            "</div>",
            "</div>",
          ].join(""),
          simple: ['<div class="scroll-element">', '<div class="scroll-element_outer">', '<div class="scroll-element_size"></div>', '<div class="scroll-element_track"></div>', '<div class="scroll-bar"></div>', "</div>", "</div>"].join(""),
        };
        return (
          e[t] && (t = e[t]), (t = "string" == typeof (t = t || e.simple) ? g(t).appendTo(this.wrapper) : g(t)), g.extend(t, { bar: t.find(".scroll-bar"), size: t.find(".scroll-element_size"), track: t.find(".scroll-element_track") }), t
        );
      },
      _handleMouseDown: function (t, e) {
        var i = this.namespace;
        return (
          g(document).on("blur" + i, function () {
            g(document).add("body").off(i), t && t();
          }),
          g(document).on("dragstart" + i, function (t) {
            return t.preventDefault(), !1;
          }),
          g(document).on("mouseup" + i, function () {
            g(document).add("body").off(i), t && t();
          }),
          g("body").on("selectstart" + i, function (t) {
            return t.preventDefault(), !1;
          }),
          e && e.preventDefault(),
          !1
        );
      },
      _updateScroll: function (t, e) {
        var i = this.container,
          s = this.containerWrapper || i,
          o = "scroll-scroll" + t + "_visible",
          a = "x" === t ? this.scrolly : this.scrollx,
          n = parseInt(this.container.css("x" === t ? "left" : "top"), 10) || 0,
          r = this.wrapper,
          l = e.size,
          n = e.visible + n;
        (e.isVisible = 1 < l - n),
          e.isVisible ? (e.scroll.addClass(o), a.scroll.addClass(o), s.addClass(o)) : (e.scroll.removeClass(o), a.scroll.removeClass(o), s.removeClass(o)),
          "y" === t && (i.is("textarea") || l < n ? s.css({ height: n + h.scroll.height + "px", "max-height": "none" }) : s.css({ "max-height": n + h.scroll.height + "px" })),
          (e.size == i.prop("scrollWidth") && a.size == i.prop("scrollHeight") && e.visible == r.width() && a.visible == r.height() && e.offset == (parseInt(i.css("left"), 10) || 0) && a.offset == (parseInt(i.css("top"), 10) || 0)) ||
            (g.extend(this.scrollx, { offset: parseInt(i.css("left"), 10) || 0, size: i.prop("scrollWidth"), visible: r.width() }),
            g.extend(this.scrolly, { offset: parseInt(i.css("top"), 10) || 0, size: this.container.prop("scrollHeight"), visible: r.height() }),
            this._updateScroll("x" === t ? "y" : "x", a));
      },
    };
    var o = t;
    (g.fn.scrollbar = function (i, s) {
      return (
        "string" != typeof i && ((s = i), (i = "init")),
        void 0 === s && (s = []),
        g.isArray(s) || (s = [s]),
        this.not("body, .scroll-wrapper").each(function () {
          var t = g(this),
            e = t.data(h.data.name);
          (!e && "init" !== i) || ((e = e || new o(t))[i] && e[i].apply(e, s));
        }),
        this
      );
    }),
      (g.fn.scrollbar.options = s);
    var l,
      a,
      c =
        ((l = 0),
        function (t) {
          for (var e, i, s, o, a, n, r = 0; r < h.scrolls.length; r++)
            (e = (s = h.scrolls[r]).container),
              (i = s.options),
              (o = s.wrapper),
              (a = s.scrollx),
              (n = s.scrolly),
              (t || (i.autoUpdate && o && o.is(":visible") && (e.prop("scrollWidth") != a.size || e.prop("scrollHeight") != n.size || o.width() != a.visible || o.height() != n.visible))) &&
                (s.init(),
                i.debug &&
                  (window.console &&
                    console.log(
                      {
                        scrollHeight: e.prop("scrollHeight") + ":" + s.scrolly.size,
                        scrollWidth: e.prop("scrollWidth") + ":" + s.scrollx.size,
                        visibleHeight: o.height() + ":" + s.scrolly.visible,
                        visibleWidth: o.width() + ":" + s.scrollx.visible,
                      },
                      !0
                    ),
                  0));
          clearTimeout(l), (l = setTimeout(c, 300));
        });
    window.angular &&
      (a = window.angular)
        .module("jQueryScrollbar", [])
        .provider("jQueryScrollbar", function () {
          var e = s;
          return {
            setOptions: function (t) {
              a.extend(e, t);
            },
            $get: function () {
              return { options: a.copy(e) };
            },
          };
        })
        .directive("jqueryScrollbar", [
          "jQueryScrollbar",
          "$parse",
          function (s, o) {
            return {
              restrict: "AC",
              link: function (t, e, i) {
                t = o(i.jqueryScrollbar)(t);
                e.scrollbar(t || s.options).on("$destroy", function () {
                  e.scrollbar("destroy");
                });
              },
            };
          },
        ]);
  }),
  jQuery(document).ready(function (i) {
    i("[data-pafe-scroll-box-with-custom-scrollbar]").scrollbar(),
      setTimeout(function () {
        "undefined" != typeof elementorFrontend &&
          void 0 !== elementorFrontend.documentsManager &&
          jQuery.each(elementorFrontend.documentsManager.documents, function (t, e) {
            e.getModal &&
              e.getModal().on("show", function () {
                i("[data-pafe-scroll-box-with-custom-scrollbar]").scrollbar();
              });
          });
      }, 1e3);
  }),
  jQuery(document).ready(function (e) {
    e(document).on("click", "[data-pafe-section-link]", function () {
      var t = e(this).data("pafe-section-link"),
        t = "on" == e(this).data("pafe-section-link-external") ? '<a href="' + t + '" target="_blank" data-pafe-section-link-a style="display:none"></a>' : '<a href="' + t + '" data-pafe-section-link-a style="display:none"></a>';
      0 == e(this).find("[data-pafe-section-link-a]").length && e(this).append(t), e(this).find("[data-pafe-section-link-a]")[0].click();
    });
  }),
  jQuery(document).ready(function (o) {
    var a = 0;
    o(window).on("load resize scroll", function () {
      var t, e, i, s;
      (t = o("[data-pafe-break-point-md]").data("pafe-break-point-md")),
        (e = o("[data-pafe-break-point-lg]").data("pafe-break-point-lg")),
        (i = o(window).scrollTop()),
        (s = window.innerWidth),
        e <= s &&
          (o("[data-pafe-sticky-header]").each(function () {
            null == o(this).data("pafe-sticky-header-on-desktop") &&
              (o("body").removeClass("pafe-sticky-header-on"),
              o(this).removeClass("pafe-sticky-header-fixed").removeClass("pafe-sticky-header-active"),
              o(this).find(".elementor-element").removeClass("pafe-sticky-header-active-element"),
              o(this).css({ top: 0 }));
          }),
          o("[data-pafe-sticky-header-on-desktop]").each(function () {
            var t = o(this).data("pafe-sticky-header-offset");
            i >= o(this).data("pafe-sticky-header-offset")
              ? (o(this).addClass("pafe-sticky-header-fixed"),
                ((0 == t && 0 < i) || 0 < t) &&
                  (o("body").addClass("pafe-sticky-header-on"),
                  o(this).addClass("pafe-sticky-header-active"),
                  o(this).find(".elementor-element").addClass("pafe-sticky-header-active-element"),
                  null != o(this).data("pafe-sticky-header-show-on-scroll-up") &&
                    (a < i
                      ? (o(this).removeClass("pafe-sticky-header-show-on-scroll-up"), o(this).css({ top: "-" + o(this).outerHeight() + "px", transition: "all 0.3s ease-in-out 0s" }))
                      : (o(this).addClass("pafe-sticky-header-show-on-scroll-up"), o(this).css({ top: 0, transition: "all 0.3s ease-in-out 0s" })))),
                0 == t &&
                  0 == i &&
                  (o("body").removeClass("pafe-sticky-header-on"),
                  o(this).removeClass("pafe-sticky-header-active"),
                  o(this).find(".elementor-element").removeClass("pafe-sticky-header-active-element"),
                  o(this).removeClass("pafe-sticky-header-show-on-scroll-up"),
                  o(this).css({ top: 0 })))
              : (o("body").removeClass("pafe-sticky-header-on"),
                o(this).removeClass("pafe-sticky-header-fixed").removeClass("pafe-sticky-header-active"),
                o(this).find(".elementor-element").removeClass("pafe-sticky-header-active-element"),
                o(this).removeClass("pafe-sticky-header-show-on-scroll-up"),
                o(this).css({ top: 0 })),
              o(this).find(".elementor-element").addClass("pafe-sticky-header-element");
          })),
        t <= s &&
          s < e &&
          (o("[data-pafe-sticky-header]").each(function () {
            null == o(this).data("pafe-sticky-header-on-tablet") &&
              (o("body").removeClass("pafe-sticky-header-on"),
              o(this).removeClass("pafe-sticky-header-fixed").removeClass("pafe-sticky-header-active"),
              o(this).find(".elementor-element").removeClass("pafe-sticky-header-active-element"),
              o(this).css({ top: 0 }));
          }),
          o("[data-pafe-sticky-header-on-tablet]").each(function () {
            var t = o(this).data("pafe-sticky-header-offset");
            i >= o(this).data("pafe-sticky-header-offset")
              ? (o(this).addClass("pafe-sticky-header-fixed"),
                ((0 == t && 0 < i) || 0 < t) &&
                  (o("body").addClass("pafe-sticky-header-on"),
                  o(this).addClass("pafe-sticky-header-active"),
                  o(this).find(".elementor-element").addClass("pafe-sticky-header-active-element"),
                  null != o(this).data("pafe-sticky-header-show-on-scroll-up") &&
                    (a < i
                      ? (o(this).removeClass("pafe-sticky-header-show-on-scroll-up"), o(this).css({ top: "-" + o(this).outerHeight() + "px", transition: "all 0.3s ease-in-out 0s" }))
                      : (o(this).addClass("pafe-sticky-header-show-on-scroll-up"), o(this).css({ top: 0, transition: "all 0.3s ease-in-out 0s" })))),
                0 == t &&
                  0 == i &&
                  (o("body").removeClass("pafe-sticky-header-on"), o(this).removeClass("pafe-sticky-header-active"), o(this).find(".elementor-element").removeClass("pafe-sticky-header-active-element"), o(this).css({ top: 0 })))
              : (o("body").removeClass("pafe-sticky-header-on"),
                o(this).removeClass("pafe-sticky-header-fixed").removeClass("pafe-sticky-header-active"),
                o(this).find(".elementor-element").removeClass("pafe-sticky-header-active-element"),
                o(this).css({ top: 0 })),
              o(this).find(".elementor-element").addClass("pafe-sticky-header-element");
          })),
        s < t &&
          (o("[data-pafe-sticky-header]").each(function () {
            null == o(this).data("pafe-sticky-header-on-mobile") &&
              (o("body").removeClass("pafe-sticky-header-on"),
              o(this).removeClass("pafe-sticky-header-fixed").removeClass("pafe-sticky-header-active"),
              o(this).find(".elementor-element").removeClass("pafe-sticky-header-active-element"),
              o(this).css({ top: 0 }));
          }),
          o("[data-pafe-sticky-header-on-mobile]").each(function () {
            var t = o(this).data("pafe-sticky-header-offset");
            i >= o(this).data("pafe-sticky-header-offset")
              ? (o(this).addClass("pafe-sticky-header-fixed"),
                ((0 == t && 0 < i) || 0 < t) &&
                  (o("body").addClass("pafe-sticky-header-on"),
                  o(this).addClass("pafe-sticky-header-active"),
                  o(this).find(".elementor-element").addClass("pafe-sticky-header-active-element"),
                  null != o(this).data("pafe-sticky-header-show-on-scroll-up") &&
                    (a < i
                      ? (o(this).removeClass("pafe-sticky-header-show-on-scroll-up"), o(this).css({ top: "-" + o(this).outerHeight() + "px", transition: "all 0.3s ease-in-out 0s" }))
                      : (o(this).addClass("pafe-sticky-header-show-on-scroll-up"), o(this).css({ top: 0, transition: "all 0.3s ease-in-out 0s" })))),
                0 == t &&
                  0 == i &&
                  (o("body").removeClass("pafe-sticky-header-on"), o(this).removeClass("pafe-sticky-header-active"), o(this).find(".elementor-element").removeClass("pafe-sticky-header-active-element"), o(this).css({ top: 0 })))
              : (o("body").removeClass("pafe-sticky-header-on"),
                o(this).removeClass("pafe-sticky-header-fixed").removeClass("pafe-sticky-header-active"),
                o(this).find(".elementor-element").removeClass("pafe-sticky-header-active-element"),
                o(this).css({ top: 0 })),
              o(this).find(".elementor-element").addClass("pafe-sticky-header-element");
          })),
        (a = i);
    });
  }),
  jQuery(document).ready(function (r) {
    r(document).on("click", '[data-pafe-toggle-content-type="trigger-open"]', function (t) {
      t.preventDefault();
      var e = r(this).data("pafe-toggle-content-slug"),
        i = r(document)
          .find('[data-pafe-toggle-content-type="content"][data-pafe-toggle-content-slug="' + e + '"]>div')
          .height(),
        s = r(document)
          .find('[data-pafe-toggle-content-type="content"][data-pafe-toggle-content-slug="' + e + '"]')
          .data("pafe-toggle-content-speed"),
        t = r(document)
          .find('[data-pafe-toggle-content-type="content"][data-pafe-toggle-content-slug="' + e + '"]')
          .data("pafe-toggle-content-easing");
      r(this).addClass("inactive"),
        r(document)
          .find('[data-pafe-toggle-content-type="trigger-close"][data-pafe-toggle-content-slug="' + e + '"]')
          .addClass("active"),
        r(document)
          .find('[data-pafe-toggle-content-type="content"][data-pafe-toggle-content-slug="' + e + '"]')
          .animate({ height: i + "px" }, s, t);
    }),
      r(document).on("click", '[data-pafe-toggle-content-type="trigger-close"]', function (t) {
        t.preventDefault();
        var e = r(this).data("pafe-toggle-content-slug"),
          i = r(document)
            .find('[data-pafe-toggle-content-type="content"][data-pafe-toggle-content-slug="' + e + '"]')
            .data("pafe-toggle-content-height"),
          s = r(document)
            .find('[data-pafe-toggle-content-type="content"][data-pafe-toggle-content-slug="' + e + '"]')
            .data("pafe-toggle-content-height-tablet"),
          o = r(document)
            .find('[data-pafe-toggle-content-type="content"][data-pafe-toggle-content-slug="' + e + '"]')
            .data("pafe-toggle-content-height-mobile"),
          a = window.innerWidth,
          n = r(document)
            .find('[data-pafe-toggle-content-type="content"][data-pafe-toggle-content-slug="' + e + '"]')
            .data("pafe-toggle-content-speed"),
          t = r(document)
            .find('[data-pafe-toggle-content-type="content"][data-pafe-toggle-content-slug="' + e + '"]')
            .data("pafe-toggle-content-easing");
        r(this).removeClass("active").addClass("inactive"),
          r(document)
            .find('[data-pafe-toggle-content-type="trigger-open"][data-pafe-toggle-content-slug="' + e + '"]')
            .removeClass("inactive"),
          a < r(".pafe-break-point").data("pafe-break-point-md") &&
            "" != o &&
            r(document)
              .find('[data-pafe-toggle-content-type="content"][data-pafe-toggle-content-slug="' + e + '"]')
              .animate({ height: o }, n, t),
          a >= r(".pafe-break-point").data("pafe-break-point-md") &&
            a < r(".pafe-break-point").data("pafe-break-point-lg") &&
            "" != s &&
            r(document)
              .find('[data-pafe-toggle-content-type="content"][data-pafe-toggle-content-slug="' + e + '"]')
              .animate({ height: s }, n, t),
          (a >= r(".pafe-break-point").data("pafe-break-point-lg") ||
            (a < r(".pafe-break-point").data("pafe-break-point-md") && "" == o) ||
            (a >= r(".pafe-break-point").data("pafe-break-point-md") && a < r(".pafe-break-point").data("pafe-break-point-lg") && "" == s)) &&
            r(document)
              .find('[data-pafe-toggle-content-type="content"][data-pafe-toggle-content-slug="' + e + '"]')
              .animate({ height: i }, n, t);
      });
  });
