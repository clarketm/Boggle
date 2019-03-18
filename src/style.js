const background = "/background.png";

const style = {
  Grid: {
    display: "grid",
    gridTemplateAreas:
      '"header header header start" "word word accuracy accuracy" "board board valid invalid" "submit clear empty empty" "footer footer footer footer"',
    gridTemplateRows: "auto minmax(auto, 10%) auto auto auto",
    gridTemplateColumns: "auto auto minmax(auto, 15%) minmax(auto, 15%)",
    gridRowGap: "1rem",
    gridColumnGap: "3rem",
    background: `url(${background}) repeat`,
    padding: "1rem 4rem 1rem",
    alignItems: "center",
    justifyItems: "center",
    height: "100%"
  },
  Word: {
    gridArea: "word",
    fontSize: "2.5rem",
    fontFamily: "Concert One, cursive",
    textTransform: "uppercase",
    letterSpacing: "0.5rem"
  },
  Accuracy: {
    gridArea: "accuracy"
  },
  StartButton: {
    gridArea: "start",
    justifySelf: "flex-end",
    margin: "1rem"
  },
  SubmitWordButton: {
    gridArea: "submit",
    alignSelf: "flex-start",
    justifySelf: "flex-end",
    margin: "1rem"
  },
  ClearWordButton: {
    gridArea: "clear",
    alignSelf: "flex-start",
    justifySelf: "flex-start",
    margin: "1rem"
  },
  ValidWordList: {
    gridArea: "valid",
    padding: "0.5rem",
    alignSelf: "stretch",
    justifySelf: "stretch",
    backgroundColor: "rgba(0, 255, 0, 0.1)",
    border: "0.1rem solid rgba(0, 255, 0, 0.3)"
  },
  InvalidWordList: {
    gridArea: "invalid",
    padding: "0.5rem",
    alignSelf: "stretch",
    justifySelf: "stretch",
    backgroundColor: "rgba(255, 0, 0, 0.1)",
    border: "0.1rem solid rgba(255, 0, 0, 0.3)"
  },
  GameBoard: N => ({
    display: "grid",
    gridArea: "board",
    gridTemplateRows: `repeat(${N}, 1fr)`,
    gridTemplateColumns: `repeat(${N}, 1fr)`,
    gridRowGap: "2rem",
    gridColumnGap: "2rem",
    justifyItems: "center",
    alignItems: "center",
    cursor: "pointer"
  }),
  GameCharacter: {
    fontSize: "2.5rem",
    fontFamily: "Concert One, cursive",
    textTransform: "uppercase",
    gridColumnStart: "auto",
    gridRowStart: "auto",
    background: "linear-gradient(to top right, #ecca68, #f1c87f)",
    fontWeight: 600,
    borderStyle: "solid",
    borderSize: "0.5rem",
    boxShadow: "0.2rem 0.2rem 0.2rem #888888",
    textAlign: "center",
    lineHeight: "2rem",
    width: "2rem",
    height: "2rem",
    padding: "2rem"
  },
  Header: {
    gridArea: "header",
    textAlign: "left",
    alignSelf: "center",
    width: "100%",
    height: "100%"
  },
  Footer: {
    gridArea: "footer",
    textAlign: "center",
    alignSelf: "center",
    width: "100%",
    height: "100%"
  }
};

export default style;
