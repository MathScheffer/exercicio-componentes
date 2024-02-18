import React from 'react'

const Radio = ({ option, value, setValue }) => {
  return (
    <label>
      {option}
      <input
        type="radio"
        value={option}
        checked={option === value}
        onChange={({ target }) => setValue(target.value)}
      />
    </label>
  )
}

export default Radio
