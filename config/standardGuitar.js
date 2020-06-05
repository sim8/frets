import { notes } from "../constants/notes";
import { inlays } from "../constants/displayConstants";

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
      3: inlays.DOT,
      5: inlays.DOT,
      7: inlays.DOT,
      9: inlays.DOT,
      12: inlays.DOUBLE_DOT,
      15: inlays.DOT,
      17: inlays.DOT,
      19: inlays.DOT,
      21: inlays.DOT,
    },
  },
};
