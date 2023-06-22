
//QUICKSORT

function quickSort(array) {
    function sort(arr, start, end) {
        if (start < end) {
            let pivot = arr[start];
            let i = start + 1;
            let j = end;
            let aux = 0;
            while (i <= j) {
                if (arr[i] <= pivot) i++;
                else if (arr[j] > pivot) j--;
                else {
                    aux = arr[i];
                    arr[i] = arr[j];
                    arr[j] = aux;
                    i++;
                    j--;
                }
            }
            aux = pivot;
            arr[start] = arr[j];
            arr[j] = aux;

            sort(arr, start, j - 1);
            sort(arr, j + 1, end);
        }
    }
    sort(array, 0, array.length - 1);
    return array;
}


//MERGESORT

function merge(left, right) {
    let arr = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift());
        } else arr.push(right.shift());
    }
    return arr.concat(left, right);
}

function recurse(arr, start, end) {
    if (start >= end) return [arr[start]];
    let mid = Math.floor((start + end) / 2);
    let left = recurse(arr, start, mid);
    let right = recurse(arr, mid + 1, end);

    return merge(left, right);
}
function mergeSort(array) {
    return recurse(array, 0, array.length - 1);
}

let arr = [5, 2, 4, 1, 8];

console.log(mergeSort(arr));
console.log(recurse(arr, 0, arr.length - 1));



//!Otra opcion de MERGE
// function recurse(arr, start, end) {
//     if (end - start < 1) {
//         return [arr[start]];
//     }

//     let mid = Math.floor((start + end) / 2);
//     let left = recurse(arr, start, mid);
//     let right = recurse(arr, mid + 1, end);

//     let myArr = [];
//     let i = 0;
//     let j = 0;
//     let m = left.length;
//     let n = right.length;

//     while (i < m && j < n) {
//         if (left[i] < right[j]) {
//             myArr.push(left[i]);
//             i++;
//         } else {
//             myArr.push(right[j]);
//             j++;
//         }
//     }
//     while (i < m) {
//         myArr.push(left[i]);
//         i++;
//     }
//     while (j < n) {
//         myArr.push(right[j]);
//         j++;
//     }
//     return myArr;
// }
// function mergeSort(array) {

//     return recurse(array, 0, array.length - 1);
// }

// let arr = [5, 1, 4, 2, 8];
// console.log(mergeSort(arr));