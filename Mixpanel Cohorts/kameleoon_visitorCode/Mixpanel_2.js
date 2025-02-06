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