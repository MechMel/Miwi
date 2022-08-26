/** @About A box is the simplest UI widget. */
// box.row([...]);
// box.column([...]);
// box.stack([...]);
const box = widgetTemplate({
  width: size.basedOnContents,
  height: size.basedOnContents,
  onTap: undefined,
  cornerRadius: 0,
  outlineColor: colors.transparent,
  outlineSize: 0,
  background: colors.transparent,
  shadowSize: 0,
  shadowDirection: align.center,
  padding: 0,
  contentAlign: align.center,
  contentAxis: axis.vertical,
  contentIsScrollableX: false,
  contentIsScrollableY: false,
  contentSpacing: 0,
  textSize: 1,
  textIsBold: false,
  textIsItalic: false,
  textColor: colors.black,
  contents: [],
  htmlTag: `div`,
});

/** @About A box is the simplest UI widget. */
const pageBody = widgetTemplate({
  width: size.grow,
  height: size.grow,
  onTap: undefined,
  cornerRadius: 0,
  outlineColor: colors.transparent,
  outlineSize: 0,
  background: colors.transparent,
  shadowSize: 0,
  shadowDirection: align.center,
  padding: 1,
  contentAlign: align.topCenter,
  contentAxis: axis.vertical,
  contentIsScrollableX: false,
  contentIsScrollableY: true,
  contentSpacing: 1,
  textSize: 1,
  textIsBold: false,
  textIsItalic: false,
  textColor: colors.black,
  contents: [],
  htmlTag: `div`,
});

/** @About Describes a card. */
// card.row(...);
// card.column(...);
// card.stack(...);
const card = widgetTemplate({
  width: size.grow,
  height: size.basedOnContents,
  onTap: undefined,
  textSize: 1,
  textIsBold: false,
  textIsItalic: false,
  textColor: colors.black,
  cornerRadius: 1,
  outlineColor: colors.transparent,
  outlineSize: 0,
  background: colors.white,
  shadowSize: 1,
  shadowDirection: align.bottomRight,
  padding: 1,
  contentAlign: align.center,
  contentAxis: axis.vertical,
  contentIsScrollableX: false,
  contentIsScrollableY: false,
  contentSpacing: 1,
  contents: [],
  htmlTag: `div`,
});

/** @About All the different kinds of buttons. */
const button = readonlyObj({
  /** @About A button with a solid, colored background. */
  solid: widgetTemplate({
    width: size.basedOnContents,
    height: size.basedOnContents,
    onTap: undefined,
    textSize: 1,
    textIsBold: false,
    textIsItalic: false,
    textColor: colors.white,
    cornerRadius: 0.5,
    outlineColor: colors.transparent,
    outlineSize: 1.5,
    background: colors.blue,
    shadowSize: 0,
    shadowDirection: align.bottomRight,
    padding: 0.5,
    contentAlign: align.center,
    contentAxis: axis.horizontal,
    contentIsScrollableX: false,
    contentIsScrollableY: false,
    contentSpacing: 0,
    contents: `Button`,
    htmlTag: `button`,
  }),

  /** @About A white button with colored text and a colored outline. */
  outlined: widgetTemplate({
    width: size.basedOnContents,
    height: size.basedOnContents,
    onTap: undefined,
    textSize: 1,
    textIsBold: false,
    textIsItalic: false,
    textColor: colors.blue,
    cornerRadius: 0.5,
    outlineColor: colors.blue,
    outlineSize: 0.15,
    background: colors.white,
    shadowSize: 0,
    shadowDirection: align.bottomRight,
    padding: 0.5,
    contentAlign: align.center,
    contentAxis: axis.horizontal,
    contentIsScrollableX: false,
    contentIsScrollableY: false,
    contentSpacing: 0,
    contents: `Button`,
    htmlTag: `button`,
  }),

  /** @About All button where both ends are circular. */
  pill: widgetTemplate({
    width: size.basedOnContents,
    height: 2,
    onTap: undefined,
    textSize: 1,
    textIsBold: false,
    textIsItalic: false,
    textColor: colors.white,
    cornerRadius: 1,
    outlineColor: colors.transparent,
    outlineSize: 1.5,
    background: colors.blue,
    shadowSize: 0,
    shadowDirection: align.bottomRight,
    padding: 0.75,
    contentAlign: align.center,
    contentAxis: axis.horizontal,
    contentIsScrollableX: false,
    contentIsScrollableY: false,
    contentSpacing: 0,
    contents: `Button`,
    htmlTag: `button`,
  }),

  /** @About A circular button. */
  round: widgetTemplate({
    width: 2,
    height: 2,
    onTap: undefined,
    textSize: 1,
    textIsBold: false,
    textIsItalic: false,
    textColor: colors.white,
    cornerRadius: 1,
    outlineColor: colors.transparent,
    outlineSize: 1.5,
    background: colors.blue,
    shadowSize: 0,
    shadowDirection: align.bottomRight,
    padding: 0.5,
    contentAlign: align.center,
    contentAxis: axis.horizontal,
    contentIsScrollableX: false,
    contentIsScrollableY: false,
    contentSpacing: 0,
    contents: icons.add,
    htmlTag: `button`,
  }),
});

/** @About An app bar is the colored bar at the top of a lot of apps. */
const appBar = widgetTemplate({
  width: size.grow,
  height: size.basedOnContents,
  onTap: undefined,
  textSize: 1.5,
  textIsBold: true,
  textIsItalic: false,
  textColor: colors.white,
  cornerRadius: 0,
  outlineColor: colors.transparent,
  outlineSize: 0,
  background: colors.blue,
  shadowSize: 2,
  shadowDirection: align.bottomCenter,
  padding: 0.75,
  contentAlign: align.center,
  contentAxis: axis.horizontal,
  contentIsScrollableX: false,
  contentIsScrollableY: false,
  contentSpacing: spacing.spaceBetween,
  contents: `Untitled`,
  htmlTag: `nav`,
});
