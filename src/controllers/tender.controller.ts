import { Request, Response } from "express";
import { fetchTenders, fetchTendersById } from "../services/tender.service";

export const getTenders = async (req: Request, res: Response) => {
    const tenders = await fetchTenders();
    res.json(tenders);
};


export const getTendersByJobId =async (req: Request, res: Response) => {
    const { id } = req.params;
    const tenders = await fetchTendersById(id);
    res.json(tenders)

}
