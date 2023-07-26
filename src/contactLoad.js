
export function load(){
    const contentDiv = document.getElementById("content2");
    const location = document.createElement('h5');
    location.textContent = 'We are located at 1234 Road Avenue';
    contentDiv.appendChild(location);

    const hours = document.createElement('p');
    hours.textContent = 'Hours: M-F 12AM-10PM. Saturday and Sunday 11AM-11PM';
    contentDiv.appendChild(hours);

    const contact = document.createElement('h5');
    contact.textContent = 'Contact Us:';
    contentDiv.appendChild(contact);

    const phone = document.createElement('p');
    phone.textContent = 'Phone: 123-456-7890';
    contentDiv.appendChild(phone);
}
