import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "@/axios";

export const fetchAuth = createAsyncThunk("auth/fetchAuth", async (params) => {
    const {data} = await axios.post("/api/user/login", params);
    return data;
});

export const fetchRegister = createAsyncThunk("auth/fetchRegister", async (params: any) => {
    const {data} = await axios.post("/api/user/registration", {
        ...params
    });
    return data;
});

export const fetchAuthMe = createAsyncThunk("auth/fetchAuthMe", async () => {
    const {data} = await axios.post("/api/user/me", {
        refresh: window.localStorage.getItem("token_refresh")
    });
    return data;
});

const initialState = {
    data: null, status: "loading"
};

const authSlice = createSlice({
    name: "auth", initialState, reducers: {
        logout: (state) => {
            state.data = null;
            state.status = "loading"
        },
    }, extraReducers: {
        [fetchAuth.pending]: (state: { status: string; }) => {
            state.status = "loading";
        }, [fetchAuth.fulfilled]: (state: { status: string; data: any; }, action: { payload: any; }) => {
            state.status = "loaded";
            state.data = action.payload;
        }, [fetchAuth.rejected]: (state: { status: string; data: null; }) => {
            state.status = "error";
            state.data = null;
        }, [fetchAuthMe.pending]: (state: { status: string; }) => {
            state.status = "loading";
        }, [fetchAuthMe.fulfilled]: (state: { status: string; data: any; }, action: { payload: any; }) => {
            state.status = "loaded";
            state.data = action.payload;
        }, [fetchAuthMe.rejected]: (state: { status: string; data: null; }) => {
            state.status = "error";
            state.data = null;
        }, [fetchRegister.pending]: (state: { status: string; }) => {
            state.status = "loading";
        }, [fetchRegister.fulfilled]: (state: { status: string; data: any; }, action: { payload: any; }) => {
            state.status = "loaded";
            state.data = action.payload;
        }, [fetchRegister.rejected]: (state: { status: string; data: null; }) => {
            state.status = "error";
            state.data = null;
        }
    },
});

export const isAuth = ({auth} : {auth: any}) => Boolean(auth.data?.user);
export const isAuthError = ({auth} : {auth: any}) => auth.status === "error"
export const authReducer = authSlice.reducer;
export const {logout} = authSlice.actions;
