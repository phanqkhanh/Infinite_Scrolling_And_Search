export interface ProductType {
  title: number
  id: number
  price: number
  images: string[]
}

export interface ResponseProductsType {
  products: ProductType[]
  limit: number
  skip: number
  total: number
}
