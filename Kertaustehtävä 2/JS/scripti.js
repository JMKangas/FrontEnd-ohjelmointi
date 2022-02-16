function Tarkista() {
    var kauttajatunnus = document.getElementById("Username").value;
    var salasana = document.getElementById("Password").value;
    if (kauttajatunnus == "opiskelija" && salasana == "lapinamk2022") {
        alert("Kirjautuminen onnistui")
    } else {
        alert("Kirjautuminen epäonnistui")
    }
}