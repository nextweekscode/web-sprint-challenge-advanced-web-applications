import React, { useState, useEffect} from "react"


import Bubbles from './Bubbles'
import ColorList from './ColorList'


import { fetchColorsApi } from "../api/fetchColorsApi"

const BubblePage = () => {
    const [colorList, setColorList] = useState([])
   

    const getColors = () => {
        fetchColorsApi()
        .then(res => {
            setColorList(res.data)
        })
        .catch(err => {
            console.log(err, "FAILURE NO COLORS")
        })

    }


useEffect(() => {
 getColors()
}, [setColorList])

return (
    <>
    <ColorList colors={colorList} updateColors={setColorList} />
    <Bubbles colors={colorList} />
    </>
)
}

export default BubblePage
