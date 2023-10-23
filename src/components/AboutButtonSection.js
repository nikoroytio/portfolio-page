import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CircularProgressBar from './CircularProgressBar';
import Education from './education'
import Skills from './Skills'
import MyWorkHistory from './WorkHistory';
import "./AboutButtonSection.css"

function AboutButtonSection() {
  // State to manage which section (education, skills, job history) is displayed
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
            <Row className='changingInfo'>
              {selectedSection === 'education' && <EducationComponent />}
              {selectedSection === 'skills' && <SkillsComponent />}
              {selectedSection === 'jobHistory' && <JobHistoryComponent />}
            </Row>
            
        </Container>
    );
  }
  
  function EducationComponent() {
    return <div className='education'><Education/></div>;
  }
  
  function SkillsComponent() {
    return <div className='InfoBars'><Skills/></div>;
  }
  
  function JobHistoryComponent() {
    return <div className='work'><MyWorkHistory/></div>;
  }
  
export default AboutButtonSection