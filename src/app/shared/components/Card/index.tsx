import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { servcioCrearAlquiler } from '../../../core/api/alquiler.repositorio';
import { obtenerCedulaUsuario } from './SwalDataInput';
import Alertas from './SwalAlert';
import { Bicicleta } from 'app/feature/Bicicleta/models/Bicicleta';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 300,
  },
});

interface BicicletaProps {
  bici: Bicicleta;
  listarBici: () => void;
}

export const MediaCardBici: React.FC<BicicletaProps> = ({bici, listarBici}) => {
  const [alquilerControl, setBotonAlquiler] =  useState(false);
  const classes = useStyles();
  const imagenPath = require(`../../../../assets/img/bicicletas/${bici.id}.jpg`)

  const handleClickAlquiler = async () => {
    const res = await obtenerCedulaUsuario();
    if (res.isConfirmed && res.value > 0) {
      const respuesta = await servcioCrearAlquiler(res.value, bici.id.toString())
      if (respuesta.status !== 201) {
        respuesta.json().then(({message}) => Alertas.alquilerNoRegistrado(message))
      } else {
        listarBici();
        setBotonAlquiler(true);
        Alertas.alquilerResgistrado();
      }
    }
  };

  useEffect(()=>{
    if (bici.estado !== 'libre') {
      setBotonAlquiler(true);
    }
  }, [])

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imagenPath}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h4">
            <b>Marca:</b> {bici.marca}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Estado: {bici.estado} <br/>
            Precio: $ {bici.valorHora} COP c/hr <br/>
            Descripcion: {bici.descripcion}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleClickAlquiler} disabled={alquilerControl} >
          Alquilar
        </Button>
        <Button size="small" color="primary" disabled={alquilerControl}>
          Reservar
        </Button>
      </CardActions>
    </Card>
  );
}
