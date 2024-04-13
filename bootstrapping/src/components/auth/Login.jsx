import React, { useState } from 'react'
import {Logo, Input, Button } from '../'
import { Link } from 'react-router-dom'
import authServiceObj from '../../services/authService'
import { useForm } from 'react-hook-form'

export default function Login() {

    const {register, handleSubmit} = useForm()
    const [error, setError] = useState()

    // const handleSubmit = () => { console.log('Handle submit in Login page')}
    const login = async (data) => { 
        setError('')
        const session = await authServiceObj.login(data);
        console.log('session', session);
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
                    {error && <p className='text-red-500 mt-8 text-center'>{error}</p>}
                    <form onSubmit={handleSubmit(login)} className='mt-8'>
                        <div className='space-y-5'>
                            <Input
                                label='Email: '
                                placeholder='Enter your email'
                                type='email'
                                {...register('email', {
                                    required: true,
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
                                        required: true
                                    })} 
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
