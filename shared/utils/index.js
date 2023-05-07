export const searchByMateria = (list, materia) => {
  const finded = [];
  list.forEach(item => {
    if (item.materia == materia) {
      finded.push(item);
    }
  });
  console.log(finded)
  return finded;
}