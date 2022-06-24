import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllProductors = createAsyncThunk(
  'productors/getAllProductors',
  async () => {
    const response = await axios.get('http://localhost:3000/productors')
    return response.data.productors;
  }
)