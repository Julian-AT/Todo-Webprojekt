const toggleMode = () => {
    const mode = localStorage.getItem('colorblindMode');
    if(!mode)
    {
        localStorage.setItem('colorblindMode', true);
        document.querySelector('body').style.filter = "grayscale(100%)"
    } else {
        if(mode === true)
        {
            localStorage.setItem('colorblindMode', false), 
            document.querySelector('body').style.filter = "grayscale(0%)"
        } else {
            localStorage.setItem('colorblindMode', true), 
            document.querySelector('body').style.filter = "grayscale(100%)"
        }
    }

}

