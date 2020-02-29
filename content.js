// Select the node that will be observed for mutations
var targetNode = document.getElementsByTagName("pre-home-page")[0];

// Options for the observer (which mutations to observe)
var config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
var callback = function(mutationsList, observer) {
    if ($('#prehomeselect') && $('#prehomeselect').children().length > 0) {
        open($('#prehomeselect').children().last()[0].value)
    }
}

// Create an observer instance linked to the callback function
var observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
if (targetNode !== null) {
    observer.observe(targetNode, config);
}
