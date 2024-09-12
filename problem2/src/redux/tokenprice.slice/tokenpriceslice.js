import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
tokenPricesArray: [],
status: ''
}

export const fetchTokenPrice = createAsyncThunk('tokenPrice/fetchTokenPrice',
    async ()=>{
        const data = await fetch(`https://interview.switcheo.com/prices.json`)
        const responceData = await data.json()
        return responceData
    }
)
const tokenPriceSlice = createSlice({
    name: 'tokenPrice',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(fetchTokenPrice.pending, (state)=>{
            state.status = 'pending'
        }).addCase(fetchTokenPrice.rejected, (state)=>{
            state.status = 'error'
        }).addCase(fetchTokenPrice.fulfilled, (state, action)=>{
state.status = 'done'
state.tokenPricesArray = action.payload
        })
    }
})
export default tokenPriceSlice.reducer