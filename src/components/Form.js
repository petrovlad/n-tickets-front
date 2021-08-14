import React, {useState, useContext} from "react";

export const Form = () => {
  const [value, setValue] = useState('')

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Input some words"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
    </form>
  )
}