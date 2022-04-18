export interface IGameTag {
  [key: string]: boolean;
}

export interface IGameForm {
  fileName: string;
  file: File | null;
  cover: File | null;
  name: string;
  description: string;
  tags: IGameTag;
}
