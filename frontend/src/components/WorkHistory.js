import React from 'react';
import "./WorkHistory.css"
import Timeline from './Timeline';

const MyWorkHistory = () => {
    const events = [
        { date: '06/2009 - 08/2014', company: 'several different employers', position: 'Summer jobs',  description: `I started my 
        working career at a young age and besides school I have worked as a farm hand, at Normet Group Oyj as a payroll 
        assistant, on the maintenance side of the city of Iisalmi and building a shooting range, and as a mail carrier 
        at Savon Jakelu.` },
        { date: '06/2015 - 08/2015 & 06-2016 - 08-2016 & 06-2017 - 08-2017', company: 'Sukeva Prison', position: 'Warden', description: 'Duties of a prison guard' },
        { date: 'Jan 2018-', company: 'GoBros Oy', position: "CEO/entrepreneur" , description: `In addition to administration, the main task is training and consulting companies 
        on videography and social media content marketing. Customer relationship maintenance and sales. The
         role of the main trainer in Videox company group projects, as well as the YOM service's main trainer 
         in website development, as well as a trainer in marketing and video services. Also responsible for 
         website and online store programming, UIX design and Search Engine Optimization in several projects.` }
    ];

    return (
        <div className='workHistory'>
            <Timeline events={events} />
        </div>
    );
}

export default MyWorkHistory;