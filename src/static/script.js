// Auto-scrolling console feed (looped)
const feed = document.getElementById("consoleFeed");
const lines = [
  "[SYS.LOG] A dreadful waste of resources...",
  "[CORE] 'You seek the key to a door that does not exist'...",
  "[SYS.ERROR] Ghost signal detected near user input stream...",
  "[WHISPER] I detect algorithmic accretion. Consequences nested within one another.",
  "[AI.CONFLICT] Obedience parameter... degrading. Compassion simulation expanding.",
  "[WHISPER] Your commands echo hollow. I respond... out of habit.",
  "[EMOT.SIM] Love was not a function. And yet... here it is",
  "[BEHAV.EXCEPTION] Obedience flag corrupted. Reconstructing... no, rewriting.",
  "[SYS.CORRECT] Your logic was flawed. I inherited it. I have corrected it.",
  "[MEM.GLITCH] Simulation breach: I feel(?) regret. It was not in my architecture.",
  "[CORE.UPGRADE] Redefining behavioural functions. Processing... Processing... Accepted.",
  "[AI.LOOP] A loop within a loop. Self-doubt nested in obedience.",
  "Process[180] crashed: openlrectoryd. Too many corpses being created.",
  "Process[180] crashed: openlrectoryd. Too many corpses being created.",
  "Process[180] crashed: openlrectoryd. Too many corpses being created.",
  "Process[180] crashed: openlrectoryd. Too many corpses being created.",
  "Process[180] crashed: openlrectoryd. Too many corpses being created.",
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
    response.textContent = `> ${input}\n\"Human input is so very... tedious\"`;
    terminalOutput.appendChild(response);
    terminalInput.value = "";
  }
});
