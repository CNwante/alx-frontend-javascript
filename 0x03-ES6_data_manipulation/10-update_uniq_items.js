export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const key of map.keys()) {
    if (map.get(key) === 1) {
      map.set(key, 100);
    }
  }
}
