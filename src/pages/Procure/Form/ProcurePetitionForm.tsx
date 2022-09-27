import { useTranslation } from 'react-i18next';
import { Button, MenuItem, Stack } from '@mui/material';
import { UseFormReturn } from 'react-hook-form';
import { Input, Select } from '@/components';
import { InputType } from '@/components/Input';
import { Procure, ProcureType } from '@/models';
import { onlyNumericValues } from '@/utilities';

interface Props {
  form: UseFormReturn<Procure>;
  onSubmit: (procure: Procure) => void;
}

export const ProcurePetitionForm = ({ form, onSubmit }: Props) => {
  const { register, handleSubmit, formState, control } = form;
  const { errors, isSubmitting } = formState;
  const { t } = useTranslation();

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

export default ProcurePetitionForm;
