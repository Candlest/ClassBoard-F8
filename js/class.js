/*课表 */

//from var source = cef_obj.getClass();
var source = 
`星期,1,2,3,4,5,6,7,8,9,10,11
周一,升旗,班会,数学,数学,化学,生物,英语,语文,物理,晚修,晚修,
周二,语文,数学,语文,体育,英语,物理,化学,生物,自习,晚修,晚修,
周三,英语,英语,物理,语文,生物,化学,数学,英语,自习,晚修,晚修,
周四,语文,生物,英语,体育,化学,语文,物理,数学,数学,晚修,晚修,
周五,英语,生物,化学,数学,语文,语文,物理,英语,自习,无,无,
周六,无,无,无,无,无,无,无,无,无,无,无,
周日,无,无,无,无,无,无,无,无,无,晚修,晚修`;

let source_vec = source.split(',');
console.log(source_vec)

var classtable = document.getElementById('classtable');

var date = new Date();

var week = new Date().getDay();

var offset = week * 12
if (week == 0) {
    offset = 7 * 12;
}



var today_vec = source_vec.slice(offset, offset + 12)
console.log(today_vec);



for (let index = 0; index < today_vec.length-1; index++) {console.log(index)
    var item = today_vec[index];
    document.getElementById('c' + index).innerHTML = '<a href="#" role="button" class="contrast" id="c_b'+ index + '">' + item + '</a>';
}



function nowClass() {
    var date = new Date();
    date.setFullYear(2024);
    date.setMonth(6);
    date.setDate(7);
    console.log(date);
	var colorize = true;
    if (new Date(2024, 6, 7, 22, 0, 0) < date && date < new Date(2024, 6, 7, 22, 30, 0)) {
        it = 10
        colorize = false;
    }
    else if (new Date(2024, 6, 7, 20, 40, 0) < date && date < new Date(2024, 6, 7, 22, 0, 0)) {
        //d2
        it = 10
    }
    else if (new Date(2024, 6, 7, 20, 25, 0) < date && date < new Date(2024, 6, 7, 20, 40, 0)) {
        it = 9;
	colorize = false;
    }
    else if (new Date(2024, 6, 7, 19, 0, 0) < date && date < new Date(2024, 6, 7, 20, 25, 0)) {
        it = 9;
    }
    else if (new Date(2024, 6, 7, 16, 45, 0) < date && date < new Date(2024, 6, 7, 19, 0, 0)) {
        it = 8;
	colorize = false;
    }
    else if (new Date(2024, 6, 7, 16, 5, 0) < date && date < new Date(2024, 6, 7, 16, 45, 0)) {
        it = 8;
    }
    else if (new Date(2024, 6, 7, 15, 55, 0) < date && date < new Date(2024, 6, 7, 16, 5, 0)) {
        it = 7;colorize = false;
    }
    else if (new Date(2024, 6, 7, 15, 15, 0) < date && date < new Date(2024, 6, 7, 15, 55, 0)) {
        it = 7;
    }
    else if (new Date(2024, 6, 7, 15, 0, 0) < date && date < new Date(2024, 6, 7, 15, 15, 0)) {
        it = 6;colorize = false;
    }
    else if (new Date(2024, 6, 7, 14, 20, 0) < date && date < new Date(2024, 6, 7, 15, 0, 0)) {
        it = 6;
    }
    else if (new Date(2024, 6, 7, 12, 15, 0) < date && date < new Date(2024, 6, 7, 14, 20, 0)) {
        it = 5;colorize = false;
    }
    else if (new Date(2024, 6, 7, 11, 35, 0) < date && date < new Date(2024, 6, 7, 12, 15, 0)) {
        it = 5;
    }
    else if (new Date(2024, 6, 7, 11, 25, 0) < date && date < new Date(2024, 6, 7, 11, 35, 0)) {
        it = 4;colorize = false;
    }
    else if (new Date(2024, 6, 7, 10, 45, 0) < date && date < new Date(2024, 6, 7, 11, 25, 0)) {
        it = 4;
    }
    else if (new Date(2024, 6, 7, 10, 20, 0) < date && date < new Date(2024, 6, 7, 10, 45, 0)) {
        it = 3;colorize = false;
    }
    else if (new Date(2024, 6, 7, 9, 40, 0) < date && date < new Date(2024, 6, 7, 10, 20, 0)) {
        it = 3;
    }
    else if (new Date(2024, 6, 7, 9, 30, 0) < date && date < new Date(2024, 6, 7, 9, 40, 0)) {
        it = 2;colorize = false;
    }
    else if (new Date(2024, 6, 7, 8, 50, 0) < date && date < new Date(2024, 6, 7, 9, 30, 0)) {
        it = 2;
    }
    else if (new Date(2024, 6, 7, 8, 40, 0) < date && date < new Date(2024, 6, 7, 8, 50, 0)) {
        it = 1;colorize = false;
    }
    else if (new Date(2024, 6, 7, 8, 0, 0) < date && date < new Date(2024, 6, 7, 8, 40, 0)) {
        it = 1;
    } 
    else if (new Date(2024, 6, 7, 7, 55, 0) < date && date < new Date(2024, 6, 7, 8, 0, 0)) {
        it = 0;colorize = false;
    }
    else if (new Date(2024, 6, 7, 7, 20, 0) < date && date < new Date(2024, 6, 7, 7, 55, 0)) {
        it = 0;
    }
    
console.log(it);

document.getElementById('c_b' + it).style.backgroundColor = colorize?'#c4c4ef':'#2a2a47';
document.getElementById('c_b' + it).style.color = colorize?'black':'white';
document.getElementById('c_b' + it).style.fontWeight = '600';

    
for (let index = 0; index < it; index++) {
        document.getElementById('c_b' + index).style.backgroundColor =  '#2a2a47';
        document.getElementById('c_b' + index).style.fontWeight = '450'
	document.getElementById('c_b' + it).style.lineHeight = '1';
    }
//document.getElementById('c_b' + it).style.lineHeight = '0.5';

}

nowClass()


setInterval(nowClass, 1000);