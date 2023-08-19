/*倒计日*/

//cal_source = cef_obj.getEvents();
var cal_source =
`事件,日期,
段考,2023-10-03,
高考,2024-06-07`;

let cal_source_vec = cal_source.split(',');
console.log(cal_source_vec)

var offset_basic = 2;
var now = new Date();
var evc = document.getElementById("evcal");
var cont = "";
for (let index = 0 + offset_basic; index < cal_source_vec.length; index += offset_basic) {
    const event = cal_source_vec[index];
    var event_date = cal_source_vec[index + 1];
    console.log(event, event_date);
    var dt = new Date(event_date);
    console.log((dt-now)/ (1000 * 60 * 60 * 24));
    cont = cont + '<li><p style="text-align: center"><strong>'+
    event+
    '</strong><mark>' +
    Math.floor((dt-now)/ (100 * 60 * 60 * 24))/10 + 
    '天后</mark></p></li>'
}
evc.innerHTML = cont
