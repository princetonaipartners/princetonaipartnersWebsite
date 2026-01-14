# Claude Code Slash Commands

This folder contains custom slash commands for AI-assisted development.

## Available Commands

| Command | Description |
|---------|-------------|
| `/ui` | **UI Development Agent** - Comprehensive UI workflow with design intelligence |
| `/component` | Generate new React components following project patterns |
| `/page` | Create new Next.js pages with proper structure |
| `/api-route` | Generate API route handlers |
| `/test` | Generate Playwright tests |
| `/lint` | Run linting and formatting checks |
| `/review` | Pre-commit code review |

---

## `/ui` - UI Development Agent

The most comprehensive command for frontend work. Activates a UI-focused agent with:

### Capabilities
- **Design System Awareness** - Knows all color tokens, typography, spacing
- **Component Library** - Inventory of 70+ existing components
- **Modern Trends** - Current UI patterns (2024-2025)
- **Browser Preview** - Live screenshots during development
- **Consistency Checking** - Ensures visual coherence

### Usage
```
/ui
```

Then describe what you want to build. The agent will:
1. Load project context (UI-SYSTEM.md, tailwind.config.ts)
2. Query Memory MCP for inspiration/trends
3. Set up browser preview if needed
4. Implement with design intelligence
5. Verify visual consistency

### Dependencies
- `.rebrand/context/UI-SYSTEM.md` - Project-specific design rules
- Memory MCP - Universal UI knowledge (trends, references)
- Browser automation - For live previews

---

## Reusing This System on Other Projects

### Step 1: Copy Core Files
```bash
# Copy slash commands
cp -r .claude/commands/ /path/to/new-project/.claude/commands/

# Copy UI system template
cp .rebrand/context/UI-SYSTEM.md /path/to/new-project/docs/UI-SYSTEM.md
```

### Step 2: Customize UI-SYSTEM.md
Update for the new project:
- Brand colors and tokens
- Typography choices
- Component inventory
- Specific patterns

### Step 3: Configure MCP
Add to new project's `.mcp.json`:
```json
{
  "mcpServers": {
    "memory": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-memory"],
      "description": "Persistent UI knowledge across sessions"
    }
  }
}
```

The Memory MCP stores **universal** UI knowledge (trends, references, best practices) that works across all projects.

### Step 4: Project-Specific Memory
Add project-specific entities:
```
mcp__memory__create_entities with project colors, components, etc.
```

---

## Architecture

```
┌────────────────────────────────────────────┐
│           /ui Slash Command                │
│  (Entry point - loads everything)          │
├────────────────────────────────────────────┤
│         UI-SYSTEM.md (Per-Project)         │
│  - Brand colors, typography                │
│  - Component inventory                     │
│  - Project-specific patterns               │
├────────────────────────────────────────────┤
│       Memory MCP (Universal)               │
│  - UI-Inspiration-Sites                    │
│  - UI-Component-Libraries                  │
│  - UI-Trends-2024-2025                     │
│  - UI-Premium-Indicators                   │
│  - UI-Animation-Best-Practices             │
├────────────────────────────────────────────┤
│       Browser Automation                   │
│  - Live preview                            │
│  - Screenshots                             │
│  - Visual verification                     │
└────────────────────────────────────────────┘
```

---

## Maintaining the System

### Updating Trends
Memory MCP entities can be updated:
```
mcp__memory__add_observations({
  entityName: "UI-Trends-2024-2025",
  contents: ["NEW TREND: description"]
})
```

### Adding References
```
mcp__memory__add_observations({
  entityName: "UI-Inspiration-Sites",
  contents: ["New Site (url) - description"]
})
```

### Querying Knowledge
```
mcp__memory__search_nodes({ query: "trends" })
mcp__memory__open_nodes({ names: ["UI-Premium-Indicators"] })
```

---

**Created**: 2026-01-14
**Version**: 1.0
