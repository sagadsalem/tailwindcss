const tailwindcss = require("tailwindcss")
const cssnano = require("cssnano")
const purgecss = require("@fullhuman/postcss-purgecss")
const autoprefixer = require("autoprefixer")

module.exports = {
  plugins: [
  	tailwindcss,
    autoprefixer,
    cssnano({
    	preset:'default'
    }),
    purgecss({
    	content:['./*.html'],
    	extractors:[
    		{
    			extractor: class TailwindExtractor {
    				static extract(content){
    					return content.match(/[A-z0-9-:\/]+/g) || [];
    				}
    			},
    			extensions:['css','html']
    		}
    	]
    })
  ]
}
