import { call, put, takeEvery } from 'redux-saga/effects';
import { getContentById } from '../../api/contentApis';
import { EditorContent } from '../../types';
import { contentLoaded, loadingContent, contentLoadingFailed } from '../slices/contentSlice';
import { SagaActions } from '.';

export function* fetchContent() {
    try {
        yield put(loadingContent({ isloading: true }))
        const content: EditorContent = yield call(getContentById, "2342");
        yield put(contentLoaded(content));
    }
    catch (ex: any) {
        yield put(contentLoadingFailed({ isloading: false, isError: true, error: ex.toString() }));
    }
}

export function* fetchContentSaga() {
    yield takeEvery(SagaActions.CONTENT_FETCH_REQUESTED, fetchContent)
}