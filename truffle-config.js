require('babel-register');
require('babel-polyfill');

module.exports = {
    networks: {
        develpment: {
            host: '127.0.0.1:7545',
            port: '5777',
            network_id: '*'
        }
    },
    contract_directory: './src/contracts',
    contract_build_directory: './src/truffle_ABI',
    compilers: {
        solc: {
            version: '^0.8.0 ',
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
    }
}
