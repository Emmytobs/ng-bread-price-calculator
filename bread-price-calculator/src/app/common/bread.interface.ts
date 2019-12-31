export interface IBread {
  name: string;
  sizes: ISize[]
}

export interface ISize {
  sizeName: string;
  purchasePrice: number;
  sellingPrice: number
}
