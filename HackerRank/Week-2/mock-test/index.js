/*
* Complete the 'flippingMatrix' function below.
*
* The function is expected to return an INTEGER.
* The function accepts 2D_INTEGER_ARRAY matrix as parameter.
*/
function flippingMatrix(matrix) {

    let n = matrix.length/2
    let maxVal = 0
   
    for(let i = 0; i<n; i++){
    for(let j = 0; j<n; j++){
    let topleft = matrix[i][j]
    let topright = matrix[i][2*n-j-1]
    let bottomleft = matrix[2*n-i-1][j]
    let bottomright = matrix[2*n-i-1][2*n-j-1]
   
    maxVal += Math.max(topleft, topright, bottomleft, bottomright)
    }
    }
   
    return maxVal
   }
   