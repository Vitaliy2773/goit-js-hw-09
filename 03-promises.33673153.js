!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var r=t("h6c0i"),i=document.querySelector(".form");function u(e,n){var o={position:e,delay:n},t=Math.random()>.3;return new Promise((function(e,r){setTimeout((function(){t?e(o):r(o)}),n)}))}i.addEventListener("submit",(function(e){e.preventDefault();for(var n=Number(i.delay.value),o=1;o<=i.amount.value;o+=1)u(o,n).then((function(e){var n=e.position,o=e.delay;return r.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;return r.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))})),n+=Number(i.step.value)}))}();
//# sourceMappingURL=03-promises.33673153.js.map
