window.multipleEventListener = function multipleEventListener(element, eventNames, listener) {
    var events = eventNames.split(' ');
    for (var i = 0, iLen = events.length; i < iLen; i++) {
        element.addEventListener(events[i], listener, false);
    }
};
// multipleEventListener(window, 'mousemove touchmove', function () { });

window.decodeScreen = function decodeScreen(value) {
    var device = value.split('-')[0];
    var size = value.split('-')[1];

    return ([device, size]);
};

window.devices = function devices() {
    let device = 'NaN';
    switch (true) {
        case (screen.width >= 1680):
            device = 'Desktop-XL';
            break;
        case (screen.width >= 1440):
            device = 'Desktop-LG';
            break;
        case (screen.width >= 1280):
            device = 'Desktop-SM';
            break;
        case (screen.width >= 768):
            device = 'Tablet-LG';
            break;
        case (screen.width >= 624):
            device = 'Tablet-SM';
            break;
        case (screen.width >= 480):
            device = 'Mobile-XL';
            break;
        case (screen.width >= 376):
            device = 'Mobile-LG';
            break;
        default:
            device = 'Mobile-SM';
            break;
    }
    return decodeScreen(device);
};