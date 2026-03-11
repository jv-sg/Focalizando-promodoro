import estilo from './Estilos.module.css'

export function Footer(){
    return( <footer className={estilo.footer}>
        <a href="#">Entenda a técnica Pomodoro</a>
        <a href="#">Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com empenho</a>
    </footer> )
}