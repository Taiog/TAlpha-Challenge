import { useQuery } from "@tanstack/react-query"
import { api } from "../../api/api"
import { rotasApi } from "../../api/rotasApi"

export const useGetAllProducts = () => {
    const { data } = useQuery({
        queryKey: ['products'],
        queryFn: async () => await endPoint(),
        refetchOnWindowFocus: false
    })

    return { data }
}

async function endPoint() {
    const result = await api().get(rotasApi.getAllProducts)
    console.log(result.data.data)
    return result.data.data
}
