import { getDaysOfWeek } from "@/lib/constants";

describe("getDaysOfWeek", () => {
  it("returns greek days with Monday as first day", () => {
    const actual = getDaysOfWeek({ locales: "el" });
    const expected = ["Δευ", "Τρί", "Τετ", "Πέμ", "Παρ", "Σάβ", "Κυρ"];

    expect(actual).toEqual(expected);
  });

  it("returns greek days full names", () => {
    const actual = getDaysOfWeek({
      locales: "el",
      weekday: "long",
    });
    const expected = [
      "Δευτέρα",
      "Τρίτη",
      "Τετάρτη",
      "Πέμπτη",
      "Παρασκευή",
      "Σάββατο",
      "Κυριακή",
    ];

    expect(actual).toEqual(expected);
  });

  it("returns greek days with Sunday as firts day", () => {
    const actual = getDaysOfWeek({ locales: "el", sundayFirst: true });
    const expected = ["Κυρ", "Δευ", "Τρί", "Τετ", "Πέμ", "Παρ", "Σάβ"];

    expect(actual).toEqual(expected);
  });

  it("returns english days", () => {
    const actual = getDaysOfWeek({ locales: "en" });
    const expected = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    expect(actual).toEqual(expected);
  });
});
