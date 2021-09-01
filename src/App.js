import './App.css';
import React from "react"
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Table from './components/table'
import Bottom from './components/bottomComponent'
function App() {
  return (
    <div className="Äpp">
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="md" >
          <Table />
          <Bottom />
        </Container>
      </React.Fragment></div>
  );
}

export default App;
