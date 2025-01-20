// Only identified user profiles are exported to Kameleoon; anonymous users are excluded. 
// To ensure seamless integration, we strongly recommend setting an additional Mixpanel user property 
// called `$kameleoon_mapping_id`, which stores the Kameleoon Visitor code. 
// This allows Mixpanel to automatically include the `$kameleoon_mapping_id` in every cohort export sent to Kameleoon.

// Add the following code to your Mixpanel script, in the <head> section of your website, 
// immediately after the `identify` method is executed.

mixpanel.people.set({
    '$kameleoon_mapping_id': Kameleoon.API.Visitor.code //or “your internal user ID”
});

// In Kameleoon, go to Custom Data.
// Name your custom data Mixpanel cohorts.
// For the acquisition method, select Custom JavaScript code.
// Use the Following Code for Data Acquisition:

Kameleoon.API.Data.retrieveDataFromRemoteSource(Kameleoon.API.Visitor.code, function (data) {
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