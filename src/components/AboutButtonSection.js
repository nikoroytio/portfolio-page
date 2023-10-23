import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CircularProgressBar from './CircularProgressBar';
import Education from './education'
import MyWorkHistory from './WorkHistory';
import "./Skills.css"

function Skills() {
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
    return <Container >
              <Row className='InfoBars'>
                <Col>
                  <CircularProgressBar value={42}/>
                  <p>JAVASCRIPT</p>
                </Col>
                <Col>
                  <CircularProgressBar value={64}/>
                  <p>HTML</p>
                </Col>
                <Col>
                  <CircularProgressBar value={63}/>
                  <p>CSS</p>
                </Col>
              </Row>
              <Row className='InfoBars'>
                <Col>
                  <CircularProgressBar value={30}/>
                  <p>PYTHON</p>
                </Col>
                <Col>
                  <CircularProgressBar value={100}/>
                  <p>VIDEO EDITING</p>
                </Col>
                <Col>
                  <CircularProgressBar value={83}/>
                  <p>GRAPHIC DESIGN</p>
                </Col>
              </Row>
          </Container>
  }
  
  function JobHistoryComponent() {
    return <div className='work'><MyWorkHistory/></div>;
  }
  
export default Skills