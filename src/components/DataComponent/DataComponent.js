// src/components/DataComponent.js
import React from 'react'
import useSWR from 'swr'
import fetcher from '../../utils/fetcher' // Import fetcher from the utils folder

const DataComponent = () => {
  const { data, error } = useSWR(
    'https://jsonplaceholder.typicode.com/comments',
    fetcher,
  )

  if (error) return <div>Failed to load data</div>
  if (!data) return <div>Loading...</div>

  return (
    <div>
      <h1>Data Loaded</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default DataComponent
