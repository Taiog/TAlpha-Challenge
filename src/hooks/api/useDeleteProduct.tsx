import { useMutation } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { queryClient, api } from "../../api/api"
import { rotasApi } from "../../api/rotasApi"
import { responseSuccess, responseError } from "../../utils/responseHandle"

export const useDeleteProduct = () => {
    const { mutate, isPending: isLoading } = useMutation({
        mutationFn: endPoint,
        onSuccess: () => {
            queryClient.refetchQueries({ queryKey: ['products'] })
            responseSuccess('Produto deletado')
        },
        onError: (erro: AxiosError) => responseError(erro),
    })

    async function endPoint(data: Payload) {
        const result = await api().delete(rotasApi.deleteProduct(data.id))
        return result.data.data
    }

    return { mutate, isLoading }
}

interface Payload {
    id: string
}