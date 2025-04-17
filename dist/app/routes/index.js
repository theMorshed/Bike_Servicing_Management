"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bike_routes_1 = require("../modules/bike/bike.routes");
const customer_routes_1 = require("../modules/customer/customer.routes");
const services_routes_1 = require("../modules/services/services.routes");
const router = (0, express_1.Router)();
const appRoutes = [
    {
        path: '/bikes',
        route: bike_routes_1.bikeRoutes
    },
    {
        path: '/customers',
        route: customer_routes_1.customerRoutes
    },
    {
        path: '/services',
        route: services_routes_1.servicesRoutes
    }
];
appRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
