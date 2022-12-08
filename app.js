let item = document.querySelectorAll("a");
for (let i = 0; i < item.length; i++) {
    item[i].onclick = function (event) {
        event.preventDefault();
        this.classList.add("active")
    }
    item[i].ondblclick = function (event) {
        event.preventDefault();
        this.classList.remove("active")
    }
}   
