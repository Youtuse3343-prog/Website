  // Year
    document.getElementById("year").textContent = new Date().getFullYear();

    // Mobile menu
    const menuBtn = document.getElementById("menuBtn");
    const mobilePanel = document.getElementById("mobilePanel");
    let open = false;

    function closeMobile(){
      open = false;
      mobilePanel.style.display = "none";
      menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }

    menuBtn.addEventListener("click", () => {
      open = !open;
      mobilePanel.style.display = open ? "block" : "none";
      menuBtn.innerHTML = open ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
    });

    // Close menu on click
    mobilePanel.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => closeMobile());
    });

    // FAQ accordion
    document.querySelectorAll(".qa").forEach(item => {
      item.querySelector(".q").addEventListener("click", () => {
        // close others
        document.querySelectorAll(".qa").forEach(x => { if(x !== item) x.classList.remove("open"); });
        item.classList.toggle("open");
      });
    });

    // Fake form submit (front-end only)
    const leadForm = document.getElementById("leadForm");
    leadForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thanks! Your message is ready to be wired to email. For now, please email Sales@bordercitydigital.com.");
      leadForm.reset();
    });