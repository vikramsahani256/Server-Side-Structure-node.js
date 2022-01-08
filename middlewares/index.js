
const requestLogger  = require('./../logging/request_logs');



app.set('port', process.env.PORT || config.get('PORT'));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(function (error, req, res, next) {
  if (error instanceof SyntaxError) {
    return res.sendStatus(400);
  }
  next();
});
app.use(logger('dev'));
app.use(cors());
app.use(requestLogger.create());

if ('development' == app.get('env')) {
  app.use(errorhandler());
}
console.log("App Environment Running at: ", app.get('env'));