import { createSlice } from "@reduxjs/toolkit";
import { EditProductor } from "src/schemas/registerSchema";
import { IInitialProductorState } from "src/types/types";
import { number } from "yup";
import { deleteProductor, editProductor, getAllProductors, getProductorId, AddProductors } from './ProductorsThunk';

const initialState: IInitialProductorState = {
  productors: [],
  loading: false,
}

const productorsSlice = createSlice({
  name: 'productors',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProductors.pending, (state, action) => { })
      .addCase(getAllProductors.fulfilled, (state, action) => {
        state.productors = action.payload;
      })
      .addCase(getAllProductors.rejected, (state, action) => { })
      builder
      .addCase(getProductorId.fulfilled, (state, action) => {
        state.productors = action.payload;
      });
      builder
      .addCase(AddProductors.fulfilled, (state, action) => {
        state.productors = action.payload;
      });
      builder
      .addCase(editProductor.fulfilled, (state, action) => {
        state.productors = action.payload;
      });
      builder
      .addCase(deleteProductor.fulfilled, (state, action) => {
        state.productors = action.payload;
      });
  },
})

export default productorsSlice.reducer