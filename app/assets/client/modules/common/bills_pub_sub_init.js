define([
  'sandbox'

], function (sandbox)  {


  return function(options) {

    var summary = options.summary,
      bills = options.bills,
      sidebar = options.sidebar,
      tracking = options.tracking;


    sandbox.analytics.init();
    sandbox.analytics.identify();
    sandbox.analytics.track(tracking);


    sandbox.subscribe('aboutToReload', function () {
      summary.startLoader();
    });

    sandbox.subscribe('billsLoaded', function () {
      summary.stopLoader();
    });

    sandbox.subscribe('summaryChanged', function (summaryObject) {
      summary.setTitleFromSummary(summaryObject, 'Bill');
    });

    sandbox.subscribe('FilterChanged', function (selections) {
      bills.filteringAndSorting(selections);
    });

    sandbox.subscribe('BillSearchName', function (term) {
      bills.showMatchedBills(term);
    });

    sandbox.subscribe('relayout', function () {
      bills.relayout();
    });

    sandbox.subscribe('sessionReload', function() {
      sandbox.session.reload();
    });

    sidebar.initDefaults();
  }
});