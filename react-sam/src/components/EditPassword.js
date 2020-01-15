import React from 'react';
import useForm from 'react-hook-form';
import { editPassword } from '../http/authService';
import { REGISTER_VALIDATIONS } from '../shared/validations';

export function EditPassword() {

  const { register, handleSubmit, setError } = useForm({
    mode: "onBlur"
  });

  const editP = formData => {
    console.log(formData);
    return editPassword(formData).catch(error => { setError(error) });
  }
  return (
    <React.Fragment>
      <p>Editar contraseña</p>
      <form onSubmit={handleSubmit(editP)} className='editForm'>
        <div className='group1'>
          <input
            type='password'
            name='oldPassword'
            placeholder='antigua contraseña'
            ref={register(REGISTER_VALIDATIONS.password)}
          />
          <span class='bar'></span>
          <label>Contraseña antigua:</label>
        </div>
        <div className='group1'>
          <input
            type='password'
            name='newPassword'
            placeholder='nueva contraseña'
            ref={register(REGISTER_VALIDATIONS.password)}
          />
          <span class='bar'></span>
          <label>Nuefva contraseña</label>
        </div>
        <div className='group1'>
          <input
            type='password'
            name='repeatPassword'
            placeholder='repite contraseña'
            ref={register(REGISTER_VALIDATIONS.password)}
          />
          <span class='bar'></span>
          <label>Repetir contraseña:</label>
        </div>
        <button type='submit' className='send-btn'>Cambiar contraseña</button>
      </form>
    </React.Fragment>
  )
}