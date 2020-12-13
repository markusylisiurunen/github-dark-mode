/**
 * @overview Utility functions.
 */

export function multiplyTransparencyBy(
  multiplier: number
): (hexColor: string) => string {
  return (hexColor: string) => {
    const baseStr = hexColor.slice(0, 7);
    const alphaStr = hexColor.slice(7, 9) || null;

    let alpha: number;

    if (alphaStr === null) {
      alpha = 255;
    } else {
      alpha = parseInt(alphaStr, 16);
    }

    const newAlphaStr = Math.round(
      Math.min(Math.max(0, multiplier * alpha), 255)
    )
      .toString(16)
      .padStart(2, "0");

    return `${baseStr}${newAlphaStr}`;
  };
}
