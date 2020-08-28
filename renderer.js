//const { electron } = require("electron");

(function(){
    let clickEventName = 'click';
    let clickButtonEventHandler = function(){
        const mysql = remote.require('mysql');
        let connection = mysql.createConnection({
            port     : '13306',
            host     : 'localhost',
            user     : 'craftsman',
            password : 'password',
            database : 'scenario',
        });
        connection.connect();

        connection.query('SELECT * FROM current_product;', function(err, rows, fields) {
            if(rows.length > 0){
                let table = document.querySelectorAll('[elc-js=SelectResultTbl]')[0]
                let tableBody = table.querySelectorAll('tbody')[0];
                tableBody.innerHTML = '';
                rows.forEach(element => {
                    tableBody.insertAdjacentHTML('beforeend','<tr><td>' + element.name + '</td></tr>');
                });
            }
        });
        connection.end();
    };
    document.querySelectorAll('[elc-js=ExecuteQUeryBtn]')[0].addEventListener(clickEventName, clickButtonEventHandler);
}());