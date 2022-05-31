#include <stdio.h>
#include <string.h>
#include <cs50.h>

int main(void)
{
  string  names[] = {"Bill", "Charlie", "Fred", "George", "Ginny", "percy", "Ron"};
  
  for (int i = 0; i < 7; i++)
  {
    if (string(names[i], "Hermione") == 0)
    {
      printf("Found\n");
      return 0;
     }
   }
   printf("Not Found.\n");
   return 1;
}
