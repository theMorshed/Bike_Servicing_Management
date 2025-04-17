import { Request, Response } from "express";
import { sendResponse } from "../../../shared/sendResponse";
import { StatusCodes } from "http-status-codes";
import { catchAsync } from "../../../shared/catchAsync";
import { createBikeService, getAllBikeService, getBikeByIDService } from "./bike.service";

export const createBike = catchAsync(async(req, res) => {
    const result = await createBikeService(req.body);

    sendResponse(res, {
        statusCode: StatusCodes.CREATED,
        success: true,
        message: 'Bike added successfully',
        data: result
    })
});

export const getAllBike = catchAsync(async(req, res) => {
    const result = await getAllBikeService();

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Bikes fetched successfully',
        data: result
    })    
});

export const getBikeByID = catchAsync(async(req, res) => {
    const { bikeId } = req.params;
    
    const result = await getBikeByIDService(bikeId);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Bike fetched successfully',
        data: result
    })       
})