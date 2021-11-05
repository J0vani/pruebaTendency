import axios from 'axios';
import { useEffect, useState } from 'react';
import {TextField} from "@mui/material";
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import {insertProduct} from '../../services'


const useStyles =  makeStyles({
    field:{
        
        marginTop: 20,
        marginLeft: 20,
        marginRight:20,
    },
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        backgroundColor: '#ffffff',
        color: 'black',
        borderRadius: '30px',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
    },
    tittle:{
        marginTop: 20, 
        marginLeft: 20,
        
    },
    button:{
        marginTop: 20,
        marginBottom: 30,
        marginLeft: 250,
        
        
    }
})


function Form() {

    const [formValues, setFormValues] = useState({
        sku: '',
        name: '',
        quantity: '',
        price: '',
    })
        
    const handleChange = e => {
        const {name, value} = e.target
        console.log(name,value)

        setFormValues({
            ...formValues, [name] : value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        insertProduct(formValues)
    }

    
    const classes = useStyles();

    return (
        <div className={classes.modal}>
            <form onSubmit={handleSubmit} >
            <h2 className={classes.tittle}>Agregar un nuevo producto</h2>
            
            <div className={classes.field}>
                <TextField
                    
                    label="Sku"
                    variant="outlined"
                    name = "sku"
                    color="primary"
                    required
                    fullWidth
                    onChange={handleChange}
                />
            </div>
            <div className={classes.field}>
            <TextField
                    
                    label="Nombre"
                    variant="outlined"
                    name = "name"
                    color="primary"
                    required
                    fullWidth
                    onChange={handleChange}
                />
            </div>
            <div className={classes.field}>
            <TextField
                    
                    label="Cantidad"
                    variant="outlined"
                    name = "quantity"
                    color="primary"
                    required
                    fullWidth
                    onChange={handleChange}
                />
            </div>
            <div className={classes.field}>
            <TextField
                    
                    label="Precio"
                    variant="outlined"
                    name = "price"
                    color="primary"
                    required
                    fullWidth
                    onChange={handleChange}
                />
            </div>
            <div className={classes.button}>
            <Button type='submit'>Agregar</Button>        
            </div>
            
            </form>
        </div>
      
    );
}

export default Form;
