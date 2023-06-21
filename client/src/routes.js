import Admin from './pages/Admin'
import Auth from './pages/Auth'
import Employee from './pages/Employee'
import { ADMIN_ROUTE,  EMPLOYEE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from './utils/consts'

export const authAdminRoutes = [
{
    path:ADMIN_ROUTE,
    Component:Admin
},

]

export const authEmployeeRoutes = [
    {
        path:EMPLOYEE_ROUTE,
        Component:Employee
    }
]

export const publicRoutes = [
    {
        path:LOGIN_ROUTE,
        Component:Auth
    },
    {
        path:REGISTRATION_ROUTE,
        Component:Auth
    },
]