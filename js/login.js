$(document).ready(function(){
         $('#login').on('submit',function(e){
             e.preventDefault();
                     var phone = $('#phone').val();
                     var password = $('#password').val();
                     
              
              if(phone !='' && password !=''){
                     $.ajax({
                         url:'credentials_check.php',
                         method:'POST',
                         data:{usernames:phone,passwords:password},
                         success:function(datas){
                             
                     if(datas=='no'){
                          $("#login_msg").html("<div class='alert alert-danger'>Password or phone number not match! </div>");
                         
                     }else if(datas=='yes'){
                         $('#myModal').modal('hide');
                          window.location.href = 'index';
                         
                     }    
                         }
                     }) 
              }
         
         else{
             // alert("Insert Both Field");
             $("#login_msg").html("<div class='alert alert-danger'>Filled not must be empty! </div>");
         }

                     });               
            
         });   