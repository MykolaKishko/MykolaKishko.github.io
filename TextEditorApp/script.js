function getID(a) {
    return document.getElementById(a);
}

var form = document.forms;
var login = 'admin';
var password = 'admin';

$('#container').css('padding', '85px 0 0 60px');
$('#container').fadeIn(4000);
$('body').css('overflow', 'hidden');

setTimeout(function() {
    $('#container').fadeOut(2000);
}, 3000);

window.onload = setTimeout(function() {   
    getID('preloader').style.display = 'none';
    $('#preloader').fadeOut(300);
    $('body').css('overflow', 'scroll');
}, 6300);


 
///////////////////////////////////////////////////////////////////////////////
//                 ////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////



$('#styleBtn').click(function() {
    $('#style').fadeIn(500);
    $('#wrap').css('transition', '.5s');
    getID('wrap').style.opacity = '0.5';
    $('#bg').css('transition', '.5s');
    getID('bg').style.opacity = '0.5';
    getID('style').style.opacity = '1';
    $('#close').css('transition', '.5s');
});


$('#editBtn').click(function() {
    $('#plMenu').fadeIn(500);
});


$('#lockBtn').click(function() {   
    $('#lock').fadeIn(500);
    $('#wrap').css('transition', '.5s');
    getID('wrap').style.opacity = '0.3';
    $('#bg').css('transition', '.5s');
    getID('bg').style.opacity = '0.3';
    getID('plCode').setAttribute('disabled', '');
    getID('saveBtn').setAttribute('disabled', '');
    getID('addBtn').setAttribute('disabled', '');
    getID('closeBtn').setAttribute('disabled', '');
    getID('editBtn').setAttribute('disabled', '');
    getID('styleBtn').setAttribute('disabled', '');
    getID('lockImgRed').style.display = 'none';
    getID('unlockImg').style.display = 'none';
    getID('lockImg').style.display = 'block';
    getID('lockT').innerHTML = 'Enter your pasword:';
    getID('passwordLock').style.borderBottom = '4px solid #531ABE';
    getID('lockT').style.color = '#531ABE';
    getID('passwordLock').style.color = '#531ABE';
});

$('#exitBtn').click(function() {
     $('#loginPanel').slideDown(500);
});


///////////////////////////////////////////////////////////////////////////////
//  Панель LOGIN   ////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////


$('.input_log').mouseout(function() {
    var inputValue = this.value;
     
    if (inputValue == '') {
        this.style.border = '2px solid red';
        this.style.color = 'red';
        
    } else if (inputValue == ' ' || inputValue == '  ' || inputValue == '   ') {
        this.style.border = '2px solid red';
        this.style.color = 'red';
    } 
});

$('.input_log').click(function() {
    this.style.border = '2px solid  #531ABE';
    this.style.color = '#531ABE';
});


$('#log').click(function() {
    
    var firstAnswer = getID('login').value;
    var secondAnswer = getID('password').value;
    
    if (login === firstAnswer && password === secondAnswer) {
        $('#loginPanel').slideUp(500);
        getID('login').value = '';
        getID('password').value = '';
    } 
    if (login != firstAnswer) {
        $('#login').css('border', '2px solid red');
        $('#login').css('color', 'red');
    }
    if (password != secondAnswer) {
        $('#password').css('border', '2px solid red');
        $('#password').css('color', 'red');
    }
});


///////////////////////////////////////////////////////////////////////////////
//  Панель EDIT    ////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////


$('#saveBtn').click(function() { 
    var val = getID('plCode').value;
    
    if (val == '') {
        $('#modalWindow').fadeIn(500);
        $('#modalBlock').fadeIn(500);
    }
    
    var div = document.createElement('div');
    
    div.innerHTML = '<br>' + getID('plCode').value;
    content.appendChild(div);
    getID('plCode').value = '';    
});

$('#closeMW').click(function() {
    $('#modalWindow').slideUp(500);
    $('#modalBlock').fadeOut(500);
});


$('#addBtn').click(function () { 
    $('#add').fadeIn(500);
    document.body.style.overflow = 'hidden';
    $('#wrap').css('transition', '.5s');
    getID('wrap').style.opacity = '.5';
    $('#bg').css('transition', '.5s');
    getID('bg').style.opacity = '.5';
    getID('style').style.opacity = '1';
    $('#closeAdd').css('transition', '.5s');   
});


$('.inputT').mousemove(function() {
    var inputValue = this.value;
    if (inputValue == '') {
        this.style.borderBottom = '2px solid  red';
        this.style.color = 'red';
    }   
    if (inputValue != '') {
        this.style.borderBottom = '2px solid  #531ABE';
        this.style.color = '#531ABE';
    } 
});

$('.inputT').click(function() { 
    this.style.borderBottom = '2px solid  #531ABE';
    this.style.color = '#531ABE';
});


$('.inputL').mousemove(function() { 

    var inputValue = this.value;
    if (inputValue == '') {
        this.style.borderBottom = '2px solid  red';
        this.style.color = 'red';
    } 
    if (inputValue != '') {
        this.style.borderBottom = '2px solid  #531ABE';
        this.style.color = '#531ABE';
    } 
    
});


$('.inputL').click(function() { 
    this.style.borderBottom = '2px solid  #531ABE';
    this.style.color = '#531ABE';
});    


$('#closeBtn').click(function() { 
    $('#plMenu').slideUp(1000);
});



///////////////////////////////////////////////////////////////////////////////
//  Панель Style   ////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////


$('#close').click(function() {   
    $('#style').slideUp(500);
    $('#wrap').css('transition', '.5s');
    getID('wrap').style.opacity = '1';
    $('#bg').css('transition', '.5s');
    getID('bg').style.opacity = '1';      
});


for(var i = 0;i<form.f_size.length;i++){
    
    form.f_size.elements[i].addEventListener('click',function(){
        getID('content').style.fontSize = this.value + 'px';
    })
}


getID('list').onchange = function () {
    
    for (var i = 0; i < form.list.length; i++) {
        var font = form.list.sel.value;
        getID('content').style.fontFamily = font;
    }
}


getID('bold').onclick = function() {   
    var boold = getID('bold');
    
    if (boold.checked == true) {
        getID('content').style.fontWeight = 'bold';
    } else if (boold.checked == false) {
        getID('content').style.fontWeight = 'normal';
    }
}


getID('italic'). onclick = function() {  
    var italic = getID('italic');
    
    if (italic.checked == true) {
        getID('content').style.fontStyle = 'italic';
    } else if (italic.checked == false) {
        getID('content').style.fontStyle = 'normal';
    }
}

var colors = ['#EDCD00', '#DB133B', '#00C455', '#A42929', '#02008B', '#fff', '#111', 'purple'];

var number = [1, 2, 3, 4, 5, 6, 7, 8];
    
$('#color').click(function() { 
    
    $('#colorBank').slideUp(300);
    $('#colorBank').slideDown(500);
    
    setTimeout (function() { 
        $('#colorBank').css('background', '#531ABE');
    }, 300 )

    for (i=0; i<=8; i++) { 
            var div = document.createElement('div');
            colorBank.insertBefore(div, colorBank.children[i]);
            div.style.background=colors[i];
            div.setAttribute('id', 'color' + number[i]);
            div.setAttribute('class', 'div');
    }

    getID('color1').onclick = function(){
        getID('content').style.color=colors[0];
    }
    getID('color2').onclick = function(){
        getID('content').style.color=colors[1];
    }
    getID('color3').onclick = function(){
        getID('content').style.color=colors[2];
    }
    getID('color4').onclick = function(){
        getID('content').style.color=colors[3];
    }
    getID('color5').onclick = function(){
        getID('content').style.color=colors[4];
    }
    getID('color6').onclick = function(){
        getID('content').style.color=colors[5];
    }
    getID('color7').onclick = function(){
        getID('content').style.color=colors[6];
    }
    getID('color8').onclick = function(){
        getID('content').style.color=colors[7];
    }     
});


$('#bgColor').click(function() { 
    
    $('#colorBank').slideUp(300);
    $('#colorBank').slideDown(500);
    
    setTimeout (function() { 
        $('#colorBank').css('background', '#297AD1');
    }, 300 )
    
    for (i=0; i<=8; i++) { 
            var div = document.createElement('div');
            colorBank.insertBefore(div, colorBank.children[i]);
            div.style.background=colors[i];
            div.setAttribute('id', 'color' + number[i]);
            div.setAttribute('class', 'div');
    }

    getID('color1').onclick = function(){
        getID('content').style.background=colors[0];
    }
    getID('color2').onclick = function(){
        getID('content').style.background=colors[1];
    }
    getID('color3').onclick = function(){
        getID('content').style.background=colors[2];
    }
    getID('color4').onclick = function(){
        getID('content').style.background=colors[3];
    }
    getID('color5').onclick = function(){
        getID('content').style.background=colors[4];
    }
    getID('color6').onclick = function(){
        getID('content').style.background=colors[5];
    }
    getID('color7').onclick = function(){
        getID('content').style.background=colors[6];
    }
    getID('color8').onclick = function(){
        getID('content').style.background=colors[7];
    }     
});



///////////////////////////////////////////////////////////////////////////////
// Панель ADD      ////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

document.body.addEventListener('input', function() { 
    var row = getID('row').value;
    var column = getID('column').value ;
    var cellWidth = getID('cellWidth').value;
    var cellheight = getID('cellHeight').value;
    var bWidth = getID('bWidth').value;
    var liNumb = getID('liNumb').value;
    if (row == '', column == '', cellWidth == '', cellheight == '', bWidth == '') {
        getID('createTable').setAttribute('disabled', '');
        $('#createTable').css('opacity', '.5');
    }
    
    if (row != '', column != '', cellWidth != '', cellheight != '', bWidth != '') {
        $('#createTable').removeAttr('disabled');
        $('#createTable').css('opacity', '1');
    }
    
    
    if (liNumb == '') {
        getID('createList').setAttribute('disabled', '');
        $('#createList').css('opacity', '.5');
    }
    
    if (liNumb != '') {
        $('#createList').removeAttr('disabled');
        $('#createList').css('opacity', '1');
    }
 
   
    
    
});

$('#closeAdd').click(function() { 
    $('#add').slideUp(500);
    $('#preview').slideUp(500);
    $('#wrap').css('transition', '.5s');
    document.body.style.overflow = 'scroll';
    getID('wrap').style.opacity = '1';
    $('#bg').css('transition', '.5s');
    getID('bg').style.opacity = '1';
    var n = '';
    getID('row').value = n;
    getID('column').value = n;
    getID('cellWidth').value = n;
    getID('cellHeight').value = n;
    getID('bWidth').value = n;
    getID('liNumb').value = n;
    getID('createList').setAttribute('disabled', '');
    $('#createList').css('opacity', '.5');
    getID('createTable').setAttribute('disabled', '');
    $('#createTable').css('opacity', '.5');
}); 


$('#tableR').click(function() {  
    var x = getID('tableR');
    
    if (x.checked == true) {
        $('#addList').fadeOut(200);
        $('#createList').fadeOut(200);
        $('#previewL').fadeOut(200);
        
        setTimeout(function() {
            $('#table').fadeIn(500);
            $('#createTable').fadeIn(500);
            $('#previewT').fadeIn(500);
            
        }, 220)      
    } 
});


$('#listR').click(function() {
    var x = getID('listR');
    
    if (x.checked == true) {
        $('#table').fadeOut(200);
        $('#createTable').fadeOut(200);
        $('#previewT').fadeOut(200);
        
        setTimeout(function() {
            $('#addList').fadeIn(500);
            $('#createList').fadeIn(500);
            $('#previewL').fadeIn(500);
        }, 220)     
    } 
});


getID('createTable').onclick = function() { 
    
    var cellWidth = getID('cellWidth').value;
    var cellHeight = getID('cellHeight').value;
    var borderWidth = getID('bWidth').value;
    var borderType = getID('bType').value;
    var borderColor = getID('bColor').value;
    var x = getID('plCode').value;
    var column = getID('column').value;
    var row = getID('row').value;
    var openT = '<table' + ' ' + 'style="border:'+ borderWidth + 'px ' + borderType + ' ' + borderColor + '">'
    var td = '<td ' + 'style="border:' + borderWidth + 'px ' + borderType + ' ' + borderColor + '" ' + 'width="' + cellWidth + 'px' + '" ' + 'height="' + cellHeight + 'px' + '"' + '></td>';
    
    getID('plCode').value += openT;
    
    for(var i=1; i<=row; i++) {
        getID('plCode').value += "<tr>";
        for(var j=1; j<=column; j++){
            getID('plCode').value += td;
        }
        getID('plCode').value += "</tr>";
    }
    getID('plCode').value += "</table>";
    $('#add').slideUp(500);
    $('#preview').slideUp(500);
    getID('wrap').style.opacity = '1';
    getID('bg').style.opacity = '1'; 
    document.body.style.overflow = 'scroll';
    var n = '';
    getID('row').value = n;
    getID('column').value = n;
    getID('cellWidth').value = n;
    getID('cellHeight').value = n;
    getID('bWidth').value = n;
    getID('liNumb').value = n;
    getID('createList').setAttribute('disabled', '');
    $('#createList').css('opacity', '.5');
    getID('createTable').setAttribute('disabled', '');
    $('#createTable').css('opacity', '.5');
}


getID('previewT').onclick = function() {
 
    $('#preview').slideDown(500);
    getID('pContent').value = '';
    
    var cellWidth = getID('cellWidth').value;
    var cellHeight = getID('cellHeight').value;
    var borderWidth = getID('bWidth').value;
    var borderType = getID('bType').value;
    var borderColor = getID('bColor').value;
    var x = getID('plCode').value;
    var val
    var column = getID('column').value;
    var row = getID('row').value;
    var openT = '<table' + ' ' + 'style="border:'+ borderWidth + 'px ' + borderType + ' ' + borderColor + '">'
    var td = '<td ' + 'style="border:' + borderWidth + 'px ' + borderType + ' ' + borderColor + '" ' + 'width="' + cellWidth + 'px' + '" ' + 'height="' + cellHeight + 'px' + '"' + '></td>';
    
    getID('pContent').value += openT;
    
    for(var i=1; i<=row; i++) {
        getID('pContent').value += "<tr>";
        for(var j=1; j<=column; j++){
            getID('pContent').value += td;
        }
        getID('pContent').value += "</tr>";
    }
    getID('pContent').value += "</table>"; 
    var val = getID('pContent').value;
    $('#previewBody').html(val);
} 


getID('mType').style.display = 'none';
getID('nType').style.display = 'none';

getID('listType').addEventListener('change', function() { 
    
    var sel0 = getID('listType').options[0].selected;
    var sel1 = getID('listType').options[1].selected;
    var sel2 = getID('listType').options[2].selected;
    
    if (sel1 == true) { 
        getID('listType').options[1].value = '1';
        getID('listType').options[2].value = '0';
        getID('mType').style.display = 'none';
        getID('nType').style.display = 'block';       
    } else if (sel2 == true) {
        getID('listType').options[1].value = '0';
        getID('listType').options[2].value = '1';
        getID('nType').style.display = 'none';
        getID('mType').style.display = 'block';
    } else if (sel0 == true) {
        getID('nType').style.display = 'none';
        getID('mType').style.display = 'none';
    }
});

    
getID('createList').onclick = function() {
    
    var opt1 = getID('listType').options[1].selected;
    var opt2 = getID('listType').options[2].selected;    
    
    if (opt1 == true) {
        var numbLi = getID('liNumb').value;
        var arab = getID('nubmType').options[0].selected;
        var rome = getID('nubmType').options[1].selected;
        var lett = getID('nubmType').options[2].selected;
        
        if (arab == true) {
            getID('plCode').value += '<ol' + ' type="' + '1"' + '>';
        } else if (rome == true) {
            getID('plCode').value += '<ol' + ' type="' + 'I"' + '>';
        } else if (lett == true) {
            getID('plCode').value += '<ol' + ' type="' + 'A"' + '>';
        }
        for(var i=1; i<=numbLi; i++){
            getID('plCode').value += '<li>';
            getID('plCode').value += '</li>';
        }
        getID('plCode').value += '</ol>';       
        
    } else if (opt2 == true) {
        
        var numbLi = getID('liNumb').value;
        var circle = getID('markType').options[0].selected;
        var disc = getID('markType').options[1].selected;
        var square = getID('markType').options[2].selected;
        
        if (circle == true) {
            getID('plCode').value += '<ul' + ' style="list-style-type:' + 'circle;"' + '>';
        } else if (disc == true) {
            getID('plCode').value += '<ul' + ' style="list-style-type:' + 'disc;"' + '>';
        } else if (square == true) {
            getID('plCode').value += '<ul' + ' style="list-style-type:' + 'square;"' + '>';
        }
        for(var i=1; i<=numbLi; i++){
            getID('plCode').value += '<li>';
            getID('plCode').value += '</li>';
        }
        getID('plCode').value += '</ul>';      
    }
    
    $('#add').slideUp(500);
    $('#preview').slideUp(500);
    getID('wrap').style.opacity = '1';
    getID('bg').style.opacity = '1'; 
    document.body.style.overflow = 'scroll';
    var n = '';
    getID('row').value = n;
    getID('column').value = n;
    getID('cellWidth').value = n;
    getID('cellHeight').value = n;
    getID('bWidth').value = n;
    getID('liNumb').value = n;
    getID('createList').setAttribute('disabled', '');
    $('#createList').css('opacity', '.5');
    getID('createTable').setAttribute('disabled', '');
    $('#createTable').css('opacity', '.5');
}


getID('previewL').onclick = function() {
    getID('pContent').value = '';
    $('#preview').slideDown(500);
    
    var opt1 = getID('listType').options[1].selected;
    var opt2 = getID('listType').options[2].selected;    
    
    if (opt1 == true) {
        var numbLi = getID('liNumb').value;
        var arab = getID('nubmType').options[0].selected;
        var rome = getID('nubmType').options[1].selected;
        var lett = getID('nubmType').options[2].selected;
        
        if (arab == true) {
            getID('pContent').value += '<ol' + ' type="' + '1"' + '>';
        } else if (rome == true) {
            getID('pContent').value += '<ol' + ' type="' + 'I"' + '>';
        } else if (lett == true) {
            getID('pContent').value += '<ol' + ' type="' + 'A"' + '>';
        }
        for(var i=1; i<=numbLi; i++){
            getID('pContent').value += '<li>';
            getID('pContent').value += '</li>';
        }
        getID('pContent').value += '</ol>';
        var val = getID('pContent').value;
        $('#previewBody').html(val);
        
    } else if (opt2 == true) {
        
        var numbLi = getID('liNumb').value;
        var circle = getID('markType').options[0].selected;
        var disc = getID('markType').options[1].selected;
        var square = getID('markType').options[2].selected;
        
        if (circle == true) {
            getID('pContent').value += '<ul' + ' style="list-style-type:' + 'circle;"' + '>';
        } else if (disc == true) {
            getID('pContent').value += '<ul' + ' style="list-style-type:' + 'disc;"' + '>';
        } else if (square == true) {
            getID('pContent').value += '<ul' + ' style="list-style-type:' + 'square;"' + '>';
        }
        for(var i=1; i<=numbLi; i++){
            getID('pContent').value += '<li>';
            getID('pContent').value += '</li>';
        }
        getID('pContent').value += '</ul>';
        var val = getID('pContent').value;
        $('#previewBody').html(val);
    }     
}


var block = getID('preview');

block.onmousedown = function(e) { 

    block.style.position = 'absolute';
    moveAt(e);

    document.body.appendChild(block);
    block.style.zIndex = 1000; 

    function moveAt(e) {
        block.style.left = e.pageX - block.offsetWidth / 2 + 'px';
        block.style.top = e.pageY - block.offsetHeight / 2 + 'px';
    }

    document.onmousemove = function(e) {
        moveAt(e);
    }

    block.onmouseup = function() {
        document.onmousemove = null;
        block.onmouseup = null;
    }
}


///////////////////////////////////////////////////////////////////////////////
//  Панель LOCK            ////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////


getID('passwordLock').onclick = function() { 
    $('#lockImgRed').fadeOut(100);
    
    setTimeout (function() {
        $('#lockImg').fadeIn(500);
    }, 100);
    
    getID('passwordLock').style.borderBottom = '4px solid #531ABE';
    getID('lockT').style.color = '#531ABE';
    getID('lockT').innerHTML = 'Enter your pasword:';
}


getID('applyBtn').onclick = function() {  
    var answer = getID('passwordLock').value;
    
    if  (password == answer) {
        $('#lockImg').fadeOut(100);
    
        setTimeout (function() {
            $('#unlockImg').fadeIn(500);
            getID('passwordLock').style.borderBottom = '4px solid #21D342';
            getID('passwordLock').style.color = '#21D342';
            getID('lockT').innerHTML = 'Password is correct';
            getID('lockT').style.color = '#21D342';
        }, 100);
        
        setTimeout (function() {
            $('#lock').slideUp(500);
            $('#wrap').css('transition', '.5s');
            $('#bg').css('transition', '.5s');
            getID('wrap').style.opacity = '1';
            getID('bg').style.opacity = '1';
        }, 1000);
        
        getID('styleBtn').removeAttribute('disabled');
        getID('plCode').removeAttribute('disabled');
        getID('saveBtn').removeAttribute('disabled');
        getID('addBtn').removeAttribute('disabled');
        getID('closeBtn').removeAttribute('disabled');
        getID('editBtn').removeAttribute('disabled');
        getID('passwordLock').value = '';
        getID('lockImgRed').style.display = 'none';
        getID('unlockImg').style.display = 'none';
        getID('lockImg').style.display = 'block';
    } else if (password != answer) {    
        $('#lockImg').fadeOut(100);
    
        setTimeout (function() {
            $('#lockImgRed').fadeIn(500);
        }, 100);
        
        getID('lockT').innerHTML = 'Wrong password:';
        getID('passwordLock').value = '';
        getID('passwordLock').style.borderBottom = '4px solid red';
        getID('lockT').style.color = 'red';
    }   
}

