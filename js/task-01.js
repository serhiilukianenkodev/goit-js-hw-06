const categoriesListEl = document.querySelector('#categories');
const children = categoriesListEl.children;
const childrenAmount = children.length;

console.log(`Number of categories: ${childrenAmount}`);

for (const elem of children) {
    const category = elem.firstElementChild.textContent;
    const elementsAmount = elem.lastElementChild.children.length;

    // console.log('');
    console.log(`Category: ${category}`);
    console.log(`Elements: ${elementsAmount}`);
};
