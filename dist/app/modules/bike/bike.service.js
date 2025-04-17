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
exports.getBikeByIDService = exports.getAllBikeService = exports.createBikeService = void 0;
const prisma_1 = require("../../../shared/prisma");
const createBikeService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.bike.create({
        data: payload
    });
    return result;
});
exports.createBikeService = createBikeService;
const getAllBikeService = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.bike.findMany({});
    return result;
});
exports.getAllBikeService = getAllBikeService;
const getBikeByIDService = (bikeId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.bike.findUniqueOrThrow({
        where: {
            bikeId
        }
    });
    return result;
});
exports.getBikeByIDService = getBikeByIDService;
