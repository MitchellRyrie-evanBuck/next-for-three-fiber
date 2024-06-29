import React from 'react';
import ActivityCalendar from 'react-activity-calendar';

type ActivityCalendarTypeProps = {
  data: any
}

const ActivityCalendarComponent: React.FC<ActivityCalendarTypeProps> = ({ data }) => {
  return (
    <ActivityCalendar
      data={data}
      theme={{
        light: ['#f0f0f0', '#c4edde', '#7ac7c4', '#f73859', '#384259'],
        dark: ['#383838', '#4D455D', '#7DB9B6', '#F5E9CF', '#E96479'],
      }}
      eventHandlers={{
        onClick: (event) => (activity) => {
          alert(JSON.stringify(activity));
        },
        onMouseEnter: (event) => (activity) => {
          console.log('on mouse enter');
        },
      }}
      labels={{
        months: [
          'Jan',
          'Feb',
          'Mär',
          'Apr',
          'Mai',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Okt',
          'Nov',
          'Dez',
        ],
        weekdays: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
        totalCount: '{{count}} Aktivitäten in {{year}}',
        legend: {
          less: 'Weniger',
          more: 'Mehr',
        },
      }}
    />
  );
};

export default ActivityCalendarComponent;