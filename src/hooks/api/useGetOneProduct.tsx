import { useQuery } from "@tanstack/react-query"
import { rotasApi } from "../../api/rotasApi"
import { api } from "../../api/api"

export const useGetOneProduct = (id?: string) => {
    const { data, isLoading } = useQuery({
        queryKey: ['product', id],
        queryFn: async () => await endPoint(id!),
        enabled: !!id,
        refetchOnWindowFocus: false,
    })

    return { data, isLoading }
}
async function endPoint(id: string) {
    const response = await api().get(rotasApi.getOneProduct(id))

    return response.data?.data
}