import { faker } from '@faker-js/faker/locale/ja';
import { v4 as uuid } from 'uuid';

export const applications = [...Array(15).keys()].map((value) => ({
  id: uuid(),
  applicant: { name: faker.name.fullName() },
  type: 0,
  applied_at: faker.date.between(`2022/${value}/01`, `2022/${value}/20`),
}));

export const application = {
  id: uuid(),
  applicant: { name: faker.name.fullName() },
  type: 0,
  applied_at: faker.date,
};
