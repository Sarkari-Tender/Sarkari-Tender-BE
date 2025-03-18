import { Tender } from "../models/tender.model";


export const getAllTenders = async () => {
    return await Tender.find();
};

export const getTendersById = async (tenderID:string) => {
    return await Tender.findOne({ tenderID });
}
