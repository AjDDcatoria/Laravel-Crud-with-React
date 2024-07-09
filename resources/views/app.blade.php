<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>React + Laravel</title>
        @vite('resources/css/app.css')
    </head>
    <body class="antialiased">
        <div id="root"></div>
        @viteReactRefresh
        @vite('resources/js/app.ts')
    </body>
    <script>
        window.env = {
            API_BASE_URL: '{{ env("API_BASE_URL") }}'
        }
    </script>
</html>
