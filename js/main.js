console.log("hello world!");

function searchGitHubBackup() {
    var query = document.getElementById("inputquery").value;
    var url = "https://api.github.com/search/repositories?q="+query+"+language:assembly&sort=stars&order=desc";

    $.get(url,
        function (data) {
            console.log(data);
            $.each(data, function (index, item) {
                console.log(item.branches_url);
            })
        })


            .fail(function () {
alert("error");
    });

};

function searchGitHub() {

    var query = document.getElementById("inputquery").value;
    var url = "https://api.github.com/search/repositories?q=" + query + "+language:java&sort=stars&order=desc";
    
    $.ajax({
        url: url,
        type: 'GET',
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', 'token de91bf1d08b535220358d172638445b89fe0b0c5');
        },
        data: {},
        success: function (data) {
            console.log(data);
            console.log(JSON.stringify(data.total_count));
            var list = "";
            $.each(data.items, function (idx, item) {
                console.log(item.html_url);
                list += "<li><a href=" + item.html_url + ">" + item.full_name+"</a></li>";

            });
            $("#result").append(list);
        },
        error: function () { },
    });
};