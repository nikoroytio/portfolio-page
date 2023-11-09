import React from 'react'
import Table from 'react-bootstrap/Table';
import CircularProgressBar from './CircularProgressBar';


// Here we are using table as display for skillbars, because it scaled better in smaller screens
// Depending on your need, you can change the structure to classic Container, Row & Col if you have more 
// skills to display and then they stack better

// Table documentation https://react-bootstrap.netlify.app/docs/components/table

function Skills() {
  return (
    <Table className='skillBars' id="skillTable">
      <tbody>
        <tr>
          <td><CircularProgressBar value={29} />
          <p>CSS</p></td>
      
          <td><CircularProgressBar value={26} />
          <p>HTML</p></td>

          <td><CircularProgressBar value={18} />
          <p>JAVASCRIPT</p></td>

          <td><CircularProgressBar value={72} />
          <p>WORDPRESS</p></td>
          </tr>
          <tr>
          <td><CircularProgressBar value={16} />
          <p>REACT</p></td>

          <td><CircularProgressBar value={14} />
          <p>PYTHON</p></td>

          <td><CircularProgressBar value={100} />
          <p>VIDEO EDITING</p></td>

          <td><CircularProgressBar value={83} />
          <p>GRAPHIC DESIGN</p></td>
          </tr>
        </tbody>
    </Table>
  );
}

export default Skills;