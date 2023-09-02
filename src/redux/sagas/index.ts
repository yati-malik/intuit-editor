import { all } from 'redux-saga/effects';
import { fetchContentSaga } from './editorSaga';

export function* rootSaga() {
    yield all([fetchContentSaga()]);
}

export const SagaActions = {
    "CONTENT_FETCH_REQUESTED": "CONTENT_FETCH_REQUESTED"
}

export function createContentFetchAction(id: string) {
    return {
        type: SagaActions.CONTENT_FETCH_REQUESTED,
        payload: {
            id: id
        }
    }
}



