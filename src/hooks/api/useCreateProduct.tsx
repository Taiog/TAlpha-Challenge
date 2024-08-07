import { useMutation } from "@tanstack/react-query"
import { api, queryClient } from "../../api/api"
import { AxiosError } from "axios"
import { responseError, responseSuccess } from "../../utils/responseHandle"
import { useForm } from "react-hook-form"
import { ProductModel } from "../../@types/Models"
import { rotasApi } from "../../api/rotasApi"
import Yup from "../../utils/yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useNavigate } from "react-router-dom"
import { routesApp } from "../../routes/RoutesApp"

export const useCreateProduct = () => {
    const navigate = useNavigate()
    const {
        mutate,
        isPending: isLoading,
        status,
    } = useMutation({
        mutationFn: createProduct,
        onSuccess: () => {
            responseSuccess('Produto criado com sucesso!')
            queryClient.refetchQueries({ queryKey: ['products'] })
            navigate(routesApp.listar)
        },
        onError: (erro: AxiosError) => responseError(erro),
    })

    const schema = Yup.object({
        name: Yup.string()
            .required()
            .label('nome'),
        price: Yup.number().min(0).required().label('preço'),
        stock: Yup.number().min(0)
            .required()
            .label('quantidade'),
        description: Yup.string()
            .optional()
            .test('descricao-longa-5000', 'descrição muito longa', (value) => {
                if (value) return value.length <= 5000
                return true
            })
            .label('Description'),
        // email: Yup.string().matches(Regex.EMAIL, 'Email inválido').required().label('Email'),
    })

    type CreateProductSchema = Yup.InferType<typeof schema>

    const context = useForm({
        resolver: yupResolver(schema),
        reValidateMode: 'onChange',
    })

    async function createProduct(data: CreateProductSchema): Promise<ProductModel> {
        const result = await api().post(rotasApi.createProduct, data)
        return result.data.data
    }

    return { mutate, isLoading, context, status }
}