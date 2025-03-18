import { CorrigendumById, getAllCorrigendum } from "../repositories/corrigendum.repository";

export const fetchCorrigendum = async () => {
    return await getAllCorrigendum();
};

export const fetchCorrigendumById = async (tenderID:string) => {
    return await CorrigendumById(tenderID)
}
