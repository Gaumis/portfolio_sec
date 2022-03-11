import "./intro.scss"
import {ExpandMore} from "@material-ui/icons" 

export default function Intro(){
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
                    <h3>Freelance <span></span> </h3>    
                </div>
                <ExpandMore className="icon"/>
                <a href="#portfolio">
                    
                </a>
            </div>

        </div>
        )
}