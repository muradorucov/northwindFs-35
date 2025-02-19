import { api } from "../api";

export const deleteCompany = async (id) => {
    const res = await api.delete(`/suppliers/${id}`)

    if (!res.data) {
        throw new Error("Company not delete!");
    }

    return res.data
}