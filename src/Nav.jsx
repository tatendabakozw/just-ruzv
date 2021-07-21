import React from 'react'
import useDarkMode from './useDarkMode';

function Nav() {
    const [colorTheme, setTheme ] = useDarkMode()
    return (
        <span onClick={() => setTheme(colorTheme)}>
            {colorTheme === 'light' ? ('light') : ('dark')}
        </span>
    )
}

export default Nav
