import { Outlet } from "react-router-dom";
import { UserHeader } from "./UserHeader";

export const UserLayout = () => {
  const toggleBasketHandler = () => {
    return null;
  };

  return (
    <>
      <UserHeader onToggle={toggleBasketHandler} />
      <main style={{ marginTop: "8.5rem" }}>
        <Outlet />
      </main>
    </>
  );
};
