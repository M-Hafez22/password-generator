// Password length
const pwLengthOutputEl = document.getElementById("length")!
const pwLengthSliderEl = document.getElementById("pw-slider")!
// output
const pwEl = document.getElementById("password")!
const generatorEL = document.getElementById("generator")
// Checkboxs
const numberCheckboxEl = document.getElementById("number")
const upperCheckboxEl = document.getElementById("upper")
const lowerCheckboxEl = document.getElementById("lower")
const symbolsCheckboxEl = document.getElementById("symbols")
const ambiguousSymbolsCheckboxEl = document.getElementById("ambiguousSymbols")
const rateEl = document.getElementById("rate")!

// Get password length
let pwlength = 14 // The default password length
// Show the Password Length
pwLengthOutputEl.textContent = pwlength.toString()
pwLengthSliderEl?.addEventListener("input", function () {
  pwlength = parseInt((pwLengthSliderEl as HTMLInputElement).value)
  pwLengthOutputEl.textContent = pwlength.toString()
})

// password range characters types
const numbers = "0123456789"
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerLetters = "abcdefghijklmnopqrstuvwxyz"
const symbols = "!@#$%^&*_+="
const ambiguousSymbols = "{}[]()/\\'\"`~,;:.<>"

// Create Password
const generatePW = (pwLenght: number): string => {
  let password = ""
  // Create Password Range
  let passwordRange = ""
  if ((numberCheckboxEl as HTMLInputElement).checked) {
    passwordRange += shufflingString(numbers)
  }
  if ((upperCheckboxEl as HTMLInputElement).checked) {
    passwordRange += shufflingString(upperLetters)
  }
  if ((lowerCheckboxEl as HTMLInputElement).checked) {
    passwordRange += shufflingString(lowerLetters)
  }
  if ((symbolsCheckboxEl as HTMLInputElement).checked) {
    passwordRange += shufflingString(symbols)
  }
  if ((ambiguousSymbolsCheckboxEl as HTMLInputElement).checked) {
    passwordRange += shufflingString(ambiguousSymbols)
  }
  if (!passwordRange) {
    console.log("Select password character types")
    pwEl.textContent = "Select password character types"
    return "Select password character types"
  }
  // Select password characters from the password range
  for (let i = 0; i < pwLenght; i++) {
    password +=
      shufflingString(passwordRange)[
        Math.floor(Math.random() * passwordRange.length)
      ]
  }
  pwEl.textContent = password
  // Rating the password (Bad, Weak, Strong)
  if (password.length > 11) {
    rateEl.textContent = "Good"
    pwLengthSliderEl.style.backgroundColor = "green"
  } else if (password.length > 5) {
    rateEl.textContent = "Weak"
    pwLengthSliderEl.style.backgroundColor = "blue"
  } else if (password.length > 3) {
    rateEl.textContent = "Bad"
    pwLengthSliderEl.style.backgroundColor = "red"
  }
  return password
}

// TODO Update password when setting changed
// TODO Update password when generate button clicked

// TODO Copy password to the clipboard

// shuffling a String
const shufflingString = (str: string): string => {
  return [...str].sort(() => Math.random() - 0.5).join("")
}
// Create a password at the application startup
generatePW(pwlength)
