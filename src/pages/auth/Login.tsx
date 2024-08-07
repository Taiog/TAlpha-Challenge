import { Button, Flex, FormLabel, Input, Text } from '@chakra-ui/react'
import { LayoutAuth } from './components/LayoutAuth'
import { useNavigate } from 'react-router-dom'
import { routesApp } from '../../routes/RoutesApp'
import { useLogin } from '../../hooks/api/auth/useLogin'
import { UserModel } from '../../@types/Models'


const Login = () => {
    const {mutate, loginContext, isLoading} = useLogin()
    const {register, handleSubmit} = loginContext
    const navigate = useNavigate()

    const onSubmit = (data: Pick<UserModel, 'taxNumber' | 'password'>) => {
        mutate(data)
    }
    return (
        <LayoutAuth image='loginBackground.svg'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Flex flexDirection={'column'} gap={'8px'} justifyContent={'center'} h={'100%'}>
                    <FormLabel>CPF/CNPJ</FormLabel>
                    <Input {...register("taxNumber")} borderColor={'teal'} placeholder='000.000.000-00' />
                    {loginContext.formState.errors.taxNumber && <Text color={'red'}>{loginContext.formState.errors.taxNumber.message as string}</Text>}

                    <FormLabel>Senha</FormLabel>
                    <Input {...register("password")} type='password' borderColor={'teal'} placeholder='*********' />
                    {loginContext.formState.errors.password && <Text color={'red'}>{loginContext.formState.errors.password.message as string}</Text>}

                    <Button mt={4}
                        colorScheme='teal'
                        type='submit'
                        isLoading={isLoading}
                        >
                        Entrar
                    </Button>
                    <Button mt={4}
                        colorScheme='teal'
                        variant={'outline'}
                        type='button'
                        onClick={() => navigate(routesApp.cadastro)} >
                        Cadastre-se
                    </Button>
                </Flex>
            </form>
        </LayoutAuth>
    )
}

export default Login