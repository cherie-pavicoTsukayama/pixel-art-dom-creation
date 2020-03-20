var body = document.body;

// var section = document.createElement('section');
var div = document.createElement('div');

var colorArrayId = ['redSection', 'orangeSection', 'yellowSection', 'greenSection', 'blueSection', 'purpleSection'];
var rowsArray = ['row1', 'row2', 'row3'];
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

function createSections(array){
    for(var i = 0; i < array.length; i++){
        var section = document.createElement('section');
        section.setAttribute('id', array[i]);
        section.setAttribute('class', 'container' +' height' + ' col-15');
        body.appendChild(section);
    }
}

createSections(colorArrayId);
var colorSection = document.querySelectorAll('section');
function createRows(array){
    for(var i = 0; i < array.length; i++){
        var section = colorSection[i];
        for(var row = 0; row < rowsArray.length; row++){
            var rowDiv = document.createElement('div');
            rowDiv.setAttribute('id', colors[i]+ rowsArray[row]);
            rowDiv.setAttribute('class', 'col-15 row-container');
            section.appendChild(rowDiv);
        }

    }
}

createRows(colorSection);

var redRow1 = document.getElementById('redrow1');
redRow1.appendChild(div).setAttribute('class', 'white col-3 block-height');
redRow1.appendChild(document.createElement('div')).setAttribute('class', 'black block-height col-4');
redRow1.appendChild(document.createElement('div')).setAttribute('class', 'white block-height col-3');
redRow1.appendChild(document.createElement('div')).setAttribute('class', 'black block-height col-4');
redRow1.appendChild(document.createElement('div')).setAttribute('class', 'white block-height col-4');
var redRow2 = document.getElementById('redrow2');
redRow2.appendChild(document.createElement('div')).setAttribute('class', 'white col-2 block-height');
redRow2.appendChild(document.createElement('div')).setAttribute('class', 'black col-1 block-height');
redRow2.appendChild(document.createElement('div')).setAttribute('class', 'red col-4 block-height');
redRow2.appendChild(document.createElement('div')).setAttribute('class', 'black col-1 block-height');
redRow2.appendChild(document.createElement('div')).setAttribute('class', 'white col-1 block-height');
redRow2.appendChild(document.createElement('div')).setAttribute('class', 'black col-1 block-height');
redRow2.appendChild(document.createElement('div')).setAttribute('class', 'red col-4 block-height');
redRow2.appendChild(document.createElement('div')).setAttribute('class', 'black col-1 block-height');
redRow2.appendChild(document.createElement('div')).setAttribute('class', 'white col-2 block-height');
