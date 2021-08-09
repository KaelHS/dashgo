import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
    showProfileData: boolean;
}

export function Profile({ showProfileData = true} : ProfileProps){
    return(
        <Flex align="center">
            { showProfileData && 
                <Box>
                    <Text mr="4" textAlign="right">Kael Silva</Text>
                    <Text color="gray.300" fontSize="small">kael_hs@hotmail.com</Text>
                </Box>
            }
            <Avatar size="md" name="Kael Silva" src="https://avatars.githubusercontent.com/u/15847423?v=4"/>
        </Flex>
    );
}