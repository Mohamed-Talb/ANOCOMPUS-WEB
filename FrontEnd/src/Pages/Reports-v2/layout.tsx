// import React, { useEffect, useRef, useState } from "react";
// import ReportsList from "./ReportsList/ReportsList";
// import ReportDetailsPage from "./ReportsDetails-V2/ReportDetails";
// import { sampleReports } from "./IluationData";
// import type { Report } from "./types";

// // ✅ Sidebar constraints
// const SIDEBAR_MIN = 380;
// const SIDEBAR_MAX = 1020;

// // ✅ fixed tablet width
// const SIDEBAR_TABLET = 520;

// // ✅ default desktop percent width
// const SIDEBAR_PERCENT = 0.4;

// // ✅ Minimum width required for list/cards
// const LIST_MIN = 480;

// // ✅ Layout constants
// const HEADER_HEIGHT = 72;

// // ✅ Breakpoints
// const MOBILE_BP = 768;
// const TABLET_BP = 1280;

// export default function ReportsPage() {
//   const [selectedReport, setSelectedReport] = useState<Report>(sampleReports[0]);

//   const [sidebarWidth, setSidebarWidth] = useState(SIDEBAR_TABLET);

//   const [mode, setMode] = useState<"desktop" | "tablet" | "mobile">("desktop");
//   const [overlaySidebar, setOverlaySidebar] = useState(false);
//   const [sidebarOpen, setSidebarOpen] = useState(true);

//   const [isDragging, setIsDragging] = useState(false);

//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const dragging = useRef(false);

//   const clamp = (val: number, min: number, max: number) =>
//     Math.max(min, Math.min(max, val));

//   // ✅ Resize handler (NO GLITCH)
//   useEffect(() => {
//   const onResize = () => {
//     const w = window.innerWidth;
//     const containerWidth =
//       containerRef.current?.getBoundingClientRect().width || w;

//     // ✅ MOBILE
//     if (w < MOBILE_BP) {
//       setMode("mobile");
//       setOverlaySidebar(true);
//       setSidebarWidth(w);
//       return;
//     }

//     // ✅ TABLET
//     if (w < TABLET_BP) {
//       setMode("tablet");

//       const fixedWidth = Math.min(SIDEBAR_TABLET, containerWidth - LIST_MIN);
//       setSidebarWidth(fixedWidth);

//       const remaining = containerWidth - fixedWidth;
//       setOverlaySidebar(remaining < LIST_MIN);

//       return;
//     }

//     // ✅ DESKTOP
//     setMode("desktop");

//     const maxAllowed = Math.min(SIDEBAR_MAX, containerWidth - LIST_MIN);
//     const minAllowed = SIDEBAR_MIN;

//     // ✅ IMPORTANT FIX: calculate next sidebar width and overlay together
//     setSidebarWidth((prev) => {
//       const next = clamp(prev, minAllowed, maxAllowed);
//       setOverlaySidebar(containerWidth - next < LIST_MIN);
//       return next;
//     });
//   };

//   onResize();
//   window.addEventListener("resize", onResize);
//   return () => window.removeEventListener("resize", onResize);
// }, []);


//   // ✅ Drag resizing ONLY on desktop
//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       if (!dragging.current || mode !== "desktop") return;

//       const containerRect = containerRef.current?.getBoundingClientRect();
//       const containerWidth = containerRect?.width || window.innerWidth;
//       const containerLeft = containerRect?.left || 0;

//       const mouseXInside = e.clientX - containerLeft;
//       const desiredWidth = containerWidth - mouseXInside;

//       const maxAllowed = Math.min(SIDEBAR_MAX, containerWidth - LIST_MIN);
//       const newWidth = clamp(desiredWidth, SIDEBAR_MIN, maxAllowed);

//       setSidebarWidth(newWidth);

//       const remaining = containerWidth - newWidth;
//       setOverlaySidebar(remaining < LIST_MIN);
//     };

//     const handleMouseUp = () => {
//       dragging.current = false;
//       setIsDragging(false);
//       document.body.style.cursor = "default";
//       document.body.style.userSelect = "auto";
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mouseup", handleMouseUp);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mouseup", handleMouseUp);
//     };
//   }, [mode]);

//   // ✅ allow drag only on desktop and not overlay
//   const canResize = mode === "desktop" && !overlaySidebar;

//   return (
//   <div className="h-screen bg-[#1a1b1e] text-white overflow-hidden">
//     {/* ✅ HEADER */}
//     <header
//       className="w-full border-b border-[#2c2c2e] flex items-center px-6 bg-[#1a1b1e]"
//       style={{ height: HEADER_HEIGHT }}
//     >
//       <h1 className="text-lg font-semibold">Reporting App</h1>
//     </header>

//     {/* ✅ PAGE */}
//     <main className="max-w-[1600px] mx-auto px-6 lg:px-10 h-[calc(100%-72px)]">
//       <div
//         ref={containerRef}
//         className="w-full h-full flex gap-4 relative py-6"
//       >
//         {/* ✅ LIST */}
//         <div
//           className={`h-full rounded-xl border border-[#2c2c2e] bg-[#111214] overflow-hidden ${
//             isDragging ? "" : "transition-all duration-300 ease-out"
//           }`}
//           style={{
//             width: overlaySidebar ? "100%" : `calc(100% - ${sidebarWidth}px)`,
//             minWidth: LIST_MIN,
//           }}
//         >
//           <div className="h-full overflow-y-auto no-scrollbar">
//             <ReportsList
//               onSelectReport={(report) => {
//                 setSelectedReport(report);
//                 setSidebarOpen(true);
//               }}
//             />
//           </div>
//         </div>

//         {/* ✅ DETAILS */}
//         {sidebarOpen && !overlaySidebar && (
//           <div
//             className={`h-full rounded-xl border border-[#2c2c2e] bg-[#111214] overflow-hidden relative ${
//               isDragging ? "" : "transition-all duration-300 ease-out"
//             }`}
//             style={{
//               width: sidebarWidth,
//               maxWidth: SIDEBAR_MAX,
//               minWidth: SIDEBAR_MIN,
//             }}
//           >
//             {canResize && (
//               <div
//                 onMouseDown={() => {
//                   dragging.current = true;
//                   setIsDragging(true);
//                   document.body.style.cursor = "col-resize";
//                   document.body.style.userSelect = "none";
//                 }}
//                 className="absolute left-0 top-0 w-2 h-full cursor-col-resize hover:bg-[#0a84ff]/20 transition"
//               />
//             )}

//             <div className="h-full overflow-y-auto no-scrollbar">
//               <ReportDetailsPage report={selectedReport} />
//             </div>
//           </div>
//         )}

//         {/* ✅ OVERLAY */}
//         {sidebarOpen && overlaySidebar && (
//           <>
//             <div
//               className="absolute inset-0 bg-black/50 z-40 transition-opacity duration-300"
//               onClick={() => setSidebarOpen(false)}
//             />

//             <div className="absolute top-0 right-0 z-50 h-full w-full max-w-[520px] bg-[#111214] border-l border-[#2c2c2e] rounded-l-xl shadow-2xl overflow-hidden transition-transform duration-300 ease-out">
//               <div className="h-full overflow-y-auto no-scrollbar">
//                 <ReportDetailsPage
//                   report={selectedReport}
//                   onBack={() => setSidebarOpen(false)}
//                 />
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//     </main>
//   </div>
// );
// }

import React, { useEffect, useRef, useState } from "react";
import ReportsList from "./ReportsList/ReportsList";
import ReportDetailsPage from "./ReportsDetails-V2/ReportDetails";
import { sampleReports } from "./IluationData";
import type { Report } from "./types";

// ✅ Sidebar limits
const SIDEBAR_MIN = 420;
const SIDEBAR_MAX = 1020;
const SIDEBAR_DEFAULT = 560;

// ✅ Breakpoints
const MOBILE_BP = 820;
const RESIZE_BP = 1400;

// ✅ Layout
const HEADER_HEIGHT = 72;

// ✅ Animation (Discord-like)
const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";
const DURATION = 320;

export default function ReportsPage() {
  const [selectedReport, setSelectedReport] = useState<Report>(sampleReports[0]);

  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [sidebarWidth, setSidebarWidth] = useState(SIDEBAR_DEFAULT);

  const [mode, setMode] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const modeRef = useRef(mode);

  const [canResize, setCanResize] = useState(true);
  const [isDragging, setIsDragging] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const dragging = useRef(false);

  const rafRef = useRef<number | null>(null);
  const dragRafRef = useRef<number | null>(null);
  const pendingWidthRef = useRef<number | null>(null);

  const clamp = (v: number, min: number, max: number) =>
    Math.max(min, Math.min(max, v));

  // ✅ open / close
  const closeSidebar = () => {
    setSidebarOpen(false);
    setTimeout(() => setSidebarVisible(false), DURATION);
  };

  const openSidebar = () => {
    setSidebarVisible(true);
    setTimeout(() => setSidebarOpen(true), 20);
  };

  // ✅ Resize Handler (NO FLICKER)
  useEffect(() => {
    const onResize = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      rafRef.current = requestAnimationFrame(() => {
        const w = window.innerWidth;

        let nextMode: "desktop" | "tablet" | "mobile" = "desktop";

        if (w < MOBILE_BP) nextMode = "mobile";
        else if (w < RESIZE_BP) nextMode = "tablet";
        else nextMode = "desktop";

        if (nextMode !== modeRef.current) {
          modeRef.current = nextMode;
          setMode(nextMode);

          if (nextMode === "mobile") {
            setSidebarWidth(w);
            setCanResize(false);
            return;
          }

          if (nextMode === "tablet") {
            setSidebarWidth(SIDEBAR_DEFAULT);
            setCanResize(false);
            return;
          }

          if (nextMode === "desktop") {
            setCanResize(true);
            setSidebarWidth((prev) => clamp(prev, SIDEBAR_MIN, SIDEBAR_MAX));
            return;
          }
        }

        if (modeRef.current === "mobile") {
          setSidebarWidth(w);
          return;
        }

        if (modeRef.current === "tablet") {
          setSidebarWidth(SIDEBAR_DEFAULT);
          return;
        }

        setSidebarWidth((prev) => clamp(prev, SIDEBAR_MIN, SIDEBAR_MAX));
      });
    };

    onResize();
    window.addEventListener("resize", onResize);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // ✅ Drag resizing (desktop only) using RAF smooth updates
  useEffect(() => {
    const applyWidth = () => {
      if (pendingWidthRef.current != null) {
        setSidebarWidth(pendingWidthRef.current);
        pendingWidthRef.current = null;
      }
      dragRafRef.current = null;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!dragging.current || modeRef.current !== "desktop") return;

      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      const desiredWidth = rect.right - e.clientX;
      const newWidth = clamp(desiredWidth, SIDEBAR_MIN, SIDEBAR_MAX);

      pendingWidthRef.current = newWidth;

      if (!dragRafRef.current) {
        dragRafRef.current = requestAnimationFrame(applyWidth);
      }
    };

    const handleMouseUp = () => {
      dragging.current = false;
      setIsDragging(false);
      document.body.style.cursor = "default";
      document.body.style.userSelect = "auto";
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      if (dragRafRef.current) cancelAnimationFrame(dragRafRef.current);
    };
  }, []);

  const isMobile = mode === "mobile";
  const isDesktop = mode === "desktop";

  return (
    <div className="h-screen bg-[#1a1b1e] text-white overflow-hidden">
      {/* ✅ HEADER */}
      <header
        className="w-full border-b border-[#2c2c2e] flex items-center px-6 bg-[#1a1b1e]"
        style={{ height: HEADER_HEIGHT }}
      >
        <h1 className="text-lg font-semibold">Reporting App</h1>
      </header>

      {/* ✅ PAGE */}
      <main className="max-w-[2000px] mx-auto px-6 lg:px-10 h-[calc(100%-72px)]">
        <div ref={containerRef} className="relative w-full h-full py-6">
          {/* ✅ LIST */}
          <div className="h-full rounded-xl border border-[#2c2c2e] bg-[#111214] overflow-hidden">
            <div className="h-full overflow-y-auto no-scrollbar">
              <ReportsList
                onSelectReport={(report) => {
                  setSelectedReport(report);
                  openSidebar();
                }}
              />
            </div>
          </div>

          {/* ✅ Overlay */}
          {sidebarVisible && (
            <div
              className="absolute inset-0 z-40"
              onClick={closeSidebar}
              style={{
                background: "rgba(0,0,0,0.55)",
                opacity: sidebarOpen ? 1 : 0,
                transition: `opacity ${DURATION}ms ${EASE}`,
              }}
            />
          )}

          {/* ✅ SIDEBAR */}
          {sidebarVisible && (
            <div
              className="absolute top-6 right-0 z-50 h-[calc(100%-48px)] bg-[#111214] border border-[#2c2c2e] rounded-xl shadow-2xl overflow-hidden"
              style={{
                width: isMobile ? "100%" : sidebarWidth,
                maxWidth: SIDEBAR_MAX,

                transform: sidebarOpen ? "translateX(0)" : "translateX(110%)",

                transition: isDragging
                  ? "none"
                  : `transform ${DURATION}ms ${EASE}, width ${DURATION}ms ${EASE}`,

                willChange: "transform,width",
              }}
            >
              {/* ✅ Drag handle */}
              {isDesktop && canResize && (
                <div
                  onMouseDown={() => {
                    dragging.current = true;
                    setIsDragging(true);
                    document.body.style.cursor = "col-resize";
                    document.body.style.userSelect = "none";
                  }}
                  className="absolute left-0 top-0 w-2 h-full cursor-col-resize hover:bg-[#0a84ff]/20 transition"
                />
              )}

              <div className="h-full overflow-y-auto no-scrollbar">
                <ReportDetailsPage report={selectedReport} onBack={closeSidebar} />
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
