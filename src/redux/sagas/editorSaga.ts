import { call, put, takeEvery } from 'redux-saga/effects';
import { getContentById, resolveContentApi } from '../../api/contentApis';
import { EditorContent } from '../../types';
import { contentLoaded, loadingContent, contentLoadingFailed } from '../slices/contentSlice';
import { SagaActions } from '.';

export function* fetchContent(action: any) {
    try {
        yield put(loadingContent({ isloading: true }))
        const content: EditorContent = yield call(getContentById, action.payload.id);
        yield put(contentLoaded(content));
    }
    catch (ex: any) {
        yield put(contentLoadingFailed({ isloading: false, isError: true, error: ex.toString() }));
    }
}

export function* resolveContent(action: any) {
    try {

        yield put(loadingContent({ isloading: true }))
        const content: EditorContent = yield call(resolveContentApi, action.payload);
        yield put(contentLoaded(content));
    }
    catch (ex: any) {
        yield put(contentLoadingFailed({ isloading: false, isError: true, error: ex.toString() }));
    }
}

export function* fetchContentSaga() {
    yield takeEvery(SagaActions.CONTENT_FETCH_REQUESTED, fetchContent)
}

export function* resolveContentSaga() {
    yield takeEvery(SagaActions.RESOLVE_CONTENT, resolveContent)
}