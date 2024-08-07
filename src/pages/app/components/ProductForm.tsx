import { Flex, FormLabel, Input, Textarea } from '@chakra-ui/react'
import React from 'react'
import { useFormContext } from 'react-hook-form'

export const ProductForm = () => {
    const context = useFormContext()
    console.log(context.watch())
    return (
        <Flex flexDirection={'column'}>
            <Flex flexDirection={'column'}>
                <FormLabel >Nome</FormLabel>
                <Input borderColor={'teal'} onChange={(e) => context.setValue('name', e.target.value)} defaultValue={context.watch('name')} />
            </Flex>
            <Flex flexDirection={'column'}>
                <FormLabel>Preço</FormLabel>
                <Input borderColor={'teal'} type='number' onChange={(e) => context.setValue('price', Number(e.target.value))} defaultValue={context.watch('price')} />
            </Flex>
            <Flex flexDirection={'column'}>
                <FormLabel>Quantidade</FormLabel>
                <Input borderColor={'teal'} type='number' onChange={(e) => context.setValue('stock', Number(e.target.value))} defaultValue={context.watch('stock')} />
            </Flex>
            <Flex flexDirection={'column'}>
                <FormLabel>Descrição</FormLabel>
                <Textarea borderColor={'teal'} size={'lg'} maxH={'200px'} onChange={(e) => context.setValue('description', e.target.value)} defaultValue={context.watch('description')} />
            </Flex>
        </Flex>
    )
}
