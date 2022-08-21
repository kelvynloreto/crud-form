import { useState, useEffect } from "react";
import "./App.css";
import CardUser from "./Components/CardUser";
import HookForm from "./Components/HookForm";
import axios from "axios";



function App() {
  const [updateUsers, setupdateUsers] = useState();
  const [users, setUsers] = useState();
  const [tilte, setTilte] = useState(true);
  const [toggleForm, setToggleForm] = useState(false);
  const getAllUsers = () => {
    const url = `https://users-crud1.herokuapp.com/users/`;
    axios
      .get(url)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const showModal = () => {
    setToggleForm(true);
  };


  return (
    <main >
       <header>
        <h1>Usuarios</h1>
        <button onClick={showModal} className="btn_global">
          <svg
            className="svg_plus"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" />
          </svg>{" "}
          Crear nuevo usuario
        </button>
        
      </header>
      <div className={toggleForm? "show_form":"hide_form"}>
        <HookForm
          setToggleForm={setToggleForm}
          getAllUsers={getAllUsers}
          updateUsers={updateUsers}
          setupdateUsers={setupdateUsers}
          tilte={tilte}
          setTilte={setTilte}
        />
      </div>
      <section className="container_cards-users">
        {users?.map((user) => (
          <CardUser
            user={user}
            key={user.id}
            getAllUsers={getAllUsers}
            setupdateUsers={setupdateUsers}
            setTilte={setTilte}
            setToggleForm={setToggleForm}
          />
        ))}
      </section>
  
    </main>
  );
}

export default App;
