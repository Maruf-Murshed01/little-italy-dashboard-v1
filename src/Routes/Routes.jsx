import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main'
import Reservation from '../Pages/Reservation/Reservation'
import Home from '../Pages/Home/Home'
import Login from '../Login/Login'
import TodaysReservation from '../Pages/Applications/JobApplication'
import EmployeeApplication from '../Pages/Applications/JobApplication'
import NewReservation from '../Pages/TodaysReservation/TodaysReservation'
import AddReview from '../Pages/Add Review/AddReview'
import Notes from '../Pages/Notes/Notes'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/reservation',
                element: <Reservation></Reservation>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/application',
                element: <EmployeeApplication></EmployeeApplication>
            },
            {
                path: '/today',
                element: <NewReservation></NewReservation>
            },
            {
                path:'/addRe',
                element: <AddReview></AddReview>
            },
            {
                path:'/notes',
                element:<Notes></Notes>
            },
            
        ]
    }
])

export default router