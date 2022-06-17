export interface IGameTag {
  [key: string]: {
    isChosen: boolean
    id: number
  };
}

export interface IGameFormX {
  fileName: string;
  file_id: number | null;
  cover: File | null;
  name: string;
  description: string;
  tags: string[];
}

export interface IGameForm {
  fileName: string;
  file_id: number | null;
  cover: File | null;
  name: string;
  description: string;
  tags: string;
}

export interface IGameRouteQueries {
  uid: string
  iid: string
  chatid: string
  msgid: string
}
