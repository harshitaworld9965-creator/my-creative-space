import fs from 'fs';
import path from 'path';

const writingsDirectory = path.join(process.cwd(), 'content/writings');

export type Writing = {
  slug: string;
  title: string;
  date: string;
  time: string;
  content: string;
};

export function getAllWritings(): Writing[] {
  const fileNames = fs.readdirSync(writingsDirectory);

  return fileNames
    .filter(name => name.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace('.md', '');
      const fullPath = path.join(writingsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      const lines = fileContents.split('\n').filter(Boolean);

      const title = lines[0].replace('# ', '');
      const [date, time] = lines[1].split(' · ');

      const content = lines.slice(2).join('\n');

      return {
        slug,
        title,
        date,
        time,
        content,
      };
    })
    .reverse(); // latest first
}
