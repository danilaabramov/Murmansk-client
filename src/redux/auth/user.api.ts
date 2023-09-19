import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "@/axios";

export const fetchLogin = createAsyncThunk("auth/fetchAuth", async (params: any) => {
    const {data} = await axios.post("/api/user/login", params);
    return data;
});

export const fetchRegister = createAsyncThunk("auth/fetchRegister", async (params: any) => {
    const {data} = await axios.post("/api/user/registration", params);
    return data;
});

export const fetchAuthMe = createAsyncThunk("auth/fetchAuthMe", async () => {
    const {data} = await axios.get(`/api/user/${window.localStorage.getItem("token")}`);
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
        [fetchLogin.pending]: (state: { status: string; }) => {
            state.status = "loading";
        }, [fetchLogin.fulfilled]: (state: { status: string; data: any; }, action: { payload: any; }) => {
            state.status = "loaded";
            state.data = action.payload;
        }, [fetchLogin.rejected]: (state: { status: string; data: null; }) => {
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
        }, [fetchRegister.rejected]: (state: { status: string; data: null; }) => {
            state.status = "error";
            state.data = null;
        }
    },
});

export const isAuth = ({auth}: { auth: any }) => Boolean(auth.data?.userEmail);
export const isAuthError = ({auth}: { auth: any }) => auth.status === "error"
export const authReducer = authSlice.reducer;
export const {logout} = authSlice.actions;
