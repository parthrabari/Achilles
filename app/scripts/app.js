var getJSON = function (url, callback) {
    'use strict';
    var xhr = new XMLHttpRequest();
    xhr.open("get", url, true);
    xhr.responseType = "json";
    xhr.onload = function () {
        var status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response);
        } else {
            callback(status);
        }
    };
    xhr.send();
};


getJSON("http://starlord.hackerearth.com/cleartrip/hackernews",
    function (err, data) {
        'use strict';
        if (err !== null) {
            document.alert("Something went wrong: " + err);
        } else {
            var resJson = data;
//            localStorage.setItem("res", data);         ///                localstorage store
//            var localres=JSON.parse(localStorage.getItem("res"));
//            alert(localres.length);
            for (var i = 1; i < resJson.length; i++) {
            var object1 = (resJson[i]);
                var anchor = document.createElement("a");
                anchor.setAttribute("href",object1['url']);
                anchor.textContent = object1['title'];
                anchor.setAttribute("target","_blank")
                var node = document.createElement("li");                 
                node.appendChild(anchor);
                document.getElementById("wrapper").appendChild(node);  
                //date
                var now = new Date(),
                    date1 = Date.parse(object1['created_at']);
               
                var span1 = document.createElement("span");
                span1.textContent = " " +object1['num_points'] + "Points" + " by " + object1['author'] + ' | ' + 
                                    object1['num_comments'] + " Comments"  + " | " + Math.abs( now.getHours() - date1.getHours())  + " hours ago";
                span1.style.color = 'green';
                
                node.appendChild(span1);
            ;
           }
  }
});

;

//pagination
$('#wrapper').easyPaginate({
    paginateElement: 'li',
    elementsPerPage: 5,
    effect: 'climb'
});