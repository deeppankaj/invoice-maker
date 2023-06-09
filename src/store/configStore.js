import { configureStore } from "@reduxjs/toolkit";
import clientsReducer from "./clientSlice";
import productRedicer from "./productSlice";
import companyReducer from "./companySlice";
import invoiceReducer from "./invoiceSlice";
import { userSlicevalue } from './UserSlice'

export const store = configureStore({
  reducer: {
    clients: clientsReducer,
    company: companyReducer,
    products: productRedicer,
    invoices: invoiceReducer,
    User: userSlicevalue,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
