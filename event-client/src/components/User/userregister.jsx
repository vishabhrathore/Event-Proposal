import React from "react";
import "../../login.css"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const UserRegister = () => {
    const navigate = useNavigate()
    const [data, updatereg] = useState({ email: "", password: "", name: "", contact: "", confirmpassword: "" })
    const hanlde = async () => {
        if(!data.email || !data.password || !data.email  || !data.contact ){
            toast.warn('please provide all details!');
        }else if(data.password.length < 6){
            toast.warn('Password is too weak !');
        }else if(data.password !== data.confirmpassword){
            toast.warn('Password not Matched');
        }else{
            const response = await fetch("https://event-proposal.onrender.com/userregister", {
                method: 'POST',
                mode : "cors",
                headers: {
                    "content-Type": 'application/json',
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    name: data.name,
                    password: data.password,
                    email: data.email,
                    contact: data.contact,
                })
            })
            const res = await response.json()
            console.log(res)
            if(res.message === "user already exists"){
                toast.warn('Email is already Registered');
            }else if(res.message === "User Contact already exists."){
                toast.warn('Contact is already Registered');
            }else if(res.message === "user created successfully"){
                toast.success('Account Created Successfully');
                navigate("/userlogin")
            }
        }
    }
    const handle2 = () =>{
        navigate("/register")
    }
    return (
        <div className="main">
            <div className="logo-psv">
                      <svg width="350" height="150" viewBox="0 0 350 160.23472737305832" class="css-1j8o68f"><defs id="SvgjsDefs1529"></defs><g id="SvgjsG1530" featurekey="symbolFeature-0" transform="matrix(1.3136703835745018,0,0,1.3136703835745018,113.07090926143233,-21.490332822689332)" fill="white"><g xmlns="http://www.w3.org/2000/svg"><circle cx="63.674" cy="27.667" r="10.808"></circle><path d="M82.968,41.42c-2.394-2.393-5.576-3.711-8.962-3.711c-3.385,0-6.568,1.318-8.962,3.711l-1.37,1.371l-1.369-1.371   c-2.39-2.388-5.565-3.703-8.944-3.703c-2.235,0-4.436,0.59-6.361,1.705l-0.272,0.158c-4.58-2.362-10.337-1.646-14.178,2.193   l-1.723,1.725l-1.724-1.725c-4.755-4.754-12.463-4.754-17.218,0c-4.754,4.756-4.754,12.465,0,17.219l1.723,1.724l17.219,17.218   l16.07-16.07l16.777,16.777l19.294-19.295c2.395-2.395,3.713-5.576,3.713-8.963C86.681,46.998,85.362,43.814,82.968,41.42z    M44.733,58.992c-4.755-4.754-4.755-12.463,0-17.219c0.631-0.631,1.328-1.149,2.051-1.609l0.215,0.123   c0.906,0.525,1.718,1.145,2.414,1.84c2.205,2.206,3.42,5.139,3.42,8.256c0,3.119-1.215,6.051-3.42,8.256l-2.517,2.518l-0.44-0.44   L44.733,58.992z M82.261,58.639L63.674,77.227L47.957,61.51l2.163-2.164c2.394-2.395,3.713-5.576,3.713-8.963   c0-3.385-1.319-6.568-3.713-8.963c-0.56-0.559-1.186-1.071-1.871-1.53c1.586-0.769,3.336-1.173,5.111-1.173   c3.111,0,6.037,1.211,8.237,3.41l2.076,2.078l2.077-2.078c2.205-2.204,5.137-3.418,8.255-3.418s6.05,1.214,8.255,3.418   c2.205,2.206,3.42,5.139,3.42,8.256C85.681,53.502,84.466,56.434,82.261,58.639z"></path><path d="M47.451,58.221l1.195-1.295c3.299-3.572,3.299-9.363,0-12.937c-0.532-0.577-1.123-1.051-1.746-1.44   c-0.623,0.39-1.214,0.863-1.746,1.44c-3.299,3.573-3.299,9.364,0,12.937l1.195,1.295l0.551,0.596L47.451,58.221z"></path><path d="M30.826,38.975c6.234,0,11.307-5.072,11.307-11.307c0-6.235-5.072-11.309-11.307-11.309   c-6.235,0-11.308,5.073-11.308,11.309C19.519,33.902,24.591,38.975,30.826,38.975z M30.826,17.359   c5.684,0,10.307,4.625,10.307,10.309S36.51,37.975,30.826,37.975s-10.308-4.623-10.308-10.307S25.143,17.359,30.826,17.359z"></path></g></g><g id="SvgjsG1531" featurekey="nameFeature-0" transform="matrix(1.3143762191054889,0,0,1.3143762191054889,14.17508478585001,86.39376290733308)" fill="white"><path d="M-9.84 56.08 c-0.72 -0.36 -1.04 -1 -0.92 -1.8 c0.16 -1.12 0.56 -2.2 1 -3.2 c1.24 -2.64 2.72 -5.2 4.56 -7.48 c2.12 -2.72 3.6 -5.68 4.52 -8.96 c0.32 -1.04 0.68 -3.16 1.6 -2.96 c0.44 0.12 -0.6 2.12 -0.8 3.2 c-0.2 0.76 -0.56 1.76 -0.4 1.96 c0.4 0.08 1.04 -0.76 1.56 -1.24 c1.28 -1.16 2.4 -2.52 3.88 -3.44 c0.52 -0.32 1.04 -0.64 1.6 -0.84 c1.72 -0.6 2.52 0 2.4 2.12 c0 0.64 -0.32 1.4 -0.72 2.2 c-0.2 0.36 -0.76 0.84 -0.48 1.2 c0.4 0.48 1.04 -0.04 1.48 -0.16 c2.96 -0.84 4.84 -2.08 7.44 -3.68 c0.32 -0.2 1.16 -1.04 1.44 -0.6 c0.2 0.28 -0.48 0.72 -0.84 0.96 c-2.64 1.68 -4.56 3 -7.6 3.88 c-1.88 0.52 -3.76 1.04 -5.32 2.32 c-0.84 0.56 -1.96 1 -2.76 0.36 c-0.32 -0.28 -0.56 -0.72 -0.32 -1.28 c0.44 -1.04 1.36 -1.04 2.32 -1.08 c2.72 -0.12 4.64 -2.04 4.64 -4.6 c0 -1 -0.36 -1.36 -1.36 -0.92 c-0.28 0.12 -0.64 0.2 -0.88 0.4 c-3.6 2.72 -7.24 5.44 -8.68 10.04 c-1.04 3.28 -2.36 6.44 -3.68 9.64 c-0.52 1.2 -1.12 2.44 -2.12 3.36 c-0.4 0.4 -0.88 0.92 -1.56 0.6 z M2.76 39.52 c0.72 -0.12 1.4 -0.44 1.72 -1.08 c0.12 -0.2 -0.48 -0.16 -0.72 -0.2 c-0.72 -0.04 -1.36 0.04 -1.52 0.84 c-0.04 0.28 0.24 0.48 0.52 0.44 z M-9.64 55.28 c0.48 0.16 0.76 -0.2 1 -0.52 c0.36 -0.44 0.72 -0.96 1 -1.48 c1.48 -3.04 2.64 -6.2 3.76 -9.4 c0.08 -0.24 0.24 -0.48 0.04 -0.72 c-0.2 0.16 -0.48 0.28 -0.64 0.48 c-1.84 2.68 -3.68 5.36 -4.92 8.4 c-0.24 0.68 -0.52 1.36 -0.72 1.84 c0 0.68 -0.08 1.2 0.48 1.4 z M18.028 40.88 c-0.6 -0.72 -0.04 -1.52 1.04 -2.04 c1.04 -0.52 1.24 -1.32 0.92 -2.04 c-1.04 -2.36 -1.36 -3 -1.12 -3.96 c0.24 -0.84 0.92 -1.4 1.72 -1.44 c0.76 -0.04 1.28 0.32 1.6 0.96 c0.28 0.56 0.2 1.48 -0.52 1.96 c-0.16 0.08 -0.44 0.24 -0.6 0.08 c-0.24 -0.16 -0.12 -0.32 0.08 -0.52 c1.04 -0.8 -0.08 -2.2 -0.96 -1.52 c-0.96 0.72 -0.56 1.88 0.76 4.72 c0.12 0.24 0.4 0.6 0.88 0.36 c0.92 -0.4 2.08 -0.92 3.2 -1.44 c2.04 -0.96 3.88 -2.12 5.76 -3.36 c0.24 -0.16 0.56 -0.6 0.84 -0.16 c0.24 0.36 -0.16 0.52 -0.44 0.72 c-2.64 1.88 -5.4 3.44 -8.44 4.6 c-0.96 0.36 -1.68 1 -1.92 1.92 c-0.28 1 -2.04 2.08 -2.8 1.16 z M19.308 40.44 c0.92 -0.36 1.28 -1.68 0.48 -1.28 c-1.72 0.84 -1.24 1.6 -0.48 1.28 z M32.256 39.92 c-0.92 -0.44 -0.76 -1.4 -0.76 -2.32 c0 -1.12 0.4 -3.76 0.92 -5.28 c0.08 -0.24 0.16 -0.6 0.48 -0.52 s0.24 0.44 0.2 0.68 c-0.24 1.32 -0.64 2.8 -0.76 4.08 c-0.08 0.88 -0.4 2.16 0.48 2.56 c0.76 0.2 2 -0.72 3.8 -2.84 c0.68 -0.8 1.24 -1.96 0.16 -3.28 c-1.28 -1.56 -0.84 -3.72 0.64 -4.8 c1.32 -0.96 2.68 -0.4 2.88 1.24 c0.12 1.12 -0.12 2.16 -0.56 3.12 c-0.48 1.08 -0.04 1.2 0.92 1.24 c1.16 0.04 2.56 -0.36 4.6 -1.4 c0.24 -0.08 0.64 -0.2 0.72 0 c0.2 0.4 -0.24 0.48 -0.52 0.6 c-2.2 1 -3.52 1.88 -6.12 1.56 c-0.76 -0.08 -1 0.52 -1.36 1 c-0.96 1.36 -1.96 2.68 -3.32 3.68 c-0.76 0.48 -1.48 1.08 -2.4 0.68 z M38.256 33.24 c0.68 0.08 1.36 -1.96 1.36 -3.16 c0 -0.68 0 -1.44 -0.84 -1.56 c-0.68 -0.12 -1.24 0.4 -1.52 1.04 c-0.68 1.4 -0.24 3.68 1 3.68 z M59.151999999999994 39.8 c-2.64 0 -3.72 -1.52 -2.96 -4.04 c0.52 -1.56 1.4 -2.84 2.72 -3.8 c0.96 -0.68 2.04 -0.76 2.96 -0.04 c0.72 0.56 0.48 2.08 -0.44 3 c-1 1 -2.2 1.6 -3.68 1.52 c-0.96 -0.08 -1.32 0.6 -0.84 1.48 c0.52 0.96 1.96 1.48 3.36 1.08 c2.32 -0.68 4.32 -2 6.04 -3.68 c1.04 -1 1.88 -1.64 2.92 -2.68 c0.16 -0.16 0.4 -0.44 0.64 -0.12 c0.12 0.16 0.04 0.36 -0.08 0.52 c-2.72 2.8 -5.2 5.28 -9.08 6.56 c-0.52 0.16 -1.04 0.16 -1.56 0.2 z M57.952 35.68 c1.04 0.48 3.56 -1.24 3.6 -2.64 c-0.04 -0.6 -0.52 -0.92 -1.32 -0.8 c-0.8 0.08 -2.6 1.88 -2.72 2.68 c-0.08 0.4 0.12 0.64 0.44 0.76 z M70.7 39.92 c-0.92 -0.44 -0.76 -1.4 -0.76 -2.32 c0 -1.12 0.4 -3.76 0.92 -5.28 c0.08 -0.24 0.16 -0.6 0.48 -0.52 s0.24 0.44 0.2 0.68 c-0.24 1.32 -0.64 2.8 -0.76 4.08 c-0.08 0.88 -0.4 2.16 0.48 2.56 c0.76 0.2 2 -0.72 3.8 -2.84 c0.68 -0.8 1.24 -1.96 0.16 -3.28 c-1.28 -1.56 -0.84 -3.72 0.64 -4.8 c1.32 -0.96 2.68 -0.4 2.88 1.24 c0.12 1.12 -0.12 2.16 -0.56 3.12 c-0.48 1.08 -0.04 1.2 0.92 1.24 c1.16 0.04 2.56 -0.36 4.6 -1.4 c0.24 -0.08 0.64 -0.2 0.72 0 c0.2 0.4 -0.24 0.48 -0.52 0.6 c-2.2 1 -3.52 1.88 -6.12 1.56 c-0.76 -0.08 -1 0.52 -1.36 1 c-0.96 1.36 -1.96 2.68 -3.32 3.68 c-0.76 0.48 -1.48 1.08 -2.4 0.68 z M76.7 33.24 c0.68 0.08 1.36 -1.96 1.36 -3.16 c0 -0.68 0 -1.44 -0.84 -1.56 c-0.68 -0.12 -1.24 0.4 -1.52 1.04 c-0.68 1.4 -0.24 3.68 1 3.68 z M85.88799999999999 39.8 c-2.64 0 -3.72 -1.52 -2.96 -4.04 c0.52 -1.56 1.4 -2.84 2.72 -3.8 c0.96 -0.68 2.04 -0.76 2.96 -0.04 c0.72 0.56 0.48 2.08 -0.44 3 c-1 1 -2.2 1.6 -3.68 1.52 c-0.96 -0.08 -1.32 0.6 -0.84 1.48 c0.52 0.96 1.96 1.48 3.36 1.08 c2.32 -0.68 4.32 -2 6.04 -3.68 c1.04 -1 1.88 -1.64 2.92 -2.68 c0.16 -0.16 0.4 -0.44 0.64 -0.12 c0.12 0.16 0.04 0.36 -0.08 0.52 c-2.72 2.8 -5.2 5.28 -9.08 6.56 c-0.52 0.16 -1.04 0.16 -1.56 0.2 z M84.68799999999999 35.68 c1.04 0.48 3.56 -1.24 3.6 -2.64 c-0.04 -0.6 -0.52 -0.92 -1.32 -0.8 c-0.8 0.08 -2.6 1.88 -2.72 2.68 c-0.08 0.4 0.12 0.64 0.44 0.76 z M105.19599999999998 39.76 c-0.76 -0.8 -0.4 -1.88 -0.16 -2.84 c0.28 -1.08 0.76 -2.12 0.96 -3.2 c0.24 -1.16 -0.36 -1.6 -1.48 -1.16 c-1.76 0.64 -3.28 1.72 -4.6 3.04 c-1.16 1.16 -2.24 2.32 -3.4 3.44 c-0.28 0.28 -0.56 0.88 -1.12 0.56 c-0.36 -0.2 -0.24 -0.72 -0.16 -1.08 c0.36 -2.28 1.52 -4.2 2.44 -6.28 c0.08 -0.2 0.32 -0.32 0.44 -0.2 c0.12 0.2 0.2 0.52 0.12 0.72 c-0.48 1.16 -1.04 2.32 -1.52 3.48 c-0.2 0.48 -0.44 1 -0.56 1.48 c-0.04 0.2 -0.12 0.76 0.36 0.28 c2 -1.88 3.68 -4.04 6.16 -5.36 c1.04 -0.56 2.16 -1.76 3.4 -0.8 c1.32 1 0.6 2.44 0.24 3.68 c-0.24 0.92 -0.6 1.76 -0.76 2.68 c-0.2 1 0.16 1.48 1.32 1 c1.92 -0.84 3.48 -2.2 5.08 -3.44 c1.4 -1.12 2.48 -2.04 3.88 -3.16 c0.2 -0.2 0.56 -0.52 0.8 -0.2 c0.16 0.2 -0.2 0.4 -0.4 0.56 c-2.4 2.08 -4.52 3.92 -7.12 5.76 c-0.4 0.28 -0.8 0.52 -1.2 0.68 c-0.88 0.4 -1.8 1.28 -2.72 0.36 z M119.50399999999999 40.08 c-2.36 0.16 -3.12 -0.56 -3.24 -2.88 c-0.08 -2.08 0.76 -3.92 1.52 -5.72 c0.84 -1.96 1.72 -3.88 2.6 -5.8 c0.2 -0.48 0.76 -1.32 0.48 -1.48 c-0.08 -0.16 -1.44 0.04 -1.92 0.04 c-1.16 0.12 -3.36 0.24 -4.08 0.24 c-0.24 0 -0.6 0 -0.56 -0.4 c0.04 -0.36 0.4 -0.32 0.6 -0.32 c0.92 -0.04 3.12 -0.12 4.68 -0.24 c2.24 -0.16 1.96 -0.32 2.96 -2.56 c0.52 -1.28 1.24 -2.48 1.88 -3.72 c0.16 -0.28 0.36 -0.68 0.72 -0.48 c0.4 0.2 0.08 0.56 -0.04 0.84 c-0.68 1.36 -1.36 2.72 -2 4.12 c-0.72 1.6 -0.84 1.6 0.04 1.56 c1.04 0 1.64 -0.08 2.04 -0.08 c0.6 0 1.32 -0.16 2.04 -0.16 c0.92 -0.04 1.2 -0.24 1.24 0.32 c0 0.36 -0.52 0.28 -1.4 0.36 c-0.92 0.08 -2.44 0.24 -3.96 0.32 c-1 0 -1.12 0.16 -1.4 0.84 c-1.48 3.48 -3.36 6.76 -4.4 10.4 c-0.36 1.32 -0.76 2.76 0.44 3.72 c1.28 1 2.64 0.32 3.8 -0.52 c2.08 -1.48 4 -3.68 5.68 -5.56 c0.24 -0.28 0.52 -0.84 0.88 -0.6 c0.48 0.4 -0.12 0.68 -0.44 1.24 c-1.92 2.16 -3.68 4.12 -6 5.68 c-0.64 0.44 -1.32 0.8 -2.16 0.84 z M130.88 56.08 c-0.72 -0.36 -1.04 -1 -0.92 -1.8 c0.16 -1.12 0.56 -2.2 1 -3.2 c1.24 -2.64 2.72 -5.2 4.56 -7.48 c2.12 -2.72 3.6 -5.68 4.52 -8.96 c0.32 -1.04 0.68 -3.16 1.6 -2.96 c0.44 0.12 -0.6 2.12 -0.8 3.2 c-0.2 0.76 -0.56 1.76 -0.4 1.96 c0.4 0.08 1.04 -0.76 1.56 -1.24 c1.28 -1.16 2.4 -2.52 3.88 -3.44 c0.52 -0.32 1.04 -0.64 1.6 -0.84 c1.72 -0.6 2.52 0 2.4 2.12 c0 0.64 -0.32 1.4 -0.72 2.2 c-0.2 0.36 -0.76 0.84 -0.48 1.2 c0.4 0.48 1.04 -0.04 1.48 -0.16 c2.96 -0.84 4.84 -2.08 7.44 -3.68 c0.32 -0.2 1.16 -1.04 1.44 -0.6 c0.2 0.28 -0.48 0.72 -0.84 0.96 c-2.64 1.68 -4.56 3 -7.6 3.88 c-1.88 0.52 -3.76 1.04 -5.32 2.32 c-0.84 0.56 -1.96 1 -2.76 0.36 c-0.32 -0.28 -0.56 -0.72 -0.32 -1.28 c0.44 -1.04 1.36 -1.04 2.32 -1.08 c2.72 -0.12 4.64 -2.04 4.64 -4.6 c0 -1 -0.36 -1.36 -1.36 -0.92 c-0.28 0.12 -0.64 0.2 -0.88 0.4 c-3.6 2.72 -7.24 5.44 -8.68 10.04 c-1.04 3.28 -2.36 6.44 -3.68 9.64 c-0.52 1.2 -1.12 2.44 -2.12 3.36 c-0.4 0.4 -0.88 0.92 -1.56 0.6 z M143.48 39.52 c0.72 -0.12 1.4 -0.44 1.72 -1.08 c0.12 -0.2 -0.48 -0.16 -0.72 -0.2 c-0.72 -0.04 -1.36 0.04 -1.52 0.84 c-0.04 0.28 0.24 0.48 0.52 0.44 z M131.07999999999998 55.28 c0.48 0.16 0.76 -0.2 1 -0.52 c0.36 -0.44 0.72 -0.96 1 -1.48 c1.48 -3.04 2.64 -6.2 3.76 -9.4 c0.08 -0.24 0.24 -0.48 0.04 -0.72 c-0.2 0.16 -0.48 0.28 -0.64 0.48 c-1.84 2.68 -3.68 5.36 -4.92 8.4 c-0.24 0.68 -0.52 1.36 -0.72 1.84 c0 0.68 -0.08 1.2 0.48 1.4 z M163.468 39.56 c-3.24 1.48 -5.2 -0.28 -4.84 -3.2 c0.12 -0.96 0.32 -2.04 0.72 -3 c2.88 -6.88 6.6 -13.2 11.92 -18.48 c1.08 -1.08 2.28 -2.04 3.72 -2.64 c2.4 -0.96 3.72 0 3.32 2.48 c-0.44 2.88 -2.12 5.16 -3.96 7.24 c-3.6 4 -7.84 7.16 -12.72 9.4 c-0.48 0.24 -0.76 0.52 -0.96 0.96 c-0.52 1.2 -0.96 2.44 -1.16 3.76 c-0.36 2.76 1.16 3.92 3.68 2.84 c2.48 -1.08 4.48 -2.88 6.52 -4.52 l2.44 -2 c0.12 -0.08 0.44 -0.2 0.52 -0.12 c0.32 0.24 0.08 0.48 -0.12 0.64 c-3.04 2.32 -5.52 5 -9.08 6.64 z M162.108 30.439999999999998 c3.8 -1.72 7 -4.28 10.04 -7.04 c2.32 -2.16 4.24 -4.76 5.28 -7.84 c0.32 -0.84 0.56 -1.92 -0.2 -2.64 c-0.88 -0.8 -1.72 0.08 -2.52 0.36 c-0.44 0.16 -0.84 0.48 -1.2 0.76 c-5.16 4.44 -8.96 9.96 -11.76 16.12 c-0.2 0.32 0.04 0.44 0.36 0.28 z M189.09599999999998 32.44 c0.4 0.32 -0.04 0.6 -0.24 0.76 c-2.16 2.12 -4.04 4.04 -6.6 5.64 c-0.48 0.28 -0.92 0.56 -1.4 0.76 c-0.92 0.36 -1.84 0.4 -2.64 -0.24 c-0.84 -0.68 -0.8 -1.64 -0.6 -2.56 c0.16 -0.68 0.4 -1.36 0.6 -2 c-1.76 0.84 -2.8 2.64 -4.44 3.68 c-0.56 0.36 -1.08 0.76 -1.68 1.04 c-0.72 0.32 -1.4 0.48 -2.04 -0.08 c-0.6 -0.56 -0.64 -1.32 -0.48 -2.04 c0.6 -2.84 4 -5.64 6.96 -5.72 c0.56 0 1.16 0.2 1.68 0.52 c0.24 0.16 0.44 0.56 0.8 0.36 c0.44 -0.24 0.8 -1 1.28 -0.2 c0.36 0.52 -0.16 0.96 -0.36 1.44 c-0.48 1 -1.12 1.96 -1.36 3.08 c-0.16 0.72 -0.4 1.4 0.32 1.96 c0.72 0.52 1.36 0.28 2.04 -0.08 c1.44 -0.68 2.72 -1.64 3.88 -2.76 c1.2 -1.16 2.28 -2 3.48 -3.16 c0.2 -0.24 0.48 -0.64 0.8 -0.4 z M177.37599999999998 34.24 c0.32 -0.32 0.68 -0.68 0.48 -1.2 c-0.28 -0.68 -0.92 -0.36 -1.32 -0.44 c-2.44 0 -5.04 2 -5.96 4.52 c-0.2 0.64 -0.56 1.28 0.12 1.8 c0.6 0.52 1.16 0.04 1.6 -0.24 c1.96 -1.16 3.48 -2.84 5.08 -4.44 z M197.72399999999996 39.76 c-0.76 -0.8 -0.4 -1.88 -0.16 -2.84 c0.28 -1.08 0.76 -2.12 0.96 -3.2 c0.24 -1.16 -0.36 -1.6 -1.48 -1.16 c-1.76 0.64 -3.28 1.72 -4.6 3.04 c-1.16 1.16 -2.24 2.32 -3.4 3.44 c-0.28 0.28 -0.56 0.88 -1.12 0.56 c-0.36 -0.2 -0.24 -0.72 -0.16 -1.08 c0.36 -2.28 1.52 -4.2 2.44 -6.28 c0.08 -0.2 0.32 -0.32 0.44 -0.2 c0.12 0.2 0.2 0.52 0.12 0.72 c-0.48 1.16 -1.04 2.32 -1.52 3.48 c-0.2 0.48 -0.44 1 -0.56 1.48 c-0.04 0.2 -0.12 0.76 0.36 0.28 c2 -1.88 3.68 -4.04 6.16 -5.36 c1.04 -0.56 2.16 -1.76 3.4 -0.8 c1.32 1 0.6 2.44 0.24 3.68 c-0.24 0.92 -0.6 1.76 -0.76 2.68 c-0.2 1 0.16 1.48 1.32 1 c1.92 -0.84 3.48 -2.2 5.08 -3.44 c1.4 -1.12 2.48 -2.04 3.88 -3.16 c0.2 -0.2 0.56 -0.52 0.8 -0.2 c0.16 0.2 -0.2 0.4 -0.4 0.56 c-2.4 2.08 -4.52 3.92 -7.12 5.76 c-0.4 0.28 -0.8 0.52 -1.2 0.68 c-0.88 0.4 -1.8 1.28 -2.72 0.36 z M217.55199999999996 39.76 c-0.76 -0.8 -0.4 -1.88 -0.16 -2.84 c0.28 -1.08 0.76 -2.12 0.96 -3.2 c0.24 -1.16 -0.36 -1.6 -1.48 -1.16 c-1.76 0.64 -3.28 1.72 -4.6 3.04 c-1.16 1.16 -2.24 2.32 -3.4 3.44 c-0.28 0.28 -0.56 0.88 -1.12 0.56 c-0.36 -0.2 -0.24 -0.72 -0.16 -1.08 c0.36 -2.28 1.52 -4.2 2.44 -6.28 c0.08 -0.2 0.32 -0.32 0.44 -0.2 c0.12 0.2 0.2 0.52 0.12 0.72 c-0.48 1.16 -1.04 2.32 -1.52 3.48 c-0.2 0.48 -0.44 1 -0.56 1.48 c-0.04 0.2 -0.12 0.76 0.36 0.28 c2 -1.88 3.68 -4.04 6.16 -5.36 c1.04 -0.56 2.16 -1.76 3.4 -0.8 c1.32 1 0.6 2.44 0.24 3.68 c-0.24 0.92 -0.6 1.76 -0.76 2.68 c-0.2 1 0.16 1.48 1.32 1 c1.92 -0.84 3.48 -2.2 5.08 -3.44 c1.4 -1.12 2.48 -2.04 3.88 -3.16 c0.2 -0.2 0.56 -0.52 0.8 -0.2 c0.16 0.2 -0.2 0.4 -0.4 0.56 c-2.4 2.08 -4.52 3.92 -7.12 5.76 c-0.4 0.28 -0.8 0.52 -1.2 0.68 c-0.88 0.4 -1.8 1.28 -2.72 0.36 z M230.57999999999998 39.8 c-2.64 0 -3.72 -1.52 -2.96 -4.04 c0.52 -1.56 1.4 -2.84 2.72 -3.8 c0.96 -0.68 2.04 -0.76 2.96 -0.04 c0.72 0.56 0.48 2.08 -0.44 3 c-1 1 -2.2 1.6 -3.68 1.52 c-0.96 -0.08 -1.32 0.6 -0.84 1.48 c0.52 0.96 1.96 1.48 3.36 1.08 c2.32 -0.68 4.32 -2 6.04 -3.68 c1.04 -1 1.88 -1.64 2.92 -2.68 c0.16 -0.16 0.4 -0.44 0.64 -0.12 c0.12 0.16 0.04 0.36 -0.08 0.52 c-2.72 2.8 -5.2 5.28 -9.08 6.56 c-0.52 0.16 -1.04 0.16 -1.56 0.2 z M229.37999999999997 35.68 c1.04 0.48 3.56 -1.24 3.6 -2.64 c-0.04 -0.6 -0.52 -0.92 -1.32 -0.8 c-0.8 0.08 -2.6 1.88 -2.72 2.68 c-0.08 0.4 0.12 0.64 0.44 0.76 z M245.128 40.16 c-1.6 0 -2.12 -0.56 -2.16 -2.08 c-0.04 -1.4 0.6 -2.56 1.36 -3.64 c0.64 -0.92 0.64 -1.44 -0.6 -1.56 c-0.32 -0.04 -0.64 -0.24 -0.96 -0.32 c-0.24 -0.08 -0.52 -0.16 -0.76 -0.28 c-0.76 -0.32 -1.08 -0.96 -0.92 -1.76 c0.32 -1.68 1.2 -2.96 2.72 -3.68 c0.68 -0.36 1.48 -0.4 2.08 0.16 c0.48 0.48 0.76 1.08 0.44 1.8 c-0.32 0.8 -0.6 1.64 -1.28 2.2 c-0.8 0.64 -1.16 1.08 0.08 1.6 c0.76 0.32 0.72 1 0.28 1.68 c-0.56 0.84 -1.08 1.68 -1.48 2.6 c-0.32 0.72 -0.48 1.64 0.12 2.24 c0.6 0.64 1.48 0.4 2.24 0.08 c1.6 -0.64 2.88 -1.6 4.2 -2.76 c1.2 -1.04 2.76 -2.52 4.12 -3.76 c0.24 -0.16 0.44 -0.6 0.8 -0.24 c0.24 0.24 -0.04 0.48 -0.2 0.64 c-2.56 2.32 -4.8 4.84 -7.92 6.48 c-0.72 0.36 -1.44 0.68 -2.16 0.6 z M242.72799999999998 31.72 c1.2 0.12 3.32 -2.76 2.88 -3.8 c-0.28 -0.64 -0.76 -0.68 -1.32 -0.48 c-0.92 0.28 -2.4 2.24 -2.48 3.2 c-0.04 0.72 0.52 0.84 0.92 1.08 z"></path></g></svg>
            </div>
            <div className="registerpage">
                <div className="head" style={{cursor: "pointer"}}>
                    <div className="Vendor" id="vendor" onClick={handle2}>Vendor</div>
                    <div className="User" >User</div>
                </div>
                <p className="sign">Register in your Account</p>
                <div>
                    <input placeholder="Name" type="text" className="phone" value={data.name} onChange={(e) => { updatereg({ ...data, name: e.target.value }) }} name="name"></input>
                </div>
                <div>
                    <input placeholder="Email" type="email" className="password" value={data.email} onChange={(e) => { updatereg({ ...data, email: e.target.value }) }} name="email"></input>
                </div>
                <div>
                    <input placeholder="Contact" type="text" className="password" value={data.contact} onChange={(e) => { updatereg({ ...data, contact: e.target.value }) }} name="contact"></input>
                </div>
                <div>
                    <input placeholder="Password" type="password" className="password" value={data.password} onChange={(e) => { updatereg({ ...data, password: e.target.value }) }} name="password"></input>
                </div>
                <div>
                    <input placeholder="Confirm Password" type="password" className="password" value={data.confirmpassword} onChange={(e) => { updatereg({ ...data, confirmpassword: e.target.value }) }} name="confirmpassword"></input>
                </div>
                <div className="foot">
                    <button className="create"><Link className="link" to="/">Sign in</Link></button>
                    <button className="btn" onClick={hanlde}>REGISTER</button>
                </div>
            </div>
            
            <ToastContainer />
        </div>
    )
}

export default UserRegister