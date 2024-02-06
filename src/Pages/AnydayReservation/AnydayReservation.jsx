/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import { useState } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ResInfo from "../../Componants/ResInfo";

export default function AnydayReservation() {
  const [value, setValue] = useState(new Date());

  const day = moment(value).format("MMM D, YYYY");

  function onChange(nextValue) {
    setValue(nextValue);
  }

  const { data: anydayreserv = [] } = useQuery({
    queryKey: ["anydays", day],
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_API}/reservations/anydays?day=${day}`
      );
      return res.json();
    },
  });

  return (
    <>
      <div className="w-full mt-14 md:mt-0 m-5 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className=" flex items-center justify-center py-8">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white ">
            Reservations By Date
          </h5>
        </div>
        <div className="flex items-center justify-center mb-4">
          <Calendar onChange={onChange} value={value} />
        </div>
        <div className="flow-root">
          {anydayreserv.length > 0 ? (
            anydayreserv.map((singcard) => (
              <div key={singcard._id}>
                <ResInfo
                  name={singcard.name}
                  persons={singcard.person}
                  date={singcard.date}
                  time={singcard.slot}
                  phone={singcard.phone}
                  email={singcard.email}
                  orderdate={singcard.orderdate}
                ></ResInfo>
              </div>
            ))
          ) : (
            <p className="text-xl text-blue-700 text-center ">
              No reservations on {day}
            </p>
          )}
        </div>
      </div>
    </>
  );
}
