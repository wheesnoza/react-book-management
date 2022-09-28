import ProcurePetitionLogic from './ProcurePetitionLogic';
import { Procure } from '@/models';

export const ProcurePetition = () => {
  const handleSubmit = (procure: Procure) => {
    return fetch('/api/procures', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(procure),
    }).then((response) => response.json());
  };

  return <ProcurePetitionLogic onSubmit={handleSubmit} />;
};

export default ProcurePetition;
