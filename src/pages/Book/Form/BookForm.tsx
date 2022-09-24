import { useTranslation } from 'react-i18next';
import { Button, MenuItem, Stack } from '@mui/material';
import { UseFormReturn } from 'react-hook-form';
import { Input, Select } from '@/components';
import { InputType } from '@/components/Input';
import { Book, BookStatus } from '@/models';

interface Props {
  form: UseFormReturn<Book>;
  onSubmit: (book: Book) => void;
}

export const BookForm = ({ form, onSubmit }: Props) => {
  const { register, handleSubmit, formState, control } = form;
  const { errors, isSubmitting } = formState;
  const { t } = useTranslation();

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
      <Select
        id="book-status"
        name="status"
        label={t('book.status')}
        control={control}
        defaultValue={BookStatus.AVAILABLE}
      >
        {Object.values(BookStatus).map((status) => (
          <MenuItem key={status} value={status}>
            {t(`book.status_${status}`)}
          </MenuItem>
        ))}
      </Select>
      <Button variant="contained" type="submit" disabled={isSubmitting}>
        Post
      </Button>
    </Stack>
  );
};

export default BookForm;
