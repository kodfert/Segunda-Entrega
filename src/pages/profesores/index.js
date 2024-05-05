// material-ui
import { Stack, Box, Button, Grid, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// ant-design/icons
import { PlusOutlined } from '@ant-design/icons';

// react-router-dom
import { Link } from 'react-router-dom';

// importacion de students
import ProfesorActions from './components/profesorActions';

const createData = (document, name, lastName, address, age) => {
  return { document, name, lastName, address, age };
};

const rows = [
  createData(1111111111, 'Juan Felipe', 'Corredor', 'Calle 12 # 34-56, Barrio El Centro, Manizales', 35),
  createData(2345678901, 'Carlos', 'Sánchez Rojas', 'Carrera 20 # 45-67, Barrio Belén, Bogotá', 29),
  createData(3456789012, 'María', 'Hernández López', 'Avenida Primera # 23-45, Conjunto Residencial Los Laureles, Cali', 45),
  createData(4567890123, 'Andrés', 'Martínez González', 'Carrera 10 # 30-45, Barrio Las Delicias, Barranquilla', 26),
  createData(5678901234, 'Gabriela', 'Rodríguez Díaz', 'Calle 80 # 12-34, Conjunto Residencial El Prado, Cartagena', 38),
  createData(6789012345, 'Javier', 'García Pérez', 'Carrera 40 # 30-45, Barrio San Francisco, Bucaramanga', 31)
];

const Profesores = () => {
  return (
    <Stack spacing={3}>
      <Grid container direction="row-reverse">
        <Button size="small" variant="contained" component={Link} to="/profesores/create">
          <PlusOutlined style={{ marginRight: 5 }} /> AÑADIR PROFESOR
        </Button>
      </Grid>
      <MainCard title="Profesores">
        <Stack spacing={0.75} sx={{ mt: -1.5 }}>
          <Box sx={{ height: 'auto', width: '100%' }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>DOCUMENTO</TableCell>
                  <TableCell align="right">NOMBRE</TableCell>
                  <TableCell align="right">APELLIDO</TableCell>
                  <TableCell align="right">DIRECCIÓN</TableCell>
                  <TableCell align="right">EDAD</TableCell>
                  <TableCell align="right">ACCIONES</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.document} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      {row.document}
                    </TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.lastName}</TableCell>
                    <TableCell align="right">{row.address}</TableCell>
                    <TableCell align="right">{row.age}</TableCell>
                    <TableCell align="right">
                      <ProfesorActions profesorId={row.document} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Stack>
      </MainCard>
    </Stack>
  );
};

export default Profesores;
