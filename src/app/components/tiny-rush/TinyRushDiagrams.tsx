import React from "react";
import { ACCENT } from "./shared";

const GRAY = "#9ca3af";
const GRAY_LIGHT = "#e5e7eb";
const ZONE = "#f3f4f6";
const TEXT = "#6b7280";

function Label({ x, y, children, color = TEXT, anchor = "middle" }: { x: number; y: number; children: React.ReactNode; color?: string; anchor?: "start" | "middle" | "end" }) {
  return (
    <text x={x} y={y} fill={color} fontSize={11} textAnchor={anchor} fontFamily="inherit">
      {children}
    </text>
  );
}

/** Joystick v1 (fixed zone, hard rim) next to v2 (floating stick that follows the thumb). */
export function JoystickDiagram() {
  return (
    <svg viewBox="0 0 560 200" className="w-full h-auto max-w-2xl mx-auto block" role="img" aria-label="Joystick before and after: a small fixed zone with a hard stop at its rim, versus a stick that starts where the thumb lands and follows it">
      {/* Before */}
      <g>
        <Label x={130} y={14} color="#374151">Before</Label>
        <rect x={10} y={24} width={240} height={140} rx={14} fill={ZONE} />
        <circle cx={130} cy={94} r={38} fill="#fff" stroke={GRAY} strokeWidth={1.5} strokeDasharray="4 4" />
        <line x1={168} y1={80} x2={168} y2={108} stroke="#374151" strokeWidth={3} strokeLinecap="round" />
        <circle cx={160} cy={94} r={13} fill={GRAY} />
        <line x1={175} y1={94} x2={212} y2={94} stroke={GRAY} strokeWidth={1.5} strokeDasharray="3 3" />
        <circle cx={222} cy={94} r={10} fill="none" stroke={GRAY} strokeWidth={1.5} />
        <Label x={222} y={124}>thumb</Label>
        <circle cx={42} cy={140} r={9} fill="none" stroke={GRAY} strokeWidth={1.5} />
        <path d="M36 134 L48 146 M48 134 L36 146" stroke={GRAY} strokeWidth={1.5} />
        <Label x={58} y={144} anchor="start">touch outside: ignored</Label>
        <Label x={130} y={184}>Small fixed zone, hard stop at the rim</Label>
      </g>

      {/* After */}
      <g transform="translate(300 0)">
        <Label x={130} y={14} color={ACCENT}>After</Label>
        <rect x={10} y={24} width={240} height={140} rx={14} fill={ZONE} stroke={ACCENT} strokeWidth={1.5} strokeDasharray="5 5" />
        <circle cx={70} cy={104} r={38} fill="none" stroke={GRAY_LIGHT} strokeWidth={1.5} strokeDasharray="4 4" />
        <circle cx={70} cy={104} r={4} fill={GRAY} />
        <Label x={70} y={156}>thumb lands</Label>
        <path d="M74 44 L150 44" stroke={GRAY} strokeWidth={1.5} markerEnd="url(#tr-arrow)" />
        <Label x={112} y={38}>base follows</Label>
        <circle cx={160} cy={104} r={38} fill="#fff" stroke={ACCENT} strokeWidth={1.5} />
        <circle cx={204} cy={104} r={13} fill={ACCENT} />
        <circle cx={204} cy={104} r={10} fill="none" stroke="#fff" strokeWidth={1.5} />
        <Label x={221} y={108} anchor="start">thumb</Label>
        <Label x={130} y={184}>Starts anywhere, follows past the rim</Label>
      </g>

      <defs>
        <marker id="tr-arrow" viewBox="0 0 8 8" refX={7} refY={4} markerWidth={7} markerHeight={7} orient="auto">
          <path d="M0 0 L8 4 L0 8 z" fill={GRAY} />
        </marker>
      </defs>
    </svg>
  );
}

/** Schematic frame costs: scenery redrawn every frame vs drawn once and cached. */
export function FrameDiagram() {
  const baseY = 150, budgetY = 80, barW = 22, gap = 12;
  const before = [100, 96, 104, 98, 102, 97];
  const after = [96, 34, 32, 35, 33, 34];
  const bars = (heights: number[], first: "scenery" | "cache") =>
    heights.map((h, i) => {
      const x = 30 + i * (barW + gap);
      const game = 22;
      const scenery = h - game;
      const isCache = first === "cache" && i === 0;
      return (
        <g key={i}>
          {first === "scenery" || isCache ? (
            <rect x={x} y={baseY - h} width={barW} height={scenery} rx={3} fill={isCache ? "#fdba74" : GRAY} />
          ) : null}
          <rect
            x={x}
            y={baseY - (first === "scenery" || isCache ? game : h)}
            width={barW}
            height={first === "scenery" || isCache ? game : h}
            rx={3}
            fill={ACCENT}
          />
        </g>
      );
    });

  return (
    <svg viewBox="0 0 560 200" className="w-full h-auto max-w-2xl mx-auto block" role="img" aria-label="Frame cost before and after: every frame redrew the scenery and went over the 60 fps budget; after, the scenery is drawn once and every frame stays under budget">
      {[0, 300].map((ox) => (
        <g key={ox} transform={`translate(${ox} 0)`}>
          <line x1={20} y1={budgetY} x2={240} y2={budgetY} stroke="#374151" strokeWidth={1} strokeDasharray="4 3" />
          <line x1={20} y1={baseY} x2={240} y2={baseY} stroke={GRAY_LIGHT} />
        </g>
      ))}

      <g>
        <Label x={130} y={14} color="#374151">Before</Label>
        {bars(before, "scenery")}
        <Label x={130} y={168}>each frame redraws all the scenery</Label>
        <Label x={130} y={184}>frames drop, and the game clock slows</Label>
      </g>

      <g transform="translate(300 0)">
        <Label x={130} y={14} color={ACCENT}>After</Label>
        {bars(after, "cache")}
        <Label x={130} y={168}>scenery drawn once, then reused</Label>
        <Label x={130} y={184}>clock runs on real time</Label>
      </g>
    </svg>
  );
}

export function DiagramLegend() {
  return (
    <div className="flex flex-wrap justify-center gap-x-5 gap-y-1 text-xs text-gray-500">
      <span className="inline-flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm" style={{ background: GRAY }} />Scenery (flowers, bushes, fence)</span>
      <span className="inline-flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm" style={{ background: ACCENT }} />Game (trucks, apples, effects)</span>
      <span className="inline-flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-orange-300" />One-time scenery image</span>
      <span className="inline-flex items-center gap-1.5"><span className="w-4 border-t border-dashed border-gray-700" />60 fps budget (16.7 ms per frame)</span>
    </div>
  );
}
