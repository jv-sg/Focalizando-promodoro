import { TimerIcon } from 'lucide-react';
import estilo from './Estilos.module.css'


export function Logo(){
    return(
        <div className={estilo.logo}>
            <a href="#" className={estilo.logo_link}>
                <TimerIcon/>
                <span>Focalizando</span>
            </a>
        </div>
    );
}
