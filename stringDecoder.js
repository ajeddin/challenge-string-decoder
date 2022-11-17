/* 
'0h2xce5ngbrdy' => 'hey'
'3vdfn' => 'n'
'0r' => 'r'
'2bna0p1mp2osl0e' => 'apple'
'0y4akjfe0s' => 'yes'
*/
let hello = '0y4akjfe0s'

const wordMaker = (hello) => {
let char = ''
for (i=0;i<hello.length;i++){
    if (!isNaN(hello[i])){
        i += parseInt(hello[i]) + 1
        char += hello[i]
    }
    // else {

    // }
}
return char
}
word = wordMaker(hello)
console.log(word)
