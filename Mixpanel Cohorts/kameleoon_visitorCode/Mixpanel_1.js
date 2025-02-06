// Only identified user profiles are exported to Kameleoon; anonymous users are excluded. 
// To ensure seamless integration, we strongly recommend setting an additional Mixpanel user property 
// called `$kameleoon_mapping_id`, which stores the Kameleoon Visitor code. 
// This allows Mixpanel to automatically include the `$kameleoon_mapping_id` in every cohort export sent to Kameleoon.

// Add the following code to your Mixpanel script, in the <head> section of your website, 
// immediately after the `identify` method is executed.

mixpanel.people.set({
    '$kameleoon_mapping_id': Kameleoon.API.Visitor.code //or “your internal user ID”
});