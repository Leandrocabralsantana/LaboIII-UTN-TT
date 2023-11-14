import "./App.css";
import { Login } from "./Login";
import { useState } from "react";
import { TaskManager } from "./TaskManager";

// tiene 4 estados, uno es mostrar el login, el otro es si esta logueado, el otro es el usuario y el otro es la tarea
function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [userLogged, setUserLogged] = useState(false);
  const [showName, setShowName] = useState(true);
  const [task, setTask] = useState([]);

  const handleLogin = () => {
    setShowLogin(!showLogin);
  };

  const handleUserLogged = (userLogged) => {
    setUserLogged(!userLogged);
  };

  const handleCloseSession = () => {
    setUserLogged(false);
    setShowName(false);
  };

  const handleTask = (e) => {
    setTask(e.target.value);
  };

  return (
    <>
      {!userLogged ? (
        <button onClick={() => handleLogin()}>Iniciar sesión</button>
      ) : null}
      {showLogin ? (
        <Login
          handleUserLogged={handleUserLogged}
          handleCloseSession={handleCloseSession}
          isLogged={userLogged}
          showName={showName}
        />
      ) : null}
      {userLogged ? (
        <div>
          <p>¡Bienvenido!</p>
          <button onClick={() => handleCloseSession()}>Cerrar sesión</button>
        </div>
      ) : null}
      <TaskManager handleTask={handleTask} isLogged={userLogged} />
    </>
  );
}

export default App;
