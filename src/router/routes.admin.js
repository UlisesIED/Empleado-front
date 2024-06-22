import { AdminLayout } from '../layout/AdminLayout';
import {
    EmployedAdmin,
    InicioAdmin
} from "../pages/admin";

const routesAdmin = [
    {
        path: "/admin",
        layout: AdminLayout,
        component: InicioAdmin,
    },
    {
        path: "/admin/empleados",
        layout: AdminLayout,
        component: EmployedAdmin,
    }
]

export default routesAdmin;