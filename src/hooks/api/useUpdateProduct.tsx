import { yupResolver } from "@hookform/resolvers/yup"
import { useMutation } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import { queryClient, api } from "../../api/api"
import { rotasApi } from "../../api/rotasApi"
import { responseSuccess, responseError } from "../../utils/responseHandle"
import Yup from "../../utils/yup"
import { routesApp } from "../../routes/RoutesApp"

export const useUpdateProduct = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const {
        mutate,
        isPending: isLoading,
        status,
    } = useMutation({
        mutationFn: endPoint,
        onSuccess: () => {
            queryClient.refetchQueries({ queryKey: ['products'] })
            responseSuccess('Produto atualizado')
            navigate(routesApp.list)
        },
        onError: (erro: AxiosError) => responseError(erro),
    })

    const schema = Yup.object({
        name: Yup.string()
            .required()
            .label('nome'),
        price: Yup.number().min(0).required().typeError('Insira um número válido').label('preço'),
        stock: Yup.number().min(0)
            .required().typeError('Insira um número válido')
            .label('quantidade'),
        description: Yup.string()
            .optional()
            .test('descricao-longa-5000', 'descrição muito longa', (value) => {
                if (value) return value.length <= 5000
                return true
            })
            .label('Description'),
    })

    type GerenciarProvaSchema = Yup.InferType<typeof schema>

    async function endPoint(data: GerenciarProvaSchema) {
        const result = await api().patch(rotasApi.updateProduct(id!), data)
        return result.data.data
    }

    const context = useForm({
        resolver: yupResolver(schema),
        reValidateMode: 'onChange',
    })

    return { mutate, isLoading, context, status }
}