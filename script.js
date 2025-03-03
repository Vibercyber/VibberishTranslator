const qwertyShift = {
  'q': 'w', 'w': 'e', 'e': 'r', 'r': 't', 't': 'y', 'y': 'u', 'u': 'i', 'i': 'o', 'o': 'p', 'p': '[',
  '[': ']', ']': '\\', 'a': 's', 's': 'd', 'd': 'f', 'f': 'g', 'g': 'h', 'h': 'j', 'j': 'k', 'k': 'l',
  'l': ';', ';': "'", 'z': 'x', 'x': 'c', 'c': 'v', 'v': 'b', 'b': 'n', 'n': 'm', 'm': ',', ',': '.',
  '.': '/', '/': 'q', 'Q': 'W', 'W': 'E', 'E': 'R', 'R': 'T', 'T': 'Y', 'Y': 'U', 'U': 'I', 'I': 'O',
  'O': 'P', 'P': '{', '{': '}', '}': '|', 'A': 'S', 'S': 'D', 'D': 'F', 'F': 'G', 'G': 'H', 'H': 'J',
  'J': 'K', 'K': 'L', 'L': ':', ':': '"', 'Z': 'X', 'X': 'C', 'C': 'V', 'V': 'B', 'B': 'N', 'N': 'M',
  'M': '<', '<': '>', '>': '?', '?': 'A'
};

// Translate text to Vibberish
function translateToVibberish() {
  let inputText = document.getElementById('inputText').value;
  let outputText = '';
  
  for (let char of inputText) {
    if (qwertyShift[char]) {
      outputText += qwertyShift[char];
    } else {
      outputText += char; // Keep non-letter characters unchanged
    }
  }
  
  document.getElementById('outputText').value = outputText;
}

// Translate text from Vibberish to English
function translateToEnglish() {
  let inputText = document.getElementById('inputText').value;
  let outputText = '';
  
  // Reverse the qwertyShift object for translation back to English
  const reverseShift = Object.fromEntries(
    Object.entries(qwertyShift).map(([key, value]) => [value, key])
  );
  
  for (let char of inputText) {
    if (reverseShift[char]) {
      outputText += reverseShift[char];
    } else {
      outputText += char; // Keep non-letter characters unchanged
    }
  }
  
  document.getElementById('outputText').value = outputText;
}
