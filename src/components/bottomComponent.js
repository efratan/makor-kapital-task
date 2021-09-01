import React from 'react'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import BorderAllIcon from '@material-ui/icons/BorderAll';

const Styles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        width: "100%"
    },
    all: {
        width: "100%",
        height: "5vh",
    },
    button1: {
        width: "30%",
        fontSize: "1.6vh"

    },
    button2: {
        width: "30%",
        backgroundColor: "#1b1818",
        fontSize: "1.6vh"

    },

    button3: {
        width: "10%",
        backgroundColor: "#1b1818",
        fontSize: "1.6vh"

    }



}));

export default function bottomComponent() {
    const classes = Styles();

    return (
        <div className={classes.root}>
            <ButtonGroup className={classes.all} variant="contained" color="primary" aria-label="contained primary button group">
                <Button className={classes.button1}>Chart</Button>
                <Button className={classes.button2}>Book</Button>
                <Button className={classes.button2}>Trade</Button>
                <Button className={classes.button3}><BorderAllIcon /></Button>
            </ButtonGroup>

        </div>
    )
}
