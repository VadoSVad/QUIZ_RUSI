
let Write = function(array){
    new TypeIt("#change_area", {
        strings: array,
        speed: 40,
        waitUntilVisible: true,
    }).go();
    end_write = 1;
}

let Wr = function(array){
    new TypeIt("#text_area", {
        strings: array,
        speed: 40,
        waitUntilVisible: true,
    }).go();
    end_write = 1;
}


let texts = ['Добро пожаловать рус.',
    `<br>`,
    'В этом тесте тебе нужно ответить на несколько вопросов',
    'По результатам теста будет определено - кто ты из русов'
];

let choice_0 = [' Какому славянскому богу ты молишься?' ];

let choice_1 = [' Каким орудием ты дерешься с ящерами проклятыми? '];

let choice_2 = [' Что пьешь ты, когда в горле пересыхает? '];

let choice_3 = [' Помилуешь ли ты ящера после победы над ним? '];

let choice_4 = [' Как ты передвигаешься по землице русской? '];

let choice_5 = [' Как ты просыпаешься? '];

let choice_6 = [' Сколько часов в день ты работаешь? '];

let choice_7 = [' Как часто ты ешь? '];

let choice_8 = [' Скольких ящеров проклятых порубил? '];

let ch = [' По результатам теста ты: ']

let choice = ['<br> Дрочеслав сын Сергея',
    '<br> Всеслав Чародей',
    '<br> Радислав Багиров',
    '<br> Ящер проклятый'];


let end_write = 0;
let changeArea = document.getElementById('change_area');
let btn_next = document.getElementById('next_btn');
let text_area = document.getElementById('text_area');
let audio = document.getElementById('audio');
let audio_0 = document.getElementById('audio_0');
let audio_1 = document.getElementById('audio_1');
let audio_2 = document.getElementById('audio_2');
let audio_3 = document.getElementById('audio_3');
let audio_4 = document.getElementById('audio_4');
let audio_5 = document.getElementById('audio_5');
let audio_6 = document.getElementById('audio_6');
let audio_7 = document.getElementById('audio_7');
let audio_8 = document.getElementById('audio_8');

function play(audio) {
    audio.play();
}

let you = 0;

let App = function(text, change_buttons, delay){
    btn_next.remove()
    Write(text)

    setTimeout(() => {
        changeArea.innerHTML += change_buttons
    }, delay)
}

let Ap = function(text, change_buttons, delay){
    btn_next.remove()
    Wr(text)

    setTimeout(() => {
        text_area.innerHTML += change_buttons
    }, delay)
}

let You = function (num) {
    if(num === 1){
        you++;
    }
}

// первый акт
let FF = function(number){
    if (number === 1.0){
        changeArea.innerHTML = ''
        App(choice_0, `<br> <button id='1.1' onclick='play(audio_1);FF(1.1); You(1);'>Перун (Бог Грома)</button>
        <button id='1.2' onclick='play(audio_1);FF(1.1); You(1);'>Ярило (Бог войны и урожая)</button>
        <button id='1.3' onclick='play(audio_1);FF(1.1)'>Велес (Владыка подземных краев)</button>
        <br>`, 4000)
    }
    if (number === 1.1){
        changeArea.innerHTML = ''
        App(choice_1, `<br> <button id='1.1' onclick='play(audio_2);FF(1.2); You(1);'>Меч православный</button>
        <button id='1.2' onclick='play(audio_2);FF(1.2); You(1);'>Секира славянская</button>
        <button id='1.3' onclick='play(audio_2);FF(1.2)'>Лук</button>
        <button id='1.4' onclick='play(audio_2);FF(1.2)'>Копье</button>`, 5000)
    }

    if (number === 1.2){
        changeArea.innerHTML = ''
        App(choice_2, `<br> <button id='1.1' onclick='play(audio_3);FF(1.3)'>Воду из реки</button>
        <button id='1.2' onclick='play(audio_3);FF(1.3); You(1);'>Мудовуху</button>
        <button id='1.4' onclick='play(audio_3);FF(1.3); You(1);'>Водицу байкальскую</button>`, 4000)
    }

    if (number === 1.3){
        changeArea.innerHTML = ''
        App(choice_3, `<br> <button id='1.1' onclick='play(audio_4);FF(1.4); You(1);'>Негоже ящерам по земле русской ходить</button>
        <button id='1.2' onclick='play(audio_4);FF(1.4)'>Отпущу</button>
        <button id='1.3' onclick='play(audio_4);FF(1.4);You(1);'>Посажу в темницу</button>`, 4000)
    }

    if (number === 1.4){
        changeArea.innerHTML = ''
        App(choice_4, `<br> <button id='1.1' onclick='play(audio_5);FF(1.5)'>Пешком</button>
        <button id='1.2' onclick='play(audio_5);FF(1.5); You(1);'>На коне вороном</button>
        <button id='1.3' onclick='play(audio_5);FF(1.5); You(1);'>На коне гнедом</button>
        <button id='1.4' onclick='play(audio_5);FF(1.5); You(1);'>На печи лежу</button>`, 4000)
    }

    if (number === 1.5){
        changeArea.innerHTML = ''
        App(choice_5, `<br> <button id='1.1' onclick='play(audio_6);FF(1.6); You(1);'>С восходом</button>
        <button id='1.2' onclick='play(audio_6);FF(1.6)'>Когда получится, тогда и встаю</button>
        <button id='1.4' onclick='play(audio_6);FF(1.6); You(1);'>С петухами</button>`, 2000)
    }

    if (number === 1.6){
        changeArea.innerHTML = ''
        App(choice_6, `<br> <button id='1.1' onclick='play(audio_7);FF(1.7); You(1);'>Ровно 8, ни больше ни меньше</button>
        <button id='1.2' onclick='play(audio_7);FF(1.7); You(1);'>Чем больше, тем лучше</button>
        <button id='1.3' onclick='play(audio_7);FF(1.7);'>Не работаю</button>`, 4000)
    }

    if (number === 1.7){
        changeArea.innerHTML = ''
        App(choice_7, `<br> <button id='1.1' onclick='play(audio_8);FF(1.8); You(1);'>Три раза в день</button>
        <button id='1.2' onclick='play(audio_8);FF(1.8)'>Когда захочу, тогда и ем</button>
        <button id='1.4' onclick='play(audio_8);FF(1.8)'>Вообще не ем</button>`, 2000)
    }

    if (number === 1.8){
        changeArea.innerHTML = ''
        App(choice_8, `<br> <button id='1.1' onclick='FS(1);'>Нисколько</button>
        <button id='1.2' onclick='You(1); FS(1);'>Мало</button>
        <button id='1.3' onclick='You(1); FS(1);'>Много</button>`, 4000)
    }
}

let FS = function(number){
    if (number === 1){
        changeArea.innerHTML = ''
        App(ch, `<br>`, 4000)
        if(you === 9){
            Ap(choice[0], `<br> <img id='img' src="warrior_1.png"> <br> <button id='1.1' onclick='FF(1.0);play(audio_0);'>Пройти тест еще раз</button>`, 2000)
        }
        if(you === 8){
            Ap(choice[1], `<br> <img id='img' src="warrior_2.png"> <br> <button id='1.1' onclick='FF(1.0);play(audio_0);'>Пройти тест еще раз</button>`, 2000)
        }
        if(you === 7){
            Ap(choice[2], `<br> <img id='img' src="warrior_3.png"> <br> <button id='1.1' onclick='FF(1.0);play(audio_0);'>Пройти тест еще раз</button>`, 2000)
        }
        if(you < 7) {
            Ap(choice[3], `<br> <img id='img' src="lizard_2.png"> <br> <button id='1.1' onclick='FF(1.0);play(audio_0);'>Пройти тест еще раз</button>`, 2000)
        }
    }
}

