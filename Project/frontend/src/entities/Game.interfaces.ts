export interface IGameTag {
  [key: string]: {
    isChosen: boolean
    id: number
  };
}

export interface IGameForm {
  fileName: string;
  file: File | null;
  cover: File | null;
  name: string;
  description: string;
  tags: number[];
}

export interface IGameRouteQueries {
  uid: string
  iid: string
  chatid: string
  msgid: string
}
