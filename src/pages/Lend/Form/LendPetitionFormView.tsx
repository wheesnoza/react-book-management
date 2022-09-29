import { UseFormReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Button, Grid, MenuItem, Stack, Typography } from '@mui/material';
import DateRangePicker from '@/components/DaterangePicker';
import { Book, LendReceivingMethod } from '@/models';
import { BookCard, Select } from '@/components';
import { onlyNumericValues } from '@/utilities';

export interface LendPetitionForm {
  from: Date;
  range: Date[];
  receivingMethod: LendReceivingMethod;
}

type Props = {
  book: Book;
  form: UseFormReturn<LendPetitionForm>;
  onSubmit: (lend: LendPetitionForm) => void;
};

export const LendPetitionFormView = ({ book, form, onSubmit }: Props) => {
  const { handleSubmit, formState, control } = form;
  const { errors, isSubmitting } = formState;
  const { t } = useTranslation();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12}>
        <Typography variant="h3">{book.title}</Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <BookCard book={book} />
      </Grid>
      <Grid item xs={12} md={8}>
        <Stack component="form" onSubmit={handleSubmit(onSubmit)}>
          <DateRangePicker
            name="range"
            label={t('lend.range')}
            control={control}
            errors={errors}
          />
          <Select
            name="receivingMethod"
            label={t('lend.petition.receivingMethod')}
            control={control}
            defaultValue={0}
          >
            {onlyNumericValues(LendReceivingMethod).map((method) => (
              <MenuItem key={method} value={method}>
                {t(`lend.petition.${method}`)}
              </MenuItem>
            ))}
          </Select>
          <Button variant="contained" type="submit" disabled={isSubmitting}>
            {t('lend.petition.create')}
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default LendPetitionFormView;
