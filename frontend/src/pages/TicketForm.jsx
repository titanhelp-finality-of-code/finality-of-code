import { useState } from "react";

export default function TicketForm() {
  const [form, setForm] = useState({
    short_des: "",
    lond_des: "",
    priority_id: "",
    state_id: "",
    user_id: "1100001" // mock user for now
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!form.short_des.trim()) {
      newErrors.short_des = "Short description is required.";
    } else if (form.short_des.length > 100) {
      newErrors.short_des = "Short description must be 100 characters or less.";
    }

    if (!form.lond_des.trim()) {
      newErrors.lond_des = "Long description is required.";
    } else if (form.lond_des.length > 1000) {
      newErrors.lond_des = "Long description must be 1000 characters or less.";
    }

    if (!form.priority_id) {
      newErrors.priority_id = "Priority is required.";
    }

    if (!form.state_id) {
      newErrors.state_id = "State is required.";
    }

    if (!form.user_id) {
      newErrors.user_id = "User ID is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    console.log("Form submitted:", form);
    alert("Ticket submitted (mock). Backend integration coming later.");
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h1>Create New Ticket</h1>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "20px" }}>
          <label>Short Description</label>
          <input
            type="text"
            name="short_des"
            value={form.short_des}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
          {errors.short_des && (
            <p style={{ color: "red" }}>{errors.short_des}</p>
          )}
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label>Long Description</label>
          <textarea
            name="lond_des"
            value={form.lond_des}
            onChange={handleChange}
            rows="5"
            style={{ width: "100%", padding: "8px" }}
          />
          {errors.lond_des && (
            <p style={{ color: "red" }}>{errors.lond_des}</p>
          )}
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label>Priority</label>
          <select
            name="priority_id"
            value={form.priority_id}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          >
            <option value="">Select priority</option>
            <option value="1">Low</option>
            <option value="2">Medium</option>
            <option value="3">High</option>
          </select>
          {errors.priority_id && (
            <p style={{ color: "red" }}>{errors.priority_id}</p>
          )}
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label>State</label>
          <select
            name="state_id"
            value={form.state_id}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          >
            <option value="">Select state</option>
            <option value="1001">Open</option>
            <option value="1002">In Progress</option>
            <option value="1003">Closed</option>
          </select>
          {errors.state_id && (
            <p style={{ color: "red" }}>{errors.state_id}</p>
          )}
        </div>

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#1e1e1e",
            color: "white",
            border: "none",
            cursor: "pointer"
          }}
        >
          Submit Ticket
        </button>
      </form>
    </div>
  );
}
