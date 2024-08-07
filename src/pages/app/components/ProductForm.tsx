import { FormLabel, Input, Textarea, Flex, InputGroup, InputLeftAddon } from '@chakra-ui/react'
import { useFormContext } from 'react-hook-form'

export const ProductForm = () => {
    const context = useFormContext()
    console.log(context.formState.errors)
    return (
        <Flex flexDirection={'column'}>
            <Flex flexDirection={'column'} >
                <FormLabel >Nome</FormLabel>
                <Input isRequired borderColor={'teal'} onChange={(e) => context.setValue('name', e.target.value)} defaultValue={context.watch('name')} placeholder='Nome do produto' />
            </Flex>
            <Flex flexDirection={'column'}>
                <FormLabel>Preço</FormLabel>
                <InputGroup borderColor={'teal'}>
                    <InputLeftAddon>R$</InputLeftAddon>
                    <Input type='number' onChange={(e) => context.setValue('price', Number(e.target.value))} defaultValue={context.watch('price')} placeholder='79,90' />
                </InputGroup>
            </Flex>
            <Flex flexDirection={'column'}>
                <FormLabel>Quantidade</FormLabel>
                <Input borderColor={'teal'} type='number' onChange={(e) => context.setValue('stock', Number(e.target.value))} defaultValue={context.watch('stock')} placeholder='30' />
            </Flex>
            <Flex flexDirection={'column'}>
                <FormLabel>Descrição</FormLabel>
                <Textarea borderColor={'teal'} size={'lg'} maxH={'200px'} onChange={(e) => context.setValue('description', e.target.value)} defaultValue={context.watch('description')} placeholder='descrição...' />
            </Flex>
        </Flex>
    )
}
