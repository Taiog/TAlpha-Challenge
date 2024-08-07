import { LayoutAuth } from './components/LayoutAuth'
import { Flex, FormLabel, Input, Button, Text } from '@chakra-ui/react'
import { routesApp } from '../../routes/RoutesApp'
import InputMask from 'react-input-mask';
import { useRegister } from '../../hooks/api/auth/useRegister';
import { UserModel } from '../../@types/Models';
import { useNavigate } from 'react-router-dom';


export const Register = () => {
    const {mutate, context, isLoading} = useRegister()
    const {register, handleSubmit} = context
    const navigate = useNavigate()

    const onSubmit = (data: Pick<UserModel, 'name' | 'mail' | 'taxNumber' | 'phone' | 'password'>) => {
        mutate(data)
    }
    return (
        <LayoutAuth image='loginBackground.svg'>
            <form onSubmit={handleSubmit(onSubmit)}>
            <Flex flexDirection={'column'} gap={'8px'} justifyContent={'center'} h={'100%'}>
                <FormLabel>Usuário</FormLabel>
                <Input {...register("name")} borderColor={context.formState.errors.name ? 'red' :'teal'} placeholder='Nome de usuário' />
                {context.formState.errors.name && <Text color={'red'}>{context.formState.errors.name.message as string}</Text>}

                <FormLabel>CPF/CNPJ</FormLabel>
                <Input {...register("taxNumber")} borderColor={context.formState.errors.taxNumber ? 'red' :'teal'} placeholder='000.000.000-00' />
                {context.formState.errors.taxNumber && <Text color={'red'}>{context.formState.errors.taxNumber.message as string}</Text>}

                <FormLabel>E-mail</FormLabel>
                <Input {...register("mail")} borderColor={context.formState.errors.mail ? 'red' :'teal'} placeholder='teste@teste.com' />
                {context.formState.errors.mail && <Text color={'red'}>{context.formState.errors.mail.message as string}</Text>}

                <FormLabel>Telefone</FormLabel>
                <Input {...register("phone")} as={InputMask} mask={'(99) 99999-9999'} borderColor={context.formState.errors.phone ? 'red' :'teal'} placeholder='(XX) X XXXX-XXXX' />
                {context.formState.errors.phone && <Text color={'red'}>{context.formState.errors.phone.message as string}</Text>}

                <FormLabel>Senha</FormLabel>
                <Input {...register("password")} type='password' borderColor={context.formState.errors.password ? 'red' :'teal'} placeholder='*********' />
                {context.formState.errors.password && <Text color={'red'}>{context.formState.errors.password.message as string}</Text>}

                <Button mt={4}
                    colorScheme='teal'
                    type='submit'
                    isLoading={isLoading}>
                    Enviar
                </Button>
                <Button mt={4}
                    colorScheme='teal'
                    variant={'outline'}
                    type='button'
                    onClick={() => navigate(routesApp.inicio)} >
                    Já tenho cadastro
                </Button>
            </Flex>
         </form>
        </LayoutAuth>

    )
}
