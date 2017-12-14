/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var imageGallery = {
    load: function () {
        var path = "/home/ridwanzal/NetBeansProjects/EdoWeb/public_html/myweb/img/gallery/";
        console.log("load image gallery");
        try {
            console.log("path res : " + path);
            $.ajax({
                url: path,
                success: function (data) {
                    console.log("ajax " + data);
                    $(data).find("a").attr("href", function (i, val) {
                        if (val.match(/\.(jpe?g|png|gif)$/)) {
                            $("body").append("<img src='" + path + val + "'>");
                            console.log('match');
                        }
                    });
                }
            });
        } catch (err) {
            console.log(e);
        }
    }
}

var imageJSON = {
    load: function () {
        console.log("load image json");
        $.getJSON('../json/image.json', function (data) {
            console.log("image json");
            console.log("callback data result : " + data);
            try {
                var json = JSON.parse(data);
                console.log(json);
            } catch (e) {
                console.log("err" + e);
            }
        });
    }
}

var localLoad = {
    load: function () {
        var url = '/home/ridwanzal/NetBeansProjects/EdoWeb/public_html/myweb/json/image.json';
        console.log("local load");
        $.getJSON(url, function (data) {
            console.log("get json")
            console.log("data callback : " + data);
        });
    }
}

var imageLoad = {
    load : function(img, ulid){
        console.log("image method");
        $.each(img, function(i, src){
            console.log("index i : "+ i);
            var li = $('<li class="load">').appendTo(ulid);
            $('<img>').appendTo(li).one('load', function(){
            }).attr('src', src);
        });
    },
    hide : function(ulid){
        $(ulid).remove();
    },
    hover : function(){
    }
}

