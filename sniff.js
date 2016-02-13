window.addEventListener("message", function (event) {

    var origin = event.origin || event.originalEvent.origin;

    console.log(
        {
            from: origin,
            to: window.location.href,
            data: event.data
        }
    );

}, false);
