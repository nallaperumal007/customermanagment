/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Modal,
  Box,
  Typography,
} from "@mui/material";
import CustomerForm from "./CustomerForm";

const CustomerList = () => {
  const [customers, setCustomers] = useState([
    {
      id: 4006,
      name: "AZHAGU ANGADI PREMIUM",
      address: "NAMAKKAL",
      place: "NAMAKKAL",
      mobile: "1234567891",
      mobile1: "9876543217",
      freight: "Yes",
      cooly: "Yes",
      splDisc: "No",
    },
  ]);

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const addCustomer = (customer) => {
    setCustomers([...customers, { id: customers.length + 1, ...customer }]);
    handleClose();
  };

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h4">Customers List</Typography>
      <Button variant="contained" color="primary" onClick={handleOpen} sx={{ mt: 2 }}>
        + Add Customer
      </Button>

      <TableContainer component={Paper} sx={{ mt: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Place</TableCell>
              <TableCell>Mobile No</TableCell>
              <TableCell>Mobile No1</TableCell>
              <TableCell>Freight</TableCell>
              <TableCell>Cooly</TableCell>
              <TableCell>Spl. Disc</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell>{customer.id}</TableCell>
                <TableCell>{customer.name}</TableCell>
                <TableCell>{customer.address}</TableCell>
                <TableCell>{customer.place}</TableCell>
                <TableCell>{customer.mobile}</TableCell>
                <TableCell>{customer.mobile1}</TableCell>
                <TableCell>{customer.freight}</TableCell>
                <TableCell>{customer.cooly}</TableCell>
                <TableCell>{customer.splDisc}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add Customer Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ width: "90%", maxWidth: 900, bgcolor: "white", p: 3, m: "auto", mt: 5, boxShadow: 3, borderRadius: 2 }}>
          <CustomerForm open={open} handleClose={handleClose} />
        </Box>
      </Modal>
    </div>
  );
};

export default CustomerList;