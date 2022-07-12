
function toList(arr)
{
    let out = `<ul>`;
    for(x of arr)
        out += `<li>${x}</li>`;
    out += `</ul>`
    return out;
}

function testF()
{
    let words = [
        "car",
        "cat",
        "cottage", 
        "cameleon"
    ]; //!!!prefered method of declaration!!!

    //ex1
    document.getElementById("arrEx1").innerHTML =  words;

    //ex2
    let list = toList(words);
    document.getElementById("arrEx2").innerHTML = list;

    //ex3
    document.getElementById("space").innerHTML = words.join(" ");

    //ex4
    const cars = new Array("Saab", "Volvo", "BMW");
    document.getElementById("arrEx3").innerHTML = cars;

    //ex5
    const fruits = ["Apple", "Banana"];
    fruits.push("Candy");
    document.getElementById("push").innerHTML = fruits;
    fruits.pop();
    document.getElementById("push").innerHTML = fruits;

    //concat ex
    document.getElementById("concat").innerHTML = fruits.concat(cars)
}

function euclides()
{
    const n = 10000 + 1;
    let euc = [];
    for(let i = 0; i < n; i++) euc[i] = false;

    for(let i = 2; i < n; i++)
        for(let j = i * 2; j < n; j+=i)
            euc[j] = true;

    out = [];
    for(let i = 2; i < n; i++)
        if(!euc[i])
            out.push(i);
    out.reverse();

    out = toList(out);
    document.getElementById("numbers").innerHTML = out;
}

function random(a, b)
{
    let extra = b - a;
    let findExtra = Math.round(Math.random() * extra);
    return Math.floor( a + findExtra );
}

function methods()
{
    const n = 100;
    arr = [];
    
    //create random array, sort it and change to ul
    for(let i = 0; i < n; i++)
        arr.push(random(1,10000));
    
    let max = Math.max.apply(null, arr);
    let min = Math.min.apply(null, arr);
    
    arr.sort(function(a, b){return b - a});
    arr = toList(arr);
    
    document.getElementById("demo").innerHTML = arr;
    document.getElementById("max").innerHTML = max;
    document.getElementById("demo2").innerHTML = min;
}


function iteration()
{
    //initiate
    const n = 50;
    let arr = [];
    for(let i = 0; i < n; i++)
        arr.push(random(1,100));
    document.getElementById("data").innerHTML = arr;

    //show map
    let map = arr;
    map = map.map( function(value){return value*2} );
    document.getElementById("map").innerHTML = map;

    //filter ex
    let filter = arr;
    filter = filter.filter( function(value){return value>50} );
    document.getElementById("filter").innerHTML = filter;

    //reduce ex
    let reduce = arr;
    reduce = reduce.reduce( function(redundant, value) {return redundant / value} );
    document.getElementById("reduce").innerHTML = reduce;
    
    //every, some
    let every = arr, some = arr;
    every = every.every( function(value){ return value < 5 } );
    some = some.some( function(value){ return value < 5 } );
    document.getElementById("every").innerHTML = every;
    document.getElementById("some").innerHTML = some;

    //find
    let find = arr, index = arr;
    find = find.find( function(value){return value > 90} );
    index = index.findIndex( function(value){return value > 90} );
    document.getElementById("first").innerHTML = find;
    document.getElementById("index").innerHTML = index + 1;
}