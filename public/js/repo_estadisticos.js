Morris.Bar({
    element: 'graph-bar',
    data: [
        {x: '15 Mar. 2018', y: 3, z: 2, a: 3},
        {x: '16 Mar. 2018', y: 2, z: 0, a: 1},
        {x: '17 Mar. 2018', y: 0, z: 2, a: 4},
        {x: '18 Mar. 2018', y: 4, z: 2, a: 3}
    ],
    xkey: 'x',
    ykeys: ['y', 'z', 'a'],
    labels: ['Completadas', 'Reprogramadas', 'No Completadas'],
    barColors:['#cfdd3f','#7ab740','#1c6b34']


});

$(function(){
    window.prettyPrint && prettyPrint();
    $('.default-date-picker').datepicker({
        format: 'mm-dd-yyyy'
    });
    $('.dpYears').datepicker();
    $('.dpMonths').datepicker();


    var startDate = new Date(2012,1,20);
    var endDate = new Date(2012,1,25);
    $('.dp4').datepicker()
        .on('changeDate', function(ev){
            if (ev.date.valueOf() > endDate.valueOf()){
                $('.alert').show().find('strong').text('The start date can not be greater then the end date');
            } else {
                $('.alert').hide();
                startDate = new Date(ev.date);
                $('#startDate').text($('.dp4').data('date'));
            }
            $('.dp4').datepicker('hide');
        });
    $('.dp5').datepicker()
        .on('changeDate', function(ev){
            if (ev.date.valueOf() < startDate.valueOf()){
                $('.alert').show().find('strong').text('The end date can not be less then the start date');
            } else {
                $('.alert').hide();
                endDate = new Date(ev.date);
                $('.endDate').text($('.dp5').data('date'));
            }
            $('.dp5').datepicker('hide');
        });

    // disabling dates
    var nowTemp = new Date();
    var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);

    var checkin = $('.dpd1').datepicker({
        onRender: function(date) {
            return date.valueOf() < now.valueOf() ? 'disabled' : '';
        }
    }).on('changeDate', function(ev) {
            if (ev.date.valueOf() > checkout.date.valueOf()) {
                var newDate = new Date(ev.date)
                newDate.setDate(newDate.getDate() + 1);
                checkout.setValue(newDate);
            }
            checkin.hide();
            $('.dpd2')[0].focus();
        }).data('datepicker');
    var checkout = $('.dpd2').datepicker({
        onRender: function(date) {
            return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
        }
    }).on('changeDate', function(ev) {
            checkout.hide();
        }).data('datepicker');
});

