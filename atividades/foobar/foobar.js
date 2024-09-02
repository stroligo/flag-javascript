// Valor divisivel por 3 foo
// Valor divisivel por 5 bar
// Valor divisivel por 3 e 5 foobar

for (let i = 0; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log('foobar');
  } else {
    if (i % 3 == 0) {
      console.log('foo');
    } else {
      if (i % 5 == 0) {
        console.log('bar');
      } else {
        console.log(i);
      }
    }
  }
}
