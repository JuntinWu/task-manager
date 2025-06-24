/** @jsxImportSource @emotion/react */

const TaskCard = ({ task }) => {
  return (
    <div
      css={{
        flex: "1",
        padding: "16px",
        borderRadius: "16px",
        position: "relative",
        background: task.bgColor,
      }}
    >
      <div
        css={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "12px",
        }}
      >
        <div
          css={{
            fontSize: "12px",
            fontWeight: "500",
            color: "#6b7280",
          }}
        >
          {task.category}
        </div>
        {task.icon && (
          <div
            css={{
              width: "24px",
              height: "24px",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: task.iconBg,
            }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke={task.iconColor}
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>
        )}
      </div>
      <div
        css={{
          fontSize: "14px",
          fontWeight: "600",
          color: "#111827",
          lineHeight: "20px",
          marginBottom: "16px",
        }}
      >
        {task.title}
      </div>
      <div
        css={{
          width: "100%",
          height: "4px",
          borderRadius: "2px",
          overflow: "hidden",
          backgroundColor: "rgba(0,0,0,0.1)",
        }}
      >
        <div
          css={{
            width: `${task.progress}%`,
            height: "100%",
            borderRadius: "2px",
            background: task.color,
          }}
        />
      </div>
    </div>
  );
};

export default TaskCard;
