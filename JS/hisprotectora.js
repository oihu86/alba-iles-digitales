

window.alert("Bienvenida a nuestra protectora, suponemos que quieres adoptar una mascota, por ahora solo tenemos perros, gatos y pajaros, que tipo de mascota quieres adoptar?");     
acceptedTypes = ["perro", "gato", "pajaro"];
mascota = window.prompt("Escribe perro, gato o pajaro");

if (mascota === "perro") {
    window.alert ("Perfecto, tenemos un pastor aleman, un labrador y un chihuahua, cual quieres?");
    let perro = window.prompt ("Escribe pastor, labrador o chihuahua");
    if (perro === "pastor") {
        window.alert ("Perfecto, el pastor aleman es muy bueno, te lo llevas a casa");
    } else if (perro === "labrador") {
        window.alert ("Perfecto, el labrador es muy bueno, te lo llevas a casa");
    } else if (perro === "chihuahua") {
        window.alert ("Perfecto, el chihuahua es muy bueno, te lo llevas a casa");
    } else {
        window.alert ("No tenemos esa raza de perro");
    }
} else if (mascota === "gato") {
    window.alert ("Perfecto, tenemos un siamés, un persa y un esfinge, cual quieres?");
    let gato = window.prompt ("Escribe siames, persa o esfinge");
    if (gato === "siames") {
        window.alert ("Perfecto, el siamés es muy bueno, te lo llevas a casa");
    } else if (gato === "persa") {
        window.alert ("Perfecto, el persa es muy bueno, te lo llevas a casa");
    } else if (gato === "esfinge") {
        window.alert ("Perfecto, el esfinge es muy bueno, te lo llevas a casa");
    } else {
        window.alert ("No tenemos esa raza de gato");
    }
} else if (mascota === "pajaro") {
    window.alert ("Perfecto, tenemos un loro, un canario y un periquito, cual quieres?");
    let pajaro = window.prompt ("Escribe loro, canario o periquito");
    if (pajaro === "loro") {
        window.alert ("Perfecto, el loro es muy bueno, te lo llevas a casa");
    } else if (pajaro === "canario") {
        window.alert ("Perfecto, el canario es muy bueno, te lo llevas a casa");
    } else if (pajaro === "periquito") {
        window.alert ("Perfecto, el periquito es muy bueno, te lo llevas a casa");
    } else {
        window.alert ("No tenemos esa raza de pajaro");
    }
} else {
    window.alert ("No tenemos ese tipo de mascota");
}       