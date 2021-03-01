// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/rrweb/es/rrweb/src/types.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReplayerEvents = exports.MouseInteractions = exports.MediaInteractions = exports.IncrementalSource = exports.EventType = void 0;
var EventType;
exports.EventType = EventType;

(function (EventType) {
  EventType[EventType["DomContentLoaded"] = 0] = "DomContentLoaded";
  EventType[EventType["Load"] = 1] = "Load";
  EventType[EventType["FullSnapshot"] = 2] = "FullSnapshot";
  EventType[EventType["IncrementalSnapshot"] = 3] = "IncrementalSnapshot";
  EventType[EventType["Meta"] = 4] = "Meta";
  EventType[EventType["Custom"] = 5] = "Custom";
})(EventType || (exports.EventType = EventType = {}));

var IncrementalSource;
exports.IncrementalSource = IncrementalSource;

(function (IncrementalSource) {
  IncrementalSource[IncrementalSource["Mutation"] = 0] = "Mutation";
  IncrementalSource[IncrementalSource["MouseMove"] = 1] = "MouseMove";
  IncrementalSource[IncrementalSource["MouseInteraction"] = 2] = "MouseInteraction";
  IncrementalSource[IncrementalSource["Scroll"] = 3] = "Scroll";
  IncrementalSource[IncrementalSource["ViewportResize"] = 4] = "ViewportResize";
  IncrementalSource[IncrementalSource["Input"] = 5] = "Input";
  IncrementalSource[IncrementalSource["TouchMove"] = 6] = "TouchMove";
  IncrementalSource[IncrementalSource["MediaInteraction"] = 7] = "MediaInteraction";
  IncrementalSource[IncrementalSource["StyleSheetRule"] = 8] = "StyleSheetRule";
  IncrementalSource[IncrementalSource["CanvasMutation"] = 9] = "CanvasMutation";
  IncrementalSource[IncrementalSource["Font"] = 10] = "Font";
  IncrementalSource[IncrementalSource["Log"] = 11] = "Log";
})(IncrementalSource || (exports.IncrementalSource = IncrementalSource = {}));

var MouseInteractions;
exports.MouseInteractions = MouseInteractions;

(function (MouseInteractions) {
  MouseInteractions[MouseInteractions["MouseUp"] = 0] = "MouseUp";
  MouseInteractions[MouseInteractions["MouseDown"] = 1] = "MouseDown";
  MouseInteractions[MouseInteractions["Click"] = 2] = "Click";
  MouseInteractions[MouseInteractions["ContextMenu"] = 3] = "ContextMenu";
  MouseInteractions[MouseInteractions["DblClick"] = 4] = "DblClick";
  MouseInteractions[MouseInteractions["Focus"] = 5] = "Focus";
  MouseInteractions[MouseInteractions["Blur"] = 6] = "Blur";
  MouseInteractions[MouseInteractions["TouchStart"] = 7] = "TouchStart";
  MouseInteractions[MouseInteractions["TouchMove_Departed"] = 8] = "TouchMove_Departed";
  MouseInteractions[MouseInteractions["TouchEnd"] = 9] = "TouchEnd";
})(MouseInteractions || (exports.MouseInteractions = MouseInteractions = {}));

var MediaInteractions;
exports.MediaInteractions = MediaInteractions;

(function (MediaInteractions) {
  MediaInteractions[MediaInteractions["Play"] = 0] = "Play";
  MediaInteractions[MediaInteractions["Pause"] = 1] = "Pause";
})(MediaInteractions || (exports.MediaInteractions = MediaInteractions = {}));

var ReplayerEvents;
exports.ReplayerEvents = ReplayerEvents;

(function (ReplayerEvents) {
  ReplayerEvents["Start"] = "start";
  ReplayerEvents["Pause"] = "pause";
  ReplayerEvents["Resume"] = "resume";
  ReplayerEvents["Resize"] = "resize";
  ReplayerEvents["Finish"] = "finish";
  ReplayerEvents["FullsnapshotRebuilded"] = "fullsnapshot-rebuilded";
  ReplayerEvents["LoadStylesheetStart"] = "load-stylesheet-start";
  ReplayerEvents["LoadStylesheetEnd"] = "load-stylesheet-end";
  ReplayerEvents["SkipStart"] = "skip-start";
  ReplayerEvents["SkipEnd"] = "skip-end";
  ReplayerEvents["MouseInteraction"] = "mouse-interaction";
  ReplayerEvents["EventCast"] = "event-cast";
  ReplayerEvents["CustomEvent"] = "custom-event";
  ReplayerEvents["Flush"] = "flush";
  ReplayerEvents["StateChange"] = "state-change";
})(ReplayerEvents || (exports.ReplayerEvents = ReplayerEvents = {}));
},{}],"../node_modules/rrweb/es/rrweb/node_modules/tslib/tslib.es6.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__read = __read;
exports.__spread = __spread;
exports.__values = __values;
exports.__assign = void 0;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var __assign = function () {
  exports.__assign = __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

exports.__assign = __assign;

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}

function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

  return ar;
}
},{}],"../node_modules/rrweb/es/rrweb/node_modules/rrweb-snapshot/es/rrweb-snapshot.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addHoverClass = addHoverClass;
exports.buildNodeWithSN = buildNodeWithSN;
exports.rebuild = rebuild;
exports.serializeNodeWithId = serializeNodeWithId;
exports.snapshot = snapshot;
exports.transformAttribute = transformAttribute;
exports.NodeType = exports.IGNORED_NODE = void 0;
var NodeType;
exports.NodeType = NodeType;

(function (NodeType) {
  NodeType[NodeType["Document"] = 0] = "Document";
  NodeType[NodeType["DocumentType"] = 1] = "DocumentType";
  NodeType[NodeType["Element"] = 2] = "Element";
  NodeType[NodeType["Text"] = 3] = "Text";
  NodeType[NodeType["CDATA"] = 4] = "CDATA";
  NodeType[NodeType["Comment"] = 5] = "Comment";
})(NodeType || (exports.NodeType = NodeType = {}));

var _id = 1;
var tagNameRegex = RegExp('[^a-z1-6-_]');
var IGNORED_NODE = -2;
exports.IGNORED_NODE = IGNORED_NODE;

function genId() {
  return _id++;
}

function getValidTagName(element) {
  if (element instanceof HTMLFormElement) {
    return 'form';
  }

  var processedTagName = element.tagName.toLowerCase().trim();

  if (tagNameRegex.test(processedTagName)) {
    return 'div';
  }

  return processedTagName;
}

function getCssRulesString(s) {
  try {
    var rules = s.rules || s.cssRules;
    return rules ? Array.from(rules).map(getCssRuleString).join('') : null;
  } catch (error) {
    return null;
  }
}

function getCssRuleString(rule) {
  return isCSSImportRule(rule) ? getCssRulesString(rule.styleSheet) || '' : rule.cssText;
}

function isCSSImportRule(rule) {
  return 'styleSheet' in rule;
}

function extractOrigin(url) {
  var origin;

  if (url.indexOf('//') > -1) {
    origin = url.split('/').slice(0, 3).join('/');
  } else {
    origin = url.split('/')[0];
  }

  origin = origin.split('?')[0];
  return origin;
}

var URL_IN_CSS_REF = /url\((?:(')([^']*)'|(")([^"]*)"|([^)]*))\)/gm;
var RELATIVE_PATH = /^(?!www\.|(?:http|ftp)s?:\/\/|[A-Za-z]:\\|\/\/|#).*/;
var DATA_URI = /^(data:)([^,]*),(.*)/i;

function absoluteToStylesheet(cssText, href) {
  return (cssText || '').replace(URL_IN_CSS_REF, function (origin, quote1, path1, quote2, path2, path3) {
    var filePath = path1 || path2 || path3;
    var maybeQuote = quote1 || quote2 || '';

    if (!filePath) {
      return origin;
    }

    if (!RELATIVE_PATH.test(filePath)) {
      return "url(" + maybeQuote + filePath + maybeQuote + ")";
    }

    if (DATA_URI.test(filePath)) {
      return "url(" + maybeQuote + filePath + maybeQuote + ")";
    }

    if (filePath[0] === '/') {
      return "url(" + maybeQuote + (extractOrigin(href) + filePath) + maybeQuote + ")";
    }

    var stack = href.split('/');
    var parts = filePath.split('/');
    stack.pop();

    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
      var part = parts_1[_i];

      if (part === '.') {
        continue;
      } else if (part === '..') {
        stack.pop();
      } else {
        stack.push(part);
      }
    }

    return "url(" + maybeQuote + stack.join('/') + maybeQuote + ")";
  });
}

function getAbsoluteSrcsetString(doc, attributeValue) {
  if (attributeValue.trim() === '') {
    return attributeValue;
  }

  var srcsetValues = attributeValue.split(',');
  var resultingSrcsetString = srcsetValues.map(function (srcItem) {
    var trimmedSrcItem = srcItem.trimLeft().trimRight();
    var urlAndSize = trimmedSrcItem.split(' ');

    if (urlAndSize.length === 2) {
      var absUrl = absoluteToDoc(doc, urlAndSize[0]);
      return absUrl + " " + urlAndSize[1];
    } else if (urlAndSize.length === 1) {
      var absUrl = absoluteToDoc(doc, urlAndSize[0]);
      return "" + absUrl;
    }

    return '';
  }).join(', ');
  return resultingSrcsetString;
}

function absoluteToDoc(doc, attributeValue) {
  if (!attributeValue || attributeValue.trim() === '') {
    return attributeValue;
  }

  var a = doc.createElement('a');
  a.href = attributeValue;
  return a.href;
}

function isSVGElement(el) {
  return el.tagName === 'svg' || el instanceof SVGElement;
}

function transformAttribute(doc, name, value) {
  if (name === 'src' || (name === 'href' || name === 'xlink:href') && value) {
    return absoluteToDoc(doc, value);
  } else if (name === 'srcset' && value) {
    return getAbsoluteSrcsetString(doc, value);
  } else if (name === 'style' && value) {
    return absoluteToStylesheet(value, location.href);
  } else {
    return value;
  }
}

function _isBlockedElement(element, blockClass, blockSelector) {
  if (typeof blockClass === 'string') {
    if (element.classList.contains(blockClass)) {
      return true;
    }
  } else {
    element.classList.forEach(function (className) {
      if (blockClass.test(className)) {
        return true;
      }
    });
  }

  if (blockSelector) {
    return element.matches(blockSelector);
  }

  return false;
}

function serializeNode(n, options) {
  var doc = options.doc,
      blockClass = options.blockClass,
      blockSelector = options.blockSelector,
      inlineStylesheet = options.inlineStylesheet,
      _a = options.maskInputOptions,
      maskInputOptions = _a === void 0 ? {} : _a,
      recordCanvas = options.recordCanvas;

  switch (n.nodeType) {
    case n.DOCUMENT_NODE:
      return {
        type: NodeType.Document,
        childNodes: []
      };

    case n.DOCUMENT_TYPE_NODE:
      return {
        type: NodeType.DocumentType,
        name: n.name,
        publicId: n.publicId,
        systemId: n.systemId
      };

    case n.ELEMENT_NODE:
      var needBlock = _isBlockedElement(n, blockClass, blockSelector);

      var tagName = getValidTagName(n);
      var attributes_1 = {};

      for (var _i = 0, _b = Array.from(n.attributes); _i < _b.length; _i++) {
        var _c = _b[_i],
            name = _c.name,
            value = _c.value;
        attributes_1[name] = transformAttribute(doc, name, value);
      }

      if (tagName === 'link' && inlineStylesheet) {
        var stylesheet = Array.from(doc.styleSheets).find(function (s) {
          return s.href === n.href;
        });
        var cssText = getCssRulesString(stylesheet);

        if (cssText) {
          delete attributes_1.rel;
          delete attributes_1.href;
          attributes_1._cssText = absoluteToStylesheet(cssText, stylesheet.href);
        }
      }

      if (tagName === 'style' && n.sheet && !(n.innerText || n.textContent || '').trim().length) {
        var cssText = getCssRulesString(n.sheet);

        if (cssText) {
          attributes_1._cssText = absoluteToStylesheet(cssText, location.href);
        }
      }

      if (tagName === 'input' || tagName === 'textarea' || tagName === 'select') {
        var value = n.value;

        if (attributes_1.type !== 'radio' && attributes_1.type !== 'checkbox' && attributes_1.type !== 'submit' && attributes_1.type !== 'button' && value) {
          attributes_1.value = maskInputOptions[attributes_1.type] || maskInputOptions[tagName] ? '*'.repeat(value.length) : value;
        } else if (n.checked) {
          attributes_1.checked = n.checked;
        }
      }

      if (tagName === 'option') {
        var selectValue = n.parentElement;

        if (attributes_1.value === selectValue.value) {
          attributes_1.selected = n.selected;
        }
      }

      if (tagName === 'canvas' && recordCanvas) {
        attributes_1.rr_dataURL = n.toDataURL();
      }

      if (tagName === 'audio' || tagName === 'video') {
        attributes_1.rr_mediaState = n.paused ? 'paused' : 'played';
      }

      if (n.scrollLeft) {
        attributes_1.rr_scrollLeft = n.scrollLeft;
      }

      if (n.scrollTop) {
        attributes_1.rr_scrollTop = n.scrollTop;
      }

      if (needBlock) {
        var _d = n.getBoundingClientRect(),
            width = _d.width,
            height = _d.height;

        attributes_1 = {
          class: attributes_1.class,
          rr_width: width + "px",
          rr_height: height + "px"
        };
      }

      return {
        type: NodeType.Element,
        tagName: tagName,
        attributes: attributes_1,
        childNodes: [],
        isSVG: isSVGElement(n) || undefined,
        needBlock: needBlock
      };

    case n.TEXT_NODE:
      var parentTagName = n.parentNode && n.parentNode.tagName;
      var textContent = n.textContent;
      var isStyle = parentTagName === 'STYLE' ? true : undefined;

      if (isStyle && textContent) {
        textContent = absoluteToStylesheet(textContent, location.href);
      }

      if (parentTagName === 'SCRIPT') {
        textContent = 'SCRIPT_PLACEHOLDER';
      }

      return {
        type: NodeType.Text,
        textContent: textContent || '',
        isStyle: isStyle
      };

    case n.CDATA_SECTION_NODE:
      return {
        type: NodeType.CDATA,
        textContent: ''
      };

    case n.COMMENT_NODE:
      return {
        type: NodeType.Comment,
        textContent: n.textContent || ''
      };

    default:
      return false;
  }
}

function lowerIfExists(maybeAttr) {
  if (maybeAttr === undefined) {
    return '';
  } else {
    return maybeAttr.toLowerCase();
  }
}

function slimDOMExcluded(sn, slimDOMOptions) {
  if (slimDOMOptions.comment && sn.type === NodeType.Comment) {
    return true;
  } else if (sn.type === NodeType.Element) {
    if (slimDOMOptions.script && (sn.tagName === 'script' || sn.tagName === 'link' && sn.attributes.rel === 'preload' && sn.attributes.as === 'script')) {
      return true;
    } else if (slimDOMOptions.headFavicon && (sn.tagName === 'link' && sn.attributes.rel === 'shortcut icon' || sn.tagName === 'meta' && (lowerIfExists(sn.attributes.name).match(/^msapplication-tile(image|color)$/) || lowerIfExists(sn.attributes.name) === 'application-name' || lowerIfExists(sn.attributes.rel) === 'icon' || lowerIfExists(sn.attributes.rel) === 'apple-touch-icon' || lowerIfExists(sn.attributes.rel) === 'shortcut icon'))) {
      return true;
    } else if (sn.tagName === 'meta') {
      if (slimDOMOptions.headMetaDescKeywords && lowerIfExists(sn.attributes.name).match(/^description|keywords$/)) {
        return true;
      } else if (slimDOMOptions.headMetaSocial && (lowerIfExists(sn.attributes.property).match(/^(og|twitter|fb):/) || lowerIfExists(sn.attributes.name).match(/^(og|twitter):/) || lowerIfExists(sn.attributes.name) === 'pinterest')) {
        return true;
      } else if (slimDOMOptions.headMetaRobots && (lowerIfExists(sn.attributes.name) === 'robots' || lowerIfExists(sn.attributes.name) === 'googlebot' || lowerIfExists(sn.attributes.name) === 'bingbot')) {
        return true;
      } else if (slimDOMOptions.headMetaHttpEquiv && sn.attributes['http-equiv'] !== undefined) {
        return true;
      } else if (slimDOMOptions.headMetaAuthorship && (lowerIfExists(sn.attributes.name) === 'author' || lowerIfExists(sn.attributes.name) === 'generator' || lowerIfExists(sn.attributes.name) === 'framework' || lowerIfExists(sn.attributes.name) === 'publisher' || lowerIfExists(sn.attributes.name) === 'progid' || lowerIfExists(sn.attributes.property).match(/^article:/) || lowerIfExists(sn.attributes.property).match(/^product:/))) {
        return true;
      } else if (slimDOMOptions.headMetaVerification && (lowerIfExists(sn.attributes.name) === 'google-site-verification' || lowerIfExists(sn.attributes.name) === 'yandex-verification' || lowerIfExists(sn.attributes.name) === 'csrf-token' || lowerIfExists(sn.attributes.name) === 'p:domain_verify' || lowerIfExists(sn.attributes.name) === 'verify-v1' || lowerIfExists(sn.attributes.name) === 'verification' || lowerIfExists(sn.attributes.name) === 'shopify-checkout-api-token')) {
        return true;
      }
    }
  }

  return false;
}

function serializeNodeWithId(n, options) {
  var doc = options.doc,
      map = options.map,
      blockClass = options.blockClass,
      blockSelector = options.blockSelector,
      _a = options.skipChild,
      skipChild = _a === void 0 ? false : _a,
      _b = options.inlineStylesheet,
      inlineStylesheet = _b === void 0 ? true : _b,
      _c = options.maskInputOptions,
      maskInputOptions = _c === void 0 ? {} : _c,
      slimDOMOptions = options.slimDOMOptions,
      _d = options.recordCanvas,
      recordCanvas = _d === void 0 ? false : _d;
  var _e = options.preserveWhiteSpace,
      preserveWhiteSpace = _e === void 0 ? true : _e;

  var _serializedNode = serializeNode(n, {
    doc: doc,
    blockClass: blockClass,
    blockSelector: blockSelector,
    inlineStylesheet: inlineStylesheet,
    maskInputOptions: maskInputOptions,
    recordCanvas: recordCanvas
  });

  if (!_serializedNode) {
    console.warn(n, 'not serialized');
    return null;
  }

  var id;

  if ('__sn' in n) {
    id = n.__sn.id;
  } else if (slimDOMExcluded(_serializedNode, slimDOMOptions) || !preserveWhiteSpace && _serializedNode.type === NodeType.Text && !_serializedNode.isStyle && !_serializedNode.textContent.replace(/^\s+|\s+$/gm, '').length) {
    id = IGNORED_NODE;
  } else {
    id = genId();
  }

  var serializedNode = Object.assign(_serializedNode, {
    id: id
  });
  n.__sn = serializedNode;

  if (id === IGNORED_NODE) {
    return null;
  }

  map[id] = n;
  var recordChild = !skipChild;

  if (serializedNode.type === NodeType.Element) {
    recordChild = recordChild && !serializedNode.needBlock;
    delete serializedNode.needBlock;
  }

  if ((serializedNode.type === NodeType.Document || serializedNode.type === NodeType.Element) && recordChild) {
    if (slimDOMOptions.headWhitespace && _serializedNode.type === NodeType.Element && _serializedNode.tagName === 'head') {
      preserveWhiteSpace = false;
    }

    for (var _i = 0, _f = Array.from(n.childNodes); _i < _f.length; _i++) {
      var childN = _f[_i];
      var serializedChildNode = serializeNodeWithId(childN, {
        doc: doc,
        map: map,
        blockClass: blockClass,
        blockSelector: blockSelector,
        skipChild: skipChild,
        inlineStylesheet: inlineStylesheet,
        maskInputOptions: maskInputOptions,
        slimDOMOptions: slimDOMOptions,
        recordCanvas: recordCanvas,
        preserveWhiteSpace: preserveWhiteSpace
      });

      if (serializedChildNode) {
        serializedNode.childNodes.push(serializedChildNode);
      }
    }
  }

  return serializedNode;
}

function snapshot(n, options) {
  var _a = options || {},
      _b = _a.blockClass,
      blockClass = _b === void 0 ? 'rr-block' : _b,
      _c = _a.inlineStylesheet,
      inlineStylesheet = _c === void 0 ? true : _c,
      _d = _a.recordCanvas,
      recordCanvas = _d === void 0 ? false : _d,
      _e = _a.blockSelector,
      blockSelector = _e === void 0 ? null : _e,
      _f = _a.maskAllInputs,
      maskAllInputs = _f === void 0 ? false : _f,
      _g = _a.slimDOM,
      slimDOM = _g === void 0 ? false : _g;

  var idNodeMap = {};
  var maskInputOptions = maskAllInputs === true ? {
    color: true,
    date: true,
    'datetime-local': true,
    email: true,
    month: true,
    number: true,
    range: true,
    search: true,
    tel: true,
    text: true,
    time: true,
    url: true,
    week: true,
    textarea: true,
    select: true
  } : maskAllInputs === false ? {} : maskAllInputs;
  var slimDOMOptions = slimDOM === true || slimDOM === 'all' ? {
    script: true,
    comment: true,
    headFavicon: true,
    headWhitespace: true,
    headMetaDescKeywords: slimDOM === 'all',
    headMetaSocial: true,
    headMetaRobots: true,
    headMetaHttpEquiv: true,
    headMetaAuthorship: true,
    headMetaVerification: true
  } : slimDOM === false ? {} : slimDOM;
  return [serializeNodeWithId(n, {
    doc: n,
    map: idNodeMap,
    blockClass: blockClass,
    blockSelector: blockSelector,
    skipChild: false,
    inlineStylesheet: inlineStylesheet,
    maskInputOptions: maskInputOptions,
    slimDOMOptions: slimDOMOptions,
    recordCanvas: recordCanvas
  }), idNodeMap];
}

var commentre = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;

function parse(css, options) {
  if (options === void 0) {
    options = {};
  }

  var lineno = 1;
  var column = 1;

  function updatePosition(str) {
    var lines = str.match(/\n/g);

    if (lines) {
      lineno += lines.length;
    }

    var i = str.lastIndexOf('\n');
    column = i === -1 ? column + str.length : str.length - i;
  }

  function position() {
    var start = {
      line: lineno,
      column: column
    };
    return function (node) {
      node.position = new Position(start);
      whitespace();
      return node;
    };
  }

  var Position = function () {
    function Position(start) {
      this.start = start;
      this.end = {
        line: lineno,
        column: column
      };
      this.source = options.source;
    }

    return Position;
  }();

  Position.prototype.content = css;
  var errorsList = [];

  function error(msg) {
    var err = new Error(options.source + ':' + lineno + ':' + column + ': ' + msg);
    err.reason = msg;
    err.filename = options.source;
    err.line = lineno;
    err.column = column;
    err.source = css;

    if (options.silent) {
      errorsList.push(err);
    } else {
      throw err;
    }
  }

  function stylesheet() {
    var rulesList = rules();
    return {
      type: 'stylesheet',
      stylesheet: {
        source: options.source,
        rules: rulesList,
        parsingErrors: errorsList
      }
    };
  }

  function open() {
    return match(/^{\s*/);
  }

  function close() {
    return match(/^}/);
  }

  function rules() {
    var node;
    var rules = [];
    whitespace();
    comments(rules);

    while (css.length && css.charAt(0) !== '}' && (node = atrule() || rule())) {
      if (node !== false) {
        rules.push(node);
        comments(rules);
      }
    }

    return rules;
  }

  function match(re) {
    var m = re.exec(css);

    if (!m) {
      return;
    }

    var str = m[0];
    updatePosition(str);
    css = css.slice(str.length);
    return m;
  }

  function whitespace() {
    match(/^\s*/);
  }

  function comments(rules) {
    if (rules === void 0) {
      rules = [];
    }

    var c;

    while (c = comment()) {
      if (c !== false) {
        rules.push(c);
      }

      c = comment();
    }

    return rules;
  }

  function comment() {
    var pos = position();

    if ('/' !== css.charAt(0) || '*' !== css.charAt(1)) {
      return;
    }

    var i = 2;

    while ('' !== css.charAt(i) && ('*' !== css.charAt(i) || '/' !== css.charAt(i + 1))) {
      ++i;
    }

    i += 2;

    if ('' === css.charAt(i - 1)) {
      return error('End of comment missing');
    }

    var str = css.slice(2, i - 2);
    column += 2;
    updatePosition(str);
    css = css.slice(i);
    column += 2;
    return pos({
      type: 'comment',
      comment: str
    });
  }

  function selector() {
    var m = match(/^([^{]+)/);

    if (!m) {
      return;
    }

    return trim(m[0]).replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g, '').replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g, function (m) {
      return m.replace(/,/g, '\u200C');
    }).split(/\s*(?![^(]*\)),\s*/).map(function (s) {
      return s.replace(/\u200C/g, ',');
    });
  }

  function declaration() {
    var pos = position();
    var propMatch = match(/^(\*?[-#\/\*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);

    if (!propMatch) {
      return;
    }

    var prop = trim(propMatch[0]);

    if (!match(/^:\s*/)) {
      return error("property missing ':'");
    }

    var val = match(/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+)/);
    var ret = pos({
      type: 'declaration',
      property: prop.replace(commentre, ''),
      value: val ? trim(val[0]).replace(commentre, '') : ''
    });
    match(/^[;\s]*/);
    return ret;
  }

  function declarations() {
    var decls = [];

    if (!open()) {
      return error("missing '{'");
    }

    comments(decls);
    var decl;

    while (decl = declaration()) {
      if (decl !== false) {
        decls.push(decl);
        comments(decls);
      }

      decl = declaration();
    }

    if (!close()) {
      return error("missing '}'");
    }

    return decls;
  }

  function keyframe() {
    var m;
    var vals = [];
    var pos = position();

    while (m = match(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/)) {
      vals.push(m[1]);
      match(/^,\s*/);
    }

    if (!vals.length) {
      return;
    }

    return pos({
      type: 'keyframe',
      values: vals,
      declarations: declarations()
    });
  }

  function atkeyframes() {
    var pos = position();
    var m = match(/^@([-\w]+)?keyframes\s*/);

    if (!m) {
      return;
    }

    var vendor = m[1];
    m = match(/^([-\w]+)\s*/);

    if (!m) {
      return error('@keyframes missing name');
    }

    var name = m[1];

    if (!open()) {
      return error("@keyframes missing '{'");
    }

    var frame;
    var frames = comments();

    while (frame = keyframe()) {
      frames.push(frame);
      frames = frames.concat(comments());
    }

    if (!close()) {
      return error("@keyframes missing '}'");
    }

    return pos({
      type: 'keyframes',
      name: name,
      vendor: vendor,
      keyframes: frames
    });
  }

  function atsupports() {
    var pos = position();
    var m = match(/^@supports *([^{]+)/);

    if (!m) {
      return;
    }

    var supports = trim(m[1]);

    if (!open()) {
      return error("@supports missing '{'");
    }

    var style = comments().concat(rules());

    if (!close()) {
      return error("@supports missing '}'");
    }

    return pos({
      type: 'supports',
      supports: supports,
      rules: style
    });
  }

  function athost() {
    var pos = position();
    var m = match(/^@host\s*/);

    if (!m) {
      return;
    }

    if (!open()) {
      return error("@host missing '{'");
    }

    var style = comments().concat(rules());

    if (!close()) {
      return error("@host missing '}'");
    }

    return pos({
      type: 'host',
      rules: style
    });
  }

  function atmedia() {
    var pos = position();
    var m = match(/^@media *([^{]+)/);

    if (!m) {
      return;
    }

    var media = trim(m[1]);

    if (!open()) {
      return error("@media missing '{'");
    }

    var style = comments().concat(rules());

    if (!close()) {
      return error("@media missing '}'");
    }

    return pos({
      type: 'media',
      media: media,
      rules: style
    });
  }

  function atcustommedia() {
    var pos = position();
    var m = match(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);

    if (!m) {
      return;
    }

    return pos({
      type: 'custom-media',
      name: trim(m[1]),
      media: trim(m[2])
    });
  }

  function atpage() {
    var pos = position();
    var m = match(/^@page */);

    if (!m) {
      return;
    }

    var sel = selector() || [];

    if (!open()) {
      return error("@page missing '{'");
    }

    var decls = comments();
    var decl;

    while (decl = declaration()) {
      decls.push(decl);
      decls = decls.concat(comments());
    }

    if (!close()) {
      return error("@page missing '}'");
    }

    return pos({
      type: 'page',
      selectors: sel,
      declarations: decls
    });
  }

  function atdocument() {
    var pos = position();
    var m = match(/^@([-\w]+)?document *([^{]+)/);

    if (!m) {
      return;
    }

    var vendor = trim(m[1]);
    var doc = trim(m[2]);

    if (!open()) {
      return error("@document missing '{'");
    }

    var style = comments().concat(rules());

    if (!close()) {
      return error("@document missing '}'");
    }

    return pos({
      type: 'document',
      document: doc,
      vendor: vendor,
      rules: style
    });
  }

  function atfontface() {
    var pos = position();
    var m = match(/^@font-face\s*/);

    if (!m) {
      return;
    }

    if (!open()) {
      return error("@font-face missing '{'");
    }

    var decls = comments();
    var decl;

    while (decl = declaration()) {
      decls.push(decl);
      decls = decls.concat(comments());
    }

    if (!close()) {
      return error("@font-face missing '}'");
    }

    return pos({
      type: 'font-face',
      declarations: decls
    });
  }

  var atimport = _compileAtrule('import');

  var atcharset = _compileAtrule('charset');

  var atnamespace = _compileAtrule('namespace');

  function _compileAtrule(name) {
    var re = new RegExp('^@' + name + '\\s*([^;]+);');
    return function () {
      var pos = position();
      var m = match(re);

      if (!m) {
        return;
      }

      var ret = {
        type: name
      };
      ret[name] = m[1].trim();
      return pos(ret);
    };
  }

  function atrule() {
    if (css[0] !== '@') {
      return;
    }

    return atkeyframes() || atmedia() || atcustommedia() || atsupports() || atimport() || atcharset() || atnamespace() || atdocument() || atpage() || athost() || atfontface();
  }

  function rule() {
    var pos = position();
    var sel = selector();

    if (!sel) {
      return error('selector missing');
    }

    comments();
    return pos({
      type: 'rule',
      selectors: sel,
      declarations: declarations()
    });
  }

  return addParent(stylesheet());
}

function trim(str) {
  return str ? str.replace(/^\s+|\s+$/g, '') : '';
}

function addParent(obj, parent) {
  var isNode = obj && typeof obj.type === 'string';
  var childParent = isNode ? obj : parent;

  for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
    var k = _a[_i];
    var value = obj[k];

    if (Array.isArray(value)) {
      value.forEach(function (v) {
        addParent(v, childParent);
      });
    } else if (value && typeof value === 'object') {
      addParent(value, childParent);
    }
  }

  if (isNode) {
    Object.defineProperty(obj, 'parent', {
      configurable: true,
      writable: true,
      enumerable: false,
      value: parent || null
    });
  }

  return obj;
}

var tagMap = {
  script: 'noscript',
  altglyph: 'altGlyph',
  altglyphdef: 'altGlyphDef',
  altglyphitem: 'altGlyphItem',
  animatecolor: 'animateColor',
  animatemotion: 'animateMotion',
  animatetransform: 'animateTransform',
  clippath: 'clipPath',
  feblend: 'feBlend',
  fecolormatrix: 'feColorMatrix',
  fecomponenttransfer: 'feComponentTransfer',
  fecomposite: 'feComposite',
  feconvolvematrix: 'feConvolveMatrix',
  fediffuselighting: 'feDiffuseLighting',
  fedisplacementmap: 'feDisplacementMap',
  fedistantlight: 'feDistantLight',
  fedropshadow: 'feDropShadow',
  feflood: 'feFlood',
  fefunca: 'feFuncA',
  fefuncb: 'feFuncB',
  fefuncg: 'feFuncG',
  fefuncr: 'feFuncR',
  fegaussianblur: 'feGaussianBlur',
  feimage: 'feImage',
  femerge: 'feMerge',
  femergenode: 'feMergeNode',
  femorphology: 'feMorphology',
  feoffset: 'feOffset',
  fepointlight: 'fePointLight',
  fespecularlighting: 'feSpecularLighting',
  fespotlight: 'feSpotLight',
  fetile: 'feTile',
  feturbulence: 'feTurbulence',
  foreignobject: 'foreignObject',
  glyphref: 'glyphRef',
  lineargradient: 'linearGradient',
  radialgradient: 'radialGradient'
};

function getTagName(n) {
  var tagName = tagMap[n.tagName] ? tagMap[n.tagName] : n.tagName;

  if (tagName === 'link' && n.attributes._cssText) {
    tagName = 'style';
  }

  return tagName;
}

var HOVER_SELECTOR = /([^\\]):hover/g;

function addHoverClass(cssText) {
  var ast = parse(cssText, {
    silent: true
  });

  if (!ast.stylesheet) {
    return cssText;
  }

  ast.stylesheet.rules.forEach(function (rule) {
    if ('selectors' in rule) {
      (rule.selectors || []).forEach(function (selector) {
        if (HOVER_SELECTOR.test(selector)) {
          var newSelector = selector.replace(HOVER_SELECTOR, '$1.\\:hover');
          cssText = cssText.replace(selector, selector + ", " + newSelector);
        }
      });
    }
  });
  return cssText;
}

function buildNode(n, options) {
  var doc = options.doc,
      hackCss = options.hackCss;

  switch (n.type) {
    case NodeType.Document:
      return doc.implementation.createDocument(null, '', null);

    case NodeType.DocumentType:
      return doc.implementation.createDocumentType(n.name || 'html', n.publicId, n.systemId);

    case NodeType.Element:
      var tagName = getTagName(n);
      var node_1;

      if (n.isSVG) {
        node_1 = doc.createElementNS('http://www.w3.org/2000/svg', tagName);
      } else {
        node_1 = doc.createElement(tagName);
      }

      var _loop_1 = function (name) {
        if (!n.attributes.hasOwnProperty(name)) {
          return "continue";
        }

        var value = n.attributes[name];
        value = typeof value === 'boolean' || typeof value === 'number' ? '' : value;

        if (!name.startsWith('rr_')) {
          var isTextarea = tagName === 'textarea' && name === 'value';
          var isRemoteOrDynamicCss = tagName === 'style' && name === '_cssText';

          if (isRemoteOrDynamicCss && hackCss) {
            value = addHoverClass(value);
          }

          if (isTextarea || isRemoteOrDynamicCss) {
            var child = doc.createTextNode(value);

            for (var _i = 0, _a = Array.from(node_1.childNodes); _i < _a.length; _i++) {
              var c = _a[_i];

              if (c.nodeType === node_1.TEXT_NODE) {
                node_1.removeChild(c);
              }
            }

            node_1.appendChild(child);
            return "continue";
          }

          if (tagName === 'iframe' && name === 'src') {
            return "continue";
          }

          try {
            if (n.isSVG && name === 'xlink:href') {
              node_1.setAttributeNS('http://www.w3.org/1999/xlink', name, value);
            } else if (name === 'onload' || name === 'onclick' || name.substring(0, 7) === 'onmouse') {
              node_1.setAttribute('_' + name, value);
            } else {
              node_1.setAttribute(name, value);
            }
          } catch (error) {}
        } else {
          if (tagName === 'canvas' && name === 'rr_dataURL') {
            var image_1 = document.createElement('img');
            image_1.src = value;

            image_1.onload = function () {
              var ctx = node_1.getContext('2d');

              if (ctx) {
                ctx.drawImage(image_1, 0, 0, image_1.width, image_1.height);
              }
            };
          }

          if (name === 'rr_width') {
            node_1.style.width = value;
          }

          if (name === 'rr_height') {
            node_1.style.height = value;
          }

          if (name === 'rr_mediaState') {
            switch (value) {
              case 'played':
                node_1.play();

              case 'paused':
                node_1.pause();
                break;
            }
          }
        }
      };

      for (var name in n.attributes) {
        _loop_1(name);
      }

      return node_1;

    case NodeType.Text:
      return doc.createTextNode(n.isStyle && hackCss ? addHoverClass(n.textContent) : n.textContent);

    case NodeType.CDATA:
      return doc.createCDATASection(n.textContent);

    case NodeType.Comment:
      return doc.createComment(n.textContent);

    default:
      return null;
  }
}

function buildNodeWithSN(n, options) {
  var doc = options.doc,
      map = options.map,
      _a = options.skipChild,
      skipChild = _a === void 0 ? false : _a,
      _b = options.hackCss,
      hackCss = _b === void 0 ? true : _b;
  var node = buildNode(n, {
    doc: doc,
    hackCss: hackCss
  });

  if (!node) {
    return null;
  }

  if (n.type === NodeType.Document) {
    doc.close();
    doc.open();
    node = doc;
  }

  node.__sn = n;
  map[n.id] = node;

  if ((n.type === NodeType.Document || n.type === NodeType.Element) && !skipChild) {
    for (var _i = 0, _c = n.childNodes; _i < _c.length; _i++) {
      var childN = _c[_i];
      var childNode = buildNodeWithSN(childN, {
        doc: doc,
        map: map,
        skipChild: false,
        hackCss: hackCss
      });

      if (!childNode) {
        console.warn('Failed to rebuild', childN);
      } else {
        node.appendChild(childNode);
      }
    }
  }

  return node;
}

function visit(idNodeMap, onVisit) {
  function walk(node) {
    onVisit(node);
  }

  for (var key in idNodeMap) {
    if (idNodeMap[key]) {
      walk(idNodeMap[key]);
    }
  }
}

function handleScroll(node) {
  var n = node.__sn;

  if (n.type !== NodeType.Element) {
    return;
  }

  var el = node;

  for (var name in n.attributes) {
    if (!(n.attributes.hasOwnProperty(name) && name.startsWith('rr_'))) {
      continue;
    }

    var value = n.attributes[name];

    if (name === 'rr_scrollLeft') {
      el.scrollLeft = value;
    }

    if (name === 'rr_scrollTop') {
      el.scrollTop = value;
    }
  }
}

function rebuild(n, options) {
  var doc = options.doc,
      onVisit = options.onVisit,
      _a = options.hackCss,
      hackCss = _a === void 0 ? true : _a;
  var idNodeMap = {};
  var node = buildNodeWithSN(n, {
    doc: doc,
    map: idNodeMap,
    skipChild: false,
    hackCss: hackCss
  });
  visit(idNodeMap, function (visitedNode) {
    if (onVisit) {
      onVisit(visitedNode);
    }

    handleScroll(visitedNode);
  });
  return [node, idNodeMap];
}
},{}],"../node_modules/rrweb/es/rrweb/src/utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWindowHeight = getWindowHeight;
exports.getWindowWidth = getWindowWidth;
exports.hookSetter = hookSetter;
exports.isAncestorRemoved = isAncestorRemoved;
exports.isBlocked = isBlocked;
exports.isIgnored = isIgnored;
exports.isTouchEvent = isTouchEvent;
exports.iterateResolveTree = iterateResolveTree;
exports.needCastInSyncMode = needCastInSyncMode;
exports.on = on;
exports.patch = patch;
exports.polyfill = polyfill;
exports.queueToResolveTrees = queueToResolveTrees;
exports.throttle = throttle;
exports.mirror = exports.TreeIndex = void 0;

var _tslibEs = require("../node_modules/tslib/tslib.es6.js");

var _rrwebSnapshot = require("../node_modules/rrweb-snapshot/es/rrweb-snapshot.js");

var _types = require("./types.js");

function on(type, fn, target) {
  if (target === void 0) {
    target = document;
  }

  var options = {
    capture: true,
    passive: true
  };
  target.addEventListener(type, fn, options);
  return function () {
    return target.removeEventListener(type, fn, options);
  };
}

var mirror = {
  map: {},
  getId: function (n) {
    if (!n.__sn) {
      return -1;
    }

    return n.__sn.id;
  },
  getNode: function (id) {
    return mirror.map[id] || null;
  },
  removeNodeFromMap: function (n) {
    var id = n.__sn && n.__sn.id;
    delete mirror.map[id];

    if (n.childNodes) {
      n.childNodes.forEach(function (child) {
        return mirror.removeNodeFromMap(child);
      });
    }
  },
  has: function (id) {
    return mirror.map.hasOwnProperty(id);
  }
};
exports.mirror = mirror;

function throttle(func, wait, options) {
  if (options === void 0) {
    options = {};
  }

  var timeout = null;
  var previous = 0;
  return function (arg) {
    var now = Date.now();

    if (!previous && options.leading === false) {
      previous = now;
    }

    var remaining = wait - (now - previous);
    var context = this;
    var args = arguments;

    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        window.clearTimeout(timeout);
        timeout = null;
      }

      previous = now;
      func.apply(context, args);
    } else if (!timeout && options.trailing !== false) {
      timeout = window.setTimeout(function () {
        previous = options.leading === false ? 0 : Date.now();
        timeout = null;
        func.apply(context, args);
      }, remaining);
    }
  };
}

function hookSetter(target, key, d, isRevoked, win) {
  if (win === void 0) {
    win = window;
  }

  var original = win.Object.getOwnPropertyDescriptor(target, key);
  win.Object.defineProperty(target, key, isRevoked ? d : {
    set: function (value) {
      var _this = this;

      setTimeout(function () {
        d.set.call(_this, value);
      }, 0);

      if (original && original.set) {
        original.set.call(this, value);
      }
    }
  });
  return function () {
    return hookSetter(target, key, original || {}, true);
  };
}

function patch(source, name, replacement) {
  try {
    if (!(name in source)) {
      return function () {};
    }

    var original_1 = source[name];
    var wrapped = replacement(original_1);

    if (typeof wrapped === 'function') {
      wrapped.prototype = wrapped.prototype || {};
      Object.defineProperties(wrapped, {
        __rrweb_original__: {
          enumerable: false,
          value: original_1
        }
      });
    }

    source[name] = wrapped;
    return function () {
      source[name] = original_1;
    };
  } catch (_a) {
    return function () {};
  }
}

function getWindowHeight() {
  return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight;
}

function getWindowWidth() {
  return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth;
}

function isBlocked(node, blockClass) {
  if (!node) {
    return false;
  }

  if (node.nodeType === node.ELEMENT_NODE) {
    var needBlock_1 = false;

    if (typeof blockClass === 'string') {
      needBlock_1 = node.classList.contains(blockClass);
    } else {
      node.classList.forEach(function (className) {
        if (blockClass.test(className)) {
          needBlock_1 = true;
        }
      });
    }

    return needBlock_1 || isBlocked(node.parentNode, blockClass);
  }

  if (node.nodeType === node.TEXT_NODE) {
    return isBlocked(node.parentNode, blockClass);
  }

  return isBlocked(node.parentNode, blockClass);
}

function isIgnored(n) {
  if ('__sn' in n) {
    return n.__sn.id === _rrwebSnapshot.IGNORED_NODE;
  }

  return false;
}

function isAncestorRemoved(target) {
  var id = mirror.getId(target);

  if (!mirror.has(id)) {
    return true;
  }

  if (target.parentNode && target.parentNode.nodeType === target.DOCUMENT_NODE) {
    return false;
  }

  if (!target.parentNode) {
    return true;
  }

  return isAncestorRemoved(target.parentNode);
}

function isTouchEvent(event) {
  return Boolean(event.changedTouches);
}

function polyfill(win) {
  if (win === void 0) {
    win = window;
  }

  if ('NodeList' in win && !win.NodeList.prototype.forEach) {
    win.NodeList.prototype.forEach = Array.prototype.forEach;
  }

  if ('DOMTokenList' in win && !win.DOMTokenList.prototype.forEach) {
    win.DOMTokenList.prototype.forEach = Array.prototype.forEach;
  }
}

function needCastInSyncMode(event) {
  switch (event.type) {
    case _types.EventType.DomContentLoaded:
    case _types.EventType.Load:
    case _types.EventType.Custom:
      return false;

    case _types.EventType.FullSnapshot:
    case _types.EventType.Meta:
      return true;
  }

  switch (event.data.source) {
    case _types.IncrementalSource.MouseMove:
    case _types.IncrementalSource.MouseInteraction:
    case _types.IncrementalSource.TouchMove:
    case _types.IncrementalSource.MediaInteraction:
      return false;

    case _types.IncrementalSource.ViewportResize:
    case _types.IncrementalSource.StyleSheetRule:
    case _types.IncrementalSource.Scroll:
    case _types.IncrementalSource.Input:
      return true;
  }

  return true;
}

var TreeIndex = function () {
  function TreeIndex() {
    this.reset();
  }

  TreeIndex.prototype.add = function (mutation) {
    var parentTreeNode = this.indexes.get(mutation.parentId);
    var treeNode = {
      id: mutation.node.id,
      mutation: mutation,
      children: [],
      texts: [],
      attributes: []
    };

    if (!parentTreeNode) {
      this.tree[treeNode.id] = treeNode;
    } else {
      treeNode.parent = parentTreeNode;
      parentTreeNode.children[treeNode.id] = treeNode;
    }

    this.indexes.set(treeNode.id, treeNode);
  };

  TreeIndex.prototype.remove = function (mutation) {
    var _this = this;

    var parentTreeNode = this.indexes.get(mutation.parentId);
    var treeNode = this.indexes.get(mutation.id);

    var deepRemoveFromMirror = function (id) {
      _this.removeIdSet.add(id);

      var node = mirror.getNode(id);
      node === null || node === void 0 ? void 0 : node.childNodes.forEach(function (childNode) {
        if ('__sn' in childNode) {
          deepRemoveFromMirror(childNode.__sn.id);
        }
      });
    };

    var deepRemoveFromTreeIndex = function (node) {
      _this.removeIdSet.add(node.id);

      Object.values(node.children).forEach(function (n) {
        return deepRemoveFromTreeIndex(n);
      });

      var _treeNode = _this.indexes.get(node.id);

      if (_treeNode) {
        var _parentTreeNode = _treeNode.parent;

        if (_parentTreeNode) {
          delete _treeNode.parent;
          delete _parentTreeNode.children[_treeNode.id];

          _this.indexes.delete(mutation.id);
        }
      }
    };

    if (!treeNode) {
      this.removeNodeMutations.push(mutation);
      deepRemoveFromMirror(mutation.id);
    } else if (!parentTreeNode) {
      delete this.tree[treeNode.id];
      this.indexes.delete(treeNode.id);
      deepRemoveFromTreeIndex(treeNode);
    } else {
      delete treeNode.parent;
      delete parentTreeNode.children[treeNode.id];
      this.indexes.delete(mutation.id);
      deepRemoveFromTreeIndex(treeNode);
    }
  };

  TreeIndex.prototype.text = function (mutation) {
    var treeNode = this.indexes.get(mutation.id);

    if (treeNode) {
      treeNode.texts.push(mutation);
    } else {
      this.textMutations.push(mutation);
    }
  };

  TreeIndex.prototype.attribute = function (mutation) {
    var treeNode = this.indexes.get(mutation.id);

    if (treeNode) {
      treeNode.attributes.push(mutation);
    } else {
      this.attributeMutations.push(mutation);
    }
  };

  TreeIndex.prototype.scroll = function (d) {
    this.scrollMap.set(d.id, d);
  };

  TreeIndex.prototype.input = function (d) {
    this.inputMap.set(d.id, d);
  };

  TreeIndex.prototype.flush = function () {
    var e_1, _a, e_2, _b;

    var _this = this;

    var _c = this,
        tree = _c.tree,
        removeNodeMutations = _c.removeNodeMutations,
        textMutations = _c.textMutations,
        attributeMutations = _c.attributeMutations;

    var batchMutationData = {
      source: _types.IncrementalSource.Mutation,
      removes: removeNodeMutations,
      texts: textMutations,
      attributes: attributeMutations,
      adds: []
    };

    var walk = function (treeNode, removed) {
      if (removed) {
        _this.removeIdSet.add(treeNode.id);
      }

      batchMutationData.texts = batchMutationData.texts.concat(removed ? [] : treeNode.texts).filter(function (m) {
        return !_this.removeIdSet.has(m.id);
      });
      batchMutationData.attributes = batchMutationData.attributes.concat(removed ? [] : treeNode.attributes).filter(function (m) {
        return !_this.removeIdSet.has(m.id);
      });

      if (!_this.removeIdSet.has(treeNode.id) && !_this.removeIdSet.has(treeNode.mutation.parentId) && !removed) {
        batchMutationData.adds.push(treeNode.mutation);

        if (treeNode.children) {
          Object.values(treeNode.children).forEach(function (n) {
            return walk(n, false);
          });
        }
      } else {
        Object.values(treeNode.children).forEach(function (n) {
          return walk(n, true);
        });
      }
    };

    Object.values(tree).forEach(function (n) {
      return walk(n, false);
    });

    try {
      for (var _d = (0, _tslibEs.__values)(this.scrollMap.keys()), _e = _d.next(); !_e.done; _e = _d.next()) {
        var id = _e.value;

        if (this.removeIdSet.has(id)) {
          this.scrollMap.delete(id);
        }
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
      } finally {
        if (e_1) throw e_1.error;
      }
    }

    try {
      for (var _f = (0, _tslibEs.__values)(this.inputMap.keys()), _g = _f.next(); !_g.done; _g = _f.next()) {
        var id = _g.value;

        if (this.removeIdSet.has(id)) {
          this.inputMap.delete(id);
        }
      }
    } catch (e_2_1) {
      e_2 = {
        error: e_2_1
      };
    } finally {
      try {
        if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
      } finally {
        if (e_2) throw e_2.error;
      }
    }

    var scrollMap = new Map(this.scrollMap);
    var inputMap = new Map(this.inputMap);
    this.reset();
    return {
      mutationData: batchMutationData,
      scrollMap: scrollMap,
      inputMap: inputMap
    };
  };

  TreeIndex.prototype.reset = function () {
    this.tree = [];
    this.indexes = new Map();
    this.removeNodeMutations = [];
    this.textMutations = [];
    this.attributeMutations = [];
    this.removeIdSet = new Set();
    this.scrollMap = new Map();
    this.inputMap = new Map();
  };

  return TreeIndex;
}();

exports.TreeIndex = TreeIndex;

function queueToResolveTrees(queue) {
  var e_3, _a;

  var queueNodeMap = {};

  var putIntoMap = function (m, parent) {
    var nodeInTree = {
      value: m,
      parent: parent,
      children: []
    };
    queueNodeMap[m.node.id] = nodeInTree;
    return nodeInTree;
  };

  var queueNodeTrees = [];

  try {
    for (var queue_1 = (0, _tslibEs.__values)(queue), queue_1_1 = queue_1.next(); !queue_1_1.done; queue_1_1 = queue_1.next()) {
      var mutation = queue_1_1.value;
      var nextId = mutation.nextId,
          parentId = mutation.parentId;

      if (nextId && nextId in queueNodeMap) {
        var nextInTree = queueNodeMap[nextId];

        if (nextInTree.parent) {
          var idx = nextInTree.parent.children.indexOf(nextInTree);
          nextInTree.parent.children.splice(idx, 0, putIntoMap(mutation, nextInTree.parent));
        } else {
          var idx = queueNodeTrees.indexOf(nextInTree);
          queueNodeTrees.splice(idx, 0, putIntoMap(mutation, null));
        }

        continue;
      }

      if (parentId in queueNodeMap) {
        var parentInTree = queueNodeMap[parentId];
        parentInTree.children.push(putIntoMap(mutation, parentInTree));
        continue;
      }

      queueNodeTrees.push(putIntoMap(mutation, null));
    }
  } catch (e_3_1) {
    e_3 = {
      error: e_3_1
    };
  } finally {
    try {
      if (queue_1_1 && !queue_1_1.done && (_a = queue_1.return)) _a.call(queue_1);
    } finally {
      if (e_3) throw e_3.error;
    }
  }

  return queueNodeTrees;
}

function iterateResolveTree(tree, cb) {
  cb(tree.value);

  for (var i = tree.children.length - 1; i >= 0; i--) {
    iterateResolveTree(tree.children[i], cb);
  }
}
},{"../node_modules/tslib/tslib.es6.js":"../node_modules/rrweb/es/rrweb/node_modules/tslib/tslib.es6.js","../node_modules/rrweb-snapshot/es/rrweb-snapshot.js":"../node_modules/rrweb/es/rrweb/node_modules/rrweb-snapshot/es/rrweb-snapshot.js","./types.js":"../node_modules/rrweb/es/rrweb/src/types.js"}],"../node_modules/rrweb/es/rrweb/src/record/mutation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tslibEs = require("../../node_modules/tslib/tslib.es6.js");

var _rrwebSnapshot = require("../../node_modules/rrweb-snapshot/es/rrweb-snapshot.js");

var _utils = require("../utils.js");

function isNodeInLinkedList(n) {
  return '__ln' in n;
}

var DoubleLinkedList = function () {
  function DoubleLinkedList() {
    this.length = 0;
    this.head = null;
  }

  DoubleLinkedList.prototype.get = function (position) {
    if (position >= this.length) {
      throw new Error('Position outside of list range');
    }

    var current = this.head;

    for (var index = 0; index < position; index++) {
      current = (current === null || current === void 0 ? void 0 : current.next) || null;
    }

    return current;
  };

  DoubleLinkedList.prototype.addNode = function (n) {
    var node = {
      value: n,
      previous: null,
      next: null
    };
    n.__ln = node;

    if (n.previousSibling && isNodeInLinkedList(n.previousSibling)) {
      var current = n.previousSibling.__ln.next;
      node.next = current;
      node.previous = n.previousSibling.__ln;
      n.previousSibling.__ln.next = node;

      if (current) {
        current.previous = node;
      }
    } else if (n.nextSibling && isNodeInLinkedList(n.nextSibling)) {
      var current = n.nextSibling.__ln.previous;
      node.previous = current;
      node.next = n.nextSibling.__ln;
      n.nextSibling.__ln.previous = node;

      if (current) {
        current.next = node;
      }
    } else {
      if (this.head) {
        this.head.previous = node;
      }

      node.next = this.head;
      this.head = node;
    }

    this.length++;
  };

  DoubleLinkedList.prototype.removeNode = function (n) {
    var current = n.__ln;

    if (!this.head) {
      return;
    }

    if (!current.previous) {
      this.head = current.next;

      if (this.head) {
        this.head.previous = null;
      }
    } else {
      current.previous.next = current.next;

      if (current.next) {
        current.next.previous = current.previous;
      }
    }

    if (n.__ln) {
      delete n.__ln;
    }

    this.length--;
  };

  return DoubleLinkedList;
}();

var moveKey = function (id, parentId) {
  return id + "@" + parentId;
};

function isINode(n) {
  return '__sn' in n;
}

var MutationBuffer = function () {
  function MutationBuffer() {
    var _this = this;

    this.frozen = false;
    this.texts = [];
    this.attributes = [];
    this.removes = [];
    this.mapRemoves = [];
    this.movedMap = {};
    this.addedSet = new Set();
    this.movedSet = new Set();
    this.droppedSet = new Set();

    this.processMutations = function (mutations) {
      mutations.forEach(_this.processMutation);

      if (!_this.frozen) {
        _this.emit();
      }
    };

    this.emit = function () {
      var e_1, _a, e_2, _b;

      var adds = [];
      var addList = new DoubleLinkedList();

      var getNextId = function (n) {
        var ns = n;
        var nextId = _rrwebSnapshot.IGNORED_NODE;

        while (nextId === _rrwebSnapshot.IGNORED_NODE) {
          ns = ns && ns.nextSibling;
          nextId = ns && _utils.mirror.getId(ns);
        }

        if (nextId === -1 && (0, _utils.isBlocked)(n.nextSibling, _this.blockClass)) {
          nextId = null;
        }

        return nextId;
      };

      var pushAdd = function (n) {
        if (!n.parentNode || !document.contains(n)) {
          return;
        }

        var parentId = _utils.mirror.getId(n.parentNode);

        var nextId = getNextId(n);

        if (parentId === -1 || nextId === -1) {
          return addList.addNode(n);
        }

        var sn = (0, _rrwebSnapshot.serializeNodeWithId)(n, {
          doc: document,
          map: _utils.mirror.map,
          blockClass: _this.blockClass,
          blockSelector: _this.blockSelector,
          skipChild: true,
          inlineStylesheet: _this.inlineStylesheet,
          maskInputOptions: _this.maskInputOptions,
          slimDOMOptions: _this.slimDOMOptions,
          recordCanvas: _this.recordCanvas
        });

        if (sn) {
          adds.push({
            parentId: parentId,
            nextId: nextId,
            node: sn
          });
        }
      };

      while (_this.mapRemoves.length) {
        _utils.mirror.removeNodeFromMap(_this.mapRemoves.shift());
      }

      try {
        for (var _c = (0, _tslibEs.__values)(_this.movedSet), _d = _c.next(); !_d.done; _d = _c.next()) {
          var n = _d.value;

          if (isParentRemoved(_this.removes, n) && !_this.movedSet.has(n.parentNode)) {
            continue;
          }

          pushAdd(n);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
        } finally {
          if (e_1) throw e_1.error;
        }
      }

      try {
        for (var _e = (0, _tslibEs.__values)(_this.addedSet), _f = _e.next(); !_f.done; _f = _e.next()) {
          var n = _f.value;

          if (!isAncestorInSet(_this.droppedSet, n) && !isParentRemoved(_this.removes, n)) {
            pushAdd(n);
          } else if (isAncestorInSet(_this.movedSet, n)) {
            pushAdd(n);
          } else {
            _this.droppedSet.add(n);
          }
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
        } finally {
          if (e_2) throw e_2.error;
        }
      }

      var candidate = null;

      while (addList.length) {
        var node = null;

        if (candidate) {
          var parentId = _utils.mirror.getId(candidate.value.parentNode);

          var nextId = getNextId(candidate.value);

          if (parentId !== -1 && nextId !== -1) {
            node = candidate;
          }
        }

        if (!node) {
          for (var index = addList.length - 1; index >= 0; index--) {
            var _node = addList.get(index);

            var parentId = _utils.mirror.getId(_node.value.parentNode);

            var nextId = getNextId(_node.value);

            if (parentId !== -1 && nextId !== -1) {
              node = _node;
              break;
            }
          }
        }

        if (!node) {
          while (addList.head) {
            addList.removeNode(addList.head.value);
          }

          break;
        }

        candidate = node.previous;
        addList.removeNode(node.value);
        pushAdd(node.value);
      }

      var payload = {
        texts: _this.texts.map(function (text) {
          return {
            id: _utils.mirror.getId(text.node),
            value: text.value
          };
        }).filter(function (text) {
          return _utils.mirror.has(text.id);
        }),
        attributes: _this.attributes.map(function (attribute) {
          return {
            id: _utils.mirror.getId(attribute.node),
            attributes: attribute.attributes
          };
        }).filter(function (attribute) {
          return _utils.mirror.has(attribute.id);
        }),
        removes: _this.removes,
        adds: adds
      };

      if (!payload.texts.length && !payload.attributes.length && !payload.removes.length && !payload.adds.length) {
        return;
      }

      _this.texts = [];
      _this.attributes = [];
      _this.removes = [];
      _this.addedSet = new Set();
      _this.movedSet = new Set();
      _this.droppedSet = new Set();
      _this.movedMap = {};

      _this.emissionCallback(payload);
    };

    this.processMutation = function (m) {
      if ((0, _utils.isIgnored)(m.target)) {
        return;
      }

      switch (m.type) {
        case 'characterData':
          {
            var value = m.target.textContent;

            if (!(0, _utils.isBlocked)(m.target, _this.blockClass) && value !== m.oldValue) {
              _this.texts.push({
                value: value,
                node: m.target
              });
            }

            break;
          }

        case 'attributes':
          {
            var value = m.target.getAttribute(m.attributeName);

            if ((0, _utils.isBlocked)(m.target, _this.blockClass) || value === m.oldValue) {
              return;
            }

            var item = _this.attributes.find(function (a) {
              return a.node === m.target;
            });

            if (!item) {
              item = {
                node: m.target,
                attributes: {}
              };

              _this.attributes.push(item);
            }

            item.attributes[m.attributeName] = (0, _rrwebSnapshot.transformAttribute)(document, m.attributeName, value);
            break;
          }

        case 'childList':
          {
            m.addedNodes.forEach(function (n) {
              return _this.genAdds(n, m.target);
            });
            m.removedNodes.forEach(function (n) {
              var nodeId = _utils.mirror.getId(n);

              var parentId = _utils.mirror.getId(m.target);

              if ((0, _utils.isBlocked)(n, _this.blockClass) || (0, _utils.isBlocked)(m.target, _this.blockClass) || (0, _utils.isIgnored)(n)) {
                return;
              }

              if (_this.addedSet.has(n)) {
                deepDelete(_this.addedSet, n);

                _this.droppedSet.add(n);
              } else if (_this.addedSet.has(m.target) && nodeId === -1) ;else if ((0, _utils.isAncestorRemoved)(m.target)) ;else if (_this.movedSet.has(n) && _this.movedMap[moveKey(nodeId, parentId)]) {
                deepDelete(_this.movedSet, n);
              } else {
                _this.removes.push({
                  parentId: parentId,
                  id: nodeId
                });
              }

              _this.mapRemoves.push(n);
            });
            break;
          }
      }
    };

    this.genAdds = function (n, target) {
      if ((0, _utils.isBlocked)(n, _this.blockClass)) {
        return;
      }

      if (target && (0, _utils.isBlocked)(target, _this.blockClass)) {
        return;
      }

      if (isINode(n)) {
        if ((0, _utils.isIgnored)(n)) {
          return;
        }

        _this.movedSet.add(n);

        var targetId = null;

        if (target && isINode(target)) {
          targetId = target.__sn.id;
        }

        if (targetId) {
          _this.movedMap[moveKey(n.__sn.id, targetId)] = true;
        }
      } else {
        _this.addedSet.add(n);

        _this.droppedSet.delete(n);
      }

      n.childNodes.forEach(function (childN) {
        return _this.genAdds(childN);
      });
    };
  }

  MutationBuffer.prototype.init = function (cb, blockClass, blockSelector, inlineStylesheet, maskInputOptions, recordCanvas, slimDOMOptions) {
    this.blockClass = blockClass;
    this.blockSelector = blockSelector;
    this.inlineStylesheet = inlineStylesheet;
    this.maskInputOptions = maskInputOptions;
    this.recordCanvas = recordCanvas;
    this.slimDOMOptions = slimDOMOptions;
    this.emissionCallback = cb;
  };

  MutationBuffer.prototype.freeze = function () {
    this.frozen = true;
  };

  MutationBuffer.prototype.unfreeze = function () {
    this.frozen = false;
  };

  MutationBuffer.prototype.isFrozen = function () {
    return this.frozen;
  };

  return MutationBuffer;
}();

function deepDelete(addsSet, n) {
  addsSet.delete(n);
  n.childNodes.forEach(function (childN) {
    return deepDelete(addsSet, childN);
  });
}

function isParentRemoved(removes, n) {
  var parentNode = n.parentNode;

  if (!parentNode) {
    return false;
  }

  var parentId = _utils.mirror.getId(parentNode);

  if (removes.some(function (r) {
    return r.id === parentId;
  })) {
    return true;
  }

  return isParentRemoved(removes, parentNode);
}

function isAncestorInSet(set, n) {
  var parentNode = n.parentNode;

  if (!parentNode) {
    return false;
  }

  if (set.has(parentNode)) {
    return true;
  }

  return isAncestorInSet(set, parentNode);
}

var _default = MutationBuffer;
exports.default = _default;
},{"../../node_modules/tslib/tslib.es6.js":"../node_modules/rrweb/es/rrweb/node_modules/tslib/tslib.es6.js","../../node_modules/rrweb-snapshot/es/rrweb-snapshot.js":"../node_modules/rrweb/es/rrweb/node_modules/rrweb-snapshot/es/rrweb-snapshot.js","../utils.js":"../node_modules/rrweb/es/rrweb/src/utils.js"}],"../node_modules/rrweb/es/rrweb/src/record/stringify.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringify = stringify;

function pathToSelector(node) {
  if (!node || !node.outerHTML) {
    return '';
  }

  var path = '';

  while (node.parentElement) {
    var name = node.localName;
    if (!name) break;
    name = name.toLowerCase();
    var parent = node.parentElement;
    var domSiblings = [];

    if (parent.children && parent.children.length > 0) {
      for (var i = 0; i < parent.children.length; i++) {
        var sibling = parent.children[i];

        if (sibling.localName && sibling.localName.toLowerCase) {
          if (sibling.localName.toLowerCase() === name) {
            domSiblings.push(sibling);
          }
        }
      }
    }

    if (domSiblings.length > 1) {
      name += ':eq(' + domSiblings.indexOf(node) + ')';
    }

    path = name + (path ? '>' + path : '');
    node = parent;
  }

  return path;
}

function stringify(obj, stringifyOptions) {
  var options = {
    numOfKeysLimit: 50
  };
  Object.assign(options, stringifyOptions);
  var stack = [],
      keys = [];
  return JSON.stringify(obj, function (key, value) {
    if (stack.length > 0) {
      var thisPos = stack.indexOf(this);
      ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
      ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);

      if (~stack.indexOf(value)) {
        if (stack[0] === value) value = '[Circular ~]';else value = '[Circular ~.' + keys.slice(0, stack.indexOf(value)).join('.') + ']';
      }
    } else stack.push(value);

    if (value === null || value === undefined) return value;

    if (shouldToString(value)) {
      return toString(value);
    }

    if (value instanceof Event) {
      var eventResult = {};

      for (var key_1 in value) {
        var eventValue = value[key_1];
        if (Array.isArray(eventValue)) eventResult[key_1] = pathToSelector(eventValue.length ? eventValue[0] : null);else eventResult[key_1] = eventValue;
      }

      return eventResult;
    } else if (value instanceof Node) {
      if (value instanceof HTMLElement) return value ? value.outerHTML : '';
      return value.nodeName;
    }

    return value;
  });

  function shouldToString(obj) {
    if (typeof obj === 'object' && Object.keys(obj).length > options.numOfKeysLimit) return true;
    if (typeof obj === 'function') return true;
    return false;
  }

  function toString(obj) {
    var str = obj.toString();

    if (options.stringLengthLimit && str.length > options.stringLengthLimit) {
      str = str.slice(0, options.stringLengthLimit) + "...";
    }

    return str;
  }
}
},{}],"../node_modules/rrweb/es/rrweb/src/record/observer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initObservers = initObservers;
exports.mutationBuffer = exports.INPUT_TAGS = void 0;

var _tslibEs = require("../../node_modules/tslib/tslib.es6.js");

var _types = require("../types.js");

var _utils = require("../utils.js");

var _mutation = _interopRequireDefault(require("./mutation.js"));

var _stringify = require("./stringify.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mutationBuffer = new _mutation.default();
exports.mutationBuffer = mutationBuffer;

function initMutationObserver(cb, blockClass, blockSelector, inlineStylesheet, maskInputOptions, recordCanvas, slimDOMOptions) {
  mutationBuffer.init(cb, blockClass, blockSelector, inlineStylesheet, maskInputOptions, recordCanvas, slimDOMOptions);
  var observer = new MutationObserver(mutationBuffer.processMutations.bind(mutationBuffer));
  observer.observe(document, {
    attributes: true,
    attributeOldValue: true,
    characterData: true,
    characterDataOldValue: true,
    childList: true,
    subtree: true
  });
  return observer;
}

function initMoveObserver(cb, sampling) {
  if (sampling.mousemove === false) {
    return function () {};
  }

  var threshold = typeof sampling.mousemove === 'number' ? sampling.mousemove : 50;
  var positions = [];
  var timeBaseline;
  var wrappedCb = (0, _utils.throttle)(function (isTouch) {
    var totalOffset = Date.now() - timeBaseline;
    cb(positions.map(function (p) {
      p.timeOffset -= totalOffset;
      return p;
    }), isTouch ? _types.IncrementalSource.TouchMove : _types.IncrementalSource.MouseMove);
    positions = [];
    timeBaseline = null;
  }, 500);
  var updatePosition = (0, _utils.throttle)(function (evt) {
    var target = evt.target;

    var _a = (0, _utils.isTouchEvent)(evt) ? evt.changedTouches[0] : evt,
        clientX = _a.clientX,
        clientY = _a.clientY;

    if (!timeBaseline) {
      timeBaseline = Date.now();
    }

    positions.push({
      x: clientX,
      y: clientY,
      id: _utils.mirror.getId(target),
      timeOffset: Date.now() - timeBaseline
    });
    wrappedCb((0, _utils.isTouchEvent)(evt));
  }, threshold, {
    trailing: false
  });
  var handlers = [(0, _utils.on)('mousemove', updatePosition), (0, _utils.on)('touchmove', updatePosition)];
  return function () {
    handlers.forEach(function (h) {
      return h();
    });
  };
}

function initMouseInteractionObserver(cb, blockClass, sampling) {
  if (sampling.mouseInteraction === false) {
    return function () {};
  }

  var disableMap = sampling.mouseInteraction === true || sampling.mouseInteraction === undefined ? {} : sampling.mouseInteraction;
  var handlers = [];

  var getHandler = function (eventKey) {
    return function (event) {
      if ((0, _utils.isBlocked)(event.target, blockClass)) {
        return;
      }

      var id = _utils.mirror.getId(event.target);

      var _a = (0, _utils.isTouchEvent)(event) ? event.changedTouches[0] : event,
          clientX = _a.clientX,
          clientY = _a.clientY;

      cb({
        type: _types.MouseInteractions[eventKey],
        id: id,
        x: clientX,
        y: clientY
      });
    };
  };

  Object.keys(_types.MouseInteractions).filter(function (key) {
    return Number.isNaN(Number(key)) && !key.endsWith('_Departed') && disableMap[key] !== false;
  }).forEach(function (eventKey) {
    var eventName = eventKey.toLowerCase();
    var handler = getHandler(eventKey);
    handlers.push((0, _utils.on)(eventName, handler));
  });
  return function () {
    handlers.forEach(function (h) {
      return h();
    });
  };
}

function initScrollObserver(cb, blockClass, sampling) {
  var updatePosition = (0, _utils.throttle)(function (evt) {
    if (!evt.target || (0, _utils.isBlocked)(evt.target, blockClass)) {
      return;
    }

    var id = _utils.mirror.getId(evt.target);

    if (evt.target === document) {
      var scrollEl = document.scrollingElement || document.documentElement;
      cb({
        id: id,
        x: scrollEl.scrollLeft,
        y: scrollEl.scrollTop
      });
    } else {
      cb({
        id: id,
        x: evt.target.scrollLeft,
        y: evt.target.scrollTop
      });
    }
  }, sampling.scroll || 100);
  return (0, _utils.on)('scroll', updatePosition);
}

function initViewportResizeObserver(cb) {
  var last_h = -1;
  var last_w = -1;
  var updateDimension = (0, _utils.throttle)(function () {
    var height = (0, _utils.getWindowHeight)();
    var width = (0, _utils.getWindowWidth)();

    if (last_h !== height || last_w != width) {
      cb({
        width: Number(width),
        height: Number(height)
      });
      last_h = height;
      last_w = width;
    }
  }, 200);
  return (0, _utils.on)('resize', updateDimension, window);
}

var INPUT_TAGS = ['INPUT', 'TEXTAREA', 'SELECT'];
exports.INPUT_TAGS = INPUT_TAGS;
var lastInputValueMap = new WeakMap();

function initInputObserver(cb, blockClass, ignoreClass, maskInputOptions, maskInputFn, sampling) {
  function eventHandler(event) {
    var target = event.target;

    if (!target || !target.tagName || INPUT_TAGS.indexOf(target.tagName) < 0 || (0, _utils.isBlocked)(target, blockClass)) {
      return;
    }

    var type = target.type;

    if (type === 'password' || target.classList.contains(ignoreClass)) {
      return;
    }

    var text = target.value;
    var isChecked = false;

    if (type === 'radio' || type === 'checkbox') {
      isChecked = target.checked;
    } else if (maskInputOptions[target.tagName.toLowerCase()] || maskInputOptions[type]) {
      if (maskInputFn) {
        text = maskInputFn(text);
      } else {
        text = '*'.repeat(text.length);
      }
    }

    cbWithDedup(target, {
      text: text,
      isChecked: isChecked
    });
    var name = target.name;

    if (type === 'radio' && name && isChecked) {
      document.querySelectorAll("input[type=\"radio\"][name=\"" + name + "\"]").forEach(function (el) {
        if (el !== target) {
          cbWithDedup(el, {
            text: el.value,
            isChecked: !isChecked
          });
        }
      });
    }
  }

  function cbWithDedup(target, v) {
    var lastInputValue = lastInputValueMap.get(target);

    if (!lastInputValue || lastInputValue.text !== v.text || lastInputValue.isChecked !== v.isChecked) {
      lastInputValueMap.set(target, v);

      var id = _utils.mirror.getId(target);

      cb((0, _tslibEs.__assign)((0, _tslibEs.__assign)({}, v), {
        id: id
      }));
    }
  }

  var events = sampling.input === 'last' ? ['change'] : ['input', 'change'];
  var handlers = events.map(function (eventName) {
    return (0, _utils.on)(eventName, eventHandler);
  });
  var propertyDescriptor = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value');
  var hookProperties = [[HTMLInputElement.prototype, 'value'], [HTMLInputElement.prototype, 'checked'], [HTMLSelectElement.prototype, 'value'], [HTMLTextAreaElement.prototype, 'value'], [HTMLSelectElement.prototype, 'selectedIndex']];

  if (propertyDescriptor && propertyDescriptor.set) {
    handlers.push.apply(handlers, (0, _tslibEs.__spread)(hookProperties.map(function (p) {
      return (0, _utils.hookSetter)(p[0], p[1], {
        set: function () {
          eventHandler({
            target: this
          });
        }
      });
    })));
  }

  return function () {
    handlers.forEach(function (h) {
      return h();
    });
  };
}

function initStyleSheetObserver(cb) {
  var insertRule = CSSStyleSheet.prototype.insertRule;

  CSSStyleSheet.prototype.insertRule = function (rule, index) {
    var id = _utils.mirror.getId(this.ownerNode);

    if (id !== -1) {
      cb({
        id: id,
        adds: [{
          rule: rule,
          index: index
        }]
      });
    }

    return insertRule.apply(this, arguments);
  };

  var deleteRule = CSSStyleSheet.prototype.deleteRule;

  CSSStyleSheet.prototype.deleteRule = function (index) {
    var id = _utils.mirror.getId(this.ownerNode);

    if (id !== -1) {
      cb({
        id: id,
        removes: [{
          index: index
        }]
      });
    }

    return deleteRule.apply(this, arguments);
  };

  return function () {
    CSSStyleSheet.prototype.insertRule = insertRule;
    CSSStyleSheet.prototype.deleteRule = deleteRule;
  };
}

function initMediaInteractionObserver(mediaInteractionCb, blockClass) {
  var handler = function (type) {
    return function (event) {
      var target = event.target;

      if (!target || (0, _utils.isBlocked)(target, blockClass)) {
        return;
      }

      mediaInteractionCb({
        type: type === 'play' ? _types.MediaInteractions.Play : _types.MediaInteractions.Pause,
        id: _utils.mirror.getId(target)
      });
    };
  };

  var handlers = [(0, _utils.on)('play', handler('play')), (0, _utils.on)('pause', handler('pause'))];
  return function () {
    handlers.forEach(function (h) {
      return h();
    });
  };
}

function initCanvasMutationObserver(cb, blockClass) {
  var e_1, _a;

  var props = Object.getOwnPropertyNames(CanvasRenderingContext2D.prototype);
  var handlers = [];

  var _loop_1 = function (prop) {
    try {
      if (typeof CanvasRenderingContext2D.prototype[prop] !== 'function') {
        return "continue";
      }

      var restoreHandler = (0, _utils.patch)(CanvasRenderingContext2D.prototype, prop, function (original) {
        return function () {
          var _this = this;

          var args = [];

          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }

          if (!(0, _utils.isBlocked)(this.canvas, blockClass)) {
            setTimeout(function () {
              var recordArgs = (0, _tslibEs.__spread)(args);

              if (prop === 'drawImage') {
                if (recordArgs[0] && recordArgs[0] instanceof HTMLCanvasElement) {
                  recordArgs[0] = recordArgs[0].toDataURL();
                }
              }

              cb({
                id: _utils.mirror.getId(_this.canvas),
                property: prop,
                args: recordArgs
              });
            }, 0);
          }

          return original.apply(this, args);
        };
      });
      handlers.push(restoreHandler);
    } catch (_a) {
      var hookHandler = (0, _utils.hookSetter)(CanvasRenderingContext2D.prototype, prop, {
        set: function (v) {
          cb({
            id: _utils.mirror.getId(this.canvas),
            property: prop,
            args: [v],
            setter: true
          });
        }
      });
      handlers.push(hookHandler);
    }
  };

  try {
    for (var props_1 = (0, _tslibEs.__values)(props), props_1_1 = props_1.next(); !props_1_1.done; props_1_1 = props_1.next()) {
      var prop = props_1_1.value;

      _loop_1(prop);
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (props_1_1 && !props_1_1.done && (_a = props_1.return)) _a.call(props_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }

  return function () {
    handlers.forEach(function (h) {
      return h();
    });
  };
}

function initFontObserver(cb) {
  var handlers = [];
  var fontMap = new WeakMap();
  var originalFontFace = FontFace;

  window.FontFace = function FontFace(family, source, descriptors) {
    var fontFace = new originalFontFace(family, source, descriptors);
    fontMap.set(fontFace, {
      family: family,
      buffer: typeof source !== 'string',
      descriptors: descriptors,
      fontSource: typeof source === 'string' ? source : JSON.stringify(Array.from(new Uint8Array(source)))
    });
    return fontFace;
  };

  var restoreHandler = (0, _utils.patch)(document.fonts, 'add', function (original) {
    return function (fontFace) {
      setTimeout(function () {
        var p = fontMap.get(fontFace);

        if (p) {
          cb(p);
          fontMap.delete(fontFace);
        }
      }, 0);
      return original.apply(this, [fontFace]);
    };
  });
  handlers.push(function () {
    window.FonFace = originalFontFace;
  });
  handlers.push(restoreHandler);
  return function () {
    handlers.forEach(function (h) {
      return h();
    });
  };
}

function initLogObserver(cb, logOptions) {
  var e_2, _a;

  var _this = this;

  var logger = logOptions.logger;
  if (!logger) return function () {};
  var logCount = 0;
  var cancelHandlers = [];

  if (logOptions.level.includes('error')) {
    if (window) {
      var originalOnError_1 = window.onerror;

      window.onerror = function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        originalOnError_1 && originalOnError_1.apply(_this, args);
        var stack = [];
        if (args[args.length - 1] instanceof Error) stack = parseStack(args[args.length - 1].stack, 0);
        var payload = [(0, _stringify.stringify)(args[0], logOptions.stringifyOptions)];
        cb({
          level: 'error',
          trace: stack,
          payload: payload
        });
      };

      cancelHandlers.push(function () {
        window.onerror = originalOnError_1;
      });
    }
  }

  try {
    for (var _b = (0, _tslibEs.__values)(logOptions.level), _c = _b.next(); !_c.done; _c = _b.next()) {
      var levelType = _c.value;
      cancelHandlers.push(replace(logger, levelType));
    }
  } catch (e_2_1) {
    e_2 = {
      error: e_2_1
    };
  } finally {
    try {
      if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
    } finally {
      if (e_2) throw e_2.error;
    }
  }

  return function () {
    cancelHandlers.forEach(function (h) {
      return h();
    });
  };

  function replace(logger, level) {
    var _this = this;

    if (!logger[level]) return function () {};
    return (0, _utils.patch)(logger, level, function (original) {
      return function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        original.apply(_this, args);

        try {
          var stack = parseStack(new Error().stack);
          var payload = args.map(function (s) {
            return (0, _stringify.stringify)(s, logOptions.stringifyOptions);
          });
          logCount++;
          if (logCount < logOptions.lengthThreshold) cb({
            level: level,
            trace: stack,
            payload: payload
          });else if (logCount === logOptions.lengthThreshold) cb({
            level: 'warn',
            trace: [],
            payload: [(0, _stringify.stringify)('The number of log records reached the threshold.')]
          });
        } catch (error) {
          original.apply(void 0, (0, _tslibEs.__spread)(['rrweb logger error:', error], args));
        }
      };
    });
  }

  function parseStack(stack, omitDepth) {
    if (omitDepth === void 0) {
      omitDepth = 1;
    }

    var stacks = [];

    if (stack) {
      stacks = stack.split('at').splice(1 + omitDepth).map(function (s) {
        return s.trim();
      });
    }

    return stacks;
  }
}

function mergeHooks(o, hooks) {
  var mutationCb = o.mutationCb,
      mousemoveCb = o.mousemoveCb,
      mouseInteractionCb = o.mouseInteractionCb,
      scrollCb = o.scrollCb,
      viewportResizeCb = o.viewportResizeCb,
      inputCb = o.inputCb,
      mediaInteractionCb = o.mediaInteractionCb,
      styleSheetRuleCb = o.styleSheetRuleCb,
      canvasMutationCb = o.canvasMutationCb,
      fontCb = o.fontCb,
      logCb = o.logCb;

  o.mutationCb = function () {
    var p = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      p[_i] = arguments[_i];
    }

    if (hooks.mutation) {
      hooks.mutation.apply(hooks, (0, _tslibEs.__spread)(p));
    }

    mutationCb.apply(void 0, (0, _tslibEs.__spread)(p));
  };

  o.mousemoveCb = function () {
    var p = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      p[_i] = arguments[_i];
    }

    if (hooks.mousemove) {
      hooks.mousemove.apply(hooks, (0, _tslibEs.__spread)(p));
    }

    mousemoveCb.apply(void 0, (0, _tslibEs.__spread)(p));
  };

  o.mouseInteractionCb = function () {
    var p = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      p[_i] = arguments[_i];
    }

    if (hooks.mouseInteraction) {
      hooks.mouseInteraction.apply(hooks, (0, _tslibEs.__spread)(p));
    }

    mouseInteractionCb.apply(void 0, (0, _tslibEs.__spread)(p));
  };

  o.scrollCb = function () {
    var p = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      p[_i] = arguments[_i];
    }

    if (hooks.scroll) {
      hooks.scroll.apply(hooks, (0, _tslibEs.__spread)(p));
    }

    scrollCb.apply(void 0, (0, _tslibEs.__spread)(p));
  };

  o.viewportResizeCb = function () {
    var p = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      p[_i] = arguments[_i];
    }

    if (hooks.viewportResize) {
      hooks.viewportResize.apply(hooks, (0, _tslibEs.__spread)(p));
    }

    viewportResizeCb.apply(void 0, (0, _tslibEs.__spread)(p));
  };

  o.inputCb = function () {
    var p = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      p[_i] = arguments[_i];
    }

    if (hooks.input) {
      hooks.input.apply(hooks, (0, _tslibEs.__spread)(p));
    }

    inputCb.apply(void 0, (0, _tslibEs.__spread)(p));
  };

  o.mediaInteractionCb = function () {
    var p = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      p[_i] = arguments[_i];
    }

    if (hooks.mediaInteaction) {
      hooks.mediaInteaction.apply(hooks, (0, _tslibEs.__spread)(p));
    }

    mediaInteractionCb.apply(void 0, (0, _tslibEs.__spread)(p));
  };

  o.styleSheetRuleCb = function () {
    var p = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      p[_i] = arguments[_i];
    }

    if (hooks.styleSheetRule) {
      hooks.styleSheetRule.apply(hooks, (0, _tslibEs.__spread)(p));
    }

    styleSheetRuleCb.apply(void 0, (0, _tslibEs.__spread)(p));
  };

  o.canvasMutationCb = function () {
    var p = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      p[_i] = arguments[_i];
    }

    if (hooks.canvasMutation) {
      hooks.canvasMutation.apply(hooks, (0, _tslibEs.__spread)(p));
    }

    canvasMutationCb.apply(void 0, (0, _tslibEs.__spread)(p));
  };

  o.fontCb = function () {
    var p = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      p[_i] = arguments[_i];
    }

    if (hooks.font) {
      hooks.font.apply(hooks, (0, _tslibEs.__spread)(p));
    }

    fontCb.apply(void 0, (0, _tslibEs.__spread)(p));
  };

  o.logCb = function () {
    var p = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      p[_i] = arguments[_i];
    }

    if (hooks.log) {
      hooks.log.apply(hooks, (0, _tslibEs.__spread)(p));
    }

    logCb.apply(void 0, (0, _tslibEs.__spread)(p));
  };
}

function initObservers(o, hooks) {
  if (hooks === void 0) {
    hooks = {};
  }

  mergeHooks(o, hooks);
  var mutationObserver = initMutationObserver(o.mutationCb, o.blockClass, o.blockSelector, o.inlineStylesheet, o.maskInputOptions, o.recordCanvas, o.slimDOMOptions);
  var mousemoveHandler = initMoveObserver(o.mousemoveCb, o.sampling);
  var mouseInteractionHandler = initMouseInteractionObserver(o.mouseInteractionCb, o.blockClass, o.sampling);
  var scrollHandler = initScrollObserver(o.scrollCb, o.blockClass, o.sampling);
  var viewportResizeHandler = initViewportResizeObserver(o.viewportResizeCb);
  var inputHandler = initInputObserver(o.inputCb, o.blockClass, o.ignoreClass, o.maskInputOptions, o.maskInputFn, o.sampling);
  var mediaInteractionHandler = initMediaInteractionObserver(o.mediaInteractionCb, o.blockClass);
  var styleSheetObserver = initStyleSheetObserver(o.styleSheetRuleCb);
  var canvasMutationObserver = o.recordCanvas ? initCanvasMutationObserver(o.canvasMutationCb, o.blockClass) : function () {};
  var fontObserver = o.collectFonts ? initFontObserver(o.fontCb) : function () {};
  var logObserver = o.logOptions ? initLogObserver(o.logCb, o.logOptions) : function () {};
  return function () {
    mutationObserver.disconnect();
    mousemoveHandler();
    mouseInteractionHandler();
    scrollHandler();
    viewportResizeHandler();
    inputHandler();
    mediaInteractionHandler();
    styleSheetObserver();
    canvasMutationObserver();
    fontObserver();
    logObserver();
  };
}
},{"../../node_modules/tslib/tslib.es6.js":"../node_modules/rrweb/es/rrweb/node_modules/tslib/tslib.es6.js","../types.js":"../node_modules/rrweb/es/rrweb/src/types.js","../utils.js":"../node_modules/rrweb/es/rrweb/src/utils.js","./mutation.js":"../node_modules/rrweb/es/rrweb/src/record/mutation.js","./stringify.js":"../node_modules/rrweb/es/rrweb/src/record/stringify.js"}],"../node_modules/rrweb/es/rrweb/src/record/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tslibEs = require("../../node_modules/tslib/tslib.es6.js");

var _rrwebSnapshot = require("../../node_modules/rrweb-snapshot/es/rrweb-snapshot.js");

var _types = require("../types.js");

var _utils = require("../utils.js");

var _observer = require("./observer.js");

function wrapEvent(e) {
  return (0, _tslibEs.__assign)((0, _tslibEs.__assign)({}, e), {
    timestamp: Date.now()
  });
}

var wrappedEmit;

function record(options) {
  if (options === void 0) {
    options = {};
  }

  var emit = options.emit,
      checkoutEveryNms = options.checkoutEveryNms,
      checkoutEveryNth = options.checkoutEveryNth,
      _a = options.blockClass,
      blockClass = _a === void 0 ? 'rr-block' : _a,
      _b = options.blockSelector,
      blockSelector = _b === void 0 ? null : _b,
      _c = options.ignoreClass,
      ignoreClass = _c === void 0 ? 'rr-ignore' : _c,
      _d = options.inlineStylesheet,
      inlineStylesheet = _d === void 0 ? true : _d,
      maskAllInputs = options.maskAllInputs,
      _maskInputOptions = options.maskInputOptions,
      _slimDOMOptions = options.slimDOMOptions,
      maskInputFn = options.maskInputFn,
      hooks = options.hooks,
      packFn = options.packFn,
      _e = options.sampling,
      sampling = _e === void 0 ? {} : _e,
      mousemoveWait = options.mousemoveWait,
      _f = options.recordCanvas,
      recordCanvas = _f === void 0 ? false : _f,
      _g = options.collectFonts,
      collectFonts = _g === void 0 ? false : _g,
      _h = options.recordLog,
      recordLog = _h === void 0 ? false : _h;

  if (!emit) {
    throw new Error('emit function is required');
  }

  if (mousemoveWait !== undefined && sampling.mousemove === undefined) {
    sampling.mousemove = mousemoveWait;
  }

  var maskInputOptions = maskAllInputs === true ? {
    color: true,
    date: true,
    'datetime-local': true,
    email: true,
    month: true,
    number: true,
    range: true,
    search: true,
    tel: true,
    text: true,
    time: true,
    url: true,
    week: true,
    textarea: true,
    select: true
  } : _maskInputOptions !== undefined ? _maskInputOptions : {};
  var slimDOMOptions = _slimDOMOptions === true || _slimDOMOptions === 'all' ? {
    script: true,
    comment: true,
    headFavicon: true,
    headWhitespace: true,
    headMetaSocial: true,
    headMetaRobots: true,
    headMetaHttpEquiv: true,
    headMetaVerification: true,
    headMetaAuthorship: _slimDOMOptions === 'all',
    headMetaDescKeywords: _slimDOMOptions === 'all'
  } : _slimDOMOptions ? _slimDOMOptions : {};
  var defaultLogOptions = {
    level: ['assert', 'clear', 'count', 'countReset', 'debug', 'dir', 'dirxml', 'error', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'table', 'time', 'timeEnd', 'timeLog', 'trace', 'warn'],
    lengthThreshold: 1000,
    logger: console
  };
  var logOptions = recordLog ? recordLog === true ? defaultLogOptions : Object.assign({}, defaultLogOptions, recordLog) : {};
  (0, _utils.polyfill)();
  var lastFullSnapshotEvent;
  var incrementalSnapshotCount = 0;

  wrappedEmit = function (e, isCheckout) {
    if (_observer.mutationBuffer.isFrozen() && e.type !== _types.EventType.FullSnapshot && !(e.type === _types.EventType.IncrementalSnapshot && e.data.source === _types.IncrementalSource.Mutation)) {
      _observer.mutationBuffer.emit();

      _observer.mutationBuffer.unfreeze();
    }

    emit(packFn ? packFn(e) : e, isCheckout);

    if (e.type === _types.EventType.FullSnapshot) {
      lastFullSnapshotEvent = e;
      incrementalSnapshotCount = 0;
    } else if (e.type === _types.EventType.IncrementalSnapshot) {
      incrementalSnapshotCount++;
      var exceedCount = checkoutEveryNth && incrementalSnapshotCount >= checkoutEveryNth;
      var exceedTime = checkoutEveryNms && e.timestamp - lastFullSnapshotEvent.timestamp > checkoutEveryNms;

      if (exceedCount || exceedTime) {
        takeFullSnapshot(true);
      }
    }
  };

  function takeFullSnapshot(isCheckout) {
    var _a, _b, _c, _d;

    if (isCheckout === void 0) {
      isCheckout = false;
    }

    wrappedEmit(wrapEvent({
      type: _types.EventType.Meta,
      data: {
        href: window.location.href,
        width: (0, _utils.getWindowWidth)(),
        height: (0, _utils.getWindowHeight)()
      }
    }), isCheckout);

    var wasFrozen = _observer.mutationBuffer.isFrozen();

    _observer.mutationBuffer.freeze();

    var _e = (0, _tslibEs.__read)((0, _rrwebSnapshot.snapshot)(document, {
      blockClass: blockClass,
      blockSelector: blockSelector,
      inlineStylesheet: inlineStylesheet,
      maskAllInputs: maskInputOptions,
      slimDOM: slimDOMOptions,
      recordCanvas: recordCanvas
    }), 2),
        node = _e[0],
        idNodeMap = _e[1];

    if (!node) {
      return console.warn('Failed to snapshot the document');
    }

    _utils.mirror.map = idNodeMap;
    wrappedEmit(wrapEvent({
      type: _types.EventType.FullSnapshot,
      data: {
        node: node,
        initialOffset: {
          left: window.pageXOffset !== undefined ? window.pageXOffset : (document === null || document === void 0 ? void 0 : document.documentElement.scrollLeft) || ((_b = (_a = document === null || document === void 0 ? void 0 : document.body) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.scrollLeft) || (document === null || document === void 0 ? void 0 : document.body.scrollLeft) || 0,
          top: window.pageYOffset !== undefined ? window.pageYOffset : (document === null || document === void 0 ? void 0 : document.documentElement.scrollTop) || ((_d = (_c = document === null || document === void 0 ? void 0 : document.body) === null || _c === void 0 ? void 0 : _c.parentElement) === null || _d === void 0 ? void 0 : _d.scrollTop) || (document === null || document === void 0 ? void 0 : document.body.scrollTop) || 0
        }
      }
    }));

    if (!wasFrozen) {
      _observer.mutationBuffer.emit();

      _observer.mutationBuffer.unfreeze();
    }
  }

  try {
    var handlers_1 = [];
    handlers_1.push((0, _utils.on)('DOMContentLoaded', function () {
      wrappedEmit(wrapEvent({
        type: _types.EventType.DomContentLoaded,
        data: {}
      }));
    }));

    var init_1 = function () {
      takeFullSnapshot();
      handlers_1.push((0, _observer.initObservers)({
        mutationCb: function (m) {
          return wrappedEmit(wrapEvent({
            type: _types.EventType.IncrementalSnapshot,
            data: (0, _tslibEs.__assign)({
              source: _types.IncrementalSource.Mutation
            }, m)
          }));
        },
        mousemoveCb: function (positions, source) {
          return wrappedEmit(wrapEvent({
            type: _types.EventType.IncrementalSnapshot,
            data: {
              source: source,
              positions: positions
            }
          }));
        },
        mouseInteractionCb: function (d) {
          return wrappedEmit(wrapEvent({
            type: _types.EventType.IncrementalSnapshot,
            data: (0, _tslibEs.__assign)({
              source: _types.IncrementalSource.MouseInteraction
            }, d)
          }));
        },
        scrollCb: function (p) {
          return wrappedEmit(wrapEvent({
            type: _types.EventType.IncrementalSnapshot,
            data: (0, _tslibEs.__assign)({
              source: _types.IncrementalSource.Scroll
            }, p)
          }));
        },
        viewportResizeCb: function (d) {
          return wrappedEmit(wrapEvent({
            type: _types.EventType.IncrementalSnapshot,
            data: (0, _tslibEs.__assign)({
              source: _types.IncrementalSource.ViewportResize
            }, d)
          }));
        },
        inputCb: function (v) {
          return wrappedEmit(wrapEvent({
            type: _types.EventType.IncrementalSnapshot,
            data: (0, _tslibEs.__assign)({
              source: _types.IncrementalSource.Input
            }, v)
          }));
        },
        mediaInteractionCb: function (p) {
          return wrappedEmit(wrapEvent({
            type: _types.EventType.IncrementalSnapshot,
            data: (0, _tslibEs.__assign)({
              source: _types.IncrementalSource.MediaInteraction
            }, p)
          }));
        },
        styleSheetRuleCb: function (r) {
          return wrappedEmit(wrapEvent({
            type: _types.EventType.IncrementalSnapshot,
            data: (0, _tslibEs.__assign)({
              source: _types.IncrementalSource.StyleSheetRule
            }, r)
          }));
        },
        canvasMutationCb: function (p) {
          return wrappedEmit(wrapEvent({
            type: _types.EventType.IncrementalSnapshot,
            data: (0, _tslibEs.__assign)({
              source: _types.IncrementalSource.CanvasMutation
            }, p)
          }));
        },
        fontCb: function (p) {
          return wrappedEmit(wrapEvent({
            type: _types.EventType.IncrementalSnapshot,
            data: (0, _tslibEs.__assign)({
              source: _types.IncrementalSource.Font
            }, p)
          }));
        },
        logCb: function (p) {
          return wrappedEmit(wrapEvent({
            type: _types.EventType.IncrementalSnapshot,
            data: (0, _tslibEs.__assign)({
              source: _types.IncrementalSource.Log
            }, p)
          }));
        },
        blockClass: blockClass,
        blockSelector: blockSelector,
        ignoreClass: ignoreClass,
        maskInputOptions: maskInputOptions,
        maskInputFn: maskInputFn,
        inlineStylesheet: inlineStylesheet,
        sampling: sampling,
        recordCanvas: recordCanvas,
        collectFonts: collectFonts,
        slimDOMOptions: slimDOMOptions,
        logOptions: logOptions
      }, hooks));
    };

    if (document.readyState === 'interactive' || document.readyState === 'complete') {
      init_1();
    } else {
      handlers_1.push((0, _utils.on)('load', function () {
        wrappedEmit(wrapEvent({
          type: _types.EventType.Load,
          data: {}
        }));
        init_1();
      }, window));
    }

    return function () {
      handlers_1.forEach(function (h) {
        return h();
      });
    };
  } catch (error) {
    console.warn(error);
  }
}

record.addCustomEvent = function (tag, payload) {
  if (!wrappedEmit) {
    throw new Error('please add custom event after start recording');
  }

  wrappedEmit(wrapEvent({
    type: _types.EventType.Custom,
    data: {
      tag: tag,
      payload: payload
    }
  }));
};

record.freezePage = function () {
  _observer.mutationBuffer.freeze();
};

var _default = record;
exports.default = _default;
},{"../../node_modules/tslib/tslib.es6.js":"../node_modules/rrweb/es/rrweb/node_modules/tslib/tslib.es6.js","../../node_modules/rrweb-snapshot/es/rrweb-snapshot.js":"../node_modules/rrweb/es/rrweb/node_modules/rrweb-snapshot/es/rrweb-snapshot.js","../types.js":"../node_modules/rrweb/es/rrweb/src/types.js","../utils.js":"../node_modules/rrweb/es/rrweb/src/utils.js","./observer.js":"../node_modules/rrweb/es/rrweb/src/record/observer.js"}],"../node_modules/rrweb/es/rrweb/node_modules/mitt/dist/mitt.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

//      
// An event handler can take an optional event argument
// and should not return a value
// An array of all currently registered event handlers for a type
// A map of event types and their corresponding event handlers.

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all) {
  all = all || Object.create(null);
  return {
    /**
     * Register an event handler for the given type.
     *
     * @param  {String} type	Type of event to listen for, or `"*"` for all events
     * @param  {Function} handler Function to call in response to given event
     * @memberOf mitt
     */
    on: function on(type, handler) {
      (all[type] || (all[type] = [])).push(handler);
    },

    /**
     * Remove an event handler for the given type.
     *
     * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
     * @param  {Function} handler Handler function to remove
     * @memberOf mitt
     */
    off: function off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    /**
     * Invoke all handlers for the given type.
     * If present, `"*"` handlers are invoked after type-matched handlers.
     *
     * @param {String} type  The event type to invoke
     * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
     * @memberOf mitt
     */
    emit: function emit(type, evt) {
      (all[type] || []).slice().map(function (handler) {
        handler(evt);
      });
      (all['*'] || []).slice().map(function (handler) {
        handler(type, evt);
      });
    }
  };
}

var _default = mitt;
exports.default = _default;
},{}],"../node_modules/rrweb/es/rrweb/src/replay/smoothscroll.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.polyfill = polyfill;

function polyfill(w, d) {
  if (w === void 0) {
    w = window;
  }

  if (d === void 0) {
    d = document;
  }

  if ('scrollBehavior' in d.documentElement.style && w.__forceSmoothScrollPolyfill__ !== true) {
    return;
  }

  var Element = w.HTMLElement || w.Element;
  var SCROLL_TIME = 468;
  var original = {
    scroll: w.scroll || w.scrollTo,
    scrollBy: w.scrollBy,
    elementScroll: Element.prototype.scroll || scrollElement,
    scrollIntoView: Element.prototype.scrollIntoView
  };
  var now = w.performance && w.performance.now ? w.performance.now.bind(w.performance) : Date.now;

  function isMicrosoftBrowser(userAgent) {
    var userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];
    return new RegExp(userAgentPatterns.join('|')).test(userAgent);
  }

  var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;

  function scrollElement(x, y) {
    this.scrollLeft = x;
    this.scrollTop = y;
  }

  function ease(k) {
    return 0.5 * (1 - Math.cos(Math.PI * k));
  }

  function shouldBailOut(firstArg) {
    if (firstArg === null || typeof firstArg !== 'object' || firstArg.behavior === undefined || firstArg.behavior === 'auto' || firstArg.behavior === 'instant') {
      return true;
    }

    if (typeof firstArg === 'object' && firstArg.behavior === 'smooth') {
      return false;
    }

    throw new TypeError('behavior member of ScrollOptions ' + firstArg.behavior + ' is not a valid value for enumeration ScrollBehavior.');
  }

  function hasScrollableSpace(el, axis) {
    if (axis === 'Y') {
      return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
    }

    if (axis === 'X') {
      return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
    }
  }

  function canOverflow(el, axis) {
    var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];
    return overflowValue === 'auto' || overflowValue === 'scroll';
  }

  function isScrollable(el) {
    var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
    var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');
    return isScrollableY || isScrollableX;
  }

  function findScrollableParent(el) {
    while (el !== d.body && isScrollable(el) === false) {
      el = el.parentNode || el.host;
    }

    return el;
  }

  function step(context) {
    var time = now();
    var value;
    var currentX;
    var currentY;
    var elapsed = (time - context.startTime) / SCROLL_TIME;
    elapsed = elapsed > 1 ? 1 : elapsed;
    value = ease(elapsed);
    currentX = context.startX + (context.x - context.startX) * value;
    currentY = context.startY + (context.y - context.startY) * value;
    context.method.call(context.scrollable, currentX, currentY);

    if (currentX !== context.x || currentY !== context.y) {
      w.requestAnimationFrame(step.bind(w, context));
    }
  }

  function smoothScroll(el, x, y) {
    var scrollable;
    var startX;
    var startY;
    var method;
    var startTime = now();

    if (el === d.body) {
      scrollable = w;
      startX = w.scrollX || w.pageXOffset;
      startY = w.scrollY || w.pageYOffset;
      method = original.scroll;
    } else {
      scrollable = el;
      startX = el.scrollLeft;
      startY = el.scrollTop;
      method = scrollElement;
    }

    step({
      scrollable: scrollable,
      method: method,
      startTime: startTime,
      startX: startX,
      startY: startY,
      x: x,
      y: y
    });
  }

  w.scroll = w.scrollTo = function () {
    if (arguments[0] === undefined) {
      return;
    }

    if (shouldBailOut(arguments[0]) === true) {
      original.scroll.call(w, arguments[0].left !== undefined ? arguments[0].left : typeof arguments[0] !== 'object' ? arguments[0] : w.scrollX || w.pageXOffset, arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : w.scrollY || w.pageYOffset);
      return;
    }

    smoothScroll.call(w, d.body, arguments[0].left !== undefined ? ~~arguments[0].left : w.scrollX || w.pageXOffset, arguments[0].top !== undefined ? ~~arguments[0].top : w.scrollY || w.pageYOffset);
  };

  w.scrollBy = function () {
    if (arguments[0] === undefined) {
      return;
    }

    if (shouldBailOut(arguments[0])) {
      original.scrollBy.call(w, arguments[0].left !== undefined ? arguments[0].left : typeof arguments[0] !== 'object' ? arguments[0] : 0, arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : 0);
      return;
    }

    smoothScroll.call(w, d.body, ~~arguments[0].left + (w.scrollX || w.pageXOffset), ~~arguments[0].top + (w.scrollY || w.pageYOffset));
  };

  Element.prototype.scroll = Element.prototype.scrollTo = function () {
    if (arguments[0] === undefined) {
      return;
    }

    if (shouldBailOut(arguments[0]) === true) {
      if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
        throw new SyntaxError('Value could not be converted');
      }

      original.elementScroll.call(this, arguments[0].left !== undefined ? ~~arguments[0].left : typeof arguments[0] !== 'object' ? ~~arguments[0] : this.scrollLeft, arguments[0].top !== undefined ? ~~arguments[0].top : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop);
      return;
    }

    var left = arguments[0].left;
    var top = arguments[0].top;
    smoothScroll.call(this, this, typeof left === 'undefined' ? this.scrollLeft : ~~left, typeof top === 'undefined' ? this.scrollTop : ~~top);
  };

  Element.prototype.scrollBy = function () {
    if (arguments[0] === undefined) {
      return;
    }

    if (shouldBailOut(arguments[0]) === true) {
      original.elementScroll.call(this, arguments[0].left !== undefined ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, arguments[0].top !== undefined ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop);
      return;
    }

    this.scroll({
      left: ~~arguments[0].left + this.scrollLeft,
      top: ~~arguments[0].top + this.scrollTop,
      behavior: arguments[0].behavior
    });
  };

  Element.prototype.scrollIntoView = function () {
    if (shouldBailOut(arguments[0]) === true) {
      original.scrollIntoView.call(this, arguments[0] === undefined ? true : arguments[0]);
      return;
    }

    var scrollableParent = findScrollableParent(this);
    var parentRects = scrollableParent.getBoundingClientRect();
    var clientRects = this.getBoundingClientRect();

    if (scrollableParent !== d.body) {
      smoothScroll.call(this, scrollableParent, scrollableParent.scrollLeft + clientRects.left - parentRects.left, scrollableParent.scrollTop + clientRects.top - parentRects.top);

      if (w.getComputedStyle(scrollableParent).position !== 'fixed') {
        w.scrollBy({
          left: parentRects.left,
          top: parentRects.top,
          behavior: 'smooth'
        });
      }
    } else {
      w.scrollBy({
        left: clientRects.left,
        top: clientRects.top,
        behavior: 'smooth'
      });
    }
  };
}
},{}],"../node_modules/rrweb/es/rrweb/src/replay/timer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addDelay = addDelay;
exports.Timer = void 0;

var _tslibEs = require("../../node_modules/tslib/tslib.es6.js");

var _types = require("../types.js");

var Timer = function () {
  function Timer(actions, speed) {
    if (actions === void 0) {
      actions = [];
    }

    this.timeOffset = 0;
    this.raf = null;
    this.actions = actions;
    this.speed = speed;
  }

  Timer.prototype.addAction = function (action) {
    var index = this.findActionIndex(action);
    this.actions.splice(index, 0, action);
  };

  Timer.prototype.addActions = function (actions) {
    var _a;

    (_a = this.actions).push.apply(_a, (0, _tslibEs.__spread)(actions));
  };

  Timer.prototype.start = function () {
    this.actions.sort(function (a1, a2) {
      return a1.delay - a2.delay;
    });
    this.timeOffset = 0;
    var lastTimestamp = performance.now();
    var actions = this.actions;
    var self = this;

    function check() {
      var time = performance.now();
      self.timeOffset += (time - lastTimestamp) * self.speed;
      lastTimestamp = time;

      while (actions.length) {
        var action = actions[0];

        if (self.timeOffset >= action.delay) {
          actions.shift();
          action.doAction();
        } else {
          break;
        }
      }

      if (actions.length > 0 || self.liveMode) {
        self.raf = requestAnimationFrame(check);
      }
    }

    this.raf = requestAnimationFrame(check);
  };

  Timer.prototype.clear = function () {
    if (this.raf) {
      cancelAnimationFrame(this.raf);
      this.raf = null;
    }

    this.actions.length = 0;
  };

  Timer.prototype.setSpeed = function (speed) {
    this.speed = speed;
  };

  Timer.prototype.toggleLiveMode = function (mode) {
    this.liveMode = mode;
  };

  Timer.prototype.isActive = function () {
    return this.raf !== null;
  };

  Timer.prototype.findActionIndex = function (action) {
    var start = 0;
    var end = this.actions.length - 1;

    while (start <= end) {
      var mid = Math.floor((start + end) / 2);

      if (this.actions[mid].delay < action.delay) {
        start = mid + 1;
      } else if (this.actions[mid].delay > action.delay) {
        end = mid - 1;
      } else {
        return mid;
      }
    }

    return start;
  };

  return Timer;
}();

exports.Timer = Timer;

function addDelay(event, baselineTime) {
  if (event.type === _types.EventType.IncrementalSnapshot && event.data.source === _types.IncrementalSource.MouseMove) {
    var firstOffset = event.data.positions[0].timeOffset;
    var firstTimestamp = event.timestamp + firstOffset;
    event.delay = firstTimestamp - baselineTime;
    return firstTimestamp - baselineTime;
  }

  event.delay = event.timestamp - baselineTime;
  return event.delay;
}
},{"../../node_modules/tslib/tslib.es6.js":"../node_modules/rrweb/es/rrweb/node_modules/tslib/tslib.es6.js","../types.js":"../node_modules/rrweb/es/rrweb/src/types.js"}],"../node_modules/rrweb/es/rrweb/node_modules/@xstate/fsm/es/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assign = r;
exports.createMachine = c;
exports.interpret = f;
exports.InterpreterStatus = void 0;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var t;
exports.InterpreterStatus = t;
!function (t) {
  t[t.NotStarted = 0] = "NotStarted", t[t.Running = 1] = "Running", t[t.Stopped = 2] = "Stopped";
}(t || (exports.InterpreterStatus = t = {}));
var n = {
  type: "xstate.init"
};

function e(t) {
  return void 0 === t ? [] : [].concat(t);
}

function r(t) {
  return {
    type: "xstate.assign",
    assignment: t
  };
}

function i(t, n) {
  return "string" == typeof (t = "string" == typeof t && n && n[t] ? n[t] : t) ? {
    type: t
  } : "function" == typeof t ? {
    type: t.name,
    exec: t
  } : t;
}

function o(t) {
  return function (n) {
    return t === n;
  };
}

function a(t) {
  return "string" == typeof t ? {
    type: t
  } : t;
}

function u(t, n) {
  return {
    value: t,
    context: n,
    actions: [],
    changed: !1,
    matches: o(t)
  };
}

function c(t, n) {
  void 0 === n && (n = {});
  var r = {
    config: t,
    _options: n,
    initialState: {
      value: t.initial,
      actions: e(t.states[t.initial].entry).map(function (t) {
        return i(t, n.actions);
      }),
      context: t.context,
      matches: o(t.initial)
    },
    transition: function (n, c) {
      var s,
          f,
          v = "string" == typeof n ? {
        value: n,
        context: t.context
      } : n,
          l = v.value,
          p = v.context,
          g = a(c),
          y = t.states[l];

      if (y.on) {
        var d = e(y.on[g.type]),
            x = function (n) {
          if (void 0 === n) return {
            value: u(l, p)
          };
          var e = "string" == typeof n ? {
            target: n
          } : n,
              a = e.target,
              c = void 0 === a ? l : a,
              s = e.actions,
              f = void 0 === s ? [] : s,
              v = e.cond,
              d = p;

          if ((void 0 === v ? function () {
            return !0;
          } : v)(p, g)) {
            var x = t.states[c],
                m = !1,
                h = [].concat(y.exit, f, x.entry).filter(function (t) {
              return t;
            }).map(function (t) {
              return i(t, r._options.actions);
            }).filter(function (t) {
              if ("xstate.assign" === t.type) {
                m = !0;
                var n = Object.assign({}, d);
                return "function" == typeof t.assignment ? n = t.assignment(d, g) : Object.keys(t.assignment).forEach(function (e) {
                  n[e] = "function" == typeof t.assignment[e] ? t.assignment[e](d, g) : t.assignment[e];
                }), d = n, !1;
              }

              return !0;
            });
            return {
              value: {
                value: c,
                context: d,
                actions: h,
                changed: c !== l || h.length > 0 || m,
                matches: o(c)
              }
            };
          }
        };

        try {
          for (var m = function (t) {
            var n = "function" == typeof Symbol && t[Symbol.iterator],
                e = 0;
            return n ? n.call(t) : {
              next: function () {
                return t && e >= t.length && (t = void 0), {
                  value: t && t[e++],
                  done: !t
                };
              }
            };
          }(d), h = m.next(); !h.done; h = m.next()) {
            var S = x(h.value);
            if ("object" == typeof S) return S.value;
          }
        } catch (t) {
          s = {
            error: t
          };
        } finally {
          try {
            h && !h.done && (f = m.return) && f.call(m);
          } finally {
            if (s) throw s.error;
          }
        }
      }

      return u(l, p);
    }
  };
  return r;
}

var s = function (t, n) {
  return t.actions.forEach(function (e) {
    var r = e.exec;
    return r && r(t.context, n);
  });
};

function f(e) {
  var r = e.initialState,
      i = t.NotStarted,
      u = new Set(),
      c = {
    _machine: e,
    send: function (n) {
      i === t.Running && (r = e.transition(r, n), s(r, a(n)), u.forEach(function (t) {
        return t(r);
      }));
    },
    subscribe: function (t) {
      return u.add(t), t(r), {
        unsubscribe: function () {
          return u.delete(t);
        }
      };
    },
    start: function (a) {
      if (a) {
        var u = "object" == typeof a ? a : {
          context: e.config.context,
          value: a
        };
        r = {
          value: u.value,
          actions: [],
          context: u.context,
          matches: o(u.value)
        };
      }

      return i = t.Running, s(r, n), c;
    },
    stop: function () {
      return i = t.Stopped, u.clear(), c;
    },

    get state() {
      return r;
    },

    get status() {
      return i;
    }

  };
  return c;
}
},{}],"../node_modules/rrweb/es/rrweb/src/replay/machine.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPlayerService = createPlayerService;
exports.createSpeedService = createSpeedService;
exports.discardPriorSnapshots = discardPriorSnapshots;

var _tslibEs = require("../../node_modules/tslib/tslib.es6.js");

var _types = require("../types.js");

var _utils = require("../utils.js");

var _timer = require("./timer.js");

var _index = require("../../node_modules/@xstate/fsm/es/index.js");

function discardPriorSnapshots(events, baselineTime) {
  for (var idx = events.length - 1; idx >= 0; idx--) {
    var event = events[idx];

    if (event.type === _types.EventType.Meta) {
      if (event.timestamp <= baselineTime) {
        return events.slice(idx);
      }
    }
  }

  return events;
}

function createPlayerService(context, _a) {
  var getCastFn = _a.getCastFn,
      emitter = _a.emitter;
  var playerMachine = (0, _index.createMachine)({
    id: 'player',
    context: context,
    initial: 'paused',
    states: {
      playing: {
        on: {
          PAUSE: {
            target: 'paused',
            actions: ['pause']
          },
          CAST_EVENT: {
            target: 'playing',
            actions: 'castEvent'
          },
          END: {
            target: 'paused',
            actions: ['resetLastPlayedEvent', 'pause']
          },
          ADD_EVENT: {
            target: 'playing',
            actions: ['addEvent']
          }
        }
      },
      paused: {
        on: {
          PLAY: {
            target: 'playing',
            actions: ['recordTimeOffset', 'play']
          },
          CAST_EVENT: {
            target: 'paused',
            actions: 'castEvent'
          },
          TO_LIVE: {
            target: 'live',
            actions: ['startLive']
          },
          ADD_EVENT: {
            target: 'paused',
            actions: ['addEvent']
          }
        }
      },
      live: {
        on: {
          ADD_EVENT: {
            target: 'live',
            actions: ['addEvent']
          },
          CAST_EVENT: {
            target: 'live',
            actions: ['castEvent']
          }
        }
      }
    }
  }, {
    actions: {
      castEvent: (0, _index.assign)({
        lastPlayedEvent: function (ctx, event) {
          if (event.type === 'CAST_EVENT') {
            return event.payload.event;
          }

          return ctx.lastPlayedEvent;
        }
      }),
      recordTimeOffset: (0, _index.assign)(function (ctx, event) {
        var timeOffset = ctx.timeOffset;

        if ('payload' in event && 'timeOffset' in event.payload) {
          timeOffset = event.payload.timeOffset;
        }

        return (0, _tslibEs.__assign)((0, _tslibEs.__assign)({}, ctx), {
          timeOffset: timeOffset,
          baselineTime: ctx.events[0].timestamp + timeOffset
        });
      }),
      play: function (ctx) {
        var e_1, _a, e_2, _b;

        var _c;

        console.warn('play');
        var timer = ctx.timer,
            events = ctx.events,
            baselineTime = ctx.baselineTime,
            lastPlayedEvent = ctx.lastPlayedEvent;
        timer.clear();

        try {
          for (var events_1 = (0, _tslibEs.__values)(events), events_1_1 = events_1.next(); !events_1_1.done; events_1_1 = events_1.next()) {
            var event = events_1_1.value;
            (0, _timer.addDelay)(event, baselineTime);
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (events_1_1 && !events_1_1.done && (_a = events_1.return)) _a.call(events_1);
          } finally {
            if (e_1) throw e_1.error;
          }
        }

        var neededEvents = discardPriorSnapshots(events, baselineTime);
        var actions = new Array();

        var _loop_1 = function (event) {
          var lastPlayedTimestamp = lastPlayedEvent === null || lastPlayedEvent === void 0 ? void 0 : lastPlayedEvent.timestamp;

          if ((lastPlayedEvent === null || lastPlayedEvent === void 0 ? void 0 : lastPlayedEvent.type) === _types.EventType.IncrementalSnapshot && lastPlayedEvent.data.source === _types.IncrementalSource.MouseMove) {
            lastPlayedTimestamp = lastPlayedEvent.timestamp + ((_c = lastPlayedEvent.data.positions[0]) === null || _c === void 0 ? void 0 : _c.timeOffset);
          }

          if (lastPlayedTimestamp && lastPlayedTimestamp < baselineTime && (event.timestamp <= lastPlayedTimestamp || event === lastPlayedEvent)) {
            return "continue";
          }

          var isSync = event.timestamp < baselineTime;

          if (isSync && !(0, _utils.needCastInSyncMode)(event)) {
            return "continue";
          }

          var castFn = getCastFn(event, isSync);

          if (isSync) {
            castFn();
          } else {
            actions.push({
              doAction: function () {
                castFn();
                emitter.emit(_types.ReplayerEvents.EventCast, event);
              },
              delay: event.delay
            });
          }
        };

        try {
          for (var neededEvents_1 = (0, _tslibEs.__values)(neededEvents), neededEvents_1_1 = neededEvents_1.next(); !neededEvents_1_1.done; neededEvents_1_1 = neededEvents_1.next()) {
            var event = neededEvents_1_1.value;

            _loop_1(event);
          }
        } catch (e_2_1) {
          e_2 = {
            error: e_2_1
          };
        } finally {
          try {
            if (neededEvents_1_1 && !neededEvents_1_1.done && (_b = neededEvents_1.return)) _b.call(neededEvents_1);
          } finally {
            if (e_2) throw e_2.error;
          }
        }

        emitter.emit(_types.ReplayerEvents.Flush);
        timer.addActions(actions);
        timer.start();
      },
      pause: function (ctx) {
        ctx.timer.clear();
      },
      resetLastPlayedEvent: (0, _index.assign)(function (ctx) {
        return (0, _tslibEs.__assign)((0, _tslibEs.__assign)({}, ctx), {
          lastPlayedEvent: null
        });
      }),
      startLive: (0, _index.assign)({
        baselineTime: function (ctx, event) {
          ctx.timer.toggleLiveMode(true);
          ctx.timer.start();

          if (event.type === 'TO_LIVE' && event.payload.baselineTime) {
            return event.payload.baselineTime;
          }

          return Date.now();
        }
      }),
      addEvent: (0, _index.assign)(function (ctx, machineEvent) {
        var baselineTime = ctx.baselineTime,
            timer = ctx.timer,
            events = ctx.events;

        if (machineEvent.type === 'ADD_EVENT') {
          var event_1 = machineEvent.payload.event;
          (0, _timer.addDelay)(event_1, baselineTime);
          events.push(event_1);
          var isSync = event_1.timestamp < baselineTime;
          var castFn_1 = getCastFn(event_1, isSync);

          if (isSync) {
            castFn_1();
          } else {
            timer.addAction({
              doAction: function () {
                castFn_1();
                emitter.emit(_types.ReplayerEvents.EventCast, event_1);
              },
              delay: event_1.delay
            });

            if (!timer.isActive()) {
              timer.start();
            }
          }
        }

        return (0, _tslibEs.__assign)((0, _tslibEs.__assign)({}, ctx), {
          events: events
        });
      })
    }
  });
  return (0, _index.interpret)(playerMachine);
}

function createSpeedService(context) {
  var speedMachine = (0, _index.createMachine)({
    id: 'speed',
    context: context,
    initial: 'normal',
    states: {
      normal: {
        on: {
          FAST_FORWARD: {
            target: 'skipping',
            actions: ['recordSpeed', 'setSpeed']
          },
          SET_SPEED: {
            target: 'normal',
            actions: ['setSpeed']
          }
        }
      },
      skipping: {
        on: {
          BACK_TO_NORMAL: {
            target: 'normal',
            actions: ['restoreSpeed']
          },
          SET_SPEED: {
            target: 'normal',
            actions: ['setSpeed']
          }
        }
      }
    }
  }, {
    actions: {
      setSpeed: function (ctx, event) {
        if ('payload' in event) {
          ctx.timer.setSpeed(event.payload.speed);
        }
      },
      recordSpeed: (0, _index.assign)({
        normalSpeed: function (ctx) {
          return ctx.timer.speed;
        }
      }),
      restoreSpeed: function (ctx) {
        ctx.timer.setSpeed(ctx.normalSpeed);
      }
    }
  });
  return (0, _index.interpret)(speedMachine);
}
},{"../../node_modules/tslib/tslib.es6.js":"../node_modules/rrweb/es/rrweb/node_modules/tslib/tslib.es6.js","../types.js":"../node_modules/rrweb/es/rrweb/src/types.js","../utils.js":"../node_modules/rrweb/es/rrweb/src/utils.js","./timer.js":"../node_modules/rrweb/es/rrweb/src/replay/timer.js","../../node_modules/@xstate/fsm/es/index.js":"../node_modules/rrweb/es/rrweb/node_modules/@xstate/fsm/es/index.js"}],"../node_modules/rrweb/es/rrweb/src/replay/styles/inject-style.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var rules = function (blockClass) {
  return ["iframe, ." + blockClass + " { background: #ccc }", 'noscript { display: none !important; }'];
};

var _default = rules;
exports.default = _default;
},{}],"../node_modules/rrweb/es/rrweb/src/replay/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Replayer = void 0;

var _tslibEs = require("../../node_modules/tslib/tslib.es6.js");

var _rrwebSnapshot = require("../../node_modules/rrweb-snapshot/es/rrweb-snapshot.js");

var _types = require("../types.js");

var _utils = require("../utils.js");

var mitt_es = _interopRequireWildcard(require("../../node_modules/mitt/dist/mitt.es.js"));

var _smoothscroll = require("./smoothscroll.js");

var _timer = require("./timer.js");

var _machine = require("./machine.js");

var _injectStyle = _interopRequireDefault(require("./styles/inject-style.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var SKIP_TIME_THRESHOLD = 10 * 1000;
var SKIP_TIME_INTERVAL = 5 * 1000;
var mitt = mitt_es.default || mitt_es;
var REPLAY_CONSOLE_PREFIX = '[replayer]';
var defaultMouseTailConfig = {
  duration: 500,
  lineCap: 'round',
  lineWidth: 3,
  strokeStyle: 'red'
};
var defaultLogConfig = {
  level: ['assert', 'clear', 'count', 'countReset', 'debug', 'dir', 'dirxml', 'error', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'table', 'time', 'timeEnd', 'timeLog', 'trace', 'warn'],
  replayLogger: undefined
};

var Replayer = function () {
  function Replayer(events, config) {
    var _this = this;

    this.mouseTail = null;
    this.tailPositions = [];
    this.emitter = mitt();
    this.legacy_missingNodeRetryMap = {};
    this.imageMap = new Map();

    if (!(config === null || config === void 0 ? void 0 : config.liveMode) && events.length < 2) {
      throw new Error('Replayer need at least 2 events.');
    }

    var defaultConfig = {
      speed: 1,
      root: document.body,
      loadTimeout: 0,
      skipInactive: false,
      showWarning: true,
      showDebug: false,
      blockClass: 'rr-block',
      liveMode: false,
      insertStyleRules: [],
      triggerFocus: true,
      UNSAFE_replayCanvas: false,
      pauseAnimation: true,
      mouseTail: defaultMouseTailConfig,
      logConfig: defaultLogConfig
    };
    this.config = Object.assign({}, defaultConfig, config);
    if (!this.config.logConfig.replayLogger) this.config.logConfig.replayLogger = this.getConsoleLogger();
    this.handleResize = this.handleResize.bind(this);
    this.getCastFn = this.getCastFn.bind(this);
    this.emitter.on(_types.ReplayerEvents.Resize, this.handleResize);
    this.setupDom();
    this.treeIndex = new _utils.TreeIndex();
    this.fragmentParentMap = new Map();
    this.elementStateMap = new Map();
    this.emitter.on(_types.ReplayerEvents.Flush, function () {
      var e_1, _a, e_2, _b, e_3, _c;

      var _d = _this.treeIndex.flush(),
          scrollMap = _d.scrollMap,
          inputMap = _d.inputMap;

      try {
        for (var _e = (0, _tslibEs.__values)(_this.fragmentParentMap.entries()), _f = _e.next(); !_f.done; _f = _e.next()) {
          var _g = (0, _tslibEs.__read)(_f.value, 2),
              frag = _g[0],
              parent = _g[1];

          _utils.mirror.map[parent.__sn.id] = parent;

          if (parent.__sn.type === _rrwebSnapshot.NodeType.Element && parent.__sn.tagName === 'textarea' && frag.textContent) {
            parent.value = frag.textContent;
          }

          parent.appendChild(frag);

          _this.restoreState(parent);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_f && !_f.done && (_a = _e.return)) _a.call(_e);
        } finally {
          if (e_1) throw e_1.error;
        }
      }

      _this.fragmentParentMap.clear();

      _this.elementStateMap.clear();

      try {
        for (var _h = (0, _tslibEs.__values)(scrollMap.values()), _j = _h.next(); !_j.done; _j = _h.next()) {
          var d = _j.value;

          _this.applyScroll(d);
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (_j && !_j.done && (_b = _h.return)) _b.call(_h);
        } finally {
          if (e_2) throw e_2.error;
        }
      }

      try {
        for (var _k = (0, _tslibEs.__values)(inputMap.values()), _l = _k.next(); !_l.done; _l = _k.next()) {
          var d = _l.value;

          _this.applyInput(d);
        }
      } catch (e_3_1) {
        e_3 = {
          error: e_3_1
        };
      } finally {
        try {
          if (_l && !_l.done && (_c = _k.return)) _c.call(_k);
        } finally {
          if (e_3) throw e_3.error;
        }
      }
    });
    var timer = new _timer.Timer([], (config === null || config === void 0 ? void 0 : config.speed) || defaultConfig.speed);
    this.service = (0, _machine.createPlayerService)({
      events: events.map(function (e) {
        if (config && config.unpackFn) {
          return config.unpackFn(e);
        }

        return e;
      }),
      timer: timer,
      timeOffset: 0,
      baselineTime: 0,
      lastPlayedEvent: null
    }, {
      getCastFn: this.getCastFn,
      emitter: this.emitter
    });
    this.service.start();
    this.service.subscribe(function (state) {
      _this.emitter.emit(_types.ReplayerEvents.StateChange, {
        player: state
      });
    });
    this.speedService = (0, _machine.createSpeedService)({
      normalSpeed: -1,
      timer: timer
    });
    this.speedService.start();
    this.speedService.subscribe(function (state) {
      _this.emitter.emit(_types.ReplayerEvents.StateChange, {
        speed: state
      });
    });
    var firstMeta = this.service.state.context.events.find(function (e) {
      return e.type === _types.EventType.Meta;
    });
    var firstFullsnapshot = this.service.state.context.events.find(function (e) {
      return e.type === _types.EventType.FullSnapshot;
    });

    if (firstMeta) {
      var _a = firstMeta.data,
          width_1 = _a.width,
          height_1 = _a.height;
      setTimeout(function () {
        _this.emitter.emit(_types.ReplayerEvents.Resize, {
          width: width_1,
          height: height_1
        });
      }, 0);
    }

    if (firstFullsnapshot) {
      setTimeout(function () {
        _this.rebuildFullSnapshot(firstFullsnapshot);

        _this.iframe.contentWindow.scrollTo(firstFullsnapshot.data.initialOffset);
      }, 1);
    }
  }

  Object.defineProperty(Replayer.prototype, "timer", {
    get: function () {
      return this.service.state.context.timer;
    },
    enumerable: false,
    configurable: true
  });

  Replayer.prototype.on = function (event, handler) {
    this.emitter.on(event, handler);
    return this;
  };

  Replayer.prototype.setConfig = function (config) {
    var _this = this;

    Object.keys(config).forEach(function (key) {
      _this.config[key] = config[key];
    });

    if (!this.config.skipInactive) {
      this.backToNormal();
    }

    if (typeof config.speed !== 'undefined') {
      this.speedService.send({
        type: 'SET_SPEED',
        payload: {
          speed: config.speed
        }
      });
    }

    if (typeof config.mouseTail !== 'undefined') {
      if (config.mouseTail === false) {
        if (this.mouseTail) {
          this.mouseTail.style.display = 'none';
        }
      } else {
        if (!this.mouseTail) {
          this.mouseTail = document.createElement('canvas');
          this.mouseTail.width = Number.parseFloat(this.iframe.width);
          this.mouseTail.height = Number.parseFloat(this.iframe.height);
          this.mouseTail.classList.add('replayer-mouse-tail');
          this.wrapper.insertBefore(this.mouseTail, this.iframe);
        }

        this.mouseTail.style.display = 'inherit';
      }
    }
  };

  Replayer.prototype.getMetaData = function () {
    var firstEvent = this.service.state.context.events[0];
    var lastEvent = this.service.state.context.events[this.service.state.context.events.length - 1];
    return {
      startTime: firstEvent.timestamp,
      endTime: lastEvent.timestamp,
      totalTime: lastEvent.timestamp - firstEvent.timestamp
    };
  };

  Replayer.prototype.getCurrentTime = function () {
    return this.timer.timeOffset + this.getTimeOffset();
  };

  Replayer.prototype.getTimeOffset = function () {
    var _a = this.service.state.context,
        baselineTime = _a.baselineTime,
        events = _a.events;
    return baselineTime - events[0].timestamp;
  };

  Replayer.prototype.play = function (timeOffset) {
    var _a;

    if (timeOffset === void 0) {
      timeOffset = 0;
    }

    if (this.service.state.matches('paused')) {
      this.service.send({
        type: 'PLAY',
        payload: {
          timeOffset: timeOffset
        }
      });
    } else {
      this.service.send({
        type: 'PAUSE'
      });
      this.service.send({
        type: 'PLAY',
        payload: {
          timeOffset: timeOffset
        }
      });
    }

    (_a = this.iframe.contentDocument) === null || _a === void 0 ? void 0 : _a.getElementsByTagName('html')[0].classList.remove('rrweb-paused');
    this.emitter.emit(_types.ReplayerEvents.Start);
  };

  Replayer.prototype.pause = function (timeOffset) {
    var _a;

    if (timeOffset === undefined && this.service.state.matches('playing')) {
      this.service.send({
        type: 'PAUSE'
      });
    }

    if (typeof timeOffset === 'number') {
      this.play(timeOffset);
      this.service.send({
        type: 'PAUSE'
      });
    }

    (_a = this.iframe.contentDocument) === null || _a === void 0 ? void 0 : _a.getElementsByTagName('html')[0].classList.add('rrweb-paused');
    this.emitter.emit(_types.ReplayerEvents.Pause);
  };

  Replayer.prototype.resume = function (timeOffset) {
    if (timeOffset === void 0) {
      timeOffset = 0;
    }

    console.warn("The 'resume' will be departed in 1.0. Please use 'play' method which has the same interface.");
    this.play(timeOffset);
    this.emitter.emit(_types.ReplayerEvents.Resume);
  };

  Replayer.prototype.startLive = function (baselineTime) {
    this.service.send({
      type: 'TO_LIVE',
      payload: {
        baselineTime: baselineTime
      }
    });
  };

  Replayer.prototype.addEvent = function (rawEvent) {
    var _this = this;

    var event = this.config.unpackFn ? this.config.unpackFn(rawEvent) : rawEvent;
    Promise.resolve().then(function () {
      return _this.service.send({
        type: 'ADD_EVENT',
        payload: {
          event: event
        }
      });
    });
  };

  Replayer.prototype.enableInteract = function () {
    this.iframe.setAttribute('scrolling', 'auto');
    this.iframe.style.pointerEvents = 'auto';
  };

  Replayer.prototype.disableInteract = function () {
    this.iframe.setAttribute('scrolling', 'no');
    this.iframe.style.pointerEvents = 'none';
  };

  Replayer.prototype.setupDom = function () {
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('replayer-wrapper');
    this.config.root.appendChild(this.wrapper);
    this.mouse = document.createElement('div');
    this.mouse.classList.add('replayer-mouse');
    this.wrapper.appendChild(this.mouse);

    if (this.config.mouseTail !== false) {
      this.mouseTail = document.createElement('canvas');
      this.mouseTail.classList.add('replayer-mouse-tail');
      this.mouseTail.style.display = 'inherit';
      this.wrapper.appendChild(this.mouseTail);
    }

    this.iframe = document.createElement('iframe');
    var attributes = ['allow-same-origin'];

    if (this.config.UNSAFE_replayCanvas) {
      attributes.push('allow-scripts');
    }

    this.iframe.style.display = 'none';
    this.iframe.setAttribute('sandbox', attributes.join(' '));
    this.disableInteract();
    this.wrapper.appendChild(this.iframe);

    if (this.iframe.contentWindow && this.iframe.contentDocument) {
      (0, _smoothscroll.polyfill)(this.iframe.contentWindow, this.iframe.contentDocument);
      (0, _utils.polyfill)(this.iframe.contentWindow);
    }
  };

  Replayer.prototype.handleResize = function (dimension) {
    var e_4, _a;

    this.iframe.style.display = 'inherit';

    try {
      for (var _b = (0, _tslibEs.__values)([this.mouseTail, this.iframe]), _c = _b.next(); !_c.done; _c = _b.next()) {
        var el = _c.value;

        if (!el) {
          continue;
        }

        el.setAttribute('width', String(dimension.width));
        el.setAttribute('height', String(dimension.height));
      }
    } catch (e_4_1) {
      e_4 = {
        error: e_4_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_4) throw e_4.error;
      }
    }
  };

  Replayer.prototype.getCastFn = function (event, isSync) {
    var _this = this;

    if (isSync === void 0) {
      isSync = false;
    }

    var castFn;

    switch (event.type) {
      case _types.EventType.DomContentLoaded:
      case _types.EventType.Load:
        break;

      case _types.EventType.Custom:
        castFn = function () {
          _this.emitter.emit(_types.ReplayerEvents.CustomEvent, event);
        };

        break;

      case _types.EventType.Meta:
        castFn = function () {
          return _this.emitter.emit(_types.ReplayerEvents.Resize, {
            width: event.data.width,
            height: event.data.height
          });
        };

        break;

      case _types.EventType.FullSnapshot:
        castFn = function () {
          _this.rebuildFullSnapshot(event, isSync);

          _this.iframe.contentWindow.scrollTo(event.data.initialOffset);
        };

        break;

      case _types.EventType.IncrementalSnapshot:
        castFn = function () {
          var e_5, _a;

          _this.applyIncremental(event, isSync);

          if (isSync) {
            return;
          }

          if (event === _this.nextUserInteractionEvent) {
            _this.nextUserInteractionEvent = null;

            _this.backToNormal();
          }

          if (_this.config.skipInactive && !_this.nextUserInteractionEvent) {
            try {
              for (var _b = (0, _tslibEs.__values)(_this.service.state.context.events), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _event = _c.value;

                if (_event.timestamp <= event.timestamp) {
                  continue;
                }

                if (_this.isUserInteraction(_event)) {
                  if (_event.delay - event.delay > SKIP_TIME_THRESHOLD * _this.speedService.state.context.timer.speed) {
                    _this.nextUserInteractionEvent = _event;
                  }

                  break;
                }
              }
            } catch (e_5_1) {
              e_5 = {
                error: e_5_1
              };
            } finally {
              try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
              } finally {
                if (e_5) throw e_5.error;
              }
            }

            if (_this.nextUserInteractionEvent) {
              var skipTime = _this.nextUserInteractionEvent.delay - event.delay;
              var payload = {
                speed: Math.min(Math.round(skipTime / SKIP_TIME_INTERVAL), 360)
              };

              _this.speedService.send({
                type: 'FAST_FORWARD',
                payload: payload
              });

              _this.emitter.emit(_types.ReplayerEvents.SkipStart, payload);
            }
          }
        };

        break;
    }

    var wrappedCastFn = function () {
      if (castFn) {
        castFn();
      }

      _this.service.send({
        type: 'CAST_EVENT',
        payload: {
          event: event
        }
      });

      if (event === _this.service.state.context.events[_this.service.state.context.events.length - 1]) {
        var finish_1 = function () {
          _this.backToNormal();

          _this.service.send('END');

          _this.emitter.emit(_types.ReplayerEvents.Finish);
        };

        if (event.type === _types.EventType.IncrementalSnapshot && event.data.source === _types.IncrementalSource.MouseMove && event.data.positions.length) {
          setTimeout(function () {
            finish_1();
          }, Math.max(0, -event.data.positions[0].timeOffset + 50));
        } else {
          finish_1();
        }
      }
    };

    return wrappedCastFn;
  };

  Replayer.prototype.rebuildFullSnapshot = function (event, isSync) {
    if (isSync === void 0) {
      isSync = false;
    }

    if (!this.iframe.contentDocument) {
      return console.warn('Looks like your replayer has been destroyed.');
    }

    if (Object.keys(this.legacy_missingNodeRetryMap).length) {
      console.warn('Found unresolved missing node map', this.legacy_missingNodeRetryMap);
    }

    this.legacy_missingNodeRetryMap = {};
    _utils.mirror.map = (0, _rrwebSnapshot.rebuild)(event.data.node, {
      doc: this.iframe.contentDocument
    })[1];
    var styleEl = document.createElement('style');
    var _a = this.iframe.contentDocument,
        documentElement = _a.documentElement,
        head = _a.head;
    documentElement.insertBefore(styleEl, head);
    var injectStylesRules = (0, _injectStyle.default)(this.config.blockClass).concat(this.config.insertStyleRules);

    if (this.config.pauseAnimation) {
      injectStylesRules.push('html.rrweb-paused * { animation-play-state: paused !important; }');
    }

    if (!this.service.state.matches('playing')) {
      this.iframe.contentDocument.getElementsByTagName('html')[0].classList.add('rrweb-paused');
    }

    for (var idx = 0; idx < injectStylesRules.length; idx++) {
      styleEl.sheet.insertRule(injectStylesRules[idx], idx);
    }

    this.emitter.emit(_types.ReplayerEvents.FullsnapshotRebuilded, event);

    if (!isSync) {
      this.waitForStylesheetLoad();
    }

    if (this.config.UNSAFE_replayCanvas) {
      this.preloadAllImages();
    }
  };

  Replayer.prototype.waitForStylesheetLoad = function () {
    var _this = this;

    var _a;

    var head = (_a = this.iframe.contentDocument) === null || _a === void 0 ? void 0 : _a.head;

    if (head) {
      var unloadSheets_1 = new Set();
      var timer_1;
      var beforeLoadState_1 = this.service.state;

      var stateHandler_1 = function () {
        beforeLoadState_1 = _this.service.state;
      };

      this.emitter.on(_types.ReplayerEvents.Start, stateHandler_1);
      this.emitter.on(_types.ReplayerEvents.Pause, stateHandler_1);

      var unsubscribe_1 = function () {
        _this.emitter.off(_types.ReplayerEvents.Start, stateHandler_1);

        _this.emitter.off(_types.ReplayerEvents.Pause, stateHandler_1);
      };

      head.querySelectorAll('link[rel="stylesheet"]').forEach(function (css) {
        if (!css.sheet) {
          unloadSheets_1.add(css);
          css.addEventListener('load', function () {
            unloadSheets_1.delete(css);

            if (unloadSheets_1.size === 0 && timer_1 !== -1) {
              if (beforeLoadState_1.matches('playing')) {
                _this.play(_this.getCurrentTime());
              }

              _this.emitter.emit(_types.ReplayerEvents.LoadStylesheetEnd);

              if (timer_1) {
                window.clearTimeout(timer_1);
              }

              unsubscribe_1();
            }
          });
        }
      });

      if (unloadSheets_1.size > 0) {
        this.service.send({
          type: 'PAUSE'
        });
        this.emitter.emit(_types.ReplayerEvents.LoadStylesheetStart);
        timer_1 = window.setTimeout(function () {
          if (beforeLoadState_1.matches('playing')) {
            _this.play(_this.getCurrentTime());
          }

          timer_1 = -1;
          unsubscribe_1();
        }, this.config.loadTimeout);
      }
    }
  };

  Replayer.prototype.preloadAllImages = function () {
    var e_6, _a;

    var _this = this;

    var beforeLoadState = this.service.state;

    var stateHandler = function () {
      beforeLoadState = _this.service.state;
    };

    this.emitter.on(_types.ReplayerEvents.Start, stateHandler);
    this.emitter.on(_types.ReplayerEvents.Pause, stateHandler);

    var unsubscribe = function () {
      _this.emitter.off(_types.ReplayerEvents.Start, stateHandler);

      _this.emitter.off(_types.ReplayerEvents.Pause, stateHandler);
    };

    var count = 0;
    var resolved = 0;

    try {
      for (var _b = (0, _tslibEs.__values)(this.service.state.context.events), _c = _b.next(); !_c.done; _c = _b.next()) {
        var event = _c.value;

        if (event.type === _types.EventType.IncrementalSnapshot && event.data.source === _types.IncrementalSource.CanvasMutation && event.data.property === 'drawImage' && typeof event.data.args[0] === 'string' && !this.imageMap.has(event)) {
          count++;
          var image = document.createElement('img');
          image.src = event.data.args[0];
          this.imageMap.set(event, image);

          image.onload = function () {
            resolved++;

            if (resolved === count) {
              if (beforeLoadState.matches('playing')) {
                _this.play(_this.getCurrentTime());
              }

              unsubscribe();
            }
          };
        }
      }
    } catch (e_6_1) {
      e_6 = {
        error: e_6_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_6) throw e_6.error;
      }
    }

    if (count !== resolved) {
      this.service.send({
        type: 'PAUSE'
      });
    }
  };

  Replayer.prototype.applyIncremental = function (e, isSync) {
    var _this = this;

    var _a, _b;

    var d = e.data;

    switch (d.source) {
      case _types.IncrementalSource.Mutation:
        {
          if (isSync) {
            d.adds.forEach(function (m) {
              return _this.treeIndex.add(m);
            });
            d.texts.forEach(function (m) {
              return _this.treeIndex.text(m);
            });
            d.attributes.forEach(function (m) {
              return _this.treeIndex.attribute(m);
            });
            d.removes.forEach(function (m) {
              return _this.treeIndex.remove(m);
            });
          }

          this.applyMutation(d, isSync);
          break;
        }

      case _types.IncrementalSource.MouseMove:
        if (isSync) {
          var lastPosition = d.positions[d.positions.length - 1];
          this.moveAndHover(d, lastPosition.x, lastPosition.y, lastPosition.id);
        } else {
          d.positions.forEach(function (p) {
            var action = {
              doAction: function () {
                _this.moveAndHover(d, p.x, p.y, p.id);
              },
              delay: p.timeOffset + e.timestamp - _this.service.state.context.baselineTime
            };

            _this.timer.addAction(action);
          });
          this.timer.addAction({
            doAction: function () {},
            delay: e.delay - ((_a = d.positions[0]) === null || _a === void 0 ? void 0 : _a.timeOffset)
          });
        }

        break;

      case _types.IncrementalSource.MouseInteraction:
        {
          if (d.id === -1) {
            break;
          }

          var event = new Event(_types.MouseInteractions[d.type].toLowerCase());

          var target = _utils.mirror.getNode(d.id);

          if (!target) {
            return this.debugNodeNotFound(d, d.id);
          }

          this.emitter.emit(_types.ReplayerEvents.MouseInteraction, {
            type: d.type,
            target: target
          });
          var triggerFocus = this.config.triggerFocus;

          switch (d.type) {
            case _types.MouseInteractions.Blur:
              if ('blur' in target) {
                target.blur();
              }

              break;

            case _types.MouseInteractions.Focus:
              if (triggerFocus && target.focus) {
                target.focus({
                  preventScroll: true
                });
              }

              break;

            case _types.MouseInteractions.Click:
            case _types.MouseInteractions.TouchStart:
            case _types.MouseInteractions.TouchEnd:
              if (!isSync) {
                this.moveAndHover(d, d.x, d.y, d.id);
                this.mouse.classList.remove('active');
                void this.mouse.offsetWidth;
                this.mouse.classList.add('active');
              }

              break;

            default:
              target.dispatchEvent(event);
          }

          break;
        }

      case _types.IncrementalSource.Scroll:
        {
          if (d.id === -1) {
            break;
          }

          if (isSync) {
            this.treeIndex.scroll(d);
            break;
          }

          this.applyScroll(d);
          break;
        }

      case _types.IncrementalSource.ViewportResize:
        this.emitter.emit(_types.ReplayerEvents.Resize, {
          width: d.width,
          height: d.height
        });
        break;

      case _types.IncrementalSource.Input:
        {
          if (d.id === -1) {
            break;
          }

          if (isSync) {
            this.treeIndex.input(d);
            break;
          }

          this.applyInput(d);
          break;
        }

      case _types.IncrementalSource.MediaInteraction:
        {
          var target = _utils.mirror.getNode(d.id);

          if (!target) {
            return this.debugNodeNotFound(d, d.id);
          }

          var mediaEl_1 = target;

          try {
            if (d.type === _types.MediaInteractions.Pause) {
              mediaEl_1.pause();
            }

            if (d.type === _types.MediaInteractions.Play) {
              if (mediaEl_1.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
                mediaEl_1.play();
              } else {
                mediaEl_1.addEventListener('canplay', function () {
                  mediaEl_1.play();
                });
              }
            }
          } catch (error) {
            if (this.config.showWarning) {
              console.warn("Failed to replay media interactions: " + (error.message || error));
            }
          }

          break;
        }

      case _types.IncrementalSource.StyleSheetRule:
        {
          var target = _utils.mirror.getNode(d.id);

          if (!target) {
            return this.debugNodeNotFound(d, d.id);
          }

          var styleEl = target;
          var parent = target.parentNode;
          var usingVirtualParent = this.fragmentParentMap.has(parent);
          var placeholderNode = void 0;

          if (usingVirtualParent) {
            var domParent = this.fragmentParentMap.get(target.parentNode);
            placeholderNode = document.createTextNode('');
            parent.replaceChild(placeholderNode, target);
            domParent.appendChild(target);
          }

          var styleSheet_1 = styleEl.sheet;

          if (d.adds) {
            d.adds.forEach(function (_a) {
              var rule = _a.rule,
                  index = _a.index;

              try {
                var _index = index === undefined ? undefined : Math.min(index, styleSheet_1.rules.length);

                try {
                  styleSheet_1.insertRule(rule, _index);
                } catch (e) {}
              } catch (e) {}
            });
          }

          if (d.removes) {
            d.removes.forEach(function (_a) {
              var index = _a.index;

              try {
                styleSheet_1.deleteRule(index);
              } catch (e) {}
            });
          }

          if (usingVirtualParent && placeholderNode) {
            parent.replaceChild(target, placeholderNode);
          }

          break;
        }

      case _types.IncrementalSource.CanvasMutation:
        {
          if (!this.config.UNSAFE_replayCanvas) {
            return;
          }

          var target = _utils.mirror.getNode(d.id);

          if (!target) {
            return this.debugNodeNotFound(d, d.id);
          }

          try {
            var ctx = target.getContext('2d');

            if (d.setter) {
              ctx[d.property] = d.args[0];
              return;
            }

            var original = ctx[d.property];

            if (d.property === 'drawImage' && typeof d.args[0] === 'string') {
              var image = this.imageMap.get(e);
              d.args[0] = image;
              original.apply(ctx, d.args);
            } else {
              original.apply(ctx, d.args);
            }
          } catch (error) {
            this.warnCanvasMutationFailed(d, d.id, error);
          }

          break;
        }

      case _types.IncrementalSource.Font:
        {
          try {
            var fontFace = new FontFace(d.family, d.buffer ? new Uint8Array(JSON.parse(d.fontSource)) : d.fontSource, d.descriptors);
            (_b = this.iframe.contentDocument) === null || _b === void 0 ? void 0 : _b.fonts.add(fontFace);
          } catch (error) {
            if (this.config.showWarning) {
              console.warn(error);
            }
          }

          break;
        }

      case _types.IncrementalSource.Log:
        {
          try {
            var logData_1 = e.data;
            var replayLogger = this.config.logConfig.replayLogger;
            if (typeof replayLogger[logData_1.level] === 'function') replayLogger[logData_1.level](logData_1);
          } catch (error) {
            if (this.config.showWarning) {
              console.warn(error);
            }
          }
        }
    }
  };

  Replayer.prototype.applyMutation = function (d, useVirtualParent) {
    var e_7, _a;

    var _this = this;

    d.removes.forEach(function (mutation) {
      var target = _utils.mirror.getNode(mutation.id);

      if (!target) {
        return _this.warnNodeNotFound(d, mutation.id);
      }

      var parent = _utils.mirror.getNode(mutation.parentId);

      if (!parent) {
        return _this.warnNodeNotFound(d, mutation.parentId);
      }

      _utils.mirror.removeNodeFromMap(target);

      if (parent) {
        var realParent = _this.fragmentParentMap.get(parent);

        if (realParent && realParent.contains(target)) {
          realParent.removeChild(target);
        } else if (_this.fragmentParentMap.has(target)) {
          var realTarget = _this.fragmentParentMap.get(target);

          parent.removeChild(realTarget);

          _this.fragmentParentMap.delete(target);
        } else {
          parent.removeChild(target);
        }
      }
    });
    var legacy_missingNodeMap = (0, _tslibEs.__assign)({}, this.legacy_missingNodeRetryMap);
    var queue = [];

    function nextNotInDOM(mutation) {
      var next = null;

      if (mutation.nextId) {
        next = _utils.mirror.getNode(mutation.nextId);
      }

      if (mutation.nextId !== null && mutation.nextId !== undefined && mutation.nextId !== -1 && !next) {
        return true;
      }

      return false;
    }

    var appendNode = function (mutation) {
      if (!_this.iframe.contentDocument) {
        return console.warn('Looks like your replayer has been destroyed.');
      }

      var parent = _utils.mirror.getNode(mutation.parentId);

      if (!parent) {
        return queue.push(mutation);
      }

      var parentInDocument = null;

      if (_this.iframe.contentDocument.contains) {
        parentInDocument = _this.iframe.contentDocument.contains(parent);
      } else if (_this.iframe.contentDocument.body.contains) {
        parentInDocument = _this.iframe.contentDocument.body.contains(parent);
      }

      if (useVirtualParent && parentInDocument) {
        var virtualParent = document.createDocumentFragment();
        _utils.mirror.map[mutation.parentId] = virtualParent;

        _this.fragmentParentMap.set(virtualParent, parent);

        _this.storeState(parent);

        while (parent.firstChild) {
          virtualParent.appendChild(parent.firstChild);
        }

        parent = virtualParent;
      }

      var previous = null;
      var next = null;

      if (mutation.previousId) {
        previous = _utils.mirror.getNode(mutation.previousId);
      }

      if (mutation.nextId) {
        next = _utils.mirror.getNode(mutation.nextId);
      }

      if (nextNotInDOM(mutation)) {
        return queue.push(mutation);
      }

      var target = (0, _rrwebSnapshot.buildNodeWithSN)(mutation.node, {
        doc: _this.iframe.contentDocument,
        map: _utils.mirror.map,
        skipChild: true,
        hackCss: true
      });

      if (mutation.previousId === -1 || mutation.nextId === -1) {
        legacy_missingNodeMap[mutation.node.id] = {
          node: target,
          mutation: mutation
        };
        return;
      }

      if (previous && previous.nextSibling && previous.nextSibling.parentNode) {
        parent.insertBefore(target, previous.nextSibling);
      } else if (next && next.parentNode) {
        parent.contains(next) ? parent.insertBefore(target, next) : parent.insertBefore(target, null);
      } else {
        parent.appendChild(target);
      }

      if (mutation.previousId || mutation.nextId) {
        _this.legacy_resolveMissingNode(legacy_missingNodeMap, parent, target, mutation);
      }
    };

    d.adds.forEach(function (mutation) {
      appendNode(mutation);
    });
    var startTime = Date.now();

    while (queue.length) {
      var resolveTrees = (0, _utils.queueToResolveTrees)(queue);
      queue.length = 0;

      if (Date.now() - startTime > 500) {
        this.warn('Timeout in the loop, please check the resolve tree data:', resolveTrees);
        break;
      }

      try {
        for (var resolveTrees_1 = (e_7 = void 0, (0, _tslibEs.__values)(resolveTrees)), resolveTrees_1_1 = resolveTrees_1.next(); !resolveTrees_1_1.done; resolveTrees_1_1 = resolveTrees_1.next()) {
          var tree = resolveTrees_1_1.value;

          var parent = _utils.mirror.getNode(tree.value.parentId);

          if (!parent) {
            this.debug('Drop resolve tree since there is no parent for the root node.', tree);
          } else {
            (0, _utils.iterateResolveTree)(tree, function (mutation) {
              appendNode(mutation);
            });
          }
        }
      } catch (e_7_1) {
        e_7 = {
          error: e_7_1
        };
      } finally {
        try {
          if (resolveTrees_1_1 && !resolveTrees_1_1.done && (_a = resolveTrees_1.return)) _a.call(resolveTrees_1);
        } finally {
          if (e_7) throw e_7.error;
        }
      }
    }

    if (Object.keys(legacy_missingNodeMap).length) {
      Object.assign(this.legacy_missingNodeRetryMap, legacy_missingNodeMap);
    }

    d.texts.forEach(function (mutation) {
      var target = _utils.mirror.getNode(mutation.id);

      if (!target) {
        return _this.warnNodeNotFound(d, mutation.id);
      }

      if (_this.fragmentParentMap.has(target)) {
        target = _this.fragmentParentMap.get(target);
      }

      target.textContent = mutation.value;
    });
    d.attributes.forEach(function (mutation) {
      var target = _utils.mirror.getNode(mutation.id);

      if (!target) {
        return _this.warnNodeNotFound(d, mutation.id);
      }

      if (_this.fragmentParentMap.has(target)) {
        target = _this.fragmentParentMap.get(target);
      }

      for (var attributeName in mutation.attributes) {
        if (typeof attributeName === 'string') {
          var value = mutation.attributes[attributeName];

          try {
            if (value !== null) {
              target.setAttribute(attributeName, value);
            } else {
              target.removeAttribute(attributeName);
            }
          } catch (error) {
            if (_this.config.showWarning) {
              console.warn('An error occurred may due to the checkout feature.', error);
            }
          }
        }
      }
    });
  };

  Replayer.prototype.applyScroll = function (d) {
    var target = _utils.mirror.getNode(d.id);

    if (!target) {
      return this.debugNodeNotFound(d, d.id);
    }

    if (target === this.iframe.contentDocument) {
      this.iframe.contentWindow.scrollTo({
        top: d.y,
        left: d.x,
        behavior: 'smooth'
      });
    } else {
      try {
        target.scrollTop = d.y;
        target.scrollLeft = d.x;
      } catch (error) {}
    }
  };

  Replayer.prototype.applyInput = function (d) {
    var target = _utils.mirror.getNode(d.id);

    if (!target) {
      return this.debugNodeNotFound(d, d.id);
    }

    try {
      target.checked = d.isChecked;
      target.value = d.text;
    } catch (error) {}
  };

  Replayer.prototype.formatMessage = function (data) {
    if (data.trace.length === 0) return '';
    var stackPrefix = '\n\tat ';
    var result = stackPrefix;
    result += data.trace.join(stackPrefix);
    return result;
  };

  Replayer.prototype.getConsoleLogger = function () {
    var e_8, _a;

    var _this = this;

    var rrwebOriginal = '__rrweb_original__';
    var replayLogger = {};

    var _loop_1 = function (level) {
      if (level === 'trace') replayLogger[level] = function (data) {
        var logger = console.log[rrwebOriginal] ? console.log[rrwebOriginal] : console.log;
        logger.apply(void 0, (0, _tslibEs.__spread)(data.payload.map(function (s) {
          return JSON.parse(s);
        }), [_this.formatMessage(data)]));
      };else replayLogger[level] = function (data) {
        var logger = console[level][rrwebOriginal] ? console[level][rrwebOriginal] : console[level];
        logger.apply(void 0, (0, _tslibEs.__spread)(data.payload.map(function (s) {
          return JSON.parse(s);
        }), [_this.formatMessage(data)]));
      };
    };

    try {
      for (var _b = (0, _tslibEs.__values)(this.config.logConfig.level), _c = _b.next(); !_c.done; _c = _b.next()) {
        var level = _c.value;

        _loop_1(level);
      }
    } catch (e_8_1) {
      e_8 = {
        error: e_8_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_8) throw e_8.error;
      }
    }

    return replayLogger;
  };

  Replayer.prototype.legacy_resolveMissingNode = function (map, parent, target, targetMutation) {
    var previousId = targetMutation.previousId,
        nextId = targetMutation.nextId;
    var previousInMap = previousId && map[previousId];
    var nextInMap = nextId && map[nextId];

    if (previousInMap) {
      var _a = previousInMap,
          node = _a.node,
          mutation = _a.mutation;
      parent.insertBefore(node, target);
      delete map[mutation.node.id];
      delete this.legacy_missingNodeRetryMap[mutation.node.id];

      if (mutation.previousId || mutation.nextId) {
        this.legacy_resolveMissingNode(map, parent, node, mutation);
      }
    }

    if (nextInMap) {
      var _b = nextInMap,
          node = _b.node,
          mutation = _b.mutation;
      parent.insertBefore(node, target.nextSibling);
      delete map[mutation.node.id];
      delete this.legacy_missingNodeRetryMap[mutation.node.id];

      if (mutation.previousId || mutation.nextId) {
        this.legacy_resolveMissingNode(map, parent, node, mutation);
      }
    }
  };

  Replayer.prototype.moveAndHover = function (d, x, y, id) {
    this.mouse.style.left = x + "px";
    this.mouse.style.top = y + "px";
    this.drawMouseTail({
      x: x,
      y: y
    });

    var target = _utils.mirror.getNode(id);

    if (!target) {
      return this.debugNodeNotFound(d, id);
    }

    this.hoverElements(target);
  };

  Replayer.prototype.drawMouseTail = function (position) {
    var _this = this;

    if (!this.mouseTail) {
      return;
    }

    var _a = this.config.mouseTail === true ? defaultMouseTailConfig : Object.assign({}, defaultMouseTailConfig, this.config.mouseTail),
        lineCap = _a.lineCap,
        lineWidth = _a.lineWidth,
        strokeStyle = _a.strokeStyle,
        duration = _a.duration;

    var draw = function () {
      if (!_this.mouseTail) {
        return;
      }

      var ctx = _this.mouseTail.getContext('2d');

      if (!ctx || !_this.tailPositions.length) {
        return;
      }

      ctx.clearRect(0, 0, _this.mouseTail.width, _this.mouseTail.height);
      ctx.beginPath();
      ctx.lineWidth = lineWidth;
      ctx.lineCap = lineCap;
      ctx.strokeStyle = strokeStyle;
      ctx.moveTo(_this.tailPositions[0].x, _this.tailPositions[0].y);

      _this.tailPositions.forEach(function (p) {
        return ctx.lineTo(p.x, p.y);
      });

      ctx.stroke();
    };

    this.tailPositions.push(position);
    draw();
    setTimeout(function () {
      _this.tailPositions = _this.tailPositions.filter(function (p) {
        return p !== position;
      });
      draw();
    }, duration / this.speedService.state.context.timer.speed);
  };

  Replayer.prototype.hoverElements = function (el) {
    var _a;

    (_a = this.iframe.contentDocument) === null || _a === void 0 ? void 0 : _a.querySelectorAll('.\\:hover').forEach(function (hoveredEl) {
      hoveredEl.classList.remove(':hover');
    });
    var currentEl = el;

    while (currentEl) {
      if (currentEl.classList) {
        currentEl.classList.add(':hover');
      }

      currentEl = currentEl.parentElement;
    }
  };

  Replayer.prototype.isUserInteraction = function (event) {
    if (event.type !== _types.EventType.IncrementalSnapshot) {
      return false;
    }

    return event.data.source > _types.IncrementalSource.Mutation && event.data.source <= _types.IncrementalSource.Input;
  };

  Replayer.prototype.backToNormal = function () {
    this.nextUserInteractionEvent = null;

    if (this.speedService.state.matches('normal')) {
      return;
    }

    this.speedService.send({
      type: 'BACK_TO_NORMAL'
    });
    this.emitter.emit(_types.ReplayerEvents.SkipEnd, {
      speed: this.speedService.state.context.normalSpeed
    });
  };

  Replayer.prototype.storeState = function (parent) {
    var e_9, _a;

    if (parent) {
      if (parent.nodeType === parent.ELEMENT_NODE) {
        var parentElement = parent;

        if (parentElement.scrollLeft || parentElement.scrollTop) {
          this.elementStateMap.set(parent, {
            scroll: [parentElement.scrollLeft, parentElement.scrollTop]
          });
        }

        var children = parentElement.children;

        try {
          for (var _b = (0, _tslibEs.__values)(Array.from(children)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var child = _c.value;
            this.storeState(child);
          }
        } catch (e_9_1) {
          e_9 = {
            error: e_9_1
          };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
          } finally {
            if (e_9) throw e_9.error;
          }
        }
      }
    }
  };

  Replayer.prototype.restoreState = function (parent) {
    var e_10, _a;

    if (parent.nodeType === parent.ELEMENT_NODE) {
      var parentElement = parent;

      if (this.elementStateMap.has(parent)) {
        var storedState = this.elementStateMap.get(parent);

        if (storedState.scroll) {
          parentElement.scrollLeft = storedState.scroll[0];
          parentElement.scrollTop = storedState.scroll[1];
        }

        this.elementStateMap.delete(parent);
      }

      var children = parentElement.children;

      try {
        for (var _b = (0, _tslibEs.__values)(Array.from(children)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var child = _c.value;
          this.restoreState(child);
        }
      } catch (e_10_1) {
        e_10 = {
          error: e_10_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        } finally {
          if (e_10) throw e_10.error;
        }
      }
    }
  };

  Replayer.prototype.warnNodeNotFound = function (d, id) {
    this.warn("Node with id '" + id + "' not found in", d);
  };

  Replayer.prototype.warnCanvasMutationFailed = function (d, id, error) {
    this.warn("Has error on update canvas '" + id + "'", d, error);
  };

  Replayer.prototype.debugNodeNotFound = function (d, id) {
    this.debug(REPLAY_CONSOLE_PREFIX, "Node with id '" + id + "' not found in", d);
  };

  Replayer.prototype.warn = function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    if (!this.config.showWarning) {
      return;
    }

    console.warn.apply(console, (0, _tslibEs.__spread)([REPLAY_CONSOLE_PREFIX], args));
  };

  Replayer.prototype.debug = function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    if (!this.config.showDebug) {
      return;
    }

    console.log.apply(console, (0, _tslibEs.__spread)([REPLAY_CONSOLE_PREFIX], args));
  };

  return Replayer;
}();

exports.Replayer = Replayer;
},{"../../node_modules/tslib/tslib.es6.js":"../node_modules/rrweb/es/rrweb/node_modules/tslib/tslib.es6.js","../../node_modules/rrweb-snapshot/es/rrweb-snapshot.js":"../node_modules/rrweb/es/rrweb/node_modules/rrweb-snapshot/es/rrweb-snapshot.js","../types.js":"../node_modules/rrweb/es/rrweb/src/types.js","../utils.js":"../node_modules/rrweb/es/rrweb/src/utils.js","../../node_modules/mitt/dist/mitt.es.js":"../node_modules/rrweb/es/rrweb/node_modules/mitt/dist/mitt.es.js","./smoothscroll.js":"../node_modules/rrweb/es/rrweb/src/replay/smoothscroll.js","./timer.js":"../node_modules/rrweb/es/rrweb/src/replay/timer.js","./machine.js":"../node_modules/rrweb/es/rrweb/src/replay/machine.js","./styles/inject-style.js":"../node_modules/rrweb/es/rrweb/src/replay/styles/inject-style.js"}],"../node_modules/rrweb/es/rrweb/src/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "EventType", {
  enumerable: true,
  get: function () {
    return _types.EventType;
  }
});
Object.defineProperty(exports, "IncrementalSource", {
  enumerable: true,
  get: function () {
    return _types.IncrementalSource;
  }
});
Object.defineProperty(exports, "MouseInteractions", {
  enumerable: true,
  get: function () {
    return _types.MouseInteractions;
  }
});
Object.defineProperty(exports, "ReplayerEvents", {
  enumerable: true,
  get: function () {
    return _types.ReplayerEvents;
  }
});
Object.defineProperty(exports, "mirror", {
  enumerable: true,
  get: function () {
    return utils.mirror;
  }
});
Object.defineProperty(exports, "record", {
  enumerable: true,
  get: function () {
    return _index.default;
  }
});
Object.defineProperty(exports, "Replayer", {
  enumerable: true,
  get: function () {
    return _index2.Replayer;
  }
});
exports.utils = exports.freezePage = exports.addCustomEvent = void 0;

var _types = require("./types.js");

var utils = _interopRequireWildcard(require("./utils.js"));

exports.utils = utils;

var _index = _interopRequireDefault(require("./record/index.js"));

var _index2 = require("./replay/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var addCustomEvent = _index.default.addCustomEvent;
exports.addCustomEvent = addCustomEvent;
var freezePage = _index.default.freezePage;
exports.freezePage = freezePage;
},{"./types.js":"../node_modules/rrweb/es/rrweb/src/types.js","./utils.js":"../node_modules/rrweb/es/rrweb/src/utils.js","./record/index.js":"../node_modules/rrweb/es/rrweb/src/record/index.js","./replay/index.js":"../node_modules/rrweb/es/rrweb/src/replay/index.js"}],"../node_modules/rrweb/es/rrweb/node_modules/fflate/esm/browser.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.strFromU8 = strFromU8;
exports.strToU8 = strToU8;
exports.unzlibSync = unzlibSync;
exports.zlibSync = zlibSync;
// DEFLATE is a complex format; to read this code, you should probably check the RFC first:
// aliases for shorter compressed code (most minifers don't do this)
var u8 = Uint8Array,
    u16 = Uint16Array,
    u32 = Uint32Array; // fixed length extra bits

var fleb = new u8([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0,
/* unused */
0, 0,
/* impossible */
0]); // fixed distance extra bits
// see fleb note

var fdeb = new u8([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13,
/* unused */
0, 0]); // code length index map

var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]); // get base, reverse index map from extra bits

var freb = function (eb, start) {
  var b = new u16(31);

  for (var i = 0; i < 31; ++i) {
    b[i] = start += 1 << eb[i - 1];
  } // numbers here are at max 18 bits


  var r = new u32(b[30]);

  for (var i = 1; i < 30; ++i) {
    for (var j = b[i]; j < b[i + 1]; ++j) {
      r[j] = j - b[i] << 5 | i;
    }
  }

  return [b, r];
};

var _a = freb(fleb, 2),
    fl = _a[0],
    revfl = _a[1]; // we can ignore the fact that the other numbers are wrong; they never happen anyway


fl[28] = 258, revfl[258] = 28;

var _b = freb(fdeb, 0),
    fd = _b[0],
    revfd = _b[1]; // map of value to reverse (assuming 16 bits)


var rev = new u16(32768);

for (var i = 0; i < 32768; ++i) {
  // reverse table algorithm from SO
  var x = (i & 0xAAAA) >>> 1 | (i & 0x5555) << 1;
  x = (x & 0xCCCC) >>> 2 | (x & 0x3333) << 2;
  x = (x & 0xF0F0) >>> 4 | (x & 0x0F0F) << 4;
  rev[i] = ((x & 0xFF00) >>> 8 | (x & 0x00FF) << 8) >>> 1;
} // create huffman tree from u8 "map": index -> code length for code index
// mb (max bits) must be at most 15
// TODO: optimize/split up?


var hMap = function (cd, mb, r) {
  var s = cd.length; // index

  var i = 0; // u16 "map": index -> # of codes with bit length = index

  var l = new u16(mb); // length of cd must be 288 (total # of codes)

  for (; i < s; ++i) ++l[cd[i] - 1]; // u16 "map": index -> minimum code for bit length = index


  var le = new u16(mb);

  for (i = 0; i < mb; ++i) {
    le[i] = le[i - 1] + l[i - 1] << 1;
  }

  var co;

  if (r) {
    // u16 "map": index -> number of actual bits, symbol for code
    co = new u16(1 << mb); // bits to remove for reverser

    var rvb = 15 - mb;

    for (i = 0; i < s; ++i) {
      // ignore 0 lengths
      if (cd[i]) {
        // num encoding both symbol and bits read
        var sv = i << 4 | cd[i]; // free bits

        var r_1 = mb - cd[i]; // start value

        var v = le[cd[i] - 1]++ << r_1; // m is end value

        for (var m = v | (1 << r_1) - 1; v <= m; ++v) {
          // every 16 bit value starting with the code yields the same result
          co[rev[v] >>> rvb] = sv;
        }
      }
    }
  } else {
    co = new u16(s);

    for (i = 0; i < s; ++i) co[i] = rev[le[cd[i] - 1]++] >>> 15 - cd[i];
  }

  return co;
}; // fixed length tree


var flt = new u8(288);

for (var i = 0; i < 144; ++i) flt[i] = 8;

for (var i = 144; i < 256; ++i) flt[i] = 9;

for (var i = 256; i < 280; ++i) flt[i] = 7;

for (var i = 280; i < 288; ++i) flt[i] = 8; // fixed distance tree


var fdt = new u8(32);

for (var i = 0; i < 32; ++i) fdt[i] = 5; // fixed length map


var flm = hMap(flt, 9, 0),
    flrm = hMap(flt, 9, 1); // fixed distance map

var fdm = hMap(fdt, 5, 0),
    fdrm = hMap(fdt, 5, 1); // find max of array

var max = function (a) {
  var m = a[0];

  for (var i = 1; i < a.length; ++i) {
    if (a[i] > m) m = a[i];
  }

  return m;
}; // read d, starting at bit p and mask with m


var bits = function (d, p, m) {
  var o = p / 8 >> 0;
  return (d[o] | d[o + 1] << 8) >>> (p & 7) & m;
}; // read d, starting at bit p continuing for at least 16 bits


var bits16 = function (d, p) {
  var o = p / 8 >> 0;
  return (d[o] | d[o + 1] << 8 | d[o + 2] << 16) >>> (p & 7);
}; // get end of byte


var shft = function (p) {
  return (p / 8 >> 0) + (p & 7 && 1);
}; // typed array slice - allows garbage collector to free original reference,
// while being more compatible than .slice


var slc = function (v, s, e) {
  if (s == null || s < 0) s = 0;
  if (e == null || e > v.length) e = v.length; // can't use .constructor in case user-supplied

  var n = new (v instanceof u16 ? u16 : v instanceof u32 ? u32 : u8)(e - s);
  n.set(v.subarray(s, e));
  return n;
}; // expands raw DEFLATE data


var inflt = function (dat, buf, st) {
  // source length
  var sl = dat.length; // have to estimate size

  var noBuf = !buf || st; // no state

  var noSt = !st || st.i;
  if (!st) st = {}; // Assumes roughly 33% compression ratio average

  if (!buf) buf = new u8(sl * 3); // ensure buffer can fit at least l elements

  var cbuf = function (l) {
    var bl = buf.length; // need to increase size to fit

    if (l > bl) {
      // Double or set to necessary, whichever is greater
      var nbuf = new u8(Math.max(bl * 2, l));
      nbuf.set(buf);
      buf = nbuf;
    }
  }; //  last chunk         bitpos           bytes


  var final = st.f || 0,
      pos = st.p || 0,
      bt = st.b || 0,
      lm = st.l,
      dm = st.d,
      lbt = st.m,
      dbt = st.n;
  if (final && !lm) return buf; // total bits

  var tbts = sl * 8;

  do {
    if (!lm) {
      // BFINAL - this is only 1 when last chunk is next
      st.f = final = bits(dat, pos, 1); // type: 0 = no compression, 1 = fixed huffman, 2 = dynamic huffman

      var type = bits(dat, pos + 1, 3);
      pos += 3;

      if (!type) {
        // go to end of byte boundary
        var s = shft(pos) + 4,
            l = dat[s - 4] | dat[s - 3] << 8,
            t = s + l;

        if (t > sl) {
          if (noSt) throw 'unexpected EOF';
          break;
        } // ensure size


        if (noBuf) cbuf(bt + l); // Copy over uncompressed data

        buf.set(dat.subarray(s, t), bt); // Get new bitpos, update byte count

        st.b = bt += l, st.p = pos = t * 8;
        continue;
      } else if (type == 1) lm = flrm, dm = fdrm, lbt = 9, dbt = 5;else if (type == 2) {
        //  literal                            lengths
        var hLit = bits(dat, pos, 31) + 257,
            hcLen = bits(dat, pos + 10, 15) + 4;
        var tl = hLit + bits(dat, pos + 5, 31) + 1;
        pos += 14; // length+distance tree

        var ldt = new u8(tl); // code length tree

        var clt = new u8(19);

        for (var i = 0; i < hcLen; ++i) {
          // use index map to get real code
          clt[clim[i]] = bits(dat, pos + i * 3, 7);
        }

        pos += hcLen * 3; // code lengths bits

        var clb = max(clt),
            clbmsk = (1 << clb) - 1;
        if (!noSt && pos + tl * (clb + 7) > tbts) break; // code lengths map

        var clm = hMap(clt, clb, 1);

        for (var i = 0; i < tl;) {
          var r = clm[bits(dat, pos, clbmsk)]; // bits read

          pos += r & 15; // symbol

          var s = r >>> 4; // code length to copy

          if (s < 16) {
            ldt[i++] = s;
          } else {
            //  copy   count
            var c = 0,
                n = 0;
            if (s == 16) n = 3 + bits(dat, pos, 3), pos += 2, c = ldt[i - 1];else if (s == 17) n = 3 + bits(dat, pos, 7), pos += 3;else if (s == 18) n = 11 + bits(dat, pos, 127), pos += 7;

            while (n--) ldt[i++] = c;
          }
        } //    length tree                 distance tree


        var lt = ldt.subarray(0, hLit),
            dt = ldt.subarray(hLit); // max length bits

        lbt = max(lt); // max dist bits

        dbt = max(dt);
        lm = hMap(lt, lbt, 1);
        dm = hMap(dt, dbt, 1);
      } else throw 'invalid block type';

      if (pos > tbts) throw 'unexpected EOF';
    } // Make sure the buffer can hold this + the largest possible addition
    // maximum chunk size (practically, theoretically infinite) is 2^17;


    if (noBuf) cbuf(bt + 131072);
    var lms = (1 << lbt) - 1,
        dms = (1 << dbt) - 1;
    var mxa = lbt + dbt + 18;

    while (noSt || pos + mxa < tbts) {
      // bits read, code
      var c = lm[bits16(dat, pos) & lms],
          sym = c >>> 4;
      pos += c & 15;
      if (pos > tbts) throw 'unexpected EOF';
      if (!c) throw 'invalid length/literal';
      if (sym < 256) buf[bt++] = sym;else if (sym == 256) {
        lm = null;
        break;
      } else {
        var add = sym - 254; // no extra bits needed if less

        if (sym > 264) {
          // index
          var i = sym - 257,
              b = fleb[i];
          add = bits(dat, pos, (1 << b) - 1) + fl[i];
          pos += b;
        } // dist


        var d = dm[bits16(dat, pos) & dms],
            dsym = d >>> 4;
        if (!d) throw 'invalid distance';
        pos += d & 15;
        var dt = fd[dsym];

        if (dsym > 3) {
          var b = fdeb[dsym];
          dt += bits16(dat, pos) & (1 << b) - 1, pos += b;
        }

        if (pos > tbts) throw 'unexpected EOF';
        if (noBuf) cbuf(bt + 131072);
        var end = bt + add;

        for (; bt < end; bt += 4) {
          buf[bt] = buf[bt - dt];
          buf[bt + 1] = buf[bt + 1 - dt];
          buf[bt + 2] = buf[bt + 2 - dt];
          buf[bt + 3] = buf[bt + 3 - dt];
        }

        bt = end;
      }
    }

    st.l = lm, st.p = pos, st.b = bt;
    if (lm) final = 1, st.m = lbt, st.d = dm, st.n = dbt;
  } while (!final);

  return bt == buf.length ? buf : slc(buf, 0, bt);
}; // starting at p, write the minimum number of bits that can hold v to d


var wbits = function (d, p, v) {
  v <<= p & 7;
  var o = p / 8 >> 0;
  d[o] |= v;
  d[o + 1] |= v >>> 8;
}; // starting at p, write the minimum number of bits (>8) that can hold v to d


var wbits16 = function (d, p, v) {
  v <<= p & 7;
  var o = p / 8 >> 0;
  d[o] |= v;
  d[o + 1] |= v >>> 8;
  d[o + 2] |= v >>> 16;
}; // creates code lengths from a frequency table


var hTree = function (d, mb) {
  // Need extra info to make a tree
  var t = [];

  for (var i = 0; i < d.length; ++i) {
    if (d[i]) t.push({
      s: i,
      f: d[i]
    });
  }

  var s = t.length;
  var t2 = t.slice();
  if (!s) return [new u8(0), 0];

  if (s == 1) {
    var v = new u8(t[0].s + 1);
    v[t[0].s] = 1;
    return [v, 1];
  }

  t.sort(function (a, b) {
    return a.f - b.f;
  }); // after i2 reaches last ind, will be stopped
  // freq must be greater than largest possible number of symbols

  t.push({
    s: -1,
    f: 25001
  });
  var l = t[0],
      r = t[1],
      i0 = 0,
      i1 = 1,
      i2 = 2;
  t[0] = {
    s: -1,
    f: l.f + r.f,
    l: l,
    r: r
  }; // efficient algorithm from UZIP.js
  // i0 is lookbehind, i2 is lookahead - after processing two low-freq
  // symbols that combined have high freq, will start processing i2 (high-freq,
  // non-composite) symbols instead
  // see https://reddit.com/r/photopea/comments/ikekht/uzipjs_questions/

  while (i1 != s - 1) {
    l = t[t[i0].f < t[i2].f ? i0++ : i2++];
    r = t[i0 != i1 && t[i0].f < t[i2].f ? i0++ : i2++];
    t[i1++] = {
      s: -1,
      f: l.f + r.f,
      l: l,
      r: r
    };
  }

  var maxSym = t2[0].s;

  for (var i = 1; i < s; ++i) {
    if (t2[i].s > maxSym) maxSym = t2[i].s;
  } // code lengths


  var tr = new u16(maxSym + 1); // max bits in tree

  var mbt = ln(t[i1 - 1], tr, 0);

  if (mbt > mb) {
    // more algorithms from UZIP.js
    // TODO: find out how this code works (debt)
    //  ind    debt
    var i = 0,
        dt = 0; //    left            cost

    var lft = mbt - mb,
        cst = 1 << lft;
    t2.sort(function (a, b) {
      return tr[b.s] - tr[a.s] || a.f - b.f;
    });

    for (; i < s; ++i) {
      var i2_1 = t2[i].s;

      if (tr[i2_1] > mb) {
        dt += cst - (1 << mbt - tr[i2_1]);
        tr[i2_1] = mb;
      } else break;
    }

    dt >>>= lft;

    while (dt > 0) {
      var i2_2 = t2[i].s;
      if (tr[i2_2] < mb) dt -= 1 << mb - tr[i2_2]++ - 1;else ++i;
    }

    for (; i >= 0 && dt; --i) {
      var i2_3 = t2[i].s;

      if (tr[i2_3] == mb) {
        --tr[i2_3];
        ++dt;
      }
    }

    mbt = mb;
  }

  return [new u8(tr), mbt];
}; // get the max length and assign length codes


var ln = function (n, l, d) {
  return n.s == -1 ? Math.max(ln(n.l, l, d + 1), ln(n.r, l, d + 1)) : l[n.s] = d;
}; // length codes generation


var lc = function (c) {
  var s = c.length; // Note that the semicolon was intentional

  while (s && !c[--s]);

  var cl = new u16(++s); //  ind      num         streak

  var cli = 0,
      cln = c[0],
      cls = 1;

  var w = function (v) {
    cl[cli++] = v;
  };

  for (var i = 1; i <= s; ++i) {
    if (c[i] == cln && i != s) ++cls;else {
      if (!cln && cls > 2) {
        for (; cls > 138; cls -= 138) w(32754);

        if (cls > 2) {
          w(cls > 10 ? cls - 11 << 5 | 28690 : cls - 3 << 5 | 12305);
          cls = 0;
        }
      } else if (cls > 3) {
        w(cln), --cls;

        for (; cls > 6; cls -= 6) w(8304);

        if (cls > 2) w(cls - 3 << 5 | 8208), cls = 0;
      }

      while (cls--) w(cln);

      cls = 1;
      cln = c[i];
    }
  }

  return [cl.subarray(0, cli), s];
}; // calculate the length of output from tree, code lengths


var clen = function (cf, cl) {
  var l = 0;

  for (var i = 0; i < cl.length; ++i) l += cf[i] * cl[i];

  return l;
}; // writes a fixed block
// returns the new bit pos


var wfblk = function (out, pos, dat) {
  // no need to write 00 as type: TypedArray defaults to 0
  var s = dat.length;
  var o = shft(pos + 2);
  out[o] = s & 255;
  out[o + 1] = s >>> 8;
  out[o + 2] = out[o] ^ 255;
  out[o + 3] = out[o + 1] ^ 255;

  for (var i = 0; i < s; ++i) out[o + i + 4] = dat[i];

  return (o + 4 + s) * 8;
}; // writes a block


var wblk = function (dat, out, final, syms, lf, df, eb, li, bs, bl, p) {
  wbits(out, p++, final);
  ++lf[256];

  var _a = hTree(lf, 15),
      dlt = _a[0],
      mlb = _a[1];

  var _b = hTree(df, 15),
      ddt = _b[0],
      mdb = _b[1];

  var _c = lc(dlt),
      lclt = _c[0],
      nlc = _c[1];

  var _d = lc(ddt),
      lcdt = _d[0],
      ndc = _d[1];

  var lcfreq = new u16(19);

  for (var i = 0; i < lclt.length; ++i) lcfreq[lclt[i] & 31]++;

  for (var i = 0; i < lcdt.length; ++i) lcfreq[lcdt[i] & 31]++;

  var _e = hTree(lcfreq, 7),
      lct = _e[0],
      mlcb = _e[1];

  var nlcc = 19;

  for (; nlcc > 4 && !lct[clim[nlcc - 1]]; --nlcc);

  var flen = bl + 5 << 3;
  var ftlen = clen(lf, flt) + clen(df, fdt) + eb;
  var dtlen = clen(lf, dlt) + clen(df, ddt) + eb + 14 + 3 * nlcc + clen(lcfreq, lct) + (2 * lcfreq[16] + 3 * lcfreq[17] + 7 * lcfreq[18]);
  if (flen <= ftlen && flen <= dtlen) return wfblk(out, p, dat.subarray(bs, bs + bl));
  var lm, ll, dm, dl;
  wbits(out, p, 1 + (dtlen < ftlen)), p += 2;

  if (dtlen < ftlen) {
    lm = hMap(dlt, mlb, 0), ll = dlt, dm = hMap(ddt, mdb, 0), dl = ddt;
    var llm = hMap(lct, mlcb, 0);
    wbits(out, p, nlc - 257);
    wbits(out, p + 5, ndc - 1);
    wbits(out, p + 10, nlcc - 4);
    p += 14;

    for (var i = 0; i < nlcc; ++i) wbits(out, p + 3 * i, lct[clim[i]]);

    p += 3 * nlcc;
    var lcts = [lclt, lcdt];

    for (var it = 0; it < 2; ++it) {
      var clct = lcts[it];

      for (var i = 0; i < clct.length; ++i) {
        var len = clct[i] & 31;
        wbits(out, p, llm[len]), p += lct[len];
        if (len > 15) wbits(out, p, clct[i] >>> 5 & 127), p += clct[i] >>> 12;
      }
    }
  } else {
    lm = flm, ll = flt, dm = fdm, dl = fdt;
  }

  for (var i = 0; i < li; ++i) {
    if (syms[i] > 255) {
      var len = syms[i] >>> 18 & 31;
      wbits16(out, p, lm[len + 257]), p += ll[len + 257];
      if (len > 7) wbits(out, p, syms[i] >>> 23 & 31), p += fleb[len];
      var dst = syms[i] & 31;
      wbits16(out, p, dm[dst]), p += dl[dst];
      if (dst > 3) wbits16(out, p, syms[i] >>> 5 & 8191), p += fdeb[dst];
    } else {
      wbits16(out, p, lm[syms[i]]), p += ll[syms[i]];
    }
  }

  wbits16(out, p, lm[256]);
  return p + ll[256];
}; // deflate options (nice << 13) | chain


var deo = new u32([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]); // empty

var et = new u8(0); // compresses data into a raw DEFLATE buffer

var dflt = function (dat, lvl, plvl, pre, post, lst) {
  var s = dat.length;
  var o = new u8(pre + s + 5 * (1 + Math.floor(s / 7000)) + post); // writing to this writes to the output buffer

  var w = o.subarray(pre, o.length - post);
  var pos = 0;

  if (!lvl || s < 8) {
    for (var i = 0; i <= s; i += 65535) {
      // end
      var e = i + 65535;

      if (e < s) {
        // write full block
        pos = wfblk(w, pos, dat.subarray(i, e));
      } else {
        // write final block
        w[i] = lst;
        pos = wfblk(w, pos, dat.subarray(i, s));
      }
    }
  } else {
    var opt = deo[lvl - 1];
    var n = opt >>> 13,
        c = opt & 8191;
    var msk_1 = (1 << plvl) - 1; //    prev 2-byte val map    curr 2-byte val map

    var prev = new u16(32768),
        head = new u16(msk_1 + 1);
    var bs1_1 = Math.ceil(plvl / 3),
        bs2_1 = 2 * bs1_1;

    var hsh = function (i) {
      return (dat[i] ^ dat[i + 1] << bs1_1 ^ dat[i + 2] << bs2_1) & msk_1;
    }; // 24576 is an arbitrary number of maximum symbols per block
    // 424 buffer for last block


    var syms = new u32(25000); // length/literal freq   distance freq

    var lf = new u16(288),
        df = new u16(32); //  l/lcnt  exbits  index  l/lind  waitdx  bitpos

    var lc_1 = 0,
        eb = 0,
        i = 0,
        li = 0,
        wi = 0,
        bs = 0;

    for (; i < s; ++i) {
      // hash value
      var hv = hsh(i); // index mod 32768

      var imod = i & 32767; // previous index with this value

      var pimod = head[hv];
      prev[imod] = pimod;
      head[hv] = imod; // We always should modify head and prev, but only add symbols if
      // this data is not yet processed ("wait" for wait index)

      if (wi <= i) {
        // bytes remaining
        var rem = s - i;

        if ((lc_1 > 7000 || li > 24576) && rem > 423) {
          pos = wblk(dat, w, 0, syms, lf, df, eb, li, bs, i - bs, pos);
          li = lc_1 = eb = 0, bs = i;

          for (var j = 0; j < 286; ++j) lf[j] = 0;

          for (var j = 0; j < 30; ++j) df[j] = 0;
        } //  len    dist   chain


        var l = 2,
            d = 0,
            ch_1 = c,
            dif = imod - pimod & 32767;

        if (rem > 2 && hv == hsh(i - dif)) {
          var maxn = Math.min(n, rem) - 1;
          var maxd = Math.min(32767, i); // max possible length
          // not capped at dif because decompressors implement "rolling" index population

          var ml = Math.min(258, rem);

          while (dif <= maxd && --ch_1 && imod != pimod) {
            if (dat[i + l] == dat[i + l - dif]) {
              var nl = 0;

              for (; nl < ml && dat[i + nl] == dat[i + nl - dif]; ++nl);

              if (nl > l) {
                l = nl, d = dif; // break out early when we reach "nice" (we are satisfied enough)

                if (nl > maxn) break; // now, find the rarest 2-byte sequence within this
                // length of literals and search for that instead.
                // Much faster than just using the start

                var mmd = Math.min(dif, nl - 2);
                var md = 0;

                for (var j = 0; j < mmd; ++j) {
                  var ti = i - dif + j + 32768 & 32767;
                  var pti = prev[ti];
                  var cd = ti - pti + 32768 & 32767;
                  if (cd > md) md = cd, pimod = ti;
                }
              }
            } // check the previous match


            imod = pimod, pimod = prev[imod];
            dif += imod - pimod + 32768 & 32767;
          }
        } // d will be nonzero only when a match was found


        if (d) {
          // store both dist and len data in one Uint32
          // Make sure this is recognized as a len/dist with 28th bit (2^28)
          syms[li++] = 268435456 | revfl[l] << 18 | revfd[d];
          var lin = revfl[l] & 31,
              din = revfd[d] & 31;
          eb += fleb[lin] + fdeb[din];
          ++lf[257 + lin];
          ++df[din];
          wi = i + l;
          ++lc_1;
        } else {
          syms[li++] = dat[i];
          ++lf[dat[i]];
        }
      }
    }

    pos = wblk(dat, w, lst, syms, lf, df, eb, li, bs, i - bs, pos); // this is the easiest way to avoid needing to maintain state

    if (!lst) pos = wfblk(w, pos, et);
  }

  return slc(o, 0, pre + shft(pos) + post);
}; // CRC32 table


var crct = new u32(256);

for (var i = 0; i < 256; ++i) {
  var c = i,
      k = 9;

  while (--k) c = (c & 1 && 0xEDB88320) ^ c >>> 1;

  crct[i] = c;
} // Alder32


var adler = function () {
  var a = 1,
      b = 0;
  return {
    p: function (d) {
      // closures have awful performance
      var n = a,
          m = b;
      var l = d.length;

      for (var i = 0; i != l;) {
        var e = Math.min(i + 5552, l);

        for (; i < e; ++i) n += d[i], m += n;

        n %= 65521, m %= 65521;
      }

      a = n, b = m;
    },
    d: function () {
      return (a >>> 8 << 16 | (b & 255) << 8 | b >>> 8) + ((a & 255) << 23) * 2;
    }
  };
}; // deflate with opts


var dopt = function (dat, opt, pre, post, st) {
  return dflt(dat, opt.level == null ? 6 : opt.level, opt.mem == null ? Math.ceil(Math.max(8, Math.min(13, Math.log(dat.length))) * 1.5) : 12 + opt.mem, pre, post, !st);
}; // write bytes


var wbytes = function (d, b, v) {
  for (; v; ++b) d[b] = v, v >>>= 8;
}; // zlib header


var zlh = function (c, o) {
  var lv = o.level,
      fl = lv == 0 ? 0 : lv < 6 ? 1 : lv == 9 ? 3 : 2;
  c[0] = 120, c[1] = fl << 6 | (fl ? 32 - 2 * fl : 1);
}; // zlib valid


var zlv = function (d) {
  if ((d[0] & 15) != 8 || d[0] >>> 4 > 7 || (d[0] << 8 | d[1]) % 31) throw 'invalid zlib data';
  if (d[1] & 32) throw 'invalid zlib data: preset dictionaries not supported';
};
/**
 * Compress data with Zlib
 * @param data The data to compress
 * @param opts The compression options
 * @returns The zlib-compressed version of the data
 */


function zlibSync(data, opts) {
  if (opts === void 0) {
    opts = {};
  }

  var a = adler();
  a.p(data);
  var d = dopt(data, opts, 2, 4);
  return zlh(d, opts), wbytes(d, d.length - 4, a.d()), d;
}
/**
 * Expands Zlib data
 * @param data The data to decompress
 * @param out Where to write the data. Saves memory if you know the decompressed size and provide an output buffer of that length.
 * @returns The decompressed version of the data
 */


function unzlibSync(data, out) {
  return inflt((zlv(data), data.subarray(2, -4)), out);
}
/**
 * Converts a string into a Uint8Array for use with compression/decompression methods
 * @param str The string to encode
 * @param latin1 Whether or not to interpret the data as Latin-1. This should
 *               not need to be true unless decoding a binary string.
 * @returns The string encoded in UTF-8/Latin-1 binary
 */


function strToU8(str, latin1) {
  var l = str.length;
  if (!latin1 && typeof TextEncoder != 'undefined') return new TextEncoder().encode(str);
  var ar = new u8(str.length + (str.length >>> 1));
  var ai = 0;

  var w = function (v) {
    ar[ai++] = v;
  };

  for (var i = 0; i < l; ++i) {
    if (ai + 5 > ar.length) {
      var n = new u8(ai + 8 + (l - i << 1));
      n.set(ar);
      ar = n;
    }

    var c = str.charCodeAt(i);
    if (c < 128 || latin1) w(c);else if (c < 2048) w(192 | c >>> 6), w(128 | c & 63);else if (c > 55295 && c < 57344) c = 65536 + (c & 1023 << 10) | str.charCodeAt(++i) & 1023, w(240 | c >>> 18), w(128 | c >>> 12 & 63), w(128 | c >>> 6 & 63), w(128 | c & 63);else w(224 | c >>> 12), w(128 | c >>> 6 & 63), w(128 | c & 63);
  }

  return slc(ar, 0, ai);
}
/**
 * Converts a Uint8Array to a string
 * @param dat The data to decode to string
 * @param latin1 Whether or not to interpret the data as Latin-1. This should
 *               not need to be true unless encoding to binary string.
 * @returns The original UTF-8/Latin-1 string
 */


function strFromU8(dat, latin1) {
  var r = '';
  if (!latin1 && typeof TextDecoder != 'undefined') return new TextDecoder().decode(dat);

  for (var i = 0; i < dat.length;) {
    var c = dat[i++];
    if (c < 128 || latin1) r += String.fromCharCode(c);else if (c < 224) r += String.fromCharCode((c & 31) << 6 | dat[i++] & 63);else if (c < 240) r += String.fromCharCode((c & 15) << 12 | (dat[i++] & 63) << 6 | dat[i++] & 63);else c = ((c & 15) << 18 | (dat[i++] & 63) << 12 | (dat[i++] & 63) << 6 | dat[i++] & 63) - 65536, r += String.fromCharCode(55296 | c >> 10, 56320 | c & 1023);
  }

  return r;
}
},{}],"../node_modules/rrweb/es/rrweb/src/packer/base.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MARK = void 0;
var MARK = 'v1';
exports.MARK = MARK;
},{}],"../node_modules/rrweb/es/rrweb/src/packer/pack.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pack = void 0;

var _tslibEs = require("../../node_modules/tslib/tslib.es6.js");

var _browser = require("../../node_modules/fflate/esm/browser.js");

var _base = require("./base.js");

var pack = function (event) {
  var _e = (0, _tslibEs.__assign)((0, _tslibEs.__assign)({}, event), {
    v: _base.MARK
  });

  return (0, _browser.strFromU8)((0, _browser.zlibSync)((0, _browser.strToU8)(JSON.stringify(_e))), true);
};

exports.pack = pack;
},{"../../node_modules/tslib/tslib.es6.js":"../node_modules/rrweb/es/rrweb/node_modules/tslib/tslib.es6.js","../../node_modules/fflate/esm/browser.js":"../node_modules/rrweb/es/rrweb/node_modules/fflate/esm/browser.js","./base.js":"../node_modules/rrweb/es/rrweb/src/packer/base.js"}],"../node_modules/rrweb/es/rrweb/src/packer/unpack.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unpack = void 0;

var _browser = require("../../node_modules/fflate/esm/browser.js");

var _base = require("./base.js");

var unpack = function (raw) {
  if (typeof raw !== 'string') {
    return raw;
  }

  try {
    var e = JSON.parse(raw);

    if (e.timestamp) {
      return e;
    }
  } catch (error) {}

  try {
    var e = JSON.parse((0, _browser.strFromU8)((0, _browser.unzlibSync)((0, _browser.strToU8)(raw, true))));

    if (e.v === _base.MARK) {
      return e;
    }

    throw new Error("These events were packed with packer " + e.v + " which is incompatible with current packer " + _base.MARK + ".");
  } catch (error) {
    console.error(error);
    throw new Error('Unknown data format.');
  }
};

exports.unpack = unpack;
},{"../../node_modules/fflate/esm/browser.js":"../node_modules/rrweb/es/rrweb/node_modules/fflate/esm/browser.js","./base.js":"../node_modules/rrweb/es/rrweb/src/packer/base.js"}],"../node_modules/rrweb/es/rrweb/src/entries/all.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "EventType", {
  enumerable: true,
  get: function () {
    return _types.EventType;
  }
});
Object.defineProperty(exports, "IncrementalSource", {
  enumerable: true,
  get: function () {
    return _types.IncrementalSource;
  }
});
Object.defineProperty(exports, "MouseInteractions", {
  enumerable: true,
  get: function () {
    return _types.MouseInteractions;
  }
});
Object.defineProperty(exports, "ReplayerEvents", {
  enumerable: true,
  get: function () {
    return _types.ReplayerEvents;
  }
});
Object.defineProperty(exports, "mirror", {
  enumerable: true,
  get: function () {
    return utils.mirror;
  }
});
Object.defineProperty(exports, "record", {
  enumerable: true,
  get: function () {
    return _index.default;
  }
});
Object.defineProperty(exports, "Replayer", {
  enumerable: true,
  get: function () {
    return _index2.Replayer;
  }
});
Object.defineProperty(exports, "addCustomEvent", {
  enumerable: true,
  get: function () {
    return _index3.addCustomEvent;
  }
});
Object.defineProperty(exports, "freezePage", {
  enumerable: true,
  get: function () {
    return _index3.freezePage;
  }
});
Object.defineProperty(exports, "pack", {
  enumerable: true,
  get: function () {
    return _pack.pack;
  }
});
Object.defineProperty(exports, "unpack", {
  enumerable: true,
  get: function () {
    return _unpack.unpack;
  }
});
exports.utils = void 0;

var _types = require("../types.js");

var utils = _interopRequireWildcard(require("../utils.js"));

exports.utils = utils;

var _index = _interopRequireDefault(require("../record/index.js"));

var _index2 = require("../replay/index.js");

var _index3 = require("../index.js");

var _pack = require("../packer/pack.js");

var _unpack = require("../packer/unpack.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
},{"../types.js":"../node_modules/rrweb/es/rrweb/src/types.js","../utils.js":"../node_modules/rrweb/es/rrweb/src/utils.js","../record/index.js":"../node_modules/rrweb/es/rrweb/src/record/index.js","../replay/index.js":"../node_modules/rrweb/es/rrweb/src/replay/index.js","../index.js":"../node_modules/rrweb/es/rrweb/src/index.js","../packer/pack.js":"../node_modules/rrweb/es/rrweb/src/packer/pack.js","../packer/unpack.js":"../node_modules/rrweb/es/rrweb/src/packer/unpack.js"}],"../node_modules/axios/lib/helpers/bind.js":[function(require,module,exports) {
'use strict';

module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

},{}],"../node_modules/axios/lib/utils.js":[function(require,module,exports) {
'use strict';

var bind = require('./helpers/bind');

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};

},{"./helpers/bind":"../node_modules/axios/lib/helpers/bind.js"}],"../node_modules/axios/lib/helpers/buildURL.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

},{"./../utils":"../node_modules/axios/lib/utils.js"}],"../node_modules/axios/lib/core/InterceptorManager.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;

},{"./../utils":"../node_modules/axios/lib/utils.js"}],"../node_modules/axios/lib/core/transformData.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};

},{"./../utils":"../node_modules/axios/lib/utils.js"}],"../node_modules/axios/lib/cancel/isCancel.js":[function(require,module,exports) {
'use strict';

module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

},{}],"../node_modules/axios/lib/helpers/normalizeHeaderName.js":[function(require,module,exports) {
'use strict';

var utils = require('../utils');

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

},{"../utils":"../node_modules/axios/lib/utils.js"}],"../node_modules/axios/lib/core/enhanceError.js":[function(require,module,exports) {
'use strict';

/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};

},{}],"../node_modules/axios/lib/core/createError.js":[function(require,module,exports) {
'use strict';

var enhanceError = require('./enhanceError');

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

},{"./enhanceError":"../node_modules/axios/lib/core/enhanceError.js"}],"../node_modules/axios/lib/core/settle.js":[function(require,module,exports) {
'use strict';

var createError = require('./createError');

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};

},{"./createError":"../node_modules/axios/lib/core/createError.js"}],"../node_modules/axios/lib/helpers/cookies.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);

},{"./../utils":"../node_modules/axios/lib/utils.js"}],"../node_modules/axios/lib/helpers/isAbsoluteURL.js":[function(require,module,exports) {
'use strict';

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};

},{}],"../node_modules/axios/lib/helpers/combineURLs.js":[function(require,module,exports) {
'use strict';

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};

},{}],"../node_modules/axios/lib/core/buildFullPath.js":[function(require,module,exports) {
'use strict';

var isAbsoluteURL = require('../helpers/isAbsoluteURL');
var combineURLs = require('../helpers/combineURLs');

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};

},{"../helpers/isAbsoluteURL":"../node_modules/axios/lib/helpers/isAbsoluteURL.js","../helpers/combineURLs":"../node_modules/axios/lib/helpers/combineURLs.js"}],"../node_modules/axios/lib/helpers/parseHeaders.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};

},{"./../utils":"../node_modules/axios/lib/utils.js"}],"../node_modules/axios/lib/helpers/isURLSameOrigin.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);

},{"./../utils":"../node_modules/axios/lib/utils.js"}],"../node_modules/axios/lib/adapters/xhr.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');
var settle = require('./../core/settle');
var cookies = require('./../helpers/cookies');
var buildURL = require('./../helpers/buildURL');
var buildFullPath = require('../core/buildFullPath');
var parseHeaders = require('./../helpers/parseHeaders');
var isURLSameOrigin = require('./../helpers/isURLSameOrigin');
var createError = require('../core/createError');

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

},{"./../utils":"../node_modules/axios/lib/utils.js","./../core/settle":"../node_modules/axios/lib/core/settle.js","./../helpers/cookies":"../node_modules/axios/lib/helpers/cookies.js","./../helpers/buildURL":"../node_modules/axios/lib/helpers/buildURL.js","../core/buildFullPath":"../node_modules/axios/lib/core/buildFullPath.js","./../helpers/parseHeaders":"../node_modules/axios/lib/helpers/parseHeaders.js","./../helpers/isURLSameOrigin":"../node_modules/axios/lib/helpers/isURLSameOrigin.js","../core/createError":"../node_modules/axios/lib/core/createError.js"}],"../../../../../.nvm/versions/node/v14.15.4/lib/node_modules/parcel-bundler/node_modules/process/browser.js":[function(require,module,exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};
},{}],"../node_modules/axios/lib/defaults.js":[function(require,module,exports) {
var process = require("process");
'use strict';

var utils = require('./utils');
var normalizeHeaderName = require('./helpers/normalizeHeaderName');

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = require('./adapters/xhr');
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = require('./adapters/http');
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

},{"./utils":"../node_modules/axios/lib/utils.js","./helpers/normalizeHeaderName":"../node_modules/axios/lib/helpers/normalizeHeaderName.js","./adapters/xhr":"../node_modules/axios/lib/adapters/xhr.js","./adapters/http":"../node_modules/axios/lib/adapters/xhr.js","process":"../../../../../.nvm/versions/node/v14.15.4/lib/node_modules/parcel-bundler/node_modules/process/browser.js"}],"../node_modules/axios/lib/core/dispatchRequest.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');
var transformData = require('./transformData');
var isCancel = require('../cancel/isCancel');
var defaults = require('../defaults');

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};

},{"./../utils":"../node_modules/axios/lib/utils.js","./transformData":"../node_modules/axios/lib/core/transformData.js","../cancel/isCancel":"../node_modules/axios/lib/cancel/isCancel.js","../defaults":"../node_modules/axios/lib/defaults.js"}],"../node_modules/axios/lib/core/mergeConfig.js":[function(require,module,exports) {
'use strict';

var utils = require('../utils');

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
  var defaultToConfig2Keys = [
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
  ];
  var directMergeKeys = ['validateStatus'];

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  }

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  utils.forEach(directMergeKeys, function merge(prop) {
    if (prop in config2) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys)
    .concat(directMergeKeys);

  var otherKeys = Object
    .keys(config1)
    .concat(Object.keys(config2))
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, mergeDeepProperties);

  return config;
};

},{"../utils":"../node_modules/axios/lib/utils.js"}],"../node_modules/axios/lib/core/Axios.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');
var buildURL = require('../helpers/buildURL');
var InterceptorManager = require('./InterceptorManager');
var dispatchRequest = require('./dispatchRequest');
var mergeConfig = require('./mergeConfig');

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;

},{"./../utils":"../node_modules/axios/lib/utils.js","../helpers/buildURL":"../node_modules/axios/lib/helpers/buildURL.js","./InterceptorManager":"../node_modules/axios/lib/core/InterceptorManager.js","./dispatchRequest":"../node_modules/axios/lib/core/dispatchRequest.js","./mergeConfig":"../node_modules/axios/lib/core/mergeConfig.js"}],"../node_modules/axios/lib/cancel/Cancel.js":[function(require,module,exports) {
'use strict';

/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;

},{}],"../node_modules/axios/lib/cancel/CancelToken.js":[function(require,module,exports) {
'use strict';

var Cancel = require('./Cancel');

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;

},{"./Cancel":"../node_modules/axios/lib/cancel/Cancel.js"}],"../node_modules/axios/lib/helpers/spread.js":[function(require,module,exports) {
'use strict';

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

},{}],"../node_modules/axios/lib/helpers/isAxiosError.js":[function(require,module,exports) {
'use strict';

/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return (typeof payload === 'object') && (payload.isAxiosError === true);
};

},{}],"../node_modules/axios/lib/axios.js":[function(require,module,exports) {
'use strict';

var utils = require('./utils');
var bind = require('./helpers/bind');
var Axios = require('./core/Axios');
var mergeConfig = require('./core/mergeConfig');
var defaults = require('./defaults');

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = require('./cancel/Cancel');
axios.CancelToken = require('./cancel/CancelToken');
axios.isCancel = require('./cancel/isCancel');

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = require('./helpers/spread');

// Expose isAxiosError
axios.isAxiosError = require('./helpers/isAxiosError');

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;

},{"./utils":"../node_modules/axios/lib/utils.js","./helpers/bind":"../node_modules/axios/lib/helpers/bind.js","./core/Axios":"../node_modules/axios/lib/core/Axios.js","./core/mergeConfig":"../node_modules/axios/lib/core/mergeConfig.js","./defaults":"../node_modules/axios/lib/defaults.js","./cancel/Cancel":"../node_modules/axios/lib/cancel/Cancel.js","./cancel/CancelToken":"../node_modules/axios/lib/cancel/CancelToken.js","./cancel/isCancel":"../node_modules/axios/lib/cancel/isCancel.js","./helpers/spread":"../node_modules/axios/lib/helpers/spread.js","./helpers/isAxiosError":"../node_modules/axios/lib/helpers/isAxiosError.js"}],"../node_modules/axios/index.js":[function(require,module,exports) {
module.exports = require('./lib/axios');
},{"./lib/axios":"../node_modules/axios/lib/axios.js"}],"index.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var rrweb_1 = require("rrweb");

var axios_1 = __importDefault(require("axios"));

var eventsBuffer = [];
var _a = window.sessionRecorderConfig,
    websiteId = _a.websiteId,
    apiUrl = _a.apiUrl;
rrweb_1.record({
  emit: function emit(event) {
    eventsBuffer.push(event);
  }
});

function identifyClient() {
  return new Promise(function (resolve, reject) {
    var clientId = sessionStorage.getItem("clientId");

    if (clientId) {
      resolve(clientId);
    } else {
      axios_1.default.post(apiUrl + "/api/clients").then(function (_a) {
        var data = _a.data;
        sessionStorage.setItem("clientId", data.clientId);
        resolve(data.clientId);
      }).catch(reject);
    }
  });
}

function identifySession() {
  return new Promise(function (resolve, reject) {
    axios_1.default.get("https://api.ipify.org?format=json").then(function (_a) {
      var data = _a.data;
      var ip = data.ip;
      var sessionId = window.sessionId;

      if (sessionId) {
        resolve(sessionId);
      } else {
        // generate new session if doesnt' exist.
        axios_1.default.post(apiUrl + "/api/sessions", {
          ip: ip,
          location: window.location,
          clientId: sessionStorage.getItem("clientId")
        }, {
          params: {
            websiteId: websiteId
          }
        }).then(function (_a) {
          var data = _a.data;
          window.sessionId = data._id;
          resolve(data._id);
        }).catch(reject);
      }
    }).catch(reject);
  });
}

function save(sessionId, clientId) {
  axios_1.default.post(apiUrl + "/api/sessions/" + sessionId + "/recordings", {
    events: eventsBuffer,
    clientId: clientId
  }).then(function (result) {
    // eventsBuffer = [];
    console.log("Successfully Sent To Server");
  }).catch(function (error) {
    console.log("Failure Sending.");
    console.error(error);
  });
}

try {
  identifyClient().then(function (clientId) {
    identifySession().then(function (sessionId) {
      setInterval(function () {
        save(sessionId, clientId);
      }, 5 * 1000);
    });
  });
} catch (error) {
  console.error(error);
}
},{"rrweb":"../node_modules/rrweb/es/rrweb/src/entries/all.js","axios":"../node_modules/axios/index.js"}],"../../../../../.nvm/versions/node/v14.15.4/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "46517" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../.nvm/versions/node/v14.15.4/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.ts"], null)