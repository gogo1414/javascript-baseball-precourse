export default class BaseballGameView {
    
    printResult(result) {
        const output = document.querySelector("#result");
        output.textContent = result;
    }

    resetResult() {
        const output = document.querySelector("#result");
        output.textContent = '';
    }

    toggleButtons(visible) {
        document.querySelector("#submit").style.display = visible ? 'block' : 'none';
        document.querySelector("#game-restart-button").style.display = visible ? 'none' : 'block';
    }
}