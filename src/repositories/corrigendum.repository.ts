import { Corrigendum } from "../models/corrigendum.model";
import { Tender } from "../models/tender.model";


export const getAllCorrigendum = async () => {
    return await Corrigendum.find().sort({ updatedAt: -1 });
};

export const CorrigendumById = async (tenderID:string) => {
    return await Corrigendum.findOne({ tenderID });
}
