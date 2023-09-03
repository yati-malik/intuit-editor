import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { createContent, getContentById } from '../../api/contentApis';
import { contentEntriesLoaded, loadingContentEntries, contentEntriesLoadingFailed } from '../slices/contentEntries';
import { SagaActions } from '.';
import { IdAndTitle } from '../../types/editor';
import { title } from 'process';

export function* fetchContentEntries() {
    try {
        yield put(loadingContentEntries({ isloading: true }))
        const content: IdAndTitle[] = yield call(getContentById, "2342");
        yield put(contentEntriesLoaded(content));
    }
    catch (ex: any) {
        yield put(contentEntriesLoadingFailed({ isloading: false, isError: true, error: ex.toString() }));
    }
}

export function* createContentEntry() {
    debugger;
    try {
        yield put(loadingContentEntries({ isloading: true }))
        const content: IdAndTitle[] = yield call(createContent, title);
        yield put(contentEntriesLoaded(content));
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