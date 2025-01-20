// Only identified user profiles are exported to Kameleoon; anonymous users are excluded. 
// Reminder: Mixpanel’s distinct_id for a given user may change over time as the user’s Canonical ID shifts.
// We recommend 

// In Kameleoon, go to Custom Data.
// Name your custom data Mixpanel cohorts.
// For the acquisition method, select Custom JavaScript code.
// Use the Following Code for Data Acquisition:

if (!window.mixpanel?.get_distinct_id) return null;
let id = mixpanel.get_distinct_id();
Kameleoon.API.Data.retrieveDataFromRemoteSource(id, function (data) {
 if (data?.mixpanel_cohorts) {
 data.mixpanel_cohorts.map(function (segment) {
 if (segment?.mixpanel_cohort_id) {
 Kameleoon.API.Data.setCustomData("Mixpanel cohorts", segment.mixpanel_cohort_id);
 }
 });
 }
});
return { "value": null}

// Set Data Properties:
// Type: Select `List of` and `Strings`.
// Scope: Select `Page`.

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

