# groundwork

A Claude Code skill that scaffolds and maintains a reusable
**research → design → plan → orchestrate → act** folder for any non-trivial
work — software features, marketing campaigns, org changes.

It drops a domain-agnostic spine (`00-README` · `01-plan` · `02/03` research ·
`04-discussion` newest-first · `05-tracking` · `09-orchestration` · a
standalone `artifact/board.html` plan-board) plus stateless action-skills that
augment the docs in place without clobbering hand-written prose. Profile-driven:
`software` (rich default, code work), `general` (lean, non-code — campaigns,
org changes), `content` (editorial/marketing with key art), and `design-system`
(component/token systems).

> **This repo is a generated mirror.** The canonical source lives in
> `royalti-io/ikenga-pkgs` at `packages/skills/groundwork/` (ADR-009). Do not
> edit files here — they are overwritten by the mirror build.

## Install

### `npx skills` (recommended)

The [`skills`](https://skills.sh) CLI works with Claude Code, Codex, Gemini,
Cursor, OpenCode, and 70+ other agents.

```bash
# Global install (recommended — available across all projects)
npx skills add royalti-io/groundwork -g

# Project install (committed with your repo, shared with team)
npx skills add royalti-io/groundwork
```

### Git clone

```bash
git clone https://github.com/royalti-io/groundwork.git
cp -r groundwork/skills/groundwork ~/.claude/skills/
```

### Curl one-liner

```bash
curl -sSL https://raw.githubusercontent.com/royalti-io/groundwork/main/install.sh | bash
```

The installer drops the skill into `~/.claude/skills/groundwork/` via symlink
against a cached clone in `~/.cache/ikenga-skills/`, so `git pull` is the
update path.

## Usage

After install, in any Claude Code session:

```
/groundwork init plans/<your-plan>/ --profile software --goal "…"
```

then `research` / `design` / `review` / `orchestrate` / `refresh-board` as the
work progresses. See [`skills/groundwork/SKILL.md`](skills/groundwork/SKILL.md)
for the full agent-facing spec.

## Portability

A few references in the docs and the standalone board point at this-workspace
example paths (`plans/studio` / `plans/groundwork`). They are illustrative; see
[`skills/groundwork/PORTABILITY.md`](skills/groundwork/PORTABILITY.md).

## License

[Apache-2.0](LICENSE). Copyright © 2026 Royalti.io.
