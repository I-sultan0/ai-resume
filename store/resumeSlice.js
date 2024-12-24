import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  templates: {
    template1: {
      id: "template1",
      title: "Resume Template 1",
      content: {
        introduction: "This is an example introduction for Template 1.",
        skills: ["React", "Next.js", "Redux"],
        experience: "2 years of experience in web development.",
      },
    },
    template2: {
      id: "template2",
      title: "Resume Template 2",
      content: {
        introduction: "This is an example introduction for Template 2.",
        skills: ["JavaScript", "CSS", "HTML"],
        experience: "3 years of experience in front-end development.",
      },
    },
  },
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {},
});

export default resumeSlice.reducer;
