//вводные данные
let dannie = {

upravlenci: `
Белых Денис Владиславович (ТемоЦентр)
Бондаренко Елена Николаевна (Дирекция)
Бородин Михаил Вячеславович (ГМЦ)
Гриднев Илья Петрович (ЦФО)
Дербишева Екатерина Николаевна (ЗАО)
Добряков Александр Анатольевич (ЦПВШС)
Донской Виктор Александрович (МЦРКПО)
Жданова Ирина Дмитриевна (МЦРКПО)
Затолокин Иван Владимирович (ЦПВШС)
Зозуля Елена Станиславовна (МЦКО)
Иванов Александр Серафимович (ГМЦ)
Иванцова Рузанна Максимовна (ТИНАО)
Карпухин Алексей Владимирович (МЦРКПО)
Кузнецова Елена Валерьевна (ГМЦ)
Курачева Ирина Михайловна (ВАО)
Лукашевич Сергей Анатольевич (ЦФО)
Лукашук Олеся Николаевна (МЦРКПО)
Лукутин Андрей Владимирович (ГМЦ)
Маньковская Екатерина Николаевна (ЗЕЛАО)
Мельниченко Игорь Иннокентьевич (ЦПВШС)
Мисожникова Екатерина Борисовна (СВАО)
Осипова Александра Анатольевна (Дирекция по строительству)
Османова Галия Алиевна (Начальник отдела инспектирования)
Пономарёва Юлия Александровна (ЦФО)
Постульгин Андрей Викторович (МЦКО)
Путимцев Дмитрий Александрович (ЦПМ)
Радецкая Светлана Владимировна (ЮЗАО)
Родина Надежда Александровна (МЦКО)
Руденко Елена Анатольевна (САО)
Середенко Нина Владимировна (ГППЦ)
Старицкий Николай Николаевич (ТемоЦентр)
Степанова Екатерина Николаевна (СЗАО)
Суханова Ольга Николаевна (ТемоЦентр)
Ульянова Ирина Сергеевна (ЮВАО)
Фатхуллин Руслан Зуфарович (СФК)
Федорова Татьяна Олеговна (ТемоЦентр)
Федорович Екатерина Вадимовна (ЦАО)
Фокина Инесса Игоревна (ГППЦ)
Чемирис Наталья Михайловна (ЦПВШС)
Шамшиева Вероника Толкуналиевна (ЮАО)
Шатунов Сергей Николаевич (ЦПМ)
`,

direktora:`
Алексеев Антон Григорьевич директор ГБОУ Школа № 1241
Альшванг Алла Даниловна и.о. директора ГБОУ Школа № 1249
Бажанова Галина Павловна директор ГБОУ Школа № 108
Баринова Татьяна Юрьевна директор ГБОУ Школа № 38
Беспалов Алексей Викторович директор ГБОУ Школа № 324
Бодер Дмитрий Израильевич директор ГБОУ Школа № 1130
Борматова Жанна Георгиевна директор ГАОУ Школа "ШИК 16"
Буканова Наталья Львовна директор ГБОУ Школа № 1516
Бурлакин Михаил Юрьевич директор ГКОУ СКОШИ № 30
Бучкин Андрей Владимирович директор ГБПОУ ПК № 50 имени дважды Героя Социалистического Труда Н.А. Злобина
Валиева Светлана Викторовна директор ГБОУ Школа № 1125
Вильшанская Аделя Дамировна директор ГКОУ Школа № 2124
Гаршин Александр Иванович и.о. директора ГБОУ Школа № 2055
Голова Татьяна Леонидовна директор ГБОУ Школа № 123
Гончарова Юлия Всеволодовна директор ГБОУ Школа № 2053
Горина Татьяна Александровна директор ГБОУ "Школа № 842"
Гулин Александр Сергеевич директор ГБОУ Школа № 149
Иванова Юлия Васильевна директор ГБОУ Школа № 1078
Исляев Марат Анвярович директор ГБОУ Школа № 1440
Киб Марина Валерьевна директор ГКОУ СКШ № 571
Клочихин Михаил Станиславович директор ГБОУ Школа № 1164
Ковалев Алексей Николаевич и.о. директора ГБОУ Школа № 2093
Колесникова Лариса Анатольевна директор ГБОУ Школа № 536
Комара Елена Анатольевна директор ГБОУ Школа № 1589
Косенко Татьяна Михайловна и.о. директора ГБОУ Школа № 56 имени академика В.А. Легасова
Кривошеина Мария Валерьевна директор ГБОУ Школа "Спектр"
Лисник Виктория Ивановна директор ГБОУ Школа № 1265
Луцишин Артур Васильевич директор ГБОУ Школа № 1465
Максимова Елена Сергеевна директор ГБОУ Школа № 2044
Мельникова Анна Витальевна директор ГБПОУ МОК ЗАПАД
Мокин Евгений Анатольевич директор ГБОУ Школа № 734
Морикова Татьяна Михайловна директор ГБОУ Школа № 1155
Морозов Илья Ильич директор ГБОУ Школа № 384
Москаленков Сергей Александрович директор ГБОУ Школа № 854
Новикова Тамара Никифоровна директор ГБОУ Школа № 1708
Новосельцева Валентина Степановна директор ГБОУ Школа № 1356
Писарик Екатерина Михайловна директор ГБПОУ КСУ № 10
Пискулева Ольга Владимировна директор ГБОУ Школа № 1384
Подвальная Елена Владимировна директор ГКОУ СКОШИ № 52
Позднякова Наталья Александровна директор ГБОУ Школа № 1593
Поляков Виктор Леонидович директор ГАПОУ МОК им. В. Талалихина
Поташев Александр Юрьевич директор ГБПОУ КСУ № 3
Реуэль Алексей Романович директор ГБОУ Школа № 1321 "Ковчег"
Сенькова Екатерина Борисовна и.о. директора ГБОУ ЦО "Школа здоровья" № 1679
Суворов Павел Андреевич директор ГКОУ СКОШИ № 2
Сяфуков Марат Рафикович директор ГБОУ Школа-интернат № 17
Фролов Константин Александрович директор ГБОУ Школа № 664
Чугунов Андрей Андреевич директор ГБОУ Школа № 1159
Шишлов Александр Николаевич директор ГБПОУ КАТ № 9
Ясинская Юлия Сергеевна директор ГБОУ Школа № 1621
`,

povtoreniya: false, //флаг на повторения
is_ok: false, //флаг о заполненных данных
active_area: "upr", //флаг активной области фамилий
timer_hidden: false
};
let timerGO;
let time = 0;
let min=0;
let sec=0;


let upr_mass = dannie.upravlenci.split("\n"); //сырой массив из строки
let dir_mass = dannie.direktora.split("\n"); //сырой массив из строки


//убирает пустые строки
function do_bleska(arr) { 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "" || arr[i] === " ") {
            arr.splice(i, 1);
            i = 0;
        }
    }
}
do_bleska(upr_mass);
do_bleska(dir_mass);

let um = [].concat(upr_mass); //клоны для работы
let dm = [].concat(dir_mass); //клоны для работы

function get_uprav() {
    time_left.innerHTML = "<br><h2></h2>";
    if (dannie.is_ok === false) {
        answer.innerText = "Сначала введите все необходимые данные";
        return 1;
    }
    if (um.length === 0) {
        answer.innerText = "Докладчиков больше нет";
        return 1;
    }
    let id = Math.floor(Math.random() * um.length);
    /*the_chosen_one = names[id];
    for_voprosi = for_voprosi.concat(all_names);
    for_voprosi.splice(for_voprosi.indexOf(the_chosen_one), 1);*/
    answer.innerHTML = "Выступает: <br>" + um[id];
   // already_choosen.push(names[id]);
   // spisok.innerHTML += turn + "." + " " + names[id] + "<br>";
   // names.splice(id, 1);
    return 1;
}
function get_direk() {
    time_left.innerHTML = "<br><h2></h2>";
    if (dannie.is_ok === false) {
        answer.innerText = "Сначала введите все необходимые данные";
        return 1;
    }
    if (dm.length === 0) {
        answer.innerText = "Докладчиков больше нет";
        return 1;
    }
    let id = Math.floor(Math.random() * dm.length);
    /*the_chosen_one = names[id];
    for_voprosi = for_voprosi.concat(all_names);
    for_voprosi.splice(for_voprosi.indexOf(the_chosen_one), 1);*/
    answer.innerHTML = "Выступает: <br>" + dm[id];
    // already_choosen.push(names[id]);
    // spisok.innerHTML += turn + "." + " " + names[id] + "<br>";
    // names.splice(id, 1);
    return 1;
}

//обновление данных с учётом ручных изменений в текстовых полях
function fill_data() {
    answer.innerText = "";
    time_left.innerHTML= "<br><h2></h2>";
    setTimeout(clearInterval(timerGO), 300);
    let new_um = container_u.value.split("\n");
    let new_dm = container_d.value.split("\n");
    do_bleska(new_um);
    do_bleska(new_dm);
    um=[];
    dm=[];
    um=um.concat(new_um);
    dm=dm.concat(new_dm);
    container_d.value = "";
    container_u.value = "";
    for (i = 0; i < new_um.length; i++) {
        container_u.value += new_um[i] + "\n";
    }
    for (i = 0; i < new_dm.length; i++) {
        container_d.value += new_dm[i] + "\n";
    }
    is_ok = true;
    resize(new_um, container_u);
    resize(new_dm, container_d);
    return 1;
}

//скрывает избыточные поля данных
function hide() {
if(dannie.active_area==="upr")
{
    if (container_u.style.display === "inline") {
        container_u.style.display = "none";
        dir_pole.hidden = true;
        upr_pole.hidden = true;
        hide_in.innerText = "+";
    }
    else {
        container_u.style.display = "inline";
        dir_pole.hidden = false;
        upr_pole.hidden = false;
        hide_in.innerText = "-";
    }
    return 1;
}
else if (dannie.active_area==="dir")
{
    if (container_d.style.display === "inline") {
        container_d.style.display = "none";
        dir_pole.hidden = true;
        upr_pole.hidden = true;
        hide_in.innerText = "+";
    }
    else {
        container_d.style.display = "inline";
        dir_pole.hidden = false;
        upr_pole.hidden = false;
        hide_in.innerText = "-";
    }
    return 1;
}

    
}

//подгоняет размер полей ввода
function resize(arr,container) {
    let max_length = arr[0].length;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > max_length) max_length = arr[i].length;
    }
    if (arr.length > 32) container.rows = 32;
    else container.rows = arr.length;
    container.cols = max_length + 1;
    return 1;
}

//загружает при загрузке страницы данные в поля ввода
function pre_load_fill() {
   
    container_d.value = "";
    container_u.value = "";
    for (i = 0; i < um.length; i++) {
        container_u.value += um[i] + "\n";
    }
    for (i = 0; i < dm.length; i++) {
        container_d.value += dm[i] + "\n";
    }
    dannie.is_ok = true;
    resize(um,container_u);
    resize(dm,container_d);
    return 1;
}

//переключение между списками
function change_area() {
    if (this.value === "upr") {
        container_d.style.display = "none";
        container_u.style.display = "inline";
        dannie.active_area="upr";
    }
    else if (this.value === "dir") {
        container_u.style.display = "none";
        container_d.style.display = "inline";
        dannie.active_area = "dir";
    }
}

function timer_fill() {
    let length = timer_pole.value.split(":");
    time = +length[0]*60 + +length[1];
    min = +length[0];
    sec = +length[1];
    let minn = "";
    let secc = "";
    if (min < 10) minn = "0" + min;
    else minn = min;
    if (sec < 10) { secc = "0" + sec; }
    else secc = sec; 
    time_left.innerHTML = "<br>" + "<h2>" + minn + ":" + secc + "</h2>";
    timerGO=window.setInterval(timer_go, 1000);
}
function timer_go() {
    if(sec===0)
    {
        min--;
        sec=59;
    }
    else sec--;

    if(sec===0 & min===0)
    {
        time_left.innerHTML = "<br>" +"<h2>Время вышло</h2>";
        timer_stopp();
        return 1;
    }
    let minn ="";
    let secc="";
    time_left.innerHTML = "<br>" +"<h2></h2>";

    if(min<10) minn= "0"+min;
    else minn = min;
    if(sec<10) {secc= "0"+sec;}
    else secc = sec; 

    time_left.innerHTML = "<br>" + "<h2>" + minn + ":" + secc + "</h2>";
}
function timer_stopp() {
    time_left.innerHTML = "<br>" + "<h2>Время вышло</h2>";
    setTimeout(clearInterval(timerGO), 300);
}
function hide_timer() {
 if(dannie.timer_hidden===false)
 {
    timer_pole.hidden=true;
    timer_start.hidden=true;
    timer_stop.hidden=true;
    dannie.timer_hidden=true;
    time_left.hidden=true;
 }
 else
 {
     timer_pole.hidden = false;
     timer_start.hidden = false;
     timer_stop.hidden = false;
     dannie.timer_hidden = false;
     time_left.hidden = false;
 }
}


//выбор без таймера
function level1() {
    answer.innerHTML = "";
    time_left.innerHTML = "<br><h2></h2>";
    setTimeout(clearInterval(timerGO), 300);
    timer_button.hidden=true;
    timer_pole.hidden = true;
    timer_start.hidden = true;
    timer_stop.hidden = true;
    time_left.hidden = true;
    dannie.timer_hidden = true;
}
//выбор с таймером
function level2() {
    answer.innerHTML = "";
    setTimeout(clearInterval(timerGO), 300);
    time_left.innerHTML = "<br><h2></h2>";
    timer_button.hidden = false;
    timer_pole.value = "3:00";
}
//по 5 человек
function level3() {
    setTimeout(clearInterval(timerGO), 300);
    time_left.innerHTML = "<br><h2></h2>";
    answer.innerHTML = "";
}
//ответ новокрещёного
function level4() {
    setTimeout(clearInterval(timerGO), 300);
    time_left.innerHTML = "<br><h2></h2>";
    timer_button.hidden = false;
    answer.innerHTML = "Выступает: <br>" + "Новокрещенов Илья Владимирович";
    timer_pole.value = "2:00";
}

let container_d = document.getElementById("input_dir");
let container_u = document.getElementById("input_upr");
let spisok = document.getElementById("spisok");
let btn_fill = document.getElementById("fill_data");
let director = document.getElementById("get_dir");
let upravlenec = document.getElementById("get_upr");
let answer = document.getElementById("for_answer");
let hide_in = document.getElementById("hide_input");

let dir_pole = document.getElementById("pole_dir");
let upr_pole = document.getElementById("pole_upr");


let timer_button = document.getElementById("timer_button");
let timer_start = document.getElementById("timer_start");
let timer_stop = document.getElementById("timer_stop");
let timer_pole = document.getElementById("timer");
let time_left = document.getElementById("for_timer");


let b1 = document.getElementById("01");
let b2 = document.getElementById("02");
let b3 = document.getElementById("03");
let b4 = document.getElementById("04");


btn_fill.onclick = fill_data;
director.onclick = get_direk;
upravlenec.onclick = get_uprav;
hide_in.onclick = hide;
dir_pole.onclick = change_area;
upr_pole.onclick = change_area;
timer_start.onclick = timer_fill;
timer_stop.onclick = timer_stopp;
timer_button.onclick = hide_timer;

b1.onclick = level1;
b2.onclick = level2;
b3.onclick = level3;
b4.onclick = level4;

container_u.style.display = "inline";


hide();
hide_timer();
level1();
pre_load_fill();