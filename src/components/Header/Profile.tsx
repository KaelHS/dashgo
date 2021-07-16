import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

export function Profile(){
    return(
        <Flex align="center">
            <Box>
                <Text mr="4" textAlign="right">Kael Silva</Text>
                <Text color="gray.300" fontSize="small">kael_hs@hotmail.com</Text>
            </Box>
            <Avatar size="md" name="Kael Silva" src="https://github.com/KaelHS.jpg"/>
        </Flex>
    );
}