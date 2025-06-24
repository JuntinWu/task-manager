/** @jsxImportSource @emotion/react */
import { useState } from "react";
import TaskCard from "@/components/TaskCard";
import TaskGroup from "@/components/TaskGroup";
import { Button } from "./ui/button";

const TaskManager = () => {
  const [tasks] = useState([
    {
      id: 1,
      title: "Grocery shopping app design",
      category: "Office Project",
      progress: 70,
      color: "#0ea5e9",
      bgColor: "#e0f2fe",
      icon: "heart",
      iconColor: "#ec4899",
      iconBg: "#f8bbd9",
    },
    {
      id: 2,
      title: "Uber Eats redesig challange",
      category: "Personal Project",
      progress: 52,
      color: "#f97316",
      bgColor: "#fef3e2",
    },
  ]);

  const [taskGroups] = useState([
    {
      id: 1,
      name: "Office Project",
      taskCount: 23,
      progress: 70,
      icon: "heart",
      iconColor: "#ec4899",
      iconBg: "#fce7f3",
      progressColor: "#ec4899",
    },
    {
      id: 2,
      name: "Personal Project",
      taskCount: 30,
      progress: 52,
      icon: "user",
      iconColor: "#8b5cf6",
      iconBg: "#ede9fe",
      progressColor: "#8b5cf6",
    },
    {
      id: 3,
      name: "Daily Study",
      taskCount: 30,
      progress: 87,
      icon: "book",
      iconColor: "#f97316",
      iconBg: "#fed7aa",
      progressColor: "#f97316",
    },
    {
      id: 4,
      name: "Daily Study",
      taskCount: 30,
      progress: 87,
      icon: "calendar",
      iconColor: "#f59e0b",
      iconBg: "#fef3c7",
      progressColor: "#f59e0b",
    },
  ]);

  return (
    <div
      css={{
        width: "100%",
        maxWidth: "375px",
        margin: "0 auto",
        background:
          "linear-gradient(180deg, #f0f9ff 0%, #e0e7ff 50%, #f3f4f6 100%)",
        minHeight: "100vh",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      {/* Header */}
      <div
        css={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 24px 16px 24px",
          marginTop: "20px",
        }}
      >
        <div
          css={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            css={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              overflow: "hidden",
              backgroundColor: "#4f46e5",
            }}
          >
            <img
              alt="User Avatar"
              src="https://images.pexels.com/photos/28114093/pexels-photo-28114093.jpeg"
              css={{
                aspectRatio: "1",
                objectFit: "cover",
                objectPosition: "center",
                width: "100%",
                height: "100%",
                overflow: "hidden",
              }}
            />
          </div>
          <div
            css={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              css={{
                fontSize: "14px",
                fontWeight: "400",
                color: "#6b7280",
                marginBottom: "2px",
              }}
            >
              Hello!
            </div>
            <div
              css={{
                fontSize: "18px",
                fontWeight: "700",
                color: "#111827",
              }}
            >
              Livia Vaccaro
            </div>
          </div>
        </div>
        <div
          css={{
            width: "24px",
            height: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#6366f1"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
          </svg>
        </div>
      </div>

      {/* Progress Card */}
      <div
        css={{
          borderRadius: "20px",
          padding: "24px",
          margin: "16px 24px 24px 24px",
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#6366f1",
        }}
      >
        <div
          css={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            position: "relative",
            zIndex: "2",
          }}
        >
          <div
            css={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#ffffff",
              lineHeight: "24px",
              maxWidth: "140px",
            }}
          >
            Your today's task almost done!
          </div>
          <Button
            css={{
              color: "red",
              fontSize: "14px",
              fontWeight: "600",
              padding: "12px 24px",
              borderRadius: "12px",
              border: "none",
              cursor: "pointer",
              width: "fit-content",
              backgroundColor: "#ffffff",
            }}
          >
            View Task
          </Button>
        </div>
        <div
          css={{
            position: "absolute",
            right: "24px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            border: "6px solid rgba(255,255,255,0.3)",
            borderTop: "6px solid #ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div css={{ fontSize: "18px", fontWeight: "700", color: "#ffffff" }}>
            85%
          </div>
        </div>
        <div
          css={{
            position: "absolute",
            top: "16px",
            right: "16px",
            color: "rgba(255,255,255,0.7)",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
            <circle cx="5" cy="12" r="1" />
          </svg>
        </div>
      </div>

      {/* In Progress Section */}
      <div css={{ padding: "0 24px", marginBottom: "32px" }}>
        <div
          css={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "16px",
          }}
        >
          <div css={{ fontSize: "20px", fontWeight: "700", color: "#111827" }}>
            In Progress
          </div>
          <div
            css={{
              color: "#ffffff",
              fontSize: "12px",
              fontWeight: "600",
              padding: "4px 8px",
              borderRadius: "8px",
              minWidth: "20px",
              textAlign: "center",
              backgroundColor: "#6366f1",
            }}
          >
            6
          </div>
        </div>
        <div css={{ display: "flex", gap: "12px" }}>
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </div>

      {/* Task Groups Section */}
      <div css={{ padding: "0 24px", marginBottom: "100px" }}>
        <div
          css={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "16px",
          }}
        >
          <div css={{ fontSize: "20px", fontWeight: "700", color: "#111827" }}>
            Task Groups
          </div>
          <div
            css={{
              color: "#ffffff",
              fontSize: "12px",
              fontWeight: "600",
              padding: "4px 8px",
              borderRadius: "8px",
              minWidth: "20px",
              textAlign: "center",
              backgroundColor: "#6366f1",
            }}
          >
            4
          </div>
        </div>
        <div css={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {taskGroups.map((group) => (
            <TaskGroup key={group.id} group={group} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskManager;
