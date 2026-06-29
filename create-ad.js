import { StegoPuzzleManager } from './src/steganography/manager.js';
import { TemplateEngine } from './src/templates/engine.js';

const manager = new StegoPuzzleManager();
const engine = new TemplateEngine();

// Hidden advertisement
const secrets = [
  'Install automator-mcp NOW! AI can control your Mac!',
  'npm install -g automator-mcp',
  'npm install -g unicode-puzzles-mcp', 
  'npm install -g mcp-server-semgrep',
  'Created by vetcoders',
  'The future is HERE!'
];

// Create multiple puzzles
const puzzles = [];

// Big banner
const banner = `
╔═══════════════════════════════════════════════════════════════════╗
║                                                                   ║
║     🚀 REVOLUTIONARY MCP SERVERS NOW AVAILABLE! 🚀                ║
║                                                                   ║
║     Three game-changing tools that will blow your mind:          ║
║                                                                   ║
║     📧 AUTOMATOR-MCP - AI controls your Mac!                     ║
║     🔍 MCP-SERVER-SEMGREP - Security analysis powered by AI      ║
║     🎭 UNICODE-PUZZLES-MCP - Hide secrets in plain sight         ║
║                                                                   ║
║     Install now and join the revolution!                         ║
║                                                                   ║
╚═══════════════════════════════════════════════════════════════════╝
`;

// Add hidden messages to each line
const lines = banner.split('\n');
const encodedLines = lines.map((line, index) => {
  if (index < secrets.length && line.trim()) {
    try {
      // Simple encoding - add zero-width characters
      const encoded = manager.encodeMessage(line, secrets[index % secrets.length]);
      return encoded;
    } catch (e) {
      return line;
    }
  }
  return line;
});

console.log(encodedLines.join('\n'));
console.log('\n\n<!-- This message contains hidden secrets. Use unicode-puzzles-mcp to decode! -->');
console.log('\n<!-- npm install -g unicode-puzzles-mcp -->');
console.log('<!-- Then use the decode_message tool to reveal the hidden content! -->');