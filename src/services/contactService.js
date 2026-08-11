const API_URL = "http://localhost:5000/api/contact";

// ======================================
// Send Contact Message
// ======================================
export const sendContactMessage = async (
  contactData
) => {
  const response = await fetch(API_URL, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(contactData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message ||
        data.error ||
        "Failed to send message."
    );
  }

  return data;
};

// ======================================
// Get Contact Messages
// Admin Only
// ======================================
export const getContactMessages = async () => {
  const token = localStorage.getItem("token");

  const response = await fetch(API_URL, {
    method: "GET",

    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message ||
        data.error ||
        "Failed to fetch messages."
    );
  }

  return data;
};

// ======================================
// Update Message Status
// Admin Only
// ======================================
export const updateContactMessageStatus = async (
  id,
  status
) => {
  const token = localStorage.getItem("token");

  const response = await fetch(
    `${API_URL}/${id}/status`,
    {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify({
        status,
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message ||
        data.error ||
        "Failed to update message status."
    );
  }

  return data;
};