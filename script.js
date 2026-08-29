// ===============================
// SCROLL ANIMATION
// ===============================

const animatedElements = document.querySelectorAll(".animate");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
}, {
    threshold: 0.20
});

animatedElements.forEach((element) => {
    observer.observe(element);
});


// ===============================
// QUOTE FORM
// ===============================

const quoteForm = document.querySelector(".quote_form");

if (quoteForm) {

    quoteForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const company = document.getElementById("company").value.trim();
        const phone = document.getElementById("contact").value.trim();
        const email = document.getElementById("email").value.trim();
        const product = document.getElementById("product").value;
        const quantity = document.getElementById("quantit").value.trim();
        const unit = document.getElementById("unit").value;
        const location = document.getElementById("location").value.trim();
        const date = document.getElementById("date").value;
        const message = document.getElementById("message").value.trim();

        const whatsappMessage = `Hello AL-BNC VENTURES,

I would like to request a quote.

CUSTOMER INFORMATION
--------------------
Full Name: ${name}
Company Name: ${company}
Phone Number: ${phone}
Email: ${email}

ORDER INFORMATION
-----------------
Product: ${product}
Quantity: ${quantity} ${unit}
Delivery Location: ${location}
Preferred Date: ${date}

ADDITIONAL MESSAGE
------------------
${message}

Thank you.`;

        const whatsappNumber = "233248002055";

        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(whatsappURL, "_blank");
    });
}


// ===============================
// CONTACT FORM
// ===============================

const contactForm = document.querySelector(".contact_form");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("contact").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        const whatsappMessage = `Hello AL-BNC VENTURES,

I would like to contact you.

CONTACT INFORMATION
-------------------
Full Name: ${name}
Phone Number: ${phone}
Email: ${email}

MESSAGE
-------
${message}

Thank you.`;

        const whatsappNumber = "233248002055";

        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(whatsappURL, "_blank");
    });
}