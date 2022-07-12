function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


function changeColor(id, color)
{
    document.getElementById(id).style.color = color;
    if(id = 'ex2')
    {
        sleep(100).then(() => { document.getElementById(id).style.color = 'black'; });
    }
}