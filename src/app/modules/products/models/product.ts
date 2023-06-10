import { IProduct } from "./IProduct"

export class Product {
  id!: number
  title!: string
  description!: string
  price!: number
  discountPercentage!: number
  rating!: number
  stock!: number
  brand!: string
  category!: string
  thumbnail!: string
  images!: string[]
  constructor(data?: IProduct) {
    if (data) {
        for (var property in data) {
            if (data.hasOwnProperty(property))
                (<any>this)[property] = (<any>data)[property];
        }
    }
  }
}

