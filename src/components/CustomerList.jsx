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
  TextField,
  Checkbox,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  Grid,
  FormControlLabel,
  Autocomplete,
} from "@mui/material";

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const [open, setOpen] = useState(false);
  const [newCustomer, setNewCustomer] = useState({
    gstNo: "",
    customerName: "",
    searchCode: "",
    salesman: "",
    priceLevel: "Whole Sale",
    address: "",
    place: "",
    district: "",
    pincode: "",
    stateName: "Tamil Nadu",
    gstType: "UnRegistered",
    panNo: "",
    aadharNo: "",
    mobile1: "",
    mobile2: "",
    whatsappNo: "",
    tcsTds: "TCS",
    allowCredit: true,
    tcsExempt: false,
    creditDays: 30,
    amountLimit: 0,
    billsLimit: 0,
    overdueBilling: false,
    discount: "",
    position: "",
    specialDiscount: false,
    loading: false,
    freight: false,
    loyalty: false,
    promotion: false,
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (eventOrName, value) => {
    if (typeof eventOrName === "string") {
      // Handling Autocomplete changes where 'eventOrName' is the field name
      setNewCustomer((prev) => ({ ...prev, [eventOrName]: value }));
    } else {
      const { name, value, type, checked } = eventOrName.target;
      setNewCustomer((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };
  
  const dropdownOptions = {
    company: ["All Company", "Company A", "Company B"],
    area: ["Default Area", "Area 1", "Area 2"],
    customerType: ["Default Type", "Retail", "Wholesale"],
    salesman: ["None", "Salesman A", "Salesman B"],
    priceLevel: ["Whole Sale", "Retail"],
    gstType: ["UnRegistered", "Registered"],
    tcsTds: ["TCS", "TDS"],
  };

  const addCustomer = () => {
    setCustomers([...customers, { id: customers.length + 1, ...newCustomer }]);
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
              <TableCell>Customer Name</TableCell>
              <TableCell>Mobile No</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Credit Days</TableCell>
              <TableCell>Discount %</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell>{customer.id}</TableCell>
                <TableCell>{customer.customerName}</TableCell>
                <TableCell>{customer.mobile1}</TableCell>
                <TableCell>{customer.address}</TableCell>
                <TableCell>{customer.creditDays}</TableCell>
                <TableCell>{customer.discountPercentage}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add Customer Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            width: "90%",
            maxWidth: 900,
            bgcolor: "white",
            p: 3,
            m: "auto",
            mt: 5,
            boxShadow: 3,
            borderRadius: 2,
            maxHeight: "90vh",
            overflowY: "auto",
          }}
        >
          <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold", textAlign: "center" }}>
            Add Customer
          </Typography>
          <Box sx={{ border: "1px solid #ccc", p: 2, borderRadius: 1, mb: 3 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
              Primary Information
            </Typography>
            <Grid container spacing={2} alignItems="center">
              {/* Company */}
              <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>
                <Typography sx={{ whiteSpace: "nowrap", mr: 1 }}>Company:</Typography>
                <FormControl fullWidth>
                  <Select name="company" value={newCustomer.company} onChange={handleChange} size="small">
                    {dropdownOptions.company.map((opt) => (
                      <MenuItem key={opt} value={opt}>
                        {opt}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              {/* Area */}
              <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>
                <Typography sx={{ whiteSpace: "nowrap", mr: 1, color: "red" }}>* Area:</Typography>
                <Autocomplete
                  options={dropdownOptions.area}
                  renderInput={(params) => <TextField {...params} size="small" />}
                  onChange={(e, value) => handleChange("area", value)}
                  fullWidth
                />
              </Grid>

              {/* Customer Type */}
              <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>
                <Typography sx={{ whiteSpace: "nowrap", mr: 1, color: "red" }}>* Customer Type:</Typography>
                <Autocomplete
                  options={dropdownOptions.customerType}
                  renderInput={(params) => <TextField {...params} size="small" />}
                  onChange={(e, value) => handleChange("customerType", value)}
                  fullWidth
                />
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ border: "1px solid #ccc", p: 2, borderRadius: 1, mb: 3 }}>
  <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
    Basic Information
  </Typography>
  <Grid container spacing={2}>
    {/* Left Side */}
    <Grid item xs={6}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <TextField
          fullWidth
          label="GST No"
          name="gstNo"
          value={newCustomer.gstNo}
          onChange={handleChange}
          size="small"
        />
        <Button variant="contained" sx={{ ml: 1 }}>GET</Button>
      </Box>

      <TextField
        fullWidth
        label="Customer Name"
        name="customerName"
        value={newCustomer.customerName}
        onChange={handleChange}
        size="small"
        required
      />

      <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
        <TextField
          fullWidth
          label="Search Code"
          name="searchCode"
          value={newCustomer.searchCode}
          onChange={handleChange}
          size="small"
        />
        <Typography sx={{ color: "red", ml: 1 }}>❌ Active Customer</Typography>
      </Box>

      <Autocomplete
        options={dropdownOptions.salesman}
        renderInput={(params) => <TextField {...params} label="Salesman" size="small" />}
        onChange={(event, newValue) => setNewCustomer({ ...newCustomer, salesman: newValue })}
        sx={{ mt: 2 }}
      />

      <FormControl fullWidth sx={{ mt: 2 }}>
        <InputLabel>Price Level</InputLabel>
        <Select name="priceLevel" value={newCustomer.priceLevel} onChange={handleChange} size="small">
          {dropdownOptions.priceLevel.map((opt) => (
            <MenuItem key={opt} value={opt}>{opt}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField fullWidth label="Address" name="address" value={newCustomer.address} onChange={handleChange} size="small" sx={{ mt: 2 }} />
      <TextField fullWidth label="Place" name="place" value={newCustomer.place} onChange={handleChange} size="small" sx={{ mt: 2 }} />
      <TextField fullWidth label="District" name="district" value={newCustomer.district} onChange={handleChange} size="small" sx={{ mt: 2 }} />
      <TextField fullWidth label="Pincode" name="pincode" value={newCustomer.pincode} onChange={handleChange} size="small" sx={{ mt: 2 }} />
    </Grid>

    {/* Right Side */}
    <Grid item xs={6}>
      <TextField fullWidth label="State Name" value="Tamil Nadu" disabled size="small" />

      <FormControl fullWidth sx={{ mt: 2 }}>
        <InputLabel>GST Type</InputLabel>
        <Select name="gstType" value={newCustomer.gstType} onChange={handleChange} size="small">
          {dropdownOptions.gstType.map((opt) => (
            <MenuItem key={opt} value={opt}>{opt}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField fullWidth label="PAN No" name="panNo" value={newCustomer.panNo} onChange={handleChange} size="small" sx={{ mt: 2 }} />
      <TextField fullWidth label="Aadhar No" name="aadharNo" value={newCustomer.aadharNo} onChange={handleChange} size="small" sx={{ mt: 2 }} />
      <TextField fullWidth label="Mobile No1" name="mobile1" value={newCustomer.mobile1} onChange={handleChange} size="small" sx={{ mt: 2 }} />
      <TextField fullWidth label="Mobile No2" name="mobile2" value={newCustomer.mobile2} onChange={handleChange} size="small" sx={{ mt: 2 }} />
      <TextField fullWidth label="WhatsApp No" name="whatsappNo" value={newCustomer.whatsappNo} onChange={handleChange} size="small" sx={{ mt: 2 }} />

      <FormControl fullWidth sx={{ mt: 2 }}>
        <InputLabel>TCS/TDS on Sales</InputLabel>
        <Select name="tcsTdsSales" value={newCustomer.tcsTdsSales} onChange={handleChange} size="small">
          {dropdownOptions.tcsTds.map((opt) => (
            <MenuItem key={opt} value={opt}>{opt}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
        <Checkbox checked={newCustomer.allowCredit} onChange={(e) => setNewCustomer({ ...newCustomer, allowCredit: e.target.checked })} />
        <Typography>Allow Credit</Typography>
        <Checkbox checked={newCustomer.tcsExempt} onChange={(e) => setNewCustomer({ ...newCustomer, tcsExempt: e.target.checked })} sx={{ ml: 2 }} />
        <Typography>TCS Collection Exempted</Typography>
      </Box>
    </Grid>
  </Grid>
</Box>

    <Box sx={{ border: "1px solid #ccc", padding: 2, borderRadius: 1, mt: 3 }}>
      {/* Credit Setting Title */}
      <Typography variant="h6" sx={{ mb: 1 }}>
        Credit Setting
      </Typography>

      <Grid container spacing={2} alignItems="center">
        {/* Credit Days */}
        <Grid item xs={3}>
          <TextField
            fullWidth
            label="Credit Days"
            name="creditDays"
            type="number"
            value={newCustomer.creditDays || ""}
            onChange={handleChange}
            size="small"
          />
        </Grid>

        {/* Amount Limit */}
        <Grid item xs={3}>
          <TextField
            fullWidth
            label="Amount Limit"
            name="amountLimit"
            type="number"
            value={newCustomer.amountLimit || ""}
            onChange={handleChange}
            size="small"
          />
        </Grid>

        {/* Bills Limit */}
        <Grid item xs={3}>
          <TextField
            fullWidth
            label="Bills Limit"
            name="billsLimit"
            type="number"
            value={newCustomer.billsLimit || ""}
            onChange={handleChange}
            size="small"
          />
        </Grid>

        {/* Overdue Billing Checkbox */}
        <Grid item xs={3}>
          <FormControlLabel
            control={
              <Checkbox
                checked={newCustomer.overdueBilling || false}
                onChange={handleChange}
                name="overdueBilling"
              />
            }
            label="Overdue Billing"
          />
        </Grid>
      </Grid>
    </Box>
     {/* Billing Settings */}
            <Box sx={{ border: "1px solid #ccc", padding: 2, borderRadius: 1, mt: 3 }}>
          {/* Bill Setting Title */}
          <Typography variant="h6" sx={{ mb: 1 }}>
            Bill Setting
          </Typography>
    
          <Grid container spacing={2} alignItems="center">
            {/* Position */}
            <Grid item xs={3}>
              <TextField
                fullWidth
                label="Position"
                name="position"
                type="number"
                value={newCustomer.position || ""}
                onChange={handleChange}
                size="small"
              />
            </Grid>
    
            {/* Discount % */}
            <Grid item xs={3}>
              <TextField
                fullWidth
                label="Discount %"
                name="discountPercentage"
                type="number"
                value={newCustomer.discountPercentage || ""}
                onChange={handleChange}
                size="small"
              />
            </Grid>
    
            {/* Checkboxes */}
            <Grid item xs={6}>
              <FormControlLabel
                control={<Checkbox checked={newCustomer.specialDiscount || false} onChange={handleChange} name="specialDiscount" />}
                label="Special Discount"
              />
              <FormControlLabel
                control={<Checkbox checked={newCustomer.loading || false} onChange={handleChange} name="loading" />}
                label="Loading"
              />
              <FormControlLabel
                control={<Checkbox checked={newCustomer.freight || false} onChange={handleChange} name="freight" />}
                label="Freight"
              />
              <FormControlLabel
                control={<Checkbox checked={newCustomer.loyalty || false} onChange={handleChange} name="loyalty" />}
                label="Loyalty"
              />
              <FormControlLabel
                control={<Checkbox checked={newCustomer.promotion || false} onChange={handleChange} name="promotion" />}
                label="Promotion"
              />
            </Grid>
          </Grid>
        </Box>
      <Box sx={{ mt: 3, display: "flex", gap: 2, justifyContent: "center" }}>
          
        <Button variant="contained" color="primary" onClick={addCustomer} sx={{ mt: 2 }}>Save Customer</Button>

          <Button variant="contained" color="primary">Save & New (F6)</Button>
          <Button variant="outlined" color="error" onClick={handleClose}>Cancel</Button>
        </Box>

      
         
        </Box>
      </Modal>
    </div>
  );
};

export default CustomerList;
