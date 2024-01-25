/* eslint-disable no-unused-vars */
import { useState } from "react";
// import {ResInfo} from '../../Componants/ResInfo'
import { useQuery } from "@tanstack/react-query";
import ResInfo from "../../Componants/ResInfo";

const NewReservation = () => {
  const [selected, setSelected] = useState(new Date());

  const yet = selected.toISOString();
  const a = yet.split("T");
  const b = a[0];

  // console.log('This is spliteddddddddd',a[0])
  const { data: todayreserv = [] } = useQuery({
    queryKey: ["todays"],
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_API}/reservations/todays?day=${b}`
      );
      //   console.log(res.json());
      return res.json();
    },
  });

  return (
    <>
      <div className="w-full mt-14 md:mt-0 m-5 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className=" flex items-center justify-center mb-4 py-8">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white ">
            Today&apos;s Reservations
          </h5>
        </div>
        <div className="flow-root">
          {todayreserv.length > 0 ? (
            todayreserv.map((singcard) => (
              <div key={singcard._id}>
                <ResInfo
                  name={singcard.name}
                  persons={singcard.person}
                  date={singcard.date}
                  time={singcard.slot}
                  phone={singcard.phone}
                  email={singcard.email}
                ></ResInfo>
              </div>
            ))
          ) : (
            <p className="text-2xl text-blue-700 text-center ">
              No reservation yet today
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default NewReservation;
