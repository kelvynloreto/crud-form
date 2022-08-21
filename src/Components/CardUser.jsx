import React, { useState } from "react";
import axios from "axios";

const CardUser = ({
  user,
  getAllUsers,
  setupdateUsers,
  setTilte,
  setToggleForm,
}) => {
  const [opcionDeleteUser, setOpcionDeleteUser] = useState(false);
  const [response, setResponse] = useState(false);
  const updateUser = () => {
    setupdateUsers(user);
    setTilte(false);
    setToggleForm(true);
  };

  const deleteUser = () => {
    setOpcionDeleteUser(true);
  };

  const respondeYes = () => {
    const url = `https://users-crud1.herokuapp.com/users/${user.id}/`;
    axios
      .delete(url)
      .then((res) => {
        console.log(res.data);
        getAllUsers();
      })
      .catch((err) => console.log(err));
    setResponse(true);
    setOpcionDeleteUser(false);
    getAllUsers();
  };
  const respondeNo = () => {
    setResponse(false);
    setOpcionDeleteUser(false);
  };

  return (
    <article className="card_user">
      <h2 className="card_tilte">
        {user.first_name} {user.last_name}
      </h2>
      <div className="card_email">
        <div className="hr"></div>
        <span>Correo</span>
        <p>{user.email}</p>
      </div>
      <span>Cumpleaños</span>
      <div className="card-container-date">
        <img
          className="img-gift"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAARxJREFUSEvtleFtwjAQhb9MABtAJ2i7AWwAEwATtBtQNoAJ6AaFDdoJ2g2gG3QD0JPOkZ3YkQyJ+FEsRUp87+69u/M5BR2vouP4NBFMgBdgBOyAFfBjgp6AJSDMJ7AxTE1vikCOHxX0HzAGjsAB6Ffs0xhJikBKH031GtAzM7W/9v5lGbxaNvpWtsFKEZwM5exSK+U9z/vB9rRVxZewFIHKoWDPXt3fTKmc96Ze7+rHN6DMhk0ZKL1tDJR50pTpwsoZnCIZBpnBUnDFUgkDgmQdvSjZGL8H2c4J+UEcn8A1to0qlQ33CdTk9xb6oODzWJOd8qZSZdtic5AdxJRF/e4E/on7RyW6ZuBqN2rsFF06cMGAuebc9Kffxp3EGV38RxlRFzPlAAAAAElFTkSuQmCC"
        />
        <p> {user.birthday}</p>
      </div>

      <div className="hr"></div>
      <div className="card_footer-icons">
        <div onClick={deleteUser} className="card_container-icon ">
          <svg
            className="card_icon trash"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z" />
          </svg>
        </div>
        <div onClick={updateUser} className="card_container-icon ">
          <svg
            className="card_icon update"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32zM421.7 220.3L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3z" />
          </svg>
        </div>
      </div>
      <section
        className={opcionDeleteUser ? "delete_opcion" : "hide-delete_opcion"}
      >
        <div className="delete_container">
          <div className="equis_container equis" onClick={respondeNo}>
            X
          </div>
          <h2>
            ¿Estas seguro que quieres eliminar al usuario {user.first_name}{" "}
            {user.last_name} ?
          </h2>
          <div className="delete_btn-container">
            <button className="btn_yes" onClick={respondeYes}>Si</button>
            <button className="btn_no " onClick={respondeNo}>No</button>
          </div>
        </div>
      </section>
   
    </article>
  );
};

export default CardUser;
