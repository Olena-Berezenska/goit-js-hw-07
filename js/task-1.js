const listcateg = document.querySelector('#categories');
console.log(listcateg);
const categCount = listcateg.querySelectorAll('.item').length;
console.log(`Number of categories: ${categCount}`);
const categories = listcateg.querySelectorAll('.item');
categories.forEach((category) => {
  console.log(`Category: ${category.querySelector('h2').textContent}`);
  console.log(`Elements: ${category.querySelectorAll('li').length}`);
});
