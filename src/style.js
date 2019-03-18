const background = "/background.png";

const style = {
  Grid: {
    display: "grid",
    gridTemplateAreas:
      '"header header header start" "word word accuracy accuracy" "board board valid invalid" "submit clear empty empty" "footer footer footer footer"',
    gridTemplateRows: "0.5fr 1fr 5fr 1fr 0.5fr",
    gridTemplateColumns: "1.75fr 1.75fr 1fr 1fr",
    gridRowGap: "1rem",
    gridColumnGap: "3rem",
    background: `url(${background}) repeat`,
    padding: "1rem 4rem 1rem",
    alignItems: "center",
    justifyItems: "center",
    width: "100%",
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
    alignSelf: "flex-start",
    padding: "0.5rem",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 255, 0, 0.1)",
    border: "0.1rem solid rgba(0, 255, 0, 0.3)"
  },
  InvalidWordList: {
    gridArea: "invalid",
    alignSelf: "flex-start",
    padding: "0.5rem",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 0, 0, 0.1)",
    border: "0.1rem solid rgba(255, 0, 0, 0.3)"
  },
  GameBoard: N => ({
    display: "grid",
    gridArea: "board",
    gridTemplateRows: `repeat(${N}, 6rem)`,
    gridTemplateColumns: `repeat(${N}, 6rem)`,
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
