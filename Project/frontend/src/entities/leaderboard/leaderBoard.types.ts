export interface ILeaderItem {
  readonly id: number
  readonly username: string
  readonly score: string
}

export interface ILeaderDTO {
  data: ILeaderItem[]
};
