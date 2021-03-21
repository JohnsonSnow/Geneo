import React from 'react'
import axios from 'axios'

const TestAxios = ({ url }) => {
  const [data, setData] = React.useState([])

  const fetchData = async () => {
     await axios.get(url).then(response => {
      setData(response.data.blogPosts)    
    })
 }     
 console.log(data)
 return (
    <>
        <button onClick={fetchData} data-testid="fetch-data">Load Data</button>
        { data.length > 0 ?
            <div data-testid="show-data">{data.map(data => data.id)}</div>:
            <h1 data-testid="loading">Loading...</h1>
        }
    </>
 )
}

export default TestAxios