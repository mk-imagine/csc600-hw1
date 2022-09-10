"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hw1_js_1 = require("./hw1.js");
const mArrayIn = [[], [1, 2, 3], [-1, -2, 3, 10]];
const multResult = [1, 6, 60];
console.log("Testing multArray:");
for (let i = 0; i < mArrayIn.length; i++) {
    console.log(`\tArray ${i + 1}: ${(0, hw1_js_1.multArray)(mArrayIn[i]) == multResult[i] ? "Success" : "Fail"}`);
}
const maxResult = [Number.POSITIVE_INFINITY, 3, 10];
console.log("Testing maxArray:");
for (let i = 0; i < mArrayIn.length; i++) {
    console.log(`\tArray ${i + 1}: ${(0, hw1_js_1.maxArray)(mArrayIn[i]) == maxResult[i] ? "Success" : "Fail"}`);
}
/* ----------------------------------------------------- **
### 1c. Complete the function definition below. (8 pts)

`longestWord` takes an array of strings and returns the longest
word found. If there are multiple words of the same length, return
the last one found.

Example:
  longestWord([]) = ""

Example:
  longestWord(["hello", "world"]) = "world"

Example:
  longestWord(["csc600", "is", "fun"]) = "csc600"

** ----------------------------------------------------- */
const wdArrayIn = [[], ["hello", "world"], ["csc600", "is", "as", "fun", "as", "csc620"]];
const lwResult = ["", "world", "csc620"];
console.log("Testing longestWord:");
for (let i = 0; i < wdArrayIn.length; i++) {
    console.log(`\tArray ${i + 1}: ${(0, hw1_js_1.longestWord)(wdArrayIn[i]) == lwResult[i] ? "Success" : "Fail"}`);
}
/* ----------------------------------------------------- **
### 1d. Complete the function definition below. (8 pts)

`shortestWord` takes an array of strings and returns the shortest
word found. If there are multiple words of the same length, return
the first one found.

Example:
  shortestWord([]) = ""

Example:
  shortestWord(["hello", "world"]) = "hello"

Example:
  shortestWord(["csc600", "is", "fun"]) = "is"
** ----------------------------------------------------- */
const swResult = ["", "hello", "is"];
console.log("Testing shortestWord:");
for (let i = 0; i < wdArrayIn.length; i++) {
    console.log(`\tArray ${i + 1}: ${(0, hw1_js_1.shortestWord)(wdArrayIn[i]) == swResult[i] ? "Success" : "Fail"}`);
}
/* ----------------------------------------------------- **
### 1e. Complete the function definition below. (8 pts)

`shortestAndLongestWord` takes an array of strings and returns both
the shortest and longest words found.
1. If there are multiple shortest words of the same length, return
   the first one found.
2. If there are multiple longest words of the same length, return
   the last one found.
Thus `shortestAndLongestWord` returns a tuple of 2 strings.

Example:
  shortestAndLongestWord([]) = ["", ""]

Example:
  shortestAndLongestWord(["hello", "world"]) = ["hello", "world"]

Example:
  shortestAndLongestWord(["csc600", "is", "fun"]) = ["is", "csc600"]
** ----------------------------------------------------- */
let slwResult = [["", ""], ["hello", "world"], ["is", "csc620"]];
console.log("Testing shortestAndLongestWord:");
let slwinput = (0, hw1_js_1.shortestAndLongestWord)(wdArrayIn[0]);
for (let i = 0; i < wdArrayIn.length; i++) {
    console.log(`\tArray ${i + 1}: ${(0, hw1_js_1.shortestAndLongestWord)(wdArrayIn[i])[0] === slwResult[i][0] &&
        (0, hw1_js_1.shortestAndLongestWord)(wdArrayIn[i])[1] === slwResult[i][1] ? "Success" : "Fail"}`);
}
/* ==========================================================================  **
## 2. Pure Functions (30 pts)


This problem is a warmup to get you familiar with the concept of a **pure** function.
As a reminder, a pure function is a function that always produces the same outputs
given the same inputs. Also pure functions do not modify their arguments. Pure functions
are very valuable in distributed and collaborative settings because different consumers of
pure functions can trust that their own data will not be clobbered by calling a pure function.

Throughout these problems, please just use basic TypeScript features:
for loops, conditionals, basic arithmetic expressions, basic string operations.

** ============================================================================ */
/* ----------------------------------------------------- **
### 2a. Complete the function definition below. (10 pts)

`impureNegate` takes an array of numbers and replaces each element in the array
with its negation. Thus `impureNegate` is not a pure function. This style of
coding might be what you are familiar with from an imperative programming (e.g.,
C/Java) background. Note that `impureNegate` returns nothing, i.e., has
return type of `void`.

Example:
  const arr = [1, 2, 3];
  impureNegate(arr);
  console.log(arr);
  >> [-1, -2, -3]

  impureNegate(arr);
  console.log(arr);
  >> [1, 2, 3]

  impureNegate(arr);
  console.log(arr);
  >> [-1, -2, -3]

  const arr2 = [1, 2, 3];
  impureNegate(arr2);
  console.log(arr2);
  >> [-1, -2, -3]
** ----------------------------------------------------- */
const arr0 = [1, 2, 3];
const arr1 = [1, 2, 3];
console.log("Testing impureNegate:");
console.log(`\tArray0 after initialization:\t${arr0}`);
for (let i = 1; i < 4; i++) {
    (0, hw1_js_1.impureNegate)(arr0);
    console.log(`\tArray0 after impureNegate #${i}:\t${arr0}`);
}
(0, hw1_js_1.impureNegate)(arr1);
console.log(`\n\tArray1 after impureNegate:\t${arr1}`);
/* ----------------------------------------------------- **
### 2b. Complete the function definition below. (10 pts)

`copyNumArray` takes an array of numbers and returns a duplicate.
`copyNumArray` is an example of a *pure* function. In particular,
creating a copy of an input data structure is a good heuristic for
making a function pure. However, creating a copy of a data structure
is not necessary to make a function pure.

Example:
  const arr1 = [1, 2, 3];
  const arr2 = copyNumArray(arr1);
  impureNegate(arr1);
  console.log(arr1);
  >> [-1, -2, -3]

  console.log(arr2);
  >> [1, 2, 3]

Example:
  const arr = [1, 2, 3, 4];
  console.log(impureNegate(copyNumArray(arr)));
  >> undefined

  const arr2 = copyNumArray(arr);
  impureNegate(arr2);
  console.log(arr2);
  >> [-1, -2, -3, -4]
  console.log(arr);
  >> [1, 2, 3, 4]
** ----------------------------------------------------- */
const arr2 = [1, 2, 3];
console.log("Testing copyNumArray:");
console.log("  Test 1:");
console.log(`\tArray2 after initialization:\t\t${arr2}`);
const arr3 = (0, hw1_js_1.copyNumArray)(arr2);
console.log(`\tArray3 after copyNumArray(arr2):\t${arr3}`);
(0, hw1_js_1.impureNegate)(arr2);
console.log(`\tArray2 after impureNegate:\t\t${arr2}`);
console.log(`\tValue of Array3:\t\t\t${arr3}`);
console.log("  Test 2:");
const arr4 = [1, 2, 3, 4];
console.log(`\timpureNegate(copyNumArray(arr4)):\t${(0, hw1_js_1.impureNegate)((0, hw1_js_1.copyNumArray)(arr4))}`);
const arr5 = (0, hw1_js_1.copyNumArray)(arr4);
console.log(`\tArray5 after copyNumArray(arr4):\t${arr5}`);
(0, hw1_js_1.impureNegate)(arr5);
console.log(`\tArray5 after impureNegate:\t\t${arr5}`);
console.log(`\tValue of Array4:\t\t\t${arr4}`);
/* ----------------------------------------------------- **
### 2c. Complete the function definition below. (10 pts)

`pureNegate` is a *pure* function that increments each element of an array
without modifying the array passed in. Now would be a good time to compare
and contrast `pureNegate` and `impureNegate` to see how different the
reasoning with a pure and impure function is.

Example:
  const arr = [1, 2, 3];
  console.log(pureNegate(arr));
  >> [-1, -2, -3]
  console.log(arr);
  >> [1, 2, 3]
  console.log(pureNegate(arr));
  >> [-1, -2, -3]
  console.log(arr);
  >> [1, 2, 3]
** ----------------------------------------------------- */
const arr6 = [1, 2, 3];
console.log("Testing pureNegate:");
console.log(`\tArray6 after initialization:\t${arr6}`);
console.log(`\tpureNegate #1 of Array6:\t${(0, hw1_js_1.pureNegate)(arr6)}`);
console.log(`\tArray6 after pureNegate #1:\t${arr6}`);
console.log(`\tpureNegate #2 of Array6:\t${(0, hw1_js_1.pureNegate)(arr6)}`);
console.log(`\tArray6 after pureNegate #2:\t${arr6}`);
/* ==========================================================================  **
## 3. Other TypeScript Features (30 pts)

This problem is a warmup to get you familiar with other TypeScript features,
including generics, dictionary types, and record types. You should have encountered
these language features in other languages (e.g., C/Java). We'll also get more practice
with writing pure functions.

** ============================================================================ */
/* ----------------------------------------------------- **
### 3a. Complete the function definition below. (10 pts)

`copyArray` is a *generic* and *pure* function that returns a copy of an array.

Example:
  const arr = ["csc600", "is", "fun"];
  const arr2 = copyArray(arr);
  arr[0] = "life";
  console.log(arr2);
  >> ["csc600", "is", "fun"]

Example:
  const arr = [1, 2, 3, 4];
  const arr2 = copyArray(arr);
  arr[0] = -1;
  console.log(arr2);
  >> [1, 2, 3, 4]
** ----------------------------------------------------- */
console.log("Testing copyArray:");
console.log("  Test 1:");
const arr3a0 = ["csc600", "is", "fun"];
const arr3a1 = (0, hw1_js_1.copyArray)(arr3a0);
arr3a0[0] = "life";
console.log(`\tArray1: [${arr3a0}]`);
console.log(`\tArray2: [${arr3a1}]`);
console.log("  Test 2:");
const arr3a2 = [1, 2, 3, 4];
const arr3a3 = (0, hw1_js_1.copyArray)(arr3a2);
arr3a2[0] = -1;
console.log(`\tArray3: [${arr3a2}]`);
console.log(`\tArray4: [${arr3a3}]`);
/* ----------------------------------------------------- **
### 3b. Complete the function definition below. (10 pts)

`copyDictionary` is a *pure* function that returns a copy of a dictionary.

Example:
  const dict = {
      "hello": 1,
      "world": 2
  };
  const dict2 = copyDictionary(dict);
  dict["hello"] = -1;
  console.log(dict2);
  >> {"hello": 1, "world": 2}


Hint: you may want to use the code below to traverse a dictionary

for (const [key, val] of Object.entries(dict)) {
    console.log(key, val);
}
>> "hello" 1
>> "world" 2
** ----------------------------------------------------- */
console.log("Testing copyDictionary:");
const dict3b0 = {
    "hello": 1,
    "world": 2
};
// console.log(`\tdict:\t\t\t{"${Object.keys(dict3b0)[0]}": ${dict3b0["hello"]}, "${Object.keys(dict3b0)[1]}": ${dict3b0["world"]}}`)
const dict3b2 = (0, hw1_js_1.copyDictionary)(dict3b0);
// console.log(`\tdict2 (copy of dict):\t{"${Object.keys(dict3b2)[0]}": ${dict3b2["hello"]}, "${Object.keys(dict3b2)[1]}": ${dict3b2["world"]}}`)
dict3b0["hello"] = -1;
// console.log(`\tdict after modified:\t{"${Object.keys(dict3b0)[0]}": ${dict3b0["hello"]}, "${Object.keys(dict3b0)[1]}": ${dict3b0["world"]}}`)
// console.log(`\tdict2:\t\t\t{"${Object.keys(dict3b2)[0]}": ${dict3b2["hello"]}, "${Object.keys(dict3b2)[1]}": ${dict3b2["world"]}}`)
console.log(dict3b2);
/* ----------------------------------------------------- **
### 3c. Complete the function definition below. (10 pts)

`copyTsRecord` returns a copy of a user-defined data structure.
It is a *pure* and *generic* function.
Make sure to also copy the dictionary! Hint: can you use a function that you previously defined?

Example:
  const rec = {
    myStr: "hello",
    myNum: 42,
    myDict: {
        "csc600": -1,
        "is": -2,
        "fun": 3
    }
  };
  const rec2 = copyTsRecord(rec);
  rec.myStr = "foobar";
  console.log(rec2);
  >> {myStr: "hello", myNum: 42, myDict: {"csc600": -1, "is": -2, "fun": 3}}
** ----------------------------------------------------- */
console.log("Testing copyTsRecord:");
const rec = {
    myStr: "hello",
    myNum: 42,
    myDict: {
        "csc600": -1,
        "is": -2,
        "fun": 3
    }
};
const rec2 = (0, hw1_js_1.copyTsRecord)(rec);
rec.myStr = "foobar";
console.log(rec);
console.log(rec2);
/* ==========================================================================  **
## Bonus. (10 pts)

This is a bonus that introduces a generic dictionary and record.
It behaves just like tsRecord, except that the dictionary can contain values of
any type T. Write the `copyGenericTsRecord` function. Make sure to also copy the
dictionary!
** ============================================================================ */
console.log("Testing copyGenericTsRecord:");
const rec3 = {
    myStr: "hello",
    myNum: 42,
    myDict: {
        "csc600": "notCSC620",
        "is": -2,
        "fun": 3
    }
};
const rec4 = (0, hw1_js_1.copyGenericTsRecord)(rec3);
rec3.myStr = "foobar";
console.log(rec3);
console.log(rec4);
