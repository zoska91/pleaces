import { Note } from './Note';
import { Plan } from './Plan';

export interface Resp {
  message: string;
  token: string | null;
  notes: Array<Note>;
  plans: Array<Plan>;
  history: Array<Plan>;
}
