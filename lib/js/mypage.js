
var access_token = '2284247885.bb4f32a.47851f2fda564915bbae378c5d9710bb';
$.ajax({   
     type: "GET",  
     url: "https://api.instagram.com/v1/users/self/?access_token=" + access_token, 
     dataType: "jsonp",
     success: function(data){
        $('img#profile_picture').attr('src', data.data.profile_picture)
     },
     error:function(jqXHR, textStatus, error){
        console.error("message:"+jqXHR.responseText);
       }
     }
);