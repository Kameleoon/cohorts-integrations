// In the last step of custom data creation, enable the option `Save the values for the targeting condition associated with the custom data point`.
// Copy this part, add this code snippet into the designated field.
// Replace ADD_YOUR_PROJECT_ID_HERE with your project Sitecode.

var xhr = new XMLHttpRequest();
 xhr.open("GET", 'https://customers.kameleoon.com/mixpanel/cohorts/ADD_YOUR_PROJECT_ID_HERE', false);
 xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
 var mixPanelSegments = [];
 xhr.onreadystatechange = function() { // Call a function when the state changes.
     if (this.readyState === XMLHttpRequest.DONE && this.status === 200)
     {
         var mixpanel = JSON.parse(xhr.response);
         mixpanel.forEach(function (segment) {
             if (segment.id && segment.name !== 'undefined')
             {
                 mixPanelSegments.push({value: segment.id, label: segment.name});
             }
         });
     }
 }
 xhr.send();
 return mixPanelSegments;
