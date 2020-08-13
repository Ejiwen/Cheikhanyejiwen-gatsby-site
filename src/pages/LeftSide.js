import React from "react"
import Menu from "./datamdx/Menu"
import IntroLeft from "./datamdx/IntroLeft"
import Contacts from "./datamdx/Contacts"
import Footer from "./datamdx/Footer"
import "../styles/style.css"

const LeftSide = () => {
  return (
    <div className="leftSide">
      <div className="topLeftSide">
        <IntroLeft />
        <Menu />
        <Contacts />
      </div>
      <Footer />
    </div>
  )
}

export default LeftSide
