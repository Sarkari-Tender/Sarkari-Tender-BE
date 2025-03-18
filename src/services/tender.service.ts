import { getAllTenders, getTendersById } from "../repositories/tender.repository";

export const fetchTenders = async () => {
    return await getAllTenders();
};

export const fetchTendersById = async (tenderID:string) => {
    return await getTendersById(tenderID)
}
