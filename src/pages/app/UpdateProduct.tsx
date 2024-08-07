import { useEffect } from 'react'
import { useUpdateProduct } from '../../hooks/api/useUpdateProduct'
import { useNavigate, useParams } from 'react-router-dom'
import { Divider, Flex, Button, Text } from '@chakra-ui/react'
import { FormProvider } from 'react-hook-form'
import { ProductModel } from '../../@types/Models'
import { ProductForm } from './components/ProductForm'
import { useGetOneProduct } from '../../hooks/api/useGetOneProduct'

export const UpdateProduct = () => {
    const { mutate, context, isLoading } = useUpdateProduct()
    const { id } = useParams()
    const navigate = useNavigate()
    const { data } = useGetOneProduct(id)

    const onSubmit = (data: Pick<ProductModel, 'name' | 'price' | 'stock' | 'description'>) => {
        mutate(data)
    }

    useEffect(() => {
        if (!data) return
        context.setValue('name', data.product.name)
        context.setValue('price', data.product.price)
        context.setValue('stock', data.product.stock)
        context.setValue('description', data.product.description)
    }, [data])

    console.log(context.watch())
    return (
        <>
            <Text fontSize={'large'} color={'teal'} fontWeight={'bold'} >Atualizar produto</Text>
            <Divider />
            <FormProvider {...context}>
                <Flex flexDirection={'column'} gap={'12px'} justifyContent={'center'} h={'100%'}>
                    <ProductForm />
                    <Flex align={'center'} justifyContent={'space-between'} gap={'8px'}>
                        <Button
                            colorScheme='teal'
                            w={'100%'}
                            variant={'outline'}
                            type='submit'
                            onClick={() => navigate(-1)}>
                            Voltar
                        </Button>
                        <Button
                            colorScheme='teal'
                            w={'100%'}
                            type='submit'
                            isLoading={isLoading}
                            onClick={() => onSubmit(context.getValues())} >
                            Enviar
                        </Button>
                    </Flex>
                </Flex>
            </FormProvider>
        </>
    )
}
