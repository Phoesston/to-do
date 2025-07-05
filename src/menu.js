export function loadMenu(){
    const container = document.createElement('div');

    const title = document.createElement('h1');
    title.textContent = 'Menu';
    container.appendChild(title);

    const list = document.createElement('ul');
    ['Adobo', 'Sinigang', 'Lechon Kawali', 'Halo-Halo'].forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    });

    container.appendChild(list);
    return container;
}