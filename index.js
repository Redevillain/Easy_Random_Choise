let names = [];
let is_ok = false;

function filldata() {   
    let names_raw = container.value;
    names = names_raw.split("\n");
    is_ok = true;
    container.rows = names.length;
    return 1;
}

function get_rnd() {
    if (is_ok === false) {
        answer.innerText = "Сначала введите данные";
        return 1;
    }
    if (names.length === 0) {
        answer.innerText = "Вариантов больше нет"; 
        return 1;
    } 
    let id = Math.floor(Math.random() * names.length);
    answer.innerText = names[id];
    names.splice(id,1);
    return 1;
}

let container = document.getElementById("input");
let btn_fill = document.getElementById("fill_data");
let btn_get = document.getElementById("get_result");
let answer = document.getElementById("for_answer");

btn_fill.onclick = filldata;
btn_get.onclick = get_rnd;

