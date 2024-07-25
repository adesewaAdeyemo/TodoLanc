import React, { useContext, useState } from 'react'
import Button from './Button'
import { ToDoContext } from '../layout/pages/Task';
import Input from './Input';
export default function Form( props ) {
  const { tableData, setTableData, showForm, setShowForm, currentData, setCurrentData } = useContext(ToDoContext);

  const title = tableData.title ? tableData.title : "Title";

  const tableHeader = tableData.header;

  const currentId = props.currentId ? props.currentId : 1;
  // const [currentId, setCurrentId] = useState(1);
  // const currentId = () => {
  //     const randomNum = Math.floor(Math.random() * 1000000000);
  //     return randomNum.toString().padStart(9, "0");
  // };


  const fieldsData = tableHeader.map((item, idx) => {
    return item === "S/N" ? (
      <input
        type="number"
        name="idx"
        key={idx}
        // value={Math.random(0, 9).toFixed(9)}
        value={currentData != null ? currentData[0].idx : currentId}
        className="hidden"
        readOnly
      />
    ) : (
      <div className="col-span-full pb-3" key={idx}>
        <label className="text-sm font-medium text-slate-900">{item}</label>
        <div className="mt-2">
          <Input
            item={item.toLowerCase()}
            val={currentData != null ? currentData[0][item.toLowerCase()] : ""}
            key={idx}
          />
        </div>
      </div>
    );
  });
  const closeForm = (e) => {
    e.preventDefault
    setCurrentData(null)
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
    console.log(data.idx);
    setTableData({ ...tableData, rows: [...tableData.rows, data] });
    // console.log(tableData);
    closeForm(e);
    alert("Form Submitted");
    } catch (error) {
      console.log(error);
    }
  };

  const updateForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const id = currentData[0].idx;
    const newData = tableData.rows.map((item) => {
      if (item.idx === id) {
        return data;
      } else {
        return item;
      }
    });
    setTableData({ ...tableData, rows: newData });
    console.log(tableData);
    setCurrentData(null);
    closeForm(e);
    alert("Form Updated");
  };

  const duplicateForm = (e) => {
    e.preventDefault();
    console.log(currentData[0]['idx']);
    // const id = currentData[0].idx;
    setCurrentData(...currentData, { ...currentData[0], idx: 0 });
    // console.log(currentData.idx);
  };

  return showForm ? (
    <form
      onSubmit={currentData == null ? submitForm : updateForm}
      className="absolute top-0 left-0 -translate-x-0 -translate-y-0 bg-opacity-25 bg-slate-900 w-full min-h-screen overflow-scroll"
    >
      <div className="px-10 py-8 max-h-10/12 rounded-sm bg-white lg:w-1/3 md:w-1/2 sm:w-5/6 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="">
          <div className="flex">
            <h2 className="text-2xl font-medium leading-7 text-slate-700">
              {title} Form
            </h2>
            {currentData == null ? (
              <Button cancel='true' onClick={closeForm}></Button>
            ) : (
              <Button className="ml-auto" onClick={duplicateForm}>Duplicate</Button>
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
            <Button type="submit">
              {currentData == null || currentData.id==0 ? "Add New" : "Update"}
            </Button>
          </div>
        </div>
      </div>
    </form>
  ) : null;
}
