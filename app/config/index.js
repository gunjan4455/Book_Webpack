import Production from './production'
import Development from './development'

const config = {
    production: Production,
    development: Development
}
// get app environment
console.log("index========",process.env.NODE_ENV);
const env = process.env.NODE_ENV || 'development'
// export config file
export default config[env]