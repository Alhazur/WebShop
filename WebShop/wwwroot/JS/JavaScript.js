//Get
function LinkUpdate(urlPath, targetUpdate) {
    console.log('Url: ' + urlPath);
    console.log('Id: ' + targetUpdate);

    $.get(urlPath,
        function (res) {
            $('#' + targetUpdate).replaceWith(res);
        });
}

//Post
function LinkEdit(urlPath, targetUpdate, produktId) {
    console.log('LinkEdit Url: ' + urlPath);
    $.post(urlPath,
        {
            Id: produktId,
            Name: $('#' + targetUpdate + 'Name').val(),
            Price: $('#' + targetUpdate + 'Price').val()
        },
        function (res) {
            $('#' + targetUpdate).replaceWith(res);
        });
}

function LinkCreate(urlPath) {
    console.log('Created produkt: ' + urlPath);
    $.post(urlPath,
        {
            name: $('#createName').val(),
            price: $('#createPrice').val()
        },
        function (res) {
            $('#AllProdukts').append(res);
        });
}
