import React from "react";
import { Grid } from "@mui/material";
import RealEstateCard from "../RealEstateCard/RealEstateCard";

export const RealEstateList = ({ properties }) => {
  console.log(properties);
  return (
    <Grid
      container
      spacing={2}
      justifyContent={"center"}
      padding={"16px"}
      gap={"70px"}
    >
      {properties.map((item) => (
        <Grid item key={item.id} xs={12} sm={6} md={5} lg={3} xl={2.4}>
          <RealEstateCard card={item} />
        </Grid>
      ))}
    </Grid>
  );
};
