import React, { useEffect, useState } from "react";
import CreateTask from "./CreateTask";
import Card from "./Card";

const NotesList = () => {
  const [isCreateTaskModalOpen, setCreateTaskModalOpen] = useState(false);
  const [isEditTaskModalOpen, setEditTaskModalOpen] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(null);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("task"));
    if (Array.isArray(storedTasks)) {
      setTaskList(storedTasks);
    }
  }, []);

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

  const updateTask = (index, updatedTaskObj) => {
    setTaskList((prevTaskList) => {
      const newTaskList = [...prevTaskList];
      newTaskList[index] = updatedTaskObj;
      return newTaskList;
    });
    setEditTaskModalOpen(false);
  };

  const toggleCreateTaskModal = () => {
    setCreateTaskModalOpen(!isCreateTaskModalOpen);
  };

  const toggleEditTaskModal = (index) => {
    setSelectedTaskIndex(index);
    setEditTaskModalOpen(!isEditTaskModalOpen);
  };

  const addTask = (taskObj) => {
    setTaskList((prevTaskList) => [...prevTaskList, taskObj]);
    setCreateTaskModalOpen(false);
  };

  return (
    <>
      <div className="grid place-items-center bg-[#f4eeff] py-[2rem]">
        <h1 className="text-center text-[#000000b8] text-5xl font-bold">
          Create Your Notes
        </h1>
        <button
          onClick={toggleCreateTaskModal}
          className="bg-[#5b28c0] mt-[2rem] text-white flex items-center gap-[10px] py-[8px] px-[30px] rounded-md cursor-pointer"
        >
          <span className="text-3xl">+</span>
          <p>Create Task</p>
        </button>
      </div>
      <div className="task-container">
        <ul className="grid grid-cols-3 mt-[3rem] gap-[2rem]">
          {taskList &&
            taskList.map((obj, index) => (
              <Card
                key={index}
                index={index}
                deleteTask={deleteTask}
                updateTask={updateTask}
                taskObj={obj}
                toggleEditTaskModal={() => toggleEditTaskModal(index)}
              />
            ))}
        </ul>
      </div>
      <CreateTask
        isOpen={isCreateTaskModalOpen}
        toggle={toggleCreateTaskModal}
        taskFn={addTask}
      />
      {isEditTaskModalOpen && (
        <EditTask
          isOpen={isEditTaskModalOpen}
          toggle={() => setEditTaskModalOpen(false)}
          updateTask={(updatedTask) =>
            updateTask(selectedTaskIndex, updatedTask)
          }
          taskObj={taskList[selectedTaskIndex]}
        />
      )}
    </>
  );
};

export default NotesList;
