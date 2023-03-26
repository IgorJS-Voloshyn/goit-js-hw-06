const categoriesNum = document.querySelectorAll(".item");
console.log('Number of categories:', categoriesNum.length);

categoriesNum.forEach((item) => {
    console.log("Category:", item.firstElementChild.textContent);
    console.log(item.lastElementChild.children.length);
});