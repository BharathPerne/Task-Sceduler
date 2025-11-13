(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatDate",
    ()=>formatDate,
    "formatTime",
    ()=>formatTime,
    "getCurrentTimePosition",
    ()=>getCurrentTimePosition,
    "getStatusColor",
    ()=>getStatusColor,
    "getTimeSlotStatus",
    ()=>getTimeSlotStatus,
    "getWeekDays",
    ()=>getWeekDays,
    "isSameTimeSlot",
    ()=>isSameTimeSlot,
    "timeSlots",
    ()=>timeSlots
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/addDays.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/startOfWeek.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isSameDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/isSameDay.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isToday$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/isToday.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isPast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/isPast.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isFuture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/isFuture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/startOfDay.js [app-client] (ecmascript)");
;
const getWeekDays = (date = new Date())=>{
    const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfWeek"])(date, {
        weekStartsOn: 1
    }); // Monday
    return Array.from({
        length: 7
    }, (_, i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDays"])(start, i));
};
const timeSlots = Array.from({
    length: 14
}, (_, i)=>{
    const hour = 8 + i; // 8 AM to 9 PM
    return `${hour.toString().padStart(2, '0')}:00`;
});
const getStatusColor = (status)=>{
    switch(status){
        case 'completed':
            return 'bg-green-200 border-green-500';
        case 'overdue':
            return 'bg-red-200 border-red-500';
        default:
            return 'bg-blue-200 border-blue-500';
    }
};
const formatTime = (date)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(date, 'HH:mm');
};
const formatDate = (date)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(date, 'yyyy-MM-dd');
};
const isSameTimeSlot = (date1, date2)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isSameDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSameDay"])(date1, date2) && date1.getHours() === date2.getHours() && date1.getMinutes() === date2.getMinutes();
};
const getTimeSlotStatus = (date, timeSlot, currentTime)=>{
    const [hours] = timeSlot.split(':').map(Number);
    const slotTime = new Date(date);
    slotTime.setHours(hours, 0, 0, 0);
    const isPastTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isPast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPast"])(slotTime) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isToday$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isToday"])(slotTime);
    const isPastToday = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isPast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPast"])(slotTime) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isToday$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isToday"])(slotTime);
    const isFutureTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isFuture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFuture"])(slotTime);
    return {
        isPast: isPastTime,
        isPastToday,
        isFuture: isFutureTime,
        isCurrentDay: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isToday$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isToday"])(date),
        slotTime
    };
};
const getCurrentTimePosition = (date, currentTime)=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isToday$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isToday"])(date)) return null;
    const startOfToday = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfDay"])(currentTime);
    // Adjust for your time slot range (8:00 AM to 9:00 PM)
    const startHour = 8; // 8 AM
    const endHour = 23.3; // 9 PM
    const totalMinutesInView = (endHour - startHour) * 60; // 13 hours * 60 = 780 minutes
    // Calculate minutes from start of viewing hours (8:00 AM)
    const minutesFromStartOfDay = (currentTime.getTime() - startOfToday.getTime()) / (1000 * 60);
    const minutesFromStartOfView = minutesFromStartOfDay - startHour * 60;
    // If current time is outside viewing hours, return null
    if (minutesFromStartOfView < 0 || minutesFromStartOfView > totalMinutesInView) {
        return null;
    }
    // Calculate position as percentage of viewing hours (8 AM to 9 PM)
    const position = minutesFromStartOfView / totalMinutesInView * 100;
    return Math.max(0, Math.min(100, position)); // Clamp between 0-100%
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Task.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const Task = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(48);
    if ($[0] !== "f5be697b689af7aa5fb8831fae4fa24f0ed508184a3db50e41df855638040015") {
        for(let $i = 0; $i < 48; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f5be697b689af7aa5fb8831fae4fa24f0ed508184a3db50e41df855638040015";
    }
    const { task, onDragStart, onDragEnd, isDragging: t1 } = t0;
    const isDragging = t1 === undefined ? false : t1;
    const [showTooltip, setShowTooltip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isOverdue = task.status === "overdue";
    let t2;
    if ($[1] !== onDragStart || $[2] !== task) {
        t2 = (event)=>{
            if (event.dataTransfer) {
                event.dataTransfer.setData("text/plain", task.id);
            }
            onDragStart(task);
        };
        $[1] = onDragStart;
        $[2] = task;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const handleDragStart = t2;
    let t3;
    if ($[4] !== onDragEnd) {
        t3 = ()=>{
            onDragEnd();
        };
        $[4] = onDragEnd;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const handleDragEnd = t3;
    let t4;
    if ($[6] !== task.status) {
        t4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStatusColor"])(task.status);
        $[6] = task.status;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    const t5 = `
        p-2 rounded-lg border-l-4 cursor-grab text-sm relative
        ${t4}
        hover:shadow-md transition-all
        ${isOverdue ? "animate-pulse" : ""}
        ${isDragging ? "shadow-xl scale-105 z-50" : ""}
      `;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ()=>setShowTooltip(true);
        t7 = ()=>setShowTooltip(false);
        t8 = {
            scale: 1.03,
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
        };
        t9 = {
            scale: 1.05,
            cursor: "grabbing"
        };
        $[8] = t6;
        $[9] = t7;
        $[10] = t8;
        $[11] = t9;
    } else {
        t6 = $[8];
        t7 = $[9];
        t8 = $[10];
        t9 = $[11];
    }
    let t10;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = {
            type: "spring",
            stiffness: 500,
            damping: 30
        };
        $[12] = t10;
    } else {
        t10 = $[12];
    }
    let t11;
    if ($[13] !== isOverdue) {
        t11 = isOverdue && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full",
            animate: {
                scale: [
                    1,
                    1.2,
                    1
                ]
            },
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/Task.tsx",
            lineNumber: 110,
            columnNumber: 24
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = isOverdue;
        $[14] = t11;
    } else {
        t11 = $[14];
    }
    const t12 = isDragging ? 0.8 : 1;
    let t13;
    if ($[15] !== t12) {
        t13 = {
            opacity: t12
        };
        $[15] = t12;
        $[16] = t13;
    } else {
        t13 = $[16];
    }
    let t14;
    if ($[17] !== task.title) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "font-medium truncate",
            children: task.title
        }, void 0, false, {
            fileName: "[project]/src/components/Task.tsx",
            lineNumber: 135,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = task.title;
        $[18] = t14;
    } else {
        t14 = $[18];
    }
    let t15;
    if ($[19] !== task.startTime) {
        t15 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTime"])(task.startTime);
        $[19] = task.startTime;
        $[20] = t15;
    } else {
        t15 = $[20];
    }
    let t16;
    if ($[21] !== task.endTime) {
        t16 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTime"])(task.endTime);
        $[21] = task.endTime;
        $[22] = t16;
    } else {
        t16 = $[22];
    }
    let t17;
    if ($[23] !== isOverdue) {
        t17 = isOverdue && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
            className: "text-red-600 ml-1 font-semibold",
            animate: {
                opacity: [
                    0.7,
                    1,
                    0.7
                ]
            },
            transition: {
                duration: 1.5,
                repeat: Infinity
            },
            children: "• OVERDUE"
        }, void 0, false, {
            fileName: "[project]/src/components/Task.tsx",
            lineNumber: 159,
            columnNumber: 24
        }, ("TURBOPACK compile-time value", void 0));
        $[23] = isOverdue;
        $[24] = t17;
    } else {
        t17 = $[24];
    }
    let t18;
    if ($[25] !== t15 || $[26] !== t16 || $[27] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-xs text-gray-600",
            children: [
                t15,
                " - ",
                t16,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Task.tsx",
            lineNumber: 172,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = t15;
        $[26] = t16;
        $[27] = t17;
        $[28] = t18;
    } else {
        t18 = $[28];
    }
    let t19;
    if ($[29] !== t13 || $[30] !== t14 || $[31] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            animate: t13,
            children: [
                t14,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Task.tsx",
            lineNumber: 182,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[29] = t13;
        $[30] = t14;
        $[31] = t18;
        $[32] = t19;
    } else {
        t19 = $[32];
    }
    let t20;
    if ($[33] !== isOverdue || $[34] !== showTooltip || $[35] !== task.description || $[36] !== task.endTime || $[37] !== task.startTime || $[38] !== task.status || $[39] !== task.title) {
        t20 = showTooltip && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "absolute z-50 p-3 bg-white border border-gray-200 rounded-lg shadow-xl max-w-xs",
            initial: {
                opacity: 0,
                scale: 0.9,
                y: 10
            },
            animate: {
                opacity: 1,
                scale: 1,
                y: 0
            },
            transition: {
                type: "spring",
                stiffness: 500,
                damping: 30
            },
            style: {
                bottom: "100%",
                left: "50%",
                transform: "translateX(-50%)",
                marginBottom: "8px"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white border-r border-b border-gray-200 rotate-45"
                }, void 0, false, {
                    fileName: "[project]/src/components/Task.tsx",
                    lineNumber: 209,
                    columnNumber: 8
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                    className: "font-semibold text-sm mb-1",
                    children: task.title
                }, void 0, false, {
                    fileName: "[project]/src/components/Task.tsx",
                    lineNumber: 209,
                    columnNumber: 143
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-gray-600 mb-2",
                    children: task.description
                }, void 0, false, {
                    fileName: "[project]/src/components/Task.tsx",
                    lineNumber: 209,
                    columnNumber: 203
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xs space-y-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                "🕐 ",
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTime"])(task.startTime),
                                " - ",
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTime"])(task.endTime)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Task.tsx",
                            lineNumber: 209,
                            columnNumber: 302
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `capitalize ${isOverdue ? "text-red-600 font-semibold" : ""}`,
                            children: [
                                "📊 Status: ",
                                task.status,
                                isOverdue && " (Past due)"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Task.tsx",
                            lineNumber: 209,
                            columnNumber: 373
                        }, ("TURBOPACK compile-time value", void 0)),
                        isOverdue && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "text-red-600 text-xs mt-1 p-1 bg-red-50 rounded border border-red-200",
                            initial: {
                                scale: 0.9
                            },
                            animate: {
                                scale: 1
                            },
                            transition: {
                                delay: 0.2
                            },
                            children: "⚠️ This task should have been completed already"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Task.tsx",
                            lineNumber: 209,
                            columnNumber: 524
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Task.tsx",
                    lineNumber: 209,
                    columnNumber: 267
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Task.tsx",
            lineNumber: 192,
            columnNumber: 26
        }, ("TURBOPACK compile-time value", void 0));
        $[33] = isOverdue;
        $[34] = showTooltip;
        $[35] = task.description;
        $[36] = task.endTime;
        $[37] = task.startTime;
        $[38] = task.status;
        $[39] = task.title;
        $[40] = t20;
    } else {
        t20 = $[40];
    }
    let t21;
    if ($[41] !== handleDragEnd || $[42] !== handleDragStart || $[43] !== t11 || $[44] !== t19 || $[45] !== t20 || $[46] !== t5) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            draggable: true,
            onDragStart: handleDragStart,
            onDragEnd: handleDragEnd,
            className: t5,
            onMouseEnter: t6,
            onMouseLeave: t7,
            whileHover: t8,
            whileTap: t9,
            layout: true,
            transition: t10,
            children: [
                t11,
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Task.tsx",
            lineNumber: 229,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[41] = handleDragEnd;
        $[42] = handleDragStart;
        $[43] = t11;
        $[44] = t19;
        $[45] = t20;
        $[46] = t5;
        $[47] = t21;
    } else {
        t21 = $[47];
    }
    return t21;
};
_s(Task, "MlKqB7CDspaiqeinDL2ipSY+OVU=");
_c = Task;
const __TURBOPACK__default__export__ = Task;
var _c;
__turbopack_context__.k.register(_c, "Task");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/WeekView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isSameDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/isSameDay.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isToday$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/isToday.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isPast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/isPast.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/startOfDay.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Task$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Task.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const WeekView = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(32);
    if ($[0] !== "fe2b43682f61f3cbdb3d8b909991994e161d88947e7e6112127884c246013d7c") {
        for(let $i = 0; $i < 32; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "fe2b43682f61f3cbdb3d8b909991994e161d88947e7e6112127884c246013d7c";
    }
    const { tasks, currentDate, onTaskDragStart, onTaskDragEnd, onDrop } = t0;
    const weekDays = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWeekDays"])(currentDate);
    const [dragOverSlot, setDragOverSlot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [draggedTask, setDraggedTask] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = new Date();
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [currentTime, setCurrentTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    let t3;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ()=>{
            const interval = setInterval(()=>{
                setCurrentTime(new Date());
            }, 60000);
            return ()=>clearInterval(interval);
        };
        t3 = [];
        $[2] = t2;
        $[3] = t3;
    } else {
        t2 = $[2];
        t3 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = (e, dayIndex, timeSlot)=>{
            e.preventDefault();
            e.dataTransfer.dropEffect = "move";
            setDragOverSlot({
                dayIndex,
                timeSlot
            });
        };
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    const handleDragOver = t4;
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ()=>{
            setDragOverSlot(null);
        };
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    const handleDragLeave = t5;
    let t6;
    if ($[6] !== onDrop) {
        t6 = (e_0, date, timeSlot_0, dayIndex_0)=>{
            e_0.preventDefault();
            e_0.dataTransfer.getData("text/plain");
            setDragOverSlot(null);
            onDrop(date, timeSlot_0);
        };
        $[6] = onDrop;
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    const handleDrop = t6;
    let t7;
    if ($[8] !== onTaskDragStart) {
        t7 = (task)=>{
            setDraggedTask(task);
            onTaskDragStart(task);
        };
        $[8] = onTaskDragStart;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    const handleTaskDragStart = t7;
    let t8;
    if ($[10] !== onTaskDragEnd) {
        t8 = ()=>{
            setDraggedTask(null);
            onTaskDragEnd();
        };
        $[10] = onTaskDragEnd;
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    const handleTaskDragEnd = t8;
    let t9;
    if ($[12] !== tasks) {
        t9 = (date_0, timeSlot_1)=>{
            const [hours] = timeSlot_1.split(":").map(Number);
            return tasks.filter((task_0)=>{
                const taskStart = task_0.startTime;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isSameDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSameDay"])(taskStart, date_0) && taskStart.getHours() === hours;
            });
        };
        $[12] = tasks;
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    const getTasksForTimeSlot = t9;
    let t10;
    if ($[14] !== dragOverSlot?.dayIndex || $[15] !== dragOverSlot?.timeSlot) {
        t10 = (dayIndex_1, timeSlot_2)=>dragOverSlot?.dayIndex === dayIndex_1 && dragOverSlot?.timeSlot === timeSlot_2;
        $[14] = dragOverSlot?.dayIndex;
        $[15] = dragOverSlot?.timeSlot;
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    const isDragOverSlot = t10;
    const getDayHeaderClass = _temp;
    let t11;
    if ($[17] !== currentTime) {
        t11 = (date_2, timeSlot_3)=>{
            const status = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTimeSlotStatus"])(date_2, timeSlot_3, currentTime);
            if (status.isPast && !status.isPastToday) {
                return "bg-gray-50 border-gray-200 text-gray-400";
            }
            if (status.isPastToday) {
                return "bg-blue-50 border-blue-200";
            }
            if (status.isFuture) {
                return "bg-white border-gray-200 hover:border-blue-300 hover:bg-blue-25";
            }
            return "bg-white border-gray-200";
        };
        $[17] = currentTime;
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    const getTimeSlotClass = t11;
    let t12;
    let t13;
    let t14;
    let t15;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = {
            opacity: 0,
            y: -20
        };
        t13 = {
            opacity: 1,
            y: 0
        };
        t14 = {
            duration: 0.5
        };
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-2"
        }, void 0, false, {
            fileName: "[project]/src/components/WeekView.tsx",
            lineNumber: 186,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t12;
        $[20] = t13;
        $[21] = t14;
        $[22] = t15;
    } else {
        t12 = $[19];
        t13 = $[20];
        t14 = $[21];
        t15 = $[22];
    }
    let t16;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = (day, index)=>{
            const isDayToday = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isToday$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isToday"])(day);
            const isDayPast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isPast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPast"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfDay"])(day)) && !isDayToday;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: `p-3 text-center rounded-lg border-2 transition-all duration-300 ${isDayToday ? "border-blue-500 shadow-lg scale-105" : isDayPast ? "border-gray-300" : "border-gray-200 hover:border-blue-300"} ${getDayHeaderClass(day)}`,
                whileHover: {
                    scale: isDayToday ? 1.02 : 1.05
                },
                transition: {
                    type: "spring",
                    stiffness: 400
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "font-semibold text-sm",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(day, "EEE")
                    }, void 0, false, {
                        fileName: "[project]/src/components/WeekView.tsx",
                        lineNumber: 207,
                        columnNumber: 10
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `text-xs ${isDayToday ? "text-blue-100" : "text-gray-600"}`,
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(day, "MMM d")
                    }, void 0, false, {
                        fileName: "[project]/src/components/WeekView.tsx",
                        lineNumber: 207,
                        columnNumber: 75
                    }, ("TURBOPACK compile-time value", void 0)),
                    isDayToday && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-blue-200 mt-1",
                        children: "Today"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WeekView.tsx",
                        lineNumber: 207,
                        columnNumber: 195
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, index, true, {
                fileName: "[project]/src/components/WeekView.tsx",
                lineNumber: 202,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
        };
        $[23] = t16;
    } else {
        t16 = $[23];
    }
    const t17 = "space-y-1 relative";
    const t18 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeSlots"].map((timeSlot_4, timeIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "grid grid-cols-[100px_repeat(7,1fr)] gap-1 relative",
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            transition: {
                delay: timeIndex * 0.05
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "p-2 text-sm text-gray-500 text-right pr-4 sticky left-0 bg-white z-10",
                    whileHover: {
                        scale: 1.05
                    },
                    children: timeSlot_4
                }, void 0, false, {
                    fileName: "[project]/src/components/WeekView.tsx",
                    lineNumber: 220,
                    columnNumber: 6
                }, ("TURBOPACK compile-time value", void 0)),
                weekDays.map((day_0, dayIndex_2)=>{
                    const slotTasks = getTasksForTimeSlot(day_0, timeSlot_4);
                    const isDragOver = isDragOverSlot(dayIndex_2, timeSlot_4);
                    const timeSlotStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTimeSlotStatus"])(day_0, timeSlot_4, currentTime);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: `
                      min-h-[80px] border-2 p-1 transition-all duration-200 relative
                      ${getTimeSlotClass(day_0, timeSlot_4)}
                      ${isDragOver ? "!border-blue-400 !bg-blue-100 scale-105 z-20" : ""}
                      ${timeSlotStatus.isPastToday ? "opacity-80" : ""}
                    `,
                        onDragOver: (e_1)=>handleDragOver(e_1, dayIndex_2, timeSlot_4),
                        onDragLeave: handleDragLeave,
                        onDrop: (e_2)=>handleDrop(e_2, day_0, timeSlot_4, dayIndex_2),
                        whileHover: {
                            scale: timeSlotStatus.isFuture ? 1.02 : 1
                        },
                        layout: true,
                        children: [
                            timeSlotStatus.isPast && !timeSlotStatus.isPastToday && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gray-100 bg-opacity-50 pointer-events-none rounded"
                            }, void 0, false, {
                                fileName: "[project]/src/components/WeekView.tsx",
                                lineNumber: 233,
                                columnNumber: 81
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                children: isDragOver && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "absolute inset-0 border-2 border-dashed border-blue-400 bg-blue-100 bg-opacity-50 rounded pointer-events-none z-10",
                                    initial: {
                                        opacity: 0,
                                        scale: 0.8
                                    },
                                    animate: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    exit: {
                                        opacity: 0,
                                        scale: 0.8
                                    },
                                    transition: {
                                        duration: 0.2
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/WeekView.tsx",
                                    lineNumber: 233,
                                    columnNumber: 204
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/WeekView.tsx",
                                lineNumber: 233,
                                columnNumber: 172
                            }, ("TURBOPACK compile-time value", void 0)),
                            timeSlotStatus.isPastToday && timeSlotStatus.slotTime.getHours() === currentTime.getHours() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/src/components/WeekView.tsx",
                                lineNumber: 244,
                                columnNumber: 131
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                children: slotTasks.map((task_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        layout: true,
                                        initial: {
                                            opacity: 0,
                                            scale: 0.8
                                        },
                                        animate: {
                                            opacity: 1,
                                            scale: 1
                                        },
                                        exit: {
                                            opacity: 0,
                                            scale: 0.8
                                        },
                                        transition: {
                                            type: "spring",
                                            stiffness: 500,
                                            damping: 30,
                                            layout: {
                                                duration: 0.3
                                            }
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Task$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            task: task_1,
                                            onDragStart: handleTaskDragStart,
                                            onDragEnd: handleTaskDragEnd,
                                            isDragging: draggedTask?.id === task_1.id
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/WeekView.tsx",
                                            lineNumber: 260,
                                            columnNumber: 14
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, task_1.id, false, {
                                        fileName: "[project]/src/components/WeekView.tsx",
                                        lineNumber: 244,
                                        columnNumber: 262
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/WeekView.tsx",
                                lineNumber: 244,
                                columnNumber: 220
                            }, ("TURBOPACK compile-time value", void 0)),
                            slotTasks.length === 0 && !isDragOver && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "h-full w-full opacity-0 hover:opacity-100 transition-opacity",
                                whileHover: {
                                    opacity: timeSlotStatus.isFuture ? 0.1 : 0.05
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `h-full w-full border-2 border-dashed rounded ${timeSlotStatus.isFuture ? "border-blue-300" : "border-gray-300"}`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/WeekView.tsx",
                                    lineNumber: 262,
                                    columnNumber: 12
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/WeekView.tsx",
                                lineNumber: 260,
                                columnNumber: 227
                            }, ("TURBOPACK compile-time value", void 0)),
                            timeSlotStatus.isPast && !timeSlotStatus.isPastToday && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-yellow-100 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-black text-xs",
                                    children: "Past"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/WeekView.tsx",
                                    lineNumber: 262,
                                    columnNumber: 297
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/WeekView.tsx",
                                lineNumber: 262,
                                columnNumber: 216
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, dayIndex_2, true, {
                        fileName: "[project]/src/components/WeekView.tsx",
                        lineNumber: 226,
                        columnNumber: 14
                    }, ("TURBOPACK compile-time value", void 0));
                })
            ]
        }, timeSlot_4, true, {
            fileName: "[project]/src/components/WeekView.tsx",
            lineNumber: 214,
            columnNumber: 56
        }, ("TURBOPACK compile-time value", void 0)));
    let t19;
    if ($[24] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t17,
            children: t18
        }, void 0, false, {
            fileName: "[project]/src/components/WeekView.tsx",
            lineNumber: 266,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = t18;
        $[25] = t19;
    } else {
        t19 = $[25];
    }
    let t20;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "font-semibold text-sm mb-3",
            children: "Time Indicators"
        }, void 0, false, {
            fileName: "[project]/src/components/WeekView.tsx",
            lineNumber: 274,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = t20;
    } else {
        t20 = $[26];
    }
    let t21;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-4 h-4 bg-blue-500 rounded"
                }, void 0, false, {
                    fileName: "[project]/src/components/WeekView.tsx",
                    lineNumber: 281,
                    columnNumber: 52
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Today"
                }, void 0, false, {
                    fileName: "[project]/src/components/WeekView.tsx",
                    lineNumber: 281,
                    columnNumber: 99
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/WeekView.tsx",
            lineNumber: 281,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = t21;
    } else {
        t21 = $[27];
    }
    let t22;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-4 h-4 bg-gray-300 rounded"
                }, void 0, false, {
                    fileName: "[project]/src/components/WeekView.tsx",
                    lineNumber: 288,
                    columnNumber: 52
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Past Days"
                }, void 0, false, {
                    fileName: "[project]/src/components/WeekView.tsx",
                    lineNumber: 288,
                    columnNumber: 99
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/WeekView.tsx",
            lineNumber: 288,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = t22;
    } else {
        t22 = $[28];
    }
    let t23;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-4 h-4 bg-yellow-100 border-2 border-blue-200 rounded"
                }, void 0, false, {
                    fileName: "[project]/src/components/WeekView.tsx",
                    lineNumber: 295,
                    columnNumber: 52
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Past Time (Today)"
                }, void 0, false, {
                    fileName: "[project]/src/components/WeekView.tsx",
                    lineNumber: 295,
                    columnNumber: 126
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/WeekView.tsx",
            lineNumber: 295,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[29] = t23;
    } else {
        t23 = $[29];
    }
    let t24;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-4 h-4 bg-white border-2 border-gray-200 rounded"
                }, void 0, false, {
                    fileName: "[project]/src/components/WeekView.tsx",
                    lineNumber: 302,
                    columnNumber: 52
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Future Time"
                }, void 0, false, {
                    fileName: "[project]/src/components/WeekView.tsx",
                    lineNumber: 302,
                    columnNumber: 121
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/WeekView.tsx",
            lineNumber: 302,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[30] = t24;
    } else {
        t24 = $[30];
    }
    let t25;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-6 p-4 bg-white rounded-lg border border-gray-200",
            children: [
                t20,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-4 text-xs",
                    children: [
                        t21,
                        t22,
                        t23,
                        t24,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-4  bg-red-500 relative",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -top-1  w-3 h-3 bg-red-500 rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WeekView.tsx",
                                        lineNumber: 309,
                                        columnNumber: 234
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/WeekView.tsx",
                                    lineNumber: 309,
                                    columnNumber: 192
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Current Time"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/WeekView.tsx",
                                    lineNumber: 309,
                                    columnNumber: 308
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/WeekView.tsx",
                            lineNumber: 309,
                            columnNumber: 151
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/WeekView.tsx",
                    lineNumber: 309,
                    columnNumber: 85
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/WeekView.tsx",
            lineNumber: 309,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[31] = t25;
    } else {
        t25 = $[31];
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "overflow-x-auto relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-w-[800px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "grid grid-cols-[100px_repeat(7,1fr)] gap-1 mb-4",
                        initial: t12,
                        animate: t13,
                        transition: t14,
                        children: [
                            t15,
                            weekDays.map(t16)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/WeekView.tsx",
                        lineNumber: 314,
                        columnNumber: 83
                    }, ("TURBOPACK compile-time value", void 0)),
                    t19
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WeekView.tsx",
                lineNumber: 314,
                columnNumber: 52
            }, ("TURBOPACK compile-time value", void 0)),
            t25
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/WeekView.tsx",
        lineNumber: 314,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(WeekView, "8RvF+mykjQymyONbOA7NmceXVGc=");
_c = WeekView;
const __TURBOPACK__default__export__ = WeekView;
function _temp(date_1) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isToday$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isToday"])(date_1)) {
        return "bg-blue-500 text-white";
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isPast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPast"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfDay"])(date_1)) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isToday$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isToday"])(date_1)) {
        return "bg-gray-300 text-gray-600";
    }
    return "bg-gray-100 text-gray-800";
}
var _c;
__turbopack_context__.k.register(_c, "WeekView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/TaskForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TaskForm",
    ()=>TaskForm,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const TaskForm = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(79);
    if ($[0] !== "40670f9b8da6cf11e60602fdaf633a342206b7a8b56f2e07dc2f38ec604632fa") {
        for(let $i = 0; $i < 79; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "40670f9b8da6cf11e60602fdaf633a342206b7a8b56f2e07dc2f38ec604632fa";
    }
    const { onSubmit, onCancel } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(new Date());
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            title: "",
            description: "",
            date: t1,
            startTime: "09:00",
            endTime: "10:00",
            status: "pending"
        };
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
    const t3 = `${formData.date}T${formData.endTime}`;
    let t4;
    if ($[3] !== t3) {
        t4 = new Date(t3);
        $[3] = t3;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    const endTime = t4;
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = new Date();
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    const isOverdue = endTime < t5;
    let t6;
    if ($[6] !== formData.date || $[7] !== formData.description || $[8] !== formData.endTime || $[9] !== formData.startTime || $[10] !== formData.status || $[11] !== formData.title || $[12] !== onSubmit) {
        t6 = (e)=>{
            e.preventDefault();
            const startTime = new Date(`${formData.date}T${formData.startTime}`);
            const endTime_0 = new Date(`${formData.date}T${formData.endTime}`);
            if (endTime_0 <= startTime) {
                alert("End time must be after start time");
                return;
            }
            const status = endTime_0 < new Date() ? "overdue" : formData.status;
            onSubmit({
                title: formData.title,
                description: formData.description,
                startTime,
                endTime: endTime_0,
                status,
                color: "#3b82f6"
            });
        };
        $[6] = formData.date;
        $[7] = formData.description;
        $[8] = formData.endTime;
        $[9] = formData.startTime;
        $[10] = formData.status;
        $[11] = formData.title;
        $[12] = onSubmit;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    const handleSubmit = t6;
    let t7;
    let t8;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg font-semibold",
            children: "Add New Task"
        }, void 0, false, {
            fileName: "[project]/src/components/TaskForm.tsx",
            lineNumber: 98,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-medium text-gray-700",
            children: "Title"
        }, void 0, false, {
            fileName: "[project]/src/components/TaskForm.tsx",
            lineNumber: 99,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t7;
        $[15] = t8;
    } else {
        t7 = $[14];
        t8 = $[15];
    }
    let t9;
    if ($[16] !== formData) {
        t9 = (e_0)=>setFormData({
                ...formData,
                title: e_0.target.value
            });
        $[16] = formData;
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    let t10;
    if ($[18] !== formData.title || $[19] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    required: true,
                    value: formData.title,
                    onChange: t9,
                    className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                }, void 0, false, {
                    fileName: "[project]/src/components/TaskForm.tsx",
                    lineNumber: 119,
                    columnNumber: 20
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TaskForm.tsx",
            lineNumber: 119,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = formData.title;
        $[19] = t9;
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    let t11;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-medium text-gray-700",
            children: "Description"
        }, void 0, false, {
            fileName: "[project]/src/components/TaskForm.tsx",
            lineNumber: 128,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    let t12;
    if ($[22] !== formData) {
        t12 = (e_1)=>setFormData({
                ...formData,
                description: e_1.target.value
            });
        $[22] = formData;
        $[23] = t12;
    } else {
        t12 = $[23];
    }
    let t13;
    if ($[24] !== formData.description || $[25] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    value: formData.description,
                    onChange: t12,
                    className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2",
                    rows: 3
                }, void 0, false, {
                    fileName: "[project]/src/components/TaskForm.tsx",
                    lineNumber: 146,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TaskForm.tsx",
            lineNumber: 146,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = formData.description;
        $[25] = t12;
        $[26] = t13;
    } else {
        t13 = $[26];
    }
    let t14;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-medium text-gray-700",
            children: "Date"
        }, void 0, false, {
            fileName: "[project]/src/components/TaskForm.tsx",
            lineNumber: 155,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = t14;
    } else {
        t14 = $[27];
    }
    let t15;
    if ($[28] !== formData) {
        t15 = (e_2)=>setFormData({
                ...formData,
                date: e_2.target.value
            });
        $[28] = formData;
        $[29] = t15;
    } else {
        t15 = $[29];
    }
    let t16;
    if ($[30] !== formData.date || $[31] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "date",
                    required: true,
                    value: formData.date,
                    onChange: t15,
                    className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                }, void 0, false, {
                    fileName: "[project]/src/components/TaskForm.tsx",
                    lineNumber: 173,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TaskForm.tsx",
            lineNumber: 173,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[30] = formData.date;
        $[31] = t15;
        $[32] = t16;
    } else {
        t16 = $[32];
    }
    let t17;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-medium text-gray-700",
            children: "Start Time"
        }, void 0, false, {
            fileName: "[project]/src/components/TaskForm.tsx",
            lineNumber: 182,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[33] = t17;
    } else {
        t17 = $[33];
    }
    let t18;
    if ($[34] !== formData) {
        t18 = (e_3)=>setFormData({
                ...formData,
                startTime: e_3.target.value
            });
        $[34] = formData;
        $[35] = t18;
    } else {
        t18 = $[35];
    }
    let t19;
    if ($[36] !== formData.startTime || $[37] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t17,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "time",
                    required: true,
                    value: formData.startTime,
                    onChange: t18,
                    className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                }, void 0, false, {
                    fileName: "[project]/src/components/TaskForm.tsx",
                    lineNumber: 200,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TaskForm.tsx",
            lineNumber: 200,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[36] = formData.startTime;
        $[37] = t18;
        $[38] = t19;
    } else {
        t19 = $[38];
    }
    let t20;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-medium text-gray-700",
            children: "End Time"
        }, void 0, false, {
            fileName: "[project]/src/components/TaskForm.tsx",
            lineNumber: 209,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[39] = t20;
    } else {
        t20 = $[39];
    }
    let t21;
    if ($[40] !== formData) {
        t21 = (e_4)=>setFormData({
                ...formData,
                endTime: e_4.target.value
            });
        $[40] = formData;
        $[41] = t21;
    } else {
        t21 = $[41];
    }
    let t22;
    if ($[42] !== formData.endTime || $[43] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t20,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "time",
                    required: true,
                    value: formData.endTime,
                    onChange: t21,
                    className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                }, void 0, false, {
                    fileName: "[project]/src/components/TaskForm.tsx",
                    lineNumber: 227,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TaskForm.tsx",
            lineNumber: 227,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[42] = formData.endTime;
        $[43] = t21;
        $[44] = t22;
    } else {
        t22 = $[44];
    }
    let t23;
    if ($[45] !== t19 || $[46] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 gap-4",
            children: [
                t19,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TaskForm.tsx",
            lineNumber: 236,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[45] = t19;
        $[46] = t22;
        $[47] = t23;
    } else {
        t23 = $[47];
    }
    let t24;
    if ($[48] !== isOverdue) {
        t24 = isOverdue && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-3 bg-red-50 border border-red-200 rounded-md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-red-800 text-sm font-medium",
                    children: "⚠️ This task will be marked as OVERDUE"
                }, void 0, false, {
                    fileName: "[project]/src/components/TaskForm.tsx",
                    lineNumber: 245,
                    columnNumber: 88
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-red-600 text-xs mt-1",
                    children: "The end time is in the past. This task is already overdue."
                }, void 0, false, {
                    fileName: "[project]/src/components/TaskForm.tsx",
                    lineNumber: 245,
                    columnNumber: 182
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TaskForm.tsx",
            lineNumber: 245,
            columnNumber: 24
        }, ("TURBOPACK compile-time value", void 0));
        $[48] = isOverdue;
        $[49] = t24;
    } else {
        t24 = $[49];
    }
    let t25;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-medium text-gray-700",
            children: "Status"
        }, void 0, false, {
            fileName: "[project]/src/components/TaskForm.tsx",
            lineNumber: 253,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[50] = t25;
    } else {
        t25 = $[50];
    }
    const t26 = isOverdue ? "overdue" : formData.status;
    let t27;
    if ($[51] !== formData) {
        t27 = (e_5)=>setFormData({
                ...formData,
                status: e_5.target.value
            });
        $[51] = formData;
        $[52] = t27;
    } else {
        t27 = $[52];
    }
    let t28;
    let t29;
    let t30;
    if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "pending",
            children: "Pending"
        }, void 0, false, {
            fileName: "[project]/src/components/TaskForm.tsx",
            lineNumber: 274,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "completed",
            children: "Completed"
        }, void 0, false, {
            fileName: "[project]/src/components/TaskForm.tsx",
            lineNumber: 275,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "overdue",
            children: "Overdue"
        }, void 0, false, {
            fileName: "[project]/src/components/TaskForm.tsx",
            lineNumber: 276,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[53] = t28;
        $[54] = t29;
        $[55] = t30;
    } else {
        t28 = $[53];
        t29 = $[54];
        t30 = $[55];
    }
    let t31;
    if ($[56] !== isOverdue || $[57] !== t26 || $[58] !== t27) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            value: t26,
            onChange: t27,
            className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2",
            disabled: isOverdue,
            children: [
                t28,
                t29,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TaskForm.tsx",
            lineNumber: 287,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[56] = isOverdue;
        $[57] = t26;
        $[58] = t27;
        $[59] = t31;
    } else {
        t31 = $[59];
    }
    let t32;
    if ($[60] !== isOverdue) {
        t32 = isOverdue && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-red-600 mt-1",
            children: 'Status automatically set to "Overdue" because the end time has passed'
        }, void 0, false, {
            fileName: "[project]/src/components/TaskForm.tsx",
            lineNumber: 297,
            columnNumber: 24
        }, ("TURBOPACK compile-time value", void 0));
        $[60] = isOverdue;
        $[61] = t32;
    } else {
        t32 = $[61];
    }
    let t33;
    if ($[62] !== t31 || $[63] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t25,
                t31,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TaskForm.tsx",
            lineNumber: 305,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[62] = t31;
        $[63] = t32;
        $[64] = t33;
    } else {
        t33 = $[64];
    }
    let t34;
    if ($[65] !== onCancel) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: onCancel,
            className: "px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 border",
            children: "Cancel"
        }, void 0, false, {
            fileName: "[project]/src/components/TaskForm.tsx",
            lineNumber: 314,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[65] = onCancel;
        $[66] = t34;
    } else {
        t34 = $[66];
    }
    let t35;
    if ($[67] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            className: "px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700",
            children: "Add Task"
        }, void 0, false, {
            fileName: "[project]/src/components/TaskForm.tsx",
            lineNumber: 322,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[67] = t35;
    } else {
        t35 = $[67];
    }
    let t36;
    if ($[68] !== t34) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-2 justify-end",
            children: [
                t34,
                t35
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TaskForm.tsx",
            lineNumber: 329,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[68] = t34;
        $[69] = t36;
    } else {
        t36 = $[69];
    }
    let t37;
    if ($[70] !== handleSubmit || $[71] !== t10 || $[72] !== t13 || $[73] !== t16 || $[74] !== t23 || $[75] !== t24 || $[76] !== t33 || $[77] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "space-y-4 p-4 bg-white rounded-lg shadow-lg",
            children: [
                t7,
                t10,
                t13,
                t16,
                t23,
                t24,
                t33,
                t36
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TaskForm.tsx",
            lineNumber: 337,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[70] = handleSubmit;
        $[71] = t10;
        $[72] = t13;
        $[73] = t16;
        $[74] = t23;
        $[75] = t24;
        $[76] = t33;
        $[77] = t36;
        $[78] = t37;
    } else {
        t37 = $[78];
    }
    return t37;
};
_s(TaskForm, "0pJbjhuBhm0O2L/aEof1ZFLr90Q=");
_c = TaskForm;
const __TURBOPACK__default__export__ = TaskForm;
var _c;
__turbopack_context__.k.register(_c, "TaskForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/database.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TaskDB",
    ()=>TaskDB,
    "taskDB",
    ()=>taskDB
]);
const DB_NAME = 'TaskSchedulerDB';
const DB_VERSION = 1;
const STORE_NAME = 'tasks';
class TaskDB {
    db = null;
    async init() {
        return new Promise((resolve, reject)=>{
            const request = indexedDB.open(DB_NAME, DB_VERSION);
            request.onerror = ()=>reject(request.error);
            request.onsuccess = ()=>{
                this.db = request.result;
                resolve();
            };
            request.onupgradeneeded = (event)=>{
                const db = event.target.result;
                if (!db.objectStoreNames.contains(STORE_NAME)) {
                    const store = db.createObjectStore(STORE_NAME, {
                        keyPath: 'id'
                    });
                    store.createIndex('startTime', 'startTime', {
                        unique: false
                    });
                }
            };
        });
    }
    async getAllTasks() {
        if (!this.db) await this.init();
        return new Promise((resolve, reject)=>{
            const transaction = this.db.transaction([
                STORE_NAME
            ], 'readonly');
            const store = transaction.objectStore(STORE_NAME);
            const request = store.getAll();
            request.onerror = ()=>reject(request.error);
            request.onsuccess = ()=>{
                const tasks = request.result.map((task)=>({
                        ...task,
                        startTime: new Date(task.startTime),
                        endTime: new Date(task.endTime)
                    }));
                resolve(tasks);
            };
        });
    }
    async saveTask(task) {
        if (!this.db) await this.init();
        return new Promise((resolve, reject)=>{
            const transaction = this.db.transaction([
                STORE_NAME
            ], 'readwrite');
            const store = transaction.objectStore(STORE_NAME);
            const request = store.put(task);
            request.onerror = ()=>reject(request.error);
            request.onsuccess = ()=>resolve();
        });
    }
    async deleteTask(id) {
        if (!this.db) await this.init();
        return new Promise((resolve, reject)=>{
            const transaction = this.db.transaction([
                STORE_NAME
            ], 'readwrite');
            const store = transaction.objectStore(STORE_NAME);
            const request = store.delete(id);
            request.onerror = ()=>reject(request.error);
            request.onsuccess = ()=>resolve();
        });
    }
}
const taskDB = new TaskDB();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useTasks.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTasks",
    ()=>useTasks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$database$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/database.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/v4.js [app-client] (ecmascript) <export default as v4>");
var _s = __turbopack_context__.k.signature();
;
;
;
const useTasks = ()=>{
    _s();
    const [tasks, setTasks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTasks.useEffect": ()=>{
            loadTasks();
        }
    }["useTasks.useEffect"], []);
    const loadTasks = async ()=>{
        try {
            const loadedTasks = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$database$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["taskDB"].getAllTasks();
            setTasks(loadedTasks);
        } catch (error) {
            console.error('Failed to load tasks:', error);
        } finally{
            setLoading(false);
        }
    };
    const addTask = async (taskData)=>{
        const newTask = {
            ...taskData,
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])()
        };
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$database$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["taskDB"].saveTask(newTask);
            setTasks((prev)=>[
                    ...prev,
                    newTask
                ]);
            return newTask;
        } catch (error_0) {
            console.error('Failed to save task:', error_0);
            throw error_0;
        }
    };
    const updateTask = async (updatedTask)=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$database$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["taskDB"].saveTask(updatedTask);
            setTasks((prev_0)=>prev_0.map((task)=>task.id === updatedTask.id ? updatedTask : task));
        } catch (error_1) {
            console.error('Failed to update task:', error_1);
            throw error_1;
        }
    };
    const deleteTask = async (id)=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$database$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["taskDB"].deleteTask(id);
            setTasks((prev_1)=>prev_1.filter((task_0)=>task_0.id !== id));
        } catch (error_2) {
            console.error('Failed to delete task:', error_2);
            throw error_2;
        }
    };
    const moveTask = async (taskId, newStartTime, newEndTime)=>{
        const task_1 = tasks.find((t)=>t.id === taskId);
        if (!task_1) return;
        const updatedTask_0 = {
            ...task_1,
            startTime: newStartTime,
            endTime: newEndTime
        };
        await updateTask(updatedTask_0);
    };
    return {
        tasks,
        loading,
        addTask,
        updateTask,
        deleteTask,
        moveTask
    };
};
_s(useTasks, "suOgpW3t2nMZzUgwyaGqSRlDRtE=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Calendar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addWeeks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/addWeeks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subWeeks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/subWeeks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeekView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/WeekView.tsx [app-client] (ecmascript)"); // Change to default import
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TaskForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TaskForm.tsx [app-client] (ecmascript)"); // Change to default import
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTasks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useTasks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
const Calendar = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(70);
    if ($[0] !== "0a7bade9192ad8ec79fe51f7416c8bbbf6a84fb1bbc2177f600b531b5f55c705") {
        for(let $i = 0; $i < 70; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0a7bade9192ad8ec79fe51f7416c8bbbf6a84fb1bbc2177f600b531b5f55c705";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = new Date();
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [currentDate, setCurrentDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [showTaskForm, setShowTaskForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [draggedTask, setDraggedTask] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { tasks, addTask, moveTask, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTasks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTasks"])();
    let t1;
    if ($[2] !== currentDate) {
        t1 = ()=>{
            setCurrentDate((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addWeeks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addWeeks"])(currentDate, 1));
        };
        $[2] = currentDate;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const nextWeek = t1;
    let t2;
    if ($[4] !== currentDate) {
        t2 = ()=>{
            setCurrentDate((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subWeeks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subWeeks"])(currentDate, 1));
        };
        $[4] = currentDate;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    const prevWeek = t2;
    let t3;
    if ($[6] !== addTask) {
        t3 = async (taskData)=>{
            await addTask(taskData);
            setShowTaskForm(false);
        };
        $[6] = addTask;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    const handleAddTask = t3;
    let t4;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = (task)=>{
            setDraggedTask(task);
        };
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    const handleTaskDragStart = t4;
    let t5;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ()=>{
            setDraggedTask(null);
        };
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    const handleTaskDragEnd = t5;
    let t6;
    if ($[10] !== draggedTask || $[11] !== moveTask) {
        t6 = async (date, timeSlot)=>{
            if (draggedTask) {
                const [hours, minutes] = timeSlot.split(":").map(Number);
                const newStartTime = new Date(date);
                newStartTime.setHours(hours, minutes, 0, 0);
                const duration = draggedTask.endTime.getTime() - draggedTask.startTime.getTime();
                const newEndTime = new Date(newStartTime.getTime() + duration);
                await moveTask(draggedTask.id, newStartTime, newEndTime);
            }
        };
        $[10] = draggedTask;
        $[11] = moveTask;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    const handleDrop = t6;
    if (loading) {
        let t7;
        let t8;
        if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
            t7 = {
                opacity: 0
            };
            t8 = {
                opacity: 1
            };
            $[13] = t7;
            $[14] = t8;
        } else {
            t7 = $[13];
            t8 = $[14];
        }
        let t10;
        let t11;
        let t9;
        if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
            t9 = {
                scale: [
                    1,
                    1.1,
                    1
                ]
            };
            t10 = {
                duration: 1.5,
                repeat: Infinity
            };
            t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-2 h-2 bg-blue-600 rounded-full animate-pulse"
            }, void 0, false, {
                fileName: "[project]/src/components/Calendar.tsx",
                lineNumber: 135,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[15] = t10;
            $[16] = t11;
            $[17] = t9;
        } else {
            t10 = $[15];
            t11 = $[16];
            t9 = $[17];
        }
        let t12;
        if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
            t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-2 h-2 bg-blue-600 rounded-full animate-pulse",
                style: {
                    animationDelay: "0.2s"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/Calendar.tsx",
                lineNumber: 146,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[18] = t12;
        } else {
            t12 = $[18];
        }
        let t13;
        if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
            t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "flex items-center justify-center h-64",
                initial: t7,
                animate: t8,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "text-lg flex items-center gap-2",
                    animate: t9,
                    transition: t10,
                    children: [
                        t11,
                        t12,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-2 h-2 bg-blue-600 rounded-full animate-pulse",
                            style: {
                                animationDelay: "0.4s"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/Calendar.tsx",
                            lineNumber: 155,
                            columnNumber: 197
                        }, ("TURBOPACK compile-time value", void 0)),
                        "Loading..."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Calendar.tsx",
                    lineNumber: 155,
                    columnNumber: 101
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Calendar.tsx",
                lineNumber: 155,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[19] = t13;
        } else {
            t13 = $[19];
        }
        return t13;
    }
    let t7;
    let t8;
    let t9;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = {
            opacity: 0,
            y: 20
        };
        t8 = {
            opacity: 1,
            y: 0
        };
        t9 = {
            duration: 0.5
        };
        $[20] = t7;
        $[21] = t8;
        $[22] = t9;
    } else {
        t7 = $[20];
        t8 = $[21];
        t9 = $[22];
    }
    let t10;
    let t11;
    let t12;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = {
            opacity: 0
        };
        t11 = {
            opacity: 1
        };
        t12 = {
            delay: 0.1
        };
        $[23] = t10;
        $[24] = t11;
        $[25] = t12;
    } else {
        t10 = $[23];
        t11 = $[24];
        t12 = $[25];
    }
    let t13;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
            className: "text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent",
            whileHover: {
                scale: 1.05
            },
            children: "Task Scheduler"
        }, void 0, false, {
            fileName: "[project]/src/components/Calendar.tsx",
            lineNumber: 210,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = t13;
    } else {
        t13 = $[26];
    }
    let t14;
    let t15;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = {
            scale: 1.05
        };
        t15 = {
            scale: 0.95
        };
        $[27] = t14;
        $[28] = t15;
    } else {
        t14 = $[27];
        t15 = $[28];
    }
    let t16;
    if ($[29] !== prevWeek) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            onClick: prevWeek,
            className: "px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 border",
            whileHover: t14,
            whileTap: t15,
            children: "← Previous Week"
        }, void 0, false, {
            fileName: "[project]/src/components/Calendar.tsx",
            lineNumber: 234,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[29] = prevWeek;
        $[30] = t16;
    } else {
        t16 = $[30];
    }
    let t17;
    let t18;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = {
            scale: 1.05
        };
        t18 = {
            scale: 0.95
        };
        $[31] = t17;
        $[32] = t18;
    } else {
        t17 = $[31];
        t18 = $[32];
    }
    let t19;
    if ($[33] !== nextWeek) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            onClick: nextWeek,
            className: "px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 border",
            whileHover: t17,
            whileTap: t18,
            children: "Next Week →"
        }, void 0, false, {
            fileName: "[project]/src/components/Calendar.tsx",
            lineNumber: 257,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[33] = nextWeek;
        $[34] = t19;
    } else {
        t19 = $[34];
    }
    let t20;
    if ($[35] !== t16 || $[36] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-2",
            children: [
                t16,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Calendar.tsx",
            lineNumber: 265,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[35] = t16;
        $[36] = t19;
        $[37] = t20;
    } else {
        t20 = $[37];
    }
    let t21;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = ()=>setShowTaskForm(true);
        $[38] = t21;
    } else {
        t21 = $[38];
    }
    let t22;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            onClick: t21,
            className: "px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md hover:from-blue-700 hover:to-purple-700",
            whileHover: {
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)"
            },
            whileTap: {
                scale: 0.95
            },
            children: "+ Add Task"
        }, void 0, false, {
            fileName: "[project]/src/components/Calendar.tsx",
            lineNumber: 281,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[39] = t22;
    } else {
        t22 = $[39];
    }
    let t23;
    if ($[40] !== t20) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "flex justify-between items-center",
            initial: t10,
            animate: t11,
            transition: t12,
            children: [
                t13,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-4 items-center",
                    children: [
                        t20,
                        t22
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Calendar.tsx",
                    lineNumber: 293,
                    columnNumber: 119
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Calendar.tsx",
            lineNumber: 293,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[40] = t20;
        $[41] = t23;
    } else {
        t23 = $[41];
    }
    let t24;
    let t25;
    let t26;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = {
            opacity: 0
        };
        t25 = {
            opacity: 1
        };
        t26 = {
            delay: 0.2
        };
        $[42] = t24;
        $[43] = t25;
        $[44] = t26;
    } else {
        t24 = $[42];
        t25 = $[43];
        t26 = $[44];
    }
    let t27;
    if ($[45] !== currentDate) {
        t27 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(currentDate, "MMMM yyyy");
        $[45] = currentDate;
        $[46] = t27;
    } else {
        t27 = $[46];
    }
    let t28;
    if ($[47] !== currentDate) {
        t28 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(currentDate, "MMM d");
        $[47] = currentDate;
        $[48] = t28;
    } else {
        t28 = $[48];
    }
    let t29;
    if ($[49] !== t27 || $[50] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "text-lg font-semibold text-center text-gray-700",
            initial: t24,
            animate: t25,
            transition: t26,
            children: [
                t27,
                " - Week of ",
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Calendar.tsx",
            lineNumber: 338,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[49] = t27;
        $[50] = t28;
        $[51] = t29;
    } else {
        t29 = $[51];
    }
    let t30;
    if ($[52] !== handleAddTask || $[53] !== showTaskForm) {
        t30 = showTaskForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
            onClick: ()=>setShowTaskForm(false),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    scale: 0.9,
                    opacity: 0,
                    y: 50
                },
                animate: {
                    scale: 1,
                    opacity: 1,
                    y: 0
                },
                exit: {
                    scale: 0.9,
                    opacity: 0,
                    y: 50
                },
                transition: {
                    type: "spring",
                    damping: 25
                },
                onClick: _temp,
                className: "w-full max-w-md",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TaskForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onSubmit: handleAddTask,
                    onCancel: ()=>setShowTaskForm(false)
                }, void 0, false, {
                    fileName: "[project]/src/components/Calendar.tsx",
                    lineNumber: 368,
                    columnNumber: 54
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Calendar.tsx",
                lineNumber: 353,
                columnNumber: 138
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Calendar.tsx",
            lineNumber: 347,
            columnNumber: 27
        }, ("TURBOPACK compile-time value", void 0));
        $[52] = handleAddTask;
        $[53] = showTaskForm;
        $[54] = t30;
    } else {
        t30 = $[54];
    }
    let t31;
    if ($[55] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: t30
        }, void 0, false, {
            fileName: "[project]/src/components/Calendar.tsx",
            lineNumber: 377,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[55] = t30;
        $[56] = t31;
    } else {
        t31 = $[56];
    }
    let t32;
    let t33;
    let t34;
    if ($[57] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = {
            opacity: 0,
            y: 20
        };
        t33 = {
            opacity: 1,
            y: 0
        };
        t34 = {
            delay: 0.3
        };
        $[57] = t32;
        $[58] = t33;
        $[59] = t34;
    } else {
        t32 = $[57];
        t33 = $[58];
        t34 = $[59];
    }
    let t35;
    if ($[60] !== currentDate || $[61] !== handleDrop || $[62] !== tasks) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "bg-white rounded-lg shadow-lg border",
            initial: t32,
            animate: t33,
            transition: t34,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeekView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                tasks: tasks,
                currentDate: currentDate,
                onTaskDragStart: handleTaskDragStart,
                onTaskDragEnd: handleTaskDragEnd,
                onDrop: handleDrop
            }, void 0, false, {
                fileName: "[project]/src/components/Calendar.tsx",
                lineNumber: 408,
                columnNumber: 117
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Calendar.tsx",
            lineNumber: 408,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[60] = currentDate;
        $[61] = handleDrop;
        $[62] = tasks;
        $[63] = t35;
    } else {
        t35 = $[63];
    }
    let t36;
    if ($[64] === Symbol.for("react.memo_cache_sentinel")) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "flex gap-4 text-sm justify-center",
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            transition: {
                delay: 0.4
            },
            children: [
                {
                    status: "pending",
                    label: "Pending",
                    color: "bg-blue-200 border-blue-500"
                },
                {
                    status: "completed",
                    label: "Completed",
                    color: "bg-green-200 border-green-500"
                },
                {
                    status: "overdue",
                    label: "Overdue",
                    color: "bg-red-200 border-red-500"
                }
            ].map(_temp2)
        }, void 0, false, {
            fileName: "[project]/src/components/Calendar.tsx",
            lineNumber: 418,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[64] = t36;
    } else {
        t36 = $[64];
    }
    let t37;
    if ($[65] !== t23 || $[66] !== t29 || $[67] !== t31 || $[68] !== t35) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "p-4 space-y-6",
            initial: t7,
            animate: t8,
            transition: t9,
            children: [
                t23,
                t29,
                t31,
                t35,
                t36
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Calendar.tsx",
            lineNumber: 443,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[65] = t23;
        $[66] = t29;
        $[67] = t31;
        $[68] = t35;
        $[69] = t37;
    } else {
        t37 = $[69];
    }
    return t37;
};
_s(Calendar, "pCv1NbIF7KXt0LZYwGOumlmYals=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTasks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTasks"]
    ];
});
_c = Calendar;
const __TURBOPACK__default__export__ = Calendar;
function _temp(e) {
    return e.stopPropagation();
}
function _temp2(item, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "flex items-center gap-2",
        initial: {
            opacity: 0,
            x: -20
        },
        animate: {
            opacity: 1,
            x: 0
        },
        transition: {
            delay: 0.4 + index * 0.1
        },
        whileHover: {
            scale: 1.05
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: `w-4 h-4 rounded border-l-4 ${item.color}`,
                whileHover: {
                    scale: 1.2
                }
            }, void 0, false, {
                fileName: "[project]/src/components/Calendar.tsx",
                lineNumber: 469,
                columnNumber: 6
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: item.label
            }, void 0, false, {
                fileName: "[project]/src/components/Calendar.tsx",
                lineNumber: 471,
                columnNumber: 10
            }, this)
        ]
    }, item.status, true, {
        fileName: "[project]/src/components/Calendar.tsx",
        lineNumber: 459,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Calendar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Calendar.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/Calendar.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_04b90714._.js.map