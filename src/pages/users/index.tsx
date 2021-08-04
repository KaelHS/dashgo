import { Box, Flex, Heading, Button, Icon, Table,Thead, Tbody, Td, Tr, Th, Checkbox, Text, useBreakpointValue, Spinner } from "@chakra-ui/react";
import { RiAddLine } from "react-icons/ri";
import Link from 'next/link';
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Pagination } from "../../components/Pagination";
import { useEffect } from "react";
import { useQuery } from 'react-query';

export default function UserList() {

    const { data, isLoading, error } = useQuery('users', async () => {

        const response = await fetch('http://localhost:3000/api/users');
        
        const data = await response.json();

        return data;
    })

    const isWideVersion = useBreakpointValue({
        base: false,
        lg:true
    });

    useEffect( () => {
    }, []);

    return(
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />
            <Box flex="1" borderRadius="8" bg="gray.800" p="8">
                <Flex mb="8" justify="space-between" align="center">
                    <Heading size="lg" fontWeight="normal">Usuários</Heading>

                    <Link href="/users/create" passHref>
                        <Button 
                            as="a" 
                            size="sm" 
                            fontSize="sm" 
                            colorScheme="pink"
                            leftIcon={<Icon as={RiAddLine} fontSize="20"/> }>Criar novo usuário</Button>

                    </Link>
                </Flex>
            
                { isLoading ? (
                    <Flex justify="center">
                        <Spinner />
                    </Flex>
                ): error ? (
                    <Flex justify="center">
                        <Text>Falha ao obter os dados do usuário</Text>
                    </Flex>
                ) : (
                    <>
                    <Table colorScheme="whiteAlpha">
                    <Thead>
                        <Tr>
                            <Th px={["4","4","6"]} color="gray.300" w="8">
                                <Checkbox colorScheme="pink" />
                            </Th>
                            <Th>Usuário</Th>
                            { isWideVersion && <Th>Data de cadastro</Th> }
                            <Th w="8"></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td  px="6">
                                <Checkbox colorScheme="pink" />
                            </Td>
                            <Td>
                                <Box>
                                    <Text fontWeight="bold">Kael Silva</Text>
                                    <Text fontSize="sm" color="gray.300">kael_hs@hotmail.com</Text>
                                </Box>
                            </Td>
                            { isWideVersion && <Td> 04 de Abril, 2021</Td>}
                            <Td>
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>

                <Pagination />
                    </>
                ) }


            </Box>
            </Flex>
        </Box>
    );
}