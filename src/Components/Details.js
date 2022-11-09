import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Post from './Post';

const Details = () => {


    const [logindata, setLoginData] = useState([]);
    // console.log(logindata)

    const history = useNavigate();
    const detailData = () => {
        const getuser = localStorage.getItem("user_login");
        if (getuser && getuser.length) {
            const user = JSON.parse(getuser);
            setLoginData(user);
        }
    }
    useEffect(() => {
        detailData();
    }, [])

    const userlogout = () => {
        localStorage.removeItem("user_login")
        history("/");
    }


    return (
        <>
            {
                logindata.length === 0 ? "error" :
                    <div className="d-flex justify-content-between align-items-center mx-5 mt-3">
                    <h1>hii ... {logindata[0].uname}</h1>
                        <button className="btn btn-success" onClick={userlogout}>LogOut</button>
                    </div>
            }

           
            <Post/>
        </>

    )
}

export default Details
