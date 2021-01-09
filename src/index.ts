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

const primaryBorderFlow = _flow([multiplyTransparencyBy(0.8)]);

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
  foreground: gitHubColors.textPrimary,
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
  deemphasizedForeground: gitHubColors.textSecondary,
  dropBackground: "#00000033",
  errorForeground: gitHubColors.alertErrorText,
  filterMatchBackground: gitHubColors.codeSelectionBg,
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
  matchHighlightBackground: "#153051",
  matchHighlightBorder: gitHubColors.codeSelectionBg,
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

// Editor
// ------

const editorTheme = createTheme("editor", {
  background: gitHubColors.bgPrimary,
  findMatchBackground: colorTextSelectionBg,
  findMatchBorder: gitHubColors.codeSelectionBg,
  findMatchHighlightBackground: colorTextSelectionBg,
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

  // findMatchHighlightBorder: "",
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
  foldingControlForeground: gitHubColors.textTertiary,
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
        semanticHighlighting: true,
        colors: {
          // Base colors
          // -----------

          descriptionForeground: gitHubColors.textSecondary,
          errorForeground: gitHubColors.alertErrorText,
          focusBorder: gitHubColors.stateFocusBorder,
          foreground: gitHubColors.textPrimary,

          "icon.foreground": gitHubColors.iconPrimary,
          "sash.hoverBorder": gitHubColors.borderInfo,
          "selection.background": gitHubColors.codeSelectionBg,
          "widget.shadow": "#00000000",

          ...activityBarBadgeTheme,
          ...activityBarTheme,
          ...badgeTheme,
          ...breadcrumbPickerTheme,
          ...breadcrumbTheme,
          ...buttonTheme,
          ...checkboxTheme,
          ...dropdownTheme,
          ...editorGroupHeaderTheme,
          ...editorGroupTheme,
          ...inputOptionTheme,
          ...inputTheme,
          ...inputValidationTheme,
          ...listFilterWidgetTheme,
          ...listTheme,
          ...minimapGutterTheme,
          ...minimapSliderTheme,
          ...minimapTheme,
          ...panelInputTheme,
          ...panelSectionHeader,
          ...panelSectionTheme,
          ...panelTheme,
          ...panelTitleTheme,
          ...scrollbarSliderTheme,
          ...scrollbarTheme,
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
          ...diffEditorTheme,
          ...mergeTheme,
          ...editorOverviewRulerMergeTheme,
          ...peekViewEditorGutterTheme,
          ...peekViewEditorTheme,
          ...peekViewResultTheme,
          ...peekViewTheme,
          ...peekViewTitleDescriptionTheme,
          ...peekViewTitleLabelTheme,
          ...peekViewTitleTheme,
          ...editorHoverWidgetTheme,
          ...editorMarkerNavigationTheme,
          ...editorMarkerNavigationErrorTheme,
          ...editorMarkerNavigationWarningTheme,
          ...editorMarkerNavigationInfoTheme,

          "pickerGroup.border": primaryBorderFlow(gitHubColors.borderPrimary),
          "pickerGroup.foreground": gitHubColors.textPrimary,
          "quickInput.background": gitHubColors.bgTertiary,
          "quickInput.foreground": gitHubColors.textPrimary,
          "quickInputTitle.background": "",

          ...editorCursorTheme,
          ...editorGutterTheme,
          ...editorIndentGuideTheme,
          ...editorLineNumberTheme,
          ...editorOverviewRulerTheme,
          ...editorRulerTheme,
          ...editorSuggestWidgetTheme,
          ...editorTheme,
          ...editorWidgetTheme,
        },
        tokenColors: [
          {
            name: "Comment",
            scope: ["comment", "punctuation.definition.comment"],
            settings: {
              foreground: gitHubColors.prettylightsSyntaxComment,
            },
          },
          {
            name: "Variables",
            scope: ["variable", "string constant.other.placeholder"],
            settings: {
              foreground: gitHubColors.textPrimary,
            },
          },
          {
            name: "Colors",
            scope: ["constant.other.color"],
            settings: {
              foreground: gitHubColors.prettylightsSyntaxConstant,
            },
          },
          {
            name: "Invalid",
            scope: ["invalid", "invalid.illegal"],
            settings: {
              foreground: "#FF5370",
            },
          },
          {
            name: "Keyword, Storage",
            scope: ["keyword", "storage.type", "storage.modifier"],
            settings: {
              foreground: gitHubColors.prettylightsSyntaxKeyword,
            },
          },
          {
            name: "Operator, Misc",
            scope: [
              "keyword.control",
              "constant.other.color",
              "meta.tag",
              "punctuation.definition.tag",
              "punctuation.separator.inheritance.php",
              "punctuation.definition.tag.html",
              "punctuation.definition.tag.begin.html",
              "punctuation.definition.tag.end.html",
              "punctuation.section.embedded",
              "keyword.other.template",
              "keyword.other.substitution",
            ],
            settings: {
              foreground: gitHubColors.prettylightsSyntaxKeyword,
            },
          },
          {
            name: "Punctuation",
            scope: ["punctuation"],
            settings: {
              foreground: gitHubColors.prettylightsSyntaxString,
            },
          },
          {
            name: "Tag",
            scope: [
              "entity.name.tag",
              "meta.tag.sgml",
              "markup.deleted.git_gutter",
            ],
            settings: {
              foreground: "#f07178",
            },
          },
          {
            name: "Function, Special Method",
            scope: [
              "entity.name.function",
              "meta.function-call",
              "variable.function",
              "support.function",
              "keyword.other.special-method",
            ],
            settings: {
              foreground: gitHubColors.prettylightsSyntaxEntity,
            },
          },
          {
            name: "Block Level Variables",
            scope: ["meta.block variable.other"],
            settings: {
              foreground: "#f07178",
            },
          },
          {
            name: "Other Variable, String Link",
            scope: ["support.other.variable", "string.other.link"],
            settings: {
              foreground: "#f07178",
            },
          },
          {
            name:
              "Number, Constant, Function Argument, Tag Attribute, Embedded",
            scope: [
              "constant.numeric",
              "constant.language",
              "support.constant",
              "constant.character",
              "constant.escape",
              "variable.parameter",
              "keyword.other.unit",
              "keyword.other",
            ],
            settings: {
              foreground: gitHubColors.prettylightsSyntaxConstant,
            },
          },
          {
            name: "String, Symbols, Inherited Class, Markup Heading",
            scope: [
              "string",
              "constant.other.symbol",
              "constant.other.key",
              "entity.other.inherited-class",
              "markup.heading",
              "markup.inserted.git_gutter",
              "meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js",
            ],
            settings: {
              foreground: gitHubColors.prettylightsSyntaxString,
            },
          },
          {
            name: "Class, Support",
            scope: [
              "entity.name",
              "support.type",
              "support.class",
              "support.orther.namespace.use.php",
              "meta.use.php",
              "support.other.namespace.php",
              "markup.changed.git_gutter",
              "support.type.sys-types",
            ],
            settings: {
              foreground: gitHubColors.prettylightsSyntaxVariable,
            },
          },
          {
            name: "Entity Types",
            scope: ["support.type"],
            settings: {
              foreground: "#B2CCD6",
            },
          },
          {
            name: "CSS Class and Support",
            scope: [
              "source.css support.type.property-name",
              "source.sass support.type.property-name",
              "source.scss support.type.property-name",
              "source.less support.type.property-name",
              "source.stylus support.type.property-name",
              "source.postcss support.type.property-name",
            ],
            settings: {
              foreground: "#B2CCD6",
            },
          },
          {
            name: "Sub-methods",
            scope: [
              "entity.name.module.js",
              "variable.import.parameter.js",
              "variable.other.class.js",
            ],
            settings: {
              foreground: "#FF5370",
            },
          },
          {
            name: "Language methods",
            scope: ["variable.language"],
            settings: {
              fontStyle: "italic",
              foreground: "#FF5370",
            },
          },
          {
            name: "entity.name.method.js",
            scope: ["entity.name.method.js"],
            settings: {
              fontStyle: "italic",
              foreground: "#82AAFF",
            },
          },
          {
            name: "meta.method.js",
            scope: [
              "meta.class-method.js entity.name.function.js",
              "variable.function.constructor",
            ],
            settings: {
              foreground: "#82AAFF",
            },
          },
          {
            name: "Attributes",
            scope: ["entity.other.attribute-name"],
            settings: {
              foreground: "#C792EA",
            },
          },
          {
            name: "HTML Attributes",
            scope: [
              "text.html.basic entity.other.attribute-name.html",
              "text.html.basic entity.other.attribute-name",
            ],
            settings: {
              fontStyle: "italic",
              foreground: "#FFCB6B",
            },
          },
          {
            name: "CSS Classes",
            scope: ["entity.other.attribute-name.class"],
            settings: {
              foreground: "#FFCB6B",
            },
          },
          {
            name: "CSS ID's",
            scope: ["source.sass keyword.control"],
            settings: {
              foreground: "#82AAFF",
            },
          },
          {
            name: "Inserted",
            scope: ["markup.inserted"],
            settings: {
              foreground: "#C3E88D",
            },
          },
          {
            name: "Deleted",
            scope: ["markup.deleted"],
            settings: {
              foreground: "#FF5370",
            },
          },
          {
            name: "Changed",
            scope: ["markup.changed"],
            settings: {
              foreground: "#C792EA",
            },
          },
          {
            name: "Regular Expressions",
            scope: ["string.regexp"],
            settings: {
              foreground: "#89DDFF",
            },
          },
          {
            name: "Escape Characters",
            scope: ["constant.character.escape"],
            settings: {
              foreground: "#89DDFF",
            },
          },
          {
            name: "URL",
            scope: ["*url*", "*link*", "*uri*"],
            settings: {
              fontStyle: "underline",
            },
          },
          {
            name: "Decorators",
            scope: [
              "tag.decorator.js entity.name.tag.js",
              "tag.decorator.js punctuation.definition.tag.js",
            ],
            settings: {
              fontStyle: "italic",
              foreground: "#82AAFF",
            },
          },
          {
            name: "ES7 Bind Operator",
            scope: [
              "source.js constant.other.object.key.js string.unquoted.label.js",
            ],
            settings: {
              fontStyle: "italic",
              foreground: "#FF5370",
            },
          },
          {
            name: "JSON Key - Level 0",
            scope: [
              "source.json meta.structure.dictionary.json support.type.property-name.json",
            ],
            settings: {
              foreground: "#C792EA",
            },
          },
          {
            name: "JSON Key - Level 1",
            scope: [
              "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
            ],
            settings: {
              foreground: "#FFCB6B",
            },
          },
          {
            name: "JSON Key - Level 2",
            scope: [
              "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
            ],
            settings: {
              foreground: "#F78C6C",
            },
          },
          {
            name: "JSON Key - Level 3",
            scope: [
              "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
            ],
            settings: {
              foreground: "#FF5370",
            },
          },
          {
            name: "JSON Key - Level 4",
            scope: [
              "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
            ],
            settings: {
              foreground: "#C17E70",
            },
          },
          {
            name: "JSON Key - Level 5",
            scope: [
              "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
            ],
            settings: {
              foreground: "#82AAFF",
            },
          },
          {
            name: "JSON Key - Level 6",
            scope: [
              "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
            ],
            settings: {
              foreground: "#f07178",
            },
          },
          {
            name: "JSON Key - Level 7",
            scope: [
              "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
            ],
            settings: {
              foreground: "#C792EA",
            },
          },
          {
            name: "JSON Key - Level 8",
            scope: [
              "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
            ],
            settings: {
              foreground: "#C3E88D",
            },
          },
          {
            name: "Markdown - Plain",
            scope: [
              "text.html.markdown",
              "punctuation.definition.list_item.markdown",
            ],
            settings: {
              foreground: "#EEFFFF",
            },
          },
          {
            name: "Markdown - Markup Raw Inline",
            scope: ["text.html.markdown markup.inline.raw.markdown"],
            settings: {
              foreground: "#C792EA",
            },
          },
          {
            name: "Markdown - Markup Raw Inline Punctuation",
            scope: [
              "text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown",
            ],
            settings: {
              foreground: "#65737E",
            },
          },
          {
            name: "Markdown - Heading",
            scope: [
              "markdown.heading",
              "markup.heading | markup.heading entity.name",
              "markup.heading.markdown punctuation.definition.heading.markdown",
            ],
            settings: {
              foreground: "#C3E88D",
            },
          },
          {
            name: "Markup - Italic",
            scope: ["markup.italic"],
            settings: {
              fontStyle: "italic",
              foreground: "#f07178",
            },
          },
          {
            name: "Markup - Bold",
            scope: ["markup.bold", "markup.bold string"],
            settings: {
              fontStyle: "bold",
              foreground: "#f07178",
            },
          },
          {
            name: "Markup - Bold-Italic",
            scope: [
              "markup.bold markup.italic",
              "markup.italic markup.bold",
              "markup.quote markup.bold",
              "markup.bold markup.italic string",
              "markup.italic markup.bold string",
              "markup.quote markup.bold string",
            ],
            settings: {
              fontStyle: "bold",
              foreground: "#f07178",
            },
          },
          {
            name: "Markup - Underline",
            scope: ["markup.underline"],
            settings: {
              fontStyle: "underline",
              foreground: "#F78C6C",
            },
          },
          {
            name: "Markdown - Blockquote",
            scope: ["markup.quote punctuation.definition.blockquote.markdown"],
            settings: {
              foreground: "#65737E",
            },
          },
          {
            name: "Markup - Quote",
            scope: ["markup.quote"],
            settings: {
              fontStyle: "italic",
            },
          },
          {
            name: "Markdown - Link",
            scope: ["string.other.link.title.markdown"],
            settings: {
              foreground: "#82AAFF",
            },
          },
          {
            name: "Markdown - Link Description",
            scope: ["string.other.link.description.title.markdown"],
            settings: {
              foreground: "#C792EA",
            },
          },
          {
            name: "Markdown - Link Anchor",
            scope: ["constant.other.reference.link.markdown"],
            settings: {
              foreground: "#FFCB6B",
            },
          },
          {
            name: "Markup - Raw Block",
            scope: ["markup.raw.block"],
            settings: {
              foreground: "#C792EA",
            },
          },
          {
            name: "Markdown - Raw Block Fenced",
            scope: ["markup.raw.block.fenced.markdown"],
            settings: {
              foreground: "#00000050",
            },
          },
          {
            name: "Markdown - Fenced Bode Block",
            scope: ["punctuation.definition.fenced.markdown"],
            settings: {
              foreground: "#00000050",
            },
          },
          {
            name: "Markdown - Fenced Bode Block Variable",
            scope: [
              "markup.raw.block.fenced.markdown",
              "variable.language.fenced.markdown",
              "punctuation.section.class.end",
            ],
            settings: {
              foreground: "#EEFFFF",
            },
          },
          {
            name: "Markdown - Fenced Language",
            scope: ["variable.language.fenced.markdown"],
            settings: {
              foreground: "#65737E",
            },
          },
          {
            name: "Markdown - Separator",
            scope: ["meta.separator"],
            settings: {
              fontStyle: "bold",
              foreground: "#65737E",
            },
          },
          {
            name: "Markup - Table",
            scope: ["markup.table"],
            settings: {
              foreground: "#EEFFFF",
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
