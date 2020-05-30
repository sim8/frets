import { notes } from "../constants/notes";

export default {
  frets: 21,
  middleFret: 12,
  strings: [
    {
      note: notes.E,
      octave: 1,
    },
    {
      note: notes.A,
      octave: 1,
    },
    {
      note: notes.D,
      octave: 2,
    },
    {
      note: notes.G,
      octave: 2,
    },
    {
      note: notes.B,
      octave: 2,
    },
    {
      note: notes.E,
      octave: 3,
    },
  ],
  display: {
    inlays: {
      3: "dot",
      5: "dot",
      7: "dot",
      9: "dot",
      12: "double-dot",
      15: "dot",
      17: "dot",
      19: "dot",
      21: "dot",
    },
  },
};
