/* Library Picture*/
let main = document.querySelector("main");
let image = document.createElement("img");
image.src = "pic4.jpg";
main.append(image);
image.style.width = "100%";
image.style.height = "110%";
image.style.marginTop = "-50px";
image.id = "about";
image.style.backgroundSize = "contain";

/* Road Picture*/
let image2 = document.createElement("img");
image2.src = "pic2.jpg";
main.append(image2);
image2.style.width = "100%";
image2.style.height = "110%";
image2.style.marginTop = "-50px";
image2.id = "Experience";
image2.className = "Experience";
image2.style.backgroundSize = "contain";

/*Sticky Note Picture*/
let image4 = document.createElement("img");
image4.src = "pic5.jpg";
main.append(image4);
image4.style.width = "100%";
image4.style.height = "110%";
image4.style.marginTop = "-50px";
image4.id = "Projects";
image.className = "Projects";
image4.style.backgroundSize = "contain";

/*Keyboard Picture*/
let image3 = document.createElement("img");
image3.src = "pic3.jpg";
main.append(image3);
image3.style.width = "100%";
image3.style.height = "110%";
image3.id = "Contact";
image3.className = "Contact";
image3.style.marginTop = "-50px";
image3.style.marginRight = "50px";
image3.style.backgroundSize = "contain";

/* Experience me Page Title*/
let experience_body = document.createElement("p");
experience_body.textContent = "My Experience";
experience_body.style.textAlign = "center";
experience_body.className = "experience_body";
main.append(experience_body);

/* About me Page Title*/
let about_body = document.createElement("p");
about_body.textContent = "About me";
about_body.style.textAlign = "center";
about_body.className = "about_body";
main.append(about_body);

/* Project me Page Title*/
let projects_body = document.createElement("p");
projects_body.textContent = "My Projects";
projects_body.className = "projects_body";
main.append(projects_body);

/* Contact me Page Title*/
let contact_body = document.createElement("p");
contact_body.textContent = "Contact me";
contact_body.style.textAlign = "center";
contact_body.className = "contact_body";
main.append(contact_body);

/* Contact Message*/
let email_body = document.createElement("p");
email_body.textContent =
  "Please send all communications to channerbok@gmail.com or utilize the form below";
email_body.style.textAlign = "center";
email_body.className = "email_body";
email_body.style.borderRadius = "20%";
main.append(email_body);
