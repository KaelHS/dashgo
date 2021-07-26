import { Flex, Button, Stack } from '@chakra-ui/react';
import { Input } from '../components/Form/Input';
import { SubmitHandler, useForm } from 'react-hook-form';

type SignInFormData = {
  email: string;
  password: string;
}
export default function SignIn() {

  const { register, handleSubmit, formState } = useForm();

  const handleSignIn: SubmitHandler<SignInFormData> = (values) => {

  }

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
          borderRadius={8}
          onSubmit={handleSubmit(handleSignIn)}>
            <Stack spacing="4">
              <Input 
                name="email" 
                label="E-mail" 
                type="email"
                {...register('email')} />
              <Input 
                name="password" 
                label="Senha" 
                type="password" 
                {...register('password')}/>
            </Stack>
            <Button
                type="submit"
                mt="6"
                colorScheme="pink"
                size="lg"
                isLoading={formState.isSubmitting}>Entrar</Button>
        </Flex>
    </Flex>
  );
}
