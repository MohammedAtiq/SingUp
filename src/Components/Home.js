import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Home = () => {
    const [input, setInput] = useState({
        fname: '',
        lname: '',
        uname: '',
        email: '',
        password: '',
        cpassword: ''
    })
    // console.log(input)

    const history = useNavigate();

    const [data] = useState([])

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

        const { fname,uname, lname, email, password,cpassword } = input;

        if (fname === "") {
            alert(' name field is requred!', {
                position: "top-center",
            });
        } else if (email === "") {
            alert('email field is requred', {
                position: "top-center",
            });
        } else if (!email.includes("@")) {
            alert('plz enter valid email addres', {
                position: "top-center",
            });
        } else if (uname === "") {
            alert('date field is requred', {
                position: "top-center",
            });
        }else if (lname === "") {
            alert('date field is requred', {
                position: "top-center",
            });
        }  else if (password === "") {
            alert('password field is requred', {
                position: "top-center",
            });
        } else if (password.length < 5) {
            alert('password length greater five', {
                position: "top-center",
            });
        } else if (password.length !== cpassword.length){
            alert('conform password incorrect');
        }else {
            // console.log("data added succesfully");
            history("/login")
            localStorage.setItem("useryoutube", JSON.stringify([...data, input]));

        }

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-5 p-5">
                    <h1 className="text-center mb-4">Sing Up</h1>
                    <form>
                        <div class="mb-3 ">
                            <input type="text" class="form-control" name="fname" onChange={dataInput} placeholder="F Name" />
                        </div>
                        <div class="mb-3">
                            <input type="text" class="form-control" name="lname" onChange={dataInput} placeholder="L Name" />
                        </div>
                        <div class="mb-3">
                            <input type="text" class="form-control" name="uname" onChange={dataInput} placeholder="user Name" />
                        </div>
                        <div class="mb-3">
                            <input type="email" class="form-control" name="email" onChange={dataInput} placeholder="email" />
                        </div>
                        <div class="mb-3">
                            <input type="password" class="form-control" name="password" onChange={dataInput} placeholder="password" />
                        </div>
                        <div class="mb-3">
                            <input type="password" class="form-control" name="cpassword" onChange={dataInput} placeholder="Conform password" />
                        </div>
                        <button type="submit" class="btn btn-primary w-100" onClick={addData}>Submit</button>
                    </form>
                    <p className='mt-3'>Already have an account <span><NavLink to="/LogIn">SingIp</NavLink> </span> </p>
                </div>
                <div className="col"></div>
            </div>
        </div>
    )
}

export default Home
