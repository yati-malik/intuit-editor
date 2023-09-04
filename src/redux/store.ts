import { configureStore, PreloadedState, combineReducers } from '@reduxjs/toolkit';
import contentReducer from './slices/contentSlice';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas';
import contentEntries from './slices/contentEntries';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const rootReducer = combineReducers({
    content: contentReducer,
    contentEntries: contentEntries
})

export type RootState = ReturnType<typeof rootReducer>

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
    const store = configureStore({
        reducer: {
            content: contentReducer,
            contentEntries: contentEntries
        },
        preloadedState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(middleware)
    })
    sagaMiddleware.run(rootSaga);
    return store;
}


export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
