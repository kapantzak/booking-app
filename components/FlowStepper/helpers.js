/**
 * Receive a steps object of the following shape:
 * {
 *   [stepIndex<Number>]: { label<String>, description<String> }
 * }
 * and return a sorted (by step index) array of step objects.
 *
 * @param {Object} steps
 * @returns {Array}
 */
const getStepsArray = (steps) => {
  if (!steps) return [];

  return Object.entries(steps)
    .sort((a, b) => a[0] - b[0])
    .map(([, keyObject]) => keyObject);
};

export { getStepsArray };
