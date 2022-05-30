import { FloatingLabel, FormControl } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';

const Input = ({ name, placeholder, label }) => {
  const { register, errors } = useFormContext();

  return (
    <>
      <FloatingLabel label={label}>
        <FormControl
          placeholder={placeholder}
          name={name}
          {...register(name)}
          className='noShadow'
        />
      </FloatingLabel>
      {errors[name] ? (
        <p className='pt-1 pl-2 text-base text-thin text-danger'>
          {errors[name].message}
        </p>
      ) : null}
      <br />
    </>
  );
};

export default Input;
