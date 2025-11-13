(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// import { addDays, startOfWeek, format, isSameDay } from 'date-fns';
// export const getWeekDays = (date: Date = new Date()): Date[] => {
//   const start = startOfWeek(date, { weekStartsOn: 1 }); // Monday
//   return Array.from({ length: 7 }, (_, i) => addDays(start, i));
// };
// export const timeSlots = Array.from({ length: 14 }, (_, i) => {
//   const hour = 8 + i; // 8 AM to 9 PM
//   return `${hour.toString().padStart(2, '0')}:00`;
// });
// export const getStatusColor = (status: 'pending' | 'completed' | 'overdue') => {
//   switch (status) {
//     case 'completed': return 'bg-green-200 border-green-500';
//     case 'overdue': return 'bg-red-200 border-red-500';
//     default: return 'bg-blue-200 border-blue-500';
//   }
// };
// export const formatTime = (date: Date): string => {
//   return format(date, 'HH:mm');
// };
// export const formatDate = (date: Date): string => {
//   return format(date, 'yyyy-MM-dd');
// };
__turbopack_context__.s([
    "formatDate",
    ()=>formatDate,
    "formatTime",
    ()=>formatTime,
    "getStatusColor",
    ()=>getStatusColor,
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Task.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// 'use client';
// import { motion } from 'framer-motion';
// import { Task as TaskType } from '@/lib/types';
// import { getStatusColor, formatTime } from '@/lib/utils';
// import { useState } from 'react';
// interface TaskProps {
//   task: TaskType;
//   onDragStart: (task: TaskType) => void;
//   onDragEnd: () => void;
// }
// export const Task: React.FC<TaskProps> = ({ task, onDragStart, onDragEnd }) => {
//   const [showTooltip, setShowTooltip] = useState(false);
//   const handleDragStart = (e: React.DragEvent) => {
//     e.dataTransfer.setData('text/plain', task.id);
//     onDragStart(task);
//   };
//   const handleDragEnd = () => {
//     onDragEnd();
//   };
//   return (
//     <motion.div
//       draggable
//       onDragStart={handleDragStart}
//       onDragEnd={handleDragEnd}
//       className={`
//         p-2 rounded-lg border-l-4 cursor-move text-sm
//         ${getStatusColor(task.status)}
//         hover:shadow-md transition-shadow
//       `}
//       onMouseEnter={() => setShowTooltip(true)}
//       onMouseLeave={() => setShowTooltip(false)}
//       whileHover={{ scale: 1.02 }}
//       whileDrag={{ scale: 1.05, opacity: 0.8 }}
//     >
//       <div className="font-medium truncate">{task.title}</div>
//       <div className="text-xs text-gray-600">
//         {formatTime(task.startTime)} - {formatTime(task.endTime)}
//       </div>
//       {showTooltip && (
//         <div className="absolute z-50 p-3 bg-white border border-gray-200 rounded-lg shadow-lg max-w-xs">
//           <h4 className="font-semibold text-sm mb-1">{task.title}</h4>
//           <p className="text-xs text-gray-600 mb-2">{task.description}</p>
//           <div className="text-xs">
//             <div>Time: {formatTime(task.startTime)} - {formatTime(task.endTime)}</div>
//             <div className="capitalize">Status: {task.status}</div>
//           </div>
//         </div>
//       )}
//     </motion.div>
//   );
// };
__turbopack_context__.s([
    "Task",
    ()=>Task
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(35);
    if ($[0] !== "246fb07a1821cc50e2ce8098c568745ac77c77659581e3378cb45cf60e718293") {
        for(let $i = 0; $i < 35; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "246fb07a1821cc50e2ce8098c568745ac77c77659581e3378cb45cf60e718293";
    }
    const { task, onDragStart, onDragEnd } = t0;
    const [showTooltip, setShowTooltip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[1] !== onDragStart || $[2] !== task) {
        t1 = (e)=>{
            e.dataTransfer.setData("text/plain", task.id);
            onDragStart(task);
        };
        $[1] = onDragStart;
        $[2] = task;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const handleDragStart = t1;
    let t2;
    if ($[4] !== onDragEnd) {
        t2 = ()=>{
            onDragEnd();
        };
        $[4] = onDragEnd;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    const handleDragEnd = t2;
    let t3;
    if ($[6] !== task.status) {
        t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStatusColor"])(task.status);
        $[6] = task.status;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    const t4 = `
        p-2 rounded-lg border-l-4 cursor-move text-sm
        ${t3}
        hover:shadow-md transition-shadow relative
      `;
    let t5;
    let t6;
    let t7;
    let t8;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ()=>setShowTooltip(true);
        t6 = ()=>setShowTooltip(false);
        t7 = {
            scale: 1.02
        };
        t8 = {
            scale: 1.05,
            opacity: 0.8
        };
        $[8] = t5;
        $[9] = t6;
        $[10] = t7;
        $[11] = t8;
    } else {
        t5 = $[8];
        t6 = $[9];
        t7 = $[10];
        t8 = $[11];
    }
    let t9;
    if ($[12] !== task.title) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "font-medium truncate",
            children: task.title
        }, void 0, false, {
            fileName: "[project]/src/components/Task.tsx",
            lineNumber: 149,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = task.title;
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    if ($[14] !== task.startTime) {
        t10 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTime"])(task.startTime);
        $[14] = task.startTime;
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    let t11;
    if ($[16] !== task.endTime) {
        t11 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTime"])(task.endTime);
        $[16] = task.endTime;
        $[17] = t11;
    } else {
        t11 = $[17];
    }
    let t12;
    if ($[18] !== t10 || $[19] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-xs text-gray-600",
            children: [
                t10,
                " - ",
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Task.tsx",
            lineNumber: 173,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = t10;
        $[19] = t11;
        $[20] = t12;
    } else {
        t12 = $[20];
    }
    let t13;
    if ($[21] !== showTooltip || $[22] !== task.description || $[23] !== task.endTime || $[24] !== task.startTime || $[25] !== task.status || $[26] !== task.title) {
        t13 = showTooltip && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute z-50 p-3 bg-white border border-gray-200 rounded-lg shadow-lg max-w-xs",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                    className: "font-semibold text-sm mb-1",
                    children: task.title
                }, void 0, false, {
                    fileName: "[project]/src/components/Task.tsx",
                    lineNumber: 182,
                    columnNumber: 123
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-gray-600 mb-2",
                    children: task.description
                }, void 0, false, {
                    fileName: "[project]/src/components/Task.tsx",
                    lineNumber: 182,
                    columnNumber: 183
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xs",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                "Time: ",
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTime"])(task.startTime),
                                " - ",
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTime"])(task.endTime)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Task.tsx",
                            lineNumber: 182,
                            columnNumber: 272
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "capitalize",
                            children: [
                                "Status: ",
                                task.status
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Task.tsx",
                            lineNumber: 182,
                            columnNumber: 346
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Task.tsx",
                    lineNumber: 182,
                    columnNumber: 247
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Task.tsx",
            lineNumber: 182,
            columnNumber: 26
        }, ("TURBOPACK compile-time value", void 0));
        $[21] = showTooltip;
        $[22] = task.description;
        $[23] = task.endTime;
        $[24] = task.startTime;
        $[25] = task.status;
        $[26] = task.title;
        $[27] = t13;
    } else {
        t13 = $[27];
    }
    let t14;
    if ($[28] !== handleDragEnd || $[29] !== handleDragStart || $[30] !== t12 || $[31] !== t13 || $[32] !== t4 || $[33] !== t9) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            draggable: true,
            onDragStart: handleDragStart,
            onDragEnd: handleDragEnd,
            className: t4,
            onMouseEnter: t5,
            onMouseLeave: t6,
            whileHover: t7,
            whileDrag: t8,
            children: [
                t9,
                t12,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Task.tsx",
            lineNumber: 195,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = handleDragEnd;
        $[29] = handleDragStart;
        $[30] = t12;
        $[31] = t13;
        $[32] = t4;
        $[33] = t9;
        $[34] = t14;
    } else {
        t14 = $[34];
    }
    return t14;
};
_s(Task, "MlKqB7CDspaiqeinDL2ipSY+OVU=");
_c = Task;
var _c;
__turbopack_context__.k.register(_c, "Task");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/WeekView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// 'use client';
// import { Task } from '@/lib/types';
// import { getWeekDays, timeSlots, isSameDay, format } from 'date-fns';
// import { Task as TaskComponent } from './Task';
// interface WeekViewProps {
//   tasks: Task[];
//   currentDate: Date;
//   onTaskDragStart: (task: Task) => void;
//   onTaskDragEnd: () => void;
//   onDrop: (date: Date, timeSlot: string) => void;
// }
// export const WeekView: React.FC<WeekViewProps> = ({
//   tasks,
//   currentDate,
//   onTaskDragStart,
//   onTaskDragEnd,
//   onDrop,
// }) => {
//   const weekDays = getWeekDays(currentDate);
//   const handleDragOver = (e: React.DragEvent) => {
//     e.preventDefault();
//   };
//   const handleDrop = (e: React.DragEvent, date: Date, timeSlot: string) => {
//     e.preventDefault();
//     const [hours, minutes] = timeSlot.split(':').map(Number);
//     const dropDate = new Date(date);
//     dropDate.setHours(hours, minutes, 0, 0);
//     onDrop(dropDate, timeSlot);
//   };
//   const getTasksForTimeSlot = (date: Date, timeSlot: string) => {
//     const [hours] = timeSlot.split(':').map(Number);
//     return tasks.filter(task => {
//       const taskStart = task.startTime;
//       return isSameDay(taskStart, date) && taskStart.getHours() === hours;
//     });
//   };
//   return (
//     <div className="overflow-x-auto">
//       <div className="min-w-[800px]">
//         {/* Header */}
//         <div className="grid grid-cols-[100px_repeat(7,1fr)] gap-1 mb-4">
//           <div className="p-2"></div>
//           {weekDays.map((day, index) => (
//             <div key={index} className="p-2 text-center border-b">
//               <div className="font-semibold">{format(day, 'EEE')}</div>
//               <div className="text-sm text-gray-600">{format(day, 'MMM d')}</div>
//             </div>
//           ))}
//         </div>
//         {/* Time slots */}
//         <div className="space-y-1">
//           {timeSlots.map((timeSlot, timeIndex) => (
//             <div key={timeSlot} className="grid grid-cols-[100px_repeat(7,1fr)] gap-1">
//               <div className="p-2 text-sm text-gray-500 text-right pr-4">
//                 {timeSlot}
//               </div>
//               {weekDays.map((day, dayIndex) => {
//                 const slotTasks = getTasksForTimeSlot(day, timeSlot);
//                 return (
//                   <div
//                     key={dayIndex}
//                     className="min-h-[80px] border border-gray-200 p-1"
//                     onDragOver={handleDragOver}
//                     onDrop={(e) => handleDrop(e, day, timeSlot)}
//                   >
//                     {slotTasks.map((task) => (
//                       <TaskComponent
//                         key={task.id}
//                         task={task}
//                         onDragStart={onTaskDragStart}
//                         onDragEnd={onTaskDragEnd}
//                       />
//                     ))}
//                   </div>
//                 );
//               })}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
__turbopack_context__.s([
    "WeekView",
    ()=>WeekView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isSameDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/isSameDay.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Task$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Task.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
const WeekView = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(26);
    if ($[0] !== "c805b7f039b5eed4f45b101769a478e24aba2c20183b1306b16ffd6ec07be1aa") {
        for(let $i = 0; $i < 26; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c805b7f039b5eed4f45b101769a478e24aba2c20183b1306b16ffd6ec07be1aa";
    }
    const { tasks, currentDate, onTaskDragStart, onTaskDragEnd, onDrop } = t0;
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    if ($[1] !== currentDate || $[2] !== onDrop || $[3] !== onTaskDragEnd || $[4] !== onTaskDragStart || $[5] !== tasks) {
        const weekDays = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWeekDays"])(currentDate);
        const handleDragOver = _temp;
        let t6;
        if ($[11] !== onDrop) {
            t6 = (e_0, date, timeSlot)=>{
                e_0.preventDefault();
                e_0.dataTransfer.getData("text/plain");
                const [hours, minutes] = timeSlot.split(":").map(Number);
                const dropDate = new Date(date);
                dropDate.setHours(hours, minutes, 0, 0);
                onDrop(dropDate, timeSlot);
            };
            $[11] = onDrop;
            $[12] = t6;
        } else {
            t6 = $[12];
        }
        const handleDrop = t6;
        let t7;
        if ($[13] !== tasks) {
            t7 = (date_0, timeSlot_0)=>{
                const [hours_0] = timeSlot_0.split(":").map(Number);
                return tasks.filter((task)=>{
                    const taskStart = task.startTime;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isSameDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSameDay"])(taskStart, date_0) && taskStart.getHours() === hours_0;
                });
            };
            $[13] = tasks;
            $[14] = t7;
        } else {
            t7 = $[14];
        }
        const getTasksForTimeSlot = t7;
        t5 = "overflow-x-auto";
        t3 = "min-w-[800px]";
        let t8;
        if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-2"
            }, void 0, false, {
                fileName: "[project]/src/components/WeekView.tsx",
                lineNumber: 166,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[15] = t8;
        } else {
            t8 = $[15];
        }
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-[100px_repeat(7,1fr)] gap-1 mb-4",
            children: [
                t8,
                weekDays.map(_temp2)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/WeekView.tsx",
            lineNumber: 171,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t1 = "space-y-1";
        t2 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeSlots"].map((timeSlot_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-[100px_repeat(7,1fr)] gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-2 text-sm text-gray-500 text-right pr-4",
                        children: timeSlot_1
                    }, void 0, false, {
                        fileName: "[project]/src/components/WeekView.tsx",
                        lineNumber: 173,
                        columnNumber: 115
                    }, ("TURBOPACK compile-time value", void 0)),
                    weekDays.map((day_0, dayIndex)=>{
                        const slotTasks = getTasksForTimeSlot(day_0, timeSlot_1);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "min-h-[80px] border border-gray-200 p-1",
                            onDragOver: handleDragOver,
                            onDrop: (e_1)=>handleDrop(e_1, day_0, timeSlot_1),
                            children: slotTasks.map((task_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Task$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Task"], {
                                    task: task_0,
                                    onDragStart: onTaskDragStart,
                                    onDragEnd: onTaskDragEnd
                                }, task_0.id, false, {
                                    fileName: "[project]/src/components/WeekView.tsx",
                                    lineNumber: 175,
                                    columnNumber: 192
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, dayIndex, false, {
                            fileName: "[project]/src/components/WeekView.tsx",
                            lineNumber: 175,
                            columnNumber: 16
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                ]
            }, timeSlot_1, true, {
                fileName: "[project]/src/components/WeekView.tsx",
                lineNumber: 173,
                columnNumber: 38
            }, ("TURBOPACK compile-time value", void 0)));
        $[1] = currentDate;
        $[2] = onDrop;
        $[3] = onTaskDragEnd;
        $[4] = onTaskDragStart;
        $[5] = tasks;
        $[6] = t1;
        $[7] = t2;
        $[8] = t3;
        $[9] = t4;
        $[10] = t5;
    } else {
        t1 = $[6];
        t2 = $[7];
        t3 = $[8];
        t4 = $[9];
        t5 = $[10];
    }
    let t6;
    if ($[16] !== t1 || $[17] !== t2) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/components/WeekView.tsx",
            lineNumber: 196,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t1;
        $[17] = t2;
        $[18] = t6;
    } else {
        t6 = $[18];
    }
    let t7;
    if ($[19] !== t3 || $[20] !== t4 || $[21] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: [
                t4,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/WeekView.tsx",
            lineNumber: 205,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t3;
        $[20] = t4;
        $[21] = t6;
        $[22] = t7;
    } else {
        t7 = $[22];
    }
    let t8;
    if ($[23] !== t5 || $[24] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/components/WeekView.tsx",
            lineNumber: 215,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[23] = t5;
        $[24] = t7;
        $[25] = t8;
    } else {
        t8 = $[25];
    }
    return t8;
};
_c = WeekView;
function _temp(e) {
    e.preventDefault();
}
function _temp2(day, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-2 text-center border-b",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "font-semibold",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(day, "EEE")
            }, void 0, false, {
                fileName: "[project]/src/components/WeekView.tsx",
                lineNumber: 228,
                columnNumber: 64
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm text-gray-600",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(day, "MMM d")
            }, void 0, false, {
                fileName: "[project]/src/components/WeekView.tsx",
                lineNumber: 228,
                columnNumber: 121
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/src/components/WeekView.tsx",
        lineNumber: 228,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "WeekView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/TaskForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// 'use client';
// import { useState } from 'react';
// import { Task } from '@/lib/types';
// import { formatDate, formatTime } from '@/lib/utils';
// interface TaskFormProps {
//   onSubmit: (task: Omit<Task, 'id'>) => void;
//   onCancel: () => void;
// }
// export const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, onCancel }) => {
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     date: formatDate(new Date()),
//     startTime: '09:00',
//     endTime: '10:00',
//     status: 'pending' as 'pending' | 'completed' | 'overdue',
//   });
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const startTime = new Date(`${formData.date}T${formData.startTime}`);
//     const endTime = new Date(`${formData.date}T${formData.endTime}`);
//     onSubmit({
//       title: formData.title,
//       description: formData.description,
//       startTime,
//       endTime,
//       status: formData.status,
//       color: '#3b82f6', // Default blue color
//     });
//   };
//   return (
//     <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded-lg shadow-lg">
//       <h3 className="text-lg font-semibold">Add New Task</h3>
//       <div>
//         <label className="block text-sm font-medium text-gray-700">Title</label>
//         <input
//           type="text"
//           required
//           value={formData.title}
//           onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//         />
//       </div>
//       <div>
//         <label className="block text-sm font-medium text-gray-700">Description</label>
//         <textarea
//           value={formData.description}
//           onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//           rows={3}
//         />
//       </div>
//       <div>
//         <label className="block text-sm font-medium text-gray-700">Date</label>
//         <input
//           type="date"
//           required
//           value={formData.date}
//           onChange={(e) => setFormData({ ...formData, date: e.target.value })}
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//         />
//       </div>
//       <div className="grid grid-cols-2 gap-4">
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Start Time</label>
//           <input
//             type="time"
//             required
//             value={formData.startTime}
//             onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">End Time</label>
//           <input
//             type="time"
//             required
//             value={formData.endTime}
//             onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//           />
//         </div>
//       </div>
//       <div>
//         <label className="block text-sm font-medium text-gray-700">Status</label>
//         <select
//           value={formData.status}
//           onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//         >
//           <option value="pending">Pending</option>
//           <option value="completed">Completed</option>
//           <option value="overdue">Overdue</option>
//         </select>
//       </div>
//       <div className="flex gap-2 justify-end">
//         <button
//           type="button"
//           onClick={onCancel}
//           className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
//         >
//           Cancel
//         </button>
//         <button
//           type="submit"
//           className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
//         >
//           Add Task
//         </button>
//       </div>
//     </form>
//   );
// };
__turbopack_context__.s([
    "TaskForm",
    ()=>TaskForm
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(67);
    if ($[0] !== "515211244fa1cc6d22f2bc1f5233e70fe09794d83679ba0aed24eaa7563f39d5") {
        for(let $i = 0; $i < 67; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "515211244fa1cc6d22f2bc1f5233e70fe09794d83679ba0aed24eaa7563f39d5";
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
    let t3;
    if ($[3] !== formData.date || $[4] !== formData.description || $[5] !== formData.endTime || $[6] !== formData.startTime || $[7] !== formData.status || $[8] !== formData.title || $[9] !== onSubmit) {
        t3 = (e)=>{
            e.preventDefault();
            const startTime = new Date(`${formData.date}T${formData.startTime}`);
            const endTime = new Date(`${formData.date}T${formData.endTime}`);
            if (endTime <= startTime) {
                alert("End time must be after start time");
                return;
            }
            onSubmit({
                title: formData.title,
                description: formData.description,
                startTime,
                endTime,
                status: formData.status,
                color: "#3b82f6"
            });
        };
        $[3] = formData.date;
        $[4] = formData.description;
        $[5] = formData.endTime;
        $[6] = formData.startTime;
        $[7] = formData.status;
        $[8] = formData.title;
        $[9] = onSubmit;
        $[10] = t3;
    } else {
        t3 = $[10];
    }
    const handleSubmit = t3;
    let t4;
    let t5;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg font-semibold",
            children: "Add New Task"
        }, void 0, false, {
            fileName: "[project]/src/components/TaskForm.tsx",
            lineNumber: 208,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-medium text-gray-700",
            children: "Title"
        }, void 0, false, {
            fileName: "[project]/src/components/TaskForm.tsx",
            lineNumber: 209,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t4;
        $[12] = t5;
    } else {
        t4 = $[11];
        t5 = $[12];
    }
    let t6;
    if ($[13] !== formData) {
        t6 = (e_0)=>setFormData({
                ...formData,
                title: e_0.target.value
            });
        $[13] = formData;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    let t7;
    if ($[15] !== formData.title || $[16] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    required: true,
                    value: formData.title,
                    onChange: t6,
                    className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                }, void 0, false, {
                    fileName: "[project]/src/components/TaskForm.tsx",
                    lineNumber: 229,
                    columnNumber: 19
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TaskForm.tsx",
            lineNumber: 229,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = formData.title;
        $[16] = t6;
        $[17] = t7;
    } else {
        t7 = $[17];
    }
    let t8;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-medium text-gray-700",
            children: "Description"
        }, void 0, false, {
            fileName: "[project]/src/components/TaskForm.tsx",
            lineNumber: 238,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    let t9;
    if ($[19] !== formData) {
        t9 = (e_1)=>setFormData({
                ...formData,
                description: e_1.target.value
            });
        $[19] = formData;
        $[20] = t9;
    } else {
        t9 = $[20];
    }
    let t10;
    if ($[21] !== formData.description || $[22] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    value: formData.description,
                    onChange: t9,
                    className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2",
                    rows: 3
                }, void 0, false, {
                    fileName: "[project]/src/components/TaskForm.tsx",
                    lineNumber: 256,
                    columnNumber: 20
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TaskForm.tsx",
            lineNumber: 256,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[21] = formData.description;
        $[22] = t9;
        $[23] = t10;
    } else {
        t10 = $[23];
    }
    let t11;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-medium text-gray-700",
            children: "Date"
        }, void 0, false, {
            fileName: "[project]/src/components/TaskForm.tsx",
            lineNumber: 265,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = t11;
    } else {
        t11 = $[24];
    }
    let t12;
    if ($[25] !== formData) {
        t12 = (e_2)=>setFormData({
                ...formData,
                date: e_2.target.value
            });
        $[25] = formData;
        $[26] = t12;
    } else {
        t12 = $[26];
    }
    let t13;
    if ($[27] !== formData.date || $[28] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "date",
                    required: true,
                    value: formData.date,
                    onChange: t12,
                    className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                }, void 0, false, {
                    fileName: "[project]/src/components/TaskForm.tsx",
                    lineNumber: 283,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TaskForm.tsx",
            lineNumber: 283,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = formData.date;
        $[28] = t12;
        $[29] = t13;
    } else {
        t13 = $[29];
    }
    let t14;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-medium text-gray-700",
            children: "Start Time"
        }, void 0, false, {
            fileName: "[project]/src/components/TaskForm.tsx",
            lineNumber: 292,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[30] = t14;
    } else {
        t14 = $[30];
    }
    let t15;
    if ($[31] !== formData) {
        t15 = (e_3)=>setFormData({
                ...formData,
                startTime: e_3.target.value
            });
        $[31] = formData;
        $[32] = t15;
    } else {
        t15 = $[32];
    }
    let t16;
    if ($[33] !== formData.startTime || $[34] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "time",
                    required: true,
                    value: formData.startTime,
                    onChange: t15,
                    className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                }, void 0, false, {
                    fileName: "[project]/src/components/TaskForm.tsx",
                    lineNumber: 310,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TaskForm.tsx",
            lineNumber: 310,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[33] = formData.startTime;
        $[34] = t15;
        $[35] = t16;
    } else {
        t16 = $[35];
    }
    let t17;
    if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-medium text-gray-700",
            children: "End Time"
        }, void 0, false, {
            fileName: "[project]/src/components/TaskForm.tsx",
            lineNumber: 319,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[36] = t17;
    } else {
        t17 = $[36];
    }
    let t18;
    if ($[37] !== formData) {
        t18 = (e_4)=>setFormData({
                ...formData,
                endTime: e_4.target.value
            });
        $[37] = formData;
        $[38] = t18;
    } else {
        t18 = $[38];
    }
    let t19;
    if ($[39] !== formData.endTime || $[40] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t17,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "time",
                    required: true,
                    value: formData.endTime,
                    onChange: t18,
                    className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                }, void 0, false, {
                    fileName: "[project]/src/components/TaskForm.tsx",
                    lineNumber: 337,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TaskForm.tsx",
            lineNumber: 337,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[39] = formData.endTime;
        $[40] = t18;
        $[41] = t19;
    } else {
        t19 = $[41];
    }
    let t20;
    if ($[42] !== t16 || $[43] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 gap-4",
            children: [
                t16,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TaskForm.tsx",
            lineNumber: 346,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[42] = t16;
        $[43] = t19;
        $[44] = t20;
    } else {
        t20 = $[44];
    }
    let t21;
    if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-medium text-gray-700",
            children: "Status"
        }, void 0, false, {
            fileName: "[project]/src/components/TaskForm.tsx",
            lineNumber: 355,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[45] = t21;
    } else {
        t21 = $[45];
    }
    let t22;
    if ($[46] !== formData) {
        t22 = (e_5)=>setFormData({
                ...formData,
                status: e_5.target.value
            });
        $[46] = formData;
        $[47] = t22;
    } else {
        t22 = $[47];
    }
    let t23;
    let t24;
    let t25;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "pending",
            children: "Pending"
        }, void 0, false, {
            fileName: "[project]/src/components/TaskForm.tsx",
            lineNumber: 375,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "completed",
            children: "Completed"
        }, void 0, false, {
            fileName: "[project]/src/components/TaskForm.tsx",
            lineNumber: 376,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "overdue",
            children: "Overdue"
        }, void 0, false, {
            fileName: "[project]/src/components/TaskForm.tsx",
            lineNumber: 377,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[48] = t23;
        $[49] = t24;
        $[50] = t25;
    } else {
        t23 = $[48];
        t24 = $[49];
        t25 = $[50];
    }
    let t26;
    if ($[51] !== formData.status || $[52] !== t22) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t21,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    value: formData.status,
                    onChange: t22,
                    className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2",
                    children: [
                        t23,
                        t24,
                        t25
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/TaskForm.tsx",
                    lineNumber: 388,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TaskForm.tsx",
            lineNumber: 388,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[51] = formData.status;
        $[52] = t22;
        $[53] = t26;
    } else {
        t26 = $[53];
    }
    let t27;
    if ($[54] !== onCancel) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: onCancel,
            className: "px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 border",
            children: "Cancel"
        }, void 0, false, {
            fileName: "[project]/src/components/TaskForm.tsx",
            lineNumber: 397,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[54] = onCancel;
        $[55] = t27;
    } else {
        t27 = $[55];
    }
    let t28;
    if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            className: "px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700",
            children: "Add Task"
        }, void 0, false, {
            fileName: "[project]/src/components/TaskForm.tsx",
            lineNumber: 405,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[56] = t28;
    } else {
        t28 = $[56];
    }
    let t29;
    if ($[57] !== t27) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-2 justify-end",
            children: [
                t27,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TaskForm.tsx",
            lineNumber: 412,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[57] = t27;
        $[58] = t29;
    } else {
        t29 = $[58];
    }
    let t30;
    if ($[59] !== handleSubmit || $[60] !== t10 || $[61] !== t13 || $[62] !== t20 || $[63] !== t26 || $[64] !== t29 || $[65] !== t7) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "space-y-4 p-4 bg-white rounded-lg shadow-lg",
            children: [
                t4,
                t7,
                t10,
                t13,
                t20,
                t26,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TaskForm.tsx",
            lineNumber: 420,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[59] = handleSubmit;
        $[60] = t10;
        $[61] = t13;
        $[62] = t20;
        $[63] = t26;
        $[64] = t29;
        $[65] = t7;
        $[66] = t30;
    } else {
        t30 = $[66];
    }
    return t30;
};
_s(TaskForm, "0pJbjhuBhm0O2L/aEof1ZFLr90Q=");
_c = TaskForm;
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

// import { useState, useEffect } from 'react';
// import { Task } from '@/lib/types';
// import { taskDB } from '@/lib/database';
// import { v4 as uuidv4 } from 'uuid';
// export const useTasks = () => {
//   const [tasks, setTasks] = useState<Task[]>([]);
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     loadTasks();
//   }, []);
//   const loadTasks = async () => {
//     try {
//       const loadedTasks = await taskDB.getAllTasks();
//       setTasks(loadedTasks);
//     } catch (error) {
//       console.error('Failed to load tasks:', error);
//     } finally {
//       setLoading(false);
//     }
//   };
//   const addTask = async (taskData: Omit<Task, 'id'>) => {
//     const newTask: Task = {
//       ...taskData,
//       id: uuidv4(),
//     };
//     try {
//       await taskDB.saveTask(newTask);
//       setTasks(prev => [...prev, newTask]);
//       return newTask;
//     } catch (error) {
//       console.error('Failed to save task:', error);
//       throw error;
//     }
//   };
//   const updateTask = async (updatedTask: Task) => {
//     try {
//       await taskDB.saveTask(updatedTask);
//       setTasks(prev => prev.map(task => 
//         task.id === updatedTask.id ? updatedTask : task
//       ));
//     } catch (error) {
//       console.error('Failed to update task:', error);
//       throw error;
//     }
//   };
//   const deleteTask = async (id: string) => {
//     try {
//       await taskDB.deleteTask(id);
//       setTasks(prev => prev.filter(task => task.id !== id));
//     } catch (error) {
//       console.error('Failed to delete task:', error);
//       throw error;
//     }
//   };
//   const moveTask = async (taskId: string, newStartTime: Date, newEndTime: Date) => {
//     const task = tasks.find(t => t.id === taskId);
//     if (!task) return;
//     const duration = task.endTime.getTime() - task.startTime.getTime();
//     const updatedTask: Task = {
//       ...task,
//       startTime: newStartTime,
//       endTime: new Date(newStartTime.getTime() + duration),
//     };
//     await updateTask(updatedTask);
//   };
//   return {
//     tasks,
//     loading,
//     addTask,
//     updateTask,
//     deleteTask,
//     moveTask,
//   };
// };
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

// 'use client';
// import { useState } from 'react';
// import { addWeeks, subWeeks } from 'date-fns';
// import { WeekView } from './WeekView';
// import { TaskForm } from './TaskForm';
// import { useTasks } from '@/hooks/useTasks';
// import { Task } from '@/lib/types';
// import { motion, AnimatePresence } from 'framer-motion';
// export const Calendar: React.FC = () => {
//   const [currentDate, setCurrentDate] = useState(new Date());
//   const [showTaskForm, setShowTaskForm] = useState(false);
//   const [draggedTask, setDraggedTask] = useState<Task | null>(null);
//   const { tasks, addTask, moveTask, loading } = useTasks();
//   const nextWeek = () => setCurrentDate(addWeeks(currentDate, 1));
//   const prevWeek = () => setCurrentDate(subWeeks(currentDate, 1));
//   const handleAddTask = async (taskData: Omit<Task, 'id'>) => {
//     await addTask(taskData);
//     setShowTaskForm(false);
//   };
//   const handleTaskDragStart = (task: Task) => {
//     setDraggedTask(task);
//   };
//   const handleTaskDragEnd = () => {
//     setDraggedTask(null);
//   };
//   const handleDrop = async (date: Date) => {
//     if (draggedTask) {
//       await moveTask(draggedTask.id, date, new Date(date.getTime() + 60 * 60 * 1000));
//     }
//   };
//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-64">
//         <div className="text-lg">Loading...</div>
//       </div>
//     );
//   }
//   return (
//     <div className="p-4 space-y-6">
//       {/* Header */}
//       <div className="flex justify-between items-center">
//         <h1 className="text-2xl font-bold">Task Scheduler</h1>
//         <div className="flex gap-4 items-center">
//           <div className="flex gap-2">
//             <button
//               onClick={prevWeek}
//               className="px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200"
//             >
//               Previous Week
//             </button>
//             <button
//               onClick={nextWeek}
//               className="px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200"
//             >
//               Next Week
//             </button>
//           </div>
//           <button
//             onClick={() => setShowTaskForm(true)}
//             className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//           >
//             Add Task
//           </button>
//         </div>
//       </div>
//       {/* Task Form Modal */}
//       <AnimatePresence>
//         {showTaskForm && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//             onClick={() => setShowTaskForm(false)}
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               <TaskForm
//                 onSubmit={handleAddTask}
//                 onCancel={() => setShowTaskForm(false)}
//               />
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//       {/* Calendar Grid */}
//       <div className="bg-white rounded-lg shadow">
//         <WeekView
//           tasks={tasks}
//           currentDate={currentDate}
//           onTaskDragStart={handleTaskDragStart}
//           onTaskDragEnd={handleTaskDragEnd}
//           onDrop={handleDrop}
//         />
//       </div>
//       {/* Legend */}
//       <div className="flex gap-4 text-sm">
//         <div className="flex items-center gap-2">
//           <div className="w-4 h-4 bg-blue-200 border-l-4 border-blue-500"></div>
//           <span>Pending</span>
//         </div>
//         <div className="flex items-center gap-2">
//           <div className="w-4 h-4 bg-green-200 border-l-4 border-green-500"></div>
//           <span>Completed</span>
//         </div>
//         <div className="flex items-center gap-2">
//           <div className="w-4 h-4 bg-red-200 border-l-4 border-red-500"></div>
//           <span>Overdue</span>
//         </div>
//       </div>
//     </div>
//   );
// };
__turbopack_context__.s([
    "Calendar",
    ()=>Calendar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addWeeks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/addWeeks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subWeeks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/subWeeks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeekView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/WeekView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TaskForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TaskForm.tsx [app-client] (ecmascript)");
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(49);
    if ($[0] !== "6ebf5ac449c37af353a8f1f7c50c25107fb75780bd05d55132afc76e91e81d14") {
        for(let $i = 0; $i < 49; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6ebf5ac449c37af353a8f1f7c50c25107fb75780bd05d55132afc76e91e81d14";
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
        t1 = ()=>setCurrentDate((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addWeeks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addWeeks"])(currentDate, 1));
        $[2] = currentDate;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const nextWeek = t1;
    let t2;
    if ($[4] !== currentDate) {
        t2 = ()=>setCurrentDate((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subWeeks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subWeeks"])(currentDate, 1));
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
        if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center h-64",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-lg",
                    children: "Loading..."
                }, void 0, false, {
                    fileName: "[project]/src/components/Calendar.tsx",
                    lineNumber: 238,
                    columnNumber: 67
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Calendar.tsx",
                lineNumber: 238,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[13] = t7;
        } else {
            t7 = $[13];
        }
        return t7;
    }
    let t7;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-2xl font-bold",
            children: "Task Scheduler"
        }, void 0, false, {
            fileName: "[project]/src/components/Calendar.tsx",
            lineNumber: 247,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] !== prevWeek) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: prevWeek,
            className: "px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 border",
            children: "Previous Week"
        }, void 0, false, {
            fileName: "[project]/src/components/Calendar.tsx",
            lineNumber: 254,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = prevWeek;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    let t9;
    if ($[17] !== nextWeek) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: nextWeek,
            className: "px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 border",
            children: "Next Week"
        }, void 0, false, {
            fileName: "[project]/src/components/Calendar.tsx",
            lineNumber: 262,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = nextWeek;
        $[18] = t9;
    } else {
        t9 = $[18];
    }
    let t10;
    if ($[19] !== t8 || $[20] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-2",
            children: [
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Calendar.tsx",
            lineNumber: 270,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t8;
        $[20] = t9;
        $[21] = t10;
    } else {
        t10 = $[21];
    }
    let t11;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: ()=>setShowTaskForm(true),
            className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700",
            children: "Add Task"
        }, void 0, false, {
            fileName: "[project]/src/components/Calendar.tsx",
            lineNumber: 279,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[22] = t11;
    } else {
        t11 = $[22];
    }
    let t12;
    if ($[23] !== t10) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center",
            children: [
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-4 items-center",
                    children: [
                        t10,
                        t11
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Calendar.tsx",
                    lineNumber: 286,
                    columnNumber: 66
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Calendar.tsx",
            lineNumber: 286,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[23] = t10;
        $[24] = t12;
    } else {
        t12 = $[24];
    }
    let t13;
    if ($[25] !== currentDate) {
        t13 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(currentDate, "MMMM yyyy");
        $[25] = currentDate;
        $[26] = t13;
    } else {
        t13 = $[26];
    }
    let t14;
    if ($[27] !== currentDate) {
        t14 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(currentDate, "MMM d");
        $[27] = currentDate;
        $[28] = t14;
    } else {
        t14 = $[28];
    }
    let t15;
    if ($[29] !== t13 || $[30] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-lg font-semibold text-center",
            children: [
                t13,
                " - Week of ",
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Calendar.tsx",
            lineNumber: 310,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[29] = t13;
        $[30] = t14;
        $[31] = t15;
    } else {
        t15 = $[31];
    }
    let t16;
    if ($[32] !== handleAddTask || $[33] !== showTaskForm) {
        t16 = showTaskForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
            onClick: ()=>setShowTaskForm(false),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    scale: 0.9,
                    opacity: 0
                },
                animate: {
                    scale: 1,
                    opacity: 1
                },
                exit: {
                    scale: 0.9,
                    opacity: 0
                },
                onClick: _temp,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TaskForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TaskForm"], {
                    onSubmit: handleAddTask,
                    onCancel: ()=>setShowTaskForm(false)
                }, void 0, false, {
                    fileName: "[project]/src/components/Calendar.tsx",
                    lineNumber: 334,
                    columnNumber: 26
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Calendar.tsx",
                lineNumber: 325,
                columnNumber: 134
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Calendar.tsx",
            lineNumber: 319,
            columnNumber: 27
        }, ("TURBOPACK compile-time value", void 0));
        $[32] = handleAddTask;
        $[33] = showTaskForm;
        $[34] = t16;
    } else {
        t16 = $[34];
    }
    let t17;
    if ($[35] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: t16
        }, void 0, false, {
            fileName: "[project]/src/components/Calendar.tsx",
            lineNumber: 343,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[35] = t16;
        $[36] = t17;
    } else {
        t17 = $[36];
    }
    let t18;
    if ($[37] !== currentDate || $[38] !== handleDrop || $[39] !== tasks) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg shadow border",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WeekView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WeekView"], {
                tasks: tasks,
                currentDate: currentDate,
                onTaskDragStart: handleTaskDragStart,
                onTaskDragEnd: handleTaskDragEnd,
                onDrop: handleDrop
            }, void 0, false, {
                fileName: "[project]/src/components/Calendar.tsx",
                lineNumber: 351,
                columnNumber: 62
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Calendar.tsx",
            lineNumber: 351,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[37] = currentDate;
        $[38] = handleDrop;
        $[39] = tasks;
        $[40] = t18;
    } else {
        t18 = $[40];
    }
    let t19;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-4 h-4 bg-blue-200 border-l-4 border-blue-500"
                }, void 0, false, {
                    fileName: "[project]/src/components/Calendar.tsx",
                    lineNumber: 361,
                    columnNumber: 52
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Pending"
                }, void 0, false, {
                    fileName: "[project]/src/components/Calendar.tsx",
                    lineNumber: 361,
                    columnNumber: 118
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Calendar.tsx",
            lineNumber: 361,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[41] = t19;
    } else {
        t19 = $[41];
    }
    let t20;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-4 h-4 bg-green-200 border-l-4 border-green-500"
                }, void 0, false, {
                    fileName: "[project]/src/components/Calendar.tsx",
                    lineNumber: 368,
                    columnNumber: 52
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Completed"
                }, void 0, false, {
                    fileName: "[project]/src/components/Calendar.tsx",
                    lineNumber: 368,
                    columnNumber: 120
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Calendar.tsx",
            lineNumber: 368,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[42] = t20;
    } else {
        t20 = $[42];
    }
    let t21;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-4 text-sm",
            children: [
                t19,
                t20,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-4 h-4 bg-red-200 border-l-4 border-red-500"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Calendar.tsx",
                            lineNumber: 375,
                            columnNumber: 98
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Overdue"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Calendar.tsx",
                            lineNumber: 375,
                            columnNumber: 162
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Calendar.tsx",
                    lineNumber: 375,
                    columnNumber: 57
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Calendar.tsx",
            lineNumber: 375,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[43] = t21;
    } else {
        t21 = $[43];
    }
    let t22;
    if ($[44] !== t12 || $[45] !== t15 || $[46] !== t17 || $[47] !== t18) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 space-y-6",
            children: [
                t12,
                t15,
                t17,
                t18,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Calendar.tsx",
            lineNumber: 382,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[44] = t12;
        $[45] = t15;
        $[46] = t17;
        $[47] = t18;
        $[48] = t22;
    } else {
        t22 = $[48];
    }
    return t22;
};
_s(Calendar, "pCv1NbIF7KXt0LZYwGOumlmYals=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTasks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTasks"]
    ];
});
_c = Calendar;
function _temp(e) {
    return e.stopPropagation();
}
var _c;
__turbopack_context__.k.register(_c, "Calendar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_b08c3210._.js.map