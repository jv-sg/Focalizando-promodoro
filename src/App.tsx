//PascalCase
//App
//HeaderHeading
import './styles/theme.css'
import './styles/global.css'

import { Container } from './components/Container'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu/index.tsx'

export function App(){

    return (
    <>
    <Container><Logo/></Container>
    <Container><Menu/></Container>
    </>
    )
}

//Export nomeado
//export { App }