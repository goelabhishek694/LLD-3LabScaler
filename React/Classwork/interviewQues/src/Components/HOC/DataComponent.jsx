import React from 'react'

function DataComponent({data}) {
  return (
    <div>
        <h1>Data Loaded</h1>
        <p>{data}</p>
    </div>
  )
}

export default DataComponent