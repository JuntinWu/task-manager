/** @jsxImportSource @emotion/react */

const TaskGroup = ({ group }) => {
  const renderIcon = () => {
    const iconProps = {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      stroke: group.iconColor,
    };

    switch (group.icon) {
      case "heart":
        return (
          <svg {...iconProps}>
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        );
      case "user":
        return (
          <svg {...iconProps}>
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
          </svg>
        );
      case "book":
        return (
          <svg {...iconProps}>
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          </svg>
        );
      case "calendar":
        return (
          <svg {...iconProps}>
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div
      css={{
        borderRadius: "16px",
        padding: "16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        backgroundColor: "#ffffff",
      }}
    >
      <div css={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div
          css={{
            width: "40px",
            height: "40px",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: group.iconBg,
          }}
        >
          {renderIcon()}
        </div>
        <div css={{ display: "flex", flexDirection: "column" }}>
          <div
            css={{
              fontSize: "14px",
              fontWeight: "600",
              color: "#111827",
              marginBottom: "2px",
            }}
          >
            {group.name}
          </div>
          <div css={{ fontSize: "12px", color: "#6b7280" }}>
            <span>{group.taskCount}</span>
            <span> Tasks</span>
          </div>
        </div>
      </div>
      <div css={{ display: "flex", alignItems: "center" }}>
        <div
          css={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            border: "3px solid #f3f4f6",
            borderTop: `3px solid ${group.progressColor}`,
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            css={{
              fontSize: "12px",
              fontWeight: "600",
              color: "#111827",
            }}
          >
            <span>{group.progress}</span>
            <span>%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskGroup;
