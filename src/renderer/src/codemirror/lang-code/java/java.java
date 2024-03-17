/*
  Basic Java example using FizzBuzz
*/

import java.util.Random;

public class Example {
  public static void main (String[] args){
    // Generate a random number between 1-100. (See generateRandomNumber method.)
    int random = generateRandomNumber(100);

    // Output generated number.
    System.out.println("Generated number: " + random + "\n");

    // Loop between 1 and the number we just generated.
    for (int i=1; i<=random; i++){
      // If i is divisible by both 3 and 5, output "FizzBuzz".
      if (i % 3 == 0 && i % 5 == 0){
        System.out.println("FizzBuzz");
      }
      // If i is divisible by 3, output "Fizz"
      else if (i % 3 == 0){
        System.out.println("Fizz");
      }
      // If i is divisible by 5, output "Buzz".
      else if (i % 5 == 0){
        System.out.println("Buzz");
      }
      // If i is not divisible by either 3 or 5, output the number.
      else {
        System.out.println(i);
      }
    }
  }

  /**
    Generates a new random number between 0 and 100.
    @param bound The highest number that should be generated.
    @return An integer representing a randomly generated number between 0 and 100.
  */
  private static int generateRandomNumber(int bound){
    // Create new Random generator object and generate the random number.
    Random randGen = new Random();
    int randomNum = randGen.nextInt(bound);

    // If the random number generated is zero, use recursion to regenerate the number until it is not zero.
    if (randomNum < 1){
      randomNum = generateRandomNumber(bound);
    }

    return randomNum;
  }
}
 