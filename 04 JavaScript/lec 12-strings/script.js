// const str="Javascript"
// console.log(str);
// console.log(typeof str)

// console.log(str[4])

// //============ Methods and Properties
// console.log("size is",str.length)//10

// console.log("uppercase",str.toUpperCase())
// console.log("lowercase",str.toLowerCase())

// const trimString ="     JT     "
// console.log("trimstring length",trimString.length)
// const trim2 = trimString.trimStart()
// console.log("trim1 length",trim2.length,trim2)
// const trim3 = trimString.trimEnd()
// console.log("trim3 length",trim3.length,trim3)

// =========================== methods with arguments
// const newString = "Java Technocrat"
// console.log("Character at 5th index",newString.charAt(5)) // T
// console.log("Character code at 5th index",newString.charCodeAt(5)) // 84

// const toBeMergedString = "is famous for Rashmi Sir"
// const mergedString = newString.concat(" ", toBeMergedString)
// console.log("merged string", mergedString)

// const isJavaIncluded = newString.includes("Java")
// console.log("is java included",isJavaIncluded);

// const idxOfJava = newString.indexOf("Java")
// console.log("index of java",idxOfJava)

// const lastIdxOfA = newString.lastIndexOf("a")
// console.log("Last index of java",lastIdxOfA)

// const replacedString = newString.replace("a","b")
// console.log("replaced string",replacedString);

// const replacedAllString = newString.replaceAll("c","d")
// console.log("replaced all string",replacedAllString);

// const repeatString = newString.repeat(3)
// console.log("repeated string", repeatString)

// const padStart = newString.padStart(20, "-")
// console.log("pad start",padStart)

// const padEnd = newString.padEnd(20, "$")
// console.log("pad end",padEnd)

// const words = newString.split(" ")
// console.log(words)

// const isStartsWithJava = newString.startsWith("Java")
// console.log("starts with java", isStartsWithJava)

// const isEndsWithScript = newString.endsWith("script")
// console.log("ends with script", isEndsWithScript)

// ============ diff betn slice and substring
const s ="We are developers"
console.log(s.length) //17

console.log(s.slice())
console.log(s.substring())

console.log(s.slice(10))//elopers
console.log(s.substring(10))//elopers

console.log(s.slice(-9)) //evelopers
console.log(s.substring(-9)) // -9 => 0 // we are developers

console.log(s.slice(17)) // as max length is 17,maxIdx can be // " "
console.log(s.substring(17)) //""

console.log(s.slice(10,13))//elo (as end index is not included)
console.log(s.substring(10,13))//elo (as end index is not included)

console.log(s.slice(13,10)) // st > en // ""(empty string)
console.log(s.substring(13,10))// st > en // swap => substring(10,13) //elo

console.log(s.slice(-8,-2)) // 
console.log(s.substring(-8,-2)) // substring(0,0) //""

console.log(s.slice(13,-6)) // 
console.log(s.substring(2,-6)) // substring(0,0) //""

// Task Today
// substr method in javascript , starting inex and then put length 
// s.substr()

