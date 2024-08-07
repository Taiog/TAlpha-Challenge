import { Flex, FlexProps } from "@chakra-ui/react"

export const ContainerDesktopUi = (props: ContainerDesktopUiProps) => {
    return (
        <Flex
            {...props}
            paddingX={70}
            width="100%"
            maxW="1280px"
            margin={'0 auto'}
            h={'100%'}
            overflowX={'hidden'}
        />
    )
}

interface ContainerDesktopUiProps extends FlexProps { }