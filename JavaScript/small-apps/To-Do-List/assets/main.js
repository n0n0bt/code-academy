window.addEventListener(
   "load",
   function (e) {
      const jArray = JSON.parse(localStorage.getItem("todos"));
      console.log(jArray);
      jArray.forEach((p) => {
         createToDO(p.text, p.classes);
      });

      let addToButton = document.getElementById("addToDo");
      addToButton.addEventListener("click", function (e) {
         createToDO(document.getElementById("inputField").value, {
            0: "paragraph-styling",
         });
      });
   },
   false
);

function createToDO(text, classes) {
   console.log("test");
   let paragraph = document.createElement("p");
   paragraph.classList.add(...Object.values(classes));
   paragraph.innerText = text;

   document.getElementById("toDoContainer").appendChild(paragraph);
   document.getElementById("inputField").value = "";

   paragraph.addEventListener("click", function () {
      console.log(paragraph.style.textDecoration);
      if (paragraph.classList.contains("l-through")) {
         paragraph.classList.remove("l-through");
      } else {
         paragraph.classList.add("l-through");
      }
   });

   paragraph.addEventListener("dblclick", function () {
      document.getElementById("toDoContainer").removeChild(paragraph);
   });
}

window.addEventListener(
   "beforeunload",
   function (e) {
      const paragraphs = document.querySelectorAll("#toDoContainer p");
      let paragraphsArr = [];
      paragraphs.forEach((p) => {
         let text = p.textContent;
         let classes = p.classList;
         let jOject = {
            text: text,
            classes: classes,
         };

         paragraphsArr.push(jOject);
      });

      localStorage.setItem("todos", JSON.stringify(paragraphsArr));
   },
   false
);
