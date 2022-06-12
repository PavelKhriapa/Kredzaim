AOS.init();

 var $range = $(".js-range-slider-sum");
    var $input = $(".js-input-sum");
    var instance;
    var min = 0;
    var max = 80000;
	$range.ionRangeSlider({
	        min: min,
	        max: max,
	        step: 1,
	        from: 0,
	        grid: true,
	        grid_num: 2,
	        grid_snap: false,
	        onStart: function(data) {
	        $input.prop("value", data.from);
		    },
		     onChange: function(data) {
		     $input.prop("value", data.from);
		    }
	    });
	instance = $range.data("ionRangeSlider");
    
    $input.on("input", function() {
        var val = $(this).prop("value");
    
        // validate
        if (val < min) {
            val = min;
        } else if (val > max) {
            val = max;
        }
    
        instance.update({
            from: val
        });
    });
    var $range2 = $(".js-range-slider-date");
    var $input2 = $(".js-input-date");
    var instance2;
    var min2 = 5;
    var max2 = 126;
	$range2.ionRangeSlider({
	        min: min2,
	        max: max2,
	        step: 1,
	        from: 0,
	        grid: true,
	        grid_num: 2,
	        grid_snap: false,
	        onStart: function(data) {
	        $input2.prop("value", data.from);
		    },
		     onChange: function(data) {
		     $input2.prop("value", data.from);
		    }
	    });
	instance2 = $range2.data("ionRangeSlider");
    
    $input2.on("input", function() {
        var val2 = $(this).prop("value");
    
        // validate
        if (val2 < min2) {
            val2 = min2;
        } else if (val > max2) {
            val2 = max2;
        }
    
        instance2.update({
            from: val2
        });
    });
    // $(".js-irs-1 .irs-grid-text").append( "<span> дней</span>" );
    		const swiper = new Swiper('.swiper', {
		  direction: 'horizontal',
		  loop: false,
		  grabCursor: true,
		  spaceBetween: 20,
		  pagination: {
		    el: '.swiper-pagination',
		    clickable: true,
		  },
		});
		$('.slider_links ul li a').on('click', function() {
      let sliderNum = $(this).attr('data-slider');
      swiper.slideTo(sliderNum - 1);
      swiper.update();
    });
	$('.mobile div').on('click', () => {
	    $('.mobile div').toggleClass('active');
	    $('.mobile nav').toggleClass('open');
	    $('.mobile nav ul').toggleClass('show');
	});
	for (let a = 1; a <= $(".mobile ul li").length; a++){
	    $(".mobile ul li:nth-child("+ a +")").css("animation-delay", "."+ (a+1) +"s");   
	}
	$("#how-get-link").click(function() { // ID откуда кливаем
	    $('html, body').animate({
	        scrollTop: $(".how-get-anchor").offset().top  // класс объекта к которому приезжаем
	    }, 2000); // Скорость прокрутки
	});
	$("#advantages-link").click(function() { // ID откуда кливаем
	    $('html, body').animate({
	        scrollTop: $(".advantages-anchor").offset().top  // класс объекта к которому приезжаем
	    }, 2000); // Скорость прокрутки
	});
	$("#info-link").click(function() { // ID откуда кливаем
	    $('html, body').animate({
	        scrollTop: $(".information-inner").offset().top  // класс объекта к которому приезжаем
	    }, 2000); // Скорость прокрутки
	});