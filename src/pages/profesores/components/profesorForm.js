import PropTypes from 'prop-types';
// material-ui
import {
  Typography,
  Stack,
  LinearProgress,
  Grid,
  TextField,
  MenuItem,
  Button,
  Select,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Radio
} from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// react-router-dom
import { Link } from 'react-router-dom';

const ProfesorForm = ({ profesor, isEdit }) => {
  if (!profesor && isEdit) {
    return <LinearProgress />;
  }

  return (
    <Stack spacing={3} px={20}>
      <MainCard>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={4} md={6} lg={4}>
            <Typography variant="h5" fontWeight="bold">
              Detalles Básicos
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4} md={6} lg={8}>
            <Stack spacing={2}>
              <TextField id="outlined-basic" label="Nombre" variant="outlined" defaultValue={profesor.name} />
              <TextField id="outlined-basic" label="Apellido" variant="outlined" defaultValue={profesor.lastName} />
              <TextField id="outlined-basic" label="Correo" variant="outlined" defaultValue={profesor.email} />
              <TextField id="outlined-basic" label="Teléfono" variant="outlined" defaultValue={profesor.phone} />
              <TextField id="outlined-basic" label="Dirección" variant="outlined" defaultValue={profesor.address} />
              <TextField id="outlined-basic" label="Año" variant="outlined" defaultValue={profesor.age} />
              <FormLabel id="demo-radio-buttons-group-label">Género</FormLabel>
              <RadioGroup defaultValue={profesor.gender} row>
                <FormControlLabel value="female" control={<Radio />} label="Femenino" />
                <FormControlLabel value="male" control={<Radio />} label="Masculino" />
                <FormControlLabel value="other" control={<Radio />} label="Otros" />
              </RadioGroup>
            </Stack>
          </Grid>
        </Grid>
      </MainCard>
      <MainCard>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={4} md={6} lg={4}>
            <Typography variant="h5" fontWeight="bold">
              Identificación
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4} md={6} lg={8}>
            <Stack spacing={2}>
              <Select
                labelId="demo-simple-select-label"
                defaultValue={profesor.typeDocument}
                id="demo-simple-select"
                label="Tipo de Documento"
              >
                <MenuItem value="passport">Pasaporte</MenuItem>
                <MenuItem value="identification_card">Carta de Identificación</MenuItem>
              </Select>
              <TextField id="outlined-basic" label="Number document" variant="outlined" defaultValue={profesor.numberDocument} />
              <FormLabel id="demo-simple-select-label">Fecha de nacimiento</FormLabel>
              <TextField id="outlined-basic" type="date" variant="outlined" placeholder="DD/MM/AAAA" defaultValue={profesor.dateBirth} />
            </Stack>
          </Grid>
        </Grid>
      </MainCard>

      <MainCard>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={4} md={6} lg={4}>
            <Typography variant="h5" fontWeight="bold">
              Materias
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4} md={6} lg={8}>
            <Stack spacing={2}>
              <Select labelId="demo-simple-select-label" defaultValue={profesor.typeSubject} id="demo-simple-select" label="Type Document">
                <MenuItem value="software_development">Desarrollo de Software</MenuItem>
                <MenuItem value="machine_learning">Ciencias Sociales</MenuItem>
                <MenuItem value="mathematics">MatematicasI</MenuItem>
                <MenuItem value="mathematics">Matematicas II</MenuItem>
                <MenuItem value="ingles">Ingles</MenuItem>
                <MenuItem value="ingle Is">Ingles I</MenuItem>
                <MenuItem value="Tecnologías Emergentes">Tecnologías Emergentes</MenuItem>
              </Select>
            </Stack>
          </Grid>
        </Grid>
      </MainCard>
      <Stack>
        <Grid container spacing={2} direction="row-reverse">
          <Grid item>
            <Button size="small" variant="contained">
              Crear Profesor
            </Button>
          </Grid>

          <Grid item>
            <Button size="small" variant="outlined" component={Link} to="/profesores">
              Cancelar
            </Button>
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
};

ProfesorForm.propTypes = {
  profesor: PropTypes.object,
  isEdit: PropTypes.bool
};

const Profesor = {
  name: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  age: 0,
  gender: 'male',
  typeDocument: 'passport',
  typeSubject: 'machine_learning',
  numberDocument: '',
  dateBirth: ''
};

ProfesorForm.defaultProps = {
  profesor: Profesor,
  isEdit: false
};

export default ProfesorForm;
