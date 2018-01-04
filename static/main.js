$('a.generate').click(function(e)
{
    // Cancel the default action
    e.preventDefault();
    $(".sentence").html("Looking for Answers...")
    
    $.ajax({
        type: "GET",
        url: '/_sentence',
    }).done(function(data){
        
        $(".sentence").html(data)
    });

});

