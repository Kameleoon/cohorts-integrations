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