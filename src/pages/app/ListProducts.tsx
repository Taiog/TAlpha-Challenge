import { Button, Divider, Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import { ProductItem } from './components/ProductItem'
import { routesApp } from '../../routes/RoutesApp'
import { ProductModel } from '../../@types/Models'
import { useNavigate } from 'react-router-dom'
import { useDeleteProduct } from '../../hooks/api/useDeleteProduct'
import { useGetAllProducts } from '../../hooks/api/useGetAllProducts'

export const ListProducts = () => {
    const { data } = useGetAllProducts()
    const navigate = useNavigate()

    const { mutate } = useDeleteProduct()

    const onDelete = (id: string) => {
        mutate({ id })
    }
    return (
        <>
            <Flex align={'center'} justifyContent={'space-between'} w={'100%'} paddingX={'12px'}>
                <Text fontSize={'large'} color={'teal'} fontWeight={'bold'}>Listagem de produtos</Text>
                <Button
                    colorScheme='teal'
                    variant={'outline'}
                    type='submit'
                    onClick={() => navigate(routesApp.create)}>
                    Cadastrar
                </Button>
            </Flex>
            <Divider />
            <Flex flexDirection={'column'} w={'100%'} gap={{ base: '8px', lg: '0px' }}>
                {data?.products && (
                    <Grid templateColumns='1fr 1fr 60px 60px 60px' templateAreas={"'name description price stock actions'"} gap={6} w={'100%'} padding={'8px'} display={{ base: 'none', lg: 'grid' }}>
                        <GridItem gridArea={'name'} >
                            Nome
                        </GridItem>
                        <GridItem gridArea={'description'} >
                            Descrição
                        </GridItem>
                        <GridItem gridArea={'price'}>
                            Preço
                        </GridItem>
                        <GridItem gridArea={'stock'}>
                            Qtd.
                        </GridItem>
                        <GridItem gridArea={'actions'}>
                            Ações
                        </GridItem>
                    </Grid>
                )}
                <Divider />
                {(data?.products && data?.products?.length > 0) ? data.products?.map((product: ProductModel, index: number) => (
                    <ProductItem {...product} key={product.id} index={index} onClickTrash={() => onDelete(product.id)} onClickPencil={() => {
                        navigate(routesApp.update(product.id))
                    }} />
                )) :
                    <Text>Não há produtos cadastrados!</Text>
                }
            </Flex>
        </>
    )
}
