const dns = require('dns');
dns.lookup('example.org', (err, address, family) => {
    if (err) {
        console.error('Error:', err);
        return;
    }
    console.log('IP address:', address);
}); 