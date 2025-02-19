import { api } from "../api";

export const updateCompany = async (body, id) => {
    const res = await api.put(`/suppliers/${id}`, body)

    if (!res.data) {
        throw new Error("Company not update!");
    }

    return res.data
}