let names = [];
let already_choosen = [];
let is_ok = false;
let turn = 0;

function filldata() {
    answer.innerText="";
    spisok.innerText="";
    turn=0;

    let names_raw = container.value;
    names = names_raw.split("\n");
    for(let i=0;i<names.length;i++)
    {
        if(names[i]===""||names[i]===" ")
            names.splice(i, 1);
    }

    is_ok = true;
    resize();
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
    turn++;
    let id = Math.floor(Math.random() * names.length);
    answer.innerText = names[id];
    already_choosen.push(names[id]);
    spisok.innerHTML += turn+"."+ " " + names[id]+"<br>";
    names.splice(id,1);
    return 1;
}

function resize() {
    let max_length=names[0].length;
    for(let i=0;i<names.length-1;i++)
    {
        if(names[i].length>max_length) max_length=names[i].length;
    }
    if (names.length > 32) container.rows = 32;
    else container.rows = names.length;
    container.cols = max_length+1;
    return 1;
}

function hide() {
    if(container.hidden===false)
    {
    container.hidden=true;
    hide_in.innerText="+";
    }
    else 
    {
    container.hidden = false;
    hide_in.innerText = "-";
    }
    return 1;
}

function hide2() {
    if (spisok.style.display === "block") 
    {
        spisok.style.display = "none";
        hide_in2.innerText = ">>";
    }
    else {
        spisok.style.display = "block";
        hide_in2.innerText = "<<";
    }
    return 1;
}

let container = document.getElementById("input");
let spisok = document.getElementById("spisok");
let btn_fill = document.getElementById("fill_data");
let btn_get = document.getElementById("get_result");
let answer = document.getElementById("for_answer");
let hide_in = document.getElementById("hide_input");
let hide_in2 = document.getElementById("hide_input2");

btn_fill.onclick = filldata;
btn_get.onclick = get_rnd;
hide_in.onclick = hide;
hide_in2.onclick = hide2;

hide();