$(document).ready(function () {
    
    time = setInterval(() => {

      
      if ($('li.slide:last').hasClass('active')) {

          $('li.slide:last').removeClass('active');
          $('li.slide:first').addClass('active');

      } else {

        var slide_active = $('li.active');
        $(slide_active).removeClass('active');
        $(slide_active).next().addClass('active');

      }

    }, 3000);

    $('.icon-next').click(function (e) { 
        e.preventDefault();

        if ($('li.slide:last').hasClass('active')) {

            $('li.slide:last').removeClass('active');
            $('li.slide:first').addClass('active');
  
        } else {
  
          var slide_active = $('li.active');
          $(slide_active).removeClass('active');
          $(slide_active).next().addClass('active');
  
        }
        
        clearInterval(time);
        
    });

    $('.icon-prev').click(function (e) { 
        e.preventDefault();

        if ($('li.slide:first').hasClass('active')) {

            $('li.slide:first').removeClass('active');
            $('li.slide:last').addClass('active');
  
        } else {
  
          var slide_active = $('li.active');
          $(slide_active).removeClass('active');
          $(slide_active).prev().addClass('active');
  
        }
        
        clearInterval(time);
        
    });
});