exports.authenticateUser = authenticateUser

let secret_keys = {
    aa: "sssss", // get secret key from cofig 
    bb: "ssssssss",
    cc: "sssssa",
    dd: "aaaaaaaaaaaaaaaaaa",
    ee: "asa",
    ff: "asa"
}

let offerings = {
    1: "aa", // any other product level division
    2: "bb"
}

async function authenticateUser(req, res, next) {
  try {
    let response    = { status: 400, data: {} }
    let secret_key  = req.body.secret_key
    let offering_id = req.body.offering_id
    let offering    = offerings[offering_id]
    let key         = secret_keys[offering]
    if (key == secret_key) {
      return next()
    }
    response.message = "INVALID SECRET KEY"
    return res.send(response)
  } catch (error) {
    console.log(error)
    response.message = "SOMETHING WENT WRONG"
    return res.send(response)
  }
}