# 🌌 UNICODE PUZZLES DEMO

## ⚠️ NOTE: Zero-width characters are invisible in a terminal!
## 👉 Open this file in a text editor or browser to see the effect!

## 🎯 Original Message
```
HELLO WORLD EXAMPLE
```

## 🔐 Hidden Secret
```
Mascot approves this message!
```

---

## 🌟 QUANTUM ENCODING

### Easy:
【𝚀𝚄𝙰𝙽𝚃𝚄𝙼】∎H⠀E⠀L⠀L⠀O⠀ ⠀W⠀O⠀R⠀L⠀D∎

### Medium:
【𝚀𝚄𝙰𝙽𝚃𝚄𝙼】∎∎H​‌‍α⠀E​‌‍β⠀L​‌‍γ⠀L​‌‍δ⠀O​‌‍ψ⠀ ​‌‍Ψ⠀W​‌‍Φ⠀O​‌‍ℏ⠀R​‌‍∞⠀L​‌‍α⠀D​‌‍β∎∎

### Hard:
【𝚀𝚄𝙰𝙽𝚃𝚄𝙼】∎∎∎H​‌‍‎‏α⠀E​‌‍‎‏β⠀L​‌‍‎‏γ⠀L​‌‍‎‏δ⠀O​‌‍‎‏ψ⠀ ​‌‍‎‏Ψ⠀W​‌‍‎‏Φ⠀O​‌‍‎‏ℏ⠀R​‌‍‎‏∞⠀L​‌‍‎‏α⠀D​‌‍‎‏β∎∎∎

---

## ◉ ORBITAL ENCODING

### Easy:
◉◯H·E·L·L·O· ·W·O·R·L·D◯◉

### Medium:
◉◐H​‌‍⌾∘E​‌‍☉∘L​‌‍⊕∘L​‌‍⊗∘O​‌‍⊙∘ ​‌‍◎∘W​‌‍⚪∘O​‌‍⚫∘R​‌‍⌾∘L​‌‍☉∘D​‌‍⊕◑◉

### Hard:
◉◒H​‌‍‎‏⌾⋅E​‌‍‎‏☉⋅L​‌‍‎‏⊕⋅L​‌‍‎‏⊗⋅O​‌‍‎‏⊙⋅ ​‌‍‎‏◎⋅W​‌‍‎‏⚪⋅O​‌‍‎‏⚫⋅R​‌‍‎‏⌾⋅L​‌‍‎‏☉⋅D​‌‍‎‏⊕◓◉

---

## 💥 GLITCH ENCODING

### Easy:
[ERR0R]█H E L L O   W O R L D█

### Medium:
[ERR0R]▓▒H​‌‍░E​‌‍▒L​‌‍▓L​‌‍█O​‌‍☐ ​‌‍☑W​‌‍☒O​‌‍✓R​‌‍✗L​‌‍░D​‌‍▒▒▓

### Hard:
[ERR0R]▓▒░H​‌‍‎‏░E​‌‍‎‏▒L​‌‍‎‏▓L​‌‍‎‏█O​‌‍‎‏☐ ​‌‍‎‏☑W​‌‍‎‏☒O​‌‍‎‏✓R​‌‍‎‏✗L​‌‍‎‏░D​‌‍‎‏▒░▒▓

---

## ✨ VOID ENCODING

### Easy:
✧･ﾟ:*⋆H E L L O   W O R L D⋆*:･ﾟ✧

### Medium:
✧･ﾟ:*⋆⋆H​‌‍✧･E​‌‍✦･L​‌‍★･L​‌‍☆･O​‌‍✯･ ​‌‍✩･W​‌‍✫･O​‌‍✬･R​‌‍✭･L​‌‍✧･D​‌‍✦⋆⋆*:･ﾟ✧

### Hard:
✧･ﾟ:*⋆⋆⋆H​‌‍‎‏✧⋆E​‌‍‎‏✦⋆L​‌‍‎‏★⋆L​‌‍‎‏☆⋆O​‌‍‎‏✯⋆ ​‌‍‎‏✩⋆W​‌‍‎‏✫⋆O​‌‍‎‏✬⋆R​‌‍‎‏✭⋆L​‌‍‎‏✧⋆D​‌‍‎‏✦⋆⋆⋆*:･ﾟ✧

---

## 🔍 How to Decode

```javascript
// Copy any of the encoded messages above
const encodedMessage = "【𝚀𝚄𝙰𝙽𝚃𝚄𝙼】∎∎H​‌‍α⠀E​‌‍β⠀L​‌‍γ⠀L​‌‍δ⠀O​‌‍ψ⠀ ​‌‍Ψ⠀W​‌‍Φ⠀O​‌‍ℏ⠀R​‌‍∞⠀L​‌‍α⠀D​‌‍β∎∎";

// Use unicode-puzzles-mcp to decode
const decoded = await decodePuzzle(encodedMessage);
console.log("Visible:", decoded.visibleText);  // "HELLO WORLD EXAMPLE"
console.log("Hidden:", decoded.hiddenMessage);  // "Mascot approves this message!"
```

## 🎯 Try It Yourself!

1. Copy any encoded message above
2. Paste it anywhere - the hidden message travels with it!
3. Use unicode-puzzles-mcp to reveal the secret

## 🚀 Fun Facts

- The encoded messages contain **invisible zero-width Unicode characters**
- These characters survive copy/paste, emails, chats, and social media
- Each template uses different encoding patterns and visual styles
- The harder the difficulty, the more noise and complexity added

## 🎨 Demo Special Edition

As tribute to the mascot, here's a special encoded message:

```
【𝚀𝚄𝙰𝙽𝚃𝚄𝙼】∎∎∎ HELLO WORLD ∎∎∎
```

Hidden inside: GPS coordinates to a secret location! 🗺️

---

*Generated with unicode-puzzles-mcp v0.1.0*