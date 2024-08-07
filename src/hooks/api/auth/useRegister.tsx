import { yupResolver } from "@hookform/resolvers/yup"
import { useMutation } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { responseSuccess, responseError } from "../../../utils/responseHandle"
import Yup from "../../../utils/yup"
import { routesApp } from "../../../routes/RoutesApp"
import { Regex } from "../../../utils/Regex"
import { UserModel } from "../../../@types/Models"
import { rotasApi } from "../../../api/rotasApi"
import { api } from "../../../api/api"

export const useRegister = () => {
    const navigate = useNavigate()
  
    const { mutate, isPending: isLoading } = useMutation({
      mutationFn: Register,
      onSuccess: () => {
        responseSuccess(`conta criada com sucesso!`)
        navigate(routesApp.inicio)
      },
      onError: (erro: AxiosError) => responseError(erro),
    })
  
    const cadastroSchema = Yup.object({
      name: Yup.string().required().label('Usuário'),
      taxNumber: Yup.string().required().label('Cpf ou Cnpj'),
      mail: Yup.string().matches(Regex.EMAIL, 'Email inválido').required().label('Email'),
      phone: Yup.string().matches(Regex.CELULAR_MASCARA, 'Telefone inválido').required().label('Telefone'),
      password: Yup.string().required().label('Senha'),
    })
  
    type RegisterSchema = Yup.InferType<typeof cadastroSchema>
  
    async function Register(data: RegisterSchema): Promise<UserModel> {
      const result = await api().post(rotasApi.register, data)
      return result.data.data
    }
  
    const context = useForm({
      resolver: yupResolver(cadastroSchema),
      reValidateMode: 'onChange',
    })
  
    return { mutate, isLoading, context }
  }