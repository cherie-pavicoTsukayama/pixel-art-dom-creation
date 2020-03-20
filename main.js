var body = document.body;

// var section = document.createElement('section');
var div = document.createElement('div');

var colorArrayId = ['redSection', 'orangeSection', 'yellowSection', 'greenSection', 'blueSection', 'purpleSection'];
var rowsArray = ['row1', 'row2', 'row3']

function createSections(array){
    for(var i = 0; i < array.length; i++){
        var section = document.createElement('section');
        section.setAttribute('id', array[i]);
        section.setAttribute('class', 'container' +' height' + ' col-12');
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
            rowDiv.setAttribute('id', rowsArray[row]);
            section.appendChild(rowDiv);
        }

    }
}

createRows(colorSection);
