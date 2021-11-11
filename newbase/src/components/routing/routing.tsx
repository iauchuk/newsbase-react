import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../dashboard/dashboard";
import { UsersInfo } from "../usersInfo/usersInfo";

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users-info" element={<UsersInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
