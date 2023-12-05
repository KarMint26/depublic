import NavigationBar from "@/components/custom/NavigationBar";
import React from "react";

export default function layout({ children }) {
  return (
    <div className="homepage-container">
      <NavigationBar whatPage="registration" />
      {children}
    </div>
  );
}
