exports.ticTacTorBot = async (req, res) => {
  try {
    const { boardDetail } = req.body;
    // Tic-tac-toe board represented as a 2D array
    let board = [
      [boardDetail[0], boardDetail[1], boardDetail[2]],
      [boardDetail[3], boardDetail[4], boardDetail[5]],
      [boardDetail[6], boardDetail[7], boardDetail[8]],
    ];

    const checkRow = (row) => {
      const rowCondition = [
        ["", "X", "X"],
        ["X", "X", ""],
      ];
      const arraysEqual = rowCondition.forEach((arr, idx) => {
        if (JSON.stringify(board[row]) === JSON.stringify(arr)) {
          return (board[row] = arr.map((data) => (data === "" ? "O" : "X")));
        } else {
          return false;
        }
      });
      let testCase = arraysEqual;
      if (testCase) return true;
    };

    const checkCol = () => {
      if (board[0][0] === "X" && board[1][0] === "X" && board[2][0] === "") {
        board[2][0] = "O";
      }
      if (board[0][1] === "X" && board[1][1] === "X" && board[2][1] === "") {
        board[2][1] = "O";
      }
      if (board[0][2] === "X" && board[1][2] === "X" && board[2][2] === "") {
        board[2][2] = "O";
      }
      if (board[1][0] === "X" && board[2][0] === "X" && board[0][0] === "") {
        board[0][0] = "O";
      }
      if (board[1][1] === "X" && board[2][1] === "X" && board[0][1] === "") {
        board[0][1] = "O";
      }
      if (board[1][2] === "X" && board[2][2] === "X" && board[0][2] === "") {
        board[0][2] = "O";
      }
    };

    const checkDiagonal = () => {
      if (board[0][0] === "X" && board[1][1] === "X" && board[2][2] === "") {
        board[2][2] = "O";
      }
      if (board[0][2] === "X" && board[1][1] === "X" && board[2][0] === "") {
        board[2][0] = "O";
      }
      if (board[2][0] === "X" && board[1][1] === "X" && board[0][2] === "") {
        board[0][2] = "O";
      }
      if (board[2][2] === "X" && board[1][1] === "X" && board[0][0] === "") {
        board[0][0] = "O";
      }
    };

    const nonCaseMove = () => {
      let arr = [];
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (board[i][j] === "") {
            arr.push({
              row: i,
              col: j,
            });
          }
        }
      }
      const randomPositionMove = Math.floor(Math.random() * arr.length);
      const moveTo = arr[randomPositionMove];
      board[moveTo.row][moveTo.col] = "O";
    };

    const isFullBoard = () => {
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (!board[i][j]) {
            return false;
          }
          return true;
        }
      }
    };

    const predictions = (row, col) => {
      let arr = [];
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (board[i][j] !== "") {
            arr.push(board[i][j]);
          }
        }
      }
      if (board[1][1] === "") {
        board[1][1] = "O";
      } else if (board[1][1] === "X" && arr.length === 1) {
        let rowRandom = 0;
        let colRandom = 0;
        const randomPositions = () => {
          rowRandom = Math.floor(Math.random() * 3);
          colRandom = Math.floor(Math.random() * 3);
          if (rowRandom && colRandom === 1) {
            randomPositions();
          }
        };
        randomPositions();
        board[rowRandom][colRandom] = "O";
      } else {
        checkRow(row);
        checkCol();
        checkDiagonal();
      }
    };

    const whoWin = () => {
      for (let row = 0; row < 3; row++) {
        if (JSON.stringify(board[row]) === JSON.stringify(["X", "X", "X"])) {
          return res.send({
            message: "Player Win!",
          });
        } else if (
          JSON.stringify(board[row]) === JSON.stringify(["O", "O", "O"])
        ) {
          return res.send({
            message: "Bot Win!",
          });
        }
      }
      if (board[0][0] === "X" && board[1][0] === "X" && board[2][0] === "X") {
        return res.send({
          message: "Player Win!",
        });
      }
      if (board[0][1] === "X" && board[1][1] === "X" && board[2][1] === "X") {
        return res.send({
          message: "Player Win!",
        });
      }
      if (board[0][2] === "X" && board[1][2] === "X" && board[2][2] === "X") {
        return res.send({
          message: "Player Win!",
        });
      }
      if (board[1][0] === "X" && board[2][0] === "X" && board[0][0] === "X") {
        return res.send({
          message: "Player Win!",
        });
      }
      if (board[1][1] === "X" && board[2][1] === "X" && board[0][1] === "X") {
        return res.send({
          message: "Player Win!",
        });
      }
      if (board[1][2] === "X" && board[2][2] === "X" && board[0][2] === "X") {
        return res.send({
          message: "Player Win!",
        });
      }
      if (board[0][0] === "O" && board[1][0] === "O" && board[2][0] === "O") {
        return res.send({
          message: "Bot Win!",
        });
      }
      if (board[0][1] === "O" && board[1][1] === "O" && board[2][1] === "O") {
        return res.send({
          message: "Bot Win!",
        });
      }
      if (board[0][2] === "O" && board[1][2] === "O" && board[2][2] === "O") {
        return res.send({
          message: "Bot Win!",
        });
      }
      if (board[1][0] === "O" && board[2][0] === "O" && board[0][0] === "O") {
        return res.send({
          message: "Bot Win!",
        });
      }
      if (board[1][1] === "O" && board[2][1] === "O" && board[0][1] === "O") {
        return res.send({
          message: "Bot Win!",
        });
      }
      if (board[1][2] === "O" && board[2][2] === "O" && board[0][2] === "O") {
        return res.send({
          message: "Bot Win!",
        });
      }
      if (board[0][0] === "X" && board[1][1] === "X" && board[2][2] === "X") {
        return res.send({
          message: "Player Win!",
        });
      }
      if (board[0][2] === "X" && board[1][1] === "X" && board[2][0] === "X") {
        return res.send({
          message: "Player Win!",
        });
      }
      if (board[2][0] === "X" && board[1][1] === "X" && board[0][2] === "X") {
        return res.send({
          message: "Player Win!",
        });
      }
      if (board[2][2] === "X" && board[1][1] === "X" && board[0][0] === "X") {
        return res.send({
          message: "Player Win!",
        });
      }
      if (board[0][0] === "O" && board[1][1] === "O" && board[2][2] === "O") {
        return res.send({
          message: "Bot Win!",
        });
      }
      if (board[0][2] === "O" && board[1][1] === "O" && board[2][0] === "O") {
        return res.send({
          message: "Bot Win!",
        });
      }
      if (board[2][0] === "O" && board[1][1] === "O" && board[0][2] === "O") {
        return res.send({
          message: "Bot Win!",
        });
      }
      if (board[2][2] === "O" && board[1][1] === "O" && board[0][0] === "O") {
        return res.send({
          message: "Bot Win!",
        });
      }
    };

    const fullBoard = isFullBoard();
    if (fullBoard) {
      whoWin();
    } else {
      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
          predictions(row, col);
        }
      }

      if (
        JSON.stringify(board) ===
        JSON.stringify([
          [boardDetail[0], boardDetail[1], boardDetail[2]],
          [boardDetail[3], boardDetail[4], boardDetail[5]],
          [boardDetail[6], boardDetail[7], boardDetail[8]],
        ])
      ) {
        nonCaseMove();
      }

      const returnBoard = [...board[0], ...board[1], ...board[2]];
      return res.send({
        board: returnBoard,
      });
    }
  } catch (e) {
    console.log(e);
  }
};
