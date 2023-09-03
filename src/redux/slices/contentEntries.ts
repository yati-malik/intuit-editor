import { createSlice } from '@reduxjs/toolkit';
import { IdAndTitle } from '../../types/editor';

export interface ContentEntriesState {
    isLoading: boolean;
    isError: boolean;
    isModal: boolean;
    entries: IdAndTitle[] | [];
}

const initialState: ContentEntriesState = {
    isLoading: false,
    isModal: false,
    isError: false,
    entries: []
}

const contentEntries = createSlice({
    name: 'contentReducer',
    initialState,
    reducers: {
        loadingContentEntries: (state, { payload }) => {
            state.isLoading = true;
        },
        contentEntriesLoaded: (state, { payload }: { payload: IdAndTitle[] }) => {
            state.isLoading = false;
            state.isError = false;
            state.entries = payload;
        },
        contentEntriesLoadingFailed: (state, { payload }) => {
            state.isLoading = false;
            state.isError = true;
        },
        addContentEntry: (state, { payload }: { payload: IdAndTitle }) => {
            state.entries = [...state.entries, payload];
            state.isModal = false;
            state.isLoading = false;
        },
        changeModal: (state, { payload }: { payload: boolean }) => {
            state.isModal = payload;
        }
    }
})

export const { loadingContentEntries, contentEntriesLoaded,
    contentEntriesLoadingFailed, addContentEntry, changeModal } = contentEntries.actions;

export default contentEntries.reducer