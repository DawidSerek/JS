
function ini()
{
    exArr = [
        "a",
        "a",
        "b",
        "c"
    ]

    set = new Set(exArr);

    let out = "";
    set.forEach(function(value) {out += value;});

    document.getElementById("out").innerHTML = out;
    
    out = "";
    set.add("d");
    set.forEach(function(value) {out += value;});
    document.getElementById("out").innerHTML = out;

}