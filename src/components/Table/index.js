import React, { useState } from "react";
import './index.css'
import {TableContainer , Table, TableHead, TableBody, TableRow, TableCell} from "@mui/material";
import { makeStyles } from '@mui/styles';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Form from '../Form';

const styles = makeStyles({
    tableHead: {
        minWidth: 700,
        backgroundColor: '#e7f8f1',
        color: 'white'
    },
    tableBody: {
        cursor: 'pointer',
        '&:hover': {
            background: "#79cdcd",
         },
    },  
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        backgroundColor: '#595959',
        color: 'white',
        borderRadius: '30px',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
      },
      detail:{
          display: 'flex',
          justifyContent: 'space-between',
          alignContent: 'center',
        margin: '0 100px'
      }
})

function TableProduct(props){
    const classes = styles();

    const[showModal, setShowModal] = useState(false);
    const [popState, setPopState] = useState(null);
    const[showModalForm, setShowModalForm] = useState(false)

    function body (){
        return(
            <div className={classes.modal}>
                <div align="center">
                    <h2>Detalles del producto</h2>
                    {
                        popState ? 
                        <div>

                            <div className={classes.detail}>
                                <p>id  </p>
                                <p>{popState.id} </p>
                            </div>
                            <div className={classes.detail}>
                                <p>Estado de pago </p>
                                <p>{popState.status.ecartapi} </p>
                            </div>
                            <div className={classes.detail}>
                                <p>Total</p>
                                <p>{popState.totals.total} </p>
                            </div>
                            <div className={classes.detail}>
                                <p>Descuento</p>
                                <p>{popState.totals.discount} </p>
                            </div>
                        </div>        
                        : null 
                    }
                    <Button onClick={() => closeHandle()}>Cerrar </Button>
                 </div>
            </div>
        )

    }

    const openHandle = (val) => {
        setShowModal(true)
        setPopState(val)
    } 

    const closeHandle = () => {
        setShowModal(false)
        setPopState(null)
    } 

    const openHandleForm = () => {
        setShowModalForm(true)
        
    } 

    const closeHandleForm = () => {
        setShowModalForm(false)
        
    }
    

    return(
        <div className="First-container">
            <h2>Productos añadidos al carrito</h2>
            <Button onClick={() => openHandleForm()}>Agregar nuevo producto </Button>
            <TableContainer>
                <Table>
                    <TableHead className={classes.tableHead}>
                        <TableRow>
                            <TableCell>Sku</TableCell>
                            <TableCell >Nombre</TableCell>
                            <TableCell>Cantidad</TableCell>
                            <TableCell>Price</TableCell>
                        </TableRow>         
                    </TableHead>

                    <TableBody >
                        {
                            props.product.map((dat) =>( 
                                <TableRow className={classes.tableBody} onClick={() => openHandle(dat)}>
                                    <TableCell>{dat.items[0].sku}</TableCell>
                                    <TableCell>{dat.items[0].name}</TableCell>
                                    <TableCell>{dat.items[0].fulfillment.quantity}</TableCell>
                                    <TableCell>{dat.totals.total}</TableCell>
                                </TableRow>       
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
                <Modal 
                    open={showModal}
                    onClose={closeHandle}>
                        {body()}
                </Modal>
                <Modal 
                    open={showModalForm}
                    onClose={closeHandleForm}>
                   <Form></Form>
                </Modal>
        </div>
    )
}


export default TableProduct;