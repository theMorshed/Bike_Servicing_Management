import { ServiceRecord } from "../../../../generated/prisma";
import { prisma } from "../../../shared/prisma"

export const createServicesService = async(payload: any) => {
    const result = await prisma.serviceRecord.create({
        data: payload
    });

    return result;
}

export const getAllServicesService = async() => {    
    const result = await prisma.serviceRecord.findMany({});

    return result;
}

export const getAllPendingServicesService = async() => {    
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const result = await prisma.serviceRecord.findMany({
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
}

export const getServicesByIDService = async(serviceId: string): Promise<ServiceRecord | null> => {
    const result = await prisma.serviceRecord.findUniqueOrThrow({
        where: {
            serviceId
        }
    });

    return result;
}

export const updateServicesByIDService = async(serviceId: string, data: Partial<ServiceRecord>): Promise<ServiceRecord> => {
    await prisma.serviceRecord.findUniqueOrThrow({
        where: {
            serviceId
        }
    });

    const result = await prisma.serviceRecord.update({
        where: {
            serviceId
        },
        data
    });

    return result;
}