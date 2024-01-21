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
    {
      primaryColor: "bg-[#FF7E67]",
      secondaryColor: "bg-[#FFF4F2]",
    },
    {
      primaryColor: "bg-[#6C5CE7]",
      secondaryColor: "bg-[#F4F1FA]",
    },
    {
      primaryColor: "bg-[#45AAB8]",
      secondaryColor: "bg-[#F2F9F9]",
    },
    {
      primaryColor: "bg-[#FFD166]",
      secondaryColor: "bg-[#FFFAF1]",
    },
    {
      primaryColor: "bg-[#6A0572]",
      secondaryColor: "bg-[#F9EBFF]",
    },
    {
      primaryColor: "bg-[#2ECC71]",
      secondaryColor: "bg-[#EAFBF5]",
    },
    {
      primaryColor: "bg-[#FF9F43]",
      secondaryColor: "bg-[#FFF8E6]",
    },
    {
      primaryColor: "bg-[#1B1464]",
      secondaryColor: "bg-[#F0EBFE]",
    },
    {
      primaryColor: "bg-[#2B9EB3]",
      secondaryColor: "bg-[#E3F8F7]",
    },
    {
      primaryColor: "bg-[#F96714]",
      secondaryColor: "bg-[#FFF3E6]",
    },
  ];

  const toggle = () => {
    setModal(!modal);
  };

  const updateTask = (obj) => {
    updateListArray(obj, index);
  };

  const handleDelete = () => {
    deleteTask(index);
  };

  return (
    <>
      <div className="task-container">
        <div className="card-wrapper w-[25rem] shadow-[0_1rem_2.5rem_rgba(0,0,0,0.15)]">
          <div
            className={`card-top ${colors[index % 5].primaryColor} h-2`}
          ></div>
          <div
            className={`task-holder w-full h-98 p-4 relative ${
              colors[index % 5].secondaryColor
            }`}
          >
            <h2 className="border-b-[1px] border-[#5b28c05e] text-[#000000e1] text-[1.3rem] font-semibold h-10 text-center">
              {taskObj.Name}
            </h2>
            <p className="mt-3 text-justify leading-6">{taskObj.Description}</p>

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
