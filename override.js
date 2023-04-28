const fs = require("fs")
const cheerio = require("cheerio")
var glob = require("glob")
var conf = require("./config.json")

function htmlUpdater() {
  let file = "./build/index.html"
  let $outer = cheerio.load(fs.readFileSync(file).toString())
  let $ = cheerio.load($outer("html").html())
  $("html").each(function (i, elem) {
    let contents = $(this).contents()
    $(this).replaceWith(contents)
  })
  $("head").each(function (i, elem) {
    $(this).replaceWith("")
  })
  $("body").each(function (i, elem) {
    let contents = $(this).contents()
    $(this).replaceWith(contents)
  })
  let finalString = $.html()
  fs.writeFileSync(file, finalString)
}

function chunkJSUpdater() {
  let PATH_TO_MAIN_JS = "./build/static/js/"
  glob(PATH_TO_MAIN_JS + "/main.*.js", false, function (er, files) {
    fs.readFile(files[0], "utf8", function (err, data) {
      if (err) throw err
      let modifiedData = data.replace(
        ///=[a-zA-Z]\.[a-zA-Z]\+"static\//g,
        /[a-zA-Z]\.[p](.*?)\+"static\//gm,
        '"' + conf.PUBLIC_URL + "/static/"
      )
      fs.writeFileSync(files[0], modifiedData)
    })
  })

  let PATH_TO_MAIN_BUILD = "./build/"
  glob(PATH_TO_MAIN_BUILD + "/index.html", false, function (er, files) {
    fs.readFile(files[0], "utf8", function (err, data) {
      if (err) throw err
      //x=a.p+"static/media/clink.83a7fb11.gif"
      let modifiedData = data.replace(
        /="\/static\//g,
        '="' + conf.PUBLIC_URL + "/static/"
      )
      fs.writeFileSync(files[0], modifiedData)
    })
  })
}

for (var i = 0; i < process.argv.length; i++) {
  switch (process.argv[i]) {
    case "htmlUpdater":
      htmlUpdater()
      break
    case "chunkJSUpdater":
      chunkJSUpdater()
      break
  }
}

module.exports.htmlUpdater = htmlUpdater
module.exports.chunkJSUpdater = chunkJSUpdater
