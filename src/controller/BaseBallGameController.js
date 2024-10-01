import BaseBallGame from "../model/BaseBallGame.js";
import BaseBallGameView from "../view/BaseBallGameView.js";
import NumberUtils from "../\butils/NumberUtils.js";

export default class BaseballGameController {

    constructor() {
        this.BaseBallGame = new BaseBallGame();
        this.BaseBallGameView = new BaseBallGameView();
        this.NumberUtils = new NumberUtils();
        this.gameStart();
    }

    gameStart() {
        const input = document.querySelector("#user-input");
        const submitButton = document.querySelector("#submit");
  
        submitButton.addEventListener('click', (event) => {
          event.preventDefault();
  
          const userInput = input.value;
          const userNumbers = userInput.split('').map(Number);
          this.validateUserNumbers(userInput, userNumbers)
  
          const result = this.BaseBallGame.play(userNumbers);
          this.BaseBallGameView.printResult(result);
  
          if(this.BaseBallGame.isPlayerWinner(result)){
            this.endGame(result);
          }
        });
    }

    endGame(result) {
        setTimeout(function() {
            alert(result + " 축하드립니다!");
        }, 1);

        const restartButton = document.querySelector("#game-restart-button");

        this.BaseBallGameView.toggleButtons(false);

        restartButton.addEventListener('click', () => {
            this.BaseBallGame.restart();
            this.BaseBallGameView.toggleButtons(true);
            this.BaseBallGameView.resetUserInput();
            this.BaseBallGameView.resetResult();
        });
    }

    validateUserNumbers(userInput, userNumbers) {
        if(!this.NumberUtils.validateDifferentNumber(userNumbers))
            return alert("잘못된 입력입니다. 중복되지 않는 서로 다른 3개의 숫자를 입력하세요.");
        else 
        if(!this.NumberUtils.validateNumbers(userInput)) 
            return alert("잘못된 입력입니다. 1부터 9까지의 숫자만 입력하세요.");
    }
}