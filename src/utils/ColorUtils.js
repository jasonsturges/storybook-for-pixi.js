/**
 * Parse value to find integer color
 *
 * Supports:
 *   - Integer, either radix 10 or 16
 *   - CSS #abc123 hexadecimal strings
 *   - CSS rgba() strings
 *
 * @param {string | number} value - Color value to parse
 * @returns {number}
 */
export function parseColor(value) {
  // Radix 10 or 16
  if (Number.isInteger(value)) return value;

  // CSS Hexadecimal String
  if (value && value.charAt(0) === "#") {
    return parseInt(value.substr(1), 16);
  }

  // CSS rgba()
  let re = /^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i;

  if (re.test(value)) {
    const m = value.match(re);
    return (
      ((parseInt(m)?.[1] & 0xff) << 16) | //
      ((parseInt(m)?.[2] & 0xff) << 8) | //
      (parseInt(m)?.[3] & 0xff)
    );
  }
}
