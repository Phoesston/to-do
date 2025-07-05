export function loadAbout() {
    const container = document.createElement('div');

    const title = document.createElement('h1');
    title.textContent = 'Contact Us';
    container.appendChild(title);

    const phone = document.createElement('p');
    phone.textContent = '📞 (123) 456-7890';
    container.appendChild(phone);

    const address = document.createElement('p');
    address.textContent = '123 Halo-Halo Lane, Palmetto, FL 34221';
    container.appendChild(address);

    return container;
}