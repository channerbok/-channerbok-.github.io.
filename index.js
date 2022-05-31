// JS File  color: #E15D44 ;
let main = document.querySelector('main');
let image = document.createElement('img')
image.src = 'pic4.jpg';
main.append(image);
image.style.width = '100%'
image.style.height = '110%'
image.style.marginTop = "-50px";
image.id = "about";

let image2 = document.createElement('img')
image2.src = 'pic2.jpg';
main.append(image2);
image2.style.width = '100%'
image2.style.height = '110%'
image2.style.marginTop = "-50px";
image2.id = "Experience";
image.className = "Experience";


let image4 = document.createElement('img')
image4.src = 'pic5.jpg';
main.append(image4);
image4.style.width = '100%'
image4.style.height = '110%'
image4.style.marginTop = "-50px";
image4.id = "Projects";
image.className = "Projects";


let image3 = document.createElement('img')
image3.src = 'pic3.jpg';
main.append(image3);
image3.style.width = '100%'
image3.style.height = '110%'
image3.id = "Contact";
image3.className = "Contact";
image3.style.marginTop = '-50px';
image3.style.marginRight = '50px';


let para2 = document.createElement('p');
para2.textContent = 'About me';
para2.style.textAlign = "center";
para2.className = "para2"
main.append(para2);

let para1 = document.createElement('p');
para1.textContent = 'My Experience';
para1.style.textAlign = "center";
para1.className = "para1"
main.append(para1);

let para3 = document.createElement('p');
para3.textContent = 'My Projects';
para3.style.textAlign = "center";
para3.className = "para3"
main.append(para3);

let para4 = document.createElement('p');
para4.textContent = 'Contact me';
para4.style.textAlign = "center";
para4.className = "para4"
main.append(para4);



