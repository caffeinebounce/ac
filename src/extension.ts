import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  // Delay execution to ensure all terminals have been created
  setTimeout(() => {
    // Iterate over all open terminals
    vscode.window.terminals.forEach((terminal) => {
      // Check if the terminal's name indicates it is a zsh terminal
      if (terminal.name.toLowerCase().includes("zsh")) {
        terminal.dispose();
        console.log(`Killed terminal: ${terminal.name}`);
      }
    });
  }, 3000); // Delay in milliseconds - adjust as needed
}

export function deactivate() {}
