import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
  name: "paginationSlice",
  initialState: {
    pageNo: 1,
  },
  //function that helps us to alter the state
  reducers: {
    handleNext: (state) => {
      state.pageNo = state.pageNo + 1;
    },
    handlePrevious: (state) => {
      if (state.pageNo == 1) return;
      state.pageNo = state.pageNo - 1;
    },
  },
});

export default paginationSlice
