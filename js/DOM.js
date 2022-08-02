console.log("DOM")
console.log(window);
//addEventListener слушатель собитий

//GET HTML tags
console.log(document)// ===window.document


//to 1 tags
const body = document.querySelector('body')
console.log('body', body);


const x = document.querySelector('body li')//знайде перший попавший селектор лі
console.log(x)

// const item = document.getElementById('currentItam');


//to group of tags
const item = document.querySelectorAll('li');
console.log('items', item)


//properties
console.dir(body)
body.style.backgroundColor = 'red'