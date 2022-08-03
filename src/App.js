import React from "react";
import GlobalStyle from "./styles/globalStyles";
import Header from "./components/header/header";
import Panel from "./components/panel/panel";
import Form from "./components/form/form";


const App = () => {
    return (
    <>
    <Header />
    <Panel />
    <Form />
    <GlobalStyle />
    </>
    );
};

export default App;