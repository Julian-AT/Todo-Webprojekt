import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdOutlineCancel, MdChecklist } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } = useStateContext();

  const handleCloseSideBar = () => {
    if(activeMenu && screenSize <= 900) {
      setActiveMenu(false)
    }
  }

  const notImplemented = () => {
    toast.error(`Not available! Coming soon.`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
  }

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
       {activeMenu && (<>
        <div className="flex justify-between items-center">
            <Link to="/" onClick={handleCloseSideBar()} className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
              <MdChecklist /> <span>ToDo Liste</span>
            </Link>
          <div className='mr-3'>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button type='button' onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} style={{ color: 'rgb(153,171,180)', borderRadius: '50%'}} className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block">  { /* md:hidden ??*/ }
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
        </div>
        <div className='mt-10'>
          {links.map((item) => (
            <div key={item.title}>
              <p className='text-gray-400 m-3 mt-4 uppercase'>
                {item.title}
              </p>
              {item.links.map((link) => (
                <NavLink
                    to={link.toast ? `/${link.name}` : '/'}
                    key={link.name}
                    onClick={link.toast ? notImplemented : handleCloseSideBar }
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : '',
                    })}
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                    <div className='scale-125 left-10 ml-2'>{link.icon}</div>
                    <div className='absolute scale-75 pt-1.5 pl-2'>{link.text}</div>
                    <span className="capitalize ">{link.name}</span>
                </NavLink>
      
              ))}
            </div>
          ))}
        </div>
      </>)}
      {activeMenu && (
        <div className='absolute bottom-0 text-gray-400' >
        <span>© 2022 Julian S.</span>
      </div>
      )}
    </div>
  )
}

export default Sidebar