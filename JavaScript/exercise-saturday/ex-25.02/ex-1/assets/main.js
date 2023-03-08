window.onload = function () {
    let navItems = document.querySelectorAll("#navList li");
    createHomePage();
    navItems.forEach(li => {
        li.addEventListener("click", pageLoad);
    });
}



function pageLoad() {
switch (this.textContent) {
    case "Home":
        createHomePage(this);
        break;
    case "About Us":
        createAboutPage(this);
        break;
    case "Services":
        createServicesPage(this);
        break;
    case "Our Team":
        createTeamPage(this);
        break;
    case "Contact Us":
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
    `   <section  id ="bg-image">
            <div class="hero-txt">
            <h1>WELCOME</h1><br>
            <p class="line-1 anim-typewriter">TO THE FUTURE OF CLEAN ENERGY</p>
            </div> 
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
        <section  id="about">
            <div class ="marquee">
            <h1>This is some text</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error consequuntur molestiae doloremque doloribus vero, quas, maiores recusandae commodi quidem minima porro laborum eius iure ad non sapiente quisquam neque dolorem itaque. Nemo vitae aspernatur saepe harum vel, dolorem suscipit commodi iure minus qui pariatur alias aliquam officia quas eos reiciendis quae. Maiores, id totam. Velit rem laboriosam possimus, aut autem dolorem facilis porro eaque vitae asperiores modi mollitia incidunt corporis. Cupiditate veniam, ab mollitia illo, quod facilis dicta eaque nostrum, dolor nisi eius libero fugiat ipsam quaerat totam blanditiis dolores. Perspiciatis, non officia sit fugiat mollitia numquam consequatur? Iusto, consequatur.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore laudantium sunt neque veniam dignissimos ut, a, explicabo impedit hic facilis optio fugiat maiores vel voluptatum dolore sequi! Sit vitae itaque, deserunt odit quas atque ipsum ad explicabo, qui voluptates tenetur earum veniam accusamus? Pariatur, nostrum? Nam minima quaerat placeat ipsa, pariatur quo repellendus veniam voluptatem laudantium consequuntur minus nisi, modi facere cupiditate quod deleniti nobis. Ea modi animi accusantium ab inventore provident dolor nesciunt fugiat delectus omnis, quae ipsum eius suscipit nulla at aperiam eum officia! Eligendi sapiente dolores tenetur quam dolore id eius quo consequatur nulla delectus omnis, ab quas alias atque magnam illum nisi aut doloribus natus aliquid provident tempore perferendis eaque. Sit veniam architecto sapiente facilis quia voluptatem aliquid quod autem deserunt est molestiae quaerat magnam iste earum ea, temporibus cum quisquam impedit itaque! Eligendi quod totam quos vero repudiandae eos? Eveniet tempora cum quos beatae esse.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore laudantium sunt neque veniam dignissimos ut, a, explicabo impedit hic facilis optio fugiat maiores vel voluptatum dolore sequi! Sit vitae itaque, deserunt odit quas atque ipsum ad explicabo, qui voluptates tenetur earum veniam accusamus? Pariatur, nostrum? Nam minima quaerat placeat ipsa, pariatur quo repellendus veniam voluptatem laudantium consequuntur minus nisi, modi facere cupiditate quod deleniti nobis. Ea modi animi accusantium ab inventore provident dolor nesciunt fugiat delectus omnis, quae ipsum eius suscipit nulla at aperiam eum officia! Eligendi sapiente dolores tenetur quam dolore id eius quo consequatur nulla delectus omnis, ab quas alias atque magnam illum nisi aut doloribus natus aliquid provident tempore perferendis eaque. Sit veniam architecto sapiente facilis quia voluptatem aliquid quod autem deserunt est molestiae quaerat magnam iste earum ea, temporibus cum quisquam impedit itaque! Eligendi quod totam quos vero repudiandae eos? Eveniet tempora cum quos beatae esse.</p>
            </div>         
        </section>
        `;
}
function createServicesPage(li) {
    document.querySelectorAll("#navList li").forEach(item => {
        if (item.classList.contains("active")) {
            item.classList.remove("active");
        }
    })
    li.classList.add("active");

    document.querySelector("main").innerHTML =
        `
        <section id="services">
        <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="./assets/images/pic1.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="./assets/images/pic2.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="./assets/images/pic3.jpg" class="d-block w-100" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
        </section>
        `;
}

