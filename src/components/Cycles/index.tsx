import estilo from './Cycles.module.css'

export function Cycles(){
    return(
        <div className={estilo.cycles}>
            <span>Ciclos:</span>

            <div className={estilo.cycleDots}>
                <span className={`${estilo.cycleDot} ${estilo.workTime}`}></span>
            </div>
        </div>
    )
}