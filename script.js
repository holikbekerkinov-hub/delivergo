document.addEventListener("DOMContentLoaded", () => {
    
    // SPA Routing (Menyu bosilganda sahifalarni o'zgartirish)
    const navLinks = document.querySelectorAll(".nav-link");
    const pages = document.querySelectorAll(".page");

    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            
            // 1. Aktiv menyuni o'zgartirish
            navLinks.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");

            // 2. Barcha sahifalarni yashirish
            pages.forEach(page => page.classList.remove("active"));

            // 3. Tanlangan sahifani ko'rsatish
            const targetPageId = this.getAttribute("data-target");
            const targetPage = document.getElementById(targetPageId);
            
            if (targetPage) {
                targetPage.classList.add("active");
                // Ekran yuqorisiga smooth scroll qilish
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    });

    // Buyurtma formasi logikasi
    const orderForm = document.getElementById("orderForm");
    
    if(orderForm) {
        orderForm.addEventListener("submit", function(e) {
            e.preventDefault();
            
            // Tugma animatsiyasi va matnini o'zgartirish
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerText;
            
            submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Yuborilmoqda...';
            submitBtn.style.opacity = '0.8';
            submitBtn.disabled = true;

            // Xuddi serverga so'rov yuborilayotgandek imitatsiya (1.5 soniya)
            setTimeout(() => {
                alert("Buyurtmangiz qabul qilindi! Operatorimiz tez orada siz bilan bog'lanadi.");
                this.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.style.opacity = '1';
                submitBtn.disabled = false;
            }, 1500);
        });
    }

    // Tarif tanlash tugmalari uchun oddiy animatsion click
    const tariffBtns = document.querySelectorAll(".select-tariff");
    tariffBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            // Asosiy sahifaga o'tib formani ko'rsatish funksiyasi
            document.querySelector('.nav-link[data-target="home-page"]').click();
            
            // Formaga smooth e'tibor qaratish
            setTimeout(() => {
                document.querySelector('.order-form-card').scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 100);
        });
    });
});