import React from 'react'

export default function Input( props ) {
  const [item, value ] = [props.item, props.val];
  // console.log(props);
  console.log(item, value);
  
  return item === "description" ? (
    <textarea
      type="text"
      className="px-3 w-full border flex-1 border-slate-300 rounded-md py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
      placeholder="Description"
      name={item}
      defaultValue={value ? value : ""}
      
      /> 
  ) : item === "deadline" ? (
    <input
      type="date"
      name={item}
      defaultValue={value ? value : ""}
      
      className="px-3 w-full border flex-1 border-slate-300 rounded-md py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
    />
  ) : item === "repeat" ? (
    <select
      name={item}
      defaultValue={value ? value : ""}
      
      className="bg-white py-3 px-2 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-slate-200 sm:max-w-xs sm:text-sm sm:leading-6"
    >
      <option>Once</option>
      <option>Weekly</option>
      <option>Monthly</option>
    </select>
  ) : item === "priority" ? (
    <select
      name={item}
      defaultValue={value ? value : ""}
      
      className="bg-white py-3 px-2 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-slate-200 sm:max-w-xs sm:text-sm sm:leading-6"
    >
      <option>High</option>
      <option>Medium</option>
      <option>Low</option>
    </select>
  ) : item === "status" ? (
    <select
      name={item}
      defaultValue={value ? value : ""}
      
      className="bg-white py-3 px-2 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-slate-200 sm:max-w-xs sm:text-sm sm:leading-6"
    >
      <option>Done</option>
      <option>Pending</option>
      <option>Overdue</option>
      <option>Cancelled</option>
      <option>On Hold</option>
      <option>In Progress</option>
    </select>
  ) : (
    <input
      type="text"
      name={item}
      defaultValue={value ? value : ""}
      
      className="px-3 w-full border flex-1 border-slate-300 rounded-md py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
      placeholder="Eat Pasta"
    />
  );
}
