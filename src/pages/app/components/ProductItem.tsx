import { Flex, Grid, GridItem, Icon } from '@chakra-ui/react'
import { PencilSimple, Trash } from '@phosphor-icons/react'
import React from 'react'

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
        <Grid templateColumns='1fr 1fr 60px 60px 60px' templateAreas={"'name description price stock actions'"} gap={6} w={'100%'} backgroundColor={index % 2 === 0 ? 'white' : '#E3E3E3'} padding={'8px'}>
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
    )
}
