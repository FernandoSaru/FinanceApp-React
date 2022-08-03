import React from "react";
import GlobalStyle from "./styles/globalStyles";
import Header from "./components/header/header";
import Panel from "./components/panel/panel";


const App = () => {
    return (
    <>
    <Header />
    <Panel />
    <GlobalStyle />
    </>
    );
};

export default App;