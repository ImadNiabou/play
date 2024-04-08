import Navbar from '@app/Components/Navbar'
import React from 'react'
import SearchResults from './SearchResults'

const SearchPage = ({ params }: { params: { query: string } }) => {
    const query = params.query
  return (
    <>
    <Navbar/>
    <SearchResults query={query} />
    </>
  )
}

export default SearchPage