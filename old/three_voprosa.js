let names = [];
let all_names = [];
let for_voprosi = [];
let already_choosen = [];
let three_question = ["Какие идеи за прошлый месяц подали своему непосредственному руководителю?", "В реализации каких, важных для московской системы образования, задач удалось поучаствовать?","Соавтором каких результатов системы Вы можете себя считать?"];
let is_ok = false;
let turn = 0;
let the_chosen_one = -1;
let names_raw = 
'Потапов Евгений Игоревич,'+ 
'Бозян Валерий Левонович,' +
'Александрова Мария Ивановна,'+
'Ефремова Ирина Александровна,'+
'Волкова Дарья Юрьевна,'+
'Артемьев Александр Александрович,'+
'Радецкая Светлана Владимировна,'+
'Рытикова Вероника Александровна,'+
'Шакин Александр Андреевич,'+
'Мальченко Кирилл Николаевич,'+
'Гребенщикова Дарья Андреевна,'+
'Компанеец Вероника Валерьевна,'+
'Черемисин Роман Владимирович,'+
'Щенникова Юлия Владимировна,'+
'Москаленко Алёна Эдуардовна,'+
'Долгова Ирина Олеговна,'+
'Суханов Даниил Артемович,'+
'Соломатина Ольга Владимировна,'+
'Круглик Елена Владимировна,'+
'Османова Галия Алиевна,'+
'Левина Светлана Сергеевна,'+
'Курачёва Ирина Михайловна,'+
'Никифорова Ирина Владимировна,'+
'Прокопьева Юлиана Сергеевна,'+
'Антясова Елена Алексеевна';

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
    let idd = Math.floor(Math.random() * three_question.length);
    for_voprosi = [];
    the_chosen_one = names[id];
    for_voprosi = for_voprosi.concat(all_names);
    for_voprosi.splice(for_voprosi.indexOf(the_chosen_one), 1);
    answer.innerHTML = three_question[idd]+"<br><br>"+ names[id];
    already_choosen.push(names[id]);
    spisok.innerHTML += turn+"."+ " " + names[id]+"<br>";
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



let container = document.getElementById("input");
let spisok = document.getElementById("spisok");
let btn_fill = document.getElementById("fill_data");
let vistuplenie = document.getElementById("get_vistuplenie");
let voprosi = document.getElementById("get_voprosi");
let answer = document.getElementById("for_answer");
let hide_in = document.getElementById("hide_input");
let hide_in2 = document.getElementById("hide_input2");

btn_fill.onclick = filldata;
vistuplenie.onclick = get_rnd;
hide_in.onclick = hide;


hide();
pre_load_fill();