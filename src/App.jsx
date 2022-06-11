import React from "react"
import { ThemeProvider } from "styled-components"
import Header from "./components/Header"
import { Container } from "./components/styles/Container.styled"
import GlobalStyles from "./components/styles/GlobalStyle"
import Theme from "./components/styles/Theme.light"


function App() {
    return (
        <ThemeProvider theme={ Theme }>
            <Container>
                <GlobalStyles />
                    <Header />
                    <h1>Diego Augusto</h1>             
            </Container>
        </ThemeProvider>
    )
}
export default App
