import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, MenuItem, Stack } from '@mui/material';
import { UseFormReturn } from 'react-hook-form';
import { Input, Select } from '@/components';
import { InputType } from '@/components/Input';
import { Book, ProcureType } from '@/models';
import { onlyNumericValues } from '@/utilities';
import { bookAdapter } from '@/adapters';
import { alert } from '@/services';
import Autocomplete, { AutocompleteOptions } from '@/components/Autocomplete';
import { useBoolean } from '@/hooks';

export interface ProcureForm {
  type: ProcureType;
  body: string;
  url: string;
  book?: { id: string; label: string };
}

interface Props {
  form: UseFormReturn<ProcureForm>;
  onSubmit: (procure: ProcureForm) => void;
}

export const ProcurePetitionFormView = ({ form, onSubmit }: Props) => {
  const { register, handleSubmit, formState, control, watch, resetField } =
    form;
  const { errors, isSubmitting } = formState;
  const { t } = useTranslation();
  const typeWatch = watch('type');
  const [isReprocure, { on: setToreprocure, off: setToprocure }] =
    useBoolean(false);
  const [bookOptions, setBookOptions] = useState<AutocompleteOptions[]>([]);

  useEffect(() => {
    if (typeWatch === ProcureType.BOOK_REPROCURE) {
      fetch('/api/books')
        .then((response) => response.json())
        .then((data) => data.map(bookAdapter))
        .then((books) =>
          books.map((book: Book) => ({ label: book.title, id: book.id }))
        )
        .then(setBookOptions)
        .then(setToreprocure)
        .catch(() => alert.displayError());
      return;
    }

    resetField('book');
    setToprocure();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeWatch]);

  return (
    <Stack component="form" onSubmit={handleSubmit(onSubmit)}>
      <Select
        id="procure-type"
        name="type"
        label={t('procure.type')}
        control={control}
        defaultValue={ProcureType.BOOK_PROCURE}
      >
        {onlyNumericValues(ProcureType).map((type) => (
          <MenuItem key={type} value={type}>
            {t(`procure.type_${type}`)}
          </MenuItem>
        ))}
      </Select>
      {isReprocure && (
        <Autocomplete
          name="book"
          errors={errors}
          label={t('procure.book')}
          control={control}
          defaultValue={bookOptions[0]}
          options={bookOptions}
        />
      )}
      <Input
        register={register}
        errors={errors}
        type={InputType.TEXT}
        name="body"
        label={t('procure.body')}
      />
      <Input
        register={register}
        errors={errors}
        type={InputType.TEXT}
        name="url"
        label={t('procure.url')}
      />
      <Button variant="contained" type="submit" disabled={isSubmitting}>
        Post
      </Button>
    </Stack>
  );
};

export default ProcurePetitionFormView;
