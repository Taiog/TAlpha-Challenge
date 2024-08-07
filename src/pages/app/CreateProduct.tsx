import { Flex, Button, Divider, Text } from '@chakra-ui/react'
import { FormProvider } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useCreateProduct } from '../../hooks/api/useCreateProduct'
import { ProductModel } from '../../@types/Models'
import { ProductForm } from './components/ProductForm'


export const CreateProduct = () => {
    const { mutate, context, isLoading } = useCreateProduct()
    const navigate = useNavigate()

    const onSubmit = (data: Pick<ProductModel, 'name' | 'price' | 'stock' | 'description'>) => {
        mutate(data)
    }
    return (
        <>
            <Text fontSize={'large'} color={'teal'} fontWeight={'bold'} >Cadastrar produto</Text>
            <Divider />
            <FormProvider {...context}>
                <form onSubmit={context.handleSubmit(onSubmit)}>
                    <Flex flexDirection={'column'} gap={'12px'} justifyContent={'center'} h={'100%'}>
                        <ProductForm />
                        <Flex align={'center'} justifyContent={'space-between'} gap={'8px'}>
                            <Button
                                colorScheme='teal'
                                w={'100%'}
                                variant={'outline'}
                                type='button'
                                onClick={() => navigate(-1)}>
                                Voltar
                            </Button>
                            <Button
                                colorScheme='teal'
                                w={'100%'}
                                type='submit'
                                isLoading={isLoading}
                                >
                                Enviar
                            </Button>
                        </Flex>
                    </Flex>
                </form>
            </FormProvider>
        </>
    )
}
