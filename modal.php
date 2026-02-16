<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>strona</title>
        <link rel="stylesheet" href="stylemodal.css">
    </head>
        <body style="font-family: Tahoma;">
        <button data-modal-target="#modal">Open Modal</button>
        <div class="modal" id="modal">
            <div class="modal-header">
                <div class="modal-title">Modal Title</div>
                <button data-close-button class="close-button">&times;</button>
            </div>
            <div class="modal-body">
                This is the content of the modal.
            </div>
        </div>
        <div id="overlay" class="overlay"></div>
        <script src="scriptmodal.js"></script>
    </body>
</html>
