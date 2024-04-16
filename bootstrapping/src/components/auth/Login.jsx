import React, { useState, useEffect } from 'react'
import {Logo, Input, Button } from '../'
import { Link } from 'react-router-dom'
import authServiceObj from '../../services/authService'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { login as setUserAsLoggedIn } from '../../store/UserAuthSlice'


export default function Login() {
    const dispatch = useDispatch()

    const {
        register, 
        handleSubmit,
        formState: { errors },
        // setError,

    } = useForm()

    const [errorMessage, setErrorMessage] = useState('')
    const clearpassword = () => {
        console.log('cleaspass')
        setErrorMessage('')
    }
    

    // const handleSubmit = () => { console.log('Handle submit in Login page')}
    const userlogin = async (data) => { 
        // console.log('formstate:  ', errors)
        setErrorMessage('')
        console.log('login called with data: ' , data)
        try {
            const session = await authServiceObj.login(data);
            if(session) {
                console.log('session received ', session)
                const currentUserData = await authServiceObj.getCurrentLoggedInUserData();
                if(currentUserData) {
                    console.log('received current userdata, ' , currentUserData);
                    dispatch(setUserAsLoggedIn(currentUserData))
                }
            }
            
            
        } catch (error) {
            console.log('error::::', error)
            setErrorMessage(error.response.message)
        }
    }
 
    return (
        <div className='flex items-center justify-center w-full'>
            <div className={`mx-auto w-full max-w-lg bg-gray-100 
                rounded-xl p-10 border border-black/10`}>
                    <div className='mb-2 flex justify-center'>
                        <span className='inline-block w-full 
                            max-w-[100x]'>
                                <Logo width='100%' />
                        </span>   

                    </div>
                    <h2 className='text-center text-2xl font-bold
                        leading-tight'>Sign in to your account</h2>
                    <p className="mt-2 text-center text-base text-black/60">
                        Don&apos;t have any account?&nbsp;
                        <Link
                            to="/signup"
                            className="font-medium text-primary transition-all duration-200 hover:underline"
                        >
                            Sign Up
                        </Link>
                    </p>
                    {errors && (
                        <p className='text-red-500 mt-8 text-center'>
                            {Object.values(errors).map(error => (
                                <li key={error.message}>{error.message}</li>
                            ))}
                        </p>)}
                    {errorMessage && <p className='text-red-500 mt-8 text-center'>{errorMessage}</p>}
                    <form onSubmit={handleSubmit(userlogin)} className='mt-8'>
                        <div className='space-y-5'>
                            <Input
                                label='Email: '
                                placeholder='Enter your email'
                                type='email'
                                {...register('email', {
                                    required: 'email is required',
                                    validate: {
                                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || 
                                        'Enter a valid email address',
                                    }
                                })} />

                                <Input 
                                    label='Password:'
                                    type='password'
                                    placeholder='Enter your password'
                                    {...register('password', {
                                        required: 'password is required'
                                    })} 
                                    onChange={clearpassword}
                                />

                                <Button 
                                    children='Sign in'
                                    type='submit'
                                    className='w-full'
                                />

                        </div>

                    </form>
                    
                </div>
        
        </div>
    )
}
