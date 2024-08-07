import React from 'react'
import { LayoutAuth } from './components/LayoutAuth'
import { Flex, FormLabel, Input, Button } from '@chakra-ui/react'
import { routesApp } from '../../routes/RoutesApp'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

interface IFormInput {
    name: string
    taxNumber: string
    mail: string
    phone: string
    password: string
}

export const Cadastro = () => {
    const { register, getValues } = useForm<IFormInput>()
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        axios.post('https://interview.t-alpha.com.br/api/auth/register', data)
            .then(function (response) {
                navigate(routesApp.inicio)
                console.log(response);
            })
            .catch(function (error) {
                console.error(error);
            });

    }

    return (
        <LayoutAuth image='loginBackground.svg'>
            <Flex flexDirection={'column'} gap={'8px'} justifyContent={'center'} h={'100%'}>
                <FormLabel>Usuário</FormLabel>
                <Input {...register("name")} borderColor={'teal'} />
                <FormLabel>CPF/CNPJ</FormLabel>
                <Input {...register("taxNumber")} borderColor={'teal'} />
                <FormLabel>E-mail</FormLabel>
                <Input {...register("mail")} borderColor={'teal'} />
                <FormLabel>Telefone</FormLabel>
                <Input {...register("phone")} borderColor={'teal'} />
                <FormLabel>Senha</FormLabel>
                <Input {...register("password")} type='password' borderColor={'teal'} />
                <Button mt={4}
                    colorScheme='teal'
                    type='submit'
                    onClick={() => onSubmit(getValues())} >
                    Enviar
                </Button>
                <Button mt={4}
                    colorScheme='teal'
                    variant={'outline'}
                    type='submit'
                    onClick={() => navigate(routesApp.inicio)} >
                    Já tenho cadastro
                </Button>
            </Flex>
        </LayoutAuth>

    )
}
