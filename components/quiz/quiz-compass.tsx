"use client";

import { cn } from "@/lib/utils";

type QuizCompassProps = {
  economic: number;
  social: number;
  className?: string;
};

/**
 * SVG political compass. Coordinates are already scaled to -10..10
 * (economic left..right, social libertarian..authoritarian) by scoreQuiz.
 */
export function QuizCompass({ economic, social, className }: QuizCompassProps) {
  const size = 280;
  const pad = 28;
  const inner = size - pad * 2;
  const cx = size / 2;
  const cy = size / 2;

  const x = pad + ((economic + 10) / 20) * inner;
  const y = pad + ((10 - social) / 20) * inner;

  return (
    <div className={cn("mx-auto w-full max-w-[280px]", className)}>
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="h-auto w-full"
        role="img"
        aria-label={`Political compass: economic ${economic}, social ${social}`}
      >
        <rect
          x={pad}
          y={pad}
          width={inner / 2}
          height={inner / 2}
          fill="rgba(225, 99, 35, 0.08)"
        />
        <rect
          x={cx}
          y={pad}
          width={inner / 2}
          height={inner / 2}
          fill="rgba(11, 31, 58, 0.06)"
        />
        <rect
          x={pad}
          y={cy}
          width={inner / 2}
          height={inner / 2}
          fill="rgba(37, 99, 235, 0.08)"
        />
        <rect
          x={cx}
          y={cy}
          width={inner / 2}
          height={inner / 2}
          fill="rgba(11, 31, 58, 0.04)"
        />

        <line
          x1={cx}
          y1={pad}
          x2={cx}
          y2={size - pad}
          stroke="#0b1f3a"
          strokeOpacity={0.25}
          strokeWidth={1.5}
        />
        <line
          x1={pad}
          y1={cy}
          x2={size - pad}
          y2={cy}
          stroke="#0b1f3a"
          strokeOpacity={0.25}
          strokeWidth={1.5}
        />

        <rect
          x={pad}
          y={pad}
          width={inner}
          height={inner}
          fill="none"
          stroke="#0b1f3a"
          strokeOpacity={0.35}
          strokeWidth={1.5}
          rx={4}
        />

        <text
          x={cx}
          y={16}
          textAnchor="middle"
          className="fill-navy"
          fontSize={11}
          fontWeight={600}
        >
          Authoritarian
        </text>
        <text
          x={cx}
          y={size - 6}
          textAnchor="middle"
          className="fill-navy"
          fontSize={11}
          fontWeight={600}
        >
          Libertarian
        </text>
        <text
          x={12}
          y={cy + 4}
          textAnchor="middle"
          className="fill-navy"
          fontSize={11}
          fontWeight={600}
          transform={`rotate(-90 12 ${cy})`}
        >
          Economic Left
        </text>
        <text
          x={size - 12}
          y={cy + 4}
          textAnchor="middle"
          className="fill-navy"
          fontSize={11}
          fontWeight={600}
          transform={`rotate(90 ${size - 12} ${cy})`}
        >
          Economic Right
        </text>

        <circle
          cx={x}
          cy={y}
          r={10}
          fill="#e16323"
          stroke="#0b1f3a"
          strokeWidth={2}
        />
        <circle cx={x} cy={y} r={3} fill="#fff" />
      </svg>
      <p className="mt-2 text-center text-xs text-muted-foreground tabular-nums">
        Economic {economic > 0 ? `+${economic}` : economic} · Social{" "}
        {social > 0 ? `+${social}` : social}
      </p>
    </div>
  );
}
