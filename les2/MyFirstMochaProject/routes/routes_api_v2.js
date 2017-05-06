// API version 1
var express = require('express');
var router = express.Router();
var path = require('path');

router.get('*', function(request, response) {
response.status(200);
response.json({

        'description': 'Bas Palinckx',
        'Lijst van namen die hebben geholpen': [
            {
                '1': 'Koen Damme',
                '2': "Rick Lambrechts"
            },
            {'3': 'Mike Gomper'}
        ],
        'bas is cool': true,
        'Geboren in ': 1999,
        'random cijfers': [
            2, 3, 5, 7, 11, 13
        ],
        'random woorden': [
            "twee", "drie", "vijf", "zeven"
        ]
    })
})

module.exports = router;