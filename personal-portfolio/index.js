
(function () {
    emailjs.init('eaQ24HoGrtEEJKPkr');
})();

window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();

        // var templateParams = {
        //     name: 'Nagaraj',
        //     email: 'nagarajatmsrit@gmail.com',
        //     phoneNumber: 1234,
        //     message: 'Check this out!'
        // };
        // let service_id = 'service_irh46al';
        // let template_id = 'template_ohlgw3k';
        // emailjs.send(service_id, template_id, templateParams)
        //     .then(function (response) {
        //         console.log('SUCCESS!', response.status, response.text);
        //     }, function (error) {
        //         console.log('FAILED...', error);
        //     });
    });
}