import { HistoryIcon, HouseIcon, Settings2Icon, SunIcon } from 'lucide-react'
import estilos from './menu.module.css'


export function Menu(){
    return(
        <nav className={estilos.menu} >
            <a href="#" className={estilos.menu_link}>
                <HouseIcon/>
            </a>
            <a href="#" className={estilos.menu_link}>
                <HistoryIcon/>
            </a>
            <a href="#" className={estilos.menu_link}>
                <Settings2Icon/>
            </a>
            <a href="#" className={estilos.menu_link}>
                <SunIcon/>
            </a>
        </nav>
    )
}