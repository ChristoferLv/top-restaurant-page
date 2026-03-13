/**
 * 
 * @param {HTMLElement} root 
 */
export default function generateHome(root) {
    const times = ["Sunday: 8am - 8pm", "Monday: 6am - 6pm", "Tuesday: 6am - 6pm", "Wednesday: 6am - 6pm", "Thursday: 6am - 10pm", "Friday: 6am - 10pm", "Saturday: 8am - 10pm"];
    const title = document.createElement("div");
    title.classList.add("title", "ribbon");
    title.innerText = "Le Lanches";

    const homeContainer = document.createElement("div");
    homeContainer.classList.add("home-container");

    root.append(title);
    root.append(homeContainer);

    const about = document.createElement("div");
    about.innerText = "Le Lanches Lorem Ipsum is essentially the typeset and printing industry's dummy text. Since an unidentified printer jumbled a galley of type to create a type specimen book in the 1500s, Lorem Ipsum has been the industry standard sham text.";

    const schedule = document.createElement("div");
    const timeTable = document.createElement("ul");
    for (const time of times) {
        const newDay = document.createElement("li");
        newDay.innerText = time;
        timeTable.append(newDay);
    }

    const location = document.createElement("div");
    location.innerText = "Location 903 Kenna Drive Lake Carolina, NJ 99514";

    homeContainer.append(about);
    homeContainer.append(schedule);
    homeContainer.append(location);
    schedule.append(timeTable);

}