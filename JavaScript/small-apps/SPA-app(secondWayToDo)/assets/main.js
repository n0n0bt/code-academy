window.onload = function () {
    const navLinks = document.querySelectorAll("#navList li");
    createHomePage();

    navLinks.forEach(link => {
        link.addEventListener("click", pageLoad);
    });
}

function pageLoad() {
    switch (this.textContent) {
        case "Home":
            createHomePage(this);
            break;
        case "About":
            createAboutPage(this);
            break;
        case "Gallery":
            createGalleryPage(this);
            break;
        case "Contact":
            createContactPage(this);
            break;
        default:
            break;
    }
}

function createHomePage(li) {
    if (li !== undefined) {
        document.querySelectorAll("#navList li").forEach(item => {
            if (item.classList.contains("active")) {
                item.classList.remove("active");
            }
        });
        li.classList.add("active");
    }

    document.querySelector("main").innerHTML =
        `
            <section id="home" class="text-white text-center">
                <div class="bg-home"></div>
                <h1>SPA APP</h1>
                <p>Vanilla JavaScript single-page application for practice and improvment of the skills needed to be an excellent
                    web developer</p>
                    <button>Contact us...</button>
            </section>
        `;
}

function createAboutPage(li) {
    document.querySelectorAll("#navList li").forEach(item => {
        if (item.classList.contains("active")) {
            item.classList.remove("active");
        }
    })
    li.classList.add("active");

    document.querySelector("main").innerHTML =
        `
        <section id="about">
            <div class="bg-page"></div>
            <h2>ABOUT</h2>
            <div class="page-container">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel fugiat aspernatur at, soluta, nam quaerat sapiente voluptatem placeat temporibus facere deserunt ea itaque expedita porro. Ipsum dignissimos autem veritatis voluptate repellendus natus sapiente, mollitia, error pariatur voluptates tenetur harum quisquam, earum nostrum voluptatum consectetur a exercitationem. In consequuntur, voluptatibus hic eveniet molestias harum fugiat laborum! Repudiandae velit ab mollitia quidem nihil quasi laborum voluptatum sequi at, ut odit alias, dolorem maxime aut, placeat iusto provident. Dolor numquam, pariatur possimus esse corporis nostrum culpa dicta beatae labore quaerat excepturi ducimus sapiente quisquam. Excepturi aspernatur distinctio ipsam enim, accusantium quisquam, in porro itaque magni ad nisi et reiciendis architecto corporis qui eos voluptatibus. Quas repellat, reprehenderit voluptates perspiciatis natus nemo assumenda consectetur quos officiis exercitationem ex sapiente atque nam reiciendis dolore in facere, obcaecati aliquam dolor necessitatibus fugiat. Ratione nulla maxime corrupti, blanditiis tempora at obcaecati maiores assumenda magnam provident odio fugit expedita asperiores, dignissimos architecto pariatur perferendis, beatae nobis qui laborum. Molestias sit praesentium facilis laboriosam ut aut obcaecati quia saepe veritatis suscipit assumenda, consequatur laborum, culpa error quasi vel odio quis at voluptatibus perferendis iste magnam ab ullam quas. Accusantium voluptate voluptatem enim error ipsam molestiae unde, quos nesciunt sunt?</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel fugiat aspernatur at, soluta, nam quaerat sapiente voluptatem placeat temporibus facere deserunt ea itaque expedita porro. Ipsum dignissimos autem veritatis voluptate repellendus natus sapiente, mollitia, error pariatur voluptates tenetur harum quisquam, earum nostrum voluptatum consectetur a exercitationem. In consequuntur, voluptatibus hic eveniet molestias harum fugiat laborum! Repudiandae velit ab mollitia quidem nihil quasi laborum voluptatum sequi at, ut odit alias, dolorem maxime aut, placeat iusto provident. Dolor numquam, pariatur possimus esse corporis nostrum culpa dicta beatae labore quaerat excepturi ducimus sapiente quisquam. Excepturi aspernatur distinctio ipsam enim, accusantium quisquam, in porro itaque magni ad nisi et reiciendis architecto corporis qui eos voluptatibus. Quas repellat, reprehenderit voluptates perspiciatis natus nemo assumenda consectetur quos officiis exercitationem ex sapiente atque nam reiciendis dolore in facere, obcaecati aliquam dolor necessitatibus fugiat. Ratione nulla maxime corrupti, blanditiis tempora at obcaecati maiores assumenda magnam provident odio fugit expedita asperiores, dignissimos architecto pariatur perferendis, beatae nobis qui laborum. Molestias sit praesentium facilis laboriosam ut aut obcaecati quia saepe veritatis suscipit assumenda, consequatur laborum, culpa error quasi vel odio quis at voluptatibus perferendis iste magnam ab ullam quas. Accusantium voluptate voluptatem enim error ipsam molestiae unde, quos nesciunt sunt?</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel fugiat aspernatur at, soluta, nam quaerat sapiente voluptatem placeat temporibus facere deserunt ea itaque expedita porro. Ipsum dignissimos autem veritatis voluptate repellendus natus sapiente, mollitia, error pariatur voluptates tenetur harum quisquam, earum nostrum voluptatum consectetur a exercitationem. In consequuntur, voluptatibus hic eveniet molestias harum fugiat laborum! Repudiandae velit ab mollitia quidem nihil quasi laborum voluptatum sequi at, ut odit alias, dolorem maxime aut, placeat iusto provident. Dolor numquam, pariatur possimus esse corporis nostrum culpa dicta beatae labore quaerat excepturi ducimus sapiente quisquam. Excepturi aspernatur distinctio ipsam enim, accusantium quisquam, in porro itaque magni ad nisi et reiciendis architecto corporis qui eos voluptatibus. Quas repellat, reprehenderit voluptates perspiciatis natus nemo assumenda consectetur quos officiis exercitationem ex sapiente atque nam reiciendis dolore in facere, obcaecati aliquam dolor necessitatibus fugiat. Ratione nulla maxime corrupti, blanditiis tempora at obcaecati maiores assumenda magnam provident odio fugit expedita asperiores, dignissimos architecto pariatur perferendis, beatae nobis qui laborum. Molestias sit praesentium facilis laboriosam ut aut obcaecati quia saepe veritatis suscipit assumenda, consequatur laborum, culpa error quasi vel odio quis at voluptatibus perferendis iste magnam ab ullam quas. Accusantium voluptate voluptatem enim error ipsam molestiae unde, quos nesciunt sunt?</p>
            </div>            
        </section>
        `;
}

function createGalleryPage(li) {
    document.querySelectorAll("#navList li").forEach(item => {
        if (item.classList.contains("active")) {
            item.classList.remove("active");
        }
    })
    li.classList.add("active");

    document.querySelector("main").innerHTML =
        `
        <section id="gallery">
            <div class="bg-page"></div>
            <h2>GALLERY</h2>
            <div class="page-container">
                <div class="galleryLayout">
                </div>
            </div>
        </section>
        `;

    const galleryLayout = document.querySelector(".galleryLayout")
    for (let i = 1; i <= 20; i++) {
        galleryLayout.innerHTML +=
            `
            <img src="./assets/img/gallery/gallery_${i}.jpg" alt="" onclick="createImageMoadal(this)">
            `;
    }

}

function createContactPage(li) {
    document.querySelectorAll("#navList li").forEach(item => {
        if (item.classList.contains("active")) {
            item.classList.remove("active");
        }
    })
    li.classList.add("active");

    document.querySelector("main").innerHTML =
        `
        <section id="contact">
            <div class="bg-page"></div>
            <h2>CONTACT</h2>
            <div class="container page-container">
                <form action="action_page.php">
            
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name..">
            
                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name..">
            
                <label for="country">Country</label>
                <select id="country" name="country">
                    <option value="australia">Australia</option>
                    <option value="canada">Canada</option>
                    <option value="usa">USA</option>
                </select>
            
                <label for="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.." style="height:140px"></textarea>
            
                <input type="submit" value="Submit">
            
                </form>
            </div>
        </section>
        `;
}

function createImageMoadal(img) {
    const modal = document.querySelector(".image-modal");
    const modalImg = document.getElementById("modalImg");
    modalImg.src = img.src;

    modal.style.display = "flex";
    document.querySelector(".modal-overlay").addEventListener("click", function () {
        modal.style.display = "none";
    });
    document.querySelector(".modal-span").addEventListener("click", function () {
        modal.style.display = "none";
    });
}