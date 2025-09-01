import { Tender } from "../models/tender.model";


export const getAllTenders = async () => {
    return await Tender.find().sort({ updatedAt: -1 });
};

export const getTendersById = async (tenderID:string) => {
    return await Tender.findOne({ tenderID });
}
