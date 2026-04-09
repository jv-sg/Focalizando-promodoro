import type { HomeProps } from '../../pages/Home';
import estilo from './CountDown.module.css'

export function CountDown({ state }: HomeProps){
    return(
        <div className={estilo.container}>
                {state.formattedSecondsRemaining}
        </div>
    );
}
