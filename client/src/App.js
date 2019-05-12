import React from "react";
import "./App.css";
import FileUpload from "./components/FileUpload";
const App = () => (
  <div className="container mt-4">
    <h4 className="text-center mb-4">
      <i className="fab fa-react mr-2" />
      File Upload
    </h4>
    <FileUpload />
  </div>
);

export default App;
