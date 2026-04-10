import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";

export function MainForm(){
    const {serState} = useTaskContext

    return(
    <form className='form' action="">
        <div className='formRow'>
            <DefaultInput
            labelText='task'
            placeholder='Digite algo'
            id="meuId"
            type='text'
            />
        </div>

        <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>

        <div className='formRow'>
            <Cycles/>
        </div>

        <div className='formRow'>
            <DefaultButton color='red' icon={<PlayCircleIcon/>}/>
        </div>
    </form>
    )
}