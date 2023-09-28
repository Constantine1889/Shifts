import React from 'react';
import './EmployeeItem.scss'

const EmployeeItem = ({user}) => {
    return (
        <div className='employeeItem'>
            <div className='employeeName' title='Employee Name'>{user}</div>
            <div title='Current Shifts'>4</div>
            <div title='Max Shifts'>5</div>
        </div>
    );
}

export default EmployeeItem;
