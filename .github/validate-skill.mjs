// CI smoke: assert the repo still satisfies what `npx skills add royalti-io/groundwork`
// needs to resolve — the flat `skills/<name>/SKILL.md` layout plus `name` + `description`
// frontmatter. Pure stdlib, no install, no network. Keeps the install invariant honest.
import { readFileSync, existsSync } from 'node:fs';

const fail = (m) => { console.error('✗ ' + m); process.exitCode = 1; };

const SKILL = 'skills/groundwork/SKILL.md';
if (!existsSync(SKILL)) {
	fail(`${SKILL} missing — npx skills add would not resolve`);
} else {
	const md = readFileSync(SKILL, 'utf8');
	const fm = md.match(/^---\n([\s\S]*?)\n---/);
	if (!fm) fail('SKILL.md has no YAML frontmatter');
	else {
		for (const key of ['name', 'description']) {
			if (!new RegExp(`^${key}:\\s*\\S`, 'm').test(fm[1]))
				fail(`SKILL.md frontmatter missing required field: ${key}`);
		}
	}
}

try {
	JSON.parse(readFileSync('package.json', 'utf8'));
} catch (e) {
	fail(`package.json does not parse: ${e.message}`);
}

if (!process.exitCode) {
	console.log('✓ skills/groundwork/SKILL.md resolves (name + description, flat layout); package.json parses.');
}
