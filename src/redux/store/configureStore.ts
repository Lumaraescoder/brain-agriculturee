import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import productorReducer from "../reducers/ProductorsSlice";
import appReducer from "../reducers/ProductorsSlice";

export const rootReducer = combineReducers({
 productorReducer,
 appReducer,
});
export const store = configureStore({
 reducer: rootReducer,
});

export default store;
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
