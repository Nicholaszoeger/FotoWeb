document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencias a los elementos de la página
    var clockElement = document.getElementById('clock');
    var dateElement = document.getElementById('date');
    var locationElement = document.getElementById('location');

    // Función para actualizar el reloj y la fecha
    function updateTime() {
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();

        // Formatear la hora para que siempre tenga 2 dígitos
        var formattedHours = hours < 10 ? '0' + hours : hours;
        var formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
        var formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

        // Mostrar la hora en el elemento correspondiente
        clockElement.textContent = formattedHours + ':' + formattedMinutes + ':' + formattedSeconds;

        // Obtener y mostrar la fecha
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dateElement.textContent = now.toLocaleDateString('es-ES', options);

        // Obtener y mostrar la ubicación del usuario
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;
                locationElement.textContent = 'Latitud: ' + latitude + ', Longitud: ' + longitude;
            });
        } else {
            locationElement.textContent = 'Geolocalización no es compatible en este navegador.';
        }
    }

    // Actualizar la hora cada segundo
    setInterval(updateTime, 1000);

    // Llamar a la función updateTime para mostrar los datos inmediatamente
    updateTime();
});
