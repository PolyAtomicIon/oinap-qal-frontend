export interface ICategoryData {
  readonly id: number
  readonly name: string
  readonly icon: string
}

export interface ICategoryDTO {
  data: ICategoryData[]
};
