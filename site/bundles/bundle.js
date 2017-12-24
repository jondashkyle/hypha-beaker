(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
var html = require('choo/html');
module.exports = component;
function component(id, props) {
    if (!id) 
        return;
    props = props || {};
    var ratio = props.ratio || 56.25;
    return html`
    <div class="psr w100" style="padding-bottom: ${ratio}%">
      <iframe
        class="psa t0 l0 h100 w100 b0 r0"
        src="https://www.youtube.com/embed/${id}?rel=0&amp;theme=dark&amp;controls=1&amp;showinfo=0"
        frameborder="0"
        gesture="media"
        allow="encrypted-media"
        allowfullscreen
      ></iframe>
    </div>
  `;
}


}).call(this,require('_process'))
},{"_process":108,"choo/html":6}],2:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
var css = 0;
(null || true) && "_2a078321";
(null || true) && "_fe377748";


}).call(this,require('_process'))
},{"_process":108,"sheetify/insert":27}],3:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
var html = require('choo/html');
var choo = require('choo');
require('./design');
var app = choo();
app.use(require('./plugins/scroll'));
app.use(require('./stores/content'));
app.route('*', require('./views/wrapper'));
app.mount('body');


}).call(this,require('_process'))
},{"./design":2,"./plugins/scroll":32,"./stores/content":33,"./views/wrapper":38,"_process":108,"choo":7,"choo/html":6}],4:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
var trailingNewlineRegex = /\n[\s]+$/;
var leadingNewlineRegex = /^\n[\s]+/;
var trailingSpaceRegex = /[\s]+$/;
var leadingSpaceRegex = /^[\s]+/;
var multiSpaceRegex = /[\n\s]+/g;
var TEXT_TAGS = ['a','abbr','b','bdi','bdo','br','cite','data','dfn','em','i','kbd',
    'mark','q','rp','rt','rtc','ruby','s','amp','small','span','strong','sub','sup',
    'time','u','var','wbr'];
var CODE_TAGS = ['code','pre'];
module.exports = function appendChild(el, childs) {
    if (!Array.isArray(childs)) 
        return;
    var nodeName = el.nodeName.toLowerCase();
    var hadText = false;
    var value, leader;
    for (var i = 0, len = childs.length;i < len; i++) {
        var node = childs[i];
        if (Array.isArray(node)) {
            appendChild(el, node);
            continue;
        }
        if (typeof node === 'number' || typeof node === 'boolean' || typeof node === 'function' || node instanceof Date || node instanceof RegExp) {
            node = node.toString();
        }
        var lastChild = el.childNodes[el.childNodes.length - 1];
        // Iterate over text nodes
        if (typeof node === 'string') {
            hadText = true;
            // If we already had text, append to the existing text
            if (lastChild && lastChild.nodeName === '#text') {
                lastChild.nodeValue += node;
            } else {
                // We didn't have a text node yet, create one
                node = document.createTextNode(node);
                el.appendChild(node);
                lastChild = node;
            }
            // If this is the last of the child nodes, make sure we close it out
            // right
            if (i === len - 1) {
                hadText = false;
                // Trim the child text nodes if the current node isn't a
                // node where whitespace matters.
                if (TEXT_TAGS.indexOf(nodeName) === -1 && CODE_TAGS.indexOf(nodeName) === -1) {
                    value = lastChild.nodeValue.replace(leadingNewlineRegex, '').replace(trailingSpaceRegex, '').replace(trailingNewlineRegex, '').replace(multiSpaceRegex, ' ');
                    if (value === '') {
                        el.removeChild(lastChild);
                    } else {
                        lastChild.nodeValue = value;
                    }
                } else if (CODE_TAGS.indexOf(nodeName) === -1) {
                    // The very first node in the list should not have leading
                    // whitespace. Sibling text nodes should have whitespace if there
                    // was any.
                    leader = i === 0 ? '' : ' ';
                    value = lastChild.nodeValue.replace(leadingNewlineRegex, leader).replace(leadingSpaceRegex, ' ').replace(trailingSpaceRegex, '').replace(trailingNewlineRegex, '').replace(multiSpaceRegex, ' ');
                    lastChild.nodeValue = value;
                }
            }
        // Iterate over DOM nodes
        } else if (node && node.nodeType) {
            // If the last node was a text node, make sure it is properly closed out
            if (hadText) {
                hadText = false;
                // Trim the child text nodes if the current node isn't a
                // text node or a code node
                if (TEXT_TAGS.indexOf(nodeName) === -1 && CODE_TAGS.indexOf(nodeName) === -1) {
                    value = lastChild.nodeValue.replace(leadingNewlineRegex, '').replace(trailingNewlineRegex, '').replace(multiSpaceRegex, ' ');
                    // Remove empty text nodes, append otherwise
                    if (value === '') {
                        el.removeChild(lastChild);
                    } else {
                        lastChild.nodeValue = value;
                    }
                // Trim the child nodes if the current node is not a node
                // where all whitespace must be preserved
                } else if (CODE_TAGS.indexOf(nodeName) === -1) {
                    value = lastChild.nodeValue.replace(leadingSpaceRegex, ' ').replace(leadingNewlineRegex, '').replace(trailingNewlineRegex, '').replace(multiSpaceRegex, ' ');
                    lastChild.nodeValue = value;
                }
            }
            // Store the last nodename
            var _nodeName = node.nodeName;
            if (_nodeName) 
                nodeName = _nodeName.toLowerCase();
            // Append the node to the DOM
            el.appendChild(node);
        }
    }
};


}).call(this,require('_process'))
},{"_process":108}],5:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
var hyperx = require('hyperx');
var appendChild = require('./appendChild');
var SVGNS = 'http://www.w3.org/2000/svg';
var XLINKNS = 'http://www.w3.org/1999/xlink';
var BOOL_PROPS = ['autofocus','checked','defaultchecked','disabled','formnovalidate',
    'indeterminate','readonly','required','selected','willvalidate'];
var COMMENT_TAG = '!--';
var SVG_TAGS = ['svg','altGlyph','altGlyphDef','altGlyphItem','animate','animateColor',
    'animateMotion','animateTransform','circle','clipPath','color-profile','cursor',
    'defs','desc','ellipse','feBlend','feColorMatrix','feComponentTransfer','feComposite',
    'feConvolveMatrix','feDiffuseLighting','feDisplacementMap','feDistantLight','feFlood',
    'feFuncA','feFuncB','feFuncG','feFuncR','feGaussianBlur','feImage','feMerge',
    'feMergeNode','feMorphology','feOffset','fePointLight','feSpecularLighting','feSpotLight',
    'feTile','feTurbulence','filter','font','font-face','font-face-format','font-face-name',
    'font-face-src','font-face-uri','foreignObject','g','glyph','glyphRef','hkern',
    'image','line','linearGradient','marker','mask','metadata','missing-glyph','mpath',
    'path','pattern','polygon','polyline','radialGradient','rect','set','stop','switch',
    'symbol','text','textPath','title','tref','tspan','use','view','vkern'];
function belCreateElement(tag, props, children) {
    var el;
    // If an svg tag, it needs a namespace
    if (SVG_TAGS.indexOf(tag) !== -1) {
        props.namespace = SVGNS;
    }
    // If we are using a namespace
    var ns = false;
    if (props.namespace) {
        ns = props.namespace;
        delete props.namespace;
    }
    // Create the element
    if (ns) {
        el = document.createElementNS(ns, tag);
    } else if (tag === COMMENT_TAG) {
        return document.createComment(props.comment);
    } else {
        el = document.createElement(tag);
    }
    // Create the properties
    for (var p in props) {
        if (props.hasOwnProperty(p)) {
            var key = p.toLowerCase();
            var val = props[p];
            // Normalize className
            if (key === 'classname') {
                key = 'class';
                p = 'class';
            }
            // The for attribute gets transformed to htmlFor, but we just set as for
            if (p === 'htmlFor') {
                p = 'for';
            }
            // If a property is boolean, set itself to the key
            if (BOOL_PROPS.indexOf(key) !== -1) {
                if (val === 'true') 
                    val = key;
                 else if (val === 'false') 
                    continue;
            }
            // If a property prefers being set directly vs setAttribute
            if (key.slice(0, 2) === 'on') {
                el[p] = val;
            } else {
                if (ns) {
                    if (p === 'xlink:href') {
                        el.setAttributeNS(XLINKNS, p, val);
                    } else if (/^xmlns($|:)/i.test(p)) {} else {
                        // skip xmlns definitions
                        el.setAttributeNS(null, p, val);
                    }
                } else {
                    el.setAttribute(p, val);
                }
            }
        }
    }
    appendChild(el, children);
    return el;
}

module.exports = hyperx(belCreateElement, {
    comments: true
});
module.exports.default = module.exports;
module.exports.createElement = belCreateElement;


}).call(this,require('_process'))
},{"./appendChild":4,"_process":108,"hyperx":10}],6:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
module.exports = require('bel');


}).call(this,require('_process'))
},{"_process":108,"bel":5}],7:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
var scrollToAnchor = require('scroll-to-anchor');
var documentReady = require('document-ready');
var nanolocation = require('nanolocation');
var nanotiming = require('nanotiming');
var nanorouter = require('nanorouter');
var nanomorph = require('nanomorph');
var nanoquery = require('nanoquery');
var nanohref = require('nanohref');
var nanoraf = require('nanoraf');
var nanobus = require('nanobus');
var assert = require('assert');
var xtend = require('xtend');
module.exports = Choo;
var HISTORY_OBJECT = {};
function Choo(opts) {
    if (!(this instanceof Choo)) 
        return new Choo(opts);
    opts = opts || {};
    assert.equal(typeof opts, 'object', 'choo: opts should be type object');
    var self = this;
    // define events used by choo
    this._events = {
        DOMCONTENTLOADED: 'DOMContentLoaded',
        DOMTITLECHANGE: 'DOMTitleChange',
        REPLACESTATE: 'replaceState',
        PUSHSTATE: 'pushState',
        NAVIGATE: 'navigate',
        POPSTATE: 'popState',
        RENDER: 'render'
    };
    // properties for internal use only
    this._historyEnabled = opts.history === undefined ? true : opts.history;
    this._hrefEnabled = opts.href === undefined ? true : opts.href;
    this._hasWindow = typeof window !== 'undefined';
    this._createLocation = nanolocation;
    this._loaded = false;
    this._tree = null;
    // properties that are part of the API
    this.router = nanorouter({
        curry: true
    });
    this.emitter = nanobus('choo.emit');
    var events = {
        events: this._events
    };
    if (this._hasWindow) {
        this.state = window.initialState ? xtend(window.initialState, events) : events;
        delete window.initialState;
    } else {
        this.state = events;
    }
    // listen for title changes; available even when calling .toString()
    if (this._hasWindow) 
        this.state.title = document.title;
    this.emitter.prependListener(this._events.DOMTITLECHANGE, function (title) {
        assert.equal(typeof title, 'string', 'events.DOMTitleChange: title should be type string');
        self.state.title = title;
        if (self._hasWindow) 
            document.title = title;
    });
}

Choo.prototype.route = function (route, handler) {
    assert.equal(typeof route, 'string', 'choo.route: route should be type string');
    assert.equal(typeof handler, 'function', 'choo.handler: route should be type function');
    var self = this;
    this.router.on(route, function (params) {
        return function () {
            self.state.params = params;
            self.state.route = route;
            var routeTiming = nanotiming("choo.route('" + route + "')");
            var res = handler(self.state, function (eventName, data) {
                self.emitter.emit(eventName, data);
            });
            routeTiming();
            return res;
        };
    });
};
Choo.prototype.use = function (cb) {
    assert.equal(typeof cb, 'function', 'choo.use: cb should be type function');
    var msg = 'choo.use';
    msg = cb.storeName ? msg + '(' + cb.storeName + ')' : msg;
    var endTiming = nanotiming(msg);
    cb(this.state, this.emitter, this);
    endTiming();
};
Choo.prototype.start = function () {
    assert.equal(typeof window, 'object', 'choo.start: window was not found. .start() must be called in a browser, use .toString() if running in Node');
    var self = this;
    if (this._historyEnabled) {
        this.emitter.prependListener(this._events.NAVIGATE, function () {
            self.state.query = nanoquery(window.location.search);
            if (self._loaded) {
                self.emitter.emit(self._events.RENDER);
                setTimeout(scrollToAnchor.bind(null, window.location.hash), 0);
            }
        });
        this.emitter.prependListener(this._events.POPSTATE, function () {
            self.emitter.emit(self._events.NAVIGATE);
        });
        this.emitter.prependListener(this._events.PUSHSTATE, function (href) {
            assert.equal(typeof href, 'string', 'events.pushState: href should be type string');
            window.history.pushState(HISTORY_OBJECT, null, href);
            self.emitter.emit(self._events.NAVIGATE);
        });
        this.emitter.prependListener(this._events.REPLACESTATE, function (href) {
            assert.equal(typeof href, 'string', 'events.replaceState: href should be type string');
            window.history.replaceState(HISTORY_OBJECT, null, href);
            self.emitter.emit(self._events.NAVIGATE);
        });
        window.onpopstate = function () {
            self.emitter.emit(self._events.POPSTATE);
        };
        if (self._hrefEnabled) {
            nanohref(function (location) {
                var href = location.href;
                var currHref = window.location.href;
                if (href === currHref) 
                    return;
                self.emitter.emit(self._events.PUSHSTATE, href);
            });
        }
    }
    this.state.href = this._createLocation();
    this.state.query = nanoquery(window.location.search);
    this._tree = this.router(this.state.href);
    assert.ok(this._tree, 'choo.start: no valid DOM node returned for location ' + this.state.href);
    this.emitter.prependListener(self._events.RENDER, nanoraf(function () {
        var renderTiming = nanotiming('choo.render');
        self.state.href = self._createLocation();
        var newTree = self.router(self.state.href);
        assert.ok(newTree, 'choo.render: no valid DOM node returned for location ' + self.state.href);
        assert.equal(self._tree.nodeName, newTree.nodeName, 'choo.render: The target node <' + self._tree.nodeName.toLowerCase() + '> is not the same type as the new node <' + newTree.nodeName.toLowerCase() + '>.');
        var morphTiming = nanotiming('choo.morph');
        nanomorph(self._tree, newTree);
        morphTiming();
        renderTiming();
    }));
    documentReady(function () {
        self.emitter.emit(self._events.DOMCONTENTLOADED);
        self._loaded = true;
    });
    return this._tree;
};
Choo.prototype.mount = function mount(selector) {
    assert.equal(typeof window, 'object', 'choo.mount: window was not found. .mount() must be called in a browser, use .toString() if running in Node');
    assert.ok(typeof selector === 'string' || typeof selector === 'object', 'choo.mount: selector should be type String or HTMLElement');
    var self = this;
    documentReady(function () {
        var renderTiming = nanotiming('choo.render');
        var newTree = self.start();
        if (typeof selector === 'string') {
            self._tree = document.querySelector(selector);
        } else {
            self._tree = selector;
        }
        assert.ok(self._tree, 'choo.mount: could not query selector: ' + selector);
        assert.equal(self._tree.nodeName, newTree.nodeName, 'choo.mount: The target node <' + self._tree.nodeName.toLowerCase() + '> is not the same type as the new node <' + newTree.nodeName.toLowerCase() + '>.');
        var morphTiming = nanotiming('choo.morph');
        nanomorph(self._tree, newTree);
        morphTiming();
        renderTiming();
    });
};
Choo.prototype.toString = function (location, state) {
    this.state = xtend(this.state, state || {});
    assert.notEqual(typeof window, 'object', 'choo.mount: window was found. .toString() must be called in Node, use .start() or .mount() if running in the browser');
    assert.equal(typeof location, 'string', 'choo.toString: location should be type string');
    assert.equal(typeof this.state, 'object', 'choo.toString: state should be type object');
    this.state.href = location.replace(/\?.+$/, '');
    this.state.query = nanoquery(location);
    var html = this.router(location);
    assert.ok(html, 'choo.toString: no valid value returned for the route ' + location);
    return html.toString();
};


}).call(this,require('_process'))
},{"_process":108,"assert":104,"document-ready":8,"nanobus":13,"nanohref":14,"nanolocation":15,"nanomorph":16,"nanoquery":19,"nanoraf":20,"nanorouter":21,"nanotiming":22,"scroll-to-anchor":26,"xtend":30}],8:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
'use strict';
var assert = require('assert');
module.exports = ready;
function ready(callback) {
    assert.notEqual(typeof document, 'undefined', 'document-ready only runs in the browser');
    var state = document.readyState;
    if (state === 'complete' || state === 'interactive') {
        return setTimeout(callback, 0);
    }
    document.addEventListener('DOMContentLoaded', function onLoad() {
        callback();
    });
}


}).call(this,require('_process'))
},{"_process":108,"assert":104}],9:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
module.exports = attributeToProperty;
var transform = {
    'class': 'className',
    'for': 'htmlFor',
    'http-equiv': 'httpEquiv'
};
function attributeToProperty(h) {
    return function (tagName, attrs, children) {
        for (var attr in attrs) {
            if (attr in transform) {
                attrs[transform[attr]] = attrs[attr];
                delete attrs[attr];
            }
        }
        return h(tagName, attrs, children);
    };
}


}).call(this,require('_process'))
},{"_process":108}],10:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
var attrToProp = require('hyperscript-attribute-to-property');
var VAR = 0, TEXT = 1, OPEN = 2, CLOSE = 3, ATTR = 4;
var ATTR_KEY = 5, ATTR_KEY_W = 6;
var ATTR_VALUE_W = 7, ATTR_VALUE = 8;
var ATTR_VALUE_SQ = 9, ATTR_VALUE_DQ = 10;
var ATTR_EQ = 11, ATTR_BREAK = 12;
var COMMENT = 13;
module.exports = function (h, opts) {
    if (!opts) 
        opts = {};
    var concat = opts.concat || function (a, b) {
        return String(a) + String(b);
    };
    if (opts.attrToProp !== false) {
        h = attrToProp(h);
    }
    return function (strings) {
        var state = TEXT, reg = '';
        var arglen = arguments.length;
        var parts = [];
        for (var i = 0;i < strings.length; i++) {
            if (i < arglen - 1) {
                var arg = arguments[i + 1];
                var p = parse(strings[i]);
                var xstate = state;
                if (xstate === ATTR_VALUE_DQ) 
                    xstate = ATTR_VALUE;
                if (xstate === ATTR_VALUE_SQ) 
                    xstate = ATTR_VALUE;
                if (xstate === ATTR_VALUE_W) 
                    xstate = ATTR_VALUE;
                if (xstate === ATTR) 
                    xstate = ATTR_KEY;
                p.push([VAR,xstate,arg]);
                parts.push.apply(parts, p);
            } else 
                parts.push.apply(parts, parse(strings[i]));
        }
        var tree = [null,{},[]];
        var stack = [[tree,-1]];
        for (var i = 0;i < parts.length; i++) {
            var cur = stack[stack.length - 1][0];
            var p = parts[i], s = p[0];
            if (s === OPEN && /^\//.test(p[1])) {
                var ix = stack[stack.length - 1][1];
                if (stack.length > 1) {
                    stack.pop();
                    stack[stack.length - 1][0][2][ix] = h(cur[0], cur[1], cur[2].length ? cur[2] : undefined);
                }
            } else if (s === OPEN) {
                var c = [p[1],{},[]];
                cur[2].push(c);
                stack.push([c,cur[2].length - 1]);
            } else if (s === ATTR_KEY || s === VAR && p[1] === ATTR_KEY) {
                var key = '';
                var copyKey;
                for (; i < parts.length; i++) {
                    if (parts[i][0] === ATTR_KEY) {
                        key = concat(key, parts[i][1]);
                    } else if (parts[i][0] === VAR && parts[i][1] === ATTR_KEY) {
                        if (typeof parts[i][2] === 'object' && !key) {
                            for (copyKey in parts[i][2]) {
                                if (parts[i][2].hasOwnProperty(copyKey) && !cur[1][copyKey]) {
                                    cur[1][copyKey] = parts[i][2][copyKey];
                                }
                            }
                        } else {
                            key = concat(key, parts[i][2]);
                        }
                    } else 
                        break;
                }
                if (parts[i][0] === ATTR_EQ) 
                    i++;
                var j = i;
                for (; i < parts.length; i++) {
                    if (parts[i][0] === ATTR_VALUE || parts[i][0] === ATTR_KEY) {
                        if (!cur[1][key]) 
                            cur[1][key] = strfn(parts[i][1]);
                         else 
                            parts[i][1] === "" || (cur[1][key] = concat(cur[1][key], parts[i][1]));
                    } else if (parts[i][0] === VAR && (parts[i][1] === ATTR_VALUE || parts[i][1] === ATTR_KEY)) {
                        if (!cur[1][key]) 
                            cur[1][key] = strfn(parts[i][2]);
                         else 
                            parts[i][2] === "" || (cur[1][key] = concat(cur[1][key], parts[i][2]));
                    } else {
                        if (key.length && !cur[1][key] && i === j && (parts[i][0] === CLOSE || parts[i][0] === ATTR_BREAK)) {
                            // https://html.spec.whatwg.org/multipage/infrastructure.html#boolean-attributes
                            // empty string is falsy, not well behaved value in browser
                            cur[1][key] = key.toLowerCase();
                        }
                        if (parts[i][0] === CLOSE) {
                            i--;
                        }
                        break;
                    }
                }
            } else if (s === ATTR_KEY) {
                cur[1][p[1]] = true;
            } else if (s === VAR && p[1] === ATTR_KEY) {
                cur[1][p[2]] = true;
            } else if (s === CLOSE) {
                if (selfClosing(cur[0]) && stack.length) {
                    var ix = stack[stack.length - 1][1];
                    stack.pop();
                    stack[stack.length - 1][0][2][ix] = h(cur[0], cur[1], cur[2].length ? cur[2] : undefined);
                }
            } else if (s === VAR && p[1] === TEXT) {
                if (p[2] === undefined || p[2] === null) 
                    p[2] = '';
                 else if (!p[2]) 
                    p[2] = concat('', p[2]);
                if (Array.isArray(p[2][0])) {
                    cur[2].push.apply(cur[2], p[2]);
                } else {
                    cur[2].push(p[2]);
                }
            } else if (s === TEXT) {
                cur[2].push(p[1]);
            } else if (s === ATTR_EQ || s === ATTR_BREAK) {} else {
                // no-op
                throw new Error('unhandled: ' + s);
            }
        }
        if (tree[2].length > 1 && /^\s*$/.test(tree[2][0])) {
            tree[2].shift();
        }
        if (tree[2].length > 2 || tree[2].length === 2 && /\S/.test(tree[2][1])) {
            throw new Error('multiple root elements must be wrapped in an enclosing tag');
        }
        if (Array.isArray(tree[2][0]) && typeof tree[2][0][0] === 'string' && Array.isArray(tree[2][0][2])) {
            tree[2][0] = h(tree[2][0][0], tree[2][0][1], tree[2][0][2]);
        }
        return tree[2][0];
        function parse(str) {
            var res = [];
            if (state === ATTR_VALUE_W) 
                state = ATTR;
            for (var i = 0;i < str.length; i++) {
                var c = str.charAt(i);
                if (state === TEXT && c === '<') {
                    if (reg.length) 
                        res.push([TEXT,reg]);
                    reg = '';
                    state = OPEN;
                } else if (c === '>' && !quot(state) && state !== COMMENT) {
                    if (state === OPEN) {
                        res.push([OPEN,reg]);
                    } else if (state === ATTR_KEY) {
                        res.push([ATTR_KEY,reg]);
                    } else if (state === ATTR_VALUE && reg.length) {
                        res.push([ATTR_VALUE,reg]);
                    }
                    res.push([CLOSE]);
                    reg = '';
                    state = TEXT;
                } else if (state === COMMENT && /-$/.test(reg) && c === '-') {
                    if (opts.comments) {
                        res.push([ATTR_VALUE,reg.substr(0, reg.length - 1)], [CLOSE]);
                    }
                    reg = '';
                    state = TEXT;
                } else if (state === OPEN && /^!--$/.test(reg)) {
                    if (opts.comments) {
                        res.push([OPEN,reg], [ATTR_KEY,'comment'], [ATTR_EQ]);
                    }
                    reg = c;
                    state = COMMENT;
                } else if (state === TEXT || state === COMMENT) {
                    reg += c;
                } else if (state === OPEN && /\s/.test(c)) {
                    res.push([OPEN,reg]);
                    reg = '';
                    state = ATTR;
                } else if (state === OPEN) {
                    reg += c;
                } else if (state === ATTR && /[^\s"'=/]/.test(c)) {
                    state = ATTR_KEY;
                    reg = c;
                } else if (state === ATTR && /\s/.test(c)) {
                    if (reg.length) 
                        res.push([ATTR_KEY,reg]);
                    res.push([ATTR_BREAK]);
                } else if (state === ATTR_KEY && /\s/.test(c)) {
                    res.push([ATTR_KEY,reg]);
                    reg = '';
                    state = ATTR_KEY_W;
                } else if (state === ATTR_KEY && c === '=') {
                    res.push([ATTR_KEY,reg], [ATTR_EQ]);
                    reg = '';
                    state = ATTR_VALUE_W;
                } else if (state === ATTR_KEY) {
                    reg += c;
                } else if ((state === ATTR_KEY_W || state === ATTR) && c === '=') {
                    res.push([ATTR_EQ]);
                    state = ATTR_VALUE_W;
                } else if ((state === ATTR_KEY_W || state === ATTR) && !/\s/.test(c)) {
                    res.push([ATTR_BREAK]);
                    if (/[\w-]/.test(c)) {
                        reg += c;
                        state = ATTR_KEY;
                    } else 
                        state = ATTR;
                } else if (state === ATTR_VALUE_W && c === '"') {
                    state = ATTR_VALUE_DQ;
                } else if (state === ATTR_VALUE_W && c === "'") {
                    state = ATTR_VALUE_SQ;
                } else if (state === ATTR_VALUE_DQ && c === '"') {
                    res.push([ATTR_VALUE,reg], [ATTR_BREAK]);
                    reg = '';
                    state = ATTR;
                } else if (state === ATTR_VALUE_SQ && c === "'") {
                    res.push([ATTR_VALUE,reg], [ATTR_BREAK]);
                    reg = '';
                    state = ATTR;
                } else if (state === ATTR_VALUE_W && !/\s/.test(c)) {
                    state = ATTR_VALUE;
                    i--;
                } else if (state === ATTR_VALUE && /\s/.test(c)) {
                    res.push([ATTR_VALUE,reg], [ATTR_BREAK]);
                    reg = '';
                    state = ATTR;
                } else if (state === ATTR_VALUE || state === ATTR_VALUE_SQ || state === ATTR_VALUE_DQ) {
                    reg += c;
                }
            }
            if (state === TEXT && reg.length) {
                res.push([TEXT,reg]);
                reg = '';
            } else if (state === ATTR_VALUE && reg.length) {
                res.push([ATTR_VALUE,reg]);
                reg = '';
            } else if (state === ATTR_VALUE_DQ && reg.length) {
                res.push([ATTR_VALUE,reg]);
                reg = '';
            } else if (state === ATTR_VALUE_SQ && reg.length) {
                res.push([ATTR_VALUE,reg]);
                reg = '';
            } else if (state === ATTR_KEY) {
                res.push([ATTR_KEY,reg]);
                reg = '';
            }
            return res;
        }
        
    };
    function strfn(x) {
        if (typeof x === 'function') 
            return x;
         else if (typeof x === 'string') 
            return x;
         else if (x && typeof x === 'object') 
            return x;
         else 
            return concat('', x);
    }
    
};
function quot(state) {
    return state === ATTR_VALUE_SQ || state === ATTR_VALUE_DQ;
}

var hasOwn = Object.prototype.hasOwnProperty;
function has(obj, key) {
    return hasOwn.call(obj, key);
}

var closeRE = RegExp('^(' + ['area','base','basefont','bgsound','br','col','command',
    'embed','frame','hr','img','input','isindex','keygen','link','meta','param','source',
// SVG TAGS
    'track','wbr','!--','animate','animateTransform','circle','cursor','desc','ellipse',
    'feBlend','feColorMatrix','feComposite','feConvolveMatrix','feDiffuseLighting',
    'feDisplacementMap','feDistantLight','feFlood','feFuncA','feFuncB','feFuncG',
    'feFuncR','feGaussianBlur','feImage','feMergeNode','feMorphology','feOffset',
    'fePointLight','feSpecularLighting','feSpotLight','feTile','feTurbulence','font-face-format',
    'font-face-name','font-face-uri','glyph','glyphRef','hkern','image','line','missing-glyph',
    'mpath','path','polygon','polyline','rect','set','stop','tref','use','view','vkern'].join('|') + ')(?:[\.#][a-zA-Z0-9\u007F-\uFFFF_:-]+)*$');
function selfClosing(tag) {
    return closeRE.test(tag);
}


}).call(this,require('_process'))
},{"_process":108,"hyperscript-attribute-to-property":9}],11:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
var containers = []; //  will store container HTMLElement references
var styleElements = []; //  will store {prepend: HTMLElement, append: HTMLElement}
var usage = 'insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).';
function insertCss(css, options) {
    options = options || {};
    if (css === undefined) {
        throw new Error(usage);
    }
    var position = options.prepend === true ? 'prepend' : 'append';
    var container = options.container !== undefined ? options.container : document.querySelector('head');
    var containerId = containers.indexOf(container);
    // first time we see this container, create the necessary entries
    if (containerId === -1) {
        containerId = containers.push(container) - 1;
        styleElements[containerId] = {};
    }
    // try to get the correponding container + position styleElement, create it otherwise
    var styleElement;
    if (styleElements[containerId] !== undefined && styleElements[containerId][position] !== undefined) {
        styleElement = styleElements[containerId][position];
    } else {
        styleElement = (styleElements[containerId][position] = createStyleElement());
        if (position === 'prepend') {
            container.insertBefore(styleElement, container.childNodes[0]);
        } else {
            container.appendChild(styleElement);
        }
    }
    // strip potential UTF-8 BOM if css was read from a file
    if (css.charCodeAt(0) === 0xFEFF) {
        css = css.substr(1, css.length);
    }
    // actually add the stylesheet
    if (styleElement.styleSheet) {
        styleElement.styleSheet.cssText += css;
    } else {
        styleElement.textContent += css;
    }
    return styleElement;
}

;
function createStyleElement() {
    var styleElement = document.createElement('style');
    styleElement.setAttribute('type', 'text/css');
    return styleElement;
}

module.exports = insertCss;
module.exports.insertCss = insertCss;


}).call(this,require('_process'))
},{"_process":108}],12:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
assert.notEqual = notEqual;
assert.notOk = notOk;
assert.equal = equal;
assert.ok = assert;
module.exports = assert;
function equal(a, b, m) {
    assert(a == b, m); //  eslint-disable-line eqeqeq
}

function notEqual(a, b, m) {
    assert(a != b, m); //  eslint-disable-line eqeqeq
}

function notOk(t, m) {
    assert(!t, m);
}

function assert(t, m) {
    if (!t) 
        throw new Error(m || 'AssertionError');
}


}).call(this,require('_process'))
},{"_process":108}],13:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
var splice = require('remove-array-items');
var nanotiming = require('nanotiming');
var assert = require('assert');
module.exports = Nanobus;
function Nanobus(name) {
    if (!(this instanceof Nanobus)) 
        return new Nanobus(name);
    this._name = name || 'nanobus';
    this._starListeners = [];
    this._listeners = {};
}

Nanobus.prototype.emit = function (eventName) {
    assert.equal(typeof eventName, 'string', 'nanobus.emit: eventName should be type string');
    var data = [];
    for (var i = 1, len = arguments.length;i < len; i++) {
        data.push(arguments[i]);
    }
    var emitTiming = nanotiming(this._name + "('" + eventName + "')");
    var listeners = this._listeners[eventName];
    if (listeners && listeners.length > 0) {
        this._emit(this._listeners[eventName], data);
    }
    if (this._starListeners.length > 0) {
        this._emit(this._starListeners, eventName, data, emitTiming.uuid);
    }
    emitTiming();
    return this;
};
Nanobus.prototype.on = (Nanobus.prototype.addListener = function (eventName, listener) {
    assert.equal(typeof eventName, 'string', 'nanobus.on: eventName should be type string');
    assert.equal(typeof listener, 'function', 'nanobus.on: listener should be type function');
    if (eventName === '*') {
        this._starListeners.push(listener);
    } else {
        if (!this._listeners[eventName]) 
            this._listeners[eventName] = [];
        this._listeners[eventName].push(listener);
    }
    return this;
});
Nanobus.prototype.prependListener = function (eventName, listener) {
    assert.equal(typeof eventName, 'string', 'nanobus.prependListener: eventName should be type string');
    assert.equal(typeof listener, 'function', 'nanobus.prependListener: listener should be type function');
    if (eventName === '*') {
        this._starListeners.unshift(listener);
    } else {
        if (!this._listeners[eventName]) 
            this._listeners[eventName] = [];
        this._listeners[eventName].unshift(listener);
    }
    return this;
};
Nanobus.prototype.once = function (eventName, listener) {
    assert.equal(typeof eventName, 'string', 'nanobus.once: eventName should be type string');
    assert.equal(typeof listener, 'function', 'nanobus.once: listener should be type function');
    var self = this;
    this.on(eventName, once);
    function once() {
        listener.apply(self, arguments);
        self.removeListener(eventName, once);
    }
    
    return this;
};
Nanobus.prototype.prependOnceListener = function (eventName, listener) {
    assert.equal(typeof eventName, 'string', 'nanobus.prependOnceListener: eventName should be type string');
    assert.equal(typeof listener, 'function', 'nanobus.prependOnceListener: listener should be type function');
    var self = this;
    this.prependListener(eventName, once);
    function once() {
        listener.apply(self, arguments);
        self.removeListener(eventName, once);
    }
    
    return this;
};
Nanobus.prototype.removeListener = function (eventName, listener) {
    assert.equal(typeof eventName, 'string', 'nanobus.removeListener: eventName should be type string');
    assert.equal(typeof listener, 'function', 'nanobus.removeListener: listener should be type function');
    if (eventName === '*') {
        this._starListeners = this._starListeners.slice();
        return remove(this._starListeners, listener);
    } else {
        if (typeof this._listeners[eventName] !== 'undefined') {
            this._listeners[eventName] = this._listeners[eventName].slice();
        }
        return remove(this._listeners[eventName], listener);
    }
    function remove(arr, listener) {
        if (!arr) 
            return;
        var index = arr.indexOf(listener);
        if (index !== -1) {
            splice(arr, index, 1);
            return true;
        }
    }
    
};
Nanobus.prototype.removeAllListeners = function (eventName) {
    if (eventName) {
        if (eventName === '*') {
            this._starListeners = [];
        } else {
            this._listeners[eventName] = [];
        }
    } else {
        this._starListeners = [];
        this._listeners = {};
    }
    return this;
};
Nanobus.prototype.listeners = function (eventName) {
    var listeners = eventName !== '*' ? this._listeners[eventName] : this._starListeners;
    var ret = [];
    if (listeners) {
        var ilength = listeners.length;
        for (var i = 0;i < ilength; i++) 
            ret.push(listeners[i]);
    }
    return ret;
};
Nanobus.prototype._emit = function (arr, eventName, data, uuid) {
    if (typeof arr === 'undefined') 
        return;
    if (arr.length === 0) 
        return;
    if (data === undefined) {
        data = eventName;
        eventName = null;
    }
    if (eventName) {
        if (uuid !== undefined) {
            data = [eventName,uuid].concat(data);
        } else {
            data = [eventName].concat(data);
        }
    }
    var length = arr.length;
    for (var i = 0;i < length; i++) {
        var listener = arr[i];
        listener.apply(listener, data);
    }
};


}).call(this,require('_process'))
},{"_process":108,"assert":104,"nanotiming":22,"remove-array-items":25}],14:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
var assert = require('assert');
var safeExternalLink = /(noopener|noreferrer) (noopener|noreferrer)/;
var protocolLink = /^[\w-_]+:/;
module.exports = href;
function href(cb, root) {
    assert.notEqual(typeof window, 'undefined', 'nanohref: expected window to exist');
    root = root || window.document;
    assert.equal(typeof cb, 'function', 'nanohref: cb should be type function');
    assert.equal(typeof root, 'object', 'nanohref: root should be type object');
    window.addEventListener('click', function (e) {
        if (e.button && e.button !== 0 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.defaultPrevented) 
            return;
        var anchor = (function traverse(node) {
            if (!node || node === root) 
                return;
            if (node.localName !== 'a' || node.href === undefined) {
                return traverse(node.parentNode);
            }
            return node;
        })(e.target);
        if (!anchor) 
            return;
        if (window.location.origin !== anchor.origin || anchor.hasAttribute('download') || anchor.getAttribute('target') === '_blank' && safeExternalLink.test(anchor.getAttribute('rel')) || protocolLink.test(anchor.getAttribute('href'))) 
            return;
        e.preventDefault();
        cb(anchor);
    });
}


}).call(this,require('_process'))
},{"_process":108,"assert":104}],15:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
var assert = require('assert');
module.exports = nanolocation;
function nanolocation() {
    assert.notEqual(typeof window, 'undefined', 'nanolocation: expected window to exist');
    var pathname = window.location.pathname.replace(/\/$/, '');
    var hash = window.location.hash.replace(/^#/, '/');
    return pathname + hash;
}


}).call(this,require('_process'))
},{"_process":108,"assert":104}],16:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
var assert = require('assert');
var morph = require('./lib/morph');
var TEXT_NODE = 3;
// var DEBUG = false
module.exports = nanomorph;
// Morph one tree into another tree
//
// no parent
//   -> same: diff and walk children
//   -> not same: replace and return
// old node doesn't exist
//   -> insert new node
// new node doesn't exist
//   -> delete old node
// nodes are not the same
//   -> diff nodes and apply patch to old node
// nodes are the same
//   -> walk all child nodes and append to old node
function nanomorph(oldTree, newTree) {
    // if (DEBUG) {
    //   console.log(
    //   'nanomorph\nold\n  %s\nnew\n  %s',
    //   oldTree && oldTree.outerHTML,
    //   newTree && newTree.outerHTML
    // )
    // }
    assert.equal(typeof oldTree, 'object', 'nanomorph: oldTree should be an object');
    assert.equal(typeof newTree, 'object', 'nanomorph: newTree should be an object');
    var tree = walk(newTree, oldTree);
    // if (DEBUG) console.log('=> morphed\n  %s', tree.outerHTML)
    return tree;
}

// Walk and morph a dom tree
function walk(newNode, oldNode) {
    // if (DEBUG) {
    //   console.log(
    //   'walk\nold\n  %s\nnew\n  %s',
    //   oldNode && oldNode.outerHTML,
    //   newNode && newNode.outerHTML
    // )
    // }
    if (!oldNode) {
        return newNode;
    } else if (!newNode) {
        return null;
    } else if (newNode.isSameNode && newNode.isSameNode(oldNode)) {
        return oldNode;
    } else if (newNode.tagName !== oldNode.tagName) {
        return newNode;
    } else {
        morph(newNode, oldNode);
        updateChildren(newNode, oldNode);
        return oldNode;
    }
}

// Update the children of elements
// (obj, obj) -> null
function updateChildren(newNode, oldNode) {
    // if (DEBUG) {
    //   console.log(
    //   'updateChildren\nold\n  %s\nnew\n  %s',
    //   oldNode && oldNode.outerHTML,
    //   newNode && newNode.outerHTML
    // )
    // }
    var oldChild, newChild, morphed, oldMatch;
    // The offset is only ever increased, and used for [i - offset] in the loop
    var offset = 0;
    for (var i = 0;; i++) {
        oldChild = oldNode.childNodes[i];
        newChild = newNode.childNodes[i - offset];
        // if (DEBUG) {
        //   console.log(
        //   '===\n- old\n  %s\n- new\n  %s',
        //   oldChild && oldChild.outerHTML,
        //   newChild && newChild.outerHTML
        // )
        // }
        // Both nodes are empty, do nothing
        if (!oldChild && !newChild) {
            break;
        // There is no new child, remove old
        } else if (!newChild) {
            oldNode.removeChild(oldChild);
            i--;
        // There is no old child, add new
        } else if (!oldChild) {
            oldNode.appendChild(newChild);
            offset++;
        // Both nodes are the same, morph
        } else if (same(newChild, oldChild)) {
            morphed = walk(newChild, oldChild);
            if (morphed !== oldChild) {
                oldNode.replaceChild(morphed, oldChild);
                offset++;
            }
        } else {
            // Both nodes do not share an ID or a placeholder, try reorder
            oldMatch = null;
            // Try and find a similar node somewhere in the tree
            for (var j = i;j < oldNode.childNodes.length; j++) {
                if (same(oldNode.childNodes[j], newChild)) {
                    oldMatch = oldNode.childNodes[j];
                    break;
                }
            }
            // If there was a node with the same ID or placeholder in the old list
            if (oldMatch) {
                morphed = walk(newChild, oldMatch);
                if (morphed !== oldMatch) 
                    offset++;
                oldNode.insertBefore(morphed, oldChild);
            // It's safe to morph two nodes in-place if neither has an ID
            } else if (!newChild.id && !oldChild.id) {
                morphed = walk(newChild, oldChild);
                if (morphed !== oldChild) {
                    oldNode.replaceChild(morphed, oldChild);
                    offset++;
                }
            } else {
                // Insert the node at the index if we couldn't morph or find a matching node
                oldNode.insertBefore(newChild, oldChild);
                offset++;
            }
        }
    }
}

function same(a, b) {
    if (a.id) 
        return a.id === b.id;
    if (a.isSameNode) 
        return a.isSameNode(b);
    if (a.tagName !== b.tagName) 
        return false;
    if (a.type === TEXT_NODE) 
        return a.nodeValue === b.nodeValue;
    return false;
}


}).call(this,require('_process'))
},{"./lib/morph":18,"_process":108,"assert":12}],17:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
// attribute events (can be set with attributes)
module.exports = ['onclick','ondblclick','onmousedown','onmouseup','onmouseover',
    'onmousemove','onmouseout','onmouseenter','onmouseleave','ontouchcancel','ontouchend',
    'ontouchmove','ontouchstart','ondragstart','ondrag','ondragenter','ondragleave',
    'ondragover','ondrop','ondragend','onkeydown','onkeypress','onkeyup','onunload',
    'onabort','onerror','onresize','onscroll','onselect','onchange','onsubmit','onreset',
// other common events
    'onfocus','onblur','oninput','oncontextmenu','onfocusin','onfocusout'];


}).call(this,require('_process'))
},{"_process":108}],18:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
var events = require('./events');
var eventsLength = events.length;
var ELEMENT_NODE = 1;
var TEXT_NODE = 3;
var COMMENT_NODE = 8;
module.exports = morph;
// diff elements and apply the resulting patch to the old node
// (obj, obj) -> null
function morph(newNode, oldNode) {
    var nodeType = newNode.nodeType;
    var nodeName = newNode.nodeName;
    if (nodeType === ELEMENT_NODE) {
        copyAttrs(newNode, oldNode);
    }
    if (nodeType === TEXT_NODE || nodeType === COMMENT_NODE) {
        if (oldNode.nodeValue !== newNode.nodeValue) {
            oldNode.nodeValue = newNode.nodeValue;
        }
    }
    // Some DOM nodes are weird
    // https://github.com/patrick-steele-idem/morphdom/blob/master/src/specialElHandlers.js
    if (nodeName === 'INPUT') 
        updateInput(newNode, oldNode);
     else if (nodeName === 'OPTION') 
        updateOption(newNode, oldNode);
     else if (nodeName === 'TEXTAREA') 
        updateTextarea(newNode, oldNode);
    copyEvents(newNode, oldNode);
}

function copyAttrs(newNode, oldNode) {
    var oldAttrs = oldNode.attributes;
    var newAttrs = newNode.attributes;
    var attrNamespaceURI = null;
    var attrValue = null;
    var fromValue = null;
    var attrName = null;
    var attr = null;
    for (var i = newAttrs.length - 1;i >= 0; --i) {
        attr = newAttrs[i];
        attrName = attr.name;
        attrNamespaceURI = attr.namespaceURI;
        attrValue = attr.value;
        if (attrNamespaceURI) {
            attrName = attr.localName || attrName;
            fromValue = oldNode.getAttributeNS(attrNamespaceURI, attrName);
            if (fromValue !== attrValue) {
                oldNode.setAttributeNS(attrNamespaceURI, attrName, attrValue);
            }
        } else {
            if (!oldNode.hasAttribute(attrName)) {
                oldNode.setAttribute(attrName, attrValue);
            } else {
                fromValue = oldNode.getAttribute(attrName);
                if (fromValue !== attrValue) {
                    // apparently values are always cast to strings, ah well
                    if (attrValue === 'null' || attrValue === 'undefined') {
                        oldNode.removeAttribute(attrName);
                    } else {
                        oldNode.setAttribute(attrName, attrValue);
                    }
                }
            }
        }
    }
    // Remove any extra attributes found on the original DOM element that
    // weren't found on the target element.
    for (var j = oldAttrs.length - 1;j >= 0; --j) {
        attr = oldAttrs[j];
        if (attr.specified !== false) {
            attrName = attr.name;
            attrNamespaceURI = attr.namespaceURI;
            if (attrNamespaceURI) {
                attrName = attr.localName || attrName;
                if (!newNode.hasAttributeNS(attrNamespaceURI, attrName)) {
                    oldNode.removeAttributeNS(attrNamespaceURI, attrName);
                }
            } else {
                if (!newNode.hasAttributeNS(null, attrName)) {
                    oldNode.removeAttribute(attrName);
                }
            }
        }
    }
}

function copyEvents(newNode, oldNode) {
    for (var i = 0;i < eventsLength; i++) {
        var ev = events[i];
        if (newNode[ev]) { //  if new element has a whitelisted attribute
            oldNode[ev] = newNode[ev]; //  update existing element
        } else if (oldNode[ev]) { //  if existing element has it and new one doesnt
            oldNode[ev] = undefined; //  remove it from existing element
        }
    }
}

function updateOption(newNode, oldNode) {
    updateAttribute(newNode, oldNode, 'selected');
}

// The "value" attribute is special for the <input> element since it sets the
// initial value. Changing the "value" attribute without changing the "value"
// property will have no effect since it is only used to the set the initial
// value. Similar for the "checked" attribute, and "disabled".
function updateInput(newNode, oldNode) {
    var newValue = newNode.value;
    var oldValue = oldNode.value;
    updateAttribute(newNode, oldNode, 'checked');
    updateAttribute(newNode, oldNode, 'disabled');
    if (newValue !== oldValue) {
        oldNode.setAttribute('value', newValue);
        oldNode.value = newValue;
    }
    if (newValue === 'null') {
        oldNode.value = '';
        oldNode.removeAttribute('value');
    }
    if (!newNode.hasAttributeNS(null, 'value')) {
        oldNode.removeAttribute('value');
    } else if (oldNode.type === 'range') {
        // this is so elements like slider move their UI thingy
        oldNode.value = newValue;
    }
}

function updateTextarea(newNode, oldNode) {
    var newValue = newNode.value;
    if (newValue !== oldNode.value) {
        oldNode.value = newValue;
    }
    if (oldNode.firstChild && oldNode.firstChild.nodeValue !== newValue) {
        // Needed for IE. Apparently IE sets the placeholder as the
        // node value and vise versa. This ignores an empty update.
        if (newValue === '' && oldNode.firstChild.nodeValue === oldNode.placeholder) {
            return;
        }
        oldNode.firstChild.nodeValue = newValue;
    }
}

function updateAttribute(newNode, oldNode, name) {
    if (newNode[name] !== oldNode[name]) {
        oldNode[name] = newNode[name];
        if (newNode[name]) {
            oldNode.setAttribute(name, '');
        } else {
            oldNode.removeAttribute(name);
        }
    }
}


}).call(this,require('_process'))
},{"./events":17,"_process":108}],19:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
var reg = /([^?=&]+)(=([^&]*))?/g;
var assert = require('assert');
module.exports = qs;
function qs(url) {
    assert.equal(typeof url, 'string', 'nanoquery: url should be type string');
    var obj = {};
    url.replace(/^.*\?/, '').replace(reg, function (a0, a1, a2, a3) {
        obj[decodeURIComponent(a1)] = decodeURIComponent(a3);
    });
    return obj;
}


}).call(this,require('_process'))
},{"_process":108,"assert":12}],20:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
'use strict';
var assert = require('assert');
module.exports = nanoraf;
// Only call RAF when needed
// (fn, fn?) -> fn
function nanoraf(render, raf) {
    assert.equal(typeof render, 'function', 'nanoraf: render should be a function');
    assert.ok(typeof raf === 'function' || typeof raf === 'undefined', 'nanoraf: raf should be a function or undefined');
    if (!raf) 
        raf = window.requestAnimationFrame;
    var redrawScheduled = false;
    var args = null;
    return function frame() {
        if (args === null && !redrawScheduled) {
            redrawScheduled = true;
            raf(function redraw() {
                redrawScheduled = false;
                var length = args.length;
                var _args = new Array(length);
                for (var i = 0;i < length; i++) 
                    _args[i] = args[i];
                render.apply(render, _args);
                args = null;
            });
        }
        args = arguments;
    };
}


}).call(this,require('_process'))
},{"_process":108,"assert":104}],21:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
var wayfarer = require('wayfarer');
var isLocalFile = /file:\/\//.test(typeof window === 'object' && window.location && window.location.origin); //  electron support
/* eslint-disable no-useless-escape */
var electron = '^(file:\/\/|\/)(.*\.html?\/?)?';
var protocol = '^(http(s)?(:\/\/))?(www\.)?';
var domain = '[a-zA-Z0-9-_\.]+(:[0-9]{1,5})?(\/{1})?';
var qs = '[\?].*$';
/* eslint-enable no-useless-escape */
var stripElectron = new RegExp(electron);
var prefix = new RegExp(protocol + domain);
var normalize = new RegExp('#');
var suffix = new RegExp(qs);
module.exports = Nanorouter;
function Nanorouter(opts) {
    opts = opts || {};
    var router = wayfarer(opts.default || '/404');
    var curry = opts.curry || false;
    var prevCallback = null;
    var prevRoute = null;
    emit.router = router;
    emit.on = on;
    return emit;
    function on(routename, listener) {
        routename = routename.replace(/^[#/]/, '');
        router.on(routename, listener);
    }
    
    function emit(route) {
        if (!curry) {
            return router(route);
        } else {
            route = pathname(route, isLocalFile);
            if (route === prevRoute) {
                return prevCallback();
            } else {
                prevRoute = route;
                prevCallback = router(route);
                return prevCallback();
            }
        }
    }
    
}

// replace everything in a route but the pathname and hash
function pathname(route, isElectron) {
    if (isElectron) 
        route = route.replace(stripElectron, '');
     else 
        route = route.replace(prefix, '');
    return route.replace(suffix, '').replace(normalize, '/');
}


}).call(this,require('_process'))
},{"_process":108,"wayfarer":28}],22:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
var assert = require('assert');
var onIdle = require('./lib/on-idle');
var perf;
var disabled = true;
try {
    perf = window.performance;
    disabled = window.localStorage.DISABLE_NANOTIMING === 'true' || !perf.mark;
} catch (e) {}
module.exports = nanotiming;
function nanotiming(name) {
    assert.equal(typeof name, 'string', 'nanotiming: name should be type string');
    if (disabled) 
        return noop;
    var uuid = (perf.now() * 10000).toFixed() % Number.MAX_SAFE_INTEGER;
    var startName = 'start-' + uuid + '-' + name;
    perf.mark(startName);
    function end(cb) {
        var endName = 'end-' + uuid + '-' + name;
        perf.mark(endName);
        onIdle(function () {
            var measureName = name + ' [' + uuid + ']';
            perf.measure(measureName, startName, endName);
            perf.clearMarks(startName);
            perf.clearMarks(endName);
            if (cb) 
                cb(name);
        });
    }
    
    end.uuid = uuid;
    return end;
}

function noop(cb) {
    if (cb) 
        onIdle(cb);
}


}).call(this,require('_process'))
},{"./lib/on-idle":23,"_process":108,"assert":104}],23:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
var assert = require('assert');
var dftOpts = {};
var hasWindow = typeof window !== 'undefined';
var hasIdle = hasWindow && window.requestIdleCallback;
module.exports = onIdle;
function onIdle(cb, opts) {
    opts = opts || dftOpts;
    var timerId;
    assert.equal(typeof cb, 'function', 'on-idle: cb should be type function');
    assert.equal(typeof opts, 'object', 'on-idle: opts should be type object');
    if (hasIdle) {
        timerId = window.requestIdleCallback(function (idleDeadline) {
            // reschedule if there's less than 10ms remaining on the tick
            // and a timer did not expire
            if (idleDeadline.timeRemaining() <= 10 && !idleDeadline.didTimeout) {
                return onIdle(cb, opts);
            } else {
                cb(idleDeadline);
            }
        }, opts);
        return window.cancelIdleCallback.bind(window, timerId);
    } else if (hasWindow) {
        timerId = setTimeout(cb, 0);
        return clearTimeout.bind(window, timerId);
    }
}


}).call(this,require('_process'))
},{"_process":108,"assert":104}],24:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
'use strict';
module.exports = function (obj) {
    var keys = Object.keys(obj);
    var ret = [];
    for (var i = 0;i < keys.length; i++) {
        ret.push(obj[keys[i]]);
    }
    return ret;
};


}).call(this,require('_process'))
},{"_process":108}],25:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
'use strict';
/**
 * Remove a range of items from an array
 *
 * @function removeItems
 * @param {Array<*>} arr The target array
 * @param {number} startIdx The index to begin removing from (inclusive)
 * @param {number} removeCount How many items to remove
 */
module.exports = function removeItems(arr, startIdx, removeCount) {
    var i, length = arr.length;
    if (startIdx >= length || removeCount === 0) {
        return;
    }
    removeCount = startIdx + removeCount > length ? length - startIdx : removeCount;
    var len = length - removeCount;
    for (i = startIdx; i < len; ++i) {
        arr[i] = arr[i + removeCount];
    }
    arr.length = len;
};


}).call(this,require('_process'))
},{"_process":108}],26:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
module.exports = scrollToAnchor;
function scrollToAnchor(anchor, options) {
    if (anchor) {
        try {
            var el = document.querySelector(anchor);
            if (el) 
                el.scrollIntoView(options);
        } catch (e) {}
    }
}


}).call(this,require('_process'))
},{"_process":108}],27:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
module.exports = require('insert-css');


}).call(this,require('_process'))
},{"_process":108,"insert-css":11}],28:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
var assert = require('assert');
var trie = require('./trie');
module.exports = Wayfarer;
// create a router
// str -> obj
function Wayfarer(dft) {
    if (!(this instanceof Wayfarer)) 
        return new Wayfarer(dft);
    var _default = (dft || '').replace(/^\//, '');
    var _trie = trie();
    emit._trie = _trie;
    emit.emit = emit;
    emit.on = on;
    emit._wayfarer = true;
    return emit;
    // define a route
    // (str, fn) -> obj
    function on(route, cb) {
        assert.equal(typeof route, 'string');
        assert.equal(typeof cb, 'function');
        route = route || '/';
        cb.route = route;
        if (cb && cb._wayfarer && cb._trie) {
            _trie.mount(route, cb._trie.trie);
        } else {
            var node = _trie.create(route);
            node.cb = cb;
        }
        return emit;
    }
    
    // match and call a route
    // (str, obj?) -> null
    function emit(route) {
        assert.notEqual(route, undefined, "'route' must be defined");
        var args = new Array(arguments.length);
        for (var i = 1;i < args.length; i++) {
            args[i] = arguments[i];
        }
        var node = _trie.match(route);
        if (node && node.cb) {
            args[0] = node.params;
            var cb = node.cb;
            return cb.apply(cb, args);
        }
        var dft = _trie.match(_default);
        if (dft && dft.cb) {
            args[0] = dft.params;
            var dftcb = dft.cb;
            return dftcb.apply(dftcb, args);
        }
        throw new Error("route '" + route + "' did not match");
    }
    
}


}).call(this,require('_process'))
},{"./trie":29,"_process":108,"assert":104}],29:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
var mutate = require('xtend/mutable');
var assert = require('assert');
var xtend = require('xtend');
module.exports = Trie;
// create a new trie
// null -> obj
function Trie() {
    if (!(this instanceof Trie)) 
        return new Trie();
    this.trie = {
        nodes: {}
    };
}

// create a node on the trie at route
// and return a node
// str -> null
Trie.prototype.create = function (route) {
    assert.equal(typeof route, 'string', 'route should be a string');
    // strip leading '/' and split routes
    var routes = route.replace(/^\//, '').split('/');
    function createNode(index, trie) {
        var thisRoute = routes.hasOwnProperty(index) && routes[index];
        if (thisRoute === false) 
            return trie;
        var node = null;
        if (/^:|^\*/.test(thisRoute)) {
            // if node is a name match, set name and append to ':' node
            if (!trie.nodes.hasOwnProperty('$$')) {
                node = {
                    nodes: {}
                };
                trie.nodes['$$'] = node;
            } else {
                node = trie.nodes['$$'];
            }
            if (thisRoute[0] === '*') {
                trie.wildcard = true;
            }
            trie.name = thisRoute.replace(/^:|^\*/, '');
        } else if (!trie.nodes.hasOwnProperty(thisRoute)) {
            node = {
                nodes: {}
            };
            trie.nodes[thisRoute] = node;
        } else {
            node = trie.nodes[thisRoute];
        }
        // we must recurse deeper
        return createNode(index + 1, node);
    }
    
    return createNode(0, this.trie);
};
// match a route on the trie
// and return the node
// str -> obj
Trie.prototype.match = function (route) {
    assert.equal(typeof route, 'string', 'route should be a string');
    var routes = route.replace(/^\//, '').split('/');
    var params = {};
    function search(index, trie) {
        // either there's no match, or we're done searching
        if (trie === undefined) 
            return undefined;
        var thisRoute = routes[index];
        if (thisRoute === undefined) 
            return trie;
        if (trie.nodes.hasOwnProperty(thisRoute)) {
            // match regular routes first
            return search(index + 1, trie.nodes[thisRoute]);
        } else if (trie.name) {
            try {
                // match named routes
                params[trie.name] = decodeURIComponent(thisRoute);
            } catch (e) {
                return search(index, undefined);
            }
            return search(index + 1, trie.nodes['$$']);
        } else if (trie.wildcard) {
            try {
                // match wildcards
                params['wildcard'] = decodeURIComponent(routes.slice(index).join('/'));
            } catch (e) {
                return search(index, undefined);
            }
            // return early, or else search may keep recursing through the wildcard
            return trie.nodes['$$'];
        } else {
            // no matches found
            return search(index + 1);
        }
    }
    
    var node = search(0, this.trie);
    if (!node) 
        return undefined;
    node = xtend(node);
    node.params = params;
    return node;
};
// mount a trie onto a node at route
// (str, obj) -> null
Trie.prototype.mount = function (route, trie) {
    assert.equal(typeof route, 'string', 'route should be a string');
    assert.equal(typeof trie, 'object', 'trie should be a object');
    var split = route.replace(/^\//, '').split('/');
    var node = null;
    var key = null;
    if (split.length === 1) {
        key = split[0];
        node = this.create(key);
    } else {
        var headArr = split.splice(0, split.length - 1);
        var head = headArr.join('/');
        key = split[0];
        node = this.create(head);
    }
    mutate(node.nodes, trie.nodes);
    if (trie.name) 
        node.name = trie.name;
    // delegate properties from '/' to the new node
    // '/' cannot be reached once mounted
    if (node.nodes['']) {
        Object.keys(node.nodes['']).forEach(function (key) {
            if (key === 'nodes') 
                return;
            node[key] = node.nodes[''][key];
        });
        mutate(node.nodes, node.nodes[''].nodes);
        delete node.nodes[''].nodes;
    }
};


}).call(this,require('_process'))
},{"_process":108,"assert":104,"xtend":30,"xtend/mutable":31}],30:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
module.exports = extend;
var hasOwnProperty = Object.prototype.hasOwnProperty;
function extend() {
    var target = {};
    for (var i = 0;i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
}


}).call(this,require('_process'))
},{"_process":108}],31:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
module.exports = extend;
var hasOwnProperty = Object.prototype.hasOwnProperty;
function extend(target) {
    for (var i = 1;i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
}


}).call(this,require('_process'))
},{"_process":108}],32:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
module.exports = plugin;
function plugin(state, emitter) {
    emitter.on(state.events.PUSHSTATE, function () {
        window.scrollTo(0, 0);
    });
}


}).call(this,require('_process'))
},{"_process":108}],33:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
var objectValues = require('object-values');
var html = require('choo/html');
var hypha = require('hypha');
var xtend = require('xtend');
var view = require('../views/main');
module.exports = store;
function store(state, emitter, app) {
    return (function ($return, $error) {
        var archive, options, files, content;
        function getFiles() {
            return (function ($return, $error) {
                var files;
                return archive.readdir('/content', {
                    recursive: true
                }).then((function ($await_2) {
                    files = $await_2;
                    files = files.map(function (file) { //  funny hack
                        return '/content/' + file;
                    });
                    return $return(files);
                }).$asyncbind(this, $error), $error);
            }).$asyncbind(this, true);
        }
        
        state.content = {};
        state.visited = [];
        state.p2p = typeof DatArchive !== 'undefined';
        state.loaded = false;
        state.online = true;
        archive = new DatArchive(window.location.toString());
        options = {
            fs: archive,
            parent: '/content'
        };
        function $Try_1_Post() {
            state.loaded = true;
            emitter.emit(state.events.RENDER);
            if (typeof callback === 'function') 
                callback(content);
            return $return(content);
        }
        
        var $Try_1_Catch = (function (err) {
            console.log(err);
            return $Try_1_Post.call(this);
        }).$asyncbind(this, $error);
        try {
            return getFiles().then((function ($await_3) {
                files = $await_3;
                return hypha.readFiles(files, '/content', options).then((function ($await_4) {
                    content = $await_4;
                    objectValues(content).forEach(function (page) {
                        state.content[page.url] = page;
                    });
                    return $Try_1_Post.call(this);
                }).$asyncbind(this, $Try_1_Catch), $Try_1_Catch);
            }).$asyncbind(this, $Try_1_Catch), $Try_1_Catch);
        } catch (err) {
            $Try_1_Catch(err)
        }
    }).$asyncbind(this, true);
}


}).call(this,require('_process'))
},{"../views/main":36,"_process":108,"choo/html":6,"hypha":39,"object-values":24,"xtend":30}],34:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
var objectValues = require('object-values');
var html = require('choo/html');
module.exports = view;
function view(state, emit) {
    var page = state.page;
    var info = state.content['/information'];
    var interviews = objectValues(state.content['/interviews'].pages).map(function (page) {
        return state.content[page.url];
    });
    var performances = objectValues(state.content['/performances'].pages).map(function (page) {
        return state.content[page.url];
    });
    return html`
    <div class="usn ttu">
      <div class="psr">
        <div class="x xw p0-5">
          ${shuffle(renderPageImages(interviews)).splice(0, 12)}
        </div>
        <div class="x xjc xac psa t0 l0 r0 b0">
          <div class="p2 psa t0 l0">
            ${Math.floor(new Date() / 1000)}
          </div>
          <div class="p2 psa t0 r0">
            <a href="/information" class="fc-white tdn">${info.title}</a>
          </div>
          <div class="p2 fs4 ha psr z2 tac">
            ${shuffle(interviews).map(function (page, i) {
        return [i === 0 ? html`<span class="curd">${state.page.heading}</span>` : '',
            html`<div class="circle"></div>`,html`<a href="${page.url}" class="curp fc-white tdn">${page.title}</a>`];
    })}
          </div>
        </div>
      </div>
      <div>
        ${shuffle(performances).map(function (page, i) {
        var images = objectValues(page.files).filter((file) => file.type === 'image');
        var image = images[Math.floor(Math.random() * images.length)];
        if (!image) 
            return;
        return html`
            <a
              href="${page.url}"
              class="db psr curp fc-white tdn bgsc bgrn bgpc fs4"
              style="background-image: url(${image.path})"
            >
              <div class="psa t0 l0 r0 b0 x xjc xac tac">
                ${page.artist} @ ${page.venue}
              </div>
              <div style="padding-bottom: 56.25%"></div>
            </a>
          `;
    })}
      </div>
    </div>
  `;
}

function renderPageImages(pages) {
    return pages.reduce(function (result, page, i) {
        if (!page.files) 
            return;
        var images = objectValues(page.files).filter((file) => file.type === 'image');
        result.push(randomImage(images, page));
        result.push(randomImage(images, page));
        result.push(randomImage(images, page));
        return result;
    }, []);
}

function randomImage(images, page) {
    var image = images[Math.floor(Math.random() * images.length)];
    return html`
    <div class="c4 p0-5">
      <a
        href="${page.url}"
        class="bgc-white db curp bgsc bgrn bgpc w100"
        style="background-image: url(${image.path})"
      ><div style="padding-bottom: 100%"></div></a>
    </div>
  `;
}

function shuffle(array) {
    let counter = array.length;
    while (counter > 0) {
        let index = Math.floor(Math.random() * counter);
        counter--;
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
}


}).call(this,require('_process'))
},{"_process":108,"choo/html":6,"object-values":24}],35:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
module.exports = {
    default: require('./main'),
    home: require('./home'),
    performance: require('./performance')
};


}).call(this,require('_process'))
},{"./home":34,"./main":36,"./performance":37,"_process":108}],36:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
var ov = require('object-values');
var html = require('choo/html');
var video = require('../components/video');
module.exports = view;
function view(state, emit) {
    var page = state.page;
    return html`
    <div>
      <div class="p1 ttu">${page.title || page.name}</div>
      ${ov(page.pages).map(function (page) {
        page = state.content[page.url];
        return html`<a href="${page.url}">${page.name}</a>`;
    })}
      ${ov(page.files).map(function (file, i) {
        return html`<div><img src="${file.path}" class="db"></div>`;
    })}
      <div>
        ${page.text}
      </div>
      ${video(page.source, {
        ratio: page.ratio
    })}
      <ol class="p1 ttu">
        ${ov(page.files).map(function (file, i) {
        return html`<li class="x">  
            <div class="c2">${('0' + i).slice(-2)}</div>
            <div class="c10">${file.filename}</div>
          </li>`;
    })}
      </ol>
    </div>
  `;
}


}).call(this,require('_process'))
},{"../components/video":1,"_process":108,"choo/html":6,"object-values":24}],37:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
var ov = require('object-values');
var html = require('choo/html');
var video = require('../components/video');
module.exports = view;
function view(state, emit) {
    var page = state.page;
    return html`
    <div class="w100 ttu">
      <div class="x p0-5">
        <div class="c6 p0-5">${page.artist}</div>
        <div class="c6 p0-5">${page.venue}</div>
      </div>
      ${page.sources.map(function (source) {
        return video(source);
    })}
      <div class="x c12 p0-5">
        <div class="c3 p0-5">
          Setlist
        </div>
        <ol class="c9 py0-5">
          ${ov(page.setlist).map(function (song, i) {
        return html`<li class="x c12">  
              <div class="c4 px0-5">${('0' + i).slice(-2)}</div>
              <div class="c8 px0-5">${song}</div>
            </li>`;
    })}
        </ol>
      </div>
      ${ov(page.files).map(function (file) {
        return html`<div><img src="${file.path}" class="db"></div>`;
    })}
      <div>
        ${page.text}
      </div>
    </div>
  `;
}


}).call(this,require('_process'))
},{"../components/video":1,"_process":108,"choo/html":6,"object-values":24}],38:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
var html = require('choo/html');
var xtend = require('xtend');
var views = require('./');
module.exports = view;
function view(state, emit) {
    var href = state.href || '/';
    if (typeof state.content === 'undefined') 
        return notfound();
    var page = state.content[href];
    if (state.loaded && typeof page === 'undefined') 
        return notfound();
    if (!state.loaded && typeof page === 'undefined') 
        return loading();
    var view = views[page.view] || views.default;
    return body(view(xtend(state, {
        page: page
    }), emit));
}

function loading() {
    return body(html`
    <div class="x xjc xac">loading</div>
  `);
}

function notfound() {
    return body('not found');
}

function body(view) {
    return html`
    <body class="ff-sans bgc-black fc-white">
      ${view}
    </body>
  `;
}


}).call(this,require('_process'))
},{"./":35,"_process":108,"choo/html":6,"xtend":30}],39:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
var xtend = require('xtend');
var fs = require('fs');
var lib = require('./lib');
module.exports = {
    readFile: readFile,
    readFileSync: readFileSync,
    readFiles: readFiles,
    readFilesSync: readFilesSync,
    readPage: readPage,
    readPageSync: readPageSync,
    readSite: readSite,
    readSiteSync: readSiteSync
};
function readFile(pathFile, opts, callback) {
    opts = xtend({
        fs: fs
    }, opts);
    return lib.readFile(pathFile, opts, callback);
}

function readFileSync(pathFile, opts, callback) {
    opts = xtend({
        fs: fs
    }, opts);
    return lib.readFileSync(pathFile, opts);
}

function readFiles(files, pathSite, opts, callback) {
    opts = xtend({
        fs: fs
    }, opts);
    return lib.readFiles(files, pathSite, opts, callback);
}

function readFilesSync(pathFile, opts, callback) {
    opts = xtend({
        fs: fs
    }, opts);
    return lib.readFilesSync(pathFile, opts);
}

function readPage(pathPage, opts, callback) {
    opts = xtend({
        fs: fs
    }, opts);
    return lib.readPage(pathPage, opts, callback);
}

function readPageSync(pathPage, opts, callback) {
    opts = xtend({
        fs: fs
    }, opts);
    return lib.readPageSync(pathPage, opts);
}

function readSite(pathSite, opts, callback) {
    opts = xtend({
        fs: fs
    }, opts);
    return lib.readSite(pathSite, opts, callback);
}

function readSiteSync(pathSite, opts, callback) {
    opts = xtend(opts, {
        fs: fs
    });
    return lib.readSiteSync(pathSite, opts);
}


}).call(this,require('_process'))
},{"./lib":41,"_process":108,"fs":103,"xtend":101}],40:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
module.exports = {
    ignore: /(^[.#]|(?:__|~)$)/,
    encoding: 'utf8',
    file: 'index.txt',
    filetypes: {
        asset: ['.css','.js'],
        archive: ['.zip'],
        audio: ['.mp3','.wav','.aiff'],
        document: ['.pdf'],
        image: ['gif','.jpg','.jpeg','.png','.svg'],
        video: ['.mp4','.mov']
    }
};


}).call(this,require('_process'))
},{"_process":108}],41:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
module.exports = {
    readPage: require('./readPage'),
    readPageSync: require('./readPageSync'),
    readFile: require('./readFile'),
    readFiles: require('./readFiles'),
    readSite: require('./readSite'),
    readSiteSync: require('./readSiteSync')
};


}).call(this,require('_process'))
},{"./readFile":42,"./readFiles":44,"./readPage":46,"./readPageSync":47,"./readSite":48,"./readSiteSync":49,"_process":108}],42:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
var assert = require('assert');
var utilFile = require('../utils/file');
var readPage = require('./readPage');
module.exports = readFile;
function readFile(pathFile, opts) {
    return (function ($return, $error) {
        assert.equal(typeof pathFile, 'string', 'arg1: pathFile must be type string');
        assert.equal(typeof opts, 'object', 'arg2: opts must be type object');
        assert.equal(typeof opts.fs, 'object', 'arg2: opts.fs must be type object');
        if (!utilFile.isFile(pathFile)) {
            return $return(readPage(pathFile, opts));
        } else {
            return $return(false);
        }
        return $return();
    }).$asyncbind(this, true);
}


}).call(this,require('_process'))
},{"../utils/file":102,"./readPage":46,"_process":108,"assert":104}],43:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
var assert = require('assert');
var path = require('path');
var readPageSync = require('./readPageSync');
var utilFile = require('../utils/file');
module.exports = readFileSync;
function readFileSync(pathFile, opts) {
    assert.equal(typeof pathFile, 'string', 'arg1: pathFile must be type string');
    assert.equal(typeof opts, 'object', 'arg2: opts must be type object');
    assert.equal(typeof opts.fs, 'object', 'arg2: opts.fs must be type object');
    if (!utilFile.isFile(pathFile)) {
        return readPageSync(pathFile, opts);
    } else {
        return false;
    }
}


}).call(this,require('_process'))
},{"../utils/file":102,"./readPageSync":47,"_process":108,"assert":104,"path":107}],44:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
var assert = require('assert');
var path = require('path');
var readFile = require('./readFile');
module.exports = readFiles;
function readFiles(files, pathSite, opts) {
    return (function ($return, $error) {
        var output;
        function read(pathFile) {
            return (function ($return, $error) {
                var content;
                return readFile(pathFile, opts).then((function ($await_1) {
                    content = $await_1;
                    if (content) 
                        output[content.url] = content;
                    return $return(content);
                }).$asyncbind(this, $error), $error);
            }).$asyncbind(this, true);
        }
        
        assert.equal(typeof files, 'object', 'arg1: files must be type object');
        assert.equal(typeof opts, 'object', 'arg2: opts must be type object');
        assert.equal(typeof opts.fs, 'object', 'arg2: opts.fs must be type object');
        output = {
            '/': read(pathSite)
        };
        return Promise.all(files.map(read)).then((function ($await_2) {
            return $return(output);
        }).$asyncbind(this, $error), $error);
    }).$asyncbind(this, true);
}


}).call(this,require('_process'))
},{"./readFile":42,"_process":108,"assert":104,"path":107}],45:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
var assert = require('assert');
var readFileSync = require('./readFileSync');
module.exports = readFilesSync;
function readFilesSync(files, pathSite, opts) {
    assert.equal(typeof files, 'object', 'arg1: files must be type object');
    assert.equal(typeof opts, 'object', 'arg2: opts must be type object');
    assert.equal(typeof opts.fs, 'object', 'arg2: opts.fs must be type object');
    var output = {
        '/': readFileSync(pathSite, opts)
    };
    files.forEach(function (pathFile) {
        if (typeof opts.onFile === 'function') 
            opts.onFile(pathFile);
        var content = readFileSync(pathFile, opts);
        if (content) 
            output[content.url] = content;
    });
    return output;
}


}).call(this,require('_process'))
},{"./readFileSync":43,"_process":108,"assert":104}],46:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
var assert = require('assert');
var smarkt = require('smarkt');
var xtend = require('xtend');
var path = require('path');
var utilFile = require('../utils/file');
var defaults = require('./defaults');
module.exports = readPage;
function readPage(pathPage, opts) {
    return (function ($return, $error) {
        var fs, fileIndex, filetypes, pathRoot, pathUrl, encoding, content, childrenInput, children, files, pages;
        function getFile() {
            return (function ($return, $error) {
                function $Try_1_Post() {
                    return $return();
                }
                
                var $Try_1_Catch = (function (err) {
                    return $return('');
                }).$asyncbind(this, $error);
                try {
                    return fs.readFile(path.join(pathPage, fileIndex), encoding).then($return, $Try_1_Catch);
                } catch (err) {
                    $Try_1_Catch(err)
                }
            }).$asyncbind(this, true);
        }
        
        function getChildren() {
            return (function ($return, $error) {
                function $Try_2_Post() {
                    return $return();
                }
                
                var $Try_2_Catch = (function (err) {
                    return $return([]);
                }).$asyncbind(this, $error);
                try {
                    return fs.readdir(pathPage).then($return, $Try_2_Catch);
                } catch (err) {
                    $Try_2_Catch(err)
                }
            }).$asyncbind(this, true);
        }
        
        function getContent() {
            return (function ($return, $error) {
                var content;
                function $Try_3_Post() {
                    return $return();
                }
                
                var $Try_3_Catch = (function (err) {
                    return $return('');
                }).$asyncbind(this, $error);
                try {
                    return fs.readFile(path.join(pathPage, fileIndex), encoding).then((function ($await_6) {
                        content = $await_6;
                        content = smarkt.parse(content);
                        return $return(content);
                    }).$asyncbind(this, $Try_3_Catch), $Try_3_Catch);
                } catch (err) {
                    $Try_3_Catch(err)
                }
            }).$asyncbind(this, true);
        }
        
        function getFiles(files) {
            return files.reduce(function (result, pathFile) {
                var fileParsed = utilFile.getFileMeta({
                    pathFile: pathFile,
                    pathRoot: pathRoot,
                    filetypes: filetypes,
                    pathParent: pathPage,
                    pathSiteParent: opts.parent
                });
                if (fileParsed.filename) 
                    result[fileParsed.filename] = fileParsed;
                return result;
            }, {});
        }
        
        function getPages(pages) {
            return pages.reduce(function (result, pathSubpage) {
                var fileParsed = utilFile.getFileMeta({
                    pathRoot: pathRoot,
                    pathFile: pathSubpage,
                    filetypes: filetypes,
                    pathParent: pathPage,
                    pathSiteParent: opts.parent
                });
                if (fileParsed.name) 
                    result[fileParsed.name] = fileParsed;
                return result;
            }, {});
        }
        
        assert.equal(typeof pathPage, 'string', 'arg1: pathPage must be type string');
        assert.equal(typeof opts, 'object', 'arg2: opts must be type object');
        assert.equal(typeof opts.fs, 'object', 'arg2: opts.fs must be type object');
        fs = opts.fs;
        fileIndex = opts.file || defaults.file;
        filetypes = opts.filetypes || defaults.filetypes;
        pathRoot = opts.pathRoot || '';
        pathUrl = utilFile.formatUrl(pathPage, pathRoot, opts.parent);
        encoding = opts.encoding || defaults.encoding;
        return getContent().then((function ($await_7) {
            content = $await_7;
            return getChildren().then((function ($await_8) {
                childrenInput = $await_8;
                children = childrenInput.filter((file) => utilFile.filterFile(file, fileIndex)).reduce(utilFile.sortChildren, {
                    files: [],
                    pages: []
                });
                files = getFiles(children.files);
                pages = getPages(children.pages);
                return $return(xtend(content, {
                    name: path.basename(pathPage),
                    url: pathUrl,
                    files: files,
                    pages: pages
                }));
            }).$asyncbind(this, $error), $error);
        }).$asyncbind(this, $error), $error);
    }).$asyncbind(this, true);
}


}).call(this,require('_process'))
},{"../utils/file":102,"./defaults":40,"_process":108,"assert":104,"path":107,"smarkt":96,"xtend":101}],47:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
var assert = require('assert');
var smarkt = require('smarkt');
var xtend = require('xtend');
var path = require('path');
var utilFile = require('../utils/file');
var defaults = require('./defaults');
module.exports = readPageSync;
function readPageSync(pathPage, opts) {
    assert.equal(typeof pathPage, 'string', 'arg1: pathPage must be type string');
    assert.equal(typeof opts, 'object', 'arg2: opts must be type object');
    assert.equal(typeof opts.fs, 'object', 'arg2: opts.fs must be type object');
    var fs = opts.fs;
    var fileIndex = opts.file || defaults.file;
    var filetypes = opts.filetypes || defaults.filetypes;
    var pathRoot = opts.pathRoot || '';
    var pathUrl = utilFile.formatUrl(pathPage, pathRoot, opts.parent);
    var encoding = opts.encoding || defaults.encoding;
    var content = getContent();
    var children = getChildren().filter((file) => utilFile.filterFile(file, fileIndex)).reduce(utilFile.sortChildren, {
        files: [],
        pages: []
    });
    var files = getFiles(children.files);
    var pages = getPages(children.pages);
    return xtend(content, {
        name: path.basename(pathPage),
        url: pathUrl,
        files: files,
        pages: pages
    });
    function getFile() {
        try {
            return fs.readFileSync(path.join(pathPage, fileIndex), encoding);
        } catch (err) {
            return '';
        }
    }
    
    function getChildren() {
        try {
            return fs.readdirSync(pathPage);
        } catch (err) {
            return [];
        }
    }
    
    function getContent() {
        try {
            var content;
            content = fs.readFileSync(path.join(pathPage, fileIndex), encoding);
            content = smarkt.parse(content);
            return content;
        } catch (err) {
            return '';
        }
    }
    
    function getFiles(files) {
        return files.reduce(function (result, pathFile) {
            var fileParsed = utilFile.getFileMeta({
                pathFile: pathFile,
                pathRoot: pathRoot,
                filetypes: filetypes,
                pathParent: pathPage,
                pathSiteParent: opts.parent
            });
            if (fileParsed.filename) 
                result[fileParsed.filename] = fileParsed;
            return result;
        }, {});
    }
    
    function getPages(pages) {
        return pages.reduce(function (result, pathSubpage) {
            var fileParsed = utilFile.getFileMeta({
                pathRoot: pathRoot,
                pathFile: pathSubpage,
                filetypes: filetypes,
                pathParent: pathPage,
                pathSiteParent: opts.parent
            });
            if (fileParsed.name) 
                result[fileParsed.name] = fileParsed;
            return result;
        }, {});
    }
    
}


}).call(this,require('_process'))
},{"../utils/file":102,"./defaults":40,"_process":108,"assert":104,"path":107,"smarkt":96,"xtend":101}],48:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
var assert = require('assert');
var path = require('path');
var glob = require('glob');
var readFiles = require('./readFiles');
var readFile = require('./readFile');
module.exports = readSite;
function readSite(pathSite, opts) {
    return (function ($return, $error) {
        var files;
        assert.equal(typeof pathSite, 'string', 'arg1: pathSite must be type string');
        assert.equal(typeof opts, 'object', 'arg2: opts must be type object');
        assert.equal(typeof opts.fs, 'object', 'arg2: opts.fs must be type object');
        return glob(path.join(pathSite, '/**/*')).then((function ($await_1) {
            files = $await_1;
            return $return(readFiles(files, pathSite, opts));
        }).$asyncbind(this, $error), $error);
    }).$asyncbind(this, true);
}


}).call(this,require('_process'))
},{"./readFile":42,"./readFiles":44,"_process":108,"assert":104,"glob":56,"path":107}],49:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
var assert = require('assert');
var path = require('path');
var glob = require('glob');
var readFilesSync = require('./readFilesSync');
module.exports = readSiteSync;
function readSiteSync(pathSite, opts) {
    assert.equal(typeof pathSite, 'string', 'arg1: pathSite must be type string');
    assert.equal(typeof opts, 'object', 'arg2: opts must be type object');
    assert.equal(typeof opts.fs, 'object', 'arg2: opts.fs must be type object');
    var files = glob.sync(path.join(pathSite, '/**/*'));
    return readFilesSync(files, pathSite, opts);
}


}).call(this,require('_process'))
},{"./readFilesSync":45,"_process":108,"assert":104,"glob":56,"path":107}],50:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
'use strict';
module.exports = balanced;
function balanced(a, b, str) {
    if (a instanceof RegExp) 
        a = maybeMatch(a, str);
    if (b instanceof RegExp) 
        b = maybeMatch(b, str);
    var r = range(a, b, str);
    return r && {
        start: r[0],
        end: r[1],
        pre: str.slice(0, r[0]),
        body: str.slice(r[0] + a.length, r[1]),
        post: str.slice(r[1] + b.length)
    };
}

function maybeMatch(reg, str) {
    var m = str.match(reg);
    return m ? m[0] : null;
}

balanced.range = range;
function range(a, b, str) {
    var begs, beg, left, right, result;
    var ai = str.indexOf(a);
    var bi = str.indexOf(b, ai + 1);
    var i = ai;
    if (ai >= 0 && bi > 0) {
        begs = [];
        left = str.length;
        while (i >= 0 && !result) {
            if (i == ai) {
                begs.push(i);
                ai = str.indexOf(a, i + 1);
            } else if (begs.length == 1) {
                result = [begs.pop(),bi];
            } else {
                beg = begs.pop();
                if (beg < left) {
                    left = beg;
                    right = bi;
                }
                bi = str.indexOf(b, i + 1);
            }
            i = ai < bi && ai >= 0 ? ai : bi;
        }
        if (begs.length) {
            result = [left,right];
        }
    }
    return result;
}


}).call(this,require('_process'))
},{"_process":108}],51:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
var concatMap = require('concat-map');
var balanced = require('balanced-match');
module.exports = expandTop;
var escSlash = '\0SLASH' + Math.random() + '\0';
var escOpen = '\0OPEN' + Math.random() + '\0';
var escClose = '\0CLOSE' + Math.random() + '\0';
var escComma = '\0COMMA' + Math.random() + '\0';
var escPeriod = '\0PERIOD' + Math.random() + '\0';
function numeric(str) {
    return parseInt(str, 10) == str ? parseInt(str, 10) : str.charCodeAt(0);
}

function escapeBraces(str) {
    return str.split('\\\\').join(escSlash).split('\\{').join(escOpen).split('\\}').join(escClose).split('\\,').join(escComma).split('\\.').join(escPeriod);
}

function unescapeBraces(str) {
    return str.split(escSlash).join('\\').split(escOpen).join('{').split(escClose).join('}').split(escComma).join(',').split(escPeriod).join('.');
}

// Basically just str.split(","), but handling cases
// where we have nested braced sections, which should be
// treated as individual members, like {a,{b,c},d}
function parseCommaParts(str) {
    if (!str) 
        return [''];
    var parts = [];
    var m = balanced('{', '}', str);
    if (!m) 
        return str.split(',');
    var pre = m.pre;
    var body = m.body;
    var post = m.post;
    var p = pre.split(',');
    p[p.length - 1] += '{' + body + '}';
    var postParts = parseCommaParts(post);
    if (post.length) {
        p[p.length - 1] += postParts.shift();
        p.push.apply(p, postParts);
    }
    parts.push.apply(parts, p);
    return parts;
}

function expandTop(str) {
    if (!str) 
        return [];
    // I don't know why Bash 4.3 does this, but it does.
    // Anything starting with {} will have the first two bytes preserved
    // but *only* at the top level, so {},a}b will not expand to anything,
    // but a{},b}c will be expanded to [a}c,abc].
    // One could argue that this is a bug in Bash, but since the goal of
    // this module is to match Bash's rules, we escape a leading {}
    if (str.substr(0, 2) === '{}') {
        str = '\\{\\}' + str.substr(2);
    }
    return expand(escapeBraces(str), true).map(unescapeBraces);
}

function identity(e) {
    return e;
}

function embrace(str) {
    return '{' + str + '}';
}

function isPadded(el) {
    return /^-?0\d/.test(el);
}

function lte(i, y) {
    return i <= y;
}

function gte(i, y) {
    return i >= y;
}

function expand(str, isTop) {
    var expansions = [];
    var m = balanced('{', '}', str);
    if (!m || /\$$/.test(m.pre)) 
        return [str];
    var isNumericSequence = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(m.body);
    var isAlphaSequence = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(m.body);
    var isSequence = isNumericSequence || isAlphaSequence;
    var isOptions = m.body.indexOf(',') >= 0;
    if (!isSequence && !isOptions) {
        // {a},b}
        if (m.post.match(/,.*\}/)) {
            str = m.pre + '{' + m.body + escClose + m.post;
            return expand(str);
        }
        return [str];
    }
    var n;
    if (isSequence) {
        n = m.body.split(/\.\./);
    } else {
        n = parseCommaParts(m.body);
        if (n.length === 1) {
            // x{{a,b}}y ==> x{a}y x{b}y
            n = expand(n[0], false).map(embrace);
            if (n.length === 1) {
                var post = m.post.length ? expand(m.post, false) : [''];
                return post.map(function (p) {
                    return m.pre + n[0] + p;
                });
            }
        }
    }
    // at this point, n is the parts, and we know it's not a comma set
    // with a single entry.
    // no need to expand pre, since it is guaranteed to be free of brace-sets
    var pre = m.pre;
    var post = m.post.length ? expand(m.post, false) : [''];
    var N;
    if (isSequence) {
        var x = numeric(n[0]);
        var y = numeric(n[1]);
        var width = Math.max(n[0].length, n[1].length);
        var incr = n.length == 3 ? Math.abs(numeric(n[2])) : 1;
        var test = lte;
        var reverse = y < x;
        if (reverse) {
            incr *= -1;
            test = gte;
        }
        var pad = n.some(isPadded);
        N = [];
        for (var i = x;test(i, y); i += incr) {
            var c;
            if (isAlphaSequence) {
                c = String.fromCharCode(i);
                if (c === '\\') 
                    c = '';
            } else {
                c = String(i);
                if (pad) {
                    var need = width - c.length;
                    if (need > 0) {
                        var z = new Array(need + 1).join('0');
                        if (i < 0) 
                            c = '-' + z + c.slice(1);
                         else 
                            c = z + c;
                    }
                }
            }
            N.push(c);
        }
    } else {
        N = concatMap(n, function (el) {
            return expand(el, false);
        });
    }
    for (var j = 0;j < N.length; j++) {
        for (var k = 0;k < post.length; k++) {
            var expansion = pre + N[j] + post[k];
            if (!isTop || isSequence || expansion) 
                expansions.push(expansion);
        }
    }
    return expansions;
}


}).call(this,require('_process'))
},{"_process":108,"balanced-match":50,"concat-map":52}],52:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
module.exports = function (xs, fn) {
    var res = [];
    for (var i = 0;i < xs.length; i++) {
        var x = fn(xs[i], i);
        if (isArray(x)) 
            res.push.apply(res, x);
         else 
            res.push(x);
    }
    return res;
};
var isArray = Array.isArray || function (xs) {
    return Object.prototype.toString.call(xs) === '[object Array]';
};


}).call(this,require('_process'))
},{"_process":108}],53:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
module.exports = realpath;
realpath.realpath = realpath;
realpath.sync = realpathSync;
realpath.realpathSync = realpathSync;
realpath.monkeypatch = monkeypatch;
realpath.unmonkeypatch = unmonkeypatch;
var fs = require('fs');
var origRealpath = fs.realpath;
var origRealpathSync = fs.realpathSync;
var version = process.version;
var ok = /^v[0-5]\./.test(version);
var old = require('./old.js');
function newError(er) {
    return er && er.syscall === 'realpath' && (er.code === 'ELOOP' || er.code === 'ENOMEM' || er.code === 'ENAMETOOLONG');
}

function realpath(p, cache, cb) {
    if (ok) {
        return origRealpath(p, cache, cb);
    }
    if (typeof cache === 'function') {
        cb = cache;
        cache = null;
    }
    origRealpath(p, cache, function (er, result) {
        if (newError(er)) {
            old.realpath(p, cache, cb);
        } else {
            cb(er, result);
        }
    });
}

function realpathSync(p, cache) {
    if (ok) {
        return origRealpathSync(p, cache);
    }
    try {
        return origRealpathSync(p, cache);
    } catch (er) {
        if (newError(er)) {
            return old.realpathSync(p, cache);
        } else {
            throw er;
        }
    }
}

function monkeypatch() {
    fs.realpath = realpath;
    fs.realpathSync = realpathSync;
}

function unmonkeypatch() {
    fs.realpath = origRealpath;
    fs.realpathSync = origRealpathSync;
}


}).call(this,require('_process'))
},{"./old.js":54,"_process":108,"fs":103}],54:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var pathModule = require('path');
var isWindows = process.platform === 'win32';
var fs = require('fs');
// JavaScript implementation of realpath, ported from node pre-v6
var DEBUG = process.env.NODE_DEBUG && /fs/.test(process.env.NODE_DEBUG);
function rethrow() {
    // Only enable in debug mode. A backtrace uses ~1000 bytes of heap space and
    // is fairly slow to generate.
    var callback;
    if (DEBUG) {
        var backtrace = new Error();
        callback = debugCallback;
    } else 
        callback = missingCallback;
    return callback;
    function debugCallback(err) {
        if (err) {
            backtrace.message = err.message;
            err = backtrace;
            missingCallback(err);
        }
    }
    
    function missingCallback(err) {
        if (err) {
            if (process.throwDeprecation) 
                throw err; //  Forgot a callback but don't know where? Use NODE_DEBUG=fs
             else if (!process.noDeprecation) {
                var msg = 'fs: missing callback ' + (err.stack || err.message);
                if (process.traceDeprecation) 
                    console.trace(msg);
                 else 
                    console.error(msg);
            }
        }
    }
    
}

function maybeCallback(cb) {
    return typeof cb === 'function' ? cb : rethrow();
}

var normalize = pathModule.normalize;
// Regexp that finds the next partion of a (partial) path
// result is [base_with_slash, base], e.g. ['somedir/', 'somedir']
if (isWindows) {
    var nextPartRe = /(.*?)(?:[\/\\]+|$)/g;
} else {
    var nextPartRe = /(.*?)(?:[\/]+|$)/g;
}
// Regex to find the device root, including trailing slash. E.g. 'c:\\'.
if (isWindows) {
    var splitRootRe = /^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/][^\\\/]+)?[\\\/]*/;
} else {
    var splitRootRe = /^[\/]*/;
}
exports.realpathSync = function realpathSync(p, cache) {
    // make p is absolute
    p = pathModule.resolve(p);
    if (cache && Object.prototype.hasOwnProperty.call(cache, p)) {
        return cache[p];
    }
    var original = p, seenLinks = {}, knownHard = {};
    // current character position in p
    var pos;
    // the partial path so far, including a trailing slash if any
    var current;
    // the partial path without a trailing slash (except when pointing at a root)
    var base;
    // the partial path scanned in the previous round, with slash
    var previous;
    start();
    function start() {
        // Skip over roots
        var m = splitRootRe.exec(p);
        pos = m[0].length;
        current = m[0];
        base = m[0];
        previous = '';
        // On windows, check that the root exists. On unix there is no need.
        if (isWindows && !knownHard[base]) {
            fs.lstatSync(base);
            knownHard[base] = true;
        }
    }
    
    // walk down the path, swapping out linked pathparts for their real
    // values
    // NB: p.length changes.
    while (pos < p.length) {
        // find the next part
        nextPartRe.lastIndex = pos;
        var result = nextPartRe.exec(p);
        previous = current;
        current += result[0];
        base = previous + result[1];
        pos = nextPartRe.lastIndex;
        // continue if not a symlink
        if (knownHard[base] || cache && cache[base] === base) {
            continue;
        }
        var resolvedLink;
        if (cache && Object.prototype.hasOwnProperty.call(cache, base)) {
            // some known symbolic link.  no need to stat again.
            resolvedLink = cache[base];
        } else {
            var stat = fs.lstatSync(base);
            if (!stat.isSymbolicLink()) {
                knownHard[base] = true;
                if (cache) 
                    cache[base] = base;
                continue;
            }
            // read the link if it wasn't read before
            // dev/ino always return 0 on windows, so skip the check.
            var linkTarget = null;
            if (!isWindows) {
                var id = stat.dev.toString(32) + ':' + stat.ino.toString(32);
                if (seenLinks.hasOwnProperty(id)) {
                    linkTarget = seenLinks[id];
                }
            }
            if (linkTarget === null) {
                fs.statSync(base);
                linkTarget = fs.readlinkSync(base);
            }
            resolvedLink = pathModule.resolve(previous, linkTarget);
            // track this, if given a cache.
            if (cache) 
                cache[base] = resolvedLink;
            if (!isWindows) 
                seenLinks[id] = linkTarget;
        }
        // resolve the link, then start over
        p = pathModule.resolve(resolvedLink, p.slice(pos));
        start();
    }
    if (cache) 
        cache[original] = p;
    return p;
};
exports.realpath = function realpath(p, cache, cb) {
    if (typeof cb !== 'function') {
        cb = maybeCallback(cache);
        cache = null;
    }
    // make p is absolute
    p = pathModule.resolve(p);
    if (cache && Object.prototype.hasOwnProperty.call(cache, p)) {
        return process.nextTick(cb.bind(null, null, cache[p]));
    }
    var original = p, seenLinks = {}, knownHard = {};
    // current character position in p
    var pos;
    // the partial path so far, including a trailing slash if any
    var current;
    // the partial path without a trailing slash (except when pointing at a root)
    var base;
    // the partial path scanned in the previous round, with slash
    var previous;
    start();
    function start() {
        // Skip over roots
        var m = splitRootRe.exec(p);
        pos = m[0].length;
        current = m[0];
        base = m[0];
        previous = '';
        // On windows, check that the root exists. On unix there is no need.
        if (isWindows && !knownHard[base]) {
            fs.lstat(base, function (err) {
                if (err) 
                    return cb(err);
                knownHard[base] = true;
                LOOP();
            });
        } else {
            process.nextTick(LOOP);
        }
    }
    
    // walk down the path, swapping out linked pathparts for their real
    // values
    function LOOP() {
        // stop if scanned past end of path
        if (pos >= p.length) {
            if (cache) 
                cache[original] = p;
            return cb(null, p);
        }
        // find the next part
        nextPartRe.lastIndex = pos;
        var result = nextPartRe.exec(p);
        previous = current;
        current += result[0];
        base = previous + result[1];
        pos = nextPartRe.lastIndex;
        // continue if not a symlink
        if (knownHard[base] || cache && cache[base] === base) {
            return process.nextTick(LOOP);
        }
        if (cache && Object.prototype.hasOwnProperty.call(cache, base)) {
            // known symbolic link.  no need to stat again.
            return gotResolvedLink(cache[base]);
        }
        return fs.lstat(base, gotStat);
    }
    
    function gotStat(err, stat) {
        if (err) 
            return cb(err);
        // if not a symlink, skip to the next path part
        if (!stat.isSymbolicLink()) {
            knownHard[base] = true;
            if (cache) 
                cache[base] = base;
            return process.nextTick(LOOP);
        }
        // stat & read the link if not read before
        // call gotTarget as soon as the link target is known
        // dev/ino always return 0 on windows, so skip the check.
        if (!isWindows) {
            var id = stat.dev.toString(32) + ':' + stat.ino.toString(32);
            if (seenLinks.hasOwnProperty(id)) {
                return gotTarget(null, seenLinks[id], base);
            }
        }
        fs.stat(base, function (err) {
            if (err) 
                return cb(err);
            fs.readlink(base, function (err, target) {
                if (!isWindows) 
                    seenLinks[id] = target;
                gotTarget(err, target);
            });
        });
    }
    
    function gotTarget(err, target, base) {
        if (err) 
            return cb(err);
        var resolvedLink = pathModule.resolve(previous, target);
        if (cache) 
            cache[base] = resolvedLink;
        gotResolvedLink(resolvedLink);
    }
    
    function gotResolvedLink(resolvedLink) {
        // resolve the link, then start over
        p = pathModule.resolve(resolvedLink, p.slice(pos));
        start();
    }
    
};


}).call(this,require('_process'))
},{"_process":108,"fs":103,"path":107}],55:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
exports.alphasort = alphasort;
exports.alphasorti = alphasorti;
exports.setopts = setopts;
exports.ownProp = ownProp;
exports.makeAbs = makeAbs;
exports.finish = finish;
exports.mark = mark;
exports.isIgnored = isIgnored;
exports.childrenIgnored = childrenIgnored;
function ownProp(obj, field) {
    return Object.prototype.hasOwnProperty.call(obj, field);
}

var path = require("path");
var minimatch = require("minimatch");
var isAbsolute = require("path-is-absolute");
var Minimatch = minimatch.Minimatch;
function alphasorti(a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
}

function alphasort(a, b) {
    return a.localeCompare(b);
}

function setupIgnores(self, options) {
    self.ignore = options.ignore || [];
    if (!Array.isArray(self.ignore)) 
        self.ignore = [self.ignore];
    if (self.ignore.length) {
        self.ignore = self.ignore.map(ignoreMap);
    }
}

// ignore patterns are always in dot:true mode.
function ignoreMap(pattern) {
    var gmatcher = null;
    if (pattern.slice(-3) === '/**') {
        var gpattern = pattern.replace(/(\/\*\*)+$/, '');
        gmatcher = new Minimatch(gpattern, {
            dot: true
        });
    }
    return {
        matcher: new Minimatch(pattern, {
            dot: true
        }),
        gmatcher: gmatcher
    };
}

function setopts(self, pattern, options) {
    if (!options) 
        options = {};
    // base-matching: just use globstar for that.
    if (options.matchBase && -1 === pattern.indexOf("/")) {
        if (options.noglobstar) {
            throw new Error("base matching requires globstar");
        }
        pattern = "**/" + pattern;
    }
    self.silent = !(!options.silent);
    self.pattern = pattern;
    self.strict = options.strict !== false;
    self.realpath = !(!options.realpath);
    self.realpathCache = options.realpathCache || Object.create(null);
    self.follow = !(!options.follow);
    self.dot = !(!options.dot);
    self.mark = !(!options.mark);
    self.nodir = !(!options.nodir);
    if (self.nodir) 
        self.mark = true;
    self.sync = !(!options.sync);
    self.nounique = !(!options.nounique);
    self.nonull = !(!options.nonull);
    self.nosort = !(!options.nosort);
    self.nocase = !(!options.nocase);
    self.stat = !(!options.stat);
    self.noprocess = !(!options.noprocess);
    self.absolute = !(!options.absolute);
    self.maxLength = options.maxLength || Infinity;
    self.cache = options.cache || Object.create(null);
    self.statCache = options.statCache || Object.create(null);
    self.symlinks = options.symlinks || Object.create(null);
    setupIgnores(self, options);
    self.changedCwd = false;
    var cwd = process.cwd();
    if (!ownProp(options, "cwd")) 
        self.cwd = cwd;
     else {
        self.cwd = path.resolve(options.cwd);
        self.changedCwd = self.cwd !== cwd;
    }
    self.root = options.root || path.resolve(self.cwd, "/");
    self.root = path.resolve(self.root);
    if (process.platform === "win32") 
        self.root = self.root.replace(/\\/g, "/");
    // TODO: is an absolute `cwd` supposed to be resolved against `root`?
    // e.g. { cwd: '/test', root: __dirname } === path.join(__dirname, '/test')
    self.cwdAbs = isAbsolute(self.cwd) ? self.cwd : makeAbs(self, self.cwd);
    if (process.platform === "win32") 
        self.cwdAbs = self.cwdAbs.replace(/\\/g, "/");
    self.nomount = !(!options.nomount);
    // disable comments and negation in Minimatch.
    // Note that they are not supported in Glob itself anyway.
    options.nonegate = true;
    options.nocomment = true;
    self.minimatch = new Minimatch(pattern, options);
    self.options = self.minimatch.options;
}

function finish(self) {
    var nou = self.nounique;
    var all = nou ? [] : Object.create(null);
    for (var i = 0, l = self.matches.length;i < l; i++) {
        var matches = self.matches[i];
        if (!matches || Object.keys(matches).length === 0) {
            if (self.nonull) {
                // do like the shell, and spit out the literal glob
                var literal = self.minimatch.globSet[i];
                if (nou) 
                    all.push(literal);
                 else 
                    all[literal] = true;
            }
        } else {
            // had matches
            var m = Object.keys(matches);
            if (nou) 
                all.push.apply(all, m);
             else 
                m.forEach(function (m) {
                all[m] = true;
            });
        }
    }
    if (!nou) 
        all = Object.keys(all);
    if (!self.nosort) 
        all = all.sort(self.nocase ? alphasorti : alphasort);
    // at *some* point we statted all of these
    if (self.mark) {
        for (var i = 0;i < all.length; i++) {
            all[i] = self._mark(all[i]);
        }
        if (self.nodir) {
            all = all.filter(function (e) {
                var notDir = !/\/$/.test(e);
                var c = self.cache[e] || self.cache[makeAbs(self, e)];
                if (notDir && c) 
                    notDir = c !== 'DIR' && !Array.isArray(c);
                return notDir;
            });
        }
    }
    if (self.ignore.length) 
        all = all.filter(function (m) {
        return !isIgnored(self, m);
    });
    self.found = all;
}

function mark(self, p) {
    var abs = makeAbs(self, p);
    var c = self.cache[abs];
    var m = p;
    if (c) {
        var isDir = c === 'DIR' || Array.isArray(c);
        var slash = p.slice(-1) === '/';
        if (isDir && !slash) 
            m += '/';
         else if (!isDir && slash) 
            m = m.slice(0, -1);
        if (m !== p) {
            var mabs = makeAbs(self, m);
            self.statCache[mabs] = self.statCache[abs];
            self.cache[mabs] = self.cache[abs];
        }
    }
    return m;
}

// lotta situps...
function makeAbs(self, f) {
    var abs = f;
    if (f.charAt(0) === '/') {
        abs = path.join(self.root, f);
    } else if (isAbsolute(f) || f === '') {
        abs = f;
    } else if (self.changedCwd) {
        abs = path.resolve(self.cwd, f);
    } else {
        abs = path.resolve(f);
    }
    if (process.platform === 'win32') 
        abs = abs.replace(/\\/g, '/');
    return abs;
}

// Return true, if pattern ends with globstar '**', for the accompanying parent directory.
// Ex:- If node_modules/** is the pattern, add 'node_modules' to ignore list along with it's contents
function isIgnored(self, path) {
    if (!self.ignore.length) 
        return false;
    return self.ignore.some(function (item) {
        return item.matcher.match(path) || !(!(item.gmatcher && item.gmatcher.match(path)));
    });
}

function childrenIgnored(self, path) {
    if (!self.ignore.length) 
        return false;
    return self.ignore.some(function (item) {
        return !(!(item.gmatcher && item.gmatcher.match(path)));
    });
}


}).call(this,require('_process'))
},{"_process":108,"minimatch":90,"path":107,"path-is-absolute":94}],56:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
// Approach:
//
// 1. Get the minimatch set
// 2. For each pattern in the set, PROCESS(pattern, false)
// 3. Store matches per-set, then uniq them
//
// PROCESS(pattern, inGlobStar)
// Get the first [n] items from pattern that are all strings
// Join these together.  This is PREFIX.
//   If there is no more remaining, then stat(PREFIX) and
//   add to matches if it succeeds.  END.
//
// If inGlobStar and PREFIX is symlink and points to dir
//   set ENTRIES = []
// else readdir(PREFIX) as ENTRIES
//   If fail, END
//
// with ENTRIES
//   If pattern[n] is GLOBSTAR
//     // handle the case where the globstar match is empty
//     // by pruning it out, and testing the resulting pattern
//     PROCESS(pattern[0..n] + pattern[n+1 .. $], false)
//     // handle other cases.
//     for ENTRY in ENTRIES (not dotfiles)
//       // attach globstar + tail onto the entry
//       // Mark that this entry is a globstar match
//       PROCESS(pattern[0..n] + ENTRY + pattern[n .. $], true)
//
//   else // not globstar
//     for ENTRY in ENTRIES (not dotfiles, unless pattern[n] is dot)
//       Test ENTRY against pattern[n]
//       If fails, continue
//       If passes, PROCESS(pattern[0..n] + item + pattern[n+1 .. $])
//
// Caveat:
//   Cache all stats and readdirs results to minimize syscall.  Since all
//   we ever care about is existence and directory-ness, we can just keep
//   `true` for files, and [children,...] for directories, or `false` for
//   things that don't exist.
module.exports = glob;
var fs = require('fs');
var rp = require('fs.realpath');
var minimatch = require('minimatch');
var Minimatch = minimatch.Minimatch;
var inherits = require('inherits');
var EE = require('events').EventEmitter;
var path = require('path');
var assert = require('assert');
var isAbsolute = require('path-is-absolute');
var globSync = require('./sync.js');
var common = require('./common.js');
var alphasort = common.alphasort;
var alphasorti = common.alphasorti;
var setopts = common.setopts;
var ownProp = common.ownProp;
var inflight = require('inflight');
var util = require('util');
var childrenIgnored = common.childrenIgnored;
var isIgnored = common.isIgnored;
var once = require('once');
function glob(pattern, options, cb) {
    if (typeof options === 'function') 
        cb = options, options = {};
    if (!options) 
        options = {};
    if (options.sync) {
        if (cb) 
            throw new TypeError('callback provided to sync glob');
        return globSync(pattern, options);
    }
    return new Glob(pattern, options, cb);
}

glob.sync = globSync;
var GlobSync = glob.GlobSync = globSync.GlobSync;
// old api surface
glob.glob = glob;
function extend(origin, add) {
    if (add === null || typeof add !== 'object') {
        return origin;
    }
    var keys = Object.keys(add);
    var i = keys.length;
    while (i--) {
        origin[keys[i]] = add[keys[i]];
    }
    return origin;
}

glob.hasMagic = function (pattern, options_) {
    var options = extend({}, options_);
    options.noprocess = true;
    var g = new Glob(pattern, options);
    var set = g.minimatch.set;
    if (!pattern) 
        return false;
    if (set.length > 1) 
        return true;
    for (var j = 0;j < set[0].length; j++) {
        if (typeof set[0][j] !== 'string') 
            return true;
    }
    return false;
};
glob.Glob = Glob;
inherits(Glob, EE);
function Glob(pattern, options, cb) {
    if (typeof options === 'function') {
        cb = options;
        options = null;
    }
    if (options && options.sync) {
        if (cb) 
            throw new TypeError('callback provided to sync glob');
        return new GlobSync(pattern, options);
    }
    if (!(this instanceof Glob)) 
        return new Glob(pattern, options, cb);
    setopts(this, pattern, options);
    this._didRealPath = false;
    // process each pattern in the minimatch set
    var n = this.minimatch.set.length;
    // The matches are stored as {<filename>: true,...} so that
    // duplicates are automagically pruned.
    // Later, we do an Object.keys() on these.
    // Keep them as a list so we can fill in when nonull is set.
    this.matches = new Array(n);
    if (typeof cb === 'function') {
        cb = once(cb);
        this.on('error', cb);
        this.on('end', function (matches) {
            cb(null, matches);
        });
    }
    var self = this;
    this._processing = 0;
    this._emitQueue = [];
    this._processQueue = [];
    this.paused = false;
    if (this.noprocess) 
        return this;
    if (n === 0) 
        return done();
    var sync = true;
    for (var i = 0;i < n; i++) {
        this._process(this.minimatch.set[i], i, false, done);
    }
    sync = false;
    function done() {
        --self._processing;
        if (self._processing <= 0) {
            if (sync) {
                process.nextTick(function () {
                    self._finish();
                });
            } else {
                self._finish();
            }
        }
    }
    
}

Glob.prototype._finish = function () {
    assert(this instanceof Glob);
    if (this.aborted) 
        return;
    if (this.realpath && !this._didRealpath) 
        return this._realpath();
    common.finish(this);
    this.emit('end', this.found);
};
Glob.prototype._realpath = function () {
    if (this._didRealpath) 
        return;
    this._didRealpath = true;
    var n = this.matches.length;
    if (n === 0) 
        return this._finish();
    var self = this;
    for (var i = 0;i < this.matches.length; i++) 
        this._realpathSet(i, next);
    function next() {
        if (--n === 0) 
            self._finish();
    }
    
};
Glob.prototype._realpathSet = function (index, cb) {
    var matchset = this.matches[index];
    if (!matchset) 
        return cb();
    var found = Object.keys(matchset);
    var self = this;
    var n = found.length;
    if (n === 0) 
        return cb();
    var set = this.matches[index] = Object.create(null);
    found.forEach(function (p, i) {
        // If there's a problem with the stat, then it means that
        // one or more of the links in the realpath couldn't be
        // resolved.  just return the abs value in that case.
        p = self._makeAbs(p);
        rp.realpath(p, self.realpathCache, function (er, real) {
            if (!er) 
                set[real] = true;
             else if (er.syscall === 'stat') 
                set[p] = true;
             else 
                self.emit('error', er); //  srsly wtf right here
            if (--n === 0) {
                self.matches[index] = set;
                cb();
            }
        });
    });
};
Glob.prototype._mark = function (p) {
    return common.mark(this, p);
};
Glob.prototype._makeAbs = function (f) {
    return common.makeAbs(this, f);
};
Glob.prototype.abort = function () {
    this.aborted = true;
    this.emit('abort');
};
Glob.prototype.pause = function () {
    if (!this.paused) {
        this.paused = true;
        this.emit('pause');
    }
};
Glob.prototype.resume = function () {
    if (this.paused) {
        this.emit('resume');
        this.paused = false;
        if (this._emitQueue.length) {
            var eq = this._emitQueue.slice(0);
            this._emitQueue.length = 0;
            for (var i = 0;i < eq.length; i++) {
                var e = eq[i];
                this._emitMatch(e[0], e[1]);
            }
        }
        if (this._processQueue.length) {
            var pq = this._processQueue.slice(0);
            this._processQueue.length = 0;
            for (var i = 0;i < pq.length; i++) {
                var p = pq[i];
                this._processing--;
                this._process(p[0], p[1], p[2], p[3]);
            }
        }
    }
};
Glob.prototype._process = function (pattern, index, inGlobStar, cb) {
    assert(this instanceof Glob);
    assert(typeof cb === 'function');
    if (this.aborted) 
        return;
    this._processing++;
    if (this.paused) {
        this._processQueue.push([pattern,index,inGlobStar,cb]);
        return;
    }
    //console.error('PROCESS %d', this._processing, pattern)
    // Get the first [n] parts of pattern that are all strings.
    var n = 0;
    while (typeof pattern[n] === 'string') {
        n++;
    }
    // now n is the index of the first one that is *not* a string.
    // see if there's anything else
    var prefix;
    switch (n) {
            // if not, then this is rather simple
        case pattern.length:
            this._processSimple(pattern.join('/'), index, cb);
            return;
        case 0:
            // pattern *starts* with some non-trivial item.
            // going to readdir(cwd), but not include the prefix in matches.
            prefix = null;
            break;
        default:
            // pattern has some string bits in the front.
            // whatever it starts with, whether that's 'absolute' like /foo/bar,
            // or 'relative' like '../baz'
            prefix = pattern.slice(0, n).join('/');
            break;
    }
    var remain = pattern.slice(n);
    // get the list of entries.
    var read;
    if (prefix === null) 
        read = '.';
     else if (isAbsolute(prefix) || isAbsolute(pattern.join('/'))) {
        if (!prefix || !isAbsolute(prefix)) 
            prefix = '/' + prefix;
        read = prefix;
    } else 
        read = prefix;
    var abs = this._makeAbs(read);
    //if ignored, skip _processing
    if (childrenIgnored(this, read)) 
        return cb();
    var isGlobStar = remain[0] === minimatch.GLOBSTAR;
    if (isGlobStar) 
        this._processGlobStar(prefix, read, abs, remain, index, inGlobStar, cb);
     else 
        this._processReaddir(prefix, read, abs, remain, index, inGlobStar, cb);
};
Glob.prototype._processReaddir = function (prefix, read, abs, remain, index, inGlobStar, cb) {
    var self = this;
    this._readdir(abs, inGlobStar, function (er, entries) {
        return self._processReaddir2(prefix, read, abs, remain, index, inGlobStar, entries, cb);
    });
};
Glob.prototype._processReaddir2 = function (prefix, read, abs, remain, index, inGlobStar, entries, cb) {
    // if the abs isn't a dir, then nothing can match!
    if (!entries) 
        return cb();
    // It will only match dot entries if it starts with a dot, or if
    // dot is set.  Stuff like @(.foo|.bar) isn't allowed.
    var pn = remain[0];
    var negate = !(!this.minimatch.negate);
    var rawGlob = pn._glob;
    var dotOk = this.dot || rawGlob.charAt(0) === '.';
    var matchedEntries = [];
    for (var i = 0;i < entries.length; i++) {
        var e = entries[i];
        if (e.charAt(0) !== '.' || dotOk) {
            var m;
            if (negate && !prefix) {
                m = !e.match(pn);
            } else {
                m = e.match(pn);
            }
            if (m) 
                matchedEntries.push(e);
        }
    }
    //console.error('prd2', prefix, entries, remain[0]._glob, matchedEntries)
    var len = matchedEntries.length;
    // If there are no matched entries, then nothing matches.
    if (len === 0) 
        return cb();
    // if this is the last remaining pattern bit, then no need for
    // an additional stat *unless* the user has specified mark or
    // stat explicitly.  We know they exist, since readdir returned
    // them.
    if (remain.length === 1 && !this.mark && !this.stat) {
        if (!this.matches[index]) 
            this.matches[index] = Object.create(null);
        for (var i = 0;i < len; i++) {
            var e = matchedEntries[i];
            if (prefix) {
                if (prefix !== '/') 
                    e = prefix + '/' + e;
                 else 
                    e = prefix + e;
            }
            if (e.charAt(0) === '/' && !this.nomount) {
                e = path.join(this.root, e);
            }
            this._emitMatch(index, e);
        }
        // This was the last one, and no stats were needed
        return cb();
    }
    // now test all matched entries as stand-ins for that part
    // of the pattern.
    remain.shift();
    for (var i = 0;i < len; i++) {
        var e = matchedEntries[i];
        var newPattern;
        if (prefix) {
            if (prefix !== '/') 
                e = prefix + '/' + e;
             else 
                e = prefix + e;
        }
        this._process([e].concat(remain), index, inGlobStar, cb);
    }
    cb();
};
Glob.prototype._emitMatch = function (index, e) {
    if (this.aborted) 
        return;
    if (isIgnored(this, e)) 
        return;
    if (this.paused) {
        this._emitQueue.push([index,e]);
        return;
    }
    var abs = isAbsolute(e) ? e : this._makeAbs(e);
    if (this.mark) 
        e = this._mark(e);
    if (this.absolute) 
        e = abs;
    if (this.matches[index][e]) 
        return;
    if (this.nodir) {
        var c = this.cache[abs];
        if (c === 'DIR' || Array.isArray(c)) 
            return;
    }
    this.matches[index][e] = true;
    var st = this.statCache[abs];
    if (st) 
        this.emit('stat', e, st);
    this.emit('match', e);
};
Glob.prototype._readdirInGlobStar = function (abs, cb) {
    if (this.aborted) 
        return;
    // follow all symlinked directories forever
    // just proceed as if this is a non-globstar situation
    if (this.follow) 
        return this._readdir(abs, false, cb);
    var lstatkey = 'lstat\0' + abs;
    var self = this;
    var lstatcb = inflight(lstatkey, lstatcb_);
    if (lstatcb) 
        fs.lstat(abs, lstatcb);
    function lstatcb_(er, lstat) {
        if (er && er.code === 'ENOENT') 
            return cb();
        var isSym = lstat && lstat.isSymbolicLink();
        self.symlinks[abs] = isSym;
        // If it's not a symlink or a dir, then it's definitely a regular file.
        // don't bother doing a readdir in that case.
        if (!isSym && lstat && !lstat.isDirectory()) {
            self.cache[abs] = 'FILE';
            cb();
        } else 
            self._readdir(abs, false, cb);
    }
    
};
Glob.prototype._readdir = function (abs, inGlobStar, cb) {
    if (this.aborted) 
        return;
    cb = inflight('readdir\0' + abs + '\0' + inGlobStar, cb);
    if (!cb) 
        return;
    //console.error('RD %j %j', +inGlobStar, abs)
    if (inGlobStar && !ownProp(this.symlinks, abs)) 
        return this._readdirInGlobStar(abs, cb);
    if (ownProp(this.cache, abs)) {
        var c = this.cache[abs];
        if (!c || c === 'FILE') 
            return cb();
        if (Array.isArray(c)) 
            return cb(null, c);
    }
    var self = this;
    fs.readdir(abs, readdirCb(this, abs, cb));
};
function readdirCb(self, abs, cb) {
    return function (er, entries) {
        if (er) 
            self._readdirError(abs, er, cb);
         else 
            self._readdirEntries(abs, entries, cb);
    };
}

Glob.prototype._readdirEntries = function (abs, entries, cb) {
    if (this.aborted) 
        return;
    // if we haven't asked to stat everything, then just
    // assume that everything in there exists, so we can avoid
    // having to stat it a second time.
    if (!this.mark && !this.stat) {
        for (var i = 0;i < entries.length; i++) {
            var e = entries[i];
            if (abs === '/') 
                e = abs + e;
             else 
                e = abs + '/' + e;
            this.cache[e] = true;
        }
    }
    this.cache[abs] = entries;
    return cb(null, entries);
};
Glob.prototype._readdirError = function (f, er, cb) {
    if (this.aborted) 
        return;
            // handle errors, and cache the information
    switch (er.code) {
        case 'ENOTSUP': //  https://github.com/isaacs/node-glob/issues/205
        case 'ENOTDIR': //  totally normal. means it *does* exist.
            var abs = this._makeAbs(f);
            this.cache[abs] = 'FILE';
            if (abs === this.cwdAbs) {
                var error = new Error(er.code + ' invalid cwd ' + this.cwd);
                error.path = this.cwd;
                error.code = er.code;
                this.emit('error', error);
                this.abort();
            }
            break;
        case 'ENOENT': //  not terribly unusual
        case 'ELOOP':
        case 'ENAMETOOLONG':
        case 'UNKNOWN':
            this.cache[this._makeAbs(f)] = false;
            break;
        default:
            this.cache[this._makeAbs(f)] = false; //  some unusual error.  Treat as failure.
            if (this.strict) {
                this.emit('error', er);
                // If the error is handled, then we abort
                // if not, we threw out of here
                this.abort();
            }
            if (!this.silent) 
                console.error('glob error', er);
            break;
    }
    return cb();
};
Glob.prototype._processGlobStar = function (prefix, read, abs, remain, index, inGlobStar, cb) {
    var self = this;
    this._readdir(abs, inGlobStar, function (er, entries) {
        self._processGlobStar2(prefix, read, abs, remain, index, inGlobStar, entries, cb);
    });
};
Glob.prototype._processGlobStar2 = function (prefix, read, abs, remain, index, inGlobStar, entries, cb) {
    //console.error('pgs2', prefix, remain[0], entries)
    // no entries means not a dir, so it can never have matches
    // foo.txt/** doesn't match foo.txt
    if (!entries) 
        return cb();
    // test without the globstar, and with every child both below
    // and replacing the globstar.
    var remainWithoutGlobStar = remain.slice(1);
    var gspref = prefix ? [prefix] : [];
    var noGlobStar = gspref.concat(remainWithoutGlobStar);
    // the noGlobStar pattern exits the inGlobStar state
    this._process(noGlobStar, index, false, cb);
    var isSym = this.symlinks[abs];
    var len = entries.length;
    // If it's a symlink, and we're in a globstar, then stop
    if (isSym && inGlobStar) 
        return cb();
    for (var i = 0;i < len; i++) {
        var e = entries[i];
        if (e.charAt(0) === '.' && !this.dot) 
            continue;
        // these two cases enter the inGlobStar state
        var instead = gspref.concat(entries[i], remainWithoutGlobStar);
        this._process(instead, index, true, cb);
        var below = gspref.concat(entries[i], remain);
        this._process(below, index, true, cb);
    }
    cb();
};
Glob.prototype._processSimple = function (prefix, index, cb) {
    // XXX review this.  Shouldn't it be doing the mounting etc
    // before doing stat?  kinda weird?
    var self = this;
    this._stat(prefix, function (er, exists) {
        self._processSimple2(prefix, index, er, exists, cb);
    });
};
Glob.prototype._processSimple2 = function (prefix, index, er, exists, cb) {
    //console.error('ps2', prefix, exists)
    if (!this.matches[index]) 
        this.matches[index] = Object.create(null);
    // If it doesn't exist, then just mark the lack of results
    if (!exists) 
        return cb();
    if (prefix && isAbsolute(prefix) && !this.nomount) {
        var trail = /[\/\\]$/.test(prefix);
        if (prefix.charAt(0) === '/') {
            prefix = path.join(this.root, prefix);
        } else {
            prefix = path.resolve(this.root, prefix);
            if (trail) 
                prefix += '/';
        }
    }
    if (process.platform === 'win32') 
        prefix = prefix.replace(/\\/g, '/');
    // Mark this as a match
    this._emitMatch(index, prefix);
    cb();
};
// Returns either 'DIR', 'FILE', or false
Glob.prototype._stat = function (f, cb) {
    var abs = this._makeAbs(f);
    var needDir = f.slice(-1) === '/';
    if (f.length > this.maxLength) 
        return cb();
    if (!this.stat && ownProp(this.cache, abs)) {
        var c = this.cache[abs];
        if (Array.isArray(c)) 
            c = 'DIR';
        // It exists, but maybe not how we need it
        if (!needDir || c === 'DIR') 
            return cb(null, c);
        if (needDir && c === 'FILE') 
            return cb();
    }
    // otherwise we have to stat, because maybe c=true
    // if we know it exists, but not what it is.
    var exists;
    var stat = this.statCache[abs];
    if (stat !== undefined) {
        if (stat === false) 
            return cb(null, stat);
         else {
            var type = stat.isDirectory() ? 'DIR' : 'FILE';
            if (needDir && type === 'FILE') 
                return cb();
             else 
                return cb(null, type, stat);
        }
    }
    var self = this;
    var statcb = inflight('stat\0' + abs, lstatcb_);
    if (statcb) 
        fs.lstat(abs, statcb);
    function lstatcb_(er, lstat) {
        if (lstat && lstat.isSymbolicLink()) {
            // If it's a symlink, then treat it as the target, unless
            // the target does not exist, then treat it as a file.
            return fs.stat(abs, function (er, stat) {
                if (er) 
                    self._stat2(f, abs, null, lstat, cb);
                 else 
                    self._stat2(f, abs, er, stat, cb);
            });
        } else {
            self._stat2(f, abs, er, lstat, cb);
        }
    }
    
};
Glob.prototype._stat2 = function (f, abs, er, stat, cb) {
    if (er && (er.code === 'ENOENT' || er.code === 'ENOTDIR')) {
        this.statCache[abs] = false;
        return cb();
    }
    var needDir = f.slice(-1) === '/';
    this.statCache[abs] = stat;
    if (abs.slice(-1) === '/' && stat && !stat.isDirectory()) 
        return cb(null, false, stat);
    var c = true;
    if (stat) 
        c = stat.isDirectory() ? 'DIR' : 'FILE';
    this.cache[abs] = this.cache[abs] || c;
    if (needDir && c === 'FILE') 
        return cb();
    return cb(null, c, stat);
};


}).call(this,require('_process'))
},{"./common.js":55,"./sync.js":57,"_process":108,"assert":104,"events":105,"fs":103,"fs.realpath":53,"inflight":58,"inherits":59,"minimatch":90,"once":93,"path":107,"path-is-absolute":94,"util":110}],57:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
module.exports = globSync;
globSync.GlobSync = GlobSync;
var fs = require('fs');
var rp = require('fs.realpath');
var minimatch = require('minimatch');
var Minimatch = minimatch.Minimatch;
var Glob = require('./glob.js').Glob;
var util = require('util');
var path = require('path');
var assert = require('assert');
var isAbsolute = require('path-is-absolute');
var common = require('./common.js');
var alphasort = common.alphasort;
var alphasorti = common.alphasorti;
var setopts = common.setopts;
var ownProp = common.ownProp;
var childrenIgnored = common.childrenIgnored;
var isIgnored = common.isIgnored;
function globSync(pattern, options) {
    if (typeof options === 'function' || arguments.length === 3) 
        throw new TypeError('callback provided to sync glob\n' + 'See: https://github.com/isaacs/node-glob/issues/167');
    return new GlobSync(pattern, options).found;
}

function GlobSync(pattern, options) {
    if (!pattern) 
        throw new Error('must provide pattern');
    if (typeof options === 'function' || arguments.length === 3) 
        throw new TypeError('callback provided to sync glob\n' + 'See: https://github.com/isaacs/node-glob/issues/167');
    if (!(this instanceof GlobSync)) 
        return new GlobSync(pattern, options);
    setopts(this, pattern, options);
    if (this.noprocess) 
        return this;
    var n = this.minimatch.set.length;
    this.matches = new Array(n);
    for (var i = 0;i < n; i++) {
        this._process(this.minimatch.set[i], i, false);
    }
    this._finish();
}

GlobSync.prototype._finish = function () {
    assert(this instanceof GlobSync);
    if (this.realpath) {
        var self = this;
        this.matches.forEach(function (matchset, index) {
            var set = self.matches[index] = Object.create(null);
            for (var p in matchset) {
                try {
                    p = self._makeAbs(p);
                    var real = rp.realpathSync(p, self.realpathCache);
                    set[real] = true;
                } catch (er) {
                    if (er.syscall === 'stat') 
                        set[self._makeAbs(p)] = true;
                     else 
                        throw er;
                }
            }
        });
    }
    common.finish(this);
};
GlobSync.prototype._process = function (pattern, index, inGlobStar) {
    assert(this instanceof GlobSync);
    // Get the first [n] parts of pattern that are all strings.
    var n = 0;
    while (typeof pattern[n] === 'string') {
        n++;
    }
    // now n is the index of the first one that is *not* a string.
    // See if there's anything else
    var prefix;
    switch (n) {
            // if not, then this is rather simple
        case pattern.length:
            this._processSimple(pattern.join('/'), index);
            return;
        case 0:
            // pattern *starts* with some non-trivial item.
            // going to readdir(cwd), but not include the prefix in matches.
            prefix = null;
            break;
        default:
            // pattern has some string bits in the front.
            // whatever it starts with, whether that's 'absolute' like /foo/bar,
            // or 'relative' like '../baz'
            prefix = pattern.slice(0, n).join('/');
            break;
    }
    var remain = pattern.slice(n);
    // get the list of entries.
    var read;
    if (prefix === null) 
        read = '.';
     else if (isAbsolute(prefix) || isAbsolute(pattern.join('/'))) {
        if (!prefix || !isAbsolute(prefix)) 
            prefix = '/' + prefix;
        read = prefix;
    } else 
        read = prefix;
    var abs = this._makeAbs(read);
    //if ignored, skip processing
    if (childrenIgnored(this, read)) 
        return;
    var isGlobStar = remain[0] === minimatch.GLOBSTAR;
    if (isGlobStar) 
        this._processGlobStar(prefix, read, abs, remain, index, inGlobStar);
     else 
        this._processReaddir(prefix, read, abs, remain, index, inGlobStar);
};
GlobSync.prototype._processReaddir = function (prefix, read, abs, remain, index, inGlobStar) {
    var entries = this._readdir(abs, inGlobStar);
    // if the abs isn't a dir, then nothing can match!
    if (!entries) 
        return;
    // It will only match dot entries if it starts with a dot, or if
    // dot is set.  Stuff like @(.foo|.bar) isn't allowed.
    var pn = remain[0];
    var negate = !(!this.minimatch.negate);
    var rawGlob = pn._glob;
    var dotOk = this.dot || rawGlob.charAt(0) === '.';
    var matchedEntries = [];
    for (var i = 0;i < entries.length; i++) {
        var e = entries[i];
        if (e.charAt(0) !== '.' || dotOk) {
            var m;
            if (negate && !prefix) {
                m = !e.match(pn);
            } else {
                m = e.match(pn);
            }
            if (m) 
                matchedEntries.push(e);
        }
    }
    var len = matchedEntries.length;
    // If there are no matched entries, then nothing matches.
    if (len === 0) 
        return;
    // if this is the last remaining pattern bit, then no need for
    // an additional stat *unless* the user has specified mark or
    // stat explicitly.  We know they exist, since readdir returned
    // them.
    if (remain.length === 1 && !this.mark && !this.stat) {
        if (!this.matches[index]) 
            this.matches[index] = Object.create(null);
        for (var i = 0;i < len; i++) {
            var e = matchedEntries[i];
            if (prefix) {
                if (prefix.slice(-1) !== '/') 
                    e = prefix + '/' + e;
                 else 
                    e = prefix + e;
            }
            if (e.charAt(0) === '/' && !this.nomount) {
                e = path.join(this.root, e);
            }
            this._emitMatch(index, e);
        }
        // This was the last one, and no stats were needed
        return;
    }
    // now test all matched entries as stand-ins for that part
    // of the pattern.
    remain.shift();
    for (var i = 0;i < len; i++) {
        var e = matchedEntries[i];
        var newPattern;
        if (prefix) 
            newPattern = [prefix,e];
         else 
            newPattern = [e];
        this._process(newPattern.concat(remain), index, inGlobStar);
    }
};
GlobSync.prototype._emitMatch = function (index, e) {
    if (isIgnored(this, e)) 
        return;
    var abs = this._makeAbs(e);
    if (this.mark) 
        e = this._mark(e);
    if (this.absolute) {
        e = abs;
    }
    if (this.matches[index][e]) 
        return;
    if (this.nodir) {
        var c = this.cache[abs];
        if (c === 'DIR' || Array.isArray(c)) 
            return;
    }
    this.matches[index][e] = true;
    if (this.stat) 
        this._stat(e);
};
GlobSync.prototype._readdirInGlobStar = function (abs) {
    // follow all symlinked directories forever
    // just proceed as if this is a non-globstar situation
    if (this.follow) 
        return this._readdir(abs, false);
    var entries;
    var lstat;
    var stat;
    try {
        lstat = fs.lstatSync(abs);
    } catch (er) {
        if (er.code === 'ENOENT') {
            // lstat failed, doesn't exist
            return null;
        }
    }
    var isSym = lstat && lstat.isSymbolicLink();
    this.symlinks[abs] = isSym;
    // If it's not a symlink or a dir, then it's definitely a regular file.
    // don't bother doing a readdir in that case.
    if (!isSym && lstat && !lstat.isDirectory()) 
        this.cache[abs] = 'FILE';
     else 
        entries = this._readdir(abs, false);
    return entries;
};
GlobSync.prototype._readdir = function (abs, inGlobStar) {
    var entries;
    if (inGlobStar && !ownProp(this.symlinks, abs)) 
        return this._readdirInGlobStar(abs);
    if (ownProp(this.cache, abs)) {
        var c = this.cache[abs];
        if (!c || c === 'FILE') 
            return null;
        if (Array.isArray(c)) 
            return c;
    }
    try {
        return this._readdirEntries(abs, fs.readdirSync(abs));
    } catch (er) {
        this._readdirError(abs, er);
        return null;
    }
};
GlobSync.prototype._readdirEntries = function (abs, entries) {
    // if we haven't asked to stat everything, then just
    // assume that everything in there exists, so we can avoid
    // having to stat it a second time.
    if (!this.mark && !this.stat) {
        for (var i = 0;i < entries.length; i++) {
            var e = entries[i];
            if (abs === '/') 
                e = abs + e;
             else 
                e = abs + '/' + e;
            this.cache[e] = true;
        }
    }
    this.cache[abs] = entries;
    // mark and cache dir-ness
    return entries;
};
GlobSync.prototype._readdirError = function (f, er) {
            // handle errors, and cache the information
    switch (er.code) {
        case 'ENOTSUP': //  https://github.com/isaacs/node-glob/issues/205
        case 'ENOTDIR': //  totally normal. means it *does* exist.
            var abs = this._makeAbs(f);
            this.cache[abs] = 'FILE';
            if (abs === this.cwdAbs) {
                var error = new Error(er.code + ' invalid cwd ' + this.cwd);
                error.path = this.cwd;
                error.code = er.code;
                throw error;
            }
            break;
        case 'ENOENT': //  not terribly unusual
        case 'ELOOP':
        case 'ENAMETOOLONG':
        case 'UNKNOWN':
            this.cache[this._makeAbs(f)] = false;
            break;
        default:
            this.cache[this._makeAbs(f)] = false; //  some unusual error.  Treat as failure.
            if (this.strict) 
                throw er;
            if (!this.silent) 
                console.error('glob error', er);
            break;
    }
};
GlobSync.prototype._processGlobStar = function (prefix, read, abs, remain, index, inGlobStar) {
    var entries = this._readdir(abs, inGlobStar);
    // no entries means not a dir, so it can never have matches
    // foo.txt/** doesn't match foo.txt
    if (!entries) 
        return;
    // test without the globstar, and with every child both below
    // and replacing the globstar.
    var remainWithoutGlobStar = remain.slice(1);
    var gspref = prefix ? [prefix] : [];
    var noGlobStar = gspref.concat(remainWithoutGlobStar);
    // the noGlobStar pattern exits the inGlobStar state
    this._process(noGlobStar, index, false);
    var len = entries.length;
    var isSym = this.symlinks[abs];
    // If it's a symlink, and we're in a globstar, then stop
    if (isSym && inGlobStar) 
        return;
    for (var i = 0;i < len; i++) {
        var e = entries[i];
        if (e.charAt(0) === '.' && !this.dot) 
            continue;
        // these two cases enter the inGlobStar state
        var instead = gspref.concat(entries[i], remainWithoutGlobStar);
        this._process(instead, index, true);
        var below = gspref.concat(entries[i], remain);
        this._process(below, index, true);
    }
};
GlobSync.prototype._processSimple = function (prefix, index) {
    // XXX review this.  Shouldn't it be doing the mounting etc
    // before doing stat?  kinda weird?
    var exists = this._stat(prefix);
    if (!this.matches[index]) 
        this.matches[index] = Object.create(null);
    // If it doesn't exist, then just mark the lack of results
    if (!exists) 
        return;
    if (prefix && isAbsolute(prefix) && !this.nomount) {
        var trail = /[\/\\]$/.test(prefix);
        if (prefix.charAt(0) === '/') {
            prefix = path.join(this.root, prefix);
        } else {
            prefix = path.resolve(this.root, prefix);
            if (trail) 
                prefix += '/';
        }
    }
    if (process.platform === 'win32') 
        prefix = prefix.replace(/\\/g, '/');
    // Mark this as a match
    this._emitMatch(index, prefix);
};
// Returns either 'DIR', 'FILE', or false
GlobSync.prototype._stat = function (f) {
    var abs = this._makeAbs(f);
    var needDir = f.slice(-1) === '/';
    if (f.length > this.maxLength) 
        return false;
    if (!this.stat && ownProp(this.cache, abs)) {
        var c = this.cache[abs];
        if (Array.isArray(c)) 
            c = 'DIR';
        // It exists, but maybe not how we need it
        if (!needDir || c === 'DIR') 
            return c;
        if (needDir && c === 'FILE') 
            return false;
    }
    // otherwise we have to stat, because maybe c=true
    // if we know it exists, but not what it is.
    var exists;
    var stat = this.statCache[abs];
    if (!stat) {
        var lstat;
        try {
            lstat = fs.lstatSync(abs);
        } catch (er) {
            if (er && (er.code === 'ENOENT' || er.code === 'ENOTDIR')) {
                this.statCache[abs] = false;
                return false;
            }
        }
        if (lstat && lstat.isSymbolicLink()) {
            try {
                stat = fs.statSync(abs);
            } catch (er) {
                stat = lstat;
            }
        } else {
            stat = lstat;
        }
    }
    this.statCache[abs] = stat;
    var c = true;
    if (stat) 
        c = stat.isDirectory() ? 'DIR' : 'FILE';
    this.cache[abs] = this.cache[abs] || c;
    if (needDir && c === 'FILE') 
        return false;
    return c;
};
GlobSync.prototype._mark = function (p) {
    return common.mark(this, p);
};
GlobSync.prototype._makeAbs = function (f) {
    return common.makeAbs(this, f);
};


}).call(this,require('_process'))
},{"./common.js":55,"./glob.js":56,"_process":108,"assert":104,"fs":103,"fs.realpath":53,"minimatch":90,"path":107,"path-is-absolute":94,"util":110}],58:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
var wrappy = require('wrappy');
var reqs = Object.create(null);
var once = require('once');
module.exports = wrappy(inflight);
function inflight(key, cb) {
    if (reqs[key]) {
        reqs[key].push(cb);
        return null;
    } else {
        reqs[key] = [cb];
        return makeres(key);
    }
}

function makeres(key) {
    return once(function RES() {
        var cbs = reqs[key];
        var len = cbs.length;
        var args = slice(arguments);
        try {
            // XXX It's somewhat ambiguous whether a new callback added in this
            // pass should be queued for later execution if something in the
            // list of callbacks throws, or if it should just be discarded.
            // However, it's such an edge case that it hardly matters, and either
            // choice is likely as surprising as the other.
            // As it happens, we do go ahead and schedule it for later execution.
            for (var i = 0;i < len; i++) {
                cbs[i].apply(null, args);
            }
        } finally {
            if (cbs.length > len) {
                // added more in the interim.
                // de-zalgo, just in case, but don't call again.
                cbs.splice(0, len);
                process.nextTick(function () {
                    RES.apply(null, args);
                });
            } else {
                delete reqs[key];
            }
        }
    });
}

function slice(args) {
    var length = args.length;
    var array = [];
    for (var i = 0;i < length; i++) 
        array[i] = args[i];
    return array;
}


}).call(this,require('_process'))
},{"_process":108,"once":93,"wrappy":100}],59:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
if (typeof Object.create === 'function') {
    // implementation from standard node.js 'util' module
    module.exports = function inherits(ctor, superCtor) {
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
                value: ctor,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
    };
} else {
    // old school shim for old browsers
    module.exports = function inherits(ctor, superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function () {};
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
    };
}


}).call(this,require('_process'))
},{"_process":108}],60:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
'use strict';
var yaml = require('./lib/js-yaml.js');
module.exports = yaml;


}).call(this,require('_process'))
},{"./lib/js-yaml.js":61,"_process":108}],61:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
'use strict';
var loader = require('./js-yaml/loader');
var dumper = require('./js-yaml/dumper');
function deprecated(name) {
    return function () {
        throw new Error('Function ' + name + ' is deprecated and cannot be used.');
    };
}

module.exports.Type = require('./js-yaml/type');
module.exports.Schema = require('./js-yaml/schema');
module.exports.FAILSAFE_SCHEMA = require('./js-yaml/schema/failsafe');
module.exports.JSON_SCHEMA = require('./js-yaml/schema/json');
module.exports.CORE_SCHEMA = require('./js-yaml/schema/core');
module.exports.DEFAULT_SAFE_SCHEMA = require('./js-yaml/schema/default_safe');
module.exports.DEFAULT_FULL_SCHEMA = require('./js-yaml/schema/default_full');
module.exports.load = loader.load;
module.exports.loadAll = loader.loadAll;
module.exports.safeLoad = loader.safeLoad;
module.exports.safeLoadAll = loader.safeLoadAll;
module.exports.dump = dumper.dump;
module.exports.safeDump = dumper.safeDump;
module.exports.YAMLException = require('./js-yaml/exception');
// Deprecated schema names from JS-YAML 2.0.x
module.exports.MINIMAL_SCHEMA = require('./js-yaml/schema/failsafe');
module.exports.SAFE_SCHEMA = require('./js-yaml/schema/default_safe');
module.exports.DEFAULT_SCHEMA = require('./js-yaml/schema/default_full');
// Deprecated functions from JS-YAML 1.x.x
module.exports.scan = deprecated('scan');
module.exports.parse = deprecated('parse');
module.exports.compose = deprecated('compose');
module.exports.addConstructor = deprecated('addConstructor');


}).call(this,require('_process'))
},{"./js-yaml/dumper":63,"./js-yaml/exception":64,"./js-yaml/loader":65,"./js-yaml/schema":67,"./js-yaml/schema/core":68,"./js-yaml/schema/default_full":69,"./js-yaml/schema/default_safe":70,"./js-yaml/schema/failsafe":71,"./js-yaml/schema/json":72,"./js-yaml/type":73,"_process":108}],62:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
'use strict';
function isNothing(subject) {
    return typeof subject === 'undefined' || subject === null;
}

function isObject(subject) {
    return typeof subject === 'object' && subject !== null;
}

function toArray(sequence) {
    if (Array.isArray(sequence)) 
        return sequence;
     else if (isNothing(sequence)) 
        return [];
    return [sequence];
}

function extend(target, source) {
    var index, length, key, sourceKeys;
    if (source) {
        sourceKeys = Object.keys(source);
        for (index = 0, length = sourceKeys.length; index < length; index += 1) {
            key = sourceKeys[index];
            target[key] = source[key];
        }
    }
    return target;
}

function repeat(string, count) {
    var result = '', cycle;
    for (cycle = 0; cycle < count; cycle += 1) {
        result += string;
    }
    return result;
}

function isNegativeZero(number) {
    return number === 0 && Number.NEGATIVE_INFINITY === 1 / number;
}

module.exports.isNothing = isNothing;
module.exports.isObject = isObject;
module.exports.toArray = toArray;
module.exports.repeat = repeat;
module.exports.isNegativeZero = isNegativeZero;
module.exports.extend = extend;


}).call(this,require('_process'))
},{"_process":108}],63:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
'use strict';
/*eslint-disable no-use-before-define*/
var common = require('./common');
var YAMLException = require('./exception');
var DEFAULT_FULL_SCHEMA = require('./schema/default_full');
var DEFAULT_SAFE_SCHEMA = require('./schema/default_safe');
var _toString = Object.prototype.toString;
var _hasOwnProperty = Object.prototype.hasOwnProperty;
var CHAR_TAB = 0x09; /* Tab */
var CHAR_LINE_FEED = 0x0A; /* LF */
var CHAR_SPACE = 0x20; /* Space */
var CHAR_EXCLAMATION = 0x21; /* ! */
var CHAR_DOUBLE_QUOTE = 0x22; /* " */
var CHAR_SHARP = 0x23; /* # */
var CHAR_PERCENT = 0x25; /* % */
var CHAR_AMPERSAND = 0x26; /* & */
var CHAR_SINGLE_QUOTE = 0x27; /* ' */
var CHAR_ASTERISK = 0x2A; /* * */
var CHAR_COMMA = 0x2C; /* , */
var CHAR_MINUS = 0x2D; /* - */
var CHAR_COLON = 0x3A; /* : */
var CHAR_GREATER_THAN = 0x3E; /* > */
var CHAR_QUESTION = 0x3F; /* ? */
var CHAR_COMMERCIAL_AT = 0x40; /* @ */
var CHAR_LEFT_SQUARE_BRACKET = 0x5B; /* [ */
var CHAR_RIGHT_SQUARE_BRACKET = 0x5D; /* ] */
var CHAR_GRAVE_ACCENT = 0x60; /* ` */
var CHAR_LEFT_CURLY_BRACKET = 0x7B; /* { */
var CHAR_VERTICAL_LINE = 0x7C; /* | */
var CHAR_RIGHT_CURLY_BRACKET = 0x7D; /* } */
var ESCAPE_SEQUENCES = {};
ESCAPE_SEQUENCES[0x00] = '\\0';
ESCAPE_SEQUENCES[0x07] = '\\a';
ESCAPE_SEQUENCES[0x08] = '\\b';
ESCAPE_SEQUENCES[0x09] = '\\t';
ESCAPE_SEQUENCES[0x0A] = '\\n';
ESCAPE_SEQUENCES[0x0B] = '\\v';
ESCAPE_SEQUENCES[0x0C] = '\\f';
ESCAPE_SEQUENCES[0x0D] = '\\r';
ESCAPE_SEQUENCES[0x1B] = '\\e';
ESCAPE_SEQUENCES[0x22] = '\\"';
ESCAPE_SEQUENCES[0x5C] = '\\\\';
ESCAPE_SEQUENCES[0x85] = '\\N';
ESCAPE_SEQUENCES[0xA0] = '\\_';
ESCAPE_SEQUENCES[0x2028] = '\\L';
ESCAPE_SEQUENCES[0x2029] = '\\P';
var DEPRECATED_BOOLEANS_SYNTAX = ['y','Y','yes','Yes','YES','on','On','ON','n','N',
    'no','No','NO','off','Off','OFF'];
function compileStyleMap(schema, map) {
    var result, keys, index, length, tag, style, type;
    if (map === null) 
        return {};
    result = {};
    keys = Object.keys(map);
    for (index = 0, length = keys.length; index < length; index += 1) {
        tag = keys[index];
        style = String(map[tag]);
        if (tag.slice(0, 2) === '!!') {
            tag = 'tag:yaml.org,2002:' + tag.slice(2);
        }
        type = schema.compiledTypeMap['fallback'][tag];
        if (type && _hasOwnProperty.call(type.styleAliases, style)) {
            style = type.styleAliases[style];
        }
        result[tag] = style;
    }
    return result;
}

function encodeHex(character) {
    var string, handle, length;
    string = character.toString(16).toUpperCase();
    if (character <= 0xFF) {
        handle = 'x';
        length = 2;
    } else if (character <= 0xFFFF) {
        handle = 'u';
        length = 4;
    } else if (character <= 0xFFFFFFFF) {
        handle = 'U';
        length = 8;
    } else {
        throw new YAMLException('code point within a string may not be greater than 0xFFFFFFFF');
    }
    return '\\' + handle + common.repeat('0', length - string.length) + string;
}

function State(options) {
    this.schema = options['schema'] || DEFAULT_FULL_SCHEMA;
    this.indent = Math.max(1, options['indent'] || 2);
    this.skipInvalid = options['skipInvalid'] || false;
    this.flowLevel = common.isNothing(options['flowLevel']) ? -1 : options['flowLevel'];
    this.styleMap = compileStyleMap(this.schema, options['styles'] || null);
    this.sortKeys = options['sortKeys'] || false;
    this.lineWidth = options['lineWidth'] || 80;
    this.noRefs = options['noRefs'] || false;
    this.noCompatMode = options['noCompatMode'] || false;
    this.condenseFlow = options['condenseFlow'] || false;
    this.implicitTypes = this.schema.compiledImplicit;
    this.explicitTypes = this.schema.compiledExplicit;
    this.tag = null;
    this.result = '';
    this.duplicates = [];
    this.usedDuplicates = null;
}

// Indents every line in a string. Empty lines (\n only) are not indented.
function indentString(string, spaces) {
    var ind = common.repeat(' ', spaces), position = 0, next = -1, result = '', line, length = string.length;
    while (position < length) {
        next = string.indexOf('\n', position);
        if (next === -1) {
            line = string.slice(position);
            position = length;
        } else {
            line = string.slice(position, next + 1);
            position = next + 1;
        }
        if (line.length && line !== '\n') 
            result += ind;
        result += line;
    }
    return result;
}

function generateNextLine(state, level) {
    return '\n' + common.repeat(' ', state.indent * level);
}

function testImplicitResolving(state, str) {
    var index, length, type;
    for (index = 0, length = state.implicitTypes.length; index < length; index += 1) {
        type = state.implicitTypes[index];
        if (type.resolve(str)) {
            return true;
        }
    }
    return false;
}

// [33] s-white ::= s-space | s-tab
function isWhitespace(c) {
    return c === CHAR_SPACE || c === CHAR_TAB;
}

// Returns true if the character can be printed without escaping.
// From YAML 1.2: "any allowed characters known to be non-printable
// should also be escaped. [However,] This isn’t mandatory"
// Derived from nb-char - \t - #x85 - #xA0 - #x2028 - #x2029.
function isPrintable(c) {
    return 0x00020 <= c && c <= 0x00007E || 0x000A1 <= c && c <= 0x00D7FF && c !== 0x2028 && c !== 0x2029 || 0x0E000 <= c && c <= 0x00FFFD && c !== 0xFEFF || 0x10000 <= c && c <= 0x10FFFF; /* BOM */
}

// Simplified test for values allowed after the first character in plain style.
function isPlainSafe(c) {
    // Uses a subset of nb-char - c-flow-indicator - ":" - "#"
    // where nb-char ::= c-printable - b-char - c-byte-order-mark.
    // - c-flow-indicator
    // - ":" - "#"
    return isPrintable(c) && c !== 0xFEFF && c !== CHAR_COMMA && c !== CHAR_LEFT_SQUARE_BRACKET && c !== CHAR_RIGHT_SQUARE_BRACKET && c !== CHAR_LEFT_CURLY_BRACKET && c !== CHAR_RIGHT_CURLY_BRACKET && c !== CHAR_COLON && c !== CHAR_SHARP;
}

// Simplified test for values allowed as the first character in plain style.
function isPlainSafeFirst(c) {
    // Uses a subset of ns-char - c-indicator
    // where ns-char = nb-char - s-white.
    // - (c-indicator ::=
    // “-” | “?” | “:” | “,” | “[” | “]” | “{” | “}”
    // | “#” | “&” | “*” | “!” | “|” | “>” | “'” | “"”
    // | “%” | “@” | “`”)
    return isPrintable(c) && c !== 0xFEFF && !isWhitespace(c) && c !== CHAR_MINUS && c !== CHAR_QUESTION && c !== CHAR_COLON && c !== CHAR_COMMA && c !== CHAR_LEFT_SQUARE_BRACKET && c !== CHAR_RIGHT_SQUARE_BRACKET && c !== CHAR_LEFT_CURLY_BRACKET && c !== CHAR_RIGHT_CURLY_BRACKET && c !== CHAR_SHARP && c !== CHAR_AMPERSAND && c !== CHAR_ASTERISK && c !== CHAR_EXCLAMATION && c !== CHAR_VERTICAL_LINE && c !== CHAR_GREATER_THAN && c !== CHAR_SINGLE_QUOTE && c !== CHAR_DOUBLE_QUOTE && c !== CHAR_PERCENT && c !== CHAR_COMMERCIAL_AT && c !== CHAR_GRAVE_ACCENT; //  - s-white
}

var STYLE_PLAIN = 1, STYLE_SINGLE = 2, STYLE_LITERAL = 3, STYLE_FOLDED = 4, STYLE_DOUBLE = 5;
// Determines which scalar styles are possible and returns the preferred style.
// lineWidth = -1 => no limit.
// Pre-conditions: str.length > 0.
// Post-conditions:
//    STYLE_PLAIN or STYLE_SINGLE => no \n are in the string.
//    STYLE_LITERAL => no lines are suitable for folding (or lineWidth is -1).
//    STYLE_FOLDED => a line > lineWidth and can be folded (and lineWidth != -1).
function chooseScalarStyle(string, singleLineOnly, indentPerLevel, lineWidth, testAmbiguousType) {
    var i;
    var char;
    var hasLineBreak = false;
    var hasFoldableLine = false; //  only checked if shouldTrackWidth
    var shouldTrackWidth = lineWidth !== -1;
    var previousLineBreak = -1; //  count the first line correctly
    var plain = isPlainSafeFirst(string.charCodeAt(0)) && !isWhitespace(string.charCodeAt(string.length - 1));
    if (singleLineOnly) {
        // Case: no block styles.
        // Check for disallowed characters to rule out plain and single.
        for (i = 0; i < string.length; i++) {
            char = string.charCodeAt(i);
            if (!isPrintable(char)) {
                return STYLE_DOUBLE;
            }
            plain = plain && isPlainSafe(char);
        }
    } else {
        // Case: block styles permitted.
        for (i = 0; i < string.length; i++) {
            char = string.charCodeAt(i);
            if (char === CHAR_LINE_FEED) {
                hasLineBreak = true;
                // Check if any line can be folded.
                if (shouldTrackWidth) {
                    // Foldable line = too long, and not more-indented.
                    hasFoldableLine = hasFoldableLine || i - previousLineBreak - 1 > lineWidth && string[previousLineBreak + 1] !== ' ';
                    previousLineBreak = i;
                }
            } else if (!isPrintable(char)) {
                return STYLE_DOUBLE;
            }
            plain = plain && isPlainSafe(char);
        }
        // in case the end is missing a \n
        hasFoldableLine = hasFoldableLine || shouldTrackWidth && (i - previousLineBreak - 1 > lineWidth && string[previousLineBreak + 1] !== ' ');
    }
    // Although every style can represent \n without escaping, prefer block styles
    // for multiline, since they're more readable and they don't add empty lines.
    // Also prefer folding a super-long line.
    if (!hasLineBreak && !hasFoldableLine) {
        // Strings interpretable as another type have to be quoted;
        // e.g. the string 'true' vs. the boolean true.
        return plain && !testAmbiguousType(string) ? STYLE_PLAIN : STYLE_SINGLE;
    }
    // Edge case: block indentation indicator can only have one digit.
    if (string[0] === ' ' && indentPerLevel > 9) {
        return STYLE_DOUBLE;
    }
    // At this point we know block styles are valid.
    // Prefer literal style unless we want to fold.
    return hasFoldableLine ? STYLE_FOLDED : STYLE_LITERAL;
}

// Note: line breaking/folding is implemented for only the folded style.
// NB. We drop the last trailing newline (if any) of a returned block scalar
//  since the dumper adds its own newline. This always works:
//    • No ending newline => unaffected; already using strip "-" chomping.
//    • Ending newline    => removed then restored.
//  Importantly, this keeps the "+" chomp indicator from gaining an extra line.
function writeScalar(state, string, level, iskey) {
    state.dump = (function () {
        if (string.length === 0) {
            return "''";
        }
        if (!state.noCompatMode && DEPRECATED_BOOLEANS_SYNTAX.indexOf(string) !== -1) {
            return "'" + string + "'";
        }
        var indent = state.indent * Math.max(1, level); //  no 0-indent scalars
        // As indentation gets deeper, let the width decrease monotonically
        // to the lower bound min(state.lineWidth, 40).
        // Note that this implies
        //  state.lineWidth ≤ 40 + state.indent: width is fixed at the lower bound.
        //  state.lineWidth > 40 + state.indent: width decreases until the lower bound.
        // This behaves better than a constant minimum width which disallows narrower options,
        // or an indent threshold which causes the width to suddenly increase.
        var lineWidth = state.lineWidth === -1 ? -1 : Math.max(Math.min(state.lineWidth, 40), state.lineWidth - indent);
        // Without knowing if keys are implicit/explicit, assume implicit for safety.
        // No block styles in flow mode.
        var singleLineOnly = iskey || state.flowLevel > -1 && level >= state.flowLevel;
        function testAmbiguity(string) {
            return testImplicitResolving(state, string);
        }
        
        switch (chooseScalarStyle(string, singleLineOnly, state.indent, lineWidth, testAmbiguity)) {
            case STYLE_PLAIN:
                return string;
            case STYLE_SINGLE:
                return "'" + string.replace(/'/g, "''") + "'";
            case STYLE_LITERAL:
                return '|' + blockHeader(string, state.indent) + dropEndingNewline(indentString(string, indent));
            case STYLE_FOLDED:
                return '>' + blockHeader(string, state.indent) + dropEndingNewline(indentString(foldString(string, lineWidth), indent));
            case STYLE_DOUBLE:
                return '"' + escapeString(string, lineWidth) + '"';
            default:
                throw new YAMLException('impossible error: invalid scalar style');
        }
    })();
}

// Pre-conditions: string is valid for a block scalar, 1 <= indentPerLevel <= 9.
function blockHeader(string, indentPerLevel) {
    var indentIndicator = string[0] === ' ' ? String(indentPerLevel) : '';
    // note the special case: the string '\n' counts as a "trailing" empty line.
    var clip = string[string.length - 1] === '\n';
    var keep = clip && (string[string.length - 2] === '\n' || string === '\n');
    var chomp = keep ? '+' : clip ? '' : '-';
    return indentIndicator + chomp + '\n';
}

// (See the note for writeScalar.)
function dropEndingNewline(string) {
    return string[string.length - 1] === '\n' ? string.slice(0, -1) : string;
}

// Note: a long line without a suitable break point will exceed the width limit.
// Pre-conditions: every char in str isPrintable, str.length > 0, width > 0.
function foldString(string, width) {
    // In folded style, $k$ consecutive newlines output as $k+1$ newlines—
    // unless they're before or after a more-indented line, or at the very
    // beginning or end, in which case $k$ maps to $k$.
    // Therefore, parse each chunk as newline(s) followed by a content line.
    var lineRe = /(\n+)([^\n]*)/g;
    // first line (possibly an empty line)
    var result = (function () {
        var nextLF = string.indexOf('\n');
        nextLF = nextLF !== -1 ? nextLF : string.length;
        lineRe.lastIndex = nextLF;
        return foldLine(string.slice(0, nextLF), width);
    })();
    // If we haven't reached the first content line yet, don't add an extra \n.
    var prevMoreIndented = string[0] === '\n' || string[0] === ' ';
    var moreIndented;
    // rest of the lines
    var match;
    while (match = lineRe.exec(string)) {
        var prefix = match[1], line = match[2];
        moreIndented = line[0] === ' ';
        result += prefix + (!prevMoreIndented && !moreIndented && line !== '' ? '\n' : '') + foldLine(line, width);
        prevMoreIndented = moreIndented;
    }
    return result;
}

// Greedy line breaking.
// Picks the longest line under the limit each time,
// otherwise settles for the shortest line over the limit.
// NB. More-indented lines *cannot* be folded, as that would add an extra \n.
function foldLine(line, width) {
    if (line === '' || line[0] === ' ') 
        return line;
    // Since a more-indented line adds a \n, breaks can't be followed by a space.
    var breakRe = / [^ ]/g; //  note: the match index will always be <= length-2.
    var match;
    // start is an inclusive index. end, curr, and next are exclusive.
    var start = 0, end, curr = 0, next = 0;
    var result = '';
    // Invariants: 0 <= start <= length-1.
    //   0 <= curr <= next <= max(0, length-2). curr - start <= width.
    // Inside the loop:
    //   A match implies length >= 2, so curr and next are <= length-2.
    while (match = breakRe.exec(line)) {
        next = match.index;
        // maintain invariant: curr - start <= width
        if (next - start > width) {
            end = curr > start ? curr : next; //  derive end <= length-2
            result += '\n' + line.slice(start, end);
            // skip the space that was output as \n
            start = end + 1; //  derive start <= length-1
        }
        curr = next;
    }
    // By the invariants, start <= length-1, so there is something left over.
    // It is either the whole string or a part starting from non-whitespace.
    result += '\n';
    // Insert a break if the remainder is too long and there is a break available.
    if (line.length - start > width && curr > start) {
        result += line.slice(start, curr) + '\n' + line.slice(curr + 1);
    } else {
        result += line.slice(start);
    }
    return result.slice(1); //  drop extra \n joiner
}

// Escapes a double-quoted string.
function escapeString(string) {
    var result = '';
    var char, nextChar;
    var escapeSeq;
    for (var i = 0;i < string.length; i++) {
        char = string.charCodeAt(i);
        // Check for surrogate pairs (reference Unicode 3.0 section "3.7 Surrogates").
        if (char >= 0xD800 && char <= 0xDBFF) { /* high surrogate */
            nextChar = string.charCodeAt(i + 1);
            if (nextChar >= 0xDC00 && nextChar <= 0xDFFF) { /* low surrogate */
                // Combine the surrogate pair and store it escaped.
                result += encodeHex((char - 0xD800) * 0x400 + nextChar - 0xDC00 + 0x10000);
                // Advance index one extra since we already used that char here.
                i++;
                continue;
            }
        }
        escapeSeq = ESCAPE_SEQUENCES[char];
        result += !escapeSeq && isPrintable(char) ? string[i] : escapeSeq || encodeHex(char);
    }
    return result;
}

function writeFlowSequence(state, level, object) {
    var _result = '', _tag = state.tag, index, length;
    for (index = 0, length = object.length; index < length; index += 1) {
        // Write only valid elements.
        if (writeNode(state, level, object[index], false, false)) {
            if (index !== 0) 
                _result += ',' + (!state.condenseFlow ? ' ' : '');
            _result += state.dump;
        }
    }
    state.tag = _tag;
    state.dump = '[' + _result + ']';
}

function writeBlockSequence(state, level, object, compact) {
    var _result = '', _tag = state.tag, index, length;
    for (index = 0, length = object.length; index < length; index += 1) {
        // Write only valid elements.
        if (writeNode(state, level + 1, object[index], true, true)) {
            if (!compact || index !== 0) {
                _result += generateNextLine(state, level);
            }
            if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
                _result += '-';
            } else {
                _result += '- ';
            }
            _result += state.dump;
        }
    }
    state.tag = _tag;
    state.dump = _result || '[]'; //  Empty sequence if no valid values.
}

function writeFlowMapping(state, level, object) {
    var _result = '', _tag = state.tag, objectKeyList = Object.keys(object), index, length, objectKey, objectValue, pairBuffer;
    for (index = 0, length = objectKeyList.length; index < length; index += 1) {
        pairBuffer = state.condenseFlow ? '"' : '';
        if (index !== 0) 
            pairBuffer += ', ';
        objectKey = objectKeyList[index];
        objectValue = object[objectKey];
        if (!writeNode(state, level, objectKey, false, false)) {
            continue; //  Skip this pair because of invalid key;
        }
        if (state.dump.length > 1024) 
            pairBuffer += '? ';
        pairBuffer += state.dump + (state.condenseFlow ? '"' : '') + ':' + (state.condenseFlow ? '' : ' ');
        if (!writeNode(state, level, objectValue, false, false)) {
            continue; //  Skip this pair because of invalid value.
        }
        pairBuffer += state.dump;
        // Both key and value are valid.
        _result += pairBuffer;
    }
    state.tag = _tag;
    state.dump = '{' + _result + '}';
}

function writeBlockMapping(state, level, object, compact) {
    var _result = '', _tag = state.tag, objectKeyList = Object.keys(object), index, length, objectKey, objectValue, explicitPair, pairBuffer;
    // Allow sorting keys so that the output file is deterministic
    if (state.sortKeys === true) {
        // Default sorting
        objectKeyList.sort();
    } else if (typeof state.sortKeys === 'function') {
        // Custom sort function
        objectKeyList.sort(state.sortKeys);
    } else if (state.sortKeys) {
        // Something is wrong
        throw new YAMLException('sortKeys must be a boolean or a function');
    }
    for (index = 0, length = objectKeyList.length; index < length; index += 1) {
        pairBuffer = '';
        if (!compact || index !== 0) {
            pairBuffer += generateNextLine(state, level);
        }
        objectKey = objectKeyList[index];
        objectValue = object[objectKey];
        if (!writeNode(state, level + 1, objectKey, true, true, true)) {
            continue; //  Skip this pair because of invalid key.
        }
        explicitPair = state.tag !== null && state.tag !== '?' || state.dump && state.dump.length > 1024;
        if (explicitPair) {
            if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
                pairBuffer += '?';
            } else {
                pairBuffer += '? ';
            }
        }
        pairBuffer += state.dump;
        if (explicitPair) {
            pairBuffer += generateNextLine(state, level);
        }
        if (!writeNode(state, level + 1, objectValue, true, explicitPair)) {
            continue; //  Skip this pair because of invalid value.
        }
        if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
            pairBuffer += ':';
        } else {
            pairBuffer += ': ';
        }
        pairBuffer += state.dump;
        // Both key and value are valid.
        _result += pairBuffer;
    }
    state.tag = _tag;
    state.dump = _result || '{}'; //  Empty mapping if no valid pairs.
}

function detectType(state, object, explicit) {
    var _result, typeList, index, length, type, style;
    typeList = explicit ? state.explicitTypes : state.implicitTypes;
    for (index = 0, length = typeList.length; index < length; index += 1) {
        type = typeList[index];
        if ((type.instanceOf || type.predicate) && (!type.instanceOf || typeof object === 'object' && object instanceof type.instanceOf) && (!type.predicate || type.predicate(object))) {
            state.tag = explicit ? type.tag : '?';
            if (type.represent) {
                style = state.styleMap[type.tag] || type.defaultStyle;
                if (_toString.call(type.represent) === '[object Function]') {
                    _result = type.represent(object, style);
                } else if (_hasOwnProperty.call(type.represent, style)) {
                    _result = type.represent[style](object, style);
                } else {
                    throw new YAMLException('!<' + type.tag + '> tag resolver accepts not "' + style + '" style');
                }
                state.dump = _result;
            }
            return true;
        }
    }
    return false;
}

// Serializes `object` and writes it to global `result`.
// Returns true on success, or false on invalid object.
//
function writeNode(state, level, object, block, compact, iskey) {
    state.tag = null;
    state.dump = object;
    if (!detectType(state, object, false)) {
        detectType(state, object, true);
    }
    var type = _toString.call(state.dump);
    if (block) {
        block = state.flowLevel < 0 || state.flowLevel > level;
    }
    var objectOrArray = type === '[object Object]' || type === '[object Array]', duplicateIndex, duplicate;
    if (objectOrArray) {
        duplicateIndex = state.duplicates.indexOf(object);
        duplicate = duplicateIndex !== -1;
    }
    if (state.tag !== null && state.tag !== '?' || duplicate || state.indent !== 2 && level > 0) {
        compact = false;
    }
    if (duplicate && state.usedDuplicates[duplicateIndex]) {
        state.dump = '*ref_' + duplicateIndex;
    } else {
        if (objectOrArray && duplicate && !state.usedDuplicates[duplicateIndex]) {
            state.usedDuplicates[duplicateIndex] = true;
        }
        if (type === '[object Object]') {
            if (block && Object.keys(state.dump).length !== 0) {
                writeBlockMapping(state, level, state.dump, compact);
                if (duplicate) {
                    state.dump = '&ref_' + duplicateIndex + state.dump;
                }
            } else {
                writeFlowMapping(state, level, state.dump);
                if (duplicate) {
                    state.dump = '&ref_' + duplicateIndex + ' ' + state.dump;
                }
            }
        } else if (type === '[object Array]') {
            if (block && state.dump.length !== 0) {
                writeBlockSequence(state, level, state.dump, compact);
                if (duplicate) {
                    state.dump = '&ref_' + duplicateIndex + state.dump;
                }
            } else {
                writeFlowSequence(state, level, state.dump);
                if (duplicate) {
                    state.dump = '&ref_' + duplicateIndex + ' ' + state.dump;
                }
            }
        } else if (type === '[object String]') {
            if (state.tag !== '?') {
                writeScalar(state, state.dump, level, iskey);
            }
        } else {
            if (state.skipInvalid) 
                return false;
            throw new YAMLException('unacceptable kind of an object to dump ' + type);
        }
        if (state.tag !== null && state.tag !== '?') {
            state.dump = '!<' + state.tag + '> ' + state.dump;
        }
    }
    return true;
}

function getDuplicateReferences(object, state) {
    var objects = [], duplicatesIndexes = [], index, length;
    inspectNode(object, objects, duplicatesIndexes);
    for (index = 0, length = duplicatesIndexes.length; index < length; index += 1) {
        state.duplicates.push(objects[duplicatesIndexes[index]]);
    }
    state.usedDuplicates = new Array(length);
}

function inspectNode(object, objects, duplicatesIndexes) {
    var objectKeyList, index, length;
    if (object !== null && typeof object === 'object') {
        index = objects.indexOf(object);
        if (index !== -1) {
            if (duplicatesIndexes.indexOf(index) === -1) {
                duplicatesIndexes.push(index);
            }
        } else {
            objects.push(object);
            if (Array.isArray(object)) {
                for (index = 0, length = object.length; index < length; index += 1) {
                    inspectNode(object[index], objects, duplicatesIndexes);
                }
            } else {
                objectKeyList = Object.keys(object);
                for (index = 0, length = objectKeyList.length; index < length; index += 1) {
                    inspectNode(object[objectKeyList[index]], objects, duplicatesIndexes);
                }
            }
        }
    }
}

function dump(input, options) {
    options = options || {};
    var state = new State(options);
    if (!state.noRefs) 
        getDuplicateReferences(input, state);
    if (writeNode(state, 0, input, true, true)) 
        return state.dump + '\n';
    return '';
}

function safeDump(input, options) {
    return dump(input, common.extend({
        schema: DEFAULT_SAFE_SCHEMA
    }, options));
}

module.exports.dump = dump;
module.exports.safeDump = safeDump;


}).call(this,require('_process'))
},{"./common":62,"./exception":64,"./schema/default_full":69,"./schema/default_safe":70,"_process":108}],64:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
// YAML error class. http://stackoverflow.com/questions/8458984
//
'use strict';
function YAMLException(reason, mark) {
    // Super constructor
    Error.call(this);
    this.name = 'YAMLException';
    this.reason = reason;
    this.mark = mark;
    this.message = (this.reason || '(unknown reason)') + (this.mark ? ' ' + this.mark.toString() : '');
    // Include stack trace in error object
    if (Error.captureStackTrace) {
        // Chrome and NodeJS
        Error.captureStackTrace(this, this.constructor);
    } else {
        // FF, IE 10+ and Safari 6+. Fallback for others
        this.stack = new Error().stack || '';
    }
}

// Inherit from Error
YAMLException.prototype = Object.create(Error.prototype);
YAMLException.prototype.constructor = YAMLException;
YAMLException.prototype.toString = function toString(compact) {
    var result = this.name + ': ';
    result += this.reason || '(unknown reason)';
    if (!compact && this.mark) {
        result += ' ' + this.mark.toString();
    }
    return result;
};
module.exports = YAMLException;


}).call(this,require('_process'))
},{"_process":108}],65:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
'use strict';
/*eslint-disable max-len,no-use-before-define*/
var common = require('./common');
var YAMLException = require('./exception');
var Mark = require('./mark');
var DEFAULT_SAFE_SCHEMA = require('./schema/default_safe');
var DEFAULT_FULL_SCHEMA = require('./schema/default_full');
var _hasOwnProperty = Object.prototype.hasOwnProperty;
var CONTEXT_FLOW_IN = 1;
var CONTEXT_FLOW_OUT = 2;
var CONTEXT_BLOCK_IN = 3;
var CONTEXT_BLOCK_OUT = 4;
var CHOMPING_CLIP = 1;
var CHOMPING_STRIP = 2;
var CHOMPING_KEEP = 3;
var PATTERN_NON_PRINTABLE = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
var PATTERN_FLOW_INDICATORS = /[,\[\]\{\}]/;
var PATTERN_TAG_HANDLE = /^(?:!|!!|![a-z\-]+!)$/i;
var PATTERN_TAG_URI = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function is_EOL(c) {
    return c === 0x0A || c === 0x0D; /* LF */ /* CR */
}

function is_WHITE_SPACE(c) {
    return c === 0x09 || c === 0x20; /* Tab */ /* Space */
}

function is_WS_OR_EOL(c) {
    return c === 0x09 || c === 0x20 || c === 0x0A || c === 0x0D; /* Tab */ /* Space */ /* LF */ /* CR */
}

function is_FLOW_INDICATOR(c) {
    return c === 0x2C || c === 0x5B || c === 0x5D || c === 0x7B || c === 0x7D; /* , */ /* [ */ /* ] */ /* { */ /* } */
}

function fromHexCode(c) {
    var lc;
    if (0x30 <= c && c <= 0x39) { /* 0 */ /* 9 */
        return c - 0x30;
    }
    /*eslint-disable no-bitwise*/
    lc = c | 0x20;
    if (0x61 <= lc && lc <= 0x66) { /* a */ /* f */
        return lc - 0x61 + 10;
    }
    return -1;
}

function escapedHexLen(c) {
    if (c === 0x78) { /* x */
        return 2;
    }
    if (c === 0x75) { /* u */
        return 4;
    }
    if (c === 0x55) { /* U */
        return 8;
    }
    return 0;
}

function fromDecimalCode(c) {
    if (0x30 <= c && c <= 0x39) { /* 0 */ /* 9 */
        return c - 0x30;
    }
    return -1;
}

function simpleEscapeSequence(c) {
    /* eslint-disable indent */
    return c === 0x30 ? '\x00' : c === 0x61 ? '\x07' : c === 0x62 ? '\x08' : c === 0x74 ? '\x09' : c === 0x09 ? '\x09' : c === 0x6E ? '\x0A' : c === 0x76 ? '\x0B' : c === 0x66 ? '\x0C' : c === 0x72 ? '\x0D' : c === 0x65 ? '\x1B' : c === 0x20 ? ' ' : c === 0x22 ? '\x22' : c === 0x2F ? '/' : c === 0x5C ? '\x5C' : c === 0x4E ? '\x85' : c === 0x5F ? '\xA0' : c === 0x4C ? '\u2028' : c === 0x50 ? '\u2029' : ''; /* 0 */ /* a */ /* b */ /* t */ /* Tab */ /* n */ /* v */ /* f */ /* r */ /* e */ /* Space */ /* " */ /* / */ /* \ */ /* N */ /* _ */ /* L */ /* P */
}

function charFromCodepoint(c) {
    if (c <= 0xFFFF) {
        return String.fromCharCode(c);
    }
    // Encode UTF-16 surrogate pair
    // https://en.wikipedia.org/wiki/UTF-16#Code_points_U.2B010000_to_U.2B10FFFF
    return String.fromCharCode((c - 0x010000 >> 10) + 0xD800, (c - 0x010000 & 0x03FF) + 0xDC00);
}

var simpleEscapeCheck = new Array(256); //  integer, for fast access
var simpleEscapeMap = new Array(256);
for (var i = 0;i < 256; i++) {
    simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0;
    simpleEscapeMap[i] = simpleEscapeSequence(i);
}
function State(input, options) {
    this.input = input;
    this.filename = options['filename'] || null;
    this.schema = options['schema'] || DEFAULT_FULL_SCHEMA;
    this.onWarning = options['onWarning'] || null;
    this.legacy = options['legacy'] || false;
    this.json = options['json'] || false;
    this.listener = options['listener'] || null;
    this.implicitTypes = this.schema.compiledImplicit;
    this.typeMap = this.schema.compiledTypeMap;
    this.length = input.length;
    this.position = 0;
    this.line = 0;
    this.lineStart = 0;
    this.lineIndent = 0;
    this.documents = [];
}

/*
  this.version;
  this.checkLineBreaks;
  this.tagMap;
  this.anchorMap;
  this.tag;
  this.anchor;
  this.kind;
  this.result;*/
function generateError(state, message) {
    return new YAMLException(message, new Mark(state.filename, state.input, state.position, state.line, state.position - state.lineStart));
}

function throwError(state, message) {
    throw generateError(state, message);
}

function throwWarning(state, message) {
    if (state.onWarning) {
        state.onWarning.call(null, generateError(state, message));
    }
}

var directiveHandlers = {
    YAML: function handleYamlDirective(state, name, args) {
        var match, major, minor;
        if (state.version !== null) {
            throwError(state, 'duplication of %YAML directive');
        }
        if (args.length !== 1) {
            throwError(state, 'YAML directive accepts exactly one argument');
        }
        match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);
        if (match === null) {
            throwError(state, 'ill-formed argument of the YAML directive');
        }
        major = parseInt(match[1], 10);
        minor = parseInt(match[2], 10);
        if (major !== 1) {
            throwError(state, 'unacceptable YAML version of the document');
        }
        state.version = args[0];
        state.checkLineBreaks = minor < 2;
        if (minor !== 1 && minor !== 2) {
            throwWarning(state, 'unsupported YAML version of the document');
        }
    },
    TAG: function handleTagDirective(state, name, args) {
        var handle, prefix;
        if (args.length !== 2) {
            throwError(state, 'TAG directive accepts exactly two arguments');
        }
        handle = args[0];
        prefix = args[1];
        if (!PATTERN_TAG_HANDLE.test(handle)) {
            throwError(state, 'ill-formed tag handle (first argument) of the TAG directive');
        }
        if (_hasOwnProperty.call(state.tagMap, handle)) {
            throwError(state, 'there is a previously declared suffix for "' + handle + '" tag handle');
        }
        if (!PATTERN_TAG_URI.test(prefix)) {
            throwError(state, 'ill-formed tag prefix (second argument) of the TAG directive');
        }
        state.tagMap[handle] = prefix;
    }
};
function captureSegment(state, start, end, checkJson) {
    var _position, _length, _character, _result;
    if (start < end) {
        _result = state.input.slice(start, end);
        if (checkJson) {
            for (_position = 0, _length = _result.length; _position < _length; _position += 1) {
                _character = _result.charCodeAt(_position);
                if (!(_character === 0x09 || 0x20 <= _character && _character <= 0x10FFFF)) {
                    throwError(state, 'expected valid JSON character');
                }
            }
        } else if (PATTERN_NON_PRINTABLE.test(_result)) {
            throwError(state, 'the stream contains non-printable characters');
        }
        state.result += _result;
    }
}

function mergeMappings(state, destination, source, overridableKeys) {
    var sourceKeys, key, index, quantity;
    if (!common.isObject(source)) {
        throwError(state, 'cannot merge mappings; the provided source object is unacceptable');
    }
    sourceKeys = Object.keys(source);
    for (index = 0, quantity = sourceKeys.length; index < quantity; index += 1) {
        key = sourceKeys[index];
        if (!_hasOwnProperty.call(destination, key)) {
            destination[key] = source[key];
            overridableKeys[key] = true;
        }
    }
}

function storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, startLine, startPos) {
    var index, quantity;
    keyNode = String(keyNode);
    if (_result === null) {
        _result = {};
    }
    if (keyTag === 'tag:yaml.org,2002:merge') {
        if (Array.isArray(valueNode)) {
            for (index = 0, quantity = valueNode.length; index < quantity; index += 1) {
                mergeMappings(state, _result, valueNode[index], overridableKeys);
            }
        } else {
            mergeMappings(state, _result, valueNode, overridableKeys);
        }
    } else {
        if (!state.json && !_hasOwnProperty.call(overridableKeys, keyNode) && _hasOwnProperty.call(_result, keyNode)) {
            state.line = startLine || state.line;
            state.position = startPos || state.position;
            throwError(state, 'duplicated mapping key');
        }
        _result[keyNode] = valueNode;
        delete overridableKeys[keyNode];
    }
    return _result;
}

function readLineBreak(state) {
    var ch;
    ch = state.input.charCodeAt(state.position);
    if (ch === 0x0A) { /* LF */
        state.position++;
    } else if (ch === 0x0D) { /* CR */
        state.position++;
        if (state.input.charCodeAt(state.position) === 0x0A) { /* LF */
            state.position++;
        }
    } else {
        throwError(state, 'a line break is expected');
    }
    state.line += 1;
    state.lineStart = state.position;
}

function skipSeparationSpace(state, allowComments, checkIndent) {
    var lineBreaks = 0, ch = state.input.charCodeAt(state.position);
    while (ch !== 0) {
        while (is_WHITE_SPACE(ch)) {
            ch = state.input.charCodeAt(++state.position);
        }
        if (allowComments && ch === 0x23) { /* # */
            do {
                ch = state.input.charCodeAt(++state.position);
            } while (ch !== 0x0A && ch !== 0x0D && ch !== 0); /* LF */ /* CR */
        }
        if (is_EOL(ch)) {
            readLineBreak(state);
            ch = state.input.charCodeAt(state.position);
            lineBreaks++;
            state.lineIndent = 0;
            while (ch === 0x20) { /* Space */
                state.lineIndent++;
                ch = state.input.charCodeAt(++state.position);
            }
        } else {
            break;
        }
    }
    if (checkIndent !== -1 && lineBreaks !== 0 && state.lineIndent < checkIndent) {
        throwWarning(state, 'deficient indentation');
    }
    return lineBreaks;
}

function testDocumentSeparator(state) {
    var _position = state.position, ch;
    ch = state.input.charCodeAt(_position);
    // Condition state.position === state.lineStart is tested
    // in parent on each call, for efficiency. No needs to test here again.
    if ((ch === 0x2D || ch === 0x2E) && ch === state.input.charCodeAt(_position + 1) && ch === state.input.charCodeAt(_position + 2)) { /* - */ /* . */
        _position += 3;
        ch = state.input.charCodeAt(_position);
        if (ch === 0 || is_WS_OR_EOL(ch)) {
            return true;
        }
    }
    return false;
}

function writeFoldedLines(state, count) {
    if (count === 1) {
        state.result += ' ';
    } else if (count > 1) {
        state.result += common.repeat('\n', count - 1);
    }
}

function readPlainScalar(state, nodeIndent, withinFlowCollection) {
    var preceding, following, captureStart, captureEnd, hasPendingContent, _line, _lineStart, _lineIndent, _kind = state.kind, _result = state.result, ch;
    ch = state.input.charCodeAt(state.position);
    if (is_WS_OR_EOL(ch) || is_FLOW_INDICATOR(ch) || ch === 0x23 || ch === 0x26 || ch === 0x2A || ch === 0x21 || ch === 0x7C || ch === 0x3E || ch === 0x27 || ch === 0x22 || ch === 0x25 || ch === 0x40 || ch === 0x60) { /* # */ /* & */ /* * */ /* ! */ /* | */ /* > */ /* ' */ /* " */ /* % */ /* @ */ /* ` */
        return false;
    }
    if (ch === 0x3F || ch === 0x2D) { /* ? */ /* - */
        following = state.input.charCodeAt(state.position + 1);
        if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) {
            return false;
        }
    }
    state.kind = 'scalar';
    state.result = '';
    captureStart = (captureEnd = state.position);
    hasPendingContent = false;
    while (ch !== 0) {
        if (ch === 0x3A) { /* : */
            following = state.input.charCodeAt(state.position + 1);
            if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) {
                break;
            }
        } else if (ch === 0x23) { /* # */
            preceding = state.input.charCodeAt(state.position - 1);
            if (is_WS_OR_EOL(preceding)) {
                break;
            }
        } else if (state.position === state.lineStart && testDocumentSeparator(state) || withinFlowCollection && is_FLOW_INDICATOR(ch)) {
            break;
        } else if (is_EOL(ch)) {
            _line = state.line;
            _lineStart = state.lineStart;
            _lineIndent = state.lineIndent;
            skipSeparationSpace(state, false, -1);
            if (state.lineIndent >= nodeIndent) {
                hasPendingContent = true;
                ch = state.input.charCodeAt(state.position);
                continue;
            } else {
                state.position = captureEnd;
                state.line = _line;
                state.lineStart = _lineStart;
                state.lineIndent = _lineIndent;
                break;
            }
        }
        if (hasPendingContent) {
            captureSegment(state, captureStart, captureEnd, false);
            writeFoldedLines(state, state.line - _line);
            captureStart = (captureEnd = state.position);
            hasPendingContent = false;
        }
        if (!is_WHITE_SPACE(ch)) {
            captureEnd = state.position + 1;
        }
        ch = state.input.charCodeAt(++state.position);
    }
    captureSegment(state, captureStart, captureEnd, false);
    if (state.result) {
        return true;
    }
    state.kind = _kind;
    state.result = _result;
    return false;
}

function readSingleQuotedScalar(state, nodeIndent) {
    var ch, captureStart, captureEnd;
    ch = state.input.charCodeAt(state.position);
    if (ch !== 0x27) { /* ' */
        return false;
    }
    state.kind = 'scalar';
    state.result = '';
    state.position++;
    captureStart = (captureEnd = state.position);
    while ((ch = state.input.charCodeAt(state.position)) !== 0) {
        if (ch === 0x27) { /* ' */
            captureSegment(state, captureStart, state.position, true);
            ch = state.input.charCodeAt(++state.position);
            if (ch === 0x27) { /* ' */
                captureStart = state.position;
                state.position++;
                captureEnd = state.position;
            } else {
                return true;
            }
        } else if (is_EOL(ch)) {
            captureSegment(state, captureStart, captureEnd, true);
            writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
            captureStart = (captureEnd = state.position);
        } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
            throwError(state, 'unexpected end of the document within a single quoted scalar');
        } else {
            state.position++;
            captureEnd = state.position;
        }
    }
    throwError(state, 'unexpected end of the stream within a single quoted scalar');
}

function readDoubleQuotedScalar(state, nodeIndent) {
    var captureStart, captureEnd, hexLength, hexResult, tmp, ch;
    ch = state.input.charCodeAt(state.position);
    if (ch !== 0x22) { /* " */
        return false;
    }
    state.kind = 'scalar';
    state.result = '';
    state.position++;
    captureStart = (captureEnd = state.position);
    while ((ch = state.input.charCodeAt(state.position)) !== 0) {
        if (ch === 0x22) { /* " */
            captureSegment(state, captureStart, state.position, true);
            state.position++;
            return true;
        } else if (ch === 0x5C) { /* \ */
            captureSegment(state, captureStart, state.position, true);
            ch = state.input.charCodeAt(++state.position);
            if (is_EOL(ch)) {
                skipSeparationSpace(state, false, nodeIndent);
            // TODO: rework to inline fn with no type cast?
            } else if (ch < 256 && simpleEscapeCheck[ch]) {
                state.result += simpleEscapeMap[ch];
                state.position++;
            } else if ((tmp = escapedHexLen(ch)) > 0) {
                hexLength = tmp;
                hexResult = 0;
                for (; hexLength > 0; hexLength--) {
                    ch = state.input.charCodeAt(++state.position);
                    if ((tmp = fromHexCode(ch)) >= 0) {
                        hexResult = (hexResult << 4) + tmp;
                    } else {
                        throwError(state, 'expected hexadecimal character');
                    }
                }
                state.result += charFromCodepoint(hexResult);
                state.position++;
            } else {
                throwError(state, 'unknown escape sequence');
            }
            captureStart = (captureEnd = state.position);
        } else if (is_EOL(ch)) {
            captureSegment(state, captureStart, captureEnd, true);
            writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
            captureStart = (captureEnd = state.position);
        } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
            throwError(state, 'unexpected end of the document within a double quoted scalar');
        } else {
            state.position++;
            captureEnd = state.position;
        }
    }
    throwError(state, 'unexpected end of the stream within a double quoted scalar');
}

function readFlowCollection(state, nodeIndent) {
    var readNext = true, _line, _tag = state.tag, _result, _anchor = state.anchor, following, terminator, isPair, isExplicitPair, isMapping, overridableKeys = {}, keyNode, keyTag, valueNode, ch;
    ch = state.input.charCodeAt(state.position);
    if (ch === 0x5B) { /* [ */
        terminator = 0x5D; /* ] */
        isMapping = false;
        _result = [];
    } else if (ch === 0x7B) { /* { */
        terminator = 0x7D; /* } */
        isMapping = true;
        _result = {};
    } else {
        return false;
    }
    if (state.anchor !== null) {
        state.anchorMap[state.anchor] = _result;
    }
    ch = state.input.charCodeAt(++state.position);
    while (ch !== 0) {
        skipSeparationSpace(state, true, nodeIndent);
        ch = state.input.charCodeAt(state.position);
        if (ch === terminator) {
            state.position++;
            state.tag = _tag;
            state.anchor = _anchor;
            state.kind = isMapping ? 'mapping' : 'sequence';
            state.result = _result;
            return true;
        } else if (!readNext) {
            throwError(state, 'missed comma between flow collection entries');
        }
        keyTag = (keyNode = (valueNode = null));
        isPair = (isExplicitPair = false);
        if (ch === 0x3F) { /* ? */
            following = state.input.charCodeAt(state.position + 1);
            if (is_WS_OR_EOL(following)) {
                isPair = (isExplicitPair = true);
                state.position++;
                skipSeparationSpace(state, true, nodeIndent);
            }
        }
        _line = state.line;
        composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
        keyTag = state.tag;
        keyNode = state.result;
        skipSeparationSpace(state, true, nodeIndent);
        ch = state.input.charCodeAt(state.position);
        if ((isExplicitPair || state.line === _line) && ch === 0x3A) { /* : */
            isPair = true;
            ch = state.input.charCodeAt(++state.position);
            skipSeparationSpace(state, true, nodeIndent);
            composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
            valueNode = state.result;
        }
        if (isMapping) {
            storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode);
        } else if (isPair) {
            _result.push(storeMappingPair(state, null, overridableKeys, keyTag, keyNode, valueNode));
        } else {
            _result.push(keyNode);
        }
        skipSeparationSpace(state, true, nodeIndent);
        ch = state.input.charCodeAt(state.position);
        if (ch === 0x2C) { /* , */
            readNext = true;
            ch = state.input.charCodeAt(++state.position);
        } else {
            readNext = false;
        }
    }
    throwError(state, 'unexpected end of the stream within a flow collection');
}

function readBlockScalar(state, nodeIndent) {
    var captureStart, folding, chomping = CHOMPING_CLIP, didReadContent = false, detectedIndent = false, textIndent = nodeIndent, emptyLines = 0, atMoreIndented = false, tmp, ch;
    ch = state.input.charCodeAt(state.position);
    if (ch === 0x7C) { /* | */
        folding = false;
    } else if (ch === 0x3E) { /* > */
        folding = true;
    } else {
        return false;
    }
    state.kind = 'scalar';
    state.result = '';
    while (ch !== 0) {
        ch = state.input.charCodeAt(++state.position);
        if (ch === 0x2B || ch === 0x2D) { /* + */ /* - */
            if (CHOMPING_CLIP === chomping) {
                chomping = ch === 0x2B ? CHOMPING_KEEP : CHOMPING_STRIP; /* + */
            } else {
                throwError(state, 'repeat of a chomping mode identifier');
            }
        } else if ((tmp = fromDecimalCode(ch)) >= 0) {
            if (tmp === 0) {
                throwError(state, 'bad explicit indentation width of a block scalar; it cannot be less than one');
            } else if (!detectedIndent) {
                textIndent = nodeIndent + tmp - 1;
                detectedIndent = true;
            } else {
                throwError(state, 'repeat of an indentation width identifier');
            }
        } else {
            break;
        }
    }
    if (is_WHITE_SPACE(ch)) {
        do {
            ch = state.input.charCodeAt(++state.position);
        } while (is_WHITE_SPACE(ch));
        if (ch === 0x23) { /* # */
            do {
                ch = state.input.charCodeAt(++state.position);
            } while (!is_EOL(ch) && ch !== 0);
        }
    }
    while (ch !== 0) {
        readLineBreak(state);
        state.lineIndent = 0;
        ch = state.input.charCodeAt(state.position);
        while ((!detectedIndent || state.lineIndent < textIndent) && ch === 0x20) { /* Space */
            state.lineIndent++;
            ch = state.input.charCodeAt(++state.position);
        }
        if (!detectedIndent && state.lineIndent > textIndent) {
            textIndent = state.lineIndent;
        }
        if (is_EOL(ch)) {
            emptyLines++;
            continue;
        }
        // End of the scalar.
        if (state.lineIndent < textIndent) {
            // Perform the chomping.
            if (chomping === CHOMPING_KEEP) {
                state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);
            } else if (chomping === CHOMPING_CLIP) {
                if (didReadContent) { //  i.e. only if the scalar is not empty.
                    state.result += '\n';
                }
            }
            // Break this `while` cycle and go to the funciton's epilogue.
            break;
        }
        // Folded style: use fancy rules to handle line breaks.
        if (folding) {
            // Lines starting with white space characters (more-indented lines) are not folded.
            if (is_WHITE_SPACE(ch)) {
                atMoreIndented = true;
                // except for the first content line (cf. Example 8.1)
                state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);
            // End of more-indented block.
            } else if (atMoreIndented) {
                atMoreIndented = false;
                state.result += common.repeat('\n', emptyLines + 1);
            // Just one line break - perceive as the same line.
            } else if (emptyLines === 0) {
                if (didReadContent) { //  i.e. only if we have already read some scalar content.
                    state.result += ' ';
                }
            } else {
                // Several line breaks - perceive as different lines.
                state.result += common.repeat('\n', emptyLines);
            }
        } else {
            // Literal style: just add exact number of line breaks between content lines.
            // Keep all line breaks except the header line break.
            state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);
        }
        didReadContent = true;
        detectedIndent = true;
        emptyLines = 0;
        captureStart = state.position;
        while (!is_EOL(ch) && ch !== 0) {
            ch = state.input.charCodeAt(++state.position);
        }
        captureSegment(state, captureStart, state.position, false);
    }
    return true;
}

function readBlockSequence(state, nodeIndent) {
    var _line, _tag = state.tag, _anchor = state.anchor, _result = [], following, detected = false, ch;
    if (state.anchor !== null) {
        state.anchorMap[state.anchor] = _result;
    }
    ch = state.input.charCodeAt(state.position);
    while (ch !== 0) {
        if (ch !== 0x2D) { /* - */
            break;
        }
        following = state.input.charCodeAt(state.position + 1);
        if (!is_WS_OR_EOL(following)) {
            break;
        }
        detected = true;
        state.position++;
        if (skipSeparationSpace(state, true, -1)) {
            if (state.lineIndent <= nodeIndent) {
                _result.push(null);
                ch = state.input.charCodeAt(state.position);
                continue;
            }
        }
        _line = state.line;
        composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true);
        _result.push(state.result);
        skipSeparationSpace(state, true, -1);
        ch = state.input.charCodeAt(state.position);
        if ((state.line === _line || state.lineIndent > nodeIndent) && ch !== 0) {
            throwError(state, 'bad indentation of a sequence entry');
        } else if (state.lineIndent < nodeIndent) {
            break;
        }
    }
    if (detected) {
        state.tag = _tag;
        state.anchor = _anchor;
        state.kind = 'sequence';
        state.result = _result;
        return true;
    }
    return false;
}

function readBlockMapping(state, nodeIndent, flowIndent) {
    var following, allowCompact, _line, _pos, _tag = state.tag, _anchor = state.anchor, _result = {}, overridableKeys = {}, keyTag = null, keyNode = null, valueNode = null, atExplicitKey = false, detected = false, ch;
    if (state.anchor !== null) {
        state.anchorMap[state.anchor] = _result;
    }
    ch = state.input.charCodeAt(state.position);
    while (ch !== 0) {
        following = state.input.charCodeAt(state.position + 1);
        _line = state.line; //  Save the current line.
        _pos = state.position;
        //
        // Explicit notation case. There are two separate blocks:
        // first for the key (denoted by "?") and second for the value (denoted by ":")
        //
        if ((ch === 0x3F || ch === 0x3A) && is_WS_OR_EOL(following)) { /* ? */ /* : */
            if (ch === 0x3F) { /* ? */
                if (atExplicitKey) {
                    storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
                    keyTag = (keyNode = (valueNode = null));
                }
                detected = true;
                atExplicitKey = true;
                allowCompact = true;
            } else if (atExplicitKey) {
                // i.e. 0x3A/* : */ === character after the explicit key.
                atExplicitKey = false;
                allowCompact = true;
            } else {
                throwError(state, 'incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line');
            }
            state.position += 1;
            ch = following;
        //
        // Implicit notation case. Flow-style node as the key first, then ":", and the value.
        //
        } else if (composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)) {
            if (state.line === _line) {
                ch = state.input.charCodeAt(state.position);
                while (is_WHITE_SPACE(ch)) {
                    ch = state.input.charCodeAt(++state.position);
                }
                if (ch === 0x3A) { /* : */
                    ch = state.input.charCodeAt(++state.position);
                    if (!is_WS_OR_EOL(ch)) {
                        throwError(state, 'a whitespace character is expected after the key-value separator within a block mapping');
                    }
                    if (atExplicitKey) {
                        storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
                        keyTag = (keyNode = (valueNode = null));
                    }
                    detected = true;
                    atExplicitKey = false;
                    allowCompact = false;
                    keyTag = state.tag;
                    keyNode = state.result;
                } else if (detected) {
                    throwError(state, 'can not read an implicit mapping pair; a colon is missed');
                } else {
                    state.tag = _tag;
                    state.anchor = _anchor;
                    return true; //  Keep the result of `composeNode`.
                }
            } else if (detected) {
                throwError(state, 'can not read a block mapping entry; a multiline key may not be an implicit key');
            } else {
                state.tag = _tag;
                state.anchor = _anchor;
                return true; //  Keep the result of `composeNode`.
            }
        } else {
            break; //  Reading is done. Go to the epilogue.
        }
        //
        // Common reading code for both explicit and implicit notations.
        //
        if (state.line === _line || state.lineIndent > nodeIndent) {
            if (composeNode(state, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)) {
                if (atExplicitKey) {
                    keyNode = state.result;
                } else {
                    valueNode = state.result;
                }
            }
            if (!atExplicitKey) {
                storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _line, _pos);
                keyTag = (keyNode = (valueNode = null));
            }
            skipSeparationSpace(state, true, -1);
            ch = state.input.charCodeAt(state.position);
        }
        if (state.lineIndent > nodeIndent && ch !== 0) {
            throwError(state, 'bad indentation of a mapping entry');
        } else if (state.lineIndent < nodeIndent) {
            break;
        }
    }
    //
    // Epilogue.
    //
    // Special case: last mapping's node contains only the key in explicit notation.
    if (atExplicitKey) {
        storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
    }
    // Expose the resulting mapping.
    if (detected) {
        state.tag = _tag;
        state.anchor = _anchor;
        state.kind = 'mapping';
        state.result = _result;
    }
    return detected;
}

function readTagProperty(state) {
    var _position, isVerbatim = false, isNamed = false, tagHandle, tagName, ch;
    ch = state.input.charCodeAt(state.position);
    if (ch !== 0x21)  /* ! */
        return false;
    if (state.tag !== null) {
        throwError(state, 'duplication of a tag property');
    }
    ch = state.input.charCodeAt(++state.position);
    if (ch === 0x3C) { /* < */
        isVerbatim = true;
        ch = state.input.charCodeAt(++state.position);
    } else if (ch === 0x21) { /* ! */
        isNamed = true;
        tagHandle = '!!';
        ch = state.input.charCodeAt(++state.position);
    } else {
        tagHandle = '!';
    }
    _position = state.position;
    if (isVerbatim) {
        do {
            ch = state.input.charCodeAt(++state.position);
        } while (ch !== 0 && ch !== 0x3E); /* > */
        if (state.position < state.length) {
            tagName = state.input.slice(_position, state.position);
            ch = state.input.charCodeAt(++state.position);
        } else {
            throwError(state, 'unexpected end of the stream within a verbatim tag');
        }
    } else {
        while (ch !== 0 && !is_WS_OR_EOL(ch)) {
            if (ch === 0x21) { /* ! */
                if (!isNamed) {
                    tagHandle = state.input.slice(_position - 1, state.position + 1);
                    if (!PATTERN_TAG_HANDLE.test(tagHandle)) {
                        throwError(state, 'named tag handle cannot contain such characters');
                    }
                    isNamed = true;
                    _position = state.position + 1;
                } else {
                    throwError(state, 'tag suffix cannot contain exclamation marks');
                }
            }
            ch = state.input.charCodeAt(++state.position);
        }
        tagName = state.input.slice(_position, state.position);
        if (PATTERN_FLOW_INDICATORS.test(tagName)) {
            throwError(state, 'tag suffix cannot contain flow indicator characters');
        }
    }
    if (tagName && !PATTERN_TAG_URI.test(tagName)) {
        throwError(state, 'tag name cannot contain such characters: ' + tagName);
    }
    if (isVerbatim) {
        state.tag = tagName;
    } else if (_hasOwnProperty.call(state.tagMap, tagHandle)) {
        state.tag = state.tagMap[tagHandle] + tagName;
    } else if (tagHandle === '!') {
        state.tag = '!' + tagName;
    } else if (tagHandle === '!!') {
        state.tag = 'tag:yaml.org,2002:' + tagName;
    } else {
        throwError(state, 'undeclared tag handle "' + tagHandle + '"');
    }
    return true;
}

function readAnchorProperty(state) {
    var _position, ch;
    ch = state.input.charCodeAt(state.position);
    if (ch !== 0x26)  /* & */
        return false;
    if (state.anchor !== null) {
        throwError(state, 'duplication of an anchor property');
    }
    ch = state.input.charCodeAt(++state.position);
    _position = state.position;
    while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
        ch = state.input.charCodeAt(++state.position);
    }
    if (state.position === _position) {
        throwError(state, 'name of an anchor node must contain at least one character');
    }
    state.anchor = state.input.slice(_position, state.position);
    return true;
}

function readAlias(state) {
    var _position, alias, ch;
    ch = state.input.charCodeAt(state.position);
    if (ch !== 0x2A)  /* * */
        return false;
    ch = state.input.charCodeAt(++state.position);
    _position = state.position;
    while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
        ch = state.input.charCodeAt(++state.position);
    }
    if (state.position === _position) {
        throwError(state, 'name of an alias node must contain at least one character');
    }
    alias = state.input.slice(_position, state.position);
    if (!state.anchorMap.hasOwnProperty(alias)) {
        throwError(state, 'unidentified alias "' + alias + '"');
    }
    state.result = state.anchorMap[alias];
    skipSeparationSpace(state, true, -1);
    return true;
}

function composeNode(state, parentIndent, nodeContext, allowToSeek, allowCompact) {
    var allowBlockStyles, allowBlockScalars, allowBlockCollections, indentStatus = 1, atNewLine = false, hasContent = false, typeIndex, typeQuantity, type, flowIndent, blockIndent; //  1: this>parent, 0: this=parent, -1: this<parent
    if (state.listener !== null) {
        state.listener('open', state);
    }
    state.tag = null;
    state.anchor = null;
    state.kind = null;
    state.result = null;
    allowBlockStyles = (allowBlockScalars = (allowBlockCollections = CONTEXT_BLOCK_OUT === nodeContext || CONTEXT_BLOCK_IN === nodeContext));
    if (allowToSeek) {
        if (skipSeparationSpace(state, true, -1)) {
            atNewLine = true;
            if (state.lineIndent > parentIndent) {
                indentStatus = 1;
            } else if (state.lineIndent === parentIndent) {
                indentStatus = 0;
            } else if (state.lineIndent < parentIndent) {
                indentStatus = -1;
            }
        }
    }
    if (indentStatus === 1) {
        while (readTagProperty(state) || readAnchorProperty(state)) {
            if (skipSeparationSpace(state, true, -1)) {
                atNewLine = true;
                allowBlockCollections = allowBlockStyles;
                if (state.lineIndent > parentIndent) {
                    indentStatus = 1;
                } else if (state.lineIndent === parentIndent) {
                    indentStatus = 0;
                } else if (state.lineIndent < parentIndent) {
                    indentStatus = -1;
                }
            } else {
                allowBlockCollections = false;
            }
        }
    }
    if (allowBlockCollections) {
        allowBlockCollections = atNewLine || allowCompact;
    }
    if (indentStatus === 1 || CONTEXT_BLOCK_OUT === nodeContext) {
        if (CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext) {
            flowIndent = parentIndent;
        } else {
            flowIndent = parentIndent + 1;
        }
        blockIndent = state.position - state.lineStart;
        if (indentStatus === 1) {
            if (allowBlockCollections && (readBlockSequence(state, blockIndent) || readBlockMapping(state, blockIndent, flowIndent)) || readFlowCollection(state, flowIndent)) {
                hasContent = true;
            } else {
                if (allowBlockScalars && readBlockScalar(state, flowIndent) || readSingleQuotedScalar(state, flowIndent) || readDoubleQuotedScalar(state, flowIndent)) {
                    hasContent = true;
                } else if (readAlias(state)) {
                    hasContent = true;
                    if (state.tag !== null || state.anchor !== null) {
                        throwError(state, 'alias node should not have any properties');
                    }
                } else if (readPlainScalar(state, flowIndent, CONTEXT_FLOW_IN === nodeContext)) {
                    hasContent = true;
                    if (state.tag === null) {
                        state.tag = '?';
                    }
                }
                if (state.anchor !== null) {
                    state.anchorMap[state.anchor] = state.result;
                }
            }
        } else if (indentStatus === 0) {
            // Special case: block sequences are allowed to have same indentation level as the parent.
            // http://www.yaml.org/spec/1.2/spec.html#id2799784
            hasContent = allowBlockCollections && readBlockSequence(state, blockIndent);
        }
    }
    if (state.tag !== null && state.tag !== '!') {
        if (state.tag === '?') {
            for (typeIndex = 0, typeQuantity = state.implicitTypes.length; typeIndex < typeQuantity; typeIndex += 1) {
                type = state.implicitTypes[typeIndex];
                // Implicit resolving is not allowed for non-scalar types, and '?'
                // non-specific tag is only assigned to plain scalars. So, it isn't
                // needed to check for 'kind' conformity.
                if (type.resolve(state.result)) { //  `state.result` updated in resolver if matched
                    state.result = type.construct(state.result);
                    state.tag = type.tag;
                    if (state.anchor !== null) {
                        state.anchorMap[state.anchor] = state.result;
                    }
                    break;
                }
            }
        } else if (_hasOwnProperty.call(state.typeMap[state.kind || 'fallback'], state.tag)) {
            type = state.typeMap[state.kind || 'fallback'][state.tag];
            if (state.result !== null && type.kind !== state.kind) {
                throwError(state, 'unacceptable node kind for !<' + state.tag + '> tag; it should be "' + type.kind + '", not "' + state.kind + '"');
            }
            if (!type.resolve(state.result)) { //  `state.result` updated in resolver if matched
                throwError(state, 'cannot resolve a node with !<' + state.tag + '> explicit tag');
            } else {
                state.result = type.construct(state.result);
                if (state.anchor !== null) {
                    state.anchorMap[state.anchor] = state.result;
                }
            }
        } else {
            throwError(state, 'unknown tag !<' + state.tag + '>');
        }
    }
    if (state.listener !== null) {
        state.listener('close', state);
    }
    return state.tag !== null || state.anchor !== null || hasContent;
}

function readDocument(state) {
    var documentStart = state.position, _position, directiveName, directiveArgs, hasDirectives = false, ch;
    state.version = null;
    state.checkLineBreaks = state.legacy;
    state.tagMap = {};
    state.anchorMap = {};
    while ((ch = state.input.charCodeAt(state.position)) !== 0) {
        skipSeparationSpace(state, true, -1);
        ch = state.input.charCodeAt(state.position);
        if (state.lineIndent > 0 || ch !== 0x25) { /* % */
            break;
        }
        hasDirectives = true;
        ch = state.input.charCodeAt(++state.position);
        _position = state.position;
        while (ch !== 0 && !is_WS_OR_EOL(ch)) {
            ch = state.input.charCodeAt(++state.position);
        }
        directiveName = state.input.slice(_position, state.position);
        directiveArgs = [];
        if (directiveName.length < 1) {
            throwError(state, 'directive name must not be less than one character in length');
        }
        while (ch !== 0) {
            while (is_WHITE_SPACE(ch)) {
                ch = state.input.charCodeAt(++state.position);
            }
            if (ch === 0x23) { /* # */
                do {
                    ch = state.input.charCodeAt(++state.position);
                } while (ch !== 0 && !is_EOL(ch));
                break;
            }
            if (is_EOL(ch)) 
                break;
            _position = state.position;
            while (ch !== 0 && !is_WS_OR_EOL(ch)) {
                ch = state.input.charCodeAt(++state.position);
            }
            directiveArgs.push(state.input.slice(_position, state.position));
        }
        if (ch !== 0) 
            readLineBreak(state);
        if (_hasOwnProperty.call(directiveHandlers, directiveName)) {
            directiveHandlers[directiveName](state, directiveName, directiveArgs);
        } else {
            throwWarning(state, 'unknown document directive "' + directiveName + '"');
        }
    }
    skipSeparationSpace(state, true, -1);
    if (state.lineIndent === 0 && state.input.charCodeAt(state.position) === 0x2D && state.input.charCodeAt(state.position + 1) === 0x2D && state.input.charCodeAt(state.position + 2) === 0x2D) { /* - */ /* - */ /* - */
        state.position += 3;
        skipSeparationSpace(state, true, -1);
    } else if (hasDirectives) {
        throwError(state, 'directives end mark is expected');
    }
    composeNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true);
    skipSeparationSpace(state, true, -1);
    if (state.checkLineBreaks && PATTERN_NON_ASCII_LINE_BREAKS.test(state.input.slice(documentStart, state.position))) {
        throwWarning(state, 'non-ASCII line breaks are interpreted as content');
    }
    state.documents.push(state.result);
    if (state.position === state.lineStart && testDocumentSeparator(state)) {
        if (state.input.charCodeAt(state.position) === 0x2E) { /* . */
            state.position += 3;
            skipSeparationSpace(state, true, -1);
        }
        return;
    }
    if (state.position < state.length - 1) {
        throwError(state, 'end of the stream or a document separator is expected');
    } else {
        return;
    }
}

function loadDocuments(input, options) {
    input = String(input);
    options = options || {};
    if (input.length !== 0) {
        // Add tailing `\n` if not exists
        if (input.charCodeAt(input.length - 1) !== 0x0A && input.charCodeAt(input.length - 1) !== 0x0D) { /* LF */ /* CR */
            input += '\n';
        }
        // Strip BOM
        if (input.charCodeAt(0) === 0xFEFF) {
            input = input.slice(1);
        }
    }
    var state = new State(input, options);
    // Use 0 as string terminator. That significantly simplifies bounds check.
    state.input += '\0';
    while (state.input.charCodeAt(state.position) === 0x20) { /* Space */
        state.lineIndent += 1;
        state.position += 1;
    }
    while (state.position < state.length - 1) {
        readDocument(state);
    }
    return state.documents;
}

function loadAll(input, iterator, options) {
    var documents = loadDocuments(input, options), index, length;
    if (typeof iterator !== 'function') {
        return documents;
    }
    for (index = 0, length = documents.length; index < length; index += 1) {
        iterator(documents[index]);
    }
}

function load(input, options) {
    var documents = loadDocuments(input, options);
    if (documents.length === 0) {
        /*eslint-disable no-undefined*/
        return undefined;
    } else if (documents.length === 1) {
        return documents[0];
    }
    throw new YAMLException('expected a single document in the stream, but found more');
}

function safeLoadAll(input, output, options) {
    if (typeof output === 'function') {
        loadAll(input, output, common.extend({
            schema: DEFAULT_SAFE_SCHEMA
        }, options));
    } else {
        return loadAll(input, common.extend({
            schema: DEFAULT_SAFE_SCHEMA
        }, options));
    }
}

function safeLoad(input, options) {
    return load(input, common.extend({
        schema: DEFAULT_SAFE_SCHEMA
    }, options));
}

module.exports.loadAll = loadAll;
module.exports.load = load;
module.exports.safeLoadAll = safeLoadAll;
module.exports.safeLoad = safeLoad;


}).call(this,require('_process'))
},{"./common":62,"./exception":64,"./mark":66,"./schema/default_full":69,"./schema/default_safe":70,"_process":108}],66:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
'use strict';
var common = require('./common');
function Mark(name, buffer, position, line, column) {
    this.name = name;
    this.buffer = buffer;
    this.position = position;
    this.line = line;
    this.column = column;
}

Mark.prototype.getSnippet = function getSnippet(indent, maxLength) {
    var head, start, tail, end, snippet;
    if (!this.buffer) 
        return null;
    indent = indent || 4;
    maxLength = maxLength || 75;
    head = '';
    start = this.position;
    while (start > 0 && '\x00\r\n\x85\u2028\u2029'.indexOf(this.buffer.charAt(start - 1)) === -1) {
        start -= 1;
        if (this.position - start > maxLength / 2 - 1) {
            head = ' ... ';
            start += 5;
            break;
        }
    }
    tail = '';
    end = this.position;
    while (end < this.buffer.length && '\x00\r\n\x85\u2028\u2029'.indexOf(this.buffer.charAt(end)) === -1) {
        end += 1;
        if (end - this.position > maxLength / 2 - 1) {
            tail = ' ... ';
            end -= 5;
            break;
        }
    }
    snippet = this.buffer.slice(start, end);
    return common.repeat(' ', indent) + head + snippet + tail + '\n' + common.repeat(' ', indent + this.position - start + head.length) + '^';
};
Mark.prototype.toString = function toString(compact) {
    var snippet, where = '';
    if (this.name) {
        where += 'in "' + this.name + '" ';
    }
    where += 'at line ' + (this.line + 1) + ', column ' + (this.column + 1);
    if (!compact) {
        snippet = this.getSnippet();
        if (snippet) {
            where += ':\n' + snippet;
        }
    }
    return where;
};
module.exports = Mark;


}).call(this,require('_process'))
},{"./common":62,"_process":108}],67:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
'use strict';
/*eslint-disable max-len*/
var common = require('./common');
var YAMLException = require('./exception');
var Type = require('./type');
function compileList(schema, name, result) {
    var exclude = [];
    schema.include.forEach(function (includedSchema) {
        result = compileList(includedSchema, name, result);
    });
    schema[name].forEach(function (currentType) {
        result.forEach(function (previousType, previousIndex) {
            if (previousType.tag === currentType.tag && previousType.kind === currentType.kind) {
                exclude.push(previousIndex);
            }
        });
        result.push(currentType);
    });
    return result.filter(function (type, index) {
        return exclude.indexOf(index) === -1;
    });
}

function compileMap() { /* lists... */
    var result = {
        scalar: {},
        sequence: {},
        mapping: {},
        fallback: {}
    }, index, length;
    function collectType(type) {
        result[type.kind][type.tag] = (result['fallback'][type.tag] = type);
    }
    
    for (index = 0, length = arguments.length; index < length; index += 1) {
        arguments[index].forEach(collectType);
    }
    return result;
}

function Schema(definition) {
    this.include = definition.include || [];
    this.implicit = definition.implicit || [];
    this.explicit = definition.explicit || [];
    this.implicit.forEach(function (type) {
        if (type.loadKind && type.loadKind !== 'scalar') {
            throw new YAMLException('There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.');
        }
    });
    this.compiledImplicit = compileList(this, 'implicit', []);
    this.compiledExplicit = compileList(this, 'explicit', []);
    this.compiledTypeMap = compileMap(this.compiledImplicit, this.compiledExplicit);
}

Schema.DEFAULT = null;
Schema.create = function createSchema() {
    var schemas, types;
    switch (arguments.length) {
        case 1:
            schemas = Schema.DEFAULT;
            types = arguments[0];
            break;
        case 2:
            schemas = arguments[0];
            types = arguments[1];
            break;
        default:
            throw new YAMLException('Wrong number of arguments for Schema.create function');
    }
    schemas = common.toArray(schemas);
    types = common.toArray(types);
    if (!schemas.every(function (schema) {
        return schema instanceof Schema;
    })) {
        throw new YAMLException('Specified list of super schemas (or a single Schema object) contains a non-Schema object.');
    }
    if (!types.every(function (type) {
        return type instanceof Type;
    })) {
        throw new YAMLException('Specified list of YAML types (or a single Type object) contains a non-Type object.');
    }
    return new Schema({
        include: schemas,
        explicit: types
    });
};
module.exports = Schema;


}).call(this,require('_process'))
},{"./common":62,"./exception":64,"./type":73,"_process":108}],68:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
// Standard YAML's Core schema.
// http://www.yaml.org/spec/1.2/spec.html#id2804923
//
// NOTE: JS-YAML does not support schema-specific tag resolution restrictions.
// So, Core schema has no distinctions from JSON schema is JS-YAML.
'use strict';
var Schema = require('../schema');
module.exports = new Schema({
    include: [require('./json')]
});


}).call(this,require('_process'))
},{"../schema":67,"./json":72,"_process":108}],69:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
// JS-YAML's default schema for `load` function.
// It is not described in the YAML specification.
//
// This schema is based on JS-YAML's default safe schema and includes
// JavaScript-specific types: !!js/undefined, !!js/regexp and !!js/function.
//
// Also this schema is used as default base schema at `Schema.create` function.
'use strict';
var Schema = require('../schema');
module.exports = (Schema.DEFAULT = new Schema({
    include: [require('./default_safe')],
    explicit: [require('../type/js/undefined'),require('../type/js/regexp'),require('../type/js/function')]
}));


}).call(this,require('_process'))
},{"../schema":67,"../type/js/function":78,"../type/js/regexp":79,"../type/js/undefined":80,"./default_safe":70,"_process":108}],70:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
// JS-YAML's default schema for `safeLoad` function.
// It is not described in the YAML specification.
//
// This schema is based on standard YAML's Core schema and includes most of
// extra types described at YAML tag repository. (http://yaml.org/type/)
'use strict';
var Schema = require('../schema');
module.exports = new Schema({
    include: [require('./core')],
    implicit: [require('../type/timestamp'),require('../type/merge')],
    explicit: [require('../type/binary'),require('../type/omap'),require('../type/pairs'),
        require('../type/set')]
});


}).call(this,require('_process'))
},{"../schema":67,"../type/binary":74,"../type/merge":82,"../type/omap":84,"../type/pairs":85,"../type/set":87,"../type/timestamp":89,"./core":68,"_process":108}],71:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
// Standard YAML's Failsafe schema.
// http://www.yaml.org/spec/1.2/spec.html#id2802346
'use strict';
var Schema = require('../schema');
module.exports = new Schema({
    explicit: [require('../type/str'),require('../type/seq'),require('../type/map')]
});


}).call(this,require('_process'))
},{"../schema":67,"../type/map":81,"../type/seq":86,"../type/str":88,"_process":108}],72:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
// Standard YAML's JSON schema.
// http://www.yaml.org/spec/1.2/spec.html#id2803231
//
// NOTE: JS-YAML does not support schema-specific tag resolution restrictions.
// So, this schema is not such strict as defined in the YAML specification.
// It allows numbers in binary notaion, use `Null` and `NULL` as `null`, etc.
'use strict';
var Schema = require('../schema');
module.exports = new Schema({
    include: [require('./failsafe')],
    implicit: [require('../type/null'),require('../type/bool'),require('../type/int'),
        require('../type/float')]
});


}).call(this,require('_process'))
},{"../schema":67,"../type/bool":75,"../type/float":76,"../type/int":77,"../type/null":83,"./failsafe":71,"_process":108}],73:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
'use strict';
var YAMLException = require('./exception');
var TYPE_CONSTRUCTOR_OPTIONS = ['kind','resolve','construct','instanceOf','predicate',
    'represent','defaultStyle','styleAliases'];
var YAML_NODE_KINDS = ['scalar','sequence','mapping'];
function compileStyleAliases(map) {
    var result = {};
    if (map !== null) {
        Object.keys(map).forEach(function (style) {
            map[style].forEach(function (alias) {
                result[String(alias)] = style;
            });
        });
    }
    return result;
}

function Type(tag, options) {
    options = options || {};
    Object.keys(options).forEach(function (name) {
        if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(name) === -1) {
            throw new YAMLException('Unknown option "' + name + '" is met in definition of "' + tag + '" YAML type.');
        }
    });
    // TODO: Add tag format check.
    this.tag = tag;
    this.kind = options['kind'] || null;
    this.resolve = options['resolve'] || function () {
        return true;
    };
    this.construct = options['construct'] || function (data) {
        return data;
    };
    this.instanceOf = options['instanceOf'] || null;
    this.predicate = options['predicate'] || null;
    this.represent = options['represent'] || null;
    this.defaultStyle = options['defaultStyle'] || null;
    this.styleAliases = compileStyleAliases(options['styleAliases'] || null);
    if (YAML_NODE_KINDS.indexOf(this.kind) === -1) {
        throw new YAMLException('Unknown kind "' + this.kind + '" is specified for "' + tag + '" YAML type.');
    }
}

module.exports = Type;


}).call(this,require('_process'))
},{"./exception":64,"_process":108}],74:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
'use strict';
/*eslint-disable no-bitwise*/
var NodeBuffer;
try {
    // A trick for browserified version, to not include `Buffer` shim
    var _require = require;
    NodeBuffer = _require('buffer').Buffer;
} catch (__) {}
var Type = require('../type');
// [ 64, 65, 66 ] -> [ padding, CR, LF ]
var BASE64_MAP = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r';
function resolveYamlBinary(data) {
    if (data === null) 
        return false;
    var code, idx, bitlen = 0, max = data.length, map = BASE64_MAP;
    // Convert one by one.
    for (idx = 0; idx < max; idx++) {
        code = map.indexOf(data.charAt(idx));
        // Skip CR/LF
        if (code > 64) 
            continue;
        // Fail on illegal characters
        if (code < 0) 
            return false;
        bitlen += 6;
    }
    // If there are any bits left, source was corrupted
    return bitlen % 8 === 0;
}

function constructYamlBinary(data) {
    var idx, tailbits, input = data.replace(/[\r\n=]/g, ''), max = input.length, map = BASE64_MAP, bits = 0, result = []; //  remove CR/LF & padding to simplify scan
    // Collect by 6*4 bits (3 bytes)
    for (idx = 0; idx < max; idx++) {
        if (idx % 4 === 0 && idx) {
            result.push(bits >> 16 & 0xFF);
            result.push(bits >> 8 & 0xFF);
            result.push(bits & 0xFF);
        }
        bits = bits << 6 | map.indexOf(input.charAt(idx));
    }
    // Dump tail
    tailbits = max % 4 * 6;
    if (tailbits === 0) {
        result.push(bits >> 16 & 0xFF);
        result.push(bits >> 8 & 0xFF);
        result.push(bits & 0xFF);
    } else if (tailbits === 18) {
        result.push(bits >> 10 & 0xFF);
        result.push(bits >> 2 & 0xFF);
    } else if (tailbits === 12) {
        result.push(bits >> 4 & 0xFF);
    }
    // Wrap into Buffer for NodeJS and leave Array for browser
    if (NodeBuffer) {
        // Support node 6.+ Buffer API when available
        return NodeBuffer.from ? NodeBuffer.from(result) : new NodeBuffer(result);
    }
    return result;
}

function representYamlBinary(object) { /*, style*/
    var result = '', bits = 0, idx, tail, max = object.length, map = BASE64_MAP;
    // Convert every three bytes to 4 ASCII characters.
    for (idx = 0; idx < max; idx++) {
        if (idx % 3 === 0 && idx) {
            result += map[bits >> 18 & 0x3F];
            result += map[bits >> 12 & 0x3F];
            result += map[bits >> 6 & 0x3F];
            result += map[bits & 0x3F];
        }
        bits = (bits << 8) + object[idx];
    }
    // Dump tail
    tail = max % 3;
    if (tail === 0) {
        result += map[bits >> 18 & 0x3F];
        result += map[bits >> 12 & 0x3F];
        result += map[bits >> 6 & 0x3F];
        result += map[bits & 0x3F];
    } else if (tail === 2) {
        result += map[bits >> 10 & 0x3F];
        result += map[bits >> 4 & 0x3F];
        result += map[bits << 2 & 0x3F];
        result += map[64];
    } else if (tail === 1) {
        result += map[bits >> 2 & 0x3F];
        result += map[bits << 4 & 0x3F];
        result += map[64];
        result += map[64];
    }
    return result;
}

function isBinary(object) {
    return NodeBuffer && NodeBuffer.isBuffer(object);
}

module.exports = new Type('tag:yaml.org,2002:binary', {
    kind: 'scalar',
    resolve: resolveYamlBinary,
    construct: constructYamlBinary,
    predicate: isBinary,
    represent: representYamlBinary
});


}).call(this,require('_process'))
},{"../type":73,"_process":108}],75:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
'use strict';
var Type = require('../type');
function resolveYamlBoolean(data) {
    if (data === null) 
        return false;
    var max = data.length;
    return max === 4 && (data === 'true' || data === 'True' || data === 'TRUE') || max === 5 && (data === 'false' || data === 'False' || data === 'FALSE');
}

function constructYamlBoolean(data) {
    return data === 'true' || data === 'True' || data === 'TRUE';
}

function isBoolean(object) {
    return Object.prototype.toString.call(object) === '[object Boolean]';
}

module.exports = new Type('tag:yaml.org,2002:bool', {
    kind: 'scalar',
    resolve: resolveYamlBoolean,
    construct: constructYamlBoolean,
    predicate: isBoolean,
    represent: {
        lowercase: function (object) {
            return object ? 'true' : 'false';
        },
        uppercase: function (object) {
            return object ? 'TRUE' : 'FALSE';
        },
        camelcase: function (object) {
            return object ? 'True' : 'False';
        }
    },
    defaultStyle: 'lowercase'
});


}).call(this,require('_process'))
},{"../type":73,"_process":108}],76:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
'use strict';
var common = require('../common');
var Type = require('../type');
// 2.5e4, 2.5 and integers
// .2e4, .2
// special case, seems not from spec
// 20:59
// .inf
// .nan
var YAML_FLOAT_PATTERN = new RegExp('^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?' + '|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?' + '|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*' + '|[-+]?\\.(?:inf|Inf|INF)' + '|\\.(?:nan|NaN|NAN))$');
function resolveYamlFloat(data) {
    if (data === null) 
        return false;
    // Quick hack to not allow integers end with `_`
    // Probably should update regexp & check speed
    if (!YAML_FLOAT_PATTERN.test(data) || data[data.length - 1] === '_') {
        return false;
    }
    return true;
}

function constructYamlFloat(data) {
    var value, sign, base, digits;
    value = data.replace(/_/g, '').toLowerCase();
    sign = value[0] === '-' ? -1 : 1;
    digits = [];
    if ('+-'.indexOf(value[0]) >= 0) {
        value = value.slice(1);
    }
    if (value === '.inf') {
        return sign === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
    } else if (value === '.nan') {
        return NaN;
    } else if (value.indexOf(':') >= 0) {
        value.split(':').forEach(function (v) {
            digits.unshift(parseFloat(v, 10));
        });
        value = 0.0;
        base = 1;
        digits.forEach(function (d) {
            value += d * base;
            base *= 60;
        });
        return sign * value;
    }
    return sign * parseFloat(value, 10);
}

var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;
function representYamlFloat(object, style) {
    var res;
    if (isNaN(object)) {
        switch (style) {
            case 'lowercase':
                return '.nan';
            case 'uppercase':
                return '.NAN';
            case 'camelcase':
                return '.NaN';
        }
    } else if (Number.POSITIVE_INFINITY === object) {
        switch (style) {
            case 'lowercase':
                return '.inf';
            case 'uppercase':
                return '.INF';
            case 'camelcase':
                return '.Inf';
        }
    } else if (Number.NEGATIVE_INFINITY === object) {
        switch (style) {
            case 'lowercase':
                return '-.inf';
            case 'uppercase':
                return '-.INF';
            case 'camelcase':
                return '-.Inf';
        }
    } else if (common.isNegativeZero(object)) {
        return '-0.0';
    }
    res = object.toString(10);
    // JS stringifier can build scientific format without dots: 5e-100,
    // while YAML requres dot: 5.e-100. Fix it with simple hack
    return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace('e', '.e') : res;
}

function isFloat(object) {
    return Object.prototype.toString.call(object) === '[object Number]' && (object % 1 !== 0 || common.isNegativeZero(object));
}

module.exports = new Type('tag:yaml.org,2002:float', {
    kind: 'scalar',
    resolve: resolveYamlFloat,
    construct: constructYamlFloat,
    predicate: isFloat,
    represent: representYamlFloat,
    defaultStyle: 'lowercase'
});


}).call(this,require('_process'))
},{"../common":62,"../type":73,"_process":108}],77:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
'use strict';
var common = require('../common');
var Type = require('../type');
function isHexCode(c) {
    return 0x30 <= c && c <= 0x39 || 0x41 <= c && c <= 0x46 || 0x61 <= c && c <= 0x66; /* 0 */ /* 9 */ /* A */ /* F */ /* a */ /* f */
}

function isOctCode(c) {
    return 0x30 <= c && c <= 0x37; /* 0 */ /* 7 */
}

function isDecCode(c) {
    return 0x30 <= c && c <= 0x39; /* 0 */ /* 9 */
}

function resolveYamlInteger(data) {
    if (data === null) 
        return false;
    var max = data.length, index = 0, hasDigits = false, ch;
    if (!max) 
        return false;
    ch = data[index];
    // sign
    if (ch === '-' || ch === '+') {
        ch = data[++index];
    }
    if (ch === '0') {
        // 0
        if (index + 1 === max) 
            return true;
        ch = data[++index];
        // base 2, base 8, base 16
        if (ch === 'b') {
            // base 2
            index++;
            for (; index < max; index++) {
                ch = data[index];
                if (ch === '_') 
                    continue;
                if (ch !== '0' && ch !== '1') 
                    return false;
                hasDigits = true;
            }
            return hasDigits && ch !== '_';
        }
        if (ch === 'x') {
            // base 16
            index++;
            for (; index < max; index++) {
                ch = data[index];
                if (ch === '_') 
                    continue;
                if (!isHexCode(data.charCodeAt(index))) 
                    return false;
                hasDigits = true;
            }
            return hasDigits && ch !== '_';
        }
        // base 8
        for (; index < max; index++) {
            ch = data[index];
            if (ch === '_') 
                continue;
            if (!isOctCode(data.charCodeAt(index))) 
                return false;
            hasDigits = true;
        }
        return hasDigits && ch !== '_';
    }
    // base 10 (except 0) or base 60
    // value should not start with `_`;
    if (ch === '_') 
        return false;
    for (; index < max; index++) {
        ch = data[index];
        if (ch === '_') 
            continue;
        if (ch === ':') 
            break;
        if (!isDecCode(data.charCodeAt(index))) {
            return false;
        }
        hasDigits = true;
    }
    // Should have digits and should not end with `_`
    if (!hasDigits || ch === '_') 
        return false;
    // if !base60 - done;
    if (ch !== ':') 
        return true;
    // base60 almost not used, no needs to optimize
    return /^(:[0-5]?[0-9])+$/.test(data.slice(index));
}

function constructYamlInteger(data) {
    var value = data, sign = 1, ch, base, digits = [];
    if (value.indexOf('_') !== -1) {
        value = value.replace(/_/g, '');
    }
    ch = value[0];
    if (ch === '-' || ch === '+') {
        if (ch === '-') 
            sign = -1;
        value = value.slice(1);
        ch = value[0];
    }
    if (value === '0') 
        return 0;
    if (ch === '0') {
        if (value[1] === 'b') 
            return sign * parseInt(value.slice(2), 2);
        if (value[1] === 'x') 
            return sign * parseInt(value, 16);
        return sign * parseInt(value, 8);
    }
    if (value.indexOf(':') !== -1) {
        value.split(':').forEach(function (v) {
            digits.unshift(parseInt(v, 10));
        });
        value = 0;
        base = 1;
        digits.forEach(function (d) {
            value += d * base;
            base *= 60;
        });
        return sign * value;
    }
    return sign * parseInt(value, 10);
}

function isInteger(object) {
    return Object.prototype.toString.call(object) === '[object Number]' && (object % 1 === 0 && !common.isNegativeZero(object));
}

module.exports = new Type('tag:yaml.org,2002:int', {
    kind: 'scalar',
    resolve: resolveYamlInteger,
    construct: constructYamlInteger,
    predicate: isInteger,
    represent: {
        binary: function (object) {
            return '0b' + object.toString(2);
        },
        octal: function (object) {
            return '0' + object.toString(8);
        },
        decimal: function (object) {
            return object.toString(10);
        },
        hexadecimal: function (object) {
            return '0x' + object.toString(16).toUpperCase();
        }
    },
    defaultStyle: 'decimal',
    styleAliases: {
        binary: [2,'bin'],
        octal: [8,'oct'],
        decimal: [10,'dec'],
        hexadecimal: [16,'hex']
    }
});


}).call(this,require('_process'))
},{"../common":62,"../type":73,"_process":108}],78:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
'use strict';
var esprima;
try {
    // Browserified version does not have esprima
    //
    // 1. For node.js just require module as deps
    // 2. For browser try to require mudule via external AMD system.
    //    If not found - try to fallback to window.esprima. If not
    //    found too - then fail to parse.
    //
    // workaround to exclude package from browserify list.
    var _require = require;
    esprima = _require('esprima');
} catch (_) {
    /*global window */
    if (typeof window !== 'undefined') 
        esprima = window.esprima;
}
var Type = require('../../type');
function resolveJavascriptFunction(data) {
    if (data === null) 
        return false;
    try {
        var source = '(' + data + ')', ast = esprima.parse(source, {
            range: true
        });
        if (ast.type !== 'Program' || ast.body.length !== 1 || ast.body[0].type !== 'ExpressionStatement' || ast.body[0].expression.type !== 'FunctionExpression') {
            return false;
        }
        return true;
    } catch (err) {
        return false;
    }
}

function constructJavascriptFunction(data) {
    /*jslint evil:true*/
    var source = '(' + data + ')', ast = esprima.parse(source, {
        range: true
    }), params = [], body;
    if (ast.type !== 'Program' || ast.body.length !== 1 || ast.body[0].type !== 'ExpressionStatement' || ast.body[0].expression.type !== 'FunctionExpression') {
        throw new Error('Failed to resolve function');
    }
    ast.body[0].expression.params.forEach(function (param) {
        params.push(param.name);
    });
    body = ast.body[0].expression.body.range;
    // Esprima's ranges include the first '{' and the last '}' characters on
    // function expressions. So cut them out.
    /*eslint-disable no-new-func*/
    return new Function(params, source.slice(body[0] + 1, body[1] - 1));
}

function representJavascriptFunction(object) { /*, style*/
    return object.toString();
}

function isFunction(object) {
    return Object.prototype.toString.call(object) === '[object Function]';
}

module.exports = new Type('tag:yaml.org,2002:js/function', {
    kind: 'scalar',
    resolve: resolveJavascriptFunction,
    construct: constructJavascriptFunction,
    predicate: isFunction,
    represent: representJavascriptFunction
});


}).call(this,require('_process'))
},{"../../type":73,"_process":108}],79:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
'use strict';
var Type = require('../../type');
function resolveJavascriptRegExp(data) {
    if (data === null) 
        return false;
    if (data.length === 0) 
        return false;
    var regexp = data, tail = /\/([gim]*)$/.exec(data), modifiers = '';
    // if regexp starts with '/' it can have modifiers and must be properly closed
    // `/foo/gim` - modifiers tail can be maximum 3 chars
    if (regexp[0] === '/') {
        if (tail) 
            modifiers = tail[1];
        if (modifiers.length > 3) 
            return false;
        // if expression starts with /, is should be properly terminated
        if (regexp[regexp.length - modifiers.length - 1] !== '/') 
            return false;
    }
    return true;
}

function constructJavascriptRegExp(data) {
    var regexp = data, tail = /\/([gim]*)$/.exec(data), modifiers = '';
    // `/foo/gim` - tail can be maximum 4 chars
    if (regexp[0] === '/') {
        if (tail) 
            modifiers = tail[1];
        regexp = regexp.slice(1, regexp.length - modifiers.length - 1);
    }
    return new RegExp(regexp, modifiers);
}

function representJavascriptRegExp(object) { /*, style*/
    var result = '/' + object.source + '/';
    if (object.global) 
        result += 'g';
    if (object.multiline) 
        result += 'm';
    if (object.ignoreCase) 
        result += 'i';
    return result;
}

function isRegExp(object) {
    return Object.prototype.toString.call(object) === '[object RegExp]';
}

module.exports = new Type('tag:yaml.org,2002:js/regexp', {
    kind: 'scalar',
    resolve: resolveJavascriptRegExp,
    construct: constructJavascriptRegExp,
    predicate: isRegExp,
    represent: representJavascriptRegExp
});


}).call(this,require('_process'))
},{"../../type":73,"_process":108}],80:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
'use strict';
var Type = require('../../type');
function resolveJavascriptUndefined() {
    return true;
}

function constructJavascriptUndefined() {
    /*eslint-disable no-undefined*/
    return undefined;
}

function representJavascriptUndefined() {
    return '';
}

function isUndefined(object) {
    return typeof object === 'undefined';
}

module.exports = new Type('tag:yaml.org,2002:js/undefined', {
    kind: 'scalar',
    resolve: resolveJavascriptUndefined,
    construct: constructJavascriptUndefined,
    predicate: isUndefined,
    represent: representJavascriptUndefined
});


}).call(this,require('_process'))
},{"../../type":73,"_process":108}],81:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
'use strict';
var Type = require('../type');
module.exports = new Type('tag:yaml.org,2002:map', {
    kind: 'mapping',
    construct: function (data) {
        return data !== null ? data : {};
    }
});


}).call(this,require('_process'))
},{"../type":73,"_process":108}],82:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
'use strict';
var Type = require('../type');
function resolveYamlMerge(data) {
    return data === '<<' || data === null;
}

module.exports = new Type('tag:yaml.org,2002:merge', {
    kind: 'scalar',
    resolve: resolveYamlMerge
});


}).call(this,require('_process'))
},{"../type":73,"_process":108}],83:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
'use strict';
var Type = require('../type');
function resolveYamlNull(data) {
    if (data === null) 
        return true;
    var max = data.length;
    return max === 1 && data === '~' || max === 4 && (data === 'null' || data === 'Null' || data === 'NULL');
}

function constructYamlNull() {
    return null;
}

function isNull(object) {
    return object === null;
}

module.exports = new Type('tag:yaml.org,2002:null', {
    kind: 'scalar',
    resolve: resolveYamlNull,
    construct: constructYamlNull,
    predicate: isNull,
    represent: {
        canonical: function () {
            return '~';
        },
        lowercase: function () {
            return 'null';
        },
        uppercase: function () {
            return 'NULL';
        },
        camelcase: function () {
            return 'Null';
        }
    },
    defaultStyle: 'lowercase'
});


}).call(this,require('_process'))
},{"../type":73,"_process":108}],84:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
'use strict';
var Type = require('../type');
var _hasOwnProperty = Object.prototype.hasOwnProperty;
var _toString = Object.prototype.toString;
function resolveYamlOmap(data) {
    if (data === null) 
        return true;
    var objectKeys = [], index, length, pair, pairKey, pairHasKey, object = data;
    for (index = 0, length = object.length; index < length; index += 1) {
        pair = object[index];
        pairHasKey = false;
        if (_toString.call(pair) !== '[object Object]') 
            return false;
        for (pairKey in pair) {
            if (_hasOwnProperty.call(pair, pairKey)) {
                if (!pairHasKey) 
                    pairHasKey = true;
                 else 
                    return false;
            }
        }
        if (!pairHasKey) 
            return false;
        if (objectKeys.indexOf(pairKey) === -1) 
            objectKeys.push(pairKey);
         else 
            return false;
    }
    return true;
}

function constructYamlOmap(data) {
    return data !== null ? data : [];
}

module.exports = new Type('tag:yaml.org,2002:omap', {
    kind: 'sequence',
    resolve: resolveYamlOmap,
    construct: constructYamlOmap
});


}).call(this,require('_process'))
},{"../type":73,"_process":108}],85:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
'use strict';
var Type = require('../type');
var _toString = Object.prototype.toString;
function resolveYamlPairs(data) {
    if (data === null) 
        return true;
    var index, length, pair, keys, result, object = data;
    result = new Array(object.length);
    for (index = 0, length = object.length; index < length; index += 1) {
        pair = object[index];
        if (_toString.call(pair) !== '[object Object]') 
            return false;
        keys = Object.keys(pair);
        if (keys.length !== 1) 
            return false;
        result[index] = [keys[0],pair[keys[0]]];
    }
    return true;
}

function constructYamlPairs(data) {
    if (data === null) 
        return [];
    var index, length, pair, keys, result, object = data;
    result = new Array(object.length);
    for (index = 0, length = object.length; index < length; index += 1) {
        pair = object[index];
        keys = Object.keys(pair);
        result[index] = [keys[0],pair[keys[0]]];
    }
    return result;
}

module.exports = new Type('tag:yaml.org,2002:pairs', {
    kind: 'sequence',
    resolve: resolveYamlPairs,
    construct: constructYamlPairs
});


}).call(this,require('_process'))
},{"../type":73,"_process":108}],86:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
'use strict';
var Type = require('../type');
module.exports = new Type('tag:yaml.org,2002:seq', {
    kind: 'sequence',
    construct: function (data) {
        return data !== null ? data : [];
    }
});


}).call(this,require('_process'))
},{"../type":73,"_process":108}],87:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
'use strict';
var Type = require('../type');
var _hasOwnProperty = Object.prototype.hasOwnProperty;
function resolveYamlSet(data) {
    if (data === null) 
        return true;
    var key, object = data;
    for (key in object) {
        if (_hasOwnProperty.call(object, key)) {
            if (object[key] !== null) 
                return false;
        }
    }
    return true;
}

function constructYamlSet(data) {
    return data !== null ? data : {};
}

module.exports = new Type('tag:yaml.org,2002:set', {
    kind: 'mapping',
    resolve: resolveYamlSet,
    construct: constructYamlSet
});


}).call(this,require('_process'))
},{"../type":73,"_process":108}],88:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
'use strict';
var Type = require('../type');
module.exports = new Type('tag:yaml.org,2002:str', {
    kind: 'scalar',
    construct: function (data) {
        return data !== null ? data : '';
    }
});


}).call(this,require('_process'))
},{"../type":73,"_process":108}],89:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
'use strict';
var Type = require('../type');
var YAML_DATE_REGEXP = new RegExp('^([0-9][0-9][0-9][0-9])' + '-([0-9][0-9])' + '-([0-9][0-9])$'); //  [1] year //  [2] month //  [3] day
var YAML_TIMESTAMP_REGEXP = new RegExp('^([0-9][0-9][0-9][0-9])' + '-([0-9][0-9]?)' + '-([0-9][0-9]?)' + '(?:[Tt]|[ \\t]+)' + '([0-9][0-9]?)' + ':([0-9][0-9])' + ':([0-9][0-9])' + '(?:\\.([0-9]*))?' + '(?:[ \\t]*(Z|([-+])([0-9][0-9]?)' + '(?::([0-9][0-9]))?))?$'); //  [1] year //  [2] month //  [3] day //  ... //  [4] hour //  [5] minute //  [6] second //  [7] fraction //  [8] tz [9] tz_sign [10] tz_hour //  [11] tz_minute
function resolveYamlTimestamp(data) {
    if (data === null) 
        return false;
    if (YAML_DATE_REGEXP.exec(data) !== null) 
        return true;
    if (YAML_TIMESTAMP_REGEXP.exec(data) !== null) 
        return true;
    return false;
}

function constructYamlTimestamp(data) {
    var match, year, month, day, hour, minute, second, fraction = 0, delta = null, tz_hour, tz_minute, date;
    match = YAML_DATE_REGEXP.exec(data);
    if (match === null) 
        match = YAML_TIMESTAMP_REGEXP.exec(data);
    if (match === null) 
        throw new Error('Date resolve error');
    // match: [1] year [2] month [3] day
    year = +match[1];
    month = +match[2] - 1; //  JS month starts with 0
    day = +match[3];
    if (!match[4]) { //  no hour
        return new Date(Date.UTC(year, month, day));
    }
    // match: [4] hour [5] minute [6] second [7] fraction
    hour = +match[4];
    minute = +match[5];
    second = +match[6];
    if (match[7]) {
        fraction = match[7].slice(0, 3);
        while (fraction.length < 3) { //  milli-seconds
            fraction += '0';
        }
        fraction = +fraction;
    }
    // match: [8] tz [9] tz_sign [10] tz_hour [11] tz_minute
    if (match[9]) {
        tz_hour = +match[10];
        tz_minute = +(match[11] || 0);
        delta = (tz_hour * 60 + tz_minute) * 60000; //  delta in mili-seconds
        if (match[9] === '-') 
            delta = -delta;
    }
    date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));
    if (delta) 
        date.setTime(date.getTime() - delta);
    return date;
}

function representYamlTimestamp(object) { /*, style*/
    return object.toISOString();
}

module.exports = new Type('tag:yaml.org,2002:timestamp', {
    kind: 'scalar',
    resolve: resolveYamlTimestamp,
    construct: constructYamlTimestamp,
    instanceOf: Date,
    represent: representYamlTimestamp
});


}).call(this,require('_process'))
},{"../type":73,"_process":108}],90:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
module.exports = minimatch;
minimatch.Minimatch = Minimatch;
var path = {
    sep: '/'
};
try {
    path = require('path');
} catch (er) {}
var GLOBSTAR = minimatch.GLOBSTAR = (Minimatch.GLOBSTAR = {});
var expand = require('brace-expansion');
var plTypes = {
    '!': {
        open: '(?:(?!(?:',
        close: '))[^/]*?)'
    },
    '?': {
        open: '(?:',
        close: ')?'
    },
    '+': {
        open: '(?:',
        close: ')+'
    },
    '*': {
        open: '(?:',
        close: ')*'
    },
    '@': {
        open: '(?:',
        close: ')'
    }
};
// any single thing other than /
// don't need to escape / when using new RegExp()
var qmark = '[^/]';
// * => any number of characters
var star = qmark + '*?';
// ** when dots are allowed.  Anything goes, except .. and .
// not (^ or / followed by one or two dots followed by $ or /),
// followed by anything, any number of times.
var twoStarDot = '(?:(?!(?:\\\/|^)(?:\\.{1,2})($|\\\/)).)*?';
// not a ^ or / followed by a dot,
// followed by anything, any number of times.
var twoStarNoDot = '(?:(?!(?:\\\/|^)\\.).)*?';
// characters that need to be escaped in RegExp.
var reSpecials = charSet('().*{}+?[]^$\\!');
// "abc" -> { a:true, b:true, c:true }
function charSet(s) {
    return s.split('').reduce(function (set, c) {
        set[c] = true;
        return set;
    }, {});
}

// normalizes slashes.
var slashSplit = /\/+/;
minimatch.filter = filter;
function filter(pattern, options) {
    options = options || {};
    return function (p, i, list) {
        return minimatch(p, pattern, options);
    };
}

function ext(a, b) {
    a = a || {};
    b = b || {};
    var t = {};
    Object.keys(b).forEach(function (k) {
        t[k] = b[k];
    });
    Object.keys(a).forEach(function (k) {
        t[k] = a[k];
    });
    return t;
}

minimatch.defaults = function (def) {
    if (!def || !Object.keys(def).length) 
        return minimatch;
    var orig = minimatch;
    var m = function minimatch(p, pattern, options) {
        return orig.minimatch(p, pattern, ext(def, options));
    };
    m.Minimatch = function Minimatch(pattern, options) {
        return new orig.Minimatch(pattern, ext(def, options));
    };
    return m;
};
Minimatch.defaults = function (def) {
    if (!def || !Object.keys(def).length) 
        return Minimatch;
    return minimatch.defaults(def).Minimatch;
};
function minimatch(p, pattern, options) {
    if (typeof pattern !== 'string') {
        throw new TypeError('glob pattern string required');
    }
    if (!options) 
        options = {};
    // shortcut: comments match nothing.
    if (!options.nocomment && pattern.charAt(0) === '#') {
        return false;
    }
    // "" only matches ""
    if (pattern.trim() === '') 
        return p === '';
    return new Minimatch(pattern, options).match(p);
}

function Minimatch(pattern, options) {
    if (!(this instanceof Minimatch)) {
        return new Minimatch(pattern, options);
    }
    if (typeof pattern !== 'string') {
        throw new TypeError('glob pattern string required');
    }
    if (!options) 
        options = {};
    pattern = pattern.trim();
    // windows support: need to use /, not \
    if (path.sep !== '/') {
        pattern = pattern.split(path.sep).join('/');
    }
    this.options = options;
    this.set = [];
    this.pattern = pattern;
    this.regexp = null;
    this.negate = false;
    this.comment = false;
    this.empty = false;
    // make the set of regexps etc.
    this.make();
}

Minimatch.prototype.debug = function () {};
Minimatch.prototype.make = make;
function make() {
    // don't do it more than once.
    if (this._made) 
        return;
    var pattern = this.pattern;
    var options = this.options;
    // empty patterns and comments match nothing.
    if (!options.nocomment && pattern.charAt(0) === '#') {
        this.comment = true;
        return;
    }
    if (!pattern) {
        this.empty = true;
        return;
    }
    // step 1: figure out negation, etc.
    this.parseNegate();
    // step 2: expand braces
    var set = this.globSet = this.braceExpand();
    if (options.debug) 
        this.debug = console.error;
    this.debug(this.pattern, set);
    // step 3: now we have a set, so turn each one into a series of path-portion
    // matching patterns.
    // These will be regexps, except in the case of "**", which is
    // set to the GLOBSTAR object for globstar behavior,
    // and will not contain any / characters
    set = (this.globParts = set.map(function (s) {
        return s.split(slashSplit);
    }));
    this.debug(this.pattern, set);
    // glob --> regexps
    set = set.map(function (s, si, set) {
        return s.map(this.parse, this);
    }, this);
    this.debug(this.pattern, set);
    // filter out everything that didn't compile properly.
    set = set.filter(function (s) {
        return s.indexOf(false) === -1;
    });
    this.debug(this.pattern, set);
    this.set = set;
}

Minimatch.prototype.parseNegate = parseNegate;
function parseNegate() {
    var pattern = this.pattern;
    var negate = false;
    var options = this.options;
    var negateOffset = 0;
    if (options.nonegate) 
        return;
    for (var i = 0, l = pattern.length;i < l && pattern.charAt(i) === '!'; i++) {
        negate = !negate;
        negateOffset++;
    }
    if (negateOffset) 
        this.pattern = pattern.substr(negateOffset);
    this.negate = negate;
}

// Brace expansion:
// a{b,c}d -> abd acd
// a{b,}c -> abc ac
// a{0..3}d -> a0d a1d a2d a3d
// a{b,c{d,e}f}g -> abg acdfg acefg
// a{b,c}d{e,f}g -> abdeg acdeg abdeg abdfg
//
// Invalid sets are not expanded.
// a{2..}b -> a{2..}b
// a{b}c -> a{b}c
minimatch.braceExpand = function (pattern, options) {
    return braceExpand(pattern, options);
};
Minimatch.prototype.braceExpand = braceExpand;
function braceExpand(pattern, options) {
    if (!options) {
        if (this instanceof Minimatch) {
            options = this.options;
        } else {
            options = {};
        }
    }
    pattern = typeof pattern === 'undefined' ? this.pattern : pattern;
    if (typeof pattern === 'undefined') {
        throw new TypeError('undefined pattern');
    }
    if (options.nobrace || !pattern.match(/\{.*\}/)) {
        // shortcut. no need to expand.
        return [pattern];
    }
    return expand(pattern);
}

// parse a component of the expanded set.
// At this point, no pattern may contain "/" in it
// so we're going to return a 2d array, where each entry is the full
// pattern, split on '/', and then turned into a regular expression.
// A regexp is made at the end which joins each array with an
// escaped /, and another full one which joins each regexp with |.
//
// Following the lead of Bash 4.1, note that "**" only has special meaning
// when it is the *only* thing in a path portion.  Otherwise, any series
// of * is equivalent to a single *.  Globstar behavior is enabled by
// default, and can be disabled by setting options.noglobstar.
Minimatch.prototype.parse = parse;
var SUBPARSE = {};
function parse(pattern, isSub) {
    if (pattern.length > 1024 * 64) {
        throw new TypeError('pattern is too long');
    }
    var options = this.options;
    // shortcuts
    if (!options.noglobstar && pattern === '**') 
        return GLOBSTAR;
    if (pattern === '') 
        return '';
    var re = '';
    var hasMagic = !(!options.nocase);
    var escaping = false;
    // ? => one single character
    var patternListStack = [];
    var negativeLists = [];
    var stateChar;
    var inClass = false;
    var reClassStart = -1;
    var classStart = -1;
    // . and .. never match anything that doesn't start with .,
    // even when options.dot is set.
    // not (start or / followed by . or .. followed by / or end)
    var patternStart = pattern.charAt(0) === '.' ? '' : options.dot ? '(?!(?:^|\\\/)\\.{1,2}(?:$|\\\/))' : '(?!\\.)'; //  anything
    var self = this;
    function clearStateChar() {
        if (stateChar) {
                    // we had some state-tracking character
                    // that wasn't consumed by this pass.
            switch (stateChar) {
                case '*':
                    re += star;
                    hasMagic = true;
                    break;
                case '?':
                    re += qmark;
                    hasMagic = true;
                    break;
                default:
                    re += '\\' + stateChar;
                    break;
            }
            self.debug('clearStateChar %j %j', stateChar, re);
            stateChar = false;
        }
    }
    
    for (var i = 0, len = pattern.length, c;i < len && (c = pattern.charAt(i)); i++) {
        this.debug('%s\t%s %s %j', pattern, i, re, c);
        // skip over any that are escaped.
        if (escaping && reSpecials[c]) {
            re += '\\' + c;
            escaping = false;
            continue;
        }
        switch (c) {
            case '/':
                // completely not allowed, even escaped.
                // Should already be path-split by now.
                return false;
            case '\\':
                clearStateChar();
                escaping = true;
                continue;
                // the various stateChar values
                // for the "extglob" stuff.
            case '?':
            case '*':
            case '+':
            case '@':
            case '!':
                this.debug('%s\t%s %s %j <-- stateChar', pattern, i, re, c);
                // all of those are literals inside a class, except that
                // the glob [!a] means [^a] in regexp
                if (inClass) {
                    this.debug('  in class');
                    if (c === '!' && i === classStart + 1) 
                        c = '^';
                    re += c;
                    continue;
                }
                // if we already have a stateChar, then it means
                // that there was something like ** or +? in there.
                // Handle the stateChar, then proceed with this one.
                self.debug('call clearStateChar %j', stateChar);
                clearStateChar();
                stateChar = c;
                // if extglob is disabled, then +(asdf|foo) isn't a thing.
                // just clear the statechar *now*, rather than even diving into
                // the patternList stuff.
                if (options.noext) 
                    clearStateChar();
                continue;
            case '(':
                if (inClass) {
                    re += '(';
                    continue;
                }
                if (!stateChar) {
                    re += '\\(';
                    continue;
                }
                patternListStack.push({
                    type: stateChar,
                    start: i - 1,
                    reStart: re.length,
                    open: plTypes[stateChar].open,
                    close: plTypes[stateChar].close
                });
                // negation is (?:(?!js)[^/]*)
                re += stateChar === '!' ? '(?:(?!(?:' : '(?:';
                this.debug('plType %j %j', stateChar, re);
                stateChar = false;
                continue;
            case ')':
                if (inClass || !patternListStack.length) {
                    re += '\\)';
                    continue;
                }
                clearStateChar();
                hasMagic = true;
                var pl = patternListStack.pop();
                // negation is (?:(?!js)[^/]*)
                // The others are (?:<pattern>)<type>
                re += pl.close;
                if (pl.type === '!') {
                    negativeLists.push(pl);
                }
                pl.reEnd = re.length;
                continue;
            case '|':
                if (inClass || !patternListStack.length || escaping) {
                    re += '\\|';
                    escaping = false;
                    continue;
                }
                clearStateChar();
                re += '|';
                continue;
                // these are mostly the same in regexp and glob
            case '[':
                // swallow any state-tracking char before the [
                clearStateChar();
                if (inClass) {
                    re += '\\' + c;
                    continue;
                }
                inClass = true;
                classStart = i;
                reClassStart = re.length;
                re += c;
                continue;
            case ']':
                //  a right bracket shall lose its special
                //  meaning and represent itself in
                //  a bracket expression if it occurs
                //  first in the list.  -- POSIX.2 2.8.3.2
                if (i === classStart + 1 || !inClass) {
                    re += '\\' + c;
                    escaping = false;
                    continue;
                }
                // handle the case where we left a class open.
                // "[z-a]" is valid, equivalent to "\[z-a\]"
                if (inClass) {
                    // split where the last [ was, make sure we don't have
                    // an invalid re. if so, re-walk the contents of the
                    // would-be class to re-translate any characters that
                    // were passed through as-is
                    // TODO: It would probably be faster to determine this
                    // without a try/catch and a new RegExp, but it's tricky
                    // to do safely.  For now, this is safe and works.
                    var cs = pattern.substring(classStart + 1, i);
                    try {
                        RegExp('[' + cs + ']');
                    } catch (er) {
                        // not a valid class!
                        var sp = this.parse(cs, SUBPARSE);
                        re = re.substr(0, reClassStart) + '\\[' + sp[0] + '\\]';
                        hasMagic = hasMagic || sp[1];
                        inClass = false;
                        continue;
                    }
                }
                // finish up the class.
                hasMagic = true;
                inClass = false;
                re += c;
                continue;
            default:
                // swallow any state char that wasn't consumed
                clearStateChar();
                if (escaping) {
                    // no need
                    escaping = false;
                } else if (reSpecials[c] && !(c === '^' && inClass)) {
                    re += '\\';
                }
                re += c;
        }
    }
    // switch
    // for
    // handle the case where we left a class open.
    // "[abc" is valid, equivalent to "\[abc"
    if (inClass) {
        // split where the last [ was, and escape it
        // this is a huge pita.  We now have to re-walk
        // the contents of the would-be class to re-translate
        // any characters that were passed through as-is
        cs = pattern.substr(classStart + 1);
        sp = this.parse(cs, SUBPARSE);
        re = re.substr(0, reClassStart) + '\\[' + sp[0];
        hasMagic = hasMagic || sp[1];
    }
    // handle the case where we had a +( thing at the *end*
    // of the pattern.
    // each pattern list stack adds 3 chars, and we need to go through
    // and escape any | chars that were passed through as-is for the regexp.
    // Go through and escape them, taking care not to double-escape any
    // | chars that were already escaped.
    for (pl = patternListStack.pop(); pl; pl = patternListStack.pop()) {
        var tail = re.slice(pl.reStart + pl.open.length);
        this.debug('setting tail', re, pl);
        // maybe some even number of \, then maybe 1 \, followed by a |
        tail = tail.replace(/((?:\\{2}){0,64})(\\?)\|/g, function (_, $1, $2) {
            if (!$2) {
                // the | isn't already escaped, so escape it.
                $2 = '\\';
            }
            // need to escape all those slashes *again*, without escaping the
            // one that we need for escaping the | character.  As it works out,
            // escaping an even number of slashes can be done by simply repeating
            // it exactly after itself.  That's why this trick works.
            //
            // I am sorry that you have to see this.
            return $1 + $1 + $2 + '|';
        });
        this.debug('tail=%j\n   %s', tail, tail, pl, re);
        var t = pl.type === '*' ? star : pl.type === '?' ? qmark : '\\' + pl.type;
        hasMagic = true;
        re = re.slice(0, pl.reStart) + t + '\\(' + tail;
    }
    // handle trailing things that only matter at the very end.
    clearStateChar();
    if (escaping) {
        // trailing \\
        re += '\\\\';
    }
    // only need to apply the nodot start if the re starts with
    // something that could conceivably capture a dot
    var addPatternStart = false;
    switch (re.charAt(0)) {
        case '.':
        case '[':
        case '(':
            addPatternStart = true;
    }
    // Hack to work around lack of negative lookbehind in JS
    // A pattern like: *.!(x).!(y|z) needs to ensure that a name
    // like 'a.xyz.yz' doesn't match.  So, the first negative
    // lookahead, has to look ALL the way ahead, to the end of
    // the pattern.
    for (var n = negativeLists.length - 1;n > -1; n--) {
        var nl = negativeLists[n];
        var nlBefore = re.slice(0, nl.reStart);
        var nlFirst = re.slice(nl.reStart, nl.reEnd - 8);
        var nlLast = re.slice(nl.reEnd - 8, nl.reEnd);
        var nlAfter = re.slice(nl.reEnd);
        nlLast += nlAfter;
        // Handle nested stuff like *(*.js|!(*.json)), where open parens
        // mean that we should *not* include the ) in the bit that is considered
        // "after" the negated section.
        var openParensBefore = nlBefore.split('(').length - 1;
        var cleanAfter = nlAfter;
        for (i = 0; i < openParensBefore; i++) {
            cleanAfter = cleanAfter.replace(/\)[+*?]?/, '');
        }
        nlAfter = cleanAfter;
        var dollar = '';
        if (nlAfter === '' && isSub !== SUBPARSE) {
            dollar = '$';
        }
        var newRe = nlBefore + nlFirst + nlAfter + dollar + nlLast;
        re = newRe;
    }
    // if the re is not "" at this point, then we need to make sure
    // it doesn't match against an empty path part.
    // Otherwise a/* will match a/, which it should not.
    if (re !== '' && hasMagic) {
        re = '(?=.)' + re;
    }
    if (addPatternStart) {
        re = patternStart + re;
    }
    // parsing just a piece of a larger pattern.
    if (isSub === SUBPARSE) {
        return [re,hasMagic];
    }
    // skip the regexp for non-magical patterns
    // unescape anything in it, though, so that it'll be
    // an exact match against a file etc.
    if (!hasMagic) {
        return globUnescape(pattern);
    }
    var flags = options.nocase ? 'i' : '';
    try {
        var regExp = new RegExp('^' + re + '$', flags);
    } catch (er) {
        // If it was an invalid regular expression, then it can't match
        // anything.  This trick looks for a character after the end of
        // the string, which is of course impossible, except in multi-line
        // mode, but it's not a /m regex.
        return new RegExp('$.');
    }
    regExp._glob = pattern;
    regExp._src = re;
    return regExp;
}

minimatch.makeRe = function (pattern, options) {
    return new Minimatch(pattern, options || {}).makeRe();
};
Minimatch.prototype.makeRe = makeRe;
function makeRe() {
    if (this.regexp || this.regexp === false) 
        return this.regexp;
    // at this point, this.set is a 2d array of partial
    // pattern strings, or "**".
    //
    // It's better to use .match().  This function shouldn't
    // be used, really, but it's pretty convenient sometimes,
    // when you just want to work with a regex.
    var set = this.set;
    if (!set.length) {
        this.regexp = false;
        return this.regexp;
    }
    var options = this.options;
    var twoStar = options.noglobstar ? star : options.dot ? twoStarDot : twoStarNoDot;
    var flags = options.nocase ? 'i' : '';
    var re = set.map(function (pattern) {
        return pattern.map(function (p) {
            return p === GLOBSTAR ? twoStar : typeof p === 'string' ? regExpEscape(p) : p._src;
        }).join('\\\/');
    }).join('|');
    // must match entire pattern
    // ending in a * or ** will make it less strict.
    re = '^(?:' + re + ')$';
    // can match anything, as long as it's not this.
    if (this.negate) 
        re = '^(?!' + re + ').*$';
    try {
        this.regexp = new RegExp(re, flags);
    } catch (ex) {
        this.regexp = false;
    }
    return this.regexp;
}

minimatch.match = function (list, pattern, options) {
    options = options || {};
    var mm = new Minimatch(pattern, options);
    list = list.filter(function (f) {
        return mm.match(f);
    });
    if (mm.options.nonull && !list.length) {
        list.push(pattern);
    }
    return list;
};
Minimatch.prototype.match = match;
function match(f, partial) {
    this.debug('match', f, this.pattern);
    // short-circuit in the case of busted things.
    // comments, etc.
    if (this.comment) 
        return false;
    if (this.empty) 
        return f === '';
    if (f === '/' && partial) 
        return true;
    var options = this.options;
    // windows: need to use /, not \
    if (path.sep !== '/') {
        f = f.split(path.sep).join('/');
    }
    // treat the test path as a set of pathparts.
    f = f.split(slashSplit);
    this.debug(this.pattern, 'split', f);
    // just ONE of the pattern sets in this.set needs to match
    // in order for it to be valid.  If negating, then just one
    // match means that we have failed.
    // Either way, return on the first hit.
    var set = this.set;
    this.debug(this.pattern, 'set', set);
    // Find the basename of the path by looking for the last non-empty segment
    var filename;
    var i;
    for (i = f.length - 1; i >= 0; i--) {
        filename = f[i];
        if (filename) 
            break;
    }
    for (i = 0; i < set.length; i++) {
        var pattern = set[i];
        var file = f;
        if (options.matchBase && pattern.length === 1) {
            file = [filename];
        }
        var hit = this.matchOne(file, pattern, partial);
        if (hit) {
            if (options.flipNegate) 
                return true;
            return !this.negate;
        }
    }
    // didn't get any hits.  this is success if it's a negative
    // pattern, failure otherwise.
    if (options.flipNegate) 
        return false;
    return this.negate;
}

// set partial to true to test if, for example,
// "/a/b" matches the start of "/*/b/*/d"
// Partial means, if you run out of file before you run
// out of pattern, then that's fine, as long as all
// the parts match.
Minimatch.prototype.matchOne = function (file, pattern, partial) {
    var options = this.options;
    this.debug('matchOne', {
        'this': this,
        file: file,
        pattern: pattern
    });
    this.debug('matchOne', file.length, pattern.length);
    for (var fi = 0, pi = 0, fl = file.length, pl = pattern.length;fi < fl && pi < pl; fi++, pi++) {
        this.debug('matchOne loop');
        var p = pattern[pi];
        var f = file[fi];
        this.debug(pattern, p, f);
        // should be impossible.
        // some invalid regexp stuff in the set.
        if (p === false) 
            return false;
        if (p === GLOBSTAR) {
            this.debug('GLOBSTAR', [pattern,p,f]);
            // "**"
            // a/**/b/**/c would match the following:
            // a/b/x/y/z/c
            // a/x/y/z/b/c
            // a/b/x/b/x/c
            // a/b/c
            // To do this, take the rest of the pattern after
            // the **, and see if it would match the file remainder.
            // If so, return success.
            // If not, the ** "swallows" a segment, and try again.
            // This is recursively awful.
            //
            // a/**/b/**/c matching a/b/x/y/z/c
            // - a matches a
            // - doublestar
            //   - matchOne(b/x/y/z/c, b/**/c)
            //     - b matches b
            //     - doublestar
            //       - matchOne(x/y/z/c, c) -> no
            //       - matchOne(y/z/c, c) -> no
            //       - matchOne(z/c, c) -> no
            //       - matchOne(c, c) yes, hit
            var fr = fi;
            var pr = pi + 1;
            if (pr === pl) {
                this.debug('** at the end');
                // a ** at the end will just swallow the rest.
                // We have found a match.
                // however, it will not swallow /.x, unless
                // options.dot is set.
                // . and .. are *never* matched by **, for explosively
                // exponential reasons.
                for (; fi < fl; fi++) {
                    if (file[fi] === '.' || file[fi] === '..' || !options.dot && file[fi].charAt(0) === '.') 
                        return false;
                }
                return true;
            }
            // ok, let's see if we can swallow whatever we can.
            while (fr < fl) {
                var swallowee = file[fr];
                this.debug('\nglobstar while', file, fr, pattern, pr, swallowee);
                // XXX remove this slice.  Just pass the start index.
                if (this.matchOne(file.slice(fr), pattern.slice(pr), partial)) {
                    this.debug('globstar found match!', fr, fl, swallowee);
                    // found a match.
                    return true;
                } else {
                    // can't swallow "." or ".." ever.
                    // can only swallow ".foo" when explicitly asked.
                    if (swallowee === '.' || swallowee === '..' || !options.dot && swallowee.charAt(0) === '.') {
                        this.debug('dot detected!', file, fr, pattern, pr);
                        break;
                    }
                    // ** swallows a segment, and continue.
                    this.debug('globstar swallow a segment, and continue');
                    fr++;
                }
            }
            // no match was found.
            // However, in partial mode, we can't say this is necessarily over.
            // If there's more *pattern* left, then
            if (partial) {
                // ran out of file
                this.debug('\n>>> no match, partial?', file, fr, pattern, pr);
                if (fr === fl) 
                    return true;
            }
            return false;
        }
        // something other than **
        // non-magic patterns just have to match exactly
        // patterns with magic have been turned into regexps.
        var hit;
        if (typeof p === 'string') {
            if (options.nocase) {
                hit = f.toLowerCase() === p.toLowerCase();
            } else {
                hit = f === p;
            }
            this.debug('string match', p, f, hit);
        } else {
            hit = f.match(p);
            this.debug('pattern match', p, f, hit);
        }
        if (!hit) 
            return false;
    }
    // Note: ending in / means that we'll get a final ""
    // at the end of the pattern.  This can only match a
    // corresponding "" at the end of the file.
    // If the file ends in /, then it can only match a
    // a pattern that ends in /, unless the pattern just
    // doesn't have any more for it. But, a/b/ should *not*
    // match "a/b/*", even though "" matches against the
    // [^/]*? pattern, except in partial mode, where it might
    // simply not be reached yet.
    // However, a/b/ should still satisfy a/*
    // now either we fell off the end of the pattern, or we're done.
    if (fi === fl && pi === pl) {
        // ran out of pattern and filename at the same time.
        // an exact hit!
        return true;
    } else if (fi === fl) {
        // ran out of file, but still had pattern left.
        // this is ok if we're doing the match as part of
        // a glob fs traversal.
        return partial;
    } else if (pi === pl) {
        // ran out of pattern, still have file left.
        // this is only acceptable if we're on the very last
        // empty segment of a file with a trailing slash.
        // a/* should match a/b/
        var emptyFileEnd = fi === fl - 1 && file[fi] === '';
        return emptyFileEnd;
    }
    // should be unreachable.
    throw new Error('wtf?');
};
// replace stuff like \* with *
function globUnescape(s) {
    return s.replace(/\\(.)/g, '$1');
}

function regExpEscape(s) {
    return s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}


}).call(this,require('_process'))
},{"_process":108,"brace-expansion":51,"path":107}],91:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
'use strict';
// modified from https://github.com/es-shims/es5-shim
var has = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var slice = Array.prototype.slice;
var isArgs = require('./isArguments');
var isEnumerable = Object.prototype.propertyIsEnumerable;
var hasDontEnumBug = !isEnumerable.call({
    toString: null
}, 'toString');
var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
var dontEnums = ['toString','toLocaleString','valueOf','hasOwnProperty','isPrototypeOf',
    'propertyIsEnumerable','constructor'];
var equalsConstructorPrototype = function (o) {
    var ctor = o.constructor;
    return ctor && ctor.prototype === o;
};
var excludedKeys = {
    $console: true,
    $external: true,
    $frame: true,
    $frameElement: true,
    $frames: true,
    $innerHeight: true,
    $innerWidth: true,
    $outerHeight: true,
    $outerWidth: true,
    $pageXOffset: true,
    $pageYOffset: true,
    $parent: true,
    $scrollLeft: true,
    $scrollTop: true,
    $scrollX: true,
    $scrollY: true,
    $self: true,
    $webkitIndexedDB: true,
    $webkitStorageInfo: true,
    $window: true
};
var hasAutomationEqualityBug = (function () {
    /* global window */
    if (typeof window === 'undefined') {
        return false;
    }
    for (var k in window) {
        try {
            if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
                try {
                    equalsConstructorPrototype(window[k]);
                } catch (e) {
                    return true;
                }
            }
        } catch (e) {
            return true;
        }
    }
    return false;
})();
var equalsConstructorPrototypeIfNotBuggy = function (o) {
    /* global window */
    if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
        return equalsConstructorPrototype(o);
    }
    try {
        return equalsConstructorPrototype(o);
    } catch (e) {
        return false;
    }
};
var keysShim = function keys(object) {
    var isObject = object !== null && typeof object === 'object';
    var isFunction = toStr.call(object) === '[object Function]';
    var isArguments = isArgs(object);
    var isString = isObject && toStr.call(object) === '[object String]';
    var theKeys = [];
    if (!isObject && !isFunction && !isArguments) {
        throw new TypeError('Object.keys called on a non-object');
    }
    var skipProto = hasProtoEnumBug && isFunction;
    if (isString && object.length > 0 && !has.call(object, 0)) {
        for (var i = 0;i < object.length; ++i) {
            theKeys.push(String(i));
        }
    }
    if (isArguments && object.length > 0) {
        for (var j = 0;j < object.length; ++j) {
            theKeys.push(String(j));
        }
    } else {
        for (var name in object) {
            if (!(skipProto && name === 'prototype') && has.call(object, name)) {
                theKeys.push(String(name));
            }
        }
    }
    if (hasDontEnumBug) {
        var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
        for (var k = 0;k < dontEnums.length; ++k) {
            if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
                theKeys.push(dontEnums[k]);
            }
        }
    }
    return theKeys;
};
keysShim.shim = function shimObjectKeys() {
    if (Object.keys) {
        var keysWorksWithArguments = (function () {
            // Safari 5.0 bug
            return (Object.keys(arguments) || '').length === 2;
        })(1, 2);
        if (!keysWorksWithArguments) {
            var originalKeys = Object.keys;
            Object.keys = function keys(object) {
                if (isArgs(object)) {
                    return originalKeys(slice.call(object));
                } else {
                    return originalKeys(object);
                }
            };
        }
    } else {
        Object.keys = keysShim;
    }
    return Object.keys || keysShim;
};
module.exports = keysShim;


}).call(this,require('_process'))
},{"./isArguments":92,"_process":108}],92:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
'use strict';
var toStr = Object.prototype.toString;
module.exports = function isArguments(value) {
    var str = toStr.call(value);
    var isArgs = str === '[object Arguments]';
    if (!isArgs) {
        isArgs = str !== '[object Array]' && value !== null && typeof value === 'object' && typeof value.length === 'number' && value.length >= 0 && toStr.call(value.callee) === '[object Function]';
    }
    return isArgs;
};


}).call(this,require('_process'))
},{"_process":108}],93:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
var wrappy = require('wrappy');
module.exports = wrappy(once);
module.exports.strict = wrappy(onceStrict);
once.proto = once(function () {
    Object.defineProperty(Function.prototype, 'once', {
        value: function () {
            return once(this);
        },
        configurable: true
    });
    Object.defineProperty(Function.prototype, 'onceStrict', {
        value: function () {
            return onceStrict(this);
        },
        configurable: true
    });
});
function once(fn) {
    var f = function () {
        if (f.called) 
            return f.value;
        f.called = true;
        return f.value = fn.apply(this, arguments);
    };
    f.called = false;
    return f;
}

function onceStrict(fn) {
    var f = function () {
        if (f.called) 
            throw new Error(f.onceError);
        f.called = true;
        return f.value = fn.apply(this, arguments);
    };
    var name = fn.name || 'Function wrapped with `once`';
    f.onceError = name + " shouldn't be called more than once";
    f.called = false;
    return f;
}


}).call(this,require('_process'))
},{"_process":108,"wrappy":100}],94:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
'use strict';
function posix(path) {
    return path.charAt(0) === '/';
}

function win32(path) {
    // https://github.com/nodejs/node/blob/b3fcc245fb25539909ef1d5eaa01dbf92e168633/lib/path.js#L56
    var splitDeviceRe = /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/;
    var result = splitDeviceRe.exec(path);
    var device = result[1] || '';
    var isUnc = Boolean(device && device.charAt(1) !== ':');
    // UNC paths are always absolute
    return Boolean(result[2] || isUnc);
}

module.exports = process.platform === 'win32' ? win32 : posix;
module.exports.posix = posix;
module.exports.win32 = win32;


}).call(this,require('_process'))
},{"_process":108}],95:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
'use strict';
module.exports = function (str) {
    var isExtendedLengthPath = /^\\\\\?\\/.test(str);
    var hasNonAscii = /[^\x00-\x80]+/.test(str);
    if (isExtendedLengthPath || hasNonAscii) {
        return str;
    }
    return str.replace(/\\/g, '/');
};


}).call(this,require('_process'))
},{"_process":108}],96:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
module.exports = {
    stringify: require('./lib/stringify'),
    parse: require('./lib/parse')
};


}).call(this,require('_process'))
},{"./lib/parse":97,"./lib/stringify":98,"_process":108}],97:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
var assert = require('assert');
var yaml = require('js-yaml');
var xtend = require('xtend');
var utils = require('./utils');
module.exports = parse;
function parse(str) {
    assert.equal(typeof str, 'string', 'smarkt: arg1 str must be type string');
    return str.split('\n----').filter((str) => str).reduce(function (result, field) {
        var data = field.replace(/^\s+|\s+$/g, '').split(/:([^]+)/).filter((str) => str.trim() !== '');
        if (data.length >= 2) {
            if (data[1].trim().charAt(0) !== '-') {
                result[data[0].toLowerCase()] = utils.setBool(data[1].trim());
            } else {
                result = xtend(result, utils.keysToLowerCase(yaml.safeLoad(field)));
            }
        }
        return result;
    }, {});
}


}).call(this,require('_process'))
},{"./utils":99,"_process":108,"assert":104,"js-yaml":60,"xtend":101}],98:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
var objectKeys = require('object-keys');
var assert = require('assert');
var yaml = require('js-yaml');
module.exports = stringify;
function stringify(obj) {
    assert.equal(typeof obj, 'object', 'smarkt: arg1 str must be type object');
    return objectKeys(obj).reduce(function (result, key) {
        var value = obj[key];
        if (typeof value === 'object') {
            result.push(yaml.safeDump({
                [key]: value
            }));
        } else {
            result.push(key + ': ' + value);
        }
        return result;
    }, []).join('\n----\n');
}


}).call(this,require('_process'))
},{"_process":108,"assert":104,"js-yaml":60,"object-keys":91}],99:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
var objectKeys = require('object-keys');
module.exports = {
    keysToLowerCase: keysToLowerCase,
    setBool: setBool
};
function keysToLowerCase(obj) {
    if (!(typeof obj) === 'object' || typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean') {
        return obj;
    }
    var keys = objectKeys(obj);
    var n = keys.length;
    var lowKey;
    while (n--) {
        var key = keys[n];
        if (key === (lowKey = key.toLowerCase())) 
            continue;
        obj[lowKey] = keysToLowerCase(obj[key]);
        delete obj[key];
    }
    return obj;
}

function setBool(str) {
    if (str === 'true') 
        return true;
    if (str === 'false') 
        return false;
    return str;
}


}).call(this,require('_process'))
},{"_process":108,"object-keys":91}],100:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
// Returns a wrapper function that returns a wrapped callback
// The wrapper function should do some stuff, and return a
// presumably different callback function.
// This makes sure that own properties are retained, so that
// decorations and such are not lost along the way.
module.exports = wrappy;
function wrappy(fn, cb) {
    if (fn && cb) 
        return wrappy(fn)(cb);
    if (typeof fn !== 'function') 
        throw new TypeError('need wrapper function');
    Object.keys(fn).forEach(function (k) {
        wrapper[k] = fn[k];
    });
    return wrapper;
    function wrapper() {
        var args = new Array(arguments.length);
        for (var i = 0;i < args.length; i++) {
            args[i] = arguments[i];
        }
        var ret = fn.apply(this, args);
        var cb = args[args.length - 1];
        if (typeof ret === 'function' && ret !== cb) {
            Object.keys(cb).forEach(function (k) {
                ret[k] = cb[k];
            });
        }
        return ret;
    }
    
}


}).call(this,require('_process'))
},{"_process":108}],101:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"_process":108,"dup":30}],102:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
var objectKeys = require('object-keys');
var assert = require('assert');
var slash = require('slash');
var path = require('path');
module.exports = {
    formatUrl: formatUrl,
    filterFile: filterFile,
    getFileType: getFileType,
    getFileMeta: getFileMeta,
    sortChildren: sortChildren,
    isFile: isFile
};
function sortChildren(result, active) {
    var ext = path.extname(active);
    result = result || {};
    result.files = result.files || [];
    result.pages = result.pages || [];
    if (ext) {
        result.files.push(active);
    } else {
        result.pages.push(active);
    }
    return result;
}

function filterFile(file, index) {
    if (file === '.DS_Store') 
        return false;
    if (/(^[.#]|(?:__|~)$)/.test(file)) 
        return false;
    if (file.indexOf(index) >= 0) 
        return false;
    if (file.indexOf('src') >= 0) 
        return false;
    return true;
}

function getFileType(extension, filetypes) {
    return objectKeys(filetypes).reduce(function (result, value, i, source) {
        if (result) 
            return result;
        if (filetypes[value] && filetypes[value].indexOf(extension) >= 0) {
            return value;
        }
        if (i >= source.length) 
            return 'unknown';
    }, '');
}

function isFile(pathFile) {
    assert.equal(typeof pathFile, 'string', 'enoki: arg1 pathFile must be type string');
    return path.extname(pathFile) !== '';
}

function getFileMeta(opts) {
    assert.equal(typeof opts, 'object', 'enoki: arg1 opts must be type object');
    assert.equal(typeof opts.pathFile, 'string', 'enoki: arg1 opts.pathFile must be type string');
    assert.equal(typeof opts.pathParent, 'string', 'enoki: arg1 opts.pathParent must be type string');
    assert.equal(typeof opts.pathRoot, 'string', 'enoki: arg1 opts.pathRoot must be type string');
    assert.equal(typeof opts.filetypes, 'object', 'enoki: arg1 opts.filetypes must be type string');
    var output = {};
    var ext = path.extname(opts.pathFile);
    output.name = path.basename(opts.pathFile, ext);
    output.path = formatUrl(path.join('/', opts.pathParent, '/', opts.pathFile), opts.pathRoot);
    output.url = formatUrl(path.join('/', opts.pathParent, '/', opts.pathFile), opts.pathRoot, opts.pathSiteParent);
    if (ext) {
        output.extension = ext;
        output.filename = path.basename(opts.pathFile);
        output.type = getFileType(output.extension, opts.filetypes);
    }
    return output;
}

function formatUrl(pathFile, pathRoot, pathSiteParent) {
    pathFile = pathFile.replace(pathRoot, '');
    if (pathSiteParent) 
        pathFile = pathFile.replace(pathSiteParent, '');
    pathFile = slash(path.join('/', pathFile));
    return pathFile || '/';
}


}).call(this,require('_process'))
},{"_process":108,"assert":104,"object-keys":91,"path":107,"slash":95}],103:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};


}).call(this,require('_process'))
},{"_process":108}],104:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
// when used in node, this will actually load the util module we depend on
// versus loading the builtin util module as happens otherwise
// this is a bug in node module loading as far as I am concerned
var util = require('util/');
var pSlice = Array.prototype.slice;
var hasOwn = Object.prototype.hasOwnProperty;
// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.
var assert = module.exports = ok;
// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })
assert.AssertionError = function AssertionError(options) {
    this.name = 'AssertionError';
    this.actual = options.actual;
    this.expected = options.expected;
    this.operator = options.operator;
    if (options.message) {
        this.message = options.message;
        this.generatedMessage = false;
    } else {
        this.message = getMessage(this);
        this.generatedMessage = true;
    }
    var stackStartFunction = options.stackStartFunction || fail;
    if (Error.captureStackTrace) {
        Error.captureStackTrace(this, stackStartFunction);
    } else {
        // non v8 browsers so we can have a stacktrace
        var err = new Error();
        if (err.stack) {
            var out = err.stack;
            // try to strip useless frames
            var fn_name = stackStartFunction.name;
            var idx = out.indexOf('\n' + fn_name);
            if (idx >= 0) {
                // once we have located the function frame
                // we need to strip out everything before it (and its line)
                var next_line = out.indexOf('\n', idx + 1);
                out = out.substring(next_line + 1);
            }
            this.stack = out;
        }
    }
};
// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError, Error);
function replacer(key, value) {
    if (util.isUndefined(value)) {
        return '' + value;
    }
    if (util.isNumber(value) && !isFinite(value)) {
        return value.toString();
    }
    if (util.isFunction(value) || util.isRegExp(value)) {
        return value.toString();
    }
    return value;
}

function truncate(s, n) {
    if (util.isString(s)) {
        return s.length < n ? s : s.slice(0, n);
    } else {
        return s;
    }
}

function getMessage(self) {
    return truncate(JSON.stringify(self.actual, replacer), 128) + ' ' + self.operator + ' ' + truncate(JSON.stringify(self.expected, replacer), 128);
}

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.
// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.
function fail(actual, expected, message, operator, stackStartFunction) {
    throw new assert.AssertionError({
        message: message,
        actual: actual,
        expected: expected,
        operator: operator,
        stackStartFunction: stackStartFunction
    });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;
// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.
function ok(value, message) {
    if (!value) 
        fail(value, true, message, '==', assert.ok);
}

assert.ok = ok;
// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);
assert.equal = function equal(actual, expected, message) {
    if (actual != expected) 
        fail(actual, expected, message, '==', assert.equal);
};
// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);
assert.notEqual = function notEqual(actual, expected, message) {
    if (actual == expected) {
        fail(actual, expected, message, '!=', assert.notEqual);
    }
};
// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);
assert.deepEqual = function deepEqual(actual, expected, message) {
    if (!_deepEqual(actual, expected)) {
        fail(actual, expected, message, 'deepEqual', assert.deepEqual);
    }
};
function _deepEqual(actual, expected) {
    // 7.1. All identical values are equivalent, as determined by ===.
    if (actual === expected) {
        return true;
    } else if (util.isBuffer(actual) && util.isBuffer(expected)) {
        if (actual.length != expected.length) 
            return false;
        for (var i = 0;i < actual.length; i++) {
            if (actual[i] !== expected[i]) 
                return false;
        }
        return true;
    // 7.2. If the expected value is a Date object, the actual value is
    // equivalent if it is also a Date object that refers to the same time.
    } else if (util.isDate(actual) && util.isDate(expected)) {
        return actual.getTime() === expected.getTime();
    // 7.3 If the expected value is a RegExp object, the actual value is
    // equivalent if it is also a RegExp object with the same source and
    // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
    } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
        return actual.source === expected.source && actual.global === expected.global && actual.multiline === expected.multiline && actual.lastIndex === expected.lastIndex && actual.ignoreCase === expected.ignoreCase;
    // 7.4. Other pairs that do not both pass typeof value == 'object',
    // equivalence is determined by ==.
    } else if (!util.isObject(actual) && !util.isObject(expected)) {
        return actual == expected;
    } else {
        // 7.5 For all other Object pairs, including Array objects, equivalence is
        // determined by having the same number of owned properties (as verified
        // with Object.prototype.hasOwnProperty.call), the same set of keys
        // (although not necessarily the same order), equivalent values for every
        // corresponding key, and an identical 'prototype' property. Note: this
        // accounts for both named and indexed properties on Arrays.
        return objEquiv(actual, expected);
    }
}

function isArguments(object) {
    return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b) {
    if (util.isNullOrUndefined(a) || util.isNullOrUndefined(b)) 
        return false;
    // an identical 'prototype' property.
    if (a.prototype !== b.prototype) 
        return false;
    // if one is a primitive, the other must be same
    if (util.isPrimitive(a) || util.isPrimitive(b)) {
        return a === b;
    }
    var aIsArgs = isArguments(a), bIsArgs = isArguments(b);
    if (aIsArgs && !bIsArgs || !aIsArgs && bIsArgs) 
        return false;
    if (aIsArgs) {
        a = pSlice.call(a);
        b = pSlice.call(b);
        return _deepEqual(a, b);
    }
    var ka = objectKeys(a), kb = objectKeys(b), key, i;
    // having the same number of owned properties (keys incorporates
    // hasOwnProperty)
    if (ka.length != kb.length) 
        return false;
    //the same set of keys (although not necessarily the same order),
    ka.sort();
    kb.sort();
    //~~~cheap key test
    for (i = ka.length - 1; i >= 0; i--) {
        if (ka[i] != kb[i]) 
            return false;
    }
    //equivalent values for every corresponding key, and
    //~~~possibly expensive deep test
    for (i = ka.length - 1; i >= 0; i--) {
        key = ka[i];
        if (!_deepEqual(a[key], b[key])) 
            return false;
    }
    return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);
assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
    if (_deepEqual(actual, expected)) {
        fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
    }
};
// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);
assert.strictEqual = function strictEqual(actual, expected, message) {
    if (actual !== expected) {
        fail(actual, expected, message, '===', assert.strictEqual);
    }
};
// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);
assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
    if (actual === expected) {
        fail(actual, expected, message, '!==', assert.notStrictEqual);
    }
};
function expectedException(actual, expected) {
    if (!actual || !expected) {
        return false;
    }
    if (Object.prototype.toString.call(expected) == '[object RegExp]') {
        return expected.test(actual);
    } else if (actual instanceof expected) {
        return true;
    } else if (expected.call({}, actual) === true) {
        return true;
    }
    return false;
}

function _throws(shouldThrow, block, expected, message) {
    var actual;
    if (util.isString(expected)) {
        message = expected;
        expected = null;
    }
    try {
        block();
    } catch (e) {
        actual = e;
    }
    message = (expected && expected.name ? ' (' + expected.name + ').' : '.') + (message ? ' ' + message : '.');
    if (shouldThrow && !actual) {
        fail(actual, expected, 'Missing expected exception' + message);
    }
    if (!shouldThrow && expectedException(actual, expected)) {
        fail(actual, expected, 'Got unwanted exception' + message);
    }
    if (shouldThrow && actual && expected && !expectedException(actual, expected) || !shouldThrow && actual) {
        throw actual;
    }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);
assert.throws = function (block, error, message) { /*optional*/ /*optional*/
    _throws.apply(this, [true].concat(pSlice.call(arguments)));
};
// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function (block, message) { /*optional*/
    _throws.apply(this, [false].concat(pSlice.call(arguments)));
};
assert.ifError = function (err) {
    if (err) {
        throw err;
    }
};
var objectKeys = Object.keys || function (obj) {
    var keys = [];
    for (var key in obj) {
        if (hasOwn.call(obj, key)) 
            keys.push(key);
    }
    return keys;
};


}).call(this,require('_process'))
},{"_process":108,"util/":110}],105:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
function EventEmitter() {
    this._events = this._events || {};
    this._maxListeners = this._maxListeners || undefined;
}

module.exports = EventEmitter;
// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;
// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;
// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function (n) {
    if (!isNumber(n) || n < 0 || isNaN(n)) 
        throw TypeError('n must be a positive number');
    this._maxListeners = n;
    return this;
};
EventEmitter.prototype.emit = function (type) {
    var er, handler, len, args, i, listeners;
    if (!this._events) 
        this._events = {};
    // If there is no 'error' event listener then throw.
    if (type === 'error') {
        if (!this._events.error || isObject(this._events.error) && !this._events.error.length) {
            er = arguments[1];
            if (er instanceof Error) {
                throw er; //  Unhandled 'error' event
            }
            throw TypeError('Uncaught, unspecified "error" event.');
        }
    }
    handler = this._events[type];
    if (isUndefined(handler)) 
        return false;
    if (isFunction(handler)) {
        switch (arguments.length) {
                // fast cases
            case 1:
                handler.call(this);
                break;
            case 2:
                handler.call(this, arguments[1]);
                break;
            case 3:
                handler.call(this, arguments[1], arguments[2]);
                break;
            default:
                // slower
                args = Array.prototype.slice.call(arguments, 1);
                handler.apply(this, args);
        }
    } else if (isObject(handler)) {
        args = Array.prototype.slice.call(arguments, 1);
        listeners = handler.slice();
        len = listeners.length;
        for (i = 0; i < len; i++) 
            listeners[i].apply(this, args);
    }
    return true;
};
EventEmitter.prototype.addListener = function (type, listener) {
    var m;
    if (!isFunction(listener)) 
        throw TypeError('listener must be a function');
    if (!this._events) 
        this._events = {};
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (this._events.newListener) 
        this.emit('newListener', type, isFunction(listener.listener) ? listener.listener : listener);
    if (!this._events[type]) 
    // Optimize the case of one listener. Don't need the extra array object.
        this._events[type] = listener;
     else if (isObject(this._events[type])) 
    // If we've already got an array, just append.
        this._events[type].push(listener);
     else 
    // Adding the second element, need to change to array.
        this._events[type] = [this._events[type],listener];
    // Check for listener leak
    if (isObject(this._events[type]) && !this._events[type].warned) {
        if (!isUndefined(this._maxListeners)) {
            m = this._maxListeners;
        } else {
            m = EventEmitter.defaultMaxListeners;
        }
        if (m && m > 0 && this._events[type].length > m) {
            this._events[type].warned = true;
            console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', this._events[type].length);
            if (typeof console.trace === 'function') {
                // not supported in IE 10
                console.trace();
            }
        }
    }
    return this;
};
EventEmitter.prototype.on = EventEmitter.prototype.addListener;
EventEmitter.prototype.once = function (type, listener) {
    if (!isFunction(listener)) 
        throw TypeError('listener must be a function');
    var fired = false;
    function g() {
        this.removeListener(type, g);
        if (!fired) {
            fired = true;
            listener.apply(this, arguments);
        }
    }
    
    g.listener = listener;
    this.on(type, g);
    return this;
};
// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function (type, listener) {
    var list, position, length, i;
    if (!isFunction(listener)) 
        throw TypeError('listener must be a function');
    if (!this._events || !this._events[type]) 
        return this;
    list = this._events[type];
    length = list.length;
    position = -1;
    if (list === listener || isFunction(list.listener) && list.listener === listener) {
        delete this._events[type];
        if (this._events.removeListener) 
            this.emit('removeListener', type, listener);
    } else if (isObject(list)) {
        for (i = length; i-- > 0; ) {
            if (list[i] === listener || list[i].listener && list[i].listener === listener) {
                position = i;
                break;
            }
        }
        if (position < 0) 
            return this;
        if (list.length === 1) {
            list.length = 0;
            delete this._events[type];
        } else {
            list.splice(position, 1);
        }
        if (this._events.removeListener) 
            this.emit('removeListener', type, listener);
    }
    return this;
};
EventEmitter.prototype.removeAllListeners = function (type) {
    var key, listeners;
    if (!this._events) 
        return this;
    // not listening for removeListener, no need to emit
    if (!this._events.removeListener) {
        if (arguments.length === 0) 
            this._events = {};
         else if (this._events[type]) 
            delete this._events[type];
        return this;
    }
    // emit removeListener for all listeners on all events
    if (arguments.length === 0) {
        for (key in this._events) {
            if (key === 'removeListener') 
                continue;
            this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = {};
        return this;
    }
    listeners = this._events[type];
    if (isFunction(listeners)) {
        this.removeListener(type, listeners);
    } else if (listeners) {
        // LIFO order
        while (listeners.length) 
            this.removeListener(type, listeners[listeners.length - 1]);
    }
    delete this._events[type];
    return this;
};
EventEmitter.prototype.listeners = function (type) {
    var ret;
    if (!this._events || !this._events[type]) 
        ret = [];
     else if (isFunction(this._events[type])) 
        ret = [this._events[type]];
     else 
        ret = this._events[type].slice();
    return ret;
};
EventEmitter.prototype.listenerCount = function (type) {
    if (this._events) {
        var evlistener = this._events[type];
        if (isFunction(evlistener)) 
            return 1;
         else if (evlistener) 
            return evlistener.length;
    }
    return 0;
};
EventEmitter.listenerCount = function (emitter, type) {
    return emitter.listenerCount(type);
};
function isFunction(arg) {
    return typeof arg === 'function';
}

function isNumber(arg) {
    return typeof arg === 'number';
}

function isObject(arg) {
    return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
    return arg === void 0;
}


}).call(this,require('_process'))
},{"_process":108}],106:[function(require,module,exports){
arguments[4][59][0].apply(exports,arguments)
},{"_process":108,"dup":59}],107:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
    // if the path tries to go above the root, `up` ends up > 0
    var up = 0;
    for (var i = parts.length - 1;i >= 0; i--) {
        var last = parts[i];
        if (last === '.') {
            parts.splice(i, 1);
        } else if (last === '..') {
            parts.splice(i, 1);
            up++;
        } else if (up) {
            parts.splice(i, 1);
            up--;
        }
    }
    // if the path is allowed to go above the root, restore leading ..s
    if (allowAboveRoot) {
        for (; up--; up) {
            parts.unshift('..');
        }
    }
    return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function (filename) {
    return splitPathRe.exec(filename).slice(1);
};
// path.resolve([from ...], to)
// posix version
exports.resolve = function () {
    var resolvedPath = '', resolvedAbsolute = false;
    for (var i = arguments.length - 1;i >= -1 && !resolvedAbsolute; i--) {
        var path = i >= 0 ? arguments[i] : process.cwd();
        // Skip empty and invalid entries
        if (typeof path !== 'string') {
            throw new TypeError('Arguments to path.resolve must be strings');
        } else if (!path) {
            continue;
        }
        resolvedPath = path + '/' + resolvedPath;
        resolvedAbsolute = path.charAt(0) === '/';
    }
    // At this point the path should be resolved to a full absolute path, but
    // handle relative paths to be safe (might happen when process.cwd() fails)
    // Normalize the path
    resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function (p) {
        return !(!p);
    }), !resolvedAbsolute).join('/');
    return (resolvedAbsolute ? '/' : '') + resolvedPath || '.';
};
// path.normalize(path)
// posix version
exports.normalize = function (path) {
    var isAbsolute = exports.isAbsolute(path), trailingSlash = substr(path, -1) === '/';
    // Normalize the path
    path = normalizeArray(filter(path.split('/'), function (p) {
        return !(!p);
    }), !isAbsolute).join('/');
    if (!path && !isAbsolute) {
        path = '.';
    }
    if (path && trailingSlash) {
        path += '/';
    }
    return (isAbsolute ? '/' : '') + path;
};
// posix version
exports.isAbsolute = function (path) {
    return path.charAt(0) === '/';
};
// posix version
exports.join = function () {
    var paths = Array.prototype.slice.call(arguments, 0);
    return exports.normalize(filter(paths, function (p, index) {
        if (typeof p !== 'string') {
            throw new TypeError('Arguments to path.join must be strings');
        }
        return p;
    }).join('/'));
};
// path.relative(from, to)
// posix version
exports.relative = function (from, to) {
    from = exports.resolve(from).substr(1);
    to = exports.resolve(to).substr(1);
    function trim(arr) {
        var start = 0;
        for (; start < arr.length; start++) {
            if (arr[start] !== '') 
                break;
        }
        var end = arr.length - 1;
        for (; end >= 0; end--) {
            if (arr[end] !== '') 
                break;
        }
        if (start > end) 
            return [];
        return arr.slice(start, end - start + 1);
    }
    
    var fromParts = trim(from.split('/'));
    var toParts = trim(to.split('/'));
    var length = Math.min(fromParts.length, toParts.length);
    var samePartsLength = length;
    for (var i = 0;i < length; i++) {
        if (fromParts[i] !== toParts[i]) {
            samePartsLength = i;
            break;
        }
    }
    var outputParts = [];
    for (var i = samePartsLength;i < fromParts.length; i++) {
        outputParts.push('..');
    }
    outputParts = outputParts.concat(toParts.slice(samePartsLength));
    return outputParts.join('/');
};
exports.sep = '/';
exports.delimiter = ':';
exports.dirname = function (path) {
    var result = splitPath(path), root = result[0], dir = result[1];
    if (!root && !dir) {
        // No dirname whatsoever
        return '.';
    }
    if (dir) {
        // It has a dirname, strip trailing slash
        dir = dir.substr(0, dir.length - 1);
    }
    return root + dir;
};
exports.basename = function (path, ext) {
    var f = splitPath(path)[2];
    // TODO: make this comparison case-insensitive on windows?
    if (ext && f.substr(-1 * ext.length) === ext) {
        f = f.substr(0, f.length - ext.length);
    }
    return f;
};
exports.extname = function (path) {
    return splitPath(path)[3];
};
function filter(xs, f) {
    if (xs.filter) 
        return xs.filter(f);
    var res = [];
    for (var i = 0;i < xs.length; i++) {
        if (f(xs[i], i, xs)) 
            res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b' ? function (str, start, len) {
    return str.substr(start, len);
} : function (str, start, len) {
    if (start < 0) 
        start = str.length + start;
    return str.substr(start, len);
};


}).call(this,require('_process'))
},{"_process":108}],108:[function(require,module,exports){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
// shim for using process in browser
var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
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
    var timeout = setTimeout(cleanUpNextTick);
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
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1;i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}

Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; //  empty string to avoid regexp issues
process.versions = {};
function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
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


},{}],109:[function(require,module,exports){
(function (process){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
module.exports = function isBuffer(arg) {
    return arg && typeof arg === 'object' && typeof arg.copy === 'function' && typeof arg.fill === 'function' && typeof arg.readUInt8 === 'function';
};


}).call(this,require('_process'))
},{"_process":108}],110:[function(require,module,exports){
(function (process,global){
Function.prototype.$asyncbind=function anonymous(self,catcher /*``*/) { var resolver = this; if (catcher===true) { if (!Function.prototype.$asyncbind.EagerThenable) Function.prototype.$asyncbind.EagerThenable = function factory(tick){ var _tasks = [] ; if (!tick) { try { tick = process.nextTick ; } catch (ex) { tick = function(p) { setTimeout(p,0) } } } function _untask(){ for (var i=0; i<_tasks.length; i+=2) { var t = _tasks[i+1], r = _tasks[i] ; for (var j=0; j<t.length; j++) t[j].call(null,r) ; } _tasks = [] ; } function isThenable(obj) { return obj && (obj instanceof Object) && typeof obj.then==="function"; } function EagerThenable(resolver) { function done(inline){ var w ; if (_sync || phase<0 || (w = _thens[phase]).length===0) return ; _tasks.push(result,w) ; _thens = [[],[]] ; if (_tasks.length===2) inline?_untask():tick(_untask) ; } function resolveThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 0 ; result = x ; done(true) ; } function rejectThen(x){ if (phase>=0) return ; if (isThenable(x)) return x.then(resolveThen,rejectThen) ; phase = 1 ; result = x ; done(true) ; } function settler(resolver,rejecter){ _thens[0].push(resolver) ; _thens[1].push(rejecter) ; done() ; } function toString() { return "EagerThenable{"+{'-1':"pending",0:"resolved",1:"rejected"}[phase]+"}="+result.toString() ; } function guard() { try { resolver.call(null,resolveThen,rejectThen) ; } catch (ex) { rejectThen(ex) ; } } this.then = settler ; this.toString = toString ; var _thens = [[],[]], _sync = true, phase = -1, result ; guard() ; _sync = false ; done() ; } EagerThenable.resolve = function(v){ return isThenable(v) ? v : {then:function(resolve,reject){return resolve(v)}}; }; return EagerThenable ; }(); return new (Function.prototype.$asyncbind.EagerThenable)(boundThen); } if (catcher) { if (Function.prototype.$asyncbind.wrapAsyncStack) catcher = Function.prototype.$asyncbind.wrapAsyncStack(catcher); return then; } function then(result,error){ try { return result && (result instanceof Object) && typeof result.then==='function' ? result.then(then,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } function boundThen(result,error) { return resolver.call(self,result,error); } boundThen.then = boundThen; return boundThen; };window.$error=window.$error||function(e){throw e};
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var formatRegExp = /%[sdj%]/g;
exports.format = function (f) {
    if (!isString(f)) {
        var objects = [];
        for (var i = 0;i < arguments.length; i++) {
            objects.push(inspect(arguments[i]));
        }
        return objects.join(' ');
    }
    var i = 1;
    var args = arguments;
    var len = args.length;
    var str = String(f).replace(formatRegExp, function (x) {
        if (x === '%%') 
            return '%';
        if (i >= len) 
            return x;
        switch (x) {
            case '%s':
                return String(args[i++]);
            case '%d':
                return Number(args[i++]);
            case '%j':
                try {
                    return JSON.stringify(args[i++]);
                } catch (_) {
                    return '[Circular]';
                }
            default:
                return x;
        }
    });
    for (var x = args[i];i < len; x = args[++i]) {
        if (isNull(x) || !isObject(x)) {
            str += ' ' + x;
        } else {
            str += ' ' + inspect(x);
        }
    }
    return str;
};
// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function (fn, msg) {
    // Allow for deprecating things in the process of starting up.
    if (isUndefined(global.process)) {
        return function () {
            return exports.deprecate(fn, msg).apply(this, arguments);
        };
    }
    if (process.noDeprecation === true) {
        return fn;
    }
    var warned = false;
    function deprecated() {
        if (!warned) {
            if (process.throwDeprecation) {
                throw new Error(msg);
            } else if (process.traceDeprecation) {
                console.trace(msg);
            } else {
                console.error(msg);
            }
            warned = true;
        }
        return fn.apply(this, arguments);
    }
    
    return deprecated;
};
var debugs = {};
var debugEnviron;
exports.debuglog = function (set) {
    if (isUndefined(debugEnviron)) 
        debugEnviron = process.env.NODE_DEBUG || '';
    set = set.toUpperCase();
    if (!debugs[set]) {
        if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
            var pid = process.pid;
            debugs[set] = function () {
                var msg = exports.format.apply(exports, arguments);
                console.error('%s %d: %s', set, pid, msg);
            };
        } else {
            debugs[set] = function () {};
        }
    }
    return debugs[set];
};
/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
    // default options
    var ctx = {
        seen: [],
        stylize: stylizeNoColor
    };
    // legacy...
    if (arguments.length >= 3) 
        ctx.depth = arguments[2];
    if (arguments.length >= 4) 
        ctx.colors = arguments[3];
    if (isBoolean(opts)) {
        // legacy...
        ctx.showHidden = opts;
    } else if (opts) {
        // got an "options" object
        exports._extend(ctx, opts);
    }
    // set default options
    if (isUndefined(ctx.showHidden)) 
        ctx.showHidden = false;
    if (isUndefined(ctx.depth)) 
        ctx.depth = 2;
    if (isUndefined(ctx.colors)) 
        ctx.colors = false;
    if (isUndefined(ctx.customInspect)) 
        ctx.customInspect = true;
    if (ctx.colors) 
        ctx.stylize = stylizeWithColor;
    return formatValue(ctx, obj, ctx.depth);
}

exports.inspect = inspect;
// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
    'bold': [1,22],
    'italic': [3,23],
    'underline': [4,24],
    'inverse': [7,27],
    'white': [37,39],
    'grey': [90,39],
    'black': [30,39],
    'blue': [34,39],
    'cyan': [36,39],
    'green': [32,39],
    'magenta': [35,39],
    'red': [31,39],
    'yellow': [33,39]
};
// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
    'special': 'cyan',
    'number': 'yellow',
    'boolean': 'yellow',
    'undefined': 'grey',
    'null': 'bold',
    'string': 'green',
    'date': 'magenta',
    // "name": intentionally not styling
    'regexp': 'red'
};
function stylizeWithColor(str, styleType) {
    var style = inspect.styles[styleType];
    if (style) {
        return '\u001b[' + inspect.colors[style][0] + 'm' + str + '\u001b[' + inspect.colors[style][1] + 'm';
    } else {
        return str;
    }
}

function stylizeNoColor(str, styleType) {
    return str;
}

function arrayToHash(array) {
    var hash = {};
    array.forEach(function (val, idx) {
        hash[val] = true;
    });
    return hash;
}

function formatValue(ctx, value, recurseTimes) {
    // Provide a hook for user-specified inspect functions.
    // Check that value is an object with an inspect function on it
    // Filter out the util module, it's inspect function is special
    // Also filter out any prototype objects using the circular check.
    if (ctx.customInspect && value && isFunction(value.inspect) && value.inspect !== exports.inspect && !(value.constructor && value.constructor.prototype === value)) {
        var ret = value.inspect(recurseTimes, ctx);
        if (!isString(ret)) {
            ret = formatValue(ctx, ret, recurseTimes);
        }
        return ret;
    }
    // Primitive types cannot have properties
    var primitive = formatPrimitive(ctx, value);
    if (primitive) {
        return primitive;
    }
    // Look up the keys of the object.
    var keys = Object.keys(value);
    var visibleKeys = arrayToHash(keys);
    if (ctx.showHidden) {
        keys = Object.getOwnPropertyNames(value);
    }
    // IE doesn't make error fields non-enumerable
    // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
    if (isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
        return formatError(value);
    }
    // Some type of object without properties can be shortcutted.
    if (keys.length === 0) {
        if (isFunction(value)) {
            var name = value.name ? ': ' + value.name : '';
            return ctx.stylize('[Function' + name + ']', 'special');
        }
        if (isRegExp(value)) {
            return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
        }
        if (isDate(value)) {
            return ctx.stylize(Date.prototype.toString.call(value), 'date');
        }
        if (isError(value)) {
            return formatError(value);
        }
    }
    var base = '', array = false, braces = ['{','}'];
    // Make Array say that they are Array
    if (isArray(value)) {
        array = true;
        braces = ['[',']'];
    }
    // Make functions say that they are functions
    if (isFunction(value)) {
        var n = value.name ? ': ' + value.name : '';
        base = ' [Function' + n + ']';
    }
    // Make RegExps say that they are RegExps
    if (isRegExp(value)) {
        base = ' ' + RegExp.prototype.toString.call(value);
    }
    // Make dates with properties first say the date
    if (isDate(value)) {
        base = ' ' + Date.prototype.toUTCString.call(value);
    }
    // Make error with message first say the error
    if (isError(value)) {
        base = ' ' + formatError(value);
    }
    if (keys.length === 0 && (!array || value.length == 0)) {
        return braces[0] + base + braces[1];
    }
    if (recurseTimes < 0) {
        if (isRegExp(value)) {
            return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
        } else {
            return ctx.stylize('[Object]', 'special');
        }
    }
    ctx.seen.push(value);
    var output;
    if (array) {
        output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
    } else {
        output = keys.map(function (key) {
            return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
        });
    }
    ctx.seen.pop();
    return reduceToSingleString(output, base, braces);
}

function formatPrimitive(ctx, value) {
    if (isUndefined(value)) 
        return ctx.stylize('undefined', 'undefined');
    if (isString(value)) {
        var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
        return ctx.stylize(simple, 'string');
    }
    if (isNumber(value)) 
        return ctx.stylize('' + value, 'number');
    if (isBoolean(value)) 
        return ctx.stylize('' + value, 'boolean');
    // For some reason typeof null is "object", so special case here.
    if (isNull(value)) 
        return ctx.stylize('null', 'null');
}

function formatError(value) {
    return '[' + Error.prototype.toString.call(value) + ']';
}

function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
    var output = [];
    for (var i = 0, l = value.length;i < l; ++i) {
        if (hasOwnProperty(value, String(i))) {
            output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
        } else {
            output.push('');
        }
    }
    keys.forEach(function (key) {
        if (!key.match(/^\d+$/)) {
            output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
        }
    });
    return output;
}

function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
    var name, str, desc;
    desc = Object.getOwnPropertyDescriptor(value, key) || {
        value: value[key]
    };
    if (desc.get) {
        if (desc.set) {
            str = ctx.stylize('[Getter/Setter]', 'special');
        } else {
            str = ctx.stylize('[Getter]', 'special');
        }
    } else {
        if (desc.set) {
            str = ctx.stylize('[Setter]', 'special');
        }
    }
    if (!hasOwnProperty(visibleKeys, key)) {
        name = '[' + key + ']';
    }
    if (!str) {
        if (ctx.seen.indexOf(desc.value) < 0) {
            if (isNull(recurseTimes)) {
                str = formatValue(ctx, desc.value, null);
            } else {
                str = formatValue(ctx, desc.value, recurseTimes - 1);
            }
            if (str.indexOf('\n') > -1) {
                if (array) {
                    str = str.split('\n').map(function (line) {
                        return '  ' + line;
                    }).join('\n').substr(2);
                } else {
                    str = '\n' + str.split('\n').map(function (line) {
                        return '   ' + line;
                    }).join('\n');
                }
            }
        } else {
            str = ctx.stylize('[Circular]', 'special');
        }
    }
    if (isUndefined(name)) {
        if (array && key.match(/^\d+$/)) {
            return str;
        }
        name = JSON.stringify('' + key);
        if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
            name = name.substr(1, name.length - 2);
            name = ctx.stylize(name, 'name');
        } else {
            name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
            name = ctx.stylize(name, 'string');
        }
    }
    return name + ': ' + str;
}

function reduceToSingleString(output, base, braces) {
    var numLinesEst = 0;
    var length = output.reduce(function (prev, cur) {
        numLinesEst++;
        if (cur.indexOf('\n') >= 0) 
            numLinesEst++;
        return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
    }, 0);
    if (length > 60) {
        return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
    }
    return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}

// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
    return Array.isArray(ar);
}

exports.isArray = isArray;
function isBoolean(arg) {
    return typeof arg === 'boolean';
}

exports.isBoolean = isBoolean;
function isNull(arg) {
    return arg === null;
}

exports.isNull = isNull;
function isNullOrUndefined(arg) {
    return arg == null;
}

exports.isNullOrUndefined = isNullOrUndefined;
function isNumber(arg) {
    return typeof arg === 'number';
}

exports.isNumber = isNumber;
function isString(arg) {
    return typeof arg === 'string';
}

exports.isString = isString;
function isSymbol(arg) {
    return typeof arg === 'symbol';
}

exports.isSymbol = isSymbol;
function isUndefined(arg) {
    return arg === void 0;
}

exports.isUndefined = isUndefined;
function isRegExp(re) {
    return isObject(re) && objectToString(re) === '[object RegExp]';
}

exports.isRegExp = isRegExp;
function isObject(arg) {
    return typeof arg === 'object' && arg !== null;
}

exports.isObject = isObject;
function isDate(d) {
    return isObject(d) && objectToString(d) === '[object Date]';
}

exports.isDate = isDate;
function isError(e) {
    return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
}

exports.isError = isError;
function isFunction(arg) {
    return typeof arg === 'function';
}

exports.isFunction = isFunction;
function isPrimitive(arg) {
    return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || typeof arg === 'symbol' || typeof arg === 'undefined'; //  ES6 symbol
}

exports.isPrimitive = isPrimitive;
exports.isBuffer = require('./support/isBuffer');
function objectToString(o) {
    return Object.prototype.toString.call(o);
}

function pad(n) {
    return n < 10 ? '0' + n.toString(10) : n.toString(10);
}

var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
// 26 Feb 16:19:34
function timestamp() {
    var d = new Date();
    var time = [pad(d.getHours()),pad(d.getMinutes()),pad(d.getSeconds())].join(':');
    return [d.getDate(),months[d.getMonth()],time].join(' ');
}

// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function () {
    console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};
/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = require('inherits');
exports._extend = function (origin, add) {
    // Don't do anything if add isn't an object
    if (!add || !isObject(add)) 
        return origin;
    var keys = Object.keys(add);
    var i = keys.length;
    while (i--) {
        origin[keys[i]] = add[keys[i]];
    }
    return origin;
};
function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}


}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./support/isBuffer":109,"_process":108,"inherits":106}]},{},[3]);
