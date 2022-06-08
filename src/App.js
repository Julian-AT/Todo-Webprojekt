import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent, ToolTipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Today, Kanban, Calendar, Inbox } from './pages';

import { useStateContext } from './contexts/ContextProvider';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css'


const App = () => {

    const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode, setMode, setColor } = useStateContext();
    if(!localStorage.getItem('colorMode') || !localStorage.getItem('themeMode')) 
    {
        localStorage.setItem('colorMode', '#03C9D7')
        localStorage.setItem('themeMode', 'Light')
        window.location.reload()
    }
         

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
        <div className='overflow-hidden'>
            <div className='m-0 p-0'>
                <ToastContainer
                    theme={currentMode === 'Dark' ? 'dark' : 'light'}
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </div>
            
            <BrowserRouter>
                <div className='flex relative dark:bg-main-dark-bg'>
                    <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
                        <TooltipComponent content='Settings' position="TopCenter"> 
                            <button type='button' className='text-3xl p-3 hover: drop-shadow-xl hover:bg-light-gray text-white' onClick={() => themeSettings ? setThemeSettings(false) : setThemeSettings(true)} style={{ background: currentColor, borderRadius: '50%' }}> 
                                <FiSettings />
                            </button>
                        </TooltipComponent>
                    </div> 
                    { activeMenu ? (
                        <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white' >
                            <Sidebar />
                        </div>
                    ) : (
                        <div className='w-0 dark: bg-secondary-dark-bg'>
                            <Sidebar />
                        </div>
                    )}
                    <div className={
                        `dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72 ' : 'flex-2'} `
                    }>
                        <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                            <Navbar />
                        </div>
                        <div>
                            {themeSettings && <ThemeSettings />}

                        

                            <Routes>
                                {/* Navigation */}
                                <Route path="/" element={<Today />} />
                                <Route path="/inbox" element={<Inbox />} />
                                <Route path="/today" element={<Today />} />
                                <Route path="/calendar" element={<Calendar />} />
                                <Route path="/kanban" element={<Kanban />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    </div>
        
  )
}

export default App