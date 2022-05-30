import { useState } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';

const Password = ({ name, placeholder }) => {
  const { register, errors } = useFormContext();

  const [show, setShow] = useState(false);
  const togglePassword = () => setShow(!show);

  return (
    <>
      <InputGroup>
        <FormControl
          placeholder={placeholder}
          {...register(name)}
          name={name}
          type={show ? 'text' : 'password'}
        />
        <InputGroup.Text
          id='basic-addon2'
          onClick={togglePassword}
          className='cursor-pointer'
        >
          {show ? 'Hide' : 'Show'}
        </InputGroup.Text>
      </InputGroup>
      {errors[name] ? (
        <p className='pt-1 pl-2 text-base text-thin text-danger'>
          {errors[name].message}
        </p>
      ) : null}
      <br />
    </>
  );
};

export default Password;
