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
    const mathConsArr = [
        Math.E,        // returns Euler's number
        Math.PI,       // returns PI
        Math.SQRT2,    // returns the square root of 2
        Math.SQRT1_2,  // returns the square root of 1/2
        Math.LN2,      // returns the natural logarithm of 2
        Math.LN10,     // returns the natural logarithm of 10
        Math.LOG2E,    // returns base 2 logarithm of E
        Math.LOG10E   // returns base 10 logarithm of E
    ];
    document.getElementById("consList").innerHTML = toList(mathConsArr);

    const inpVal = [
        -4.2,
        4.5,
        4.4,
        3.12,
        59.81
    ];

    function pushVal(inpArr, inpF)
    {
        let out = [];
        inpArr.forEach( function(value){ out.push( inpF(value) ) } );
        return out;
    }

    let round = [], ceil = [], floor = [], trunc = [];
    round = pushVal( inpVal, Math.round );
    ceil = pushVal( inpVal, Math.ceil );
    floor = pushVal( inpVal, Math.floor );
    trunc = pushVal( inpVal, Math.trunc );
    let allOut = [inpVal, round, ceil, floor, trunc];
    for( let i = 0; i < allOut.length; i++ )
        allOut[i] = allOut[i].join("/////");
    
    document.getElementById("roundEx").innerHTML = toList(allOut);

    let sign = [], sqrt = [], abs = [];
    sign = pushVal( inpVal, Math.sign );
    sqrt = pushVal( inpVal, Math.sqrt );
    abs = pushVal( inpVal, Math.abs );
    allOut = [sign, sqrt, abs]
    document.getElementById("misc").innerHTML = toList(allOut);

}