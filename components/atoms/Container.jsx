import React from "react"
import '../../app/globals.css'


function Container({ children }) {
    return (
      <div className="container_main px-[9%]">{children}</div>
    )
  }
  
  export default Container