const data = [
    {
        "title": "Math.abs()",
        "summary": "The Math.abs() function returns the absolute value of a number, that is",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs"
    },
    {
        "title": "Math.acos()",
        "summary": "The Math.acos() function returns the arccosine (in radians) of a number, that is",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/acos"
    },
    {
        "title": "Math.acosh()",
        "summary": "The Math.acosh() function returns the hyperbolic arc-cosine of a number, that is",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/acosh"
    },
    {
        "title": "WeakSet.add()",
        "summary": "The add() method appends a new object to the end of a WeakSet object.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet/add"
    },
    {
        "title": "Atomics.add()",
        "summary": "The static Atomics.add() method adds a given value at a given position in the array and returns the old value at that position. This atomic operation guarantees that no other write happens until the modified value is written back.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/add"
    },
    {
        "title": "Set.add()",
        "summary": "The add() method appends a new element with a specified value to the end of a Set object.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/add"
    },
    {
        "title": "Promise.all()",
        "summary": "The Promise.all() method returns a single Promise that resolves when all of the promises passed as an iterable have resolved or when the iterable contains no promises. It rejects with the reason of the first promise that rejects.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all"
    },
    {
        "title": "Atomics.and()",
        "summary": "The static Atomics.and() method computes a bitwise AND with a given value at a given position in the array, and returns the old value at that position. This atomic operation guarantees that no other write happens until the modified value is written back.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/and"
    },
    {
        "title": "Function.apply()",
        "summary": "The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply"
    },
    {
        "title": "handler.apply()",
        "summary": "The handler.apply() method is a trap for a function call.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply"
    },
    {
        "title": "Reflect.apply()",
        "summary": "The static Reflect.apply() method calls a target function with arguments as specified.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/apply"
    },
    {
        "title": "Math.asin()",
        "summary": "The Math.asin() function returns the arcsine (in radians) of a number, that is",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/asin"
    },
    {
        "title": "Math.asinh()",
        "summary": "The Math.asinh() function returns the hyperbolic arcsine of a number, that is",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/asinh"
    },
    {
        "title": "Object.assign()",
        "summary": "The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign"
    },
    {
        "title": "Math.atan()",
        "summary": "The Math.atan() function returns the arctangent (in radians) of a number, that is",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/atan"
    },
    {
        "title": "Math.atan2()",
        "summary": "The Math.atan2() function returns the angle in the plane (in radians) between the positive x-axis and the ray from (0,0) to the point (x,y), for Math.atan2(y,x).",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/atan2"
    },
    {
        "title": "Math.atanh()",
        "summary": "The Math.atanh() function returns the hyperbolic arctangent of a number, that is",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/atanh"
    },
    {
        "title": "Function.bind()",
        "summary": "The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind"
    },
    {
        "title": "Function.call()",
        "summary": "The call() method calls a function with a given this value and arguments provided individually.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call"
    },
    {
        "title": "Promise.catch()",
        "summary": "The catch() method returns a Promise and deals with rejected cases only. It behaves the same as calling Promise.prototype.then(undefined, onRejected) (in fact, calling obj.catch(onRejected) internally calls obj.then(undefined, onRejected)). This means, that you have to provide onRejected function even if you want to fallback to undefined result value - for example obj.catch(() => {}).",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch"
    },
    {
        "title": "Math.cbrt()",
        "summary": "The Math.cbrt() function returns the cube root of a number, that is",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/cbrt"
    },
    {
        "title": "Math.ceil()",
        "summary": "The Math.ceil() function returns the smallest integer greater than or equal to a given number.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil"
    },
    {
        "title": "String.charAt()",
        "summary": "The String object's charAt() method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt"
    },
    {
        "title": "String.charCodeAt()",
        "summary": "The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt"
    },
    {
        "title": "Map.clear()",
        "summary": "The clear() method removes all elements from a Map object.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/clear"
    },
    {
        "title": "Set.clear()",
        "summary": "The clear() method removes all elements from a Set object.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/clear"
    },
    {
        "title": "Math.clz32()",
        "summary": "The Math.clz32() function returns the number of leading zero bits in the 32-bit binary representation of a number.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32"
    },
    {
        "title": "String.codePointAt()",
        "summary": "The codePointAt() method returns a non-negative integer that is the Unicode code point value.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt"
    },
    {
        "title": "Collator.compare()",
        "summary": "The Intl.Collator.prototype.compare() method compares two strings according to the sort order of this Collator object.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Collator/compare"
    },
    {
        "title": "Atomics.compareExchange()",
        "summary": "The static Atomics.compareExchange() method exchanges a given replacement value at a given position in the array, if a given expected value equals the old value.  It returns the old value at that position whether it was equal to the expected value or not. This atomic operation guarantees that no other write happens until the modified value is written back.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/compareExchange"
    },
    {
        "title": "WebAssembly.compile()",
        "summary": "The WebAssembly.compile() function compiles a WebAssembly.Module from WebAssembly binary code.  This function is useful if it is necessary to a compile a module before it can be instantiated (otherwise, the WebAssembly.instantiate() function should be used).",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/compile"
    },
    {
        "title": "String.concat()",
        "summary": "The concat() method concatenates the string arguments to the calling string and returns a new string.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat"
    },
    {
        "title": "Array.concat()",
        "summary": "The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat"
    },
    {
        "title": "Reflect.construct()",
        "summary": "The static Reflect.construct() method acts like the new operator, but as a function. It is equivalent to calling new target(...args). It gives also the added option to specify a different prototype.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/construct"
    },
    {
        "title": "handler.construct()",
        "summary": "The handler.construct() method is a trap for the new operator. In order for the new operation to be valid on the resulting Proxy object, the target used to initialize the proxy must itself have a [[Construct]] internal method (i.e. new target must be valid).",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/construct"
    },
    {
        "title": "Array.copyWithin()",
        "summary": "The copyWithin() method shallow copies part of an array to another location in the same array and returns it, without modifying its size.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin"
    },
    {
        "title": "TypedArray.copyWithin()",
        "summary": "The copyWithin() method copies the sequence of array elements within the array to the position starting at target. The copy is taken from the index positions of the second and third arguments start and end. The end argument is optional and defaults to the length of the array. This method has the same algorithm as Array.prototype.copyWithin. TypedArray is one of the typed array types here.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/copyWithin"
    },
    {
        "title": "Math.cos()",
        "summary": "The Math.cos() static function returns the cosine of the specified angle, which must be specified in radians. This value is",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/cos"
    },
    {
        "title": "Math.cosh()",
        "summary": "The Math.cosh() function returns the hyperbolic cosine of a number, that can be expressed using the constant e:",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/cosh"
    },
    {
        "title": "Object.create()",
        "summary": "The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create"
    },
    {
        "title": "Module.customSections()",
        "summary": "The WebAssembly.customSections() function returns a copy of the contents of all custom sections in the given module with the given string name.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Module/customSections"
    },
    {
        "title": "Object.defineProperties()",
        "summary": "The Object.defineProperties() method defines new or modifies existing properties directly on an object, returning the object.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties"
    },
    {
        "title": "Reflect.defineProperty()",
        "summary": "The static Reflect.defineProperty() method is like Object.defineProperty() but returns a Boolean.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/defineProperty"
    },
    {
        "title": "Object.defineProperty()",
        "summary": "The static method Object.defineProperty() defines a new property directly on an object, or modifies an existing property on an object, and returns the object.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty"
    },
    {
        "title": "handler.defineProperty()",
        "summary": "The handler.defineProperty() method is a trap for Object.defineProperty().",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/defineProperty"
    },
    {
        "title": "WeakSet.delete()",
        "summary": "The delete() method removes the specified element from a WeakSet object.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet/delete"
    },
    {
        "title": "Map.delete()",
        "summary": "The delete() method removes the specified element from a Map object.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/delete"
    },
    {
        "title": "WeakMap.delete()",
        "summary": "The delete() method removes the specified element from a WeakMap object.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/delete"
    },
    {
        "title": "Set.delete()",
        "summary": "The delete() method removes the specified element from a Set object.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/delete"
    },
    {
        "title": "Reflect.deleteProperty()",
        "summary": "The static Reflect.deleteProperty() method allows to delete properties. It is like the delete operator as a function.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/deleteProperty"
    },
    {
        "title": "handler.deleteProperty()",
        "summary": "The handler.deleteProperty() method is a trap for the delete operator.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/deleteProperty"
    },
    {
        "title": "String.endsWith()",
        "summary": "The endsWith() method determines whether a string ends with the characters of a specified string, returning true or false as appropriate.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith"
    },
    {
        "title": "Array.entries()",
        "summary": "The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries"
    },
    {
        "title": "TypedArray.entries()",
        "summary": "The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/entries"
    },
    {
        "title": "Map.entries()",
        "summary": "The entries() method returns a new Iterator object that contains the [key, value] pairs for each element in the Map object in insertion order.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/entries"
    },
    {
        "title": "Set.entries()",
        "summary": "The entries() method returns a new Iterator object that contains an array of [value, value] for each element in the Set object, in insertion order. For Set objects there is no key like in Map objects. However, to keep the API similar to the Map object, each entry has the same value for its key and value here, so that an array [value, value] is returned.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/entries"
    },
    {
        "title": "Object.entries()",
        "summary": "The Object.entries() method returns an array of a given object's own enumerable property [key, value] pairs, in the same order as that provided by a for...in loop (the difference being that a for-in loop enumerates properties in the prototype chain as well) . The order of the array returned by Object.entries() does not depend on how an object is defined. If there is a need for certain ordering then the array needs to be sorted first like Object.entries(obj).sort((a, b) => a[0] - b[0]);.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries"
    },
    {
        "title": "Array.every()",
        "summary": "The every() method tests whether all elements in the array pass the test implemented by the provided function.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every"
    },
    {
        "title": "TypedArray.every()",
        "summary": "The every() method tests whether all elements in the typed array pass the test implemented by the provided function. This method has the same algorithm as Array.prototype.every(). TypedArray is one of the typed array types here.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/every"
    },
    {
        "title": "Atomics.exchange()",
        "summary": "The static Atomics.exchange() method stores a given value at a given position in the array and returns the old value at that position. This atomic operation guarantees that no other write happens between the read of the old value and the write of the new value.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/exchange"
    },
    {
        "title": "RegExp.exec()",
        "summary": "The exec() method executes a search for a match in a specified string. Returns a result array, or null.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec"
    },
    {
        "title": "Math.exp()",
        "summary": "The Math.exp() function returns ex, where x is the argument, and e is Euler's number (also known as Napier's constant), the base of the natural logarithms.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/exp"
    },
    {
        "title": "Math.expm1()",
        "summary": "The Math.expm1() function returns ex - 1, where x is the argument, and e the base of the natural logarithms.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/expm1"
    },
    {
        "title": "Module.exports()",
        "summary": "The WebAssembly.exports() function returns an array containing descriptions of all the declared exports of the given Module.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Module/exports"
    },
    {
        "title": "TypedArray.fill()",
        "summary": "The fill() method fills all the elements of a typed array from a start index to an end index with a static value. This method has the same algorithm as Array.prototype.fill(). TypedArray is one of the typed array types here.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/fill"
    },
    {
        "title": "Array.fill()",
        "summary": "The fill() method fills all the elements of an array from a start index to an end index with a static value. The end index is not included.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill"
    },
    {
        "title": "Array.filter()",
        "summary": "The filter() method creates a new array with all elements that pass the test implemented by the provided function.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter"
    },
    {
        "title": "TypedArray.filter()",
        "summary": "The filter() method creates a new typed array with all elements that pass the test implemented by the provided function. This method has the same algorithm as Array.prototype.filter(). TypedArray is one of the typed array types here.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/filter"
    },
    {
        "title": "Promise.finally()",
        "summary": "The finally() method returns a Promise. When the promise is settled, i.e either fulfilled or rejected, the specified callback function is executed. This provides a way for code to be run whether the promise was fulfilled successfully or rejected once the Promise has been dealt with .",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally"
    },
    {
        "title": "TypedArray.find()",
        "summary": "The find() method returns a value in the typed array, if an element satisfies the provided testing function. Otherwise undefined is returned. TypedArray is one of the typed array types here.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/find"
    },
    {
        "title": "Array.find()",
        "summary": "The find() method returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find"
    },
    {
        "title": "TypedArray.findIndex()",
        "summary": "The findIndex() method returns an index in the typed array, if an element in the typed array satisfies the provided testing function. Otherwise -1 is returned.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/findIndex"
    },
    {
        "title": "Array.findIndex()",
        "summary": "The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating no element passed the test.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex"
    },
    {
        "title": "Array.flat()",
        "summary": "The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat"
    },
    {
        "title": "Math.floor()",
        "summary": "The Math.floor() function returns the largest integer less than or equal to a given number.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor"
    },
    {
        "title": "Symbol.for()",
        "summary": "The Symbol.for(key) method searches for existing symbols in a runtime-wide symbol registry with the given key and returns it if found. Otherwise a new symbol gets created in the global symbol registry with this key.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/for"
    },
    {
        "title": "Set.forEach()",
        "summary": "The forEach() method executes a provided function once for each value in the Set object, in insertion order.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/forEach"
    },
    {
        "title": "Array.forEach()",
        "summary": "The forEach() method executes a provided function once for each array element.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach"
    },
    {
        "title": "TypedArray.forEach()",
        "summary": "The forEach() method executes a provided function once per array element. This method has the same algorithm as Array.prototype.forEach(). TypedArray is one of the typed array types here.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/forEach"
    },
    {
        "title": "Map.forEach()",
        "summary": "The forEach() method executes a provided function once per each key/value pair in the Map object, in insertion order.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach"
    },
    {
        "title": "RelativeTimeFormat.format()",
        "summary": "The Intl.RelativeTimeFormat.prototype.format() method formats a value and unit according to the locale and formatting options of this RelativeTimeFormat object.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat/format"
    },
    {
        "title": "NumberFormat.format()",
        "summary": "The Intl.NumberFormat.prototype.format() method formats a number according to the locale and formatting options of this NumberFormat object.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat/format"
    },
    {
        "title": "DateTimeFormat.format()",
        "summary": "The Intl.DateTimeFormat.prototype.format() method formats a date according to the locale and formatting options of this Intl.DateTimeFormat object.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/format"
    },
    {
        "title": "RelativeTimeFormat.formatToParts()",
        "summary": "The Intl.RelativeTimeFormat.prototype.formatToParts() method returns an Array of objects representing the relative time format in parts that can be used for custom locale-aware formatting.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat/formatToParts"
    },
    {
        "title": "NumberFormat.formatToParts()",
        "summary": "The Intl.Numberformat.prototype.formatToParts() method allows locale-aware formatting of strings produced by NumberTimeFormat formatters.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat/formatToParts"
    },
    {
        "title": "DateTimeFormat.formatToParts()",
        "summary": "The Intl.DateTimeFormat.prototype.formatToParts() method allows locale-aware formatting of strings produced by DateTimeFormat formatters.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts"
    },
    {
        "title": "Object.freeze()",
        "summary": "The Object.freeze() method freezes an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being changed. In addition, freezing an object also prevents its prototype from being changed. freeze() returns the same object that was passed in.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze"
    },
    {
        "title": "TypedArray.from()",
        "summary": "The TypedArray.from() method creates a new typed array from an array-like or iterable object. This method is nearly the same as Array.from().",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/from"
    },
    {
        "title": "Array.from()",
        "summary": "The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from"
    },
    {
        "title": "String.fromCharCode()",
        "summary": "The static String.fromCharCode() method returns a string created from the specified sequence of UTF-16 code units.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode"
    },
    {
        "title": "String.fromCodePoint()",
        "summary": "The static String.fromCodePoint() method returns a string created by using the specified sequence of code points.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint"
    },
    {
        "title": "Object.fromEntries()",
        "summary": "The Object.fromEntries() method transforms a list of key-value pairs into an object.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries"
    },
    {
        "title": "Math.fround()",
        "summary": "The Math.fround() function returns the nearest 32-bit single precision float representation of a Number.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fround"
    },
    {
        "title": "Map.get()",
        "summary": "The get() method returns a specified element from a Map object.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get"
    },
    {
        "title": "handler.get()",
        "summary": "The handler.get() method is a trap for getting a property value.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/get"
    },
    {
        "title": "Table.get()",
        "summary": "The get() prototype method of the WebAssembly.Table() object retrieves a function reference stored at a given index.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/get"
    },
    {
        "title": "WeakMap.get()",
        "summary": "The get() method returns a specified element from a WeakMap object.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/get"
    },
    {
        "title": "Reflect.get()",
        "summary": "The static Reflect.get() method works like getting a property from an object (target[propertyKey]) as a function.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/get"
    },
    {
        "title": "Array.@@species()",
        "summary": "The Array[@@species] accessor property returns the Array constructor.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@species"
    },
    {
        "title": "Intl.getCanonicalLocales()",
        "summary": "The Intl.getCanonicalLocales() method returns an array containing the canonical locale names. Duplicates will be omitted and elements will be validated as structurally valid language tags.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/getCanonicalLocales"
    },
    {
        "title": "Date.getDate()",
        "summary": "The getDate() method returns the day of the month for the specified date according to local time.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate"
    },
    {
        "title": "Date.getDay()",
        "summary": "The getDay() method returns the day of the week for the specified date according to local time, where 0 represents Sunday. For the day of the month see getDate().",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay"
    },
    {
        "title": "DataView.getFloat32()",
        "summary": "The getFloat32() method gets a signed 32-bit float (float) at the specified byte offset from the start of the DataView.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/getFloat32"
    },
    {
        "title": "DataView.getFloat64()",
        "summary": "The getFloat64() method gets a signed 64-bit float (double) at the specified byte offset from the start of the DataView.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/getFloat64"
    },
    {
        "title": "Date.getFullYear()",
        "summary": "The getFullYear() method returns the year of the specified date according to local time.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear"
    },
    {
        "title": "Date.getHours()",
        "summary": "The getHours() method returns the hour for the specified date, according to local time.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours"
    },
    {
        "title": "DataView.getInt16()",
        "summary": "The getInt16() method gets a signed 16-bit integer (short) at the specified byte offset from the start of the DataView.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/getInt16"
    },
    {
        "title": "DataView.getInt32()",
        "summary": "The getInt32() method gets a signed 32-bit integer (long) at the specified byte offset from the start of the DataView.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/getInt32"
    },
    {
        "title": "DataView.getInt8()",
        "summary": "The getInt8() method gets a signed 8-bit integer (byte) at the specified byte offset from the start of the DataView.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/getInt8"
    },
    {
        "title": "Date.getMilliseconds()",
        "summary": "The getMilliseconds() method returns the milliseconds in the specified date according to local time.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds"
    },
    {
        "title": "Date.getMinutes()",
        "summary": "The getMinutes() method returns the minutes in the specified date according to local time.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMinutes"
    },
    {
        "title": "Date.getMonth()",
        "summary": "The getMonth() method returns the month in the specified date according to local time, as a zero-based value (where zero indicates the first month of the year).",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth"
    },
    {
        "title": "Object.getOwnPropertyDescriptor()",
        "summary": "The Object.getOwnPropertyDescriptor() method returns a property descriptor for an own property (that is, one directly present on an object and not in the object's prototype chain) of a given object.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor"
    },
    {
        "title": "Reflect.getOwnPropertyDescriptor()",
        "summary": "The static Reflect.getOwnPropertyDescriptor() method is similar to Object.getOwnPropertyDescriptor(). It returns a property descriptor of the given property if it exists on the object, undefined otherwise.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/getOwnPropertyDescriptor"
    },
    {
        "title": "handler.getOwnPropertyDescriptor()",
        "summary": "The handler.getOwnPropertyDescriptor() method is a trap for Object.getOwnPropertyDescriptor().",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/getOwnPropertyDescriptor"
    },
    {
        "title": "Object.getOwnPropertyDescriptors()",
        "summary": "The Object.getOwnPropertyDescriptors() method returns all own property descriptors of a given object.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors"
    },
    {
        "title": "Object.getOwnPropertyNames()",
        "summary": "The Object.getOwnPropertyNames() method returns an array of all properties (including non-enumerable properties except for those which use Symbol) found directly in a given object.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames"
    },
    {
        "title": "Object.getOwnPropertySymbols()",
        "summary": "The Object.getOwnPropertySymbols() method returns an array of all symbol properties found directly upon a given object.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols"
    },
    {
        "title": "Reflect.getPrototypeOf()",
        "summary": "The static Reflect.getPrototypeOf() method is almost the same method as Object.getPrototypeOf(). It returns the prototype (i.e. the value of the internal [[Prototype]] property) of the specified object.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/getPrototypeOf"
    },
    {
        "title": "handler.getPrototypeOf()",
        "summary": "The handler.getPrototypeOf() method is a trap for the [[GetPrototypeOf]] internal method.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/getPrototypeOf"
    },
    {
        "title": "Object.getPrototypeOf()",
        "summary": "The Object.getPrototypeOf() method returns the prototype (i.e. the value of the internal [[Prototype]] property) of the specified object.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf"
    },
    {
        "title": "Date.getSeconds()",
        "summary": "The getSeconds() method returns the seconds in the specified date according to local time.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getSeconds"
    },
    {
        "title": "Date.getTime()",
        "summary": "The getTime() method returns the numeric value corresponding to the time for the specified date according to universal time.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime"
    },
    {
        "title": "Date.getTimezoneOffset()",
        "summary": "The getTimezoneOffset() method returns the time zone difference, in minutes, from current locale (host system settings) to UTC.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset"
    },
    {
        "title": "Date.getUTCDate()",
        "summary": "The getUTCDate() method returns the day (date) of the month in the specified date according to universal time.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDate"
    },
    {
        "title": "Date.getUTCDay()",
        "summary": "The getUTCDay() method returns the day of the week in the specified date according to universal time, where 0 represents Sunday.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDay"
    },
    {
        "title": "Date.getUTCFullYear()",
        "summary": "The getUTCFullYear() method returns the year in the specified date according to universal time.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear"
    },
    {
        "title": "Date.getUTCHours()",
        "summary": "The getUTCHours() method returns the hours in the specified date according to universal time.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCHours"
    },
    {
        "title": "Date.getUTCMilliseconds()",
        "summary": "The getUTCMilliseconds() method returns the milliseconds in the specified date according to universal time.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMilliseconds"
    },
    {
        "title": "Date.getUTCMinutes()",
        "summary": "The getUTCMinutes() method returns the minutes in the specified date according to universal time.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMinutes"
    },
    {
        "title": "Date.getUTCMonth()",
        "summary": "The getUTCMonth() returns the month of the specified date according to universal time, as a zero-based value (where zero indicates the first month of the year).",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMonth"
    },
    {
        "title": "Date.getUTCSeconds()",
        "summary": "The getUTCSeconds() method returns the seconds in the specified date according to universal time.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCSeconds"
    },
    {
        "title": "DataView.getUint16()",
        "summary": "The getUint16() method gets an unsigned 16-bit integer (unsigned short) at the specified byte offset from the start of the DataView.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/getUint16"
    },
    {
        "title": "DataView.getUint32()",
        "summary": "The getUint32() method gets an unsigned 32-bit integer (unsigned long) at the specified byte offset from the start of the DataView.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/getUint32"
    },
    {
        "title": "DataView.getUint8()",
        "summary": "The getUint8() method gets an unsigned 8-bit integer (unsigned byte) at the specified byte offset from the start of the DataView.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/getUint8"
    },
    {
        "title": "Memory.grow()",
        "summary": "The grow() protoype method of the Memory object increases the size of the memory instance by a specified number of WebAssembly pages.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory/grow"
    },
    {
        "title": "Table.grow()",
        "summary": "The grow() prototype method of the WebAssembly.Table object increases the size of the Table instance by a specified number of elements.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/grow"
    },
    {
        "title": "Map.has()",
        "summary": "The has() method returns a boolean indicating whether an element with the specified key exists or not.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/has"
    },
    {
        "title": "handler.has()",
        "summary": "The handler.has() method is a trap for the in operator.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/has"
    },
    {
        "title": "Reflect.has()",
        "summary": "The static Reflect.has() method works like the in operator as a function.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/has"
    },
    {
        "title": "Set.has()",
        "summary": "The has() method returns a boolean indicating whether an element with the specified value exists in a Set object or not.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/has"
    },
    {
        "title": "WeakMap.has()",
        "summary": "The has() method returns a boolean indicating whether an element with the specified key exists in the WeakMap object or not.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/has"
    },
    {
        "title": "WeakSet.has()",
        "summary": "The has() method returns a boolean indicating whether an object exists in a WeakSet or not.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet/has"
    },
    {
        "title": "Object.hasOwnProperty()",
        "summary": "The hasOwnProperty() method returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty"
    },
    {
        "title": "Math.hypot()",
        "summary": "The Math.hypot() function returns the square root of the sum of squares of its arguments, that is:",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/hypot"
    },
    {
        "title": "Guide.Indexed_collections()",
        "summary": "This chapter introduces collections of data which are ordered by an index value. This includes arrays and array-like constructs such as Array objects and TypedArray objects.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections"
    },
    {
        "title": "Module.imports()",
        "summary": "The WebAssembly.imports() function returns an array containing descriptions of all the declared imports of the given Module.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Module/imports"
    },
    {
        "title": "Math.imul()",
        "summary": "The Math.imul() function returns the result of the C-like 32-bit multiplication of the two parameters.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul"
    },
    {
        "title": "String.includes()",
        "summary": "The includes() method determines whether one string may be found within another string, returning true or false as appropriate.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes"
    },
    {
        "title": "TypedArray.includes()",
        "summary": "The includes() method determines whether a typed array includes a certain element, returning true or false as appropriate. This method has the same algorithm as Array.prototype.includes(). TypedArray is one of the typed array types here.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/includes"
    },
    {
        "title": "Array.includes()",
        "summary": "The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes"
    },
    {
        "title": "TypedArray.indexOf()",
        "summary": "The indexOf() method returns the first index at which a given element can be found in the typed array, or -1 if it is not present. This method has the same algorithm as Array.prototype.indexOf(). TypedArray is one of the typed array types here.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/indexOf"
    },
    {
        "title": "String.indexOf()",
        "summary": "The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf"
    },
    {
        "title": "Array.indexOf()",
        "summary": "The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf"
    },
    {
        "title": "WebAssembly.instantiate()",
        "summary": "The WebAssembly.instantiate() function allows you to compile and instantiate WebAssembly code. This function has two overloads:",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiate"
    },
    {
        "title": "WebAssembly.instantiateStreaming()",
        "summary": "The WebAssembly.instantiateStreaming() function compiles and instantiates a WebAssembly module directly from a streamed underlying source. This is the most efficient, optimized way to load wasm code.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiateStreaming"
    },
    {
        "title": "Object.is()",
        "summary": "The Object.is() method determines whether two values are the same value.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is"
    },
    {
        "title": "Array.isArray()",
        "summary": "The Array.isArray() method determines whether the passed value is an Array.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray"
    },
    {
        "title": "Object.isExtensible()",
        "summary": "The Object.isExtensible() method determines if an object is extensible (whether it can have new properties added to it).",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible"
    },
    {
        "title": "Reflect.isExtensible()",
        "summary": "The static Reflect.isExtensible() method determines if an object is extensible (whether it can have new properties added to it). It is similar to Object.isExtensible(), but with some differences.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/isExtensible"
    },
    {
        "title": "handler.isExtensible()",
        "summary": "The handler.isExtensible() method is a trap for Object.isExtensible().",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/isExtensible"
    },
    {
        "title": "Number.isFinite()",
        "summary": "The Number.isFinite() method determines whether the passed value is a finite number.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite"
    },
    {
        "title": "Object.isFrozen()",
        "summary": "The Object.isFrozen() determines if an object is frozen.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen"
    },
    {
        "title": "Number.isInteger()",
        "summary": "The Number.isInteger() method determines whether the passed value is an integer.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger"
    },
    {
        "title": "Atomics.isLockFree()",
        "summary": "The static Atomics.isLockFree() method is used to determine whether to use locks or atomic operations. It returns true, if the given size is one of the BYTES_PER_ELEMENT property of integer TypedArray types.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/isLockFree"
    },
    {
        "title": "Global_Objects.isNaN()",
        "summary": "The isNaN() function determines whether a value is NaN or not. Note",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN"
    },
    {
        "title": "Number.isNaN()",
        "summary": "The Number.isNaN() method determines whether the passed value is NaN and its type is Number. It is a more robust version of the original, global isNaN().",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN"
    },
    {
        "title": "Object.isPrototypeOf()",
        "summary": "The isPrototypeOf() method checks if an object exists in another object's prototype chain.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf"
    },
    {
        "title": "Number.isSafeInteger()",
        "summary": "The Number.isSafeInteger() method determines whether the provided value is a number that is a safe integer.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger"
    },
    {
        "title": "Object.isSealed()",
        "summary": "The Object.isSealed() method determines if an object is sealed.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed"
    },
    {
        "title": "ArrayBuffer.isView()",
        "summary": "The ArrayBuffer.isView() method returns true if arg is one of the ArrayBuffer views, such as typed array objects or a DataView; false otherwise.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/isView"
    },
    {
        "title": "Enumerator.item()",
        "summary": "The Enumerator.item method returns the current item in the collection.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Microsoft_Extensions/Enumerator/item"
    },
    {
        "title": "Array.join()",
        "summary": "The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join"
    },
    {
        "title": "TypedArray.join()",
        "summary": "The join() method joins all elements of an array into a string. This method has the same algorithm as Array.prototype.join(). TypedArray is one of the typed array types here.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/join"
    },
    {
        "title": "Symbol.keyFor()",
        "summary": "The Symbol.keyFor(sym) method retrieves a shared symbol key from the global symbol registry for the given symbol.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/keyFor"
    },
    {
        "title": "Array.keys()",
        "summary": "The keys() method returns a new Array Iterator object that contains the keys for each index in the array.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys"
    },
    {
        "title": "Map.keys()",
        "summary": "The keys() method returns a new Iterator object that contains the keys for each element in the Map object in insertion order.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/keys"
    },
    {
        "title": "Object.keys()",
        "summary": "The Object.keys() method returns an array of a given object's own property names, in the same order as we get with a normal loop.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys"
    },
    {
        "title": "TypedArray.keys()",
        "summary": "The keys() method returns a new Array Iterator object that contains the keys for each index in the array.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/keys"
    },
    {
        "title": "Array.lastIndexOf()",
        "summary": "The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf"
    },
    {
        "title": "TypedArray.lastIndexOf()",
        "summary": "The lastIndexOf() method returns the last index at which a given element can be found in the typed array, or -1 if it is not present. The typed array is searched backwards, starting at fromIndex. This method has the same algorithm as Array.prototype.lastIndexOf(). TypedArray is one of the typed array types here.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/lastIndexOf"
    },
    {
        "title": "String.lastIndexOf()",
        "summary": "The lastIndexOf() method returns the index within the calling String object of the last occurrence of the specified value, searching backwards from fromIndex. Returns -1 if the value is not found.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf"
    },
    {
        "title": "Atomics.load()",
        "summary": "The static Atomics.load() method returns a value at a given position in the array.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/load"
    },
    {
        "title": "String.localeCompare()",
        "summary": "The localeCompare() method returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare"
    },
    {
        "title": "Math.log()",
        "summary": "The Math.log() function returns the natural logarithm (base e) of a number, that is",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log"
    },
    {
        "title": "Math.log10()",
        "summary": "The Math.log10() function returns the base 10 logarithm of a number, that is",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log10"
    },
    {
        "title": "Math.log1p()",
        "summary": "The Math.log1p() function returns the natural logarithm (base e) of 1 + a number, that is",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log1p"
    },
    {
        "title": "Math.log2()",
        "summary": "The Math.log2() function returns the base 2 logarithm of a number, that is",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log2"
    },
    {
        "title": "Array.map()",
        "summary": "The map() method creates a new array with the results of calling a provided function on every element in the calling array.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map"
    },
    {
        "title": "TypedArray.map()",
        "summary": "The map() method creates a new typed array with the results of calling a provided function on every element in this typed array. This method has the same algorithm as Array.prototype.map(). TypedArray is one of the typed array types here.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/map"
    },
    {
        "title": "String.match()",
        "summary": "The match() method retrieves the result of matching a string against a regular expression.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match"
    },
    {
        "title": "Math.max()",
        "summary": "The Math.max() function returns the largest of zero or more numbers.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max"
    },
    {
        "title": "Math.min()",
        "summary": "The static function Math.min() returns the lowest-valued number passed into it, or NaN if any parameter isn't a number and can't be converted into one.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min"
    },
    {
        "title": "Debug.msTraceAsyncOperationCompleted()",
        "summary": "The debug.msTraceAsyncCallbackCompleted function indicates that an asynchronous operation has completed.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Microsoft_Extensions/Debug/msTraceAsyncOperationCompleted"
    },
    {
        "title": "Debug.msTraceAsyncCallbackStarting()",
        "summary": "The debug.msTraceAsyncCallbackStarting function associates the callback stack with a previously specified asynchronous operation.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Microsoft_Extensions/Debug/msTraceAsyncCallbackStarting"
    },
    {
        "title": "Debug.msTraceAsyncOperationStarting()",
        "summary": "Initiates a trace for an asynchronous operation.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Microsoft_Extensions/Debug/msTraceAsyncOperationStarting"
    },
    {
        "title": "Debug.msUpdateAsyncCallbackRelation()",
        "summary": "The debug.msUpdateAsyncCallbackRelation function updates the relationship status between a synchronous work item and the associated asynchronous operation.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Microsoft_Extensions/Debug/msUpdateAsyncCallbackRelation"
    },
    {
        "title": "Generator.next()",
        "summary": "The next() method returns an object with two properties done and value. You can also provide a parameter to the next method to send a value to the generator.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator/next"
    },
    {
        "title": "String.normalize()",
        "summary": "The normalize() method returns the Unicode Normalization Form of a given string (if the value isn't a string, it will be converted to one first).",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize"
    },
    {
        "title": "Atomics.notify()",
        "summary": "The static Atomics.notify() method notifies up some agents that are sleeping in the wait queue.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/notify"
    },
    {
        "title": "Date.now()",
        "summary": "The Date.now() method returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now"
    },
    {
        "title": "Array.of()",
        "summary": "The Array.of() method creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of"
    },
    {
        "title": "TypedArray.of()",
        "summary": "The TypedArray.of() method creates a new typed array with a variable number of arguments. This method is nearly the same as Array.of().",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/of"
    },
    {
        "title": "Atomics.or()",
        "summary": "The static Atomics.or() method computes a bitwise OR with a given value at a given position in the array, and returns the old value at that position. This atomic operation guarantees that no other write happens until the modified value is written back.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/or"
    },
    {
        "title": "handler.ownKeys()",
        "summary": "The handler.ownKeys() method is a trap for Reflect.ownKeys().",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/ownKeys"
    },
    {
        "title": "Reflect.ownKeys()",
        "summary": "The static Reflect.ownKeys() method returns an array of the target object's own property keys.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys"
    },
    {
        "title": "String.padEnd()",
        "summary": "The padEnd() method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end (right) of the current string.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd"
    },
    {
        "title": "String.padStart()",
        "summary": "The padStart() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart"
    },
    {
        "title": "Date.parse()",
        "summary": "The Date.parse() method parses a string representation of a date, and returns the number of milliseconds since January 1, 1970, 00:00:00 UTC or NaN if the string is unrecognized or, in some cases, contains illegal date values (e.g. 2015-02-31).",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse"
    },
    {
        "title": "JSON.parse()",
        "summary": "The JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string. An optional reviver function can be provided to perform a transformation on the resulting object before it is returned.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse"
    },
    {
        "title": "Errors.JSON_bad_parse()",
        "summary": "bad parsing",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/JSON_bad_parse"
    },
    {
        "title": "Number.parseFloat()",
        "summary": "The Number.parseFloat() method parses a string argument and returns a floating point number.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat"
    },
    {
        "title": "Number.parseInt()",
        "summary": "The Number.parseInt() method parses a string argument and returns an integer of the specified radix or base.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt"
    },
    {
        "title": "Array.pop()",
        "summary": "The pop() method removes the last element from an array and returns that element. This method changes the length of the array.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop"
    },
    {
        "title": "Math.pow()",
        "summary": "The Math.pow() function returns the base to the exponent power, that is, baseexponent.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow"
    },
    {
        "title": "Reflect.preventExtensions()",
        "summary": "The static Reflect.preventExtensions() method prevents new properties from ever being added to an object (i.e. prevents future extensions to the object). It is similar to Object.preventExtensions(), but with some differences.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/preventExtensions"
    },
    {
        "title": "Object.preventExtensions()",
        "summary": "The Object.preventExtensions() method prevents new properties from ever being added to an object (i.e. prevents future extensions to the object).",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions"
    },
    {
        "title": "handler.preventExtensions()",
        "summary": "The handler.preventExtensions() method is a trap for Object.preventExtensions().",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/preventExtensions"
    },
    {
        "title": "Object.propertyIsEnumerable()",
        "summary": "The propertyIsEnumerable() method returns a Boolean indicating whether the specified property is enumerable.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable"
    },
    {
        "title": "Set.@@iterator()",
        "summary": "The initial value of the @@iterator property is the same function object as the initial value of the values property.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/@@iterator"
    },
    {
        "title": "Map.@@iterator()",
        "summary": "The initial value of the @@iterator property is the same function object as the initial value of the entries method.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/@@iterator"
    },
    {
        "title": "String.@@iterator()",
        "summary": "The [@@iterator]() method returns a new Iterator object that iterates over the code points of a String value, returning each code point as a String value.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator"
    },
    {
        "title": "Array.@@iterator()",
        "summary": "The initial value of the @@iterator property is the same function object as the initial value of the values() property.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator"
    },
    {
        "title": "TypedArray.@@iterator()",
        "summary": "The initial value of the @@iterator property is the same function object as the initial value of the values property.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/@@iterator"
    },
    {
        "title": "RegExp.@@match()",
        "summary": "The [@@match]() method retrieves the matches when matching a string against a regular expression.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@match"
    },
    {
        "title": "RegExp.@@replace()",
        "summary": "The [@@replace]() method replaces some or all matches of a this pattern in a string by a replacement, and returns the result of the replacement as a new string. The replacement can be a string or a function to be called for each match.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@replace"
    },
    {
        "title": "RegExp.@@search()",
        "summary": "The [@@search]() method executes a search for a match between a this regular expression and a string.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@search"
    },
    {
        "title": "RegExp.@@split()",
        "summary": "The [@@split]() method splits a String object into an array of strings by separating the string into substrings.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@split"
    },
    {
        "title": "Date.@@toPrimitive()",
        "summary": "The [@@toPrimitive]() method converts a Date object to a primitive value.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/@@toPrimitive"
    },
    {
        "title": "Symbol.@@toPrimitive()",
        "summary": "The [@@toPrimitive]() method converts a Symbol object to a primitive value.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/@@toPrimitive"
    },
    {
        "title": "Array.push()",
        "summary": "The push() method adds one or more elements to the end of an array and returns the new length of the array.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push"
    },
    {
        "title": "Promise.race()",
        "summary": "The Promise.race() method returns a promise that resolves or rejects as soon as one of the promises in an iterable resolves or rejects, with the value or reason from that promise.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race"
    },
    {
        "title": "Math.random()",
        "summary": "The Math.random() function returns a floating-point, pseudo-random number in the range 0–1 (inclusive of 0, but not 1) with approximately uniform distribution over that range — which you can then scale to your desired range. The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random"
    },
    {
        "title": "String.raw()",
        "summary": "The static String.raw() method is a tag function of template literals, similar to the r prefix in Python or the @ prefix in C# for string literals (yet there is a difference",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/raw"
    },
    {
        "title": "Array.Reduce()",
        "summary": "The reduce() method executes a reducer function (that you provide) on each member of the array resulting in a single output value.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce"
    },
    {
        "title": "TypedArray.reduce()",
        "summary": "The reduce() method applies a function against an accumulator and each value of the typed array (from left-to-right) has to reduce it to a single value. This method has the same algorithm as Array.prototype.reduce(). TypedArray is one of the typed array types here.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/reduce"
    },
    {
        "title": "Array.ReduceRight()",
        "summary": "The reduceRight() method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight"
    },
    {
        "title": "TypedArray.reduceRight()",
        "summary": "The reduceRight() method applies a function against an accumulator and each value of the typed array (from right-to-left) has to reduce it to a single value. This method has the same algorithm as Array.prototype.reduceRight(). TypedArray is one of the typed array types here.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/reduceRight"
    },
    {
        "title": "Promise.reject()",
        "summary": "The Promise.reject() method returns a Promise object that is rejected with a given reason.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject"
    },
    {
        "title": "String.repeat()",
        "summary": "The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat"
    },
    {
        "title": "String.replace()",
        "summary": "The replace() method returns a new string with some or all matches of a pattern replaced by a replacement.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace"
    },
    {
        "title": "Promise.resolve()",
        "summary": "The Promise.resolve() method returns a Promise object that is resolved with a given value. If the value is a promise, that promise is returned; if the value is a thenable (i.e. has a \"then\" method), the returned promise will \"follow\" that thenable, adopting its eventual state; otherwise the returned promise will be fulfilled with the value. This function flattens nested layers of promise-like objects (e.g. a promise that resolves to a promise that resolves to something) into a single layer.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve"
    },
    {
        "title": "RelativeTimeFormat.resolvedOptions()",
        "summary": "The Intl.RelativeTimeFormat.prototype.resolvedOptions() method returns a new object with properties reflecting the locale and relative time formatting options computed during initialization of this RelativeTimeFormat object.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat/resolvedOptions"
    },
    {
        "title": "DateTimeFormat.resolvedOptions()",
        "summary": "The Intl.DateTimeFormat.prototype.resolvedOptions() method returns a new object with properties reflecting the locale and date and time formatting options computed during initialization of this DateTimeFormat object.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/resolvedOptions"
    },
    {
        "title": "NumberFormat.resolvedOptions()",
        "summary": "The Intl.NumberFormat.prototype.resolvedOptions() method returns a new object with properties reflecting the locale and number formatting options computed during initialization of this NumberFormat object.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat/resolvedOptions"
    },
    {
        "title": "Collator.resolvedOptions()",
        "summary": "The Intl.Collator.prototype.resolvedOptions() method returns a new object with properties reflecting the locale and collation options computed during initialization of this Collator object.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Collator/resolvedOptions"
    },
    {
        "title": "PluralRules.resolvedOptions()",
        "summary": "The Intl.PluralRules.prototype.resolvedOptions() method returns a new object with properties reflecting the locale and plural formatting options computed during initialization of this PluralRules object.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules/resolvedOptions"
    },
    {
        "title": "Generator.return()",
        "summary": "The return() method returns the given value and finishes the generator.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator/return"
    },
    {
        "title": "TypedArray.reverse()",
        "summary": "The reverse() method reverses a typed array in place. The first typed array element becomes the last and the last becomes the first. This method has the same algorithm as Array.prototype.reverse(). TypedArray is one of the typed array types here.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/reverse"
    },
    {
        "title": "Array.reverse()",
        "summary": "The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse"
    },
    {
        "title": "Proxy.revocable()",
        "summary": "The Proxy.revocable() method is used to create a revocable Proxy object.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/revocable"
    },
    {
        "title": "Math.round()",
        "summary": "The Math.round() function returns the value of a number rounded to the nearest integer.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round"
    },
    {
        "title": "Object.seal()",
        "summary": "The Object.seal() method seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable. Values of present properties can still be changed as long as they are writable.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal"
    },
    {
        "title": "String.search()",
        "summary": "The search() method executes a search for a match between a regular expression and this String object.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search"
    },
    {
        "title": "PluralRules.select()",
        "summary": "The Intl.PluralRules.prototype.select method returns a String indicating which plural rule to use for locale-aware formatting.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules/select"
    },
    {
        "title": "Map.set()",
        "summary": "The set() method adds or updates an element with a specified key and value to a Map object.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/set"
    },
    {
        "title": "handler.set()",
        "summary": "The handler.set() method is a trap for setting a property value.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/set"
    },
    {
        "title": "Reflect.set()",
        "summary": "The static Reflect.set() method works like setting a property on an object.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/set"
    },
    {
        "title": "TypedArray.set()",
        "summary": "The set() method stores multiple values in the typed array, reading input values from a specified array.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/set"
    },
    {
        "title": "WeakMap.set()",
        "summary": "The set() method adds a new element with a specified key and value to a WeakMap object.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/set"
    },
    {
        "title": "Table.set()",
        "summary": "The set() prototype method of the WebAssembly.Table object mutates a reference stored at a given index to a different value.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/set"
    },
    {
        "title": "Date.setDate()",
        "summary": "The setDate() method sets the day of the Date object relative to the beginning of the currently set month.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setDate"
    },
    {
        "title": "DataView.setFloat32()",
        "summary": "The setFloat32() method stores a signed 32-bit float (float) value at the specified byte offset from the start of the DataView.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/setFloat32"
    },
    {
        "title": "DataView.setFloat64()",
        "summary": "The setFloat64() method stores a signed 64-bit float (double) value at the specified byte offset from the start of the DataView.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/setFloat64"
    },
    {
        "title": "Date.setFullYear()",
        "summary": "The setFullYear() method sets the full year for a specified date according to local time. Returns new timestamp.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear"
    },
    {
        "title": "Date.setHours()",
        "summary": "The setHours() method sets the hours for a specified date according to local time, and returns the number of milliseconds since January 1, 1970 00:00:00 UTC until the time represented by the updated Date instance.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setHours"
    },
    {
        "title": "DataView.setInt16()",
        "summary": "The setInt16() method stores a signed 16-bit integer (short) value at the specified byte offset from the start of the DataView.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/setInt16"
    },
    {
        "title": "DataView.setInt32()",
        "summary": "The setInt32() method stores a signed 32-bit integer (long) value at the specified byte offset from the start of the DataView.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/setInt32"
    },
    {
        "title": "DataView.setInt8()",
        "summary": "The setInt8() method stores a signed 8-bit integer (byte) value at the specified byte offset from the start of the DataView.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/setInt8"
    },
    {
        "title": "Date.setMilliseconds()",
        "summary": "The setMilliseconds() method sets the milliseconds for a specified date according to local time.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setMilliseconds"
    },
    {
        "title": "Date.setMinutes()",
        "summary": "The setMinutes() method sets the minutes for a specified date according to local time.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setMinutes"
    },
    {
        "title": "Date.setMonth()",
        "summary": "The setMonth() method sets the month for a specified date according to the currently set year.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setMonth"
    },
    {
        "title": "Object.setPrototypeOf()",
        "summary": "The Object.setPrototypeOf() method sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf"
    },
    {
        "title": "handler.setPrototypeOf()",
        "summary": "The handler.setPrototypeOf() method is a trap for Object.setPrototypeOf().",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/setPrototypeOf"
    },
    {
        "title": "Reflect.setPrototypeOf()",
        "summary": "The static Reflect.setPrototypeOf() method is the same method as Object.setPrototypeOf(). It sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or to null.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/setPrototypeOf"
    },
    {
        "title": "Date.setSeconds()",
        "summary": "The setSeconds() method sets the seconds for a specified date according to local time.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setSeconds"
    },
    {
        "title": "Date.setTime()",
        "summary": "The setTime() method sets the Date object to the time represented by a number of milliseconds since January 1, 1970, 00:00:00 UTC.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setTime"
    },
    {
        "title": "Date.setUTCDate()",
        "summary": "The setUTCDate() method sets the day of the month for a specified date according to universal time.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCDate"
    },
    {
        "title": "Date.setUTCFullYear()",
        "summary": "The setUTCFullYear() method sets the full year for a specified date according to universal time.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCFullYear"
    },
    {
        "title": "Date.setUTCHours()",
        "summary": "The setUTCHours() method sets the hour for a specified date according to universal time, and returns the number of milliseconds since  January 1, 1970 00:00:00 UTC until the time represented by the updated Date instance.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCHours"
    },
    {
        "title": "Date.setUTCMilliseconds()",
        "summary": "The setUTCMilliseconds() method sets the milliseconds for a specified date according to universal time.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCMilliseconds"
    },
    {
        "title": "Date.setUTCMinutes()",
        "summary": "The setUTCMinutes() method sets the minutes for a specified date according to universal time.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCMinutes"
    },
    {
        "title": "Date.setUTCMonth()",
        "summary": "The setUTCMonth() method sets the month for a specified date according to universal time.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCMonth"
    },
    {
        "title": "Date.setUTCSeconds()",
        "summary": "The setUTCSeconds() method sets the seconds for a specified date according to universal time.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCSeconds"
    },
    {
        "title": "DataView.setUint16()",
        "summary": "The setUint16() method stores an unsigned 16-bit integer (unsigned short) value at the specified byte offset from the start of the DataView.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/setUint16"
    },
    {
        "title": "DataView.setUint32()",
        "summary": "The setUint32() method stores an unsigned 32-bit integer (unsigned long) value at the specified byte offset from the start of the DataView.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/setUint32"
    },
    {
        "title": "DataView.setUint8()",
        "summary": "The setUint8() method stores an unsigned 8-bit integer (byte) value at the specified byte offset from the start of the DataView.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/setUint8"
    },
    {
        "title": "Array.shift()",
        "summary": "The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift"
    },
    {
        "title": "Math.sign()",
        "summary": "The Math.sign() function returns the sign of a number, indicating whether the number is positive, negative or zero.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign"
    },
    {
        "title": "Math.sin()",
        "summary": "The Math.sin() function returns the sine of a number.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sin"
    },
    {
        "title": "Math.sinh()",
        "summary": "The Math.sinh() function returns the hyperbolic sine of a number, that can be expressed using the constant e:",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sinh"
    },
    {
        "title": "String.slice()",
        "summary": "The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice"
    },
    {
        "title": "ArrayBuffer.slice()",
        "summary": "The slice() method returns a new ArrayBuffer whose contents are a copy of this ArrayBuffer's bytes from begin, inclusive, up to end, exclusive.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/slice"
    },
    {
        "title": "TypedArray.slice()",
        "summary": "The slice() method returns a shallow copy of a portion of a typed array into a new typed array object. This method has the same algorithm as Array.prototype.slice(). TypedArray is one of the typed array types here.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/slice"
    },
    {
        "title": "Array.slice()",
        "summary": "The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice"
    },
    {
        "title": "SharedArrayBuffer.slice()",
        "summary": "The SharedArrayBuffer.prototype.slice() method returns a new SharedArrayBuffer whose contents are a copy of this SharedArrayBuffer's bytes from begin, inclusive, up to end, exclusive. If either begin or end is negative, it refers to an index from the end of the array, as opposed to from the beginning. This method has the same algorithm as Array.prototype.slice().",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/slice"
    },
    {
        "title": "Array.some()",
        "summary": "The some() method tests whether at least one element in the array passes the test implemented by the provided function.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some"
    },
    {
        "title": "TypedArray.some()",
        "summary": "The some() method tests whether some element in the typed array passes the test implemented by the provided function. This method has the same algorithm as Array.prototype.some(). TypedArray is one of the typed array types here.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/some"
    },
    {
        "title": "Array.sort()",
        "summary": "The sort() method sorts the elements of an array in place and returns the array. The default sort order is built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort"
    },
    {
        "title": "TypedArray.sort()",
        "summary": "The sort() method sorts the elements of a typed array numerically in place and returns the typed array. This method has the same algorithm as Array.prototype.sort(), except that sorts the values numerically instead of as strings. TypedArray is one of the typed array types here.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/sort"
    },
    {
        "title": "Array.splice()",
        "summary": "The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice"
    },
    {
        "title": "String.split()",
        "summary": "The split() method splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split"
    },
    {
        "title": "Math.sqrt()",
        "summary": "The Math.sqrt() function returns the square root of a number, that is",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt"
    },
    {
        "title": "String.startsWith()",
        "summary": "The startsWith() method determines whether a string begins with the characters of a specified string, returning true or false as appropriate.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith"
    },
    {
        "title": "Atomics.store()",
        "summary": "The static Atomics.store() method stores a given value at the given position in the array and returns that value.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/store"
    },
    {
        "title": "JSON.stringify()",
        "summary": "The JSON.stringify() method converts a JavaScript object or value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify"
    },
    {
        "title": "Atomics.sub()",
        "summary": "The static Atomics.sub() method substracts a given value at a given position in the array and returns the old value at that position. This atomic operation guarantees that no other write happens until the modified value is written back.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/sub"
    },
    {
        "title": "TypedArray.subarray()",
        "summary": "The subarray() method returns a new TypedArray on the same ArrayBuffer store and with the same element types as for this TypedArray object. The begin offset is inclusive and the end offset is exclusive. TypedArray is one of the typed array types.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/subarray"
    },
    {
        "title": "String.substring()",
        "summary": "The substring() method returns the part of the string between the start and end indexes, or to the end of the string.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring"
    },
    {
        "title": "NumberFormat.supportedLocalesOf()",
        "summary": "The Intl.NumberFormat.supportedLocalesOf() method returns an array containing those of the provided locales that are supported in number formatting without having to fall back to the runtime's default locale.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat/supportedLocalesOf"
    },
    {
        "title": "DateTimeFormat.supportedLocalesOf()",
        "summary": "The Intl.DateTimeFormat.supportedLocalesOf() method returns an array containing those of the provided locales that are supported in date and time formatting without having to fall back to the runtime's default locale.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/supportedLocalesOf"
    },
    {
        "title": "Collator.supportedLocalesOf()",
        "summary": "The Intl.Collator.supportedLocalesOf() method returns an array containing those of the provided locales that are supported in collation without having to fall back to the runtime's default locale.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Collator/supportedLocalesOf"
    },
    {
        "title": "PluralRules.supportedLocalesOf()",
        "summary": "The Intl.PluralRules.supportedLocalesOf() method returns an array containing those of the provided locales that are supported in plural formatting without having to fall back to the runtime's default locale.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules/supportedLocalesOf"
    },
    {
        "title": "RelativeTimeFormat.supportedLocalesOf()",
        "summary": "The Intl.RelativeTimeFormat.supportedLocalesOf() method returns an array containing those of the provided locales that are supported in date and time formatting without having to fall back to the runtime's default locale.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat/supportedLocalesOf"
    },
    {
        "title": "ListFormat.supportedLocalesOf()",
        "summary": "The Intl.ListFormat.supportedLocalesOf() method returns an array containing those of the provided locales that are supported in date and time formatting without having to fall back to the runtime's default locale.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ListFormat/supportedLocalesOf"
    },
    {
        "title": "Math.tan()",
        "summary": "The Math.tan() function returns the tangent of a number.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/tan"
    },
    {
        "title": "Math.tanh()",
        "summary": "The Math.tanh() function returns the hyperbolic tangent of a number, that is",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/tanh"
    },
    {
        "title": "RegExp.test()",
        "summary": "The test() method executes a search for a match between a regular expression and a specified string. Returns true or false.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test"
    },
    {
        "title": "Promise.then()",
        "summary": "The then() method returns a Promise. It takes up to two arguments",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then"
    },
    {
        "title": "Generator.throw()",
        "summary": "The throw() method resumes the execution of a generator by throwing an error into it and returns an object with two properties done and value.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator/throw"
    },
    {
        "title": "Date.toDateString()",
        "summary": "The toDateString() method returns the date portion of a Date object in human readable form in American English.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toDateString"
    },
    {
        "title": "Number.toExponential()",
        "summary": "The toExponential() method returns a string representing the Number object in exponential notation.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential"
    },
    {
        "title": "Number.toFixed()",
        "summary": "The toFixed() method formats a number using fixed-point notation.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed"
    },
    {
        "title": "Date.toISOString()",
        "summary": "The toISOString() method returns a string in simplified extended ISO format (ISO 8601), which is always 24 or 27 characters long (YYYY-MM-DDTHH:mm:ss.sssZ or ±YYYYYY-MM-DDTHH:mm:ss.sssZ, respectively). The timezone is always zero UTC offset, as denoted by the suffix \"Z\".",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString"
    },
    {
        "title": "Date.toJSON()",
        "summary": "The toJSON() method returns a string representation of the Date object.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toJSON"
    },
    {
        "title": "Date.toLocaleDateString()",
        "summary": "The toLocaleDateString() method returns a string with a language sensitive representation of the date portion of this date. The new locales and options arguments let applications specify the language whose formatting conventions should be used and allow to customize the behavior of the function. In older implementations, which ignore the locales and options arguments, the locale used and the form of the string returned are entirely implementation dependent.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString"
    },
    {
        "title": "String.toLocaleLowerCase()",
        "summary": "The toLocaleLowerCase() method returns the calling string value converted to lower case, according to any locale-specific case mappings.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase"
    },
    {
        "title": "Date.toLocaleString()",
        "summary": "The toLocaleString() method returns a string with a language sensitive representation of this date. The new locales and options arguments let applications specify the language whose formatting conventions should be used and customize the behavior of the function. In older implementations, which ignore the locales and options arguments, the locale used and the form of the string returned are entirely implementation dependent.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString"
    },
    {
        "title": "TypedArray.toLocaleString()",
        "summary": "The toLocaleString() method returns a string representing the elements of the typed array. The elements are converted to strings and are separated by a locale-specific string (such as a comma “,”). This method has the same algorithm as Array.prototype.toLocaleString() and, as the typed array elements are numbers, the same algorithm as Number.prototype.toLocaleString() applies for each element. TypedArray is one of the typed array types here.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toLocaleString"
    },
    {
        "title": "Number.toLocaleString()",
        "summary": "The toLocaleString() method returns a string with a language-sensitive representation of this number.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString"
    },
    {
        "title": "Array.toLocaleString()",
        "summary": "The toLocaleString() method returns a string representing the elements of the array. The elements are converted to Strings using their toLocaleString methods and these Strings are separated by a locale-specific String (such as a comma “,”).",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString"
    },
    {
        "title": "Object.toLocaleString()",
        "summary": "The toLocaleString() method returns a string representing the object. This method is meant to be overridden by derived objects for locale-specific purposes.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString"
    },
    {
        "title": "Date.toLocaleTimeString()",
        "summary": "The toLocaleTimeString() method returns a string with a language sensitive representation of the time portion of this date. The new locales and options arguments let applications specify the language whose formatting conventions should be used and customize the behavior of the function. In older implementations, which ignore the locales and options arguments, the locale used and the form of the string returned are entirely implementation dependent.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString"
    },
    {
        "title": "String.toLocaleUpperCase()",
        "summary": "The toLocaleUpperCase() method returns the calling string value converted to upper case, according to any locale-specific case mappings.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase"
    },
    {
        "title": "String.toLowerCase()",
        "summary": "The toLowerCase() method returns the calling string value converted to lower case.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase"
    },
    {
        "title": "Number.toPrecision()",
        "summary": "The toPrecision() method returns a string representing the Number object to the specified precision.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision"
    },
    {
        "title": "Number.toSource()",
        "summary": "The toSource() method returns a string representing the source code of the object.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toSource"
    },
    {
        "title": "Symbol.toSource()",
        "summary": "The toSource() method returns a string representing the source code of the object.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toSource"
    },
    {
        "title": "Function.toSource()",
        "summary": "The toSource() method returns a string representing the source code of the object.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/toSource"
    },
    {
        "title": "RegExp.toSource()",
        "summary": "The toSource() method returns a string representing the source code of the object.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/toSource"
    },
    {
        "title": "Date.toSource()",
        "summary": "The toSource() method returns a string representing the source code of the object.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toSource"
    },
    {
        "title": "Array.toString()",
        "summary": "The toString() method returns a string representing the specified array and its elements.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString"
    },
    {
        "title": "TypedArray.toString()",
        "summary": "The toString() method returns a string representing the specified array and its elements. This method has the same algorithm as Array.prototype.toString(). TypedArray is one of the typed array types here.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toString"
    },
    {
        "title": "Function.toString()",
        "summary": "The toString() method returns a string representing the source code of the function.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/toString"
    },
    {
        "title": "Error.toString()",
        "summary": "The toString() method returns a string representing the specified Error object.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/toString"
    },
    {
        "title": "RegExp.toString()",
        "summary": "The toString() method returns a string representing the regular expression.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/toString"
    },
    {
        "title": "Symbol.toString()",
        "summary": "The toString() method returns a string representing the specified Symbol object.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toString"
    },
    {
        "title": "Date.toString()",
        "summary": "The toString() method returns a string representing the specified Date object.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toString"
    },
    {
        "title": "Boolean.toString()",
        "summary": "The toString() method returns a string representing the specified Boolean object.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean/toString"
    },
    {
        "title": "Object.toString()",
        "summary": "The toString() method returns a string representing the object.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString"
    },
    {
        "title": "String.toString()",
        "summary": "The toString() method returns a string representing the specified object.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toString"
    },
    {
        "title": "Number.toString()",
        "summary": "The toString() method returns a string representing the specified Number object.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString"
    },
    {
        "title": "Date.toTimeString()",
        "summary": "The toTimeString() method returns the time portion of a Date object in human readable form in American English.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toTimeString"
    },
    {
        "title": "Date.toUTCString()",
        "summary": "The toUTCString() method converts a date to a string, using the UTC time zone.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toUTCString"
    },
    {
        "title": "String.toUpperCase()",
        "summary": "The toUpperCase() method returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one).",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase"
    },
    {
        "title": "String.Trim()",
        "summary": "The trim() method removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim"
    },
    {
        "title": "String.trimEnd()",
        "summary": "The trimEnd() method removes whitespace from the end of a string. trimRight() is an alias of this method.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd"
    },
    {
        "title": "String.trimStart()",
        "summary": "The trimStart() method removes whitespace from the beginning of a string. trimLeft() is an alias of this method.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart"
    },
    {
        "title": "Math.trunc()",
        "summary": "The Math.trunc() function returns the integer part of a number by removing any fractional digits.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc"
    },
    {
        "title": "Date.UTC()",
        "summary": "The Date.UTC() method accepts the same parameters as the Date constructor, but treats them as UTC. It returns the number of milliseconds since January 1, 1970, 00:00:00 UTC.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/UTC"
    },
    {
        "title": "Array.unshift()",
        "summary": "The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift"
    },
    {
        "title": "WebAssembly.validate()",
        "summary": "The WebAssembly.validate() function validates a given typed array of WebAssembly binary code, returning whether the bytes form a valid wasm module (true) or not (false).",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/validate"
    },
    {
        "title": "Date.valueOf()",
        "summary": "The valueOf() method returns the primitive value of a Date object.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/valueOf"
    },
    {
        "title": "Number.valueOf()",
        "summary": "The valueOf() method returns the wrapped primitive value of a Number object.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/valueOf"
    },
    {
        "title": "Object.valueOf()",
        "summary": "The valueOf() method returns the primitive value of the specified object.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf"
    },
    {
        "title": "Boolean.valueOf()",
        "summary": "The valueOf() method returns the primitive value of a Boolean object.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean/valueOf"
    },
    {
        "title": "String.valueOf()",
        "summary": "The valueOf() method returns the primitive value of a String object.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/valueOf"
    },
    {
        "title": "Symbol.valueOf()",
        "summary": "The valueOf() method returns the primitive value of a Symbol object.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/valueOf"
    },
    {
        "title": "Set.values()",
        "summary": "The values() method returns a new Iterator object that contains the values for each element in the Set object in insertion order.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/values"
    },
    {
        "title": "Map.values()",
        "summary": "The values() method returns a new Iterator object that contains the values for each element in the Map object in insertion order.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/values"
    },
    {
        "title": "Array.values()",
        "summary": "The values() method returns a new Array Iterator object that contains the values for each index in the array.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values"
    },
    {
        "title": "TypedArray.values()",
        "summary": "The values() method returns a new Array Iterator object that contains the values for each index in the array.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/values"
    },
    {
        "title": "Object.values()",
        "summary": "The Object.values() method returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop (the difference being that a for-in loop enumerates properties in the prototype chain as well).",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values"
    },
    {
        "title": "Atomics.wait()",
        "summary": "The static Atomics.wait() method verifies that a given position in an Int32Array still contains a given value and if so sleeps, awaiting a wakeup or a timeout. It returns a string which is either \"ok\", \"not-equal\", or \"timed-out\".",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/wait"
    },
    {
        "title": "Debug.write()",
        "summary": "The debug.write function sends strings to the script debugger.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Microsoft_Extensions/Debug/write"
    },
    {
        "title": "Debug.writeln()",
        "summary": "The debug.writeln function sends strings to the script debugger, followed by a newline character.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Microsoft_Extensions/Debug/writeln"
    },
    {
        "title": "Atomics.xor()",
        "summary": "The static Atomics.xor() method computes a bitwise XOR with a given value at a given position in the array, and returns the old value at that position. This atomic operation guarantees that no other write happens until the modified value is written back.",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/xor"
    },
    {
        "title": "Reference.Properties_Index()",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Properties_Index"
    },
    {
        "title": "docs.Web()",
        "link": "https://developer.mozilla.org/en-US/docs/Web"
    },
    {
        "title": "docs.Learn()",
        "link": "https://developer.mozilla.org/en-US/docs/Learn"
    },
    {
        "title": "MDN.About()",
        "link": "https://developer.mozilla.org/docs/MDN/About"
    },
    {
        "title": "MDN.Feedback()",
        "link": "https://developer.mozilla.org/en-US/docs/MDN/Feedback"
    },
    {
        "title": "twitter.com.mozdevnet()",
        "link": "https://developer.mozilla.orghttps://twitter.com/mozdevnet"
    },
    {
        "title": "mdn.()",
        "link": "https://developer.mozilla.orghttps://github.com/mdn/"
    },
    {
        "title": "about.()",
        "link": "https://developer.mozilla.orghttps://www.mozilla.org/about/"
    },
    {
        "title": "contact.()",
        "link": "https://developer.mozilla.orghttps://www.mozilla.org/contact/"
    },
    {
        "title": "firefox.?utm_source=developer.mozilla.org&utm_campaign=footer&utm_medium=referral()",
        "link": "https://developer.mozilla.orghttps://www.mozilla.org/firefox/?utm_source=developer.mozilla.org&utm_campaign=footer&utm_medium=referral"
    },
    {
        "title": "twitter.com.mozilla()",
        "link": "https://developer.mozilla.orghttps://twitter.com/mozilla"
    },
    {
        "title": "www.facebook.com.mozilla()",
        "link": "https://developer.mozilla.orghttps://www.facebook.com/mozilla"
    },
    {
        "title": "mozillagram.()",
        "link": "https://developer.mozilla.orghttps://www.instagram.com/mozillagram/"
    }
]

export default function(key){
    console.log(data[key])
    return data[key];
}


