import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import FCardCatagory from "./FCardCatagory";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductsCatagory } from "../features/product/productSlice";

function ProductsCatagory() {
  const dispatch = useDispatch();
  let params = useParams();
  let catagory = params.catagory;
  catagory = catagory.toLowerCase();
  const { pageCatagory, productsCatagory } = useSelector(
    (state) => state.product
  );
  console.log("array", productsCatagory, pageCatagory);
  useEffect(() => {
    dispatch(getProductsCatagory(catagory, pageCatagory));
  }, [dispatch, catagory, pageCatagory]);
  return (
    <Grid container spacing={2} mt={8}>
      {productsCatagory.map((product) => (
        <Grid
          sx={{ minWidth: 285 }}
          item
          key={product._id}
          xs={12}
          md={4}
          lg={3}
        >
          <FCardCatagory product={product} catagory={catagory} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductsCatagory;
