#include <ctype.h>
#include <stdio.h>
#include <string.h>
#include <cs50.h>

int main(void)
{
    string s = get_string("s: ");

    string t = s;

    t[0] = toupper(t[0]);

    printf("s: %s\n, s");
    printf("t: %s\n, t");
}

//Se eu der uma string em s, 
//O output de t será o primeiro caractere em maiúsculo
