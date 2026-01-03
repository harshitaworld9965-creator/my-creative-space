import fs from "fs";
import path from "path";
import matter from "gray-matter";

const writingsDirectory = path.join(process.cwd(), "content/writings");

export function getAllWritings() {
  const files = fs.readdirSync(writingsDirectory);

  return files.map((file) => {
    const fullPath = path.join(writingsDirectory, file);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(fileContents);

    return {
      slug: file.replace(".md", ""),
      title: data.title,
      date: data.date,
      content,
    };
  });
}
