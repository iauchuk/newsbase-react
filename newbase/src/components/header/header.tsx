import React from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const goToNewsPage = () => {
    navigate(`/`);
  };

  const goToUsersInfoPage = () => {
    navigate(`/users-info`);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
      <Typography sx={{ minWidth: 100 }} onClick={goToNewsPage}>
        News
      </Typography>
      <Typography sx={{ minWidth: 100 }} onClick={goToUsersInfoPage}>
        Profile
      </Typography>
    </Box>
  );
};

export default Header;
