import estilo from './Estilos.module.css'

type HeadingProps = {
    children: React.ReactNode;
};

export function Heading({ children }: HeadingProps){
    return( <h1 className={estilo.heading}>{children}</h1> )
}