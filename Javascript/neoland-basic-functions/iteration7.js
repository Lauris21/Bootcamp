const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
]
  const finderName = (param, value) => {
    if(param.indexOf(value) >= 0) {
        return `True, ${param.indexOf(value)}.`;
    } else {
        return false;
    }
  }

  console.log(finderName(nameFinder, "Logan"));