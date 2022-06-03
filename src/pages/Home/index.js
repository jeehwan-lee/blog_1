import React, { useState } from 'react'
import BlogList from '../../components/Home/BlogList'
import Header from '../../components/Home/Header'
import SearchBar from '../../components/Home/SearchBar'
import { blogList } from '../../config/data'

function Home() {

  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState('');

  return (
    <div>
        {/*Page Header */}
        <Header/>

        {/* Search bar */}
        <SearchBar/>

        {/* blogList */}
        <BlogList blogs={blogs}/>
    </div>
  )
}

export default Home