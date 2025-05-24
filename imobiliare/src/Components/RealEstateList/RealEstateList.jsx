import React from "react";
import { Grid } from "@mui/material";
import RealEstateCard from "../RealEstateCard/RealEstateCard";

export const RealEstateList = ({ properties }) => {
  return (
    <Grid container spacing={2} justifyContent={"center"} padding={"16px"}>
      {properties.map((item) => (
        <Grid item key={item.id} xs={12} sm={6} md={5} lg={3} xl={2.4}>
          <RealEstateCard {...item} />
        </Grid>
      ))}
    </Grid>
  );
};
