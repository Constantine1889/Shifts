import React from 'react';
import {Col,Stack} from 'react-bootstrap'
import weekDays from '../utils/dates'
import date from 'date.js'

const DatesBar = () => {
    
    return (
        <>
        {weekDays.map((day)=>{
            return (
                <Col key={day} className='border'>
                     <Stack>
                             <div>{day}</div>
                             <div>{date(day).toLocaleDateString('en-gb',{day:'2-digit',month:'2-digit'} )}</div>
                      </Stack> 
                </Col>
            )
        })}
        </>
    );
}

export default DatesBar;
