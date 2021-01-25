import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Bicicleta } from '../../models/Bicicleta';
import { useEffect } from 'react';

import { MediaCardBici } from 'app/shared/components/Card/index';
import './styles.scss'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 3,
    },
    paper: {
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

interface GestionBicicletaProps {
  bicicleta: Array<Bicicleta>;
  listarBici: () => void;
}

export const GestionBicicleta: React.FC<GestionBicicletaProps> = ({ bicicleta, listarBici }) => {

  const classes = useStyles();
  useEffect(() => {
    listarBici();
  }, [listarBici]);

  return (
    <Grid container className={classes.root} spacing={3}>
      <Grid container justify="center" spacing={3}>
        {(bicicleta.length > 0) ? (bicicleta.map((bici) => (
          <Grid item xs={3} key={bici.id}>
            <Paper className={classes.paper} key={bici.id}>
              <MediaCardBici key={bici.id} bici={bici} listarBici={listarBici} />
            </Paper>
          </Grid>
        ))) : (undefined)}
      </Grid>
    </Grid>
  );
};

GestionBicicleta.propTypes = {
  bicicleta: PropTypes.array.isRequired,
  listarBici: PropTypes.func.isRequired
};
