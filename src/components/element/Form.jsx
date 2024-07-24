import React, { useState, useContext } from 'react'
import Button from './Button'
import { ToDoContext } from '../layout/pages/Task';
import Input from './Input';
export default function Form() {
  const { tableData, setTableData, showForm, setShowForm, currentData} = useContext(ToDoContext);

  const title = tableData.title ? tableData.title : "Title";

  const tableHeader = tableData.header;


  // const [error, setError] = useState(null)

  // const [success, setSuccess] = useState(null)


  
  const fieldsData = tableHeader.map((item, idx) => {
    return item === "S/N" ? (
      <input
        type="number"
        name="idx"
        key={idx}
        value={Math.random(0, 9).toFixed(9)}
        className="hidden"
        readOnly
      />
    ) : (
      <div className="col-span-full pb-3" key={idx}>
        <label className="text-sm font-medium text-slate-900">{item}</label>
        <div className="mt-2">
          <Input item={item.toLowerCase()} val= {currentData ? currentData[0][item.toLowerCase()] : ""} key={idx} />
        </div>
      </div>
    );
  });
  const closeForm = (e) => {
    e.preventDefault
    setShowForm(!showForm)
  }

  const submitForm = (e) => {
    try {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    if (!data.title) {
      console.log("Title field is required");
      return("Title field is required");
    }
    console.log(data);
    setTableData({ ...tableData, rows: [...tableData.rows, data] });
    console.log(tableData);
    closeForm(e);
    alert("Form Submitted");
    } catch (error) {
      console.log(error);
    }
  };

  return showForm ? (
    <form
      onSubmit={submitForm}
      className="absolute top-0 left-0 -translate-x-0 -translate-y-0 bg-opacity-25 bg-slate-900 w-full min-h-screen overflow-scroll"
    >
      <div className="px-10 py-8 max-h-10/12 rounded-sm bg-white lg:w-1/3 md:w-1/2 sm:w-5/6 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="">
          <div className="flex">
            <h2 className="text-2xl font-medium leading-7 text-slate-700">
              {title} Form
            </h2>
            {currentData == null ? (
              <button
                type="button"
                className="ml-auto text-slate-400 hover:text-slate-500"
                onClick={closeForm}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            ) : (
              <Button className="ml-auto">Duplicate</Button>
            )}
          </div>
          <p className="my-1 text-sm font-light leading-6 text-slate-600">
            Add a new task to my Queue.
          </p>

          <div>{fieldsData}</div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
              onClick={closeForm}
            >
              Cancel
            </button>
            {currentData == null ? (
              <Button type="submit">Add New</Button>
            ) : (
              <Button type="submit">Update</Button>
            )}
          </div>
        </div>
      </div>
    </form>
  ) : null;
}
