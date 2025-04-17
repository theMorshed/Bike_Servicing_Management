import { Request, Response } from "express";
import { createCustomerService, delteteCustomerService, getAllCustomerService, getCustomerByIDService, updateCustomerByIDService } from "./customer.service";
import { sendResponse } from "../../../shared/sendResponse";
import { StatusCodes } from "http-status-codes";
import { catchAsync } from "../../../shared/catchAsync";

export const createCustomer = catchAsync(async(req, res) => {
    const result = await createCustomerService(req.body);

    sendResponse(res, {
        statusCode: StatusCodes.CREATED,
        success: true,
        message: 'Customer created successfully',
        data: result
    })
});

export const getAllCustomer = catchAsync(async(req, res) => {
    const result = await getAllCustomerService();

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Customers fetched successfully',
        data: result
    })    
});

export const getCustomerByID = catchAsync(async(req, res) => {
    const { customerId } = req.params;
    
    const result = await getCustomerByIDService(customerId);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Customer fetched successfully',
        data: result
    })       
})

export const updateCustomerByID = catchAsync(async(req, res) => {
    const { customerId } = req.params;
    
    const result = await updateCustomerByIDService(customerId, req.body);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Customer updated successfully',
        data: result
    })          
  
})

export const deleteCustomer = catchAsync(async(req, res) => {
    const { customerId } = req.params;
    
    const result = await delteteCustomerService(customerId);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Customer deleted successfully',
        data: result
    })         
})