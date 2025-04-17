import { Bike } from "../../../../generated/prisma";
import { prisma } from "../../../shared/prisma";

export const createBikeService = async(payload: any) => {
    const result = await prisma.bike.create({
        data: payload
    });

    return result;
}

export const getAllBikeService = async() => {    
    const result = await prisma.bike.findMany({});

    return result;
}

export const getBikeByIDService = async(bikeId: string): Promise<Bike | null> => {
    const result = await prisma.bike.findUniqueOrThrow({
        where: {
            bikeId
        }
    });

    return result;
}