import { Box, VStack } from "@chakra-ui/react";

import Navbar from './navbar'

const Layout = ({children}) => {
    return(
        <VStack w='100vw' minH='100vw' bg='#fcfcfc'>
            <Navbar />
            <Box w='100%'>
                {children}
            </Box>
        </VStack>
    )
}

export default Layout;