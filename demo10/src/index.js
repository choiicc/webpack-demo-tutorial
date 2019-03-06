import _ from "lodash";
import nums from "./ref.json";

export function numToWord(num){
    return _.reduce(nums, (accnum, ref) => {
        return ref.num == num ? ref.word : accnum;
    }, '');
}

export function wordToNum(word){
    return _.reduce(nums, (accnum, ref) => {
        return ref.word == word && word.toLowerCase() ? ref.num : accnum;
    }, -1);
}