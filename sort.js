function swap(arr, e1, e2){
    let temp = arr[e1];
    arr[e1] = arr[e2];
    arr[e2] = temp;
}

function bubbleSort(arr){
    let swapped = false;
    let len = arr.length;

    for(let i = 0; i < len; i++){
        swapped = false;
        for(let j = 0; j<len; j++){
            if(arr[j] > arr[j+1]){
                swap(arr, j, j+1);
                swapped = true;
            }
        }
    }
    if (!swapped){
        return arr;
    }
}

function merge(a, b){
    var sorted_arr = [];
    while(a.length && b.length){
        if(a[0] < b[0]){
            sorted_arr.push(a.shift())
        }
        else {
            sorted_arr.push(b.shift());
        }
    }
    while(a.length){
        sorted_arr.push(a.shift());
    }
    while(b.length){
        sorted_arr.push(b.shift());
    }

    return sorted_arr;
}

function mergeSort(arr){
    const half_len = Math.floor(arr.length / 2);
    if(arr.length < 2) return arr; //Base case

    const left_arr = arr.slice(0, half_len);
    const right_arr = arr.slice(half_len, arr.length);
    const left_sort = mergeSort(left_arr);
    const right_sort = mergeSort(right_arr);

    return merge(left_sort, right_sort);
}

function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let curr = arr[i];
        let j = i-1;
        while(j > -1 && curr<arr[j]){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = curr;
    }
    return arr;
}

function selectionSort(arr){
    for(let i = 0; i<arr.length; i++){
        let min = i;
        for(let j = i+1; j<arr.length; j++){
            if(arr[min] > arr[j]){
                min = j;
            }
        }
        if(min !== i){
            swap(arr, i, min);
        }
    }
    return arr;
}


//Testing
console.log(bubbleSort([1,3,5,6,34,6,7,245,7, 56]));
console.log(mergeSort([1, 56,3,5,6,34,6,7,245,7]));
console.log(insertionSort([1,3,5, 56,6,34,6,7,245,7]));
console.log(selectionSort([56,1,3,5,6,34,6,7,245,7]));