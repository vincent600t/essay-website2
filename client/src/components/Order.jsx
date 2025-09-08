import {
  Box,
  Button,
  Container,
  MenuItem,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import { useState } from "react";

export default function Order() {
  const [pages, setPages] = useState(1);
  const [deadline, setDeadline] = useState("7");
  const [level, setLevel] = useState("highschool");

  const calculatePrice = () => {
    const basePricePerPage = 10;
    let urgencyMultiplier = 1;
    let levelMultiplier = 1;

    if (deadline === "1") urgencyMultiplier = 2;
    else if (deadline === "3") urgencyMultiplier = 1.5;

    if (level === "college") levelMultiplier = 1.2;
    else if (level === "masters") levelMultiplier = 1.5;

    const price = basePricePerPage * pages * urgencyMultiplier * levelMultiplier;
    return price.toFixed(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitting order. Estimated price: $${calculatePrice()}`);
    // Later: Send this data to the backend
  };

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
          Place Your Order
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
          {/* Pages */}
          <TextField
            fullWidth
            label="Number of Pages"
            type="number"
            inputProps={{ min: 1 }}
            value={pages}
            onChange={(e) => setPages(Number(e.target.value))}
            sx={{ mb: 3 }}
            required
          />

          {/* Deadline */}
          <TextField
            select
            fullWidth
            label="Deadline"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            sx={{ mb: 3 }}
            required
          >
            <MenuItem value="7">7+ days</MenuItem>
            <MenuItem value="3">3–6 days</MenuItem>
            <MenuItem value="1">24 hours</MenuItem>
          </TextField>

          {/* Academic Level */}
          <TextField
            select
            fullWidth
            label="Academic Level"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            sx={{ mb: 3 }}
            required
          >
            <MenuItem value="highschool">High School</MenuItem>
            <MenuItem value="college">College</MenuItem>
            <MenuItem value="masters">Masters</MenuItem>
          </TextField>

          {/* Price Display */}
          <Typography variant="h6" textAlign="center" sx={{ mb: 2 }}>
            Estimated Price: <strong>${calculatePrice()}</strong>
          </Typography>

          {/* Submit Button */}
          <Button
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            type="submit"
          >
            Continue to Payment
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
