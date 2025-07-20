const drop_list = document.getElementById("drop_list")
const about_list = document.getElementById("about_list");
const more_list = document.getElementById("more_list")

const menuButton = () => {

    if (drop_list) {
        drop_list.classList.toggle("drop-list");     
    }
}

const aboutDropdownListShow = () => {
    about_list.classList.add("show-about_droplist");
}

const aboutDropdownListHide = () => {
    about_list.classList.remove("show-about_droplist");
}

about_list.addEventListener("mouseleave", () => {
    aboutDropdownListHide();
});

const moreDropdownListShow = () => {
    more_list.classList.add("show-more_droplist")
}

const moreDropdownListHide = () => {
    more_list.classList.remove("show-more_droplist");
}

more_list.addEventListener("mouseleave", () => {
    moreDropdownListHide();
});