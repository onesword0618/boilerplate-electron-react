const notification = document.getElementById('notice');
notification.addEventListener('click', async () => {
    const result = await window.electron.isSupportedNotice();
    console.log('Notification: ', result);
    if (result) {
        window.electron.notice();
        return;
    }
});

const noNotification = document.getElementById('noNotice');
noNotification.addEventListener('click', () => {
    const result = window.electron.noSupportedNotice();
    console.log('Supported: ', result);
});

const noNotificationAlert = document.getElementById('noNoticeAlert');
noNotificationAlert.addEventListener('click', () => {
    const result = window.electron.noSupportedNotice();
    console.log('Supported: ', result);
    if (!result) {
        alert('通知機能無効');
        return;
    }
});

const executeQUeryButton = document.getElementById('executeQUeryButton');
executeQUeryButton.addEventListener('click', () => {
    const result = window.electron.execute();
});

// window.addEventListener('DOMContentLoaded', () => {
//   window.ipcRenderer = require('electron').ipcRenderer;
//   window.remote = require('electron').remote;
//   const replaceText = (selector, text) => {
//     const element = document.getElementById(selector)
//     if (element) element.innerText = text
//   }
// })

// (function () {
//     const clickEventName = 'click';
//     const clickButtonEventHandler = function () {
//         const mysql = remote.require('mysql');
//         const connection = mysql.createConnection({
//             port: '13306',
//             host: 'localhost',
//             user: 'craftsman',
//             password: 'password',
//             database: 'scenario',
//         });
//         connection.connect();

//         connection.query('SELECT * FROM current_product;', function (err, rows, fields) {
//             if (rows.length > 0) {
//                 let table = document.querySelectorAll('[elc-js=SelectResultTbl]')[0]
//                 let tableBody = table.querySelectorAll('tbody')[0];
//                 tableBody.innerHTML = '';
//                 rows.forEach(element => {
//                     tableBody.insertAdjacentHTML('beforeend', '<tr><td>' + element.name + '</td></tr>');
//                 });
//             }
//         });
//         connection.end();
//     };
//     document.querySelectorAll('[elc-js=ExecuteQUeryBtn]')[0].addEventListener(clickEventName, clickButtonEventHandler);
// }());

