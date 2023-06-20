import React from "react";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoutes";
import { UserLayout } from "../layout/user/UserLayout";
import { AdminLayout } from "../layout/admin/AdminLayout";
import { MealLayout } from "../layout/mealLayout/MealLayout";
import { SignUp } from "../pages/auth/SignUp";
import { SignIn } from "../pages/auth/SignIn";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { ROLES } from "../utils/constants";

export const MainRoutes = () => {
  const role = useSelector((state: RootState) => state.auth.user.role);
  console.log("role", role);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute
            isAllowed={[ROLES.USER, ROLES.GUEST].includes(role)}
            fallBacPath="/admin"
            component={UserLayout}
          />
        }
      >
        <Route
          index
          element={
            <ProtectedRoute
              isAllowed={[ROLES.GUEST, ROLES.USER].includes(role)}
              fallBacPath="/admin"
              component={MealLayout}
            />
          }
        />
        <Route
          path="signin"
          element={
            <ProtectedRoute
              isAllowed={[ROLES.GUEST, ROLES.USER].includes(role)}
              fallBacPath={role === ROLES.ADMIN ? "/admin" : "/"}
              component={SignIn}
            />
          }
        />

        <Route
          path="signup"
          element={
            <ProtectedRoute
              isAllowed={[ROLES.GUEST, ROLES.USER].includes(role)}
              fallBacPath={role === ROLES.ADMIN ? "/admin" : "/"}
              component={SignUp}
            />
          }
        />
      </Route>

      <Route
        path="/admin"
        element={
          <ProtectedRoute
            isAllowed={[ROLES.ADMIN].includes(role)}
            fallBacPath="/"
            component={AdminLayout}
          />
        }
      >
        <Route index element={<h1>Meals</h1>} />
      </Route>
    </Routes>
  );
};
