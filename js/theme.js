let stylesheet = document.createElement("link");
stylesheet.href = "css/light.css";
stylesheet.rel = "stylesheet";
document.body.appendChild(stylesheet);

let sc_about = document.getElementById("about");
let sc_contact = document.getElementById("contact");

let night = (function()
{
    let hours = new Date().getHours();
    return hours >= 21 || hours <= 6;
})();

function theme_set()
{
    stylesheet.href = night ? "css/dark.css" : "css/light.css";
    let postfix = night ? "_night" : "";
    sc_about.style.backgroundImage = "url(img/background_00" + postfix + ".png)";
    sc_contact.style.backgroundImage = "url(img/background_01" + postfix + ".png)";
}

function theme_toggle()
{
    night = !night;
    theme_set();
}

theme_set();
