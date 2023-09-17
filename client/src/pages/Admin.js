import React, { useContext } from 'react';
import { Context } from '../index';






const Admin = () => {
    const {scheduleStore} = useContext(Context)


    return (
    <div>Admin Page</div>
    );
}

export default Admin;
