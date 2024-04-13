import React, { useState } from 'react'
import { Logo, Input, Button } from "../index"
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Custominput from '../fields/Custominput'
import authServiceObj from '../../services/authService'
import { useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux"

export default function Signup() {
    const isauth = useSelector(state => state.auth.isAuthenticated)
    console.log('isauth: ' , isauth);
    
    const [error, setError] = useState("")
    const negivate = useNavigate()

    const create = async (data) => {
        // console.log('create with data: ', data)
        // this will be required for calling the login function after a successful registration 
        const {email, password} = data;
        
        const newUserdata = await authServiceObj.register(data);
        if(newUserdata) {
            console.log('Signup success, user: ' , newUserdata);
            const logindata = await authServiceObj.login({email, password})
            if(logindata) {
                // console.log('Login success from signup ', logindata );
                setError('Login success')
                negivate("/profile")
                
            }
        }
    
    }
    const {register, handleSubmit} = useForm();

    const myfunction = () => { console.log('my function')}
    
    return (
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                    <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                <form onSubmit={handleSubmit(create)}>
                    <div className='space-y-5'>
                        <Custominput 
                            label='Name'
                            placeholder='Enter your name'
                            {...register('name', {
                                required:true,

                            })}
                            />
                        <Custominput
                            label='Email'
                            placeholder='Enter your email'
                            type='email'
                            {...register('email', {
                                required:true,
                                validate:{
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || 
                                    'Enter valid email'
                                }
                            })} />

                        <Custominput 
                            label='Password'
                            placeholder='Enter password'
                            type='Password'
                            {...register('password', {
                                required:false,
                            })}
                            />
                        <Button
                            
                            type='submit'
                            className='w-full'
                            >Create Account</Button>
                    </div>


                </form>

            </div>
    )
}
