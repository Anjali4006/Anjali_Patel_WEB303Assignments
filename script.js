$.ajax({
    url: 'data.json',
    dataType: 'json',
    success: function(data) {
        for (var i=0; i<data.length; i++) {
            var row = $('<tr><td>' + data[i].Show_id+ '</td><td>' + data[i].firstname + '</td><td>' + data[i].lastname + '</td><td>' + data[i].Favword + '</td><td>' + data[i].Age + '</td></tr>');
            $('#myTable').append(row);
        }
    },
    error: function(jqXHR, textStatus, errorThrown){
        alert('Oopss: ' + textStatus + ' - ' + errorThrown);
    }
});
$(document).ready(function(){  
           $('#search').keyup(function(){  
                search_table($(this).val()); 
               });  

     function search_table(value){  
      $('#myTable tr').each(function(){  
      var found = 'false';  
      $(this).each(function(){  
     if($(this).text().toLowerCase().indexOf(value.toLowerCase()) >= 0)  
      {  
          found = 'true';  
           $(this).css('bgcolor', 'green'); 
            $(this).css('color', 'white');
      }  
                          
      else
      {
          $(this).css('background', 'green'); 
          $(this).css('color', 'black');
      }
                    
     });  
  });  
 }  
 });  


$(document).ready(function()
{  
     $('#first').keyup(function(){  
     search_table($(this).val());  
     });  
          
     function search_table(value){
     value='Jethalal';  
      $('#myTable tr').each(function(){  
      var found = 'false';  
      $(this).each(function()
      {  
         if($(this).text().toLowerCase().indexOf(value.toLowerCase()) >= 0)  
          {  
                found = 'true';  
                $(this).css('bgcolor', 'green'); 
                $(this).css('color', 'white');
          }  
      else
      {
          $(this).css('background', 'white'); 
          $(this).css('color', 'black');
      }
           });  
       });  
     }  
 });  

