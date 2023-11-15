import { AiOutlinePhone, AiOutlineMail, AiOutlineClockCircle, AiOutlineCalendar, AiOutlineUser, AiOutlineUsergroupAdd } from 'react-icons/ai';

function ResInfo({name, persons, date, time, phone, email}) {
  return (
    <>
          <li className="py-3 sm:py-4">
            <div className="flex flex-col md:flex-row items-center space-x-4 justify-between">
              
              <div className="w-full md:w-1/3">
                <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group">
                  <AiOutlineUser className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 " />
                  <span className="ml-3 text-sm font-medium text-gray-900 truncate dark:text-white"> {name}</span>
                </div>
                <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group">
                  <AiOutlineUsergroupAdd className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 " />
                  <span className="ml-3 text-sm text-gray-500 truncate dark:text-gray-400"> {persons} Persons</span>
                </div>
              </div>

              <div className="w-full md:w-1/3">
                <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group">
                  <AiOutlineCalendar className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 " />
                  <span className="ml-3 text-sm text-gray-500 truncate dark:text-gray-400"> {date}</span>
                </div>
                <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group">
                  <AiOutlineClockCircle className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 " />
                  <span className="ml-3 text-sm text-gray-500 truncate dark:text-gray-400">{time}</span>
                </div>
              </div>

              <div className="w-full md:w-1/3">
                <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group">
                  <AiOutlinePhone className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 " />
                  <span className="ml-3 text-sm text-gray-500 truncate dark:text-gray-400"> {phone}</span>
                </div>
                <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group">
                  <AiOutlineMail className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 " />
                  <span className="ml-3 text-sm text-gray-500 truncate dark:text-gray-400">{email}</span>
                </div>
              </div>
            </div>
          </li>
    </>
  )
}

export default ResInfo