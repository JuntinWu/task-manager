/** @jsxImportSource @emotion/react */

const NavigationBar = ({ activeTab, setActiveTab }) => {
  const navItems = [
    {
      id: "home",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke={activeTab === "home" ? "#ffffff" : "#9ca3af"}
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9,22 9,12 15,12 15,22" />
        </svg>
      ),
    },
    {
      id: "reservation",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke={activeTab === "reservation" ? "#ffffff" : "#9ca3af"}
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      ),
    },
    {
      id: "add",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      ),
      isMainButton: true,
    },
    {
      id: "list",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#9ca3af"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="8" y1="6" x2="21" y2="6" />
          <line x1="8" y1="12" x2="21" y2="12" />
          <line x1="8" y1="18" x2="21" y2="18" />
          <line x1="3" y1="6" x2="3.01" y2="6" />
          <line x1="3" y1="12" x2="3.01" y2="12" />
          <line x1="3" y1="18" x2="3.01" y2="18" />
        </svg>
      ),
    },
    {
      id: "profile",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#9ca3af"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
  ];

  return (
    <div
      css={{
        bottom: "0",
        position: "fixed",
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        maxWidth: "375px",
        padding: "16px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderTop: "1px solid #f3f4f6",
        backgroundColor: "#ffffff",
      }}
    >
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => item.id !== "add" && setActiveTab(item.id)}
          css={{
            width: item.isMainButton ? "48px" : "40px",
            height: item.isMainButton ? "48px" : "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: item.isMainButton ? "50%" : "12px",
            border: "none",
            cursor: "pointer",
            transition: "all 0.2s ease",
            backgroundColor: item.isMainButton
              ? "#6366f1"
              : activeTab === item.id
                ? "#6366f1"
                : "transparent",
            boxShadow: item.isMainButton
              ? "0 4px 12px rgba(99,102,241,0.3)"
              : "none",
          }}
        >
          {item.icon}
        </button>
      ))}
    </div>
  );
};

export default NavigationBar;
