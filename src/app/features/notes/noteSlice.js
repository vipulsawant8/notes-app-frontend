import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import asyncThunkWrapper from "@/utils/asyncThunkWrapper.js";
import API from "@/api/axios.js";

const noteAdapter = createEntityAdapter({
	selectId: note => note._id,
	sortComparer: (a,b) => a.position - b.position
});

const fetchNotes = createAsyncThunk('notes/fetchNotes', (_, thunkAPI) => asyncThunkWrapper(() => API.get('/notes'), thunkAPI));

const createNote = createAsyncThunk('notes/createNote', ({title, content, pinned }, thunkAPI) => asyncThunkWrapper(() => API.post('/notes', { title, content, pinned }), thunkAPI));

const updateNote = createAsyncThunk('notes/updateNote', ({ id, title, content, pinned }, thunkAPI) => asyncThunkWrapper(() => API.patch(`/notes/${id}`, { title, content, pinned }), thunkAPI));

const deleteNote = createAsyncThunk('notes/deleteNote', (id, thunkAPI) => asyncThunkWrapper(() => API.delete(`/notes/${id}`), thunkAPI));

const noteSlice = createSlice({
	name: "notes",
	initialState: noteAdapter.getInitialState({
		loading: true,
		error: null,
		paginate: {}
	}),
	reducers: {  },
	extraReducers: builder => {
		
		builder
		.addCase(fetchNotes.pending, (state) => {

			state.loading = true;
			state.error = null;
		})
		.addCase(fetchNotes.fulfilled, (state, action) => {

			state.loading = false;
			state.error = null;
			const { docs, rest } = action.payload.data;
			noteAdapter.setAll(state, docs);
			state.paginate = { ...rest };
		})
		.addCase(fetchNotes.rejected, (state, action) => {

			state.loading = false;
			state.error = action.payload.message;
		})
		.addCase(createNote.fulfilled, (state, action) => {

			noteAdapter.addOne(state, action.payload.data);
		})
		.addCase(updateNote.fulfilled, (state, action) => {

			noteAdapter.upsertOne(state, action.payload.data);
		})
		.addCase(deleteNote.fulfilled, (state, action) => {
			
			const id = action.payload.data._id;
			noteAdapter.removeOne(state, id);
		});
	}
});

export { fetchNotes, createNote, updateNote, deleteNote };
export const { selectAll: selectAllNotes, selectById: selectNoteByID, selectIds: selectNoteIDs } = noteAdapter.getSelectors(state => state.notes);

export default noteSlice.reducer;