import { downTo } from "./helpers";

export class Bottles {
  verse(number) {
    switch (number) {
      case 0:
        return (
          `No more bottles of beer on the wall, ` +
          `no more bottles of beer.\n` +
          `Go to the store and buy some more, ` +
          `99 bottles of beer on the wall.\n`
        );
      default:
        return (
          `${number} ${this.container(number)} of beer on the wall, ` +
          `${number} ${this.container(number)} of beer.\n` +
          `Take ${this.pronoun(number)} down and pass it around, ` +
          `${this.quantity(number - 1)} ${this.container(
            number - 1
          )} of beer on the wall.\n`
        );
    }
  }
  quantity(number) {
    if (number === 0) {
      return "no more";
    }
    return number;
  }
  pronoun(number) {
    if (number === 1) {
      return "it";
    }
    return "one";
  }
  container(number) {
    if (number === 1) {
      return "bottle";
    }
    return "bottles";
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
