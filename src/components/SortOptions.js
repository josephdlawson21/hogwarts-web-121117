import React from 'react'
// import PropTypes from 'prop-types'

const SortOptions = (props) => {
  return (
    <div>
      <button className='name-sort' onClick={props.sortName} >Sort by Name</button>
      <button className='weight-sort' onClick={props.sortWeight} >Sort by Weight</button>
      <button className='greased-filter' onClick={props.filterGreased} >Filter Greased</button>
    </div>
  )
}

export default SortOptions
