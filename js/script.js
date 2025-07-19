const drop_list = document.getElementById("drop_list")
const about_list = document.getElementById("about_list");

const menuButton = () => {

    if (drop_list) {
        drop_list.classList.toggle("drop-list");
    }
}

const aboutDropdownList = () => {

    if (about_list) {
        about_list.classList.toggle("show-about_droplist")
    }
}

const moreDropdownList = () => {
    const more_list = document.getElementById("more_list")

    if (more_list) {
        more_list.classList.toggle("show-more_droplist")
    }
}