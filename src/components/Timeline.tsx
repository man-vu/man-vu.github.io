import { Badge } from '@/components/ui/badge';
import { ReactNode } from 'react';

interface TimelineItemProps {
  date: string;
  title: string;
  subtitle: string;
  location: string;
  details?: string[];
  badgeVariant?: "outline" | "secondary";
}

interface TimelineProps {
  items: TimelineItemProps[];
  badgeVariant?: "outline" | "secondary";
}

export function TimelineItem({ date, title, subtitle, location, details, badgeVariant = "outline" }: TimelineItemProps) {
  return (
    <div className="relative pl-12 pb-8 last:pb-0">
      {/* Timeline dot */}
      <div className="absolute left-2 w-4 h-4 bg-blue-500 dark:bg-blue-400 rounded-full border-4 border-white dark:border-slate-900 shadow-md"></div>
      <div className="bg-white dark:bg-slate-900 rounded-lg border border-gray-200 dark:border-slate-800 p-4 shadow-sm">
        <div className="mb-3">
          <Badge variant={badgeVariant} className="mb-2 text-xs">{date}</Badge>
        </div>
        <div>
          <h4 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h4>
          <p className="text-base text-blue-600 dark:text-blue-400 font-medium">{subtitle}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{location}</p>
        </div>
        {details && details.length > 0 && (
          <ul className="list-disc ml-5 space-y-1 text-gray-700 dark:text-gray-300">
            {details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export function Timeline({ items, badgeVariant = "outline" }: TimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-900"></div>
      {items.map((item, index) => (
        <TimelineItem key={index} {...item} badgeVariant={badgeVariant} />
      ))}
    </div>
  );
} 