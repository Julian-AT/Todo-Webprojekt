import React, {createContext, useContext, useState, useEffect } from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState(localStorage.getItem('colorMode'));
    const [currentMode, setCurrentMode] = useState(localStorage.getItem('themeMode'));
    const [themeSettings, setThemeSettings] = useState(false);
    const [languageSettings, setLanguageSettings] = useState('de');
    const [colorBlindMode, setColorBlindMode] = useState(false);

    
    useEffect(() => {
        if(colorBlindMode === true)
        {
            document.getElementById('root').style.filter = "grayscale(100%)"
        } else {
            document.getElementById('root').style.filter = "grayscale(0%)"
        }
    }, [colorBlindMode]);


    const setLanguage = (mode) => {
        setLanguageSettings(mode);
        localStorage.setItem('language', mode);

        setThemeSettings(false);
    }

    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);

    
        setThemeSettings(false);
    }

    const setColor = (mode) => {
        setCurrentColor(mode);
        localStorage.setItem('colorMode', mode);

        setThemeSettings(false);
    }

    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked]: true});
    }

    return (
        <StateContext.Provider 
            value={{ 
                activeMenu,
                setActiveMenu,
                isClicked,
                setIsClicked,
                handleClick,
                screenSize, setScreenSize,
                currentColor, currentMode,
                themeSettings, setThemeSettings,
                setMode, setColor,
                languageSettings, setLanguageSettings,
                setLanguage,
                colorBlindMode, setColorBlindMode,
            }}
        >
        {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext (StateContext);