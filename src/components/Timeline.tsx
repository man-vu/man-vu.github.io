import React from 'react';

export interface TimelineItem {
  date: string;
  institution: string; // school or company
  title: string;
  subtitle?: string;
  bullets: string[];
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative">
      <div className="flex flex-col gap-12">
        {items.map((item, idx) => (
          <div key={idx} className="grid grid-cols-[220px_32px_1fr] items-center relative min-h-[80px]">
            {/* Left column: Date and institution */}
            <div className="text-right pr-6">
              <div className="text-gray-400 text-sm font-medium leading-tight">{item.date}</div>
              <div className="text-gray-200 text-base font-semibold mt-1">{item.institution}</div>
            </div>
            {/* Timeline line and dot, now just right of left column */}
            <div className="flex flex-col items-center relative h-full">
              {/* Top half of line (if not first item) */}
              <div className={`flex-1 w-px bg-blue-700 dark:bg-blue-400 z-0 ${idx === 0 ? 'invisible' : ''}`} />
              {/* Dot */}
              <span className="w-3 h-3 bg-blue-500 dark:bg-blue-400 rounded-full border-2 border-gray-900 z-10" style={{ margin: '8px 0' }} />
              {/* Bottom half of line (if not last item) */}
              <div className={`flex-1 w-px bg-blue-700 dark:bg-blue-400 z-0 ${idx === items.length - 1 ? 'invisible' : ''}`} />
            </div>
            {/* Right column: Details */}
            <div className="pl-6">
              <div className="font-bold text-lg text-blue-100 mb-1 leading-tight">{item.title}</div>
              {item.subtitle && <div className="text-gray-300 mb-1 font-semibold">{item.subtitle}</div>}
              <ul className="list-disc pl-5 text-gray-200 space-y-1">
                {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline; 