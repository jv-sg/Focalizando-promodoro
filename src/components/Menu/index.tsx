import { HistoryIcon, HouseIcon, MoonIcon, Settings2Icon, SunIcon } from 'lucide-react'
import estilos from './menu.module.css'
import { useState, useEffect } from 'react'

type AvalableThemes = 'dark' | 'light';

export function Menu(){

    const [theme, setTheme] = useState<AvalableThemes>(() => {
        const storageTheme = localStorage.getItem('theme') as AvalableThemes || 'dark';
        return storageTheme
    });

    const nextThemeIcon = {
        dark: <SunIcon/>,
        light: <MoonIcon/>,
    };

    function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,){
        event.preventDefault();
        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
            return nextTheme;
        });
    }
    
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme)
    }, [theme]);

    return(
        <nav className={estilos.menu} >
            <a href="#"
            className={estilos.menu_link}
            aria-label='Ir para a home'
            title='Ir para a home'>
                <HouseIcon/>
            </a>
            <a href="#"
            className={estilos.menu_link}
            aria-label='Checar histórico'
            title='Checar histórico'>
                <HistoryIcon/>
            </a>
            <a href="#"
            className={estilos.menu_link}
            aria-label='Ir para as configurações'
            title='Ir para as configurações'>
                <Settings2Icon/>
            </a>
            <a href="#"
            className={estilos.menu_link}
            aria-label='alterar o tema'
            title='alterar o tema'
            onClick={handleThemeChange}>
                {nextThemeIcon[theme]}
            </a>
        </nav>
    )
}