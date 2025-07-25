import React, { useEffect, useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import { FaX } from "react-icons/fa6";

const VerifyPop = ({ setShowPop, currentState }) => {
  const [view, setView] = useState(currentState); // 'login' or 'signup'

  // Sync view with parent state
  useEffect(() => {
    setView(currentState);
  }, [currentState]);

  return (
    <div className='bg-white p-12 rounded-4xl'>
      <div className="flex justify-between mb-4">
        <p className="text-center text-2xl">{view === 'login' ? 'Sign in' : 'Sign up'}</p>
        <div className="cursor-pointer" onClick={() => setShowPop("")}>
          <FaX />
        </div>
      </div>

      {view === 'login' ? (
        <>
          <div className="mb-2"><Login setShowPop={setShowPop} /></div>
          Don't have an account?{" "}
          <span className="text-blue-600 cursor-pointer font-medium" onClick={() => setView('signup')}>Sign Up</span>
        </>
      ) : (
        <>
          <div className="mb-2"><Signup setShowPop={setShowPop} setView={setView}/></div>
          Have an account?{" "}
          <span className="text-blue-600 cursor-pointer font-medium" onClick={() => setView('login')}>Sign in</span>
        </>
      )}
    </div>
  );
};

export default VerifyPop;
