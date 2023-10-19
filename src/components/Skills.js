import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./Skills.css"

function Skills() {
    const [selectedSection, setSelectedSection] = useState('education');

    return (
        <Container className='SkillInfo'>
            <Row>
                <Col>
                    <button onClick={() => setSelectedSection('education')}>Education</button>
                </Col>
                <Col>
                    <button onClick={() => setSelectedSection('skills')}>Skills</button>
                </Col>
                <Col>
                    <button onClick={() => setSelectedSection('jobHistory')}>Job History</button>
                </Col>
            </Row>
            {selectedSection === 'education' && <EducationComponent />}
            {selectedSection === 'skills' && <SkillsComponent />}
            {selectedSection === 'jobHistory' && <JobHistoryComponent />}
            
        </Container>
    );
  }
  
  function EducationComponent() {
    return <div className='info'>Your education details here...</div>;
  }
  
  function SkillsComponent() {
    return <div className='info'>Your skills details here...</div>;
  }
  
  function JobHistoryComponent() {
    return <div className='info'>Your job history details here...</div>;
  }
  


export default Skills