import React from "react"
import { useHistory } from "react-router-dom"
import "./homepage.css"

const Homepage = ({setLoginUser}) => {
    const history = useHistory();
    const handleStart = ()=>{
        history.push('/gallery')
    }
    return (
        <div className="cont">
            <div className="button" onClick={() => setLoginUser({})} >Logout</div>

        <div className="homepage">
            <div className="heading">

            <h1>Welcome To Unsplash Clone!</h1>
            <div className="button" onClick={handleStart} >Let's Start</div>
            </div>
            <span className="divider"></span>
            <div className="content">

            <p>Lorem dafwfipsum dolor sit amet,  quaerat aut, ducimus voluptatem odit asperiores neque aspernatur voluptas laudantium ratione, debitis in unde cum eum dicta magni?</p>
            </div>
        </div>
        </div>
    )
}

export default Homepage