/** @jsxImportSource @emotion/react */
import { useState } from "react";

const ReservationPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const services = [
    {
      id: 1,
      name: "Consulting",
      duration: "60 min",
      price: "$80",
      color: "#6366f1",
      bgColor: "#eef2ff",
    },
    {
      id: 2,
      name: "Design Review",
      duration: "45 min",
      price: "$60",
      color: "#ec4899",
      bgColor: "#fdf2f8",
    },
    {
      id: 3,
      name: "Technical Support",
      duration: "30 min",
      price: "$40",
      color: "#10b981",
      bgColor: "#ecfdf5",
    },
  ];

  const timeSlots = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
  ];

  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const dates = generateDates();

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (
      selectedDate &&
      selectedTime &&
      selectedService &&
      formData.name &&
      formData.email
    ) {
      alert("Booking completed successfully!");
      // Reset form
      setSelectedDate(null);
      setSelectedTime(null);
      setSelectedService(null);
      setFormData({ name: "", email: "", phone: "", notes: "" });
    } else {
      alert("Please fill in all required fields.");
    }
  };

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
        paddingBottom: "100px",
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
          <button
            css={{
              width: "40px",
              height: "40px",
              borderRadius: "12px",
              border: "none",
              backgroundColor: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6b7280"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H6m6 6l-6-6 6-6" />
            </svg>
          </button>
          <div
            css={{
              fontSize: "24px",
              fontWeight: "700",
              color: "#111827",
            }}
          >
            Reservation
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
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        </div>
      </div>

      {/* Service Selection */}
      <div css={{ padding: "0 24px", marginBottom: "32px" }}>
        <div
          css={{
            fontSize: "18px",
            fontWeight: "700",
            color: "#111827",
            marginBottom: "16px",
          }}
        >
          Select Service
        </div>
        <div css={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              css={{
                padding: "16px",
                borderRadius: "16px",
                backgroundColor:
                  selectedService?.id === service.id
                    ? service.bgColor
                    : "#ffffff",
                border:
                  selectedService?.id === service.id
                    ? `2px solid ${service.color}`
                    : "1px solid #f3f4f6",
                cursor: "pointer",
                transition: "all 0.2s ease",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              }}
            >
              <div
                css={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div
                    css={{
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "#111827",
                      marginBottom: "4px",
                    }}
                  >
                    {service.name}
                  </div>
                  <div css={{ fontSize: "14px", color: "#6b7280" }}>
                    {service.duration}
                  </div>
                </div>
                <div
                  css={{
                    fontSize: "18px",
                    fontWeight: "700",
                    color: service.color,
                  }}
                >
                  {service.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Date Selection */}
      <div css={{ padding: "0 24px", marginBottom: "32px" }}>
        <div
          css={{
            fontSize: "18px",
            fontWeight: "700",
            color: "#111827",
            marginBottom: "16px",
          }}
        >
          Select Date
        </div>
        <div
          css={{
            display: "flex",
            gap: "8px",
            overflowX: "auto",
            paddingBottom: "8px",
          }}
        >
          {dates.map((date, index) => {
            const isSelected =
              selectedDate?.toDateString() === date.toDateString();
            return (
              <div
                key={index}
                onClick={() => setSelectedDate(date)}
                css={{
                  minWidth: "60px",
                  padding: "12px 8px",
                  borderRadius: "12px",
                  backgroundColor: isSelected ? "#6366f1" : "#ffffff",
                  border: isSelected
                    ? "2px solid #6366f1"
                    : "1px solid #f3f4f6",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  textAlign: "center",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                }}
              >
                <div
                  css={{
                    fontSize: "12px",
                    fontWeight: "500",
                    color: isSelected ? "#ffffff" : "#6b7280",
                    marginBottom: "4px",
                  }}
                >
                  {date.toLocaleDateString("en-US", { weekday: "short" })}
                </div>
                <div
                  css={{
                    fontSize: "16px",
                    fontWeight: "700",
                    color: isSelected ? "#ffffff" : "#111827",
                  }}
                >
                  {date.getDate()}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Time Selection */}
      {selectedDate && (
        <div css={{ padding: "0 24px", marginBottom: "32px" }}>
          <div
            css={{
              fontSize: "18px",
              fontWeight: "700",
              color: "#111827",
              marginBottom: "16px",
            }}
          >
            Select Time
          </div>
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "12px",
            }}
          >
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                css={{
                  padding: "12px",
                  borderRadius: "12px",
                  border:
                    selectedTime === time
                      ? "2px solid #6366f1"
                      : "1px solid #f3f4f6",
                  backgroundColor:
                    selectedTime === time ? "#eef2ff" : "#ffffff",
                  color: selectedTime === time ? "#6366f1" : "#111827",
                  fontSize: "14px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                }}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Contact Information */}
      {selectedTime && (
        <div css={{ padding: "0 24px", marginBottom: "32px" }}>
          <div
            css={{
              fontSize: "18px",
              fontWeight: "700",
              color: "#111827",
              marginBottom: "16px",
            }}
          >
            Customer Information
          </div>
          <div css={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div>
              <label
                css={{
                  display: "block",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#374151",
                  marginBottom: "8px",
                }}
              >
                Name *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                css={{
                  width: "100%",
                  padding: "12px 16px",
                  borderRadius: "12px",
                  border: "1px solid #d1d5db",
                  fontSize: "16px",
                  backgroundColor: "#ffffff",
                  "&:focus": {
                    outline: "none",
                    borderColor: "#6366f1",
                    boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)",
                  },
                }}
                placeholder="John Doe"
              />
            </div>
            <div>
              <label
                css={{
                  display: "block",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#374151",
                  marginBottom: "8px",
                }}
              >
                Email Address *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                css={{
                  width: "100%",
                  padding: "12px 16px",
                  borderRadius: "12px",
                  border: "1px solid #d1d5db",
                  fontSize: "16px",
                  backgroundColor: "#ffffff",
                  "&:focus": {
                    outline: "none",
                    borderColor: "#6366f1",
                    boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)",
                  },
                }}
                placeholder="example@email.com"
              />
            </div>
            <div>
              <label
                css={{
                  display: "block",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#374151",
                  marginBottom: "8px",
                }}
              >
                Phone Number
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                css={{
                  width: "100%",
                  padding: "12px 16px",
                  borderRadius: "12px",
                  border: "1px solid #d1d5db",
                  fontSize: "16px",
                  backgroundColor: "#ffffff",
                  "&:focus": {
                    outline: "none",
                    borderColor: "#6366f1",
                    boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)",
                  },
                }}
                placeholder="+1 (555) 123-4567"
              />
            </div>
            <div>
              <label
                css={{
                  display: "block",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#374151",
                  marginBottom: "8px",
                }}
              >
                Notes
              </label>
              <textarea
                value={formData.notes}
                onChange={(e) => handleInputChange("notes", e.target.value)}
                css={{
                  width: "100%",
                  padding: "12px 16px",
                  borderRadius: "12px",
                  border: "1px solid #d1d5db",
                  fontSize: "16px",
                  backgroundColor: "#ffffff",
                  minHeight: "80px",
                  resize: "vertical",
                  "&:focus": {
                    outline: "none",
                    borderColor: "#6366f1",
                    boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)",
                  },
                }}
                placeholder="Please write any requests or questions you may have"
              />
            </div>
          </div>
        </div>
      )}

      {/* Booking Summary & Submit */}
      {selectedService && selectedDate && selectedTime && (
        <div css={{ padding: "0 24px", marginBottom: "32px" }}>
          <div
            css={{
              backgroundColor: "#ffffff",
              borderRadius: "16px",
              padding: "20px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              marginBottom: "24px",
            }}
          >
            <div
              css={{
                fontSize: "18px",
                fontWeight: "700",
                color: "#111827",
                marginBottom: "16px",
              }}
            >
              Booking Confirmation
            </div>
            <div
              css={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <div css={{ display: "flex", justifyContent: "space-between" }}>
                <span css={{ color: "#6b7280", fontSize: "14px" }}>
                  Service:
                </span>
                <span css={{ fontWeight: "600", fontSize: "14px" }}>
                  {selectedService.name}
                </span>
              </div>
              <div css={{ display: "flex", justifyContent: "space-between" }}>
                <span css={{ color: "#6b7280", fontSize: "14px" }}>Date:</span>
                <span css={{ fontWeight: "600", fontSize: "14px" }}>
                  {selectedDate.toLocaleDateString("en-US")}
                </span>
              </div>
              <div css={{ display: "flex", justifyContent: "space-between" }}>
                <span css={{ color: "#6b7280", fontSize: "14px" }}>Time:</span>
                <span css={{ fontWeight: "600", fontSize: "14px" }}>
                  {selectedTime}
                </span>
              </div>
              <div
                css={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingTop: "12px",
                  borderTop: "1px solid #f3f4f6",
                }}
              >
                <span css={{ color: "#6b7280", fontSize: "14px" }}>Price:</span>
                <span
                  css={{
                    fontWeight: "700",
                    fontSize: "16px",
                    color: selectedService.color,
                  }}
                >
                  {selectedService.price}
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={handleSubmit}
            css={{
              width: "100%",
              padding: "16px",
              borderRadius: "16px",
              border: "none",
              backgroundColor: "#6366f1",
              color: "#ffffff",
              fontSize: "16px",
              fontWeight: "700",
              cursor: "pointer",
              transition: "all 0.2s ease",
              boxShadow: "0 4px 12px rgba(99, 102, 241, 0.3)",
              "&:hover": {
                backgroundColor: "#5856eb",
                transform: "translateY(-1px)",
              },
            }}
          >
            Confirm Booking
          </button>
        </div>
      )}
    </div>
  );
};

export default ReservationPage;
