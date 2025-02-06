//Name your custom data “GA4 Audiences” and choose the acquisition method Custom JavaScript code.
//copy/paste the following script

Kameleoon.API.Data.retrieveDataFromRemoteSource(Kameleoon.API.Visitor.code, function(data) {
    for (const [key, value] of Object.entries(data)) {
        Kameleoon.API.Data.setCustomData('GA4 Audiences',key)
    }
});
return { "value": null} 

//The custom data should be set to "list"  and "string" type, the scope may be set to visit or page (when being set to page, it is re-evaluated on every page load).