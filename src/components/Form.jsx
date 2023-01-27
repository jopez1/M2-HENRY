import React from "react";
import styles from "./Form.module.css";
import  {validation}  from "./validation";


export default function Form(props) {
  const [userData, setUserData] = React.useState({
    username: "", 
    password: "" 
   });

   const [errors, setErrors] = React.useState({
    username: "", 
  password: ""
  });

   function handleInputChange(e){
    setUserData({userData, [e.target.name]: e.target.value})
    setErrors(validation({...userData, [e.target.name]: e.target.value}));
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      props.login(userData)
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          name="username"
          placeholder="Ingrese el usuario"
          type="text"
          value={userData.username}
          onChange={handleInputChange}
          className={errors.username && styles.warning}        
        />
        <p className='danger'>{errors.username}</p>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          name="password"
          placeholder="Ingrese el password"
          type="password"
          value={userData.password}
          onChange={handleInputChange}
          className={errors.password && styles.warning}  
        />
        <p className='danger'>{errors.password}</p>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
