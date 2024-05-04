import React from 'react'
import './card.css'
const Card = (props) => {
  return (
    <>
      <div className="b">
        <div className="card">
          <div className="card-header">
            <h2>{props.id}</h2>
          </div>
          <div className="card-header">
            <h2>{props.userId}</h2>
          </div>
          <div className="card-header">
            <h2>{props.title}</h2>
          </div>
          <div className="card-body">
            {props.body}
          </div>
          <div className="card-footer">
            <button>Click Me</button>
          </div>
        </div>
      </div>
      </>

  )
}

export default Card
