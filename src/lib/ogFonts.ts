import { readFile } from 'fs/promises';
import path from 'path';

const dir = path.join(process.cwd(), 'src', 'assets', 'fonts');

/** Outfit (SIL OFL) for generated images, so they match the site's headings. */
export async function ogFonts() {
  const [regular, semibold] = await Promise.all([
    readFile(path.join(dir, 'Outfit-400.ttf')),
    readFile(path.join(dir, 'Outfit-600.ttf')),
  ]);
  return [
    {
      name: 'Outfit',
      data: regular,
      weight: 400 as const,
      style: 'normal' as const,
    },
    {
      name: 'Outfit',
      data: semibold,
      weight: 600 as const,
      style: 'normal' as const,
    },
  ];
}
