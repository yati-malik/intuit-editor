import { configureStore } from '@reduxjs/toolkit';
import contentReducer from './slices/contentSlice';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas';
import contentEntries from './slices/contentEntries';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = configureStore({
    reducer: {
        content: contentReducer,
        contentEntries: contentEntries
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(middleware),
})

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;

export default store;