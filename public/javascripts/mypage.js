(function($){
    // $(function(){
    // });
    $(document).ready(function(){
        var access_token = '2284247885.bb4f32a.47851f2fda564915bbae378c5d9710bb';
        $.ajax({   
             type: 'GET',  
             url: 'https://api.instagram.com/v1/users/self/?access_token=' + access_token, 
             dataType: 'jsonp',
             success: function(data){
                $('img#imjh').attr('src', data.data.profile_picture);//.width(128).height(128);
             },
             error:function(jqXHR, textStatus, error){
                console.error('message: '+jqXHR.responseText);
             }
        });

        $.ajax({
            type: 'GET',
            url: './jihye.json',
            dataType: 'json',
             success: function(data){
                var html ='';
                for(key in data.jihye){
                    html += '<dt>' + key + '</dt>' + '<dd>' + data.jihye[key] + '</dd>';
                }

                $('#jihye').html(html);

                var html = '<dt>해본 것</dt><dd><ul>';
                for(key in data.project){
                    html += '<li><a target="_blank" href="'+data.project[key]+'"">' + data.project[key] + '</a></li>';
                }
                $('#project').html(html+'</ul></dd>');
             },
             error:function(jqXHR, textStatus, error){
                console.error('message: '+jqXHR.responseText);
             }
        });
    });
})(jQuery);