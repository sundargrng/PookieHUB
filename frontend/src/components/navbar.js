import { Flex, HStack, Text } from '@chakra-ui/react'

import { useNavigate } from 'react-router-dom';

import { IoPersonCircleOutline } from "react-icons/io5";


const Navbar= () => {

    const nav = useNavigate();

    const handleNavigation = (route) =>{
        nav(`/${route}`)
    }

    return(
        <Flex w='100vw' h='90px' bg='#d4a6cd' justifyContent='center' alignItems='center' color='white'>
            <HStack w='95%' justifyContent='space-between'>
                <Text fontSize='24px' fontWeight='bold'>PookieHUB</Text>
                <HStack>
                    <Text onClick={(route) => handleNavigation('sundargrng')}><IoPersonCircleOutline size='30px' /></Text>
                </HStack>
            </HStack>
        </Flex>
    )
}

export default Navbar;