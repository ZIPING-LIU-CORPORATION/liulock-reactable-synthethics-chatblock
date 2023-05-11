(() => {
  "use strict";
  var e,
    t = {
      598: () => {
        const e = window.wp.element,
          t = window.wp.blocks,
          c = window.wp.blockEditor,
          l = JSON.parse(
            '{"u2":"liulock-reactable/synthethics-chatblock","TN":"LiuLock Synthethics React Chat Custom Wordpress Block Plugin","W3":"common"}'
          );
        (0, t.registerBlockType)(l.u2, {
          attributes: {
            title: { type: "string", selector: "h3" },
            blockId: { type: "string" },
          },
          edit: function (t) {
            window.React;
            const { attributes: l, setAttributes: a } = t;
            (l.blockId && l.blockId === t.clientId) ||
              a({ blockId: t.clientId });
            const o = (0, c.useBlockProps)({
                className: "wp-block-liulock-synthethics",
              }),
              r = (0, c.useBlockProps)({
                className: "wp-block-liulock-synthethics",
              });
            return (0, e.createElement)(
              "div",
              o,
              (0, e.createElement)(
                "div",
                { className: "flexbox" },
                (0, e.createElement)(
                  "div",
                  { className: "chat-box" },
                  (0, e.createElement)(
                    "div",
                    { className: "chat-box-header" },
                    (0, e.createElement)(c.RichText, {
                      value: l.title || "",
                      placeholder: "Enter a title for chatbox",
                      tagName: "h3",
                      onChange: (e) => a({ title: e }),
                    }),
                    (0, e.createElement)(c.InnerBlocks, r)
                  )
                )
              )
            );
          },
          save: (t) => {
            window.React;
            const l = c.useBlockProps.save({
                className: "wp-block-liulock-synthethics",
              }),
              a = c.useBlockProps.save({
                className: "wp-block-liulock-synthethics",
              });
            return (0, e.createElement)(
              "div",
              l,
              (0, e.createElement)(
                "div",
                { className: "flexbox" },
                (0, e.createElement)(
                  "div",
                  { className: "chat-box" },
                  (0, e.createElement)(
                    "div",
                    { className: "chat-box-header" },
                    (0, e.createElement)(c.RichText.Content, {
                      tagName: "h3",
                      value: t.attributes?.title || "Enter a title for chatbox",
                    }),
                    (0, e.createElement)(c.InnerBlocks.Content, a)
                  )
                )
              )
            );
          },
          category: l.W3,
          title: l.TN,
        });
      },
    },
    c = {};
  function l(e) {
    var a = c[e];
    if (void 0 !== a) return a.exports;
    var o = (c[e] = { exports: {} });
    return t[e](o, o.exports, l), o.exports;
  }
  (l.m = t),
    (e = []),
    (l.O = (t, c, a, o) => {
      if (!c) {
        var r = 1 / 0;
        for (h = 0; h < e.length; h++) {
          for (var [c, a, o] = e[h], s = !0, n = 0; n < c.length; n++)
            (!1 & o || r >= o) && Object.keys(l.O).every((e) => l.O[e](c[n]))
              ? c.splice(n--, 1)
              : ((s = !1), o < r && (r = o));
          if (s) {
            e.splice(h--, 1);
            var i = a();
            void 0 !== i && (t = i);
          }
        }
        return t;
      }
      o = o || 0;
      for (var h = e.length; h > 0 && e[h - 1][2] > o; h--) e[h] = e[h - 1];
      e[h] = [c, a, o];
    }),
    (l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = { 826: 0, 431: 0 };
      l.O.j = (t) => 0 === e[t];
      var t = (t, c) => {
          var a,
            o,
            [r, s, n] = c,
            i = 0;
          if (r.some((t) => 0 !== e[t])) {
            for (a in s) l.o(s, a) && (l.m[a] = s[a]);
            if (n) var h = n(l);
          }
          for (t && t(c); i < r.length; i++)
            (o = r[i]), l.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
          return l.O(h);
        },
        c = (globalThis.webpackChunkliulock_reactable_synthethics_chatblock =
          globalThis.webpackChunkliulock_reactable_synthethics_chatblock || []);
      c.forEach(t.bind(null, 0)), (c.push = t.bind(null, c.push.bind(c)));
    })();
  var a = l.O(void 0, [431], () => l(598));
  a = l.O(a);
})();
