import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { CompounderRoutes } from "./Routes/CompounderRoutes";
import { StudentRoutes } from "./Routes/StudentRoutes";

export function HealthCenter() {
  const role = useSelector((state) => state.user.role);

  const getDefaultPath = () => {
    switch (role) {
      case "Compounder":
        return "/healthcenter/compounder";
      case "student" || "Professor":
        return "/healthcenter/patient";
      default:
        return "/healthcenter/patient";
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Navigate to={getDefaultPath()} replace />} />

      <Route path="compounder/*" element={<CompounderRoutes />} />
      <Route path="student/*" element={<StudentRoutes />} />
    </Routes>
  );
}

export default HealthCenter;
