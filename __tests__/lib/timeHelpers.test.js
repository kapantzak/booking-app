import { getSlots } from "@/lib/timeHelpers";

describe("getSlots", () => {
  it("returns 48 slots for 30 minutes slot duration", () => {
    const actual = getSlots({ slotDurationInMinutes: 30 });
    const expected = [
      [0, 0],
      [0, 30],
      [1, 0],
      [1, 30],
      [2, 0],
      [2, 30],
      [3, 0],
      [3, 30],
      [4, 0],
      [4, 30],
      [5, 0],
      [5, 30],
      [6, 0],
      [6, 30],
      [7, 0],
      [7, 30],
      [8, 0],
      [8, 30],
      [9, 0],
      [9, 30],
      [10, 0],
      [10, 30],
      [11, 0],
      [11, 30],
      [12, 0],
      [12, 30],
      [13, 0],
      [13, 30],
      [14, 0],
      [14, 30],
      [15, 0],
      [15, 30],
      [16, 0],
      [16, 30],
      [17, 0],
      [17, 30],
      [18, 0],
      [18, 30],
      [19, 0],
      [19, 30],
      [20, 0],
      [20, 30],
      [21, 0],
      [21, 30],
      [22, 0],
      [22, 30],
      [23, 0],
      [23, 30],
    ];

    expect(actual).toEqual(expected);
  });

  it("returns 24 slots for 60 minutes slot duration", () => {
    const actual = getSlots({ slotDurationInMinutes: 60 });
    const expected = [
      [0, 0],
      [1, 0],
      [2, 0],
      [3, 0],
      [4, 0],
      [5, 0],
      [6, 0],
      [7, 0],
      [8, 0],
      [9, 0],
      [10, 0],
      [11, 0],
      [12, 0],
      [13, 0],
      [14, 0],
      [15, 0],
      [16, 0],
      [17, 0],
      [18, 0],
      [19, 0],
      [20, 0],
      [21, 0],
      [22, 0],
      [23, 0],
    ];

    expect(actual).toEqual(expected);
  });

  describe("with invalid from and to props", () => {
    it("returns an empty array", () => {
      const actual = getSlots({
        slotDurationInMinutes: 30,
        from: [15, 0],
        to: [14, 0],
      });

      expect(actual).toEqual([]);
    });
  });

  describe("with from set to [10,150]", () => {
    it("is treated as [10,30]", () => {
      const actual = getSlots({
        slotDurationInMinutes: 60,
        from: [10, 150],
        to: [14, 0],
      });

      const expected = [
        [10, 30],
        [11, 30],
        [12, 30],
      ];

      expect(actual).toEqual(expected);
    });
  });

  describe("with slot duration of 60 minutes and hours from 10:00 to 17:00", () => {
    it("returns 7 slots", () => {
      const actual = getSlots({
        slotDurationInMinutes: 60,
        from: [10, 0],
        to: [17, 0],
      });
      const expected = [
        [10, 0],
        [11, 0],
        [12, 0],
        [13, 0],
        [14, 0],
        [15, 0],
        [16, 0],
      ];

      expect(actual).toEqual(expected);
    });
  });
});
