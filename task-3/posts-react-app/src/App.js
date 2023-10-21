import React, { useContext, useEffect, useRef, useState } from "react";
import "./App.css";

import { Route, Routes, useParams } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { Layout } from "./components/Layouts/Layout";
import { Page404 } from "./pages/Page404";
import { AdminPage } from "./pages/AdminPage";
import { InputLabel } from "./components/InputLabel/InputLabel";
import { PostsPage } from "./pages/PostsPage";

const App = ({ label }) => {
  const textHello = "";
  const [value, setValue] = useState(0);

  let divRef = useRef();

  useEffect(() => {
    console.log("divRef", divRef);
  }, [divRef]);

  let admin = true;
  let ifAdmin = (element) => (admin ? element : <Page404 />);
  return (
    <>
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="posts" element={<PostsPage />} />
          <Route path="label" element={<InputLabel />} />
          <Route path="*" element={<Page404 />} />
          <Route path="*" element={<Page404 />} />
        </Route>

        <Route path="/admin" element={ifAdmin(<Layout />)}>
          <Route index element={<AdminPage />} />
          <Route path="label/:id/" element={<InputLabel />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
