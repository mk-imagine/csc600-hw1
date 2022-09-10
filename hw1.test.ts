import { multArray, maxArray, longestWord, shortestWord, shortestAndLongestWord,
    impureNegate, copyNumArray, pureNegate, copyArray, copyDictionary,
    copyTsRecord, copyGenericTsRecord, } from "./hw1.js";

/*
*   This suite of tests is incomplete. A separate 
*   test suite was created before work was started
*   on this suite.
*/

describe("1. Fun with TypeScript Arrays (40 pts):", () => {
    const numArray = [[], [1,2,3], [-1, -2, 3, 10]];

    const multRes = [1, 6, 60];
    test("1a. multArray", () => {
        for (let i = 0; i < numArray.length; i++) {
            expect(multArray(numArray[i])).toBe(multRes[i]);
        }
    });

    const maxRes = [Number.POSITIVE_INFINITY, 3, 10];
    test("1b. maxArray", () => {
        for (let i = 0; i < numArray.length; i++) {
            expect(maxArray(numArray[i])).toBe(maxRes[i]);
        }
    });

    const strArray = [[""], ["hello", "world"], ["csc600", "is", "fun"]];

    const lwRes = ["", "world", "csc600"];
    test("1c. longestWord", () => {
        for (let i = 0; i < strArray.length; i++) {
            expect(longestWord(strArray[i])).toBe(lwRes[i]);
        }
    });

    const swRes = ["", "hello", "is"];
    test("1d. shortestWord", () => {
        for (let i = 0; i < strArray.length; i++) {
            expect(shortestWord(strArray[i])).toBe(swRes[i]);
        }
    });

    const slRes = [["", ""], ["hello", "world"], ["is", "csc600"]];
    test("1e. shortestAndLongestWord", () => {
        for (let i = 0; i < strArray.length; i++) {
            expect(shortestAndLongestWord(strArray[i])).toEqual(slRes[i]);
        }
    });
});

describe("2. Pure Functions (30 pts):", () => {
    const numArray = [[1,2,3], [-1, -2, 3, 10], [-1.27, -5, 0, 0.01]];
    const numArray0 = [[1,2,3], [-1, -2, 3, 10], [-1.27, -5, 0, 0.01]];

    const inRes = [[[-1, -2, -3], [1, 2, 3], [-1, -2, -3]], 
                [[1, 2, -3, -10], [-1, -2, 3, 10], [1, 2, -3, -10]],
                [[1.27, 5, -0, -0.01],[-1.27, -5, 0, 0.01], [1.27, 5, -0, -0.01]]];
    test("2a. impureNegate", () => {
        for (let i = 0; i < numArray.length; i++) {
            for (let j = 0; j < inRes[0].length; j++) {
                impureNegate(numArray[i]);
                expect(numArray[i]).toEqual(inRes[i][j]);
            }
        }
        for (let i = 0; i < numArray0.length; i++) {
            impureNegate(numArray0[i]);
            expect(numArray0[i]).toEqual(numArray[i]);
        }
    });

    // test("2b. copyNumArray", () => {
    //     for (let i = 0; i < numArray.length; i++) {
    //         for (let j = 0; j < inRes[0].length; j++) {
    //             impureNegate(numArray[i]);
    //             expect(numArray[i]).toEqual(inRes[i][j]);
    //         }
    //     }
    //     for (let i = 0; i < numArray0.length; i++) {
    //         impureNegate(numArray0[i]);
    //         expect(numArray0[i]).toEqual(numArray[i]);
    //     }
    // });
});