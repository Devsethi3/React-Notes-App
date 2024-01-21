import React, { useEffect, useState } from "react";
import CreateTask from "./CreateTask";
import Card from "./Card";

const NotesList = () => {
  const [isCreateTaskModalOpen, setCreateTaskModalOpen] = useState(false);
  const [taskList, setTaskList] = useState(() => {
    // Use a function for the initial state to check local storage
    const storedTasks = JSON.parse(localStorage.getItem("task"));
    return Array.isArray(storedTasks) ? storedTasks : [];
  });

  useEffect(() => {
    // Update local storage whenever taskList changes
    localStorage.setItem("task", JSON.stringify(taskList));
  }, [taskList]);

  useEffect(() => {
    // Update local storage whenever taskList changes
    localStorage.setItem("task", JSON.stringify(taskList));
  }, [taskList]);

  const deleteTask = (index) => {
    const tempList = [...taskList];
    tempList.splice(index, 1);
    setTaskList(tempList);
    localStorage.setItem("task", JSON.stringify(tempList));
  };

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("task"));
    if (Array.isArray(storedTasks)) {
      setTaskList(storedTasks);
    }
  }, []);

  const updateListArray = (obj, index) => {
    let tempList = [...taskList];
    tempList[index] = obj;
    localStorage.setItem("task", JSON.stringify(tempList));
    setTaskList(tempList);
  };

  const toggleCreateTaskModal = () => {
    setCreateTaskModalOpen(!isCreateTaskModalOpen);
  };

  const addTask = (taskObj) => {
    setTaskList((prevTaskList) => [...prevTaskList, taskObj]);
    setCreateTaskModalOpen(false);
  };

  return (
    <>
      <div className="grid place-items-center bg-[#f4eeff] py-[2rem]">
        <h1 className="text-center text-[#000000dc] text-5xl font-bold">
          Create Your Notes
        </h1>
        <button
          onClick={toggleCreateTaskModal}
          className="bg-[#5b28c0] shadow-[0_8px_30px_#5b28c09b] mt-[2rem] text-white flex items-center gap-[10px] py-[8px] px-[30px] rounded-md cursor-pointer"
        >
          <span className="text-3xl">+</span>
          <p>Create Task</p>
        </button>
      </div>
      <div className="task-container">
        <ul className="grid task-container-grid grid-cols-3 mt-[3rem] gap-[2rem]">
          {taskList &&
            taskList.map((obj, index) => (
              <Card
                key={index}
                taskObj={obj}
                index={index}
                deleteTask={deleteTask}
                updateListArray={updateListArray}
              />
            ))}
        </ul>
      </div>
      <CreateTask
        isOpen={isCreateTaskModalOpen}
        toggle={toggleCreateTaskModal}
        taskFn={addTask}
      />
    </>
  );
};

export default NotesList;
