var mysql = require('promise-mysql');

return mysql
  .createConnection({
    host: '0.0.0.0',
    user: 'root',
    port: 3310,
    password: 'P@ssw0rd',
    multipleStatements: true,
  })
  .then(connection => {
    connection.query(
      `
        INSERT INTO configuration.camera_status (status) VALUES ('ONLINE');
        INSERT INTO configuration.camera_status (status) VALUES ('OFFLINE');
        INSERT INTO configuration.camera_status (status) VALUES ('ERRORED');
        INSERT INTO configuration.camera_types (model, resolution_width, resolution_height, manufacturer) VALUES ('Lepton 3.5', 160, 120, 'Flir');
        `
    );
    connection.end();
  });
