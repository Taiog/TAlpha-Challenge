import { yupResolver } from "@hookform/resolvers/yup"
import { useMutation } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { api } from "../../../api/api"
import { responseSuccess, responseError } from "../../../utils/responseHandle"
import Yup from "../../../utils/yup"
import { routesApp } from "../../../routes/RoutesApp"
import { rotasApi } from "../../../api/rotasApi"

export const useLogin = () => {
    const navigate = useNavigate()
  
    const { mutate, isPending: isLoading } = useMutation({
      mutationFn: signIn,
      onSuccess: async (data) => {
        if (data?.token) localStorage.setItem('token', data.token)
        responseSuccess(`Login realizado!`)
  
        navigate( routesApp.list)
      },
      onError: (erro: AxiosError) => responseError(erro),
    })
  
    const loginSchema = Yup.object({
      taxNumber: Yup.string().required().label('Email'),
      password: Yup.string().required().label('senha'),
    })
  
    type LoginSchema = Yup.InferType<typeof loginSchema>
  
    async function signIn(data: LoginSchema) {
      const result = await api().post(rotasApi.login, data)
      return result.data.data
    }
  
    const loginContext = useForm({
      resolver: yupResolver(loginSchema),
      reValidateMode: 'onChange',
    })
  
    return { mutate, isLoading, loginContext }
  }