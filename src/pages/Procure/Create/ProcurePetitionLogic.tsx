import { yupResolver } from '@hookform/resolvers/yup';
import { t } from 'i18next';
import { useForm } from 'react-hook-form';
import { generatePath, useNavigate } from 'react-router-dom';
import ProcurePetitionForm, { ProcureForm } from '../Form/ProcurePetitionForm';
import { AlertLevel, PrivateRoutes, Procure, procureSchema } from '@/models';
import { alert } from '@/services';

interface Props {
  defaultValues: Procure;
  onSubmit: (procure: Procure) => Promise<Procure>;
}

export const ProcurePetitionLogic = ({ defaultValues, onSubmit }: Props) => {
  const navigate = useNavigate();
  const form = useForm<ProcureForm>({
    mode: 'onSubmit',
    defaultValues,
    resolver: yupResolver(procureSchema),
  });

  const handleSubmit = async (procureForm: ProcureForm) => {
    const procure: Procure = {
      ...defaultValues,
      type: procureForm.type,
      body: procureForm.body,
      url: procureForm.url,
      bookId: procureForm.book?.id,
    };
    await onSubmit(procure)
      .then(() => {
        navigate(
          generatePath(PrivateRoutes.BOOK_PROCURE_DETAIL, {
            procureId: procure.id,
          })
        );
        alert.display(t('procure.created'), AlertLevel.Success);
      })
      .catch(() => alert.display(t('error'), AlertLevel.Error));
  };

  return <ProcurePetitionForm form={form} onSubmit={handleSubmit} />;
};

export default ProcurePetitionLogic;