import { downTo } from "./helpers";

export class Bottles {
  verse(number) {
    switch (number) {
      case 0:
        return (
          "No more bottles of beer on the wall, " +
          "no more bottles of beer.\n" +
          "Go to the store and buy some more, " +
          "99 bottles of beer on the wall.\n"
        );
      case 1:
        return (
          `${number} bottle of beer on the wall, ` +
          `${number} bottle of beer.\n` +
          "Take it down and pass it around, " +
          "no more bottles of beer on the wall.\n"
        );
      case 2:
        return (
          `${number} bottles of beer on the wall, ` +
          `${number} bottles of beer.\n` +
          `Take one down and pass it around, ` +
          `${number - 1} bottle of beer on the wall.\n`
        );
      default:
        return (
          `${number} bottles of beer on the wall, ` +
          `${number} bottles of beer.\n` +
          `Take one down and pass it around, ` +
          `${number - 1} bottles of beer on the wall.\n`
        );
    }
  }
  verses(from, to) {
    return downTo(from, to)
      .map((verseNo) => this.verse(verseNo))
      .join("\n");
  }
  song() {
    return this.verses(99, 0);
  }
}
