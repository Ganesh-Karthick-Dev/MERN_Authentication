import React, { useEffect, useState } from "react";
import axios from "axios";
// import Updater from './Updater';

const ListOfUsers = () => {
  const [data, setData] = useState(null);
  // const [show,setShow] = useState(false)

  useEffect(() => {
    axios.get("http://localhost:8000/api/workout").then((val) => {
      // console.log(val.data);
      setData(val.data);
    });
  }, []);

  // const handleEdit = ()=> {
  //     // console.log(`edit button clicked`);
  //     setShow(!show)
  // }

  const handleDelete = (val) => {
    let { _id } = val;
    axios
      .delete(`http://localhost:8000/api/workout/${_id}`)
      .then(() => {
        console.log(`delete id successfully sent to server`);
      })
      .catch((err) =>
        console.log(
          `error while sent id to server as deleting request - ${err}`
        )
      );
      return window.location.reload()
  };

  return (
    <>
      <div className=" my-6 md:my-0 md:mx-0 mx-4 md:w-2/4 order-last md:order-first">
        <ul class="divide-y divide-gray-100 flex flex-col gap-5">
          {data !== null &&
            data.map((val) => {
              return (
                <li
                  key={val._id}
                  class="flex justify-between rounded-md bg-white py-5 px-4"
                >
                  <div class="flex min-w-0 gap-x-4">
                    <div class="">
                      <p class="text-md font-extrabold leading-6 mb-3 text-emerald-500">
                        {val.name}
                      </p>
                      <p class="mt-1 truncate text-xs font-bold leading-5 text-gray-500">
                        Load (kg) : {val.email}
                      </p>
                      <p class="mt-1 truncate text-xs font-bold leading-5 text-gray-500">
                        Reps : {val.number}
                      </p>
                      <p class="mt-1 text-xs leading-5 text-gray-500">
                        <time >3h ago</time>
                      </p>
                    </div>
                  </div>
                  <div class=" shrink-0 mx-3 flex flex-col items-end">
                    <button
                      onClick={() => handleDelete(val)}
                      className=" bg-slate-200 p-2 rounded-full text-black hover:bg-black hover:text-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default ListOfUsers;
