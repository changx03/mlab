$(document).ready(function () {
    $("#add-book").on('submit', function (e) {
        e.preventDefault();
        const title = $("#title").val();
        const category = $("#category").val();
        const excerpt = $("#excerpt").val();

        $.ajax({
            url: "https://api.mlab.com/api/1/databases/sunfishdb/collections/book?apiKey=GaxyaFWn0qHY20doBhnSumLPAJThCdoH",
            data: JSON.stringify({
                title: title,
                category: category,
                excerpt: excerpt
            }),
            type: "POST",
            contentType: "application/json",
            success: function (data) {
                window.location.href = "index.html";
            },
            error: function (xhr, status, err) {
                console.log(err);
            }
        });
    });
});


function getBooks() {
    $.ajax({
        url: "https://api.mlab.com/api/1/databases/sunfishdb/collections/book?apiKey=GaxyaFWn0qHY20doBhnSumLPAJThCdoH",
    }).done(function (data) {
        let output = "";
        $.each(data, function (key, data) {
            output += `<articale class="col-lg-12">
                <h3>${data.title}</h3>
                <p>${data.category}</p>
                <p>${data.excerpt}</p>`
        });
        output += "</articale>"
        $("#books").html(output);
    });
}
