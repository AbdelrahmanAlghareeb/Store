import { Product } from "./product"

export class GetAllResponse {
  products!: Product[]
  total!: number
  skip!: number
  limit!: number
}
