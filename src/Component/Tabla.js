import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField } from '@mui/material';

const initialData = [
  { id: 1, name: 'Elemento 1', value: 'Valor 1' },
  { id: 2, name: 'Elemento 2', value: 'Valor 2' },
  { id: 2, name: 'Elemento 2', value: 'Valor 2' }
  // Agrega más datos según sea necesario
];

const Tabla = () => {
  const [data, setData] = useState(initialData);
  const [selectedItem, setSelectedItem] = useState(null);
  const [formData, setFormData] = useState({ name: '', value: '' });

  // Maneja la selección del elemento
  const handleSelectItem = (item) => {
    setSelectedItem(item);
    setFormData({ name: item.name, value: item.value });
  };

  // Maneja el cambio en el formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Maneja la actualización del elemento
  const handleUpdateItem = () => {
    setData((prev) =>
      prev.map((item) => (item.id === selectedItem.id ? { ...item, ...formData } : item))
    );
    setSelectedItem(null);
    setFormData({ name: '', value: '' });
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Valor</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.value}</TableCell>
                <TableCell>
                  <Button onClick={() => handleSelectItem(item)}>Editar</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {selectedItem && (
        <div style={{ marginTop: '20px' }}>
          <h2>Editar Elemento</h2>
          <form noValidate autoComplete="off">
            <TextField
              label="Nombre"
              name="name"
              value={formData.name}
              onChange={handleChange}
              margin="normal"
              fullWidth
            />
            <TextField
              label="Valor"
              name="value"
              value={formData.value}
              onChange={handleChange}
              margin="normal"
              fullWidth
            />
            <Button variant="contained" color="primary" onClick={handleUpdateItem}>
              Actualizar
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Tabla;
