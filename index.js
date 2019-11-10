let names = [];
let all_names = [];
let for_voprosi = [];
let already_choosen = [];
let is_ok = false;
let turn = 0;
let the_chosen_one = -1;
let names_raw = 
'Пономарева Юлия Александровна,'+ 
'Лукашевич Сергей Анатольевич,' +
'Карпухин Алексей Владимирович,'+
'Донской Виктор Александрович,'+
'Лукашук Олеся Николаевна,'+
'Жданова Ирина Дмитриевна,'+
'Путимцев Дмитрий Александрович,'+
'Шатунов Сергей Николаевич,'+
'Зозуля Елена Станиславовна,'+
'Лепе Павел Леонидович,'+
'Постульгин Андрей Викторович,'+
'Родина Надежда Александровна,'+
'Лотвина Ольга Владимировна,'+
'Бородин Михаил Вячеславович,'+
'Иванов Александр Серафимович,'+
'Кузнецова Елена Валерьевна,'+
'Лукутин Андрей Владимирович,'+
'Бондаренко Елена Николаевна,'+
'Журавлев Алексей Игоревич,'+
'Ровенский Артем Михайлович,'+
'Чемирис Наталья Михайловна,'+
'Затолокин Иван Владимирович,'+
'Добряков Александр Анатольевич,'+
'Мельниченко Игорь Иннокентьевич,'+
'Отке Наталья Вячеславовна,'+
'Рудюк Виталий Владимирович,'+
'Середенко Нина Владимировна,'+
'Фокина Инесса Игоревна,'+
'Бороненков Алексей Александрович,'+
'Суханова Ольга Николаевна,'+
'Федорова Татьяна Олеговна,'+
'Архипов Олег Владимирович,'+
'Белых Денис Владиславович,'+
'Пономарёв Максим Александрович,'+
'Старицкий Николай Николаевич';

function filldata() {
    answer.innerText="";
    spisok.innerText="";
    turn=0;
    for_voprosi = [];
    names = [];
    all_names = [];

    let names_raw = container.value;
    names = names_raw.split("\n");
    for(let i=0;i<names.length;i++)
    {
        if(names[i]===""||names[i]===" ")
            {
            names.splice(i, 1);
            i=0;
            }
    }
    all_names = all_names.concat(names);
    for_voprosi = for_voprosi.concat(all_names);
    container.value="";
    for(i=0;i<names.length;i++)
    {
        container.value+=names[i]+"\n";
    }
    is_ok = true;
    resize();
    return 1;
}

function pre_load_fill()
{
    names = names_raw.split(",");
    all_names = all_names.concat(names);
    for_voprosi = for_voprosi.concat(all_names);
    container.value = "";
    for (i = 0; i < names.length; i++) {
        container.value += names[i] + "\n";
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
        answer.innerText = "Выступающих больше нет"; 
        return 1;
    } 
    turn++;
    let id = Math.floor(Math.random() * names.length);
    for_voprosi = [];
    the_chosen_one = names[id];
    for_voprosi = for_voprosi.concat(all_names);
    for_voprosi.splice(for_voprosi.indexOf(the_chosen_one), 1);
    answer.innerHTML = "Выступает: <br>"+ names[id];
    already_choosen.push(names[id]);
    spisok.innerHTML += turn+"."+ " " + names[id]+"<br>";
    names.splice(id,1);
    return 1;
}

function get_voprosi() {
    if (is_ok === false) {
        answer.innerText = "Сначала введите данные";
        return 1;
    }
    if (for_voprosi.length === 0) {
        answer.innerText = "Комментирующих больше нет";
        return 1;
    }
    let pos="";
    if (Math.round(Math.random())===1) {pos="За";}
    else { pos = "Против";}
    let idd = Math.floor(Math.random() * for_voprosi.length);
    answer.innerHTML = "Комментирует: ("+ pos +")<br>" + for_voprosi[idd];
    //for_voprosi.splice(idd, 1);
    return 1;
}

function get_misl() {
    if (is_ok === false) {
        answer.innerText = "Сначала введите данные";
        return 1;
    }
    if (names.length === 0) {
        answer.innerText = "Выступающих больше нет";
        return 1;
    }
    let id = Math.floor(Math.random() * for_voprosi.length);
    answer.innerHTML = for_voprosi[id];
    //names.splice(id,1);
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
let vistuplenie = document.getElementById("get_vistuplenie");
let voprosi = document.getElementById("get_voprosi");
let answer = document.getElementById("for_answer");
let hide_in = document.getElementById("hide_input");
let misl = document.getElementById("get_misl");

btn_fill.onclick = filldata;
vistuplenie.onclick = get_rnd;
voprosi.onclick = get_voprosi;
hide_in.onclick = hide;
misl.onclick = get_misl;
//hide_in2.onclick = hide2;

hide();
pre_load_fill();