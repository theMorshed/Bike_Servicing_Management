import { Customer } from "../../../../generated/prisma";
import { prisma } from "../../../shared/prisma"

export const createCustomerService = async(payload: any) => {
    const result = await prisma.customer.create({
        data: payload
    });

    return result;
}

export const getAllCustomerService = async() => {    
    const result = await prisma.customer.findMany({});

    return result;
}

export const getCustomerByIDService = async(customerId: string): Promise<Customer | null> => {
    const result = await prisma.customer.findUniqueOrThrow({
        where: {
            customerId
        }
    });

    return result;
}

export const updateCustomerByIDService = async(customerId: string, data: Partial<Customer>): Promise<Customer> => {
    await prisma.customer.findUniqueOrThrow({
        where: {
            customerId
        }
    });

    const result = await prisma.customer.update({
        where: {
            customerId
        },
        data
    });

    return result;
}

export const delteteCustomerService = async(customerId: string): Promise<Customer | null> => {
    await prisma.customer.findUniqueOrThrow({
        where: {
            customerId
        }
    });
    const deletedCustomer = await prisma.customer.delete({
        where: {
            customerId
        }
    });

    return null;
}