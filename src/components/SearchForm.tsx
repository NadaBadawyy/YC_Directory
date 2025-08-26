import { Search } from 'lucide-react'
import Form from 'next/form'
import ResetButton from './ResetButton'

function SearchForm({query}:{query:string}) {
    
  return (
    <>
      <Form action={'/'} scroll={false} id='form' className='search-input '>
      <input type="text" name='query' defaultValue={query} className="p-5  text-2xl font-semibold outline-0 rounded-full w-full placeholder:font-semibold placeholder:text-black-100" placeholder="Search Startups"/>
           <div className="flex gap-5">

            {query!=''&&<ResetButton/>} 
             <button type="submit" className='search-btn me-5'>
                <Search className='cursor-pointer' />
            </button>
           </div>
           

      
      </Form>
    </>
  )
}

export default SearchForm
