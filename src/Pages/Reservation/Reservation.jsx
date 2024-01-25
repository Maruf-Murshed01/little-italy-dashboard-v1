/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import ResInfo from "../../Componants/ResInfo";
// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../contexts/UserContext";

const Reservation = () => {
  // const {log} = useContext(AuthContext)

  const { refetch, data: reserv = [] } = useQuery({
    queryKey: ["booking"],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_API}/reservations`);
      return res.json();
    },
  });

  const alreadySeen = (id) => {
    // console.log(id)
    fetch(`${import.meta.env.VITE_API}/bookingseen/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        refetch();
      });
  };

  // console.log(reserv)
  return (
    <div className="w-full mt-14 md:mt-0 m-5 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className=" flex items-center justify-center mb-4 py-8">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white ">
          Total Reservations
        </h5>
      </div>
      <div className="flow-root">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-700"
        >
          {reserv.length > 0 ? (
            reserv.map((singcard, i) => (
              <div key={i}>
                {/* <div className="card-actions justify-center">
                            <button onClick={() => alreadySeen(singcard._id)} className={singcard.condition === 'seen' ? 'btn btn-sm btn-ghost' : 'btn btn-sm btn-neutral'}>{singcard.condition}</button>
                        </div> */}

                <ResInfo
                  name={singcard.name}
                  persons={singcard.person}
                  date={singcard.date}
                  time={singcard.slot}
                  phone={singcard.phone}
                  email={singcard.email}
                />
              </div>
            ))
          ) : (
            <p className="text-2xl text-red-800 text-center ">
              &quot; No Reservation &quot;
            </p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Reservation;
