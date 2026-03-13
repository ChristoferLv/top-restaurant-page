/**
 * 
 * @param {HTMLElement} root 
 */
export default function generateContacts(root) {
    const contacts = [
        {
            role: "Owner",
            name: "David Koenig",
            phone: "(44) 9368-0378",
            email: "davidjkoenig@email.com",
        },
        {
            role: "Reservation",
            name: "Luis Pereira",
            phone: "(42) 4068-7151",
            email: "luisdiaspereira@email.com",
        },
        {
            role: "Business",
            name: "Michel Ruffin",
            phone: "(44) 9489-9620",
            email: "michelesruffin@email.com",
        }
    ];
    const title = document.createElement("div");
    title.classList.add("title", "ribbon");
    title.innerText = "Le Lanches";

    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");

    const pageText = document.createElement("p");
    pageText.innerText = "Contato";

    root.append(title);
    root.append(contactContainer);
    contactContainer.append(pageText);

    for (const contactItemO of contacts) {
        const contactItemE = document.createElement("div");
        contactItemE.classList.add("contact-item");
        for (const contactInfo in contactItemO) {
            const newInfo = document.createElement("p");
            newInfo.innerText = contactItemO[contactInfo];
            contactItemE.append(newInfo);
        }
        contactContainer.append(contactItemE);
    }
}