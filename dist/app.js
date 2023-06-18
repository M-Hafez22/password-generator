"use strict";
// Password length
const pwLengthOutputEl = document.getElementById("length");
const pwLengthSliderEl = document.getElementById("pw-slider");
// Get password length
let pwlength = 14; // The default password length
// Show the Password Length
pwLengthOutputEl.textContent = pwlength.toString();
pwLengthSliderEl === null || pwLengthSliderEl === void 0 ? void 0 : pwLengthSliderEl.addEventListener("input", function () {
    pwlength = parseInt(pwLengthSliderEl.value);
    pwLengthOutputEl.textContent = pwlength.toString();
});
// password range characters types
const numbers = "0123456789";
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const symbols = "!@#$%^&*_+=";
const ambiguousSymbols = "{}[]()/\\'\"`~,;:.<>";
// Create Password
// Select password characters from the password range
// Rating the password (Bad, Weak, Strong)
// Update password when setting changed
// Update password when generate button clicked
// Create a password at the application startup
// Copy password to the clipboard
