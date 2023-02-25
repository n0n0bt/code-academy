window.onload = function (){
    let navItems = document.querySelectorAll("#navList li");
    console.log(navItems);
    let images = [".//assets//img//image1.jpg", ".//assets//img//image2.jpg", ".//assets//img//image3.jpg", ".//assets//img//image4.jpg", ".//assets//img//image5.jpg", ".//assets//img//image6.jpg", ".//assets//img//image7.jpg"];
    

    if (document.getElementById("gallery") === null) {
        // document.querySelector("main").innerHTML +=
        // "<section id='gallery'><h2>Gallery</h2></section>";

        document.querySelector("main").innerHTML +=
        `
        <section id='gallery' class= 'd-none'>
        <h2>Gallery</h2>
        </section>
        `;

        images.forEach(element => {
            document.querySelector("#gallery").innerHTML +=
        `
        <img src ="${element}" width="100" height="150" alt="" />`
        });
    }


    navItems.forEach(li => {
        li.addEventListener("click", function () {
            console.log(this.textContent.toLowerCase());
            let sectionID = this.textContent.toLowerCase();
            console.log(document.getElementById("gallery"));

            

            document.querySelectorAll("main section").forEach(sec => {
                if (sec.id === sectionID) {
                    sec.classList.remove("d-none")
                }else{
                if (!sec.classList.contains("d-none")) {
                    sec.classList.add("d-none")
                    }
                }
            });
        })
    })
}
