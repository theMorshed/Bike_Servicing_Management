"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const http_status_codes_1 = require("http-status-codes");
const zod_1 = require("zod");
const library_1 = require("../../../generated/prisma/runtime/library");
// Check environment
const isDev = 'development';
const globalErrorHandler = (err, req, res, next) => {
    var _a;
    let statusCode = http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR;
    let message = 'Something went wrong!';
    let errorDetails = null;
    // Handle Zod Validation Error
    if (err instanceof zod_1.ZodError) {
        statusCode = http_status_codes_1.StatusCodes.BAD_REQUEST;
        message = 'Validation Error';
        errorDetails = err.errors.map(e => ({
            path: e.path.join('.'),
            message: e.message
        }));
    }
    // Prisma not found error
    else if (err instanceof library_1.PrismaClientKnownRequestError && err.code === 'P2025') {
        statusCode = http_status_codes_1.StatusCodes.NOT_FOUND;
        message = 'Requested record not found';
    }
    // Handle Prisma known client errors
    else if (err instanceof library_1.PrismaClientKnownRequestError) {
        // Unique constraint violation
        if (err.code === 'P2002') {
            statusCode = http_status_codes_1.StatusCodes.CONFLICT;
            message = `Unique constraint failed on: ${(_a = err.meta) === null || _a === void 0 ? void 0 : _a.target}`;
        }
        else {
            message = `Prisma error: ${err.message}`;
        }
    }
    // Custom app error (optional)
    else if (err.statusCode && err.message) {
        statusCode = err.statusCode;
        message = err.message;
    }
    // Final error response
    res.status(statusCode).json(Object.assign(Object.assign({ success: false, statusCode,
        message }, (errorDetails && { errorDetails })), (isDev && { stack: err.stack }) // Only in development
    ));
};
exports.globalErrorHandler = globalErrorHandler;
