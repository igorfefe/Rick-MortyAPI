    $.ajax({
        url: "https://rickandmortyapi.com/api/character/5,76,33,23,45,56",
        method: "GET",
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded',
        success: function (data) {
            // Guardar en variables los personajes
            var charactersArray = data;
            var characterBeebo = charactersArray[2];
            
            // Pintar
            var beeboBox = document.querySelector("#beebo-box");
            beeboBox.innerHTML = characterBeebo.name;
            var img = document.createElement("img");
            beeboBox.appendChild(img);
            img.src = characterBeebo.image;
            console.log(characterBeebo.image);


        },
        error: function (error) {
            console.log(error);
        }
    });


