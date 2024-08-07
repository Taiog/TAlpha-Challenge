import { Button, Flex, Grid } from '@chakra-ui/react'
import { Outlet, useNavigate } from 'react-router-dom'
import { ContainerDesktopUi } from './ContainerDesktopUi'
import { useEffect } from 'react'
import { routesApp } from '../../routes/RoutesApp'

export const LayoutUi = () => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    useEffect(() => {
        if(!token) navigate(routesApp.inicio)
    }, [token])

    return (
        <Grid gridTemplateColumns="1fr" height="100vh" overflowY={'hidden'}>
            <Flex maxHeight="100vh" flexDirection="column" overflowY={'auto'}>
                <ContainerDesktopUi>
                    <Flex w={'100%'} h={'100%'} align={'center'} justify={'center'} flexDirection={'column'} gap={'12px'}>
                        <Flex backgroundColor={'#fff'} border={'2px solid teal'} borderRadius={'8px'} w={'650px'} maxH={'50%'} align={'center'} flexDirection={'column'} gap={'8px'} padding={'12px'} overflowY={'auto'}>
                            <Outlet />
                        </Flex>
                        <Button colorScheme='red'
                            w={'140px'}
                            type='submit'
                            onClick={() => {
                                localStorage.removeItem('token')
                                navigate(routesApp.inicio)
                            }}
                            >
                                Logout
                        </Button>
                    </Flex>
                </ContainerDesktopUi>
            </Flex>
        </Grid>
    )
}
