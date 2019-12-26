import { Note } from './Note';

export interface Resp {
  message: string;
  token: string | null;
  notes: Array<Note>;
}
