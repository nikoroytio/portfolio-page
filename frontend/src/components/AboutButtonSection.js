import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Education from './education'
import Skills from './Skills'
import MyWorkHistory from './WorkHistory';
import "./AboutButtonSection.css"


// Here we make slight exception how we handle our css filing. we use this .js-files 
//.css file to affect skills etc, because of their positioning. You can create your own Skills.css
//if you want to modify the structure

function AboutButtonSection() {
  // State to manage which section (education, skills, job history) is displayed
    const [selectedSection, setSelectedSection] = useState('education');
    // State to manage visibility, neede for fade in animation
    const [showSection, setShowSection] = useState(true); 

     // for animation to display on every click, we need to hide section from dom
    const changeSection = (section) => {
      setShowSection(false); // Hide the section
      setTimeout(() => {
          setSelectedSection(section);
          setShowSection(true); // Show it after a delay
      }, 50); 
  };

    return (
        <Container className='SkillInfo'>
            <Row>
                <Col md="auto">
                    <button onClick={() => changeSection('education')}>Education</button>
                </Col>
                <Col md="auto">
                    <button onClick={() => changeSection('skills')}>Skills</button>
                </Col>
                <Col md="auto">
                    <button onClick={() => changeSection('jobHistory')}>Job History</button>
                </Col>
            </Row>
            <Row className='changingInfo'>
              {showSection && selectedSection === 'education' && <EducationComponent />}
              {showSection && selectedSection === 'skills' && <SkillsComponent />}
              {showSection && selectedSection === 'jobHistory' && <JobHistoryComponent />}
            </Row>
            
        </Container>
    );
  }
  
  function EducationComponent() {
    return <div className='education fadeInEffect'><Education/></div>;
  }
  
  function SkillsComponent() {
    return <div className='InfoBars fadeInEffect'><Skills/></div>;
  }
  
  function JobHistoryComponent() {
    return <div className='work fadeInEffect'><MyWorkHistory/></div>;
  }
  
export default AboutButtonSection