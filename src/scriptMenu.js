/**
 * 
 * @param {HTMLElement} root 
 */
export default function generateMenu(root) {
    const menuItems = [
        {
            name: "Burger",
            price: "R$19,50",
            ingredients: "Pão de Hamburguer + carne 150g"
        },
        {
            name: "X-Burger",
            price: "R$19,50",
            ingredients: "Pão de Hamburguer + carne 150g + queijo"
        },
        {
            name: "X-Salada",
            price: "R$19,50",
            ingredients: "Pão de Hamburguer + carne 150g + queijo + salada"
        },
        {
            name: "X-Bacon Egg",
            price: "R$25,50",
            ingredients: "Pão de Hamburguer + carne 150g+ queijo + bacon + ovo"
        },
        {
            name: "X-Tudo",
            price: "R$19,50",
            ingredients: "Pão de Hamburguer + carne 150g + queijo + bacon + ovo + presunto + milho"
        }
    ];

    const title = document.createElement("div");
    title.classList.add("title", "ribbon");
    title.innerText = "Le Lanches";

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    root.append(title);
    root.append(menuContainer);

    for (let menuItemO of menuItems) {
        const menuItemE = document.createElement("div");
        menuItemE.classList.add("menu-item");

        const menuImg = document.createElement("div")
        menuImg.classList.add("item-img");

        const itemInfo = document.createElement("div");
        itemInfo.classList.add("item-info");

        const firstLine = document.createElement("div");
        firstLine.classList.add("first-line");

        const itemName = document.createElement("p");
        itemName.classList.add("item-name");
        itemName.innerText = menuItemO.name;

        const separatorContainer = document.createElement("div");
        separatorContainer.classList.add("separator-container");

        const separator = document.createElement("p");
        separator.classList.add("separator");
        separator.textContent = ".........................................................................";

        const price = document.createElement("p");
        price.classList.add("price");
        price.innerText = menuItemO.price;

        const ingredients = document.createElement("p");
        ingredients.classList.add("ingredients");
        ingredients.innerText = menuItemO.ingredients;

        menuItemE.append(menuImg);
        menuItemE.append(itemInfo);
        itemInfo.append(firstLine);
        itemInfo.append(ingredients);
        firstLine.append(itemName);
        firstLine.append(separatorContainer);
        firstLine.append(price);
        separatorContainer.append(separator);

        menuContainer.append(menuItemE);
    }
}