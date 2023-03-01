import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    loading: false,

};

const main = createSlice({
    name: 'main',
    initialState,
    reducers: {
        getAllProducts: (state, { payload }) => {
            state.products = payload.products;
            state.loading = false;
        }
    }
})

export const { getAllProducts } = main.actions

export default main.reducer