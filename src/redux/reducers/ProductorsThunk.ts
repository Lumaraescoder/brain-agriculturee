import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from 'src/api/api';
import { IProductorsState } from 'src/types/types';

export const getAllProductors = createAsyncThunk(
  'productors/getAllProductors',
  async () => {
    const response = await axiosInstance.get('productors')
    return response.data;
  }
)

export const AddProductors = createAsyncThunk(
  'productors/AddProductors',
  async (data: IProductorsState) => {
    const response = await axiosInstance.post('productors', data)
    console.log(response.data)
    return response.data;
  }
)

