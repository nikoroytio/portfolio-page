import React from 'react';
import './Timeline.css';

const Timeline = ({ events }) => {
    return (
        <div className="timeline-container">
            {events.map((event, index) => (
                <TimelineEvent key={index} event={event} />
            ))}
        </div>
    );
}

const TimelineEvent = ({ event }) => {
    return (
        <div className="timeline-event">
            <div className="timeline-event-dot"></div>
            <div className="timeline-event-content">
                <h4>{event.date}</h4>
                <h5>{event.company}</h5>
                <h3>{event.position}</h3>
                <p>{event.description}</p>
            </div>
        </div>
    );
}

export default Timeline;