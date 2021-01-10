import diff from "color-diff";
import colors from "../github-colors";

type HexColor = string;

type RGBColor = { R: number; G: number; B: number };

function fromHexToRGB(hexColor: HexColor): RGBColor {
  if (hexColor.length !== 3 * 2 + 1) {
    throw new Error(`Invalid hex color: ${hexColor}`);
  }

  return {
    R: parseInt(hexColor.slice(1, 3), 16),
    G: parseInt(hexColor.slice(3, 5), 16),
    B: parseInt(hexColor.slice(5, 7), 16),
  };
}

const syntaxColors = Object.entries(colors)
  .filter(([key, _]) => key.startsWith("prettylights"))
  .reduce((acc, [key, color]) => ({ ...acc, [key]: fromHexToRGB(color) }), {});

function findClosest(
  search: RGBColor,
  palette: { [key: string]: RGBColor },
  n: number = 10
): string[] {
  const _palette = { ...palette };
  const _colors: string[] = [];

  for (let i = 0; i < n; i += 1) {
    const _closestColor = diff.closest(search, Object.values(_palette));
    const _closestName = Object.entries(_palette).find(
      ([_, color]) =>
        color.R === _closestColor.R &&
        color.G === _closestColor.G &&
        color.B === _closestColor.B
    )?.[0];

    if (!_closestName) {
      throw new Error("Could not find closest color");
    }

    _colors.push(_closestName);

    delete _palette[_closestName];
  }

  return _colors;
}

console.log(`Closest colors to ${process.argv[2]} are:\n`);
console.log(
  findClosest(fromHexToRGB(process.argv[2]), syntaxColors)
    .map((_) => `\t${_}`)
    .join("\n")
);
