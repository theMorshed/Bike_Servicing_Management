import { sendResponse } from "../../../shared/sendResponse";
import { StatusCodes } from "http-status-codes";
import { catchAsync } from "../../../shared/catchAsync";
import { createServicesService, getAllPendingServicesService, getAllServicesService, getServicesByIDService, updateServicesByIDService } from "./services.service";

export const createServices = catchAsync(async(req, res) => {
    const result = await createServicesService(req.body);

    sendResponse(res, {
        statusCode: StatusCodes.CREATED,
        success: true,
        message: 'Service record created successfully',
        data: result
    })
});

export const getAllServices = catchAsync(async(req, res) => {
    const result = await getAllServicesService();

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Service records fetched successfully',
        data: result
    })    
});

export const getAllPendingServices = catchAsync(async(req, res) => {
    const result = await getAllPendingServicesService();

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Overdue or pending services fetched successfully',
        data: result
    })    
});

export const getServicesByID = catchAsync(async(req, res) => {
    const { serviceId } = req.params;
    
    const result = await getServicesByIDService(serviceId);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Service record fetched successfully',
        data: result
    })       
})

export const updateServicesByID = catchAsync(async(req, res) => {
    const { serviceId } = req.params;
    
    // If req.body is empty, set default completionDate
    const payload = Object.keys(req.body).length === 0 ? { completionDate: new Date() }
    : req.body;
    const result = await updateServicesByIDService(serviceId, payload);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Service marked as completed',
        data: result
    })          
  
})