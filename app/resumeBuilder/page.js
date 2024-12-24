"use client";

import Image from "next/image";
import resumeTemplate from "../../assets/resume-template.webp";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";

export default function ResumeBuilder() {
  const router = useRouter();

  const handleRedirect = (templateSlug) => {
    router.push(`/resumeBuilder/${templateSlug}`); // Navigate to the dynamic route
  };
  return (
    <div className={styles.resumePage}>
      <Navbar />
      <div className={styles.resumeContainer}>
        <div onClick={() => handleRedirect("template1")}>
          <Image src={resumeTemplate} alt="Resume Template" />
          <h2>Resume Template 1</h2>
        </div>
        <div onClick={() => handleRedirect("template2")}>
          <Image src={resumeTemplate} alt="Resume Template" />
          <h2>Resume Template 2</h2>
        </div>
      </div>
    </div>
  );
}
