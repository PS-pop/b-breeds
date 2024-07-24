"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function MyShop() {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const pageContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90vh',
  };

  const loginBoxStyle = {
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '10px',
    width: '300px',
    margin: '0 auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    boxSizing: 'border-box',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };

  const titleStyle = {
    fontWeight: 'bold',
    fontSize: '1.5em',
  };

  const subtitleStyle = {
    fontWeight: 'bold',
    fontSize: '1.2em',
  };

  const handleLogin = () => {
    // Perform login logic here, such as validating credentials
    // If login is successful, route to another page
    router.push('/admin/manage'); // Replace '/anotherPage' with the actual path you want to navigate to
  };

  return (
    <div style={pageContainerStyle}>
        <div className='flex justify-center '>
          <div style={titleStyle}>Welcome to an admin page</div>
        </div>
        <div className='mb-20 flex justify-center '>
          <div style={subtitleStyle}>Please input your credential.</div>
        </div>
      

      <div style={loginBoxStyle}>
        <h2 className='font-bold'>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />
        <button className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm' onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}
