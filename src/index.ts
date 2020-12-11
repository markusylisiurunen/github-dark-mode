import fs from "fs";
import { promisify } from "util";

import gitHubColors from "./github-colors";

const writeFile = promisify(fs.writeFile);

async function main(): Promise<void> {
  await writeFile(
    "./themes/github-dark-mode.json",
    JSON.stringify(
      {
        name: "GitHub Dark Mode",
        type: "dark",
        semanticHighlighting: true,
        colors: {
          // Base colors
          foreground: gitHubColors.textPrimary,
          "icon.foreground": gitHubColors.textPrimary,

          // Button
          "button.background": gitHubColors.stateSelectedPrimaryBg,
          "button.foreground": gitHubColors.stateSelectedPrimaryText,
          "button.secondaryForeground": gitHubColors.btnBg,
          "button.secondaryBackground": gitHubColors.btnText,
          "checkbox.background": gitHubColors.btnBg,
          "checkbox.foreground": gitHubColors.btnText,
          "checkbox.border": gitHubColors.btnBorder,

          // Input
          "input.background": gitHubColors.bgTertiary,
          "input.border": gitHubColors.inputBorder,
          "input.foreground": gitHubColors.textPrimary,
          "input.placeholderForeground": gitHubColors.textSecondary,
          "inputOption.activeBorder": gitHubColors.borderSecondary,
          "inputOption.activeForeground": gitHubColors.textPrimary,

          // Title Bar
          "titleBar.activeBackground": gitHubColors.bgPrimary,
          "titleBar.activeForeground": gitHubColors.textSecondary,
          "titleBar.inactiveBackground": gitHubColors.bgTertiary,
          "titleBar.inactiveForeground": gitHubColors.textSecondary,
          "titleBar.border": gitHubColors.borderPrimary,

          // Activity bar
          "activityBar.activeBackground": gitHubColors.bgTertiary,
          "activityBar.activeBorder": gitHubColors.autoOrange5,
          "activityBar.activeFocusBorder": gitHubColors.autoOrange7,
          "activityBar.background": gitHubColors.bgCanvas,
          "activityBar.border": gitHubColors.borderPrimary,
          "activityBar.foreground": gitHubColors.textPrimary,
          "activityBar.inactiveForeground": gitHubColors.textSecondary,

          // Side Bar
          "sideBar.background": gitHubColors.bgPrimary,
          "sideBar.border": gitHubColors.borderPrimary,
          "sideBar.foreground": gitHubColors.textSecondary,
          "sideBarTitle.foreground": gitHubColors.textPrimary,
          "sideBarSectionHeader.background": gitHubColors.bgTertiary,
          "sideBarSectionHeader.border": gitHubColors.btnBorder,
          "sideBarSectionHeader.foreground": gitHubColors.btnText,

          // Editor Group
          "editorGroup.border": gitHubColors.borderPrimary,
          "editorGroup.emptyBackground": gitHubColors.bgPrimary,
          "editorGroupHeader.noTabsBackground": gitHubColors.bgPrimary,
          "editorGroupHeader.tabsBackground": gitHubColors.bgPrimary,
          "editorGroupHeader.tabsBorder": gitHubColors.borderPrimary,
          "editorGroupHeader.border": gitHubColors.borderPrimary,

          // Tab
          "tab.activeBackground": gitHubColors.bgTertiary,
          "tab.activeForeground": gitHubColors.textPrimary,
          "tab.activeBorder": gitHubColors.autoOrange5,
          "tab.inactiveBackground": gitHubColors.bgPrimary,
          "tab.inactiveForeground": gitHubColors.textSecondary,
          "tab.hoverBackground": gitHubColors.btnBg,
          "tab.hoverForeground": gitHubColors.textPrimary,

          // Panel
          "panel.background": gitHubColors.bgPrimary,
          "panel.border": gitHubColors.borderPrimary,
          "panelSection.border": gitHubColors.borderPrimary,
          "panelTitle.activeBorder": gitHubColors.autoOrange5,
          "panelTitle.activeForeground": gitHubColors.textPrimary,
          "panelTitle.inactiveForeground": gitHubColors.textSecondary,

          // Status Bar
          "statusBar.background": gitHubColors.btnBg,
          "statusBar.foreground": gitHubColors.btnText,
          "statusBar.border": gitHubColors.btnBorder,

          // Terminal
          "terminal.ansiBlack": gitHubColors.ansiBlack,
          "terminal.ansiBlue": gitHubColors.ansiBlue,
          "terminal.ansiBrightBlack": gitHubColors.ansiBlackBright,
          "terminal.ansiBrightBlue": gitHubColors.ansiBlueBright,
          "terminal.ansiBrightCyan": gitHubColors.ansiCyanBright,
          "terminal.ansiBrightGreen": gitHubColors.ansiGreenBright,
          "terminal.ansiBrightMagenta": gitHubColors.ansiMagentaBright,
          "terminal.ansiBrightRed": gitHubColors.ansiRedBright,
          "terminal.ansiBrightWhite": gitHubColors.ansiWhiteBright,
          "terminal.ansiBrightYellow": gitHubColors.ansiYellowBright,
          "terminal.ansiCyan": gitHubColors.ansiCyan,
          "terminal.ansiGreen": gitHubColors.ansiGreen,
          "terminal.ansiMagenta": gitHubColors.ansiMagenta,
          "terminal.ansiRed": gitHubColors.ansiRed,
          "terminal.ansiWhite": gitHubColors.ansiWhite,
          "terminal.ansiYellow": gitHubColors.ansiYellow,

          // Breadcrumb
          "breadcrumb.background": gitHubColors.bgPrimary,
          "breadcrumb.foreground": gitHubColors.textSecondary,
          "breadcrumb.focusForeground": gitHubColors.textPrimary,
          "breadcrumb.activeSelectionForeground": gitHubColors.textPrimary,
          "breadcrumbPicker.background": gitHubColors.bgPrimary,

          // Editor
          "editor.background": gitHubColors.bgPrimary,
          "editor.foreground": gitHubColors.textPrimary,
          "editorLineNumber.foreground": gitHubColors.diffBlobNumText,
          "editorLineNumber.activeForeground":
            gitHubColors.diffBlobNumHoverText,
          "editorCursor.foreground": gitHubColors.textPrimary,
          "editor.lineHighlightBackground": gitHubColors.bgPrimary,
          "editor.lineHighlightBorder": gitHubColors.diffstatNeutralBorder,
          "editorIndentGuide.background": gitHubColors.diffstatNeutralBorder,
          "editorIndentGuide.activeBackground":
            gitHubColors.diffstatNeutralBorder,
          "editorRuler.foreground": gitHubColors.diffstatNeutralBorder,
        },
      },
      null,
      2
    ),
    { encoding: "utf-8" }
  );
}

main().catch((error) => {
  console.log(error);
});
