import estilo from './Estilos.module.css'

type ContainerProps = {
    children: React.ReactNode
}

export function Container({children} : ContainerProps){
    return(
        <div className={estilo.container}>
            <div className={estilo.content}>
                {children}
            </div>
    </div>
    );
}
