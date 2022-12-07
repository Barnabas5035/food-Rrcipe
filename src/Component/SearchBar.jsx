import React from 'react'

const SearchBar = ({ value, loading, handleSubmit, onChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={value}
        disabled={loading}
        onChange={onChange}
        placeholder='search Recipes'
        className='form-control'
      />
      <input
        type='submit'
        disabled={loading || !value}
        className='btn'
        value='search'
      />
    </form>
  )
}

export default SearchBar
