
'use client';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import type { HistoryEvent } from '@/lib/types';
import { Calendar } from 'lucide-react';

export function HistoryTimeline({ events }: { events: HistoryEvent[] }) {
  return (
    <VerticalTimeline lineColor="">
      {events.map((event, index) => (
        <VerticalTimelineElement
          key={index}
          className="vertical-timeline-element--work timeline-card"
          contentStyle={{ background: 'hsl(var(--card))', color: 'hsl(var(--card-foreground))' }}
          contentArrowStyle={{ borderRight: '7px solid hsl(var(--card))' }}
          date={event.year}
          iconStyle={{ background: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))' }}
          icon={<Calendar />}
        >
          <h3 className="vertical-timeline-element-title font-headline text-xl">{event.title}</h3>
          <p className="!font-normal text-muted-foreground">
            {event.description}
          </p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}
