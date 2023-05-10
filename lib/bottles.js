import { capitalize, downTo } from "./helpers";

export class Bottles {
  verse(number) {
    switch (number) {
      case 0:
        return (
          `${capitalize(this.quantity(number))} ${this.container(
            number
          )} of beer on the wall, ` +
          `${this.quantity(number)} ${this.container(number)} of beer.\n` +
          `${this.action(number)}, ` +
          `99 bottles of beer on the wall.\n`
        );
      default:
        return (
          `${capitalize(this.quantity(number))} ${this.container(
            number
          )} of beer on the wall, ` +
          `${this.quantity(number)} ${this.container(number)} of beer.\n` +
          `${this.action(number)}, ` +
          `${this.quantity(number - 1)} ${this.container(
            number - 1
          )} of beer on the wall.\n`
        );
    }
  }
  action(number) {
    if (number === 0) {
      return `Go to the store and buy some more`;
    }
    return `Take ${this.pronoun(number)} down and pass it around`;
  }
  quantity(number) {
    if (number === 0) {
      return "no more";
    }
    return number.toString();
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
