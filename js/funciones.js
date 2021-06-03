function getCharacters() {
    $.ajax({
        url: "https://rickandmortyapi.com/api/character/5,76,33,23,45,56",
        method: "GET",
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded',
        success: function (data) {
            var charactersArray = data;
            console.log(charactersArray);
        },
        error: function (error) {
            console.log(error);
        }
    })
};
getCharacters();
console.log(getCharacters());


