var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCeyRIPx_GykJH7hG3v3c33wfFMX3_sPEc&callbackup=initMap', true)

request.onload = function() {
  // Begin accessing JSON data here
}

// Send request
request.send()