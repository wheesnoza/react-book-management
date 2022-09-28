import { yupResolver } from '@hookform/resolvers/yup';
import { omit } from 'lodash';
import { v4 as uuid } from 'uuid';
import { t } from 'i18next';
import { useForm } from 'react-hook-form';
import { generatePath, useNavigate } from 'react-router-dom';
import ProcurePetitionFormView, {
  ProcureForm,
} from '../Form/ProcurePetitionFormView';
import { AlertLevel, PrivateRoutes, Procure, procureSchema } from '@/models';
import { alert } from '@/services';

interface Props {
  onSubmit: (procure: Procure) => Promise<Procure>;
}

export const ProcurePetitionLogic = ({ onSubmit }: Props) => {
  const navigate = useNavigate();
  const form = useForm<ProcureForm>({
    mode: 'onSubmit',
    resolver: yupResolver(procureSchema),
  });

  const handleSubmit = async (procureForm: ProcureForm) => {
    const procure: Procure = {
      id: uuid(),
      bookId: procureForm.book?.id,
      ...omit(procureForm, 'book'),
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
      .catch(() => alert.displayError());
  };

  return <ProcurePetitionFormView form={form} onSubmit={handleSubmit} />;
};

export default ProcurePetitionLogic;
