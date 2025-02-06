//Next, activate the values for the targeting condition associated with the custom data point option
//copy/paste the following script and replace the values

var xhr = new XMLHttpRequest();

xhr.open(
  "GET",
  "https://customers.kameleoon.com/kameleoon/ga4-audience/?sitecode=[SITECODE]&web_property=[WEB_PROPERTY]",
  false
);

var GA4Audiences = [];

xhr.onreadystatechange = function () {
  if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
    var audiences = JSON.parse(xhr.response);

    audiences.map(function (audience) {
      if (audience) {
        GA4Audiences.push({ value: audience, label: audience });
      }
    });
  }
};

xhr.send();

return GA4Audiences;