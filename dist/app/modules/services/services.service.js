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
exports.updateServicesByIDService = exports.getServicesByIDService = exports.getAllPendingServicesService = exports.getAllServicesService = exports.createServicesService = void 0;
const prisma_1 = require("../../../shared/prisma");
const createServicesService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.serviceRecord.create({
        data: payload
    });
    return result;
});
exports.createServicesService = createServicesService;
const getAllServicesService = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.serviceRecord.findMany({});
    return result;
});
exports.getAllServicesService = getAllServicesService;
const getAllPendingServicesService = () => __awaiter(void 0, void 0, void 0, function* () {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const result = yield prisma_1.prisma.serviceRecord.findMany({
        where: {
            status: {
                in: ['pending', 'in-progress'],
            },
            serviceDate: {
                lt: sevenDaysAgo,
            },
        }
    });
    return result;
});
exports.getAllPendingServicesService = getAllPendingServicesService;
const getServicesByIDService = (serviceId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.serviceRecord.findUniqueOrThrow({
        where: {
            serviceId
        }
    });
    return result;
});
exports.getServicesByIDService = getServicesByIDService;
const updateServicesByIDService = (serviceId, data) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.prisma.serviceRecord.findUniqueOrThrow({
        where: {
            serviceId
        }
    });
    if (Object.keys(data).length === 0 || data.completionDate) {
        data.status = 'done';
    }
    const result = yield prisma_1.prisma.serviceRecord.update({
        where: {
            serviceId
        },
        data: data
    });
    return result;
});
exports.updateServicesByIDService = updateServicesByIDService;
