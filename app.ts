// Password length
const pwLengthOutputEl = document.getElementById("length")!
const pwLengthSliderEl = document.getElementById("pw-slider")!

// Get password length
let pwlength = 14 // The default password length
// Show the Password Length
pwLengthOutputEl.textContent = pwlength.toString()
pwLengthSliderEl?.addEventListener("input", function () {
  pwlength = parseInt((pwLengthSliderEl as HTMLInputElement).value)
  pwLengthOutputEl.textContent = pwlength.toString()
})
// Create Password
// Create password range
// Select password characters from the password range

// Rating the password (Bad, Weak, Strong)

// Update password when setting changed
// Update password when generate button clicked
// Create a password at the application startup

// Copy password to the clipboard
