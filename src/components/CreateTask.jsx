import React, { useState } from "react";

const CreateTask = ({ isOpen, toggle, taskFn }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "taskName") {
      setTaskName(value);
    } else {
      setDescription(value);
    }
  };

  const handleTask = () => {
    const taskObj = {
      Name: taskName,
      Description: description,
    };

    taskFn(taskObj);
    setTaskName("");
    setDescription("");
  };

  return (
    <>
      {isOpen && (
        <div className="fixed mx-auto inset-0 w-[50rem] flex items-center justify-center">
          <div className="modal-overlay bg-black opacity-50 fixed inset-0"></div>
          <div className="modal-content bg-white p-6 rounded-md z-10">
            <form className="w-[50rem]">
              <h2 className="text-center text-3xl mb-5 pb-3 border-b-2 border-[#5b28c0] font-semibold">
                Add Notes
              </h2>
              <div className="form-group">
                <span className="opacity-[.9] text-[.9rem]">Notes Title</span>
                <input
                  type="text"
                  value={taskName}
                  name="taskName"
                  onChange={handleChange}
                  className="bg-[#f4eeff] py-3 px-4 w-full border-none outline-none rounded-md"
                  placeholder="Add Notes Title"
                />
              </div>
              <div className="form-group my-[2rem]">
                <span className="opacity-[.9] text-[.9rem]">Write Content</span>
                <textarea
                  value={description}
                  onChange={handleChange}
                  name="description"
                  className="resize-none bg-[#f4eeff] border-none outline-none rounded-md w-full py-3 px-4"
                  rows="6"
                  placeholder="Write notes Content"
                ></textarea>
              </div>
            </form>
            <div className="flex justify-end">
              <button
                onClick={handleTask}
                className="bg-[#5b28c0] flex items-center text-white px-5 py-2 mr-2 rounded"
              >
                <span className="text-2xl mr-2">+</span> Add Task
              </button>
              <button
                onClick={toggle}
                className="bg-gray-300 text-gray-700 px-5 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateTask;
