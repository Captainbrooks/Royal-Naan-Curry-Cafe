// import {configureStore} from "@reduxjs/toolkit"
// import userReducer from "../features/userSlice"


// export const store=configureStore({
//     reducer:{
//         user:userReducer
//     }
// })


// reduxStore/store.js



import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "../features/userSlice";
import cartReducer from "../features/cartSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedUserReducer = persistReducer(persistConfig, userReducer);
const persistedCartReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    cart:persistedCartReducer,
  },
});

export const persistor = persistStore(store);
