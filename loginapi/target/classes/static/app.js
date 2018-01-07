//Google Login
function  onLoadFunction() {
    gapi.client.setApiKey('AIzaSyBYiiyNM1i73seX7zlJxDtYoOYdyBWIIVI');
    gapi.client.load('plus', 'v1', function () {});
}