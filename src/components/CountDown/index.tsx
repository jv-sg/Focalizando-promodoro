import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import estilo from './CountDown.module.css'

export function CountDown(){
    const { state } = useTaskContext()
    return(
        <div className={estilo.container}>
                {state.formattedSecondsRemaining}
        </div>
    );
}
