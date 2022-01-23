import React from "react";
import { Grid } from "@mui/material";

import PaginationNumber from "./PaginationNumber";
import NextPagination from "./NextPagination";

import _ from "lodash";

const Pagination = ({ count, pageSize, currentPage, handleCurrentPage }) => {
  const pages = Math.ceil(count / pageSize);
  const numberOfPages = _.range(1, pages + 1);

  const handleNext = (current) => {
    if (current > numberOfPages[numberOfPages.length - 1]) return;

    handleCurrentPage(current);
  };

  if (pages === 1) return null;

  return (
    <Grid container justifyContent="center" spacing={0.25}>
      {numberOfPages.map((p) => (
        <Grid item key={p}>
          <PaginationNumber
            number={p}
            onClick={() => handleCurrentPage(p)}
            active={currentPage === p}
          />
        </Grid>
      ))}
      <Grid item>
        <NextPagination onClick={() => handleNext(currentPage + 1)} />
      </Grid>
    </Grid>
  );
};

export default Pagination;
