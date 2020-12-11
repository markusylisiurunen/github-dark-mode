/**
 * @overview A script for scraping all CSS variable colors from github.com to a JSON file.
 */

(() => {
  const hexRegex = /^#[a-zA-Z0-9]{6,8}$/;
  const rgbaRegex = /^rgba\(([0-9,\.]*)\)$/;

  function rgbaToHexa(rgba) {
    const [_, values] = rgba.match(rgbaRegex);

    const numbers = values.split(",").map((val) => parseFloat(val));
    numbers[3] = parseInt(numbers[3] * 255, 10);

    return `#${numbers.map((n) => n.toString(16)).join("")}`;
  }

  const stylesheets = [...document.styleSheets];

  const colors = stylesheets
    .filter((sheet) => sheet.href.startsWith("https://github.githubassets.com"))
    .reduce((colors, sheet) => {
      const styleRules = [...sheet.cssRules]
        .filter((rule) => rule.type === 1)
        .filter((rule) => rule.selectorText === '[data-color-mode="dark"]');

      return styleRules.reduce((colors, rule) => {
        const ruleColors = [...rule.style]
          .filter((stylePropName) => stylePropName.startsWith("--color"))
          .map((stylePropName) => ({
            [stylePropName]: rule.style.getPropertyValue(stylePropName),
          }));

        if (!ruleColors.length) {
          return colors;
        }

        return {
          ...colors,

          ...ruleColors.reduce(
            (colors, color) => ({ ...colors, ...color }),
            {}
          ),
        };
      }, colors);
    }, {});

  const prettyColors = Object.entries(colors)
    .map(([cssColorName, colorValue]) => {
      const matches = colorValue.match(/^var\((--color-.+)\)$/);

      if (!matches) {
        return [cssColorName, colorValue];
      }

      return [cssColorName, colors[matches[1]]];
    })
    .filter(([_, colorValue]) => {
      const acceptedColorFormats = [rgbaRegex, hexRegex];
      return acceptedColorFormats.some((format) => format.test(colorValue));
    })
    .map(([cssColorName, colorValue]) => {
      if (rgbaRegex.test(colorValue)) {
        return [cssColorName, rgbaToHexa(colorValue)];
      }

      return [cssColorName, colorValue];
    })
    .map(([cssColorName, colorValue]) => {
      const colorName = cssColorName
        .split("-")
        .slice(3)
        .map(
          (partialName, index) =>
            `${
              index === 0
                ? partialName[0].toLowerCase()
                : partialName[0].toUpperCase()
            }${partialName.slice(1).toLowerCase()}`
        )
        .join("");

      return { [colorName]: colorValue };
    })
    .reduce((prettyColors, color) => ({ ...prettyColors, ...color }), {});

  copy(prettyColors);
})();
