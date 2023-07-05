const { createSlice,configureStore } = require('@reduxjs/toolkit');
const lightdarkSlice = createSlice({
    name: 'isdark',
    initialState: {islight:false},
    reducers: {
        LightDark(state) {
            state.islight=!state.islight
        },
    },
});
const store=configureStore({
    reducer:lightdarkSlice.reducer
})
export const  lightDarkActions = lightdarkSlice.actions;
export default store;