$(function() {
  $("#price-range").slider({range: true, min: 0, max: 200000, values: [0, 200000], slide: function(event, ui) {$("#priceRange").val("$" + ui.values[0] + " - $" + ui.values[1]);}
  });
  $("#priceRange").val("$" + $("#price-range").slider("values", 0) + " - $" + $("#price-range").slider("values", 1));
  
  $("#distance-range").slider({range: true, min: 0, max: 200000, values: [0, 200000], slide: function(event, ui) {$("#distanceRange").val(ui.values[0] + " - " + ui.values[1]);}
  });
  $("#distanceRange").val($("#distance-range").slider("values", 0) + " - " + $("#distance-range").slider("values", 1));
  
  $("#odometer-range").slider({range: true, min: 0, max: 200000, values: [0, 200000], slide: function(event, ui) {$("#OdomerterRange").val(ui.values[0] + " - " + ui.values[1]);}
  });
  $("#OdometerRange").val($("#odometer-range").slider("values", 0) + " - " + $("#odometer-range").slider("values", 1));
  
  $("#mileage-range").slider({range: true, min: 0, max: 200000, values: [0, 200000], slide: function(event, ui) {$("#mileageRange").val(ui.values[0] + " - " + ui.values[1]);}
  });
  $("#mileageRange").val($("#mileage-range").slider("values", 0) + " - " + $("#mileage-range").slider("values", 1));
});