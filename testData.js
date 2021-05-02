module.exports.strategies = { MOBILE: "mobile", DESKTOP: "desktop" };
module.exports.fakeMobileLighthouseData = {
  requestedUrl: "https://theverge.com/",
  finalUrl: "https://www.theverge.com/",
  lighthouseVersion: "7.3.0",
  userAgent:
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/88.0.4324.202 Safari/537.36",
  fetchTime: "2021-05-01T20:15:43.669Z",
  environment: {
    networkUserAgent:
      "Mozilla/5.0 (Linux; Android 7.0; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4420.0 Mobile Safari/537.36 Chrome-Lighthouse",
    hostUserAgent:
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/88.0.4324.202 Safari/537.36",
    benchmarkIndex: 1121.5,
  },
  runWarnings: [
    "The page may not be loading as expected because your test URL (https://theverge.com/) was redirected to https://www.theverge.com/. Try testing the second URL directly.",
  ],
  configSettings: {
    emulatedFormFactor: "mobile",
    formFactor: "mobile",
    locale: "en-US",
    onlyCategories: ["performance"],
    channel: "lr",
  },
  audits: {
    "network-requests": {
      id: "network-requests",
      title: "Network Requests",
      description:
        "Lists the network requests that were made during page load.",
      score: null,
      scoreDisplayMode: "informative",
      details: [Object],
    },
    metrics: {
      id: "metrics",
      title: "Metrics",
      description: "Collects all available metrics.",
      score: null,
      scoreDisplayMode: "informative",
      details: [Object],
      numericValue: 51653,
    },
    "total-byte-weight": {
      id: "total-byte-weight",
      title: "Avoid enormous network payloads",
      description:
        "Large network payloads cost users real money and are highly correlated with long load times. [Learn more](https://web.dev/total-byte-weight/).",
      score: 0.11,
      scoreDisplayMode: "numeric",
      displayValue: "Total size was 5,856 KiB",
      details: [Object],
      numericValue: 5996111,
    },
    "total-blocking-time": {
      id: "total-blocking-time",
      title: "Total Blocking Time",
      description:
        "Sum of all time periods between FCP and Time to Interactive, when task length exceeded 50ms, expressed in milliseconds. [Learn more](https://web.dev/lighthouse-total-blocking-time/).",
      score: 0,
      scoreDisplayMode: "numeric",
      displayValue: "5,890 ms",
      numericValue: 5890,
    },
    "network-rtt": {
      id: "network-rtt",
      title: "Network Round Trip Times",
      description:
        "Network round trip times (RTT) have a large impact on performance. If the RTT to an origin is high, it's an indication that servers closer to the user could improve performance. [Learn more](https://hpbn.co/primer-on-latency-and-bandwidth/).",
      score: null,
      scoreDisplayMode: "informative",
      displayValue: "0 ms",
      details: [Object],
      numericValue: 0,
    },
    "first-contentful-paint-3g": {
      id: "first-contentful-paint-3g",
      title: "First Contentful Paint (3G)",
      description:
        "First Contentful Paint 3G marks the time at which the first text or image is painted while on a 3G network. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/first-contentful-paint).",
      score: 0.36,
      scoreDisplayMode: "numeric",
      displayValue: "6963 ms",
      numericValue: 6963,
    },
    "layout-shift-elements": {
      id: "layout-shift-elements",
      title: "Avoid large layout shifts",
      description: "These DOM elements contribute most to the CLS of the page.",
      score: null,
      scoreDisplayMode: "informative",
      displayValue: "5 elements found",
      details: [Object],
    },
    "speed-index": {
      id: "speed-index",
      title: "Speed Index",
      description:
        "Speed Index shows how quickly the contents of a page are visibly populated. [Learn more](https://web.dev/speed-index/).",
      score: 0.01,
      scoreDisplayMode: "numeric",
      displayValue: "16.6 s",
      numericValue: 16642.33695425391,
    },
    "cumulative-layout-shift": {
      id: "cumulative-layout-shift",
      title: "Cumulative Layout Shift",
      description:
        "Cumulative Layout Shift measures the movement of visible elements within the viewport. [Learn more](https://web.dev/cls/).",
      score: 0.34,
      scoreDisplayMode: "numeric",
      displayValue: "0.334",
      details: [Object],
      numericValue: 0.33446118375990125,
    },
    "uses-rel-preload": {
      id: "uses-rel-preload",
      title: "Preload key requests",
      description:
        "Consider using `<link rel=preload>` to prioritize fetching resources that are currently requested later in page load. [Learn more](https://web.dev/uses-rel-preload/).",
      score: 1,
      scoreDisplayMode: "numeric",
      details: [Object],
      warnings: [Array],
      numericValue: 0,
    },
    "max-potential-fid": {
      id: "max-potential-fid",
      title: "Max Potential First Input Delay",
      description:
        "The maximum potential First Input Delay that your users could experience is the duration of the longest task. [Learn more](https://web.dev/lighthouse-max-potential-fid/).",
      score: 0.01,
      scoreDisplayMode: "numeric",
      displayValue: "820 ms",
      numericValue: 817,
    },
    "uses-responsive-images": {
      id: "uses-responsive-images",
      title: "Properly size images",
      description:
        "Serve images that are appropriately-sized to save cellular data and improve load time. [Learn more](https://web.dev/uses-responsive-images/).",
      score: 1,
      scoreDisplayMode: "numeric",
      displayValue: "Potential savings of 10 KiB",
      details: [Object],
      numericValue: 0,
    },
    "non-composited-animations": {
      id: "non-composited-animations",
      title: "Avoid non-composited animations",
      description:
        "Animations which are not composited can be janky and increase CLS. [Learn more](https://web.dev/non-composited-animations)",
      score: null,
      scoreDisplayMode: "informative",
      displayValue: "1 animated element found",
      details: [Object],
    },
    "first-cpu-idle": {
      id: "first-cpu-idle",
      title: "First CPU Idle",
      description:
        "First CPU Idle marks the first time at which the page's main thread is quiet enough to handle input.  [Learn more](https://web.dev/first-cpu-idle/).",
      score: 0,
      scoreDisplayMode: "numeric",
      displayValue: "28.5 s",
      numericValue: 28528,
    },
    interactive: {
      id: "interactive",
      title: "Time to Interactive",
      description:
        "Time to interactive is the amount of time it takes for the page to become fully interactive. [Learn more](https://web.dev/interactive/).",
      score: 0,
      scoreDisplayMode: "numeric",
      displayValue: "51.7 s",
      numericValue: 51653,
    },
    diagnostics: {
      id: "diagnostics",
      title: "Diagnostics",
      description: "Collection of useful page vitals.",
      score: null,
      scoreDisplayMode: "informative",
      details: [Object],
    },
    "main-thread-tasks": {
      id: "main-thread-tasks",
      title: "Tasks",
      description:
        "Lists the toplevel main thread tasks that executed during page load.",
      score: null,
      scoreDisplayMode: "informative",
      details: [Object],
    },
    "first-contentful-paint": {
      id: "first-contentful-paint",
      title: "First Contentful Paint",
      description:
        "First Contentful Paint marks the time at which the first text or image is painted. [Learn more](https://web.dev/first-contentful-paint/).",
      score: 0.69,
      scoreDisplayMode: "numeric",
      displayValue: "3.3 s",
      numericValue: 3250,
    },
    "user-timings": {
      id: "user-timings",
      title: "User Timing marks and measures",
      description:
        "Consider instrumenting your app with the User Timing API to measure your app's real-world performance during key user experiences. [Learn more](https://web.dev/user-timings/).",
      score: null,
      scoreDisplayMode: "informative",
      displayValue: "55 user timings",
      details: [Object],
    },
    redirects: {
      id: "redirects",
      title: "Avoid multiple page redirects",
      description:
        "Redirects introduce additional delays before the page can be loaded. [Learn more](https://web.dev/redirects/).",
      score: 0.42,
      scoreDisplayMode: "numeric",
      displayValue: "Potential savings of 1,410 ms",
      details: [Object],
      numericValue: 1410,
    },
    "efficient-animated-content": {
      id: "efficient-animated-content",
      title: "Use video formats for animated content",
      description:
        "Large GIFs are inefficient for delivering animated content. Consider using MPEG4/WebM videos for animations and PNG/WebP for static images instead of GIF to save network bytes. [Learn more](https://web.dev/efficient-animated-content/)",
      score: 1,
      scoreDisplayMode: "numeric",
      details: [Object],
      numericValue: 0,
    },
    "bootup-time": {
      id: "bootup-time",
      title: "Reduce JavaScript execution time",
      description:
        "Consider reducing the time spent parsing, compiling, and executing JS. You may find delivering smaller JS payloads helps with this. [Learn more](https://web.dev/bootup-time/).",
      score: 0.02,
      scoreDisplayMode: "numeric",
      displayValue: "18.2 s",
      details: [Object],
      numericValue: 18243.655999999948,
    },
    "preload-lcp-image": {
      id: "preload-lcp-image",
      title: "Preload Largest Contentful Paint image",
      description:
        "Preload the image used by the LCP element in order to improve your LCP time. [Learn more](https://web.dev/optimize-lcp/#preload-important-resources).",
      score: 1,
      scoreDisplayMode: "numeric",
      details: [Object],
      numericValue: 0,
    },
    "performance-budget": {
      id: "performance-budget",
      title: "Performance budget",
      description:
        "Keep the quantity and size of network requests under the targets set by the provided performance budget. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/budgets).",
      score: null,
      scoreDisplayMode: "notApplicable",
    },
    "server-response-time": {
      id: "server-response-time",
      title: "Initial server response time was short",
      description:
        "Keep the server response time for the main document short because all other requests depend on it. [Learn more](https://web.dev/time-to-first-byte/).",
      score: 1,
      scoreDisplayMode: "binary",
      displayValue: "Root document took 70 ms",
      details: [Object],
      numericValue: 71.488,
    },
    "timing-budget": {
      id: "timing-budget",
      title: "Timing budget",
      description:
        "Set a timing budget to help you keep an eye on the performance of your site. Performant sites load fast and respond to user input events quickly. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/budgets).",
      score: null,
      scoreDisplayMode: "notApplicable",
    },
    "render-blocking-resources": {
      id: "render-blocking-resources",
      title: "Eliminate render-blocking resources",
      description:
        "Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn more](https://web.dev/render-blocking-resources/).",
      score: 0.48,
      scoreDisplayMode: "numeric",
      displayValue: "Potential savings of 930 ms",
      details: [Object],
      numericValue: 929,
    },
    "legacy-javascript": {
      id: "legacy-javascript",
      title: "Avoid serving legacy JavaScript to modern browsers",
      description:
        "Polyfills and transforms enable legacy browsers to use new JavaScript features. However, many aren't necessary for modern browsers. For your bundled JavaScript, adopt a modern script deployment strategy using module/nomodule feature detection to reduce the amount of code shipped to modern browsers, while retaining support for legacy browsers. [Learn More](https://philipwalton.com/articles/deploying-es2015-code-in-production-today/)",
      score: 1,
      scoreDisplayMode: "numeric",
      displayValue: "Potential savings of 128 KiB",
      details: [Object],
      numericValue: 0,
    },
    "offscreen-images": {
      id: "offscreen-images",
      title: "Defer offscreen images",
      description:
        "Consider lazy-loading offscreen and hidden images after all critical resources have finished loading to lower time to interactive. [Learn more](https://web.dev/offscreen-images/).",
      score: 0.88,
      scoreDisplayMode: "numeric",
      displayValue: "Potential savings of 39 KiB",
      details: [Object],
      warnings: [],
      numericValue: 150,
    },
    "no-document-write": {
      id: "no-document-write",
      title: "Avoid `document.write()`",
      description:
        "For users on slow connections, external scripts dynamically injected via `document.write()` can delay page load by tens of seconds. [Learn more](https://web.dev/no-document-write/).",
      score: 0,
      scoreDisplayMode: "binary",
      details: [Object],
    },
    "largest-contentful-paint": {
      id: "largest-contentful-paint",
      title: "Largest Contentful Paint",
      description:
        "Largest Contentful Paint marks the time at which the largest text or image is painted. [Learn more](https://web.dev/lighthouse-largest-contentful-paint/)",
      score: 0,
      scoreDisplayMode: "numeric",
      displayValue: "12.6 s",
      numericValue: 12577,
    },
    "first-meaningful-paint": {
      id: "first-meaningful-paint",
      title: "First Meaningful Paint",
      description:
        "First Meaningful Paint measures when the primary content of a page is visible. [Learn more](https://web.dev/first-meaningful-paint/).",
      score: 0.69,
      scoreDisplayMode: "numeric",
      displayValue: "3.3 s",
      numericValue: 3250,
    },
    "uses-rel-preconnect": {
      id: "uses-rel-preconnect",
      title: "Preconnect to required origins",
      description:
        "Consider adding `preconnect` or `dns-prefetch` resource hints to establish early connections to important third-party origins. [Learn more](https://web.dev/uses-rel-preconnect/).",
      score: 1,
      scoreDisplayMode: "numeric",
      details: [Object],
      warnings: [Array],
      numericValue: 0,
    },
    "largest-contentful-paint-element": {
      id: "largest-contentful-paint-element",
      title: "Largest Contentful Paint element",
      description:
        "This is the largest contentful element painted within the viewport. [Learn More](https://web.dev/lighthouse-largest-contentful-paint/)",
      score: null,
      scoreDisplayMode: "informative",
      displayValue: "1 element found",
      details: [Object],
    },
    "unminified-javascript": {
      id: "unminified-javascript",
      title: "Minify JavaScript",
      description:
        "Minifying JavaScript files can reduce payload sizes and script parse time. [Learn more](https://web.dev/unminified-javascript/).",
      score: 1,
      scoreDisplayMode: "numeric",
      details: [Object],
      warnings: [],
      numericValue: 0,
    },
    "network-server-latency": {
      id: "network-server-latency",
      title: "Server Backend Latencies",
      description:
        "Server latencies can impact web performance. If the server latency of an origin is high, it's an indication the server is overloaded or has poor backend performance. [Learn more](https://hpbn.co/primer-on-web-performance/#analyzing-the-resource-waterfall).",
      score: null,
      scoreDisplayMode: "informative",
      displayValue: "0 ms",
      details: [Object],
      numericValue: 0,
    },
    "unsized-images": {
      id: "unsized-images",
      title: "Image elements do not have explicit `width` and `height`",
      description:
        "Set an explicit width and height on image elements to reduce layout shifts and improve CLS. [Learn more](https://web.dev/optimize-cls/#images-without-dimensions)",
      score: 0,
      scoreDisplayMode: "binary",
      details: [Object],
    },
    "uses-optimized-images": {
      id: "uses-optimized-images",
      title: "Efficiently encode images",
      description:
        "Optimized images load faster and consume less cellular data. [Learn more](https://web.dev/uses-optimized-images/).",
      score: 1,
      scoreDisplayMode: "numeric",
      details: [Object],
      warnings: [],
      numericValue: 0,
    },
    "uses-webp-images": {
      id: "uses-webp-images",
      title: "Serve images in next-gen formats",
      description:
        "Image formats like JPEG 2000, JPEG XR, and WebP often provide better compression than PNG or JPEG, which means faster downloads and less data consumption. [Learn more](https://web.dev/uses-webp-images/).",
      score: 0.45,
      scoreDisplayMode: "numeric",
      displayValue: "Potential savings of 274 KiB",
      details: [Object],
      warnings: [],
      numericValue: 1200,
    },
    "unused-css-rules": {
      id: "unused-css-rules",
      title: "Remove unused CSS",
      description:
        "Remove dead rules from stylesheets and defer the loading of CSS not used for above-the-fold content to reduce unnecessary bytes consumed by network activity. [Learn more](https://web.dev/unused-css-rules/).",
      score: 0.45,
      scoreDisplayMode: "numeric",
      displayValue: "Potential savings of 131 KiB",
      details: [Object],
      numericValue: 1200,
    },
    "mainthread-work-breakdown": {
      id: "mainthread-work-breakdown",
      title: "Minimize main-thread work",
      description:
        "Consider reducing the time spent parsing, compiling and executing JS. You may find delivering smaller JS payloads helps with this. [Learn more](https://web.dev/mainthread-work-breakdown/)",
      score: 0,
      scoreDisplayMode: "numeric",
      displayValue: "27.0 s",
      details: [Object],
      numericValue: 27047.791999999656,
    },
    "third-party-summary": {
      id: "third-party-summary",
      title: "Reduce the impact of third-party code",
      description:
        "Third-party code can significantly impact load performance. Limit the number of redundant third-party providers and try to load third-party code after your page has primarily finished loading. [Learn more](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/loading-third-party-javascript/).",
      score: 0,
      scoreDisplayMode: "binary",
      displayValue: "Third-party code blocked the main thread for 6,280 ms",
      details: [Object],
    },
    "estimated-input-latency": {
      id: "estimated-input-latency",
      title: "Estimated Input Latency",
      description:
        "Estimated Input Latency is an estimate of how long your app takes to respond to user input, in milliseconds, during the busiest 5s window of page load. If your latency is higher than 50 ms, users may perceive your app as laggy. [Learn more](https://web.dev/estimated-input-latency/).",
      score: 0,
      scoreDisplayMode: "numeric",
      displayValue: "420 ms",
      numericValue: 421.40000000000003,
    },
    "uses-passive-event-listeners": {
      id: "uses-passive-event-listeners",
      title: "Does not use passive listeners to improve scrolling performance",
      description:
        "Consider marking your touch and wheel event listeners as `passive` to improve your page's scroll performance. [Learn more](https://web.dev/uses-passive-event-listeners/).",
      score: 0,
      scoreDisplayMode: "binary",
      details: [Object],
    },
    "dom-size": {
      id: "dom-size",
      title: "Avoid an excessive DOM size",
      description:
        "A large DOM will increase memory usage, cause longer [style calculations](https://developers.google.com/web/fundamentals/performance/rendering/reduce-the-scope-and-complexity-of-style-calculations), and produce costly [layout reflows](https://developers.google.com/speed/articles/reflow). [Learn more](https://web.dev/dom-size/).",
      score: 0.3,
      scoreDisplayMode: "numeric",
      displayValue: "1,741 elements",
      details: [Object],
      numericValue: 1741,
    },
    "uses-text-compression": {
      id: "uses-text-compression",
      title: "Enable text compression",
      description:
        "Text-based resources should be served with compression (gzip, deflate or brotli) to minimize total network bytes. [Learn more](https://web.dev/uses-text-compression/).",
      score: 0.29,
      scoreDisplayMode: "numeric",
      displayValue: "Potential savings of 201 KiB",
      details: [Object],
      numericValue: 2550,
    },
    "long-tasks": {
      id: "long-tasks",
      title: "Avoid long main-thread tasks",
      description:
        "Lists the longest tasks on the main thread, useful for identifying worst contributors to input delay. [Learn more](https://web.dev/long-tasks-devtools/)",
      score: null,
      scoreDisplayMode: "informative",
      displayValue: "20 long tasks found",
      details: [Object],
    },
    "full-page-screenshot": {
      id: "full-page-screenshot",
      title: "Full-page screenshot",
      description: "A full-height screenshot of the final rendered page",
      score: null,
      scoreDisplayMode: "informative",
      details: [Object],
    },
    "third-party-facades": {
      id: "third-party-facades",
      title: "Some third-party resources can be lazy loaded with a facade",
      description:
        "Some third-party embeds can be lazy loaded. Consider replacing them with a facade until they are required. [Learn more](https://web.dev/third-party-facades/).",
      score: 0,
      scoreDisplayMode: "binary",
      displayValue: "1 facade alternative available",
      details: [Object],
    },
    "screenshot-thumbnails": {
      id: "screenshot-thumbnails",
      title: "Screenshot Thumbnails",
      description: "This is what the load of your site looked like.",
      score: null,
      scoreDisplayMode: "informative",
      details: [Object],
    },
    "duplicated-javascript": {
      id: "duplicated-javascript",
      title: "Remove duplicate modules in JavaScript bundles",
      description:
        "Remove large, duplicate JavaScript modules from bundles to reduce unnecessary bytes consumed by network activity. ",
      score: 0.75,
      scoreDisplayMode: "numeric",
      displayValue: "Potential savings of 111 KiB",
      details: [Object],
      numericValue: 300,
    },
    "unminified-css": {
      id: "unminified-css",
      title: "Minify CSS",
      description:
        "Minifying CSS files can reduce network payload sizes. [Learn more](https://web.dev/unminified-css/).",
      score: 1,
      scoreDisplayMode: "numeric",
      details: [Object],
      numericValue: 0,
    },
    "font-display": {
      id: "font-display",
      title: "Ensure text remains visible during webfont load",
      description:
        "Leverage the font-display CSS feature to ensure text is user-visible while webfonts are loading. [Learn more](https://web.dev/font-display/).",
      score: 0,
      scoreDisplayMode: "binary",
      details: [Object],
      warnings: [Array],
    },
    "uses-long-cache-ttl": {
      id: "uses-long-cache-ttl",
      title: "Serve static assets with an efficient cache policy",
      description:
        "A long cache lifetime can speed up repeat visits to your page. [Learn more](https://web.dev/uses-long-cache-ttl/).",
      score: 0.02,
      scoreDisplayMode: "numeric",
      displayValue: "70 resources found",
      details: [Object],
      numericValue: 1399400.3157497023,
    },
    "final-screenshot": {
      id: "final-screenshot",
      title: "Final Screenshot",
      description: "The last screenshot captured of the pageload.",
      score: null,
      scoreDisplayMode: "informative",
      details: [Object],
    },
    "resource-summary": {
      id: "resource-summary",
      title: "Keep request counts low and transfer sizes small",
      description:
        "To set budgets for the quantity and size of page resources, add a budget.json file. [Learn more](https://web.dev/use-lighthouse-for-performance-budgets/).",
      score: null,
      scoreDisplayMode: "informative",
      displayValue: "558 requests • 5,856 KiB",
      details: [Object],
    },
    "unused-javascript": {
      id: "unused-javascript",
      title: "Remove unused JavaScript",
      description:
        "Remove unused JavaScript to reduce bytes consumed by network activity. [Learn more](https://web.dev/unused-javascript/).",
      score: 0,
      scoreDisplayMode: "numeric",
      displayValue: "Potential savings of 1,096 KiB",
      details: [Object],
      numericValue: 11700,
    },
    "critical-request-chains": {
      id: "critical-request-chains",
      title: "Avoid chaining critical requests",
      description:
        "The Critical Request Chains below show you what resources are loaded with a high priority. Consider reducing the length of chains, reducing the download size of resources, or deferring the download of unnecessary resources to improve page load. [Learn more](https://web.dev/critical-request-chains/).",
      score: null,
      scoreDisplayMode: "informative",
      displayValue: "4 chains found",
      details: [Object],
    },
  },
  categories: {
    performance: {
      id: "performance",
      title: "Performance",
      score: 0.12,
      auditRefs: [Array],
    },
  },
  categoryGroups: {
    "a11y-names-labels": {
      title: "Names and labels",
      description:
        "These are opportunities to improve the semantics of the controls in your application. This may enhance the experience for users of assistive technology, like a screen reader.",
    },
    "load-opportunities": {
      title: "Opportunities",
      description:
        "These suggestions can help your page load faster. They don't [directly affect](https://web.dev/performance-scoring/) the Performance score.",
    },
    "best-practices-browser-compat": { title: "Browser Compatibility" },
    "a11y-aria": {
      title: "ARIA",
      description:
        "These are opportunities to improve the usage of ARIA in your application which may enhance the experience for users of assistive technology, like a screen reader.",
    },
    "seo-crawl": {
      title: "Crawling and Indexing",
      description:
        "To appear in search results, crawlers need access to your app.",
    },
    "a11y-language": {
      title: "Internationalization and localization",
      description:
        "These are opportunities to improve the interpretation of your content by users in different locales.",
    },
    "best-practices-general": { title: "General" },
    "seo-content": {
      title: "Content Best Practices",
      description:
        "Format your HTML in a way that enables crawlers to better understand your app’s content.",
    },
    "pwa-optimized": { title: "PWA Optimized" },
    "seo-mobile": {
      title: "Mobile Friendly",
      description:
        "Make sure your pages are mobile friendly so users don’t have to pinch or zoom in order to read the content pages. [Learn more](https://developers.google.com/search/mobile-sites/).",
    },
    "best-practices-ux": { title: "User Experience" },
    "a11y-best-practices": {
      title: "Best practices",
      description: "These items highlight common accessibility best practices.",
    },
    "a11y-audio-video": {
      title: "Audio and video",
      description:
        "These are opportunities to provide alternative content for audio and video. This may improve the experience for users with hearing or vision impairments.",
    },
    "best-practices-trust-safety": { title: "Trust and Safety" },
    "a11y-navigation": {
      title: "Navigation",
      description:
        "These are opportunities to improve keyboard navigation in your application.",
    },
    "a11y-tables-lists": {
      title: "Tables and lists",
      description:
        "These are opportunities to improve the experience of reading tabular or list data using assistive technology, like a screen reader.",
    },
    metrics: { title: "Metrics" },
    "a11y-color-contrast": {
      title: "Contrast",
      description:
        "These are opportunities to improve the legibility of your content.",
    },
    budgets: {
      title: "Budgets",
      description:
        "Performance budgets set standards for the performance of your site.",
    },
    diagnostics: {
      title: "Diagnostics",
      description:
        "More information about the performance of your application. These numbers don't [directly affect](https://web.dev/performance-scoring/) the Performance score.",
    },
    "pwa-installable": { title: "Installable" },
  },
  timing: { total: 33449.96 },
  i18n: {
    rendererFormattedStrings: {
      varianceDisclaimer:
        "Values are estimated and may vary. The [performance score is calculated](https://web.dev/performance-scoring/) directly from these metrics.",
      opportunityResourceColumnLabel: "Opportunity",
      opportunitySavingsColumnLabel: "Estimated Savings",
      errorMissingAuditInfo: "Report error: no audit information",
      errorLabel: "Error!",
      warningHeader: "Warnings: ",
      passedAuditsGroupTitle: "Passed audits",
      notApplicableAuditsGroupTitle: "Not applicable",
      manualAuditsGroupTitle: "Additional items to manually check",
      toplevelWarningsMessage:
        "There were issues affecting this run of Lighthouse:",
      crcLongestDurationLabel: "Maximum critical path latency:",
      crcInitialNavigation: "Initial Navigation",
      lsPerformanceCategoryDescription:
        "[Lighthouse](https://developers.google.com/web/tools/lighthouse/) analysis of the current page on an emulated mobile network. Values are estimated and may vary.",
      labDataTitle: "Lab Data",
    },
  },
};
module.exports.fakeDesktopLighthouseData = {
  requestedUrl: "https://theverge.com/",
  finalUrl: "https://www.theverge.com/",
  lighthouseVersion: "7.3.0",
  userAgent:
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/88.0.4324.202 Safari/537.36",
  fetchTime: "2021-05-01T20:20:17.355Z",
  environment: {
    networkUserAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4420.0 Safari/537.36 Chrome-Lighthouse",
    hostUserAgent:
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/88.0.4324.202 Safari/537.36",
    benchmarkIndex: 1130.5,
  },
  runWarnings: [
    "The page may not be loading as expected because your test URL (https://theverge.com/) was redirected to https://www.theverge.com/. Try testing the second URL directly.",
  ],
  configSettings: {
    emulatedFormFactor: "desktop",
    formFactor: "desktop",
    locale: "en-US",
    onlyCategories: ["performance"],
    channel: "lr",
  },
  audits: {
    "dom-size": {
      id: "dom-size",
      title: "Avoid an excessive DOM size",
      description:
        "A large DOM will increase memory usage, cause longer [style calculations](https://developers.google.com/web/fundamentals/performance/rendering/reduce-the-scope-and-complexity-of-style-calculations), and produce costly [layout reflows](https://developers.google.com/speed/articles/reflow). [Learn more](https://web.dev/dom-size/).",
      score: 0.15,
      scoreDisplayMode: "numeric",
      displayValue: "2,170 elements",
      details: [Object],
      numericValue: 2170,
    },
    "performance-budget": {
      id: "performance-budget",
      title: "Performance budget",
      description:
        "Keep the quantity and size of network requests under the targets set by the provided performance budget. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/budgets).",
      score: null,
      scoreDisplayMode: "notApplicable",
    },
    "largest-contentful-paint": {
      id: "largest-contentful-paint",
      title: "Largest Contentful Paint",
      description:
        "Largest Contentful Paint marks the time at which the largest text or image is painted. [Learn more](https://web.dev/lighthouse-largest-contentful-paint/)",
      score: 0.52,
      scoreDisplayMode: "numeric",
      displayValue: "2.3 s",
      numericValue: 2323,
    },
    "uses-rel-preload": {
      id: "uses-rel-preload",
      title: "Preload key requests",
      description:
        "Consider using `<link rel=preload>` to prioritize fetching resources that are currently requested later in page load. [Learn more](https://web.dev/uses-rel-preload/).",
      score: 1,
      scoreDisplayMode: "numeric",
      details: [Object],
      warnings: [Array],
      numericValue: 0,
    },
    "unused-css-rules": {
      id: "unused-css-rules",
      title: "Remove unused CSS",
      description:
        "Remove dead rules from stylesheets and defer the loading of CSS not used for above-the-fold content to reduce unnecessary bytes consumed by network activity. [Learn more](https://web.dev/unused-css-rules/).",
      score: 0.86,
      scoreDisplayMode: "numeric",
      displayValue: "Potential savings of 86 KiB",
      details: [Object],
      numericValue: 170,
    },
    "user-timings": {
      id: "user-timings",
      title: "User Timing marks and measures",
      description:
        "Consider instrumenting your app with the User Timing API to measure your app's real-world performance during key user experiences. [Learn more](https://web.dev/user-timings/).",
      score: null,
      scoreDisplayMode: "informative",
      displayValue: "38 user timings",
      details: [Object],
    },
    interactive: {
      id: "interactive",
      title: "Time to Interactive",
      description:
        "Time to interactive is the amount of time it takes for the page to become fully interactive. [Learn more](https://web.dev/interactive/).",
      score: 0.34,
      scoreDisplayMode: "numeric",
      displayValue: "5.5 s",
      numericValue: 5459.5,
    },
    "unsized-images": {
      id: "unsized-images",
      title: "Image elements do not have explicit `width` and `height`",
      description:
        "Set an explicit width and height on image elements to reduce layout shifts and improve CLS. [Learn more](https://web.dev/optimize-cls/#images-without-dimensions)",
      score: 0,
      scoreDisplayMode: "binary",
      details: [Object],
    },
    metrics: {
      id: "metrics",
      title: "Metrics",
      description: "Collects all available metrics.",
      score: null,
      scoreDisplayMode: "informative",
      details: [Object],
      numericValue: 5460,
    },
    "long-tasks": {
      id: "long-tasks",
      title: "Avoid long main-thread tasks",
      description:
        "Lists the longest tasks on the main thread, useful for identifying worst contributors to input delay. [Learn more](https://web.dev/long-tasks-devtools/)",
      score: null,
      scoreDisplayMode: "informative",
      displayValue: "10 long tasks found",
      details: [Object],
    },
    "main-thread-tasks": {
      id: "main-thread-tasks",
      title: "Tasks",
      description:
        "Lists the toplevel main thread tasks that executed during page load.",
      score: null,
      scoreDisplayMode: "informative",
      details: [Object],
    },
    "bootup-time": {
      id: "bootup-time",
      title: "Reduce JavaScript execution time",
      description:
        "Consider reducing the time spent parsing, compiling, and executing JS. You may find delivering smaller JS payloads helps with this. [Learn more](https://web.dev/bootup-time/).",
      score: 0.6,
      scoreDisplayMode: "numeric",
      displayValue: "2.9 s",
      details: [Object],
      numericValue: 2890.499999999992,
    },
    "duplicated-javascript": {
      id: "duplicated-javascript",
      title: "Remove duplicate modules in JavaScript bundles",
      description:
        "Remove large, duplicate JavaScript modules from bundles to reduce unnecessary bytes consumed by network activity. ",
      score: 0.93,
      scoreDisplayMode: "numeric",
      displayValue: "Potential savings of 111 KiB",
      details: [Object],
      numericValue: 80,
    },
    "full-page-screenshot": {
      id: "full-page-screenshot",
      title: "Full-page screenshot",
      description: "A full-height screenshot of the final rendered page",
      score: null,
      scoreDisplayMode: "informative",
      details: [Object],
    },
    "network-rtt": {
      id: "network-rtt",
      title: "Network Round Trip Times",
      description:
        "Network round trip times (RTT) have a large impact on performance. If the RTT to an origin is high, it's an indication that servers closer to the user could improve performance. [Learn more](https://hpbn.co/primer-on-latency-and-bandwidth/).",
      score: null,
      scoreDisplayMode: "informative",
      displayValue: "0 ms",
      details: [Object],
      numericValue: 0,
    },
    "resource-summary": {
      id: "resource-summary",
      title: "Keep request counts low and transfer sizes small",
      description:
        "To set budgets for the quantity and size of page resources, add a budget.json file. [Learn more](https://web.dev/use-lighthouse-for-performance-budgets/).",
      score: null,
      scoreDisplayMode: "informative",
      displayValue: "411 requests • 3,865 KiB",
      details: [Object],
    },
    "speed-index": {
      id: "speed-index",
      title: "Speed Index",
      description:
        "Speed Index shows how quickly the contents of a page are visibly populated. [Learn more](https://web.dev/speed-index/).",
      score: 0.34,
      scoreDisplayMode: "numeric",
      displayValue: "2.8 s",
      numericValue: 2767.098353960675,
    },
    "preload-lcp-image": {
      id: "preload-lcp-image",
      title: "Preload Largest Contentful Paint image",
      description:
        "Preload the image used by the LCP element in order to improve your LCP time. [Learn more](https://web.dev/optimize-lcp/#preload-important-resources).",
      score: 1,
      scoreDisplayMode: "numeric",
      details: [Object],
      numericValue: 0,
    },
    "cumulative-layout-shift": {
      id: "cumulative-layout-shift",
      title: "Cumulative Layout Shift",
      description:
        "Cumulative Layout Shift measures the movement of visible elements within the viewport. [Learn more](https://web.dev/cls/).",
      score: 0.87,
      scoreDisplayMode: "numeric",
      displayValue: "0.113",
      details: [Object],
      numericValue: 0.1132441926057263,
    },
    "layout-shift-elements": {
      id: "layout-shift-elements",
      title: "Avoid large layout shifts",
      description: "These DOM elements contribute most to the CLS of the page.",
      score: null,
      scoreDisplayMode: "informative",
      displayValue: "4 elements found",
      details: [Object],
    },
    "total-byte-weight": {
      id: "total-byte-weight",
      title: "Avoid enormous network payloads",
      description:
        "Large network payloads cost users real money and are highly correlated with long load times. [Learn more](https://web.dev/total-byte-weight/).",
      score: 0.54,
      scoreDisplayMode: "numeric",
      displayValue: "Total size was 3,865 KiB",
      details: [Object],
      numericValue: 3958270,
    },
    "third-party-summary": {
      id: "third-party-summary",
      title: "Reduce the impact of third-party code",
      description:
        "Third-party code can significantly impact load performance. Limit the number of redundant third-party providers and try to load third-party code after your page has primarily finished loading. [Learn more](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/loading-third-party-javascript/).",
      score: 0,
      scoreDisplayMode: "binary",
      displayValue: "Third-party code blocked the main thread for 260 ms",
      details: [Object],
    },
    "total-blocking-time": {
      id: "total-blocking-time",
      title: "Total Blocking Time",
      description:
        "Sum of all time periods between FCP and Time to Interactive, when task length exceeded 50ms, expressed in milliseconds. [Learn more](https://web.dev/lighthouse-total-blocking-time/).",
      score: 0.78,
      scoreDisplayMode: "numeric",
      displayValue: "210 ms",
      numericValue: 208,
    },
    "unused-javascript": {
      id: "unused-javascript",
      title: "Remove unused JavaScript",
      description:
        "Remove unused JavaScript to reduce bytes consumed by network activity. [Learn more](https://web.dev/unused-javascript/).",
      score: 0.44,
      scoreDisplayMode: "numeric",
      displayValue: "Potential savings of 1,641 KiB",
      details: [Object],
      numericValue: 1240,
    },
    "uses-long-cache-ttl": {
      id: "uses-long-cache-ttl",
      title: "Serve static assets with an efficient cache policy",
      description:
        "A long cache lifetime can speed up repeat visits to your page. [Learn more](https://web.dev/uses-long-cache-ttl/).",
      score: 0.08,
      scoreDisplayMode: "numeric",
      displayValue: "57 resources found",
      details: [Object],
      numericValue: 707501.9221028349,
    },
    "final-screenshot": {
      id: "final-screenshot",
      title: "Final Screenshot",
      description: "The last screenshot captured of the pageload.",
      score: null,
      scoreDisplayMode: "informative",
      details: [Object],
    },
    "server-response-time": {
      id: "server-response-time",
      title: "Initial server response time was short",
      description:
        "Keep the server response time for the main document short because all other requests depend on it. [Learn more](https://web.dev/time-to-first-byte/).",
      score: 1,
      scoreDisplayMode: "binary",
      displayValue: "Root document took 40 ms",
      details: [Object],
      numericValue: 41.149,
    },
    "no-document-write": {
      id: "no-document-write",
      title: "Avoid `document.write()`",
      description:
        "For users on slow connections, external scripts dynamically injected via `document.write()` can delay page load by tens of seconds. [Learn more](https://web.dev/no-document-write/).",
      score: 0,
      scoreDisplayMode: "binary",
      details: [Object],
    },
    redirects: {
      id: "redirects",
      title: "Avoid multiple page redirects",
      description:
        "Redirects introduce additional delays before the page can be loaded. [Learn more](https://web.dev/redirects/).",
      score: 0.68,
      scoreDisplayMode: "numeric",
      displayValue: "Potential savings of 420 ms",
      details: [Object],
      numericValue: 420,
    },
    "first-cpu-idle": {
      id: "first-cpu-idle",
      title: "First CPU Idle",
      description:
        "First CPU Idle marks the first time at which the page's main thread is quiet enough to handle input.  [Learn more](https://web.dev/first-cpu-idle/).",
      score: 0.4,
      scoreDisplayMode: "numeric",
      displayValue: "5.1 s",
      numericValue: 5069,
    },
    "offscreen-images": {
      id: "offscreen-images",
      title: "Defer offscreen images",
      description:
        "Consider lazy-loading offscreen and hidden images after all critical resources have finished loading to lower time to interactive. [Learn more](https://web.dev/offscreen-images/).",
      score: 1,
      scoreDisplayMode: "numeric",
      displayValue: "Potential savings of 85 KiB",
      details: [Object],
      warnings: [],
      numericValue: 0,
    },
    "render-blocking-resources": {
      id: "render-blocking-resources",
      title: "Eliminate render-blocking resources",
      description:
        "Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn more](https://web.dev/render-blocking-resources/).",
      score: 0.8,
      scoreDisplayMode: "numeric",
      displayValue: "Potential savings of 240 ms",
      details: [Object],
      numericValue: 244,
    },
    "uses-webp-images": {
      id: "uses-webp-images",
      title: "Serve images in next-gen formats",
      description:
        "Image formats like JPEG 2000, JPEG XR, and WebP often provide better compression than PNG or JPEG, which means faster downloads and less data consumption. [Learn more](https://web.dev/uses-webp-images/).",
      score: 0.54,
      scoreDisplayMode: "numeric",
      displayValue: "Potential savings of 274 KiB",
      details: [Object],
      warnings: [],
      numericValue: 680,
    },
    "uses-text-compression": {
      id: "uses-text-compression",
      title: "Enable text compression",
      description:
        "Text-based resources should be served with compression (gzip, deflate or brotli) to minimize total network bytes. [Learn more](https://web.dev/uses-text-compression/).",
      score: 1,
      scoreDisplayMode: "numeric",
      displayValue: "Potential savings of 31 KiB",
      details: [Object],
      numericValue: 0,
    },
    "first-meaningful-paint": {
      id: "first-meaningful-paint",
      title: "First Meaningful Paint",
      description:
        "First Meaningful Paint measures when the primary content of a page is visible. [Learn more](https://web.dev/first-meaningful-paint/).",
      score: 0.87,
      scoreDisplayMode: "numeric",
      displayValue: "1.0 s",
      numericValue: 990,
    },
    "unminified-javascript": {
      id: "unminified-javascript",
      title: "Minify JavaScript",
      description:
        "Minifying JavaScript files can reduce payload sizes and script parse time. [Learn more](https://web.dev/unminified-javascript/).",
      score: 1,
      scoreDisplayMode: "numeric",
      details: [Object],
      warnings: [],
      numericValue: 0,
    },
    "uses-passive-event-listeners": {
      id: "uses-passive-event-listeners",
      title: "Uses passive listeners to improve scrolling performance",
      description:
        "Consider marking your touch and wheel event listeners as `passive` to improve your page's scroll performance. [Learn more](https://web.dev/uses-passive-event-listeners/).",
      score: 1,
      scoreDisplayMode: "binary",
      details: [Object],
    },
    "efficient-animated-content": {
      id: "efficient-animated-content",
      title: "Use video formats for animated content",
      description:
        "Large GIFs are inefficient for delivering animated content. Consider using MPEG4/WebM videos for animations and PNG/WebP for static images instead of GIF to save network bytes. [Learn more](https://web.dev/efficient-animated-content/)",
      score: 1,
      scoreDisplayMode: "numeric",
      details: [Object],
      numericValue: 0,
    },
    diagnostics: {
      id: "diagnostics",
      title: "Diagnostics",
      description: "Collection of useful page vitals.",
      score: null,
      scoreDisplayMode: "informative",
      details: [Object],
    },
    "largest-contentful-paint-element": {
      id: "largest-contentful-paint-element",
      title: "Largest Contentful Paint element",
      description:
        "This is the largest contentful element painted within the viewport. [Learn More](https://web.dev/lighthouse-largest-contentful-paint/)",
      score: null,
      scoreDisplayMode: "informative",
      displayValue: "1 element found",
      details: [Object],
    },
    "uses-responsive-images": {
      id: "uses-responsive-images",
      title: "Properly size images",
      description:
        "Serve images that are appropriately-sized to save cellular data and improve load time. [Learn more](https://web.dev/uses-responsive-images/).",
      score: 1,
      scoreDisplayMode: "numeric",
      displayValue: "Potential savings of 19 KiB",
      details: [Object],
      numericValue: 0,
    },
    "network-server-latency": {
      id: "network-server-latency",
      title: "Server Backend Latencies",
      description:
        "Server latencies can impact web performance. If the server latency of an origin is high, it's an indication the server is overloaded or has poor backend performance. [Learn more](https://hpbn.co/primer-on-web-performance/#analyzing-the-resource-waterfall).",
      score: null,
      scoreDisplayMode: "informative",
      displayValue: "0 ms",
      details: [Object],
      numericValue: 0,
    },
    "timing-budget": {
      id: "timing-budget",
      title: "Timing budget",
      description:
        "Set a timing budget to help you keep an eye on the performance of your site. Performant sites load fast and respond to user input events quickly. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/budgets).",
      score: null,
      scoreDisplayMode: "notApplicable",
    },
    "critical-request-chains": {
      id: "critical-request-chains",
      title: "Avoid chaining critical requests",
      description:
        "The Critical Request Chains below show you what resources are loaded with a high priority. Consider reducing the length of chains, reducing the download size of resources, or deferring the download of unnecessary resources to improve page load. [Learn more](https://web.dev/critical-request-chains/).",
      score: null,
      scoreDisplayMode: "informative",
      displayValue: "4 chains found",
      details: [Object],
    },
    "uses-rel-preconnect": {
      id: "uses-rel-preconnect",
      title: "Preconnect to required origins",
      description:
        "Consider adding `preconnect` or `dns-prefetch` resource hints to establish early connections to important third-party origins. [Learn more](https://web.dev/uses-rel-preconnect/).",
      score: 1,
      scoreDisplayMode: "numeric",
      warnings: [Array],
    },
    "mainthread-work-breakdown": {
      id: "mainthread-work-breakdown",
      title: "Minimize main-thread work",
      description:
        "Consider reducing the time spent parsing, compiling and executing JS. You may find delivering smaller JS payloads helps with this. [Learn more](https://web.dev/mainthread-work-breakdown/)",
      score: 0.28,
      scoreDisplayMode: "numeric",
      displayValue: "5.5 s",
      details: [Object],
      numericValue: 5475.536999999932,
    },
    "unminified-css": {
      id: "unminified-css",
      title: "Minify CSS",
      description:
        "Minifying CSS files can reduce network payload sizes. [Learn more](https://web.dev/unminified-css/).",
      score: 1,
      scoreDisplayMode: "numeric",
      details: [Object],
      numericValue: 0,
    },
    "max-potential-fid": {
      id: "max-potential-fid",
      title: "Max Potential First Input Delay",
      description:
        "The maximum potential First Input Delay that your users could experience is the duration of the longest task. [Learn more](https://web.dev/lighthouse-max-potential-fid/).",
      score: 0.96,
      scoreDisplayMode: "numeric",
      displayValue: "100 ms",
      numericValue: 104,
    },
    "first-contentful-paint": {
      id: "first-contentful-paint",
      title: "First Contentful Paint",
      description:
        "First Contentful Paint marks the time at which the first text or image is painted. [Learn more](https://web.dev/first-contentful-paint/).",
      score: 0.9,
      scoreDisplayMode: "numeric",
      displayValue: "0.9 s",
      numericValue: 940,
    },
    "estimated-input-latency": {
      id: "estimated-input-latency",
      title: "Estimated Input Latency",
      description:
        "Estimated Input Latency is an estimate of how long your app takes to respond to user input, in milliseconds, during the busiest 5s window of page load. If your latency is higher than 50 ms, users may perceive your app as laggy. [Learn more](https://web.dev/estimated-input-latency/).",
      score: 0.99,
      scoreDisplayMode: "numeric",
      displayValue: "40 ms",
      numericValue: 37.180952380952384,
    },
    "network-requests": {
      id: "network-requests",
      title: "Network Requests",
      description:
        "Lists the network requests that were made during page load.",
      score: null,
      scoreDisplayMode: "informative",
      details: [Object],
    },
    "screenshot-thumbnails": {
      id: "screenshot-thumbnails",
      title: "Screenshot Thumbnails",
      description: "This is what the load of your site looked like.",
      score: null,
      scoreDisplayMode: "informative",
      details: [Object],
    },
    "uses-optimized-images": {
      id: "uses-optimized-images",
      title: "Efficiently encode images",
      description:
        "Optimized images load faster and consume less cellular data. [Learn more](https://web.dev/uses-optimized-images/).",
      score: 1,
      scoreDisplayMode: "numeric",
      details: [Object],
      warnings: [],
      numericValue: 0,
    },
    "font-display": {
      id: "font-display",
      title: "All text remains visible during webfont loads",
      description:
        "Leverage the font-display CSS feature to ensure text is user-visible while webfonts are loading. [Learn more](https://web.dev/font-display/).",
      score: 1,
      scoreDisplayMode: "binary",
      details: [Object],
      warnings: [Array],
    },
    "third-party-facades": {
      id: "third-party-facades",
      title: "Lazy load third-party resources with facades",
      description:
        "Some third-party embeds can be lazy loaded. Consider replacing them with a facade until they are required. [Learn more](https://web.dev/third-party-facades/).",
      score: null,
      scoreDisplayMode: "notApplicable",
    },
    "non-composited-animations": {
      id: "non-composited-animations",
      title: "Avoid non-composited animations",
      description:
        "Animations which are not composited can be janky and increase CLS. [Learn more](https://web.dev/non-composited-animations)",
      score: null,
      scoreDisplayMode: "informative",
      displayValue: "3 animated elements found",
      details: [Object],
    },
    "legacy-javascript": {
      id: "legacy-javascript",
      title: "Avoid serving legacy JavaScript to modern browsers",
      description:
        "Polyfills and transforms enable legacy browsers to use new JavaScript features. However, many aren't necessary for modern browsers. For your bundled JavaScript, adopt a modern script deployment strategy using module/nomodule feature detection to reduce the amount of code shipped to modern browsers, while retaining support for legacy browsers. [Learn More](https://philipwalton.com/articles/deploying-es2015-code-in-production-today/)",
      score: 1,
      scoreDisplayMode: "numeric",
      displayValue: "Potential savings of 63 KiB",
      details: [Object],
      numericValue: 0,
    },
  },
  categories: {
    performance: {
      id: "performance",
      title: "Performance",
      score: 0.61,
      auditRefs: [Array],
    },
  },
  categoryGroups: {
    "seo-content": {
      title: "Content Best Practices",
      description:
        "Format your HTML in a way that enables crawlers to better understand your app’s content.",
    },
    "a11y-tables-lists": {
      title: "Tables and lists",
      description:
        "These are opportunities to improve the experience of reading tabular or list data using assistive technology, like a screen reader.",
    },
    "a11y-aria": {
      title: "ARIA",
      description:
        "These are opportunities to improve the usage of ARIA in your application which may enhance the experience for users of assistive technology, like a screen reader.",
    },
    "pwa-optimized": { title: "PWA Optimized" },
    "a11y-best-practices": {
      title: "Best practices",
      description: "These items highlight common accessibility best practices.",
    },
    "best-practices-browser-compat": { title: "Browser Compatibility" },
    "a11y-audio-video": {
      title: "Audio and video",
      description:
        "These are opportunities to provide alternative content for audio and video. This may improve the experience for users with hearing or vision impairments.",
    },
    metrics: { title: "Metrics" },
    budgets: {
      title: "Budgets",
      description:
        "Performance budgets set standards for the performance of your site.",
    },
    "a11y-color-contrast": {
      title: "Contrast",
      description:
        "These are opportunities to improve the legibility of your content.",
    },
    diagnostics: {
      title: "Diagnostics",
      description:
        "More information about the performance of your application. These numbers don't [directly affect](https://web.dev/performance-scoring/) the Performance score.",
    },
    "seo-crawl": {
      title: "Crawling and Indexing",
      description:
        "To appear in search results, crawlers need access to your app.",
    },
    "a11y-names-labels": {
      title: "Names and labels",
      description:
        "These are opportunities to improve the semantics of the controls in your application. This may enhance the experience for users of assistive technology, like a screen reader.",
    },
    "best-practices-general": { title: "General" },
    "best-practices-ux": { title: "User Experience" },
    "best-practices-trust-safety": { title: "Trust and Safety" },
    "seo-mobile": {
      title: "Mobile Friendly",
      description:
        "Make sure your pages are mobile friendly so users don’t have to pinch or zoom in order to read the content pages. [Learn more](https://developers.google.com/search/mobile-sites/).",
    },
    "pwa-installable": { title: "Installable" },
    "a11y-language": {
      title: "Internationalization and localization",
      description:
        "These are opportunities to improve the interpretation of your content by users in different locales.",
    },
    "a11y-navigation": {
      title: "Navigation",
      description:
        "These are opportunities to improve keyboard navigation in your application.",
    },
    "load-opportunities": {
      title: "Opportunities",
      description:
        "These suggestions can help your page load faster. They don't [directly affect](https://web.dev/performance-scoring/) the Performance score.",
    },
  },
  timing: { total: 27945.48 },
  i18n: {
    rendererFormattedStrings: {
      varianceDisclaimer:
        "Values are estimated and may vary. The [performance score is calculated](https://web.dev/performance-scoring/) directly from these metrics.",
      opportunityResourceColumnLabel: "Opportunity",
      opportunitySavingsColumnLabel: "Estimated Savings",
      errorMissingAuditInfo: "Report error: no audit information",
      errorLabel: "Error!",
      warningHeader: "Warnings: ",
      passedAuditsGroupTitle: "Passed audits",
      notApplicableAuditsGroupTitle: "Not applicable",
      manualAuditsGroupTitle: "Additional items to manually check",
      toplevelWarningsMessage:
        "There were issues affecting this run of Lighthouse:",
      crcLongestDurationLabel: "Maximum critical path latency:",
      crcInitialNavigation: "Initial Navigation",
      lsPerformanceCategoryDescription:
        "[Lighthouse](https://developers.google.com/web/tools/lighthouse/) analysis of the current page on an emulated mobile network. Values are estimated and may vary.",
      labDataTitle: "Lab Data",
    },
  },
};
