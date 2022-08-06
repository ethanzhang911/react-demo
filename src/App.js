import './App.css';
import Button from '@mui/material/Button';
import {createTheme, Grid, ThemeProvider} from "@mui/material";
import Header from "./components/Header";
import {useState} from "react";


const darkTheme = createTheme({
    palette: {
        mode: "dark"
    }
});


function App() {

    return (
        <div className="App">
            <ThemeProvider theme={darkTheme}>
                <Grid container spacing={0}>
                    <Grid item xs={1.5}>
                        <div className="LeftPanel">
                            {/*<LeftPanel/>*/}
                        </div>
                    </Grid>
                    <Grid item xs={10.5}>
                        <Header></Header>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </div>
    );
}

export default App;
