import { Request, Response } from "express";
import { fetchCorrigendum, fetchCorrigendumById } from "../services/corrigendum.service";

export const getCorrigendum = async (req: Request, res: Response) => {
    try{
        const corrigendum = await fetchCorrigendum();
        res.json(corrigendum);
    } catch(err){
        res.json(err)
    }
    
};

export const getCorrigendumByTenderId =async (req: Request, res: Response) => {
    const { id } = req.params;
    const corrigendum = await fetchCorrigendumById(id);
    res.json(corrigendum)

}
