/*
 The median of a list of numbers is essentially its middle element after sorting. The same number of
 elements occur after it as before. Given a list of numbers with an odd number of elements, find the median?
 Example
 The sorted array 
Function Description
 . The middle element and the median is 
Complete the findMedian function in the editor below.
 findMedian has the following parameter(s):
 int arr[n]: an unsorted array of integers
 Returns
 int: the median of the array
 Input Format
 The first line contains the integer 
The second line contains 
, the size of 
.
 space-separated integers 
Constraints
 is odd
 Sample Input 0
 7
 0 1 2 4 6 5 3
 Sample Output 0
 3
 Explanation 0
 The sorted . It's middle element is at 
*/

function findMedian(arr) {
  let sortarr = arr.sort((a, b) => a - b);
  return sortarr[Math.floor(sortarr.length / 2)];
}
 