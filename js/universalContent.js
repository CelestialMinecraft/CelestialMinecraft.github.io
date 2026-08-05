document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("headerMain").innerHTML = "<h1>Celestial MC</h1>";
    document.getElementById("navMain").innerHTML = `
        <ul class=\"navMain\">
            <li><a href=\"./index.html">Home</a></li>
            <li><a href=\"./plugins.html">Plugins</a></li>
        </ul>
    `;
    document.getElementById("footerMain").innerHTML = "<p>© 2026 Celestial MC. All rights reserved.</p>";
});