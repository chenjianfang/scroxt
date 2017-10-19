function buildConfig(env){
    return require('./config/'+env+'.js')({env:env})
}
var env = process.env.NODE_ENV === 'prod' ? 'prod' : 'dev';
module.exports = buildConfig(env);

















