import { axiosInstance } from '../../api/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
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

export const getProductorId = createAsyncThunk(
  'productor/getProductorId',
  async (id: number) => {
    const response = await axiosInstance.get(`productors/${id}`);
    return response.data;
  },
);


export const editProductor = createAsyncThunk(
  'productors/editProductor',
  async (data: IProductorsState) => {
    const response = await axiosInstance.put(
      `productors/${data.id}`,
      data,
    );
    return response.data;
  }
)

export const deleteProductor = createAsyncThunk(
  'productors/deleteProductor',
  async (id: number) => {
    const response = await axiosInstance.delete(
      `productors/${id}`,
    );
    return response.data;
  }
)

