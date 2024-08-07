import { Flex, Grid, GridItem, Icon } from '@chakra-ui/react'
import { PencilSimple, Trash } from '@phosphor-icons/react'
import { Fragment } from 'react/jsx-runtime'

interface ProductItemProps {
    name: string
    description?: string
    price: number
    stock: number
    index: number
    onClickTrash: () => void
    onClickPencil: () => void
}
export const ProductItem = ({ name, description, price, stock, index, onClickTrash, onClickPencil }: ProductItemProps) => {
    return (
        <>
            <Grid
                w={'100%'}
                border={'1px solid'}
                borderColor={'teal'}
                borderRadius={'8px'}
                padding={'8px'}
                gridTemplateColumns={'1fr auto'}
                gridTemplateAreas={'"name actions" "description actions" "price actions" "stock actions" '}
                alignItems={'center'}
                gap={'8px'}
                minH={'76px'}
                display={{ base: 'grid', lg: 'none' }}
            >

                <GridItem gridArea={'name'} >
                    Nome: {name}
                </GridItem>
                <GridItem gridArea={'description'} textOverflow={'ellipsis'} maxW={'145px'} whiteSpace={'nowrap'} overflow={'hidden'}>
                    Descrição: {description}
                </GridItem>
                <GridItem gridArea={'price'}>
                    Preço: {price}
                </GridItem>
                <GridItem gridArea={'stock'}>
                    Qtd: {stock}
                </GridItem>
                <GridItem gridArea={'actions'}>
                    <Flex w={'100%'} h={'100%'} gap={'8px'}>
                        <Icon as={Trash} h={'100%'} onClick={onClickTrash} cursor={'pointer'} color={'red'} />
                        <Icon as={PencilSimple} h={'100%'} onClick={onClickPencil} cursor={'pointer'} />
                    </Flex>
                </GridItem>
            </Grid>
            <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr 60px 60px 60px' }} templateAreas={{ base: "'mobile'", lg: "'name description price stock actions'" }} gap={6} w={'100%'} backgroundColor={index % 2 === 0 ? 'white' : '#E3E3E3'} padding={'8px'} display={{ base: 'none', lg: 'grid' }}>
                <GridItem gridArea={'name'} >
                    {name}
                </GridItem>
                <GridItem gridArea={'description'} textOverflow={'ellipsis'} maxW={'145px'} whiteSpace={'nowrap'} overflow={'hidden'}>
                    {description}
                </GridItem>
                <GridItem gridArea={'price'}>
                    {price}
                </GridItem>
                <GridItem gridArea={'stock'}>
                    {stock}
                </GridItem>
                <GridItem gridArea={'actions'}>
                    <Flex w={'100%'} h={'100%'} gap={'8px'}>
                        <Icon as={Trash} h={'100%'} onClick={onClickTrash} cursor={'pointer'} color={'red'} />
                        <Icon as={PencilSimple} h={'100%'} onClick={onClickPencil} cursor={'pointer'} />
                    </Flex>
                </GridItem>
            </Grid>
        </>
    )
}
