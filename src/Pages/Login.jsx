import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FormProvider } from 'react-hook-form';
import Input from '../component/Input';
import Password from '../component/Password';
import { useNavigate } from 'react-router-dom';

const schema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email('Email must be valid')
    .required('Email is required'),
  password: yup.string().trim().required('Password is required'),
});

const defaultValues = {
  email: '',
  password: '',
};

function Login() {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit = (formData) => {
    console.log(formData);
    navigate('/cards');
  };

  return (
    <>
      <Container className='my-container'>
        <FormProvider control={control} register={register} errors={errors}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <h2 className='text-center mb-3'>Login</h2>

            <Input placeholder='Email' label='Email' name='email' />
            <Password placeholder='Password' name='password' />
            <Button type='submit' variant='primary' className='mx-auto d-block'>
              Submit
            </Button>
          </Form>
        </FormProvider>
      </Container>
    </>
  );
}

export default Login;
