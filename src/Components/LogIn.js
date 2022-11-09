import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LogIn = () => {

    const history = useNavigate();

    const [input, setInput] = useState({
        email: '',
        password: ''
    })
    // console.log(input)


    const dataInput = (e) => {
        const { value, name } = e.target;
        setInput(() => {
            return {
                ...input,
                [name]: value
            }
        })
    }

    const addData = (e) => {
        e.preventDefault();

        const getuserArr = localStorage.getItem("useryoutube");
        // console.log(getuserArr);

        const {  email, password } = input;

       if (email === "") {
             alert('email field is requred',{
                position: "top-center",
            });
        } else if (!email.includes("@")) {
             alert('plz enter valid email addres',{
                position: "top-center",
            });
        } else if (password === "") {
             alert('password field is requred',{
                position: "top-center",
            });
        } else if (password.length < 5) {
             alert('password length greater five',{
                position: "top-center",
            });
        } else {

            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr);
                const userlogin = userdata.filter((el, k) => {
                    return el.email === email && el.password === password
                });

                if (userlogin.length === 0) {
                    alert("invalid details")
                } else {
                    // console.log("user login succesfulyy");

                    localStorage.setItem("user_login", JSON.stringify(userlogin))

                    history("/details")
                }
            }
        }

    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-5 p-5">
                    <h1 className="text-center mb-4">Login</h1>
                    <form>
                        <div class="mb-3">
                            <input type="email" class="form-control" name="email" onChange={dataInput} placeholder="email" />
                        </div>
                        <div class="mb-3">
                            <input type="password" class="form-control" name="password" onChange={dataInput} placeholder="password" />
                        </div>
                        <button type="submit" class="btn btn-primary w-100" onClick={addData}>Submit</button>
                    </form>
                    <p className='mt-3'>Already have an account <span>SingIp</span> </p>
                </div>
                <div className="col"></div>
            </div>
        </div>
    )
}

export default LogIn
