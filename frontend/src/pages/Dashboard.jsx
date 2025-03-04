import React, { useEffect, useState } from "react";
import "../styles/Dashboard.css";
import UserGrid from "../components/UserTile"; // Import UserGrid
import { getAllUsers } from "../services/userServices"; // Import API function

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getAllUsers();

        // Map API response to match expected format
        const formattedUsers = data.map((user) => ({
          id: user.id,
          name: user.username, // Use `username` instead of `name`
          role: user.role_name, // Use `role_name` instead of `role`
        }));

        setUsers(formattedUsers);
      } catch (err) {
        setError("Failed to load users.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="dashboard-container">
      <h1>Welcome to Consent Manager Dashboard</h1>

      {loading && <p>Loading users...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && <UserGrid users={users} />}
    </div>
  );
};

export default Dashboard;
