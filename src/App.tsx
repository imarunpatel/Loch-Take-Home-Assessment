import { useEffect, useState } from "react";
import "./App.css";
import SignUp from "./Components/Signup/SignUp";
import Main from "./Components/Main/Main";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    setIsSidebarOpen(window.innerWidth < 1024 ? false : true);

    const handleResize = () => {
      window.addEventListener("resize", () => {
        if (window.innerWidth > 1000) {
          setIsSidebarOpen(window.innerWidth < 1024 ? false : true);
        }
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
