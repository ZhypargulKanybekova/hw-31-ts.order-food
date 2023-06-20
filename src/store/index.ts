import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/auth.slice";
import { MealsSlice } from "./meals/mealsSlise";

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [MealsSlice.name]: MealsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
//стордо кандай экшен болсо, ошолорду шага диспатч кыла алат.
//in component
//const dispatch = useDispatch<AppDispatch>()

// type Props = {
//   component: FC; import from react
// };
