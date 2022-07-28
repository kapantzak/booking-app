import { getStepsArray } from "@/components/FlowStepper/helpers";

describe("getStepsArray", () => {
  describe("with no steps object", () => {
    it("returns an empty array", () => {
      expect(getStepsArray()).toEqual([]);
    });
  });

  describe("with unsorted steps object", () => {
    it("returns a sorted array of steps objects", () => {
      const steps = {
        2: { label: "two" },
        3: { label: "three" },
        1: { label: "one" },
      };

      const expected = [{ label: "one" }, { label: "two" }, { label: "three" }];

      expect(getStepsArray(steps)).toEqual(expected);
    });
  });
});
