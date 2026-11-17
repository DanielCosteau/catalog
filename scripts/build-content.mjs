import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";

const contentDir = path.join(process.cwd(), "content", "site");
const outDir = path.join(process.cwd(), "lib", "generated");

fs.mkdirSync(outDir, { recursive: true });

const files = fs.readdirSync(contentDir).filter(f => f.endsWith(".yml"));

for (const file of files) {
  const name = path.basename(file, ".yml");
  const source = fs.readFileSync(path.join(contentDir, file), "utf8");
  const data = yaml.load(source);
  
  const tsContent = `// Auto-generated from content/site/${file}
// Do not edit manually — run \`npm run build:content\` to regenerate
  
export const ${name} = ${JSON.stringify(data, null, 2)} as const;
`;
  
  fs.writeFileSync(path.join(outDir, `${name}.ts`), tsContent);
  console.log(`✓ Generated lib/generated/${name}.ts`);
}
