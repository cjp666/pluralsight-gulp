module.exports = function (){
    var config = {

        // all the js I want to vet
        alljs: [
            './src/**/*.js',
            './*.js'
        ]
    };

    return config;
};