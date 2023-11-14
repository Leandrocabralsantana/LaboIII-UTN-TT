import { useState } from "react";

export const TaskManager = ({ isLogged }) => {
  console.log("El usuario esta loggeado", isLogged);
  const [taskList, setTasklist] = useState([]);
  const [task, setTask] = useState("");

  const handleNewTask = () => {
    setTasklist([...taskList, { text: task, completed: false }]);
  };
  const handleTaskInput = (e) => {
    setTask(e.target.value);
  };
  const handleDeleteTask = (index) => {
    const updatedTaskList = [...taskList];
    updatedTaskList.splice(index, 1);
    setTasklist(updatedTaskList);
  };
  const handleCompleted = (index) => {
    const updatedTaskList = [...taskList];
    updatedTaskList[index].completed = !updatedTaskList[index].completed;
    setTasklist(updatedTaskList);
  };
  console.log(taskList);

  return (
    <>
      {taskList.length > 0 ? (
        <div>
          Lista de tareas
          {taskList.map((item, index) => {
            return (
              <li key={index}>
                {item.text}
                <button
                  onClick={() => {
                    handleCompleted(index);
                  }}
                >
                  {item.completed ? (
                    <div style={{ background: "green" }}>"Terminado"</div>
                  ) : (
                    <div style={{ background: "red" }}>"No terminado"</div>
                  )}
                </button>
                <button
                  onClick={() => {
                    handleDeleteTask(index);
                  }}
                >
                  Eliminar tarea
                </button>
              </li>
            );
          })}
        </div>
      ) : (
        <>
          {isLogged ? (
            <p>No hay tareas.</p>
          ) : (
            <p>No hay tareas, le recomendamos registrarse en la app.</p>
          )}{" "}
        </>
      )}
      <label>Agregar nueva tarea</label>
      <input value={task} onChange={handleTaskInput} />
      <button onClick={handleNewTask}>+</button>
    </>
  );
};
