import axios from 'axios';
import ProcurePetitionLogic from './ProcurePetitionLogic';
import { Procure } from '@/models';

export const ProcurePetition = () => {
  const handleSubmit = (procure: Procure) => {
    return axios
      .post<Procure>('/api/procures', procure)
      .then((response) => response.data);
  };

  return <ProcurePetitionLogic onSubmit={handleSubmit} />;
};

export default ProcurePetition;
