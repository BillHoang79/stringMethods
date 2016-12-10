var name = " Michael Jordan"
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.charAt(5))
console.log(name.indexOf("e"))

var nameArray = name.split("")
for(i = 0; i < nameArray.length; i++) {
	console.log(nameArray[i])
}

var name = "testing the replace string method"

console.log(name.replace("string", "place"))