let result = concatStr.toString
let str1 = "hello"
let str2 = "world"
function concatStr(str1,str2) {
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i].toString(); 
      }
    
      return result;
    };
concatStr("hello","world") 

//////////////////////////////////
let str1 = 'Cats are the best!';
let argument = 'Cats';

function custom(string) {
    for (let i = 0; i < string.length; i++) {
        if (string.substring(i, i + argument.length) === argument) {
            return true;
        }
    }
    return false;
}

console.log(custom(str1));
///////////////////////////////////////////
function replace(string, search, replaceValue) {
    let result = '';
    for (let i = 0; i < string.length; i++) {
        let includes = true;
        for (let k = 0; k < search.length; k++) {
            if (string[i + k] !== search[k]) {
                includes = false
                break
            }
        }
         if (includes) {
                result += replaceValue
                i+= search.length - 1
            } else {
                result += string[i]
            }
    }
      return result;
}
    console.log(replace('hello', 'ell', '***'))
//////////////////////////////////////////////////
function customLastIndexOf(searchValue, fromIndex) {
    const str = this.toString();
    const length = str.length;
    fromIndex = (fromIndex === undefined) ? length - 1 : Math.min(fromIndex, length - 1);
  
    for (let i = fromIndex; i >= 0; i--) {
      if (str[i] === searchValue) {
        return i;
      }
    }
  
    return -1;
  };
/////////////////////////////////////////////////
function customReplace(search, replacement) {
    const str = this.toString();
    return str.split(search).join(replacement);
  };
////////////////////////////////////////////////
 function customStartsWith(prefix, position) {
    const len = str.length;
    position = (position === undefined) ? 0 : position;
  
    const startOfString = str.substring(position, position + prefix.length);
    return startOfString === prefix;
  };
    