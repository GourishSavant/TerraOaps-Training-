import React, { useState } from "react";

const TeacherReview = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [reviews, setReviews] = useState([]);

  const teachers = [
    {
      id: 1,
      name: "John Doe",
      subject: "Mathematics",
      time: "9:00 AM - 10:00 AM",
      room: "101",
      email: "john.doe@example.com",
      phone: "123-456-7890",
    },
    {
      id: 2,
      name: "Jane Smith",
      subject: "English",
      time: "10:00 AM - 11:00 AM",
      room: "102",
      email: "jane.smith@example.com",
      phone: "234-567-8901",
    },
    {
      id: 3,
      name: "Robert Brown",
      subject: "Science",
      time: "11:00 AM - 12:00 PM",
      room: "103",
      email: "robert.brown@example.com",
      phone: "345-678-9012",
    },
  ];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleRatingChange = (id, rating) => {
    setReviews((prevReviews) => {
      const existingReview = prevReviews.find((review) => review.id === id);
      if (existingReview) {
        return prevReviews.map((review) =>
          review.id === id ? { ...review, rating } : review
        );
      } else {
        return [...prevReviews, { id, rating, comment: "" }];
      }
    });
  };

  const handleCommentChange = (id, comment) => {
    setReviews((prevReviews) => {
      const existingReview = prevReviews.find((review) => review.id === id);
      if (existingReview) {
        return prevReviews.map((review) =>
          review.id === id ? { ...review, comment } : review
        );
      } else {
        return [...prevReviews, { id, rating: "", comment }];
      }
    });
  };

  const filteredTeachers = teachers.filter((teacher) =>
    teacher.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">Teacher Reviews</h1>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full mb-4 px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border p-2">Teacher Name</th>
              <th className="border p-2">Subject</th>
              <th className="border p-2">Time</th>
              <th className="border p-2">Room No.</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Phone</th>
              <th className="border p-2">My Rating</th>
              <th className="border p-2">Comment</th>
            </tr>
          </thead>
          <tbody>
            {filteredTeachers.map((teacher) => {
              const review = reviews.find((r) => r.id === teacher.id) || {};
              return (
                <tr key={teacher.id}>
                  <td className="border p-2">{teacher.name}</td>
                  <td className="border p-2">{teacher.subject}</td>
                  <td className="border p-2">{teacher.time}</td>
                  <td className="border p-2">{teacher.room}</td>
                  <td className="border p-2">{teacher.email}</td>
                  <td className="border p-2">{teacher.phone}</td>
                  <td className="border p-2">
                    <input
                      type="number"
                      min="1"
                      max="5"
                      value={review.rating || ""}
                      onChange={(e) =>
                        handleRatingChange(teacher.id, e.target.value)
                      }
                      className="w-16 px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </td>
                  <td className="border p-2">
                    <input
                      type="text"
                      value={review.comment || ""}
                      onChange={(e) =>
                        handleCommentChange(teacher.id, e.target.value)
                      }
                      className="w-full px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeacherReview;
