import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import asyncThunkWrapper from "@/utils/asyncThunkWrapper.js";
import API from "@/api/axios.js";
import { getDeviceId } from "../../../utils/deviceId.js";

const deviceId = getDeviceId();

export const getMe = createAsyncThunk('auth/getMe', (_, thunkAPI) => asyncThunkWrapper(() => API.get('/auth/me'), thunkAPI));

export const registerEmail = createAsyncThunk('auth/registerEmail', (userData, thunkAPI) => asyncThunkWrapper(() => API.post('/auth/send-otp', userData), thunkAPI));

export const verifyEmail = createAsyncThunk('auth/verifyEmail', (userData, thunkAPI) => {
	const state = thunkAPI.getState();
	const email = state.auth.registration.email;
	return asyncThunkWrapper(() => API.post('/auth/verify-otp', { ...userData, email }), thunkAPI);
});

export const createUserAccount = createAsyncThunk('auth/createUserAccount', (userData, thunkAPI) => {
	const state = thunkAPI.getState();
	const email = state.auth.registration.email;
	return  asyncThunkWrapper(() => API.post('/auth/register', { ...userData, email }), thunkAPI)
});

export const loginUser = createAsyncThunk('auth/loginUser', (userData, thunkAPI) => asyncThunkWrapper(() => API.post('/auth/login', { ...userData, deviceId }), thunkAPI));

export const logoutUser = createAsyncThunk('auth/logoutUser', async () => {
	try {
		await API.post('/auth/logout', {
			deviceId
		});	
	} catch (error) {
		
		if (import.meta.env.DEV) console.warn("Logout API error :", error);
	}
	return;
});

export const passwordChange = createAsyncThunk('auth/passwordChange', (userData, thunkAPI) =>  asyncThunkWrapper(() => API.post('/auth/password-change', { ...userData, deviceId }), thunkAPI));

const authSlice = createSlice({

	name: "auth",
	initialState: {

		user: null,
		isAuthenticated: false,
		loading: false,
		error: null,
		registration: {
			email: null
		}
	},
	reducers: {
		clearAuth: (state, action) => {
			state.isAuthenticated = false;
			state.loading = false;
			state.user = null;
		}
	},
	extraReducers: builder => {

		builder
		.addCase(getMe.pending, (state) => {

			state.error = null;
		})
		.addCase(getMe.fulfilled, (state, action) => {

			state.loading = false;
			const user = action.payload.data;
			state.user = user;
			state.error = null;
			state.isAuthenticated = true;
		})
		.addCase(getMe.rejected, (state, action) => {

			state.loading = false;
			state.error = action.payload.message;
			state.isAuthenticated = false;
			state.user = null;
		})
		.addCase(registerEmail.pending, (state) => {

			state.loading = true;
			state.error = null;
		})
		.addCase(registerEmail.fulfilled, (state, action) => {

			state.loading = false;
			state.error = null;
			state.registration.email = action.meta.arg.email;
		})
		.addCase(registerEmail.rejected, (state, action) => {

			state.loading = false;
			state.error = action.payload.message;
		})
		.addCase(verifyEmail.pending, (state, action) => {

			state.loading = true;
			state.error = null;
		})
		.addCase(verifyEmail.fulfilled, (state, action) => {

			state.loading = false;
			state.error = null;
		})
		.addCase(verifyEmail.rejected, (state, action) => {

			state.loading = false;
			state.error = action.payload.message;
		})
		.addCase(createUserAccount.pending, (state) => {
			
			state.loading = true;
			state.error = null;
		})
		.addCase(createUserAccount.fulfilled, (state, action) => {
			
			state.loading = false;
			state.error = null;
			state.registration.email = null;
		})
		.addCase(createUserAccount.rejected, (state, action) => {

			state.loading = false;
			state.error = action.payload.message;
		})
		.addCase(loginUser.pending, (state) => {

			state.loading = true;
			state.error = null;
		})
		.addCase(loginUser.fulfilled, (state, action) => {

			state.loading = false;
			state.isAuthenticated = true;
			const user = action.payload.data;
			state.user = user;
			state.error = null;
		})
		.addCase(loginUser.rejected, (state, action) => {

			state.loading = false;
			state.error = action.payload.message;
			state.isAuthenticated = false;
			state.user = null;
		})
		.addCase(logoutUser.pending, (state) => {

			state.error = null;
		})
		.addCase(logoutUser.fulfilled, (state, action) => {

			state.user = null;
			state.error = null;
			state.isAuthenticated = false;
		})
		.addCase(logoutUser.rejected, (state, action) => {

			state.user = null;
			state.error = null;
		})
		.addCase(passwordChange.pending, (state, action) => {

			// state.loading = true;
			state.error = null;
		})
		.addCase(passwordChange.fulfilled, (state, action) => {

			// state.loading = false;
			state.error = null;
		})
		.addCase(passwordChange.rejected, (state, action) => {

			// state.loading = false;
			state.error = action.payload.message;
		})
	}
});

export const { clearAuth } = authSlice.actions;
export default authSlice.reducer;