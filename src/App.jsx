import { useState } from "react";
import TaskManager from "@/components/TaskManager";
import ReservationPage from "@/pages/ReservationPage";
import NavigationBar from "@/components/NavigationBar";

function App() {
  const [activeTab, setActiveTab] = useState("home");

  const renderPage = () => {
    switch (activeTab) {
      case "home":
        return <TaskManager />;
      case "reservation":
        return <ReservationPage />;
      default:
        return <TaskManager />;
    }
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {renderPage()}
      <NavigationBar activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;
