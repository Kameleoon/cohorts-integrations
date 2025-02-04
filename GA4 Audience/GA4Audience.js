//Name your custom data “GA4 Audiences” and choose the acquisition method Custom JavaScript code.
//copy/paste the following script

Kameleoon.API.Data.retrieveDataFromRemoteSource(Kameleoon.API.Visitor.code, function(data) {
    for (const [key, value] of Object.entries(data)) {
        Kameleoon.API.Data.setCustomData('GA4 Audiences',key)
    }
});
return { "value": null} 

//The custom data should be set to "list"  and "string" type, the scope may be set to visit or page (when being set to page, it is re-evaluated on every page load).

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