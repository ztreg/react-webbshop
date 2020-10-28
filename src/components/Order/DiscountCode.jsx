import React from 'react'

export default function DiscountCode(props) {

  function handleCodeChange (e) {
    props.setDiscountCode(e.target.value)
  }

  return (
    <form>
      <div className="form-group">
        <label>DiscountCode: <input type="code" className="form-control" name="code" onChange={handleCodeChange}></input></label>
      </div>
    </form>
  
  )
}
