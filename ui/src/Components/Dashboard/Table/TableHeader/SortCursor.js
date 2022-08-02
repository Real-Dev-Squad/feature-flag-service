import {useState} from "react"

export default function SortCursor(props){

    const[currentClickedCursor,setcurrentClickedCursor] = useState('')

    const onClickUpArrow = () =>{
        setcurrentClickedCursor("UP")
        props.handleSorting("ascending")
    }
    const onClickDownArrow = () =>{
        setcurrentClickedCursor("DOWN")
        props.handleSorting("descending")
    }

    return(
    <div>
        <div className={"up-arrow"+(currentClickedCursor=="UP" ? "-clicked":"")} onClick={onClickUpArrow}>
    
        </div>
        <div className={"down-arrow"+(currentClickedCursor=="DOWN" ? "-clicked":"")} onClick={onClickDownArrow}>
    
        </div>
      </div>
      )
}