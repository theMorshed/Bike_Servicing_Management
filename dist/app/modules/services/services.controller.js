"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateServicesByID = exports.getServicesByID = exports.getAllPendingServices = exports.getAllServices = exports.createServices = void 0;
const sendResponse_1 = require("../../../shared/sendResponse");
const http_status_codes_1 = require("http-status-codes");
const catchAsync_1 = require("../../../shared/catchAsync");
const services_service_1 = require("./services.service");
exports.createServices = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, services_service_1.createServicesService)(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_codes_1.StatusCodes.CREATED,
        success: true,
        message: 'Service record created successfully',
        data: result
    });
}));
exports.getAllServices = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, services_service_1.getAllServicesService)();
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: 'Service records fetched successfully',
        data: result
    });
}));
exports.getAllPendingServices = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, services_service_1.getAllPendingServicesService)();
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: 'Overdue or pending services fetched successfully',
        data: result
    });
}));
exports.getServicesByID = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { serviceId } = req.params;
    const result = yield (0, services_service_1.getServicesByIDService)(serviceId);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: 'Service record fetched successfully',
        data: result
    });
}));
exports.updateServicesByID = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { serviceId } = req.params;
    // If req.body is empty, set default completionDate
    const payload = Object.keys(req.body).length === 0 ? { completionDate: new Date() }
        : req.body;
    const result = yield (0, services_service_1.updateServicesByIDService)(serviceId, payload);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: 'Service marked as completed',
        data: result
    });
}));
