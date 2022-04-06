import "./intro.scss"
import {ExpandMore} from "@material-ui/icons"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro(){

    const textRef=useRef();
    useEffect(()=>{
        init(textRef.current, {
             showCursor: false,
             backDelay : 1500, 
             showCursor: true,
             strings: ['Developer', 'Data Scientist', 'Player😀' ] })
    },[])

    return(
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/IMG_holi.png" alt="" />    
                    
                </div>
            </div>
            <div className="right">
            
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Gaurav Mishra</h1>
                    <h3><span ref={textRef}></span> </h3>    
                </div>
                <div className="material">
                <a href="#portfolio"><ExpandMore/></a>
                </div>
            </div>

        </div>
        )
}