import React, { useContext } from 'react';
import { Context } from '../index';
import EmployeesList from '../components/EmployeesList/EmployeesList';
import Container from '@mui/material/Container';
import '../styles/admin.scss'






const Admin = () => {
    const {scheduleStore} = useContext(Context)


    return (
      <div className="admin">
        <EmployeesList/>
        <Container element='div' className='scheduleDashboard'>
        S
        </Container>
        <aside className='buttons'>
        B
        </aside>
      </div>
    );
}

export default Admin;
