import { Flex, Button, Stack } from '@chakra-ui/react';
import { Input } from '../components/Form/Input';

export default function SignIn() {
  return (
    <Flex 
      w="100vh" 
      h="100vh" 
      align="center" 
      justifyContent="center"
      >
        <Flex 
          as="form"
          width="100%"
          maxWidth={360}
          bg="gray.800"
          p="8"
          flexDir="column"
          borderRadius={8}>
            <Stack spacing="4">
              <Input name="email" label="E-mail" type="email" />
              <Input name="password" label="Senha" type="password" />
            </Stack>
            <Button
                type="submit"
                mt="6"
                colorScheme="pink"
                size="lg">Entrar</Button>
        </Flex>
    </Flex>
  );
}
