import { Flex, Grid } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import { ContainerDesktopUi } from './ContainerDesktopUi'

export const LayoutUi = () => {
    return (
        <Grid gridTemplateColumns="1fr" height="100vh" overflowY={'hidden'}>
            <Flex maxHeight="100vh" flexDirection="column" overflowY={'auto'}>
                <ContainerDesktopUi>
                    <Flex w={'100%'} h={'100%'} align={'center'} justify={'center'}>
                        <Flex backgroundColor={'#fff'} border={'2px solid teal'} borderRadius={'8px'} w={'600px'} minH={'50%'} align={'center'} flexDirection={'column'} gap={'8px'} padding={'12px'}>
                            <Outlet />
                        </Flex>
                    </Flex>
                </ContainerDesktopUi>
            </Flex>
        </Grid>
    )
}
