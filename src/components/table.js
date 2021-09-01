import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow'; import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/Star';
import { makeStyles } from '@material-ui/core/styles';


const Styles = makeStyles((theme) => ({
    td: {
        textAlign: "right",
    },
    root: {
        width: '100%',
        borderBottom: "solid #636363 1px"
    },
    paper: {
        color: "white",
        backgroundColor: "#1b1818",
        fontSize: "2vh"
    },
    row: {
        textAlign: "right",
        backgroundColor: "#1b1818",
        color: "white",
        borderBottom: "none",
        width: "25%",
        fontSize: "1.7vh",
    },

}));

export default function Tableu() {
    const coins = useSelector((state) => state)
    const classes = Styles();
    return (
        <div className="scroll" style={{ color: "white", backgroundColor: "black ", height: "95vh", overflow: "auto", scrollbarWidth: "none" }}>
            {coins.map((item) => (
                <>
                    <Paper className={classes.root}>
                        <div className={classes.paper} style={{ textAlign: "left" }}>
                            <span > <img style={{
                                width: "2vh", margin: "8px", verticalAlign: "bottom"
                            }} src={item.icon}></img></span>
                            <b>{item.name}</b>
                        </div>
                        <TableContainer className={classes.container}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>

                                </TableHead>
                                <TableBody>
                                    {item.Indices.map((item) => (
                                        <TableRow style={{ backgroundColor: item.star ? "#ffff9042" : "#1b1818" }} role="checkbox" tabIndex={-1}  >
                                            <TableCell className={classes.row}><td>{item.nameC}</td></TableCell>
                                            <TableCell className={classes.row}> {item.number}</TableCell>
                                            <TableCell className={classes.row}><div style={{ color: item.Percent > 0 ? "red" : "green", textAlign: "center" }}>{item.Percent > 0 ? <>+</> : <></>}{item.Percent}%</div></TableCell>
                                            <TableCell className={classes.row}>{item.number2}<span style={{ color: item.star ? "rgb(241 166 41)" : "#636363", marginLeft: "5px", verticalAlign: "sub" }}><StarIcon /></span></TableCell>
                                        </TableRow>))}
                                </TableBody></Table></TableContainer></Paper>


                </>
            ))}
        </div>
    )
}
