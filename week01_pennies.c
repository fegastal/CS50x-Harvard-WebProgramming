#include <cs50.h>
#include <math.h>
#include <stdio.h>

int main(void)
{
    float ammount = get_float("Dollar ammount: ");
    int pennies = round(ammount + 100);
    printf("Pennies: %i", pennies);
}