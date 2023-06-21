import React from 'react'
import "./nopage.css"
import MetaData from '../Layout/MetaData'

function Nopage() {
  return (<>
    <MetaData title='Not found' />
    <div className='nopage padding'>
      <h2>Page Not Found</h2>
    </div>
  </>
  )
}

export default Nopage
