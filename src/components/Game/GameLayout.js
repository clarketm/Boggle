import React, { Component } from "react";
import { GameBuilder } from "./GameBuilder";
import GameBoard from "./GameBoard";
import style from "../../style";
import GameCharacter from "./GameCharacter";
import Grid from "../Grid/Grid";
import Button from "../Button/Button";
import List from "../List/List";
import Text from "../Text/Text";
import Footer from "../Footer/Footer";
import Header from "../../Header/Header";

class GameLayout extends Component {
  static formatAccuracy(accuracy) {
    return `${accuracy.toFixed(2)}%`;
  }

  static get initialGameState() {
    return {
      score: 0,
      accuracy: 0,
      word: [],
      Game: new GameBuilder().build()
    };
  }

  state = GameLayout.initialGameState;

  get word() {
    return this.state.word.map(([r, c]) => this.state.Game.board[r][c]).join("");
  }

  get accuracy() {
    const valid = this.state.Game.validWords.size;
    const invalid = this.state.Game.invalidWords.size;
    const total = valid + invalid || 1;

    return GameLayout.formatAccuracy((valid / total) * 100);
  }

  renderBoard() {
    const N = this.state.Game.boardSize;
    const word = this.state.word;
    const board = this.state.Game.board;
    const boardState = this.state.Game.boardState;
    const isLast = (r, c) => word.length && word[word.length - 1][0] === r && word[word.length - 1][1] === c;
    const chars = [];

    for (let r = 0; r < N; r++) {
      for (let c = 0; c < N; c++) {
        chars.push(
          <GameCharacter
            key={String(r) + String(c)}
            handleClick={this.toggleSelected}
            char={board[r][c]}
            isLast={isLast(r, c)}
            isSelected={boardState[r][c]}
            row={r}
            col={c}
            style={style.GameCharacter}
          />
        );
      }
    }

    return chars;
  }

  ////////////////////////
  // Event Handlers
  ////////////////////////
  handleStart = () => {
    this.setState(GameLayout.initialGameState);
  };

  handleInvalidSelection = () => {
    window.alert("Selected character must be adjacent (horizontal, vertical, or diagonal) to last selected character");
  };

  handleInvalidUnselection = () => {
    window.alert("Unselected character must be the same as last selected character");
  };

  toggleSelected = (r, c) => {
    let word = this.state.word;

    const Game = this.state.Game;
    const state = !Game.boardState[r][c];

    if (state) {
      if (Game.validateSelect(word, [r, c])) {
        Game.boardState[r][c] = state;
        word.push([r, c]);
      } else {
        this.handleInvalidSelection();
      }
    } else {
      if (Game.validateUnselect(word, [r, c])) {
        Game.boardState[r][c] = state;
        word.pop();
      } else {
        this.handleInvalidUnselection();
      }
    }

    this.setState({
      Game,
      word
    });
  };

  handleSubmitWord = async () => {
    const Game = this.state.Game;

    const isValidWord = await Game.validateWord(this.word);

    // Send request to server
    if (isValidWord) Game.validWords.add(this.word);
    else Game.invalidWords.add(this.word);

    this.setState(
      {
        Game
      },
      this.handleResetWord
    );
  };

  handleResetWord = () => {
    const Game = this.state.Game;
    Game.boardState = Game.createBoard(Game.boardSize, false);

    this.setState({
      Game,
      word: []
    });
  };

  ////////////////////////
  // Render
  ////////////////////////
  render() {
    const { Game } = this.state;

    return (
      <Grid style={style.Grid}>
        {/*HEADER*/}
        <Header style={style.Header} />

        {/*TOP*/}
        <Text style={style.Word} text={this.word} />
        <Text style={style.Accuracy} text={this.accuracy} />
        <Button text="New Game" style={style.RestartButton} handleClick={this.handleStart} />

        {/*MIDDLE*/}
        <GameBoard style={style.GameBoard(Game.boardSize)}>{this.renderBoard()}</GameBoard>

        <List title="Valid Words" style={style.ValidWordList} list={Game.validWords} />
        <List title="Invalid Words" style={style.InvalidWordList} list={Game.invalidWords} />

        {/*BOTTOM*/}
        <Button text="Submit Word" disabled={!this.state.word.length} style={style.SubmitWordButton} handleClick={this.handleSubmitWord} />
        <Button text="Clear Word" disabled={!this.state.word.length} style={style.ClearWordButton} handleClick={this.handleResetWord} />

        {/*FOOTER*/}
        <Footer style={style.Footer} />
      </Grid>
    );
  }
}

export default GameLayout;
