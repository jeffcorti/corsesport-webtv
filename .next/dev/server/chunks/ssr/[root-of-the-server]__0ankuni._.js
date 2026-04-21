module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/lib/youtube.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getYouTubeVideos",
    ()=>getYouTubeVideos
]);
const API_KEY = process.env.YOUTUBE_API_KEY;
const HANDLE = process.env.YOUTUBE_HANDLE;
async function fetchJson(url) {
    const res = await fetch(url, {
        cache: "no-store"
    });
    if (!res.ok) {
        const text = await res.text();
        console.error("Erreur API YouTube :", res.status, text);
        return null;
    }
    return res.json();
}
async function getChannelId() {
    if (!API_KEY || !HANDLE) {
        console.error("YOUTUBE_API_KEY ou YOUTUBE_HANDLE manquant");
        return null;
    }
    const handle = HANDLE.replace("@", "");
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&q=${encodeURIComponent(handle)}&maxResults=10&key=${API_KEY}`;
    const data = await fetchJson(url);
    if (!data || !data.items || !Array.isArray(data.items) || data.items.length === 0) {
        return null;
    }
    return data.items[0]?.id?.channelId ?? null;
}
async function getYouTubeVideos() {
    try {
        if (!API_KEY) {
            console.error("YOUTUBE_API_KEY manquante");
            return [];
        }
        const channelId = await getChannelId();
        if (!channelId) {
            console.error("Impossible de trouver la chaîne YouTube");
            return [];
        }
        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=12&order=date&type=video&key=${API_KEY}`;
        const data = await fetchJson(url);
        if (!data || !data.items || !Array.isArray(data.items)) {
            return [];
        }
        return data.items.map((item)=>({
                id: item?.id?.videoId ?? "",
                title: item?.snippet?.title ?? "Vidéo",
                thumbnail: item?.snippet?.thumbnails?.high?.url ?? item?.snippet?.thumbnails?.medium?.url ?? item?.snippet?.thumbnails?.default?.url ?? "",
                publishedAt: item?.snippet?.publishedAt ?? "",
                liveBroadcastContent: item?.snippet?.liveBroadcastContent ?? "none"
            })).filter((video)=>video.id && video.thumbnail);
    } catch (error) {
        console.error("Erreur getYouTubeVideos :", error);
        return [];
    }
}
}),
"[project]/app/live/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LivePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$youtube$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/youtube.ts [app-rsc] (ecmascript)");
;
;
async function LivePage() {
    const videos = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$youtube$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getYouTubeVideos"])();
    const isLive = videos.some((v)=>v.liveBroadcastContent === "live");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        style: {
            background: "#000",
            color: "#fff",
            minHeight: "100vh",
            padding: "20px"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: "1400px",
                margin: "0 auto"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        border: "1px solid #f2c500",
                        padding: "40px",
                        textAlign: "center",
                        marginBottom: "30px",
                        background: "#111"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            style: {
                                fontSize: "36px"
                            },
                            children: isLive ? "LIVE 🔴" : "OFFLINE ⚫"
                        }, void 0, false, {
                            fileName: "[project]/app/live/page.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginTop: "20px",
                                display: "flex",
                                justifyContent: "center",
                                gap: "20px",
                                flexWrap: "wrap"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://www.youtube.com/@corsesportdiffusion9719",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    style: {
                                        background: "#f2c500",
                                        color: "#000",
                                        padding: "20px 50px",
                                        borderRadius: "10px",
                                        fontSize: "20px",
                                        fontWeight: 700,
                                        textDecoration: "none"
                                    },
                                    children: "YouTube"
                                }, void 0, false, {
                                    fileName: "[project]/app/live/page.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://www.facebook.com/Corsesportdiffusion",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    style: {
                                        background: "#000",
                                        color: "#f2c500",
                                        border: "1px solid #f2c500",
                                        padding: "20px 50px",
                                        borderRadius: "10px",
                                        fontSize: "20px",
                                        fontWeight: 700,
                                        textDecoration: "none"
                                    },
                                    children: "Facebook"
                                }, void 0, false, {
                                    fileName: "[project]/app/live/page.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/live/page.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/live/page.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                videos.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "15px"
                    },
                    children: videos.slice(0, 6).map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: `https://www.youtube.com/watch?v=${v.id}`,
                            target: "_blank",
                            rel: "noreferrer",
                            style: {
                                textDecoration: "none",
                                color: "#fff"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: "#111",
                                    border: "1px solid #f2c500",
                                    padding: "5px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: v.thumbnail,
                                        alt: v.title,
                                        style: {
                                            width: "100%",
                                            display: "block"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/live/page.tsx",
                                        lineNumber: 99,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: "5px",
                                            fontSize: "14px"
                                        },
                                        children: v.title
                                    }, void 0, false, {
                                        fileName: "[project]/app/live/page.tsx",
                                        lineNumber: 104,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/live/page.tsx",
                                lineNumber: 92,
                                columnNumber: 17
                            }, this)
                        }, v.id, false, {
                            fileName: "[project]/app/live/page.tsx",
                            lineNumber: 85,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/live/page.tsx",
                    lineNumber: 77,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        background: "#111",
                        border: "1px solid #f2c500",
                        padding: "30px",
                        textAlign: "center",
                        color: "#ccc"
                    },
                    children: "Aucune vidéo YouTube disponible pour le moment."
                }, void 0, false, {
                    fileName: "[project]/app/live/page.tsx",
                    lineNumber: 112,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/live/page.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/live/page.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/live/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/live/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0ankuni._.js.map