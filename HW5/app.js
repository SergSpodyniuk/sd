"use strict";
//1
function durationBetweenDates(startDate,endDate,unit) {

    const start = new Date(startDate).getTime();
    const end = new Date(endDate).getTime();

    const dif = Math.abs(end - start);

    const unitConersion = {
        seconds: dif / 1000,
        minutes: dif / (1000 * 60),
        hours: dif / (1000 * 60 * 60),
        days: dif / (1000 * 60 * 60 * 24),
    };


    return `${Math.floor(unitConersion[unit])} ${unit}`;
}
console.log(durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds'));
console.log(durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days'));   

//2
const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAngGEs: '48.7584',
    };  
    function optimizer(data) {
        const result = {};
    
        for (const [key, value] of Object.entries(data)) {
            const changedKey = key.toLowerCase(); 
            const roundedValue = parseFloat(value).toFixed(2);
            result[changedKey] = roundedValue;
        }
    
        return result;
    }
    
    console.log(optimizer(priceData));
