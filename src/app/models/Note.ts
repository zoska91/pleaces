export interface Note {
  createDate: string;
  historyId: number | null;
  id: number;
  planId: number | null;
  roadId: number | null;
  text: string;
  title: string;
  userId: number;
}
