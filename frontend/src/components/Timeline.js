import React from 'react';
import './Timeline.css';


// Timeline functional component that receives an array of event objects.
// It maps over these events to create individual TimelineEvent components.

const Timeline = ({ events }) => {
    return (

        // The container for the timeline which will hold all the events.
        <div className="timeline-container">
            {events.map((event, index) => (
                <TimelineEvent key={index} event={event} />
            ))}
        </div>
    );
}

// The TimelineEvent functional component that receives a single event object.
// It renders the visual representation of the event in the timeline.

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