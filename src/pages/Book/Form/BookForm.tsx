import { Button, Stack } from '@mui/material';
import { t } from 'i18next';
import { UseFormReturn } from 'react-hook-form';
import { Input } from '@/components';
import { InputType } from '@/components/Input';
import { Book } from '@/models';

interface Props {
  form: UseFormReturn<Book>;
  onSubmit: (book: Book) => void;
}

export const BookForm = ({ form, onSubmit }: Props) => {
  const { register, handleSubmit, formState } = form;
  const { errors, isSubmitting } = formState;

  return (
    <Stack component="form" onSubmit={handleSubmit(onSubmit)}>
      <Input
        register={register}
        errors={errors}
        type={InputType.TEXT}
        name="title"
        label={t('book.title')}
      />
      <Input
        register={register}
        errors={errors}
        type={InputType.TEXT}
        name="description"
        label={t('book.description')}
      />
      <Input
        register={register}
        errors={errors}
        type={InputType.NUMBER}
        name="stock"
        label={t('book.stock')}
      />
      <Input
        register={register}
        errors={errors}
        type={InputType.TEXT}
        name="status"
        label={t('book.status')}
      />
      <Button variant="contained" type="submit" disabled={isSubmitting}>
        Post
      </Button>
    </Stack>
  );
};

export default BookForm;
