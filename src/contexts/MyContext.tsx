import { createContext, useState } from 'react'
import { ProductType } from '../types/product.type'

interface AppContextInterface {
  setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>
  products: ProductType[]
}

const initialAppContext: AppContextInterface = {
  setProducts: () => null,
  products: []
}

export const AppContext = createContext<AppContextInterface>(initialAppContext)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState(initialAppContext.products)

  return (
    <AppContext.Provider
      value={{
        setProducts,
        products
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
