import { BasicLayout } from '../layout/BasicLayout';
import { Error } from '../pages/Error';
import { Home } from '../pages/Home';
import routesAdmin from './routes.admin';
import routesEmployeed from './routes.employed';

const routes = [
    ...routesAdmin,
    ...routesEmployeed,
    {
        path: "/",
        layout: BasicLayout,
        component: Home,
    },
    {
        path: "*",
        layout: BasicLayout,
        component: Error,
    },
]

export default routes;