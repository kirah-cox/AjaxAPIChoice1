

$('#fetchBtn').on('click', function () {
    $.ajax({
        url: `https://cat-fact.herokuapp/facts`,
        method: 'GET',
        success: function (response) {

            const fact = `<p>${response.fact}</p>`;

            $('#catFact').html(fact);
        },
        error: function () {
            $('#catFact').html('<p>Failed to load cat fact. Please try again later.</p>');
        }
    });
});