import { all } from 'redux-saga/effects';
import { fetchContentSaga } from './editorSaga';
import { fetchContenEntriestSaga, createContentEntrySaga } from './contentEntries';

export function* rootSaga() {
    yield all([fetchContentSaga(), fetchContenEntriestSaga(), createContentEntrySaga()]);
}

export const SagaActions = {
    "CONTENT_FETCH_REQUESTED": "CONTENT_FETCH_REQUESTED",
    "CONTENT_ENTRIES_FETCH_REQUESTED": "CONTENT_ENTRIES_FETCH_REQUESTED",
    "CREATE_CONTENT_REQUESTED": "CREATE_CONTENT_REQUESTED"
}

export function fetchContentAction(id: string) {
    return {
        type: SagaActions.CONTENT_FETCH_REQUESTED,
        payload: {
            id: id
        }
    }
}

export function fetchContentEntriesAction() {
    return {
        type: SagaActions.CONTENT_ENTRIES_FETCH_REQUESTED
    }
}

export function createContentEntryAction(title: string) {
    return {
        type: SagaActions.CREATE_CONTENT_REQUESTED,
        payload: { title: title }
    }
}



