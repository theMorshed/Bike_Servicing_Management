import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ZodError } from 'zod';
import { PrismaClientKnownRequestError } from '../../../generated/prisma/runtime/library';

// Check environment
const isDev = 'development';

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
  let message = 'Something went wrong!';
  let errorDetails: any = null;

  // Handle Zod Validation Error
  if (err instanceof ZodError) {
    statusCode = StatusCodes.BAD_REQUEST;
    message = 'Validation Error';
    errorDetails = err.errors.map(e => ({
      path: e.path.join('.'),
      message: e.message
    }));
  }

  // Prisma not found error
  else if (err instanceof PrismaClientKnownRequestError && err.code === 'P2025') {
    statusCode = StatusCodes.NOT_FOUND;
    message = 'Requested record not found';
  }

  // Handle Prisma known client errors
  else if (err instanceof PrismaClientKnownRequestError) {
    // Unique constraint violation
    if (err.code === 'P2002') {
      statusCode = StatusCodes.CONFLICT;
      message = `Unique constraint failed on: ${err.meta?.target}`;
    } else {
      message = `Prisma error: ${err.message}`;
    }
  }

  // Custom app error (optional)
  else if (err.statusCode && err.message) {
    statusCode = err.statusCode;
    message = err.message;
  }

  // Final error response
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
    ...(errorDetails && { errorDetails }), // Only include if exists
    ...(isDev && { stack: err.stack }) // Only in development
  });
};
