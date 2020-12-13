import fs from "fs";
import { promisify } from "util";
import _flow from "lodash.flow";

import { multiplyTransparencyBy } from "./util";

import gitHubColors from "./github-colors";

function createTheme(prefix: string, colors: Record<string, string>) {
  return Object.entries(colors).reduce(
    (acc, [key, color]) => ({ ...acc, [`${prefix}.${key}`]: color }),
    {}
  );
}

// Common color flows
// ==================

const primaryBorderFlow = _flow([multiplyTransparencyBy(0.8)]);

// Workbench
// =========

const titleBarTheme = createTheme("titleBar", {
  activeBackground: gitHubColors.bgTertiary,
  activeForeground: gitHubColors.textPrimary,
  inactiveBackground: gitHubColors.bgTertiary,
  inactiveForeground: gitHubColors.textSecondary,
  border: primaryBorderFlow(gitHubColors.borderPrimary),
});

const activityBarTheme = createTheme("activityBar", {
  background: gitHubColors.bgTertiary,
  foreground: gitHubColors.textPrimary,
  inactiveForeground: gitHubColors.textSecondary,
  border: primaryBorderFlow(gitHubColors.borderPrimary),
  activeBorder: gitHubColors.autoOrange6,
  activeFocusBorder: gitHubColors.autoOrange6,
});

const activityBarBadgeTheme = createTheme("activityBarBadge", {
  background: gitHubColors.btnPrimaryBg,
  foreground: gitHubColors.textPrimary,
});

const statusBarTheme = createTheme("statusBar", {
  background: gitHubColors.bgInfo,
  foreground: gitHubColors.textPrimary,
  border: primaryBorderFlow(gitHubColors.borderPrimary),
});

const sideBarTheme = createTheme("sideBar", {
  background: gitHubColors.bgTertiary,
  foreground: gitHubColors.textPrimary,
  border: primaryBorderFlow(gitHubColors.borderPrimary),
});

const sideBarTitleTheme = createTheme("sideBarTitle", {
  foreground: gitHubColors.textPrimary,
});

const sideBarSectionHeaderTheme = createTheme("sideBarSectionHeader", {
  background: gitHubColors.bgTertiary,
  foreground: gitHubColors.textPrimary,
});

const listTheme = createTheme("list", {
  activeSelectionBackground: gitHubColors.bgInfo,
  activeSelectionForeground: gitHubColors.textPrimary,
  hoverBackground: gitHubColors.bgInfo,
  inactiveSelectionBackground: gitHubColors.bgInfo,
  inactiveSelectionForeground: gitHubColors.textPrimary,
  errorForeground: gitHubColors.alertErrorText,
  warningForeground: gitHubColors.alertWarnText,
  filterMatchBackground: "#fff0",
  filterMatchBorder: gitHubColors.alertInfoBorder,
  deemphasizedForeground: gitHubColors.textSecondary,
});

const listFilterWidgetTheme = createTheme("listFilterWidget", {
  background: gitHubColors.bgInfo,
  outline: primaryBorderFlow(gitHubColors.borderPrimary),
  noMatchesOutline: primaryBorderFlow(gitHubColors.borderPrimary),
});

const treeTheme = createTheme("tree", {
  indentGuidesStroke: primaryBorderFlow(gitHubColors.borderPrimary),
});

const editorGroupTheme = createTheme("editorGroup", {
  emptyBackground: gitHubColors.bgPrimary,
  border: primaryBorderFlow(gitHubColors.borderPrimary),
});

const editorGroupHeaderTheme = createTheme("editorGroupHeader", {
  noTabsBackground: gitHubColors.bgPrimary,
  tabsBackground: gitHubColors.bgPrimary,
  tabsBorder: primaryBorderFlow(gitHubColors.borderPrimary),
  border: primaryBorderFlow(gitHubColors.borderPrimary),
});

const tabTheme = createTheme("tab", {
  activeBackground: gitHubColors.bgTertiary,
  activeForeground: gitHubColors.textPrimary,
  activeBorder: gitHubColors.autoOrange6,
  inactiveBackground: gitHubColors.bgPrimary,
  inactiveForeground: gitHubColors.textSecondary,
  hoverBackground: gitHubColors.bgTertiary,
  hoverForeground: gitHubColors.textPrimary,
});

const terminalTheme = createTheme("terminal", {
  ansiBlack: gitHubColors.ansiBlack,
  ansiBlue: gitHubColors.ansiBlue,
  ansiBrightBlack: gitHubColors.ansiBlackBright,
  ansiBrightBlue: gitHubColors.ansiBlueBright,
  ansiBrightCyan: gitHubColors.ansiCyanBright,
  ansiBrightGreen: gitHubColors.ansiGreenBright,
  ansiBrightMagenta: gitHubColors.ansiMagentaBright,
  ansiBrightRed: gitHubColors.ansiRedBright,
  ansiBrightWhite: gitHubColors.ansiWhiteBright,
  ansiBrightYellow: gitHubColors.ansiYellowBright,
  ansiCyan: gitHubColors.ansiCyan,
  ansiGreen: gitHubColors.ansiGreen,
  ansiMagenta: gitHubColors.ansiMagenta,
  ansiRed: gitHubColors.ansiRed,
  ansiWhite: gitHubColors.ansiWhite,
  ansiYellow: gitHubColors.ansiYellow,
});

const editorTheme = createTheme("editor", {
  background: gitHubColors.bgPrimary,
  foreground: gitHubColors.textPrimary,

  selectionBackground: gitHubColors.codeSelectionBg,
  inactiveSelectionBackground: gitHubColors.codeSelectionBg,
  selectionHighlightBackground: _flow([multiplyTransparencyBy(0.5)])(
    gitHubColors.codeSelectionBg
  ),
  selectionHighlightBorder: primaryBorderFlow(gitHubColors.borderPrimary),

  wordHighlightBackground: _flow([multiplyTransparencyBy(0.5)])(
    gitHubColors.codeSelectionBg
  ),
  wordHighlightBorder: primaryBorderFlow(gitHubColors.borderPrimary),
  wordHighlightStrongBackground: _flow([multiplyTransparencyBy(0.5)])(
    gitHubColors.codeSelectionBg
  ),
  wordHighlightStrongBorder: primaryBorderFlow(gitHubColors.borderPrimary),

  findMatchBackground: gitHubColors.codeSelectionBg,
  findMatchHighlightBackground: _flow([multiplyTransparencyBy(0.5)])(
    gitHubColors.codeSelectionBg
  ),
  findRangeHighlightBackground: _flow([multiplyTransparencyBy(0.5)])(
    gitHubColors.codeSelectionBg
  ),
  findMatchHighlightBorder: primaryBorderFlow(gitHubColors.borderPrimary),
  findRangeHighlightBorder: primaryBorderFlow(gitHubColors.borderPrimary),

  hoverHighlightBackground: gitHubColors.bgTertiary,

  lineHighlightBackground: gitHubColors.bgInfo,
  lineHighlightBorder: _flow([multiplyTransparencyBy(0.1)])(
    gitHubColors.autoBlue9
  ),
});

const editorGutterTheme = createTheme("editorGutter", {
  modifiedBackground: gitHubColors.diffstatNeutralBg,
  addedBackground: gitHubColors.diffstatAdditionBg,
  deletedBackground: gitHubColors.diffstatDeletionBg,
  foldingControlForeground: gitHubColors.textPrimary,
});

const editorLineNumberTheme = createTheme("editorLineNumber", {
  foreground: gitHubColors.diffBlobNumText,
  activeForeground: gitHubColors.diffBlobNumHoverText,
});

const editorIndentGuideTheme = createTheme("editorIndentGuide", {
  background: gitHubColors.diffstatNeutralBorder,
  activeBackground: gitHubColors.diffstatNeutralBorder,
});

const editorCursorTheme = createTheme("editorCursor", {
  background: gitHubColors.bgInfo,
  foreground: gitHubColors.textPrimary,
});

const editorRulerTheme = createTheme("editorRuler", {
  foreground: gitHubColors.diffstatNeutralBorder,
});

const editorOverviewRulerTheme = createTheme("editorOverviewRuler", {
  background: gitHubColors.bgTertiary,
  border: primaryBorderFlow(gitHubColors.borderPrimary),
  rangeHighlightForeground: gitHubColors.codeSelectionBg,
  selectionHighlightForeground: gitHubColors.codeSelectionBg,
  wordHighlightForeground: gitHubColors.codeSelectionBg,
  wordHighlightStrongForeground: gitHubColors.codeSelectionBg,
  modifiedForeground: gitHubColors.diffstatNeutralBg,
  addedForeground: gitHubColors.diffstatAdditionBg,
  deletedForeground: gitHubColors.diffstatDeletionBg,
  errorForeground: gitHubColors.alertErrorBg,
  warningForeground: gitHubColors.alertWarnBg,
  infoForeground: gitHubColors.alertInfoBg,
  bracketMatchForeground: gitHubColors.codeSelectionBg,
});

const diffEditorTheme = createTheme("diffEditor", {
  insertedTextBackground: gitHubColors.diffBlobAdditionNumBg,
  removedTextBackground: gitHubColors.diffBlobDeletionNumBg,
  diagonalFill: gitHubColors.diffBlobEmptyBlockBg,
});

const editorWidgetTheme = createTheme("editorWidget", {
  background: gitHubColors.bgTertiary,
  foreground: gitHubColors.textPrimary,
  border: primaryBorderFlow(gitHubColors.borderPrimary),
  resizeBorder: primaryBorderFlow(gitHubColors.borderPrimary),
});

const editorSuggestWidgetTheme = createTheme("editorSuggestWidget", {
  highlightForeground: gitHubColors.textPrimary,
  selectedBackground: gitHubColors.bgInfo,
});

const peekViewTheme = createTheme("peekView", {
  border: primaryBorderFlow(gitHubColors.borderPrimary),
});

const peekViewEditorTheme = createTheme("peekViewEditor", {
  background: gitHubColors.bgTertiary,
  matchHighlightBackground: gitHubColors.codeSelectionBg,
});

const peekViewEditorGutterTheme = createTheme("peekViewEditorGutter", {
  background: gitHubColors.bgTertiary,
});

const peekViewResultTheme = createTheme("peekViewResult", {
  background: gitHubColors.bgTertiary,
  fileForeground: gitHubColors.textPrimary,
  lineForeground: gitHubColors.textPrimary,
  matchHighlightBackground: gitHubColors.codeSelectionBg,
  selectionBackground: gitHubColors.codeSelectionBg,
  selectionForeground: gitHubColors.textPrimary,
});

const peekViewTitleTheme = createTheme("peekViewTitle", {
  background: gitHubColors.bgInfo,
});

const peekViewTitleLabelTheme = createTheme("peekViewTitleLabel", {
  foreground: gitHubColors.textSecondary,
});

const peekViewTitleDescriptionTheme = createTheme("peekViewTitleDescription", {
  foreground: gitHubColors.textPrimary,
});

// Theme file
// ==========

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
          ...titleBarTheme,
          ...activityBarTheme,
          ...activityBarBadgeTheme,
          ...statusBarTheme,
          ...sideBarTheme,
          ...sideBarTitleTheme,
          ...sideBarSectionHeaderTheme,
          ...listTheme,
          ...listFilterWidgetTheme,
          ...treeTheme,
          ...editorGroupTheme,
          ...editorGroupHeaderTheme,
          ...tabTheme,
          ...terminalTheme,
          ...editorTheme,
          ...editorGutterTheme,
          ...editorLineNumberTheme,
          ...editorIndentGuideTheme,
          ...editorCursorTheme,
          ...editorRulerTheme,
          ...editorOverviewRulerTheme,
          ...diffEditorTheme,
          ...editorWidgetTheme,
          ...editorSuggestWidgetTheme,
          ...peekViewTheme,
          ...peekViewEditorTheme,
          ...peekViewEditorGutterTheme,
          ...peekViewResultTheme,
          ...peekViewTitleTheme,
          ...peekViewTitleLabelTheme,
          ...peekViewTitleDescriptionTheme,

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

          // Panel
          "panel.background": gitHubColors.bgPrimary,
          "panel.border": gitHubColors.borderPrimary,
          "panelSection.border": gitHubColors.borderPrimary,
          "panelTitle.activeBorder": gitHubColors.autoOrange5,
          "panelTitle.activeForeground": gitHubColors.textPrimary,
          "panelTitle.inactiveForeground": gitHubColors.textSecondary,

          // Breadcrumb
          "breadcrumb.background": gitHubColors.bgPrimary,
          "breadcrumb.foreground": gitHubColors.textSecondary,
          "breadcrumb.focusForeground": gitHubColors.textPrimary,
          "breadcrumb.activeSelectionForeground": gitHubColors.textPrimary,
          "breadcrumbPicker.background": gitHubColors.bgPrimary,
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
