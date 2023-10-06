import React from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Account(props) {
	const router = useRouter();

  const onSubmit = async (event) => {
    event.preventDefault();

    // Get the form data
    const formData = new FormData(event.target);

    // Submit the form data to the server
    const response = await fetch('/api/create-account', {
      method: 'POST',
      body: formData,
    });

    // Check the response status code
    if (response.status === 200) {
      // The account was created successfully
      router.push('/login');
    } else {
      // There was an error creating the account
      // Handle the error here
    }
  };

  return (
    
    <div className='flex flex-col items-center'>
        <form action="/api/create-account" method="post" className="w-full max-w-md">
            <div className="mb-6">
                <label for="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] p-2.5" />
            </div>
            <div className="mb-6">
                <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
            </div>
            <div className="mb-6">
                <label for="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
            </div>
            
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign Up</button>
        </form>
        <p className="mt-10 text-center">{props.question} <Link href={props.redirect} className="text-orange-400">{props.access}</Link></p>
    </div>

  )
}
