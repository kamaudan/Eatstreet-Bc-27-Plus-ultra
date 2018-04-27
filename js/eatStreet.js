$(document).ready(function() {
    url = 'https://api.eatstreet.com/publicapi/v1';
    headers = { "X-Access-Token": "f716ae617b07023d" } // Assign API key
});

  $('#btn').click(function() {
    //alert('i have a click event') 
    var searchTerm = $('#search').val();

        $.ajax({
            
            type:"GET",
            url:url + '/restaurant/search?method=both&street-address=' + searchTerm,
            dataType:"json",
            headers:headers,
            async:false,
            success:function(data){

              $.each(data.restaurants,function(name,value){
                  var business = '<div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 project project-2 wow animated animated3 fadeInLeft">'
                    + '<div class="project-hover">'
                    + '<h4>' +value.name + '</h4>'
                    + ' <hr />'
                    + ' <img src="' +value.logoUrl + '" class="img-thumbnail" alt="' +value.name + '">'
                    + '<br/><br/> <a href="#" id="menu"> View Menu</a>'
                    + '</div>'
                    + ' </div>'
                    $('#restaurants').append(business)
              })
    
            },
            error:function(error){
                alert("error occured");
            }
        });

});

  $("#menu").click(function(){
    alert("am clicked")
  });