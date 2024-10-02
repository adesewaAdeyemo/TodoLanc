import React, { useState } from 'react'
import Button from './Button'
import Input from './Input';



export default function Form( props ) {
  const [
    showForm,
    setShowForm,
    currentData,
    setCurrentData,
    tableRows,
    setTableRows,
    formField,
    show
  ] = [
    props.showForm,
    props.setShowForm,
    props.currentData,
    props.setCurrentData,
    props.tableRows,
    props.setTableRows,
    props.formField,
    props.show
  ];
  const [duplicate, setDuplicate] = useState(false);


  const fieldsData = formField.map((item, idx) => {
    return  item === "S/N" ? (
      <input
        type="number"
        name="idx"
        key={idx}
        value={currentData != null && !duplicate ? currentData[0].idx : '' }
        className="hidden"
        readOnly
      />
    ) : (
      <div className="col-span-full pb-3" key={idx}>
        <label className="text-sm font-medium text-slate-900">{item}</label>
        <div className="mt-2">
          {/* if the field is this, use a variant. */}
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
    console.log("close form", tableRows)
    e.preventDefault
    setCurrentData(null)
    setShowForm(!showForm)
  }

  const submitForm = (e) => {
    try {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    setTableRows(tableRows =>{
      return  [...tableRows, {...data, idx: Math.floor(Math.random() * 1000000000).toString().padStart(9, "0") }]
    });
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
    const id = data.idx;
    const newData = tableRows.map((item) => {
      if (item.idx === id) {
        return data;
      } else {
        return item;
      }
    });
    setTableRows(newData)
    setCurrentData(null);
    closeForm(e);
    alert("Form Updated");
  };

  const duplicateForm = (e) => {
    e.preventDefault();
    console.log('d current', currentData[0]);
    setDuplicate(true);
  };

  return showForm ? (
    <form
      onSubmit={currentData != null && !duplicate ? updateForm : submitForm}
      className="absolute top-0 left-0 -translate-x-0 -translate-y-0 bg-opacity-25 bg-slate-900 w-full min-h-screen overflow-scroll"
    >
      <div className="px-10 py-8 max-h-10/12 rounded-sm bg-white lg:w-1/3 md:w-1/2 sm:w-5/6 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="">
          <div className="flex">
            <h2 className="text-2xl font-medium leading-7 text-slate-700">
              Task Form
            </h2>
            {currentData != null && !duplicate ? (
              <Button className={show ? "ml-auto" : "hidden"} onClick={duplicateForm}>
                Duplicate
              </Button>
            ) : (
              <Button cancel="true" onClick={closeForm}></Button>
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
            <Button type="submit" className={show ? "" : "hidden"}>
              {currentData != null && !duplicate ? "Update" : "Add New"}
            </Button>
          </div>
        </div>
      </div>
    </form>
  ) : null;
}
