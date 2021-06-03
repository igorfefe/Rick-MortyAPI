var datos;

function getCharacters() {
    $.ajax({
        url: "https://rickandmortyapi.com/api/character/5,76,33,23,45,56",
        method: "GET",
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded',
        success: function (data) {
            var characters = data;
            var f1 = document.querySelector('#f1');

            f1.src = characters[2].image;
        },
        error: function (error) {
            console.log(error);
        }
    })
};
getCharacters();

console.log(datos);

