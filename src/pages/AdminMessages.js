import { useEffect, useState } from "react";
import AdminLayout from "../components/admin/AdminLayout";

import {
  getContactMessages,
  updateContactMessageStatus,
} from "../services/contactService";

function AdminMessages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMessages();
  }, []);

  // ======================================
  // Load Messages
  // ======================================
  const loadMessages = async () => {
    try {
      setLoading(true);

      const data = await getContactMessages();

      setMessages(data.messages || []);
    } catch (error) {
      console.error(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  // ======================================
  // Update Message Status
  // ======================================
  const handleStatusChange = async (id, status) => {
    try {
      await updateContactMessageStatus(id, status);

      setMessages((currentMessages) =>
        currentMessages.map((message) =>
          message.id === id
            ? {
                ...message,
                status,
              }
            : message
        )
      );
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  // ======================================
  // Status Badge
  // ======================================
  const getStatusStyle = (status) => {
    if (status === "new") {
      return {
        background: "#ffc107",
        color: "#212529",
      };
    }

    if (status === "read") {
      return {
        background: "#17a2b8",
        color: "#fff",
      };
    }

    if (status === "replied") {
      return {
        background: "#28a745",
        color: "#fff",
      };
    }

    return {
      background: "#6c757d",
      color: "#fff",
    };
  };

  // ======================================
  // Loading
  // ======================================
  if (loading) {
    return (
      <AdminLayout>
        <div style={{ padding: "30px" }}>
          <h2>Loading Messages...</h2>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div
        style={{
          padding: "30px",
          width: "100%",
          boxSizing: "border-box",
        }}
      >

        {/* ====================================== */}
        {/* Header */}
        {/* ====================================== */}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "25px",
          }}
        >
          <div>
            <h1
              style={{
                margin: 0,
                color: "#212529",
              }}
            >
              Customer Messages
            </h1>

            <p
              style={{
                color: "#666",
                marginTop: "8px",
              }}
            >
              View and manage messages received
              from customers.
            </p>
          </div>

          <button
            onClick={loadMessages}
            style={{
              padding: "10px 20px",
              border: "none",
              borderRadius: "8px",
              background: "#24752b",
              color: "#fff",
              fontSize: "15px",
              cursor: "pointer",
            }}
          >
            🔄 Refresh
          </button>
        </div>

        {/* ====================================== */}
        {/* Message Count */}
        {/* ====================================== */}

        <div
          style={{
            marginBottom: "20px",
            fontSize: "17px",
            fontWeight: "bold",
          }}
        >
          📩 Total Messages: {messages.length}
        </div>

        {/* ====================================== */}
        {/* No Messages */}
        {/* ====================================== */}

        {messages.length === 0 ? (
          <div
            style={{
              background: "#fff",
              padding: "50px",
              textAlign: "center",
              borderRadius: "12px",
              boxShadow:
                "0 3px 15px rgba(0,0,0,0.08)",
            }}
          >
            <div style={{ fontSize: "50px" }}>
              📭
            </div>

            <h2>No Messages Yet</h2>

            <p>
              Customer messages will appear here
              when they contact you.
            </p>
          </div>
        ) : (

          /* ====================================== */
          /* Messages Table */
          /* ====================================== */

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              boxShadow:
                "0 3px 15px rgba(0,0,0,0.08)",
              overflowX: "auto",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: "1000px",
              }}
            >
              <thead>
                <tr
                  style={{
                    background: "#24752b",
                    color: "#fff",
                  }}
                >
                  <th style={tableHeaderStyle}>
                    ID
                  </th>

                  <th style={tableHeaderStyle}>
                    Customer
                  </th>

                  <th style={tableHeaderStyle}>
                    Email
                  </th>

                  <th style={tableHeaderStyle}>
                    Phone
                  </th>

                  <th style={tableHeaderStyle}>
                    Message
                  </th>

                  <th style={tableHeaderStyle}>
                    Status
                  </th>

                  <th style={tableHeaderStyle}>
                    Date
                  </th>

                  <th style={tableHeaderStyle}>
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>

                {messages.map((message) => (
                  <tr key={message.id}>

                    <td style={tableCellStyle}>
                      {message.id}
                    </td>

                    <td style={tableCellStyle}>
                      <strong>
                        {message.name}
                      </strong>
                    </td>

                    <td style={tableCellStyle}>
                      {message.email}
                    </td>

                    <td style={tableCellStyle}>
                      {message.phone || "-"}
                    </td>

                    <td
                      style={{
                        ...tableCellStyle,
                        maxWidth: "300px",
                      }}
                    >
                      {message.message}
                    </td>

                    <td style={tableCellStyle}>
                      <span
                        style={{
                          ...getStatusStyle(
                            message.status
                          ),
                          padding:
                            "6px 12px",
                          borderRadius:
                            "20px",
                          fontSize:
                            "13px",
                          fontWeight:
                            "bold",
                        }}
                      >
                        {message.status
                          .toUpperCase()}
                      </span>
                    </td>

                    <td style={tableCellStyle}>
                      {message.created_at
                        ? new Date(
                            message.created_at
                          ).toLocaleString()
                        : "-"}
                    </td>

                    <td style={tableCellStyle}>

                      <select
                        value={
                          message.status
                        }
                        onChange={(e) =>
                          handleStatusChange(
                            message.id,
                            e.target.value
                          )
                        }
                        style={{
                          padding: "8px",
                          borderRadius:
                            "6px",
                          border:
                            "1px solid #ccc",
                          cursor:
                            "pointer",
                        }}
                      >
                        <option value="new">
                          New
                        </option>

                        <option value="read">
                          Read
                        </option>

                        <option value="replied">
                          Replied
                        </option>
                      </select>

                    </td>

                  </tr>
                ))}

              </tbody>
            </table>
          </div>
        )}

      </div>
    </AdminLayout>
  );
}

// ======================================
// Table Styles
// ======================================

const tableHeaderStyle = {
  padding: "14px",
  textAlign: "left",
  whiteSpace: "nowrap",
};

const tableCellStyle = {
  padding: "14px",
  borderBottom: "1px solid #eee",
  verticalAlign: "top",
};

export default AdminMessages;