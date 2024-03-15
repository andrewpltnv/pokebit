export function upperCaseName(name: string) {
  return name[0].toUpperCase() + name.slice(1)
}

export function faviconHref(id: number) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${id}.gif`
}
