import React from 'react'
import Table from 'react-bootstrap/Table';
import CircularProgressBar from './CircularProgressBar';

function Skills() {
  return (
    <Table className='skillBars' id="skillTable">
      <tbody>
        <tr>
          <td><CircularProgressBar value={75} />
          <p>CSS</p></td>
      
          <td><CircularProgressBar value={84} />
          <p>HTML</p></td>

          <td><CircularProgressBar value={74} />
          <p>JAVASCRIPT</p></td>
          </tr>
          <tr>
          <td><CircularProgressBar value={52} />
          <p>REACT</p></td>

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