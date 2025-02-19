import { api } from "../api"

export const createCompany = async (body) => {
    const res = await api.post("/suppliers", body);

    if (!res.data) {
        throw new Error("Company not create!");
    }

    return res.data
}