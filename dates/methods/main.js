function toList(arr)
{
    let out = `<ul>`;
    for(x of arr)
        out += `<li>${x}</li>`;
    out += `</ul>`
    return out;
}

function ini()
{
    let currDate = new Date();
    arr = [
        currDate.getSeconds(),
        currDate.getMinutes(),
        currDate.getHours(),
        currDate.getDate(),
        currDate.getMonth() + 1,
        currDate.getFullYear()
    ];
    document.getElementById("dateList").innerHTML = toList(arr);
    document.getElementById("ms").innerHTML = currDate.getTime();
}
