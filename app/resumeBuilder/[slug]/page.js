"use client";

import { useParams } from "next/navigation";
import { useSelector } from "react-redux";

export default function FirstResume() {
  const { slug } = useParams(); // Access the dynamic route parameter
  const templateData = useSelector((state) => state.resume.templates[slug]); // Access the Redux state

  if (!templateData) {
    return <h1>Template not found</h1>; // Handle invalid slug
  }

  return (
    <div>
      <h1>{templateData.title}</h1>
      <p>
        <strong>Introduction:</strong> {templateData.content.introduction}
      </p>
      <p>
        <strong>Skills:</strong> {templateData.content.skills.join(", ")}
      </p>
      <p>
        <strong>Experience:</strong> {templateData.content.experience}
      </p>
    </div>
  );
}
