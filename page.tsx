 import React from "react"
 
 const Card = (props) => {
     return(
        <div>
            <h1>Entry Cart</h1>
            <p>Name:{props.name}</p>
            <p>Roll No:{props.rollno}</p>
            <p>Day:{props.day}</p>
        </div>
     )
 }

 export default Card
