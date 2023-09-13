import React, { useEffect, useState } from 'react'
import ProductList from '../components/productList'
import Search from '../components/search'
import InfiniteScroll from 'react-infinite-scroll-component'
import useMyContext from '../hooks/useMyContext'
import { ResponseProductsType } from '../types/product.type'
import useQueryParams from '../hooks/useQueryParams'
import { QueryParamsType } from '../types/request.type'
import { useLocation } from 'react-router-dom'
import config from '../constants/config'

export default function Home() {
  const queryParams: QueryParamsType = useQueryParams() //lấy giá trị query
  const isSearch = Boolean(queryParams.name) //kiểm tra xem có đang tìm kiếm không

  const [skip, setSkip] = useState(0)
  const [dataEnd, setDataEnd] = useState(false) // kiểm tra xem hết sản phẩm trên server chưa
  const { setProducts, products } = useMyContext()
  const location = useLocation()

  // lấy tiếp danh sách sản phẩm  thep skip
  const fetchMoreData = () => {
    const url = `${config.baseUrl}/products?limit=20&skip=${skip}&select=title,price,images`
    fetch(url)
      .then((res) => res.json())
      .then((data: ResponseProductsType) => {
        const totalNew = products.length + data.products.length
        setSkip(totalNew)
        if (data.total == totalNew) {
          setDataEnd(true)
        }
        setProducts((prevState) => [...prevState, ...data.products])
      })
      .catch(console.log)
  }

  // lấy danh sách sản phẩm theo form tìm kiếm
  const fetchSearchData = () => {
    const url = `${config.baseUrl}/products/search?q=${queryParams.name}`
    fetch(url)
      .then((res) => res.json())
      .then((data: ResponseProductsType) => {
        setProducts([...data.products])
      })
      .catch(console.log)
  }

  useEffect(() => {
    if (isSearch) {
      fetchSearchData()
    } else {
      fetchMoreData()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])

  return (
    <div>
      <h1>Hi!</h1>
      <Search />
      {isSearch ? (
        <ProductList />
      ) : (
        // thư viện hỗ trợ scroll call api khi cuộn đến cuối danh sách
        <InfiniteScroll
          dataLength={products.length}
          next={fetchMoreData}
          hasMore={true}
          loader={<h5 style={{ margin: '10px 0' }}>{dataEnd ? 'Hết' : 'Đang tải thêm...'}</h5>}
        >
          <ProductList />
        </InfiniteScroll>
      )}
    </div>
  )
}
