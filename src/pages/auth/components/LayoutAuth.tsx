import { Grid, Flex, Image } from '@chakra-ui/react'
import { ReactNode } from 'react'

export const LayoutAuth = (props: { children: ReactNode, image: string }) => {
    return (
        <Grid
            height="100%"
            minH="100dvh"
            background={'Background'}
            gridTemplateColumns={{ base: '1fr', lg: '1.5fr 1fr' }}
        >
            <Flex margin={'0 auto'} padding={'50px'} display={{ base: 'none', lg: 'flex' }}>
                <Image src={props.image} alt="Logo" h="50%" minW="523px" objectFit="cover" alignSelf={'center'} />
            </Flex>
            <Flex
                flexDirection={'column'}
                gap={'8px'}
                height="100%"
                width="100%"
                padding={'15px 30px'}
                alignItems="center"
                backgroundColor={'#D9D9D9'}
            >
                {props.children}
            </Flex>
        </Grid>
    )
}
