import filipinoHut from './assets/images/filipinoHut.jpg'

export function loadHome(){
    const contentDiv = document.createElement('div');

    const title = document.createElement('h1');
    title.textContent = 'Welcome to Coco Hut';
    contentDiv.appendChild(title);

    const img = document.createElement('img');
    img.src = filipinoHut;
    img.alt = 'Filipino Hut';
    contentDiv.appendChild(img);

    const description = document.createElement('p');
    description.textContent = 'At Coco Hut, we serve authentic Filipino dishes with fresh, local ingredients.';
    contentDiv.appendChild(description);

    const hours = document.createElement('div');
    hours.innerHTML = `
        <h2>Hours</h2>
        <ul>
            <li>Monday – Friday: 12pm – 7pm</li>
            <li>Saturday: 11am – 7pm</li>
            <li>Sunday: 12pm-5pm</li>
        </ul>
    `;
    contentDiv.appendChild(hours);

    const address = document.createElement('div');
    address.innerHTML = `
        <h2>Location</h2>
        <p>204 W Shell Point Rd<br>Ruskin, FL 33570</p>
    `;
    contentDiv.appendChild(address);

    return contentDiv;

}