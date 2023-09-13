import React, { BaseSyntheticEvent, useState } from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom'
import useQueryParams from '../hooks/useQueryParams'
import { QueryParamsType } from '../types/request.type'

export default function Search() {
  const queryParams: QueryParamsType = useQueryParams()
  const [name, setName] = useState(queryParams.name)
  const navigate = useNavigate()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e: BaseSyntheticEvent<object, unknown, any>) => {
    e.preventDefault()
    if (!name) {
      navigate('/')
      return
    }
    navigate({
      pathname: '/',
      search: createSearchParams({ name: name }).toString()
    })
  }
  return (
    <div>
      <form className='form-search' onSubmit={handleSubmit}>
        <input type='text' placeholder='Nhập tên sản phẩm' value={name} onChange={(e) => setName(e.target.value)} />
        <button type='submit'>Tìm kiếm</button>
      </form>
    </div>
  )
}
