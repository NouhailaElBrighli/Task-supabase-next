"use client"
import { useState } from "react";
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

const SinUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter()
    const supabase = createClientComponentClient()

    const handleSignUp = async () => {
        console.log('sign up')
        console.log('location origin : ' + location.origin)
        await supabase.auth.signUp({
          email,
            password,
            options: {
              emailRedirectTo: `${location.origin}/callback`,
            },
        })
        setEmail('')
        setPassword('')
        router.refresh()
  }



    return (
        <div className="h-screen flex items-center justify-center bg-gray-500 p-6">
            <div className="bg-violet-950 w-96 p-10 rounded-lg ">
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full mb-4 p-3 rounded-md bg-violet-400 text-white placeholder-white"
                />
                <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}  
                    className="w-full mb-8 p-3 rounded-md bg-violet-400 text-white placeholder-white"
                />
                <button
                    onClick={handleSignUp}
                    className="w-full bg-violet-600 text-white p-2 rounded mt-2"
                >Sign in</button>
            </div>
        </div>
    );
}
 
export default SinUp;
