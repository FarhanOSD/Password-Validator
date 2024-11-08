import React, { useState } from 'react';
import validator from 'validator';

function PasswordValidator() {
  const [errorMessage, setErrorMessage] = useState('');

  let ValidMessage = 'It is a Strong Password ❤️';
  let inValidMessage = '😒 It is a good food for Hackers!!';

  const validation = inputPassword => {
    validator.isStrongPassword(inputPassword, {
      minLength: 8,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 2,
    })
      ? setErrorMessage(ValidMessage)
      : setErrorMessage(inValidMessage);
  };

  

  return (
    <div>
      <h1 className="font-bold mb-5 ">Password Quality Checker</h1>
      <span className="grid gap-[2.75rem] mb-3">Enter Password:-</span>
      <input
        className="rounded bg-slate-100 text-green-500 "
        onChange={e => validation(e.target.value)}
        type="text"
      />{' '}
      <br />
      {errorMessage === '' ? null : <span className={errorMessage === inValidMessage ?"text-red-500 font-bold " : "text-green-600 font-bold "} >{errorMessage}</span>}
    </div>
  );
}

export default PasswordValidator;
