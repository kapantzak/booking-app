import { useEffect } from "react";

/**
 * Calls the provided callback when a click event occurs outside of all
 * specified ref elements.
 *
 * @param {Array<Element>} refs
 * @param {Function} callback
 */
const useOutsideClickCallback = (refs, callback) => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        refs.every((ref) => !ref.current || !ref.current.contains(event.target))
      ) {
        callback();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refs, callback]);
};

export { useOutsideClickCallback };
