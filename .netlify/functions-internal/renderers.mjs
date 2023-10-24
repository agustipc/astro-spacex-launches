import { options, h as h$1, Fragment, Component } from 'preact';

var o=/[\s\n\\/='"\0<>]/,a=/^(xlink|xmlns|xml)(:|[A-Z])/,n=/^accessK|^auto[A-Z]|^ch|^col|cont|cross|dateT|encT|form[A-Z]|frame|hrefL|inputM|maxL|minL|noV|playsI|readO|rowS|spellC|src[A-Z]|tabI|item[A-Z]/,i=/^ac|^ali|arabic|basel|cap|clipPath$|clipRule$|color|dominant|enable|fill|flood|font|glyph[^R]|horiz|image|letter|lighting|marker[^WUH]|overline|panose|pointe|paint|rendering|shape|stop|strikethrough|stroke|text[^L]|transform|underline|unicode|units|^v[^i]|^w|^xH/,l=/["&<]/;function s(e){if(0===e.length||!1===l.test(e))return e;for(var t=0,r=0,o="",a="";r<e.length;r++){switch(e.charCodeAt(r)){case 34:a="&quot;";break;case 38:a="&amp;";break;case 60:a="&lt;";break;default:continue}r!==t&&(o+=e.slice(t,r)),o+=a,t=r+1;}return r!==t&&(o+=e.slice(t,r)),o}var c={},p=new Set(["animation-iteration-count","border-image-outset","border-image-slice","border-image-width","box-flex","box-flex-group","box-ordinal-group","column-count","fill-opacity","flex","flex-grow","flex-negative","flex-order","flex-positive","flex-shrink","flood-opacity","font-weight","grid-column","grid-row","line-clamp","line-height","opacity","order","orphans","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-miterlimit","stroke-opacity","stroke-width","tab-size","widows","z-index","zoom"]),u=/[A-Z]/g;function _(e){var t="";for(var r in e){var o=e[r];if(null!=o&&""!==o){var a="-"==r[0]?r:c[r]||(c[r]=r.replace(u,"-$&").toLowerCase()),n=";";"number"!=typeof o||a.startsWith("--")||p.has(a)||(n="px;"),t=t+a+":"+o+n;}}return t||void 0}var d,f,h,m,v=[],g=Array.isArray,y=Object.assign;function b(o,a){var n=options.__s;options.__s=!0,d=options.__b,f=options.diffed,h=options.__r,m=options.unmount;var i=h$1(Fragment,null);i.__k=[o];try{return C(o,a||x,!1,void 0,i)}finally{options.__c&&options.__c(o,v),options.__s=n,v.length=0;}}function k(){this.__d=!0;}var x={};function w(e,t){var r,o=e.type,a=!0;return e.__c?(a=!1,(r=e.__c).state=r.__s):r=new o(e.props,t),e.__c=r,r.__v=e,r.props=e.props,r.context=t,r.__d=!0,null==r.state&&(r.state=x),null==r.__s&&(r.__s=r.state),o.getDerivedStateFromProps?r.state=y({},r.state,o.getDerivedStateFromProps(r.props,r.state)):a&&r.componentWillMount?(r.componentWillMount(),r.state=r.__s!==r.state?r.__s:r.state):!a&&r.componentWillUpdate&&r.componentWillUpdate(),h&&h(e),r.render(r.props,r.state,t)}function C(t,l,c,p,u){if(null==t||!0===t||!1===t||""===t)return "";if("object"!=typeof t)return "function"==typeof t?"":s(t+"");if(g(t)){var v="";u.__k=t;for(var b=0;b<t.length;b++){var x=t[b];null!=x&&"boolean"!=typeof x&&(v+=C(x,l,c,p,u));}return v}if(void 0!==t.constructor)return "";t.__=u,d&&d(t);var A,L,D,E=t.type,T=t.props,Z=l;if("function"==typeof E){if(E===Fragment){if(T.UNSTABLE_comment)return "\x3c!--"+s(T.UNSTABLE_comment||"")+"--\x3e";L=T.children;}else {if(null!=(A=E.contextType)){var F=l[A.__c];Z=F?F.props.value:A.__;}if(E.prototype&&"function"==typeof E.prototype.render)L=w(t,Z),D=t.__c;else {t.__c=D={__v:t,props:T,context:Z,setState:k,forceUpdate:k,__d:!0,__h:[]};for(var U=0;D.__d&&U++<25;)D.__d=!1,h&&h(t),L=E.call(D,T,Z);D.__d=!0;}if(null!=D.getChildContext&&(l=y({},l,D.getChildContext())),(E.getDerivedStateFromError||D.componentDidCatch)&&options.errorBoundaries){var W="";L=null!=L&&L.type===Fragment&&null==L.key?L.props.children:L;try{return W=C(L,l,c,p,t)}catch(e){return E.getDerivedStateFromError&&(D.__s=E.getDerivedStateFromError(e)),D.componentDidCatch&&D.componentDidCatch(e,{}),D.__d&&(L=w(t,l),null!=(D=t.__c).getChildContext&&(l=y({},l,D.getChildContext())),W=C(L=null!=L&&L.type===Fragment&&null==L.key?L.props.children:L,l,c,p,t)),W}finally{f&&f(t),t.__=void 0,m&&m(t);}}}var $=C(L=null!=L&&L.type===Fragment&&null==L.key?L.props.children:L,l,c,p,t);return f&&f(t),t.__=void 0,m&&m(t),$}var M,j="<"+E,z="";for(var H in T){var q=T[H];switch(H){case"children":M=q;continue;case"key":case"ref":case"__self":case"__source":continue;case"htmlFor":if("for"in T)continue;H="for";break;case"className":if("class"in T)continue;H="class";break;case"defaultChecked":H="checked";break;case"defaultSelected":H="selected";break;case"defaultValue":case"value":switch(H="value",E){case"textarea":M=q;continue;case"select":p=q;continue;case"option":p!=q||"selected"in T||(j+=" selected");}break;case"dangerouslySetInnerHTML":z=q&&q.__html;continue;case"style":"object"==typeof q&&(q=_(q));break;case"acceptCharset":H="accept-charset";break;case"httpEquiv":H="http-equiv";break;default:if(a.test(H))H=H.replace(a,"$1:$2").toLowerCase();else {if(o.test(H))continue;"-"!==H[4]&&"draggable"!==H||null==q?c?i.test(H)&&(H="panose1"===H?"panose-1":H.replace(/([A-Z])/g,"-$1").toLowerCase()):n.test(H)&&(H=H.toLowerCase()):q+="";}}null!=q&&!1!==q&&"function"!=typeof q&&(j=!0===q||""===q?j+" "+H:j+" "+H+'="'+s(q+"")+'"');}if(o.test(E))throw new Error(E+" is not a valid HTML tag name in "+j+">");return z||("string"==typeof M?z=s(M):null!=M&&!1!==M&&!0!==M&&(z=C(M,l,"svg"===E||"foreignObject"!==E&&c,p,t))),f&&f(t),t.__=void 0,m&&m(t),!z&&S.has(E)?j+"/>":j+">"+z+"</"+E+">"}var S=new Set(["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"]);

const contexts = /* @__PURE__ */ new WeakMap();
function getContext(result) {
  if (contexts.has(result)) {
    return contexts.get(result);
  }
  let ctx = {
    c: 0,
    get id() {
      return "p" + this.c.toString();
    },
    signals: /* @__PURE__ */ new Map(),
    propsToSignals: /* @__PURE__ */ new Map()
  };
  contexts.set(result, ctx);
  return ctx;
}
function incrementId(ctx) {
  let id = ctx.id;
  ctx.c++;
  return id;
}

function isSignal(x) {
  return x != null && typeof x === "object" && typeof x.peek === "function" && "value" in x;
}
function restoreSignalsOnProps(ctx, props) {
  let propMap;
  if (ctx.propsToSignals.has(props)) {
    propMap = ctx.propsToSignals.get(props);
  } else {
    propMap = /* @__PURE__ */ new Map();
    ctx.propsToSignals.set(props, propMap);
  }
  for (const [key, signal] of propMap) {
    props[key] = signal;
  }
  return propMap;
}
function serializeSignals(ctx, props, attrs, map) {
  const signals = {};
  for (const [key, value] of Object.entries(props)) {
    if (isSignal(value)) {
      props[key] = value.peek();
      map.set(key, value);
      let id;
      if (ctx.signals.has(value)) {
        id = ctx.signals.get(value);
      } else {
        id = incrementId(ctx);
        ctx.signals.set(value, id);
      }
      signals[key] = id;
    }
  }
  if (Object.keys(signals).length) {
    attrs["data-preact-signals"] = JSON.stringify(signals);
  }
}

const StaticHtml = ({ value, name, hydrate = true }) => {
  if (!value)
    return null;
  const tagName = hydrate ? "astro-slot" : "astro-static-slot";
  return h$1(tagName, { name, dangerouslySetInnerHTML: { __html: value } });
};
StaticHtml.shouldComponentUpdate = () => false;
var static_html_default = StaticHtml;

const slotName = (str) => str.trim().replace(/[-_]([a-z])/g, (_, w) => w.toUpperCase());
let originalConsoleError;
let consoleFilterRefs = 0;
function check(Component$1, props, children) {
  if (typeof Component$1 !== "function")
    return false;
  if (Component$1.prototype != null && typeof Component$1.prototype.render === "function") {
    return Component.isPrototypeOf(Component$1);
  }
  useConsoleFilter();
  try {
    try {
      const { html } = renderToStaticMarkup.call(this, Component$1, props, children, void 0);
      if (typeof html !== "string") {
        return false;
      }
      return html == "" ? false : !/\<undefined\>/.test(html);
    } catch (err) {
      return false;
    }
  } finally {
    finishUsingConsoleFilter();
  }
}
function shouldHydrate(metadata) {
  return metadata?.astroStaticSlot ? !!metadata.hydrate : true;
}
function renderToStaticMarkup(Component, props, { default: children, ...slotted }, metadata) {
  const ctx = getContext(this.result);
  const slots = {};
  for (const [key, value] of Object.entries(slotted)) {
    const name = slotName(key);
    slots[name] = h$1(static_html_default, {
      hydrate: shouldHydrate(metadata),
      value,
      name
    });
  }
  let propsMap = restoreSignalsOnProps(ctx, props);
  const newProps = { ...props, ...slots };
  const attrs = {};
  serializeSignals(ctx, props, attrs, propsMap);
  const html = b(
    h$1(
      Component,
      newProps,
      children != null ? h$1(static_html_default, {
        hydrate: shouldHydrate(metadata),
        value: children
      }) : children
    )
  );
  return {
    attrs,
    html
  };
}
function useConsoleFilter() {
  consoleFilterRefs++;
  if (!originalConsoleError) {
    originalConsoleError = console.error;
    try {
      console.error = filteredConsoleError;
    } catch (error) {
    }
  }
}
function finishUsingConsoleFilter() {
  consoleFilterRefs--;
}
function filteredConsoleError(msg, ...rest) {
  if (consoleFilterRefs > 0 && typeof msg === "string") {
    const isKnownReactHookError = msg.includes("Warning: Invalid hook call.") && msg.includes("https://reactjs.org/link/invalid-hook-call");
    if (isKnownReactHookError)
      return;
  }
  originalConsoleError(msg, ...rest);
}
var server_default = {
  check,
  renderToStaticMarkup,
  supportsAstroStaticSlot: true
};

const renderers = [Object.assign({"name":"@astrojs/preact","clientEntrypoint":"@astrojs/preact/client.js","serverEntrypoint":"@astrojs/preact/server.js"}, { ssr: server_default }),];

export { renderers };
