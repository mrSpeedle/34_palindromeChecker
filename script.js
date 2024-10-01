function checkPalindrome() {
    const input = document.getElementById("text-input").value.trim();

    if (!input) {
        alert("Please input a value");
        return;
    }

    const cleanedInput = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const isPalindrome = cleanedInput === cleanedInput.split('').reverse().join('');
    
    const resultText = isPalindrome 
        ? `${input} is a palindrome` 
        : `${input} is not a palindrome`;
    
    document.getElementById("result").innerText = resultText;
}
