import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import messageReducer from "./messages/message";
import fingerPrintAuthReducer from './Auth/Auth'

export const store = configureStore({
    reducer: {
         message: messageReducer,
         fingerPrintAuth:fingerPrintAuthReducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;