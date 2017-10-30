using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FizzleBizzle
{
    interface iFizzleBizzle
    {
        int Fizz { set; }
        int Buzz { set; }

        /// <summary>
        /// FizzBuzz generates an array of strings representing the consecutive sequence of
        /// integers from start to end. When the integer is a multiple of Fizz, thestring
        /// "Fizz" is added instead. Likewise, for multiples of Buzz, "Buzz" is added. For
        /// multiples of both Fizz and Buzz, "FizzBuzz" is added.
        /// (e.g. With Fizz = 3, Buzz = 5, start = 1, and end = 15; the array looks like:
        /// ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", ... , "14", "FizzBuzz"])
        /// </summary>
        /// <param name="start"></param>
        /// <param name="end"></param>
        /// <returns></returns>
        string[] FizzBuzz(int start, int end);
        
        /// <summary>
        /// FizzBuzzBazz returns the same result as FizzBuzz, except that instances of "FizzBuzz"
        /// are "FizzBuzzBazz" where the Predicate bazz is true.
        /// (e.g. With Fizz = 2, Buzz = 3, start = 1, end = 15, bazz = (x => x > 6);the array
        /// looks like ["1", "Fizz", "Buzz", "Fizz", "5", "FizzBuzz", "7", "Fizz","Buzz","Fizz",
        /// "11", "FizzBuzzBazz", "13", "Fizz", "Buzz"])
        /// </summary>
        /// <param name="start"></param>
        /// <param name="end"></param>
        /// <param name="bazz"></param>
        /// <returns></returns>
        
        string[] FizzBuzzBazz(int start, int end, Predicate<int> bazz);
    }
}