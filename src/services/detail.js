import { api } from "../api";

export const getSingleCompany = async (id) => {
    const res = await api.get(`/suppliers/${id}`)

    if (!res.data) {
        throw new Error("Company not Found!");
    }

    return res.data
}