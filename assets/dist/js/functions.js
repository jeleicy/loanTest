// This function calculate the loan repayment

function calculate() {
    event.preventDefault();
    let datestart = document.getElementById("datestart").value;
    let loan_amount = document.getElementById("loan_amount").value;
    let intallment_interval = document.getElementById("intallment_interval").value;
    let intallment_amount = document.getElementById("intallment_amount").value;
    let interest = document.getElementById("interest").value;

    let loan_interval = 0;

    loan_amount = formatCurrency(loan_amount);
    loan_amount = parseFloat(loan_amount);

    intallment_amount = formatCurrency(intallment_amount);
    intallment_amount = parseFloat(intallment_amount);
    
    let loan_interes = ((loan_amount*interest)/100)+loan_amount;
    loan_interval = loan_interes/intallment_amount;

    calculatePayments(loan_interes, loan_interval, intallment_interval, datestart);
    
}

var currentYear = new Date().getFullYear();
var holidays = ["01/01/"+currentYear,"01/18/"+currentYear,"02/15/"+currentYear,"05/31/"+currentYear,"06/19/"+currentYear,"07/04/"+currentYear,"09/06/"+currentYear,"10/11/"+currentYear,"11/11/"+currentYear,"11/25/"+currentYear,"12/25/"+currentYear];

function calculatePayments(loan_interes, loan_interval, intallment_interval, last_day) {
    event.preventDefault()
    let date_payment = '';
    let amount_payment = '';
    let payoff_payment = loan_interes;
    let html = '';

    let next_day = new Date(last_day);
    $('#table_loan tbody').remove();
    $('#table_loan').append('<tbody>');

    var i=1;
    let newPayment = new Intl.NumberFormat("en-US", {minimumIntegerDigits:2, style: "currency", currency: "USD"}).format(payoff_payment);
    if (isNaN(loan_interval) || last_day=='' || intallment_interval==0) {
        html = `<tr><td colspan="4"><div class="alert alert-danger" role="alert">The Start Date or Loan Amount or Installment Interval or Installment Amount or Simple Interest Rate is not correct!</div></td></tr>`;
        $('#table_loan').find('tbody').append(html);
    } else {
        debugger;
        let totalPaymentAmount = (payoff_payment/loan_interval);
        while (payoff_payment>0) {
            next_day = next_day.addDays(0);

            payoff_payment = payoff_payment-totalPaymentAmount;
            newPayment = new Intl.NumberFormat("en-US", {minimumIntegerDigits:2, style: "currency", currency: "USD"}).format(payoff_payment);

            html = `<tr><td>${i}</td><td>${next_day.toLocaleDateString("en-US")}</td><td>${new Intl.NumberFormat("en-US", {minimumIntegerDigits:2, style: "currency", currency: "USD"}).format(totalPaymentAmount)}</td><td>${newPayment}</td></tr>`;
            i++;
            $('#table_loan').find('tbody').append(html);

            if (intallment_interval==1) next_day = next_day.addDays(1);
            if (intallment_interval==2) next_day = next_day.addDays(7);
            if (intallment_interval==3) next_day = next_day.addMonth(1);
        }
    }
}

Date.prototype.addDays = function (days) {
    const date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    while (isBusinessDay(date)===0 || isBusinessDay(date)===6) {
        date.setDate(date.getDate() + 1);
    }
    return date;
};

Date.prototype.addMonth = function (months) {
    const date = new Date(this.valueOf());
    date.setMonth(date.getMonth() + months);
    while (isBusinessDay(date)===0 || isBusinessDay(date)===6) {
        date.setDate(date.getDate() + 1);
    }
    return date;
};

function formatCurrency(x) {
  return x.replace(",","");
}

// this function id to determine if the payment day is business day
function isBusinessDay(date_pay) {
    let hollidayWeek = 0;
    
    for (i=0;i<holidays.length;i++) {
        hollidayWeek = new Date(holidays[i]);
        if (hollidayWeek.toLocaleDateString("en-US") === date_pay.toLocaleDateString("en-US")) {
            return 0;
        }
    }
    let dayOfWeek = date_pay.getDay();
    return dayOfWeek;
}

    var holidays_datepicker = [currentYear+"-01-01",currentYear+"-01-18",currentYear+"-02-15",currentYear+"-05-31",currentYear+"-06-19",currentYear+"-07-04",currentYear+"-09-06",currentYear+"-10-11",currentYear+"-11-11",currentYear+"-11-25",currentYear+"-12-25"];
    $( function() {
        $( "#datestart" ).datepicker({ 
            beforeShowDay: function(date){
                    var datestring = jQuery.datepicker.formatDate('yy-mm-dd', date);
                    return [ holidays_datepicker.indexOf(datestring) == -1 ];
                },
        });
    } );

    $(document).ready(function(){
        $(".custom1").inputmask({ 'alias' : 'decimal', 'mask' : "[.**]", rightAlign: true});
    });

    $(".custom2").inputmask('Regex', {regex: "^[0-9]{1,6}(\\.\\d{1,2})?$", rightAlign: true});

    $(".custom3").inputmask({'alias': 'numeric', allowMinus: false, digits: 2, max: 999.99});

    $(function() {
        $('.custom4').maskMoney();
    })