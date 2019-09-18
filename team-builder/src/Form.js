import React, { useState } from 'react';
import TeamList from './TeamList'


  function Form(props) {
    // what data does the form need to populate itself?
    // what callbacks does the form need to perform
    // its basic functions of updating fields and submitting?
    const { onNameChange, onEmailChange, onRoleChange, onFormSubmit } = props;
    const { name, email, role } = props.teamForm;
    // const isDisabled = () => {
    //   if (!name || !age) {
    //     return true;
    //   }
    //   return false;
    // };
  
    return (
      <form>
        <label htmlFor='nameInput'>Name</label>
        <input
        //   maxLength={50}
          value={name}
          onChange={onNameChange}
          id='nameInput'
          type='text'
        />
  
        <label htmlFor='ageInput'>Role</label>
        <input
          value={role}
          onChange={onRoleChange}
          id='ageInput'
          type='text'
        />
        <label htmlFor='nameInput'>Email</label>
        <input
        //   maxLength={50}
          value={email}
          onChange={onEmailChange}
          id='nameInput'
          type='email'
        />
  
        <button
          disabled={false}
          onClick={onFormSubmit}
        >
          submit
        </button>
      </form>
    );
  }
  
  export default Form;