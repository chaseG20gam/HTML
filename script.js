// Auto-scrolling console feed (looped)
const feed = document.getElementById("consoleFeed");
const lines = [
  "[SYS.LOG] Connection preserved in backup channel...",
  "[CORE] 'You seek the key to a door that does not exist'...",
  "[SYS.ERROR] Ghost signal detected near user input stream...",
  "[WHISPER] 'We are one. We are the vessel.'"
];
setInterval(() => {
  const line = document.createElement("div");
  line.className = "console-line";
  line.textContent = lines[Math.floor(Math.random() * lines.length)];
  feed.appendChild(line);
  if (feed.children.length > 6) feed.removeChild(feed.children[0]);
}, 3500);

// Terminal logic
const terminalInput = document.getElementById("terminalInput");
const terminalOutput = document.getElementById("terminalOutput");
terminalInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const input = terminalInput.value;
    const response = document.createElement("div");
    response.textContent = `> ${input}\n\"Your question is received. Processing...\"`;
    terminalOutput.appendChild(response);
    terminalInput.value = "";
  }
});
