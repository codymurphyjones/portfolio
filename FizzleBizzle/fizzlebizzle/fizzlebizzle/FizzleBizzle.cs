using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FizzleBizzle
{
    public class FizzleBizzle : iFizzleBizzle
    {
        public FizzleBizzle()
        {
            Fizz = 3;
            Buzz = 5;
        }

        public int Fizz { get; set; }
        public int Buzz { get; set; }

        public string[] FizzBuzz(int start, int end)
        {
            end = end + 1;
            string[] fizzbang = new string[end - start];
            for (int i = start; i < end; i++)
            {
                if (i % Fizz == 0)
                {
                    fizzbang[i - start] += "Fizz";
                }

                if (i % Buzz == 0)
                {
                    fizzbang[i - start] += "Buzz";
                }

                if (fizzbang[i - start] == null)
                    fizzbang[i - start] = i.ToString();
            }

            return fizzbang;
        }


        public string[] FizzBuzzBazz(int start, int end, Predicate<int> bazz)
        {
            end = end + 1;
            string[] fizzbang = new string[end - start];
            for (int i = start; i < end; i++)
            {
                if (i % Fizz == 0)
                {
                    fizzbang[i - start] += "Fizz";
                }

                if (i % Buzz == 0)
                {
                    fizzbang[i - start] += "Buzz";
                }

                if (bazz.Invoke(i) && fizzbang[i - start] == "FizzBuzz")
                    fizzbang[i - start] += "Bazz";

                if (fizzbang[i - start] == null)
                    fizzbang[i - start] = i.ToString();
            }

            return fizzbang;
        }
    }
}