"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendResponse = void 0;
const sendResponse = (res, data) => {
    res.status(data.statusCode).json({
        success: data.success,
        message: data.message,
        data: data.data || null || undefined
    });
};
exports.sendResponse = sendResponse;
