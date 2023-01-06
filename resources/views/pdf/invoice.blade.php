<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        @font-face {
            font-family: 'Helvetica';
            font-weight: normal;
            font-style: normal;
            font-variant: normal;
            src: url('<?php echo storage_path('fonts/Helvetica.ttf'); ?>'); 
        }
        @page { 
            margin: 10px 20px;
            font-size: 12px;
            font-family: "Helvetica";
         }
         /* body {
             border: 1px solid #c6c6c6;
             padding: 5px;
         } */
        .header {
            width: 32%;
            display: inline-block;
            /* border: 1px solid black; */
            margin: auto;
            /* vertical-align: top; */
        }
        .header .logo img {
            width: 100px;
            margin: 10px 0;
        }
        .header.logo-container {
            text-align:center;
        }
        .header h3 {
            margin: 0;
            line-height: 1rem;
        }
        .header p {
            margin: 0;
        }

        .header.title {
            text-align: right;
        }
        .main-content {
            display: block;
            width: 100%;
            border:1px solid black;
        }
        .col-2 {
            width: 49%;
            display: inline-block;
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="company">
            <h3>Company abc</h3>
            <p>adress sdsd st.</p>
            <p>dasd +997987</p>
        </div>
    </div>
    <div class="header logo-container">
        <div class="logo">
            <img src="{{ asset('images/logo.png') }}" alt="">
        </div>
    </div>
    <div class="header title">
        <h3>sdasdasd</h3>
        <p>dasdasd</p>
        <p>asdasdasd: dasdasd</p>
    </div>
    <div class="main-content">
        <div class="col-2">
            <h2>Bill To:</h2>
            <div class="address-container">
                <p>sdasddasd dasd</p>
                <p>asdasd dasdasd</p>
            </div>
        </div>
        <div class="col-2">
            <h2>Ship To:</h2>
            <div class="address-container">
                <p>sdasddasd dasd</p>
                <p>asdasd dasdasd</p>
            </div>
        </div>
    </div>
</body>
</html>