import { createSlice } from "@reduxjs/toolkit";
import { IInitialProductorState } from "src/types/types";
import { getAllProductors } from "./ProductorsThunk";

const initialState: IInitialProductorState = {
 productors: [],
}

const productorsSlice = createSlice({
 name: 'productors',
 initialState,
 reducers: {},
 extraReducers: (builder) => {
  builder
   .addCase(getAllProductors.pending, (state, action) => {})
   .addCase(getAllProductors.fulfilled, (state, action) => {
    state.productors = action.payload;
   })
   .addCase(getAllProductors.rejected, (state, action) => {})
 },
})

export default productorsSlice.reducer