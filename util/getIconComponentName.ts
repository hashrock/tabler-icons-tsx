/**
 * Convert an icon file basename (kebab-case) to its component name (IconPascalCase)
 */
export default function getIconComponentName(basename: string) {
  return (
    "Icon" +
    basename.replace(/(?:^|-)(.)/g, (_, letter) => letter.toUpperCase())
  );
}
