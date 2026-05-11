export function generateJobId(title: string, company: string, existingIds: Set<string>): string {
  const baseId = `${title}-${company}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');

  let newId = baseId;
  let counter = 1;

  while (existingIds.has(newId)) {
    newId = `${baseId}-${counter}`;
    counter++;
  }

  existingIds.add(newId);
  return newId;
}
