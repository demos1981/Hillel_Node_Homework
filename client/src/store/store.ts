import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import productReducer from "./slices/productSlice";
// ...

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
  },
});

// Выведение типов `RootState` и `AppDispatch` из хранилища
export type RootState = ReturnType<typeof store.getState>;
// Выведенные типы: { usersAuth: UsersAuthState}
export type AppDispatch = typeof store.dispatch;

export default store;
