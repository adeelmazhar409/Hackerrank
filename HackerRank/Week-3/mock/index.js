function getTotalX(a, b) {
   // Helper function to calculate the Greatest Common Divisor (GCD)
   function gcd(x, y) {
   while (y !== 0) {
   let temp = y;
   y = x % y;
   x = temp;
   }
   return x;
   }
   // Helper function to calculate the Least Common Multiple (LCM)
   function lcm(x, y) {
   return (x * y) / gcd(x, y);
   }
   // Calculate the LCM of array a
   let lcmA = a[0];
   for (let i = 1; i < a.length; i++) {
   lcmA = lcm(lcmA, a[i]);
   }
   // Calculate the GCD of array b
   let gcdB = b[0];
   for (let i = 1; i < b.length; i++) {
   gcdB = gcd(gcdB, b[i]);
   }
   // Count the number of multiples of lcmA that evenly divide gcdB
   let count = 0;
   for (let i = lcmA; i <= gcdB; i += lcmA) {
   if (gcdB % i === 0) {
   count++;
   }
   }
   return count;
  }