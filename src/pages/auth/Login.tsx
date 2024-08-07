import { Button, Flex, FormLabel, Input } from '@chakra-ui/react'
import { LayoutAuth } from './components/LayoutAuth'
import { useForm, SubmitHandler } from "react-hook-form"
import { useNavigate } from 'react-router-dom'
import { routesApp } from '../../routes/RoutesApp'
import axios from 'axios'

interface IFormInput {
    taxNumber: string
    password: string
}

const Login = () => {
    const { register, getValues } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        axios.post('https://interview.t-alpha.com.br/api/auth/login', data)
            .then(function (response) {
                navigate(routesApp.listar)
                localStorage.setItem('token', response.data.data.token)
                console.log(response);
            })
            .catch(function (error) {
                console.error(error);
            });

    }
    const navigate = useNavigate()
    return (
        <LayoutAuth image='loginBackground.svg'>
            <Flex flexDirection={'column'} gap={'8px'} justifyContent={'center'} h={'100%'}>
                <FormLabel>CPF/CNPJ</FormLabel>
                <Input {...register("taxNumber")} borderColor={'teal'} placeholder='000.000.000-00' />
                <FormLabel>Senha</FormLabel>
                <Input {...register("password")} type='password' borderColor={'teal'} placeholder='*********' />
                <Button mt={4}
                    colorScheme='teal'
                    type='submit'
                    onClick={() => onSubmit(getValues())} >
                    Entrar
                </Button>
                <Button mt={4}
                    colorScheme='teal'
                    variant={'outline'}
                    type='submit'
                    onClick={() => navigate(routesApp.cadastro)} >
                    Cadastre-se
                </Button>
            </Flex>
        </LayoutAuth>
    )
}

export default Login