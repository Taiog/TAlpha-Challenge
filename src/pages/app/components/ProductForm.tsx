import { FormLabel, Input, Textarea, Flex, InputGroup, InputLeftAddon, Text } from '@chakra-ui/react'
import { useFormContext } from 'react-hook-form'

export const ProductForm = () => {
    const context = useFormContext()
    return (
        <Flex flexDirection={'column'}>
            <Flex flexDirection={'column'} >
                <FormLabel >Nome</FormLabel>
                <Input borderColor={context.formState.errors.name ? 'red' : 'teal'}  {...context.register('name')}  defaultValue={context.watch('name')} placeholder='Nome do produto' />
                {context.formState.errors.name && <Text color={'red'}>{context.formState.errors.name.message as string}</Text>}
            </Flex>
            <Flex flexDirection={'column'}>
                <FormLabel>Preço</FormLabel>
                <InputGroup borderColor={context.formState.errors.price ? 'red' : 'teal'}>
                    <InputLeftAddon>R$</InputLeftAddon>
                    <Input type='number' {...context.register('price')}  defaultValue={context.watch('price')} placeholder='79,90' />
                </InputGroup>
                {context.formState.errors.price && <Text color={'red'}>{context.formState.errors.price?.message as string}</Text>}
            </Flex>
            <Flex flexDirection={'column'}>
                <FormLabel>Quantidade</FormLabel>
                <Input borderColor={context.formState.errors.stock ? 'red' : 'teal'} {...context.register('stock')} type='number'  defaultValue={context.watch('stock')} placeholder='30' />
                {context.formState.errors.stock && <Text color={'red'}>{context.formState.errors.stock?.message as string}</Text>}
            </Flex>
            <Flex flexDirection={'column'}>
                <FormLabel>Descrição</FormLabel>
                <Textarea borderColor={context.formState.errors.description ? 'red' : 'teal'} {...context.register('description')} size={'lg'} maxH={'200px'} defaultValue={context.watch('description')} placeholder='descrição...' />
                {context.formState.errors.description && <Text color={'red'}>{context.formState.errors.description?.message as string}</Text>}
            </Flex>
        </Flex>
    )
}
