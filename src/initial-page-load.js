export function pageLoad(){
    const contentDiv = document.querySelector("#content");

    const header = document.createElement('h1');
    header.textContent = "Welcome to Drew's Rockin Pizza Tavern";
    contentDiv.appendChild(header);

    const img = document.createElement('img');
    img.src = "../src/assets/pizza-image.avif";
    img.classList.add("bgImage");
    contentDiv.appendChild(img);

    const text = document.createElement('p');
    text.innerText = "This is the most wonderful and delectable establishment in the greater Antarctic area.";
    contentDiv.appendChild(text);
}