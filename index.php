<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Hugo 0.88.1">
    <title>Uplyft Capital - Evaluation Project - Jeleicy Figueroa</title>

    <link rel="canonical" href="https://getbootstrap.com/docs/5.1/examples/dropdowns/">
    <link rel="stylesheet" href="//code.jquery.com/ui/1.13.0/themes/base/jquery-ui.css">
    
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <script src="https://code.jquery.com/ui/1.13.0/jquery-ui.js"></script>
    <link href="assets/dist/css/all.css" rel="stylesheet">

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.inputmask/3.2.6/jquery.inputmask.bundle.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-maskmoney/3.0.2/jquery.maskMoney.min.js"></script>

    <script src="assets/dist/js/functions.js"></script>

    <!-- Bootstrap core CSS -->
    <link href="assets/dist/css/bootstrap.min.css" rel="stylesheet">

    <style>

    </style>

    <!-- Custom styles for this template -->
    
  </head>

<body bgcolor="white">

<div class="content">

<div class="row">
    <form method="post" action="#">
        <h1>Uplyft Capital - Evaluation Project - Jeleicy Figueroa</h1>
        <div class="row">
            <div class="col-md-5">
                <label for="exampleInputEmail1" class="form-label">Start Date</label>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1"><i class="fas fa-calendar-week"></i></span>
                    <input required type="text" id="datestart" class="form-control" placeholder="Start Date" aria-label="Start Date" aria-describedby="basic-addon1">
                </div>

                <label for="exampleInputEmail1" class="form-label">Loan Amount</label>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">$</span>
                    <input required type="text" id="loan_amount" class="custom4 form-control" value="" placeholder="0,00" aria-label="Loan Amount" aria-describedby="basic-addon1" />
                </div>

                <label for="exampleInputEmail1" class="form-label">Installment Interval</label>
                <div class="input-group mb-3">
                <select class="form-select" id="intallment_interval" aria-label="Default select example">
                    <option value="0" selected>Select...</option>
                    <option value="1">Daily</option>
                    <option value="2">Weekly</option>
                    <option value="3">Monthly</option>
                    </select>            
                </div>

                <label for="exampleInputEmail1" class="form-label">Installment Amount</label>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">$</span>
                    <input required type="text" id="intallment_amount" class="custom4 form-control" value="" placeholder="0,00" aria-label="Loan Amount" aria-describedby="basic-addon1" />
                </div>

                <label for="exampleInputEmail1" class="form-label">Simple Interest Rate</label>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">%</span>
                    <input required type="number" id="interest" maxlength="3" class="form-control" value="" placeholder="0" aria-label="Loan Amount" aria-describedby="basic-addon1" />
                </div>
                
                <label for="exampleInputEmail1" class="form-label">
                    Note: Payments are not collected on weekends or public holidays.
                </label>

                <div class="col-12">
                    <button onclick="calculate()" class="btn btn-primary" type="submit">Calculate Loan</button>
                </div>
            </div>
        </div>
    </form>

    <table class="table table-striped table-hover" id="table_loan">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Date</th>
            <th scope="col">Amount</th>
            <th scope="col">Payoff</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
        </table>
    </div>
</div>

</body>
</html>