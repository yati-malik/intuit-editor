import { createSlice } from '@reduxjs/toolkit';
import { EditorContent } from '../../types';

export interface EditorComponentState {
    isLoading: boolean;
    isError: boolean;
    content: EditorContent | null;
}

const initialState: EditorComponentState = {
    isLoading: false,
    isError: false,
    content: null
}

const contentSlice = createSlice({
    name: 'contentReducer',
    initialState,
    reducers: {
        loadingContent: (state, { payload }) => {
            state.isLoading = true;
        },
        contentLoaded: (state, { payload }: { payload: EditorContent }) => {
            state.isLoading = false;
            state.content = payload;
        },
        contentLoadingFailed: (state, { payload }) => {
            state.isLoading = false;
            state.isError = true;
        },
        addContent: (state, { payload }) => {

        },
        modifyContent: (state, { payload }) => {

        },
        deleteContent: (state, { payload }) => {

        }
    }
})

export const { loadingContent, contentLoaded,
    contentLoadingFailed, addContent, modifyContent, deleteContent } = contentSlice.actions;

export default contentSlice.reducer