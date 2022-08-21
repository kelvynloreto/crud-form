import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const defaultValues = {
  email: "",
  password: "",
  first_name: "",
  last_name: "",
  birthday: "",
}
const HookForm = ({getAllUsers , updateUsers ,  setupdateUsers , tilte , setTilte , setToggleForm,}) => {
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    updateUsers && reset(updateUsers);
  }, [updateUsers]);

  const createUser = (data) => {
    const url = `https://users-crud1.herokuapp.com/users/`;
    axios.post(url, data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => 
      
       alert("El usuario no se a podido crear")
      
      )
      
      .finally(() => getAllUsers());
  };

  const updateUsersInfo = data => {
    const url = `https://users-crud1.herokuapp.com/users/${updateUsers.id}/`;
    axios.patch(url, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => alert("El usuario no se a podido editar"))
  }

  const submit = (data) => {
    // Update user
    if (updateUsers) {
       updateUsersInfo(data)
        setupdateUsers();
    }
    // create user
    else {
      createUser(data);
      }
    reset(defaultValues);
    setTilte(true);
    setToggleForm(false);
  };

  const closetModalWithEquis = () => {
    setToggleForm(false);
    setTilte(true);
    reset(defaultValues);
  };

  const formTilte = tilte ? "Nuevo Usuario" : "Editar Usuario";
  return (
    <form onSubmit={handleSubmit(submit)} className="form">
      <h2>{formTilte}</h2>
      <div className="forms__equi equis" 
      onClick={closetModalWithEquis}
      >
        X
      </div>
      <section>
        <label htmlFor="first_name">Nombre</label>
        <input
          {...register("first_name")}
          type="text"
          id="first_name"
          placeholder="first name"
        />
      </section>
      <section>
        <label htmlFor="last_name">Apellido</label>
        <input
          {...register("last_name")}
          type="text"
          id="last_name"
          placeholder="last name"
        />
      </section>
      <section>
        <label htmlFor="email">Email</label>
        <input
          {...register("email")}
          type="text" 
          id="email"
          placeholder="email"
        />
      </section>
      <section>
        <label htmlFor="password">Password</label>
        <input {...register("password")} type="password" id="password" placeholder="Password"/>
      </section>
  
      <section>
        <label htmlFor="birthday">Cumpleaños</label>
        <input {...register("birthday")} type="date" id="birthday" />
      </section>
      <button 
           className="btn_submit btn_global">{tilte? "Crear Nuevo Usuario" : "Editar Usuario" }</button>
    </form>
  );
};

export default HookForm;
