import { Button, Stack } from '@mui/material';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import yup from '@/locales/yup.locale';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '@/components';
import { InputType } from '@/components/Input';

type Inputs = {
  title: string;
};

export const CreateLendPetition = () => {
  const [value, setValue] = useState(null);

  const schema = yup.object({
    title: yup.string().required().label('タイトル'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: Inputs) => {
    console.log(data);
  };

  return (
    <Stack component="form" onSubmit={handleSubmit(onSubmit)}>
      <Input
        register={register}
        errors={errors}
        type={InputType.TEXT}
        name="title"
        label="Title"
      />
      <Button variant="contained" type="submit">
        Post
      </Button>
    </Stack>
  );
};

export default CreateLendPetition;
