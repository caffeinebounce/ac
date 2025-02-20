# AutoClose Extension

AutoClose is a lightweight VS Code extension designed to automatically close unwanted terminals on startup. It helps streamline your workspace by ensuring only your preconfigured terminals remain open.

## Features

- **Automatic Terminal Management:** Kills terminals that match a specified pattern (e.g., containing "zsh") after a short delay.
- **Real-Time Monitoring:** Listens for new terminal creations and closes those that meet your criteria.
- **Fast and Efficient:** Built with esbuild for minimal configuration and quick activation.

## Installation

1. Package the extension using the VSCE tool:

```bash
  vsce package
```

2. Install the resulting .vsix file by opening the Extensions view in VS Code, clicking the three-dot menu, and selecting Install from VSIX….
3. Reload VS Code to activate the extension.

## Usage

Once installed, the extension automatically activates on startup (based on the activation event specified in package.json). It will close any terminal whose name contains “zsh” after a brief delay. To modify the behavior, adjust the filtering logic or delay in the source code (src/extension.ts) and recompile.

## Known Issues

• If terminals are created too early in the startup sequence, they might not be closed. You can adjust the delay in the code to better match your workflow.

## Release Notes

• 1.0.0: Initial release of AutoClose Extension.
