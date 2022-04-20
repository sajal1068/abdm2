$(".progress-section").each(function () {
  
  var $bar = $(this).find(".bar");
  var $val = $(this).find("span");
  var perc = parseFloat( $val.text()).toFixed(2);

  $({p:0}).animate({p:perc}, {
    duration: 3000,
    easing: "swing",
    step: function(p) {
      $bar.css({
          transform: "rotate(" + (45 + (p * 1.8)).toFixed(2) + "deg)", // 100%=180° so: ° = % * 1.8
        // 45 is to add the needed rotation to have the green borders at the bottom
      });
      $val.text(p.toFixed(2));
    }
  });
});