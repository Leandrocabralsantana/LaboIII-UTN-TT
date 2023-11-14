import { useState } from "react";

export const Login = ({
  handleUserLogged,
  handleCloseSession,
  showName,
  isLogged,
}) => {
  const [username, setUsername] = useState("");
  const [userLoggedName, setUserLoggedName] = useState(false);

  const handleLogin = () => {
    handleUserLogged();
    setUserLoggedName(username);
    console.log(userLoggedName);
  };

  const handleClick = () => {
    if (username.includes("o" || "O")) {
      alert("Usuario inválido para registrarse");
    } else {
      handleLogin();
    }
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
    if (e.target.value.includes("o" || "O")) {
      alert("Por favor, ¡Nombres de usuario sin la letra o!");
    }
  };
  return (
    <>
      {userLoggedName && showName ? (
        <p>Su nombre de usuario es: {userLoggedName}</p>
      ) : (
        <div>
          <label>Ingrese su nombre de usuario</label>
          <input value={username} onChange={handleUsername} />
          {!userLoggedName ? (
            <button
              onClick={() => {
                handleClick();
              }}
            >
              Registrar usuario
            </button>
          ) : null}
          <p>Su nombre de usuario para registrarse es {username}</p>
        </div>
      )}
    </>
  );
};
