
function date()
{
    let date = new Date();
    document.getElementById("time").innerHTML = date;
    document.getElementById("custom").innerHTML = new Date( date.setDate( date.getDate() + 1 ) ) ;
    document.getElementById("UTC").innerHTML = date.toUTCString();
    document.getElementById("string").innerHTML = date.toDateString();
    document.getElementById("ISO").innerHTML = date.toISOString();
    document.getElementById("mls").innerHTML = Date.parse(date);
}