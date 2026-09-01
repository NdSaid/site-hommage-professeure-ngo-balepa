/**
 * Her education, appointments, and honors. Each list renders as a timeline
 * on /career/. Entries are shown in the order written here — newest first
 * reads best for appointments, oldest first for education.
 */
export interface Entry {
  /** e.g. "1998" or "1998–2004" */
  period: string;
  title: string;
  /** Institution, department, or awarding body. */
  place?: string;
  /** One or two sentences of context. Optional. */
  note?: string;
}

export const education: Entry[] = [
  {
    period: "1974",
    title: "B.A., ___",
    place: "University of ___",
  },
  {
    period: "1976",
    title: "M.A., ___",
    place: "University of ___",
  },
  {
    period: "1981",
    title: "Ph.D., ___",
    place: "University of ___",
    note: "Dissertation: “___”, supervised by Professor ___.",
  },
];

export const appointments: Entry[] = [
  {
    period: "2001–2025",
    title: "Professor of ___",
    place: "University of ___",
    note: "Chaired the department from ___ to ___.",
  },
  {
    period: "1991–2001",
    title: "Associate Professor",
    place: "University of ___",
  },
  {
    period: "1983–1991",
    title: "Assistant Professor",
    place: "University of ___",
  },
];

export const honors: Entry[] = [
  {
    period: "2018",
    title: "___ Prize",
    place: "___ Society",
    note: "Awarded for her contributions to ___.",
  },
  {
    period: "2009",
    title: "Fellow",
    place: "___ Academy",
  },
];
