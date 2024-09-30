export default class NumberUtils {
  
  validateDifferentNumber(userNumbers) {
    if (new Set(userNumbers).size !== 3) {
      return false;
    }
    return true;
  }
  
  validateNumbers(userNumbers) {
    // 사용자의 입력 숫자가 [1-9] 1부터 9의 숫자, {3} 3자리 수를 의미
    if (!/^[1-9]{3}$/.test(userNumbers)) {
        return false;
    }
    return true;
  }
}