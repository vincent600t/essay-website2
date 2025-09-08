import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const token = localStorage.getItem("token"); // check if logged in

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  // Conditional nav items
  const navItems = token
    ? [
        { label: "Home", path: "/" },
        { label: "Order", path: "/order" },
        { label: "Dashboard", path: "/dashboard" },
      ]
    : [
        { label: "Home", path: "/" },
        { label: "Order", path: "/order" },
        { label: "Login", path: "/login" },
        { label: "Register", path: "/register" },
      ];

  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo / Brand */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            textDecoration: "none",
            color: "inherit",
            fontWeight: "bold",
          }}
        >
          EssayPro
        </Typography>

        {/* Navigation Items */}
        <Box>
          {navItems.map((item) => (
            <Button
              key={item.path}
              component={Link}
              to={item.path}
              sx={{
                color: "white",
                textTransform: "none",
                fontWeight:
                  location.pathname === item.path ? "bold" : "normal",
              }}
            >
              {item.label}
            </Button>
          ))}

          {/* Logout only if logged in */}
          {token && (
            <Button
              onClick={handleLogout}
              sx={{ color: "white", textTransform: "none", ml: 2 }}
            >
              Logout
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
