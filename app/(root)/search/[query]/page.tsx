import Navbar from '../../../Components/Navbar'
import SearchResults from '../../../Components/SearchResults'

const SearchPage = ({ params }: { params: { query: string } }) => {
  const query = params.query
  
  return (
    <>
      <Navbar />
      <SearchResults query={query} />
    </>
  )
}

export default SearchPage