import React from 'react'
import { MdOutlineCancel } from 'react-icons/md';
import { BsCheck } from 'react-icons/bs';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { colorBlindOptions, contextMenuItems, Languages, themeColors } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const ThemeSettings = () => {
  const { setColor, setMode, currentMode, currentColor, setThemeSettings, setLanguage, languageSettings, colorBlindMode, setColorBlindMode } = useStateContext();

  return (
    
    <div className='bg-half-transparent w-screen fixed top-0 right-0'>
      <div className='float-right h-screen dark:text-gray-200 bg-white dark:bg-main-dark-bg w-400'>
        <div className='flex justify-between items-center p-4 ml-4'>
          <p className='font-semibold text-xl'>Settings</p>
          <button type='button' onClick={() => setThemeSettings(false)} style={{ color: 'rgb(153,171,180)', borderRadius: '50%'}} className='text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray'>
            <MdOutlineCancel />
          </button>
        </div>
          <div className='flex-col border-t-1 border-color p-4 ml-4'>
          <p className='font-semibold text-lg'>Theme Options</p>
          <div className='mt-4'>
            <input type='radio' id='light' name='theme' value='Light' className='cursor-pointer' onChange={setMode} checked={currentMode === 'Light'} />
            <label htmlFor='light' className='ml-2 text-md cursor-pointer'>
              Light
            </label>
          </div>
          <div className='mt-4'>
            <input type='radio' id='dark' name='theme' value='Dark' className='cursor-pointer' onChange={setMode} checked={currentMode === 'Dark'} />
            <label htmlFor='dark' className='ml-2 text-md cursor-pointer'>
              Dark
            </label>
          </div>
        </div>

        <div className='flex-col border-t-1 border-color p-4 ml-4'>
        <p className='font-semibold text-lg'>Theme Colors</p>
          <div className='flex gap-3'>
            {themeColors.map((item, index) => (
              <TooltipComponent key={index} content={item.name} position="TopCenter">
                <div className='relative mt-2 cursor-pointer flex gap-5 items-center'>
                  <button type='button' className='h-10 w-10 rounded-full cursor-pointer' style={{ backgroundColor: item.color }} onClick={() => setColor(item.color)}>
                    <BsCheck className={`ml-2 text-2xl text-white ${item.color === currentColor ? 'block' : 'hidden'}`}/>
                  </button>
                </div>
              </TooltipComponent>
            ))} 
          </div>
        </div>

        <div className='flex-col border-t-1 border-color p-4 ml-4'>
          <p className='font-semibold text-xl'>Advanced Theme Options</p>
          <div className='relative mt-3 cursor-pointer flex gap-5 items-center'>
              <lable htmlFor="toggle-colorblind-mode">
                
                <input type="checkbox" id='toggle-colorblind-mode' className='cursor-pointer h-5 w-10 rounded-full appearance-none bg-slate-400 dark:bg-slate-400 bg-opacity-75 transition duration-200 relative' onClick={() => colorBlindMode ? setColorBlindMode(false) : setColorBlindMode(true)}/>
                <label className='ml-3 justify-start'>Color Blind Mode</label>
              </lable>
            </div>
        </div>

        <div className='flex-col border-t-1 border-color p-4 ml-4'>
          <p className='font-semibold text-xl'>Language Options</p>
          <div className='flex gap-3'>
                {Languages.map((item, index) => (
                  <TooltipComponent key={index} content={item.name} position="TopCenter">
                  <div className='relative mt-2 cursor-pointer flex gap-5 items-center'>
                    <button type='button' className='h-10 w-10 bg-contain rounded-full cursor-pointer' style={{ backgroundImage: `url(${item.img})` }} onClick={() => setLanguage(item.id)}>
                      <div className={`h-10 w-10 rounded-full border-2 ${item.id === languageSettings ? 'block' : 'hidden'}`} />

                    </button>
                  </div>
                </TooltipComponent>
                ))}
                
          </div>
          <div className='italic text-xs mt-2'>
            Language Options do not work
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThemeSettings