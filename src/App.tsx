import { useEffect, useState } from "react";
import "./App.css";
import SignUp from "./Components/Signup/SignUp";
import Main from "./Components/Main/Main";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(
    window.innerWidth < 1024 ? false : true
  );

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      window.addEventListener("resize", () => {
        setIsSidebarOpen(window.innerWidth < 1024 ? false : true);
      });
    };

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="max-w-6xl m-auto min-h-screen">
        <Main handleToggleSidebar={handleToggleSidebar} />
        <SignUp isOpen={isSidebarOpen} onClose={handleToggleSidebar} />
      </div>
    </>
  );
}

export default App;
