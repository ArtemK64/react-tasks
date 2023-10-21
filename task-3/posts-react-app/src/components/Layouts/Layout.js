import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <div>
        <Box
          p={4}
          style={{
            borderBottom: "1px solid #eee",
          }}
        >
          <Stack direction={"row"}>
            <div>
              <Link to={"/"}>Главная</Link>
            </div>
            <div>
              <Link to={"/admin"}>Админка</Link>
            </div>
            <div>
              <Link to={"/posts"}>Посты</Link>
            </div>
          </Stack>
        </Box>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};
