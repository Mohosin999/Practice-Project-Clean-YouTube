const { createSlice } = require("@reduxjs/toolkit");

const initialState = [
  {
    id: 1,
    value: 0,
  },
  {
    id: 2,
    value: 0,
  },
];

const countersSlice = createSlice({
  name: "counters",
  initialState, // short-cut for ES6
});

export default countersSlice;
