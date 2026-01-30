const API_URL = "http://localhost:3000";

// helper: get token
const getToken = () => localStorage.getItem("token");

export const getCars = async () => {
  const res = await fetch(`${API_URL}/cars`, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });
  return res.json();
};

export const addCar = async (formdata) => {
  const res = await fetch(`${API_URL}/cars`, {
    method: "POST",
    headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`
    },
    body: formdata,
  });

  return res.json();
};

export const deleteCar = async (id) => {
  await fetch(`${API_URL}/cars/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });
};

export const login = async (credentials) => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  if (!res.ok) throw new Error("Login failed");

  const data = await res.json();
  localStorage.setItem("token", data.token);
  return data;
};

