import { useState } from "react";
import Navbar from "../components/navbar";
import "../styles/home.css";

export default function Home(){
    const [count,setCount]=useState(0)
    const [animate, setAnimate]=useState(false)
    const handleIncrement=()=>{
        startAnimation()
        setCount((prevValue)=>{
            return prevValue+1
        })
    }
    const startAnimation=()=>{
        setAnimate(true)
    }
    const stopAnimation=()=>{
        setAnimate(false)
    }
    const handledecrement=()=>{
        setCount((prevValue)=>{
            return prevValue-1
        })
    }
    return(
        <>
        <Navbar title={"Home Page"}/>
        <h1>Home Pagee</h1>

        <p id="center-text" className={animate ? "scale-text":""} onAnimationEnd={stopAnimation} >{count}</p>
        <div id="button" onClick={handleIncrement}>+</div>

        <div id="button" className="buttonminus" onClick={handledecrement}>-</div>
        </>
    );
}