import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/status";

const initialState = {
  products: [],
  productStatus: STATUS.IDLE,
  productDetails: [],
  productDetailStatus: STATUS.IDLE,
};

export const getSearchProducts = createAsyncThunk(
  "searchproducts",
  async (value) => {
    const response = await fetch(`https://fakestoreapi.com/products`);
    const data = response.json();
    return data;
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.productStatus = STATUS.LOADING;
    });
  },
});

export default searchSlice.reducer;
