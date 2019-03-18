class TrieNode {
  constructor(char) {
    this.char = char;
    this.isCompleteWord = false;
    this.children = {};
  }
}

class Trie {
  constructor() {
    this.root = TrieNode();
  }

  add(word) {
    let curr = this.root;

    for (const c of word) {
      if (!curr.children[c]) curr.children[c] = TrieNode(c);
      curr = curr.children[c];
    }

    curr.isCompleteWord = true;
  }

  search(word) {
    let curr = this.root;

    for (const c of word) {
      if (!curr.children[c]) return false;
      curr = curr.children[c];
    }

    return curr.isCompleteWord;
  }

  startsWith(prefix) {
    let curr = this.root;

    for (const c of prefix) {
      if (!curr.children[c]) return false;
      curr = curr.children[c];
    }

    return true;
  }
}
