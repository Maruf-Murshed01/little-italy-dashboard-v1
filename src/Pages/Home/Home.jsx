import { Link } from "react-router-dom"
import ApplicationShort from "../../Componants/ApplicationShort"
import ResInfoShort from "../../Componants/ResInfoShort"

import { useQuery } from "@tanstack/react-query";
import ResInfo from "../../Componants/ResInfo";
import { useState } from "react";
function Home() {

  const [selected, setSelected] = useState(new Date());


  const yet = selected.toISOString()
  const a = yet.split("T")
  const b = a[0]

  // console.log('This is spliteddddddddd',a[0])
  const { data: todayreserv = [] } = useQuery({
    queryKey: ['todays'],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_API}/todays?day=${b}`)
      return res.json()
    }
  })

  const { refetch, data: application = [] } = useQuery({
    queryKey: ['booking'],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_API}/allea`)
      return res.json()
    }
  })


  return (

    <>
      <div className="w-full py-10 flex flex-col">
        <div className="py-10 text-center text-4xl">
          <h1 className=" text-gray-900 dark:text-white font-bold ">Little Italy Dashboard</h1>
        </div>

        <div className="flex flex-col md:flex-row py-10 w-full justify-evenly gap-10 md:gap-0">
          <div >
            <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4 space-x-3">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Reservations</h5>
                <Link to="/today" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                  View all
                </Link>
              </div>
              <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                  {
                    todayreserv.length > 0 ? (
                      todayreserv.slice(0, 3).map((singcard, i) => (
                        <div key={i}>
                          <ResInfoShort name={singcard.name} persons={singcard.person} email={singcard.email}></ResInfoShort>
                        </div>
                      ))) : (
                      <ResInfoShort name={"Demo"} persons={"5"} email={"example@gmail.com"}></ResInfoShort>
                    )
                  }
                </ul>
              </div>
            </div>
          </div>

          <div className=" md:w-1/2">
            <div className="w-full  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Job Applications</h5>
                <Link to="/application" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                  View all
                </Link>
              </div>
              <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                  {
                     application.length>0?(
                    application.slice(0,3).map((singcard, i) => <div key={i}>
                      <ApplicationShort name={singcard.fullname} email={singcard.email} role={singcard.applyingrole} />
                    </div>)):(
                      <ApplicationShort name={"Demo Demo"} email={"example@gmail.com"} role={"Developer"} />
                    )
                  }

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home