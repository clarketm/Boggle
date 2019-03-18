import request from "../../utils/request";

class Game {
  static VOWELS = "aeiou";
  static CONSONANTS = "bcdfghjklmnpqrstvwxyz";

  // Board
  static DEFAULT_BOARD_SIZE = 4;
  static DEFAULT_MINIMUM_WORD_SIZE = 3;
  static DEFAULT_MINIMUM_VOWEL_COUNT = 4;
  static DEFAULT_MINIMUM_CONSONANT_COUNT = 4;

  static randomIntExclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  static randomChoice(collection) {
    const choice = Game.randomIntExclusive(0, collection.length);
    return collection[choice];
  }

  static swap(collection, A, B) {
    [collection[A], collection[B]] = [collection[B], collection[A]];
  }

  static shuffle(collection, rounds = 3) {
    const N = collection.length;

    for (let i = 0; i < N * rounds; i++) {
      const j = Game.randomIntExclusive(0, N);
      Game.swap(collection, i % N, j);
    }
  }

  constructor(build) {
    this.validWords = new Set(["hair"]);
    this.invalidWords = new Set();
    this.boardSize = build.boardSize || Game.DEFAULT_BOARD_SIZE;
    this.minWordSize = build.minWordSize || Game.DEFAULT_MINIMUM_WORD_SIZE;
    this.minConsonantCount = build.minConsonantCount || Game.DEFAULT_MINIMUM_CONSONANT_COUNT;
    this.minVowelCount = build.minVowelCount || Game.DEFAULT_MINIMUM_VOWEL_COUNT;
    this.populateBoard();
  }

  createBoard(N, defaultValue) {
    return Array.from(new Array(N), () => new Array(N).fill(defaultValue));
  }

  populateBoard() {
    const chars = [];
    const N = this.boardSize;
    this.board = this.createBoard(N);
    this.boardState = this.createBoard(N, false);

    // Generate required vowel quantity
    for (let i = 0; i < this.minVowelCount; i++) {
      chars.push(Game.randomChoice(Game.VOWELS));
    }

    // Generate required consonant quantity
    for (let i = 0; i < this.minConsonantCount; i++) {
      chars.push(Game.randomChoice(Game.CONSONANTS));
    }

    // Generate remaining vowel/consonant quantity
    while (chars.length < N * N) {
      chars.push(Game.randomChoice(Game.VOWELS + Game.CONSONANTS));
    }

    Game.shuffle(chars);

    for (let r = 0; r < N; r++) {
      for (let c = 0; c < N; c++) {
        this.board[r][c] = chars.pop();
      }
    }
  }

  isValidPos(px, nx) {
    const N = this.boardSize;
    return nx >= 0 && nx < N && Math.abs(px - nx) <= 1;
  }

  async validateWord(word) {
    if (word.length < this.minWordSize) return false;

    const { valid } = await request("https://us-central1-hazel-analytics.cloudfunctions.net/boggle-dictionary", {
      method: "POST",
      body: JSON.stringify({ word })
    });

    return valid;
  }

  validateSelect(word, [nr, nc]) {
    if (!word.length) return true;

    const [pr, pc] = word[word.length - 1];

    return this.isValidPos(pr, nr) && this.isValidPos(pc, nc);
  }

  validateUnselect(word, [nr, nc]) {
    if (!word.length) return false;

    const [pr, pc] = word[word.length - 1];

    return pr === nr && pc === nc;
  }
}

export class GameBuilder {
  withWordSize({ wordSize }) {
    this.minWordSize = wordSize;
    return this;
  }

  withVowelCount({ vowelCount }) {
    this.minVowelCount = vowelCount;
    return this;
  }

  withConsonantCount({ consonantCount }) {
    this.minConsonantCount = consonantCount;
    return this;
  }

  build() {
    return new Game(this);
  }
}
