function checkA() {
    let a = document.getElementsByTagName("a");
    let list = JSON.parse(localStorage.getItem("vt"));
    if (list == null) {
        list = [];
    }
    for (let i of a) {
        if (i.innerHTML == "") {
            i.innerText = "!!!MISSING!!!";
        }
        if (i.href == window.location.href || i.href == window.location.href + "#") {
            i.style.backgroundColor = "red";
        } else {
            i.style.backgroundColor = "lightgreen";
        }
        let h = i.href.split("#")[0];
        if (list.includes(h)) {
            continue;
        }
        list.push(h);
        localStorage.setItem("vt", JSON.stringify(list))
    }
    console.log(list);
}

function checkIMG() {
    let img = document.getElementsByTagName("img");
    for (let i of img) {
        let p = document.createElement("p");
        p.innerText = i.naturalWidth + "x" + i.naturalHeight;
        i.parentElement.insertBefore(p, i)
        p = document.createElement("p");
        p.innerText = i.width + "x" + i.height;
        i.parentElement.insertBefore(p, i)
    }
}
window.addEventListener('load', function() {
    checkA();
    checkIMG();
})