import React, { useContext } from 'react';
import {observer} from 'mobx-react-lite'
import { Context } from '../../index';
import EmployeeItem from './EmployeeItem/EmployeeItem';


const EmployeesList = observer(() => {
    const {scheduleStore} = useContext(Context)
    const {employees} = scheduleStore
    const users = ['Leanne Graham',
        'Ervin Howell',
        'Clementine Bauch',
        'Patricia Lebsack',
        'Chelsey Dietrich',
        'Mrs. Dennis Schulist',
        'Kurtis Weissnat',
        'Nicholas Runolfsdottir',
        'Glenna Reichert',
       ' Clementina DuBuque']

    return (
        <aside className='employeesList'>
          {users.map(user=> <EmployeeItem key={user} user={user}/>)}
          
        </aside>
    );
}) 

export default EmployeesList;
