import React from "react";
import { Breadcrumbs as MUIBreadcrumbs, Typography, Link } from "@mui/material";
import { useLocation } from "react-router-dom";
import routes from "../routes/routes.js";

const BreadCrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const currentLabel = pathnames.length
    ? routes.find((route) => route.path === `/${pathnames[pathnames.length - 1]}`)?.label
    : "Timeline";

  return (
    <MUIBreadcrumbs aria-label="breadcrumb" sx={{ position: "absolute", top: 10, left: 10 }}>
      <Link underline="hover" color="inherit" href="/">
        Home
      </Link>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        return (
          <Typography key={to} color="text.primary">
            {currentLabel}
          </Typography>
        );
      })}
    </MUIBreadcrumbs>
  );
};

export default BreadCrumbs;