var body = document.body;

var section = document.createElement('section');
var div = document.createElement('div');

var colorArrayId = ['redSection', 'orangeSection', 'yellowSection', 'greenSection', 'blueSection', 'purpleSection'];

function createSections(array){
    for(var i = 0; i < array.length; i++){
        var section = document.createElement('section');
        section.setAttribute('id', array[i]);
        section.setAttribute('class', 'container' +' height' + ' col-12');
        body.appendChild(section);
    }
}

createSections(colorArrayId);
