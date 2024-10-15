var totalMonths  = "13";

var years = parseInt ( totalMonths / 12 );

var months = totalMonths % 12;

if ( years == 0 ) {

    alert ( months + " months.");

} else if ( months == 0 ) {

    alert ( years + " years");

} else {

    alert ( years + " years, and " + months + " months.");

}