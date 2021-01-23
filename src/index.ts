import fs from "fs";
import { promisify } from "util";
import _flow from "lodash.flow";

import { multiplyTransparencyBy } from "./util";

import gitHubColors from "./github-colors";

const colorTextSelectionBg = "#153051";
const colorTextSelectionBorder = gitHubColors.codeSelectionBg;

function createTheme(prefix: string, colors: Record<string, string>) {
  return Object.entries(colors).reduce(
    (acc, [key, color]) => ({ ...acc, [`${prefix}.${key}`]: color }),
    {}
  );
}

// Common color flows
// ==================

const primaryBorderFlow = _flow([multiplyTransparencyBy(0.333)]);

// Workbench
// =========

// Title bar
// ---------

const titleBarTheme = createTheme("titleBar", {
  activeBackground: gitHubColors.bgBackdrop,
  activeForeground: gitHubColors.textPrimary,
  border: primaryBorderFlow(gitHubColors.borderPrimary),
  inactiveBackground: gitHubColors.bgBackdrop,
  inactiveForeground: gitHubColors.textSecondary,
});

// Activity bar
// ------------

const activityBarTheme = createTheme("activityBar", {
  activeBorder: gitHubColors.autoOrange6,
  activeFocusBorder: gitHubColors.autoOrange6,
  background: gitHubColors.bgBackdrop,
  border: primaryBorderFlow(gitHubColors.borderPrimary),
  dropBorder: primaryBorderFlow(gitHubColors.borderPrimary),
  foreground: gitHubColors.textPrimary,
  inactiveForeground: gitHubColors.autoGray4,
});

const activityBarBadgeTheme = createTheme("activityBarBadge", {
  background: gitHubColors.stateSelectedPrimaryBg,
  foreground: gitHubColors.stateSelectedPrimaryText,
});

// Side bar
// --------

const sideBarTheme = createTheme("sideBar", {
  background: gitHubColors.bgBackdrop,
  border: primaryBorderFlow(gitHubColors.borderPrimary),
  dropBackground: "#00000033",
  foreground: gitHubColors.textSecondary,
});

const sideBarTitleTheme = createTheme("sideBarTitle", {
  foreground: gitHubColors.textPrimary,
});

const sideBarSectionHeaderTheme = createTheme("sideBarSectionHeader", {
  background: gitHubColors.bgTertiary,
  foreground: gitHubColors.textSecondary,
});

// List
// ----

const listTheme = createTheme("list", {
  activeSelectionBackground: gitHubColors.bgInfo,
  activeSelectionForeground: gitHubColors.textPrimary,
  deemphasizedForeground: gitHubColors.textDisabled,
  dropBackground: "#00000033",
  errorForeground: gitHubColors.alertErrorText,
  filterMatchBackground: colorTextSelectionBg,
  filterMatchBorder: primaryBorderFlow(gitHubColors.borderPrimary),
  focusBackground: gitHubColors.bgInfo,
  focusForeground: gitHubColors.textPrimary,
  highlightForeground: gitHubColors.textPrimary,
  hoverBackground: gitHubColors.bgInfo,
  hoverForeground: gitHubColors.textPrimary,
  inactiveFocusBackground: gitHubColors.bgInfo,
  inactiveSelectionBackground: gitHubColors.bgInfo,
  inactiveSelectionForeground: gitHubColors.textPrimary,
  invalidItemForeground: gitHubColors.alertErrorText,
  warningForeground: gitHubColors.alertWarnText,
});

const listFilterWidgetTheme = createTheme("listFilterWidget", {
  background: gitHubColors.bgInfo,
  noMatchesOutline: primaryBorderFlow(gitHubColors.borderPrimary),
  outline: primaryBorderFlow(gitHubColors.borderPrimary),
});

const treeTheme = createTheme("tree", {
  indentGuidesStroke: primaryBorderFlow(gitHubColors.borderPrimary),
});

// Status bar
// ----------

const statusBarTheme = createTheme("statusBar", {
  background: gitHubColors.bgInfo,
  border: primaryBorderFlow(gitHubColors.borderPrimary),
  debuggingBackground: gitHubColors.bgInfo,
  debuggingBorder: primaryBorderFlow(gitHubColors.borderPrimary),
  debuggingForeground: gitHubColors.textPrimary,
  foreground: gitHubColors.textPrimary,
  noFolderBackground: gitHubColors.bgInfo,
  noFolderBorder: primaryBorderFlow(gitHubColors.borderPrimary),
  noFolderForeground: gitHubColors.textPrimary,
});

const statusBarItemTheme = createTheme("statusBarItem", {
  activeBackground: "#ffffff1a",
  errorBackground: gitHubColors.alertErrorBg,
  errorForeground: gitHubColors.alertErrorText,
  hoverBackground: "#ffffff1a",
  prominentBackground: "#00000000",
  prominentForeground: gitHubColors.textPrimary,
  prominentHoverBackground: "#00000000",
  remoteBackground: "#00000000",
  remoteForeground: gitHubColors.textPrimary,
});

// Terminal
// --------

const terminalTheme = createTheme("terminal", {
  ansiBlack: gitHubColors.ansiGray,
  ansiBlue: gitHubColors.ansiBlue,
  ansiBrightBlack: gitHubColors.ansiGray,
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

// Editor groups & tabs
// -------------------

const editorGroupTheme = createTheme("editorGroup", {
  border: primaryBorderFlow(gitHubColors.borderPrimary),
  dropBackground: "#00000066",
  emptyBackground: gitHubColors.bgPrimary,
  focusedEmptyBorder: primaryBorderFlow(gitHubColors.borderPrimary),
});

const editorGroupHeaderTheme = createTheme("editorGroupHeader", {
  border: primaryBorderFlow(gitHubColors.borderPrimary),
  noTabsBackground: gitHubColors.bgPrimary,
  tabsBackground: gitHubColors.bgPrimary,
  tabsBorder: primaryBorderFlow(gitHubColors.borderPrimary),
});

const tabTheme = createTheme("tab", {
  activeBackground: gitHubColors.bgTertiary,
  activeBorder: gitHubColors.autoOrange6,
  activeBorderTop: "#00000000",
  activeForeground: gitHubColors.textPrimary,
  activeModifiedBorder: "#00000000",
  border: "#00000000",
  hoverBackground: gitHubColors.bgTertiary,
  hoverBorder: "#00000000",
  hoverForeground: gitHubColors.textPrimary,
  inactiveBackground: gitHubColors.bgPrimary,
  inactiveForeground: gitHubColors.autoGray5,
  inactiveModifiedBorder: "#00000000",
  lastPinnedBorder: primaryBorderFlow(gitHubColors.borderPrimary),

  // These will default to the focused ones

  // unfocusedActiveBackground: "",
  // unfocusedActiveBorder: "",
  // unfocusedActiveBorderTop: "",
  // unfocusedActiveForeground: "",
  // unfocusedActiveModifiedBorder: "",
  // unfocusedHoverBackground: "",
  // unfocusedHoverBorder: "",
  // unfocusedHoverForeground: "",
  // unfocusedInactiveBackground: "",
  // unfocusedInactiveForeground: "",
  // unfocusedInactiveModifiedBorder: "",
});

// Minimap
// -------

const minimapTheme = createTheme("minimap", {
  background: gitHubColors.bgTertiary,
  errorHighlight: gitHubColors.alertErrorBorder,
  findMatchHighlight: gitHubColors.alertInfoBorder,
  selectionHighlight: gitHubColors.alertInfoBorder,
  warningHighlight: gitHubColors.alertWarnBorder,
});

const minimapSliderTheme = createTheme("minimapSlider", {
  activeBackground: "#ffffff18",
  background: "#ffffff10",
  hoverBackground: "#ffffff18",
});

const minimapGutterTheme = createTheme("minimapGutter", {
  addedBackground: gitHubColors.diffstatAdditionBg,
  deletedBackground: gitHubColors.diffstatDeletionBg,
  modifiedBackground: gitHubColors.diffstatNeutralBg,
});

// Buttons
// -------

const buttonTheme = createTheme("button", {
  background: gitHubColors.btnPrimaryBg,
  foreground: gitHubColors.btnText,
  hoverBackground: gitHubColors.btnPrimaryHoverBg,
  secondaryBackground: gitHubColors.btnBg,
  secondaryForeground: gitHubColors.btnText,
  secondaryHoverBackground: gitHubColors.btnHoverBg,
});

// Checkboxes
// ----------

const checkboxTheme = createTheme("checkbox", {
  background: gitHubColors.btnBg,
  border: gitHubColors.btnBorder,
  foreground: gitHubColors.btnText,
});

// Inputs
// ------

const inputTheme = createTheme("input", {
  background: gitHubColors.inputBg,
  border: gitHubColors.inputBorder,
  foreground: gitHubColors.textPrimary,
  placeholderForeground: gitHubColors.textPlaceholder,
});

const inputOptionTheme = createTheme("inputOption", {
  activeBackground: gitHubColors.boxBgInfo,
  activeBorder: gitHubColors.boxBorderInfo,
  activeForeground: gitHubColors.textPrimary,
});

const inputValidationTheme = createTheme("inputValidation", {
  errorBackground: gitHubColors.inputTooltipErrorBg,
  errorBorder: gitHubColors.inputTooltipErrorBorder,
  errorForeground: gitHubColors.inputTooltipErrorText,
  infoBackground: gitHubColors.inputBg,
  infoBorder: gitHubColors.inputBorder,
  infoForeground: gitHubColors.textPrimary,
  warningBackground: gitHubColors.inputTooltipWarningBg,
  warningBorder: gitHubColors.inputTooltipWarningBorder,
  warningForeground: gitHubColors.inputTooltipWarningText,
});

// Dropdowns
// ---------

const dropdownTheme = createTheme("dropdown", {
  background: gitHubColors.inputBg,
  border: gitHubColors.inputBorder,
  foreground: gitHubColors.textPrimary,
  listBackground: gitHubColors.inputBg,
});

// Panels
// ------

const panelTheme = createTheme("panel", {
  background: gitHubColors.bgPrimary,
  border: primaryBorderFlow(gitHubColors.borderPrimary),
  dropBorder: primaryBorderFlow(gitHubColors.borderPrimary),
});

const panelTitleTheme = createTheme("panelTitle", {
  activeBorder: gitHubColors.autoOrange6,
  activeForeground: gitHubColors.textPrimary,
  inactiveForeground: gitHubColors.textSecondary,
});

const panelInputTheme = createTheme("panelInput", {
  border: gitHubColors.inputBorder,
});

const panelSectionTheme = createTheme("panelSection", {
  border: primaryBorderFlow(gitHubColors.borderPrimary),
  dropBackground: "#00000033",
});

const panelSectionHeader = createTheme("panelSectionHeader", {
  background: gitHubColors.bgPrimary,
  border: primaryBorderFlow(gitHubColors.borderPrimary),
  foreground: gitHubColors.textPrimary,
});

// Breadcrumbs
// -----------

const breadcrumbTheme = createTheme("breadcrumb", {
  activeSelectionForeground: gitHubColors.textPrimary,
  background: gitHubColors.bgPrimary,
  focusForeground: gitHubColors.textPrimary,
  foreground: gitHubColors.textSecondary,
});

const breadcrumbPickerTheme = createTheme("breadcrumbPicker", {
  background: gitHubColors.bgTertiary,
});

// Text colors
// -----------

const textBlockQuoteTheme = createTheme("textBlockQuote", {
  background: gitHubColors.bgTertiary,
  border: primaryBorderFlow(gitHubColors.borderPrimary),
});

const textCodeBlockTheme = createTheme("textCodeBlock", {
  background: gitHubColors.bgTertiary,
});

const textLinkTheme = createTheme("textLink", {
  activeForeground: gitHubColors.textLink,
  foreground: gitHubColors.textLink,
});

const textPreformatTheme = createTheme("textPreformat", {
  foreground: gitHubColors.textPrimary,
});

const textSeparatorTheme = createTheme("textSeparator", {
  foreground: gitHubColors.textPrimary,
});

// Scrollbar
// ---------

const scrollbarTheme = createTheme("scrollbar", {
  shadow: "#00000000",
});

const scrollbarSliderTheme = createTheme("scrollbarSlider", {
  activeBackground: "#BEC7DA24",
  background: "#BEC7DA14",
  hoverBackground: "#BEC7DA24",
});

// Badges
// ------

const badgeTheme = createTheme("badge", {
  background: gitHubColors.counterBg,
  foreground: gitHubColors.counterText,
});

// Welcome page
// ------------

const welcomePageTheme = createTheme("welcomePage", {
  background: gitHubColors.bgPrimary,
  buttonBackground: gitHubColors.bgTertiary,
  buttonHoverBackground: gitHubColors.autoGray2,
});

const walkThroughTheme = createTheme("walkThrough", {
  embeddedEditorBackground: gitHubColors.bgBackdrop,
});

// Diff editor
// -----------

const diffEditorTheme = createTheme("diffEditor", {
  diagonalFill: gitHubColors.diffBlobEmptyBlockBg,
  insertedTextBackground: gitHubColors.diffBlobAdditionNumBg,
  removedTextBackground: gitHubColors.diffBlobDeletionNumBg,

  // border: "",
  // insertedTextBorder: "",
  // removedTextBorder: "",
});

// Merge conflict
// --------------

const mergeTheme = createTheme("merge", {
  border: primaryBorderFlow(gitHubColors.borderPrimary),
  commonContentBackground: gitHubColors.bgInfo,
  commonHeaderBackground: gitHubColors.bgTertiary,
  currentContentBackground: "#102D1D",
  currentHeaderBackground: "#104020",
  incomingContentBackground: "#0E1E41",
  incomingHeaderBackground: "#112A62",
});

const editorOverviewRulerMergeTheme = createTheme("editorOverviewRuler", {
  currentContentForeground: "#104020",
  incomingContentForeground: "#112A62",
  commonContentForeground: gitHubColors.bgInfo,
});

// Peek view
// ---------

const peekViewTheme = createTheme("peekView", {
  border: primaryBorderFlow(gitHubColors.borderPrimary),
});

const peekViewEditorTheme = createTheme("peekViewEditor", {
  background: gitHubColors.bgInfo,
  matchHighlightBackground: colorTextSelectionBg,
  matchHighlightBorder: colorTextSelectionBorder,
});

const peekViewEditorGutterTheme = createTheme("peekViewEditorGutter", {
  background: gitHubColors.bgInfo,
});

const peekViewResultTheme = createTheme("peekViewResult", {
  background: gitHubColors.bgInfo,
  fileForeground: gitHubColors.textPrimary,
  lineForeground: gitHubColors.textPrimary,
  matchHighlightBackground: "#153051",
  selectionBackground: "#153051",
  selectionForeground: gitHubColors.textPrimary,
});

const peekViewTitleTheme = createTheme("peekViewTitle", {
  background: gitHubColors.bgTertiary,
});

const peekViewTitleLabelTheme = createTheme("peekViewTitleLabel", {
  foreground: gitHubColors.textPrimary,
});

const peekViewTitleDescriptionTheme = createTheme("peekViewTitleDescription", {
  foreground: gitHubColors.textSecondary,
});

// Quick picker
// ------------

const pickerGroupTheme = createTheme("pickerGroup", {
  border: primaryBorderFlow(gitHubColors.borderPrimary),
  foreground: gitHubColors.textPrimary,
});

const quickInputTheme = createTheme("quickInput", {
  background: gitHubColors.bgTertiary,
  foreground: gitHubColors.textPrimary,
});

const quickInputTitleTheme = createTheme("quickInputTitle", {
  background: gitHubColors.bgTertiary,
});

// Editor
// ------

const editorTheme = createTheme("editor", {
  background: gitHubColors.bgPrimary,
  findMatchBackground: colorTextSelectionBg,
  findMatchBorder: colorTextSelectionBorder,
  findMatchHighlightBackground: colorTextSelectionBg,
  findMatchHighlightBorder: colorTextSelectionBorder,
  findRangeHighlightBackground: gitHubColors.bgInfo,
  foldBackground: gitHubColors.bgInfo,
  foreground: gitHubColors.textPrimary,
  hoverHighlightBackground: colorTextSelectionBg,
  inactiveSelectionBackground: colorTextSelectionBg,
  lineHighlightBackground: gitHubColors.bgInfo,
  lineHighlightBorder: primaryBorderFlow(gitHubColors.borderPrimary),
  rangeHighlightBackground: gitHubColors.bgInfo,
  selectionBackground: colorTextSelectionBg,
  selectionForeground: gitHubColors.textPrimary,
  selectionHighlightBackground: colorTextSelectionBg,
  symbolHighlightBackground: colorTextSelectionBg,
  symbolHighlightBorder: colorTextSelectionBorder,
  wordHighlightBackground: colorTextSelectionBg,
  wordHighlightStrongBackground: colorTextSelectionBg,

  // findRangeHighlightBorder: "",
  // linkedEditingBackground: "",
  // rangeHighlightBorder: "",
  // selectionHighlightBorder: "",
  // wordHighlightBorder: "",
  // wordHighlightStrongBorder: "",
});

const editorGutterTheme = createTheme("editorGutter", {
  addedBackground: gitHubColors.diffAdditionBorder,
  background: gitHubColors.bgPrimary,
  deletedBackground: gitHubColors.diffDeletionBorder,
  foldingControlForeground: gitHubColors.textSecondary,
  modifiedBackground: gitHubColors.diffChangeBorder,

  // commentRangeForeground: "",
});

const editorLineNumberTheme = createTheme("editorLineNumber", {
  activeForeground: gitHubColors.diffBlobNumHoverText,
  foreground: gitHubColors.diffBlobNumText,
});

const editorRulerTheme = createTheme("editorRuler", {
  foreground: gitHubColors.diffstatNeutralBorder,
});

const editorIndentGuideTheme = createTheme("editorIndentGuide", {
  background: gitHubColors.diffstatNeutralBorder,
  activeBackground: _flow([multiplyTransparencyBy(2)])(
    gitHubColors.diffstatNeutralBorder
  ),
});

const editorCursorTheme = createTheme("editorCursor", {
  background: colorTextSelectionBg,
  foreground: gitHubColors.textPrimary,
});

const searchEditorTheme = createTheme("searchEditor", {
  findMatchBackground: colorTextSelectionBg,
  findMatchBorder: colorTextSelectionBorder,

  // textInputBorder: "",
});

const editorLinkTheme = createTheme("editorLink", {
  activeForeground: gitHubColors.prettylightsSyntaxConstantOtherReferenceLink,
});

const editorWhitespaceTheme = createTheme("editorWhitespace", {
  foreground: gitHubColors.textDisabled,
});

const editorCodeLensTheme = createTheme("editorCodeLens", {
  foreground: gitHubColors.textDisabled,
});

const editorLightBulbTheme = createTheme("editorLightBulb", {
  foreground: gitHubColors.iconInfo,
});

const editorLightBulbAutoFixTheme = createTheme("editorLightBulbAutoFix", {
  foreground: gitHubColors.iconInfo,
});

const editorBracketMatchTheme = createTheme("editorBracketMatch", {
  background: colorTextSelectionBg,
  border: colorTextSelectionBorder,
});

const editorErrorTheme = createTheme("editorError", {
  foreground: gitHubColors.alertErrorText,

  // background: "",
  // border: "",
});

const editorWarningTheme = createTheme("editorWarning", {
  foreground: gitHubColors.alertWarnText,

  // background: "",
  // border: "",
});

const editorInfoTheme = createTheme("editorInfo", {
  foreground: gitHubColors.alertInfoText,

  // background: "",
  // border: "",
});

const editorHintTheme = createTheme("editorHint", {
  foreground: gitHubColors.textPrimary,

  // border: "",
});

const problemsErrorIconTheme = createTheme("problemsErrorIcon", {
  foreground: gitHubColors.alertErrorIcon,
});

const problemsWarningIconTheme = createTheme("problemsWarningIcon", {
  foreground: gitHubColors.alertWarnIcon,
});

const problemsInfoIconTheme = createTheme("problemsInfoIcon", {
  foreground: gitHubColors.alertInfoIcon,
});

const editorOverviewRulerTheme = createTheme("editorOverviewRuler", {
  background: gitHubColors.bgTertiary,
  border: primaryBorderFlow(gitHubColors.borderPrimary),

  addedForeground: gitHubColors.diffAdditionBorder,
  deletedForeground: gitHubColors.diffDeletionBorder,
  modifiedForeground: gitHubColors.diffChangeBorder,

  errorForeground: "#703132", // gitHubColors.alertErrorBorder
  infoForeground: "#24487A", // gitHubColors.alertInfoBorder
  warningForeground: "#584318", // gitHubColors.alertWarnBorder

  findMatchForeground: colorTextSelectionBorder,
  bracketMatchForeground: colorTextSelectionBorder,
  rangeHighlightForeground: colorTextSelectionBorder,
  selectionHighlightForeground: colorTextSelectionBorder,
  wordHighlightForeground: colorTextSelectionBorder,
  wordHighlightStrongForeground: colorTextSelectionBorder,
});

const editorWidgetTheme = createTheme("editorWidget", {
  background: gitHubColors.bgTertiary,
  border: primaryBorderFlow(gitHubColors.borderPrimary),
  foreground: gitHubColors.textPrimary,
  resizeBorder: primaryBorderFlow(gitHubColors.borderPrimary),
});

const editorSuggestWidgetTheme = createTheme("editorSuggestWidget", {
  highlightForeground: gitHubColors.textPrimary,
  selectedBackground: gitHubColors.bgInfo,

  // background: "",
  // border: "",
  // foreground: "",
});

const editorHoverWidgetTheme = createTheme("editorHoverWidget", {
  statusBarBackground: gitHubColors.bgInfo,

  // background: "",
  // border: "",
  // foreground: "",
});

const editorMarkerNavigationTheme = createTheme("editorMarkerNavigation", {
  background: gitHubColors.bgTertiary,
});

const editorMarkerNavigationErrorTheme = createTheme(
  "editorMarkerNavigationError",
  {
    background: gitHubColors.alertErrorBorder,
  }
);

const editorMarkerNavigationWarningTheme = createTheme(
  "editorMarkerNavigationWarning",
  {
    background: gitHubColors.alertWarnBorder,
  }
);

const editorMarkerNavigationInfoTheme = createTheme(
  "editorMarkerNavigationInfo",
  {
    background: gitHubColors.alertInfoBorder,
  }
);

//
// ---
//

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
        semanticHighlighting: false,
        colors: {
          foreground: gitHubColors.textPrimary,
          focusBorder: gitHubColors.stateFocusBorder,
          errorForeground: gitHubColors.alertErrorText,
          descriptionForeground: gitHubColors.textSecondary,

          "icon.foreground": gitHubColors.iconPrimary,
          "sash.hoverBorder": gitHubColors.borderInfo,
          "widget.shadow": "#00000000",

          // FIXME: This seems to be rendered somewhat weirdly. The color is set correctly
          // in terms of CSS but the rendered color does not match the color set here...
          "selection.background": "#79a3d6",

          ...activityBarBadgeTheme,
          ...activityBarTheme,
          ...badgeTheme,
          ...breadcrumbPickerTheme,
          ...breadcrumbTheme,
          ...buttonTheme,
          ...checkboxTheme,
          ...diffEditorTheme,
          ...dropdownTheme,
          ...editorBracketMatchTheme,
          ...editorCodeLensTheme,
          ...editorCursorTheme,
          ...editorErrorTheme,
          ...editorGroupHeaderTheme,
          ...editorGroupTheme,
          ...editorGutterTheme,
          ...editorHintTheme,
          ...editorHoverWidgetTheme,
          ...editorIndentGuideTheme,
          ...editorInfoTheme,
          ...editorLightBulbAutoFixTheme,
          ...editorLightBulbTheme,
          ...editorLineNumberTheme,
          ...editorLinkTheme,
          ...editorMarkerNavigationErrorTheme,
          ...editorMarkerNavigationInfoTheme,
          ...editorMarkerNavigationTheme,
          ...editorMarkerNavigationWarningTheme,
          ...editorOverviewRulerMergeTheme,
          ...editorOverviewRulerTheme,
          ...editorRulerTheme,
          ...editorSuggestWidgetTheme,
          ...editorTheme,
          ...editorWarningTheme,
          ...editorWhitespaceTheme,
          ...editorWidgetTheme,
          ...inputOptionTheme,
          ...inputTheme,
          ...inputValidationTheme,
          ...listFilterWidgetTheme,
          ...listTheme,
          ...mergeTheme,
          ...minimapGutterTheme,
          ...minimapSliderTheme,
          ...minimapTheme,
          ...panelInputTheme,
          ...panelSectionHeader,
          ...panelSectionTheme,
          ...panelTheme,
          ...panelTitleTheme,
          ...peekViewEditorGutterTheme,
          ...peekViewEditorTheme,
          ...peekViewResultTheme,
          ...peekViewTheme,
          ...peekViewTitleDescriptionTheme,
          ...peekViewTitleLabelTheme,
          ...peekViewTitleTheme,
          ...pickerGroupTheme,
          ...problemsErrorIconTheme,
          ...problemsInfoIconTheme,
          ...problemsWarningIconTheme,
          ...quickInputTheme,
          ...quickInputTitleTheme,
          ...scrollbarSliderTheme,
          ...scrollbarTheme,
          ...searchEditorTheme,
          ...sideBarSectionHeaderTheme,
          ...sideBarTheme,
          ...sideBarTitleTheme,
          ...statusBarItemTheme,
          ...statusBarTheme,
          ...tabTheme,
          ...terminalTheme,
          ...textBlockQuoteTheme,
          ...textCodeBlockTheme,
          ...textLinkTheme,
          ...textPreformatTheme,
          ...textSeparatorTheme,
          ...titleBarTheme,
          ...treeTheme,
          ...walkThroughTheme,
          ...welcomePageTheme,
        },
        tokenColors: [
          {
            scope: [
              "comment",
              "punctuation.definition.comment",
              "string.comment",
            ],
            settings: {
              foreground: gitHubColors.prettylightsSyntaxComment,
            },
          },
          {
            scope: ["variable.other.constant", "entity.name.type"],
            settings: {
              foreground: gitHubColors.prettylightsSyntaxStorageModifierImport,
            },
          },
          {
            scope: [
              "constant",
              "entity.name.constant",
              "variable.language",
              "variable.other.object.property",
            ],
            settings: {
              foreground: gitHubColors.prettylightsSyntaxConstant,
            },
          },
          {
            scope: ["meta.object.member", "variable.other.property"],
            settings: {
              foreground: gitHubColors.prettylightsSyntaxConstant,
            },
          },
          {
            scope: ["meta.brace", "meta.objectliteral"],
            settings: {
              foreground: gitHubColors.textPrimary,
            },
          },
          {
            scope: ["entity", "entity.name"],
            settings: {
              foreground: gitHubColors.prettylightsSyntaxEntity,
            },
          },
          {
            scope: "variable.parameter",
            settings: {
              foreground: gitHubColors.textPrimary,
            },
          },
          {
            scope: "entity.name.tag",
            settings: {
              foreground: gitHubColors.prettylightsSyntaxEntityTag,
            },
          },
          {
            scope: "keyword",
            settings: {
              foreground: gitHubColors.prettylightsSyntaxKeyword,
            },
          },
          {
            scope: "keyword.operator.assignment",
            settings: {
              foreground: gitHubColors.prettylightsSyntaxConstant,
            },
          },
          {
            scope: "keyword.operator.type",
            settings: {
              foreground: gitHubColors.textPrimary,
            },
          },
          {
            scope: ["storage", "storage.type"],
            settings: {
              foreground: gitHubColors.prettylightsSyntaxKeyword,
            },
          },
          {
            scope: [
              "storage.modifier.package",
              "storage.modifier.import",
              "storage.type.java",
            ],
            settings: {
              foreground: gitHubColors.textPrimary,
            },
          },
          {
            scope: [
              "string",
              "punctuation.definition.string",
              "string punctuation.section.embedded source",
            ],
            settings: {
              foreground: gitHubColors.prettylightsSyntaxString,
            },
          },
          {
            scope: ["punctuation.definition.template-expression"],
            settings: {
              foreground: gitHubColors.textPrimary,
            },
          },
          {
            scope: "support",
            settings: {
              foreground: gitHubColors.prettylightsSyntaxConstant,
            },
          },
          {
            scope: "support.type",
            settings: {
              foreground: gitHubColors.prettylightsSyntaxKeyword,
            },
          },
          {
            scope: "meta.property-name",
            settings: {
              foreground: gitHubColors.prettylightsSyntaxConstant,
            },
          },
          {
            scope: "variable",
            settings: {
              foreground: gitHubColors.prettylightsSyntaxVariable,
            },
          },
          {
            scope: "variable.other",
            settings: {
              foreground: gitHubColors.textPrimary,
            },
          },
          {
            scope: "invalid.broken",
            settings: {
              fontStyle: "italic",
              background: gitHubColors.prettylightsSyntaxInvalidIllegalBg,
              foreground: gitHubColors.prettylightsSyntaxInvalidIllegalText,
            },
          },
          {
            scope: "invalid.deprecated",
            settings: {
              fontStyle: "italic",
              background: gitHubColors.prettylightsSyntaxInvalidIllegalBg,
              foreground: gitHubColors.prettylightsSyntaxInvalidIllegalText,
            },
          },
          {
            scope: "invalid.illegal",
            settings: {
              fontStyle: "italic",
              background: gitHubColors.prettylightsSyntaxInvalidIllegalBg,
              foreground: gitHubColors.prettylightsSyntaxInvalidIllegalText,
            },
          },
          {
            scope: "invalid.unimplemented",
            settings: {
              fontStyle: "italic",
              background: gitHubColors.prettylightsSyntaxInvalidIllegalBg,
              foreground: gitHubColors.prettylightsSyntaxInvalidIllegalText,
            },
          },
          {
            scope: "carriage-return",
            settings: {
              fontStyle: "italic underline",
              background: gitHubColors.prettylightsSyntaxCarriageReturnBg,
              foreground: gitHubColors.prettylightsSyntaxCarriageReturnText,
              content: "^M",
            },
          },
          {
            scope: "message.error",
            settings: {
              foreground: gitHubColors.alertErrorText,
            },
          },
          {
            scope: "string source",
            settings: {
              foreground: gitHubColors.textPrimary,
            },
          },
          {
            scope: "string variable",
            settings: {
              foreground: gitHubColors.prettylightsSyntaxConstant,
            },
          },
          {
            scope: ["source.regexp", "string.regexp"],
            settings: {
              foreground: gitHubColors.prettylightsSyntaxString,
            },
          },
          {
            scope: [
              "string.regexp.character-class",
              "string.regexp constant.character.escape",
              "string.regexp source.ruby.embedded",
              "string.regexp string.regexp.arbitrary-repitition",
            ],
            settings: {
              foreground: gitHubColors.prettylightsSyntaxString,
            },
          },
          {
            scope: "string.regexp constant.character.escape",
            settings: {
              fontStyle: "bold",
              foreground: gitHubColors.prettylightsSyntaxEntityTag,
            },
          },
          {
            scope: "support.constant",
            settings: {
              foreground: gitHubColors.prettylightsSyntaxConstant,
            },
          },
          {
            scope: "support.variable",
            settings: {
              foreground: gitHubColors.prettylightsSyntaxConstant,
            },
          },
          {
            scope: "meta.module-reference",
            settings: {
              foreground: gitHubColors.prettylightsSyntaxConstant,
            },
          },
          {
            scope: "punctuation.definition.list.begin.markdown",
            settings: {
              foreground: gitHubColors.prettylightsSyntaxVariable,
            },
          },
          {
            scope: ["markup.heading", "markup.heading entity.name"],
            settings: {
              fontStyle: "bold",
              foreground: gitHubColors.prettylightsSyntaxConstant,
            },
          },
          {
            scope: "markup.quote",
            settings: {
              foreground: gitHubColors.prettylightsSyntaxEntityTag,
            },
          },
          {
            scope: "markup.italic",
            settings: {
              fontStyle: "italic",
              foreground: gitHubColors.textPrimary,
            },
          },
          {
            scope: "markup.bold",
            settings: {
              fontStyle: "bold",
              foreground: gitHubColors.textPrimary,
            },
          },
          {
            scope: "markup.raw",
            settings: {
              foreground: gitHubColors.prettylightsSyntaxConstant,
            },
          },
          {
            scope: [
              "markup.deleted",
              "meta.diff.header.from-file",
              "punctuation.definition.deleted",
            ],
            settings: {
              background: gitHubColors.prettylightsSyntaxMarkupDeletedBg,
              foreground: gitHubColors.prettylightsSyntaxMarkupDeletedText,
            },
          },
          {
            scope: [
              "markup.inserted",
              "meta.diff.header.to-file",
              "punctuation.definition.inserted",
            ],
            settings: {
              background: gitHubColors.prettylightsSyntaxMarkupInsertedBg,
              foreground: gitHubColors.prettylightsSyntaxMarkupInsertedText,
            },
          },
          {
            scope: ["markup.changed", "punctuation.definition.changed"],
            settings: {
              background: gitHubColors.prettylightsSyntaxMarkupChangedBg,
              foreground: gitHubColors.prettylightsSyntaxMarkupChangedText,
            },
          },
          {
            scope: ["markup.ignored", "markup.untracked"],
            settings: {
              foreground: gitHubColors.prettylightsSyntaxMarkupIgnoredText,
              background: gitHubColors.prettylightsSyntaxMarkupIgnoredBg,
            },
          },
          {
            scope: "meta.diff.range",
            settings: {
              foreground: gitHubColors.prettylightsSyntaxEntity,
              fontStyle: "bold",
            },
          },
          {
            scope: "meta.diff.header",
            settings: {
              foreground: gitHubColors.prettylightsSyntaxConstant,
            },
          },
          {
            scope: "meta.separator",
            settings: {
              fontStyle: "bold",
              foreground: gitHubColors.prettylightsSyntaxConstant,
            },
          },
          {
            scope: "meta.output",
            settings: {
              foreground: gitHubColors.prettylightsSyntaxConstant,
            },
          },
          {
            scope: [
              "brackethighlighter.tag",
              "brackethighlighter.curly",
              "brackethighlighter.round",
              "brackethighlighter.square",
              "brackethighlighter.angle",
              "brackethighlighter.quote",
            ],
            settings: {
              foreground:
                gitHubColors.prettylightsSyntaxBrackethighlighterAngle,
            },
          },
          {
            scope: "brackethighlighter.unmatched",
            settings: {
              foreground:
                gitHubColors.prettylightsSyntaxBrackethighlighterUnmatched,
            },
          },
          {
            scope: ["constant.other.reference.link", "string.other.link"],
            settings: {
              foreground: gitHubColors.prettylightsSyntaxString,
              fontStyle: "underline",
            },
          },
        ],
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
