let main_menu = document.getElementById("main_menu");
let mobile_icon = document.getElementById("mobile_icon");

mobile_icon.addEventListener("click", () => {
    main_menu.classList.toggle('hidden')
});
