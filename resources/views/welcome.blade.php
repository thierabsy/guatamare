<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>SenBusiness</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
        <link href='{{ mix("css/app.css") }}' rel="stylesheet" type="text/css">
        <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
        <!--  SLICK  -->
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    </head>
    <body>
        <div id="example"></div>
        {{--  {{$myVar}}  --}}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
        
        <script src="{{ mix('js/app.js') }}"></script>
        <script>
            var apiTargetHtmlObj = document.getElementById("demo-rate-convert");
            var tmScript = document.createElement("script");
            tmScript.src = "https://www.transfermate.com/fr/exchange_rates_api.asp";
            document.getElementsByTagName("head")[0].appendChild(tmScript);
        </script>
    </body>
</html>
