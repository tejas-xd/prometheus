import React, { useState } from 'react';
import { useFirebase } from '../context/Firebase';

function SignUpForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const firebase = useFirebase();
    console.log(firebase);
    const handleSubmit = async(e) => {
        e.preventDefault();
        const result = await firebase.createNewUserWithEmailAndPassword(email,password);
        console.log(result);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-sm p-8 space-y-6 bg-white border border-gray-200 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-800">Sign Up</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-600">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-600">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-200"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SignUpForm;
