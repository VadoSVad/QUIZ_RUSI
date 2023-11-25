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
