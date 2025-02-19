import { api } from "../api"

export const getAllCompany = async () => {
    const res = await api.get("/suppliers");
    if (!res.data) {
        throw new Error("Companies not found!");
    }

    return res.data
}