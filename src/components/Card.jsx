import React, { useState } from "react";
import EditTask from "./EditTask";

const Card = ({ taskObj, index, deleteTask, updateListArray }) => {
  const [modal, setModal] = useState(false);

  const colors = [
    {
      primaryColor: "bg-[#5D93E1]",
      secondaryColor: "bg-[#ECF3FC]",
    },
    {
      primaryColor: "bg-[#F9D288]",
      secondaryColor: "bg-[#FEFAF1]",
    },
    {
      primaryColor: "bg-[#5DC250]",
      secondaryColor: "bg-[#F2FAF1]",
    },
    {
      primaryColor: "bg-[#F48687]",
      secondaryColor: "bg-[#FDF1F1]",
    },
    {
      primaryColor: "bg-[#B964F7]",
      secondaryColor: "bg-[#F3F0FD]",
    },
  ];

  const toggle = () => {
    setModal(!modal);
  };

  const updateTask = (obj) => {
    updateTask(obj, index);
  };

  const handleDelete = () => {
    deleteTask(index);
  };

  return (
    <>
      <div className="task-container">
        <div className="card-wrapper w-[25rem] shadow-md">
          <div
            className={`card-top ${colors[index % 5].primaryColor} h-2`}
          ></div>
          <div
            className={`task-holder w-full h-98 p-4 relative ${
              colors[index % 5].secondaryColor
            }`}
          >
            <span className="card-header rounded-md max-w-max text-xl font-medium h-10 text-center">
              {taskObj.Name}
            </span>
            <p className="mt-3 text-justify">{taskObj.Description}</p>

            <div className="flex mt-2 gap-[1rem] items-center justify-end">
              <i
                className="ri-edit-2-fill w-[30px] h-[30px] grid place-items-center rounded-full bg-[#ffffffcd] text-[#24b372] font-semibold"
                onClick={toggle}
                style={{
                  color: colors[index % 5].primaryColor,
                  cursor: "pointer",
                }}
              ></i>
              <i
                className="ri-delete-bin-line w-[30px] h-[30px] grid place-items-center rounded-full bg-[#ffffffcd] text-[#ff6565] font-semibold"
                onClick={handleDelete}
                style={{
                  color: colors[index % 5].primaryColor,
                  cursor: "pointer",
                }}
              ></i>
            </div>
          </div>
        </div>
        <EditTask
          isOpen={modal}
          toggle={toggle}
          updateTask={updateTask}
          taskObj={taskObj}
        />
      </div>
    </>
  );
};

export default Card;
