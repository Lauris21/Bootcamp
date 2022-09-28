const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];

  const withoutDuplicates = [];

  const removeDuplicates = (array) => {
    for (let i = 0; i < array.length; i++) {
        if  (!withoutDuplicates.includes(array[i])) {
            withoutDuplicates.push(array[i]);
        }
    }
    return withoutDuplicates;
  }

  console.log(removeDuplicates(duplicates));