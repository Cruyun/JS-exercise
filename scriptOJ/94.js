// #94 按下标插入
const injectSections = (items, sections) => {
  sections.sort((a, b) => 
    b.index - a.index
  )
  sections.forEach((i) => {
    items.splice(i.index, 0, i.content)
  })
  return items
}