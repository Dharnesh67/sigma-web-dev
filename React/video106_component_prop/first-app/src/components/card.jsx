import React from 'react'

const Card = (props) => {
    return (
        <>
            <div>
                <div className="card" style={{width:"240px", height:"240px", overflow:"hidden"}}>
                    <img src="./public/vite.svg" alt=""  style={{width:"140px", height:"140px"  }} />
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </div>
            </div>
        </>
    )
}

export default Card
