const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

// add todo
const generateTemplate = toDo => {
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${toDo}</span>                
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;
    
    list.innerHTML += html;
};

addForm.addEventListener('submit', e => {
    e.preventDefault();

    const toDo = addForm.add.value.trim();

    if(toDo.length) {
        generateTemplate(toDo);
        addForm.reset();    
    }
});

// delete todo
list.addEventListener('click', e => {
    e.preventDefault();
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

// keyup event
const filterTodo = term => {
    Array.from(list.children)
        .filter(toDo => !toDo.textContent.toLowerCase().includes(term))
        .forEach(toDo => toDo.classList.add('filtered'));

    Array.from(list.children)
        .filter(toDo => toDo.textContent.toLowerCase().includes(term))
        .forEach(toDo => toDo.classList.remove('filtered'));
};

search.addEventListener('keyup', e => {
    e.preventDefault();

    const term = search.value.trim().toLowerCase();

    filterTodo(term);
});



























