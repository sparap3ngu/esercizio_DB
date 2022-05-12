db.collection("Recensioni")
.add({
    descrizione: "Top wow",
    utente: "pippo",
    voto: 3,
    });


db.collection("Recensioni")
.doc ("1")
.set ({
    descrizione: "pippo"
})
    //è un metodo asincrono che restituisce un oggetto di tipo promise!