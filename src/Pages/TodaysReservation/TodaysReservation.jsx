import { useState } from 'react';

import { useQuery } from '@tanstack/react-query';

const NewReservation = () => {
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


    return (

        <>
            <div className="w-full mt-14 md:mt-0 m-5 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div className=" flex items-center justify-center mb-4 py-8">
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white ">Today's Reservations</h5>
                </div>
                <div className="flow-root">
                    {
                        todayreserv.length > 0 ? (
                            todayreserv.map((singcard, i) => (
                                <div key={i}>
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
                            <p className='text-2xl text-red-800 text-center '>"No reservation yet today"</p>
                        )
                    }
                </div>
            </div>
        </>

    );
};

export default NewReservation;