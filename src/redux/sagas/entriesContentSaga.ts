import { SagaActions } from '.';
import { createContentApi, fetchContentEntriesApi } from '../../api/contentApis';
import { IdAndTitle } from '../../types/editor';
import { addContentEntry, contentEntriesLoaded, contentEntriesLoadingFailed, loadingContentEntries } from '../slices/contentEntries';

import { put, call, takeEvery, takeLatest } from 'redux-saga/effects'

export function* fetchContentEntries() {
    try {
        yield put(loadingContentEntries({ isloading: true }))
        const content: IdAndTitle[] = yield call(fetchContentEntriesApi);
        yield put(contentEntriesLoaded(content));
    }
    catch (ex: any) {
        yield put(contentEntriesLoadingFailed({ isloading: false, isError: true, error: ex.toString() }));
    }
}

export function* createContentEntry(action: any) {
    try {
        yield put(loadingContentEntries({ isloading: true }))
        const content: IdAndTitle = yield call(createContentApi, action.payload.title);
        yield put(addContentEntry(content));
    }
    catch (ex: any) {
        yield put(contentEntriesLoadingFailed({ isloading: false, isError: true, error: ex.toString() }));
    }
}

export function* fetchContenEntriestSaga() {
    yield takeEvery(SagaActions.CONTENT_ENTRIES_FETCH_REQUESTED, fetchContentEntries)
}

export function* createContentEntrySaga() {
    yield takeLatest(SagaActions.CREATE_CONTENT_REQUESTED, createContentEntry)
}
