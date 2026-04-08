const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

//const content = document.createElement("div");
const para = document.createElement("p")
para.textContent = "Hey! I am red";
para.style.color = "red";
content.appendChild(para);

const head=document.createElement("h3");
head.textContent="I’m a blue h3!";
head.style.color="blue";
content.appendChild(head);

container.appendChild(content);


const black =document.createElement("div");
black.style.backgroundColor="pink";
black.style.border="1px solid black";

const header=document.createElement("h1");
header.textContent="I’m in a div";
black.appendChild(header);
const paraa=document.createElement("p");
paraa.textContent="ME TOO!";
black.appendChild(paraa);

container.appendChild(black);





