
function ini()
{
    let i = 0;
    arr = []
    
    for(;;)
    {
        if(i < 10) arr.push(i);
        else break;
        i += 1;
    }
    document.getElementById("forLoopEx").innerHTML = arr;

    
    person = {fName:"Dawid", lName:"Serek", Age:19};
    out = "";
    for( let x in person )
    {
        out += person[x] + " ";
    }
    
    document.getElementById("inLoop").innerHTML = out;

}