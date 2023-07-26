export function homePageLoad(){

    const contentDiv = document.querySelector("#content2");
    const img = document.createElement('img');
    img.src = "../src/assets/pizza-image.avif";
    img.classList.add("bgImage");
    contentDiv.appendChild(img);

    const text = document.createElement('p');
    text.innerText = "This is the most wonderful and delectable establishment in the greater Antarctic area.";
    contentDiv.appendChild(text);
}