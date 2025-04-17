import { Router } from "express";
import { bikeRoutes } from "../modules/bike/bike.routes";
import { customerRoutes } from "../modules/customer/customer.routes";
import { servicesRoutes } from "../modules/services/services.routes";

const router = Router();

const appRoutes = [
    {
        path: '/bikes',
        route: bikeRoutes
    },
    {
        path: '/customers',
        route: customerRoutes
    },
    {
        path: '/services',
        route: servicesRoutes
    }
];

appRoutes.forEach(route => router.use(route.path, route.route));

export default router;