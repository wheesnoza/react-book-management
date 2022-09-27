import { v4 as uuid } from 'uuid';
import ProcurePetitionLogic from './ProcurePetitionLogic';
import { Procure, ProcureType } from '@/models';

const defaultProcure = {
  id: uuid(),
  type: ProcureType.BOOK_PROCURE,
  body: '',
  url: '',
};

export const ProcurePetition = () => {
  const handleSubmit = (procure: Procure) => {
    return fetch('/api/procures', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(procure),
    }).then((response) => response.json());
  };

  return (
    <ProcurePetitionLogic
      defaultValues={defaultProcure}
      onSubmit={handleSubmit}
    />
  );
};

export default ProcurePetition;
