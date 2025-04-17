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
exports.delteteCustomerService = exports.updateCustomerByIDService = exports.getCustomerByIDService = exports.getAllCustomerService = exports.createCustomerService = void 0;
const prisma_1 = require("../../../shared/prisma");
const createCustomerService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.customer.create({
        data: payload
    });
    return result;
});
exports.createCustomerService = createCustomerService;
const getAllCustomerService = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.customer.findMany({});
    return result;
});
exports.getAllCustomerService = getAllCustomerService;
const getCustomerByIDService = (customerId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.customer.findUniqueOrThrow({
        where: {
            customerId
        }
    });
    return result;
});
exports.getCustomerByIDService = getCustomerByIDService;
const updateCustomerByIDService = (customerId, data) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.prisma.customer.findUniqueOrThrow({
        where: {
            customerId
        }
    });
    const result = yield prisma_1.prisma.customer.update({
        where: {
            customerId
        },
        data
    });
    return result;
});
exports.updateCustomerByIDService = updateCustomerByIDService;
const delteteCustomerService = (customerId) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.prisma.customer.findUniqueOrThrow({
        where: {
            customerId
        }
    });
    const deletedCustomer = yield prisma_1.prisma.customer.delete({
        where: {
            customerId
        }
    });
    return null;
});
exports.delteteCustomerService = delteteCustomerService;
