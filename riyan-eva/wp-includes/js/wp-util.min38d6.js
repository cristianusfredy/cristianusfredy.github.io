/*! This file is auto-generated */
(window.wp = window.wp || {}),
  (function (s) {
    var t = "undefined" == typeof _wpUtilSettings ? {} : _wpUtilSettings;
    (wp.template = _.memoize(function (e) {
      var a,
        n = { evaluate: /<#([\s\S]+?)#>/g, interpolate: /\{\{\{([\s\S]+?)\}\}\}/g, escape: /\{\{([^\}]+?)\}\}(?!\})/g, variable: "data" };
      return function (t) {
        return (a = a || _.template(s("#tmpl-" + e).html(), n))(t);
      };
    })),
      (wp.ajax = {
        settings: t.ajax || {},
        post: function (t, e) {
          return wp.ajax.send({ data: _.isObject(t) ? t : _.extend(e || {}, { action: t }) });
        },
        send: function (n, t) {
          var e, a;
          return (
            _.isObject(n) ? (t = n) : ((t = t || {}).data = _.extend(t.data || {}, { action: n })),
            (t = _.defaults(t || {}, { type: "POST", url: wp.ajax.settings.url, context: this })),
            ((e = (a = s.Deferred(function (a) {
              t.success && a.done(t.success),
                t.error && a.fail(t.error),
                delete t.success,
                delete t.error,
                (a.jqXHR = s
                  .ajax(t)
                  .done(function (t) {
                    var e;
                    ("1" !== t && 1 !== t) || (t = { success: !0 }),
                      _.isObject(t) && !_.isUndefined(t.success)
                        ? ((e = this),
                          a.done(function () {
                            n && n.data && "query-attachments" === n.data.action && a.jqXHR.hasOwnProperty("getResponseHeader") && a.jqXHR.getResponseHeader("X-WP-Total")
                              ? (e.totalAttachments = parseInt(a.jqXHR.getResponseHeader("X-WP-Total"), 10))
                              : (e.totalAttachments = 0);
                          }),
                          a[t.success ? "resolveWith" : "rejectWith"](this, [t.data]))
                        : a.rejectWith(this, [t]);
                  })
                  .fail(function () {
                    a.rejectWith(this, arguments);
                  }));
            })).promise()).abort = function () {
              return a.jqXHR.abort(), this;
            }),
            e
          );
        },
      });
  })(jQuery);
