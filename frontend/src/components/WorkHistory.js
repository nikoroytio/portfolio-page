import React from 'react';
import Timeline from './Timeline';

// Here you put actual info, that shows in timeline. If you want to edit what the timeline includes, edit Timeline.js
const MyWorkHistory = () => {
    const events = [
        { date: 'Jan 2018-', company: 'GoBros Oy', position: "CEO/entrepreneur" , description: `In addition to administration, the main task is training and consulting companies 
        on videography and social media content marketing. Customer relationship maintenance and sales. The
         role of the main trainer in Videox company group projects, as well as the YOM service's main trainer 
         in website development, as well as a trainer in marketing and video services. Also responsible for 
         website and online store programming, UIX design and Search Engine Optimization in several projects.` },
         { date: 'Aug 2015-', company: ' UKKO.FI', position: "Light entrepreneur" , description: `Entrepreneurial 
         activity started alongside studies. Video productions for Finnish sports organizations.`}, 
         { date: 'Aug 2015-', company: ' NEXT LEVEL - App', position: "Content Creator" , description: `Content 
         creator and application developer as a student in a Finnish startup company`},
         { date: '06/2015 - 08/2015 & 06-2016 - 08-2016 & 06-2017 - 08-2017', company: 'Sukeva Prison', position: 'Warden', description: 'Duties of a prison guard' },
        { date: '06/2009 - 08/2014', company: 'several different employers', position: 'Summer jobs',  description: `I started my 
        working career at a young age and besides school I have worked as a farm hand, at Normet Group Oyj as a payroll 
        assistant, on the maintenance side of the city of Iisalmi and building a shooting range, and as a mail carrier 
        at Savon Jakelu.` },
        ];
    // The render method returns the JSX for the work history section.
    // The 'Timeline' component is called and the 'events' array is passed to it as a prop.
    return (
        <div className='workHistory'>
            <Timeline events={events} />
        </div>
    );
}

export default MyWorkHistory;