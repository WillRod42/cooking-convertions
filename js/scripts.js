function galToLiter(gallons) {
  return gallons * 3.785;
}

function literToGal(liters) {
  return liters / 3.785;
}

function fToC(degrees) {
  return (degrees - 32) * (5/9);
}

function cToF(degrees) {
  return (degrees * (9/5)) + 32;
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
  });

  $("#gallons").change(function() {
    const gallons = parseInt($("#gallons").val());
    const liters = galToLiter(gallons);
    $("#liters").val(liters);
  });

  $("#liters").change(function() {
    const liters = parseInt($("#liters").val());
    const gallons = literToGal(liters);
    $("#gallons").val(gallons);
  });

  $("#fahrenheit").change(function() {
    const f = parseInt($("#fahrenheit").val());
    const c = fToC(f);
    $("#celcius").val(c);
  });

  $("#celcius").change(function() {
    const c = parseInt($("#celcius").val());
    const f = cToF(c);
    $("#fahrenheit").val(f);
  });
})