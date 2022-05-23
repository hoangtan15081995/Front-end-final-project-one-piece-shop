import { Box, Container, Stack } from "@mui/material";
import React from "react";
import ProductList from "./ProductList";
import FPagination from "./Pagination";

function DefaulPage() {
  return (
    <Container
      sx={{
        minHeight: "100vh",
        mt: 3,
      }}
    >
      <Stack>
        <Box sx={{ position: "relative", height: 1 }}>
          <ProductList />
        </Box>
        <FPagination />
      </Stack>
    </Container>
  );
}

export default DefaulPage;
