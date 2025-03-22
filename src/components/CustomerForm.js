import React, { useState } from "react";
import {
  Button,
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Grid,
  Box,
  Typography,
  Modal,
  Autocomplete,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

const AddCustomerModal = ({ open, handleClose }) => {
  const [customer, setCustomer] = useState({
    company: "",
    area: "",
    customerType: "",
    gstNo: "",
    customerName: "",
    searchCode: "",
    salesman: "",
    priceLevel: "",
    address: "",
    place: "",
    district: "",
    pincode: "",
    stateName: "Tamil Nadu",
    gstType: "",
    panNo: "",
    aadharNo: "",
    mobileNo1: "",
    mobileNo2: "",
    whatsappNo: "",
    tcsTds: "",
    allowCredit: true,
    tcsExempted: false,
    creditDays: "",
    amountLimit: "",
    billsLimit: "",
    overdueBilling: false,
    position: "",
    discount: "",
    specialDiscount: false,
    loading: false,
    freight: false,
    loyalty: false,
    promotion: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCustomer({ ...customer, [name]: type === "checkbox" ? checked : value });
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

  return (
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
        <Select name="company" value={customer.company} onChange={handleChange} size="small">
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
        onChange={(event, newValue) => setCustomer({ ...customer, area: newValue })}
        fullWidth
      />
    </Grid>

    {/* Customer Type */}
    <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>
      <Typography sx={{ whiteSpace: "nowrap", mr: 1, color: "red" }}>* Customer Type:</Typography>
      <Autocomplete
        options={dropdownOptions.customerType}
        renderInput={(params) => <TextField {...params} size="small" />}
        onChange={(event, newValue) => setCustomer({ ...customer, customerType: newValue })}
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
          value={customer.gstNo}
          onChange={handleChange}
          size="small"
        />
        <Button variant="contained" sx={{ ml: 1 }}>GET</Button>
      </Box>

      <TextField
        fullWidth
        label="Customer Name"
        name="customerName"
        value={customer.customerName}
        onChange={handleChange}
        size="small"
        required
      />

      <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
        <TextField
          fullWidth
          label="Search Code"
          name="searchCode"
          value={customer.searchCode}
          onChange={handleChange}
          size="small"
        />
        <Typography sx={{ color: "red", ml: 1 }}>❌ Active Customer</Typography>
      </Box>

      <Autocomplete
        options={dropdownOptions.salesman}
        renderInput={(params) => <TextField {...params} label="Salesman" size="small" />}
        onChange={(event, newValue) => setCustomer({ ...customer, salesman: newValue })}
        sx={{ mt: 2 }}
      />

      <FormControl fullWidth sx={{ mt: 2 }}>
        <InputLabel>Price Level</InputLabel>
        <Select name="priceLevel" value={customer.priceLevel} onChange={handleChange} size="small">
          {dropdownOptions.priceLevel.map((opt) => (
            <MenuItem key={opt} value={opt}>{opt}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField fullWidth label="Address" name="address" value={customer.address} onChange={handleChange} size="small" sx={{ mt: 2 }} />
      <TextField fullWidth label="Place" name="place" value={customer.place} onChange={handleChange} size="small" sx={{ mt: 2 }} />
      <TextField fullWidth label="District" name="district" value={customer.district} onChange={handleChange} size="small" sx={{ mt: 2 }} />
      <TextField fullWidth label="Pincode" name="pincode" value={customer.pincode} onChange={handleChange} size="small" sx={{ mt: 2 }} />
    </Grid>

    {/* Right Side */}
    <Grid item xs={6}>
      <TextField fullWidth label="State Name" value="Tamil Nadu" disabled size="small" />

      <FormControl fullWidth sx={{ mt: 2 }}>
        <InputLabel>GST Type</InputLabel>
        <Select name="gstType" value={customer.gstType} onChange={handleChange} size="small">
          {dropdownOptions.gstType.map((opt) => (
            <MenuItem key={opt} value={opt}>{opt}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField fullWidth label="PAN No" name="panNo" value={customer.panNo} onChange={handleChange} size="small" sx={{ mt: 2 }} />
      <TextField fullWidth label="Aadhar No" name="aadharNo" value={customer.aadharNo} onChange={handleChange} size="small" sx={{ mt: 2 }} />
      <TextField fullWidth label="Mobile No1" name="mobileNo1" value={customer.mobileNo1} onChange={handleChange} size="small" sx={{ mt: 2 }} />
      <TextField fullWidth label="Mobile No2" name="mobileNo2" value={customer.mobileNo2} onChange={handleChange} size="small" sx={{ mt: 2 }} />
      <TextField fullWidth label="WhatsApp No" name="whatsappNo" value={customer.whatsappNo} onChange={handleChange} size="small" sx={{ mt: 2 }} />

      <FormControl fullWidth sx={{ mt: 2 }}>
        <InputLabel>TCS/TDS on Sales</InputLabel>
        <Select name="tcsTdsSales" value={customer.tcsTdsSales} onChange={handleChange} size="small">
  {dropdownOptions.tcsTds.map((opt) => (
    <MenuItem key={opt} value={opt}>{opt}</MenuItem>
  ))}
</Select>

       
      </FormControl>

      <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
        <Checkbox checked={customer.allowCredit} onChange={(e) => setCustomer({ ...customer, allowCredit: e.target.checked })} />
        <Typography>Allow Credit</Typography>
        <Checkbox checked={customer.tcsExempted} onChange={(e) => setCustomer({ ...customer, tcsExempted: e.target.checked })} sx={{ ml: 2 }} />
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
            value={customer.creditDays || ""}
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
            value={customer.amountLimit || ""}
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
            value={customer.billsLimit || ""}
            onChange={handleChange}
            size="small"
          />
        </Grid>

        {/* Overdue Billing Checkbox */}
        <Grid item xs={3}>
          <FormControlLabel
            control={
              <Checkbox
                checked={customer.overdueBilling || false}
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
            value={customer.position || ""}
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
            value={customer.discountPercentage || ""}
            onChange={handleChange}
            size="small"
          />
        </Grid>

        {/* Checkboxes */}
        <Grid item xs={6}>
          <FormControlLabel
            control={<Checkbox checked={customer.specialDiscount || false} onChange={handleChange} name="specialDiscount" />}
            label="Special Discount"
          />
          <FormControlLabel
            control={<Checkbox checked={customer.loading || false} onChange={handleChange} name="loading" />}
            label="Loading"
          />
          <FormControlLabel
            control={<Checkbox checked={customer.freight || false} onChange={handleChange} name="freight" />}
            label="Freight"
          />
          <FormControlLabel
            control={<Checkbox checked={customer.loyalty || false} onChange={handleChange} name="loyalty" />}
            label="Loyalty"
          />
          <FormControlLabel
            control={<Checkbox checked={customer.promotion || false} onChange={handleChange} name="promotion" />}
            label="Promotion"
          />
        </Grid>
      </Grid>
    </Box>

        {/* Buttons */}
        <Box sx={{ mt: 3, display: "flex", gap: 2, justifyContent: "center" }}>
          <Button variant="contained" color="success">Save (F5)</Button>
          <Button variant="contained" color="primary">Save & New (F6)</Button>
          <Button variant="outlined" color="error" onClick={handleClose}>Cancel</Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddCustomerModal;
