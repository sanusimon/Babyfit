(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/_7e7c19._.js", {

"[project]/node_modules/next/dist/esm/server/web/globals.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "edgeInstrumentationOnRequestError": (()=>edgeInstrumentationOnRequestError),
    "ensureInstrumentationRegistered": (()=>ensureInstrumentationRegistered),
    "getEdgeInstrumentationModule": (()=>getEdgeInstrumentationModule)
});
async function getEdgeInstrumentationModule() {
    const instrumentation = '_ENTRIES' in globalThis && _ENTRIES.middleware_instrumentation && await _ENTRIES.middleware_instrumentation;
    return instrumentation;
}
let instrumentationModulePromise = null;
async function registerInstrumentation() {
    // Ensure registerInstrumentation is not called in production build
    if (process.env.NEXT_PHASE === 'phase-production-build') return;
    if (!instrumentationModulePromise) {
        instrumentationModulePromise = getEdgeInstrumentationModule();
    }
    const instrumentation = await instrumentationModulePromise;
    if (instrumentation == null ? void 0 : instrumentation.register) {
        try {
            await instrumentation.register();
        } catch (err) {
            err.message = `An error occurred while loading instrumentation hook: ${err.message}`;
            throw err;
        }
    }
}
async function edgeInstrumentationOnRequestError(...args) {
    const instrumentation = await getEdgeInstrumentationModule();
    try {
        var _instrumentation_onRequestError;
        await (instrumentation == null ? void 0 : (_instrumentation_onRequestError = instrumentation.onRequestError) == null ? void 0 : _instrumentation_onRequestError.call(instrumentation, ...args));
    } catch (err) {
        // Log the soft error and continue, since the original error has already been thrown
        console.error('Error in instrumentation.onRequestError:', err);
    }
}
let registerInstrumentationPromise = null;
function ensureInstrumentationRegistered() {
    if (!registerInstrumentationPromise) {
        registerInstrumentationPromise = registerInstrumentation();
    }
    return registerInstrumentationPromise;
}
function getUnsupportedModuleErrorMessage(module) {
    // warning: if you change these messages, you must adjust how react-dev-overlay's middleware detects modules not found
    return `The edge runtime does not support Node.js '${module}' module.
Learn More: https://nextjs.org/docs/messages/node-module-in-edge-runtime`;
}
function __import_unsupported(moduleName) {
    const proxy = new Proxy(function() {}, {
        get (_obj, prop) {
            if (prop === 'then') {
                return {};
            }
            throw new Error(getUnsupportedModuleErrorMessage(moduleName));
        },
        construct () {
            throw new Error(getUnsupportedModuleErrorMessage(moduleName));
        },
        apply (_target, _this, args) {
            if (typeof args[0] === 'function') {
                return args[0](proxy);
            }
            throw new Error(getUnsupportedModuleErrorMessage(moduleName));
        }
    });
    return new Proxy({}, {
        get: ()=>proxy
    });
}
function enhanceGlobals() {
    // The condition is true when the "process" module is provided
    if (process !== global.process) {
        // prefer local process but global.process has correct "env"
        process.env = global.process.env;
        global.process = process;
    }
    // to allow building code that import but does not use node.js modules,
    // webpack will expect this function to exist in global scope
    Object.defineProperty(globalThis, '__import_unsupported', {
        value: __import_unsupported,
        enumerable: false,
        configurable: false
    });
    // Eagerly fire instrumentation hook to make the startup faster.
    void ensureInstrumentationRegistered();
}
enhanceGlobals(); //# sourceMappingURL=globals.js.map
}}),
"[project]/node_modules/next/dist/esm/server/web/error.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "PageSignatureError": (()=>PageSignatureError),
    "RemovedPageError": (()=>RemovedPageError),
    "RemovedUAError": (()=>RemovedUAError)
});
class PageSignatureError extends Error {
    constructor({ page }){
        super(`The middleware "${page}" accepts an async API directly with the form:
  
  export function middleware(request, event) {
    return NextResponse.redirect('/new-location')
  }
  
  Read more: https://nextjs.org/docs/messages/middleware-new-signature
  `);
    }
}
class RemovedPageError extends Error {
    constructor(){
        super(`The request.page has been deprecated in favour of \`URLPattern\`.
  Read more: https://nextjs.org/docs/messages/middleware-request-page
  `);
    }
}
class RemovedUAError extends Error {
    constructor(){
        super(`The request.ua has been removed in favour of \`userAgent\` function.
  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
  `);
    }
} //# sourceMappingURL=error.js.map
}}),
"[project]/node_modules/next/dist/esm/lib/constants.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ACTION_SUFFIX": (()=>ACTION_SUFFIX),
    "APP_DIR_ALIAS": (()=>APP_DIR_ALIAS),
    "CACHE_ONE_YEAR": (()=>CACHE_ONE_YEAR),
    "DOT_NEXT_ALIAS": (()=>DOT_NEXT_ALIAS),
    "ESLINT_DEFAULT_DIRS": (()=>ESLINT_DEFAULT_DIRS),
    "GSP_NO_RETURNED_VALUE": (()=>GSP_NO_RETURNED_VALUE),
    "GSSP_COMPONENT_MEMBER_ERROR": (()=>GSSP_COMPONENT_MEMBER_ERROR),
    "GSSP_NO_RETURNED_VALUE": (()=>GSSP_NO_RETURNED_VALUE),
    "INFINITE_CACHE": (()=>INFINITE_CACHE),
    "INSTRUMENTATION_HOOK_FILENAME": (()=>INSTRUMENTATION_HOOK_FILENAME),
    "MATCHED_PATH_HEADER": (()=>MATCHED_PATH_HEADER),
    "MIDDLEWARE_FILENAME": (()=>MIDDLEWARE_FILENAME),
    "MIDDLEWARE_LOCATION_REGEXP": (()=>MIDDLEWARE_LOCATION_REGEXP),
    "NEXT_BODY_SUFFIX": (()=>NEXT_BODY_SUFFIX),
    "NEXT_CACHE_IMPLICIT_TAG_ID": (()=>NEXT_CACHE_IMPLICIT_TAG_ID),
    "NEXT_CACHE_REVALIDATED_TAGS_HEADER": (()=>NEXT_CACHE_REVALIDATED_TAGS_HEADER),
    "NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER": (()=>NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER),
    "NEXT_CACHE_SOFT_TAGS_HEADER": (()=>NEXT_CACHE_SOFT_TAGS_HEADER),
    "NEXT_CACHE_SOFT_TAG_MAX_LENGTH": (()=>NEXT_CACHE_SOFT_TAG_MAX_LENGTH),
    "NEXT_CACHE_TAGS_HEADER": (()=>NEXT_CACHE_TAGS_HEADER),
    "NEXT_CACHE_TAG_MAX_ITEMS": (()=>NEXT_CACHE_TAG_MAX_ITEMS),
    "NEXT_CACHE_TAG_MAX_LENGTH": (()=>NEXT_CACHE_TAG_MAX_LENGTH),
    "NEXT_DATA_SUFFIX": (()=>NEXT_DATA_SUFFIX),
    "NEXT_INTERCEPTION_MARKER_PREFIX": (()=>NEXT_INTERCEPTION_MARKER_PREFIX),
    "NEXT_META_SUFFIX": (()=>NEXT_META_SUFFIX),
    "NEXT_QUERY_PARAM_PREFIX": (()=>NEXT_QUERY_PARAM_PREFIX),
    "NEXT_RESUME_HEADER": (()=>NEXT_RESUME_HEADER),
    "NON_STANDARD_NODE_ENV": (()=>NON_STANDARD_NODE_ENV),
    "PAGES_DIR_ALIAS": (()=>PAGES_DIR_ALIAS),
    "PRERENDER_REVALIDATE_HEADER": (()=>PRERENDER_REVALIDATE_HEADER),
    "PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER": (()=>PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER),
    "PUBLIC_DIR_MIDDLEWARE_CONFLICT": (()=>PUBLIC_DIR_MIDDLEWARE_CONFLICT),
    "ROOT_DIR_ALIAS": (()=>ROOT_DIR_ALIAS),
    "RSC_ACTION_CLIENT_WRAPPER_ALIAS": (()=>RSC_ACTION_CLIENT_WRAPPER_ALIAS),
    "RSC_ACTION_ENCRYPTION_ALIAS": (()=>RSC_ACTION_ENCRYPTION_ALIAS),
    "RSC_ACTION_PROXY_ALIAS": (()=>RSC_ACTION_PROXY_ALIAS),
    "RSC_ACTION_VALIDATE_ALIAS": (()=>RSC_ACTION_VALIDATE_ALIAS),
    "RSC_CACHE_WRAPPER_ALIAS": (()=>RSC_CACHE_WRAPPER_ALIAS),
    "RSC_MOD_REF_PROXY_ALIAS": (()=>RSC_MOD_REF_PROXY_ALIAS),
    "RSC_PREFETCH_SUFFIX": (()=>RSC_PREFETCH_SUFFIX),
    "RSC_SEGMENTS_DIR_SUFFIX": (()=>RSC_SEGMENTS_DIR_SUFFIX),
    "RSC_SEGMENT_SUFFIX": (()=>RSC_SEGMENT_SUFFIX),
    "RSC_SUFFIX": (()=>RSC_SUFFIX),
    "SERVER_PROPS_EXPORT_ERROR": (()=>SERVER_PROPS_EXPORT_ERROR),
    "SERVER_PROPS_GET_INIT_PROPS_CONFLICT": (()=>SERVER_PROPS_GET_INIT_PROPS_CONFLICT),
    "SERVER_PROPS_SSG_CONFLICT": (()=>SERVER_PROPS_SSG_CONFLICT),
    "SERVER_RUNTIME": (()=>SERVER_RUNTIME),
    "SSG_FALLBACK_EXPORT_ERROR": (()=>SSG_FALLBACK_EXPORT_ERROR),
    "SSG_GET_INITIAL_PROPS_CONFLICT": (()=>SSG_GET_INITIAL_PROPS_CONFLICT),
    "STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR": (()=>STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR),
    "UNSTABLE_REVALIDATE_RENAME_ERROR": (()=>UNSTABLE_REVALIDATE_RENAME_ERROR),
    "WEBPACK_LAYERS": (()=>WEBPACK_LAYERS),
    "WEBPACK_RESOURCE_QUERIES": (()=>WEBPACK_RESOURCE_QUERIES)
});
const NEXT_QUERY_PARAM_PREFIX = 'nxtP';
const NEXT_INTERCEPTION_MARKER_PREFIX = 'nxtI';
const MATCHED_PATH_HEADER = 'x-matched-path';
const PRERENDER_REVALIDATE_HEADER = 'x-prerender-revalidate';
const PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER = 'x-prerender-revalidate-if-generated';
const RSC_PREFETCH_SUFFIX = '.prefetch.rsc';
const RSC_SEGMENTS_DIR_SUFFIX = '.segments';
const RSC_SEGMENT_SUFFIX = '.segment.rsc';
const RSC_SUFFIX = '.rsc';
const ACTION_SUFFIX = '.action';
const NEXT_DATA_SUFFIX = '.json';
const NEXT_META_SUFFIX = '.meta';
const NEXT_BODY_SUFFIX = '.body';
const NEXT_CACHE_TAGS_HEADER = 'x-next-cache-tags';
const NEXT_CACHE_SOFT_TAGS_HEADER = 'x-next-cache-soft-tags';
const NEXT_CACHE_REVALIDATED_TAGS_HEADER = 'x-next-revalidated-tags';
const NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER = 'x-next-revalidate-tag-token';
const NEXT_RESUME_HEADER = 'next-resume';
const NEXT_CACHE_TAG_MAX_ITEMS = 128;
const NEXT_CACHE_TAG_MAX_LENGTH = 256;
const NEXT_CACHE_SOFT_TAG_MAX_LENGTH = 1024;
const NEXT_CACHE_IMPLICIT_TAG_ID = '_N_T_';
const CACHE_ONE_YEAR = 31536000;
const INFINITE_CACHE = 0xfffffffe;
const MIDDLEWARE_FILENAME = 'middleware';
const MIDDLEWARE_LOCATION_REGEXP = `(?:src/)?${MIDDLEWARE_FILENAME}`;
const INSTRUMENTATION_HOOK_FILENAME = 'instrumentation';
const PAGES_DIR_ALIAS = 'private-next-pages';
const DOT_NEXT_ALIAS = 'private-dot-next';
const ROOT_DIR_ALIAS = 'private-next-root-dir';
const APP_DIR_ALIAS = 'private-next-app-dir';
const RSC_MOD_REF_PROXY_ALIAS = 'private-next-rsc-mod-ref-proxy';
const RSC_ACTION_VALIDATE_ALIAS = 'private-next-rsc-action-validate';
const RSC_ACTION_PROXY_ALIAS = 'private-next-rsc-server-reference';
const RSC_CACHE_WRAPPER_ALIAS = 'private-next-rsc-cache-wrapper';
const RSC_ACTION_ENCRYPTION_ALIAS = 'private-next-rsc-action-encryption';
const RSC_ACTION_CLIENT_WRAPPER_ALIAS = 'private-next-rsc-action-client-wrapper';
const PUBLIC_DIR_MIDDLEWARE_CONFLICT = `You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict`;
const SSG_GET_INITIAL_PROPS_CONFLICT = `You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps`;
const SERVER_PROPS_GET_INIT_PROPS_CONFLICT = `You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.`;
const SERVER_PROPS_SSG_CONFLICT = `You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps`;
const STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR = `can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props`;
const SERVER_PROPS_EXPORT_ERROR = `pages with \`getServerSideProps\` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export`;
const GSP_NO_RETURNED_VALUE = 'Your `getStaticProps` function did not return an object. Did you forget to add a `return`?';
const GSSP_NO_RETURNED_VALUE = 'Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?';
const UNSTABLE_REVALIDATE_RENAME_ERROR = 'The `unstable_revalidate` property is available for general use.\n' + 'Please use `revalidate` instead.';
const GSSP_COMPONENT_MEMBER_ERROR = `can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member`;
const NON_STANDARD_NODE_ENV = `You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env`;
const SSG_FALLBACK_EXPORT_ERROR = `Pages with \`fallback\` enabled in \`getStaticPaths\` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export`;
const ESLINT_DEFAULT_DIRS = [
    'app',
    'pages',
    'components',
    'lib',
    'src'
];
const SERVER_RUNTIME = {
    edge: 'edge',
    experimentalEdge: 'experimental-edge',
    nodejs: 'nodejs'
};
/**
 * The names of the webpack layers. These layers are the primitives for the
 * webpack chunks.
 */ const WEBPACK_LAYERS_NAMES = {
    /**
   * The layer for the shared code between the client and server bundles.
   */ shared: 'shared',
    /**
   * The layer for server-only runtime and picking up `react-server` export conditions.
   * Including app router RSC pages and app router custom routes and metadata routes.
   */ reactServerComponents: 'rsc',
    /**
   * Server Side Rendering layer for app (ssr).
   */ serverSideRendering: 'ssr',
    /**
   * The browser client bundle layer for actions.
   */ actionBrowser: 'action-browser',
    /**
   * The layer for the API routes.
   */ api: 'api',
    /**
   * The layer for the middleware code.
   */ middleware: 'middleware',
    /**
   * The layer for the instrumentation hooks.
   */ instrument: 'instrument',
    /**
   * The layer for assets on the edge.
   */ edgeAsset: 'edge-asset',
    /**
   * The browser client bundle layer for App directory.
   */ appPagesBrowser: 'app-pages-browser'
};
const WEBPACK_LAYERS = {
    ...WEBPACK_LAYERS_NAMES,
    GROUP: {
        builtinReact: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser
        ],
        serverOnly: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser,
            WEBPACK_LAYERS_NAMES.instrument,
            WEBPACK_LAYERS_NAMES.middleware
        ],
        neutralTarget: [
            // pages api
            WEBPACK_LAYERS_NAMES.api
        ],
        clientOnly: [
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser
        ],
        bundled: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser,
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser,
            WEBPACK_LAYERS_NAMES.shared,
            WEBPACK_LAYERS_NAMES.instrument
        ],
        appPages: [
            // app router pages and layouts
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser,
            WEBPACK_LAYERS_NAMES.actionBrowser
        ]
    }
};
const WEBPACK_RESOURCE_QUERIES = {
    edgeSSREntry: '__next_edge_ssr_entry__',
    metadata: '__next_metadata__',
    metadataRoute: '__next_metadata_route__',
    metadataImageMeta: '__next_metadata_image_meta__'
};
;
 //# sourceMappingURL=constants.js.map
}}),
"[project]/node_modules/next/dist/esm/server/web/utils.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "fromNodeOutgoingHttpHeaders": (()=>fromNodeOutgoingHttpHeaders),
    "normalizeNextQueryParam": (()=>normalizeNextQueryParam),
    "splitCookiesString": (()=>splitCookiesString),
    "toNodeOutgoingHttpHeaders": (()=>toNodeOutgoingHttpHeaders),
    "validateURL": (()=>validateURL)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/lib/constants.js [middleware] (ecmascript)");
;
function fromNodeOutgoingHttpHeaders(nodeHeaders) {
    const headers = new Headers();
    for (let [key, value] of Object.entries(nodeHeaders)){
        const values = Array.isArray(value) ? value : [
            value
        ];
        for (let v of values){
            if (typeof v === 'undefined') continue;
            if (typeof v === 'number') {
                v = v.toString();
            }
            headers.append(key, v);
        }
    }
    return headers;
}
function splitCookiesString(cookiesString) {
    var cookiesStrings = [];
    var pos = 0;
    var start;
    var ch;
    var lastComma;
    var nextStart;
    var cookiesSeparatorFound;
    function skipWhitespace() {
        while(pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))){
            pos += 1;
        }
        return pos < cookiesString.length;
    }
    function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== '=' && ch !== ';' && ch !== ',';
    }
    while(pos < cookiesString.length){
        start = pos;
        cookiesSeparatorFound = false;
        while(skipWhitespace()){
            ch = cookiesString.charAt(pos);
            if (ch === ',') {
                // ',' is a cookie separator if we have later first '=', not ';' or ','
                lastComma = pos;
                pos += 1;
                skipWhitespace();
                nextStart = pos;
                while(pos < cookiesString.length && notSpecialChar()){
                    pos += 1;
                }
                // currently special character
                if (pos < cookiesString.length && cookiesString.charAt(pos) === '=') {
                    // we found cookies separator
                    cookiesSeparatorFound = true;
                    // pos is inside the next cookie, so back up and return it.
                    pos = nextStart;
                    cookiesStrings.push(cookiesString.substring(start, lastComma));
                    start = pos;
                } else {
                    // in param ',' or param separator ';',
                    // we continue from that comma
                    pos = lastComma + 1;
                }
            } else {
                pos += 1;
            }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
            cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
    }
    return cookiesStrings;
}
function toNodeOutgoingHttpHeaders(headers) {
    const nodeHeaders = {};
    const cookies = [];
    if (headers) {
        for (const [key, value] of headers.entries()){
            if (key.toLowerCase() === 'set-cookie') {
                // We may have gotten a comma joined string of cookies, or multiple
                // set-cookie headers. We need to merge them into one header array
                // to represent all the cookies.
                cookies.push(...splitCookiesString(value));
                nodeHeaders[key] = cookies.length === 1 ? cookies[0] : cookies;
            } else {
                nodeHeaders[key] = value;
            }
        }
    }
    return nodeHeaders;
}
function validateURL(url) {
    try {
        return String(new URL(String(url)));
    } catch (error) {
        throw new Error(`URL is malformed "${String(url)}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`, {
            cause: error
        });
    }
}
function normalizeNextQueryParam(key, onKeyNormalized) {
    const prefixes = [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NEXT_QUERY_PARAM_PREFIX"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NEXT_INTERCEPTION_MARKER_PREFIX"]
    ];
    for (const prefix of prefixes){
        if (key !== prefix && key.startsWith(prefix)) {
            const normalizedKey = key.substring(prefix.length);
            onKeyNormalized(normalizedKey);
        }
    }
} //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/next/dist/esm/server/web/spec-extension/fetch-event.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "NextFetchEvent": (()=>NextFetchEvent),
    "getWaitUntilPromiseFromEvent": (()=>getWaitUntilPromiseFromEvent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/error.js [middleware] (ecmascript)");
;
const responseSymbol = Symbol('response');
const passThroughSymbol = Symbol('passThrough');
const waitUntilSymbol = Symbol('waitUntil');
class FetchEvent {
    constructor(_request, waitUntil){
        this[passThroughSymbol] = false;
        this[waitUntilSymbol] = waitUntil ? {
            kind: 'external',
            function: waitUntil
        } : {
            kind: 'internal',
            promises: []
        };
    }
    // TODO: is this dead code? NextFetchEvent never lets this get called
    respondWith(response) {
        if (!this[responseSymbol]) {
            this[responseSymbol] = Promise.resolve(response);
        }
    }
    // TODO: is this dead code? passThroughSymbol is unused
    passThroughOnException() {
        this[passThroughSymbol] = true;
    }
    waitUntil(promise) {
        if (this[waitUntilSymbol].kind === 'external') {
            // if we received an external waitUntil, we delegate to it
            // TODO(after): this will make us not go through `getServerError(error, 'edge-server')` in `sandbox`
            const waitUntil = this[waitUntilSymbol].function;
            return waitUntil(promise);
        } else {
            // if we didn't receive an external waitUntil, we make it work on our own
            // (and expect the caller to do something with the promises)
            this[waitUntilSymbol].promises.push(promise);
        }
    }
}
function getWaitUntilPromiseFromEvent(event) {
    return event[waitUntilSymbol].kind === 'internal' ? Promise.all(event[waitUntilSymbol].promises).then(()=>{}) : undefined;
}
class NextFetchEvent extends FetchEvent {
    constructor(params){
        var _params_context;
        super(params.request, (_params_context = params.context) == null ? void 0 : _params_context.waitUntil);
        this.sourcePage = params.page;
    }
    /**
   * @deprecated The `request` is now the first parameter and the API is now async.
   *
   * Read more: https://nextjs.org/docs/messages/middleware-new-signature
   */ get request() {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["PageSignatureError"]({
            page: this.sourcePage
        });
    }
    /**
   * @deprecated Using `respondWith` is no longer needed.
   *
   * Read more: https://nextjs.org/docs/messages/middleware-new-signature
   */ respondWith() {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["PageSignatureError"]({
            page: this.sourcePage
        });
    }
} //# sourceMappingURL=fetch-event.js.map
}}),
"[project]/node_modules/next/dist/esm/shared/lib/i18n/detect-domain-locale.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "detectDomainLocale": (()=>detectDomainLocale)
});
function detectDomainLocale(domainItems, hostname, detectedLocale) {
    if (!domainItems) return;
    if (detectedLocale) {
        detectedLocale = detectedLocale.toLowerCase();
    }
    for (const item of domainItems){
        var _item_domain, _item_locales;
        // remove port if present
        const domainHostname = (_item_domain = item.domain) == null ? void 0 : _item_domain.split(':', 1)[0].toLowerCase();
        if (hostname === domainHostname || detectedLocale === item.defaultLocale.toLowerCase() || ((_item_locales = item.locales) == null ? void 0 : _item_locales.some((locale)=>locale.toLowerCase() === detectedLocale))) {
            return item;
        }
    }
} //# sourceMappingURL=detect-domain-locale.js.map
}}),
"[project]/node_modules/next/dist/esm/shared/lib/router/utils/remove-trailing-slash.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * Removes the trailing slash for a given route or page path. Preserves the
 * root page. Examples:
 *   - `/foo/bar/` -> `/foo/bar`
 *   - `/foo/bar` -> `/foo/bar`
 *   - `/` -> `/`
 */ __turbopack_esm__({
    "removeTrailingSlash": (()=>removeTrailingSlash)
});
function removeTrailingSlash(route) {
    return route.replace(/\/$/, '') || '/';
} //# sourceMappingURL=remove-trailing-slash.js.map
}}),
"[project]/node_modules/next/dist/esm/shared/lib/router/utils/parse-path.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * Given a path this function will find the pathname, query and hash and return
 * them. This is useful to parse full paths on the client side.
 * @param path A path to parse e.g. /foo/bar?id=1#hash
 */ __turbopack_esm__({
    "parsePath": (()=>parsePath)
});
function parsePath(path) {
    const hashIndex = path.indexOf('#');
    const queryIndex = path.indexOf('?');
    const hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);
    if (hasQuery || hashIndex > -1) {
        return {
            pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
            query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : undefined) : '',
            hash: hashIndex > -1 ? path.slice(hashIndex) : ''
        };
    }
    return {
        pathname: path,
        query: '',
        hash: ''
    };
} //# sourceMappingURL=parse-path.js.map
}}),
"[project]/node_modules/next/dist/esm/shared/lib/router/utils/add-path-prefix.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "addPathPrefix": (()=>addPathPrefix)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$path$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/shared/lib/router/utils/parse-path.js [middleware] (ecmascript)");
;
function addPathPrefix(path, prefix) {
    if (!path.startsWith('/') || !prefix) {
        return path;
    }
    const { pathname, query, hash } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$path$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["parsePath"])(path);
    return "" + prefix + pathname + query + hash;
} //# sourceMappingURL=add-path-prefix.js.map
}}),
"[project]/node_modules/next/dist/esm/shared/lib/router/utils/add-path-suffix.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "addPathSuffix": (()=>addPathSuffix)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$path$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/shared/lib/router/utils/parse-path.js [middleware] (ecmascript)");
;
function addPathSuffix(path, suffix) {
    if (!path.startsWith('/') || !suffix) {
        return path;
    }
    const { pathname, query, hash } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$path$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["parsePath"])(path);
    return "" + pathname + suffix + query + hash;
} //# sourceMappingURL=add-path-suffix.js.map
}}),
"[project]/node_modules/next/dist/esm/shared/lib/router/utils/path-has-prefix.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "pathHasPrefix": (()=>pathHasPrefix)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$path$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/shared/lib/router/utils/parse-path.js [middleware] (ecmascript)");
;
function pathHasPrefix(path, prefix) {
    if (typeof path !== 'string') {
        return false;
    }
    const { pathname } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$path$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["parsePath"])(path);
    return pathname === prefix || pathname.startsWith(prefix + '/');
} //# sourceMappingURL=path-has-prefix.js.map
}}),
"[project]/node_modules/next/dist/esm/shared/lib/router/utils/add-locale.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "addLocale": (()=>addLocale)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/shared/lib/router/utils/add-path-prefix.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/shared/lib/router/utils/path-has-prefix.js [middleware] (ecmascript)");
;
;
function addLocale(path, locale, defaultLocale, ignorePrefix) {
    // If no locale was given or the locale is the default locale, we don't need
    // to prefix the path.
    if (!locale || locale === defaultLocale) return path;
    const lower = path.toLowerCase();
    // If the path is an API path or the path already has the locale prefix, we
    // don't need to prefix the path.
    if (!ignorePrefix) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["pathHasPrefix"])(lower, '/api')) return path;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["pathHasPrefix"])(lower, "/" + locale.toLowerCase())) return path;
    }
    // Add the locale prefix to the path.
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["addPathPrefix"])(path, "/" + locale);
} //# sourceMappingURL=add-locale.js.map
}}),
"[project]/node_modules/next/dist/esm/shared/lib/router/utils/format-next-pathname-info.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "formatNextPathnameInfo": (()=>formatNextPathnameInfo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$trailing$2d$slash$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/shared/lib/router/utils/remove-trailing-slash.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/shared/lib/router/utils/add-path-prefix.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$suffix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/shared/lib/router/utils/add-path-suffix.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$locale$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/shared/lib/router/utils/add-locale.js [middleware] (ecmascript)");
;
;
;
;
function formatNextPathnameInfo(info) {
    let pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$locale$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["addLocale"])(info.pathname, info.locale, info.buildId ? undefined : info.defaultLocale, info.ignorePrefix);
    if (info.buildId || !info.trailingSlash) {
        pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$trailing$2d$slash$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["removeTrailingSlash"])(pathname);
    }
    if (info.buildId) {
        pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$suffix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["addPathSuffix"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["addPathPrefix"])(pathname, "/_next/data/" + info.buildId), info.pathname === '/' ? 'index.json' : '.json');
    }
    pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["addPathPrefix"])(pathname, info.basePath);
    return !info.buildId && info.trailingSlash ? !pathname.endsWith('/') ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$suffix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["addPathSuffix"])(pathname, '/') : pathname : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$trailing$2d$slash$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["removeTrailingSlash"])(pathname);
} //# sourceMappingURL=format-next-pathname-info.js.map
}}),
"[project]/node_modules/next/dist/esm/shared/lib/get-hostname.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * Takes an object with a hostname property (like a parsed URL) and some
 * headers that may contain Host and returns the preferred hostname.
 * @param parsed An object containing a hostname property.
 * @param headers A dictionary with headers containing a `host`.
 */ __turbopack_esm__({
    "getHostname": (()=>getHostname)
});
function getHostname(parsed, headers) {
    // Get the hostname from the headers if it exists, otherwise use the parsed
    // hostname.
    let hostname;
    if ((headers == null ? void 0 : headers.host) && !Array.isArray(headers.host)) {
        hostname = headers.host.toString().split(':', 1)[0];
    } else if (parsed.hostname) {
        hostname = parsed.hostname;
    } else return;
    return hostname.toLowerCase();
} //# sourceMappingURL=get-hostname.js.map
}}),
"[project]/node_modules/next/dist/esm/shared/lib/i18n/normalize-locale-path.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * For a pathname that may include a locale from a list of locales, it
 * removes the locale from the pathname returning it alongside with the
 * detected locale.
 *
 * @param pathname A pathname that may include a locale.
 * @param locales A list of locales.
 * @returns The detected locale and pathname without locale
 */ __turbopack_esm__({
    "normalizeLocalePath": (()=>normalizeLocalePath)
});
function normalizeLocalePath(pathname, locales) {
    let detectedLocale;
    // first item will be empty string from splitting at first char
    const pathnameParts = pathname.split('/');
    (locales || []).some((locale)=>{
        if (pathnameParts[1] && pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
            detectedLocale = locale;
            pathnameParts.splice(1, 1);
            pathname = pathnameParts.join('/') || '/';
            return true;
        }
        return false;
    });
    return {
        pathname,
        detectedLocale
    };
} //# sourceMappingURL=normalize-locale-path.js.map
}}),
"[project]/node_modules/next/dist/esm/shared/lib/router/utils/remove-path-prefix.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "removePathPrefix": (()=>removePathPrefix)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/shared/lib/router/utils/path-has-prefix.js [middleware] (ecmascript)");
;
function removePathPrefix(path, prefix) {
    // If the path doesn't start with the prefix we can return it as is. This
    // protects us from situations where the prefix is a substring of the path
    // prefix such as:
    //
    // For prefix: /blog
    //
    //   /blog -> true
    //   /blog/ -> true
    //   /blog/1 -> true
    //   /blogging -> false
    //   /blogging/ -> false
    //   /blogging/1 -> false
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["pathHasPrefix"])(path, prefix)) {
        return path;
    }
    // Remove the prefix from the path via slicing.
    const withoutPrefix = path.slice(prefix.length);
    // If the path without the prefix starts with a `/` we can return it as is.
    if (withoutPrefix.startsWith('/')) {
        return withoutPrefix;
    }
    // If the path without the prefix doesn't start with a `/` we need to add it
    // back to the path to make sure it's a valid path.
    return "/" + withoutPrefix;
} //# sourceMappingURL=remove-path-prefix.js.map
}}),
"[project]/node_modules/next/dist/esm/shared/lib/router/utils/get-next-pathname-info.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getNextPathnameInfo": (()=>getNextPathnameInfo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$i18n$2f$normalize$2d$locale$2d$path$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/shared/lib/i18n/normalize-locale-path.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$path$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/shared/lib/router/utils/remove-path-prefix.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/shared/lib/router/utils/path-has-prefix.js [middleware] (ecmascript)");
;
;
;
function getNextPathnameInfo(pathname, options) {
    var _options_nextConfig;
    const { basePath, i18n, trailingSlash } = (_options_nextConfig = options.nextConfig) != null ? _options_nextConfig : {};
    const info = {
        pathname,
        trailingSlash: pathname !== '/' ? pathname.endsWith('/') : trailingSlash
    };
    if (basePath && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["pathHasPrefix"])(info.pathname, basePath)) {
        info.pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$path$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["removePathPrefix"])(info.pathname, basePath);
        info.basePath = basePath;
    }
    let pathnameNoDataPrefix = info.pathname;
    if (info.pathname.startsWith('/_next/data/') && info.pathname.endsWith('.json')) {
        const paths = info.pathname.replace(/^\/_next\/data\//, '').replace(/\.json$/, '').split('/');
        const buildId = paths[0];
        info.buildId = buildId;
        pathnameNoDataPrefix = paths[1] !== 'index' ? "/" + paths.slice(1).join('/') : '/';
        // update pathname with normalized if enabled although
        // we use normalized to populate locale info still
        if (options.parseData === true) {
            info.pathname = pathnameNoDataPrefix;
        }
    }
    // If provided, use the locale route normalizer to detect the locale instead
    // of the function below.
    if (i18n) {
        let result = options.i18nProvider ? options.i18nProvider.analyze(info.pathname) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$i18n$2f$normalize$2d$locale$2d$path$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["normalizeLocalePath"])(info.pathname, i18n.locales);
        info.locale = result.detectedLocale;
        var _result_pathname;
        info.pathname = (_result_pathname = result.pathname) != null ? _result_pathname : info.pathname;
        if (!result.detectedLocale && info.buildId) {
            result = options.i18nProvider ? options.i18nProvider.analyze(pathnameNoDataPrefix) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$i18n$2f$normalize$2d$locale$2d$path$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["normalizeLocalePath"])(pathnameNoDataPrefix, i18n.locales);
            if (result.detectedLocale) {
                info.locale = result.detectedLocale;
            }
        }
    }
    return info;
} //# sourceMappingURL=get-next-pathname-info.js.map
}}),
"[project]/node_modules/next/dist/esm/server/web/next-url.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "NextURL": (()=>NextURL)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$i18n$2f$detect$2d$domain$2d$locale$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/shared/lib/i18n/detect-domain-locale.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$format$2d$next$2d$pathname$2d$info$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/shared/lib/router/utils/format-next-pathname-info.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$get$2d$hostname$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/shared/lib/get-hostname.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$next$2d$pathname$2d$info$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/shared/lib/router/utils/get-next-pathname-info.js [middleware] (ecmascript)");
;
;
;
;
const REGEX_LOCALHOST_HOSTNAME = /(?!^https?:\/\/)(127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|\[::1\]|localhost)/;
function parseURL(url, base) {
    return new URL(String(url).replace(REGEX_LOCALHOST_HOSTNAME, 'localhost'), base && String(base).replace(REGEX_LOCALHOST_HOSTNAME, 'localhost'));
}
const Internal = Symbol('NextURLInternal');
class NextURL {
    constructor(input, baseOrOpts, opts){
        let base;
        let options;
        if (typeof baseOrOpts === 'object' && 'pathname' in baseOrOpts || typeof baseOrOpts === 'string') {
            base = baseOrOpts;
            options = opts || {};
        } else {
            options = opts || baseOrOpts || {};
        }
        this[Internal] = {
            url: parseURL(input, base ?? options.base),
            options: options,
            basePath: ''
        };
        this.analyze();
    }
    analyze() {
        var _this_Internal_options_nextConfig_i18n, _this_Internal_options_nextConfig, _this_Internal_domainLocale, _this_Internal_options_nextConfig_i18n1, _this_Internal_options_nextConfig1;
        const info = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$next$2d$pathname$2d$info$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getNextPathnameInfo"])(this[Internal].url.pathname, {
            nextConfig: this[Internal].options.nextConfig,
            parseData: !process.env.__NEXT_NO_MIDDLEWARE_URL_NORMALIZE,
            i18nProvider: this[Internal].options.i18nProvider
        });
        const hostname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$get$2d$hostname$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getHostname"])(this[Internal].url, this[Internal].options.headers);
        this[Internal].domainLocale = this[Internal].options.i18nProvider ? this[Internal].options.i18nProvider.detectDomainLocale(hostname) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$i18n$2f$detect$2d$domain$2d$locale$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["detectDomainLocale"])((_this_Internal_options_nextConfig = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n = _this_Internal_options_nextConfig.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n.domains, hostname);
        const defaultLocale = ((_this_Internal_domainLocale = this[Internal].domainLocale) == null ? void 0 : _this_Internal_domainLocale.defaultLocale) || ((_this_Internal_options_nextConfig1 = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n1 = _this_Internal_options_nextConfig1.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n1.defaultLocale);
        this[Internal].url.pathname = info.pathname;
        this[Internal].defaultLocale = defaultLocale;
        this[Internal].basePath = info.basePath ?? '';
        this[Internal].buildId = info.buildId;
        this[Internal].locale = info.locale ?? defaultLocale;
        this[Internal].trailingSlash = info.trailingSlash;
    }
    formatPathname() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$format$2d$next$2d$pathname$2d$info$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["formatNextPathnameInfo"])({
            basePath: this[Internal].basePath,
            buildId: this[Internal].buildId,
            defaultLocale: !this[Internal].options.forceLocale ? this[Internal].defaultLocale : undefined,
            locale: this[Internal].locale,
            pathname: this[Internal].url.pathname,
            trailingSlash: this[Internal].trailingSlash
        });
    }
    formatSearch() {
        return this[Internal].url.search;
    }
    get buildId() {
        return this[Internal].buildId;
    }
    set buildId(buildId) {
        this[Internal].buildId = buildId;
    }
    get locale() {
        return this[Internal].locale ?? '';
    }
    set locale(locale) {
        var _this_Internal_options_nextConfig_i18n, _this_Internal_options_nextConfig;
        if (!this[Internal].locale || !((_this_Internal_options_nextConfig = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n = _this_Internal_options_nextConfig.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n.locales.includes(locale))) {
            throw new TypeError(`The NextURL configuration includes no locale "${locale}"`);
        }
        this[Internal].locale = locale;
    }
    get defaultLocale() {
        return this[Internal].defaultLocale;
    }
    get domainLocale() {
        return this[Internal].domainLocale;
    }
    get searchParams() {
        return this[Internal].url.searchParams;
    }
    get host() {
        return this[Internal].url.host;
    }
    set host(value) {
        this[Internal].url.host = value;
    }
    get hostname() {
        return this[Internal].url.hostname;
    }
    set hostname(value) {
        this[Internal].url.hostname = value;
    }
    get port() {
        return this[Internal].url.port;
    }
    set port(value) {
        this[Internal].url.port = value;
    }
    get protocol() {
        return this[Internal].url.protocol;
    }
    set protocol(value) {
        this[Internal].url.protocol = value;
    }
    get href() {
        const pathname = this.formatPathname();
        const search = this.formatSearch();
        return `${this.protocol}//${this.host}${pathname}${search}${this.hash}`;
    }
    set href(url) {
        this[Internal].url = parseURL(url);
        this.analyze();
    }
    get origin() {
        return this[Internal].url.origin;
    }
    get pathname() {
        return this[Internal].url.pathname;
    }
    set pathname(value) {
        this[Internal].url.pathname = value;
    }
    get hash() {
        return this[Internal].url.hash;
    }
    set hash(value) {
        this[Internal].url.hash = value;
    }
    get search() {
        return this[Internal].url.search;
    }
    set search(value) {
        this[Internal].url.search = value;
    }
    get password() {
        return this[Internal].url.password;
    }
    set password(value) {
        this[Internal].url.password = value;
    }
    get username() {
        return this[Internal].url.username;
    }
    set username(value) {
        this[Internal].url.username = value;
    }
    get basePath() {
        return this[Internal].basePath;
    }
    set basePath(value) {
        this[Internal].basePath = value.startsWith('/') ? value : `/${value}`;
    }
    toString() {
        return this.href;
    }
    toJSON() {
        return this.href;
    }
    [Symbol.for('edge-runtime.inspect.custom')]() {
        return {
            href: this.href,
            origin: this.origin,
            protocol: this.protocol,
            username: this.username,
            password: this.password,
            host: this.host,
            hostname: this.hostname,
            port: this.port,
            pathname: this.pathname,
            search: this.search,
            searchParams: this.searchParams,
            hash: this.hash
        };
    }
    clone() {
        return new NextURL(String(this), this[Internal].options);
    }
} //# sourceMappingURL=next-url.js.map
}}),
"[project]/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js [middleware] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
// src/index.ts
var src_exports = {};
__export(src_exports, {
    RequestCookies: ()=>RequestCookies,
    ResponseCookies: ()=>ResponseCookies,
    parseCookie: ()=>parseCookie,
    parseSetCookie: ()=>parseSetCookie,
    stringifyCookie: ()=>stringifyCookie
});
module.exports = __toCommonJS(src_exports);
// src/serialize.ts
function stringifyCookie(c) {
    var _a;
    const attrs = [
        "path" in c && c.path && `Path=${c.path}`,
        "expires" in c && (c.expires || c.expires === 0) && `Expires=${(typeof c.expires === "number" ? new Date(c.expires) : c.expires).toUTCString()}`,
        "maxAge" in c && typeof c.maxAge === "number" && `Max-Age=${c.maxAge}`,
        "domain" in c && c.domain && `Domain=${c.domain}`,
        "secure" in c && c.secure && "Secure",
        "httpOnly" in c && c.httpOnly && "HttpOnly",
        "sameSite" in c && c.sameSite && `SameSite=${c.sameSite}`,
        "partitioned" in c && c.partitioned && "Partitioned",
        "priority" in c && c.priority && `Priority=${c.priority}`
    ].filter(Boolean);
    const stringified = `${c.name}=${encodeURIComponent((_a = c.value) != null ? _a : "")}`;
    return attrs.length === 0 ? stringified : `${stringified}; ${attrs.join("; ")}`;
}
function parseCookie(cookie) {
    const map = /* @__PURE__ */ new Map();
    for (const pair of cookie.split(/; */)){
        if (!pair) continue;
        const splitAt = pair.indexOf("=");
        if (splitAt === -1) {
            map.set(pair, "true");
            continue;
        }
        const [key, value] = [
            pair.slice(0, splitAt),
            pair.slice(splitAt + 1)
        ];
        try {
            map.set(key, decodeURIComponent(value != null ? value : "true"));
        } catch  {}
    }
    return map;
}
function parseSetCookie(setCookie) {
    if (!setCookie) {
        return void 0;
    }
    const [[name, value], ...attributes] = parseCookie(setCookie);
    const { domain, expires, httponly, maxage, path, samesite, secure, partitioned, priority } = Object.fromEntries(attributes.map(([key, value2])=>[
            key.toLowerCase().replace(/-/g, ""),
            value2
        ]));
    const cookie = {
        name,
        value: decodeURIComponent(value),
        domain,
        ...expires && {
            expires: new Date(expires)
        },
        ...httponly && {
            httpOnly: true
        },
        ...typeof maxage === "string" && {
            maxAge: Number(maxage)
        },
        path,
        ...samesite && {
            sameSite: parseSameSite(samesite)
        },
        ...secure && {
            secure: true
        },
        ...priority && {
            priority: parsePriority(priority)
        },
        ...partitioned && {
            partitioned: true
        }
    };
    return compact(cookie);
}
function compact(t) {
    const newT = {};
    for(const key in t){
        if (t[key]) {
            newT[key] = t[key];
        }
    }
    return newT;
}
var SAME_SITE = [
    "strict",
    "lax",
    "none"
];
function parseSameSite(string) {
    string = string.toLowerCase();
    return SAME_SITE.includes(string) ? string : void 0;
}
var PRIORITY = [
    "low",
    "medium",
    "high"
];
function parsePriority(string) {
    string = string.toLowerCase();
    return PRIORITY.includes(string) ? string : void 0;
}
function splitCookiesString(cookiesString) {
    if (!cookiesString) return [];
    var cookiesStrings = [];
    var pos = 0;
    var start;
    var ch;
    var lastComma;
    var nextStart;
    var cookiesSeparatorFound;
    function skipWhitespace() {
        while(pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))){
            pos += 1;
        }
        return pos < cookiesString.length;
    }
    function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
    }
    while(pos < cookiesString.length){
        start = pos;
        cookiesSeparatorFound = false;
        while(skipWhitespace()){
            ch = cookiesString.charAt(pos);
            if (ch === ",") {
                lastComma = pos;
                pos += 1;
                skipWhitespace();
                nextStart = pos;
                while(pos < cookiesString.length && notSpecialChar()){
                    pos += 1;
                }
                if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
                    cookiesSeparatorFound = true;
                    pos = nextStart;
                    cookiesStrings.push(cookiesString.substring(start, lastComma));
                    start = pos;
                } else {
                    pos = lastComma + 1;
                }
            } else {
                pos += 1;
            }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
            cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
    }
    return cookiesStrings;
}
// src/request-cookies.ts
var RequestCookies = class {
    constructor(requestHeaders){
        /** @internal */ this._parsed = /* @__PURE__ */ new Map();
        this._headers = requestHeaders;
        const header = requestHeaders.get("cookie");
        if (header) {
            const parsed = parseCookie(header);
            for (const [name, value] of parsed){
                this._parsed.set(name, {
                    name,
                    value
                });
            }
        }
    }
    [Symbol.iterator]() {
        return this._parsed[Symbol.iterator]();
    }
    /**
   * The amount of cookies received from the client
   */ get size() {
        return this._parsed.size;
    }
    get(...args) {
        const name = typeof args[0] === "string" ? args[0] : args[0].name;
        return this._parsed.get(name);
    }
    getAll(...args) {
        var _a;
        const all = Array.from(this._parsed);
        if (!args.length) {
            return all.map(([_, value])=>value);
        }
        const name = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
        return all.filter(([n])=>n === name).map(([_, value])=>value);
    }
    has(name) {
        return this._parsed.has(name);
    }
    set(...args) {
        const [name, value] = args.length === 1 ? [
            args[0].name,
            args[0].value
        ] : args;
        const map = this._parsed;
        map.set(name, {
            name,
            value
        });
        this._headers.set("cookie", Array.from(map).map(([_, value2])=>stringifyCookie(value2)).join("; "));
        return this;
    }
    /**
   * Delete the cookies matching the passed name or names in the request.
   */ delete(names) {
        const map = this._parsed;
        const result = !Array.isArray(names) ? map.delete(names) : names.map((name)=>map.delete(name));
        this._headers.set("cookie", Array.from(map).map(([_, value])=>stringifyCookie(value)).join("; "));
        return result;
    }
    /**
   * Delete all the cookies in the cookies in the request.
   */ clear() {
        this.delete(Array.from(this._parsed.keys()));
        return this;
    }
    /**
   * Format the cookies in the request as a string for logging
   */ [Symbol.for("edge-runtime.inspect.custom")]() {
        return `RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
    }
    toString() {
        return [
            ...this._parsed.values()
        ].map((v)=>`${v.name}=${encodeURIComponent(v.value)}`).join("; ");
    }
};
// src/response-cookies.ts
var ResponseCookies = class {
    constructor(responseHeaders){
        /** @internal */ this._parsed = /* @__PURE__ */ new Map();
        var _a, _b, _c;
        this._headers = responseHeaders;
        const setCookie = (_c = (_b = (_a = responseHeaders.getSetCookie) == null ? void 0 : _a.call(responseHeaders)) != null ? _b : responseHeaders.get("set-cookie")) != null ? _c : [];
        const cookieStrings = Array.isArray(setCookie) ? setCookie : splitCookiesString(setCookie);
        for (const cookieString of cookieStrings){
            const parsed = parseSetCookie(cookieString);
            if (parsed) this._parsed.set(parsed.name, parsed);
        }
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-get CookieStore#get} without the Promise.
   */ get(...args) {
        const key = typeof args[0] === "string" ? args[0] : args[0].name;
        return this._parsed.get(key);
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-getAll CookieStore#getAll} without the Promise.
   */ getAll(...args) {
        var _a;
        const all = Array.from(this._parsed.values());
        if (!args.length) {
            return all;
        }
        const key = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
        return all.filter((c)=>c.name === key);
    }
    has(name) {
        return this._parsed.has(name);
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-set CookieStore#set} without the Promise.
   */ set(...args) {
        const [name, value, cookie] = args.length === 1 ? [
            args[0].name,
            args[0].value,
            args[0]
        ] : args;
        const map = this._parsed;
        map.set(name, normalizeCookie({
            name,
            value,
            ...cookie
        }));
        replace(map, this._headers);
        return this;
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-delete CookieStore#delete} without the Promise.
   */ delete(...args) {
        const [name, options] = typeof args[0] === "string" ? [
            args[0]
        ] : [
            args[0].name,
            args[0]
        ];
        return this.set({
            ...options,
            name,
            value: "",
            expires: /* @__PURE__ */ new Date(0)
        });
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return `ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
    }
    toString() {
        return [
            ...this._parsed.values()
        ].map(stringifyCookie).join("; ");
    }
};
function replace(bag, headers) {
    headers.delete("set-cookie");
    for (const [, value] of bag){
        const serialized = stringifyCookie(value);
        headers.append("set-cookie", serialized);
    }
}
function normalizeCookie(cookie = {
    name: "",
    value: ""
}) {
    if (typeof cookie.expires === "number") {
        cookie.expires = new Date(cookie.expires);
    }
    if (cookie.maxAge) {
        cookie.expires = new Date(Date.now() + cookie.maxAge * 1e3);
    }
    if (cookie.path === null || cookie.path === void 0) {
        cookie.path = "/";
    }
    return cookie;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    RequestCookies,
    ResponseCookies,
    parseCookie,
    parseSetCookie,
    stringifyCookie
});
}}),
"[project]/node_modules/next/dist/esm/server/web/spec-extension/cookies.js [middleware] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
 //# sourceMappingURL=cookies.js.map
}}),
"[project]/node_modules/next/dist/esm/server/web/spec-extension/cookies.js [middleware] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$cookies$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/spec-extension/cookies.js [middleware] (ecmascript) <locals>");
}}),
"[project]/node_modules/next/dist/esm/server/web/spec-extension/request.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "INTERNALS": (()=>INTERNALS),
    "NextRequest": (()=>NextRequest)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$next$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/next-url.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/utils.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/error.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$cookies$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/spec-extension/cookies.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js [middleware] (ecmascript)");
;
;
;
;
const INTERNALS = Symbol('internal request');
class NextRequest extends Request {
    constructor(input, init = {}){
        const url = typeof input !== 'string' && 'url' in input ? input.url : String(input);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["validateURL"])(url);
        if (input instanceof Request) super(input, init);
        else super(url, init);
        const nextUrl = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$next$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextURL"](url, {
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["toNodeOutgoingHttpHeaders"])(this.headers),
            nextConfig: init.nextConfig
        });
        this[INTERNALS] = {
            cookies: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["RequestCookies"](this.headers),
            nextUrl,
            url: process.env.__NEXT_NO_MIDDLEWARE_URL_NORMALIZE ? url : nextUrl.toString()
        };
    }
    [Symbol.for('edge-runtime.inspect.custom')]() {
        return {
            cookies: this.cookies,
            nextUrl: this.nextUrl,
            url: this.url,
            // rest of props come from Request
            bodyUsed: this.bodyUsed,
            cache: this.cache,
            credentials: this.credentials,
            destination: this.destination,
            headers: Object.fromEntries(this.headers),
            integrity: this.integrity,
            keepalive: this.keepalive,
            method: this.method,
            mode: this.mode,
            redirect: this.redirect,
            referrer: this.referrer,
            referrerPolicy: this.referrerPolicy,
            signal: this.signal
        };
    }
    get cookies() {
        return this[INTERNALS].cookies;
    }
    get nextUrl() {
        return this[INTERNALS].nextUrl;
    }
    /**
   * @deprecated
   * `page` has been deprecated in favour of `URLPattern`.
   * Read more: https://nextjs.org/docs/messages/middleware-request-page
   */ get page() {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["RemovedPageError"]();
    }
    /**
   * @deprecated
   * `ua` has been removed in favour of \`userAgent\` function.
   * Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
   */ get ua() {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["RemovedUAError"]();
    }
    get url() {
        return this[INTERNALS].url;
    }
} //# sourceMappingURL=request.js.map
}}),
"[project]/node_modules/next/dist/esm/server/web/spec-extension/adapters/reflect.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ReflectAdapter": (()=>ReflectAdapter)
});
class ReflectAdapter {
    static get(target, prop, receiver) {
        const value = Reflect.get(target, prop, receiver);
        if (typeof value === 'function') {
            return value.bind(target);
        }
        return value;
    }
    static set(target, prop, value, receiver) {
        return Reflect.set(target, prop, value, receiver);
    }
    static has(target, prop) {
        return Reflect.has(target, prop);
    }
    static deleteProperty(target, prop) {
        return Reflect.deleteProperty(target, prop);
    }
} //# sourceMappingURL=reflect.js.map
}}),
"[project]/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "NextResponse": (()=>NextResponse)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$cookies$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/spec-extension/cookies.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$next$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/next-url.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/utils.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/spec-extension/adapters/reflect.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js [middleware] (ecmascript)");
;
;
;
;
;
const INTERNALS = Symbol('internal response');
const REDIRECTS = new Set([
    301,
    302,
    303,
    307,
    308
]);
function handleMiddlewareField(init, headers) {
    var _init_request;
    if (init == null ? void 0 : (_init_request = init.request) == null ? void 0 : _init_request.headers) {
        if (!(init.request.headers instanceof Headers)) {
            throw new Error('request.headers must be an instance of Headers');
        }
        const keys = [];
        for (const [key, value] of init.request.headers){
            headers.set('x-middleware-request-' + key, value);
            keys.push(key);
        }
        headers.set('x-middleware-override-headers', keys.join(','));
    }
}
class NextResponse extends Response {
    constructor(body, init = {}){
        super(body, init);
        const headers = this.headers;
        const cookies = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ResponseCookies"](headers);
        const cookiesProxy = new Proxy(cookies, {
            get (target, prop, receiver) {
                switch(prop){
                    case 'delete':
                    case 'set':
                        {
                            return (...args)=>{
                                const result = Reflect.apply(target[prop], target, args);
                                const newHeaders = new Headers(headers);
                                if (result instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ResponseCookies"]) {
                                    headers.set('x-middleware-set-cookie', result.getAll().map((cookie)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["stringifyCookie"])(cookie)).join(','));
                                }
                                handleMiddlewareField(init, newHeaders);
                                return result;
                            };
                        }
                    default:
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
                }
            }
        });
        this[INTERNALS] = {
            cookies: cookiesProxy,
            url: init.url ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$next$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextURL"](init.url, {
                headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["toNodeOutgoingHttpHeaders"])(headers),
                nextConfig: init.nextConfig
            }) : undefined
        };
    }
    [Symbol.for('edge-runtime.inspect.custom')]() {
        return {
            cookies: this.cookies,
            url: this.url,
            // rest of props come from Response
            body: this.body,
            bodyUsed: this.bodyUsed,
            headers: Object.fromEntries(this.headers),
            ok: this.ok,
            redirected: this.redirected,
            status: this.status,
            statusText: this.statusText,
            type: this.type
        };
    }
    get cookies() {
        return this[INTERNALS].cookies;
    }
    static json(body, init) {
        const response = Response.json(body, init);
        return new NextResponse(response.body, response);
    }
    static redirect(url, init) {
        const status = typeof init === 'number' ? init : (init == null ? void 0 : init.status) ?? 307;
        if (!REDIRECTS.has(status)) {
            throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
        }
        const initObj = typeof init === 'object' ? init : {};
        const headers = new Headers(initObj == null ? void 0 : initObj.headers);
        headers.set('Location', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["validateURL"])(url));
        return new NextResponse(null, {
            ...initObj,
            headers,
            status
        });
    }
    static rewrite(destination, init) {
        const headers = new Headers(init == null ? void 0 : init.headers);
        headers.set('x-middleware-rewrite', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["validateURL"])(destination));
        handleMiddlewareField(init, headers);
        return new NextResponse(null, {
            ...init,
            headers
        });
    }
    static next(init) {
        const headers = new Headers(init == null ? void 0 : init.headers);
        headers.set('x-middleware-next', '1');
        handleMiddlewareField(init, headers);
        return new NextResponse(null, {
            ...init,
            headers
        });
    }
} //# sourceMappingURL=response.js.map
}}),
"[project]/node_modules/next/dist/esm/shared/lib/router/utils/relativize-url.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * Given a URL as a string and a base URL it will make the URL relative
 * if the parsed protocol and host is the same as the one in the base
 * URL. Otherwise it returns the same URL string.
 */ __turbopack_esm__({
    "relativizeURL": (()=>relativizeURL)
});
function relativizeURL(url, base) {
    const baseURL = typeof base === 'string' ? new URL(base) : base;
    const relative = new URL(url, base);
    const origin = baseURL.protocol + "//" + baseURL.host;
    return relative.protocol + "//" + relative.host === origin ? relative.toString().replace(origin, '') : relative.toString();
} //# sourceMappingURL=relativize-url.js.map
}}),
"[project]/node_modules/next/dist/esm/client/components/app-router-headers.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ACTION_HEADER": (()=>ACTION_HEADER),
    "FLIGHT_HEADERS": (()=>FLIGHT_HEADERS),
    "NEXT_DID_POSTPONE_HEADER": (()=>NEXT_DID_POSTPONE_HEADER),
    "NEXT_HMR_REFRESH_HEADER": (()=>NEXT_HMR_REFRESH_HEADER),
    "NEXT_IS_PRERENDER_HEADER": (()=>NEXT_IS_PRERENDER_HEADER),
    "NEXT_ROUTER_PREFETCH_HEADER": (()=>NEXT_ROUTER_PREFETCH_HEADER),
    "NEXT_ROUTER_SEGMENT_PREFETCH_HEADER": (()=>NEXT_ROUTER_SEGMENT_PREFETCH_HEADER),
    "NEXT_ROUTER_STALE_TIME_HEADER": (()=>NEXT_ROUTER_STALE_TIME_HEADER),
    "NEXT_ROUTER_STATE_TREE_HEADER": (()=>NEXT_ROUTER_STATE_TREE_HEADER),
    "NEXT_RSC_UNION_QUERY": (()=>NEXT_RSC_UNION_QUERY),
    "NEXT_URL": (()=>NEXT_URL),
    "RSC_CONTENT_TYPE_HEADER": (()=>RSC_CONTENT_TYPE_HEADER),
    "RSC_HEADER": (()=>RSC_HEADER)
});
const RSC_HEADER = 'RSC';
const ACTION_HEADER = 'Next-Action';
const NEXT_ROUTER_STATE_TREE_HEADER = 'Next-Router-State-Tree';
const NEXT_ROUTER_PREFETCH_HEADER = 'Next-Router-Prefetch';
const NEXT_ROUTER_SEGMENT_PREFETCH_HEADER = 'Next-Router-Segment-Prefetch';
const NEXT_HMR_REFRESH_HEADER = 'Next-HMR-Refresh';
const NEXT_URL = 'Next-Url';
const RSC_CONTENT_TYPE_HEADER = 'text/x-component';
const FLIGHT_HEADERS = [
    RSC_HEADER,
    NEXT_ROUTER_STATE_TREE_HEADER,
    NEXT_ROUTER_PREFETCH_HEADER,
    NEXT_HMR_REFRESH_HEADER,
    NEXT_ROUTER_SEGMENT_PREFETCH_HEADER
];
const NEXT_RSC_UNION_QUERY = '_rsc';
const NEXT_ROUTER_STALE_TIME_HEADER = 'x-nextjs-stale-time';
const NEXT_DID_POSTPONE_HEADER = 'x-nextjs-postponed';
const NEXT_IS_PRERENDER_HEADER = 'x-nextjs-prerender'; //# sourceMappingURL=app-router-headers.js.map
}}),
"[project]/node_modules/next/dist/esm/server/internal-utils.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "stripInternalQueries": (()=>stripInternalQueries),
    "stripInternalSearchParams": (()=>stripInternalSearchParams)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/client/components/app-router-headers.js [middleware] (ecmascript)");
;
const INTERNAL_QUERY_NAMES = [
    '__nextFallback',
    '__nextLocale',
    '__nextInferredLocaleFromDefault',
    '__nextDefaultLocale',
    '__nextIsNotFound',
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NEXT_RSC_UNION_QUERY"]
];
const EDGE_EXTENDED_INTERNAL_QUERY_NAMES = [
    '__nextDataReq'
];
function stripInternalQueries(query) {
    for (const name of INTERNAL_QUERY_NAMES){
        delete query[name];
    }
}
function stripInternalSearchParams(url, isEdge) {
    const isStringUrl = typeof url === 'string';
    const instance = isStringUrl ? new URL(url) : url;
    for (const name of INTERNAL_QUERY_NAMES){
        instance.searchParams.delete(name);
    }
    if (isEdge) {
        for (const name of EDGE_EXTENDED_INTERNAL_QUERY_NAMES){
            instance.searchParams.delete(name);
        }
    }
    return isStringUrl ? instance.toString() : instance;
} //# sourceMappingURL=internal-utils.js.map
}}),
"[project]/node_modules/next/dist/esm/shared/lib/page-path/ensure-leading-slash.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * For a given page path, this function ensures that there is a leading slash.
 * If there is not a leading slash, one is added, otherwise it is noop.
 */ __turbopack_esm__({
    "ensureLeadingSlash": (()=>ensureLeadingSlash)
});
function ensureLeadingSlash(path) {
    return path.startsWith('/') ? path : "/" + path;
} //# sourceMappingURL=ensure-leading-slash.js.map
}}),
"[project]/node_modules/next/dist/esm/shared/lib/segment.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "DEFAULT_SEGMENT_KEY": (()=>DEFAULT_SEGMENT_KEY),
    "PAGE_SEGMENT_KEY": (()=>PAGE_SEGMENT_KEY),
    "addSearchParamsIfPageSegment": (()=>addSearchParamsIfPageSegment),
    "isGroupSegment": (()=>isGroupSegment),
    "isParallelRouteSegment": (()=>isParallelRouteSegment)
});
function isGroupSegment(segment) {
    // Use array[0] for performant purpose
    return segment[0] === '(' && segment.endsWith(')');
}
function isParallelRouteSegment(segment) {
    return segment.startsWith('@') && segment !== '@children';
}
function addSearchParamsIfPageSegment(segment, searchParams) {
    const isPageSegment = segment.includes(PAGE_SEGMENT_KEY);
    if (isPageSegment) {
        const stringifiedQuery = JSON.stringify(searchParams);
        return stringifiedQuery !== '{}' ? PAGE_SEGMENT_KEY + '?' + stringifiedQuery : PAGE_SEGMENT_KEY;
    }
    return segment;
}
const PAGE_SEGMENT_KEY = '__PAGE__';
const DEFAULT_SEGMENT_KEY = '__DEFAULT__'; //# sourceMappingURL=segment.js.map
}}),
"[project]/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "normalizeAppPath": (()=>normalizeAppPath),
    "normalizeRscURL": (()=>normalizeRscURL)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$page$2d$path$2f$ensure$2d$leading$2d$slash$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/shared/lib/page-path/ensure-leading-slash.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$segment$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/shared/lib/segment.js [middleware] (ecmascript)");
;
;
function normalizeAppPath(route) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$page$2d$path$2f$ensure$2d$leading$2d$slash$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ensureLeadingSlash"])(route.split('/').reduce((pathname, segment, index, segments)=>{
        // Empty segments are ignored.
        if (!segment) {
            return pathname;
        }
        // Groups are ignored.
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$segment$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["isGroupSegment"])(segment)) {
            return pathname;
        }
        // Parallel segments are ignored.
        if (segment[0] === '@') {
            return pathname;
        }
        // The last segment (if it's a leaf) should be ignored.
        if ((segment === 'page' || segment === 'route') && index === segments.length - 1) {
            return pathname;
        }
        return pathname + "/" + segment;
    }, ''));
}
function normalizeRscURL(url) {
    return url.replace(/\.rsc($|\?)/, '$1');
} //# sourceMappingURL=app-paths.js.map
}}),
"[project]/node_modules/next/dist/esm/server/web/spec-extension/adapters/headers.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "HeadersAdapter": (()=>HeadersAdapter),
    "ReadonlyHeadersError": (()=>ReadonlyHeadersError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/spec-extension/adapters/reflect.js [middleware] (ecmascript)");
;
class ReadonlyHeadersError extends Error {
    constructor(){
        super('Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers');
    }
    static callable() {
        throw new ReadonlyHeadersError();
    }
}
class HeadersAdapter extends Headers {
    constructor(headers){
        // We've already overridden the methods that would be called, so we're just
        // calling the super constructor to ensure that the instanceof check works.
        super();
        this.headers = new Proxy(headers, {
            get (target, prop, receiver) {
                // Because this is just an object, we expect that all "get" operations
                // are for properties. If it's a "get" for a symbol, we'll just return
                // the symbol.
                if (typeof prop === 'symbol') {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return undefined.
                if (typeof original === 'undefined') return;
                // If the original casing exists, return the value.
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, original, receiver);
            },
            set (target, prop, value, receiver) {
                if (typeof prop === 'symbol') {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].set(target, prop, value, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, use the prop as the key.
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].set(target, original ?? prop, value, receiver);
            },
            has (target, prop) {
                if (typeof prop === 'symbol') return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].has(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return false.
                if (typeof original === 'undefined') return false;
                // If the original casing exists, return true.
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].has(target, original);
            },
            deleteProperty (target, prop) {
                if (typeof prop === 'symbol') return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].deleteProperty(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return true.
                if (typeof original === 'undefined') return true;
                // If the original casing exists, delete the property.
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].deleteProperty(target, original);
            }
        });
    }
    /**
   * Seals a Headers instance to prevent modification by throwing an error when
   * any mutating method is called.
   */ static seal(headers) {
        return new Proxy(headers, {
            get (target, prop, receiver) {
                switch(prop){
                    case 'append':
                    case 'delete':
                    case 'set':
                        return ReadonlyHeadersError.callable;
                    default:
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
                }
            }
        });
    }
    /**
   * Merges a header value into a string. This stores multiple values as an
   * array, so we need to merge them into a string.
   *
   * @param value a header value
   * @returns a merged header value (a string)
   */ merge(value) {
        if (Array.isArray(value)) return value.join(', ');
        return value;
    }
    /**
   * Creates a Headers instance from a plain object or a Headers instance.
   *
   * @param headers a plain object or a Headers instance
   * @returns a headers instance
   */ static from(headers) {
        if (headers instanceof Headers) return headers;
        return new HeadersAdapter(headers);
    }
    append(name, value) {
        const existing = this.headers[name];
        if (typeof existing === 'string') {
            this.headers[name] = [
                existing,
                value
            ];
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            this.headers[name] = value;
        }
    }
    delete(name) {
        delete this.headers[name];
    }
    get(name) {
        const value = this.headers[name];
        if (typeof value !== 'undefined') return this.merge(value);
        return null;
    }
    has(name) {
        return typeof this.headers[name] !== 'undefined';
    }
    set(name, value) {
        this.headers[name] = value;
    }
    forEach(callbackfn, thisArg) {
        for (const [name, value] of this.entries()){
            callbackfn.call(thisArg, value, name, this);
        }
    }
    *entries() {
        for (const key of Object.keys(this.headers)){
            const name = key.toLowerCase();
            // We assert here that this is a string because we got it from the
            // Object.keys() call above.
            const value = this.get(name);
            yield [
                name,
                value
            ];
        }
    }
    *keys() {
        for (const key of Object.keys(this.headers)){
            const name = key.toLowerCase();
            yield name;
        }
    }
    *values() {
        for (const key of Object.keys(this.headers)){
            // We assert here that this is a string because we got it from the
            // Object.keys() call above.
            const value = this.get(key);
            yield value;
        }
    }
    [Symbol.iterator]() {
        return this.entries();
    }
} //# sourceMappingURL=headers.js.map
}}),
"[project]/node_modules/next/dist/esm/server/app-render/async-local-storage.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "bindSnapshot": (()=>bindSnapshot),
    "createAsyncLocalStorage": (()=>createAsyncLocalStorage),
    "createSnapshot": (()=>createSnapshot)
});
const sharedAsyncLocalStorageNotAvailableError = new Error('Invariant: AsyncLocalStorage accessed in runtime where it is not available');
class FakeAsyncLocalStorage {
    disable() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
    getStore() {
        // This fake implementation of AsyncLocalStorage always returns `undefined`.
        return undefined;
    }
    run() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
    exit() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
    enterWith() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
    static bind(fn) {
        return fn;
    }
}
const maybeGlobalAsyncLocalStorage = typeof globalThis !== 'undefined' && globalThis.AsyncLocalStorage;
function createAsyncLocalStorage() {
    if (maybeGlobalAsyncLocalStorage) {
        return new maybeGlobalAsyncLocalStorage();
    }
    return new FakeAsyncLocalStorage();
}
function bindSnapshot(fn) {
    if (maybeGlobalAsyncLocalStorage) {
        return maybeGlobalAsyncLocalStorage.bind(fn);
    }
    return FakeAsyncLocalStorage.bind(fn);
}
function createSnapshot() {
    if (maybeGlobalAsyncLocalStorage) {
        return maybeGlobalAsyncLocalStorage.snapshot();
    }
    return function(fn, ...args) {
        return fn(...args);
    };
} //# sourceMappingURL=async-local-storage.js.map
}}),
"[project]/node_modules/next/dist/esm/server/app-render/work-async-storage-instance.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "workAsyncStorageInstance": (()=>workAsyncStorageInstance)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$async$2d$local$2d$storage$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/app-render/async-local-storage.js [middleware] (ecmascript)");
;
const workAsyncStorageInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$async$2d$local$2d$storage$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createAsyncLocalStorage"])(); //# sourceMappingURL=work-async-storage-instance.js.map
}}),
"[project]/node_modules/next/dist/esm/server/app-render/work-async-storage.external.js [middleware] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// Share the instance module in the next-shared layer
__turbopack_esm__({});
;
;
 //# sourceMappingURL=work-async-storage.external.js.map
}}),
"[project]/node_modules/next/dist/esm/server/app-render/work-async-storage.external.js [middleware] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/app-render/work-async-storage-instance.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/app-render/work-async-storage.external.js [middleware] (ecmascript) <locals>");
}}),
"[project]/node_modules/next/dist/esm/server/app-render/work-unit-async-storage-instance.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "workUnitAsyncStorageInstance": (()=>workUnitAsyncStorageInstance)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$async$2d$local$2d$storage$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/app-render/async-local-storage.js [middleware] (ecmascript)");
;
const workUnitAsyncStorageInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$async$2d$local$2d$storage$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createAsyncLocalStorage"])(); //# sourceMappingURL=work-unit-async-storage-instance.js.map
}}),
"[project]/node_modules/next/dist/esm/server/app-render/work-unit-async-storage.external.js [middleware] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// Share the instance module in the next-shared layer
__turbopack_esm__({
    "getExpectedRequestStore": (()=>getExpectedRequestStore),
    "getPrerenderResumeDataCache": (()=>getPrerenderResumeDataCache),
    "getRenderResumeDataCache": (()=>getRenderResumeDataCache)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/app-render/work-unit-async-storage-instance.js [middleware] (ecmascript)");
;
;
function getExpectedRequestStore(callingExpression) {
    const workUnitStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["workUnitAsyncStorageInstance"].getStore();
    if (workUnitStore) {
        if (workUnitStore.type === 'request') {
            return workUnitStore;
        }
        if (workUnitStore.type === 'prerender' || workUnitStore.type === 'prerender-ppr' || workUnitStore.type === 'prerender-legacy') {
            // This should not happen because we should have checked it already.
            throw new Error(`\`${callingExpression}\` cannot be called inside a prerender. This is a bug in Next.js.`);
        }
        if (workUnitStore.type === 'cache') {
            throw new Error(`\`${callingExpression}\` cannot be called inside "use cache". Call it outside and pass an argument instead. Read more: https://nextjs.org/docs/messages/next-request-in-use-cache`);
        } else if (workUnitStore.type === 'unstable-cache') {
            throw new Error(`\`${callingExpression}\` cannot be called inside unstable_cache. Call it outside and pass an argument instead. Read more: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`);
        }
    }
    throw new Error(`\`${callingExpression}\` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context`);
}
function getPrerenderResumeDataCache(workUnitStore) {
    if (workUnitStore.type === 'prerender' || workUnitStore.type === 'prerender-ppr') {
        return workUnitStore.prerenderResumeDataCache;
    }
    return null;
}
function getRenderResumeDataCache(workUnitStore) {
    if (workUnitStore.type !== 'prerender-legacy' && workUnitStore.type !== 'cache' && workUnitStore.type !== 'unstable-cache') {
        if (workUnitStore.type === 'request') {
            return workUnitStore.renderResumeDataCache;
        }
        // We return the mutable resume data cache here as an immutable version of
        // the cache as it can also be used for reading.
        return workUnitStore.prerenderResumeDataCache;
    }
    return null;
} //# sourceMappingURL=work-unit-async-storage.external.js.map
}}),
"[project]/node_modules/next/dist/esm/server/app-render/work-unit-async-storage.external.js [middleware] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/app-render/work-unit-async-storage-instance.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/app-render/work-unit-async-storage.external.js [middleware] (ecmascript) <locals>");
}}),
"[project]/node_modules/next/dist/esm/server/app-render/work-async-storage-instance.js [middleware] (ecmascript) <export workAsyncStorageInstance as workAsyncStorage>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "workAsyncStorage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["workAsyncStorageInstance"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/app-render/work-async-storage-instance.js [middleware] (ecmascript)");
}}),
"[project]/node_modules/next/dist/esm/server/web/spec-extension/adapters/request-cookies.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "MutableRequestCookiesAdapter": (()=>MutableRequestCookiesAdapter),
    "ReadonlyRequestCookiesError": (()=>ReadonlyRequestCookiesError),
    "RequestCookiesAdapter": (()=>RequestCookiesAdapter),
    "appendMutableCookies": (()=>appendMutableCookies),
    "areCookiesMutableInCurrentPhase": (()=>areCookiesMutableInCurrentPhase),
    "getModifiedCookieValues": (()=>getModifiedCookieValues),
    "responseCookiesToRequestCookies": (()=>responseCookiesToRequestCookies),
    "wrapWithMutableAccessCheck": (()=>wrapWithMutableAccessCheck)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$cookies$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/spec-extension/cookies.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/spec-extension/adapters/reflect.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/app-render/work-async-storage.external.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/app-render/work-unit-async-storage.external.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$export__workAsyncStorageInstance__as__workAsyncStorage$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/app-render/work-async-storage-instance.js [middleware] (ecmascript) <export workAsyncStorageInstance as workAsyncStorage>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/app-render/work-unit-async-storage.external.js [middleware] (ecmascript) <locals>");
;
;
;
;
;
class ReadonlyRequestCookiesError extends Error {
    constructor(){
        super('Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#options');
    }
    static callable() {
        throw new ReadonlyRequestCookiesError();
    }
}
class RequestCookiesAdapter {
    static seal(cookies) {
        return new Proxy(cookies, {
            get (target, prop, receiver) {
                switch(prop){
                    case 'clear':
                    case 'delete':
                    case 'set':
                        return ReadonlyRequestCookiesError.callable;
                    default:
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
                }
            }
        });
    }
}
const SYMBOL_MODIFY_COOKIE_VALUES = Symbol.for('next.mutated.cookies');
function getModifiedCookieValues(cookies) {
    const modified = cookies[SYMBOL_MODIFY_COOKIE_VALUES];
    if (!modified || !Array.isArray(modified) || modified.length === 0) {
        return [];
    }
    return modified;
}
function appendMutableCookies(headers, mutableCookies) {
    const modifiedCookieValues = getModifiedCookieValues(mutableCookies);
    if (modifiedCookieValues.length === 0) {
        return false;
    }
    // Return a new response that extends the response with
    // the modified cookies as fallbacks. `res` cookies
    // will still take precedence.
    const resCookies = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ResponseCookies"](headers);
    const returnedCookies = resCookies.getAll();
    // Set the modified cookies as fallbacks.
    for (const cookie of modifiedCookieValues){
        resCookies.set(cookie);
    }
    // Set the original cookies as the final values.
    for (const cookie of returnedCookies){
        resCookies.set(cookie);
    }
    return true;
}
class MutableRequestCookiesAdapter {
    static wrap(cookies, onUpdateCookies) {
        const responseCookies = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ResponseCookies"](new Headers());
        for (const cookie of cookies.getAll()){
            responseCookies.set(cookie);
        }
        let modifiedValues = [];
        const modifiedCookies = new Set();
        const updateResponseCookies = ()=>{
            // TODO-APP: change method of getting workStore
            const workStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$export__workAsyncStorageInstance__as__workAsyncStorage$3e$__["workAsyncStorage"].getStore();
            if (workStore) {
                workStore.pathWasRevalidated = true;
            }
            const allCookies = responseCookies.getAll();
            modifiedValues = allCookies.filter((c)=>modifiedCookies.has(c.name));
            if (onUpdateCookies) {
                const serializedCookies = [];
                for (const cookie of modifiedValues){
                    const tempCookies = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ResponseCookies"](new Headers());
                    tempCookies.set(cookie);
                    serializedCookies.push(tempCookies.toString());
                }
                onUpdateCookies(serializedCookies);
            }
        };
        const wrappedCookies = new Proxy(responseCookies, {
            get (target, prop, receiver) {
                switch(prop){
                    // A special symbol to get the modified cookie values
                    case SYMBOL_MODIFY_COOKIE_VALUES:
                        return modifiedValues;
                    // TODO: Throw error if trying to set a cookie after the response
                    // headers have been set.
                    case 'delete':
                        return function(...args) {
                            modifiedCookies.add(typeof args[0] === 'string' ? args[0] : args[0].name);
                            try {
                                target.delete(...args);
                                return wrappedCookies;
                            } finally{
                                updateResponseCookies();
                            }
                        };
                    case 'set':
                        return function(...args) {
                            modifiedCookies.add(typeof args[0] === 'string' ? args[0] : args[0].name);
                            try {
                                target.set(...args);
                                return wrappedCookies;
                            } finally{
                                updateResponseCookies();
                            }
                        };
                    default:
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
                }
            }
        });
        return wrappedCookies;
    }
}
function wrapWithMutableAccessCheck(responseCookies) {
    const wrappedCookies = new Proxy(responseCookies, {
        get (target, prop, receiver) {
            switch(prop){
                case 'delete':
                    return function(...args) {
                        ensureCookiesAreStillMutable('cookies().delete');
                        target.delete(...args);
                        return wrappedCookies;
                    };
                case 'set':
                    return function(...args) {
                        ensureCookiesAreStillMutable('cookies().set');
                        target.set(...args);
                        return wrappedCookies;
                    };
                default:
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
            }
        }
    });
    return wrappedCookies;
}
function areCookiesMutableInCurrentPhase(requestStore) {
    return requestStore.phase === 'action';
}
/** Ensure that cookies() starts throwing on mutation
 * if we changed phases and can no longer mutate.
 *
 * This can happen when going:
 *   'render' -> 'after'
 *   'action' -> 'render'
 * */ function ensureCookiesAreStillMutable(callingExpression) {
    const requestStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getExpectedRequestStore"])(callingExpression);
    if (!areCookiesMutableInCurrentPhase(requestStore)) {
        // TODO: maybe we can give a more precise error message based on callingExpression?
        throw new ReadonlyRequestCookiesError();
    }
}
function responseCookiesToRequestCookies(responseCookies) {
    const requestCookies = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["RequestCookies"](new Headers());
    for (const cookie of responseCookies.getAll()){
        requestCookies.set(cookie);
    }
    return requestCookies;
} //# sourceMappingURL=request-cookies.js.map
}}),
"[project]/node_modules/next/dist/esm/server/lib/trace/constants.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * Contains predefined constants for the trace span name in next/server.
 *
 * Currently, next/server/tracer is internal implementation only for tracking
 * next.js's implementation only with known span names defined here.
 **/ // eslint typescript has a bug with TS enums
/* eslint-disable no-shadow */ __turbopack_esm__({
    "AppRenderSpan": (()=>AppRenderSpan),
    "AppRouteRouteHandlersSpan": (()=>AppRouteRouteHandlersSpan),
    "BaseServerSpan": (()=>BaseServerSpan),
    "LoadComponentsSpan": (()=>LoadComponentsSpan),
    "LogSpanAllowList": (()=>LogSpanAllowList),
    "MiddlewareSpan": (()=>MiddlewareSpan),
    "NextNodeServerSpan": (()=>NextNodeServerSpan),
    "NextServerSpan": (()=>NextServerSpan),
    "NextVanillaSpanAllowlist": (()=>NextVanillaSpanAllowlist),
    "NodeSpan": (()=>NodeSpan),
    "RenderSpan": (()=>RenderSpan),
    "ResolveMetadataSpan": (()=>ResolveMetadataSpan),
    "RouterSpan": (()=>RouterSpan),
    "StartServerSpan": (()=>StartServerSpan)
});
var BaseServerSpan = /*#__PURE__*/ function(BaseServerSpan) {
    BaseServerSpan["handleRequest"] = "BaseServer.handleRequest";
    BaseServerSpan["run"] = "BaseServer.run";
    BaseServerSpan["pipe"] = "BaseServer.pipe";
    BaseServerSpan["getStaticHTML"] = "BaseServer.getStaticHTML";
    BaseServerSpan["render"] = "BaseServer.render";
    BaseServerSpan["renderToResponseWithComponents"] = "BaseServer.renderToResponseWithComponents";
    BaseServerSpan["renderToResponse"] = "BaseServer.renderToResponse";
    BaseServerSpan["renderToHTML"] = "BaseServer.renderToHTML";
    BaseServerSpan["renderError"] = "BaseServer.renderError";
    BaseServerSpan["renderErrorToResponse"] = "BaseServer.renderErrorToResponse";
    BaseServerSpan["renderErrorToHTML"] = "BaseServer.renderErrorToHTML";
    BaseServerSpan["render404"] = "BaseServer.render404";
    return BaseServerSpan;
}(BaseServerSpan || {});
var LoadComponentsSpan = /*#__PURE__*/ function(LoadComponentsSpan) {
    LoadComponentsSpan["loadDefaultErrorComponents"] = "LoadComponents.loadDefaultErrorComponents";
    LoadComponentsSpan["loadComponents"] = "LoadComponents.loadComponents";
    return LoadComponentsSpan;
}(LoadComponentsSpan || {});
var NextServerSpan = /*#__PURE__*/ function(NextServerSpan) {
    NextServerSpan["getRequestHandler"] = "NextServer.getRequestHandler";
    NextServerSpan["getServer"] = "NextServer.getServer";
    NextServerSpan["getServerRequestHandler"] = "NextServer.getServerRequestHandler";
    NextServerSpan["createServer"] = "createServer.createServer";
    return NextServerSpan;
}(NextServerSpan || {});
var NextNodeServerSpan = /*#__PURE__*/ function(NextNodeServerSpan) {
    NextNodeServerSpan["compression"] = "NextNodeServer.compression";
    NextNodeServerSpan["getBuildId"] = "NextNodeServer.getBuildId";
    NextNodeServerSpan["createComponentTree"] = "NextNodeServer.createComponentTree";
    NextNodeServerSpan["clientComponentLoading"] = "NextNodeServer.clientComponentLoading";
    NextNodeServerSpan["getLayoutOrPageModule"] = "NextNodeServer.getLayoutOrPageModule";
    NextNodeServerSpan["generateStaticRoutes"] = "NextNodeServer.generateStaticRoutes";
    NextNodeServerSpan["generateFsStaticRoutes"] = "NextNodeServer.generateFsStaticRoutes";
    NextNodeServerSpan["generatePublicRoutes"] = "NextNodeServer.generatePublicRoutes";
    NextNodeServerSpan["generateImageRoutes"] = "NextNodeServer.generateImageRoutes.route";
    NextNodeServerSpan["sendRenderResult"] = "NextNodeServer.sendRenderResult";
    NextNodeServerSpan["proxyRequest"] = "NextNodeServer.proxyRequest";
    NextNodeServerSpan["runApi"] = "NextNodeServer.runApi";
    NextNodeServerSpan["render"] = "NextNodeServer.render";
    NextNodeServerSpan["renderHTML"] = "NextNodeServer.renderHTML";
    NextNodeServerSpan["imageOptimizer"] = "NextNodeServer.imageOptimizer";
    NextNodeServerSpan["getPagePath"] = "NextNodeServer.getPagePath";
    NextNodeServerSpan["getRoutesManifest"] = "NextNodeServer.getRoutesManifest";
    NextNodeServerSpan["findPageComponents"] = "NextNodeServer.findPageComponents";
    NextNodeServerSpan["getFontManifest"] = "NextNodeServer.getFontManifest";
    NextNodeServerSpan["getServerComponentManifest"] = "NextNodeServer.getServerComponentManifest";
    NextNodeServerSpan["getRequestHandler"] = "NextNodeServer.getRequestHandler";
    NextNodeServerSpan["renderToHTML"] = "NextNodeServer.renderToHTML";
    NextNodeServerSpan["renderError"] = "NextNodeServer.renderError";
    NextNodeServerSpan["renderErrorToHTML"] = "NextNodeServer.renderErrorToHTML";
    NextNodeServerSpan["render404"] = "NextNodeServer.render404";
    NextNodeServerSpan["startResponse"] = "NextNodeServer.startResponse";
    // nested inner span, does not require parent scope name
    NextNodeServerSpan["route"] = "route";
    NextNodeServerSpan["onProxyReq"] = "onProxyReq";
    NextNodeServerSpan["apiResolver"] = "apiResolver";
    NextNodeServerSpan["internalFetch"] = "internalFetch";
    return NextNodeServerSpan;
}(NextNodeServerSpan || {});
var StartServerSpan = /*#__PURE__*/ function(StartServerSpan) {
    StartServerSpan["startServer"] = "startServer.startServer";
    return StartServerSpan;
}(StartServerSpan || {});
var RenderSpan = /*#__PURE__*/ function(RenderSpan) {
    RenderSpan["getServerSideProps"] = "Render.getServerSideProps";
    RenderSpan["getStaticProps"] = "Render.getStaticProps";
    RenderSpan["renderToString"] = "Render.renderToString";
    RenderSpan["renderDocument"] = "Render.renderDocument";
    RenderSpan["createBodyResult"] = "Render.createBodyResult";
    return RenderSpan;
}(RenderSpan || {});
var AppRenderSpan = /*#__PURE__*/ function(AppRenderSpan) {
    AppRenderSpan["renderToString"] = "AppRender.renderToString";
    AppRenderSpan["renderToReadableStream"] = "AppRender.renderToReadableStream";
    AppRenderSpan["getBodyResult"] = "AppRender.getBodyResult";
    AppRenderSpan["fetch"] = "AppRender.fetch";
    return AppRenderSpan;
}(AppRenderSpan || {});
var RouterSpan = /*#__PURE__*/ function(RouterSpan) {
    RouterSpan["executeRoute"] = "Router.executeRoute";
    return RouterSpan;
}(RouterSpan || {});
var NodeSpan = /*#__PURE__*/ function(NodeSpan) {
    NodeSpan["runHandler"] = "Node.runHandler";
    return NodeSpan;
}(NodeSpan || {});
var AppRouteRouteHandlersSpan = /*#__PURE__*/ function(AppRouteRouteHandlersSpan) {
    AppRouteRouteHandlersSpan["runHandler"] = "AppRouteRouteHandlers.runHandler";
    return AppRouteRouteHandlersSpan;
}(AppRouteRouteHandlersSpan || {});
var ResolveMetadataSpan = /*#__PURE__*/ function(ResolveMetadataSpan) {
    ResolveMetadataSpan["generateMetadata"] = "ResolveMetadata.generateMetadata";
    ResolveMetadataSpan["generateViewport"] = "ResolveMetadata.generateViewport";
    return ResolveMetadataSpan;
}(ResolveMetadataSpan || {});
var MiddlewareSpan = /*#__PURE__*/ function(MiddlewareSpan) {
    MiddlewareSpan["execute"] = "Middleware.execute";
    return MiddlewareSpan;
}(MiddlewareSpan || {});
const NextVanillaSpanAllowlist = [
    "Middleware.execute",
    "BaseServer.handleRequest",
    "Render.getServerSideProps",
    "Render.getStaticProps",
    "AppRender.fetch",
    "AppRender.getBodyResult",
    "Render.renderDocument",
    "Node.runHandler",
    "AppRouteRouteHandlers.runHandler",
    "ResolveMetadata.generateMetadata",
    "ResolveMetadata.generateViewport",
    "NextNodeServer.createComponentTree",
    "NextNodeServer.findPageComponents",
    "NextNodeServer.getLayoutOrPageModule",
    "NextNodeServer.startResponse",
    "NextNodeServer.clientComponentLoading"
];
const LogSpanAllowList = [
    "NextNodeServer.findPageComponents",
    "NextNodeServer.createComponentTree",
    "NextNodeServer.clientComponentLoading"
];
;
 //# sourceMappingURL=constants.js.map
}}),
"[project]/node_modules/next/dist/esm/shared/lib/is-thenable.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * Check to see if a value is Thenable.
 *
 * @param promise the maybe-thenable value
 * @returns true if the value is thenable
 */ __turbopack_esm__({
    "isThenable": (()=>isThenable)
});
function isThenable(promise) {
    return promise !== null && typeof promise === 'object' && 'then' in promise && typeof promise.then === 'function';
} //# sourceMappingURL=is-thenable.js.map
}}),
"[project]/node_modules/next/dist/compiled/@opentelemetry/api/index.js [middleware] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
(()=>{
    "use strict";
    var e = {
        491: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ContextAPI = void 0;
            const n = r(223);
            const a = r(172);
            const o = r(930);
            const i = "context";
            const c = new n.NoopContextManager;
            class ContextAPI {
                constructor(){}
                static getInstance() {
                    if (!this._instance) {
                        this._instance = new ContextAPI;
                    }
                    return this._instance;
                }
                setGlobalContextManager(e) {
                    return (0, a.registerGlobal)(i, e, o.DiagAPI.instance());
                }
                active() {
                    return this._getContextManager().active();
                }
                with(e, t, r, ...n) {
                    return this._getContextManager().with(e, t, r, ...n);
                }
                bind(e, t) {
                    return this._getContextManager().bind(e, t);
                }
                _getContextManager() {
                    return (0, a.getGlobal)(i) || c;
                }
                disable() {
                    this._getContextManager().disable();
                    (0, a.unregisterGlobal)(i, o.DiagAPI.instance());
                }
            }
            t.ContextAPI = ContextAPI;
        },
        930: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.DiagAPI = void 0;
            const n = r(56);
            const a = r(912);
            const o = r(957);
            const i = r(172);
            const c = "diag";
            class DiagAPI {
                constructor(){
                    function _logProxy(e) {
                        return function(...t) {
                            const r = (0, i.getGlobal)("diag");
                            if (!r) return;
                            return r[e](...t);
                        };
                    }
                    const e = this;
                    const setLogger = (t, r = {
                        logLevel: o.DiagLogLevel.INFO
                    })=>{
                        var n, c, s;
                        if (t === e) {
                            const t = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
                            e.error((n = t.stack) !== null && n !== void 0 ? n : t.message);
                            return false;
                        }
                        if (typeof r === "number") {
                            r = {
                                logLevel: r
                            };
                        }
                        const u = (0, i.getGlobal)("diag");
                        const l = (0, a.createLogLevelDiagLogger)((c = r.logLevel) !== null && c !== void 0 ? c : o.DiagLogLevel.INFO, t);
                        if (u && !r.suppressOverrideMessage) {
                            const e = (s = (new Error).stack) !== null && s !== void 0 ? s : "<failed to generate stacktrace>";
                            u.warn(`Current logger will be overwritten from ${e}`);
                            l.warn(`Current logger will overwrite one already registered from ${e}`);
                        }
                        return (0, i.registerGlobal)("diag", l, e, true);
                    };
                    e.setLogger = setLogger;
                    e.disable = ()=>{
                        (0, i.unregisterGlobal)(c, e);
                    };
                    e.createComponentLogger = (e)=>new n.DiagComponentLogger(e);
                    e.verbose = _logProxy("verbose");
                    e.debug = _logProxy("debug");
                    e.info = _logProxy("info");
                    e.warn = _logProxy("warn");
                    e.error = _logProxy("error");
                }
                static instance() {
                    if (!this._instance) {
                        this._instance = new DiagAPI;
                    }
                    return this._instance;
                }
            }
            t.DiagAPI = DiagAPI;
        },
        653: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.MetricsAPI = void 0;
            const n = r(660);
            const a = r(172);
            const o = r(930);
            const i = "metrics";
            class MetricsAPI {
                constructor(){}
                static getInstance() {
                    if (!this._instance) {
                        this._instance = new MetricsAPI;
                    }
                    return this._instance;
                }
                setGlobalMeterProvider(e) {
                    return (0, a.registerGlobal)(i, e, o.DiagAPI.instance());
                }
                getMeterProvider() {
                    return (0, a.getGlobal)(i) || n.NOOP_METER_PROVIDER;
                }
                getMeter(e, t, r) {
                    return this.getMeterProvider().getMeter(e, t, r);
                }
                disable() {
                    (0, a.unregisterGlobal)(i, o.DiagAPI.instance());
                }
            }
            t.MetricsAPI = MetricsAPI;
        },
        181: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.PropagationAPI = void 0;
            const n = r(172);
            const a = r(874);
            const o = r(194);
            const i = r(277);
            const c = r(369);
            const s = r(930);
            const u = "propagation";
            const l = new a.NoopTextMapPropagator;
            class PropagationAPI {
                constructor(){
                    this.createBaggage = c.createBaggage;
                    this.getBaggage = i.getBaggage;
                    this.getActiveBaggage = i.getActiveBaggage;
                    this.setBaggage = i.setBaggage;
                    this.deleteBaggage = i.deleteBaggage;
                }
                static getInstance() {
                    if (!this._instance) {
                        this._instance = new PropagationAPI;
                    }
                    return this._instance;
                }
                setGlobalPropagator(e) {
                    return (0, n.registerGlobal)(u, e, s.DiagAPI.instance());
                }
                inject(e, t, r = o.defaultTextMapSetter) {
                    return this._getGlobalPropagator().inject(e, t, r);
                }
                extract(e, t, r = o.defaultTextMapGetter) {
                    return this._getGlobalPropagator().extract(e, t, r);
                }
                fields() {
                    return this._getGlobalPropagator().fields();
                }
                disable() {
                    (0, n.unregisterGlobal)(u, s.DiagAPI.instance());
                }
                _getGlobalPropagator() {
                    return (0, n.getGlobal)(u) || l;
                }
            }
            t.PropagationAPI = PropagationAPI;
        },
        997: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.TraceAPI = void 0;
            const n = r(172);
            const a = r(846);
            const o = r(139);
            const i = r(607);
            const c = r(930);
            const s = "trace";
            class TraceAPI {
                constructor(){
                    this._proxyTracerProvider = new a.ProxyTracerProvider;
                    this.wrapSpanContext = o.wrapSpanContext;
                    this.isSpanContextValid = o.isSpanContextValid;
                    this.deleteSpan = i.deleteSpan;
                    this.getSpan = i.getSpan;
                    this.getActiveSpan = i.getActiveSpan;
                    this.getSpanContext = i.getSpanContext;
                    this.setSpan = i.setSpan;
                    this.setSpanContext = i.setSpanContext;
                }
                static getInstance() {
                    if (!this._instance) {
                        this._instance = new TraceAPI;
                    }
                    return this._instance;
                }
                setGlobalTracerProvider(e) {
                    const t = (0, n.registerGlobal)(s, this._proxyTracerProvider, c.DiagAPI.instance());
                    if (t) {
                        this._proxyTracerProvider.setDelegate(e);
                    }
                    return t;
                }
                getTracerProvider() {
                    return (0, n.getGlobal)(s) || this._proxyTracerProvider;
                }
                getTracer(e, t) {
                    return this.getTracerProvider().getTracer(e, t);
                }
                disable() {
                    (0, n.unregisterGlobal)(s, c.DiagAPI.instance());
                    this._proxyTracerProvider = new a.ProxyTracerProvider;
                }
            }
            t.TraceAPI = TraceAPI;
        },
        277: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.deleteBaggage = t.setBaggage = t.getActiveBaggage = t.getBaggage = void 0;
            const n = r(491);
            const a = r(780);
            const o = (0, a.createContextKey)("OpenTelemetry Baggage Key");
            function getBaggage(e) {
                return e.getValue(o) || undefined;
            }
            t.getBaggage = getBaggage;
            function getActiveBaggage() {
                return getBaggage(n.ContextAPI.getInstance().active());
            }
            t.getActiveBaggage = getActiveBaggage;
            function setBaggage(e, t) {
                return e.setValue(o, t);
            }
            t.setBaggage = setBaggage;
            function deleteBaggage(e) {
                return e.deleteValue(o);
            }
            t.deleteBaggage = deleteBaggage;
        },
        993: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.BaggageImpl = void 0;
            class BaggageImpl {
                constructor(e){
                    this._entries = e ? new Map(e) : new Map;
                }
                getEntry(e) {
                    const t = this._entries.get(e);
                    if (!t) {
                        return undefined;
                    }
                    return Object.assign({}, t);
                }
                getAllEntries() {
                    return Array.from(this._entries.entries()).map(([e, t])=>[
                            e,
                            t
                        ]);
                }
                setEntry(e, t) {
                    const r = new BaggageImpl(this._entries);
                    r._entries.set(e, t);
                    return r;
                }
                removeEntry(e) {
                    const t = new BaggageImpl(this._entries);
                    t._entries.delete(e);
                    return t;
                }
                removeEntries(...e) {
                    const t = new BaggageImpl(this._entries);
                    for (const r of e){
                        t._entries.delete(r);
                    }
                    return t;
                }
                clear() {
                    return new BaggageImpl;
                }
            }
            t.BaggageImpl = BaggageImpl;
        },
        830: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.baggageEntryMetadataSymbol = void 0;
            t.baggageEntryMetadataSymbol = Symbol("BaggageEntryMetadata");
        },
        369: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.baggageEntryMetadataFromString = t.createBaggage = void 0;
            const n = r(930);
            const a = r(993);
            const o = r(830);
            const i = n.DiagAPI.instance();
            function createBaggage(e = {}) {
                return new a.BaggageImpl(new Map(Object.entries(e)));
            }
            t.createBaggage = createBaggage;
            function baggageEntryMetadataFromString(e) {
                if (typeof e !== "string") {
                    i.error(`Cannot create baggage metadata from unknown type: ${typeof e}`);
                    e = "";
                }
                return {
                    __TYPE__: o.baggageEntryMetadataSymbol,
                    toString () {
                        return e;
                    }
                };
            }
            t.baggageEntryMetadataFromString = baggageEntryMetadataFromString;
        },
        67: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.context = void 0;
            const n = r(491);
            t.context = n.ContextAPI.getInstance();
        },
        223: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NoopContextManager = void 0;
            const n = r(780);
            class NoopContextManager {
                active() {
                    return n.ROOT_CONTEXT;
                }
                with(e, t, r, ...n) {
                    return t.call(r, ...n);
                }
                bind(e, t) {
                    return t;
                }
                enable() {
                    return this;
                }
                disable() {
                    return this;
                }
            }
            t.NoopContextManager = NoopContextManager;
        },
        780: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ROOT_CONTEXT = t.createContextKey = void 0;
            function createContextKey(e) {
                return Symbol.for(e);
            }
            t.createContextKey = createContextKey;
            class BaseContext {
                constructor(e){
                    const t = this;
                    t._currentContext = e ? new Map(e) : new Map;
                    t.getValue = (e)=>t._currentContext.get(e);
                    t.setValue = (e, r)=>{
                        const n = new BaseContext(t._currentContext);
                        n._currentContext.set(e, r);
                        return n;
                    };
                    t.deleteValue = (e)=>{
                        const r = new BaseContext(t._currentContext);
                        r._currentContext.delete(e);
                        return r;
                    };
                }
            }
            t.ROOT_CONTEXT = new BaseContext;
        },
        506: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.diag = void 0;
            const n = r(930);
            t.diag = n.DiagAPI.instance();
        },
        56: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.DiagComponentLogger = void 0;
            const n = r(172);
            class DiagComponentLogger {
                constructor(e){
                    this._namespace = e.namespace || "DiagComponentLogger";
                }
                debug(...e) {
                    return logProxy("debug", this._namespace, e);
                }
                error(...e) {
                    return logProxy("error", this._namespace, e);
                }
                info(...e) {
                    return logProxy("info", this._namespace, e);
                }
                warn(...e) {
                    return logProxy("warn", this._namespace, e);
                }
                verbose(...e) {
                    return logProxy("verbose", this._namespace, e);
                }
            }
            t.DiagComponentLogger = DiagComponentLogger;
            function logProxy(e, t, r) {
                const a = (0, n.getGlobal)("diag");
                if (!a) {
                    return;
                }
                r.unshift(t);
                return a[e](...r);
            }
        },
        972: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.DiagConsoleLogger = void 0;
            const r = [
                {
                    n: "error",
                    c: "error"
                },
                {
                    n: "warn",
                    c: "warn"
                },
                {
                    n: "info",
                    c: "info"
                },
                {
                    n: "debug",
                    c: "debug"
                },
                {
                    n: "verbose",
                    c: "trace"
                }
            ];
            class DiagConsoleLogger {
                constructor(){
                    function _consoleFunc(e) {
                        return function(...t) {
                            if (console) {
                                let r = console[e];
                                if (typeof r !== "function") {
                                    r = console.log;
                                }
                                if (typeof r === "function") {
                                    return r.apply(console, t);
                                }
                            }
                        };
                    }
                    for(let e = 0; e < r.length; e++){
                        this[r[e].n] = _consoleFunc(r[e].c);
                    }
                }
            }
            t.DiagConsoleLogger = DiagConsoleLogger;
        },
        912: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.createLogLevelDiagLogger = void 0;
            const n = r(957);
            function createLogLevelDiagLogger(e, t) {
                if (e < n.DiagLogLevel.NONE) {
                    e = n.DiagLogLevel.NONE;
                } else if (e > n.DiagLogLevel.ALL) {
                    e = n.DiagLogLevel.ALL;
                }
                t = t || {};
                function _filterFunc(r, n) {
                    const a = t[r];
                    if (typeof a === "function" && e >= n) {
                        return a.bind(t);
                    }
                    return function() {};
                }
                return {
                    error: _filterFunc("error", n.DiagLogLevel.ERROR),
                    warn: _filterFunc("warn", n.DiagLogLevel.WARN),
                    info: _filterFunc("info", n.DiagLogLevel.INFO),
                    debug: _filterFunc("debug", n.DiagLogLevel.DEBUG),
                    verbose: _filterFunc("verbose", n.DiagLogLevel.VERBOSE)
                };
            }
            t.createLogLevelDiagLogger = createLogLevelDiagLogger;
        },
        957: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.DiagLogLevel = void 0;
            var r;
            (function(e) {
                e[e["NONE"] = 0] = "NONE";
                e[e["ERROR"] = 30] = "ERROR";
                e[e["WARN"] = 50] = "WARN";
                e[e["INFO"] = 60] = "INFO";
                e[e["DEBUG"] = 70] = "DEBUG";
                e[e["VERBOSE"] = 80] = "VERBOSE";
                e[e["ALL"] = 9999] = "ALL";
            })(r = t.DiagLogLevel || (t.DiagLogLevel = {}));
        },
        172: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.unregisterGlobal = t.getGlobal = t.registerGlobal = void 0;
            const n = r(200);
            const a = r(521);
            const o = r(130);
            const i = a.VERSION.split(".")[0];
            const c = Symbol.for(`opentelemetry.js.api.${i}`);
            const s = n._globalThis;
            function registerGlobal(e, t, r, n = false) {
                var o;
                const i = s[c] = (o = s[c]) !== null && o !== void 0 ? o : {
                    version: a.VERSION
                };
                if (!n && i[e]) {
                    const t = new Error(`@opentelemetry/api: Attempted duplicate registration of API: ${e}`);
                    r.error(t.stack || t.message);
                    return false;
                }
                if (i.version !== a.VERSION) {
                    const t = new Error(`@opentelemetry/api: Registration of version v${i.version} for ${e} does not match previously registered API v${a.VERSION}`);
                    r.error(t.stack || t.message);
                    return false;
                }
                i[e] = t;
                r.debug(`@opentelemetry/api: Registered a global for ${e} v${a.VERSION}.`);
                return true;
            }
            t.registerGlobal = registerGlobal;
            function getGlobal(e) {
                var t, r;
                const n = (t = s[c]) === null || t === void 0 ? void 0 : t.version;
                if (!n || !(0, o.isCompatible)(n)) {
                    return;
                }
                return (r = s[c]) === null || r === void 0 ? void 0 : r[e];
            }
            t.getGlobal = getGlobal;
            function unregisterGlobal(e, t) {
                t.debug(`@opentelemetry/api: Unregistering a global for ${e} v${a.VERSION}.`);
                const r = s[c];
                if (r) {
                    delete r[e];
                }
            }
            t.unregisterGlobal = unregisterGlobal;
        },
        130: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.isCompatible = t._makeCompatibilityCheck = void 0;
            const n = r(521);
            const a = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
            function _makeCompatibilityCheck(e) {
                const t = new Set([
                    e
                ]);
                const r = new Set;
                const n = e.match(a);
                if (!n) {
                    return ()=>false;
                }
                const o = {
                    major: +n[1],
                    minor: +n[2],
                    patch: +n[3],
                    prerelease: n[4]
                };
                if (o.prerelease != null) {
                    return function isExactmatch(t) {
                        return t === e;
                    };
                }
                function _reject(e) {
                    r.add(e);
                    return false;
                }
                function _accept(e) {
                    t.add(e);
                    return true;
                }
                return function isCompatible(e) {
                    if (t.has(e)) {
                        return true;
                    }
                    if (r.has(e)) {
                        return false;
                    }
                    const n = e.match(a);
                    if (!n) {
                        return _reject(e);
                    }
                    const i = {
                        major: +n[1],
                        minor: +n[2],
                        patch: +n[3],
                        prerelease: n[4]
                    };
                    if (i.prerelease != null) {
                        return _reject(e);
                    }
                    if (o.major !== i.major) {
                        return _reject(e);
                    }
                    if (o.major === 0) {
                        if (o.minor === i.minor && o.patch <= i.patch) {
                            return _accept(e);
                        }
                        return _reject(e);
                    }
                    if (o.minor <= i.minor) {
                        return _accept(e);
                    }
                    return _reject(e);
                };
            }
            t._makeCompatibilityCheck = _makeCompatibilityCheck;
            t.isCompatible = _makeCompatibilityCheck(n.VERSION);
        },
        886: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.metrics = void 0;
            const n = r(653);
            t.metrics = n.MetricsAPI.getInstance();
        },
        901: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ValueType = void 0;
            var r;
            (function(e) {
                e[e["INT"] = 0] = "INT";
                e[e["DOUBLE"] = 1] = "DOUBLE";
            })(r = t.ValueType || (t.ValueType = {}));
        },
        102: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.createNoopMeter = t.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = t.NOOP_OBSERVABLE_GAUGE_METRIC = t.NOOP_OBSERVABLE_COUNTER_METRIC = t.NOOP_UP_DOWN_COUNTER_METRIC = t.NOOP_HISTOGRAM_METRIC = t.NOOP_COUNTER_METRIC = t.NOOP_METER = t.NoopObservableUpDownCounterMetric = t.NoopObservableGaugeMetric = t.NoopObservableCounterMetric = t.NoopObservableMetric = t.NoopHistogramMetric = t.NoopUpDownCounterMetric = t.NoopCounterMetric = t.NoopMetric = t.NoopMeter = void 0;
            class NoopMeter {
                constructor(){}
                createHistogram(e, r) {
                    return t.NOOP_HISTOGRAM_METRIC;
                }
                createCounter(e, r) {
                    return t.NOOP_COUNTER_METRIC;
                }
                createUpDownCounter(e, r) {
                    return t.NOOP_UP_DOWN_COUNTER_METRIC;
                }
                createObservableGauge(e, r) {
                    return t.NOOP_OBSERVABLE_GAUGE_METRIC;
                }
                createObservableCounter(e, r) {
                    return t.NOOP_OBSERVABLE_COUNTER_METRIC;
                }
                createObservableUpDownCounter(e, r) {
                    return t.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
                }
                addBatchObservableCallback(e, t) {}
                removeBatchObservableCallback(e) {}
            }
            t.NoopMeter = NoopMeter;
            class NoopMetric {
            }
            t.NoopMetric = NoopMetric;
            class NoopCounterMetric extends NoopMetric {
                add(e, t) {}
            }
            t.NoopCounterMetric = NoopCounterMetric;
            class NoopUpDownCounterMetric extends NoopMetric {
                add(e, t) {}
            }
            t.NoopUpDownCounterMetric = NoopUpDownCounterMetric;
            class NoopHistogramMetric extends NoopMetric {
                record(e, t) {}
            }
            t.NoopHistogramMetric = NoopHistogramMetric;
            class NoopObservableMetric {
                addCallback(e) {}
                removeCallback(e) {}
            }
            t.NoopObservableMetric = NoopObservableMetric;
            class NoopObservableCounterMetric extends NoopObservableMetric {
            }
            t.NoopObservableCounterMetric = NoopObservableCounterMetric;
            class NoopObservableGaugeMetric extends NoopObservableMetric {
            }
            t.NoopObservableGaugeMetric = NoopObservableGaugeMetric;
            class NoopObservableUpDownCounterMetric extends NoopObservableMetric {
            }
            t.NoopObservableUpDownCounterMetric = NoopObservableUpDownCounterMetric;
            t.NOOP_METER = new NoopMeter;
            t.NOOP_COUNTER_METRIC = new NoopCounterMetric;
            t.NOOP_HISTOGRAM_METRIC = new NoopHistogramMetric;
            t.NOOP_UP_DOWN_COUNTER_METRIC = new NoopUpDownCounterMetric;
            t.NOOP_OBSERVABLE_COUNTER_METRIC = new NoopObservableCounterMetric;
            t.NOOP_OBSERVABLE_GAUGE_METRIC = new NoopObservableGaugeMetric;
            t.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new NoopObservableUpDownCounterMetric;
            function createNoopMeter() {
                return t.NOOP_METER;
            }
            t.createNoopMeter = createNoopMeter;
        },
        660: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NOOP_METER_PROVIDER = t.NoopMeterProvider = void 0;
            const n = r(102);
            class NoopMeterProvider {
                getMeter(e, t, r) {
                    return n.NOOP_METER;
                }
            }
            t.NoopMeterProvider = NoopMeterProvider;
            t.NOOP_METER_PROVIDER = new NoopMeterProvider;
        },
        200: function(e, t, r) {
            var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                if (n === undefined) n = r;
                Object.defineProperty(e, n, {
                    enumerable: true,
                    get: function() {
                        return t[r];
                    }
                });
            } : function(e, t, r, n) {
                if (n === undefined) n = r;
                e[n] = t[r];
            });
            var a = this && this.__exportStar || function(e, t) {
                for(var r in e)if (r !== "default" && !Object.prototype.hasOwnProperty.call(t, r)) n(t, e, r);
            };
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            a(r(46), t);
        },
        651: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t._globalThis = void 0;
            t._globalThis = typeof globalThis === "object" ? globalThis : global;
        },
        46: function(e, t, r) {
            var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                if (n === undefined) n = r;
                Object.defineProperty(e, n, {
                    enumerable: true,
                    get: function() {
                        return t[r];
                    }
                });
            } : function(e, t, r, n) {
                if (n === undefined) n = r;
                e[n] = t[r];
            });
            var a = this && this.__exportStar || function(e, t) {
                for(var r in e)if (r !== "default" && !Object.prototype.hasOwnProperty.call(t, r)) n(t, e, r);
            };
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            a(r(651), t);
        },
        939: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.propagation = void 0;
            const n = r(181);
            t.propagation = n.PropagationAPI.getInstance();
        },
        874: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NoopTextMapPropagator = void 0;
            class NoopTextMapPropagator {
                inject(e, t) {}
                extract(e, t) {
                    return e;
                }
                fields() {
                    return [];
                }
            }
            t.NoopTextMapPropagator = NoopTextMapPropagator;
        },
        194: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.defaultTextMapSetter = t.defaultTextMapGetter = void 0;
            t.defaultTextMapGetter = {
                get (e, t) {
                    if (e == null) {
                        return undefined;
                    }
                    return e[t];
                },
                keys (e) {
                    if (e == null) {
                        return [];
                    }
                    return Object.keys(e);
                }
            };
            t.defaultTextMapSetter = {
                set (e, t, r) {
                    if (e == null) {
                        return;
                    }
                    e[t] = r;
                }
            };
        },
        845: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.trace = void 0;
            const n = r(997);
            t.trace = n.TraceAPI.getInstance();
        },
        403: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NonRecordingSpan = void 0;
            const n = r(476);
            class NonRecordingSpan {
                constructor(e = n.INVALID_SPAN_CONTEXT){
                    this._spanContext = e;
                }
                spanContext() {
                    return this._spanContext;
                }
                setAttribute(e, t) {
                    return this;
                }
                setAttributes(e) {
                    return this;
                }
                addEvent(e, t) {
                    return this;
                }
                setStatus(e) {
                    return this;
                }
                updateName(e) {
                    return this;
                }
                end(e) {}
                isRecording() {
                    return false;
                }
                recordException(e, t) {}
            }
            t.NonRecordingSpan = NonRecordingSpan;
        },
        614: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NoopTracer = void 0;
            const n = r(491);
            const a = r(607);
            const o = r(403);
            const i = r(139);
            const c = n.ContextAPI.getInstance();
            class NoopTracer {
                startSpan(e, t, r = c.active()) {
                    const n = Boolean(t === null || t === void 0 ? void 0 : t.root);
                    if (n) {
                        return new o.NonRecordingSpan;
                    }
                    const s = r && (0, a.getSpanContext)(r);
                    if (isSpanContext(s) && (0, i.isSpanContextValid)(s)) {
                        return new o.NonRecordingSpan(s);
                    } else {
                        return new o.NonRecordingSpan;
                    }
                }
                startActiveSpan(e, t, r, n) {
                    let o;
                    let i;
                    let s;
                    if (arguments.length < 2) {
                        return;
                    } else if (arguments.length === 2) {
                        s = t;
                    } else if (arguments.length === 3) {
                        o = t;
                        s = r;
                    } else {
                        o = t;
                        i = r;
                        s = n;
                    }
                    const u = i !== null && i !== void 0 ? i : c.active();
                    const l = this.startSpan(e, o, u);
                    const g = (0, a.setSpan)(u, l);
                    return c.with(g, s, undefined, l);
                }
            }
            t.NoopTracer = NoopTracer;
            function isSpanContext(e) {
                return typeof e === "object" && typeof e["spanId"] === "string" && typeof e["traceId"] === "string" && typeof e["traceFlags"] === "number";
            }
        },
        124: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NoopTracerProvider = void 0;
            const n = r(614);
            class NoopTracerProvider {
                getTracer(e, t, r) {
                    return new n.NoopTracer;
                }
            }
            t.NoopTracerProvider = NoopTracerProvider;
        },
        125: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ProxyTracer = void 0;
            const n = r(614);
            const a = new n.NoopTracer;
            class ProxyTracer {
                constructor(e, t, r, n){
                    this._provider = e;
                    this.name = t;
                    this.version = r;
                    this.options = n;
                }
                startSpan(e, t, r) {
                    return this._getTracer().startSpan(e, t, r);
                }
                startActiveSpan(e, t, r, n) {
                    const a = this._getTracer();
                    return Reflect.apply(a.startActiveSpan, a, arguments);
                }
                _getTracer() {
                    if (this._delegate) {
                        return this._delegate;
                    }
                    const e = this._provider.getDelegateTracer(this.name, this.version, this.options);
                    if (!e) {
                        return a;
                    }
                    this._delegate = e;
                    return this._delegate;
                }
            }
            t.ProxyTracer = ProxyTracer;
        },
        846: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ProxyTracerProvider = void 0;
            const n = r(125);
            const a = r(124);
            const o = new a.NoopTracerProvider;
            class ProxyTracerProvider {
                getTracer(e, t, r) {
                    var a;
                    return (a = this.getDelegateTracer(e, t, r)) !== null && a !== void 0 ? a : new n.ProxyTracer(this, e, t, r);
                }
                getDelegate() {
                    var e;
                    return (e = this._delegate) !== null && e !== void 0 ? e : o;
                }
                setDelegate(e) {
                    this._delegate = e;
                }
                getDelegateTracer(e, t, r) {
                    var n;
                    return (n = this._delegate) === null || n === void 0 ? void 0 : n.getTracer(e, t, r);
                }
            }
            t.ProxyTracerProvider = ProxyTracerProvider;
        },
        996: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.SamplingDecision = void 0;
            var r;
            (function(e) {
                e[e["NOT_RECORD"] = 0] = "NOT_RECORD";
                e[e["RECORD"] = 1] = "RECORD";
                e[e["RECORD_AND_SAMPLED"] = 2] = "RECORD_AND_SAMPLED";
            })(r = t.SamplingDecision || (t.SamplingDecision = {}));
        },
        607: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.getSpanContext = t.setSpanContext = t.deleteSpan = t.setSpan = t.getActiveSpan = t.getSpan = void 0;
            const n = r(780);
            const a = r(403);
            const o = r(491);
            const i = (0, n.createContextKey)("OpenTelemetry Context Key SPAN");
            function getSpan(e) {
                return e.getValue(i) || undefined;
            }
            t.getSpan = getSpan;
            function getActiveSpan() {
                return getSpan(o.ContextAPI.getInstance().active());
            }
            t.getActiveSpan = getActiveSpan;
            function setSpan(e, t) {
                return e.setValue(i, t);
            }
            t.setSpan = setSpan;
            function deleteSpan(e) {
                return e.deleteValue(i);
            }
            t.deleteSpan = deleteSpan;
            function setSpanContext(e, t) {
                return setSpan(e, new a.NonRecordingSpan(t));
            }
            t.setSpanContext = setSpanContext;
            function getSpanContext(e) {
                var t;
                return (t = getSpan(e)) === null || t === void 0 ? void 0 : t.spanContext();
            }
            t.getSpanContext = getSpanContext;
        },
        325: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.TraceStateImpl = void 0;
            const n = r(564);
            const a = 32;
            const o = 512;
            const i = ",";
            const c = "=";
            class TraceStateImpl {
                constructor(e){
                    this._internalState = new Map;
                    if (e) this._parse(e);
                }
                set(e, t) {
                    const r = this._clone();
                    if (r._internalState.has(e)) {
                        r._internalState.delete(e);
                    }
                    r._internalState.set(e, t);
                    return r;
                }
                unset(e) {
                    const t = this._clone();
                    t._internalState.delete(e);
                    return t;
                }
                get(e) {
                    return this._internalState.get(e);
                }
                serialize() {
                    return this._keys().reduce((e, t)=>{
                        e.push(t + c + this.get(t));
                        return e;
                    }, []).join(i);
                }
                _parse(e) {
                    if (e.length > o) return;
                    this._internalState = e.split(i).reverse().reduce((e, t)=>{
                        const r = t.trim();
                        const a = r.indexOf(c);
                        if (a !== -1) {
                            const o = r.slice(0, a);
                            const i = r.slice(a + 1, t.length);
                            if ((0, n.validateKey)(o) && (0, n.validateValue)(i)) {
                                e.set(o, i);
                            } else {}
                        }
                        return e;
                    }, new Map);
                    if (this._internalState.size > a) {
                        this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, a));
                    }
                }
                _keys() {
                    return Array.from(this._internalState.keys()).reverse();
                }
                _clone() {
                    const e = new TraceStateImpl;
                    e._internalState = new Map(this._internalState);
                    return e;
                }
            }
            t.TraceStateImpl = TraceStateImpl;
        },
        564: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.validateValue = t.validateKey = void 0;
            const r = "[_0-9a-z-*/]";
            const n = `[a-z]${r}{0,255}`;
            const a = `[a-z0-9]${r}{0,240}@[a-z]${r}{0,13}`;
            const o = new RegExp(`^(?:${n}|${a})$`);
            const i = /^[ -~]{0,255}[!-~]$/;
            const c = /,|=/;
            function validateKey(e) {
                return o.test(e);
            }
            t.validateKey = validateKey;
            function validateValue(e) {
                return i.test(e) && !c.test(e);
            }
            t.validateValue = validateValue;
        },
        98: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.createTraceState = void 0;
            const n = r(325);
            function createTraceState(e) {
                return new n.TraceStateImpl(e);
            }
            t.createTraceState = createTraceState;
        },
        476: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.INVALID_SPAN_CONTEXT = t.INVALID_TRACEID = t.INVALID_SPANID = void 0;
            const n = r(475);
            t.INVALID_SPANID = "0000000000000000";
            t.INVALID_TRACEID = "00000000000000000000000000000000";
            t.INVALID_SPAN_CONTEXT = {
                traceId: t.INVALID_TRACEID,
                spanId: t.INVALID_SPANID,
                traceFlags: n.TraceFlags.NONE
            };
        },
        357: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.SpanKind = void 0;
            var r;
            (function(e) {
                e[e["INTERNAL"] = 0] = "INTERNAL";
                e[e["SERVER"] = 1] = "SERVER";
                e[e["CLIENT"] = 2] = "CLIENT";
                e[e["PRODUCER"] = 3] = "PRODUCER";
                e[e["CONSUMER"] = 4] = "CONSUMER";
            })(r = t.SpanKind || (t.SpanKind = {}));
        },
        139: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.wrapSpanContext = t.isSpanContextValid = t.isValidSpanId = t.isValidTraceId = void 0;
            const n = r(476);
            const a = r(403);
            const o = /^([0-9a-f]{32})$/i;
            const i = /^[0-9a-f]{16}$/i;
            function isValidTraceId(e) {
                return o.test(e) && e !== n.INVALID_TRACEID;
            }
            t.isValidTraceId = isValidTraceId;
            function isValidSpanId(e) {
                return i.test(e) && e !== n.INVALID_SPANID;
            }
            t.isValidSpanId = isValidSpanId;
            function isSpanContextValid(e) {
                return isValidTraceId(e.traceId) && isValidSpanId(e.spanId);
            }
            t.isSpanContextValid = isSpanContextValid;
            function wrapSpanContext(e) {
                return new a.NonRecordingSpan(e);
            }
            t.wrapSpanContext = wrapSpanContext;
        },
        847: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.SpanStatusCode = void 0;
            var r;
            (function(e) {
                e[e["UNSET"] = 0] = "UNSET";
                e[e["OK"] = 1] = "OK";
                e[e["ERROR"] = 2] = "ERROR";
            })(r = t.SpanStatusCode || (t.SpanStatusCode = {}));
        },
        475: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.TraceFlags = void 0;
            var r;
            (function(e) {
                e[e["NONE"] = 0] = "NONE";
                e[e["SAMPLED"] = 1] = "SAMPLED";
            })(r = t.TraceFlags || (t.TraceFlags = {}));
        },
        521: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.VERSION = void 0;
            t.VERSION = "1.6.0";
        }
    };
    var t = {};
    function __nccwpck_require__(r) {
        var n = t[r];
        if (n !== undefined) {
            return n.exports;
        }
        var a = t[r] = {
            exports: {}
        };
        var o = true;
        try {
            e[r].call(a.exports, a, a.exports, __nccwpck_require__);
            o = false;
        } finally{
            if (o) delete t[r];
        }
        return a.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var r = {};
    (()=>{
        var e = r;
        Object.defineProperty(e, "__esModule", {
            value: true
        });
        e.trace = e.propagation = e.metrics = e.diag = e.context = e.INVALID_SPAN_CONTEXT = e.INVALID_TRACEID = e.INVALID_SPANID = e.isValidSpanId = e.isValidTraceId = e.isSpanContextValid = e.createTraceState = e.TraceFlags = e.SpanStatusCode = e.SpanKind = e.SamplingDecision = e.ProxyTracerProvider = e.ProxyTracer = e.defaultTextMapSetter = e.defaultTextMapGetter = e.ValueType = e.createNoopMeter = e.DiagLogLevel = e.DiagConsoleLogger = e.ROOT_CONTEXT = e.createContextKey = e.baggageEntryMetadataFromString = void 0;
        var t = __nccwpck_require__(369);
        Object.defineProperty(e, "baggageEntryMetadataFromString", {
            enumerable: true,
            get: function() {
                return t.baggageEntryMetadataFromString;
            }
        });
        var n = __nccwpck_require__(780);
        Object.defineProperty(e, "createContextKey", {
            enumerable: true,
            get: function() {
                return n.createContextKey;
            }
        });
        Object.defineProperty(e, "ROOT_CONTEXT", {
            enumerable: true,
            get: function() {
                return n.ROOT_CONTEXT;
            }
        });
        var a = __nccwpck_require__(972);
        Object.defineProperty(e, "DiagConsoleLogger", {
            enumerable: true,
            get: function() {
                return a.DiagConsoleLogger;
            }
        });
        var o = __nccwpck_require__(957);
        Object.defineProperty(e, "DiagLogLevel", {
            enumerable: true,
            get: function() {
                return o.DiagLogLevel;
            }
        });
        var i = __nccwpck_require__(102);
        Object.defineProperty(e, "createNoopMeter", {
            enumerable: true,
            get: function() {
                return i.createNoopMeter;
            }
        });
        var c = __nccwpck_require__(901);
        Object.defineProperty(e, "ValueType", {
            enumerable: true,
            get: function() {
                return c.ValueType;
            }
        });
        var s = __nccwpck_require__(194);
        Object.defineProperty(e, "defaultTextMapGetter", {
            enumerable: true,
            get: function() {
                return s.defaultTextMapGetter;
            }
        });
        Object.defineProperty(e, "defaultTextMapSetter", {
            enumerable: true,
            get: function() {
                return s.defaultTextMapSetter;
            }
        });
        var u = __nccwpck_require__(125);
        Object.defineProperty(e, "ProxyTracer", {
            enumerable: true,
            get: function() {
                return u.ProxyTracer;
            }
        });
        var l = __nccwpck_require__(846);
        Object.defineProperty(e, "ProxyTracerProvider", {
            enumerable: true,
            get: function() {
                return l.ProxyTracerProvider;
            }
        });
        var g = __nccwpck_require__(996);
        Object.defineProperty(e, "SamplingDecision", {
            enumerable: true,
            get: function() {
                return g.SamplingDecision;
            }
        });
        var p = __nccwpck_require__(357);
        Object.defineProperty(e, "SpanKind", {
            enumerable: true,
            get: function() {
                return p.SpanKind;
            }
        });
        var d = __nccwpck_require__(847);
        Object.defineProperty(e, "SpanStatusCode", {
            enumerable: true,
            get: function() {
                return d.SpanStatusCode;
            }
        });
        var _ = __nccwpck_require__(475);
        Object.defineProperty(e, "TraceFlags", {
            enumerable: true,
            get: function() {
                return _.TraceFlags;
            }
        });
        var f = __nccwpck_require__(98);
        Object.defineProperty(e, "createTraceState", {
            enumerable: true,
            get: function() {
                return f.createTraceState;
            }
        });
        var b = __nccwpck_require__(139);
        Object.defineProperty(e, "isSpanContextValid", {
            enumerable: true,
            get: function() {
                return b.isSpanContextValid;
            }
        });
        Object.defineProperty(e, "isValidTraceId", {
            enumerable: true,
            get: function() {
                return b.isValidTraceId;
            }
        });
        Object.defineProperty(e, "isValidSpanId", {
            enumerable: true,
            get: function() {
                return b.isValidSpanId;
            }
        });
        var v = __nccwpck_require__(476);
        Object.defineProperty(e, "INVALID_SPANID", {
            enumerable: true,
            get: function() {
                return v.INVALID_SPANID;
            }
        });
        Object.defineProperty(e, "INVALID_TRACEID", {
            enumerable: true,
            get: function() {
                return v.INVALID_TRACEID;
            }
        });
        Object.defineProperty(e, "INVALID_SPAN_CONTEXT", {
            enumerable: true,
            get: function() {
                return v.INVALID_SPAN_CONTEXT;
            }
        });
        const O = __nccwpck_require__(67);
        Object.defineProperty(e, "context", {
            enumerable: true,
            get: function() {
                return O.context;
            }
        });
        const P = __nccwpck_require__(506);
        Object.defineProperty(e, "diag", {
            enumerable: true,
            get: function() {
                return P.diag;
            }
        });
        const N = __nccwpck_require__(886);
        Object.defineProperty(e, "metrics", {
            enumerable: true,
            get: function() {
                return N.metrics;
            }
        });
        const S = __nccwpck_require__(939);
        Object.defineProperty(e, "propagation", {
            enumerable: true,
            get: function() {
                return S.propagation;
            }
        });
        const C = __nccwpck_require__(845);
        Object.defineProperty(e, "trace", {
            enumerable: true,
            get: function() {
                return C.trace;
            }
        });
        e["default"] = {
            context: O.context,
            diag: P.diag,
            metrics: N.metrics,
            propagation: S.propagation,
            trace: C.trace
        };
    })();
    module.exports = r;
})();
}}),
"[project]/node_modules/next/dist/esm/server/lib/trace/tracer.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "BubbledError": (()=>BubbledError),
    "SpanKind": (()=>SpanKind),
    "SpanStatusCode": (()=>SpanStatusCode),
    "getTracer": (()=>getTracer),
    "isBubbledError": (()=>isBubbledError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/lib/trace/constants.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$is$2d$thenable$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/shared/lib/is-thenable.js [middleware] (ecmascript)");
;
;
let api;
// we want to allow users to use their own version of @opentelemetry/api if they
// want to, so we try to require it first, and if it fails we fall back to the
// version that is bundled with Next.js
// this is because @opentelemetry/api has to be synced with the version of
// @opentelemetry/tracing that is used, and we don't want to force users to use
// the version that is bundled with Next.js.
// the API is ~stable, so this should be fine
if ("TURBOPACK compile-time truthy", 1) {
    api = __turbopack_require__("[project]/node_modules/next/dist/compiled/@opentelemetry/api/index.js [middleware] (ecmascript)");
} else {
    "TURBOPACK unreachable";
}
const { context, propagation, trace, SpanStatusCode, SpanKind, ROOT_CONTEXT } = api;
class BubbledError extends Error {
    constructor(bubble, result){
        super(), this.bubble = bubble, this.result = result;
    }
}
function isBubbledError(error) {
    if (typeof error !== 'object' || error === null) return false;
    return error instanceof BubbledError;
}
const closeSpanWithError = (span, error)=>{
    if (isBubbledError(error) && error.bubble) {
        span.setAttribute('next.bubble', true);
    } else {
        if (error) {
            span.recordException(error);
        }
        span.setStatus({
            code: SpanStatusCode.ERROR,
            message: error == null ? void 0 : error.message
        });
    }
    span.end();
};
/** we use this map to propagate attributes from nested spans to the top span */ const rootSpanAttributesStore = new Map();
const rootSpanIdKey = api.createContextKey('next.rootSpanId');
let lastSpanId = 0;
const getSpanId = ()=>lastSpanId++;
const clientTraceDataSetter = {
    set (carrier, key, value) {
        carrier.push({
            key,
            value
        });
    }
};
class NextTracerImpl {
    /**
   * Returns an instance to the trace with configured name.
   * Since wrap / trace can be defined in any place prior to actual trace subscriber initialization,
   * This should be lazily evaluated.
   */ getTracerInstance() {
        return trace.getTracer('next.js', '0.0.1');
    }
    getContext() {
        return context;
    }
    getTracePropagationData() {
        const activeContext = context.active();
        const entries = [];
        propagation.inject(activeContext, entries, clientTraceDataSetter);
        return entries;
    }
    getActiveScopeSpan() {
        return trace.getSpan(context == null ? void 0 : context.active());
    }
    withPropagatedContext(carrier, fn, getter) {
        const activeContext = context.active();
        if (trace.getSpanContext(activeContext)) {
            // Active span is already set, too late to propagate.
            return fn();
        }
        const remoteContext = propagation.extract(activeContext, carrier, getter);
        return context.with(remoteContext, fn);
    }
    trace(...args) {
        var _trace_getSpanContext;
        const [type, fnOrOptions, fnOrEmpty] = args;
        // coerce options form overload
        const { fn, options } = typeof fnOrOptions === 'function' ? {
            fn: fnOrOptions,
            options: {}
        } : {
            fn: fnOrEmpty,
            options: {
                ...fnOrOptions
            }
        };
        const spanName = options.spanName ?? type;
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextVanillaSpanAllowlist"].includes(type) && process.env.NEXT_OTEL_VERBOSE !== '1' || options.hideSpan) {
            return fn();
        }
        // Trying to get active scoped span to assign parent. If option specifies parent span manually, will try to use it.
        let spanContext = this.getSpanContext((options == null ? void 0 : options.parentSpan) ?? this.getActiveScopeSpan());
        let isRootSpan = false;
        if (!spanContext) {
            spanContext = (context == null ? void 0 : context.active()) ?? ROOT_CONTEXT;
            isRootSpan = true;
        } else if ((_trace_getSpanContext = trace.getSpanContext(spanContext)) == null ? void 0 : _trace_getSpanContext.isRemote) {
            isRootSpan = true;
        }
        const spanId = getSpanId();
        options.attributes = {
            'next.span_name': spanName,
            'next.span_type': type,
            ...options.attributes
        };
        return context.with(spanContext.setValue(rootSpanIdKey, spanId), ()=>this.getTracerInstance().startActiveSpan(spanName, options, (span)=>{
                const startTime = 'performance' in globalThis && 'measure' in performance ? globalThis.performance.now() : undefined;
                const onCleanup = ()=>{
                    rootSpanAttributesStore.delete(spanId);
                    if (startTime && process.env.NEXT_OTEL_PERFORMANCE_PREFIX && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["LogSpanAllowList"].includes(type || '')) {
                        performance.measure(`${process.env.NEXT_OTEL_PERFORMANCE_PREFIX}:next-${(type.split('.').pop() || '').replace(/[A-Z]/g, (match)=>'-' + match.toLowerCase())}`, {
                            start: startTime,
                            end: performance.now()
                        });
                    }
                };
                if (isRootSpan) {
                    rootSpanAttributesStore.set(spanId, new Map(Object.entries(options.attributes ?? {})));
                }
                try {
                    if (fn.length > 1) {
                        return fn(span, (err)=>closeSpanWithError(span, err));
                    }
                    const result = fn(span);
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$is$2d$thenable$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["isThenable"])(result)) {
                        // If there's error make sure it throws
                        return result.then((res)=>{
                            span.end();
                            // Need to pass down the promise result,
                            // it could be react stream response with error { error, stream }
                            return res;
                        }).catch((err)=>{
                            closeSpanWithError(span, err);
                            throw err;
                        }).finally(onCleanup);
                    } else {
                        span.end();
                        onCleanup();
                    }
                    return result;
                } catch (err) {
                    closeSpanWithError(span, err);
                    onCleanup();
                    throw err;
                }
            }));
    }
    wrap(...args) {
        const tracer = this;
        const [name, options, fn] = args.length === 3 ? args : [
            args[0],
            {},
            args[1]
        ];
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextVanillaSpanAllowlist"].includes(name) && process.env.NEXT_OTEL_VERBOSE !== '1') {
            return fn;
        }
        return function() {
            let optionsObj = options;
            if (typeof optionsObj === 'function' && typeof fn === 'function') {
                optionsObj = optionsObj.apply(this, arguments);
            }
            const lastArgId = arguments.length - 1;
            const cb = arguments[lastArgId];
            if (typeof cb === 'function') {
                const scopeBoundCb = tracer.getContext().bind(context.active(), cb);
                return tracer.trace(name, optionsObj, (_span, done)=>{
                    arguments[lastArgId] = function(err) {
                        done == null ? void 0 : done(err);
                        return scopeBoundCb.apply(this, arguments);
                    };
                    return fn.apply(this, arguments);
                });
            } else {
                return tracer.trace(name, optionsObj, ()=>fn.apply(this, arguments));
            }
        };
    }
    startSpan(...args) {
        const [type, options] = args;
        const spanContext = this.getSpanContext((options == null ? void 0 : options.parentSpan) ?? this.getActiveScopeSpan());
        return this.getTracerInstance().startSpan(type, options, spanContext);
    }
    getSpanContext(parentSpan) {
        const spanContext = parentSpan ? trace.setSpan(context.active(), parentSpan) : undefined;
        return spanContext;
    }
    getRootSpanAttributes() {
        const spanId = context.active().getValue(rootSpanIdKey);
        return rootSpanAttributesStore.get(spanId);
    }
    setRootSpanAttribute(key, value) {
        const spanId = context.active().getValue(rootSpanIdKey);
        const attributes = rootSpanAttributesStore.get(spanId);
        if (attributes) {
            attributes.set(key, value);
        }
    }
}
const getTracer = (()=>{
    const tracer = new NextTracerImpl();
    return ()=>tracer;
})();
;
 //# sourceMappingURL=tracer.js.map
}}),
"[project]/node_modules/next/dist/compiled/cookie/index.js [middleware] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
(()=>{
    "use strict";
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var e = {};
    (()=>{
        var r = e;
        /*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */ r.parse = parse;
        r.serialize = serialize;
        var i = decodeURIComponent;
        var t = encodeURIComponent;
        var a = /; */;
        var n = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
        function parse(e, r) {
            if (typeof e !== "string") {
                throw new TypeError("argument str must be a string");
            }
            var t = {};
            var n = r || {};
            var o = e.split(a);
            var s = n.decode || i;
            for(var p = 0; p < o.length; p++){
                var f = o[p];
                var u = f.indexOf("=");
                if (u < 0) {
                    continue;
                }
                var v = f.substr(0, u).trim();
                var c = f.substr(++u, f.length).trim();
                if ('"' == c[0]) {
                    c = c.slice(1, -1);
                }
                if (undefined == t[v]) {
                    t[v] = tryDecode(c, s);
                }
            }
            return t;
        }
        function serialize(e, r, i) {
            var a = i || {};
            var o = a.encode || t;
            if (typeof o !== "function") {
                throw new TypeError("option encode is invalid");
            }
            if (!n.test(e)) {
                throw new TypeError("argument name is invalid");
            }
            var s = o(r);
            if (s && !n.test(s)) {
                throw new TypeError("argument val is invalid");
            }
            var p = e + "=" + s;
            if (null != a.maxAge) {
                var f = a.maxAge - 0;
                if (isNaN(f) || !isFinite(f)) {
                    throw new TypeError("option maxAge is invalid");
                }
                p += "; Max-Age=" + Math.floor(f);
            }
            if (a.domain) {
                if (!n.test(a.domain)) {
                    throw new TypeError("option domain is invalid");
                }
                p += "; Domain=" + a.domain;
            }
            if (a.path) {
                if (!n.test(a.path)) {
                    throw new TypeError("option path is invalid");
                }
                p += "; Path=" + a.path;
            }
            if (a.expires) {
                if (typeof a.expires.toUTCString !== "function") {
                    throw new TypeError("option expires is invalid");
                }
                p += "; Expires=" + a.expires.toUTCString();
            }
            if (a.httpOnly) {
                p += "; HttpOnly";
            }
            if (a.secure) {
                p += "; Secure";
            }
            if (a.sameSite) {
                var u = typeof a.sameSite === "string" ? a.sameSite.toLowerCase() : a.sameSite;
                switch(u){
                    case true:
                        p += "; SameSite=Strict";
                        break;
                    case "lax":
                        p += "; SameSite=Lax";
                        break;
                    case "strict":
                        p += "; SameSite=Strict";
                        break;
                    case "none":
                        p += "; SameSite=None";
                        break;
                    default:
                        throw new TypeError("option sameSite is invalid");
                }
            }
            return p;
        }
        function tryDecode(e, r) {
            try {
                return r(e);
            } catch (r) {
                return e;
            }
        }
    })();
    module.exports = e;
})();
}}),
"[project]/node_modules/next/dist/esm/server/api-utils/index.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ApiError": (()=>ApiError),
    "COOKIE_NAME_PRERENDER_BYPASS": (()=>COOKIE_NAME_PRERENDER_BYPASS),
    "COOKIE_NAME_PRERENDER_DATA": (()=>COOKIE_NAME_PRERENDER_DATA),
    "RESPONSE_LIMIT_DEFAULT": (()=>RESPONSE_LIMIT_DEFAULT),
    "SYMBOL_CLEARED_COOKIES": (()=>SYMBOL_CLEARED_COOKIES),
    "SYMBOL_PREVIEW_DATA": (()=>SYMBOL_PREVIEW_DATA),
    "checkIsOnDemandRevalidate": (()=>checkIsOnDemandRevalidate),
    "clearPreviewData": (()=>clearPreviewData),
    "redirect": (()=>redirect),
    "sendError": (()=>sendError),
    "sendStatusCode": (()=>sendStatusCode),
    "setLazyProp": (()=>setLazyProp),
    "wrapApiHandler": (()=>wrapApiHandler)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/spec-extension/adapters/headers.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/lib/constants.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/lib/trace/tracer.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/lib/trace/constants.js [middleware] (ecmascript)");
;
;
;
;
function wrapApiHandler(page, handler) {
    return (...args)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getTracer"])().setRootSpanAttribute('next.route', page);
        // Call API route method
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getTracer"])().trace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NodeSpan"].runHandler, {
            spanName: `executing api route (pages) ${page}`
        }, ()=>handler(...args));
    };
}
function sendStatusCode(res, statusCode) {
    res.statusCode = statusCode;
    return res;
}
function redirect(res, statusOrUrl, url) {
    if (typeof statusOrUrl === 'string') {
        url = statusOrUrl;
        statusOrUrl = 307;
    }
    if (typeof statusOrUrl !== 'number' || typeof url !== 'string') {
        throw new Error(`Invalid redirect arguments. Please use a single argument URL, e.g. res.redirect('/destination') or use a status code and URL, e.g. res.redirect(307, '/destination').`);
    }
    res.writeHead(statusOrUrl, {
        Location: url
    });
    res.write(url);
    res.end();
    return res;
}
function checkIsOnDemandRevalidate(req, previewProps) {
    const headers = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["HeadersAdapter"].from(req.headers);
    const previewModeId = headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["PRERENDER_REVALIDATE_HEADER"]);
    const isOnDemandRevalidate = previewModeId === previewProps.previewModeId;
    const revalidateOnlyGenerated = headers.has(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER"]);
    return {
        isOnDemandRevalidate,
        revalidateOnlyGenerated
    };
}
const COOKIE_NAME_PRERENDER_BYPASS = `__prerender_bypass`;
const COOKIE_NAME_PRERENDER_DATA = `__next_preview_data`;
const RESPONSE_LIMIT_DEFAULT = 4 * 1024 * 1024;
const SYMBOL_PREVIEW_DATA = Symbol(COOKIE_NAME_PRERENDER_DATA);
const SYMBOL_CLEARED_COOKIES = Symbol(COOKIE_NAME_PRERENDER_BYPASS);
function clearPreviewData(res, options = {}) {
    if (SYMBOL_CLEARED_COOKIES in res) {
        return res;
    }
    const { serialize } = __turbopack_require__("[project]/node_modules/next/dist/compiled/cookie/index.js [middleware] (ecmascript)");
    const previous = res.getHeader('Set-Cookie');
    res.setHeader(`Set-Cookie`, [
        ...typeof previous === 'string' ? [
            previous
        ] : Array.isArray(previous) ? previous : [],
        serialize(COOKIE_NAME_PRERENDER_BYPASS, '', {
            // To delete a cookie, set `expires` to a date in the past:
            // https://tools.ietf.org/html/rfc6265#section-4.1.1
            // `Max-Age: 0` is not valid, thus ignored, and the cookie is persisted.
            expires: new Date(0),
            httpOnly: true,
            sameSite: ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : 'lax',
            secure: ("TURBOPACK compile-time value", "development") !== 'development',
            path: '/',
            ...options.path !== undefined ? {
                path: options.path
            } : undefined
        }),
        serialize(COOKIE_NAME_PRERENDER_DATA, '', {
            // To delete a cookie, set `expires` to a date in the past:
            // https://tools.ietf.org/html/rfc6265#section-4.1.1
            // `Max-Age: 0` is not valid, thus ignored, and the cookie is persisted.
            expires: new Date(0),
            httpOnly: true,
            sameSite: ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : 'lax',
            secure: ("TURBOPACK compile-time value", "development") !== 'development',
            path: '/',
            ...options.path !== undefined ? {
                path: options.path
            } : undefined
        })
    ]);
    Object.defineProperty(res, SYMBOL_CLEARED_COOKIES, {
        value: true,
        enumerable: false
    });
    return res;
}
class ApiError extends Error {
    constructor(statusCode, message){
        super(message);
        this.statusCode = statusCode;
    }
}
function sendError(res, statusCode, message) {
    res.statusCode = statusCode;
    res.statusMessage = message;
    res.end(message);
}
function setLazyProp({ req }, prop, getter) {
    const opts = {
        configurable: true,
        enumerable: true
    };
    const optsReset = {
        ...opts,
        writable: true
    };
    Object.defineProperty(req, prop, {
        ...opts,
        get: ()=>{
            const value = getter();
            // we set the property on the object to avoid recalculating it
            Object.defineProperty(req, prop, {
                ...optsReset,
                value
            });
            return value;
        },
        set: (value)=>{
            Object.defineProperty(req, prop, {
                ...optsReset,
                value
            });
        }
    });
} //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/next/dist/esm/server/async-storage/draft-mode-provider.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "DraftModeProvider": (()=>DraftModeProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/api-utils/index.js [middleware] (ecmascript)");
;
class DraftModeProvider {
    constructor(previewProps, req, cookies, mutableCookies){
        var _cookies_get;
        // The logic for draftMode() is very similar to tryGetPreviewData()
        // but Draft Mode does not have any data associated with it.
        const isOnDemandRevalidate = previewProps && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["checkIsOnDemandRevalidate"])(req, previewProps).isOnDemandRevalidate;
        const cookieValue = (_cookies_get = cookies.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["COOKIE_NAME_PRERENDER_BYPASS"])) == null ? void 0 : _cookies_get.value;
        this.isEnabled = Boolean(!isOnDemandRevalidate && cookieValue && previewProps && (cookieValue === previewProps.previewModeId || // In dev mode, the cookie can be actual hash value preview id but the preview props can still be `development-id`.
        ("TURBOPACK compile-time value", "development") !== 'production' && previewProps.previewModeId === 'development-id'));
        this._previewModeId = previewProps == null ? void 0 : previewProps.previewModeId;
        this._mutableCookies = mutableCookies;
    }
    enable() {
        if (!this._previewModeId) {
            throw new Error('Invariant: previewProps missing previewModeId this should never happen');
        }
        this._mutableCookies.set({
            name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["COOKIE_NAME_PRERENDER_BYPASS"],
            value: this._previewModeId,
            httpOnly: true,
            sameSite: ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : 'lax',
            secure: ("TURBOPACK compile-time value", "development") !== 'development',
            path: '/'
        });
    }
    disable() {
        // To delete a cookie, set `expires` to a date in the past:
        // https://tools.ietf.org/html/rfc6265#section-4.1.1
        // `Max-Age: 0` is not valid, thus ignored, and the cookie is persisted.
        this._mutableCookies.set({
            name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["COOKIE_NAME_PRERENDER_BYPASS"],
            value: '',
            httpOnly: true,
            sameSite: ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : 'lax',
            secure: ("TURBOPACK compile-time value", "development") !== 'development',
            path: '/',
            expires: new Date(0)
        });
    }
} //# sourceMappingURL=draft-mode-provider.js.map
}}),
"[project]/node_modules/next/dist/esm/server/async-storage/request-store.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createRequestStoreForAPI": (()=>createRequestStoreForAPI),
    "createRequestStoreForRender": (()=>createRequestStoreForRender),
    "synchronizeMutableCookies": (()=>synchronizeMutableCookies)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/client/components/app-router-headers.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/spec-extension/adapters/headers.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$request$2d$cookies$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/spec-extension/adapters/request-cookies.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$cookies$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/spec-extension/cookies.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$async$2d$storage$2f$draft$2d$mode$2d$provider$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/async-storage/draft-mode-provider.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/utils.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js [middleware] (ecmascript)");
;
;
;
;
;
;
function getHeaders(headers) {
    const cleaned = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["HeadersAdapter"].from(headers);
    for (const header of __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["FLIGHT_HEADERS"]){
        cleaned.delete(header.toLowerCase());
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["HeadersAdapter"].seal(cleaned);
}
function getMutableCookies(headers, onUpdateCookies) {
    const cookies = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["RequestCookies"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["HeadersAdapter"].from(headers));
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$request$2d$cookies$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["MutableRequestCookiesAdapter"].wrap(cookies, onUpdateCookies);
}
/**
 * If middleware set cookies in this request (indicated by `x-middleware-set-cookie`),
 * then merge those into the existing cookie object, so that when `cookies()` is accessed
 * it's able to read the newly set cookies.
 */ function mergeMiddlewareCookies(req, existingCookies) {
    if ('x-middleware-set-cookie' in req.headers && typeof req.headers['x-middleware-set-cookie'] === 'string') {
        const setCookieValue = req.headers['x-middleware-set-cookie'];
        const responseHeaders = new Headers();
        for (const cookie of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["splitCookiesString"])(setCookieValue)){
            responseHeaders.append('set-cookie', cookie);
        }
        const responseCookies = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ResponseCookies"](responseHeaders);
        // Transfer cookies from ResponseCookies to RequestCookies
        for (const cookie of responseCookies.getAll()){
            existingCookies.set(cookie);
        }
    }
}
function createRequestStoreForRender(req, res, url, implicitTags, onUpdateCookies, previewProps, isHmrRefresh, serverComponentsHmrCache, renderResumeDataCache) {
    return createRequestStoreImpl('render', req, res, url, implicitTags, onUpdateCookies, renderResumeDataCache, previewProps, isHmrRefresh, serverComponentsHmrCache);
}
function createRequestStoreForAPI(req, url, implicitTags, onUpdateCookies, previewProps) {
    return createRequestStoreImpl('action', req, undefined, url, implicitTags, onUpdateCookies, undefined, previewProps, false, undefined);
}
function createRequestStoreImpl(phase, req, res, url, implicitTags, onUpdateCookies, renderResumeDataCache, previewProps, isHmrRefresh, serverComponentsHmrCache) {
    function defaultOnUpdateCookies(cookies) {
        if (res) {
            res.setHeader('Set-Cookie', cookies);
        }
    }
    const cache = {};
    return {
        type: 'request',
        phase,
        implicitTags: implicitTags ?? [],
        // Rather than just using the whole `url` here, we pull the parts we want
        // to ensure we don't use parts of the URL that we shouldn't. This also
        // lets us avoid requiring an empty string for `search` in the type.
        url: {
            pathname: url.pathname,
            search: url.search ?? ''
        },
        get headers () {
            if (!cache.headers) {
                // Seal the headers object that'll freeze out any methods that could
                // mutate the underlying data.
                cache.headers = getHeaders(req.headers);
            }
            return cache.headers;
        },
        get cookies () {
            if (!cache.cookies) {
                // if middleware is setting cookie(s), then include those in
                // the initial cached cookies so they can be read in render
                const requestCookies = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["RequestCookies"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["HeadersAdapter"].from(req.headers));
                mergeMiddlewareCookies(req, requestCookies);
                // Seal the cookies object that'll freeze out any methods that could
                // mutate the underlying data.
                cache.cookies = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$request$2d$cookies$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["RequestCookiesAdapter"].seal(requestCookies);
            }
            return cache.cookies;
        },
        set cookies (value){
            cache.cookies = value;
        },
        get mutableCookies () {
            if (!cache.mutableCookies) {
                const mutableCookies = getMutableCookies(req.headers, onUpdateCookies || (res ? defaultOnUpdateCookies : undefined));
                mergeMiddlewareCookies(req, mutableCookies);
                cache.mutableCookies = mutableCookies;
            }
            return cache.mutableCookies;
        },
        get userspaceMutableCookies () {
            if (!cache.userspaceMutableCookies) {
                const userspaceMutableCookies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$request$2d$cookies$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["wrapWithMutableAccessCheck"])(this.mutableCookies);
                cache.userspaceMutableCookies = userspaceMutableCookies;
            }
            return cache.userspaceMutableCookies;
        },
        get draftMode () {
            if (!cache.draftMode) {
                cache.draftMode = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$async$2d$storage$2f$draft$2d$mode$2d$provider$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["DraftModeProvider"](previewProps, req, this.cookies, this.mutableCookies);
            }
            return cache.draftMode;
        },
        renderResumeDataCache: renderResumeDataCache ?? null,
        isHmrRefresh,
        serverComponentsHmrCache: serverComponentsHmrCache || globalThis.__serverComponentsHmrCache
    };
}
function synchronizeMutableCookies(store) {
    // TODO: does this need to update headers as well?
    store.cookies = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$request$2d$cookies$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["RequestCookiesAdapter"].seal((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$request$2d$cookies$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["responseCookiesToRequestCookies"])(store.mutableCookies));
} //# sourceMappingURL=request-store.js.map
}}),
"[project]/node_modules/next/dist/compiled/p-queue/index.js [middleware] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
(()=>{
    "use strict";
    var e = {
        993: (e)=>{
            var t = Object.prototype.hasOwnProperty, n = "~";
            function Events() {}
            if (Object.create) {
                Events.prototype = Object.create(null);
                if (!(new Events).__proto__) n = false;
            }
            function EE(e, t, n) {
                this.fn = e;
                this.context = t;
                this.once = n || false;
            }
            function addListener(e, t, r, i, s) {
                if (typeof r !== "function") {
                    throw new TypeError("The listener must be a function");
                }
                var o = new EE(r, i || e, s), u = n ? n + t : t;
                if (!e._events[u]) e._events[u] = o, e._eventsCount++;
                else if (!e._events[u].fn) e._events[u].push(o);
                else e._events[u] = [
                    e._events[u],
                    o
                ];
                return e;
            }
            function clearEvent(e, t) {
                if (--e._eventsCount === 0) e._events = new Events;
                else delete e._events[t];
            }
            function EventEmitter() {
                this._events = new Events;
                this._eventsCount = 0;
            }
            EventEmitter.prototype.eventNames = function eventNames() {
                var e = [], r, i;
                if (this._eventsCount === 0) return e;
                for(i in r = this._events){
                    if (t.call(r, i)) e.push(n ? i.slice(1) : i);
                }
                if (Object.getOwnPropertySymbols) {
                    return e.concat(Object.getOwnPropertySymbols(r));
                }
                return e;
            };
            EventEmitter.prototype.listeners = function listeners(e) {
                var t = n ? n + e : e, r = this._events[t];
                if (!r) return [];
                if (r.fn) return [
                    r.fn
                ];
                for(var i = 0, s = r.length, o = new Array(s); i < s; i++){
                    o[i] = r[i].fn;
                }
                return o;
            };
            EventEmitter.prototype.listenerCount = function listenerCount(e) {
                var t = n ? n + e : e, r = this._events[t];
                if (!r) return 0;
                if (r.fn) return 1;
                return r.length;
            };
            EventEmitter.prototype.emit = function emit(e, t, r, i, s, o) {
                var u = n ? n + e : e;
                if (!this._events[u]) return false;
                var a = this._events[u], l = arguments.length, c, h;
                if (a.fn) {
                    if (a.once) this.removeListener(e, a.fn, undefined, true);
                    switch(l){
                        case 1:
                            return a.fn.call(a.context), true;
                        case 2:
                            return a.fn.call(a.context, t), true;
                        case 3:
                            return a.fn.call(a.context, t, r), true;
                        case 4:
                            return a.fn.call(a.context, t, r, i), true;
                        case 5:
                            return a.fn.call(a.context, t, r, i, s), true;
                        case 6:
                            return a.fn.call(a.context, t, r, i, s, o), true;
                    }
                    for(h = 1, c = new Array(l - 1); h < l; h++){
                        c[h - 1] = arguments[h];
                    }
                    a.fn.apply(a.context, c);
                } else {
                    var _ = a.length, f;
                    for(h = 0; h < _; h++){
                        if (a[h].once) this.removeListener(e, a[h].fn, undefined, true);
                        switch(l){
                            case 1:
                                a[h].fn.call(a[h].context);
                                break;
                            case 2:
                                a[h].fn.call(a[h].context, t);
                                break;
                            case 3:
                                a[h].fn.call(a[h].context, t, r);
                                break;
                            case 4:
                                a[h].fn.call(a[h].context, t, r, i);
                                break;
                            default:
                                if (!c) for(f = 1, c = new Array(l - 1); f < l; f++){
                                    c[f - 1] = arguments[f];
                                }
                                a[h].fn.apply(a[h].context, c);
                        }
                    }
                }
                return true;
            };
            EventEmitter.prototype.on = function on(e, t, n) {
                return addListener(this, e, t, n, false);
            };
            EventEmitter.prototype.once = function once(e, t, n) {
                return addListener(this, e, t, n, true);
            };
            EventEmitter.prototype.removeListener = function removeListener(e, t, r, i) {
                var s = n ? n + e : e;
                if (!this._events[s]) return this;
                if (!t) {
                    clearEvent(this, s);
                    return this;
                }
                var o = this._events[s];
                if (o.fn) {
                    if (o.fn === t && (!i || o.once) && (!r || o.context === r)) {
                        clearEvent(this, s);
                    }
                } else {
                    for(var u = 0, a = [], l = o.length; u < l; u++){
                        if (o[u].fn !== t || i && !o[u].once || r && o[u].context !== r) {
                            a.push(o[u]);
                        }
                    }
                    if (a.length) this._events[s] = a.length === 1 ? a[0] : a;
                    else clearEvent(this, s);
                }
                return this;
            };
            EventEmitter.prototype.removeAllListeners = function removeAllListeners(e) {
                var t;
                if (e) {
                    t = n ? n + e : e;
                    if (this._events[t]) clearEvent(this, t);
                } else {
                    this._events = new Events;
                    this._eventsCount = 0;
                }
                return this;
            };
            EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
            EventEmitter.prototype.addListener = EventEmitter.prototype.on;
            EventEmitter.prefixed = n;
            EventEmitter.EventEmitter = EventEmitter;
            if ("TURBOPACK compile-time truthy", 1) {
                e.exports = EventEmitter;
            }
        },
        213: (e)=>{
            e.exports = (e, t)=>{
                t = t || (()=>{});
                return e.then((e)=>new Promise((e)=>{
                        e(t());
                    }).then(()=>e), (e)=>new Promise((e)=>{
                        e(t());
                    }).then(()=>{
                        throw e;
                    }));
            };
        },
        574: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            function lowerBound(e, t, n) {
                let r = 0;
                let i = e.length;
                while(i > 0){
                    const s = i / 2 | 0;
                    let o = r + s;
                    if (n(e[o], t) <= 0) {
                        r = ++o;
                        i -= s + 1;
                    } else {
                        i = s;
                    }
                }
                return r;
            }
            t["default"] = lowerBound;
        },
        821: (e, t, n)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            const r = n(574);
            class PriorityQueue {
                constructor(){
                    this._queue = [];
                }
                enqueue(e, t) {
                    t = Object.assign({
                        priority: 0
                    }, t);
                    const n = {
                        priority: t.priority,
                        run: e
                    };
                    if (this.size && this._queue[this.size - 1].priority >= t.priority) {
                        this._queue.push(n);
                        return;
                    }
                    const i = r.default(this._queue, n, (e, t)=>t.priority - e.priority);
                    this._queue.splice(i, 0, n);
                }
                dequeue() {
                    const e = this._queue.shift();
                    return e === null || e === void 0 ? void 0 : e.run;
                }
                filter(e) {
                    return this._queue.filter((t)=>t.priority === e.priority).map((e)=>e.run);
                }
                get size() {
                    return this._queue.length;
                }
            }
            t["default"] = PriorityQueue;
        },
        816: (e, t, n)=>{
            const r = n(213);
            class TimeoutError extends Error {
                constructor(e){
                    super(e);
                    this.name = "TimeoutError";
                }
            }
            const pTimeout = (e, t, n)=>new Promise((i, s)=>{
                    if (typeof t !== "number" || t < 0) {
                        throw new TypeError("Expected `milliseconds` to be a positive number");
                    }
                    if (t === Infinity) {
                        i(e);
                        return;
                    }
                    const o = setTimeout(()=>{
                        if (typeof n === "function") {
                            try {
                                i(n());
                            } catch (e) {
                                s(e);
                            }
                            return;
                        }
                        const r = typeof n === "string" ? n : `Promise timed out after ${t} milliseconds`;
                        const o = n instanceof Error ? n : new TimeoutError(r);
                        if (typeof e.cancel === "function") {
                            e.cancel();
                        }
                        s(o);
                    }, t);
                    r(e.then(i, s), ()=>{
                        clearTimeout(o);
                    });
                });
            e.exports = pTimeout;
            e.exports["default"] = pTimeout;
            e.exports.TimeoutError = TimeoutError;
        }
    };
    var t = {};
    function __nccwpck_require__(n) {
        var r = t[n];
        if (r !== undefined) {
            return r.exports;
        }
        var i = t[n] = {
            exports: {}
        };
        var s = true;
        try {
            e[n](i, i.exports, __nccwpck_require__);
            s = false;
        } finally{
            if (s) delete t[n];
        }
        return i.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var n = {};
    (()=>{
        var e = n;
        Object.defineProperty(e, "__esModule", {
            value: true
        });
        const t = __nccwpck_require__(993);
        const r = __nccwpck_require__(816);
        const i = __nccwpck_require__(821);
        const empty = ()=>{};
        const s = new r.TimeoutError;
        class PQueue extends t {
            constructor(e){
                var t, n, r, s;
                super();
                this._intervalCount = 0;
                this._intervalEnd = 0;
                this._pendingCount = 0;
                this._resolveEmpty = empty;
                this._resolveIdle = empty;
                e = Object.assign({
                    carryoverConcurrencyCount: false,
                    intervalCap: Infinity,
                    interval: 0,
                    concurrency: Infinity,
                    autoStart: true,
                    queueClass: i.default
                }, e);
                if (!(typeof e.intervalCap === "number" && e.intervalCap >= 1)) {
                    throw new TypeError(`Expected \`intervalCap\` to be a number from 1 and up, got \`${(n = (t = e.intervalCap) === null || t === void 0 ? void 0 : t.toString()) !== null && n !== void 0 ? n : ""}\` (${typeof e.intervalCap})`);
                }
                if (e.interval === undefined || !(Number.isFinite(e.interval) && e.interval >= 0)) {
                    throw new TypeError(`Expected \`interval\` to be a finite number >= 0, got \`${(s = (r = e.interval) === null || r === void 0 ? void 0 : r.toString()) !== null && s !== void 0 ? s : ""}\` (${typeof e.interval})`);
                }
                this._carryoverConcurrencyCount = e.carryoverConcurrencyCount;
                this._isIntervalIgnored = e.intervalCap === Infinity || e.interval === 0;
                this._intervalCap = e.intervalCap;
                this._interval = e.interval;
                this._queue = new e.queueClass;
                this._queueClass = e.queueClass;
                this.concurrency = e.concurrency;
                this._timeout = e.timeout;
                this._throwOnTimeout = e.throwOnTimeout === true;
                this._isPaused = e.autoStart === false;
            }
            get _doesIntervalAllowAnother() {
                return this._isIntervalIgnored || this._intervalCount < this._intervalCap;
            }
            get _doesConcurrentAllowAnother() {
                return this._pendingCount < this._concurrency;
            }
            _next() {
                this._pendingCount--;
                this._tryToStartAnother();
                this.emit("next");
            }
            _resolvePromises() {
                this._resolveEmpty();
                this._resolveEmpty = empty;
                if (this._pendingCount === 0) {
                    this._resolveIdle();
                    this._resolveIdle = empty;
                    this.emit("idle");
                }
            }
            _onResumeInterval() {
                this._onInterval();
                this._initializeIntervalIfNeeded();
                this._timeoutId = undefined;
            }
            _isIntervalPaused() {
                const e = Date.now();
                if (this._intervalId === undefined) {
                    const t = this._intervalEnd - e;
                    if (t < 0) {
                        this._intervalCount = this._carryoverConcurrencyCount ? this._pendingCount : 0;
                    } else {
                        if (this._timeoutId === undefined) {
                            this._timeoutId = setTimeout(()=>{
                                this._onResumeInterval();
                            }, t);
                        }
                        return true;
                    }
                }
                return false;
            }
            _tryToStartAnother() {
                if (this._queue.size === 0) {
                    if (this._intervalId) {
                        clearInterval(this._intervalId);
                    }
                    this._intervalId = undefined;
                    this._resolvePromises();
                    return false;
                }
                if (!this._isPaused) {
                    const e = !this._isIntervalPaused();
                    if (this._doesIntervalAllowAnother && this._doesConcurrentAllowAnother) {
                        const t = this._queue.dequeue();
                        if (!t) {
                            return false;
                        }
                        this.emit("active");
                        t();
                        if (e) {
                            this._initializeIntervalIfNeeded();
                        }
                        return true;
                    }
                }
                return false;
            }
            _initializeIntervalIfNeeded() {
                if (this._isIntervalIgnored || this._intervalId !== undefined) {
                    return;
                }
                this._intervalId = setInterval(()=>{
                    this._onInterval();
                }, this._interval);
                this._intervalEnd = Date.now() + this._interval;
            }
            _onInterval() {
                if (this._intervalCount === 0 && this._pendingCount === 0 && this._intervalId) {
                    clearInterval(this._intervalId);
                    this._intervalId = undefined;
                }
                this._intervalCount = this._carryoverConcurrencyCount ? this._pendingCount : 0;
                this._processQueue();
            }
            _processQueue() {
                while(this._tryToStartAnother()){}
            }
            get concurrency() {
                return this._concurrency;
            }
            set concurrency(e) {
                if (!(typeof e === "number" && e >= 1)) {
                    throw new TypeError(`Expected \`concurrency\` to be a number from 1 and up, got \`${e}\` (${typeof e})`);
                }
                this._concurrency = e;
                this._processQueue();
            }
            async add(e, t = {}) {
                return new Promise((n, i)=>{
                    const run = async ()=>{
                        this._pendingCount++;
                        this._intervalCount++;
                        try {
                            const o = this._timeout === undefined && t.timeout === undefined ? e() : r.default(Promise.resolve(e()), t.timeout === undefined ? this._timeout : t.timeout, ()=>{
                                if (t.throwOnTimeout === undefined ? this._throwOnTimeout : t.throwOnTimeout) {
                                    i(s);
                                }
                                return undefined;
                            });
                            n(await o);
                        } catch (e) {
                            i(e);
                        }
                        this._next();
                    };
                    this._queue.enqueue(run, t);
                    this._tryToStartAnother();
                    this.emit("add");
                });
            }
            async addAll(e, t) {
                return Promise.all(e.map(async (e)=>this.add(e, t)));
            }
            start() {
                if (!this._isPaused) {
                    return this;
                }
                this._isPaused = false;
                this._processQueue();
                return this;
            }
            pause() {
                this._isPaused = true;
            }
            clear() {
                this._queue = new this._queueClass;
            }
            async onEmpty() {
                if (this._queue.size === 0) {
                    return;
                }
                return new Promise((e)=>{
                    const t = this._resolveEmpty;
                    this._resolveEmpty = ()=>{
                        t();
                        e();
                    };
                });
            }
            async onIdle() {
                if (this._pendingCount === 0 && this._queue.size === 0) {
                    return;
                }
                return new Promise((e)=>{
                    const t = this._resolveIdle;
                    this._resolveIdle = ()=>{
                        t();
                        e();
                    };
                });
            }
            get size() {
                return this._queue.size;
            }
            sizeBy(e) {
                return this._queue.filter(e).length;
            }
            get pending() {
                return this._pendingCount;
            }
            get isPaused() {
                return this._isPaused;
            }
            get timeout() {
                return this._timeout;
            }
            set timeout(e) {
                this._timeout = e;
            }
        }
        e["default"] = PQueue;
    })();
    module.exports = n;
})();
}}),
"[project]/node_modules/next/dist/esm/shared/lib/invariant-error.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "InvariantError": (()=>InvariantError)
});
class InvariantError extends Error {
    constructor(message, options){
        super("Invariant: " + (message.endsWith('.') ? message : message + '.') + " This is a bug in Next.js.", options);
        this.name = 'InvariantError';
    }
} //# sourceMappingURL=invariant-error.js.map
}}),
"[project]/node_modules/next/dist/esm/server/after/revalidation-utils.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/** Run a callback, and execute any *new* revalidations added during its runtime. */ __turbopack_esm__({
    "withExecuteRevalidates": (()=>withExecuteRevalidates)
});
async function withExecuteRevalidates(store, callback) {
    if (!store) {
        return callback();
    }
    // If we executed any revalidates during the request, then we don't want to execute them again.
    // save the state so we can check if anything changed after we're done running callbacks.
    const savedRevalidationState = cloneRevalidationState(store);
    try {
        return await callback();
    } finally{
        // Check if we have any new revalidates, and if so, wait until they are all resolved.
        const newRevalidates = diffRevalidationState(savedRevalidationState, cloneRevalidationState(store));
        await executeRevalidates(store, newRevalidates);
    }
}
function cloneRevalidationState(store) {
    return {
        revalidatedTags: store.revalidatedTags ? [
            ...store.revalidatedTags
        ] : [],
        pendingRevalidates: {
            ...store.pendingRevalidates
        },
        pendingRevalidateWrites: store.pendingRevalidateWrites ? [
            ...store.pendingRevalidateWrites
        ] : []
    };
}
function diffRevalidationState(prev, curr) {
    const prevTags = new Set(prev.revalidatedTags);
    const prevRevalidateWrites = new Set(prev.pendingRevalidateWrites);
    return {
        revalidatedTags: curr.revalidatedTags.filter((tag)=>!prevTags.has(tag)),
        pendingRevalidates: Object.fromEntries(Object.entries(curr.pendingRevalidates).filter(([key])=>!(key in prev.pendingRevalidates))),
        pendingRevalidateWrites: curr.pendingRevalidateWrites.filter((promise)=>!prevRevalidateWrites.has(promise))
    };
}
async function executeRevalidates(workStore, { revalidatedTags, pendingRevalidates, pendingRevalidateWrites }) {
    var _workStore_incrementalCache;
    return Promise.all([
        (_workStore_incrementalCache = workStore.incrementalCache) == null ? void 0 : _workStore_incrementalCache.revalidateTag(revalidatedTags),
        ...Object.values(pendingRevalidates),
        ...pendingRevalidateWrites
    ]);
} //# sourceMappingURL=revalidation-utils.js.map
}}),
"[project]/node_modules/next/dist/esm/server/app-render/after-task-async-storage-instance.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "afterTaskAsyncStorageInstance": (()=>afterTaskAsyncStorageInstance)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$async$2d$local$2d$storage$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/app-render/async-local-storage.js [middleware] (ecmascript)");
;
const afterTaskAsyncStorageInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$async$2d$local$2d$storage$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createAsyncLocalStorage"])(); //# sourceMappingURL=after-task-async-storage-instance.js.map
}}),
"[project]/node_modules/next/dist/esm/server/app-render/after-task-async-storage.external.js [middleware] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// Share the instance module in the next-shared layer
__turbopack_esm__({});
;
;
 //# sourceMappingURL=after-task-async-storage.external.js.map
}}),
"[project]/node_modules/next/dist/esm/server/app-render/after-task-async-storage.external.js [middleware] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$after$2d$task$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/app-render/after-task-async-storage-instance.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$after$2d$task$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/app-render/after-task-async-storage.external.js [middleware] (ecmascript) <locals>");
}}),
"[project]/node_modules/next/dist/esm/server/app-render/work-unit-async-storage-instance.js [middleware] (ecmascript) <export workUnitAsyncStorageInstance as workUnitAsyncStorage>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "workUnitAsyncStorage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["workUnitAsyncStorageInstance"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/app-render/work-unit-async-storage-instance.js [middleware] (ecmascript)");
}}),
"[project]/node_modules/next/dist/esm/server/app-render/after-task-async-storage-instance.js [middleware] (ecmascript) <export afterTaskAsyncStorageInstance as afterTaskAsyncStorage>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "afterTaskAsyncStorage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$after$2d$task$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["afterTaskAsyncStorageInstance"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$after$2d$task$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/app-render/after-task-async-storage-instance.js [middleware] (ecmascript)");
}}),
"[project]/node_modules/next/dist/esm/server/after/after-context.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AfterContext": (()=>AfterContext)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$p$2d$queue$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/p-queue/index.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/shared/lib/invariant-error.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$is$2d$thenable$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/shared/lib/is-thenable.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/app-render/work-async-storage.external.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$after$2f$revalidation$2d$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/after/revalidation-utils.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$async$2d$local$2d$storage$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/app-render/async-local-storage.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/app-render/work-unit-async-storage.external.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$after$2d$task$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/app-render/after-task-async-storage.external.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$export__workUnitAsyncStorageInstance__as__workUnitAsyncStorage$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/app-render/work-unit-async-storage-instance.js [middleware] (ecmascript) <export workUnitAsyncStorageInstance as workUnitAsyncStorage>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$after$2d$task$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$export__afterTaskAsyncStorageInstance__as__afterTaskAsyncStorage$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/app-render/after-task-async-storage-instance.js [middleware] (ecmascript) <export afterTaskAsyncStorageInstance as afterTaskAsyncStorage>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$export__workAsyncStorageInstance__as__workAsyncStorage$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/app-render/work-async-storage-instance.js [middleware] (ecmascript) <export workAsyncStorageInstance as workAsyncStorage>");
;
;
;
;
;
;
;
;
class AfterContext {
    constructor({ waitUntil, onClose, onTaskError }){
        this.workUnitStores = new Set();
        this.waitUntil = waitUntil;
        this.onClose = onClose;
        this.onTaskError = onTaskError;
        this.callbackQueue = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$p$2d$queue$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"]();
        this.callbackQueue.pause();
    }
    after(task) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$is$2d$thenable$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["isThenable"])(task)) {
            if (!this.waitUntil) {
                errorWaitUntilNotAvailable();
            }
            this.waitUntil(task.catch((error)=>this.reportTaskError('promise', error)));
        } else if (typeof task === 'function') {
            // TODO(after): implement tracing
            this.addCallback(task);
        } else {
            throw new Error('`after()`: Argument must be a promise or a function');
        }
    }
    addCallback(callback) {
        // if something is wrong, throw synchronously, bubbling up to the `after` callsite.
        if (!this.waitUntil) {
            errorWaitUntilNotAvailable();
        }
        const workUnitStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$export__workUnitAsyncStorageInstance__as__workUnitAsyncStorage$3e$__["workUnitAsyncStorage"].getStore();
        if (workUnitStore) {
            this.workUnitStores.add(workUnitStore);
        }
        const afterTaskStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$after$2d$task$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$export__afterTaskAsyncStorageInstance__as__afterTaskAsyncStorage$3e$__["afterTaskAsyncStorage"].getStore();
        // This is used for checking if request APIs can be called inside `after`.
        // Note that we need to check the phase in which the *topmost* `after` was called (which should be "action"),
        // not the current phase (which might be "after" if we're in a nested after).
        // Otherwise, we might allow `after(() => headers())`, but not `after(() => after(() => headers()))`.
        const rootTaskSpawnPhase = afterTaskStore ? afterTaskStore.rootTaskSpawnPhase // nested after
         : workUnitStore == null ? void 0 : workUnitStore.phase // topmost after
        ;
        // this should only happen once.
        if (!this.runCallbacksOnClosePromise) {
            this.runCallbacksOnClosePromise = this.runCallbacksOnClose();
            this.waitUntil(this.runCallbacksOnClosePromise);
        }
        // Bind the callback to the current execution context (i.e. preserve all currently available ALS-es).
        // We do this because we want all of these to be equivalent in every regard except timing:
        //   after(() => x())
        //   after(x())
        //   await x()
        const wrappedCallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$async$2d$local$2d$storage$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["bindSnapshot"])(async ()=>{
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$after$2d$task$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$export__afterTaskAsyncStorageInstance__as__afterTaskAsyncStorage$3e$__["afterTaskAsyncStorage"].run({
                    rootTaskSpawnPhase
                }, ()=>callback());
            } catch (error) {
                this.reportTaskError('function', error);
            }
        });
        this.callbackQueue.add(wrappedCallback);
    }
    async runCallbacksOnClose() {
        await new Promise((resolve)=>this.onClose(resolve));
        return this.runCallbacks();
    }
    async runCallbacks() {
        if (this.callbackQueue.size === 0) return;
        for (const workUnitStore of this.workUnitStores){
            workUnitStore.phase = 'after';
        }
        const workStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$export__workAsyncStorageInstance__as__workAsyncStorage$3e$__["workAsyncStorage"].getStore();
        if (!workStore) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["InvariantError"]('Missing workStore in AfterContext.runCallbacks');
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$after$2f$revalidation$2d$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["withExecuteRevalidates"])(workStore, ()=>{
            this.callbackQueue.start();
            return this.callbackQueue.onIdle();
        });
    }
    reportTaskError(taskKind, error) {
        // TODO(after): this is fine for now, but will need better intergration with our error reporting.
        // TODO(after): should we log this if we have a onTaskError callback?
        console.error(taskKind === 'promise' ? `A promise passed to \`after()\` rejected:` : `An error occurred in a function passed to \`after()\`:`, error);
        if (this.onTaskError) {
            // this is very defensive, but we really don't want anything to blow up in an error handler
            try {
                this.onTaskError == null ? void 0 : this.onTaskError.call(this, error);
            } catch (handlerError) {
                console.error(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["InvariantError"]('`onTaskError` threw while handling an error thrown from an `after` task', {
                    cause: handlerError
                }));
            }
        }
    }
}
function errorWaitUntilNotAvailable() {
    throw new Error('`after()` will not work correctly, because `waitUntil` is not available in the current environment.');
} //# sourceMappingURL=after-context.js.map
}}),
"[project]/node_modules/next/dist/esm/server/async-storage/work-store.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createWorkStore": (()=>createWorkStore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$after$2f$after$2d$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/after/after-context.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [middleware] (ecmascript)");
;
;
function createWorkStore({ page, fallbackRouteParams, renderOpts, requestEndedState, isPrefetchRequest }) {
    /**
   * Rules of Static & Dynamic HTML:
   *
   *    1.) We must generate static HTML unless the caller explicitly opts
   *        in to dynamic HTML support.
   *
   *    2.) If dynamic HTML support is requested, we must honor that request
   *        or throw an error. It is the sole responsibility of the caller to
   *        ensure they aren't e.g. requesting dynamic HTML for an AMP page.
   *
   *    3.) If the request is in draft mode, we must generate dynamic HTML.
   *
   *    4.) If the request is a server action, we must generate dynamic HTML.
   *
   * These rules help ensure that other existing features like request caching,
   * coalescing, and ISR continue working as intended.
   */ const isStaticGeneration = !renderOpts.supportsDynamicResponse && !renderOpts.isDraftMode && !renderOpts.isServerAction;
    const store = {
        isStaticGeneration,
        page,
        fallbackRouteParams,
        route: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["normalizeAppPath"])(page),
        incrementalCache: // so that it can access the fs cache without mocks
        renderOpts.incrementalCache || globalThis.__incrementalCache,
        cacheLifeProfiles: renderOpts.cacheLifeProfiles,
        isRevalidate: renderOpts.isRevalidate,
        isPrerendering: renderOpts.nextExport,
        fetchCache: renderOpts.fetchCache,
        isOnDemandRevalidate: renderOpts.isOnDemandRevalidate,
        isDraftMode: renderOpts.isDraftMode,
        requestEndedState,
        isPrefetchRequest,
        buildId: renderOpts.buildId,
        reactLoadableManifest: (renderOpts == null ? void 0 : renderOpts.reactLoadableManifest) || {},
        assetPrefix: (renderOpts == null ? void 0 : renderOpts.assetPrefix) || '',
        afterContext: createAfterContext(renderOpts)
    };
    // TODO: remove this when we resolve accessing the store outside the execution context
    renderOpts.store = store;
    return store;
}
function createAfterContext(renderOpts) {
    const { waitUntil, onClose, onAfterTaskError } = renderOpts;
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$after$2f$after$2d$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["AfterContext"]({
        waitUntil,
        onClose,
        onTaskError: onAfterTaskError
    });
} //# sourceMappingURL=work-store.js.map
}}),
"[project]/node_modules/next/dist/esm/server/web/web-on-close.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/** Monitor when the consumer finishes reading the response body.
that's as close as we can get to `res.on('close')` using web APIs.
*/ __turbopack_esm__({
    "CloseController": (()=>CloseController),
    "trackBodyConsumed": (()=>trackBodyConsumed),
    "trackStreamConsumed": (()=>trackStreamConsumed)
});
function trackBodyConsumed(body, onEnd) {
    if (typeof body === 'string') {
        const generator = async function* generate() {
            const encoder = new TextEncoder();
            yield encoder.encode(body);
            onEnd();
        };
        // @ts-expect-error BodyInit typings doesn't seem to include AsyncIterables even though it's supported in practice
        return generator();
    } else {
        return trackStreamConsumed(body, onEnd);
    }
}
function trackStreamConsumed(stream, onEnd) {
    const closePassThrough = new TransformStream({
        flush: ()=>{
            return onEnd();
        }
    });
    return stream.pipeThrough(closePassThrough);
}
class CloseController {
    onClose(callback) {
        if (this.isClosed) {
            throw new Error('Cannot subscribe to a closed CloseController');
        }
        this.target.addEventListener('close', callback);
        this.listeners++;
    }
    dispatchClose() {
        if (this.isClosed) {
            throw new Error('Cannot close a CloseController multiple times');
        }
        if (this.listeners > 0) {
            this.target.dispatchEvent(new Event('close'));
        }
        this.isClosed = true;
    }
    constructor(){
        this.target = new EventTarget();
        this.listeners = 0;
        this.isClosed = false;
    }
} //# sourceMappingURL=web-on-close.js.map
}}),
"[project]/node_modules/next/dist/esm/server/web/get-edge-preview-props.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * In edge runtime, these props directly accessed from environment variables.
 *   - local: env vars will be injected through edge-runtime as runtime env vars
 *   - deployment: env vars will be replaced by edge build pipeline
 */ __turbopack_esm__({
    "getEdgePreviewProps": (()=>getEdgePreviewProps)
});
function getEdgePreviewProps() {
    return {
        previewModeId: ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : 'development-id',
        previewModeSigningKey: process.env.__NEXT_PREVIEW_MODE_SIGNING_KEY || '',
        previewModeEncryptionKey: process.env.__NEXT_PREVIEW_MODE_ENCRYPTION_KEY || ''
    };
} //# sourceMappingURL=get-edge-preview-props.js.map
}}),
"[project]/node_modules/next/dist/esm/server/after/builtin-request-context.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createLocalRequestContext": (()=>createLocalRequestContext),
    "getBuiltinRequestContext": (()=>getBuiltinRequestContext)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$async$2d$local$2d$storage$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/app-render/async-local-storage.js [middleware] (ecmascript)");
;
function getBuiltinRequestContext() {
    const _globalThis = globalThis;
    const ctx = _globalThis[NEXT_REQUEST_CONTEXT_SYMBOL];
    return ctx == null ? void 0 : ctx.get();
}
const NEXT_REQUEST_CONTEXT_SYMBOL = Symbol.for('@next/request-context');
function createLocalRequestContext() {
    const storage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$async$2d$local$2d$storage$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createAsyncLocalStorage"])();
    return {
        get: ()=>storage.getStore(),
        run: (value, callback)=>storage.run(value, callback)
    };
} //# sourceMappingURL=builtin-request-context.js.map
}}),
"[project]/node_modules/next/dist/experimental/testmode/context.js [middleware] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getTestReqInfo: null,
    withRequest: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getTestReqInfo: function() {
        return getTestReqInfo;
    },
    withRequest: function() {
        return withRequest;
    }
});
const _nodeasync_hooks = __turbopack_require__("[externals]/node:async_hooks [external] (node:async_hooks, cjs)");
const testStorage = new _nodeasync_hooks.AsyncLocalStorage();
function extractTestInfoFromRequest(req, reader) {
    const proxyPortHeader = reader.header(req, 'next-test-proxy-port');
    if (!proxyPortHeader) {
        return undefined;
    }
    const url = reader.url(req);
    const proxyPort = Number(proxyPortHeader);
    const testData = reader.header(req, 'next-test-data') || '';
    return {
        url,
        proxyPort,
        testData
    };
}
function withRequest(req, reader, fn) {
    const testReqInfo = extractTestInfoFromRequest(req, reader);
    if (!testReqInfo) {
        return fn();
    }
    return testStorage.run(testReqInfo, fn);
}
function getTestReqInfo(req, reader) {
    const testReqInfo = testStorage.getStore();
    if (testReqInfo) {
        return testReqInfo;
    }
    if (req && reader) {
        return extractTestInfoFromRequest(req, reader);
    }
    return undefined;
} //# sourceMappingURL=context.js.map
}}),
"[project]/node_modules/next/dist/experimental/testmode/fetch.js [middleware] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__ = __turbopack_import__("[externals]/node:buffer [external] (node:buffer, cjs)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    handleFetch: null,
    interceptFetch: null,
    reader: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    handleFetch: function() {
        return handleFetch;
    },
    interceptFetch: function() {
        return interceptFetch;
    },
    reader: function() {
        return reader;
    }
});
const _context = __turbopack_require__("[project]/node_modules/next/dist/experimental/testmode/context.js [middleware] (ecmascript)");
const reader = {
    url (req) {
        return req.url;
    },
    header (req, name) {
        return req.headers.get(name);
    }
};
function getTestStack() {
    let stack = (new Error().stack ?? '').split('\n');
    // Skip the first line and find first non-empty line.
    for(let i = 1; i < stack.length; i++){
        if (stack[i].length > 0) {
            stack = stack.slice(i);
            break;
        }
    }
    // Filter out franmework lines.
    stack = stack.filter((f)=>!f.includes('/next/dist/'));
    // At most 5 lines.
    stack = stack.slice(0, 5);
    // Cleanup some internal info and trim.
    stack = stack.map((s)=>s.replace('webpack-internal:///(rsc)/', '').trim());
    return stack.join('    ');
}
async function buildProxyRequest(testData, request) {
    const { url, method, headers, body, cache, credentials, integrity, mode, redirect, referrer, referrerPolicy } = request;
    return {
        testData,
        api: 'fetch',
        request: {
            url,
            method,
            headers: [
                ...Array.from(headers),
                [
                    'next-test-stack',
                    getTestStack()
                ]
            ],
            body: body ? __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].from(await request.arrayBuffer()).toString('base64') : null,
            cache,
            credentials,
            integrity,
            mode,
            redirect,
            referrer,
            referrerPolicy
        }
    };
}
function buildResponse(proxyResponse) {
    const { status, headers, body } = proxyResponse.response;
    return new Response(body ? __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].from(body, 'base64') : null, {
        status,
        headers: new Headers(headers)
    });
}
async function handleFetch(originalFetch, request) {
    const testInfo = (0, _context.getTestReqInfo)(request, reader);
    if (!testInfo) {
        // Passthrough non-test requests.
        return originalFetch(request);
    }
    const { testData, proxyPort } = testInfo;
    const proxyRequest = await buildProxyRequest(testData, request);
    const resp = await originalFetch(`http://localhost:${proxyPort}`, {
        method: 'POST',
        body: JSON.stringify(proxyRequest),
        next: {
            // @ts-ignore
            internal: true
        }
    });
    if (!resp.ok) {
        throw new Error(`Proxy request failed: ${resp.status}`);
    }
    const proxyResponse = await resp.json();
    const { api } = proxyResponse;
    switch(api){
        case 'continue':
            return originalFetch(request);
        case 'abort':
        case 'unhandled':
            throw new Error(`Proxy request aborted [${request.method} ${request.url}]`);
        default:
            break;
    }
    return buildResponse(proxyResponse);
}
function interceptFetch(originalFetch) {
    global.fetch = function testFetch(input, init) {
        var _init_next;
        // Passthrough internal requests.
        // @ts-ignore
        if (init == null ? void 0 : (_init_next = init.next) == null ? void 0 : _init_next.internal) {
            return originalFetch(input, init);
        }
        return handleFetch(originalFetch, new Request(input, init));
    };
    return ()=>{
        global.fetch = originalFetch;
    };
} //# sourceMappingURL=fetch.js.map
}}),
"[project]/node_modules/next/dist/experimental/testmode/server-edge.js [middleware] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    interceptTestApis: null,
    wrapRequestHandler: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    interceptTestApis: function() {
        return interceptTestApis;
    },
    wrapRequestHandler: function() {
        return wrapRequestHandler;
    }
});
const _context = __turbopack_require__("[project]/node_modules/next/dist/experimental/testmode/context.js [middleware] (ecmascript)");
const _fetch = __turbopack_require__("[project]/node_modules/next/dist/experimental/testmode/fetch.js [middleware] (ecmascript)");
function interceptTestApis() {
    return (0, _fetch.interceptFetch)(global.fetch);
}
function wrapRequestHandler(handler) {
    return (req, fn)=>(0, _context.withRequest)(req, _fetch.reader, ()=>handler(req, fn));
} //# sourceMappingURL=server-edge.js.map
}}),
"[project]/node_modules/next/dist/esm/server/web/adapter.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "NextRequestHint": (()=>NextRequestHint),
    "adapter": (()=>adapter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/error.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/utils.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$fetch$2d$event$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/spec-extension/fetch-event.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$request$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/spec-extension/request.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$relativize$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/shared/lib/router/utils/relativize-url.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$next$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/next-url.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$internal$2d$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/internal-utils.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/client/components/app-router-headers.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$globals$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/globals.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$async$2d$storage$2f$request$2d$store$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/async-storage/request-store.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/app-render/work-unit-async-storage.external.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$async$2d$storage$2f$work$2d$store$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/async-storage/work-store.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/app-render/work-async-storage.external.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/lib/trace/tracer.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/lib/trace/constants.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$web$2d$on$2d$close$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/web-on-close.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$get$2d$edge$2d$preview$2d$props$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/get-edge-preview-props.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$after$2f$builtin$2d$request$2d$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/after/builtin-request-context.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$export__workAsyncStorageInstance__as__workAsyncStorage$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/app-render/work-async-storage-instance.js [middleware] (ecmascript) <export workAsyncStorageInstance as workAsyncStorage>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$export__workUnitAsyncStorageInstance__as__workUnitAsyncStorage$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/app-render/work-unit-async-storage-instance.js [middleware] (ecmascript) <export workUnitAsyncStorageInstance as workUnitAsyncStorage>");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
class NextRequestHint extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$request$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextRequest"] {
    constructor(params){
        super(params.input, params.init);
        this.sourcePage = params.page;
    }
    get request() {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["PageSignatureError"]({
            page: this.sourcePage
        });
    }
    respondWith() {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["PageSignatureError"]({
            page: this.sourcePage
        });
    }
    waitUntil() {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["PageSignatureError"]({
            page: this.sourcePage
        });
    }
}
const headersGetter = {
    keys: (headers)=>Array.from(headers.keys()),
    get: (headers, key)=>headers.get(key) ?? undefined
};
let propagator = (request, fn)=>{
    const tracer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getTracer"])();
    return tracer.withPropagatedContext(request.headers, fn, headersGetter);
};
let testApisIntercepted = false;
function ensureTestApisIntercepted() {
    if (!testApisIntercepted) {
        testApisIntercepted = true;
        if (process.env.NEXT_PRIVATE_TEST_PROXY === 'true') {
            const { interceptTestApis, wrapRequestHandler } = __turbopack_require__("[project]/node_modules/next/dist/experimental/testmode/server-edge.js [middleware] (ecmascript)");
            interceptTestApis();
            propagator = wrapRequestHandler(propagator);
        }
    }
}
async function adapter(params) {
    var _getBuiltinRequestContext;
    ensureTestApisIntercepted();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$globals$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ensureInstrumentationRegistered"])();
    // TODO-APP: use explicit marker for this
    const isEdgeRendering = typeof self.__BUILD_MANIFEST !== 'undefined';
    params.request.url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["normalizeRscURL"])(params.request.url);
    const requestUrl = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$next$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextURL"](params.request.url, {
        headers: params.request.headers,
        nextConfig: params.request.nextConfig
    });
    // Iterator uses an index to keep track of the current iteration. Because of deleting and appending below we can't just use the iterator.
    // Instead we use the keys before iteration.
    const keys = [
        ...requestUrl.searchParams.keys()
    ];
    for (const key of keys){
        const value = requestUrl.searchParams.getAll(key);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["normalizeNextQueryParam"])(key, (normalizedKey)=>{
            requestUrl.searchParams.delete(normalizedKey);
            for (const val of value){
                requestUrl.searchParams.append(normalizedKey, val);
            }
            requestUrl.searchParams.delete(key);
        });
    }
    // Ensure users only see page requests, never data requests.
    const buildId = requestUrl.buildId;
    requestUrl.buildId = '';
    const isNextDataRequest = params.request.headers['x-nextjs-data'];
    if (isNextDataRequest && requestUrl.pathname === '/index') {
        requestUrl.pathname = '/';
    }
    const requestHeaders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["fromNodeOutgoingHttpHeaders"])(params.request.headers);
    const flightHeaders = new Map();
    // Headers should only be stripped for middleware
    if (!isEdgeRendering) {
        for (const header of __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["FLIGHT_HEADERS"]){
            const key = header.toLowerCase();
            const value = requestHeaders.get(key);
            if (value) {
                flightHeaders.set(key, value);
                requestHeaders.delete(key);
            }
        }
    }
    const normalizeUrl = process.env.__NEXT_NO_MIDDLEWARE_URL_NORMALIZE ? new URL(params.request.url) : requestUrl;
    const request = new NextRequestHint({
        page: params.page,
        // Strip internal query parameters off the request.
        input: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$internal$2d$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["stripInternalSearchParams"])(normalizeUrl, true).toString(),
        init: {
            body: params.request.body,
            headers: requestHeaders,
            method: params.request.method,
            nextConfig: params.request.nextConfig,
            signal: params.request.signal
        }
    });
    /**
   * This allows to identify the request as a data request. The user doesn't
   * need to know about this property neither use it. We add it for testing
   * purposes.
   */ if (isNextDataRequest) {
        Object.defineProperty(request, '__isData', {
            enumerable: false,
            value: true
        });
    }
    if (!globalThis.__incrementalCache && params.IncrementalCache) {
        ;
        globalThis.__incrementalCache = new params.IncrementalCache({
            appDir: true,
            fetchCache: true,
            minimalMode: ("TURBOPACK compile-time value", "development") !== 'development',
            fetchCacheKeyPrefix: ("TURBOPACK compile-time value", ""),
            dev: ("TURBOPACK compile-time value", "development") === 'development',
            requestHeaders: params.request.headers,
            requestProtocol: 'https',
            getPrerenderManifest: ()=>{
                return {
                    version: -1,
                    routes: {},
                    dynamicRoutes: {},
                    notFoundRoutes: [],
                    preview: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$get$2d$edge$2d$preview$2d$props$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getEdgePreviewProps"])()
                };
            }
        });
    }
    // if we're in an edge runtime sandbox, we should use the waitUntil
    // that we receive from the enclosing NextServer
    const outerWaitUntil = params.request.waitUntil ?? ((_getBuiltinRequestContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$after$2f$builtin$2d$request$2d$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getBuiltinRequestContext"])()) == null ? void 0 : _getBuiltinRequestContext.waitUntil);
    const event = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$fetch$2d$event$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextFetchEvent"]({
        request,
        page: params.page,
        context: outerWaitUntil ? {
            waitUntil: outerWaitUntil
        } : undefined
    });
    let response;
    let cookiesFromResponse;
    response = await propagator(request, ()=>{
        // we only care to make async storage available for middleware
        const isMiddleware = params.page === '/middleware' || params.page === '/src/middleware';
        if (isMiddleware) {
            // if we're in an edge function, we only get a subset of `nextConfig` (no `experimental`),
            // so we have to inject it via DefinePlugin.
            // in `next start` this will be passed normally (see `NextNodeServer.runMiddleware`).
            const waitUntil = event.waitUntil.bind(event);
            const closeController = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$web$2d$on$2d$close$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["CloseController"]();
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getTracer"])().trace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["MiddlewareSpan"].execute, {
                spanName: `middleware ${request.method} ${request.nextUrl.pathname}`,
                attributes: {
                    'http.target': request.nextUrl.pathname,
                    'http.method': request.method
                }
            }, async ()=>{
                try {
                    var _params_request_nextConfig_experimental, _params_request_nextConfig, _params_request_nextConfig_experimental1, _params_request_nextConfig1;
                    const onUpdateCookies = (cookies)=>{
                        cookiesFromResponse = cookies;
                    };
                    const previewProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$get$2d$edge$2d$preview$2d$props$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getEdgePreviewProps"])();
                    const requestStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$async$2d$storage$2f$request$2d$store$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createRequestStoreForAPI"])(request, request.nextUrl, undefined, onUpdateCookies, previewProps);
                    const workStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$async$2d$storage$2f$work$2d$store$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createWorkStore"])({
                        page: '/',
                        fallbackRouteParams: null,
                        renderOpts: {
                            cacheLifeProfiles: (_params_request_nextConfig = params.request.nextConfig) == null ? void 0 : (_params_request_nextConfig_experimental = _params_request_nextConfig.experimental) == null ? void 0 : _params_request_nextConfig_experimental.cacheLife,
                            experimental: {
                                isRoutePPREnabled: false,
                                dynamicIO: false,
                                authInterrupts: !!((_params_request_nextConfig1 = params.request.nextConfig) == null ? void 0 : (_params_request_nextConfig_experimental1 = _params_request_nextConfig1.experimental) == null ? void 0 : _params_request_nextConfig_experimental1.authInterrupts)
                            },
                            buildId: buildId ?? '',
                            supportsDynamicResponse: true,
                            waitUntil,
                            onClose: closeController.onClose.bind(closeController),
                            onAfterTaskError: undefined
                        },
                        requestEndedState: {
                            ended: false
                        },
                        isPrefetchRequest: request.headers.has(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NEXT_ROUTER_PREFETCH_HEADER"])
                    });
                    return await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$export__workAsyncStorageInstance__as__workAsyncStorage$3e$__["workAsyncStorage"].run(workStore, ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$export__workUnitAsyncStorageInstance__as__workUnitAsyncStorage$3e$__["workUnitAsyncStorage"].run(requestStore, params.handler, request, event));
                } finally{
                    // middleware cannot stream, so we can consider the response closed
                    // as soon as the handler returns.
                    // we can delay running it until a bit later --
                    // if it's needed, we'll have a `waitUntil` lock anyway.
                    setTimeout(()=>{
                        closeController.dispatchClose();
                    }, 0);
                }
            });
        }
        return params.handler(request, event);
    });
    // check if response is a Response object
    if (response && !(response instanceof Response)) {
        throw new TypeError('Expected an instance of Response to be returned');
    }
    if (response && cookiesFromResponse) {
        response.headers.set('set-cookie', cookiesFromResponse);
    }
    /**
   * For rewrites we must always include the locale in the final pathname
   * so we re-create the NextURL forcing it to include it when the it is
   * an internal rewrite. Also we make sure the outgoing rewrite URL is
   * a data URL if the request was a data request.
   */ const rewrite = response == null ? void 0 : response.headers.get('x-middleware-rewrite');
    if (response && rewrite && !isEdgeRendering) {
        const rewriteUrl = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$next$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextURL"](rewrite, {
            forceLocale: true,
            headers: params.request.headers,
            nextConfig: params.request.nextConfig
        });
        if (!process.env.__NEXT_NO_MIDDLEWARE_URL_NORMALIZE) {
            if (rewriteUrl.host === request.nextUrl.host) {
                rewriteUrl.buildId = buildId || rewriteUrl.buildId;
                response.headers.set('x-middleware-rewrite', String(rewriteUrl));
            }
        }
        /**
     * When the request is a data request we must show if there was a rewrite
     * with an internal header so the client knows which component to load
     * from the data request.
     */ const relativizedRewrite = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$relativize$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["relativizeURL"])(String(rewriteUrl), String(requestUrl));
        if (isNextDataRequest && // if the rewrite is external and external rewrite
        // resolving config is enabled don't add this header
        // so the upstream app can set it instead
        !(("TURBOPACK compile-time value", false) && relativizedRewrite.match(/http(s)?:\/\//))) {
            response.headers.set('x-nextjs-rewrite', relativizedRewrite);
        }
    }
    /**
   * For redirects we will not include the locale in case when it is the
   * default and we must also make sure the outgoing URL is a data one if
   * the incoming request was a data request.
   */ const redirect = response == null ? void 0 : response.headers.get('Location');
    if (response && redirect && !isEdgeRendering) {
        const redirectURL = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$next$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextURL"](redirect, {
            forceLocale: false,
            headers: params.request.headers,
            nextConfig: params.request.nextConfig
        });
        /**
     * Responses created from redirects have immutable headers so we have
     * to clone the response to be able to modify it.
     */ response = new Response(response.body, response);
        if (!process.env.__NEXT_NO_MIDDLEWARE_URL_NORMALIZE) {
            if (redirectURL.host === request.nextUrl.host) {
                redirectURL.buildId = buildId || redirectURL.buildId;
                response.headers.set('Location', String(redirectURL));
            }
        }
        /**
     * When the request is a data request we can't use the location header as
     * it may end up with CORS error. Instead we map to an internal header so
     * the client knows the destination.
     */ if (isNextDataRequest) {
            response.headers.delete('Location');
            response.headers.set('x-nextjs-redirect', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$relativize$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["relativizeURL"])(String(redirectURL), String(requestUrl)));
        }
    }
    const finalResponse = response ? response : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
    // Flight headers are not overridable / removable so they are applied at the end.
    const middlewareOverrideHeaders = finalResponse.headers.get('x-middleware-override-headers');
    const overwrittenHeaders = [];
    if (middlewareOverrideHeaders) {
        for (const [key, value] of flightHeaders){
            finalResponse.headers.set(`x-middleware-request-${key}`, value);
            overwrittenHeaders.push(key);
        }
        if (overwrittenHeaders.length > 0) {
            finalResponse.headers.set('x-middleware-override-headers', middlewareOverrideHeaders + ',' + overwrittenHeaders.join(','));
        }
    }
    return {
        response: finalResponse,
        waitUntil: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$fetch$2d$event$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getWaitUntilPromiseFromEvent"])(event) ?? Promise.resolve(),
        fetchMetrics: request.fetchMetrics
    };
} //# sourceMappingURL=adapter.js.map
}}),
"[project]/node_modules/next/dist/esm/server/web/spec-extension/image-response.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * @deprecated ImageResponse moved from "next/server" to "next/og" since Next.js 14, please import from "next/og" instead.
 * Migration with codemods: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#next-og-import
 */ __turbopack_esm__({
    "ImageResponse": (()=>ImageResponse)
});
function ImageResponse() {
    throw new Error('ImageResponse moved from "next/server" to "next/og" since Next.js 14, please import from "next/og" instead');
} //# sourceMappingURL=image-response.js.map
}}),
"[project]/node_modules/next/dist/compiled/ua-parser-js/ua-parser.js [middleware] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
(()=>{
    var i = {
        226: function(i, e) {
            (function(o, a) {
                "use strict";
                var r = "1.0.35", t = "", n = "?", s = "function", b = "undefined", w = "object", l = "string", d = "major", c = "model", u = "name", p = "type", m = "vendor", f = "version", h = "architecture", v = "console", g = "mobile", k = "tablet", x = "smarttv", _ = "wearable", y = "embedded", q = 350;
                var T = "Amazon", S = "Apple", z = "ASUS", N = "BlackBerry", A = "Browser", C = "Chrome", E = "Edge", O = "Firefox", U = "Google", j = "Huawei", P = "LG", R = "Microsoft", M = "Motorola", B = "Opera", V = "Samsung", D = "Sharp", I = "Sony", W = "Viera", F = "Xiaomi", G = "Zebra", H = "Facebook", L = "Chromium OS", Z = "Mac OS";
                var extend = function(i, e) {
                    var o = {};
                    for(var a in i){
                        if (e[a] && e[a].length % 2 === 0) {
                            o[a] = e[a].concat(i[a]);
                        } else {
                            o[a] = i[a];
                        }
                    }
                    return o;
                }, enumerize = function(i) {
                    var e = {};
                    for(var o = 0; o < i.length; o++){
                        e[i[o].toUpperCase()] = i[o];
                    }
                    return e;
                }, has = function(i, e) {
                    return typeof i === l ? lowerize(e).indexOf(lowerize(i)) !== -1 : false;
                }, lowerize = function(i) {
                    return i.toLowerCase();
                }, majorize = function(i) {
                    return typeof i === l ? i.replace(/[^\d\.]/g, t).split(".")[0] : a;
                }, trim = function(i, e) {
                    if (typeof i === l) {
                        i = i.replace(/^\s\s*/, t);
                        return typeof e === b ? i : i.substring(0, q);
                    }
                };
                var rgxMapper = function(i, e) {
                    var o = 0, r, t, n, b, l, d;
                    while(o < e.length && !l){
                        var c = e[o], u = e[o + 1];
                        r = t = 0;
                        while(r < c.length && !l){
                            if (!c[r]) {
                                break;
                            }
                            l = c[r++].exec(i);
                            if (!!l) {
                                for(n = 0; n < u.length; n++){
                                    d = l[++t];
                                    b = u[n];
                                    if (typeof b === w && b.length > 0) {
                                        if (b.length === 2) {
                                            if (typeof b[1] == s) {
                                                this[b[0]] = b[1].call(this, d);
                                            } else {
                                                this[b[0]] = b[1];
                                            }
                                        } else if (b.length === 3) {
                                            if (typeof b[1] === s && !(b[1].exec && b[1].test)) {
                                                this[b[0]] = d ? b[1].call(this, d, b[2]) : a;
                                            } else {
                                                this[b[0]] = d ? d.replace(b[1], b[2]) : a;
                                            }
                                        } else if (b.length === 4) {
                                            this[b[0]] = d ? b[3].call(this, d.replace(b[1], b[2])) : a;
                                        }
                                    } else {
                                        this[b] = d ? d : a;
                                    }
                                }
                            }
                        }
                        o += 2;
                    }
                }, strMapper = function(i, e) {
                    for(var o in e){
                        if (typeof e[o] === w && e[o].length > 0) {
                            for(var r = 0; r < e[o].length; r++){
                                if (has(e[o][r], i)) {
                                    return o === n ? a : o;
                                }
                            }
                        } else if (has(e[o], i)) {
                            return o === n ? a : o;
                        }
                    }
                    return i;
                };
                var $ = {
                    "1.0": "/8",
                    1.2: "/1",
                    1.3: "/3",
                    "2.0": "/412",
                    "2.0.2": "/416",
                    "2.0.3": "/417",
                    "2.0.4": "/419",
                    "?": "/"
                }, X = {
                    ME: "4.90",
                    "NT 3.11": "NT3.51",
                    "NT 4.0": "NT4.0",
                    2e3: "NT 5.0",
                    XP: [
                        "NT 5.1",
                        "NT 5.2"
                    ],
                    Vista: "NT 6.0",
                    7: "NT 6.1",
                    8: "NT 6.2",
                    8.1: "NT 6.3",
                    10: [
                        "NT 6.4",
                        "NT 10.0"
                    ],
                    RT: "ARM"
                };
                var K = {
                    browser: [
                        [
                            /\b(?:crmo|crios)\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "Chrome"
                            ]
                        ],
                        [
                            /edg(?:e|ios|a)?\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "Edge"
                            ]
                        ],
                        [
                            /(opera mini)\/([-\w\.]+)/i,
                            /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                            /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /opios[\/ ]+([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                B + " Mini"
                            ]
                        ],
                        [
                            /\bopr\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                B
                            ]
                        ],
                        [
                            /(kindle)\/([\w\.]+)/i,
                            /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
                            /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
                            /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
                            /(?:ms|\()(ie) ([\w\.]+)/i,
                            /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
                            /(heytap|ovi)browser\/([\d\.]+)/i,
                            /(weibo)__([\d\.]+)/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "UC" + A
                            ]
                        ],
                        [
                            /microm.+\bqbcore\/([\w\.]+)/i,
                            /\bqbcore\/([\w\.]+).+microm/i
                        ],
                        [
                            f,
                            [
                                u,
                                "WeChat(Win) Desktop"
                            ]
                        ],
                        [
                            /micromessenger\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "WeChat"
                            ]
                        ],
                        [
                            /konqueror\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "Konqueror"
                            ]
                        ],
                        [
                            /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i
                        ],
                        [
                            f,
                            [
                                u,
                                "IE"
                            ]
                        ],
                        [
                            /ya(?:search)?browser\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "Yandex"
                            ]
                        ],
                        [
                            /(avast|avg)\/([\w\.]+)/i
                        ],
                        [
                            [
                                u,
                                /(.+)/,
                                "$1 Secure " + A
                            ],
                            f
                        ],
                        [
                            /\bfocus\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                O + " Focus"
                            ]
                        ],
                        [
                            /\bopt\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                B + " Touch"
                            ]
                        ],
                        [
                            /coc_coc\w+\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "Coc Coc"
                            ]
                        ],
                        [
                            /dolfin\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "Dolphin"
                            ]
                        ],
                        [
                            /coast\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                B + " Coast"
                            ]
                        ],
                        [
                            /miuibrowser\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "MIUI " + A
                            ]
                        ],
                        [
                            /fxios\/([-\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                O
                            ]
                        ],
                        [
                            /\bqihu|(qi?ho?o?|360)browser/i
                        ],
                        [
                            [
                                u,
                                "360 " + A
                            ]
                        ],
                        [
                            /(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i
                        ],
                        [
                            [
                                u,
                                /(.+)/,
                                "$1 " + A
                            ],
                            f
                        ],
                        [
                            /(comodo_dragon)\/([\w\.]+)/i
                        ],
                        [
                            [
                                u,
                                /_/g,
                                " "
                            ],
                            f
                        ],
                        [
                            /(electron)\/([\w\.]+) safari/i,
                            /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                            /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /(metasr)[\/ ]?([\w\.]+)/i,
                            /(lbbrowser)/i,
                            /\[(linkedin)app\]/i
                        ],
                        [
                            u
                        ],
                        [
                            /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i
                        ],
                        [
                            [
                                u,
                                H
                            ],
                            f
                        ],
                        [
                            /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
                            /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
                            /safari (line)\/([\w\.]+)/i,
                            /\b(line)\/([\w\.]+)\/iab/i,
                            /(chromium|instagram)[\/ ]([-\w\.]+)/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /\bgsa\/([\w\.]+) .*safari\//i
                        ],
                        [
                            f,
                            [
                                u,
                                "GSA"
                            ]
                        ],
                        [
                            /musical_ly(?:.+app_?version\/|_)([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "TikTok"
                            ]
                        ],
                        [
                            /headlesschrome(?:\/([\w\.]+)| )/i
                        ],
                        [
                            f,
                            [
                                u,
                                C + " Headless"
                            ]
                        ],
                        [
                            / wv\).+(chrome)\/([\w\.]+)/i
                        ],
                        [
                            [
                                u,
                                C + " WebView"
                            ],
                            f
                        ],
                        [
                            /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "Android " + A
                            ]
                        ],
                        [
                            /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "Mobile Safari"
                            ]
                        ],
                        [
                            /version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i
                        ],
                        [
                            f,
                            u
                        ],
                        [
                            /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i
                        ],
                        [
                            u,
                            [
                                f,
                                strMapper,
                                $
                            ]
                        ],
                        [
                            /(webkit|khtml)\/([\w\.]+)/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /(navigator|netscape\d?)\/([-\w\.]+)/i
                        ],
                        [
                            [
                                u,
                                "Netscape"
                            ],
                            f
                        ],
                        [
                            /mobile vr; rv:([\w\.]+)\).+firefox/i
                        ],
                        [
                            f,
                            [
                                u,
                                O + " Reality"
                            ]
                        ],
                        [
                            /ekiohf.+(flow)\/([\w\.]+)/i,
                            /(swiftfox)/i,
                            /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                            /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                            /(firefox)\/([\w\.]+)/i,
                            /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                            /(links) \(([\w\.]+)/i,
                            /panasonic;(viera)/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /(cobalt)\/([\w\.]+)/i
                        ],
                        [
                            u,
                            [
                                f,
                                /master.|lts./,
                                ""
                            ]
                        ]
                    ],
                    cpu: [
                        [
                            /(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i
                        ],
                        [
                            [
                                h,
                                "amd64"
                            ]
                        ],
                        [
                            /(ia32(?=;))/i
                        ],
                        [
                            [
                                h,
                                lowerize
                            ]
                        ],
                        [
                            /((?:i[346]|x)86)[;\)]/i
                        ],
                        [
                            [
                                h,
                                "ia32"
                            ]
                        ],
                        [
                            /\b(aarch64|arm(v?8e?l?|_?64))\b/i
                        ],
                        [
                            [
                                h,
                                "arm64"
                            ]
                        ],
                        [
                            /\b(arm(?:v[67])?ht?n?[fl]p?)\b/i
                        ],
                        [
                            [
                                h,
                                "armhf"
                            ]
                        ],
                        [
                            /windows (ce|mobile); ppc;/i
                        ],
                        [
                            [
                                h,
                                "arm"
                            ]
                        ],
                        [
                            /((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i
                        ],
                        [
                            [
                                h,
                                /ower/,
                                t,
                                lowerize
                            ]
                        ],
                        [
                            /(sun4\w)[;\)]/i
                        ],
                        [
                            [
                                h,
                                "sparc"
                            ]
                        ],
                        [
                            /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i
                        ],
                        [
                            [
                                h,
                                lowerize
                            ]
                        ]
                    ],
                    device: [
                        [
                            /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
                        ],
                        [
                            c,
                            [
                                m,
                                V
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
                            /samsung[- ]([-\w]+)/i,
                            /sec-(sgh\w+)/i
                        ],
                        [
                            c,
                            [
                                m,
                                V
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i
                        ],
                        [
                            c,
                            [
                                m,
                                S
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\((ipad);[-\w\),; ]+apple/i,
                            /applecoremedia\/[\w\.]+ \((ipad)/i,
                            /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
                        ],
                        [
                            c,
                            [
                                m,
                                S
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /(macintosh);/i
                        ],
                        [
                            c,
                            [
                                m,
                                S
                            ]
                        ],
                        [
                            /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
                        ],
                        [
                            c,
                            [
                                m,
                                D
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i
                        ],
                        [
                            c,
                            [
                                m,
                                j
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /(?:huawei|honor)([-\w ]+)[;\)]/i,
                            /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
                        ],
                        [
                            c,
                            [
                                m,
                                j
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(poco[\w ]+)(?: bui|\))/i,
                            /\b; (\w+) build\/hm\1/i,
                            /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                            /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                            /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i
                        ],
                        [
                            [
                                c,
                                /_/g,
                                " "
                            ],
                            [
                                m,
                                F
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i
                        ],
                        [
                            [
                                c,
                                /_/g,
                                " "
                            ],
                            [
                                m,
                                F
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /; (\w+) bui.+ oppo/i,
                            /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "OPPO"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /vivo (\w+)(?: bui|\))/i,
                            /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Vivo"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(rmx[12]\d{3})(?: bui|;|\))/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Realme"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                            /\bmot(?:orola)?[- ](\w*)/i,
                            /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
                        ],
                        [
                            c,
                            [
                                m,
                                M
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(mz60\d|xoom[2 ]{0,2}) build\//i
                        ],
                        [
                            c,
                            [
                                m,
                                M
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
                        ],
                        [
                            c,
                            [
                                m,
                                P
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                            /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                            /\blg-?([\d\w]+) bui/i
                        ],
                        [
                            c,
                            [
                                m,
                                P
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(ideatab[-\w ]+)/i,
                            /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Lenovo"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /(?:maemo|nokia).*(n900|lumia \d+)/i,
                            /nokia[-_ ]?([-\w\.]*)/i
                        ],
                        [
                            [
                                c,
                                /_/g,
                                " "
                            ],
                            [
                                m,
                                "Nokia"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(pixel c)\b/i
                        ],
                        [
                            c,
                            [
                                m,
                                U
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i
                        ],
                        [
                            c,
                            [
                                m,
                                U
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
                        ],
                        [
                            c,
                            [
                                m,
                                I
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /sony tablet [ps]/i,
                            /\b(?:sony)?sgp\w+(?: bui|\))/i
                        ],
                        [
                            [
                                c,
                                "Xperia Tablet"
                            ],
                            [
                                m,
                                I
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            / (kb2005|in20[12]5|be20[12][59])\b/i,
                            /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
                        ],
                        [
                            c,
                            [
                                m,
                                "OnePlus"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(alexa)webm/i,
                            /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,
                            /(kf[a-z]+)( bui|\)).+silk\//i
                        ],
                        [
                            c,
                            [
                                m,
                                T
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i
                        ],
                        [
                            [
                                c,
                                /(.+)/g,
                                "Fire Phone $1"
                            ],
                            [
                                m,
                                T
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(playbook);[-\w\),; ]+(rim)/i
                        ],
                        [
                            c,
                            m,
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b((?:bb[a-f]|st[hv])100-\d)/i,
                            /\(bb10; (\w+)/i
                        ],
                        [
                            c,
                            [
                                m,
                                N
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
                        ],
                        [
                            c,
                            [
                                m,
                                z
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
                        ],
                        [
                            c,
                            [
                                m,
                                z
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(nexus 9)/i
                        ],
                        [
                            c,
                            [
                                m,
                                "HTC"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                            /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                            /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
                        ],
                        [
                            m,
                            [
                                c,
                                /_/g,
                                " "
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Acer"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /droid.+; (m[1-5] note) bui/i,
                            /\bmz-([-\w]{2,})/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Meizu"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
                            /(hp) ([\w ]+\w)/i,
                            /(asus)-?(\w+)/i,
                            /(microsoft); (lumia[\w ]+)/i,
                            /(lenovo)[-_ ]?([-\w]+)/i,
                            /(jolla)/i,
                            /(oppo) ?([\w ]+) bui/i
                        ],
                        [
                            m,
                            c,
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(kobo)\s(ereader|touch)/i,
                            /(archos) (gamepad2?)/i,
                            /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                            /(kindle)\/([\w\.]+)/i,
                            /(nook)[\w ]+build\/(\w+)/i,
                            /(dell) (strea[kpr\d ]*[\dko])/i,
                            /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                            /(trinity)[- ]*(t\d{3}) bui/i,
                            /(gigaset)[- ]+(q\w{1,9}) bui/i,
                            /(vodafone) ([\w ]+)(?:\)| bui)/i
                        ],
                        [
                            m,
                            c,
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /(surface duo)/i
                        ],
                        [
                            c,
                            [
                                m,
                                R
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /droid [\d\.]+; (fp\du?)(?: b|\))/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Fairphone"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(u304aa)/i
                        ],
                        [
                            c,
                            [
                                m,
                                "AT&T"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\bsie-(\w*)/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Siemens"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(rct\w+) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "RCA"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b(venue[\d ]{2,7}) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Dell"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b(q(?:mv|ta)\w+) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Verizon"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Barnes & Noble"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b(tm\d{3}\w+) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "NuVision"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b(k88) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "ZTE"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b(nx\d{3}j) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "ZTE"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(gen\d{3}) b.+49h/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Swiss"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(zur\d{3}) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Swiss"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b((zeki)?tb.*\b) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Zeki"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b([yr]\d{2}) b/i,
                            /\b(dragon[- ]+touch |dt)(\w{5}) b/i
                        ],
                        [
                            [
                                m,
                                "Dragon Touch"
                            ],
                            c,
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b(ns-?\w{0,9}) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Insignia"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b((nxa|next)-?\w{0,9}) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "NextBook"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i
                        ],
                        [
                            [
                                m,
                                "Voice"
                            ],
                            c,
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(lvtel\-)?(v1[12]) b/i
                        ],
                        [
                            [
                                m,
                                "LvTel"
                            ],
                            c,
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(ph-1) /i
                        ],
                        [
                            c,
                            [
                                m,
                                "Essential"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(v(100md|700na|7011|917g).*\b) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Envizen"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b(trio[-\w\. ]+) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "MachSpeed"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\btu_(1491) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Rotor"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /(shield[\w ]+) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Nvidia"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /(sprint) (\w+)/i
                        ],
                        [
                            m,
                            c,
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(kin\.[onetw]{3})/i
                        ],
                        [
                            [
                                c,
                                /\./g,
                                " "
                            ],
                            [
                                m,
                                R
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i
                        ],
                        [
                            c,
                            [
                                m,
                                G
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
                        ],
                        [
                            c,
                            [
                                m,
                                G
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /smart-tv.+(samsung)/i
                        ],
                        [
                            m,
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /hbbtv.+maple;(\d+)/i
                        ],
                        [
                            [
                                c,
                                /^/,
                                "SmartTV"
                            ],
                            [
                                m,
                                V
                            ],
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
                        ],
                        [
                            [
                                m,
                                P
                            ],
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /(apple) ?tv/i
                        ],
                        [
                            m,
                            [
                                c,
                                S + " TV"
                            ],
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /crkey/i
                        ],
                        [
                            [
                                c,
                                C + "cast"
                            ],
                            [
                                m,
                                U
                            ],
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /droid.+aft(\w)( bui|\))/i
                        ],
                        [
                            c,
                            [
                                m,
                                T
                            ],
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /\(dtv[\);].+(aquos)/i,
                            /(aquos-tv[\w ]+)\)/i
                        ],
                        [
                            c,
                            [
                                m,
                                D
                            ],
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /(bravia[\w ]+)( bui|\))/i
                        ],
                        [
                            c,
                            [
                                m,
                                I
                            ],
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /(mitv-\w{5}) bui/i
                        ],
                        [
                            c,
                            [
                                m,
                                F
                            ],
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /Hbbtv.*(technisat) (.*);/i
                        ],
                        [
                            m,
                            c,
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                            /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i
                        ],
                        [
                            [
                                m,
                                trim
                            ],
                            [
                                c,
                                trim
                            ],
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i
                        ],
                        [
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /(ouya)/i,
                            /(nintendo) ([wids3utch]+)/i
                        ],
                        [
                            m,
                            c,
                            [
                                p,
                                v
                            ]
                        ],
                        [
                            /droid.+; (shield) bui/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Nvidia"
                            ],
                            [
                                p,
                                v
                            ]
                        ],
                        [
                            /(playstation [345portablevi]+)/i
                        ],
                        [
                            c,
                            [
                                m,
                                I
                            ],
                            [
                                p,
                                v
                            ]
                        ],
                        [
                            /\b(xbox(?: one)?(?!; xbox))[\); ]/i
                        ],
                        [
                            c,
                            [
                                m,
                                R
                            ],
                            [
                                p,
                                v
                            ]
                        ],
                        [
                            /((pebble))app/i
                        ],
                        [
                            m,
                            c,
                            [
                                p,
                                _
                            ]
                        ],
                        [
                            /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i
                        ],
                        [
                            c,
                            [
                                m,
                                S
                            ],
                            [
                                p,
                                _
                            ]
                        ],
                        [
                            /droid.+; (glass) \d/i
                        ],
                        [
                            c,
                            [
                                m,
                                U
                            ],
                            [
                                p,
                                _
                            ]
                        ],
                        [
                            /droid.+; (wt63?0{2,3})\)/i
                        ],
                        [
                            c,
                            [
                                m,
                                G
                            ],
                            [
                                p,
                                _
                            ]
                        ],
                        [
                            /(quest( 2| pro)?)/i
                        ],
                        [
                            c,
                            [
                                m,
                                H
                            ],
                            [
                                p,
                                _
                            ]
                        ],
                        [
                            /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i
                        ],
                        [
                            m,
                            [
                                p,
                                y
                            ]
                        ],
                        [
                            /(aeobc)\b/i
                        ],
                        [
                            c,
                            [
                                m,
                                T
                            ],
                            [
                                p,
                                y
                            ]
                        ],
                        [
                            /droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i
                        ],
                        [
                            c,
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i
                        ],
                        [
                            c,
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i
                        ],
                        [
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i
                        ],
                        [
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(android[-\w\. ]{0,9});.+buil/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Generic"
                            ]
                        ]
                    ],
                    engine: [
                        [
                            /windows.+ edge\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                E + "HTML"
                            ]
                        ],
                        [
                            /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "Blink"
                            ]
                        ],
                        [
                            /(presto)\/([\w\.]+)/i,
                            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                            /ekioh(flow)\/([\w\.]+)/i,
                            /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                            /(icab)[\/ ]([23]\.[\d\.]+)/i,
                            /\b(libweb)/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /rv\:([\w\.]{1,9})\b.+(gecko)/i
                        ],
                        [
                            f,
                            u
                        ]
                    ],
                    os: [
                        [
                            /microsoft (windows) (vista|xp)/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /(windows) nt 6\.2; (arm)/i,
                            /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
                            /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i
                        ],
                        [
                            u,
                            [
                                f,
                                strMapper,
                                X
                            ]
                        ],
                        [
                            /(win(?=3|9|n)|win 9x )([nt\d\.]+)/i
                        ],
                        [
                            [
                                u,
                                "Windows"
                            ],
                            [
                                f,
                                strMapper,
                                X
                            ]
                        ],
                        [
                            /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
                            /ios;fbsv\/([\d\.]+)/i,
                            /cfnetwork\/.+darwin/i
                        ],
                        [
                            [
                                f,
                                /_/g,
                                "."
                            ],
                            [
                                u,
                                "iOS"
                            ]
                        ],
                        [
                            /(mac os x) ?([\w\. ]*)/i,
                            /(macintosh|mac_powerpc\b)(?!.+haiku)/i
                        ],
                        [
                            [
                                u,
                                Z
                            ],
                            [
                                f,
                                /_/g,
                                "."
                            ]
                        ],
                        [
                            /droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i
                        ],
                        [
                            f,
                            u
                        ],
                        [
                            /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                            /(blackberry)\w*\/([\w\.]*)/i,
                            /(tizen|kaios)[\/ ]([\w\.]+)/i,
                            /\((series40);/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /\(bb(10);/i
                        ],
                        [
                            f,
                            [
                                u,
                                N
                            ]
                        ],
                        [
                            /(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "Symbian"
                            ]
                        ],
                        [
                            /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                O + " OS"
                            ]
                        ],
                        [
                            /web0s;.+rt(tv)/i,
                            /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "webOS"
                            ]
                        ],
                        [
                            /watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "watchOS"
                            ]
                        ],
                        [
                            /crkey\/([\d\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                C + "cast"
                            ]
                        ],
                        [
                            /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i
                        ],
                        [
                            [
                                u,
                                L
                            ],
                            f
                        ],
                        [
                            /panasonic;(viera)/i,
                            /(netrange)mmh/i,
                            /(nettv)\/(\d+\.[\w\.]+)/i,
                            /(nintendo|playstation) ([wids345portablevuch]+)/i,
                            /(xbox); +xbox ([^\);]+)/i,
                            /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                            /(mint)[\/\(\) ]?(\w*)/i,
                            /(mageia|vectorlinux)[; ]/i,
                            /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                            /(hurd|linux) ?([\w\.]*)/i,
                            /(gnu) ?([\w\.]*)/i,
                            /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                            /(haiku) (\w+)/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /(sunos) ?([\w\.\d]*)/i
                        ],
                        [
                            [
                                u,
                                "Solaris"
                            ],
                            f
                        ],
                        [
                            /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                            /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                            /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
                            /(unix) ?([\w\.]*)/i
                        ],
                        [
                            u,
                            f
                        ]
                    ]
                };
                var UAParser = function(i, e) {
                    if (typeof i === w) {
                        e = i;
                        i = a;
                    }
                    if (!(this instanceof UAParser)) {
                        return new UAParser(i, e).getResult();
                    }
                    var r = typeof o !== b && o.navigator ? o.navigator : a;
                    var n = i || (r && r.userAgent ? r.userAgent : t);
                    var v = r && r.userAgentData ? r.userAgentData : a;
                    var x = e ? extend(K, e) : K;
                    var _ = r && r.userAgent == n;
                    this.getBrowser = function() {
                        var i = {};
                        i[u] = a;
                        i[f] = a;
                        rgxMapper.call(i, n, x.browser);
                        i[d] = majorize(i[f]);
                        if (_ && r && r.brave && typeof r.brave.isBrave == s) {
                            i[u] = "Brave";
                        }
                        return i;
                    };
                    this.getCPU = function() {
                        var i = {};
                        i[h] = a;
                        rgxMapper.call(i, n, x.cpu);
                        return i;
                    };
                    this.getDevice = function() {
                        var i = {};
                        i[m] = a;
                        i[c] = a;
                        i[p] = a;
                        rgxMapper.call(i, n, x.device);
                        if (_ && !i[p] && v && v.mobile) {
                            i[p] = g;
                        }
                        if (_ && i[c] == "Macintosh" && r && typeof r.standalone !== b && r.maxTouchPoints && r.maxTouchPoints > 2) {
                            i[c] = "iPad";
                            i[p] = k;
                        }
                        return i;
                    };
                    this.getEngine = function() {
                        var i = {};
                        i[u] = a;
                        i[f] = a;
                        rgxMapper.call(i, n, x.engine);
                        return i;
                    };
                    this.getOS = function() {
                        var i = {};
                        i[u] = a;
                        i[f] = a;
                        rgxMapper.call(i, n, x.os);
                        if (_ && !i[u] && v && v.platform != "Unknown") {
                            i[u] = v.platform.replace(/chrome os/i, L).replace(/macos/i, Z);
                        }
                        return i;
                    };
                    this.getResult = function() {
                        return {
                            ua: this.getUA(),
                            browser: this.getBrowser(),
                            engine: this.getEngine(),
                            os: this.getOS(),
                            device: this.getDevice(),
                            cpu: this.getCPU()
                        };
                    };
                    this.getUA = function() {
                        return n;
                    };
                    this.setUA = function(i) {
                        n = typeof i === l && i.length > q ? trim(i, q) : i;
                        return this;
                    };
                    this.setUA(n);
                    return this;
                };
                UAParser.VERSION = r;
                UAParser.BROWSER = enumerize([
                    u,
                    f,
                    d
                ]);
                UAParser.CPU = enumerize([
                    h
                ]);
                UAParser.DEVICE = enumerize([
                    c,
                    m,
                    p,
                    v,
                    g,
                    x,
                    k,
                    _,
                    y
                ]);
                UAParser.ENGINE = UAParser.OS = enumerize([
                    u,
                    f
                ]);
                if (typeof e !== b) {
                    if ("object" !== b && i.exports) {
                        e = i.exports = UAParser;
                    }
                    e.UAParser = UAParser;
                } else {
                    if (typeof define === s && define.amd) {
                        ((r)=>r !== undefined && __turbopack_export_value__(r))(function() {
                            return UAParser;
                        }(__turbopack_require__, exports, module));
                    } else if (typeof o !== b) {
                        o.UAParser = UAParser;
                    }
                }
                var Q = typeof o !== b && (o.jQuery || o.Zepto);
                if (Q && !Q.ua) {
                    var Y = new UAParser;
                    Q.ua = Y.getResult();
                    Q.ua.get = function() {
                        return Y.getUA();
                    };
                    Q.ua.set = function(i) {
                        Y.setUA(i);
                        var e = Y.getResult();
                        for(var o in e){
                            Q.ua[o] = e[o];
                        }
                    };
                }
            })(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : this);
        }
    };
    var e = {};
    function __nccwpck_require__(o) {
        var a = e[o];
        if (a !== undefined) {
            return a.exports;
        }
        var r = e[o] = {
            exports: {}
        };
        var t = true;
        try {
            i[o].call(r.exports, r, r.exports, __nccwpck_require__);
            t = false;
        } finally{
            if (t) delete e[o];
        }
        return r.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var o = __nccwpck_require__(226);
    module.exports = o;
})();
}}),
"[project]/node_modules/next/dist/esm/server/web/spec-extension/user-agent.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "isBot": (()=>isBot),
    "userAgent": (()=>userAgent),
    "userAgentFromString": (()=>userAgentFromString)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$ua$2d$parser$2d$js$2f$ua$2d$parser$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/ua-parser-js/ua-parser.js [middleware] (ecmascript)");
;
function isBot(input) {
    return /Googlebot|Mediapartners-Google|AdsBot-Google|googleweblight|Storebot-Google|Google-PageRenderer|Google-InspectionTool|Bingbot|BingPreview|Slurp|DuckDuckBot|baiduspider|yandex|sogou|LinkedInBot|bitlybot|tumblr|vkShare|quora link preview|facebookexternalhit|facebookcatalog|Twitterbot|applebot|redditbot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|ia_archiver/i.test(input);
}
function userAgentFromString(input) {
    return {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$ua$2d$parser$2d$js$2f$ua$2d$parser$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(input),
        isBot: input === undefined ? false : isBot(input)
    };
}
function userAgent({ headers }) {
    return userAgentFromString(headers.get('user-agent') || undefined);
} //# sourceMappingURL=user-agent.js.map
}}),
"[project]/node_modules/next/dist/esm/server/web/spec-extension/url-pattern.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "URLPattern": (()=>GlobalURLPattern)
});
const GlobalURLPattern = typeof URLPattern === 'undefined' ? undefined : URLPattern;
;
 //# sourceMappingURL=url-pattern.js.map
}}),
"[project]/node_modules/next/dist/esm/server/after/after.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "after": (()=>after)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/app-render/work-async-storage.external.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$export__workAsyncStorageInstance__as__workAsyncStorage$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/app-render/work-async-storage-instance.js [middleware] (ecmascript) <export workAsyncStorageInstance as workAsyncStorage>");
;
function after(task) {
    const workStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$export__workAsyncStorageInstance__as__workAsyncStorage$3e$__["workAsyncStorage"].getStore();
    if (!workStore) {
        // TODO(after): the linked docs page talks about *dynamic* APIs, which after soon won't be anymore
        throw new Error('`after` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context');
    }
    const { afterContext } = workStore;
    return afterContext.after(task);
} //# sourceMappingURL=after.js.map
}}),
"[project]/node_modules/next/dist/esm/server/after/index.js [middleware] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
 //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/next/dist/esm/server/after/index.js [middleware] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$after$2f$after$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/after/after.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$after$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/after/index.js [middleware] (ecmascript) <locals>");
}}),
"[project]/node_modules/next/dist/compiled/react/cjs/react.react-server.development.js [middleware] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
/**
 * @license React
 * react.react-server.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getIteratorFn(maybeIterable) {
        if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
        maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
        return "function" === typeof maybeIterable ? maybeIterable : null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE$2 ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function isValidElementType(type) {
        return "string" === typeof type || "function" === typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_OFFSCREEN_TYPE || "object" === typeof type && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE$1 || void 0 !== type.getModuleId) ? !0 : !1;
    }
    function disabledLog() {}
    function disableLogs() {
        if (0 === disabledDepth) {
            prevLog = console.log;
            prevInfo = console.info;
            prevWarn = console.warn;
            prevError = console.error;
            prevGroup = console.group;
            prevGroupCollapsed = console.groupCollapsed;
            prevGroupEnd = console.groupEnd;
            var props = {
                configurable: !0,
                enumerable: !0,
                value: disabledLog,
                writable: !0
            };
            Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
            });
        }
        disabledDepth++;
    }
    function reenableLogs() {
        disabledDepth--;
        if (0 === disabledDepth) {
            var props = {
                configurable: !0,
                enumerable: !0,
                writable: !0
            };
            Object.defineProperties(console, {
                log: assign({}, props, {
                    value: prevLog
                }),
                info: assign({}, props, {
                    value: prevInfo
                }),
                warn: assign({}, props, {
                    value: prevWarn
                }),
                error: assign({}, props, {
                    value: prevError
                }),
                group: assign({}, props, {
                    value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                    value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                    value: prevGroupEnd
                })
            });
        }
        0 > disabledDepth && console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
    function describeBuiltInComponentFrame(name) {
        if (void 0 === prefix) try {
            throw Error();
        } catch (x) {
            var match = x.stack.trim().match(/\n( *(at )?)/);
            prefix = match && match[1] || "";
            suffix = -1 < x.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < x.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
        return "\n" + prefix + name + suffix;
    }
    function describeNativeComponentFrame(fn, construct) {
        if (!fn || reentry) return "";
        var frame = componentFrameCache.get(fn);
        if (void 0 !== frame) return frame;
        reentry = !0;
        frame = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var previousDispatcher = null;
        previousDispatcher = ReactSharedInternals.H;
        ReactSharedInternals.H = null;
        disableLogs();
        try {
            var RunInRootFrame = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (construct) {
                            var Fake = function() {
                                throw Error();
                            };
                            Object.defineProperty(Fake.prototype, "props", {
                                set: function() {
                                    throw Error();
                                }
                            });
                            if ("object" === typeof Reflect && Reflect.construct) {
                                try {
                                    Reflect.construct(Fake, []);
                                } catch (x) {
                                    var control = x;
                                }
                                Reflect.construct(fn, [], Fake);
                            } else {
                                try {
                                    Fake.call();
                                } catch (x$0) {
                                    control = x$0;
                                }
                                fn.call(Fake.prototype);
                            }
                        } else {
                            try {
                                throw Error();
                            } catch (x$1) {
                                control = x$1;
                            }
                            (Fake = fn()) && "function" === typeof Fake.catch && Fake.catch(function() {});
                        }
                    } catch (sample) {
                        if (sample && control && "string" === typeof sample.stack) return [
                            sample.stack,
                            control.stack
                        ];
                    }
                    return [
                        null,
                        null
                    ];
                }
            };
            RunInRootFrame.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var namePropDescriptor = Object.getOwnPropertyDescriptor(RunInRootFrame.DetermineComponentFrameRoot, "name");
            namePropDescriptor && namePropDescriptor.configurable && Object.defineProperty(RunInRootFrame.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(), sampleStack = _RunInRootFrame$Deter[0], controlStack = _RunInRootFrame$Deter[1];
            if (sampleStack && controlStack) {
                var sampleLines = sampleStack.split("\n"), controlLines = controlStack.split("\n");
                for(_RunInRootFrame$Deter = namePropDescriptor = 0; namePropDescriptor < sampleLines.length && !sampleLines[namePropDescriptor].includes("DetermineComponentFrameRoot");)namePropDescriptor++;
                for(; _RunInRootFrame$Deter < controlLines.length && !controlLines[_RunInRootFrame$Deter].includes("DetermineComponentFrameRoot");)_RunInRootFrame$Deter++;
                if (namePropDescriptor === sampleLines.length || _RunInRootFrame$Deter === controlLines.length) for(namePropDescriptor = sampleLines.length - 1, _RunInRootFrame$Deter = controlLines.length - 1; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter && sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter];)_RunInRootFrame$Deter--;
                for(; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter; namePropDescriptor--, _RunInRootFrame$Deter--)if (sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                    if (1 !== namePropDescriptor || 1 !== _RunInRootFrame$Deter) {
                        do if (namePropDescriptor--, _RunInRootFrame$Deter--, 0 > _RunInRootFrame$Deter || sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                            var _frame = "\n" + sampleLines[namePropDescriptor].replace(" at new ", " at ");
                            fn.displayName && _frame.includes("<anonymous>") && (_frame = _frame.replace("<anonymous>", fn.displayName));
                            "function" === typeof fn && componentFrameCache.set(fn, _frame);
                            return _frame;
                        }
                        while (1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter)
                    }
                    break;
                }
            }
        } finally{
            reentry = !1, ReactSharedInternals.H = previousDispatcher, reenableLogs(), Error.prepareStackTrace = frame;
        }
        sampleLines = (sampleLines = fn ? fn.displayName || fn.name : "") ? describeBuiltInComponentFrame(sampleLines) : "";
        "function" === typeof fn && componentFrameCache.set(fn, sampleLines);
        return sampleLines;
    }
    function describeUnknownElementTypeFrameInDEV(type) {
        if (null == type) return "";
        if ("function" === typeof type) {
            var prototype = type.prototype;
            return describeNativeComponentFrame(type, !(!prototype || !prototype.isReactComponent));
        }
        if ("string" === typeof type) return describeBuiltInComponentFrame(type);
        switch(type){
            case REACT_SUSPENSE_TYPE:
                return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
                return describeBuiltInComponentFrame("SuspenseList");
        }
        if ("object" === typeof type) switch(type.$$typeof){
            case REACT_FORWARD_REF_TYPE:
                return type = describeNativeComponentFrame(type.render, !1), type;
            case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type);
            case REACT_LAZY_TYPE:
                prototype = type._payload;
                type = type._init;
                try {
                    return describeUnknownElementTypeFrameInDEV(type(prototype));
                } catch (x) {}
        }
        return "";
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props) {
        self = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function cloneAndReplaceKey(oldElement, newKey) {
        newKey = ReactElement(oldElement.type, newKey, void 0, void 0, oldElement._owner, oldElement.props);
        newKey._store.validated = oldElement._store.validated;
        return newKey;
    }
    function validateChildKeys(node, parentType) {
        if ("object" === typeof node && node && node.$$typeof !== REACT_CLIENT_REFERENCE) {
            if (isArrayImpl(node)) for(var i = 0; i < node.length; i++){
                var child = node[i];
                isValidElement(child) && validateExplicitKey(child, parentType);
            }
            else if (isValidElement(node)) node._store && (node._store.validated = 1);
            else if (i = getIteratorFn(node), "function" === typeof i && i !== node.entries && (i = i.call(node), i !== node)) for(; !(node = i.next()).done;)isValidElement(node.value) && validateExplicitKey(node.value, parentType);
        }
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function validateExplicitKey(element, parentType) {
        if (element._store && !element._store.validated && null == element.key && (element._store.validated = 1, parentType = getCurrentComponentErrorInfo(parentType), !ownerHasKeyUseWarning[parentType])) {
            ownerHasKeyUseWarning[parentType] = !0;
            var childOwner = "";
            element && null != element._owner && element._owner !== getOwner() && (childOwner = null, "number" === typeof element._owner.tag ? childOwner = getComponentNameFromType(element._owner.type) : "string" === typeof element._owner.name && (childOwner = element._owner.name), childOwner = " It was passed a child from " + childOwner + ".");
            var prevGetCurrentStack = ReactSharedInternals.getCurrentStack;
            ReactSharedInternals.getCurrentStack = function() {
                var stack = describeUnknownElementTypeFrameInDEV(element.type);
                prevGetCurrentStack && (stack += prevGetCurrentStack() || "");
                return stack;
            };
            console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.', parentType, childOwner);
            ReactSharedInternals.getCurrentStack = prevGetCurrentStack;
        }
    }
    function getCurrentComponentErrorInfo(parentType) {
        var info = "", owner = getOwner();
        owner && (owner = getComponentNameFromType(owner.type)) && (info = "\n\nCheck the render method of `" + owner + "`.");
        info || (parentType = getComponentNameFromType(parentType)) && (info = "\n\nCheck the top-level render call using <" + parentType + ">.");
        return info;
    }
    function escape(key) {
        var escaperLookup = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + key.replace(/[=:]/g, function(match) {
            return escaperLookup[match];
        });
    }
    function getElementKey(element, index) {
        return "object" === typeof element && null !== element && null != element.key ? (checkKeyStringCoercion(element.key), escape("" + element.key)) : index.toString(36);
    }
    function noop() {}
    function resolveThenable(thenable) {
        switch(thenable.status){
            case "fulfilled":
                return thenable.value;
            case "rejected":
                throw thenable.reason;
            default:
                switch("string" === typeof thenable.status ? thenable.then(noop, noop) : (thenable.status = "pending", thenable.then(function(fulfilledValue) {
                    "pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
                }, function(error) {
                    "pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
                })), thenable.status){
                    case "fulfilled":
                        return thenable.value;
                    case "rejected":
                        throw thenable.reason;
                }
        }
        throw thenable;
    }
    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
        var type = typeof children;
        if ("undefined" === type || "boolean" === type) children = null;
        var invokeCallback = !1;
        if (null === children) invokeCallback = !0;
        else switch(type){
            case "bigint":
            case "string":
            case "number":
                invokeCallback = !0;
                break;
            case "object":
                switch(children.$$typeof){
                    case REACT_ELEMENT_TYPE:
                    case REACT_PORTAL_TYPE:
                        invokeCallback = !0;
                        break;
                    case REACT_LAZY_TYPE:
                        return invokeCallback = children._init, mapIntoArray(invokeCallback(children._payload), array, escapedPrefix, nameSoFar, callback);
                }
        }
        if (invokeCallback) {
            invokeCallback = children;
            callback = callback(invokeCallback);
            var childKey = "" === nameSoFar ? "." + getElementKey(invokeCallback, 0) : nameSoFar;
            isArrayImpl(callback) ? (escapedPrefix = "", null != childKey && (escapedPrefix = childKey.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
                return c;
            })) : null != callback && (isValidElement(callback) && (null != callback.key && (invokeCallback && invokeCallback.key === callback.key || checkKeyStringCoercion(callback.key)), escapedPrefix = cloneAndReplaceKey(callback, escapedPrefix + (null == callback.key || invokeCallback && invokeCallback.key === callback.key ? "" : ("" + callback.key).replace(userProvidedKeyEscapeRegex, "$&/") + "/") + childKey), "" !== nameSoFar && null != invokeCallback && isValidElement(invokeCallback) && null == invokeCallback.key && invokeCallback._store && !invokeCallback._store.validated && (escapedPrefix._store.validated = 2), callback = escapedPrefix), array.push(callback));
            return 1;
        }
        invokeCallback = 0;
        childKey = "" === nameSoFar ? "." : nameSoFar + ":";
        if (isArrayImpl(children)) for(var i = 0; i < children.length; i++)nameSoFar = children[i], type = childKey + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
        else if (i = getIteratorFn(children), "function" === typeof i) for(i === children.entries && (didWarnAboutMaps || console.warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), didWarnAboutMaps = !0), children = i.call(children), i = 0; !(nameSoFar = children.next()).done;)nameSoFar = nameSoFar.value, type = childKey + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
        else if ("object" === type) {
            if ("function" === typeof children.then) return mapIntoArray(resolveThenable(children), array, escapedPrefix, nameSoFar, callback);
            array = String(children);
            throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead.");
        }
        return invokeCallback;
    }
    function mapChildren(children, func, context) {
        if (null == children) return children;
        var result = [], count = 0;
        mapIntoArray(children, result, "", "", function(child) {
            return func.call(context, child, count++);
        });
        return result;
    }
    function resolveDispatcher() {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
        return dispatcher;
    }
    function lazyInitializer(payload) {
        if (-1 === payload._status) {
            var ctor = payload._result;
            ctor = ctor();
            ctor.then(function(moduleObject) {
                if (0 === payload._status || -1 === payload._status) payload._status = 1, payload._result = moduleObject;
            }, function(error) {
                if (0 === payload._status || -1 === payload._status) payload._status = 2, payload._result = error;
            });
            -1 === payload._status && (payload._status = 0, payload._result = ctor);
        }
        if (1 === payload._status) return ctor = payload._result, void 0 === ctor && console.error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", ctor), "default" in ctor || console.error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", ctor), ctor.default;
        throw payload._result;
    }
    function createCacheRoot() {
        return new WeakMap();
    }
    function createCacheNode() {
        return {
            s: 0,
            v: void 0,
            o: null,
            p: null
        };
    }
    var ReactSharedInternals = {
        H: null,
        A: null,
        getCurrentStack: null
    }, isArrayImpl = Array.isArray, REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, REACT_CLIENT_REFERENCE$2 = Symbol.for("react.client.reference"), hasOwnProperty = Object.prototype.hasOwnProperty, assign = Object.assign, REACT_CLIENT_REFERENCE$1 = Symbol.for("react.client.reference"), disabledDepth = 0, prevLog, prevInfo, prevWarn, prevError, prevGroup, prevGroupCollapsed, prevGroupEnd;
    disabledLog.__reactDisabledLog = !0;
    var prefix, suffix, reentry = !1;
    var componentFrameCache = new ("function" === typeof WeakMap ? WeakMap : Map)();
    var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), specialPropKeyWarningShown, didWarnAboutOldJSXRuntime;
    var didWarnAboutElementRef = {};
    var ownerHasKeyUseWarning = {}, didWarnAboutMaps = !1, userProvidedKeyEscapeRegex = /\/+/g;
    exports.Children = {
        map: mapChildren,
        forEach: function(children, forEachFunc, forEachContext) {
            mapChildren(children, function() {
                forEachFunc.apply(this, arguments);
            }, forEachContext);
        },
        count: function(children) {
            var n = 0;
            mapChildren(children, function() {
                n++;
            });
            return n;
        },
        toArray: function(children) {
            return mapChildren(children, function(child) {
                return child;
            }) || [];
        },
        only: function(children) {
            if (!isValidElement(children)) throw Error("React.Children.only expected to receive a single React element child.");
            return children;
        }
    };
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.Profiler = REACT_PROFILER_TYPE;
    exports.StrictMode = REACT_STRICT_MODE_TYPE;
    exports.Suspense = REACT_SUSPENSE_TYPE;
    exports.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
    exports.cache = function(fn) {
        return function() {
            var dispatcher = ReactSharedInternals.A;
            if (!dispatcher) return fn.apply(null, arguments);
            var fnMap = dispatcher.getCacheForType(createCacheRoot);
            dispatcher = fnMap.get(fn);
            void 0 === dispatcher && (dispatcher = createCacheNode(), fnMap.set(fn, dispatcher));
            fnMap = 0;
            for(var l = arguments.length; fnMap < l; fnMap++){
                var arg = arguments[fnMap];
                if ("function" === typeof arg || "object" === typeof arg && null !== arg) {
                    var objectCache = dispatcher.o;
                    null === objectCache && (dispatcher.o = objectCache = new WeakMap());
                    dispatcher = objectCache.get(arg);
                    void 0 === dispatcher && (dispatcher = createCacheNode(), objectCache.set(arg, dispatcher));
                } else objectCache = dispatcher.p, null === objectCache && (dispatcher.p = objectCache = new Map()), dispatcher = objectCache.get(arg), void 0 === dispatcher && (dispatcher = createCacheNode(), objectCache.set(arg, dispatcher));
            }
            if (1 === dispatcher.s) return dispatcher.v;
            if (2 === dispatcher.s) throw dispatcher.v;
            try {
                var result = fn.apply(null, arguments);
                fnMap = dispatcher;
                fnMap.s = 1;
                return fnMap.v = result;
            } catch (error) {
                throw result = dispatcher, result.s = 2, result.v = error, error;
            }
        };
    };
    exports.cloneElement = function(element, config, children) {
        if (null === element || void 0 === element) throw Error("The argument must be a React element, but you passed " + element + ".");
        var props = assign({}, element.props), key = element.key, owner = element._owner;
        if (null != config) {
            var JSCompiler_inline_result;
            a: {
                if (hasOwnProperty.call(config, "ref") && (JSCompiler_inline_result = Object.getOwnPropertyDescriptor(config, "ref").get) && JSCompiler_inline_result.isReactWarning) {
                    JSCompiler_inline_result = !1;
                    break a;
                }
                JSCompiler_inline_result = void 0 !== config.ref;
            }
            JSCompiler_inline_result && (owner = getOwner());
            hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key);
            for(propName in config)!hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
        }
        var propName = arguments.length - 2;
        if (1 === propName) props.children = children;
        else if (1 < propName) {
            JSCompiler_inline_result = Array(propName);
            for(var i = 0; i < propName; i++)JSCompiler_inline_result[i] = arguments[i + 2];
            props.children = JSCompiler_inline_result;
        }
        props = ReactElement(element.type, key, void 0, void 0, owner, props);
        for(key = 2; key < arguments.length; key++)validateChildKeys(arguments[key], props.type);
        return props;
    };
    exports.createElement = function(type, config, children) {
        if (isValidElementType(type)) for(var i = 2; i < arguments.length; i++)validateChildKeys(arguments[i], type);
        else {
            i = "";
            if (void 0 === type || "object" === typeof type && null !== type && 0 === Object.keys(type).length) i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            if (null === type) var typeString = "null";
            else isArrayImpl(type) ? typeString = "array" : void 0 !== type && type.$$typeof === REACT_ELEMENT_TYPE ? (typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : typeString = typeof type;
            console.error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, i);
        }
        var propName;
        i = {};
        typeString = null;
        if (null != config) for(propName in didWarnAboutOldJSXRuntime || !("__self" in config) || "key" in config || (didWarnAboutOldJSXRuntime = !0, console.warn("Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")), hasValidKey(config) && (checkKeyStringCoercion(config.key), typeString = "" + config.key), config)hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (i[propName] = config[propName]);
        var childrenLength = arguments.length - 2;
        if (1 === childrenLength) i.children = children;
        else if (1 < childrenLength) {
            for(var childArray = Array(childrenLength), _i = 0; _i < childrenLength; _i++)childArray[_i] = arguments[_i + 2];
            Object.freeze && Object.freeze(childArray);
            i.children = childArray;
        }
        if (type && type.defaultProps) for(propName in childrenLength = type.defaultProps, childrenLength)void 0 === i[propName] && (i[propName] = childrenLength[propName]);
        typeString && defineKeyPropWarningGetter(i, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, typeString, void 0, void 0, getOwner(), i);
    };
    exports.createRef = function() {
        var refObject = {
            current: null
        };
        Object.seal(refObject);
        return refObject;
    };
    exports.forwardRef = function(render) {
        null != render && render.$$typeof === REACT_MEMO_TYPE ? console.error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : "function" !== typeof render ? console.error("forwardRef requires a render function but was given %s.", null === render ? "null" : typeof render) : 0 !== render.length && 2 !== render.length && console.error("forwardRef render functions accept exactly two parameters: props and ref. %s", 1 === render.length ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
        null != render && null != render.defaultProps && console.error("forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?");
        var elementType = {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render: render
        }, ownName;
        Object.defineProperty(elementType, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
                return ownName;
            },
            set: function(name) {
                ownName = name;
                render.name || render.displayName || (Object.defineProperty(render, "name", {
                    value: name
                }), render.displayName = name);
            }
        });
        return elementType;
    };
    exports.isValidElement = isValidElement;
    exports.lazy = function(ctor) {
        return {
            $$typeof: REACT_LAZY_TYPE,
            _payload: {
                _status: -1,
                _result: ctor
            },
            _init: lazyInitializer
        };
    };
    exports.memo = function(type, compare) {
        isValidElementType(type) || console.error("memo: The first argument must be a component. Instead received: %s", null === type ? "null" : typeof type);
        compare = {
            $$typeof: REACT_MEMO_TYPE,
            type: type,
            compare: void 0 === compare ? null : compare
        };
        var ownName;
        Object.defineProperty(compare, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
                return ownName;
            },
            set: function(name) {
                ownName = name;
                type.name || type.displayName || (Object.defineProperty(type, "name", {
                    value: name
                }), type.displayName = name);
            }
        });
        return compare;
    };
    exports.use = function(usable) {
        return resolveDispatcher().use(usable);
    };
    exports.useCallback = function(callback, deps) {
        return resolveDispatcher().useCallback(callback, deps);
    };
    exports.useDebugValue = function(value, formatterFn) {
        return resolveDispatcher().useDebugValue(value, formatterFn);
    };
    exports.useId = function() {
        return resolveDispatcher().useId();
    };
    exports.useMemo = function(create, deps) {
        return resolveDispatcher().useMemo(create, deps);
    };
    exports.version = "19.0.0-rc-65e06cb7-20241218";
}();
}}),
"[project]/node_modules/next/dist/compiled/react/react.react-server.js [middleware] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_require__("[project]/node_modules/next/dist/compiled/react/cjs/react.react-server.development.js [middleware] (ecmascript)");
}
}}),
"[project]/node_modules/next/dist/esm/client/components/hooks-server-context.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "DynamicServerError": (()=>DynamicServerError),
    "isDynamicServerError": (()=>isDynamicServerError)
});
const DYNAMIC_ERROR_CODE = 'DYNAMIC_SERVER_USAGE';
class DynamicServerError extends Error {
    constructor(description){
        super("Dynamic server usage: " + description), this.description = description, this.digest = DYNAMIC_ERROR_CODE;
    }
}
function isDynamicServerError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err) || typeof err.digest !== 'string') {
        return false;
    }
    return err.digest === DYNAMIC_ERROR_CODE;
} //# sourceMappingURL=hooks-server-context.js.map
}}),
"[project]/node_modules/next/dist/esm/client/components/static-generation-bailout.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "StaticGenBailoutError": (()=>StaticGenBailoutError),
    "isStaticGenBailoutError": (()=>isStaticGenBailoutError)
});
const NEXT_STATIC_GEN_BAILOUT = 'NEXT_STATIC_GEN_BAILOUT';
class StaticGenBailoutError extends Error {
    constructor(...args){
        super(...args), this.code = NEXT_STATIC_GEN_BAILOUT;
    }
}
function isStaticGenBailoutError(error) {
    if (typeof error !== 'object' || error === null || !('code' in error)) {
        return false;
    }
    return error.code === NEXT_STATIC_GEN_BAILOUT;
} //# sourceMappingURL=static-generation-bailout.js.map
}}),
"[project]/node_modules/next/dist/esm/server/dynamic-rendering-utils.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * This function constructs a promise that will never resolve. This is primarily
 * useful for dynamicIO where we use promise resolution timing to determine which
 * parts of a render can be included in a prerender.
 *
 * @internal
 */ __turbopack_esm__({
    "makeHangingPromise": (()=>makeHangingPromise)
});
function makeHangingPromise(signal, expression) {
    const hangingPromise = new Promise((_, reject)=>{
        signal.addEventListener('abort', ()=>{
            reject(new Error(`During prerendering, ${expression} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${expression} to a different context by using \`setTimeout\`, \`after\`, or similar functions you may observe this error and you should handle it in that context.`));
        }, {
            once: true
        });
    });
    // We are fine if no one actually awaits this promise. We shouldn't consider this an unhandled rejection so
    // we attach a noop catch handler here to suppress this warning. If you actually await somewhere or construct
    // your own promise out of it you'll need to ensure you handle the error when it rejects.
    hangingPromise.catch(ignoreReject);
    return hangingPromise;
}
function ignoreReject() {} //# sourceMappingURL=dynamic-rendering-utils.js.map
}}),
"[project]/node_modules/next/dist/esm/lib/metadata/metadata-constants.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "METADATA_BOUNDARY_NAME": (()=>METADATA_BOUNDARY_NAME),
    "OUTLET_BOUNDARY_NAME": (()=>OUTLET_BOUNDARY_NAME),
    "VIEWPORT_BOUNDARY_NAME": (()=>VIEWPORT_BOUNDARY_NAME)
});
const METADATA_BOUNDARY_NAME = '__next_metadata_boundary__';
const VIEWPORT_BOUNDARY_NAME = '__next_viewport_boundary__';
const OUTLET_BOUNDARY_NAME = '__next_outlet_boundary__'; //# sourceMappingURL=metadata-constants.js.map
}}),
"[project]/node_modules/next/dist/esm/server/app-render/dynamic-rendering.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * The functions provided by this module are used to communicate certain properties
 * about the currently running code so that Next.js can make decisions on how to handle
 * the current execution in different rendering modes such as pre-rendering, resuming, and SSR.
 *
 * Today Next.js treats all code as potentially static. Certain APIs may only make sense when dynamically rendering.
 * Traditionally this meant deopting the entire render to dynamic however with PPR we can now deopt parts
 * of a React tree as dynamic while still keeping other parts static. There are really two different kinds of
 * Dynamic indications.
 *
 * The first is simply an intention to be dynamic. unstable_noStore is an example of this where
 * the currently executing code simply declares that the current scope is dynamic but if you use it
 * inside unstable_cache it can still be cached. This type of indication can be removed if we ever
 * make the default dynamic to begin with because the only way you would ever be static is inside
 * a cache scope which this indication does not affect.
 *
 * The second is an indication that a dynamic data source was read. This is a stronger form of dynamic
 * because it means that it is inappropriate to cache this at all. using a dynamic data source inside
 * unstable_cache should error. If you want to use some dynamic data inside unstable_cache you should
 * read that data outside the cache and pass it in as an argument to the cached function.
 */ // Once postpone is in stable we should switch to importing the postpone export directly
__turbopack_esm__({
    "Postpone": (()=>Postpone),
    "abortAndThrowOnSynchronousRequestDataAccess": (()=>abortAndThrowOnSynchronousRequestDataAccess),
    "abortOnSynchronousPlatformIOAccess": (()=>abortOnSynchronousPlatformIOAccess),
    "accessedDynamicData": (()=>accessedDynamicData),
    "annotateDynamicAccess": (()=>annotateDynamicAccess),
    "consumeDynamicAccess": (()=>consumeDynamicAccess),
    "createDynamicTrackingState": (()=>createDynamicTrackingState),
    "createDynamicValidationState": (()=>createDynamicValidationState),
    "createPostponedAbortSignal": (()=>createPostponedAbortSignal),
    "formatDynamicAPIAccesses": (()=>formatDynamicAPIAccesses),
    "getFirstDynamicReason": (()=>getFirstDynamicReason),
    "isDynamicPostpone": (()=>isDynamicPostpone),
    "isPrerenderInterruptedError": (()=>isPrerenderInterruptedError),
    "markCurrentScopeAsDynamic": (()=>markCurrentScopeAsDynamic),
    "postponeWithTracking": (()=>postponeWithTracking),
    "throwIfDisallowedDynamic": (()=>throwIfDisallowedDynamic),
    "throwToInterruptStaticGeneration": (()=>throwToInterruptStaticGeneration),
    "trackAllowedDynamicAccess": (()=>trackAllowedDynamicAccess),
    "trackDynamicDataInDynamicRender": (()=>trackDynamicDataInDynamicRender),
    "trackFallbackParamAccessed": (()=>trackFallbackParamAccessed),
    "trackSynchronousPlatformIOAccessInDev": (()=>trackSynchronousPlatformIOAccessInDev),
    "trackSynchronousRequestDataAccessInDev": (()=>trackSynchronousRequestDataAccessInDev),
    "useDynamicRouteParams": (()=>useDynamicRouteParams)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$react$2e$react$2d$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/react.react-server.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$hooks$2d$server$2d$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/client/components/hooks-server-context.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/client/components/static-generation-bailout.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/app-render/work-unit-async-storage.external.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/app-render/work-async-storage.external.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/dynamic-rendering-utils.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$metadata$2d$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/lib/metadata/metadata-constants.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$export__workUnitAsyncStorageInstance__as__workUnitAsyncStorage$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/app-render/work-unit-async-storage-instance.js [middleware] (ecmascript) <export workUnitAsyncStorageInstance as workUnitAsyncStorage>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$export__workAsyncStorageInstance__as__workAsyncStorage$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/app-render/work-async-storage-instance.js [middleware] (ecmascript) <export workAsyncStorageInstance as workAsyncStorage>");
;
;
;
;
;
;
;
const hasPostpone = typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$react$2e$react$2d$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].unstable_postpone === 'function';
function createDynamicTrackingState(isDebugDynamicAccesses) {
    return {
        isDebugDynamicAccesses,
        dynamicAccesses: [],
        syncDynamicExpression: undefined,
        syncDynamicErrorWithStack: null
    };
}
function createDynamicValidationState() {
    return {
        hasSuspendedDynamic: false,
        hasDynamicMetadata: false,
        hasDynamicViewport: false,
        hasSyncDynamicErrors: false,
        dynamicErrors: []
    };
}
function getFirstDynamicReason(trackingState) {
    var _trackingState_dynamicAccesses_;
    return (_trackingState_dynamicAccesses_ = trackingState.dynamicAccesses[0]) == null ? void 0 : _trackingState_dynamicAccesses_.expression;
}
function markCurrentScopeAsDynamic(store, workUnitStore, expression) {
    if (workUnitStore) {
        if (workUnitStore.type === 'cache' || workUnitStore.type === 'unstable-cache') {
            // inside cache scopes marking a scope as dynamic has no effect because the outer cache scope
            // creates a cache boundary. This is subtly different from reading a dynamic data source which is
            // forbidden inside a cache scope.
            return;
        }
    }
    // If we're forcing dynamic rendering or we're forcing static rendering, we
    // don't need to do anything here because the entire page is already dynamic
    // or it's static and it should not throw or postpone here.
    if (store.forceDynamic || store.forceStatic) return;
    if (store.dynamicShouldError) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["StaticGenBailoutError"](`Route ${store.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`);
    }
    if (workUnitStore) {
        if (workUnitStore.type === 'prerender-ppr') {
            postponeWithTracking(store.route, expression, workUnitStore.dynamicTracking);
        } else if (workUnitStore.type === 'prerender-legacy') {
            workUnitStore.revalidate = 0;
            // We aren't prerendering but we are generating a static page. We need to bail out of static generation
            const err = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$hooks$2d$server$2d$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["DynamicServerError"](`Route ${store.route} couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`);
            store.dynamicUsageDescription = expression;
            store.dynamicUsageStack = err.stack;
            throw err;
        } else if (("TURBOPACK compile-time value", "development") === 'development' && workUnitStore && workUnitStore.type === 'request') {
            workUnitStore.usedDynamic = true;
        }
    }
}
function trackFallbackParamAccessed(store, expression) {
    const prerenderStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$export__workUnitAsyncStorageInstance__as__workUnitAsyncStorage$3e$__["workUnitAsyncStorage"].getStore();
    if (!prerenderStore || prerenderStore.type !== 'prerender-ppr') return;
    postponeWithTracking(store.route, expression, prerenderStore.dynamicTracking);
}
function throwToInterruptStaticGeneration(expression, store, prerenderStore) {
    // We aren't prerendering but we are generating a static page. We need to bail out of static generation
    const err = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$hooks$2d$server$2d$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["DynamicServerError"](`Route ${store.route} couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`);
    prerenderStore.revalidate = 0;
    store.dynamicUsageDescription = expression;
    store.dynamicUsageStack = err.stack;
    throw err;
}
function trackDynamicDataInDynamicRender(_store, workUnitStore) {
    if (workUnitStore) {
        if (workUnitStore.type === 'cache' || workUnitStore.type === 'unstable-cache') {
            // inside cache scopes marking a scope as dynamic has no effect because the outer cache scope
            // creates a cache boundary. This is subtly different from reading a dynamic data source which is
            // forbidden inside a cache scope.
            return;
        }
        if (workUnitStore.type === 'prerender' || workUnitStore.type === 'prerender-legacy') {
            workUnitStore.revalidate = 0;
        }
        if (("TURBOPACK compile-time value", "development") === 'development' && workUnitStore.type === 'request') {
            workUnitStore.usedDynamic = true;
        }
    }
}
// Despite it's name we don't actually abort unless we have a controller to call abort on
// There are times when we let a prerender run long to discover caches where we want the semantics
// of tracking dynamic access without terminating the prerender early
function abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore) {
    const reason = `Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`;
    const error = createPrerenderInterruptedError(reason);
    prerenderStore.controller.abort(error);
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            // When we aren't debugging, we don't need to create another error for the
            // stack trace.
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
}
function abortOnSynchronousPlatformIOAccess(route, expression, errorWithStack, prerenderStore) {
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
        if (dynamicTracking.syncDynamicErrorWithStack === null) {
            dynamicTracking.syncDynamicExpression = expression;
            dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
        }
    }
    return abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
}
function trackSynchronousPlatformIOAccessInDev(requestStore) {
    // We don't actually have a controller to abort but we do the semantic equivalent by
    // advancing the request store out of prerender mode
    requestStore.prerenderPhase = false;
}
function abortAndThrowOnSynchronousRequestDataAccess(route, expression, errorWithStack, prerenderStore) {
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
        if (dynamicTracking.syncDynamicErrorWithStack === null) {
            dynamicTracking.syncDynamicExpression = expression;
            dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
            if (prerenderStore.validating === true) {
                // We always log Request Access in dev at the point of calling the function
                // So we mark the dynamic validation as not requiring it to be printed
                dynamicTracking.syncDynamicLogged = true;
            }
        }
    }
    abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
    throw createPrerenderInterruptedError(`Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`);
}
const trackSynchronousRequestDataAccessInDev = trackSynchronousPlatformIOAccessInDev;
function Postpone({ reason, route }) {
    const prerenderStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$export__workUnitAsyncStorageInstance__as__workUnitAsyncStorage$3e$__["workUnitAsyncStorage"].getStore();
    const dynamicTracking = prerenderStore && prerenderStore.type === 'prerender-ppr' ? prerenderStore.dynamicTracking : null;
    postponeWithTracking(route, reason, dynamicTracking);
}
function postponeWithTracking(route, expression, dynamicTracking) {
    assertPostpone();
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            // When we aren't debugging, we don't need to create another error for the
            // stack trace.
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$react$2e$react$2d$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].unstable_postpone(createPostponeReason(route, expression));
}
function createPostponeReason(route, expression) {
    return `Route ${route} needs to bail out of prerendering at this point because it used ${expression}. ` + `React throws this special object to indicate where. It should not be caught by ` + `your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
}
function isDynamicPostpone(err) {
    if (typeof err === 'object' && err !== null && typeof err.message === 'string') {
        return isDynamicPostponeReason(err.message);
    }
    return false;
}
function isDynamicPostponeReason(reason) {
    return reason.includes('needs to bail out of prerendering at this point because it used') && reason.includes('Learn more: https://nextjs.org/docs/messages/ppr-caught-error');
}
if (isDynamicPostponeReason(createPostponeReason('%%%', '^^^')) === false) {
    throw new Error('Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js');
}
const NEXT_PRERENDER_INTERRUPTED = 'NEXT_PRERENDER_INTERRUPTED';
function createPrerenderInterruptedError(message) {
    const error = new Error(message);
    error.digest = NEXT_PRERENDER_INTERRUPTED;
    return error;
}
function isPrerenderInterruptedError(error) {
    return typeof error === 'object' && error !== null && error.digest === NEXT_PRERENDER_INTERRUPTED && 'name' in error && 'message' in error && error instanceof Error;
}
function accessedDynamicData(dynamicAccesses) {
    return dynamicAccesses.length > 0;
}
function consumeDynamicAccess(serverDynamic, clientDynamic) {
    // We mutate because we only call this once we are no longer writing
    // to the dynamicTrackingState and it's more efficient than creating a new
    // array.
    serverDynamic.dynamicAccesses.push(...clientDynamic.dynamicAccesses);
    return serverDynamic.dynamicAccesses;
}
function formatDynamicAPIAccesses(dynamicAccesses) {
    return dynamicAccesses.filter((access)=>typeof access.stack === 'string' && access.stack.length > 0).map(({ expression, stack })=>{
        stack = stack.split('\n') // Remove the "Error: " prefix from the first line of the stack trace as
        // well as the first 4 lines of the stack trace which is the distance
        // from the user code and the `new Error().stack` call.
        .slice(4).filter((line)=>{
            // Exclude Next.js internals from the stack trace.
            if (line.includes('node_modules/next/')) {
                return false;
            }
            // Exclude anonymous functions from the stack trace.
            if (line.includes(' (<anonymous>)')) {
                return false;
            }
            // Exclude Node.js internals from the stack trace.
            if (line.includes(' (node:')) {
                return false;
            }
            return true;
        }).join('\n');
        return `Dynamic API Usage Debug - ${expression}:\n${stack}`;
    });
}
function assertPostpone() {
    if (!hasPostpone) {
        throw new Error(`Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js`);
    }
}
function createPostponedAbortSignal(reason) {
    assertPostpone();
    const controller = new AbortController();
    // We get our hands on a postpone instance by calling postpone and catching the throw
    try {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$react$2e$react$2d$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].unstable_postpone(reason);
    } catch (x) {
        controller.abort(x);
    }
    return controller.signal;
}
function annotateDynamicAccess(expression, prerenderStore) {
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
}
function useDynamicRouteParams(expression) {
    if ("TURBOPACK compile-time truthy", 1) {
        const workStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$export__workAsyncStorageInstance__as__workAsyncStorage$3e$__["workAsyncStorage"].getStore();
        if (workStore && workStore.isStaticGeneration && workStore.fallbackRouteParams && workStore.fallbackRouteParams.size > 0) {
            // There are fallback route params, we should track these as dynamic
            // accesses.
            const workUnitStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$export__workUnitAsyncStorageInstance__as__workUnitAsyncStorage$3e$__["workUnitAsyncStorage"].getStore();
            if (workUnitStore) {
                // We're prerendering with dynamicIO or PPR or both
                if (workUnitStore.type === 'prerender') {
                    // We are in a prerender with dynamicIO semantics
                    // We are going to hang here and never resolve. This will cause the currently
                    // rendering component to effectively be a dynamic hole
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$react$2e$react$2d$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].use((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["makeHangingPromise"])(workUnitStore.renderSignal, expression));
                } else if (workUnitStore.type === 'prerender-ppr') {
                    // We're prerendering with PPR
                    postponeWithTracking(workStore.route, expression, workUnitStore.dynamicTracking);
                } else if (workUnitStore.type === 'prerender-legacy') {
                    throwToInterruptStaticGeneration(expression, workStore, workUnitStore);
                }
            }
        }
    }
}
const hasSuspenseRegex = /\n\s+at Suspense \(<anonymous>\)/;
const hasMetadataRegex = new RegExp(`\\n\\s+at ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$metadata$2d$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["METADATA_BOUNDARY_NAME"]}[\\n\\s]`);
const hasViewportRegex = new RegExp(`\\n\\s+at ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$metadata$2d$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["VIEWPORT_BOUNDARY_NAME"]}[\\n\\s]`);
const hasOutletRegex = new RegExp(`\\n\\s+at ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$metadata$2d$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["OUTLET_BOUNDARY_NAME"]}[\\n\\s]`);
function trackAllowedDynamicAccess(route, componentStack, dynamicValidation, serverDynamic, clientDynamic) {
    if (hasOutletRegex.test(componentStack)) {
        // We don't need to track that this is dynamic. It is only so when something else is also dynamic.
        return;
    } else if (hasMetadataRegex.test(componentStack)) {
        dynamicValidation.hasDynamicMetadata = true;
        return;
    } else if (hasViewportRegex.test(componentStack)) {
        dynamicValidation.hasDynamicViewport = true;
        return;
    } else if (hasSuspenseRegex.test(componentStack)) {
        dynamicValidation.hasSuspendedDynamic = true;
        return;
    } else if (serverDynamic.syncDynamicErrorWithStack || clientDynamic.syncDynamicErrorWithStack) {
        dynamicValidation.hasSyncDynamicErrors = true;
        return;
    } else {
        const message = `Route "${route}": A component accessed data, headers, params, searchParams, or a short-lived cache without a Suspense boundary nor a "use cache" above it. We don't have the exact line number added to error messages yet but you can see which component in the stack below. See more info: https://nextjs.org/docs/messages/next-prerender-missing-suspense`;
        const error = createErrorWithComponentStack(message, componentStack);
        dynamicValidation.dynamicErrors.push(error);
        return;
    }
}
function createErrorWithComponentStack(message, componentStack) {
    const error = new Error(message);
    error.stack = 'Error: ' + message + componentStack;
    return error;
}
function throwIfDisallowedDynamic(route, dynamicValidation, serverDynamic, clientDynamic) {
    let syncError;
    let syncExpression;
    let syncLogged;
    if (serverDynamic.syncDynamicErrorWithStack) {
        syncError = serverDynamic.syncDynamicErrorWithStack;
        syncExpression = serverDynamic.syncDynamicExpression;
        syncLogged = serverDynamic.syncDynamicLogged === true;
    } else if (clientDynamic.syncDynamicErrorWithStack) {
        syncError = clientDynamic.syncDynamicErrorWithStack;
        syncExpression = clientDynamic.syncDynamicExpression;
        syncLogged = clientDynamic.syncDynamicLogged === true;
    } else {
        syncError = null;
        syncExpression = undefined;
        syncLogged = false;
    }
    if (dynamicValidation.hasSyncDynamicErrors && syncError) {
        if (!syncLogged) {
            // In dev we already log errors about sync dynamic access. But during builds we need to ensure
            // the offending sync error is logged before we exit the build
            console.error(syncError);
        }
        // The actual error should have been logged when the sync access ocurred
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["StaticGenBailoutError"]();
    }
    const dynamicErrors = dynamicValidation.dynamicErrors;
    if (dynamicErrors.length) {
        for(let i = 0; i < dynamicErrors.length; i++){
            console.error(dynamicErrors[i]);
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["StaticGenBailoutError"]();
    }
    if (!dynamicValidation.hasSuspendedDynamic) {
        if (dynamicValidation.hasDynamicMetadata) {
            if (syncError) {
                console.error(syncError);
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["StaticGenBailoutError"](`Route "${route}" has a \`generateMetadata\` that could not finish rendering before ${syncExpression} was used. Follow the instructions in the error for this expression to resolve.`);
            }
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["StaticGenBailoutError"](`Route "${route}" has a \`generateMetadata\` that depends on Request data (\`cookies()\`, etc...) or external data (\`fetch(...)\`, etc...) but the rest of the route was static or only used cached data (\`"use cache"\`). If you expected this route to be prerenderable update your \`generateMetadata\` to not use Request data and only use cached external data. Otherwise, add \`await connection()\` somewhere within this route to indicate explicitly it should not be prerendered.`);
        } else if (dynamicValidation.hasDynamicViewport) {
            if (syncError) {
                console.error(syncError);
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["StaticGenBailoutError"](`Route "${route}" has a \`generateViewport\` that could not finish rendering before ${syncExpression} was used. Follow the instructions in the error for this expression to resolve.`);
            }
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["StaticGenBailoutError"](`Route "${route}" has a \`generateViewport\` that depends on Request data (\`cookies()\`, etc...) or external data (\`fetch(...)\`, etc...) but the rest of the route was static or only used cached data (\`"use cache"\`). If you expected this route to be prerenderable update your \`generateViewport\` to not use Request data and only use cached external data. Otherwise, add \`await connection()\` somewhere within this route to indicate explicitly it should not be prerendered.`);
        }
    }
} //# sourceMappingURL=dynamic-rendering.js.map
}}),
"[project]/node_modules/next/dist/esm/server/request/utils.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "describeHasCheckingStringProperty": (()=>describeHasCheckingStringProperty),
    "describeStringPropertyAccess": (()=>describeStringPropertyAccess),
    "isRequestAPICallableInsideAfter": (()=>isRequestAPICallableInsideAfter),
    "throwWithStaticGenerationBailoutError": (()=>throwWithStaticGenerationBailoutError),
    "throwWithStaticGenerationBailoutErrorWithDynamicError": (()=>throwWithStaticGenerationBailoutErrorWithDynamicError),
    "wellKnownProperties": (()=>wellKnownProperties)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/client/components/static-generation-bailout.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$after$2d$task$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/app-render/after-task-async-storage.external.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$after$2d$task$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$export__afterTaskAsyncStorageInstance__as__afterTaskAsyncStorage$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/app-render/after-task-async-storage-instance.js [middleware] (ecmascript) <export afterTaskAsyncStorageInstance as afterTaskAsyncStorage>");
;
;
// This regex will have fast negatives meaning valid identifiers may not pass
// this test. However this is only used during static generation to provide hints
// about why a page bailed out of some or all prerendering and we can use bracket notation
// for example while `ಠ_ಠ` is a valid identifier it's ok to print `searchParams['ಠ_ಠ']`
// even if this would have been fine too `searchParams.ಠ_ಠ`
const isDefinitelyAValidIdentifier = /^[A-Za-z_$][A-Za-z0-9_$]*$/;
function describeStringPropertyAccess(target, prop) {
    if (isDefinitelyAValidIdentifier.test(prop)) {
        return `\`${target}.${prop}\``;
    }
    return `\`${target}[${JSON.stringify(prop)}]\``;
}
function describeHasCheckingStringProperty(target, prop) {
    const stringifiedProp = JSON.stringify(prop);
    return `\`Reflect.has(${target}, ${stringifiedProp})\`, \`${stringifiedProp} in ${target}\`, or similar`;
}
function throwWithStaticGenerationBailoutError(route, expression) {
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["StaticGenBailoutError"](`Route ${route} couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`);
}
function throwWithStaticGenerationBailoutErrorWithDynamicError(route, expression) {
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["StaticGenBailoutError"](`Route ${route} with \`dynamic = "error"\` couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`);
}
function isRequestAPICallableInsideAfter() {
    const afterTaskStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$after$2d$task$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$export__afterTaskAsyncStorageInstance__as__afterTaskAsyncStorage$3e$__["afterTaskAsyncStorage"].getStore();
    return (afterTaskStore == null ? void 0 : afterTaskStore.rootTaskSpawnPhase) === 'action';
}
const wellKnownProperties = new Set([
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toString',
    'valueOf',
    'toLocaleString',
    // Promise prototype
    // fallthrough
    'then',
    'catch',
    'finally',
    // React Promise extension
    // fallthrough
    'status',
    // React introspection
    'displayName',
    // Common tested properties
    // fallthrough
    'toJSON',
    '$$typeof',
    '__esModule'
]); //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/next/dist/esm/server/request/connection.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "connection": (()=>connection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/app-render/work-async-storage.external.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/app-render/work-unit-async-storage.external.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/app-render/dynamic-rendering.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/client/components/static-generation-bailout.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/dynamic-rendering-utils.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/request/utils.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$export__workAsyncStorageInstance__as__workAsyncStorage$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/app-render/work-async-storage-instance.js [middleware] (ecmascript) <export workAsyncStorageInstance as workAsyncStorage>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$export__workUnitAsyncStorageInstance__as__workUnitAsyncStorage$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/app-render/work-unit-async-storage-instance.js [middleware] (ecmascript) <export workUnitAsyncStorageInstance as workUnitAsyncStorage>");
;
;
;
;
;
;
function connection() {
    const workStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$export__workAsyncStorageInstance__as__workAsyncStorage$3e$__["workAsyncStorage"].getStore();
    const workUnitStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$export__workUnitAsyncStorageInstance__as__workUnitAsyncStorage$3e$__["workUnitAsyncStorage"].getStore();
    if (workStore) {
        if (workUnitStore && workUnitStore.phase === 'after' && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["isRequestAPICallableInsideAfter"])()) {
            throw new Error(`Route ${workStore.route} used "connection" inside "after(...)". The \`connection()\` function is used to indicate the subsequent code must only run when there is an actual Request, but "after(...)" executes after the request, so this function is not allowed in this scope. See more info here: https://nextjs.org/docs/canary/app/api-reference/functions/after`);
        }
        if (workStore.forceStatic) {
            // When using forceStatic we override all other logic and always just return an empty
            // headers object without tracking
            return Promise.resolve(undefined);
        }
        if (workUnitStore) {
            if (workUnitStore.type === 'cache') {
                throw new Error(`Route ${workStore.route} used "connection" inside "use cache". The \`connection()\` function is used to indicate the subsequent code must only run when there is an actual Request, but caches must be able to be produced before a Request so this function is not allowed in this scope. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`);
            } else if (workUnitStore.type === 'unstable-cache') {
                throw new Error(`Route ${workStore.route} used "connection" inside a function cached with "unstable_cache(...)". The \`connection()\` function is used to indicate the subsequent code must only run when there is an actual Request, but caches must be able to be produced before a Request so this function is not allowed in this scope. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`);
            }
        }
        if (workStore.dynamicShouldError) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["StaticGenBailoutError"](`Route ${workStore.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`connection\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`);
        }
        if (workUnitStore) {
            if (workUnitStore.type === 'prerender') {
                // dynamicIO Prerender
                // We return a promise that never resolves to allow the prender to stall at this point
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["makeHangingPromise"])(workUnitStore.renderSignal, '`connection()`');
            } else if (workUnitStore.type === 'prerender-ppr') {
                // PPR Prerender (no dynamicIO)
                // We use React's postpone API to interrupt rendering here to create a dynamic hole
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["postponeWithTracking"])(workStore.route, 'connection', workUnitStore.dynamicTracking);
            } else if (workUnitStore.type === 'prerender-legacy') {
                // Legacy Prerender
                // We throw an error here to interrupt prerendering to mark the route as dynamic
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["throwToInterruptStaticGeneration"])('connection', workStore, workUnitStore);
            }
        }
        // We fall through to the dynamic context below but we still track dynamic access
        // because in dev we can still error for things like using headers inside a cache context
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["trackDynamicDataInDynamicRender"])(workStore, workUnitStore);
    }
    return Promise.resolve(undefined);
} //# sourceMappingURL=connection.js.map
}}),
"[project]/node_modules/next/dist/esm/server/web/exports/index.js [middleware] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// Alias index file of next/server for edge runtime for tree-shaking purpose
__turbopack_esm__({});
;
;
;
;
;
;
;
 //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/next/dist/esm/server/web/exports/index.js [middleware] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$image$2d$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/spec-extension/image-response.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$request$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/spec-extension/request.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$user$2d$agent$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/spec-extension/user-agent.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$url$2d$pattern$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/spec-extension/url-pattern.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$after$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/after/index.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$connection$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/request/connection.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/exports/index.js [middleware] (ecmascript) <locals>");
}}),
"[project]/node_modules/next/dist/esm/api/server.js [middleware] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
 //# sourceMappingURL=server.js.map
}}),
"[project]/node_modules/next/dist/esm/api/server.js [middleware] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/exports/index.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/api/server.js [middleware] (ecmascript) <locals>");
}}),
"[project]/node_modules/@wix/sdk/build/nanoevents.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// Inlined from https://github.com/ai/nanoevents/blob/main/index.js
/**
 * Create event emitter.
 *
 * ```js
 * import { createNanoEvents } from 'nanoevents'
 *
 * class Ticker {
 * constructor() {
 * this.emitter = createNanoEvents()
 * }
 * on(...args) {
 * return this.emitter.on(...args)
 * }
 * tick() {
 * this.emitter.emit('tick')
 * }
 * }
 * ```
 * @returns Event emitter.
 */ __turbopack_esm__({
    "createNanoEvents": (()=>createNanoEvents)
});
function createNanoEvents() {
    return {
        emit (event, ...args) {
            for(let i = 0, callbacks = this.events[event] || [], length = callbacks.length; i < length; i++){
                callbacks[i](...args);
            }
        },
        events: {},
        on (event, cb) {
            (this.events[event] ||= []).push(cb);
            return ()=>{
                this.events[event] = this.events[event]?.filter((i)=>cb !== i);
            };
        }
    };
}
}}),
"[project]/node_modules/@wix/sdk/build/service-plugin-modules.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "isServicePluginModule": (()=>isServicePluginModule),
    "servicePluginsModules": (()=>servicePluginsModules)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$nanoevents$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk/build/nanoevents.js [middleware] (ecmascript)");
;
const isServicePluginModule = (val)=>val.__type === 'service-plugin-definition';
function servicePluginsModules(authStrategy) {
    const servicePluginsImplementations = new Map();
    const servicePluginsEmitter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$nanoevents$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createNanoEvents"])();
    const client = {
        ...servicePluginsEmitter,
        getRegisteredServicePlugins: ()=>servicePluginsImplementations,
        async parseJWT (jwt) {
            if (!authStrategy.decodeJWT) {
                throw new Error('decodeJWT is not supported by the authentication strategy');
            }
            const { decoded, valid } = await authStrategy.decodeJWT(jwt, true);
            if (!valid) {
                throw new Error('JWT is not valid');
            }
            if (typeof decoded.data !== 'object' || decoded.data === null || !('metadata' in decoded.data) || typeof decoded.data.metadata !== 'object' || decoded.data.metadata === null || !('appExtensionType' in decoded.data.metadata) || typeof decoded.data.metadata.appExtensionType !== 'string') {
                throw new Error('Unexpected JWT data: expected object with metadata.appExtensionType string');
            }
            return decoded.data;
        },
        async process (request) {
            const servicePluginRequest = await this.parseJWT(request.body);
            return this.executeHandler(servicePluginRequest, request.url);
        },
        async parseRequest (request) {
            const body = await request.text();
            return this.parseJWT(body);
        },
        async processRequest (request) {
            const url = request.url;
            const body = await request.text();
            try {
                const implMethodResult = await this.process({
                    url,
                    body
                });
                return Response.json(implMethodResult);
            } catch (err) {
                if (err.errorType === 'SPI' && err.applicationCode && err.httpCode) {
                    return Response.json({
                        applicationError: {
                            code: err.applicationCode,
                            data: err.data
                        }
                    }, {
                        status: err.httpCode
                    });
                }
                throw err;
            }
        },
        async executeHandler (servicePluginRequest, url) {
            const componentType = servicePluginRequest.metadata.appExtensionType.toLowerCase();
            const implementations = servicePluginsImplementations.get(componentType) ?? [];
            if (implementations.length === 0) {
                throw new Error(`No service plugin implementations found for component type ${componentType}`);
            } else if (implementations.length > 1) {
                throw new Error(`Multiple service plugin implementations found for component type ${componentType}. This is currently not supported`);
            }
            const { implementation: impl, servicePluginDefinition } = implementations[0];
            const method = servicePluginDefinition.methods.find((m)=>url.endsWith(m.primaryHttpMappingPath));
            if (!method) {
                throw new Error('Unexpect request: request url did not match any method: ' + url);
            }
            const implMethod = impl[method.name];
            if (!implMethod) {
                throw new Error(`Got request for service plugin method ${method.name} but no implementation was provided. Available methods: ${Object.keys(impl).join(', ')}`);
            }
            return method.transformations.toREST(await implMethod(method.transformations.fromREST(servicePluginRequest)));
        }
    };
    return {
        initModule (servicePluginDefinition) {
            return (implementation)=>{
                const implementations = servicePluginsImplementations.get(servicePluginDefinition.componentType.toLowerCase()) ?? [];
                implementations.push({
                    servicePluginDefinition,
                    implementation
                });
                servicePluginsImplementations.set(servicePluginDefinition.componentType.toLowerCase(), implementations);
                servicePluginsEmitter.emit('registered', servicePluginDefinition);
            };
        },
        client
    };
}
}}),
"[project]/node_modules/@wix/sdk-types/build/browser/index.mjs [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// src/event-handlers-modules.ts
__turbopack_esm__({
    "EventDefinition": (()=>EventDefinition),
    "SERVICE_PLUGIN_ERROR_TYPE": (()=>SERVICE_PLUGIN_ERROR_TYPE),
    "ServicePluginDefinition": (()=>ServicePluginDefinition)
});
function EventDefinition(type, isDomainEvent = false, transformations = (x)=>x) {
    return ()=>({
            __type: "event-definition",
            type,
            isDomainEvent,
            transformations
        });
}
// src/service-plugins.ts
function ServicePluginDefinition(componentType, methods) {
    return {
        __type: "service-plugin-definition",
        componentType,
        methods
    };
}
var SERVICE_PLUGIN_ERROR_TYPE = "wix_spi_error";
;
}}),
"[project]/node_modules/@wix/sdk/build/event-handlers-modules.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "buildEventDefinition": (()=>buildEventDefinition),
    "eventHandlersModules": (()=>eventHandlersModules),
    "isEventHandlerModule": (()=>isEventHandlerModule)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$nanoevents$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk/build/nanoevents.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$types$2f$build$2f$browser$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk-types/build/browser/index.mjs [middleware] (ecmascript)");
;
;
const isEventHandlerModule = (val)=>val.__type === 'event-definition';
function buildEventDefinition(eventDefinition, registerHandler) {
    return (handler)=>{
        registerHandler(eventDefinition, handler);
    };
}
function runHandler(eventDefinition, handler, payload, baseEventMetadata) {
    let envelope;
    if (eventDefinition.isDomainEvent) {
        const domainEventPayload = payload;
        const { deletedEvent, actionEvent, createdEvent, updatedEvent, ...domainEventMetadata } = domainEventPayload;
        const metadata = {
            ...baseEventMetadata,
            ...domainEventMetadata
        };
        if (deletedEvent) {
            if (deletedEvent?.deletedEntity) {
                envelope = {
                    entity: deletedEvent?.deletedEntity,
                    metadata
                };
            } else {
                envelope = {
                    metadata
                };
            }
        } else if (actionEvent) {
            envelope = {
                data: actionEvent.body,
                metadata
            };
        } else {
            envelope = {
                entity: createdEvent?.entity ?? updatedEvent?.currentEntity,
                metadata
            };
        }
    } else {
        envelope = {
            data: payload,
            metadata: baseEventMetadata
        };
    }
    const transformFromRESTFn = eventDefinition.transformations ?? ((x)=>x);
    return handler(transformFromRESTFn(envelope));
}
function eventHandlersModules(authStrategy) {
    const eventHandlers = new Map();
    const webhooksEmitter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$nanoevents$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createNanoEvents"])();
    const client = {
        ...webhooksEmitter,
        getRegisteredEvents: ()=>eventHandlers,
        async process (jwt, opts = {
            expectedEvents: []
        }) {
            const { eventType, identity, instanceId, payload } = await this.parseJWT(jwt);
            const allExpectedEvents = [
                ...opts.expectedEvents,
                ...Array.from(eventHandlers.keys()).map((type)=>({
                        type
                    }))
            ];
            if (allExpectedEvents.length > 0 && !allExpectedEvents.some(({ type })=>type === eventType)) {
                throw new Error(`Unexpected event type: ${eventType}. Expected one of: ${allExpectedEvents.map((x)=>x.type).join(', ')}`);
            }
            const handlers = eventHandlers.get(eventType) ?? [];
            await Promise.all(handlers.map(({ eventDefinition, handler })=>runHandler(eventDefinition, handler, payload, {
                    instanceId,
                    identity
                })));
            return {
                instanceId,
                eventType,
                payload,
                identity
            };
        },
        async processRequest (request, opts) {
            const body = await request.text();
            return this.process(body, opts);
        },
        async parseJWT (jwt) {
            if (!authStrategy.decodeJWT) {
                throw new Error('decodeJWT is not supported by the authentication strategy');
            }
            const { decoded, valid } = await authStrategy.decodeJWT(jwt);
            if (!valid) {
                throw new Error('JWT is not valid');
            }
            if (typeof decoded.data !== 'string') {
                throw new Error(`Unexpected type of JWT data: expected string, got ${typeof decoded.data}`);
            }
            const parsedDecoded = JSON.parse(decoded.data);
            const eventType = parsedDecoded.eventType;
            const instanceId = parsedDecoded.instanceId;
            const identity = parsedDecoded.identity ? JSON.parse(parsedDecoded.identity) : undefined;
            const payload = JSON.parse(parsedDecoded.data);
            return {
                instanceId,
                eventType,
                payload,
                identity
            };
        },
        async parseRequest (request) {
            const jwt = await request.text();
            return this.parseJWT(jwt);
        },
        async executeHandlers (event) {
            const allExpectedEvents = Array.from(eventHandlers.keys()).map((type)=>({
                    type
                }));
            if (allExpectedEvents.length > 0 && !allExpectedEvents.some(({ type })=>type === event.eventType)) {
                throw new Error(`Unexpected event type: ${event.eventType}. Expected one of: ${allExpectedEvents.map((x)=>x.type).join(', ')}`);
            }
            const handlers = eventHandlers.get(event.eventType) ?? [];
            await Promise.all(handlers.map(({ eventDefinition, handler })=>runHandler(eventDefinition, handler, event.payload, {
                    instanceId: event.instanceId,
                    identity: event.identity
                })));
        },
        apps: {
            AppInstalled: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$types$2f$build$2f$browser$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["EventDefinition"])('AppInstalled')(),
            AppRemoved: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$types$2f$build$2f$browser$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["EventDefinition"])('AppRemoved')()
        }
    };
    return {
        initModule (eventDefinition) {
            return (handler)=>{
                const handlers = eventHandlers.get(eventDefinition.type) ?? [];
                handlers.push({
                    eventDefinition,
                    handler
                });
                eventHandlers.set(eventDefinition.type, handlers);
                webhooksEmitter.emit('registered', eventDefinition);
            };
        },
        client
    };
}
}}),
"[project]/node_modules/@wix/sdk/build/helpers.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// we follow a simplified version of the axios convention
// https://github.com/axios/axios/blob/649d739288c8e2c55829ac60e2345a0f3439c730/lib/defaults/index.js#L65
__turbopack_esm__({
    "getDefaultContentHeader": (()=>getDefaultContentHeader),
    "isObject": (()=>isObject),
    "parsePublicKeyIfEncoded": (()=>parsePublicKeyIfEncoded)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__ = __turbopack_import__("[externals]/node:buffer [external] (node:buffer, cjs)");
const getDefaultContentHeader = (options)=>{
    if (options?.method && [
        'post',
        'put',
        'patch'
    ].includes(options.method.toLocaleLowerCase()) && options.body) {
        return {
            'Content-Type': 'application/json'
        };
    }
    return {};
};
const isObject = (val)=>val && typeof val === 'object' && !Array.isArray(val);
function parsePublicKeyIfEncoded(publicKey) {
    if (publicKey.includes('\n') || publicKey.includes('\r')) {
        // publicKey is multi-line string, can be used as is
        return publicKey.trim();
    } else {
        // publicKey is base64 encoded
        return typeof atob !== 'undefined' ? atob(publicKey) : __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].from(publicKey, 'base64').toString('utf-8');
    }
}
}}),
"[project]/node_modules/@wix/sdk/build/host-modules.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "buildHostModule": (()=>buildHostModule),
    "isHostModule": (()=>isHostModule)
});
const isHostModule = (val)=>val.__type === 'host';
function buildHostModule(val, host) {
    return val.create(host);
}
}}),
"[project]/node_modules/@wix/sdk/build/common.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "DEFAULT_API_URL": (()=>DEFAULT_API_URL),
    "FORCE_WRITE_API_URLS": (()=>FORCE_WRITE_API_URLS),
    "PUBLIC_METADATA_KEY": (()=>PUBLIC_METADATA_KEY)
});
const PUBLIC_METADATA_KEY = '__metadata';
const DEFAULT_API_URL = 'www.wixapis.com';
const FORCE_WRITE_API_URLS = [
    '/ecom/v1/carts/current'
];
}}),
"[project]/node_modules/@wix/sdk-context/build/browser/index.mjs [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// src/index.ts
__turbopack_esm__({
    "wixContext": (()=>wixContext)
});
var wixContext = {};
;
}}),
"[project]/node_modules/@wix/sdk-runtime/build/context.js [middleware] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "contextualizeEventDefinitionModule": (()=>contextualizeEventDefinitionModule),
    "contextualizeHostModule": (()=>contextualizeHostModule),
    "contextualizeRESTModule": (()=>contextualizeRESTModule),
    "contextualizeSerivcePluginModule": (()=>contextualizeSerivcePluginModule),
    "resolveContext": (()=>resolveContext),
    "runWithoutContext": (()=>runWithoutContext)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$context$2f$build$2f$browser$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk-context/build/browser/index.mjs [middleware] (ecmascript)");
;
function resolveContext() {
    const oldContext = typeof $wixContext !== 'undefined' && $wixContext.initWixModules ? $wixContext.initWixModules : typeof globalThis.__wix_context__ !== 'undefined' && globalThis.__wix_context__.initWixModules ? globalThis.__wix_context__.initWixModules : undefined;
    if (oldContext) {
        return {
            // @ts-expect-error
            initWixModules (modules, elevated) {
                return runWithoutContext(()=>oldContext(modules, elevated));
            },
            fetchWithAuth () {
                throw new Error('fetchWithAuth is not available in this context');
            },
            graphql () {
                throw new Error('graphql is not available in this context');
            }
        };
    }
    const contextualClient = typeof $wixContext !== 'undefined' ? $wixContext.client : typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$context$2f$build$2f$browser$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["wixContext"].client !== 'undefined' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$context$2f$build$2f$browser$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["wixContext"].client : typeof globalThis.__wix_context__ !== 'undefined' ? globalThis.__wix_context__.client : undefined;
    const elevatedClient = typeof $wixContext !== 'undefined' ? $wixContext.elevatedClient : typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$context$2f$build$2f$browser$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["wixContext"].elevatedClient !== 'undefined' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$context$2f$build$2f$browser$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["wixContext"].elevatedClient : typeof globalThis.__wix_context__ !== 'undefined' ? globalThis.__wix_context__.elevatedClient : undefined;
    if (!contextualClient && !elevatedClient) {
        return;
    }
    return {
        initWixModules (wixModules, elevated) {
            if (elevated) {
                if (!elevatedClient) {
                    throw new Error('An elevated client is required to use elevated modules. Make sure to initialize the Wix context with an elevated client before using elevated SDK modules');
                }
                return runWithoutContext(()=>elevatedClient.use(wixModules));
            }
            if (!contextualClient) {
                throw new Error('Wix context is not available. Make sure to initialize the Wix context before using SDK modules');
            }
            return runWithoutContext(()=>contextualClient.use(wixModules));
        },
        fetchWithAuth: (urlOrRequest, requestInit)=>{
            if (!contextualClient) {
                throw new Error('Wix context is not available. Make sure to initialize the Wix context before using SDK modules');
            }
            return contextualClient.fetchWithAuth(urlOrRequest, requestInit);
        },
        async graphql (query, variables, opts) {
            if (!contextualClient) {
                throw new Error('Wix context is not available. Make sure to initialize the Wix context before using SDK modules');
            }
            return contextualClient.graphql(query, variables, opts);
        }
    };
}
function contextualizeHostModule(hostModule, prop) {
    return (...args)=>{
        const context = resolveContext();
        if (!context) {
            throw new Error('Wix context is not available. Make sure to initialize the Wix context before using SDK modules');
        }
        return context.initWixModules(hostModule)[prop].apply(undefined, args);
    };
}
function contextualizeRESTModule(restModule, expectedArgsLength) {
    return (...args)=>{
        const context = resolveContext();
        if (!context) {
            throw new Error('Wix context is not available. Make sure to initialize the Wix context before using SDK modules');
        }
        return context.initWixModules(restModule, args[expectedArgsLength]?.suppressAuth ? true : false).apply(undefined, args);
    };
}
function contextualizeEventDefinitionModule(eventDefinition) {
    return (...args)=>{
        const context = resolveContext();
        if (!context) {
            throw new Error('Wix context is not available. Make sure to initialize the Wix context before using SDK modules');
        }
        return context.initWixModules(eventDefinition).apply(undefined, args);
    };
}
function contextualizeSerivcePluginModule(servicePlugin) {
    return (...args)=>{
        const context = resolveContext();
        if (!context) {
            throw new Error('Wix context is not available. Make sure to initialize the Wix context before using SDK modules');
        }
        return context.initWixModules(servicePlugin).apply(undefined, args);
    };
}
;
function runWithoutContext(fn) {
    const globalContext = globalThis.__wix_context__;
    const moduleContext = {
        client: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$context$2f$build$2f$browser$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["wixContext"].client,
        elevatedClient: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$context$2f$build$2f$browser$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["wixContext"].elevatedClient
    };
    let closureContext;
    globalThis.__wix_context__ = undefined;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$context$2f$build$2f$browser$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["wixContext"].client = undefined;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$context$2f$build$2f$browser$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["wixContext"].elevatedClient = undefined;
    if (typeof $wixContext !== 'undefined') {
        closureContext = {
            client: $wixContext?.client,
            elevatedClient: $wixContext?.elevatedClient
        };
        delete $wixContext.client;
        delete $wixContext.elevatedClient;
    }
    try {
        return fn();
    } finally{
        globalThis.__wix_context__ = globalContext;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$context$2f$build$2f$browser$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["wixContext"].client = moduleContext.client;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$context$2f$build$2f$browser$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["wixContext"].elevatedClient = moduleContext.elevatedClient;
        if (typeof $wixContext !== 'undefined') {
            $wixContext.client = closureContext.client;
            $wixContext.elevatedClient = closureContext.elevatedClient;
        }
    }
}
}}),
"[project]/node_modules/@wix/sdk/build/bi/biHeaderGenerator.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "WixBIHeaderName": (()=>WixBIHeaderName),
    "biHeaderGenerator": (()=>biHeaderGenerator)
});
const WixBIHeaderName = 'x-wix-bi-gateway';
function biHeaderGenerator(apiMetadata, publicMetadata, environment) {
    return {
        [WixBIHeaderName]: objectToKeyValue({
            environment: `js-sdk${environment ? `-${environment}` : ``}`,
            'package-name': apiMetadata.packageName ?? publicMetadata?.PACKAGE_NAME,
            'method-fqn': apiMetadata.methodFqn,
            entity: apiMetadata.entityFqdn
        })
    };
}
function objectToKeyValue(input) {
    return Object.entries(input).filter(([_, value])=>Boolean(value)).map(([key, value])=>`${key}=${value}`).join(',');
}
}}),
"[project]/node_modules/@wix/sdk/build/rest-modules.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "buildRESTDescriptor": (()=>buildRESTDescriptor)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@wix/sdk-runtime/build/context.js [middleware] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$common$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk/build/common.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$bi$2f$biHeaderGenerator$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk/build/bi/biHeaderGenerator.js [middleware] (ecmascript)");
;
;
;
function buildRESTDescriptor(origFunc, publicMetadata, boundFetch, wixAPIFetch, getActiveToken, options, hostName) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["runWithoutContext"])(()=>origFunc({
            request: async (factory)=>{
                const requestOptions = factory({
                    host: options?.HTTPHost || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$common$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["DEFAULT_API_URL"]
                });
                let request = requestOptions;
                if (request.method === 'GET' && request.fallback?.length && request.params.toString().length > 4000) {
                    request = requestOptions.fallback[0];
                }
                const domain = options?.HTTPHost ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$common$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["DEFAULT_API_URL"];
                let url = `https://${domain}${request.url}`;
                if (request.params && request.params.toString()) {
                    url += `?${request.params.toString()}`;
                }
                try {
                    const biHeader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$bi$2f$biHeaderGenerator$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["biHeaderGenerator"])(requestOptions, publicMetadata, hostName);
                    const res = await boundFetch(url, {
                        method: request.method,
                        ...request.data && {
                            body: JSON.stringify(request.data)
                        },
                        headers: {
                            ...biHeader
                        }
                    });
                    if (res.status !== 200) {
                        let dataError = null;
                        try {
                            dataError = await res.json();
                        } catch (e) {
                        //
                        }
                        throw errorBuilder(res.status, dataError?.message, dataError?.details, {
                            requestId: res.headers.get('X-Wix-Request-Id'),
                            details: dataError
                        });
                    }
                    const data = await res.json();
                    return {
                        data,
                        headers: res.headers,
                        status: res.status,
                        statusText: res.statusText
                    };
                } catch (e) {
                    if (e.message?.includes('fetch is not defined')) {
                        console.error('Node.js v18+ is required');
                    }
                    throw e;
                }
            },
            fetchWithAuth: boundFetch,
            wixAPIFetch,
            getActiveToken
        }));
}
const errorBuilder = (code, description, details, data)=>{
    return {
        response: {
            data: {
                details: {
                    ...!details?.validationError && {
                        applicationError: {
                            description,
                            code,
                            data
                        }
                    },
                    ...details
                },
                message: description
            },
            status: code
        }
    };
};
}}),
"[project]/node_modules/@wix/sdk/build/ambassador-modules.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "isAmbassadorModule": (()=>isAmbassadorModule),
    "toHTTPModule": (()=>toHTTPModule)
});
const parseMethod = (method)=>{
    switch(method){
        case 'get':
        case 'GET':
            return 'GET';
        case 'post':
        case 'POST':
            return 'POST';
        case 'put':
        case 'PUT':
            return 'PUT';
        case 'delete':
        case 'DELETE':
            return 'DELETE';
        case 'patch':
        case 'PATCH':
            return 'PATCH';
        case 'head':
        case 'HEAD':
            return 'HEAD';
        case 'options':
        case 'OPTIONS':
            return 'OPTIONS';
        default:
            throw new Error(`Unknown method: ${method}`);
    }
};
const toHTTPModule = (factory)=>(httpClient)=>async (payload)=>{
            let requestOptions;
            const HTTPFactory = (context)=>{
                requestOptions = factory(payload)(context);
                if (requestOptions.url === undefined) {
                    throw new Error('Url was not successfully created for this request, please reach out to support channels for assistance.');
                }
                const { method, url, params } = requestOptions;
                return {
                    ...requestOptions,
                    method: parseMethod(method),
                    url,
                    data: requestOptions.data,
                    params
                };
            };
            try {
                const response = await httpClient.request(HTTPFactory);
                if (requestOptions === undefined) {
                    throw new Error('Request options were not created for this request, please reach out to support channels for assistance.');
                }
                const transformations = Array.isArray(requestOptions.transformResponse) ? requestOptions.transformResponse : [
                    requestOptions.transformResponse
                ];
                /**
         * Based on Axios implementation:
         * https://github.com/axios/axios/blob/3f53eb6960f05a1f88409c4b731a40de595cb825/lib/core/transformData.js#L22
         */ let data = response.data;
                transformations.forEach((transform)=>{
                    if (transform) {
                        data = transform(response.data, response.headers);
                    }
                });
                return data;
            } catch (e) {
                if (typeof e === 'object' && e !== null && 'response' in e && typeof e.response === 'object' && e.response !== null && 'data' in e.response) {
                    throw e.response.data;
                }
                throw e;
            }
        };
const isAmbassadorModule = (module)=>{
    if (module.__isAmbassador) {
        return true;
    }
    const fn = module();
    return Boolean(fn.__isAmbassador);
};
}}),
"[project]/node_modules/@wix/sdk/build/fetch-error.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "FetchErrorResponse": (()=>FetchErrorResponse)
});
class FetchErrorResponse extends Error {
    message;
    response;
    constructor(message, response){
        super(message);
        this.message = message;
        this.response = response;
    }
    async details() {
        const dataError = await this.response.json();
        return errorBuilder(this.response.status, dataError?.message, dataError?.details, {
            requestId: this.response.headers.get('X-Wix-Request-Id'),
            details: dataError
        });
    }
}
const errorBuilder = (code, description, details, data)=>{
    return {
        details: {
            ...!details?.validationError && {
                applicationError: {
                    description,
                    code,
                    data
                }
            },
            ...details
        },
        message: description
    };
};
}}),
"[project]/node_modules/@wix/sdk/build/wixClient.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createClient": (()=>createClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$service$2d$plugin$2d$modules$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk/build/service-plugin-modules.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$event$2d$handlers$2d$modules$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk/build/event-handlers-modules.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$helpers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk/build/helpers.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$host$2d$modules$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk/build/host-modules.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$common$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk/build/common.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$types$2f$build$2f$browser$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk-types/build/browser/index.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$rest$2d$modules$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk/build/rest-modules.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@wix/sdk-runtime/build/context.js [middleware] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$ambassador$2d$modules$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk/build/ambassador-modules.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$context$2f$build$2f$browser$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk-context/build/browser/index.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$fetch$2d$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk/build/fetch-error.js [middleware] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
function createClient(config) {
    const _headers = config.headers || {
        Authorization: ''
    };
    const authStrategy = config.auth || {
        getAuthHeaders: (_)=>Promise.resolve({
                headers: {}
            })
    };
    const boundGetAuthHeaders = authStrategy.getAuthHeaders.bind(undefined, config.host);
    authStrategy.getAuthHeaders = boundGetAuthHeaders;
    const fetchWithAuth = async (urlOrRequest, requestInit)=>{
        if (typeof urlOrRequest === 'string' || urlOrRequest instanceof URL) {
            return fetch(urlOrRequest, {
                ...requestInit,
                headers: {
                    ...requestInit?.headers,
                    ...(await boundGetAuthHeaders()).headers
                }
            });
        } else {
            for (const [k, v] of Object.entries((await boundGetAuthHeaders()).headers)){
                urlOrRequest.headers.set(k, v);
            }
            return fetch(urlOrRequest, requestInit);
        }
    };
    const { client: servicePluginsClient, initModule: initServicePluginModule } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$service$2d$plugin$2d$modules$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["servicePluginsModules"])(authStrategy);
    const { client: eventHandlersClient, initModule: initEventHandlerModule } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$event$2d$handlers$2d$modules$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["eventHandlersModules"])(authStrategy);
    const boundFetch = async (url, options)=>{
        const authHeaders = await boundGetAuthHeaders();
        const defaultContentTypeHeader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$helpers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getDefaultContentHeader"])(options);
        return fetch(url, {
            ...options,
            headers: {
                ...defaultContentTypeHeader,
                ..._headers,
                ...authHeaders?.headers,
                ...options?.headers,
                ...config.host?.essentials?.passThroughHeaders
            }
        });
    };
    // This is typed as `any` because when trying to properly type it as defined
    // on the WixClient, typescript starts failing with `Type instantiation is
    // excessively deep and possibly infinite.`
    const use = (modules, metadata)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$event$2d$handlers$2d$modules$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["isEventHandlerModule"])(modules)) {
            return initEventHandlerModule(modules);
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$service$2d$plugin$2d$modules$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["isServicePluginModule"])(modules)) {
            return initServicePluginModule(modules);
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$host$2d$modules$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["isHostModule"])(modules) && config.host) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$host$2d$modules$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["buildHostModule"])(modules, config.host);
        } else if (typeof modules === 'function') {
            // The generated namespaces all have the error classes on them and
            // a class is also a function, so we need to explicitly ignore these
            // error classes using a static field that exists on them.
            if ('__type' in modules && modules.__type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$types$2f$build$2f$browser$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["SERVICE_PLUGIN_ERROR_TYPE"]) {
                return modules;
            }
            const apiBaseUrl = config.host?.apiBaseUrl ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$common$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["DEFAULT_API_URL"];
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$rest$2d$modules$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["buildRESTDescriptor"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["runWithoutContext"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$ambassador$2d$modules$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["isAmbassadorModule"])(modules)) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$ambassador$2d$modules$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["toHTTPModule"])(modules) : modules, metadata ?? {}, boundFetch, (relativeUrl, fetchOptions)=>{
                const finalUrl = new URL(relativeUrl, `https://${apiBaseUrl}`);
                finalUrl.host = apiBaseUrl;
                finalUrl.protocol = 'https';
                return boundFetch(finalUrl.toString(), fetchOptions);
            }, authStrategy.getActiveToken, {
                HTTPHost: apiBaseUrl
            }, config.host?.name);
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$helpers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["isObject"])(modules)) {
            return Object.fromEntries(Object.entries(modules).map(([key, value])=>{
                return [
                    key,
                    use(value, modules[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$common$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["PUBLIC_METADATA_KEY"]])
                ];
            }));
        } else {
            return modules;
        }
    };
    const setHeaders = (headers)=>{
        for(const k in headers){
            _headers[k] = headers[k];
        }
    };
    const wrappedModules = config.modules ? use(config.modules) : {};
    return {
        ...wrappedModules,
        auth: authStrategy,
        setHeaders,
        use,
        enableContext (contextType, opts = {
            elevated: false
        }) {
            if (contextType === 'global') {
                if (globalThis.__wix_context__ != null) {
                    if (opts.elevated) {
                        globalThis.__wix_context__.elevatedClient = this;
                    } else {
                        globalThis.__wix_context__.client = this;
                    }
                } else {
                    if (opts.elevated) {
                        globalThis.__wix_context__ = {
                            elevatedClient: this
                        };
                    } else {
                        globalThis.__wix_context__ = {
                            client: this
                        };
                    }
                }
            } else {
                if (opts.elevated) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$context$2f$build$2f$browser$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["wixContext"].elevatedClient = this;
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$context$2f$build$2f$browser$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["wixContext"].client = this;
                }
            }
        },
        /**
         * @param relativeUrl The URL to fetch relative to the API base URL
         * @param options The fetch options
         * @returns The fetch Response object
         * @deprecated Use `fetchWithAuth` instead
         */ fetch: (relativeUrl, options)=>{
            const apiBaseUrl = config.host?.apiBaseUrl ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$common$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["DEFAULT_API_URL"];
            const finalUrl = new URL(relativeUrl, `https://${apiBaseUrl}`);
            finalUrl.host = apiBaseUrl;
            finalUrl.protocol = 'https';
            return boundFetch(finalUrl.toString(), options);
        },
        fetchWithAuth,
        async graphql (query, variables, opts = {
            apiVersion: 'alpha'
        }) {
            const apiBaseUrl = config?.host?.apiBaseUrl ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$common$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["DEFAULT_API_URL"];
            const res = await boundFetch(`https://${apiBaseUrl}/graphql/${opts.apiVersion}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    query,
                    variables
                })
            });
            if (res.status !== 200) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$fetch$2d$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["FetchErrorResponse"](`GraphQL request failed with status ${res.status}`, res);
            }
            const { data, errors } = await res.json();
            return {
                data: data ?? {},
                errors
            };
        },
        webhooks: eventHandlersClient,
        servicePlugins: servicePluginsClient
    };
}
}}),
"[project]/node_modules/@wix/sdk-runtime/build/context-v2.js [middleware] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "contextualizeEventDefinitionModuleV2": (()=>contextualizeEventDefinitionModuleV2),
    "contextualizeHostModuleV2": (()=>contextualizeHostModuleV2),
    "contextualizeRESTModuleV2": (()=>contextualizeRESTModuleV2),
    "contextualizeSerivcePluginModuleV2": (()=>contextualizeSerivcePluginModuleV2)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@wix/sdk-runtime/build/context.js [middleware] (ecmascript) <locals>");
;
;
;
function contextualizeHostModuleV2(hostModule, props) {
    return {
        ...hostModule,
        ...Object.fromEntries(props.map((prop)=>[
                prop,
                (...args)=>{
                    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolveContext"])();
                    if (!context) {
                        throw new Error('Wix context is not available. Make sure to initialize the Wix context before using SDK modules');
                    }
                    return context.initWixModules(hostModule)[prop].apply(undefined, args);
                }
            ]))
    };
}
function contextualizeRESTModuleV2(restModule, elevated) {
    return (...args)=>{
        const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolveContext"])();
        if (!context) {
            // @ts-expect-error - if there is no context, we want to behave like the original module
            return restModule.apply(undefined, args);
        }
        return context.initWixModules(restModule, elevated)// @ts-expect-error - we know the args here are meant to be passed to the initalized module
        .apply(undefined, args);
    };
}
function contextualizeEventDefinitionModuleV2(eventDefinition) {
    const contextualMethod = (...args)=>{
        const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolveContext"])();
        if (!context) {
            // this line should throw, but this would be a breaking change for older SDK versions
            // this is because in wixClient there's code that calls any function it detects and checks
            // if it's an ambassador module (see isAmbassadorModule)
            return ()=>{};
        }
        return context.initWixModules(eventDefinition).apply(undefined, args);
    };
    contextualMethod.__type = eventDefinition.__type;
    contextualMethod.type = eventDefinition.type;
    contextualMethod.isDomainEvent = eventDefinition.isDomainEvent;
    contextualMethod.transformations = eventDefinition.transformations;
    return contextualMethod;
}
function contextualizeSerivcePluginModuleV2(servicePlugin) {
    const contextualMethod = (...args)=>{
        const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolveContext"])();
        if (!context) {
            // this line should throw, but this would be a breaking change for older SDK versions
            // this is because in wixClient there's code that calls any function it detects and checks
            // if it's an ambassador module (see isAmbassadorModule)
            return ()=>{};
        }
        return context.initWixModules(servicePlugin).apply(undefined, args);
    };
    contextualMethod.__type = servicePlugin.__type;
    contextualMethod.componentType = servicePlugin.componentType;
    contextualMethod.methods = servicePlugin.methods;
    return contextualMethod;
}
}}),
"[project]/node_modules/@wix/sdk-runtime/build/rest-modules.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createRESTModule": (()=>createRESTModule),
    "resolveUrl": (()=>resolveUrl),
    "toURLSearchParams": (()=>toURLSearchParams)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$context$2d$v2$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@wix/sdk-runtime/build/context-v2.js [middleware] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__ = __turbopack_import__("[externals]/node:buffer [external] (node:buffer, cjs)");
;
function createRESTModule(descriptor, elevated = false) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$context$2d$v2$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["contextualizeRESTModuleV2"])(descriptor, elevated);
}
function toURLSearchParams(params, isComplexRequest) {
    const flatten = flattenParams(params);
    const searchParams = Object.entries(flatten).reduce((urlSearchParams, [key, value])=>{
        // inorder to make `foo: [1,2]` turn into `foo=1&foo=2` and not `foo[]=1&foo[]=2`
        const keyParams = Array.isArray(value) ? value : [
            value
        ];
        keyParams.forEach((param)=>{
            if (param === undefined || param === null) {
                return;
            }
            urlSearchParams.append(key, param);
        });
        return urlSearchParams;
    }, new URLSearchParams());
    if (isComplexRequest) {
        searchParams.append('.r', base64Encode(JSON.stringify(params)));
    }
    return searchParams;
}
function resolveUrl(opts) {
    const domain = resolveDomain(opts.host);
    const mappings = resolveMappingsByDomain(domain, opts.domainToMappings);
    const path = injectDataIntoProtoPath(opts.protoPath, opts.data || {});
    return resolvePathFromMappings(path, mappings);
}
function flattenParams(data, path = '') {
    const params = {};
    Object.entries(data).forEach(([key, value])=>{
        const isObject = value !== null && typeof value === 'object' && !Array.isArray(value);
        const fieldPath = resolvePath(path, key);
        if (isObject) {
            const serializedObject = flattenParams(value, fieldPath);
            Object.assign(params, serializedObject);
        } else {
            params[fieldPath] = value;
        }
    });
    return params;
}
function resolvePath(path, key) {
    return `${path}${path ? '.' : ''}${key}`;
}
const base64Encode = (value)=>{
    const base64 = typeof btoa !== 'undefined' ? btoa(value) : __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].from(value, 'utf-8').toString('base64');
    return base64.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
};
const DOMAINS = [
    'wix.com',
    'editorx.com'
];
const USER_DOMAIN = '_';
const REGEX_CAPTURE_DOMAINS = new RegExp(`\\.(${DOMAINS.join('|')})$`);
const WIX_API_DOMAINS = [
    '42.wixprod.net',
    'uw2-edt-1.wixprod.net'
];
const DEV_WIX_CODE_DOMAIN = 'dev.wix-code.com';
const REGEX_CAPTURE_PROTO_FIELD = /{(.*)}/;
const REGEX_CAPTURE_API_DOMAINS = new RegExp(`\\.(${WIX_API_DOMAINS.join('|')})$`);
const REGEX_CAPTURE_DEV_WIX_CODE_DOMAIN = new RegExp(`.*\\.${DEV_WIX_CODE_DOMAIN}$`);
function resolveDomain(host) {
    const resolvedHost = fixHostExceptions(host);
    return resolvedHost.replace(REGEX_CAPTURE_DOMAINS, '._base_domain_').replace(REGEX_CAPTURE_API_DOMAINS, '._api_base_domain_').replace(REGEX_CAPTURE_DEV_WIX_CODE_DOMAIN, '*.dev.wix-code.com');
}
// hosts which standard string replacing doesn't apply to them, will be fixed here.
function fixHostExceptions(host) {
    // https://system-kb.wixanswers.com/kb/en/article/editorx-domains-matching-to-wixcom
    return host.replace('create.editorx.com', 'editor.editorx.com');
}
function resolveMappingsByDomain(domain, domainToMappings) {
    const mappings = domainToMappings[domain] || domainToMappings[USER_DOMAIN];
    if (!mappings) {
        if (isBaseDomain(domain)) {
            // fallback <lang>.wix.com sub domains to www.wix.com
            // since all of the languages subdomain are not mapped automatically in FP and we want to support those kind of calls
            // for example: fr.wix.com
            return domainToMappings[wwwBaseDomain];
        }
    }
    return mappings;
}
function isBaseDomain(domain) {
    return !!domain.match(/\._base_domain_$/);
}
const wwwBaseDomain = 'www._base_domain_';
function injectDataIntoProtoPath(protoPath, data) {
    return protoPath.split('/').map((path)=>maybeProtoPathToData(path, data)).join('/');
}
function maybeProtoPathToData(protoPath, data) {
    const protoRegExpMatch = protoPath.match(REGEX_CAPTURE_PROTO_FIELD) || [];
    const field = protoRegExpMatch[1];
    if (field) {
        const suffix = protoPath.replace(protoRegExpMatch[0], '');
        return findByPath(data, field, protoPath, suffix);
    }
    return protoPath;
}
function findByPath(obj, path, defaultValue, suffix) {
    let result = obj;
    for (const field of path.split('.')){
        if (!result) {
            return defaultValue;
        }
        result = result[field];
    }
    return `${result}${suffix}`;
}
function resolvePathFromMappings(protoPath, mappings) {
    const mapping = mappings?.find((m)=>protoPath.startsWith(m.destPath));
    if (!mapping) {
        // todo: should we return the path? if no - what should we do in case of testings?
        return protoPath;
    }
    return mapping.srcPath + protoPath.slice(mapping.destPath.length);
}
}}),
"[project]/node_modules/@wix/redirects_redirects/build/es/src/headless-v1-redirect-session-redirects.http.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createRedirectSession": (()=>createRedirectSession)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk-runtime/build/rest-modules.js [middleware] (ecmascript)");
;
function resolveWixHeadlessV1RedirectSessionServiceUrl(opts) {
    const domainToMappings = {
        'www._base_domain_': [
            {
                srcPath: '/_api/redirects-api',
                destPath: ''
            }
        ],
        'www.wixapis.com': [
            {
                srcPath: '/_api/redirects-api',
                destPath: ''
            },
            {
                srcPath: '/redirect-session',
                destPath: ''
            }
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["resolveUrl"])(Object.assign(opts, {
        domainToMappings
    }));
}
const PACKAGE_NAME = '@wix/redirects_redirects';
function createRedirectSession(payload) {
    function __createRedirectSession({ host }) {
        const metadata = {
            entityFqdn: 'wix.headless.v1.redirect_session',
            method: 'POST',
            methodFqn: 'wix.headless.v1.RedirectSessionService.CreateRedirectSession',
            packageName: PACKAGE_NAME,
            url: resolveWixHeadlessV1RedirectSessionServiceUrl({
                protoPath: '/v1/redirect-session',
                data: payload,
                host
            }),
            data: payload
        };
        return metadata;
    }
    return __createRedirectSession;
} //# sourceMappingURL=headless-v1-redirect-session-redirects.http.js.map
}}),
"[project]/node_modules/@wix/sdk-runtime/build/constants.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "DEFAULT_LIMIT": (()=>DEFAULT_LIMIT),
    "ITEMS_RESULT_PROPERTY_NAME": (()=>ITEMS_RESULT_PROPERTY_NAME),
    "PAGING_METADATA_RESULT_PROPERTY_NAME": (()=>PAGING_METADATA_RESULT_PROPERTY_NAME),
    "RESTResponseToSDKResponseRenameMap": (()=>RESTResponseToSDKResponseRenameMap),
    "SDKRequestToRESTRequestRenameMap": (()=>SDKRequestToRESTRequestRenameMap),
    "WIX_PROTOCOL": (()=>WIX_PROTOCOL)
});
const WIX_PROTOCOL = 'wix:';
const SDKRequestToRESTRequestRenameMap = {
    _id: 'id',
    _createdDate: 'createdDate',
    _updatedDate: 'updatedDate'
};
const RESTResponseToSDKResponseRenameMap = {
    id: '_id',
    createdDate: '_createdDate',
    updatedDate: '_updatedDate'
};
const ITEMS_RESULT_PROPERTY_NAME = 'items';
const PAGING_METADATA_RESULT_PROPERTY_NAME = 'pagingMetadata';
const DEFAULT_LIMIT = 50;
}}),
"[project]/node_modules/@wix/sdk-runtime/build/rename-all-nested-keys.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "renameAllNestedKeys": (()=>renameAllNestedKeys),
    "renameKeysFromRESTResponseToSDKResponse": (()=>renameKeysFromRESTResponseToSDKResponse),
    "renameKeysFromSDKRequestToRESTRequest": (()=>renameKeysFromSDKRequestToRESTRequest)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk-runtime/build/constants.js [middleware] (ecmascript)");
;
function renameAllNestedKeys(payload, renameMap, ignorePaths) {
    const isIgnored = (path)=>ignorePaths.includes(path);
    const traverse = (obj, path)=>{
        if (Array.isArray(obj)) {
            obj.forEach((item)=>{
                traverse(item, path);
            });
        } else if (typeof obj === 'object' && obj !== null) {
            const objAsRecord = obj;
            Object.keys(objAsRecord).forEach((key)=>{
                const newPath = path === '' ? key : `${path}.${key}`;
                if (isIgnored(newPath)) {
                    return;
                }
                if (key in renameMap && !(renameMap[key] in objAsRecord)) {
                    objAsRecord[renameMap[key]] = objAsRecord[key];
                    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
                    delete objAsRecord[key];
                }
                traverse(objAsRecord[key], newPath);
            });
        }
    };
    traverse(payload, '');
    return payload;
}
function renameKeysFromSDKRequestToRESTRequest(payload, ignorePaths = []) {
    return renameAllNestedKeys(payload, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["SDKRequestToRESTRequestRenameMap"], ignorePaths);
}
function renameKeysFromRESTResponseToSDKResponse(payload, ignorePaths = []) {
    return renameAllNestedKeys(payload, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["RESTResponseToSDKResponseRenameMap"], ignorePaths);
}
}}),
"[project]/node_modules/@wix/sdk-runtime/build/utils.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "alignIfLegacy": (()=>alignIfLegacy),
    "constantCase": (()=>constantCase),
    "removeUndefinedKeys": (()=>removeUndefinedKeys),
    "split": (()=>split)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk-runtime/build/constants.js [middleware] (ecmascript)");
;
function alignIfLegacy(url, type) {
    const { protocol } = new URL(url);
    return protocol === `${type}:` ? `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["WIX_PROTOCOL"]}${url}` : url;
}
function removeUndefinedKeys(obj) {
    return Object.fromEntries(Object.entries(obj).filter(([, value])=>value !== undefined));
}
function constantCase(input) {
    return split(input).map((part)=>part.toLocaleUpperCase()).join('_');
}
const SPLIT_LOWER_UPPER_RE = /([\p{Ll}\d])(\p{Lu})/gu;
const SPLIT_UPPER_UPPER_RE = /(\p{Lu})([\p{Lu}][\p{Ll}])/gu;
const SPLIT_REPLACE_VALUE = '$1\0$2';
const DEFAULT_STRIP_REGEXP = /[^\p{L}\d]+/giu;
function split(value) {
    let result = value.trim();
    result = result.replace(SPLIT_LOWER_UPPER_RE, SPLIT_REPLACE_VALUE).replace(SPLIT_UPPER_UPPER_RE, SPLIT_REPLACE_VALUE);
    result = result.replace(DEFAULT_STRIP_REGEXP, '\0');
    let start = 0;
    let end = result.length;
    // Trim the delimiter from around the output string.
    while(result.charAt(start) === '\0'){
        start++;
    }
    if (start === end) {
        return [];
    }
    while(result.charAt(end - 1) === '\0'){
        end--;
    }
    return result.slice(start, end).split(/\0/g);
}
}}),
"[project]/node_modules/@wix/sdk-runtime/build/transform-error.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "transformError": (()=>transformError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk-runtime/build/utils.js [middleware] (ecmascript)");
;
const isValidationError = (httpClientError)=>'validationError' in (httpClientError.response?.data?.details ?? {});
const isApplicationError = (httpClientError)=>'applicationError' in (httpClientError.response?.data?.details ?? {});
const isClientError = (httpClientError)=>(httpClientError.response?.status ?? -1) >= 400 && (httpClientError.response?.status ?? -1) < 500;
function transformError(httpClientError, pathsToArguments = {
    explicitPathsToArguments: {},
    spreadPathsToArguments: {},
    singleArgumentUnchanged: false
}, argumentNames = []) {
    if (typeof httpClientError !== 'object' || httpClientError === null) {
        throw httpClientError;
    }
    if (isValidationError(httpClientError)) {
        return buildValidationError(httpClientError.response.data, pathsToArguments, argumentNames);
    }
    if (isApplicationError(httpClientError)) {
        return buildApplicationError(httpClientError);
    }
    if (isClientError(httpClientError)) {
        const statusText = httpClientError.response?.statusText ?? 'UNKNOWN';
        const message = httpClientError.response?.data?.message ?? statusText;
        const details = {
            applicationError: {
                description: statusText,
                code: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["constantCase"])(statusText),
                data: {}
            }
        };
        return buildError({
            message: JSON.stringify({
                message,
                details
            }, null, 2),
            extraProperties: {
                details
            }
        });
    }
    return buildSystemError(httpClientError);
}
const buildValidationError = (validationErrorResponse, pathsToArguments, argumentNames)=>{
    const { fieldViolations } = validationErrorResponse.details.validationError;
    const transformedFieldViolations = violationsWithRenamedFields(pathsToArguments, fieldViolations, argumentNames)?.sort((a, b)=>a.field < b.field ? -1 : 1);
    const message = `INVALID_ARGUMENT: ${transformedFieldViolations?.map(({ field, description })=>`"${field}" ${description}`)?.join(', ')}`;
    const details = {
        validationError: {
            fieldViolations: transformedFieldViolations
        }
    };
    return buildError({
        message: JSON.stringify({
            message,
            details
        }, null, 2),
        extraProperties: {
            details
        }
    });
};
const buildError = ({ message, extraProperties = {} })=>{
    const error = new Error(message);
    for (const [key, value] of Object.entries(extraProperties)){
        if (value !== undefined) {
            error[key] = value;
        }
    }
    return error;
};
const buildApplicationError = (httpClientError)=>{
    const statusText = httpClientError.response?.statusText ?? 'UNKNOWN';
    const message = httpClientError.response?.data?.message ?? statusText;
    const description = httpClientError.response?.data?.details?.applicationError?.description ?? statusText;
    const code = httpClientError.response?.data?.details?.applicationError?.code ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["constantCase"])(statusText);
    const data = httpClientError.response?.data?.details?.applicationError?.data ?? {};
    const combinedMessage = message === description ? message : `${message}: ${description}`;
    const details = {
        applicationError: {
            description,
            code,
            data
        }
    };
    return buildError({
        message: JSON.stringify({
            message: combinedMessage,
            details
        }, null, 2),
        extraProperties: {
            details
        }
    });
};
const buildSystemError = (httpClientError)=>{
    const message = httpClientError.requestId ? `System error occurred, request-id: ${httpClientError.requestId}` : `System error occurred: ${JSON.stringify(httpClientError)}`;
    return buildError({
        message,
        extraProperties: {
            requestId: httpClientError.requestId,
            code: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["constantCase"])(httpClientError.response?.statusText ?? 'UNKNOWN'),
            ...!httpClientError.response && {
                runtimeError: httpClientError
            }
        }
    });
};
const violationsWithRenamedFields = ({ spreadPathsToArguments, explicitPathsToArguments, singleArgumentUnchanged }, fieldViolations, argumentNames)=>{
    const allPathsToArguments = {
        ...spreadPathsToArguments,
        ...explicitPathsToArguments
    };
    const allPathsToArgumentsKeys = Object.keys(allPathsToArguments);
    return fieldViolations?.filter((fieldViolation)=>{
        // In some cases, the violations error will include both some.nested and some.nested.path,
        // so we'll pick the more specific one if it's covered by the paths in the transformation.
        const containedInAMoreSpecificViolationField = fieldViolations.some((anotherViolation)=>anotherViolation.field.length > fieldViolation.field.length && anotherViolation.field.startsWith(fieldViolation.field) && allPathsToArgumentsKeys.includes(anotherViolation.field));
        return !containedInAMoreSpecificViolationField;
    }).map((fieldViolation)=>{
        // This means we've got some.nested.field in the violation,
        // matched against { some: { nested: { field: $[0].a.b.c } } } in the transformation.
        // some.nested.field is replaced entirely with $[0].a.b.c, with $[0] replaced with the name of argument 0
        const exactMatchArgumentExpression = explicitPathsToArguments[fieldViolation.field];
        if (exactMatchArgumentExpression) {
            return {
                ...fieldViolation,
                field: withRenamedArgument(exactMatchArgumentExpression, argumentNames)
            };
        }
        const longestPartialPathMatch = allPathsToArgumentsKeys?.sort((a, b)=>b.length - a.length)?.find((path)=>fieldViolation.field.startsWith(path));
        if (longestPartialPathMatch) {
            // This means we've got some.nested.field in the violation,
            // matched against { some: { nested: { *: $[0].a.b.c } } } in the transformation.
            // Only the prefix some.nested is replaced with $[0].a.b.c, with $[0] replaced with the name of argument 0
            // This can also happen in the case where the #wrap function is used.
            const partialMatchArgumentExpression = allPathsToArguments[longestPartialPathMatch];
            if (partialMatchArgumentExpression) {
                return {
                    ...fieldViolation,
                    field: fieldViolation.field.replace(longestPartialPathMatch, withRenamedArgument(partialMatchArgumentExpression, argumentNames))
                };
            }
        }
        if (singleArgumentUnchanged) {
            return {
                ...fieldViolation,
                field: `${argumentNames[0]}.${fieldViolation.field}`
            };
        }
        return fieldViolation;
    });
};
const withRenamedArgument = (fieldValue, argumentNames)=>{
    const argIndex = getArgumentIndex(fieldValue);
    if (argIndex !== null && typeof argIndex !== 'undefined') {
        return fieldValue.replace(`$[${argIndex}]`, argumentNames[argIndex]);
    }
    return fieldValue;
};
const getArgumentIndex = (s)=>{
    const match = s.match(/\$\[(?<argIndex>\d+)\]/);
    return match && match.groups && Number(match.groups.argIndex);
};
}}),
"[project]/node_modules/@wix/redirects_redirects/build/es/src/headless-v1-redirect-session-redirects.universal.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AttachPagesResponseStatus": (()=>AttachPagesResponseStatus),
    "CallbackType": (()=>CallbackType),
    "LocationType": (()=>LocationType),
    "MembersAccountSection": (()=>MembersAccountSection),
    "Prompt": (()=>Prompt),
    "Status": (()=>Status),
    "WebhookIdentityType": (()=>WebhookIdentityType),
    "createRedirectSession": (()=>createRedirectSession)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$src$2f$headless$2d$v1$2d$redirect$2d$session$2d$redirects$2e$http$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/redirects_redirects/build/es/src/headless-v1-redirect-session-redirects.http.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk-runtime/build/rename-all-nested-keys.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk-runtime/build/transform-error.js [middleware] (ecmascript)");
;
;
;
var LocationType;
(function(LocationType) {
    LocationType["UNDEFINED"] = "UNDEFINED";
    LocationType["OWNER_BUSINESS"] = "OWNER_BUSINESS";
    LocationType["OWNER_CUSTOM"] = "OWNER_CUSTOM";
    LocationType["CUSTOM"] = "CUSTOM";
})(LocationType || (LocationType = {}));
var Prompt;
(function(Prompt) {
    Prompt["login"] = "login";
    Prompt["none"] = "none";
    Prompt["consent"] = "consent";
    Prompt["select_account"] = "select_account";
})(Prompt || (Prompt = {}));
var MembersAccountSection;
(function(MembersAccountSection) {
    /** Account info section in "my account". */ MembersAccountSection["ACCOUNT_INFO"] = "ACCOUNT_INFO";
    /** My Bookings section in "my account". */ MembersAccountSection["BOOKINGS"] = "BOOKINGS";
    /** My Orders section in "my account". */ MembersAccountSection["ORDERS"] = "ORDERS";
    /** Subscriptions section in "my account". */ MembersAccountSection["SUBSCRIPTIONS"] = "SUBSCRIPTIONS";
    /** Events section in "my account". */ MembersAccountSection["EVENTS"] = "EVENTS";
})(MembersAccountSection || (MembersAccountSection = {}));
var AttachPagesResponseStatus;
(function(AttachPagesResponseStatus) {
    /** Invalid value. */ AttachPagesResponseStatus["UNKNOWN"] = "UNKNOWN";
    /** Pages were successfully attached. */ AttachPagesResponseStatus["SUCCESS"] = "SUCCESS";
    /** No pages were attached because the site is already published. */ AttachPagesResponseStatus["NO_ACTION"] = "NO_ACTION";
    /** An error occurred, such as when the site or app is not found. */ AttachPagesResponseStatus["ERROR"] = "ERROR";
})(AttachPagesResponseStatus || (AttachPagesResponseStatus = {}));
var CallbackType;
(function(CallbackType) {
    /** Invalid value. */ CallbackType["UNKNOWN"] = "UNKNOWN";
    /** Callback URL is used for the logout flow. */ CallbackType["LOGOUT"] = "LOGOUT";
    /** Callback URL is used for a checkout flow. */ CallbackType["CHECKOUT"] = "CHECKOUT";
    /** Callback URL is used for the authorize flow. */ CallbackType["AUTHORIZE"] = "AUTHORIZE";
})(CallbackType || (CallbackType = {}));
var Status;
(function(Status) {
    /** Invalid value. */ Status["UNKNOWN"] = "UNKNOWN";
    /** Templates were successfully attached. */ Status["SUCCESS"] = "SUCCESS";
    /** An error occurred. */ Status["ERROR"] = "ERROR";
})(Status || (Status = {}));
var WebhookIdentityType;
(function(WebhookIdentityType) {
    WebhookIdentityType["UNKNOWN"] = "UNKNOWN";
    WebhookIdentityType["ANONYMOUS_VISITOR"] = "ANONYMOUS_VISITOR";
    WebhookIdentityType["MEMBER"] = "MEMBER";
    WebhookIdentityType["WIX_USER"] = "WIX_USER";
    WebhookIdentityType["APP"] = "APP";
})(WebhookIdentityType || (WebhookIdentityType = {}));
async function createRedirectSession(options) {
    // @ts-ignore
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        bookingsCheckout: options?.bookingsCheckout,
        ecomCheckout: options?.ecomCheckout,
        eventsCheckout: options?.eventsCheckout,
        paidPlansCheckout: options?.paidPlansCheckout,
        login: options?.login,
        logout: options?.logout,
        auth: options?.auth,
        storesProduct: options?.storesProduct,
        bookingsBook: options?.bookingsBook,
        callbacks: options?.callbacks,
        preferences: options?.preferences
    });
    const reqOpts = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$src$2f$headless$2d$v1$2d$redirect$2d$session$2d$redirects$2e$http$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__.createRedirectSession(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                bookingsCheckout: '$[0].bookingsCheckout',
                ecomCheckout: '$[0].ecomCheckout',
                eventsCheckout: '$[0].eventsCheckout',
                paidPlansCheckout: '$[0].paidPlansCheckout',
                login: '$[0].login',
                logout: '$[0].logout',
                auth: '$[0].auth',
                storesProduct: '$[0].storesProduct',
                bookingsBook: '$[0].bookingsBook',
                callbacks: '$[0].callbacks',
                preferences: '$[0].preferences'
            },
            singleArgumentUnchanged: false
        }, [
            'options'
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
} //# sourceMappingURL=headless-v1-redirect-session-redirects.universal.js.map
}}),
"[project]/node_modules/@wix/sdk-runtime/build/transformations/transform-paths.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "transformPaths": (()=>transformPaths)
});
function transformPath(obj, { path, isRepeated, isMap }, transformFn) {
    const pathParts = path.split('.');
    if (pathParts.length === 1 && path in obj) {
        obj[path] = isRepeated ? obj[path].map(transformFn) : isMap ? Object.fromEntries(Object.entries(obj[path]).map(([key, value])=>[
                key,
                transformFn(value)
            ])) : transformFn(obj[path]);
        return obj;
    }
    const [first, ...rest] = pathParts;
    if (first.endsWith('{}')) {
        const cleanPath = first.slice(0, -2);
        obj[cleanPath] = Object.fromEntries(Object.entries(obj[cleanPath]).map(([key, value])=>[
                key,
                transformPath(value, {
                    path: rest.join('.'),
                    isRepeated,
                    isMap
                }, transformFn)
            ]));
    } else if (Array.isArray(obj[first])) {
        obj[first] = obj[first].map((item)=>transformPath(item, {
                path: rest.join('.'),
                isRepeated,
                isMap
            }, transformFn));
    } else if (first in obj && typeof obj[first] === 'object' && obj[first] !== null) {
        obj[first] = transformPath(obj[first], {
            path: rest.join('.'),
            isRepeated,
            isMap
        }, transformFn);
    }
    return obj;
}
function transformPaths(obj, transformations) {
    return transformations.reduce((acc, { paths, transformFn })=>paths.reduce((transformerAcc, path)=>transformPath(transformerAcc, path, transformFn), acc), obj);
}
}}),
"[project]/node_modules/@wix/sdk-runtime/build/transformations/timestamp.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "transformRESTTimestampToSDKTimestamp": (()=>transformRESTTimestampToSDKTimestamp),
    "transformSDKTimestampToRESTTimestamp": (()=>transformSDKTimestampToRESTTimestamp)
});
function transformSDKTimestampToRESTTimestamp(val) {
    return val?.toISOString();
}
function transformRESTTimestampToSDKTimestamp(val) {
    return val ? new Date(val) : undefined;
}
}}),
"[project]/node_modules/@wix/redirects_redirects/build/es/src/headless-v1-redirect-session-redirects.public.js [middleware] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "__metadata": (()=>__metadata),
    "createRedirectSession": (()=>createRedirectSession),
    "onRedirectSessionCreated": (()=>onRedirectSessionCreated)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$types$2f$build$2f$browser$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk-types/build/browser/index.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk-runtime/build/rename-all-nested-keys.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk-runtime/build/transformations/transform-paths.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk-runtime/build/transformations/timestamp.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$src$2f$headless$2d$v1$2d$redirect$2d$session$2d$redirects$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/redirects_redirects/build/es/src/headless-v1-redirect-session-redirects.universal.js [middleware] (ecmascript)");
;
;
;
;
;
const __metadata = {
    PACKAGE_NAME: '@wix/redirects'
};
function createRedirectSession(httpClient) {
    return (options)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$src$2f$headless$2d$v1$2d$redirect$2d$session$2d$redirects$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createRedirectSession"])(options, // @ts-ignore
        {
            httpClient
        });
}
const onRedirectSessionCreated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$types$2f$build$2f$browser$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["EventDefinition"])('wix.headless.v1.redirect_session_created', true, (event)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformPaths"])(event, [
        {
            transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
            paths: [
                {
                    path: 'metadata.eventTime'
                }
            ]
        }
    ])))();
;
 //# sourceMappingURL=headless-v1-redirect-session-redirects.public.js.map
}}),
"[project]/node_modules/@wix/redirects_redirects/build/es/src/headless-v1-redirect-session-redirects.public.js [middleware] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$src$2f$headless$2d$v1$2d$redirect$2d$session$2d$redirects$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/redirects_redirects/build/es/src/headless-v1-redirect-session-redirects.universal.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$src$2f$headless$2d$v1$2d$redirect$2d$session$2d$redirects$2e$public$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@wix/redirects_redirects/build/es/src/headless-v1-redirect-session-redirects.public.js [middleware] (ecmascript) <locals>");
}}),
"[project]/node_modules/@wix/sdk-runtime/build/event-definition-modules.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createEventModule": (()=>createEventModule)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$context$2d$v2$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@wix/sdk-runtime/build/context-v2.js [middleware] (ecmascript) <locals>");
;
function createEventModule(eventDefinition) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$context$2d$v2$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["contextualizeEventDefinitionModuleV2"])(eventDefinition);
}
}}),
"[project]/node_modules/@wix/redirects_redirects/build/es/src/headless-v1-redirect-session-redirects.context.js [middleware] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createRedirectSession": (()=>createRedirectSession),
    "onRedirectSessionCreated": (()=>onRedirectSessionCreated)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk-runtime/build/rest-modules.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$src$2f$headless$2d$v1$2d$redirect$2d$session$2d$redirects$2e$public$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@wix/redirects_redirects/build/es/src/headless-v1-redirect-session-redirects.public.js [middleware] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$event$2d$definition$2d$modules$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk-runtime/build/event-definition-modules.js [middleware] (ecmascript)");
;
;
;
;
const createRedirectSession = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createRESTModule"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$src$2f$headless$2d$v1$2d$redirect$2d$session$2d$redirects$2e$public$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRedirectSession"]);
const onRedirectSessionCreated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$event$2d$definition$2d$modules$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createEventModule"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$src$2f$headless$2d$v1$2d$redirect$2d$session$2d$redirects$2e$public$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["onRedirectSessionCreated"]);
;
 //# sourceMappingURL=headless-v1-redirect-session-redirects.context.js.map
}}),
"[project]/node_modules/@wix/redirects_redirects/build/es/src/headless-v1-redirect-session-redirects.context.js [middleware] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$src$2f$headless$2d$v1$2d$redirect$2d$session$2d$redirects$2e$public$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@wix/redirects_redirects/build/es/src/headless-v1-redirect-session-redirects.public.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$src$2f$headless$2d$v1$2d$redirect$2d$session$2d$redirects$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/redirects_redirects/build/es/src/headless-v1-redirect-session-redirects.universal.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$src$2f$headless$2d$v1$2d$redirect$2d$session$2d$redirects$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@wix/redirects_redirects/build/es/src/headless-v1-redirect-session-redirects.context.js [middleware] (ecmascript) <locals>");
}}),
"[project]/node_modules/@wix/redirects_redirects/build/es/index.js [middleware] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
 //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/@wix/redirects_redirects/build/es/index.js [middleware] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$src$2f$headless$2d$v1$2d$redirect$2d$session$2d$redirects$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@wix/redirects_redirects/build/es/src/headless-v1-redirect-session-redirects.context.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@wix/redirects_redirects/build/es/index.js [middleware] (ecmascript) <locals>");
}}),
"[project]/node_modules/@wix/redirects/build/es/index.js [middleware] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
 //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/@wix/redirects/build/es/index.js [middleware] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@wix/redirects_redirects/build/es/index.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@wix/redirects/build/es/index.js [middleware] (ecmascript) <locals>");
}}),
"[project]/node_modules/@wix/sdk-runtime/build/transformations/float.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "transformRESTFloatToSDKFloat": (()=>transformRESTFloatToSDKFloat),
    "transformSDKFloatToRESTFloat": (()=>transformSDKFloatToRESTFloat)
});
function transformSDKFloatToRESTFloat(val) {
    return isFinite(val) ? val : val.toString();
}
function transformRESTFloatToSDKFloat(val) {
    if (val === 'NaN') {
        return NaN;
    }
    if (val === 'Infinity') {
        return Infinity;
    }
    if (val === '-Infinity') {
        return -Infinity;
    }
    return val;
}
}}),
"[project]/node_modules/@wix/sdk-runtime/build/transformations/bytes.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "transformRESTBytesToSDKBytes": (()=>transformRESTBytesToSDKBytes),
    "transformSDKBytesToRESTBytes": (()=>transformSDKBytesToRESTBytes)
});
function transformSDKBytesToRESTBytes(val) {
    const chars = val.reduce((res, c)=>res + String.fromCharCode(c), '');
    return btoa(chars);
}
function transformRESTBytesToSDKBytes(val) {
    return Uint8Array.from(atob(val), (c)=>c.charCodeAt(0));
}
}}),
"[project]/node_modules/@wix/identity_authentication/build/es/src/iam-authentication-v1-authentication-authentication.http.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "changePassword": (()=>changePassword),
    "loginCallback": (()=>loginCallback),
    "loginV2": (()=>loginV2),
    "logout": (()=>logout),
    "registerV2": (()=>registerV2),
    "signOn": (()=>signOn),
    "verify": (()=>verify)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk-runtime/build/rest-modules.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk-runtime/build/transformations/transform-paths.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$float$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk-runtime/build/transformations/float.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk-runtime/build/transformations/timestamp.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$bytes$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk-runtime/build/transformations/bytes.js [middleware] (ecmascript)");
;
;
;
;
;
;
;
;
function resolveWixIamAuthenticationV1AuthenticationServiceUrl(opts) {
    const domainToMappings = {
        _: [
            {
                srcPath: '/_api/iam/authentication',
                destPath: ''
            }
        ],
        'users._base_domain_': [
            {
                srcPath: '/iam/wix/google',
                destPath: '/v1/sso/callback/root/0e6a50f5-b523-4e29-990d-f37fa2ffdd69'
            },
            {
                srcPath: '/authentication',
                destPath: ''
            }
        ],
        'www.wixapis.com': [
            {
                srcPath: '/_api/iam/authentication',
                destPath: ''
            },
            {
                srcPath: '/iam/authentication',
                destPath: ''
            }
        ],
        'bo._base_domain_': [
            {
                srcPath: '/_api/iam/authentication',
                destPath: ''
            }
        ],
        'wixbo.ai': [
            {
                srcPath: '/_api/iam/authentication',
                destPath: ''
            }
        ],
        'wix-bo.com': [
            {
                srcPath: '/_api/iam/authentication',
                destPath: ''
            }
        ],
        'dev._base_domain_': [
            {
                srcPath: '/_api/iam/authentication',
                destPath: ''
            }
        ],
        'manage._base_domain_': [
            {
                srcPath: '/_api/authentication',
                destPath: ''
            }
        ],
        'www._base_domain_': [
            {
                srcPath: '/_api/iam/authentication',
                destPath: ''
            }
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["resolveUrl"])(Object.assign(opts, {
        domainToMappings
    }));
}
const PACKAGE_NAME = '@wix/identity_authentication';
function registerV2(payload) {
    function __registerV2({ host }) {
        const serializedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformPaths"])(payload, [
            {
                transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$float$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformSDKFloatToRESTFloat"],
                paths: [
                    {
                        path: 'profile.customFields.value.numValue'
                    }
                ]
            },
            {
                transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformSDKTimestampToRESTTimestamp"],
                paths: [
                    {
                        path: 'profile.customFields.value.dateValue'
                    }
                ]
            }
        ]);
        const metadata = {
            entityFqdn: 'wix.iam.authentication.v1.authentication',
            method: 'POST',
            methodFqn: 'wix.iam.authentication.v1.AuthenticationService.RegisterV2',
            packageName: PACKAGE_NAME,
            url: resolveWixIamAuthenticationV1AuthenticationServiceUrl({
                protoPath: '/v2/register',
                data: serializedData,
                host
            }),
            data: serializedData,
            transformResponse: (payload)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformPaths"])(payload, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
                        paths: [
                            {
                                path: 'identity.createdDate'
                            },
                            {
                                path: 'identity.updatedDate'
                            },
                            {
                                path: 'identity.identityProfile.customFields.value.dateValue'
                            },
                            {
                                path: 'additionalData.dateValue'
                            }
                        ]
                    },
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$float$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformRESTFloatToSDKFloat"],
                        paths: [
                            {
                                path: 'identity.identityProfile.customFields.value.numValue'
                            },
                            {
                                path: 'additionalData.numValue'
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __registerV2;
}
function loginV2(payload) {
    function __loginV2({ host }) {
        const metadata = {
            entityFqdn: 'wix.iam.authentication.v1.authentication',
            method: 'POST',
            methodFqn: 'wix.iam.authentication.v1.AuthenticationService.LoginV2',
            packageName: PACKAGE_NAME,
            url: resolveWixIamAuthenticationV1AuthenticationServiceUrl({
                protoPath: '/v2/login',
                data: payload,
                host
            }),
            data: payload,
            transformResponse: (payload)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformPaths"])(payload, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
                        paths: [
                            {
                                path: 'identity.createdDate'
                            },
                            {
                                path: 'identity.updatedDate'
                            },
                            {
                                path: 'identity.identityProfile.customFields.value.dateValue'
                            },
                            {
                                path: 'additionalData.dateValue'
                            }
                        ]
                    },
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$float$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformRESTFloatToSDKFloat"],
                        paths: [
                            {
                                path: 'identity.identityProfile.customFields.value.numValue'
                            },
                            {
                                path: 'additionalData.numValue'
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __loginV2;
}
function changePassword(payload) {
    function __changePassword({ host }) {
        const metadata = {
            entityFqdn: 'wix.iam.authentication.v1.authentication',
            method: 'POST',
            methodFqn: 'wix.iam.authentication.v1.AuthenticationService.ChangePassword',
            packageName: PACKAGE_NAME,
            url: resolveWixIamAuthenticationV1AuthenticationServiceUrl({
                protoPath: '/v2/change-password',
                data: payload,
                host
            }),
            data: payload
        };
        return metadata;
    }
    return __changePassword;
}
function loginCallback(payload) {
    function __loginCallback({ host }) {
        const metadata = {
            entityFqdn: 'wix.iam.authentication.v1.authentication',
            method: 'GET',
            methodFqn: 'wix.iam.authentication.v1.AuthenticationService.LoginCallback',
            packageName: PACKAGE_NAME,
            url: resolveWixIamAuthenticationV1AuthenticationServiceUrl({
                protoPath: '/v1/callback',
                data: payload,
                host
            }),
            params: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["toURLSearchParams"])(payload),
            transformResponse: (payload)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformPaths"])(payload, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$bytes$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformRESTBytesToSDKBytes"],
                        paths: [
                            {
                                path: 'body'
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __loginCallback;
}
function signOn(payload) {
    function __signOn({ host }) {
        const serializedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformPaths"])(payload, [
            {
                transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$float$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformSDKFloatToRESTFloat"],
                paths: [
                    {
                        path: 'profile.customFields.value.numValue'
                    }
                ]
            },
            {
                transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformSDKTimestampToRESTTimestamp"],
                paths: [
                    {
                        path: 'profile.customFields.value.dateValue'
                    }
                ]
            }
        ]);
        const metadata = {
            entityFqdn: 'wix.iam.authentication.v1.authentication',
            method: 'POST',
            methodFqn: 'wix.iam.authentication.v1.AuthenticationService.SignOn',
            packageName: PACKAGE_NAME,
            url: resolveWixIamAuthenticationV1AuthenticationServiceUrl({
                protoPath: '/v2/sign-on',
                data: serializedData,
                host
            }),
            data: serializedData,
            transformResponse: (payload)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformPaths"])(payload, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
                        paths: [
                            {
                                path: 'identity.createdDate'
                            },
                            {
                                path: 'identity.updatedDate'
                            },
                            {
                                path: 'identity.identityProfile.customFields.value.dateValue'
                            }
                        ]
                    },
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$float$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformRESTFloatToSDKFloat"],
                        paths: [
                            {
                                path: 'identity.identityProfile.customFields.value.numValue'
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __signOn;
}
function logout(payload) {
    function __logout({ host }) {
        const metadata = {
            entityFqdn: 'wix.iam.authentication.v1.authentication',
            method: 'GET',
            methodFqn: 'wix.iam.authentication.v1.AuthenticationService.Logout',
            packageName: PACKAGE_NAME,
            url: resolveWixIamAuthenticationV1AuthenticationServiceUrl({
                protoPath: '/v1/logout',
                data: payload,
                host
            }),
            params: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["toURLSearchParams"])(payload),
            transformResponse: (payload)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformPaths"])(payload, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$bytes$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformRESTBytesToSDKBytes"],
                        paths: [
                            {
                                path: 'body'
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __logout;
}
function verify(payload) {
    function __verify({ host }) {
        const metadata = {
            entityFqdn: 'wix.iam.authentication.v1.authentication',
            method: 'POST',
            methodFqn: 'wix.iam.authentication.v1.AuthenticationService.Verify',
            packageName: PACKAGE_NAME,
            url: resolveWixIamAuthenticationV1AuthenticationServiceUrl({
                protoPath: '/v2/{factorType}/verify',
                data: payload,
                host
            }),
            data: payload,
            transformResponse: (payload)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformPaths"])(payload, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
                        paths: [
                            {
                                path: 'identity.createdDate'
                            },
                            {
                                path: 'identity.updatedDate'
                            },
                            {
                                path: 'identity.identityProfile.customFields.value.dateValue'
                            },
                            {
                                path: 'additionalData.dateValue'
                            }
                        ]
                    },
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$float$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformRESTFloatToSDKFloat"],
                        paths: [
                            {
                                path: 'identity.identityProfile.customFields.value.numValue'
                            },
                            {
                                path: 'additionalData.numValue'
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __verify;
} //# sourceMappingURL=iam-authentication-v1-authentication-authentication.http.js.map
}}),
"[project]/node_modules/@wix/sdk-runtime/build/transformations/address.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "transformRESTAddressToSDKAddress": (()=>transformRESTAddressToSDKAddress),
    "transformSDKAddressToRESTAddress": (()=>transformSDKAddressToRESTAddress)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk-runtime/build/utils.js [middleware] (ecmascript)");
;
function transformSDKAddressToRESTAddress(payload) {
    return payload && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["removeUndefinedKeys"])({
        city: payload.city,
        subdivision: payload.subdivision,
        country: payload.country,
        postalCode: payload.postalCode,
        formattedAddress: payload.formatted,
        geocode: payload.location,
        addressLine: payload.addressLine1,
        addressLine2: payload.addressLine2,
        streetAddress: payload.streetAddress && {
            name: payload.streetAddress.name,
            number: payload.streetAddress.number,
            apt: payload.streetAddress.apt
        }
    });
}
function transformRESTAddressToSDKAddress(payload) {
    return payload && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["removeUndefinedKeys"])({
        formatted: payload.formattedAddress,
        location: payload.geocode,
        addressLine1: payload.addressLine,
        addressLine2: payload.addressLine2,
        streetAddress: payload.streetAddress && {
            name: payload.streetAddress.name,
            number: payload.streetAddress.number,
            apt: payload.streetAddress.apt
        },
        city: payload.city,
        subdivision: payload.subdivision,
        country: payload.country,
        postalCode: payload.postalCode,
        countryFullname: payload.countryFullname,
        subdivisionFullname: payload.subdivisionFullname
    });
}
}}),
"[project]/node_modules/@wix/identity_authentication/build/es/src/iam-authentication-v1-authentication-authentication.universal.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AddressTag": (()=>AddressTag),
    "EmailTag": (()=>EmailTag),
    "FactorType": (()=>FactorType),
    "PhoneTag": (()=>PhoneTag),
    "PrivacyStatus": (()=>PrivacyStatus),
    "Reason": (()=>Reason),
    "StateType": (()=>StateType),
    "Status": (()=>Status),
    "StatusName": (()=>StatusName),
    "TenantType": (()=>TenantType),
    "changePassword": (()=>changePassword),
    "loginCallback": (()=>loginCallback),
    "loginV2": (()=>loginV2),
    "logout": (()=>logout),
    "registerV2": (()=>registerV2),
    "signOn": (()=>signOn),
    "verify": (()=>verify)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$http$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/identity_authentication/build/es/src/iam-authentication-v1-authentication-authentication.http.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk-runtime/build/transformations/transform-paths.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk-runtime/build/rename-all-nested-keys.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$address$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk-runtime/build/transformations/address.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk-runtime/build/transform-error.js [middleware] (ecmascript)");
;
;
;
;
;
;
var PrivacyStatus;
(function(PrivacyStatus) {
    /** No defined privacy status. */ PrivacyStatus["UNDEFINED"] = "UNDEFINED";
    /** Profile details, such as profile name and profile picture, are visible to other members. */ PrivacyStatus["PUBLIC"] = "PUBLIC";
    /** Profile details aren't visible to other members. */ PrivacyStatus["PRIVATE"] = "PRIVATE";
})(PrivacyStatus || (PrivacyStatus = {}));
var EmailTag;
(function(EmailTag) {
    EmailTag["UNTAGGED"] = "UNTAGGED";
    EmailTag["MAIN"] = "MAIN";
    EmailTag["HOME"] = "HOME";
    EmailTag["WORK"] = "WORK";
})(EmailTag || (EmailTag = {}));
var PhoneTag;
(function(PhoneTag) {
    PhoneTag["UNTAGGED"] = "UNTAGGED";
    PhoneTag["MAIN"] = "MAIN";
    PhoneTag["HOME"] = "HOME";
    PhoneTag["MOBILE"] = "MOBILE";
    PhoneTag["WORK"] = "WORK";
    PhoneTag["FAX"] = "FAX";
})(PhoneTag || (PhoneTag = {}));
var AddressTag;
(function(AddressTag) {
    AddressTag["UNTAGGED"] = "UNTAGGED";
    AddressTag["HOME"] = "HOME";
    AddressTag["WORK"] = "WORK";
    AddressTag["BILLING"] = "BILLING";
    AddressTag["SHIPPING"] = "SHIPPING";
})(AddressTag || (AddressTag = {}));
var StateType;
(function(StateType) {
    /** Initial unknown state. */ StateType["UNKNOWN_STATE"] = "UNKNOWN_STATE";
    /** Login completed successfully. */ StateType["SUCCESS"] = "SUCCESS";
    /** Indicates that the member needs the owner to approve their registration. */ StateType["REQUIRE_OWNER_APPROVAL"] = "REQUIRE_OWNER_APPROVAL";
    /** Indicates that the member needs to verify their email. */ StateType["REQUIRE_EMAIL_VERIFICATION"] = "REQUIRE_EMAIL_VERIFICATION";
    /** Indicates that the `status` is not one that prevents the member logging in, meaning it's not `OFFLINE`, `BLOCKED`, or `DELETED`. */ StateType["STATUS_CHECK"] = "STATUS_CHECK";
})(StateType || (StateType = {}));
var StatusName;
(function(StatusName) {
    StatusName["UNKNOWN_STATUS"] = "UNKNOWN_STATUS";
    StatusName["PENDING"] = "PENDING";
    StatusName["ACTIVE"] = "ACTIVE";
    StatusName["DELETED"] = "DELETED";
    StatusName["BLOCKED"] = "BLOCKED";
    StatusName["OFFLINE"] = "OFFLINE";
})(StatusName || (StatusName = {}));
var Reason;
(function(Reason) {
    Reason["UNKNOWN_REASON"] = "UNKNOWN_REASON";
    Reason["PENDING_ADMIN_APPROVAL_REQUIRED"] = "PENDING_ADMIN_APPROVAL_REQUIRED";
    Reason["PENDING_EMAIL_VERIFICATION_REQUIRED"] = "PENDING_EMAIL_VERIFICATION_REQUIRED";
})(Reason || (Reason = {}));
var FactorType;
(function(FactorType) {
    /** Unknown factor type. */ FactorType["UNKNOWN_FACTOR_TYPE"] = "UNKNOWN_FACTOR_TYPE";
    /** Requires a password. */ FactorType["PASSWORD"] = "PASSWORD";
    /** Requires a code sent via SMS. */ FactorType["SMS"] = "SMS";
    /** Requires a code sent by phone call. */ FactorType["CALL"] = "CALL";
    /** Requires a code sent by email. */ FactorType["EMAIL"] = "EMAIL";
    /** Requires authentication via an authenticator app. */ FactorType["TOTP"] = "TOTP";
    /** Requires authentication via a push notification. */ FactorType["PUSH"] = "PUSH";
})(FactorType || (FactorType = {}));
var Status;
(function(Status) {
    /** Factor requires activation. */ Status["INACTIVE"] = "INACTIVE";
    /** Factor is active and can be used for authentication. */ Status["ACTIVE"] = "ACTIVE";
    /** Factor is blocked and cannot be used for authentication. The user should reenroll the factor. */ Status["REQUIRE_REENROLL"] = "REQUIRE_REENROLL";
})(Status || (Status = {}));
var TenantType;
(function(TenantType) {
    TenantType["UNKNOWN_TENANT_TYPE"] = "UNKNOWN_TENANT_TYPE";
    TenantType["ACCOUNT"] = "ACCOUNT";
    TenantType["SITE"] = "SITE";
    TenantType["ROOT"] = "ROOT";
})(TenantType || (TenantType = {}));
async function registerV2(loginId, options) {
    // @ts-ignore
    const { httpClient, sideEffects } = arguments[2];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformPaths"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        loginId: loginId,
        password: options?.password,
        profile: options?.profile,
        captchaTokens: options?.captchaTokens,
        clientMetaData: options?.clientMetaData
    }), [
        {
            transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$address$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformSDKAddressToRESTAddress"],
            paths: [
                {
                    path: 'profile.addresses.address'
                }
            ]
        }
    ]);
    const reqOpts = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$http$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__.registerV2(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformPaths"])(result.data, [
            {
                transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$address$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformRESTAddressToSDKAddress"],
                paths: [
                    {
                        path: 'identity.identityProfile.addresses.address'
                    }
                ]
            }
        ]));
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                loginId: '$[0]',
                password: '$[1].password',
                profile: '$[1].profile',
                captchaTokens: '$[1].captchaTokens',
                clientMetaData: '$[1].clientMetaData'
            },
            singleArgumentUnchanged: false
        }, [
            'loginId',
            'options'
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function loginV2(loginId, options) {
    // @ts-ignore
    const { httpClient, sideEffects } = arguments[2];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        loginId: loginId,
        password: options?.password,
        captchaTokens: options?.captchaTokens,
        clientMetaData: options?.clientMetaData
    });
    const reqOpts = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$http$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__.loginV2(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformPaths"])(result.data, [
            {
                transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$address$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformRESTAddressToSDKAddress"],
                paths: [
                    {
                        path: 'identity.identityProfile.addresses.address'
                    }
                ]
            }
        ]));
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                loginId: '$[0]',
                password: '$[1].password',
                captchaTokens: '$[1].captchaTokens',
                clientMetaData: '$[1].clientMetaData'
            },
            singleArgumentUnchanged: false
        }, [
            'loginId',
            'options'
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function changePassword(newPassword) {
    // @ts-ignore
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        newPassword: newPassword
    });
    const reqOpts = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$http$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__.changePassword(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                newPassword: '$[0]'
            },
            singleArgumentUnchanged: false
        }, [
            'newPassword'
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function loginCallback(options) {
    // @ts-ignore
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        state: options?.state,
        sessionToken: options?.sessionToken
    });
    const reqOpts = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$http$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__.loginCallback(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                state: '$[0].state',
                sessionToken: '$[0].sessionToken'
            },
            singleArgumentUnchanged: false
        }, [
            'options'
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function signOn(loginId, options) {
    // @ts-ignore
    const { httpClient, sideEffects } = arguments[2];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformPaths"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        loginId: loginId,
        profile: options?.profile,
        verifyEmail: options?.verifyEmail,
        mergeExistingContact: options?.mergeExistingContact
    }), [
        {
            transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$address$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformSDKAddressToRESTAddress"],
            paths: [
                {
                    path: 'profile.addresses.address'
                }
            ]
        }
    ]);
    const reqOpts = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$http$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__.signOn(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformPaths"])(result.data, [
            {
                transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$address$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformRESTAddressToSDKAddress"],
                paths: [
                    {
                        path: 'identity.identityProfile.addresses.address'
                    }
                ]
            }
        ]));
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                loginId: '$[0]',
                profile: '$[1].profile',
                verifyEmail: '$[1].verifyEmail',
                mergeExistingContact: '$[1].mergeExistingContact'
            },
            singleArgumentUnchanged: false
        }, [
            'loginId',
            'options'
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function logout(options) {
    // @ts-ignore
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        postLogoutRedirectUri: options?.postLogoutRedirectUri,
        clientId: options?.clientId
    });
    const reqOpts = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$http$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__.logout(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                postLogoutRedirectUri: '$[0].postLogoutRedirectUri',
                clientId: '$[0].clientId'
            },
            singleArgumentUnchanged: false
        }, [
            'options'
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function verify(factorType, options) {
    // @ts-ignore
    const { httpClient, sideEffects } = arguments[2];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        factorType: factorType,
        stateToken: options?.stateToken,
        rememberThisDevice: options?.rememberThisDevice,
        smsData: options?.smsData,
        callData: options?.callData,
        emailData: options?.emailData,
        totpData: options?.totpData,
        pushData: options?.pushData
    });
    const reqOpts = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$http$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__.verify(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformPaths"])(result.data, [
            {
                transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$address$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformRESTAddressToSDKAddress"],
                paths: [
                    {
                        path: 'identity.identityProfile.addresses.address'
                    }
                ]
            }
        ]));
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                factorType: '$[0]',
                stateToken: '$[1].stateToken',
                rememberThisDevice: '$[1].rememberThisDevice',
                smsData: '$[1].smsData',
                callData: '$[1].callData',
                emailData: '$[1].emailData',
                totpData: '$[1].totpData',
                pushData: '$[1].pushData'
            },
            singleArgumentUnchanged: false
        }, [
            'factorType',
            'options'
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
} //# sourceMappingURL=iam-authentication-v1-authentication-authentication.universal.js.map
}}),
"[project]/node_modules/@wix/identity_authentication/build/es/src/iam-authentication-v1-authentication-authentication.public.js [middleware] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "__metadata": (()=>__metadata),
    "changePassword": (()=>changePassword),
    "loginCallback": (()=>loginCallback),
    "loginV2": (()=>loginV2),
    "logout": (()=>logout),
    "registerV2": (()=>registerV2),
    "signOn": (()=>signOn),
    "verify": (()=>verify)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/identity_authentication/build/es/src/iam-authentication-v1-authentication-authentication.universal.js [middleware] (ecmascript)");
;
const __metadata = {
    PACKAGE_NAME: '@wix/identity'
};
function registerV2(httpClient) {
    return (loginId, options)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["registerV2"])(loginId, options, // @ts-ignore
        {
            httpClient
        });
}
function loginV2(httpClient) {
    return (loginId, options)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["loginV2"])(loginId, options, // @ts-ignore
        {
            httpClient
        });
}
function changePassword(httpClient) {
    return (newPassword)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["changePassword"])(newPassword, // @ts-ignore
        {
            httpClient
        });
}
function loginCallback(httpClient) {
    return (options)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["loginCallback"])(options, // @ts-ignore
        {
            httpClient
        });
}
function signOn(httpClient) {
    return (loginId, options)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["signOn"])(loginId, options, // @ts-ignore
        {
            httpClient
        });
}
function logout(httpClient) {
    return (options)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["logout"])(options, // @ts-ignore
        {
            httpClient
        });
}
function verify(httpClient) {
    return (factorType, options)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["verify"])(factorType, options, // @ts-ignore
        {
            httpClient
        });
}
;
 //# sourceMappingURL=iam-authentication-v1-authentication-authentication.public.js.map
}}),
"[project]/node_modules/@wix/identity_authentication/build/es/src/iam-authentication-v1-authentication-authentication.public.js [middleware] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/identity_authentication/build/es/src/iam-authentication-v1-authentication-authentication.universal.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$public$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@wix/identity_authentication/build/es/src/iam-authentication-v1-authentication-authentication.public.js [middleware] (ecmascript) <locals>");
}}),
"[project]/node_modules/@wix/identity_authentication/build/es/src/iam-authentication-v1-authentication-authentication.context.js [middleware] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "changePassword": (()=>changePassword),
    "loginCallback": (()=>loginCallback),
    "loginV2": (()=>loginV2),
    "logout": (()=>logout),
    "registerV2": (()=>registerV2),
    "signOn": (()=>signOn),
    "verify": (()=>verify)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk-runtime/build/rest-modules.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$public$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@wix/identity_authentication/build/es/src/iam-authentication-v1-authentication-authentication.public.js [middleware] (ecmascript) <locals>");
;
;
const registerV2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createRESTModule"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$public$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerV2"]);
const loginV2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createRESTModule"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$public$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["loginV2"]);
const changePassword = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createRESTModule"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$public$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["changePassword"]);
const loginCallback = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createRESTModule"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$public$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["loginCallback"]);
const signOn = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createRESTModule"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$public$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["signOn"]);
const logout = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createRESTModule"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$public$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["logout"]);
const verify = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createRESTModule"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$public$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["verify"]);
;
 //# sourceMappingURL=iam-authentication-v1-authentication-authentication.context.js.map
}}),
"[project]/node_modules/@wix/identity_authentication/build/es/src/iam-authentication-v1-authentication-authentication.context.js [middleware] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$public$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@wix/identity_authentication/build/es/src/iam-authentication-v1-authentication-authentication.public.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/identity_authentication/build/es/src/iam-authentication-v1-authentication-authentication.universal.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@wix/identity_authentication/build/es/src/iam-authentication-v1-authentication-authentication.context.js [middleware] (ecmascript) <locals>");
}}),
"[project]/node_modules/@wix/identity_authentication/build/es/index.js [middleware] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
 //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/@wix/identity_authentication/build/es/index.js [middleware] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@wix/identity_authentication/build/es/src/iam-authentication-v1-authentication-authentication.context.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@wix/identity_authentication/build/es/index.js [middleware] (ecmascript) <locals>");
}}),
"[project]/node_modules/@wix/identity_recovery/build/es/src/iam-recovery-v1-recovery-recovery.http.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "recover": (()=>recover),
    "sendActivationEmail": (()=>sendActivationEmail),
    "sendRecoveryEmail": (()=>sendRecoveryEmail)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk-runtime/build/rest-modules.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk-runtime/build/transformations/transform-paths.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk-runtime/build/transformations/timestamp.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$float$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk-runtime/build/transformations/float.js [middleware] (ecmascript)");
;
;
;
;
function resolveWixIamRecoveryV1RecoveryServiceUrl(opts) {
    const domainToMappings = {
        _: [
            {
                srcPath: '/_iam/recovery',
                destPath: ''
            },
            {
                srcPath: '/_api/iam/recovery',
                destPath: ''
            }
        ],
        'www.wixapis.com': [
            {
                srcPath: '/_api/iam/recovery',
                destPath: ''
            }
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["resolveUrl"])(Object.assign(opts, {
        domainToMappings
    }));
}
const PACKAGE_NAME = '@wix/identity_recovery';
function sendRecoveryEmail(payload) {
    function __sendRecoveryEmail({ host }) {
        const metadata = {
            entityFqdn: 'wix.iam.recovery.v1.recovery',
            method: 'POST',
            methodFqn: 'wix.iam.recovery.v1.RecoveryService.SendRecoveryEmail',
            packageName: PACKAGE_NAME,
            url: resolveWixIamRecoveryV1RecoveryServiceUrl({
                protoPath: '/v1/send-email',
                data: payload,
                host
            }),
            data: payload
        };
        return metadata;
    }
    return __sendRecoveryEmail;
}
function sendActivationEmail(payload) {
    function __sendActivationEmail({ host }) {
        const metadata = {
            entityFqdn: 'wix.iam.recovery.v1.recovery',
            method: 'POST',
            methodFqn: 'wix.iam.recovery.v1.RecoveryService.SendActivationEmail',
            packageName: PACKAGE_NAME,
            url: resolveWixIamRecoveryV1RecoveryServiceUrl({
                protoPath: '/v1/activation-email',
                data: payload,
                host
            }),
            data: payload
        };
        return metadata;
    }
    return __sendActivationEmail;
}
function recover(payload) {
    function __recover({ host }) {
        const metadata = {
            entityFqdn: 'wix.iam.recovery.v1.recovery',
            method: 'POST',
            methodFqn: 'wix.iam.recovery.v1.RecoveryService.Recover',
            packageName: PACKAGE_NAME,
            url: resolveWixIamRecoveryV1RecoveryServiceUrl({
                protoPath: '/v1/recover',
                data: payload,
                host
            }),
            data: payload,
            transformResponse: (payload)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformPaths"])(payload, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
                        paths: [
                            {
                                path: 'identity.createdDate'
                            },
                            {
                                path: 'identity.updatedDate'
                            },
                            {
                                path: 'identity.identityProfile.customFields.value.dateValue'
                            },
                            {
                                path: 'additionalData.dateValue'
                            }
                        ]
                    },
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$float$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformRESTFloatToSDKFloat"],
                        paths: [
                            {
                                path: 'identity.identityProfile.customFields.value.numValue'
                            },
                            {
                                path: 'additionalData.numValue'
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __recover;
} //# sourceMappingURL=iam-recovery-v1-recovery-recovery.http.js.map
}}),
"[project]/node_modules/@wix/identity_recovery/build/es/src/iam-recovery-v1-recovery-recovery.universal.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AddressTag": (()=>AddressTag),
    "EmailTag": (()=>EmailTag),
    "FactorType": (()=>FactorType),
    "PhoneTag": (()=>PhoneTag),
    "PrivacyStatus": (()=>PrivacyStatus),
    "Reason": (()=>Reason),
    "StateType": (()=>StateType),
    "Status": (()=>Status),
    "StatusName": (()=>StatusName),
    "TenantType": (()=>TenantType),
    "recover": (()=>recover),
    "sendActivationEmail": (()=>sendActivationEmail),
    "sendRecoveryEmail": (()=>sendRecoveryEmail)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$http$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/identity_recovery/build/es/src/iam-recovery-v1-recovery-recovery.http.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk-runtime/build/rename-all-nested-keys.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk-runtime/build/transform-error.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk-runtime/build/transformations/transform-paths.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$address$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk-runtime/build/transformations/address.js [middleware] (ecmascript)");
;
;
;
;
;
var TenantType;
(function(TenantType) {
    TenantType["UNKNOWN_TENANT_TYPE"] = "UNKNOWN_TENANT_TYPE";
    TenantType["ACCOUNT"] = "ACCOUNT";
    TenantType["SITE"] = "SITE";
    TenantType["ROOT"] = "ROOT";
})(TenantType || (TenantType = {}));
var StateType;
(function(StateType) {
    /** Initial unknown state. */ StateType["UNKNOWN_STATE"] = "UNKNOWN_STATE";
    /** Login completed successfully. */ StateType["SUCCESS"] = "SUCCESS";
    /** Indicates that the member needs the owner to approve their registration. */ StateType["REQUIRE_OWNER_APPROVAL"] = "REQUIRE_OWNER_APPROVAL";
    /** Indicates that the member needs to verify their email. */ StateType["REQUIRE_EMAIL_VERIFICATION"] = "REQUIRE_EMAIL_VERIFICATION";
    /** Indicates that the `status` is not one that prevents the member logging in, meaning it's not `OFFLINE`, `BLOCKED`, or `DELETED`. */ StateType["STATUS_CHECK"] = "STATUS_CHECK";
})(StateType || (StateType = {}));
var PrivacyStatus;
(function(PrivacyStatus) {
    /** No defined privacy status. */ PrivacyStatus["UNDEFINED"] = "UNDEFINED";
    /** Profile details, such as profile name and profile picture, are visible to other members. */ PrivacyStatus["PUBLIC"] = "PUBLIC";
    /** Profile details aren't visible to other members. */ PrivacyStatus["PRIVATE"] = "PRIVATE";
})(PrivacyStatus || (PrivacyStatus = {}));
var EmailTag;
(function(EmailTag) {
    EmailTag["UNTAGGED"] = "UNTAGGED";
    EmailTag["MAIN"] = "MAIN";
    EmailTag["HOME"] = "HOME";
    EmailTag["WORK"] = "WORK";
})(EmailTag || (EmailTag = {}));
var PhoneTag;
(function(PhoneTag) {
    PhoneTag["UNTAGGED"] = "UNTAGGED";
    PhoneTag["MAIN"] = "MAIN";
    PhoneTag["HOME"] = "HOME";
    PhoneTag["MOBILE"] = "MOBILE";
    PhoneTag["WORK"] = "WORK";
    PhoneTag["FAX"] = "FAX";
})(PhoneTag || (PhoneTag = {}));
var AddressTag;
(function(AddressTag) {
    AddressTag["UNTAGGED"] = "UNTAGGED";
    AddressTag["HOME"] = "HOME";
    AddressTag["WORK"] = "WORK";
    AddressTag["BILLING"] = "BILLING";
    AddressTag["SHIPPING"] = "SHIPPING";
})(AddressTag || (AddressTag = {}));
var StatusName;
(function(StatusName) {
    StatusName["UNKNOWN_STATUS"] = "UNKNOWN_STATUS";
    StatusName["PENDING"] = "PENDING";
    StatusName["ACTIVE"] = "ACTIVE";
    StatusName["DELETED"] = "DELETED";
    StatusName["BLOCKED"] = "BLOCKED";
    StatusName["OFFLINE"] = "OFFLINE";
})(StatusName || (StatusName = {}));
var Reason;
(function(Reason) {
    Reason["UNKNOWN_REASON"] = "UNKNOWN_REASON";
    Reason["PENDING_ADMIN_APPROVAL_REQUIRED"] = "PENDING_ADMIN_APPROVAL_REQUIRED";
    Reason["PENDING_EMAIL_VERIFICATION_REQUIRED"] = "PENDING_EMAIL_VERIFICATION_REQUIRED";
})(Reason || (Reason = {}));
var FactorType;
(function(FactorType) {
    /** Unknown factor type. */ FactorType["UNKNOWN_FACTOR_TYPE"] = "UNKNOWN_FACTOR_TYPE";
    /** Requires a password. */ FactorType["PASSWORD"] = "PASSWORD";
    /** Requires a code sent via SMS. */ FactorType["SMS"] = "SMS";
    /** Requires a code sent by phone call. */ FactorType["CALL"] = "CALL";
    /** Requires a code sent by email. */ FactorType["EMAIL"] = "EMAIL";
    /** Requires authentication via an authenticator app. */ FactorType["TOTP"] = "TOTP";
    /** Requires authentication via a push notification. */ FactorType["PUSH"] = "PUSH";
})(FactorType || (FactorType = {}));
var Status;
(function(Status) {
    /** Factor requires activation. */ Status["INACTIVE"] = "INACTIVE";
    /** Factor is active and can be used for authentication. */ Status["ACTIVE"] = "ACTIVE";
    /** Factor is blocked and cannot be used for authentication. The user should reenroll the factor. */ Status["REQUIRE_REENROLL"] = "REQUIRE_REENROLL";
})(Status || (Status = {}));
async function sendRecoveryEmail(email, options) {
    // @ts-ignore
    const { httpClient, sideEffects } = arguments[2];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        email: email,
        language: options?.language,
        redirect: options?.redirect
    });
    const reqOpts = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$http$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__.sendRecoveryEmail(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                email: '$[0]',
                language: '$[1].language',
                redirect: '$[1].redirect'
            },
            singleArgumentUnchanged: false
        }, [
            'email',
            'options'
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function sendActivationEmail(identityId, options) {
    // @ts-ignore
    const { httpClient, sideEffects } = arguments[2];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        identityId: identityId,
        emailOptions: options?.emailOptions
    });
    const reqOpts = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$http$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__.sendActivationEmail(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                identityId: '$[0]',
                emailOptions: '$[1].emailOptions'
            },
            singleArgumentUnchanged: false
        }, [
            'identityId',
            'options'
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function recover(recoveryToken, options) {
    // @ts-ignore
    const { httpClient, sideEffects } = arguments[2];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        recoveryToken: recoveryToken,
        password: options?.password
    });
    const reqOpts = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$http$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__.recover(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformPaths"])(result.data, [
            {
                transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$address$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformRESTAddressToSDKAddress"],
                paths: [
                    {
                        path: 'identity.identityProfile.addresses.address'
                    }
                ]
            }
        ]));
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                recoveryToken: '$[0]',
                password: '$[1].password'
            },
            singleArgumentUnchanged: false
        }, [
            'recoveryToken',
            'options'
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
} //# sourceMappingURL=iam-recovery-v1-recovery-recovery.universal.js.map
}}),
"[project]/node_modules/@wix/identity_recovery/build/es/src/iam-recovery-v1-recovery-recovery.public.js [middleware] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "__metadata": (()=>__metadata),
    "recover": (()=>recover),
    "sendActivationEmail": (()=>sendActivationEmail),
    "sendRecoveryEmail": (()=>sendRecoveryEmail)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/identity_recovery/build/es/src/iam-recovery-v1-recovery-recovery.universal.js [middleware] (ecmascript)");
;
const __metadata = {
    PACKAGE_NAME: '@wix/identity'
};
function sendRecoveryEmail(httpClient) {
    return (email, options)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["sendRecoveryEmail"])(email, options, // @ts-ignore
        {
            httpClient
        });
}
function sendActivationEmail(httpClient) {
    return (identityId, options)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["sendActivationEmail"])(identityId, options, // @ts-ignore
        {
            httpClient
        });
}
function recover(httpClient) {
    return (recoveryToken, options)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["recover"])(recoveryToken, options, // @ts-ignore
        {
            httpClient
        });
}
;
 //# sourceMappingURL=iam-recovery-v1-recovery-recovery.public.js.map
}}),
"[project]/node_modules/@wix/identity_recovery/build/es/src/iam-recovery-v1-recovery-recovery.public.js [middleware] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/identity_recovery/build/es/src/iam-recovery-v1-recovery-recovery.universal.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$public$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@wix/identity_recovery/build/es/src/iam-recovery-v1-recovery-recovery.public.js [middleware] (ecmascript) <locals>");
}}),
"[project]/node_modules/@wix/identity_recovery/build/es/src/iam-recovery-v1-recovery-recovery.context.js [middleware] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "recover": (()=>recover),
    "sendActivationEmail": (()=>sendActivationEmail),
    "sendRecoveryEmail": (()=>sendRecoveryEmail)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk-runtime/build/rest-modules.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$public$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@wix/identity_recovery/build/es/src/iam-recovery-v1-recovery-recovery.public.js [middleware] (ecmascript) <locals>");
;
;
const sendRecoveryEmail = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createRESTModule"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$public$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["sendRecoveryEmail"]);
const sendActivationEmail = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createRESTModule"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$public$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["sendActivationEmail"]);
const recover = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createRESTModule"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$public$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["recover"]);
;
 //# sourceMappingURL=iam-recovery-v1-recovery-recovery.context.js.map
}}),
"[project]/node_modules/@wix/identity_recovery/build/es/src/iam-recovery-v1-recovery-recovery.context.js [middleware] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$public$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@wix/identity_recovery/build/es/src/iam-recovery-v1-recovery-recovery.public.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/identity_recovery/build/es/src/iam-recovery-v1-recovery-recovery.universal.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@wix/identity_recovery/build/es/src/iam-recovery-v1-recovery-recovery.context.js [middleware] (ecmascript) <locals>");
}}),
"[project]/node_modules/@wix/identity_recovery/build/es/index.js [middleware] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
 //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/@wix/identity_recovery/build/es/index.js [middleware] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@wix/identity_recovery/build/es/src/iam-recovery-v1-recovery-recovery.context.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@wix/identity_recovery/build/es/index.js [middleware] (ecmascript) <locals>");
}}),
"[project]/node_modules/@wix/identity_verification/build/es/src/iam-verification-v1-start-response-verification.http.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "resendDuringAuthentication": (()=>resendDuringAuthentication),
    "start": (()=>start),
    "verifyDuringAuthentication": (()=>verifyDuringAuthentication)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk-runtime/build/rest-modules.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk-runtime/build/transformations/transform-paths.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk-runtime/build/transformations/timestamp.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$float$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk-runtime/build/transformations/float.js [middleware] (ecmascript)");
;
;
;
;
function resolveWixIamVerificationV1VerificationServiceUrl(opts) {
    const domainToMappings = {
        'www.wixapis.com': [
            {
                srcPath: '/_api/iam/verification',
                destPath: ''
            }
        ],
        _: [
            {
                srcPath: '/_api/iam/verification',
                destPath: ''
            }
        ],
        'www._base_domain_': [
            {
                srcPath: '/_api/iam/verification',
                destPath: ''
            }
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["resolveUrl"])(Object.assign(opts, {
        domainToMappings
    }));
}
const PACKAGE_NAME = '@wix/identity_verification';
function start(payload) {
    function __start({ host }) {
        const metadata = {
            entityFqdn: 'wix.iam.verification.v1.start_response',
            method: 'POST',
            methodFqn: 'wix.iam.verification.v1.VerificationService.Start',
            packageName: PACKAGE_NAME,
            url: resolveWixIamVerificationV1VerificationServiceUrl({
                protoPath: '/v1/Start',
                data: payload,
                host
            }),
            data: payload
        };
        return metadata;
    }
    return __start;
}
function verifyDuringAuthentication(payload) {
    function __verifyDuringAuthentication({ host }) {
        const metadata = {
            entityFqdn: 'wix.iam.verification.v1.start_response',
            method: 'POST',
            methodFqn: 'wix.iam.verification.v1.VerificationService.VerifyDuringAuthentication',
            packageName: PACKAGE_NAME,
            url: resolveWixIamVerificationV1VerificationServiceUrl({
                protoPath: '/v1/auth/verify',
                data: payload,
                host
            }),
            data: payload,
            transformResponse: (payload)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformPaths"])(payload, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
                        paths: [
                            {
                                path: 'identity.createdDate'
                            },
                            {
                                path: 'identity.updatedDate'
                            },
                            {
                                path: 'identity.identityProfile.customFields.value.dateValue'
                            },
                            {
                                path: 'additionalData.dateValue'
                            }
                        ]
                    },
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$float$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformRESTFloatToSDKFloat"],
                        paths: [
                            {
                                path: 'identity.identityProfile.customFields.value.numValue'
                            },
                            {
                                path: 'additionalData.numValue'
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __verifyDuringAuthentication;
}
function resendDuringAuthentication(payload) {
    function __resendDuringAuthentication({ host }) {
        const metadata = {
            entityFqdn: 'wix.iam.verification.v1.start_response',
            method: 'POST',
            methodFqn: 'wix.iam.verification.v1.VerificationService.ResendDuringAuthentication',
            packageName: PACKAGE_NAME,
            url: resolveWixIamVerificationV1VerificationServiceUrl({
                protoPath: '/v1/auth/resend',
                data: payload,
                host
            }),
            data: payload,
            transformResponse: (payload)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformPaths"])(payload, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$timestamp$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformRESTTimestampToSDKTimestamp"],
                        paths: [
                            {
                                path: 'identity.createdDate'
                            },
                            {
                                path: 'identity.updatedDate'
                            },
                            {
                                path: 'identity.identityProfile.customFields.value.dateValue'
                            },
                            {
                                path: 'additionalData.dateValue'
                            }
                        ]
                    },
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$float$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformRESTFloatToSDKFloat"],
                        paths: [
                            {
                                path: 'identity.identityProfile.customFields.value.numValue'
                            },
                            {
                                path: 'additionalData.numValue'
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __resendDuringAuthentication;
} //# sourceMappingURL=iam-verification-v1-start-response-verification.http.js.map
}}),
"[project]/node_modules/@wix/identity_verification/build/es/src/iam-verification-v1-start-response-verification.universal.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AddressTag": (()=>AddressTag),
    "EmailTag": (()=>EmailTag),
    "FactorType": (()=>FactorType),
    "PhoneTag": (()=>PhoneTag),
    "PrivacyStatus": (()=>PrivacyStatus),
    "Reason": (()=>Reason),
    "StateType": (()=>StateType),
    "Status": (()=>Status),
    "StatusName": (()=>StatusName),
    "Target": (()=>Target),
    "resendDuringAuthentication": (()=>resendDuringAuthentication),
    "start": (()=>start),
    "verifyDuringAuthentication": (()=>verifyDuringAuthentication)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$http$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/identity_verification/build/es/src/iam-verification-v1-start-response-verification.http.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk-runtime/build/rename-all-nested-keys.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk-runtime/build/transform-error.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk-runtime/build/transformations/transform-paths.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$address$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk-runtime/build/transformations/address.js [middleware] (ecmascript)");
;
;
;
;
;
var Target;
(function(Target) {
    Target["UNKNOWN_TARGET"] = "UNKNOWN_TARGET";
    Target["EMAIL"] = "EMAIL";
})(Target || (Target = {}));
var StateType;
(function(StateType) {
    /** Initial unknown state. */ StateType["UNKNOWN_STATE"] = "UNKNOWN_STATE";
    /** Login completed successfully. */ StateType["SUCCESS"] = "SUCCESS";
    /** Indicates that the member needs the owner to approve their registration. */ StateType["REQUIRE_OWNER_APPROVAL"] = "REQUIRE_OWNER_APPROVAL";
    /** Indicates that the member needs to verify their email. */ StateType["REQUIRE_EMAIL_VERIFICATION"] = "REQUIRE_EMAIL_VERIFICATION";
    /** Indicates that the `status` is not one that prevents the member logging in, meaning it's not `OFFLINE`, `BLOCKED`, or `DELETED`. */ StateType["STATUS_CHECK"] = "STATUS_CHECK";
})(StateType || (StateType = {}));
var PrivacyStatus;
(function(PrivacyStatus) {
    /** No defined privacy status. */ PrivacyStatus["UNDEFINED"] = "UNDEFINED";
    /** Profile details, such as profile name and profile picture, are visible to other members. */ PrivacyStatus["PUBLIC"] = "PUBLIC";
    /** Profile details aren't visible to other members. */ PrivacyStatus["PRIVATE"] = "PRIVATE";
})(PrivacyStatus || (PrivacyStatus = {}));
var EmailTag;
(function(EmailTag) {
    EmailTag["UNTAGGED"] = "UNTAGGED";
    EmailTag["MAIN"] = "MAIN";
    EmailTag["HOME"] = "HOME";
    EmailTag["WORK"] = "WORK";
})(EmailTag || (EmailTag = {}));
var PhoneTag;
(function(PhoneTag) {
    PhoneTag["UNTAGGED"] = "UNTAGGED";
    PhoneTag["MAIN"] = "MAIN";
    PhoneTag["HOME"] = "HOME";
    PhoneTag["MOBILE"] = "MOBILE";
    PhoneTag["WORK"] = "WORK";
    PhoneTag["FAX"] = "FAX";
})(PhoneTag || (PhoneTag = {}));
var AddressTag;
(function(AddressTag) {
    AddressTag["UNTAGGED"] = "UNTAGGED";
    AddressTag["HOME"] = "HOME";
    AddressTag["WORK"] = "WORK";
    AddressTag["BILLING"] = "BILLING";
    AddressTag["SHIPPING"] = "SHIPPING";
})(AddressTag || (AddressTag = {}));
var StatusName;
(function(StatusName) {
    StatusName["UNKNOWN_STATUS"] = "UNKNOWN_STATUS";
    StatusName["PENDING"] = "PENDING";
    StatusName["ACTIVE"] = "ACTIVE";
    StatusName["DELETED"] = "DELETED";
    StatusName["BLOCKED"] = "BLOCKED";
    StatusName["OFFLINE"] = "OFFLINE";
})(StatusName || (StatusName = {}));
var Reason;
(function(Reason) {
    Reason["UNKNOWN_REASON"] = "UNKNOWN_REASON";
    Reason["PENDING_ADMIN_APPROVAL_REQUIRED"] = "PENDING_ADMIN_APPROVAL_REQUIRED";
    Reason["PENDING_EMAIL_VERIFICATION_REQUIRED"] = "PENDING_EMAIL_VERIFICATION_REQUIRED";
})(Reason || (Reason = {}));
var FactorType;
(function(FactorType) {
    /** Unknown factor type. */ FactorType["UNKNOWN_FACTOR_TYPE"] = "UNKNOWN_FACTOR_TYPE";
    /** Requires a password. */ FactorType["PASSWORD"] = "PASSWORD";
    /** Requires a code sent via SMS. */ FactorType["SMS"] = "SMS";
    /** Requires a code sent by phone call. */ FactorType["CALL"] = "CALL";
    /** Requires a code sent by email. */ FactorType["EMAIL"] = "EMAIL";
    /** Requires authentication via an authenticator app. */ FactorType["TOTP"] = "TOTP";
    /** Requires authentication via a push notification. */ FactorType["PUSH"] = "PUSH";
})(FactorType || (FactorType = {}));
var Status;
(function(Status) {
    /** Factor requires activation. */ Status["INACTIVE"] = "INACTIVE";
    /** Factor is active and can be used for authentication. */ Status["ACTIVE"] = "ACTIVE";
    /** Factor is blocked and cannot be used for authentication. The user should reenroll the factor. */ Status["REQUIRE_REENROLL"] = "REQUIRE_REENROLL";
})(Status || (Status = {}));
async function start(options) {
    // @ts-ignore
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        identityId: options?.identityId,
        target: options?.target
    });
    const reqOpts = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$http$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__.start(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                identityId: '$[0].identityId',
                target: '$[0].target'
            },
            singleArgumentUnchanged: false
        }, [
            'options'
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function verifyDuringAuthentication(code, options) {
    // @ts-ignore
    const { httpClient, sideEffects } = arguments[2];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        code: code,
        stateToken: options?.stateToken
    });
    const reqOpts = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$http$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__.verifyDuringAuthentication(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformPaths"])(result.data, [
            {
                transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$address$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformRESTAddressToSDKAddress"],
                paths: [
                    {
                        path: 'identity.identityProfile.addresses.address'
                    }
                ]
            }
        ]));
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                code: '$[0]',
                stateToken: '$[1].stateToken'
            },
            singleArgumentUnchanged: false
        }, [
            'code',
            'options'
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function resendDuringAuthentication(stateToken) {
    // @ts-ignore
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        stateToken: stateToken
    });
    const reqOpts = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$http$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__.resendDuringAuthentication(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformPaths"])(result.data, [
            {
                transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$address$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformRESTAddressToSDKAddress"],
                paths: [
                    {
                        path: 'identity.identityProfile.addresses.address'
                    }
                ]
            }
        ]));
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                stateToken: '$[0]'
            },
            singleArgumentUnchanged: false
        }, [
            'stateToken'
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
} //# sourceMappingURL=iam-verification-v1-start-response-verification.universal.js.map
}}),
"[project]/node_modules/@wix/identity_verification/build/es/src/iam-verification-v1-start-response-verification.public.js [middleware] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "__metadata": (()=>__metadata),
    "resendDuringAuthentication": (()=>resendDuringAuthentication),
    "start": (()=>start),
    "verifyDuringAuthentication": (()=>verifyDuringAuthentication)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/identity_verification/build/es/src/iam-verification-v1-start-response-verification.universal.js [middleware] (ecmascript)");
;
const __metadata = {
    PACKAGE_NAME: '@wix/identity'
};
function start(httpClient) {
    return (options)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["start"])(options, // @ts-ignore
        {
            httpClient
        });
}
function verifyDuringAuthentication(httpClient) {
    return (code, options)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["verifyDuringAuthentication"])(code, options, // @ts-ignore
        {
            httpClient
        });
}
function resendDuringAuthentication(httpClient) {
    return (stateToken)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["resendDuringAuthentication"])(stateToken, // @ts-ignore
        {
            httpClient
        });
}
;
 //# sourceMappingURL=iam-verification-v1-start-response-verification.public.js.map
}}),
"[project]/node_modules/@wix/identity_verification/build/es/src/iam-verification-v1-start-response-verification.public.js [middleware] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/identity_verification/build/es/src/iam-verification-v1-start-response-verification.universal.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$public$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@wix/identity_verification/build/es/src/iam-verification-v1-start-response-verification.public.js [middleware] (ecmascript) <locals>");
}}),
"[project]/node_modules/@wix/identity_verification/build/es/src/iam-verification-v1-start-response-verification.context.js [middleware] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "resendDuringAuthentication": (()=>resendDuringAuthentication),
    "start": (()=>start),
    "verifyDuringAuthentication": (()=>verifyDuringAuthentication)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk-runtime/build/rest-modules.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$public$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@wix/identity_verification/build/es/src/iam-verification-v1-start-response-verification.public.js [middleware] (ecmascript) <locals>");
;
;
const start = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createRESTModule"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$public$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["start"]);
const verifyDuringAuthentication = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createRESTModule"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$public$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["verifyDuringAuthentication"]);
const resendDuringAuthentication = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createRESTModule"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$public$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resendDuringAuthentication"]);
;
 //# sourceMappingURL=iam-verification-v1-start-response-verification.context.js.map
}}),
"[project]/node_modules/@wix/identity_verification/build/es/src/iam-verification-v1-start-response-verification.context.js [middleware] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$public$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@wix/identity_verification/build/es/src/iam-verification-v1-start-response-verification.public.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/identity_verification/build/es/src/iam-verification-v1-start-response-verification.universal.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@wix/identity_verification/build/es/src/iam-verification-v1-start-response-verification.context.js [middleware] (ecmascript) <locals>");
}}),
"[project]/node_modules/@wix/identity_verification/build/es/index.js [middleware] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
 //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/@wix/identity_verification/build/es/index.js [middleware] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@wix/identity_verification/build/es/src/iam-verification-v1-start-response-verification.context.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@wix/identity_verification/build/es/index.js [middleware] (ecmascript) <locals>");
}}),
"[project]/node_modules/@wix/identity_oauth/build/es/src/identity-oauth-v1-refresh-token-oauth.http.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "token": (()=>token),
    "tokenInfo": (()=>tokenInfo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk-runtime/build/rest-modules.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk-runtime/build/transformations/transform-paths.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$bytes$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk-runtime/build/transformations/bytes.js [middleware] (ecmascript)");
;
;
;
;
function resolveWixIdentityOauth2V1Oauth2NgUrl(opts) {
    const domainToMappings = {
        'manage._base_domain_': [
            {
                srcPath: '/oauth2',
                destPath: '/v1/oauth'
            }
        ],
        'www.wixapis.com': [
            {
                srcPath: '/oauth2',
                destPath: '/v1/oauth'
            },
            {
                srcPath: '/oauth2/token_info',
                destPath: '/v1/token_info'
            }
        ],
        'users._base_domain_': [
            {
                srcPath: '/v1/oauth/device/verify',
                destPath: '/v1/oauth/device/verify'
            },
            {
                srcPath: '/v1/oauth/manage/user-code',
                destPath: '/v1/oauth/manage/user-code'
            },
            {
                srcPath: '/v2/oauth/device/verify',
                destPath: '/v2/oauth/device/verify'
            },
            {
                srcPath: '/v1/oauth/authorize',
                destPath: '/v1/oauth/authorize'
            }
        ],
        _: [
            {
                srcPath: '/_api/oauth2',
                destPath: '/v1/oauth'
            }
        ],
        'platform.rise.ai': [
            {
                srcPath: '/oauth2',
                destPath: '/v1/oauth'
            }
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["resolveUrl"])(Object.assign(opts, {
        domainToMappings
    }));
}
const PACKAGE_NAME = '@wix/identity_oauth';
function token(payload) {
    function __token({ host }) {
        const serializedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformPaths"])(payload, [
            {
                transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$bytes$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformSDKBytesToRESTBytes"],
                paths: [
                    {
                        path: 'body'
                    }
                ]
            }
        ]);
        const metadata = {
            entityFqdn: 'wix.identity.oauth.v1.refresh_token',
            method: 'POST',
            methodFqn: 'wix.identity.oauth2.v1.Oauth2Ng.Token',
            packageName: PACKAGE_NAME,
            url: resolveWixIdentityOauth2V1Oauth2NgUrl({
                protoPath: '/v1/oauth/token',
                data: serializedData,
                host
            }),
            data: serializedData,
            transformResponse: (payload)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformPaths"])(payload, [
                    {
                        transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$bytes$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformRESTBytesToSDKBytes"],
                        paths: [
                            {
                                path: 'body'
                            }
                        ]
                    }
                ])
        };
        return metadata;
    }
    return __token;
}
function tokenInfo(payload) {
    function __tokenInfo({ host }) {
        const serializedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$transform$2d$paths$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformPaths"])(payload, [
            {
                transformFn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transformations$2f$bytes$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformSDKBytesToRESTBytes"],
                paths: [
                    {
                        path: 'body'
                    }
                ]
            }
        ]);
        const metadata = {
            entityFqdn: 'wix.identity.oauth.v1.refresh_token',
            method: 'POST',
            methodFqn: 'wix.identity.oauth2.v1.Oauth2Ng.TokenInfo',
            packageName: PACKAGE_NAME,
            url: resolveWixIdentityOauth2V1Oauth2NgUrl({
                protoPath: '/v1/oauth/token-info',
                data: serializedData,
                host
            }),
            data: serializedData
        };
        return metadata;
    }
    return __tokenInfo;
} //# sourceMappingURL=identity-oauth-v1-refresh-token-oauth.http.js.map
}}),
"[project]/node_modules/@wix/identity_oauth/build/es/src/identity-oauth-v1-refresh-token-oauth.universal.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "SubjectType": (()=>SubjectType),
    "token": (()=>token),
    "tokenInfo": (()=>tokenInfo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_oauth$2f$build$2f$es$2f$src$2f$identity$2d$oauth$2d$v1$2d$refresh$2d$token$2d$oauth$2e$http$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/identity_oauth/build/es/src/identity-oauth-v1-refresh-token-oauth.http.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk-runtime/build/rename-all-nested-keys.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk-runtime/build/transform-error.js [middleware] (ecmascript)");
;
;
;
var SubjectType;
(function(SubjectType) {
    /** unknown subject type */ SubjectType["UNKNOWN"] = "UNKNOWN";
    /** user subject type */ SubjectType["USER"] = "USER";
    /** visitor subject type */ SubjectType["VISITOR"] = "VISITOR";
    /** member subject type */ SubjectType["MEMBER"] = "MEMBER";
    /** app subject type */ SubjectType["APP"] = "APP";
})(SubjectType || (SubjectType = {}));
async function token(options) {
    // @ts-ignore
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        body: options?.body,
        pathParams: options?.pathParams,
        queryParams: options?.queryParams,
        headers: options?.headers,
        method: options?.method,
        rawPath: options?.rawPath,
        rawQuery: options?.rawQuery
    });
    const reqOpts = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_oauth$2f$build$2f$es$2f$src$2f$identity$2d$oauth$2d$v1$2d$refresh$2d$token$2d$oauth$2e$http$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__.token(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                body: '$[0].body',
                pathParams: '$[0].pathParams',
                queryParams: '$[0].queryParams',
                headers: '$[0].headers',
                method: '$[0].method',
                rawPath: '$[0].rawPath',
                rawQuery: '$[0].rawQuery'
            },
            singleArgumentUnchanged: false
        }, [
            'options'
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
}
async function tokenInfo(options) {
    // @ts-ignore
    const { httpClient, sideEffects } = arguments[1];
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["renameKeysFromSDKRequestToRESTRequest"])({
        body: options?.body,
        pathParams: options?.pathParams,
        queryParams: options?.queryParams,
        headers: options?.headers,
        method: options?.method,
        rawPath: options?.rawPath,
        rawQuery: options?.rawQuery
    });
    const reqOpts = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_oauth$2f$build$2f$es$2f$src$2f$identity$2d$oauth$2d$v1$2d$refresh$2d$token$2d$oauth$2e$http$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__.tokenInfo(payload);
    sideEffects?.onSiteCall?.();
    try {
        const result = await httpClient.request(reqOpts);
        sideEffects?.onSuccess?.(result);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rename$2d$all$2d$nested$2d$keys$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["renameKeysFromRESTResponseToSDKResponse"])(result.data);
    } catch (err) {
        const transformedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$transform$2d$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["transformError"])(err, {
            spreadPathsToArguments: {},
            explicitPathsToArguments: {
                body: '$[0].body',
                pathParams: '$[0].pathParams',
                queryParams: '$[0].queryParams',
                headers: '$[0].headers',
                method: '$[0].method',
                rawPath: '$[0].rawPath',
                rawQuery: '$[0].rawQuery'
            },
            singleArgumentUnchanged: false
        }, [
            'options'
        ]);
        sideEffects?.onError?.(err);
        throw transformedError;
    }
} //# sourceMappingURL=identity-oauth-v1-refresh-token-oauth.universal.js.map
}}),
"[project]/node_modules/@wix/identity_oauth/build/es/src/identity-oauth-v1-refresh-token-oauth.public.js [middleware] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "__metadata": (()=>__metadata),
    "token": (()=>token),
    "tokenInfo": (()=>tokenInfo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_oauth$2f$build$2f$es$2f$src$2f$identity$2d$oauth$2d$v1$2d$refresh$2d$token$2d$oauth$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/identity_oauth/build/es/src/identity-oauth-v1-refresh-token-oauth.universal.js [middleware] (ecmascript)");
;
const __metadata = {
    PACKAGE_NAME: '@wix/identity'
};
function token(httpClient) {
    return (options)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_oauth$2f$build$2f$es$2f$src$2f$identity$2d$oauth$2d$v1$2d$refresh$2d$token$2d$oauth$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["token"])(options, // @ts-ignore
        {
            httpClient
        });
}
function tokenInfo(httpClient) {
    return (options)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_oauth$2f$build$2f$es$2f$src$2f$identity$2d$oauth$2d$v1$2d$refresh$2d$token$2d$oauth$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["tokenInfo"])(options, // @ts-ignore
        {
            httpClient
        });
}
;
 //# sourceMappingURL=identity-oauth-v1-refresh-token-oauth.public.js.map
}}),
"[project]/node_modules/@wix/identity_oauth/build/es/src/identity-oauth-v1-refresh-token-oauth.public.js [middleware] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_oauth$2f$build$2f$es$2f$src$2f$identity$2d$oauth$2d$v1$2d$refresh$2d$token$2d$oauth$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/identity_oauth/build/es/src/identity-oauth-v1-refresh-token-oauth.universal.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_oauth$2f$build$2f$es$2f$src$2f$identity$2d$oauth$2d$v1$2d$refresh$2d$token$2d$oauth$2e$public$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@wix/identity_oauth/build/es/src/identity-oauth-v1-refresh-token-oauth.public.js [middleware] (ecmascript) <locals>");
}}),
"[project]/node_modules/@wix/identity_oauth/build/es/src/identity-oauth-v1-refresh-token-oauth.context.js [middleware] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "token": (()=>token),
    "tokenInfo": (()=>tokenInfo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk-runtime/build/rest-modules.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_oauth$2f$build$2f$es$2f$src$2f$identity$2d$oauth$2d$v1$2d$refresh$2d$token$2d$oauth$2e$public$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@wix/identity_oauth/build/es/src/identity-oauth-v1-refresh-token-oauth.public.js [middleware] (ecmascript) <locals>");
;
;
const token = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createRESTModule"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_oauth$2f$build$2f$es$2f$src$2f$identity$2d$oauth$2d$v1$2d$refresh$2d$token$2d$oauth$2e$public$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["token"]);
const tokenInfo = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2d$runtime$2f$build$2f$rest$2d$modules$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createRESTModule"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_oauth$2f$build$2f$es$2f$src$2f$identity$2d$oauth$2d$v1$2d$refresh$2d$token$2d$oauth$2e$public$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tokenInfo"]);
;
 //# sourceMappingURL=identity-oauth-v1-refresh-token-oauth.context.js.map
}}),
"[project]/node_modules/@wix/identity_oauth/build/es/src/identity-oauth-v1-refresh-token-oauth.context.js [middleware] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_oauth$2f$build$2f$es$2f$src$2f$identity$2d$oauth$2d$v1$2d$refresh$2d$token$2d$oauth$2e$public$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@wix/identity_oauth/build/es/src/identity-oauth-v1-refresh-token-oauth.public.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_oauth$2f$build$2f$es$2f$src$2f$identity$2d$oauth$2d$v1$2d$refresh$2d$token$2d$oauth$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/identity_oauth/build/es/src/identity-oauth-v1-refresh-token-oauth.universal.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_oauth$2f$build$2f$es$2f$src$2f$identity$2d$oauth$2d$v1$2d$refresh$2d$token$2d$oauth$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@wix/identity_oauth/build/es/src/identity-oauth-v1-refresh-token-oauth.context.js [middleware] (ecmascript) <locals>");
}}),
"[project]/node_modules/@wix/identity_oauth/build/es/index.js [middleware] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
 //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/@wix/identity_oauth/build/es/index.js [middleware] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_oauth$2f$build$2f$es$2f$src$2f$identity$2d$oauth$2d$v1$2d$refresh$2d$token$2d$oauth$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@wix/identity_oauth/build/es/src/identity-oauth-v1-refresh-token-oauth.context.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_oauth$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@wix/identity_oauth/build/es/index.js [middleware] (ecmascript) <locals>");
}}),
"[project]/node_modules/@wix/identity/build/es/index.js [middleware] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
;
;
 //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/@wix/identity/build/es/index.js [middleware] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@wix/identity_authentication/build/es/index.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@wix/identity_recovery/build/es/index.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@wix/identity_verification/build/es/index.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_oauth$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@wix/identity_oauth/build/es/index.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@wix/identity/build/es/index.js [middleware] (ecmascript) <locals>");
}}),
"[project]/node_modules/@wix/redirects_redirects/build/es/src/headless-v1-redirect-session-redirects.context.js [middleware] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AttachPagesResponseStatus": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$src$2f$headless$2d$v1$2d$redirect$2d$session$2d$redirects$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["AttachPagesResponseStatus"]),
    "CallbackType": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$src$2f$headless$2d$v1$2d$redirect$2d$session$2d$redirects$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["CallbackType"]),
    "LocationType": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$src$2f$headless$2d$v1$2d$redirect$2d$session$2d$redirects$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["LocationType"]),
    "MembersAccountSection": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$src$2f$headless$2d$v1$2d$redirect$2d$session$2d$redirects$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["MembersAccountSection"]),
    "Prompt": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$src$2f$headless$2d$v1$2d$redirect$2d$session$2d$redirects$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["Prompt"]),
    "Status": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$src$2f$headless$2d$v1$2d$redirect$2d$session$2d$redirects$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["Status"]),
    "WebhookIdentityType": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$src$2f$headless$2d$v1$2d$redirect$2d$session$2d$redirects$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["WebhookIdentityType"]),
    "createRedirectSession": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$src$2f$headless$2d$v1$2d$redirect$2d$session$2d$redirects$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRedirectSession"]),
    "onRedirectSessionCreated": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$src$2f$headless$2d$v1$2d$redirect$2d$session$2d$redirects$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["onRedirectSessionCreated"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$src$2f$headless$2d$v1$2d$redirect$2d$session$2d$redirects$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/redirects_redirects/build/es/src/headless-v1-redirect-session-redirects.universal.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$src$2f$headless$2d$v1$2d$redirect$2d$session$2d$redirects$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@wix/redirects_redirects/build/es/src/headless-v1-redirect-session-redirects.context.js [middleware] (ecmascript) <locals>");
}}),
"[project]/node_modules/@wix/redirects_redirects/build/es/src/headless-v1-redirect-session-redirects.context.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AttachPagesResponseStatus": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$src$2f$headless$2d$v1$2d$redirect$2d$session$2d$redirects$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["AttachPagesResponseStatus"]),
    "CallbackType": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$src$2f$headless$2d$v1$2d$redirect$2d$session$2d$redirects$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["CallbackType"]),
    "LocationType": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$src$2f$headless$2d$v1$2d$redirect$2d$session$2d$redirects$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["LocationType"]),
    "MembersAccountSection": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$src$2f$headless$2d$v1$2d$redirect$2d$session$2d$redirects$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["MembersAccountSection"]),
    "Prompt": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$src$2f$headless$2d$v1$2d$redirect$2d$session$2d$redirects$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Prompt"]),
    "Status": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$src$2f$headless$2d$v1$2d$redirect$2d$session$2d$redirects$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Status"]),
    "WebhookIdentityType": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$src$2f$headless$2d$v1$2d$redirect$2d$session$2d$redirects$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["WebhookIdentityType"]),
    "createRedirectSession": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$src$2f$headless$2d$v1$2d$redirect$2d$session$2d$redirects$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createRedirectSession"]),
    "onRedirectSessionCreated": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$src$2f$headless$2d$v1$2d$redirect$2d$session$2d$redirects$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["onRedirectSessionCreated"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$src$2f$headless$2d$v1$2d$redirect$2d$session$2d$redirects$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@wix/redirects_redirects/build/es/src/headless-v1-redirect-session-redirects.context.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$src$2f$headless$2d$v1$2d$redirect$2d$session$2d$redirects$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_import__("[project]/node_modules/@wix/redirects_redirects/build/es/src/headless-v1-redirect-session-redirects.context.js [middleware] (ecmascript) <exports>");
}}),
"[project]/node_modules/@wix/redirects_redirects/build/es/index.js [middleware] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AttachPagesResponseStatus": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$src$2f$headless$2d$v1$2d$redirect$2d$session$2d$redirects$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["AttachPagesResponseStatus"]),
    "CallbackType": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$src$2f$headless$2d$v1$2d$redirect$2d$session$2d$redirects$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["CallbackType"]),
    "LocationType": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$src$2f$headless$2d$v1$2d$redirect$2d$session$2d$redirects$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["LocationType"]),
    "MembersAccountSection": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$src$2f$headless$2d$v1$2d$redirect$2d$session$2d$redirects$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["MembersAccountSection"]),
    "Prompt": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$src$2f$headless$2d$v1$2d$redirect$2d$session$2d$redirects$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["Prompt"]),
    "Status": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$src$2f$headless$2d$v1$2d$redirect$2d$session$2d$redirects$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["Status"]),
    "WebhookIdentityType": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$src$2f$headless$2d$v1$2d$redirect$2d$session$2d$redirects$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["WebhookIdentityType"]),
    "createRedirectSession": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$src$2f$headless$2d$v1$2d$redirect$2d$session$2d$redirects$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createRedirectSession"]),
    "onRedirectSessionCreated": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$src$2f$headless$2d$v1$2d$redirect$2d$session$2d$redirects$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["onRedirectSessionCreated"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$src$2f$headless$2d$v1$2d$redirect$2d$session$2d$redirects$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/redirects_redirects/build/es/src/headless-v1-redirect-session-redirects.context.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@wix/redirects_redirects/build/es/index.js [middleware] (ecmascript) <locals>");
}}),
"[project]/node_modules/@wix/redirects_redirects/build/es/index.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AttachPagesResponseStatus": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["AttachPagesResponseStatus"]),
    "CallbackType": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["CallbackType"]),
    "LocationType": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["LocationType"]),
    "MembersAccountSection": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["MembersAccountSection"]),
    "Prompt": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Prompt"]),
    "Status": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Status"]),
    "WebhookIdentityType": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["WebhookIdentityType"]),
    "createRedirectSession": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createRedirectSession"]),
    "onRedirectSessionCreated": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["onRedirectSessionCreated"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@wix/redirects_redirects/build/es/index.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_import__("[project]/node_modules/@wix/redirects_redirects/build/es/index.js [middleware] (ecmascript) <exports>");
}}),
"[project]/node_modules/@wix/redirects_redirects/build/es/index.js [middleware] (ecmascript) <export * as redirects>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "redirects": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/redirects_redirects/build/es/index.js [middleware] (ecmascript)");
}}),
"[project]/node_modules/@wix/identity_authentication/build/es/src/iam-authentication-v1-authentication-authentication.context.js [middleware] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AddressTag": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["AddressTag"]),
    "EmailTag": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["EmailTag"]),
    "FactorType": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["FactorType"]),
    "PhoneTag": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["PhoneTag"]),
    "PrivacyStatus": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["PrivacyStatus"]),
    "Reason": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["Reason"]),
    "StateType": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["StateType"]),
    "Status": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["Status"]),
    "StatusName": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["StatusName"]),
    "TenantType": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["TenantType"]),
    "changePassword": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["changePassword"]),
    "loginCallback": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["loginCallback"]),
    "loginV2": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["loginV2"]),
    "logout": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["logout"]),
    "registerV2": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerV2"]),
    "signOn": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["signOn"]),
    "verify": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["verify"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/identity_authentication/build/es/src/iam-authentication-v1-authentication-authentication.universal.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@wix/identity_authentication/build/es/src/iam-authentication-v1-authentication-authentication.context.js [middleware] (ecmascript) <locals>");
}}),
"[project]/node_modules/@wix/identity_authentication/build/es/src/iam-authentication-v1-authentication-authentication.context.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AddressTag": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["AddressTag"]),
    "EmailTag": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["EmailTag"]),
    "FactorType": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["FactorType"]),
    "PhoneTag": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["PhoneTag"]),
    "PrivacyStatus": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["PrivacyStatus"]),
    "Reason": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Reason"]),
    "StateType": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["StateType"]),
    "Status": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Status"]),
    "StatusName": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["StatusName"]),
    "TenantType": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["TenantType"]),
    "changePassword": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["changePassword"]),
    "loginCallback": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["loginCallback"]),
    "loginV2": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["loginV2"]),
    "logout": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["logout"]),
    "registerV2": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["registerV2"]),
    "signOn": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["signOn"]),
    "verify": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["verify"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@wix/identity_authentication/build/es/src/iam-authentication-v1-authentication-authentication.context.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_import__("[project]/node_modules/@wix/identity_authentication/build/es/src/iam-authentication-v1-authentication-authentication.context.js [middleware] (ecmascript) <exports>");
}}),
"[project]/node_modules/@wix/identity_authentication/build/es/index.js [middleware] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AddressTag": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["AddressTag"]),
    "EmailTag": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["EmailTag"]),
    "FactorType": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["FactorType"]),
    "PhoneTag": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["PhoneTag"]),
    "PrivacyStatus": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["PrivacyStatus"]),
    "Reason": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["Reason"]),
    "StateType": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["StateType"]),
    "Status": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["Status"]),
    "StatusName": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["StatusName"]),
    "TenantType": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["TenantType"]),
    "changePassword": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["changePassword"]),
    "loginCallback": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["loginCallback"]),
    "loginV2": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["loginV2"]),
    "logout": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["logout"]),
    "registerV2": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["registerV2"]),
    "signOn": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["signOn"]),
    "verify": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["verify"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$src$2f$iam$2d$authentication$2d$v1$2d$authentication$2d$authentication$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/identity_authentication/build/es/src/iam-authentication-v1-authentication-authentication.context.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@wix/identity_authentication/build/es/index.js [middleware] (ecmascript) <locals>");
}}),
"[project]/node_modules/@wix/identity_authentication/build/es/index.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AddressTag": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["AddressTag"]),
    "EmailTag": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["EmailTag"]),
    "FactorType": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["FactorType"]),
    "PhoneTag": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["PhoneTag"]),
    "PrivacyStatus": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["PrivacyStatus"]),
    "Reason": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Reason"]),
    "StateType": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["StateType"]),
    "Status": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Status"]),
    "StatusName": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["StatusName"]),
    "TenantType": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["TenantType"]),
    "changePassword": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["changePassword"]),
    "loginCallback": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["loginCallback"]),
    "loginV2": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["loginV2"]),
    "logout": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["logout"]),
    "registerV2": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["registerV2"]),
    "signOn": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["signOn"]),
    "verify": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["verify"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@wix/identity_authentication/build/es/index.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_import__("[project]/node_modules/@wix/identity_authentication/build/es/index.js [middleware] (ecmascript) <exports>");
}}),
"[project]/node_modules/@wix/identity_authentication/build/es/index.js [middleware] (ecmascript) <export * as authentication>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "authentication": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/identity_authentication/build/es/index.js [middleware] (ecmascript)");
}}),
"[project]/node_modules/@wix/identity_recovery/build/es/src/iam-recovery-v1-recovery-recovery.context.js [middleware] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AddressTag": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["AddressTag"]),
    "EmailTag": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["EmailTag"]),
    "FactorType": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["FactorType"]),
    "PhoneTag": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["PhoneTag"]),
    "PrivacyStatus": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["PrivacyStatus"]),
    "Reason": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["Reason"]),
    "StateType": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["StateType"]),
    "Status": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["Status"]),
    "StatusName": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["StatusName"]),
    "TenantType": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["TenantType"]),
    "recover": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["recover"]),
    "sendActivationEmail": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["sendActivationEmail"]),
    "sendRecoveryEmail": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["sendRecoveryEmail"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/identity_recovery/build/es/src/iam-recovery-v1-recovery-recovery.universal.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@wix/identity_recovery/build/es/src/iam-recovery-v1-recovery-recovery.context.js [middleware] (ecmascript) <locals>");
}}),
"[project]/node_modules/@wix/identity_recovery/build/es/src/iam-recovery-v1-recovery-recovery.context.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AddressTag": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["AddressTag"]),
    "EmailTag": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["EmailTag"]),
    "FactorType": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["FactorType"]),
    "PhoneTag": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["PhoneTag"]),
    "PrivacyStatus": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["PrivacyStatus"]),
    "Reason": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Reason"]),
    "StateType": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["StateType"]),
    "Status": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Status"]),
    "StatusName": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["StatusName"]),
    "TenantType": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["TenantType"]),
    "recover": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["recover"]),
    "sendActivationEmail": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["sendActivationEmail"]),
    "sendRecoveryEmail": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["sendRecoveryEmail"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@wix/identity_recovery/build/es/src/iam-recovery-v1-recovery-recovery.context.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_import__("[project]/node_modules/@wix/identity_recovery/build/es/src/iam-recovery-v1-recovery-recovery.context.js [middleware] (ecmascript) <exports>");
}}),
"[project]/node_modules/@wix/identity_recovery/build/es/index.js [middleware] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AddressTag": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["AddressTag"]),
    "EmailTag": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["EmailTag"]),
    "FactorType": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["FactorType"]),
    "PhoneTag": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["PhoneTag"]),
    "PrivacyStatus": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["PrivacyStatus"]),
    "Reason": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["Reason"]),
    "StateType": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["StateType"]),
    "Status": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["Status"]),
    "StatusName": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["StatusName"]),
    "TenantType": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["TenantType"]),
    "recover": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["recover"]),
    "sendActivationEmail": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["sendActivationEmail"]),
    "sendRecoveryEmail": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["sendRecoveryEmail"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$src$2f$iam$2d$recovery$2d$v1$2d$recovery$2d$recovery$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/identity_recovery/build/es/src/iam-recovery-v1-recovery-recovery.context.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@wix/identity_recovery/build/es/index.js [middleware] (ecmascript) <locals>");
}}),
"[project]/node_modules/@wix/identity_recovery/build/es/index.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AddressTag": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["AddressTag"]),
    "EmailTag": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["EmailTag"]),
    "FactorType": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["FactorType"]),
    "PhoneTag": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["PhoneTag"]),
    "PrivacyStatus": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["PrivacyStatus"]),
    "Reason": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Reason"]),
    "StateType": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["StateType"]),
    "Status": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Status"]),
    "StatusName": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["StatusName"]),
    "TenantType": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["TenantType"]),
    "recover": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["recover"]),
    "sendActivationEmail": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["sendActivationEmail"]),
    "sendRecoveryEmail": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["sendRecoveryEmail"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@wix/identity_recovery/build/es/index.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_import__("[project]/node_modules/@wix/identity_recovery/build/es/index.js [middleware] (ecmascript) <exports>");
}}),
"[project]/node_modules/@wix/identity_recovery/build/es/index.js [middleware] (ecmascript) <export * as recovery>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "recovery": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/identity_recovery/build/es/index.js [middleware] (ecmascript)");
}}),
"[project]/node_modules/@wix/identity_verification/build/es/src/iam-verification-v1-start-response-verification.context.js [middleware] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AddressTag": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["AddressTag"]),
    "EmailTag": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["EmailTag"]),
    "FactorType": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["FactorType"]),
    "PhoneTag": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["PhoneTag"]),
    "PrivacyStatus": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["PrivacyStatus"]),
    "Reason": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["Reason"]),
    "StateType": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["StateType"]),
    "Status": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["Status"]),
    "StatusName": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["StatusName"]),
    "Target": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["Target"]),
    "resendDuringAuthentication": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resendDuringAuthentication"]),
    "start": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["start"]),
    "verifyDuringAuthentication": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["verifyDuringAuthentication"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$universal$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/identity_verification/build/es/src/iam-verification-v1-start-response-verification.universal.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@wix/identity_verification/build/es/src/iam-verification-v1-start-response-verification.context.js [middleware] (ecmascript) <locals>");
}}),
"[project]/node_modules/@wix/identity_verification/build/es/src/iam-verification-v1-start-response-verification.context.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AddressTag": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["AddressTag"]),
    "EmailTag": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["EmailTag"]),
    "FactorType": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["FactorType"]),
    "PhoneTag": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["PhoneTag"]),
    "PrivacyStatus": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["PrivacyStatus"]),
    "Reason": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Reason"]),
    "StateType": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["StateType"]),
    "Status": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Status"]),
    "StatusName": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["StatusName"]),
    "Target": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Target"]),
    "resendDuringAuthentication": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["resendDuringAuthentication"]),
    "start": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["start"]),
    "verifyDuringAuthentication": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["verifyDuringAuthentication"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@wix/identity_verification/build/es/src/iam-verification-v1-start-response-verification.context.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_import__("[project]/node_modules/@wix/identity_verification/build/es/src/iam-verification-v1-start-response-verification.context.js [middleware] (ecmascript) <exports>");
}}),
"[project]/node_modules/@wix/identity_verification/build/es/index.js [middleware] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AddressTag": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["AddressTag"]),
    "EmailTag": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["EmailTag"]),
    "FactorType": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["FactorType"]),
    "PhoneTag": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["PhoneTag"]),
    "PrivacyStatus": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["PrivacyStatus"]),
    "Reason": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["Reason"]),
    "StateType": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["StateType"]),
    "Status": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["Status"]),
    "StatusName": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["StatusName"]),
    "Target": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["Target"]),
    "resendDuringAuthentication": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["resendDuringAuthentication"]),
    "start": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["start"]),
    "verifyDuringAuthentication": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["verifyDuringAuthentication"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$src$2f$iam$2d$verification$2d$v1$2d$start$2d$response$2d$verification$2e$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/identity_verification/build/es/src/iam-verification-v1-start-response-verification.context.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@wix/identity_verification/build/es/index.js [middleware] (ecmascript) <locals>");
}}),
"[project]/node_modules/@wix/identity_verification/build/es/index.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AddressTag": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["AddressTag"]),
    "EmailTag": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["EmailTag"]),
    "FactorType": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["FactorType"]),
    "PhoneTag": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["PhoneTag"]),
    "PrivacyStatus": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["PrivacyStatus"]),
    "Reason": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Reason"]),
    "StateType": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["StateType"]),
    "Status": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Status"]),
    "StatusName": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["StatusName"]),
    "Target": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Target"]),
    "resendDuringAuthentication": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["resendDuringAuthentication"]),
    "start": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["start"]),
    "verifyDuringAuthentication": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__["verifyDuringAuthentication"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@wix/identity_verification/build/es/index.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_import__("[project]/node_modules/@wix/identity_verification/build/es/index.js [middleware] (ecmascript) <exports>");
}}),
"[project]/node_modules/@wix/identity_verification/build/es/index.js [middleware] (ecmascript) <export * as verification>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "verification": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/identity_verification/build/es/index.js [middleware] (ecmascript)");
}}),
"[project]/node_modules/@wix/sdk/build/auth/oauth2/types.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "LoginState": (()=>LoginState),
    "TokenRole": (()=>TokenRole)
});
var LoginState;
(function(LoginState) {
    LoginState["SUCCESS"] = "SUCCESS";
    LoginState["INITIAL"] = "INITIAL";
    LoginState["FAILURE"] = "FAILURE";
    LoginState["EMAIL_VERIFICATION_REQUIRED"] = "EMAIL_VERIFICATION_REQUIRED";
    LoginState["OWNER_APPROVAL_REQUIRED"] = "OWNER_APPROVAL_REQUIRED";
    LoginState["USER_CAPTCHA_REQUIRED"] = "USER_CAPTCHA_REQUIRED";
    LoginState["SILENT_CAPTCHA_REQUIRED"] = "SILENT_CAPTCHA_REQUIRED";
})(LoginState || (LoginState = {}));
var TokenRole;
(function(TokenRole) {
    TokenRole["NONE"] = "none";
    TokenRole["VISITOR"] = "visitor";
    TokenRole["MEMBER"] = "member";
})(TokenRole || (TokenRole = {}));
}}),
"[project]/node_modules/@wix/sdk/build/tokenHelpers.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createAccessToken": (()=>createAccessToken),
    "getCurrentDate": (()=>getCurrentDate),
    "isTokenExpired": (()=>isTokenExpired)
});
function getCurrentDate() {
    return Math.floor(Date.now() / 1000);
}
function isTokenExpired(token) {
    const currentDate = getCurrentDate();
    return token.expiresAt < currentDate;
}
function createAccessToken(accessToken, expiresIn) {
    const now = getCurrentDate();
    return {
        value: accessToken,
        expiresAt: Number(expiresIn) + now
    };
}
}}),
"[project]/node_modules/@wix/sdk/build/auth/oauth2/sha256.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 * @version 0.11.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2024
 * @license MIT
 */ // Inline here to avoid bringing in another library, cause:
// 1. we have commited to a sync API (hopefully we'll change to async and
// can start using the builtin crypto sha256), so we need a sync sha256,
// but the existing sync sha256 libs are not ESM
// 2. avoid bringing in a library for a single function
__turbopack_esm__({
    "sha256": (()=>sha256)
});
const SHIFT = [
    24,
    16,
    8,
    0
];
const EXTRA = [
    -2147483648,
    8388608,
    32768,
    128
];
const K = [
    0x428a2f98,
    0x71374491,
    0xb5c0fbcf,
    0xe9b5dba5,
    0x3956c25b,
    0x59f111f1,
    0x923f82a4,
    0xab1c5ed5,
    0xd807aa98,
    0x12835b01,
    0x243185be,
    0x550c7dc3,
    0x72be5d74,
    0x80deb1fe,
    0x9bdc06a7,
    0xc19bf174,
    0xe49b69c1,
    0xefbe4786,
    0x0fc19dc6,
    0x240ca1cc,
    0x2de92c6f,
    0x4a7484aa,
    0x5cb0a9dc,
    0x76f988da,
    0x983e5152,
    0xa831c66d,
    0xb00327c8,
    0xbf597fc7,
    0xc6e00bf3,
    0xd5a79147,
    0x06ca6351,
    0x14292967,
    0x27b70a85,
    0x2e1b2138,
    0x4d2c6dfc,
    0x53380d13,
    0x650a7354,
    0x766a0abb,
    0x81c2c92e,
    0x92722c85,
    0xa2bfe8a1,
    0xa81a664b,
    0xc24b8b70,
    0xc76c51a3,
    0xd192e819,
    0xd6990624,
    0xf40e3585,
    0x106aa070,
    0x19a4c116,
    0x1e376c08,
    0x2748774c,
    0x34b0bcb5,
    0x391c0cb3,
    0x4ed8aa4a,
    0x5b9cca4f,
    0x682e6ff3,
    0x748f82ee,
    0x78a5636f,
    0x84c87814,
    0x8cc70208,
    0x90befffa,
    0xa4506ceb,
    0xbef9a3f7,
    0xc67178f2
];
class SHA256 {
    blocks;
    h0;
    h1;
    h2;
    h3;
    h4;
    h5;
    h6;
    h7;
    block;
    start;
    bytes;
    hBytes;
    finalized;
    hashed;
    first;
    lastByteIndex;
    chromeBugWorkAround;
    constructor(){
        this.blocks = [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ];
        // 256
        this.h0 = 0x6a09e667;
        this.h1 = 0xbb67ae85;
        this.h2 = 0x3c6ef372;
        this.h3 = 0xa54ff53a;
        this.h4 = 0x510e527f;
        this.h5 = 0x9b05688c;
        this.h6 = 0x1f83d9ab;
        this.h7 = 0x5be0cd19;
        this.block = this.start = this.bytes = this.hBytes = 0;
        this.finalized = this.hashed = false;
        this.first = true;
    }
    update(message) {
        const blocks = this.blocks;
        const length = message.length;
        let code, index = 0, i;
        while(index < length){
            if (this.hashed) {
                this.hashed = false;
                blocks[0] = this.block;
                this.block = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
            }
            for(i = this.start; index < length && i < 64; ++index){
                code = message.charCodeAt(index);
                if (code < 0x80) {
                    blocks[i >>> 2] |= code << SHIFT[i++ & 3];
                } else if (code < 0x800) {
                    blocks[i >>> 2] |= (0xc0 | code >>> 6) << SHIFT[i++ & 3];
                    blocks[i >>> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
                } else if (code < 0xd800 || code >= 0xe000) {
                    blocks[i >>> 2] |= (0xe0 | code >>> 12) << SHIFT[i++ & 3];
                    blocks[i >>> 2] |= (0x80 | code >>> 6 & 0x3f) << SHIFT[i++ & 3];
                    blocks[i >>> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
                } else {
                    code = 0x10000 + ((code & 0x3ff) << 10 | message.charCodeAt(++index) & 0x3ff);
                    blocks[i >>> 2] |= (0xf0 | code >>> 18) << SHIFT[i++ & 3];
                    blocks[i >>> 2] |= (0x80 | code >>> 12 & 0x3f) << SHIFT[i++ & 3];
                    blocks[i >>> 2] |= (0x80 | code >>> 6 & 0x3f) << SHIFT[i++ & 3];
                    blocks[i >>> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
                }
            }
            this.lastByteIndex = i;
            this.bytes += i - this.start;
            if (i >= 64) {
                this.block = blocks[16];
                this.start = i - 64;
                this.hash();
                this.hashed = true;
            } else {
                this.start = i;
            }
        }
        if (this.bytes > 4294967295) {
            this.hBytes += this.bytes / 4294967296 << 0;
            this.bytes = this.bytes % 4294967296;
        }
        return this;
    }
    hash() {
        const blocks = this.blocks;
        let a = this.h0, b = this.h1, c = this.h2, d = this.h3, e = this.h4, f = this.h5, g = this.h6, h = this.h7, j, s0, s1, maj, t1, t2, ch, ab, da, cd, bc;
        for(j = 16; j < 64; ++j){
            // rightrotate
            t1 = blocks[j - 15];
            s0 = (t1 >>> 7 | t1 << 25) ^ (t1 >>> 18 | t1 << 14) ^ t1 >>> 3;
            t1 = blocks[j - 2];
            s1 = (t1 >>> 17 | t1 << 15) ^ (t1 >>> 19 | t1 << 13) ^ t1 >>> 10;
            blocks[j] = blocks[j - 16] + s0 + blocks[j - 7] + s1 << 0;
        }
        bc = b & c;
        for(j = 0; j < 64; j += 4){
            if (this.first) {
                ab = 704751109;
                t1 = blocks[0] - 210244248;
                h = t1 - 1521486534 << 0;
                d = t1 + 143694565 << 0;
                this.first = false;
            } else {
                s0 = (a >>> 2 | a << 30) ^ (a >>> 13 | a << 19) ^ (a >>> 22 | a << 10);
                s1 = (e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7);
                ab = a & b;
                maj = ab ^ a & c ^ bc;
                ch = e & f ^ ~e & g;
                t1 = h + s1 + ch + K[j] + blocks[j];
                t2 = s0 + maj;
                h = d + t1 << 0;
                d = t1 + t2 << 0;
            }
            s0 = (d >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10);
            s1 = (h >>> 6 | h << 26) ^ (h >>> 11 | h << 21) ^ (h >>> 25 | h << 7);
            da = d & a;
            maj = da ^ d & b ^ ab;
            ch = h & e ^ ~h & f;
            t1 = g + s1 + ch + K[j + 1] + blocks[j + 1];
            t2 = s0 + maj;
            g = c + t1 << 0;
            c = t1 + t2 << 0;
            s0 = (c >>> 2 | c << 30) ^ (c >>> 13 | c << 19) ^ (c >>> 22 | c << 10);
            s1 = (g >>> 6 | g << 26) ^ (g >>> 11 | g << 21) ^ (g >>> 25 | g << 7);
            cd = c & d;
            maj = cd ^ c & a ^ da;
            ch = g & h ^ ~g & e;
            t1 = f + s1 + ch + K[j + 2] + blocks[j + 2];
            t2 = s0 + maj;
            f = b + t1 << 0;
            b = t1 + t2 << 0;
            s0 = (b >>> 2 | b << 30) ^ (b >>> 13 | b << 19) ^ (b >>> 22 | b << 10);
            s1 = (f >>> 6 | f << 26) ^ (f >>> 11 | f << 21) ^ (f >>> 25 | f << 7);
            bc = b & c;
            maj = bc ^ b & d ^ cd;
            ch = f & g ^ ~f & h;
            t1 = e + s1 + ch + K[j + 3] + blocks[j + 3];
            t2 = s0 + maj;
            e = a + t1 << 0;
            a = t1 + t2 << 0;
            this.chromeBugWorkAround = true;
        }
        this.h0 = this.h0 + a << 0;
        this.h1 = this.h1 + b << 0;
        this.h2 = this.h2 + c << 0;
        this.h3 = this.h3 + d << 0;
        this.h4 = this.h4 + e << 0;
        this.h5 = this.h5 + f << 0;
        this.h6 = this.h6 + g << 0;
        this.h7 = this.h7 + h << 0;
    }
    finalize() {
        if (this.finalized) {
            return;
        }
        this.finalized = true;
        const blocks = this.blocks, i = this.lastByteIndex;
        blocks[16] = this.block;
        blocks[i >>> 2] |= EXTRA[i & 3];
        this.block = blocks[16];
        if (i >= 56) {
            if (!this.hashed) {
                this.hash();
            }
            blocks[0] = this.block;
            blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
        }
        blocks[14] = this.hBytes << 3 | this.bytes >>> 29;
        blocks[15] = this.bytes << 3;
        this.hash();
    }
    arrayBuffer() {
        this.finalize();
        const buffer = new ArrayBuffer(32);
        const dataView = new DataView(buffer);
        dataView.setUint32(0, this.h0);
        dataView.setUint32(4, this.h1);
        dataView.setUint32(8, this.h2);
        dataView.setUint32(12, this.h3);
        dataView.setUint32(16, this.h4);
        dataView.setUint32(20, this.h5);
        dataView.setUint32(24, this.h6);
        dataView.setUint32(28, this.h7);
        return buffer;
    }
}
function sha256(message) {
    return new SHA256().update(message).arrayBuffer();
}
}}),
"[project]/node_modules/@wix/sdk/build/auth/oauth2/pkce-challenge.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "generateChallenge": (()=>generateChallenge),
    "pkceChallenge": (()=>pkceChallenge)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$auth$2f$oauth2$2f$sha256$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk/build/auth/oauth2/sha256.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__ = __turbopack_import__("[externals]/node:buffer [external] (node:buffer, cjs)");
;
function pkceChallenge(length) {
    if (!length) {
        length = 43;
    }
    if (length < 43 || length > 128) {
        throw new Error(`Expected a length between 43 and 128. Received ${length}.`);
    }
    const verifier = generateVerifier(length);
    const challenge = generateChallenge(verifier);
    return {
        code_verifier: verifier,
        code_challenge: challenge
    };
}
function generateVerifier(length) {
    return random(length);
}
function generateChallenge(code_verifier) {
    return base64urlencode((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$auth$2f$oauth2$2f$sha256$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["sha256"])(code_verifier));
}
function random(size) {
    const mask = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~';
    let result = '';
    const randomUints = crypto.getRandomValues(new Uint8Array(size));
    for(let i = 0; i < size; i++){
        // cap the value of the randomIndex to mask.length - 1
        const randomIndex = randomUints[i] % mask.length;
        result += mask[randomIndex];
    }
    return result;
}
function base64urlencode(str) {
    const base64 = typeof __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"] === 'undefined' ? btoa(ab2str(str)) : __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].from(str).toString('base64');
    return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
function ab2str(buf) {
    return String.fromCharCode.apply(null, Array.from(new Uint8Array(buf)));
}
}}),
"[project]/node_modules/@wix/sdk/build/auth/oauth2/constants.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "EMAIL_EXISTS": (()=>EMAIL_EXISTS),
    "INVALID_CAPTCHA": (()=>INVALID_CAPTCHA),
    "INVALID_PASSWORD": (()=>INVALID_PASSWORD),
    "MISSING_CAPTCHA": (()=>MISSING_CAPTCHA),
    "RESET_PASSWORD": (()=>RESET_PASSWORD)
});
const MISSING_CAPTCHA = '-19971';
const INVALID_CAPTCHA = '-19970';
const EMAIL_EXISTS = '-19995';
const INVALID_PASSWORD = '-19976';
const RESET_PASSWORD = '-19973';
}}),
"[project]/node_modules/@wix/sdk/build/iframeUtils.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "addListener": (()=>addListener),
    "addPostMessageListener": (()=>addPostMessageListener),
    "loadFrame": (()=>loadFrame),
    "removeListener": (()=>removeListener)
});
function addListener(eventTarget, name, fn) {
    if (eventTarget.addEventListener) {
        eventTarget.addEventListener(name, fn);
    } else {
        eventTarget.attachEvent('on' + name, fn);
    }
}
function removeListener(eventTarget, name, fn) {
    if (eventTarget.removeEventListener) {
        eventTarget.removeEventListener(name, fn);
    } else {
        eventTarget.detachEvent('on' + name, fn);
    }
}
function loadFrame(src) {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = src;
    return document.body.appendChild(iframe);
}
function addPostMessageListener(state) {
    let responseHandler;
    let timeoutId;
    const msgReceivedOrTimeout = new Promise((resolve, reject)=>{
        responseHandler = (e)=>{
            if (!e.data || e.data.state !== state) {
                // A message not meant for us
                return;
            }
            resolve(e.data);
        };
        addListener(window, 'message', responseHandler);
        timeoutId = setTimeout(()=>{
            reject(new Error('OAuth flow timed out'));
        }, 120000);
    });
    return msgReceivedOrTimeout.finally(()=>{
        clearTimeout(timeoutId);
        removeListener(window, 'message', responseHandler);
    });
}
}}),
"[project]/node_modules/@wix/sdk/build/auth/oauth2/OAuthStrategy.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "OAuthStrategy": (()=>OAuthStrategy)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@wix/redirects/build/es/index.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@wix/identity/build/es/index.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$common$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk/build/common.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$bi$2f$biHeaderGenerator$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk/build/bi/biHeaderGenerator.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__redirects$3e$__ = __turbopack_import__("[project]/node_modules/@wix/redirects_redirects/build/es/index.js [middleware] (ecmascript) <export * as redirects>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__authentication$3e$__ = __turbopack_import__("[project]/node_modules/@wix/identity_authentication/build/es/index.js [middleware] (ecmascript) <export * as authentication>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__recovery$3e$__ = __turbopack_import__("[project]/node_modules/@wix/identity_recovery/build/es/index.js [middleware] (ecmascript) <export * as recovery>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__verification$3e$__ = __turbopack_import__("[project]/node_modules/@wix/identity_verification/build/es/index.js [middleware] (ecmascript) <export * as verification>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$auth$2f$oauth2$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk/build/auth/oauth2/types.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$tokenHelpers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk/build/tokenHelpers.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$wixClient$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk/build/wixClient.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$auth$2f$oauth2$2f$pkce$2d$challenge$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk/build/auth/oauth2/pkce-challenge.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$auth$2f$oauth2$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk/build/auth/oauth2/constants.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$iframeUtils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@wix/sdk/build/iframeUtils.js [middleware] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
const moduleWithTokens = {
    redirects: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__redirects$3e$__["redirects"],
    authentication: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__authentication$3e$__["authentication"],
    recovery: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_recovery$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__recovery$3e$__["recovery"],
    verification: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_verification$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__verification$3e$__["verification"]
};
function OAuthStrategy(config) {
    const _tokens = config.tokens || {
        accessToken: {
            value: '',
            expiresAt: 0
        },
        refreshToken: {
            value: '',
            role: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$auth$2f$oauth2$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["TokenRole"].NONE
        }
    };
    const setTokens = (tokens)=>{
        _tokens.accessToken = tokens.accessToken;
        _tokens.refreshToken = tokens.refreshToken;
    };
    let _state = {
        loginState: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$auth$2f$oauth2$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["LoginState"].INITIAL
    };
    const getAuthHeaders = async ()=>{
        if (!_tokens.accessToken?.value || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$tokenHelpers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["isTokenExpired"])(_tokens.accessToken)) {
            const tokens = await generateVisitorTokens({
                refreshToken: _tokens.refreshToken
            });
            setTokens(tokens);
        }
        return Promise.resolve({
            headers: {
                Authorization: _tokens.accessToken.value
            }
        });
    };
    const wixClientWithTokens = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$wixClient$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createClient"])({
        modules: moduleWithTokens,
        auth: {
            getAuthHeaders
        }
    });
    const generateVisitorTokens = async (tokens)=>{
        if (tokens?.accessToken?.value && tokens?.refreshToken?.value && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$tokenHelpers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["isTokenExpired"])(tokens.accessToken)) {
            return tokens;
        }
        if (tokens?.refreshToken?.value) {
            try {
                const newTokens = await renewToken(tokens.refreshToken);
                return newTokens;
            } catch (e) {
            // just continue and create a visitor one
            }
        }
        const tokensResponse = await fetchTokens({
            clientId: config.clientId,
            grantType: 'anonymous'
        });
        return {
            accessToken: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$tokenHelpers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createAccessToken"])(tokensResponse.access_token, tokensResponse.expires_in),
            refreshToken: {
                value: tokensResponse.refresh_token,
                role: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$auth$2f$oauth2$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["TokenRole"].VISITOR
            }
        };
    };
    const renewToken = async (refreshToken)=>{
        const tokensResponse = await fetchTokens({
            refreshToken: refreshToken.value,
            grantType: 'refresh_token'
        });
        const accessToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$tokenHelpers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createAccessToken"])(tokensResponse.access_token, tokensResponse.expires_in);
        return {
            accessToken,
            refreshToken
        };
    };
    const generatePKCE = ()=>{
        const pkceState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$auth$2f$oauth2$2f$pkce$2d$challenge$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["pkceChallenge"])();
        return {
            codeChallenge: pkceState.code_challenge,
            codeVerifier: pkceState.code_verifier,
            state: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$auth$2f$oauth2$2f$pkce$2d$challenge$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["pkceChallenge"])().code_challenge
        };
    };
    const generateOAuthData = (redirectUri, originalUri)=>{
        const state = {
            redirectUri
        };
        const pkceState = generatePKCE();
        return {
            ...state,
            originalUri: originalUri ?? '',
            codeChallenge: pkceState.codeChallenge,
            codeVerifier: pkceState.codeVerifier,
            state: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$auth$2f$oauth2$2f$pkce$2d$challenge$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["pkceChallenge"])().code_challenge
        };
    };
    const getAuthorizationUrlWithOptions = async (oauthData, responseMode, prompt, sessionToken)=>{
        const { redirectSession } = await wixClientWithTokens.redirects.createRedirectSession({
            auth: {
                authRequest: {
                    redirectUri: oauthData.redirectUri,
                    ...oauthData.redirectUri && {
                        redirectUri: oauthData.redirectUri
                    },
                    clientId: config.clientId,
                    codeChallenge: oauthData.codeChallenge,
                    codeChallengeMethod: 'S256',
                    responseMode,
                    responseType: 'code',
                    scope: 'offline_access',
                    state: oauthData.state,
                    ...sessionToken && {
                        sessionToken
                    }
                },
                prompt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$redirects_redirects$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__redirects$3e$__["redirects"].Prompt[prompt]
            }
        });
        return {
            authUrl: redirectSession.fullUrl,
            authorizationEndpoint: redirectSession.urlDetails.endpoint,
            sessionToken: redirectSession.sessionToken
        };
    };
    const getAuthUrl = async (oauthData = generateOAuthData('unused://'), opts = {
        prompt: 'login'
    })=>{
        return getAuthorizationUrlWithOptions(oauthData, opts.responseMode ?? 'fragment', opts.prompt ?? 'login', opts.sessionToken);
    };
    const parseFromUrl = (url, responseMode = 'fragment')=>{
        const parsedUrl = new URL(url ?? window.location.href);
        const params = responseMode === 'query' ? parsedUrl.searchParams : new URLSearchParams(parsedUrl.hash.substring(1));
        const code = params.get('code');
        const state = params.get('state');
        const error = params.get('error');
        const errorDescription = params.get('error_description');
        return {
            code,
            state,
            ...error && {
                error,
                errorDescription
            }
        };
    };
    const getMemberTokens = async (code, state, oauthData)=>{
        if (!code || !state) {
            throw new Error('Missing code or _state');
        } else if (state !== oauthData.state) {
            throw new Error('Invalid _state');
        }
        const tokensResponse = await fetchTokens({
            clientId: config.clientId,
            grantType: 'authorization_code',
            ...oauthData.redirectUri && {
                redirectUri: oauthData.redirectUri
            },
            code,
            codeVerifier: oauthData.codeVerifier
        });
        return {
            accessToken: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$tokenHelpers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createAccessToken"])(tokensResponse.access_token, tokensResponse.expires_in),
            refreshToken: {
                value: tokensResponse.refresh_token,
                role: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$auth$2f$oauth2$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["TokenRole"].MEMBER
            }
        };
    };
    const logout = async (originalUrl)=>{
        const { redirectSession } = await wixClientWithTokens.redirects.createRedirectSession({
            logout: {
                clientId: config.clientId
            },
            callbacks: {
                postFlowUrl: originalUrl
            }
        });
        _tokens.accessToken = {
            value: '',
            expiresAt: 0
        };
        _tokens.refreshToken = {
            value: '',
            role: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$auth$2f$oauth2$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["TokenRole"].NONE
        };
        return {
            logoutUrl: redirectSession.fullUrl
        };
    };
    const handleState = (response)=>{
        if (response.state === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__authentication$3e$__["authentication"].StateType.SUCCESS) {
            return {
                loginState: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$auth$2f$oauth2$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["LoginState"].SUCCESS,
                data: {
                    sessionToken: response.sessionToken
                }
            };
        } else if (response.state === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__authentication$3e$__["authentication"].StateType.REQUIRE_OWNER_APPROVAL) {
            return {
                loginState: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$auth$2f$oauth2$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["LoginState"].OWNER_APPROVAL_REQUIRED
            };
        } else if (response.state === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$identity_authentication$2f$build$2f$es$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__authentication$3e$__["authentication"].StateType.REQUIRE_EMAIL_VERIFICATION) {
            _state = {
                loginState: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$auth$2f$oauth2$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["LoginState"].EMAIL_VERIFICATION_REQUIRED,
                data: {
                    stateToken: response.stateToken
                }
            };
            return _state;
        }
        return {
            loginState: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$auth$2f$oauth2$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["LoginState"].FAILURE,
            error: 'Unknown _state'
        };
    };
    const register = async (params)=>{
        try {
            const res = await wixClientWithTokens.authentication.registerV2({
                email: params.email
            }, {
                password: params.password,
                profile: params.profile,
                ...params.captchaTokens && {
                    captchaTokens: [
                        {
                            Recaptcha: params.captchaTokens?.recaptchaToken,
                            InvisibleRecaptcha: params.captchaTokens?.invisibleRecaptchaToken
                        }
                    ]
                }
            });
            return handleState(res);
        } catch (e) {
            const emailValidation = e.details.validationError?.fieldViolations?.find((v)=>v.data.type === 'EMAIL');
            if (emailValidation) {
                return {
                    loginState: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$auth$2f$oauth2$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["LoginState"].FAILURE,
                    error: emailValidation.description,
                    errorCode: 'invalidEmail'
                };
            }
            if (e.details.applicationError?.code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$auth$2f$oauth2$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["MISSING_CAPTCHA"]) {
                return {
                    loginState: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$auth$2f$oauth2$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["LoginState"].FAILURE,
                    error: e.message,
                    errorCode: 'missingCaptchaToken'
                };
            }
            if (e.details.applicationError?.code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$auth$2f$oauth2$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["EMAIL_EXISTS"]) {
                return {
                    loginState: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$auth$2f$oauth2$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["LoginState"].FAILURE,
                    error: e.message,
                    errorCode: 'emailAlreadyExists'
                };
            }
            if (e.details.applicationError?.code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$auth$2f$oauth2$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["INVALID_CAPTCHA"]) {
                return {
                    loginState: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$auth$2f$oauth2$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["LoginState"].FAILURE,
                    error: e.message,
                    errorCode: 'invalidCaptchaToken'
                };
            }
            return {
                loginState: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$auth$2f$oauth2$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["LoginState"].FAILURE,
                error: e.message
            };
        }
    };
    const login = async (params)=>{
        try {
            const res = await wixClientWithTokens.authentication.loginV2({
                email: params.email
            }, {
                password: params.password,
                ...params.captchaTokens && {
                    captchaTokens: [
                        {
                            Recaptcha: params.captchaTokens?.recaptchaToken,
                            InvisibleRecaptcha: params.captchaTokens?.invisibleRecaptchaToken
                        }
                    ]
                }
            });
            return handleState(res);
        } catch (e) {
            return {
                loginState: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$auth$2f$oauth2$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["LoginState"].FAILURE,
                error: e.message,
                errorCode: e.details.applicationError?.code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$auth$2f$oauth2$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["MISSING_CAPTCHA"] ? 'missingCaptchaToken' : e.details.applicationError?.code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$auth$2f$oauth2$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["INVALID_CAPTCHA"] ? 'invalidCaptchaToken' : e.details.applicationError.code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$auth$2f$oauth2$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["INVALID_PASSWORD"] ? 'invalidPassword' : e.details.applicationError.code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$auth$2f$oauth2$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["RESET_PASSWORD"] ? 'resetPassword' : 'invalidEmail'
            };
        }
    };
    const processVerification = async (nextInputs, state)=>{
        const stateToUse = state ?? _state;
        if (stateToUse.loginState === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$auth$2f$oauth2$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["LoginState"].EMAIL_VERIFICATION_REQUIRED) {
            const code = nextInputs.verificationCode ?? nextInputs.code;
            const res = await wixClientWithTokens.verification.verifyDuringAuthentication(code, {
                stateToken: stateToUse.data.stateToken
            });
            return handleState(res);
        }
        return {
            loginState: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$auth$2f$oauth2$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["LoginState"].FAILURE,
            error: 'Unknown _state'
        };
    };
    const getMemberTokensForDirectLogin = async (sessionToken)=>{
        const oauthPKCE = generatePKCE();
        const { authUrl } = await getAuthorizationUrlWithOptions(oauthPKCE, 'web_message', 'none', sessionToken);
        const iframePromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$iframeUtils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["addPostMessageListener"])(oauthPKCE.state);
        const iframeEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$iframeUtils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["loadFrame"])(authUrl);
        return iframePromise.then((res)=>{
            return getMemberTokens(res.code, res.state, oauthPKCE);
        }).finally(()=>{
            if (document.body.contains(iframeEl)) {
                iframeEl.parentElement?.removeChild(iframeEl);
            }
        });
    };
    const sendPasswordResetEmail = async (email, redirectUri)=>{
        await wixClientWithTokens.recovery.sendRecoveryEmail(email, {
            redirect: {
                url: redirectUri,
                clientId: config.clientId
            }
        });
    };
    const loggedIn = ()=>{
        return _tokens.refreshToken.role === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$auth$2f$oauth2$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["TokenRole"].MEMBER;
    };
    const getMemberTokensForExternalLogin = async (memberId, apiKey)=>{
        const tokensResponse = await fetchTokens({
            grant_type: 'authorized_client',
            scope: 'offline_access',
            member_id: memberId
        }, {
            Authorization: _tokens.accessToken.value + ',' + apiKey
        });
        return {
            accessToken: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$tokenHelpers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createAccessToken"])(tokensResponse.access_token, tokensResponse.expires_in),
            refreshToken: {
                value: tokensResponse.refresh_token,
                role: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$auth$2f$oauth2$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["TokenRole"].MEMBER
            }
        };
    };
    return {
        generateVisitorTokens,
        renewToken,
        parseFromUrl,
        getAuthUrl,
        getMemberTokens,
        generateOAuthData,
        getAuthHeaders,
        setTokens,
        getTokens: ()=>_tokens,
        loggedIn,
        logout,
        register,
        processVerification,
        login,
        getMemberTokensForDirectLogin,
        getMemberTokensForExternalLogin,
        sendPasswordResetEmail,
        captchaInvisibleSiteKey: '6LdoPaUfAAAAAJphvHoUoOob7mx0KDlXyXlgrx5v',
        captchaVisibleSiteKey: '6Ld0J8IcAAAAANyrnxzrRlX1xrrdXsOmsepUYosy'
    };
}
const fetchTokens = async (payload, headers = {})=>{
    const res = await fetch(`https://${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$common$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["DEFAULT_API_URL"]}/oauth2/token`, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wix$2f$sdk$2f$build$2f$bi$2f$biHeaderGenerator$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["biHeaderGenerator"])({
                entityFqdn: 'wix.identity.oauth.v1.refresh_token',
                methodFqn: 'wix.identity.oauth2.v1.Oauth2Ng.Token',
                packageName: '@wix/sdk'
            }),
            'Content-Type': 'application/json',
            ...headers
        }
    });
    if (res.status !== 200) {
        let responseJson;
        try {
            responseJson = await res.json();
        } catch  {}
        throw new Error(`Failed to fetch tokens from OAuth API: ${res.statusText}. request id: ${res.headers.get('x-request-id')}. ${responseJson ? `Response: ${JSON.stringify(responseJson)}` : ''}`);
    }
    const json = await res.json();
    return json;
};
}}),
"[project]/node_modules/next/dist/esm/client/components/http-access-fallback/http-access-fallback.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "HTTPAccessErrorStatus": (()=>HTTPAccessErrorStatus),
    "HTTP_ERROR_FALLBACK_ERROR_CODE": (()=>HTTP_ERROR_FALLBACK_ERROR_CODE),
    "getAccessFallbackErrorTypeByStatus": (()=>getAccessFallbackErrorTypeByStatus),
    "getAccessFallbackHTTPStatus": (()=>getAccessFallbackHTTPStatus),
    "isHTTPAccessFallbackError": (()=>isHTTPAccessFallbackError)
});
const HTTPAccessErrorStatus = {
    NOT_FOUND: 404,
    FORBIDDEN: 403,
    UNAUTHORIZED: 401
};
const ALLOWED_CODES = new Set(Object.values(HTTPAccessErrorStatus));
const HTTP_ERROR_FALLBACK_ERROR_CODE = 'NEXT_HTTP_ERROR_FALLBACK';
function isHTTPAccessFallbackError(error) {
    if (typeof error !== 'object' || error === null || !('digest' in error) || typeof error.digest !== 'string') {
        return false;
    }
    const [prefix, httpStatus] = error.digest.split(';');
    return prefix === HTTP_ERROR_FALLBACK_ERROR_CODE && ALLOWED_CODES.has(Number(httpStatus));
}
function getAccessFallbackHTTPStatus(error) {
    const httpStatus = error.digest.split(';')[1];
    return Number(httpStatus);
}
function getAccessFallbackErrorTypeByStatus(status) {
    switch(status){
        case 401:
            return 'unauthorized';
        case 403:
            return 'forbidden';
        case 404:
            return 'not-found';
        default:
            return;
    }
} //# sourceMappingURL=http-access-fallback.js.map
}}),
"[project]/node_modules/next/dist/esm/client/components/redirect-status-code.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "RedirectStatusCode": (()=>RedirectStatusCode)
});
var RedirectStatusCode = /*#__PURE__*/ function(RedirectStatusCode) {
    RedirectStatusCode[RedirectStatusCode["SeeOther"] = 303] = "SeeOther";
    RedirectStatusCode[RedirectStatusCode["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    RedirectStatusCode[RedirectStatusCode["PermanentRedirect"] = 308] = "PermanentRedirect";
    return RedirectStatusCode;
}({}); //# sourceMappingURL=redirect-status-code.js.map
}}),
"[project]/node_modules/next/dist/esm/client/components/redirect-error.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "REDIRECT_ERROR_CODE": (()=>REDIRECT_ERROR_CODE),
    "RedirectType": (()=>RedirectType),
    "isRedirectError": (()=>isRedirectError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$status$2d$code$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/client/components/redirect-status-code.js [middleware] (ecmascript)");
;
const REDIRECT_ERROR_CODE = 'NEXT_REDIRECT';
var RedirectType = /*#__PURE__*/ function(RedirectType) {
    RedirectType["push"] = "push";
    RedirectType["replace"] = "replace";
    return RedirectType;
}({});
function isRedirectError(error) {
    if (typeof error !== 'object' || error === null || !('digest' in error) || typeof error.digest !== 'string') {
        return false;
    }
    const digest = error.digest.split(';');
    const [errorCode, type] = digest;
    const destination = digest.slice(2, -2).join(';');
    const status = digest.at(-2);
    const statusCode = Number(status);
    return errorCode === REDIRECT_ERROR_CODE && (type === 'replace' || type === 'push') && typeof destination === 'string' && !isNaN(statusCode) && statusCode in __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$status$2d$code$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["RedirectStatusCode"];
} //# sourceMappingURL=redirect-error.js.map
}}),
"[project]/node_modules/next/dist/esm/client/components/is-next-router-error.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "isNextRouterError": (()=>isNextRouterError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$http$2d$access$2d$fallback$2f$http$2d$access$2d$fallback$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/client/components/http-access-fallback/http-access-fallback.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/client/components/redirect-error.js [middleware] (ecmascript)");
;
;
function isNextRouterError(error) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["isRedirectError"])(error) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$http$2d$access$2d$fallback$2f$http$2d$access$2d$fallback$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["isHTTPAccessFallbackError"])(error);
} //# sourceMappingURL=is-next-router-error.js.map
}}),
"[project]/node_modules/next/dist/esm/build/templates/middleware.js { INNER_MIDDLEWARE_MODULE => \"[project]/src/middleware.js [middleware] (ecmascript)\" } [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>nHandler)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$globals$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/globals.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$adapter$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/adapter.js [middleware] (ecmascript)");
// Import the userland code.
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$middleware$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/middleware.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$is$2d$next$2d$router$2d$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/client/components/is-next-router-error.js [middleware] (ecmascript)");
;
;
;
;
;
const mod = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$middleware$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__
};
const handler = mod.middleware || mod.default;
const page = "/middleware";
if (typeof handler !== 'function') {
    throw new Error(`The Middleware "${page}" must export a \`middleware\` or a \`default\` function`);
}
// Middleware will only sent out the FetchEvent to next server,
// so load instrumentation module here and track the error inside middleware module.
function errorHandledHandler(fn) {
    return async (...args)=>{
        try {
            return await fn(...args);
        } catch (err) {
            // In development, error the navigation API usage in runtime,
            // since it's not allowed to be used in middleware as it's outside of react component tree.
            if ("TURBOPACK compile-time truthy", 1) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$is$2d$next$2d$router$2d$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["isNextRouterError"])(err)) {
                    err.message = `Next.js navigation API is not allowed to be used in Middleware.`;
                    throw err;
                }
            }
            const req = args[0];
            const url = new URL(req.url);
            const resource = url.pathname + url.search;
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$globals$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["edgeInstrumentationOnRequestError"])(err, {
                path: resource,
                method: req.method,
                headers: Object.fromEntries(req.headers.entries())
            }, {
                routerKind: 'Pages Router',
                routePath: '/middleware',
                routeType: 'middleware',
                revalidateReason: undefined
            });
            throw err;
        }
    };
}
function nHandler(opts) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$adapter$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["adapter"])({
        ...opts,
        page,
        handler: errorHandledHandler(handler)
    });
} //# sourceMappingURL=middleware.js.map
}}),
"[project]/edge-wrapper.js { MODULE => \"[project]/node_modules/next/dist/esm/build/templates/middleware.js { INNER_MIDDLEWARE_MODULE => \\\"[project]/src/middleware.js [middleware] (ecmascript)\\\" } [middleware] (ecmascript)\" } [middleware] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
self._ENTRIES ||= {};
const modProm = Promise.resolve().then(()=>__turbopack_import__('[project]/node_modules/next/dist/esm/build/templates/middleware.js { INNER_MIDDLEWARE_MODULE => "[project]/src/middleware.js [middleware] (ecmascript)" } [middleware] (ecmascript)'));
modProm.catch(()=>{});
self._ENTRIES["middleware_middleware"] = new Proxy(modProm, {
    get (modProm, name) {
        if (name === "then") {
            return (res, rej)=>modProm.then(res, rej);
        }
        let result = (...args)=>modProm.then((mod)=>(0, mod[name])(...args));
        result.then = (res, rej)=>modProm.then((mod)=>mod[name]).then(res, rej);
        return result;
    }
});
}}),
}]);

//# sourceMappingURL=_7e7c19._.js.map